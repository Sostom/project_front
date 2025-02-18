<template>
    <div>
        <Header />
        <Dashbord />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import Dashbord from "~/components/Admin/Dashbord";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "home",
    components: {
        Header,
        Dashbord,
        Footer
    },
};
</script>

<style>
</style>
