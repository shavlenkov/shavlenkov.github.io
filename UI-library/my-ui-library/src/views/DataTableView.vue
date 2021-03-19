<template>

  <DataTable :config="columns" :users="users" :search="search"/>
   
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import DataTable from '@/components/DataTable.vue';
  
  export default defineComponent({
    name: "DataTableView",

    components: {
      DataTable,
    },
    
    data() {

      return {

        columns: [
          {title: '№', value: 'id'},
          {title: 'Имя', value: 'name', sortable: true},
          {title: 'Фамилия', value: 'surname'},
          {title: 'Возраст', value: 'age'},
        ],

        users: [
          {id: 1, name: 'Вася', surname: 'Петров', age: 12},
          {id: 2, name: 'Вася', surname: 'Васечкин', age: 15},
        ],

        search: {
          fields: [],

        }

      


      }
    }
   })
</script>