<template>
  <div class="textfield-totalbonus">
    <h3> Bonus Status </h3>
    <div class="textfield-totalbonus_status">
      <p> Status <i class="far fa-check-circle"></i> Paid </p>
      <p> Payment Date: {{this.totalBonus.paymentDate}} </p>
      <p> Total Earned Bonus: <span class="green"> $ no Data yet </span></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TotalBonusTextfield',
  data: function() {
    return {
    }
  },
  props: [
    "totalBonus"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.textfield-totalbonus {
    background-color: $color-element-background;
    width: 100%;
    height: 100%;
    padding: 20px;

    & h3 {
        letter-spacing: $letter-spacing;
        margin: 0 0 10px 0;
    }

    &_status {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      & p {
        font-size: $font-size-p-lg;
        letter-spacing: $letter-spacing;
        line-height: $line-height-p-lg;

        &:nth-of-type(1),
        &:nth-of-type(2) {
          margin: 0 25px 0 0;
        }

        &:nth-of-type(3) {
          margin: 0 8px 0 0;
        }

        & i {
          color: green;
          font-size: 1.2rem;
          margin: 0 5px 0 5px;
        }

        & .green {
          color: green;
          margin: 0 0 0 15px;
        }
      }
    }
}

</style>