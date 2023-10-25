<template>
    <!-- Begin page -->
    <div id="wrapper">
        <PaymentTopbar/>

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->
        <div class="content-page">
            <div class="content">
                <div class="container-fluid">
                    <slot />
                </div>
            </div>
            <!-- content -->
            <Footer />
        </div>
        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->
    </div>
</template>

<script>

    import Footer from "@/components/Footer";
    import PaymentTopbar from "../../components/PaymentTopbar";
    /**
     * Horizontal layout
     */
    export default {
        data() {
            return {};
        },
        components: {
            PaymentTopbar,
            Footer,
        },

        mounted() {
            document.body.setAttribute("data-layout-mode", "horizontal");
        },
        methods: {
            toggleRightSidebar() {
                document.body.classList.toggle("right-bar-enabled");
            },
            hideRightSidebar() {
                document.body.classList.remove("right-bar-enabled");
            },
        },
    };
</script>


<style>
    @media screen and (max-width: 320px) {

        /*.content {*/
        /*  margin-top: 2rem;*/
        /*}*/
    }</style>