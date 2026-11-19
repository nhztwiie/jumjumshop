// ==================== DỮ LIỆU GỐC JUMJUM ====================
const DEFAULT_SHOP_DATA = {
    info: {
        name: "JUMJUM",
        slogan: "Taste the Fresh, Feel the Joy",
        address: "Nguyễn Văn Cánh, Phường Phú Tân, Vĩnh Long",
        hotline: "0876.935.873",
        avatar: "images/jumjumshop.png",
        bgMusic: "audio/jumjum shop.mp3",
        musicTitle: "JUMJUM MUSIC",
        zaloUrl: "https://zalo.me/0398476794",
        facebookUrl: "https://www.facebook.com/nhzt.wiie",
        defaultNotifEmail: "lnh.quii@gmail.com"
    },
    admins: [
        { email: "jumjumshop@gmail.com", pwd: "jumjumshop@161126", name: "Quản Trị Viên Chính" }
    ],
    spaceImages: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600"
    ],
    foodTags: ["Trà Sữa", "Trà Trái Cây", "Ăn Vặt"],
    toppings: [
        { id: "t1", name: "Trân châu đường đen", price: 5000 },
        { id: "t2", name: "Kem phô mai Macchiato", price: 7000 },
        { id: "t3", name: "Thạch đào giòn", price: 5000 },
        { id: "t4", name: "Pudding trứng", price: 6000 },
        { id: "t5", name: "Hạt thủy tinh củ năng", price: 6000 }
    ],
    products: [
        { id: "p1", name: "Trà Sữa Trân Châu Đường Đen", category: "Trà Sữa", price: 25000, desc: "Sữa tươi thanh trùng kết hợp trân châu đường đen dẻo mềm nấu mới mỗi ngày.", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "p2", name: "Trà Đào Cam Sả", category: "Trà Trái Cây", price: 28000, desc: "Hương vị thanh mát từ trà đen ủ lạnh, đào miếng giòn ngọt và sả tươi.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "p3", name: "Trà Mãng Cầu Tươi", category: "Trà Trái Cây", price: 30000, desc: "Mãng cầu xiêm dầm tươi chua ngọt hài hòa, giải nhiệt tức thì.", image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "p4", name: "Mẹt Ăn Vặt Thập Cẩm", category: "Ăn Vặt", price: 45000, desc: "Đầy đủ cá viên, bò viên, xúc xích, phô mai que chiên giòn rụm kèm tương chấm đặc biệt.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600", hasTopping: false }
    ],
    vouchers: [
        { id: "V10", code: "JUMJUM10", discount: 10, label: "Giảm 10% cho mọi đơn hàng" },
        { id: "V20", code: "VINHLONG20", discount: 20, label: "Giảm 20% khách hàng khu vực Vĩnh Long" },
        { id: "V15", code: "FRESH15", discount: 15, label: "Giảm 15% đơn từ 2 ly bất kỳ" }
    ],
    initialReviews: [
        { id: 1, user: "Anh Ba Ngọc Sơn", rating: 5, comment: "Trà mãng cầu tươi ngon xuất sắc, không gian phục vụ tuyệt vời!", date: "17/11/2026", photo: "" },
        { id: 2, user: "Christina Nguyễn Phương Hằng", rating: 5, comment: "Đồ uống rất hợp khẩu vị, nhân viên nhanh nhẹn và lịch sự.", date: "16/11/2026", photo: "" },
        { id: 3, user: "Trường Giang", rating: 4.5, comment: "Quán có view đẹp, trà sữa trân châu đường đen béo ngậy vừa miệng.", date: "15/11/2026", photo: "" }
    ]
};

// ==================== NHẬN DIỆN THIẾT BỊ DI ĐỘNG ====================
const IS_MOBILE_DEVICE = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;

// ==================== LOCALSTORAGE AN TOÀN ====================
function safeGetStorage(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

function safeSetStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        showToast("Bộ nhớ trình duyệt đã đầy, vui lòng xóa bớt dữ liệu cũ!");
        return false;
    }
}

