<script>
export default {
  name: "AboutCompany",
};
</script>
<template>
  <div class="bg-img">
    <div class="inner">
      <div class="text">Отзывы от компании</div>
      <div class="card mx-4" :key="card" v-for="card in 3">
        <div class="card-in">
          <div class="card-into">
            <div class="img-in">
              <img class="img-boss" src="../../assets/image/boss.png" />
            </div>
            <div class="card-text">
              <div class="name-text">Фаррух Болтаев</div>
              <div class="text-in">Директор</div>
            </div>
          </div>
        </div>
        <div class="title">Про работу нашей команды</div>
        <div class="title-in">
          Мы единственная компания которая <br />
          предоставляет услуги на высшем <br />
          уровне. Наша команда изо дня в день <br />
          старается улучшать наш сервис. На <br />
          сегодняшний день MarcosLogistics <br />
          является лидером в это сегменте
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.bg-img {
  background-image: url("../../assets/image/line.svg");
  width: auto;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  & .inner {
    padding-top: 90px;
    padding-bottom: 80px;
    padding-left: 30px;
    padding-right: 30px;
    & .text {
      color: #23262f;
      padding-bottom: 80px;
      font-size: 32px;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 700;
      line-height: 38px;
      word-wrap: "break-word";
    }
    & .card {
      width: 22%;
      height: 100%;
      background: white;
      border: 0.5px #e3e5e5 solid;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 22px;
      display: inline-flex;
      & .card-in {
        align-self: stretch;
        justify-content: flex-start;
        align-items: center;
        display: inline-flex;
        & .card-into {
          width: 100%;
          height: 100%;
          justify-content: flex-start;
          align-items: center;
          gap: 16px;
          display: inline-flex;
          & .img-in {
            justify-content: flex-start;
            align-items: flex-start;
            gap: 10px;
            display: flex;
            & .img-boss {
              width: 64px;
              height: 64px;
              border-radius: 32px;
            }
          }
          & .card-text {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 8px;
            display: inline-flex;
            & .name-text {
              color: black;
              font-size: 16px;
              font-family: "Space Grotesk", sans-serif;
              font-weight: 600;
              line-height: 20px;
              word-wrap: "break-word";
            }
            & .text-in {
              color: #72777a;
              font-size: 14px;
              font-family: "Space Grotesk", sans-serif;
              font-weight: 400;
              line-height: 18px;
              word-wrap: "break-word";
            }
          }
        }
      }
      & .title {
        width: 100%;
        color: black;
        font-size: 16px;
        font-family: "Space Grotesk", sans-serif;
        font-weight: 600;
        line-height: 20px;
        word-wrap: "break-word";
        text-align: left;
      }
      & .title-in {
        color: #72777a;
        font-size: 14px;
        font-family: "Space Grotesk", sans-serif;
        font-weight: 400;
        line-height: 22px;
        word-wrap: "break-word";
        text-align: left;
      }
    }
  }
}
</style>