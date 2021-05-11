<template>
    <div
        :class="{ 'd-flex': !editcomment }"
        class="comment justify-content-center align-items-center my-4"
    >
        <div class="area-group">
            <textarea
                @click="getCurretPosition($event)"
                @keyup="getCurretPosition($event)"
                v-model="comment"
                class="px-3 py-2"
                :class="{ 'edit-comment': editcomment }"
                type="text"
                :placeholder="
                    this.$options.filters.toUSD(
                        language,
                        'Напишите комментарий'
                    )
                "
            >
            </textarea>
            <a
                @click="isEmojiShow = !isEmojiShow"
                class="emoji-opener"
                href="#"
            >
                <i class="far fa-smile-beam"></i>
            </a>
            <!--UPLOADING IMAGE OR GIF-->
            <input
                class="d-none inp compact-form"
                type="file"
                @change.prevent="onFileSelected"
                ref="fileInput"
            />
            <a
                @click="$refs.fileInput.click()"
                class="emoji-opener image-upload"
                href="#"
            >
                <i class="fas fa-camera-retro"></i>
            </a>
        </div>
        <button @click="onUpload" v-if="visible" class="btn btn-info ml-3">
            {{ this.$options.filters.toUSD(language, "Загрузть") }}
            <i class="fas fa-upload"></i>
        </button>
        <button
            v-if="editcomment"
            :class="{ 'send-button': editcomment }"
            @click="$emit('close')"
            class="btn btn-secondary ml-3"
        >
            {{ this.$options.filters.toUSD(language, "Отмена") }}
        </button>
        <button
            :class="{ 'send-button': editcomment }"
            @click="addComment(comment)"
            class="btn btn-primary ml-3"
        >
            {{ this.$options.filters.toUSD(language, "Отправить") }}
        </button>
        <VEmojiPicker
            v-if="isEmojiShow"
            :class="{ 'edit-emoji': editcomment }"
            v-click-outside="hideEmoji"
            @select="selectEmoji"
        />
    </div>
</template>

<script>
import VEmojiPicker from "v-emoji-picker";
import vClickOutside from "v-click-outside";
import localizeFilter from "../plugins/locales/localize.filter";
import { mapGetters } from "vuex";

export default {
    name: "addComment",
    components: {
        VEmojiPicker,
        vClickOutside,
    },
    props: {
        text: String,
        editcomment: Boolean,
    },
    data: () => ({
        comment: "",
        isEmojiShow: false,
        curretPosition: null,
        selectedFile: null,
        visible: false,
        sorce: "",
    }),
    directives: {
        clickOutside: vClickOutside.directive,
    },
    computed: {
        ...mapGetters(["language"]),
    },
    methods: {
        getCurretPosition(e) {
            this.curretPosition = e.target.selectionStart;
        },
        selectEmoji(emoji) {
            this.comment =
                this.comment.substr(0, this.curretPosition) +
                emoji.data +
                this.comment.substring(this.curretPosition);
        },
        hideEmoji() {
            this.isEmojiShow = false;
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
            this.visible = true;
        },
        addComment(comment) {
            if (this.editcomment) {
                this.$bus.$emit("sendEditComment", comment);
                this.comment = "";
            } else {
                this.$emit("addComment", comment);
                this.comment = "";
            }
        },
        onUpload() {
            if (this.editcomment) {
                this.$bus.$emit("emitToImageSave", this.selectedFile);
            } else {
                this.$emit("emitToImageSave", this.selectedFile);
            }
            this.visible = false;

            this.$notify({
                group: "top",
                type: "success",
                title: ``,
                text: "Загрузка завершена.",
            });
            this.selectedFile = null;
        },
    },
    mounted() {
        if (this.text && this.text.length) {
            this.comment = this.text;
        }
    },
    watch: {
        comment(newValue, oldValue) {
            this.$emit("changeComment", newValue);
        },
    },
};
</script>

<style scoped lang="scss">
.comment {
    position: relative;

    .area-group {
        display: block;
        width: 100%;
        max-width: 400px;
        position: relative;

        .emoji-opener {
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            top: 10px;
            right: 60px;
            color: #808080;
            text-decoration: none;
            &:hover {
                color: black;
                transition: 0.5s ease;
            }
            i {
                font-size: 20px;
            }
        }
        .image-upload {
            right: 30px;
        }
        textarea {
            display: block;
            width: 100%;
            max-width: 400px;
            border-radius: 20px;
            outline: none;
            height: 37px;
            border: 1px solid #808080;
            resize: none;
            padding-right: 80px !important;
            box-sizing: border-box;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;

            &::-webkit-scrollbar {
                width: 0;
            }
        }
        .edit-comment {
            height: 100px;
        }
    }

    .send-button {
        margin: 0;
        margin-top: 20px;
    }

    #EmojiPicker {
        position: absolute;
        top: -369px;
        right: 29px;
    }

    .edit-emoji {
        top: -169px !important;
        right: 0 !important;
    }
}
</style>
