# 📱 DANH SÁCH MÀN HÌNH — CHỊ ƠI!

> **Nguồn dữ liệu:** `chioi_luong_su_kien_chi_tiet.docx` · `chioi_review_usecase.xlsx` · `chioi_wms_mockup.html`
>
> **Tổng:** 18 mã màn hình gốc · 48 Use Cases · 3 luồng người dùng

---

## TỔNG QUAN NHANH

| Luồng | Màu chủ đạo | Số màn hình | Mã màn hình | Số UC |
|---|---|---|---|---|
| 🟠 Khách hàng (Cư dân) | Cam | **14 màn hình** | M01, M03–M15 | 25 UC |
| 🟢 Người giúp việc (Tasker) | Teal | **6 màn hình** | M01–M03, M10, M16–M17 | 14 UC |
| 🟣 Admin (Quản trị viên) | Tím | **1 màn hình (5 tab)** | M18 | 9 UC |

> [!NOTE]
> Một số màn hình **dùng chung** giữa các luồng: M01 (Đăng nhập), M03 (Quên mật khẩu), M10 (Chat). Giao diện giống nhau nhưng tab/vai trò khác nhau.

---

## 🟠 LUỒNG 1: KHÁCH HÀNG (CƯ DÂN) — 14 MÀN HÌNH

### Luồng chính:
```
Đăng nhập (M01) → Trang chủ (M04) → Chọn DV & Đặt (M05/M06/M07) → Theo dõi (M08) → Hoàn tất & Đánh giá (M12) → Ví & Thanh toán (M13/M14)
```

| # | Mã MH | Tên màn hình | File tham chiếu | Mô tả chức năng | UC liên quan |
|---|---|---|---|---|---|
| 1 | **M01** | **Đăng nhập** | `login.php` | Chọn tab Cư dân, nhập SĐT + mật khẩu. Khóa 15 phút sau 5 lần sai. 2FA tùy chọn cho ví >5tr. | UC-KH-01 |
| 2 | **M03** | **Quên mật khẩu / OTP** | `forgot-password.php` | Nhập SĐT → nhận OTP SMS (hiệu lực 5 phút) → đặt mật khẩu mới. Giới hạn 3 lần gửi/30 phút. | UC-KH-02 |
| 3 | **M04** | **Trang chủ** | `index.php` | Hiển thị 4 dịch vụ chính, banner gói gia đình, danh sách Tasker gần bạn. Có thanh tìm kiếm. Empty-state khi không có Tasker, skeleton loading khi mạng chậm. | UC-KH-03, UC-KH-04, UC-KH-05 |
| 4 | **M05** | **Đặt dịch vụ Dọn nhà** | `house-cleaning.php` | Chọn loại dọn → ngày & giờ (đặt trước ≥2h) → số giờ → ghi chú → thanh toán. Cảnh báo trùng đơn. Phụ phí cuối tuần/lễ. | UC-KH-07 |
| 5 | **M06** | **Đặt dịch vụ Trông trẻ** | `babysitting.php` | Nhập số trẻ/tuổi → lưu ý đặc biệt (dị ứng) → ngày giờ → chỉ tìm Tasker có chứng chỉ. Giá: số giờ × 100k. | UC-KH-08 |
| 6 | **M07** | **Đặt dịch vụ Mua hộ WinMart** | `shopping.php` | Chọn cửa hàng → danh sách sản phẩm → địa chỉ giao → ngân sách → đặt. Phí 50k. Vượt ngân sách → Tasker chat xác nhận trước. | UC-KH-09 |
| 7 | **M08** | **Theo dõi tiến trình đơn** | `tracking.php` | 5 bước theo thời gian thực (push + polling 30s). Hiện thông tin Tasker (tên, avatar, số sao). Có nút Chat, Gọi điện, Hủy đơn. SLA cập nhật <10s. | UC-KH-10, UC-KH-12, UC-KH-13 |
| 8 | **M09** | **Lịch sử hoạt động** | `activity.php` | 3 tab theo loại DV + bộ lọc (DV/ngày/Tasker). Xem chi tiết đơn. Export CSV. Empty-state khi chưa có đơn. | UC-KH-14, UC-KH-13 |
| 9 | **M10** | **Chat với Tasker** | `chat.php` | Chat 2 chiều (text + ảnh). Lọc bad-words. Cấm chia sẻ SĐT cá nhân. Lưu 90 ngày. Hiển thị trạng thái offline. | UC-KH-11 |
| 10 | **M11** | **Thông báo** | `notifications.php` | 4 nhóm: Đơn hàng / Ví / Hệ thống / Khuyến mãi. Đánh dấu đã đọc. Có thể tắt từng nhóm trong Cài đặt. | UC-KH-15 |
| 11 | **M12** | **Đánh giá Tasker** | `review.php` | Chọn sao → tags → nhận xét → gửi. Auto-nhắc sau 24h nếu chưa đánh giá. Đánh giá ≤2★ → tự động tạo ticket Admin. | UC-KH-16 |
| 12 | **M13** | **Ví & Lịch sử giao dịch** | `wallet.php` | Xem số dư, lịch sử giao dịch. Filter theo loại/ngày. Export PDF/CSV. Nút nạp tiền, nút rút tiền. Rút tiền yêu cầu KYC mức 2, hạn mức 50k–50tr/ngày, phí 5k/lần, xử lý T+1. | UC-KH-17, UC-KH-19 |
| 13 | **M14** | **Nạp tiền QR** | `topup-qr.php` | Chọn số tiền → QR/MoMo/VNPay → chuyển khoản → webhook VietQR tự động cộng tiền. Reference code: NAPVI+SĐT. Fallback: Admin duyệt thủ công. | UC-KH-18 |
| 14 | **M15** | **Cá nhân / Hồ sơ** | `profile.php` | Xem & chỉnh sửa thông tin cá nhân. Đổi SĐT: OTP cả số cũ và mới. Đổi địa chỉ căn hộ: xác thực BQL. Quản lý ví & phương thức TT. Đăng ký gói gia đình. Liên hệ CSKH. Cài đặt (thông báo/ngôn ngữ/bảo mật/quyền riêng tư/xóa TK). Đăng xuất. | UC-KH-20, UC-KH-21, UC-KH-22, UC-KH-23, UC-KH-24, UC-KH-25 |

