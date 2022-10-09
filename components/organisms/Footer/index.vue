<template>
  <footer class="footer">
    <AtomsBaseContainer>
      <div class="info">
        <AtomsLogo :size="96" />
      </div>

      <ul class="footer__items">
        <li>
          <p>Payne</p>
          <ul>
            <li>
              <NuxtLink href="/quem-somos">Quem Somos</NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <p>Transparência</p>
          <ul>
            <li>
              <NuxtLink href="/politica-de-privacidade"
                >Política de Privacidade</NuxtLink
              >
            </li>
            <li>
              <NuxtLink href="/termos-de-uso">Termos de Uso</NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <p>Suporte</p>
          <ul>
            <li>
              <NuxtLink href="/perguntas-frequentes"
                >Perguntas Frequentes</NuxtLink
              >
            </li>
            <li>
              <NuxtLink href="/pagamento-e-envio">Pagamento e Envio</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/tutoriais">Tutoriais</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/contato">Contato</NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <p>Mais Buscados</p>
          <ul>
            <li>
              <NuxtLink href="/">Gift card</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Gift card</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Gift card</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Gift card</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Gift card</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <div class="copy">
        <p>
          Copyright &copy; {{ startYear }}-{{ currentYear }} Payne Store LTDA.
        </p>
      </div>
    </AtomsBaseContainer>
  </footer>
</template>

<script>
export default {
  setup() {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();

    return {
      startYear,
      currentYear,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #f9f9f9;

  .info {
    padding: 2rem 0;
    border-bottom: 1px solid $gray1;
  }

  .copy {
    padding: 2rem 0;
    border-top: 1px solid $gray1;

    @media (max-width: 750px) {
      p {
        text-align: center;
      }
    }
  }

  ul {
    list-style: none;
    > li > p {
      font-weight: 600;
      margin-bottom: 1rem;
    }
    li > ul {
      li > a {
        display: block;
        margin: 0.25rem 0;
        padding: 0.25rem;

        transition: color 0.25s;

        &:hover {
          color: $primary;
        }
      }
    }
  }

  &__items {
    padding: 2rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 2rem;

    @media (max-width: 750px) {
      flex-direction: column;
    }
  }
}
</style>
