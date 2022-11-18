import { defineStore } from 'pinia'
import { BASE_URL } from '../API/baseURL'
import { email } from '../helper/user-email'
import axios from 'axios'
import convertDateDBtoIndo from '../helper/date-convert'

export default defineStore('activity', {
    state: () => ({
        activities: [],
        raw_data: [
            {
                id: 1,
                title: "Bertemu Dokter",
                created_at: "Fri Nov 14 2022 09:47:13 GMT+0800 (Central Indonesia Time)",
                updated_at: "Fri Nov 14 2022 09:47:13 GMT+0800 (Central Indonesia Time)"
            },
            {
                id: 2,
                title: "Bertemu Teman",
                created_at: "Fri Nov 15 2022 09:50:13 GMT+0800 (Central Indonesia Time)",
                updated_at: "Sat Nov 15 2022 09:50:13 GMT+0800 (Central Indonesia Time)"
            },
            {
                id: 3,
                title: "Beli Beras",
                created_at: "Sun Nov 16 2022 09:50:13 GMT+0800 (Central Indonesia Time)",
                updated_at: "Sun Nov 16 2022 09:50:13 GMT+0800 (Central Indonesia Time)"
            },
            {
                id: 4,
                title: "Beli Hp",
                created_at: "Sun Nov 17 2022 19:50:13 GMT+0800 (Central Indonesia Time)",
                updated_at: "Sun Nov 17 2022 19:50:13 GMT+0800 (Central Indonesia Time)"
            },
            {
                id: 5,
                title: "Beli Kue",
                created_at: "Sun Nov 18 2022 19:50:13 GMT+0800 (Central Indonesia Time)",
                updated_at: "Sun Nov 18 2022 19:50:13 GMT+0800 (Central Indonesia Time)"
            }
        ],
        input_activity: {
            id: 0,
            title: '',
            created_at: ''
        }
    }),
    actions: {
        //* GET ACTIVITY
        getActivity() {
            this.raw_data.map((data) => {
                data.created_at = convertDateDBtoIndo(data.created_at)
                data.updated_at = convertDateDBtoIndo(data.updated_at)

            })

            for (let i = this.raw_data.length - 1; i >= 0; i--) {
                const data = this.raw_data[i]
                this.activities.push(data)
            }
            // console.log(this.activities);
        },
        // async getActivity() {
        //     try {
        //         const { data } = await axios.get(`${BASE_URL}/activity-groups?email=${email}`)
        //         const activities_arr = data.data;

        //         activities_arr.map((activity) => {
        //             this.activities.push(activity)
        //         })

        //     } catch (error) {
        //         console.log(error);
        //     }
        // },

        //* CREATE ACTIVITY
        createActivity() {
            let id = 0;
            if (this.raw_data.length > 0) {
                id = this.raw_data[this.raw_data.length - 1].id;
                console.log(this.raw_data[this.raw_data.length - 1].id, "<<<ID");
            }

            const data = {
                id: (id += 1),
                title: "New Activity",
                created_at: new Date(),
                updated_at: new Date(),
            };

            this.raw_data.push(data)
            this.activities = [];
            this.getActivity();
        }
        // async createActivity() {
        //     try {
        //         const response = await axios.post(`${BASE_URL}/activity-groups?email=${email}`, this.input_activity)
        //     } catch (error) {
        //         console.log(response);
        //     }
        // }


    }
})