<template>
<footer id="colophon" class="site-footer">
    <div class="row-container style-dark-bg footer-last">
        <div class="row row-parent style-dark no-top-padding no-h-padding no-bottom-padding">
            <div class="site-info uncell col-lg-6 pos-middle text-left">&copy; 2020  All rights reserved</div>
            <div class="uncell col-lg-6 pos-middle text-right">
                <div class="social-icon icon-box icon-box-top icon-inline" v-bind:key="link.id" v-for="link in socialLinks">
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
footer {
    width: 100%;
    color: #fff;
}
.main-container .row-container {
    position: relative;
    clear: both;
    border: 0;
}
footer .footer-last {
    font-size: 13px;
}
.style-dark-bg {
    background-color: #141618;
}
.row .uncell {
    display: table-cell;
    position: relative;
    height: 100%;
    vertical-align: inherit;
    border: 0;
}
.uncell, .uncont {
    transition-property: box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.57, 0.21, 0.69, 1);
}
footer .footer-last .uncell {
    padding-top: 27px;
    padding-bottom: 27px;
}

footer .row {
    display: table;
    width: 100%;
    table-layout: fixed;
}
.text-right {
    text-align: right;
}

div > .icon-box:first-child {
    padding-left: 0px !important;
}
footer .footer-last .icon-box.icon-inline a {
    color: #FFF;
    padding: 10px;
    font-size: 1.3em;
}

footer .footer-last .icon-box.icon-inline a:hover {
    background: #FFF;
    border-radius: 50%;
    color: #000;
}

footer .footer-last .icon-box.icon-inline {
    line-height: 13px;
}

.icon-box.icon-inline {
    display: inline-table;
    table-layout: fixed;
    width: auto;
    text-align: center;
    vertical-align: bottom;
    margin-top: 0px !important;
    padding-left: 9px;
    padding-right: 9px;
}

.col-lg-6 {
    padding: 36px 36px 36px 36px;
}

.site-info,
.social-icon {
    font-size: 1.1rem;
}

@media (min-width: 960px) {
    .col-lg-6 {
        width: 50%;
    }
}
</style>