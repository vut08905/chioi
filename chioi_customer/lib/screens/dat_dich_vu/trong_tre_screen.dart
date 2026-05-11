import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class TrongTreScreen extends StatefulWidget {
  const TrongTreScreen({super.key});
  @override
  State<TrongTreScreen> createState() => _TrongTreScreenState();
}

class _TrongTreScreenState extends State<TrongTreScreen> {
  int _children = 1;
  int _hours = 4;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(children: [
            Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Row(children: [
              IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => context.pop()),
              const Expanded(child: Text('Trông trẻ', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800))),
              IconButton(icon: const Icon(Icons.chat_bubble, color: Colors.white), onPressed: () => context.push('/chat')),
            ])),
            Expanded(child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 16, Spacing.containerPadding, 120),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Số trẻ', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                const SizedBox(height: 12),
                Row(children: [
                  _cBtn(Icons.remove, () { if (_children > 1) setState(() => _children--); }),
                  Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: Text('$_children bé', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700))),
                  _cBtn(Icons.add, () => setState(() => _children++)),
                ]),
                const SizedBox(height: 24),
                const Text('Độ tuổi', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                const SizedBox(height: 12),
                Wrap(spacing: 8, runSpacing: 8, children: ['0-1 tuổi', '1-3 tuổi', '3-6 tuổi', '6-12 tuổi'].map((e) => Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                  decoration: BoxDecoration(color: e == '1-3 tuổi' ? AppColors.primaryContainer : Colors.white, borderRadius: BorderRadius.circular(12), border: Border.all(color: e == '1-3 tuổi' ? AppColors.primary : AppColors.outlineVariant)),
                  child: Text(e, style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: e == '1-3 tuổi' ? Colors.white : AppColors.onSurface)),
                )).toList()),
                const SizedBox(height: 24),
                const Text('Số giờ trông', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                const SizedBox(height: 12),
                Row(children: [
                  _cBtn(Icons.remove, () { if (_hours > 1) setState(() => _hours--); }),
                  Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: Text('$_hours giờ', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700))),
                  _cBtn(Icons.add, () => setState(() => _hours++)),
                ]),
                const SizedBox(height: 24),
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
                  child: Row(children: [const Icon(Icons.location_on, color: AppColors.primary), const SizedBox(width: 12), const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('Địa chỉ', style: TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
                    Text('Căn A1-2003, Vinhomes', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                  ]))]),
                ),
                const SizedBox(height: 24),
                Container(
                  width: double.infinity, padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow),
                  child: Column(children: [
                    _r('Số trẻ', '$_children bé'),
                    _r('Số giờ', '$_hours giờ'),
                    _r('Phí dịch vụ', '${80 * _hours}.000 đ'),
                    const Divider(height: 24),
                    Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                      const Text('Tổng cộng', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16)),
                      Text('${80 * _hours}.000 đ', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: AppColors.primary)),
                    ]),
                    const SizedBox(height: 16),
                    GestureDetector(
                      onTap: () => context.push('/orders/tracking'),
                      child: Container(width: double.infinity, padding: const EdgeInsets.symmetric(vertical: 16), decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(9999)), alignment: Alignment.center, child: const Text('Đặt trông trẻ', style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w700))),
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

  Widget _cBtn(IconData ic, VoidCallback onTap) => GestureDetector(onTap: onTap, child: Container(width: 40, height: 40, decoration: BoxDecoration(color: AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(12)), child: Icon(ic, color: AppColors.primary)));
  Widget _r(String l, String r) => Padding(padding: const EdgeInsets.symmetric(vertical: 4), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text(l, style: const TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)), Text(r, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600))]));
}
