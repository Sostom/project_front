<template>
    <div>
        <PageHeader />
        <PageTitle pageTitle="Créez votre compte" />
        <Signup />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import PageTitle from "~/components/Page/PageTitle";
import Signup from "~/components/Page/Signup";
import Footer from "~/components/Home/Footer";
export default {
    auth: false,
    components: {
        Signup,
        Footer,
        PageTitle,
        PageHeader,
    },
};
</script>

<style scoped>
</style>
