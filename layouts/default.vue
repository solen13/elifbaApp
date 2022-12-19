<template >
  <v-app >
    <nav-bar/>
    <Nuxt />

  </v-app>
</template>

<script>
import NavBar from "~/components/nav-bar/nav-bar";
export default {
  name: 'DefaultLayout',
  components: {NavBar},


}
</script>
