<template>
  <div class="details-wrap">
    <img class="details-wrap__bkg" :src="detailsBkg" alt="#" />
  </div>
  <div class="blog-articles-wrap">
    <div class="wrap">
      <section class="blog-articles flex">
        <div>
          <article
            v-for="(article, index) in filterArticles"
            :key="index"
            class="blog-articles__box"
          >
            <SecondTitle>{{ article.title1 }}</SecondTitle>
            <figure class="blog-articles__img-box">
              <img
                :src="article.firstImgsrc"
                :alt="article.firstImgAlt"
                class="blog-articles__img"
              />
            </figure>
            <div class="flex blog-articles__width">
              <p class="blog-articles__nav-text">26 December,2022</p>
              <nav>
                <a
                  v-for="(navItem, index) in navItems"
                  :key="index"
                  class="blog-articles__nav-text"
                  :href="navItem.link"
                  >{{ navItem.content }}</a
                >
              </nav>
            </div>
            <TextComp class="blog-articles__description blog-articles__width"
              >{{ article.content1 }}
            </TextComp>
            <TextComp class="blog-articles__description blog-articles__width"
              >{{ article.content2 }}
            </TextComp>
            <blockquote class="blog-articles__blockquote">
              <h2 class="blog-articles__symbol">,,</h2>
              <h2 class="blog-articles__text">
                {{ article.blockquote }}
              </h2>
            </blockquote>
            <SecondTitle class="padbot">{{ article.title2 }}</SecondTitle>
            <TextComp class="blog-articles__description blog-articles__width"
              >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered.</TextComp
            >
            <ol class="blog-articles__list blog-articles__width">
              <li
                v-for="(item, index) in article.list"
                :key="index"
                class="blog-articles__item"
              >
                <TextComp
                  class="blog-articles__description blog-articles__width"
                  >{{ item }}</TextComp
                >
              </li>
            </ol>
            <figure class="blog-articles__img-box">
              <img :src="article.secondImgsrc" :alt="article.secondImgAlt" />
            </figure>
            <TextComp class="blog-articles__description blog-articles__width">{{
              article.content4
            }}</TextComp>
          </article>
        </div>
        <aside class="blog-articles__tags">
          <FilterArticles
            v-for="(filter, index) in filters"
            :key="index"
            :btnname="filter"
            @click="filtration(filter)"
            :class="
              activeFilter === filter
                ? (active = 'blog-articles__btn-active')
                : (active = '')
            "
          />
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
import FilterArticles from "@/components/FilterArticles.vue";
import SecondTitle from "@/components/SecondTitle.vue";
import TextComp from "@/components/TextComp.vue";
import { mapState } from "vuex";

export default {
  components: { FilterArticles, SecondTitle, TextComp },
  data() {
    return {
      detailsBkg: require("@/assets/img/details.jpeg"),
      filters: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Build",
      ],
      activeFilter: "Kitchen",
      navItems: [
        { content: "Interior", link: "#" },
        { content: "Home", link: "#" },
        { content: "Blog", link: "#" },
      ],
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.detailArticles,
    }),
    filterArticles() {
      return this.articles.filter(
        (article) => article.category === this.activeFilter
      );
    },
  },
  methods: {
    filtration(filter) {
      this.activeFilter = filter;
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
.details-wrap {
  position: relative;
  padding-top: 351px;
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
.blog-articles {
  padding-top: 200px;
  display: flex;
  justify-content: space-between;
  .padbot {
    padding-bottom: 20px;
  }
  &__box:not(:last-child) {
    padding-bottom: 46px;
  }
  &__width {
    width: 800px;
  }
  &__tags {
    display: flex;
    justify-content: flex-start;
    align-self: start;
    flex-wrap: wrap;
    width: 390px;
  }
  &__btn-active {
    background-color: rgb(41, 47, 54);
    border: 1px solid rgb(41, 47, 54);
    color: white;
  }
  &__headding {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display";
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    padding-bottom: 11px;
  }
  &__img-box {
    width: 800px;
    height: 540px;
    box-sizing: border-box;
    border-radius: 50px;
    background-color: rgb(196, 196, 196);
    overflow: hidden;
    margin-top: 11px;
    margin-bottom: 46px;
  }
  &__img-box:last-of-type {
    height: 365px;
    margin-bottom: 35px;
  }
  &__img {
    width: 100%;
  }
  &__nav-text {
    font-size: 16px;
    color: rgb(77, 80, 83);
    padding-bottom: 46px;
  }
  &__nav-text:not(:first-child):before {
    content: " / ";
  }
  &__description {
    padding-bottom: 46px;
  }
  &__description:last-child {
    padding-bottom: 0;
  }
  &__blockquote {
    padding: 53px 227px;
    background-color: rgb(244, 240, 236);
    overflow: hidden;
    box-sizing: border-box;
    width: 800px;
    border-radius: 50px;
    margin-bottom: 27px;
  }
  &__symbol {
    color: rgb(205, 162, 116);
    margin-top: -151px;
    font-style: italic;
    font-size: 200px;
    font-weight: 400;
    line-height: 125%;
    width: 345px;
    text-align: center;
  }
  &__text {
    color: rgb(205, 162, 116);
    font-style: italic;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    width: 345px;
    text-align: center;
  }
  &__list {
    padding-bottom: 46px;
  }
  &__item::marker {
    color: rgb(205, 162, 116);
    font-family: "DM Serif Display";
    font-size: 20px;
    font-weight: 400;
    line-height: 125%;
  }
  &__item {
    margin-left: 21px;
  }
  &__item:not(:last-child) {
    padding-bottom: 32px;
  }
}
</style>
