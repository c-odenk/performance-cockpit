<template>
  <div class="diagram-employee-performance">
    <div class="diagram-employee-performance_target-value">
      <div class="actual-value"></div>
    </div>
    <p> {{this.valuePercentage}}% </p>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      valuePercentage: null
    }
  },
  props: [
    "targetValue",
    "actualValue"
  ],
  mounted: function () {

    this.valuePercentage = this.actualValue / this.targetValue * 100

    if(this.valuePercentage >= 0 ) {
      document.querySelector(".actual-value").style.width = "100%";
      document.querySelector(".actual-value").style.backgroundColor = "red";
    }
    if(this.valuePercentage == 25) {
      document.querySelector(".actual-value").style.width = "25%";
      document.querySelector(".actual-value").style.backgroundColor = "orange";
    }
    if(this.valuePercentage == 50) {
      document.querySelector(".actual-value").style.width = "25%";
      document.querySelector(".actual-value").style.backgroundColor = "rgba(53, 89, 199, 0.8)";
    }
    if(this.valuePercentage == 75) {
      document.querySelector(".actual-value").style.width = "100%";
      document.querySelector(".actual-value").style.backgroundColor = "rgba(53, 89, 199, 0.8)";
    }
    if(this.valuePercentage == 100 ) {
      document.querySelector(".actual-value").style.width = "100%";
      document.querySelector(".actual-value").style.backgroundColor = "rgba(53, 89, 199, 0.8)";
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.diagram-employee-performance {
  // background-color: $color-element-background;
  width: 100%;

  & h3 {
    letter-spacing: $letter-spacing;
    margin: 0 0 1vh 0;
  }

  & p {
    text-align: center;
  }

  &_target-value {
    width: 100%;
    height: 10px;
    margin: 0 0 2.5px 0;
    background-color: #C8C8C8;
    position: relative;

    display: none;

    & .actual-value {
      // width: 30%;
      height: 100%;
      // background-color: black;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}

</style>