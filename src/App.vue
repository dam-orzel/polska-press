<template>
  <main>
    <section>
      <article-form></article-form>
    </section>
    <section>
      <article-preview></article-preview>
    </section>
  </main>
</template>

<script>
import ArticleForm from "@/components/Form.vue";
import ArticlePreview from "@/components/Preview.vue";
export default {
  components: {
    "article-form": ArticleForm,
    "article-preview": ArticlePreview,
  },
};
</script>

<style lang="scss">
body {
  background: $black;
}
main {
  display: flex;
  flex-wrap: wrap;
  section {
    width: 50%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
}
</style>
