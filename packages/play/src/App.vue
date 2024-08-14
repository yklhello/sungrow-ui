<script setup lang="ts">
import { SgIcon } from "sungrow-ui";
import { SgLink } from "sungrow-ui";
import { SgButton } from "sungrow-ui";
</script>

<template>
  <SgIcon icon="search" color="red"></SgIcon>
  <SgIcon icon="car"></SgIcon>
  <SgLink underline type="primary" icon="search">111</SgLink>
  <Sg-Button type="primary" @click="console.log(222)"></Sg-Button>
  <h1>hello</h1>
</template>
<style>
@import "sungrow-ui/dist/theme/Link.css";
</style>
