
<template>
    <header>
        <div id="masthead" class="navbar menu-primary">
            <div class="menu-container">
                <div class="mmb-container">
                    <div class="mobile-menu-button menu-button-overlay">
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
    props: ["socialLinks"]
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
.lines-button {
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

@media (min-width: 960px) {
    .menu-container {
        padding: 0px 36px 0px 36px;
    }
}

</style>