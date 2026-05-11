import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class DanhGiaScreen extends StatefulWidget {
  const DanhGiaScreen({super.key});
  @override
  State<DanhGiaScreen> createState() => _DanhGiaScreenState();
}

class _DanhGiaScreenState extends State<DanhGiaScreen> {
  int _rating = 2;
  final _tags = {'ĐÚNG GIỜ': false, 'SẠCH SẼ': false, 'NHIỆT TÌNH': false};

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(children: [
            Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Row(children: [
              IconButton(icon: const Icon(Icons.close, color: Colors.white), onPressed: () => context.pop()),
              const Expanded(child: Text('Đánh giá chất lượng', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: TextAlign.center)),
              const SizedBox(width: 40),
            ])),
            Expanded(child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(Spacing.containerPadding, 24, Spacing.containerPadding, 32),
              child: Column(children: [
                const CircleAvatar(radius: 48, backgroundColor: AppColors.surfaceContainerLow, child: Icon(Icons.person, size: 48, color: AppColors.primary)),
                const SizedBox(height: 16),
                const Text('Nguyễn Lan', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800)),
                const SizedBox(height: 4),
                const Text('Dịch vụ Dọn dẹp nhà · Ngày 20/10', style: TextStyle(fontSize: 14, color: AppColors.onSurfaceVariant)),
                const SizedBox(height: 32),
                // Stars
                Row(mainAxisAlignment: MainAxisAlignment.center, children: List.generate(5, (i) => GestureDetector(
                  onTap: () => setState(() => _rating = i + 1),
                  child: Padding(padding: const EdgeInsets.symmetric(horizontal: 4), child: Icon(Icons.star, size: 48, color: i < _rating ? AppColors.primaryContainer : AppColors.outlineVariant)),
                ))),
                const SizedBox(height: 16),
                if (_rating <= 2) Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                  decoration: BoxDecoration(color: AppColors.surfaceContainerLow, borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.primaryContainer.withValues(alpha: 0.2))),
                  child: const Text('Rất tiếc về trải nghiệm của bạn. Chị Ơi sẽ xử lý sự cố này.', style: TextStyle(fontSize: 13, color: AppColors.primary), textAlign: TextAlign.center),
                ),
                const SizedBox(height: 24),
                // Tags
                Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: _tags.keys.map((t) => GestureDetector(
                  onTap: () => setState(() => _tags[t] = !_tags[t]!),
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    decoration: BoxDecoration(color: _tags[t]! ? AppColors.primaryContainer.withValues(alpha: 0.1) : Colors.white, borderRadius: BorderRadius.circular(9999), border: Border.all(color: _tags[t]! ? AppColors.primary : AppColors.outlineVariant)),
                    child: Text(t, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: _tags[t]! ? AppColors.primary : AppColors.onSecondaryContainer)),
                  ),
                )).toList()),
                const SizedBox(height: 24),
                // Textarea
                const Align(alignment: Alignment.centerLeft, child: Text('Nhận xét của bạn', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14))),
                const SizedBox(height: 8),
                TextField(maxLines: 4, decoration: InputDecoration(hintText: 'Chia sẻ thêm về trải nghiệm của bạn...', filled: true, fillColor: Colors.white, border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: AppColors.outlineVariant)), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: AppColors.primaryContainer, width: 2)))),
                const SizedBox(height: 24),
                GestureDetector(
                  onTap: () => context.go('/'),
                  child: Container(width: double.infinity, padding: const EdgeInsets.symmetric(vertical: 18), decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: BorderRadius.circular(9999)), alignment: Alignment.center, child: const Text('Gửi đánh giá', style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w700))),
                ),
              ]),
            )),
          ])),
        ],
      ),
    );
  }
}
