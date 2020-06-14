export default {
    // 组件名称, <el-row>和<ElRow>都可以使用
    name: 'ElRow',
    // 自定义属性, 用于后面<el-col>不断向父级查找该组件
    componentName: 'ElRow',
    // 组件的props
    props: {
        // 组件渲染成html的实际标签, 默认是div
        tag: {
            type: String,
            default: 'div'
        },
        // 该组件的里面<el-col>组件的间隔
        gutter: Number,
        // 组件是否是flex布局, 将type属性赋值为'flex', 可以启用flex布局,
        // 并可通过justify属性来指定子元素的排版方式
        type: String,
        // flex的justify属性
        justify: {
            type: String,
            default: 'start'
        },
        align: {
            type: String,
            default: 'top'
        }
    },
    computed: {
        // 通过左右负外边距抵消子组件col的最左右padding
        // 默认情况下width：auto或不设置width 父元素的content = 子元素（content + padding + border + margin )
        // （子）width: 100% 父元素的content = 子元素的content(以父元素的盒类型为准)
        // 如果box-sizing不是border-box,会溢出父盒子
        // 当使用负margin拉伸宽度的时候不要把宽度定死
        style() {
            const ret = {};
            if(this.gutter) {
                ret.marginLeft = `-${this.gutter / 2}px`;
                ret.marginRight = re.marginLeft
            }
            return ret;
        }
        //使用el-row是在外面包一个div(真正显示的地方,也是定宽高的地方)
        //,(el-row)marginLeft和marginRight为负值相当于拉伸el-row这个div(增加内容区的宽度)
        //所以col的宽度也拉伸, 最后导致最外层的div左边的row和col都溢出了半个gutter的宽度（右边同理）
        //注意row组件不能显式设置宽度
    },
    render(h) {
        return h(this.tag, {
            class:[
                'el-row',
                this.justify !== 'start' ? `is-justify-${this.justify}` : '',
                this.align !== 'top' ? `is-align-${this.align}` : '',
                {'el-row--flex': this.type === 'flex'}
            ],
            style: this.style
        }, this.$slots.default);
    }
}


// CSS相关

// @mixin中定义的变量后加 ！global 可冲出当前作用域(注意只有在有@include引用后变量才生效)

// @content 占位符 用于mixin中占位(@include{@content}) 注意其作用域为静态作用域  

//  https://www.softwhy.com/article-8804-1.html(@content具体)

// @at-root 在mixins utils中的utils-clearfix中使用是因为变量的复用(我觉得&就是一种特殊的@at-root)

// @at-root具体https://www.cnblogs.com/ibabyli/p/9871609.html



// p {
//     $selector: &;
//     width: 100px;
     
//     #{$selector}::before{
//         content: '7788';
      
//     }
//   }



// p {
//     width: 100px;
//   }
//   p p::before {
//     content: "7788";
//   }


// p {
//     $selector: &;
//     width: 100px;
       
//   {#{$selector}::before{
//     content: '7788';
  
// }}  
//   }  报错

//所以按utils-clearfix的写法较好