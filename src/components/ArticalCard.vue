<!--
 * @description: card
 * @Author: Gouxinyu
 * @Date: 2021-04-17 20:38:53
-->
<template>
    <q-card class="gomi-articalCard my-card text-white">
        <q-card-section>
            <h3 class="gomi-articalTitle gomi-h3">{{ title }}</h3>
        </q-card-section>
        <div class="gomi-articalCard-actions">
            <div class="gomi-articalCard-actionsLeft">
                <q-chip
                        v-for="(item, index) in tags.split(',')"
                        :key="index"
                        clickable
                        text-color="white"
                        color="baseColor"
                        size="sm">{{ item }}</q-chip>
            </div>
            <div class="gomi-articalCard-actionsRight">
                <div class="gomi-articalCard-info">
                    <q-icon class="gomi-articalCard-infoIcon" flat round name="visibility" />
                    <span>{{ transformNumber(views) }}</span>
                </div>
                <div class="gomi-articalCard-info">
                    <q-icon class="gomi-articalCard-infoIcon" flat round name="schedule" />
                    <span>{{ new Date(date).toLocaleDateString() }}</span>
                </div>
            </div>
        </div>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "ArticalCard",
    props: {
        title: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        likes: {
            type: Number,
            default: 0
        },
        views: {
            required: true,
            type: Number || String,
            default: 0
        },
        tags: {
            type: String,
            default: ''
        }
    },
    setup() {
        const transformNumber = (value: any): string => {
            const num = Number(value);
            if (num > 999 && num < 100000) {
                return `${(num / 1000).toFixed(1)}K`;
            } else if (num >= 100000) {
                return `${(num / 1000000).toFixed(2)}M`;
            }
            return String(num);
        }

        return {
            transformNumber
        }
    },
    components: {
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

.gomi-articalCard {
    background-color: transparent;
    box-shadow: none;
    border-bottom: 1px solid $borderColor;
    color: $fontColor;
    min-height: 11em;
    border-radius: 0;
    display: flex;
    flex-direction: column;

    &:hover {
        cursor: pointer;

        .gomi-articalTitle {
            color: $highLightColor;
        }

    }



    .gomi-articalCard-actions {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex: 1;
        padding: 5px 15px;

        .gomi-articalCard-actionsRight,
        .gomi-articalCard-actionsLeft {
            display: flex;
            align-items: center;
            max-width: 50%;
        }

        .gomi-articalCard-actionsRight {
            justify-content: flex-end;
        }

        .gomi-articalCard-actionsLeft {
            justify-content: flex-start;
            flex-wrap: wrap;
        }
    }

    .gomi-articalCard-info {
        @include flex-center-center;
        margin-right: 10px;
        font-size: 1em;
        color: $fontColor;

        .gomi-articalCard-infoIcon {
            margin-right: 3px;
        }
    }
}
</style>