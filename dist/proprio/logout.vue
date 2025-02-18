<template>
    <div class="container">
    </div>
</template>

<script>
export default {
    auth: true,
    name: "logout",
    mounted() {
        localStorage.removeItem('auth.loginState');
        this.$auth.logout();
        this.$router.push('/');
    },

    
};
</script>

<style scoped>
</style>
