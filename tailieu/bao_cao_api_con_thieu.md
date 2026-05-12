# BÁO CÁO TỔNG HỢP TIẾN ĐỘ API BACKEND CHI TIẾT THEO LUỒNG NGƯỜI DÙNG

*(Đối chiếu giữa Code Backend hiện tại và hệ thống Tài liệu: URD, Luồng sự kiện, Use Cases, WMS)*

Dưới đây là bảng thống kê chi tiết các API cần thiết cho 3 luồng tác nhân (Khách hàng, Giúp việc, Admin). Báo cáo ghi rõ trạng thái Đã có, Đã hoạt động hoặc Chưa có dựa trên chính xác những gì đang vận hành trên máy chủ.

---

## 1. LUỒNG KHÁCH HÀNG (CƯ DÂN)

| Tính năng / Use Case | API Endpoint Cần Thiết | Trạng thái | Hoạt động? |
|---|---|:---:|:---:|
| **Đăng nhập / Đăng ký** (UC-KH-01) | `POST /api/auth/login`, `POST /api/auth/register` | ✅ Đã có | 🟢 Tốt |
| **Lấy danh sách dịch vụ** (UC-KH-03) | `GET /api/services` | ✅ Đã có | 🟢 Tốt |
| **Lấy danh sách gói gia đình** (UC-KH-20) | `GET /api/packages` | ✅ Đã có | 🟢 Tốt |
| **Đặt đơn hàng** (UC-KH-05) | `POST /api/orders/book` | ✅ Đã có | 🟢 Tốt |
| **Hủy đơn hàng** (UC-KH-14) | `PATCH /api/orders/:id/cancel` | ✅ Đã có | 🟢 Tốt |
| **Xem lịch sử đơn hàng** (UC-KH-13) | `GET /api/orders/customer/history` | ✅ Đã có | 🟢 Tốt |
| **Đánh giá Tasker** (UC-KH-16) | `POST /api/orders/:id/review` | ✅ Đã có | 🟢 Tốt |
| **Cập nhật trạng thái đơn realtime** | *Websocket (`notifyCustomerOrderStatus`)* | ✅ Đã có | 🟢 Tốt |
| **Xem số dư ví điện tử** (UC-KH-17) | `GET /api/wallets/balance` | ✅ Đã có | 🟢 Tốt |
| **Xem lịch sử giao dịch ví** (UC-KH-18) | `GET /api/wallets/transactions` | ✅ Đã có | 🟢 Tốt |
| **Nạp tiền vào ví** (UC-KH-17) | `POST /api/wallets/deposit` | ✅ Đã có | 🟢 Tốt |
| **Quên mật khẩu / OTP** (UC-KH-02) | `POST /api/auth/forgot-password` v.v.. | ✅ Đã có | 🟢 Tốt |
| **Yêu cầu rút tiền** (UC-KH-19) | `POST /api/wallets/withdraw` | ✅ Đã có | 🟢 Tốt |
| **Chat với Tasker** (UC-KH-11) | *Websocket `send_message`, `GET /api/orders/chat/:id`* | ✅ Đã có | 🟢 Tốt |
| **Tạo khiếu nại/Hỗ trợ** (UC-KH-23) | `POST /api/support/tickets` | ✅ Đã có | 🟢 Tốt |

---

## 2. LUỒNG NGƯỜI GIÚP VIỆC (TASKER)

