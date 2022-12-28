<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="username"
      label="Username"
      :rules="usernameRules"
      required
    />

    <v-text-field
      v-model="password"
      label="Password"
      :rules="passwordRules"
      type="password"
      required
    />

    <v-btn
      class="mr-4"
      @click="validateSubmit"
    >
    Login
  </v-btn>
  <v-btn
    @click="reset">
    Cancel
  </v-btn>
  </v-form>
</template>


<script lang="ts">
  export default {
    data: () => ({
      valid: false,
      username: '',
      usernameRules: [
        (v: string) => !!v || 'Username is required',
        (v: string) => (v && v.length >= 5) ||  'Username must be longer then 5 characters',
      ],
      password: '',
      passwordRules: [
        (v: string) => !!v || 'Password is required',
        (v: string) => (v && v.length >= 12) || 'Password has a minimum length of 12 characters',
        (v: string) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(v) || 'Password must contain lowercase, uppercase and special characters'
      ]
    }),

    methods: {
      async validateSubmit () {
        // @ts-ignore
        const { valid } = await this.$refs.form.validate()

        if (valid) console.log('handleFormSubmit')
      },
      reset () {
        // @ts-ignore
        this.$refs.form.reset()
      },
    },
  }

</script>
