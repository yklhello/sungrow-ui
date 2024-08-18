<template>
  <sg-alert title="hello"></sg-alert>
  <div class="demo-collapse">
    <sg-collapse v-model="activeNames" @change="handleChange">
      <sg-collapse-item title="Consistency" name="1">
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </sg-collapse-item>
      <sg-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </sg-collapse-item>
      <sg-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div>
      </sg-collapse-item>
      <sg-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
          operate, including canceling, aborting or terminating current
          operation.
        </div>
      </sg-collapse-item>
    </sg-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const show = ref(true);
const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 3s ease-out;
}

.slide-fade-leave-active {
  transition: all 5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-fade-enter-to {
  opacity: 0.5;
}
</style>
