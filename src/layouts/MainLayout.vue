<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar>
        <q-btn
          to="/camera"
          class="large-screen-only"
          flat
          dense
          round
          icon="eva-camera-outline"
          size="18px"
        />

        <q-toolbar-title
        class="text-grand-hotel text-bold">
          Quasagram
        </q-toolbar-title>
        <q-btn
          to="/"
          class="large-screen-only"
          flat
          dense
          round
          icon="eva-home-outline"
          size="18px"
        />
      </q-toolbar>
    </q-header>

    <q-footer
      bordered
      class="bg-white small-screen-only">
      <q-tabs
        active-color="primary"
        class="text-grey-10"
        indicator-color="transparent"
      >
        <q-route-tab
          to="/"
          icon="eva-home-outline"
        />
        <q-route-tab
          to="/camera"
          icon="eva-camera-outline"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.q-toolbar__title
  text-align: center
  font-size: 30px

.q-footer
  .q-tab__icon
    font-size: 30px
</style>
