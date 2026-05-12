# 📱 CHI TIẾT MÀN HÌNH M11 — THÔNG BÁO

> **Mã màn hình:** M11 · `notifications.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-15 (Xem thông báo)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M04 (Trang chủ) → tab "Thông báo" trong Bottom Nav

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Tiêu đề màn hình** | Trái | Dòng chữ **"Thông báo"** — font đậm 24px, màu trắng. | UC-KH-15 |
| 1.2 | **Đánh dấu đã đọc** | Phải | Icon `done_all` hoặc text "Đã đọc tất cả", màu trắng. Nhấn → đánh dấu tất cả thông báo là đã đọc. | UC-KH-15: "Đánh dấu đã đọc" |

> [!NOTE]
> Header M11 **KHÔNG** có nút Back vì đây là tab chính trong Bottom Nav.

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa 4 tab nhóm thông báo và danh sách thông báo tương ứng.

---

### 2.1 📑 4 NHÓM THÔNG BÁO

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Tab bar nhóm** | 4 tab nằm ngang, có thể cuộn ngang nếu cần. Tab active có gạch chân cam đậm. | UC-KH-15: "4 nhóm" |

**4 nhóm:**
1. **Đơn hàng**: Cập nhật trạng thái đơn (Tasker đã nhận, Đang đến, Hoàn thành...).
2. **Ví**: Biến động số dư (Nạp, rút, thanh toán).
3. **Hệ thống**: Thông báo bảo trì, chính sách từ Admin.
4. **Khuyến mãi**: Voucher, ưu đãi mới.

---

### 2.2 📋 DANH SÁCH THÔNG BÁO

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Card thông báo** | Mỗi thông báo là 1 row/card nhỏ. Chứa: Icon (tùy nhóm) + Tiêu đề + Nội dung tóm tắt + Thời gian. | UC-KH-15 |
| 2.2.2 | **Trạng thái chưa đọc** | Thông báo chưa đọc có nền hơi cam nhạt (`#ffdbcc`) và chấm đỏ nhỏ bên phải. Đã đọc thì nền trắng. | UC-KH-15 |

---

### 2.3 ⚙ CÀI ĐẶT THÔNG BÁO

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Icon Cài đặt** | Thêm một icon cài đặt nhỏ góc trên cùng hoặc đầu danh sách. Nhấn → hiển thị popup/drawer để Bật/Tắt từng nhóm thông báo. | UC-KH-15: "Có thể tắt từng nhóm" |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04. **4 tab**, tab "Thông báo" đang **active**:

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2 | **Hoạt động** | 📋 `assignment` (outline) | Xám | → **M09** | UC-KH-14 |
| 3.3 | **Thông báo** | 🔔 `notifications` (filled) | ✅ **Active — màu cam, icon filled** | → M11 (đang ở đây) | UC-KH-15 |
| 3.4 | **Tài khoản** | 👤 `person` (outline) | Xám | → **M15** | UC-KH-20 |