let products = safeGetStorage('jumjum_products', DEFAULT_SHOP_DATA.products);
let spaceImages = safeGetStorage('jumjum_space_images', DEFAULT_SHOP_DATA.spaceImages);
let foodTags = safeGetStorage('jumjum_food_tags', DEFAULT_SHOP_DATA.foodTags);
let adminAccounts = safeGetStorage('jumjum_admins', DEFAULT_SHOP_DATA.admins);
let emailJsSettings = safeGetStorage('jumjum_emailjs_settings', {
    publicKey: "", serviceId: "", templateId: "", receiverEmail: DEFAULT_SHOP_DATA.info.defaultNotifEmail
});

let cart = safeGetStorage('jumjum_cart', []);
let posCart = [];
let orders = safeGetStorage('jumjum_orders', []);
let tableCalls = safeGetStorage('jumjum_table_calls', []);
let reviews = safeGetStorage('jumjum_reviews', DEFAULT_SHOP_DATA.initialReviews);
let followers = safeGetStorage('jumjum_followers', []);
let currentUser = safeGetStorage('jumjum_user', null);
let broadcastMsg = localStorage.getItem('jumjum_broadcast') || "";

let selectedStar = 5;
let reviewPhotoBase64 = "";
let selectedCategory = 'Tất cả';
let appliedVoucher = null;
let isPlayingMusic = false;
let html5QrCode = null;
let pendingProductForTopping = null;
let newUploadedProductImgBase64 = "";
let lastSyncSnapshot = "";

// ==================== KHỞI TẠO HỆ THỐNG ====================
window.addEventListener('DOMContentLoaded', () => {
    initEmailJsSdk();
    initLiquidWaveCanvas();
    initRealtimeClock();
    initAutoThemeByTime();
    renderBroadcastBanner();
    renderSpaceGallery();
    renderCategories();
    renderProducts();
    renderVouchers();
    renderSavedUserVouchers();
    renderReviews();
    updateCartUI();
    generateWebQR();
    checkAuthState();
    initInteractiveEffects();

    window.addEventListener('storage', (e) => {
        if (['jumjum_orders', 'jumjum_table_calls', 'jumjum_reviews', 'jumjum_followers', 'jumjum_products', 'jumjum_broadcast'].includes(e.key)) {
            syncStateFromStorage(true);
        }
    });

    const syncIntervalMs = IS_MOBILE_DEVICE ? 6000 : 3500;
    setInterval(() => {
        if (!document.hidden) {
            syncStateFromStorage(false);
        }
    }, syncIntervalMs);
});

function syncStateFromStorage(playAlert = false) {
    const rawOrders = localStorage.getItem('jumjum_orders') || '[]';
    const rawCalls = localStorage.getItem('jumjum_table_calls') || '[]';
    const rawReviews = localStorage.getItem('jumjum_reviews') || '[]';
    const rawFollowers = localStorage.getItem('jumjum_followers') || '[]';
    const rawProducts = localStorage.getItem('jumjum_products') || '[]';
    const rawBroadcast = localStorage.getItem('jumjum_broadcast') || '';

    const currentSnapshot = `${rawOrders.length}_${rawCalls.length}_${rawReviews.length}_${rawFollowers.length}_${rawProducts.length}_${rawBroadcast}`;
    if (!playAlert && currentSnapshot === lastSyncSnapshot) return;
    lastSyncSnapshot = currentSnapshot;

    const latestOrders = safeGetStorage('jumjum_orders', orders);
    const latestCalls = safeGetStorage('jumjum_table_calls', tableCalls);
    const hasNewOrder = latestOrders.length > orders.length;
    const hasNewCall = latestCalls.length > tableCalls.length;

    products = safeGetStorage('jumjum_products', products);
    orders = latestOrders;
    tableCalls = latestCalls;
    reviews = safeGetStorage('jumjum_reviews', reviews);
    followers = safeGetStorage('jumjum_followers', followers);
    broadcastMsg = rawBroadcast;

    renderBroadcastBanner();
    updateFollowButtonUI();

    if (!document.getElementById('tab-service').classList.contains('hidden')) {
        renderUserActiveOrders();
    }

    if (currentUser && currentUser.role === 'shop') {
        if (playAlert && (hasNewOrder || hasNewCall)) {
            playAdminNotificationSound();
            showToast(hasNewOrder ? "🔔 Có đơn đặt món mới vừa gửi đến!" : "🔔 Có khách tại bàn vừa gọi phục vụ!");
        }
        renderAllAdminData();
    }
}

