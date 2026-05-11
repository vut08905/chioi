import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class TaiKhoanScreen extends StatelessWidget {
  const TaiKhoanScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: SingleChildScrollView(
            padding: const EdgeInsets.only(bottom: 120),
            child: Column(children: [
              // Header
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding, vertical: 8),
                child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                  const Text('Tài khoản', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w800)),
                  GestureDetector(onTap: () => context.push('/chat'), child: const Icon(Icons.chat_bubble, color: Colors.white)),
                ]),
              ),
              const SizedBox(height: 16),
              // Profile card
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
                child: Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
                  child: Column(children: [
                    Row(children: [
                      const CircleAvatar(radius: 32, backgroundColor: AppColors.surfaceContainerLow, child: Icon(Icons.person, size: 32, color: AppColors.primary)),
                      const SizedBox(width: 12),
                      Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Text('Nguyễn Văn A', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
                        const Text('090xxxx123', style: TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)),
                        const SizedBox(height: 4),
                        Row(children: [
                          const Text('A1-2003 ', style: TextStyle(fontSize: 13, color: AppColors.onSurfaceVariant)),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                            decoration: BoxDecoration(color: const Color(0xFFDCFCE7), borderRadius: BorderRadius.circular(9999)),
                            child: Row(mainAxisSize: MainAxisSize.min, children: [const Icon(Icons.verified, size: 12, color: Color(0xFF15803D)), const SizedBox(width: 2), const Text('Đã xác thực BQL', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Color(0xFF15803D)))]),
                          ),
                        ]),
                      ])),
                    ]),
                    const SizedBox(height: 12),
                    const Text('Đổi SĐT cần OTP. Đổi địa chỉ cần BQL xác thực.', style: TextStyle(fontSize: 11, color: AppColors.onSurfaceVariant, fontStyle: FontStyle.italic)),
                    const SizedBox(height: 12),
                    GestureDetector(
                      onTap: () => context.push('/account/edit'),
                      child: Container(
                        width: double.infinity, padding: const EdgeInsets.symmetric(vertical: 10),
                        decoration: BoxDecoration(borderRadius: BorderRadius.circular(9999), border: Border.all(color: AppColors.primary, width: 2)),
                        alignment: Alignment.center,
                        child: const Text('Chỉnh sửa hồ sơ', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w700, fontSize: 13)),
                      ),
                    ),
                  ]),
                ),
              ),
              const SizedBox(height: 16),
              // Menu sections
              _menuSection([
                _MenuItem(Icons.account_balance_wallet, 'Quản lý Ví & Thanh toán', AppColors.primaryFixed, AppColors.primary, () => context.push('/wallet')),
                _MenuItem(Icons.home, 'Đăng ký Gói gia đình', AppColors.primaryFixed, AppColors.primary, () => context.push('/packages/gia-dinh')),
              ]),
              const SizedBox(height: 16),
              _menuSection([
                _MenuItem(Icons.headset_mic, 'Liên hệ CSKH', AppColors.surfaceContainer, AppColors.onSurfaceVariant, () => context.push('/account/contact')),
                _MenuItem(Icons.settings, 'Cài đặt (TB, Ngôn ngữ)', AppColors.surfaceContainer, AppColors.onSurfaceVariant, () => context.push('/account/settings')),
                _MenuItem(Icons.lock, 'Bảo mật & Quyền riêng tư', AppColors.surfaceContainer, AppColors.onSurfaceVariant, () => context.push('/account/security')),
                _MenuItem(Icons.delete, 'Xóa tài khoản', AppColors.errorContainer.withValues(alpha: 0.3), AppColors.error, () {
                  showDialog(
                    context: context,
                    builder: (c) => AlertDialog(
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                      title: const Text('Xóa tài khoản', style: TextStyle(fontWeight: FontWeight.w700, color: AppColors.error)),
                      content: const Text('Bạn có chắc chắn muốn xóa tài khoản không? Hành động này sẽ xóa toàn bộ dữ liệu và không thể hoàn tác.', style: TextStyle(color: AppColors.onSurfaceVariant)),
                      actions: [
                        TextButton(onPressed: () => Navigator.pop(c), child: const Text('Hủy', style: TextStyle(color: AppColors.onSurfaceVariant, fontWeight: FontWeight.w600))),
                        TextButton(
                          onPressed: () {
                            Navigator.pop(c);
                            context.go('/login');
                          }, 
                          child: const Text('Xóa tài khoản', style: TextStyle(color: AppColors.error, fontWeight: FontWeight.w700))
                        ),
                      ],
                    ),
                  );
                }, isRed: true),
              ]),
              const SizedBox(height: 16),
              // Logout
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
                child: GestureDetector(
                  onTap: () => context.go('/login'),
                  child: Container(
                    width: double.infinity, padding: const EdgeInsets.symmetric(vertical: 16),
                    decoration: BoxDecoration(color: AppColors.errorContainer.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(16)),
                    child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [Icon(Icons.logout, color: AppColors.error), SizedBox(width: 8), Text('Đăng xuất', style: TextStyle(color: AppColors.error, fontWeight: FontWeight.w700))]),
                  ),
                ),
              ),
            ]),
          )),
        ],
      ),
    );
  }

  Widget _menuSection(List<_MenuItem> items) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
      child: Container(
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
        child: Column(children: items.map((item) => GestureDetector(
          onTap: item.onTap,
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Row(children: [
              Container(width: 40, height: 40, decoration: BoxDecoration(color: item.iconBg, borderRadius: BorderRadius.circular(9999)), child: Icon(item.icon, color: item.iconColor)),
              const SizedBox(width: 12),
              Expanded(child: Text(item.label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: item.isRed ? AppColors.error : AppColors.onSurface))),
              const Icon(Icons.chevron_right, color: AppColors.outline),
            ]),
          ),
        )).toList()),
      ),
    );
  }
}

class _MenuItem {
  final IconData icon;
  final String label;
  final Color iconBg, iconColor;
  final VoidCallback onTap;
  final bool isRed;
  _MenuItem(this.icon, this.label, this.iconBg, this.iconColor, this.onTap, {this.isRed = false});
}
