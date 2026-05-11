import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class ViScreen extends StatelessWidget {
  const ViScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(children: [
            Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Row(children: [
              IconButton(icon: const Icon(Icons.arrow_back, color: AppColors.onSurface), onPressed: () => context.pop()),
              const Expanded(child: Text('Ví Chị Ơi', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15), textAlign: TextAlign.center)),
              IconButton(icon: const Icon(Icons.help_outline, color: AppColors.onSurface), onPressed: () {}),
            ])),
            Expanded(child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 4, Spacing.containerPadding, 120),
              child: Column(children: [
                // Balance card
                Container(
                  padding: const EdgeInsets.all(24),
                  decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(24)),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('SỐ DƯ KHẢ DỤNG', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w500, color: Colors.white.withValues(alpha: 0.9), letterSpacing: 2)),
                    const SizedBox(height: 4),
                    const Text('500.000 đ', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w800, color: Colors.white)),
                    const SizedBox(height: 16),
                    Row(children: [
                      Expanded(child: GestureDetector(onTap: () => context.push('/topup'), child: Container(padding: const EdgeInsets.symmetric(vertical: 14), decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(16)), child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [Icon(Icons.add_circle, color: Colors.white, size: 20), SizedBox(width: 6), Text('Nạp tiền', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600))])))),
                      const SizedBox(width: 12),
                      Expanded(child: Container(padding: const EdgeInsets.symmetric(vertical: 14), decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(16)), child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [Icon(Icons.account_balance_wallet, color: Colors.white, size: 20), SizedBox(width: 6), Text('Rút tiền', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600))]))),
                    ]),
                  ]),
                ),
                const SizedBox(height: 24),
                // Filter
                Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Lịch sử giao dịch', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)), Text('Tất cả', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: AppColors.primary))]),
                const SizedBox(height: 12),
                SingleChildScrollView(scrollDirection: Axis.horizontal, child: Row(children: ['Tất cả', 'Nạp tiền', 'Thanh toán', 'Hoàn tiền'].map((e) => Container(margin: const EdgeInsets.only(right: 8), padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8), decoration: BoxDecoration(color: e == 'Tất cả' ? AppColors.primary : AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(9999), border: e != 'Tất cả' ? Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3)) : null), child: Text(e, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: e == 'Tất cả' ? Colors.white : AppColors.onSurfaceVariant)))).toList())),
                const SizedBox(height: 16),
                // Transactions
                _tx(Icons.shopping_cart, 'Thanh toán dọn nhà', '14:30 - 24/10/2023', '- 450.000 đ', AppColors.error, AppColors.primaryContainer),
                _tx(Icons.account_balance_wallet, 'Nạp tiền vào ví', '09:15 - 23/10/2023', '+ 100.000 đ', AppColors.primary, AppColors.tertiaryContainer),
                _tx(Icons.cleaning_services, 'Dọn dẹp định kỳ', '16:00 - 20/10/2023', '- 320.000 đ', AppColors.error, AppColors.primaryContainer),
                _tx(Icons.history, 'Hoàn tiền dịch vụ', '10:00 - 18/10/2023', '+ 50.000 đ', AppColors.primary, AppColors.secondaryContainer),
              ]),
            )),
          ])),
        ],
      ),
    );
  }

  Widget _tx(IconData icon, String title, String date, String amount, Color amountColor, Color iconBg) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.02), blurRadius: 8)], border: Border.all(color: AppColors.surfaceContainer)),
      child: Row(children: [
        Container(width: 48, height: 48, decoration: BoxDecoration(color: iconBg.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(9999)), child: Icon(icon, color: iconBg)),
        const SizedBox(width: 12),
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
          Text(date, style: const TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
          Container(margin: const EdgeInsets.only(top: 4), padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2), decoration: BoxDecoration(color: AppColors.tertiaryContainer.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(9999)), child: const Text('Thành công', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: AppColors.tertiary))),
        ])),
        Text(amount, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14, color: amountColor)),
      ]),
    );
  }
}
