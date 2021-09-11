<template>
    <ion-img :src="img" :alt="name"></ion-img>
    <h2 class="ion-text-center">{{ name }}</h2>
    <p class="ion-text-center">{{ desc }}</p>
</template>

<script>
import {IonImg} from '@ionic/vue';

export default {
    props: ['name', 'img', 'desc'],
    components: {
        IonImg
    }
}
</script>