### Màn hình phụ bổ sung (từ UC-KH-06):

| # | Mã MH | Tên màn hình | Mô tả chức năng | UC liên quan |
|---|---|---|---|---|
| 15 | **M-pkg** | **Chi tiết gói gia đình 30 ngày** | Giá, quyền lợi, FAQ, T&C. Nút đăng ký → thanh toán → kích hoạt gia hạn tự động. Nhắc 3 ngày trước hết hạn. | UC-KH-06, UC-KH-22 |

> [!IMPORTANT]
> Tổng luồng Khách hàng: **15 màn hình** (14 màn hình chính + 1 màn hình M-pkg bổ sung)

---

## 🟢 LUỒNG 2: NGƯỜI GIÚP VIỆC (TASKER) — 6 MÀN HÌNH

### Luồng chính:
```
Đăng ký & KYC (M02) → Đăng nhập (M01) → Online/Offline & Nhận đơn & Làm việc (M16) → Thu nhập & Rút tiền (M17)
```

| # | Mã MH | Tên màn hình | File tham chiếu | Mô tả chức năng | UC liên quan |
|---|---|---|---|---|---|
| 1 | **M01** | **Đăng nhập (tab Tasker)** | `login.php` | Tab Tasker. Nhập SĐT + mật khẩu + 2FA bắt buộc (vì có thu nhập). Khóa 15 phút sau 5 lần sai. Tài khoản chưa duyệt → thông báo chờ. | UC-T-01 |
| 2 | **M02** | **Đăng ký Tasker** | `tasker-register.php` | Nhập họ tên + CCCD → chọn loại DV → eKYC liveness check (FPT.AI/VNPT) → lý lịch tư pháp số 1 (bắt buộc với trông trẻ) → gửi hồ sơ chờ Admin duyệt. | UC-T-02 |
| 3 | **M03** | **Quên mật khẩu / OTP** | `forgot-password.php` | Tương tự UC-KH-02. Nhập SĐT → OTP SMS (5 phút) → đặt mật khẩu mới. Max 3 lần/30 phút. | UC-T-03 |
| 4 | **M10** | **Chat với Khách hàng** | `chat.php` | Chat 2 chiều (text + ảnh). Thông báo khi KH offline. Lưu 90 ngày. Cùng giao diện với KH. | UC-T-11 |
| 5 | **M16** | **Trang chính Tasker (App Tasker)** | `tasker-app.php` | Màn hình chính của Tasker với nhiều chức năng: bật/tắt Online/Offline (auto-offline sau 5 phút mất heartbeat), xem đơn mới (hiển thị 60s, thuật toán matching 40/30/20/10), nhận đơn, bỏ qua đơn (>30% bỏ qua/7 ngày → giảm 50% đơn), xem đơn đang thực hiện (đếm xuôi từ check-in), hoàn thành đơn (KH xác nhận 30 phút, auto-approve nếu im lặng). Có tab Lịch sử (filter tháng/DV/đánh giá) và tab Cá nhân (chỉnh sửa avatar/mô tả/khu vực, thêm DV cần Admin duyệt, KYC read-only). | UC-T-04, UC-T-05, UC-T-06, UC-T-07, UC-T-08, UC-T-09, UC-T-10, UC-T-14 |
| 6 | **M17** | **Thu nhập & Thống kê** | `tasker-stats.php` | 4 KPI + biểu đồ. Phí 15% trên giá thực thu. Breakdown khi click. Yêu cầu rút tiền: 100k–100tr/lần, max 200tr/tháng, T+1, khấu trừ TNCN 10% khi >2tr/lần. | UC-T-12, UC-T-13 |

