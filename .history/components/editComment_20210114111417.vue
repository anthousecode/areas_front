<template>
    <form class="p-5">
        <div tabindex="100" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body p-5 pb-0">
                        <h3 style="color: black">Редактирование</h3>
                        <small>Точно навсегда удалить этот комментарий?</small>
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

export default {
    name: "editComment",
    components: {
        addComment,
    },
    computed: {
        ...mapGetters(["language"]),
    },
    methods: {},
};
</script>

<style scoped lang="scss">
</style>
