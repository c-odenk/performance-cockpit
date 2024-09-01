<template>
  <div class="modal-edit-employee-data">
    <div class="modal-edit-employee-data_container">
        <div class="modal-edit-employee-data_container_header">
            <h3> Edit Employee Data </h3>
            <i class="fas fa-times" @click="closeModal"></i>
        </div>
        <div class="modal-edit-employee-data_container_body">
            <p> Empty for now </p>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    closeModal: function () {
      this.$emit("changeVisibility", "closed")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.modal-edit-employee-data {
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
    }
}

</style>