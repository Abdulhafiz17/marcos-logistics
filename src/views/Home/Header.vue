<script>
export default {
  name: "Header",
};
</script>

<template>
  <div class="img">
    <div class="hero">
      <div class="hero_in">
        <div style="height: 176px; position: relative">
          <div class="first">
            Решения для практически бесконечного числа потребностей в логистике
          </div>
          <div class="second">
            MarcosLogistics представлена более чем в 20 городах и территориях
            России и Узбекистана
          </div>
        </div>
        <div class="btn">
          <div class="btn_radius">
            <div class="btn_text">Подробнее</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.img {
  background-image: url(../../assets/image/scania.png);
  width: auto;
  height: 540px;
  background-repeat: no-repeat;
  background-size: cover;
  & .hero {
    text-align: left;
    padding-top: 110px;
    width: 100%;
    color: white;
    font-size: 40px;
    font-family: Inter;
    font-weight: 700;
    line-height: 40px;
    word-wrap: break-word;
    & .hero_in {
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 84px;
      display: inline-flex;
    }
  }
  & .first {
    text-align: left;
    padding-left: 210px;
    width: 820px;
    left: 0px;
    top: 0px;
    position: absolute;
    color: white;
    font-size: 40px;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    line-height: 40px;
    word-wrap: break-word;
  }
  & .second {
    text-align: left;
    padding-left: 210px;
    width: 820px;
    left: 0px;
    top: 136px;
    position: absolute;
    color: white;
    font-size: 20px;
    font-family: "Space Grotesk", sans-serif;
    font-weight: 400;
    line-height: 20px;
    word-wrap: break-word;
  }
  & .btn {
    padding-left: 210px;
  }
  & .btn_radius {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    background: #fcfcfd;
    justify-content: center;
    align-items: center;
    gap: 12px;
    display: inline-flex;
    & .btn_text {
      text-align: center;
      color: #23262f;
      font-size: 14px;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 700;
      line-height: 16px;
      word-wrap: break-word;
    }
  }
}
</style>
