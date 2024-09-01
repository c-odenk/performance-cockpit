<template>
  <div class="diagramm-overall-social-performance">
      <h3> Last Overall Social Performance of {{ ((this.overallSocialPerformance.actualValue / this.overallSocialPerformance.targetValue) * 100).toFixed(2) }} % </h3>
      <div class="diagramm-overall-social-performance_chart">
        <DoughnutChart :targetValue="overallSocialPerformance.targetValue" :actualValue="overallSocialPerformance.actualValue" :width="this.chartWidth" :height="chartHeight" />
      </div>
  </div>
</template>

<script>

import DoughnutChart from '@/components/charts/Chart-DoughnutChart.vue'

export default {
  name: 'OverallSocialPerformanceDiagramm',
  components: {
    DoughnutChart
  },
  data: function() {
    return {
      overallSocialPerformancePercentage: ((this.overallSocialPerformance.actualValue / this.overallSocialPerformance.targetValue) * 100).toFixed(2),
      chartWidth:  300,
      chartHeight: 300,
    }
  },
  props: [
    "overallSocialPerformance"
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
      this.chartWidth  = 300
      this.chartHeight = 300
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.diagramm-overall-social-performance {
  background-color: $color-element-background;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  & h3 {
    letter-spacing: $letter-spacing;
    margin: 0 0 3vh 0;
  }

  &_chart {
    display: block;
    margin: 0 auto;
  }
}

</style>