<script setup lang="ts">
import { computed, inject, ref } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import SgIcon from "../Icon";
import { BUTTON_GROUP_CTX_KEY } from "./contants";
defineOptions({
  name: "SgButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const _ref = ref<HTMLButtonElement>();

const size = computed(() => {
  return ctx?.size ?? props.size ?? "";
});
const type = computed(() => {
  return ctx?.type ?? props.type ?? "";
});
const disabled = computed(() => {
  return ctx?.disabled ?? props.disabled ?? false;
});
const handleBtnClick = (e: MouseEvent) => {
  emits("click", e);
};
const handlBtneCLickThrottle = throttle(
  handleBtnClick,
  props.throttleDuration,
  {
    trailing: false,
  }
);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    class="sg-button"
    :class="{
      [`sg-button--${type}`]: type,
      [`sg-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading ? true : void 0"
    :type="tag === 'button' ? nativeType : void 0"
    :autofocus="autofocus"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handlBtneCLickThrottle(e) : handleBtnClick(e)
    "
  >
    <template v-if="loading">
      <slot name="loading">
        <sg-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
        ></sg-icon>
      </slot>
    </template>
    <sg-icon
      v-if="icon && !loading"
      :icon="icon"
      :style="{ marginLeft: icon && !loading && $slots.default && '6px' }"
    ></sg-icon>
    <slot></slot>
  </component>
</template>

<style>
@import "./style.css";
</style>
