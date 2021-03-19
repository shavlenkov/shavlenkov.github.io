<template>

  <Modal button="Modal1">
    <template v-slot:header>
      <h1>Header 1</h1>
    </template>
    <template v-slot:body>
      <h3>Body 1</h3>
    </template>
    <template v-slot:footer>
      <h4>Footer 1</h4>
    </template>
  </Modal><br/><br/>

  <Modal button="Modal2">
    <template v-slot:header>
      <h1>Header 2</h1>
    </template>
    <template v-slot:body>
      <h3>Body 2</h3>
    </template>
    <template v-slot:footer>
      <h4>Footer 2</h4>
    </template>
  </Modal><br/><br/>

  <Modal button="Modal3"> 
    <template v-slot:header>
      <h1>Header 3</h1>
    </template>
    <template v-slot:body>
      <h3>Body 3</h3>
    </template>
    <template v-slot:footer>
      <h4>Footer 3</h4>
    </template>
  </Modal>
   
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Modal from '@/components/Modal.vue';
  
  export default defineComponent({
    name: "ModalView",
    components: {
      Modal,
    },
   })
</script>