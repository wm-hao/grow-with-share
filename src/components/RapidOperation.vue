<template>
    <!--    <v-card flat="" class="d-flex justify-end">-->
    <!--        <v-btn-->
    <!--                dark-->
    <!--                top-->
    <!--                fab=""-->
    <!--                right-->
    <!--                color="pink"-->
    <!--                small-->
    <!--        >-->
    <!--            <v-icon>mdi-home</v-icon>-->
    <!--        </v-btn>-->
    <!--      -->
    <!--    </v-card>-->
    <v-row style="height: 50px">
        <v-col>
            <v-btn
                    right
                    dark
                    top
                    fab=""
                    color="green"
                    small
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
        <v-col>
            <v-btn
                    dark
                    top
                    fab=""
                    right
                    color="pink"
                    small
            >
                <v-icon>mdi-home</v-icon>
            </v-btn>
        </v-col>

    </v-row>


</template>

<script>
    export default {
        name: "RapidOperation"
    }
</script>

<style scoped>

</style>
