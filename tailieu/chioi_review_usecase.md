## 1. Tổng quan
| REVIEW & ĐÁNH GIÁ TÀI LIỆU USE CASE — CHỊ ƠI! | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 |
| --- | --- | --- | --- | --- | --- | --- |
| Hệ thống đặt dịch vụ giúp việc cho cư dân Vinhomes — 18 màn hình · 48 use cases · 3 actors | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Phiên bản tài liệu | 1.0 | NaN | NaN | NaN | NaN | NaN |
| Ngày review | 07/05/2026 | NaN | NaN | NaN | NaN | NaN |
| Reviewer | Claude | NaN | NaN | NaN | NaN | NaN |
| Phương pháp | Đánh giá theo 5 tiêu chí · Thang điểm 1-5 · Trung bình 4 tiêu chí đầu | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| TÓM TẮT KPI | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Tổng số UC | Khách hàng | Tasker | Admin | Đầy đủ | Cần bổ sung | Thiếu |
| 48 | 25 | 14 | 9 | 21 | 24 | 3 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| ĐIỂM TRUNG BÌNH TỔNG THỂ | NaN | NaN | NaN | NaN | NaN | NaN |
| 3.99 / 5.00 | NaN | NaN | Đánh giá tổng quan:\nTRUNG BÌNH — cần hoàn thiện đáng kể | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| ĐIỂM TRUNG BÌNH THEO ACTOR | NaN | NaN | NaN | NaN | NaN | NaN |
| Actor | Số UC | Mô tả (TB) | Luồng (TB) | Ngoại lệ (TB) | Khả thi (TB) | Tổng (TB) |
| Khách hàng | 25 | 4.2 | 4.08 | 3.28 | 4.32 | 3.97 |
| Tasker | 14 | 4.36 | 4.36 | 3.43 | 4.57 | 4.18 |
| Admin | 9 | 3.78 | 3.78 | 3.22 | 4.22 | 3.75 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| KHUYẾN NGHỊ TỔNG THỂ — 5 ĐIỂM CHÍNH | NaN | NaN | NaN | NaN | NaN | NaN |
| STT | Khuyến nghị | NaN | NaN | NaN | NaN | Mức |
| 01 | Hoàn thiện 3 UC còn THIẾU (rút tiền KH, cài đặt, danh sách Tasker) trước khi triển khai. | NaN | NaN | NaN | NaN | Cao |
| 02 | Thiết kế chi tiết flow tài chính: nạp/rút/đối soát/khiếu nại với audit log đầy đủ. | NaN | NaN | NaN | NaN | Cao |
| 03 | Bổ sung KYC nâng cao cho Tasker (eKYC, lý lịch tư pháp với trông trẻ). | NaN | NaN | NaN | NaN | Cao |
| 04 | Triển khai số ảo (masked phone) để bảo vệ thông tin riêng tư của cả KH và Tasker. | NaN | NaN | NaN | NaN | Trung bình |
| 05 | Định nghĩa rõ thuật toán matching đơn ↔ Tasker và chính sách phí hủy theo thời điểm. | NaN | NaN | NaN | NaN | Trung bình |

