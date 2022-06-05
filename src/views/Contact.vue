<template>
  <!--<div class="contact" :style="{ backgroundImage: 'url(\'' + bgImage + '\')'}">-->
  <div class="contact">
    <PageHeading></PageHeading>
    <b-container>
        <b-row class="mb-5">
          <b-col>
            <h1 class="text-center mt-4 mb-4">Contact</h1>
            <b-form @submit="submitToAPI" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Email:"
                label-for="input-1"
                description=""
              >
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                  @blur="validateEmail"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-2" label="Name:" label-for="input-2">
                <b-form-input
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="Message:" label-for="input-3">
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Enter message..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>

              <b-button type="submit" variant="dark">Send</b-button>
            </b-form>
          </b-col>
        </b-row>
        <b-row class="mb-5" v-if="!show">
          <b-col><h2 class="text-center">Thank you for contacting me! I'll be in touch soon.</h2></b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import PageHeading from '../components/layout/PageHeading';
//import bgImage from '@/assets/images/contact-bg.jpg';
export default {
  components: {
    PageHeading
  },
  data: function() {
    return {
      //bgImage: bgImage,
      form: {
          email: '',
          name: '',
          message: ''
      },
      show: true,
      errors: {}
    }
  },
  methods: {
      isValidEmail(email) {
        var re = /^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      },
      validateEmail: function() {
        const isValid = this.isValidEmail(this.email);
        this.errors.email = !isValid;
      },
      onReset(evt) {
        console.log('onReset called');
        evt.preventDefault();
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      submitToAPI(e) {
        var contactForm = this;
        console.log(contactForm);
        e.preventDefault();
        var URL = "https://ytbmeik2q5.execute-api.us-east-1.amazonaws.com/deploy1/contact";

        var Namere = /[A-Za-z]{1}[A-Za-z]/;
        if (!Namere.test(document.getElementById('name').value)) {
            alert ("Name can not less than 2 char");
            return;
        }
        
        if (document.getElementById('email')=="") {
            alert ("Please enter your email address");
            return;
        }

        var reeamil = /^([\w-.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test(document.getElementById('email').value)) {
            alert ("Please enter valid email address");
            return;
        }

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var data = {
          name : name,
          email : email,
          message : message
        };


        var xhr = new XMLHttpRequest();
        xhr.open('POST', URL);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                var responseText = JSON.parse(xhr.responseText);
                console.log('status 200: ', xhr);
                console.log(responseText);
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                contactForm.show = false
                // contactForm.$nextTick(() => {
                //   contactForm.show = true
                // })
            }
        };
        console.log(xhr);
        xhr.send(JSON.stringify(data));
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