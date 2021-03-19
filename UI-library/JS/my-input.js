Vue.component("my-input", {

  props: ["title", "placeholder", "type", "required", "value", "pattern", "error_message"],

  methods: {
  	
    updateValue(value){
      this.$emit("input", value)
    },

  },

  template: "<div><h1>{{title}}<span v-if='required'>*</span></h1> <input :placeholder='placeholder' :type='type' :required='required' :value='value' @input='updateValue($event.target.value)' :pattern='pattern'/><br/><br/><i>{{value}}</i><br/><br/><span style='background: #e84a3f; color: white; padding: 10px;' v-if='!value.match(pattern) && !!value'>{{error_message}}</span></div>"
  
})