## 2. Đánh giá chi tiết
| ĐÁNH GIÁ CHI TIẾT 48 USE CASES | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 | Unnamed: 8 | Unnamed: 9 | Unnamed: 10 | Unnamed: 11 | Unnamed: 12 | Unnamed: 13 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Thang điểm 1-5: 5=Xuất sắc · 4=Tốt · 3=Trung bình · 2=Yếu · 1=Rất yếu | Tổng = TB(C1..C4) | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Mã UC | Tên Use Case | Actor | Màn hình | C1\nMô tả | C2\nLuồng | C3\nNgoại lệ | C4\nKhả thi | Tổng\nTB | Mức\nưu tiên | Rủi ro | Tình trạng | Vấn đề / Issue | Khuyến nghị |
| UC-KH-01 | Đăng nhập hệ thống | Khách hàng | M01 | 5 | 5 | 4 | 5 | 4.75 | Cao | Trung bình | Đầy đủ | Chưa đề cập xác thực 2 lớp (2FA) hoặc giới hạn số lần thử sai. | Bổ sung khóa tài khoản tạm thời sau 5 lần sai mật khẩu; cân nhắc 2FA cho tài khoản có ví nhiều tiền. |
| UC-KH-02 | Quên mật khẩu / Đặt lại qua OTP | Khách hàng | M03 | 5 | 5 | 4 | 5 | 4.75 | Cao | Trung bình | Đầy đủ | Chưa quy định thời hạn hiệu lực OTP và rate-limit gửi SMS. | Quy định OTP hiệu lực 5 phút; giới hạn 3 lần gửi OTP / 30 phút / SĐT để chống lạm dụng. |
| UC-KH-03 | Xem trang chủ | Khách hàng | M04 | 5 | 4 | 3 | 5 | 4.25 | Cao | Thấp | Đầy đủ | Chưa nêu cách xử lý khi không có Tasker khả dụng / không có dữ liệu top. | Bổ sung empty-state khi không có Tasker; placeholder loading khi mạng chậm. |
| UC-KH-04 | Tìm kiếm dịch vụ | Khách hàng | M04 | 3 | 3 | 3 | 4 | 3.25 | Trung bình | Thấp | Cần bổ sung | Tìm kiếm chỉ trả về 'dịch vụ gợi ý' — chưa rõ phạm vi tìm kiếm có bao gồm Tasker, gói, bài viết hay không. | Mở rộng phạm vi: dịch vụ + tasker + gói + FAQ; thêm gợi ý từ khóa phổ biến và lịch sử tìm kiếm. |
| UC-KH-05 | Xem Tasker gần bạn | Khách hàng | M04 | 4 | 4 | 3 | 4 | 3.75 | Trung bình | Thấp | Đầy đủ | Chưa quy định 'gần' là theo bán kính hay cùng tòa/khu nhà. | Định nghĩa rõ thuật toán: ưu tiên cùng block → cùng tòa → bán kính 2km. |
| UC-KH-06 | Xem gói gia đình 30 ngày | Khách hàng | M04 | 3 | 3 | 2 | 4 | 3 | Trung bình | Trung bình | Cần bổ sung | Mô tả gói còn sơ sài (chỉ banner). Chưa rõ giá, quyền lợi, điều khoản. | Tạo màn hình chi tiết gói riêng (M-pkg) với: giá, quyền lợi, FAQ, T&C; tách thành UC độc lập đầy đủ. |
| UC-KH-07 | Đặt dịch vụ dọn nhà | Khách hàng | M05 | 5 | 5 | 4 | 5 | 4.75 | Cao | Trung bình | Đầy đủ | Chưa nói rõ ràng buộc đặt lịch (giờ tối thiểu trước, trùng lịch, ngày lễ). | Bổ sung: chỉ cho đặt sau 2h hiện tại; cảnh báo khi trùng đơn đang chờ; phụ phí cuối tuần/lễ. |
| UC-KH-08 | Đặt dịch vụ trông trẻ | Khách hàng | M06 | 5 | 5 | 4 | 4 | 4.5 | Cao | Cao | Đầy đủ | Trông trẻ là nghiệp vụ rủi ro cao — chưa đề cập chứng chỉ Tasker, hồ sơ y tế trẻ. | Yêu cầu Tasker trông trẻ phải có chứng chỉ; cho phép cư dân khai báo dị ứng/lưu ý đặc biệt; bảo hiểm trẻ em. |
| UC-KH-09 | Đặt dịch vụ mua hộ WinMart | Khách hàng | M07 | 4 | 4 | 3 | 4 | 3.75 | Cao | Trung bình | Cần bổ sung | Chưa rõ cơ chế quyết toán khi giá thực tế ≠ ngân sách (vượt/thiếu). | Bổ sung quy trình: Tasker chụp hóa đơn, hệ thống đối chiếu; vượt ngân sách phải xác nhận qua chat trước khi mua. |
| UC-KH-10 | Theo dõi tiến trình đơn | Khách hàng | M08 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Chưa rõ độ trễ cập nhật trạng thái (real-time hay polling). | Sử dụng push notification + polling 30s làm fallback; SLA cập nhật < 10s. |
| UC-KH-11 | Chat với Tasker | Khách hàng | M10 | 5 | 4 | 3 | 4 | 4 | Cao | Trung bình | Cần bổ sung | Chưa có chính sách kiểm duyệt nội dung và lưu trữ chat làm bằng chứng. | Bổ sung: lọc bad-words (đã có file bad\_words.txt); lưu chat 90 ngày sau đơn; cấm chia sẻ SĐT cá nhân ngoài hệ thống. |
| UC-KH-12 | Gọi điện cho Tasker | Khách hàng | M08, M10 | 4 | 4 | 3 | 4 | 3.75 | Trung bình | Trung bình | Cần bổ sung | Lộ SĐT thật của hai bên — vi phạm bảo mật. | Triển khai số ảo (masked phone) — như Grab/Be — chỉ hoạt động trong khoảng thời gian đơn. |
| UC-KH-13 | Hủy đơn | Khách hàng | M08, M09 | 4 | 4 | 3 | 4 | 3.75 | Cao | Cao | Cần bổ sung | Chưa rõ chính sách phí hủy theo thời điểm hủy (trước/sau khi Tasker xác nhận / đến nơi). | Quy định 3 mốc: hủy trước khớp Tasker (miễn phí); sau khớp & trước Tasker xuất phát (phí 10%); sau xuất phát (phí 30-50%). |
| UC-KH-14 | Xem lịch sử hoạt động | Khách hàng | M09 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Chưa có bộ lọc theo loại dịch vụ / khoảng thời gian. | Bổ sung filter: loại dịch vụ, từ-đến ngày, Tasker; có thể export CSV. |
| UC-KH-15 | Xem thông báo | Khách hàng | M11 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Chưa phân loại thông báo (đơn / ví / hệ thống / khuyến mãi). | Thêm tabs phân loại; cho phép tắt từng nhóm thông báo trong Cài đặt. |
| UC-KH-16 | Đánh giá Tasker | Khách hàng | M12 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Chưa có cơ chế nhắc đánh giá tự động & xử lý đánh giá tiêu cực. | Auto-prompt sau 24h nếu chưa đánh giá; đánh giá ≤2★ tự động tạo ticket cho Admin. |
| UC-KH-17 | Xem ví & lịch sử giao dịch | Khách hàng | M13 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Lịch sử giao dịch chưa có bộ lọc & xuất file. | Thêm filter: loại giao dịch, khoảng thời gian; nút export PDF/CSV. |
| UC-KH-18 | Nạp tiền vào ví | Khách hàng | M14 | 5 | 5 | 4 | 4 | 4.5 | Cao | Cao | Cần bổ sung | Bước 'Tôi đã chuyển khoản' phụ thuộc xác nhận thủ công — dễ sai sót và chậm. | Tích hợp webhook ngân hàng (VietQR) để tự động ghi nhận; fallback Admin duyệt thủ công nếu webhook lỗi. |
| UC-KH-19 | Rút tiền từ ví | Khách hàng | M13 | 2 | 2 | 2 | 3 | 2.25 | Trung bình | Cao | Thiếu | Mô tả rất sơ sài — chưa có flow xác minh, mức rút tối thiểu/tối đa, phí rút, KYC. | Viết lại UC chi tiết: yêu cầu liên kết tài khoản ngân hàng đã KYC; hạn mức 50k-50tr/ngày; phí rút 5k/lần. |
| UC-KH-20 | Xem & quản lý thông tin cá nhân | Khách hàng | M15 | 4 | 4 | 3 | 5 | 4 | Cao | Thấp | Đầy đủ | Chưa có flow xác minh khi thay đổi SĐT (yếu tố nhạy cảm). | Đổi SĐT phải qua OTP cả số cũ và số mới; đổi địa chỉ căn hộ phải có xác thực BQL tòa nhà. |
| UC-KH-21 | Quản lý ví & phương thức thanh toán | Khách hàng | M15 | 3 | 3 | 2 | 3 | 2.75 | Trung bình | Cao | Cần bổ sung | Chưa rõ cách lưu thẻ/tài khoản (token hóa?) và quy trình xóa. | Bắt buộc token hóa qua cổng thanh toán; xác nhận OTP khi thêm phương thức mới. |
| UC-KH-22 | Đăng ký gói gia đình | Khách hàng | M15 | 3 | 3 | 3 | 4 | 3.25 | Trung bình | Trung bình | Cần bổ sung | Phụ thuộc vào UC-KH-06 chưa rõ ràng — quyền lợi gói chưa được mô tả. | Hoàn thiện UC-KH-06 trước; bổ sung flow gia hạn tự động và nhắc trước hạn 3 ngày. |
| UC-KH-23 | Liên hệ CSKH hỗ trợ 24/7 | Khách hàng | M15 | 4 | 3 | 3 | 4 | 3.5 | Cao | Trung bình | Cần bổ sung | Chưa có SLA phản hồi và phân loại mức độ ưu tiên. | SLA: chat ≤ 5 phút giờ hành chính, ≤30 phút ngoài giờ; phân priority: khẩn cấp/thường/thắc mắc. |
| UC-KH-24 | Cài đặt tài khoản | Khách hàng | M15 | 2 | 2 | 2 | 3 | 2.25 | Thấp | Thấp | Thiếu | Chỉ ghi 'tùy chỉnh thiết lập' — không liệt kê cụ thể những gì cài đặt được. | Liệt kê: thông báo (push/email/SMS), ngôn ngữ (VI/EN), quyền riêng tư, đổi mật khẩu, xóa tài khoản (GDPR). |
| UC-KH-25 | Đăng xuất | Khách hàng | M15 | 5 | 5 | 4 | 5 | 4.75 | Trung bình | Thấp | Đầy đủ | Chưa nói tới đăng xuất tất cả thiết bị. | Bổ sung tùy chọn 'Đăng xuất tất cả thiết bị' trong Cài đặt bảo mật. |
| UC-T-01 | Đăng nhập với vai trò Tasker | Tasker | M01 | 5 | 5 | 4 | 5 | 4.75 | Cao | Trung bình | Đầy đủ | Tương tự UC-KH-01 — chưa có 2FA, chưa giới hạn brute-force. | Áp dụng cùng chính sách bảo mật như Khách hàng; xem xét 2FA bắt buộc với Tasker (vì có thu nhập). |
| UC-T-02 | Đăng ký trở thành Tasker | Tasker | M02 | 4 | 4 | 3 | 4 | 3.75 | Cao | Cao | Cần bổ sung | Quy trình KYC còn đơn giản — chỉ ảnh selfie + CCCD. Chưa có liveness check, chưa có lý lịch tư pháp. | Tích hợp eKYC (FPT.AI / VNPT eKYC); yêu cầu lý lịch tư pháp số 1 cho Tasker trông trẻ; phỏng vấn online. |
| UC-T-03 | Quên mật khẩu / Đặt lại qua OTP | Tasker | M03 | 5 | 5 | 4 | 5 | 4.75 | Cao | Trung bình | Đầy đủ | Trùng với UC-KH-02 — có thể gộp. | Cân nhắc thiết kế UC chung 'Reset Password' áp dụng cho cả 2 actor để tránh trùng lặp. |
| UC-T-04 | Bật/tắt trạng thái Online/Offline | Tasker | M16 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Chưa xử lý trường hợp Tasker đang Online nhưng mất kết nối lâu (zombie online). | Auto-offline sau 5 phút không heartbeat; thông báo Tasker khi bị auto-offline. |
| UC-T-05 | Xem đơn mới | Tasker | M16 | 4 | 4 | 3 | 4 | 3.75 | Cao | Trung bình | Cần bổ sung | Chưa rõ tiêu chí phân phối đơn (round-robin, gần nhất, rating cao nhất?). | Tài liệu hóa thuật toán matching: kết hợp khoảng cách (40%) + rating (30%) + tỷ lệ nhận (20%) + load hiện tại (10%). |
| UC-T-06 | Nhận đơn | Tasker | M16 | 5 | 5 | 4 | 5 | 4.75 | Cao | Trung bình | Đầy đủ | Chưa có timeout cho việc nhận đơn — nếu Tasker im lặng quá lâu thì sao? | Đơn tự hết hạn sau 60s nếu không có phản hồi → chuyển Tasker khác. |
| UC-T-07 | Bỏ qua đơn | Tasker | M16 | 4 | 4 | 3 | 5 | 4 | Trung bình | Trung bình | Cần bổ sung | Đề cập 'có thể giảm ưu tiên' nhưng chưa rõ ngưỡng. | Quy định cụ thể: tỷ lệ bỏ qua > 30% trong 7 ngày → giảm 50% lượng đơn được phân; > 50% → tạm khóa nhận đơn. |
| UC-T-08 | Xem đơn đang thực hiện | Tasker | M16 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Bộ đếm thời gian không nói rõ là đếm ngược hay đếm xuôi từ giờ bắt đầu. | Làm rõ trong tài liệu: đếm xuôi từ thời điểm Tasker check-in tại nhà cư dân. |
| UC-T-09 | Hoàn thành đơn | Tasker | M16 | 4 | 4 | 4 | 4 | 4 | Cao | Cao | Cần bổ sung | Mục 'Luồng thay thế' nói cần 'xác nhận hai chiều' nhưng chưa thiết kế UI cho khách xác nhận. | Thiết kế thêm bước: Tasker bấm hoàn thành → Khách nhận thông báo → Khách xác nhận trong 30 phút (auto-approve nếu im lặng). |
| UC-T-10 | Xem lịch sử đơn đã làm | Tasker | M16 (tab) | 3 | 3 | 2 | 4 | 3 | Trung bình | Thấp | Cần bổ sung | Mô tả ngắn — chưa có filter, search, chi tiết từng đơn. | Bổ sung filter (theo tháng, loại dịch vụ, đánh giá); chi tiết đơn xem được đánh giá khách đã cho. |
| UC-T-11 | Chat với khách hàng | Tasker | M10 | 5 | 5 | 4 | 5 | 4.75 | Cao | Trung bình | Đầy đủ | Trùng UC-KH-11 — chỉ khác hướng. Chưa có thông báo khi khách offline. | Hợp nhất logic chat 2 chiều; hiển thị 'Khách đang offline, sẽ nhận được sau' khi đối phương offline. |
| UC-T-12 | Xem thu nhập & thống kê | Tasker | M17 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Phí 15% là cố định trên UI — chưa rõ cách tính khi có khuyến mãi/voucher. | Làm rõ: phí tính trên giá trị thực thu (sau giảm giá); hiển thị breakdown chi tiết khi click vào con số. |
| UC-T-13 | Yêu cầu rút tiền | Tasker | M17 | 4 | 4 | 3 | 4 | 3.75 | Cao | Cao | Cần bổ sung | Chưa nói về thời gian xử lý, hạn mức, thuế TNCN với Tasker thu nhập cao. | Quy định: xử lý T+1 ngày làm việc; hạn mức 100k-100tr/lần, max 200tr/tháng; tự động khấu trừ 10% TNCN khi >2tr/lần. |
| UC-T-14 | Xem thông tin cá nhân Tasker | Tasker | M16 (tab) | 3 | 3 | 2 | 4 | 3 | Trung bình | Thấp | Cần bổ sung | Quá ngắn — chưa nêu rõ những gì Tasker có thể chỉnh sửa. | Liệt kê: avatar, mô tả bản thân, dịch vụ cung cấp (cần Admin duyệt khi thêm), khu vực phục vụ; KYC info read-only. |
| UC-AD-01 | Xem bảng điều khiển tổng quan | Admin | M18 | 5 | 5 | 4 | 5 | 4.75 | Cao | Thấp | Đầy đủ | Chỉ có 4 KPI cơ bản — thiếu xu hướng dài hạn (7/30 ngày). | Bổ sung sparkline 7 ngày cho từng KPI; thêm KPI: GMV, retention rate, CAC. |
| UC-AD-02 | Xem & theo dõi danh sách đơn hàng | Admin | M18 (tab) | 4 | 4 | 3 | 4 | 3.75 | Cao | Trung bình | Cần bổ sung | Chỉ liệt kê 4 đơn ví dụ — chưa có pagination, filter, search nâng cao. | Thêm: filter theo trạng thái/loại DV/ngày/giá trị; search theo mã đơn / SĐT; pagination 50 đơn/trang; export Excel. |
| UC-AD-03 | Can thiệp đơn hàng cần xử lý | Admin | M18 | 4 | 4 | 4 | 4 | 4 | Cao | Cao | Cần bổ sung | Chưa có cảnh báo chủ động (notification cho Admin khi có đơn cần can thiệp). | Push/email cảnh báo khi: đơn chờ Tasker > 8 phút; đơn bị hủy bởi Tasker < 30 phút trước giờ; khiếu nại mới. |
| UC-AD-04 | Xem & quản lý danh sách Tasker | Admin | M18 (tab) | 3 | 3 | 3 | 4 | 3.25 | Cao | Cao | Thiếu | Mô tả rất ngắn — chưa có flow duyệt hồ sơ chi tiết, blacklist, suspend, reactivate. | Viết lại UC: tab phụ 'Chờ duyệt' với checklist KYC; flow Approve/Reject/Request more info; lịch sử thay đổi trạng thái Tasker. |
| UC-AD-05 | Xem & quản lý danh sách Cư dân | Admin | M18 (tab) | 3 | 3 | 2 | 4 | 3 | Trung bình | Trung bình | Cần bổ sung | Thiếu chi tiết về xử lý cư dân vi phạm, gộp tài khoản trùng SĐT, lookup nhanh. | Bổ sung action: khóa/mở khóa, tặng credit, xem lifetime value, danh sách đơn của khách. |
| UC-AD-06 | Quản lý ví & giao dịch tài chính | Admin | M18 (tab) | 3 | 3 | 3 | 4 | 3.25 | Cao | Cao | Cần bổ sung | UC quan trọng nhất tài chính nhưng mô tả còn chung chung. | Tách thành nhiều UC con: (a) Duyệt rút tiền Tasker; (b) Đối soát giao dịch ngân hàng; (c) Hoàn tiền cư dân; (d) Báo cáo tài chính. Mỗi UC có audit log. |
| UC-AD-07 | Xem & quản lý hộp thư (Inbox) | Admin | M18 (tab) | 4 | 4 | 3 | 4 | 3.75 | Cao | Trung bình | Cần bổ sung | Chưa có cơ chế phân ticket cho nhiều Admin và SLA. | Bổ sung: assign ticket cho Admin cụ thể; status (mở/đang xử lý/đóng); SLA timer; tag (kỹ thuật/tài chính/khiếu nại). |
| UC-AD-08 | Xử lý khiếu nại | Admin | M18 | 4 | 4 | 4 | 4 | 4 | Cao | Cao | Cần bổ sung | Chưa có template quyết định và escalation cho khiếu nại nghiêm trọng. | Tạo workflow: mức 1 (CSKH xử lý <24h, hoàn tiền <500k), mức 2 (Manager <48h, <5tr), mức 3 (BOD). |
| UC-AD-09 | Theo dõi doanh thu & phí hoa hồng | Admin | M18 | 4 | 4 | 3 | 5 | 4 | Cao | Trung bình | Cần bổ sung | Chỉ có số liệu hôm nay, thiếu báo cáo tháng/quý/năm và export. | Thêm dashboard riêng 'Reports': doanh thu theo dịch vụ, top Tasker, P&L tháng, export PDF/Excel. |

