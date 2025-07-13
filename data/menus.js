export const menuItems = [
    {
        title: "Home",
        link: "/",
        active: true,
        hasHomeMenu: true, // Special key for handling home images
        // submenu: [
        //     {
        //         title: "Home 01",
        //         link: "/",
        //         image: new URL("@/assets/img/header/home-1.jpg", import.meta.url),
        //     },
        //     {
        //         title: "Home 02",
        //         link: "/home-2",
        //         image: new URL("@/assets/img/header/home-2.jpg", import.meta.url),
        //     },
        //     {
        //         title: "Home 03",
        //         link: "/home-3",
        //         image: new URL("@/assets/img/header/home-3.jpg", import.meta.url),
        //     },
        // ],
    },
    {
        title: "Pages",
        link: "/news",
        submenu: [
            { title: "About Us", link: "/about" },
            { title: "Team", link: "/team" },
            // { title: "Team Details", link: "/team/details" },
            // { title: "Shop", link: "/shop" },
            // { title: "Shop Cart", link: "/shop-cart" },
            // { title: "Shop Details", link: "/shop/details" },
            // { title: "Checkout", link: "/checkout" },
            { title: "Our FAQ", link: "/faq" },
            // { title: "404 Page", link: "/404" },
        ],
    },
    {
        title: "Services",
        link: "/services/details",
        submenu: [
            { title: "Service Page", link: "/services" },
            { title: "Service Details", link: "/services/details" },
        ],
    },
    // {
    //     title: "Projects",
    //     link: "/project",
    //     submenu: [
    //         { title: "Projects", link: "/project" },
    //         { title: "Project Details", link: "/project/details" },
    //     ],
    // },
    {
        title: "Blog",
        link: "/news/details",
        submenu: [
            { title: "Blog", link: "/news" },
            // { title: "Blog Details", link: "/news/details" },
        ],
    },
    {
        title: "Contact",
        link: "/contact",
    },
];