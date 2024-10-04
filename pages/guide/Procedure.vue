<template>
    <main>
        <layoutPageTitle />

        <ol class="process">
            <li>
                <div>
                    <i>account_box</i>
                    <p>1. 이용대상 확인</p>
                </div>
            </li>
            <li>
                <div>
                    <i>shopping_cart</i>
                    <p>2. 이용서비스 확정</p>
                </div>
            </li>
            <li>
                <div>
                    <i>playlist_add_check</i>
                    <p>3. 서비스 이용신청 작성 및 kt 송부</p>
                </div>
            </li>
            <li>
                <div>
                    <i>event</i>
                    <p>4. 서비스 개통일자 확인 및 이용요금 안내</p>
                </div>
            </li>
            <li>
                <div>
                    <i>thumb_up</i>
                    <p>5. 서비스 개통</p>
                </div>
            </li>
            <li>
                <div>
                    <i>receipt</i>
                    <p>
                        6. 이용요금 납부<br>
                        <span>(개통 다음날)</span>
                    </p>
                </div>
            </li>
        </ol>
    </main>
</template>

<script setup lang="ts">

</script>
<style lang="scss" scoped>
.process {
    display: flex;
    padding-left: 50px;
    li {
        width: 20%;
        text-align: center;
        padding-right: 50px;
        position: relative;
        &:not(:last-child){
            
            &::after{
                content: "navigate_next";
                
                display: block;
                font-family: "Material Icons";
                font-weight: normal;
                font-style: normal;
                font-size: 50px;

                position: absolute;
                top: 30px;
                right:0;
            }
        }

        div {
            i {
                font-family: "Material Icons";
                font-style: normal;
                vertical-align: middle;
                font-size: 50px;
                color: #e51c23;
                
            }

            p {
                border-top: 1px solid #d0d0d0;
                font-size: 1rem;
                margin-top: 10px;
                padding-top: 10px;
            }
        }
    }
}

@include tablet {
    .process {
        padding-left: 0;
        flex-wrap: wrap;
        li {
            width: 33%;
        }
    }
}

@include mobile {
    .process {
        padding-left: 0;
        flex-wrap: wrap;
        li {
            width: 50%;
        }
    }
}
</style>