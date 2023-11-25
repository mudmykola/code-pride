const state = {
    persone: [
        {
            id: 1,
            name: 'persone-1',
            imageUrl: "discover-persone-1.png",
            hiringNumTitle: "Competencies in our network",
            hiringNum: "500+"
        },
        {
            id: 2,
            name: 'persone-2',
            imageUrl: "discover-persone-2.png",
            hiringNumTitle: "Average matching time",
            hiringNum: "2 days"
        },
        {
            id: 3,
            name: 'persone-3',
            imageUrl: "discover-persone-3.png",
            hiringNumTitle: "Match success rate",
            hiringNum: "94%"

        },

    ]
};

const getters = {
    allPersone: (state) => state.persone
};

export default {
    state,
    getters
};
