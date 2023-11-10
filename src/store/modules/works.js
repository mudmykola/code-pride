const state = {
    works: [
        {
            id: 1,
            title: "Meet your dedicated personal matcher",
            number: "01",
            desc: "Share your specific requirements over a 25-minute call, at your convenience. Have a question? We’re all ears.",
            imageUrl: "works-img-1.png",
            imageAlt: "woks-img"
        },
        {
            id: 2,
            title: "Get your personally matched developers",
            number: "02",
            desc: "After an average of 2 days, receive a selection of handpicked, ready-to-work developers for your consideration.",
            imageUrl: "works-img-2.png",
            imageAlt: "woks-img"
        },
        {
            id: 3,
            title: "Achieve excellence",
            number: "03",
            desc: "Integrate your new developer(s) quickly and easily. Worried about invoicing? We’ll take care of that, so you can focus on delivering results.",
            imageUrl: "works-img-3.png",
            imageAlt: "woks-img"
        },


    ]
};

const getters = {
    allWorks: (state) => state.works
};

export default {
    state,
    getters
};
