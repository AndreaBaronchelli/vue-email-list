const app = new Vue({
    el: "#app",
    data: {
        emailList:[],
    },
    computed: {
        dataOk(){
            return this.emailList.length === 10
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(result => this.emailList.push(result.data.response)
                .catch(error => console.log(error))
            );
        }
    },
    
});