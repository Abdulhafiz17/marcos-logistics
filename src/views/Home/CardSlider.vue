<script>
export default {
  name: "CardSlider",
  methods: {
    scrollTo(slide) {
      let slider = document.getElementById("slider");
      let scroll_size = slider.scrollLeft + 100;
      slider.scrollLeft += 100;
      slider.scroll({ top: 0, left: scroll_size, behavior: "smooth" });
      // slider.scrollIntoView();
    },
  },
};
</script>

<template>
  <div class="inner">
    <div class="inner_head">
      <div class="text">Наши преимущества</div>
      <div class="buttons">
        <button class="btn" @click="scrollTo">
          <span class="fa fa-arrow-left mx-2"></span>
        </button>
        <button class="btn" @click="scrollTo">
          <span class="fa fa-arrow-right mx-2"></span>
        </button>
      </div>
    </div>
    <div class="row" id="slider">
      <!-- <div class="col-md-4" :key="i" v-for="i in 4"> -->
      <div class="card" v-for="i in 10" :key="i">
        <div class="card-body">
          <img src="../../assets/image/img.png" alt="sorry, image not found" />
          <div class="text2">Опыт и профессионализм</div>
          <div class="text3">
            Мы обладаем многолетним опытом в грузоперевозках и предоставляем
            высококачественные услуги нашим клиентам.
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
.inner {
  padding: 110px;
  .inner_head {
    display: flex;
    justify-content: space-between;
    & .text {
      color: #23262f;
      font-size: 32px;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 700;
      line-height: 38px;
      text-align: left;
      word-wrap: break-word;
    }
    & .btn {
      border-radius: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      box-shadow: none;
      border-color: whitesmoke;
    }
  }

  & .row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: auto;
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }

    & .card {
      border: none;
      width: max-content;
      max-width: 300px;

      & img {
        width: 250px;
        height: 250px;
      }
    }
  }
  & .text2 {
    color: #23262f;
    font-size: 16px;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    text-align: left;
    line-height: 16px;
    // padding-left: 32px;
    padding-top: 15px;
    word-wrap: break-word;
  }
  & .text3 {
    color: #72777a;
    font-size: 14px;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    text-align: left;
    line-height: 20px;
    // padding-left: 32px;
    padding-top: 15px;
    word-wrap: break-word;
  }
}
</style>