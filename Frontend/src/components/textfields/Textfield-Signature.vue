<template>
  <div class="textfield-signature">
      <h3> Signature </h3>
      <div class="textfield-signature_row-1">
        <p> Date: </p><p> Signature CEO: </p>
        <div class="signature-platzhalter"></div>
      </div>
      <div class="textfield-signature_row-2">
        <p> Date: </p><p> Signature HR: </p>
        <div class="signature-platzhalter"></div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SignatureTextfield',
  data: function() {
    return {
      
    }
  },
  props: [
    "date"
  ]
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.textfield-signature {
    background-color: $color-element-background;
    width: 100%;
    height: 100%;
    padding: 20px;

    & h3 {
        letter-spacing: $letter-spacing;
        margin: 0 0 10px 0;
    }

    &_row-1,
    &_row-2 {
      display: flex;
      flex-direction: row;
      align-items: center;

      & p {
        font-size: $font-size-p-lg;
        letter-spacing: $letter-spacing;
        line-height: $line-height-p-lg;
        margin: 0 25px 0 0;
        padding: 20px 0;
      }

      & .signature-platzhalter {
        width: 150px;
        height: 25px;
        // background-color: $color-body-background;
        border-bottom: 1px solid black;
      }
    }
}

</style>