import 'package:flutter/material.dart';
import '../theme/app_colors.dart';

class GradientHeader extends StatelessWidget {
  final String? title;
  final Widget? leading;
  final Widget? trailing;
  final Widget? bottom;
  final double height;

  const GradientHeader({super.key, this.title, this.leading, this.trailing, this.bottom, this.height = 300});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height,
      decoration: const BoxDecoration(gradient: AppColors.topGradient),
    );
  }
}

class GradientAppBar extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  final VoidCallback? onBack;
  final Widget? trailing;

  const GradientAppBar({super.key, required this.title, this.onBack, this.trailing});

  @override
  Size get preferredSize => const Size.fromHeight(56);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(gradient: AppColors.orangeGradient),
      child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12),
          child: Row(
            children: [
              if (onBack != null)
                IconButton(
                  icon: const Icon(Icons.arrow_back, color: Colors.white),
                  onPressed: onBack,
                ),
              if (onBack != null) const SizedBox(width: 4),
              Expanded(child: Text(title, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w800), textAlign: onBack != null ? TextAlign.left : TextAlign.center)),
              if (trailing != null) trailing! else const SizedBox(width: 40),
            ],
          ),
        ),
      ),
    );
  }
}

class OrangeGradientButton extends StatelessWidget {
  final String text;
  final VoidCallback? onTap;

  const OrangeGradientButton({super.key, required this.text, this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          gradient: AppColors.orangeGradient,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [BoxShadow(color: AppColors.primaryContainer.withValues(alpha: 0.3), blurRadius: 12, offset: const Offset(0, 4))],
        ),
        alignment: Alignment.center,
        child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w700)),
      ),
    );
  }
}
