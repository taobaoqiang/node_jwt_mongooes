webpackJsonp([9],{FD6k:function(e,t,i){var a=i("JNYC");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("8bSs")("0b4b9784",a,!0)},JNYC:function(e,t,i){(e.exports=i("BkJT")(!1)).push([e.i,"\n.header .el-input[data-v-76933bee] {\n  width: 20%;\n}\n.pagination[data-v-76933bee] {\n  text-align: right;\n  margin-top: 2rem;\n}\n",""])},MQC3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Y8t/"),n=i("YrpF"),o=i("5VXh"),r=(i("ceg5"),i("fYdz"),i("+AKB"),{components:{list:n.a},data:function(){return{listLoading:!0,topBar:[{name:"新增",class:"",type:"success",keys:[],fun:this.newRole},{name:"搜索",key:"username",searchTipCon:"请输入搜索账号名称"}],canSelect:!0,indexBar:{name:"序号",key:"auto",width:"60"},thead:[{name:"账号名称",key:"username",width:""},{name:"所属社区",key:"community_name",width:""}],update:0,actionBar:[{name:"编辑",fun:this.edit,type:"success"},{name:"删除",fun:this.delete,type:"danger"}],showDialog:!1,dialogTitle:"",dialogType:"",addForm:{name:"",pwd:"",communitySelect:"",roleSelect:""},rules:{name:[{required:!0,message:"请输入账号",trigger:"blur"},{min:2,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],communitySelect:[{required:!0,message:"请选择社区",trigger:"change"}]},roleList:[],communityList:[],community_id:"",username:"",url:"/account?type=1"}},created:function(){this.init()},activated:function(){this.init()},methods:{init:function(){var e=this;a.a.get("/role").then(function(t){0==t.code&&(e.roleList=t.data.data)}),a.a.get("/community").then(function(t){0==t.code&&(e.communityList=t.data)}),this.storage.getStorage("uinfo").length>1?(this.community_id=JSON.parse(this.storage.getStorage("uinfo")).community_id,this.username=JSON.parse(this.storage.getStorage("uinfo")).username):(this.community_id=-1,this.disableComm=!1),this.url="admin"==this.username?"/account?type=1":"/account?type=1&community_id="+this.community_id},newRole:function(e,t){this.showDialog=!0,this.dialogTitle="新增账号",this.dialogType="new",this.initForm()},edit:function(e,t){this.showDialog=!0,this.dialogTitle="编辑账号",this.dialogType="edit",this.addForm.name=t.username,this.addForm.id=t.id,this.addForm.communitySelect=t.community_id,this.addForm.pwd=t.password},delete:function(e,t){var i=this;o.MessageBox.confirm("您确定删除此账号吗？","删除账号",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.sendData("/account/"+t.id,"","delete",function(e){0==e.code&&(Object(o.Message)({message:"删除成功！！！",duration:1500}),i.update++)})})},resetAddForm:function(e,t){this.showDialog=!1,this.initForm()},initForm:function(){this.addForm.name="",this.addForm.id="",this.addForm.communitySelect=this.community_id,this.addForm.pwd=""},submitAddForm:function(e,t){var i=this,a=this,n="get",r=this.urls.account;this.$refs[e].validate(function(e){e&&("new"==t?n="post":"edit"==t&&(n="put",r=r+"/"+a.addForm.id),a.sendData(r,{type:1,username:a.addForm.name,password:a.addForm.pwd,role_id:a.addForm.roleSelect,community_id:a.addForm.communitySelect},n,function(e){0==e.code&&(Object(o.Message)({message:"new"==t?"新增成功！！！":"修改成功！！！",type:"success",duration:1500}),i.showDialog=!1,i.initForm(),i.update++)}))})},sendData:function(e,t,i,n){a.a.http(e,t,i).then(function(e){"function"==typeof n&&n(e)})}}}),s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("list",{attrs:{url:e.URL+e.url,update:e.update,topBar:e.topBar,canSelect:e.canSelect,indexBar:e.indexBar,thead:e.thead,actionBar:e.actionBar}}),e._v(" "),i("el-dialog",{attrs:{title:e.dialogTitle,dialogType:e.dialogType,visible:e.showDialog,center:""},on:{"update:visible":function(t){e.showDialog=t}}},[i("el-form",{ref:"addForm",staticClass:"demo-ruleForm",attrs:{model:e.addForm,rules:e.rules,"label-width":"100px"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:16}},[i("el-form-item",{attrs:{label:"账号",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入3-20位的账号"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[i("el-input",{attrs:{type:"password",placeholder:"请输入6-20位密码"},model:{value:e.addForm.pwd,callback:function(t){e.$set(e.addForm,"pwd",t)},expression:"addForm.pwd"}})],1)],1)],1),e._v(" "),"admin"==e.username?i("el-form-item",{attrs:{label:"设置社区",prop:"communitySelect"}},[i("el-select",{attrs:{placeholder:"请选择社区"},model:{value:e.addForm.communitySelect,callback:function(t){e.$set(e.addForm,"communitySelect",t)},expression:"addForm.communitySelect"}},e._l(e.communityList,function(e){return i("el-option",{key:e.id,attrs:{label:e.community_name,value:e.id}})}))],1):e._e(),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitAddForm("addForm",e.dialogType)}}},[e._v("确定")]),e._v(" "),i("el-button",{on:{click:function(t){e.resetAddForm("addForm")}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var d=i("vSla")(r,s,!1,function(e){i("FD6k")},"data-v-76933bee",null);t.default=d.exports}});