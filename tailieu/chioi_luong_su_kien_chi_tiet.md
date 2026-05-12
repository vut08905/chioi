**CHỊ ƠI!**

Nền tảng đặt dịch vụ giúp việc tại nhà

**TÀI LIỆU LUỒNG SỰ KIỆN CHI TIẾT (EVENT FLOW)**

Ba tác nhân: Admin — Khách hàng (Cư dân) — Người giúp việc (Tasker)

*Bao gồm: Luồng đăng ký · Luồng đặt đơn · Luồng thực hiện · Tương tác Realtime*

Phiên bản: 1.0 · Ngày: 07/05/2026 · Dựa trên: 18 màn hình · 48 use cases · 3 actors

# **I. TỔNG QUAN BA LUỒNG TÁC NHÂN**

Tài liệu này mô tả toàn bộ luồng sự kiện của ba tác nhân trong hệ thống Chị Ơi!, bắt đầu từ luồng tạo tài khoản, qua các sự kiện vận hành chính, và xác định rõ điểm tương tác realtime giữa các tác nhân.

### **Ba tác nhân và màn hình tương ứng**

* Khách hàng (Cư dân) — App màu cam — Màn hình M01, M03–M15
* Người giúp việc (Tasker) — App màu teal — Màn hình M01–M02, M03, M10, M16–M17
* Admin (Quản trị viên) — Dashboard màu tím — Màn hình M18 (admin.php)

### **Nguyên tắc Realtime xuyên suốt tài liệu**

Mỗi khi một tác nhân thực hiện hành động làm thay đổi trạng thái đơn hàng hoặc tài khoản, hệ thống phải cập nhật đồng thời sang tác nhân liên quan. Tài liệu đánh dấu rõ từng điểm tương tác này bằng dòng in nghiêng màu cam.

# **II. LUỒNG TẠO TÀI KHOẢN**

## **A. Tạo tài khoản Khách hàng (Cư dân)**

Màn hình: M01 (login.php) · M03 (forgot-password.php)

UC liên quan: UC-KH-01, UC-KH-02

### **Luồng chính — Đăng nhập (UC-KH-01)**

Điều kiện tiên quyết: Người dùng đã có tài khoản Cư dân được phê duyệt.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Mở ứng dụng Chị Ơi! và chọn tab "Cư dân" trên màn hình đăng nhập (M01) | — |
| 2 | **Khách hàng** | Nhập số điện thoại và mật khẩu đã đăng ký | — |
| 3 | **Khách hàng** | Nhấn nút "Đăng nhập" | — |
| 4 | **Hệ thống** | Xác thực thông tin đăng nhập | — |
| 5 | **Hệ thống** | Chuyển Khách hàng vào Trang chủ (M04) nếu đúng thông tin | — |

Ngoại lệ: Sai mật khẩu → hệ thống hiện thông báo lỗi, Khách hàng thử lại. Quên mật khẩu → chuyển sang UC-KH-02.

### **Luồng phụ — Quên mật khẩu / Đặt lại qua OTP (UC-KH-02)**

Điều kiện tiên quyết: Người dùng đã có tài khoản và số điện thoại còn hoạt động.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Nhấn "Quên mật khẩu?" tại màn hình đăng nhập (M01) | — |
| 2 | **Khách hàng** | Nhập số điện thoại đã đăng ký (màn hình M03) | — |
| 3 | **Hệ thống** | Gửi mã OTP 6 chữ số qua SMS đến số điện thoại | — |
| 4 | **Khách hàng** | Điền 6 ô OTP nhận được qua SMS | — |
| 5 | **Khách hàng** | Nhấn "Xác nhận" | — |
| 6 | **Khách hàng** | Đặt mật khẩu mới | — |
| 7 | **Hệ thống** | Cập nhật mật khẩu và cho phép đăng nhập bình thường | — |

Ngoại lệ: OTP hết hạn → Nhấn "Gửi lại OTP sau 30s". Nhập sai OTP → hiện thông báo lỗi.

## **B. Tạo tài khoản Người giúp việc (Tasker)**

Màn hình: M02 (tasker-register.php) · M01 (login.php) · M03 (forgot-password.php)

UC liên quan: UC-T-02, UC-T-01, UC-T-03 | Tác động Admin: UC-AD-04

### **Bước 1 — Đăng ký hồ sơ Tasker (UC-T-02)**

