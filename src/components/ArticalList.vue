<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-16 21:03:11
-->

<template>
    <div class="gomi-articalBox row">
        <div class="gomi-articalLeft col-md-3 col-sm-0"></div>
        <div class="gomi-articalCenter col-md-6 col-sm-12 col-xs-12">
            <q-tabs
                class="text-red gomi-articalTabType"
                v-model="state.tab"
                narrow-indicator
                dense
                align="justify"
            >
                <q-tab :no-caps="true" :ripple="true" name="Recently" label="Recently" />
                <q-tab :no-caps="true" :ripple="true" name="Most Views" label="Most Views" />
            </q-tabs>
            <q-infinite-scroll @load="onLoad" :offset="250">
                <div
                    v-for="(item, index) in state.articalList"
                    :key="index"
                    @click="toArtical(item.artical_id)"
                    class="gomi-articalItem"
                >
                    <ArticalCard
                        :title="item.artical_name"
                        :date="item.create_time"
                        :author="item.artical_author"
                        :likse="item.artical_likes"
                        :views="item.artical_views"
                    ></ArticalCard>
                </div>
                <template v-slot:loading>
                    <div class="row justify-center q-my-md">
                        <q-spinner-dots color="red" size="40px" />
                    </div>
                </template>
            </q-infinite-scroll>
        </div>
        <div class="gomi-articalRight col-md-3 col-sm-0"></div>
    </div>
</template>

<script lang="ts">
import axios from '../utils/axios';
import { onMounted, ref, reactive, defineComponent } from "vue";
import { useRouter } from 'vue-router';
import ArticalCard from './ArticalCard.vue';
// import { QIcon } from 'quasar';
import '@quasar/extras/ionicons-v5';

interface State {
    tab: string,
    currentPage: any,
    articalList: any[]
}
export default defineComponent({
    name: "ArticalList",
    props: {},
    setup() {
        const state: State = reactive({
            tab: 'Recently',
            currentPage: {
                pageNo: 1,
                pageSize: 4
            },
            articalList: []
        });

        const router = useRouter();

        /**
         * 获取文章列表
         */
        const getArticals = async () => {
            const data: any[] = await axios('get', 'blog/getArticals', state.currentPage)
                .catch((err) => {
                    console.error(err);
                });

            if (data && data.length > 0) {
                (state.articalList as any[]).push(...data);
                // state.articalList = state.articalList.sort((a: any, b: any) => new Date(a.create_time) < new Date(b.create_time) ? -1 : 1);
                // state.articalList = state.articalList.sort((a: any, b: any) =>p new Date(a.artical_createTime) - new Date(b.artical_createTime));
                return false;
            }

            console.log(data, '----');
            return true;
        };

        /**
         * 跳转文章详情
         */
        const toArtical = (id: number) => {
            router.push({
                name: 'artical',
                params: {
                    artical_id: id
                }
            })
        }

        return {
            tab: 'x',
            state,
            toArtical,
            getArticals,
            onLoad: async (index: number, done: any) => {
                console.log(index);
                state.currentPage.pageNo = index;
                const result = await getArticals();
                done(result);
            }
        }
    },
    components: {
        ArticalCard
    },
});
</script>

<style scoped lang="scss">
.gomi-articalCenter {
    .gomi-articalTabType {
        margin-bottom: 10px;
    }
    .gomi-articalItem {
        margin-bottom: 10px;
        cursor: pointer;
    }
}
.gomi-input-s {
    width: 8.5rem;
    max-width: 200px;
    min-width: 150px;
    margin-right: 5px;
    height: 50%;
}
</style>