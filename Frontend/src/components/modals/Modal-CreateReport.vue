<template>
  <div class="modal-create-report">
      <div class="modal-create-report_container">

        <div class="modal-create-report_container_header">
          <h3> Create new Report </h3>
          <i class="fas fa-times" @click="closeModal"></i>
        </div>

        <div class="modal-create-report_container_body" id="container">

          <div class="modal-create-report_container_body_employee-data">
            <table>
              <tbody>
                <tr>
                  <td> Employee ID </td>
                  <td> {{this.employeeData.code}} </td>
                </tr>
                <tr>
                  <td> Employee Name </td>
                  <td> {{this.employeeData.firstName}} {{this.employeeData.middleName}} {{this.employeeData.lastName}} </td>
                </tr>
                <tr>
                  <td> Department </td>
                  <td> {{this.employeeData.unit}}  </td>
                </tr>
                <tr>
                  <td> Year of Performance </td>
                  <td> {{ new Date().getFullYear() }} </td>
                </tr>
              </tbody>
            </table>
            <div class="button-bar">
              <button @click="scrollRight"> Next </button>
            </div>
          </div>

          <div class="modal-create-report_container_body_employee-sales">
            <table id="employee-sales">
              <thead>
                <tr>
                  <th> Name of Product </th>
                  <th> Client </th>
                  <th> Client Ranking </th>
                  <th> Sold Items </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="sold in soldUnits" :key="sold">
                  <td> {{sold.product}} </td>
                  <td> {{sold.client}} </td>
                  <td> {{sold.clientRanking}} </td>
                  <td> {{sold.item}} </td>
                </tr>
              </tbody>
            </table>
            <div class="button-bar">
              <button @click="scrollLeft" class="buttonBack"> Back </button>
              <button @click="scrollRight"> Next </button>
            </div>
          </div>

          <div class="modal-create-report_container_body_employee-social-performance">
            <form>
              <table>
                <thead>
                  <tr>
                    <th> Categorie </th>
                    <th> Target Value </th>
                    <th> Actual Value</th>
                    <th> Earned Bonus </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Leadership Competence </td>
                    <td> 4 </td>
                    <td> <input type="number" value="2" /></td>
                    <td> XX </td>
                  </tr>
                  <tr>
                    <td> Openess to Employee </td>
                    <td> 4 </td>
                    <td> <input type="number" value="2" /></td>
                    <td> XX </td>
                  </tr>
                  <tr>
                    <td> Social Behaviour to Employee </td>
                    <td> 4 </td>
                    <td> <input type="number" value="2" /></td>
                    <td> XX </td>
                  </tr>
                  <tr>
                    <td> Attitude towards Client </td>
                    <td> 4 </td>
                    <td> <input type="number" value="2" /></td>
                    <td> XX</td>
                  </tr>
                  <tr>
                    <td> Communication Skills </td>
                    <td> 4 </td>
                    <td> <input type="number" value="2" /></td>
                    <td> XX </td>
                  </tr>
                  <tr>
                    <td> Integrity to Company </td>
                    <td> 4 </td>
                    <td> <input type="number" value="2" /></td>
                    <td> XX </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <div class="button-bar">
              <button @click="scrollLeft" class="buttonBack"> Back </button>
              <button @click="scrollRight"> Next </button>
            </div>
          </div>

          <div class="modal-create-report_container_body_employee-remarks">
            <form>
              <textarea cols="8">Insert Employee Remarks ..</textarea>
            </form>

            <div class="button-bar">
              <button @click="scrollLeft" class="buttonBack"> Back </button>
              <button> Submit </button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CreateReportModal',
  data: function() {
    return {
      soldUnits: [
        {product: "HooverGo", client: "Telekom AG", clientRanking: "1", item: "20", bonus: "700"},
        {product: "HooverGo", client: "Mayer Werft AG", clientRanking: "2", item: "10", bonus: "500"},
        {product: "HooverClean", client: "Germania AG", clientRanking: "3", item: "10", bonus: "200"},
        {product: "HooverClean", client: "Dirk Müller", clientRanking: "3", item: "25", bonus: "200"}
      ],

      containerWidth: document.getElementById("container").offsetWidth
    }
  },
  props: [
    "employeeData"
  ],
  methods: {
    scrollLeft: function () {
      document.getElementById('container').scrollLeft -= 824
    },
    scrollRight: function () {
      document.getElementById('container').scrollLeft += 824
    },
    closeModal: function () {
      this.$emit("changeVisibility", "closed")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.modal-create-report {
    background-color: $color-modal-background;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;

    &_container {
        width: 45%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        background-color: $color-element-background;

        // ###########################################

        &_header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          border-bottom: .5px solid black;

          & h3 {
            letter-spacing: $letter-spacing;
            margin: 0 0 10px 0;
          }

          & i {
            font-size: 1.4rem;
            cursor: pointer;
          }
        }

        &_body {
          width: 100%;
          display: flex;
          flex-direction: row;
          overflow-x: hidden;

          // ###########################################

          &_employee-data {
            min-width: 100%;
            margin: 2vh auto 1vh auto;

            & table {
              width: auto;
              margin: 0 auto;
              & tr {
                border: 1px solid black;

                & td {
                  padding: 10px 0;

                  &:first-of-type {
                    padding: 10px 10px 10px 0;
                    font-weight: bold;
                  }
                }
              }
            }
          }

          // ###########################################

          &_employee-sales {
            min-width: 100%;
            margin: 2vh auto 1vh auto;

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
          }

          // ###########################################

          &_employee-social-performance {
            min-width: 100%;
            margin: 2vh auto 1vh auto;

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

                    &:nth-of-type(2),
                    &:nth-of-type(3),
                    &:nth-of-type(4) {
                      text-align: center;
                    }

                    & input {
                      padding: 5px;
                      text-align: center;
                      font-size: $font-size-p-lg;
                      letter-spacing: $letter-spacing;
                    }
                  }

                  &:hover {
                    background-color: $color-table-hover;
                  }
                }
              }
            }
          }

          // ###########################################

          &_employee-remarks {
            min-width: 100%;
            margin: 2vh auto 1vh auto;

            & form {

              & textarea {
                width: 100%;
                min-height: 125px;
                padding: 10px 5px;
                font-size: $font-size-p-lg;
                letter-spacing: $letter-spacing;
                font-family: $font-family;
              }
            }
          }
        }

        // ###########################################

        & .button-bar {

          margin-top: auto;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          & button {
            display: inline-block;
            width: 35%;
            color: $color-text-light;
            margin: 1.5vh 0 0 0;
            padding: 12.5px 0;
            border: none;
            font-size: $font-size-p-sm;
            letter-spacing: $letter-spacing;
            background-color: #3559c7;
            text-transform: uppercase;
            cursor: pointer;

            outline: none;

            &.buttonBack {
              background-color: transparent;
              color: $color-text-dark;
              width: auto;
              margin: 1.5vh 1vw 0 0;

              &::before {
                font-family: "Font Awesome 5 Free";
                font-weight: 900;
                content: "\f060";
              }
            }
          }
        }
    }
}

</style>
