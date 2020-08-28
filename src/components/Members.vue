<template>
  <div class="container">
    <router-link to="/members/add">ADD</router-link>
    <router-link :to="'/members/edit/' + member.name" class="row" v-for="(member, idx) in members" :key="idx">
      <div class="col-sm">@{{member.name}}</div>
      <div class="col-sm">#{{member.group}}</div>
      <div class="col-sm"><BirthDay :year="member.year" :month="member.month" :day="member.day" /></div>
    </router-link>
  </div>
</template>

<script>
import BirthDay from './fields/BirthDay'

export default {
  name: "Members",
  components: {
    BirthDay
  },
  data() {
    return {
      members: [
        {
          group: 'c105',
          name: 'tramp',
          year: 1846,
          month: 6,
          day: 14
        },
        {
          group: 'heaven',
          name: 'jesus',
          year: 0,
          month: 1,
          day: 1
        },
        {
          name: 'anonymous',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>