# Script khởi động tất cả môi trường cho dự án Chị Ơi!

$projectRoot = "d:\chioi"

Write-Host "Đang khởi động Backend (NestJS)..." -ForegroundColor Green
Start-Process "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd $projectRoot\chioi-backend; npm run start:dev" -WindowStyle Normal

Write-Host "Đang khởi động Frontend Admin..." -ForegroundColor Green
Start-Process "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd $projectRoot\Admin; npx http-server -p 8081 -c-1" -WindowStyle Normal

Write-Host "Đang khởi động Frontend Khách Hàng..." -ForegroundColor Green
Start-Process "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd $projectRoot\Khachhang; npx http-server -p 8082 -c-1" -WindowStyle Normal

Write-Host "Đang khởi động Frontend Giúp Việc..." -ForegroundColor Green
Start-Process "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd $projectRoot\Giupviec; npx http-server -p 8083 -c-1" -WindowStyle Normal

Write-Host "Đang khởi động Mobile/Web Flutter (Customer)..." -ForegroundColor Green
Start-Process "powershell.exe" -ArgumentList "-NoExit", "-Command", "cd $projectRoot\chioi_customer; flutter run -d chrome" -WindowStyle Normal

Write-Host "Hoàn tất! Các cửa sổ terminal mới đã được mở cho từng môi trường." -ForegroundColor Cyan
Write-Host "Lưu ý: Bạn cần đảm bảo database PostgreSQL đã được bật (service đang chạy)." -ForegroundColor Yellow
