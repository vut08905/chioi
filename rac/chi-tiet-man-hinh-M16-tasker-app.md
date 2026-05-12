# 📱 CHI TIẾT MÀN HÌNH M16 — TRANG CHÍNH TASKER (APP TASKER)

> **Mã màn hình:** M16 · `tasker-app.php`
> **Luồng:** 🟢 Tasker (Người giúp việc)
> **UC liên quan:** UC-T-04, UC-T-05, UC-T-06, UC-T-07, UC-T-08, UC-T-09, UC-T-10, UC-T-14
> **Màu chủ đạo:** Teal (Màu nhận diện đặc trưng của luồng Tasker)
> **Điểm vào:** Sau khi Tasker đăng nhập thành công (M01).

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, hiển thị trạng thái làm việc (nhận đơn) của Tasker. Nền màu Teal hoặc trắng, tích hợp công tắc trực tuyến.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Avatar & Lời chào** | Trái | Avatar tròn nhỏ của Tasker + Dòng chữ "Chào, [Tên Tasker] 👋". | Giao diện chuẩn |
| 1.2 | **Công tắc Online / Offline** | Phải | Nút gạt (Toggle Switch). Bật màu Xanh (Online) để sẵn sàng nhận đơn / Tắt màu Xám (Offline) khi nghỉ ngơi. Cảnh báo hệ thống: *Tự động chuyển Offline sau 5 phút nếu mất kết nối (heartbeat).* | UC-T-04 |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (THAY ĐỔI THEO BOTTOM TAB)

Phần này chứa nội dung chính của App, thay đổi linh hoạt dựa vào 3 tab nghiệp vụ: **Trang chủ, Lịch sử, Cá nhân**.

### 2.1 🏠 MÀN HÌNH CHÍNH (KHI Ở TAB TRANG CHỦ)
Khu vực này xử lý luồng vận hành đơn hàng (Matching, Nhận/Bỏ qua, Thực hiện, Hoàn thành).

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Giao diện chờ đơn (Trống)** | Hình minh họa radar/sóng tỏa ra + Dòng chữ "Đang tìm kiếm đơn hàng mới quanh bạn..." (Chỉ hiện khi Online và chưa có đơn). | UX State |
| 2.1.2 | **Card Đơn Mới (Push Screen)** | Khi hệ thống phân bổ đơn (Thuật toán matching 40/30/20/10), hiện màn hình hoặc pop-up nổi bật. Đồng hồ **đếm ngược 60s**. | UC-T-05 |
| 2.1.3 | **Thông tin tóm tắt đơn** | Trong Card Đơn Mới, hiển thị: Loại dịch vụ, Khoảng cách (VD: 2.5km), Thời gian bắt đầu, Tổng tiền. Không hiện thông tin cá nhân KH lúc này. | UC-T-05 |
| 2.1.4 | **Nút Nhận / Bỏ qua** | 2 nút lớn song song. Nút Teal: **"Nhận đơn"** (UC-T-06). Nút xám: **"Bỏ qua"**. Dòng text cảnh báo nhỏ: *Lưu ý: Bỏ qua >30% trong 7 ngày sẽ bị giảm 50% lượng đơn phát tới.* | UC-T-06, UC-T-07 |
| 2.1.5 | **Card Đơn Đang Thực Hiện** | Xuất hiện khi đã nhận đơn. Hiển thị: Địa chỉ chi tiết, Tên KH. Đồng hồ bấm giờ **đếm xuôi** bắt đầu chạy từ thời điểm bấm "Check-in". | UC-T-08 |
| 2.1.6 | **Hành động trong lúc làm** | Nút Icon **"Chat"** (Dẫn sang M10), Nút Icon **"Gọi"**. Nút chính **"Bắt đầu công việc (Check-in)"** sau đó chuyển thành **"Hoàn thành"**. | UC-T-08, UC-T-09 |
| 2.1.7 | **Chờ KH Xác Nhận** | Sau khi Tasker bấm "Hoàn thành", giao diện chuyển sang Card trạng thái chờ. Dòng chữ: *Đang chờ Khách hàng xác nhận (Còn 30:00). Đơn sẽ tự động hoàn tất nếu KH không phản hồi.* | UC-T-09 |

---

