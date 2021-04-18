
<template>
    <Head :title="state.artical.artical_name" :search="false"></Head>
    <div id="gomi-artical" class="row">
        <div class="gomi-articalContentLeft col-md-3 col-sm-0"></div>
        <div class="gomi-articalContentCenter col-md-6 col-sm-12 col-xs-12">
            <ArticalContent :content="state.artical.artical_content"></ArticalContent>
        </div>
        <div class="gomi-articalContentRight col-md-3 col-sm-0"></div>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, defineComponent } from "vue";
import Head from '../components/Head.vue';
import ArticalContent from '../components/ArticalContent.vue';
import axios from '../utils/axios';
import { useRouter } from 'vue-router';

interface State {
    artical: any
}
export default defineComponent({
    name: "Artical",
    props: {},
    setup: () => {
        const state: State = reactive({
            artical: {},
        })
        const router = useRouter();
        console.log(router);
        const { artical_id } = router.currentRoute.value.params;

        const getArticalContent = async () => {
            const params = { artical_id: artical_id };
            const data: any = await axios('get', 'blog/getArticalContent', params)
                .catch((err) => {
                    console.error(err);
                });

            state.artical = data;
        }

        getArticalContent();

        return {
            state
        }
    },
    components: {
        Head,
        ArticalContent
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-artical {
    padding: 20px;
    overflow-x: hidden;
    background-color: $baseColor;
    .gomi-articalContentCenter {
    }
}
</style>
