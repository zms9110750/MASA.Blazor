var e,t;class s{constructor(t,s,n){e.add(this),this.instance=echarts.init(t,s,n),window.addEventListener("resize",(()=>{this.instance.resize()})),this.observer=new IntersectionObserver((e=>{e.some((e=>e.isIntersecting))&&this.instance.resize()})),this.observer.observe(this.instance.getDom())}setDotNetObjectReference(s,n){this.dotNetHelper=s,n.forEach((s=>function(e,t,s,n){if("a"===s&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?n:"a"===s?n.call(e):n?n.value:t.get(e)}(this,e,"m",t).call(this,s)))}getOriginInstance(){return this.instance}setOption(e,t=!1,s=!1){this.instance.setOption(e,t,s)}resize(e){this.instance.resize(e)}dispose(){this.instance.isDisposed()||(this.observer.disconnect(),this.instance.dispose())}}function n(e,t,n){try{return new s(e,t,n)}catch(e){console.error(e.message)}}e=new WeakSet,t=function(e){this.instance.on(e,(t=>{const{componentType:s,seriesType:n,seriesIndex:i,seriesName:r,name:a,dataIndex:o,data:c,dataType:d,value:h,color:p}=t;this.dotNetHelper.invokeMethodAsync("OnEvent",e,"globalout"===e?null:{componentType:s,seriesType:n,seriesIndex:i,seriesName:r,name:a,dataIndex:o,data:c,dataType:d,value:Array.isArray(h)?h:[h],color:p})}))};export{n as init};
//# sourceMappingURL=echarts-proxy.js.map
