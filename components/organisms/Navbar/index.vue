<template>
  <nav class="navbar">
    <ul>
      <li id="logo">
        <h1>
          <AtomsLogo />
        </h1>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" class="active">Início</a>
      </li>
      <li>
        <a href="/lista-de-desejos">Lista de desejos</a>
      </li>
      <li>
        <a href="/compras">Minhas compras</a>
      </li>
    </ul>

    <ul>
      <li>
        <MoleculesButton outline text="Criar Conta" />
      </li>
      <li>
        <MoleculesButton text="Entrar" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 1.25rem;
    }

    &:nth-child(2) {
      flex: 1;
      justify-content: center;

      @media (max-width: 900px) {
        width: 100%;
        li {
          width: 100%;
          a {
            text-align: center;
          }
        }
      }

      li {
        a {
          display: block;
          padding: 1rem 1.25rem;
          color: $gray3;

          transition: color 0.25s;

          &:hover {
            color: $textColor;
          }

          &.active {
            position: relative;
            color: $textColor;
            font-weight: 600;

            @media (min-width: 901px) {
              &::before {
                content: "";

                position: absolute;
                width: 0.5rem;
                height: 0.5rem;
                background: $primary;
                box-shadow: 0 0 20px rgba($primary, 0.5);
                border-radius: 100rem;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
}
</style>
