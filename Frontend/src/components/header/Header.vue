<template>
   <div class="header">
       <div class="header_logo">
           <router-link to="/employees">
             <h1> Smart Hoover Ltd. </h1>
           </router-link>
       </div>
       <div class="header_searchbar">
           <form :action="this.message">
               <input type="text"  v-model="message" placeholder="Insert Employee ID ..">
               <button type="submit" @click="searchEmployee" ><i class="fas fa-search"></i></button>
           </form>
           <h1> {{this.searchEmployee}} </h1>
       </div>
       <div class="header_user">
           <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHDg8QBw8SDRIPExMSEA4QDhEPDhAOFxEiGBURHxMaHiggGBooGxUTITEhJSk3Li4uFx8zODctNygtLisBCgoKDg0OGhAQGC0lHR0tKy0tKy0rKy0tLS0rLSsrLC0rLS0rLSstLS0tLS0rKy0tLS0rLS0tNystKys3LSsrN//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQIEBgEDB//EADcQAQABAgQDAwsDAwUAAAAAAAABAgMEBREhEjFRQZHBEyIzUmFxcoGhseEy0fBigqIVI0JDU//EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHREBAQEBAQADAQEAAAAAAAAAAAECETEDQVEhEv/aAAwDAQACEQMRAD8A/RAHSyAAAAAAAAAAAe0UTXOlETVPSI1kHg3LWWXbnOIp+KfBtUZL/wClfyinxVuonlSRVxeBs4WnW5Ncz2RrETM9yUmXpZwASgAAAAAAAAAAAAAAAAAAAiNdo317AH2w2ErxPoo29adqe9RwWVaaVYr5UdnzVaaYp2pjT2Qz1v8AFplOw+UUUb3pmuenKlv27dNuNLcRTHSI0ZjO21fgAgTc4wtV6Iqt78OutPbp1hEdan4/Lov61WvNq+lX86tM65/KrYhD25RNuZiuNJjnDxqoAAAAAAAAAAAAAAAAAA8XcrwXkYiu5HnT/jH7pmW2fL3aYnlHnT7o/kOkZ7v0tmADJcAAAAABp5hg4xVO21Ufpnwc9Mac9nWoGcWfJXNY5Vxr8+3w72mL9K6jRAaqAAAAAAAAAAAAAAAAKmQ0+dXPSIjvn8LKRkP/AGf2+Kuw360z4AKpAAAAAAEvPadaaJ6Tp3x+FROzz0UfFH2lbPqL4hgN2YAAAAAAAAAAAAAAACrkM73P7fFYRcinz64/pj7/AJWmG/WmfABVIAAAAAAm57P+3T8UfaVJKz6fNoj2z9vytn1F8RwG7MAAAAAAAAAAAAAAABRyOJ8pM6TpwzGum2usdq41su08jb4fV+va2XPq9rSACEgAAAAACTn0TPBpE6RxazptHJWYXtOGri5aTr7tEy8qK5UePXQzAAAAAAAAAAAAAAAAXsmr4rOnqzMePi30jIbn66fdMfafBXYa9aTwAVSAAAAAANbMq+CzXPs079vFsp2d3OG3FPrTHdG/7JnqKhgOhmAAAAAAAAAAAAAAAAyt3JtTFVO2k6uqpniiJjtck6PK7vlbVPs82fl+NGfyT7Wy2wGS4AAAAAA5nHXfK3a511jWYj3Rt4OhxV3yNFVXSJ7+xyzT44rp6A1UAAAAAAAAAAAAAAAAFLJL/BVNFX/LePij8fZNInhmJjaY5T7UWdiZeOtHxwl2b1uiqrnMb+99nO0AAAAAY11cETPSJkEzPL+kRbp7d6vd2fz2I7K5cm7VNVc6zO8sW+ZyM7egCyAAAAAAAAAAAAAAAAAHgOmwEcNq38MfVsMLVPBTTHSIj6M3M1AAAAGNyOKJjrEwyAci9Z36eCuqOlUx9WDpZAAAAAAAAAAAAAAAAAACplGEovUzVdp10q0jnpy/KU6TLLXkrVMTznefnupu/wAWy2gGK4AAAAACZm2EoiiquiNKtYmZ331nfZFdRibflqKqesTHz02cvy5tcX+KaAGioAAAAAAAAAAAADaw+X3L/Knhj1qtoRbxLVfWxhq8R6KmZ9vZHzWMPlNFve758+3anub9NMU7UxpHSOSl+T8TMpmGyimnfETxT6sbU/lUBnbb6twAQkAAAAAATsXldN6ZqtzwTO89tMz7lETLwcziMJXh/SU7etG9Pe+DrefNo4jLLd7emOCetPLuaT5P1S5QBuYjLblnlHHHWnn3NPlzXl6gASgAAAAGdm1VenS1HFKrhsoinfEzxT6sbR39qt1ImTqTbt1XZ0txNU9IjVQw+UVV7354fZG8/ssW7dNuNLcRTHSI0Zs7urTLWw+Ct4f9FOs+tO8tkFFgAAAAAAAAAAAAAAAB8MRhKMR6WmJnrynvfcBGxGTzG9irX+mrae9OvWarM6XaZp9/LvdU8qpiuNK4iY6TvC83Vf8ALkxbxOU03N7E8E9OdP4ScRh6sPOl2NOk9k/NpNSq2cfIBZDqMPh6cPTpbjTrPbM9X1BzNQAAAAAAAAAAAAAAAAAAAAAAABhdtReiabkaxPYzATv9Ht9au+P2FEW/1UcgAqkAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=">
           <p> Max Mustermann </p>
           <button> <i class="fas fa-sign-out-alt"></i> </button>
       </div>
   </div>
</template>

<script>

export default {
  name: 'Header',
  data: function() {
      return {
          
      }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables/variables.scss';

.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    background-color: $color-header-background;
    padding: 20px;

    @include respond(tablet) {
        display: none;
    }

    &_logo {
        width: 17.5%;

        & a {
            text-decoration: none;

            & h1 {
                color: $color-text-light;
                font-size: $font-size-h1-logo;
                letter-spacing: $letter-spacing;
            }
        }        
    }

    &_searchbar {
        width: 71%;

        & form {
            width: 50%;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0 2.5% 0 47.5%;

            & input {
                width: 95%;
                padding: 12.5px;
                border: none;
                border-bottom: .5px solid $color-text-light;
                background-color: $color-element-background;

                &::-webkit-input-placeholder {
                    font-size: .9rem;
                    letter-spacing: $letter-spacing;
                    color: $color-text-dark;
                }

                &:focus {
                    outline: none;
                }
            }

            & button {
                background-color: $color-element-background;
                border: none;

                & i {
                    font-size: 1rem;
                    padding: 12.5px;
                }

                &:focus {
                    outline: none;
                }

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }

    &_user {
        width: 14%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        & p {
            font-size: $font-size-p-lg;
            letter-spacing: $letter-spacing;
            color: $color-text-light;
        }

        &  button {
            background-color: transparent;
            border: none;

            &:focus {
                outline: none;
            }

            & i {
                font-size: 1.5rem;
                color: $color-text-light;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
}

</style>