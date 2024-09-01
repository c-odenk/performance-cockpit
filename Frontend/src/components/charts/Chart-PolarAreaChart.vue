<script>
  import { PolarArea } from 'vue-chartjs'

  export default {
    extends: PolarArea,
    data () {
      return {
        chartData: {
          labels: ['HooverGo : Telekom AG', 'HooverGo : Mayer Werft AG', 'HooverClean : Germania GmbH', 'HooverClean : Dirk Müller GmbH'],
          datasets: [
            {
              label: 'Polar Area Chart',
              borderWidth: 1,
              backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(0, 0, 0, 0.2)',                
              ],
              data: [20, 10, 10, 25]
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {enabled: false},
          hover: {mode: null},
          responsive: false,
          maintainAspectRatio: false
        }
      }
    },
    props: [
      "soldUnits",
      "customers"
    ],
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>