function toggleQuickRoleView() {
    if (currentUser && currentUser.role === 'shop') {
        currentUser = null;
        localStorage.removeItem('jumjum_user');
        checkAuthState();
        showToast("Đã chuyển sang giao diện Khách hàng!");
    } else {
        document.getElementById('shopEmailInput').value = "";
        document.getElementById('shopPassInput').value = "";
        openModal('authModal');
    }
}

// ==================== ÂM THANH PHẢN HỒI ====================
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
    }
    return audioCtx;
}

function playClickSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.065);
}

function playAdminNotificationSound() {
    const ctx = getAudioContext();
    if (!ctx) return;
    const notes = [659.25, 880, 1174.66];
    notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        const start = ctx.currentTime + idx * 0.1;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + 0.36);
    });
}

// ==================== THEO DÕI SHOP ====================
function toggleFollowShop() {
    if (!currentUser || currentUser.role === 'shop') {
        openModal('authModal');
        return showToast("Vui lòng đăng nhập tài khoản khách hàng để theo dõi JUMJUM!");
    }
    const idx = followers.findIndex(f => (f.email && f.email === currentUser.email) || f.name === currentUser.name);

    if (idx > -1) {
        followers.splice(idx, 1);
        showToast("Đã bỏ theo dõi JUMJUM.");
    } else {
        followers.push({
            name: currentUser.name,
            email: currentUser.email || "Khách thành viên",
            time: new Date().toLocaleString('vi-VN')
        });
        showToast("Cảm ơn bạn đã theo dõi JUMJUM!");
    }
    safeSetStorage('jumjum_followers', followers);
    updateFollowButtonUI();
}

function updateFollowButtonUI() {
    const btn = document.getElementById('followShopBtn');
    const icon = document.getElementById('followIcon');
    const text = document.getElementById('followText');
    const countEl = document.getElementById('statTotalFollowers');
    const followerDisplay = document.getElementById('followerCountDisplay');

    if (followerDisplay) followerDisplay.textContent = `${followers.length} người đang theo dõi`;
    if (countEl) countEl.textContent = followers.length;

    if (currentUser && currentUser.role !== 'shop') {
        const isFollowing = followers.some(f => (f.email && f.email === currentUser.email) || f.name === currentUser.name);
        if (isFollowing) {
            btn.className = "tactile-btn px-5 py-2.5 rounded-full bg-rose-500 text-white text-xs font-bold shadow-md flex items-center gap-2 whitespace-nowrap";
            icon.className = "fa-solid fa-heart text-sm";
            text.textContent = "Đang theo dõi JUMJUM";
        } else {
            btn.className = "tactile-btn px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold shadow-md flex items-center gap-2 whitespace-nowrap";
            icon.className = "fa-regular fa-heart text-sm";
            text.textContent = "Theo dõi JUMJUM";
        }
    }
}

// ==================== VOUCHER (HẠN NGẪU NHIÊN 24H - 72H) ====================
function renderVouchers() {
    document.getElementById('voucherList').innerHTML = DEFAULT_SHOP_DATA.vouchers.map(v => `
        <div class="tactile-card p-4 rounded-2xl bg-white/75 dark:bg-slate-800/80 border border-white dark:border-slate-700 shadow-sm flex items-center justify-between gap-3">
            <div class="min-w-0">
                <div class="flex items-center gap-2">
                    <span class="text-xs font-extrabold text-sky-700 dark:text-sky-400 whitespace-nowrap">${v.code}</span>
                    <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[9px] font-bold whitespace-nowrap">Hạn: 24h - 72h</span>
                </div>
                <div class="text-[11px] text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">${v.label}</div>
            </div>
            <button onclick="playClickSound(); saveVoucherToAccount('${v.code}')" class="tactile-btn px-3.5 py-2 rounded-xl bg-sky-600 text-white text-xs font-bold shadow-sm whitespace-nowrap shrink-0">Nhận voucher</button>
        </div>
    `).join('');
}

