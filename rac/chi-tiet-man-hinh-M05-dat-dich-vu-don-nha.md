# 📱 CHI TIẾT MÀN HÌNH M05 — ĐẶT DỊCH VỤ DỌN NHÀ

> **Mã màn hình:** M05 · `house-cleaning.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-07 (Đặt dịch vụ dọn nhà)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M04 (Trang chủ) → nhấn icon "Dọn dẹp nhà" trong lưới 4 dịch vụ (UC-KH-03)

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Nút quay lại (Back)** | Trái | Icon mũi tên trái (`arrow_back`), màu trắng. Nhấn vào → quay lại **M04** (Trang chủ). | Luồng điều hướng |
| 1.2 | **Tiêu đề màn hình** | Giữa | Dòng chữ **"Dọn dẹp nhà"** — font đậm 18px, màu trắng, căn giữa. | UC-KH-07 |
| 1.3 | **Icon Chat** | Phải | Biểu tượng bong bóng chat (`chat_bubble`), màu trắng, nền trắng mờ bo tròn. Nhấn → **M10** (Chat với Tasker) nếu có đơn đang thực hiện. | UC-KH-11 |

> [!NOTE]
> Header màn hình đặt dịch vụ **CÓ** nút quay lại (Back) khác với trang chủ M04. Tiêu đề thay đổi theo tên dịch vụ đang đặt.

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa toàn bộ form đặt dịch vụ dọn nhà. Thứ tự theo luồng chính UC-KH-07: `Chọn loại dọn → Ngày & giờ (≥2h) → Số giờ → Ghi chú → Thanh toán`.

---

### 2.1 🧹 CHỌN LOẠI DỌN DẸP

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Tiêu đề section** | **"Loại dọn dẹp"** — font đậm 16px, màu on-surface. | UC-KH-07 (Bước 1: Chọn loại) |
| 2.1.2 | **Danh sách loại dọn** | Các nút chọn (radio/chip) để KH chọn loại dọn dẹp. Chip bo tròn, nền cam nhạt khi active, viền cam. Chỉ chọn 1 loại. | UC-KH-07 |

> **Giao diện:** Chip bo tròn pill-shape, nền `primary-fixed` khi active, viền `outline-variant` khi chưa chọn. Font `label-sm` đậm.

---

### 2.2 📅 CHỌN NGÀY & GIỜ (ĐẶT TRƯỚC ≥2H)

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Tiêu đề section** | **"Ngày & giờ"** — font đậm 16px. | UC-KH-07 (Bước 2) |
| 2.2.2 | **Bộ chọn ngày (Date Picker)** | Lịch cho phép chọn ngày. Ngày cuối tuần/lễ hiển thị **badge phụ phí**. | UC-KH-07: "Phụ phí cuối tuần/lễ" |
| 2.2.3 | **Bộ chọn giờ (Time Picker)** | Dropdown hoặc lưới giờ. **Chỉ cho phép giờ cách hiện tại ≥2h**. Slot < 2h bị disable (xám). | UC-KH-07: "Đặt trước ≥2h" |
| 2.2.4 | **Thông báo phụ phí** | Khi chọn T7/CN/lễ: cảnh báo nền vàng nhạt: **"⚠ Phụ phí cuối tuần/lễ sẽ được áp dụng"**. | UC-KH-07: "Phụ phí cuối tuần/lễ" |
| 2.2.5 | **Thông báo lỗi <2h** | Nếu chọn giờ < 2h: lỗi nền đỏ nhạt: **"❌ Vui lòng đặt trước tối thiểu 2 giờ"**. | UC-KH-07: "<2h → Lỗi" |

---

### 2.3 ⏱ CHỌN SỐ GIỜ LÀM VIỆC

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Tiêu đề section** | **"Số giờ"** — font đậm 16px. | UC-KH-07 (Bước 3) |
| 2.3.2 | **Bộ chọn số giờ** | Nút `-`/`+` hoặc slider. Số giờ ở giữa, font lớn đậm. | UC-KH-07 |
| 2.3.3 | **Giá tạm tính** | **"Tạm tính: [giá] đ"** — tự động cập nhật theo số giờ × đơn giá + phụ phí. | UC-KH-07 |

---

### 2.4 📝 GHI CHÚ CHO TASKER

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.4.1 | **Tiêu đề section** | **"Ghi chú"** — font đậm 16px. | UC-KH-07 (Bước 4) |
| 2.4.2 | **Ô nhập ghi chú** | Textarea, bo tròn, placeholder: "VD: Mang theo dụng cụ...". Không bắt buộc. | UC-KH-07 |

---

### 2.5 ⚠ CẢNH BÁO TRÙNG ĐƠN

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.5.1 | **Banner cảnh báo** | Nếu trùng ngày giờ với đơn cũ: card nền vàng nhạt (`#FFFBEB`), viền trái vàng (`#F59E0B`): **"Bạn đã có đơn dọn nhà vào [ngày] lúc [giờ]."** + 2 nút: "Tiếp tục" / "Xem đơn cũ". | UC-KH-07: "Cảnh báo trùng đơn" |

