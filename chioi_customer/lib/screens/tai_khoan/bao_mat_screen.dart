import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class BaoMatScreen extends StatefulWidget {
  const BaoMatScreen({super.key});

  @override
  State<BaoMatScreen> createState() => _BaoMatScreenState();
}

class _BaoMatScreenState extends State<BaoMatScreen> {
  bool _biometric = false;

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
                    const Expanded(child: Text('Bảo mật & Quyền riêng tư', style: TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w800), textAlign: TextAlign.center, overflow: TextOverflow.ellipsis)),
                    const SizedBox(width: 48),
                  ]),
                ),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(Spacing.containerPadding),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const SizedBox(height: 16),
                        Container(
                          padding: const EdgeInsets.all(20),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            boxShadow: AppColors.softShadow,
                            border: Border.all(color: AppColors.surfaceContainer),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(children: [
                                Container(
                                  padding: const EdgeInsets.all(8),
                                  decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)),
                                  child: const Icon(Icons.shield, color: AppColors.primary, size: 20),
                                ),
                                const SizedBox(width: 12),
                                const Text('Bảo mật tài khoản', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
                              ]),
                              const SizedBox(height: 20),
                              _actionTile(Icons.lock_outline, 'Đổi mật khẩu', 'Cập nhật mật khẩu để bảo vệ tài khoản', () => context.push('/account/change-password')),
                              _actionTile(Icons.pin_outlined, 'Thiết lập mã PIN', 'Sử dụng mã PIN 6 số cho các giao dịch', () => context.push('/account/setup-pin')),
                              
                              Container(
                                margin: const EdgeInsets.only(bottom: 12),
                                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                                decoration: BoxDecoration(
                                  color: AppColors.surfaceContainerLow,
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                child: Row(
                                  children: [
                                    const Icon(Icons.fingerprint, color: AppColors.primary, size: 24),
                                    const SizedBox(width: 16),
                                    const Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text('Sinh trắc học', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                                          SizedBox(height: 4),
                                          Text('Face ID hoặc Touch ID', style: TextStyle(color: AppColors.onSurfaceVariant, fontSize: 12)),
                                        ],
                                      ),
                                    ),
                                    Switch(
                                      value: _biometric,
                                      onChanged: (v) => setState(() => _biometric = v),
                                      activeColor: Colors.white,
                                      activeTrackColor: AppColors.primary,
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                        
                        const SizedBox(height: 24),
                        
                        Container(
                          padding: const EdgeInsets.all(20),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            boxShadow: AppColors.softShadow,
                            border: Border.all(color: AppColors.surfaceContainer),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(children: [
                                Container(
                                  padding: const EdgeInsets.all(8),
                                  decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)),
                                  child: const Icon(Icons.privacy_tip, color: AppColors.primary, size: 20),
                                ),
                                const SizedBox(width: 12),
                                const Text('Quyền riêng tư', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
                              ]),
                              const SizedBox(height: 20),
                              _actionTile(Icons.policy_outlined, 'Chính sách bảo mật', 'Quy định sử dụng dữ liệu', () => context.push('/account/privacy-policy')),
                              _actionTile(Icons.gavel_outlined, 'Điều khoản sử dụng', 'Quy định dịch vụ của Chị Ơi', () => context.push('/account/terms')),
                            ],
                          ),
                        ),
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

  Widget _actionTile(IconData icon, String title, String subtitle, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(
          color: AppColors.surfaceContainerLow,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(
          children: [
            Icon(icon, color: AppColors.primary, size: 24),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                  const SizedBox(height: 4),
                  Text(subtitle, style: const TextStyle(color: AppColors.onSurfaceVariant, fontSize: 12)),
                ],
              ),
            ),
            const Icon(Icons.chevron_right, color: AppColors.outline),
          ],
        ),
      ),
    );
  }
}
