<script setup lang="ts">
import { computed, ref } from "vue";
import SgIcon from "../Icon";
import { typeIconMap } from "@sungrow-ui/utils";
import { type AlertPorps, type AlertInstance } from "./types";

defineOptions({
  name: "SgIcon",
});
const props = withDefaults(defineProps<AlertPorps>(), {
  effect: "light",
  type: "info",
  closable: true,
});
const emits = defineEmits(["close"]);
const visible = ref(true);
const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info");

const close = () => {
  visible.value = false;
  emits("close");
};
const open = () => {
  visible.value = true;
};
defineExpose<AlertInstance>({
  close,
  open,
});
</script>

<template>
  <transition name="sg-alert-fade">
    <div
      v-show="visible"
      class="sg-alert"
      :class="[
        type && `sg-alert--${type}`,
        effect && `sg-alert--${effect}`,
        center && `is-center`,
      ]"
    >
      <div class="sg-alert__content">
        <sg-icon
          v-if="showIcon"
          class="sg-alert__icon"
          :icon="iconName"
        ></sg-icon>
        <span class="sg-alert__title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="sg-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <span class="sg-alert__close" v-if="closeText" @click.stop="close">
          {{ closeText }}
        </span>
        <sg-icon
          v-else
          class="sg-alert__close"
          icon="close"
          @click.stop="close"
        ></sg-icon>
      </div>
    </div>
  </transition>
</template>

<style>
@import "./style.css";
</style>
