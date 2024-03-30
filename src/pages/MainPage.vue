<template class="wrapper">
  <div class="main-wrap">
    <div class="wrap">
      <MainSection class="main" />
    </div>
  </div>
  <div class="projects-wrap">
    <div class="wrap">
      <section class="projects">
        <div class="projects__text-box">
          <SecondTitle>Follow Our Projects</SecondTitle>
          <TextComp
            >It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts
            points.</TextComp
          >
        </div>
        <div class="projects__box">
          <FirstCard
            v-for="(card, index) in firstCards"
            :key="index"
            :card="card"
          />
        </div>
      </section>
    </div>
  </div>
  <div class="proginfo-wrap">
    <div class="wrap">
      <section class="proginfo flex">
        <div class="proginfo__box">
          <h2 class="proginfo__headding">12</h2>
          <TextComp class="proginfo__text">Years Of Experiance</TextComp>
        </div>
        <div class="proginfo__box">
          <h2 class="proginfo__headding">85</h2>
          <TextComp class="proginfo__text">Success Project</TextComp>
        </div>
        <div class="proginfo__box">
          <h2 class="proginfo__headding">15</h2>
          <TextComp class="proginfo__text">Active Project</TextComp>
        </div>
        <div class="proginfo__box">
          <h2 class="proginfo__headding">95</h2>
          <TextComp class="proginfo__text">Happy CUstomers</TextComp>
        </div>
      </section>
    </div>
  </div>
  <div class="articles-wrap">
    <div class="wrap">
      <section class="articles">
        <div class="articles__text-box">
          <h2 class="articles__headding">Articles & News</h2>
          <p class="articles__text">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div class="articles__box">
          <SecondCard :button="button" :articles="articles.slice(0, 3)" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SecondTitle from "@/components/SecondTitle.vue";
import MainSection from "../components/MainSection.vue";
import FirstCard from "../components/FirstCard.vue";
import SecondCard from "../components/SecondCard.vue";
import TextComp from "@/components/TextComp.vue";
import { mapState } from "vuex";

export default {
  components: {
    MainSection,
    SecondTitle,
    TextComp,
    FirstCard,
    SecondCard,
  },
  data() {
    return {
      button: {
        height: 16,
        width: 8.03,
        class: "articles__btn",
      },
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles.slice(0, 3),
      firstCards: (state) => state.projectCards.slice(0, 4),
    }),
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 758px;
  border-radius: 70px;
  padding-left: 52px;
  overflow: hidden;
}
.projects {
  padding-top: 98px;
  padding-bottom: 96px;

  &__text-box {
    text-align: center;
    width: 737px;
    margin: auto;
  }
  &__box {
    padding-top: 93px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__card:nth-child(3),
  &__card:nth-child(4) {
    padding-top: 56px;
  }
}
.projects__card-figure {
  height: 525px;
}

.proginfo-wrap {
  background: rgb(244, 240, 236);
  padding-top: 151px;
  padding-bottom: 151px;
}
.proginfo {
  display: flex;
  justify-content: space-between;
  &__box:not(:last-child) {
    border-right: 1px solid rgb(205, 162, 116);
    padding-left: 60px;
    padding-right: 75px;
    text-align: center;
  }
  &__box:last-child {
    padding-left: 60px;
    padding-right: 60px;
    text-align: center;
  }
  &__headding {
    color: rgb(205, 162, 116);
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
  }
  &__text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
  }
}
.articles {
  padding-top: 96px;
  &__box {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    flex-wrap: wrap;
    row-gap: 30px;
  }

  &__text-box {
    width: 810px;
    text-align: center;
    margin: auto;
  }
  &__headding {
    color: rgb(41, 47, 54);
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
  }
  &__text {
    padding-top: 12px;
    padding-bottom: 52px;
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
