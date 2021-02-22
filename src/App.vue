<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'
  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
            * 嗨，我是王永强
            * 很荣幸你能看到这份简历
            * 自己闲来无事
            * 尝试着写一个简单的小简历吧
            */
            /*先来一点过渡效果吧*/
            *{
              transition: all .3s;
            }
            /*白色背景看起来是不是太单调了，让我们来给它换个背景吧*/
            html {
              color: rgb(222,222,222);
              background: rgb(36,52,65);
            }
            /* 文字离边框是不是太近了，我们来改一下吧 */
            .styleEditor {
              padding: 1px;
              border: 1px solid;
              margin: 1px;
              overflow: auto;
              width: 40vw; 
              height: 85vh;
            }
            /* 代码颜色太单调了，为代码加点高亮吧 */
            .token.selector{ 
              color: rgb(133,153,0); 
            }
            .token.property{ 
              color: rgb(187,137,0); 
            }
            .token.punctuation{ 
              color: yellow; 
            }
            .token.function{ 
              color: rgb(42,161,152); 
            }
            /* 尝试着加点 3D 效果呗 */
            html{
              perspective: 1000px;
            }
            .styleEditor {
              position: fixed; 
              left: 0; 
              top: 0;
              -webkit-transition: none;
              transition: none;
              -webkit-transform: rotateY(10deg) translateZ(-100px) ;
                      transform: rotateY(10deg) translateZ(-100px) ;
            }
            /* 接下来我要给自己准备一张纸来书写简历 */
            .resumeEditor{
              position: fixed; 
              right: 0; 
              top: 0;
              padding: 1px;  
              margin: 1px;
              width: 40vw; 
              height: 75vh;
              border: 1px solid;
              background: white; 
              color: #222;
              overflow: auto;
            }
            /* 好了，我开始写简历了 */
            `,
                      `
            /* 这个简历好像差点什么
            * 对了，这是 Markdown 格式的，我需要变成对阅读者更友好的格式
            * 用开源工具翻译成 HTML 就行了
            */
            `
                      ,
                      `
            /* 再对 HTML 加点样式 */
            .resumeEditor{
              padding: 1px;
            }
            .resumeEditor h2{
              display: inline-block;
              border-bottom: 1px solid;
              margin: 5px 15px 5px;
            }
            `],
                    currentMarkdown: '',
                    fullMarkdown: `王永强
            ----
            一个有梦想的前端工程师
            技能
            ----
            * 网页基本布局及特效交互
            * 移动端混合开发模式
            * 微信小程序开发
            * 了解PHP node.js等后台语言
            工作经历
            ----
            2017.08-2019.06 河南弋之众合 前端开发工程师
            2019.06-至今     河南智云信息技术有限公司 前端开发工程师

            `
      }
    },
    created() {
      this.makeResume()
    },
    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *{
    box-sizing: border-box;
  }
</style>
