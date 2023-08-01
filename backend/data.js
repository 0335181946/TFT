import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            username: "Admin",
            email: "admin123@gmail.com",
            password: bcrypt.hashSync("admin123"),
            isAdmin: true
        }
    ],

    blogs: [
        {
            title: "Nike Zoom Mercurial CR7 World Cup 2022",
            description: "Vừa qua, Nike đã chính thức trình làng Zoom Mercurial CR7 World Cup 2022 - phiên bản signature dành riêng cho Cristiano Ronaldo tại kỳ World Cup sắp tới đây. Đây là mẫu giày độc đáo với những họa tiết độc quyền nhằm tôn vinh nền văn hoá và kiến trúc của Bồ Đào Nha. Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal tìm hiểu thêm về mẫu giày đá banh Zoom Mercurial CR7 World Cup 2022 mới nhất lần này nhé!",
        },
        {
            title: "Khám phá adidas x Karim Benzema Ballon d'Or collection",
            description: "Vừa qua, Nike đã chính thức trình làng Zoom Mercurial CR7 World Cup 2022 - phiên bản signature dành riêng cho Cristiano Ronaldo tại kỳ World Cup sắp tới đây. Đây là mẫu giày độc đáo với những họa tiết độc quyền nhằm tôn vinh nền văn hoá và kiến trúc của Bồ Đào Nha. Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal tìm hiểu thêm về mẫu giày đá banh Zoom Mercurial CR7 World Cup 2022 mới nhất lần này nhé!",
        },
        {
            title: "Khám phá Mizuno “Dark Iridium Pack",
            description: "Vừa qua, Nike đã chính thức trình làng Zoom Mercurial CR7 World Cup 2022 - phiên bản signature dành riêng cho Cristiano Ronaldo tại kỳ World Cup sắp tới đây. Đây là mẫu giày độc đáo với những họa tiết độc quyền nhằm tôn vinh nền văn hoá và kiến trúc của Bồ Đào Nha. Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal tìm hiểu thêm về mẫu giày đá banh Zoom Mercurial CR7 World Cup 2022 mới nhất lần này nhé!",
        },
        {
            title: "Tiempo Legend 9 “Made in Italy",
            description: "Vừa qua, Nike đã chính thức trình làng Zoom Mercurial CR7 World Cup 2022 - phiên bản signature dành riêng cho Cristiano Ronaldo tại kỳ World Cup sắp tới đây. Đây là mẫu giày độc đáo với những họa tiết độc quyền nhằm tôn vinh nền văn hoá và kiến trúc của Bồ Đào Nha. Trong phạm vi bài viết ngày hôm nay, hãy cùng Thanh Hùng Futsal tìm hiểu thêm về mẫu giày đá banh Zoom Mercurial CR7 World Cup 2022 mới nhất lần này nhé!",
        }
    ],
    products: [
        {
            title: "nike mercurial 1",
            category: "nike",
            subcategory: "mercurial",
            description: "Đầu tháng 02/2020 vừa qua Nike đã cho ra mắt đã cho ra mắt giới mộ điệu Nike React Gato kế thừa người tiền nhiệm Nike Lunar Gato II trong phân khúc những dòng giày dành riêng cho thị trường futsal của Nike. Theo giới chuyên giày Nike React Gato là sự kế thừa cực kỳ xứng đáng nếu không muốn nói là vượt mặt cả người đàn anh Lunar Gato II trước đây.",
            price: "400",
            sizes: [
                {
                    title: "36"
                },
                {
                    title: "37"
                },
                {
                    title: "38"
                },
                {
                    title: "39"
                },
                {
                    title: "40"
                },
                {
                    title: "41"
                },
                {
                    title: "42"
                },
            ],
            image: "https://product.hstatic.net/200000278317/product/-banh-nike-zoom-mercurial-superfly-9-academy-tf-dj5629-780-vang-hong-1_4e5cadae556240b482d76a7cba5d7b42.jpg",
            imageOne: "https://product.hstatic.net/200000278317/product/-banh-nike-zoom-mercurial-superfly-9-academy-tf-dj5629-780-vang-hong-2_446aa38ebfef4c7ba1437c233f8ef113_master.jpg",
        },
        {
            title: "nike mercurial 1",
            category: "nike",
            subcategory: "mercurial",
            description: "Đầu tháng 02/2020 vừa qua Nike đã cho ra mắt đã cho ra mắt giới mộ điệu Nike React Gato kế thừa người tiền nhiệm Nike Lunar Gato II trong phân khúc những dòng giày dành riêng cho thị trường futsal của Nike. Theo giới chuyên giày Nike React Gato là sự kế thừa cực kỳ xứng đáng nếu không muốn nói là vượt mặt cả người đàn anh Lunar Gato II trước đây.",
            price: "400",
            sizes: [
                {
                    title: "36"
                },
                {
                    title: "37"
                },
                {
                    title: "38"
                },
                {
                    title: "39"
                },
                {
                    title: "40"
                },
                {
                    title: "41"
                },
                {
                    title: "42"
                },
            ],
            image: "https://product.hstatic.net/200000278317/product/-banh-nike-zoom-mercurial-superfly-9-academy-tf-dj5629-780-vang-hong-1_4e5cadae556240b482d76a7cba5d7b42.jpg",
            imageOne: "https://product.hstatic.net/200000278317/product/-banh-nike-zoom-mercurial-superfly-9-academy-tf-dj5629-780-vang-hong-2_446aa38ebfef4c7ba1437c233f8ef113_master.jpg",
        },
        {
            title: "nike mercurial 1",
            category: "nike",
            subcategory: "mercurial",
            description: "Đầu tháng 02/2020 vừa qua Nike đã cho ra mắt đã cho ra mắt giới mộ điệu Nike React Gato kế thừa người tiền nhiệm Nike Lunar Gato II trong phân khúc những dòng giày dành riêng cho thị trường futsal của Nike. Theo giới chuyên giày Nike React Gato là sự kế thừa cực kỳ xứng đáng nếu không muốn nói là vượt mặt cả người đàn anh Lunar Gato II trước đây.",
            price: "400",
            sizes: [
                {
                    title: "36"
                },
                {
                    title: "37"
                },
                {
                    title: "38"
                },
                {
                    title: "39"
                },
                {
                    title: "40"
                },
                {
                    title: "41"
                },
                {
                    title: "42"
                }
            ],
            image: "https://product.hstatic.net/200000278317/product/giay-da-banh-nike-tiempo-legend-9-academy-ic-da1190-002-trang-vang-1_fbe0f6fe255a4a8b8b8b8b0f185d8bbf_master.jpg",
            imageOne: "https://product.hstatic.net/200000278317/product/giay-da-banh-nike-tiempo-legend-9-academy-ic-da1190-002-trang-vang-2_a5afda8c4b494169b8149e96f690d3f2_master.jpg",
        }
    ],

    category: [
        {
            value: 'nike',
            label: 'nike'
        },
        {
            value: 'adidas',
            label: 'adidas'
        },
        {
            value: 'mizuno',
            label: 'mizuno'
        },
        {
            value: 'puma',
            label: 'puma'
        }
    ],

    subcategory: [
        {
            checked: false,
            label: "san5"
        },
        {
            checked: false,
            label: "futsal"
        },
        {
            checked: false,
            label: "san11"
        },
    ]
}

export default data;