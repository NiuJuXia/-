<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' +buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
     <i class="el-icon-loading" v-if='loading'></i>
     <i :class="icon" v-if="icon && !loading"></i>
     <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    _elFormItemSize () {
      return (this.elFormItem || {}).elFormItemSize
    },
    buttonSize () {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
      // 1:this.$ELEMENT是什么?
    },
    buttonDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
// autofocus:对于按钮来说，最直接的就是，当其获得焦点后，你按键盘的空格键或回车键
// （如果回车键消息没有被设置成另外的按钮默认响应），就与用鼠标点击了该按钮是相同的效果。
// 2 为什么slot(源码)这样写？
</script>

<style>
    /* bem规范

    line-height:1的意思是根据该元素本身的字体大小设置行高
     比如该元素字体是15px line-height:1; 的行高就是15px;
     行高和元素字体大小是可继承的

     按钮没有设置宽高，宽高都是由字体大小撑开来的，然后设置padding来产生内间距，
     line-height:1表示行高和字体大小一样

     按钮点击时可能或出现一圈边框
     设置outline: none

     user-select:none(注意在不同浏览器加不同前缀)
     在网页中，一般文字都可以被选中，以便于复制粘贴；但是在点击鼠标过程中，
     如果鼠标滑动过快，则会出现button标签中文字被选中的情况，这就使得网页比较难看。

     css中按钮有四种状态

     1. 普通状态
     2. hover 鼠标悬停状态
     3. active 点击状态
     4. focus 取得焦点状态
     顺序为h,f,a.

     is-active(官网没讲嘿嘿)

     3 loading样式？ */
</style>
