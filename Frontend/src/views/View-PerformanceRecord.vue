<template>
  <div class="view-performancerecord">
    <div class="view-performancerecord_header">
      <Header />
    </div>
    <div class="view-performancerecord_sidebar">
      <Sidebar />
    </div>
    <div class="view-performancerecord_employee-data">
      <h1> Performance Record </h1>
      <EmployeeBonusComputationDataTextfield :employeeData="this.employeeData" />
    </div>
    <div class="view-performancerecord_sold-units">
      <SoldUnitsTable :soldUnits="this.soldUnits" />
    </div>
    <div class="view-performancerecord_social-performance-table">
      <SocialPerformanceTable :employeePerformanceRecord="this.employeePerformanceRecord" />
    </div>
    <div class="view-performancerecord_total-bonus-textfield">
      <TotalBonusTextfield :totalBonus="this.totalBonus" />
    </div>
    <div class="view-performancerecord_employee-remarks-textfield">
      <EmployeeRemarksTextfield :employeeRemarks="this.employeePerformanceRecord[0].remarks" />
    </div>
    <div class="view-performancerecord_signature-textfield">
      <SignatureTextfield />
    </div>
  </div>
</template>

<script>

import Header from '@/components/header/Header.vue'
import Sidebar from '@/components/sidebars/Sidebar.vue'
import EmployeeBonusComputationDataTextfield from '@/components/textfields/Textfield-EmployeeBonusComputationData.vue'
import SoldUnitsTable from '@/components/tables/Table-SoldUnits.vue'
import SocialPerformanceTable from '@/components/tables/Table-SocialPerformance.vue'
import TotalBonusTextfield from '@/components/textfields/Textfield-TotalBonus.vue'
import EmployeeRemarksTextfield from '@/components/textfields/Textfield-EmployeeRemarks.vue'
import SignatureTextfield from '@/components/textfields/Textfield-Signature.vue'

import axios from 'axios';

export default {
  name: 'View-PerformanceRecord',
  data: function() {
    return {
      soldUnits: [
        {product: "HooverGo", client: "Telekom AG", clientRanking: 1, items: 20, bonus: 700},
        {product: "HooverGo", client: "Mayer Werft AG", clientRanking: 2, items: 10, bonus: 500},
        {product: "HooverClean", client: "Germania AG", clientRanking: 3, items: 10, bonus: 200},
        {product: "HooverClean", client: "Dirk Müller", clientRanking: 3, items: 25, bonus: 200}
      ],

      employeeId: null,
      employeeData: null,
      employeePerformanceRecord: null,


      totalBonus: {
        paymentDate: "31.12.2020",
        paymentAmount: "1.870"
      },
    }
  },
  components: {
    Header,
    Sidebar,
    EmployeeBonusComputationDataTextfield,
    SoldUnitsTable,
    SocialPerformanceTable,
    TotalBonusTextfield,
    EmployeeRemarksTextfield,
    SignatureTextfield
  },
  mounted() {

    axios.get(`http://localhost:8000/records/${this.$route.params.id}`)
    .then((response) => {
      console.log(response.data);
      this.employeePerformanceRecord = response.data;
      this.employeeRemarks = this.employeePerformanceRecord.remarks;
      this.employeeId = this.employeePerformanceRecord[0.].salesmanId;
    }).then(() => {
        axios.get(`http://localhost:8000/salesmen/${this.employeeId}`)
        .then((response) => {
          console.log(response.data);
          this.employeeData = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
        })
    .catch((error) => {
      console.log(error);
    });
    
  },
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.view-performancerecord {
  display: grid;
  grid-template-columns: 1.1fr 5fr;
  grid-template-rows: auto;
  grid-auto-rows: (10px, auto);
  grid-gap: 20px;
  margin: 0 0 20px 0;

  grid-template-areas:  "header header"
                        "sidebar employee-data"
                        "sidebar sold-units"
                        "sidebar social-performance-table"
                        "sidebar total-bonus-textfield"
                        "sidebar employee-remarks-textfield"
                        "sidebar signature-textfield";

  @include respond(tablet) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:  "header header header"
                          "sidebar employee-data employee-data"
                          "sidebar sold-units social-performance-table"
                          "sidebar total-bonus-textfield employee-remarks-textfield"
                          "sidebar signature-textfield signature-textfield";
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
    margin: 0 20px 0 0;

    @include respond(tablet) {
        margin: 0;
    }

    & h1 {
        letter-spacing: $letter-spacing;
        line-height: 1;
        margin: 0 0 10px 0;
    }
  }

  &_sold-units {
    grid-area: sold-units;
    margin: 0 20px 0 0;

    @include respond(tablet) {
        margin: 0;
    }
  }

  &_social-performance-table {
    grid-area: social-performance-table;
    margin: 0 20px 0 0;

    @include respond(tablet) {
        margin: 0;
    }
  }

  &_total-bonus-textfield {
    grid-area: total-bonus-textfield;
    margin: 0 20px 0 0;

    @include respond(tablet) {
        margin: 0;
    }
  }

  &_employee-remarks-textfield {
    grid-area: employee-remarks-textfield;
    margin: 0 20px 0 0;

    @include respond(tablet) {
        margin: 0;
    }
  }

  &_signature-textfield {
    grid-area: signature-textfield;
    margin: 0 20px 0 0;

    @include respond(tablet) {
        margin: 0;
    }
  }
}

</style>
