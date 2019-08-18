<template>
    <div>
        <h2>欢迎来到GuanJdoJ的首页</h2>
        <div>从当前页面组件获取到的值：{{countPage}}</div>
        <div class="athmatic">
            <a-button @click="addPage(1)">+</a-button>
            <a-button @click="reducePage(1)">-</a-button>
        </div>
        <div>从store.state获取的值：{{count}}</div>
        <div>通过Getters方法获取到的值：{{getCount}}</div>
        <div class="athmatic">
            <a-button @click="addFun(num)">+</a-button>
            <a-input-number v-model="num" :precision="0"/>
            <a-button @click="reduceFun(num)">-</a-button>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
import { InputNumber } from 'ant-design-vue';
export default {
    name:'Dashboard',
    data(){
       return{
           num:10,
           countPage:1,
       }
    },
    components:{
        'a-input-number':InputNumber,
    },
    computed:{
        ...mapState({
            count: state => state.count //this.$store.state.count
        }),
        ...mapGetters([
            'getCount',//将this.getCount()映射为 this.$store.getters.getCount
        ])
    },
    methods:{
        ...mapActions({
            addFun: 'addFun',//将this.addFun()映射为 this.$store.dispatch('addFun')
            reduceFun: 'reduceFun',
        }),
        addPage(num){
            this.countPage += num;
        },
        reducePage(num){
            this.countPage -= num;
        }
        // addFun(){
        //     this.$store.dispatch('addFun',10);
        // },
        // reduceFun(){
        //     this.$store.dispatch("reduceFun",10);
        // }
    }
}
</script>

<style scoped>
    .athmatic .ant-input{
        width: 50px;
    }
    .athmatic{
        margin-bottom: 10px;
    }
</style>

