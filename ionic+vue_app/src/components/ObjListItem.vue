<template>
    <ion-item :router-link="`/item/${obj_lis_item.id}`">
        <ion-thumbnail slot="start"><ion-img :src="obj_lis_item.img" :alt="obj_lis_item.name+' pic'"></ion-img></ion-thumbnail>
        <ion-label>{{obj_lis_item.name}}</ion-label>
      </ion-item>
</template>

<script>
import {IonItem, IonThumbnail, IonImg, IonLabel} from '@ionic/vue';
export default {
    props: ["obj_lis_item"],
    components: {
        IonItem,
        IonThumbnail,
        IonImg,
        IonLabel,
    }

}
</script>