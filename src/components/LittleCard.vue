<template>
    <div class="littleCard">
        <div class="littleCardImg">
            <div class="littleCardDesign">{{ tagImage }}</div>
        </div>
        <div class="littleCardTitle">{{text}}</div>
        <div class="littleCardMore">
            <div class="littleCardDate">{{date}}</div>
            <button class="litleCardBtn"><img src="@/assets/img/Vector2.svg" alt=""></img></button>
        </div>
    </div>
</template>

<script>

  export default {
    props: {
        text: String,
         date: String,
         image: String,
         tagImage: String
    }
  }


</script>

<style scoped>

.littleCard {
    padding: 21px;
    min-height: 521px;
    min-width: 382px;
    border-radius: 70px;
    border: 1px solid #F4F0EC;
}

.littleCardImg {
    background-image: v-bind(image);
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
    border-radius: 50px 50px 0 0;
    max-height: 305px;
}


.littleCardDesign {
    margin-left: 20px;
    padding-left: 10px;
    background-color: white;
    max-width: 150px;
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
     border-radius: 5px;
}

.littleCardTitle {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    max-width: 288px;
    margin-bottom: 20px;
}

.littleCardDate {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
}

.littleCardMore {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.litleCardBtn {
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    border: none;
    background-color: #F4F0EC;
}

.litleCardBtn:hover {
    background-color: #bababa;
    transition: all 0.3s;
    cursor: pointer;
}
</style>