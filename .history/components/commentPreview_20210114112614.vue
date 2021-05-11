 <template>
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
    <div v-if="currentComment.image" class="form-group my-4">
        <img
            style="width: 100px; height: 100px"
            class="d-block m-auto"
            :src="currentComment.image"
            alt="img"
        />
    </div>
</template>