> [!IMPORTANT]
> Tổng luồng Tasker: **6 màn hình** (trong đó M01, M03, M10 dùng chung giao diện với Khách hàng nhưng tab/vai trò khác)

---

## 🟣 LUỒNG 3: ADMIN (QUẢN TRỊ VIÊN) — 1 MÀN HÌNH CHÍNH (5 TAB)

### Luồng chính:
```
Dashboard (tổng quan) → Quản lý Đơn → Duyệt Tasker → Quản lý Cư dân → Tài chính → Inbox/Khiếu nại → Báo cáo
```

| # | Mã MH | Tên màn hình / Tab | File tham chiếu | Mô tả chức năng | UC liên quan |
|---|---|---|---|---|---|
| 1 | **M18** | **Dashboard tổng quan** | `admin.php` | 4 KPI chính + sparkline 7 ngày. KPI mở rộng: GMV, retention, CAC. Cảnh báo đỏ khi doanh thu giảm đột ngột. | UC-AD-01 |
| 2 | **M18 (tab Đơn)** | **Quản lý Đơn hàng** | `admin.php` | Danh sách đơn với filter đa chiều, search theo mã/SĐT, pagination 50/trang, export Excel. Đơn cần can thiệp viền cam. Gán Tasker thủ công. Escalation: 5p → mở rộng bán kính, 10p → +10% giá, 15p → cảnh báo Admin. | UC-AD-02, UC-AD-03 |
| 3 | **M18 (tab Tasker)** | **Quản lý Tasker** | `admin.php` | Tab "Chờ duyệt" với checklist KYC → Approve/Reject/Request more info. Tab "Hoạt động": filter/suspend/blacklist. Lịch sử thay đổi trạng thái. | UC-AD-04 |
| 4 | **M18 (tab Cư dân)** | **Quản lý Cư dân** | `admin.php` | Tìm nhanh theo tên/SĐT/căn hộ. Xem chi tiết (lịch sử, LTV, vi phạm). Hành động: khóa/mở, tặng credit, gộp TK trùng. | UC-AD-05 |
| 5 | **M18 (tab Ví)** | **Quản lý Ví & Tài chính** | `admin.php` | 4 UC con: (a) Duyệt rút tiền Tasker, (b) Đối soát ngân hàng, (c) Hoàn tiền KH, (d) Báo cáo tài chính. Mỗi UC có audit log. Khóa GD bất thường để điều tra. | UC-AD-06 |
| 6 | **M18 (tab Inbox)** | **Hộp thư & Hỗ trợ** | `admin.php` | Xem ticket, assign cho Admin cụ thể, tag phân loại (kỹ thuật/tài chính/khiếu nại). SLA timer. Status: mở/đang xử lý/đóng. | UC-AD-07 |
| 7 | **M18 (Xử lý khiếu nại)** | **Xử lý Khiếu nại** | `admin.php` | 3 cấp: Mức 1 CSKH <24h (<500k) → Mức 2 Manager <48h (<5tr) → Mức 3 BOD. Blacklist Tasker tái phạm. | UC-AD-08 |
| 8 | **M18 (tab Reports)** | **Báo cáo Doanh thu & Hoa hồng** | `admin.php` | Dashboard Reports riêng: doanh thu theo DV, top Tasker, P&L. Export PDF/Excel + schedule gửi email định kỳ. | UC-AD-09 |

