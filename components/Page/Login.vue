<template>
<div class="login-area">
    <div class="section">
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h4 class="login-title text-center">CONNEXION</h4>
                        <div class="error-message" v-if="error">
                            {{ error }}
                        </div>

                    <div class="inputbox">
                        <input type="text" v-model="form.phone" required>
                        <label for=""> <i class="fa fa-mobile" aria-hidden="true"></i> Numéro de téléphone</label>
                    </div>
                    <div class="inputbox">
                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password" @click.prevent="viewPassword($event)"></span>
                        <input id="password-field" type="password" v-model="form.password" required>
                        <label for=""><i class="fa fa-lock" aria-hidden="true"></i> Mot de passe</label>
                    </div>
                    <div class="forget">
                        <label><input type="checkbox">Rester connecté</label>
                        <a href="#">Mot de passe oublié ?</a>
                    </div>
                        <button :class="{ 'btn-loading': loading }" class="new-login-btn" @click.prevent="login()">Se connecter<span v-if="loading" class="spinner"></span></button>
                    <div class="register">
                        <p>Vous n'avez pas de compte ? <a href="/signup">S'inscrire</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                error: null,
                loading: false, 
                form:{
                    phone: '',
                    password: ''
                }
            }
        },

        methods: {
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

            async login() {
                try {
                        this.loading = true; 
                        let response = await this.$auth.loginWith('local', { data: this.form })
                        if(response.data.status == "success"){
                                this.loading = false; 
                            // let role = response.data.data.original.role[0].name
                            // this.$auth.$storage.setUniversal('role', response.data.data.original.role[0].name)
                            this.$auth.setUserToken(response.data.data.original.access_token)
                            .then(response =>{
                                // if(role == 'user'){
                                // this.$auth.$storage.setUniversal('loginState', true)
                                // }
                                // else if(role == 'admin'){
                                    this.$router.push( '/proprio/home',)
                                    this.$auth.$storage.setUniversal('loginState', true)
                                // }
                            })
                        }
                        else{
                            this.loading = false;
                            this.error = response.data.message
        
                        }
                        
                } catch (error) {
                console.log(error)
                }
            },
        
        }

    }
</script>

<style scoped>

</style>
