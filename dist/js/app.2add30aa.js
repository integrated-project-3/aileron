webpackJsonp([1],{0:function(e,t,n){e.exports=n("NHnr")},"1/oy":function(e,t){},"3rfi":function(e,t){},"7X33":function(e,t){},"8+OR":function(e,t){},"9M+g":function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},K3KA:function(e,t){},LMjS:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("y9m4");var i=n("4bK6"),l=n.n(i),a={name:"aLogo",props:{router:{type:Boolean,required:!1,default:!0},linkTo:{type:String,required:!1,default:"/"},src:{type:String,required:!1,default:"../../assets/logo.png"},alt:{type:String,required:!1,default:"Aileron Airways"}}},s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[!0===e.router?i("router-link",{attrs:{to:e.linkTo}},[i("img",{attrs:{src:n("iQH9"),alt:e.alt}})]):i("a",{attrs:{href:"link"}},[i("img",{attrs:{src:n("iQH9"),alt:e.alt}})])],1)},o=[],r=n("XyMi");function c(e){n("3rfi")}var d=!1,u=c,m="data-v-610a0461",f=null,v=Object(r["a"])(a,s,o,d,u,m,f),h=v.exports,T={name:"aSearch",data:function(){return{searchValue:""}},props:{placeholder:{type:String,required:!1,default:"Search..."}},methods:{search:function(){this.$emit("searched",this.searchValue)}}},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("span",[n("i",{staticClass:"material-icons icon",on:{click:e.search}},[e._v("search")]),n("ais-index",{attrs:{"app-id":"latency","api-key":"3d9875e51fbd20c7754e65422f7ce5e1","index-name":"bestbuy"}},[n("ais-search-box")],1),n("i",{staticClass:"material-icons arrow-down"},[e._v("arrow_drop_down")])],1)])},E=[];function b(e){n("Xqw0")}var g=!1,w=b,I="data-v-e3e577f0",y=null,k=Object(r["a"])(T,p,E,g,w,I,y),_=k.exports,D={name:"aHeader",components:{aLogo:h,aSearch:_},data:function(){return{searchValue:""}},methods:{search:function(e){console.log(e)}}},C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"header",attrs:{"align-v":"start"}},[n("b-col",{attrs:{md:"6"}},[n("a-logo")],1),n("b-col",{attrs:{md:"6","align-self":"center"}},[n("a-search",{on:{searched:e.search}})],1)],1)},x=[];function S(e){n("7X33")}var A=!1,L=S,M=null,$=null,O=Object(r["a"])(D,C,x,A,L,M,$),B=O.exports,j={name:"app",components:{aHeader:B}},W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",{attrs:{id:"app",fluid:""}},[n("a-header"),n("router-view")],1)},R=[];function N(e){n("Q6DT")}var V=!1,q=N,K=null,H=null,F=Object(r["a"])(j,W,R,V,q,K,H),X=F.exports,P=n("e6fC"),Q=n("/ocq"),G=(n("Jmt5"),n("9M+g"),n("NYxO")),J=n("424j"),Y={name:"aSelectionHandler",props:{selectCount:{type:Number,required:!0}},methods:{del:function(){this.$emit("del")},cancel:function(){this.$emit("cancel")},edit:function(){this.$emit("edit")}}},z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectCount>0?n("b-row",{staticClass:"selection-handler"},[n("b-col",{attrs:{lg:"8","offset-lg":"2",md:"10","offset-md":"1"}},[n("h2",[e._v(e._s(e.selectCount)+" timeline"),this.selectCount>1?n("span",[e._v("s")]):e._e(),e._v(" selected")]),n("b-btn",{attrs:{variant:"delete"},on:{click:e.del}},[e._v("Delete")]),n("b-btn",{attrs:{variant:"cancel"},on:{click:e.cancel}},[e._v("Cancel")]),1===e.selectCount?n("b-btn",{attrs:{variant:"info"},on:{click:e.edit}},[e._v("Edit")]):e._e()],1)],1):e._e()},U=[];function Z(e){n("jpRo")}var ee=!1,te=Z,ne="data-v-7b8ee518",ie=null,le=Object(r["a"])(Y,z,U,ee,te,ne,ie),ae=le.exports;n("uDYd"),n("VjuZ");function se(e){var t=621355968e9,n=e-t,i=n/1e4,l=new Date(i);return l.toLocaleDateString()}function oe(e){return 16===e.length?e.substring(11,17):"Time not available"}function re(e){if(16===e.length){var t=e.substr(8,2),n=e.substr(5,2),i=e.substr(0,4);return t+"/"+n+"/"+i}return"Date not available"}function ce(e){var t=e.replace(/\s/g,"");return t.length>=5}function de(e){for(var t=e.filter(function(e){return"n/a"!=e.EventDateTime}),n=e.diff(t),i=t.sort(function(e,t){return e=new Date(e.EventDateTime),t=new Date(t.EventDateTime),e-t}),l=0;l<n.length;l++){var a=i.map(function(e){if(null!=e.LinkedTimelineEventIds)return e.LinkedTimelineEventIds[0]}).indexOf(n[l].Id)+1;0===a&&(a=i.map(function(e){return e.Id}).indexOf(n[l].LinkedTimelineEventIds[0])),i.splice(a,0,n[l])}return i}Array.prototype.diff=function(e){return this.filter(function(t){return e.indexOf(t)<0})};var ue=[{key:"title",sortable:!0},{key:"date",sortable:!0,formatter:"formatDate"}],me={by:"date",desc:!1};function fe(e,t){me.by=e,me.desc=t}function ve(){me.by="",me.desc=""}var he={};function Te(e){e.selected=!0,e._rowVariant="select",he=e}function pe(e){e.selected=!1,e._rowVariant=""}var Ee={name:"aRegister",components:{aSelectionHandler:ae},data:function(){return{fields:ue,sort:me,newTimelineTitle:"",showTitleWarning:!1,modal:!1,modalTitle:"",modalType:"",formatDate:se}},computed:{timelines:function(){return this.$store.state.timelines},selectCount:function(){return this.$store.getters.selectedTimelines.length}},methods:{clearSelected:function(){for(var e=0;e<this.$store.state.timelines.length;e++){var t=this.$store.state.timelines[e];t.selected=!1,t._rowVariant=""}},selectBetweenRows:function(e){for(var t=this.$store.state.timelines,n=t.indexOf(he),i=Math.min(e,n);i<Math.max(e,n);i++)t[i].selected=!0,t[i]._rowVariant="select"},cancel:function(){this.clearSelected()},sortChanged:function(e){e.sortBy===me.by&&!1===e.sortDesc&&!0===me.desc?ve():fe(e.sortBy,e.sortDesc)},rowClicked:function(e,t,n){e.selected?n.ctrlKey?pe(e):n.shiftKey||(this.selectCount>1?(this.clearSelected(),Te(e)):pe(e)):n.ctrlKey?Te(e):n.shiftKey?(this.selectCount>0&&this.selectBetweenRows(t),Te(e)):(this.selectCount>0&&this.clearSelected(),Te(e))},openTimeline:function(e){this.$store.commit("setCurrentTimeline",e),this.$router.push({name:"TIMELINE"})},createTimeline:function(){var e=this;if(!ce(this.newTimelineTitle))return document.getElementById("titleInput").focus(),void(this.showTitleWarning=!0);this.closeModal(),this.$store.dispatch("createTimeline",this.newTimelineTitle).then(function(t){e.openTimeline(t)})},deleteTimeline:function(){this.closeModal(),this.$store.dispatch("deleteSelectedTimelines")},changeTitle:function(){if(!ce(this.newTimelineTitle))return document.getElementById("titleInput").focus(),void(this.showTitleWarning=!0);this.closeModal(),this.$store.dispatch("changeTimelineTitle",this.newTimelineTitle)},checkTitleInput:function(){!0===this.showTitleWarning&&ce(this.newTimelineTitle)&&(this.showTitleWarning=!1)},openModal:function(e){this.modal=!0,this.modalType=e},closeModal:function(){this.modal=!this.modal},modalOpened:function(){"createTimeline"===this.modalType?(document.getElementById("titleInput").focus(),this.modalTitle="Create"):"deleteTimeline"===this.modalType?this.modalTitle="Delete":"editTitle"===this.modalType&&(document.getElementById("titleInput").focus(),this.modalTitle="Edit")},modalClosed:function(){"createTimeline"!==this.modalType&&"editTitle"!==this.modalType||(this.clearSelected(),this.newTimelineTitle="",this.showTitleWarning=!1),this.modalType="",this.modalTitle=""}}},be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-row",{staticClass:"register",attrs:{"align-v":"center"}},[n("b-col"),n("b-col",{attrs:{md:"11"}},[n("b-btn",{staticClass:"btn-round",staticStyle:{float:"right"},attrs:{variant:"create"},on:{click:function(t){e.openModal("createTimeline")}}},[e._v("+")]),n("b-table",{attrs:{items:e.timelines,"bordered:false":"","sort-by":e.sort.by,"sort-desc":e.sort.desc,fields:e.fields},on:{"update:sortBy":function(t){e.$set(e.sort,"by",t)},"update:sortDesc":function(t){e.$set(e.sort,"desc",t)},"row-clicked":e.rowClicked,"sort-changed":e.sortChanged,"row-dblclicked":e.openTimeline}})],1),n("b-col")],1),n("a-selection-handler",{attrs:{"select-count":e.selectCount},on:{del:function(t){e.openModal("deleteTimeline")},cancel:e.cancel,edit:function(t){e.openModal("editTitle")}}}),n("b-modal",{attrs:{title:e.modalTitle},on:{shown:e.modalOpened,hidden:e.modalClosed},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",["createTimeline"===e.modalType?n("b-col",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTimelineTitle,expression:"newTimelineTitle"}],attrs:{type:"text",placeholder:"Enter title",id:"titleInput"},domProps:{value:e.newTimelineTitle},on:{keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.createTimeline(t)},e.checkTitleInput],input:function(t){t.target.composing||(e.newTimelineTitle=t.target.value)}}}),n("b-alert",{attrs:{variant:"danger",show:e.showTitleWarning}},[e._v("Title must be at least 5 characters long")])],1):"deleteTimeline"===e.modalType?n("b-col",[n("p",[e._v("\n            Are you sure you wish to delete selected timelines?\n          ")])]):"editTitle"===e.modalType?n("b-col",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newTimelineTitle,expression:"newTimelineTitle"}],attrs:{type:"text",placeholder:"Enter new title",id:"titleInput"},domProps:{value:e.newTimelineTitle},on:{keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.changeTitle(t)},e.checkTitleInput],input:function(t){t.target.composing||(e.newTimelineTitle=t.target.value)}}}),n("b-alert",{attrs:{variant:"danger",show:e.showTitleWarning}},[e._v("Title must be at least 5 characters long")])],1):e._e()],1)],1),n("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[n("b-btn",{staticClass:"float-left",on:{click:e.closeModal}},[e._v("CANCEL")]),"createTimeline"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.createTimeline}},[e._v("CREATE")]):"deleteTimeline"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.deleteTimeline}},[e._v("DELETE")]):"editTitle"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.changeTitle}},[e._v("SAVE")]):e._e()],1)],1)],1)},ge=[];function we(e){n("LMjS")}var Ie=!1,ye=we,ke=null,_e=null,De=Object(r["a"])(Ee,be,ge,Ie,ye,ke,_e),Ce=De.exports,xe=!1,Se=[],Ae=[],Le=[],Me=1,$e={name:"aEvents",data:function(){return{formatEventTime:oe,formatEventDate:re,scale:Me,selectedEvent:{Id:"",Title:"",EventDateTime:"",Description:"",IsDeleted:"",Location:"",LinkedTimelineEventIds:[],Attachments:[]}}},mounted:function(){var e=this,t=document.getElementById("slider");n("uN3R")(function(n,i,l,a){a.ctrlKey&&(a.preventDefault(),i>0&&e.scale>.2&&(e.scale-=.1),i<1.2&&(e.scale+=.1),t.style.transform="scale("+e.scale+")")})},computed:{sliderWidth:function(){return 375*this.events.length+"px"},eventsInOrder:function(){return de(this.events)},selectedTitle:function(){return null!=this.selectedEvent.Title?this.selectedEvent.Title:""},selectedTime:function(){return null!=this.selectedEvent.EventDateTime?oe(this.selectedEvent.EventDateTime):""},selectedDate:function(){return null!=this.selectedEvent.EventDateTime?re(this.selectedEvent.EventDateTime):""},selectedDescription:function(){return null!=this.selectedEvent.Description?this.selectedEvent.Description.substr(0,90)+"...":""}},props:{events:{type:Array,required:!0}},methods:{drag:function(e,t){"down"===t&&(xe=!0,Se=[e.clientX,e.clientY]),"up"===t&&(xe=!1),"drag"===t&&xe&&(Ae=[e.clientX,e.clientY],Le=[Ae[0]-Se[0],Ae[1]-Se[1]],e.srcElement.scrollLeft=e.srcElement.scrollLeft-Le[0]/10)},clickedTitle:function(e){if(e.srcElement.classList.contains("selected"))this.clearSelected();else{this.clearSelected(),e.srcElement.classList.add("selected"),this.selectedEvent=this.getEventFromId(e.srcElement.id);var t=e.srcElement.offsetLeft,n=document.getElementById("event-info");n.style.left=t+"px"}},clearSelected:function(){for(var e=document.getElementsByClassName("selected"),t=e.length-1;t>=0;t--)e[0].classList.remove("selected");this.selectedEvent={Id:"",Title:"",EventDateTime:"",Description:"",IsDeleted:"",Location:"",LinkedTimelineEventIds:[],Attachments:[]}},getEventFromId:function(e){return this.events.filter(function(t){return t.Id===e})[0]},editEventTitle:function(){},openEvent:function(){},deleteEvent:function(){},dateFromDateTime:function(e){return e.substr(0,10)},timeFromDateTime:function(e){return e.substr(11,16)}}},Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"events",attrs:{id:"container"},on:{mousedown:function(t){e.drag(t,"down")},mousemove:function(t){e.drag(t,"drag")},mouseup:function(t){e.drag(t,"up")}}},[n("div",{style:{width:e.sliderWidth},attrs:{id:"slider"}},[e._l(e.eventsInOrder,function(t,i){return n("div",{key:t.id,staticClass:"event"},[0===i||i===e.events.length-1?n("div",{staticClass:"time"},[n("p",[e._v(e._s(e.formatEventTime(t.EventDateTime)))])]):e._e(),n("div",{staticClass:"title",attrs:{id:t.Id},on:{click:function(t){e.clickedTitle(t)}}},[n("p",[e._v(e._s(t.Title))])]),i!=e.events.length-1?n("div",{attrs:{id:"h-line"}}):e._e(),0===i||i===e.events.length-1?n("div",{staticClass:"v-line",attrs:{id:"v-line-time"}}):e._e(),e.selectedEvent.Id===t.Id?n("div",{staticClass:"v-line",attrs:{id:"v-line-title"}}):e._e()])}),n("div",{staticClass:"info",attrs:{id:"event-info"}},[""!=e.selectedEvent.Id?n("div",[n("h2",[e._v(e._s(e.selectedTitle)),n("i",{staticClass:"material-icons icon",staticStyle:{"padding-left":"5px"}},[e._v("edit")])]),n("h4",[e._v(e._s(e.selectedTime)+" - "+e._s(e.selectedDate))]),n("p",[e._v("\n          "+e._s(e.selectedDescription)+"\n        ")]),n("b-btn",{attrs:{variant:"create"},on:{click:e.openEvent}},[e._v("More")]),n("b-btn",{staticStyle:{float:"right"},attrs:{variant:"delete"},on:{click:e.deleteEvent}},[e._v("Delete")])],1):e._e()])],2)])},Be=[];function je(e){n("8+OR")}var We=!1,Re=je,Ne=null,Ve=null,qe=Object(r["a"])($e,Oe,Be,We,Re,Ne,Ve),Ke=qe.exports,He={name:"aTimeline",data:function(){return{modal:!1,modalTitle:"",newEventTitle:"",showTitleWarning:!1,modalType:"",exactDateTime:!1,newEventDescription:"",beforeAfterSelect:null,beforeAfterOptions:[{value:null,text:"Before/After",disabled:!0},{value:"before",text:"Before"},{value:"after",text:"After"}],eventSelect:null,newEventDateTime:null}},components:{aEvents:Ke},computed:{timeline:function(){return this.$store.state.currentTimeline},title:function(){return this.timeline.title},date:function(){return se(this.timeline.date)},events:function(){return this.timeline.timelineEvents||[]},eventOptions:function(){for(var e=[{value:null,text:"Select an event",disabled:!0}],t=0;t<this.events.length;t++){var n={value:this.events[t].Id,text:this.events[t].Title};e.push(n)}return e},startTime:function(){return this.timeFromDateTime(this.events[0].EventDateTime)},endTime:function(){return this.timeFromDateTime(this.events[this.events.length-1].EventDateTime)}},methods:{back:function(){this.$router.push({name:"REGISTER"})},timeFromDateTime:function(e){return e.substring(11,16)},deleteTimeline:function(){this.closeModal(),this.$store.dispatch("deleteTimeline",this.timeline.id),this.$router.push({name:"REGISTER"})},openModal:function(e){this.modal=!0,this.modalType=e},closeModal:function(){this.modal=!this.modal},modalOpened:function(){"createEvent"===this.modalType?(document.getElementById("titleInput").focus(),this.modalTitle="Create"):"deleteTimeline"===this.modalType&&(this.modalTitle="Delete")},modalClosed:function(){"createEvent"===this.modalType&&(this.newEventTitle="",this.newEventDescription="",this.exactDateTime=!1,this.showTitleWarning=!1,this.beforeAfterSelect=null,this.eventSelect=null,this.newEventDateTime=null),this.modalType="",this.modalTitle=""},createEvent:function(){if(!ce(this.newEventTitle))return document.getElementById("titleInput").focus(),void(this.showTitleWarning=!0);if(this.exactDateTime){if(null===this.newEventDateTime){var e=document.getElementById("newEventDateTime");return e.focus(),void(e.style.border="1px solid red")}}else{if(null===this.beforeAfterSelect){var t=document.getElementById("beforeAfterSelect");return t.focus(),void(t.style.border="1px solid red")}if(null===this.eventSelect){var n=document.getElementById("eventSelect");return n.focus(),void(n.style.border="1px solid red")}}this.closeModal();var i={title:this.newEventTitle,description:this.newEventDescription};this.exactDateTime?(i.dateTime=this.newEventDateTime,this.$store.dispatch("createEventExact",i)):(i.beforeAfter=this.beforeAfterSelect,i.eventId=this.eventSelect,this.$store.dispatch("createEventBA",i))},checkTitleInput:function(){!0===this.showTitleWarning&&ce(this.newEventTitle)&&(this.showTitleWarning=!1)},checkInput:function(e){var t=document.getElementById(e);"1px solid red"===t.style.border&&(t.style.border="")}}},Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"timeline"},[n("b-row",{staticClass:"head",attrs:{"align-v":"start"}},[n("b-col",{attrs:{md:"2"}},[n("b-btn",{attrs:{variant:"select"},on:{click:e.back}},[e._v("Back")])],1),n("b-col",[n("span",{staticClass:"timeline-details"},[n("h1",[e._v(e._s(e.title)+" - "+e._s(e.date))])])]),n("b-col",{attrs:{md:"2"}},[n("b-btn",{staticStyle:{float:"right"},attrs:{variant:"create"},on:{click:function(t){e.openModal("createEvent")}}},[e._v("Create new event")])],1)],1),n("b-row",{staticClass:"events",attrs:{"align-v":"center"}},[n("a-events",{attrs:{events:e.events}})],1),n("b-row",{staticClass:"footer",attrs:{"align-v":"end"}},[n("b-col",{attrs:{md:"12"}},[n("b-btn",{attrs:{variant:"delete"},on:{click:function(t){e.openModal("deleteTimeline")}}},[e._v("Delete")])],1)],1)],1),n("b-modal",{attrs:{title:e.modalTitle,size:"lg"},on:{shown:e.modalOpened,hidden:e.modalClosed},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("b-container",{attrs:{fluid:""}},["createEvent"===e.modalType?n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-row",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEventTitle,expression:"newEventTitle"}],attrs:{type:"text",placeholder:"Enter title",id:"titleInput"},domProps:{value:e.newEventTitle},on:{keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.createEvent(t)},e.checkTitleInput],input:function(t){t.target.composing||(e.newEventTitle=t.target.value)}}}),n("b-alert",{attrs:{variant:"danger",show:e.showTitleWarning}},[e._v("Title must be at least 5 characters long")])],1),n("b-row",[n("b-form-textarea",{attrs:{id:"textarea1",placeholder:"Enter description",rows:3,"max-rows":8},model:{value:e.newEventDescription,callback:function(t){e.newEventDescription=t},expression:"newEventDescription"}})],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-row",{attrs:{id:"checkBoxCol"}},[n("b-form-checkbox",{attrs:{id:"exactDateTime"},model:{value:e.exactDateTime,callback:function(t){e.exactDateTime=t},expression:"exactDateTime"}},[e._v("Exact date and time")])],1),e.exactDateTime?e._e():n("b-row",[n("b-form-select",{staticClass:"mb-3",attrs:{options:e.beforeAfterOptions,id:"beforeAfterSelect"},on:{change:function(t){e.checkInput("beforeAfterSelect")}},model:{value:e.beforeAfterSelect,callback:function(t){e.beforeAfterSelect=t},expression:"beforeAfterSelect"}}),n("b-form-select",{staticClass:"mb-3",attrs:{options:e.eventOptions,id:"eventSelect"},on:{change:function(t){e.checkInput("eventSelect")}},model:{value:e.eventSelect,callback:function(t){e.eventSelect=t},expression:"eventSelect"}})],1),e.exactDateTime?n("b-row",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newEventDateTime,expression:"newEventDateTime"}],attrs:{type:"datetime-local",id:"newEventDateTime"},domProps:{value:e.newEventDateTime},on:{change:function(t){e.checkInput("newEventDateTime")},input:function(t){t.target.composing||(e.newEventDateTime=t.target.value)}}})]):e._e()],1)],1):"deleteTimeline"===e.modalType?n("b-row",[n("b-col",[n("p",[e._v("\n            Are you sure you wish to delete this timeline?\n          ")])])],1):e._e()],1),n("div",{staticClass:"w-100",attrs:{slot:"modal-footer"},slot:"modal-footer"},[n("b-btn",{staticClass:"float-left",on:{click:e.closeModal}},[e._v("CANCEL")]),"createEvent"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.createEvent}},[e._v("CREATE")]):"deleteTimeline"===e.modalType?n("b-btn",{staticClass:"float-right",on:{click:e.deleteTimeline}},[e._v("DELETE")]):e._e()],1)],1)],1)},Xe=[];function Pe(e){n("K3KA")}var Qe=!1,Ge=Pe,Je="data-v-2af9d534",Ye=null,ze=Object(r["a"])(He,Fe,Xe,Qe,Ge,Je,Ye),Ue=ze.exports,Ze=[{name:"REGISTER",path:"/",component:Ce},{name:"TIMELINE",path:"/timeline",component:Ue}],et=new Q["a"]({mode:"history",routes:Ze}),tt=et,nt=n("MdZJ"),it=n("mtWM"),lt=n.n(it);function at(){return st()+st()+"-"+st()+"-"+st()+"-"+st()+"-"+st()+st()+st()}function st(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function ot(){var e=lt.a.get("https://gcu.ideagen-development.com/Timeline/GetAllTimelinesAndEvent",{headers:{TenantId:"Team19",AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147"}}).catch(function(e){console.log(e)});return e}function rt(e){var t=lt.a.put("https://gcu.ideagen-development.com/Timeline/Create",{AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147",TenantId:"Team19",Title:e,TimelineId:at()}).catch(function(e){console.log(e)});return t}function ct(e){var t=lt.a.put("https://gcu.ideagen-development.com/Timeline/Delete",{AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147",TenantId:"Team19",TimelineId:e}).catch(function(e){console.log(e)});return t}function dt(e,t){var n=lt.a.put("https://gcu.ideagen-development.com/Timeline/EditTitle",{AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147",TenantId:"Team19",Title:t,TimelineId:e}).catch(function(e){console.log(e)});return n}function ut(e){var t=e.dateTime||"n/a",n=lt.a.put("https://gcu.ideagen-development.com/TimelineEvent/Create",{AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147",TenantId:"Team19",TimelineEventId:at(),Title:e.title,Description:e.description,EventDateTime:t}).catch(function(e){console.log(e)});return n}function mt(e,t){var n=lt.a.put("https://gcu.ideagen-development.com/Timeline/LinkEvent",{AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147",TenantId:"Team19",TimelineId:t,EventId:e}).catch(function(e){console.log(e)});return n}function ft(e,t){var n=lt.a.put("https://gcu.ideagen-development.com/TimelineEvent/LinkEvents",{AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147",TenantId:"Team19",TimelineEventId:e,LinkedToTimelineEventId:t}).catch(function(e){console.log(e)});return n}function vt(e,t){var n=lt.a.put("https://gcu.ideagen-development.com/TimelineEvent/UnlinkEvents",{AuthToken:"7cbc5c61-bcfa-47d8-a171-599616102147",TenantId:"Team19",TimelineEventId:e,UnlinkedFromTimelineEventId:t}).catch(function(e){console.log(e)});return n}l.a.use(P["a"]),l.a.use(Q["a"]),l.a.use(G["a"]),l.a.use(nt["a"]),l.a.config.productionTip=!1;var ht=[],Tt=new G["a"].Store({state:{timelines:ht,currentTimeline:null},mutations:{addTimeline:function(e,t){e.timelines.push(t)},addEvent:function(e,t){e.currentTimeline.timelineEvents.push(t)},removeTimeline:function(e,t){for(var n=0;n<e.timelines.length;n++)if(e.timelines[n].id===t)return void e.timelines.splice(n,1)},setCurrentTimeline:function(e,t){e.currentTimeline=t},updateTimelineTitle:function(e,t){for(var n=0;n<e.timelines.length;n++)if(e.timelines[n].id===t.id)return void(e.timelines[n].title=t.title)}},actions:{createTimeline:function(e,t){var n=e.commit;return new Promise(function(e){rt(t).then(function(t){var i=t.data,l={title:i.Title,date:i.CreationTimeStamp,isDeleted:i.IsDeleted,id:i.Id,selected:!1,_rowVariant:"",timelineEvents:[]};n("addTimeline",l),e(l)})})},deleteTimeline:function(e,t){var n=e.commit;ct(t).then(function(){n("removeTimeline",t)})},deleteSelectedTimelines:function(e){var t=e.state;t.timelines.filter(function(e){return e.selected}).forEach(function(e){this.dispatch("deleteTimeline",e.id)},this)},changeTimelineTitle:function(e,t){var n=e.commit,i=this.getters.selectedTimelines[0].id;dt(i,t).then(function(){n("updateTimelineTitle",{id:i,title:t})})},createEventExact:function(e,t){var n=e.state,i=e.commit,l={};ut(t).then(function(e){l=e.data,l.LinkedTimelineEventIds=[],mt(l.Id,n.currentTimeline.id).then(function(){i("addEvent",l)})})},createEventBA:function(e,t){var n=e.state,i=e.commit,l={};ut(t).then(function(e){l=e.data,mt(l.Id,n.currentTimeline.id).then(function(){if("before"===t.beforeAfter){var e=n.currentTimeline.timelineEvents.map(function(e){if(null!=e.LinkedTimelineEventIds&&null!=e.LinkedTimelineEventIds[0])return e.LinkedTimelineEventIds[0]}).indexOf(t.eventId);-1!=e&&(vt(n.currentTimeline.timelineEvents[e].Id,t.eventId),ft(n.currentTimeline.timelineEvents[e].Id,l.Id),n.currentTimeline.timelineEvents[e].LinkedTimelineEventIds[0]=l.Id),ft(l.Id,t.eventId).then(function(){l.LinkedTimelineEventIds=[],l.LinkedTimelineEventIds.push(t.eventId),i("addEvent",l)})}else if("after"===t.beforeAfter){var a=n.currentTimeline.timelineEvents.map(function(e){return e.Id}).indexOf(t.eventId),s=n.currentTimeline.timelineEvents[a];null!=s.LinkedTimelineEventIds&&null!=s.LinkedTimelineEventIds[0]&&(vt(s.Id,s.LinkedTimelineEventIds[0]),ft(l.Id,s.Id)),ft(s.Id,l.Id).then(function(){s.LinkedTimelineEventIds=[],s.LinkedTimelineEventIds.push(l.Id),i("addEvent",l)})}})})}},getters:{selectedTimelines:function(e){return e.timelines.filter(function(e){return e.selected})}},plugins:[Object(J["a"])({paths:["currentTimeline"]})]});new l.a({render:function(e){return e(X)},router:tt,store:Tt,methods:{fetchTimelines:function(){ht.splice(0,ht.length);var e=ot();e.then(function(e){for(var t=0;t<e.data.Timelines.length;t++){var n=e.data.Timelines[t],i={title:n.Title,date:n.CreationTimeStamp,isDeleted:n.isDeleted,id:n.Id,timelineEvents:n.TimelineEvents,selected:!1,_rowVariant:""};ht.push(i)}})}},mounted:function(){this.fetchTimelines()}}).$mount("#app")},Q6DT:function(e,t){},Xqw0:function(e,t){},iQH9:function(e,t,n){e.exports=n.p+"img/logo.2847cb02.png"},jpRo:function(e,t){},zj2Q:function(e,t){}},[0]);
//# sourceMappingURL=app.2add30aa.js.map