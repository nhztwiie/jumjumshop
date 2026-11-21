// ==================== DỮ LIỆU GỐC & ĐỒNG BỘ ĐA THIẾT BỊ JUMJUM ====================
const DEFAULT_SHOP_DATA = {
    info: {
        name: "JUMJUM",
        slogan: "Taste the Fresh, Feel the Joy",
        address: "Nguyễn Văn Cánh, Phường Phú Tân, Vĩnh Long",
        hotline: "0876.935.873",
        avatar: "images/jumjumshop.png",
        bgMusic: "audio/jumjum music.mp3",
        musicTitle: "JUMJUM MUSIC",
        zaloUrl: "https://zalo.me/0398476794",
        facebookUrl: "https://www.facebook.com/nhzt.wiie",
        defaultNotifEmail: "lnh.quii@gmail.com"
    },
    admins: [
        { email: "jumjumshop@gmail.com", pwd: "jumjumshop@161126", name: "Quản Trị Viên Chính" }
    ],
    spaceImages: [
        {
            url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=900",
            tag: "☀️ Góc Đón Nắng",
            caption: "Ánh sáng tự nhiên cực chill"
        },
        {
            url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
            tag: "✨ Hội Bạn Gen Z",
            caption: "Tụ tập tám chuyện hết nấc"
        },
        {
            url: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=800",
            tag: "🎧 Vibe Cực Cuốn",
            caption: "Góc check-in & học bài"
        },
        {
            url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
            tag: "🌿 Không Gian Xanh",
            caption: "Thoáng mát, gần gũi"
        },
        {
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
            tag: "📸 Tọa Độ Sống Ảo",
            caption: "Lên hình nào cũng xinh"
        }
    ],
    foodTags: ["Sữa Chua & Granola", "Bánh Ngọt", "Matcha", "Trà & Nước Trái Cây", "Sinh Tố", "Trà Sữa", "Ăn Vặt"],
    toppings: [
        { id: "t1", name: "Trân châu đường đen", price: 5000 },
        { id: "t2", name: "Kem phô mai Macchiato", price: 7000 },
        { id: "t3", name: "Thạch đào giòn", price: 5000 },
        { id: "t4", name: "Pudding trứng", price: 6000 },
        { id: "t5", name: "Hạt thủy tinh củ năng", price: 6000 }
    ],
    products: [
        { id: "m1", name: "Sữa Chua Trái Cây & Granola", category: "Sữa Chua & Granola", price: 45000, desc: "Sự kết hợp thanh mát giữa sữa chua sánh mịn, ngũ cốc granola giòn rụm cùng dâu tây, xoài chín và việt quất tươi mọng, giàu dinh dưỡng.", image: "https://images.unsplash.com/photo-1511690743698-d9d85f350245?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m2", name: "Bánh Flan Caramel Truyền Thống", category: "Bánh Ngọt", price: 10000, desc: "Bánh flan trứng sữa mềm mịn, béo ngậy, tan ngay trong miệng hòa quyện cùng lớp sốt caramel đắng nhẹ thơm lừng (10.000đ/phần).", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600", hasTopping: false },
        { id: "m3", name: "Sinh Tố Việt Quất Bạc Hà", category: "Sinh Tố", price: 49000, desc: "Thức uống giải nhiệt sảng khoái với vị chua ngọt tự nhiên của quả việt quất xay nhuyễn cùng sữa tươi và hương bạc hà the mát.", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m4", name: "Sinh Tố Xoài Sữa Tươi", category: "Sinh Tố", price: 45000, desc: "Hương vị nhiệt đới ngọt ngào từ xoài chín tươi xay mịn, béo nhẹ vị sữa và điểm xuyết những miếng xoài tươi giòn ngọt.", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m5", name: "Matcha Đá Xay Kem Tươi", category: "Matcha", price: 55000, desc: "Bột trà xanh Nhật Bản thượng hạng xay cùng đá và sữa tươi, phủ lớp kem tươi bông mịn rắc bột matcha thơm dịu phía trên.", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m6", name: "Iced Matcha Latte", category: "Matcha", price: 49000, desc: "Sự hòa quyện tinh tế giữa vị chát nhẹ, thanh khiết của trà xanh matcha đánh tay và vị béo ngậy của sữa tươi thanh trùng mát lạnh.", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m7", name: "Matcha Kem Trứng Nướng", category: "Matcha", price: 59000, desc: "Matcha latte đậm đà kết hợp cùng lớp kem trứng béo ngậy được khò lửa vàng giòn, tạo nên hương vị caramel cháy quyến rũ.", image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m8", name: "Matcha Dâu Tây", category: "Matcha", price: 55000, desc: "Thức uống 3 tầng bắt mắt với mứt dâu tây chua ngọt ở đáy ly, sữa tươi béo dịu ở giữa và lớp matcha xanh mướt đậm vị trên cùng.", image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m9", name: "Bánh Tiramisu", category: "Bánh Ngọt", price: 45000, desc: "Bánh ngọt trứ danh nước Ý với cốt bánh quy sâm-panh thấm đẫm hương cà phê, xen kẽ lớp kem phô mai mascarpone béo mịn và bột cacao nguyên chất.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600", hasTopping: false },
        { id: "m10", name: "Bánh Bông Lan Trứng Muối Mini (Set 3 cái)", category: "Bánh Ngọt", price: 39000, desc: "Cốt bánh bông lan mềm xốp, thơm bơ, phủ đầy sốt phô mai béo ngậy, chà bông mặn mà cùng trứng muối nướng bùi béo.", image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&q=80&w=600", hasTopping: false },
        { id: "m11", name: "Bánh Mousse Chanh Dây", category: "Bánh Ngọt", price: 45000, desc: "Cốt bánh quy giòn nhẹ nâng đỡ lớp mousse béo mịn mát lạnh, phủ mặt gương chanh dây vàng óng chua dịu cùng hạt chanh dây giòn sần sật.", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=600", hasTopping: false },
        { id: "m12", name: "Bánh Su Kem Nhân Kem Trứng", category: "Bánh Ngọt", price: 29000, desc: "Vỏ bánh su nướng vàng ruộm, mềm xốp nhẹ bẫng, ôm trọn phần nhân kem trứng vani sánh mịn, ngọt dịu và thơm ngậy.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600", hasTopping: false },
        { id: "m13", name: "Bánh Croissant Ngàn Lớp (2 cái)", category: "Bánh Ngọt", price: 35000, desc: "Bánh sừng bò chuẩn vị Pháp với lớp vỏ ngoài giòn rụm, ruột bánh rỗng xốp nhiều tầng, dậy mùi bơ lên men thơm lừng (35.000đ/2 cái).", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600", hasTopping: false },
        { id: "m14", name: "Trà Xoài Chanh Dây Bạc Hà", category: "Trà & Nước Trái Cây", price: 49000, desc: "Thức uống nhiệt đới tươi mát kết hợp vị ngọt thanh của xoài tươi cắt hạt lựu, vị chua thơm của chanh dây, lát chanh tươi và hương lá bạc hà sảng khoái.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m15", name: "Nước Chanh Dâu Tây Tươi", category: "Trà & Nước Trái Cây", price: 45000, desc: "Sự hòa quyện chua ngọt hài hòa giữa dâu tây đỏ mọng và chanh vàng tươi mát, giải nhiệt tức thì cho những ngày nắng.", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m16", name: "Nước Chanh Việt Quất", category: "Trà & Nước Trái Cây", price: 49000, desc: "Thức uống sắc tím bắt mắt với vị chua thanh của chanh lát kết hợp cùng việt quất tươi mọng nước, mát lạnh và dễ uống.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m17", name: "Sữa Chua Xoài Alphonso & Granola", category: "Sữa Chua & Granola", price: 49000, desc: "Sữa chua mịn mát hòa cùng sốt xoài Alphonso ngọt đậm đà, thêm xoài tươi, việt quất và granola giòn rụm đầy năng lượng.", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m18", name: "Sữa Chua Dâu Tây & Chuối", category: "Sữa Chua & Granola", price: 50000, desc: "Sữa chua vị dâu hồng mịn màng ăn kèm chuối chín cắt lát, dâu tây tươi và trái mọng chua ngọt dịu nhẹ (45.000đ – 55.000đ).", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&q=80&w=600", hasTopping: true },
        { id: "m19", name: "Sữa Chua Việt Quất & Trái Mọng", category: "Sữa Chua & Granola", price: 49000, desc: "Sữa chua việt quất tím ngắt sánh mịn, điểm thêm việt quất, mâm xôi tươi và dừa bào sấy giòn béo.", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&q=80&w=600", hasTopping: true }
    ],
    vouchers: [
        { id: "V10", code: "JUMJUM10", discount: 10, label: "Giảm 10% cho mọi đơn hàng" },
        { id: "V20", code: "VINHLONG20", discount: 20, label: "Giảm 20% khách hàng khu vực Vĩnh Long" },
        { id: "V15", code: "FRESH15", discount: 15, label: "Giảm 15% đơn từ 2 ly bất kỳ" }
    ],
    initialReviews: [
        { id: 0, user: "Nam Em", rating: 5, comment: "Đồ uống tươi mát, hương vị rất ngon và dễ chịu, ghé JUMJUM là nạp lại năng lượng liền!", date: "19/11/2026", photo: "" },
        { id: 1, user: "Anh Ba Ngọc Sơn", rating: 5, comment: "Trà mãng cầu tươi ngon xuất sắc, không gian phục vụ tuyệt vời!", date: "17/11/2026", photo: "" },
        { id: 2, user: "Christina Nguyễn Phương Hằng", rating: 5, comment: "Đồ uống rất hợp khẩu vị, nhân viên nhanh nhẹn và lịch sự.", date: "16/11/2026", photo: "" },
        { id: 3, user: "Trường Giang", rating: 4.5, comment: "Quán có view đẹp, trà sữa trân châu đường đen béo ngậy vừa miệng.", date: "15/11/2026", photo: "" }
    ]
};

// ==================== STORAGE & ĐỒNG BỘ ĐA THIẾT BỊ ====================
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

function normalizeSpaceImageItem(item, index = 0) {
    const fallbackTags = ["☀️ Góc Đón Nắng", "✨ Hội Bạn Gen Z", "🎧 Vibe Cực Cuốn", "🌿 Không Gian Xanh", "📸 Tọa Độ Sống Ảo"];
    const fallbackCaptions = ["Ánh sáng tự nhiên cực chill", "Tụ tập tám chuyện hết nấc", "Góc check-in & học bài", "Thoáng mát, gần gũi", "Lên hình nào cũng xinh"];
    if (typeof item === 'string') {
        return {
            url: item,
            tag: fallbackTags[index % fallbackTags.length],
            caption: fallbackCaptions[index % fallbackCaptions.length]
        };
    }
    return {
        url: item.url,
        tag: item.tag || fallbackTags[index % fallbackTags.length],
        caption: item.caption || fallbackCaptions[index % fallbackCaptions.length]
    };
}

let cloudSyncSettings = safeGetStorage('jumjum_cloud_sync', {
    dbUrl: "",
    channel: "jumjum_live_v1",
    lastUpdated: 0
});

let toppings = safeGetStorage('jumjum_toppings', DEFAULT_SHOP_DATA.toppings);
let products = safeGetStorage('jumjum_products', DEFAULT_SHOP_DATA.products);
let spaceImages = safeGetStorage('jumjum_space_images', DEFAULT_SHOP_DATA.spaceImages).map(normalizeSpaceImageItem);
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
let isDirectOrderAfterTopping = false;
let newUploadedProductImgBase64 = "";
let isApplyingRemotePayload = false;

function getCloudEndpoint() {
    const baseUrl = (cloudSyncSettings.dbUrl || '').trim().replace(/\/+$/, '');
    const channel = (cloudSyncSettings.channel || 'jumjum_live_v1').trim().replace(/[^a-zA-Z0-9_-]/g, '_');
    if (!baseUrl) return "";
    return `${baseUrl}/${channel}.json`;
}

function updateCloudBadgeUI(statusText, isOnline = false) {
    const headerBadge = document.getElementById('cloudSyncBadge');
    const adminBadge = document.getElementById('adminCloudStatusBadge');
    if (headerBadge) {
        headerBadge.innerHTML = isOnline
            ? `<i class="fa-solid fa-cloud-check"></i> ${statusText}`
            : `<i class="fa-solid fa-cloud"></i> ${statusText}`;
        headerBadge.className = isOnline
            ? "hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold cursor-pointer whitespace-nowrap"
            : "hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-500/15 text-slate-700 dark:text-slate-300 text-[10px] font-bold cursor-pointer whitespace-nowrap";
    }
    if (adminBadge) {
        adminBadge.textContent = isOnline ? statusText : statusText;
        adminBadge.className = isOnline
            ? "px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold whitespace-nowrap"
            : "px-2.5 py-0.5 rounded-full bg-slate-500/20 text-slate-700 dark:text-slate-300 text-[10px] font-bold whitespace-nowrap";
    }
}

function showCloudSyncStatus() {
    const endpoint = getCloudEndpoint();
    if (!endpoint) {
        showToast("Đang chạy LocalStorage. Vào Admin > Đồng bộ & EmailJS để bật đồng bộ đa thiết bị!");
    } else {
        showToast(`Đã kết nối Cloud kênh "${cloudSyncSettings.channel}"!`);
    }
}

function saveCloudSyncSettings() {
    const dbUrl = document.getElementById('cloudDbUrlInput').value.trim().replace(/\/+$/, '');
    const channel = (document.getElementById('cloudChannelInput').value.trim() || 'jumjum_live_v1').replace(/[^a-zA-Z0-9_-]/g, '_');
    cloudSyncSettings = {
        dbUrl,
        channel,
        lastUpdated: Date.now()
    };
    safeSetStorage('jumjum_cloud_sync', cloudSyncSettings);
    if (dbUrl) {
        updateCloudBadgeUI("Cloud Live", true);
        pushAllDataToCloud(true);
    } else {
        updateCloudBadgeUI("Local", false);
        showToast("Đã tắt đồng bộ Cloud, chuyển về LocalStorage!");
    }
}

function loadCloudFieldsToAdmin() {
    const urlEl = document.getElementById('cloudDbUrlInput');
    const chEl = document.getElementById('cloudChannelInput');
    if (urlEl) urlEl.value = cloudSyncSettings.dbUrl || "";
    if (chEl) chEl.value = cloudSyncSettings.channel || "jumjum_live_v1";
}

function buildSharedPayload() {
    const updatedAt = Date.now();
    return {
        updatedAt,
        toppings,
        products,
        spaceImages,
        foodTags,
        orders,
        tableCalls,
        reviews,
        followers,
        broadcastMsg,
        adminAccounts
    };
}

async function pushAllDataToCloud(showNotify = false) {
    if (isApplyingRemotePayload) return;
    const endpoint = getCloudEndpoint();
    if (!endpoint) return;

    const payload = buildSharedPayload();
    cloudSyncSettings.lastUpdated = payload.updatedAt;
    safeSetStorage('jumjum_cloud_sync', cloudSyncSettings);

    try {
        const res = await fetch(endpoint, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (res.ok) {
            updateCloudBadgeUI("Cloud Live", true);
            if (showNotify) showToast("Đã đồng bộ dữ liệu lên Cloud cho mọi thiết bị!");
        }
    } catch (err) {
        console.warn("Cloud push error:", err);
    }
}

function applyRemoteSnapshot(data, playAlert = false) {
    if (!data || typeof data !== 'object') return;
    const remoteTs = Number(data.updatedAt || 0);
    const localTs = Number(cloudSyncSettings.lastUpdated || 0);
    if (!remoteTs || remoteTs <= localTs) return;

    const prevOrdersLen = orders.length;
    const prevCallsLen = tableCalls.length;

    isApplyingRemotePayload = true;
    try {
        if (Array.isArray(data.toppings)) {
            toppings = data.toppings;
            safeSetStorage('jumjum_toppings', toppings);
        }
        if (Array.isArray(data.products)) {
            products = data.products;
            safeSetStorage('jumjum_products', products);
        }
        if (Array.isArray(data.spaceImages)) {
            spaceImages = data.spaceImages.map(normalizeSpaceImageItem);
            safeSetStorage('jumjum_space_images', spaceImages);
        }
        if (Array.isArray(data.foodTags)) {
            foodTags = data.foodTags;
            safeSetStorage('jumjum_food_tags', foodTags);
        }
        if (Array.isArray(data.orders)) {
            orders = data.orders;
            safeSetStorage('jumjum_orders', orders);
        }
        if (Array.isArray(data.tableCalls)) {
            tableCalls = data.tableCalls;
            safeSetStorage('jumjum_table_calls', tableCalls);
        }
        if (Array.isArray(data.reviews)) {
            reviews = data.reviews;
            safeSetStorage('jumjum_reviews', reviews);
        }
        if (Array.isArray(data.followers)) {
            followers = data.followers;
            safeSetStorage('jumjum_followers', followers);
        }
        if (typeof data.broadcastMsg === 'string') {
            broadcastMsg = data.broadcastMsg;
            localStorage.setItem('jumjum_broadcast', broadcastMsg);
        }
        if (Array.isArray(data.adminAccounts)) {
            adminAccounts = data.adminAccounts;
            safeSetStorage('jumjum_admins', adminAccounts);
        }

        cloudSyncSettings.lastUpdated = remoteTs;
        safeSetStorage('jumjum_cloud_sync', cloudSyncSettings);

        renderBroadcastBanner();
        renderSpaceGallery();
        renderCategories();
        renderProducts();
        renderReviews();
        updateFollowButtonUI();

        if (!document.getElementById('tab-service').classList.contains('hidden')) {
            renderUserActiveOrders();
        }
        if (currentUser && currentUser.role === 'shop') {
            if (playAlert && (orders.length > prevOrdersLen || tableCalls.length > prevCallsLen)) {
                playAdminNotificationSound();
                showToast("🔔 Có đơn hàng hoặc yêu cầu gọi bàn mới từ thiết bị khác!");
            }
            renderAllAdminData();
        }
    } finally {
        isApplyingRemotePayload = false;
    }
}

async function pullAllDataFromCloud(showNotify = false) {
    const endpoint = getCloudEndpoint();
    if (!endpoint) {
        if (showNotify) showToast("Chưa cấu hình URL Cloud!");
        return;
    }
    try {
        const res = await fetch(endpoint, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        updateCloudBadgeUI("Cloud Live", true);
        if (data) {
            const hadChanges = Number(data.updatedAt || 0) > Number(cloudSyncSettings.lastUpdated || 0);
            applyRemoteSnapshot(data, true);
            if (showNotify) {
                showToast(hadChanges ? "Đã cập nhật dữ liệu mới nhất từ Cloud!" : "Dữ liệu đã là bản mới nhất.");
            }
        }
    } catch (err) {
        console.warn("Cloud pull error:", err);
    }
}

function persistAndSync(storageKey, value, pushCloud = true) {
    const ok = safeSetStorage(storageKey, value);
    if (ok && pushCloud && !isApplyingRemotePayload && getCloudEndpoint()) {
        pushAllDataToCloud(false);
    }
    return ok;
}

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

    if (getCloudEndpoint()) {
        updateCloudBadgeUI("Cloud Live", true);
        pullAllDataFromCloud(false);
    } else {
        updateCloudBadgeUI("Local", false);
    }

    window.addEventListener('storage', (e) => {
        if (['jumjum_orders', 'jumjum_table_calls', 'jumjum_reviews', 'jumjum_followers', 'jumjum_products', 'jumjum_toppings', 'jumjum_space_images', 'jumjum_food_tags', 'jumjum_broadcast'].includes(e.key)) {
            syncStateFromStorage(true);
        }
    });

    setInterval(() => {
        syncStateFromStorage(false);
        if (getCloudEndpoint()) {
            pullAllDataFromCloud(false);
        }
    }, 3500);
});

function syncStateFromStorage(playAlert = false) {
    const latestOrders = safeGetStorage('jumjum_orders', orders);
    const latestCalls = safeGetStorage('jumjum_table_calls', tableCalls);
    const hasNewOrder = latestOrders.length > orders.length;
    const hasNewCall = latestCalls.length > tableCalls.length;

    toppings = safeGetStorage('jumjum_toppings', toppings);
    products = safeGetStorage('jumjum_products', products);
    spaceImages = safeGetStorage('jumjum_space_images', spaceImages).map(normalizeSpaceImageItem);
    foodTags = safeGetStorage('jumjum_food_tags', foodTags);
    orders = latestOrders;
    tableCalls = latestCalls;
    reviews = safeGetStorage('jumjum_reviews', reviews);
    followers = safeGetStorage('jumjum_followers', followers);
    broadcastMsg = localStorage.getItem('jumjum_broadcast') || "";

    renderBroadcastBanner();
    renderSpaceGallery();
    renderCategories();
    renderProducts();
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
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playClickSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    const now = audioCtx.currentTime;
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.065);
}

function playAdminNotificationSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const notes = [659.25, 880, 1174.66];
    notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        const start = audioCtx.currentTime + idx * 0.1;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.15, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(start);
        osc.stop(start + 0.36);
    });
}

// ==================== CẮT XÉN ẢNH NHIỀU TỈ LỆ ====================
let cropState = {
    img: null,
    targetType: 'newProduct',
    targetIndex: null,
    ratio: 1,
    zoom: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    dragging: false,
    lastX: 0,
    lastY: 0
};

function openCropperFromInput(input, defaultRatio = 1, targetType = 'newProduct', targetIndex = null) {
    const file = input.files && input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
            cropState = {
                img,
                targetType,
                targetIndex,
                ratio: defaultRatio,
                zoom: 1,
                rotation: 0,
                offsetX: 0,
                offsetY: 0,
                dragging: false,
                lastX: 0,
                lastY: 0
            };
            document.getElementById('cropZoomSlider').value = 1;
            document.getElementById('cropZoomLabel').textContent = '100%';
            syncRatioButtonsUI(defaultRatio);
            openModal('cropImageModal');
            requestAnimationFrame(() => {
                bindCropCanvasEvents();
                renderCropStage();
            });
        };
        img.onerror = () => showToast("Tệp ảnh không hợp lệ!");
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
    input.value = "";
}

function syncRatioButtonsUI(ratio) {
    document.querySelectorAll('.crop-ratio-btn').forEach(btn => {
        const val = btn.dataset.ratio;
        const isMatch = (ratio === 'free' && val === 'free') || (ratio !== 'free' && Math.abs(parseFloat(val) - Number(ratio)) < 0.02);
        btn.className = isMatch
            ? "crop-ratio-btn px-3 py-1.5 rounded-xl bg-sky-600 text-white text-xs font-bold"
            : "crop-ratio-btn px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold";
    });
}

function setCropRatio(ratio, btnEl) {
    playClickSound();
    cropState.ratio = ratio;
    cropState.offsetX = 0;
    cropState.offsetY = 0;
    syncRatioButtonsUI(ratio);
    renderCropStage();
}

function updateCropZoom(val) {
    cropState.zoom = parseFloat(val) || 1;
    document.getElementById('cropZoomLabel').textContent = `${Math.round(cropState.zoom * 100)}%`;
    renderCropStage();
}

function rotateCropImage(deg) {
    playClickSound();
    cropState.rotation = (cropState.rotation + deg) % 360;
    renderCropStage();
}

function getCropBoxRect(canvasWidth, canvasHeight) {
    const pad = 20;
    const maxW = canvasWidth - pad * 2;
    const maxH = canvasHeight - pad * 2;
    let boxW = maxW;
    let boxH = maxH;

    if (cropState.ratio !== 'free') {
        const r = Number(cropState.ratio);
        if (maxW / maxH > r) {
            boxH = maxH;
            boxW = boxH * r;
        } else {
            boxW = maxW;
            boxH = boxW / r;
        }
    }
    return {
        x: (canvasWidth - boxW) / 2,
        y: (canvasHeight - boxH) / 2,
        w: boxW,
        h: boxH
    };
}

function renderCropStage() {
    const canvas = document.getElementById('cropStageCanvas');
    if (!canvas || !cropState.img) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));

    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, rect.width, rect.height);

    const box = getCropBoxRect(rect.width, rect.height);
    const img = cropState.img;
    const rad = (cropState.rotation * Math.PI) / 180;
    const sin = Math.abs(Math.sin(rad));
    const cos = Math.abs(Math.cos(rad));
    const rotW = img.width * cos + img.height * sin;
    const rotH = img.width * sin + img.height * cos;

    const baseScale = Math.max(box.w / rotW, box.h / rotH);
    const finalScale = baseScale * cropState.zoom;

    ctx.save();
    ctx.translate(box.x + box.w / 2 + cropState.offsetX, box.y + box.h / 2 + cropState.offsetY);
    ctx.rotate(rad);
    ctx.scale(finalScale, finalScale);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();

    // Làm mờ vùng bên ngoài khung cắt
    ctx.fillStyle = 'rgba(2, 6, 23, 0.58)';
    ctx.beginPath();
    ctx.rect(0, 0, rect.width, rect.height);
    ctx.rect(box.x, box.y, box.w, box.h);
    ctx.fill('evenodd');

    // Viền khung cắt & lưới 3x3
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.strokeRect(box.x, box.y, box.w, box.h);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(box.x + (box.w / 3) * i, box.y);
        ctx.lineTo(box.x + (box.w / 3) * i, box.y + box.h);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(box.x, box.y + (box.h / 3) * i);
        ctx.lineTo(box.x + box.w, box.y + (box.h / 3) * i);
        ctx.stroke();
    }

    ctx.restore();
}

