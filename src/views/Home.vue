<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-6">
        <div class="card px-4 py-4">
            <h3 style="bold">Book Store Operation</h3><br/>
            <button  @click="addBook" class="btn btn-secondary">Add New Book</button> <br/>
            <button @click="bookList" class="btn btn-secondary">Book List</button>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card px-4 py-4">
            <h3 style="bold">User Operation</h3><br/>
            <button @click="setUser" class="btn btn-secondary">Set to User</button> <br/>
            <button @click="getUser" class="btn btn-secondary">Get from User</button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  methods:{
      addBook() {
        this.$router.push({
          name: 'Add',
             })
          },
      bookList() {
        this.$router.push({
          name: 'List',
            })
        },
      setUser() {
        this.$router.push({
          name: 'SetUser',
            })
        },
      getUser() {
        this.$router.push({
          name: 'GetUser',
            })
        },
  },
}
</script>
