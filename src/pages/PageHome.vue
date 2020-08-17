<template>
  <q-page class="constrain q-pa-md">

    <q-card
      v-for="post in posts"
      :key="post.id"
      class="card-post q-mb-md"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="
https://lh3.googleusercontent.com/ogw/ADGmqu9_8g0o3hZm25AO3Ji1n2h5f2Zv9g3NocYpgM59=s83-c-mo
">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label
            class="text-bold"
          >tgrbtrfly
          </q-item-label>
          <q-item-label caption>
            {{ post.location }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator/>
      <img :src="post.imageURL"/>

      <q-card-section>
        <div>{{ post.caption }}</div>
        <div class="text-caption text-grey">{{ post.date }}</div>
      </q-card-section>


    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'My Heavenly Father Loves Me',
          date: 1597607469739,
          location: 'Kingdom of God',
          imageURL: "https://cdn.quasar.dev/img/mountains.jpg"
        }, {
          id: 2,
          caption: 'My Heavenly Father Loves Me',
          date: 1597607469739,
          location: 'Kingdom of God',
          imageURL: "https://cdn.quasar.dev/img/mountains.jpg"
        }, {
          id: 3,
          caption: 'My Heavenly Father Loves Me',
          date: 1597607469739,
          location: 'Kingdom of God',
          imageURL: "https://cdn.quasar.dev/img/mountains.jpg"
        }, {
          id: 4,
          caption: 'My Heavenly Father Loves Me',
          date: 1597607469739,
          location: 'Kingdom of God',
          imageURL: "https://cdn.quasar.dev/img/mountains.jpg"
        },
      ]
    }
  }
}
</script>

<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>
