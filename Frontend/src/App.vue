<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
 
  }
}
</script>

<style lang="scss">
@import '@/variables/variables.scss';
 
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: $font-family;
  background-color: $color-body-background;
}

</style>
