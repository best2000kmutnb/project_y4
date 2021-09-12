<template>
    <base-layout page_title="Add Item" page_default_backlink="/">
      <create-item-form @save-item="saveItem"></create-item-form>
    </base-layout>
</template>

<script>
import BaseLayout from '../components/BaseLayout.vue'
import CreateItemForm from '../components/CreateItemForm.vue'

export default {
  components: { 
    BaseLayout,
    CreateItemForm
    },
    methods: {
      saveItem(itemData) {
        this.$store.dispatch('addItem', itemData);
        this.$router.replace('/itemlistpage');
      }
    }
  }
</script>