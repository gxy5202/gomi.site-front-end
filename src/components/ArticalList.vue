<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-16 21:03:11
-->

<template>
    <div class="gomi-articalBox row">
        <div class="gomi-articalLeft col-md-1 col-sm-0 col-xs-0"></div>
        <div class="gomi-articalCenter col-md-8 col-sm-8 col-xs-12">
            <q-tabs
                class="text-red gomi-articalTabType"
                v-model="state.tab"
                @update:model-value="changeTab"
                narrow-indicator
                dense
                align="justify"
            >
                <q-tab :no-caps="true" :ripple="true" :tabindex="0" :name="0" label="Recently" />
                <q-tab :no-caps="true" :ripple="true" :tabindex="1" :name="1" label="Most Views" />
            </q-tabs>
            <q-infinite-scroll
                @load="onLoad"
                :offset="250"
                :initial-index="0"
                debounce="400"
                ref="infiniteScroll"
            >
                <div
                    v-for="(item, index) in state.articalList.filter((item) => item.artical_name.toLowerCase().includes(searchValue.toLowerCase()))"
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
                        :tags="item.artical_tags"
                    ></ArticalCard>
                </div>
                <template v-slot:loading>
                    <div class="row justify-center q-my-md" v-show="state.hasMore">
                        <q-spinner-dots color="red" size="40px" />
                    </div>
                </template>
                <div v-show="!state.hasMore" class="gomi-loadingEnd">
                    <q-icon name="mood" />
                    <span>已经到底啦~</span>
                </div>
            </q-infinite-scroll>
        </div>
        <div class="gomi-articalRight col-md-3 col-sm-4 col-xs-0">
            <div class="gomi-articalRight-tags">
                <q-chip
                    v-for="(item, index) in state.articalTags"
                    :key="index"
                    clickable
                    icon="bookmark"
                    text-color="white"
                    :color="item.color"
                >{{ item.tag }}</q-chip>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from '../utils/axios';
import { watchEffect, computed, ref, reactive, inject, defineComponent } from "vue";
import { useRouter } from 'vue-router';
import ArticalCard from './ArticalCard.vue';
// import { QIcon } from 'quasar';
import '@quasar/extras/ionicons-v5';

interface State {
    skeletonList: any[],
    tab: number,
    currentPage: any,
    articalList: any[],
    [key: string]: any
}
export default defineComponent({
    name: "ArticalList",
    props: {},
    setup() {
        const infiniteScroll = ref(null);
        const searchValue: string = inject('searchValue') as string;
        const colors = ['teal', 'orange', 'red', 'purple', 'green', 'blue', 'pink']
        const state: State = reactive({
            skeletonList: ['', '', '', '', '', '', '', ''],
            tab: 0,
            currentPage: {
                pageNo: 1,
                pageSize: 8
            },
            articalList: [],
            articalTags: [],
            hasMore: true
        });

        const router = useRouter();

        /**
         * 获取文章列表
         */
        const getArticals = async () => {
            const data: any[] = await axios('get', 'blog/getArticals', { ...state.currentPage, sortType: state.tab })
                .catch((err) => {
                    console.error(err);
                });
            if (data && data.length > 0) {
                (state.articalList as any[]).push(...data);
                state.hasMore = true;
                return false;
            }
            state.hasMore = false;
            return true;
        };

        const getArticalTags = async () => {
            const data: any[] = await axios('get', 'blog/getArticalTags')
                .catch((err) => {
                    console.error(err);
                });
            const tags = data.map((item) => {
                const color = colors[Math.round(Math.random() * (colors.length - 1))];
                return {
                    tag: item,
                    color
                }
            })
            state.articalTags = tags;
        }

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

        const changeTab = (value: any) => {
            state.currentPage.pageNo = 1;
            state.articalList = [];
            (infiniteScroll as any).value.reset();
            (infiniteScroll as any).value.resume();
            (infiniteScroll as any).value.trigger();
        };

        getArticalTags();


        return {
            state,
            searchValue,
            changeTab,
            toArtical,
            getArticals,
            infiniteScroll,
            onLoad: async (index: number, done: any) => {
                state.currentPage.pageNo = index;
                const result = await getArticals();
                done(result);
            }
        }
    },
    computed: {

    },
    components: {
        ArticalCard
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";
.gomi-articalCenter {
    background-color: $cardColor;
    border-radius: 5px;
    .gomi-articalTabType {
        margin: 10px 0;
        border-bottom: 1px solid $headColor;
    }
    .gomi-articalItem {
        margin-bottom: 10px;
        cursor: pointer;

        .gomi-articalSkeleton {
            background-color: $cardColor;
            border-radius: 5px;
            height: 9em;
        }
    }

    .gomi-loadingEnd {
        width: 100%;
        @include flex-center-center;
        color: #fff;
        padding: 20px;
    }
}

.gomi-articalRight {
    padding-top: 45px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .gomi-articalRight-tags {
        position: sticky;
        top: 70px;
    }
}
@media screen and (min-width: 0) and (max-width: 600px) {
    .gomi-articalRight,
    .gomi-articalRight-tags {
        display: none;
    }
}

.gomi-articalSkeleton-hide {
    display: none;
}
.gomi-input-s {
    width: 8.5rem;
    max-width: 200px;
    min-width: 150px;
    margin-right: 5px;
    height: 50%;
}
</style>