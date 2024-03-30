<template>
  <nav>
    <router-link
      v-for="(item, index) in items"
      :key="index"
      class="blog__text"
      :to="item.link"
      ><TextComp class="blog__text-content">{{ item.content }}</TextComp>
    </router-link>
  </nav>
</template>

<script>
import TextComp from "./TextComp.vue";

export default {
  props: ["items"],
  components: { TextComp },
};
</script>

<style lang="scss" scoped>
.blog {
  &__text:not(:first-child):before {
    content: " / ";
  }
  &__text-content {
    display: inline;
  }
}
</style>