function saveVoucherToAccount(code) {
    if (!currentUser || currentUser.role === 'shop') {
        openModal('authModal');
        return showToast("Vui lòng đăng nhập tài khoản khách hàng để nhận voucher!");
    }
    if (!currentUser.savedVouchers) currentUser.savedVouchers = [];

    const nowMs = Date.now();
    currentUser.savedVouchers = currentUser.savedVouchers.filter(v => !v.expiresAtMs || v.expiresAtMs > nowMs);

    if (currentUser.savedVouchers.some(v => v.code === code)) {
        return showToast("Bạn đã lưu voucher này trong tài khoản rồi!");
    }

    const voucherInfo = DEFAULT_SHOP_DATA.vouchers.find(v => v.code === code);
    const randomHours = Math.floor(Math.random() * (72 - 24 + 1)) + 24;
    const expireDateObj = new Date(nowMs + randomHours * 3600 * 1000);
    const expireFormatted = expireDateObj.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' ' + expireDateObj.toLocaleDateString('vi-VN');

    currentUser.savedVouchers.push({
        code: voucherInfo.code,
        discount: voucherInfo.discount,
        label: voucherInfo.label,
        validHours: randomHours,
        expiresAtMs: expireDateObj.getTime(),
        expireDate: expireFormatted
    });

    safeSetStorage('jumjum_user', currentUser);
    renderSavedUserVouchers();
    showToast(`Đã lưu voucher ${code}! (Hạn sử dụng ngẫu nhiên: ${randomHours}h)`);
}

function renderSavedUserVouchers() {
    const container = document.getElementById('userSavedVouchersList');
    const selectEl = document.getElementById('voucherSelect');

    if (currentUser && currentUser.savedVouchers) {
        const nowMs = Date.now();
        currentUser.savedVouchers = currentUser.savedVouchers.filter(v => !v.expiresAtMs || v.expiresAtMs > nowMs);
    }

    if (!currentUser || currentUser.role === 'shop' || !currentUser.savedVouchers || currentUser.savedVouchers.length === 0) {
        if (container) container.innerHTML = `<div class="text-xs text-slate-400 italic">Bạn chưa lưu voucher nào vào tài khoản.</div>`;
        if (selectEl) selectEl.innerHTML = `<option value="">-- Chọn mã Voucher đã lưu trong tài khoản --</option>`;
        return;
    }

    if (container) {
        container.innerHTML = currentUser.savedVouchers.map(v => `
            <div class="flex items-center justify-between gap-2 p-3 rounded-xl bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                <div>
                    <span class="font-bold text-sky-700 dark:text-sky-300">${v.code}</span> (${v.label})
                    <div class="text-[10px] text-rose-500 font-semibold mt-0.5">Hiệu lực ${v.validHours}h • Hết hạn lúc: ${v.expireDate}</div>
                </div>
                <button onclick="playClickSound(); selectSavedVoucher('${v.code}')" class="tactile-btn px-3 py-1 rounded-lg bg-sky-600 text-white font-bold whitespace-nowrap">Áp dụng</button>
            </div>
        `).join('');
    }

    if (selectEl) {
        selectEl.innerHTML = `<option value="">-- Chọn mã Voucher đã lưu trong tài khoản --</option>` + currentUser.savedVouchers.map(v => `
            <option value="${v.code}">${v.label} (${v.code} - Hạn: ${v.expireDate})</option>
        `).join('');
    }
}

function selectSavedVoucher(code) {
    document.getElementById('voucherSelect').value = code;
    applyVoucher();
    openCartModal();
}

function applyVoucher() {
    const code = document.getElementById('voucherSelect').value;
    if (!currentUser || !currentUser.savedVouchers) return;
    appliedVoucher = currentUser.savedVouchers.find(v => v.code === code) || null;
    updateCartUI();
    if (appliedVoucher) showToast(`Đã áp dụng mã ưu đãi ${appliedVoucher.code}`);
}

