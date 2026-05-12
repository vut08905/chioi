# DANH SÁCH CÔNG VIỆC TRIỂN KHAI HỆ THỐNG "CHỊ ƠI!" (MASTER TO-DO LIST)

Dựa trên bản thiết kế CSDL và kiến trúc công nghệ đã chốt, đây là danh sách những việc cần làm chi tiết, chia theo từng giai đoạn (Phase). Bản kế hoạch này dành cho team Dev để thực thi theo chuẩn công nghiệp, không bỏ sót tính năng nào.

---

## GIAI ĐOẠN 1: THIẾT LẬP CƠ SỞ DỮ LIỆU & HẠ TẦNG (DB & INFRA)

- [ ] **1.1. Khởi tạo Database Chính (PostgreSQL)**
  - [ ] Cài đặt PostgreSQL và extension **PostGIS** (dùng để tính toán khoảng cách tọa độ).
  - [ ] Chuyển đổi mã SQL từ MySQL (file `chioi_database_schema.sql`) sang cú pháp chuẩn của PostgreSQL.
- [ ] **1.2. Bổ sung các Bảng & Cột còn thiếu vào Schema:**
  - [ ] **Bảng `orders`:** Thêm các cột `latitude` (vĩ độ), `longitude` (kinh độ), `payment_method` (phương thức thanh toán), `payment_status` (trạng thái thanh toán), `voucher_id`, `discount_amount`.
  - [ ] **Tạo bảng `order_status_history`:** Lưu lịch sử thay đổi trạng thái (order_id, status, location_at_time, timestamp) để tracking.
  - [ ] **Tạo bảng `vouchers`:** Quản lý mã giảm giá (Mã, Mức giảm, Điều kiện, Ngày hết hạn).
  - [ ] **Tạo bảng `admin_audit_logs`:** Ghi log thao tác của Admin.
- [ ] **1.3. Khởi tạo Database Phụ:**
  - [ ] Cài đặt **Redis**: Dùng làm Pub/Sub cho tin nhắn realtime và lưu cache vị trí GPS liên tục của Tasker.
  - [ ] Cài đặt **MongoDB**: Cấu hình bảng collections cho `messages` (Chat) và `admin_audit_logs` để tối ưu dung lượng text.

---

## GIAI ĐOẠN 2: PHÁT TRIỂN MÁY CHỦ API (BACKEND - NODE.JS / NESTJS)

- [ ] **2.1. Khởi tạo Project & Security:**
  - [ ] Setup dự án NestJS (TypeScript).
  - [ ] Cấu hình JWT (JSON Web Token) cho 3 role (Customer, Tasker, Admin).
- [ ] **2.2. Xây dựng Module Hệ thống Cốt lõi (REST API):**
  - [ ] **Module Auth:** Đăng nhập, Đăng ký, OTP, Quên mật khẩu.
  - [ ] **Module Order:** Tạo đơn hàng, tính toán giá tiền (tính quãng đường + áp dụng voucher).
  - [ ] **Module Wallet:** Nạp/Rút tiền, trừ tiền hoa hồng nền tảng, cộng tiền thù lao cho Tasker.
- [ ] **2.3. Xây dựng Module Real-time (Socket.io):**
  - [ ] **Socket GPS Tracking:** Lắng nghe tọa độ GPS (vĩ độ/kinh độ) gửi lên từ Tasker mỗi 5 giây, cập nhật vào Redis.
  - [ ] **Thuật toán Matching:** Dùng PostGIS quét xung quanh tọa độ đơn hàng (bán kính 3-5km), tìm Tasker rảnh việc và bắn thông báo (Push Notification/Socket) đến điện thoại Tasker đó.
  - [ ] **Socket Chat 1-1:** Kênh nhắn tin nội bộ giữa Khách hàng và Tasker.

---

## GIAI ĐOẠN 3: PHÁT TRIỂN QUẢN TRỊ ADMIN (WMS PORTAL - REACT.JS)