Điều kiện tiên quyết: Chưa có tài khoản Tasker; có CCCD hợp lệ.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Tasker** | Từ màn hình đăng nhập (M01) nhấn link "Đăng ký Tasker" | — |
| 2 | **Tasker** | Nhập họ tên đầy đủ (M02 · tasker-register.php) | — |
| 3 | **Tasker** | Nhập số CCCD 12 chữ số | — |
| 4 | **Tasker** | Chọn một hoặc nhiều dịch vụ cung cấp: Dọn nhà / Trông trẻ / Mua hộ | — |
| 5 | **Tasker** | Nhấn icon camera, tải ảnh selfie kèm CCCD để xác minh danh tính | — |
| 6 | **Tasker** | Nhấn "Gửi đăng ký" — hồ sơ gửi lên hệ thống | *Admin nhận thông báo có hồ sơ Tasker mới chờ duyệt trên Dashboard (thẻ chờ duyệt tăng thêm 1)* |
| 7 | **Tasker** | Chờ Admin xét duyệt hồ sơ — không thể đăng nhập vào app Tasker khi chưa được duyệt | — |

Ngoại lệ: CCCD không hợp lệ → hiện thông báo lỗi. Ảnh không đủ điều kiện → hệ thống yêu cầu tải lại.

### **Bước 2 — Admin duyệt hồ sơ Tasker (UC-AD-04)**

Đây là sự kiện Admin PHẢI thực hiện sau khi Tasker gửi đăng ký.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Admin** | Vào Dashboard (M18) — thấy thẻ số hồ sơ chờ duyệt tăng lên | — |
| 2 | **Admin** | Nhấn tab "Tasker" trên admin.php → lọc danh sách theo trạng thái "Chờ duyệt" | — |
| 3 | **Admin** | Mở hồ sơ Tasker vừa đăng ký: xem họ tên, CCCD, ảnh selfie, dịch vụ đăng ký | — |
| 4 | **Admin** | Kiểm tra thông tin CCCD và ảnh xác minh danh tính | — |
| 5 | **Admin** | Ra quyết định: Phê duyệt hoặc Từ chối hồ sơ | *Tasker nhận thông báo kết quả duyệt hồ sơ qua SMS/push notification* |
| 6 | **Hệ thống** | Nếu Phê duyệt: kích hoạt tài khoản Tasker, cho phép đăng nhập vào app Tasker (M16) | — |
| 7 | **Hệ thống** | Nếu Từ chối: gửi lý do từ chối đến Tasker, Tasker có thể đăng ký lại với thông tin đúng | *Tasker nhận thông báo từ chối và lý do từ chối* |

### **Bước 3 — Tasker đăng nhập sau khi được duyệt (UC-T-01)**

Điều kiện tiên quyết: Tài khoản Tasker đã được Admin phê duyệt.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Tasker** | Mở ứng dụng Chị Ơi! và chọn tab "Tasker" trên màn hình đăng nhập (M01) | — |
| 2 | **Tasker** | Nhập số điện thoại và mật khẩu | — |
| 3 | **Tasker** | Nhấn "Đăng nhập" | — |
| 4 | **Hệ thống** | Xác thực: nếu tài khoản chưa duyệt → hiện thông báo "Hồ sơ đang chờ duyệt" | — |
| 5 | **Hệ thống** | Xác thực thành công → chuyển Tasker vào Trang chủ Tasker (M16) | — |

Ngoại lệ: Tài khoản chưa được duyệt → Thông báo chờ duyệt. Sai mật khẩu → lỗi. Quên mật khẩu → M03 (UC-T-03 — tương tự UC-KH-02).

# **III. LUỒNG ĐẶT ĐƠN VÀ PHÂN PHỐI TASKER**

UC liên quan: UC-KH-07, UC-KH-08, UC-KH-09 (phía Khách hàng) — UC-T-04, UC-T-05, UC-T-06, UC-T-07 (phía Tasker) — UC-AD-02, UC-AD-03 (phía Admin)

## **A. Khách hàng đặt lịch dịch vụ**

Điều kiện tiên quyết: Khách hàng đã đăng nhập; ví có đủ số dư.

