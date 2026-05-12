# 📱 CHI TIẾT MÀN HÌNH M03 — QUÊN MẬT KHẨU / OTP

> **Mã màn hình:** M03 · `forgot-password.php`
> **Luồng:** 🟠 Khách hàng (Cư dân) / 🟢 Tasker
> **UC liên quan:** UC-KH-02
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M01 (Đăng nhập) → Nhấn "Quên mật khẩu?".

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

| # | Thành phần | Vị trí | Mô tả chi tiết |
|---|---|---|---|
| 1.1 | **Nút quay lại (Back)** | Trái | Icon mũi tên trái (`arrow_back`), màu trắng. Nhấn → Quay về M01. |
| 1.2 | **Tiêu đề màn hình** | Giữa | Dòng chữ **"Quên mật khẩu"** — font đậm 18px, màu trắng. |
| 1.3 | **Background Header** | Nền | Dải gradient cam (`#FF7E36` → `#A04100`). |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT

Quá trình bao gồm 3 bước liên tiếp, có thể gom chung thiết kế trên 1 flow:

### 2.1 BƯỚC 1: NHẬP SỐ ĐIỆN THOẠI
- Text hướng dẫn: *"Vui lòng nhập số điện thoại đã đăng ký để nhận mã OTP."*
- Input Số điện thoại bo tròn viền xám.
- Nút **"Nhận mã OTP"** (Nền cam).
- **Lưu ý hệ thống (UC-KH-02)**: Dòng text cảnh báo nhỏ (khi nhấn gửi): *"Giới hạn: Bạn chỉ được yêu cầu gửi lại mã tối đa 3 lần / 30 phút."*

### 2.2 BƯỚC 2: XÁC THỰC OTP
- Text hướng dẫn: *"Mã OTP đã được gửi đến số 090xxxx123."*
- Khung nhập OTP: Gồm 6 ô vuông bo tròn để nhập 6 số. Khi nhập tự động nhảy sang ô tiếp theo.
- Nút đếm ngược: *"Gửi lại mã sau 04:59s"* (Hiệu lực OTP là 5 phút theo quy định).

### 2.3 BƯỚC 3: ĐẶT LẠI MẬT KHẨU
- Hiển thị sau khi nhập đúng OTP.
- Text hướng dẫn: *"Vui lòng nhập mật khẩu mới cho tài khoản của bạn."*
- Input Mật khẩu mới (Có icon mắt).
- Input Nhập lại mật khẩu mới (Có icon mắt).
- Nút **"Lưu mật khẩu & Đăng nhập"** (CTA gradient cam lớn).

---

## 3️⃣ PHẦN CHÂN — FOOTER

- **KHÔNG CÓ** Bottom Navigation Bar.

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│  [←] Quên mật khẩu                  │
├─────────────────────────────────────┤
│                                     │
│  🔒 Lấy lại mật khẩu               │
│                                     │
│  Nhập số điện thoại đã đăng ký:     │
│  [📞 090xxxx123                  ]  │
│                                     │
│  [       NHẬN MÃ OTP             ]  │
│                                     │
│  ⚠ Giới hạn 3 lần gửi / 30 phút.    │
│                                     │
│  ───────────────────────────────    │
│  Mã OTP (Hiệu lực: 5 phút):         │
│  [ ] [ ] [ ] [ ] [ ] [ ]            │
│  Gửi lại sau 04:59s                 │
│                                     │
└─────────────────────────────────────┘
```
