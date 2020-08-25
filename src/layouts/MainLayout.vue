<template >
  <q-layout view="lHh Lpr lFf">
    <q-header
        class="bg-white text-grey-10"
        bordered
    >
      <q-toolbar class="constrain">
        <q-btn
            to="/camera"
            class="large-screen-only q-mr-sm"
            icon="eva-camera-outline"
            size="18px"
            flat
            round
            dense
        />
        <q-separator
            class="large-screen-only"
            vertical
            spaced
        />
        <q-toolbar-title class="text-grand-hotel text-bold">
          Quasagram
        </q-toolbar-title >
        <q-btn
            to="/"
            class="large-screen-only"
            icon="eva-home-outline"
            size="18px"
            flat
            round
            dense
        />
      </q-toolbar >
    </q-header >

    <q-footer
        class="bg-white "
        bordered
    >
      <!--INSTALL APP BANNER-->
      <div class="banner-container bg-primary">
        <div class="constrain">

          <q-banner
              dense
              inline-actions
              class="bg-primary text-white justify-center"
          >
            <template v-slot:avatar>
              <q-avatar

                  color="white"
                  icon="eva-camera-outline"
                  text-color="grey-10"
                  size="32px"
                  font-size="24px"
              ></q-avatar >
            </template >

            <b >Install Quasagram?</b >

            <template v-slot:action>
              <q-btn
                  size="12px"
                  class="q-px-xs q-mx-sm"
                  dense
                  label="Later"
              />
              <q-btn
                  size="12px"
                  class="q-px-xs q-mx-sm"
                  dense
                  label="No Thanks"
              />
              <q-btn
                  size="12px"
                  push
                  color="green"
                  class="q-px-xs q-mx-sm text-bold"
                  dense
                  label="Yes"
              />
            </template >

          </q-banner >
        </div >
      </div >

      <q-tabs
          class="text-grey-10 small-screen-only"
          active-color="primary"
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
      </q-tabs >
    </q-footer >

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container >
  </q-layout >
</template >

<script >
export default {
  name: 'MainLayout',

  data() {
    return {}
  }
}
</script >

<style lang="sass">
.q-toolbar
  @media (min-width: $breakpoint-sm-min)
    height: 77px

.q-toolbar__title
  font-size: 30px
  @media (max-width: $breakpoint-xs-max)
    text-align: center

.q-footer
  .q-tab__icon
    font-size: 30px
</style >
