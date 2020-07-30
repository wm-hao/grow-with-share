<template>
    <div></div>
</template>

<script>
    export default {
        name: "Blank",
        created() {
            const path = this.$route.query.destUrl;
            this.$router.push({
                path
            });
        }
    }
</script>

<style scoped>

</style>