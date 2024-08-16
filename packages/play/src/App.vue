<script setup lang="ts">
import { SgAlert } from "sungrow-ui";
</script>

<template>
  <div style="max-width: 600px">
    <sg-alert title="Success alert" type="success" />
    <sg-alert title="Info alert" type="info" />
    <sg-alert title="Warning alert" type="warning" />
    <sg-alert title="Error alert" type="error" />
  </div>
  <div style="max-width: 600px">
    <sg-alert title="Success alert" type="success" effect="dark" />
    <sg-alert title="Info alert" type="info" effect="dark" />
    <sg-alert title="Warning alert" type="warning" effect="dark" center />
    <sg-alert title="Error alert" type="error" effect="dark" center />
  </div>
  <div style="max-width: 600px">
    <sg-alert title="Success alert" type="success" effect="dark" center />
    <sg-alert
      title="Info alert"
      type="info"
      effect="dark"
      close-text="关闭"
      show-icon="true"
    />
    <sg-alert title="Warning alert" type="warning" effect="dark"
      >hello</sg-alert
    >
    <sg-alert title="Error alert" type="error" effect="dark" />
  </div>
</template>
<style>
@import "sungrow-ui/dist/theme/Link.css";
</style>
