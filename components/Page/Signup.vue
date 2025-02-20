<template>
<div class="login-area">
    <div class="section">
        <div class="register-box">
            <div class="form-value">
                <form action="">
                    <h4 class="login-title text-center">INSCRIPTION</h4>
                    <div class="error-message" v-if="error">
                          {{ error }}
                    </div>

                    <div class="inputbox">
                        <input type="text" v-model="form.name" required>
                        <label for=""> <i class="fa fa-address-book-o" aria-hidden="true"></i> Nom d'utilisateur <span v-if="errors.name" class="register_error">*Renseignez votre nom</span></label>
                    </div>
                    <div class="inputbox">
                        <input type="text" v-model="form.phone" required>
                        <label for=""> <i class="fa fa-mobile" aria-hidden="true"></i> Numéro de téléphone <span v-if="errors.phone" class="register_error">*Renseignez votre contact</span></label>
                    </div>
                    <!-- <div class="inputbox">
                        <input type="email" v-model="form.email" required>
                        <label for=""> <i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
                    </div> -->
                    <div class="inputbox">
                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                        <input id="password-field" type="password" v-model="form.password" required>
                        <label for=""><i class="fa fa-lock" aria-hidden="true"></i> Mot de passe<span v-if="errors.password" class="register_error">*Corrigez le mot de passe</span></label>
                    </div>
                    <div class="inputbox">
                        <span toggle="#password" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                        <input id="password" type="password" v-model="form.password_confirmation" required>
                        <label for=""><i class="fa fa-lock" aria-hidden="true"></i> Confirmer Mot de passe</label>
                    </div>
                    <div class="check-group flexbox">
                      <label class="check-box">
                        <input type="checkbox" class="check-box-input" checked="">
                        <span class="remember-text">J'accepte les termes &amp; conditions d'utilisation</span>
                      </label>
                    </div>

                        <button :class="{ 'btn-loading': loading }" class="new-login-btn" @click.prevent="register()">S'inscrire<span v-if="loading" class="spinner"></span></button>
                    <div class="register">
                        <p>Vous avez déjà un compte ? <a href="/login">Se connecter</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
      name: "Register",
      data() {
        return {
          error: null,
          loading: false, 
          form:{
            name: '',
            phone: '',
            email: '',
            password: '',
            password_confirmation: '',
          },
          errors: []
        }
      },

      async mounted() {
        console.log("Nuxt BaseURL:", this.$axios.defaults.baseURL);
      },

      methods: {
        viewPassword(event){
            // Récupérer l'élément déclencheur (l'icône)
            const toggleIcon = event.currentTarget;

            // Récupérer le sélecteur cible à partir de l'attribut "toggle"
            const inputSelector = toggleIcon.getAttribute("toggle");
            const input = document.querySelector(inputSelector);

            // Si le champ existe, basculer son type et l'icône
            if (input) {
                const isPassword = input.getAttribute("type") === "password";
                input.setAttribute("type", isPassword ? "text" : "password");

                // Bascule les classes d'icônes
                toggleIcon.classList.toggle("fa-eye");
                toggleIcon.classList.toggle("fa-eye-slash");
            }
        },

        async register(){
          this.loading = true; 
          await this.$axios.post('/register',{
                name: this.form.name,
                phone: this.form.phone,
                password: this.form.password,
                password_confirmation: this.form.password_confirmation
              }).then(response =>{
                  console.log(response);
                  if(response.data.status == "success"){
                    this.$router.push( '/login',)
                  }
                  else{
                    this.loading = false; 
                    this.errors = response.data.data
                    this.error = response.data.message
                  }        
              }).catch( err => console.log( err ) )
        },
      }
    }
</script>

<style scoped>

</style>
