<template>
   <div class="sidebar-employee">
     <ul>
       <li class="heading"> Menu </li>
       <li><router-link to="/employees"> <i class="fas fa-home"></i> Company Dashboard </router-link></li>
       <li class=" active"> <i class="fas fa-border-all"></i> Employee Dashboard </li>
       <li class="heading"> Manage </li>
       <li @click="showDataModal"> <i class="far fa-address-card"></i> Edit Employee Data </li>
       <li @click="showReportModal"> <i class="fab fa-buffer"></i> Create New Report </li>
       <li class="heading"> Leave </li>
       <li> <i class="fas fa-sign-out-alt"></i> Log Out </li>
    </ul>
   </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data: function () {
    return {
      
    }
  },
  methods: {
    showDataModal: function () {
      this.$emit("changeDataModalVisibility", "closed")
    },
    showReportModal: function () {
      this.$emit("changeReportModalVisibility", "closed")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.sidebar-employee {
  background-color: $color-element-background;
  
  & ul {
    list-style: none;
    padding: 20px 10px;

    & li {
      display: flex;
      align-items: center;
      padding: 17.5px 20px;
      color: $color-text-dark;
      font-size: $font-size-p-lg;
      letter-spacing: $letter-spacing;
      cursor: pointer;

      & a {
        text-decoration: none;
        color: $color-text-dark;
        font-size: $font-size-p-lg;
        letter-spacing: $letter-spacing;
      }

      & i {
        width: 15px;
        font-size: $font-size-p-lg;
        margin: 0 15px 0 0;
      }

      &.active {
        background-color: #C8C8C8;

        &:hover {
          background-color: #C8C8C8;
        }
      }

      &:hover {
        background-color: $color-body-background;
      }

      &.heading {
        font-weight: bold;
        cursor: unset;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }
}

</style>