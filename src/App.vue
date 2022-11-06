<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  background: #FAFAFA;
  width: 100%;
  max-width: 600px;
  padding-left: 20px;
  margin: 0 auto;
  padding-bottom: 66px;
}
.container.no-scroll{
  height: 100vh;
  max-height: 100%;
}

.bottom-fixed-btn{
  width:100%;
  text-align: center;
  padding: 20px 0;
  background: #6AE5A6;
  font-family: 'SUIT';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  border: 0;
  position: fixed;
  left: 0;
  bottom: 0;
}

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: white;
    background: black;
  }
}
</style>
