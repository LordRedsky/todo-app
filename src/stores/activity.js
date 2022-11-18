import { defineStore } from 'pinia'
import { BASE_URL } from '../API/baseURL'
import { email } from '../helper/user-email'
import axios from 'axios'
import convertDateDBtoIndo from '../helper/date-convert'

export default defineStore('activity', {
    state: () => ({
        activities: [],
        // raw_data: [
        //     {
        //         id: 1,
        //         title: "Bertemu Dokter",
        //         created_at: "Fri Nov 14 2022 09:47:13 GMT+0800 (Central Indonesia Time)",
        //         updated_at: "Fri Nov 14 2022 09:47:13 GMT+0800 (Central Indonesia Time)"
        //     },
        //     {
        //         id: 2,
        //         title: "Bertemu Teman",
        //         created_at: "Fri Nov 15 2022 09:50:13 GMT+0800 (Central Indonesia Time)",
        //         updated_at: "Sat Nov 15 2022 09:50:13 GMT+0800 (Central Indonesia Time)"
        //     },
        //     {
        //         id: 3,
        //         title: "Beli Beras",
        //         created_at: "Sun Nov 16 2022 09:50:13 GMT+0800 (Central Indonesia Time)",
        //         updated_at: "Sun Nov 16 2022 09:50:13 GMT+0800 (Central Indonesia Time)"
        //     },
        //     {
        //         id: 4,
        //         title: "Beli Hp",
        //         created_at: "Sun Nov 17 2022 19:50:13 GMT+0800 (Central Indonesia Time)",
        //         updated_at: "Sun Nov 17 2022 19:50:13 GMT+0800 (Central Indonesia Time)"
        //     },
        //     {
        //         id: 5,
        //         title: "Beli Kue",
        //         created_at: "Sun Nov 18 2022 19:50:13 GMT+0800 (Central Indonesia Time)",
        //         updated_at: "Sun Nov 18 2022 19:50:13 GMT+0800 (Central Indonesia Time)"
        //     }
        // ],
        input_activity: {
            id: 0,
            title: '',
            created_at: ''
        },
        isOpenModal: false,
        deletedActivityData: ""
    }),
    actions: {
        //* GET ACTIVITY
        async getActivity() {
            try {
                const { data } = await axios.get(`${BASE_URL}/activity-groups?email=${email}`)
                const raw_data = data.data;

                raw_data.map((data) => {
                    data.created_at = convertDateDBtoIndo(data.created_at)
                    data.updated_at = convertDateDBtoIndo(data.updated_at)
                    this.activities.push(data)
                })

            } catch (error) {
                console.log(error);
            }
        },

        //* CREATE ACTIVITY
        async createActivity() {
            try {
                const response = await axios.post(`${BASE_URL}/activity-groups`, {
                    email: `${email}`,
                    title: "New Activity"
                })
                this.activities = [];
                this.getActivity();
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        },

        //* DELETE ACTIVITY
        async deleteActivity(deletedId) {
            try {
                const response = await axios.delete(`${BASE_URL}/activity-groups/${deletedId}`, {
                    email: `${email}`,
                })

            } catch (error) {
                console.log(error);
            } finally {
                this.isOpenModal = !this.isOpenModal
                this.activities = []
                this.getActivity()
            }
        }
    }
})