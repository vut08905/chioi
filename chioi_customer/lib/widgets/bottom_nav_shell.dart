import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../theme/app_colors.dart';

class BottomNavShell extends StatelessWidget {
  final StatefulNavigationShell navigationShell;
  const BottomNavShell({super.key, required this.navigationShell});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: navigationShell,
      bottomNavigationBar: Container(
        margin: const EdgeInsets.only(bottom: 24, left: 16, right: 16),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(9999),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.1), blurRadius: 20, offset: const Offset(0, 4))],
          border: Border.all(color: AppColors.surfaceContainerHigh),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _NavItem(icon: Icons.home, label: 'Trang chủ', index: 0, selected: navigationShell.currentIndex == 0, onTap: () => navigationShell.goBranch(0)),
              _NavItem(icon: Icons.assignment, label: 'Hoạt động', index: 1, selected: navigationShell.currentIndex == 1, onTap: () => navigationShell.goBranch(1)),
              _NavItem(icon: Icons.notifications, label: 'Thông báo', index: 2, selected: navigationShell.currentIndex == 2, onTap: () => navigationShell.goBranch(2), badge: 3),
              _NavItem(icon: Icons.person, label: 'Tài khoản', index: 3, selected: navigationShell.currentIndex == 3, onTap: () => navigationShell.goBranch(3)),
            ],
          ),
        ),
      ),
    );
  }
}

class _NavItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final int index;
  final bool selected;
  final VoidCallback onTap;
  final int? badge;

  const _NavItem({required this.icon, required this.label, required this.index, required this.selected, required this.onTap, this.badge});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Stack(
            clipBehavior: Clip.none,
            children: [
              Icon(icon, size: 28, color: selected ? AppColors.primary : AppColors.onSurfaceVariant),
              if (badge != null)
                Positioned(
                  top: -4, right: -8,
                  child: Container(
                    width: 16, height: 16,
                    decoration: BoxDecoration(color: AppColors.secondary, borderRadius: BorderRadius.circular(8)),
                    alignment: Alignment.center,
                    child: Text('$badge', style: const TextStyle(color: Colors.white, fontSize: 8, fontWeight: FontWeight.bold)),
                  ),
                ),
            ],
          ),
          const SizedBox(height: 2),
          Text(label, style: TextStyle(fontSize: 12, fontWeight: selected ? FontWeight.w600 : FontWeight.w500, color: selected ? AppColors.primary : AppColors.onSurfaceVariant)),
        ],
      ),
    );
  }
}
