<template>
  <a
    class="sg-link"
    :class="[
      `sg-link--${type}`,
      underline ? `sg-link--underline` : void 0,
      disabled ? `sg-link--disabled` : void 0,
    ]"
    v-bind="$attrs"
  >
    <Icon v-if="icon" :icon="icon"></Icon>
    <slot name="icon"> </slot>
    <span><slot>默认值</slot></span>
  </a>
</template>
<script lang="ts" setup>
import type { LinkProps } from "./types";
import Icon from "../Icon";

const props = defineProps<LinkProps>();

defineOptions({
  name: "SgLink",
});
</script>
<style>
@import "./style.css";
</style>
