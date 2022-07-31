<!--
 * @description: 文章内容
 * @Author: Gouxinyu
 * @Date: 2021-04-18 12:42:25
-->

<template>

    <Head :title="state.artical.artical_name" :search="false"></Head>
    <div id="gomi-artical" class="row">
        <div class="gomi-articalContentLeft col-md-1 col-sm-0"></div>
        <div class="gomi-articalContentCenter col-md-8 col-sm-12 col-xs-12">
            <ArticalContent :content="state.artical.artical_content"></ArticalContent>
        </div>
        <div class="gomi-articalContentRight col-md-3 col-sm-0">
            <TitleNav :nav-list="list" :target="target"></TitleNav>
        </div>
        <div></div>
    </div>
    <q-spinner-dots
                    v-show="!state.artical.artical_name"
                    class="gomi-articalContentLoading"
                    color="red"
                    size="3.5em" />
</template>

<script lang="ts">
import { onMounted, ref, reactive, defineComponent, watchEffect, provide } from "vue";
import Head from '../components/Head.vue';
import ArticalContent from '../components/ArticalContent.vue';
import TitleNav from '../components/titleNav.vue';
import { get } from '../utils/axios';
import URL from '../request/URL';
import { useRouter } from 'vue-router';

interface State {
    artical: any
}
export default defineComponent({
    name: "Artical",
    props: {},
    setup: () => {
        const list = ref<any[]>([]);
        const target = ref('0');

        /**
         * 文章导航
         */
        const setMounted = () => {
            ['h2'].forEach((item) => {
                const domList = Array.from(document.querySelectorAll(item));
                list.value = [...domList];
            });

            list.value = list.value.map((item, index) => {
                return {
                    dom: item,
                    name: item.innerText,
                    index
                }
            });

            /**
             * TODO here has some problem
             */
            const intersectionObserver = new IntersectionObserver(function (entries) {
                if (entries[0].intersectionRatio <= 0) return;

                const { name } = entries[0].target.dataset as DOMStringMap;
                target.value = String(name);
                console.log(target.value);
            });

            list.value.forEach((item: any, index) => {
                // start observing
                item.dom.dataset.name = index;
                intersectionObserver.observe(item.dom as HTMLElement);
            });
        }

        provide('setMounted', setMounted);

        const state: State = reactive({
            artical: {},
        })
        const router = useRouter();
        const { artical_id } = router.currentRoute.value.params;

        const getArticalContent = async () => {
            const params = { artical_id };
            // add token
            const data: any = await get(URL.GET_ARTICAL_CONTENT, params)
                .catch((err) => {
                    console.error(err);
                });

            // data转换segmentfault.com图片地址
            data.artical_content = data.artical_content.replaceAll('/img', 'https://segmentfault.com/img').replaceAll('<img', '<img referrerpolicy="no-referrer"')

            state.artical = data;
        }

        getArticalContent();

        return {
            state,
            list,
            target
        }
    },
    components: {
        Head,
        ArticalContent,
        TitleNav
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-artical {
    padding: 20px;
    background-color: $baseColor;

    .gomi-articalContentCenter {}
}

.gomi-articalContentLoading {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}
</style>
