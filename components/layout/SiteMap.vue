<template>
  <div class="sitemap">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 l2 kt-logo">
          <img src="@/assets/images/icon_kt_new.png" alt="korea telecom" />
        </div>
        <div
          v-for="(menu, index) in navMenu"
          :key="index"
          class="col s12 m6 l2"
          v-show="menu.main.show"
        >
          <nuxt-link :to="menu.main.link" class="main">
            {{menu.main.title}}
          </nuxt-link>
          <nuxt-link
            v-for="(sub, subIndex) in menu.subMenu"
            :key="subIndex"
            :to="sub.link"
            class="sub"
            v-show="sub.show">
            {{ sub.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navMenu = ref([
  {
    main: { title: "제도소개", link: "/intro/definition", show: true },
    subMenu: [
      { title: "정의", link: "/intro/definition", show: true },
      { title: "특징", link: "/intro/feature", show: true },
      { title: "서비스체계", link: "/intro/service", show: true },
      { title: "제도변경사항", link: "/intro/changepoint", show: true },
      { title: "추진체계", link: "/intro/counsel", show: true },
      { title: "추진경과", link: "/intro/propulsion", show: true },
    ],
  },
  {
    main: { title: "kt그룹서비스", link: "/service/ktservice", show: true },
    subMenu: [
      { title: "전용회선서비스", link: "/service/ktservice", params: 1, show: true },
      { title: "인터넷서비스", link: "/service/ktservice", params: 2, show: true },
      { title: "인터넷전화서비스", link: "/service/ktservice", params: 3, show: true },
      { title: "무선서비스", link: "/service/ktservice", params: 4, show: true },
      { title: "CCTV서비스", link: "/service/ktservice", params: 5, show: true },
    ],
  },
  {
    main: { title: "이용안내", link: "/guide/procedure", show: true },
    subMenu: [
      { title: "KT특장점", link: "/guide/kt_merit", show: true },
      { title: "KTsat특장점", link: "/guide/ktsat_merit", show: true },
      { title: "이용절차", link: "/guide/procedure", show: true },
      { title: "요금정보", link: "/guide/charges", show: true },
      { title: "상담안내", link: "/guide/counsel", show: true },
      { title: "운영/장애 안내", link: "/guide/kt_merit", show: true },
    ],
  },
  {
    main: { title: "트래픽조회", link: "/traffic/traffic1", show: false },
    subMenu: [{ title: "트래픽조회서비스", link: "/traffic/traffic1", show: true }],
  },
  {
    main: { title: "고객지원", link: "/support/notice_list", show: true },
    subMenu: [
      { title: "공지사항", link: "/support/notice_list", show: true },
      { title: "자료실", link: "/support/dataroom_list", show: false },
      { title: "FAQ", link: "/support/faq", show: true },
      { title: "홈페이지 이용약관", link: "/member/agreement", show: true },
      { title: "개인정보처리방침", link: "/member/personal", show: true },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.sitemap {
  background: #f5f5f5;
  border-bottom: 1px solid #d1d1d1;
  padding: 2.5rem 0;

  .row > .col {
    color: #424242;

    &.kt-logo {
      display: none;
    }

    a {
      color: inherit;
      padding: 0.4rem 0;
      display: block;
      &.main {
        font-size: 16px;
        font-weight: bold;
        position: relative;
        box-sizing: border-box;
        padding: 12px;
        margin-bottom: 8px;
        border-bottom: 1px solid #d1d1d1;
        &:before {
          display: inline-block;
          content: "";
          position: absolute;
          top: calc(50% - 2px);
          left: 0;
          width: 2px;
          height: 8px;
          background: #e51c23;
        }
      }

      &.sub {
        font-size: 1rem;
        font-weight: normal;
        color: #757575;

        &:before {
          content: "·";
          padding: 0 0.4rem 0 0;
          color: #424242;
        }
      }
    }

    &.kt-logo {
      display: block;
    }
  }
}

@include tablet {
  .sitemap {
  background: #f5f5f5;
  border-bottom: 1px solid #d1d1d1;
  padding: 2.5rem 0; }
  .sitemap .divider {
    margin: .4rem 0; }
  .sitemap .row > .col {
    color: #424242;
    display: block;
        width: 100%;
    }
    .sitemap .row > .col.kt-logo {
      display: none; }
    .sitemap .row > .col a {
      color: inherit;
      padding: .4rem 0;
      display: inline-block; }
      .sitemap .row > .col a.main {
        width: 100%;
        font-size: 1.2rem;
        font-weight: bold;
        position: relative;
        padding: .4rem;
        box-sizing: border-box;
        padding-left: .8rem; }
        .sitemap .row > .col a.main:before {
          display: inline-block;
          content: "";
          position: absolute;
          top: calc(50% - 2px);
          left: 0;
          width: 2px;
          height: 8px;
          background: #e51c23; }
      .sitemap .row > .col a.sub {
        font-size: 1rem;
        font-weight: normal;
        color: #757575; }
        .sitemap .row > .col a.sub:before {
          content: "·";
          padding: 0 .4rem 0 0;
          color: #424242; }
}
</style>
