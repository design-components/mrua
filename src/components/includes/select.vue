<template>
    <!-- <v-select  :options="['Canada', 'United States']"></v-select> -->
    <v-select v-model="option"  :options="dataSelect" :reduce="option => option.abbreviation" label="abbreviation" :select-on-key-codes="[188, 13]">
        <template #option="{abbreviation, description}">
            {{ abbreviation }} ({{ description }})
        </template>
    </v-select>
</template>

<script>
    import vSelect from "vue-select";
    import functions from '../../helpers/functions'
    export default {
        components:{
            vSelect
        },
        props: ['data'],
        data(){
            return {
                option: this.data.default,
                dataSelect: null
            }
        },
        created(){
            this.dataSelect = functions.selectsParameters(this.data.option)
        },
        
        mounted() {
            
        },

        
    }
</script>

<style lang="scss" scoped>
    .v-select div{
        height: 100% !important;
    }
    .form-select{
        background-image: none;
        padding: 0;
    }
</style>