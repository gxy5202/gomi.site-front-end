<!--
 * @description: 
 * @Author: Gouxinyu
 * @Date: 2021-04-17 20:38:53
-->
<template>
    <q-card class="gomi-articalCard my-card text-white">
        <q-card-section>
            <h3 class="gomi-h3">{{ title }}</h3>
        </q-card-section>
        <q-card-actions align="right">
            <div class="gomi-articalCard-info">
                <q-icon class="gomi-articalCard-infoIcon" flat round color="red" name="visibility" />
                <span>{{ views }}</span>
            </div>
            <div class="gomi-articalCard-info">
                <q-icon class="gomi-articalCard-infoIcon" flat round color="red" name="schedule" />
                <span>{{ new Date(date).toLocaleDateString() }}</span>
            </div>
        </q-card-actions>
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
            type: Number,
            default: 0
        }
    },
    setup() {

    },
    components: {
    },
});
</script>

<style scoped lang="scss">
@import "../scss/var.scss";

.gomi-articalCard {
    background-color: $cardColor;
    color: $fontColor;
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