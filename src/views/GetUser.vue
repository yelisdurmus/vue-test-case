<template>
  <div class="home">
    <div class="row">
      <div class="col-sm-12">
        <div class="card px-4 py-4">
          <div class="d-flex justify-content-between">
            <h3 style="bold">Get from User</h3>
            <button type="button" @click="homepage" class="btn">return home page</button>
          </div><br/>
          <div class="mb-3">
            <select class="w-100 px-1 py-1" name="book" v-model="user">
              <template v-for="(item) in $store.state.userList">
                 <option v-bind:key="item.userID">
                    {{ item.book }}
                 </option>
               </template>
            </select>
          </div>   
          Completed Todos: {{ filteredItems }}
        <div
                v-for="(item, index) in filteredItems"
                v-bind:key="index"
                :number="item.number"
                :name="item.name"
                :adress="item.adress"
        />  
        </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState, mapGetters } from  'vuex';
export default {
  name: 'GetUser',
   data() {
    return {
      user:'',
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
  },
  computed: mapGetters([
    ]),
    filteredItems(){
        return this.userList.filter((item) => item.bookName === this.selectedFilterValue);
    }
}
</script>
