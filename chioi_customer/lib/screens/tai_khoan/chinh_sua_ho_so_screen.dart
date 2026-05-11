import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class ChinhSuaHoSoScreen extends StatefulWidget {
  const ChinhSuaHoSoScreen({super.key});
  @override
  State<ChinhSuaHoSoScreen> createState() => _ChinhSuaHoSoScreenState();
}

class _ChinhSuaHoSoScreenState extends State<ChinhSuaHoSoScreen> {
  final _nameController = TextEditingController(text: 'Nguyễn Văn A');
  final _phoneController = TextEditingController(text: '090xxxx123');
  final _emailController = TextEditingController(text: 'nguyenvana@email.com');
  final _addressController = TextEditingController(text: 'Căn A1-2003, Vinhomes Grand Park');
  String _gender = 'Nam';
  String _dob = '15/03/1990';

  @override
  void dispose() {
    _nameController.dispose();
    _phoneController.dispose();
    _emailController.dispose();
    _addressController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(
            child: Column(children: [
              // App bar
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Row(children: [
                  IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => context.pop()),
                  const Expanded(child: Text('Chỉnh sửa hồ sơ', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
                  const SizedBox(width: 48),
                ]),
              ),
              const SizedBox(height: 8),

              // Content
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 0, Spacing.containerPadding, 120),
                  child: Column(children: [
                    // Avatar section
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(vertical: 24),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        boxShadow: AppColors.softShadow,
                        border: Border.all(color: AppColors.surfaceContainer),
                      ),
                      child: Column(children: [
                        Stack(
                          children: [
                            const CircleAvatar(
                              radius: 52,
                              backgroundColor: AppColors.surfaceContainerLow,
                              child: Icon(Icons.person, size: 56, color: AppColors.primary),
                            ),
                            Positioned(
                              bottom: 0, right: 0,
                              child: Container(
                                width: 36, height: 36,
                                decoration: BoxDecoration(
                                  gradient: AppColors.orangeGradient,
                                  borderRadius: BorderRadius.circular(9999),
                                  border: Border.all(color: Colors.white, width: 3),
                                ),
                                child: const Icon(Icons.camera_alt, color: Colors.white, size: 18),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        const Text('Nguyễn Văn A', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
                        const SizedBox(height: 4),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                          decoration: BoxDecoration(color: const Color(0xFFDCFCE7), borderRadius: BorderRadius.circular(9999)),
                          child: const Row(mainAxisSize: MainAxisSize.min, children: [
                            Icon(Icons.verified, size: 14, color: Color(0xFF15803D)),
                            SizedBox(width: 4),
                            Text('Đã xác thực BQL', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Color(0xFF15803D))),
                          ]),
                        ),
                      ]),
                    ),
                    const SizedBox(height: 24),

                    // Personal info section
                    Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        boxShadow: AppColors.softShadow,
                        border: Border.all(color: AppColors.surfaceContainer),
                      ),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)),
                            child: const Icon(Icons.person, color: AppColors.primary, size: 20),
                          ),
                          const SizedBox(width: 12),
                          const Text('Thông tin cá nhân', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
                        ]),
                        const SizedBox(height: 20),
                        _field('Họ và tên', _nameController, Icons.person_outline),
                        const SizedBox(height: 16),
                        // Gender
                        _label('Giới tính'),
                        const SizedBox(height: 8),
                        Row(children: ['Nam', 'Nữ', 'Khác'].map((g) => Padding(
                          padding: const EdgeInsets.only(right: 8),
                          child: GestureDetector(
                            onTap: () => setState(() => _gender = g),
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                              decoration: BoxDecoration(
                                color: _gender == g ? AppColors.primaryContainer : AppColors.surfaceContainerLow,
                                borderRadius: BorderRadius.circular(9999),
                                border: Border.all(color: _gender == g ? AppColors.primary : AppColors.outlineVariant),
                              ),
                              child: Text(g, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: _gender == g ? Colors.white : AppColors.onSurfaceVariant)),
                            ),
                          ),
                        )).toList()),
                        const SizedBox(height: 16),
                        // DOB
                        _label('Ngày sinh'),
                        const SizedBox(height: 8),
                        GestureDetector(
                          onTap: () async {
                            final d = await showDatePicker(context: context, initialDate: DateTime(1990, 3, 15), firstDate: DateTime(1950), lastDate: DateTime.now());
                            if (d != null) setState(() => _dob = '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}');
                          },
                          child: Container(
                            padding: const EdgeInsets.all(16),
                            decoration: BoxDecoration(color: AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(16)),
                            child: Row(children: [
                              const Icon(Icons.calendar_today, color: AppColors.primary, size: 20),
                              const SizedBox(width: 12),
                              Text(_dob, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
                              const Spacer(),
                              const Icon(Icons.chevron_right, color: AppColors.outline),
                            ]),
                          ),
                        ),
                      ]),
                    ),
                    const SizedBox(height: 24),

                    // Contact info section
                    Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        boxShadow: AppColors.softShadow,
                        border: Border.all(color: AppColors.surfaceContainer),
                      ),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)),
                            child: const Icon(Icons.contact_phone, color: AppColors.primary, size: 20),
                          ),
                          const SizedBox(width: 12),
                          const Text('Liên hệ', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
                        ]),
                        const SizedBox(height: 20),
                        _field('Số điện thoại', _phoneController, Icons.phone, suffix: _otpBadge()),
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(color: AppColors.primaryFixed.withValues(alpha: 0.4), borderRadius: BorderRadius.circular(12)),
                          child: const Row(children: [
                            Icon(Icons.info_outline, color: AppColors.primary, size: 16),
                            SizedBox(width: 8),
                            Expanded(child: Text('Đổi SĐT cần xác thực OTP', style: TextStyle(fontSize: 12, color: AppColors.primary))),
                          ]),
                        ),
                        const SizedBox(height: 16),
                        _field('Email', _emailController, Icons.email_outlined),
                      ]),
                    ),
                    const SizedBox(height: 24),

                    // Address section
                    Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        boxShadow: AppColors.softShadow,
                        border: Border.all(color: AppColors.surfaceContainer),
                      ),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)),
                            child: const Icon(Icons.location_on, color: AppColors.primary, size: 20),
                          ),
                          const SizedBox(width: 12),
                          const Expanded(child: Text('Địa chỉ cư trú', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700))),
                        ]),
                        const SizedBox(height: 20),
                        _field('Địa chỉ', _addressController, Icons.home_outlined),
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(color: AppColors.errorContainer.withValues(alpha: 0.3), borderRadius: BorderRadius.circular(12)),
                          child: const Row(children: [
                            Icon(Icons.warning_amber, color: AppColors.error, size: 16),
                            SizedBox(width: 8),
                            Expanded(child: Text('Đổi địa chỉ cần Ban Quản Lý xác thực', style: TextStyle(fontSize: 12, color: AppColors.error))),
                          ]),
                        ),
                      ]),
                    ),
                  ]),
                ),
              ),
            ]),
          ),

          // Fixed bottom save button
          Positioned(
            left: 0, right: 0, bottom: 0,
            child: Container(
              padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 16, Spacing.containerPadding, 32),
              decoration: BoxDecoration(
                color: Colors.white,
                border: const Border(top: BorderSide(color: AppColors.surfaceContainer)),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 20, offset: const Offset(0, -4))],
              ),
              child: GestureDetector(
                onTap: () {
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: const Text('Cập nhật hồ sơ thành công!'),
                      backgroundColor: AppColors.primary,
                      behavior: SnackBarBehavior.floating,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                  );
                  context.pop();
                },
                child: Container(
                  width: double.infinity,
                  padding: const EdgeInsets.symmetric(vertical: 18),
                  decoration: BoxDecoration(
                    gradient: AppColors.orangeGradient,
                    borderRadius: BorderRadius.circular(9999),
                    boxShadow: [BoxShadow(color: AppColors.primaryContainer.withValues(alpha: 0.3), blurRadius: 12, offset: const Offset(0, 4))],
                  ),
                  alignment: Alignment.center,
                  child: const Text('Lưu thay đổi', style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _label(String text) => Text(text, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: AppColors.onSurfaceVariant));

  Widget _field(String label, TextEditingController controller, IconData icon, {Widget? suffix}) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      _label(label),
      const SizedBox(height: 8),
      TextField(
        controller: controller,
        decoration: InputDecoration(
          prefixIcon: Icon(icon, color: AppColors.primary, size: 22),
          suffixIcon: suffix,
          filled: true,
          fillColor: AppColors.surfaceContainerLow,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
          focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: AppColors.primaryContainer, width: 2)),
        ),
      ),
    ]);
  }

  Widget _otpBadge() => Container(
    margin: const EdgeInsets.only(right: 8),
    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
    decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(9999)),
    child: const Text('Xác thực', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
  );
}
