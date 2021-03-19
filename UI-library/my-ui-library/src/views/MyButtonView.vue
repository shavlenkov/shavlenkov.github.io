<template>

  <MyButton :click="message" color="button-error" size="button-smoll">Button</MyButton>
  <MyButton :click="message" color="button-success" size="button-smoll">Button</MyButton>
  <MyButton :click="message" color="button-warning" size="button-smoll">Button</MyButton>
  <MyButton :click="message" color="button-info" size="button-smoll">Button</MyButton>
  <MyButton :click="message" color="button-black" size="button-smoll">Button</MyButton>
  <MyButton :click="message" color="button-white" size="button-smoll">Button</MyButton>
  <MyButton :click="message" color="button-primary" size="button-smoll">Button</MyButton>
  <MyButton :click="message" color="button-secondary" size="button-smoll">Button</MyButton><br/><br/>

  <MyButton :click="message" color="button-error" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-success" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-warning" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-info" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-black" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-white" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-primary" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-secondary" size="button-standart">Button</MyButton><br/><br/>

  <MyButton :click="message" color="button-error" size="button-big">Button</MyButton>
  <MyButton :click="message" color="button-success" size="button-big">Button</MyButton>
  <MyButton :click="message" color="button-warning" size="button-big">Button</MyButton>
  <MyButton :click="message" color="button-info" size="button-big">Button</MyButton>
  <MyButton :click="message" color="button-black" size="button-big">Button</MyButton>
  <MyButton :click="message" color="button-white" size="button-big">Button</MyButton>
  <MyButton :click="message" color="button-primary" size="button-big">Button</MyButton>
  <MyButton :click="message" color="button-secondary" size="button-big">Button</MyButton><br/><br/>

  <MyButton :click="message" color="button-error" size="button-standart" shape="button-circle">Button</MyButton>
  <MyButton :click="message" color="button-success" size="button-standart" shape="button-circle">Button</MyButton>
  <MyButton :click="message" color="button-warning" size="button-standart" shape="button-circle">Button</MyButton>
  <MyButton :click="message" color="button-info" size="button-standart" shape="button-circle">Button</MyButton>
  <MyButton :click="message" color="button-black" size="button-standart" shape="button-circle">Button</MyButton>
  <MyButton :click="message" color="button-white" size="button-standart" shape="button-circle">Button</MyButton>
  <MyButton :click="message" color="button-primary" size="button-standart" shape="button-circle">Button</MyButton>
  <MyButton :click="message" color="button-secondary" size="button-standart" shape="button-circle">Button</MyButton><br/><br/>

  <MyButton :click="message" color="button-error" size="button-standart" shape="button-edge">Button</MyButton>
  <MyButton :click="message" color="button-success" size="button-standart" shape="button-edge">Button</MyButton>
  <MyButton :click="message" color="button-warning" size="button-standart" shape="button-edge">Button</MyButton>
  <MyButton :click="message" color="button-info" size="button-standart" shape="button-edge">Button</MyButton>
  <MyButton :click="message" color="button-black" size="button-standart" shape="button-edge">Button</MyButton>
  <MyButton :click="message" color="button-white" size="button-standart" shape="button-edge">Button</MyButton>
  <MyButton :click="message" color="button-primary" size="button-standart" shape="button-edge">Button</MyButton>
  <MyButton :click="message" color="button-secondary" size="button-standart" shape="button-edge">Button</MyButton><br/><br/>
  
  <MyButton :click="message" color="button-gradient-error" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-gradient-success" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-gradient-warning" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-gradient-info" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-gradient-black" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-gradient-white" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-gradient-primary" size="button-standart">Button</MyButton>
  <MyButton :click="message" color="button-gradient-secondary" size="button-standart">Button</MyButton><br/><br/>

</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import MyButton from '@/components/MyButton.vue';
  
  export default defineComponent({
    name: "MyButtonView",
    components: {
      MyButton,
    },
    methods: {
      message: () => {
        alert("Hello, world!")
      }
    }
   })
</script>

