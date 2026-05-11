import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class LienHeCskhScreen extends StatelessWidget {
  const LienHeCskhScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  child: Row(children: [
                    IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => context.pop()),
                    const Expanded(child: Text('Liên hệ CSKH', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
                    const SizedBox(width: 48),
                  ]),
                ),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(Spacing.containerPadding),
                    child: Column(
                      children: [
                        const SizedBox(height: 16),
                        const Icon(Icons.support_agent, size: 80, color: Colors.white),
                        const SizedBox(height: 16),
                        const Text('Chăm sóc khách hàng Chị Ơi', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: Colors.white)),
                        const SizedBox(height: 8),
                        const Text('Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Vui lòng chọn kênh liên hệ dưới đây.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70)),
                        const SizedBox(height: 32),
                        _contactCard(Icons.phone, 'Hotline', '1900 xxxx', 'Gọi ngay', AppColors.primary),
                        _contactCard(Icons.chat, 'Zalo', 'Chị Ơi Official', 'Nhắn tin', const Color(0xFF0068FF)),
                        _contactCard(Icons.facebook, 'Facebook', 'Fanpage Chị Ơi', 'Truy cập', const Color(0xFF1877F2)),
                        _contactCard(Icons.email, 'Email', 'support@chioi.vn', 'Gửi email', Colors.orange),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _contactCard(IconData icon, String title, String subtitle, String action, Color color) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: AppColors.softShadow,
        border: Border.all(color: AppColors.surfaceContainerLow),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: color.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(12)),
            child: Icon(icon, color: color, size: 24),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
                const SizedBox(height: 4),
                Text(subtitle, style: const TextStyle(color: AppColors.onSurfaceVariant, fontSize: 13)),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(9999)),
            child: Text(action, style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700)),
          ),
        ],
      ),
    );
  }
}
