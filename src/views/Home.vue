<template>
  <div class="home">
    <v-img
    dark
    max-height="500px"
    src="/Users/Darrel/Desktop/Portfolio/src/assets/one.jpg">

    <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
              >Welcome to my page.</div>
              <div
                :class="{'headline': $vuetify.breakpoint.smAndUp, 'subtitle-1': $vuetify.breakpoint.smAndDown}"
              >I make applications.</div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>

  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //
  }
}
</script>
