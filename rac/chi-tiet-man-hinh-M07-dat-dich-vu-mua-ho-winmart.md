# 📱 CHI TIẾT MÀN HÌNH M07 — ĐẶT DỊCH VỤ MUA HỘ WINMART

> **Mã màn hình:** M07 · `shopping.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-09 (Đặt dịch vụ mua hộ WinMart)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M04 (Trang chủ) → nhấn icon "Mua hộ" trong lưới 4 dịch vụ (UC-KH-03)

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Nút quay lại (Back)** | Trái | Icon mũi tên trái (`arrow_back`), màu trắng. Nhấn vào → quay lại **M04** (Trang chủ). | Luồng điều hướng |
| 1.2 | **Tiêu đề màn hình** | Giữa | Dòng chữ **"Mua hộ WinMart"** — font đậm 18px, màu trắng, căn giữa. | UC-KH-09 |
| 1.3 | **Icon Chat** | Phải | Biểu tượng bong bóng chat (`chat_bubble`), màu trắng, nền trắng mờ bo tròn. Nhấn → **M10** (Chat với Tasker) nếu có đơn đang thực hiện. | UC-KH-11 |

> [!NOTE]
> Header đồng nhất với M05 (Dọn nhà) và M06 (Trông trẻ): có nút Back, tiêu đề thay đổi theo tên dịch vụ, icon Chat bên phải.

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa toàn bộ form đặt dịch vụ mua hộ. Thứ tự theo luồng chính UC-KH-09: `Chọn cửa hàng → Danh sách sản phẩm → Địa chỉ giao → Ngân sách → Đặt`.

---

### 2.1 🏪 CHỌN CỬA HÀNG

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Tiêu đề section** | **"Chọn cửa hàng"** — font đậm 16px, màu on-surface. | UC-KH-09 (Bước 1: Chọn cửa hàng) |
| 2.1.2 | **Danh sách cửa hàng** | Các card/radio chọn cửa hàng WinMart gần KH. Mỗi card hiển thị: tên cửa hàng, địa chỉ, khoảng cách. Card active có viền cam, nền cam nhạt. Chỉ chọn 1. | UC-KH-09 |

> **Giao diện:** Card bo tròn, nền `surface-container-lowest`, viền `outline-variant`. Khi active: viền `primary`, nền `primary-fixed`.

---

### 2.2 🛒 DANH SÁCH SẢN PHẨM CẦN MUA

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Tiêu đề section** | **"Danh sách sản phẩm"** — font đậm 16px. | UC-KH-09 (Bước 2: DS sản phẩm) |
| 2.2.2 | **Danh sách sản phẩm** | Danh sách dạng list, mỗi dòng gồm: input tên sản phẩm + input số lượng + nút xóa (icon `close`). KH tự nhập tên sản phẩm cần mua. | UC-KH-09 |
| 2.2.3 | **Nút thêm sản phẩm** | Nút **"+ Thêm sản phẩm"** — text cam, icon `add`. Nhấn vào → thêm 1 dòng mới vào danh sách. | UC-KH-09 |

> **Giao diện:** Mỗi dòng SP là 1 row trong card trắng bo tròn. Input có viền `outline-variant`, bo tròn.

---

### 2.3 📍 ĐỊA CHỈ GIAO HÀNG

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Tiêu đề section** | **"Địa chỉ giao"** — font đậm 16px. | UC-KH-09 (Bước 3: Địa chỉ giao) |
| 2.3.2 | **Địa chỉ mặc định** | Hiển thị địa chỉ căn hộ đã đăng ký của KH (lấy từ hồ sơ cá nhân). Icon 📍 bên trái. Có nút "Thay đổi" bên phải. | UC-KH-09 |

---

### 2.4 💰 NGÂN SÁCH

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.4.1 | **Tiêu đề section** | **"Ngân sách"** — font đậm 16px. | UC-KH-09 (Bước 4: Ngân sách) |
| 2.4.2 | **Input ngân sách** | Ô nhập số tiền ngân sách tối đa cho đơn mua hộ (VD: 500.000 đ). Format tự động theo VNĐ. | UC-KH-09 |
| 2.4.3 | **Cảnh báo vượt ngân sách** | Dòng text thông tin nền vàng nhạt: **"⚠ Nếu tổng chi vượt ngân sách, Tasker sẽ chụp hóa đơn và chat xác nhận với bạn trước khi mua"**. Hiển thị luôn như lưu ý. | UC-KH-09: "Vượt ngân sách → Tasker chat xác nhận trước" |

> [!IMPORTANT]
> **Quy tắc nghiệp vụ:** Khi tổng chi phí thực tế vượt ngân sách KH đặt, Tasker **bắt buộc** phải chụp hóa đơn và chat xác nhận với KH qua M10 trước khi mua. Nếu thiếu tiền → hoàn chênh lệch cho KH.

---

### 2.5 📋 PHÍ DỊCH VỤ

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.5.1 | **Thông báo phí** | Dòng text rõ ràng: **"Phí dịch vụ mua hộ: 50.000 đ"** — font đậm, màu primary. Đây là phí cố định cho mỗi đơn mua hộ. | UC-KH-09: "Phí 50k" |

---

### 2.6 💳 TỔNG KẾT & NÚT ĐẶT HÀNG

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.6.1 | **Card tổng kết** | Card trắng bo tròn, shadow nhẹ. Tóm tắt: Cửa hàng, Số SP, Ngân sách, Phí DV (50k), Tổng (Ngân sách + 50k phí). | UC-KH-09 |
| 2.6.2 | **Phương thức TT** | PM mặc định (Ví Chị Ơi / MoMo / VNPay). Nút "Thay đổi" → UC-KH-21. | UC-KH-17, UC-KH-21 |
| 2.6.3 | **Nút Đặt mua hộ (CTA)** | Nút lớn, full width, gradient cam, chữ trắng: **"Đặt mua hộ — [tổng] đ"**. | UC-KH-09 |
| 2.6.4 | **Không đủ ví** | Ví < tổng: nút disable, text đỏ **"Số dư không đủ"** + link **"Nạp tiền"** → **M14**. | Tương tự UC-KH-07 |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04, M05, M06 — nền trắng, bo tròn pill-shape, shadow đậm, floating. **4 tab**:

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2 | **Hoạt động** | 📋 `assignment` (outline) | Xám | → **M09** | UC-KH-14 |
| 3.3 | **Thông báo** | 🔔 `notifications` (outline) | Xám + badge đỏ | → **M11** | UC-KH-15 |
| 3.4 | **Tài khoản** | 👤 `person` (outline) | Xám | → **M15** | UC-KH-20 |

> Ở M07, **không tab nào active** (tất cả outline xám) vì đây là màn hình con.

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  [←] Mua hộ WinMart          [Chat]│
├─────────────────────────────────────┤
│  Chọn cửa hàng                     │
│  ┌──────────────────────────────┐   │
│  │ 🏪 WinMart Vinhomes A · 500m│   │
│  └──────────────────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │ 🏪 WinMart Vinhomes B · 1km │   │
│  └──────────────────────────────┘   │
│                                     │
│  Danh sách sản phẩm                 │
│  1. [Sữa TH     ] [x2] [🗑]       │
│  2. [Trứng gà   ] [x1] [🗑]       │
│  3. [Rau xà lách] [x1] [🗑]       │
│  [+ Thêm sản phẩm]                 │
│                                     │
│  Địa chỉ giao                      │
│  📍 Căn A1-2003, Vinhomes  [Đổi]  │
│                                     │
│  Ngân sách                          │
│  [500.000 đ]                        │
│  ⚠ Vượt ngân sách → Tasker xác nhận│
│                                     │
│  Phí DV mua hộ: 50.000 đ           │
│                                     │
│  ┌ Tổng kết đơn ───────────────┐    │
│  │ Cửa hàng · Số SP · NS      │    │
│  │ Phí DV: 50k · Tổng: 550k   │    │
│  └─────────────────────────────┘    │
│  TT: Ví Chị Ơi        [Thay đổi]  │
│  [═══ ĐẶT MUA HỘ — 550.000 đ ═══] │
├─────────────────────────────────────┤
│  🏠    📋    🔔    👤  (floating)  │
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 3 | Nút Back + Tiêu đề + Icon Chat |
| **Body** | 6 section | Cửa hàng · DS sản phẩm · Địa chỉ giao · Ngân sách · Phí DV · Thanh toán |
| **Footer** | 4 tab | Trang chủ · Hoạt động · Thông báo · Tài khoản |
| **Tổng** | **13 thành phần chính** | |

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `chioi_wms_mockup.html`) + tham khảo phong cách từ `trangchu.html` (M04). Không tự ý thêm bất kỳ chức năng nào ngoài UC-KH-09.
