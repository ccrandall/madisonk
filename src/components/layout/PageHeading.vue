<template>
  <b-container>
      <b-row>
        <b-col class="p-3 p-md-5">
          <h3 class="text-sm-center">Madison Kaminsky</h3>
          <ul class="list-unstyled d-flex justify-content-center">
            <li>Composer <span>&#9671;</span></li>
            <li>Pianist <span>&#9671;</span></li>
            <li>Arranger <span>&#9671;</span></li>
            <li>Songwriter <span>&#9671;</span></li>
            <li>Collaborative Musician</li>
          </ul>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
h3:after {
    content: '';
    background: #FFF;
    width: 14%;
    height: 2px;
    display: block;
    margin: 10px auto;
}

.home h3:after {
    background: #000;
}

ul li span {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: .85rem;
}
@media (max-width: 767px) {
  .text-sm-center {
    text-align: center !important;
  }
  ul.d-flex {
      flex-wrap: wrap;
  }
}
@media (max-width: 575px) {
    ul li span {
        display: none;
    }
    ul.list-unstyled.d-flex.justify-content-center li {
        font-size: .85rem;
        padding-right: 8px;
    }
}
</style>