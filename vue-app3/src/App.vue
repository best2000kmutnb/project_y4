<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <button v-on:click="funk()">manual token</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    funk() {
      const OmiseJS = window.Omise;

      OmiseJS.setPublicKey("pkey_test_5q7y10905wrdfyfy8nc");

      const tokenParameters = {
        city: "New York",
        country: "US",
        expiration_month: 2,
        expiration_year: 2022,
        name: "Somchai Prasert",
        number: "4242424242424242",
        phone_number: "0123456789",
        postal_code: 10320,
        security_code: 123,
        state: "NY",
        street1: "476 Fifth Avenue",
      };

      OmiseJS.createToken(
        "card",
        tokenParameters,
        function (statusCode, response) {
          // response["id"] is token identifier

          console.log(response);
        }
      );
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
