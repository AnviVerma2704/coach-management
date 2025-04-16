<template>
   <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstname">First Name: </label>
            <input type="text" id="firstname" v-model.trim="firstname">
        </div>
        <div class="form-control">
            <label for="lastname">Last Name: </label>
            <input type="text" id="lastname" v-model.trim="lastname">
        </div>
        <div class="form-control">
            <label for="description">Description: </label>
            <textarea type="text" id="description" row="5" v-model.trim="description"> </textarea>
        </div>
        <div class="form-control">
            <label for="hourlyrate">Hourly Rate: </label>
            <input type="number" id="hourlyrate" v-model.number="rate">
        </div>
        <div class="form-control">
            <h3>Areas of expertise: </h3>
            <div>
                <input type="checkbox" id="frontend" value="frontend" v-model="areas">
                <label for="frontend">ForntEnd</label>
            </div>
            <div>
                <input type="checkbox" id="backend" value="backend" v-model="areas">
                <label for="backend">BackEnd</label>
            </div>
            <div>
                <input type="checkbox" id="career" value="career" v-model="areas">
                <label for="career">Career</label>
            </div>
        </div>
        <base-button>Submit</base-button>
   </form> 
</template>

<script>
export default{
    emits: ['save-data'],
    data(){
        return{
            firstname: '',
            lastname:'',
            description: '',
            rate : null,
            areas: []
        };
    },
    methods:{
        submitForm(){
            const formData = {
                first: this.firstname,
                last: this.lastname,
                desc: this.description,
                rate: this.rate,
                areas: this.areas
            };
            console.log(formData)
            this.$emit('save-data', formData);
        }
    }
}
</script>
