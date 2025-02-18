<template>
    <div>
        <Header />
        <GetPropriete />
        <Footer />

    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import GetPropriete from "~/components/Admin/Propriete/GetPropriete.vue";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "get",
    components: {
        Header,
        GetPropriete,
        Footer
    },
};
</script>

<style>
</style>
