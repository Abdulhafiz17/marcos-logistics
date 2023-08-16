<script>
export default {
  name: "NavHeader",
};
</script>

<template>
  <div class="header">
    <div class="first">
      <img src="../../assets/icons/logo.svg" alt="logo" />
      <div class="group">
        <div class="input-area">
          <input type="text" placeholder="Введите трек-код" />
        </div>
        <div class="append-area">
          <div class="append">
            <img src="../../assets/icons/Shape.svg" alt="Shape" />
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <button class="request-button">Оформить заявку</button>
      <button class="calculator-button">Калькулятор цен</button>
      <button class="profile-button">
        <img src="../../assets/icons/user.svg" alt="user" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  padding: 0.8rem 3rem;
  display: flex;
  justify-content: space-between;
  background-color: rgba(35, 38, 47, 1);

  .first {
    display: flex;
    gap: 3rem;

    .group {
      display: flex;
      background-color: white;

      .input-area {
        input {
          padding: 5px 1rem;
          height: 100%;
          background-color: transparent;
          color: black;
          border: none;
          outline: none;
        }
      }

      .append-area {
        padding: 5px;

        .append {
          padding: 5px;
          width: 30px;
          height: 30px;
          display: flex;
          place-content: center;
          place-items: center;
          background-color: rgba(35, 38, 47, 1);
        }
      }
    }
  }

  .second {
    display: flex;
    gap: 1rem;

    button {
      padding: 5px 1rem;
      height: 100%;
      background-color: transparent;
      border: thin solid rgba(252, 252, 253, 1);
      border-radius: 0;
    }

    button.request-button {
      background-color: rgba(252, 252, 253, 1);
    }

    button.calculator-button {
      color: rgba(252, 252, 253, 1);
    }

    button.profile-button {
      padding: 5px;
      width: 40px;
      height: 40px;
      background-color: lightgray;
      border-radius: 50%;
    }
  }
}
</style>
