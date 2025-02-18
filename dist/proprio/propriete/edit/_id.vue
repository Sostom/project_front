<template>
    <div>
        <Header />
        <EditPropriete />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import EditPropriete from "~/components/Admin/Propriete/EditPropriete.vue";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "edit",
    components: {
        Header,
        EditPropriete,
        Footer
    },
};
</script>

<style>
</style>
