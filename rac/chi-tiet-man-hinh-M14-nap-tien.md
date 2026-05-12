# 📱 CHI TIẾT MÀN HÌNH M14 — NẠP TIỀN QR

> **Mã màn hình:** M14 · `topup-qr.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-18 (Nạp tiền)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M13 (Ví) → Nút Nạp tiền, HOẶC từ màn hình thanh toán đơn (khi thiếu tiền).

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

- **Header** gradient cam, nút Back, Tiêu đề "Nạp tiền".

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT

### 2.1 💰 NHẬP SỐ TIỀN
- Input nhập số tiền lớn. Có các chip chọn nhanh (100k, 200k, 500k).

### 2.2 🏦 CHỌN PHƯƠNG THỨC
- Chuyển khoản ngân hàng (QR Code) - Mặc định khuyên dùng.
- MoMo, VNPay (nếu có tích hợp).

### 2.3 📱 QUÉT MÃ QR (Trọng tâm UC-KH-18)
- Khi chọn Chuyển khoản: Hiển thị mã VietQR lớn để KH mở app ngân hàng quét.
- Hiển thị chi tiết (Có nút Copy kế bên):
  - Số tài khoản
  - Tên chủ TK
  - Số tiền
  - Nội dung chuyển khoản: **NAPVI + SĐT** (Reference code bắt buộc để tự động cộng tiền).
- **Lưu ý**: Webhook VietQR sẽ tự động cộng tiền. Nếu có lỗi, admin duyệt thủ công.

### 2.4 🔘 NÚT XÁC NHẬN
- Nút "Tôi đã chuyển khoản" (gradient cam). Khi bấm sẽ hiển thị trạng thái "Đang kiểm tra...".

---
*(Không có Bottom Nav)*
