"use strict";var global=(()=>{var qt=Object.defineProperty;var l=(w,t)=>qt(w,"name",{value:t,configurable:!0}),pe=(w=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(w,{get:(t,a)=>(typeof require<"u"?require:t)[a]}):w)(function(w){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+w+'" is not supported')});var R=(w,t)=>()=>(t||w((t={exports:{}}).exports,t),t.exports);var Qe=R((Xt,Ie)=>{(function(w){"use strict";Package("org.qcobjects.i18n_messages",[l(class extends InheritClass{constructor({messages:a=[]}){super({messages:a}),CONFIG.get("use_i18n")&&(CONFIG.set("lang","en"),w.get("i18n")?w.set("i18n",{messages:w.get("i18n").messages.concat(a)}):w.set("i18n",{messages:a}))}_load_i18n_packages_(){return CONFIG.get("i18n_languages",[]).map(a=>{Import(`org.quickcorp.i18n_messages.${a}`)})}},"i18n_messages")]),new i18n_messages({})._load_i18n_packages_()}).call(null,typeof Ie=="object"&&typeof Ie.exports=="object"?Ie.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var et=R(()=>{(function(){"use strict";Package("org.qcobjects.models",[l(class extends VO{constructor({first_name:t="",last_name:a="",address:u="",postalCode:h="",city:m="",country:g="",email:y="",phone:v=""}){super({first_name:t,last_name:a,address:u,postalCode:h,city:m,country:g,email:y,phone:v})}},"Contact")])}).call(null)});var tt=R(()=>{"use strict";(function(){Package("org.qcobjects.base.components",[l(class extends Component{cached=!1;reload=!0;constructor(t){t.name=typeof t.name<"u"?t.name:"form-field",super(t)}createBindingEvents(){var t=this,a;typeof this.fieldType>"u"||this.fieldType==null?a=this.body.subelements("*[data-field]"):a=this.body.subelements(this.fieldType+"[data-field]");for(var u=0;u<a.length;u++){var h=a[u];h.addEventListener("change",function(m){logger.debug("Executing change event binding"),t.executeBindings(m)}),h.addEventListener("blur",function(m){logger.debug("Executing change event binding"),t.executeBindings(m)}),h.addEventListener("focus",function(m){logger.debug("Executing change event binding"),t.executeBindings(m)}),h.addEventListener("keydown",function(m){logger.debug("Executing keydown event binding"),t.executeBindings(m)})}}executeBinding(t){var a=t.getAttribute("data-field");logger.debug("Binding "+a+" for "+this.name),this.data[a]=t.value}executeBindings(){var t;typeof this.fieldType>"u"||this.fieldType==null?t=this.body.subelements("*[data-field]"):t=this.body.subelements(this.fieldType+"[data-field]");for(var a=0;a<t.length;a++){var u=t[a],h=u.getAttribute("data-field");logger.debug("Binding "+h+" for "+this.name),this.data[h]=u.value}}done(){super.done(...arguments);var t=this;t.executeBindings(),t.createBindingEvents(),logger.debug("Field loaded: "+t.fieldType+"[name="+t.name+"]")}},"FormField")]),Package("org.qcobjects.form.components",[l(class extends Component{container=null;body=null;shadowed=!0;cached=!1;controller=null;view=null;data={};constructor(t){t.body=_DOMCreateElement("div"),super(t)}},"ShadowedComponent"),l(class extends FormField{constructor(t){t.fieldType="button",super(t)}},"ButtonField"),l(class extends FormField{constructor(t){t.fieldType="input",super(t)}},"InputField"),l(class extends FormField{constructor(t){t.fieldType="textarea",super(t)}},"TextField"),l(class extends FormField{constructor(t){t.fieldType="input",super(t)}},"EmailField"),l(class extends Component{name="modalenclosure";tplsource="inline";cached=!1;basePath=CONFIG.get("modalBasePath",CONFIG.get("remoteSDKPath"));template=`
<!-- The Modal -->
<style>
@import url('https://sdk.qcobjects.dev/css/modal.css');
</style>
<div id="modalInstance_{{modalId}}" class="modal">

<!-- Modal content -->
<div class="modal-content">
<span class="close">&times;</span>
{{content}}
</div>

</div>
`;data={};constructor(t){t.body=_DOMCreateElement("div"),super(t)}},"ModalEnclosureComponent"),l(class extends Component{name="modal";cached=!1;modalEnclosureComponentClass="ModalEnclosureComponent";controller=null;view=null;tplsource="none";closeOnClickOutside=!1;data={content:"",modalId:0};submodal=null;constructor(t){t.basePath=CONFIG.get("modalBasePath",CONFIG.get("remoteSDKPath")),super(t),this.data.modalId=this.__instanceID;var a=New(ClassFactory(this.modalEnclosureComponentClass),{name:this.name,basePath:this.basePath,data:this.data});this.subcomponents.push(a),this.submodal=a,a.tplsource=="none"?this.body.innerHTML=a.parsedAssignmentText:this.body.append(a.body)}modal(){var t=this.data.modalId,a=this;Tag("#modalInstance_"+parseInt(t)+".modal").map(function(u){u.style.display="block",ModalFade.apply(u,0,1)}),Tag("#modalInstance_"+parseInt(t)+".modal .modal-content").map(function(u){ModalMoveDown.apply(u,0,-document.body.clientHeight,0,0)}),Tag("#modalInstance_"+parseInt(t)+".modal .modal-content .close").map(function(u){u.addEventListener("click",function(){a.close()},!1)}),a.closeOnClickOutside&&window.addEventListener("click",function(){a.close()},!1)}close(){var t=this.data.modalId;Tag("#modalInstance_"+parseInt(t)+".modal").map(function(a){a.style.display="block",ModalFade.apply(a,1,0)}),Tag("#modalInstance_"+parseInt(t)+".modal .modal-content").map(function(a){ModalMoveUp.apply(a,0,0,0,-document.body.clientHeight)}),setTimeout(function(){Tag("#modalInstance_"+parseInt(t)+".modal").map(function(a){a.style.display="none"})},900)}rebuild(){let t=super.rebuild(...arguments);return this.templateURI=ComponentURI({COMPONENTS_BASE_PATH:CONFIG.get("componentsBasePath"),COMPONENT_NAME:"modal",TPLEXTENSION:CONFIG.get("tplextension"),TPL_SOURCE:"default"}),t}},"ModalComponent"),l(class extends Component{cached=!1;basePath=CONFIG.get("remoteSDKPath");tplextension="tpl.html";name="swagger-ui";constructor(t){super(t)}},"SwaggerUIComponent")])}).call(null)});var nt=R(()=>{(function(){"use strict";Package("org.qcobjects.components.grid",[l(class extends Component{name="grid-item";shadowed=!0;tplsource="inline";template=`
<img src="{{image}}" />
<p>{{description}}</p>
`;cached=!1},"GridItemComponent"),l(class extends Component{name="grid";cached=!1;view=null;shadowed=!0;rows=3;cols=3;templateURI="";data={};tplsource="inline";template="<p>Loading...</p>";constructor(...t){super(t),this.body.setAttribute("controllerClass","DataGridController");var a=this.body.getAttribute("subcomponentClass")!==null?this.body.getAttribute("subcomponentClass"):"GridItemComponent";this.body.setAttribute("subcomponentClass",a)}},"GridComponent")])}).call(null)});var rt=R(()=>{(function(){"use strict";Package("org.qcobjects.components.list",[l(class extends Component{shadowed=!1;tplsource="inline";template='<a href="{{value}}">{{label}}</a>';cached=!1;constructor(t){t.name="list-item",super(t)}},"ListItemComponent"),l(class extends Component{shadowed=!0;tplsource="inline";template="<p>Loading...</p>";constructor(t){t.name="list",super(t),this.body.setAttribute("controllerClass","ListController"),this.body.setAttribute("subcomponentClass","ListItemComponent")}},"ListComponent")])}).call(null)});var ot=R(()=>{(function(){"use strict";Package("org.qcobjects.components.slider",[l(class extends Component{tplsource="inline";template="<p>Loading...</p>";name="slidelist";constructor(t){super(t),this.body.setAttribute("controllerClass","DataGridController");var a=this.body.getAttribute("subcomponentClass")!==null?this.body.getAttribute("subcomponentClass"):"GridItemComponent";this.body.setAttribute("subcomponentClass",a)}},"SlideListComponent"),l(class extends Component{effectClass="Fade";name="slider_item";constructor(t){super(t),this.data.slideNumber=this.data.__dataIndex+1,this.template=`
      <div class="qcoSlides" style="display:none">
        <div class="qco-slider__numbertext">{{slideNumber}} / {{__dataLength}}</div>
        <img src="{{image}}" alt="{{title}}"/>
        <div class="qco-slider__text">
          <p>{{label}} <a href="{{link}}">{{category}}</a></p>
        </div>
      </div>
      `,this.tplsource="inline"}},"SlideItemComponent"),l(class extends Component{name="slider";constructor(t){super(t),this.template=`
      <style>
      /* Slideshow container */
  
      :host a:hover,
      :host a:active,
      :host a:visited {
        color: #ffffff;
      }
  
       {
        color: #ffffff;
      }
  
      :host .prev {left:0;}
      .qco-slider__container {
        max-width: 100%;
        position: relative;
        margin: auto;
        height: 300px;
      }
      :host .qco-slider__container .qcoSlides img {
        object-fit: cover;
        width: 100%;
        height: 300px;
      }
  
      /* Next & previous buttons */
      :host .prev,
      :host .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        background-color: rgba(1, 1, 1, 0.1);
      }
  
      /* Position the "next button" to the right */
      :host .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }
  
      /* On hover, add a black background color with a little bit see-through */
      :host .prev:hover,
      :host .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
  
      /* Caption text */
      :host .qco-slider__text {
        color: #f2f2f2;
        font-size: 15px;
  /*      padding: 8px 12px;*/
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        text-shadow: -1px 1px 3px #111111;
        background-color: rgba(1,1,1,0.7);
      }
  
      /* Number text (1/3 etc) */
      :host .qco-slider__numbertext {
        color: #f2f2f2;
        text-shadow: 0px 2px 3px #111111;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        padding-top: 0;
        margin-top: 10px;
      }
  
      /* The dots/bullets/indicators */
      :host .qcoSlider__dots {
        text-align: center;
        margin: 0 auto;
        padding: 0;
      }
      :host .qcoSlider__dots--dot {
        cursor: pointer;
        height: 10px;
        width: 10px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
      }
  
      :host .active,
      :host .qcoSlider__dots--dot:hover {
        background-color: #717171;
      }
  
      :host .qco-slider__container .qcoSlides img {
        border-radius: 30px 30px 0px 0px;
      }
  
      </style>
  
      <div class="qco-slider__container">
        <component name="slidelist" componentClass="SlideListComponent" subcomponentClass="SlideItemComponent" serviceClass="{{SERVICE_CLASS}}" ></component>
  
        <a class="prev" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(-1)">&#10094;</a>
        <a class="next" onclick="global.get('{{sliderHandler}}').plusSlidesAndStop(1)">&#10095;</a>
      </div>
      <br>
  
      <div class="qcoSlider__dots" style="text-align:center">
      </div>
  
      `,this.tplsource="inline",this.shadowed=!0,this.data.SERVICE_CLASS=this.body.getAttribute("serviceClass"),this.data.sliderHandler="slider_"+this.__instanceID.toString(),this.body.setAttribute("controllerClass","SliderController")}},"SliderComponent")])}).call(null)});var at=R(()=>{(function(){"use strict";Package("org.quickcorp.components.notifications",[l(class he extends Component{cached=!1;tplsource="inline";shadowed=!1;constructor(t){t.name="notification",t.body=_DOMCreateElement("div"),super(t),this.template=`
      <style>
      div.notification_background {
        display: block; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        bottom:0;
        right:0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        border: none !important;
      }
      div.notification {
        border-radius: 12px !important;
        margin-bottom: 15px;
        padding: 4px 12px;
      }
      .notification.danger {
        background-color: #ffdddd;
        border-left: 6px solid #f44336;
      }
      .notification.success {
        background-color: #ddffdd;
        border-left: 6px solid #4CAF50;
      }
      .notification.info {
        background-color: #e7f3fe;
        border-left: 6px solid #2196F3;
      }
      .notification.warning {
        background-color: #ffffcc;
        border-left: 6px solid #ffeb3b;
      }
      </style>
      <div class="notification_background">
      <div class="notification {{kind}}">
        <p><strong>{{title}}</strong> {{message}}</p>
      </div>
      </div>
      `,this.kinds=["danger","success","info","warning"]}display(t){var a=l(function(u){u.style.display="block";var h=New(Move,{duration:900,apply(g){_super_("Fade","apply").call(this,g,0,1),_super_("Move","apply").call(this,g,0,-document.body.clientHeight,0,0)}}),m=New(Move,{duration:650,apply(g){_super_("Fade","apply").call(this,g,1,0),_super_("Move","apply").call(this,g,0,0,0,-document.body.clientHeight)}});h.apply(u),setTimeout(function(){m.apply(u)},2e3)},"_display_");t.subelements("div.notification_background").map(u=>New(Fade,{duration:500}).apply(u,0,1)),t.subelements("div.notification").map(u=>a(u)),setTimeout(function(){t.remove()},2200)}success(t){var a=New(he,{name:"notification",shadowed:this.shadowed,body:_DOMCreateElement("div"),data:{kind:"success",title:"Success!",message:`${t}...`}});document.body.append(a);var u=a.shadowed?a.shadowRoot.host:a.body;a.display(u)}danger(t){var a=New(he,{name:"notification",shadowed:this.shadowed,body:_DOMCreateElement("div"),data:{kind:"danger",title:"Danger!",message:`${t}...`}});document.body.append(a);var u=a.shadowed?a.shadowRoot.host:a.body;a.display(u)}info(t){var a=New(he,{name:"notification",shadowed:this.shadowed,body:_DOMCreateElement("div"),data:{kind:"info",title:"Info!",message:`${t}...`}});document.body.append(a);var u=a.shadowed?a.shadowRoot.host:a.body;a.display(u)}warning(t){var a=New(he,{name:"notification",shadowed:this.shadowed,body:_DOMCreateElement("div"),data:{kind:"warning",title:"Warning!",message:`${t}...`}});document.body.append(a);var u=a.shadowed?a.shadowRoot.host:a.body;a.display(u)}},"NotificationComponent")]),NotificationComponent.success=w=>new NotificationComponent({name:"notification",tplsource:"none"}).success(w),NotificationComponent.danger=w=>new NotificationComponent({name:"notification",tplsource:"none"}).danger(w),NotificationComponent.info=w=>new NotificationComponent({name:"notification",tplsource:"none"}).info(w),NotificationComponent.warning=w=>new NotificationComponent({name:"notification",tplsource:"none"}).warning(w)}).call(null)});var it=R((Rn,Ce)=>{l(function(t){"use strict";Package("org.qcobjects.components.base",[l(class extends Component{cached=!1;shadowed=!0;constructor(u){u.name=typeof u.name>"u"?"splashscreen":u.name;var h=typeof window<"u"&&typeof window.self<"u"&&window===window.self,m=location.hash===""&&location.pathname==="/"&&location.search===""||CONFIG.get("routingWay")==="hash"&&CONFIG.get("start_url","/")===location.hash||CONFIG.get("routingWay")==="pathname"&&CONFIG.get("start_url","/")===location.pathname||CONFIG.get("routingWay")==="search"&&CONFIG.get("start_url","/")===location.search,g=h&&m;if(g?(u.basePath=CONFIG.get("splashscreenBasePath",CONFIG.get("remoteSDKPath")),typeof u.data>"u"&&(u.data={}),u.data.basePath=u.basePath):typeof u<"u"&&(u.body.style.display="none"),super(u),this._enabled_=g,this._enabled_){var y=1e3,v=this.body.getAttribute("duration");v===null?v=y:v=parseInt(v),this._bgcolor=this.body.style.backgroundColor;var T=l(()=>{setTimeout(()=>{if(!T.executed){var N=this.shadowed?this.shadowRoot.host:this.body;typeof t.componentsStack<"u"&&t.componentsStack.filter(_=>_.body.hasAttribute("splashscreen")).map(_=>{logger.debug("Splash Screen of Main Component:",_.name),_.splashScreenComponent=this;function G(){if(!G.executed){var j=this,F=j.splashScreenComponent,W=j.shadowed?j.shadowRoot.host:j.body;j._mainPosition=W.style.position,W.style.position="fixed",j._mainOpacity=W.style.opacity,N.style.width="100%",N.style.height="100%",document.body.style.backgroundColor="#111111",W.style.opacity=0,setTimeout(function(){typeof N<"u"&&(document.body.style.backgroundColor=F._bgcolor,N.subelements("#slot-logo").map(function(Z){Z.style.display="block",Z.style.transformOrigin="center",new Resize().apply(Z,1,0)}),new Fade().apply(N,1,0))},v-y),setTimeout(function(){new Fade().apply(W,0,1),W.style.position=j._mainPosition,document.body.style.backgroundColor=F._bgcolor,N.parentElement.remove()},v)}G.executed=!0}l(G,"SplashScreenHandler"),_.addComponentHelper(G.bind(_))}),T.executed=!0}})},"_helper_");T.executed=!1,this.addComponentHelper(T.bind(u))}}},"SplashScreenComponent")]),Package("org.qcobjects.components.splashscreen",[l(class extends SplashScreenComponent{cached=!1;shadowed=!0;tplsource="inline";template=`
      <style>
      :host * {
        box-sizing: border-box;
      }
  
      :host {
        zoom: 1.0;
        width: device-width;
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        padding: 0;
        min-width: 100vw;
        min-height: 100vh;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: black;
      }
      #slot-logo::slotted(img) {
          vertical-align: middle;
          display: block;
          width: 40vw;
          left: 0;
          margin: 0;
          padding: 0;
          z-index: 9999999999;
          transform-origin: center;
          transform-style: preserve-3d;
          filter: blur(0em);
          transition: filter 0.5s;
          max-width: 300px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: fadeIn 5s;
          -webkit-animation: fadeIn 5s;
          -moz-animation: fadeIn 5s;
          -o-animation: fadeIn 5s;
          -ms-animation: fadeIn 5s;        
      }
  
      :host * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        /* prevent callout to copy image, etc when tap to hold */
        -webkit-text-size-adjust: none;
        /* prevent webkit from resizing text to fit */
        -webkit-user-select: none;
        /* prevent copy paste, to allow, change 'none' to 'text' */
      }
  
      /* FOCUS */
      :host summary:focus,
      :host a:focus,
      :host button:focus {
        outline: none;
      }
  
      .splashscreen,
      .fullscreen-bg {
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
        background-attachment: fixed;
        background-position: center;
        background-clip: content-box;
        background-size: cover;
        position: absolute;
        min-width: 100vw;
        min-height: 100vh;
        width: 100vw;
        height: 100vh;
        z-index: 0;
        overflow: hidden;
      }
  
      .splashscreen .splashcontent {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        width: 100vw;
        height: 100vh;
        padding: 0;
        overflow: hidden;
        z-index: 1;
      }
  
      .splashscreen .splashcontent p {
        color: white;
      }
  
      video.fullscreen-bg__video {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: 0;
        padding: 0;
        position: absolute;
        min-width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        z-index: 0;
        object-fit: cover;
        filter: brightness(0.3);
      }
        .splashscreen,
        .fullscreen-bg {
          background-image: url('{{background}}');
        }
  
        @keyframes fadeIn {
          0% {opacity:0;}
          100% {opacity:1;}
        }
        
        @-moz-keyframes fadeIn {
          0% {opacity:0;}
          100% {opacity:1;}
        }
        
        @-webkit-keyframes fadeIn {
          0% {opacity:0;}
          100% {opacity:1;}
        }
        
        @-o-keyframes fadeIn {
          0% {opacity:0;}
          100% {opacity:1;}
        }
        
        @-ms-keyframes fadeIn {
          0% {opacity:0;}
          100% {opacity:1;}
        }      
  
      </style>
      <div class="splashscreen">
        <div class="fullscreen-bg splashcontent">
          <video loop muted autoplay playsinline name="media" poster="{{background}}" class="fullscreen-bg__video" data-setup="{}" height="100%">
            <source src="{{video_mp4}}" type="video/mp4">
            <source src="{{video_ogg}}" type="video/ogg">
            <source src="{{video_webm}}" type="video/webm">
          </video>
          <slot id="slot-logo" name="logo"></slot>
        </div>
      </div>
  
      `;constructor(u){u.name="videosplashscreen",super(u)}},"VideoSplashScreenComponent"),l(class extends SplashScreenComponent{cached=!1;shadowed=!0;tplsource="inline";template=`
      <style>
      @keyframes spin {
        0% {
          transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        }
  
        16% {
          transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
        }
  
        33% {
          transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
        }
  
        50% {
          transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
  
        66% {
          transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
        }
  
        83% {
          transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
        }
  
        100% {
          transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
      }
  
      @keyframes spin-duplicate {
        0% {
          transform: translateZ(-100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
        }
  
        16% {
          transform: translateZ(-100px) rotateX(180deg) rotateY(180deg) rotateZ(0deg);
        }
  
        33% {
          transform: translateZ(-100px) rotateX(360deg) rotateY(90deg) rotateZ(180deg);
        }
  
        50% {
          transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
  
        66% {
          transform: translateZ(-100px) rotateX(180deg) rotateY(360deg) rotateZ(270deg);
        }
  
        83% {
          transform: translateZ(-100px) rotateX(270deg) rotateY(180deg) rotateZ(180deg);
        }
  
        100% {
          transform: translateZ(-100px) rotateX(360deg) rotateY(360deg) rotateZ(360deg);
        }
      }
  
      @keyframes roll {
        0% {
          transform: translate3d(-200px, -50px, -400px)
        }
  
        12% {
          transform: translate3d(0px, 0, -100px)
        }
  
        25% {
          transform: translate3d(200px, -50px, -400px)
        }
  
        37% {
          transform: translate3d(0px, -100px, -800px)
        }
  
        50% {
          transform: translate3d(-200px, -50px, -400px)
        }
  
        62% {
          transform: translate3d(0px, 0, -100px)
        }
  
        75% {
          transform: translate3d(200px, -50px, -400px)
        }
  
        87% {
          transform: translate3d(0px, -100px, -800px)
        }
  
        100% {
          transform: translate3d(-200px, -50px, -400px)
        }
      }
  
      #wrapper {
        position: relative;
        width: 200px;
        padding-top: 100px;
        margin: 0 auto;
        perspective: 1200px;
      }
  
      #platform {
        margin-top: 100px;
      }
  
      #dice span {
        position: absolute;
        margin: 100px 0 0 100px;
        display: block;
        font-size: 2.5em;
        padding: 10px;
      }
  
      #dice {
        position: absolute;
        width: 200px;
        height: 200px;
        transform-style: preserve-3d;
        animation: spin 50s infinite linear;
      }
  
      .side {
        position: absolute;
        width: 200px;
        height: 200px;
        background: none;
        box-shadow: inset 0 0 40px #fff0;
        border-radius: 40px;
      }
  
      #dice .cover, #dice .inner {
        background: #e0e0e0;
        box-shadow: none;
      }
  
      #dice .cover {
        border-radius: 0;
        transform-origin: center;
        transform: translateZ(0px);
      }
  
      #dice .cover.x {
        transform-origin: center;
        transform: rotateY(90deg);
      }
  
      #dice .cover.z {
        transform-origin: center;
        transform: rotateX(90deg);
      }
  
      #dice .front {
        transform-origin: center;
        transform: translateZ(100px);
      }
  
      #dice .front.inner {
        transform-origin: center;
        transform: translateZ(98px);
      }
  
      #dice .back {
        transform-origin: center;
        transform: rotateX(-180deg) translateZ(100px);
      }
  
      #dice .back.inner {
        transform-origin: center;
        transform: rotateX(-180deg) translateZ(98px);
      }
  
      #dice .right {
        transform-origin: center;
        transform: rotateY(90deg) translateZ(100px);
      }
  
      #dice .right.inner {
        transform-origin: center;
        transform: rotateY(90deg) translateZ(98px);
      }
  
      #dice .left {
        transform-origin: center;
        transform: rotateY(-90deg) translateZ(100px);
      }
  
      #dice .left.inner {
        transform-origin: center;
        transform: rotateY(-90deg) translateZ(98px);
      }
  
      #dice .top {
        transform-origin: center;
        transform: rotateX(90deg) translateZ(100px);
      }
  
      #dice .top.inner {
        transform-origin: center;
        transform: rotateX(90deg) translateZ(98px);
      }
  
      #dice .bottom {
        transform-origin: center;
        transform: rotateX(-90deg) translateZ(100px);
      }
  
      #dice .bottom.inner {
        transform-origin: center;
        transform: rotateX(-90deg) translateZ(98px);
      }
  
      .dot {
        position: absolute;
        width: 46px;
        height: 46px;
        border-radius: 23px;
        background: #444;
        box-shadow: inset 5px 0 10px #000;
      }
  
      .dot.center {
        margin: 77px 0 0 77px;
      }
  
      .dot.dtop {
        margin-top: 20px;
      }
  
      .dot.dleft {
        margin-left: 134px;
      }
  
      .dot.dright {
        margin-left: 20px;
      }
  
      .dot.dbottom {
        margin-top: 134px;
      }
  
      .dot.center.dleft {
        margin: 77px 0 0 20px;
      }
  
      .dot.center.dright {
        margin: 77px 0 0 134px;
      }
  
      #background {
        top: 0px;
        left: 0px;
        position: fixed;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: var(--root-background, transparent);
        background-size: cover;
        background-origin: border-box;
      }
  
      #dice .side.front,
      #dice .side.top,
      #dice .side.right,
      #dice .side.left,
      #dice .side.bottom,
      #dice .side.back {
        background-image: var(--background-3d-cube-image, "none");
        background-size: cover;
        background-origin: border-box;
      }
  
  
      :root, :host {
        --background-3d-cube-image: url('{{cube_image}}');
        --box-width: 200px;
        font-size:.9em;
        font-family:sans-serif;
        --root-background: {{background}};
      }
      </style>
  
      <div id="background"></div>
      <div id="wrapper">
        <div id="platform">
          <div id="dice">
            <div class="side front">
            </div>
            <div class="side front inner"></div>
            <div class="side top"></div>
            <div class="side top inner"></div>
            <div class="side right"></div>
            <div class="side right inner"></div>
            <div class="side left"></div>
            <div class="side left inner"></div>
            <div class="side bottom"></div>
            <div class="side bottom inner"></div>
            <div class="side back"></div>
            <div class="side back inner"></div>
            <div class="side cover x"></div>
            <div class="side cover y"></div>
            <div class="side cover z"></div>
          </div>
        </div>
      </div>
  
      `;constructor(u){u.name="cubesplashscreen",super(u)}},"CubeSplashScreenComponent")])},"__splash_screen__").call(null,typeof Ce=="object"&&typeof Ce.exports=="object"?Ce.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var st=R(()=>{(function(){"use strict";Package("org.qcobjects.controllers",[l(class extends Controller{constructor({component:t,dependencies:a=[]}){super({component:t,dependencies:a})}},"GenericController")])}).call(null)});var dt=R(()=>{(function(){"use strict";Package("org.qcobjects.controllers.grid",[l(class extends Controller{dependencies=[];component=null;constructor({component:t,dependencies:a=[]}){super({component:t,dependencies:a}),this.rows=this.component.body.getAttribute("rows"),this.rows=this.rows!==null?this.rows:this.component.rows,this.cols=this.component.body.getAttribute("cols"),this.cols=this.cols!==null?this.cols:this.component.cols}cssGrid(){var t=this,a=t.component,u=a.shadowed?a.shadowRoot:a.body;if(typeof t.rows<"u"&&typeof t.cols<"u"){var h=_DOMCreateElement("style"),m="auto ".repeat(t.rows),g="auto ".repeat(t.cols),y="grid"+this.__instanceID.toString();h.innerHTML="."+y+" {                           display: grid;                           grid-template-rows: "+m+";                           grid-template-columns: "+g+";                           margin:0 auto;                       }",u.append(h),a.shadowed?u.host.classList.add(y):u.classList.add(y)}}done(){var t=this;t.cssGrid(),logger.debug("GridComponent built")}},"GridComponent"),l(class extends Controller{dependencies=[];component=null;constructor({component:t}){super(...arguments);var a=this;a.component=t,a._componentRoot=t.shadowed?t.shadowRoot:t.body,a.rows=a.component.body.getAttribute("rows"),a.rows=a.rows!==null?a.rows:a.component.rows,a.cols=a.component.body.getAttribute("cols"),a.cols=a.cols!==null?a.cols:a.component.cols,logger.debug("DataGridController INIT")}getPageIndex(t,a,u){return t=new Number(t),t=t>0?t-1:0,a=new Number(a),u=new Number(u),[u*t/a,u*t/a+u/a]}addSubcomponents(){var t=this;t.component.subcomponents=[],t._componentRoot.innerHTML="",t.cssGrid(),logger.debug(_DataStringify(t.component.data));try{var a=t.component.body.getAttribute("subcomponentClass");if(a!=null){var u,h,m,g=[...t.component.data],y=t.component.body.getAttribute("paginate-in");if(y=y!==null?y:"client",y==="client"){var v=t.component.body.getAttribute("page-number");v=isNaN(v)||v===null?-1:v,v!==-1?(m=t.component.body.getAttribute("total-pages"),m=isNaN(m)?1:m,u=t.getPageIndex(v,m,g.length)[0],h=t.getPageIndex(v,m,g.length)[1]):(u=0,h=g.length,m=1),g=g.slice(u,h)}else u=0,h=g.length,m=1;g.map(function(T,N,_){try{var G=_DOMCreateElement("component");G.setAttribute("name",ClassFactory(a).name),G.setAttribute("shadowed",ClassFactory(a).shadowed),G.setAttribute("cached",ClassFactory(a).cached),T=Object.assign(T,{__dataIndex:N,__dataLength:_.length,__page:v,__totalPages:m,__limit:h,__offset:u});var j=New(ClassFactory(a),{name:"item",data:T,templateURI:ComponentURI({COMPONENTS_BASE_PATH:CONFIG.get("componentsBasePath"),COMPONENT_NAME:ClassFactory(a).name,TPLEXTENSION:CONFIG.get("tplextension"),TPL_SOURCE:ClassFactory(a).tplsource}),body:G,template:ClassFactory(a).template});j.done=t.component.done.bind(j);try{if(j){j.data.__dataIndex=N,t.component.data.hasOwnProperty.call(t.component.data,"length")&&(j.data.__dataLength=t.component.data.length),logger.debug("adding subcomponent to body"),t._componentRoot.append(j.body);try{t.component.subcomponents.push(j)}catch{logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}else logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}catch{logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}catch{logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}})}else logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT")}catch{logger.debug("No data for component")}}cssGrid(){var t=this,a=t.component,u=a.shadowed?a.shadowRoot:a.body;if(typeof t.rows<"u"&&typeof t.cols<"u"){var h=_DOMCreateElement("style"),m="auto ".repeat(t.rows),g="auto ".repeat(t.cols),y="grid"+this.__instanceID.toString();h.innerHTML="."+y+" {                           display: grid;                           grid-template-rows: "+m+";                           grid-template-columns: "+g+";                           margin:0 auto;                       }",a.shadowed?(a.body.append(h),u.host.classList.add(y)):(u.append(h),u.classList.add(y))}}done(){var t=this,a=t.component;logger.debug("DataGridController DONE");var u=t.component.body.getAttribute("serviceClass");if(u!=null){var h,m,g=a.body.getAttribute("paginate-in");if(g=g!==null?g:"client",g==="server"){var y=a.body.getAttribute("page-number");y=isNaN(y)||y===null?-1:y;var v;if(y!==-1){var T=t.component.body.getAttribute("server-data-count")!==null?t.component.body.getAttribute("server-data-count"):1;v=t.component.body.getAttribute("total-pages"),v=isNaN(v)?1:v,h=t.getPageIndex(y,v,T)[0],m=t.getPageIndex(y,v,T)[1],a.serviceData=typeof a.serviceData<"u"?a.serviceData:{},a.serviceData.params=typeof a.serviceData.params<"u"?a.serviceData.params:{},a.serviceData.params.offset=h,a.serviceData.params.limit=m}}serviceLoader(New(ClassFactory(u),{data:a.serviceData})).then(N=>{logger.debug("DONE SERVICE COMPONENT"),N.service.JSONresponse=JSON.parse(N.service.template),typeof N.service.JSONresponse.result<"u"?(logger.debug(_DataStringify(N.service.JSONresponse.result)),a.data=N.service.JSONresponse.result):a.data=N.service.JSONresponse,t.addSubcomponents()},N=>{logger.debug(N)}).catch(N=>{logger.debug("Something went wrong when calling the service from: "+u),logger.debug(N.message)})}}},"DataGridController")])}).call(null)});var lt=R(()=>{(function(){"use strict";Package("org.qcobjects.controllers.list",[l(class extends Controller{dependencies=[];component=null;valueField=void 0;labelField=void 0;constructor({component:t,dependencies:a=[],valueField:u=void 0,labelField:h=void 0}){super({component:t,dependencies:a,valueField:u,labelField:h}),this.component=t,this._componentRoot=this.component.shadowed?this.component.shadowRoot:this.component.body,this.labelField=this.component.body.getAttribute("label-field"),this.valueField=this.component.body.getAttribute("value-field"),this.rows=this.component.body.getAttribute("rows"),this.rows=this.rows!==null?this.rows:this.component.rows,this.cols=1,logger.debug("ListController INIT")}getPageIndex(t,a,u){return t=new Number(t),t=t>0?t-1:0,a=new Number(a),u=new Number(u),[u*t/a,u*t/a+u/a]}addSubcomponents(){var t=this;t.component.subcomponents=[];var a=t.component.body.getAttribute("layout"),u=CONFIG.get("listBasePath",CONFIG.get("remoteSDKPath")),h="";t.labelField=t.component.body.getAttribute("label-field"),t.valueField=t.component.body.getAttribute("value-field"),a==="horizontal"?h=`@import url("${u}css/components/horizontal-list.css");`:h=`@import url("${u}css/components/list.css");`,t._componentRoot.innerHTML=`<style>${h}</style><ul></ul>`,logger.debug(_DataStringify(t.component.data));try{var m=t.component.body.getAttribute("subcomponentClass");if(m!=null){var g,y,v,T=[...t.component.data],N=t.component.body.getAttribute("paginate-in");if(N=N!==null?N:"client",N==="client"){var _=t.component.body.getAttribute("page-number");_=isNaN(_)||_===null?-1:_,_!==-1?(v=t.component.body.getAttribute("total-pages"),v=isNaN(v)?1:v,g=t.getPageIndex(_,v,T.length)[0],y=t.getPageIndex(_,v,T.length)[1]):(g=0,y=T.length,v=1),T=T.slice(g,y)}else g=0,y=T.length,v=1;T.map(function(G,j){try{var F=_DOMCreateElement("li");G.label=G[t.labelField],G.value=G[t.valueField];var W=New(ClassFactory(m),{name:"list-item",data:{label:G[t.labelField],value:G[t.valueField],__dataIndex:j,__page:_,__totalPages:v,__limit:y,__offset:g},templateURI:ComponentURI({COMPONENTS_BASE_PATH:CONFIG.get("componentsBasePath"),COMPONENT_NAME:ClassFactory(m).name,TPLEXTENSION:CONFIG.get("tplextension"),TPL_SOURCE:ClassFactory(m).tplsource}),body:F,template:ClassFactory(m).template});W.done=t.component.done.bind(W);try{if(W){W.data.__dataIndex=j,t.component.data.hasOwnProperty.call(t.component.data,"length")&&(W.data.__dataLength=t.component.data.length),logger.debug("adding subcomponent to body"),t._componentRoot.subelements("ul").map(Z=>Z.append(W));try{t.component.subcomponents.push(W)}catch{logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}else logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}catch{logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}}catch{logger.debug("ERROR LOADING SUBCOMPONENT IN DATAGRID")}})}else logger.debug("NO SUBCOMPONENT CLASS IN COMPONENT")}catch{logger.debug("No data for component")}}cssGrid(){var t=this,a=t.component,u=a.shadowed?a.shadowRoot:a.body;if(typeof t.rows<"u"&&typeof t.cols<"u"){var h=_DOMCreateElement("style"),m="auto ".repeat(t.rows),g="auto ".repeat(t.cols),y="grid"+this.__instanceID.toString();h.innerHTML="."+y+" {                           display: grid;                           grid-template-rows: "+m+";                           grid-template-columns: "+g+";                           margin:0 auto;                       }",u.append(h),u.classList.add(y)}}done(){var t=this;t.cssGrid();var a=t.component;logger.debug("ListController DONE");var u=t.component.body.getAttribute("serviceClass");if(u!=null){var h,m,g=a.body.getAttribute("paginate-in");if(g=g!==null?g:"client",g==="server"){var y=a.body.getAttribute("page-number");y=isNaN(y)||y===null?-1:y;var v;if(y!==-1){var T=t.component.body.getAttribute("server-data-count")!==null?t.component.body.getAttribute("server-data-count"):1;v=t.component.body.getAttribute("total-pages"),v=isNaN(v)?1:v,h=t.getPageIndex(y,v,T)[0],m=t.getPageIndex(y,v,T)[1],a.serviceData=typeof a.serviceData<"u"?a.serviceData:{},a.serviceData.params=typeof a.serviceData.params<"u"?a.serviceData.params:{},a.serviceData.params.offset=h,a.serviceData.params.limit=m}}serviceLoader(New(ClassFactory(u),{data:a.serviceData})).then(N=>{logger.debug("DONE SERVICE COMPONENT"),N.service.JSONresponse=JSON.parse(N.service.template),typeof N.service.JSONresponse.result<"u"?(logger.debug(_DataStringify(N.service.JSONresponse.result)),a.data=N.service.JSONresponse.result):a.data=N.service.JSONresponse,t.addSubcomponents()},N=>{logger.debug(N)}).catch(N=>{logger.debug("Something went wrong when calling the service from: "+u),logger.debug(N.message)})}}},"ListController")])}).call(null)});var ct=R((Yn,Ne)=>{(function(w){"use strict";Package("org.qcobjects.controllers.slider",[l(class extends Controller{dependencies=[];component=null;slideIndex=0;duration=7100;interval=null;sliderHandlerName=null;constructor({component:a,dependencies:u=[],duration:h=7100,slideIndex:m=0,interval:g=null,sliderHandlerName:y=null}){super({component:a,dependencies:u,duration:h,slideIndex:m,interval:g,sliderHandlerName:y}),this.component=a,this._componentRoot=a.shadowed?a.shadowRoot:a.body,this.sliderHandlerName="slider_"+this.component.__instanceID.toString(),w.set(controller.sliderHandlerName,this)}stop(){this.interval!=null&&clearInterval(this.interval)}plusSlidesAndStop(a){this.stop(),this.plusSlides(a)}plusSlides(a){this.showSlides(this.slideIndex+=a)}currentSlide(a){this.stop(),this.showSlides(this.slideIndex=a)}automate(){var a=this;a.interval=setInterval(function(){a.plusSlides(1)},a.duration)}showSlides(a){var u=this,h=u._componentRoot.subelements(".qcoSlides"),m=u._componentRoot.subelements(".qcoSlider__dots--dot");a>h.length-1&&(u.slideIndex=0),a<0&&(u.slideIndex=0),h.filter((g,y)=>y!==u.slideIndex).map(g=>{New(ClassFactory("Fade")).apply(g,1,0)}),m.filter((g,y)=>y!==u.slideIndex).map(g=>{g.classList.remove("active")});try{m[u.slideIndex].classList.add("active")}catch(g){logger.debug(`Something went wrong when trying to activate a slide: ${u.slideIndex} - ${g.message}`)}setTimeout(function(){h.filter((g,y)=>y!==u.slideIndex).map(g=>{g.style.display="none"});try{h[u.slideIndex].style.display="block",New(ClassFactory("Fade")).apply(h[u.slideIndex],0,1)}catch(g){logger.debug(`Something went wrong when trying to show a slide: ${u.slideIndex} - ${g.message}`)}},700)}fillDots(){var a=this,u=a._componentRoot.subelements(".qcoSlides");u.map((h,m)=>{var g=document.createElement("span"),y=`<span class="qcoSlider__dots--dot" onclick="global.get('${a.sliderHandlerName}').currentSlide(${m})"></span>`;g.innerHTML=y,a._componentRoot.subelements(".qcoSlider__dots")[0].append(g)})}done(){var a=this,u=a._componentRoot.subelements(".qcoSlides");u.filter((h,m)=>m!==a.slideIndex).map(h=>{h.style.display="none"}),setTimeout(function(){a.fillDots(),a.slideIndex=0,a.showSlides(this.slideIndex),a.automate()},3e3)}},"SliderController")])}).call(null,typeof Ne=="object"&&typeof Ne.exports=="object"?Ne.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var ut=R(()=>{(function(){"use strict";Package("org.qcobjects.controllers.form",[l(class extends Controller{getDefault(){return function(t,a,u){var h={name:"^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",email:"^([A-Za-z0-9]+)@([A-Za-z0-9]+).([A-Za-z0-9]+)$"},m=u.getAttribute("pattern")||h[t],g=new RegExp(m);return g.test(a)}}},"FormValidations"),l(class extends Controller{dependencies=[];component=null;serviceClass="";formSettings={backRouting:"#",loadingRouting:"#loading",nextRouting:"#signupsuccessful"};hasValidation(t){var a=this,u=t.getAttribute("data-field"),h=!1;return typeof a.validations<"u"&&a.validations.hasOwnProperty.call(a.validations,u)&&(h=!0),h}isInvalid(t){var a=this,u=!1,h=t.getAttribute("data-field"),m=this.component.data[h],g=l(function(y,v,T){return typeof a.validations<"u"&&a.validations.hasOwnProperty.call(a.validations,y)&&a.validations[y].call(a).call(a,y,v,T)},"_execValidation");return typeof this.validations<"u"&&!g(h,m,t)&&(u=!0),u}isValid(t){return!this.isInvalid(t)}save(){var t=this;t.serviceClass!==""?(location.href=t.formSettings.loadingRouting,serviceLoader(New(ClassFactory(t.serviceClass),{data:t.component.data})).then(a=>{console.log("DONE SERVICE COMPONENT");try{console.log(a.service.JSONresponse)}catch{}location.href=t.formSettings.nextRouting},a=>{logger.debug(a),location.href=t.formSettings.backRouting})):logger.debug("No service name declared on serviceClass property")}formSaveTouchHandler(){logger.debug("Saving data...");var t=this,a=t.component.shadowed?t.component.shadowRoot.host:t.component.body;if(t.component.executeBindings(),t.formValidatorModal!=null){var u=a.subelements("*[data-field]"),h=u.filter(T=>t.hasValidation.call(t,T)),m=l(function(T,N){var _=l(function(G,j){return j.getAttribute("aria-labelledby")!==null?j.getAttribute("aria-labelledby").split(" ").map(F=>G.subelements(`#${F}`).map(W=>W.innerHTML)).join(" "):null},"_arialabelledby");return _(T,N)||N.getAttribute("aria-label")||N.getAttribute("placeholder")||N.getAttribute("name")||N.getAttribute("data-field")},"_labelledby"),g=l(function(T){return T.getAttribute("title")||T.getAttribute("aria-title")||""},"_ariatitle"),y=h.filter(T=>t.isInvalid(T));if(y.length>0){var v=`
<details>
    <summary>Please verify the following incorrect fields:</summary>
    <ul>
      <div>
      ${y.map(T=>"<li><div>"+m(a,T)+"</div><div>"+g(T)+"</div></li>").join("")}
      </div>
    </ul>
</details>
`;t.formValidatorModal.body.subelements(".validationMessage")[0].innerHTML=v,t.formValidatorModal.modal()}else t.save()}else logger.debug("Unable to find the modal validator..."),logger.debug("Saving data..."),t.save()}constructor(t){super(t),this.component=t.component,this.component=this.component.Cast(FormField)}done(){logger.debugEnabled=!0;var t=this;try{t.component.createBindingEvents();var a=_DOMCreateElement("div");a.className="modal_body",t.formValidatorModal=New(ModalComponent,{body:a,subcomponents:[],data:{content:'<div class="validationMessage"></div>'}}),Tag(".modal_body").map(u=>document.body.removeChild(u)),document.body.append(t.formValidatorModal)}catch{logger.debug("Unable to create the modal")}t.onpress(".submit",function(){t.formSaveTouchHandler()})}},"FormController")])}).call(null)});var ft=R(()=>{(function(){"use strict";Package("org.qcobjects.controllers.swagger",[l(class extends Controller{constructor({component:t,dependencies:a=[]}){super({component:t,dependencies:a})}startSwaggerUI(){if(typeof SwaggerUIBundle<"u"){let t=SwaggerUIBundle({url:CONFIG.get("swagger-ui-url","https://petstore.swagger.io/v2/swagger.json"),dom_id:"#"+CONFIG.get("swagger-ui-dom_id","swagger-ui"),deepLinking:!0,presets:[SwaggerUIBundle.presets.apis,SwaggerUIStandalonePreset],plugins:[SwaggerUIBundle.plugins.DownloadUrl],layout:"StandaloneLayout"});window.ui=t}}done(){var t=this;t.component.body.innerHTML='<div id="'+CONFIG.get("swagger-ui-dom_id","swagger-ui")+'"></div>';var a=CONFIG.get("swagger-ui-package-path","node_modules/swagger-ui-dist/");this.dependencies.push(New(SourceJS,{url:a+"swagger-ui-standalone-preset.js",external:CONFIG.get("swagger-ui-external",!1)})),this.dependencies.push(New(SourceCSS,{url:a+"swagger-ui.css",external:CONFIG.get("swagger-ui-external",!1)})),this.dependencies.push(New(SourceJS,{url:a+"swagger-ui-bundle.js",external:CONFIG.get("swagger-ui-external",!1),done:function(){t.startSwaggerUI()}}))}},"SwaggerUIController")])}).call(null)});var pt=R(()=>{"use strict";(function(){Package("org.qcobjects.effects.base",[l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=a+m*h/100;logger.debug("alpha: "+g.toString()),t.style.opacity=g.toString()}})}},"Fade"),l(class extends Effect{duration=1e3;apply(t,a,u,h,m){var g=h-a,y=m-u;t.style.transform="translate("+a+"px,"+u+"px)",this.animate({duration:this.duration,timing(v){return v},draw(v){logger.debug("animation progress: "+v.toString());var T=u+v*y/100,N=a+v*g/100;logger.debug("x: "+N.toString()+" y:"+T.toString()),t.style.transform="translate("+N+"px,"+T+"px)"}})}},"Move")]),Package("org.qcobjects.effects.extended",[l(class extends Move{duration=1e3;apply(t){super.apply.call(this,t,t.width,0,0,0)}},"MoveXInFromRight"),l(class extends Move{duration=1e3;apply(t){super.apply.call(this,t,-t.width,0,0,0)}},"MoveXInFromLeft"),l(class extends Move{duration=1e3;apply(t){super.apply.call(this,t,0,t.height,0,0)}},"MoveYInFromBottom"),l(class extends Move{duration=1e3;apply(t){super.apply.call(this,t,0,-t.height,0,0)}},"MoveYInFromTop"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=Math.round(a+m*h/100);logger.debug("angle: "+g.toString()),t.style.transform="rotate3d(1,0,0,"+g.toString()+"deg)"}})}},"RotateX"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=Math.round(a+m*h/100);logger.debug("angle: "+g.toString()),t.style.transform="rotate3d(0,1,0,"+g.toString()+"deg)"}})}},"RotateY"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=Math.round(a+m*h/100);logger.debug("angle: "+g.toString()),t.style.transform="rotate3d(0,0,1,"+g.toString()+"deg)"}})}},"RotateZ"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=Math.round(a+m*h/100);logger.debug("angle: "+g.toString()),t.style.transform="rotate3d(1,1,1,"+g.toString()+"deg)"}})}},"Rotate"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=a+m*h/100;logger.debug("radius: "+g.toString()),t.style.borderRadius=g.toString()+"px"}})}},"Radius"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=a+m*h/100;logger.debug("resize: "+g.toString()),t.style.transformOrigin="center",t.style.transform="scale("+g+","+g+")"}})}},"Resize"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=a+m*h/100;logger.debug("wipe: "+g.toString()),t.style.transformOrigin="right",t.style.transform="scaleX("+g+")"}})}},"WipeLeft"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=a+m*h/100;logger.debug("wipe: "+g.toString()),t.style.transformOrigin="left",t.style.transform="scaleX("+g+")"}})}},"WipeRight"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=a+m*h/100;logger.debug("wipe: "+g.toString()),t.style.transformOrigin="bottom",t.style.transform="scaleY("+g+")"}})}},"WipeUp"),l(class extends Effect{duration=1e3;apply(t,a,u){var h=u-a;this.animate({duration:this.duration,timing(m){return m},draw(m){logger.debug("animation progress: "+m.toString());var g=a+m*h/100;logger.debug("wipe: "+g.toString()),t.style.transformOrigin="top",t.style.transform="scaleY("+g+")"}})}},"WipeDown")]),Package("org.qcobjects.modal.effects",[l(class extends Fade{duration=500},"ModalFade"),l(class extends Move{duration=300},"ModalMoveDown"),l(class extends Move{duration=800},"ModalMoveUp")])}).call(null)});var ht=R(()=>{(function(){"use strict";Package("org.qcobjects.modal.controllers",[l(class extends Controller{constructor({component:t,dependencies:a=[]}){super({component:t,dependencies:a})}done(){var t=this.component;t.body.innerHTML=t.body.innerHTML.replace("/{{content}}/g",t.submodal.template)}},"ModalController")])}).call(null)});var mt=R(()=>{(function(){"use strict";Package("org.qcobjects.views",[l(class extends View{constructor({component:t=null,dependencies:a=[]}){super({component:t,dependencies:a})}},"GridView")])}).call(null)});var gt=R(()=>{"use strict";(function(){Package("org.qcobjects.tools.canvas",[l(class extends InheritClass{drawImageFilled(t,a,u=1,h=0,m=0){var g=Math.max(a.width/t.width,a.height/t.height);g=g*u;var y=a.width/2-t.width/2*g,v=a.height/2-t.height/2*g,T=a.getContext("2d");T.drawImage(t,h+y,m+v,t.width*g,t.height*g)}getImageResized(t,a,u,h,m=1,g=0,y=0){var v=document.createElement("canvas");return v.width=a,v.height=u,v.style.width=a,v.style.height=u,this.drawImageFilled(t,v,m,g,y),h.src=v.toDataURL("image/png"),v}},"CanvasTool")])}).call(null)});var bt=R(()=>{"use strict";(function(){Package("org.qcobjects.tools.layouts",[l(class extends InheritClass{constructor({component:t=null,dependencies:a=[]}){super({component:t,dependencies:a})}load(){this.dependencies.push(New(SourceCSS,{external:!CONFIG.get("useLocalSDK"),url:CONFIG.get("useLocalSDK")?"css/basic-layout.css":CONFIG.get("remoteSDKPath")+"css/basic-layout.css"}))}coloredBorder(){setTimeout(function(){Tag("nav").map(t=>t.style.border="20px solid #3333"),Tag("nav").map(t=>t.style.backgroundColor="#129999"),Tag("component>footer").map(t=>t.style.background="#876"),Tag("component>div").map(t=>t.style.border="3px dashed #fff"),Tag("component>section").map(t=>t.style.border="3px solid #000"),Tag("component>section").map(t=>t.style.backgroundColor="#fffaaa"),Tag("component>article").map(t=>t.style.border="3px dotted #000"),Tag("component>header").map(t=>t.style.background="#789"),Tag("component>footer").map(t=>t.style.background="#876"),Tag("component>article:nth-child(1)").map(t=>t.style.border="1px solid #444"),Tag("component>article:nth-child(1)").map(t=>t.style.backgroundColor="#555aaa"),Tag("component>article:nth-child(2)").map(t=>t.style.backgroundColor="#aaa333"),Tag("component>article:nth-child(3)").map(t=>t.style.backgroundColor="#54da82"),Tag("*").map(t=>t.style.color="#fff"),Tag("component>article").map(t=>Fade.apply(t,0,1)),Tag("component>footer").map(t=>Fade.apply(t,0,1)),Tag("component>header").map(t=>Fade.apply(t,0,1)),Tag("nav").map(t=>{t.style.display="block",t.width=t.offsetParent.scrollWidth,MoveXInFromLeft.apply(t)}),Tag("component>article").map(t=>{t.style.display="block",t.height=t.offsetParent.scrollHeight,MoveYInFromBottom.apply(t)}),Tag("component>article:nth-child(2)").map(t=>{t.style.display="block",t.width=t.offsetParent.scrollWidth,MoveXInFromRight.apply(t)})},300)}},"BasicLayout")])}).call(null)});var yt=R((Zr,xe)=>{(function(w){"use strict";Package("org.qcobjects.cloud.auth.session.usertoken",[l(class ae extends InheritClass{user={};__cache__=null;constructor(...a){super(a);var u=this;this.__cache__=new ComplexStorageCache({index:u.__instanceID.toString(),load(){var h;return typeof navigator<"u"&&typeof origin<"u"?h=_Crypt.encrypt(`${navigator.userAgent}|${a.username}|${(+new Date).toString()}`,origin):h=_Crypt.encrypt(`${a.username}|${(+new Date).toString()}`,CONFIG.get("domain","localhost")),u.user={priority:u.__instanceID.toString(),token:h},u.user},alternate(h){u.user=h.cache.getCached(u.__instanceID.toString())}})}generateIndex(a){return typeof Buffer<"u"?Buffer.from(a,"ascii").toString("base64"):btoa(a)}getGlobalUser(){var a=[...arguments].join("|"),u="userToken_"+ae.generateIndex(a);return(typeof w.get(u)>"u"||w.get(u)===null)&&w.set(u,New(ae,{username:a})),ae.user=w.get(u).user,w.get(u).user}getGlobalUserToken(){return this.getGlobalUser(...arguments).token}getGlobalUserId(){return this.getGlobalUser(...arguments).id}getGlobalUserPriority(){return this.getGlobalUser(...arguments).priority}getLoginCredentialsToken(a,u){return _Crypt.encrypt(`${a}${u}`,this.getGlobalUserToken(a))}closeGlobalSession(){this.getGlobalUser(...arguments);var a=[...arguments].join("|"),u="userToken_"+ae.generateIndex(a);typeof w.get(u)<"u"&&(w.get(u).__cache__.clear(),w.set(u,null),ae.user={})}},"SessionUserToken")])}).call(null,typeof xe=="object"&&typeof xe.exports=="object"?xe.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var vt=R(()=>{(function(){"use strict";Package("org.qcobjects.cloud.auth.session.data",[l(class extends InheritClass{__session_container__=null;setSessionContainer(){this.__session_container__=[...arguments]}getSessionContainer(){if(typeof this.__session_container__>"u"||this.__session_container__===null)throw new Error("You need to set a session container first: sessionData.setSessionContainer(...arguments)");return this.__session_container__}getSessionData(){var t=this,a=sessionStorage.getItem(`${t.index(...arguments)}`),u=JSON.parse(a);return(typeof u>"u"||u===null)&&(u={}),u}index(){if(typeof SessionUserToken>"u")throw new Error('You need to import SessionUserToken first: Import ("org.qcobjects.cloud.auth.session.usertoken")');return`session_${btoa(SessionUserToken.getGlobalUserToken(...arguments))}`}save(){var t=this,a=_DataStringify(t.sessionData);sessionStorage.setItem(`${t.index(...arguments)}`,a)}get(t,a){var u=this,h=u.getSessionData(u.getSessionContainer());return typeof h[t]<"u"?h[t]:a}set(t,a){var u=this,h=u.getSessionContainer(),m=u.getSessionData(h);u.sessionData=m,u.sessionData[t]=a,u.save(h)}},"SessionData")])}).call(null)});var wt=R((Kr,me)=>{l(function w(t){"use strict";if(typeof Object.defineProperty<"u"&&typeof t<"u")try{Object.defineProperty(t,"__qcobjects_sdk__",{enumerable:!0,configurable:!1,writable:!1,value:w})}catch{typeof t.__qcobjects_sdk__<"u"&&(t.__qcobjects_sdk__.__loaded__=!0)}if(typeof t.__qcobjects_sdk__.__loaded__>"u"){if(t.__qcobjects_sdk__.__loaded__=!0,typeof t>"u")throw Error("Top context empty: It should either global, module or window");var a=t;t.global=a;var u=typeof window<"u"&&typeof window.self<"u"&&window===window.self,h=typeof me<"u",m=CONFIG.get("remoteImportsPath"),g=CONFIG.get("relativeImportPath"),y=!CONFIG.get("useLocalSDK");y&&!h?CONFIG.set("remoteImportsPath","https://sdk.qcobjects.dev/v2.4/src/js/"):CONFIG.set("relativeImportPath","qcobjects-sdk/src/js/"),typeof t._DOMCreateElement>"u"&&(t._DOMCreateElement=function(N){var _;return u?_=document.createElement(N):_={},_});let T=GlobalSettings.__start__.bind(t);var v;u&&!h?v=[Import("org.qcobjects.i18n_messages",function(){},y),Import("org.qcobjects.models",function(){},y),Import("org.qcobjects.components",function(){},y),Import("org.qcobjects.components.grid",function(){},y),Import("org.qcobjects.components.list",function(){},y),Import("org.qcobjects.components.slider",function(){},y),Import("org.qcobjects.components.notifications",function(){},y),Import("org.qcobjects.components.splashscreen",function(){},y),Import("org.qcobjects.controllers",function(){},y),Import("org.qcobjects.controllers.grid",function(){},y),Import("org.qcobjects.controllers.list",function(){},y),Import("org.qcobjects.controllers.slider",function(){},y),Import("org.qcobjects.controllers.form",function(){},y),Import("org.qcobjects.controllers.swagger",function(){},y),Import("org.qcobjects.effects",function(){},y),Import("org.qcobjects.modal.controllers",function(){},y),Import("org.qcobjects.views",function(){},y),Import("org.qcobjects.tools.canvas",function(){},y),Import("org.qcobjects.tools.layouts",function(){},y),Import("org.qcobjects.cloud.auth.session.usertoken",function(){},y),Import("org.qcobjects.cloud.auth.session.data",function(){},y)]:typeof pe<"u"&&(v=[new Promise((N,_)=>{Qe(),et(),tt(),nt(),rt(),ot(),at(),it(),st(),dt(),lt(),ct(),ut(),ft(),pt(),ht(),mt(),gt(),bt(),yt(),vt(),N()})]),t._sdk_=Promise.all(v).then(()=>{CONFIG.set("useSDK",!0),CONFIG.set("remoteImportsPath",m),CONFIG.set("relativeImportPath",g),T()})}},"__qcobjects_sdk__").call(null,typeof me=="object"&&typeof me.exports=="object"?me.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var It=R((eo,Ot)=>{var Ft=wt();Ot.exports=Ft});var Ct=R((ho,ie)=>{l(function w(t){"use strict";if(typeof Object.defineProperty<"u"&&typeof t<"u")try{Object.defineProperty(t,"__qcobjects__",{enumerable:!0,configurable:!1,writable:!1,value:w})}catch{typeof t.__qcobjects__<"u"&&(t.__qcobjects__.loaded=!0)}if(typeof t.__qcobjects__.loaded>"u"){let ue=function(n){h?de.push(n.bind(window)):typeof a<"u"&&de.push(n.bind(a))};l(ue,"Ready"),t.__qcobjects__.loaded=!0;var a=t;t.global=a;var u=typeof window<"u"&&"Deno"in window,h=typeof window<"u"&&typeof window.self<"u"&&window===window.self&&!u,m=typeof ie<"u",g=l(function(){},"deno_require"),y=l(function(){return u?g(...arguments):pe(...arguments)},"_require_"),v=l(function(n){var e=typeof n.prototype<"u"?n.prototype.toString:function(){return""};typeof n.prototype<"u"&&(n.prototype.toString=function(){var r=["__qcobjects__","__qcobjects_sdk__","__loaded__","ComplexStorageCache","css","append","attachIn","debug","info","warn","QC_Append","set","get","done","componentDone","_new_","__new__","Class","ClassFactory","New","Export","Package","Import","subelements","componentLoader","buildComponents","Controller","View","VO","Service","serviceLoader","JSONService","ConfigService","SourceJS","SourceCSS","ArrayList","ArrayCollection","Effect","Timer","sum","avg","table","max","min","range","matrix","matrix2d","matrix3d","unique","uniqueId","shortCode","NamespaceRef"],o;return r.includes(this.name)?o=this.name+"{ [QCObjects native code] }":o=e.call(this),o})},"_protected_code_");v(Function);var T=l(function(n){var e=[];for(var r in n)(typeof n[r]).toLowerCase()==="function"&&e.push(n[r]);return e},"_methods_");String.prototype.__mAll__=function(n){var e=[];return this.replace(n,function(){var r=Array.prototype.slice.call(arguments,0,-2);r.input=arguments[arguments.length-1],r.index=arguments[arguments.length-2],e.push(r)}),e},typeof String.prototype.matchAll>"u"&&(String.prototype.matchAll=String.prototype.__mAll__);var N=l(function(n){var e;return h?e=document.createElement(n):e={},e},"_DOMCreateElement");if(!h){let n=y("fs")}var _=l(function(n){var e=l(function(){var r=new WeakSet,o=0;return function(s,i){if(typeof i=="object"&&i!==null){if(r.has(i))return o+=1,o<=3?Ae(i):null;r.add(i)}return i}},"getCircularReplacer");return JSON.stringify(n,e())},"_DataStringify");if(h){var G=l(function(e){return[...this.querySelectorAll(e)]},"subelements");Element.prototype.subelements=G,HTMLDocument.prototype.subelements=G,HTMLElement.prototype.subelements=G,typeof ShadowRoot<"u"&&(ShadowRoot.prototype.subelements=G)}if(h)try{t=typeof window.top<"u"?window.top:window,t._allowed_=!0}catch{try{t=document,t._allowed_=!0}catch{try{t=a,t._allowed_=!0}catch{t={},t._allowed_=!0}}}else typeof a<"u"&&(t=a);var j,F,W="quick-component:not([loaded]),component:not([loaded])";if(F=function(){var n="";if(h){var e=t.document.baseURI.split("?")[0].split("/");e.pop(),n=e.join("/")+"/"}else{var r;try{r=y("process")}catch{}typeof r<"u"?n=`${r.cwd()}/`:n=""}return n}(),h){"Promise"in t||(t.Promise=function(n){var e={then(){},catch(){},_then(r){this.then.call(e,r)},_catch(r){this.catch.call(e,r)}};return n.call(e,e._then,e._catch),e}),typeof t.console>"u"&&(t.console=function(){},t.console.prototype.log=function(n){}),j=function(){return typeof document<"u"&&document.domain!==""?document.domain:"localhost"}();var Z=function(){var n=t[(![]+[])[+!+[]+ +!+[]]+(typeof![])[+!+[]]+(typeof[])[(+!+[]+ +!+[])*(+!+[]+ +!+[])]+(![]+[])[+!+[]]+(!![]+[])[+[]]+([]+[]+[][[]])[+[+!+[]+[+[]]]/(+!+[]+ +!+[])]+(typeof![])[+!+[]]+([]+[]+[][[]])[+!+[]]]["h"+(typeof![])[+!+[]]+(![]+[])[+!+[]+(+!+[]+ +!+[])]+(!![]+[])[+[]]].toLowerCase();return n}(),He=function(){return typeof cordova<"u"}()}else{var Z="secret";j="localhost"}t._asyncLoad=[];var ge=l(function(n,e){var r={func:n,args:e,dispatch(){this.func.apply(null,this.args)}};return t._asyncLoad.push(r),r},"asyncLoad");if(h){var St=l(function(){document.readyState==="complete"&&t._asyncLoad.map(function(n){n.dispatch.call(n)})},"_fireAsyncLoad");document.onreadystatechange=St}else typeof t.global<"u"&&(t.global._fireAsyncLoad=function(){t._asyncLoad.map(function(n){n.dispatch.call(n)})});t.asyncLoad=ge;var _t=l(function(){return{debugEnabled:!0,infoEnabled:!0,warnEnabled:!0,debug(n){this.debugEnabled&&console.log("\x1B[35m%s\x1B[0m",`[DEBUG][${performance.now().toLocaleString()}] ${n}`)},info(n){var e;this.infoEnabled&&(h?e="\x1B[103m%s\x1B[0m":e="\x1B[33m%s\x1B[0m",console.info(e,`[INFO][${performance.now().toLocaleString()}] ${n}`))},warn(n){this.warnEnabled&&console.warn("\x1B[31m%s\x1B[0m",`[WARN][${performance.now().toLocaleString()}] ${n}`)}}},"Logger"),c=new _t;c.debugEnabled=!1,c.infoEnabled=!0,t.logger=c;var ee={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode(n){var e="",r,o,s,i,d,f,p,b=0;for(n=ee._utf8_encode(n);b<n.length;)r=n.charCodeAt(b++),o=n.charCodeAt(b++),s=n.charCodeAt(b++),i=r>>2,d=(r&3)<<4|o>>4,f=(o&15)<<2|s>>6,p=s&63,isNaN(o)?f=p=64:isNaN(s)&&(p=64),e=e+this._keyStr.charAt(i)+this._keyStr.charAt(d)+this._keyStr.charAt(f)+this._keyStr.charAt(p);return e},decode(n){var e="",r,o,s,i,d,f,p,b=0;for(n=n.replace(/[^A-Za-z0-9+/=]/g,"");b<n.length;)i=this._keyStr.indexOf(n.charAt(b++)),d=this._keyStr.indexOf(n.charAt(b++)),f=this._keyStr.indexOf(n.charAt(b++)),p=this._keyStr.indexOf(n.charAt(b++)),r=i<<2|d>>4,o=(d&15)<<4|f>>2,s=(f&3)<<6|p,e=e+String.fromCharCode(r),f!==64&&(e=e+String.fromCharCode(o)),p!==64&&(e=e+String.fromCharCode(s));return e=ee._utf8_decode(e),e},_utf8_encode(n){n=n.replace(/rn/g,"n");for(var e="",r=0;r<n.length;r++){var o=n.charCodeAt(r);o<128?e+=String.fromCharCode(o):o>127&&o<2048?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(o&63|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(o&63|128))}return e},_utf8_decode(n){for(var e="",r=0,o=0,s=0,i=0,d;r<n.length;)o=n.charCodeAt(r),o<128?(e+=String.fromCharCode(o),r++):o>191&&o<224?(i=n.charCodeAt(r+1),e+=String.fromCharCode((o&31)<<6|i&63),r+=2):(i=n.charCodeAt(r+1),d=n.charCodeAt(r+2),e+=String.fromCharCode((o&15)<<12|(i&63)<<6|d&63),r+=3);return e}},At=l(function(n,e){var r=l(function(o,s){var i=2e3,d=0,f=setInterval(function(){s.call()?(clearInterval(f),o.call(),c.debug("Ejecuting "+o.name+" after wait")):d<i?(d+=1,c.debug("WAIT UNTIL "+o.name+" is true, "+d.toString()+" cycles")):(c.debug("Max execution time for "+o.name+" expression until true"),clearInterval(f))},1)},"_waitUntil");setTimeout(function(){r(n,e)},1)},"waitUntil");if(typeof te>"u")var te={getItem(n){return Object.hasOwnProperty.call(this,n)?this[n]:null},setItem(n,e){this[n]=e},removeItem(n){delete this[n]}};var J=l(function(n){var e,r,o;if(e=n.index,typeof e<"u"){r=n.load,o=n.alternate;var s=this.getID(e),i=te.getItem(s);if(this.isEmpty(i)){var d=r.call(null,{cachedObjectID:s,cachedResponse:i,cache:this});this.save(e,d),c.debug("RESPONSE OF {{cachedObjectID}} CACHED".replace("{{cachedObjectID}}",s))}else{var f=o.call(null,{cachedObjectID:s,cachedResponse:i,cache:this});c.debug("RESPONSE OF {{cachedObjectID}} IS ALREADY CACHED ".replace("{{cachedObjectID}}",s))}}else throw new Error("ComplexStorageCache: index is undefined");return this},"ComplexStorageCache");if(J.prototype.getItem=function(n){var e=te.getItem(n);return this.isEmpty(e)?null:JSON.parse(e)},J.prototype.setItem=function(n,e){te.setItem(n,_(e))},J.prototype.isEmpty=function(n){var e=!1;switch(!0){case typeof n>"u":case(typeof n=="string"&&n===""):case(typeof n=="string"&&n==="undefined"):case(typeof n=="number"&&n===0):case n===null:e=!0;break;default:e=!1}return e},J.prototype.getID=function(n){var e;return typeof n<"u"&&(e="cachedObject_"+ee.encode(_(n).replace(/\{|\}|,/g,"_"))),e},J.prototype.save=function(n,e){var r=this.getID(n);c.debug("CACHING THE RESPONSE OF {{cachedObjectID}} ".replace("{{cachedObjectID}}",r)),this.setItem(r,e)},J.prototype.getCached=function(n){var e=this.getID(n);return this.getItem(e)},J.prototype.clear=function(){Object.keys(te).filter(function(n){return n.startsWith("cachedObject_")}).map(function(n){te.removeItem(n)})},h){var _e=!1;try{var $e=Object.defineProperty({},"passive",{get(){return _e=!0,_e}});window.addEventListener("testPassive",null,$e),window.removeEventListener("testPassive",null,$e)}catch{}var Et=l(function(){return _e?{passive:!0}:!1},"captureFalse")}h&&(Element.prototype.find=function(n){var e=[],r=document.subelements(n);return r.map(function(o,s){typeof r[s]<"u"&&r[s].parentNode.tagName===this.parentNode.tagName&&e.push(le(o,new Object))}),e});var se,Ut=function(){var n=Object.prototype.hasOwnProperty;return function(e){if(typeof e!="object")throw TypeError("Object prototype may only be an Object or null. The type is "+typeof e);var r=l(function(){},"QCObjects");r.prototype=e;var o=new r;if(arguments.length>1){var s=Object(arguments[1]);for(var i in s)n.call(s,i)&&(o[i]=s[i])}return o}}();typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:l(function(e,r){"use strict";if(e===null)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(e),s=1;s<arguments.length;s++){var i=arguments[s];if(i!==null)for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(o[d]=i[d])}return o},"assign"),writable:!0,configurable:!0});var Ue=l(function(n){return!!(typeof n=="function"&&n.toString().startsWith("class"))},"__is_raw_class__"),Ae=l(function(n){var e;switch(!0){case typeof n=="string":e=n;break;case typeof n=="number":e=n;break;case typeof n=="object":e=Object.assign({},n);break;case typeof n=="function":e=n.bind({});break;case Ue(n):e=l(class extends n{},"_value_");break;default:break}return e},"_LegacyCopy"),X={},z={},Ee=[],de=[],be=l(function(n){var e="";return typeof n=="function"&&Object.hasOwnProperty.call(n,"name")&&n.name!==""?e=n.name:typeof n<"u"&&typeof n.constructor=="function"&&n.constructor.name!==""?e=n.constructor.name:typeof n<"u"&&typeof n.constructor=="object"&&(e=n.constructor.toString().replace(/\[(.*?)\]/g,"$1").split(" ").slice(1).join("")),e},"ObjectName"),le=l(function(n,e){for(var r in n)if(typeof n[r]<"u")try{e[r]=n[r]}catch{}return e},"_Cast"),ne=l(function(n,e){for(var r in n)if(typeof n[r]<"u"&&typeof n[r]!="function")try{e[r]=n[r]}catch{}else if(typeof n[r]=="function")try{e[r]=n[r].bind(e)}catch(o){c.warn(o)}return e},"_CastProps"),Pt=l(function(){return["__proto__","prototype","Object","Map","defineProperty","indexOf","toString","__instanceID"].indexOf(arguments[0])!==-1},"__is__forbidden_name__"),Y=l(function(e){var r="";switch(!0){case(Ue(e)&&!!e.name):r=e.name;break;case(typeof e=="object"&&!!e.constructor&&!!e.constructor.name&&e.constructor.name!==""):r=e.constructor.name;break;case(!!e&&!!e.__classType&&e.__classType!==""):r=e.__classType;break;case(!!e&&!!e.__definition&&!!e.__definition.__classType&&e.__definition.__classType!==""):r=e.__definition.__classType;break;case(typeof e=="function"&&!!e.name):r=e.name;break;default:r=be(e);break}return r},"__getType__"),re=l(function(e,r){return!!(typeof e<"u"&&e!==null&&((K(e)||ce(e))&&e.hierarchy().includes(r)||Y(e)===r||be(e)===r||typeof e===r))},"is_a"),Pe=l(function(n){if(typeof n<"u")if(h)try{t[n.name]=n,window[n.name]=n}catch{}else typeof a<"u"&&(Object.hasOwnProperty.call(a,n.name)||(a[n.name]=n))},"__make_global__"),We=l(function(n,e){var r=n.name||Y(n);return n.__definition.__classType=r,typeof e<"u"&&(n.__definition.__namespace=e),X[r]=n,t[r]=X[r],t[r]},"__register_class__"),ke=l(function(n,e){return We(n,e)},"RegisterClass");Pe(ke);var V=l(function(){var n={},e,r,o;switch(arguments.length){case 0:return class{};case 1:e=arguments[0],r=l(class{},"type"),o={};break;case 2:e=arguments[0],r=l(class{},"type"),o=arguments[1];break;case 3:e=arguments[0],r=arguments[1],o=arguments[2];break;default:break}if(typeof r!="function")throw new Error("Class type must be a function or class");if(Pt.call(this,e))throw new Error(`${e} is not an allowed word in the name of a class`);return typeof r.__definition<"u"&&(o.__definition=Object.assign(Ae(r.__definition),r)),n[r.name]=r,typeof o>"u"||o===null?o={}:o=Ae(o),typeof o.__instanceID<"u"&&delete o.__instanceID,X[e]=class extends n[r.name]{__classType=e;__definition={...o};static hierarchy(s){var i=l(function(p){return Object.hasOwnProperty.call(p,"__classType")?p.__classType:Y.call(s,p)},"__classType"),d=l(p=>typeof p<"u"&&typeof p.__proto__<"u"&&p.__proto__!==null?(i(p)!==""?[i(p)]:[]).concat(d(p.__proto__)):[],"__hierarchy__proto__");(typeof s>"u"||s===null)&&(s=this);var f=[];return f.push(i(s)),f=f.concat(d(s.__proto__)),f}static getParentClass(){return Object.getPrototypeOf(this.prototype.constructor)}constructor(){var s;arguments.length>0?s={...arguments[0]}:s={},super(s);let i=this;if(se=typeof se>"u"||se===null?0:se+1,i.__instanceID||Object.defineProperty(i,"__instanceID",{value:se,writable:!1}),typeof i.__definition<"u"&&Object.keys(i.__definition).filter(function(d){return isNaN(d)&&!["name","__instanceID","__classType","__definition"].includes(d)}).forEach(function(d){typeof i.__definition[d]=="function"?i[d]=i.__definition[d].bind(i):i[d]=i.__definition[d]}),T(X[i.__classType]).map(function(d){i[d.name]=d.bind(i)}),T(i.__definition).map(function(d){i[d.name]=d.bind(i)}),i.body)if(typeof i.__definition>"u"||!Object.hasOwnProperty.call(i.__definition,"body")||typeof i.__definition.body>"u")try{h?i.body=N(i.__definition.__classType):i.body={}}catch{i.body={}}else Object.hasOwnProperty.call(i.__definition,"body")&&(i.body=i.__definition.body);try{if(typeof i.__new__=="function"?i.__new__.call(i,s):typeof super.__new__=="function"&&(i.__new__=super.__new__.bind(i),i.__new__.call(i,s)),typeof i=="object"&&Object.hasOwnProperty.call(i,"_new_")&&typeof i._new_.isCalled>"u")try{i._new_.call(i,s),i._new_.isCalled=!0}catch(d){c.warn(`${i.__classType}._new_() failed with error: ${d}`)}}catch(d){c.warn(d)}}__new__(s){ne(s,this)}_new_(){}getClass(){return Object.getPrototypeOf(this.constructor)}css(s){return typeof this.body<"u"&&this.body.style!=="undefined"&&(c.debug("body style"),this.body.style=le(s,this.body.style)),this.body.style}hierarchy(){var s=this;return this.getClass().hierarchy(s)}append(i){c.debug("append: start"),re(i,"Component")&&(c.debug("append: child is a Component"),c.debug(`appending the body of ${i.name}`));var i=arguments.length>0?arguments[0]:this.body;typeof this.body<"u"&&(c.debug("append element"),arguments.lenght>0?(c.debug("append to element"),this.body.append(i),typeof this.childs>"u"&&(this.childs=[]),this.childs.push(i)):h&&(c.debug("append to body"),document.body.append(i)))}attachIn(s){if(h)for(var i=document.subelements(s),d=0,f=i.length;d<f;d++)i[d].append(this);else throw new Error("attachIn not yet implemented for non browser platforms")}},X[e]=ne(o,X[e]),X[e].__definition=o,X[e].__definition.__classType=e,X[e].__definition.__new__=l(function(i){ne(i,this)},"__new__"),t[e]=X[e],t[e]},"Class");V.prototype.toString=function(){return"Class(name, type, definition) { [QCObjects native code] }"};var I=l(function(n){var e;if(n!==null&&n.indexOf(".")>-1){var r=n.split(".").slice(0,n.split(".").length-1).join("."),o=n.split(".").slice(-1).join(""),s=$(r),i=typeof s<"u"?s.filter(d=>K(d)&&(d.__definition.__classType===o||typeof d=="function"&&!!d.name)).reverse():[];if(i.length>0)e=i[0];else throw Error(`Class ${n} not found.`)}else n!==null&&Object.hasOwnProperty.call(X,n)&&(e=X[n]);return e},"ClassFactory");h&&(Element.prototype.append=l(function(e){ce(e)||typeof e.body<"u"?this.appendChild(e.body):this.appendChild(e)},"QC_Append"),Element.prototype.render=l(function(e){var r=this,o=l(function(s,i){if(typeof document.implementation.createHTMLDocument<"u"){var d=document.implementation.createHTMLDocument("");d.innerHTML=i,d.body.subelements("*").map(function(f){return s.append(f)})}},"_appendVDOM");if(typeof this.innerHTML<"u")try{this.innerHTML+=e}catch{o(r,e)}else o(r,e)},"QC_Render"));var ze=l(function(n,e,r){return I(n)[e]},"_super_");ze.prototype.toString=function(){return"_super_(className,classMethodName,params) { [QCObjects native code] }"};var H=l(function(n,e){return e=arguments.length>1?e:{},typeof n>"u"?new Object:new n(e)},"New");H.prototype.toString=function(){return"New(QCObjectsClassName, args) { [QCObjects native code] }"};var P=l(function(n){return Pe(n)},"Export");if(P.prototype.toString=function(){return"Export(function or symbol) { [QCObjects native code] }"},!h){var ye=l(function(n){let e=y("fs");var r=null;try{var o=[`${t.CONFIG.get("projectPath")}${t.CONFIG.get("relativeImportPath")}`,`${t.CONFIG.get("basePath")}${t.CONFIG.get("relativeImportPath")}`,`${t.CONFIG.get("projectPath")}`,`${t.CONFIG.get("basePath")}`,`${t.CONFIG.get("relativeImportPath")}`,`${process.cwd()}${t.CONFIG.get("relativeImportPath")}`,`${process.cwd()}/node_modules/`+n,`${process.cwd()}/node_modules`,`${process.cwd()}`,"node_modules","./",""].concat(ie.paths);o=o.filter(s=>e.existsSync(s+"/"+n)),o.length>0&&(r=o[0],c.info(n+" is Installed."))}catch(s){console.log(s)}return r},"findPackageNodePath");P(ye)}V("_Crypt",Object,{last_string:"",last_key:"",construct:!1,_new_(n){var e=n.string,r=n.hasOwnProperty.call(n,"key")?n.key:null;this.__new__(n),r=r===null?this.__instanceID:r,this.last_key=r,this.last_string=e,this.construct=!0},_encrypt(){for(var n=this.string,e=this.key,r="",o,s,i=0;i<n.length;i++)o=n.substr(i,1),s=e.substr(i%e.length-1,1),o=String.fromCharCode(o.charCodeAt(0)+s.charCodeAt(0)),r+=o;return this.last_string=ee.encode(r),this.last_string},_decrypt(){var n=this.string,e=this.key,r="",o,s;n=ee.decode(n);for(var i=0;i<n.length;i++)o=n.substr(i,1),s=e.substr(i%e.length-1,1),o=String.fromCharCode(o.charCodeAt(0)-s.charCodeAt(0)),r+=o;return this.last_string=r,this.last_string},encrypt(n,e){var r=H(I("_Crypt"),{string:n,key:e!==""?e:"12345678ABC"});return r._encrypt()},decrypt(n,e){var r=H(I("_Crypt"),{string:n,key:e!==""?e:"12345678ABC"});return r._decrypt()}});var kt=l(function(n){return I("_Crypt").encrypt(_(n),Z)},"_CryptObject"),Ze=l(function(n){return n===""?{}:JSON.parse(I("_Crypt").decrypt(n,Z))},"_DecryptObject"),Be=l(function(){var n=1e3,e=I("_Crypt").encrypt((Math.random()*n).toString().replace(".",""),new Date().getTime().toString()),r=I("_Crypt").encrypt((Math.random()*n).toString().replace(".",""),new Date(new Date().getTime()-1e3*1e3).getTime().toString()),o=r.list().map((s,i)=>e.list()[i]===s?null:s).filter(s=>s!==null).join("");return o},"shortCode"),Wt=Be;V("InheritClass",class{},{});class L extends I("InheritClass"){component=null;__definition={};__classType="Processor";static processors={config(e,r){return t.CONFIG.get(r,"")},ENV(e,r){return typeof process<"u"?process.env[r]:""},global(e,r){return typeof a<"u"?a[r]:""}};static setProcessor(e){typeof e=="function"&&e.name!==""&&(this.processors[e.name]=e)}constructor(){super(...arguments),this.processors=L.processors,this.process=L.process.bind(this),this.processObject=L.processObject.bind(this),this.setProcessor=L.setProcessor.bind(this),this.execute=L.execute.bind(this)}static execute(e,r,o){var s=typeof e<"u"&&e!==null?e.processorHandler:this;return s.processors[r].bind(s).apply(s,[e,...o.split(",")])}static process(e,r=null){var o=r!==null?r.processorHandler:H(L,{component:null});return typeof e=="string"&&Object.keys(o.processors).map(function(s){[...e.matchAll(new RegExp("\\$"+s+"\\((.*)\\).*","g"))].map(function(i){var d=`$${s}(${i[1]})`;e=e.replace(d,o.execute.bind(o).call(o,r,s,i[1]))})}),e}static processObject(e,r=null){var o=r===null?this:r.processorHandler;return typeof o>"u"&&(o=new L({component:r})),typeof e=="object"?Object.keys(e).map(function(s){typeof e[s]=="object"&&!e[s].hasOwnProperty.call(e[s],"call")?e[s]=o.processObject.bind(o)(e[s],r):typeof e[s]=="string"&&(e[s]=o.process.bind(o)(e[s],r))}):typeof e=="string"&&(e=o.process.bind(o)(e,r)),e}}l(L,"Processor"),L.__definition={},L.__classType="Processor",ke(L,"com.qcobjects"),Pe(L);class ve{static _instance=null;static _CONFIG_ENC=null;static get instance(){if(this._instance===null){var e=new ve;e._CONFIG={relativeImportPath:"",remoteImportsPath:"",remoteSDKPath:"https://sdk.qcobjects.dev/v2.4/src/",asynchronousImportsLoad:!1,removePackageScriptAfterLoading:!0,componentsBasePath:"",delayForReady:0,preserveComponentBodyTag:!1,useConfigService:!1,routingWay:"hash",useSDK:!0,useLocalSDK:!1,basePath:F},e._CONFIG_ENC=null,this._instance=e}return this._instance}static set instance(e){this._instance=e}}l(ve,"ConfigSettings"),X.ConfigSettings=ve,V("CONFIG",Object,{get _CONFIG_ENC(){return I("ConfigSettings").instance._CONFIG_ENC},get _CONFIG(){return I("ConfigSettings").instance._CONFIG},set(n,e){c.debug(`CONFIG.set  ${n}: ${e}`),n==="basePath"&&(F=e);var r;try{r=function(o){o._CONFIG_ENC===null&&(o._CONFIG_ENC=I("_Crypt").encrypt(_({}),Z));var s=o._CONFIG_ENC.valueOf(),i=o._CONFIG.valueOf();return ne(i,Ze(s))}(I("ConfigSettings").instance)}catch(o){r={},console.error(o),c.debug("failed to encrypt config")}r[n]=e,I("ConfigSettings").instance._CONFIG_ENC=kt(r),Object.hasOwnProperty.call(I("ConfigSettings").instance,"_CONFIG")&&Object.hasOwnProperty.call(I("ConfigSettings").instance._CONFIG,n)&&(I("ConfigSettings").instance._CONFIG[n]=e)},get(n,e){var r;try{var o=function(s){s._CONFIG_ENC===null&&(s._CONFIG_ENC=I("_Crypt").encrypt(_({}),Z));var i=s._CONFIG_ENC.valueOf(),d=s._CONFIG.valueOf();return ne(d,Ze(i))}(I("ConfigSettings").instance);typeof o[n]<"u"?r=o[n]:typeof e<"u"&&(r=e)}catch(s){console.error(s),c.debug("Something wrong when trying to get CONFIG values"),c.debug("No config value for: "+n),r=e}return L.processObject.call(L,r)}}),P(At),P(ze),P(J),P(I),P(N),P(Be),P(Y),P(re);var ce=l(function(n){return!!(typeof n=="object"&&Object.hasOwnProperty.call(n,"__classType")&&n.__instanceID&&Object.hasOwnProperty.call(n,"__definition")&&typeof n.__definition<"u")},"isQCObjects_Object"),K=l(function(n){return!!(typeof n=="function"&&!n.__instanceID&&n.__definition&&typeof n.__definition<"u"&&n.__definition.__classType)},"isQCObjects_Class"),$=l(function(n,e){return z.hasOwnProperty.call(z,n)&&typeof z[n]<"u"&&z[n].hasOwnProperty.call(z[n],"length")&&z[n].length>0&&typeof e<"u"&&e.hasOwnProperty.call(e,"length")&&e.length>0?(e.filter(function(r){return K(r)}).map(function(r){r.__definition.__namespace=n,r.__namespace=n}),z[n]=z[n].concat(e)):typeof e<"u"&&(typeof e=="object"&&e.hasOwnProperty.call(e,"length")?e.filter(function(r){return K(r)}).map(function(r){r.__definition.__namespace=n,r.__namespace=n}):K(e)&&(e.__definition.__namespace=n,e.__namespace=n),z[n]=e),Object.hasOwnProperty.call(z,n)&&z[n].map(function(r){We(r,n)}),Object.hasOwnProperty.call(z,n)?z[n]:void 0},"Package");$.prototype.toString=function(){return"Package(namespace, classes) { [QCObjects native code] }"},$("com.qcobjects",[L]);var jt=l(function(n){let r=$(n).filter(o=>K(o)).map(o=>({[o.__definition.__classType]:o})).reduce((o,s)=>Object.assign(o,s));return n.split(".").map(o=>({[o]:r})).reverse().reduce((o,s)=>(s[Object.keys(s)]=o,s))},"NamespaceRef"),je=l(function(){var n,e=l(function(){},"ready"),r=!1;if(!(arguments.length<1)){arguments.length===1?n=arguments[0]:arguments.length===2?(n=arguments[0],e=arguments[1]):arguments.length>2&&(n=arguments[0],e=arguments[1],r=arguments[2],c.debug("[Import] Setting external="+r.toString()+" resource to import: "+n)),r?c.debug("[Import] Registering external resource to import: "+n):c.debug("[Import] Registering local resource to import: "+n);var o;return h?(o=new Promise(function(s,i){var d=l(function(){var b=!1,O=0;for(var C in z)O++;return O<Ee.length?b=!1:b=!0,b},"allPackagesImported"),f=l(function(b){Ee.push(e),d()&&Ee.map(function(O){de.push(O)}),h&&t.CONFIG.get("removePackageScriptAfterLoading")&&b.target.remove(),s.call(o,{_imported_:b.target,_package_name_:n})},"readyImported");if(!z.hasOwnProperty.call(z,n)){var p=N("script");p.type=t.CONFIG.get("sourceType","text/javascript"),p.async=!!t.CONFIG.get("asynchronousImportsLoad"),p.onreadystatechange=function(){p.readyState==="complete"&&f.call()},p.onload=f,p.onerror=function(b){i.call(o,{_imported_:p,_package_name_:n})},p.src=r?t.CONFIG.get("remoteImportsPath")+n+".js":F+t.CONFIG.get("relativeImportPath")+n+".js",document.getElementsByTagName("head")[0].appendChild(p)}}),o.catch(function(){c.debug("Import: Error loading a package ")})):o=new Promise(function(s,i){try{var d=ye(n),f="";if(d!==null)f=d+"/"+n;else{var p=ye(n+".js");p!==null?f=p+"/"+n+".js":f=F+t.CONFIG.get("relativeImportPath")+n}try{s.call(o,{_imported_:y(`${f}`),_package_name_:n})}catch(b){i.call(o,{_imported_:null,_package_name_:n,error:b})}}catch(b){i.call(o,{_imported_:null,_package_name_:n,error:b})}}).catch(function(s){c.debug("Something happened when importing "+n),console.warn(s)}),o.catch(function(s){c.warn(_(s))}),o}},"Import");je.prototype.toString=function(){return"Import(packagename,ready,external) { [QCObjects native code] }"},h&&(Element.prototype.Cast=l(function(r){r.__definition.body=this;var r=H(r);return r},"QC_Object")),V("TagElements",Array,{show(){this.map(function(n){return n.style.opacity=1})},hide(){this.map(function(n){return n.style.opacity=0})},effect(){var n=[...arguments].slice(1),e=arguments[0];(typeof e).toLowerCase()==="string"&&(e=I(e)),this.map(function(r){return e.apply.apply(e,[r].concat(n))})},findElements(n){var e=H(I("TagElements"));if(h)for(var r in this)typeof r=="number"&&typeof this[r]!="function"&&this[r].hasOwnProperty.call(this[r],"subelements")&&e.push(this[r].subelements(n));return e}});var Mt=l(function(n,e){var r=H(I("TagElements"));if(h)for(var o=document.subelements(n),s=[],i=0;i<o.length;i++)typeof e<"u"&&o[i].hasOwnProperty.call(o[i],"innerHTML")&&(o[i].innerHTML=e),s.indexOf(i)<0&&(r.push(o[i]),s.push(i));return r},"Tag"),Rt=ue,Me=l(function(n){var e=l(function(){de.map(function(r,o){typeof r=="function"&&(r.call(),delete de[o])})},"_execReady");t.CONFIG.get("delayForReady")>0?h?setTimeout(e.bind(window),t.CONFIG.get("delayForReady")):typeof a<"u"&&setTimeout(e.bind(a),t.CONFIG.get("delayForReady")):e.call(t)},"_Ready");h?(window.onload=Me,He&&document.addEventListener("deviceready",Me,Et)):a.onload=Me;class Ke extends I("InheritClass"){constructor({instance:e,name:r,fget:o,fset:s,value:i}){super({instance:e,name:r,fget:o,fset:s,value:i}),this._new_({instance:e,name:r,fget:o,fset:s,value:i})}_new_({instance:e,name:f,fget:o,fset:s,value:i}){var d=this,f=typeof f>"u"?be(d):f;Object.defineProperty(e,f,{set(p){let b=p;c.debug("value changed "+f);var O;typeof s<"u"&&typeof s=="function"?O=s(b):O=b,e["_"+f]=O},get(){let p=e["_"+f];c.debug("returning value "+f);var b=l(function(C){return typeof C=="object"&&Object.hasOwnProperty.call(C,"value")?C.value:C},"is_ddo"),O;return typeof o<"u"&&typeof o=="function"?O=o(b(p)):O=b(p),O}})}}l(Ke,"DDO"),P(Ke);class qe{template="";__definition={};constructor({component:e,template:r}){this.component=e,this.template=r}assign(e){var r=this;if(typeof r.component>"u")throw new Error("DefaultTemplateHandler.assign: component is undefined");if(typeof r.component.processorHandler>"u")throw new Error("DefaultTemplateHandler.assign: component.processorHandler is undefined");var o=r.component.processorHandler;o.component=r.component;var s=typeof r.template<"u"?r.template:"";typeof e=="object"?[...Object.keys(e)].map(function(i){var d=e[i];if(typeof d=="string"||typeof d=="number"||!isNaN(d))try{d=L.processObject.bind(o).call(o,d,r.component),s=s.replace(new RegExp(`{{${i}}}`,"g"),d)}catch(f){throw c.warn(`${r.component.name} could not parse processors.`),Error(`${r.component.name} could not parse processors. Reason: ${f.message}`)}}):c.debug(`${r.component.name}.data is not an object`);try{s=L.processObject.call(o,s,r.component)}catch(i){throw c.warn(`${r.component.name} could not parse processors.`),Error(`${r.component.name} could not parse processors. Reason: ${i.message}`)}return s}}l(qe,"DefaultTemplateHandler"),qe.__definition={},ke(qe,"com.qcobjects");var Lt=l(function(n,e){let r=n.path.replace(/{(.*?)}/g,"(?<$1>.*)");return{...[...e.matchAll(new RegExp(r,"g"))][0].groups}},"__routing_params__"),Gt=l(function(n,e){return n.filter(function(r){var o=r.path.replace(/{(.*?)}/g,"(?<$1>.*)");return new RegExp(o,"g").test(e)}).reverse()},"__valid_routings__"),Xe=l(function(n,e){return n.includes(e)},"__valid_routing_way__"),Dt=l(function(n,e){var r=n.getAttribute("shadowed")===null,o=n.getAttribute("template-source")===null,s=n.getAttribute("shadowed")==="true",i=n.getAttribute("cached")===null,d=n.getAttribute("cached")==="true",f=typeof t.CONFIG.get("tplextension")<"u"?t.CONFIG.get("tplextension"):"html";f=n.getAttribute("tplextension")!==null?n.getAttribute("tplextension"):f;var p=n.getAttribute("name"),b=n.getAttribute("componentClass")!==null?n.getAttribute("componentClass"):"Component";let O=t.CONFIG.get("preserveComponentBodyTag")?p!==null?"com.qcobjects.components."+p+".ComponentBody":"com.qcobjects.components.ComponentBody":b;p=p!==null?p:I(O)&&typeof I(O).name<"u"?I(O).name:"";var C=I(O),x=O!=="Component"&&typeof C<"u"&&typeof C.tplsource=="string"&&C.tplsource!=="",A=o&&x?C.tplsource:o?"default":n.getAttribute("template-source");c.debug(`template source for  ${p} is ${A} `),c.debug(`type for ${p} is ${Y(C)} `);var E;E=Re({COMPONENTS_BASE_PATH:t.CONFIG.get("componentsBasePath"),COMPONENT_NAME:p,TPLEXTENSION:f,TPL_SOURCE:A}),t.CONFIG.get("preserveComponentBodyTag")&&$(p!==""?"com.qcobjects.components."+p:"com.qcobjects.components",[V("ComponentBody",I("Component"),{name:p,tplsource:A,tplextension:f,reload:!0})]);var S=l(function(){var M=r?C&&C.shadowed||I("Component").shadowed:s,D={__parent__:e,name:p,cached:i?I("Component").cached:d,shadowed:M,tplextension:f,body:t.CONFIG.get("preserveComponentBodyTag")?N("componentBody"):n,templateURI:E,tplsource:A};(typeof p>"u"||p===""||p===null)&&delete D.name,E===""&&delete D.templateURI;var q=H(C,D);return t.CONFIG.get("preserveComponentBodyTag")&&n.append(q),q},"__create_component_instance_"),U=S.call(this);return U},"_buildComponentFromElement_"),Ve=l(function(n,e){var r=[];return h?r=n.map(function(o){return Dt(o,e)}):c.debug("[_buildComponentsFromElements_] not implemented for Non-Browser environments"),r},"_buildComponentsFromElements_");$("com.qcobjects",[l(class extends I("InheritClass"){validRoutingWays=["pathname","hash","search"];basePath=F;domain=j;templateHandler="DefaultTemplateHandler";processorHandler=null;routingWay=null;routingNodes=[];routings=[];routingPath="";routingPaths=[];_componentHelpers=[];subcomponents=[];splashScreenComponent=void 0;controller=void 0;view=void 0;effect=void 0;method="GET";cached=!0;__promise__=null;__namespace=void 0;constructor({templateURI:e="",template:r,tplsource:o="default",tplextension:s,url:i="",name:d="",method:f="GET",data:p={},reload:b=!1,shadowed:O=!1,cached:C=!0,_body:x=N("div"),__promise__:A=null,__shadowRoot:E,body:S,shadowRoot:U,splashScreenComponent:M,controller:D,view:q}){if(arguments.length<1)throw Error("No arguments in component. You must at least give one argument.");super({templateURI:e,template:r,tplextension:s,tplsource:o,url:i,name:d,method:f,data:p,reload:b,shadowed:O,cached:C,_body:x,__promise__:A,__shadowRoot:E,body:S,shadowRoot:U,splashScreenComponent:M,controller:D,view:q});var k=this;typeof k.name>"u"&&c.warn("A name is not defined for "+Y(k)),k.routingWay=t.CONFIG.get("routingWay"),k.processorHandler=H(L,{component:k}),k.data=typeof k.data>"u"||k.data===null?{}:k.data,k.data=Object.assign(k.data,k.dataAttributes),k.createServiceInstance().then(function(we){typeof k.__new__=="function"&&k.__new__.call(k,k),k._generateRoutingPaths(k.body).then(function(){k._reroute_().then(function(){return k.rebuild().then(function(){c.info(`Component._new_ The component ${k.name} was built successfully!`)}).catch(function(Oe){c.warn(`Component._new_ Something went wrong building the component ${k.name}`),console.error(Oe)})})})})}set body(e){var r=this;r._body=e}get body(){var e=this;return e._body}set cacheIndex(e){c.debug("[cacheIndex] This property is readonly")}get cacheIndex(){var e=this,r=_(e.routingPath);return ee.encode(e.name+r)}set parsedAssignmentText(e){c.debug("[parsedAssignmentText] This property is readonly")}get parsedAssignmentText(){var e=this;if(e._parsedAssignmentText=e.parseTemplate(e.template),typeof e._parsedAssignmentText>"u")throw Error(`[Component][${this.name}][parsedAssignmentText] Could not generate content!`);return e._parsedAssignmentText}set shadowRoot(e){var r=this;typeof r.__shadowRoot>"u"?r.__shadowRoot=e:c.debug("[shadowRoot] This property can only be assigned once!")}get shadowRoot(){var e=this;return e.__shadowRoot}set routingSelected(e){c.debug("[routingSelected] This is a read-only property of the component")}get routingSelected(){var e=this;return Gt(e.routings,e.routingPath)}set routingParams(e){c.debug("[routingParams] This is a read-only property of the component")}get routingParams(){var e=this;return[{}].concat(e.routingSelected.map(function(r){return Lt(r,e.routingPath)})).reduce(function(r,o,s){return Object.assign(r,o)})}createServiceInstance(){var e=this,r=e.body,o=this.data,s,i=e.getClass().__definition,d=h&&r.getAttribute("serviceClass")!==null?r.getAttribute("serviceClass"):null;return new Promise(function(f,p){var b=!!(Object.hasOwnProperty.call(r,"enableServiceClass")&&r.enableServiceClass||!Object.hasOwnProperty.call(r,"enableServiceClass")),O=!!(h&&r.getAttribute("response-to")!==null&&r.getAttribute("response-to")==="data"),C=!!(h&&r.getAttribute("response-to")!==null&&r.getAttribute("response-to")==="template");if(b&&d!==null&&(s=I(d)),!O&&i&&Object.hasOwnProperty.call(i,"responseTo")?O=i.responseTo==="data":!O&&Object.hasOwnProperty.call(I("Component"),"responseTo")&&(O=I("Component").responseTo==="data"),!C&&i&&Object.hasOwnProperty.call(i,"responseTo")?C=i.responseTo==="template":!C&&Object.hasOwnProperty.call(I("Component"),"responseTo")&&(C=I("Component").responseTo==="template"),typeof s<"u"&&typeof b<"u"&&b===!0&&(O||C)){c.info("Loading service "+d);var x=H(s,{data:o});Ge(x).then(function({request:A,service:E}){var S;typeof E.JSONresponse<"u"&&E.JSONresponse!==null?S=E.JSONresponse:S=E.template,O&&(typeof o=="object"&&typeof S=="object"?o=Object.assign(o,S):o=S,e.data=o),e.serviceInstance=x,e.serviceData=o,C&&(e.template=S),f(S)},function(A){c.debug(`Service loading rejected for ${d} in ${e.name}`),p(A)}).catch(function(A){throw c.debug("Something went wroing while trying to load the service "+d),Error(`Error loading ${d} for ${e.name}. Detail: ${A}`)})}else f(null)})}_bindroute_(){var e=this;e._bindroute_.loaded?c.debug(`Routes already bound to popstate events for ${e.name}`):(h&&e.hostElements("a").map(function(r){return r.oldclick=r.onclick,r.onclick=function(o){var s=!0;t.global.get("routingPaths")||t.global.set("routingPaths",[]);var i=t.CONFIG.get("routingWay"),d=o.target[i];return t.global.get("routingPaths").includes(d)&&o.target[i]!==document.location[i]&&o.target.href!==document.location.href?(c.debug("A ROUTING WAS FOUND: "+d),window.history.pushState({href:o.target.href},o.target.href,o.target.href),I("Component").route(),s=!1):c.debug("NO ROUTING FOUND FOR: "+d),typeof o.target.oldclick<"u"&&typeof o.target.oldclick=="function"&&o.target.oldclick.call(o.target,o),s},null}),this._bindroute_.loaded=!0)}done(e){var r;if(typeof e<"u"){var{request:o,component:s}=e;r=Promise.resolve({request:o,component:s})}return r}createControllerInstance(){var e;if(h){if(typeof this.body>"u")throw new Error("The component has no body");var r=this.body.getAttribute("controllerClass");r||(r="Controller"),e=I(r),typeof e<"u"&&(this.controller=H(e,{component:this}))}return new Promise((o,s)=>{if(h&&typeof e<"u"&&typeof this.controller<"u"){if(typeof this.controller.done=="function")try{this.controller.done.call(this.controller)}catch(i){throw Error(i)}else c.debug(`${r} does not have a done() method.`),s(`${r} does not have a done() method.`);typeof this.controller.createRoutingController=="function"?this.controller.createRoutingController.call(this.controller):c.debug(`${r} does not have a createRoutingController() method.`)}o({component:this,controller:this.controller})})}createEffectInstance(){var e=this;return new Promise(function(r,o){if(h){var s=e.body.getAttribute("effectClass"),i=e.body.getAttribute("apply-effect-to");i=i!==null?i:"load",s!==null&&i==="observe"?e.applyObserveTransitionEffect(s):s!==null&&i==="load"&&e.applyTransitionEffect(s)}r({component:e,effect:e.effect})})}createViewInstance(){var e=this;return new Promise(function(r,o){var s=h?e.body.getAttribute("viewClass"):null;if(s!==null){var i=I(s);typeof i<"u"&&(e.view=H(i,{component:e}),Object.hasOwnProperty.call(e.view,"done")&&typeof e.view.done=="function"&&e.view.done.call(e.view))}r({component:e,view:e.view})})}__done__(){var e=this,r=l(function(){if(typeof e>"u")throw new Error("componentDone() has lost its context");if(typeof e.body>"u")throw new Error("The component has no body");e.createViewInstance(),e.createControllerInstance(),e.createEffectInstance(),c.debug(`Trying to run component helpers for ${e.name}...`);try{e.runComponentHelpers(),c.debug(`Component helpers for ${e.name} executed.`)}catch(o){throw c.debug(`Component helpers for ${e.name} could not be executed.`),Error(o)}e.subcomponents=e.__buildSubComponents__(),e._bindroute_(),e.body.setAttribute("loaded",!0)},"componentDone");return new Promise(function(o,s){try{Promise.resolve(r.call(e))}catch(i){s(i)}})}hostElements(e){var r=this,o=r.shadowed&&typeof r.shadowRoot<"u"?r.shadowRoot.subelements(e):r.body.subelements(e);return o}get subtags(){var e=this,r=W;return e.hostElements(r)}get bodyAttributes(){var e=this,r=e.body;return h?[...r.getAttributeNames()].map(o=>({[o]:r.getAttribute(o)})).reduce((o,s,i)=>Object.assign(o,s)):{}}get dataAttributes(){var e=this,r=e.body;return h?[{}].concat([...r.getAttributeNames()].filter(o=>o.startsWith("data-")).map(o=>({[o.split("-")[1]]:r.getAttribute(o)}))).reduce((o,s,i)=>Object.assign(o,s)):{}}__buildSubComponents__(e=!1){var r=this,o=r.subtags;return e||(o=o.filter(s=>s.getAttribute("loaded")!=="true")),(typeof r<"u"||r.subcomponents.length<1)&&(r.subcomponents=Ve(o,r)),r.subcomponents}fail(e){var r;if(typeof e<"u"){var{error:o,component:s}=e;r=Promise.resolve({error:o,component:s})}return r}set(e,r){this[e]=r}get(e){return this[e]}feedComponent(){var e=this;c.debug(`[Component][${this.name}][feedComponent] start feeding component...`);var r=l(function(i){if(typeof i.container>"u"&&typeof i.body>"u"){c.warn("COMPONENT {{NAME}} has an undefined container and body".replace("{{NAME}}",i.name));return}var d=typeof i.container>"u"||i.container===null?i.body:i.container,f=i.parsedAssignmentText;if(i.innerHTML=f,i.shadowed){c.debug("COMPONENT {{NAME}} is shadowed".replace("{{NAME}}",i.name)),c.debug("Preparing slots for Shadowed COMPONENT {{NAME}}".replace("{{NAME}}",i.name));var p=N("div");d.subelements("[slot]").map(function(C){C.parentElement===d&&p.appendChild(C)}),c.debug("Creating shadowedContainer for COMPONENT {{NAME}}".replace("{{NAME}}",i.name));var b=N("div");b.classList.add("shadowHost");try{i.shadowRoot=b.attachShadow({mode:"open"})}catch{try{c.debug("Shadowed COMPONENT {{NAME}} is repeated".replace("{{NAME}}",i.name)),i.shadowRoot=b.shadowRoot}catch{c.warn("Shadowed COMPONENT {{NAME}} is not allowed on this browser".replace("{{NAME}}",i.name))}}if(typeof i.shadowRoot<"u"&&i.shadowRoot!==null){i.reload?(c.debug("FORCED RELOADING OF CONTAINER FOR Shadowed COMPONENT {{NAME}}".replace("{{NAME}}",i.name)),b.shadowRoot.innerHTML=i.innerHTML):(p.innerHTML=i.parseTemplate(p.innerHTML),c.debug("ADDING Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}",i.name)),b.shadowRoot.innerHTML+=i.innerHTML),c.debug("ADDING Slots to Shadowed COMPONENT {{NAME}} ".replace("{{NAME}}",i.name)),b.innerHTML+=p.innerHTML,c.debug("APPENDING Shadowed COMPONENT {{NAME}} to Container ".replace("{{NAME}}",i.name));var O=d.querySelector(".shadowHost");typeof O<"u"&&O!==null?(c.debug("Shadowed Container for COMPONENT {{NAME}} is already present in the tree ".replace("{{NAME}}",i.name)),i.shadowRoot.innerHTML=b.shadowRoot.innerHTML):d.appendChild(b)}else c.warn("Shadowed COMPONENT {{NAME}} is bad configured".replace("{{NAME}}",i.name))}else i.reload?(c.debug("FORCED RELOADING OF CONTAINER FOR COMPONENT {{NAME}}".replace("{{NAME}}",i.name)),d.innerHTML=i.innerHTML):d&&i?(c.debug("ADDING COMPONENT {{NAME}} ".replace("{{NAME}}",i.name)),d.innerHTML+=i.innerHTML):c.warn("COMPONENT {{NAME}} is not added to the DOM".replace("{{NAME}}",i.name))},"_feedComponent_InBrowser"),o=l(function(i){var d=i.parsedAssignmentText;i.innerHTML=d},"_feedComponent_InNode"),s;if(!re(e,"Component")){c.warn("Trying to feed a non component object");return}return h?s=r(e):s=o(e),s}rebuild(){var e=this,r=new Promise(function(o,s){if((typeof e>"u"||e===null)&&s("Component is undefined"),ce(e)&&re(e,"Component"))switch(!0){case e.get("tplsource")==="none":c.debug("Component "+e.name+" has specified template-source=none, so no template load was done");var i={request:null,component:e};e.__done__().then(function(){typeof e.done=="function"&&e.done.call(e,i),o.call(r,i)},function(){s.call(r,i)});break;case e.get("tplsource")==="inline":c.debug("Component "+e.name+" has specified template-source=inline, so it is assumed that template is already declared"),async function(d){d.feedComponent.bind(d)()}(e);var i={request:null,component:e};e.__done__().then(function(){typeof e.done=="function"&&e.done.call(e,i),o.call(r,i)},function(){s.call(r,i)});break;case(e.get("tplsource")==="default"&&e.get("templateURI")!==""):e.set("url",e.get("basePath")+e.get("templateURI")),Le(e,!1).then(function(d){o.call(r,d)},function(d){s.call(r,d)});break;case(e.get("tplsource")==="external"&&e.get("templateURI")!==""):e.set("url",e.get("templateURI")),Le(e,!1).then(function(d){o.call(r,d)},function(d){s.call(r,d)});break;case(e.get("tplsource")==="default"&&e.get("templateURI","")===""):c.debug(`Component ${e.name} template-source is ${e.get("tplsource")} and no templateURI is present`),s.call(r,`Component ${e.name} template-source is ${e.get("tplsource")} and no templateURI is present`);break;default:c.debug("Component "+e.name+" will not be rebuilt because no templateURI is present"),s.call(r,{request:null,component:e});break}});return r}Cast(e){let r=T(e).map(o=>o.name.replace(/bound /g,"")).map(o=>({[o]:e[o].bind(this)})).reduce((o,s)=>Object.assign(o,s),{});return le(this,r)}static route(){var e=this,r,o=!!(ce(e)&&re(e,"Component")),s=l(function(i){var d=[],f=i.filter(function(p){return typeof p<"u"}).map(function(p){if(typeof p.name<"u")d.push(p.name);else throw new Error(Y(p)+" does not have a name");return new Promise(function(b,O){var C;return typeof p<"u"&&p._reroute_?C=p._reroute_().then(function(){return p.reload=!0,p.rebuild()}).then(function(x){if(Object.hasOwnProperty.call(p,"subcomponents")&&typeof p.subcomponents<"u"&&p.subcomponents.length>0)return c.debug("LOOKING FOR ROUTINGS IN SUBCOMPONENTS FOR: "+p.name),s.call(p,p.subcomponents);c.debug("No subcomponents to look for routings in: "+p.name),p.subtags.length>0&&(p.subcomponents=p.__buildSubComponents__(!0)),b(p)}):typeof p<"u"&&O("Component "+p.name+" is not an instance of Component"),C})});return Promise.all(f).then(function(){c.debug("ROUTING COMPLETED FOR "+d.join(", "))}).catch(function(p){c.warn("ROUTING FAILED FOR "+d.join(", ")+": "+p)})},"__route__");if(o||t.componentsStack)o&&c.debug("loading routings for instance "+e.name),r=s.call(e,o?e.subcomponents:t.componentsStack);else throw c.debug("An undetermined result expected if load routings. So will not be loaded this time."),Error("There is no valid instance and no components stack available to apply rountings");return r}fullscreen(){if(h){var e=this.body;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}}closefullscreen(){h&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())}_generateRoutingPaths(e){var r=this;return new Promise(function(o,s){h&&Xe(r.validRoutingWays,r.routingWay)&&typeof e<"u"&&(r.innerHTML=e.innerHTML,r.routingNodes=e.subelements("routing"),r.routings=[],r.routingNodes.map(function(i,d){var f=i.getAttributeNames(),p={};f.map(function(b,O){p[f[O]]=i.getAttribute(f[O])}),r.routings.push(p),r.routingPaths||(r.routingPaths=[]),r.routingPaths.includes(p.path)||r.routingPaths.push(p.path),t.global.get("routingPaths")||t.global.set("routingPaths",[]),t.global.get("routingPaths").includes(p.path)||t.global.get("routingPaths").push(p.path)})),o()})}parseTemplate(e){var r=this,o,s=e;if(Object.hasOwnProperty.call(r,"templateHandler")){var i=r.templateHandler;c.debug(`[Component][${this.name}][parseTemplate] Attempting to use ${i} ...`);var d=I(i),f=H(d,{component:r,template:s});f.component=r;var p=r.data;if(Object.hasOwnProperty.call(r,"assignRoutingParams")&&r.assignRoutingParams)try{p=Object.assign(p,r.routingParams)}catch{c.debug("[parseTemplate] it was not possible to assign the routing params to the template")}o=f.assign(p)}else c.debug(`[Component][${this.name}][parseTemplate] No value for templateHandler. Using raw content...`),o=s;return o}_reroute_(){var e=this;return new Promise(function(r,o){h&&Xe(e.validRoutingWays,e.routingWay)&&(e.routingPath=document.location[e.routingWay],e.routingSelected.map(function(s,i){var d=Re({COMPONENTS_BASE_PATH:t.CONFIG.get("componentsBasePath"),COMPONENT_NAME:s.name.toString(),TPLEXTENSION:Object.hasOwnProperty.call(s,"tplextension")?s.tplextension:e.tplextension,TPL_SOURCE:"default"});e.templateURI=d}),e.routingSelected.length>0&&(e.template="",e.body.innerHTML="")),r(e)})}lazyLoadImages(){if(h){var e=this,r=e.shadowed?e.shadowRoot:e.body,o=[...r.subelements("img[lazy-src]")],s=l(function(d){d.setAttribute("src",d.getAttribute("lazy-src")),d.onload=()=>{d.removeAttribute("lazy-src")}},"_lazyLoadImages");if("IntersectionObserver"in window){var i=new IntersectionObserver((d,f)=>{d.forEach(p=>{p.isIntersecting&&(s(p.target),f.unobserve(p.target))})});o.map(function(d){return i.observe(d)})}else o.map(s)}return null}applyTransitionEffect(e){var r=I(e);if(typeof r>"u")throw Error(`${e} not found.`);typeof r<"u"&&re(r,"TransitionEffect")?(this.effect=H(r,{component:this}),this.effect.apply(this.effect.defaultParams)):c.debug(`${e} is ${Y(r)} but is not a TransitionEffect`)}applyObserveTransitionEffect(e){if(h){var r=this,o=r.shadowed?r.shadowRoot.host:r.body,s=l(function(d){r.applyTransitionEffect(e)},"_applyEffect_");if("IntersectionObserver"in window){var i=new IntersectionObserver((d,f)=>{d.forEach(p=>{p.isIntersecting&&(s(p.target),f.unobserve(p.target))})});i.observe(o)}else s(o)}return null}scrollIntoHash(){if(h){var e=this;if(document.location.hash!==""){var r=e.shadowed?e.shadowRoot:e.body;r.subelements(document.location.hash).map(function(o){typeof o.scrollIntoView=="function"&&o.scrollIntoView(t.CONFIG.get("scrollIntoHash",{behavior:"auto",block:"top",inline:"top"}))})}}}i18n_translate(){if(h&&t.CONFIG.get("use_i18n")){var e=this,r=e.shadowed?e.shadowRoot:e.body,o=t.CONFIG.get("lang","en"),s=navigator.language.slice(0,2),i=t.global.get("i18n");if(o!==s&&typeof i=="object"&&Object.hasOwnProperty.call(i,"messages")){var d=l(function(){var f=this;return new Promise(function(p,b){var O=i.messages.filter(function(C){return Object.hasOwnProperty.call(C,o)&&Object.hasOwnProperty.call(C,s)});r.subelements("ul,li,h1,h2,h3,a,b,p,input,textarea,summary,details,option,component").map(function(C){return O.map(function(x){var A=C.innerHTML;return A=A.replace(new RegExp(`${x[o]}`,"g"),x[s]),C.innerHTML=A,null}),C}),p()})},"callback_i18n");d.call(e).then(function(){c.debug("i18n loaded for component: "+e.name)})}}}addComponentHelper(e){var r=this;r._componentHelpers.push(e)}runComponentHelpers(){if(h){var e=this,r=[];r.push(e.i18n_translate.bind(e)),r.push(e.scrollIntoHash.bind(e)),r.push(e.lazyLoadImages.bind(e)),r=r.concat(e._componentHelpers),r.map(function(o){c.debug(`Executing ${o.name} as component helper for ${e.name}...`),o()})}}},"Component")]),T(I("Component")).map(function(n){v(n)}),h&&window.addEventListener("popstate",function(n){n.stopImmediatePropagation(),n.stopPropagation(),I("Component").route()}),$("com.qcobjects.controllers",[l(class extends I("InheritClass"){component=null;dependencies=[];constructor({component:e,dependencies:r}){if(super({component:e,dependencies:r}),this.component=e,this.dependencies=r,typeof this.component>"u"||this.component==="null")throw Error(`${Y(this)} must be called with a component`)}routingSelectedAttr(e){return this.component.routingSelected.map(function(r){return r[e]}).filter(function(r){return r}).pop()}isTouchable(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0}onpress(e,r){try{this.isTouchable()?this.component.body.subelements(e)[0].addEventListener("touchstart",r,{passive:!0}):this.component.body.subelements(e)[0].addEventListener("click",r,{passive:!0})}catch{c.debug("No button to assign press event")}}createRoutingController(){var e=this,r=e.component,o=e.routingSelectedAttr("controllerclass");if(typeof o<"u"){var s=I(o);typeof s<"u"&&(r.routingController=H(s,{component:r}),Object.hasOwnProperty.call(r.routingController,"done")&&typeof r.routingController.done=="function"&&r.routingController.done.call(r.routingController))}}done(){}},"Controller")]),$("com.qcobjects.views",[l(class extends I("InheritClass"){constructor({component:e=void 0,dependencies:r=[]}){if(super(...arguments),typeof this.component>"u"||this.component==="null")throw Error(`${Y(this)} must be called with a component`)}},"View")]),$("com.qcobjects.api",[l(class extends I("InheritClass"){kind="rest";domain=j;basePath=F;url="";method="GET";data={};reload=!1;cached=!1;constructor(){super(...arguments)}set(e,r){this[e]=r}get(e){return this[e]}},"Service")]),$("com.qcobjects.api.services",[l(class extends I("Service"){method="GET";cached=!1;headers={"Content-Type":"application/json",charset:"utf-8"};JSONresponse=null;done(e){c.debug("***** RECEIVED RESPONSE:"),c.debug(e.service.template),this.JSONresponse=JSON.parse(e.service.template)}constructor(){super(...arguments)}},"JSONService")]),$("com.qcobjects.api.config",[l(class extends I("JSONService"){method="GET";cached=!1;configFileName="config.json";headers={"Content-Type":"application/json",charset:"utf-8"};JSONresponse=null;done(e){c.debug("***** CONFIG LOADED:"),c.debug(e.service.template),this.JSONresponse=JSON.parse(e.service.template),Object.hasOwnProperty.call(this.JSONresponse,"__encoded__")&&(this.JSONresponse=JSON.parse(I("_Crypt").decrypt(this.JSONresponse.__encoded__,Z)));for(var r in this.JSONresponse)t.CONFIG.set(r,this.JSONresponse[r]);this.configLoaded.call(this)}fail(e){this.configLoaded.call(this)}constructor(){super(...arguments),this.set("url",this.get("basePath")+this.get("configFileName"))}},"ConfigService")]),$("com.qcobjects.valueObjects",[l(class extends I("InheritClass"){constructor(){super(...arguments)}},"VO")]);var Re=l(function(n){var e="";if(n.TPL_SOURCE==="default"){e="{{COMPONENTS_BASE_PATH}}{{COMPONENT_NAME}}.{{TPLEXTENSION}}";for(var r in n){var o=n[r];e=e.replace("{{"+r+"}}",n[r])}}return e},"ComponentURI"),Le=l(function(n,e){var r,o=l(function(d,f){return r=new Promise(function(p,b){var O=d.__promise__,C=Object.hasOwnProperty.call(d,"container")&&typeof d.container<"u"&&d.container!==null?d.container:d.body;if(C!==null){var x=l(function(q){q.feedComponent();var k={request:S,component:q};p.call(O,k)},"_feedComponent_");c.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}",_(d.data)).replace("{{URL}}",d.url));var A=l(function(){var q=E?0:200;if(S.status===q){var k=S.responseText;c.debug("Data received {{DATA}}".replace("{{DATA}}",_(k))),c.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}",d.name)),d.template=k,d.cached&&typeof D<"u"&&D.save(d.name,d.template),x.call(this,d)}else{var we={request:S,component:d};b.call(O,we)}},"_componentLoaded");if(typeof d.template=="string"&&d.template!=="")x.call(this,d);else{var E=!!d.url.startsWith("file:"),S=new XMLHttpRequest;if(E){if("fetch"in t){c.debug("I can use fetch..."),c.debug("It is a file to be loaded, so I will try to use fetch");var U=fetch(d.url).then(q=>{c.debug("I got a response from fetch, so I'll feed the component"),q.text().then(k=>{d.template=k,x.call(this,d)})})}}else try{c.debug("Calling the url of component in async mode."),S.open(d.method,d.url,!0)}catch{c.debug("Last try has failed... The component cannot be loaded.")}!He&&!E&&S.setRequestHeader("Content-Type","text/html"),E||(S.onload=A);var M=l(function(q){q=!(typeof q>"u"||!q),c.debug("SENDING THE NORMAL REQUEST  "),q?"fetch"in t||(c.debug("I have to try to load the file using xhr...  "),S.send(null),S.status===XMLHttpRequest.DONE&&A.call(this)):(c.debug("Trying to send the data to the component...  "),S.send(_(d.data)))},"_directLoad");if(d.cached&&!E){c.debug("USING CACHE FOR COMPONENT: "+d.name);var D=new J({index:d.cacheIndex,load(q){M.call(this,E)},alternate(q){d.method==="GET"?(d.template=q.cache.getCached(d.cacheIndex),x.call(this,d)):M.call(this,E)}});a.lastCache=D}else c.debug("NOT USING CACHE FOR COMPONENT: "+d.name),M.call(this,E)}}else c.debug("CONTAINER DOESNT EXIST")}),r.then(function(p){return d.__done__().then(function(){var b;return typeof d.done=="function"&&(b=d.done.call(d,p)),Promise.resolve(b)})},function(p){var b;return typeof d.fail=="function"&&(b=d.fail.call(d,p)),Promise.reject(b)}).catch(function(p){c.debug("Something wrong loading the component")}),r},"_componentLoaderInBrowser"),s=l(function(d,f){return r=new Promise(function(p,b){var O=r,C=l(function(S){S.feedComponent();var U={request:null,component:S};p.call(O,U)},"_feedComponent_");c.debug("LOADING COMPONENT DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}",_(d.data)).replace("{{URL}}",d.url));var x=l(function(S,U){if(S){var D={request:null,component:d};b.call(O,D)}else{var M=U.toString();c.debug("Data received {{DATA}}".replace("{{DATA}}",_(M))),c.debug("CREATING COMPONENT {{NAME}}".replace("{{NAME}}",d.name)),d.template=M,d.cached&&typeof E<"u"&&E.save(d.name,d.template),C.call(this,d)}},"_componentLoaded");if(typeof d.template=="string"&&d.template!=="")C.call(this,d);else{c.debug("Loading the component as a local file in server...");var A=l(function(S){let U=y("fs");c.debug("SENDING THE NORMAL REQUEST  "),U.readFile(d.url,x)},"_directLoad");if(d.cached){c.debug("USING CACHE FOR COMPONENT: "+d.name);var E=new J({index:d.cacheIndex,load(S){A.call(this)},alternate(S){d.method==="GET"?(d.template=S.cache.getCached(d.cacheIndex),C.call(this,d)):A.call(this)}});a.lastCache=E}else c.debug("NOT USING CACHE FOR COMPONENT: "+d.name),A.call(this)}}),r.then(function(p){return d.__done__().then(function(){var b;return typeof d.done=="function"&&(b=d.done.call(d,p)),Promise.resolve(b)})},function(p){var b;return typeof d.fail=="function"&&(b=d.fail.call(d,p)),Promise.reject(b)}).catch(function(p){c.debug("Something wrong loading the component")}),r},"_componentLoaderInNode"),i;return h?typeof e<"u"&&e?i=ge(o,arguments):i=o(n,e):i=s(n,e),i},"componentLoader"),Ge=l(function(n,e){var r=l(function(f,p){var b=new Promise(function(O,C){c.debug("LOADING SERVICE DATA {{DATA}} FROM {{URL}}".replace("{{DATA}}",_(f.data)).replace("{{URL}}",f.url));var x=new XMLHttpRequest;x.withCredentials=f.withCredentials;var A=!0;x.open(f.method,f.url,A);for(var E in f.headers)try{typeof f.headers[E]!="function"&&x.setRequestHeader(E,f.headers[E])}catch{c.debug("Something went wrong when assign the header "+E)}x.onload=function(){if(x.status===200){var M=x.responseText;if(c.debug("Data received {{DATA}}".replace("{{DATA}}",_(M))),c.debug("CREATING SERVICE {{NAME}}".replace("{{NAME}}",f.name)),f.template=M,f.cached&&typeof U<"u"&&U.save(f.name,f.template),typeof f.done=="function"){var D={request:x,service:f};f.done.call(f,D),O.call(b,D)}}else if(typeof f.fail=="function"){var D={request:x,service:f};f.fail.call(f,D),C.call(b,D)}};var S=l(function(){c.debug("SENDING THE NORMAL REQUEST  ");try{x.send(_(f.data))}catch{c.debug("SOMETHING WRONG WITH REQUEST  "),C.call(b,{request:x,service:f})}},"_directLoad");if(f.cached){var U=new J({index:f.data,load(M){S.call(this)},alternate(M){if(f.method==="GET"){if(f.template=M.cache.getCached(f.name),typeof f.done=="function"){var D={request:x,service:f};f.done.call(f,D),O.call(b,D)}}else S.call(this)}});a.lastCache=U}else S.call(this);return x});return b},"_serviceLoaderInBrowser"),o=l(function(f,p){var b=new Promise(function(O,C){if(typeof URL>"u"){a.URL=y("url").URL;let B=a.URL}var x=new URL(f.url),A;f.useHTTP2=Object.hasOwnProperty.call(f,"useHTTP2")&&f.useHTTP2;var E=l(function(B){c.debug("LOADING SERVICE DATA (non-browser) {{DATA}} FROM {{URL}}".replace("{{DATA}}",_(f.data)).replace("{{URL}}",f.url));var fe,Fe={http2Client:M,request:B,service:f,responseHeaders:null};if(typeof f.data=="object"&&f.data!==null&&f.useHTTP2)try{c.debug("Sending data...");let oe=new Buffer(_(f.data));B.write(oe)}catch{c.debug("It was not possible to send any data")}fe="",B.on("response",(oe,zt)=>{c.debug("receiving response..."),Fe.responseHeaders=oe,fe=""}),B.on("data",oe=>{c.debug("receiving data..."),fe+=""+oe.toString(),f.template=fe}),f.useHTTP2&&B.resume(),B.on("end",()=>{c.debug("ending call..."),f.template=fe,Object.hasOwnProperty.call(f,"useHTTP2")&&f.useHTTP2?M.destroy():B.destroy(),f.done.call(f,Fe),O.call(b,Fe)}),f.useHTTP2&&B.end()},"captureEvents");try{var S;if(f.useHTTP2){c.debug("using http2");var U=y("http2"),M=U.connect(x.origin);S=Object.assign({":method":f.method,":path":x.pathname},f.options),S=Object.assign(S,f.headers),A=M.request(S),A.setEncoding("utf8"),E(A)}else if(x.protocol==="http:"){var D=y("http"),q=D.request;S=Object.assign({url:f.url,headers:f.headers},f.options);var A=q(f.url);E(A)}else if(x.protocol==="https:"){var k=y("https");S=Object.assign({hostname:x.hostname,port:x.port,path:x.pathname,method:f.method,headers:f.headers},f.options);var we=k.request(S,function(B){E(B)});we.end()}else{var Oe="Protocol not supported: "+x.protocol;throw c.debug(Oe),new Error(Oe)}}catch(B){c.debug(B),f.fail.call(f,B),C.call(b,B)}}).catch(function(O){console.log(O),c.debug("Something happened when trying to call the service: "+f.name),f.fail.call(f,O)});return b},"_serviceLoaderInNode"),s=l(function(f,p){var b=new Promise(function(O,C){c.debug(`Calling mockup service ${f.name} ...`);var x={request:null,service:f,responseHeaders:f.responseHeaders};typeof f.mockup=="function"?f.mockup.call(f,x):f.done.call(f,x),O.call(b,x)});return b},"_serviceLoaderMockup"),i=l(function(f,p){var b=new Promise(function(O,C){c.debug(`Calling local service ${f.name} ...`);var x={request:null,service:f,responseHeaders:f.responseHeaders};typeof f.local=="function"?f.local.call(f,x):f.done.call(f,x),O.call(b,x)});return b},"_serviceLoaderLocal"),d;switch(n.kind){case"rest":h?typeof e<"u"&&e?d=ge(r,arguments):d=r(n,e):d=o(n,e);break;case"mockup":d=s(n,e);break;case"local":d=i(n,e);break;default:c.debug(`The value of the kind property of the service ${n.name} is not valid`);break}return d},"serviceLoader");if(P(Ge),P(Le),P(Re),P(be),P(_),P(K),P(ce),P(jt),h){Element.prototype.buildComponents=function(n=!1){var e=W,r=this,o=r.subelements(e);return Ve(o,null)},HTMLDocument.prototype.buildComponents=Element.prototype.buildComponents,HTMLElement.prototype.buildComponents=Element.prototype.buildComponents;var Je=l(class extends HTMLElement{constructor(){super(...arguments);let n=this,e=n.nodeName.toLowerCase(),r=N("quick-component"),o=n.getAttributeNames();r.setAttribute("name",e),n.hasAttribute("shadowed")||r.setAttribute("shadowed","true"),o.map(function(i){n.hasAttribute(i)&&(r.setAttribute(i,n.getAttribute(i)),n.removeAttribute(i))});var s=n.getAttributeNames().filter(function(i){return i.startsWith("data-")}).map(function(i){return i.split("-")[1]});s.map(function(i){r.setAttribute("data-"+i,n.getAttribute("data-"+i)),n.removeAttribute("data-"+i)}),[...n.children].map(function(i){r.appendChild(i.cloneNode(!0)),i.remove()}),n.append(r)}},"_ComponentWidget_");P(Je);var De=l(function(n){customElements.define(n,class extends Je{})},"RegisterWidget"),Ye=l(function(){var n=[...arguments];n.filter(function(e){return typeof e=="string"}).map(function(e){De(e)})},"RegisterWidgets");v(De),v(Ye),P(De),P(Ye)}h||$("com.qcobjects.api",[l(class extends I("InheritClass"){constructor({domain:e=j,basePath:r=F,body:o=null,stream:s=null,request:i=null}){super(...arguments),c.debug("Initializing BackendMicroservice...");let d=this;typeof this.body>"u"&&(this.body=null),typeof o<"u"&&(this.body=o),this.cors(),d.stream=s,s.on("data",b=>{var O=i.method.toLowerCase(),C={post:d.post};Object.hasOwnProperty.call(C,O)&&C[O].call(d,b)});var f=i.method.toLowerCase(),p={get:d.get,head:d.head,put:d.put,delete:d.delete,connect:d.connect,options:d.options,trace:d.trace,patch:d.patch};Object.hasOwnProperty.call(p,f)&&p[f].call(d)}cors(){if(this.route.cors){c.debug("Validating CORS...");let{allow_origins:r,allow_credentials:o,allow_methods:s,allow_headers:i}=this.route.cors;var e=this;if(typeof e.headers!="object"&&(e.headers={}),typeof e.route.responseHeaders!="object"&&(e.route.responseHeaders={}),typeof r<"u")if(c.debug("CORS: allow_origins available. Validating origins..."),r==="*"||typeof e.request.headers.origin>"u"||[...r].indexOf(e.request.headers.origin)!==-1)c.debug("CORS: Adding header Access-Control-Allow-Origin=*"),e.route.responseHeaders["Access-Control-Allow-Origin"]="*";else{c.debug("CORS: Origin is not allowed: "+e.request.headers.origin),c.debug("CORS: Forcing to finish the response..."),this.body={};try{this.done()}catch(d){c.debug(`It was not possible to finish the call to the microservice: ${d}`)}}else c.debug("CORS: no allow_origins available. Allowing all origins..."),c.debug("CORS: Adding header Access-Control-Allow-Origin=*"),e.route.responseHeaders["Access-Control-Allow-Origin"]="*";typeof o<"u"?(c.debug(`CORS: allow_credentials present. Allowing ${o}...`),e.route.responseHeaders["Access-Control-Allow-Credentials"]=o.toString()):(c.debug("CORS: No allow_credentials present. Allowing all credentials."),e.route.responseHeaders["Access-Control-Allow-Credentials"]="true"),typeof s<"u"?(c.debug(`CORS: allow_methods present. Allowing ${s}...`),e.route.responseHeaders["Access-Control-Allow-Methods"]=[...s].join(",")):(c.debug("CORS: No allow_methods present. Allowing only GET, OPTIONS and POST"),e.route.responseHeaders["Access-Control-Allow-Methods"]="GET, OPTIONS, POST"),typeof i<"u"?(c.debug(`CORS: allow_headers present. Allowing ${i}...`),e.route.responseHeaders["Access-Control-Allow-Headers"]=[...i].join(",")):(c.debug("CORS: No allow_headers present. Allowing all headers..."),e.route.responseHeaders["Access-Control-Allow-Headers"]="*")}else c.debug("No CORS validation available. You can specify cors in CONFIG.backend.routes[].cors")}head(e){this.done()}get(e){c.debug(`[BackendMicroservice.get] Data received: ${_(e)}`),this.done()}post(e){this.done()}put(e){this.done()}delete(e){this.done()}connect(e){this.done()}options(e){this.done()}trace(e){this.done()}patch(e){this.done()}finishWithBody(e){try{c.debug("[BackendMicroservice.finishWithBody] Ending the stream..."),c.debug(`[BackendMicroservice.finishWithBody] type of body is: ${typeof this.body}`),typeof this.body!="string"&&(this.body=_(this.body)),c.debug(`[BackendMicroservice.finishWithBody] 
 body: ${this.body} `),e.write(this.body),e.end(),c.debug("[BackendMicroservice.finishWithBody] Stream ended.")}catch(r){c.debug(`[BackendMicroservice.finishWithBody] Something went wrong ending the stream: ${r}`)}}done(){c.debug("[BackendMicroservice.done] Finalizing the response...");var e=this,r=e.stream;try{if(c.debug("[BackendMicroservice.done] Sending response headers..."),e.route.responseHeaders)c.debug(`[BackendMicroservice.done] Response headers present: ${Object.keys(e.route.responseHeaders)}`),r.respond(e.route.responseHeaders);else throw Error("[BackendMicroservice.done] No headers present.")}catch(o){c.debug(`[BackendMicroservice.done] Something went wrong sending response headers: ${o}`)}if(e.body!==null)try{c.debug("[BackendMicroservice.done] A body of message is present. Finalizing the response..."),e.finishWithBody.call(e,r)}catch(o){c.debug(`[BackendMicroservice.done] Something went wrong finalizing the response: ${o}`)}else c.debug("[BackendMicroservice.done] No body present. Ending stream..."),r.end()}},"BackendMicroservice")]),V("SourceJS",Object,{domain:j,basePath:F,body:N("script"),type:"text/javascript",containerTag:"body",url:"",data:{},async:!1,external:!1,set(n,e){this[n]=e},get(n){return this[n]},status:!1,done(){},fail(){},rebuild(){var n=this;try{document.getElementsByTagName(n.containerTag)[0].appendChild(function(e,r,o){return e.type=o.type,e.src=r,e.crossOrigin=Object.hasOwnProperty.call(o,"crossOrigin")?o.crossOrigin:"anonymous",e.async=o.async,e.onreadystatechange=function(){this.readyState==="complete"&&o.done.call(o)},e.onload=function(s){o.status=!0,o.done.call(o,s)},e.onerror=function(s){o.status=!1,o.fail.call(o,s)},o.body=e,e}.call(this,N("script"),this.external?this.url:this.basePath+this.url,n))}catch(e){n.status=!1,n.fail.call(n,e)}},Cast(n){return le(this,n)},_new_(n){this.__new__(n),this.rebuild()}}),V("SourceCSS",Object,{domain:j,basePath:F,body:N("link"),url:"",data:{},async:!1,external:!1,set(n,e){this[n]=e},get(n){return this[n]},done(){},rebuild(){var n=this;h&&window.document.getElementsByTagName("head")[0].appendChild(function(e,r,o){return e.type="text/css",e.rel="stylesheet",e.href=r,e.crossOrigin="anonymous",e.onreadystatechange=function(){this.readyState==="complete"&&o.done.call(o)},e.onload=o.done,o.body=e,e}.call(this,N("link"),this.external?this.url:this.basePath+this.url,n))},Cast(n){return le(this,n)},_new_(n){this.__new__(n),this.rebuild()}});var Q=l(function(n){return isNaN(n)?new Number(0):new Number(n)},"__to_number");Array.prototype.unique=function(){return this.filter(function(n,e,r){return r.indexOf(n)===e})},Array.unique=function(n){return n.unique()},v(Array.unique),v(Array.prototype.unique),Array.prototype.table=function(){console.table(this)},Array.table=function(n){return n.table()},v(Array.table),v(Array.prototype.table),Array.prototype.sum=function(){return this.reduce(function(n,e){return Q(n)+Q(e)},0)},Array.sum=function(n){return n.sum()},v(Array.sum),v(Array.prototype.sum),Array.prototype.avg=function(){return this.length<1?0:this.reduce(function(n,e){return(Q(n)+Q(e))/2})},Array.avg=function(n){return n.avg()},v(Array.avg),v(Array.prototype.avg),Array.prototype.min=function(){return this.reduce(function(n,e){return Q(n)<=Q(e)?n:e},1/0)},Array.min=function(n){return n.min()},v(Array.min),v(Array.prototype.min),Array.prototype.max=function(){return this.reduce(function(n,e){return Q(n)>=Q(e)?n:e},0)},Array.max=function(n){return n.max()},v(Array.max),v(Array.prototype.max),Array.prototype.sortBy=function(n,e=!0){var r=e?function(o,s){return s[n]<o[n]?1:-1}:function(o,s){return s[n]>o[n]?1:-1};return this.sort(r)},Array.sortBy=function(n,e,r=!0){return n.sortBy(e,r)},v(Array.sortBy),v(Array.prototype.sortBy),Array.matrix=function(n,e=0){var r=l(function(o){return e},"x_func");return Array.from({length:n},r)},v(Array.matrix),Array.matrix2d=function(n,e=0){var r=l(function(s){return e},"y_func"),o=l(function(s){return Array.from({length:n},r)},"x_func");return Array.from({length:n},o)},v(Array.matrix2d),Array.matrix3d=function(n,e=0){var r=l(function(s){return Array.from({length:n},function(){return e})},"y_func"),o=l(function(s){return Array.from({length:n},r)},"x_func");return Array.from({length:n},o)},v(Array.matrix3d),t.range=function(n,e=0,r=1){return(e===0||typeof e>"u")&&(e=n,n=0),Array.from({length:(e-n)/r+1},function(o,s){return n+s*r})},v(t.range),String.prototype.list=function(){var n=this;return t.range(0,n.length-1).map(function(e){return n[e]})},v(String.prototype.list),t.getDocumentLayout=function(){var n=l((o,s)=>o>s?"landscape":null,"h"),e=l((o,s)=>s>o?"portrait":null,"v"),r=l((o,s)=>o===s?"square":null,"square");return[n(document.documentElement.clientWidth,document.documentElement.clientHeight),e(document.documentElement.clientWidth,document.documentElement.clientHeight),r(document.documentElement.clientWidth,document.documentElement.clientHeight)].filter(o=>o!==null).pop()},V("ArrayList",Array,[]),I("ArrayList").matrix=Array.matrix,I("ArrayList").matrix2d=Array.matrix2d,I("ArrayList").matrix3d=Array.matrix3d,v(I("ArrayList").matrix),v(I("ArrayList").matrix2d),v(I("ArrayList").matrix3d),V("ArrayCollection",Object,{source:H(I("ArrayList"),[]),changed(n,e){c.debug("VALUE CHANGED"),c.debug(n),c.debug(e)},push(n){var e=this;c.debug("VALUE ADDED"),c.debug(n),e.source.push(n)},pop(n){var e=this;c.debug("VALUE POPPED"),c.debug(n),e.source.pop(n)},_new_(n){var e=this,r=0;e.source=H(I("ArrayList"),n);for(var o in e.source)isNaN(o)||(c.debug("binding "+o.toString()),function(s){Object.defineProperty(e,s,{set(i){c.debug("setting "+s+"="+i),e.source[s]=i,e.changed(s,i)},get(){return e.source[s]}})}(o),r++);e.source.length=r,Object.defineProperty(e,"length",{get(){return e.source.length}})}}),$("com.qcobjects.effects.base",[l(class extends I("InheritClass"){duration=1e3;constructor(){super(...arguments)}animate({timing:e,draw:r,duration:o}){let s=performance.now();requestAnimationFrame(l(function i(d){let f=(d-s)/o;f>1&&(f=1);let p=e(f);r(Math.round(p*100)),f<1?requestAnimationFrame(i):typeof this<"u"&&this!==null&&Object.hasOwnProperty.call(this,"done")&&(typeof this.done).toLowerCase()==="function"&&this.done.call(this)},"animate"))}},"Effect")]),$("com.qcobjects.effects.transitions.base",[l(class extends I("Effect"){duration=385;defaultParams={alphaFrom:0,alphaTo:1,angleFrom:180,angleTo:0,radiusFrom:0,radiusTo:30,scaleFrom:0,scaleTo:1};fitToHeight=!1;fitToWidth=!1;effects=[];constructor(){super(...arguments),c.info("DECLARING TransitionEffect  "),this.component.defaultParams=this.defaultParams}apply({alphaFrom:e,alphaTo:r,angleFrom:o,angleTo:s,radiusFrom:i,radiusTo:d,scaleFrom:f,scaleTo:p}){var b=this;c.info("EXECUTING TransitionEffect  ");var O=b.component.shadowed?b.component.shadowRoot.host:b.component.body;b.fitToHeight&&(O.height=typeof O.offsetParent=="object"&&O.offsetParent!==null?O.offsetParent.scrollHeight:O.getBoundingClientRect().height),b.fitToWidth&&(O.width=typeof O.offsetParent=="object"&&O.offsetParent!==null?O.offsetParent.scrollWidth:O.getBoundingClientRect().width),O.style.display="block",b.effects.map(function(C,x){var A=I(C),E=new A({}),S=E.apply,U=[O].concat(Object.values({alphaFrom:e,alphaTo:r,angleFrom:o,angleTo:s,radiusFrom:i,radiusTo:d,scaleFrom:f,scaleTo:p}));S.apply(b,U)})}},"TransitionEffect")]),$("com.qcobjects.timing",[l(class extends I("InheritClass"){constructor(){super(...arguments)}duration=1e3;alive=!0;thread({timing:e,intervalInterceptor:r,duration:o}){var s=this;let i=performance.now();requestAnimationFrame(l(function d(f){let p=f-i,b=p/o;b>1&&(b=1);let O=e(b,p);r(Math.round(O*100)),(b<1||o===-1)&&s.alive&&requestAnimationFrame(d)},"thread"))}},"Timer")]),$("com.qcobjects.tools.essentials",[l(class extends I("InheritClass"){_toggle=!1;_inverse=!0;_positive=null;_negative=null;_dispatched=null;_args={};constructor(){super(...arguments),this._new_(...arguments)}changeToggle(){this._toggle=!this._toggle}_new_({positive:e,negative:r,args:o}){this._positive=e,this._negative=r,this._args=o}fire(){var e=this,r=new Promise(function(o,s){typeof e._positive=="function"&&typeof e._negative=="function"?(e._inverse?e._dispatched=e._toggle?e._negative.bind(e):e._positive.bind(e):e._dispatched=e._toggle?e._positive.bind(e):e._negative.bind(e),e._dispatched.call(e,e._args),o.call(r,e)):(c.debug("Toggle functions are not declared"),s.call(r,e))}).then(function(o){o.changeToggle()}).catch(function(o){c.debug(o.toString())});return r}},"Toggle")]),function(n){let e=l(function(d,f,p){var b=this;if(typeof d>"u"||d===null)throw Error(`mapper.${f}.${p} does not have a component instance or it is null.`);let O=n.global.get(p),C=d.get(p),x=d.data[p],A=typeof x<"u"?x:typeof C<"u"?C:O,E="";return typeof A<"u"&&typeof A.map<"u"?E=A.map(function(S){let U=[...Object.keys(S)].map(M=>` data-${M}="${typeof S[M]<"u"&&S[M]!==null?S[M].toString():""}"`).join("");return`<quick-component name="${f}" ${U} ></quick-component>`}).join(""):c.debug(`${f}.${p} does not have a map property`),E},"mapper");L.setProcessor(e);let r=l(function(d,f,p){var b=`
        /* CSS Document for Mobile Imports */
        @import url("${p}") (orientation:portrait);
        @import url("${p}") (max-width:460px);
        @import url("${p}") (aspect-ratio: 9/16);
        @import url("${p}") (aspect-ratio: 10/16);
        @import url("${p}") (aspect-ratio: 5/8);
        @import url("${p}") (aspect-ratio: 3/4);
        @import url("${p}") (aspect-ratio: 2/3);
        `,O=`
        @import url("${p}") (orientation:landscape) and (min-width:460px);
        @import url("${p}") (aspect-ratio: 16/9) and (min-width:460px);
        @import url("${p}") (aspect-ratio: 16/10) and (min-width:460px);
        @import url("${p}") (aspect-ratio: 8/5) and (min-width:460px);
        @import url("${p}") (aspect-ratio: 4/3) and (min-width:460px);
        @import url("${p}") (aspect-ratio: 3/2) and (min-width:460px);
        `,C={landscape:O,portrait:b};return Object.hasOwnProperty.call(C,f)?C[f]:""},"layout");L.setProcessor(r);let o=l(function(){let d=[...arguments].slice(1).map(function(p){return{[p.split("=")[0]]:p.split("=")[1]}}).reduce(function(p,b){return Object.assign(p,b)});return`<component ${[...Object.keys(d)].map(function(p){return`${p}=${d[p]}`}).join(" ")}></component>`},"component");L.setProcessor(o);let s=l(function(){let d=[...arguments].slice(1).map(function(p){return{[p.split("=")[0]]:p.split("=")[1]}}).reduce(function(p,b){return Object.assign(p,b)});return`<quick-component ${[...Object.keys(d)].map(function(p){return`${p}=${d[p]}`}).join(" ")}></quick-component>`},"quick_component");L.setProcessor(s);let i=l(function(d,f,p){return n.range(f).map(function(b){return p.replace("{{index}}",b.toString())}).join("")},"repeat");L.setProcessor(i)}(t),ue(function(){t.CONFIG.get("useSDK")||t.__start__()}),P(P),P(je),P($),P(V),P(H),P(Mt),P(ue),P(Rt),P(h),P(T),function(n){$("com.qcobjects",[l(class Te extends I("InheritClass"){_GLOBAL={};__definition={};__classType="GlobalSettings";constructor(){super(...arguments),this.set=Te.set.bind(this),this.get=Te.get.bind(this),this.__start__=Te.__start__.bind(this)}static set(r,o){this._GLOBAL[r]=o}static get(r,o){var s;return typeof this._GLOBAL[r]<"u"?s=this._GLOBAL[r]:typeof o<"u"&&(s=o),s}static __start__(){var r=l(function(){var s;return h&&(s=new Promise(function(i,d){"serviceWorker"in navigator&&typeof n.CONFIG.get("serviceWorkerURI")<"u"&&(n.CONFIG.set("serviceWorkerScope",n.CONFIG.get("serviceWorkerScope")?n.CONFIG.get("serviceWorkerScope"):"/"),navigator.serviceWorker.register(n.CONFIG.get("serviceWorkerURI"),{scope:n.CONFIG.get("serviceWorkerScope")}).then(function(f){c.debug("Service Worker Registered"),i.call(s,f)},function(f){c.debug("Error registering Service Worker"),d.call(s,f)}),navigator.serviceWorker.ready.then(function(f){c.debug("Service Worker Ready"),i.call(s,f)},function(f){c.debug("Error loading Service Worker"),d.call(s,f)}))})),s},"__load__serviceWorker"),o=l(function(){return new Promise((s,i)=>{if(h){c.debug("Starting to building components");try{n.componentsStack=document.buildComponents.call(document)}catch(d){throw Error(`Something went wrong trying to start components tree: ${d.message}`)}c.debug("Initializing the service worker"),r.call(n).catch(function(d){c.debug(`error loading the service worker ${d}`)})}s()})},"_buildComponents");c.debug("Starting to load the config settings..."),n.CONFIG.get("useConfigService",!1)?(c.debug("Loading settings using local configuration file..."),n.global.configService=H(I("ConfigService")),n.global.configService.configLoaded=o,Ge(n.global.configService)):(c.debug("Starting to load the components..."),o.call(this))}},"GlobalSettings")]),P(I("GlobalSettings")),a=H(I("GlobalSettings")),n=ne(a,n),Object.defineProperty(n,"PackagesNameList",{set(e){c.debug("PackagesNameList is readonly")},get(){var e=l(function(r){var o=[];for(var s in r)typeof r[s]<"u"&&typeof r[s]!="function"&&Object.hasOwnProperty.call(r[s],"length")&&r[s].length>0&&(o.push(s),o=o.concat(e(r[s])));return o},"_get_packages_names");return e(z)}}),Object.defineProperty(n,"PackagesList",{set(e){c.debug("PackagesList is readonly")},get(){return n.PackagesNameList.map(function(e){let r=$(e),o;return r&&(o={packageName:e,classesList:r.filter(function(s){return K(s)})}),o}).filter(function(e){return typeof e<"u"})}}),Object.defineProperty(n,"ClassesList",{set(e){c.debug("ClassesList is readonly")},get(){var e=[];return n.PackagesList.map(function(r){return e=e.concat(r.classesList.map(function(o){return{packageName:r.packageName,className:r.packageName+"."+o.__definition.__classType,classFactory:o}})),r}),e}}),Object.defineProperty(n,"ClassesNameList",{set(e){c.debug("ClassesNameList is readonly")},get(){return n.ClassesList.map(function(e){return e.className})}}),h&&(V("GLOBAL",X.global),P(I("GLOBAL"))),P(a),n.CONFIG.get("useSDK")&&function(e){var r=e.CONFIG.get("remoteImportsPath"),o=!e.CONFIG.get("useLocalSDK");e.CONFIG.set("remoteImportsPath",e.CONFIG.get("remoteSDKPath"));var s=!1,i="QCObjects-SDK";if(h)s=!0;else{var d=ye("qcobjects-sdk");d!==null?(i="qcobjects-sdk",s=!0):(i="node_modules/qcobjects-sdk/QCObjects-SDK",s=!0)}if(s)if(c.info("Importing SDK... "+i),m&&typeof pe<"u"){let f=It()}else je(i,function(){o?c.debug("QCObjects-SDK.js loaded from remote location"):c.debug("QCObjects-SDK.js loaded from local"),e.CONFIG.set("remoteImportsPath",r)},o);else c.debug("SDK has not been imported as it is not available at the moment")}(n)}(t),h&&ge(function(){ue(function(){(function(n){let e=0,r=!1,o=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),s=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth);function i(d){var f=Math.round(n.scrollY*100/o),p=Math.round(n.scrollX*100/s),b=new CustomEvent("scrollpercent",{detail:{percentX:p,percentY:f}});d.target.dispatchEvent(b);var O="defaultscroll",C=[0,5,10,25,50,75,90,95,100];C.filter(function(x){return x===f}).map(function(x){O="percentY"+f.toString();var A=new CustomEvent(O,{detail:{percentX:p,percentY:f}});d.target.dispatchEvent(A)})}l(i,"scrollDispatcher"),document.addEventListener("scroll",function(d){r||(requestAnimationFrame(function(){i(d),r=!1}),r=!0)})})(t)})},null),h||(typeof t.global<"u"&&Object.hasOwnProperty.call(t.global,"_fireAsyncLoad")&&t.global._fireAsyncLoad.call(this),typeof t.global<"u"&&Object.hasOwnProperty.call(t.global,"onload")&&t.global.onload.call(this)),function(n){var e=l(function(){Object.freeze(Object.prototype),Object.freeze(Object)},"__freeze__");n&&t.CONFIG.get("secureObjects",!1)?ue(function(){e()}):t.CONFIG.get("secureObjects",!1)&&e()}(h)}},"__qcobjects__").call(null,typeof ie=="object"&&typeof ie.exports=="object"?ie.exports=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}:typeof global=="object"?global:typeof window=="object"?window:{})});var xt=R((No,Nt)=>{var Ht=Ct();Nt.exports=Ht});var $t=R(Tt=>{Object.defineProperty(Tt,"__esModule",{value:!0});var Se=xt();(0,Se.Package)("org.quickcorp.custom.components",[l(class extends Se.Component{constructor(){super(...arguments),this.name="github-grid",this.tplsource="inline",this.template=`
    <style>
    $layout(landscape,css/desktop/components/github-grid.css)
    $layout(portrait,css/mobile/components/github-grid.css)

    :host {
      margin:0 auto;
      justify-content: center;
    }
    </style>
      $mapper(github-card,result)
    `}},"GitHubGrid"),l(class extends Se.Component{constructor(){super(...arguments),this.name="deploy-grid",this.tplsource="inline",this.template=`
    <style>
    $layout(landscape,css/desktop/components/deploy-grid.css)
    $layout(portrait,css/mobile/components/deploy-grid.css)
    .deploy-grid{
      display:inline-grid;
      justify-content: space-evenly;
      align-items: center;
      justify-items: stretch;
    }
    </style>
    <div class="deploy-grid">
      <aws-button effectClass=SlideLeftTransitionEffect apply-effect-to=observe></aws-button>
      <gitpod-button effectClass=SlideRightTransitionEffect apply-effect-to=observe></gitpod-button>
      <codespaces-button effectClass=SlideLeftTransitionEffect apply-effect-to=observe></codespaces-button>
      <netlify-button effectClass=SlideRightTransitionEffect apply-effect-to=observe></netlify-button>
      <github-button effectClass=SlideLeftTransitionEffect apply-effect-to=observe></github-button>
    </div>
    `}},"DeployGrid"),l(class extends Se.Component{constructor(){super(...arguments),this.name="doc-grid",this.tplsource="inline",this.template=`
    <style>
    $layout(landscape,css/desktop/components/doc-grid.css)
    $layout(portrait,css/mobile/components/doc-grid.css)
    .doc-grid{
      display:inline-grid;
      justify-content: space-evenly;
      align-items: center;
      justify-items: stretch;
    }
    quick-component[name=card]{
      cursor:pointer;
    }
    </style>
    <div class="doc-grid">
    <quick-component onclick="location.href='/essentials'" 
      name="card" data-image="qcobjects-essentials.png" 
      data-title="Essentials" 
      data-description="Basic elements, reference & more"></quick-component>
    <quick-component onclick="location.href='/installing'" 
      name="card" data-image="installing-qcobjects.png" 
      data-title="Installing" 
      data-description="All the ways possible to install it"></quick-component>
    <quick-component onclick="location.href='/the-qcobjects-http2-built-in-server'" 
      name="card" data-image="qcobjects-cli.png" 
      data-title="CLI Tool & Back-End Server" 
      data-description="Commands and options"></quick-component>
    </div>
    `}},"DocGrid")])});return $t();})();
//# sourceMappingURL=org.quickcorp.custom.components.js.map
