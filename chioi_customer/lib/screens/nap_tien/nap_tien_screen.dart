import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class NapTienScreen extends StatelessWidget {
  const NapTienScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(children: [
            Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Row(children: [
              IconButton(icon: const Icon(Icons.arrow_back), onPressed: () => context.pop()),
              const Expanded(child: Text('Nạp tiền', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: AppColors.primary), textAlign: TextAlign.center)),
              IconButton(icon: const Icon(Icons.chat_bubble), onPressed: () => context.push('/chat')),
            ])),
            Expanded(child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 16, Spacing.containerPadding, 32),
              child: Column(children: [
                // Amount input
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const Text('SỐ TIỀN MUỐN NẠP', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppColors.onSurfaceVariant, letterSpacing: 1)),
                    const SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.only(bottom: 8),
                      decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: AppColors.primary, width: 2))),
                      child: const Row(children: [Text('đ ', style: TextStyle(fontSize: 28, color: AppColors.primary, fontWeight: FontWeight.w800)), Expanded(child: Text('500.000', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w800)))]),
                    ),
                    const SizedBox(height: 16),
                    Wrap(spacing: 8, children: ['100.000', '200.000', '500.000'].map((e) => Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                      decoration: BoxDecoration(
                        color: e == '500.000' ? AppColors.primary : Colors.white,
                        borderRadius: BorderRadius.circular(9999),
                        border: Border.all(color: e == '500.000' ? AppColors.primary : AppColors.outlineVariant),
                      ),
                      child: Text('$e đ', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: e == '500.000' ? Colors.white : AppColors.secondary)),
                    )).toList()),
                  ]),
                ),
                const SizedBox(height: 16),
                // Payment method
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant)),
                  child: Row(children: [
                    Container(width: 48, height: 48, decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(12)), child: const Icon(Icons.qr_code_2, color: Colors.white)),
                    const SizedBox(width: 12),
                    const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('Phương thức thanh toán', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600)),
                      Text('Chuyển khoản ngân hàng (Quét mã QR)', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppColors.primary)),
                    ])),
                  ]),
                ),
                const SizedBox(height: 16),
                // QR Code
                Container(
                  padding: const EdgeInsets.all(24),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
                  child: Column(children: [
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.surfaceContainerHighest, width: 2)),
                      child: Icon(Icons.qr_code_2, size: 180, color: AppColors.onSurface.withValues(alpha: 0.8)),
                    ),
                    const SizedBox(height: 12),
                    const Text('Mở ứng dụng Ngân hàng của bạn và quét mã này', style: TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant, fontStyle: FontStyle.italic), textAlign: TextAlign.center),
                  ]),
                ),
                const SizedBox(height: 16),
                // Transfer info
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
                  child: Column(children: [
                    _info('SỐ TÀI KHOẢN', '1234567890123', true),
                    const Divider(), _info('TÊN TÀI KHOẢN', 'CÔNG TY TNHH CLEAN SERVICE', false),
                    const Divider(), _info('NỘI DUNG CHUYỂN KHOẢN', 'NAPVI 0987654321', true, highlight: true),
                    const SizedBox(height: 12),
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(color: AppColors.errorContainer.withValues(alpha: 0.3), borderRadius: BorderRadius.circular(12)),
                      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [const Icon(Icons.info, color: AppColors.error, size: 20), const SizedBox(width: 8), const Expanded(child: Text.rich(TextSpan(children: [TextSpan(text: 'Bắt buộc', style: TextStyle(fontWeight: FontWeight.w700)), TextSpan(text: ' nhập đúng nội dung để được cộng tiền tự động vào ví.')]), style: TextStyle(fontSize: 13, color: AppColors.onErrorContainer)))]),
                    ),
                  ]),
                ),
                const SizedBox(height: 16),
                GestureDetector(
                  onTap: () => context.pop(),
                  child: Container(width: double.infinity, padding: const EdgeInsets.symmetric(vertical: 18), decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(9999)), alignment: Alignment.center, child: const Text('Tôi đã chuyển khoản', style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w700))),
                ),
              ]),
            )),
          ])),
        ],
      ),
    );
  }

  Widget _info(String label, String value, bool copyable, {bool highlight = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
        Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(label, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppColors.onSurfaceVariant, letterSpacing: 1)),
          const SizedBox(height: 4),
          Text(value, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: highlight ? AppColors.primary : AppColors.onSurface)),
        ])),
        if (copyable) IconButton(icon: const Icon(Icons.content_copy, color: AppColors.primary, size: 20), onPressed: () {}),
      ]),
    );
  }
}
