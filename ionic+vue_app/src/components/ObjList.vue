<template>
    <ion-list>
      <obj-list-item 
      v-for="obj_lis_item in obj_lis" 
      :key="obj_lis_item.id"
      :obj_lis_item="obj_lis_item"
      ></obj-list-item>
      </ion-list>
</template>

<script>
import {IonList} from '@ionic/vue';
import ObjListItem from './ObjListItem.vue';

export default {
    props: ["obj_lis"],
    components: {
        IonList,
        ObjListItem
    }
}
</script>
