<template>
  <Row>
    <Column xs="12" sm="12" md="4" lg="4" xl="4" style="background: red;">Red</Column>
    <Column xs="12" sm="12" md="4" lg="4" xl="4" style="background: yellow;">Yellow</Column>
    <Column xs="12" sm="12" md="4" lg="4" xl="4" style="background: lime;">Green</Column>
  </Row>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Row from '@/components/grid/Row.vue';
  import Column from '@/components/grid/Column.vue';
  
  export default defineComponent({
    name: "GridView",
    components: {
      Row,
      Column
    },
   })
</script>
