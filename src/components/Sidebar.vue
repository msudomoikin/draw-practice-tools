<template>
  <v-container>
    <v-list nav>
      <v-list-subheader class="text-uppercase">Упражнения</v-list-subheader>
      <v-list-item to="/random-word">
        <v-list-item-title>Случайное слово</v-list-item-title>
      </v-list-item>

      <v-list-item to="/random-line">
        <v-list-item-title> Случайная линия </v-list-item-title>
      </v-list-item>

      <v-list-item to="/random-spots">
        <v-list-item-title>Случайные пятна</v-list-item-title>
      </v-list-item>

      <v-list-item to="/random-prop">
        <v-list-item-title>Случайное словосочетание</v-list-item-title>
      </v-list-item>
      <v-list-subheader class="text-uppercase">3D-Модели</v-list-subheader>
      <v-list-item to="/skull">
        <v-list-item-title>Пропорции черепа</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-container>
</template>
