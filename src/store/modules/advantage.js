export default {
    state: {
        advantageList: [
            {
                id: 1,
                title: 'Hire in 2 days, not 200',
                desc: 'Accelerate your business growth with an average matching time of 2 days.'
            },
            {
                id: 2,
                title: 'Handpicked talent',
                desc: 'Out team of 25+ matchers are dedicated to personally selecting developers that suit your business requirements.'
            },
            {
                id: 3,
                title: 'Hire in 2 days, not 200',
                desc: 'Accelerate your business growth with an average matching time of 2 days.'
            },
        ],
    },
    getters: {
        GET_ADVANTAGE(state) {
            return state.advantageList;
        }
    }
}