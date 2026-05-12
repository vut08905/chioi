# 📱 CHI TIẾT MÀN HÌNH M08 — THEO DÕI TIẾN TRÌNH ĐƠN

> **Mã màn hình:** M08 · `tracking.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-10 (Theo dõi tiến trình đơn) · UC-KH-12 (Gọi điện cho Tasker) · UC-KH-13 (Hủy đơn)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M04 (Trang chủ) → tab Hoạt động → chọn đơn đang thực hiện

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Nút quay lại (Back)** | Trái | Icon mũi tên trái (`arrow_back`), màu trắng. Nhấn vào → quay lại màn hình trước. | Luồng điều hướng |
| 1.2 | **Tiêu đề màn hình** | Giữa | Dòng chữ **"Theo dõi đơn"** — font đậm 18px, màu trắng, căn giữa. | UC-KH-10 |
| 1.3 | **Icon Chat** | Phải | Biểu tượng bong bóng chat (`chat_bubble`), màu trắng, nền trắng mờ bo tròn. Nhấn → **M10** (Chat với Tasker). | UC-KH-11 |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa toàn bộ thông tin theo dõi đơn hàng. SLA cập nhật <10s. Push notification + polling 30s fallback.

---

### 2.1 👩‍🔧 THÔNG TIN TASKER

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Avatar Tasker** | Hình tròn 64px, ảnh profile của Tasker được gán đơn. Viền trắng. | UC-KH-10 |
| 2.1.2 | **Tên Tasker** | Họ tên Tasker — font đậm 16px. VD: "Nguyễn Lan". | UC-KH-10 |
| 2.1.3 | **Đánh giá sao** | Số sao trung bình (VD: ⭐ 4.8) — icon sao vàng + text. | UC-KH-10 |
| 2.1.4 | **Loại DV** | Text nhỏ màu xám: loại dịch vụ đang thực hiện (VD: "Dọn dẹp nhà"). | UC-KH-10 |

> **Giao diện:** Card trắng bo tròn 16px, shadow nhẹ, avatar bên trái, thông tin bên phải.

---

### 2.2 📊 THANH TIẾN TRÌNH 5 BƯỚC (THỜI GIAN THỰC)

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Tiêu đề section** | **"Tiến trình đơn hàng"** — font đậm 16px. | UC-KH-10 |
| 2.2.2 | **Stepper 5 bước** | Thanh stepper dọc hiển thị 5 bước theo thời gian thực. Mỗi bước gồm: icon tròn (cam khi hoàn thành, xám khi chưa), tên bước, thời gian. Đường nối giữa các bước (cam = đã qua, xám = chưa). | UC-KH-10: "5 bước theo thời gian thực" |

**5 bước tiến trình:**

| Bước | Tên | Mô tả |
|---|---|---|
| 1 | **Đã đặt đơn** | KH đặt đơn thành công |
| 2 | **Đã tìm Tasker** | Hệ thống tìm và gán Tasker |
| 3 | **Tasker đang đến** | Tasker xuất phát đến địa chỉ KH |
| 4 | **Đang thực hiện** | Tasker check-in và bắt đầu làm việc |
| 5 | **Hoàn thành** | Tasker bấm hoàn thành, chờ KH xác nhận |

---

### 2.3 📋 CHI TIẾT ĐƠN HÀNG

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Tiêu đề section** | **"Chi tiết đơn"** — font đậm 16px. | UC-KH-10 |
| 2.3.2 | **Mã đơn** | Mã đơn hàng, font mono nhỏ. VD: "#DH20261020-001". | UC-KH-10 |
| 2.3.3 | **Loại DV** | Loại dịch vụ đã đặt. | UC-KH-10 |
| 2.3.4 | **Ngày giờ** | Ngày giờ đã đặt. | UC-KH-10 |
| 2.3.5 | **Tổng tiền** | Tổng chi phí đơn hàng — font đậm, màu cam. | UC-KH-10 |

---

### 2.4 📞 CÁC NÚT HÀNH ĐỘNG (UC-KH-12, UC-KH-13)

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.4.1 | **Nút Chat** | Icon `chat_bubble` + text "Chat". Nền cam nhạt, chữ cam. Nhấn → **M10**. | UC-KH-11 |
| 2.4.2 | **Nút Gọi điện** | Icon `call` + text "Gọi". Nền cam nhạt, chữ cam. Gọi qua số ảo (masked phone), active ±30 phút khung giờ đơn. Không lộ SĐT thật. | UC-KH-12: "Gọi qua số ảo" |
| 2.4.3 | **Nút Hủy đơn** | Icon `cancel` + text "Hủy đơn". Nền đỏ nhạt, chữ đỏ. Nhấn → hiện popup xác nhận hủy + hiển thị phí hủy. | UC-KH-13 |

**Phí hủy đơn (UC-KH-13):**

| Mốc | Phí |
|---|---|
| Trước khi khớp Tasker | Miễn phí (0%) |
| Sau khớp — trước Tasker xuất phát | 10% |
| Sau Tasker xuất phát | 30-50% |

> **Giao diện:** 3 nút nằm ngang, bo tròn, kích thước đều nhau. Nút Hủy đơn màu đỏ nhạt để phân biệt.

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04 — nền trắng, bo tròn pill-shape, shadow đậm, floating. **4 tab**:

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2 | **Hoạt động** | 📋 `assignment` (outline) | Xám | → **M09** | UC-KH-14 |
| 3.3 | **Thông báo** | 🔔 `notifications` (outline) | Xám + badge đỏ | → **M11** | UC-KH-15 |
| 3.4 | **Tài khoản** | 👤 `person` (outline) | Xám | → **M15** | UC-KH-20 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  [←] Theo dõi đơn            [Chat] │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐    │
│  │ 👩‍🔧 Nguyễn Lan              │    │
│  │ ⭐ 4.8 · Dọn dẹp nhà       │    │  ← Thông tin Tasker
│  └─────────────────────────────┘    │
│                                     │
│  Tiến trình đơn hàng               │
│  ● Đã đặt đơn        ✓ 10:00     │
│  │                                  │
│  ● Đã tìm Tasker     ✓ 10:02     │
│  │                                  │
│  ● Tasker đang đến   ✓ 10:15     │
│  │                                  │
│  ◎ Đang thực hiện    ← hiện tại   │
│  │                                  │
│  ○ Hoàn thành                      │
│                                     │
│  Chi tiết đơn                       │
│  Mã: #DH20261020-001               │
│  DV: Dọn dẹp nhà                   │
│  Ngày: 20/10/2026 - 10:00          │
│  Tổng: 450.000 đ                   │
│                                     │
│  ┌────────┐┌────────┐┌────────┐    │
│  │  Chat  ││  Gọi   ││Hủy đơn│    │  ← 3 nút hành động
│  └────────┘└────────┘└────────┘    │
├─────────────────────────────────────┤
│  🏠    📋    🔔    👤  (floating)  │
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 3 | Nút Back + Tiêu đề + Icon Chat |
| **Body** | 4 section | Thông tin Tasker · Stepper 5 bước · Chi tiết đơn · 3 nút hành động |
| **Footer** | 4 tab | Trang chủ · Hoạt động · Thông báo · Tài khoản |
| **Tổng** | **11 thành phần chính** | |

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `chioi_wms_mockup.html`). Không tự ý thêm bất kỳ chức năng nào ngoài UC-KH-10, UC-KH-12, UC-KH-13.
