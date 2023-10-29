const state = {
    developers: [
        {
            id: 1,
            name: "Andrews P",
            profession: "Ruby on Rails Developer",
            skills: ["Ruby", "Rubi on Rails"],
            imageUrl: "dev-img-1.png"
        },
        {
            id: 2,
            name: "Floyd Miles",
            profession: "Frontend Developer",
            skills: ["React.js", "Angular", "JavaScript"],
            imageUrl: "dev-img-2.png"
        },
        {
            id: 3,
            name: "Bessie Cooper",
            profession: "PHP Developer",
            skills: ["PHP", "Symfony", "Vue.js"],
            imageUrl: "dev-img-3.png"
        },
        {
            id: 4,
            name: "Marvin McKinney",
            profession: "Backend Developer",
            skills: ["C#", ".NET", "MSSQL"],
            imageUrl: "dev-img-4.png"
        },
    ]
};

const getters = {
    allDevelopers: (state) => state.developers
};

export default {
    state,
    getters
};
