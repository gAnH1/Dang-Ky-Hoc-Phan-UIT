(this["webpackJsonpdkhp-uit-react"]=this["webpackJsonpdkhp-uit-react"]||[]).push([[12],{375:function(e,l,n){},422:function(e,l,n){"use strict";n.r(l);var t=n(0),a=n.n(t),u=n(187),r=n(64),c=n(169),o=n(412),h=n(157),i=n(421),T=n(367),m=n(70);var s=function(e){var l=e.listMaLop,n=e.loaiMaLop,t=Object(m.b)().enqueueSnackbar;return a.a.createElement(o.a,{item:!0,xs:5},l.length>0?a.a.createElement(h.a,{title:"Click \u0111\u1ec3 sao ch\xe9p"},a.a.createElement(T.CopyToClipboard,{text:l.join("\n"),onCopy:function(){return t("\u0110\xe3 sao ch\xe9p")}},a.a.createElement(i.a,{label:"M\xe3 c\xe1c l\u1edbp h\u1ecdc ph\u1ea7n "+n,fullWidth:!0,size:"small",multiline:!0,rows:2,variant:"outlined",value:l.join("\n")}))):a.a.createElement(i.a,{label:"M\xe3 c\xe1c l\u1edbp h\u1ecdc ph\u1ea7n "+n,fullWidth:!0,size:"small",multiline:!0,rows:2,variant:"outlined",value:"Kh\xf4ng c\xf3 m\xe3 l\u1edbp",disabled:!0}))};var p=function(){var e=Object(r.c)(c.j),l=Object(u.a)(e,2),n=l[0],t=l[1],T=Object(r.c)(c.l);return a.a.createElement(o.a,{container:!0,spacing:2,style:{marginBottom:10,maxWidth:1510}},a.a.createElement(o.a,{item:!0,xs:2,style:{marginRight:"auto"}},a.a.createElement(h.a,{title:T<14?"Ch\u01b0a \u0111\u1ea1t s\u1ed1 TC quy \u0111\u1ecbnh: 14":T>24?"V\u01b0\u1ee3t qu\xe1 s\u1ed1 TC quy \u0111\u1ecbnh: 24":"S\u1ed1 TC quy \u0111\u1ecbnh l\xe0 14-24"},a.a.createElement(i.a,{size:"small",variant:"outlined",label:"S\u1ed1 t\xedn ch\u1ec9",value:T,inputProps:{readOnly:!0,style:{fontWeight:"500",color:T>24||T<14?"red":"green"}}}))),a.a.createElement(s,{listMaLop:n,loaiMaLop:"anh v\u0103n"}),a.a.createElement(s,{listMaLop:t,loaiMaLop:"th\u01b0\u1eddng"}))},d=n(371),E=n.n(d),b=n(47),v=n(373),f=n(236),g=n(374),C=n.n(g),k=["(7:30 - 8:15)","(8:15 - 9:00)","(9:00 - 9:45)","(10:00 - 10:45)","(10:45 - 11:30)","(13:00 - 13:45)","(13:45 - 14:30)","(14:30 - 15:15)","(15:30 - 16:15)","(16:15 - 17:00)"],y=function(e){return"0"===e?9:e-1},w=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"thoikhoabieu.png",n=document.createElement("a");n.href=e.toDataURL(),n.download=l,document.body.appendChild(n),n.click(),n.remove()},j=[{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null},{Thu2:null,Thu3:null,Thu4:null,Thu5:null,Thu6:null,Thu7:null}];var x=function(e){var l=e.MaLop,n=e.NgonNgu,t=e.TenMH,u=e.TenGV,r=e.PhongHoc,c=e.NBD,o=e.NKT;return a.a.createElement(a.a.Fragment,null,a.a.createElement("strong",null,l," - ",n),a.a.createElement("br",null),t,a.a.createElement("br",null),a.a.createElement("strong",null,u),a.a.createElement("br",null),r,a.a.createElement("br",null),"B\u0110: ",c,a.a.createElement("br",null),"KT: ",o,a.a.createElement("br",null))};var O=function(){return a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Th\u1ee9 / Ti\u1ebft"),a.a.createElement("th",null,"Th\u1ee9 2"),a.a.createElement("th",null,"Th\u1ee9 3"),a.a.createElement("th",null,"Th\u1ee9 4"),a.a.createElement("th",null,"Th\u1ee9 5"),a.a.createElement("th",null,"Th\u1ee9 6"),a.a.createElement("th",null,"Th\u1ee9 7")))},S=function(e){var l=e.data;return null===l?a.a.createElement("td",null):"xx"===l?null:a.a.createElement("td",{rowSpan:l.Tiet.length,className:"cell-class"},a.a.createElement(x,l))};var M=function(e){var l=e.row,n=e.index;return a.a.createElement("tr",null,a.a.createElement("td",{className:"cell-tiet"},"Ti\u1ebft ",n+1," ",a.a.createElement("br",null),k[n]),[2,3,4,5,6,7].map((function(e){return a.a.createElement(S,{key:e,data:l["Thu"+e]})})))},H=n(410),L=n(419);n(375);var q=function(){var e=function(){var e=Object(r.c)(c.i),l=Object(u.a)(e,2),n=l[0],t=l[1];return{khongHocTrenTruong:n,rowDataHocTrenTruong:a.a.useMemo((function(){var e,l=j,n=Object(f.a)(t);try{for(n.s();!(e=n.n()).done;){var a=e.value,u=a.Tiet.split(""),r=u[0];l[y(r)]["Thu"+a.Thu]=a;for(var c=1;c<u.length;c++)l[y(u[c])]["Thu"+a.Thu]="xx"}}catch(o){n.e(o)}finally{n.f()}return l}),[t])}}(),l=e.rowDataHocTrenTruong,n=e.khongHocTrenTruong,t=function(){var e=a.a.useRef(null),l=Object(m.b)().enqueueSnackbar,n=a.a.useState(!1),t=Object(u.a)(n,2),r=t[0],c=t[1],o=a.a.useCallback(Object(v.a)(E.a.mark((function n(){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),n.next=3,C()(e.current);case 3:n.sent.toBlob((function(e){navigator.clipboard.write([new window.ClipboardItem(Object(b.a)({},e.type,e))]),c(!1),l("Sao ch\xe9p th\xe0nh c\xf4ng, Ctrl+V \u0111\u1ec3 xem k\u1ebft qu\u1ea3.",{variant:"success"})}));case 5:case"end":return n.stop()}}),n)}))),[l,e]),h=a.a.useState(!1),i=Object(u.a)(h,2),T=i[0],s=i[1],p=a.a.useCallback(Object(v.a)(E.a.mark((function l(){var n;return E.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return s(!0),l.next=3,C()(e.current);case 3:n=l.sent,w(n,"thoikhoabieu.png"),s(!1);case 6:case"end":return l.stop()}}),l)}))),[e]);return{tkbTableRef:e,isCopyingToClipboard:r,onHandleCopyToClipboard:o,isSavingToComputer:T,onHandleSavingToComputer:p}}(),o=t.tkbTableRef,h=t.isCopyingToClipboard,i=t.onHandleCopyToClipboard,T=t.isSavingToComputer,s=t.onHandleSavingToComputer;return a.a.createElement("div",{id:"thoi-khoa-bieu"},a.a.createElement(H.a,{size:"small",variant:"outlined",style:{marginRight:4},children:h?a.a.createElement(L.a,{size:20}):"Sao ch\xe9p h\xecnh \u1ea3nh TKB v\xe0o clipboard",onClick:i}),a.a.createElement(H.a,{size:"small",variant:"outlined",color:"primary",children:T?a.a.createElement(L.a,{size:20}):"T\u1ea3i h\xecnh \u1ea3nh TKB v\u1ec1 m\xe1y",onClick:s}),a.a.createElement("table",{ref:o},a.a.createElement(O,null),a.a.createElement("tbody",null,l.map((function(e,l){return a.a.createElement(M,{key:l,row:e,index:l})})),n.map((function(e,l){return a.a.createElement("tr",{key:l},a.a.createElement("td",{colSpan:"7",className:"cell-class"},a.a.createElement(x,e)))})))))};l.default=function(){return a.a.createElement("div",{style:{height:"100%",minWidth:"90%"}},a.a.createElement(p,null),a.a.createElement(q,null))}}}]);