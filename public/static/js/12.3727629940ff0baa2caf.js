webpackJsonp([12],{ItCA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ocgh"),i=a("ceg5"),r=(a("fYdz"),a("+AKB"),a("Y8t/")),s=a("2sCs"),l=a.n(s),o={data:function(){return{searchType:[{label:"姓名",value:"1"},{label:"身份证号(全匹配)",value:"2"}],searchTypeValue:"",options:[],selectedOptions:[],list:null,listLoading:!0,searchKey:"",res:"",current_page:"",community_id:"",username:"",fenye:null}},created:function(){this.pageStart(),this.shuju()},activated:function(){this.pageStart(),this.selectedOptions=[]},methods:{handleChange2:function(e){var t=this;this.list=null,"quanbu"==e[0]&&(e[0]=""),this.fenye=e[0],l.a.get(this.URL+"/user?identity=&community_id="+e[0]+"&username="+this.searchKey).then(function(e){0===e.data.code?t.list=e.data.data.data:t.$message.error(e.data.status)}),r.a.get("/user?username="+this.searchKey+"&identity=&community_id="+this.fenye).then(function(e){0==e.code&&(t.res=e.data)})},shuju:function(){var e=this;this.options=[],l.a.get(this.URL+"/community").then(function(t){if(0===t.data.code)for(var a=0;a<t.data.data.length;a++)"admin"==e.username?e.options.push({value:t.data.data[a].id,label:t.data.data[a].community_name}):t.data.data[a].id==e.community_id&&e.options.push({value:t.data.data[a].id,label:t.data.data[a].community_name});else e.$message.error(t.data.status)}),this.options.unshift({value:"quanbu",label:"全部"})},pageStart:function(){this.storage.getStorage("uinfo").length>1?(this.community_id=JSON.parse(this.storage.getStorage("uinfo")).community_id,this.username=JSON.parse(this.storage.getStorage("uinfo")).username):this.community_id=-1,this.fetchData()},fetchData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;arguments[2];this.listLoading=!0,Object(n.b)(e,a,this.community_id,this.username,"",this.searchTypeValue).then(function(e){t.res=e.data,t.list=e.data.data,t._filter(t.list),t.listLoading=!1})},desingManager:function(e,t){var a=this,i=1;i=t&&"管理员"==t.authority?1:2,Object(n.a)(t.id).then(function(e){0===e.code&&Object(n.d)({id:e.data.id},i).then(function(){a.fetchData(a.searchKey,a.current_page)})})},cancelManager:function(e,t){var a=this;Object(n.a)(t.id).then(function(e){0===e.code&&Object(n.d)(e.data,1).then(function(){a.fetchData(a.searchKey,a.current_page)})})},handleCurrentChange:function(e){var t=this;console.log(this.fenye),this.fenye?r.a.get("/user?username="+this.searchKey+"&identity=&community_id="+this.fenye+"&page="+e).then(function(e){0==e.code&&(t.res=e.data,t.list=e.data.data,t._filter(t.list))}):(this.current_page=e,this.fetchData(this.searchKey,e,this.fenye))},_searchKey:function(){this.current_page=1,this.fetchData(this.searchKey)},_filter:function(e){e.forEach(function(e){switch(e.marriage){case 1:e.marriage="未婚";break;case 2:e.marriage="已婚";break;case 3:e.marriage="离异";break;default:e.marriage="不详"}switch(e.record){case 1:e.record="小学";break;case 2:e.record="初中";break;case 3:e.record="高中";break;case 4:e.record="专科";break;case 5:e.record="本科";break;case 6:e.record="硕士";break;case 7:e.record="博士";break;case 8:e.record="博士以上";break;default:e.record="不详"}switch(e.validate){case 1:e.validate="未验证";break;default:e.validate="已验证"}switch(e.authentication){case 1:e.authentication="未认证";break;default:e.authentication="已认证"}switch(e.authority){case 1:e.authority="普通";break;case 2:e.authority="管理员";break;default:e.authority="超级管理员"}switch(e.verify){case 1:e.verify="未审核";break;case 2:e.verify="审核通过";break;default:e.verify="审核不通过"}switch(e.political){case 1:e.political="党员";break;case 2:e.political="团员";break;default:e.political="其它"}})},_fileOut:function(e){Object(i.a)("#fileExport").execlExport("用户列表 - "+this.dateformat.format(new Date,"yyyy-MM-dd"))}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-header",{staticClass:"header"},[a("el-select",{attrs:{placeholder:"请选择搜索类型"},model:{value:e.searchTypeValue,callback:function(t){e.searchTypeValue=t},expression:"searchTypeValue"}},e._l(e.searchType,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-input",{attrs:{placeholder:"请输入内容(用户名/身份证号)"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}}),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:function(t){e._searchKey()}}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.searchKey="",e._searchKey()}}},[e._v("取消")]),e._v(" "),a("el-cascader",{attrs:{size:"medium",options:e.options},on:{change:e.handleChange2},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{id:"fileExport",data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"编号",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.$index+1)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.username)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"性别",width:"55",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.sex)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"身份证号",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.card)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.phone)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"社区",width:"130",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.community_name)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"政治面貌",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.political)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"身份",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(1==t.row.identity?"领导":2==t.row.identity?"工作人员":"普通居民")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"审核",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.verify)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"权限",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.authority)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"积分",width:"auto",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.score)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{border:"none"},style:"管理员"==t.row.authority?"background-color:#e6a23c;":"background-color:#5daf34;",attrs:{size:"mini",type:"primary"},on:{click:function(a){e.desingManager(t.$index,t.row)}}},[e._v("\n            "+e._s("管理员"==t.row.authority?"取消管理员":"设为管理员")+"\n          ")])]}}])})],1),e._v(" "),0!=this.res.total?a("el-pagination",{ref:"pagination",staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":this.res.per_page,total:this.res.total,"current-page":this.res.current_page},on:{"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]};var u=a("vSla")(o,c,!1,function(e){a("xX9S")},"data-v-505d4107",null);t.default=u.exports},"qU+9":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.header .el-input[data-v-505d4107] {\n  width: 20%;\n}\n.el-select[data-v-505d4107] {\n  display: inline-block;\n  position: relative;\n  margin-right: 0.5rem;\n}\n.pagination[data-v-505d4107] {\n  text-align: right;\n  margin-top: 2rem;\n}\n",""])},xX9S:function(e,t,a){var n=a("qU+9");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("1cce707e",n,!0)}});