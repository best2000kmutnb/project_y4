<template>
  <ion-page>
    <ion-header>

      <ion-toolbar>
        <ion-buttons slot='start'>
          <ion-back-button :default-href='page_default_backlink'></ion-back-button>
        </ion-buttons>
        <ion-title>{{page_title}}</ion-title>
      </ion-toolbar>
      
    </ion-header>
    <ion-content>

        <slot/>
    
    </ion-content>
  </ion-page>
</template>

<script>
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonBackButton,
    IonButtons
} from '@ionic/vue'

export default { 
    props: ['page_title', 'page_default_backlink'],
    components: { 
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
        IonBackButton,
        IonButtons
    }
}
</script>
