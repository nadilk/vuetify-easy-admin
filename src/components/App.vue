<template>
    <v-app id="inspire">
        <navigation-menu/>
        <app-bar/>

        <v-main>
            <v-container class="fill-height justify-center" fluid :class="[ $services.auth.isAuthorized ? 'align-start' : 'align-center' ]">
                <transition name="page" mode="out-in">
                    <router-view></router-view>
                </transition>
            </v-container>
        </v-main>

        <v-footer color="indigo" app v-if="$services.auth.isAuthorized">
            <span class="white--text">&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import NavigationMenu from "./layouts/NavigationMenu";
    import AppBar from "./layouts/AppBar";

    export default {
        components: {AppBar, NavigationMenu}
    }
</script>

<style>
    .page-enter-active, .page-leave-active {
        transition: .5s;
    }
    .page-enter, .page-leave-to {
        transform: translateX(10%);
        opacity: 0;
    }
</style>

