 <template>
    <div>
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
        <div v-if="currentComment.image" class="form-group my-4">
            <img
                style="width: 100px; height: 100px"
                class="d-block m-auto"
                :src="currentComment.image"
                alt="img"
            />
        </div>
    </div>
</template>
<script>
import localizeFilter from "../plugins/locales/localize.filter";
import { mapGetters } from "vuex";

export default {
    name: "confirm",
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