<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <q-carousel-slide :key="features.id" :name="features.id"
                      class="column no-wrap flex-center">
        <!-- <q-icon name="style" size="56px" /> -->
        <q-table
                 :rows="features.table.rows"
                 :columns="features.table.columns"
                 :rows-per-page-options="[10]"
                 hide-header
                 row-key="name"
                 title="Key Features"
                 title-class="text-h6"
                 separator="none"
                 table-header-style="background-color: #26262a"
                 card-style="background-color: #18181c; color: #fff;"
                 table-style="background-color: #18181c; color: #fff;"
                 hide-bottom
                 :bordered="false" />
    </q-carousel-slide>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "ThirdPage",
    setup() {
        const features = ref({
            id: 'third',
            table: {
                columns: [{
                    name: 'name',
                    required: true,
                    label: 'Key Features',
                    align: 'left',
                    sortable: false,
                    style: 'font-size: 15px',
                    field: (row) => row.name
                }],
                rows: [{
                    name: '✅ Flipping(horizontal/vertical) - 垂直/水平镜像翻转',
                },
                {
                    name: '✅ Rotating (0/90/180/270deg) - 旋转0/90/180/270°',
                },
                {
                    name: '✅ Pxhub/BiliBili - 支持P站、B站'
                },
                {
                    name: '✅ Same-origin iframe - 可操作同源iframe下的视频',
                },
                {
                    name: '✅ Automatically calculates video scaling - 自动计算视频缩放比例',
                }, {
                    name: '✅ Shortcut key:Ctrl+Up/Right/Down/Left - 支持快捷键Ctrl+方向键',
                }]
            }
        });

        return {
            features
        };
    },
    components: {
    },
});
</script>

<style lang="scss">
</style>