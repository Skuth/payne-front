<template>
  <section class="login__template">
    <AtomsBaseContainer class="login__box" :max-width="550">
      <div class="login__box__header">
        <NuxtLink href="/">
          <AtomsLogo />
        </NuxtLink>
        <h2>Cadastrar.</h2>
      </div>

      <Form
        @submit="handleFormSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="login__form"
      >
        <div class="input__group">
          <MoleculesInput
            v-model="name"
            label="Nome"
            placeholder="Nome"
            name="name"
            :error="errors.name"
            :disabled="isLoading"
            isRequired
          />

          <MoleculesInput
            v-model="lastName"
            label="Sobrenome"
            placeholder="Sobrenome"
            name="lastName"
            :error="errors.lastName"
            :disabled="isLoading"
            isRequired
          />
        </div>

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

        <MoleculesInput
          v-model="password"
          label="Senha"
          type="password"
          placeholder="Senha"
          name="password"
          :error="errors.password"
          :disabled="isLoading"
          isRequired
        />

        <MoleculesButton
          class="submit"
          text="Criar Conta"
          type="submit"
          :isLoading="isLoading"
        />
      </Form>

      <NuxtLink href="/entrar" class="link--underline">
        Possui uma conta Payne? Entrar
      </NuxtLink>
    </AtomsBaseContainer>
  </section>
</template>

<script lang="ts">
import { Form } from "vee-validate";
import * as Yup from "yup";

import { useAuth } from "@/store/auth";

type FormPropsType = "name" | "lastName" | "email" | "password";

type FormFieldsType = {
  [key in FormPropsType]: any;
};

export default {
  setup() {
    const schema = Yup.object().shape({
      name: Yup.string().label("Nome").required().min(3),
      lastName: Yup.string().label("Sobrenome").required().min(3),
      email: Yup.string().label("Email").required().email(),
      password: Yup.string().label("Senha").required().min(6),
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
      name: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleFormSubmit(): Promise<void> {
      this.isLoading = true;

      const auth = useAuth();
      await auth.createAccountWithCredentials({
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      });

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

    .input__group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      @media (max-width: 500px) {
        grid-template-columns: 1fr;
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
