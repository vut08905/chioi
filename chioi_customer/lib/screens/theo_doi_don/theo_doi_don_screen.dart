import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class TheoDoidonScreen extends StatelessWidget {
  const TheoDoidonScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(children: [
            Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Row(children: [
              IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => context.pop()),
              const Expanded(child: Text('Theo dõi đơn', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800))),
              IconButton(icon: const Icon(Icons.chat_bubble, color: Colors.white), onPressed: () => context.push('/chat')),
            ])),
            Expanded(child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(Spacing.md, 16, Spacing.md, 120),
              child: Column(children: [
                // Tasker card
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24), boxShadow: [BoxShadow(color: AppColors.primary.withValues(alpha: 0.08), blurRadius: 20, offset: const Offset(0, 4))], border: Border.all(color: AppColors.surfaceContainerLow)),
                  child: Row(children: [
                    const CircleAvatar(radius: 32, backgroundColor: AppColors.surfaceContainerLow, child: Icon(Icons.person, size: 32, color: AppColors.primary)),
                    const SizedBox(width: 12),
                    const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('Nguyễn Lan', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
                      SizedBox(height: 4),
                      Row(children: [Icon(Icons.star, color: AppColors.primary, size: 18), SizedBox(width: 4), Text('4.8', style: TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)), SizedBox(width: 8), Text('•', style: TextStyle(color: AppColors.outlineVariant)), SizedBox(width: 8), Text('Dọn dẹp nhà', style: TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant))]),
                    ])),
                    Container(padding: const EdgeInsets.all(12), decoration: BoxDecoration(color: AppColors.surfaceContainerHigh, borderRadius: BorderRadius.circular(9999)), child: const Icon(Icons.call, color: AppColors.primary)),
                  ]),
                ),
                const SizedBox(height: 16),
                // Stepper
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 20, offset: const Offset(0, 4))], border: Border.all(color: AppColors.surfaceContainerLow)),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const Text('TIẾN TRÌNH THỰC HIỆN', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppColors.outline, letterSpacing: 1)),
                    const SizedBox(height: 16),
                    _step('Đã đặt đơn', '10:00', 'Đơn hàng của bạn đã được tiếp nhận', true, false),
                    _step('Đã tìm Tasker', '10:02', 'Tasker Nguyễn Lan đã nhận việc', true, false),
                    _step('Tasker đang đến', '10:15', 'Đang di chuyển tới địa chỉ của bạn', true, false),
                    _step('Đang thực hiện', 'Hiện tại', 'Tasker đang tiến hành dọn dẹp', false, true),
                    _step('Hoàn thành', '', 'Dịch vụ kết thúc', false, false, isLast: true),
                  ]),
                ),
                const SizedBox(height: 16),
                // Order details
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 20)], border: Border.all(color: AppColors.surfaceContainerLow)),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const Text('CHI TIẾT ĐƠN HÀNG', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppColors.outline, letterSpacing: 1)),
                    const SizedBox(height: 12),
                    _detail('Mã đơn', '#DH20261020-001'),
                    _detail('Dịch vụ', 'Dọn dẹp nhà'),
                    _detail('Thời gian', '20/10/2026 - 10:00'),
                    const Divider(height: 24),
                    Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Tổng tiền', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16)), const Text('450.000 đ', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: AppColors.primary))]),
                  ]),
                ),
                const SizedBox(height: 16),
                // Action buttons
                Row(children: [
                  _actionBtn(Icons.chat, 'Chat', AppColors.surfaceContainerHigh, AppColors.primary, () => context.push('/chat')),
                  const SizedBox(width: 12),
                  _actionBtn(Icons.call, 'Gọi', AppColors.surfaceContainerHigh, AppColors.primary, () {}),
                  const SizedBox(width: 12),
                  _actionBtn(Icons.cancel, 'Hủy đơn', const Color(0xFFFEF2F2), AppColors.error, () {}),
                ]),
              ]),
            )),
          ])),
        ],
      ),
    );
  }

  Widget _step(String title, String time, String desc, bool done, bool active, {bool isLast = false}) {
    return IntrinsicHeight(
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Column(children: [
          Container(width: 24, height: 24, decoration: BoxDecoration(color: done || active ? AppColors.primary : AppColors.outlineVariant, borderRadius: BorderRadius.circular(12)), child: Center(child: done ? const Icon(Icons.check, size: 16, color: Colors.white) : Container(width: 8, height: 8, decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(4))))),
          if (!isLast) Expanded(child: Container(width: 2, color: done ? AppColors.primary : AppColors.outlineVariant.withValues(alpha: 0.5))),
        ]),
        const SizedBox(width: 16),
        Expanded(child: Padding(padding: EdgeInsets.only(bottom: isLast ? 0 : 24), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(title, style: TextStyle(fontWeight: active ? FontWeight.w800 : FontWeight.w600, fontSize: 14, color: active ? AppColors.primary : (done ? AppColors.onBackground : AppColors.outline))), if (time.isNotEmpty) Text(time, style: TextStyle(fontSize: 12, fontWeight: active ? FontWeight.w700 : FontWeight.w400, color: active ? AppColors.primary : AppColors.onSurfaceVariant))]),
          const SizedBox(height: 2),
          Text(desc, style: const TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
        ]))),
      ]),
    );
  }

  Widget _detail(String l, String r) => Padding(padding: const EdgeInsets.symmetric(vertical: 4), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(l, style: const TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)), Text(r, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600))]));

  Widget _actionBtn(IconData icon, String label, Color bg, Color fg, VoidCallback onTap) => Expanded(child: GestureDetector(onTap: onTap, child: Container(padding: const EdgeInsets.symmetric(vertical: 14), decoration: BoxDecoration(color: bg, borderRadius: BorderRadius.circular(16)), child: Column(mainAxisSize: MainAxisSize.min, children: [Icon(icon, color: fg), const SizedBox(height: 4), Text(label, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: fg))]))));
}
