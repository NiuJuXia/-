<template>
  <div class="el-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElButtonGroup'
  };
</script>
<style>
  /* button默认有border，设置了第一个元素的右侧border和最后一个的左侧border，
  对于既不是第一个也不是最后一个的元素，设置双侧border,改变颜色即可 */
</style>
