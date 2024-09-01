<template>
  <div class="table-soldunits">
      <h3> Orders Evaluation </h3>
      <table>
        <thead>
          <tr>
            <th> Name of Product </th>
            <th> Client </th>
            <th> Client Ranking </th>
            <th> Sold Items </th>
            <th> Earned Bonus </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sold in soldUnits" :key="sold">
            <td> {{sold.product}} </td>
            <td> {{sold.client}} </td>
            <td> {{sold.clientRanking}} </td>
            <td> {{sold.items}} </td>
            <td> $ {{(sold.bonus).toLocaleString()}} </td>
          </tr>
        </tbody>
      </table>
      <p> Earned Bonus: <span class="green"> $ 1.600 </span></p>
  </div>
</template>

<script>

export default {
  name: 'SoldUnitsTable',
  data: function() {
    return {
    }
  },
  props: [
    "soldUnits"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.table-soldunits {
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

        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(5) {
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

          &:nth-of-type(3),
          &:nth-of-type(4),
          &:nth-of-type(5) {
            text-align: center;
          }
        }

        &:hover {
          background-color: $color-table-hover;
        }
      }
    }
  }

  & p {
    font-size: $font-size-p-lg;
    letter-spacing: $letter-spacing;
    line-height: $line-height-p-lg;
    text-align: right;
    margin: 20px 10px 0 auto;

    & .green {
      color: green;
      margin: 0 0 0 15px;

    }
  }
}

</style>