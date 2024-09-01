<template>
  <div class="textfield-employeedata">
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
            <td> This Years Sold Units: </td>
            <td> no Data yet </td>
          </tr>
          <tr>
            <td> Last Years Fixed Salary: </td>
             <td> no Data yet </td>
          </tr>
          <tr>
            <td> Last Years Bonus Salary: </td>
            <!-- <td>  $ {{(this.employeeBonusSalary.value)}} </td> -->
            <td> no Data yet </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>

export default {
  name: 'EmployeeDataTextfield',
  data: function() {
    return {
    }
  },
  props: [
      "employeeData",
      "employeeBonusSalary"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.textfield-employeedata {
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