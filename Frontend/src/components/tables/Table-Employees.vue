<template>
   <div class="employees-tablet">
       <h2> Employees </h2>
       <table class="table">
        <thead>
          <tr>
            <th> # ID </th>
            <th> Name </th>
            <th> Role </th>
            <th> E-Mail </th>
            <th> Profil </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee">
            <td> {{employee.code}} </td>
            <td> {{employee.firstName}} {{employee.middleName}} {{employee.lastName}} </td>
            <td> {{employee.unit}} </td>
            <td> {{employee.email}} </td>
            <td><a :href="'/#/employees/' + employee.employeeId"> view <i class="fas fa-external-link-alt"></i></a></td>
          </tr>
        </tbody>
      </table>
   </div>
</template>

<script>

export default {
  name: 'Employees-Table',
  data: function() {
    return {
    }
  },
  props: [
    "employees"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.employees-tablet {
  padding: 20px;
  background-color: $color-element-background;

  & h2 {
    letter-spacing: $letter-spacing;
    margin: 0 0 25px 0;
  }

  & table {
    width: 100%;
    font-size: $font-size-p-lg;
    letter-spacing: $letter-spacing;

    & thead {
      background-color: $color-body-background;

      & th {
        text-align: left;
        padding: 15px 10px 15px 10px;

        &:first-of-type,
        &:last-of-type {
          text-align: center;
        }
      }
    }

    & tbody {

      & tr {

        &:nth-of-type(even) {
          background-color: $color-body-background;
        }

        & td {
          padding: 10px;

          &:first-of-type,
          &:last-of-type {
            text-align: center;

            & a {
              text-decoration: none;
              color: $color-text-dark;

              & i {
                margin: 0 0 0 10px;
              }
            }
          }
        }

        &:hover {
          background-color: $color-table-hover;
        }
      }
    }
  }
}

</style>