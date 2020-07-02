<template>
<footer id="colophon" class="site-footer">
    <b-container fluid>
        <b-row cols="2">
            <b-col>
                <div class="site-info">&copy; 2020  All rights reserved</div>
            </b-col>
            <b-col>
                <div class="text-right">
                    <div class="social-icon icon-box icon-box-top icon-inline" v-bind:key="link.id" v-for="link in socialLinks">
                        <a :href="link.href" class="social-menu-link" target="_blank"><font-awesome-icon :icon="[link.fontAwesomeClass, link.name]"></font-awesome-icon></a>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
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
    background-color: #141618;
    padding: 20px 0;
}
.main-container .row-container {
    position: relative;
    clear: both;
    border: 0;
}

.text-right {
    text-align: right;
}

div > .icon-box:first-child {
    padding-left: 0px !important;
}
footer .icon-box.icon-inline a {
    color: #FFF;
    padding: 10px;
    font-size: 1.3em;
}

footer .icon-box.icon-inline a:hover {
    background: #FFF;
    border-radius: 50%;
    color: #000;
}

footer .icon-box.icon-inline {
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

@media (max-width: 575px) {
    footer .site-info {
        font-size: .875em;
    }
    footer .icon-box.icon-inline a {
        font-size: 1em;
    }
    footer .icon-box.icon-inline a {
        padding: 4px;
    }
}
</style>