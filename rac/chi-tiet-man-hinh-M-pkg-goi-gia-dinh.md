# 📱 CHI TIẾT MÀN HÌNH M-PKG — CHI TIẾT GÓI GIA ĐÌNH 30 NGÀY

> **Mã màn hình:** M-pkg · `goigiadinh.html`
> **Luồng:** 🟠 Khách hàng
> **UC liên quan:** UC-KH-06 (Đặt dịch vụ), UC-KH-22 (Quản lý đăng ký gói)
> **Màu chủ đạo:** Cam (#FF7E36 → #A04100 gradient)
> **Điểm vào:** Nhấn vào Banner "Gói gia đình 30 ngày" từ Trang chủ, hoặc mục "Đăng ký Gói gia đình" trong màn hình Tài khoản.

---

## 1️⃣ PHẦN ĐẦU — HEADER
- Nền dải gradient cam nhạt dần từ trên xuống (`linear-gradient(rgb(255, 126, 54), rgb(252, 249, 248))`).
- Nút **Quay lại** (Mũi tên trái) màu trắng (`text-on-primary`), nhấn để trở về màn hình trước đó.
- Tiêu đề màn hình: **"Gói Gia Đình"** màu trắng, in đậm.
- Nút **Chat/Hỗ trợ** ở góc phải màu trắng.

---

## 2️⃣ PHẦN GIỮA — CHI TIẾT GÓI (SCROLLABLE BODY)

### 2.1 🏷 HEADER GÓI DỊCH VỤ (HERO SECTION)
- Card nổi bật với màu nền gradient cam hoặc hình ảnh minh họa gia đình mờ làm nền.
- Tên gói: **"GÓI GIA ĐÌNH 30 NGÀY"**.
- Giá: **"1.500.000 đ / tháng"** (Hiển thị lớn, đậm).
- Tag: "Tiết kiệm đến 30%" (Màu xanh hoặc màu vàng nổi bật).

### 2.2 ✨ QUYỀN LỢI GÓI
- Danh sách các đặc quyền (dạng list có biểu tượng check xanh lá):
  - Dọn dẹp nhà 4 lần/tháng (Tối đa 4 giờ/lần).
  - Tặng kèm 1 lần giặt sofa/rèm cửa.
  - Ưu tiên Tasker 5 sao, không phụ phí giờ cao điểm.
  - Hỗ trợ Chăm sóc khách hàng VIP ưu tiên 24/7.

### 2.3 📋 ĐIỀU KHOẢN VÀ ĐIỀU KIỆN (T&C)
- Chữ kích thước nhỏ hơn (`text-body-sm`), màu xám (`text-on-surface-variant`).
- Nội dung: Tự động gia hạn hàng tháng qua Ví Chị Ơi hoặc thẻ thanh toán đã liên kết.
- **Cảnh báo tính năng (UC-KH-22)**: Hệ thống sẽ tự động gửi thông báo nhắc nhở 3 ngày trước khi hết hạn/tiến hành gia hạn. Khách hàng có thể tùy chọn hủy gói bất kỳ lúc nào trong phần Cài đặt tài khoản.

### 2.4 ❓ CÂU HỎI THƯỜNG GẶP (FAQ)
- Giao diện dạng Accordion (Nhấn vào để mở rộng/thu gọn câu trả lời).
  - *Gói này có dùng được cho nhiều địa chỉ không?* (Chỉ áp dụng cho 1 địa chỉ mặc định đã đăng ký).
  - *Tôi có thể chọn Tasker cố định không?* (Có, bạn có thể thiết lập danh sách Tasker yêu thích ưu tiên).
  - *Quá trình gia hạn tự động thanh toán diễn ra như thế nào?* (Hệ thống trừ tiền tự động từ Ví Chị Ơi hoặc Thẻ tín dụng lúc 00:00 ngày cuối chu kỳ).

---

## 3️⃣ PHẦN CHÂN — CTA DÍNH (STICKY BOTTOM)

- Một thanh Bar cố định ở dưới cùng màn hình (thay thế cho Bottom Navigation Bar do đây là trang chi tiết dịch vụ/thanh toán, cần tập trung vào call-to-action).
- Nền trắng, đổ bóng nhẹ lên trên để phân tách với nội dung cuộn.
- Bên trái: Hiển thị Tổng tiền **1.500.000 đ / tháng**.
- Bên phải: Nút **"Đăng ký ngay"** (Nền cam gradient, chữ trắng, bo tròn 999px). Bấm vào sẽ mở Popup xác nhận thanh toán hoặc liên kết ví.

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```text
┌─────────────────────────────────────┐
│ [<]       Gói Gia Đình          [💬]│
│─────────────────────────────────────│
│                                     │
│  ┌───────────────────────────────┐  │
│  │ 👨‍👩‍👧‍👦 GÓI GIA ĐÌNH 30 NGÀY       │  │
│  │ 💰 1.500.000 đ / tháng        │  │
│  │ 🏷 Tiết kiệm 30%               │  │
│  └───────────────────────────────┘  │
│                                     │
│  ✨ QUYỀN LỢI NỔI BẬT                │
│  [✓] Dọn nhà 4 lần/tháng             │
│  [✓] Ưu tiên Tasker 5 sao            │
│  [✓] Miễn phụ phí giờ cao điểm       │
│                                     │
│  📋 ĐIỀU KHOẢN (T&C)                 │
│  Gói sẽ được gia hạn tự động...      │
│  (Nhắc 3 ngày trước khi hết hạn)     │
│                                     │
│  ❓ FAQ                             │
│  [+] Câu hỏi 1                       │
│  [-] Câu hỏi 2                       │
│    Trừ tiền tự động qua Ví Chị Ơi    │
│                                     │
│─────────────────────────────────────│
│ Tổng cộng:            [ ĐĂNG KÝ NGAY ]│
│ 1.500.000 đ                          │
└─────────────────────────────────────┘
```
