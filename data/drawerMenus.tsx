import Icons from "../components/Icons";

export const MenuService = {
    title: "Our Services",
    menus: [
        {
            title: "Launch with MssTechno",
            path: "/services"
        },
        {
            title: "Migrate to MssTechno",
            path: "/projects"
        },
        {
            title: "Partner Services",
            path: "/contact-us"
        },
        {
            title: "Professional Services",
            path: "/projects/business-development"
        }
    ]
}

export const MenuContact = {
    title: "Quick Contact",
    menus: [
        {
            title: "Peel House, 30 The Downs",
            path: null,
            icon: <Icons.Location />
        },
        {
            title: "+01234567890",
            path: "tel:+001234567890",
            icon: <Icons.Phone />
        },
        {
            title: "msstechno@email.com",
            path: "mailto:msstechno@email.com",
            icon: <Icons.Envelope />
        }
    ]
}
