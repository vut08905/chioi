# 📱 CHI TIẾT MÀN HÌNH M10 — CHAT VỚI TASKER

> **Mã màn hình:** M10 · `chat.php`
> **Luồng:** 🟠 Khách hàng (Cư dân) + 🟢 Tasker (dùng chung)
> **UC liên quan:** UC-KH-11 (Chat với Tasker)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M08 (Theo dõi đơn) → nút Chat / Từ M04 → icon Chat trên Header

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Nút quay lại (Back)** | Trái | Icon mũi tên trái (`arrow_back`), màu trắng. Nhấn → quay lại màn hình trước (M08 hoặc M04). | Luồng điều hướng |
| 1.2 | **Avatar + Tên Tasker** | Giữa-trái | Avatar tròn nhỏ (32px) + Tên Tasker (bold 16px trắng) + Trạng thái online/offline (chấm xanh/xám nhỏ). | UC-KH-11 |
| 1.3 | **Icon Gọi điện** | Phải | Biểu tượng điện thoại (`call`), màu trắng, nền trắng mờ bo tròn. Nhấn → gọi qua số ảo (UC-KH-12). | UC-KH-12 |

---

## 2️⃣ PHẦN GIỮA — BODY / KHUNG CHAT (CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa toàn bộ lịch sử tin nhắn chat 2 chiều. Chat lưu 90 ngày.

---

### 2.1 💬 VÙNG HIỂN THỊ TIN NHẮN

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Tin nhắn KH (gửi đi)** | Bong bóng chat bên phải, nền gradient cam nhạt, chữ trắng hoặc đen, bo tròn góc trái. Hiện timestamp nhỏ bên dưới. | UC-KH-11 |
| 2.1.2 | **Tin nhắn Tasker (nhận)** | Bong bóng chat bên trái, nền xám nhạt (`surface-container`), chữ đen, bo tròn góc phải. Hiện timestamp nhỏ bên dưới. | UC-KH-11 |
| 2.1.3 | **Tin nhắn ảnh** | Ảnh đính kèm hiển thị dạng thumbnail bo tròn trong bong bóng chat. Nhấn → xem full ảnh. | UC-KH-11: "Chat 2 chiều (text + ảnh)" |
| 2.1.4 | **Trạng thái offline** | Nếu Tasker offline: hiển thị banner nhỏ nền vàng nhạt ở trên vùng chat: **"Tasker hiện không trực tuyến"**. | UC-KH-11: "Hiển thị trạng thái offline" |

> **Quy tắc lọc nội dung (UC-KH-11):**
> - Hệ thống **lọc bad-words** tự động. Tin nhắn chứa từ ngữ không phù hợp sẽ bị chặn.
> - **Cấm chia sẻ SĐT cá nhân** — hệ thống phát hiện và cảnh báo.
> - Lịch sử chat **lưu 90 ngày**.

---

### 2.2 📌 THÔNG TIN ĐƠN HÀNG LIÊN QUAN

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Card đơn hàng mini** | Card nhỏ nền cam nhạt nằm ở đầu vùng chat (pinned), hiển thị tóm tắt đơn đang thực hiện: Loại DV + Ngày giờ + Trạng thái. Nhấn → chuyển về M08. | UC-KH-11 |

---

## 3️⃣ PHẦN CHÂN — THANH NHẬP TIN NHẮN + BOTTOM NAV

### 3.1 ✏️ THANH NHẬP TIN NHẮN

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 3.1.1 | **Nút đính kèm ảnh** | Icon camera/gallery (`photo_camera`) bên trái thanh nhập. Nhấn → mở thư viện ảnh hoặc chụp ảnh. | UC-KH-11: "text + ảnh" |
| 3.1.2 | **Input tin nhắn** | Input text bo tròn, placeholder: "Nhập tin nhắn...". Nền trắng, viền xám nhạt. | UC-KH-11 |
| 3.1.3 | **Nút gửi** | Icon `send` màu cam bên phải. Nhấn → gửi tin nhắn. Disable (xám) khi input trống. | UC-KH-11 |

> **Giao diện:** Thanh nhập cố định phía trên Bottom Nav, nền trắng, padding đều, shadow nhẹ lên trên.

### 3.2 BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04. **4 tab**, tất cả outline xám (M10 là màn hình con):

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.2.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2.2 | **Hoạt động** | 📋 `assignment` (outline) | Xám | → **M09** | UC-KH-14 |
| 3.2.3 | **Thông báo** | 🔔 `notifications` (outline) | Xám + badge đỏ | → **M11** | UC-KH-15 |
| 3.2.4 | **Tài khoản** | 👤 `person` (outline) | Xám | → **M15** | UC-KH-20 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  [←] 👩‍🔧 Nguyễn Lan ●online  [📞] │
├─────────────────────────────────────┤
│  ┌ Đơn: Dọn nhà · 20/10 · ĐangTH ┐│  ← Card đơn pinned
│                                     │
│        🟠 Chào chị, em đang        │
│        🟠 trên đường đến ạ!        │  ← TN Tasker (trái)
│                                     │
│    Dạ, chị chờ em nhé 🟧           │
│                        10:15 ✓     │  ← TN KH (phải)
│                                     │
│        🟠 Em đến rồi ạ!           │
│        🟠 [📷 Ảnh check-in]       │  ← TN ảnh
│                                     │
│    Ok em, chị mở cửa 🟧           │
│                        10:25 ✓     │
│                                     │
│         ↕ CUỘN (scroll)             │
├─────────────────────────────────────┤
│  [📷] [Nhập tin nhắn...    ] [➤]  │  ← Thanh nhập
├─────────────────────────────────────┤
│  🏠    📋    🔔    👤  (floating)  │
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 3 | Nút Back + Avatar/Tên/Status Tasker + Icon Gọi |
| **Body** | 2 section | Vùng tin nhắn (text + ảnh) + Card đơn hàng pinned |
| **Footer** | 2 phần | Thanh nhập tin nhắn + 4 tab Bottom Nav |
| **Tổng** | **9 thành phần chính** | |

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `chioi_wms_mockup.html`). Không tự ý thêm bất kỳ chức năng nào ngoài UC-KH-11.