> [!IMPORTANT]
> Tổng luồng Admin: **1 màn hình chính M18** được tổ chức thành **5 tab chính** (Đơn · Tasker · Cư dân · Ví · Inbox) + Dashboard tổng quan + trang Reports + chức năng Khiếu nại = **8 giao diện/tab con**

---

## 📊 BẢNG TỔNG HỢP MÀN HÌNH TOÀN HỆ THỐNG

| Mã MH | Tên | Luồng sử dụng | Ghi chú |
|---|---|---|---|
| M01 | Đăng nhập | 🟠 KH + 🟢 Tasker | Dùng chung, phân biệt bằng tab |
| M02 | Đăng ký Tasker | 🟢 Tasker | Riêng Tasker |
| M03 | Quên mật khẩu / OTP | 🟠 KH + 🟢 Tasker | Dùng chung |
| M04 | Trang chủ | 🟠 KH | Riêng KH |
| M05 | Đặt DV Dọn nhà | 🟠 KH | Riêng KH |
| M06 | Đặt DV Trông trẻ | 🟠 KH | Riêng KH |
| M07 | Đặt DV Mua hộ WinMart | 🟠 KH | Riêng KH |
| M08 | Theo dõi tiến trình đơn | 🟠 KH | Riêng KH |
| M09 | Lịch sử hoạt động | 🟠 KH | Riêng KH |
| M10 | Chat | 🟠 KH + 🟢 Tasker | Dùng chung, chat 2 chiều |
| M11 | Thông báo | 🟠 KH | Riêng KH |
| M12 | Đánh giá Tasker | 🟠 KH | Riêng KH |
| M13 | Ví & Lịch sử GD | 🟠 KH | Riêng KH |
| M14 | Nạp tiền QR | 🟠 KH | Riêng KH |
| M15 | Cá nhân / Hồ sơ | 🟠 KH | Riêng KH (6 UC gộp) |
| M16 | App Tasker (chính) | 🟢 Tasker | Riêng Tasker (8 UC gộp) |
| M17 | Thu nhập & Thống kê | 🟢 Tasker | Riêng Tasker |
| M18 | Admin Dashboard | 🟣 Admin | Riêng Admin (5 tab + Reports) |
| M-pkg | Chi tiết gói gia đình | 🟠 KH | Bổ sung từ UC-KH-06 |

---

## 🔗 MAPPING UC → MÀN HÌNH ĐẦY ĐỦ

### Khách hàng (25 UC)

