<template>
  <div class="textfield-employeeremarks">
      <h3> Remarks: </h3>
      <p> {{this.employeeRemarks}} </p>
  </div>
</template>

<script>

export default {
  name: 'EmployeeRemarksTextfield',
  data: function() {
    return {
    }
  },
  props: [
    "employeeRemarks"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.textfield-employeeremarks {
    background-color: $color-element-background;
    width: 100%;
    height: 100%;
    padding: 20px;

    & h3 {
        letter-spacing: $letter-spacing;
        margin: 0 0 10px 0;
    }

    & p {
      font-size: $font-size-p-lg;
      letter-spacing: $letter-spacing;
    }
}

</style>