<template>
  <v-app-bar flat absolute color="transparent" dark height="120px">
    <v-layout>
      <v-container>
        <v-layout>
          <div
            :class="{'display-1 font-weight-bold': $vuetify.breakpoint.smAndUp,'title font-weight-bold': $vuetify.breakpoint.smAndDown, }"
          >Darrel T.</div>
          <v-spacer></v-spacer>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>