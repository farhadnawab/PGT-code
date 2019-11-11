<template>
  <div class="section-4 bg-white relative z-10" data-aos-delay="200" data-aos="fade" data-aos-once="true">
    <div class="container mx-auto py-32 px-6">
      <div class="md:flex items-center md:max-w-5xl md:w-full md:mx-auto">
        <div class="flex-1 max-w-3xl mx-auto mb-10 md:max-w-lg md:m-0">
          <div class="yellow-img-borders">
            <img src="@/assets/images/img8.png" />
          </div>
        </div>
        <div class="flex-1 max-w-lg md:max-w-md mx-auto md:m-0 md:pl-24 md:m-0">
            <div class="text-tertiary leading-loose text-sm type-text">
              <h5 class="text-primary text-center md:text-left">Dealer Information</h5>
              
              <a class="group inline-flex items-center text-base font-sans leading-tight pr-10 md:pl-0 mb-6" href="tel:7346582456">
                <span class="pr-6 text-primary group-hover:text-secondary text-4xl"><i class="fas fa-phone-alt"></i></span>
                <span class="text-primary font-semibold text-xl block">PHONE NUMBER:<br/><span class="block text-tertiary font-normal text-md">1234-567-8910</span></span>       
              </a>

              <a class="group inline-flex items-center text-base font-sans leading-tight mb-6" href="mailto:mail.pgt.com">
                  <span class="pr-6 text-primary group-hover:text-secondary text-4xl"><i class="fas fa-envelope"></i></span>
                  <span class="text-primary font-semibold text-xl block">EMAIL ADDRESS:<br/><span class="block text-tertiary font-normal text-md">mail.pgt.com</span></span>       
              </a>
              
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Section1'
}
</script>