import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/url_strategy.dart';
import 'app.dart';

void main() {
  // Removes the '#' from the URL
  usePathUrlStrategy();
  runApp(const ChioiApp());
}
