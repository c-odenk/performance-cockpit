<template>
  <div class="diagramm-employee-sales">
      <h3> This Years Sold Units </h3>
      <div class="diagramm-employee-sales_chart">
        <PolarAreaChart :width="this.chartWidth" :height="chartHeight"/>
      </div>
  </div>
</template>

<script>

import PolarAreaChart from '@/components/charts/Chart-PolarAreaChart.vue'

export default {
  name: 'EmployeeSalesDiagramm',
  components: {
    PolarAreaChart
  },
  data: function() {
    return {
    }
  },
  props: [
    "employeeSales"
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
      this.chartWidth  = 275
      this.chartHeight = 275
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.diagramm-employee-sales {
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