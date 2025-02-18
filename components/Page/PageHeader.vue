<template>
    <header class="header-one">
        <!-- Start top bar -->
        <!-- <div class="topbar-area fix hidden-xs">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-sm-9">
                        <div class="topbar-left">
                            <ul>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-envelope"></i>
                                        name@domain.com</a
                                    >
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-phone-square"></i> (+1)
                                        123-456-789</a
                                    >
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-clock-o"></i> Mon -
                                        Fri: 10:00 - 18:00</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <div class="top-social">
                            <ul>
                                <li>
                                    <a href="#"><i class="fa fa-skype"></i></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-twitter"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"
                                        ><i class="fa fa-facebook"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-google"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- End top bar -->
        <!-- header-area start -->
        <div
            id="sticker"
            class="header-area hidden-xs"
        >
            <div class="container">
                <div class="row">
                    <!-- logo start -->
                    <div class="col-md-2 col-sm-2">
                        <div class="logo">
                            <!-- Brand -->
                            <nuxt-link
                                class="navbar-brand page-scroll white-logo"
                                to="/"
                            >
                                <img src="" alt="logo" />
                            </nuxt-link>
                            <nuxt-link
                                class="navbar-brand page-scroll black-logo"
                                to="/"
                            >
                                <img src="" alt="logo" />
                            </nuxt-link>
                        </div>
                        <!-- logo end -->
                    </div>
                    <div class="col-md-8 col-sm-8">
                        <!-- mainmenu start -->
                        <nav class="navbar navbar-default ">
                            <div
                                class="collapse navbar-collapse"
                                id="navbar-example"
                            >
                                <div class="main-menu">
                                    <ul class="nav navbar-nav navbar-center">
                                        <li>
                                            <a class="pages_simple" href="/">Accueil</a>
                                        </li>
                                        <li>
                                            <a class="pages" href="#">Biens Immobiliers</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <nuxt-link to="/about"
                                                        >Chambres à Louer</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/team"
                                                        >Maisons à Louer</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/review"
                                                        >Maison à Vendre</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/faq"
                                                        >Appartements Meublés</nuxt-link
                                                    >
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <nuxt-link to="/contact"
                                                >Contact</nuxt-link
                                            >
                                        </li>
                                        <li>
                                            <nuxt-link to="/faq"
                                                >FAQ</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>
                        <!-- mainmenu end -->
                    </div>
                    <div class="col-md-2 col-sm-2 button-connexion">
                        <nuxt-link class="s-menu" to="/login"
                            >Connexion</nuxt-link
                        >
                    </div>
                </div>
            </div>
        </div>
        <!-- header-area end -->
        <!-- mobile-menu-area start -->
        <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="mobile-menu">
                            <div class="logo">
                                <nuxt-link to="/"
                                    ><img src="" alt="logo"
                                /></nuxt-link>
                            </div>
                            <nav id="dropdown">
                                <ul>
                                    <li>
                                        <a class="pages" href="/">Accueil</a>
                                    </li>
                                    <li>
                                        <a class="pages" href="#">Biens</a>
                                        <ul class="sub-menu">
                                            <li>
                                                    <nuxt-link to="/about"
                                                        >Chambres à Louer</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/team"
                                                        >Maisons à Louer</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/review"
                                                        >Maison à Vendre</nuxt-link
                                                    >
                                                </li>
                                                <li>
                                                    <nuxt-link to="/faq"
                                                        >Appartements Meublés</nuxt-link
                                                    >
                                                </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <nuxt-link to="/contact"
                                            >Contact</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link to="/faq"
                                            >FAQ</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link to="/login"
                                            >COnnexion</nuxt-link
                                        >
                                    </li>
                                    <li>
                                        <nuxt-link to="/signup"
                                            >INSCRIPTION</nuxt-link
                                        >
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile-menu-area end -->
    </header>
</template>

<script>
export default {
    name: "PageHeader",
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
};
</script>

<style scoped>
</style>
