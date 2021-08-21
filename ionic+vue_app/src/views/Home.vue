<template>
  <base-layout page_title='Home'>

      <ion-list>
        <ion-item router-link='/anotherpage/1'>AnotherPage1</ion-item>
        <ion-item router-link='/anotherpage/2'>AnotherPage2</ion-item>
        <ion-item router-link='/anotherpage/3'>AnotherPage3</ion-item>
      </ion-list>

  </base-layout>
</template>

<script>
import { 
  IonList,
  IonItem
} from '@ionic/vue'

export default {
  components: {
    IonList,
    IonItem
  }
}
</script>
