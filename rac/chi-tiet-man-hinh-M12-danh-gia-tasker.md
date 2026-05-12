# 📱 CHI TIẾT MÀN HÌNH M12 — ĐÁNH GIÁ TASKER

> **Mã màn hình:** M12 · `review.php`
> **Luồng:** 🟠 Khách hàng (Cư dân)
> **UC liên quan:** UC-KH-16 (Đánh giá Tasker)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Từ M08/M09 (sau khi đơn hoàn thành) hoặc từ Popup nhắc nhở (sau 24h).

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền gradient cam, chữ trắng.

| # | Thành phần | Vị trí | Mô tả chi tiết |
|---|---|---|---|
| 1.1 | **Nút đóng (Close)** | Trái | Icon `close` màu trắng. Nhấn → đóng form đánh giá (có thể đánh giá sau). |
| 1.2 | **Tiêu đề màn hình** | Giữa | Dòng chữ **"Đánh giá chất lượng"** — font đậm 18px, căn giữa. |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT

### 2.1 👩‍🔧 THÔNG TIN TASKER & ĐƠN HÀNG
- **Avatar Tasker** (hình tròn lớn ở giữa) + Tên "Nguyễn Lan".
- Dòng chữ nhỏ bên dưới: "Dịch vụ Dọn dẹp nhà · Ngày 20/10/2026".

### 2.2 ⭐ CHỌN SAO (1-5 SAO)
- 5 icon ngôi sao lớn ở giữa. Khi chọn, sao sáng lên màu vàng cam.
- **Auto-nhắc:** Nếu chưa đánh giá, hệ thống auto-nhắc sau 24h.
- **Rule Admin (UC-KH-16):** Đánh giá ≤2★ → tự động tạo ticket phản ánh cho Admin. Cảnh báo nhỏ hiện ra nếu chọn ≤2★: *"Rất tiếc về trải nghiệm của bạn. Chị Ơi sẽ ghi nhận và xử lý sự cố này."*

### 2.3 🏷 CHỌN TAGS ĐÁNH GIÁ
- Các chip chọn nhanh (VD: "Đúng giờ", "Sạch sẽ", "Nhiệt tình", hoặc "Đến trễ", "Làm ẩu" nếu sao thấp).

### 2.4 📝 NHẬN XÉT CHI TIẾT
- Textarea để KH viết nhận xét thêm (không bắt buộc).
- Nút đính kèm ảnh (nếu cần chứng minh làm hỏng đồ...).

### 2.5 🔘 NÚT GỬI ĐÁNH GIÁ
- Nút CTA lớn, gradient cam: **"Gửi đánh giá"**. Nằm dưới cùng.

---
*(M12 thường là màn hình Popup full-screen, KHÔNG có Bottom Navigation Bar)*
