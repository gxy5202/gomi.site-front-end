<!--
 * @description: videoRoll offical website
 * @Author: Gouxinyu
 * @Date: 2021-04-06 16:37:22
-->
<template>
    <div id="gomi-video-roll">
        <Menu :isFixed="true"></Menu>
        <div class="">

        </div>
    </div>
</template>

<script lang="ts">
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