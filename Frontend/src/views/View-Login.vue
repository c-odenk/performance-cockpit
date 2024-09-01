<template>
  <div class="view-login">
    <div class="login-form">
      <div class="login-form_logo">
        <h1> Smart Hoover Ltd. </h1>
        <h3> Performance Cockpit </h3>
      </div>
      <div class="login-form_form">
        <form>
          <label for="employeeId"> Employee ID </label> 
          <input type="text" value="" id="employeeId" maxlength="30">
          <label for="password"> Password </label> 
          <input type="password" value="" id="password" maxlength="30">
          <input type="submit" value="Login">
        </form>
        <a href="#"> I forgot my password </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'View-Login',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.view-login {
  width: 100%;
  height: 100vh;
  background-image: $color-login-view-background;
  position: relative;

  & .login-form {
    box-sizing: border-box;
    width: 19%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include respond(tablet) {
      width: 45%;
    }

    @include respond(phone) {
      width: 90%;
    }
    
    &_logo {
    
      & h1 {
        text-align: center;
        font-size: 2.3rem;
        color: $color-text-light;
        letter-spacing: $letter-spacing;
        
      }

      & h3 {
        text-align: center;
        font-size: 1.4rem;
        color: $color-text-light;
        letter-spacing: $letter-spacing;
        margin: .5vh 0 3.5vh 0;
      }
    }

    &_form {
      box-sizing: border-box;
      background-color: $color-login-form-background;
      padding: 60px 30px 50px 30px;

      @include respond(tablet) {
        padding: 50px 15px 40px 15px;
      }

      & form {

        & label {
          display: block;
          width: 100%;
          color: $color-text-light;
          font-size: $font-size-p-sm;
          letter-spacing: $letter-spacing;
        }

        & input {
          display: block;
          width: 100%;
          background-color: transparent;
          margin: .5vh 0 2.5vh 0;
          padding: 15px 0 5px 0;
          border: none;
          border-bottom: .5px solid $color-text-light;

          &[value] {
            color: $color-text-light;
            letter-spacing: $letter-spacing;
            font-size: $font-size-p-sm;
            $line-height-p-lg: 1.7;
          }

          &:focus {
            outline: none;
          }
        }

        & input[type=submit] {
          width: 100%;
          color: $color-text-light;
          margin: 5vh 0 0 0;
          padding: 12.5px 0;
          border: none;
          font-size: $font-size-p-sm;
          letter-spacing: $letter-spacing;
          background-color: #3559c7;
          text-transform: uppercase;
          cursor: pointer;

          @include respond(tablet) {
             margin: 4vh 0 0 0;
          }
        }
      }

      & a {
        display: block;
        margin: 4vh 0 0 0;
        text-decoration: none;
        font-size: $font-size-p-sm;
        letter-spacing: $letter-spacing;
        color: $color-text-light;
        text-align: center;

        @include respond(tablet) {
             margin: 3vh 0 0 0;
          }
      }
    }
  }
}

</style>