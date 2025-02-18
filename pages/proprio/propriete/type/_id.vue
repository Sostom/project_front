<template>
    <div>
        <Header />
        <TypePropriete />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import TypePropriete from "~/components/Admin/Propriete/TypePropriete.vue";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "adminTypePropriete",
    components: {
        Header,
        TypePropriete,
        Footer
    },
};
</script>

<style>
</style>
