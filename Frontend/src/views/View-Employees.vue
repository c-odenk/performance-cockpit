<template>
  <div class="view-employees">
    <div class="view-employees_header">
      <Header />
      <h1> Company Dashboard </h1>
    </div>
    <div class="view-employees_employees-table">
      <EmployeesTable :employees="this.employees.data" />
    </div>
    <div class="view-employees_profit-diagram">
        <ProfitDiagram :profit="this.profit" />
    </div>
    <div class="view-employees_sales-diagram">
      <RevenueDiagram :annualRevenue="this.annualRevenue" />
    </div>
    <div class="view-employees_topseller-diagram">
      <TopsellerDiagram :topSeller="this.topSeller" />
    </div>
  </div>
</template>

<script>

import Header from '@/components/header/Header.vue'
import EmployeesTable from '@/components/tables/Table-Employees.vue'
import ProfitDiagram from '@/components/diagrams/Diagram-AnnualProfit.vue'
import RevenueDiagram from '@/components/diagrams/Diagram-MonthlyRevenue.vue'
import TopsellerDiagram from '@/components/diagrams/Diagram-Topseller.vue'

import axios from 'axios';

export default {
  name: 'View-Employees',
  data: function () {
    return {

      employees: null,

      profit: {
        lastProfit: 328000,
        thisProfit: 542620
      },

      annualRevenue: {
        chartLabel: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        chartValues: [125, 130, 165, 160, 174, 180, 174, 157, 159, 182, 189, 176]
      },

      topSeller: {
        chartLabel: ["E. Mustermann", "B. Mustermann", "C. Mustermann", "A. Mustermann", "D. Mustermann"],
        chartValues: [184, 180, 170, 165, 150, 130]
      }
    }
  },
  components: {
    Header,
    EmployeesTable,
    ProfitDiagram,
    RevenueDiagram,
    TopsellerDiagram
  },
  mounted() {
    axios.get('http://localhost:8000/salesmen')
    .then((response) => {
      console.log(response.data);
      this.employees = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.view-employees {
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 0 0 20px 0;

  grid-template-areas:  "header header"
                        "employees-table profit-diagram"
                        "employees-table sales-diagram"
                        "employees-table topseller-diagram";

  @include respond(tablet) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:  "header header"
                          "employees-table employees-table"
                          "profit-diagram profit-diagram"
                          "sales-diagram topseller-diagram"
  }

  &_header {
    grid-area: header;

    & h1 {
      line-height: 1;
      padding: 20px 0 0 20px;
    }
  }

  &_employees-table {
    grid-area: employees-table;
    margin: 0 0 0 20px;

    @include respond(tablet) {
      margin: 0;
    }
  }

  &_profit-diagram {
    grid-area: profit-diagram;
    margin: 0 20px 0 0;

    @include respond(tablet) {
      margin: 0;
    }
  }

  &_sales-diagram {
    grid-area: sales-diagram;
    margin: 0 20px 0 0;

    @include respond(tablet) {
      margin: 0;
    }
  }

  &_topseller-diagram {
    grid-area: topseller-diagram;
    margin: 0 20px 0 0;

    @include respond(tablet) {
      margin: 0;
    }
  }
}

</style>