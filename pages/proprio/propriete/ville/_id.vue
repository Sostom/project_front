<template>
    <div>
        <Header />
        <VillePropriete />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import VillePropriete from "~/components/Admin/Propriete/VillePropriete.vue";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "VillePropriete",
    components: {
        Header,
        VillePropriete,
        Footer
    },
};
</script>

<style>
</style>
