import 'package:flutter/material.dart';
import 'theme/app_theme.dart';
import 'routes/app_router.dart';

class ChioiApp extends StatelessWidget {
  const ChioiApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Chị Ơi!',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      routerConfig: appRouter,
    );
  }
}
