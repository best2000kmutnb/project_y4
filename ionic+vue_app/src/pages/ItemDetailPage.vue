<template>
  <base-layout :page_title="loaded_obj ? loaded_obj.name : 'Loading...'" page_default_backlink='/'>
  <h2 v-if="!loaded_obj">lol nothin.</h2>
  <item-detail 
  v-else :name="loaded_obj.name"
  :img="loaded_obj.img"
  :desc="loaded_obj.desc"></item-detail>
  </base-layout>
</template>

<script>
import ItemDetail from '../components/ItemDetail.vue'

export default {
  components: {
    ItemDetail
  },
  data () {
    return {
      objId: this.$route.params.id
    }
  },
  computed: {
    loaded_obj() {
      return this.$store.getters.obj_in_lis(this.objId);
    }
  },
}
</script>