## 3. Phân tích Actor
| PHÂN TÍCH THEO ACTOR | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 | Unnamed: 5 | Unnamed: 6 | Unnamed: 7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Actor | Tổng UC | Đầy đủ | Cần bổ sung | Thiếu | Risk Cao | Priority Cao | Điểm TB |
| Khách hàng | 25 | 13 | 10 | 2 | 5 | 16 | 3.97 |
| Tasker | 14 | 7 | 7 | 0 | 3 | 11 | 4.18 |
| Admin | 9 | 1 | 7 | 1 | 4 | 8 | 3.75 |
| TỔNG / TB | 48 | 21 | 24 | 3 | 12 | 35 | 3.97 |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| ĐIỂM MẠNH & ĐIỂM YẾU TỪNG ACTOR | NaN | NaN | NaN | NaN | NaN | NaN | NaN |
| Actor | Điểm mạnh | NaN | NaN | Điểm yếu / Cần cải thiện | NaN | NaN | NaN |
| Khách hàng (25 UC) | • Bao phủ đầy đủ flow chính: đăng nhập → đặt → thanh toán → đánh giá\n• Có 4 dịch vụ với UC riêng cho từng loại\n• Tích hợp 3 cổng thanh toán (QR/MoMo/VNPay)\n• Hệ thống ví & lịch sử giao dịch rõ ràng | NaN | NaN | • Một số UC mô tả còn rất ngắn (UC-KH-19 rút tiền, UC-KH-24 cài đặt)\n• Thiếu chính sách bảo mật (2FA, masked phone)\n• Chính sách phí hủy chưa rõ\n• Chưa có flow xử lý đơn 'Cao cấp' khác 'Cơ bản' chi tiết | NaN | NaN | NaN |
| Tasker (14 UC) | • Flow công việc rõ ràng: đăng ký → online → nhận đơn → hoàn thành → rút tiền\n• Có UC bỏ qua đơn — phản ánh thực tế\n• Dashboard thu nhập đầy đủ KPI | NaN | NaN | • KYC còn yếu — chỉ ảnh CCCD, chưa eKYC/lý lịch tư pháp\n• Thiếu logic timeout nhận đơn, anti-cheat (offline giả)\n• Thuật toán matching chưa được tài liệu hóa\n• UC-T-14 cá nhân quá ngắn | NaN | NaN | NaN |
| Admin (9 UC) | • Có UC riêng cho can thiệp đơn cần xử lý — tốt\n• Bao phủ 5 tab chính: Đơn / Tasker / Cư dân / Ví / Inbox\n• Có UC theo dõi doanh thu và phí hoa hồng | NaN | NaN | • 9 UC là quá ít cho một admin panel — cần tách nhỏ hơn\n• UC-AD-04 (Tasker), UC-AD-06 (Ví) mô tả quá chung chung\n• Thiếu UC: cấu hình hệ thống, quản lý gói/khuyến mãi, báo cáo định kỳ\n• Chưa có audit log và phân quyền nội bộ | NaN | NaN | NaN |

