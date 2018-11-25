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
@mixin respond-to($media) {
  @if $media == sm {
    @media screen and (min-width: 600px) {
      @content;
    }
  }
}
@font-face {
  font: {
    family: 'Bitstream';
  }
  src: url('assets/fonts/ttf-bitstream-vera-1.10/VeraMono.ttf')
    format('truetype');
}

$font-main: 'Helvetica';

body {
  @include respond-to(sm) {
    margin: {
      left: 10rem;
      right: 0;
      top: 8rem;
    }
  }
}

#app {
  font-family: $font-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 100vw;
  max-width: 18rem;
  font-size: 13px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0;
}

a {
  color: #42b983;
}
</style>