> Cảnh báo trùng đơn chỉ hiển thị khi phát hiện trùng lịch. Bình thường section này ẩn.

---

### 2.6 💳 TỔNG KẾT & NÚT THANH TOÁN

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.6.1 | **Card tổng kết** | Card trắng bo tròn, shadow nhẹ. Tóm tắt: Loại dọn, Ngày giờ, Số giờ, Phụ phí, Tổng cộng. | UC-KH-07 (Bước 5) |
| 2.6.2 | **Phương thức TT** | PM mặc định (Ví Chị Ơi / MoMo / VNPay). Nút "Thay đổi" → UC-KH-21. | UC-KH-17, UC-KH-21 |
| 2.6.3 | **Nút Đặt dịch vụ (CTA)** | Nút lớn, full width, gradient cam, chữ trắng: **"Đặt dịch vụ — [tổng tiền] đ"**. | UC-KH-07 |
| 2.6.4 | **Không đủ ví** | Ví < tổng: nút disable, text đỏ **"Số dư không đủ"** + link **"Nạp tiền"** → **M14**. | UC-KH-07: "Không đủ ví → Nạp tiền" |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04 — nền trắng, bo tròn pill-shape, shadow đậm, floating. **4 tab**:

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2 | **Hoạt động** | 📋 `assignment` (outline) | Xám | → **M09** | UC-KH-14 |
| 3.3 | **Thông báo** | 🔔 `notifications` (outline) | Xám + badge đỏ | → **M11** | UC-KH-15 |
| 3.4 | **Tài khoản** | 👤 `person` (outline) | Xám | → **M15** | UC-KH-20 |

> Ở M05, **không tab nào active** (tất cả outline xám) vì đây là màn hình con.

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  [←] Dọn dẹp nhà            [Chat] │
├─────────────────────────────────────┤
│  Loại dọn dẹp                      │
│  [Loại 1] [Loại 2] [Loại 3]       │
│                                     │
│  Ngày & giờ                         │
│  📅 Chọn ngày                      │
│  🕐 Chọn giờ (≥2h trước)          │
│  ⚠ Phụ phí cuối tuần/lễ            │
│                                     │
│  Số giờ                             │
│  [-] [3] [+]   Tạm tính: 450k đ   │
│                                     │
│  Ghi chú                            │
│  [Textarea...]                      │
│                                     │
│  ⚠ Cảnh báo trùng đơn (nếu có)    │
│                                     │
│  ┌ Tổng kết đơn ───────────────┐    │
│  │ Loại · Ngày giờ · Giờ      │    │
│  │ Phụ phí · Tổng: 450.000 đ  │    │
│  └─────────────────────────────┘    │
│  TT: Ví Chị Ơi        [Thay đổi]  │
│  [═══ ĐẶT DỊCH VỤ — 450.000 đ ══] │
├─────────────────────────────────────┤
│  🏠    📋    🔔    👤  (floating)  │
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 3 | Nút Back + Tiêu đề + Icon Chat |
| **Body** | 6 section | Loại dọn · Ngày giờ · Số giờ · Ghi chú · Cảnh báo trùng · Thanh toán |
| **Footer** | 4 tab | Trang chủ · Hoạt động · Thông báo · Tài khoản |
| **Tổng** | **13 thành phần chính** | |

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `chioi_wms_mockup.html`) + tham khảo phong cách từ `trangchu.html` (M04). Không tự ý thêm bất kỳ chức năng nào ngoài UC-KH-07.
