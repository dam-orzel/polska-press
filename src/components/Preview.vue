<template>
  <section class="preview">
    <h2>Podgląd Twojego artykułu</h2>
    <div class="preview-box">
      <h1>{{ title }}</h1>
      <span>{{ author }}</span>
      <article>{{ content }}</article>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
    },
    category: {
      get() {
        return this.$store.state.category;
      },
    },
    author: {
      get() {
        return this.$store.state.author;
      },
    },
    content: {
      get() {
        return this.$store.state.content;
      },
    },
  },
};
</script>

<style lang="scss">
section.preview {
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 50px;
    margin-top: 30px;
    text-align: center;
    @media (max-width: 700px) {
      margin-top: 100px;
    }
  }
  .preview-box {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 30px;
      font-weight: 400;
      @media (max-width: 700px) {
        font-size: 20px;
      }
    }
    span {
      font-size: 12px;
      color: $lgrey;
      @media (max-width: 700px) {
        font-size: 10px;
      }
    }
    article {
      margin-top: 50px;
      font-size: 14px;
    }
  }
}
</style>