### 2.2 🕒 MÀN HÌNH LỊCH SỬ (KHI CHUYỂN TAB LỊCH SỬ)
Hiển thị toàn bộ các đơn hàng đã thực hiện của Tasker.

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Bộ lọc đa luồng (Filter)** | Các Dropdown/Chips để lọc đơn hàng theo: Tháng, Loại Dịch vụ, Số sao đánh giá (Từ 1-5 sao). | UC-T-10 |
| 2.2.2 | **Danh sách Card Lịch sử** | Scroll dọc. Mỗi Card gồm: Ngày giờ, Loại dịch vụ, Trạng thái (Hoàn thành / Đã hủy), Số tiền thực nhận, và Đánh giá của KH (Số ngôi sao + Nội dung nếu có). | UC-T-10 |

---

### 2.3 👤 MÀN HÌNH CÁ NHÂN (KHI CHUYỂN TAB CÁ NHÂN)
Nơi quản lý hồ sơ và năng lực của Tasker.

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Chỉnh sửa thông tin cơ bản** | Khu vực có thể Edit (Sửa): Avatar, Dòng mô tả bản thân, Khu vực hoạt động ưu tiên. Có nút "Lưu thay đổi". | UC-T-14 |
| 2.3.2 | **Quản lý Dịch vụ cung cấp** | Danh sách các dịch vụ đang nhận làm. Có nút **"+ Thêm dịch vụ mới"**. Dòng text cảnh báo: *Việc thêm dịch vụ mới yêu cầu Admin phê duyệt.* | UC-T-14 |
| 2.3.3 | **Hồ sơ KYC (Read-only)** | Vùng hiển thị thông tin định danh (CCCD, Hình chân dung, Lý lịch tư pháp số 1). Trạng thái: **Chỉ đọc (Read-only)**, có gắn icon Tích Xanh "Đã xác thực", không cho phép sửa trực tiếp. | UC-T-14 |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Thanh điều hướng dưới cùng (Bottom Nav) cố định, nền trắng, dành riêng cho luồng Tasker. Khác với 4 tab của KH.

| # | Tab | Icon | Trạng thái mặc định | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` | Màu Teal (Active) | Hiển thị màn nhận đơn / đang thực hiện | UC-T-04 → UC-T-09 |
| 3.2 | **Lịch sử** | 🕒 `history` | Xám | Chuyển sang Tab Lịch sử đơn | UC-T-10 |
| 3.3 | **Thống kê** | 📊 `bar_chart` | Xám | Chuyển sang màn hình M17 (Thu nhập) | UC-T-12 |
| 3.4 | **Cá nhân** | 👤 `person` | Xám | Chuyển sang Tab Hồ sơ Cá nhân | UC-T-14 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ (Trạng thái có đơn mới)

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  [Avatar] Chào, Lan Nguyễn    [ON]o │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐  │
│  │ 🔔 ĐƠN DỌN NHÀ MỚI            │  │
│  │ 📍 Vinhomes Central Park      │  │
│  │ 📏 Cách bạn: 1.2 km           │  │
│  │ 🕒 Hôm nay, 14:00 (3 giờ)     │  │
│  │ 💰 150.000 đ                  │  │
│  │                               │  │
│  │   Tự động bỏ qua sau: 00:58   │  │
│  │                               │  │
│  │ [ BỎ QUA ]      [ NHẬN ĐƠN ]  │  │
│  │ * Bỏ qua >30% sẽ giảm đơn.    │  │
│  └───────────────────────────────┘  │
│                                     │
│  (Các nội dung khác bị mờ đi)       │
│                                     │
├─────────────────────────────────────┤
│         FOOTER (cố định)            │
│  🏠(Trang chủ)   🕒(Lịch sử)       │
│  📊(Thống kê)    👤(Cá nhân)       │
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 2 | Avatar/Lời chào + Công tắc Online/Offline |
| **Body (Trang chủ)** | 7 | Trống · Card đơn mới · Thông tin · Nút Nhận/Bỏ qua · Đơn đang làm · Nút làm việc · Chờ xác nhận |
| **Body (Lịch sử)** | 2 | Bộ lọc + Danh sách đơn |
| **Body (Cá nhân)** | 3 | Sửa cơ bản · Thêm DV chờ duyệt · KYC Read-only |
| **Footer** | 4 | Trang chủ · Lịch sử · Thống kê · Cá nhân |

> [!NOTE]
> Tài liệu này **100% dựa trên các file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `danh-sach-man-hinh-chioi.md`) và logic từ UC-T-04 đến UC-T-10, UC-T-14. Không tự ý thêm bất kỳ tính năng nào ngoài nghiệp vụ đã định sẵn cho Tasker.
