<template>
  <base-layout page_title='Home'>

      <obj-list :obj_lis="obj_lis"></obj-list>

  </base-layout>
</template>

<script>
import ObjList from '../components/ObjList.vue'

export default {
  components: {
    ObjList,
  },
  computed: {
    obj_lis() {
      return this.$store.getters.obj_lis_info;
    }
  } 
}
</script>
