# 📱 CHI TIẾT MÀN HÌNH M06 — ĐẶT DỊCH VỤ TRÔNG TRẺ

> **Mã màn hình:** M06 · `babysitting.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-08 (Đặt dịch vụ trông trẻ)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M04 (Trang chủ) → nhấn icon "Trông trẻ" trong lưới 4 dịch vụ (UC-KH-03)

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Nút quay lại (Back)** | Trái | Icon mũi tên trái (`arrow_back`), màu trắng. Nhấn vào → quay lại **M04** (Trang chủ). | Luồng điều hướng |
| 1.2 | **Tiêu đề màn hình** | Giữa | Dòng chữ **"Trông trẻ"** — font đậm 18px, màu trắng, căn giữa. | UC-KH-08 |
| 1.3 | **Icon Chat** | Phải | Biểu tượng bong bóng chat (`chat_bubble`), màu trắng, nền trắng mờ bo tròn. Nhấn → **M10** (Chat với Tasker) nếu có đơn đang thực hiện. | UC-KH-11 |

> [!NOTE]
> Header đồng nhất với M05 (Dọn nhà): có nút Back, tiêu đề thay đổi theo tên dịch vụ, icon Chat bên phải.

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa toàn bộ form đặt dịch vụ trông trẻ. Thứ tự theo luồng chính UC-KH-08: `Số trẻ/tuổi → Lưu ý đặc biệt (dị ứng) → Ngày giờ → Tìm Tasker có chứng chỉ`.

---

### 2.1 👶 NHẬP SỐ TRẺ VÀ TUỔI

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Tiêu đề section** | **"Thông tin trẻ"** — font đậm 16px, màu on-surface. | UC-KH-08 (Bước 1: Số trẻ/tuổi) |
| 2.1.2 | **Bộ chọn số trẻ** | Nút `-`/`+` để tăng/giảm số trẻ. Số hiện tại ở giữa, font lớn đậm. Mỗi trẻ thêm vào sẽ hiển thị 1 dòng nhập tuổi bên dưới. | UC-KH-08 |
| 2.1.3 | **Nhập tuổi từng trẻ** | Với mỗi trẻ: 1 dòng gồm label **"Trẻ [n]"** + input nhập tuổi (dropdown hoặc number input). VD: "Trẻ 1: 3 tuổi", "Trẻ 2: 5 tuổi". | UC-KH-08 |

> **Giao diện:** Card trắng bo tròn, shadow nhẹ. Mỗi dòng trẻ có viền dưới `outline-variant` phân cách.

---

### 2.2 ⚠ LƯU Ý ĐẶC BIỆT (DỊ ỨNG)

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Tiêu đề section** | **"Lưu ý đặc biệt"** — font đậm 16px. | UC-KH-08 (Bước 2: Lưu ý đặc biệt) |
| 2.2.2 | **Ô nhập lưu ý** | Textarea nhiều dòng, bo tròn, nền trắng, viền `outline-variant`. Placeholder: "VD: Trẻ bị dị ứng sữa bò, cần uống thuốc lúc 3h chiều...". | UC-KH-08: "Lưu ý đặc biệt (dị ứng)" |
| 2.2.3 | **Badge cảnh báo** | Dòng text nhỏ nền đỏ nhạt (`secondary-fixed`), icon cảnh báo: **"⚠ Vui lòng khai báo đầy đủ tình trạng dị ứng, sức khỏe đặc biệt của trẻ"**. Hiển thị luôn (không phải lỗi, là nhắc nhở). | UC-KH-08: "Khai báo dị ứng/lưu ý" |

> [!IMPORTANT]
> **Quy tắc nghiệp vụ:** Dịch vụ trông trẻ thuộc nhóm **"Rủi ro cao"** (theo tag trong WMS mockup). Việc khai báo dị ứng/lưu ý sức khỏe là rất quan trọng để đảm bảo an toàn cho trẻ.

---

### 2.3 📅 CHỌN NGÀY & GIỜ

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Tiêu đề section** | **"Ngày & giờ"** — font đậm 16px. | UC-KH-08 (Bước 3: Ngày giờ) |
| 2.3.2 | **Bộ chọn ngày (Date Picker)** | Lịch cho phép chọn ngày từ hôm nay trở đi. | UC-KH-08 |
| 2.3.3 | **Bộ chọn giờ (Time Picker)** | Dropdown hoặc lưới giờ bắt đầu trông trẻ. | UC-KH-08 |
| 2.3.4 | **Số giờ trông trẻ** | Nút `-`/`+` chọn số giờ. Số giờ ở giữa, font lớn đậm. | UC-KH-08 |

---

### 2.4 💰 HIỂN THỊ GIÁ (SỐ GIỜ × 100K)

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.4.1 | **Công thức giá** | Dòng text: **"Giá: [số giờ] giờ × 100.000 đ = [tổng] đ"** — tự động cập nhật khi thay đổi số giờ. Font đậm, màu primary. | UC-KH-08: "Giá: số giờ × 100k" |

> **Giao diện:** Hiển thị rõ ràng công thức tính giá để KH minh bạch chi phí.

---

### 2.5 🏅 TASKER CÓ CHỨNG CHỈ

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.5.1 | **Thông báo chứng chỉ** | Card thông tin nền xanh nhạt, icon ✅: **"Chỉ Tasker có chứng chỉ trông trẻ mới được nhận đơn này"**. Đây là thông tin, không phải form input. | UC-KH-08: "Chỉ tìm Tasker có chứng chỉ" |
| 2.5.2 | **Không có Tasker** | Nếu không có Tasker có chứng chỉ khả dụng: hiển thị dòng text: **"Hiện không có Tasker có chứng chỉ khả dụng. Vui lòng thử khung giờ khác."** | UC-KH-08: "Không có Tasker chứng chỉ → Gợi ý khung giờ khác" |

---

### 2.6 💳 TỔNG KẾT & NÚT THANH TOÁN

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.6.1 | **Card tổng kết** | Card trắng bo tròn, shadow nhẹ. Tóm tắt: Số trẻ, Tuổi, Ngày giờ, Số giờ, Giá (số giờ × 100k), Tổng cộng. | UC-KH-08 |
| 2.6.2 | **Phương thức TT** | PM mặc định (Ví Chị Ơi / MoMo / VNPay). Nút "Thay đổi" → UC-KH-21. | UC-KH-17, UC-KH-21 |
| 2.6.3 | **Nút Đặt dịch vụ (CTA)** | Nút lớn, full width, gradient cam, chữ trắng: **"Đặt dịch vụ — [tổng tiền] đ"**. | UC-KH-08 |
| 2.6.4 | **Không đủ ví** | Ví < tổng: nút disable, text đỏ **"Số dư không đủ"** + link **"Nạp tiền"** → **M14**. | Tương tự UC-KH-07 |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04 và M05 — nền trắng, bo tròn pill-shape, shadow đậm, floating. **4 tab**:

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2 | **Hoạt động** | 📋 `assignment` (outline) | Xám | → **M09** | UC-KH-14 |
| 3.3 | **Thông báo** | 🔔 `notifications` (outline) | Xám + badge đỏ | → **M11** | UC-KH-15 |
| 3.4 | **Tài khoản** | 👤 `person` (outline) | Xám | → **M15** | UC-KH-20 |

> Ở M06, **không tab nào active** (tất cả outline xám) vì đây là màn hình con.

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  [←] Trông trẻ               [Chat]│
├─────────────────────────────────────┤
│  Thông tin trẻ                      │
│  Số trẻ: [-] [2] [+]              │
│  Trẻ 1: [3 tuổi]                  │
│  Trẻ 2: [5 tuổi]                  │
│                                     │
│  Lưu ý đặc biệt                    │
│  [Textarea: dị ứng, sức khỏe...]   │
│  ⚠ Vui lòng khai báo dị ứng       │
│                                     │
│  Ngày & giờ                         │
│  📅 Chọn ngày                      │
│  🕐 Chọn giờ bắt đầu              │
│  Số giờ: [-] [3] [+]              │
│                                     │
│  💰 Giá: 3 giờ × 100k = 300.000 đ │
│                                     │
│  🏅 Chỉ Tasker có chứng chỉ       │
│                                     │
│  ┌ Tổng kết đơn ───────────────┐    │
│  │ Số trẻ · Tuổi · Ngày giờ   │    │
│  │ Số giờ · Tổng: 300.000 đ   │    │
│  └─────────────────────────────┘    │
│  TT: Ví Chị Ơi        [Thay đổi]  │
│  [═══ ĐẶT DỊCH VỤ — 300.000 đ ══] │
├─────────────────────────────────────┤
│  🏠    📋    🔔    👤  (floating)  │
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 3 | Nút Back + Tiêu đề + Icon Chat |
| **Body** | 6 section | Thông tin trẻ · Lưu ý đặc biệt · Ngày giờ · Giá · Tasker chứng chỉ · Thanh toán |
| **Footer** | 4 tab | Trang chủ · Hoạt động · Thông báo · Tài khoản |
| **Tổng** | **13 thành phần chính** | |

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `chioi_wms_mockup.html`) + tham khảo phong cách từ `trangchu.html` (M04). Không tự ý thêm bất kỳ chức năng nào ngoài UC-KH-08.
