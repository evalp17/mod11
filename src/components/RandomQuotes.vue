<template>
  <section>
    <h1>Random Quote Generator</h1>

    <p v-if="loading">Loading...</p>
    <p v-else>{{ quote }}</p>
    <p v-if="author">— {{ author }}</p>

    <button @click="getQuote">Get New Quote</button>
    <GoBackButton />
  </section>
</template>

<script>
import axios from 'axios'
import GoBackButton from './GoBackButton.vue'

export default {
  components: { GoBackButton },
  data() {
    return { loading: false, quote: '', author: '' }
  },
  methods: {
    async getQuote() {
      this.loading = true
      try {
        const res = await axios.get(
          'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en',
          {
            headers: {
              'x-rapidapi-host': 'quotes15.p.rapidapi.com',
              'x-rapidapi-key': 'fa4a7b46e8msh71fb0a44627a703p15e2dajsn926f71292299'
            }
          }
        )
        this.quote = res.data.content
        this.author = res.data.originator?.name || ''
      } catch (e) {
        console.error('Fetch failed:', e)
        this.quote = 'Oops! Something went wrong.'
        this.author = ''
      } finally {
        this.loading = false
      }
    }
  },
  mounted() { this.getQuote() }
}
</script>
