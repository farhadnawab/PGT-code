<template>
  <div class="question-slide">
    
    <div class="slider-container">
      <ul class="slider" :style="styleObject" ref="slider">
        <li v-for="(item, index) in fields" :key="index" class="slide bg-no-repeat bg-cover bg-center py-20" :style="{'background-image': 'url(' + fields[index].backgroundUrl + ')'}" data-aos="fade-in" data-aos-duration="1500" data-aos-once="true">
          
          <div class="fields-wrap container mx-auto px-6 max-w-4xl text-center">
              <h4 data-aos="zoom-in" data-aos-once="true">{{ item.heading }}</h4>
              <div class="uppercase text-center text-lg font-hairline tracking-widest" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" data-aos-once="true">{{ item.label }}</div>
              <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400" data-aos-once="true">{{ item.title }}</h1>

              <div v-html="item.options" class="options flex flex-wrap justify-center max-w-2xl mx-auto my-10" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" data-aos-once="true"></div>  

          </div>
        </li>
      </ul>
    
      <div class="slider-control container mx-auto px-6 max-w-4xl text-center" data-aos="fade" data-aos-offset="-320" data-aos-easing="ease" data-aos-delay="1100" data-aos-once="true">
        <button @click="prevSlide" class="btn rounded bg-primary text-white font-semibold uppercase tracking-wider py-2 px-4 w-48 hidden"> Back <i class="fas fa-angle-left"></i></button>
        <button @click="nextSlide" class="btn rounded bg-green hover:bg-secondary text-white font-semibold uppercase tracking-wider py-2 px-4 w-48"> {{ (activeSlide+1) == (fields.length) ? "Finsih" : "Next" }} <i class="fas fa-angle-right"></i></button>

        <div class="w-full">

          <div class="w-1/2 mx-auto mt-10 bg-white rounded overflow-hidden">
            <div class="progress-bar bg-secondary text-xs leading-none py-1 text-center text-white" :style="{width: (((activeSlide + 1) / (fields.length) * 100)) + '%'}"></div>          
          </div>
          <div class="inline-block text-white uppercase font-hairline tracking-wider text-xs mt-5">Progress 0{{ activeSlide + 1 }} / 0{{ fields.length }}</div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'QuestionSlide',
  data(){
    return{
      fields: [
        {
          id: 0,
          heading: "Dealer SubDomain",
          label: 'Question #1',
          title: "What Type Of Project?",
          backgroundUrl: require('@/assets/images/banner1.png'),
          options: `<button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon1.png') +`" />Replacement<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon2.png') +`" />New<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon3.png') +`" />Repair</button>`
        },
        {
          id: 1,
          heading: "Dealer SubDomain 2",
          label: 'Question #2',
          title: "What Type Of Project?",
          backgroundUrl: require('@/assets/images/banner1.png'),
          options: `<button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon1.png') +`" />Replacement<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon2.png') +`" />New<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon3.png') +`" />Repair</button>`
        },
        {
          id: 2,
          heading: "Dealer SubDomain 3",
          label: 'Question #3',
          title: "What Type Of Project?",
          backgroundUrl: require('@/assets/images/banner1.png'),
          options: `<button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon1.png') +`" />Replacement<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon2.png') +`" />New<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon3.png') +`" />Repair</button>`
        },
        {
          id: 3,
          heading: "Dealer SubDomain 4",
          label: 'Question #4',
          title: "What Type Of Project?",
          backgroundUrl: require('@/assets/images/banner1.png'),
          options: `<button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon1.png') +`" />Replacement<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon2.png') +`" />New<br/>Windows/Doors</button>
                    <button class='btn flex-1 bg-white hover:bg-secondary text-primary rounded m-6 p-4 text-xs font-semibold uppercase'><img class="block mx-auto w-16 mb-2" src="`+ require('@/assets/images/icon3.png') +`" />Repair</button>`
        }
      ],
      activeSlide: 0,
      isActive: 0,
      isMounted: false
    }
  },
  computed: {
    styleObject: function() {
      if(!this.isMounted)
        return;

      const width = 0 - (this.activeSlide * this.$refs.slider.clientWidth)
      
      return {
        transform: 'translateX('+width+'px)'
      }
    }
  },
  methods: {
    changeSlide: function(num) {
      this.activeSlide = num
    },
    nextSlide: function() { 
      
      if(this.activeSlide < (this.$refs.slider.childNodes.length - 1)){
          this.activeSlide++
          this.isActive = this.activeSlide;
      } 
    },
    prevSlide: function() {
      if(this.activeSlide > 0){ 
        this.activeSlide--
        this.isActive = this.activeSlide;
      }
    }
  },
  mounted(){
      this.isMounted = true;
  }
}
</script>