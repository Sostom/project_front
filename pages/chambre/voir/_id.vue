<template>
    <div>
        <PageHeader />
        <VoirPropriete />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import VoirPropriete from "~/components/Home/chambre/VoirPropriete.vue";
import Footer from "~/components/Home/Footer";

export default {
    auth: false,
    name: "voir",
    components: {
        PageHeader,
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
