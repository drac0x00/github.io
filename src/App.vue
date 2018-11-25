<template>
  <div id="app">
    <p>{{ msg }}</p>
    <ul>
      <li><a href="https://github.com/drac0x00" target="_blank">GitHub</a></li>
      <li><a href="https:kurt.app" target="_blank">Lists</a></li>
      <li><a href="mailto:kurt@kurt.app" target="_blank">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Kurt Bugbee',
    };
  },
};
</script>

<style lang="scss">
$font-main: 'Helvetica';
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

p,
ul,
li {
  font-size: 0.95rem;
  line-height: 1.3rem;
  margin: {
    bottom: 1.45rem;
    top: 0;
  }
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  color: #0864c7;
}
</style>