## 4. Issues & Gaps
| TỔNG HỢP VẤN ĐỀ & ĐỀ XUẤT BỔ SUNG | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| NaN | NaN | NaN | NaN | NaN |
| # | Loại | Mức độ | Vấn đề / Gap | Đề xuất bổ sung |
| 1 | Bảo mật | Cao | Lộ SĐT thật giữa Khách hàng và Tasker khi gọi điện (UC-KH-12). | Tích hợp số ảo (masked phone) qua Stringee/CMC; chỉ active trong khung giờ đơn ±30 phút. |
| 2 | Bảo mật | Cao | Chưa có 2FA, không giới hạn brute-force đăng nhập (UC-KH-01, UC-T-01). | Khóa tài khoản 15 phút sau 5 lần sai; bật 2FA tự nguyện cho ví >5tr; bắt buộc với Tasker. |
| 3 | Tài chính | Cao | Quy trình xác nhận nạp tiền thủ công (UC-KH-18) → dễ mất tiền/sai sót. | Webhook ngân hàng VietQR tự động đối soát theo nội dung CK; lưu 'reference code' duy nhất mỗi lần nạp. |
| 4 | Tài chính | Cao | UC rút tiền cho Khách hàng (UC-KH-19) mô tả quá sơ sài, chưa có hạn mức/phí/KYC. | Viết lại UC chi tiết: yêu cầu KYC mức 2; hạn mức 50k-50tr/ngày; phí 5k/lần; T+1. |
| 5 | Tài chính | Cao | Quản lý ví Admin (UC-AD-06) chung chung, chưa tách quy trình duyệt rút tiền/đối soát/hoàn tiền. | Tách thành 4 UC con: duyệt rút Tasker, đối soát giao dịch NH, hoàn tiền KH, báo cáo tài chính. Mỗi UC có audit log. |
| 6 | Trải nghiệm | Trung bình | Chính sách phí hủy chưa được nêu rõ (UC-KH-13). | Quy định 3 mốc: trước khớp Tasker (free), sau khớp - trước xuất phát (10%), sau xuất phát (30-50%). |
| 7 | Trải nghiệm | Trung bình | Không có cơ chế nhắc đánh giá tự động (UC-KH-16). | Auto-prompt sau 24h nếu chưa đánh giá; gửi push thông báo; trao điểm thưởng/voucher khi đánh giá. |
| 8 | KYC | Cao | Đăng ký Tasker (UC-T-02) chỉ cần ảnh selfie+CCCD, dễ giả mạo. Đặc biệt nguy hiểm với UC-KH-08 (trông trẻ). | Tích hợp eKYC (FPT.AI/VNPT) có liveness check; bắt buộc lý lịch tư pháp số 1 cho Tasker trông trẻ; phỏng vấn online. |
| 9 | Vận hành | Trung bình | Thuật toán matching đơn ↔ Tasker chưa được tài liệu hóa (UC-T-05, UC-AD-03). | Công thức minh bạch: 40% khoảng cách + 30% rating + 20% tỷ lệ nhận đơn + 10% load hiện tại; có thể cấu hình tại Admin. |
| 10 | Vận hành | Trung bình | Chưa có timeout cho việc nhận đơn của Tasker (UC-T-06). | Đơn mới hiển thị 60s; không phản hồi → tự động chuyển Tasker khác; Tasker bỏ qua nhiều bị giảm priority. |
| 11 | Tài liệu | Trung bình | Một số UC quá ngắn, gần như chỉ mô tả 1 dòng: UC-KH-19, UC-KH-24, UC-T-10, UC-T-14, UC-AD-04. | Bổ sung đầy đủ các trường: điều kiện tiên quyết, luồng chính chi tiết, ngoại lệ, kết quả mong đợi. |
| 12 | Tài liệu | Thấp | UC trùng lặp giữa Khách hàng và Tasker (đăng nhập, quên MK, chat). | Cân nhắc thiết kế UC chung 'Authentication' và 'Messaging' áp dụng cho cả 2 actor để tránh duplicate. |
| 13 | Pháp lý | Trung bình | Chưa có UC về thuế TNCN cho Tasker thu nhập cao (UC-T-13). | Tự động khấu trừ 10% TNCN khi rút >2tr/lần; cấp chứng từ thuế cuối năm; thông báo Tasker khi gần ngưỡng. |
| 14 | Vận hành | Cao | Chưa có flow phê duyệt hồ sơ Tasker chi tiết tại Admin (UC-AD-04). | Tab phụ 'Chờ duyệt' với checklist KYC; flow Approve/Reject/Request more info; lịch sử thay đổi trạng thái. |
| 15 | Mở rộng | Thấp | Thiếu UC quản lý gói gia đình/khuyến mãi tại Admin. | Bổ sung UC-AD-10 'Quản lý gói & khuyến mãi' (CRUD voucher, gói tháng, banner trang chủ). |
| 16 | Mở rộng | Thấp | Thiếu UC báo cáo định kỳ (tuần/tháng/quý) cho Admin. | Bổ sung UC-AD-11 'Báo cáo định kỳ' với template fix sẵn, schedule gửi email. |
| 17 | Pháp lý | Trung bình | Chưa nói tới quyền xóa tài khoản (GDPR / Nghị định 13/2023). | Bổ sung UC 'Yêu cầu xóa tài khoản' theo NĐ 13/2023; Admin xử lý trong 30 ngày; ẩn dữ liệu thay vì xóa cứng để giữ audit. |
| 18 | Trải nghiệm | Thấp | Tab 'Đã hủy' trong M09 không có UC đi kèm cho việc đặt lại đơn. | Bổ sung UC 'Đặt lại đơn từ lịch sử' — copy thông tin đơn cũ, cho phép sửa và đặt mới. |
| 19 | Vận hành | Cao | Chưa rõ cơ chế xử lý khi đơn không có Tasker nhận sau N phút. | Quy trình escalation: 5 phút → mở rộng bán kính; 10 phút → nâng giá tự động +10%; 15 phút → cảnh báo Admin (UC-AD-03). |
| 20 | Bảo mật | Trung bình | Chưa có chính sách lưu trữ và xử lý ảnh chat (UC-KH-11, UC-T-11). | Lưu ảnh chat encrypted trong 90 ngày; xóa tự động sau khi đơn đóng + 90 ngày; có thể export khi xảy ra khiếu nại. |

