import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../theme/app_colors.dart';
import '../../theme/app_theme.dart';

class ChatScreen extends StatelessWidget {
  const ChatScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Positioned(top: 0, left: 0, right: 0, height: 300, child: Container(decoration: const BoxDecoration(gradient: AppColors.topGradient))),
          SafeArea(child: Column(children: [
            // Header
            Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: Row(children: [
              IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white, size: 28), onPressed: () => context.pop()),
              const CircleAvatar(radius: 20, backgroundColor: Colors.white24, child: Icon(Icons.person, color: Colors.white)),
              const SizedBox(width: 8),
              const Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Nguyễn Lan', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 15)),
                Text('Đang trực tuyến', style: TextStyle(color: Colors.white70, fontSize: 11)),
              ])),
              Container(width: 40, height: 40, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(9999)), child: const Icon(Icons.call, color: Colors.white)),
            ])),
            // Pinned order
            Container(margin: const EdgeInsets.all(Spacing.md), padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12), decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.9), borderRadius: BorderRadius.circular(16), border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.3))),
              child: Row(children: [Container(padding: const EdgeInsets.all(8), decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(8)), child: const Icon(Icons.cleaning_services, color: Colors.white, size: 20)), const SizedBox(width: 12), const Expanded(child: Text('Đơn: Dọn nhà · 20/10 · Đang TH', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 13))), const Icon(Icons.chevron_right, color: AppColors.onSurfaceVariant)]),
            ),
            // Messages
            Expanded(child: ListView(padding: const EdgeInsets.symmetric(horizontal: Spacing.containerPadding), children: [
              Center(child: Container(margin: const EdgeInsets.symmetric(vertical: 16), padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4), decoration: BoxDecoration(color: AppColors.surfaceVariant, borderRadius: BorderRadius.circular(9999)), child: const Text('HÔM NAY, 10:12', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppColors.onSurfaceVariant)))),
              _taskerMsg('Chào chị, em đang trên đường đến ạ!', '10:12'),
              _userMsg('Dạ, chị chờ em nhé', '10:15'),
              _taskerMsg('Em đến rồi ạ!', '10:20'),
              _userMsg('Ok em, chị ra mở cửa', '10:21'),
            ])),
            // Input bar
            Container(
              padding: const EdgeInsets.symmetric(horizontal: Spacing.md, vertical: Spacing.sm),
              child: Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(9999), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 12)], border: Border.all(color: AppColors.outlineVariant.withValues(alpha: 0.2))),
                child: Row(children: [
                  IconButton(icon: const Icon(Icons.image, color: AppColors.outline), onPressed: () {}),
                  IconButton(icon: const Icon(Icons.photo_camera, color: AppColors.outline), onPressed: () {}),
                  const Expanded(child: TextField(decoration: InputDecoration(hintText: 'Nhập tin nhắn...', border: InputBorder.none, contentPadding: EdgeInsets.symmetric(horizontal: 8)))),
                  Container(width: 40, height: 40, decoration: BoxDecoration(color: AppColors.primary, borderRadius: BorderRadius.circular(9999)), child: const Icon(Icons.send, color: Colors.white, size: 20)),
                ]),
              ),
            ),
            const SizedBox(height: 8),
          ])),
        ],
      ),
    );
  }

  static Widget _taskerMsg(String text, String time) => Padding(
    padding: const EdgeInsets.only(bottom: 12, right: 60),
    child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
      const CircleAvatar(radius: 16, backgroundColor: AppColors.surfaceContainerLow, child: Icon(Icons.person, size: 16, color: AppColors.primary)),
      const SizedBox(width: 8),
      Flexible(child: Container(padding: const EdgeInsets.all(12), decoration: BoxDecoration(color: AppColors.surfaceContainerHigh, borderRadius: const BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16), bottomRight: Radius.circular(16))), child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [Text(text, style: const TextStyle(fontSize: 14)), const SizedBox(height: 4), Text(time, style: const TextStyle(fontSize: 10, color: AppColors.onSurfaceVariant))]))),
    ]),
  );

  static Widget _userMsg(String text, String time) => Padding(
    padding: const EdgeInsets.only(bottom: 12, left: 60),
    child: Align(alignment: Alignment.centerRight, child: Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(gradient: AppColors.orangeGradient, borderRadius: const BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16), bottomLeft: Radius.circular(16))),
      child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [Text(text, style: const TextStyle(fontSize: 14, color: Colors.white)), const SizedBox(height: 4), Row(mainAxisSize: MainAxisSize.min, children: [Text(time, style: TextStyle(fontSize: 10, color: Colors.white.withValues(alpha: 0.8))), const SizedBox(width: 4), const Icon(Icons.done_all, size: 14, color: Colors.white)])]),
    )),
  );
}
