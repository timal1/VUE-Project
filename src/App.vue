<template>
  <div class="header-wrap">
    <div class="wrap">
      <HeaderComp />
    </div>
  </div>
  <!-- <MainPage /> -->
  <!-- <BlogPage /> -->
  <!-- <div class="wrap">
    <ProductDetails
      :product="product"
      :availableProduct="availableProduct"
      :formattedPrice="formattedPrice"
    />
  </div> -->
  <!-- <DetailsPage /> -->
  <!-- <ProjectsPage /> -->
  <router-view></router-view>
  <div class="footer-wrap">
    <div class="wrap">
      <FooterComp />
    </div>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import BlogPage from "./pages/BlogPage.vue";
import DetailsPage from "./pages/DetailsPage.vue";
import MainPage from "./pages/MainPage.vue";
import ProductDetails from "./components/ProductDetails.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
    BlogPage,
    DetailsPage,
    HeaderComp,
    FooterComp,
    ProductDetails,
    ProjectsPage,
    ProjectDetailsPage,
  },
  data() {
    return {
      product: {
        name: "Product1",
        price: 99.99,
        available: true,
      },
    };
  },
  computed: {
    formattedPrice() {
      return "$" + this.product.price;
    },
    availableProduct() {
      if (this.product.available) return "Available";
      return "Out of stock";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:ital@0;1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,600;1,600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:ital@0;1&display=swap");

* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

a {
  text-decoration: none;
}
body {
  font-family: "Jost";
}
h1,
h2,
h3,
h4 {
  font-family: "DM Serif Display";
}

.wrap {
  width: 1200px;
  margin: 0 auto;
}
.projects {
  &__card-figure {
    background: rgb(234, 234, 234);
    overflow: hidden;
    position: relative;
  }
  &__card-img {
    width: 100%;
    margin-bottom: -5px;
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  padding-top: 96px;
  padding-bottom: 134px;
}
</style>
