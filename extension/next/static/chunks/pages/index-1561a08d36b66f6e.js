(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7950)}])},7950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var a=n(5893),r=n(7294);var s=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"}))}));var l=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"flex-1 text-xs",children:"Pocket Law"}),(0,a.jsx)("button",{children:(0,a.jsx)(s,{className:"w-4 h-4"})})]})},i=n(4051),o=n.n(i),c=n(8767);function u(e,t,n,a,r,s,l){try{var i=e[s](l),o=i.value}catch(c){return void n(c)}i.done?t(o):Promise.resolve(o).then(a,r)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function l(e){u(s,a,r,l,i,"next",e)}function i(e){u(s,a,r,l,i,"throw",e)}l(void 0)}))}}function d(e){return f.apply(this,arguments)}function f(){return(f=p(o().mark((function e(t){var n,a,r,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.openai.com/v1/completions",n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("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")},body:JSON.stringify({model:"text-davinci-002",prompt:t.prompt,max_tokens:500,temperature:1,top_p:1,presence_penalty:0})},e.next=4,fetch("https://api.openai.com/v1/completions",n);case 4:return a=e.sent,console.log(a),e.next=8,a.json();case 8:if(r=e.sent,console.log(r),a.ok){e.next=14;break}throw(s=new Error).error=r.error,s;case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=n(5697),h=n.n(m);function v(e){var t,n=e.response;return(0,a.jsx)("div",{className:"display-colors text-xs",children:(t=n,t.split("\n").map((function(e,t){if(e)return(0,a.jsx)("p",{className:"mb-2 leading-tight",children:e},"".concat(e,"-").concat(t))})))})}v.propTypes={response:h().string},v.defaultProps={response:null};var x=v;var g=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"}))}));function w(e){var t=e.message;return(0,a.jsxs)("div",{className:"self-center w-full",children:[t&&(0,a.jsx)("p",{className:"text-sm font-semibold",children:t}),(0,a.jsx)(g,{className:"animate-spin-slow w-10 h-10 mx-auto"})]})}w.propTypes={message:h().string},w.defaultProps={message:null};var b=w;function y(e){var t=e.message;return(0,a.jsx)("p",{className:"text-lg font-bold text-red-600 text-center",children:t||"Something went wrong"})}y.propTypes={message:h().string},y.defaultProps={message:null};var j=y;function N(e){var t,n=e.contState,r=e.raiseState,s=e.onClear;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{onClick:function(){r(""),s()},className:"btn mx-2",type:"button",children:"Clear"}),(0,a.jsx)("input",{className:"btn",type:"submit",value:"Send",disabled:(t=n,0===t.length)})]})}N.propTypes={contState:h().string.isRequired,raiseState:h().func.isRequired,onClear:h().func.isRequired};var S=N;var E=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{d:"M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z"}))}));var C=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z",clipRule:"evenodd"}))}));var P=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z",clipRule:"evenodd"}))}));function R(e){var t=e.raiseState,n=e.contState,r=function(e){var n=e.currentTarget.name;console.log(e.currentTarget,e.currentTarget.name),t((function(){return n}))},s=function(e,t){return e===t?"mode-icon-selected":"mode-icon"},l="define",i="explain",o="example";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{onClick:r,className:"",type:"button",name:i,children:(0,a.jsx)(E,{className:s(n,i)})}),(0,a.jsx)("button",{onClick:r,className:"",type:"button",name:l,children:(0,a.jsx)(C,{className:s(n,l)})}),(0,a.jsx)("button",{onClick:r,className:"",type:"button",name:o,children:(0,a.jsx)(P,{className:s(n,o)})})]})}R.propTypes={raiseState:h().func.isRequired,contState:h().string.isRequired};var T=R,_={explain:{inputPlaceholder:"Habeus Corpus",createPrompt:function(e){return"You're a law professor in the United States. You're good at giving detailed lectures. I am a law student. Give me a detailed lesson on ".concat(e,".")}},define:{inputPlaceholder:"Comparative Negligence",createOutputPrefix:function(){},createPrompt:function(e){"You're a law professor in the United States. You're good at giving detailed lectures. I am your law student learning about ".concat(e,'. Explain "').concat(e,'" and why this concept is important in the American legal system.');return"You're a law professor in the United States. You're good at giving detailed lectures. I am a law student. What is the legal definition of ".concat(e,".")}},example:{inputPlaceholder:"Battery",createPrompt:function(e){return"You're a law professor in the United States. I am a law student. Using hypethicals, give me three examples of ".concat(e,".")}}};function k(e){var t=e.onSubmit,n=e.onClear,s=(0,r.useState)("explain"),l=s[0],i=s[1],o=(0,r.useState)(""),c=o[0],u=o[1];return(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(_[l].createPrompt(c)),t({prompt:_[l].createPrompt(c)})},className:"w-full p-3 interface-form-colors",children:[(0,a.jsxs)("div",{className:"flex items-center pb-2",children:[(0,a.jsx)("div",{className:"flex space-x-3",children:(0,a.jsx)(T,{raiseState:i,contState:l})}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsx)(S,{contState:c,raiseState:u,onClear:n})})]}),(0,a.jsx)("input",{onChange:function(e){return u(e.target.value)},value:c,placeholder:_[l].inputPlaceholder,className:"w-full h-10 pt-2 focus:ring-0 focus:outline-none text-input-style",type:"text"})]})}k.propTypes={onSubmit:h().func.isRequired,onClear:h().func.isRequired};var O=k;function A(){var e=(0,c.useMutation)(d),t=e.mutate,n=e.reset,r=e.isLoading,s=e.isSuccess,l=e.isError,i=e.data;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"sticky top-0 h-full",children:(0,a.jsx)(O,{onSubmit:t,onClear:n})}),(0,a.jsxs)("div",{className:"flex w-full h-[375px] p-3 overflow-auto",children:[s&&(0,a.jsx)(x,{response:i.choices[0].text}),r&&(0,a.jsx)(b,{}),l&&(0,a.jsx)(j,{})]})]})}A.propTypes={};var z=A,H=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"header-style sticky top-0 z-50 w-full px-3 h-[25px] flex items-center",children:(0,a.jsx)(l,{})}),(0,a.jsx)("div",{className:"h-full",children:(0,a.jsx)(z,{})})]})}},2703:function(e,t,n){"use strict";var a=n(414);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,l){if(l!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);