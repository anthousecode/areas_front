<template>
    <form>
        <div tabindex="100" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body pb-0">
                        <h3 style="color: black">Редактирование</h3>
                        <comment-preview :currentComment="currentComment" />
                        <addComment />
                    </div>
                    <div class="modal-footer moda-footer">
                        <button
                            @click.prevent="$emit('closeModal')"
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            {{
                                $options.filters.toUSD(this.language, "Отмена")
                            }}
                        </button>
                        <button
                            @click="$emit('deleteComment')"
                            type="button"
                            class="btn btn-primary"
                        >
                            {{
                                $options.filters.toUSD(this.language, "Удалить")
                            }}
                        </button>
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
    methods: {},
};
</script>

<style scoped lang="scss">
</style>
