webpackJsonp([1],{0:function(e,t,n){e.exports=n("NHnr")},"1/oy":function(e,t){},"7X33":function(e,t){},"9M+g":function(e,t){},EZog:function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},LMjS:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("y9m4");var i=n("4bK6"),a=n.n(i),l={name:"aLogo",props:{router:{type:Boolean,required:!1,default:!0},linkTo:{type:String,required:!1,default:"/"},src:{type:String,required:!1,default:"../../assets/logo.png"},alt:{type:String,required:!1,default:"Aileron Airways"}}},o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[!0===e.router?i("router-link",{attrs:{to:e.linkTo}},[i("img",{attrs:{src:n("iQH9"),alt:e.alt}})]):i("a",{attrs:{href:"link"}},[i("img",{attrs:{src:n("iQH9"),alt:e.alt}})])],1)},s=[],r=n("XyMi");function c(e){n("ywOJ")}var d=!1,u=c,m="data-v-6038cb86",h=null,f=Object(r["a"])(l,o,s,d,u,m,h),p=f.exports,T={name:"aSearch",data:function(){return{searchValue:""}},props:{placeholder:{type:String,required:!1,default:"Search..."}},methods:{search:function(){this.$emit("searched",this.searchValue)}}},v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("span",[n("i",{staticClass:"material-icons icon",on:{click:e.search}},[e._v("search")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.searchValue},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),n("i",{staticClass:"material-icons arrow-down"},[e._v("arrow_drop_down")])])])},g=[];function b(e){n("EZog")}var w=!1,y=b,_="data-v-0941f99e",k=null,C=Object(r["a"])(T,v,g,w,y,_,k),E=C.exports,S={name:"aHeader",components:{aLogo:p,aSearch:E},data:function(){return{searchValue:""}},methods:{search:function(e){console.log(e)}}},x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"header",attrs:{"align-v":"start"}},[n("b-col",{attrs:{md:"6"}},[n("a-logo")],1),n("b-col",{attrs:{md:"6","align-self":"center"}},[n("a-search",{on:{searched:e.search}})],1)],1)},I=[];function $(e){n("7X33")}var M=!1,D=$,O=null,H=null,V=Object(r["a"])(S,x,I,M,D,O,H),K=V.exports,q={name:"app",components:{aHeader:K}},j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{id:"app",fluid:""}},[n("a-header"),n("router-view")],1)},Z=[];function A(e){n("Q6DT")}var R=!1,B=A,N=null,W=null,L=Object(r["a"])(q,j,Z,R,B,N,W),Q=L.exports,F=n("e6fC"),z=n("/ocq"),Y=n("NYxO"),G=(n("Jmt5"),n("9M+g"),n("mtWM")),P=n.n(G),X=(n("VjuZ"),{name:"aSelectionHandler",props:{selectCount:{type:Number,required:!0}},methods:{del:function(){this.$emit("del")},cancel:function(){this.$emit("cancel")}}}),J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectCount>0?n("b-row",{staticClass:"selection-handler"},[n("b-col",{attrs:{lg:"8","offset-lg":"2",md:"10","offset-md":"1"}},[n("h2",[e._v(e._s(e.selectCount)+" timeline"),this.selectCount>1?n("span",[e._v("s")]):e._e(),e._v(" selected")]),n("b-btn",{attrs:{variant:"delete"},on:{click:e.del}},[e._v("Delete")]),n("b-btn",{attrs:{variant:"cancel"},on:{click:e.cancel}},[e._v("Cancel")])],1)],1):e._e()},U=[];function ee(e){n("WrUh")}var te=!1,ne=ee,ie="data-v-0f454466",ae=null,le=Object(r["a"])(X,J,U,te,ne,ie,ae),oe=le.exports;function se(e){var t=621355968e9,n=e-t,i=n/1e4,a=new Date(i);return a.toLocaleDateString()}var re=[{key:"title",sortable:!0},{key:"date",sortable:!0,formatter:"dateFormatter"}],ce={},de={by:"date",desc:!1};function ue(e,t){de.by=e,de.desc=t}function me(){de.by="",de.desc=""}function he(e){e.selected=!0,e._rowVariant="select",ce=e}function fe(e){e.selected=!1,e._rowVariant=""}function pe(e){var t=e.replace(/\s/g,"");return t.length>=5}var Te={name:"aRegister",components:{aSelectionHandler:oe},data:function(){return{fields:re,sort:de,newTimelineTitle:"",showTitleWarning:!1,modal:!1,modalTitle:"",modalType:""}},computed:{timelines:function(){return this.$store.state.timelines},selectCount:function(){return this.$store.getters.selectedTimelines.length}},methods:{clearSelected:function(){for(var e=0;e<this.$store.state.timelines.length;e++){var t=this.$store.state.timelines[e];t.selected=!1,t._rowVariant=""}},selectBetweenRows:function(e){for(var t=this.$store.state.timelines,n=t.indexOf(ce),i=Math.min(e,n);i<Math.max(e,n);i++)t[i].selected=!0,t[i]._rowVariant="select"},cancel:function(){this.clearSelected()},sortChanged:function(e){e.sortBy===de.by&&!1===e.sortDesc&&!0===de.desc?me():ue(e.sortBy,e.sortDesc)},rowClicked:function(e,t,n){e.selected?n.ctrlKey?fe(e):n.shiftKey||(this.selectCount>1?(this.clearSelected(this),he(e)):fe(e)):n.ctrlKey?he(e):n.shiftKey?(this.selectCount>0&&this.selectBetweenRows(t),he(e)):(this.selectCount>0&&this.clearSelected(),he(e))},openTimeline:function(e){sessionStorage.setItem("timelineId",e.id),this.$router.push({name:"TIMELINE"})},dateFormatter:function(e){return se(e)},createTimeline:function(){if(!pe(this.newTimelineTitle))return document.getElementById("titleInput").focus(),void(this.showTitleWarning=!0);this.closeModal(),this.$store.dispatch("createTimeline",this.newTimelineTitle)},deleteTimeline:function(){var e=this;this.closeModal(),this.$store.dispatch("deleteSelectedTimelines").then(function(){e.selectCount=0})},changeTitle:function(){alert("edited")},checkTitleInput:function(){!0===this.showTitleWarning&&pe(this.newTimelineTitle)&&(this.showTitleWarning=!1)},openModal:function(e){this.modal=!0,this.modalType=e},closeModal:function(){this.modal=!this.modal},modalOpened:function(){"createTimeline"===this.modalType?(document.getElementById("titleInput").focus(),this.modalTitle="Create"):"deleteTimeline"===this.modalType?this.modalTitle="Delete":"editTimeline"===this.modalType&&(document.getElementById("titleInput").focus(),this.modalTitle="Edit")},modalClosed:function(){"createTimeline"!==this.modalType&&"editTimeline"!==this.modalType||(this.newTimelineTitle="",this.showTitleWarning=!1),this.modalType="",this.modalTitle=""}}},ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"register",attrs:{"align-v":"center"}},[n("b-col"),n("b-col",{attrs:{md:"11"}},[n("b-btn",{staticClass:"btn-round",staticStyle:{float:"right"},attrs:{variant:"create"},on:{click:function(t){e.openModal("createTimeline")}}},[e._v("+")]),n("b-table",{ref:"table",attrs:{items:e.timelines,"bordered:false":"","sort-by":e.sort.by,"sort-desc":e.sort.desc,fields:e.fields,id:"my-table"},on:{"update:sortBy":function(t){e.$set(e.sort,"by",t)},"update:sortDesc":function(t){e.$set(e.sort,"desc",t)},"row-clicked":e.rowClicked,"sort-changed":e.sortChanged,"row-dblclicked":e.openTimeline}})],1),n("b-col")],1),n("a-selection-handler",{attrs:{"select-count":e.selectCount},on:{del:function(t){e.openModal("deleteTimeline")},cancel:e.cancel}}),n("b-modal",{attrs:{title:e.modalTitle},on:{shown:e.modalOpened,hidden:e.modalClosed},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",["createTimeline"===e.modalType?n("b-col",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTimelineTitle,expression:"newTimelineTitle"}],attrs:{type:"text",placeholder:"Enter title",id:"titleInput"},domProps:{value:e.newTimelineTitle},on:{keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.createTimeline(t)},e.checkTitleInput],input:function(t){t.target.composing||(e.newTimelineTitle=t.target.value)}}}),n("b-alert",{attrs:{variant:"danger",show:e.showTitleWarning}},[e._v("Title must be at least 5 characters long")])],1):"deleteTimeline"===e.modalType?n("b-col",[n("p",[e._v("\n            Are you sure you wish to delete selected timelines?\n          ")])]):"editTimeline"===e.modalType?n("b-col",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTimelineTitle,expression:"newTimelineTitle"}],attrs:{type:"text",placeholder:"Enter new title",id:"titleInput"},domProps:{value:e.newTimelineTitle},on:{keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.changeTitle(t)},e.checkTitleInput],input:function(t){t.target.composing||(e.newTimelineTitle=t.target.value)}}}),n("b-alert",{attrs:{variant:"danger",show:e.showTitleWarning}},[e._v("Title must be at least 5 characters long")])],1):e._e()],1)],1),n("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[n("b-btn",{staticClass:"float-left",on:{click:e.closeModal}},[e._v("CANCEL")]),"createTimeline"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.createTimeline}},[e._v("CREATE")]):"deleteTimeline"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.deleteTimeline}},[e._v("DELETE")]):"editTimeline"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.changeTitle}},[e._v("SAVE")]):e._e()],1)],1)],1)},ge=[];function be(e){n("LMjS")}var we=!1,ye=be,_e=null,ke=null,Ce=Object(r["a"])(Te,ve,ge,we,ye,_e,ke),Ee=Ce.exports,Se={name:"aTimeline",data:function(){return{}},methods:{back:function(){this.$router.push({name:"REGISTER"})},openModal:function(){alert("new")}}},xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline"},[n("b-row",{staticClass:"head",attrs:{"align-v":"start"}},[n("b-col",[n("b-btn",{attrs:{variant:"select"},on:{click:e.back}},[e._v("Back")])],1),n("b-col",[n("span",{staticClass:"timeline-details"})]),n("b-col",[n("b-btn",{staticStyle:{float:"right"},attrs:{variant:"create"},on:{click:e.openModal}},[e._v("Create new event")])],1)],1),n("b-row")],1)},Ie=[];function $e(e){n("e/tk")}var Me=!1,De=$e,Oe="data-v-30775cce",He=null,Ve=Object(r["a"])(Se,xe,Ie,Me,De,Oe,He),Ke=Ve.exports;a.a.use(F["a"]),a.a.use(z["a"]),a.a.use(Y["a"]),a.a.config.productionTip=!1;var qe=[];function je(){qe.splice(0,qe.length),P.a.get("https://b0qss3eydk.execute-api.eu-west-2.amazonaws.com/aileron/GetAllTimelinesAndEvents",{headers:{"X-Api-Key":"zQfYRHZ1vY3GFnvDZep8Z5KqlHsOKxgf1vnldchF"}}).then(function(e){for(var t=0;t<e.data.length;t++){var n=e.data[t],i={title:n.Title,date:n.CreationTimeStamp,isDeleted:n.isDeleted,id:n.Id,selected:!1,_rowVariant:""};qe.push(i)}}).catch(function(e){console.log(e)})}je();var Ze=new Y["a"].Store({state:{timelines:qe},mutations:{addTimeline:function(e,t){e.timelines.push(t)},removeTimeline:function(e,t){for(var n=0;n<e.timelines.length;n++)if(e.timelines[n].id===t)return void e.timelines.splice(n,1)}},getters:{selectedTimelines:function(e){return e.timelines.filter(function(e){return e.selected})}},actions:{createTimeline:function(e,t){var n=e.commit;P.a.put("https://b0qss3eydk.execute-api.eu-west-2.amazonaws.com/aileron/CreateTimeline",{Title:t},{headers:{"X-Api-Key":"zQfYRHZ1vY3GFnvDZep8Z5KqlHsOKxgf1vnldchF"}}).then(function(e){var t=e.data,i={title:t.Title,date:t.CreationTimeStamp,isDeleted:t.isDeleted,id:t.Id,selected:!1,_rowVariant:""};n("addTimeline",i)}).catch(function(e){console.log(e)})},deleteTimeline:function(e,t){var n=e.commit;return new Promise(function(e,i){P.a.put("https://b0qss3eydk.execute-api.eu-west-2.amazonaws.com/aileron/DeleteTimeline",{TimelineId:t},{headers:{"X-Api-Key":"zQfYRHZ1vY3GFnvDZep8Z5KqlHsOKxgf1vnldchF"}}).then(function(){n("removeTimeline",t),e()}).catch(function(e){console.log(e),i()})})},deleteSelectedTimelines:function(e){var t=this,n=e.state;return new Promise(function(e){for(var i=n.timelines.length-1;i>=0;i--){var a=n.timelines[i];!0===a.selected&&t.dispatch("deleteTimeline",a.id)}e()})}}}),Ae=[{name:"REGISTER",path:"/",component:Ee},{name:"TIMELINE",path:"/timeline",component:Ke}],Re=new z["a"]({mode:"history",routes:Ae});new a.a({render:function(e){return e(Q)},router:Re,store:Ze}).$mount("#app")},Q6DT:function(e,t){},WrUh:function(e,t){},"e/tk":function(e,t){},iQH9:function(e,t,n){e.exports=n.p+"img/logo.2847cb02.png"},ywOJ:function(e,t){},zj2Q:function(e,t){}},[0]);
//# sourceMappingURL=app.fe6b55d9.js.map