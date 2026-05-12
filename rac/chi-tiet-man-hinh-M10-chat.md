# 📱 CHI TIẾT MÀN HÌNH M10 — CHAT VỚI KHÁCH HÀNG / TASKER

> **Mã màn hình:** M10 · `chat.php`
> **Luồng:** 🟢 Tasker (Người giúp việc) & 🟠 Khách hàng (Dùng chung giao diện)
> **UC liên quan:** UC-T-11 (Tasker chat với KH) / UC-KH-11 (KH chat với Tasker)
> **Màu chủ đạo:** Cam (Khách hàng) / Teal (Tasker) - Đồng bộ theo luồng người dùng hiện tại
> **Điểm vào:** Từ M08 (Theo dõi tiến trình đơn) hoặc M16 (App Tasker - đơn đang thực hiện) → Nhấn nút "Chat"

---

## 1️⃣ PHẦN ĐẦU — HEADER / TOP APP BAR

Header cố định ở trên cùng, nền màu chủ đạo (Cam hoặc Teal tùy luồng), chữ trắng.

| # | Thành phần | Vị trí | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|---|
| 1.1 | **Nút quay lại (Back)** | Trái | Icon mũi tên trái (`arrow_back`), màu trắng. Nhấn vào → quay lại màn hình trước đó. | Luồng điều hướng |
| 1.2 | **Avatar & Tên đối tác** | Giữa | Avatar tròn nhỏ và Tên người đang chat (Ví dụ: "KH Nguyễn Văn A" hoặc "Cô lao công Lê Thị B"). | UC-KH-11, UC-T-11 |
| 1.3 | **Trạng thái Online/Offline** | Giữa (dưới tên) | Chữ nhỏ "Đang hoạt động" (chấm xanh) hoặc "Ngoại tuyến" (chấm xám). | UC-KH-11, UC-T-11 |
| 1.4 | **Icon Gọi điện** | Phải | Biểu tượng điện thoại (`call`), màu trắng. Nhấn → Gọi điện trực tiếp cho đối tác. | UC-KH-12 |

---

## 2️⃣ PHẦN GIỮA — BODY / MAIN CONTENT (VÙNG CHAT - CÓ THỂ CUỘN)

Phần này cuộn dọc (scroll), chứa toàn bộ lịch sử trò chuyện. Cuộn từ dưới lên (tin mới nhất ở dưới).

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 2.1 | **Thông báo hệ thống (Ghim)** | Cảnh báo nhỏ nền vàng nhạt ở trên cùng: "Tin nhắn được lưu trữ trong 90 ngày. Vui lòng không chia sẻ số điện thoại cá nhân để đảm bảo an toàn." | UC-KH-11, UC-T-11 ("Lưu 90 ngày", "Cấm chia sẻ SĐT") |
| 2.2 | **Bong bóng chat (Đối tác)** | Nằm bên trái, nền xám nhạt (`surface-container-low`), chữ đen. | UC-KH-11, UC-T-11 ("Chat 2 chiều") |
| 2.3 | **Bong bóng chat (Của mình)**| Nằm bên phải, nền màu chủ đạo nhạt (ví dụ `primary-fixed`), chữ đậm hơn. Hiện trạng thái "Đã gửi", "Đã xem". | UC-KH-11, UC-T-11 |
| 2.4 | **Tin nhắn hình ảnh** | Hỗ trợ gửi/nhận ảnh. Ảnh hiển thị dưới dạng thumbnail bo góc, click vào xem full màn hình. | UC-KH-11, UC-T-11 ("text + ảnh") |
| 2.5 | **Lọc từ ngữ (Bad-words)** | Hệ thống tự động thay thế từ ngữ phản cảm thành `***` trực tiếp trên bong bóng chat. | UC-KH-11 ("Lọc bad-words") |
| 2.6 | **Chặn chia sẻ SĐT** | Khi phát hiện chuỗi số giống SĐT, tin nhắn bị chặn gửi + thông báo lỗi "Bạn không được phép gửi số điện thoại cá nhân". | UC-KH-11 ("Cấm chia sẻ SĐT cá nhân") |

---

## 3️⃣ PHẦN CHÂN — FOOTER / KHU VỰC NHẬP LIỆU (CHAT INPUT)

Thay vì Bottom Navigation Bar (4 tab), màn hình Chat sẽ thay thế Footer bằng Thanh nhập liệu để tối ưu không gian chat.

| # | Thành phần | Mô tả chi tiết | Nguồn dữ liệu |
|---|---|---|---|
| 3.1 | **Icon Đính kèm ảnh** | Nút icon camera hoặc thư viện ảnh ở bên trái ô nhập. Mở bộ chọn ảnh của thiết bị. | UC-KH-11, UC-T-11 ("Chat ảnh") |
| 3.2 | **Ô nhập tin nhắn (Input)** | Text input dạng pill-shape (bo tròn), placeholder: "Nhập tin nhắn...". Tự động mở rộng chiều cao khi gõ nhiều dòng (tối đa 4-5 dòng). | UC-KH-11, UC-T-11 |
| 3.3 | **Nút Gửi (Send)** | Icon mũi tên gửi (`send`), đổi màu thành màu chủ đạo khi có text trong ô nhập, xám nếu ô trống. | UC-KH-11, UC-T-11 |

---

## 📐 SƠ ĐỒ BỐ CỤC TỔNG THỂ

```
┌─────────────────────────────────────┐
│         HEADER (cố định)            │
│  [←] (Avatar) KH Nguyễn A   [Gọi] │
│      🟢 Đang hoạt động              │
├─────────────────────────────────────┤
│  ┌───────────────────────────────┐  │
│  │ ⚠ Tin nhắn lưu 90 ngày. Cấm   │  │
│  │ chia sẻ SĐT cá nhân!          │  │
│  └───────────────────────────────┘  │
│                                     │
│  [Avatar]                           │
│  ┌─────────────────┐                │
│  │ Cô sắp tới chưa │ 10:05          │
│  └─────────────────┘                │
│                                     │
│                  ┌────────────────┐ │
│          10:06   │ Dạ cháu đang   │ │
│                  │ trên đường ạ.  │ │
│                  └────────────────┘ │
│                          Đã xem ✓✓  │
│                                     │
│  [Avatar]                           │
│  ┌─────────────────┐                │
│  │ [Ảnh đính kèm]  │ 10:08          │
│  └─────────────────┘                │
│                                     │
├─────────────────────────────────────┤
│         FOOTER (Khu vực nhập)       │
│  [📷] ( Nhập tin nhắn...        ) [►]│
└─────────────────────────────────────┘
```

---

## 📋 TÓM TẮT TỔNG THÀNH PHẦN

| Phần | Số thành phần | Ghi chú |
|---|---|---|
| **Header** | 4 | Nút Back + Avatar/Tên + Trạng thái Online/Offline + Icon Gọi |
| **Body** | 6 section | Thông báo ghim · Bong bóng trái · Bong bóng phải · Ảnh · Lọc bad-words · Chặn SĐT |
| **Footer** | 3 | Icon Đính kèm ảnh · Ô nhập text · Nút Gửi |
| **Tổng** | **13 thành phần chính** | |

> [!NOTE]
> Tài liệu này **100% dựa trên 3 file nguồn** (`chioi_luong_su_kien_chi_tiet.docx`, `chioi_review_usecase.xlsx`, `danh-sach-man-hinh-chioi.md`) và logic UC-KH-11, UC-T-11. Không tự ý thêm bất kỳ tính năng nào ngoài nghiệp vụ đã duyệt. Màn hình này **dùng chung cho cả Khách hàng và Tasker**.
