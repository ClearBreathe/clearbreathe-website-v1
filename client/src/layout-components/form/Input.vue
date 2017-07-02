<template>
  <div class="form-group">
    <label v-if="id" :for="id">{{label}}</label>

    <!-- the input might be one of the following -->
    <input v-if="useInputTag"
      class="form-control"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :required="required">
    </input>

    <textarea v-if="type === 'textarea'"
      class="form-control"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :required="required">
      <slot></slot> 
    </textarea>

    <button v-if="type === 'button'"
      class="btn btn-primary"
      :id="id"
      :name="name">
      <slot></slot> 
    </button>
  </div>
</template>

<script>
const INPUT_TAG_TYPES = ['text', 'email', 'password'];
const VALID_TYPES = INPUT_TAG_TYPES.concat([
  'textarea',
  'button',
]);
export default {
  props: {
    'label': {
      type: String,
      default: '',
    },
    'id': {
      type: String,
      default: '',
    },
    'name': {
      type: String,
      default: '',
    },
    'placeholder': {
      type: String,
      default: '',
    },
    'required': {
      type: Boolean,
      default: false,
    },
    'type': {
      type: String,
      default: 'text',
      validator: (t) => VALID_TYPES.includes(t),
    },
  },
  computed: {
    useInputTag: function(){
      return INPUT_TAG_TYPES.includes(this.type);
    }
  },
}
</script>

<style>
</style>
