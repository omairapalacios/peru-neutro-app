<template>
 <div class="d-flex justify-center pa-5 my-3">
    <div class="semicircle d-flex">
        <v-img src="@/assets/images/transport.svg"
        max-width="60" max-height="60"
        class="img1"/>
        <v-img src="@/assets/images/water.svg"
        max-width="60" class="img2"  max-height="60"/>
        <v-img src="@/assets/images/cook.svg"
        max-width="60"  class="img3" max-height="60"/>
        <div class="value-center text-center">
            <h1>100</h1>
            <h1 class="text-title">Agosto</h1>
        </div>
    </div>
 </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables';
@import '@/styles/_classes';

.semicircle {
    border: 5px solid $color-primary-light;
    height: 160px;
    border-top-left-radius: 50% 100%;
    border-top-right-radius: 50% 100%;
    width: 75vw;
}

.img1 {
    @extend %img-general;
    top: 120px;
    right: 20px;
}
.img2 {
     @extend %img-general;
    top: 120px;
    left: 50vw
}
.img3 {
     @extend %img-general;
    bottom: 30px;
}
.value-center{
    position: relative;
    top: 60px;
    right: 60px;
}
</style>
