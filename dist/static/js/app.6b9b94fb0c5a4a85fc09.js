webpackJsonp([1],{"36O8":function(n,t){},F18a:function(n,t){},MPzD:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("7+uW"),o=e("//Fk"),i=e.n(o),s=e("Xxa5"),a=e.n(s),l=e("exGp"),u=e.n(l),c=e("OEdS"),d=e.n(c),h={name:"Editor",props:["code"],computed:{highlightedCode:function(){return d.a.highlight(this.code,d.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}},f={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:this._s(this.codeInStyleTag)}}),this._v(" "),t("pre",{domProps:{innerHTML:this._s(this.highlightedCode)}})])},staticRenderFns:[]};var p=e("VU/8")(h,f,!1,function(n){e("F18a")},"data-v-4e0858c6",null).exports,m=e("EFqf"),g=e.n(m),v={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?g()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}},w={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:this.enableHtml}},[this.enableHtml?t("div",{domProps:{innerHTML:this._s(this.result)}}):t("pre",[this._v(this._s(this.result))])])},staticRenderFns:[]};var k=e("VU/8")(v,w,!1,function(n){e("36O8")},"data-v-232830f9",null).exports,y=(e("MPzD"),{name:"app",components:{StyleEditor:p,ResumeEditor:k},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n          * 嗨，我是王永强\n          * 很荣幸你能看到这份简历\n          * 自己闲来无事\n          * 尝试着写一个简单的小简历吧\n          */\n          /*先来一点过渡效果吧*/\n          *{\n            transition: all .3s;\n          }\n          /*白色背景看起来是不是太单调了，让我们来给它换个背景吧*/\n          html {\n            color: rgb(222,222,222);\n            background: rgb(36,52,65);\n          }\n          /* 文字离边框是不是太近了，我们来改一下吧 */\n          .styleEditor {\n            padding: 1px;\n            border: 1px solid;\n            margin: 1px;\n            overflow: auto;\n            width: 40vw; \n            height: 65vh;\n          }\n          /* 代码颜色太单调了，为代码加点高亮吧 */\n          .token.selector{ \n            color: rgb(133,153,0); \n          }\n          .token.property{ \n            color: rgb(187,137,0); \n          }\n          .token.punctuation{ \n            color: yellow; \n          }\n          .token.function{ \n            color: rgb(42,161,152); \n          }\n          /* 尝试着加点 3D 效果呗 */\n          html{\n            perspective: 1000px;\n          }\n          .styleEditor {\n            position: fixed; \n            left: 0; \n            top: 0;\n            -webkit-transition: none;\n            transition: none;\n            -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n                    transform: rotateY(10deg) translateZ(-100px) ;\n          }\n          /* 接下来我要给自己准备一张纸来书写简历 */\n          .resumeEditor{\n            position: fixed; \n            right: 0; \n            top: 0;\n            padding: 1px;  \n            margin: 1px;\n            width: 40vw; \n            height: 65vh;\n            border: 1px solid;\n            background: white; \n            color: #222;\n            overflow: auto;\n          }\n          /* 好了，我开始写简历了 */\n          ","\n          /* 这个简历好像差点什么\n          * 对了，这是 Markdown 格式的，我需要变成对阅读者更友好的格式\n          * 用开源工具翻译成 HTML 就行了\n          */\n          ","\n          /* 再对 HTML 加点样式 */\n          .resumeEditor{\n            padding: 1px;\n          }\n          .resumeEditor h2{\n            display: inline-block;\n            border-bottom: 1px solid;\n            margin: 5px 15px 5px;\n          }\n          "],currentMarkdown:"",fullMarkdown:"王永强\n          ----\n          一个有梦想的前端工程师\n          技能\n          ----\n          * 网页基本布局及特效交互\n          * 移动端混合开发模式\n          * 微信小程序开发\n          * 了解PHP node.js等后台语言\n          工作经历\n          ----\n          2017.08-2019.02 河南弋之众合 前端开发工程师\n          2019.02-2019.06 上海唐赢科技 前端开发工程师\n          2019.06-至今     河南智云信息技术有限公司 前端开发工程师\n\n          "}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=u()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),showHtml:function(){var n=this;return new i.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new i.a(function(e,r){var o=t.interval,i=u()(a.a.mark(function t(){var r,s,l,u,c,d=this;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:s=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),l=s-r.length,this.currentStyle.length<s?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new i.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){n.currentMarkdown.length<r?(n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1),n.currentMarkdown[n.currentMarkdown.length-1],"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)):t()}()})}}}),x={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:this.currentStyle}}),this._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:this.currentMarkdown,enableHtml:this.enableHtml}})],1)},staticRenderFns:[]};var b=e("VU/8")(y,x,!1,function(n){e("iPlM")},"data-v-6e16479c",null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",render:function(n){return n(b)}})},iPlM:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.6b9b94fb0c5a4a85fc09.js.map