## 5. Khuyến nghị
| KHUYẾN NGHỊ & LỘ TRÌNH HOÀN THIỆN | Unnamed: 1 | Unnamed: 2 | Unnamed: 3 | Unnamed: 4 |
| --- | --- | --- | --- | --- |
| Phân chia theo 3 giai đoạn: P0 (bắt buộc trước launch) · P1 (sprint sau launch) · P2 (tương lai) | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| Giai đoạn | Hạng mục | Mô tả | Thời gian dự kiến | Phụ trách |
| P0 | Hoàn thiện UC còn thiếu | Viết lại đầy đủ UC-KH-19 (Rút tiền), UC-KH-24 (Cài đặt), UC-AD-04 (Quản lý Tasker chi tiết). | 1-2 tuần | BA |
| P0 | Tách UC tài chính Admin | Tách UC-AD-06 thành 4 UC con: duyệt rút Tasker / đối soát NH / hoàn tiền KH / báo cáo tài chính. | 1 tuần | BA + Finance |
| P0 | Định nghĩa chính sách phí | Tài liệu hóa: phí hủy theo thời điểm, phí cuối tuần/lễ, phí mua hộ vượt ngân sách, phí rút. | 1 tuần | Product + Finance |
| P0 | Quy trình KYC Tasker | Triển khai eKYC + liveness; yêu cầu lý lịch tư pháp với trông trẻ; phỏng vấn online. | 3-4 tuần | Vendor (FPT.AI) + Ops |
| P0 | Webhook nạp tiền tự động | Tích hợp VietQR webhook ngân hàng để tự đối soát; loại bỏ bước 'Tôi đã chuyển khoản' thủ công. | 2-3 tuần | Backend + Bank |
| P1 | Số ảo (masked phone) | Tích hợp Stringee/CMC để tạo số trung gian; bảo vệ SĐT thật của KH và Tasker. | 3 tuần | Backend + Vendor |
| P1 | Bảo mật đăng nhập | Thêm rate-limit, khóa tạm thời sau 5 lần sai; 2FA tùy chọn cho KH có ví lớn; bắt buộc với Tasker. | 2 tuần | Backend + Security |
| P1 | Thuật toán matching minh bạch | Công khai trọng số: 40% khoảng cách + 30% rating + 20% tỷ lệ nhận + 10% load. | 2 tuần | Backend + Product |
| P1 | Cảnh báo Admin chủ động | Push/email khi: đơn chờ >8 phút, Tasker hủy đột ngột, khiếu nại mới, giao dịch bất thường. | 1-2 tuần | Backend |
| P1 | Chính sách lưu trữ chat | Encrypt ảnh chat; lưu 90 ngày sau đơn đóng; export được khi có khiếu nại. | 1 tuần | Backend + Legal |
| P2 | Báo cáo định kỳ Admin | Bổ sung UC-AD-10 Quản lý gói/khuyến mãi và UC-AD-11 Báo cáo định kỳ với schedule email. | 3-4 tuần | Product + BA |
| P2 | GDPR / NĐ 13/2023 | Bổ sung UC 'Yêu cầu xóa tài khoản'; ẩn dữ liệu thay vì xóa cứng; đáp ứng quyền của chủ thể dữ liệu. | 2 tuần | Legal + Backend |
| P2 | Đặt lại đơn từ lịch sử | Bổ sung UC cho phép copy đơn cũ → sửa → đặt mới; tăng tỷ lệ đặt lại. | 1 tuần | Frontend |
| P2 | Thuế TNCN tự động | Tự động khấu trừ 10% TNCN khi Tasker rút >2tr; cấp chứng từ cuối năm. | 2-3 tuần | Finance + Backend |
| P2 | Đa ngôn ngữ | Thêm tiếng Anh cho Vinhomes có nhiều cư dân nước ngoài. | 2-3 tuần | Frontend + Content |
| NaN | NaN | NaN | NaN | NaN |
| NaN | NaN | NaN | NaN | NaN |
| TỔNG SỐ HẠNG MỤC THEO GIAI ĐOẠN | NaN | NaN | NaN | NaN |
| P0 — Bắt buộc trước launch | NaN | 5 hạng mục · ước tính 8-12 tuần | NaN | NaN |
| P1 — Sprint sau launch | NaN | 5 hạng mục · ước tính 9-12 tuần | NaN | NaN |
| P2 — Tương lai (3-6 tháng) | NaN | 5 hạng mục · ước tính 10-15 tuần | NaN | NaN |

