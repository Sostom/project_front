<template>
    <div>
        <Header />
        <AddPropriete />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import AddPropriete from "~/components/Admin/Propriete/AddPropriete.vue";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "add",
    components: {
        Header,
        AddPropriete,
        Footer
    },
};
</script>

<style>
</style>
