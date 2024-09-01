<script>
  import { Doughnut } from 'vue-chartjs'

  export default {
    extends: Doughnut,
    data () {
      return {
        chartData: {
          labels: null,
          datasets: [{
              borderWidth: 1,
              backgroundColor: ['rgb(53, 89, 199, 0.65)', '#F8F8F8'],
              data: [this.actualValue, this.targetValue - this.actualValue]
            }]
        },
        options: {
          legend: {
            display: true
          },
          tooltips: {enabled: false},
          hover: {mode: null},
          responsive: false,
          maintainAspectRatio: false
        }
      }
    },

    props: [
      "targetValue",
      "actualValue"
    ],

    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>