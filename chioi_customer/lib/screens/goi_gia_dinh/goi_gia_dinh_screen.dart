import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class GoiGiaDinhScreen extends StatelessWidget {
  const GoiGiaDinhScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Background gradient
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),

          // Main content
          SafeArea(
            child: Column(children: [
              // App bar
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Row(children: [
                  IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => context.pop()),
                  const Expanded(child: Text('Gói Gia Đình', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
                  IconButton(icon: const Icon(Icons.chat_bubble, color: Colors.white), onPressed: () => context.push('/chat')),
                ]),
              ),

              // Scrollable content
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 16, Spacing.containerPadding, 120),
                  child: Column(children: [
                    // Hero pricing card
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(24),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20),
                        boxShadow: AppColors.softShadow,
                        border: Border.all(color: AppColors.surfaceContainerLow),
                      ),
                      child: Column(children: [
                        // Badge
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 5),
                          decoration: BoxDecoration(color: const Color(0xFF22C55E), borderRadius: BorderRadius.circular(9999)),
                          child: const Text('Tiết kiệm 30%', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
                        ),
                        const SizedBox(height: 16),
                        const Icon(Icons.family_restroom, size: 64, color: AppColors.primary),
                        const SizedBox(height: 12),
                        const Text('GÓI GIA ĐÌNH 30 NGÀY', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppColors.primary)),
                        const SizedBox(height: 8),
                        RichText(text: const TextSpan(children: [
                          TextSpan(text: '1.500.000 đ ', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w800, color: AppColors.onSurface)),
                          TextSpan(text: '/ tháng', style: TextStyle(fontSize: 14, color: AppColors.onSurfaceVariant)),
                        ])),
                      ]),
                    ),
                    const SizedBox(height: 24),

                    // Benefits section
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(20),
                        boxShadow: AppColors.softShadow,
                        border: Border.all(color: AppColors.surfaceContainerLow),
                      ),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(color: AppColors.primaryFixed, borderRadius: BorderRadius.circular(12)),
                            child: const Icon(Icons.stars, color: AppColors.primary, size: 22),
                          ),
                          const SizedBox(width: 12),
                          const Text('Đặc quyền của bạn', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
                        ]),
                        const SizedBox(height: 20),
                        _benefit('Dọn dẹp nhà 4 lần/tháng (Tối đa 4 giờ/lần)'),
                        _benefit('Tặng kèm 1 lần giặt sofa/rèm cửa'),
                        _benefit('Ưu tiên Tasker 5 sao, không phụ phí giờ cao điểm'),
                        _benefit('Hỗ trợ CSKH VIP ưu tiên 24/7'),
                      ]),
                    ),
                    const SizedBox(height: 24),

                    // Comparison section
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: AppColors.primaryFixed.withValues(alpha: 0.3),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: AppColors.primaryContainer.withValues(alpha: 0.3)),
                      ),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Text('So sánh chi phí', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
                        const SizedBox(height: 12),
                        _compare('Đặt lẻ 4 lần', '2.200.000 đ', false),
                        _compare('Gói Gia Đình', '1.500.000 đ', true),
                        const SizedBox(height: 8),
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.all(12),
                          decoration: BoxDecoration(color: const Color(0xFFDCFCE7), borderRadius: BorderRadius.circular(12)),
                          child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                            Icon(Icons.savings, color: Color(0xFF15803D), size: 20),
                            SizedBox(width: 8),
                            Text('Bạn tiết kiệm 700.000 đ/tháng', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14, color: Color(0xFF15803D))),
                          ]),
                        ),
                      ]),
                    ),
                    const SizedBox(height: 24),

                    // T&C
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: AppColors.surfaceContainerLow,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: AppColors.surfaceContainer),
                      ),
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Row(children: [
                          const Icon(Icons.description, color: AppColors.primary, size: 20),
                          const SizedBox(width: 8),
                          const Text('Điều khoản và điều kiện', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14)),
                        ]),
                        const SizedBox(height: 8),
                        const Text(
                          'Gói dịch vụ sẽ được gia hạn tự động hàng tháng. Hệ thống sẽ tự động gửi thông báo nhắc nhở 3 ngày trước khi tiến hành gia hạn. Bạn có thể hủy bất cứ lúc nào trước ngày gia hạn.',
                          style: TextStyle(fontSize: 14, color: AppColors.onSurfaceVariant, height: 1.5),
                        ),
                      ]),
                    ),
                    const SizedBox(height: 24),

                    // FAQ
                    const Align(alignment: Alignment.centerLeft, child: Text('Câu hỏi thường gặp', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700))),
                    const SizedBox(height: 12),
                    _faq('Gói này có dùng được cho nhiều địa chỉ không?', 'Chỉ áp dụng cho 1 địa chỉ mặc định đã đăng ký lúc thanh toán.'),
                    _faq('Tôi có thể chọn Tasker cố định không?', 'Có, bạn có thể thiết lập danh sách Tasker yêu thích ưu tiên trong mục Tài khoản.'),
                    _faq('Việc gia hạn tự động diễn ra như thế nào?', 'Hệ thống trừ tiền tự động từ Ví Chị Ơi hoặc Thẻ tín dụng liên kết lúc 00:00 ngày cuối chu kỳ.'),
                  ]),
                ),
              ),
            ]),
          ),

          // Fixed bottom bar
          Positioned(
            left: 0, right: 0, bottom: 0,
            child: Container(
              padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 16, Spacing.containerPadding, 32),
              decoration: BoxDecoration(
                color: Colors.white,
                border: const Border(top: BorderSide(color: AppColors.surfaceContainer)),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 20, offset: const Offset(0, -4))],
              ),
              child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('Tổng cộng', style: TextStyle(fontSize: 12, color: AppColors.onSurfaceVariant)),
                  Text('1.500.000 đ', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w800, color: AppColors.primary)),
                ]),
                GestureDetector(
                  onTap: () => context.push('/topup'),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 16),
                    decoration: BoxDecoration(
                      gradient: AppColors.orangeGradient,
                      borderRadius: BorderRadius.circular(9999),
                      boxShadow: [BoxShadow(color: AppColors.primaryContainer.withValues(alpha: 0.3), blurRadius: 12, offset: const Offset(0, 4))],
                    ),
                    child: const Row(children: [
                      Text('Đăng ký ngay', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 15)),
                      SizedBox(width: 6),
                      Icon(Icons.arrow_forward, color: Colors.white, size: 20),
                    ]),
                  ),
                ),
              ]),
            ),
          ),
        ],
      ),
    );
  }

  Widget _benefit(String text) => Padding(
    padding: const EdgeInsets.only(bottom: 12),
    child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Container(
        padding: const EdgeInsets.all(2),
        decoration: BoxDecoration(color: const Color(0xFFDCFCE7), borderRadius: BorderRadius.circular(9999)),
        child: const Icon(Icons.check_circle, color: Color(0xFF22C55E), size: 20),
      ),
      const SizedBox(width: 12),
      Expanded(child: Text(text, style: const TextStyle(fontSize: 14, height: 1.4))),
    ]),
  );

  Widget _compare(String label, String price, bool active) => Container(
    margin: const EdgeInsets.only(bottom: 8),
    padding: const EdgeInsets.all(14),
    decoration: BoxDecoration(
      color: active ? Colors.white : AppColors.surfaceContainerLow,
      borderRadius: BorderRadius.circular(12),
      border: Border.all(color: active ? AppColors.primary : AppColors.outlineVariant, width: active ? 2 : 1),
    ),
    child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
      Text(label, style: TextStyle(fontWeight: active ? FontWeight.w700 : FontWeight.w500, fontSize: 14, color: active ? AppColors.primary : AppColors.onSurfaceVariant)),
      Text(price, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16, color: active ? AppColors.primary : AppColors.onSurfaceVariant, decoration: active ? null : TextDecoration.lineThrough)),
    ]),
  );

  Widget _faq(String q, String a) => Container(
    margin: const EdgeInsets.only(bottom: 8),
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(16),
      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.03), blurRadius: 8)],
      border: Border.all(color: AppColors.surfaceContainerLow),
    ),
    child: ExpansionTile(
      shape: const Border(),
      tilePadding: const EdgeInsets.symmetric(horizontal: 16),
      title: Text(q, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
      children: [Padding(padding: const EdgeInsets.fromLTRB(16, 0, 16, 16), child: Text(a, style: const TextStyle(fontSize: 14, color: AppColors.onSurfaceVariant, height: 1.5)))],
    ),
  );
}