| UC | Tên | Màn hình |
|---|---|---|
| UC-KH-01 | Đăng nhập hệ thống | M01 |
| UC-KH-02 | Quên mật khẩu / OTP | M03 |
| UC-KH-03 | Xem trang chủ | M04 |
| UC-KH-04 | Tìm kiếm dịch vụ | M04 |
| UC-KH-05 | Xem Tasker gần bạn | M04 |
| UC-KH-06 | Xem gói gia đình 30 ngày | M04 → M-pkg |
| UC-KH-07 | Đặt dịch vụ dọn nhà | M05 |
| UC-KH-08 | Đặt dịch vụ trông trẻ | M06 |
| UC-KH-09 | Đặt dịch vụ mua hộ WinMart | M07 |
| UC-KH-10 | Theo dõi tiến trình đơn | M08 |
| UC-KH-11 | Chat với Tasker | M10 |
| UC-KH-12 | Gọi điện cho Tasker | M08, M10 |
| UC-KH-13 | Hủy đơn | M08, M09 |
| UC-KH-14 | Xem lịch sử hoạt động | M09 |
| UC-KH-15 | Xem thông báo | M11 |
| UC-KH-16 | Đánh giá Tasker | M12 |
| UC-KH-17 | Xem ví & lịch sử giao dịch | M13 |
| UC-KH-18 | Nạp tiền vào ví | M14 |
| UC-KH-19 | Rút tiền từ ví | M13 |
| UC-KH-20 | Xem & quản lý thông tin cá nhân | M15 |
| UC-KH-21 | Quản lý ví & phương thức TT | M15 |
| UC-KH-22 | Đăng ký gói gia đình | M15 |
| UC-KH-23 | Liên hệ CSKH 24/7 | M15 |
| UC-KH-24 | Cài đặt tài khoản | M15 |
| UC-KH-25 | Đăng xuất | M15 |

### Tasker (14 UC)

| UC | Tên | Màn hình |
|---|---|---|
| UC-T-01 | Đăng nhập với vai trò Tasker | M01 |
| UC-T-02 | Đăng ký trở thành Tasker | M02 |
| UC-T-03 | Quên mật khẩu / OTP | M03 |
| UC-T-04 | Bật/tắt Online/Offline | M16 |
| UC-T-05 | Xem đơn mới | M16 |
| UC-T-06 | Nhận đơn | M16 |
| UC-T-07 | Bỏ qua đơn | M16 |
| UC-T-08 | Xem đơn đang thực hiện | M16 |
| UC-T-09 | Hoàn thành đơn | M16 |
| UC-T-10 | Xem lịch sử đơn đã làm | M16 (tab Lịch sử) |
| UC-T-11 | Chat với khách hàng | M10 |
| UC-T-12 | Xem thu nhập & thống kê | M17 |
| UC-T-13 | Yêu cầu rút tiền | M17 |
| UC-T-14 | Xem & chỉnh sửa thông tin cá nhân | M16 (tab Cá nhân) |

### Admin (9 UC)

| UC | Tên | Màn hình |
|---|---|---|
| UC-AD-01 | Xem bảng điều khiển tổng quan | M18 (Dashboard) |
| UC-AD-02 | Xem & theo dõi danh sách đơn | M18 (tab Đơn) |
| UC-AD-03 | Can thiệp đơn cần xử lý | M18 (tab Đơn) |
| UC-AD-04 | Xem & quản lý Tasker | M18 (tab Tasker) |
| UC-AD-05 | Xem & quản lý Cư dân | M18 (tab Cư dân) |
| UC-AD-06 | Quản lý ví & tài chính | M18 (tab Ví) |
| UC-AD-07 | Xem & quản lý Inbox | M18 (tab Inbox) |
| UC-AD-08 | Xử lý khiếu nại | M18 |
| UC-AD-09 | Theo dõi doanh thu & hoa hồng | M18 (tab Reports) |

---

## 📝 GHI CHÚ QUAN TRỌNG KHI TẠO TRÊN STITCH

> [!TIP]
> **Đề xuất cách tạo trên Stitch:**
> - **Khách hàng & Tasker**: Tạo theo kiểu **Mobile App** (điện thoại)
> - **Admin**: Tạo theo kiểu **Desktop/Web** (dashboard máy tính)

> [!WARNING]
> **Các màn hình dùng chung M01, M03, M10**: Khi tạo trên Stitch, nên tạo bản riêng cho từng luồng (KH vs Tasker) vì mỗi luồng có tab/vai trò khác nhau dù cùng giao diện.

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn**, không tự ý thêm bất kỳ màn hình hay chức năng nào ngoài những gì đã được định nghĩa trong tài liệu gốc.
