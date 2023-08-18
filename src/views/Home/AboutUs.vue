<script>
export default {
  name: "AboutUs",
};
</script>

<template>
  <div class="about-us">
    <div class="inner">
      <div class="text">
        <div class="text-inner">
          <h3>О нас</h3>
          <span>
            Мы - MarcosLogistics, транспортно-экспедиционная компания, которая
            перевезет Ваши грузы в кратчайшие сроки по принципу
            «от-двери-до-двери».
          </span>
          <span>
            Мы - MarcosLogistics, транспортно-экспедиционная компания, которая
            перевезет Ваши грузы в кратчайшие сроки по принципу
            «от-двери-до-двери».
          </span>
          <span>Мы ценим Ваше время!</span>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="card-image">
            <img src="../../assets/image/moscow.svg" alt="moscow" />
          </div>
          <div class="city-name">Москва</div>
          <div class="delivery-time">За 7 дней</div>
        </div>
        <div class="card">
          <div class="card-image">
            <img src="../../assets/image/novosybir.svg" alt="novosybir" />
          </div>
          <div class="city-name">Новосибирск</div>
          <div class="delivery-time">За 7 дней</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us {
  padding: 0 3.5rem;
  height: 100vh;

  .inner {
    padding: 1rem 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 2rem;
    background: url(../../assets/image/State_Outline.svg) no-repeat right;

    .text {
      flex: 3;
      display: flex;
      align-items: center;

      .text-inner {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: left;

        h3 {
          color: var(--dark, #23262f);
          font-family: Inter;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: 38px; /* 118.75% */
        }

        span {
          color: #72777a;
        }
      }
    }

    .cards {
      position: relative;
      flex: 5;

      .card {
        position: absolute;
        padding: 2rem 1rem;
        width: 180px;
        border: none;
        box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);

        &:first-child {
          top: 20%;
          left: 10%;
        }

        &:last-child {
          right: 10%;
          bottom: 20%;
        }

        .card-image {
          img {
            border-radius: 50%;
          }
        }

        .city-name {
          margin-top: 1rem;
          color: var(--neutrals-2, #23262f);
          text-align: center;

          /* Regular/None/Medium */
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 16px; /* 100% */
        }

        .delivery-time {
          margin-top: 1rem;
          color: var(--neutrals-4, #777e90);
          text-align: center;

          /* Tiny/Normal/Regular */
          font-family: Inter;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 133.333% */
        }
      }
    }
  }
}
</style>
