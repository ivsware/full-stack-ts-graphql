(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{"88ay":function(e,t,o){"use strict";o.d(t,"c",(function(){return M})),o.d(t,"e",(function(){return F})),o.d(t,"f",(function(){return j})),o.d(t,"d",(function(){return O})),o.d(t,"a",(function(){return Y}));var r=o("97Jx"),n=o.n(r),i=(o("kYxP"),o("ERkP")),a=o.n(i),s=o("6rlp"),c=o("zh9S"),l=o("G6rE"),d=o("rxPX"),p=o("0KEI");const h=(e,t)=>l.e.select(e,t.userId),u=(e,t)=>t.promotedContent;var m=Object(d.a)().propsFromState((()=>({promotedContent:u,user:h}))).adjustStateProps((({promotedContent:e,user:t})=>({promotedContent:e||(t?t.promoted_content:void 0),user:t}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(p.createLocalApiErrorHandlerWithContextFactory)("USER_CELL_CONTAINER"),log:s.a,scribeAction:c.c}))),b=o("I57f"),C=o("vMjK"),y=o("MWbm"),g=o("IG7M"),S=o("rHpw");const f=e=>{const{children:t,promotedContent:o,user:r}=e;return a.a.createElement(y.a,{style:v.decorationWrapper},t,a.a.createElement(g.a,{renderActionMenu:e=>a.a.createElement(C.b,{onClose:e,promotedContent:o,user:r,view:"follower"}),style:v.actionMenu}))},v=S.a.create((e=>({decorationWrapper:{flexDirection:"row"},actionMenu:{marginLeft:e.spaces.space12}})));var w=o("uIZp"),_=o("mN6z"),k=o("caTy"),I=o("3IPs"),E=o("Rp9C"),x=o("X04g"),T=o("Re5t"),P=o("TnY3"),L=o("hxu0"),R=o("v6aA"),A=o("7JQg"),U=o("nBUg"),D=o("IMA+"),N=o("cFuS");const B=e=>{const{user:t}=e;return t&&t.profile_image_url_https?a.a.createElement(H,n()({},e,{avatarUri:t.profile_image_url_https,description:t.description,entities:t.entities,followRequestReceived:t.follow_request_received,highlightedLabel:t.highlightedLabel,isAutoblocking:t.smart_blocking,isBlockedBy:t.blocked_by,isBlocking:t.blocking,isDeviceFollowing:t.notifications,isFollowedBy:t.followed_by,isFollowing:t.following,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,user:t,withheldDescription:t.withheld_description,withheldEntities:t.withheld_entities})):null};B.defaultProps={cellClickable:!0,decoration:null,displayMode:T.a.UserCompact,followRequestReceived:!1,hideBlocked:!1,promotedItemType:N.c.USER,shouldScribeProfileClick:!0,shouldScribeImpression:!1,withFollowsYou:!1};const M=({isDeviceFollowing:e,userId:t})=>a.a.createElement(b.a,{isFollowing:e,style:z.followButton,userId:t}),F=({loggedInUserId:e,promotedContent:t,userId:o})=>e!==o?a.a.createElement(w.a,{promotedContent:t,size:"small",style:z.followButton,userId:o}):null,j=e=>a.a.createElement(f,{promotedContent:e.promotedContent,user:e.user},F(e)),O=e=>a.a.createElement(g.a,{renderActionMenu:t=>a.a.createElement(C.b,{onClose:t,promotedContent:e.promotedContent,user:e.user,view:"rito_flagged_accounts"})});class H extends a.a.Component{constructor(...e){super(...e),this._handleAvatarClick=()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({element:"avatar",action:"profile_click"}),this._handleAsyncPromotedEvent(N.b.PROFILE_IMAGE_CLICK)},this._handleCellClick=()=>{const{history:e,onClick:t,screenName:o,user:r}=this.props,n=this._getPromotedTweetState();this._handleSaveAsRecentSearch(),this._handleScreenNameClick(),t?t({user:r,state:n}):e.push({pathname:`/${o}`,state:n||void 0})},this._handleScreenNameClick=()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({action:"profile_click"}),this._handleAsyncPromotedEvent(N.b.SCREEN_NAME_CLICK)},this._handleSaveAsRecentSearch=()=>{const{saveAsRecentSearch:e,shouldStoreTypeaheadItem:t,userId:o}=this.props;e&&t&&t(x.a.ItemType.USER)&&e({user:{id:o,type:I.a.User}})},this._scribeAction=e=>{var t;const{promotedContent:o,scribeAction:r,scribeData:n,scribeNamespace:i,user:a,userId:s}=this.props,c=null==n||null==(t=n.items)?void 0:t.find((e=>e.item_type===x.a.ItemType.USER&&e.id===s)),l=n.search_details;r({...i,...e},{items:[{...c,...E.a.getUserItem(a,o)}],profile_id:s,search_details:l})}}componentDidMount(){this._shouldRender()&&this._handleImpression()}shouldComponentUpdate(e){return!Object(_.a)(this.props,e)}render(){const{avatarDecoration:e,bottomControl:t,cellClickable:o,createLocalApiErrorHandler:r,decoration:i,followRequestReceived:s,hideBlocked:c,history:l,isAutoblocking:d,isBlockedBy:p,isBlocking:h,isDeviceFollowing:u,isFollowing:m,isInSidebar:b,location:C,log:y,onClick:g,promotedItemId:S,saveAsRecentSearch:f,scribeAction:v,scribeData:w,scribeNamespace:_,shouldScribeImpression:I,shouldScribeProfileClick:E,shouldStoreTypeaheadItem:x,socialContext:T,user:P,...L}=this.props;return this._shouldRender()?a.a.createElement(U.b.Provider,{value:{socialContextRefreshEnabled:()=>this.context.featureSwitches.isTrue("social_context_and_topic_context_refresh_alignment_enabled")}},a.a.createElement(D.a,n()({},L,{avatarDecoration:e,bottomControl:this._renderBottomControl(),decoration:this._renderDecoration(),highlightedLabel:this._getHighlightedLabel(),isBlocking:P.blocking,onAvatarClick:this._handleAvatarClick,onCellClick:o?this._handleCellClick:void 0,onScreenNameClick:this._handleScreenNameClick,socialContext:T?{contextType:T.contextType,text:T.text,link:T.landingUrl?Object(k.b)(T.landingUrl):void 0}:void 0,withDarkerInteractiveBackground:b}))):null}_renderBottomControl(){return this._renderControl(this.props.bottomControl||null)}_renderDecoration(){return this._renderControl(this.props.decoration)}_renderControl(e){const{loggedInUserId:t}=this.context,{displayMode:o,followRequestReceived:r,isAutoblocking:n,isBlocking:i,isDeviceFollowing:a,isFollowing:s,promotedContent:c,screenName:l,user:d,userId:p}=this.props;return"function"==typeof e?e({displayMode:o,followRequestReceived:r,isAutoblocking:n,isBlocking:i,isDeviceFollowing:!!a,isFollowing:!!s,loggedInUserId:t,promotedContent:c,screenName:l,user:d,userId:p}):e}_shouldRender(){const{hideBlocked:e,isBlockedBy:t,isBlocking:o,screenName:r,userId:n}=this.props;return n&&r&&!(e&&(t||o))}_getHighlightedLabel(){const{highlightedLabel:e}=this.props.user,t="AutomatedLabel"===(null==e?void 0:e.userLabelType),o=!!t&&this.context.featureSwitches.isTrue("account_taxonomy_automated_label_enabled");return!t||o?e:void 0}_getPromotedTweetState(){const{promotedContent:e,promotedItemType:t}=this.props;return e&&t===N.c.TWEET?{promotedTweetState:e}:null}_handleAsyncPromotedEvent(e){const{createLocalApiErrorHandler:t,log:o,promotedContent:r,promotedItemId:n,promotedItemType:i,userId:a}=this.props;if(r){const{disclosure_type:s,impression_id:c}=r;o({disclosureType:s,itemId:n||a,itemType:i,params:{event:e,impression_id:c}}).catch(t())}}_handleImpression(){const{createLocalApiErrorHandler:e,log:t,promotedContent:o,promotedItemType:r,shouldScribeImpression:n,userId:i}=this.props;if(o&&r===N.c.USER){const{disclosure_type:r,impression_id:n}=o;t({disclosureType:r,itemId:i,itemType:N.c.USER,params:{event:N.b.IMPRESSION,impression_id:n}}).catch(e())}else n&&this._scribeAction({action:"impression"})}}H.contextType=R.a,H.defaultProps=B.defaultProps;const z=S.a.create((e=>({followButton:{marginLeft:e.spaces.space12}}))),Y=Object(P.a)(Object(L.a)(m(B)));t.b=Object(A.a)({element:"user"})(Y)},"IMA+":function(e,t,o){"use strict";var r=o("97Jx"),n=o.n(r),i=(o("kYxP"),o("SV7d")),a=o("ERkP"),s=o.n(a),c=o("TIdA"),l=o("t62R"),d=o("5mJL"),p=o("DNho"),h=o("nBUg"),u=o("qjak"),m=o("ir4X"),b=o("htQn"),C=o("e5HP"),y=o("FBXD"),g=o("Nqmc"),S=o("rHpw"),f=o("jhWN"),v=o("1I0O"),w=o("pBrB"),_=o("jV+4"),k=o("MWbm");const I=Object.freeze({TWEET:"tweets",USER:"users"}),E=Object.freeze({UserCompact:"UserCompact",UserConcise:"UserConcise",UserDetailed:"UserDetailed",ExperimentalUserTypeahead:"ExperimentalUserTypeahead"}),x=c.a.createLayoutCache(),T={viewType:"user_cell"};class P extends s.a.PureComponent{constructor(...e){super(...e),this._renderUserName=()=>{const{badgeContext:e,disabledMessage:t,displayNameLabel:o,isBlocking:r,isDisabled:n,isFollowedBy:i,isProtected:a,isVerified:c,name:d,onScreenNameClick:p,promotedContent:h,promotedItemType:u,screenName:m,screenNameSuffix:b,translatorType:C,withFollowsYou:y,withLink:g}=this.props,S=s.a.createElement(_.a,{badgeContext:e,displayNameLabel:o,isProtected:a,isVerified:c,name:d,onLinkClick:p,promotedContent:u===I.TWEET?h:void 0,screenName:m,screenNameSuffix:b,translatorType:C,withFollowsYou:y&&i,withHoverCard:!r&&!n&&g,withLink:!n&&g,withScreenName:!t,withStackedLayout:!0});return t?s.a.createElement(k.a,{style:L.disabledMessageContainer},S,s.a.createElement(l.b,{color:"gray700"},t)):S},this._renderSocialContext=()=>{const{avatarSize:e,displayMode:t,socialContext:o}=this.props;return o?s.a.createElement(h.b.UseProps,null,(r=>s.a.createElement(g.a,{avatarSize:e,contextType:o.contextType,iconSize:"large",link:o.link,style:L.socialContext,text:o.text,weight:"bold",withLeftPadding:!r.socialContextRefreshEnabled()&&t!==E.ExperimentalUserTypeahead}))):null},this._renderUserTypeaheadSocialContext=()=>{const{socialContext:e}=this.props,{Icon:t,text:o}=e&&Object(u.a)({link:e.link,text:e.text,iconSize:"small",contextType:e.contextType})||{};return e?s.a.createElement(k.a,{style:L.userTypeaheadSocialContext},s.a.createElement(k.a,{style:L.userTypeaheadSocialContextIcon},t),s.a.createElement(l.b,{color:"gray700",numberOfLines:1,style:L.userTypeaheadSocialContextText},o)):null},this._renderHighlightedUserLabel=()=>{const{highlightedLabel:e}=this.props;return e?s.a.createElement(m.a,{label:e}):null},this._isEligibleForBio=()=>{const{displayMode:e}=this.props;return-1!==[E.UserDetailed,E.UserConcise].indexOf(e)},this._handleKeyPress=e=>{e.defaultPrevented||"Enter"!==e.key||this._handleClick(e)},this._handleClick=Object(y.a)((e=>{const{onCellClick:t}=this.props;e.preventDefault(),t&&t()}))}render(){const{accessibilityLabel:e,accessibilityState:t,avatarDecoration:o,avatarSize:r,avatarUri:a,bottomControl:c,decoration:l,displayMode:h,isBlocking:u,isDisabled:m,onAvatarClick:y,onCellClick:g,onScreenNameClick:S,presenceIndicator:w,promotedContent:_,promotedItemType:P,screenName:R,style:A,testID:U,userId:D,withDarkerInteractiveBackground:N,withInteractiveStyling:B,withLink:M,withUsernameCenterAligned:F}=this.props,j=M&&!u,O=h===E.UserCompact||F,H=h===E.ExperimentalUserTypeahead,z=_&&P===I.USER&&"earned"!==(_.disclosure_type&&_.disclosure_type.toLowerCase())?s.a.createElement(C.a,{contentAuthorId:D,promotedContent:_,style:L.promotedIndicator}):null,Y={accessibilityHidden:!0,decoration:o,focusable:!1,imageLayoutCache:x,onClick:y,onHoverCardScreenNameClick:S,promotedContent:_,screenName:R,style:L.avatar,uri:a,withHoverCard:j,withLink:M},q=s.a.createElement(p.a.Consumer,null,(({avatarSize:e})=>w?s.a.createElement(v.a,n()({},Y,w,{size:e})):s.a.createElement(f.a,n()({size:e},Y)))),V=t&&"boolean"==typeof t.checked,W=void 0!==g,K=(V?"radio":W&&"button")||"listitem",J=this._renderUserName(),X=this._renderHighlightedUserLabel(),G=this._renderBio(),Q=X||G||z||c,Z=s.a.createElement(s.a.Fragment,null,X,G,z,c?s.a.createElement(k.a,{style:L.bottomControl},c):null);return s.a.createElement(i.a,{behavioralEventContext:T},s.a.createElement(b.a,{accessibilityLabel:e,accessibilityRole:K,accessibilityState:t,disabled:!!m,focusable:V||W,onClick:this._handleClick,onKeyPress:this._handleKeyPress,pointerEvents:m?"none":void 0,style:[L.root,A],testID:U,withDarkerInteractiveBackground:N,withInteractiveStyling:null!=B?B:!!g},H?null:this._renderSocialContext(),s.a.createElement(d.a,{avatarCell:q,avatarCellStyle:[L.avatarColumn,O&&L.bodyColumnCentered],avatarSize:H?"xxxLarge":r,cellStyle:[L.bodyColumn,O&&L.bodyColumnCentered]},s.a.createElement(k.a,{style:L.body},J,l),O?null:Z,H?this._renderUserTypeaheadSocialContext():null),Q&&O?s.a.createElement(d.a,{avatarCell:null,avatarCellStyle:L.avatarColumn,cellStyle:L.bodyColumn},Z):null))}_renderBio(){const{description:e,displayMode:t,entities:o,userId:r,withheldDescription:n,withheldEntities:i}=this.props;return o&&e&&this._isEligibleForBio()?s.a.createElement(w.a,{description:e,entities:o,isConcise:t===E.UserConcise,style:L.bio,userId:r,withheldDescription:n,withheldEntities:i}):null}}P.defaultProps={testID:"UserCell",withLink:!0};const L=S.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},avatarColumn:{justifyContent:"flex-start"},bodyColumn:{flexGrow:1},bodyColumnCentered:{justifyContent:"center"},avatar:{display:"block",width:"100%"},bio:{paddingTop:e.spaces.space4,whiteSpace:"normal"},socialContext:{marginBottom:e.spaces.space4},userTypeaheadSocialContext:{alignItems:"center",flexDirection:"row",textColor:e.colors.gray700},userTypeaheadSocialContextIcon:{flexShrink:0},userTypeaheadSocialContextText:{paddingLeft:e.spaces.space2},body:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},promotedIndicator:{margin:0,paddingTop:e.spaces.space4,paddingBottom:0,paddingHorizontal:0},bottomControl:{paddingTop:e.spaces.space4},disabledMessageContainer:{flexShrink:1}})));t.a=P},e5HP:function(e,t,o){"use strict";o.d(t,"a",(function(){return v}));var r=o("ERkP"),n=o.n(r),i=o("t62R"),a=o("3XMw"),s=o.n(a),c=o("rHpw"),l=o("MWbm"),d=o("Lsrn"),p=o("k/Ka");const h=(e={})=>Object(p.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[d.a.root,e.style],viewBox:"0 0 24 24"},n.a.createElement("g",null,n.a.createElement("path",{d:"M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z"})));h.metadata={width:24,height:24};var u=h,m=o("uFYP");const b=s.a.f1a1b790,C=s.a.if2bf8b3,y=s.a.f3624b5c,g=s.a.b4b3b113,S=s.a.be22205f,f=s.a.hcbbe447;class v extends n.a.Component{render(){const{color:e,nativeID:t,style:o,withCircleIcon:r}=this.props,a=r?u:m.a;return n.a.createElement(l.a,{style:[w.root,o]},n.a.createElement(a,{style:[w.icon,e&&w[e]]}),n.a.createElement(i.b,{color:e,nativeID:t,size:"subtext2"},this._getPromotedLabel()))}_getPromotedLabel(){const{contentAuthorId:e,label:t,promotedContent:o}=this.props,{adMetadataContainer:r,advertiser:n,advertiser_name:i,disclosure_type:a}=o,s=e&&n&&e===n.id_str,c="string"==typeof a&&"political"===a.toLowerCase(),l="string"==typeof a&&"issue"===a.toLowerCase(),d=!(!r||"POLITICAL"!==r.disclaimerType)||c,p=!(!r||"ISSUE"!==r.disclaimerType)||l,{removePromotedAttributionForPreroll:h}=r||{};let u;return u=t||(!i||s||h?d?y:p?S:C:d?g({fullName:i}):p?f({fullName:i}):b({fullName:i})),u}}v.defaultProps={color:"gray700",withCircleIcon:!1};const w=c.a.create((e=>({root:{alignItems:"center",flexDirection:"row"},icon:{color:e.colors.gray700,height:"1em",marginRight:e.spaces.space4,flexShrink:0},gray700:{color:e.colors.gray700},white:{color:e.colors.white}})))},hxu0:function(e,t,o){"use strict";var r=o("97Jx"),n=o.n(r),i=o("ERkP"),a=o.n(i),s=o("vqbU");t.a=e=>t=>a.a.createElement(s.a.Consumer,null,(o=>a.a.createElement(e,n()({},t,{isInSidebar:o}))))},lX7a:function(e,t,o){"use strict";o.r(t);var r=o("ezF+"),n=o("VPAj");const i=e=>e?{disclosure_type:e.disclosureType,impression_id:e.impressionId}:void 0;var a=o("Rp9C"),s=o("ERkP"),c=o.n(s),l=o("wtjx"),d=o("rxPX"),p=Object(d.a)().propsFromActions((()=>({saveAsRecentSearch:l.a}))).withAnalytics(),h=o("cFuS"),u=o("88ay");const m=e=>{const{analytics:t,cellClickable:o,decoration:r,entry:n,onClick:a,saveAsRecentSearch:s,shouldScribeImpression:l,shouldScribeProfileClick:d,shouldStoreTypeaheadItem:p,withFollowsYou:m,withLink:b}=e,{content:{id:C,promotedMetadata:y,socialContext:g}}=n,S=r||u.e,f=i(y),v=g&&g.generalContext||void 0,w=e.displayMode;return c.a.createElement(u.a,{cellClickable:o,decoration:S,displayMode:w,onClick:a,promotedContent:f,promotedItemType:h.c.USER,saveAsRecentSearch:s,scribeData:t.contextualScribeData,scribeNamespace:t.contextualScribeNamespace,shouldScribeImpression:l,shouldScribeProfileClick:d,shouldStoreTypeaheadItem:p,socialContext:v,userId:C,withFollowsYou:m,withLink:b})};var b=p(c.a.memo(m)),C=o("Re5t");const y=[u.e,u.f];t.default=({cellClickable:e=!0,decoration:t,displayMode:o=C.a.UserCompact,onClick:s,shouldScribeProfileClick:c=!0,shouldScribeImpression:l=!1,shouldStoreTypeaheadItem:d,withLink:p=!0})=>r.b({component:b,defaultScribeNamespace:{element:"user"},getScribeDataItem(e){const{content:{id:t,promotedMetadata:o},cursor:r,itemMetadata:n,position:s}=e,c=n.clientEventInfo,l=i(o);return a.a.getUserItem({id_str:t,promoted_content:l},void 0,s,r,c)},isFocusable:Object(n.a)(!0)}).getHandler((()=>({cellClickable:e,decoration:t,displayMode:o,onClick:s,shouldScribeProfileClick:c,shouldScribeImpression:l,shouldStoreTypeaheadItem:d,withLink:p,withFollowsYou:!t||y.includes(t)})))},uFYP:function(e,t,o){"use strict";var r=o("ERkP"),n=o.n(r),i=o("Lsrn"),a=o("k/Ka");const s=(e={})=>Object(a.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[i.a.root,e.style],viewBox:"0 0 24 24"},n.a.createElement("g",null,n.a.createElement("path",{d:"M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z"})));s.metadata={width:24,height:24},t.a=s},wtjx:function(e,t,o){"use strict";o.d(t,"g",(function(){return d})),o.d(t,"f",(function(){return p})),o.d(t,"e",(function(){return h})),o.d(t,"d",(function(){return C})),o.d(t,"b",(function(){return g})),o.d(t,"a",(function(){return f})),o.d(t,"c",(function(){return v}));var r=o("Ssj5"),n=o("RqPI");const i="recentSearches",a="rweb.recentSearches",s=e=>(t,o,{userPersistence:r})=>r.set(a,{recentSearches:e}).catch((()=>{Promise.resolve()})),c=(e,t)=>{let o=[];if(e&&e.user){const r=e.user;o=t.filter((e=>e.keyword||e.topic||e.event||e.user&&e.user.id!==r.id))}else if(e&&e.topic){const r=e.topic;o=t.filter((e=>e.keyword||e.user||e.event||e.topic&&e.topic.id!==r.id))}else if(e&&e.event){const r=e.event;o=t.filter((e=>e.keyword||e.user||e.topic||e.event&&e.event.id!==r.id))}else if(e&&e.keyword){const r=e.keyword;o=t.filter((e=>e.keyword&&e.keyword.query!==r.query||e.user||e.topic||e.event))}return o},l={fetched:!1,recentSearches:[]};const d=e=>e.recentSearches.recentSearches,p=e=>d(e)[0]||null,h=e=>e.recentSearches.fetched,u="rweb/recentSearches/INIT_FROM_CACHE",m=e=>({type:u,payload:e}),b="rweb/recentSearches/REMOVE_QUERY",C=e=>(t,o,{userPersistence:r})=>{t({payload:e,type:b});const i=o().recentSearches;return Object(n.m)(o())?t(s(i.recentSearches)):Promise.resolve()},y="rweb/recentSearches/CLEAR_ALL",g=()=>(e,t,{userPersistence:o})=>{e({type:y});const r=t().recentSearches;return Object(n.m)(t())?e(s(r.recentSearches)):Promise.resolve()},S="rweb/recentSearches/ADD_QUERY",f=e=>(t,o,{userPersistence:r})=>{t({payload:e,type:S});const i=o().recentSearches;return Object(n.m)(o())?t(s(i.recentSearches)):Promise.resolve()},v=()=>(e,t,{userPersistence:o})=>t().recentSearches.fetched?Promise.resolve():e(((e,t,{userPersistence:o})=>{const r=t();return Object(n.m)(r)?o.get(a).then((t=>{e(m(t))})).catch((()=>{e(m())})):(e(m()),Promise.resolve())}));r.a.register({[i]:function(e=l,t){switch(t.type){case S:{const o=t.payload,r=o?c(o,e.recentSearches):[];return r.length>49&&r.splice(49,1),o&&r.unshift(o),{...e,recentSearches:r}}case b:{const o=t.payload,r=o?c(o,e.recentSearches):[];return{...e,recentSearches:r}}case y:return{fetched:!0,recentSearches:[]};case u:return{...e,...t.payload,fetched:!0};default:return e}}})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.UserHandler.022bb9e5.js.map