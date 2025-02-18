<template>
    <div class="login-area">
        <div class="section-admin row">
            <div class="col-md-6">

            </div>
            <div class="col-md-6">
                <div class="user-box">
                    <div class="form-value">
                        <form action="">
                            <h4 class="login-title text-center">Mon compte</h4>
        
                            <div class="error-message" v-if="error">
                                {{ error }}
                            </div>
                            <div class="inputbox-admin">
                                <span class="fa fa-pencil-square-o field-icon" aria-hidden="true" @click="toggleField('name')"></span>
                                <input type="text" v-model="form.name" required :disabled="!editableFields.name" >
                                <label for=""> <i class="fa fa-address-book-o" aria-hidden="true"></i> Nom d'utilisateur <span v-if="errors.name" class="register_error">*Renseignez votre nom</span></label>
                            </div>
                            <div class="inputbox-admin">
                                <span class="fa fa-pencil-square-o field-icon " aria-hidden="true" @click="toggleField('phone')"></span>
                                <input type="text" v-model="form.phone" :disabled="!editableFields.phone"  required>
                                <label for=""> <i class="fa fa-mobile" aria-hidden="true"></i> Téléphone <span v-if="errors.phone" class="register_error">*Renseignez votre contact</span></label>
                            </div>
                            <!-- <div class="inputbox">
                                <input type="email" v-model="form.email" required>
                                <label for=""> <i class="fa fa-envelope" aria-hidden="true"></i> Email</label>
                            </div> -->
                            <!-- <div class="inputbox">
                                <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                                <input id="password-field" type="password" v-model="form.password" required>
                                <label for=""><i class="fa fa-lock" aria-hidden="true"></i> Mot de passe<span v-if="errors.password" class="register_error">*Corrigez le mot de passe</span></label>
                            </div>
                            <div class="inputbox">
                                <span toggle="#password" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                                <input id="password" type="password" v-model="form.password_confirmation" required>
                                <label for=""><i class="fa fa-lock" aria-hidden="true"></i> Confirmer Mot de passe</label>
                            </div> -->
        
                                <button :class="{ 'btn-loading': loading }" class="new-login-btn" @click.prevent="update()">MODIFIER<span v-if="loading" class="spinner"></span></button>
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
                error: null,
                loading: false, 
                form:{
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
                userId: '',
                editableFields: {
                    name: false,
                    phone: false,
                },
              errors: []
            }
          },
    
    
        mounted() {
            this.recupUser();
        },
          methods: {

            toggleField(field) {
                this.editableFields[field] = !this.editableFields[field];
            },

            recupUser(){
                this.$axios.get("user")
                    .then((response) => {
                        console.log(response)
                        this.userId = response.data.id,
                        this.form.name = response.data.name;
                        this.form.phone = response.data.phone;
                    });
            },
    
            async update(){
              this.loading = true; 
              await this.$axios.put('/user/update/' +this.userId,{
                    name: this.form.name,
                    phone: this.form.phone,
                  }).then(response =>{
                      console.log(response);
                      if(response.data.status == "success"){
                        window.location.reload();
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
    