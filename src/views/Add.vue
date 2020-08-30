<template>
    <div class="container mt-3">
        <form @submit.prevent="onBook">
            <div class="d-flex justify-content-between">
             <h3 style="bold">Get from User</h3>
             <button type="button" @click="homepage" class="btn">return home page</button>
            </div><br/>
            <div class="mb-3">
                <input type="text" v-model="formModel.name"
                       id="inputName"
                       class="form-control"
                       placeholder="Please enter book name"
                       required=""
                       autofocus="">
            </div>
            <div>
                <input type="text" v-model="formModel.author"
                       id="inputAuthor"
                       class="form-control"
                       placeholder="Please enter author"
                       required=""
                       autofocus="">
            </div>
            <div class="mt-3">
                <input type="text"  v-model="formModel.url"
                       id="inputUrl"
                       class="form-control"
                       placeholder="Book image Url"
                       required="">
            </div>
            <button class="mt-3 btn btn-lg btn-primary btn-block" type="submit">
                <span class="pr-2">Save</span>
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
                    name: '',
                    author: '',
                    url: '',
                }
            }
        },
        methods: {
            onBook() {
                let message = '';
                this.$store.commit('SET_BOOK', this.formModel);
                this.clearForm();
            },
            clearForm() {
                this.name= '';
                this.author= '';
                this.url= '';
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