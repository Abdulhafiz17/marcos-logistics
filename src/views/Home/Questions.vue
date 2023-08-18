<script>
export default {
  name: "Questions",
  data() {
    return {
      active: 0,
      open: 1,
    };
  },
};
</script>

<template>
  <div class="questions">
    <div class="inner">
      <h3>Часто задаваемые вопросы</h3>

      <div class="tab">
        <button :class="{ active: active == 0 }" @click="active = 0">
          Отправка
        </button>
        <button :class="{ active: active == 1 }" @click="active = 1">
          Оплата
        </button>
        <button :class="{ active: active == 2 }" @click="active = 2">
          Доставка
        </button>
      </div>

      <div class="tab-content">
        <ul>
          <li v-for="item in 4" :key="item" :class="{ open: item == open }">
            <div
              class="content-header"
              @click="open = open !== item ? item : -1"
            >
              <div class="ordinal-number">
                {{ item }}
              </div>
              <div class="title">Как подготовить посылку</div>
              <div class="icon">&#8735;</div>
            </div>
            <Transition name="collapse">
              <div class="content-body" v-if="item == open">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                  possimus sed autem ut unde necessitatibus inventore maxime,
                  nostrum quidem officiis repellendus consequatur quaerat
                  consectetur tempore expedita numquam ducimus maiores modi.
                </span>
              </div>
            </Transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.questions {
  padding: 2rem 3rem;

  .inner {
    padding: 3rem;

    h3 {
      margin-bottom: 3rem;
      color: var(--dark, #23262f);
      font-family: Inter;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px; /* 118.75% */
    }

    .tab {
      margin-bottom: 4rem;
      display: flex;
      justify-content: center;
      gap: 1rem;

      button {
        all: unset;
        padding: 0.5rem 1rem;
        border: thin solid transparent;
        cursor: pointer;
        transition: 0.25s;

        &:active {
          border-color: #353945;
        }

        &.active {
          background: var(--neutrals-3, #353945);
          color: white;
        }
      }
    }

    .tab-content {
      margin: 0 auto;
      width: 540px;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          &,
          & * {
            transition: 0.25s;
          }

          &.open {
            .content-header {
              .ordinal-number {
                color: rgba(234, 65, 43, 1);
              }

              .icon {
                translate: 3px 0;
                rotate: 135deg;
              }
            }
          }

          .content-header {
            padding: 1.5rem 0.5rem;
            display: flex;
            gap: 1.5rem;
            border-bottom: thin solid var(--sky-lighter, #f2f4f5);
            cursor: pointer;

            .ordinal-number {
              color: var(--secondary, #72777a);
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 24px; /* 150% */
            }

            .title {
              flex: auto;
              color: var(--dark, #23262f);

              /* Regular/Normal/Medium */
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: 24px; /* 150% */
            }

            .icon {
              rotate: -45deg;
              color: var(--secondary, #72777a);
              font-style: normal;
              font-weight: 700;
              line-height: 24px; /* 150% */
            }
          }

          .content-body {
            padding: 1rem 0 0 3rem;
          }
        }
      }
    }
  }
}

.collapse-enter-from,
.collapse-leave-to {
  scale: 0;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: scale 0.5s;
}
</style>
