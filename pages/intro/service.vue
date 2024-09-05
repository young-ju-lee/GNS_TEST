<template>
  <div class="page-contents">
    <div class="container">
      <layoutPageTitle
        title="서비스체계"
        description="kt그룹 국가정보통신서비스의 <span class='kt-red-text'>서비스체계</span>를 소개해드리겠습니다."
        highlight="서비스체계"
      />

      <div class="row">
        <div class="col s12">
          <ul class="list-style1">
            <li>
              기존 4단계 그룹체계에서 최근 국가기관의 서비스 이용수요에 따라
              CCTV서비스의 신규그룹 편성 등 효율적인 서비스 제공체계 개선
            </li>
          </ul>

          <div class="center-align">
            <img
              src="@/assets/images/img_service_new.png"
              alt="tset"
              class="responsive-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div.page-contents h3 {
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  position: relative;
  line-height: 2.6rem;
  color: #424242;
}

div.page-contents ul.list-style1 li {
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.4rem;
}

div.page-contents ul.list-style1 li:before {
  content: "";
  position: absolute;
  top: 6px;
  left: 0;
  width: 4px;
  height: 8px;
  color: #e51c23;
  background: url("@/assets/images/icons/icon_chevron_right.png") no-repeat;
  background-size: 4px;
}

div.page-contents h3:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2rem;
  height: 2px;
  background: #e51c23;
}

div.page-contents {
  margin-bottom: 5rem;
  line-height: 1.5;
  color: #757575;
}
</style>
