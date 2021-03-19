<template>
  <div>
    <input v-if="search"/><br/><br/>
    <table>
      <thead>
        <tr>
          <th v-for="column in config">{{column.title}}<i v-if="column.sortable" class="fas fa-sort">1</i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td v-for="c in config">{{user[c.value]}}</td>
        </tr>
      </tbody>

    </table>

  </div>
</template>

<script type="ts">
  import { defineComponent } from 'vue';
  import "..node/node_modules/font-awesome/scss/font-awesome"
   
  export default defineComponent({

    name: "DataTable",

    props: ["config", "users", "search"]


  });

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kufam:ital@1&display=swap');



input { width: 20%;	}

table {
  width: 100%;
  border: 0;
}

thead {
  background: linear-gradient(to bottom, #858585, #303030);
  color: #fff;
  font-size: 24px;
  font-family: 'Balsamiq Sans', cursive;

}
tbody {
  background: linear-gradient(to bottom, #b5b5b5, #8f8f8f);
  color: #fff;
  text-align: center;
  padding: 10px;
  font-family: 'Kufam', cursive;
}

tbody > tr:hover { background: linear-gradient(to bottom, #919191, #525252); }
</style>

