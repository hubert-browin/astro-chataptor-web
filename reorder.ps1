$content = Get-Content -Path "c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\src\pages\[lang]\index.astro" -Raw

$pMockup = $content.IndexOf("      <!-- UI MOCKUP -->")
$pFeatures = $content.IndexOf("      <!-- FEATURE BENTO GRID (Features) -->")
$pEarlyAdopters = $content.IndexOf("      <!-- EARLY ADOPTERS SECTION -->")
$pImplementation = $content.IndexOf("      <!-- SEKCJA: WDROŻENIE (Implementation) -->")
$pHowItWorks = $content.IndexOf("      <!-- SEKCJA: ŚCIEŻKA EKSPANSJI (How it works) -->")
$pPricing = $content.IndexOf("      <!-- PRICING SECTION -->")

if ($pMockup -eq -1 -or $pFeatures -eq -1 -or $pEarlyAdopters -eq -1 -or $pImplementation -eq -1 -or $pHowItWorks -eq -1 -or $pPricing -eq -1) {
    Write-Host "Could not find one or more markers."
    Exit 1
}

$beforeMockup = $content.Substring(0, $pMockup)
$mockupBlock = $content.Substring($pMockup, $pFeatures - $pMockup)
$featuresBlock = $content.Substring($pFeatures, $pEarlyAdopters - $pFeatures)
$earlyAdoptersBlock = $content.Substring($pEarlyAdopters, $pImplementation - $pEarlyAdopters)
$implementationBlock = $content.Substring($pImplementation, $pHowItWorks - $pImplementation)
$howItWorksBlock = $content.Substring($pHowItWorks, $pPricing - $pHowItWorks)
$pricingAndAfter = $content.Substring($pPricing)

$implementationBlock = $implementationBlock.Replace('<span class="text-purple-600">&lt;head&gt;</span>', '<span class="text-purple-600">&lt;body&gt;</span>')
$implementationBlock = $implementationBlock.Replace('<span class="text-purple-600">&lt;/head&gt;</span>', '<span class="text-purple-600">&lt;/body&gt;</span>')

$newHowItWorks = Get-Content -Path "c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\new_how_it_works.html" -Raw

$newContent = $beforeMockup + $earlyAdoptersBlock + $featuresBlock + $implementationBlock + $mockupBlock + $newHowItWorks + "`n" + $pricingAndAfter

Set-Content -Path "c:\Users\hudzi\Desktop\Antigravity\chataptorwebsite\src\pages\[lang]\index.astro" -Value $newContent -NoNewline -Encoding UTF8
Write-Host "SUCCESS!"
