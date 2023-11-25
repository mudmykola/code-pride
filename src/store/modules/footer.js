const state = {
    footer: [
        {
            id: 1,
            imageUrl: "instagram.png",
            imageAlt: "social-img",
            link: "https://www.instagram.com/"
        },
        {
            id: 2,
            imageUrl: "linkedin.png",
            imageAlt: "social-img",
            link: "https://www.instagram.com/"
        },
        {
            id: 3,
            imageUrl: "facebook.png",
            imageAlt: "social-img",
            link: "https://www.instagram.com/"
        },


    ]
};

const getters = {
    allFooters: (state) => state.footer
};

export default {
    state,
    getters
};
