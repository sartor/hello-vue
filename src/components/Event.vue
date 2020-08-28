<template>
  <div class="container">
    <form>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">User</label>
        <div class="col-sm-10">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">@</div>
            </div>
            <input type="text" id="name" name="name" class="form-control" placeholder="Name" :value="$route.params.name">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Members</label>
        <div class="col-sm-10">
          <div class="container">
            <a href>ADD</a>
            <div class="row" v-for="(member, idx) in members" :key="idx">
              <div class="col-sm">@{{member.name}}</div>
              <div class="col-sm">${{member.amount || 0}}</div>
              <span class="col-sm text-danger" :href="$route.path" v-on:click.prevent:="delMember(idx)">X</span>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/" class="btn btn-primary my-1">Submit</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "MemberAdd",
  methods: {
    delMember(idx) {
      delete this.members[idx];
      this.members.splice(idx, 1)
    }
  },
  data() {
    return {
      members: [
        {
          name: 'tramp',
          amount: 1000,
        },
        {
          name: 'jesus',
          amount: 250
        },
        {
          name: 'anonymous',
        }
      ],
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>