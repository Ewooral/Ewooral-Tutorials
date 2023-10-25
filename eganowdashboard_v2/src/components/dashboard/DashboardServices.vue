<template>
  <div class="card" :style="`background-color: ${color}`">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <div>
          <h3 class="font-weight-bolder mt-0 text-white" title="Collection">{{ value }}</h3>
          <h5 class="my-2 py-1">
            <span data-plugin="counterup" class="text-white">{{title}}</span>
          </h5>
          <p class="mb-0 text-muted">
<!--                    <span class="text-success mr-2">-->
<!--                        <span class="mdi mdi-arrow-up-bold"></span>-->
<!--                        {{ text }}-->
<!--                    </span>-->
<!--            <span class="text-nowrap text-white">Current balance</span>-->
          </p>
        </div>
        <div class="avatar-sm">
                <span class="avatar-title bg-soft-primary rounded">
                    <i :class="`${icon} font-20 text-white`"></i>
                </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
      color : {
        type : String,
        required : true
      },
    value: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
}
</script>

<style scoped>

</style>