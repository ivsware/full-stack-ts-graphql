(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{"0kTQ":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("k49u"),r=a("LVU8"),o=a("3XMw");const s=a.n(o).a.b20a3893,i={[n.a.AppInReadOnlyMode]:{customAction:r.b},[n.a.TargetUserNotFound]:{toast:{text:s}},showToast:!0}},"55jz":function(e,t,a){"use strict";a("kYxP");var n=a("ERkP"),r=a.n(n),o=a("k49u"),s=a("3XMw"),i=a.n(s),c=a("IMYl"),l=a("fs1G"),d=a("MWbm"),u=a("Irs7"),h=a("OOKO"),m=a("CKsB"),p=a("t62R"),y=a("IMA+"),g=a("Znyr"),b=a("G1WX"),C=a("rHpw");const w=i.a.d86bbf0f,E=i.a.h6beb5fa,x=i.a.b7dc3884;class v extends r.a.Component{constructor(...e){super(...e),this._renderAdditionalMenuItems=()=>(this.props.additionalMenuItems||[]).map(((e,t)=>r.a.createElement(r.a.Fragment,{key:t},0===t?r.a.createElement(h.a,null):null,r.a.createElement(m.a,{Icon:e.Icon,actionText:e.actionText,isSelected:e.isSelected,link:e.link,onClick:this._handleMenuItemClick(e.scribeElement,e.onClick),selectable:!0,testID:e.testID})))),this._renderTitle=()=>{const{title:e}=this.props;return e?r.a.createElement(p.b,{size:"headline1",style:f.title,weight:"bold"},e):null},this._renderUserAccounts=()=>{const{accountUsers:e,activeUser:t,withBadges:a=!1}=this.props;return e.filter((e=>e.user_id!==(null==t?void 0:t.id_str))).length>0?r.a.createElement(r.a.Fragment,null,e.map((e=>{const n=e.user_id===t.id_str,o=e.badgeCount;return r.a.createElement(y.a,{accessibilityLabel:n?void 0:x({screenName:e.screen_name}),avatarUri:e.avatar_image_url,decoration:this._renderUserDecoration({badgeCount:o,withBadges:a,isActiveUser:n}),displayMode:"UserCompact",isProtected:e.is_protected,isVerified:e.is_verified,key:e.user_id,name:e.name,onCellClick:n?void 0:this._handleMultiAccountSwitch({hasBadge:!!o,isProtected:e.is_protected,userId:e.user_id}),screenName:e.screen_name,userId:e.user_id,withLink:!1})}))):r.a.createElement(y.a,{avatarUri:t.profile_image_url_https,decoration:this._renderUserDecoration({withBadges:a,isActiveUser:!0}),displayMode:"UserCompact",isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,userId:t.id_str,withLink:!1})},this._renderUserDecoration=({badgeCount:e,isActiveUser:t,withBadges:a})=>t?r.a.createElement(c.a,{style:[f.iconCheckMark,f.userDecoration]}):e&&a?r.a.createElement(g.a,{count:e,standalone:!0,style:f.userDecoration,truncatedCountFormatter:E,unreadCountLabel:w}):void 0,this._handleMultiAccountSwitch=({hasBadge:e,isProtected:t,userId:a})=>()=>{const{accountSwitch:n,onClose:r}=this.props;n({hasBadge:e,isProtected:t,userId:a}),r()},this._handleFetch=()=>{const{createLocalApiErrorHandlerAccountsFetch:e,fetchAccounts:t}=this.props;t().catch(e({[o.a.AppInReadOnlyMode]:{customAction:l.a}}))},this._handleMenuItemClick=(e,t)=>()=>{const{analytics:a,onClose:n}=this.props;e&&a.scribe({element:e,action:"click"}),null==t||t(),n()}}render(){const{fetchStatus:e,shouldDisplayFetchRenderer:t}=this.props;return r.a.createElement(d.a,{style:f.menuContainer},this._renderTitle(),t?r.a.createElement(b.a,{fetchStatus:e,onRequestRetry:this._handleFetch,render:this._renderUserAccounts}):this._renderUserAccounts(),this._renderAdditionalMenuItems())}}const f=C.a.create((e=>({iconCheckMark:{color:e.colors.primary,flexShrink:0},menuContainer:{paddingVertical:e.spaces.space12},userDecoration:{marginLeft:e.spaces.space12},title:{paddingBottom:e.componentDimensions.gutterVertical,paddingHorizontal:e.componentDimensions.gutterHorizontal}})));t.a=Object(u.a)(v)},FITr:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("Lsrn"),s=a("k/Ka");const i=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[o.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z"})));i.metadata={width:24,height:24},t.a=i},"IMA+":function(e,t,a){"use strict";var n=a("97Jx"),r=a.n(n),o=(a("kYxP"),a("SV7d")),s=a("ERkP"),i=a.n(s),c=a("TIdA"),l=a("t62R"),d=a("5mJL"),u=a("DNho"),h=a("nBUg"),m=a("qjak"),p=a("ir4X"),y=a("htQn"),g=a("e5HP"),b=a("FBXD"),C=a("Nqmc"),w=a("rHpw"),E=a("jhWN"),x=a("1I0O"),v=a("pBrB"),f=a("jV+4"),S=a("MWbm");const k=Object.freeze({TWEET:"tweets",USER:"users"}),_=Object.freeze({UserCompact:"UserCompact",UserConcise:"UserConcise",UserDetailed:"UserDetailed",ExperimentalUserTypeahead:"ExperimentalUserTypeahead"}),I=c.a.createLayoutCache(),T={viewType:"user_cell"};class L extends i.a.PureComponent{constructor(...e){super(...e),this._renderUserName=()=>{const{badgeContext:e,disabledMessage:t,displayNameLabel:a,isBlocking:n,isDisabled:r,isFollowedBy:o,isProtected:s,isVerified:c,name:d,onScreenNameClick:u,promotedContent:h,promotedItemType:m,screenName:p,screenNameSuffix:y,translatorType:g,withFollowsYou:b,withLink:C}=this.props,w=i.a.createElement(f.a,{badgeContext:e,displayNameLabel:a,isProtected:s,isVerified:c,name:d,onLinkClick:u,promotedContent:m===k.TWEET?h:void 0,screenName:p,screenNameSuffix:y,translatorType:g,withFollowsYou:b&&o,withHoverCard:!n&&!r&&C,withLink:!r&&C,withScreenName:!t,withStackedLayout:!0});return t?i.a.createElement(S.a,{style:B.disabledMessageContainer},w,i.a.createElement(l.b,{color:"gray700"},t)):w},this._renderSocialContext=()=>{const{avatarSize:e,displayMode:t,socialContext:a}=this.props;return a?i.a.createElement(h.b.UseProps,null,(n=>i.a.createElement(C.a,{avatarSize:e,contextType:a.contextType,iconSize:"large",link:a.link,style:B.socialContext,text:a.text,weight:"bold",withLeftPadding:!n.socialContextRefreshEnabled()&&t!==_.ExperimentalUserTypeahead}))):null},this._renderUserTypeaheadSocialContext=()=>{const{socialContext:e}=this.props,{Icon:t,text:a}=e&&Object(m.a)({link:e.link,text:e.text,iconSize:"small",contextType:e.contextType})||{};return e?i.a.createElement(S.a,{style:B.userTypeaheadSocialContext},i.a.createElement(S.a,{style:B.userTypeaheadSocialContextIcon},t),i.a.createElement(l.b,{color:"gray700",numberOfLines:1,style:B.userTypeaheadSocialContextText},a)):null},this._renderHighlightedUserLabel=()=>{const{highlightedLabel:e}=this.props;return e?i.a.createElement(p.a,{label:e}):null},this._isEligibleForBio=()=>{const{displayMode:e}=this.props;return-1!==[_.UserDetailed,_.UserConcise].indexOf(e)},this._handleKeyPress=e=>{e.defaultPrevented||"Enter"!==e.key||this._handleClick(e)},this._handleClick=Object(b.a)((e=>{const{onCellClick:t}=this.props;e.preventDefault(),t&&t()}))}render(){const{accessibilityLabel:e,accessibilityState:t,avatarDecoration:a,avatarSize:n,avatarUri:s,bottomControl:c,decoration:l,displayMode:h,isBlocking:m,isDisabled:p,onAvatarClick:b,onCellClick:C,onScreenNameClick:w,presenceIndicator:v,promotedContent:f,promotedItemType:L,screenName:A,style:M,testID:U,userId:H,withDarkerInteractiveBackground:P,withInteractiveStyling:R,withLink:F,withUsernameCenterAligned:z}=this.props,D=F&&!m,N=h===_.UserCompact||z,O=h===_.ExperimentalUserTypeahead,j=f&&L===k.USER&&"earned"!==(f.disclosure_type&&f.disclosure_type.toLowerCase())?i.a.createElement(g.a,{contentAuthorId:H,promotedContent:f,style:B.promotedIndicator}):null,W={accessibilityHidden:!0,decoration:a,focusable:!1,imageLayoutCache:I,onClick:b,onHoverCardScreenNameClick:w,promotedContent:f,screenName:A,style:B.avatar,uri:s,withHoverCard:D,withLink:F},V=i.a.createElement(u.a.Consumer,null,(({avatarSize:e})=>v?i.a.createElement(x.a,r()({},W,v,{size:e})):i.a.createElement(E.a,r()({size:e},W)))),K=t&&"boolean"==typeof t.checked,X=void 0!==C,G=(K?"radio":X&&"button")||"listitem",q=this._renderUserName(),Y=this._renderHighlightedUserLabel(),Q=this._renderBio(),$=Y||Q||j||c,J=i.a.createElement(i.a.Fragment,null,Y,Q,j,c?i.a.createElement(S.a,{style:B.bottomControl},c):null);return i.a.createElement(o.a,{behavioralEventContext:T},i.a.createElement(y.a,{accessibilityLabel:e,accessibilityRole:G,accessibilityState:t,disabled:!!p,focusable:K||X,onClick:this._handleClick,onKeyPress:this._handleKeyPress,pointerEvents:p?"none":void 0,style:[B.root,M],testID:U,withDarkerInteractiveBackground:P,withInteractiveStyling:null!=R?R:!!C},O?null:this._renderSocialContext(),i.a.createElement(d.a,{avatarCell:V,avatarCellStyle:[B.avatarColumn,N&&B.bodyColumnCentered],avatarSize:O?"xxxLarge":n,cellStyle:[B.bodyColumn,N&&B.bodyColumnCentered]},i.a.createElement(S.a,{style:B.body},q,l),N?null:J,O?this._renderUserTypeaheadSocialContext():null),$&&N?i.a.createElement(d.a,{avatarCell:null,avatarCellStyle:B.avatarColumn,cellStyle:B.bodyColumn},J):null))}_renderBio(){const{description:e,displayMode:t,entities:a,userId:n,withheldDescription:r,withheldEntities:o}=this.props;return a&&e&&this._isEligibleForBio()?i.a.createElement(v.a,{description:e,entities:a,isConcise:t===_.UserConcise,style:B.bio,userId:n,withheldDescription:r,withheldEntities:o}):null}}L.defaultProps={testID:"UserCell",withLink:!0};const B=w.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},avatarColumn:{justifyContent:"flex-start"},bodyColumn:{flexGrow:1},bodyColumnCentered:{justifyContent:"center"},avatar:{display:"block",width:"100%"},bio:{paddingTop:e.spaces.space4,whiteSpace:"normal"},socialContext:{marginBottom:e.spaces.space4},userTypeaheadSocialContext:{alignItems:"center",flexDirection:"row",textColor:e.colors.gray700},userTypeaheadSocialContextIcon:{flexShrink:0},userTypeaheadSocialContextText:{paddingLeft:e.spaces.space2},body:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},promotedIndicator:{margin:0,paddingTop:e.spaces.space4,paddingBottom:0,paddingHorizontal:0},bottomControl:{paddingTop:e.spaces.space4},disabledMessageContainer:{flexShrink:1}})));t.a=L},LzTg:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a("ERkP"),r=a.n(n),o=(a("kYxP"),a("qtu+")),s=a("G6rE"),i=a("rxPX"),c=a("0KEI"),l=a("auX9"),d=a("kGix");var u=Object(i.a)().propsFromState((()=>({fetchStatus:l.g,loggedInUser:s.e.selectLoggedInUser,multiAccountUsers:l.j,hasMultiAccountBadges:l.h}))).propsFromActions((()=>({createLocalApiErrorHandlerAccountSwitch:Object(c.createLocalApiErrorHandlerWithContextFactory)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"),createLocalApiErrorHandlerMultiListFetch:Object(c.createLocalApiErrorHandlerWithContextFactory)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"),fetchMultiAccountList:l.c,switchAccount:o.a}))).adjustStateProps((({fetchStatus:e,hasMultiAccountBadges:t,loggedInUser:a,multiAccountUsers:n})=>({fetchStatus:e===d.a.NONE?d.a.LOADING:e,hasMultiAccountBadges:!!a&&t,loggedInUser:a,multiAccountUsers:n}))).withAnalytics({page:"nav",section:"account_switcher"}),h=a("3Wr5"),m=a("3XMw"),p=a.n(m),y=a("55jz"),g=a("0kTQ"),b="SideNav_AccountSwitcher_Button",C="AccountSwitcher_AddAccount_Button",w="AccountSwitcher_Logout_Button",E="AccountSwitcher_ManageAccounts_Button",x=a("y8wG"),v=a("v6aA");const f=p.a.j0a8da6e,S=p.a.c6f2bf00,k=p.a.a58e0e51;class _ extends r.a.Component{constructor(...e){super(...e),this._renderMenuSheet=e=>{const{createLocalApiErrorHandlerMultiListFetch:t,fetchMultiAccountList:a,fetchStatus:n,loggedInUser:o,multiAccountUsers:s}=this.props;return o?r.a.createElement(y.a,{accountSwitch:this._multiAccountSwitch,accountUsers:s,activeUser:o,additionalMenuItems:this._getAdditionalAccountMenuItems(),createLocalApiErrorHandlerAccountsFetch:t,fetchAccounts:a,fetchStatus:n,onClose:e,shouldDisplayFetchRenderer:this._hasMultiAccountCookie(),withBadges:!0}):null},this._multiAccountSwitch=({hasBadge:e,isProtected:t,userId:a})=>{const{analytics:n,createLocalApiErrorHandlerAccountSwitch:r,switchAccount:o}=this.props;n.scribe({component:t?"switch_to_protected_account":"switch_account",element:e?"account_badged":"account",action:"click"}),o({user_id:a}).catch(r(g.a))},this._getAdditionalAccountMenuItems=()=>{const{loggedInUser:e,multiAccountUsers:t}=this.props,a=t.length>1,n=[];return t.length>=5||n.push({actionText:f,link:this.context.featureSwitches.isTrue("stateful_login_enabled")?"/i/flow/login":"/account/add",scribeElement:"add_existing_account",testID:C}),a&&n.push({actionText:S,link:"/account/switch",scribeElement:"manage_accounts",testID:E}),e&&n.push({actionText:k({screenName:e.screen_name}),link:"/logout",scribeElement:"log_out",testID:w}),n},this._handleAccountSwitcherClick=()=>{const{analytics:e}=this.props;e.scribe({action:"click"})},this._hasMultiAccountCookie=()=>{const{hasMultiAccountCookie:e}=Object(h.a)();return e}}render(){const{analytics:e,hasMultiAccountBadges:t,isExpanded:a,loggedInUser:n}=this.props;return r.a.createElement(x.a,{analytics:e,currentUser:n,hasMultiAccountBadges:t,interactiveViewTestId:b,isExpanded:a,renderMenuSheet:this._renderMenuSheet})}}_.contextType=v.a;var I=u(_),T=a("1eTX"),L=a("jwTb"),B=a("Irs7"),A=a("eqgg");const M=p.a.g34f2c63({verb:""});class U extends r.a.Component{constructor(...e){super(...e),this._handlePress=e=>{const{analytics:t}=this.props;t.scribe({component:"new_tweet_button",action:"click"})}}render(){const{composeOptions:e,isExpanded:t,testID:a}=this.props;return r.a.createElement(A.a,{icon:H,isExpanded:t,label:M,link:{pathname:"/compose/tweet",state:e},onPress:this._handlePress,testID:a})}}const H=r.a.createElement(L.a,null);var P=Object(B.a)(U),R=a("N5qz"),F="SideNav_NewTweet_Button",z=a("MWbm"),D=a("cHvH"),N=a("rHpw");class O extends r.a.Component{render(){const{SideNavButton:e,TabBar:t,TeamsSwitcher:a,history:n,isCollapsedSmall:o,isExpanded:s,isLoggedIn:i,isTwoColumn:c,location:l,logoButton:d,onTabRefresh:u,widthStyle:h,withTweetButton:m}=this.props,p=[j.root,h,o?j.rootPaddingSmall:j.rootPaddingNormal],y=d||r.a.createElement(T.a,{onClick:u,pullLeft:!1,size:"large"});return r.a.createElement(D.a,null,(({windowHeight:o})=>r.a.createElement(z.a,{style:p},r.a.createElement(z.a,{style:[j.topSection,!s&&j.alignItemsCenter]},r.a.createElement(z.a,{style:j.topControl},y),r.a.createElement(z.a,{style:[j.appTabBar,!s&&j.alignItemsCenter]},r.a.createElement(t,{history:n,layout:"vertical",location:l,onTabRefresh:u,wideMode:c,withExtendedItems:!0,withLabel:s})),i&&(e||m)?this._renderButton(o):null),i?r.a.createElement(z.a,{style:[j.footerContainer,!s&&j.alignItemsCenter]},r.a.createElement(I,{isExpanded:s}),a?r.a.createElement(a,{isExpanded:s}):null):null)))}_renderButton(e){const{SideNavButton:t,composeOptions:a,isExpanded:n}=this.props;return r.a.createElement(z.a,{style:[j.button,!n&&j.alignItemsCenter,"tall"===R.a.getHeightMode(e)&&j.withTallHeight]},t?r.a.createElement(t,{isExpanded:n}):r.a.createElement(P,{composeOptions:a,isExpanded:n,testID:F}))}}O.defaultProps={withTweetButton:!0};const j=N.a.create((e=>({root:{height:"100%",overflowY:"auto",justifyContent:"space-between"},rootPaddingNormal:{paddingHorizontal:e.spaces.space12},rootPaddingSmall:{paddingHorizontal:e.spaces.space4},topSection:{alignItems:"flex-start"},topControl:{paddingVertical:e.spaces.space2,maxWidth:"100%"},appTabBar:{marginBottom:e.spaces.space4,marginTop:e.spaces.space2,width:"100%"},button:{marginVertical:e.spaces.space4,width:"90%"},withTallHeight:{marginVertical:e.spaces.space16},alignItemsCenter:{alignItems:"center"},settingsButton:{marginBottom:e.spaces.space20,marginHorizontal:e.spaces.space4},footerContainer:{marginVertical:e.spaces.space12}})))},Nqmc:function(e,t,a){"use strict";var n=a("SV7d"),r=a("ERkP"),o=a.n(r),s=a("t62R"),i=a("5mJL"),c=a("nBUg"),l=a("qjak"),d=a("dC06"),u=a("rHpw"),h=a("XIXT"),m=a("yDX5"),p=a("MWbm");const y={viewType:"social_context"};class g extends o.a.PureComponent{render(){const{avatarSize:e,bottomControl:t,iconStyle:a,nativeID:r,onLayout:d,rightControl:u,style:h,testID:m,textColor:g,textSize:C,topControl:w,weight:E,withBottomBorder:x,withLeftPadding:v,withTextCentered:f,...S}=this.props,{Icon:k,accessibilityLabel:_,link:I,text:T}=Object(l.a)(S),L=o.a.createElement(s.b,{accessibilityLabel:_,color:g,nativeID:r,numberOfLines:2,size:C,testID:m,weight:E},T),{cellStyle:B,viewStyle:A}=this._getStyles();return T?o.a.createElement(c.b.UseProps,null,(r=>o.a.createElement(n.a,{behavioralEventContext:y},o.a.createElement(o.a.Fragment,null,w||null,o.a.createElement(p.a,{onLayout:d,style:[h,A,r.socialContextRefreshEnabled()&&!v&&b.socialContextRefresh]},o.a.createElement(i.a,{avatarCell:k||(v?null:void 0),avatarCellStyle:[a,b.socialContextIconColumn,!v&&b.unsetIconWidth,r.socialContextRefreshEnabled()&&!v&&b.socialContextRefreshIcon],avatarSize:e,cellStyle:B},o.a.createElement(p.a,{style:b.cellWrapper},o.a.createElement(p.a,{style:[b.socialContextTextColumn,r.socialContextRefreshEnabled()&&!v&&b.socialContextRefreshTextColumn]},I?this._renderLink(I,L):L),u||null)),t||null))))):null}_renderLink(e,t){const{contextType:a,nativeID:n,onClick:r,retweetData:i,textColor:c,topicData:l}=this.props,{screenName:u}=i||{},p=o.a.createElement(s.b,{color:c,link:e,nativeID:n,onClick:r},t);return a===d.a.Topic&&l?o.a.createElement(h.a,{topicId:l.topicId},p):a===d.a.Retweet&&u?o.a.createElement(m.a,{screenName:u},p):p}_getStyles(){const{bottomControl:e,contextType:t,withBottomBorder:a,withTextCentered:n}=this.props,r=t===d.a.TextOnly,o=a?[b.bottomBorderMargin,e&&b.bottomBorder]:[],s=a&&!e?[b.bottomBorder]:[];return r&&s.push(b.topicContext),n&&s.push(b.socialContextTextCentered),{viewStyle:o,cellStyle:s}}}g.defaultProps={iconSize:"small",textColor:"gray700",textSize:"subtext2",withBottomBorder:!1,withLeftPadding:!0,withTextCentered:!1};const b=u.a.create((e=>({socialContextIconColumn:{alignItems:"flex-end",justifyContent:"center"},bottomBorderMargin:{marginBottom:e.componentDimensions.gutterVertical},cellWrapper:{flexDirection:"row"},bottomBorder:{paddingBottom:e.spaces.space4,borderBottomStyle:"solid",borderBottomWidth:e.borderWidths.small,borderBottomColor:e.colors.borderColor},topicContext:{paddingBottom:`calc(${e.spaces.space4} + ${e.spaces.space2})`},socialContextTextColumn:{alignItems:"flex-start",flexShrink:1,justifyContent:"center"},unsetIconWidth:{flexBasis:"unset"},socialContextRefreshIcon:{marginRight:e.spaces.space8},socialContextRefresh:{marginBottom:e.spaces.space8},socialContextRefreshTextColumn:{minHeight:e.spaces.space32},socialContextTextCentered:{justifyContent:"center"}})));t.a=g},OOKO:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("ERkP"),r=a.n(n),o=a("rHpw"),s=a("MWbm");function i({spacing:e}){return r.a.createElement(s.a,{accessibilityRole:"separator",style:[c.divider,{marginVertical:null!=e?o.a.theme.spaces[e]:void 0}]})}const c=o.a.create((e=>({divider:{backgroundColor:e.colors.borderColor,height:e.borderWidths.small}})))},aPcQ:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("Lsrn"),s=a("k/Ka");const i=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[o.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M20 16H5.81l2.72-2.72c.294-.293.294-.768 0-1.06s-.767-.294-1.06 0l-4 4c-.293.292-.293.767 0 1.06l4 4c.146.147.338.22.53.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06L5.81 17.5H20c.414 0 .75-.337.75-.75S20.414 16 20 16zm.53-9.28l-4-4c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l2.72 2.72H4c-.414 0-.75.337-.75.75S3.586 8 4 8h14.19l-2.72 2.72c-.294.293-.294.768 0 1.06.146.147.338.22.53.22s.384-.073.53-.22l4-4c.293-.293.293-.767 0-1.06z"})));i.metadata={width:24,height:24},t.a=i},dC06:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("ERkP");const n=Object.freeze({Community:"Community",Pin:"Pin",Retweet:"Retweet",Like:"Like",Follow:"Follow",Moment:"Moment",NewTweets:"NewTweets",Reply:"Reply",Conversation:"Conversation",TextOnly:"TextOnly",Facepile:"Facepile",Feedback:"Feedback",Topic:"Topic",List:"List",Location:"Location",Megaphone:"Megaphone",Bird:"Bird",NewUser:"NewUser",SmartBlockExpiration:"SmartBlockExpiration",FollowMutual:"FollowMutual",FollowFollowing:"FollowFollowing",FollowFollowed:"FollowFollowed",SocialProof:"SocialProof",Spaces:"Spaces",Sparkle:"Sparkle",Trending:"Trending"})},e5HP:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a("ERkP"),r=a.n(n),o=a("t62R"),s=a("3XMw"),i=a.n(s),c=a("rHpw"),l=a("MWbm"),d=a("Lsrn"),u=a("k/Ka");const h=(e={})=>Object(u.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[d.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z"})));h.metadata={width:24,height:24};var m=h,p=a("uFYP");const y=i.a.f1a1b790,g=i.a.if2bf8b3,b=i.a.f3624b5c,C=i.a.b4b3b113,w=i.a.be22205f,E=i.a.hcbbe447;class x extends r.a.Component{render(){const{color:e,nativeID:t,style:a,withCircleIcon:n}=this.props,s=n?m:p.a;return r.a.createElement(l.a,{style:[v.root,a]},r.a.createElement(s,{style:[v.icon,e&&v[e]]}),r.a.createElement(o.b,{color:e,nativeID:t,size:"subtext2"},this._getPromotedLabel()))}_getPromotedLabel(){const{contentAuthorId:e,label:t,promotedContent:a}=this.props,{adMetadataContainer:n,advertiser:r,advertiser_name:o,disclosure_type:s}=a,i=e&&r&&e===r.id_str,c="string"==typeof s&&"political"===s.toLowerCase(),l="string"==typeof s&&"issue"===s.toLowerCase(),d=!(!n||"POLITICAL"!==n.disclaimerType)||c,u=!(!n||"ISSUE"!==n.disclaimerType)||l,{removePromotedAttributionForPreroll:h}=n||{};let m;return m=t||(!o||i||h?d?b:u?w:g:d?C({fullName:o}):u?E({fullName:o}):y({fullName:o})),m}}x.defaultProps={color:"gray700",withCircleIcon:!1};const v=c.a.create((e=>({root:{alignItems:"center",flexDirection:"row"},icon:{color:e.colors.gray700,height:"1em",marginRight:e.spaces.space4,flexShrink:0},gray700:{color:e.colors.gray700},white:{color:e.colors.white}})))},qjak:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("t62R"),s=a("MAI/"),i=a("shC7"),c=a("dC06"),l=a("rHpw"),d=a("3XMw"),u=a.n(d),h=a("FITr"),m=a("yVEN"),p=a("uCrx"),y=a("6ZHn"),g=a("GcQN"),b=a("x0mb"),C=a("Hp3u"),w=a("Lsrn"),E=a("k/Ka");const x=(e={})=>Object(E.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[w.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M19.75 2H4.25C3.01 2 2 3.01 2 4.25v13.003c0 1.24 1.01 2.25 2.25 2.25h4.56l2.59 3.45c.142.19.364.3.6.3.235 0 .457-.11.598-.3l2.588-3.45h4.563c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM6.963 12.375c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375S8.338 10.24 8.338 11s-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375 1.375.616 1.375 1.375-.616 1.375-1.375 1.375zm4.85 0c-.76 0-1.375-.616-1.375-1.375s.616-1.375 1.375-1.375c.76 0 1.375.616 1.375 1.375s-.616 1.375-1.375 1.375z"})));x.metadata={width:24,height:24};var v=x,f=a("EHV7"),S=a("wpLu"),k=a("EfHu"),_=a("cOhU"),I=a("cap5"),T=a("r9x5");const L=(e={})=>Object(E.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[w.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm3.75 12.257c-.038 0-.074-.003-.11-.008l-3.667-.54s-.28-.048-.292-.053c-.343-.07-.602-.372-.602-.735V6.417c0-.414.336-.75.75-.75s.75.336.75.75v5.115l3.28.483c.41.06.692.44.632.852-.055.372-.375.64-.74.64z"})));L.metadata={width:24,height:24};var B=L,A=a("0qK0"),M=a("aPcQ");const U=(e={})=>Object(E.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[w.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M8.417 11.816c1.355 0 2.872-.15 3.84-1.256.813-.93 1.077-2.367.806-4.392-.38-2.826-2.116-4.513-4.645-4.513-2.53 0-4.267 1.687-4.646 4.513-.273 2.025-.01 3.462.805 4.393.968 1.108 2.485 1.257 3.84 1.257zm8.28 7.42c-.88-3.526-4.283-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.03 1.4.395 1.94.408.52 1.04.82 1.733.82H14.57c.69 0 1.323-.3 1.73-.82.425-.54.568-1.246.396-1.94zM23.24 3.47h-5.624l1.64-1.642c.315-.316.315-.827 0-1.143-.316-.315-.826-.316-1.143 0l-2.96 2.96c-.16.16-.238.366-.238.572 0 .207.08.414.237.57l2.96 2.962c.16.156.365.234.572.234s.413-.08.57-.236c.316-.316.316-.828 0-1.144l-1.64-1.64h5.623c.414 0 .75-.336.75-.75s-.334-.747-.748-.747z"})));U.metadata={width:24,height:24};var H=U,P=a("lUZE");const R=u.a.jb767df7,F=u.a.bb3323fa,z=u.a.db0798ed,D=u.a.dc716ec8,N=e=>r.a.createElement(o.b,{dir:i.a.getConstants().isRTL?"rtl":"ltr",withHashflags:!0},e),O=(e,t)=>t?R:(e=>{const t=N(e);return r.a.createElement(u.a.I18NFormatMessage,{$i18n:"h99e9c95"},t)})(e),j=l.a.create((e=>({small:{height:e.lineHeights.subtext3,width:e.lineHeights.subtext3},large:{height:e.lineHeights.subtext1,width:e.lineHeights.subtext1},xLarge:{height:e.lineHeights.headline1,width:e.lineHeights.headline1}}))),W=l.a.create((e=>({circle:{color:e.colors.primary,width:"0.5em"},colorDeepGray:{color:e.colors.gray700},colorBlue:{color:e.colors.blue500},colorGreen:{color:e.colors.green500},colorOrange:{color:e.colors.orange500},colorPrimary:{color:e.colors.primary},colorRed:{color:e.colors.magenta500},grayscaleImage:{borderRadius:e.borderRadii.infinite,filter:"grayscale(100%)"},brandColor:{color:e.colors.brandColor}})));t.a=({contextType:e,iconSize:t,link:a,retweetData:n,text:o,topicData:i,userAvatarUrls:l})=>{const{isSelfRetweet:d,name:u,screenName:w}=n||{},E=((e,t,a=[])=>{const n=j[t],o=[W.colorDeepGray,n],i=r.a.createElement(h.a,{style:o}),l=r.a.createElement(m.a,{style:o}),d=r.a.createElement(p.a,{style:o}),u=r.a.createElement(y.a,{style:o}),w=r.a.createElement(g.a,{style:o}),E=r.a.createElement(b.a,{style:W.circle}),x=r.a.createElement(C.a,{style:o}),L=r.a.createElement(v,{style:o}),U=r.a.createElement(f.a,{style:o}),R=r.a.createElement(S.a,{style:o}),F=r.a.createElement(k.a,{style:o}),z=r.a.createElement(_.a,{style:o}),D=r.a.createElement(I.a,{style:o}),N=r.a.createElement(T.a,{style:o}),O=r.a.createElement(B,{style:o}),V=r.a.createElement(A.a,{style:o}),K=r.a.createElement(M.a,{style:o}),X=r.a.createElement(H,{style:o}),G=r.a.createElement(s.a,{borderColor:"cellBackground",userAvatarSize:t,userAvatarUrls:a}),q=r.a.createElement(P.a,{style:o});switch(e){case c.a.Pin:return i;case c.a.Retweet:return l;case c.a.Like:return d;case c.a.Follow:return u;case c.a.Moment:return w;case c.a.NewTweets:return E;case c.a.Reply:case c.a.Conversation:return x;case c.a.Feedback:return L;case c.a.Topic:return U;case c.a.List:return R;case c.a.Location:return F;case c.a.Community:return z;case c.a.Spaces:return D;case c.a.Sparkle:return N;case c.a.SmartBlockExpiration:return O;case c.a.SocialProof:case c.a.FollowFollowed:return X;case c.a.FollowMutual:return K;case c.a.FollowFollowing:return V;case c.a.Facepile:return G;case c.a.Bird:return q;case c.a.TextOnly:default:return null}})(e,t,l);switch(e){case c.a.Retweet:return{Icon:E,text:o||O(u,d),link:w?`https://twitter.com/${w}`:void 0};case c.a.Pin:return{Icon:E,text:o||F};case c.a.Topic:return{Icon:E,accessibilityLabel:"Recommendation"===(null==i?void 0:i.functionalityType)||"RecWithEducation"===(null==i?void 0:i.functionalityType)?D({topicName:o}):z({topicName:o}),text:o?N(o):null,link:a};default:return{Icon:E,text:o?N(o):null,link:a}}}},"qtu+":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("4+NY"),r=a("oEOe"),o=a("5oBF");const s={REQUEST:"rweb/multiAccount/SWITCH_REQUEST",SUCCESS:"rweb/multiAccount/SWITCH_SUCCESS",FAILURE:"rweb/multiAccount/SWITCH_FAILURE"},i=e=>(t,a,{api:i})=>{const c=Object(r.b)(t,{request:i.Auth.switch,params:e});return t(Object(o.g)()).then((()=>t(Object(n.b)()).then((()=>c({actionTypes:s,context:"SWITCH"}).then((()=>{window.location.assign("/home")}))))))}},r9x5:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("Lsrn"),s=a("k/Ka");const i=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[o.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zM7.413 4.562c0-.414-.336-.75-.75-.75h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75zm1.785 14.872h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"})));i.metadata={width:24,height:24},t.a=i},uFYP:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("Lsrn"),s=a("k/Ka");const i=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[o.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z"})));i.metadata={width:24,height:24},t.a=i},x0mb:function(e,t,a){"use strict";var n=a("ERkP"),r=a.n(n),o=a("Lsrn"),s=a("k/Ka");const i=(e={})=>Object(s.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[o.a.root,e.style],viewBox:"0 0 24 24"},r.a.createElement("g",null,r.a.createElement("path",{d:"M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75z"})));i.metadata={width:24,height:24},t.a=i},y8wG:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));a("kYxP");var n=a("ERkP"),r=a.n(n),o=a("ZUOq"),s=a("3XMw"),i=a.n(s),c=a("ACHU"),l=a("aWzz"),d=a("MWbm"),u=a("I4+6"),h=a("rHpw"),m=a("XP29"),p=a("jV+4"),y=a("Znyr"),g=a("OiMc"),b=a("cm6r");const C=i.a.d86bbf0f,w=i.a.h6beb5fa,E=i.a.b8e1d524,x=i.a.gef27c4c;class v extends r.a.Component{constructor(...e){super(...e),this._renderUser=e=>{const{isExpanded:t}=this.props,{name:a,profile_image_url_https:n,protected:o,screen_name:s,verified:i}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{accessibilityLabel:a,screenName:s,size:"xLarge",uri:n}),t?null:this._renderBadge()),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{isProtected:o,isVerified:i,name:a,screenName:s,style:f.userName,withStackedLayout:!0}),r.a.createElement(d.a,{style:f.iconContainer},r.a.createElement(c.a,{style:f.icon}),t?this._renderBadge():null)):null)},this._renderEmptyState=()=>{const{renderEmptyState:e}=this.props;return e?r.a.createElement(d.a,{style:f.emptyStateWrapper},e()):null},this._renderBadge=()=>{const{hasMultiAccountBadges:e,isExpanded:t}=this.props;return e?r.a.createElement(y.a,{pip:!0,style:t&&f.pip,truncatedCountFormatter:w,unreadCountLabel:C}):null},this._handleAccountSwitcherClick=()=>{const{analytics:e}=this.props;e.scribe({action:"click"})}}render(){const{accessibilityLabel:e,currentUser:t,hoverLabel:a,interactiveViewTestId:n,isExpanded:o,renderEmptyState:s,renderMenuSheet:i}=this.props;return t||s?r.a.createElement(g.a,{contentStyle:f.menuContainer,enableEnterKeyToggle:!0,renderContent:i,withArrow:!0,withFixedPosition:!0},r.a.createElement(b.a,{accessibilityLabel:e||x,accessibilityRole:"button",hoverLabel:o?void 0:{label:a||E},interactiveStyles:u.a.generate({backgroundColor:"transparent",color:h.a.theme.colors.text}),onClick:this._handleAccountSwitcherClick,style:f.anchorContainer,testID:n},t?this._renderUser(t):this._renderEmptyState())):null}}v.contextTypes={featureSwitches:l.object};const f=h.a.create((e=>({anchorContainer:{alignItems:"center",borderRadius:e.borderRadii.infinite,display:"flex",flexDirection:"row",padding:e.spaces.space12},icon:{color:e.colors.text},iconContainer:{alignItems:"flex-end",flexGrow:1},pip:{position:"absolute",right:`calc(-1 * ${e.spaces.space4})`,top:`calc(-1 * ${e.spaces.space4})`},userName:{flexGrow:1,marginHorizontal:e.spaces.space12},menuContainer:{width:o.a.cardWidth.normal},emptyStateWrapper:{height:e.spaces.space40,minWidth:e.spaces.space40,width:"100%"}})))}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SideNav.4edb6dd5.js.map