<template>
  <article class="projects__card">
    <figure class="projects__card-figure" :class="card.class">
      <img class="projects__card-img" :src="card.imgsrc" :alt="imgalt" />
    </figure>
    <div class="projects__text-card">
      <div>
        <h4 class="projects__card-headding" v-html="card.title"></h4>
        <TextComp>{{ card.info }}</TextComp>
      </div>
      <router-link to="/project/details">
        <ArrowBtn
          :btnclass="button.class"
          :btnwidth="button.width"
          :btnheight="button.height"
        ></ArrowBtn>
      </router-link>
    </div>
  </article>
</template>

<script>
import TextComp from "./TextComp.vue";
import ArrowBtn from "./ArrowBtn.vue";

export default {
  components: { TextComp, ArrowBtn },
  props: {
    card: Object,
  },
  data() {
    return {
      button: {
        height: 20.039,
        width: 10.02,
        class: "projects__btn",
      },
      // cards: [
      //   {
      //     imgsrc: require("@/assets/img/card1.png"),
      //     link: "#",
      //     imgalt: "Modern Kitchan",
      //     title: "Modern Kitchan",
      //     info: "Decor / Artchitecture",
      //     class: "btrr",
      //   },
      //   {
      //     imgsrc: require("@/assets/img/card2.png"),
      //     link: "#",
      //     imgalt: "Modern Kitchan",
      //     title: "Modern Kitchan",
      //     info: "Decor / Artchitecture",
      //     class: "btlr",
      //   },
      //   {
      //     imgsrc: require("@/assets/img/card3.png"),
      //     link: "#",
      //     imgalt: "Modern Kitchan",
      //     title: "Modern Kitchan",
      //     info: "Decor / Artchitecture",
      //     class: "bbrr",
      //   },
      //   {
      //     imgsrc: require("@/assets/img/card4.png"),
      //     link: "#",
      //     imgalt: "Modern Kitchan",
      //     title: "Modern Kitchan",
      //     info: "Decor / Artchitecture",
      //     class: "bblr",
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-figure {
    height: 525px;
}
.projects {
  &__card {
    width: 45.8%;
  }
  .btrr {
    border-top-right-radius: 80px;
  }
  .btlr {
    border-top-left-radius: 80px;
  }
  .bbrr {
    border-bottom-right-radius: 80px;
  }
  .bblr {
    border-bottom-left-radius: 80px;
  }

  &__text-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
  }
  &__card-headding {
    color: rgb(41, 47, 54);
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
  }
  &__info {
    padding-top: 5px;
  }
  &__btn {
    display: flex;
    background: rgb(244, 240, 236);
    text-align: center;
    border-radius: 100%;
    padding: 25px 30px;
    transition: all 0.5s;
  }

  &__btn:hover {
    cursor: pointer;
    background-color: #fff;
  }

  // .articles__btn {
  //   background: rgb(244, 240, 236);
  //   text-align: center;
  //   border-radius: 100%;
  //   padding: 18px 22px;
  //   transition: all 0.5s;
  // }
  // .articles__btn:hover {
  //   cursor: pointer;
  //   background-color: #fff;
  // }
}
</style>
