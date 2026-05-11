import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class ThietLapPinScreen extends StatefulWidget {
  const ThietLapPinScreen({super.key});

  @override
  State<ThietLapPinScreen> createState() => _ThietLapPinScreenState();
}

class _ThietLapPinScreenState extends State<ThietLapPinScreen> {
  final List<String> _pin = [];
  final List<String> _confirmPin = [];
  bool _isConfirmStep = false;
  String? _errorText;

  void _onKeyPress(String key) {
    setState(() {
      _errorText = null;
      if (_isConfirmStep) {
        if (_confirmPin.length < 6) _confirmPin.add(key);
        if (_confirmPin.length == 6) {
          if (_pin.join() == _confirmPin.join()) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: const Text('Thiết lập mã PIN thành công!'),
                backgroundColor: AppColors.primary,
                behavior: SnackBarBehavior.floating,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              ),
            );
            context.pop();
          } else {
            _errorText = 'Mã PIN không khớp. Vui lòng thử lại.';
            _confirmPin.clear();
          }
        }
      } else {
        if (_pin.length < 6) _pin.add(key);
        if (_pin.length == 6) {
          Future.delayed(const Duration(milliseconds: 200), () {
            setState(() => _isConfirmStep = true);
          });
        }
      }
    });
  }

  void _onDelete() {
    setState(() {
      _errorText = null;
      if (_isConfirmStep) {
        if (_confirmPin.isNotEmpty) _confirmPin.removeLast();
      } else {
        if (_pin.isNotEmpty) _pin.removeLast();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentPinList = _isConfirmStep ? _confirmPin : _pin;

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
                    const Expanded(child: Text('Thiết lập mã PIN', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
                    const SizedBox(width: 48),
                  ]),
                ),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(Spacing.containerPadding),
                    child: Column(
                      children: [
                        const SizedBox(height: 16),
                        // Icon header
                        Container(
                          width: 80, height: 80,
                          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(24)),
                          child: const Icon(Icons.pin, color: Colors.white, size: 40),
                        ),
                        const SizedBox(height: 12),
                        Text(
                          _isConfirmStep ? 'Nhập lại mã PIN' : 'Tạo mã PIN 6 số',
                          style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          _isConfirmStep ? 'Xác nhận mã PIN của bạn' : 'Mã PIN dùng cho các giao dịch thanh toán',
                          style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 13),
                        ),
                        const SizedBox(height: 32),

                        // PIN card
                        Container(
                          padding: const EdgeInsets.all(24),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            boxShadow: AppColors.softShadow,
                            border: Border.all(color: AppColors.surfaceContainer),
                          ),
                          child: Column(
                            children: [
                              // PIN dots
                              Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: List.generate(6, (i) {
                                  bool filled = i < currentPinList.length;
                                  return Container(
                                    margin: const EdgeInsets.symmetric(horizontal: 8),
                                    width: 16, height: 16,
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      color: filled ? AppColors.primary : Colors.transparent,
                                      border: Border.all(color: filled ? AppColors.primary : AppColors.outline, width: 2),
                                    ),
                                  );
                                }),
                              ),
                              if (_errorText != null) ...[
                                const SizedBox(height: 12),
                                Text(_errorText!, style: const TextStyle(color: AppColors.error, fontSize: 12, fontWeight: FontWeight.w600)),
                              ],
                              const SizedBox(height: 32),

                              // Keypad
                              ...List.generate(4, (row) {
                                if (row < 3) {
                                  return Padding(
                                    padding: const EdgeInsets.only(bottom: 12),
                                    child: Row(
                                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                      children: List.generate(3, (col) {
                                        final num = '${row * 3 + col + 1}';
                                        return _keyButton(num);
                                      }),
                                    ),
                                  );
                                } else {
                                  return Row(
                                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                    children: [
                                      const SizedBox(width: 64),
                                      _keyButton('0'),
                                      GestureDetector(
                                        onTap: _onDelete,
                                        child: Container(
                                          width: 64, height: 56,
                                          decoration: BoxDecoration(
                                            color: AppColors.surfaceContainerLow,
                                            borderRadius: BorderRadius.circular(16),
                                          ),
                                          child: const Center(child: Icon(Icons.backspace_outlined, color: AppColors.onSurfaceVariant)),
                                        ),
                                      ),
                                    ],
                                  );
                                }
                              }),
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

  Widget _keyButton(String value) {
    return GestureDetector(
      onTap: () => _onKeyPress(value),
      child: Container(
        width: 64, height: 56,
        decoration: BoxDecoration(
          color: AppColors.surfaceContainerLow,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Center(child: Text(value, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700))),
      ),
    );
  }
}
