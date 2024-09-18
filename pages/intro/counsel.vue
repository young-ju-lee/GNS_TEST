<template>
  <div class="page-contents">
    <div class="container">
      <layoutPageTitle
        title="특징"
        description="kt그룹 국가정보통신서비스의 <span class='kt-red-text'>특징</span>을 소개해드리겠습니다."
        highlight="특징"
      />
      <div class="row">
        <div class="col s12">
          <h3>국가정보통신서비스 추진체계</h3>
          <div class="center-align">
            <img
              src="@/assets/images/img_counsel_new.png"
              alt="tset"
              class="responsive-img"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h3>국가정보통신서비스 주요 역할</h3>
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <th>구분</th>
                <th>역할</th>
                <!-- <th>상담문의</th> -->
              </tr>
              <tr>
                <td style="text-align: center">
                  (주관기관)<br /><span class="kt-red-text">행정안전부</span>
                </td>
                <td>
                  <ul class="list-style1">
                    <li>국가정보통신서비스 사업 총괄기획 조정</li>
                    <li>국가정보통신서비스 이용제도 및 이용활성화 정책수립</li>
                    <li>국가정보통신인프라 이용기관 협의회 구성 운영</li>
                    <li>기타 국가정보통신서비스 정책 관련 사항</li>
                  </ul>
                </td>
                <!-- <td>정보기반보호정책과<br>02-2100-3996</td> -->
              </tr>
              <tr>
                <td style="text-align: center">
                  국가정보통신서비스<br />이용기관 협의회
                </td>
                <td>
                  <ul class="list-style1">
                    <li>통신망 이용제도 관련 협의</li>
                    <li>통신망 발전방안에 대한 협의 등</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style="text-align: center">
                  (전문기관)<br />한국정보화진흥원
                </td>
                <td>
                  <ul class="list-style1">
                    <li>
                      국가정보통신서비스 인프라 구성 및 운영 요건 마련∙관리
                    </li>
                    <li>
                      국가정보통신서비스 이용요금 검토 및 서비스 품질기준
                      마련∙관리
                    </li>
                    <li>
                      국가정보통신서비스 이용기관 기술지원, 기술교육 등 지원
                    </li>
                    <li>국가정보통신서비스 이용기관협의회 운영 지원</li>
                    <li>국가정보통신서비스 발전계획 수립 등 고도화 지원</li>
                    <li>기타 국가정보통신서비스 사업 관련 사항</li>
                  </ul>
                </td>
                <!-- <td>네트워크서비스팀<br>053-230-1772<br>053-230-1775</td> -->
              </tr>
              <tr>
                <td style="text-align: center">
                  (사업자)<br />KTsat, KT<br />
                  LGU+, CJ헬로비전 <br />
                  SKT, SKB <br />드림라인<br />
                  서경방송
                </td>
                <td>
                  <ul class="list-style1">
                    <li>국가정보통신서비스 인프라의 구성 및 운영</li>
                    <li>서비스 제공 및 이용활성화 활동</li>
                    <li>서비스 품질(SLA) 관리 활동</li>
                    <li>
                      기타 국가정보통신서비스 인프라 구성 및 서비스 제공 관련
                      사항
                    </li>
                  </ul>
                </td>
                <!-- <td><font class="kt-red-text" style="font-weight: bolder; font-size: 20px;">kt : 1588-0114</font><br>LG유플러스 : 1544-0001<br>SK컨소시엄 : 1600-0108</td> -->
              </tr>
            </tbody>
          </table>
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

table {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
}
table.body-scroll {
  overflow-y: scroll;
}
table thead tr:first-child > th {
  border-top: 2px solid #909090;
}
table thead tr:first-child > th:first-child {
  border-top: 2px solid #e51c23;
}
table thead tr > th {
  border-right: none;
}
table thead tr:last-child > th,
table thead tr:only-child > th {
  border-bottom: 1px solid #9e9e9e;
}
table th {
  background: #eaeaea;
  color: #616161;
  font-weight: bold;
}
table tr td,
table tr th {
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  display: table-cell;
  vertical-align: middle;
  border-top: 1px solid #d0d0d0;
}
table tr td:not(:last-child),
table tr th:not(:last-child) {
  border-right: 1px dotted #d0d0d0;
}
table tr td.border-end-bottom,
table tr th.border-end-bottom {
  border-bottom: 1px solid #9e9e9e;
}
table tr td.border-end-right,
table tr th.border-end-right {
  border-right: 1px dotted #d0d0d0;
}
table tr:last-child td,
table tr:last-child th {
  border-bottom: 1px solid #9e9e9e;
}
table.centered thead tr th,
table.centered tbody tr td {
  text-align: center;
}
table.highlight > tbody > tr {
  transition: background-color 0.25s ease;
}
table.highlight > tbody > tr:hover {
  background-color: #fdeaeb;
}
table.striped > tbody > tr:nth-child(odd) {
  background-color: #fafafa;
}
table.striped > tbody > tr > td {
  border-radius: 0;
}
table.vertical-table {
  display: block;
  position: relative;
}
table.vertical-table td:empty:before {
  content: "\00a0";
}
table.vertical-table th,
table.vertical-table td {
  vertical-align: top;
  box-sizing: border-box;
  border-right: 1px dotted #d0d0d0;
}
table.vertical-table thead {
  display: block;
  float: left;
}
table.vertical-table thead tr {
  display: block;
}
table.vertical-table thead tr th {
  border: 1px solid #d0d0d0;
  border-bottom: none;
}
table.vertical-table thead tr th:first-child {
  border-top: 2px solid #e51c23;
}
table.vertical-table thead tr th:last-child {
  border-bottom: 1px solid #909090;
}
table.vertical-table thead tr th::before {
  content: "\00a0";
}
table.vertical-table tbody {
  display: block;
  width: auto;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  border-right: 1px solid #d0d0d0;
  font-size: 0;
}
table.vertical-table tbody tr {
  display: inline-block;
  vertical-align: top;
  border-bottom: 1px solid #909090 !important;
}
table.vertical-table tbody tr td,
table.vertical-table tbody tr th {
  border-top: 1px solid #d0d0d0;
}
table.vertical-table tbody tr td:first-child,
table.vertical-table tbody tr th:first-child {
  border-top: 2px solid #909090;
}
table.vertical-table tbody tr:last-child td,
table.vertical-table tbody tr:last-child th {
  border-bottom: none;
}
table.vertical-table th {
  display: block;
}
table.vertical-table td {
  display: block;
  min-height: 1.25em;
}
table.vertical-table tr {
  padding: 0;
}
table.vertical-table tr td.border-end-bottom,
table.vertical-table tr td.border-end-bottom {
  border-bottom: none;
}
</style>
