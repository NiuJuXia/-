<template>
  <div id="app">
    <el-button type="primary" icon="el-icon-edit" @click="buttonClick"></el-button>
    <mybutton type="primary" >凄凄切切群</mybutton>
    <button id='qwer'  @click="buttonClic">原生</button>
    <div class='qw qwe'>div</div>
    <vuetry></vuetry>
    <svg-icon icon-class='tree'/>
    <router-view></router-view>
  </div>
</template>

<script>
import mybutton from './components/button/button'
import vuetry from './components/try/try'
import axios from 'axios'

export default {
  data () {
    return {
      obj: ''
    }
  },
  methods: {
    buttonClick (qw) {
      console.log(qw.button)
    },
    buttonClic () {
      console.log('元素')
    }
  },
  mounted: function () {
    axios.get('http://mockjs').then((res) => {
      console.log(res)
    }).catch(() => {
      console.log('请求失败')
    })
  },
  components: {
    mybutton,
    vuetry
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  left: 50px;
  top: 50px;
  width: 500px;
  height: 350px;
  border: 1px orange solid;
}
#qwer {
  display: inline-block;
   position: relative;
    pointer-events: none;

    &:before {
      pointer-events: none;
      content: '';
      position: absolute;
      left: -1px;
      top: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: inherit;
      background-color: rgba(255,255,255,.35);
    }
}
.qw {
  width: 100px;
  height: 100px;
  background: red;
}
.qwe{
  background: black;
}
</style>
