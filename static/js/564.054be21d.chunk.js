"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[564],{3564:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var l=s(5043),r=s(9722);var d=s(5206),n=s(8507),i=s(2790),t=s(6710),m=s(6616),u=s(7914),c=s(6603),x=s(7360),o=s(5337),h=s(2058),j=s(7195),A=s(446),y=s.n(A),p=s(579);const b=()=>{var e;const[a,s]=(0,l.useState)(""),[A,b]=(0,j.e)({}),g=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u6027\u522b",dataIndex:"sex",key:"sex"},{title:"\u51fa\u751f\u65e5\u671f",dataIndex:"birthday",key:"birthday"},{title:"\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u64cd\u4f5c",key:"action",render:e=>(0,p.jsxs)("div",{className:"actionButton",children:[(0,p.jsx)(d.Ay,{onClick:()=>S(e),color:"cyan",variant:"solid",children:"\u7f16\u8f91"}),(0,p.jsx)(d.Ay,{onClick:()=>D(e),type:"primary",danger:!0,children:"\u5220\u9664"})]})}],[v,k]=(0,j.e)({}),[C,I]=(0,j.e)({}),[f,q]=(0,l.useState)(!1),[F,V]=(0,l.useState)(!1),[N]=n.A.useForm(),S=e=>{k((a=>{a.name=e.name,a.age=e.age,a.sex=e.sex,a.birthday=e.birthday,a.address=e.address}));let a="\u7537"===e.sex?1:2;N.setFieldValue("username",e.name),N.setFieldValue("age",e.age),N.setFieldValue("sex",a),N.setFieldValue("birthday",y()(e.birthday)),N.setFieldValue("address",e.address),V(!0)},[w,O]=(0,l.useState)(!1),D=e=>{I((a=>{a.id=e.id})),O(!0)};return(0,l.useEffect)((()=>{(async()=>await r.A.get("/main/getUserData"))().then((e=>{var a;let s=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.list;b((e=>{e.data=s,e.columns=g}))}))}),[]),(0,l.useEffect)((()=>{console.log(a)}),[a]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"homeUser",children:[(0,p.jsxs)("div",{className:"userHead",children:[(0,p.jsx)(d.Ay,{type:"primary",onClick:()=>{q(!0)},icon:(0,p.jsx)(o.A,{}),children:"\u65b0\u589e"}),(0,p.jsxs)("div",{className:"userSearch",children:[(0,p.jsx)(i.A,{placeholder:"\u641c\u7d22",size:"middle",value:a,onChange:e=>s(e.target.value)}),(0,p.jsx)(d.Ay,{type:"primary",icon:(0,p.jsx)(h.A,{}),children:"\u67e5\u8be2"})]})]}),(null===A||void 0===A||null===(e=A.data)||void 0===e?void 0:e.length)>0?(0,p.jsx)(t.A,{className:"userTable",columns:A.columns,dataSource:A.data}):(0,p.jsx)(t.A,{className:"userTable",columns:g})]}),(0,p.jsx)(m.A,{title:"\u6dfb\u52a0\u7528\u6237\u4fe1\u606f",open:f,onOk:()=>{q(!1)},onCancel:()=>{q(!1)},children:(0,p.jsxs)(n.A,{name:"basic",labelCol:{span:4},wrapperCol:{span:10},style:{maxWidth:600},initialValues:{remember:!1},autoComplete:"off",clearOnDestroy:!0,children:[(0,p.jsx)(n.A.Item,{label:"\u59d3\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u540d\u5b57!"}],children:(0,p.jsx)(i.A,{})}),(0,p.jsx)(n.A.Item,{label:"\u5e74\u9f84",name:"age",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u5e74\u9f84!"}],children:(0,p.jsx)(u.A,{min:1,max:100})}),(0,p.jsx)(n.A.Item,{label:"\u6027\u522b",name:"sex",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u6027\u522b!"}],children:(0,p.jsxs)(c.Ay.Group,{children:[(0,p.jsx)(c.Ay,{value:1,children:"\u7537"}),(0,p.jsx)(c.Ay,{value:2,children:"\u5973"})]})}),(0,p.jsx)(n.A.Item,{label:"\u51fa\u751f\u65e5\u671f",name:"birtyday",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u751f\u65e5!"}],children:(0,p.jsx)(x.A,{})}),(0,p.jsx)(n.A.Item,{label:"\u5730\u5740",name:"address",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u5730\u5740!"}],children:(0,p.jsx)(i.A,{})})]})}),(0,p.jsx)(m.A,{title:"\u4fee\u6539\u7528\u6237\u4fe1\u606f",open:F,onOk:()=>{V(!1)},onCancel:()=>{V(!1)},children:(0,p.jsxs)(n.A,{name:"basic",labelCol:{span:4},wrapperCol:{span:10},style:{maxWidth:600},initialValues:{remember:!1},autoComplete:"off",form:N,children:[(0,p.jsx)(n.A.Item,{label:"\u59d3\u540d",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u540d\u5b57!"}],children:(0,p.jsx)(i.A,{value:v.name})}),(0,p.jsx)(n.A.Item,{label:"\u5e74\u9f84",name:"age",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u5e74\u9f84!"}],children:(0,p.jsx)(u.A,{min:1,max:100,value:v.age})}),(0,p.jsx)(n.A.Item,{label:"\u6027\u522b",name:"sex",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u6027\u522b!"}],children:(0,p.jsxs)(c.Ay.Group,{value:v.sex,children:[(0,p.jsx)(c.Ay,{value:1,children:"\u7537"}),(0,p.jsx)(c.Ay,{value:2,children:"\u5973"})]})}),(0,p.jsx)(n.A.Item,{label:"\u51fa\u751f\u65e5\u671f",name:"birthday",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u751f\u65e5!"}],children:(0,p.jsx)(x.A,{value:v.birthday})}),(0,p.jsx)(n.A.Item,{label:"\u5730\u5740",name:"address",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4f60\u7684\u5730\u5740!"}],children:(0,p.jsx)(i.A,{value:v.address})})]})}),(0,p.jsx)(m.A,{title:"\u5220\u9664\u7528\u6237\u4fe1\u606f",open:w,onOk:()=>{b((e=>{e.data=e.data.filter((e=>e.id!==C.id))})),O(!1)},onCancel:()=>{O(!1)},children:(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:"\u786e\u5b9a\u5220\u9664\u8be5\u7528\u6237\u5417\uff1f"})})})]})}}}]);
//# sourceMappingURL=564.054be21d.chunk.js.map