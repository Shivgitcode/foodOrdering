import { Instagram, Twitter, facebook, img1, img2, img3, whatsapp } from "../assets"

export const navbar = [
    { id: 1, name: "Home", link: "Home", active: true },
    { id: 2, name: "Product", link: "product", active: false },
    { id: 3, name: "Promo", link: "promo", active: false },
    { id: 4, name: "About", link: "About", active: false },
    { id: 5, name: "Contact", link: "contact", active: false }
]

export const bestSellar = [
    { id: 1, img: img1, name: "Title Here", lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, img: img2, name: "Title Here", lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, img: img3, name: "Title Here", lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

export const info = [
    { id: 1, count: 123, name: "outlets" },
    { id: 2, count: 100, name: "chef" },
    { id: 3, count: 300, name: "menu" },
    { id: 4, count: 30, name: "country" },
]

export const icons = [
    { id: 1, img: Instagram },
    { id: 2, img: facebook },
    { id: 3, img: Twitter },
    { id: 4, img: whatsapp },
]

export const footer = [
    {
        id: 1, title: "About", links: [
            "History",
            "Our Team",
            "Brand Guidelines",
            "Terms & Condition",
            "Privacy Policy"
        ]
    },
    {
        id: 2, title: "Services", links: [
            "How to Order",
            "Our Product",
            "Order Status",
            "Promo",
            "Payment Method"
        ]
    },
    {
        id: 3, title: "Other", links: [
            "Contact Us",
            "Help",
            "Privacy",
        ]
    },

]