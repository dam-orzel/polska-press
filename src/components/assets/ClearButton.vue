<template>
  <button class="clear" type="reset" @click="clearForm">Wyczyść</button>
</template>

<script>
export default {
  methods: {
    clearForm() {
      this.$store.commit("title", "");
      this.$store.commit("author", "");
      this.$store.commit("category", "");
      this.$store.commit("content", "");
      this.$store.commit("crossActive", false);
    },
  },
};
</script>

<style lang="scss">
button.clear {
  background: $orange;
}
</style>
