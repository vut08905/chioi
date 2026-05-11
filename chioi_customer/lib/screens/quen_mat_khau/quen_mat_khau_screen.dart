import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class QuenMatKhauScreen extends StatefulWidget {
  const QuenMatKhauScreen({super.key});
  @override
  State<QuenMatKhauScreen> createState() => _QuenMatKhauScreenState();
}

class _QuenMatKhauScreenState extends State<QuenMatKhauScreen> {
  int _step = 0; // 0=phone, 1=otp, 2=new password

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(
            child: SingleChildScrollView(
              padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 16),
                  Align(
                    alignment: Alignment.centerLeft,
                    child: GestureDetector(
                      onTap: () => _step > 0 ? setState(() => _step--) : context.pop(),
                      child: const Icon(Icons.arrow_back, color: Colors.white, size: 28),
                    ),
                  ),
                  const SizedBox(height: 24),
                  const Icon(Icons.lock_reset, size: 56, color: Colors.white),
                  const SizedBox(height: 16),
                  const Text('Quên mật khẩu', textAlign: TextAlign.center, style: TextStyle(fontSize: 24, fontWeight: FontWeight.w800, color: Colors.white)),
                  const SizedBox(height: 8),
                  Text(_stepDescription, textAlign: TextAlign.center, style: TextStyle(fontSize: 14, color: Colors.white.withValues(alpha: 0.85))),
                  const SizedBox(height: 32),
                  Container(
                    padding: const EdgeInsets.all(24),
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24), boxShadow: AppColors.softShadow, border: Border.all(color: AppColors.surfaceContainer)),
                    child: _buildStep(),
                  ),
                  const SizedBox(height: 24),
                  GestureDetector(
                    onTap: () {
                      if (_step < 2) { setState(() => _step++); } else { context.go('/login'); }
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(9999)),
                      alignment: Alignment.center,
                      child: Text(_step == 2 ? 'Đặt lại mật khẩu' : 'Tiếp tục', style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w700)),
                    ),
                  ),
                  const SizedBox(height: 40),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  String get _stepDescription {
    switch (_step) {
      case 0: return 'Nhập số điện thoại để nhận mã OTP';
      case 1: return 'Nhập mã xác thực đã gửi đến SĐT';
      case 2: return 'Tạo mật khẩu mới cho tài khoản';
      default: return '';
    }
  }

  Widget _buildStep() {
    switch (_step) {
      case 0:
        return Column(children: [
          const Text('Số điện thoại', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.onSurfaceVariant)),
          const SizedBox(height: 8),
          TextField(keyboardType: TextInputType.phone, decoration: InputDecoration(prefixIcon: const Icon(Icons.phone, color: AppColors.primary), hintText: 'Nhập SĐT đã đăng ký', filled: true, fillColor: AppColors.surfaceContainerLow, border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none))),
        ]);
      case 1:
        return Column(children: [
          const Text('Mã OTP', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.onSurfaceVariant)),
          const SizedBox(height: 16),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: List.generate(6, (i) => Container(
            width: 44, height: 56, margin: const EdgeInsets.symmetric(horizontal: 4),
            decoration: BoxDecoration(color: AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(12), border: Border.all(color: i < 3 ? AppColors.primary : AppColors.outlineVariant)),
            alignment: Alignment.center,
            child: Text(i < 3 ? '${i + 1}' : '', style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppColors.primary)),
          ))),
          const SizedBox(height: 16),
          TextButton(onPressed: () {}, child: const Text('Gửi lại mã', style: TextStyle(color: AppColors.primary, fontWeight: FontWeight.w600))),
        ]);
      case 2:
        return Column(children: [
          const Text('Mật khẩu mới', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.onSurfaceVariant)),
          const SizedBox(height: 8),
          TextField(obscureText: true, decoration: InputDecoration(prefixIcon: const Icon(Icons.lock_outline, color: AppColors.primary), hintText: 'Tối thiểu 8 ký tự', filled: true, fillColor: AppColors.surfaceContainerLow, border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none))),
          const SizedBox(height: 16),
          const Text('Xác nhận mật khẩu', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.onSurfaceVariant)),
          const SizedBox(height: 8),
          TextField(obscureText: true, decoration: InputDecoration(prefixIcon: const Icon(Icons.lock_outline, color: AppColors.primary), hintText: 'Nhập lại mật khẩu', filled: true, fillColor: AppColors.surfaceContainerLow, border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none))),
        ]);
      default: return const SizedBox.shrink();
    }
  }
}
