<template>
  <div class="diagramm-topseller">
    <h3> 2021 Top Selling Employees </h3>
    <HorizontalBarChart :chartLabel="this.topSeller.chartLabel" :chartValues="this.topSeller.chartValues" :width="this.chartWidth" :height="chartHeight" />
  </div>
</template>

<script>

import HorizontalBarChart from '@/components/charts/Chart-HorizontalBarChart.vue'

export default {
  components: {
    HorizontalBarChart
  },
  data () {
    return {
      chartWidth:  250,
      chartHeight: 250,
    }
  },
  props: [
    "topSeller",
  ],
  created: function () {
    if(screen.width <= 767) {
      this.chartWidth  = 200
      this.chartHeight = 200
    }
    if(screen.width <= 1029 && screen.width >= 767 ) {
      this.chartWidth  = 175
      this.chartHeight = 175
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

.diagramm-topseller {
  background-color: $color-element-background;
  width: 100%;
  padding: 20px;

  & h3 {
    letter-spacing: $letter-spacing;
    margin: 0 0 1vh 0;
  }
}

</style>