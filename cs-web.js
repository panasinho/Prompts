(()=>{const e=!1,s="_actors_ifdt";let t=globalThis[s];(()=>{if(t)return;const o={};t=function s(t){const i={},n=new Proxy(t,{get:(a,r)=>"assign"===r?e=>{Object.assign(n,e)}:(r in t||(t[r]={},i[r]=s(t[r]),t===o&&e&&(globalThis[r]=t[r])),r in i?i[r]:t[r]),set:(s,n,a)=>(t[n]=a,i[n]=a,t===o&&e&&(globalThis[n]=t[n]),!0)});return n}(o),globalThis[s]=t,e&&(globalThis.app=o)})(),(()=>{const{$startup:e}=t;e.webController={init(){this._actors=new Set(["welcome","hframe"]),this._propagateEvents()},_propagateEvents(){window.addEventListener("message",(({data:e})=>{this._isAllowed(e)&&chrome.runtime.sendMessage(e)})),chrome.runtime.onMessage.addListener((e=>{this._isAllowed(e)&&window.postMessage({...e,__processed:!0},"*")}))},_isAllowed(e){return!(!e||!e.type||e.__processed)&&this._actors.has(e.type.split(".")[0])}},e.webController.init()})()})();