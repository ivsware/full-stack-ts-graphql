(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{"5bSN":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("ERkP"),r=n.n(a),o=n("3XMw"),i=n.n(o),s=n("MWbm"),c=n("htQn"),l=n("Qwev"),d=n("h0NW"),p=n("t62R"),u=n("rHpw");const h=i.a.ee8c6c61,m=i.a.i8005e73;function v(e){const{children:t=h,isLoading:n,link:a,onClick:o,isTransparentCursor:i}=e;return r.a.createElement(c.a,{link:a,onClick:o,style:g.root},r.a.createElement(s.a,{style:g.inner},n?r.a.createElement(l.a,{accessibilityLabel:m}):i?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{containerStyle:g.cursor,items:[{description:"These may include replies that are potentially spammy, harmful, or offensive.",label:"Other replies"}]}),r.a.createElement(p.b,{children:"View Replies",color:"link",style:g.link})):r.a.createElement(p.b,{align:"center",children:t,color:"link"})))}const g=u.a.create((e=>({root:{justifyContent:"center",minHeight:e.spaces.space48,width:"100%"},inner:{flexGrow:1,flexShrink:1,justifyContent:"center"},cursor:{paddingTop:e.spaces.space20,paddingBottom:e.spaces.space16,paddingHorizontal:e.spaces.space16},link:{paddingBottom:e.spaces.space20,paddingHorizontal:e.spaces.space16}})))},EnM6:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),o=n("3XMw"),i=n.n(o),s=n("MWbm"),c=n("t62R"),l=n("5mJL"),d=n("PV92"),p=n("htQn"),u=n("rHpw"),h=n("Qwev");const m=i.a.i8005e73,v=u.a.create((e=>({gap:{overflow:"hidden"},treeGap:{flexDirection:"row",paddingLeft:e.spaces.space16},treeGapTopLevel:{paddingLeft:0},connectors:{zIndex:1},hoverBox:{flexGrow:1,marginLeft:e.spaces.space12,paddingLeft:e.spaces.space4},hoverBoxIndented:{marginLeft:0},hoverBoxTopLevel:{marginLeft:0},dotGroup:{alignItems:"center",alignSelf:"center",flexGrow:0,justifyContent:"space-between",position:"relative",height:e.spaces.space16},content:{flexGrow:1},treeContent:{paddingHorizontal:e.spaces.space4},dot:{display:"block",backgroundColor:e.colors.gray200,height:e.componentDimensions.conversationLineWidth,width:e.componentDimensions.conversationLineWidth},enlargeTouchTarget:{paddingVertical:e.spaces.space8},loadingIndicator:{paddingVertical:e.spaces.space4}}))),g=r.a.createElement(h.a,{accessibilityLabel:m,style:v.loadingIndicator});t.a=({indents:e,isLoading:t,label:n,link:a,onClick:o,withElbow:i})=>{const u=r.a.createElement(c.b,{color:"link",style:v.enlargeTouchTarget},n),h=r.a.createElement(l.a,{avatarCell:e?void 0:r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:v.dot}),r.a.createElement(s.a,{style:v.dot}),r.a.createElement(s.a,{style:v.dot})),avatarCellStyle:v.dotGroup,cellStyle:[v.content,e&&v.treeContent]},t?g:u);return r.a.createElement(s.a,{style:[v.gap,e&&v.treeGap,e&&0===e.length&&v.treeGapTopLevel]},e?r.a.createElement(d.a,{indents:e,paddingTop:5,smallFirstCell:!1,style:v.connectors,wideElbow:1===e.length,withElbow:!!i}):null,o||a?r.a.createElement(p.a,{link:t?void 0:a,onClick:t?void 0:o,style:[v.hoverBox,e&&0===e.length&&v.hoverBoxTopLevel,e&&e.length>1&&v.hoverBoxIndented],withInteractiveStyling:!t},h):h)}},Xl5C:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");const r=Object(a.a)({});t.default=r},aqRH:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");t.default=({withRuxInjections:e})=>Object(a.a)({divider:e=>e.conversationTreeMetadata?{top:!1,bottom:!1}:{top:!0,bottom:!1},withRuxInjections:e})},ex5I:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");const r=Object(a.a)({divider:{top:!1,bottom:!1}});t.default=r},nGQU:function(e,t,n){"use strict";var a=n("ezF+"),r=n("VPAj"),o=n("97Jx"),i=n.n(o),s=n("ERkP"),c=n.n(s),l=n("v6aA"),d=n("MDbM"),p=n("rxPX"),u=n("0KEI");const h=(e,t)=>t.module.selectCursorFetchStatus(e,t.entry);var m=Object(p.a)().propsFromState((()=>({fetchStatus:h}))).adjustStateProps((({fetchStatus:e})=>({isLoading:e===d.a.LOADING}))).propsFromActions((({module:e})=>({fetchCursor:e.fetchCursor,createLocalApiErrorHandler:Object(u.createLocalApiErrorHandlerWithContextFactory)("URT_CURSOR")}))).withAnalytics(),v=n("caTy"),g=n("5bSN"),w=n("EnM6"),C=n("3XMw");const b=n.n(C).a.ee8c6c61;class y extends c.a.PureComponent{render(){const{children:e,conversationTreeMetadata:t,isLoading:n,link:a,onClick:r}=this.props,o=t&&t.ancestorConnector,i=t&&t.indents;return c.a.createElement(w.a,{indents:i,isLoading:n,label:e,link:a,onClick:r,withElbow:i?"side"===o:void 0})}}y.defaultProps={children:b};var T=y;class f extends c.a.PureComponent{render(){const{children:e,conversationTreeMetadata:t,isLoading:n,link:a,onClick:r}=this.props;return t?c.a.createElement(T,this.props):c.a.createElement(g.a,{children:e,isLoading:n,link:a,onClick:r})}}var k=f;n("kYxP");class E extends c.a.PureComponent{constructor(...e){super(...e),this._abusiveQualityCursorText="Show more replies"}render(){const{children:e,isLoading:t,link:n,onClick:a}=this.props;return c.a.createElement(g.a,{children:e,isLoading:t,isTransparentCursor:e!==this._abusiveQualityCursorText,link:n,onClick:a})}}var x=E;class L extends c.a.PureComponent{render(){const{children:e,isLoading:t,link:n,onClick:a}=this.props;return c.a.createElement(g.a,{children:e,isLoading:t,isTransparentCursor:!0,link:n,onClick:a})}}var S=L,M=n("xM7j"),j=n("vWJI");const G={component:"cursor",action:"click"},I={component:"cursor",action:"impression"},R={action:"get_middle"},P={component:"gap",action:"impression"},H={[j.CursorType.ShowMoreThreads]:{event_info:"ShowMoreThreads"},[j.CursorType.ShowMoreThreadsPrompt]:{event_info:"ShowMoreThreadsPrompt"}};let O=!1;const Q=e=>{const{featureSwitches:t}=c.a.useContext(l.a),{analytics:n,createLocalApiErrorHandler:a,entry:r,fetchCursor:o,isLoading:s,withRuxInjections:d}=e,{cursorType:p,displayTreatment:u,url:h}=r.content,m=h&&Object(v.b)(h),w=H[p],C=t.isTrue("responsive_web_deamplification_transparent_cursors_enabled")&&!d;c.a.useEffect((()=>{const e=p===j.CursorType.Gap?P:I;n.scribe({...e,data:w}),p===j.CursorType.ShowMoreThreads&&(O=!0)}),[]);const b=c.a.useCallback((e=>{o(r).then(e).catch(a())}),[a,r,o]),y=c.a.useCallback((()=>{const e=p===j.CursorType.Gap?R:G;n.scribe({...e,data:w})}),[n,p,w]),f={isLoading:s,onClick:c.a.useCallback((()=>{m?y():b(y)}),[m,b,y]),link:m},E={...f,conversationTreeMetadata:r.conversationTreeMetadata},L=(null==u?void 0:u.actionText)||null;switch(p){case j.CursorType.Gap:return c.a.createElement(g.a,f,L);case j.CursorType.ShowMore:return c.a.createElement(T,E,L);case j.CursorType.ShowMoreThreads:{const e=C?S:k;return c.a.createElement(e,E,L)}case j.CursorType.ShowMoreThreadsPrompt:{var Q;const e=C?x:M.a,t=(null==u?void 0:u.labelText)||null,n=O&&C?"Show more replies":t;return c.a.createElement(e,i()({},E,{actionText:null==(Q=r.content.displayTreatment)?void 0:Q.actionText}),n)}default:return null}};var _=m(c.a.memo(Q));t.a=({divider:e,withRuxInjections:t})=>a.b({divider:e||{top:!0,bottom:!0},component:_,isFocusable:Object(r.a)(!0),shouldDisplayBorder:e=>{const{conversationTreeMetadata:t}=e;return!t||!1===t.descendantConnector&&0===t.indents.filter((e=>"line"===e.displayType)).length}}).getHandler((()=>({withRuxInjections:t})))},zXWy:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");t.default=({withRuxInjections:e})=>Object(a.a)({divider:{top:!1,bottom:!1},withRuxInjections:e})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.GapHandler.aa265015.js.map