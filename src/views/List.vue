<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12">
        <div class="card px-4 py-4">
          <div class="d-flex justify-content-between">
            <h3 style="bold">Book List</h3>
            <button type="button" @click="homepage" class="btn">return home page</button>
          </div><br/>
            <div v-for="(item, index) in $store.state.bookList" v-bind:key="index">
                <div class="px-3 py-3 mb-3">
                  <div class="d-flex justify-content-between">
                    <img :src="item.bookUrl" width="100px" /> 
                    <div>{{item.bookName}} <br/>
                    {{item.author}}</div>  
                    <button type="button" class="btn btn-danger btn-sm">Delete</button>     
                </div> 
                
                  
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'List',
   data() {
    return {
      bookList: [],
      updatedIndex: null,
    }
  },
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
