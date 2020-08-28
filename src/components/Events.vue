<template>
  <div class="container">
    <router-link to="/events/add">ADD BD</router-link>
    <router-link :to="'/events/edit/' + event.data.name" class="row" v-for="(event, idx) in events" :key="idx">
      <BirthDayItem :event="event"></BirthDayItem>
    </router-link>
  </div>
</template>

<script>

import BirthDayItem from './BirthDayItem'

export default {
  name: "Events",
  components: {
    BirthDayItem,
  },
  data() {
    return {
      events: [
        {type: 'bd', data: {name: '@tramp BD', year: 1846, month: 6, day: 14, target: {type: 'amount', value: 2000, members: [
                {name: '@anonymous', value: 250},
                {name: '@tramp', value: 1000}
              ]}}},
        {type: 'bd', data: {name: '@anonymous BD', target: {type: 'gift', value: 250, members: [
                {name: '@tramp', value: 250}
              ]}}},
      ]
    }
  }
}
</script>

<style scoped>
  a.row {
    text-decoration: none !important;
  }
</style>