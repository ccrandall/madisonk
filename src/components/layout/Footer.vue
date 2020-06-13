<template>
<footer id="colophon" class="site-footer">
    <div class="row-container style-dark-bg footer-last">
        <div class="row row-parent style-dark no-top-padding no-h-padding no-bottom-padding">
            <div class="site-info uncell col-lg-6 pos-middle text-left">&copy; 2020  All rights reserved</div>
            <div class="uncell col-lg-6 pos-middle text-right" v-bind:key="link.id" v-for="link in socialLinks">
                <div class="social-icon icon-box icon-box-top icon-inline">
                    <a :href="link.href" class="social-menu-link" target="_blank"><font-awesome-icon :icon="[link.fontAwesomeClass, link.name]"></font-awesome-icon></a>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    name: "Footer",
    props: ["socialLinks"]
}
</script>

<style scoped>

</style>