<template>
  <div class="selbox">
    <label for="">상품분류</label>
    <select>
        <option value="">기본회선</option>
        <option value="">백본회선</option>
    </select>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.selbox {
    width: 28%;
    background: #f5f5f5;
    border-radius: 0 .4rem .4rem 0;
    height: 3em;
    padding: .25rem .25rem 0 1rem;

    label {
        position: relative;
        padding-left: 30px;
        margin-right: 10px;
        &::before {
            position: absolute;
            content: "devices";
            width: 30px;
            font-size: 1.5rem;
            display: block;
            font-family: "material icons";
        }
    }
    select {
        user-select: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        cursor: pointer;
        padding: 0 .5rem;
        font-size: 1rem; 
        border-radius: 0;
        height: 32px;
        line-height: 32px;
        padding-right: 3rem;
    }
}
</style>
