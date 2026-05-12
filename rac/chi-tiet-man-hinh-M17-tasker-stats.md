# 📱 CHI TIẾT MÀN HÌNH M17 — THU NHẬP & THỐNG KÊ (TASKER)

> **Mã màn hình:** M17 · `tasker-stats.php`
> **Luồng:** 🟢 Tasker (Người giúp việc)
> **UC liên quan:** UC-T-12 (Xem thu nhập & thống kê), UC-T-13 (Yêu cầu rút tiền)
> **Màu chủ đạo:** Teal (Luồng Tasker)
> **Điểm vào:** Nhấn vào Tab "Thống kê" trên Bottom Navigation Bar của App Tasker.

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Đây là một Tab chính trong ứng dụng nên không cần nút Quay lại (Back).

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Tiêu đề màn hình** | Trái/Giữa | Chữ đậm "Thu nhập & Thống kê" (hoặc "Thống kê"). | Giao diện chuẩn |
| 1.2 | **Nút Bộ lọc thời gian** | Phải | Dropdown/Icon lịch để chọn khoảng thời gian xem (Tuần này / Tháng này / Tùy chỉnh). | UC-T-12 |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Nơi hiển thị các dữ liệu tài chính, biểu đồ và chức năng Rút tiền.

### 2.1 💰 KHU VỰC TỔNG QUAN TÀI CHÍNH
| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Số dư khả dụng (Ví)** | Card nổi bật nền màu chủ đạo. Hiện số dư có thể rút (VD: `1,500,000 đ`). Có nút **"Rút tiền"**. | UC-T-13 |
| 2.1.2 | **Lưu ý quy định rút tiền** | Chữ nhỏ bên dưới hoặc pop-up khi bấm rút: *Rút tối thiểu 100k - tối đa 100tr/lần (Max 200tr/tháng). Tiền về tài khoản vào ngày T+1. Khấu trừ 10% Thuế TNCN với giao dịch >2tr/lần.* | UC-T-13 |

### 2.2 📊 CHỈ SỐ KPI (4 KHỐI)
Lưới 4 ô (2x2) hiển thị tóm tắt hiệu suất làm việc.

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Tổng thu nhập** | Số tiền kiếm được trong kỳ lọc (Đã trừ phí 15%). | UC-T-12 |
| 2.2.2 | **Đơn hoàn thành** | Tổng số đơn đã làm xong (VD: 45 đơn). | UC-T-12 |
| 2.2.3 | **Tỷ lệ hoàn thành** | Tỷ lệ nhận và làm xong / Tổng đơn được giao (VD: 95%). Cảnh báo nhỏ nếu <70%. | UC-T-12 |
| 2.2.4 | **Đánh giá trung bình** | Số sao trung bình (VD: 4.8 ⭐). | UC-T-12 |

### 2.3 📈 BIỂU ĐỒ DOANH THU & CHI TIẾT
| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Biểu đồ Cột (Bar Chart)** | Trục X: Các ngày trong tuần/tháng. Trục Y: Số tiền. Click vào cột hiện tooltip số tiền ngày đó. | UC-T-12 |
| 2.3.2 | **Danh sách giao dịch (Breakdown)**| Danh sách cuộn các đơn hàng gần nhất. Click vào từng dòng sẽ xổ ra (Accordion) hoặc pop-up **Breakdown chi tiết**: `Giá KH trả - 15% Phí nền tảng = Số tiền thực thu`. | UC-T-12 |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Thanh điều hướng dưới cùng (Bottom Nav) cố định, nền trắng.

| # | Tab | Icon | Trạng thái mặc định | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` | Xám | Quay về màn hình nhận đơn (M16) | UC-T-04 → T-09 |
| 3.2 | **Lịch sử** | 🕒 `history` | Xám | Tab Lịch sử | UC-T-10 |
| 3.3 | **Thống kê** | 📊 `bar_chart` | **Màu Teal (Active)** | Đang ở màn hình này (M17) | UC-T-12, T-13 |
| 3.4 | **Cá nhân** | 👤 `person` | Xám | Tab Hồ sơ Cá nhân | UC-T-14 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  Thu nhập & Thống kê      [Tháng▼] │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐  │
│  │ Số dư khả dụng                │  │
│  │ 💰 1,500,000 đ                │  │
│  │                               │  │
│  │ [     YÊU CẦU RÚT TIỀN    ]   │  │
│  │ * T+1 · Min 100k · TNCN 10%   │  │
│  └───────────────────────────────┘  │
│                                     │
│  [Tổng thu]         [Hoàn thành]    │
│   2.5M đ               12 đơn       │
│  [Tỷ lệ HT]         [Đánh giá]      │
│     95%                4.9 ⭐       │
│                                     │
│  Biểu đồ thu nhập 📊                │
│  │   █               █           │  │
│  │   █   █       █   █           │  │
│  └───┴───┴───┴───┴───┴─────────     │
│  Danh sách giao dịch                │
│  - Đơn dọn nhà (Click xem breakdown)│
│  - Đơn trông trẻ                    │
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
| **Header** | 2 | Tiêu đề + Bộ lọc thời gian |
| **Body** | 4 section | Ví & Rút tiền · 4 KPI · Biểu đồ · Danh sách Breakdown |
| **Footer** | 4 tab | Trang chủ · Lịch sử · Thống kê · Cá nhân |

> [!NOTE]
> Tài liệu được xây dựng hoàn toàn dựa vào mô tả nghiệp vụ (M17, UC-T-12, UC-T-13) từ file tài liệu nguồn. Không tự ý thêm tính năng ngoài phạm vi yêu cầu (như nạp tiền hay vay vốn).
