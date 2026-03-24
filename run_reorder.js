const fs = require('fs');

const srcPath = "c:/Users/hudzi/Desktop/Antigravity/chataptorwebsite/src/pages/[lang]/index.astro";
const content = fs.readFileSync(srcPath, 'utf-8');

const UI_MOCKUP_START = '      <!-- UI MOCKUP -->';
const FEATURE_BENTO_START = '      <!-- FEATURE BENTO GRID (Features) -->';
const EARLY_ADOPTERS_START = '      <!-- EARLY ADOPTERS SECTION -->';
const IMPLEMENTATION_START = '      <!-- SEKCJA: WDROŻENIE (Implementation) -->';
const HOW_IT_WORKS_START = '      <!-- SEKCJA: ŚCIEŻKA EKSPANSJI (How it works) -->';
const PRICING_START = '      <!-- PRICING SECTION -->';

const pMockup = content.indexOf(UI_MOCKUP_START);
const pFeatures = content.indexOf(FEATURE_BENTO_START);
const pEarlyAdopters = content.indexOf(EARLY_ADOPTERS_START);
const pImplementation = content.indexOf(IMPLEMENTATION_START);
const pHowItWorks = content.indexOf(HOW_IT_WORKS_START);
const pPricing = content.indexOf(PRICING_START);

if (pMockup === -1 || pFeatures === -1 || pEarlyAdopters === -1 || pImplementation === -1 || pHowItWorks === -1 || pPricing === -1) {
  console.log("Could not find one or more markers.");
  process.exit(1);
}

const beforeMockup = content.slice(0, pMockup);
const mockupBlock = content.slice(pMockup, pFeatures);
const featuresBlock = content.slice(pFeatures, pEarlyAdopters);
const earlyAdoptersBlock = content.slice(pEarlyAdopters, pImplementation);
let implementationBlock = content.slice(pImplementation, pHowItWorks);
const howItWorksBlock = content.slice(pHowItWorks, pPricing);
const pricingAndAfter = content.slice(pPricing);

implementationBlock = implementationBlock
  .replace('<span class="text-purple-600">&lt;head&gt;</span>', '<span class="text-purple-600">&lt;body&gt;</span>')
  .replace('<span class="text-purple-600">&lt;/head&gt;</span>', '<span class="text-purple-600">&lt;/body&gt;</span>');

const newHowItWorks = `      <!-- SEKCJA: ŚCIEŻKA EKSPANSJI (How it works) - ENTERPRISE EDITION -->
      <section id="how-it-works" class="py-20 md:py-32 px-4 md:px-8 w-full relative">
        <div class="max-w-[76rem] mx-auto bg-zinc-950 rounded-[3rem] p-8 md:p-16 relative overflow-hidden ring-1 ring-zinc-800 shadow-[0_0_80px_-20px_rgba(0,0,0,0.5)] leading-relaxed">
          <!-- Ambient Glows -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
          <div class="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div class="text-center mb-16 relative z-10">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight" set:html={t.howItWorks.title}></h2>
            <p class="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">{t.howItWorks.subtitle}</p>
          </div>

          <!-- Enterprise Steps Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <!-- Step 1 -->
            <div class="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl ring-1 ring-white/10 hover:ring-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
              <div class="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="text-xs font-bold text-emerald-400 mb-4 tracking-widest uppercase">{t.howItWorks.step1.label}</div>
              <h3 class="text-xl font-bold text-white mb-3 tracking-tight">{t.howItWorks.step1.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">{t.howItWorks.step1.description}</p>
              
              <!-- Visualization -->
              <div class="bg-black/40 rounded-2xl p-4 ring-1 ring-white/5 mt-auto">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10 flex items-center justify-center text-zinc-300 shadow-xl">
                    <svg class="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-zinc-200">{t.howItWorks.step1.statusReady}</div>
                    <div class="text-xs text-zinc-500 mt-0.5">{t.howItWorks.step1.statusActive}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl ring-1 ring-white/10 hover:ring-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
              <div class="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="text-xs font-bold text-emerald-400 mb-4 tracking-widest uppercase">{t.howItWorks.step2.label}</div>
              <h3 class="text-xl font-bold text-white mb-3 tracking-tight">{t.howItWorks.step2.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">{t.howItWorks.step2.description}</p>
              
              <!-- Visualization -->
              <div class="bg-black/40 rounded-2xl p-4 ring-1 ring-white/5 mt-auto">
                <div class="flex gap-2 flex-wrap mb-3">
                  <span class="px-2 py-1 bg-white/5 rounded text-[10px] font-semibold text-zinc-300 ring-1 ring-white/10 shadow-md">🇩🇪 DE</span>
                  <span class="px-2 py-1 bg-white/5 rounded text-[10px] font-semibold text-zinc-300 ring-1 ring-white/10 shadow-md">🇫🇷 FR</span>
                  <span class="px-2 py-1 bg-white/5 rounded text-[10px] font-semibold text-zinc-300 ring-1 ring-white/10 shadow-md">🇪🇸 ES</span>
                </div>
                <div class="text-xs font-medium text-emerald-400 flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-emerald-400 drop-shadow-[0_0_4px_rgba(52,211,153,0.8)]"></div>{t.howItWorks.step2.global}</div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl ring-1 ring-white/10 hover:ring-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
              <div class="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="text-xs font-bold text-emerald-400 mb-4 tracking-widest uppercase">{t.howItWorks.step3.label}</div>
              <h3 class="text-xl font-bold text-white mb-3 tracking-tight">{t.howItWorks.step3.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">{t.howItWorks.step3.description}</p>
              
              <!-- Visualization -->
              <div class="bg-black/40 rounded-2xl p-4 ring-1 ring-white/5 mt-auto flex flex-col gap-2">
                <div class="text-xs text-zinc-300 font-medium">"{t.howItWorks.step3.exampleMessage}"</div>
                <div class="flex items-center gap-1.5 text-[10px] text-emerald-400 italic border-t border-white/10 pt-2 opacity-80">
                  <svg class="w-3 h-3 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                  {t.howItWorks.step3.exampleTranslation}
                </div>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="group bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl ring-1 ring-white/10 hover:ring-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute top-0 left-8 w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="text-xs font-bold text-emerald-400 mb-4 tracking-widest uppercase">{t.howItWorks.step4.label}</div>
              <h3 class="text-xl font-bold text-white mb-3 tracking-tight">{t.howItWorks.step4.title}</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">{t.howItWorks.step4.description}</p>
              
              <!-- Visualization -->
              <div class="bg-emerald-950/30 rounded-2xl p-4 ring-1 ring-emerald-500/20 mt-auto relative overflow-hidden">
                <div class="text-2xl font-black text-emerald-400 tracking-tighter mb-1 drop-shadow-sm">+40%</div>
                <div class="text-[10px] text-emerald-300/80 font-medium leading-tight">{t.howItWorks.step4.conversionGrowth}</div>
              </div>
            </div>

          </div>
        </div>
      </section>
`;

const newContent = beforeMockup
  + earlyAdoptersBlock
  + featuresBlock
  + implementationBlock
  + mockupBlock
  + newHowItWorks
  + '\\n'
  + pricingAndAfter;

fs.writeFileSync(srcPath, newContent);
console.log("SUCCESS!");
