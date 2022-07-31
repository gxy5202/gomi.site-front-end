<template>
    <div id="gomi-project-list">
        <div id="gomi-project-list-box">
            <div
                 v-for="(item, index) in ProjectList.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))"
                 class="gomi-project-item"
                 :key="index"
                 :data-name="index">
                <q-card class="my-card text-white gomi-project-card" dark @click="toTarget(item)">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" height="80" />
                    <q-card-section>
                        <div class="gomi-project-card-title">{{ item.name }}</div>
                    </q-card-section>
                    <q-separator dark inset />
                    <q-card-section>
                        <div class="text-subtitle3">{{ item.des }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject } from "vue";
import { useRouter } from 'vue-router';
export default defineComponent({
    name: "ProjectList",
    props: {
        // TODO 需要从数据库获取
        ProjectList: {
            type: Array as PropType<any[]>,
            default: [{
                name: 'light-ruler',
                link: 'https://www.npmjs.com/package/light-ruler',
                demo: 'LightRuler',
                star: 'https://img.shields.io/github/stars/gxy5202/LightRuler',
                des: 'A web page ruler plug-in'
            },
            {
                name: 'parcel-namer-hashless',
                link: 'https://www.npmjs.com/package/parcel-namer-hashless',
                star: 'https://img.shields.io/github/stars/gxy5202/parcel-namer-hashless',
                des: 'This plugin will help you remove the hash from a bundle file name(parcel v2)'
            },
            {
                name: 'VideoRoll',
                link: 'https://gomi.site/#/VideoRoll',
                demo: 'VideoRoll',
                star: 'https://img.shields.io/github/stars/gxy5202/VideoRoll',
                des: 'a chrome/edge extension to rotate web video'
            },
            {
                name: 'Nesoft-Vote',
                link: 'https://github.com/gxy5202/Nesoft-Vote',
                star: 'https://img.shields.io/github/stars/gxy5202/Nesoft-Vote',
                des: '基于微信小程序的投票多功能系统'
            },
            {
                name: 'UE-Helper-Chrome-Extension',
                link: 'https://chrome.google.com/webstore/detail/ue-helper/mkjblagjddaejickpddjeadifkeagaoo?hl=zh-CN',
                star: 'https://img.shields.io/github/stars/gxy5202/UE-Helper-Chrome-Extension',
                des: 'a chrome extension for Sefonsoft UE product'
            }]
        },
    },
    setup(props) {
        // TODO 从后端拿 替换证书
        const searchValue: string = inject('searchValue') as string;
        const router = useRouter();
        const toTarget = (item: any) => {
            if (item.demo) {
                const { href } = router.resolve({
                    name: item.demo
                });
                window.open(href, "_blank");
            } else {
                window.open(item.link, "_blank");
            }
        };

        return {
            searchValue,
            toTarget
        }
    }
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

#gomi-project-list {
    padding: 20px;

    #gomi-project-list-box {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;

        .gomi-project-item {
            min-width: 200px;
            margin: 20px;
            flex: 1;

            .gomi-project-card-title {
                font-size: 30px;
            }

            &:hover {
                cursor: pointer;

                .gomi-project-card-title {
                    color: $highLightColor  !important;
                }
            }
        }
    }
}

@media screen and (min-width: 800px) {
    #gomi-project-list {
        .gomi-project-item {
            min-width: 450px !important;
        }
    }
}
</style>