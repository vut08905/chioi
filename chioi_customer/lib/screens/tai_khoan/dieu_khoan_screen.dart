import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class DieuKhoanScreen extends StatelessWidget {
  const DieuKhoanScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  child: Row(children: [
                    IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => context.pop()),
                    const Expanded(child: Text('Điều khoản sử dụng', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
                    const SizedBox(width: 48),
                  ]),
                ),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(Spacing.containerPadding),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const SizedBox(height: 16),
                        Center(child: Container(width: 80, height: 80, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(24)), child: const Icon(Icons.gavel, color: Colors.white, size: 40))),
                        const SizedBox(height: 12),
                        const Center(child: Text('Điều khoản sử dụng', style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600))),
                        const SizedBox(height: 4),
                        Center(child: Text('Cập nhật: 01/01/2026', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 12))),
                        const SizedBox(height: 24),
                        _sec(Icons.handshake_outlined, '1. Chấp nhận điều khoản', 'Bằng việc sử dụng ứng dụng Chị Ơi!, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu dưới đây. Nếu không đồng ý, vui lòng ngừng sử dụng dịch vụ.'),
                        _sec(Icons.home_repair_service_outlined, '2. Mô tả dịch vụ', 'Chị Ơi! cung cấp nền tảng kết nối cư dân với các dịch vụ:\n• Dọn dẹp nhà cửa\n• Trông trẻ\n• Mua hộ\n• Và các dịch vụ gia đình khác'),
                        _sec(Icons.person_outline, '3. Tài khoản người dùng', '• Bạn phải đăng ký tài khoản để sử dụng\n• Thông tin đăng ký phải chính xác\n• Bạn chịu trách nhiệm bảo mật tài khoản\n• Mỗi người chỉ được 1 tài khoản\n• Cần xác thực qua BQL tòa nhà'),
                        _sec(Icons.payment_outlined, '4. Thanh toán', '• Thanh toán qua Ví Chị Ơi\n• Giá dịch vụ hiển thị trước khi đặt\n• Không hoàn tiền sau khi dịch vụ hoàn thành\n• Hoàn tiền nếu Tasker hủy đơn\n• Phí hủy đơn áp dụng theo quy định'),
                        _sec(Icons.cancel_outlined, '5. Hủy đơn & Hoàn tiền', '• Hủy miễn phí trước 30 phút\n• Hủy sau 30 phút: phí 30% giá trị đơn\n• Hoàn tiền trong 3-5 ngày làm việc\n• Khiếu nại trong vòng 24h sau dịch vụ'),
                        _sec(Icons.block_outlined, '6. Hành vi bị cấm', '• Sử dụng dịch vụ cho mục đích bất hợp pháp\n• Quấy rối hoặc đe dọa Tasker\n• Cung cấp thông tin sai lệch\n• Lạm dụng chính sách hoàn tiền\n• Tạo nhiều tài khoản giả mạo'),
                        _sec(Icons.warning_amber_outlined, '7. Giới hạn trách nhiệm', 'Chị Ơi! là nền tảng trung gian. Chúng tôi không chịu trách nhiệm trực tiếp về chất lượng dịch vụ của Tasker, nhưng cam kết hỗ trợ giải quyết mọi khiếu nại.'),
                        _sec(Icons.update_outlined, '8. Thay đổi điều khoản', 'Chúng tôi có quyền cập nhật điều khoản. Thay đổi sẽ được thông báo qua ứng dụng. Tiếp tục sử dụng sau thay đổi đồng nghĩa bạn chấp nhận điều khoản mới.'),
                        const SizedBox(height: 24),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _sec(IconData icon, String title, String content) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Container(padding: const EdgeInsets.all(8), decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)), child: Icon(icon, color: AppColors.primary, size: 20)),
          const SizedBox(width: 12),
          Expanded(child: Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700))),
        ]),
        const SizedBox(height: 12),
        Text(content, style: const TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant, height: 1.6)),
      ]),
    );
  }
}
