<template>
  <span :title="year">{{val}}</span>
</template>

<script>
export default {
  name: "BirthDay",
  props: {
    day: Number,
    month: Number,
    year: Number,
  },
  computed: {
    val: function() {
      if (!this.day || !this.month) {
        return '-'
      }
      return this.day + ' ' + new Date(0, this.month, 0).toLocaleString('default', { month: 'long' });
    }
  }
}
</script>