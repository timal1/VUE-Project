<template>
  <section class="main">
    <img :src="mainBkgImg" alt="Home interer" class="main__img" />
    <h1 class="main__headding">Let Your Home Be Unique</h1>
    <TextComp class="main__text"
      >There are many variations of the passages of lorem Ipsum fromavailable,
      majority.</TextComp
    >
    <router-link to="/project">
      <button class="main__button">
        Get Started
        <svg
          width="17.151093"
          height="16.005859"
          viewBox="0 0 17.1511 16.0059"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Vector"
            d="M1.00992 7.93823L14.7331 7.80151M9.6281 1.41431L16.1511 7.93726L9.49669 14.5918"
            stroke="#CDA274"
            stroke-opacity="1.000000"
            stroke-width="2.000000"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </router-link>
  </section>
</template>

<script>
import TextComp from "./TextComp.vue";
import mainBkgImg from "@/assets/img/main.png";

export default {
  components: { TextComp },
  data() {
    return {
      mainBkgImg: mainBkgImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  &__img {
    position: absolute;
    bottom: -81%;
    background: rgb(244, 240, 236);
    left: -7%;
    z-index: -1;
  }
  &__headding {
    width: 434px;
    padding-top: 208px;
    color: rgb(41, 47, 54);
    font-size: 65px;
    font-weight: 400;
    line-height: 125%;
  }
  &__text {
    width: 434px;
    padding-top: 18px;
    padding-bottom: 21px;
  }
  &__button {
    padding: 1.5rem 4rem;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(41, 47, 54);
    border: none;
    transition: all 0.3s;
  }
  &__button:hover {
    background: rgb(255, 255, 255);
    color: rgb(41, 47, 54);
  }
  &__button > svg {
    padding-left: 10px;
  }
}
</style>
