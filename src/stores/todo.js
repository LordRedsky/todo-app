import { defineStore } from 'pinia'

export default defineStore('todo', {
    state: () => ({
        priority_item: [
            {
                title: "Very Hight",
                color: "#ed4c5c"
            },
            {
                title: "Hight",
                color: "#f8a541"
            },
            {
                title: "Medium",
                color: "#00a790"
            },
            {
                title: "Low",
                color: "#428bc1"
            },
            {
                title: "Very Low",
                color: "#8942c1"
            }
        ],
        selected: {
            title: "Pilih priority",
            color: ""
        },
        todo_lists: [],
    })
})
