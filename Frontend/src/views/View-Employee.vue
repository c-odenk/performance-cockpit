<template>
  <div class="view-employee">
    <div class="view-employee_header">
      <Header />
    </div>
    <div class="view-employee_sidebar">
      <Sidebar :dataModalVisibility="this.dataModalVisibility" v-on:changeDataModalVisibility="showDataModal" :reportModalVisibility="this.reportModalVisibility" v-on:changeReportModalVisibility="showReportModal" />
    </div>
    <div class="view-employee_employee-data">
      <h1> Performance Dashboard </h1>
      <EmployeeDataTextfield :employeeData="this.employeeData" :employeeBonusSalary="employeeBonusSalary" />
    </div>
    <div class="view-employee_employee-sales">
      <EmployeSalesDiagram :employeeSales="this.employeeSales" />
    </div>
    <div class="view-employee_performance-records-table">
      <PerformanceRecordsTable :employeePerformanceRecords="this.employeePerformanceRecords"/>
    </div>
    <div class="view-employee_overall-performance-diagramm">
      <OverallSocialPerformanceDiagramm :overallSocialPerformance="this.overallSocialPerformance" />
    </div>
    <div class="view-employee_data-modal">
      <EditEmployeeDataModal  v-if="dataModalVisibility === true" v-on:changeVisibility="closeDataModal" />
    </div>
    <div class="view-employee_report-modal">
      <CreateReportModal v-if="reportModalVisibility === true" v-on:changeVisibility="closeReportModal"  :employeeData="this.employeeData" />
    </div>
  </div>
</template>

<script>

import Header from '@/components/header/Header.vue'
import Sidebar from '@/components/sidebars/Sidebar.vue'
import EmployeeDataTextfield from '@/components/textfields/Textfield-EmployeeData.vue'
import EmployeSalesDiagram from '@/components/diagrams/Diagram-EmployeeSales.vue'
import OverallSocialPerformanceDiagramm from '@/components/diagrams/Diagram-OverallSocialPerformance.vue'
import PerformanceRecordsTable from '@/components/tables/Table-PerformanceRecords.vue'
import EditEmployeeDataModal from '@/components/modals/Modal-EditEmployeeData.vue'
import CreateReportModal from '@/components/modals/Modal-CreateReport.vue'

import axios from 'axios';

export default {
  name: 'View-Employee',
  data: function () {
    return {

      dataModalVisibility: false,
      reportModalVisibility: false,

      employeeData: null,

      employeeBonusSalary: null,

      employeePerformanceRecordsNeu: null,

      // #####################################################

      employeeSales: [
        {product: "HooverGo", client: "Telekom AG", items: 20},
        {product: "HooverGo", client: "Mayer Werft AG", items: 10},
        {product: "HooverClean", client: "Germania AG", items: 10},
        {product: "HooverClean", client: "Dirk Müller", items: 25}
      ],

      // #####################################################

      employeePerformanceRecords: [
        {recordYear: 2020, soldUnits: 95, targetValue: 4, actualValue: 4, totalBonus: 180},
        {recordYear: 2019, soldUnits: 100, targetValue: 4, actualValue: 3, totalBonus: 200},
        {recordYear: 2018, soldUnits: 105, targetValue: 4, actualValue: 3, totalBonus: 200},
        {recordYear: 2017, soldUnits: 95, targetValue: 4, actualValue: 4, totalBonus: 180},
        {recordYear: 2016, soldUnits: 100, targetValue: 4, actualValue: 3, totalBonus: 200}
      ],

      // #####################################################

      overallSocialPerformance: {
        targetValue: 24,
        actualValue: 22
      }
    }
  },
  methods: {
    showDataModal: function() {
      this.dataModalVisibility = true
    },
    closeDataModal: function() {
      this.dataModalVisibility = false
    },
    showReportModal: function() {
      this.reportModalVisibility = true
    },
    closeReportModal: function() {
      this.reportModalVisibility = false
    }
  },

  mounted() {
    axios.get(`http://localhost:8000/salesmen/${this.$route.params.id}`)
    .then((response) => {
      console.log(response.data);
      this.employeeData = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get(`http://localhost:8000/salesmen/${this.$route.params.id}/bonussalary`)
    .then((response) => {
      console.log(response.data);
      this.employeeBonusSalary = response.data.data[0];
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get(`http://localhost:8000/records`)
    .then((response) => {
      console.log(response.data);
      this.employeePerformanceRecordsNeu = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },

  components: {
    Header,
    Sidebar,
    EmployeeDataTextfield,
    EmployeSalesDiagram,
    PerformanceRecordsTable,
    OverallSocialPerformanceDiagramm,
    EditEmployeeDataModal,
    CreateReportModal
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.view-employee {
  display: grid;
  grid-template-columns: 1.1fr 3fr 2fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 0 0 20px 0;

  grid-template-areas:  "header header header"
                        "sidebar employee-data employee-sales"
                        "sidebar performance-records-table overall-performance-diagramm";

  @include respond(tablet) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:  "header header header"
                          "sidebar employee-data employee-data"
                          "sidebar employee-sales overall-performance-diagramm"
                          "sidebar performance-records-table performance-records-table"
  }

  &_header {
    grid-area: header;
  }

  &_sidebar {
    grid-area: sidebar;
    margin: 0 0 0 20px;

    @include respond(tablet) {
      margin: 0;
    }
  }

  &_employee-data {
    grid-area: employee-data;

    @include respond(tablet) {
      margin: 0;
    }

    & h1 {
        letter-spacing: $letter-spacing;
        line-height: 1;
        margin: 0 0 10px 0;
    }
  }

  &_employee-sales {
    grid-area: employee-sales;
    margin: 0 20px 0 0;

    @include respond(tablet) {
      margin: 0;
    }
  }

  &_performance-records-table {
    grid-area: performance-records-table;

    @include respond(tablet) {
      margin: 0;
    }
  }

  &_overall-performance-diagramm {
    grid-area: overall-performance-diagramm;
    margin: 0 20px 0 0;

    @include respond(tablet) {
      margin: 0;
    }
  }

  &_data-modal {

  }

  &_report-modal {
  }
}

</style>