## 6. Tiêu chí đánh giá
| PHƯƠNG PHÁP & TIÊU CHÍ ĐÁNH GIÁ | Unnamed: 1 | Unnamed: 2 |
| --- | --- | --- |
| NaN | NaN | NaN |
| 5 TIÊU CHÍ ĐÁNH GIÁ | NaN | NaN |
| Tiêu chí | Mô tả | Cách chấm điểm |
| C1 — Mô tả rõ ràng | Mô tả use case rõ ràng, đầy đủ, dễ hiểu. Trường mô tả nắm bắt được mục đích và phạm vi. | 5: Đầy đủ, chi tiết, không gây hiểu nhầm | 3: Hiểu được nhưng chưa chi tiết | 1: Quá ngắn, không đủ thông tin |
| C2 — Luồng đầy đủ, hợp lý | Luồng chính được mô tả từng bước, có tính tuần tự, không nhảy bước hoặc thiếu thao tác. | 5: Luồng đầy đủ, hợp lý, có thể implement ngay | 3: Đủ ý nhưng thiếu vài bước phụ | 1: Mơ hồ, không thể implement |
| C3 — Xử lý ngoại lệ | Đã đề cập các luồng thay thế và trường hợp lỗi (mất kết nối, sai dữ liệu, conflict, etc.). | 5: Bao phủ đa số ngoại lệ thường gặp | 3: Có 1-2 ngoại lệ chính | 1: Không có hoặc rất ít |
| C4 — Khả thi triển khai | Đánh giá độ khả thi kỹ thuật và phù hợp với hạ tầng hiện tại (PHP + MySQL + Capacitor). | 5: Triển khai được ngay với stack hiện tại | 3: Cần thêm vendor/library | 1: Cần thiết kế lại kiến trúc |
| C5 — Mức độ ưu tiên | Mức độ quan trọng đối với MVP và trải nghiệm người dùng cốt lõi. | Cao: Bắt buộc trong MVP | Trung bình: Cần có nhưng không gấp | Thấp: Nice-to-have |
| NaN | NaN | NaN |
| THANG TỔNG ĐIỂM (TB của C1, C2, C3, C4) | NaN | NaN |
| Khoảng điểm | Đánh giá | NaN |
| 4.5 - 5.0 | Xuất sắc — sẵn sàng triển khai | NaN |
| 4.0 - 4.4 | Tốt — chỉ cần điều chỉnh nhỏ | NaN |
| 3.0 - 3.9 | Trung bình — cần bổ sung | NaN |
| Dưới 3.0 | Yếu — cần viết lại | NaN |
| NaN | NaN | NaN |
| NaN | NaN | NaN |
| PHÂN LOẠI TÌNH TRẠNG TÀI LIỆU | NaN | NaN |
| Tình trạng | Mô tả | NaN |
| Đầy đủ | UC mô tả đủ thông tin để chuyển sang phase thiết kế/coding. | NaN |
| Cần bổ sung | UC có khung cơ bản nhưng cần thêm chi tiết ở 1-2 trường (luồng/ngoại lệ/data). | NaN |
| Thiếu | UC quá sơ sài (1-2 dòng), cần viết lại trước khi triển khai. | NaN |