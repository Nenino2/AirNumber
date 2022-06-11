<template>
    <div class="field">
        <input class="input" :type="type" v-model="value" :placeholder="placeholder" />
        <div class="line"></div>
    </div>
</template>

<script lang="ts">
import { Model, Prop, Vue } from 'vue-property-decorator';

export default class AppInput extends Vue {
  @Prop({default: "text"})
  type: string;

  @Prop()
  placeholder: string;

  @Model("modelValue")
	value: string;

}
</script>

<style lang="scss" scoped>
.input {
  background: 0;
  border: 0;
  outline: none;
  width: 80vw;
  max-width: 400px;
  font-size: 1rem;
  transition: padding 0.3s 0.2s ease;

  &:focus {
    padding-bottom: 5px;
  }

  // sibling magic ;o
  &:focus + .line {
    &:after {
      transform: scaleX(1);
    }
  }
}

.field {
  position: relative;
  margin: 1rem 0;

  .line {
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -8px;
    background: #bdc3c7;

    &:after {
      content: " ";
      position: absolute;
      float: right;
      width: 100%;
      height: 3px;
      
      transform: scalex(0);
      transition: transform 0.3s ease;
      
      background: #437DC4;
    }
  }
}
</style>