# Fix all Giupviec files: add CSS styles matching Khachhang + fix nav links
$giupviecDir = "d:\chioi\Giupviec"
$files = Get-ChildItem $giupviecDir -Filter "*.html"

# CSS block to inject (matching Khachhang style)
$cssToAdd = @'
        body { font-family: 'Be Vietnam Pro', sans-serif; }
        .orange-gradient {
            background: linear-gradient(135deg, #ff7e36 0%, #a04100 100%);
        }
        .teal-gradient {
            background: linear-gradient(135deg, #00b1da 0%, #006780 100%);
        }
        .soft-shadow {
            box-shadow: 0 4px 12px rgba(255, 126, 54, 0.08);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        /* Smooth transitions */
        a, button { transition: all 0.2s ease; }
        /* Card hover effect */
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
'@

# Nav bar replacement - floating pill style like Khachhang
$navOld1 = 'class="fixed bottom-6 left-md right-md z-50 flex justify-around items-center h-16 max-w-md mx-auto bg-surface-container shadow-lg backdrop-blur-sm rounded-full"'
$navNew1 = 'class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 flex justify-around items-center px-4 py-3 rounded-full bg-white shadow-xl border border-surface-container-high"'

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # 1. Add CSS if missing
    if ($content -notmatch 'orange-gradient') {
        $content = $content -replace '</style>\s*</head>', "$cssToAdd`n    </style>`n</head>"
        # If no </style> tag found, inject before </head>
        if ($content -notmatch 'orange-gradient') {
            $styleBlock = "<style>`n$cssToAdd`n    </style>"
            $content = $content -replace '</head>', "$styleBlock`n</head>"
        }
    }
    
    # 2. Fix nav bar style
    $content = $content -replace [regex]::Escape($navOld1), $navNew1
    
    # 3. Fix nav links - point to correct files in same folder
    # Home tab
    $content = $content -replace 'href="#"(.*?)home</span>', 'href="trangchutasker.html"$1home</span>'
    # History tab  
    $content = $content -replace 'href="#"(.*?)history</span>', 'href="lichsudonhang.html"$1history</span>'
    # Statistics tab
    $content = $content -replace 'href="#"(.*?)monitoring</span>', 'href="thunhapvathongke.html"$1monitoring</span>'
    # Profile tab
    $content = $content -replace 'href="#"(.*?)person</span>', 'href="hosocanhan.html"$1person</span>'
    
    # 4. Add gradient background div if this is trangchutasker (like Khachhang trangchu)
    # Already has map bg so skip
    
    Set-Content $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "`nAll Giupviec files updated!"
