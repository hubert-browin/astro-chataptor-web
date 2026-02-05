#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import crypto from 'crypto';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content');
const LOCALES = ['pl', 'en', 'de', 'fr', 'es', 'it', 'cs', 'sk'];

const isDryRun = process.argv.includes('--dry-run');

// Lazy initialization of OpenAI client
let openai = null;
function getOpenAI() {
  if (!openai) {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

function computeHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex').slice(0, 16);
}

function extractLangFromFilename(filename) {
  const match = filename.match(/\.([a-z]{2})\.md$/);
  return match ? match[1] : null;
}

function getBaseSlug(filename) {
  return filename.replace(/\.[a-z]{2}\.md$/, '');
}

async function translateContent(content, sourceLang, targetLang) {
  const prompt = `Translate the following Markdown content from ${sourceLang} to ${targetLang}.
Preserve all Markdown formatting, links, and structure.
Only translate the text content, not the frontmatter (which is between ---).
Keep technical terms and brand names (like "Chataptor") unchanged.

Content to translate:
${content}`;

  const response = await getOpenAI().chat.completions.create({
    model: 'gpt-4-turbo-preview',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.3,
  });

  return response.choices[0].message.content;
}

async function processFile(filePath) {
  const filename = path.basename(filePath);
  const sourceLang = extractLangFromFilename(filename);

  if (!sourceLang || !LOCALES.includes(sourceLang)) {
    return [];
  }

  const fileContent = await fs.readFile(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  // Skip if translateTo is not set or is empty array
  if (frontmatter.translateTo === undefined) {
    return [];
  }

  const targetLocales = frontmatter.translateTo === 'all'
    ? LOCALES.filter(l => l !== sourceLang)
    : frontmatter.translateTo.filter(l => l !== sourceLang);

  const sourceHash = computeHash(content);
  const baseSlug = getBaseSlug(filename);
  const dir = path.dirname(filePath);

  const results = [];

  for (const targetLang of targetLocales) {
    const targetFilename = `${baseSlug}.${targetLang}.md`;
    const targetPath = path.join(dir, targetFilename);

    let shouldTranslate = true;
    let existingFrontmatter = {};

    try {
      const existingContent = await fs.readFile(targetPath, 'utf-8');
      const parsed = matter(existingContent);
      existingFrontmatter = parsed.data;

      // Skip if reviewed
      if (existingFrontmatter.reviewed === true) {
        console.log(`⏭️  Skipping ${targetFilename} (reviewed)`);
        shouldTranslate = false;
      }
      // Skip if hash matches
      else if (existingFrontmatter.sourceHash === sourceHash) {
        console.log(`⏭️  Skipping ${targetFilename} (up to date)`);
        shouldTranslate = false;
      }
    } catch {
      // File doesn't exist, needs translation
    }

    if (shouldTranslate) {
      if (isDryRun) {
        console.log(`📝 Would translate: ${filename} → ${targetFilename}`);
        results.push({ source: filename, target: targetFilename, action: 'would_translate' });
      } else {
        console.log(`🔄 Translating: ${filename} → ${targetFilename}`);

        try {
          const translatedContent = await translateContent(content, sourceLang, targetLang);

          const newFrontmatter = {
            ...frontmatter,
            lang: targetLang,
            sourceFile: filename,
            sourceHash,
            reviewed: false,
            translatedAt: new Date().toISOString().split('T')[0],
            translatedBy: 'openai',
          };
          delete newFrontmatter.translateTo;

          const newFileContent = matter.stringify(translatedContent, newFrontmatter);
          await fs.writeFile(targetPath, newFileContent);

          console.log(`✅ Created: ${targetFilename}`);
          results.push({ source: filename, target: targetFilename, action: 'translated' });
        } catch (error) {
          console.error(`❌ Error translating ${targetFilename}:`, error.message);
          results.push({ source: filename, target: targetFilename, action: 'error', error: error.message });
        }
      }
    }
  }

  return results;
}

async function scanDirectory(dir) {
  const results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...await scanDirectory(fullPath));
    } else if (entry.name.endsWith('.md')) {
      results.push(...await processFile(fullPath));
    }
  }

  return results;
}

async function main() {
  console.log(isDryRun ? '🔍 DRY RUN MODE' : '🚀 Starting translation...');
  console.log('');

  if (!process.env.OPENAI_API_KEY && !isDryRun) {
    console.error('❌ OPENAI_API_KEY not set');
    process.exit(1);
  }

  const results = await scanDirectory(CONTENT_DIR);

  console.log('');
  console.log('📊 Summary:');
  console.log(`   Total operations: ${results.length}`);

  if (isDryRun) {
    const wouldTranslate = results.filter(r => r.action === 'would_translate').length;
    console.log(`   Would translate: ${wouldTranslate} files`);
  } else {
    const translated = results.filter(r => r.action === 'translated').length;
    const errors = results.filter(r => r.action === 'error').length;
    console.log(`   Translated: ${translated} files`);
    if (errors > 0) {
      console.log(`   Errors: ${errors} files`);
    }
  }
}

main().catch(console.error);
