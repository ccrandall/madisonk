<template>
  <div class="contact" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}">
    <PageHeading></PageHeading>
    <b-container>
        <b-row class="mb-5">
          <b-col>
            <h1 class="text-center mt-4 mb-4">Contact</h1>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email:"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Name:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="Message:" label-for="input-3">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter message..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" variant="dark">Submit</b-button>
            </b-form>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import PageHeading from '../components/layout/PageHeading';
import bgImage from '@/assets/images/site-bg.jpg';
export default {
  components: {
    PageHeading
  },
  data: function() {
    return {
      bgImage: bgImage,
      form: {
          email: '',
          name: '',
          message: ''
      },
      show: true
    }
  },
  methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
}
</script>

<style scoped>
.contact {
  font-family: 'Playfair Display';
  background-size: cover;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-color: #000;
  background-color: rgba(0,0,0,.65);
  color: #FFF;
}
.contact:before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: radial-gradient(black, transparent);
  background: rgba(0,0,0,.5);
}
.contact form {
  max-width: 600px;
  margin: 0 auto;
}
.contact form button[type='submit'] {
  display: block;
  width: 100%;
}
</style>