| Tính năng / Use Case | API Endpoint Cần Thiết | Trạng thái | Hoạt động? |
|---|---|:---:|:---:|
| **Đăng nhập / Đăng ký** (UC-T-01) | `POST /api/auth/login`, `POST /api/auth/register` | ✅ Đã có | 🟢 Tốt |
| **Nhận đơn hàng** (UC-T-06) | `PATCH /api/orders/:id/accept` | ✅ Đã có | 🟢 Tốt |
| **Cập nhật trạng thái làm việc** (UC-T-08/09) | `PATCH /api/orders/:id/status` | ✅ Đã có | 🟢 Tốt |
| **Báo cáo vị trí GPS realtime** (UC-T-05)| *Websocket `update_gps`* | ✅ Đã có | 🟢 Tốt |
| **Xem lịch sử công việc** (UC-T-14) | `GET /api/taskers/history` | ✅ Đã có | 🟢 Tốt |
| **Xem số dư & Lịch sử ví** | `GET /api/wallets/balance`, `GET /api/wallets/transactions` | ✅ Đã có | 🟢 Tốt |
| **Tự động đối soát tiền (Cộng/Trừ phí)** | *Logic nền tảng (Xử lý khi COMPLETED)* | ✅ Đã có | 🟢 Tốt |
| **Đăng ký KYC & Dịch vụ** (UC-T-02) | `POST /api/taskers/kyc` (Tải CCCD, Ảnh) | ✅ Đã có | 🟢 Tốt |
| **Bật / Tắt nhận việc online** (UC-T-04) | `PATCH /api/taskers/status` | ✅ Đã có | 🟢 Tốt |
| **Quên mật khẩu / OTP** (UC-T-03) | `POST /api/auth/forgot-password` | ✅ Đã có | 🟢 Tốt |
| **Yêu cầu rút tiền ví** (UC-T-12) | `POST /api/wallets/withdraw` | ✅ Đã có | 🟢 Tốt |
| **Chat với Khách hàng** (UC-T-11) | *Websocket `send_message`* | ✅ Đã có | 🟢 Tốt |
| **Tạo hỗ trợ / khiếu nại** | `POST /api/support/tickets` | ✅ Đã có | 🟢 Tốt |

---

## 3. LUỒNG QUẢN TRỊ VIÊN (ADMIN)

| Tính năng / Use Case | API Endpoint Cần Thiết | Trạng thái | Hoạt động? |
|---|---|:---:|:---:|
| **Xem thống kê tổng quan** (UC-AD-01) | `GET /api/admin/dashboard` | ✅ Đã có | 🟢 Tốt |
| **Duyệt hồ sơ Tasker (KYC)** (UC-AD-04) | `PATCH /api/admin/taskers/:id/approve` | ✅ Đã có | 🟢 Tốt |
| **Quản lý Dịch vụ (CRUD)** (UC-AD-09) | `POST, PUT, DELETE /api/services` | ✅ Đã có | 🟢 Tốt |
| **Quản lý Gói gia đình (CRUD)** | `POST, PUT, DELETE /api/packages` | ✅ Đã có | 🟢 Tốt |
| **Quản lý Yêu cầu rút tiền** (UC-AD-06) | `GET /api/admin/withdrawals`, `PATCH /api/admin/withdrawals/:id/approve` | ✅ Đã có | 🟢 Tốt |
| **Giải quyết khiếu nại** (UC-AD-08) | `GET /api/admin/tickets`, `PATCH /api/admin/tickets/:id/resolve` | ✅ Đã có | 🟢 Tốt |
| **Xem danh sách Users/Taskers/Orders** | `GET /api/admin/users`, `GET /api/admin/orders` | ✅ Đã có | 🟢 Tốt |
| **Can thiệp đơn hàng khẩn cấp** (UC-AD-03) | `PATCH /api/admin/orders/:id/cancel` | ✅ Đã có | 🟢 Tốt |

---

## TỔNG KẾT & ƯU TIÊN TIẾP THEO

- **Những gì đã hoàn thiện:** Hệ thống backend đã hoàn thành toàn bộ API cho 3 luồng tác nhân (Khách hàng, Giúp việc, Admin) đáp ứng đầy đủ yêu cầu của tài liệu URD. Hệ thống hỗ trợ xử lý luồng sự kiện realtime, ví điện tử, kyc tasker và quản trị cơ bản.
- **Những phần còn thiếu:** Không còn tính năng nào trong danh sách bị thiếu (toàn bộ đã đạt mức Đã có và Hoạt động tốt ở mức MVP).

**Khuyến nghị bước tiếp theo:** 
Có thể tiến hành chuyển giao backend API này cho đội ngũ Frontend App (Flutter/Web) để tích hợp toàn diện. Đồng thời bắt tay vào thiết lập Server Staging để chạy test diện rộng.
