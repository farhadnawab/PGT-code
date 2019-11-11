<template>
  <div class="footer bg-primary relative z-10">
    <div class="container mx-auto pt-24 pb-10 px-6 text-center">
      
        <a href="/" class="inline-block max-w-xs"><img src="@/assets/images/logo.png" /></a>
        
        <ul class="footer-social-icons flex flex-wrap justify-center text-2xl text-primary mt-8">
          <li class="p-2 mt-2"><a href="/" class="bg-white hover:bg-secondary rounded-full w-12 h-12 flex items-center justify-center"><i class="fab fa-facebook-f"></i></a></li>
          <li class="p-2 mt-2"><a href="/" class="bg-white hover:bg-secondary rounded-full w-12 h-12 flex items-center justify-center"><i class="fab fa-twitter"></i></a></li>
          <li class="p-2 mt-2"><a href="/" class="bg-white hover:bg-secondary rounded-full w-12 h-12 flex items-center justify-center"><i class="fab fa-pinterest"></i></a></li>
          <li class="p-2 mt-2"><a href="/" class="bg-white hover:bg-secondary rounded-full w-12 h-12 flex items-center justify-center"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>

        <ul class="footer-menu-links flex flex-wrap justify-center text-sm font-medium uppercase mt-10 text-white">
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Product Information</router-link></li>
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Resources</router-link></li>
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Media Center</router-link></li>
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Contact</router-link></li>
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Become a dealer</router-link></li>
        </ul>
        
        <ul class="footer-menu-links2 flex flex-wrap justify-center text-2xs font-medium uppercase mt-6 text-white">
          <li class="px-3 mt-2">&copy;2019 PGT&reg; Custom Windows + Doors. All rights Reserved</li>
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Pgt innovations</router-link></li>
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Privacy Policy</router-link></li>
          <li class="px-3 mt-2"><router-link to="/" class="hover:text-secondary">Supplier Information</router-link></li>
        </ul>

    </div>
    <button class="bg-secondary text-primary hover:bg-yellow-600 hover:text-white text-center text-2xl font-bold uppercase p-4 block w-full shadow-2xl" @click="showPopup()">Get a Quote</button>
  </div>
</template>

<script>
import PopupGetQuote from '@/components/PopupGetQuote.vue'

export default {
  name: 'Footer',
  methods: {
    showPopup(){
      this.$modal.show(PopupGetQuote)
    }
  }
}
</script>