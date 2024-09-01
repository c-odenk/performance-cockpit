<template>
  <div class="table-performancerecords">    
    <h3> Previous Performance Records </h3>
    <table>
      <thead>
        <tr>
          <th> Record Year </th>
          <th> Sold Units </th>
          <th> Overall Social Performance </th>
          <th> Total Bonus </th>
          <th> View Record </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employeePerformanceRecord in employeePerformanceRecords" :key="employeePerformanceRecord">
          <td> {{employeePerformanceRecord.recordYear}} </td>
          <td> {{employeePerformanceRecord.soldUnits}} </td>
          <td> <SingleBarChart :targetValue="employeePerformanceRecord.targetValue" :actualValue="employeePerformanceRecord.actualValue"/> </td>
          <td> $ {{(employeePerformanceRecord.totalBonus).toFixed(2)}} </td>
          <td><a href="#"> view <i class="fas fa-external-link-alt"></i></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import SingleBarChart from '@/components/charts/Chart-SingleBarChart.vue'

export default {
  name: 'PerformanceRecordsTable',
  data: function() {
    return {
      
    }
  },
  components: {
    SingleBarChart
  },
  props: [
    "employeePerformanceRecords"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.table-performancerecords {
    background-color: $color-element-background;
    width: 100%;
    height: 100%;
    padding: 20px;

    & h3 {
        letter-spacing: $letter-spacing;
        margin: 0 0 10px 0;
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
        text-align: center;
      }
    }

    & tbody {

      & tr {

        &:nth-of-type(even) {
          background-color: $color-body-background;
        }

        & td {
          padding: 10px;

          &:nth-of-type(1),
          &:nth-of-type(2),
          &:nth-of-type(4),
          &:nth-of-type(5) {
            text-align: center;
          }

          & a {
            text-decoration: none;
            color: $color-text-dark;

            & i {
              margin: 0 0 0 10px;
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