import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class ChinhSachBaoMatScreen extends StatelessWidget {
  const ChinhSachBaoMatScreen({super.key});

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
                    const Expanded(child: Text('Chính sách bảo mật', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
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
                        Center(child: Container(width: 80, height: 80, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(24)), child: const Icon(Icons.privacy_tip, color: Colors.white, size: 40))),
                        const SizedBox(height: 12),
                        const Center(child: Text('Chính sách bảo mật', style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600))),
                        const SizedBox(height: 4),
                        Center(child: Text('Cập nhật: 01/01/2026', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 12))),
                        const SizedBox(height: 24),
                        _sec(Icons.info_outline, '1. Giới thiệu', 'Chính sách này mô tả cách Chị Ơi! thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của bạn.'),
                        _sec(Icons.folder_shared_outlined, '2. Thông tin thu thập', '• Họ tên, SĐT, email\n• Địa chỉ cư trú (mã căn hộ)\n• Thông tin thanh toán\n• Lịch sử đặt dịch vụ\n• Đánh giá và phản hồi'),
                        _sec(Icons.data_usage, '3. Mục đích sử dụng', '• Cung cấp và cải thiện dịch vụ\n• Xử lý đơn hàng và thanh toán\n• Gửi thông báo đơn hàng\n• Hỗ trợ CSKH\n• Phát hiện gian lận'),
                        _sec(Icons.share_outlined, '4. Chia sẻ thông tin', 'Chúng tôi không bán thông tin cá nhân. Chỉ chia sẻ với:\n• Tasker thực hiện dịch vụ\n• BQL tòa nhà (xác thực)\n• Đối tác thanh toán\n• Cơ quan có thẩm quyền'),
                        _sec(Icons.security, '5. Bảo vệ dữ liệu', '• Mã hóa SSL/TLS\n• Mã hóa mật khẩu và PIN\n• Xác thực OTP\n• Giám sát 24/7'),
                        _sec(Icons.person_outline, '6. Quyền của bạn', '• Truy cập và xem thông tin\n• Yêu cầu chỉnh sửa\n• Yêu cầu xóa tài khoản\n• Từ chối thông báo tiếp thị'),
                        _sec(Icons.email_outlined, '7. Liên hệ', 'Email: privacy@chioi.vn\nHotline: 1900 xxxx'),
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
