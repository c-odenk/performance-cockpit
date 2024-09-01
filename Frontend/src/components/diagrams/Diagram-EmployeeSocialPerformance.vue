<template>
  <div class="diagram-employee-performance">
    <div class="diagram-employee-performance_target-value">
      <div class="actual-value"></div>
    </div>

    <p> {{this.targetValue}} / {{this.actualValue}} </p>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      // targetValue:  4,
      // actualValue: 0,
      valuePercentage: 0
    }
  },
  props: [
    "targetValue",
    "actualValue"
  ],
  mounted: function () {
    this.valuePercentage = this.actualValue / this.targetValue * 100

    if(this.valuePercentage == 0 ) {
      // alert("red und width = 0%")
      // document.getElementsByClassName(".actual-value").style.backgroundColor = "red";
    }
    if(this.valuePercentage > 0 && this.valuePercentage <= 25) {
      alert("light reed und width = 25%")
    }
    if(this.valuePercentage >= 26 && this.valuePercentage <= 50) {
      alert("orange und width = 50%")
    }
    if(this.valuePercentage >= 51 && this.valuePercentage <= 75) {
      alert("light green und width = 75%")
    }
    if(this.valuePercentage >= 76 ) {
      alert("green und width = 100%")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.diagram-employee-performance {
  background-color: $color-element-background;
  width: 100%;

  & h3 {
    letter-spacing: $letter-spacing;
    margin: 0 0 1vh 0;
  }

  &_target-value {
    width: 100%;
    height: 10px;
    margin: 0 0 2.5px 0;
    background-color: #C8C8C8;
    position: relative;

    & .actual-value {
      width: 30%;
      height: 100%;
      background-color: rgba(53, 89, 199, 0.8);
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

</style>