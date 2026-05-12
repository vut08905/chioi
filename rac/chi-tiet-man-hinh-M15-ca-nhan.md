# 📱 CHI TIẾT MÀN HÌNH M15 — CÁ NHÂN / HỒ SƠ

> **Mã màn hình:** M15 · `profile.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-20, UC-KH-21, UC-KH-22, UC-KH-23, UC-KH-24, UC-KH-25
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ Bottom Navigation Bar (Tab "Tài khoản")

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam (`linear-gradient(#FF7E36 → nền trắng)`), chữ trắng. Đồng nhất phong cách với Header trang chủ M04.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Tiêu đề màn hình** | Trái | Dòng chữ **"Tài khoản"** — font đậm 24px, màu trắng. | UC-KH-20 |

> [!NOTE]
> Header M15 **KHÔNG** có nút Back vì đây là tab chính trong Bottom Nav (tương tự M04, M09, M11).

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (CÓ THỂ CUỘN)

Phần này chứa menu quản lý toàn bộ hồ sơ khách hàng.

---

### 2.1 👤 THÔNG TIN CÁ NHÂN (UC-KH-20)

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1.1 | **Avatar & Tên** | Avatar hình tròn lớn + Tên Khách hàng (font đậm 18px) + SĐT. | UC-KH-20 |
| 2.1.2 | **Địa chỉ căn hộ** | Hiển thị địa chỉ căn hộ mặc định. Kèm theo nhãn "Đã xác thực" (màu xanh lá). | UC-KH-20 |
| 2.1.3 | **Cảnh báo thay đổi** | Dòng chú thích nhỏ dưới mục SĐT/Địa chỉ: *Đổi SĐT cần OTP cả số cũ/mới. Đổi địa chỉ cần BQL xác thực lại*. | UC-KH-20: "Đổi SĐT: OTP... Đổi địa chỉ: xác thực BQL" |
| 2.1.4 | **Nút Chỉnh sửa** | Nút "Chỉnh sửa hồ sơ" (chữ cam, viền cam). | UC-KH-20 |

---

### 2.2 💳 TÀI CHÍNH & DỊCH VỤ

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.2.1 | **Quản lý Ví & Thanh toán** | Menu item có icon cái ví (`account_balance_wallet`). Nhấn → M13. Hiển thị số dư hiện tại bên góc phải. | UC-KH-21: "Quản lý ví & phương thức TT" |
| 2.2.2 | **Gói gia đình** | Menu item có icon ngôi nhà (`family_home`). Nhấn → Đăng ký/Quản lý gói dịch vụ gia đình. | UC-KH-22: "Đăng ký gói gia đình" |

---

### 2.3 ⚙ HỖ TRỢ & CÀI ĐẶT

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.3.1 | **Liên hệ CSKH** | Menu item có icon tai nghe (`support_agent`). Nhấn → Gọi tổng đài hoặc chat với Admin. | UC-KH-23 |
| 2.3.2 | **Cài đặt hệ thống** | Menu item có icon bánh răng (`settings`). Gồm các tuỳ chọn: Thông báo, ngôn ngữ. | UC-KH-24 |
| 2.3.3 | **Bảo mật & Quyền riêng tư** | Menu item có icon ổ khóa (`lock`). Tùy chọn quản lý password, FaceID/TouchID. | UC-KH-24 |
| 2.3.4 | **Xóa tài khoản** | Menu item có icon thùng rác (`delete`), chữ màu đỏ. Nhấn → Yêu cầu xóa dữ liệu. | UC-KH-24: "xóa TK" |

---

### 2.4 🚪 ĐĂNG XUẤT (UC-KH-25)

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.4.1 | **Nút Đăng xuất** | Nút lớn dưới cùng, nền đỏ nhạt (`secondary-fixed-dim`), chữ đỏ đậm (`error`). Nhấn → Xác nhận → Quay về M01 (Đăng nhập). | UC-KH-25 |

---

## 3️⃣ PHẦN CHÂN — FOOTER / BOTTOM NAVIGATION BAR

Đồng nhất hoàn toàn với M04. **4 tab**, tab "Tài khoản" đang **active**:

| # | Tab | Icon | Trạng thái | Nhấn → | UC |
|---|---|---|---|---|---|
| 3.1 | **Trang chủ** | 🏠 `home` (outline) | Xám | → **M04** | UC-KH-03 |
| 3.2 | **Hoạt động** | 📋 `assignment` (outline) | Xám | → **M09** | UC-KH-14 |
| 3.3 | **Thông báo** | 🔔 `notifications` (outline) | Xám + badge đỏ | → **M11** | UC-KH-15 |
| 3.4 | **Tài khoản** | 👤 `person` (filled) | ✅ **Active — màu cam, icon filled** | → M15 (đang ở đây) | UC-KH-20 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  Tài khoản                          │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐    │
│  │ 👤 Nguyễn Văn A            │    │
│  │ 📱 090xxxx123               │    │
│  │ 📍 A1-2003 (Đã xác thực BQL)│    │
│  │ [ Chỉnh sửa hồ sơ ]         │    │
│  └─────────────────────────────┘    │
│                                     │
│  💳 Quản lý Ví & Thanh toán         │
│  🏠 Đăng ký Gói gia đình            │
│  ─────────                          │
│  🎧 Liên hệ CSKH                    │
│  ⚙ Cài đặt (TB, Ngôn ngữ)           │
│  🔒 Bảo mật & Riêng tư              │
│  🗑 Xóa tài khoản (màu đỏ)          │
│                                     │
│  [ ĐĂNG XUẤT ] (Nút màu đỏ)         │
│                                     │
├─────────────────────────────────────┤
│  🏠    📋    🔔    👤  (floating)  │
│                   active            │
└─────────────────────────────────────┘
```

> [!NOTE]
> Tài liệu này **100% dựa trên tài liệu nguồn**. Không tự ý thêm tính năng. Phải đổi SĐT qua OTP và địa chỉ qua BQL như đúng mô tả quy trình.
