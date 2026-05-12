# 📱 CHI TIẾT MÀN HÌNH M13 — VÍ & LỊCH SỬ GIAO DỊCH

> **Mã màn hình:** M13 · `wallet.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-17, UC-KH-19
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M15 (Tài khoản) → chọn Ví Chị Ơi.

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

- **Header** gradient cam, nút Back, Tiêu đề "Ví Chị Ơi". Nút Export (PDF/CSV) bên phải.

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT

### 2.1 💳 CARD SỐ DƯ
- Card màu gradient cam nổi bật. Hiển thị chữ lớn: **Số dư: 500.000 đ**.
- 2 nút hành động chính bên trong card:
  - **Nạp tiền** (Chuyển sang M14)
  - **Rút tiền** (Yêu cầu KYC mức 2, phí 5k, xử lý T+1. Hạn mức: 50k-50tr/ngày).

### 2.2 🔍 BỘ LỌC GIAO DỊCH
- Lọc theo Loại (Nạp, Rút, Thanh toán, Hoàn tiền) và Ngày (từ - đến).

### 2.3 📋 LỊCH SỬ GIAO DỊCH
- Danh sách scroll được. Mỗi dòng giao dịch:
  - Icon loại giao dịch.
  - Tiêu đề (VD: "Thanh toán dọn nhà", "Nạp tiền").
  - Thời gian.
  - Số tiền (màu xanh lá nếu +, đỏ nếu -).
  - Trạng thái (Thành công, Đang xử lý).

---
*(Không có Bottom Nav, vì đây là màn hình con từ tab Tài khoản)*
