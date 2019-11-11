<template>
    <div class="get-quote relative z-10">      
             
        <div class="content-area text-white relative z-20 md:float-right md:w-3/5 py-20 px-10 lg:p-20">
          <h2 class="text-center max-w-md mx-auto">Let Us Help Protect Your Loved Ones.</h2>
          
          <form v-on:submit.prevent="console.log(form)"> 
          <div class="font-hairline">

            <div class="flex flex-row mb-6">
              <input v-model="name" type="text" placeholder="Name" class="bg-white-alpha-3 block appearance-none placeholder-white border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            
            <div class="flex flex-row mb-6">
                <input v-model="email" type="email" placeholder="Email" class="bg-white-alpha-3 block appearance-none placeholder-white border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" />
            </div>

           <div class="flex flex-row mb-6">
                <input v-model="phone" type="text" placeholder="Telephone Number" class="bg-white-alpha-3 block appearance-none placeholder-white border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            
            <div class="flex flex-column mb-6">
                <input v-model="street" type="text" placeholder="Street" class="mr-3 bg-white-alpha-3 block appearance-none placeholder-white border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" />
                <input v-model="city" type="text" placeholder="City" class="ml-3 bg-white-alpha-3 block appearance-none placeholder-white border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            
            <div class="flex flex-column mb-6">
                <select v-model="state" class="mr-3 bg-white-alpha-3 block border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline">
                  <option value="" selected="selected">State</option>
                  <option value="option1">Options 1</option>
                  <option value="option2">Options 2</option>
                  <option value="option3">Options 3</option>
                  <option value="option4">Options 4</option>
                </select>
                <input v-model="zip" type="text" placeholder="Zip" class="ml-3 bg-white-alpha-3 block appearance-none placeholder-white border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            
            <div class="flex-row mb-6">
                <label class="block text-xs text-center mb-4">When are you planning to buy new windows and/or doors?*</label>
                <select v-model="dateToBuy" class="mr-3 bg-white-alpha-3 block border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="" selected="selected">Select One</option>
                  <option value="option1">Options 1</option>
                  <option value="option2">Options 2</option>
                  <option value="option3">Options 3</option>
                  <option value="option4">Options 4</option>
                </select>
            </div>
            
            <div class="flex-row mb-6">
                <label class="block text-xs text-center mb-4">What type of home do you have?*</label>
                <select v-model="typeOfHome" class="mr-3 bg-white-alpha-3 block border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="" selected="selected">Select One</option>
                  <option value="option1">Options 1</option>
                  <option value="option2">Options 2</option>
                  <option value="option3">Options 3</option>
                  <option value="option4">Options 4</option>
                </select>
            </div>
            
            <div class="flex-row mb-6">
                <label class="block text-xs text-center mb-4">What many windows do you need installed?*</label>
                <select v-model="numOfWindow" class="mr-3 bg-white-alpha-3 block border w-full py-4 px-6 text-white leading-tight focus:outline-none focus:shadow-outline" required>
                  <option value="" selected="selected">Select One</option>
                  <option value="option1">Options 1</option>
                  <option value="option2">Options 2</option>
                  <option value="option3">Options 3</option>
                  <option value="option4">Options 4</option>
                </select>
            </div>

            <button v-bind:disabled="errors()" class="bg-primary text-white hover:bg-white hover:text-secondary text-center font-medium tracking-wider uppercase p-4 block w-full">Request a free consultation</button>
            
          </div>
          </form>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PopupGetQuote',
  data(){
    return{
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      dateToBuy: "",
      typeOfHome: "",
      numOfWindow: ""
    }
  },
  methods:{
    errors(){

      if((this.dateToBuy && this.typeOfHome && this.numOfWindow).length < 1)
        return false;
      else
        return true;
    }
  }
}
</script>
