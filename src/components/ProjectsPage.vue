<template class="wrapper">
  <div class="header-wrap">
    <div class="wrap">
      <HeaderComp />
    </div>
  </div>
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
          <TextComp>It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts
            points.</TextComp>
        </div>
        <div class="projects__box">
          <FirstCard />
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
            It is a long established fact that a reader will be distracted
            by the of readable content of a page when lookings at its
            layouts the points of using.
          </p>
        </div>
        <div class="articles__box">
          <SecondCard :button="button" :articles="articles.slice(0, 3)" />
        </div>
      </section>
    </div>
  </div>
  <div class="footer-wrap">
    <div class="wrap">
      <FooterComp />
    </div>
  </div>
</template>

<script>
import SecondTitle from "@/components/SecondTitle.vue";
import Header from "../components/Header.vue";
import Homepage from "../components/Homepage.vue";
import Footer from "../components/Footer.vue";
import FirstCard from "../components/FirstCard.vue";
import SecondCard from "../components/SecondCard.vue";
import TextComp from "@/components/TextComp.vue";
export default {
  components: {
    Header,
    Homepage,
    SecondTitle,
    TextComp,
    FirstCard,
    SecondCard,
    Footer
  },
  data() {
    return {
      button: {
        height: 16,
        width: 8.03,
        class: "articles__btn",
      },
      articles: [
        {
          id: 0,
          imgsrc: require("@/assets/img/card-img1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 1,
          imgsrc: require("@/assets/img/card-img2.png"),
          title: "Low Cost Latest Invented Interior Designing <br> Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 2,
          imgsrc: require("@/assets/img/card-img3.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
        {
          id: 3,
          imgsrc: require("@/assets/img/card-img4.png"),
          title: "Let’s Get Solution For Building Construction Work",
          category: "Kitchan Design",
          link: "#",
        },
        {
          id: 4,
          imgsrc: require("@/assets/img/card-img5.png"),
          title: "Low Cost Latest Invented Interior Designing <br>Ideas.",
          category: "Interior Design",
          link: "#",
        },
        {
          id: 5,
          imgsrc: require("@/assets/img/card-img6.png"),
          title: "Best For Any Office & Business Interior Solution",
          category: "Living Design",
          link: "#",
        },
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
  margin: 0 auto;
}

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

.footer {
  display: flex;
  justify-content: space-between;
  padding-top: 96px;
  padding-bottom: 134px;
}
</style>