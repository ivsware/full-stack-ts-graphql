(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{"3ukl":function(e,t,n){"use strict";n.r(t);var a=n("ezF+"),o=n("EIk2"),r=n("ERkP"),i=n.n(r),s=n("IMYl"),c=n("hOZg");const l=e=>"IconCheckmark"===e?i.a.createElement(s.a,null):"IconClose"===e?i.a.createElement(c.a,null):void 0,p=Object.freeze({Compact:"Compact",Normal:"Normal",Large:"Large",ThumbsUpAndDown:"ThumbsUpAndDown"});var d=n("Irs7"),m=n("MWbm"),u=n("PbQQ"),y=n("/yvb"),g=n("t62R");const h=n("rHpw").a.create((e=>({button:{margin:"1ex"},buttonContainer:{display:"grid",gridTemplateColumns:"repeat(2,1fr)"},secondHalf:{width:"50%",display:"grid",justifyContent:"end"},firstHalf:{width:"50%",flexDirection:"column",justifyContent:"center"},root:{flexDirection:"row",justifyContent:"space-between"},promptContainer:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid",borderBottomWidth:e.borderWidths.small},survey:{display:"flex",borderRadius:e.spaces.space8,padding:e.spaces.space12,backgroundColor:e.colors.orange0,alignItems:"center",minHeight:e.spaces.space64},icon:{marginLeft:e.spaces.space12}})));var b=e=>{const{confirmation:t,displayType:n,isRelevantIcon:a,isRelevantOnClick:o,isRelevantText:r,notRelevantIcon:s,notRelevantOnClick:c,notRelevantText:b,onIsRelevant:C,showConfirmation:f,title:I}=e,E=Object(d.b)(),x=n===p.ThumbsUpAndDown,k=x,v=u.b.useOpaqueIdentifier(),R=()=>{E.scribe({element:"is_relevant",action:"click"}),C&&C(),o()},w=()=>{E.scribe({element:"not_relevant",action:"click"}),c()},T=(e,t,n)=>i.a.createElement(y.a,{accessibilityLabel:t,icon:n?l(n):void 0,onPress:e,size:n?"medium":"xSmall",style:n?h.icon:h.button,type:x?"primaryOutlined":"brandFilled"},n?null:t);return i.a.createElement(m.a,{accessibilityLabelledBy:v,accessibilityRole:"group",style:h.promptContainer},f?i.a.createElement(m.a,{accessibilityRole:"alert"},i.a.createElement(g.b,{style:x&&h.survey},t)):i.a.createElement(m.a,{style:[h.root,x&&h.survey]},i.a.createElement(m.a,{style:h.firstHalf},i.a.createElement(g.b,{nativeID:v},I)),i.a.createElement(m.a,{style:h.secondHalf},i.a.createElement(m.a,{style:h.buttonContainer},k?i.a.createElement(i.a.Fragment,null,T(R,r,a),T(w,b,s)):i.a.createElement(i.a.Fragment,null,T(w,b,s),T(R,r,a))))))},C=n("zh9S"),f=n("Rp9C"),I=n("pbku"),E=n("0KEI");const x=(e,t)=>{if(e&&e===p.ThumbsUpAndDown)return t?"IconCheckmark":"IconClose"},k=a.g({component:b,bindActions:({module:e})=>({createLocalApiErrorHandler:Object(E.createLocalApiErrorHandlerWithContextFactory)("RELEVANCE_PROMPT"),scribe:C.c,processCallback:o.a,applyReactionInstructions:e.applyReactionInstructions,updateEntry:e.updateEntry}),createProps:({actions:{applyReactionInstructions:e,createLocalApiErrorHandler:t,processCallback:n,scribe:a,updateEntry:o},entry:r})=>{const{content:i}=r,s=null!=i&&i.relevancePrompt?i.relevancePrompt:null;if(!s)return null;return{onIsRelevant:()=>{e({entry:r,triggerName:I.a.ON_IS_RELEVANT})},title:s.title,confirmation:s.confirmation,isRelevantText:s.isRelevantText,notRelevantText:s.notRelevantText,isRelevantIcon:x(s.displayType,!0),notRelevantIcon:x(s.displayType,!1),isRelevantOnClick:()=>{o(r.entryId,{relevancePrompt:{...s,showConfirmation:!0}}),n(s.isRelevantCallback).catch(t())},notRelevantOnClick:()=>{o(r.entryId,{relevancePrompt:{...s,showConfirmation:!0}}),n(s.notRelevantCallback).catch(t())},displayType:s.displayType,showConfirmation:s.showConfirmation}},getScribeDataItem:e=>f.a.forRelevancePrompt(e.itemMetadata.clientEventInfo),onImpression:({actions:{scribe:e},scribeData:t,scribeNamespace:n})=>{e({...n,element:"relevance_prompt",action:"impression"},t)}});t.default=k},EycW:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("t62R"),i=n("uCrx"),s=n("PnKw"),c=n("rHpw"),l="onboardingLikesGuide-emptyHeart",p="onboardingLikesGuide-filledHeart",d=n("MWbm");const m=o.a.memo((()=>o.a.createElement(i.a,{style:y.emptyHeart,testID:l}))),u=o.a.memo((()=>o.a.createElement(i.a,{style:y.filledHeart,testID:p}))),y=c.a.create((e=>({actionContext:{marginLeft:e.spaces.space8,display:"inline"},actionGuide:{display:"flex",flexDirection:"row",paddingLeft:e.spaces.space16,paddingRight:e.spaces.space16},actionGuideLeft:{flexGrow:"1",display:"flex",flexDirection:"row",alignItems:"center"},actionGuideRight:{flexGrow:"1",display:"block",textAlign:"right"},actionIcon:{display:"inline",marginLeft:e.spaces.space8},container:{position:"relative",marginTop:e.spaces.space4},headerText:{marginTop:e.spaces.space8,marginBottom:e.spaces.space8},actionContextIconContainer:{display:"inline"},actionContextIcon:{color:e.colors.magenta500,width:`calc(${e.spaces.space16} - ${e.spaces.space2})`,height:`calc(${e.spaces.space16} - ${e.spaces.space2})`},actionContextIconHighlight:{display:"flex",flexDirection:"row",backgroundColor:e.colors.magenta50,borderRadius:"50%",width:`calc(${e.spaces.space32} - ${e.spaces.space4})`,height:`calc(${e.spaces.space32} - ${e.spaces.space4})`,justifyContent:"center",alignItems:"center"},iconImage:{width:e.spaces.space64,height:e.spaces.space72},bodyText:{color:e.colors.gray700,marginBottom:e.spaces.space16},iconContainer:{display:"block"},rightControl:{position:"absolute",top:"0px",right:"0px"},emptyHeart:{color:e.colors.gray100,width:e.spaces.space20,height:e.spaces.space20},filledHeart:{color:e.colors.magenta500,width:e.spaces.space20,height:e.spaces.space20}})));t.a=({bodyText:e,currentLikeCount:t,headerIconUrl:n,headerText:a,likeContext:c,rightControl:l,totalLikeCount:p})=>{const g=[];for(let e=0;e<p;e++)g.push(e<t?o.a.createElement(u,null):o.a.createElement(m,null));return o.a.createElement(d.a,{style:y.container},o.a.createElement(s.a,{headline:a,image:n?{url:n,width:68,height:68,isCentered:!0}:void 0,isCompact:!0,rightControl:l,subtext:e}),o.a.createElement(d.a,{style:y.actionGuide},o.a.createElement(d.a,{accessibilityLabel:c,style:y.actionGuideLeft},o.a.createElement(d.a,{style:y.actionContextIconContainer},o.a.createElement(d.a,{style:y.actionContextIconHighlight},o.a.createElement(i.a,{style:y.actionContextIcon}))),o.a.createElement(d.a,{style:y.actionContext},o.a.createElement(r.b,{size:"subtext2",weight:"bold"},c))),o.a.createElement(d.a,{accessibilityLabel:c,accessibilityLiveRegion:"polite",style:y.actionGuideRight},g.map(((e,t)=>o.a.createElement(d.a,{key:`action-icon-${t}`,style:y.actionIcon},e))))))}},PnKw:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n("kYxP");var a=n("ERkP"),o=n.n(a),r=n("TIdA"),i=n("t62R"),s=n("A91F"),c=n("/yvb"),l=n("rHpw"),p="inlinePrompt",d="inlinePrompt-primaryAction",m="inlinePrompt-secondaryAction",u="inlinePrompt-centeredImageContainer",y=n("MWbm");class g extends o.a.Component{constructor(...e){super(...e),this._renderImage=e=>{const t=o.a.createElement(r.a,{accessibilityLabel:"",aspectMode:s.a.exact(e.width/e.height),backgroundColor:e.backgroundColor,image:e});return e.isCentered?o.a.createElement(y.a,{style:h.centeredImage,testID:u},o.a.createElement(y.a,{style:{width:`${e.width}px`,height:`${e.height}px`}},t)):t},this._renderTitle=()=>{const{headline:e}=this.props;return e?o.a.createElement(i.b,{accessibilityRole:"heading",align:"left",size:"title4",style:h.flexGrow,weight:"bold",withHashflags:!0},e):null},this._renderBodyText=()=>{const{subtext:e}=this.props;return e?o.a.createElement(i.b,{align:"left",color:"gray700",style:this.styles.body,withHashflags:!0},e):null},this._renderAction=({action:e,buttonSize:t,buttonType:n,style:a,testID:r})=>{const{secondaryAction:i}=this.props,{link:s,onClick:l,text:p}=e;return o.a.createElement(y.a,{style:[this.styles.actionContainer,a,{justifyContent:"flex-start"}],testID:r},o.a.createElement(c.a,{link:s,onPress:l,size:t,style:{width:i?"100%":"auto"},type:n},p))}}render(){const{image:e,primaryAction:t,rightControl:n,secondaryAction:a,shouldRenderBorder:r}=this.props;return o.a.createElement(y.a,{style:r?[b.root,b.rootMargin]:h.root},o.a.createElement(o.a.Fragment,null,e?this._renderImage(e):null,o.a.createElement(y.a,{style:this.styles.rootPadding,testID:p},this._renderTitle(),this._renderBodyText(),t?this._renderAction({action:t,buttonType:"primaryFilled",style:this.styles.primaryAction,buttonSize:"large",testID:d}):null,a?this._renderAction({action:a,buttonType:"primaryOutlined",style:this.styles.secondaryAction,buttonSize:"large",testID:m}):null)),n?o.a.createElement(y.a,{style:h.rightControl},n):null)}get styles(){return this.props.isCompact?f:C}}g.defaultProps={shouldRenderBorder:!1};const h=l.a.create((e=>({root:{backgroundColor:e.colors.cellBackground},flexGrow:{flexGrow:1},centeredImage:{display:"flex",flexDirection:"row",justifyContent:"center"},rightControl:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,position:"absolute",right:0,top:0}}))),b=l.a.create((e=>({root:{borderColor:e.colors.nestedBorderColor,borderWidth:e.borderWidths.small,borderRadius:e.borderRadii.xLarge,overflow:"hidden"},rootMargin:{marginLeft:e.spaces.space16,marginRight:e.spaces.space16}}))),C=l.a.create((e=>({rootPadding:{padding:e.spaces.space32},body:{marginTop:e.spaces.space8},actionContainer:{flexDirection:"row"},primaryAction:{marginTop:e.spaces.space28},secondaryAction:{marginTop:e.spaces.space16}}))),f=l.a.create((e=>({rootPadding:{padding:e.spaces.space16},body:{marginTop:e.spaces.space2},actionContainer:{flexDirection:"row"},primaryAction:{marginTop:e.spaces.space4},secondaryAction:{marginTop:e.spaces.space2}})))},RoyM:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=(n("kYxP"),n("zb92"));var i=Object(r.a)({loader:()=>n.e(174).then(n.bind(null,"ACNv"))}),s=n("4bW+"),c=n("IG7M"),l=n("rHpw"),p=n("Irs7");const d=l.a.create((e=>({curationControl:{marginStart:e.spaces.space20}})));t.a=Object(p.a)((e=>{const{analytics:t,feedbackItems:n,isDisplayedOnMedia:a}=e;if(n&&n.length>0){const e=e=>o.a.createElement(i,{actionItems:n,onClose:e}),r=()=>t.scribe({element:"caret",action:"click"});return o.a.createElement(c.a,{onClick:r,renderActionMenu:e,style:d.curationControl,testID:s.a.caret,withDarkBackground:a})}return null}))},YIsX:function(e,t,n){"use strict";n.r(t);var a=n("ezF+"),o=n("ERkP"),r=n.n(o),i=n("RoyM"),s=n("3XMw"),c=n.n(s),l=n("EycW"),p=n("zh9S"),d=n("G6rE");const m=c.a.a682906d,u=a.g({component:l.a,bindActions:({module:e})=>({scribe:p.c}),selectData:()=>({loggedInUser:e=>d.e.selectLoggedInUser(e)}),createProps:({data:{loggedInUser:e},entry:t,feedbackItems:n})=>{var a,o;const{content:s}=t,c=null!=s&&s.onboardingLikesStartPrompt?null==s?void 0:s.onboardingLikesStartPrompt:null;if(!c)return null;const l=(null==e?void 0:e.favourites_count)||0,p=c.likesNeededToCompleteOnboarding,d=Math.max(0,p-l);return{bodyText:null==(a=c.bodyRichText)?void 0:a.text,currentLikeCount:l,headerIconUrl:c.headerIconUrl,headerText:null==(o=c.headerRichText)?void 0:o.text,likeContext:m({count:d}),rightControl:n.length?r.a.createElement(i.a,{feedbackItems:n}):void 0,totalLikeCount:p}},onImpression:({actions:{scribe:e},scribeNamespace:t})=>{e({...t,action:"impression"})}});t.default=u},pbku:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a=Object.freeze({ON_LINGER:"onLinger",ON_IS_RELEVANT:"onIsRelevant",ON_SHOW_MORE:"onShowMore",ON_LIKE:"onLike"})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.promptHandler.b586c715.js.map