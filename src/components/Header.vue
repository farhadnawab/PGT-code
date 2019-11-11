<template>
  <div class="header bg-primary py-6" data-aos="fade-down" data-aos-once="true">
    <div class="container mx-auto px-6">
      <div class="flex">
        <div class="flex-1">
          <router-link to="/" class="inline-block"><img class="w-48" src="@/assets/images/logo.png" /></router-link> 
        </div>
      
        <a class="flex items-center text-base leading-tight block" href="tel:7346582456">
          <span class="mr-4 bg-secondary rounded-full text-white text-xl w-12 h-12 flex items-center justify-center"><i class="fas fa-phone-alt"></i></span>
          <span class="text-secondary font-semibold text-xl block">(734) 658-2456<br/><span class="block text-white font-normal text-sm">CALL US NOW</span></span>       
        </a>
        
        

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>