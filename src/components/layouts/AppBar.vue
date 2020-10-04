<template>
    <v-app-bar app color="indigo" dark v-if="$services.ui.appBar.isVisible"
               src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <v-app-bar-nav-icon @click.stop="$services.ui.toggleNavigationMenu()"></v-app-bar-nav-icon>
        <v-toolbar-title>Панель Администратора</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="$services.auth.logout">
            <v-icon>mdi-export</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name    : "AppBar"
    }
</script>

<style scoped>

</style>
