<template>
    <div class="page-contents">
        <div class="container">
            <layoutPageTitle 
            title="정의" 
            description="kt그룹 국가정보통신서비스의 <span class='kt-red-text'>정의</span>입니다." 
            highlight="정의" 
            />
            <div class="row">
                <div class="col s12">
                    <h3>정의</h3>
                    <ul class="list-style1">
                        <li>GNS는 국가기관, 지자체가 민간 통신망과 분리된 국가기간 전용의 통신망을 이용하도록 행자부가 통신사와
                            이용요금, 품질, 보안 등 협약을 맺어 운용하는 이용 제도이며, GNS4.0은 수요증가가 예상되는 IoT 서비스 요금제 신규마련 및 SLA(service level agreement)
                            보상기준에 대한 명확한 정의를 통해 이용기관 및 통신사 편의성 제고, 행정기관으로 한정했던 서비스 이용대상을
                            공공기관까지 확대하였으며, 주요 통신국사 경로 이원화 및 보안성·안전성 강화 관련 통신 인프라에 대한 점검을 강화 하였습니다.</li>
                    </ul>
                </div>
            </div>

            <div class="row">
                <div class="col s12 center-align">
                    <img src="@/assets/images/img_definition_new.png" alt="tset" class="responsive-img" />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

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
    margin-bottom: .4rem;
}

div.page-contents ul.list-style1 li:before {
    content: '';
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
    content: '';
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