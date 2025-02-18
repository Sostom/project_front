<template>
    <div>
        <Header />
        <VoirPropriete />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import VoirPropriete from "~/components/Admin/Propriete/VoirPropriete.vue";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "voir",
    components: {
        Header,
        VoirPropriete,
        Footer
    },

    mounted() {
        $(".project-carousel-2").owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            dots: false,
            margin: 30,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>",
            ],
            responsive: {
                0: {
                    items: 1,
                },
                700: {
                    items: 2,
                },
                1000: {
                    items: 3,
                },
            },
        });
    },
};
</script>

<style>
</style>