### **Ví dụ minh họa: Đặt dịch vụ dọn nhà (UC-KH-07) — cũng áp dụng tương tự cho Trông trẻ (UC-KH-08) và Mua hộ (UC-KH-09)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Nhấn dịch vụ "Dọn nhà" từ Trang chủ (M04) — vào màn hình M05 (house-cleaning.php) | — |
| 2 | **Khách hàng** | Chọn loại dịch vụ: Cơ bản hoặc Cao cấp | — |
| 3 | **Khách hàng** | Chọn ngày và giờ thực hiện | — |
| 4 | **Khách hàng** | Chọn số giờ: 2h / 3h / 4h / 5h | — |
| 5 | **Khách hàng** | Nhập ghi chú yêu cầu (tuỳ chọn) | — |
| 6 | **Hệ thống** | Tính tổng tiền tự động và hiển thị cho Khách hàng xem trước khi đặt | — |
| 7 | **Khách hàng** | Nhấn "Đặt & thanh toán" | — |
| 8 | **Hệ thống** | Nếu số dư ví không đủ → chuyển Khách hàng sang màn hình nạp tiền (M14) | — |
| 9 | **Hệ thống** | Nếu đủ số dư: khấu trừ ví, tạo đơn hàng mới với trạng thái "Đang tìm Tasker" | *Admin thấy đơn mới xuất hiện trên tab Đơn (M18) với badge "Tìm tasker" màu vàng* |
| 10 | **Hệ thống** | Broadcast thông báo đơn mới đến các Tasker đang Online gần khu vực của Khách hàng | *Các Tasker Online nhận push notification và thấy đơn mới trong mục "Đơn mới" (M16)* |
| 11 | **Khách hàng** | Đơn được tạo thành công — Khách hàng thấy trạng thái "Đang tìm Tasker" trong M09/M08 | — |

## **B. Tasker bật trạng thái Online và nhận đơn**

### **Bước 1 — Tasker bật trạng thái Online (UC-T-04)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Tasker** | Từ Trang chủ Tasker (M16), nhấn nút trạng thái bên phải header | — |
| 2 | **Tasker** | Trạng thái chuyển sang "Online" (chấm xanh hiển thị) | *Admin Dashboard thấy số Tasker Online tăng lên trong thẻ tổng quan* |
| 3 | **Hệ thống** | Hệ thống bắt đầu phân phối đơn phù hợp đến Tasker này | — |

### **Bước 2 — Tasker xem và nhận đơn (UC-T-05, UC-T-06)**

Điều kiện tiên quyết: Tasker đang ở trạng thái Online.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Hệ thống** | Đơn mới xuất hiện trong mục "Đơn mới" trên M16 — hiển thị: tên dịch vụ + số giờ, thu nhập (+Xkk), khoảng cách (0.4km), thời gian thực hiện | — |
| 2 | **Tasker** | Xem thông tin chi tiết đơn mới | — |
| 3 | **Tasker** | Nhấn "Nhận đơn" để xác nhận nhận việc | *Khách hàng nhận push notification: "Tasker đã nhận đơn của bạn" — Tiến trình đơn (M08) cập nhật sang bước "Khớp Tasker" — Admin Dashboard cập nhật trạng thái đơn từ "Tìm tasker" sang "Đang làm" (màu cam)* |
| 4 | **Hệ thống** | Đơn chuyển sang mục "Đang thực hiện" trên M16 của Tasker | — |

*📌 Realtime: Sau khi Tasker nhấn Nhận đơn: (1) Khách hàng thấy tên + avatar + số sao của Tasker trong M08; (2) Nút Chat và nút Gọi điện hiển thị; (3) Admin thấy đơn chuyển màu cam trên danh sách.*

### **Bước 2b — Tasker bỏ qua đơn (UC-T-07)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Tasker** | Xem đơn mới và nhấn "Bỏ qua" — không muốn nhận đơn này | — |
| 2 | **Hệ thống** | Đơn biến mất khỏi danh sách đơn mới của Tasker này | — |
| 3 | **Hệ thống** | Hệ thống tìm Tasker khác phù hợp để gửi thông báo đơn | — |
| 4 | **Hệ thống** | Nếu bỏ qua nhiều lần → hệ thống có thể giảm ưu tiên phân phối đơn cho Tasker này | — |

## **C. Đơn không có Tasker nhận — Admin can thiệp (UC-AD-03)**

