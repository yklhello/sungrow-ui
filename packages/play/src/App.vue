<script setup lang="ts">
import { SgIcon } from "sungrow-ui";
import { SgLink } from "sungrow-ui";
import { SgButton, SgButtonGroup } from "sungrow-ui";
</script>

<template>
  <sg-button type="primary" icon="search" @click="console.log(222)"
    >hello</sg-button
  >
  <sg-button type="danger">危险</sg-button>
  <br />
  <sg-button-group>
    <sg-button type="primary">基础</sg-button>
    <sg-button type="danger">危险</sg-button>
    <sg-button type="danger">危险</sg-button>
  </sg-button-group>
  <h1>hello</h1>
  <SgIcon icon="search" color="red"></SgIcon>
  <SgIcon icon="spinner"></SgIcon>
  <SgLink underline type="primary" icon="search">111</SgLink>
</template>
<style>
@import "sungrow-ui/dist/theme/Link.css";
</style>
