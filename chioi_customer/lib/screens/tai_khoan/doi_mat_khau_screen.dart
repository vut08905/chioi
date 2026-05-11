import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class DoiMatKhauScreen extends StatefulWidget {
  const DoiMatKhauScreen({super.key});

  @override
  State<DoiMatKhauScreen> createState() => _DoiMatKhauScreenState();
}

class _DoiMatKhauScreenState extends State<DoiMatKhauScreen> {
  final _currentCtrl = TextEditingController();
  final _newCtrl = TextEditingController();
  final _confirmCtrl = TextEditingController();
  bool _showCurrent = false;
  bool _showNew = false;
  bool _showConfirm = false;

  @override
  void dispose() {
    _currentCtrl.dispose();
    _newCtrl.dispose();
    _confirmCtrl.dispose();
    super.dispose();
  }

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
                    const Expanded(child: Text('Đổi mật khẩu', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
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
                        // Icon header
                        Center(
                          child: Container(
                            width: 80, height: 80,
                            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(24)),
                            child: const Icon(Icons.lock_reset, color: Colors.white, size: 40),
                          ),
                        ),
                        const SizedBox(height: 12),
                        const Center(child: Text('Cập nhật mật khẩu mới', style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600))),
                        const SizedBox(height: 24),

                        // Form card
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
                                  child: const Icon(Icons.vpn_key, color: AppColors.primary, size: 20),
                                ),
                                const SizedBox(width: 12),
                                const Text('Thông tin mật khẩu', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
                              ]),
                              const SizedBox(height: 24),
                              _passwordField('Mật khẩu hiện tại', _currentCtrl, _showCurrent, (v) => setState(() => _showCurrent = v)),
                              const SizedBox(height: 16),
                              _passwordField('Mật khẩu mới', _newCtrl, _showNew, (v) => setState(() => _showNew = v)),
                              const SizedBox(height: 16),
                              _passwordField('Xác nhận mật khẩu mới', _confirmCtrl, _showConfirm, (v) => setState(() => _showConfirm = v)),
                            ],
                          ),
                        ),

                        const SizedBox(height: 16),

                        // Requirements card
                        Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            color: AppColors.primaryFixed.withValues(alpha: 0.3),
                            borderRadius: BorderRadius.circular(16),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text('Yêu cầu mật khẩu:', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppColors.primary)),
                              const SizedBox(height: 8),
                              _requirement('Tối thiểu 8 ký tự'),
                              _requirement('Chứa ít nhất 1 chữ hoa'),
                              _requirement('Chứa ít nhất 1 số'),
                              _requirement('Chứa ít nhất 1 ký tự đặc biệt'),
                            ],
                          ),
                        ),

                        const SizedBox(height: 32),

                        // Submit button
                        GestureDetector(
                          onTap: () {
                            ScaffoldMessenger.of(context).showSnackBar(
                              SnackBar(
                                content: const Text('Đổi mật khẩu thành công!'),
                                backgroundColor: AppColors.primary,
                                behavior: SnackBarBehavior.floating,
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                              ),
                            );
                            context.pop();
                          },
                          child: Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(vertical: 16),
                            decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(16)),
                            child: const Center(child: Text('Xác nhận đổi mật khẩu', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15))),
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

  Widget _passwordField(String label, TextEditingController ctrl, bool show, ValueChanged<bool> toggle) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(label, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppColors.onSurfaceVariant)),
        const SizedBox(height: 8),
        Container(
          decoration: BoxDecoration(
            color: AppColors.surfaceContainerLow,
            borderRadius: BorderRadius.circular(16),
          ),
          child: TextField(
            controller: ctrl,
            obscureText: !show,
            decoration: InputDecoration(
              hintText: label,
              hintStyle: const TextStyle(color: AppColors.outline, fontSize: 14),
              border: InputBorder.none,
              contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
              suffixIcon: IconButton(
                icon: Icon(show ? Icons.visibility : Icons.visibility_off, color: AppColors.outline, size: 20),
                onPressed: () => toggle(!show),
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _requirement(String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        children: [
          const Icon(Icons.check_circle_outline, size: 14, color: AppColors.primary),
          const SizedBox(width: 8),
          Text(text, style: const TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
        ],
      ),
    );
  }
}
