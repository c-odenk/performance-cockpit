<template>
  <div class="textfield-employeebonusdata">
    <table>
        <tbody>
          <tr>
            <td> Employee ID: </td>
            <td> # {{this.employeeData.code}} </td>
          </tr>
          <tr>
            <td> Employee Name: </td>
            <td> {{this.employeeData.firstName}} {{this.employeeData.middleName}} {{this.employeeData.lastName}} </td>
          </tr>
          <tr>
            <td> Department: </td>
            <td> {{this.employeeData.unit}} </td>
          </tr>
          <tr>
            <td> Year of Performance: </td>
            <td> no Data yet </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>

export default {
  name: 'EmployeeBonusComputationDataTextfield',
  data: function() {
    return {
    }
  },
  props: [
    "employeeData"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.textfield-employeebonusdata {
  background-color: $color-body-background;
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 0;

  & table {
    font-size: $font-size-p-lg;
    letter-spacing: $letter-spacing;

    & tbody {

      & tr {

        & td {
          padding: 5px;

          &:first-of-type {
            font-weight: 600;
          }
        }
      }
    }
  }
}

</style>