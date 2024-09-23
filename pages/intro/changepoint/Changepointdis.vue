<template>
<h3>할인율 수준</h3>
<ul class="list-style1">
    <li>장기계약 할인(CCTV 제외)</li>
</ul>

<table class="centered">
    <thead>
    <tr>
        <th colspan="3">1단계</th>
        <th colspan="2">NIS</th>
        <th colspan="3">2단계</th>
        <th colspan="4">3단계</th>
    </tr>
    <tr>
        <th>계약기간</th>
        <th>할인율<br>(A/B그룹)</th>
        <th>할인율<br>(C그룹)</th>
        <th>계약기간</th>
        <th>할인율</th>
        <th>계약기간</th>
        <th>할인율<br>(A/B그룹)</th>
        <th>할인율<br>(C그룹)</th>
        <th>계약기간</th>
        <th>할인율<br>(A/B그룹)</th>
        <th>할인율<br>(C그룹)</th>
        <th>할인율<br>(D그룹)</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>2년</td>
        <td>3%</td>
        <td>1%</td>
        <td>2년</td>
        <td>5%</td>
        <td>2년 이상<br>3년 미만</td>
        <td>5%</td>
        <td>2%</td>
        <td>2년 이상<br>3년 미만</td>
        <td>7%</td>
        <td>2%</td>
        <td>2%</td>
    </tr>
    <tr>
        <td>3년</td>
        <td>5%</td>
        <td>2%</td>
        <td rowspan="2" class="border-end-bottom">3년</td>
        <td rowspan="2" class="border-end-bottom">10%</td>
        <td>3년 이상<br>5년 미만</td>
        <td>10%</td>
        <td>3%</td>
        <td>3년 이상<br>5년 미만</td>
        <td>12%</td>
        <td>3%</td>
        <td>3%</td>
    </tr>
    <tr>
        <td>5년</td>
        <td>10%</td>
        <td>-</td>
        <td>5년 이상</td>
        <td>12%</td>
        <td>5%</td>
        <td>5년 이상</td>
        <td>14%</td>
        <td>5%</td>
        <td>5%</td>
    </tr>
    </tbody>
    
</table>

<ul class="list-style1">
    <li>다회선 할인
    <ul>
        <li>시내.시외 구간 분리 적용된 다회선이용 할인율은 시내 ∙시외 구분 없이 회선수 중심으로 단순화하여 할인제도 개선</li>
    </ul>
    </li>
</ul>


<table class="centered">
    <thead>
    <tr>
        <th colspan="2">1단계</th>
        <th colspan="2">2단계</th>
        <th colspan="2">3단계</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>3회선</td>
        <td>2%</td>
        <td rowspan="2">3회선 이상<br>10회선 미만</td>
        <td rowspan="2">3%</td>
        <td rowspan="2">3~9회선</td>
        <td rowspan="2">4%</td>
    </tr>
    <tr>
        <td>4~5회선</td>
        <td class="border-end-right">3%</td>
    </tr>
    <tr>
        <td>6회선 이상</td>
        <td>4%</td>
        <td rowspan="2">10회선 이상<br>50회선 미만</td>
        <td rowspan="2">5%</td>
        <td rowspan="2">10~49회선</td>
        <td rowspan="2">6%</td>
    </tr>
    <tr>
        <td>5~9회선</td>
        <td class="border-end-right">3%</td>
    </tr>
    <tr>
        <td rowspan="5" class="border-end-bottom">10회선 이상</td>
        <td rowspan="5" class="border-end-bottom">5%</td>
        <td rowspan="5" class="border-end-bottom">50회선 이상</td>
        <td rowspan="5" class="border-end-bottom">6%</td>
        <td>50~99회선</td>
        <td>7%</td>
    </tr>
    <tr>
        <td>100~399회선</td>
        <td>8%(10%)</td>
    </tr>
    <tr>
        <td>400~699회선</td>
        <td>8%(12%)</td>
    </tr>
    <tr>
        <td>700~999회선</td>
        <td>8%(13%)</td>
    </tr>
    <tr>
        <td>1,000회선 이상</td>
        <td>8%(14%)</td>
    </tr>
    </tbody>
    
</table>

<ul class="list-style1">
    <li>요금납입책임자 기준(청구 분리시 청구 계약 단위), 월 납부금액에 따른 이용요금 할인</li>
    <li>다량이용 할인과 다회선 이용 할인은 중복적용 없이 선택 적용</li>
    <li>100회선 이상 중 ( ) 내 할인율은 CCTV 전송 서비스에 한함</li>
    <li>※ 상세내역은 지침참고</li>
</ul>

<div class="center-align">
    <img src="@/assets/images/img_changepoint1_new.png" alt="tset" class="responsive-img">
</div>
</template>

<script setup lang="ts">
</script>

<style>

</style>