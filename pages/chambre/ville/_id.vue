<template>
    <div>
        <PageHeader />
        <VillePropriete />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import VillePropriete from "~/components/Home/chambre/VillePropriete.vue";
import Footer from "~/components/Home/Footer";

export default {
    auth: false,
    name: "ProprietesVille",
    components: {
        PageHeader,
        VillePropriete,
        Footer
    },
};
</script>

<style>
</style>
