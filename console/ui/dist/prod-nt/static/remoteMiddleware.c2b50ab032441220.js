"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[521],{6749:(p,o,r)=>{r.r(o),r.d(o,{remoteMiddlewares:()=>w});var s=r(1635),E=r(1292),P=r(9328),_=r(4221);function w(d,O,D){var l;return(0,s.sH)(this,void 0,void 0,function(){var c,u,m,f,b=this;return(0,s.YH)(this,function(v){switch(v.label){case 0:return(0,E.S)()?[2,[]]:(c=(0,_.YM)(),u=null!==(l=O.enabledMiddleware)&&void 0!==l?l:{},m=Object.entries(u).filter(function(n){return n[1]}).map(function(n){return n[0]}),f=m.map(function(n){return(0,s.sH)(b,void 0,void 0,function(){var e,t,M,h;return(0,s.YH)(this,function(a){switch(a.label){case 0:e=n.replace("@segment/",""),t=e,D&&(t=btoa(e).replace(/=/g,"")),M="".concat(c,"/middleware/").concat(t,"/latest/").concat(t,".js.gz"),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,(0,P.k)(M)];case 2:return a.sent(),[2,window["".concat(e,"Middleware")]];case 3:return h=a.sent(),d.log("error",h),d.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}})})}),[4,Promise.all(f)]);case 1:return[2,v.sent().filter(Boolean)]}})})}}}]);