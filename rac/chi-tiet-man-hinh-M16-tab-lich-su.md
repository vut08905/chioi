# 📱 CHI TIẾT MÀN HÌNH M16 — TAB LỊCH SỬ (APP TASKER)

> **Mã màn hình:** M16 (Tab Lịch sử)
> **Luồng:** 🟢 Tasker (Người giúp việc)
> **UC liên quan:** UC-T-10 (Xem lịch sử đơn đã làm)
> **Màu chủ đạo:** Teal (Màu nhận diện luồng Tasker)
> **Điểm vào:** Nhấn vào Tab "Lịch sử" (Icon đồng hồ) trên Bottom Navigation Bar.

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Giao diện tab chính, không có nút Back (Quay lại).

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Tiêu đề màn hình** | Trái/Giữa | Chữ đậm "Lịch sử đơn hàng" (hoặc "Hoạt động"). | Giao diện chuẩn |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Chứa bộ lọc và danh sách toàn bộ các đơn hàng trong quá khứ của Tasker.

### 2.1 🔍 BỘ LỌC ĐA CHIỀU (FILTER BAR)
Thanh lọc dính (Sticky) phía dưới Header, cuộn lên không bị mất.

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Lọc theo Tháng** | Dropdown / Chip ghi "Tháng này ▼". Cho phép chọn tháng cũ. | UC-T-10 ("filter tháng") |
| 2.1.2 | **Lọc theo Dịch vụ** | Dropdown / Chip ghi "Tất cả DV ▼". Chọn (Dọn nhà / Trông trẻ / Mua hộ). | UC-T-10 ("filter DV") |
| 2.1.3 | **Lọc theo Đánh giá** | Dropdown / Chip ghi "Số sao ▼". Chọn (5 sao, 4 sao, 3 sao...). | UC-T-10 ("filter đánh giá") |

### 2.2 📜 DANH SÁCH ĐƠN HÀNG (HISTORY CARDS)
| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Card Đơn hàng (Hoàn thành)** | Nền trắng, viền hoặc shadow nhẹ. Hiển thị: Loại dịch vụ, Ngày giờ thực hiện, Tổng tiền thực nhận. | UC-T-10 |
| 2.2.2 | **Đánh giá của KH** | Bên dưới thông tin đơn có dòng: "Đánh giá: 5 ⭐" kèm theo trích dẫn ngắn lời nhận xét (nếu có). | UC-T-10 |
| 2.2.3 | **Trạng thái đơn** | Nhãn nhỏ ghi "Hoàn thành" (màu xanh lá) hoặc "Đã hủy" (màu đỏ). | UC-T-10 |
| 2.2.4 | **Trạng thái Trống (Empty State)** | Nếu chọn bộ lọc không có đơn hoặc Tasker mới tinh: Hiển thị icon rỗng + chữ "Chưa có đơn hàng nào." | UX/UI chuẩn |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Thanh điều hướng dưới cùng (Bottom Nav) cố định, nền trắng.

| # | Tab | Icon | Trạng thái mặc định | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` | Xám | Chuyển sang màn nhận đơn (M16) | UC-T-04 → T-09 |
| 3.2 | **Lịch sử** | 🕒 `history` | **Màu Teal (Active)** | Đang ở tab này | UC-T-10 |
| 3.3 | **Thống kê** | 📊 `bar_chart` | Xám | Chuyển sang màn M17 | UC-T-12 |
| 3.4 | **Cá nhân** | 👤 `person` | Xám | Chuyển sang tab Hồ sơ Cá nhân | UC-T-14 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  Lịch sử đơn hàng                   │
├─────────────────────────────────────┤
│  [Tháng này ▼] [Dịch vụ ▼] [Sao ▼]  │  <-- Bộ lọc
│  ─────────────────────────────────  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 🧹 DỌN DẸP NHÀ CỬA            │  │
│  │ 🕒 14:00 - 12/05/2026         │  │
│  │ 💰 150.000 đ                  │  │
│  │                               │  │
│  │ [✓ Hoàn thành]                │  │
│  │ ⭐⭐⭐⭐⭐ "Làm rất sạch sẽ"      │  │
│  └───────────────────────────────┘  │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 👶 TRÔNG TRẺ (2 giờ)          │  │
│  │ 🕒 09:00 - 10/05/2026         │  │
│  │ 💰 200.000 đ                  │  │
│  │                               │  │
│  │ [✓ Hoàn thành]                │  │
│  │ ⭐⭐⭐⭐ "Tốt, đúng giờ"          │  │
│  └───────────────────────────────┘  │
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
| **Header** | 1 | Tiêu đề màn hình |
| **Body** | 2 section chính | Bộ lọc (Tháng, DV, Đánh giá) và Danh sách Card đơn hàng có kèm số sao |
| **Footer** | 4 tab | Trang chủ · Lịch sử · Thống kê · Cá nhân |
