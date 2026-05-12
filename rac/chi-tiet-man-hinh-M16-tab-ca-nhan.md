# 📱 CHI TIẾT MÀN HÌNH M16 — TAB CÁ NHÂN (APP TASKER)

> **Mã màn hình:** M16 (Tab Cá nhân)
> **Luồng:** 🟢 Tasker (Người giúp việc)
> **UC liên quan:** UC-T-14 (Xem & chỉnh sửa thông tin cá nhân)
> **Màu chủ đạo:** Teal (Màu nhận diện luồng Tasker)
> **Điểm vào:** Nhấn vào Tab "Cá nhân" (Icon hình người) trên Bottom Navigation Bar.

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Giao diện tab chính, không có nút Back (Quay lại).

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Tiêu đề màn hình** | Trái/Giữa | Chữ đậm "Hồ sơ Cá nhân" (hoặc "Tài khoản"). | Giao diện chuẩn |
| 1.2 | **Nút Lưu** | Phải | Nút dạng chữ "Lưu" (chỉ hiện sáng lên khi có thay đổi thông tin). | UC-T-14 |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Khu vực này cho phép Tasker quản lý thông tin hoạt động và xem lại trạng thái xác thực.

### 2.1 📸 THÔNG TIN CƠ BẢN (ĐƯỢC PHÉP SỬA)
| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Avatar & Icon Camera** | Ảnh đại diện to ở giữa. Góc dưới ảnh có icon Camera nhỏ để bấm thay đổi ảnh mới. | UC-T-14 ("chỉnh sửa avatar") |
| 2.1.2 | **Họ tên & SĐT** | Tên (VD: Nguyễn Thị Lan), Số điện thoại (Read-only, mờ đi). | UC-T-14 |
| 2.1.3 | **Mô tả bản thân** | Ô nhập văn bản dạng textarea: "Giới thiệu ngắn về kinh nghiệm của bạn...". Được phép sửa. | UC-T-14 ("chỉnh sửa mô tả") |
| 2.1.4 | **Khu vực hoạt động** | Dropdown/Ô chọn danh sách Quận/Huyện ưu tiên làm việc. | UC-T-14 ("chỉnh sửa khu vực") |

### 2.2 🛠 DỊCH VỤ CUNG CẤP (CẦN DUYỆT)
| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Danh sách dịch vụ hiện tại** | Liệt kê các dịch vụ đã được duyệt (VD: Dọn nhà, Trông trẻ) kèm icon tích xanh. | UC-T-14 |
| 2.2.2 | **Nút Thêm dịch vụ** | Nút "+ Thêm dịch vụ mới". Nhấn vào hiện popup chọn dịch vụ. | UC-T-14 ("thêm DV") |
| 2.2.3 | **Cảnh báo duyệt** | Dòng chữ nhỏ màu cam/vàng: *"Dịch vụ thêm mới yêu cầu Admin phê duyệt trước khi kích hoạt."* | UC-T-14 ("cần Admin duyệt") |

### 2.3 🛡 HỒ SƠ XÁC THỰC KYC (READ-ONLY)
| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Tiêu đề khối KYC** | "Thông tin định danh & Pháp lý" | UC-T-14 |
| 2.3.2 | **CCCD / CMND** | Hiển thị dạng che khuất một phần (VD: `079123***888`). Trạng thái: "🔒 Đã xác thực". Nền xám nhạt không cho bấm sửa. | UC-T-14 ("KYC read-only") |
| 2.3.3 | **Lý lịch tư pháp số 1** | (Nếu có làm DV trông trẻ). Hiện trạng thái file "🔒 Đã phê duyệt". Không cho tải lên lại ở đây. | UC-T-14 ("KYC read-only") |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Thanh điều hướng dưới cùng (Bottom Nav) cố định, nền trắng.

| # | Tab | Icon | Trạng thái mặc định | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` | Xám | Chuyển sang màn nhận đơn (M16) | UC-T-04 → T-09 |
| 3.2 | **Lịch sử** | 🕒 `history` | Xám | Tab Lịch sử đơn | UC-T-10 |
| 3.3 | **Thống kê** | 📊 `bar_chart` | Xám | Chuyển sang màn M17 | UC-T-12 |
| 3.4 | **Cá nhân** | 👤 `person` | **Màu Teal (Active)** | Đang ở tab này | UC-T-14 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  Hồ sơ Cá nhân             [ Lưu ] │
├─────────────────────────────────────┤
│                                     │
│            [ Avatar 📷]            │
│        Nguyễn Thị Lan               │
│        📞 0901***888                │
│                                     │
│  Mô tả bản thân ✎                   │
│  [ Có 3 năm kinh nghiệm dọn dẹp... ]│
│                                     │
│  Khu vực hoạt động ✎               │
│  [ Quận 1, Quận Bình Thạnh ▼       ]│
│  ─────────────────────────────────  │
│  Dịch vụ cung cấp                   │
│  ✅ Dọn dẹp nhà cửa                 │
│  ✅ Trông trẻ                       │
│  [ + Thêm dịch vụ mới ]             │
│  ⚠ Đợi Admin phê duyệt khi thêm mới │
│  ─────────────────────────────────  │
│  Thông tin xác thực (KYC) 🔒        │
│  CCCD: 079123***888 (Đã xác thực)   │
│  Lý lịch TP: Đã tải lên (Hợp lệ)    │
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
| **Header** | 2 | Tiêu đề + Nút Lưu |
| **Body** | 3 section chính | Sửa thông tin cơ bản · Quản lý dịch vụ · KYC Read-only |
| **Footer** | 4 tab | Trang chủ · Lịch sử · Thống kê · Cá nhân |
