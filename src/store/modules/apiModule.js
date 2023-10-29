// apiModule.js
import axios from "axios";

export default {
    state: {
        apiData: null,
    },
    mutations: {
        setApiData(state, data) {
            state.apiData = data;
        },
    },
    actions: {
        async fetchApiData({ commit }) {
            try {
                const response = await axios.get(
                    "https://test-60f30rfp7-mudmykola.vercel.app/content-api.json"
                );
                commit("setApiData", response.data);

                localStorage.setItem("apiData", JSON.stringify(response.data));
            } catch (error) {
                console.error("Помилка при завантаженні даних API:", error);
            }
        },
    },
    getters: {
        apiData: (state) => state.apiData,
    },
};
