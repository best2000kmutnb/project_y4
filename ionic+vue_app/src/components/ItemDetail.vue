<template>
    <ion-img :src="img" :alt="name"></ion-img>
    <h2>{{ name }}</h2>
    <p>{{ desc }}</p>
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