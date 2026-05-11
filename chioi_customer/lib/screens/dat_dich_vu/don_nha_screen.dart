import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class DonNhaScreen extends StatefulWidget {
  const DonNhaScreen({super.key});
  @override
  State<DonNhaScreen> createState() => _DonNhaScreenState();
}

class _DonNhaScreenState extends State<DonNhaScreen> {
  int _rooms = 2;
  int _hours = 3;
  String _selectedDate = '20/10/2026';
  String _selectedTime = '10:00';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(
            child: Column(
              children: [
                _appBar(context),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 16, Spacing.containerPadding, 120),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      _roomSection(),
                      const SizedBox(height: 24),
                      _timeSection(),
                      const SizedBox(height: 24),
                      _addressSection(),
                      const SizedBox(height: 24),
                      _summarySection(context),
                    ]),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _appBar(BuildContext ctx) => Padding(
    padding: const EdgeInsets.symmetric(horizontal: 12),
    child: Row(children: [
      IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => ctx.pop()),
      const Expanded(child: Text('Dọn dẹp nhà', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800))),
      IconButton(icon: const Icon(Icons.chat_bubble, color: Colors.white), onPressed: () => ctx.push('/chat')),
    ]),
  );

  Widget _roomSection() => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
    const Text('Số phòng', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
    const SizedBox(height: 12),
    Wrap(spacing: 8, children: List.generate(4, (i) {
      final v = i + 1;
      final sel = v == _rooms;
      return GestureDetector(
        onTap: () => setState(() => _rooms = v),
        child: Container(
          width: 72, padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(
            color: sel ? AppColors.primaryContainer : Colors.white,
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: sel ? AppColors.primary : AppColors.outlineVariant),
          ),
          alignment: Alignment.center,
          child: Text('$v phòng', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13, color: sel ? Colors.white : AppColors.onSurface)),
        ),
      );
    })),
  ]);

  Widget _timeSection() => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
    const Text('Thời gian làm việc', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
    const SizedBox(height: 12),
    Row(children: [
      Expanded(child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
        child: Row(children: [const Icon(Icons.calendar_today, color: AppColors.primary, size: 20), const SizedBox(width: 8), Text(_selectedDate, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14))]),
      )),
      const SizedBox(width: 12),
      Expanded(child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
        child: Row(children: [const Icon(Icons.access_time, color: AppColors.primary, size: 20), const SizedBox(width: 8), Text(_selectedTime, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14))]),
      )),
    ]),
    const SizedBox(height: 12),
    const Text('Số giờ', style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13)),
    const SizedBox(height: 8),
    Row(children: [
      _counterBtn(Icons.remove, () { if (_hours > 1) setState(() => _hours--); }),
      Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: Text('$_hours giờ', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700))),
      _counterBtn(Icons.add, () => setState(() => _hours++)),
    ]),
  ]);

  Widget _counterBtn(IconData icon, VoidCallback onTap) => GestureDetector(
    onTap: onTap,
    child: Container(
      width: 40, height: 40,
      decoration: BoxDecoration(color: AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(12)),
      child: Icon(icon, color: AppColors.primary),
    ),
  );

  Widget _addressSection() => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
    child: Row(children: [
      const Icon(Icons.location_on, color: AppColors.primary),
      const SizedBox(width: 12),
      const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('Địa chỉ', style: TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
        Text('Căn A1-2003, Vinhomes', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
      ])),
      TextButton(onPressed: () {}, child: const Text('Thay đổi', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 13))),
    ]),
  );

  Widget _summarySection(BuildContext ctx) => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.2))),
    child: Column(children: [
      _row('Số phòng', '$_rooms phòng'),
      _row('Thời gian', '$_hours giờ'),
      _row('Phí dịch vụ', '${150 * _hours}.000 đ'),
      const Divider(height: 24),
      Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
        const Text('Tổng cộng', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16)),
        Text('${150 * _hours}.000 đ', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 18, color: AppColors.primary)),
      ]),
      const SizedBox(height: 16),
      GestureDetector(
        onTap: () => ctx.push('/orders/tracking'),
        child: Container(
          width: double.infinity, padding: const EdgeInsets.symmetric(vertical: 16),
          decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(9999)),
          alignment: Alignment.center,
          child: Text('Đặt dịch vụ — ${150 * _hours}.000 đ', style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w700)),
        ),
      ),
    ]),
  );

  Widget _row(String l, String r) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 4),
    child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
      Text(l, style: const TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)),
      Text(r, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600)),
    ]),
  );
}
