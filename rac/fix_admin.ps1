# Fix all Admin files: update sidebar links + enhance CSS
$adminDir = "d:\chioi\Admin"
$files = Get-ChildItem $adminDir -Filter "*.html"

# Mapping from old Stitch folder paths to new file names
$linkMap = @{
    '../b_ng_i_u_khi_n_qu_n_tr_ch_i/code.html' = 'bangdieukhien.html'
    '../qu_n_l_n_h_ng_ch_i_cms/code.html' = 'quanlydonhang.html'
    '../can_thi_p_n_h_ng_ch_i_cms/code.html' = 'canthiepdonhang.html'
    '../qu_n_l_tasker_ch_i_cms/code.html' = 'quanlytasker.html'
    '../qu_n_l_c_d_n_ch_i_cms/code.html' = 'quanlycudan.html'
    '../qu_n_l_v_giao_d_ch_ch_i_cms/code.html' = 'quanlyvigiaodich.html'
    '../h_p_th_ch_i_cms/code.html' = 'hopthu.html'
    '../x_l_khi_u_n_i_ch_i_cms/code.html' = 'xulykhieunai.html'
    '../b_o_c_o_doanh_thu_ch_i_cms/code.html' = 'baocaodoanhthu.html'
}

# Enhanced CSS for web admin
$adminCss = @'
        body { font-family: 'Be Vietnam Pro', sans-serif; }
        /* Smooth scrollbar */
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(160,65,0,0.15); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(160,65,0,0.3); }
        /* Sidebar active indicator animation */
        aside nav a { position: relative; border-radius: 8px; }
        aside nav a:hover { background: rgba(160,65,0,0.06); }
        /* Card subtle animations */
        .stat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .stat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(88,66,56,0.08); }
        /* Table row hover */
        tbody tr { transition: background-color 0.15s ease; }
        tbody tr:hover { background-color: rgba(255,126,54,0.04); }
        /* Button press effect */
        button:active, a:active { transform: scale(0.97); }
        /* Smooth page transitions */
        main { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        /* Orange accent gradient for header elements */
        .admin-gradient { background: linear-gradient(135deg, #ff7e36 0%, #a04100 100%); }
        /* Focus ring for inputs */
        input:focus, select:focus, textarea:focus { 
            outline: none; 
            box-shadow: 0 0 0 2px rgba(160,65,0,0.2); 
        }
'@

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # 1. Replace all old sidebar links with new ones
    foreach ($old in $linkMap.Keys) {
        $new = $linkMap[$old]
        $content = $content -replace [regex]::Escape($old), $new
    }
    
    # 2. Also fix any remaining relative code.html links
    $content = $content -replace '\.\./[a-z_]+/code\.html', '#'
    
    # 3. Add enhanced CSS if not already present
    if ($content -notmatch 'stat-card') {
        # Find the last </style> before </head> and inject
        $content = $content -replace '(</style>\s*)(</head>)', "`$1<style>`n$adminCss`n    </style>`n`$2"
    }
    
    # 4. Add stat-card class to KPI cards
    $content = $content -replace 'shadow-\[0_4px_20px_rgba\(88,66,56,0\.04\)\]', 'shadow-[0_4px_20px_rgba(88,66,56,0.04)] stat-card'
    
    Set-Content $file.FullName -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Fixed: $($file.Name)"
}

Write-Host "`nAll Admin files updated!"
