import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class MuaHoScreen extends StatelessWidget {
  const MuaHoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(children: [
            Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Row(children: [
              IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => context.pop()),
              const Expanded(child: Text('Mua hộ WinMart', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800))),
              IconButton(icon: const Icon(Icons.chat_bubble, color: Colors.white), onPressed: () => context.push('/chat')),
            ])),
            Expanded(child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 16, Spacing.containerPadding, 32),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Chọn cửa hàng', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                const SizedBox(height: 12),
                _store('WinMart Vinhomes A', '500m', true),
                const SizedBox(height: 8),
                _store('WinMart Vinhomes B', '1km', false),
                const SizedBox(height: 24),
                Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                  const Text('Danh sách sản phẩm', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                  Text('3 sản phẩm', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 13)),
                ]),
                const SizedBox(height: 12),
                Container(
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.2))),
                  child: Column(children: [
                    _product('Sữa TH', 'x2'), const Divider(height: 1, indent: 16, endIndent: 16),
                    _product('Trứng gà', 'x1'), const Divider(height: 1, indent: 16, endIndent: 16),
                    _product('Rau xà lách', 'x1'),
                    Padding(
                      padding: const EdgeInsets.all(16),
                      child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [const Icon(Icons.add, color: AppColors.primary, size: 20), const SizedBox(width: 8), Text('Thêm sản phẩm', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 14))]),
                    ),
                  ]),
                ),
                const SizedBox(height: 24),
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
                  child: Row(children: [const Icon(Icons.location_on, color: AppColors.primary), const SizedBox(width: 12), const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text('Địa chỉ giao hàng', style: TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)), Text('Căn A1-2003, Vinhomes', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14))])), TextButton(onPressed: () {}, child: const Text('Thay đổi', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 13)))]),
                ),
                const SizedBox(height: 24),
                const Text('Ngân sách dự kiến', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                const SizedBox(height: 12),
                Container(padding: const EdgeInsets.all(16), decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Ngân sách tối đa', style: TextStyle(color: AppColors.onSurfaceVariant)), const Text('500.000 đ', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16))])),
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: AppColors.primaryFixedDim.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12), border: Border.all(color: AppColors.primary.withValues(alpha: 0.1))),
                  child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [const Icon(Icons.info, color: AppColors.primary, size: 20), const SizedBox(width: 8), const Expanded(child: Text('Nếu tổng chi vượt ngân sách, Tasker sẽ chụp hóa đơn và chat xác nhận với bạn trước khi mua', style: TextStyle(fontSize: 12, color: AppColors.onPrimaryFixedVariant)))]),
                ),
                const SizedBox(height: 12),
                Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Phí DV mua hộ'), Text('50.000 đ', style: TextStyle(fontWeight: FontWeight.w700, color: AppColors.primary))]),
                const SizedBox(height: 24),
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow),
                  child: Column(children: [
                    _r('Cửa hàng', 'WinMart Vinhomes A'), _r('Số lượng sản phẩm', '3 mặt hàng'), _r('Ngân sách đi chợ', '500.000 đ'), _r('Phí dịch vụ', '50.000 đ'),
                    const Divider(height: 24),
                    Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [const Text('Tổng cộng', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16)), const Text('550.000 đ', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: AppColors.primary))]),
                    const SizedBox(height: 16),
                    GestureDetector(
                      onTap: () => context.push('/orders/tracking'),
                      child: Container(width: double.infinity, padding: const EdgeInsets.symmetric(vertical: 16), decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(9999)), alignment: Alignment.center, child: const Text('Đặt mua hộ — 550.000 đ', style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w700))),
                    ),
                  ]),
                ),
              ]),
            )),
          ])),
        ],
      ),
    );
  }

  Widget _store(String name, String dist, bool active) => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(color: active ? AppColors.surfaceContainerLow : Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: active ? AppColors.primary : AppColors.outlineVariant.withValues(alpha: 0.3), width: active ? 2 : 1)),
    child: Row(children: [
      Container(width: 40, height: 40, decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(8)), child: const Icon(Icons.store, color: AppColors.primary)),
      const SizedBox(width: 12),
      Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(name, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14, color: active ? AppColors.primary : AppColors.onSurface)), Text(dist, style: const TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant))])),
      Icon(active ? Icons.check_circle : Icons.radio_button_unchecked, color: active ? AppColors.primary : AppColors.outlineVariant),
    ]),
  );

  Widget _product(String name, String qty) => Padding(padding: const EdgeInsets.all(16), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(name, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14)), Text('Số lượng: $qty', style: const TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant))]), IconButton(onPressed: () {}, icon: const Icon(Icons.delete, color: AppColors.error, size: 22))]));
  Widget _r(String l, String r) => Padding(padding: const EdgeInsets.symmetric(vertical: 4), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(l, style: const TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)), Text(r, style: const TextStyle(fontSize: 13))]));
}
