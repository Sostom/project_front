<template>
    <div class="login-area">
        <div class="section-admin row">
            <div class="col-md-6">

            </div>
            <div class="col-md-6">
                <div class="password-box">
                    <div class="form-value">
                        <form action="">
                            <h4 class="login-title text-center">Changer mot de passe</h4>
        
                            <div class="error-message" v-if="error">
                                {{ error }}
                            </div>
                            <div class="success-message" v-if="success">
                                {{ success }}
                            </div>
                            <div class="inputbox">
                                <span toggle="#password1" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                                <input id="password1" type="password" v-model="form.old_password" required>
                                <label for=""><i class="fa fa-lock" aria-hidden="true"></i>Ancien Mot de passe<span v-if="errors.password" class="register_error">*Corrigez le mot de passe</span></label>
                            </div>
                            <div class="inputbox">
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                                <input id="password-field" type="password" v-model="form.password" required>
                                <label for=""><i class="fa fa-lock" aria-hidden="true"></i>Nouveau Mot de passe<span v-if="errors.password" class="register_error">*Corrigez le mot de passe</span></label>
                            </div>
                            <div class="inputbox">
                                <span toggle="#password" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                                <input id="password" type="password" v-model="form.password_confirmation" required>
                                <label for=""><i class="fa fa-lock" aria-hidden="true"></i> Confirmer Nouveau Mot de passe</label>
                            </div>
        
                                <button :class="{ 'btn-loading': loading }" class="new-login-btn" @click.prevent="changePassword()">Enregistrer<span v-if="loading" class="spinner"></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
        export default {
          name: "UserInfo",
          data() {
            return {
                success: null,
                error: null,
                loading: false, 
                form:{
                    old_password: '',
                    password: '',
                    password_confirmation: '',
                },
                userId: '',
              errors: []
            }
          },
    
    
    
          mounted() {
            this.recupUser();
        },
          methods: {

            recupUser(){
                this.$axios.get("user")
                    .then((response) => {
                        // console.log(response)
                        this.userId = response.data.id,
                        this.form.phone = response.data.phone;
                    });
            },
            viewPassword(event){
                const toggleIcon = event.currentTarget;
                const inputSelector = toggleIcon.getAttribute("toggle");
                const input = document.querySelector(inputSelector);

                if (input) {
                    const isPassword = input.getAttribute("type") === "password";
                    input.setAttribute("type", isPassword ? "text" : "password");
                    toggleIcon.classList.toggle("fa-eye");
                    toggleIcon.classList.toggle("fa-eye-slash");
                }
            },

            async changePassword(){
              this.loading = true; 
              await this.$axios.post('/modify-password',{
                    phone: this.form.phone,
                    old_password: this.form.old_password,
                    password: this.form.password,
                    password_confirmation: this.form.password_confirmation
                  }).then(response =>{
                    //   console.log(response);
                      if(response.data.status == "success"){
                        this.form.old_password = '',
                        this.form.password = '',
                        this.form.password_confirmation = '',
                        this.loading = false; 
                        this.error = false;
                        this.success = "Votre mot de passe a été modifié avec succès";
                      }
                      else{
                        this.loading = false; 
                        this.success=false
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
    