
<template>
    <header>
        <div id="masthead" class="navbar menu-primary">
            <div class="menu-container">
                <div class="mmb-container">
                     <b-button variant="light" v-b-toggle.sidebar-no-header class="mobile-menu-button menu-button-overlay">
                        <span class="lines"></span>
                    </b-button>
                </div>
                <div id="logo-container-mobile" class="logo-container">
                    <div id="main-logo" class="navbar-header style-light">
                        <a href="#" class="navbar-brand" data-minheight="14">
                            <img :src="logoImage" alt="Mad Soundz Music Logo" class="desktop-logo">
                            <img :src="mobileLogoImage" alt="Mad Soundz Music Logo" class="mobile-logo">
                        </a>
                    </div>
                </div>
                <div class="nav navbar-nav social-icons-container hide-mobile">
                    <ul class="menu-smart sm menu-icons menu-smart-social">
                        <li v-bind:key="link.id" v-for="link in socialLinks" class="menu-item-link social-icon tablet-hidden mobile-hidden"><a :href="link.href" class="social-menu-link" target="_blank"><font-awesome-icon :icon="[link.fontAwesomeClass, link.name]"></font-awesome-icon></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
            <template v-slot:default="{ hide }">
                <div class="p-3">
                <b-button pill variant="outline-secondary" @click="hide" class="float-right"><font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon></b-button>
                <nav class="mb-3">
                    <b-nav vertical>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About</router-link>
                    <router-link to="/studio">Studio</router-link>
                    <router-link to="/works">Works</router-link>
                    <router-link to="/gallery">Gallery</router-link>
                    <router-link to="/contact">Contact</router-link>
                    </b-nav>
                </nav>
                    <ul class="menu-smart sm menu-icons menu-smart-social">
                        <li v-bind:key="link.id" v-for="link in socialLinks" class="menu-item-link social-icon tablet-hidden mobile-hidden"><a :href="link.href" class="social-menu-link" target="_blank"><font-awesome-icon :icon="[link.fontAwesomeClass, link.name]"></font-awesome-icon></a></li>
                    </ul>
                </div>
            </template>
            </b-sidebar>
        </div>
    </header>
</template>

<script>
import mobileLogoImage from '@/assets/images/mobile-logo.png';
import logoImage from '@/assets/images/MadSoundzMusic_LOGO_purple.png';

export default {
    name: "Header",
    props: ["socialLinks"],
    data: function() {
        return {
            isClosed: false,
            logoImage: logoImage,
            mobileLogoImage: mobileLogoImage
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
    align-items: center;
    width: 100%;
}

.menu-container > div {
    width: 33.3333%;
}

div#logo-container-mobile {
    text-align: center;
}

.row-menu {
    position: relative;
    width: 100%;
    height: 100%;
}

.navbar-brand {
    margin: 0;
}

.navbar-brand img {
    width: 220px;
    height: auto;
}

.social-icons-container {
    text-align: right;
}

.menu-icons {
    padding: 0;
    display: inline;
}

.menu-smart .social-icon {
    display: inline-block;
    padding: 10px;
}
.menu-smart .social-icon a {
    color: #000;
}

.mobile-menu-button {
    display: block;
    border: none;
}
.mobile-menu-button {
    transition: .3s;
}
.mobile-menu-button {
    line-height: 0px;
    position: relative;
    padding: 12px 12px 14px 12px;
    cursor: pointer;
}
.btn-light.mobile-menu-button {
    color: #000;
    background-color: transparent;
    border-color: #000;
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

.b-sidebar-body nav {
    margin-top: 40px;
    font-family: 'Playfair Display';
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: .15em;
}

.b-sidebar-body nav a {
    color: #000;
    padding: 1rem;
}

.navbar-brand img.mobile-logo {
    display: none;
}

.b-sidebar-outer .menu-icons {
    display: inline-block;
    text-align: center;
    width: 100%;
}
@media (max-width: 767px) {
    .menu-container {
        justify-content: space-between;
    }
    .menu-container > div {
        width: auto;
    }
    .navbar-brand img.desktop-logo {
        display: none;
    }
    .navbar-brand img.mobile-logo {
        display: block;
        width: auto;
        max-height: 60px;
    }
    .hide-mobile {
        display: none;
    }
}

</style>