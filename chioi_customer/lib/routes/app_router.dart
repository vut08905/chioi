import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../widgets/bottom_nav_shell.dart';
import '../screens/trang_chu/trang_chu_screen.dart';
import '../screens/dang_nhap/dang_nhap_screen.dart';
import '../screens/quen_mat_khau/quen_mat_khau_screen.dart';
import '../screens/dat_dich_vu/don_nha_screen.dart';
import '../screens/dat_dich_vu/trong_tre_screen.dart';
import '../screens/dat_dich_vu/mua_ho_screen.dart';
import '../screens/goi_gia_dinh/goi_gia_dinh_screen.dart';
import '../screens/theo_doi_don/theo_doi_don_screen.dart';
import '../screens/lich_su/hoat_dong_screen.dart';
import '../screens/lich_su/vi_screen.dart';
import '../screens/chat/chat_screen.dart';
import '../screens/danh_gia/danh_gia_screen.dart';
import '../screens/thong_bao/thong_bao_screen.dart';
import '../screens/tai_khoan/tai_khoan_screen.dart';
import '../screens/nap_tien/nap_tien_screen.dart';
import '../screens/tai_khoan/chinh_sua_ho_so_screen.dart';
import '../screens/tai_khoan/lien_he_cskh_screen.dart';
import '../screens/tai_khoan/cai_dat_screen.dart';
import '../screens/tai_khoan/bao_mat_screen.dart';
import '../screens/tai_khoan/doi_mat_khau_screen.dart';
import '../screens/tai_khoan/thiet_lap_pin_screen.dart';
import '../screens/tai_khoan/chinh_sach_bao_mat_screen.dart';
import '../screens/tai_khoan/dieu_khoan_screen.dart';

final _rootNavigatorKey = GlobalKey<NavigatorState>();

final GoRouter appRouter = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: '/login',
  routes: [
    GoRoute(path: '/login', builder: (context, state) => const DangNhapScreen()),
    GoRoute(path: '/forgot-password', builder: (context, state) => const QuenMatKhauScreen()),
    StatefulShellRoute.indexedStack(
      builder: (context, state, navigationShell) => BottomNavShell(navigationShell: navigationShell),
      branches: [
        StatefulShellBranch(routes: [
          GoRoute(path: '/', builder: (context, state) => const TrangChuScreen()),
        ]),
        StatefulShellBranch(routes: [
          GoRoute(path: '/history', builder: (context, state) => const HoatDongScreen()),
        ]),
        StatefulShellBranch(routes: [
          GoRoute(path: '/notifications', builder: (context, state) => const ThongBaoScreen()),
        ]),
        StatefulShellBranch(routes: [
          GoRoute(path: '/account', builder: (context, state) => const TaiKhoanScreen()),
        ]),
      ],
    ),
    GoRoute(path: '/services/don-nha', builder: (context, state) => const DonNhaScreen()),
    GoRoute(path: '/services/trong-tre', builder: (context, state) => const TrongTreScreen()),
    GoRoute(path: '/services/mua-ho', builder: (context, state) => const MuaHoScreen()),
    GoRoute(path: '/packages/gia-dinh', builder: (context, state) => const GoiGiaDinhScreen()),
    GoRoute(path: '/orders/tracking', builder: (context, state) => const TheoDoidonScreen()),
    GoRoute(path: '/wallet', builder: (context, state) => const ViScreen()),
    GoRoute(path: '/chat', builder: (context, state) => const ChatScreen()),
    GoRoute(path: '/review', builder: (context, state) => const DanhGiaScreen()),
    GoRoute(path: '/topup', builder: (context, state) => const NapTienScreen()),
    GoRoute(path: '/account/edit', builder: (context, state) => const ChinhSuaHoSoScreen()),
    GoRoute(path: '/account/contact', builder: (context, state) => const LienHeCskhScreen()),
    GoRoute(path: '/account/settings', builder: (context, state) => const CaiDatScreen()),
    GoRoute(path: '/account/security', builder: (context, state) => const BaoMatScreen()),
    GoRoute(path: '/account/change-password', builder: (context, state) => const DoiMatKhauScreen()),
    GoRoute(path: '/account/setup-pin', builder: (context, state) => const ThietLapPinScreen()),
    GoRoute(path: '/account/privacy-policy', builder: (context, state) => const ChinhSachBaoMatScreen()),
    GoRoute(path: '/account/terms', builder: (context, state) => const DieuKhoanScreen()),
  ],
);
