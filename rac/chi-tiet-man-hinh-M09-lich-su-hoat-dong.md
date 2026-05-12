# 📱 CHI TIẾT MÀN HÌNH M09 — LỊCH SỬ HOẠT ĐỘNG

> **Mã màn hình:** M09 · `activity.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-14 (Xem lịch sử hoạt động) · UC-KH-13 (Hủy đơn)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M04 (Trang chủ) → tab "Hoạt động" trong Bottom Nav

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Tiêu đề màn hình** | Trái | Dòng chữ **"Hoạt động"** — font đậm 24px, màu trắng. | UC-KH-14 |
| 1.2 | **Nút Export CSV** | Phải | Icon `download` hoặc text "Xuất CSV", màu trắng. Nhấn → xuất danh sách đơn ra file CSV. | UC-KH-14: "Export CSV" |

> [!NOTE]
> Header M09 **KHÔNG** có nút Back vì đây là tab chính trong Bottom Nav (tab "Hoạt động"). Tương tự trang chủ M04.

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa 3 tab phân loại theo dịch vụ, bộ lọc, và danh sách đơn hàng.

---

### 2.1 📑 3 TAB PHÂN LOẠI THEO DỊCH VỤ

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Tab bar** | 3 tab nằm ngang, có thể cuộn ngang nếu cần. Tab active có gạch chân cam đậm + chữ cam đậm. Tab inactive chữ xám. | UC-KH-14: "3 tab theo loại DV" |

**3 tab:**

| Tab | Tên | Nội dung |
|---|---|---|
| 1 | **Tất cả** | Tất cả đơn hàng (mặc định active) |
| 2 | **Dọn nhà** | Chỉ đơn dọn nhà |
| 3 | **Trông trẻ** | Chỉ đơn trông trẻ |

> **Giao diện:** Tab bar dính dưới header, nền trắng. Font `label-sm` đậm. Gạch chân active: 2px solid `primary`.

---

### 2.2 🔍 BỘ LỌC

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Chip lọc theo DV** | Các chip bo tròn: Tất cả / Dọn nhà / Trông trẻ / Mua hộ. Active: nền cam nhạt. | UC-KH-14: "bộ lọc DV" |
| 2.2.2 | **Lọc theo ngày** | Bộ chọn khoảng ngày (từ ngày — đến ngày). Input bo tròn, icon lịch. | UC-KH-14: "bộ lọc ngày" |
| 2.2.3 | **Lọc theo Tasker** | Dropdown hoặc search input chọn Tasker đã từng phục vụ. | UC-KH-14: "bộ lọc Tasker" |

---

### 2.3 📋 DANH SÁCH ĐƠN HÀNG

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Card đơn hàng** | Mỗi đơn là 1 card trắng bo tròn 16px, shadow nhẹ. Chứa: icon dịch vụ + tên DV + ngày giờ + tên Tasker + trạng thái (badge màu) + tổng tiền. Nhấn → xem chi tiết đơn. | UC-KH-14 |

**Trạng thái đơn (badge màu):**

| Trạng thái | Màu badge |
|---|---|
| Đang thực hiện | Xanh dương nhạt |
| Hoàn thành | Xanh lá nhạt |
| Đã hủy | Đỏ nhạt |

---

### 2.4 📭 EMPTY-STATE

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.4.1 | **Trạng thái trống** | Khi chưa có đơn hàng nào: hiển thị hình minh họa (illustration) + dòng chữ **"Bạn chưa có hoạt động nào"** + nút **"Đặt dịch vụ ngay"** → quay về M04. | UC-KH-14: "Empty-state khi chưa có đơn" |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04. **4 tab**, tab "Hoạt động" đang **active**:

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2 | **Hoạt động** | 📋 `assignment` (filled) | ✅ **Active — màu cam, icon filled** | → M09 (đang ở đây) | UC-KH-14 |
| 3.3 | **Thông báo** | 🔔 `notifications` (outline) | Xám + badge đỏ | → **M11** | UC-KH-15 |
| 3.4 | **Tài khoản** | 👤 `person` (outline) | Xám | → **M15** | UC-KH-20 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  Hoạt động                  [CSV]  │
├─────────────────────────────────────┤
│  [Tất cả] [Dọn nhà] [Trông trẻ]   │  ← 3 tab
│  ─────────                          │  ← gạch chân active
│                                     │
│  🔍 Lọc: DV · Ngày · Tasker       │  ← Bộ lọc
│                                     │
│  ┌─────────────────────────────┐    │
│  │ 🧹 Dọn dẹp nhà             │    │
│  │ 20/10 10:00 · Nguyễn Lan   │    │
│  │ ✅ Hoàn thành    450.000 đ │    │  ← Card đơn 1
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ 👶 Trông trẻ                │    │
│  │ 18/10 18:00 · Trần Minh    │    │
│  │ 🔵 Đang TH       300.000 đ │    │  ← Card đơn 2
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ 🛒 Mua hộ WinMart          │    │
│  │ 15/10 14:00 · Lê Hoa       │    │
│  │ 🔴 Đã hủy       550.000 đ │    │  ← Card đơn 3
│  └─────────────────────────────┘    │
│                                     │
│         ↕ CUỘN (scroll)             │
├─────────────────────────────────────┤
│  🏠    📋    🔔    👤  (floating)  │
│       active                        │
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 2 | Tiêu đề + Nút Export CSV |
| **Body** | 4 section | 3 tab DV · Bộ lọc · Danh sách đơn · Empty-state |
| **Footer** | 4 tab | Trang chủ · **Hoạt động (active)** · Thông báo · Tài khoản |
| **Tổng** | **10 thành phần chính** | |

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `chioi_wms_mockup.html`). Không tự ý thêm bất kỳ chức năng nào ngoài UC-KH-14, UC-KH-13.
