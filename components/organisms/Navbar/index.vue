<template>
  <div class="navbar">
    <AtomsBaseContainer>
      <nav class="navbar__container">
        <ul>
          <li id="logo">
            <NuxtLink href="/">
              <h1>
                <AtomsLogo :size="96" />
              </h1>
            </NuxtLink>
          </li>
        </ul>

        <ul>
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink
              :href="item.path"
              :class="{ active: checkActivePage(item.path) }"
            >
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>

        <ul v-if="!isUserOn">
          <li>
            <!-- <NuxtLink href="/entrar"> -->
            <MoleculesButton text="Entrar" @click="handleLogin()" />
            <!-- </NuxtLink> -->
          </li>
        </ul>

        <ul v-else>
          <li>
            <div class="user">
              <AtomsAvatar
                :src="currentUser.avatar"
                :name="currentUser.fullName"
                :size="48"
              />
              <p>{{ currentUser.fullName }}</p>
            </div>
          </li>
        </ul>
      </nav>
    </AtomsBaseContainer>
  </div>
</template>

<script lang="ts">
import { useAuth } from "@/store/auth";

type NavItemType = {
  text: string;
  path: string;
};

const navItems: NavItemType[] = [
  {
    text: "Início",
    path: "/",
  },
  {
    text: "Lista de desejos",
    path: "/lista-de-desejos",
  },
  {
    text: "Minhas compras",
    path: "/compras",
  },
];

export default {
  setup() {
    const auth = useAuth();
    const currentUser = computed(() => auth.user);

    return {
      isUserOn: computed(() => !!Object.values(auth.getUser).length),
      currentUser,
      auth,
    };
  },
  data() {
    return {
      navItems,
    };
  },
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
  methods: {
    checkActivePage(path: string): boolean {
      return !!(path === "/"
        ? this.currentPage === path
        : this.currentPage.includes(path));
    },
    handleLogin(): void {
      this.auth.authWithCredentials("email", "password");
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 2rem 0;

  background: $gray5;

  &__container {
    display: grid;
    grid-template-columns: 300px 1fr 300px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    ul {
      list-style: none;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      .user {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        p {
          font-weight: 500;

          @media (max-width: 500px) {
            display: none;
          }
        }
      }

      &:nth-child(1) {
        justify-content: flex-start;
      }

      &:nth-child(3) {
        justify-content: flex-end;
      }

      &:nth-child(2) {
        flex: 1;
        justify-content: center;

        @media (max-width: 900px) {
          display: none;
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
}
</style>
