(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+/sI":function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a("ERkP"),r=a.n(n),i=a("TGcR"),s=a("t62R"),o=a("a6qo"),c=a("rHpw");const l="animated_gif",d="video";class u extends r.a.PureComponent{render(){const{durationInMilliseconds:e,type:t}=this.props;let a;if(t===l||"vine"===t)a=t===l?r.a.createElement(s.b,{weight:"bold"},"GIF"):r.a.createElement(i.a,{style:p.icon});else if(t===d&&e){const t=Math.trunc(e/6e4),n=`0${Math.trunc(e%6e4/1e3)}`.slice(-2);a=r.a.createElement(s.b,{color:"white"},`${t}:${n}`)}return a?r.a.createElement(o.a,{align:"left"},a):null}}const p=c.a.create((e=>({icon:{color:e.colors.white}})));t.c=u},"/Imo":function(e,t,a){"use strict";var n=a("97Jx"),r=a.n(n),i=(a("kYxP"),a("ERkP")),s=a.n(i),o=a("/yvb"),c=a("k/Ka"),l=a("3XMw"),d=a.n(l),u=a("rHpw");const p=d.a.i5450beb,h=d.a.f7432494;class m extends s.a.Component{constructor(...e){super(...e),this._handlePress=e=>{const{onPress:t}=this.props;t&&t(e),this._fileInput&&this._fileInput.click()},this._handleChange=e=>{const{onChange:t}=this.props,a=e.target,n=a.files;n.length&&t&&t(n),a.value=""},this._handleFileInputButtonRef=e=>{this._fileInput=e}}render(){const{accept:e,disabled:t,multiple:a,onChange:n,testID:i,...l}=this.props,d=!(null!=e&&e.includes("video")||null!=e&&e.includes("gif"));return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,r()({hoverLabel:e?{label:d?h:p}:void 0},l,{disabled:t,onPress:this._handlePress})),Object(c.a)("input",{accept:e,disabled:t,multiple:a,onChange:this._handleChange,ref:this._handleFileInputButtonRef,style:f.input,tabIndex:-1,testID:i,type:"file"}))}}m.defaultProps={disabled:!1,multiple:!1};const f=u.a.create((e=>({input:{width:"0.1px",height:"0.1px",opacity:0,overflow:"hidden",position:"absolute",zIndex:-1}})));t.a=m},"07FG":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("cnVF");const r=e=>e===n.B},"4bHO":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e,t)=>{switch(e.type){case"user":return"users"===t?`@${e.data.screen_name} `:`@${e.data.name} `;case"hashtag":case"topic":case"event":return`${e.data.topic} `;case"dm_conversation":return`${e.data.name} `;case"no_result":return`${e.data.text} `;default:return""}}},"7myi":function(e,t,a){"use strict";a("kYxP"),a("849X");var n=a("ERkP"),r=a.n(n),i=a("oEoC"),s=a("2dXj"),o=a("4bHO"),c=a("dzqK"),l=a("GZwR");class d extends r.a.Component{constructor(...e){super(...e),this._genericWrapperRef=r.a.createRef(),this.state={queryContext:void 0,canShowTypeahead:!1},this.render=()=>{const{children:e,contextText:t,isInline:a,isInlineReply:n,onTypeaheadStateChange:i,source:o}=this.props,{canShowTypeahead:c,queryContext:d}=this.state,u=c&&d?{word:d.word,resultType:d.resultType}:void 0;return r.a.createElement(s.a,{contextText:t,isInline:a,isInlineReply:n,onDismiss:this._handleDismiss,onSelectItem:this._handleSelectItem,onTypeaheadStateChange:i,query:u,ref:this._genericWrapperRef,source:o||l.d.Compose},e(this._handleInputChange))},this._handleSelectItem=e=>{const{onTextUpdated:t}=this.props,{queryContext:a}=this.state;if(a){const n=Object(o.a)(e,a.resultType),{newCursor:r,newTweetText:i}=this._replaceToken(n,a);t({target:{value:i}}),this._updateDOMTextArea(r,i)}this._setQueryContext(void 0)},this._updateDOMTextArea=(e,t)=>{this._textAreaRef&&(this._textAreaRef.value=t,this._textAreaRef.selectionStart=e,this._textAreaRef.selectionEnd=e,this._textAreaRef.focus())},this._handleInputChange=e=>{if(Object(c.a)(e))throw new Error("PlainTextTypeaheadComposeWrapper cannot handle rich text input changes");const t=e&&(e.currentTarget||e.target),{queryContext:a}=this.state;this._textAreaRef=t;const n=a&&a.word,r=t.value,{end:s,start:o,word:l}=i.c(t.selectionStart,r),d=i.e(l||"","compose");if((null==d?void 0:d.q)!==n)if(this._genericWrapperRef.current&&this._genericWrapperRef.current.resetSelectedItem(),-1===o)this._setQueryContext(void 0);else if(d){const{q:e,result_type:a}=d;this._setQueryContext({word:e,resultType:a,fullText:t.value,startIndex:o,endIndex:s})}else this._setQueryContext(void 0)},this._setQueryContext=e=>this.setState({queryContext:e,canShowTypeahead:!!e}),this._handleDismiss=()=>this.setState({canShowTypeahead:!1})}_replaceToken(e,t){const{endIndex:a,fullText:n,startIndex:r}=t,i=n.slice(0,r);return{newTweetText:i+e+n.slice(a),newCursor:i.length+e.length}}}t.a=d},CDB5:function(e,t,a){"use strict";a.d(t,"m",(function(){return y})),a.d(t,"l",(function(){return v})),a.d(t,"f",(function(){return w})),a.d(t,"d",(function(){return I})),a.d(t,"g",(function(){return x})),a.d(t,"e",(function(){return M})),a.d(t,"i",(function(){return O})),a.d(t,"j",(function(){return k})),a.d(t,"k",(function(){return R})),a.d(t,"h",(function(){return D})),a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return L})),a.d(t,"c",(function(){return V}));a("kYxP");var n=a("AspN"),r=a("xPna"),i=a("oEOe"),s=a("xCUF"),o=a("ude7"),c=a("07FG"),l=a("Ssj5"),d=a("fEA7"),u=a.n(d),p=a("uKEd"),h=a("lnti"),m=a("/NU0");const f="dmComposer",b={};const g=e=>{const{conversation_id:t,id:a,localMediaId:n,recipient_ids:r,sender_id:i,text:s,attachment:o={},error:c}=e,l=Date.now().toString();return{conversation_id:t,recipient_ids:r,error:c,id:a,is_draft:!0,message_data:{attachment:o,localMediaId:n,sender_id:i,text:s,time:l},type:"message",time:l}},y=e=>(t,a,{api:l})=>{const{senderId:d,cardUrl:f,conversationId:b,localMediaId:y,recipients:_=[],requestId:v=u.a.v1(),tweetAttachment:E,quickReply:w,...C}=e||{};t(z(b));const x=a(),P=y||S(a(),b),[M]=n.k(x,P),{mediaFile:O,mediaMetadata:k}=M||{},R=_.length>0&&_.join(","),T={};O&&O.isGif?T.extraInitParams="&media_category=dm_gif":O&&O.isVideo&&(T.extraInitParams="&media_category=dm_video");const j=n.p(P,T),U=[t(j)],L=D(x,b),{found_media_origin:F}=L||{};return O&&O.isGif&&U.push(Object(o.a)(O)),Promise.all(U).then((([[a],o])=>{const u=(null==k?void 0:k.altText)||(null==k?void 0:k.defaultAltText),y=!!u;return(a&&(F||y)?t(n.m({media_id:a.uploadId,found_media_origin:F,...!!y&&{alt_text:{text:u}}})):Promise.resolve()).then((()=>{const{id_str:n}=E||{},u={};if(a){const{mediaFile:e={}}=a,t={original_info:{width:e.width,height:e.height},sizes:[{h:e.height,w:e.width,resize:"fit"}]};e.isImage?u.photo={...t,media_url_https:e.url}:e.isGif?u.animated_gif={...t,media_url_https:o,type:"animated_gif"}:e.isVideo&&(u.video={...t,media_url_https:e.url,type:"video"})}else E&&(u.tweet={status:n});const{uploadId:y}=a||{},_=g({attachment:u,conversation_id:b,id:v,recipient_ids:R,sender_id:d,text:e.text}),x={...C,...Object(c.a)(f)&&{card_uri:f},conversation_id:b,...!n&&{media_id:y},recipient_ids:R,request_id:v,tweet_id:n};w&&(x["quick_reply_response[options][id]"]=w.id,x["quick_reply_response[options][selected_id]"]=w.selected_id);const M=Object(h.a)([H(b),{type:s.c.REQUEST},{type:"rweb/dmComposer/SEND_MESSAGE_REQUEST"},b&&Object(p.b)(b,v,_)]);return t(M),l.DirectMessages.sendMessage(x).then((a=>{const{cards:n,entries:i,tweets:o,users:c}=a.entities,{conversations:l}=a.result;Object(m.a)(P)&&t(V(b,P));const d=Object(h.a)([{type:s.c.SUCCESS},...Object(r.a)({conversations:l,entries:i,users:c,tweets:o,cards:n}),{type:"rweb/dmComposer/SEND_MESSAGE_SUCCESS"},b&&Object(p.j)(b,v,e),I(b)]);return t(d),Promise.resolve(Object.values(a.entities.entries)[0].conversation_id)}),(a=>{const n=g({attachment:u,conversation_id:b,error:!0,id:v,localMediaId:P,recipient_ids:R,sender_id:d,text:e.text}),r=Object(h.a)([{type:s.c.SUCCESS},{type:"rweb/dmComposer/SEND_MESSAGE_FAILURE"},b&&Object(p.b)(b,v,n)]);return t(r),Object(i.e)(t,a,"ACTION_SEND_DM")}))}),(e=>(t(W(b)),e.type="metadata",Promise.reject(e))))}),(e=>(t(Object(h.a)([Object(m.a)(P)&&V(b,P),W(b)])),Promise.reject(e))))},_=(e,t)=>e.dmComposer[t],v=(e,t)=>{const a=_(e,t);return a?a.text:null},E="rweb/dmComposer/SAVE_TEXT",w=(e,t)=>({type:E,conversationId:e,text:t}),C="rweb/dmComposer/REMOVE_TEXT",I=e=>({type:C,conversationId:e}),x=(e,t)=>{const a=_(e,t);return a?a.cardUrl:null},P="rweb/dmComposer/SAVE_CARD_URL",M=(e,t)=>({type:P,conversationId:e,cardUrl:t}),S=(e,t)=>{const a=_(e,t);return a?a.mediaId:null},O=(e,t)=>{const a=n.k(e,S(e,t));return a.length>0?a[0]:null},k=(e,t)=>{const a=_(e,t);return!!a&&a.isUploading},R=(e,t)=>n.l(e,S(e,t)),D=(e,t)=>{const a=_(e,t);return a?a.gifMetadata:null},T="rweb/dmComposer/ADD_MEDIA",j=(e,[t],a)=>({payload:{isUploading:!1,mediaId:t,gifMetadata:a},type:T,conversationId:e}),U="rweb/dmComposer/CANCEL_UPLOAD",L=e=>({type:U,conversationId:e}),F="rweb/dmComposer/REMOVE_MEDIA",A=e=>({type:F,conversationId:e}),V=(e,t)=>a=>{a(n.i(t)),a([L(e),A(e)])},B="rweb/dmComposer/UPLOAD_REQUEST",z=e=>({type:B,conversationId:e}),G="rweb/dmComposer/UPLOAD_SUCCESS",H=e=>({type:G,conversationId:e}),N="rweb/dmComposer/UPLOAD_FAILURE",W=e=>({type:N,conversationId:e});l.a.register({[f]:function(e=b,t){const a=t.conversationId||"new_group";switch(t.type){case T:{const n=e[a]||{cardUrl:null,gifMetadata:null,isUploading:!1,mediaId:null,text:null};return{...e,[a]:{...n,...t.payload}}}case B:{const t=e[a]||{cardUrl:null,gifMetadata:null,isUploading:!1,mediaId:null,text:null};return{...e,[a]:{...t,isUploading:!0}}}case U:{const t=e[a]||{cardUrl:null,gifMetadata:null,isUploading:!1,mediaId:null,text:null};return{...e,[a]:{...t,isUploading:!1}}}case N:case G:case F:{const t=e[a]||{cardUrl:null,gifMetadata:null,isUploading:!1,mediaId:null,text:null};return{...e,[a]:{...t,isUploading:!1,mediaId:null,gifMetadata:void 0}}}case E:{const n=e[a]||{cardUrl:null,gifMetadata:null,isUploading:!1,mediaId:null,text:null};return{...e,[a]:{...n,text:t.text}}}case P:{const n=e[a]||{cardUrl:null,gifMetadata:null,isUploading:!1,mediaId:null,text:null};return{...e,[a]:{...n,cardUrl:t.cardUrl}}}case C:{const t=e[a]||{cardUrl:null,gifMetadata:null,isUploading:!1,mediaId:null,text:null};return{...e,[a]:{...t,text:null}}}default:return e}}})},KqB4:function(e,t,a){"use strict";var n=a("IGGJ");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var a=[],n=(0,r.default)(e,t),i=0;i<n.length;i++)a.push(n[i].url);return a};var r=n(a("vwfs"));e.exports=t.default},LCtV:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));a("kYxP");var n=a("ERkP"),r=a.n(n),i=a("3XMw"),s=a.n(i),o=a("mN6z"),c=a("Qwev"),l=a("rHpw"),d=a("1auM"),u=a("ude7"),p=a("U+bB"),h=a("MWbm");const m=s.a.gff1f69e,f=Object.freeze({INFINITE:"infinite",MEDIUM:"medium",NONE:"none"});class b extends r.a.Component{constructor(...e){super(...e),this.state={imagePreviewUrl:null},this._getImageSrc=()=>{const{enableGif:e,mediaItem:t}=this.props,{imagePreviewUrl:a}=this.state;if(t&&t.mediaFile)return t.mediaFile.isGif&&!e?a:t.mediaFile.url}}componentDidUpdate(){const{enableGif:e,mediaItem:{mediaFile:t}}=this.props,{imagePreviewUrl:a}=this.state;e||a||t instanceof d.a&&t.isGif&&Object(u.a)(t).then((e=>{this.setState({imagePreviewUrl:e})}))}shouldComponentUpdate(e,t){return!Object(o.a)(e,this.props)||!Object(o.a)(t,this.state)}render(){const{borderRadius:e,enableGif:t,mediaItem:a,onClick:n,resizeMode:i}=this.props,{imagePreviewUrl:s}=this.state||{},o=a.mediaFile&&a.mediaFile.isGif&&!t&&!s,l=a.needsProcessing||o,d=[y.root,g[e],l&&y.loadingBorder],u=this._getImageSrc();return r.a.createElement(h.a,{onClick:n,style:d},l||!u?r.a.createElement(c.a,{accessibilityLabel:m,style:y.activityIndicator}):r.a.createElement(p.a,{resizeMode:i,source:u,style:y.image}))}}b.defaultProps={borderRadius:f.NONE,enableGif:!0,resizeMode:"cover"};const g=l.a.create((e=>({[f.INFINITE]:{borderRadius:e.borderRadii.infinite},[f.MEDIUM]:{borderRadius:e.borderRadii.small},[f.NONE]:{borderRadius:e.borderRadii.none}}))),y=l.a.create((e=>({root:{borderRadius:e.borderRadii.xLarge,borderStyle:"solid",borderWidth:e.borderWidths.none,borderColor:"transparent",maxWidth:"100%",height:"100%",overflow:"hidden"},image:{display:"block",height:"100%",width:"100%"},loadingBorder:{borderColor:e.colors.gray300},activityIndicator:{height:"100%"}})));t.b=b},MLl7:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i}));const n=Object.freeze({Composition:"composition",DMComposition:"dm_composition"}),r=e=>Object.values(n).indexOf(e)>=0,i=(e,t)=>"boolean"==typeof e?e:t},UgB4:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),i=a("Lsrn"),s=a("k/Ka");const o=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z"})));o.metadata={width:24,height:24},t.a=o},VPdC:function(e,t,a){"use strict";a.d(t,"b",(function(){return y}));var n=a("97Jx"),r=a.n(n),i=a("ERkP"),s=a.n(i),o=a("3XMw"),c=a.n(o),l=a("cjZk"),d="fileInput",u=a("sjK1"),p=a("/Imo"),h=a("rHpw"),m=a("9HgX");const f=c.a.b9960f31,b={viewType:"media_picker"},g=s.a.createElement(l.a,null),y=({acceptGifs:e,acceptImages:t=!0,acceptVideo:a})=>(t?m.b:[]).concat(e?[m.a]:[]).concat(a?u.a:[]);class _ extends s.a.PureComponent{render(){const{acceptGifs:e,acceptImages:t,acceptVideo:a,customMimeTypes:n,icon:i,style:o,withIcon:c,...l}=this.props,u=y({acceptGifs:e,acceptImages:t,acceptVideo:a}).concat(n).join(",");return s.a.createElement(p.a,r()({},l,{accept:u,behavioralEventContext:b,icon:c?i:void 0,style:[v.root,o],testID:d}))}}_.defaultProps={acceptGifs:!0,acceptImages:!0,acceptVideo:!0,customMimeTypes:[],accessibilityLabel:f,icon:g,size:"medium",withIcon:!0};const v=h.a.create((e=>({root:{margin:`-${e.spaces.space12}`}})));t.a=_},b5s6:function(e,t,a){"use strict";var n=a("97Jx"),r=a.n(n),i=a("ERkP"),s=a.n(i),o=a("v6aA"),c=a("XOJV"),l=a("eSoz"),d=a("rxPX"),u=a("0KEI");const p=(e,t)=>t.tweetId,h=(e,t)=>{const a=t.tweetId,n=a&&c.a.select(e,a);return n?Object(l.g)(e,n):void 0};var m=Object(d.a)().propsFromState((()=>({community:h,hydratedTweet:c.a.createHydratedTweetSelector(p)}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(u.createLocalApiErrorHandlerWithContextFactory)("QUOTE_TWEET_CONTAINER"),fetchCommunityIfNeeded:l.c.fetchOneIfNeeded}))),f=a("YeIG"),b=a("uCxL"),g=a("x5Pi");const y=m((({community:e,createLocalApiErrorHandler:t,fetchCommunityIfNeeded:a,hydratedTweet:n,tweetId:i,...c})=>{const{featureSwitches:l,loggedInUserId:d}=s.a.useContext(o.a),u=null==n?void 0:n.community_id_str;s.a.useEffect((()=>{u&&Object(f.a)(e)&&a(u).catch(t())}),[e,u,t,a]);const p=l.isTrue("responsive_web_alt_text_badge_enabled"),h=n&&Object(g.f)(n,d,e),m=h&&Object(g.e)(h),y=l.isTrue("responsive_web_reactions_enabled");return s.a.createElement(b.a,r()({},c,{loggedInUserId:d,shouldShowAltLabelAlways:p,socialContextProps:m,tweet:n,withReactions:y}))}));t.a=y},cIoY:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),i=a("1YZw"),s=a("rxPX"),o=Object(s.a)().propsFromActions((()=>({addToast:i.b}))),c=(a("kYxP"),a("k/Ka")),l=a("3XMw"),d=a.n(l),u=a("sgih"),p=a("t62R"),h=a("/yvb"),m=a("rHpw");const f=d.a.cfd2f35d;class b extends r.a.Component{constructor(...e){super(...e),this._handleOnFocus=e=>{e.currentTarget.select()}}render(){const{cancelButtonLabel:e,description:t,headerText:a,link:n,onCancel:i}=this.props,s=Object(c.a)("input",{autoFocus:!0,onFocus:this._handleOnFocus,readOnly:!0,style:g.linkInput,value:n});return r.a.createElement(u.a,{onMaskClick:i,style:g.container,type:"center",withMask:!0},a&&r.a.createElement(p.b,{align:"center",style:g.headerText,weight:"bold"},a),t&&r.a.createElement(p.b,{align:"center",color:"gray700",style:g.labelText},t),s,r.a.createElement(h.a,{onPress:i,size:"xLarge",style:g.cancelButton,type:"brandText"},e))}}b.defaultProps={cancelButtonLabel:f};const g=m.a.create((e=>({container:{alignItems:"center",paddingVertical:e.spaces.space32,paddingHorizontal:e.spaces.space12,position:"relative"},headerText:{marginBottom:e.spaces.space16},labelText:{marginBottom:e.spaces.space16,width:"100%"},linkInput:{backgroundColor:e.colors.gray0,borderColor:"transparent",color:e.colors.gray700,fontSize:e.fontSizes.body,marginBottom:e.spaces.space12,paddingVertical:e.spaces.space12,paddingHorizontal:e.spaces.space20},cancelButton:{width:"100%"}})));var y=b,_=a("I/9y"),v=a("mjJ+"),E=a("cm6r"),w=a("CaKu"),C=a("U+bB");const I=d.a.e05c00b4,x=d.a.eabf2209,P=d.a.a613e72f,M=d.a.f88553c8,S={riffsy:"https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png",giphy:"https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png"};class O extends r.a.PureComponent{constructor(e){super(e),this._renderMenu=e=>r.a.createElement(v.a,{items:[{text:P,Icon:_.a,onClick:this._handleCopyGifLinkButtonClick}],onCloseRequested:e}),this._handleCopyGifLinkButtonClick=e=>{const{addToast:t,gifUrl:a}=this.props;w.a.isAvailable()?(w.a.setString(a),t({text:M})):this.setState({showCopyLinkSheet:!0}),e&&e()},this._handleCopyLinkSheetCancel=()=>{this.setState({showCopyLinkSheet:!1})},this.state={showCopyLinkSheet:!1}}render(){const{showCopyLinkSheet:e}=this.state,{gifUrl:t,provider:a}=this.props,{display_name:n,name:i}=a,s=S[i];return s?r.a.createElement(r.a.Fragment,null,e?r.a.createElement(y,{description:x({providerName:n}),headerText:I,link:t,onCancel:this._handleCopyLinkSheetCancel}):null,r.a.createElement(p.b,{align:"center",color:"gray700",style:k.root},r.a.createElement(d.a.I18NFormatMessage,{$i18n:"e2e6ea0d"},this._renderAttribution(n,s)))):null}_renderAttribution(e,t){return r.a.createElement(E.a,{interactiveStyles:null,renderMenu:this._renderMenu},r.a.createElement(p.b,{weight:"bold",withInteractiveStyling:!0},r.a.createElement(C.a,{source:{uri:t},style:k.image}),r.a.createElement(p.b,null,e.toUpperCase())))}}const k=m.a.create((e=>({button:{marginLeft:e.spaces.space12},image:{display:"inline-block",height:e.spaces.space16,marginHorizontal:e.spaces.space4,width:e.spaces.space16},root:{marginHorizontal:e.spaces.space12}})));var R=O;const D=o((({addToast:e,gifUrl:t,provider:a})=>r.a.createElement(R,{addToast:e,gifUrl:t,provider:a})));t.a=D},dzqK:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("ERkP");var n=a("zpdM");function r(e){return e instanceof n.EditorState}},gpVt:function(e,t,a){"use strict";a.d(t,"b",(function(){return M}));var n=a("ERkP"),r=a.n(n),i=(a("kYxP"),a("CDB5")),s=a("xVN5"),o=a("vjRr"),c=a("rxPX"),l=a("0KEI");const d=(e,t)=>{const{urls:a}=t,n=[...a];let r;for(const t of n.reverse())if(r=o.a.select(e,t),r)break;return r};var u=Object(c.a)().propsFromState((()=>({card:d}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(l.createLocalApiErrorHandlerWithContextFactory)("COMPOSER_CARD_PREVIEW"),fetchCardPreviewIfNeeded:o.a.fetchCardPreviewIfNeeded,updateDMComposer:i.e,updateTweetComposer:s.w}))),p=a("KqB4"),h=a.n(p),m=a("aX4+"),f=a("3XMw"),b=a.n(f),g=a("hOZg"),y=a("cnVF"),_=a("MWbm"),v=a("v6aA"),E=a("/yvb"),w=a("rHpw"),C=a("VY6S"),I=a("mN6z");const x=b.a.f6fec9f6,P=/^https?:\/\//i,M=e=>{const t=h()(e);if(t.length)return t.map((e=>!P.test(e)&&`http://${e}`||e))};class S extends r.a.Component{constructor(e,t){super(e,t),this._fetchCardPreviewIfNeeded=()=>{const{createLocalApiErrorHandler:e,fetchCardPreviewIfNeeded:t,urls:a}=this.props;a.forEach((a=>{t(a).catch(e())}))},this._handleCardPreviewDismissal=e=>this._updateSingleComposer({cardUrl:y.B}),this._updateSingleComposer=e=>{const{conversationId:t,index:a,updateDMComposer:n,updateTweetComposer:r}=this.props,{cardUrl:i}=e||{};this._isDMComposer?t&&n(t,i):r({updates:{cardUrl:i},index:a})},this._debouncedFetchCardPreview=Object(C.a)(this._fetchCardPreviewIfNeeded,1e3),this._isDMComposer=!!e.conversationId}componentDidMount(){this._debouncedFetchCardPreview()}componentDidUpdate(e){const{urls:t}=this.props;Object(I.a)(e.urls,t)||this._debouncedFetchCardPreview()}componentWillUnmount(){this._updateSingleComposer()}render(){const{card:e,isCardPreviewTombstoned:t,style:a}=this.props,{loggedInUserId:n}=this.context;return e&&!t&&n?r.a.createElement(_.a,{style:a},r.a.createElement(m.a,{card:{name:e.name,url:e.url,binding_values:e.binding_values},cardContext:{tweetUserId:n},isInteractive:!1,preventVideoPlayback:!0}),r.a.createElement(E.a,{accessibilityLabel:x,icon:r.a.createElement(g.a,null),onPress:this._handleCardPreviewDismissal,size:"xSmall",style:O.closeButton,type:"onMediaDominantColorFilled"})):null}}S.contextType=v.a;const O=w.a.create((e=>({closeButton:{position:"absolute",top:e.spaces.space4,left:e.spaces.space4}}))),k=u(S);t.a=k},hiGS:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),i=a("Lsrn"),s=a("k/Ka");const o=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"}),r.a.createElement("path",{d:"M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"})));o.metadata={width:24,height:24},t.a=o},jtO7:function(e,t,a){"use strict";var n=a("97Jx"),r=a.n(n),i=a("ERkP"),s=a.n(i),o=a("t62R"),c=a("I4+6"),l=a("cm6r"),d=a("rHpw"),u=a("MWbm");const p=d.a.create((e=>({container:{backgroundColor:e.colors.cellBackground},root:{justifyContent:"center",minHeight:e.spaces.space48,paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.spaces.space16}})));t.a=({align:e="center",color:t,label:a,...n})=>{const i=c.a.generate({backgroundColor:d.a.theme.colors.transparent,color:d.a.theme.colors[t],insetFocusRing:!0});return s.a.createElement(u.a,{style:p.container},s.a.createElement(l.a,r()({},n,{interactiveStyles:i,style:p.root}),s.a.createElement(o.b,{align:e,color:t},a)))}},kIAd:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a("0vv5");const r=500,i={scoper:[{type:"dmUserSearch",regexp:/^[@＠]?(.*)|^$/,srcInputs:["compose_message"],scope:{result_type:"users",count:20}},{type:"username",regexp:/^[@＠](\w{1,20})/,srcInputs:["compose"],scope:{result_type:"users",count:20}},{type:"hashtag",regexp:a.n(n).a,srcInputs:["compose"],scope:{result_type:"topics",count:20}},{type:"topic",regexp:/(.+)/,srcInputs:["search_box"],scope:{result_type:"all"}},{type:"ttt",regexp:/(.+)/,srcInputs:["welcome_flow"],scope:{count:10,result_type:"topics,ttt"}}],WordBoundary:/[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,WordEnd:/[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/}},krmn:function(e,t,a){"use strict";a("kYxP");var n=a("ERkP"),r=a.n(n),i=a("zb92"),s=a("RuTB"),o=a("3XMw"),c=a.n(o);var l=Object(i.a)({loader:()=>c.a.emoji.then((()=>Promise.all([a.e(0),a.e(17),a.e(209)]).then(a.bind(null,"5RdJ")))),renderPlaceholder:(e,t)=>r.a.createElement(s.a,{hasError:e,onRetry:t})}),d=a.p+"twemoji_sprite.6d90d9d5.png",u=a.p+"twemoji_sprite_high_res.0b0faef5.png",p=a("rHpw"),h=a("U+bB"),m=a("kLqS"),f=a("MWbm");const b=p.a.create((e=>({content:{backgroundColor:e.colors.cellBackground},dimensions:{height:"400px",borderRadius:e.borderRadii.xLarge,width:10*e.spacesPx.space32,overflow:"hidden"},hidden:{display:"none"}})));var g=e=>{const{onSelect:t,partialRender:a}=e,n=m.a.get()>1?u:d;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{style:[b.content,b.dimensions]},r.a.createElement(l,{onSelect:t,partialRender:a,rowSize:9,spriteUrl:n})),r.a.createElement(h.a,{source:n,style:b.hidden}))},y=a("pNJr"),_=a("2ZFc"),v=a("OiMc"),E=a("/yvb");const w=c.a.d4a4842d,C=r.a.createElement(y.a,null),I=c.a.fec16c1c,x={viewType:"emoji_picker"},P=e=>{const{disabled:t,onEmojiSelect:a,onPress:n,size:i,style:s,textInputRef:o}=e,[c,d]=r.a.useState(!0);r.a.useEffect((()=>{const e=setTimeout((()=>{l.preload(),_.a.get("emojiPicker2")}),5e3);return()=>{clearTimeout(e)}}),[]);return r.a.createElement(v.a,{enableEnterKeyToggle:!0,onAnimateComplete:()=>d(!1),onDismiss:()=>d(!0),onHoverCardUnmount:()=>{window.requestAnimationFrame((()=>o&&o.focus()))},renderContent:()=>r.a.createElement(g,{onSelect:a,partialRender:c}),withArrow:!0},r.a.createElement(E.a,{accessibilityHasPopup:"menu",accessibilityLabel:w,behavioralEventContext:x,disabled:t,hoverLabel:{label:I},icon:C,onPress:e=>n&&n(e),size:i,style:s,type:"brandText"}))};P.defaultProps={disabled:!1,size:"xSmall"};t.a=P},oEoC:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"g",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"f",(function(){return h}));a("kYxP");var n=a("oQhu"),r=a("kIAd"),i=a("rHpw");function s(e,t){let a;const n=r.b.scoper.find((n=>{if(-1!==n.srcInputs.indexOf(t))return a=e.match(n.regexp),a}));let i="";return a&&(i=a&&(1===a.length?a[0]:a[1])),n?{...n.scope,src:t,q:i}:null}function o(e,t){const a=t.slice(0,e),n=t.slice(e,t.length),i=a.search(r.b.WordEnd),s=i>=0?a.slice(i):"",o=n.search(r.b.WordBoundary),c=s+n.slice(0,o);return c.trim()?{start:i,end:e+o,word:c}:{start:-1,end:-1,word:""}}function c(){return`typeaheadFocus-${Math.random()}`}function l(e){const{altKey:t,ctrlKey:a,metaKey:n}=e;return!(t||a||n)}function d(e,t){const a=[];e.forEach((e=>{const n=t.find((t=>t.id===e.id));n&&n.data&&n.data.result_context?a.push(n):a.push(e)}));const n=a.map((e=>e.id)),r=t.filter((e=>n.indexOf(e.id)<0));return[...a,...r]}const u=Object(n.a)((e=>({bottom:0,paddingBottom:`calc(2.5 * ${i.a.theme.spaces.space64})`,position:"fixed",top:`${e}px`,transform:[{translate3d:"0,0,0"}]})));let p=0;const h=()=>(p+=1,`typeaheadDropdown-${p}`)},pKoL:function(e,t,a){"use strict";a("kYxP");var n=a("ERkP"),r=a.n(n),i=a("HPNB"),s=a("9HgX"),o=a("3XMw"),c=a.n(o),l=a("LCtV"),d=a("eyty"),u=a("zb92"),p=a("RuTB"),h=Object(u.a)({loader:()=>Promise.all([a.e(0),a.e(6),a.e(178)]).then(a.bind(null,"EOJ2")).then((e=>({default:e.__DANGEROUS_IMPORT_VIDEOPLAYER__}))),renderPlaceholder:(e,t)=>r.a.createElement(p.a,{hasError:e,onRetry:t})}),m=a("k/Ka"),f=a("eXeu"),b=a("iOGT");class g extends r.a.Component{constructor(...e){super(...e),this._setVideoRef=e=>{const{getVideoRef:t}=this.props;t&&t(e)}}render(){const{children:e,dataSaverMode:t,getVideoRef:a,style:n,variants:i,...s}=this.props,o=Object(b.b)(i,t?b.a.MEDIUM:b.a.HIGH)||[],c=Object(f.f)(o.map((e=>({src:e.url,type:e.content_type}))));return Object(m.a)("video",{...s,children:[c.map((e=>r.a.createElement("source",{key:e.src,src:e.src,type:e.type}))),e],ref:this._setVideoRef,style:n})}}g.defaultProps={dataSaverMode:!1,variants:[]};var y=a("62wY"),_=a("sjK1"),v=a("v6aA"),E=a("cHvH"),w=a("mXq/"),C=a("/yvb"),I=a("a6qo"),x=a("rHpw"),P=a("hOZg"),M=a("GCOQ"),S=a("tuke"),O=a("U+bB"),k=a("MWbm"),R=a("+/sI");const D=c.a.gd80afba,T=c.a.j322caee,j=c.a.abd845fd,U=c.a.df1b0707,L=c.a.cd959e5b,F=c.a.e68b09b4,A=c.a.add55c97;class V extends r.a.Component{constructor(...e){super(...e),this.state={isVideoPaused:!0,playGif:!1},this._handleGifClick=()=>{this.setState({playGif:!this.state.playGif})},this._handleMediaPreviewLayout=e=>{const{mediaItem:t,resizeIfNeeded:a}=this.props,n=t.mediaFile||t.externalMediaDetails;if(!n)return;const{nativeEvent:{layout:{height:r,width:i}}}=e,{height:s,width:o}=n,c=o/s;Math.abs(c-i/r)>.05&&this._mediaContainer&&("width"===a?this._mediaContainer.setNativeProps({style:{width:r*c}}):"height"===a&&this._mediaContainer.setNativeProps({style:{height:i/c}}))},this._handleVideoOnPlay=e=>{this.setState({isVideoPaused:!1})},this._handleVideoOnPause=e=>{this.setState({isVideoPaused:!0})},this._setMediaContainerRef=e=>{this._mediaContainer=e},this._setVideoRef=e=>{this._video=e},this.playVideo=()=>{if(this._video){const e=this._video.play();void 0!==e&&e.then((e=>{this._handleVideoOnPlay()})).catch()}},this.pauseVideo=()=>{this._video&&(this._video.pause(),this._handleVideoOnPause())}}render(){var e;const{accessibilityLabel:t,accessibilityRole:a,enableGif:n,mediaItem:o,onEdit:c,onEditSensitiveWarning:l,onRemove:d,style:u,withAltTextLabel:p,withCloseButton:h,withEditButton:m,withEditIcon:f,withEditSensitiveWarningButton:b}=this.props,{playGif:g}=this.state,y=o.externalMediaDetails&&o.externalMediaDetails.mediaType===s.a,_=y||n&&o.mediaFile&&o.mediaFile.isGif,v=!(null==(e=o.mediaFile)||!e.isVideo);return r.a.createElement(E.a,null,(({windowWidth:e})=>{const n=void 0!==f?f:!i.a.isTwoColumnLayout(e);return r.a.createElement(k.a,{accessibilityLabel:t||A,accessibilityRole:a,onLayout:this._handleMediaPreviewLayout,ref:this._setMediaContainerRef,style:[u,B.cursor,y&&B.gifPlayButton]},this._renderPreview(),y&&!g&&r.a.createElement(w.a,{accessibilityLabel:U,onPress:this._handleGifClick,size:"small"}),h?r.a.createElement(C.a,{accessibilityLabel:L,hoverLabel:{label:F},icon:r.a.createElement(P.a,null),onPress:d,size:"small",style:B.close,type:"onMediaDominantColorFilled"}):null,_?r.a.createElement(R.c,{type:R.a}):null,p&&!v?r.a.createElement(I.a,{align:"left",altLabel:t}):null,m?r.a.createElement(k.a,{style:[B.editMedia,v?B.editVideo:B.editImage]},b?r.a.createElement(C.a,{accessibilityLabel:T,icon:r.a.createElement(M.a,{style:B.editSensitiveWarningIcon}),onPress:l,size:"small",style:B.editSensitiveWarningButton,type:"onMediaDominantColorFilled"}):null,r.a.createElement(C.a,{accessibilityLabel:D,icon:n?r.a.createElement(S.a,null):void 0,onPress:c,size:n?"xSmall":"small",type:"onMediaDominantColorFilled"},n?void 0:j)):null)}))}_renderPreview(){var e;const{mediaItem:t}=this.props;if(t.externalMediaDetails){const e=t.externalMediaDetails.previewUrl,a=t.externalMediaDetails.stillMediaUrl;return this._renderGifPreview(e,a)}return null!=(e=t.mediaFile)&&e.isVideo?this._renderVideoPreview(t.mediaFile.type,t.mediaFile.url,t.id,t.mediaFile):r.a.createElement(k.a,{style:x.a.absoluteFill},this._renderImagePreview())}_renderGifPreview(e,t){const{playGif:a}=this.state,n={uri:a?e:t};return r.a.createElement(k.a,{onClick:this._handleGifClick,style:x.a.absoluteFill},r.a.createElement(O.a,{resizeMode:"cover",source:n,style:B.video}))}_renderImagePreview(){const{borderRadius:e,enableGif:t,imageResizeMode:a,mediaItem:n,onClick:i}=this.props;return r.a.createElement(l.b,{borderRadius:e,enableGif:t,mediaItem:n,onClick:i,resizeMode:a})}_renderVideoPreview(e,t,a,n){var i;this._configurableVideoPlayerEnabled=this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled");const{mediaItem:s}=this.props,o=null==(i=s.mediaMetadata)?void 0:i.subtitles;if(this._configurableVideoPlayerEnabled&&n instanceof _.c){const i=Object(d.h)(n.fileHandle)?[{src:t,type:e}]:[],c=`${a}`;return r.a.createElement(h,{mediaFile:n,mediaId:c,subtitles:o,trimData:null==s?void 0:s.trimData,variants:i})}{var c;const a=Object(d.h)(n.fileHandle)?[{content_type:e,url:t}]:[],i=(null==o||null==(c=o.upload)?void 0:c.mediaFile)instanceof y.b?o.upload.mediaFile.vtt:void 0;return r.a.createElement(g,{autoPlay:!1,controls:!0,getVideoRef:this._setVideoRef,loop:!0,muted:!0,onPause:this._handleVideoOnPause,onPlay:this._handleVideoOnPlay,playsInline:!0,poster:n instanceof _.c?n.thumbnail:"",style:B.video,variants:a},o&&i?r.a.createElement("track",{default:!0,kind:"subtitles",label:o.displayName,src:i,srcLang:o.lang}):null)}}}V.contextType=v.a,V.defaultProps={enableGif:!0,withCloseButton:!0,withAltTextLabel:!1,withEditButton:!1,withEditSensitiveWarningButton:!1};const B=x.a.create((e=>({close:{position:"absolute",left:e.spaces.space4,top:e.spaces.space4},cursor:{cursor:"pointer"},editSensitiveWarningIcon:{color:e.colors.primary},editMedia:{display:"flex",flexDirection:"row",position:"absolute",right:e.spaces.space4},editImage:{bottom:e.spaces.space4},editVideo:{top:e.spaces.space4},editSensitiveWarningButton:{marginRight:e.spaces.space8},gifPlayButton:{alignItems:"center",justifyContent:"center"},video:{height:"100%",width:"100%"}})));t.a=V},rFBM:function(e,t,a){"use strict";a("kYxP");var n=a("ERkP"),r=a.n(n),i=a("rHpw"),s=a("k/Ka"),o=a("MWbm");const c=e=>Object(s.a)("div",e);class l extends r.a.Component{constructor(...e){super(...e),this._dragEnterCount=0,this.state={active:!1},this._handleDragDrop=e=>{const{onFilesAdded:t}=this.props;e.preventDefault();t(Array.from(e&&e.dataTransfer.files)),this._updateDragCount(0)},this._handleDragEnter=e=>{const{onDragEnter:t}=this.props;e.preventDefault(),t&&t(),this._updateDragCount(this._dragEnterCount+1)},this._handleDragLeave=e=>{e.preventDefault(),this._updateDragCount(this._dragEnterCount-1)},this._handleDragOver=e=>{e.preventDefault()}}render(){const{allowDragDrop:e,children:t,style:a}=this.props,{active:n}=this.state,i=e?d.dragBorderValid:d.dragBorderInvalid;return r.a.createElement(c,{onDragEnter:this._handleDragEnter,onDragLeave:this._handleDragLeave,onDragOver:this._handleDragOver,onDrop:this._handleDragDrop,style:[d.root,a,n&&i]},r.a.createElement(o.a,{style:d.inner},"function"==typeof t?t(n):t))}_updateDragCount(e){this._dragEnterCount=e,0===this._dragEnterCount?this.setState({active:!1}):this._dragEnterCount>0&&this.setState({active:!0})}}l.defaultProps={allowDragDrop:!0};const d=i.a.create((e=>({root:{display:"flex",flexDirection:"column"},dragBorderValid:{borderStyle:"dashed",borderWidth:e.spaces.space2,borderColor:e.colors.primary},dragBorderInvalid:{borderStyle:"dashed",borderWidth:e.spaces.space2,borderColor:e.colors.magenta500},inner:{flexGrow:1}})));t.a=l},tuke:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),i=a("Lsrn"),s=a("k/Ka");const o=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M21.592 5.576c.877-.967.882-2.298.006-3.174-.877-.877-2.208-.87-3.174.006 0 0-.003 0-.004.002l-.006.006-.005.004s-.002 0-.002.002L8.398 11.27c-1.716-.214-3.424.31-4.534 1.42-3.872 3.874-1.523 9.616-1.422 9.858.1.24.32.41.577.45.037.007.075.01.113.01.218 0 .428-.095.57-.265 1.83-2.15 3.043-2.023 4.328-1.89 1.164.122 2.477.258 3.834-1.282.975-1.106 1.302-2.585.922-4.03l8.792-9.948h.002l.004-.006.006-.006.002-.004zm-1.055-2.113c.305.305.28.74-.06 1.11-.003.003-.004.007-.006.01 0 0-.003 0-.004.003l-5.662 6.406-1.796-1.796 6.406-5.662c.002 0 .002-.003.004-.005.002-.003.006-.004.008-.006.37-.34.807-.365 1.11-.06zm-8.62 10.797L9.74 12.084l2.142-1.894 1.927 1.927-1.894 2.143zm-1.178 4.32c-.848.96-1.488.895-2.552.78-1.27-.13-2.808-.293-4.722 1.463-.415-1.673-.784-4.83 1.457-7.072.807-.805 2.086-1.168 3.377-.983l2.977 2.976c.333 1.03.15 2.057-.538 2.836z"})));o.metadata={width:24,height:24},t.a=o},ude7:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("A0bJ"),r=a("hJBK"),i=a("1auM");const s=1,o=2,c=3,l=e=>{if(Object(i.b)(e)){if(e.isGif){const{height:t,img:a,orientation:i,width:s}=e;return Object(r.b)(a,s,t,i).then((e=>Object(r.a)(e)),(e=>{throw new n.a("Gif preview could not be generated",c)}))}{const e=new n.a("The provided image must be a gif",o);return Promise.reject(e)}}{const e=new n.a("The provided file is not a valid image",s);return Promise.reject(e)}}},w3n3:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),i=a("/yvb"),s=a("3XMw"),o=a.n(s),c=a("3rWK"),l=a("Irs7");const d=o.a.a4993fa1,u=r.a.createElement(c.a,null),p=o.a.i0db46e6,h={viewType:"gif_search"};t.a=({dmConversationId:e,enabled:t=!0,gifSearchKeySource:a,history:n,onPress:s,style:o,testID:c})=>{const m=Object(l.b)(),f=r.a.useCallback((()=>{s&&s(),m.scribe({element:"found_media_button",action:"click"}),n.push({pathname:"/i/foundmedia/search",state:{gifSearchKeySource:a,dmConversationId:e}})}),[e,m,a,n,s]);return r.a.createElement(i.a,{accessibilityLabel:d,behavioralEventContext:h,disabled:!t,hoverLabel:{label:p},icon:u,onPress:f,size:"medium",style:o,testID:c,type:"brandText"})}},wpu3:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return m}));a("kYxP"),a("qd3W");var n=a("oEoC"),r=a("1auM"),i=a("kIAd"),s=a("VAyw"),o=a("/Ikv"),c=a("s1N3"),l=a("lnti");const d=({excludeReplyUser:e,inReplyToStatus:t,loggedInUserId:a})=>{const{retweeted_status:n}=t,{entities:r,unmentioned_user_ids:i,user:o}=n||t,d=n?n.user:{},p=n?t.user:{},h=(null==r?void 0:r.user_mentions)||[],m=s.a.mergeTaggedUsers((null==r?void 0:r.media)||[]),f=u(n||t)||{},b={[d.id_str]:d,[p.id_str]:p,[o.id_str]:o,[f.id_str]:f};h.forEach((e=>{b[e.id_str]=e})),m.forEach((({name:e,screen_name:t,user_id:a})=>{b[a]={id_str:a,name:e,screen_name:t}}));const g=e=>{const t=null==i?void 0:i.includes(e.id_str),a=e.id_str===o.id_str;return!t||a?[e.id_str]:[]},y=Object(c.a)(Object(l.a)([...g(d),...g(p),o.id_str,...h.flatMap((e=>g(e))),...m.map((e=>e.user_id))])).filter((e=>e!==a));let _=a&&o.id_str===a?[a,...y]:y;return e&&(_=_.filter((e=>e!==o.id_str))),_.map((e=>b[e]))},u=({card:e})=>{let t=null;if(e){const a=o.a.getBindingValue(e.binding_values,"site");a&&e.users&&(t=e.users[a.id_str])}return t},p=({maxNumberOfPhotos:e})=>t=>{if(0===t.length)return!0;const a=t.some((e=>!!e.externalMediaDetails)),n=!a&&t.some((e=>e.mediaFile&&e.mediaFile.isGif)),i=t.some((e=>e.mediaFile&&!(e.mediaFile instanceof r.a)&&e.mediaFile.isVideo));if(n||a||i)return 1===t.length;{const a=t.length<=e,n=t.every((e=>e.mediaFile&&e.mediaFile.isImage));return a&&n}},h=p({maxNumberOfPhotos:4}),m=(e,t=!1)=>{const a=e.split(i.b.WordBoundary);return t&&a.pop(),!!a.find((e=>{const t=Object(n.e)(e,"compose");return t&&"users"===t.result_type}))}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages~bundle.DMRichTextCompose~bundle.PlainTextCompose~bundle.AccountV.08091bd5.js.map