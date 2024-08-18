<template>
  <div class="sg-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch, watchEffect } from "vue";
import type { CollapseEmits, CollapseProps, CollapseItemName } from "./types";
import { COLLAPSE_CTX_KEY } from "./contants";
import { debugWarn } from "@sungrow-ui/utils";
const COMP_NAME = "SgCollapse" as const;

const emits = defineEmits<CollapseEmits>();
const props = defineProps<CollapseProps>();
const activeNames = ref(props.modelValue);
if (props.accordion && activeNames.value.length > 1) {
  debugWarn(COMP_NAME, "accordion mode should only have one active item");
}
const handleItemClick = (item: CollapseItemName) => {
  let _activeNames = [...activeNames.value];
  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? "" : item];
    updateActiveNames(_activeNames);
    return;
  }
  const index = _activeNames.indexOf(item);
  if (index > -1) {
    _activeNames.splice(index, 1);
  } else {
    _activeNames.push(item);
  }
  updateActiveNames(_activeNames);
};
const updateActiveNames = (newNames: CollapseItemName[]) => {
  activeNames.value = newNames;
  emits("update:modelValue", newNames);
  emits("change", newNames);
};
watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1) {
    debugWarn(COMP_NAME, "accordion mode should only have one active item");
  }
});
watch(
  () => props.modelValue,
  (newNames) => updateActiveNames(newNames)
);
provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
});
defineOptions({
  name: "SgCollapse",
});
</script>

<style>
@import "./style.css";
</style>
