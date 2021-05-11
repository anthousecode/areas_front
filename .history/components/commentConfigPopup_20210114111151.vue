<template>
    <form class="p-5" @submit.prevent="submitHandler">
        <div class="moda" tabindex="100" role="dialog">
            <div class="modal-dialog" role="document">
                <div
                    v-if="!isConfirmMessage && !isEditCommentVisible"
                    class="modal-content"
                >
                    <div class="modal-header moda-header">
                        <h3>
                            {{
                                $options.filters.toUSD(
                                    language,
                                    "Мартова Риверсайд"
                                )
                            }}
                        </h3>
                        <button
                            @click.prevent="closeModal"
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-5 pb-0">
                        <p v-if="currentComment.author.name">
                            <b>Автор:</b> {{ currentComment.author.name }}
                        </p>
                        <p
                            v-if="currentComment.text"
                            class="text-truncate"
                            style="max-width: 300px"
                        >
                            <b>Текст:</b>
                            <small>
                                {{ currentComment.text }}
                            </small>
                        </p>
                        <div
                            v-if="currentComment.image"
                            class="form-group my-4"
                        >
                            <img
                                style="width: 100px; height: 100px"
                                class="d-block m-auto"
                                :src="currentComment.image"
                                alt="img"
                            />
                        </div>
                        <div class="form-group my-2">
                            <button
                                @click="toggleEditComment"
                                type="button"
                                class="form-control"
                                id="editBtn"
                            >
                                Редактировать
                            </button>
                        </div>
                        <div class="form-group my-2">
                            <button
                                @click="onClickDelete"
                                type="button"
                                class="form-control"
                                id="editBtn"
                            >
                                Удалить
                            </button>
                        </div>
                        <div class="form-group my-2">
                            <button
                                @click.prevent="closeModal"
                                type="button"
                                class="form-control"
                                id="editBtn"
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
                <confirm
                    @closeModal="onClickDelete"
                    @deleteComment="deleteComment(currentComment.id)"
                    v-if="isConfirmMessage && !isEditCommentVisible"
                />
                <editComment v-if="isEditCommentVisible" />
            </div>
        </div>
    </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import localizeFilter from "../plugins/locales/localize.filter";
import confirm from "./confirm";
import addComment from "./addComment";
import editComment from "./editComment";

export default {
    name: "CommentConfigPopup",
    components: {
        confirm,
        addComment,
        editComment,
    },
    props: {
        target: String,
        currentComment: Object,
        tok: String,
    },
    data: () => ({
        name: "",
        email: "",
        password: "",
        repeat: "",
        isConfirmMessage: false,
        isEditCommentVisible: false,
    }),
    validations: {
        email: { email, required },
        password: { required, minLength: minLength(6) },
    },
    computed: {
        ...mapGetters(["language"]),
    },
    methods: {
        login() {
            this.$axios
                .post("login", {
                    email: this.email,
                    password: this.password,
                })
                .then((res) => {
                    this.setCookie("token", res.data.key, 2);
                    if (this.target === "like") {
                        this.itsLike();
                    } else {
                        this.itsComment();
                    }
                    this.closeModal();
                    this.$notify({
                        group: "foo",
                        type: "success",
                        title: ``,
                        text: `Вы успешно зарегистрировались!`,
                    });
                })
                .catch(() => {
                    this.$notify({
                        group: "foo",
                        type: "error",
                        title: `Ошибка входа`,
                        text: e.text,
                    });
                });
        },
        toggleEditComment() {
            this.isEditCommentVisible = !this.isEditCommentVisible;
        },
        onClickDelete() {
            this.isConfirmMessage = !this.isConfirmMessage;
        },
        deleteComment(id) {
            this.$axios
                .delete(`delete_comment/${id}`, {
                    data: {
                        token: this.tok,
                    },
                })
                .then((res) => {
                    this.onClickDelete();
                    this.$bus.$emit("updateChild", id);
                    this.$emit("closeModal");
                    this.$notify({
                        group: "top",
                        type: "success",
                        title: `Успех!`,
                        text: "Комментарий был удалён",
                    });
                })
                .catch((e) => {
                    this.$notify({
                        group: "top",
                        type: "error",
                        title: `Ошибка`,
                        text: "Вы не можете удалять чужие комментарии!",
                    });
                });
        },
        setCookie(cname, cvalue, exdays) {
            document.cookie = cname + "=" + cvalue + ";";
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";";
        },
        submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password,
                c_password: this.repeat,
            };

            this.$axios
                .post("register", formData, {
                    crossdomain: true,
                    mode: "no-cors",
                    dataType: "json",
                })
                .then(() => {
                    this.login();
                })
                .catch((e) => {
                    this.$notify({
                        group: "foo",
                        type: "error",
                        title: `Ошибка при регистрации`,
                        text: e.text,
                    });
                });
        },
        itsLike() {
            this.$emit("addLike");
        },
        itsComment() {
            this.$emit("addComment");
        },
        closeModal() {
            this.$emit("closeModal");
        },
        showLogin() {
            this.$emit("showLogin");
        },
    },
};
</script>

<style scoped lang="scss">
</style>
