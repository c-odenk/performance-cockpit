<template>
  <div class="diagramm-profit">
    <div class="diagramm-profit_header">
      <h3> Last Years Annual Profit </h3>
    </div>
    <div class="diagramm-profit_profit">
      <div class="diagramm-profit_profit_col-1">
        <h2> $ {{(this.profit.thisProfit).toLocaleString()}} </h2>
      </div>
      <div class="diagramm-profit_profit_col-2">
        <p> + {{ (this.profit.lastProfit / this.profit.thisProfit * 100).toFixed(2) }} % </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfitDiagramm',
  data: function() {
    return {
    }
  },
  props: [
    "profit"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.diagramm-profit {
  background-color: $color-element-background;
  width: 100%;
  height: 100%;
  padding: 20px;

  &_header h3 {
    letter-spacing: $letter-spacing;
    margin: 0 0 10px 0;
  }

  &_profit {
    display: flex;
    flex-direction: row;
    align-items: center;

    &_col-1 {
      margin: 0 10px 0 0;
    }

    &_col-2 {
      color: green;
    }
  }
}

</style>