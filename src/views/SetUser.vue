<template>
    <div class="container mt-3">
        <form @submit.prevent="setUser">
            <div class="d-flex justify-content-between">
             <h3 style="bold">Set to User</h3>
             <button type="button" @click="homepage" class="btn">return home page</button>
            </div><br/>
            <div class="mb-3">
                 <select class="w-100 px-1 py-1" name="book" v-model="formModel.book">
                                <template v-for="(item) in $store.state.bookList">
                                    <option v-bind:key="item.bookID">
                                        {{ item.bookName }}
                                    </option>
                                </template>
                            </select>
            </div>
            <div class="mb-3">
                <input type="text" v-model="formModel.number"
                       id="inputNumber"
                       class="form-control"
                       placeholder="Please insert user identity number"
                       required=""
                       autofocus="">
            </div>
            <div>
                <input type="text" v-model="formModel.name"
                       id="inputName"
                       class="form-control"
                       placeholder="Please enter user name and surname"
                       required=""
                       autofocus="">
            </div>
            <div class="mt-3">
                <input type="text"  v-model="formModel.adress"
                       id="inputAdress"
                       class="form-control"
                       placeholder="Please enter user address"
                       required="">
            </div>
            <button class="mt-3 btn btn-lg btn-primary btn-block" type="submit">
                <span class="pr-2">Set to User</span>
            </button>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapState, mapGetters } from  'vuex';
    export default {
        name: "Add.vue",
        data() {
            return {
                formModel: {
                    book:'',
                    number: '',
                    name: '',
                    adress: '',
                }
            }
        },
        methods: {
            setUser() {
                let message = '';
                this.$store.commit('SET_USER', this.formModel);
                this.clearForm();
            },
            clearForm() {
                this.number='',
                this.name= '';
                this.adress= '';
                this.book= '';
            },
            homepage() {
                this.$router.push({
                name: 'Home',
                    })
          },
        }
    }
</script>

<style scoped>
</style>