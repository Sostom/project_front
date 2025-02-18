<template>
    <div>
        <PageHeader />
        <GetPropriete />
        <Footer />

    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import GetPropriete from "~/components/Home/chambre/GetPropriete.vue";
import Footer from "~/components/Home/Footer";

export default {
    auth: false,
    name: "get",
    components: {
        PageHeader,
        GetPropriete,
        Footer
    },
};
</script>

<style>
</style>
