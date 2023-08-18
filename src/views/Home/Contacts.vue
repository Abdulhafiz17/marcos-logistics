<script>
export default {
  name: "Contacts",
};
</script>

<template>
  <div class="contacts">
    <div class="inner">
      <div class="first">
        <div style="position: relative; overflow: hidden">
          <a
            href="https://yandex.com/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >
            Ташкент
          </a>
          <a
            href="https://yandex.com/maps/10335/tashkent/house/YkAYdA9nQUICQFprfX90dHRkZg==/?ll=69.289576%2C41.355882&utm_medium=mapframe&utm_source=maps&z=17.15"
            style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >
            Яндекс Карты
          </a>
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=69.289576%2C41.355882&mode=whatshere&whatshere%5Bpoint%5D=69.287791%2C41.355618&whatshere%5Bzoom%5D=17&z=17.15"
            width="500"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
          ></iframe>
        </div>
      </div>
      <div class="second">
        <h4>Наши контакты</h4>
        <div class="links">
          <a href="tel:+998777774600" class="phone">+998(77)777-46-00</a>
          <a href="https://info@marcos.uz" class="web">info@marcos.uz</a>
        </div>
        <div class="social">
          <a href="#">
            <img src="../../assets/image/Facebook (1).svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="../../assets/image/instagram (1).svg" alt="instagram" />
          </a>
          <a href="#">
            <img src="../../assets/image/telegram (1).svg" alt="telegram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  padding: 3rem 4rem;

  .inner {
    margin: 0 auto;
    width: max-content;
    display: flex;

    .first {
      flex: auto;
    }

    .second {
      padding: 5rem 6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      flex: auto;

      h4 {
        color: var(--dark, #23262f);
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 56px; /* 175% */
      }

      .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        a {
          color: var(--dark, #23262f);
          text-align: center;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 120% */
        }
      }

      .social {
        display: flex;
        gap: 1rem;
      }
    }
  }
}
</style>
