<template>
  <component
    :is="tag"
    :class="containerClass"
    @mouseover="hover = true"
    @mouseout="hover = false"
    @focus="active = true"
    @blur="active = false"
  ><span v-if="enableIcon" :class="classes.icon"></span>
   <span v-if="enableText" :class="classes.text">{{text}}<slot></slot></span>
  </component>
</template>

<script>
import { get, concatClasses } from "simter-vue-utils";

export default {
  props: {
    tag: {
      type: String,
      required: false,
      default: () => get("simter.button.tag", "button")
    },
    text: { type: String, required: false, default: "" },
    enableIcon: { type: Boolean, required: false, default: true },
    enableText: { type: Boolean, required: false, default: true },
    // all dom elements class
    classes: {
      type: Object,
      required: false,
      default: () =>
        get("simter.button.classes", {
          class: "st-button",
          hoverClass: "hover",
          focusClass: "focus"
        })
    }
  },
  data() {
    return { hover: false, active: false };
  },
  computed: {
    containerClass() {
      return concatClasses(
        this.classes.class,
        this.hover ? this.classes.hoverClass : undefined,
        this.active ? this.classes.focusClass : undefined
      );
    }
  }
};
</script>

<style>
/* default button style */
.st-button {
  position: relative;
  display: inline-block;
}
</style>