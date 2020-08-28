<template>
  <div class="container">
    <form>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input type="text" id="name" name="name" class="form-control" placeholder="Username" :value="member.name">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="inputBirthDay" class="col-sm-2 col-form-label">Birth Day</label>
        <div class="col-sm">
          <input type="text" class="form-control" id="inputBirthDay" placeholder="YYYY/MM/DD" :value="bd">
        </div>
      </div>
      <router-link to="/members" class="btn btn-primary my-1">Submit</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "MemberAdd",
  data() {
    console.log(this.$route.params)
    return {
      members: {
        "tramp": {
          year: 1846,
          month: 6,
          day: 14,
          group: 'c105',
        },
        "jesus": {
          year: 0,
          month: 1,
          day: 1,
          group: 'heaven',
        },
        "anonymous": {}
      },
    }
  },
  computed: {
    member: function () {
      if (this.$route.params.name && this.members[this.$route.params.name]) {
        return { ...{ name: this.$route.params.name}, ...this.members[this.$route.params.name]}
      }
      return {};
    },
    bd: function() {
      if (this.member.day === undefined || this.member.month === undefined) {
        return ''
      }
      return [(this.member.year + '').padStart(4, '0'), (this.member.month + '').padStart(2, '0'), (this.member.day + '').padStart(2, '0')].join('/');
    }
  }
}
</script>

<style scoped>

</style>