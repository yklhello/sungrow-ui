<template>
  <div class="sg-button-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { ButtonGroupProps } from "./types";
import { provide, reactive, toRef } from "vue";
import { BUTTON_GROUP_CTX_KEY } from "./contants";

const props = defineProps<ButtonGroupProps>();
defineOptions({
  name: "ButtonGroup",
});
provide(
  BUTTON_GROUP_CTX_KEY,
  reactive({
    disabled: toRef(props, "disabled"),
    size: toRef(props, "size"),
    type: toRef(props, "type"),
  })
);
</script>

<style></style>
