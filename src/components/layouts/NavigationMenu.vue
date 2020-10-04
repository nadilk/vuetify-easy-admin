<template>
    <v-navigation-drawer
        app fixed temporary
        v-model="$app.ui.navigationMenu.isVisible"
        v-if="$app.auth.isAuthorized"
    >
        <v-list>
            <nested-menu-list-item v-for="item in items" :item="item"  :key="'menu_item_'+item.id"/>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import NestedMenuListItem from "../complex/NestedMenuListItem";

    export default {
        name      : "NavigationMenu",
        components: {NestedMenuListItem},
        computed  : {
            items(){
                return this.$store.getters.getMenuItems(0);
            }
        }
    }
</script>

<style scoped>

</style>
