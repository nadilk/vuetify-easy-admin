<template>
  <component :is="itemComponent" :value="isActive" @click="itemClick($event,item)">
    <template v-slot:activator v-if="hasChildren">
      <v-list-item-title v-text="item.text"></v-list-item-title>
    </template>
    <template v-slot:default v-if="!hasChildren">
      <v-list-item-title v-text="item.text"></v-list-item-title>
    </template>
    <template v-if="hasChildren">
      <v-list class="ml-3">
        <nested-menu-list-item v-for="childItem in children" :item="childItem"
                               :key="'menu_item_'+childItem.id"></nested-menu-list-item>
      </v-list>
    </template>
  </component>
</template>

<script>
export default {
  name: "NestedMenuListItem",
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    itemClick(e, item) {
      if (this.item.click) {
        this.item.click();
      } else if (!this.hasChildren && !this.isCurrentRoute) {
        this.$router.push(item.url);
      }

    }
  },
  computed: {
    children() {
      return this.$store.getters['main/getMenuItems'](this.item.id);
    },
    hasChildren() {
      return this.children.length > 0;
    },
    itemComponent() {
      const vueComponents = this.$root.$options.components;
      return this.hasChildren ? vueComponents.VListGroup : vueComponents.VListItem;
    },
    isActive() {
      return this.hasChildren ? this.item.isExpanded : this.isCurrentRoute;
    },
    isCurrentRoute() {
      return this.item.url == this.$router.currentRoute.path;
    }
  }
}
</script>

<style scoped>

</style>


