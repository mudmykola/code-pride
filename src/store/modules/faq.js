export default {
    state: {
        faqList: [
            {
                id: 1,
                title: 'How long does it take to get started?',
                desc: 'We can match the right developer to your company within days, not weeks or months. We will present as many relevant, pre-vetted candidates as necessary and the choice is always yours.',
                isOpen: false,
            },
            {
                id: 2,
                title: 'What type of technical expertise does CODEPRIDE offer?',
                desc: 'Out team of 25+ matchers are dedicated to personally selecting developers that suit your business requirements.',
                isOpen: false,
            },
            {
                id: 3,
                title: 'How can Proxify be sure that its the developer my company needs?',
                desc: 'Accelerate your business growth with an average matching time of 2 days.',
                isOpen: false,
            },
            {
                id: 4,
                title: 'Does CODEPRIDE take care of leading the project?',
                desc: 'Accelerate your business growth with an average matching time of 2 days.',
                isOpen: false,
            },
            {
                id: 5,
                title: 'Do the developers speak English?',
                desc: 'Accelerate your business growth with an average matching time of 2 days.',
                isOpen: false,
            },
            {
                id: 6,
                title: 'What type of technical expertise does CODEPRIDE offer?',
                desc: 'Accelerate your business growth with an average matching time of 2 days.',
                isOpen: false,
            },
        ],
    },
    getters: {
        GET_FAQ(state) {
            return state.faqList;
        }
    }
}