- [ ] **3.1. Khởi tạo Project:** Setup Next.js, cấu hình Tailwind CSS (chú ý sử dụng đúng định dạng kebab-case cho màu sắc như đã fix).
- [ ] **3.2. Cấu trúc UI Component:** Chuyển đổi các file HTML tĩnh (từ tài liệu Mockup WMS) thành các React Components.
- [ ] **3.3. Các tính năng cốt lõi cần ghép API:**
  - [ ] **Màn hình Dashboard:** Hiển thị biểu đồ doanh thu, số lượng đơn hàng (Real-time).
  - [ ] **Quản lý Tasker (KYC):** Màn hình duyệt/từ chối hồ sơ (CCCD/Lý lịch) của người giúp việc.
  - [ ] **Quản lý Đơn hàng (Live Map):** Tích hợp Google Maps hiển thị vị trí thực của các Tasker đang di chuyển trên bản đồ.
  - [ ] **Cấu hình Hệ thống & Audit Log:** Quản lý bảng giá dịch vụ, xem lại lịch sử thao tác của các Admin khác.

---

## GIAI ĐOẠN 4: PHÁT TRIỂN ỨNG DỤNG DI ĐỘNG (FLUTTER)

Khuyến nghị dùng kiến trúc **Monorepo** để chia sẻ các logic chung (Mạng, Database, Model) giữa 2 App.

### 4.1. App Khách hàng (Customer App)
- [ ] **UI/UX:** Tích hợp giao diện (M04 và các màn khác) từ thư mục `Khachhang`. Đảm bảo hiệu ứng cuộn, gradient Header và thanh tìm kiếm mượt mà.
- [ ] **Tạo đơn & Tìm Tasker:** Tích hợp Map để người dùng ghim vị trí. Gửi yêu cầu lên server qua WebSocket và hiển thị UI "Đang tìm kiếm Tasker...".
- [ ] **Tracking:** Hiển thị vị trí của Tasker trên bản đồ đang di chuyển về phía nhà Khách hàng (cập nhật 5s/lần).
- [ ] **Thanh toán:** Tích hợp cổng thanh toán (VNPay / Momo / thẻ tín dụng) để nạp tiền vào Ví Chị Ơi.

### 4.2. App Người giúp việc (Tasker App)
- [ ] **UI/UX:** Tích hợp giao diện đã chuẩn hóa từ thư mục `Giupviec` (Màn hình M16, M17...). Đảm bảo giao diện Idle (Radar quét) hiển thị chuẩn xác.
- [ ] **Service Chạy Ngầm (Background Location):** (ĐÂY LÀ PHẦN KHÓ NHẤT). Cấu hình Flutter để lấy GPS và bắn lên server *ngay cả khi Tasker đã tắt màn hình hoặc bỏ điện thoại vào túi quần*.
- [ ] **Luồng Nhận Đơn:** Lắng nghe sự kiện từ Socket.io. Khi có đơn bắn tới -> Mở Modal (Pop-up) đếm ngược 60s để Bỏ qua hoặc Nhận đơn.
- [ ] **Cập nhật Trạng thái:** Nút tương tác chuyển trạng thái (Bắt đầu làm -> Hoàn thành -> Nhận tiền).

---

## GIAI ĐOẠN 5: KIỂM THỬ VÀ ĐƯA LÊN CHỢ ỨNG DỤNG (QA & DEPLOY)

- [ ] **5.1. Test Luồng Xuyên Suốt (End-To-End):**
  - Khách tạo đơn -> Server tìm Tasker -> Tasker nhận đơn -> Tasker đi đến nơi -> Làm xong -> Thanh toán -> Admin xem thống kê.
- [ ] **5.2. Triển khai Server:** Đưa Node.js, Postgres, Redis lên môi trường Cloud (AWS / DigitalOcean / Vultr).
- [ ] **5.3. Publish App:** 
  - Xin quyền Location (Always Allow) cho App Tasker trên Android/iOS.
  - Đẩy 2 App lên Google Play Store và Apple App Store.
