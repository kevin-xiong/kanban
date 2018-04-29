<template>
  <div >
    <div class="main-header-con" >
      <div class="main-header">
        <div class="navicon-con">
          <button type="button" class="ivu-btn ivu-btn-text" style="transform: rotateZ(0deg);color:#fff">
            <span><i class="ivu-icon ivu-icon-navicon" style="font-size: 32px;"></i></span>
          </button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<style>
@import './layout.css';
</style>
<script>