import 'package:flutter/material.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class HoatDongScreen extends StatelessWidget {
  const HoatDongScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final orders = [
      _Order('Dọn dẹp nhà', '20/10 • 10:00', 'Nguyễn Lan', '450.000 đ', 'Hoàn thành', Icons.cleaning_services, AppColors.primaryContainer, const Color(0xFFDCFCE7), const Color(0xFF15803D)),
      _Order('Trông trẻ', '18/10 • 18:00', 'Trần Minh', '300.000 đ', 'Đang thực hiện', Icons.child_care, AppColors.tertiaryContainer, const Color(0xFFDBEAFE), const Color(0xFF1D4ED8)),
      _Order('Mua hộ WinMart', '15/10 • 14:00', 'Lê Hoa', '550.000 đ', 'Đã hủy', Icons.shopping_cart, AppColors.secondaryContainer, const Color(0xFFFEE2E2), const Color(0xFFB91C1C)),
    ];
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Padding(padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding, vertical: 12), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
              const Text('Hoạt động', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w800)),
            ])),
            Padding(padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding), child: Text('Quản lý lịch sử dịch vụ và đơn hàng', style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 14))),
            const SizedBox(height: 16),
            Expanded(child: Container(
              decoration: BoxDecoration(color: AppColors.background.withValues(alpha: 0.8), borderRadius: const BorderRadius.vertical(top: Radius.circular(32))),
              child: Column(children: [
                // Tabs
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
                  height: 56,
                  child: Row(children: ['Tất cả', 'Dọn nhà', 'Trông trẻ'].map((e) => Padding(padding: const EdgeInsets.only(right: 16), child: Text(e, style: TextStyle(fontWeight: e == 'Tất cả' ? FontWeight.w700 : FontWeight.w500, fontSize: 14, color: e == 'Tất cả' ? AppColors.primary : AppColors.onSurfaceVariant)))).toList()),
                ),
                // Chips
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
                  child: SingleChildScrollView(scrollDirection: Axis.horizontal, child: Row(children: ['Tất cả', 'Dọn nhà', 'Trông trẻ', 'Mua hộ'].map((e) => Container(margin: const EdgeInsets.only(right: 8), padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8), decoration: BoxDecoration(color: e == 'Tất cả' ? AppColors.primary : AppColors.surfaceContainer, borderRadius: BorderRadius.circular(9999)), child: Text(e, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: e == 'Tất cả' ? Colors.white : AppColors.onSurfaceVariant)))).toList())),
                ),
                const SizedBox(height: 16),
                // List
                Expanded(child: ListView.separated(
                  padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 0, Spacing.containerPadding, 120),
                  itemCount: orders.length,
                  separatorBuilder: (_, __) => const SizedBox(height: 12),
                  itemBuilder: (_, i) {
                    final o = orders[i];
                    return Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 15)], border: Border.all(color: AppColors.surfaceContainer)),
                      child: Column(children: [
                        Row(children: [
                          Container(width: 48, height: 48, decoration: BoxDecoration(color: o.iconBg.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12)), child: Icon(o.icon, color: o.iconBg)),
                          const SizedBox(width: 12),
                          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(o.name, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14)), Text(o.date, style: const TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant))])),
                          Container(padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4), decoration: BoxDecoration(color: o.statusBg, borderRadius: BorderRadius.circular(9999)), child: Text(o.status, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: o.statusColor))),
                        ]),
                        const Divider(height: 24),
                        Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                          Row(children: [const CircleAvatar(radius: 12, backgroundColor: AppColors.surfaceContainerLow, child: Icon(Icons.person, size: 14, color: AppColors.primary)), const SizedBox(width: 8), Text('Tasker: ${o.tasker}', style: const TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant))]),
                          Text(o.price, style: TextStyle(fontWeight: FontWeight.w700, color: o.status == 'Đã hủy' ? AppColors.onSurfaceVariant : AppColors.primary, decoration: o.status == 'Đã hủy' ? TextDecoration.lineThrough : null)),
                        ]),
                      ]),
                    );
                  },
                )),
              ]),
            )),
          ])),
        ],
      ),
    );
  }
}

class _Order {
  final String name, date, tasker, price, status;
  final IconData icon;
  final Color iconBg, statusBg, statusColor;
  _Order(this.name, this.date, this.tasker, this.price, this.status, this.icon, this.iconBg, this.statusBg, this.statusColor);
}
