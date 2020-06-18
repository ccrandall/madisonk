
<template>
    <header>
        <div id="masthead" class="navbar menu-primary">
            <div class="menu-container">
                <div class="mmb-container">
                    <div class="mobile-menu-button menu-button-overlay" @click="toggleMenu" v-bind:class="{close: isClosed}">
                        <span class="lines"></span>
                    </div>
                </div>
                <div id="logo-container-mobile" class="logo-container">
                    <div id="main-logo" class="navbar-header style-light">
                        <a href="#" class="navbar-brand" data-minheight="14">
                            <img :src="'./images/MadSoundzMusic_LOGO_BLACK.png'" alt="">
                        </a>
                    </div>
                </div>
                <div class="nav navbar-nav social-icons-container">
                    <ul class="menu-smart sm menu-icons menu-smart-social">
                        <li v-bind:key="link.id" v-for="link in socialLinks" class="menu-item-link social-icon tablet-hidden mobile-hidden"><a :href="link.href" class="social-menu-link" target="_blank"><font-awesome-icon :icon="[link.fontAwesomeClass, link.name]"></font-awesome-icon></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: ["socialLinks"],
    data: function() {
        return {
            isClosed: false
        }
    },
    methods: {
        toggleMenu: function() {
            this.isClosed = !this.isClosed;
        }
    }
}
</script>

<style scoped>
div#masthead {
    position: relative;
}
.menu-container {
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-container > div {
    width: 33%;
    display: flex;
}

div#logo-container-mobile {
    justify-content: center;
}

.row-menu {
    position: relative;
    width: 100%;
    height: 100%;
}

.navbar-brand img {
    width: 120px;
    height: auto;
}

.social-icons-container {
    justify-content: flex-end;
}

.menu-icons {
    padding: 0;
    display: inline;
}

 .menu-primary .menu-smart .social-icon {
    display: inline-block;
    padding: 10px;
 }
.menu-primary .menu-smart .social-icon a {
    color: #000;
}

.mobile-menu-button {
    display: block;
}
.mobile-menu-button {
    transition: .3s;
}
.mobile-menu-button {
    line-height: 0px;
    /* transform: translateY(-50%); */
    position: relative;
    padding: 20px 36px 27px 36px;
    cursor: pointer;
}

.lines {
    position: relative;
}

.lines, .lines:before, .lines:after {
    display: inline-block;
    width: 20px;
    height: 2px;
    border-radius: 5px;
    background: #000;
}

.lines:before, .lines:after {
    position: absolute;
    left: 0;
    content: '';
    -webkit-transform-origin: 10px center;
    transform-origin: 10px center;
}

.lines:before {
    top: 6px;
}

.lines:after {
    top: -6px;
}
.lines:before, .lines:after {
    transform-origin: 50% 50%;
    transition: top 0.3s 0.6s ease-in-out,transform 0.3s ease-in-out;
}
.mobile-menu-button.close .lines:before {
    transform: rotate3d(0, 0, 1, 45deg);
}
.mobile-menu-button.close .lines:after {
    transform: rotate3d(0, 0, 1, -45deg);
}
.mobile-menu-button.close .lines:before, .mobile-menu-button.close .lines:after {
    transition: top 0.3s ease-in-out,transform 0.3s 0.5s ease-in-out;
    top: 0;
    width: 20px;
}
.mobile-menu-button.close .lines, .mobile-menu-button.closing .lines {
    transition: background 0.3s 0s ease-in-out;
    background: transparent !important;
}
.overlay.style-light-bg {
    background-color: rgba(255, 255, 255, 0.95) !important;
}
.style-light-bg {
    background-color: #ffffff;
}

@media (min-width: 960px) {
    .menu-container {
        padding: 0px 36px 0px 36px;
    }
    .overlay.open {
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s;
    }
    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s 0.5s, visibility 0s 1s;
    }
    .vmenu-center .menu-container .row-inner * {
        text-align: center;
    }
    .menu-overlay .vmenu-container .menu-sidebar-inner {
        max-width: 800px;
        margin: 0 auto;
        padding: 90px 0px 90px 0px !important;
    }
}

</style>