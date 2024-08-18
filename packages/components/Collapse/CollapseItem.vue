<template>
  <div
    class="sg-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="sg-collapse-item__header"
      :id="`item-header-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleItemClick"
    >
      <span class="sg-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </span>

      <sg-icon class="header-angle" icon="angle-right"></sg-icon>
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="sg-collapse-item__wapper" v-show="isActive">
        <div class="sg-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from "./types";
import SgIcon from "../Icon";
import { computed, inject } from "vue";
import { COLLAPSE_CTX_KEY } from "./contants";
import transitionEvents from "./transitionEvents";

const props = defineProps<CollapseItemProps>();
defineOptions({
  name: "SgCollapseItem",
});
const ctx = inject(COLLAPSE_CTX_KEY, void 0);
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name));
const handleItemClick = () => {
  if (props.disabled) return;
  ctx?.handleItemClick(props.name);
};
</script>

<style></style>
