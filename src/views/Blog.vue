<!--
 * @description: Blog
 * @Author: Gouxinyu
 * @Date: 2021-04-12 09:09:42
-->
<template>
    <div id="gomi-blog">

        <Head title="Blog" class="z-top"></Head>
        <div class="gomi-blogBody">
            <div class="gomi-blogList">
                <ArticalList></ArticalList>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Menu from "../components/Menu.vue";
import { defineComponent } from "vue";
import ArticalList from '../components/ArticalList.vue';
import Head from '../components/Head.vue';
import '@quasar/extras/ionicons-v5';
export default defineComponent({
    name: "Blog",
    props: {},
    setup: () => {
    },
    components: {
        Menu,
        Head,
        ArticalList
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-blog {
    height: 100%;
    background-color: $baseColor;

    .gomi-blogBody {
        padding: 20px;
        margin-left: calc(100vw - 100%);
    }
}

@media screen and (min-width: 0) and (max-width: 600px) {

    #gomi-blog .gomi-blogBody {
        padding: 0;
    }
}
</style>
