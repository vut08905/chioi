# KẾ HOẠCH CHI TIẾT: XÂY DỰNG DATABASE -> BACKEND -> KẾT NỐI FRONTEND

Vì toàn bộ giao diện (Frontend UI) tĩnh đã hoàn thiện, mục tiêu bây giờ là làm cho hệ thống "Sống" lên (có dữ liệu thật, chạy logic thật). Dưới đây là quy trình từng bước chi tiết nhất dành cho Lập trình viên Backend để hiện thực hóa dự án "Chị Ơi!".

---

## BƯỚC 1: XÂY DỰNG & TRIỂN KHAI DATABASE (CƠ SỞ DỮ LIỆU)

Mục tiêu: Đưa thiết kế DB lên môi trường chạy thật, bổ sung tọa độ địa lý.

- [ ] **1.1 Cài đặt môi trường Database**
  - Cài đặt **PostgreSQL** (Bắt buộc dùng Postgres thay vì MySQL để tính toán bản đồ nhanh nhất).
  - Cài đặt Extension **PostGIS** (Công cụ chuyên dụng xử lý bản đồ và tọa độ của Postgres).
  - Cài đặt **Redis** (Để làm cache và hàng đợi realtime).
- [ ] **1.2 Cập nhật Schema & Viết script Migration**
  - Chuyển mã SQL cũ sang Postgres SQL.
  - Sửa bảng `orders` và `taskers`: Thay vì dùng số thập phân lưu tọa độ, hãy dùng kiểu dữ liệu không gian `GEOMETRY(Point, 4326)` của PostGIS để tối ưu tìm kiếm bán kính 3km.
  - Bổ sung các cột thanh toán: `payment_method`, `payment_status` vào bảng `orders`.
  - Tạo các bảng còn thiếu: `vouchers`, `order_status_history`, `admin_audit_logs`.
- [ ] **1.3 Khởi tạo dữ liệu mẫu (Seeding)**
  - Viết script tự động insert (chèn) vào DB:
    - 3 tài khoản Khách hàng.
    - 5 tài khoản Tasker với tọa độ GPS rải rác quanh khu vực trung tâm (để test radar).
    - 1 tài khoản Admin.
    - 4 Dịch vụ cơ bản (Dọn nhà, Trông trẻ, Nấu ăn, Đi chợ).

---

## BƯỚC 2: KHỞI TẠO BACKEND API (MÁY CHỦ XỬ LÝ)

Mục tiêu: Dựng Server nhận request từ Frontend, tương tác với Database.

- [ ] **2.1 Khởi tạo Project Backend**
  - Khởi tạo dự án bằng **Node.js + NestJS** (Khuyên dùng vì kiến trúc chuẩn Doanh nghiệp) hoặc Express.js.
  - Cài đặt công cụ ORM: Khuyên dùng **Prisma** hoặc **TypeORM** để kết nối và thao tác với PostgreSQL dễ dàng hơn viết SQL chay.
- [ ] **2.2 Kết nối Backend với Database**
  - Cấu hình file `.env` chứa chuỗi kết nối Database và Redis.
  - Khởi tạo các Model/Entity map đúng với cấu trúc các bảng ở Bước 1.

---

## BƯỚC 3: VIẾT API & WEBSOCKETS (LOGIC CỐT LÕI)

Mục tiêu: Viết các "đầu nối" (Endpoints) để Frontend gọi lấy dữ liệu.

- [ ] **3.1 Nhóm API Xác thực (Authentication)**
  - `POST /api/auth/login`: Xử lý đăng nhập, trả về mã JWT Token.
  - `POST /api/auth/register`: Xử lý đăng ký tài khoản.
  - Cấu hình Middleware (Bảo vệ tuyến đường): Đảm bảo chỉ Khách mới gọi được API Khách, Admin mới gọi được API Admin.
