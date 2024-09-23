<template>
<div class="service-info">
          <ul>
            <li class="list service-1 hide">
              <div>
                <div class="image">
	        		<div class="center-align">
	                  <img src="@/assets/images/service_01.png" alt="전용회선서비스" class="responsive-img">
	                </div>
                </div>
                <div class="text">
                  <h2>A그룹[전용회선서비스]</h2>                  
                  <p>전용회선서비스 그룹은 <b>기본회선(망분리회선, 단기이용 포함), 백본회선</b>으로 구성</p>
                  <p><b>(망분리회선)</b> 상.하위 주소가 동일한 기본회선서비스에 대하여 인터넷.<br>업무망 분리 용도 등으로 여러 회선을 묶어서 제공하는 서비스</p>
                  <p><b>(단기이용)</b> 선거.행사.대회 등 일정 기간 기본회선을 사용일수 기반으로 <br>제공하는 서비스</p>
                   
                  <a href="javascript:menuMove('/service/leasedline_infra.do');" class="btn">전용회선 인프라</a>
                </div>
              </div>
            </li>
            <li class="list service-2 hide">
              <div>
                <div class="image">
		        	<div class="center-align">
	                  <img src="@/assets/images/service_02.png" alt="IP 서비스" class="responsive-img">
                    </div>
                </div>
                <div class="text">
                  <h2>B그룹[인터넷서비스]</h2>                  
                  <p>인터넷 서비스 그룹은 <b>인터넷 접속을 위한 서비스</b>로 구성</p>
                  <p>민간기관 트래픽과 물리적·논리적으로 분리된 전용 인터넷망을 통한 안정적인 인터넷 서비스</p>
                  <p><b>(단기이용)</b> 선거.행사.대회 등 일정 기간 인터넷을 사용일수 기반으로  제공하는 서비스</p>
                <a href="javascript:menuMove('/service/ipservice_infra.do');" class="btn">인터넷 인프라</a>
                </div>
              </div>
            </li>
            <li class="list service-3 hide">
              <div>
                <div class="image">
			        <div class="center-align">
		              <img src="@/assets/images/service_03.png" alt="인터넷 전화 서비스" class="responsive-img">
                    </div>
                </div>
                <div class="text">
                  <h2>C그룹[인터넷전화서비스]</h2>
                  <h4>설치와 사용이 편리한 인터넷 전화 서비스</h4>
                  <p>일반전화 대비 저렴한 요금으로 다양한 부가 기능 서비스까지 이용할 수 있는 서비스 환경을 제공합니다. 인터넷전화 서비스 그룹은 인터넷전화 및 모바일행정전화 서비스로 구성됩니다.</p>
                  <a href="javascript:menuMove('/service/ipservice_soip_infra.do');" class="btn">인터넷 전화 인프라</a>
                </div>
              </div>
            </li>
            <li class="list service-4 hide">
              <div>
                <div class="image">
		        	<div class="center-align">
	                  <img src="@/assets/images/service_05.png" alt="무선 서비스" class="responsive-img">
                    </div>
                </div>
                <div class="text">
                  <h2>D그룹[무선 서비스]</h2>
                  <h4>요금제 부담 없이 이용하는 업무용 무선 서비스</h4>
                  <p>무선서비스 그룹은 <b>무선데이터</b>와 <b>Iot서비스</b>로 구성됩니다.</p>
                  <a href="javascript:menuMove('/service/wireless_infra.do');" class="btn">무선 인프라</a>
                </div>
              </div>
            </li>
             <li class="list service-5">
              <div>
                <div class="image">
		        	<div class="center-align">
	                  <img src="@/assets/images/service_06.png" alt="CCTV 서비스" class="responsive-img">
                    </div>
                </div>
                <div class="text">
                  <h2>E그룹[CCTV 서비스]</h2>
                  <h4>CCTV서비스 그룹은 CCTV전송회선 서비스로 구성</h4> 
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h3>서비스 목록</h3>
        <div class="service-list">
          <ul>
            <li class="list service-1 hide">
              <a href="javascript:menuMove('/service/leased_basic.do');">
                <div class="image" style="vertical-align:middle;">
                  <img src="@/assets/images/addService_img8.png" alt="기본회선 서비스" class="responsive-img">
                </div>
                <div class="text">
                  <h4>기본회선 서비스</h4>
                  <p>기관간 연결수단을 제공하는 전용회선 서비스</p>
                  <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
                  <p>망분리회선, 단기이용회선 포함</p>
                </div>
              </a>
            </li>
            <li class="list service-1 hide">
              <a href="javascript:menuMove('/service/leased_backbone.do');">
                <div class="image">
                  <img src="@/assets/images/addService_img8.png" alt="백본회선 서비스" class="responsive-img">
                </div>
                <div class="text">
                  <h4>백본회선 서비스</h4>
                  <p>백본구간의 기관간 연결수단을 제공하는 전용</p>
                  	<p>회선서비스로 특정 기관에 적용</p>
                  	<p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
                </div>
              </a>
            </li>
            
           
            <li class="list service-2 hide">
              <a href="javascript:menuMove('/service/ipservice_internet.do');">
                <div class="image">
                  <img src="@/assets/images/addService_img8.png" alt="인터넷 서비스" class="responsive-img">
                </div>
                <div class="text">
                  <h4>인터넷 서비스</h4>
                  <p>이용기관에 인터넷 접속 수단을 제공하는 서비스</p>
                  <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
                  <p>단기이용 서비스 포함</p>
                </div>
              </a>
            </li>
           
            <li class="list service-3 hide">
              <a href="javascript:menuMove('/service/ipservice_soip.do');">
                <div class="image">
                  <img src="@/assets/images/addService_img8.png" alt="인터넷 전화 서비스" class="responsive-img">
                </div>                
                <div class="text">
                  <h4>인터넷전화 서비스</h4>
                  <p>기본 서비스와 부가서비스로 구성</p>
                
                </div>
              </a>
            </li>
            <li class="list service-3 hide">
              <a href="javascript:menuMove('/service/wireless_m_internetphone.do');">
                <div class="image">
                  <img src="@/assets/images/addService_img8.png" alt="모바일행정전화 서비스" class="responsive-img">
                </div>                
                <div class="text">
                  <h4>모바일행정전화 서비스</h4>
                  <p>LTE기반 mVoIP서비스</p>
                 
                </div>
              </a>
            </li>
            <li class="list service-4 hide">
              <a href="javascript:menuMove('/service/wireless_data.do');">
                <div class="image">
                  <img src="@/assets/images/addService_img8.png" alt="무선 데이터 서비스" class="responsive-img">
                </div>
                <div class="text">
                  <h4>무선 데이터 서비스</h4>
                  <p>스마트 단말등으로 모바일 행정서비스와 현장 업무서비스 등을 이용하기 위한 LTE 기반 데이터 서비스</p>
                </div>
              </a>
            </li>
             <li class="list service-4 hide">
              <a href="javascript:menuMove('/service/iot_service.do');">
                <div class="image">
                  <img src="@/assets/images/addService_img8.png" alt="Iot 서비스" class="responsive-img">
                </div>
                <div class="text">
                  <h4>Iot 서비스</h4>
                  <p>정보통신기술 기반으로 모든 사물을 연결해 플랫폼·네트워크간 정보를 교류하고 지원하는 지능형 인프라 및 서비스</p>
                </div>
              </a>
            </li>
           
            <li class="list service-5">
              <a href="javascript:menuMove('/service/leased_cctv.do');">
                <div class="image">
                  <img src="@/assets/images/addService_img8.png" alt="cctv 전송회선 서비스" class="responsive-img">
                </div>
                <div class="text">
                  <h4>CCTV 전송회선 서비스</h4>
                  <p>이용기관의 CCTV단말로부터 관제센터까지 영상을 전달하기 위해 제공하는 시내전용회선서비스</p>
                  <p>접속방식 : Ethernet 등</p>
                </div>
              </a>
            </li>
          
            
          </ul>
        </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>