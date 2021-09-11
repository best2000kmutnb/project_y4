<template>
  <base-layout page_title='ItemList'>
    <template v-slot:actions-end>
      <ion-button router-link="/item/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <obj-list :obj_lis="obj_lis"></obj-list>
  </base-layout>
</template>

<script>
import ObjList from '../components/ObjList.vue'
import {IonButton, IonIcon} from '@ionic/vue';
import {add} from 'ionicons/icons';

export default {
  components: {
    ObjList,
    IonButton,
    IonIcon
  },
  data () {
    return {add};
  },
  computed: {
    obj_lis() {
      return this.$store.getters.obj_lis_info;
    }
  } 
}
</script>
