<template>
    <div>
        <Header />
        <ChangePassword />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import ChangePassword from "~/components/Admin/ChangePassword";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "password",
    components: {
        Header,
        ChangePassword,
        Footer
    },
};
</script>

<style>
</style>
