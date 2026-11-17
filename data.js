// data.js - Dữ liệu hoàn chỉnh cho cửa hàng JUMJUM
const SHOP_DATA = {
    info: {
        name: "JUMJUM",
        slogan: "Taste the Fresh, Feel the Joy",
        address: "Nguyễn Văn Cánh, P. Phú Tân, Vĩnh Long",
        hotline: "0876.935.873",
        avatar: "images/jumjumshop.png",
        favicon: "images/jumjumshop.png",
        
        // Liên kết và Icon mạng xã hội
        zaloUrl: "https://zalo.me/0398476794",
        zaloIcon: "images/zalo.png",
        facebookUrl: "https://www.facebook.com/nhzt.wiie",
        facebookIcon: "images/facebook.png",
        
        // Âm thanh & Nhạc nền
        bgMusic: "audio/jumjum music.mp3",
        musicTitle: "JUMJUM MUSIC"
    },

    // Danh mục phân loại (tùy chọn dùng để lọc món)
    categories: [
        { id: "all", name: "Tất cả" },
        { id: "tra-sua", name: "Trà Sữa" },
        { id: "tra-trai-cay", name: "Trà Trái Cây" },
        { id: "an-vat", name: "Ăn Vặt" }
    ],

    // Danh sách món ăn / thức uống (Bạn chỉ cần copy/paste thêm các object bên trong mảng này)
    products: [
        {
            id: 1,
            name: "Trà Sữa Trân Châu Đường Đen",
            category: "tra-sua",
            price: 25000,
            image: "images/mon-1.jpg",
            description: "Sữa tươi thanh trùng kết hợp trân châu đường đen dẻo mềm nấu mới mỗi ngày.",
            badge: "Best Seller" // Có thể để trống "" nếu không cần nhãn nổi bật
        },
        {
            id: 2,
            name: "Trà Đào Cam Sả",
            category: "tra-trai-cay",
            price: 28000,
            image: "images/mon-2.jpg",
            description: "Hương vị thanh mát từ trà đen ủ lạnh, đào miếng giòn ngọt và sả tươi.",
            badge: "Mới"
        },
        {
            id: 3,
            name: "Trà Mãng Cầu Tươi",
            category: "tra-trai-cay",
            price: 30000,
            image: "images/mon-3.jpg",
            description: "Mãng cầu xiêm dầm tươi chua ngọt hài hòa, giải nhiệt tức thì.",
            badge: ""
        },
        {
            id: 4,
            name: "Mẹt Ăn Vặt Thập Cẩm",
            category: "an-vat",
            price: 45000,
            image: "images/mon-4.jpg",
            description: "Đầy đủ cá viên, bò viên, xúc xích, phô mai que chiên giòn rụm kèm tương chấm đặc biệt.",
            badge: "Hot"
        }
    ]
};
```[cite: 1]

**Hướng dẫn thêm món mới vào `products`:**
* Copy một cụm từ dấu `{` đến `},` bên trong phần `products`.
* Tăng số `id` lên (ví dụ: `5`, `6`, `7`...) để không bị trùng lặp khi xử lý giỏ hàng hoặc chi tiết món.
* Cập nhật `name` (tên món), `price` (giá dạng số nguyên để dễ tính tổng tiền), `image` (đường dẫn ảnh trong thư mục `images/`), và `description` (mô tả ngắn).
