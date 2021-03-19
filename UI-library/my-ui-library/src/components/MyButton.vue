<template>
  <button @click="click" :class="color + ' ' + size + ' ' + shape + ' ' + state"><slot></slot></button>
</template>

<script lang="ts">

  import { defineComponent } from 'vue';
   
  export default defineComponent({

    name: "MyButton",

    props: ["click", "color", "size", "shape", "state"]

  });

</script>

<style lang="less">
/* Colors */

@black: #000;
@white: #fff;

@alpha: rgba(0, 0, 0, 0.0);
@alpha-error: #fcd9d7;
@alpha-success: #d5f7d5;
@alpha-warning: #ffffd9;
@alpha-info: #d6ffff;
@alpha-primary: #d6d6ff;

@color-error: #ff0000;
@color-error-hover: #cf0000;
@color-success: #00ff00;
@color-success-hover: #00c900;
@color-warning: #ffff00;
@color-warning-hover: #c9c900;
@color-info: #00ffff;
@color-info-hover: #00cfcf;
@color-black: #292929;
@color-white-hover: #d1d1d1;
@color-primary: #0000ff;
@color-primary-hover: #0000cf;
@color-secondary: #808080;
@color-secondary-hover: #595959;

button {
  margin: 3px;
}

button.button-error {
  background-color: @color-error;
  color: @white;
}

button.button-error:hover {
  background-color: @color-error-hover;
}

button.button-error:focus {
  background: @alpha;
  color: @color-error;
  outline: none;
  border: 3px solid @color-error; 
}
    
button.button-success {
  background-color: @color-success;
  color: @black;
}
    
button.button-success:hover {
  background-color: @color-success-hover;
}

button.button-success:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-success; 
  color: @color-success;
}

button.button-warning {
  background-color: @color-warning;
  color: @black;
}
    
button.button-warning:hover {
  background-color: @color-warning-hover;
}
     
button.button-warning:focus {
  background: @alpha;     
  outline: none;
  border: 3px solid @color-warning; 
  color: @color-warning;
}

button.button-info {
  background-color: @color-info;
  color: @black;
}

button.button-info:hover {
  background-color: @color-info-hover;
}

button.button-info:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-info; 
  color: @color-info;
}

button.button-black {
  background-color: @color-black;
  color: @white;
}

button.button-black:hover {
  background-color: @black;
}

button.button-black:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-black; 
  color: @color-black;
}

button.button-white {
  background-color: @white;
  color: @black;
}

button.button-white:hover {
  background-color: @color-white-hover;
}

button.button-white:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @white; 
  color: @white;
  }

button.button-primary {
  background-color: @color-primary;
  color: @white;
}

button.button-primary:hover {
  background-color: @color-primary-hover;
}

button.button-primary:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-primary; 
  color: @color-primary;
}

button.button-secondary {
  background-color: @color-secondary;
  color: @white;
}

button.button-secondary:hover {
  background-color: @color-secondary-hover;
}

button.button-secondary:focus {
  background: @alpha;
  outline: none;
  border: 3px solid @color-secondary; 
  color: @color-secondary;
}

/* Sizes */

button.button-smoll {
  font-size: 20px;
}

button.button-standart {
  font-size: 40px;
}

button.button-big {
  font-size: 60px;
}

/* Shape */
   
button.button-circle {
  border-radius: 50%;
  padding: 25px;
  outline: none;
}

button.button-edge {
  border-radius: 10px;
  outline: none;
}

/* State */

button.button-disabled:disabled {
  opacity: 0.3;
}

/* Gradient */

button.button-gradient-error {
  background: linear-gradient(to bottom, @alpha-error, @color-error);
  color: @white;
}

button.button-gradient-success {
  background: linear-gradient(to bottom, @alpha-success, @color-success);
}

button.button-gradient-warning {
  background: linear-gradient(to bottom, @alpha-warning, @color-warning);
}

button.button-gradient-info {
  background: linear-gradient(to bottom, @alpha-info, @color-info);
}

button.button-gradient-black {
  background: linear-gradient(to bottom, @color-white-hover, @black);
  color: @white;
}

button.button-gradient-white {
  background: linear-gradient(to bottom, @white, @color-white-hover);
}

button.button-gradient-primary {
  background: linear-gradient(to bottom, @alpha-primary, @color-primary);
  color: @white;
}
    
button.button-gradient-secondary {
  background: linear-gradient(to bottom, @color-white-hover, @color-secondary);
  color: @white;
}

</style>