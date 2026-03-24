$content = [IO.File]::ReadAllText("c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\src\pages\[lang]\index.astro", [System.Text.Encoding]::UTF8)

$blocks = $content -split "(?m)^\s*<!-- UI MOCKUP -->\s*`r?`n"
$beforeMockup = $blocks[0]
$rest1 = $blocks[1]

$blocks = $rest1 -split "(?m)^\s*<!-- FEATURE BENTO GRID \(Features\) -->\s*`r?`n"
$mockupBlock = $blocks[0]
$rest2 = $blocks[1]

$blocks = $rest2 -split "(?m)^\s*<!-- EARLY ADOPTERS SECTION -->\s*`r?`n"
$featuresBlock = $blocks[0]
$rest3 = $blocks[1]

$blocks = $rest3 -split "(?m)^\s*<!-- SEKCJA: WDROŻENIE \(Implementation\) -->\s*`r?`n"
$earlyAdoptersBlock = $blocks[0]
$rest4 = $blocks[1]

$blocks = $rest4 -split "(?m)^\s*<!-- SEKCJA: ŚCIEŻKA EKSPANSJI \(How it works\) -->\s*`r?`n"
$implementationBlock = $blocks[0]
$rest5 = $blocks[1]

$blocks = $rest5 -split "(?m)^\s*<!-- PRICING SECTION -->\s*`r?`n"
$howItWorksBlock = $blocks[0]
$pricingAndAfter = "      <!-- PRICING SECTION -->`n" + $blocks[1]

$implementationBlock = $implementationBlock -replace '<span class="text-purple-600">&lt;head&gt;</span>', '<span class="text-purple-600">&lt;body&gt;</span>'
$implementationBlock = $implementationBlock -replace '<span class="text-purple-600">&lt;/head&gt;</span>', '<span class="text-purple-600">&lt;/body&gt;</span>'

$newHowItWorks = [IO.File]::ReadAllText("c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\new_how_it_works.html", [System.Text.Encoding]::UTF8)

$newContent = $beforeMockup + "      <!-- EARLY ADOPTERS SECTION -->`n" + $earlyAdoptersBlock + "      <!-- FEATURE BENTO GRID (Features) -->`n" + $featuresBlock + "      <!-- SEKCJA: WDROŻENIE (Implementation) -->`n" + $implementationBlock + "      <!-- UI MOCKUP -->`n" + $mockupBlock + $newHowItWorks + $pricingAndAfter

[IO.File]::WriteAllText("c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\src\pages\[lang]\index.astro", $newContent, [System.Text.Encoding]::UTF8)
Write-Host "Reorder complete!"
