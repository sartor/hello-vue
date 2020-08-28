<template>
  <div class="col-12 row">
    <div class="col-sm">{{event.data.name}}</div>
    <div class="col-sm" ><span :class="{'bg-warning': readySum < targetSum}">{{amount}}</span></div>
    <div class="col-sm"><BirthDay :year="event.data.year" :month="event.data.month" :day="event.data.day" /></div>
  </div>
</template>

<script>

import BirthDay from './fields/BirthDay'

export default {
  name: "BirthDayItem",
  props: {
    event: Object
  },
  components: {
    BirthDay
  },
  computed: {
    targetSum: function () {
      return this.event.data.target.type === 'amount' ? (this.event.data.target.value * this.event.data.target.members.length) : this.event.data.target.value * 1
    },
    readySum: function () {
      return this.event.data.target.members.reduce((readySum, member) => readySum + member.value, 0)
    },
    amount: function() {
      return [this.readySum, this.targetSum].join('/');
    }
  }
}
</script>