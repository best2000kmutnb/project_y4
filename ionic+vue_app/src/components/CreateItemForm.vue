<template>
    <form class="ion-padding" @submit.prevent="submitForm">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input type="text" required v-model="enteredName"/>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image URL</ion-label>
          <ion-input type="url" required v-model="enteredImgURL"/>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea rows="5" v-model="enteredDesc"></ion-textarea>
        </ion-item>
      </ion-list>
      <ion-button type="submit" expand="full" class="ion-padding">Submit</ion-button>
      </form>
      
</template>

<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue'

export default {
  emits: ['save-item'],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  },
  data() {
    return {
      enteredName: '',
      enteredImgURL: '',
      enteredDesc: ''
    };
  },
  methods: {
    submitForm() {
      const itemData = {
        name: this.enteredName,
        img: this.enteredImgURL,
        desc: this.enteredDesc
      };
      this.$emit('save-item', itemData);
    }
  }
}
</script>