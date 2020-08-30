<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12">
        <div class="card px-4 py-4">
          <div class="d-flex justify-content-between">
            <h3 style="bold">Get from User</h3>
            <button type="button" @click="homepage" class="btn">return home page</button>
          </div><br/>
            <button  @click="addBook" class="btn btn-secondary">Add New Book</button> <br/>
            <button @click="bookList" class="btn btn-secondary">Book List</button>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'List',
  components: {
  },
  methods:{
      homepage() {
                this.$router.push({
                name: 'Home',
                    })
          },
  }
}
</script>
