<template>
    <form>
        <div tabindex="100" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body pb-0">
                        <h3 style="color: black">
                            {{
                                this.$options.filters.toUSD(
                                    language,
                                    "Редактирование"
                                )
                            }}
                        </h3>
                        <comment-preview :currentComment="currentComment" />
                        <addComment
                            editcomment
                            @close="$emit('closeModal')"
                            @changeComment="changeComment"
                            :text="currentComment.text"
                        />
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import localizeFilter from "../plugins/locales/localize.filter";
import { mapGetters } from "vuex";
import addComment from "./addComment";
import CommentPreview from "./commentPreview.vue";

export default {
    name: "editComment",
    components: {
        addComment,
        CommentPreview,
    },
    props: {
        currentComment: Object,
    },
    computed: {
        ...mapGetters(["language"]),
    },
    methods: {
        changeComment(newComment) {
            this.currentComment.text = newComment;
        },
    },
};
</script>

<style scoped lang="scss">
</style>
