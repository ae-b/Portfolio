<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData($config) {
    const { data } = await axios.get(
      `${$config.MicroCmsApiUrl}`,
      {
        headers: { 'X-API-KEY': $config.MicroCmsApiKey },
      }
      //       // your-service-id部分は自分のサービスidに置き換えてください
      // process.env.URL,
      // {
      //   // your-api-key部分は自分のapi-keyに置き換えてください
      //   headers: { 'X-API-KEY':  process.env.X_API_KEY }
      // }
    )
    return data
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
