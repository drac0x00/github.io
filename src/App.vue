<template>
  <div id="app">
    <p>{{ msg }}</p>
    <p>I'm a Software Engineer in Boston, MA.</p>
    <ul>
      <li>
        <a href="https://github.com/drac0x00" target="_blank">
          <img src="src/assets/icons/github-logo.svg">
          drac0x00
        </a>
      </li>
      <li>
        <a href="https://kurt.app">
          <img src="src/assets/icons/checked.svg">
          Lists
        </a>
        <i>Coming soon!</i>
      </li>
      <li>
        <a href="mailto:kurt@kurt.app" target="_blank">
          <img src="src/assets/icons/sent-mail.svg">
          Contact
        </a>
      </li>
    </ul>
    <p>Let's build something together.</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hi! I'm Kurt Bugbee."
    };
  }
};
</script>

<style lang="scss">
$font-main: "Helvetica Neue";
$root-container-width: 18rem;
$root-font-size: 14px;

@mixin respond-to($media) {
  @if $media == sm {
    @media screen and (min-width: 600px) {
      @content;
    }
  }
}

html {
  @include respond-to(sm) {
    font-size: $root-font-size;
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: {
    family: $font-main;
    size: $root-font-size * 1.25;
  }
  height: 100vh;
  text-rendering: optimizeLegibility;

  width: fit-content;
}

body {
  @include respond-to(sm) {
    margin: {
      left: 10rem;
      right: 0;
      top: 8rem;
    }
  }
  margin: {
    left: 2rem;
    right: 2rem;
    top: 6rem;
  }
  max-width: $root-container-width;
}

img {
  height: 1.25rem;
  margin-right: 0.25rem;
  vertical-align: middle;
}

p,
ul {
  margin: {
    top: 1.4rem;
  }
  padding: 0;
}
li {
  font-size: 1rem;
  line-height: 1.3rem;
  margin: 0;
  list-style-type: none;
  padding: 0;
}

a {
  color: #0864c7;
  text-decoration: none;
}
a:hover {
  color: #551a8b;
}
</style>
