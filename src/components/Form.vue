<template>
  <section class="articleForm">
    <h2>Dodaj nowy artykuł</h2>
    <form>
      <label for="title">
        <input
          type="text"
          id="title"
          required
          :value="title"
          @input="updateTitle"
        />
        <span>Tytuł</span>
      </label>
      <div class="category-box">
        <label for="category" @click="popupActivate">
          <input
            type="text"
            id="category"
            required
            :value="category"
            @input="updateCategory"
            onkeypress="return false;"
          />

          <span>Kategoria</span>
        </label>
        <transition name="fader">
          <div class="crossIcon" @click="removeCategory" v-if="cross">
            <i class="fas fa-times"></i>
          </div>
        </transition>

        <transition name="fader">
          <popup-category v-if="popup" v-on-clickaway="away"></popup-category>
        </transition>
      </div>
      <label for="author">
        <input
          type="text"
          id="author"
          required
          :value="author"
          @input="updateAuthor"
        />
        <span>Autor</span>
      </label>
      <label for="content">
        <textarea
          name=""
          id="content"
          rows="10"
          required
          :value="content"
          @input="updateContent"
        ></textarea>
        <span>Treść</span>
      </label>
      <div class="buttons">
        <button-clear></button-clear>
        <button-publish></button-publish>
      </div>
    </form>
  </section>
</template>

<script>
import PopUp from "./assets/CategoryPopUp.vue";
import Clear from "./assets/ClearButton.vue";
import Publish from "./assets/PublishButton.vue";

import { mapGetters } from "vuex";
import { mixin as clickaway } from "vue-clickaway";
export default {
  components: {
    "popup-category": PopUp,
    "button-clear": Clear,
    "button-publish": Publish,
  },
  data() {
    return {
      article: {
        title: "",
        category: "",
        author: "",
        content: "",
      },
    };
  },
  mixins: [clickaway],
  methods: {
    updateTitle(event) {
      this.$store.commit("title", event.target.value);
      this.article.title = event.target.value;
    },
    updateCategory(event) {
      this.$store.commit("category", event.target.value);
      this.article.title = event.target.value;
    },
    updateAuthor(event) {
      this.$store.commit("author", event.target.value);
      this.article.author = event.target.value;
    },
    updateContent(event) {
      this.$store.commit("content", event.target.value);
      this.article.content = event.target.value;
    },
    popupActivate() {
      this.$store.commit("popupHide", true);
    },
    away: function() {
      this.$store.commit("popupHide", false);
    },
    removeCategory() {
      this.$store.commit("category", "");
      this.$store.commit("crossActive", false);
    },
  },
  computed: {
    ...mapGetters({
      category: "category",
      title: "title",
      author: "author",
      content: "content",
      cross: "cross",
      popup: "popup",
    }),
  },
};
</script>

<style lang="scss" scoped>
section.articleForm {
  min-height: 50vh;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h2 {
    margin-bottom: 50px;
    margin-top: 30px;
  }
  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px) {
      width: 100%;
    }
    div {
      display: flex;
      flex-direction: column;
      position: relative;
      height: 50px;
      &.content {
        height: fit-content;
      }
    }
    .category-box {
      margin: 15px 0;
      height: fit-content;
      label {
        margin: 0;
      }
      .fader-enter-active,
      .fader-leave-active {
        transition: opacity 0.3s;
      }
      .fader-enter, .fader-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
      .crossIcon {
        height: fit-content;
        width: fit-content;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        cursor: pointer;
        .fa-times {
          opacity: 1;
          z-index: 100;
          &.inactive {
            opacity: 0;
          }
        }
      }
    }
    label {
      margin-left: 10px;
      font-size: 12px;
      text-transform: uppercase;
      position: relative;
      width: 100%;
      margin: 15px 0;
      input,
      textarea {
        background: transparent;
        border: none;
        border-bottom: 1px solid $lgrey;
        outline: none;
        padding: 5px 10px;
        resize: none;
        transition: 0.5s border-bottom;
        width: calc(100% - 20px);
        &:focus,
        &:valid {
          border-bottom: 1px solid $blue;
          & ~ span {
            top: -15px;
            color: $blue;
          }
        }
        &#category {
          cursor: pointer;
        }
      }
      textarea {
        &::-webkit-scrollbar {
          width: 3px;
          height: 5px;
          cursor: pointer;
        }
        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: $blue;
          border-radius: 5px;
        }
      }
      span {
        position: absolute;
        top: 6px;
        left: 10px;
        transition: 0.5s;
        color: $lgrey;
      }
    }
    .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      button {
        width: fit-content;
        border: none;
        padding: 7px 25px;
        height: 40px;
        border-radius: 5px;
        margin-top: 20px;
        cursor: pointer;
        font-weight: 600;
      }
    }
  }
}
</style>