- [ ] **3.2 Nhóm API Dữ liệu (CRUD)**
  - `GET /api/services`: Trả về danh sách dịch vụ (để hiển thị lên App Khách).
  - `GET /api/packages`: Trả về danh sách Gói Gia đình.
  - `GET /api/taskers/history`: Trả về lịch sử đơn hàng của 1 Tasker.
  - `GET /api/admin/dashboard`: Trả về số liệu doanh thu, số lượng đơn cho màn hình Thống kê Admin.
- [ ] **3.3 Nhóm API & Socket Đặt Đơn (Quan trọng nhất)**
  - `POST /api/orders/book`: Khách bấm "Đặt ngay" -> Gửi id dịch vụ, voucher, và tọa độ của Khách lên server -> Lưu vào DB trạng thái PENDING.
  - **Socket GPS:** Mở cổng WebSockets (`socket.io`), cứ 5 giây Tasker gửi tọa độ lên 1 lần -> Server update vào Redis.
  - **Logic Matching (Tìm Tasker):** Khi có đơn mới, Server dùng PostGIS tính khoảng cách: `ST_DistanceSphere` để tìm ra 3 Tasker đang Online gần Khách nhất.
  - **Bắn Đơn:** Server dùng Socket gửi sự kiện `new_order` kèm tiếng "Ting ting" tới máy của 3 Tasker đó.
  - `PATCH /api/orders/:id/accept`: Tasker bấm "Nhận Đơn" -> Server khóa đơn lại (đổi trạng thái ACCEPTED) -> Báo cho Khách biết tên + ảnh của Tasker vừa nhận.

---

## BƯỚC 4: KẾT NỐI FRONTEND VỚI BACKEND (INTEGRATION)

Mục tiêu: Biến giao diện tĩnh (HTML) thành giao diện Động (Hiển thị dữ liệu từ DB).

- [ ] **4.1 Xử lý khung Frontend (Framework)**
  - Vì giao diện của bạn đang là HTML thuần, để kết nối API dễ dàng, bạn cần quyết định: 
    - a) Vẫn giữ HTML thuần: Dùng Javascript (hàm `fetch()` hoặc thư viện `axios`) để gọi API.
    - b) Đưa HTML này vào **React.js / Vue.js** (cho Admin) và **Flutter** (cho App). (Rất khuyến khích làm cách này).
- [ ] **4.2 Kết nối Luồng Đăng nhập**
  - Làm form đăng nhập lấy số điện thoại + mật khẩu -> Gọi API `POST /login`.
  - Nhận JWT Token về -> Lưu vào `localStorage`. Các API sau này đều phải đính kèm Token này.
- [ ] **4.3 "Bơm" dữ liệu thật vào UI (Data Binding)**
  - Ở màn hình Trang chủ: Gọi `GET /api/services`, lấy mảng dữ liệu đổ vào các thẻ "Dọn dẹp nhà cửa", "Trông trẻ".
  - Thay vì để chữ "150.000đ" cứng trong HTML, dùng biến để hiển thị giá lấy từ Database.
- [ ] **4.4 Kết nối Socket Realtime**
  - Ở màn hình Tasker (Trạng thái Idle - Đang tìm đơn): Gắn `socket.on('new_order')`. Khi nhận được tín hiệu -> Kích hoạt hiển thị cái Modal "ĐƠN DỌN NHÀ MỚI" bật lên kèm đếm ngược 60s.
  - Ghép Chat 1-1: Khi Khách gõ tin nhắn -> Bắn qua Socket -> Điện thoại Tasker nảy tin nhắn ngay lập tức không cần tải lại trang.

---
**TÓM LẠI LỘ TRÌNH DÀNH CHO TEAM DEV:**
Setup DB Postgres/Redis -> Dựng Node.js -> Viết API Login/Services -> Viết Socket Tìm Tasker -> Đưa HTML vào React/Flutter -> Gọi API đổ dữ liệu thật -> Hoàn thành.
