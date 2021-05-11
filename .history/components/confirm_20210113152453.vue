<template>
    <form class="p-5" @submit.prevent="submitHandler">
        <div class="moda" tabindex="100" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header moda-header">
                        <h3>
                            {{
                                $options.filters.toUSD(
                                    language,
                                    "Мартова Риверсайд"
                                )
                            }}
                        </h3>
                    </div>
                    <div class="modal-body p-5 pb-0">
                        <h3>Удалить комментарий</h3>
                        <small>Точно навсегда удалить этот комментарий?</small>
                    </div>
                    <div class="modal-footer moda-footer">
                        <button type="submit" class="btn btn-primary">
                            {{
                                $options.filters.toUSD(
                                    this.language,
                                    "Зарегистрироваться"
                                )
                            }}
                        </button>
                        <button
                            @click.prevent="closeModal"
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            {{
                                $options.filters.toUSD(this.language, "Закрыть")
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

export default {
    name: "confirm",
    components: {
        comment,
    },
    methods: {},
};
</script>

<style scoped lang="scss">
</style>
