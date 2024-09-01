<template>
  <div class="diagramm-sales">
    <h3> 2021 Monthly Revenue in Thousand USD </h3>
    <LineChart :chartLabel="this.annualRevenue.chartLabel" :chartValues="this.annualRevenue.chartValues" :width="this.chartWidth" :height="chartHeight" />
  </div>
</template>

<script>

import LineChart from '@/components/charts/Chart-LineChart.vue'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      chartWidth:  250,
      chartHeight: 250,
    }
  },
  props: [
    "annualRevenue"
  ],
  created: function () {
    if(screen.width <= 767) {
      this.chartWidth  = 200
      this.chartHeight = 200
    }
    if(screen.width <= 1029 && screen.width >= 767 ) {
      this.chartWidth  = 200
      this.chartHeight = 200
    }
    if(screen.width > 1029) {
      this.chartWidth  = 250
      this.chartHeight = 250
    }
  }  
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.diagramm-sales {
  background-color: $color-element-background;
  width: 100%;
  max-height: 100%;
  padding: 20px;

  & h3 {
    letter-spacing: $letter-spacing;
    margin: 0 0 3vh 0;
  }
}

</style>
