<template>

        <div class="col-lg-12 col-md-12">
            <b-alert show variant="info p-2">
                <i class="mdi mdi-alert-circle-outline"></i> {{message}}
            </b-alert>

        </div>
</template>

<script>
    export default {
        props : {
            message: {
                type:String
            }
        }
    }
</script>

<style scoped>

</style>