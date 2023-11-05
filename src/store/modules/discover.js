const state = {
    persone: [
        {
            id: 1,
            name: 'persone-1',
            imageUrl: "discover-persone-1.png"
        },
        {
            id: 2,
            name: 'persone-2',
            imageUrl: "discover-persone-2.png"
        },
        {
            id: 3,
            name: 'persone-3',
            imageUrl: "discover-persone-3.png"
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
