<template>
    <div>
        <PageHeader />
        <ContactDetails />
        <Footer />
    </div>
</template>

<script>
import PageHeader from "~/components/Home/PageHeader";
import ContactDetails from "~/components/Home/ContactDetails";
import Footer from "~/components/Home/Footer";
export default {
    auth: false,
    name: "contact",
    components: {
        Footer,
        ContactDetails,
        PageHeader,
    },
};
</script>

<style scoped>
</style>
