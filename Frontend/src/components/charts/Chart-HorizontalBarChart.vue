<script>
  import { HorizontalBar } from 'vue-chartjs'

  export default {
    extends: HorizontalBar,
    data() {
      return {
        chartData: {
          labels: this.chartLabel,
          datasets: [{
            label: 'Bar Chart',
            borderWidth: 0,
            backgroundColor: 'rgb(53, 89, 199, 0.8)',
            hoverBackgroundColor: 'rgb(53, 89, 199, 1)',
            data: this.chartValues
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: false
          },
          tooltips: {enabled: false},
          hover: {mode: null},
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },

    props: [
        "chartLabel",
        "chartValues"
    ],

    mounted() {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>