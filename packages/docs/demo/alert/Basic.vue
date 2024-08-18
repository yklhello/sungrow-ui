<template>
  <div style="max-width: 600px">
    <sg-alert title="Success alert" type="success" />
    <sg-alert title="Info alert" type="info" />
    <sg-alert title="Warning alert" type="warning" />
    <sg-alert title="Error alert" type="error" />
  </div>
</template>

<style scoped>
.sg-alert {
  margin: 20px 0 0;
}
.sg-alert:first-child {
  margin: 0;
}
</style>
