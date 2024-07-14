<script setup lang="ts">
import { ref } from "vue";

import { useUser } from "@/stores/user";

import useTextField from "@/composables/textField";

import CommonButton from "@/components/CommonButton.vue";
import LoadLine from "@/components/LoadLine.vue";
import TextField from "@/components/TextField.vue";

import IconBase from "@/components/IconBase.vue";
import IconSeekOff from "@/components/icons/IconSeekOff.vue";
import IconSeekOn from "@/components/icons/IconSeekOn.vue";

import DereShortLogo from "@/assets/DereShortLogo.svg";
import { useRouter } from "vue-router";

const { value: email, update: updateEmail, clear: clearEmail } = useTextField();

const {
  value: password,
  update: updatePassword,
  clear: clearPassword,
} = useTextField();
const peek = ref(false);
function togglePeek() {
  peek.value = !peek.value;
}

const user = useUser();
const router = useRouter();
async function onSubmit(e: Event) {
  e.preventDefault();
  await user.login(email, password);
  router.push("/");
}
</script>

<template>
  <div class="Login">
    <form class="Login__Box" @submit="onSubmit">
      <header class="Login__Indicator">
        <h1 class="Login__Logo">
          <img :src="DereShortLogo" alt="데레" />
        </h1>
        <h2 class="Login__Title">관리자 로그인</h2>
        <LoadLine class="Login__Loading" v-if="user.isLoading" />
      </header>

      <div class="Login__Info">
        <strong class="Login__Warn">통신보안!</strong>
        <ul class="Login__Noti">
          <li class="Login__NotiItem">반드시 시크릿 모드를 사용해 주세요!</li>
          <li class="Login__NotiItem">사용 후 로그아웃을 해주세요!</li>
          <li class="Login__NotiItem">
            사외에서 사용이 필요할 경우 반드시 보고해 주세요!
          </li>
        </ul>
      </div>

      <TextField v-model="email" @clear="clearEmail" class="Login__Field">
        <template #label>이메일</template>
        <template #input>
          <input
            type="text"
            class="Input"
            @input="updateEmail"
            :value="email"
            required
            autocomplete="email"
          />
        </template>
      </TextField>
      <TextField v-model="password" @clear="clearPassword" class="Login__Field">
        <template #label>비밀번호</template>
        <template #input>
          <input
            :type="peek ? 'text' : 'password'"
            class="Input"
            @input="updatePassword"
            :value="password"
            required
            autocomplete="current-password"
          />
        </template>
        <template #buttons>
          <button class="SeekButton" type="button" @click="togglePeek">
            <IconBase>
              <template #title
                >비밀번호 {{ peek ? "가리기" : "슬쩍 보기" }}</template
              >
              <template #icon>
                <component :is="peek ? IconSeekOn : IconSeekOff" />
              </template>
            </IconBase>
          </button>
        </template>
      </TextField>

      <div class="Login__ButtonBox">
        <CommonButton class="Login__Button">
          <template #text>신입사원 계정요청</template>
        </CommonButton>
        <CommonButton class="Login__Button" filled type="submit">
          <template #text>로그인</template>
        </CommonButton>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.Login {
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  --ViewBG: hsl(var(--text-950));
  background-color: var(--ViewBG);
  overflow: hidden;

  &__Box {
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem 1.8rem;
    --Box__Radius: 2.4rem;
    // border-radius: var(--Box__Radius);
    width: 100%;
    height: 100%;
    --Field__LabelTransparent: hsl(var(--bg-000));
    background: var(--Field__LabelTransparent);
    overflow: hidden;
    box-shadow: 0 0.4rem 3.2rem hsl(var(--text-500) / 0.05);
    transition: translate 600ms cubic-bezier(0.83, 0, 0.17, 1),
      opacity 600ms cubic-bezier(0.83, 0, 0.17, 1);
    @starting-style {
      translate: 0 100dvh;
      opacity: 0;
    }
  }

  &__Indicator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9.6rem;
    position: relative;
  }
  &__Logo {
    width: 6rem;
    height: 6rem;
  }
  &__Title {
    font-size: 2.4rem;
    font-weight: 500;
    margin-right: 0.6rem;
  }
  &__Loading {
    position: absolute;
    inset: auto 0 0;
  }

  &__Info {
    margin-top: auto;
    margin-bottom: 3.6rem;
  }
  &__Warn {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
  }
  &__Noti {
    padding: 1.2rem;
    border-radius: 0.4rem;
    background-color: hsl(var(--bg-50));
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  &__NotiItem {
    font-size: 1.2rem;
    line-height: 1.5;
    display: flex;
    &::before {
      content: "🔒";
      margin-right: 0.4rem;
    }
  }

  &__Field {
    .Input {
      flex-grow: 1;
    }

    .SeekButton {
      width: 2.4rem;
      height: 2.4rem;
      &:focus {
        color: hsl(var(--theme-300));
      }
    }

    & + & {
      margin-top: 1.2rem;
    }
  }

  &__ButtonBox {
    display: flex;
    justify-content: space-between;
    margin-top: 1.8rem;
  }
  &__Button {
    align-self: flex-end;
    &:first-child {
      margin-left: -2.4rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .Login {
    &__Box {
      width: 40rem;
      height: 60rem;
      border-radius: var(--Box__Radius);
      padding: 0 2.4rem 2.4rem;
    }

    &__NotiItem {
      font-size: 1.4rem;
    }
  }
}
</style>
