<template>
  <div class="projects-wrap">
    <img class="projects-wrap__bkg" src="@/assets/img/projects.png" alt="#" />
    <div class="wrap flex-center">
      <section class="projects">
        <SecondTitle>Our Project</SecondTitle>
        <BradCramp :items="navItems" />
      </section>
    </div>
  </div>
  <div class="wrap">
    <div class="flex-center">
      <div class="projects__filters">
        <FilterArticles
          v-for="(filter, index) in filters"
          :key="index"
          :btnname="filter"
          @click="filtration(filter)"
          class="projects__filter"
          :class="
            activeFilter === filter
              ? (active = 'blog-articles__btn-on')
              : (active = '')
          "
        />
        <!-- <p v-for="filter in filters" :key="filter" class="projects__filter">
          {{ filter }}
        </p> -->
      </div>
    </div>
    <div class="projects__container">
      <FirstCard v-for="card in filteredCards" :key="card" :card="card" />
    </div>
  </div>
</template>

<script>
import BradCramp from "@/components/BradCramp.vue";
import FilterArticles from "@/components/FilterArticles.vue";
import FirstCard from "@/components/FirstCard.vue";
import SecondTitle from "@/components/SecondTitle.vue";
import { mapState } from "vuex";

export default {
  components: {
    SecondTitle,
    FirstCard,
    BradCramp,
    FilterArticles,
  },
  data() {
    return {
      navItems: [
        { link: "/", content: "Home" },
        { link: "/project", content: "Projects" },
      ],
      filters: ["Bathroom", "Bed Room", "Kitchan", "Living Area"],
      activeFilter: "Kitchan",
    };
  },
  methods: {
    filtration(filter) {
      this.activeFilter = filter;
    },
  },
  computed: {
    ...mapState({
      projectCards: state => state.projectCards,
    }),
    filteredCards() {
      return this.projectCards.filter(
        (card) => card.category === this.activeFilter
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-center {
  display: flex;
  justify-content: center;
}
.projects-wrap {
  position: relative;
  padding-top: 178px;
  border: 1px solid rgb(244, 240, 236);
  overflow: hidden;

  &__bkg {
    position: absolute;
    min-width: 100vw;
    top: 0;
    left: 0;
    background: rgb(244, 240, 236);
    z-index: -1;
  }
}

.projects {
  text-align: center;
  border-radius: 37px 37px 0px 0px;
  background: rgb(255, 255, 255);
  padding: 41px 78px;
  max-width: 502px;

  &__filters {
    display: flex;
    justify-content: space-between;
    margin-top: 200px;
    margin-bottom: 61px;
    width: 880px;
    height: 75px;
    box-sizing: border-box;
    border: 1px solid rgb(205, 162, 116);
    border-radius: 18px;
  }
  &__filter {
    text-align: center;
    color: rgb(41, 47, 54);
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    padding: 26px 66px;
  }
  &__filter:hover {
    border-radius: 18px;
    background: rgb(255, 193, 127);
    cursor: pointer;
  }
  &__container {
    column-count: 2;
  }
  &__card {
    padding-top: 0;
    padding-bottom: 56px;
    width: 98.82%;
  }
}
.blog-articles {
  &__btn {
    margin-right: 0px;
    margin-bottom: 0px;
    border-radius: 18px;
    border: 1px solid rgb(255 255 255);
    background: rgb(255 255 255);
  }
  &__btn:hover {
    border: 1px solid rgb(255, 193, 127);
  }
  &__btn-on {
    border-radius: 18px;
    background: rgb(205, 162, 116);
    border: 1px solid rgb(205, 162, 116);
  }
}
</style>
