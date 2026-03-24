git checkout HEAD~1 -- "c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\src\pages\[lang]\index.astro"

$path = "c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\src\pages\[lang]\index.astro"
$lines = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)

$block0 = $lines[0..328]
$block1 = $lines[601..669]
$block2 = $lines[433..600]
$block3 = $lines[670..726]
$block4 = $lines[329..432]
$block5 = $lines[852..($lines.Length - 1)]

for ($i=0; $i -lt $block3.Length; $i++) {
    if ($block3[$i] -ne $null) {
        $block3[$i] = $block3[$i].Replace('<span class="text-purple-600">&lt;head&gt;</span>', '<span class="text-purple-600">&lt;body&gt;</span>')
        $block3[$i] = $block3[$i].Replace('<span class="text-purple-600">&lt;/head&gt;</span>', '<span class="text-purple-600">&lt;/body&gt;</span>')
    }
}

$newLines = @()
$newLines += $block0
$newLines += $block1
$newLines += $block2
$newLines += $block3
$newLines += $block4
$newLines += $block5

[System.IO.File]::WriteAllLines($path, $newLines, [System.Text.Encoding]::UTF8)
Write-Host "Lines reordered!"
