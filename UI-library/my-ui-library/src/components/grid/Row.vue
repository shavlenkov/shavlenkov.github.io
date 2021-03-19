<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
   
  export default defineComponent({

    name: "Row",

  })
</script>

<style>

  body { margin: 0; }
	  
  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

</style>