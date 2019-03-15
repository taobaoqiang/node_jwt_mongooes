webpackJsonp([14],{"4i4J":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Y8t/"),i=a("YrpF"),n=a("5VXh"),r=(a("ceg5"),a("fYdz"),a("+AKB"),{components:{list:i.a},data:function(){return{listLoading:!0,topBar:[{name:"新增",class:"",type:"success",keys:[],fun:this.newRole},{name:"搜索",key:"username",searchTipCon:"请输入搜索账号名称"}],canSelect:!0,indexBar:{name:"序号",key:"auto",width:"60"},thead:[{name:"账号名称",key:"username",width:""},{name:"所属社区",key:"community_name",width:""},{name:"角色",key:"role_name",width:""}],update:0,actionBar:[{name:"编辑",fun:this.edit,type:"success"},{name:"删除",fun:this.delete,type:"danger"}],showDialog:!1,dialogTitle:"",dialogType:"",addForm:{name:"",pwd:"",communitySelect:"",roleSelect:""},rules:{name:[{required:!0,message:"请输入账号",trigger:"blur"},{min:2,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],communitySelect:[{required:!0,message:"请选择社区",trigger:"change"}],roleSelect:[{required:!0,message:"请选择角色",trigger:"change"}]},roleList:[],communityList:[]}},created:function(){},activated:function(){var e=this;o.a.get(this.urls.role).then(function(t){0==t.code&&(e.roleList=t.data.data)}),o.a.get(this.urls.community).then(function(t){0==t.code&&(e.communityList=t.data)})},methods:{newRole:function(e,t){this.showDialog=!0,this.dialogTitle="新增账号",this.dialogType="new",this.initForm()},edit:function(e,t){this.showDialog=!0,this.dialogTitle="编辑账号",this.dialogType="edit",this.addForm.name=t.username,this.addForm.id=t.id,this.addForm.roleSelect=t.role_id,this.addForm.communitySelect=t.community_id,this.addForm.pwd=t.password},delete:function(e,t){var a=this;n.MessageBox.confirm("您确定删除此账号吗？","删除账号",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.sendData(a.urls.account+"/"+t.id,"","delete",function(e){0==e.code&&(Object(n.Message)({message:"删除成功！！！",duration:1500}),a.update++)})})},resetAddForm:function(e,t){this.showDialog=!1,this.initForm()},initForm:function(){this.addForm.name="",this.addForm.id="",this.addForm.communitySelect="",this.addForm.roleSelect="",this.addForm.pwd=""},submitAddForm:function(e,t){var a=this,o=this,i="get",r=this.urls.account;this.$refs[e].validate(function(e){e&&("new"==t?i="post":"edit"==t&&(i="put",r=a.urls.account+"/"+o.addForm.id),o.sendData(r,{type:2,username:o.addForm.name,password:o.addForm.pwd,role_id:o.addForm.roleSelect,community_id:o.addForm.communitySelect},i,function(e){console.log("res:::",e),0==e.code&&(Object(n.Message)({message:"new"==t?"新增成功！！！":"修改成功！！！",type:"success",duration:1500}),a.showDialog=!1,a.initForm(),a.update++)}))})},sendData:function(e,t,a,i){o.a.http(e,t,a).then(function(e){"function"==typeof i&&i(e)})}}}),d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("list",{attrs:{url:e.URL+"/account?type=2",update:e.update,topBar:e.topBar,canSelect:e.canSelect,indexBar:e.indexBar,thead:e.thead,actionBar:e.actionBar}}),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,dialogType:e.dialogType,visible:e.showDialog,center:""},on:{"update:visible":function(t){e.showDialog=t}}},[a("el-form",{ref:"addForm",staticClass:"demo-ruleForm",attrs:{model:e.addForm,rules:e.rules,"label-width":"100px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:"账号",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入3-20位的账号"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[a("el-input",{attrs:{placeholder:"请输入6-20位密码"},model:{value:e.addForm.pwd,callback:function(t){e.$set(e.addForm,"pwd",t)},expression:"addForm.pwd"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"设置社区",prop:"communitySelect"}},[a("el-select",{attrs:{placeholder:"请选择社区"},model:{value:e.addForm.communitySelect,callback:function(t){e.$set(e.addForm,"communitySelect",t)},expression:"addForm.communitySelect"}},e._l(e.communityList,function(e){return a("el-option",{key:e.id,attrs:{label:e.community_name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"设置角色",prop:"roleSelect"}},[a("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.addForm.roleSelect,callback:function(t){e.$set(e.addForm,"roleSelect",t)},expression:"addForm.roleSelect"}},e._l(e.roleList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitAddForm("addForm",e.dialogType)}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetAddForm("addForm")}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var l=a("vSla")(r,d,!1,function(e){a("Q+tI")},"data-v-38494ace",null);t.default=l.exports},KCvJ:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.header .el-input[data-v-38494ace] {\n  width: 20%;\n}\n.pagination[data-v-38494ace] {\n  text-align: right;\n  margin-top: 2rem;\n}\n",""])},"Q+tI":function(e,t,a){var o=a("KCvJ");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("8bSs")("fdb2ec5e",o,!0)}});