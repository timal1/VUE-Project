<template>
  <div>
    <h3 class="prod__name">{{ product.name }}</h3>
    <p class="prod__price">{{ formattedPrice }}</p>
    <p class="prod__availible">{{ availableProduct }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    formattedPrice: String,
    availableProduct: String,
  },
};
</script>

<style lang="scss" scoped></style>
