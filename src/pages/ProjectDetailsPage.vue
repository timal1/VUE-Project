<template>
  <div class="projdetails-wrap">
    <img
      class="projdetails-wrap__bkg"
      src="@/assets/img/projdetails.png"
      alt="#"
    />
  </div>
  <div class="wrap">
    <div class="projdetails">
      <div class="projdetails__text-content">
        <SecondTitle>Minimal Look Bedrooms</SecondTitle>
        <TextComp
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
          vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
          maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
          in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum
          vel lectus bibendum commodo.
        </TextComp>
        <TextComp class="text2">
          In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
          tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque
          arcu. Donec a pellentesque Cras erat enim, gravida non ante
          vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus
          vitae iaculisvd porta. Proin tincidunt ligula id purus
          porttitor.</TextComp
        >
      </div>
      <SwipperZoom></SwipperZoom>
    </div>
  </div>
</template>

<script>
import SecondTitle from "@/components/SecondTitle.vue";
import TextComp from "@/components/TextComp.vue";
import SwipperZoom from "@/components/SwipperZoom.vue";

export default {
  components: {
    SecondTitle,
    TextComp,
    SwipperZoom,
  },
};
</script>

<style lang="scss" scoped>
.projdetails {
  padding-top: 200px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__text-content {
    width: 658px;
    padding-bottom: 100px;
  }

  .text2 {
    padding-top: 32px;
  }
}

.projdetails-wrap {
  position: relative;
  padding-top: 356px;
  border: 1px solid rgb(244, 240, 236);
  overflow: hidden;

  &__bkg {
    position: absolute;
    min-width: 100vw;
    top: 0;
    left: 0;
    background: rgb(244, 240, 236);
  }
}
</style>
