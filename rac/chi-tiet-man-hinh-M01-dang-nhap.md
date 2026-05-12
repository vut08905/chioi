# 📱 CHI TIẾT MÀN HÌNH M01 — ĐĂNG NHẬP

> **Mã màn hình:** M01 · `login.php`
> **Luồng:** 🟠 Khách hàng (Cư dân) / 🟢 Tasker
> **UC liên quan:** UC-KH-01
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Màn hình mở lên đầu tiên khi app khởi động (nếu chưa đăng nhập).

---

## 1️⃣ PHẦN ĐẦU — HEADER / LOGO KHU VỰC

Do là màn hình Đăng nhập, phần Header sẽ cao hơn bình thường để chứa Logo ứng dụng.

| # | Thành phần | Mô tả chi tiết |
|---|---|---|
| 1.1 | **Background Header** | Dải gradient cam (`#FF7E36` → `#A04100`) phủ nửa trên màn hình. Kéo dài xuống bằng một đường bo góc mềm mại. |
| 1.2 | **Logo Chị Ơi** | Logo chữ "Chị Ơi!" màu trắng to, rõ ràng, căn giữa. Có sub-title "Dịch vụ tiện ích tại gia". |

---

## 2️⃣ PHẦN GIỮA — KHUNG ĐĂNG NHẬP (FORM)

Nằm trên một thẻ (Card) màu trắng nổi bật, đổ bóng lên phần background cam.

### 2.1 🏷 CHỌN ĐỐI TƯỢNG (TAB)
- Hai tab ngang trên cùng của Card: **"Cư dân"** (Khách hàng) và **"Tasker"**.
- Theo luồng khách hàng: Tab **"Cư dân"** đang active (chữ cam đậm, gạch chân cam).

### 2.2 ✏️ NHẬP THÔNG TIN
- **Input Số điện thoại**: Ô nhập viền xám nhạt bo tròn. Placeholder: "Nhập số điện thoại". Icon phone bên trái.
- **Input Mật khẩu**: Ô nhập viền xám. Placeholder: "Nhập mật khẩu". Có icon "Mắt" để ẩn/hiện mật khẩu.
- **Lưu ý hệ thống (UC-KH-01)**: Nếu nhập sai, hiện text lỗi màu đỏ: *"Sai mật khẩu. Tài khoản sẽ bị khóa 15 phút sau 5 lần nhập sai."*

### 2.3 🔐 QUÊN MẬT KHẨU & BẢO MẬT
- Text link **"Quên mật khẩu?"** màu cam, góc phải dưới ô Mật khẩu. Nhấn → sang M03.
- Dòng text nhỏ (hiển thị khi đăng nhập thành công nếu ví >5tr): *"Hệ thống sẽ yêu cầu 2FA (OTP) vì số dư ví của bạn > 5.000.000 đ"*.

### 2.4 🔘 NÚT ĐĂNG NHẬP (CTA)
- Nút lớn, nền gradient cam, chữ trắng: **"ĐĂNG NHẬP"**. Bo tròn 16px.

### 2.5 🆕 ĐĂNG KÝ
- Dưới cùng card: *"Chưa có tài khoản? **Đăng ký ngay**"*. (Link sang màn hình đăng ký).

---

## 3️⃣ PHẦN CHÂN — FOOTER

- **KHÔNG CÓ** Bottom Navigation Bar (Do đây là màn hình Auth, chưa vào hệ thống).

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│  [Nền gradient cam phủ nửa trên]    │
│            [LOGO Chị Ơi]            │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  [Cư dân] (active)  [Tasker]  │  │
│  │  ────────────────────────     │  │
│  │                               │  │
│  │  📞 Nhập số điện thoại        │  │
│  │                               │  │
│  │  🔒 Nhập mật khẩu         [👁]│  │
│  │                               │  │
│  │                 Quên mật khẩu?│  │
│  │                               │  │
│  │  [       ĐĂNG NHẬP       ]    │  │
│  │                               │  │
│  │    Chưa có TK? Đăng ký ngay   │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```
