<template>
  <article v-for="article in articles" :key="article.id" class="articles__card">
    <figure class="articles__img-box">
      <img class="articles__img" :src="article.imgsrc" alt="#" />
      <div class="articles__category">
        <p class="articles__category-text">{{ article.category }}</p>
      </div>
    </figure>
    <h3 class="articles__card-headding" v-html="article.title"></h3>
    <div class="articles__btn-box">
      <p class="articles__data">26 December,2022</p>
      <router-link to="/blog/derails">
        <ArrowBtn
          btnclass="articles__btn"
          :btnwidth="button.width"
          :btnheight="button.height"
        ></ArrowBtn>
      </router-link>
    </div>
  </article>
</template>

<script>
import ArrowBtn from "./ArrowBtn.vue";

export default {
  props: ["button", "articles"],
  components: { ArrowBtn },
  // data() {
  //   return {

  //   };
  // },
};
</script>

<style lang="scss" scoped>
.articles {
  &__category {
    position: absolute;
    left: 20px;
    bottom: 20px;
    padding: 8px 10px;
    border-radius: 8px 8px 8px 0px;
    background: rgb(255, 255, 255);
  }
  &__category-text {
    color: rgb(77, 80, 83);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
  }
  &__card {
    padding: 21px;
    width: 382px;
    box-sizing: border-box;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    transition: all 0.5s;
  }
  &__card:hover {
    background: rgb(244, 240, 236);
  }
  &__card:hover &__btn {
    background: #fff;
  }
  &__img-box {
    position: relative;
    width: 340px;
    overflow: hidden;
    height: 290px;
    border-radius: 45px 45px 0px 0px;
    background: rgb(234, 234, 234);
  }
  &__img {
    position: absolute;
    top: -22%;
    left: -48%;
  }
  &__card-headding {
    padding-top: 20px;
    padding-bottom: 40px;
    color: rgb(41, 47, 54);
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    width: 84%;
  }
  &__btn-box {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    align-items: center;
  }
  &__data {
    color: rgb(77, 80, 83);
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: capitalize;
  }
  &__btn {
    background: rgb(244, 240, 236);
    display: flex;
    text-align: center;
    border-radius: 100%;
    padding: 18px 22px;
    transition: all 0.5s;
  }
  &__btn:hover {
    cursor: pointer;
    background-color: #fff;
  }
}
</style>