// ==================== EMAILJS CONFIG ====================
function initEmailJsSdk() {
    if (window.emailjs && emailJsSettings.publicKey) {
        emailjs.init(emailJsSettings.publicKey);
    }
    const badge = document.getElementById('emailJsStatusBadge');
    if (badge) {
        if (emailJsSettings.publicKey && emailJsSettings.serviceId && emailJsSettings.templateId) {
            badge.textContent = "Đã kết nối EmailJS sẵn sàng";
            badge.className = "px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold whitespace-nowrap";
        } else {
            badge.textContent = "Chưa nhập đủ mã EmailJS";
            badge.className = "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold whitespace-nowrap";
        }
    }
}

function loadEmailJsFieldsToAdmin() {
    document.getElementById('ejsPublicKeyInput').value = emailJsSettings.publicKey || "";
    document.getElementById('ejsServiceIdInput').value = emailJsSettings.serviceId || "";
    document.getElementById('ejsTemplateIdInput').value = emailJsSettings.templateId || "";
    document.getElementById('ejsReceiverEmailInput').value = emailJsSettings.receiverEmail || DEFAULT_SHOP_DATA.info.defaultNotifEmail;
}

function saveEmailJsSettings() {
    emailJsSettings = {
        publicKey: document.getElementById('ejsPublicKeyInput').value.trim(),
        serviceId: document.getElementById('ejsServiceIdInput').value.trim(),
        templateId: document.getElementById('ejsTemplateIdInput').value.trim(),
        receiverEmail: document.getElementById('ejsReceiverEmailInput').value.trim() || DEFAULT_SHOP_DATA.info.defaultNotifEmail
    };
    safeSetStorage('jumjum_emailjs_settings', emailJsSettings);
    initEmailJsSdk();
    showToast("Đã lưu cấu hình EmailJS thành công!");
}

function sendOrderEmailViaEmailJS(order) {
    if (!window.emailjs || !emailJsSettings.publicKey || !emailJsSettings.serviceId || !emailJsSettings.templateId) return;
    const templateParams = {
        to_email: emailJsSettings.receiverEmail || DEFAULT_SHOP_DATA.info.defaultNotifEmail,
        order_id: order.id,
        order_time: order.time,
        customer_name: order.customer,
        customer_phone: order.phone,
        customer_email: order.email,
        delivery_address: order.address,
        customer_note: order.note,
        voucher_code: order.voucher,
        payment_method: order.payMethod,
        toppings: order.toppingsText,
        order_items: order.itemsText,
        total_amount: order.total.toLocaleString('vi-VN') + ' VND'
    };
    emailjs.send(emailJsSettings.serviceId, emailJsSettings.templateId, templateParams).catch(err => console.warn("EmailJS:", err));
}

// ==================== HIỆU ỨNG SÓNG NƯỚC (TỐI ƯU MOBILE FPS) ====================
function initLiquidWaveCanvas() {
    const canvas = document.getElementById('liquidCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let phase = 0;
    let lastFrameTime = 0;

    const frameInterval = IS_MOBILE_DEVICE ? 33 : 16;
    const stepX = IS_MOBILE_DEVICE ? 48 : 24;

    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }, 150);
    }, { passive: true });

    function drawWaves(timestamp) {
        requestAnimationFrame(drawWaves);
        if (document.hidden) return;
        if (timestamp - lastFrameTime < frameInterval) return;
        lastFrameTime = timestamp;

        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.classList.contains('dark');
        const waveColors = isDark
            ? ['rgba(14, 165, 233, 0.08)', 'rgba(56, 189, 248, 0.06)']
            : ['rgba(14, 165, 233, 0.11)', 'rgba(255, 255, 255, 0.35)'];

        waveColors.forEach((color, idx) => {
            ctx.beginPath();
            ctx.moveTo(0, height);
            for (let x = 0; x <= width + stepX; x += stepX) {
                const y = height * 0.72 + Math.sin(x * 0.004 + phase + idx * 1.5) * 24 + Math.cos(x * 0.002 - phase) * 14;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        });

        phase += IS_MOBILE_DEVICE ? 0.02 : 0.015;
    }
    requestAnimationFrame(drawWaves);
}

function initRealtimeClock() {
    const clockEl = document.getElementById('realtimeClock');
    if (!clockEl) return;
    const update = () => {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString('vi-VN') + ' • ' + now.toLocaleDateString('vi-VN');
    };
    update();
    setInterval(update, 1000);
}

