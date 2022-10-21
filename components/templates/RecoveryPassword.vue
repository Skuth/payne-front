<template>
  <section class="login__template">
    <AtomsBaseContainer class="login__box" :max-width="550">
      <div class="login__box__header">
        <NuxtLink href="/">
          <AtomsLogo />
        </NuxtLink>
        <h2>Recuperar senha.</h2>
      </div>

      <Form
        @submit="handleFormSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="login__form"
      >
        <MoleculesInput
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          :error="errors.email"
          :disabled="isLoading"
          isRequired
        />
        <MoleculesButton
          class="submit"
          text="Recuperar senha"
          type="submit"
          :isLoading="isLoading"
        />
      </Form>

      <NuxtLink href="/entrar" class="link--underline">
        Voltar para Entrar
      </NuxtLink>
    </AtomsBaseContainer>
  </section>
</template>

<script lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";

import { useAuth } from "@/store/auth";

type FormPropsType = "email";

type FormFieldsType = {
  [key in FormPropsType]: any;
};

export default {
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string().label("Email").required().email(),
    } as FormFieldsType);

    return {
      schema,
    };
  },
  components: {
    Form,
  },
  data() {
    return {
      isLoading: false,
      email: "",
    };
  },
  methods: {
    async handleFormSubmit(): Promise<void> {
      this.isLoading = true;

      const auth = useAuth();
      const isSuccess = await auth.recoveryPassword({
        email: this.email,
      });

      alert(isSuccess ? "Senha enviada" : "Falha ao recuperar senha");

      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: red !important;
}

.login {
  &__template {
    min-height: 100vh;

    padding: 2rem 0;

    display: grid;
    place-items: center;

    .link--underline {
      display: block;
      text-align: center;
      width: 100%;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__box {
    background: $gray4;
    padding: 4rem 2rem;
    border-radius: 0.5rem;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.15);

    &__header {
      text-align: center;

      h2 {
        margin-top: 2rem;
        font-size: 1.25rem;
      }
    }
  }

  &__form {
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .submit {
      margin-top: 1rem;
    }

    > a {
      width: 100%;
      > button {
        width: 100%;
      }
    }
  }
}
</style>
