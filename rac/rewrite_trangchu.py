import os

filepath = r"d:\chioi\Giupviec\trangchutasker.html"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# We will completely restructure trangchutasker.html 
# to fix the background, the map, and the idle UI.

new_html = """<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Trang chủ Tasker</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <style>
        body { font-family: 'Be Vietnam Pro', sans-serif; background-color: #f8f9fa; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .blur-bg { backdrop-filter: blur(8px); background-color: rgba(255, 255, 255, 0.4); }
        .gradient-primary { background: linear-gradient(135deg, #ff7e36 0%, #a04100 100%); }
    </style>
</head>
<body class="text-on-surface min-h-screen">

<!-- Fullscreen Map Background -->
<div class="fixed inset-0 z-0">
    <img alt="Map view" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK-8vGHUSnwheRf36bf1I31_oFpLczOP50uTG6kHxuaTDdjyKp_-6YSD5XycdX2FwdHD7LkeD4b9uG7JnCRYW7N7jWlcBpAszoFxeL5DjDupTr47P3Z_5vyrLEkyrq3_XSMERIdYiVYX4edLOntEFPQYBC9ScEHTNSV-bCth77QIy8IRWYn8kAbURvTKuFighj8yNK4KO9Bvn3htY33RcSq9a4TSONhZkI600o8MHBSwmFy1KmBwsalyUQo0dd-RjtJdM-G9N0CE8"/>
    <!-- Blur overlay initially visible -->
    <div id="map-blur" class="absolute inset-0 blur-bg transition-all duration-500"></div>
</div>

<!-- Top Gradient Overlay (Over the map, behind header text) -->
<div class="fixed top-0 left-0 w-full h-[250px] z-10 pointer-events-none" style="background: linear-gradient(180deg, rgba(255,126,54,0.95) 0%, rgba(255,126,54,0) 100%);"></div>

<!-- Header -->
<header class="fixed top-0 w-full z-40 px-4 h-20 flex justify-between items-center bg-transparent">
    <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-full border-2 border-white/50 overflow-hidden shadow-sm">
            <img alt="Lan Nguyễn" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdx_l7OLqkJhx3t8XNX3oPsNEZ_ogskiGRnrfncigojiUmOhgUgCBnzOtjAoqTw0VT8UhEJeg1dX9XGQ4Bv8H31CgwgWYchWXUkhmmRML2MH3UPlx8xcg7dwkz6qPuZ01IJyV4QcESVQIkgQGRLOgvy5_M9Iog2G7TdbmVv4W8YhbHeWC-14TUAIAeQf2cR_E1-AFVlyhYV578lUAfzmC9A7difRggk60mNGZ5r1AuzpEC7WSjzVzYTLk_lUCDfPp6S7TStIoHLIs"/>
        </div>
        <div>
            <span class="text-white/90 text-xs font-medium block leading-tight">Chào buổi sáng,</span>
            <h1 class="text-white font-bold text-lg tracking-tight leading-tight">Lan Nguyễn 👋</h1>
        </div>
    </div>
    <div class="flex items-center gap-4">
        <!-- Online/Offline Toggle -->
        <label class="relative inline-flex items-center cursor-pointer shadow-sm rounded-full">
            <input type="checkbox" class="sr-only peer" checked>
            <div class="w-12 h-6 bg-white/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00b1da]"></div>
        </label>
        <!-- Chat -->
        <a href="chatvoikhachhang.html" class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md active:scale-95 transition-all">
            <span class="material-symbols-outlined text-[22px]">chat_bubble</span>
        </a>
    </div>
</header>

<!-- Main Content Area -->
<main class="relative z-20 flex flex-col justify-center items-center h-screen pt-20 pb-24 px-4 pointer-events-none">
    
    <!-- ACTIVE ORDER MODAL -->
    <div id="modal-don-moi" class="w-full max-w-sm pointer-events-auto transition-all duration-300">
        <div class="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <!-- Header -->
            <div class="bg-[#a04100] px-4 py-3 flex justify-center items-center gap-2 relative">
                <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 10px 10px;"></div>
                <span class="material-symbols-outlined text-white text-xl animate-pulse">notifications_active</span>
                <h2 class="text-white font-bold tracking-wide relative z-10">ĐƠN DỌN NHÀ MỚI</h2>
            </div>
            <!-- Body -->
            <div class="p-5 flex flex-col gap-4">
                <div class="flex gap-3">
                    <span class="material-symbols-outlined text-[#ff7e36] text-[20px] mt-0.5" style="font-variation-settings: 'FILL' 1;">location_on</span>
                    <div>
                        <p class="font-bold text-gray-800">Vinhomes Central Park</p>
                        <p class="text-sm text-gray-500">Cách bạn 1.2km</p>
                    </div>
                </div>
                <div class="flex gap-3">
                    <span class="material-symbols-outlined text-[#ff7e36] text-[20px] mt-0.5" style="font-variation-settings: 'FILL' 1;">schedule</span>
                    <div>
                        <p class="font-bold text-gray-800">Hôm nay, 14:00 (3 giờ)</p>
                    </div>
                </div>
                <!-- Price -->
                <div class="mt-2 flex items-center justify-between border-t border-b border-gray-100 py-3">
                    <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Thu nhập</span>
                    <span class="text-3xl font-bold text-[#a04100]">150.000 đ</span>
                </div>
                <!-- Timer -->
                <div class="flex flex-col gap-2 mt-1">
                    <p class="text-red-600 font-semibold text-sm flex items-center justify-center gap-1">
                        <span class="material-symbols-outlined text-[16px]">timer</span>
                        Tự động bỏ qua sau: <span id="countdown">00:58</span>
                    </p>
                    <div class="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div class="bg-red-500 h-full w-[80%] rounded-full animate-pulse"></div>
                    </div>
                </div>
                <!-- Actions -->
                <div class="flex gap-3 pt-2">
                    <button onclick="boQuaDon()" class="flex-1 py-3 px-4 rounded-full border border-gray-300 text-gray-600 font-bold hover:bg-gray-50 transition-all active:scale-95">
                        BỎ QUA
                    </button>
                    <button onclick="nhanDon()" class="flex-1 py-3 px-4 rounded-full gradient-primary text-white font-bold shadow-lg hover:brightness-110 transition-all active:scale-95">
                        NHẬN ĐƠN
                    </button>
                </div>
                <p class="text-center text-[11px] text-gray-400 italic">
                    * Bỏ qua >30% sẽ giảm đơn.
                </p>
            </div>
        </div>
    </div>

    <!-- IDLE STATE (Hidden initially) -->
    <div id="idle-state" class="absolute bottom-28 w-full max-w-sm px-4 hidden pointer-events-auto transition-all duration-500 translate-y-10 opacity-0">
        <div class="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white flex items-center justify-between">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-[#e6f7fc] flex items-center justify-center">
                    <span class="material-symbols-outlined text-[#00b1da] animate-spin-slow">radar</span>
                </div>
                <div>
                    <p class="font-bold text-gray-800">Đang tìm đơn hàng...</p>
                    <p class="text-xs text-gray-500">Bạn đang ở chế độ trực tuyến</p>
                </div>
            </div>
        </div>
    </div>

</main>

<!-- Bottom Navigation Bar -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 flex justify-around items-center px-2 py-3 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
    <a class="flex flex-col items-center justify-center text-[#ff7e36] active:scale-95 transition-transform w-1/4" href="trangchutasker.html">
        <span class="material-symbols-outlined text-[26px]" style="font-variation-settings: 'FILL' 1;">home</span>
        <span class="text-[10px] font-bold mt-1">Trang chủ</span>
    </a>
    <a class="flex flex-col items-center justify-center text-gray-400 hover:text-[#ff7e36] active:scale-95 transition-colors w-1/4" href="lichsudonhang.html">
        <span class="material-symbols-outlined text-[26px]">history</span>
        <span class="text-[10px] font-medium mt-1">Lịch sử</span>
    </a>
    <a class="flex flex-col items-center justify-center text-gray-400 hover:text-[#ff7e36] active:scale-95 transition-colors w-1/4" href="thunhapvathongke.html">
        <span class="material-symbols-outlined text-[26px]">monitoring</span>
        <span class="text-[10px] font-medium mt-1">Thống kê</span>
    </a>
    <a class="flex flex-col items-center justify-center text-gray-400 hover:text-[#ff7e36] active:scale-95 transition-colors w-1/4" href="hosocanhan.html">
        <span class="material-symbols-outlined text-[26px]">person</span>
        <span class="text-[10px] font-medium mt-1">Cá nhân</span>
    </a>
</nav>

<!-- Toast Notification -->
<div id="toast-notify" class="hidden fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-gray-800 text-white px-6 py-3 rounded-full shadow-2xl text-sm flex items-center gap-2 transition-all">
    <span class="material-symbols-outlined text-green-400" style="font-variation-settings: 'FILL' 1;">check_circle</span>
    <span id="toast-msg">Thành công</span>
</div>

<script>
function boQuaDon() {
    hideModal();
    showToast("Đã bỏ qua đơn hàng. Chú ý tỷ lệ nhận đơn!");
    showIdleState();
}

function nhanDon() {
    hideModal();
    showToast("Đã nhận đơn! Bắt đầu di chuyển tới điểm dọn dẹp.");
    showIdleState(); // For demo purposes, we show idle. Real app would show active order.
}

function hideModal() {
    const modal = document.getElementById("modal-don-moi");
    modal.style.opacity = "0";
    modal.style.transform = "scale(0.95)";
    setTimeout(() => { modal.style.display = "none"; }, 300);
}

function showIdleState() {
    // Remove blur from map to reveal the clear map
    document.getElementById("map-blur").style.opacity = "0";
    
    // Show idle panel
    const idle = document.getElementById("idle-state");
    idle.classList.remove("hidden");
    setTimeout(() => {
        idle.classList.remove("translate-y-10", "opacity-0");
    }, 50);
}

function showToast(msg) {
    var toast = document.getElementById("toast-notify");
    document.getElementById("toast-msg").innerText = msg;
    toast.classList.remove("hidden");
    setTimeout(function() { toast.classList.add("hidden"); }, 4000);
}
</script>
<style>
    .animate-spin-slow {
        animation: spin 3s linear infinite;
    }
</style>
</body>
</html>"""

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Rewrote trangchutasker.html completely")
