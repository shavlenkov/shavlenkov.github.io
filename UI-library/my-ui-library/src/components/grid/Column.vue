<template>
  <div :class="'col-xs' + '-' + xs + ' ' + 'col-sm' + '-' + sm + ' ' + 'col-md' + '-' + md + ' ' + 'col-lg' + '-' + lg + ' ' + 
  'col-xl' + '-' + xl + ' '">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
   
  export default defineComponent({

    name: "Column",
    
    props: ["xs", "sm", "md", "lg", "xl"]

  })
</script>

<style lang="less">

/* Extra small */

@media (max-width: 576px) {
  .xs(12);
    .xs(@col, @i: 1) when(@i <= @col){
      .col-xs-@{i} {
        width: (100% / @col * @i);
      }
      .xs(@col, (@i + 1));
  }

}


/* Smoll */

@media (min-width: 576px) and (max-width: 768px) {

  .sm(12);
    .sm(@col, @i: 1) when(@i <= @col){
    .col-sm-@{i} {
      width: (100% / @col * @i);
    }
    .sm(@col, (@i + 1));
  }
  

  
}

/* Medium */

@media (min-width: 768px) and (max-width: 992px) {
 
  .md(12);
   .md(@col, @i: 1) when(@i <= @col){
    .col-md-@{i} {
      width: (100% / @col * @i);
    }
    .md(@col, (@i + 1));
  }

}

/* Large */

@media (min-width: 992px) and (max-width: 1200px) {


  .lg(12);
    .lg(@col, @i: 1) when(@i <= @col){
    .col-lg-@{i} {
      width: (100% / @col * @i);
    }
    .lg(@col, (@i + 1));
  }
}
   
/* Extra large */

@media (min-width: 1200px) {

  .xl(12);
    .xl(@col, @i: 1) when(@i <= @col){
    .col-xl-@{i} {
      width: (100% / @col * @i);
    }
    .xl(@col, (@i + 1));
  }
}
</style>