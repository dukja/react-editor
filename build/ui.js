(()=>{var j=Object.defineProperty,Me=Object.defineProperties,Ne=Object.getOwnPropertyDescriptor,He=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertyNames,$=Object.getOwnPropertySymbols;var no=Object.prototype.hasOwnProperty,Co=Object.prototype.propertyIsEnumerable;var ko=(o,e,r)=>e in o?j(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,k=(o,e)=>{for(var r in e||(e={}))no.call(e,r)&&ko(o,r,e[r]);if($)for(var r of $(e))Co.call(e,r)&&ko(o,r,e[r]);return o},C=(o,e)=>Me(o,He(e));var w=(o,e)=>{var r={};for(var n in o)no.call(o,n)&&e.indexOf(n)<0&&(r[n]=o[n]);if(o!=null&&$)for(var n of $(o))e.indexOf(n)<0&&Co.call(o,n)&&(r[n]=o[n]);return r};var b=(o,e)=>()=>(o&&(e=o(o=0)),e);var Be=(o,e)=>{for(var r in e)j(o,r,{get:e[r],enumerable:!0})},ze=(o,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of De(e))!no.call(o,i)&&i!==r&&j(o,i,{get:()=>e[i],enumerable:!(n=Ne(e,i))||n.enumerable});return o};var Re=o=>ze(j({},"__esModule",{value:!0}),o);var wo=b(()=>{if(document.getElementById("a0e06b1873")===null){let o=document.createElement("style");o.id="a0e06b1873",o.textContent="code[class*=language-],pre[class*=language-]{word-wrap:normal;background:none;color:#000;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;font-size:1em;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;text-align:left;text-shadow:0 1px #fff;white-space:pre;word-break:normal;word-spacing:normal}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{background:#b3d4fc;text-shadow:none}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{background:#b3d4fc;text-shadow:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{margin:.5em 0;overflow:auto;padding:1em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{border-radius:.3em;padding:.1em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{background:hsla(0,0%,100%,.5);color:#9a6e3a}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}",document.head.append(o)}});function N(o,e){for(var r in e)o[r]=e[r];return o}function Do(o){var e=o.parentNode;e&&e.removeChild(o)}function x(o,e,r){var n,i,a,l={};for(a in e)a=="key"?n=e[a]:a=="ref"?i=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?Z.call(arguments,2):r),typeof o=="function"&&o.defaultProps!=null)for(a in o.defaultProps)l[a]===void 0&&(l[a]=o.defaultProps[a]);return q(o,l,n,i,null)}function q(o,e,r,n,i){var a={type:o,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++Mo:i};return i==null&&f.vnode!=null&&f.vnode(a),a}function Q(o){return o.children}function K(o,e){this.props=o,this.context=e}function U(o,e){if(e==null)return o.__?U(o.__,o.__.__k.indexOf(o)+1):null;for(var r;e<o.__k.length;e++)if((r=o.__k[e])!=null&&r.__e!=null)return r.__e;return typeof o.type=="function"?U(o):null}function Bo(o){var e,r;if((o=o.__)!=null&&o.__c!=null){for(o.__e=o.__c.base=null,e=0;e<o.__k.length;e++)if((r=o.__k[e])!=null&&r.__e!=null){o.__e=o.__c.base=r.__e;break}return Bo(o)}}function Ao(o){(!o.__d&&(o.__d=!0)&&D.push(o)&&!Y.__r++||Lo!==f.debounceRendering)&&((Lo=f.debounceRendering)||No)(Y)}function Y(){var o,e,r,n,i,a,l,s;for(D.sort(ao);o=D.shift();)o.__d&&(e=D.length,n=void 0,i=void 0,l=(a=(r=o).__v).__e,(s=r.__P)&&(n=[],(i=N({},a)).__v=a.__v+1,io(s,a,i,r.__n,s.ownerSVGElement!==void 0,a.__h!=null?[l]:null,n,l==null?U(a):l,a.__h),Vo(n,a),a.__e!=l&&Bo(a)),D.length>e&&D.sort(ao));Y.__r=0}function zo(o,e,r,n,i,a,l,s,p,u){var t,g,_,c,d,A,h,y=n&&n.__k||Ho,v=y.length;for(r.__k=[],t=0;t<e.length;t++)if((c=r.__k[t]=(c=e[t])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?q(null,c,null,null,c):Array.isArray(c)?q(Q,{children:c},null,null,null):c.__b>0?q(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=r,c.__b=r.__b+1,(_=y[t])===null||_&&c.key==_.key&&c.type===_.type)y[t]=void 0;else for(g=0;g<v;g++){if((_=y[g])&&c.key==_.key&&c.type===_.type){y[g]=void 0;break}_=null}io(o,c,_=_||X,i,a,l,s,p,u),d=c.__e,(g=c.ref)&&_.ref!=g&&(h||(h=[]),_.ref&&h.push(_.ref,null,c),h.push(g,c.__c||d,c)),d!=null?(A==null&&(A=d),typeof c.type=="function"&&c.__k===_.__k?c.__d=p=Ro(c,p,o):p=Uo(o,c,_,y,d,p),typeof r.type=="function"&&(r.__d=p)):p&&_.__e==p&&p.parentNode!=o&&(p=U(_))}for(r.__e=A,t=v;t--;)y[t]!=null&&(typeof r.type=="function"&&y[t].__e!=null&&y[t].__e==r.__d&&(r.__d=Fo(n).nextSibling),Wo(y[t],y[t]));if(h)for(t=0;t<h.length;t++)Po(h[t],h[++t],h[++t])}function Ro(o,e,r){for(var n,i=o.__k,a=0;i&&a<i.length;a++)(n=i[a])&&(n.__=o,e=typeof n.type=="function"?Ro(n,e,r):Uo(r,n,n,i,n.__e,e));return e}function Uo(o,e,r,n,i,a){var l,s,p;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(r==null||i!=a||i.parentNode==null)o:if(a==null||a.parentNode!==o)o.appendChild(i),l=null;else{for(s=a,p=0;(s=s.nextSibling)&&p<n.length;p+=1)if(s==i)break o;o.insertBefore(i,a),l=a}return l!==void 0?l:i.nextSibling}function Fo(o){var e,r,n;if(o.type==null||typeof o.type=="string")return o.__e;if(o.__k){for(e=o.__k.length-1;e>=0;e--)if((r=o.__k[e])&&(n=Fo(r)))return n}return null}function Pe(o,e,r,n,i){var a;for(a in r)a==="children"||a==="key"||a in e||J(o,a,null,r[a],n);for(a in e)i&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||r[a]===e[a]||J(o,a,e[a],r[a],n)}function Eo(o,e,r){e[0]==="-"?o.setProperty(e,r==null?"":r):o[e]=r==null?"":typeof r!="number"||Ve.test(e)?r:r+"px"}function J(o,e,r,n,i){var a;o:if(e==="style")if(typeof r=="string")o.style.cssText=r;else{if(typeof n=="string"&&(o.style.cssText=n=""),n)for(e in n)r&&e in r||Eo(o.style,e,"");if(r)for(e in r)n&&r[e]===n[e]||Eo(o.style,e,r[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in o?e.toLowerCase().slice(2):e.slice(2),o.l||(o.l={}),o.l[e+a]=r,r?n||o.addEventListener(e,a?To:So,a):o.removeEventListener(e,a?To:So,a);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in o)try{o[e]=r==null?"":r;break o}catch(l){}typeof r=="function"||(r==null||r===!1&&e[4]!=="-"?o.removeAttribute(e):o.setAttribute(e,r))}}function So(o){return this.l[o.type+!1](f.event?f.event(o):o)}function To(o){return this.l[o.type+!0](f.event?f.event(o):o)}function io(o,e,r,n,i,a,l,s,p){var u,t,g,_,c,d,A,h,y,v,B,H,O,z,R,m=e.type;if(e.constructor!==void 0)return null;r.__h!=null&&(p=r.__h,s=e.__e=r.__e,e.__h=null,a=[s]),(u=f.__b)&&u(e);try{o:if(typeof m=="function"){if(h=e.props,y=(u=m.contextType)&&n[u.__c],v=u?y?y.props.value:u.__:n,r.__c?A=(t=e.__c=r.__c).__=t.__E:("prototype"in m&&m.prototype.render?e.__c=t=new m(h,v):(e.__c=t=new K(h,v),t.constructor=m,t.render=Ge),y&&y.sub(t),t.props=h,t.state||(t.state={}),t.context=v,t.__n=n,g=t.__d=!0,t.__h=[],t._sb=[]),t.__s==null&&(t.__s=t.state),m.getDerivedStateFromProps!=null&&(t.__s==t.state&&(t.__s=N({},t.__s)),N(t.__s,m.getDerivedStateFromProps(h,t.__s))),_=t.props,c=t.state,t.__v=e,g)m.getDerivedStateFromProps==null&&t.componentWillMount!=null&&t.componentWillMount(),t.componentDidMount!=null&&t.__h.push(t.componentDidMount);else{if(m.getDerivedStateFromProps==null&&h!==_&&t.componentWillReceiveProps!=null&&t.componentWillReceiveProps(h,v),!t.__e&&t.shouldComponentUpdate!=null&&t.shouldComponentUpdate(h,t.__s,v)===!1||e.__v===r.__v){for(e.__v!==r.__v&&(t.props=h,t.state=t.__s,t.__d=!1),t.__e=!1,e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(E){E&&(E.__=e)}),B=0;B<t._sb.length;B++)t.__h.push(t._sb[B]);t._sb=[],t.__h.length&&l.push(t);break o}t.componentWillUpdate!=null&&t.componentWillUpdate(h,t.__s,v),t.componentDidUpdate!=null&&t.__h.push(function(){t.componentDidUpdate(_,c,d)})}if(t.context=v,t.props=h,t.__P=o,H=f.__r,O=0,"prototype"in m&&m.prototype.render){for(t.state=t.__s,t.__d=!1,H&&H(e),u=t.render(t.props,t.state,t.context),z=0;z<t._sb.length;z++)t.__h.push(t._sb[z]);t._sb=[]}else do t.__d=!1,H&&H(e),u=t.render(t.props,t.state,t.context),t.state=t.__s;while(t.__d&&++O<25);t.state=t.__s,t.getChildContext!=null&&(n=N(N({},n),t.getChildContext())),g||t.getSnapshotBeforeUpdate==null||(d=t.getSnapshotBeforeUpdate(_,c)),R=u!=null&&u.type===Q&&u.key==null?u.props.children:u,zo(o,Array.isArray(R)?R:[R],e,r,n,i,a,l,s,p),t.base=e.__e,e.__h=null,t.__h.length&&l.push(t),A&&(t.__E=t.__=null),t.__e=!1}else a==null&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=We(r.__e,e,r,n,i,a,l,p);(u=f.diffed)&&u(e)}catch(E){e.__v=null,(p||a!=null)&&(e.__e=s,e.__h=!!p,a[a.indexOf(s)]=null),f.__e(E,e,r)}}function Vo(o,e){f.__c&&f.__c(e,o),o.some(function(r){try{o=r.__h,r.__h=[],o.some(function(n){n.call(r)})}catch(n){f.__e(n,r.__v)}})}function We(o,e,r,n,i,a,l,s){var p,u,t,g=r.props,_=e.props,c=e.type,d=0;if(c==="svg"&&(i=!0),a!=null){for(;d<a.length;d++)if((p=a[d])&&"setAttribute"in p==!!c&&(c?p.localName===c:p.nodeType===3)){o=p,a[d]=null;break}}if(o==null){if(c===null)return document.createTextNode(_);o=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,_.is&&_),a=null,s=!1}if(c===null)g===_||s&&o.data===_||(o.data=_);else{if(a=a&&Z.call(o.childNodes),u=(g=r.props||X).dangerouslySetInnerHTML,t=_.dangerouslySetInnerHTML,!s){if(a!=null)for(g={},d=0;d<o.attributes.length;d++)g[o.attributes[d].name]=o.attributes[d].value;(t||u)&&(t&&(u&&t.__html==u.__html||t.__html===o.innerHTML)||(o.innerHTML=t&&t.__html||""))}if(Pe(o,_,g,i,s),t)e.__k=[];else if(d=e.props.children,zo(o,Array.isArray(d)?d:[d],e,r,n,i&&c!=="foreignObject",a,l,a?a[0]:r.__k&&U(r,0),s),a!=null)for(d=a.length;d--;)a[d]!=null&&Do(a[d]);s||("value"in _&&(d=_.value)!==void 0&&(d!==o.value||c==="progress"&&!d||c==="option"&&d!==g.value)&&J(o,"value",d,g.value,!1),"checked"in _&&(d=_.checked)!==void 0&&d!==o.checked&&J(o,"checked",d,g.checked,!1))}return o}function Po(o,e,r){try{typeof o=="function"?o(e):o.current=e}catch(n){f.__e(n,r)}}function Wo(o,e,r){var n,i;if(f.unmount&&f.unmount(o),(n=o.ref)&&(n.current&&n.current!==o.__e||Po(n,null,e)),(n=o.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){f.__e(a,e)}n.base=n.__P=null,o.__c=void 0}if(n=o.__k)for(i=0;i<n.length;i++)n[i]&&Wo(n[i],e,r||typeof o.type!="function");r||o.__e==null||Do(o.__e),o.__=o.__e=o.__d=void 0}function Ge(o,e,r){return this.constructor(o,r)}function Go(o,e,r){var n,i,a;f.__&&f.__(o,e),i=(n=typeof r=="function")?null:r&&r.__k||e.__k,a=[],io(e,o=(!n&&r||e).__k=x(Q,null,[o]),i||X,X,e.ownerSVGElement!==void 0,!n&&r?[r]:i?null:e.firstChild?Z.call(e.childNodes):null,a,!n&&r?r:i?i.__e:e.firstChild,n),Vo(a,o)}var Z,f,Mo,Ue,D,Lo,No,ao,Fe,X,Ho,Ve,S=b(()=>{X={},Ho=[],Ve=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;Z=Ho.slice,f={__e:function(o,e,r,n){for(var i,a,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(o)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(o,n||{}),l=i.__d),l)return i.__E=i}catch(s){o=s}throw o}},Mo=0,Ue=function(o){return o!=null&&o.constructor===void 0},K.prototype.setState=function(o,e){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=N({},this.state),typeof o=="function"&&(o=o(N({},r),this.props)),o&&N(r,o),o!=null&&this.__v&&(e&&this._sb.push(e),Ao(this))},K.prototype.forceUpdate=function(o){this.__v&&(this.__e=!0,o&&this.__h.push(o),Ao(this))},K.prototype.render=Q,D=[],No=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ao=function(o,e){return o.__v.__b-e.__v.__b},Y.__r=0,Fe=0});function oo(o){return o.filter(function(e){return e!==null}).join(" ")}var co=b(()=>{});function Zo(o,e){f.__h&&f.__h(I,o,F||e),F=0;var r=I.__H||(I.__H={__:[],__h:[]});return o>=r.__.length&&r.__.push({__V:eo}),r.__[o]}function V(o){return F=1,Oe(oe,o)}function Oe(o,e,r){var n=Zo(fo++,2);if(n.t=o,!n.__c&&(n.__=[r?r(e):oe(void 0,e),function(s){var p=n.__N?n.__N[0]:n.__[0],u=n.t(p,s);p!==u&&(n.__N=[u,n.__[1]],n.__c.setState({}))}],n.__c=I,!I.u)){var i=function(s,p,u){if(!n.__c.__H)return!0;var t=n.__c.__H.__.filter(function(_){return _.__c});if(t.every(function(_){return!_.__N}))return!a||a.call(this,s,p,u);var g=!1;return t.forEach(function(_){if(_.__N){var c=_.__[0];_.__=_.__N,_.__N=void 0,c!==_.__[0]&&(g=!0)}}),!(!g&&n.__c.props===s)&&(!a||a.call(this,s,p,u))};I.u=!0;var a=I.shouldComponentUpdate,l=I.componentWillUpdate;I.componentWillUpdate=function(s,p,u){if(this.__e){var t=a;a=void 0,i(s,p,u),a=t}l&&l.call(this,s,p,u)},I.shouldComponentUpdate=i}return n.__N||n.__}function so(o){return F=5,Qo(function(){return{current:o}},[])}function Qo(o,e){var r=Zo(fo++,7);return qe(r.__H,e)?(r.__V=o(),r.i=e,r.__h=o,r.__V):r.__}function L(o,e){return F=8,Qo(function(){return o},e)}function $e(){for(var o;o=Jo.shift();)if(o.__P&&o.__H)try{o.__H.__h.forEach(ro),o.__H.__h.forEach(lo),o.__H.__h=[]}catch(e){o.__H.__h=[],f.__e(e,o.__v)}}function je(o){var e,r=function(){clearTimeout(n),Yo&&cancelAnimationFrame(e),setTimeout(o)},n=setTimeout(r,100);Yo&&(e=requestAnimationFrame(r))}function ro(o){var e=I,r=o.__c;typeof r=="function"&&(o.__c=void 0,r()),I=e}function lo(o){var e=I;o.__c=o.__(),I=e}function qe(o,e){return!o||o.length!==e.length||e.some(function(r,n){return r!==o[n]})}function oe(o,e){return typeof e=="function"?e(o):e}var fo,I,_o,Oo,F,Jo,eo,$o,jo,qo,Ko,Xo,Yo,to=b(()=>{S();F=0,Jo=[],eo=[],$o=f.__b,jo=f.__r,qo=f.diffed,Ko=f.__c,Xo=f.unmount;f.__b=function(o){I=null,$o&&$o(o)},f.__r=function(o){jo&&jo(o),fo=0;var e=(I=o.__c).__H;e&&(_o===I?(e.__h=[],I.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=eo,r.__N=r.i=void 0})):(e.__h.forEach(ro),e.__h.forEach(lo),e.__h=[])),_o=I},f.diffed=function(o){qo&&qo(o);var e=o.__c;e&&e.__H&&(e.__H.__h.length&&(Jo.push(e)!==1&&Oo===f.requestAnimationFrame||((Oo=f.requestAnimationFrame)||je)($e)),e.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==eo&&(r.__=r.__V),r.i=void 0,r.__V=eo})),_o=I=null},f.__c=function(o,e){e.some(function(r){try{r.__h.forEach(ro),r.__h=r.__h.filter(function(n){return!n.__||lo(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],f.__e(n,r.__v)}}),Ko&&Ko(o,e)},f.unmount=function(o){Xo&&Xo(o);var e,r=o.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ro(n)}catch(i){e=i}}),r.__H=void 0,e&&f.__e(e,r.__v))};Yo=typeof requestAnimationFrame=="function"});var po,ee=b(()=>{if(document.getElementById("b9615e5029")===null){let o=document.createElement("style");o.id="b9615e5029",o.textContent="._loadingIndicator_pl5c3_1{height:16px;margin:0 auto;position:relative;width:16px}._svg_pl5c3_8{fill:currentColor;animation:_rotating_pl5c3_1 .5s linear infinite;height:16px;left:0;position:absolute;top:0;width:16px}@keyframes _rotating_pl5c3_1{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",document.head.append(o)}po={loadingIndicator:"_loadingIndicator_pl5c3_1",svg:"_svg_pl5c3_8",rotating:"_rotating_pl5c3_1"}});function re(r){var n=r,{color:o}=n,e=w(n,["color"]);return x("div",C(k({},e),{class:po.loadingIndicator}),x("svg",{class:po.svg,style:typeof o>"u"?void 0:{fill:`var(--figma-color-icon-${o})`}},x("path",{d:"M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z"})))}var te=b(()=>{S();ee()});var T,ne=b(()=>{if(document.getElementById("c1a8651386")===null){let o=document.createElement("style");o.id="c1a8651386",o.textContent="._button_5fxgc_1{display:inline-block;position:relative;z-index:var(--z-index-1)}._fullWidth_5fxgc_7{display:block}._button_5fxgc_1 button{border-radius:var(--border-radius-6);display:inline-block;height:32px}._disabled_5fxgc_17 button{cursor:not-allowed}._fullWidth_5fxgc_7 button{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}._default_5fxgc_29 button{background-color:var(--figma-color-bg-brand);border:2px solid transparent;color:var(--figma-color-text-onbrand);line-height:28px;padding:0 14px}._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong)}._default_5fxgc_29._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 button{background-color:var(--figma-color-bg-danger);color:var(--figma-color-text-ondanger)}._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._secondary_5fxgc_56 button{background-color:transparent;border:1px solid var(--figma-color-border-strong);color:var(--figma-color-text);line-height:30px;padding:0 15px}._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong);border-width:2px;line-height:28px;padding:0 14px}._secondary_5fxgc_56._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 button{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44 button,._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._loadingIndicator_5fxgc_86{left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%)}._default_5fxgc_29 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-onbrand)}._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondanger)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text)}._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._children_5fxgc_122{display:inline}._loading_5fxgc_86 ._children_5fxgc_122{visibility:hidden}",document.head.append(o)}T={button:"_button_5fxgc_1",fullWidth:"_fullWidth_5fxgc_7",disabled:"_disabled_5fxgc_17",default:"_default_5fxgc_29",danger:"_danger_5fxgc_44",secondary:"_secondary_5fxgc_56",loadingIndicator:"_loadingIndicator_5fxgc_86",children:"_children_5fxgc_122",loading:"_loading_5fxgc_86"}});function uo(u){var t=u,{children:o,danger:e=!1,disabled:r=!1,fullWidth:n=!1,loading:i=!1,onClick:a,propagateEscapeKeyDown:l=!0,secondary:s=!1}=t,p=w(t,["children","danger","disabled","fullWidth","loading","onClick","propagateEscapeKeyDown","secondary"]);let g=L(function(_){_.key==="Escape"&&(l===!1&&_.stopPropagation(),_.currentTarget.blur())},[l]);return x("div",{class:oo([T.button,s===!0?T.secondary:T.default,e===!0?T.danger:null,n===!0?T.fullWidth:null,r===!0?T.disabled:null,i===!0?T.loading:null])},i===!0?x("div",{class:T.loadingIndicator},x(re,null)):null,x("button",C(k({},p),{disabled:r===!0,onClick:r===!0||i===!0?void 0:a,onKeyDown:r===!0||i===!0?void 0:g,tabIndex:r===!0?-1:0}),x("div",{class:T.children},o)))}var ae=b(()=>{S();to();co();te();ne()});function ie(o){if(o.current===null)throw new Error("`ref.current` is `undefined`");return o.current}var ce=b(()=>{});function _e(o,e){for(let r in mo)mo[r].name===o&&mo[r].handler.apply(null,e)}var mo,xo,le=b(()=>{mo={},xo=typeof window>"u"?function(o,...e){figma.ui.postMessage([o,...e])}:function(o,...e){window.parent.postMessage({pluginMessage:[o,...e]},"*")};typeof window>"u"?figma.ui.onmessage=function([o,...e]){_e(o,e)}:window.onmessage=function(o){if(typeof o.data.pluginMessage>"u")return;let[e,...r]=o.data.pluginMessage;_e(e,r)}});var P,fe=b(()=>{P="999999999999999"});var go=b(()=>{le();fe()});function se(o){return o===32||o>=48&&o<=57||o>=65&&o<=90||o>=96&&o<=105||o>=186&&o<=192||o>=219&&o<=222}var pe=b(()=>{});function de(_){var c=_,{disabled:o=!1,name:e,onInput:r=function(){},onValueInput:n=function(){},password:i=!1,placeholder:a,propagateEscapeKeyDown:l=!0,revertOnEscapeKeyDown:s=!1,spellCheck:p=!1,validateOnBlur:u,value:t}=c,g=w(c,["disabled","name","onInput","onValueInput","password","placeholder","propagateEscapeKeyDown","revertOnEscapeKeyDown","spellCheck","validateOnBlur","value"]);let d=so(null),A=so(!1),[h,y]=V(W),v=L(function(m){let E=ie(d);E.value=m;let vo=document.createEvent("Event");vo.initEvent("input",!0,!0),E.dispatchEvent(vo)},[]),B=L(function(){if(A.current===!0){A.current=!1;return}if(typeof u<"u"){let m=u(t);if(typeof m=="string"){v(m),y(W);return}if(m===!1){t!==h&&v(h),y(W);return}}y(W)},[h,v,u,t]),H=L(function(m){y(t),m.currentTarget.select()},[t]),O=L(function(m){n(m.currentTarget.value,e),r(m)},[e,r,n]),z=L(function(m){let E=m.key;if(E==="Escape"){l===!1&&m.stopPropagation(),s===!0&&(A.current=!0,v(h),y(W)),m.currentTarget.blur();return}if(E==="Enter"){m.currentTarget.blur();return}t===P&&se(m.keyCode)===!1&&(m.preventDefault(),m.currentTarget.select())},[h,l,s,v,t]),R=L(function(m){t===P&&m.preventDefault()},[t]);return x("input",C(k({},g),{ref:d,disabled:o===!0,name:e,onBlur:B,onFocus:H,onInput:O,onKeyDown:z,onMouseUp:R,placeholder:a,spellcheck:p,tabIndex:o===!0?-1:0,type:i===!0?"password":"text",value:t===P?"Mixed":t}))}var W,ue=b(()=>{go();S();to();ce();pe();W=""});var M,me=b(()=>{if(document.getElementById("7cd93ff1cb")===null){let o=document.createElement("style");o.id="7cd93ff1cb",o.textContent="._textbox_sir3b_1{position:relative;z-index:var(--z-index-1)}._textbox_sir3b_1:focus-within{z-index:var(--z-index-2)}._input_sir3b_9{background-color:transparent;color:var(--figma-color-text);display:block;height:28px;padding:0 var(--space-extra-small);width:100%}._disabled_sir3b_17 ._input_sir3b_9{color:var(--figma-color-text-disabled);cursor:not-allowed}._hasIcon_sir3b_21 ._input_sir3b_9{padding-left:32px}._input_sir3b_9::placeholder{color:var(--figma-color-text-tertiary)}._icon_sir3b_29{color:var(--figma-color-icon-secondary);left:16px;pointer-events:none;position:absolute;text-align:center;top:14px;transform:translate(-50%,-50%)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._icon_sir3b_29{color:var(--figma-color-icon-brand)}._disabled_sir3b_17 ._icon_sir3b_29{color:var(--figma-color-icon-disabled)}._icon_sir3b_29 svg{fill:currentColor}._border_sir3b_49{border:1px solid transparent;border-radius:var(--border-radius-2);bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:0}._hasBorder_sir3b_59 ._border_sir3b_49,._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49{border-color:var(--figma-color-border)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._border_sir3b_49{border-color:var(--figma-color-border-brand-strong);border-width:2px;bottom:-1px;top:-1px}._underline_sir3b_70{background-color:var(--figma-color-border);bottom:0;height:1px;left:var(--space-extra-small);position:absolute;right:var(--space-extra-small)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._underline_sir3b_70,._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70{background-color:transparent}",document.head.append(o)}M={textbox:"_textbox_sir3b_1",input:"_input_sir3b_9",disabled:"_disabled_sir3b_17",hasIcon:"_hasIcon_sir3b_21",icon:"_icon_sir3b_29",border:"_border_sir3b_49",hasBorder:"_hasBorder_sir3b_59",underline:"_underline_sir3b_70"}});function ho(n){var i=n,{icon:o,variant:e}=i,r=w(i,["icon","variant"]);if(typeof o=="string"&&o.length!==1)throw new Error(`String \`icon\` must be a single character: ${o}`);return x("div",{class:oo([M.textbox,typeof e>"u"?null:e==="border"?M.hasBorder:null,typeof o>"u"?null:M.hasIcon,r.disabled===!0?M.disabled:null])},x(de,C(k({},r),{class:M.input})),typeof o>"u"?null:x("div",{class:M.icon},o),x("div",{class:M.border}),e==="underline"?x("div",{class:M.underline}):null)}var xe=b(()=>{S();co();ue();me()});var ge,he=b(()=>{if(document.getElementById("a97ec47088")===null){let o=document.createElement("style");o.id="a97ec47088",o.textContent="._extraSmall_1oe77_1{padding:0 var(--space-extra-small)}._small_1oe77_4{padding:0 var(--space-small)}._medium_1oe77_7{padding:0 var(--space-medium)}._large_1oe77_10{padding:0 var(--space-large)}._extraLarge_1oe77_13{padding:0 var(--space-extra-large)}",document.head.append(o)}ge={extraSmall:"_extraSmall_1oe77_1",small:"_small_1oe77_4",medium:"_medium_1oe77_7",large:"_large_1oe77_10",extraLarge:"_extraLarge_1oe77_13"}});function bo(r){var n=r,{space:o}=n,e=w(n,["space"]);return x("div",C(k({},e),{class:ge[o]}))}var be=b(()=>{S();he()});var ye,Ie=b(()=>{if(document.getElementById("95ef4dd6c9")===null){let o=document.createElement("style");o.id="95ef4dd6c9",o.textContent="._extraSmall_zc4n0_1{height:var(--space-extra-small)}._small_zc4n0_4{height:var(--space-small)}._medium_zc4n0_7{height:var(--space-medium)}._large_zc4n0_10{height:var(--space-large)}._extraLarge_zc4n0_13{height:var(--space-extra-large)}",document.head.append(o)}ye={extraSmall:"_extraSmall_zc4n0_1",small:"_small_zc4n0_4",medium:"_medium_zc4n0_7",large:"_large_zc4n0_10",extraLarge:"_extraLarge_zc4n0_13"}});function G(r){var n=r,{space:o}=n,e=w(n,["space"]);return x("div",C(k({},e),{class:ye[o]}))}var ve=b(()=>{S();Ie()});var ke=b(()=>{if(document.getElementById("6d44deba85")===null){let o=document.createElement("style");o.id="6d44deba85",o.textContent='@import url("https://fonts.googleapis.com/css?family=Inter:400,600&display=swap");:root{--border-radius-2:2px;--border-radius-6:6px;--box-shadow:var(--box-shadow-menu);--box-shadow-menu:0 5px 17px rgba(0,0,0,.2),0 2px 7px rgba(0,0,0,.15),inset 0 0 0 0.5px #000,0 0 0 0.5px rgba(0,0,0,.1);--box-shadow-modal:0 2px 14px rgba(0,0,0,.15),0 0 0 0.5px rgba(0,0,0,.2);--font-family:"Inter","Helvetica",sans-serif;--font-family-code:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--font-size-11:11px;--font-size-12:12px;--font-weight-regular:400;--font-weight-bold:600;--line-height-16:16px;--opacity-30:0.3;--space-extra-small:8px;--space-small:12px;--space-medium:16px;--space-large:20px;--space-extra-large:24px;--z-index-1:1;--z-index-2:2}.figma-dark{color-scheme:dark}*{border:0 solid;box-sizing:border-box}body{background-color:var(--figma-color-bg);color:var(--figma-color-text);font-family:var(--font-family);font-size:var(--font-size-11);font-weight:var(--font-weight-regular);line-height:var(--line-height-16);margin:0}div,span{cursor:default;user-select:none}h1,h2,h3{font-weight:inherit;margin:0}button{-webkit-appearance:none;background-color:transparent;border:0;font:inherit;outline:0;padding:0}hr{border:0;margin:0}label{display:block}input,textarea{-webkit-appearance:none;border:0;cursor:default;font:inherit;margin:0;outline:0;padding:0}svg{display:block}::selection{background-color:var(--figma-color-bg-onselected)}',document.head.prepend(o)}});function yo(o){return function(e,r){Go(x(o,k({},r)),e)}}var Ce=b(()=>{ke();S()});var we=b(()=>{ae();xe();be();ve();Ce()});var Le,Ae=b(()=>{if(document.getElementById("5e507dcbeb")===null){let o=document.createElement("style");o.id="5e507dcbeb",o.textContent="._container_txkyy_1{height:164px;overflow:auto}._editor_txkyy_6{font-family:var(--font-family-code);font-size:var(--font-size-12);min-height:100%}",document.head.append(o)}Le={container:"_container_txkyy_1",editor:"_editor_txkyy_6"}});var Ee={};Be(Ee,{default:()=>Xe});function Ke(){let[o,e]=V(`function add(a, b) {
  return a + b;
}`),[r,n]=V("forWhatEverYouWant"),i=L(function(){xo("INSERT_CODE",o)},[o]);return x(bo,{space:"medium"},x(G,{space:"small"}),x("div",{class:Le.container},x(ho,{name:"text",onValueInput:n,value:r,variant:"border"})),x(G,{space:"large"}),x(uo,{fullWidth:!0,onClick:i},"Insert Code"),x(G,{space:"small"}))}var Xe,Se=b(()=>{"use strict";wo();we();go();S();to();Ae();Xe=yo(Ke)});var Ye=document.getElementById("create-figma-plugin"),Te={"src/main.ts--default":(Se(),Re(Ee)).default},Io=__FIGMA_COMMAND__===""?"src/main.ts--default":__FIGMA_COMMAND__;if(typeof Te[Io]>"u")throw new Error("No UI defined for command `"+Io+"`");Te[Io](Ye,__SHOW_UI_DATA__);})();