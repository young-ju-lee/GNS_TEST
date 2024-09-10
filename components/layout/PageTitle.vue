<template>
  <div class="page-title">
    <div>
      <h2>{{ title }}</h2>
      <p v-html="description"></p>
    </div>
    <ul>
      <li>
        <nuxt-link to="/">
          <img
              src="@/assets/images/bullet_rocation_home.gif"
              alt="홈페이지 메인"
          />
        </nuxt-link>
      </li>
      <li v-for="(string, index) in path" :key="index">{{ string }}</li>
      <li>
        <nuxt-link to="/intro/definition">{{ title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  path: Array<string>;
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  background: url("@/assets/images/line_h2_text.gif") 0 100% repeat-x;
  margin-top: 2rem;
  margin-bottom: 3rem;

  div {
    h2 {
      margin: 0;
      margin-right: 1rem;
      display: inline-block;
      color: #e51c23;
      font-size: 2rem;
      font-weight: normal;
      height: 100%;
      background: url("@/assets/images/line_h2_title.gif") 0 100% repeat-x;
      position: absolute;
    }

    p {
      font-size: 13px;
      display: inline-block;
      color: #9e9e9e;
      margin: 0;
      padding: 3.5rem 0 2rem 0;
      span {
        color: #e51c23;
        font-weight: bold;
      }
    }
  }

  ul {
    position: absolute;
    right: 0;
    top: 10px;
    overflow: hidden;
    margin: 0;

    li {
      height: 28px;
      line-height: 28px;
      display: inline-block;
      color: #9e9e9e;
      padding-right: 1.5rem;
      padding-left: 0.5rem;
      background: url("@/assets/images/bullet_rocation_arrow.gif") 100% 0
        no-repeat;
      font-size: 0.9rem;

      &:last-child {
        padding-right: 0;
        background: none;
        color: #424242;

        a {
          color: #039be5;
        }
      }
    }
  }
}

@include mobile {
  .page-title {
    div {
      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.9rem;
      }
    }

    ul {
      top: 0px;
    }
  }
}
</style>
