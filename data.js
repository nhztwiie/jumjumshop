// data.js - Dữ liệu hệ thống JUMJUM
const SHOP_DATA = {
    info: {
        name: "JUMJUM",
        slogan: "Chạm vị thanh mát — Trọn khoảnh khắc say mê",
        address: "Nguyễn Văn Cánh, P. Phú Tân, Vĩnh Long",
        hotline: "0576.935.873",
        avatar: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=300&q=80",
        bgMusic: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Link nhạc nền chill (có thể thay bằng link mp3 của bạn)
        musicTitle: "Chill Vibes - JUMJUM Lounge"
    },
    adminAccount: {
        email: "jumjumshop@gmail.com",
        password: "jumjumshop161126",
        role: "shop",
        name: "Quản trị viên JUMJUM"
    },
    products: [
        {
            id: "sp01",
            name: "Trà Sữa Trân Châu Đường Đen",
            category: "Trà Sữa",
            price: 35000,
            image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=500&q=80",
            desc: "Hồng trà đậm vị hòa quyện cùng sữa tươi thanh trùng và trân châu đường đen nấu thủ công dẻo mềm."
        },
        {
            id: "sp02",
            name: "Trà Đào Cam Sả Nhiệt Đới",
            category: "Trà Trái Cây",
            price: 32000,
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",
            desc: "Thanh mát sảng khoái với đào miếng giòn ngọt, cam vàng tươi mọng nước và hương sả dịu nhẹ."
        },
        {
            id: "sp03",
            name: "Matcha Latte Kem Muối",
            category: "Đặc Biệt",
            price: 42000,
            image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=500&q=80",
            desc: "Bột Matcha Uji Nhật Bản thượng hạng phủ lớp kem muối biển béo mặn hài hòa."
        },
        {
            id: "sp04",
            name: "Cà Phê Muối Huế",
            category: "Cà Phê",
            price: 29000,
            image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
            desc: "Cà phê phin truyền thống đậm đà kết hợp cùng kem sữa mặn mịn màng tan chảy."
        },
        {
            id: "sp05",
            name: "Trà Vải Hoa Hồng",
            category: "Trà Trái Cây",
            price: 34000,
            image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=500&q=80",
            desc: "Hương hoa hồng tự nhiên thoang thoảng cùng trái vải thiều mọng nước ngọt thanh."
        },
        {
            id: "sp06",
            name: "Bánh Croissant Trứng Muối",
            category: "Bánh Ngọt",
            price: 38000,
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
            desc: "Vỏ bánh ngàn lớp giòn rụm ôm trọn nhân sốt trứng muối tan chảy béo ngậy."
        }
    ],
    initialReviews: [
        {
            id: 1,
            user: "Minh Thư",
            rating: 5,
            comment: "Quán decor siêu xinh, trà sữa đường đen trân châu mềm dẻo vừa miệng lắm luôn!",
            date: "15/11/2026"
        },
        {
            id: 2,
            user: "Hoàng Nam",
            rating: 5,
            comment: "Giao hàng nhanh ở khu vực Phú Tân, Matcha kem muối đỉnh của chóp.",
            date: "14/11/2026"
        }
    ]
};
