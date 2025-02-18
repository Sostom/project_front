<template>
    <div>
        <PageHeader />
        <Faq />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import Faq from "~/components/Page/Faq";
import Footer from "~/components/Home/Footer";
export default {
    auth: false,
    name: "faq",
    components: {
        Faq,
        PageHeader,
        Footer
    },
};
</script>

<style scoped>
</style>
