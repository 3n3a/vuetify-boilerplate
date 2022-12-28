<template>
   <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col
        cols="12"
        sm="4"
        >
        <h1 class="text-h2 font-weight-bold">Login</h1>
        <div class="py-14" />
        <LoginForm />
      </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  import LoginForm from '@/components/login/form/Form.vue'
</script>