Kịch bản: Đơn đợi quá lâu mà chưa có Tasker nào nhận (ví dụ đơn #BK0144 đợi 8 phút).

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Hệ thống** | Sau khoảng thời gian chờ, đơn được đánh dấu viền cam "cần can thiệp" trên Dashboard Admin | *Admin nhận cảnh báo: thẻ "Đang xử lý" trên Dashboard hiển thị "cần chú ý"* |
| 2 | **Admin** | Nhận diện đơn viền cam trên danh sách đơn (M18) và nhấn vào xem chi tiết | — |
| 3 | **Admin** | Thủ công gán Tasker phù hợp hoặc liên hệ Khách hàng để tìm giải pháp | *Tasker được gán nhận thông báo. Khách hàng được thông báo cập nhật tiến trình* |
| 4 | **Admin** | Nếu không tìm được Tasker: liên hệ Khách hàng để dời lịch hoặc hoàn tiền (UC-AD-06) | *Khách hàng nhận thông báo về việc dời lịch hoặc hoàn tiền* |

# **IV. LUỒNG THỰC HIỆN CÔNG VIỆC (REALTIME)**

Đây là giai đoạn cốt lõi với nhiều điểm cập nhật realtime nhất giữa Tasker và Khách hàng.

UC liên quan: UC-T-08, UC-T-09, UC-T-11 (Tasker) — UC-KH-10, UC-KH-11, UC-KH-12 (Khách hàng) — UC-AD-02 (Admin)

## **A. Tasker xem đơn đang thực hiện và di chuyển (UC-T-08)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Tasker** | Phần "Đang thực hiện" trên M16 hiển thị: tên dịch vụ, tên Khách hàng, địa chỉ căn hộ (ví dụ S2.06/08B12), giờ bắt đầu, bộ đếm thời gian thực (02:15:34) | — |
| 2 | **Tasker** | Di chuyển đến địa chỉ Khách hàng | *Khách hàng xem M08 (tracking.php) — tiến trình cập nhật sang bước "Tasker đến nơi" kèm thời gian thực* |
| 3 | **Tasker** | Có thể nhấn Chat (UC-T-11) để nhắn tin với Khách hàng — thông báo giờ đến, hỏi yêu cầu thêm | *Khách hàng nhận tin nhắn từ Tasker trong M10 (chat.php)* |

## **B. Giao tiếp trong quá trình thực hiện — Chat hai chiều (UC-T-11 / UC-KH-11)**

Cả Khách hàng và Tasker đều dùng màn hình M10 (chat.php) — giao diện chat hai chiều.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng / Tasker** | Từ M08 nhấn nút Chat để mở cửa sổ chat (M10) | — |
| 2 | **Tasker** | Gửi tin nhắn văn bản: ví dụ "Tôi sẽ đến lúc 9h, anh/chị ở nhà chưa?" | *Khách hàng nhận push notification và thấy tin nhắn mới trong M10* |
| 3 | **Khách hàng** | Đọc và phản hồi tin nhắn, hoặc gửi ảnh hướng dẫn cụ thể | *Tasker nhận push notification và thấy tin nhắn mới trong M10* |
| 4 | **Khách hàng / Tasker** | Có thể đính kèm ảnh để minh họa yêu cầu hoặc trạng thái công việc | *Bên kia nhận ảnh đính kèm ngay lập tức* |

## **C. Gọi điện trực tiếp (UC-KH-12)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Từ M08 (tracking.php) hoặc M10 (chat.php), nhấn nút icon điện thoại | — |
| 2 | **Hệ thống** | Kết nối cuộc gọi trực tiếp đến số điện thoại của Tasker | *Tasker nhận cuộc gọi đến trên thiết bị* |
| 3 | **Khách hàng / Tasker** | Cuộc gọi được thực hiện qua điện thoại thông thường | — |

## **D. Tasker hoàn thành đơn (UC-T-09)**

Điều kiện tiên quyết: Đơn đang trong trạng thái thực hiện; Tasker đã hoàn tất công việc thực tế.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Tasker** | Hoàn tất công việc thực tế tại nhà Khách hàng | — |
| 2 | **Tasker** | Nhấn nút "Hoàn thành đơn" trên M16 (tasker-app.php) | — |
| 3 | **Hệ thống** | Cập nhật trạng thái đơn → Hoàn thành | *Khách hàng nhận push notification: "Công việc đã hoàn thành — Hãy đánh giá Tasker" — M08 cập nhật sang bước "Hoàn tất" — Admin Dashboard thấy đơn chuyển màu xanh lá "Hoàn thành"* |
| 4 | **Hệ thống** | Thu nhập được cộng vào tài khoản Tasker (sau khi trừ phí hoa hồng 15% cho Admin) | *Tasker thấy thu nhập cập nhật trong M17 (tasker-stats.php)* |
| 5 | **Khách hàng** | Nhận thông báo và mở màn hình đánh giá (M12 · review.php) để đánh giá Tasker (UC-KH-16) | — |

*📌 Realtime: Nếu Khách hàng không đánh giá trong 24h → hệ thống tự động nhắc lại qua thông báo (UC-KH-15).*

# **V. LUỒNG ĐÁNH GIÁ SAU HOÀN THÀNH**

UC liên quan: UC-KH-16 (Khách hàng) — tác động đến hồ sơ Tasker hiển thị trên Admin

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Mở màn hình đánh giá (M12 · review.php) từ thông báo hoặc tab Hoạt động (M09) | — |
| 2 | **Khách hàng** | Chọn số sao đánh giá từ 1 đến 5 sao | — |
| 3 | **Khách hàng** | Chọn các tags trải nghiệm: Đúng giờ, Sạch sẽ, Lịch sự, Cẩn thận, Nhanh nhẹn | — |
| 4 | **Khách hàng** | Nhập nhận xét văn bản tự do (tuỳ chọn) | — |
| 5 | **Khách hàng** | Nhấn "Gửi đánh giá" | *Điểm sao trung bình của Tasker được cập nhật ngay lập tức — Admin thấy điểm rating Tasker thay đổi trong tab Tasker (M18) — Tasker thấy đánh giá mới trong M17 (thẻ Đánh giá TB)* |

# **VI. LUỒNG THEO DÕI TIẾN TRÌNH ĐƠN (KHÁCH HÀNG)**

UC liên quan: UC-KH-10, UC-KH-14, UC-KH-15

Màn hình: M08 (tracking.php) — M09 (activity.php) — M11 (notifications.php)

## **A. Theo dõi tiến trình đơn (UC-KH-10)**

5 bước tiến trình hiển thị realtime trên M08:

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Hệ thống** | Bước 1 — ĐẶT ĐƠN THÀNH CÔNG: đơn được tạo, ví bị khấu trừ, hệ thống tìm Tasker | — |
| 2 | **Hệ thống** | Bước 2 — KHỚP TASKER: Tasker nhận đơn — thông tin Tasker (tên, sao, số việc) hiển thị kèm nút gọi/chat | *Khách hàng nhận push notification "Tasker đã nhận đơn"* |
| 3 | **Hệ thống** | Bước 3 — TASKER ĐẾN NƠI: Tasker đã đến địa chỉ căn hộ — bộ đếm thời gian bắt đầu | *Khách hàng nhận push notification "Tasker đang trên đường đến"* |
| 4 | **Hệ thống** | Bước 4 — ĐANG THỰC HIỆN: công việc bắt đầu — bộ đếm thời gian đang chạy | *Khách hàng thấy badge "Đang làm" trong M09* |
| 5 | **Hệ thống** | Bước 5 — HOÀN TẤT: Tasker nhấn hoàn thành — đơn kết thúc | *Khách hàng nhận push notification và được chuyển sang màn hình đánh giá M12* |

## **B. Xem lịch sử hoạt động (UC-KH-14)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Nhấn tab "Hoạt động" trên thanh điều hướng — vào M09 (activity.php) | — |
| 2 | **Khách hàng** | Tab "Đang & sắp tới": xem đơn đang thực hiện và đơn đặt trước | — |
| 3 | **Khách hàng** | Tab "Đã hoàn tất": xem đơn đã kết thúc thành công | — |
| 4 | **Khách hàng** | Tab "Đã hủy": xem đơn đã hủy | — |
| 5 | **Khách hàng** | Nhấn vào từng đơn để xem chi tiết — từ đơn đang thực hiện có thể nhấn "Theo dõi" (UC-KH-10) hoặc "Chat" (UC-KH-11) | — |

## **C. Hủy đơn (UC-KH-13)**

Điều kiện tiên quyết: Đơn ở trạng thái sắp tới hoặc chưa có Tasker đến thực hiện.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Từ M08 nhấn "Hủy đơn" hoặc từ M09 nhấn "Hủy" tại đơn sắp tới | — |
| 2 | **Hệ thống** | Hiển thị xác nhận hủy cho Khách hàng | — |
| 3 | **Khách hàng** | Xác nhận hủy | — |
| 4 | **Hệ thống** | Đơn chuyển sang trạng thái "Đã hủy" — tiền được hoàn vào ví Khách hàng theo chính sách | *Tasker (nếu đã nhận đơn) nhận thông báo đơn đã bị hủy — Admin thấy trạng thái đơn cập nhật trên M18* |

Ngoại lệ: Đơn đang được thực hiện → không thể hủy hoặc áp dụng phí hủy.

# **VII. LUỒNG TÀI CHÍNH — VÍ VÀ THANH TOÁN**

UC liên quan: UC-KH-17, UC-KH-18, UC-KH-19 (Khách hàng) — UC-T-12, UC-T-13 (Tasker) — UC-AD-06, UC-AD-09 (Admin)

## **A. Nạp tiền vào ví Khách hàng (UC-KH-18)**

Màn hình: M13 (wallet.php) — M14 (topup-qr.php)

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Từ M13 nhấn "Nạp tiền" — vào M14 (topup-qr.php) | — |
| 2 | **Khách hàng** | Chọn số tiền muốn nạp: 200k / 500k / 1tr / 2tr / 5tr hoặc tự nhập | — |
| 3 | **Khách hàng** | Chọn phương thức: QR Bank / MoMo / VNPay | — |
| 4 | **Hệ thống** | Hiển thị mã QR và thông tin chuyển khoản: số tài khoản VietinBank, nội dung: NAPVI + SĐT | — |
| 5 | **Khách hàng** | Quét QR hoặc chuyển khoản theo hướng dẫn với đúng nội dung | — |
| 6 | **Khách hàng** | Nhấn "Tôi đã chuyển khoản" — hệ thống xác nhận | *Admin thấy giao dịch nạp tiền mới trong tab Ví (M18) — UC-AD-06* |
| 7 | **Hệ thống** | Số dư ví Khách hàng được cộng thêm đúng số tiền đã nạp | *Khách hàng nhận push notification "Nạp tiền thành công" và thấy số dư cập nhật trong M13* |

## **B. Xem ví và lịch sử giao dịch Khách hàng (UC-KH-17)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Từ M15 (profile.php) nhấn "Ví & phương thức TT" — vào M13 (wallet.php) | — |
| 2 | **Khách hàng** | Xem số dư khả dụng hiện tại | — |
| 3 | **Khách hàng** | Cuộn xuống xem lịch sử giao dịch: nạp tiền MoMo/QR Bank, thanh toán dịch vụ, tạm giữ đặt cọc, hoàn tiền hủy đơn | — |
| 4 | **Khách hàng** | Có thể nhấn "Nạp tiền" (UC-KH-18) hoặc "Rút" (UC-KH-19) | — |

## **C. Rút tiền từ ví Khách hàng (UC-KH-19)**

Màn hình: M13 (wallet.php) · Điều kiện: Ví có số dư khả dụng.

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Từ M13 nhấn nút "Rút" | — |
| 2 | **Khách hàng** | Nhập số tiền muốn rút | — |
| 3 | **Khách hàng** | Chọn tài khoản ngân hàng nhận tiền | — |
| 4 | **Khách hàng** | Xác nhận yêu cầu rút tiền | *Admin nhận yêu cầu rút tiền trong tab Ví (M18) — UC-AD-06* |
| 5 | **Admin** | Xem và duyệt yêu cầu rút tiền của Khách hàng | *Khách hàng nhận thông báo kết quả duyệt* |
| 6 | **Hệ thống** | Tiền được chuyển về tài khoản ngân hàng của Khách hàng sau khi Admin duyệt | *Khách hàng thấy số dư ví giảm và lịch sử giao dịch cập nhật* |

## **D. Tasker xem thu nhập và yêu cầu rút tiền (UC-T-12, UC-T-13)**

Màn hình: M17 (tasker-stats.php)

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Tasker** | Nhấn tab "Thu nhập" trên thanh điều hướng — vào M17 | — |
| 2 | **Tasker** | Chọn khoảng thời gian xem: Hôm nay / Tuần này / Tháng | — |
| 3 | **Tasker** | Xem thẻ tổng thu kèm % so sánh tuần trước, biểu đồ theo ngày trong tuần | — |
| 4 | **Tasker** | Xem 4 chỉ số: Số đơn hoàn thành, Đánh giá trung bình, Tỷ lệ nhận đơn, Phí Chị Ơi 15% | — |
| 5 | **Tasker** | Nhấn "Yêu cầu rút tiền" — nhập số tiền, chọn tài khoản ngân hàng nhận, xác nhận | *Admin nhận yêu cầu rút tiền của Tasker trong tab Ví (M18) — cần duyệt* |
| 6 | **Admin** | Xem và duyệt yêu cầu rút tiền của Tasker (UC-AD-06) | *Tasker nhận thông báo kết quả duyệt — số dư thu nhập giảm tương ứng* |

## **E. Admin quản lý tài chính tổng thể (UC-AD-06, UC-AD-09)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Admin** | Vào Dashboard (M18) — xem thẻ Doanh thu: tổng doanh thu hôm nay và phí hoa hồng 15% | — |
| 2 | **Admin** | Nhấn tab "Ví" — xem toàn bộ giao dịch: nạp tiền KH, thanh toán đơn, tạm giữ, hoàn tiền hủy, yêu cầu rút Tasker/KH | — |
| 3 | **Admin** | Duyệt từng yêu cầu rút tiền của Tasker và Khách hàng — hoặc từ chối nếu có vấn đề | *Tác nhân liên quan nhận thông báo kết quả duyệt* |
| 4 | **Admin** | Xử lý hoàn tiền cho đơn bị hủy hoặc có khiếu nại hợp lệ (UC-AD-08) | *Khách hàng thấy số dư ví tăng sau khi hoàn tiền* |
| 5 | **Admin** | Theo dõi xu hướng doanh thu: so sánh số đơn hôm nay với hôm qua (ví dụ +4 đơn) | — |

# **VIII. LUỒNG HỖ TRỢ VÀ KHIẾU NẠI**

UC liên quan: UC-KH-23 (Khách hàng liên hệ CSKH) — UC-AD-07 (Admin Inbox) — UC-AD-08 (Admin xử lý khiếu nại)

## **A. Khách hàng liên hệ CSKH (UC-KH-23)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Khách hàng** | Từ M15 (profile.php) nhấn "CSKH — Hỗ trợ 24/7" | — |
| 2 | **Khách hàng** | Chọn hình thức liên hệ: chat hoặc gọi điện | — |
| 3 | **Khách hàng** | Nhập nội dung yêu cầu hỗ trợ và gửi | *Admin nhận tin nhắn mới trong tab Inbox (M18) — UC-AD-07* |
| 4 | **Admin** | Mở tab Inbox, xem nội dung yêu cầu hỗ trợ từ Khách hàng | — |
| 5 | **Admin** | Soạn và gửi phản hồi để giải đáp / hỗ trợ | *Khách hàng nhận tin nhắn phản hồi từ CSKH* |

## **B. Admin xử lý khiếu nại (UC-AD-08)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Admin** | Vào Dashboard (M18) — thấy thẻ "Khiếu nại: X chưa giải quyết" | — |
| 2 | **Admin** | Nhấn vào thẻ để xem danh sách khiếu nại chưa xử lý | — |
| 3 | **Admin** | Xem chi tiết từng khiếu nại: lý do, lịch sử đơn, lịch sử chat liên quan | — |
| 4 | **Admin** | Liên hệ thêm với Khách hàng hoặc Tasker nếu cần làm rõ thông tin (qua tab Inbox) | *Tác nhân được liên hệ nhận tin nhắn từ Admin* |
| 5 | **Admin** | Đưa ra quyết định: hoàn tiền / cảnh cáo Tasker / đóng khiếu nại | *Khách hàng nhận thông báo kết quả xử lý khiếu nại* |
| 6 | **Admin** | Đánh dấu khiếu nại "Đã giải quyết" — số chưa xử lý giảm trên Dashboard | — |

# **IX. TỔNG HỢP LUỒNG ADMIN — TẤT CẢ HOẠT ĐỘNG**

Admin sử dụng màn hình M18 (admin.php) — Dashboard trung tâm với 5 tab: Đơn · Tasker · Cư dân · Ví · Inbox

## **A. Vào Dashboard và xem tổng quan (UC-AD-01)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Admin** | Đăng nhập hệ thống với quyền Admin — trang Dashboard (M18) hiển thị tự động | — |
| 2 | **Admin** | Xem 4 thẻ chỉ số: (1) Đơn hôm nay — số đơn và so sánh hôm qua; (2) Doanh thu — tổng thu và phí 15%; (3) Đang xử lý — số đơn cần chú ý; (4) Khiếu nại — số chưa giải quyết | — |
| 3 | **Admin** | Xem danh sách đơn gần đây bên dưới Dashboard | — |
| 4 | **Admin** | Chuyển sang từng tab để quản lý chi tiết | — |

## **B. Quản lý đơn hàng (UC-AD-02, UC-AD-03)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Admin** | Nhấn tab "Đơn (X)" — xem danh sách đơn trong ngày với màu trạng thái: Đang làm (cam), Sắp tới (xanh dương), Tìm tasker (vàng), Hoàn thành (xanh lá) | — |
| 2 | **Admin** | Nhấn vào từng đơn để xem chi tiết: mã đơn, loại dịch vụ, Khách hàng → Tasker, giá trị | — |
| 3 | **Admin** | Nhận diện đơn viền cam "cần can thiệp" — đơn chờ Tasker quá 8 phút | — |
| 4 | **Admin** | Thủ công gán Tasker hoặc liên hệ Khách hàng để xử lý đơn tồn đọng | *Tasker được gán và Khách hàng nhận thông báo tương ứng* |

## **C. Quản lý Tasker — duyệt hồ sơ (UC-AD-04)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Admin** | Nhấn tab "Tasker" — xem danh sách Tasker trong hệ thống | — |
| 2 | **Admin** | Lọc danh sách theo trạng thái: đang hoạt động / chờ duyệt / tạm dừng | — |
| 3 | **Admin** | Mở hồ sơ Tasker chờ duyệt: xem họ tên, CCCD, ảnh selfie, dịch vụ đăng ký | — |
| 4 | **Admin** | Phê duyệt hồ sơ → Tasker được kích hoạt tài khoản và đăng nhập được | *Tasker nhận thông báo hồ sơ đã được duyệt* |
| 5 | **Admin** | Từ chối hồ sơ → gửi lý do từ chối đến Tasker | *Tasker nhận thông báo từ chối và lý do* |
| 6 | **Admin** | Tạm dừng Tasker vi phạm → tài khoản bị khóa tạm thời | *Tasker nhận thông báo tài khoản bị tạm dừng* |

## **D. Quản lý Cư dân (UC-AD-05)**

| **Bước** | **Tác nhân** | **Hành động / Sự kiện** | **Cập nhật Realtime phía đối tác** |
| --- | --- | --- | --- |
| 1 | **Admin** | Nhấn tab "Cư dân" — xem danh sách toàn bộ Khách hàng đã đăng ký | — |
| 2 | **Admin** | Tìm kiếm Khách hàng theo tên hoặc số điện thoại | — |
| 3 | **Admin** | Xem lịch sử đặt dịch vụ của từng Khách hàng | — |
| 4 | **Admin** | Khóa tài khoản Khách hàng vi phạm nếu cần thiết | *Khách hàng bị khóa nhận thông báo tài khoản không còn hoạt động* |

# **X. BẢNG TỔNG HỢP TẤT CẢ ĐIỂM TƯƠNG TÁC REALTIME**

Bảng dưới đây liệt kê toàn bộ sự kiện có cập nhật realtime giữa các tác nhân trong hệ thống Chị Ơi!

| **Sự kiện kích hoạt** | **Tác nhân thực hiện** | **Tác nhân nhận cập nhật** | **Nội dung cập nhật Realtime** |
| --- | --- | --- | --- |
| Tasker gửi đăng ký | **Tasker** | **Admin** | Dashboard: thẻ hồ sơ chờ duyệt tăng +1 |
| Admin duyệt hồ sơ Tasker | **Admin** | **Tasker** | Push notification: hồ sơ được duyệt / từ chối |
| Khách hàng tạo đơn | **Khách hàng** | **Tasker + Admin** | Tasker: push notification đơn mới. Admin: đơn xuất hiện trên M18 màu vàng "Tìm tasker" |
| Tasker nhận đơn | **Tasker** | **Khách hàng + Admin** | KH: push notification + M08 cập nhật bước "Khớp Tasker". Admin: đơn chuyển màu cam "Đang làm" |
| Tasker di chuyển đến nhà KH | **Tasker** | **Khách hàng** | M08: tiến trình cập nhật "Tasker đến nơi" kèm thời gian thực |
| Tasker gửi tin nhắn | **Tasker** | **Khách hàng** | M10: push notification + tin nhắn xuất hiện trong cửa sổ chat |
| Khách hàng gửi tin nhắn | **Khách hàng** | **Tasker** | App Tasker: push notification + tin nhắn xuất hiện trong cửa sổ chat |
| Tasker nhấn Hoàn thành đơn | **Tasker** | **Khách hàng + Admin** | KH: push notification + M08 bước "Hoàn tất" + mở M12 đánh giá. Admin: đơn chuyển màu xanh lá |
| Tasker: thu nhập cộng sau hoàn thành | **Hệ thống** | **Tasker** | M17: số dư thu nhập cập nhật ngay lập tức |
| Khách hàng gửi đánh giá | **Khách hàng** | **Tasker + Admin** | Tasker: điểm rating cập nhật trong M17. Admin: điểm Tasker thay đổi trong tab Tasker M18 |
| Khách hàng hủy đơn | **Khách hàng** | **Tasker + Admin** | Tasker: push notification đơn bị hủy. Admin: trạng thái đơn cập nhật trên M18 |
| Khách hàng nạp tiền ví | **Khách hàng** | **Admin** | Admin thấy giao dịch nạp mới trong tab Ví M18 |
| KH / Tasker yêu cầu rút tiền | **Khách hàng / Tasker** | **Admin** | Admin nhận yêu cầu rút tiền trong tab Ví M18 để duyệt |
| Admin duyệt rút tiền | **Admin** | **KH / Tasker** | Tác nhân liên quan nhận thông báo kết quả duyệt + số dư ví cập nhật |
| Khách hàng liên hệ CSKH | **Khách hàng** | **Admin** | Admin: tab Inbox M18 nhận tin nhắn mới cần phản hồi |
| Admin phản hồi CSKH | **Admin** | **Khách hàng** | KH nhận tin nhắn phản hồi từ CSKH |
| Admin xử lý khiếu nại xong | **Admin** | **Khách hàng** | KH nhận thông báo kết quả xử lý khiếu nại |
| Admin hoàn tiền đơn khiếu nại | **Admin** | **Khách hàng** | KH thấy số dư ví tăng + lịch sử giao dịch "Hoàn tiền" cập nhật |
| Tasker bật / tắt Online | **Tasker** | **Admin** | Admin Dashboard: số Tasker Online thay đổi tương ứng |

*— Hết tài liệu —*

Chị Ơi! Event Flow Document · Phiên bản 1.0 · 07/05/2026