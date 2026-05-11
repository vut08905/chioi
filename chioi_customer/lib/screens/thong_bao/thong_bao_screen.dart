import 'package:flutter/material.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class ThongBaoScreen extends StatelessWidget {
  const ThongBaoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding, vertical: 8),
              child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                const Text('Thông báo', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w800)),
                IconButton(icon: const Icon(Icons.done_all, color: Colors.white), onPressed: () {}),
              ]),
            ),
            // Category tabs
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
              child: SingleChildScrollView(scrollDirection: Axis.horizontal, child: Row(children: ['Đơn hàng', 'Ví', 'Hệ thống', 'Khuyến mãi'].map((e) => Container(
                margin: const EdgeInsets.only(right: 8), padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
                decoration: BoxDecoration(color: e == 'Đơn hàng' ? AppColors.primaryContainer : Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(9999), border: e != 'Đơn hàng' ? Border.all(color: Colors.white.withValues(alpha: 0.3)) : null),
                child: Text(e, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: e == 'Đơn hàng' ? AppColors.onPrimaryContainer : Colors.white)),
              )).toList())),
            ),
            const SizedBox(height: 16),
            // Notification list
            Expanded(child: Container(
              padding: const EdgeInsets.all(Spacing.md),
              decoration: BoxDecoration(color: Colors.white, borderRadius: const BorderRadius.vertical(top: Radius.circular(32)), border: Border.all(color: AppColors.primaryFixed.withValues(alpha: 0.3))),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Gần đây', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppColors.onSurfaceVariant)), IconButton(icon: const Icon(Icons.settings, size: 20, color: AppColors.onSurfaceVariant), onPressed: () {})]),
                Expanded(child: ListView(padding: EdgeInsets.zero, children: [
                  _noti(Icons.local_shipping, AppColors.primaryContainer, AppColors.onPrimary, 'Đơn hàng đang đến', 'Tasker Nguyễn Lan đang di chuyển tới địa chỉ của bạn.', '2 phút trước', true),
                  _noti(Icons.sell, AppColors.secondaryContainer.withValues(alpha: 0.3), AppColors.secondary, 'Khuyến mãi 20%', 'Nhập mã CHIOI20 để được giảm giá dịch vụ dọn nhà.', '1 giờ trước', false),
                  _noti(Icons.account_balance_wallet, AppColors.tertiaryContainer, AppColors.onTertiary, 'Biến động số dư', 'Bạn vừa nạp 500.000đ vào ví Chị Ơi.', '3 giờ trước', true),
                  _noti(Icons.info, AppColors.surfaceVariant, AppColors.onSurfaceVariant, 'Cập nhật hệ thống', 'Ứng dụng đã được cập nhật phiên bản mới nhất 2.1.0.', 'Hôm qua', false),
                ])),
              ]),
            )),
          ])),
        ],
      ),
    );
  }

  Widget _noti(IconData icon, Color iconBg, Color iconColor, String title, String desc, String time, bool unread) {
    return Container(
      margin: const EdgeInsets.only(bottom: 8), padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: unread ? AppColors.primaryFixed : AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(20)),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(width: 48, height: 48, decoration: BoxDecoration(color: iconBg, borderRadius: BorderRadius.circular(9999)), child: Icon(icon, color: iconColor)),
        const SizedBox(width: 12),
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14)), if (unread) Container(width: 10, height: 10, decoration: BoxDecoration(color: AppColors.error, borderRadius: BorderRadius.circular(5)))]),
          const SizedBox(height: 4),
          Text(desc, style: const TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)),
          const SizedBox(height: 4),
          Text(time, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w500, color: AppColors.outline)),
        ])),
      ]),
    );
  }
}
