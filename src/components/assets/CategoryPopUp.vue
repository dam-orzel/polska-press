<template>
  <section class="popup">
    <h2>Wybierz kategorię</h2>
    <span></span>
    <div class="category-box">
      <div
        class="category-item"
        v-for="(item, id) in categories"
        :key="id"
        @click="chooseCategory(item.title), crossActivate(), popupHide()"
      >
        <i :class="item.class" class="text-blue"></i>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { title: "Sport", class: "fas fa-football-ball" },
        { title: "Gotowanie", class: "fas fa-hamburger" },
        { title: "Technologia", class: "fas fa-sitemap" },
        { title: "Zdrowie", class: "fas fa-heartbeat" },
        { title: "Biznes", class: "fas fa-money-bill-alt" },
        { title: "Gwiazdy", class: "fas fa-star" },
        { title: "Motoryzacja", class: "fas fa-car" },
        { title: "Turystyka", class: "fas fa-route" },
      ],
      choosen: "",
    };
  },
  methods: {
    chooseCategory(e) {
      this.$store.commit("category", e);
    },
    crossActivate() {
      this.$store.commit("crossActive", true);
    },
    popupHide() {
      this.$store.commit("popupHide", false);
    },
  },
};
</script>

<style lang="scss" scoped>
section.popup {
  position: absolute;
  top: 31px;
  left: 50%;
  transform: translateX(-50%);
  background: $blue;
  width: 100%;
  height: fit-content;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  text-transform: none;
  h2 {
    margin: 10px 0;
    padding: 0;
    text-transform: capitalize;
  }
  .category-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 20px;
    .category-item {
      display: flex;
      flex-direction: column;
      background: $white;
      border-radius: 5px;
      padding: 10px 0;
      justify-content: center;
      align-items: center;
      min-width: 30%;
      margin: 0 1% 4% 1%;
      cursor: pointer;
      span,
      svg {
        color: $black;
        font-size: 16px;
      }
      svg {
        font-size: 30px;
        margin-bottom: 10px;
        transition: 0.5s;
      }
      &:hover {
        svg {
          color: $blue;
        }
      }
      @media (max-width: 1000px) {
        min-width: 48%;
        margin: 0 1% 2% 1%;
      }
    }
  }
}
</style>
