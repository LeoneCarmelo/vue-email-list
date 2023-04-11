const { createApp } = Vue

createApp({
    data() {
        return {
            email: null,
            emailsTotal: 10,
            emailsList: []
        }
    },
    methods: {
        generateEmail(response) {
            this.email = response.data.response 
            this.emailsList.push(this.email)
        },

    },
    mounted() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.generateEmail(response)

            })
    }
}).mount('#app')