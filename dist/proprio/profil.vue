<template>
    <div>
        <Header />
        <UserInfo />
        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Admin/Header";
import UserInfo from "~/components/Admin/UserInfo";
import Footer from "~/components/Admin/Footer";

export default {
    auth: true,
    name: "profil",
    components: {
        Header,
        UserInfo,
        Footer
    },
};
</script>

<style>
</style>
