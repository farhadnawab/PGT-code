<template>
  <div class="home">
    <QuestionSlide />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </div>
</template>

<script>
import QuestionSlide from '@/components/QuestionSlide.vue'
import Section1 from '@/components/Section1.vue'
import Section2 from '@/components/Section2.vue'
import Section3 from '@/components/Section3.vue'
import Section4 from '@/components/Section4.vue'

export default {
  name: 'home',
  components: {
    QuestionSlide, Section1, Section2, Section3, Section4
  }
}
</script>
