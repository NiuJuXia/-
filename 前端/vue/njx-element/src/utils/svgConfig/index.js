import Vue from 'vue'
import SvgIcon from '@/components/SVG.vue'// svg组件
import generateIconsView from './generateIconsView.js'

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)// 在这一步中触发svg
const req = require.context('./../../icons/', true, /\.svg$/)
const iconMap = requireAll(req)

generateIconsView.generate(iconMap)
