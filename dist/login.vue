<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Accédez à votre compte" />
        <Login />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Login from "~/components/Page/Login";
import Footer from "~/components/Home/Footer";
export default {
    middleware: 'auth',
    auth: false,
    components: {
        Login,
        Footer,
        PageTitle,
        PageHeader,
    },
};
</script>

<style scoped>
</style>
