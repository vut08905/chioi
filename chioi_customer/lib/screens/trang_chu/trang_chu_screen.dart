import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class TrangChuScreen extends StatelessWidget {
  const TrangChuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(
            child: SingleChildScrollView(
              padding: const EdgeInsets.only(bottom: 120),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildHeader(context),
                  _buildSearch(),
                  const SizedBox(height: 24),
                  _buildServices(context),
                  const SizedBox(height: 24),
                  _buildBanner(context),
                  const SizedBox(height: 24),
                  _buildActiveOrder(context),
                  const SizedBox(height: 24),
                  _buildWallet(context),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding, vertical: 12),
      child: Row(
        children: [
          const CircleAvatar(radius: 24, backgroundColor: Colors.white24, child: Icon(Icons.person, color: Colors.white)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Xin chào,', style: TextStyle(fontSize: 14, color: Colors.white.withValues(alpha: 0.85))),
              const Text('Nguyễn Văn A 👋', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Colors.white)),
            ]),
          ),
          GestureDetector(
            onTap: () => context.push('/chat'),
            child: Container(padding: const EdgeInsets.all(10), decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(9999)), child: const Icon(Icons.chat_bubble, color: Colors.white, size: 22)),
          ),
        ],
      ),
    );
  }

  Widget _buildSearch() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow),
        child: const Row(children: [Icon(Icons.search, color: AppColors.outline), SizedBox(width: 12), Text('Tìm dịch vụ, Tasker...', style: TextStyle(color: AppColors.outline, fontSize: 14))]),
      ),
    );
  }

  Widget _buildServices(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Text('Dịch vụ nổi bật', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
        const SizedBox(height: 16),
        Row(children: [
          _svc('assets/images/donnha_v7.png', 'Dọn nhà', AppColors.primaryContainer, () => context.push('/services/don-nha')),
          const SizedBox(width: Spacing.cardGutter),
          _svc('assets/images/trongtre_v7.png', 'Trông trẻ', AppColors.tertiaryContainer, () => context.push('/services/trong-tre')),
          const SizedBox(width: Spacing.cardGutter),
          _svc('assets/images/muaho_v7.png', 'Mua hộ', AppColors.secondaryContainer, () => context.push('/services/mua-ho')),
        ]),
      ]),
    );
  }

  Widget _svc(String assetPath, String label, Color color, VoidCallback onTap) {
    return Expanded(
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 16),
          child: Column(children: [
            SizedBox(width: 72, height: 72, child: Image.asset(assetPath, fit: BoxFit.contain)),
            const SizedBox(height: 8),
            Text(label, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600)),
          ]),
        ),
      ),
    );
  }

  Widget _buildBanner(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
      child: GestureDetector(
        onTap: () => context.push('/packages/gia-dinh'),
        child: Container(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(20)),
          child: Row(children: [
            const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Gói Gia Đình', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800)),
              SizedBox(height: 4),
              Text('Tiết kiệm 30% mỗi tháng', style: TextStyle(color: Colors.white70, fontSize: 13)),
            ])),
            Container(padding: const EdgeInsets.all(12), decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(16)), child: const Icon(Icons.family_restroom, color: Colors.white, size: 32)),
          ]),
        ),
      ),
    );
  }

  Widget _buildActiveOrder(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Text('Đơn đang thực hiện', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
        const SizedBox(height: 12),
        GestureDetector(
          onTap: () => context.push('/orders/tracking'),
          child: Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
            child: Row(children: [
              Container(width: 48, height: 48, decoration: BoxDecoration(color: AppColors.primaryContainer.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(12)), child: Center(child: Image.asset('assets/images/donnha_v7.png', width: 40, height: 40))),
              const SizedBox(width: 12),
              const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Dọn dẹp nhà', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                SizedBox(height: 2),
                Text('Tasker: Nguyễn Lan', style: TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
              ])),
              Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6), decoration: BoxDecoration(color: Color(0xFFDCFCE7), borderRadius: BorderRadius.circular(9999)), child: const Text('Đang TH', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Color(0xFF15803D)))),
            ]),
          ),
        ),
      ]),
    );
  }

  Widget _buildWallet(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
      child: GestureDetector(
        onTap: () => context.push('/wallet'),
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
          child: Row(children: [
            Container(width: 40, height: 40, decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)), child: const Icon(Icons.account_balance_wallet, color: AppColors.primary, size: 22)),
            const SizedBox(width: 12),
            const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Ví Chị Ơi', style: TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
              Text('500.000 đ', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppColors.primary)),
            ])),
            const Icon(Icons.chevron_right, color: AppColors.outline),
          ]),
        ),
      ),
    );
  }
}
