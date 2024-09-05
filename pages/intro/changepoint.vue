<template>
  <div class="page-contents">
    <div class="container">
      <layoutPageTitle
        title="제도변경사항"
        description="kt그룹 4단계 국가정보통신서비스의 1,2,3단계 대비 달라진 <span class='kt-red-text'>제도변경사항</span>을 알려드리겠습니다."
        highlight="제도변경사항"
      />
     
      <div class="page-tab">
	      <div class="current-label">
	        <a href="javascript:">제도변경사항</a>
	      </div>
	      <ul>
	        <li class="active">
	          <a href="javascript:menuMove('/intro/changepoint.do');">서비스</a>
	        </li> 
	        <li>
	          <a href="javascript:menuMove('/intro/changepointspeed.do');">속도체계</a>
	        </li> 
	        <li>
	          <a href="javascript:menuMove('/intro/changepointsla.do');">SLA</a>
	        </li>   
	        <li>
	          <a href="javascript:menuMove('/intro/changepointdis.do');">할인율</a>
	        </li>   
	      </ul>
	    </div>
      <div class="row">
	      <div class="col s12">
	        <h3>국가정보통신 서비스 분류</h3>
	        <ul class="list-style1">
	          <li>기존 4단계 그룹 체계에서 최근 국가기관의 서비스 이용수요에 따라 CCTV서비스의 신규 그룹 편성 
	          을 하여 5단계의 효율적인 서비스 제공체계 개선</li>
	          <li>(전용회선서비스 그룹(A그룹), 인터넷서비스(B그룹), 인터넷전화서비스(C그룹), 무선서비스(D그룹), CCTV서비스(E그룹))
	           </li>
	        </ul>
	        
	        <div class="center-align">
	        	<img src="@/assets/images/img_changepoint1_new.png" alt="tset" class="responsive-img">
	        </div>
	      </div>
	    </div>

    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-tab {
  position: relative;
  margin-bottom: 2rem;
}
.page-tab.active ul {
  display: block;
}
.page-tab.active div.current-label > a:after {
  content: "expand_less";
}
.page-tab div.current-label > a {
  display: block;
  font-size: 1.2rem;
  padding: 0.8rem 0.2rem;
  color: #e51c23;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
  position: relative;
}
.page-tab div.current-label > a:after {
  position: absolute;
  top: calc(50% - 12px);
  right: 1rem;
  font-size: 24px;
  content: "expand_more";
  font-family: "Material Icons";
  color: inherit;
}
.page-tab ul {
  display: none;
  position: absolute;
  width: 100%;
  top: calc(100% + 2rem);
  left: 0;
  margin: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 1px 7px 0 rgba(0, 0, 0, 0.22),
    0 3px 3px -2px rgba(0, 0, 0, 0.3);
  z-index: 890;
}
.page-tab ul li a {
  display: block;
  font-size: 1.2rem;
  padding: 1rem;
  color: #757575;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
}
.page-tab ul li a:hover {
  color: #e51c23;
}
.page-tab ul li.active > a {
  color: #e51c23;
}
.page-tab ul li:last-child > a {
  border-bottom: none;
}

.page-tab div.current-label {
  display: none;
}
.page-tab ul {
  display: block;
  position: static;
  overflow: hidden;
  border-radius: 0;
  background: url("@/assets/images/tab_line.gif") 0 100% repeat-x;
  box-shadow: none;
}
.page-tab ul li {
  float: left;
  display: inline-block;
}
.page-tab ul li a {
  color: #9e9e9e;
  margin-right: 0.2rem;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  border: 1px solid transparent;
  border-bottom: none;
}
.page-tab ul li a:hover {
  color: #e51c23;
  background: #eaeaea;
}
.page-tab ul li.active > a {
  background: #fff;
  color: #e51c23;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #e51c23;
  box-shadow: inset 0 1px 0 #e51c23;
}
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
