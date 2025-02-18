<template>
    <div>
        <PageHeader />
        <Home />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import Home from "~/components/Home/Home";
import Footer from "~/components/Home/Footer";

export default {
    auth: false,
    components: {
        PageHeader,
        Home,
        Footer
    },
};
</script>

<style>
</style>
