<template>
  <div class="table-socialperformance">
      <h3> Social Performances </h3>
      <table class="table">
        <thead>
          <tr>
            <th> Name of Categorie </th>
            <th> Target Value </th>
            <th> Actual Value </th>
            <th> Value Diagram </th>
            <th> Earned Bonus </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Leadership Competence </td>
            <td> {{this.employeePerformanceRecord[0].leadershipCompetence.targetValue}} </td>
            <td> {{this.employeePerformanceRecord[0].leadershipCompetence.actualValue}} </td>
            <td> <SingleBarChart :targetValue="this.employeePerformanceRecord[0].leadershipCompetence.targetValue" :actualValue="this.employeePerformanceRecord[0].leadershipCompetence.actualValue"/></td>
            <td> {{this.employeePerformanceRecord[0].leadershipCompetence.earnedBonus}} </td>
          </tr>
          <tr>
            <td> Openness to Employee </td>
            <td> {{this.employeePerformanceRecord[0].opennesToEmployee.targetValue}} </td>
            <td> {{this.employeePerformanceRecord[0].opennesToEmployee.actualValue}} </td>
            <td> <SingleBarChart :targetValue="this.employeePerformanceRecord[0].opennesToEmployee.targetValue" :actualValue="this.employeePerformanceRecord[0].opennesToEmployee.actualValue"/> </td>
            <td> {{this.employeePerformanceRecord[0].opennesToEmployee.earnedBonus}} </td>
          </tr>
          <tr>
            <td> Social Behaviour to Employee </td>
            <td> {{this.employeePerformanceRecord[0].socialBehaviourToEmployee.targetValue}} </td>
            <td> {{this.employeePerformanceRecord[0].socialBehaviourToEmployee.actualValue}} </td>
            <td> <SingleBarChart :targetValue="this.employeePerformanceRecord[0].socialBehaviourToEmployee.targetValue" :actualValue="this.employeePerformanceRecord[0].socialBehaviourToEmployee.actualValue"/></td>
            <td> {{this.employeePerformanceRecord[0].socialBehaviourToEmployee.earnedBonus}} </td>
          </tr>
          <tr>
            <td> Attitude towards Client </td>
            <td> {{this.employeePerformanceRecord[0].attitudeTowardsClient.targetValue}} </td>
            <td> {{this.employeePerformanceRecord[0].attitudeTowardsClient.actualValue}} </td>
            <td> <SingleBarChart :targetValue="this.employeePerformanceRecord[0].attitudeTowardsClient.targetValue" :actualValue="this.employeePerformanceRecord[0].attitudeTowardsClient.actualValue"/></td>
            <td> {{this.employeePerformanceRecord[0].attitudeTowardsClient.earnedBonus}} </td>
          </tr>
          <tr>
            <td> Communication Skills </td>
            <td> {{this.employeePerformanceRecord[0].communicationSkills.targetValue}} </td>
            <td> {{this.employeePerformanceRecord[0].communicationSkills.actualValue}} </td>
            <td> <SingleBarChart :targetValue="this.employeePerformanceRecord[0].communicationSkills.targetValue" :actualValue="this.employeePerformanceRecord[0].communicationSkills.actualValue"/></td>
            <td> {{this.employeePerformanceRecord[0].communicationSkills.earnedBonus}} </td>
          </tr>
          <tr>
            <td> Integrity to Company </td>
            <td> {{this.employeePerformanceRecord[0].integrityToCompany.targetValue}} </td>
            <td> {{this.employeePerformanceRecord[0].integrityToCompany.actualValue}} </td>
            <td> <SingleBarChart :targetValue="this.employeePerformanceRecord[0].integrityToCompany.targetValue" :actualValue="this.employeePerformanceRecord[0].integrityToCompany.actualValue"/></td>
            <td> {{this.employeePerformanceRecord[0].integrityToCompany.earnedBonus}} </td>
          </tr>
        </tbody>
      </table>
      <p> Earned Bonus: <span class="green"> $ {{this.employeePerformanceRecord[0].socialBonus}} </span></p>
  </div>
</template>

<script>

import SingleBarChart from '@/components/charts/Chart-SingleBarChart.vue'

export default {
  name: 'SocialPerformanceTable',
  data: function() {
    return {
    }
  },
  components: {
    SingleBarChart
  },
  props: [
    "employeePerformanceRecord"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.table-socialperformance {
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

        &:nth-of-type(2),
        &:nth-of-type(3),
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

          &:nth-of-type(2),
          &:nth-of-type(3),
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