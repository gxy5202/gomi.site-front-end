<!--
 * @description: app.vue
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <div id="gomi-light-ruler">
        <Menu :isFixed="true"></Menu>
        <div
            id="box"
            :style="{
                position: 'relative',
                width: '800px',
                height: '600px',
                overflow: 'hidden',
                background: '#c1c1c1',
            }"
        >
            <div id="wrap" :style="{ width: '100%', height: '100%', overflow: 'auto' }">
                <div id="content" :style="{ width: '30000px', height: '30000px' }">content</div>
            </div>
            <div id="ruler" ref="ruler"></div>
        </div>
        <div id="demo-control">
            <div class="demo-control-item">
                <span class="demo-control-item-label">字体颜色</span>
                <q-input dense dark v-model="fontColor" class="my-input" color="red">
                    <template v-slot:append>
                        <q-icon name="colorize" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-color v-model="fontColor" @change="changeFontColor" />
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">背景颜色</span>
                <q-input dense dark v-model="backgroundColor" class="my-input" color="red">
                    <template v-slot:append>
                        <q-icon name="colorize" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-color v-model="fontColor" @change="changeBackgroundColor" />
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">刻度线颜色</span>
                <q-input dense dark v-model="tickColor" class="my-input" color="red">
                    <template v-slot:append>
                        <q-icon name="colorize" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-color v-model="tickColor" @change="changeTickColor" />
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">单位字体颜色</span>
                <q-input dense dark v-model="unitFontColor" class="my-input" color="red">
                    <template v-slot:append>
                        <q-icon name="colorize" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-color v-model="unitFontColor" @change="changeUnitFontColor" />
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">单位背景颜色</span>
                <q-input dense dark v-model="unitBackgroundColor" class="my-input" color="red">
                    <template v-slot:append>
                        <q-icon name="colorize" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-color
                                    v-model="unitBackgroundColor"
                                    @change="changeUnitBackgroundColor"
                                />
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">主题</span>
                <q-select
                    dense
                    dark
                    v-model="styleMode"
                    :options="['center', 'right']"
                    color="red"
                    @update:model-value="changeStyleMode"
                />
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">缩放系数</span>
                <q-input
                    dense
                    dark
                    type="number"
                    v-model.number="scaleNumber"
                    class="my-input"
                    :rules="[(val) => Number(val) !== 0]"
                    color="red"
                    @change="changeScale"
                ></q-input>
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">刻度间隔</span>
                <q-input
                    dense
                    dark
                    type="number"
                    v-model.number="gap"
                    class="my-input"
                    :rules="[(val) => Number(val) > 1]"
                    color="red"
                    @change="changeGap"
                ></q-input>
            </div>
            <div class="demo-control-item">
                <span class="demo-control-item-label">显示/隐藏</span>
                <q-toggle v-model="show" color="red" @update:model-value="changeDisplay" />
            </div>
            <div class="demo-control-item">
                <span></span>
                <q-btn
                    dense
                    type="a"
                    class="glossy"
                    href="https://github.com/gxy5202/light-ruler"
                    color="white"
                >
                    <svg
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z"
                        />
                    </svg>
                </q-btn>
            </div>
            <div class="demo-link"></div>
        </div>
    </div>
</template>

<script lang="ts">
import LightRuler from "light-ruler";
import { defineComponent, ref, onMounted } from "vue";
import Menu from "../components/Menu.vue";

export default defineComponent({
    name: "LightRuler",
    setup() {
        const ruler = ref(null);
        const myRuler: any = ref(null);
        onMounted(() => {
            myRuler.value = new LightRuler({
                mountRef: ruler.value,
                mode: "infinite",
                scrollElement: "#wrap",
                rulerId: "hh",
                width: 30000,
                height: 30000,
                style: {
                    mode: "right",
                }
            });
        });

        const changeFontColor = (value: string) => {
            myRuler.value.update({
                fontColor: value,
            });
        };

        const changeBackgroundColor = (value: string) => {
            myRuler.value.update({
                backgroundColor: value,
            });
        };

        const changeTickColor = (value: string) => {
            myRuler.value.update({
                tickColor: value,
            });
        };

        const changeScale = (value: string) => {
            myRuler.value.scale(Number(value));
        };

        const changeUnitFontColor = (value: string) => {
            myRuler.value.update({
                unit: {
                    fontColor: value,
                    text: 'px'
                }
            });
        }

        const changeUnitBackgroundColor = (value: string) => {
            myRuler.value.update({
                unit: {
                    backgroundColor: value,
                    text: 'px'
                }
            });
        }

        const changeStyleMode = (value: string) => {
            myRuler.value.update({
                mode: value
            });
        }

        const changeGap = (value: string) => {
            myRuler.value.update({
                gap: Number(value)
            });
        };

        const changeDisplay = (value: boolean) => {
            console.log(value);
            value ? myRuler.value.show() : myRuler.value.hide();
        };
        return {
            ruler,
            changeFontColor,
            changeScale,
            changeBackgroundColor,
            changeTickColor,
            changeUnitFontColor,
            changeUnitBackgroundColor,
            changeStyleMode,
            changeGap,
            changeDisplay,
            fontColor: ref("#fff"),
            backgroundColor: ref("#171819"),
            tickColor: ref("#fff"),
            scaleNumber: ref(1),
            unitFontColor: ref('#fff'),
            unitBackgroundColor: ref('#fff'),
            styleMode: ref('right'),
            gap: ref(10),
            show: ref(true)
        };
    },
    components: {
        Menu,
    },
});
</script>

<style lang="scss">
@import "../scss/var.scss";

#gomi-light-ruler {
    background-color: $cardColor;
    height: 100%;
    position: relative;
    display: flex;
    padding: 30px;
    padding-top: 50px;

    #demo-title {
        img {
            transform: scale(0.4);
        }
    }
    #box {
        z-index: 0;
        // box-shadow: 0px 5px 25px $highLightColor;

        #content {
            padding: 80px;
            color: #fff;
        }
    }

    #demo-control {
        margin-left: 30px;
        .icon {
            width: 30px;
            height: 30px;
        }
    }

    .demo-link {
        font-size: 20px;
    }
    .demo-control-item {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;

        .demo-control-item-label {
            margin-right: 15px;
        }
    }
}
</style>