function initAutoThemeByTime() {
    const hour = new Date().getHours();
    const isDarkTime = hour < 6 || hour >= 18;
    document.documentElement.classList.toggle('dark', isDarkTime);
    document.getElementById('themeIcon').className = isDarkTime ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function toggleThemeManual() {
    const isDark = document.documentElement.classList.toggle('dark');
    document.getElementById('themeIcon').className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function initInteractiveEffects() {
    if (!IS_MOBILE_DEVICE) {
        let rafPending = false;
        document.addEventListener('mousemove', (e) => {
            if (rafPending) return;
            rafPending = true;
            requestAnimationFrame(() => {
                document.querySelectorAll('.spotlight-card').forEach(card => {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });
                rafPending = false;
            });
        }, { passive: true });
    }

    let activeRipples = 0;
    const maxRipples = IS_MOBILE_DEVICE ? 2 : 5;

    document.addEventListener('pointerdown', (e) => {
        if (activeRipples >= maxRipples) return;
        activeRipples++;
        const ripple = document.createElement('div');
        ripple.className = 'ripple-ring';
        ripple.style.width = '34px';
        ripple.style.height = '34px';
        ripple.style.left = `${e.clientX - 17}px`;
        ripple.style.top = `${e.clientY - 17}px`;
        document.body.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
            activeRipples = Math.max(0, activeRipples - 1);
        }, 650);
    }, { passive: true });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    document.querySelectorAll('.dock-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    if (tabName === 'service') renderUserActiveOrders();
    if (tabName === 'voucher') {
        renderVouchers();
        renderSavedUserVouchers();
    }
}

function renderSpaceGallery() {
    document.getElementById('spaceGallery').innerHTML = spaceImages.map(img => `
        <div class="tactile-card rounded-2xl overflow-hidden h-24 sm:h-28 border border-white/85 dark:border-slate-700 shadow-sm group">
            <img src="${img}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600'" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        </div>
    `).join('');
}

function renderBroadcastBanner() {
    const banner = document.getElementById('customerBroadcastBanner');
    if (broadcastMsg) {
        banner.classList.remove('hidden');
        document.getElementById('broadcastText').textContent = broadcastMsg;
    } else {
        banner.classList.add('hidden');
    }
}

function renderCategories() {
    const cats = ['Tất cả', ...new Set([...foodTags, ...products.map(p => p.category)])];
    document.getElementById('categoryFilter').innerHTML = cats.map(c => `
        <button onclick="playClickSound(); filterCategory('${c}')" class="tactile-btn px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-sm ${selectedCategory === c ? 'bg-sky-600 text-white' : 'bg-white/75 dark:bg-slate-800 dark:text-slate-200 text-slate-700'}">
            ${c}
        </button>
    `).join('');
}

function filterCategory(cat) {
    selectedCategory = cat;
    renderCategories();
    renderProducts();
}

function renderProducts() {
    const searchKeyword = (document.getElementById('productSearchInput')?.value || '').trim().toLowerCase();
    const filtered = products.filter(p => {
        const matchCat = selectedCategory === 'Tất cả' || p.category === selectedCategory;
        const matchSearch = !searchKeyword || p.name.toLowerCase().includes(searchKeyword) || p.desc.toLowerCase().includes(searchKeyword);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        document.getElementById('productGrid').innerHTML = `<div class="col-span-full text-center py-10 text-slate-500 dark:text-slate-400 text-sm">Không tìm thấy món ăn phù hợp với từ khóa của bạn.</div>`;
        return;
    }

    document.getElementById('productGrid').innerHTML = filtered.map(p => `
        <div class="liquid-glass tactile-card spotlight-card p-4 flex flex-col justify-between group">
            <div class="relative z-10">
                <div class="relative h-40 rounded-2xl overflow-hidden mb-3 shadow-sm bg-slate-100 dark:bg-slate-800">
                    <img src="${p.image}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541658016010-618bd0c4cfd2?auto=format&fit=crop&q=80&w=400'" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span class="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-white/85 dark:bg-slate-900/85 text-[10px] font-extrabold text-sky-800 dark:text-sky-300 shadow-sm whitespace-nowrap">
                        ${p.category}
                    </span>
                </div>
                <h3 class="font-bold text-slate-800 dark:text-white text-base whitespace-nowrap truncate">${p.name}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">${p.desc}</p>
            </div>

            <div class="relative z-10 mt-4 pt-3 border-t border-white/70 dark:border-slate-700 flex items-center justify-between gap-2">
                <span class="font-extrabold text-sky-700 dark:text-sky-400 text-sm whitespace-nowrap">${p.price.toLocaleString('vi-VN')} VND</span>
                <div class="flex items-center gap-1.5 shrink-0">
                    <button onclick="playClickSound(); initiateAddToCart('${p.id}', false)" class="tactile-btn w-9 h-9 rounded-full bg-white/90 dark:bg-slate-800 border border-sky-300 dark:border-slate-700 text-sky-600 dark:text-sky-300 flex items-center justify-center shadow-sm" title="Thêm giỏ hàng">
                        <i class="fa-solid fa-cart-plus text-xs"></i>
                    </button>
                    <button onclick="playClickSound(); initiateAddToCart('${p.id}', true)" class="tactile-btn px-3.5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold flex items-center gap-1 shadow whitespace-nowrap">
                        Đặt mua ngay
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

let isDirectOrderAfterTopping = false;

function initiateAddToCart(productId, openCartImmediately = false) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.hasTopping) {
        pendingProductForTopping = product;
        isDirectOrderAfterTopping = openCartImmediately;
        document.getElementById('toppingModalTitle').textContent = `Topping cho: ${product.name}`;
        document.getElementById('toppingOptionsList').innerHTML = DEFAULT_SHOP_DATA.toppings.map(t => `
            <label class="tactile-btn flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
                <span class="flex items-center gap-2 font-semibold dark:text-white whitespace-nowrap">
                    <input type="checkbox" class="topping-checkbox" data-name="${t.name}" data-price="${t.price}" onchange="playClickSound(); updateToppingPricePreview()">
                    ${t.name}
                </span>
                <span class="font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap">+${t.price.toLocaleString('vi-VN')} VND</span>
            </label>
        `).join('');
        updateToppingPricePreview();
        openModal('toppingModal');
    } else {
        addItemToCart(product, [], product.price);
        if (openCartImmediately) openCartModal();
    }
}

function updateToppingPricePreview() {
    if (!pendingProductForTopping) return;
    let total = pendingProductForTopping.price;
    document.querySelectorAll('.topping-checkbox:checked').forEach(cb => {
        total += parseInt(cb.dataset.price);
    });
    document.getElementById('toppingCalculatedPrice').textContent = total.toLocaleString('vi-VN') + ' VND';
}

function confirmAddProductWithToppings(openCartImmediately = isDirectOrderAfterTopping) {
    if (!pendingProductForTopping) return;
    const selectedToppings = [];
    let unitPrice = pendingProductForTopping.price;
    document.querySelectorAll('.topping-checkbox:checked').forEach(cb => {
        selectedToppings.push(cb.dataset.name);
        unitPrice += parseInt(cb.dataset.price);
    });
    addItemToCart(pendingProductForTopping, selectedToppings, unitPrice);
    closeModal('toppingModal');
    if (openCartImmediately) openCartModal();
}

function addItemToCart(product, toppings, unitPrice) {
    const toppingKey = toppings.sort().join(', ');
    const cartItemId = product.id + '_' + toppingKey;
    const existing = cart.find(i => i.cartItemId === cartItemId);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            name: product.name,
            image: product.image,
            toppings: toppingKey,
            price: unitPrice,
            qty: 1
        });
    }
    safeSetStorage('jumjum_cart', cart);
    updateCartUI();
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

function updateCartItemQty(cartItemId, delta) {
    const idx = cart.findIndex(i => i.cartItemId === cartItemId);
    if (idx > -1) {
        cart[idx].qty += delta;
        if (cart[idx].qty <= 0) cart.splice(idx, 1);
    }
    safeSetStorage('jumjum_cart', cart);
    updateCartUI();
}

function removeCartItem(cartItemId) {
    cart = cart.filter(i => i.cartItemId !== cartItemId);
    safeSetStorage('jumjum_cart', cart);
    updateCartUI();
    showToast("Đã xóa món khỏi giỏ hàng!");
}

function clearCustomerCart() {
    if (cart.length === 0) return;
    cart = [];
    safeSetStorage('jumjum_cart', cart);
    updateCartUI();
    showToast("Đã làm trống giỏ hàng!");
}

function updateCartUI() {
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    let subTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    let discountAmount = appliedVoucher ? (subTotal * appliedVoucher.discount) / 100 : 0;
    const finalTotal = Math.max(0, subTotal - discountAmount);

    document.getElementById('cartBadge').textContent = totalQty;
    const modalCountEl = document.getElementById('cartModalCount');
    if (modalCountEl) modalCountEl.textContent = totalQty;
    document.getElementById('cartTotalPrice').textContent = `${finalTotal.toLocaleString('vi-VN')} VND`;

    const container = document.getElementById('cartItemsContainer');
    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-8 text-slate-400 text-sm"><i class="fa-solid fa-mug-hot text-3xl mb-2 block text-sky-300"></i>Giỏ hàng của bạn đang trống.<br><span class="text-xs">Hãy chọn thêm thức uống yêu thích nhé!</span></div>`;
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="flex items-center justify-between gap-3 bg-white/90 dark:bg-slate-800/90 p-3 rounded-2xl border border-sky-100 dark:border-slate-700 shadow-sm">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
                <span class="w-5 h-5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 text-[10px] font-extrabold flex items-center justify-center shrink-0">${index + 1}</span>
                <img src="${item.image}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541658016010-618bd0c4cfd2?auto=format&fit=crop&q=80&w=200'" class="w-11 h-11 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700">
                <div class="min-w-0 flex-1">
                    <div class="text-xs font-bold text-slate-800 dark:text-white truncate">${item.name}</div>
                    ${item.toppings ? `<div class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold truncate">+ ${item.toppings}</div>` : '<div class="text-[10px] text-slate-400">Tiêu chuẩn</div>'}
                    <div class="text-[11px] text-sky-600 dark:text-sky-400 font-extrabold mt-0.5">${item.price.toLocaleString('vi-VN')} đ × ${item.qty} = ${(item.price * item.qty).toLocaleString('vi-VN')} đ</div>
                </div>
            </div>
            <div class="flex flex-col items-end gap-1.5 shrink-0">
                <div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
                    <button onclick="playClickSound(); updateCartItemQty('${item.cartItemId}', -1)" class="tactile-btn w-5 h-5 rounded-full bg-white dark:bg-slate-800 text-[10px] flex items-center justify-center shadow-sm"><i class="fa-solid fa-minus"></i></button>
                    <span class="text-xs font-extrabold w-4 text-center dark:text-white">${item.qty}</span>
                    <button onclick="playClickSound(); updateCartItemQty('${item.cartItemId}', 1)" class="tactile-btn w-5 h-5 rounded-full bg-sky-600 text-white text-[10px] flex items-center justify-center shadow-sm"><i class="fa-solid fa-plus"></i></button>
                </div>
                <button onclick="playClickSound(); removeCartItem('${item.cartItemId}')" class="text-[10px] text-rose-500 hover:underline font-semibold">Xóa món</button>
            </div>
        </div>
    `).join('');
}

function openCartModal() {
    renderSavedUserVouchers();
    updateCartUI();
    if (currentUser) {
        if (currentUser.name) document.getElementById('orderCustomerName').value = currentUser.name;
        if (currentUser.phone) document.getElementById('orderPhone').value = currentUser.phone;
        if (currentUser.email) document.getElementById('orderEmail').value = currentUser.email;
        if (currentUser.address) document.getElementById('orderAddress').value = currentUser.address;
    }
    openModal('cartModal');
}

function toggleAppSelector() {
    const method = document.querySelector('input[name="payMethod"]:checked').value;
    document.getElementById('bankAppSelectBox').classList.toggle('hidden', method !== 'Chuyển khoản ngân hàng');
    document.getElementById('ewalletAppSelectBox').classList.toggle('hidden', method !== 'Ví điện tử');
}

function launchPaymentApp(method
