<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-12 09:09:42
-->
<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:40:18
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
    name: "Home",
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
</style>
