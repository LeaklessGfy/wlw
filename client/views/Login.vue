<template>
  <div class="page">
    <b-container class="mt-2">
      <b-row>
        <b-col>
          <b-card header="Login" bg-variant="dark" text-variant="white">
            <b-form>
              <b-form-group label="Email :" label-for="emailInput" description="We'll never share your email with anyone else.">
                <b-form-input id="emailInput" type="email" v-model="form.email" required placeholder="Enter email">
                </b-form-input>
              </b-form-group>
              <b-form-group label="Password :" label-for="passwordInput">
                <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="Enter password">
                </b-form-input>
              </b-form-group>

              <b-button type="submit" variant="success">Login</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <b-card header="Register" bg-variant="dark" text-variant="white">
            <b-form>
              <b-form-group label="Email :" label-for="emailInput" description="We'll never share your email with anyone else.">
                <b-form-input id="emailInput" type="email" v-model="form.email" required placeholder="Enter email">
                </b-form-input>
              </b-form-group>
              <b-form-group label="Password :" label-for="passwordInput">
                <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="Enter password">
                </b-form-input>
              </b-form-group>
              <b-form-group label="Confirm password :" label-for="passwordInput2">
                <b-form-input id="passwordInput2" type="password" v-model="form.confirmPassword" required placeholder="Confirm passowrd">
                </b-form-input>
              </b-form-group>

              <b-button type="submit" variant="success">Register</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

