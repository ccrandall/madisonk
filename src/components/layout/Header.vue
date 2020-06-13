
<template>
    <header>
        <div id="masthead" class="navbar menu-primary menu-light submenu-dark menu-transparent menu-add-padding style-light-original menu-absolute menu-with-logo" style="opacity: 1;">
            <div class="menu-container">
                <div class="row-menu row-offcanvas">
                    <div class="row-menu-inner row-brand menu-horizontal-inner">
                        <div class="nav navbar-nav navbar-nav-first">
                            <ul class="menu-smart sm menu-icons menu-smart-social">
                                <li v-bind:key="link.id" v-for="link in socialLinks" class="menu-item-link social-icon tablet-hidden mobile-hidden"><a :href="link.href" class="social-menu-link" target="_blank"><font-awesome-icon :icon="[link.fontAwesomeClass, link.name]"></font-awesome-icon></a></li>
                            </ul>
                        </div>
                        <div id="logo-container-mobile" class="col-lg-0 logo-container middle">
                            <div id="main-logo" class="navbar-header style-light">
                                <a href="#" class="navbar-brand" data-minheight="14">
                                    <h2 class="text-logo h3 logo-skinnable main-logo" data-maxheight="14" style="font-size:14px;"></h2>
                                </a>
                            </div>
                        </div>
                        <div class="mmb-container">
                            <div class="mobile-menu-button 5 menu-button-overlay no-toggle mobile-menu-button-light lines-button x2 trigger-overlay" data-area="menu" data-container="main-container">
                                <span class="lines"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: ["socialLinks"]
}
</script>

<style scoped>

</style>