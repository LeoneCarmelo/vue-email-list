const { createApp } = Vue

createApp({
    data() {
        return {
            email: null,
            emailsTotal: 10,
            emailsList: []
        }
    },
    mounted() {
        for(let i = 0; i < this.emailsTotal; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emailsList.push(response.data.response)
            })
        }
    }
}).mount('#app')