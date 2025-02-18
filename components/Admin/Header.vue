<template>
    <header class="header-one">
        <!-- <div class="topbar-area fix hidden-xs">
            <div class="container">
                <div class="text-center">
                    <div class="col-md-12 col-lg-12">
                        <div class="row my-topbar">
                            <ul>
                                <li>
                                    Cliquez 
                                    <a href="#" class="mx-1">ici 
                                    </a>  
                                    pour confirmer votre adressse email afin vérifier votre compte
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <div id="sticker" class="header-area-admin hidden-xs">
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-2">
                        <div class="logo">
                            <nuxt-link
                                class="navbar-brand page-scroll black-logo"
                                to="/proprio/home"
                            >
                                <img src="/img/logos/logo wh.png" alt="logo" />
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-md-10 col-sm-10 pr-3">
                        <nav class="navbar navbar-default">
                            <div
                                class="collapse navbar-collapse"
                                id="navbar-example"
                            >
                                <div class="main-menu-admin">
                                    <ul class="nav navbar-nav navbar-center">
                                        <li>
                                            <a class="pages_simple" href="/proprio/home">Accueil</a>
                                        </li>
                                        <li>
                                            <a class="pages" href="#">Gérer mes propriétés</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/proprio/propriete/add"
                                                        >Ajouter une chambre</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/proprio/propriete/get"
                                                        >Voir toutes les chambres</nuxt-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a class="pages" href="#"
                                                >Mon compte</a
                                            >
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/proprio/profil"
                                                        >Modifier mon profil</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link
                                                        to="/proprio/password"
                                                        >Changer Mot de passe
                                                    </nuxt-link>
                                                </li>
                                                <li @click.prevent="logout()">
                                                    <nuxt-link
                                                        to="#"
                                                        >Déconnexion
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
            
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mobile-menu">
                            <div class="logo">
                                <nuxt-link to="/proprio/home"
                                    ><img src="/img/logos/logo bl.png" alt="logo"
                                /></nuxt-link>
                            </div>
                            <nav id="dropdown">
                                <ul>
                                    <li>
                                        <a class="pages" href="/proprio/home">Accueil</a>
                                    </li>
                                    <li>
                                        <a class="pages" href="#">Gérer mes propriétés</a>
                                        <ul class="sub-menu">
                                            <li>
                                                <nuxt-link to="/proprio/propriete/add"
                                                    >Ajouter une chambre</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link to="/proprio/propriete/get"
                                                    >Voir toutes les chambres</nuxt-link
                                                >
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a class="pages" href="#"
                                            >Mon compte</a
                                        >
                                        <ul class="sub-menu">
                                            <li>
                                                <nuxt-link to="/proprio/profil"
                                                    >Modifier mon profil</nuxt-link
                                                >
                                            </li>
                                            <li>
                                                <nuxt-link
                                                    to="/proprio/password"
                                                    >Changer Mot de passe
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link
                                            to="/proprio/logout"
                                            >Déconnexion
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    mounted() {
        $(".search-option").hide();
        $(".main-search").on("click", function () {
            $(".search-option").animate({
                height: "toggle",
            });
        });

        var windows = $(window);
        var sticky = $("#sticker");

        windows.on("scroll", function () {
            var scroll = windows.scrollTop();
            if (scroll < 300) {
                sticky.removeClass("stick");
            } else {
                sticky.addClass("stick");
            }
        });

        var mean_menu = $("nav#dropdown");
        mean_menu.meanmenu();
    },

    methods:{
        
      async logout(){
        localStorage.removeItem('auth.loginState');
        await this.$auth.logout();
        this.$router.push('/');
        location.reload()
      },

    }
};
</script>

<style scoped>
</style>