let cropEventsBound = false;
function bindCropCanvasEvents() {
    const canvas = document.getElementById('cropStageCanvas');
    if (!canvas || cropEventsBound) return;
    cropEventsBound = true;

    const startDrag = (x, y) => {
        cropState.dragging = true;
        cropState.lastX = x;
        cropState.lastY = y;
    };
    const moveDrag = (x, y) => {
        if (!cropState.dragging) return;
        cropState.offsetX += x - cropState.lastX;
        cropState.offsetY += y - cropState.lastY;
        cropState.lastX = x;
        cropState.lastY = y;
        renderCropStage();
    };
    const endDrag = () => {
        cropState.dragging = false;
    };

    canvas.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
    window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
    window.addEventListener('mouseup', endDrag);

    canvas.addEventListener('touchstart', e => {
        if (e.touches && e.touches[0]) {
            startDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });
    window.addEventListener('touchmove', e => {
        if (cropState.dragging && e.touches && e.touches[0]) {
            moveDrag(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });
    window.addEventListener('touchend', endDrag);
}

function applyCroppedImage() {
    if (!cropState.img) return;
    const stageCanvas = document.getElementById('cropStageCanvas');
    const rect = stageCanvas.getBoundingClientRect();
    const box = getCropBoxRect(rect.width, rect.height);

    const outMaxSide = cropState.targetType === 'space' ? 800 : 520;
    const boxAspect = box.w / box.h;
    const outW = boxAspect >= 1 ? outMaxSide : Math.round(outMaxSide * boxAspect);
    const outH = boxAspect >= 1 ? Math.round(outMaxSide / boxAspect) : outMaxSide;

    const outCanvas = document.createElement('canvas');
    outCanvas.width = outW;
    outCanvas.height = outH;
    const ctx = outCanvas.getContext('2d');

    const scaleRatio = outW / box.w;
    const img = cropState.img;
    const rad = (cropState.rotation * Math.PI) / 180;
    const sin = Math.abs(Math.sin(rad));
    const cos = Math.abs(Math.cos(rad));
    const rotW = img.width * cos + img.height * sin;
    const rotH = img.width * sin + img.height * cos;
    const baseScale = Math.max(box.w / rotW, box.h / rotH);
    const finalScale = baseScale * cropState.zoom * scaleRatio;

    ctx.save();
    ctx.translate(outW / 2 + cropState.offsetX * scaleRatio, outH / 2 + cropState.offsetY * scaleRatio);
    ctx.rotate(rad);
    ctx.scale(finalScale, finalScale);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();

    const croppedDataUrl = outCanvas.toDataURL('image/jpeg', 0.8);
    closeCropperModal();

    if (cropState.targetType === 'newProduct') {
        newUploadedProductImgBase64 = croppedDataUrl;
        document.getElementById('newProdImgLabel').textContent = "Đã cắt ảnh xong";
        document.getElementById('newProdPreviewImg').src = croppedDataUrl;
        document.getElementById('newProdPreviewBox').classList.remove('hidden');
        showToast("Đã cắt ảnh món mới thành công!");
    } else if (cropState.targetType === 'editProduct' && cropState.targetIndex !== null) {
        products[cropState.targetIndex].image = croppedDataUrl;
        persistAndSync('jumjum_products', products, true);
        renderProducts();
        renderAdminMenuAndSpaceManager();
        showToast("Đã cập nhật ảnh đã cắt cho món!");
    } else if (cropState.targetType === 'space') {
        spaceImages.unshift({
            url: croppedDataUrl,
            tag: "📸 Góc Mới JUMJUM",
            caption: "Không gian check-in thực tế"
        });
        persistAndSync('jumjum_space_images', spaceImages, true);
        renderSpaceGallery();
        renderAdminMenuAndSpaceManager();
        showToast("Đã thêm ảnh không gian đã cắt!");
    } else if (cropState.targetType === 'avatar' && currentUser) {
        currentUser.avatar = croppedDataUrl;
        safeSetStorage('jumjum_user', currentUser);
        const previewEl = document.getElementById('profileAvatarPreview');
        const fallbackEl = document.getElementById('profileAvatarFallback');
        if (previewEl && fallbackEl) {
            previewEl.src = croppedDataUrl;
            previewEl.classList.remove('hidden');
            fallbackEl.classList.add('hidden');
        }
        checkAuthState();
        showToast("Đã cập nhật ảnh đại diện!");
    } else if (cropState.targetType === 'review') {
        reviewPhotoBase64 = croppedDataUrl;
        document.getElementById('reviewPhotoPreview').src = croppedDataUrl;
        document.getElementById('reviewPhotoPreviewWrap').classList.remove('hidden');
        showToast("Đã cắt ảnh đính kèm đánh giá!");
    }
}

function closeCropperModal() {
    closeModal('cropImageModal');
}

// ==================== ĐIỀU CHỈNH LIST TOPPING ====================
function addNewToppingItem() {
    const name = document.getElementById('newToppingNameInput').value.trim();
    const price = parseInt(document.getElementById('newToppingPriceInput').value);
    if (!name || isNaN(price) || price < 0) {
        return showToast("Vui lòng nhập Tên topping và Giá hợp lệ!");
    }
    toppings.push({
        id: 'top_' + Date.now(),
        name,
        price
    });
    persistAndSync('jumjum_toppings', toppings, true);
    document.getElementById('newToppingNameInput').value = '';
    document.getElementById('newToppingPriceInput').value = '';
    renderAdminToppingList();
    showToast(`Đã thêm topping "${name}"!`);
}

function updateToppingItem(idx, field, value) {
    if (!toppings[idx]) return;
    if (field === 'name') {
        const trimmed = String(value).trim();
        if (!trimmed) return showToast("Tên topping không được để trống!");
        toppings[idx].name = trimmed;
    } else if (field === 'price') {
        const num = parseInt(value);
        if (isNaN(num) || num < 0) return showToast("Giá topping không hợp lệ!");
        toppings[idx].price = num;
    }
    persistAndSync('jumjum_toppings', toppings, true);
    renderAdminToppingList();
    showToast("Đã cập nhật list topping!");
}

function deleteToppingItem(idx) {
    if (toppings.length <= 1) return showToast("Cần giữ lại ít nhất 1 topping!");
    const removed = toppings.splice(idx, 1);
    persistAndSync('jumjum_toppings', toppings, true);
    renderAdminToppingList();
    showToast(`Đã xóa topping "${removed[0].name}"!`);
}

function renderAdminToppingList() {
    const container = document.getElementById('adminToppingManageList');
    if (!container) return;
    if (toppings.length === 0) {
        container.innerHTML = `<div class="text-xs text-slate-400 italic col-span-full">Chưa có topping nào trong danh sách.</div>`;
        return;
    }
    container.innerHTML = toppings.map((t, idx) => `
        <div class="p-3 rounded-2xl bg-white/85 dark:bg-slate-800 border border-white dark:border-slate-700 flex items-center gap-2 text-xs shadow-sm">
            <input type="text" value="${t.name}" onchange="updateToppingItem(${idx}, 'name', this.value)" class="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 font-semibold text-slate-800 dark:text-white border border-transparent focus:border-sky-400 focus:outline-none">
            <input type="number" value="${t.price}" onchange="updateToppingItem(${idx}, 'price', this.value)" class="w-24 px-2.5 py-1.5 rounded-lg bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-700 font-bold text-sky-700 dark:text-sky-400 text-right">
            <button onclick="playClickSound(); deleteToppingItem(${idx})" class="tactile-btn w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0" title="Xóa topping">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');
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
    persistAndSync('jumjum_followers', followers, true);
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

// ==================== VOUCHER ====================
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

// ==================== HIỆU ỨNG SÓNG NƯỚC & GIAO DIỆN ====================
function initLiquidWaveCanvas() {
    const canvas = document.getElementById('liquidCanvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let phase = 0;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    function drawWaves() {
        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.classList.contains('dark');
        const waveColors = isDark
            ? ['rgba(14, 165, 233, 0.08)', 'rgba(56, 189, 248, 0.06)']
            : ['rgba(14, 165, 233, 0.11)', 'rgba(255, 255, 255, 0.35)'];

        waveColors.forEach((color, idx) => {
            ctx.beginPath();
            ctx.moveTo(0, height);
            for (let x = 0; x <= width; x += 24) {
                const y = height * 0.72 + Math.sin(x * 0.004 + phase + idx * 1.5) * 24 + Math.cos(x * 0.002 - phase) * 14;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        });

        phase += 0.015;
        requestAnimationFrame(drawWaves);
    }
    drawWaves();
}

function initRealtimeClock() {
    const update = () => {
        const now = new Date();
        document.getElementById('realtimeClock').textContent = now.toLocaleTimeString('vi-VN') + ' • ' + now.toLocaleDateString('vi-VN');
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
    document.addEventListener('mousemove', (e) => {
        document.querySelectorAll('.spotlight-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    const triggerLiquidRipple = (x, y) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple-ring';
        ripple.style.width = '36px';
        ripple.style.height = '36px';
        ripple.style.left = `${x - 18}px`;
        ripple.style.top = `${y - 18}px`;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 750);
    };

    document.addEventListener('click', (e) => triggerLiquidRipple(e.clientX, e.clientY));
    document.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
            triggerLiquidRipple(e.touches[0].clientX, e.touches[0].clientY);
        }
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
    document.getElementById('spaceGallery').innerHTML = spaceImages.map((item, idx) => {
        const imgObj = normalizeSpaceImageItem(item, idx);
        const spanClass = idx === 0 ? "col-span-2 sm:col-span-2 h-36 sm:h-44" : "h-32 sm:h-36";
        return `
            <div class="tactile-card relative rounded-2xl overflow-hidden ${spanClass} border border-white/85 dark:border-slate-700 shadow-sm group text-left">
                <img src="${imgObj.url}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600'" alt="${imgObj.caption}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent flex flex-col justify-end p-2.5 sm:p-3">
                    <span class="self-start px-2 py-0.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white text-[9px] sm:text-[10px] font-bold mb-1 whitespace-nowrap">${imgObj.tag}</span>
                    <span class="text-white text-[11px] sm:text-xs font-bold leading-tight drop-shadow">${imgObj.caption}</span>
                </div>
            </div>
        `;
    }).join('');
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
                    <img src="${p.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541658016010-618bd0c4cfd2?auto=format&fit=crop&q=80&w=400'" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span class="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-md text-[10px] font-extrabold text-sky-800 dark:text-sky-300 shadow-sm whitespace-nowrap">
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

function initiateAddToCart(productId, openCartImmediately = false) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (product.hasTopping && toppings.length > 0) {
        pendingProductForTopping = product;
        isDirectOrderAfterTopping = openCartImmediately;
        document.getElementById('toppingModalTitle').textContent = `Topping cho: ${product.name}`;
        document.getElementById('toppingOptionsList').innerHTML = toppings.map(t => `
            <label class="tactile-btn flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer">
                <span class="flex items-center gap-2 font-semibold dark:text-white whitespace-nowrap">
                    <input type="checkbox" class="topping-checkbox" data-name="${t.name}" data-price="${t.price}" onchange="playClickSound(); updateToppingPricePreview()">
                    ${t.name}
                </span>
                <span class="font-bold text-sky-600 dark:text-sky-400 whitespace-nowrap">+${Number(t.price).toLocaleString('vi-VN')} VND</span>
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
        total += parseInt(cb.dataset.price) || 0;
    });
    document.getElementById('toppingCalculatedPrice').textContent = total.toLocaleString('vi-VN') + ' VND';
}

function confirmAddProductWithToppings(openCartImmediately = isDirectOrderAfterTopping) {
    if (!pendingProductForTopping) return;
    const selectedToppings = [];
    let unitPrice = pendingProductForTopping.price;
    document.querySelectorAll('.topping-checkbox:checked').forEach(cb => {
        selectedToppings.push(cb.dataset.name);
        unitPrice += parseInt(cb.dataset.price) || 0;
    });
    addItemToCart(pendingProductForTopping, selectedToppings, unitPrice);
    closeModal('toppingModal');
    if (openCartImmediately) openCartModal();
}

function addItemToCart(product, selectedToppings, unitPrice) {
    const toppingKey = selectedToppings.sort().join(', ');
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
                <img src="${item.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541658016010-618bd0c4cfd2?auto=format&fit=crop&q=80&w=200'" class="w-11 h-11 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700">
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

function launchPaymentApp(method) {
    if (method === 'Chuyển khoản ngân hàng') {
        const bankCode = document.getElementById('selectedPaymentApp').value;
        const deepLinks = {
            mb: `mbbank://`, vcb: `vietcombank://`, tcb: `techcombank://`,
            bidv: `bidvsmartbanking://`, icb: `vietinbankipay://`, acb: `acbone://`,
            vpb: `vpbankneo://`, tpb: `tpbanks://`, agb: `agribank://`, scb: `sacombankpay://`
        };
        showToast(`Đang liên kết ứng dụng ngân hàng (${bankCode.toUpperCase()})...`);
        window.location.href = deepLinks[bankCode] || `https://dl.vietqr.io/pay?app=${bankCode}`;
    } else if (method === 'Ví điện tử') {
        const walletCode = document.getElementById('selectedEwalletApp').value;
        const walletSchemes = { zalopay: `zalopay://`, momo: `momo://`, vnpay: `vnpay://`, shopeepay: `shopeepay://` };
        showToast(`Đang liên kết ví điện tử (${walletCode.toUpperCase()})...`);
        window.location.href = walletSchemes[walletCode];
    }
}

function placeOrder() {
    if (cart.length === 0) return showToast("Vui lòng chọn món trước khi đặt hàng!");

    const customerName = document.getElementById('orderCustomerName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();
    const email = document.getElementById('orderEmail').value.trim();
    const address = document.getElementById('orderAddress').value.trim();
    const note = document.getElementById('orderNote').value.trim();
    const payMethod = document.querySelector('input[name="payMethod"]:checked').value;

    if (!customerName || !phone || !address) {
        return showToast("Vui lòng nhập đầy đủ Tên, SĐT và Địa chỉ / Số bàn!");
    }

    let subTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    let discountAmount = appliedVoucher ? (subTotal * appliedVoucher.discount) / 100 : 0;
    const finalTotal = Math.max(0, subTotal - discountAmount);

    const itemsSummary = cart.map(i => `${i.name} (SL: ${i.qty}${i.toppings ? ' | Topping: ' + i.toppings : ''})`).join('; ');
    const toppingsSummary = cart.filter(i => i.toppings).map(i => `${i.name}: ${i.toppings}`).join('; ') || "Không có";

    const now = new Date();
    const dateOnlyStr = now.toLocaleDateString('vi-VN');
    const fullTimeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' ' + dateOnlyStr;

    const newOrder = {
        id: 'JJ-' + Math.floor(1000 + Math.random() * 9000),
        customer: customerName,
        phone: phone,
        email: email || "Không cung cấp",
        address: address,
        note: note || "Không có",
        voucher: appliedVoucher ? appliedVoucher.code : "Không áp dụng",
        items: [...cart],
        itemsText: itemsSummary,
        toppingsText: toppingsSummary,
        subTotal: subTotal,
        discount: discountAmount,
        total: finalTotal,
        payMethod: payMethod,
        channel: address.toLowerCase().includes('bàn') || /^\d{1,3}$/.test(address) ? "Tại bàn" : "Trực tuyến",
        status: "Đã thanh toán / Chờ xác nhận",
        receivedByCustomer: false,
        dateStr: dateOnlyStr,
        time: fullTimeStr,
        isNew: true
    };

    orders.unshift(newOrder);
    persistAndSync('jumjum_orders', orders, true);

    sendOrderEmailViaEmailJS(newOrder);
    playAdminNotificationSound();

    if (payMethod === 'Chuyển khoản ngân hàng' || payMethod === 'Ví điện tử') {
        launchPaymentApp(payMethod);
    }

    cart = [];
    safeSetStorage('jumjum_cart', cart);
    updateCartUI();
    closeModal('cartModal');
    document.getElementById('shopNotifDot').classList.remove('hidden');
    switchTab('service');
    showToast(`Đặt đơn ${newOrder.id} thành công! Hóa đơn điện tử đã được tạo.`);
}

function renderUserActiveOrders() {
    const container = document.getElementById('userActiveOrdersList');
    if (orders.length === 0) {
        container.innerHTML = `<div class="text-xs text-slate-400 italic">Bạn chưa có đơn hàng nào gần đây.</div>`;
        return;
    }
    container.innerHTML = orders.slice(0, 6).map((o, idx) => `
        <div class="p-3.5 rounded-2xl bg-white/85 dark:bg-slate-800/90 border border-white dark:border-slate-700 flex flex-wrap items-center justify-between gap-3 shadow-sm">
            <div class="space-y-1 flex-1 min-w-[200px]">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="text-xs font-extrabold text-sky-700 dark:text-sky-400 whitespace-nowrap">${o.id} • ${o.channel} (${o.time})</span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${o.receivedByCustomer ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : (o.isNew ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300' : 'bg-sky-500/20 text-sky-700 dark:text-sky-300')}">
                        ${o.status || (o.isNew ? 'Chờ xác nhận' : 'Đang pha chế')}
                    </span>
                </div>
                <div class="text-xs text-slate-700 dark:text-slate-200">${o.itemsText}</div>
                <div class="text-[11px] font-bold text-slate-500 whitespace-nowrap">Tổng tiền: ${o.total.toLocaleString('vi-VN')} VND (${o.payMethod})</div>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="playClickSound(); openInvoiceModal(${idx})" class="tactile-btn px-3 py-2 rounded-xl bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 text-xs font-bold whitespace-nowrap">
                    <i class="fa-solid fa-file-invoice mr-1"></i> Hóa đơn
                </button>
                ${o.receivedByCustomer
                    ? `<span class="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-700 text-xs font-bold whitespace-nowrap"><i class="fa-solid fa-circle-check mr-1"></i> Đã nhận món</span>`
                    : `<button onclick="playClickSound(); confirmCustomerReceivedOrder(${idx})" class="tactile-btn px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow whitespace-nowrap">
                        <i class="fa-solid fa-hand-holding-heart mr-1"></i> Đã nhận được món
                       </button>`
                }
            </div>
        </div>
    `).join('');
}

function confirmCustomerReceivedOrder(idx) {
    orders[idx].receivedByCustomer = true;
    orders[idx].status = "Khách hàng đã nhận món";
    orders[idx].isNew = false;
    persistAndSync('jumjum_orders', orders, true);
    playAdminNotificationSound();
    renderUserActiveOrders();
    showToast("Cảm ơn bạn đã xác nhận nhận món! Chúc bạn ngon miệng.");
}

function quickFillTableReq(text) {
    document.getElementById('tableRequestInput').value = text;
}

function sendTableServiceRequest() {
    const tableCode = document.getElementById('tableCodeInput').value.trim();
    const requestText = document.getElementById('tableRequestInput').value.trim();

    if (!/^\d{3}$/.test(tableCode)) {
        return showToast("Vui lòng nhập đúng mã số bàn gồm 3 chữ số (Ví dụ: 005, 102)!");
    }
    if (!requestText) {
        return showToast("Vui lòng nhập yêu cầu cần phục vụ!");
    }

    const callObj = {
        id: Date.now(),
        tableCode: tableCode,
        request: requestText,
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' ' + new Date().toLocaleDateString('vi-VN'),
        done: false
    };

    tableCalls.unshift(callObj);
    persistAndSync('jumjum_table_calls', tableCalls, true);
    document.getElementById('tableRequestInput').value = '';
    document.getElementById('shopNotifDot').classList.remove('hidden');

    playAdminNotificationSound();
    showToast(`Đã gửi yêu cầu từ Bàn ${tableCode} đến hệ thống Admin!`);
}

// ==================== HỒ SƠ VÀ ĐĂNG NHẬP ====================
function handleProfileOrAuthClick() {
    if (!currentUser) {
        document.getElementById('shopEmailInput').value = "";
        document.getElementById('shopPassInput').value = "";
        openModal('authModal');
    } else {
        openProfileModal();
    }
}

function openProfileModal() {
    if (!currentUser) return;
    const fallbackEl = document.getElementById('profileAvatarFallback');
    const previewEl = document.getElementById('profileAvatarPreview');

    if (currentUser.avatar) {
        previewEl.src = currentUser.avatar;
        previewEl.classList.remove('hidden');
        fallbackEl.classList.add('hidden');
    } else {
        previewEl.classList.add('hidden');
        fallbackEl.classList.remove('hidden');
    }

    document.getElementById('profDisplayName').value = currentUser.name || '';
    document.getElementById('profPhone').value = currentUser.phone || '';
    document.getElementById('profEmail').value = currentUser.email || '';
    document.getElementById('profAddress').value = currentUser.address || '';
    document.getElementById('profPayMethod').value = currentUser.payMethod || 'COD';
    openModal('profileModal');
}

function saveUserProfile() {
    if (!currentUser) return;
    currentUser.name = document.getElementById('profDisplayName').value.trim() || currentUser.name;
    currentUser.phone = document.getElementById('profPhone').value.trim();
    currentUser.email = document.getElementById('profEmail').value.trim();
    currentUser.address = document.getElementById('profAddress').value.trim();
    currentUser.payMethod = document.getElementById('profPayMethod').value;

    safeSetStorage('jumjum_user', currentUser);
    checkAuthState();
    closeModal('profileModal');
    showToast("Đã cập nhật hồ sơ thành công!");
}

function socialLogin(provider) {
    currentUser = {
        role: 'guest',
        name: `Khách hàng ${provider}`,
        phone: '',
        email: '',
        address: '',
        payMethod: 'COD',
        avatar: '',
        savedVouchers: []
    };
    safeSetStorage('jumjum_user', currentUser);
    closeModal('authModal');
    checkAuthState();
    updateFollowButtonUI();
    showToast(`Đăng nhập thành công với ${provider}!`);
}

function loginAsShop() {
    const email = document.getElementById('shopEmailInput').value.trim().toLowerCase();
    const pwd = document.getElementById('shopPassInput').value.trim();

    const matchedAdmin = adminAccounts.find(a => a.email.toLowerCase() === email && a.pwd === pwd);

    if (matchedAdmin) {
        currentUser = {
            role: 'shop',
            name: matchedAdmin.name || 'Quản Trị Viên JUMJUM',
            email: matchedAdmin.email,
            phone: DEFAULT_SHOP_DATA.info.hotline,
            address: DEFAULT_SHOP_DATA.info.address,
            payMethod: 'Chuyển khoản ngân hàng',
            avatar: DEFAULT_SHOP_DATA.info.avatar
        };
        safeSetStorage('jumjum_user', currentUser);
        document.getElementById('shopEmailInput').value = "";
        document.getElementById('shopPassInput').value = "";
        closeModal('authModal');
        checkAuthState();
        playAdminNotificationSound();
        showToast(`Đăng nhập Quản trị thành công (${matchedAdmin.name})!`);
    } else {
        showToast("Email hoặc mật khẩu Quản trị không chính xác!");
    }
}

function logoutAccount() {
    currentUser = null;
    localStorage.removeItem('jumjum_user');
    checkAuthState();
    updateFollowButtonUI();
    showToast("Đã đăng xuất khỏi tài khoản!");
}

function checkAuthState() {
    const customerView = document.getElementById('customerView');
    const shopView = document.getElementById('shopDashboardView');
    const bottomDock = document.getElementById('bottomDock');
    const floatingCart = document.getElementById('floatingCartBtn');
    const headerAvt = document.getElementById('headerUserAvatar');
    const headerIcon = document.getElementById('headerUserIcon');
    const switchRoleLabel = document.getElementById('quickSwitchRoleLabel');

    if (currentUser && currentUser.avatar) {
        headerAvt.src = currentUser.avatar;
        headerAvt.onerror = function() {
            this.classList.add('hidden');
            headerIcon.classList.remove('hidden');
        };
        headerAvt.classList.remove('hidden');
        headerIcon.classList.add('hidden');
    } else {
        headerAvt.classList.add('hidden');
        headerIcon.classList.remove('hidden');
    }

    if (currentUser && currentUser.role === 'shop') {
        customerView.classList.add('hidden');
        bottomDock.classList.add('hidden');
        floatingCart.classList.add('hidden');
        shopView.classList.remove('hidden');
        if (switchRoleLabel) switchRoleLabel.textContent = "Khách hàng";
        document.getElementById('adminDashAvatar').src = currentUser.avatar || DEFAULT_SHOP_DATA.info.avatar;
        document.getElementById('adminDashName').textContent = currentUser.name || 'Bảng Điều Khiển Quản Trị JUMJUM';
        renderAllAdminData();
    } else {
        shopView.classList.add('hidden');
        customerView.classList.remove('hidden');
        bottomDock.classList.remove('hidden');
        floatingCart.classList.remove('hidden');
        if (switchRoleLabel) switchRoleLabel.textContent = "Admin";
        updateFollowButtonUI();
    }
}

// ==================== QUẢN LÍ NHIỀU ADMIN ====================
function addNewAdminAccount() {
    const email = document.getElementById('newAdminEmail').value.trim().toLowerCase();
    const pwd = document.getElementById('newAdminPwd').value.trim();
    if (!email || !pwd) return showToast("Vui lòng nhập đủ Email và Mật khẩu cho Admin mới!");

    if (adminAccounts.some(a => a.email.toLowerCase() === email)) {
        return showToast("Email tài khoản Admin này đã tồn tại!");
    }

    adminAccounts.push({ email, pwd, name: `Admin (${email.split('@')[0]})` });
    persistAndSync('jumjum_admins', adminAccounts, true);
    document.getElementById('newAdminEmail').value = '';
    document.getElementById('newAdminPwd').value = '';
    renderAdminAccountsList();
    showToast("Đã thêm tài khoản Admin thành công!");
}

function renderAdminAccountsList() {
    const container = document.getElementById('adminAccountsList');
    if (!container) return;
    container.innerHTML = adminAccounts.map((a, idx) => `
        <div class="p-3 rounded-xl bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2 text-xs">
            <div>
                <span class="font-bold text-slate-800 dark:text-white">${a.name}</span> — <span class="text-sky-600">${a.email}</span>
                ${a.email === 'jumjumshop@gmail.com' ? '<span class="ml-2 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold">Quản trị viên chính</span>' : ''}
            </div>
            ${a.email !== 'jumjumshop@gmail.com' ? `
                <button onclick="playClickSound(); removeAdminAccount(${idx})" class="text-rose-500 hover:text-rose-700">
                    <i class="fa-solid fa-trash"></i>
                </button>
            ` : ''}
        </div>
    `).join('');
}

function removeAdminAccount(idx) {
    if (adminAccounts[idx].email === 'jumjumshop@gmail.com') return showToast("Không thể xóa Quản trị viên chính!");
    adminAccounts.splice(idx, 1);
    persistAndSync('jumjum_admins', adminAccounts, true);
    renderAdminAccountsList();
    showToast("Đã xóa tài khoản Admin!");
}

// ==================== QUẢN TRỊ VIÊN JUMJUM ====================
function switchAdminTab(tabKey) {
    document.querySelectorAll('.admin-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`admin-tab-${tabKey}`).classList.remove('hidden');
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        const isActive = btn.dataset.admintab === tabKey;
        btn.className = isActive
            ? "admin-tab-btn tactile-btn px-4 py-2.5 rounded-2xl bg-sky-600 text-white text-xs font-bold whitespace-nowrap shadow"
            : "admin-tab-btn tactile-btn px-4 py-2.5 rounded-2xl bg-white/75 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold whitespace-nowrap shadow-sm";
    });
    if (tabKey === 'orders') {
        document.getElementById('shopNotifDot').classList.add('hidden');
    }
    if (tabKey === 'pos') renderPosSystem();
    if (tabKey === 'menu') renderAdminMenuAndSpaceManager();
    if (tabKey === 'followers') renderAdminFollowersList();
    if (tabKey === 'admins') renderAdminAccountsList();
    if (tabKey === 'reviews_notif') {
        loadCloudFieldsToAdmin();
        loadEmailJsFieldsToAdmin();
    }
}

function renderAllAdminData() {
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    document.getElementById('statTotalOrders').textContent = orders.length;
    document.getElementById('statRevenue').textContent = totalRevenue.toLocaleString('vi-VN') + ' VND';
    document.getElementById('statTotalFollowers').textContent = followers.length;

    const newCount = orders.filter(o => o.isNew).length + tableCalls.filter(c => !c.done).length;
    const badgeEl = document.getElementById('adminOrderBadge');
    badgeEl.textContent = newCount;
    if (newCount > 0) {
        document.getElementById('shopNotifDot').classList.remove('hidden');
    } else {
        document.getElementById('shopNotifDot').classList.add('hidden');
    }

    const callsEl = document.getElementById('adminTableCallsList');
    if (tableCalls.length === 0) {
        callsEl.innerHTML = `<div class="text-xs text-slate-400">Chưa có yêu cầu gọi bàn nào.</div>`;
    } else {
        callsEl.innerHTML = tableCalls.map((c, idx) => `
            <div class="p-3 rounded-2xl bg-white/85 dark:bg-slate-800 border ${!c.done ? 'border-amber-400 ring-2 ring-amber-200' : 'border-slate-200 dark:border-slate-700'} flex flex-wrap items-center justify-between gap-2">
                <div>
                    <span class="px-2 py-0.5 rounded-lg bg-amber-500 text-white font-extrabold text-xs whitespace-nowrap">BÀN ${c.tableCode}</span>
                    <span class="text-xs font-bold text-slate-800 dark:text-white ml-2">${c.request}</span>
                    <span class="text-[10px] text-slate-400 ml-2 whitespace-nowrap">(${c.time})</span>
                </div>
                ${!c.done
                    ? `<button onclick="playClickSound(); completeTableCall(${idx})" class="tactile-btn px-3 py-1 rounded-xl bg-emerald-600 text-white text-[11px] font-bold whitespace-nowrap">Đã phục vụ</button>`
                    : `<span class="text-[11px] text-emerald-600 font-bold whitespace-nowrap"><i class="fa-solid fa-check"></i> Hoàn tất</span>`
                }
            </div>
        `).join('');
    }

    const dailyMap = {};
    orders.forEach(o => {
        const dKey = o.dateStr || (o.time.split(' ')[1] || 'Hôm nay');
        if (!dailyMap[dKey]) dailyMap[dKey] = { count: 0, revenue: 0, itemsCount: 0 };
        dailyMap[dKey].count += 1;
        dailyMap[dKey].revenue += o.total;
        dailyMap[dKey].itemsCount += o.items.reduce((s, i) => s + i.qty, 0);
    });
    const dailyEntries = Object.entries(dailyMap);
    const dailySummaryEl = document.getElementById('dailyOrdersSummaryList');
    if (dailySummaryEl) {
        dailySummaryEl.innerHTML = dailyEntries.length === 0
            ? `<div class="text-xs text-slate-400 col-span-full">Chưa có dữ liệu đơn hàng theo ngày.</div>`
            : dailyEntries.map(([date, info]) => `
                <div class="p-3.5 rounded-2xl bg-white/85 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 shadow-sm text-xs space-y-1">
                    <div class="font-extrabold text-sky-700 dark:text-sky-400 flex items-center justify-between">
                        <span><i class="fa-regular fa-calendar mr-1"></i> ${date}</span>
                        <span class="px-2 py-0.5 rounded-full bg-sky-500/15 text-[10px]">${info.count} đơn</span>
                    </div>
                    <div class="text-slate-600 dark:text-slate-300">Tổng số món bán: <b>${info.itemsCount} món</b></div>
                    <div class="font-extrabold text-emerald-600 dark:text-emerald-400">Doanh thu ngày: ${info.revenue.toLocaleString('vi-VN')} VND</div>
                </div>
            `).join('');
    }

    const ordersEl = document.getElementById('shopOrdersList');
    if (orders.length === 0) {
        ordersEl.innerHTML = `<div class="text-center py-8 text-slate-400 text-xs">Chưa có đơn hàng nào.</div>`;
    } else {
        ordersEl.innerHTML = orders.map((o, idx) => `
            <div class="p-4 rounded-2xl bg-white/85 dark:bg-slate-800 border ${o.isNew ? 'border-sky-400 ring-2 ring-sky-200' : 'border-white dark:border-slate-700'} flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                <div class="space-y-1">
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="font-extrabold text-sky-700 dark:text-sky-400 text-xs whitespace-nowrap">${o.id}</span>
                        <span class="px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-700 text-[10px] font-bold whitespace-nowrap">${o.channel}</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-white">• ${o.customer} (${o.phone})</span>
                        ${o.isNew ? '<span class="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-extrabold animate-pulse whitespace-nowrap">ĐƠN MỚI</span>' : ''}
                        ${o.receivedByCustomer ? '<span class="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold whitespace-nowrap">KHÁCH ĐÃ NHẬN MÓN</span>' : ''}
                    </div>
                    <div class="text-xs text-slate-700 dark:text-slate-200"><b>Sản phẩm:</b> ${o.itemsText}</div>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400"><b>Địa chỉ / Bàn:</b> ${o.address} | <b>Email:</b> ${o.email} | <b>Thanh toán:</b> ${o.payMethod} | <b>Voucher:</b> ${o.voucher}</div>
                    ${o.note !== "Không có" ? `<div class="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">Yêu cầu: ${o.note}</div>` : ''}
                    <div class="text-[10px] text-slate-400 whitespace-nowrap"><i class="fa-regular fa-clock"></i> Thời gian chi tiết: ${o.time}</div>
                </div>
                <div class="flex sm:flex-col items-end justify-between gap-2 shrink-0">
                    <span class="font-extrabold text-sky-700 dark:text-sky-400 text-sm whitespace-nowrap">${o.total.toLocaleString('vi-VN')} VND</span>
                    <div class="flex gap-1.5">
                        <button onclick="playClickSound(); openInvoiceModal(${idx})" class="tactile-btn px-3 py-1.5 rounded-xl bg-amber-500 text-white text-[11px] font-bold shadow-sm whitespace-nowrap">
                            <i class="fa-solid fa-file-invoice mr-1"></i> Xuất HĐ điện tử
                        </button>
                        ${o.isNew ? `
                            <button onclick="playClickSound(); markOrderDone(${idx})" class="tactile-btn px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-[11px] font-bold shadow-sm whitespace-nowrap">
                                <i class="fa-solid fa-check"></i> Duyệt đơn
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    const customerMap = {};
    orders.forEach(o => {
        const key = o.phone || o.customer;
        if (!customerMap[key]) {
            customerMap[key] = { name: o.customer, phone: o.phone, email: o.email, address: o.address, history: [], totalSpent: 0 };
        }
        customerMap[key].history.push(o);
        customerMap[key].totalSpent += o.total;
    });

    const customers = Object.values(customerMap);
    document.getElementById('statTotalCustomers').textContent = customers.length;

    const custEl = document.getElementById('customerProfilesList');
    custEl.innerHTML = customers.length === 0
        ? `<div class="text-xs text-slate-400">Chưa có dữ liệu khách hàng.</div>`
        : customers.map(c => `
            <div class="p-4 rounded-2xl bg-white/85 dark:bg-slate-800 border border-white dark:border-slate-700 shadow-sm space-y-2">
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                        <span class="font-extrabold text-sm text-slate-800 dark:text-white whitespace-nowrap">${c.name}</span>
                        <span class="text-xs text-slate-500 whitespace-nowrap">(${c.phone})</span>
                    </div>
                    <div class="text-xs font-extrabold text-sky-600 dark:text-sky-400 whitespace-nowrap">${c.history.length} đơn hàng • Tổng chi: ${c.totalSpent.toLocaleString('vi-VN')} VND</div>
                </div>
                <div class="text-[11px] text-slate-500 dark:text-slate-400">Email: ${c.email} | Địa chỉ: ${c.address}</div>
                <div class="pt-2 border-t border-slate-200/60 dark:border-slate-700 space-y-1">
                    <div class="text-[10px] font-bold uppercase text-slate-400">Lịch sử đặt hàng chi tiết:</div>
                    ${c.history.map(h => `
                        <div class="text-[11px] flex justify-between text-slate-600 dark:text-slate-300">
                            <span>• [${h.time}] ${h.itemsText}</span>
                            <span class="font-bold text-sky-600 shrink-0 ml-2">${h.total.toLocaleString('vi-VN')} VND</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

    document.getElementById('adminReviewsList').innerHTML = reviews.map(r => `
        <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-800 border border-white dark:border-slate-700 text-xs space-y-1.5">
            <div class="flex justify-between font-bold whitespace-nowrap">
                <span>${r.user} <span class="text-amber-400 ml-1">${renderStarsHtml(r.rating)} (${r.rating})</span></span>
                <span class="text-slate-400 font-normal">${r.date}</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300">${r.comment}</p>
            ${r.photo ? `<img src="${r.photo}" class="w-20 h-20 rounded-xl object-cover border border-slate-200 shadow-sm">` : ''}
        </div>
    `).join('');
}

function renderAdminFollowersList() {
    const container = document.getElementById('adminFollowersList');
    if (followers.length === 0) {
        container.innerHTML = `<div class="text-xs text-slate-400 italic">Chưa có khách hàng nào theo dõi JUMJUM.</div>`;
        return;
    }
    container.innerHTML = followers.map((f, idx) => `
        <div class="p-3.5 rounded-2xl bg-white/85 dark:bg-slate-800 border border-white dark:border-slate-700 flex items-center justify-between gap-2 text-xs shadow-sm">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div>
                    <div class="font-bold text-slate-800 dark:text-white">${f.name}</div>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400">Email: ${f.email} | Thời gian theo dõi: ${f.time}</div>
                </div>
            </div>
            <button onclick="playClickSound(); removeFollower(${idx})" class="tactile-btn w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center" title="Xóa khỏi danh sách">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function removeFollower(idx) {
    followers.splice(idx, 1);
    persistAndSync('jumjum_followers', followers, true);
    renderAdminFollowersList();
    updateFollowButtonUI();
    showToast("Đã xóa khỏi danh sách theo dõi.");
}

function completeTableCall(idx) {
    tableCalls[idx].done = true;
    persistAndSync('jumjum_table_calls', tableCalls, true);
    renderAllAdminData();
    showToast("Đã xác nhận phục vụ bàn thành công!");
}

function markOrderDone(idx) {
    orders[idx].isNew = false;
    orders[idx].status = "Đang pha chế & Giao hàng";
    persistAndSync('jumjum_orders', orders, true);
    renderAllAdminData();
    showToast("Đã duyệt đơn hàng và cập nhật trạng thái cho khách!");
}

function clearAllOrders() {
    if (confirm("Xóa toàn bộ lịch sử đơn hàng?")) {
        orders = [];
        persistAndSync('jumjum_orders', orders, true);
        renderAllAdminData();
    }
}

function openInvoiceModal(idx) {
    const o = orders[idx];
    if (!o) return;
    document.getElementById('invoiceDetailsContent').innerHTML = `
        <div><b>Mã hóa đơn:</b> ${o.id}</div>
        <div><b>Thời gian chi tiết:</b> ${o.time}</div>
        <div><b>Tên khách hàng:</b> ${o.customer}</div>
        <div><b>Số điện thoại:</b> ${o.phone}</div>
        <div><b>Email:</b> ${o.email}</div>
        <div><b>Địa chỉ:</b> ${o.address}</div>
        <div><b>Phương thức thanh toán:</b> ${o.payMethod}</div>
        <div><b>Voucher áp dụng:</b> ${o.voucher}</div>
        <div><b>Yêu cầu thêm:</b> ${o.note}</div>
        <div class="border-t border-dashed border-slate-300 my-2 pt-2 space-y-1">
            <div class="font-bold">CHI TIẾT SẢN PHẨM VÀ TOPPING:</div>
            ${o.items.map(i => `
                <div class="flex justify-between">
                    <span>${i.name} (SL: ${i.qty}) ${i.toppings ? `(+${i.toppings})` : ''}</span>
                    <span>${(i.price * i.qty).toLocaleString('vi-VN')} VND</span>
                </div>
            `).join('')}
        </div>
        <div class="border-t border-dashed border-slate-300 pt-2 flex justify-between font-extrabold text-sm">
            <span>TỔNG THANH TOÁN:</span>
            <span>${o.total.toLocaleString('vi-VN')} VND</span>
        </div>
    `;
    openModal('invoiceModal');
}

// ==================== BÁN HÀNG TẠI QUẦY (POS) ====================
function renderPosSystem() {
    document.getElementById('posProductGrid').innerHTML = products.map(p => `
        <button onclick="playClickSound(); addToPosCart('${p.id}')" class="tactile-btn p-2.5 rounded-2xl bg-white/90 dark:bg-slate-800 border border-sky-100 dark:border-slate-700 text-left shadow-sm flex items-center gap-2.5 group">
            <img src="${p.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541658016010-618bd0c4cfd2?auto=format&fit=crop&q=80&w=200'" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition">
            <div class="min-w-0 flex-1">
                <div class="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase">${p.category}</div>
                <div class="font-bold text-xs text-slate-800 dark:text-white truncate">${p.name}</div>
                <div class="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5 whitespace-nowrap">${p.price.toLocaleString('vi-VN')} VND</div>
            </div>
        </button>
    `).join('');
    updatePosCartUI();
    renderDailySoldStats();
}

function addToPosCart(prodId) {
    const prod = products.find(p => p.id === prodId);
    if (!prod) return;
    const existing = posCart.find(i => i.id === prodId);
    if (existing) existing.qty += 1;
    else posCart.push({ ...prod, qty: 1, toppings: '' });
    updatePosCartUI();
}

function clearPosCart() {
    posCart = [];
    updatePosCartUI();
}

function updatePosCartUI() {
    const total = posCart.reduce((s, i) => s + i.price * i.qty, 0);
    document.getElementById('posTotalDisplay').textContent = total.toLocaleString('vi-VN') + ' VND';
    const listEl = document.getElementById('posCartList');
    listEl.innerHTML = posCart.length === 0
        ? `<div class="text-xs text-slate-400 italic">Chưa chọn món tại quầy.</div>`
        : posCart.map((i, idx) => `
            <div class="flex items-center justify-between gap-2 text-xs bg-white/80 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <span class="font-semibold truncate">${i.name} <b>(SL: ${i.qty})</b></span>
                <div class="flex items-center gap-2 shrink-0">
                    <span class="font-bold text-sky-600 whitespace-nowrap">${(i.price * i.qty).toLocaleString('vi-VN')} VND</span>
                    <button onclick="playClickSound(); posCart.splice(${idx},1); updatePosCartUI()" class="text-rose-500"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join('');
    updatePosChange();
}

let calcStr = "";
function calcInput(val) {
    calcStr += val;
    document.getElementById('calcDisplay').value = calcStr;
    updatePosChange();
}
function calcOp(op) {
    if (!calcStr && op !== '-') return;
    calcStr = calcStr.replace(/[\+\-\*\/]\s*$/, '');
    calcStr += ` ${op} `;
    document.getElementById('calcDisplay').value = calcStr;
}
function calcBackspace() {
    calcStr = calcStr.trim().slice(0, -1).trim();
    document.getElementById('calcDisplay').value = calcStr || "0";
    updatePosChange();
}
function calcClear() {
    calcStr = "";
    document.getElementById('calcDisplay').value = "0";
    updatePosChange();
}
function calcEqual() {
    if (!calcStr) return;
    try {
        if (!/^[0-9+\-*/.\s()]+$/.test(calcStr)) throw new Error("Invalid");
        const res = Function('"use strict";return (' + calcStr + ')')();
        if (!isFinite(res)) throw new Error("Math Error");
        const rounded = Math.round(res * 100) / 100;
        calcStr = String(rounded);
        document.getElementById('calcDisplay').value = Number(rounded).toLocaleString('vi-VN');
        updatePosChange(Number(rounded));
    } catch {
        document.getElementById('calcDisplay').value = "Lỗi phép tính";
        calcStr = "";
    }
}
function updatePosChange(cashGiven = null) {
    const total = posCart.reduce((s, i) => s + i.price * i.qty, 0);
    const given = cashGiven !== null ? cashGiven : (parseFloat(calcStr) || 0);
    const change = Math.max(0, given - total);
    document.getElementById('posChangeText').textContent = `Tiền hồi lại: ${change.toLocaleString('vi-VN')} VND`;
}

function simulateBankQrScanned() {
    if (posCart.length === 0) return showToast("Vui lòng chọn món tại quầy trước khi xuất hóa đơn!");
    const total = posCart.reduce((s, i) => s + i.price * i.qty, 0);
    playAdminNotificationSound();
    showToast(`Nhận thành công ${total.toLocaleString('vi-VN')} VND qua Bank / Ví điện tử!`);
    savePosOrderToSystem("Bank / Ví điện tử (MB VietQR)");
}

function completePosCashOrder() {
    if (posCart.length === 0) return showToast("Vui lòng chọn món tại quầy!");
    savePosOrderToSystem("COD (Tiền mặt tại quầy)");
}

function savePosOrderToSystem(payMethod) {
    const total = posCart.reduce((s, i) => s + i.price * i.qty, 0);
    const now = new Date();
    const dateOnlyStr = now.toLocaleDateString('vi-VN');
    const fullTimeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' ' + dateOnlyStr;

    const newOrder = {
        id: 'QUAY-' + Math.floor(1000 + Math.random() * 9000),
        customer: "Khách tại quầy",
        phone: "Tại quầy JUMJUM",
        email: "Không có",
        address: "Dùng tại JUMJUM",
        note: "Mua trực tiếp tại quầy",
        voucher: "Không",
        items: [...posCart],
        itemsText: posCart.map(i => `${i.name} (SL: ${i.qty})`).join('; '),
        toppingsText: "Không có",
        total: total,
        payMethod: payMethod,
        channel: "Tại quầy",
        status: "Hoàn thành tại quầy",
        receivedByCustomer: true,
        dateStr: dateOnlyStr,
        time: fullTimeStr,
        isNew: false
    };
    orders.unshift(newOrder);
    persistAndSync('jumjum_orders', orders, true);
    posCart = [];
    updatePosCartUI();
    renderAllAdminData();
    renderDailySoldStats();
    openInvoiceModal(0);
    showToast(`Đã lưu đơn ${newOrder.id} & Xuất hóa đơn điện tử!`);
}

function renderDailySoldStats() {
    const todayStr = new Date().toLocaleDateString('vi-VN');
    const itemCounter = {};
    orders.filter(o => o.time.includes(todayStr)).forEach(o => {
        o.items.forEach(item => {
            if (!itemCounter[item.name]) itemCounter[item.name] = { qty: 0, revenue: 0 };
            itemCounter[item.name].qty += item.qty;
            itemCounter[item.name].revenue += item.price * item.qty;
        });
    });
    const entries = Object.entries(itemCounter);
    document.getElementById('dailySoldItemsStats').innerHTML = entries.length === 0
        ? `<div class="text-xs text-slate-400">Hôm nay chưa có món nào được bán ra.</div>`
        : entries.map(([name, data]) => `
            <div class="p-3 rounded-2xl bg-white/80 dark:bg-slate-800 border border-white dark:border-slate-700 flex items-center justify-between gap-2 text-xs">
                <div class="min-w-0">
                    <div class="font-bold text-slate-800 dark:text-white truncate">${name}</div>
                    <div class="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold whitespace-nowrap">Doanh thu: ${data.revenue.toLocaleString('vi-VN')} VND</div>
                </div>
                <span class="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-extrabold whitespace-nowrap shrink-0">SL: ${data.qty}</span>
            </div>
        `).join('');
}

// ==================== QUẢN LÍ THỰC ĐƠN, TOPPING & ẢNH ====================
function renderAdminMenuAndSpaceManager() {
    renderAdminToppingList();

    document.getElementById('adminSpaceGalleryPreview').innerHTML = spaceImages.map((item, idx) => {
        const imgObj = normalizeSpaceImageItem(item, idx);
        return `
            <div class="relative rounded-2xl overflow-hidden h-24 border border-white dark:border-slate-700 shadow-sm group">
                <img src="${imgObj.url}" class="w-full h-full object-cover">
                <span class="absolute bottom-1 left-1.5 right-8 text-[10px] font-bold text-white truncate drop-shadow">${imgObj.caption}</span>
                <button onclick="playClickSound(); deleteSpaceImage(${idx})" class="tactile-btn absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center shadow" title="Xóa">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');

    document.getElementById('adminFoodTagsList').innerHTML = foodTags.map((tag, idx) => `
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/50 text-amber-800 dark:text-amber-200 text-xs font-bold whitespace-nowrap">
            <i class="fa-solid fa-tag text-amber-500"></i> ${tag}
            <button onclick="playClickSound(); deleteFoodTag(${idx})" class="text-rose-500 hover:text-rose-700 ml-1">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </span>
    `).join('');

    document.getElementById('newProdCategorySelect').innerHTML = foodTags.map(t => `<option value="${t}">${t}</option>`).join('');

    document.getElementById('adminProductEditList').innerHTML = products.map((p, idx) => `
        <div class="p-4 rounded-2xl bg-white/85 dark:bg-slate-800 border border-white dark:border-slate-700 space-y-2.5 text-xs shadow-sm">
            <div class="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <div class="flex items-center gap-3 flex-1 w-full min-w-0">
                    <label class="relative cursor-pointer shrink-0 group" title="Tải và cắt ảnh món">
                        <img src="${p.image}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541658016010-618bd0c4cfd2?auto=format&fit=crop&q=80&w=200'" class="w-16 h-16 rounded-xl object-cover border border-slate-200">
                        <span class="absolute inset-0 bg-black/55 text-white rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-bold transition whitespace-nowrap">Cắt ảnh</span>
                        <input type="file" accept="image/*" onchange="openCropperFromInput(this, 1, 'editProduct', ${idx})" class="hidden">
                    </label>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1 w-full">
                        <input type="text" value="${p.name}" onchange="updateExistingProductField(${idx}, 'name', this.value)" placeholder="Tên món" class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 font-bold text-slate-800 dark:text-white border border-transparent focus:border-sky-400 focus:outline-none">
                        <select onchange="updateExistingProductField(${idx}, 'category', this.value)" class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 font-semibold text-sky-700 dark:text-sky-300 border border-transparent focus:border-sky-400 focus:outline-none">
                            ${[...new Set([...foodTags, p.category])].map(tag => `<option value="${tag}" ${p.category === tag ? 'selected' : ''}>${tag}</option>`).join('')}
                        </select>
                        <input type="number" value="${p.price}" onchange="updateExistingProductField(${idx}, 'price', parseInt(this.value))" placeholder="Giá bán" class="px-2.5 py-1.5 rounded-lg bg-sky-50 dark:bg-slate-900 border border-sky-200 dark:border-slate-700 font-bold text-sky-700 dark:text-sky-400 text-right">
                    </div>
                </div>
                <button onclick="playClickSound(); deleteProduct(${idx})" class="tactile-btn w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 self-end sm:self-center" title="Xóa món">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <input type="text" value="${p.image.startsWith('data:') ? '' : p.image}" onchange="if(this.value.trim()) updateExistingProductField(${idx}, 'image', this.value.trim())" placeholder="Dán URL ảnh mới..." class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-[11px] dark:text-slate-300">
                <input type="text" value="${p.desc}" onchange="updateExistingProductField(${idx}, 'desc', this.value)" placeholder="Mô tả món..." class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-[11px] dark:text-slate-300">
            </div>
            <label class="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">
                <input type="checkbox" ${p.hasTopping ? 'checked' : ''} onchange="updateExistingProductField(${idx}, 'hasTopping', this.checked)"> Cho phép chọn Topping thêm
            </label>
        </div>
    `).join('');
}

function deleteSpaceImage(idx) {
    if (confirm("Xóa hình ảnh không gian này?")) {
        spaceImages.splice(idx, 1);
        persistAndSync('jumjum_space_images', spaceImages, true);
        renderSpaceGallery();
        renderAdminMenuAndSpaceManager();
    }
}

function addNewFoodTag() {
    const tagName = document.getElementById('newFoodTagInput').value.trim();
    if (!tagName) return showToast("Vui lòng nhập tên thẻ thức ăn!");
    if (!foodTags.includes(tagName)) {
        foodTags.push(tagName);
        persistAndSync('jumjum_food_tags', foodTags, true);
        document.getElementById('newFoodTagInput').value = "";
        renderCategories();
        renderAdminMenuAndSpaceManager();
        showToast(`Đã thêm thẻ thức ăn "${tagName}"!`);
    } else {
        showToast("Thẻ thức ăn này đã tồn tại!");
    }
}

function deleteFoodTag(idx) {
    if (foodTags.length <= 1) return showToast("Cần giữ lại ít nhất một thẻ thức ăn!");
    const removed = foodTags.splice(idx, 1);
    persistAndSync('jumjum_food_tags', foodTags, true);
    renderCategories();
    renderAdminMenuAndSpaceManager();
    showToast(`Đã xóa thẻ thức ăn "${removed[0]}"!`);
}

function previewNewProductUrl(url) {
    const trimmed = url.trim();
    if (trimmed) {
        newUploadedProductImgBase64 = trimmed;
        document.getElementById('newProdPreviewImg').src = trimmed;
        document.getElementById('newProdPreviewBox').classList.remove('hidden');
    }
}

function addNewProduct() {
    const name = document.getElementById('newProdName').value.trim();
    const category = document.getElementById('newProdCategorySelect').value || foodTags[0] || "Thức Uống";
    const price = parseInt(document.getElementById('newProdPrice').value);
    const hasTopping = document.getElementById('newProdHasTopping').checked;
    const desc = document.getElementById('newProdDesc').value.trim() || "Hương vị tươi mới đặc trưng từ JUMJUM.";
    const urlImg = document.getElementById('newProdImageUrl').value.trim();

    if (!name || !price) return showToast("Vui lòng nhập Tên món và Giá bán!");

    products.unshift({
        id: 'p' + Date.now(),
        name: name,
        category: category,
        price: price,
        desc: desc,
        image: newUploadedProductImgBase64 || urlImg || "https://images.unsplash.com/photo-1541658016010-618bd0c4cfd2?auto=format&fit=crop&q=80&w=600",
        hasTopping: hasTopping
    });

    if (persistAndSync('jumjum_products', products, true)) {
        newUploadedProductImgBase64 = "";
        document.getElementById('newProdName').value = '';
        document.getElementById('newProdPrice').value = '';
        document.getElementById('newProdDesc').value = '';
        document.getElementById('newProdImageUrl').value = '';
        document.getElementById('newProdImageFile').value = '';
        document.getElementById('newProdImgLabel').textContent = 'Tải & Cắt ảnh món (1:1)';
        document.getElementById('newProdPreviewBox').classList.add('hidden');

        renderCategories();
        renderProducts();
        renderAdminMenuAndSpaceManager();
        showToast(`Đã thêm món "${name}" vào thực đơn!`);
    }
}

function updateExistingProductField(idx, field, val) {
    if (!val && val !== 0 && typeof val !== 'boolean') return;
    products[idx][field] = val;
    persistAndSync('jumjum_products', products, true);
    renderCategories();
    renderProducts();
    renderAdminMenuAndSpaceManager();
    showToast("Đã cập nhật thông tin món!");
}

function deleteProduct(idx) {
    if (confirm("Xóa món này khỏi thực đơn?")) {
        products.splice(idx, 1);
        persistAndSync('jumjum_products', products, true);
        renderCategories();
        renderProducts();
        renderAdminMenuAndSpaceManager();
    }
}

function sendBroadcastToCustomers() {
    const msg = document.getElementById('adminBroadcastInput').value.trim();
    broadcastMsg = msg;
    localStorage.setItem('jumjum_broadcast', msg);
    renderBroadcastBanner();
    if (getCloudEndpoint()) pushAllDataToCloud(false);
    showToast(msg ? "Đã phát thông báo đến khách hàng!" : "Đã tắt thông báo!");
}

// ==================== ĐÁNH GIÁ ====================
function handleStarClick(event, starIndex) {
    playClickSound();
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const isHalf = clickX < rect.width / 2;
    selectedStar = isHalf ? starIndex - 0.5 : starIndex;
    updateStarSelectorUI();
}

function updateStarSelectorUI() {
    document.getElementById('selectedStarLabel').textContent = `${selectedStar.toFixed(1)} / 5 sao`;
    for (let i = 1; i <= 5; i++) {
        const icon = document.getElementById(`star-icon-${i}`);
        if (selectedStar >= i) {
            icon.className = "fa-solid fa-star text-amber-400";
        } else if (selectedStar >= i - 0.5) {
            icon.className = "fa-solid fa-star-half-stroke text-amber-400";
        } else {
            icon.className = "fa-regular fa-star text-slate-300";
        }
    }
}

function renderStarsHtml(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) html += '<i class="fa-solid fa-star"></i>';
        else if (rating >= i - 0.5) html += '<i class="fa-solid fa-star-half-stroke"></i>';
        else html += '<i class="fa-regular fa-star"></i>';
    }
    return html;
}

function clearReviewPhoto() {
    reviewPhotoBase64 = "";
    document.getElementById('reviewPhotoInput').value = "";
    document.getElementById('reviewPhotoPreviewWrap').classList.add('hidden');
}

function submitReview() {
    const comment = document.getElementById('reviewComment').value.trim();
    if (!comment) return showToast("Vui lòng nhập nội dung đánh giá!");
    const nameInput = document.getElementById('reviewName').value.trim();
    const userName = nameInput || (currentUser ? currentUser.name : "Khách hàng JUMJUM");

    reviews.unshift({
        id: Date.now(),
        user: userName,
        rating: selectedStar,
        comment: comment,
        date: new Date().toLocaleDateString('vi-VN'),
        photo: reviewPhotoBase64
    });
    persistAndSync('jumjum_reviews', reviews, true);
    document.getElementById('reviewComment').value = '';
    clearReviewPhoto();
    renderReviews();
    playAdminNotificationSound();
    showToast("Cảm ơn bạn đã gửi đánh giá cho JUMJUM!");
}

function renderReviews() {
    document.getElementById('reviewList').innerHTML = reviews.map(r => `
        <div class="liquid-glass tactile-card p-4 shadow-sm">
            <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                        ${r.user.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <div class="text-xs font-bold text-slate-800 dark:text-white whitespace-nowrap">${r.user}</div>
                        <div class="text-amber-400 text-[11px] flex items-center gap-1 whitespace-nowrap">
                            ${renderStarsHtml(r.rating)} <span class="text-slate-500 dark:text-slate-400 font-bold ml-1">(${r.rating})</span>
                        </div>
                    </div>
                </div>
                <span class="text-[11px] text-slate-400 whitespace-nowrap">${r.date}</span>
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">${r.comment}</p>
            ${r.photo ? `<img src="${r.photo}" class="mt-2.5 w-28 h-28 rounded-2xl object-cover border border-white/80 shadow-md">` : ''}
        </div>
    `).join('');
}

// ==================== NHẠC NỀN VÀ MÃ QR ====================
function toggleMusic() {
    const audio = document.getElementById('bgAudio');
    const wrap = document.getElementById('musicIconWrap');
    const txt = document.getElementById('musicStatusText');

    if (!isPlayingMusic) {
        audio.play().then(() => {
            isPlayingMusic = true;
            wrap.classList.add('spinning');
            txt.textContent = "Đang phát";
            showToast("Đang phát nhạc nền JUMJUM MUSIC");
        }).catch(() => showToast("Không thể phát nhạc, hãy chạm lại để bật!"));
    } else {
        audio.pause();
        isPlayingMusic = false;
        wrap.classList.remove('spinning');
        txt.textContent = "Nhạc nền";
    }
}

function generateWebQR() {
    const qrContainer = document.getElementById('qrcodeCanvas');
    if (!qrContainer) return;
    qrContainer.innerHTML = '';
    const webUrl = window.location.href.startsWith('http') ? window.location.href : 'https://jumjum-shop.vn';
    new QRCode(qrContainer, {
        text: webUrl,
        width: 148,
        height: 148,
        colorDark: "#0284c7",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadAestheticQR() {
    const qrImg = document.querySelector('#qrcodeCanvas img');
    const qrCanvas = document.querySelector('#qrcodeCanvas canvas');
    const sourceEl = qrImg || qrCanvas;
    if (!sourceEl) return showToast("Mã QR chưa sẵn sàng!");

    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = 340;
    exportCanvas.height = 410;
    const ctx = exportCanvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 0, 410);
    grad.addColorStop(0, '#e0f2fe');
    grad.addColorStop(1, '#ffffff');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(0, 0, 340, 410, 28);
    ctx.fill();

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(8, 8, 324, 394, 24);
    ctx.stroke();

    ctx.fillStyle = '#0369a1';
    ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('JUMJUM', 170, 52);

    ctx.fillStyle = '#0284c7';
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Quét mã để truy cập & đặt món', 170, 76);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(70, 96, 200, 200, 18);
    ctx.fill();
    ctx.drawImage(sourceEl, 85, 111, 170, 170);

    ctx.fillStyle = '#334155';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Taste the Fresh, Feel the Joy', 170, 338);

    ctx.fillStyle = '#64748b';
    ctx.font = '11px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Nguyễn Văn Cánh, P. Phú Tân, Vĩnh Long', 170, 360);

    const link = document.createElement('a');
    link.download = 'JUMJUM-QR-Code.png';
    link.href = exportCanvas.toDataURL('image/png');
    link.click();
    showToast("Đã tải mã QR JUMJUM!");
}

function switchQrMode(mode) {
    const myQrSec = document.getElementById('myQrSection');
    const scanQrSec = document.getElementById('scanQrSection');
    const btnMy = document.getElementById('btnShowMyQr');
    const btnScan = document.getElementById('btnScanQr');

    if (mode === 'myqr') {
        myQrSec.classList.remove('hidden');
        scanQrSec.classList.add('hidden');
        btnMy.className = "flex-1 py-2 rounded-xl bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 shadow-sm transition whitespace-nowrap";
        btnScan.className = "flex-1 py-2 rounded-xl text-slate-600 dark:text-slate-400 transition whitespace-nowrap";
        stopQrScanner();
    } else {
        myQrSec.classList.add('hidden');
        scanQrSec.classList.remove('hidden');
        btnScan.className = "flex-1 py-2 rounded-xl bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 shadow-sm transition whitespace-nowrap";
        btnMy.className = "flex-1 py-2 rounded-xl text-slate-600 dark:text-slate-400 transition whitespace-nowrap";
        startQrScanner();
    }
}

function startQrScanner() {
    const resultText = document.getElementById('scanResultText');
    if (!window.Html5Qrcode) {
        resultText.textContent = "Trình duyệt chưa tải được thư viện quét mã QR.";
        return;
    }
    html5QrCode = new Html5Qrcode("qr-reader");
    html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 210, height: 210 } },
        (decodedText) => {
            resultText.textContent = `Đã quét thấy: ${decodedText}`;
            showToast("Đã quét thành công mã QR!");
            if (decodedText.startsWith('http')) {
                setTimeout(() => window.open(decodedText, '_blank'), 800);
            }
            stopQrScanner();
        },
        () => {}
    ).catch(() => {
        resultText.textContent = "Hãy cấp quyền Camera để quét mã QR.";
    });
}

function stopQrScanner() {
    if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode.stop().catch(() => {});
    }
}

function closeQrModal() {
    stopQrScanner();
    closeModal('qrModal');
}

function copyWebLink() {
    const link = window.location.href.startsWith('http') ? window.location.href : 'https://jumjum-shop.vn';
    navigator.clipboard.writeText(link).then(() => showToast("Đã sao chép liên kết JUMJUM!"));
}

function togglePasswordVisibility() {
    const input = document.getElementById('shopPassInput');
    const icon = document.getElementById('eyeIcon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = "fa-solid fa-eye-slash";
    } else {
        input.type = 'password';
        icon.className = "fa-solid fa-eye";
    }
}

function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

let toastTimer;
function showToast(msg) {
    const box = document.getElementById('toastBox');
    document.getElementById('toastMsg').textContent = msg;
    box.classList.remove('opacity-0', '-translate-y-3');
    box.classList.add('opacity-100', 'translate-y-0');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        box.classList.remove('opacity-100', 'translate-y-0');
        box.classList.add('opacity-0', '-translate-y-3');
    }, 2800);
}
