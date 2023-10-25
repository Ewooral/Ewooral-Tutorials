<template>
    <div v-if="loading" class="setOpacity">
        <div style="" class="lottieCss">
            <lottie-animation class="lottieImage"
                    ref="anim"
                    :animationData="require('@/assets/images/loader.json')"
                    :loop="true"
                    :autoPlay="true"
            />
        </div>
    </div>
</template>

<script>
    //import lottie from 'lottie-web';
    import LottieAnimation from 'lottie-web-vue'
    export default {
        props: {
            loading: {
                type: Boolean,
                required: true,
            },
        },
        components : {
            LottieAnimation
        }

    };
</script>

<style>
    .setOpacity {
      opacity: 0.6;
      background-color: #ccc;
        height: 100%;
    }
    .lottieCss {
        margin: 0 !important;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .lottieImage {
        position: relative;
        height: 200px;
    }
</style>