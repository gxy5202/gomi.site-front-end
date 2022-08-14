<template>
    <div id="gomi-project-list">
        <div id="gomi-project-list-box">
            <q-intersection
                            v-for="(item, index) in ProjectList.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))"
                            class="gomi-project-item"
                            once
                            transition="scale"
                            :key="index"
                            :data-name="index">
                <q-card :ratio="16 / 9" class="my-card text-white gomi-project-card" dark @click="toTarget(item)">
                    <q-img :src="item.img" fit="contain" style="height: 200px;">
                        <div class="gomi-project-card-title absolute-bottom text-h6">
                            {{ item.name }}
                        </div>
                    </q-img>

                    <!-- <img class="project-post" :src="item.img" height="200" />
                    <q-card-section>
                        <div class="gomi-project-card-title">{{ item.name }}</div>
                    </q-card-section> -->
                    <!-- <q-separator dark inset /> -->
                    <q-card-section>
                        <div class="text-subtitle3" :title="item.des">{{ item.des }}</div>
                    </q-card-section>
                </q-card>
            </q-intersection>
            <!-- <div
                 v-for="(item, index) in ProjectList.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))"
                 class="gomi-project-item"
                 :key="index"
                 :data-name="index">

            </div> -->
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
                img: '/imgs/light-ruler.png',
                star: 'https://img.shields.io/github/stars/gxy5202/LightRuler',
                des: 'A web page ruler plug-in'
            },
            {
                name: 'parcel-namer-hashless',
                img: '/imgs/parcel.png',
                link: 'https://www.npmjs.com/package/parcel-namer-hashless',
                star: 'https://img.shields.io/github/stars/gxy5202/parcel-namer-hashless',
                des: 'This plugin will help you remove the hash from a bundle file name(parcel v2)'
            },
            {
                name: 'VideoRoll',
                img: '/imgs/text.png',
                link: 'https://gomi.site/#/VideoRoll',
                demo: 'VideoRoll',
                star: 'https://img.shields.io/github/stars/gxy5202/VideoRoll',
                des: 'a chrome/edge extension to rotate web video'
            },
            {
                name: 'Nesoft-Vote',
                img: '/imgs/51.png',
                link: 'https://github.com/gxy5202/Nesoft-Vote',
                star: 'https://img.shields.io/github/stars/gxy5202/Nesoft-Vote',
                des: '基于微信小程序的投票多功能系统, 51校园展'
            },
            {
                name: 'UE-Helper-Chrome-Extension',
                img: '/imgs/ue-helper.png',
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

            .text-subtitle3 {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .project-post {
                object-fit: cover;
                border-bottom: 1px solid #3e3939;
            }

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

@media screen and (min-width: 0) and (max-width: 600px) {
    #gomi-project-list {
        padding: 0;
    }
}
</style>