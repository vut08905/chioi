# Fix Giupviec nav links properly
$giupviecDir = "d:\chioi\Giupviec"
$files = Get-ChildItem $giupviecDir -Filter "*.html"

# Nav link mapping based on icon text inside the <a> tag
$navLinks = @{
    'trangchutasker.html' = @{ icon = 'home'; label = 'Trang chủ' }
    'lichsudonhang.html' = @{ icon = 'history'; label = 'Lịch sử' }
    'thunhapvathongke.html' = @{ icon = 'monitoring'; label = 'Thống kê' }
    'hosocanhan.html' = @{ icon = 'person'; label = 'Cá nhân' }
}

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Replace each nav link by finding the pattern with specific icon name
    # Home link
    $content = $content -replace '(href=")#(".*?>home</span>)', '${1}trangchutasker.html${2}'
    # History link  
    $content = $content -replace '(href=")#(".*?>history</span>)', '${1}lichsudonhang.html${2}'
    # Statistics link
    $content = $content -replace '(href=")#(".*?>monitoring</span>)', '${1}thunhapvathongke.html${2}'
    # Profile/Person link - be careful not to match other person icons
    $content = $content -replace '(href=")#(".*?>person</span>[\s\S]*?Cá nhân)', '${1}hosocanhan.html${2}'
    
    # Also fix chat link if present
    $content = $content -replace '(href=")#(".*?>chat_bubble</span>)', '${1}chatvoikhachhang.html${2}'
    
    Set-Content $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Fixed nav: $($file.Name)"
}

Write-Host "`nAll Giupviec nav links fixed!"
