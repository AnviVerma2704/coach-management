<template>
    <form @submit.prevent="submitForm">
         <div class="form-control" :class="{ invalid: !firstname.isValid }">
             <label for="firstname">First Name: </label>
             <input type="text" id="firstname" v-model.trim="firstname.value">
             <p v-if="!firstname.isValid" class="invalid">First name must not be empty</p>
         </div>
 
         <div class="form-control" :class="{ invalid: !lastname.isValid }">
             <label for="lastname">Last Name: </label>
             <input type="text" id="lastname" v-model.trim="lastname.value">
             <p v-if="!lastname.isValid" class="invalid">Last name must not be empty</p>
         </div>
 
         <div class="form-control" :class="{ invalid: !description.isValid }">
             <label for="description">Description: </label>
             <textarea id="description" rows="5" v-model.trim="description.value"></textarea>
             <p v-if="!description.isValid" class="invalid">Description must not be empty</p>
         </div>
 
         <div class="form-control" :class="{ invalid: !rate.isValid }">
             <label for="hourlyrate">Hourly Rate: </label>
             <input type="number" id="hourlyrate" v-model.number="rate.value">
             <p v-if="!rate.isValid" class="invalid">Rate must be a positive number</p>
         </div>
 
         <div class="form-control" :class="{ invalid: !areas.isValid }">
             <h3>Areas of expertise: </h3>
             <div>
                 <input type="checkbox" id="frontend" value="frontend" v-model="areas.value">
                 <label for="frontend">FrontEnd</label>
             </div>
             <div>
                 <input type="checkbox" id="backend" value="backend" v-model="areas.value">
                 <label for="backend">BackEnd</label>
             </div>
             <div>
                 <input type="checkbox" id="career" value="career" v-model="areas.value">
                 <label for="career">Career</label>
             </div>
             <p v-if="!areas.isValid" class="invalid">Select at least one area</p>
         </div>
 
         <p v-if="!isValid" class="invalid">Please fix the above errors</p>
         <base-button>Submit</base-button>
    </form> 
 </template>
 

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            firstname: { value: '', isValid: true },
            lastname: { value: '', isValid: true },
            description: { value: '', isValid: true },
            rate: { value: null, isValid: true },
            areas: { value: [], isValid: true },
            isValid: true
        };
    },
    methods: {
        validate() {
            this.isValid = true;

            // First Name
            if (this.firstname.value.trim() === '') {
                this.firstname.isValid = false;
                this.isValid = false;
            } else {
                this.firstname.isValid = true;
            }

            // Last Name
            if (this.lastname.value.trim() === '') {
                this.lastname.isValid = false;
                this.isValid = false;
            } else {
                this.lastname.isValid = true;
            }

            // Description
            if (this.description.value.trim() === '') {
                this.description.isValid = false;
                this.isValid = false;
            } else {
                this.description.isValid = true;
            }

            // Hourly Rate
            if (this.rate.value === null || this.rate.value <= 0) {
                this.rate.isValid = false;
                this.isValid = false;
            } else {
                this.rate.isValid = true;
            }

            // Areas
            if (!this.areas.value.length) {
                this.areas.isValid = false;
                this.isValid = false;
            } else {
                this.areas.isValid = true;
            }
        },
        submitForm() {
            this.validate();
            if (!this.isValid) {
                return;
            }

            const formData = {
                first: this.firstname.value,
                last: this.lastname.value,
                desc: this.description.value,
                rate: this.rate.value,
                areas: this.areas.value
            };

            console.log(formData);
            this.$emit('save-data', formData);
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid{
    color: red;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>