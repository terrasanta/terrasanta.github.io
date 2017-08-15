/** handles (scripts) :wdi_instagram | wdi_frontend | wdi_responsive  */function WDIInstagram(args){this.access_tokens=[];this.filters=[];if(typeof args!='undefined'){if(typeof args.access_tokens!='undefined'){this.access_tokens=args.access_tokens}
if(typeof args.filters!='undefined'){this.filters=args.filters}}
var _this=this;this.statusCode={429:function(){console.log(' 429: Too many requests try after one hour')},}
this.getFilter=function(methodName){var filters=_this.filters;if(typeof filters=="undefined"){return !1}
for(var i=0;i<filters.length;i++){if(filters[i].where==methodName){if(typeof filters[i].what=='object'&&filters[i].what.length==2){if(typeof window[filters[i].what[0]]!='undefined'){if(typeof window[filters[i].what[0]][filters[i].what[1]]=='function'){return window[filters[i].what[0]][filters[i].what[1]]}}}else if(typeof filters[i].what=='string'){if(typeof window[filters[i].what]=='function'){return window[filters[i].what]}}else if(typeof filters[i].what=='function'){return filters[i].what}else{return !1}}}
return !1}
function getAccessToken(){var access_tokens=_this.access_tokens,index=parseInt(Math.random(0,1)*access_tokens.length);return access_tokens[index]}
this.addToken=function(token){if(typeof token=='string'){_this.access_tokens.push(token)}}
this.getTagRecentMedia=function(tagname,args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode,errorFlag=!1,argFlag=!1,filter=this.getFilter('getTagRecentMedia'),baseUrl='https://api.instagram.com/v1/tags/'+tagname+'/media/recent?access_token='+getAccessToken();if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}
if('error' in args){errorFlag=!0}
if('args' in args){argFlag=!0}else{args.args={}}
if('count' in args){args.count=parseInt(args.count);if(!Number.isInteger(args.count)||args.count<=0){args.count=33}}else{args.count=33}
baseUrl+='&count='+args.count;if('min_tag_id' in args){baseUrl+='&min_tag_id='+args.min_tag_id}
if('max_tag_id' in args){baseUrl+='&max_tag_id='+args.max_tag_id}}
jQuery.ajax({type:'POST',url:baseUrl,dataType:'jsonp',success:function(response){if(typeof response.data==="undefined")response.data=[];if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.searchForTagsByName=function(tagname,args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode;errorFlag=!1;filter=this.getFilter('searchForTagsByName');if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',url:'https://api.instagram.com/v1/tags/search?q='+tagname+'&access_token='+getAccessToken(),dataType:'jsonp',success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.searchForUsersByName=function(username,args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode,errorFlag=!1,filter=this.getFilter('searchForUsersByName');if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:'https://api.instagram.com/v1/users/search?q='+username+'&access_token='+getAccessToken(),success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
response.args=args;window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
response.args=args;window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
response.args=args;args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:this.statusCode})}
this.getRecentLikedMedia=function(args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode,errorFlag=!1,filter=this.getFilter('getRecentLikedMedia');if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:'https://api.instagram.com/v1/users/self/media/liked?access_token='+getAccessToken(),success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.getUserRecentMedia=function(user_id,args){var instagram=this,noArgument=!1,successFlag=!1,argFlag=!1,statusCode=this.statusCode,errorFlag=!1,filter=this.getFilter('getUserRecentMedia'),baseUrl='https://api.instagram.com/v1/users/'+user_id+'/media/recent/?access_token='+getAccessToken();if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}
if('args' in args){argFlag=!0}else{args.args={}}
if('error' in args){errorFlag=!0}
if('count' in args){args.count=parseInt(args.count);if(!Number.isInteger(args.count)||args.count<=0){args.count=33}}else{args.count=33}
baseUrl+='&count='+args.count;if('min_id' in args){baseUrl+='&min_id='+args.min_id}
if('max_id' in args){baseUrl+='&max_id='+args.max_id}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:baseUrl,success:function(response){if(typeof response.data==="undefined")response.data=[];if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.getSelfRecentMedia=function(args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode;errorFlag=!1,filter=this.getFilter('getSelfRecentMedia'),baseUrl='https://api.instagram.com/v1/users/self/media/recent/?access_token='+getAccessToken();if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}
if('count' in args){args.count=parseInt(args.count);if(!Number.isInteger(args.count)||args.count<=0){args.count=33}}else{args.count=33}
baseUrl+='&count='+args.count;if('min_id' in args){baseUrl+='&min_id='+args.min_id}
if('max_id' in args){baseUrl+='&max_id='+args.max_id}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:baseUrl,success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.getUserInfo=function(user_id,args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode,errorFlag=!1,filter=this.getFilter('getUserInfo');if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:'https://api.instagram.com/v1/users/'+user_id+'/?access_token='+getAccessToken(),success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.getSelfInfo=function(args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode,errorFlag=!1,filter=this.getFilter('getSelfInfo');if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:'https://api.instagram.com/v1/users/self/?access_token='+getAccessToken(),success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.getRecentMediaComments=function(media_id,args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode,errorFlag=!1,filter=this.getFilter('getRecentMediaComments');if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:'https://api.instagram.com/v1/media/'+media_id+'/comments?access_token='+getAccessToken(),success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.getRecentMediaLikes=function(media_id,args){var instagram=this,noArgument=!1,successFlag=!1,statusCode=this.statusCode,errorFlag=!1,filter=this.getFilter('getRecentMediaLikes');if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:'https://api.instagram.com/v1/media/'+media_id+'/likes?access_token='+getAccessToken(),success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}
this.requestByUrl=function(requestUrl,args){var instagram=this,noArgument=!1,successFlag=!1,errorFlag=!1,argFlag=!1,statusCode=this.statusCode,filter=this.getFilter('requestByUrl'),urlParts,urlPart;urlParts=requestUrl.split('?')[1].split('&');for(var i=0;i<urlParts.length;i++){urlParts[i]=urlParts[i].split('=');if(urlParts[i][0]=='access_token'){urlParts[i][1]=getAccessToken()}
urlParts[i]=urlParts[i].join('=')}
urlParts=urlParts.join('&');requestUrl=requestUrl.split('?')[0]+'?'+urlParts;if(typeof args=='undefined'||args.length===0){noArgument=!0}else{if('success' in args){successFlag=!0}
if('args' in args){argFlag=!0}else{args.args={}}
if('error' in args){errorFlag=!0}
if('statusCode' in args){statusCode=args.statusCode}}
jQuery.ajax({type:'POST',dataType:'jsonp',url:requestUrl,success:function(response){if(successFlag){if(typeof args.success=='object'&&args.success.length==2){if(typeof window[args.success[0]]!='undefined'){if(typeof window[args.success[0]][args.success[1]]=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
window[args.success[0]][args.success[1]](response)}}}else if(typeof args.success=='string'){if(typeof window[args.success]=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
window[args.success](response)}}else if(typeof args.success=='function'){if(filter){response=filter(response,instagram.filterArguments,args.args)}
args.success(response)}}},error:function(response){if(errorFlag){if(typeof args.error=='object'&&args.error.length==2){if(typeof window[args.error[0]][args.error[1]]=='function'){window[args.error[0]][args.error[1]](response)}}else if(typeof args.error=='string'){if(typeof window[args.error]=='function'){window[args.error](response)}}else if(typeof args.error=='function'){args.error(response)}}},statusCode:statusCode})}}
;;
if(typeof wdi_front=='undefined'){wdi_front={type:'not_declared'}}
jQuery(document).ready(function(){if(wdi_front.type!='not_declared'){wdi_front.clickOrTouch=wdi_front.detectEvent();wdi_front.globalInit()}else{return}});wdi_front.detectEvent=function(){var isMobile=(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));if(isMobile){return "touchend"}else{return 'click'}}
wdi_front.globalInit=function(){var num=wdi_front.feed_counter;for(var i=0;i<=num;i++){var currentFeed=new WDIFeed(window['wdi_feed_'+i]);currentFeed.instagram=new WDIInstagram();currentFeed.instagram.filterArguments={feed:currentFeed};currentFeed.instagram.filters=[{'where':'getUserRecentMedia','what':function(response,args,cArgs){return args.feed.conditionalFilter(response,cArgs)}},{'where':'getTagRecentMedia','what':function(response,args,cArgs){return args.feed.conditionalFilter(response,cArgs)}},{'where':'requestByUrl','what':function(response,args,cArgs){return args.feed.conditionalFilter(response,cArgs)}},];currentFeed.instagram.addToken(currentFeed.feed_row.access_token);wdi_front.access_token=currentFeed.feed_row.access_token;currentFeed.dataStorageRaw=[];currentFeed.dataStorage=[];currentFeed.dataStorageList=[];currentFeed.allResponseLength=0;currentFeed.currentResponseLength=0;currentFeed.temproraryUsersData=[];currentFeed.removedUsers=0;currentFeed.nowLoadingImages=!0;currentFeed.imageIndex=0;currentFeed.resIndex=0;currentFeed.currentPage=1;currentFeed.userSortFlags=[];currentFeed.customFilterChanged=!1;currentFeed.maxConditionalFiltersRequestCount=10;currentFeed.instagramRequestCounter=0;currentFeed.conditionalFilterBuffer=[];currentFeed.stopInfiniteScrollFlag=!1;window.onload=function(){for(var i=0;i<=wdi_front.feed_counter;i++){window['wdi_feed_'+i].nowLoadingImages=!1}}
if(currentFeed.feed_row.feed_type=='masonry'){currentFeed.displayedData=[]}
if(currentFeed.feed_row.feed_display_view=='pagination'){currentFeed.feed_row.resort_after_load_more=0;if(currentFeed.feed_row.feed_type!='image_browser'){currentFeed.feed_row.load_more_number=parseInt(currentFeed.feed_row.pagination_per_page_number);currentFeed.feed_row.number_of_photos=(1+parseInt(currentFeed.feed_row.pagination_preload_number))*currentFeed.feed_row.load_more_number}else{currentFeed.feed_row.number_of_photos=1+parseInt(currentFeed.feed_row.image_browser_preload_number);currentFeed.feed_row.load_more_number=parseInt(currentFeed.feed_row.image_browser_load_number)}
currentFeed.freeSpaces=(Math.floor(currentFeed.feed_row.pagination_per_page_number/currentFeed.feed_row.number_of_columns)+1)*currentFeed.feed_row.number_of_columns-currentFeed.feed_row.pagination_per_page_number}else{currentFeed.freeSpaces=0}
currentFeed.galleryBox=function(image_id){wdi_spider_createpopup(wdi_url.ajax_url+'?gallery_id='+this.feed_row.id+'&image_id='+image_id,wdi_front.feed_counter,this.feed_row.lightbox_width,this.feed_row.lightbox_height,1,'testpopup',5,this)}
wdi_responsive.columnControl(currentFeed);if(currentFeed.feed_row.feed_type=='masonry'){jQuery(window).trigger('resize')}
wdi_front.bindEvents(currentFeed);window['wdi_feed_'+i]=currentFeed;wdi_front.init(currentFeed)}}
wdi_front.init=function(currentFeed){currentFeed.photoCounter=currentFeed.feed_row.number_of_photos;if(wdi_front.isJsonString(currentFeed.feed_row.feed_users)){currentFeed.feed_users=JSON.parse(currentFeed.feed_row.feed_users);if(wdi_front.updateUsersIfNecessary(currentFeed)){return}}else{alert('provided feed users are invalid or obsolete for this version of plugin');return}
currentFeed.dataCount=currentFeed.feed_users.length;for(var i=0;i<currentFeed.feed_users.length;i++){wdi_front.instagramRequest(i,currentFeed)}
if(currentFeed.feed_row.number_of_photos>0){wdi_front.ajaxLoader(currentFeed)}
if(currentFeed.feed_row.display_header==='1'){wdi_front.show('header',currentFeed)}
if(currentFeed.feed_row.show_usernames==='1'){wdi_front.show('users',currentFeed)}}
wdi_front.isJsonString=function(str){try{JSON.parse(str)}catch(e){return !1}
return !0}
wdi_front.instagramRequest=function(id,currentFeed){var feed_users=currentFeed.feed_users,_this=this;switch(this.getInputType(feed_users[id].username)){case 'hashtag':{currentFeed.instagram.getTagRecentMedia(this.stripHashtag(feed_users[id].username),{success:function(response){response=_this.checkMediaResponse(response);if(response!=!1){_this.saveUserData(response,currentFeed.feed_users[id],currentFeed)}}});break}
case 'user':{currentFeed.instagram.getUserRecentMedia(feed_users[id].id,{success:function(response){response=_this.checkMediaResponse(response);if(response!=!1){_this.saveUserData(response,currentFeed.feed_users[id],currentFeed)}}})
break}}}
wdi_front.isHashtag=function(str){return(str[0]==='#')}
wdi_front.saveUserData=function(data,user,currentFeed){data.username=user.username;data.user_id=user.id;if(data.user_id[0]==='#'){data.data=wdi_front.appendRequestHashtag(data.data,data.user_id)}
currentFeed.usersData.push(data);currentFeed.currentResponseLength=wdi_front.getArrayContentLength(currentFeed.usersData,'data');currentFeed.allResponseLength+=currentFeed.currentResponseLength;if(currentFeed.dataCount==currentFeed.usersData.length){if(currentFeed.currentResponseLength<currentFeed.feed_row.number_of_photos&&!wdi_front.userHasNoPhoto(currentFeed)){wdi_front.loadMore('initial-keep',currentFeed)}else{wdi_front.displayFeed(currentFeed);wdi_front.applyFilters(currentFeed);if(!wdi_front.activeUsersCount(currentFeed)){if(currentFeed.feed_row.feed_display_view=='load_more_btn'){var feed_container=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter);feed_container.find('.wdi_load_more').addClass('wdi_hidden');feed_container.find('.wdi_spinner').addClass('wdi_hidden')}}}}}
wdi_front.userHasNoPhoto=function(currentFeed,cstData){var counter=0;var data=currentFeed.usersData;if(cstData!=undefined){data=cstData}
for(var i=0;i<data.length;i++){if(data[i].pagination.next_max_id==undefined){counter++}}
if(counter==data.length){return 1}else{return 0}}
wdi_front.appendRequestHashtag=function(data,hashtag){for(var i=0;i<data.length;i++){data[i].wdi_hashtag=hashtag}
return data}
wdi_front.displayFeed=function(currentFeed,load_more_number){if(currentFeed.customFilterChanged==!1){var data=wdi_front.feedSort(currentFeed,load_more_number)}
var frontendCustomFilterClicked=currentFeed.customFilterChanged;if(currentFeed.customFilterChanged==!0){var data=currentFeed.customFilteredData;currentFeed.parsedData=wdi_front.parseLighboxData(currentFeed,!0)}
if(currentFeed.feed_row.resort_after_load_more!='1'){if(currentFeed.customFilterChanged==!1){currentFeed.dataStorageList=currentFeed.dataStorageList.concat(data)}}else{if(currentFeed.customFilterChanged==!1){currentFeed.dataStorageList=data}}
if(currentFeed.feed_row.feed_type=='masonry'){wdi_front.masonryDisplayFeedItems(data,currentFeed)}
if(currentFeed.feed_row.feed_type=='thumbnails'||currentFeed.feed_row.feed_type=='blog_style'||currentFeed.feed_row.feed_type=='image_browser'){wdi_front.displayFeedItems(data,currentFeed)}
var dataLength=wdi_front.getDataLength(currentFeed);if(dataLength<currentFeed.photoCounter&&!frontendCustomFilterClicked&&currentFeed.instagramRequestCounter<=currentFeed.maxConditionalFiltersRequestCount&&!wdi_front.allDataHasFinished(currentFeed)){wdi_front.loadMore('',currentFeed)}else{wdi_front.allImagesLoaded(currentFeed)}
if(currentFeed.instagramRequestCounter>currentFeed.maxConditionalFiltersRequestCount){wdi_front.allImagesLoaded(currentFeed);if(data.length==0){currentFeed.stopInfiniteScrollFlag=!0}}
if(currentFeed.feed_row.feed_display_view=='pagination'&&currentFeed.currentPage<currentFeed.paginator){jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter).find('#wdi_last_page').removeClass('wdi_disabled')}
currentFeed.instagramRequestCounter=0;currentFeed.conditionalFilterBuffer=[];wdi_front.updateUsersImages(currentFeed)}
wdi_front.updateUsersImages=function(currentFeed){var elements=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter).find('.wdi_single_user .wdi_user_img_wrap img');elements.each(function(){if(jQuery(this).attr('src')==wdi_url.plugin_url+'../images/missing.png'||jQuery(this).attr('src')==''){for(var j=0;j<currentFeed.usersData.length;j++){if(currentFeed.usersData[j].username==jQuery(this).parent().parent().find('h3').text()){if(currentFeed.usersData[j].data.length!=0){jQuery(this).attr('src',currentFeed.usersData[j].data[0].images.thumbnail.url)}}}}})}
wdi_front.masonryDisplayFeedItems=function(data,currentFeed){var masonryColEnds=[];var masonryColumns=[];if(jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+" .wdi_feed_wrapper").length==0){return}
jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_masonry_column').each(function(){if(currentFeed.feed_row.resort_after_load_more==1){jQuery(this).html('');currentFeed.imageIndex=0}
if(currentFeed.customFilterChanged==!0){jQuery(this).html('');currentFeed.imageIndex=0}
if(currentFeed.feed_row.feed_display_view=='pagination'){masonryColEnds.push(0)}else{masonryColEnds.push(jQuery(this).height())}
masonryColumns.push(jQuery(this))});if(currentFeed.customFilterChanged==!0){currentFeed.customFilterChanged=!1}
for(var i=0;i<data.length;i++){currentFeed.displayedData.push(data[i]);if(data[i].type=='image'){var photoTemplate=wdi_front.getPhotoTemplate(currentFeed)}else{var photoTemplate=wdi_front.getVideoTemplate(currentFeed)}
var rawItem=data[i];var item=wdi_front.createObject(rawItem,currentFeed);var html=photoTemplate(item);var shortCol=wdi_front.array_min(masonryColEnds);var imageResolution=wdi_front.getImageResolution(data[i]);masonryColumns[shortCol.index].html(masonryColumns[shortCol.index].html()+html);masonryColEnds[shortCol.index]+=masonryColumns[shortCol.index].width()*imageResolution;currentFeed.imageIndex++;if(currentFeed.feed_row.feed_display_view=='pagination'){if((i+1)%currentFeed.feed_row.pagination_per_page_number===0){currentFeed.resIndex+=currentFeed.freeSpaces+1}else{currentFeed.resIndex++}}}
currentFeed.wdi_loadedImages=0;var columnFlag=!1;currentFeed.wdi_load_count=i;var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var feed_wrapper=jQuery('#wdi_feed_'+wdi_feed_counter+' img.wdi_img').on('load',function(){currentFeed.wdi_loadedImages++;checkLoaded();if(columnFlag===!1){wdi_responsive.columnControl(currentFeed,1);columnFlag=!0}});function checkLoaded(){if(currentFeed.wdi_load_count===currentFeed.wdi_loadedImages&&currentFeed.wdi_loadedImages!=0){currentFeed.loadedImages=0;currentFeed.wdi_load_count=0;wdi_front.allImagesLoaded(currentFeed)}}
if(currentFeed.paginatorNextFlag==!0){wdi_front.updatePagination(currentFeed,'next')}
currentFeed.infiniteScrollFlag=!1}
wdi_front.getImageResolution=function(data){var originalWidth=data.images.standard_resolution.width;var originalHeight=data.images.standard_resolution.height;var resolution=originalHeight/originalWidth;return resolution}
wdi_front.getDataLength=function(currentFeed,customStorage){var length=0;if(customStorage===undefined){for(var j=0;j<currentFeed.dataStorage.length;j++){length+=currentFeed.dataStorage[j].length}}else{for(var j=0;j<customStorage.length;j++){length+=customStorage[j].length}}
return length}
wdi_front.getArrayContentLength=function(array,data){var sum=0;for(var i=0;i<array.length;i++){if(array[i].finished=='finished'){continue}
sum+=array[i][data].length}
return sum}
wdi_front.displayFeedItems=function(data,currentFeed){var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var feed_wrapper=jQuery('#wdi_feed_'+wdi_feed_counter+' .wdi_feed_wrapper');if(currentFeed.feed_row.resort_after_load_more==='1'){feed_wrapper.html('');currentFeed.imageIndex=0}
if(currentFeed.customFilterChanged==!0){feed_wrapper.html('');currentFeed.imageIndex=0;currentFeed.customFilterChanged=!1}
var lastIndex=wdi_front.getImgCount(currentFeed)-data.length-1;if(currentFeed.feed_row.feed_display_view=='pagination'){if(jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' [wdi_page="'+(currentFeed.currentPage-1)+'"]').length<currentFeed.feed_row.load_more_number||data.length==0){currentFeed.currentPage=(--currentFeed.currentPage<=1)?1:currentFeed.currentPage}}
for(var i=0;i<data.length;i++){if(data[i].type=='image'){var photoTemplate=wdi_front.getPhotoTemplate(currentFeed)}else{var photoTemplate=wdi_front.getVideoTemplate(currentFeed)}
var rawItem=data[i];var item=wdi_front.createObject(rawItem,currentFeed);var html=photoTemplate(item);feed_wrapper.html(feed_wrapper.html()+html);currentFeed.imageIndex++;if(currentFeed.feed_row.feed_display_view=='pagination'){if((i+1)%currentFeed.feed_row.pagination_per_page_number===0){currentFeed.resIndex+=currentFeed.freeSpaces+1}else{currentFeed.resIndex++}}}
jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_feed_wrapper [wdi_index='+lastIndex+'] .wdi_photo_title').trigger(wdi_front.clickOrTouch);jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_feed_wrapper [wdi_index='+lastIndex+'] .wdi_photo_title').trigger(wdi_front.clickOrTouch);currentFeed.wdi_loadedImages=0;var columnFlag=!1;currentFeed.wdi_load_count=i;var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var feed_wrapper=jQuery('#wdi_feed_'+wdi_feed_counter+' img.wdi_img').on('load',function(){currentFeed.wdi_loadedImages++;checkLoaded();if(columnFlag===!1){wdi_responsive.columnControl(currentFeed,1);columnFlag=!0}});function checkLoaded(){if(currentFeed.wdi_load_count===currentFeed.wdi_loadedImages&&currentFeed.wdi_loadedImages!=0){currentFeed.loadedImages=0;currentFeed.wdi_load_count=0;wdi_front.allImagesLoaded(currentFeed)}}
if(currentFeed.paginatorNextFlag==!0){wdi_front.updatePagination(currentFeed,'next')}
currentFeed.infiniteScrollFlag=!1}
wdi_front.checkFeedFinished=function(currentFeed){for(var i=0;i<currentFeed.usersData.length;i++){if(currentFeed.usersData[i].finished==undefined){return !1}}
return !0}
wdi_front.sortingOperator=function(sortImagesBy,sortOrder){var operator;switch(sortImagesBy){case 'date':{switch(sortOrder){case 'asc':{operator=function(a,b){return(a.created_time>b.created_time)?1:-1}
break}
case 'desc':{operator=function(a,b){return(a.created_time>b.created_time)?-1:1}
break}}
break}
case 'likes':{switch(sortOrder){case 'asc':{operator=function(a,b){return(a.likes.count<b.likes.count)?-1:1}
break}
case 'desc':{operator=function(a,b){return(a.likes.count<b.likes.count)?1:-1}
break}}
break}
case 'comments':{switch(sortOrder){case 'asc':{operator=function(a,b){return(a.comments.count<b.comments.count)?-1:1}
break}
case 'desc':{operator=function(a,b){return(a.comments.count<b.comments.count)?1:-1}
break}}
break}
case 'random':{operator=function(a,b){var num=Math.random();return(num>0.5)?1:-1}
break}}
return operator}
wdi_front.feedSort=function(currentFeed,load_more_number){var sortImagesBy=currentFeed.feed_row.sort_images_by;var sortOrder=currentFeed.feed_row.display_order;if(currentFeed.feed_row.resort_after_load_more==='1'){currentFeed.data=currentFeed.data.concat(wdi_front.smartPicker(currentFeed,load_more_number))}else{currentFeed.data=wdi_front.smartPicker(currentFeed,load_more_number)}
var operator=wdi_front.sortingOperator(sortImagesBy,sortOrder);currentFeed.data.sort(operator);return currentFeed.data}
wdi_front.smartPicker=function(currentFeed,load_more_number){var dataStorage=[];var dataLength=0;var readyData=[];var perUser=Math.ceil(currentFeed.feed_row.number_of_photos/currentFeed.usersData.length);var number_of_photos=parseInt(currentFeed.feed_row.number_of_photos);var remainder=0;if(load_more_number!=''&&load_more_number!=undefined&&load_more_number!=null){number_of_photos=parseInt(load_more_number);perUser=Math.ceil(number_of_photos/wdi_front.activeUsersCount(currentFeed))}
var sortOperator=function(a,b){return(a.data.length>b.data.length)?1:-1}
var sortOperator1=function(a,b){return(a.length()>b.length())?1:-1}
currentFeed.storeRawData(currentFeed.usersData,'dataStorageRaw');var dataStorageRaw=currentFeed.dataStorageRaw.sort(sortOperator1);var usersData=currentFeed.usersData.sort(sortOperator);for(var i=0;i<usersData.length;i++){remainder+=perUser;if(dataStorageRaw[i].length()<=remainder){remainder-=dataStorageRaw[i].length();dataStorage.push(dataStorageRaw[i].getData(dataStorageRaw[i].length()));dataLength+=dataStorage[dataStorage.length-1].length}else{if(dataLength+remainder>number_of_photos){remainder=number_of_photos-dataLength}
var pickedData=[];if(currentFeed.auto_trigger===!1){pickedData=pickedData.concat(dataStorageRaw[i].getData(remainder))}else{if(pickedData.length+wdi_front.getDataLength(currentFeed)+wdi_front.getDataLength(currentFeed,dataStorage)<currentFeed.feed_row.number_of_photos){pickedData=pickedData.concat(dataStorageRaw[i].getData(remainder))}}
remainder=0;dataLength+=pickedData.length;dataStorage.push(pickedData)}}
for(i=0;i<dataStorage.length;i++){if(currentFeed.dataStorage[i]===undefined){currentFeed.dataStorage.push(dataStorage[i])}else{currentFeed.dataStorage[i]=currentFeed.dataStorage[i].concat(dataStorage[i])}}
currentFeed.parsedData=wdi_front.parseLighboxData(currentFeed);for(i=0;i<dataStorage.length;i++){readyData=readyData.concat(dataStorage[i])}
return readyData}
wdi_front.createObject=function(obj,currentFeed){var caption=(obj.caption!=null)?obj.caption.text:'&nbsp';var image_url;if(window.innerWidth>=640){image_url=obj.images.standard_resolution.url;if(currentFeed.feed_row.feed_type=='blog_style'||currentFeed.feed_row.feed_type=='image_browser'){image_url=obj.link+'media?size=l'}}
if(window.innerWidth>=150&&window.innerWidth<640){image_url=obj.images.low_resolution.url;if(currentFeed.feed_row.feed_type=='blog_style'||currentFeed.feed_row.feed_type=='image_browser'){image_url=obj.link+'media?size=l'}}
if(window.innerWidth<150){image_url=obj.images.thumbnail.url;if(currentFeed.feed_row.feed_type=='blog_style'||currentFeed.feed_row.feed_type=='image_browser'){image_url=obj.link+'media?size=m'}}
var videoUrl='';if(obj.type=='video'){videoUrl=obj.videos.standard_resolution.url}
var imageIndex=currentFeed.imageIndex;var photoObject={'id':obj.id,'caption':caption,'image_url':image_url,'likes':obj.likes.count,'comments':obj.comments.count,'wdi_index':imageIndex,'wdi_res_index':currentFeed.resIndex,'link':obj.link,'video_url':videoUrl,'wdi_username':obj.user.username};return photoObject}
wdi_front.setPage=function(currentFeed){var display_type=currentFeed.feed_row.feed_display_view;var feed_type=currentFeed.feed_row.feed_type;if(display_type!='pagination'){return ''}
var imageIndex=currentFeed.imageIndex;if(feed_type=='image_browser'){var divider=1}else{var divider=Math.abs(currentFeed.feed_row.pagination_per_page_number)}
currentFeed.paginator=Math.ceil((imageIndex+1)/divider);return currentFeed.paginator}
wdi_front.getPhotoTemplate=function(currentFeed){var page=wdi_front.setPage(currentFeed);var customClass='';var pagination='';var onclick='';var overlayCustomClass='';var thumbClass='fa-arrows-alt';var showUsernameOnThumb='';if(currentFeed.feed_row.feed_type=='blog_style'||currentFeed.feed_row.feed_type=='image_browser'){thumbClass=''}
if(page!=''){pagination='wdi_page="'+page+'"';sourceAttr='src'}else{sourceAttr='src'}
if(page!=''&&page!=1){customClass='wdi_hidden'}
if(currentFeed.feed_row.show_username_on_thumb=='1'){showUsernameOnThumb='<span class="wdi_media_user">@<%= wdi_username%></span>'}
if(currentFeed.feed_row.show_full_description==1&&currentFeed.feed_row.feed_type=='masonry'){customClass+=' wdi_full_caption'}
var onclickevent="";if(currentFeed.feed_row.feed_type!=="blog_style"){if(currentFeed.feed_row.feed_type=='masonry'){onclickevent="wdi_responsive.showMasonryCaption(jQuery(this),"+currentFeed.feed_row.wdi_feed_counter+");"}else{onclickevent="wdi_responsive.showCaption(jQuery(this),"+currentFeed.feed_row.wdi_feed_counter+");"}}
switch(currentFeed.feed_row.feed_item_onclick){case 'lightbox':{onclick="onclick=wdi_feed_"+currentFeed.feed_row.wdi_feed_counter+".galleryBox('<%=id%>')";break}
case 'instagram':{onclick='onclick="window.open (\'<%= link%>\',\'_blank\')"';overlayCustomClass='wdi_hover_off';thumbClass='';break}
case 'none':{onclick='';overlayCustomClass='wdi_cursor_off wdi_hover_off';thumbClass=''}}
var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var source='<div class="wdi_feed_item '+customClass+'"  wdi_index=<%= wdi_index%>  wdi_res_index=<%= wdi_res_index%> '+pagination+' wdi_type="image" id="wdi_'+wdi_feed_counter+'_<%=id%>">'+'<div class="wdi_photo_wrap">'+'<div class="wdi_photo_wrap_inner">'+'<div class="wdi_photo_img">'+'<img class="wdi_img" '+sourceAttr+'="<%=image_url%>" alt="feed_image" onerror="wdi_front.brokenImageHandler(this);">'+'<div class="wdi_photo_overlay '+overlayCustomClass+'" >'+showUsernameOnThumb+'<div class="wdi_thumb_icon" '+onclick+' style="display:table;width:100%;height:100%;">'+'<div style="display:table-cell;vertical-align:middle;text-align:center;color:white;">'+'<i class="fa '+thumbClass+'"></i>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>';if(currentFeed.feed_row.show_likes==='1'||currentFeed.feed_row.show_comments==='1'||currentFeed.feed_row.show_description==='1'){source+='<div class="wdi_photo_meta">';if(currentFeed.feed_row.show_likes==='1'){source+='<div class="wdi_thumb_likes"><i class="fa fa-heart-o">&nbsp;<%= likes%></i></div>'}
if(currentFeed.feed_row.show_comments==='1'){source+='<div class="wdi_thumb_comments"><i class="fa fa-comment-o">&nbsp;<%= comments%></i></div>'}
source+='<div class="clear"></div>';if(currentFeed.feed_row.show_description==='1'){source+='<div class="wdi_photo_title" onclick='+onclickevent+' >'+'<%=caption%>'+'</div>'}
source+='</div>'}
source+='</div>';var template=_.template(source);return template}
wdi_front.replaceToVideo=function(url,index,feed_counter){overlayHtml="<video style='width:auto !important; height:auto !important; max-width:100% !important; max-height:100% !important; margin:0 !important;' controls=''>"+"<source src='"+url+"' type='video/mp4'>"+"Your browser does not support the video tag. </video>";jQuery('#wdi_feed_'+feed_counter+' [wdi_index="'+index+'"] .wdi_photo_wrap_inner').html(overlayHtml);jQuery('#wdi_feed_'+feed_counter+' [wdi_index="'+index+'"] .wdi_photo_wrap_inner video').get(0).play()}
wdi_front.getVideoTemplate=function(currentFeed){var page=wdi_front.setPage(currentFeed);var customClass='';var pagination='';var thumbClass='fa-play';var onclick='';var overlayCustomClass='';var sourceAttr;var showUsernameOnThumb='';if(page!=''){pagination='wdi_page="'+page+'"';sourceAttr='src'}else{sourceAttr='src'}
if(page!=''&&page!=1){customClass='wdi_hidden'}
if(currentFeed.feed_row.show_username_on_thumb=='1'){showUsernameOnThumb='<span class="wdi_media_user">@<%= wdi_username%></span>'}
if(currentFeed.feed_row.show_full_description==1&&currentFeed.feed_row.feed_type=='masonry'){customClass+=' wdi_full_caption'}
var onclickevent="";if(currentFeed.feed_row.feed_type!=="blog_style"){if(currentFeed.feed_row.feed_type=='masonry'){onclickevent="wdi_responsive.showMasonryCaption(jQuery(this),"+currentFeed.feed_row.wdi_feed_counter+");"}else{onclickevent="wdi_responsive.showCaption(jQuery(this),"+currentFeed.feed_row.wdi_feed_counter+");"}}
switch(currentFeed.feed_row.feed_item_onclick){case 'lightbox':{onclick="onclick=wdi_feed_"+currentFeed.feed_row.wdi_feed_counter+".galleryBox('<%=id%>')";break}
case 'instagram':{onclick='onclick="window.open (\'<%= link%>\',\'_blank\')"';overlayCustomClass='wdi_hover_off';thumbClass='fa-play';break}
case 'none':{overlayCustomClass='wdi_cursor_off wdi_hover_off';thumbClass='';if(currentFeed.feed_row.feed_type=='blog_style'||currentFeed.feed_row.feed_type=='image_browser'){onclick="onclick=wdi_front.replaceToVideo('<%= video_url%>','<%= wdi_index%>',"+currentFeed.feed_row.wdi_feed_counter+")";overlayCustomClass='';thumbClass='fa-play'}}}
var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var source='<div class="wdi_feed_item '+customClass+'"  wdi_index=<%= wdi_index%> wdi_res_index=<%= wdi_res_index%> '+pagination+' wdi_type="image" id="wdi_'+wdi_feed_counter+'_<%=id%>">'+'<div class="wdi_photo_wrap">'+'<div class="wdi_photo_wrap_inner">'+'<div class="wdi_photo_img">'+'<img class="wdi_img" '+sourceAttr+'="<%=image_url%>" alt="feed_image" onerror="wdi_front.brokenImageHandler(this);">'+'<div class="wdi_photo_overlay '+overlayCustomClass+'" '+onclick+'>'+showUsernameOnThumb+'<div class="wdi_thumb_icon" style="display:table;width:100%;height:100%;">'+'<div style="display:table-cell;vertical-align:middle;text-align:center;color:white;">'+'<i class="fa '+thumbClass+'"></i>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>';if(currentFeed.feed_row.show_likes==='1'||currentFeed.feed_row.show_comments==='1'||currentFeed.feed_row.show_description==='1'){source+='<div class="wdi_photo_meta">';if(currentFeed.feed_row.show_likes==='1'){source+='<div class="wdi_thumb_likes"><i class="fa fa-heart-o">&nbsp;<%= likes%></i></div>'}
if(currentFeed.feed_row.show_comments==='1'){source+='<div class="wdi_thumb_comments"><i class="fa fa-comment-o">&nbsp;<%= comments%></i></div>'}
source+='<div class="clear"></div>';if(currentFeed.feed_row.show_description==='1'){source+='<div class="wdi_photo_title" onclick='+onclickevent+' >'+'<%=caption%>'+'</div>'}
source+='</div>'}
source+='</div>';var template=_.template(source);return template}
wdi_front.bindEvents=function(currentFeed){if(currentFeed.feed_row.feed_display_view=='load_more_btn'){jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_load_more_container').on(wdi_front.clickOrTouch,function(){wdi_front.loadMore(jQuery(this).find('.wdi_load_more_wrap'))})}
if(currentFeed.feed_row.feed_display_view=='pagination'){jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' #wdi_next').on(wdi_front.clickOrTouch,function(){wdi_front.paginatorNext(jQuery(this),currentFeed)});jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' #wdi_prev').on(wdi_front.clickOrTouch,function(){wdi_front.paginatorPrev(jQuery(this),currentFeed)});jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' #wdi_last_page').on(wdi_front.clickOrTouch,function(){wdi_front.paginationLastPage(jQuery(this),currentFeed)});jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' #wdi_first_page').on(wdi_front.clickOrTouch,function(){wdi_front.paginationFirstPage(jQuery(this),currentFeed)});currentFeed.paginatorNextFlag=!1}
if(currentFeed.feed_row.feed_display_view=='infinite_scroll'){jQuery(window).on('scroll',function(){wdi_front.infiniteScroll(currentFeed)});currentFeed.infiniteScrollFlag=!1}}
wdi_front.infiniteScroll=function(currentFeed){if(jQuery(window).scrollTop()<=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' #wdi_infinite_scroll').offset().top){if(currentFeed.infiniteScrollFlag===!1&&currentFeed.stopInfiniteScrollFlag==!1){currentFeed.infiniteScrollFlag=!0;wdi_front.loadMore(jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' #wdi_infinite_scroll'),currentFeed)}else if(currentFeed.stopInfiniteScrollFlag){wdi_front.allImagesLoaded(currentFeed)}}}
wdi_front.paginationFirstPage=function(btn,currentFeed){if(currentFeed.paginator==1||currentFeed.currentPage==1){btn.addClass('wdi_disabled');return}
var oldPage=currentFeed.currentPage;currentFeed.currentPage=1;wdi_front.updatePagination(currentFeed,'custom',oldPage);var last_page_btn=btn.parent().find('#wdi_last_page');last_page_btn.removeClass('wdi_disabled');btn.addClass('wdi_disabled')}
wdi_front.paginationLastPage=function(btn,currentFeed){if(currentFeed.paginator==1||currentFeed.currentPage==currentFeed.paginator){return}
var oldPage=currentFeed.currentPage;currentFeed.currentPage=currentFeed.paginator;wdi_front.updatePagination(currentFeed,'custom',oldPage);btn.addClass('wdi_disabled');var first_page_btn=btn.parent().find('#wdi_first_page');first_page_btn.removeClass('wdi_disabled')}
wdi_front.paginatorNext=function(btn,currentFeed){var last_page_btn=btn.parent().find('#wdi_last_page');var first_page_btn=btn.parent().find('#wdi_first_page');currentFeed.paginatorNextFlag=!0;if(currentFeed.paginator==currentFeed.currentPage&&!wdi_front.checkFeedFinished(currentFeed)){currentFeed.currentPage++;var number_of_photos=currentFeed.feed_row.number_of_photos;wdi_front.loadMore(btn,currentFeed,number_of_photos);last_page_btn.addClass('wdi_disabled')}else if(currentFeed.paginator>currentFeed.currentPage){currentFeed.currentPage++;wdi_front.updatePagination(currentFeed,'next');if(currentFeed.paginator>currentFeed.currentPage){last_page_btn.removeClass('wdi_disabled')}else{last_page_btn.addClass('wdi_disabled')}}
first_page_btn.removeClass('wdi_disabled')}
wdi_front.paginatorPrev=function(btn,currentFeed){var last_page_btn=btn.parent().find('#wdi_last_page');var first_page_btn=btn.parent().find('#wdi_first_page');if(currentFeed.currentPage==1){first_page_btn.addClass('wdi_disabled');return}
currentFeed.currentPage--;wdi_front.updatePagination(currentFeed,'prev');last_page_btn.removeClass('wdi_disabled');if(currentFeed.currentPage==1){first_page_btn.addClass('wdi_disabled')}}
wdi_front.updatePagination=function(currentFeed,dir,oldPage){var currentFeedString='#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter;jQuery(currentFeedString+' [wdi_page="'+currentFeed.currentPage+'"]').each(function(){jQuery(this).removeClass('wdi_hidden')});switch(dir){case 'next':{var oldPage=currentFeed.currentPage-1;jQuery(currentFeedString+' .wdi_feed_wrapper').height(jQuery('.wdi_feed_wrapper').height());jQuery(currentFeedString+' [wdi_page="'+oldPage+'"]').each(function(){jQuery(this).addClass('wdi_hidden')});break}
case 'prev':{var oldPage=currentFeed.currentPage+1;jQuery(currentFeedString+' .wdi_feed_wrapper').height(jQuery('.wdi_feed_wrapper').height());jQuery(currentFeedString+' [wdi_page="'+oldPage+'"]').each(function(){jQuery(this).addClass('wdi_hidden')});break}
case 'custom':{var oldPage=oldPage;if(oldPage!=currentFeed.currentPage){jQuery(currentFeedString+' .wdi_feed_wrapper').height(jQuery('.wdi_feed_wrapper').height());jQuery(currentFeedString+' [wdi_page="'+oldPage+'"]').each(function(){jQuery(this).addClass('wdi_hidden')})}
break}}
currentFeed.paginatorNextFlag=!1;jQuery(currentFeedString+' .wdi_feed_wrapper').css('height','auto');jQuery(currentFeedString+' #wdi_current_page').text(currentFeed.currentPage)}
wdi_front.loadMore=function(button,_currentFeed){var dataCounter=0;if(button!=''&&button!=undefined&&button!='initial'&&button!='initial-keep'){var currentFeed=window[button.parent().parent().parent().parent().attr('id')]}
if(_currentFeed!=undefined){var currentFeed=_currentFeed}
var activeFilter=0,finishedFilter=0;for(var i=0;i<currentFeed.userSortFlags.length;i++){if(currentFeed.userSortFlags[i].flag===!0){activeFilter++;for(var j=0;j<currentFeed.usersData.length;j++){if(currentFeed.userSortFlags[i].id===currentFeed.usersData[j].user_id){if(currentFeed.usersData[j].finished==='finished'){finishedFilter++}}}}}
if(activeFilter===finishedFilter&&activeFilter!=0){return}
if(button===''){currentFeed.auto_trigger=!0}else{currentFeed.auto_trigger=!1}
wdi_front.ajaxLoader(currentFeed);if(currentFeed.feed_row.feed_type==='masonry'&&currentFeed.feed_row.feed_display_view=='pagination'){jQuery('#wdi_feed_'+wdi_front.feed_counter+' .wdi_full_caption').each(function(){jQuery(this).find('.wdi_photo_title').trigger(wdi_front.clickOrTouch)})}
for(var i=0;i<currentFeed.usersData.length;i++){if(currentFeed.usersData[i].finished==='finished'){dataCounter++}}
if(dataCounter===currentFeed.usersData.length){wdi_front.allImagesLoaded(currentFeed);jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_load_more').remove()}
var usersData=currentFeed.usersData;currentFeed.loadMoreDataCount=currentFeed.feed_users.length;for(var i=0;i<usersData.length;i++){var pagination=usersData[i].pagination;var user={user_id:usersData[i].user_id,username:usersData[i].username}
if(pagination.next_url!=''&&pagination.next_url!=null&&pagination.next_url!=undefined){var next_url=pagination.next_url;wdi_front.loadMoreRequest(user,next_url,currentFeed,button)}else{if(button=='initial-keep'){currentFeed.temproraryUsersData[i]=currentFeed.usersData[i]}
currentFeed.loadMoreDataCount--;wdi_front.checkForLoadMoreDone(currentFeed,button);continue}}}
wdi_front.loadMoreRequest=function(user,next_url,currentFeed,button){var usersData=currentFeed.usersData;var errorMessage='';currentFeed.instagram.requestByUrl(next_url,{success:function(response){if(response===''||response==undefined||response==null){errorMessage=wdi_front_messages.network_error;currentFeed.loadMoreDataCount--;alert(errorMessage);return}
if(response.meta.code!=200){errorMessage=response.meta.error_message;currentFeed.loadMoreDataCount--;alert(errorMessage);return}
response.user_id=user.user_id;response.username=user.username;for(var i=0;i<currentFeed.usersData.length;i++){if(response.user_id===currentFeed.usersData[i].user_id){if(response.user_id[0]==='#'){response.data=wdi_front.appendRequestHashtag(response.data,response.user_id)}
if(button=='initial-keep'){currentFeed.temproraryUsersData[i]=currentFeed.usersData[i]}
currentFeed.usersData[i]=response;currentFeed.loadMoreDataCount--}}
wdi_front.checkForLoadMoreDone(currentFeed,button)}})}
wdi_front.checkForLoadMoreDone=function(currentFeed,button){var load_more_number=currentFeed.feed_row.load_more_number;var number_of_photos=currentFeed.feed_row.number_of_photos;if(currentFeed.loadMoreDataCount==0){currentFeed.temproraryUsersData=wdi_front.mergeData(currentFeed.temproraryUsersData,currentFeed.usersData);var gettedDataLength=wdi_front.getArrayContentLength(currentFeed.temproraryUsersData,'data');if(button=='initial-keep'){button='initial'}
if(button=='initial'){if(gettedDataLength<number_of_photos&&!wdi_front.userHasNoPhoto(currentFeed,currentFeed.temproraryUsersData)&&currentFeed.instagramRequestCounter<=currentFeed.maxConditionalFiltersRequestCount){wdi_front.loadMore('initial',currentFeed)}else{currentFeed.usersData=currentFeed.temproraryUsersData;wdi_front.displayFeed(currentFeed);wdi_front.applyFilters(currentFeed);currentFeed.temproraryUsersData=[]}}else{if(gettedDataLength<load_more_number&&!wdi_front.userHasNoPhoto(currentFeed,currentFeed.temproraryUsersData)&&currentFeed.instagramRequestCounter<=currentFeed.maxConditionalFiltersRequestCount){wdi_front.loadMore(undefined,currentFeed)}else{currentFeed.usersData=currentFeed.temproraryUsersData;if(!wdi_front.activeUsersCount(currentFeed)){return};wdi_front.displayFeed(currentFeed,load_more_number);wdi_front.applyFilters(currentFeed);currentFeed.temproraryUsersData=[]}}}}
wdi_front.allDataHasFinished=function(currentFeed){var c=0;for(var j=0;j<currentFeed.dataStorageRaw.length;j++){if(currentFeed.dataStorageRaw[j].length()==0&&currentFeed.dataStorageRaw[j].locked==!0){c++}}
return(c==currentFeed.dataStorageRaw.length)}
wdi_front.mergeData=function(array1,array2){for(var i=0;i<array2.length;i++){if(array1[i]!=undefined){if(array2[i].finished=='finished'){continue}
if(array1[i].pagination.next_max_id==undefined){continue}
array1[i].data=array1[i].data.concat(array2[i].data);array1[i].pagination=array2[i].pagination;array1[i].user_id=array2[i].user_id;array1[i].username=array2[i].username;array1[i].meta=array2[i].meta}else{array1.push(array2[i])}}
return array1}
wdi_front.brokenImageHandler=function(source){source.src=wdi_url.plugin_url+"../images/missing.png";source.onerror="";return !0}
wdi_front.ajaxLoader=function(currentFeed){var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var feed_container=jQuery('#wdi_feed_'+wdi_feed_counter);if(currentFeed.feed_row.feed_display_view=='load_more_btn'){feed_container.find('.wdi_load_more').addClass('wdi_hidden');feed_container.find('.wdi_spinner').removeClass('wdi_hidden')}
if(currentFeed.feed_row.feed_display_view=='infinite_scroll'){var loadingDiv;if(feed_container.find('.wdi_ajax_loading').length==0){loadingDiv=jQuery('<div class="wdi_ajax_loading"><div><div><img class="wdi_load_more_spinner" src="'+wdi_url.plugin_url+'../images/ajax_loader.png"></div></div></div>');feed_container.append(loadingDiv)}else{loadingDiv=feed_container.find('.wdi_ajax_loading')}
loadingDiv.removeClass('wdi_hidden')}}
wdi_front.allImagesLoaded=function(currentFeed){var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var feed_container=jQuery('#wdi_feed_'+wdi_feed_counter);if(currentFeed.feed_row.feed_display_view=='load_more_btn'){feed_container.find('.wdi_load_more').removeClass('wdi_hidden');feed_container.find('.wdi_spinner').addClass('wdi_hidden')}
if(currentFeed.feed_row.feed_display_view=='infinite_scroll'){jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_ajax_loading').addClass('wdi_hidden')}
feed_container.trigger('wdi_feed_loaded')}
wdi_front.show=function(name,currentFeed){var wdi_feed_counter=currentFeed.feed_row.wdi_feed_counter;var feed_container=jQuery('#wdi_feed_'+wdi_feed_counter+' .wdi_feed_container');var _this=this;switch(name){case 'header':{show_header();break}
case 'users':{show_users(currentFeed);break}}
function show_header(){var templateData={'feed_thumb':currentFeed.feed_row.feed_thumb,'feed_name':currentFeed.feed_row.feed_name,};var headerTemplate=wdi_front.getHeaderTemplate(),html=headerTemplate(templateData),containerHtml=feed_container.find('.wdi_feed_header').html();feed_container.find('.wdi_feed_header').html(containerHtml+html)}
function show_users(currentFeed){feed_container.find('.wdi_feed_users').html('');var users=currentFeed.feed_users;var access_token=currentFeed.feed_row.access_token;var i=0;currentFeed.headerUserinfo=[];getThumb();function getThumb(){if(currentFeed.headerUserinfo.length==users.length){escapeRequest(currentFeed.headerUserinfo,currentFeed);return}
var _user=users[currentFeed.headerUserinfo.length];switch(_this.getInputType(_user.username)){case 'hashtag':{currentFeed.instagram.getTagRecentMedia(_this.stripHashtag(_user.username),{success:function(response){response=_this.checkMediaResponse(response);if(response!=!1){if(response.data.length==0){thumb_img=''}else{thumb_img=response.data[0].images.thumbnail.url}
var obj={name:users[i].username,url:thumb_img,};i++;currentFeed.headerUserinfo.push(obj);getThumb()}},args:{ignoreFiltering:!0,}});break}
case 'user':{currentFeed.instagram.getUserInfo(_user.id,{success:function(response){response=_this.checkMediaResponse(response);if(response!=!1){var obj={id:response.data.id,name:response.data.username,url:response.data.profile_picture,bio:response.data.bio,counts:response.data.counts,website:response.data.website,full_name:response.data.full_name}
currentFeed.headerUserinfo.push(obj);i++;getThumb()}},args:{ignoreFiltering:!0,}})
break}}}
function escapeRequest(info,currentFeed){feed_container.find('.wdi_feed_users').html('');for(var k=0;k<info.length;k++){var userFilter={'flag':!1,'id':info[k].id,'name':info[k].name};var hashtagClass=(info[k].name[0]=='#')?'wdi_header_hashtag':'';var templateData={'user_index':k,'user_img_url':info[k].url,'counts':info[k].counts,'feed_counter':currentFeed.feed_row.wdi_feed_counter,'user_name':info[k].name,'bio':info[k].bio,'usersCount':currentFeed.feed_row.feed_users.length,'hashtagClass':hashtagClass};var userTemplate=wdi_front.getUserTemplate(currentFeed,info[k].name),html=userTemplate(templateData),containerHtml=feed_container.find('.wdi_feed_users').html();feed_container.find('.wdi_feed_users').html(containerHtml+html);currentFeed.userSortFlags.push(userFilter);var clearFloat=jQuery('<div class="clear"></div>')}
feed_container.find('.wdi_feed_users').append(clearFloat);wdi_front.updateUsersImages(currentFeed)}}}
wdi_front.getUserTemplate=function(currentFeed,username){var usersCount=currentFeed.feed_row.feed_users.split(',').length,instagramLink,instagramLinkOnClick,js;switch(username[0]){case '#':{instagramLink='//instagram.com/explore/tags/'+username.substr(1,username.length);break}
default:{instagramLink='//instagram.com/'+username;break}}
js='window.open("'+instagramLink+'","_blank")';instagramLinkOnClick="onclick='"+js+"'";var source='<div class="wdi_single_user" user_index="<%=user_index%>">'+'<div class="wdi_header_user_text <%=hashtagClass%>">'+'<div class="wdi_user_img_wrap">'+'<img onerror="wdi_front.brokenImageHandler(this);" src="<%= user_img_url%>">';if(usersCount>1){source+='<div  title="'+wdi_front_messages.filter_title+'" class="wdi_filter_overlay">'+'<div  class="wdi_filter_icon">'+'<span onclick="wdi_front.addFilter(<%=user_index%>,<%=feed_counter%>);" class="fa fa-filter"></span>'+'</div>'+'</div>'}
source+='</div>';source+='<h3 '+instagramLinkOnClick+'><%= user_name%></h3>';if(username[0]!=='#'){if(currentFeed.feed_row.follow_on_instagram_btn=='1'){source+='<div class="wdi_user_controls">'+'<div class="wdi_follow_btn" onclick="window.open(\'//instagram.com/<%= user_name%>\',\'_blank\')"><span> Follow</span></div>'+'</div>'}
source+='<div class="wdi_media_info">'+'<p class="wdi_posts"><span class="fa fa-camera-retro"><%= counts.media%></span></p>'+'<p class="wdi_followers"><span class="fa fa-user"><%= counts.followed_by%></span></p>'+'</div>'}else{source+='<div class="wdi_user_controls">'+'</div>'+'<div class="wdi_media_info">'+'<p class="wdi_posts"><span></span></p>'+'<p class="wdi_followers"><span></span></p>'+'</div>'}
if(usersCount==1&&username[0]!=='#'&&currentFeed.feed_row.display_user_info=='1'){source+='<div class="wdi_bio"><%= bio%></div>'}
source+='</div>'+'</div>';var template=_.template(source);return template}
wdi_front.getHeaderTemplate=function(){var source='<div class="wdi_header_wrapper">'+'<div class="wdi_header_img_wrap">'+'<img src="<%=feed_thumb%>">'+'</div>'+'<div class="wdi_header_text"><%=feed_name%></div>'+'<div class="clear">'+'</div>';var template=_.template(source);return template}
wdi_front.addFilter=function(index,feed_counter){var currentFeed=window['wdi_feed_'+feed_counter];var usersCount=currentFeed.feed_row.feed_users.split(',').length;if(usersCount<2){return}
if(currentFeed.nowLoadingImages!=!1){return}else{var userDiv=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+'_users [user_index="'+index+'"]');userDiv.find('.wdi_filter_overlay').toggleClass('wdi_filter_active_bg');userDiv.find('.wdi_header_user_text h3').toggleClass('wdi_filter_active_col');userDiv.find('.wdi_media_info').toggleClass('wdi_filter_active_col');userDiv.find('.wdi_follow_btn').toggleClass('wdi_filter_active_col');currentFeed.customFilterChanged=!0;if(currentFeed.userSortFlags[index].flag==!1){currentFeed.userSortFlags[index].flag=!0}else{currentFeed.userSortFlags[index].flag=!1}
var activeFilterCount=0;for(var j=0;j<currentFeed.userSortFlags.length;j++){if(currentFeed.userSortFlags[j].flag==!0){activeFilterCount++}}
if(currentFeed.feed_row.feed_display_view=='pagination'){currentFeed.resIndex=0}
if(activeFilterCount!=0){wdi_front.filterData(currentFeed);wdi_front.displayFeed(currentFeed)}else{currentFeed.customFilteredData=currentFeed.dataStorageList;wdi_front.displayFeed(currentFeed)}
if(currentFeed.feed_row.feed_display_view=='pagination'){currentFeed.paginator=Math.ceil((currentFeed.imageIndex)/parseInt(currentFeed.feed_row.pagination_per_page_number));currentFeed.currentPage=currentFeed.paginator;wdi_front.updatePagination(currentFeed,'custom',1);jQuery('#wdi_first_page').removeClass('wdi_disabled');jQuery('#wdi_last_page').addClass('wdi_disabled')}}}
wdi_front.filterData=function(currentFeed){var users=currentFeed.userSortFlags;currentFeed.customFilteredData=[];for(var i=0;i<currentFeed.dataStorageList.length;i++){for(var j=0;j<users.length;j++){if((currentFeed.dataStorageList[i].user.id==users[j].id||currentFeed.dataStorageList[i].wdi_hashtag==users[j].name)&&users[j].flag==!0){currentFeed.customFilteredData.push(currentFeed.dataStorageList[i])}}}}
wdi_front.applyFilters=function(currentFeed){for(var i=0;i<currentFeed.userSortFlags.length;i++){if(currentFeed.userSortFlags[i].flag==!0){var userDiv=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+'[user_index="'+i+'"]');wdi_front.addFilter(i,currentFeed.feed_row.wdi_feed_counter);wdi_front.addFilter(i,currentFeed.feed_row.wdi_feed_counter)}}}
wdi_front.getImgCount=function(currentFeed){var dataStorage=currentFeed.dataStorage;var count=0;for(var i=0;i<dataStorage.length;i++){count+=dataStorage[i].length}
return count}
wdi_front.parseLighboxData=function(currentFeed,filterFlag){var dataStorage=currentFeed.dataStorage;var sortImagesBy=currentFeed.feed_row.sort_images_by;var sortOrder=currentFeed.feed_row.display_order;var sortOperator=wdi_front.sortingOperator(sortImagesBy,sortOrder);var data=[];var popupData=[];var obj={};if(filterFlag==!0){data=currentFeed.customFilteredData}else{for(var i=0;i<dataStorage.length;i++){for(var j=0;j<dataStorage[i].length;j++){data.push(dataStorage[i][j])}}
data.sort(sortOperator)}
for(i=0;i<data.length;i++){obj={'alt':'','avg_rating':'','comment_count':data[i].comments.count,'date':wdi_front.convertUnixDate(data[i].created_time),'description':wdi_front.getDescription((data[i].caption!==null)?data[i].caption.text:''),'filename':wdi_front.getFileName(data[i]),'filetype':wdi_front.getFileType(data[i].type),'hit_count':'0','id':data[i].id,'image_url':data[i].link,'number':0,'rate':'','rate_count':'0','username':data[i].user.username,'profile_picture':data[i].user.profile_picture,'thumb_url':data[i].link+'media/?size=t','comments_data':data[i].comments.data}
popupData.push(obj)}
return popupData}
wdi_front.convertUnixDate=function(date){var utcSeconds=parseInt(date);var newDate=new Date(0);newDate.setUTCSeconds(utcSeconds);var str=newDate.getFullYear()+'-'+newDate.getMonth()+'-'+newDate.getDate();str+=' '+newDate.getHours()+':'+newDate.getMinutes();return str}
wdi_front.getDescription=function(desc){desc=desc.replace(/\r?\n|\r/g,' ');return desc}
wdi_front.getFileName=function(data){var link=data.link;var type=data.type;if(type==='image'){var linkFragments=link.split('/');return linkFragments[linkFragments.length-2]}else{return data.videos.standard_resolution.url}}
wdi_front.getFileType=function(type){if(type==='image'){return "EMBED_OEMBED_INSTAGRAM_IMAGE"}
if(type==='video'){return "EMBED_OEMBED_INSTAGRAM_VIDEO"}}
wdi_front.array_max=function(array){var max=array[0];var minIndex=0;for(var i=1;i<array.length;i++){if(max<array[i]){max=array[i];minIndex=i}}
return{'value':max,'index':minIndex}}
wdi_front.array_min=function(array){var min=array[0];var minIndex=0;for(var i=1;i<array.length;i++){if(min>array[i]){min=array[i];minIndex=i}}
return{'value':min,'index':minIndex}}
wdi_front.activeUsersCount=function(currentFeed){var counter=0;for(var i=0;i<currentFeed.usersData.length;i++){if(currentFeed.usersData[i].finished!='finished'){counter++}}
return counter}
wdi_front.checkMediaResponse=function(response){if(response==''||response==undefined||response==null){errorMessage=wdi_front_messages.connection_error;alert(errorMessage);return !1}
if(response.meta.code!=200){errorMessage=response.meta.error_message;alert(errorMessage);return !1}
return response}
wdi_front.stripHashtag=function(hashtag){switch(hashtag[0]){case '#':{return hashtag.substr(1,hashtag.length);break}
default:{return hashtag;break}}}
wdi_front.getInputType=function(input){switch(input[0]){case '#':{return 'hashtag';break}
case '%':{return 'location';break}
default:{return 'user';break}}}
wdi_front.regexpTestCaption=function(captionText,searchkey){var flag1=!1,flag2=!1,matchIndexes=[],escKey=searchkey.replace(/[-[\]{}()*+?.,\\^$|]/g,"\\$&"),regexp1=new RegExp("(?:^|\\s)"+escKey+"(?:^|\\s)"),regexp2=new RegExp("(?:^|\\s)"+escKey,'g');if(regexp1.exec(captionText)!=null){flag1=!0}
while((match=regexp2.exec(captionText))!=null){if(match.index==captionText.length-searchkey.length-1){flag2=!0}}
if(flag1==!0||flag2==!0){return !0}else{return !1}}
wdi_front.replaceNewLines=function(string){var delimeter="vUkCJvN2ps3t",matchIndexes=[],regexp;string=string.replace(/\r?\n|\r/g,delimeter);regexp=new RegExp(delimeter,'g');while((match=regexp.exec(string))!=null){matchIndexes.push(match.index)}
var pieces=string.split(delimeter);var foundFlag=0;for(var i=0;i<pieces.length;i++){if(pieces[i]==''){foundFlag++}else{foundFlag=0}
if(foundFlag>0){pieces.splice(i,1);foundFlag--;i--}}
string=pieces.join(' ');return string}
wdi_front.isEmptyObject=function(obj){for(var prop in obj){if(obj.hasOwnProperty(prop))
return !1}
return !0}
var WDIFeed=function(obj){this['data']=obj.data
this['dataCount']=obj.dataCount
this['feed_row']=obj.feed_row
this['usersData']=obj.usersData};WDIFeed.prototype.conditionalFilter=function(response,args){var currentFeed=this,conditional_filter_type=currentFeed.feed_row.conditional_filter_type,filters=currentFeed.feed_row.conditional_filters;if(args.ignoreFiltering==!0){}else{response=this.avoidDuplicateMedia(response)}
if(!wdi_front.isJsonString(filters)){return response}else{filters=JSON.parse(filters);if(filters.length==0){return response}}
if(currentFeed.feed_row.conditional_filter_enable=='0'){return response}
currentFeed.instagramRequestCounter++;switch(conditional_filter_type){case 'AND':{response=this.applyANDLogic(response,filters,currentFeed);break}
case 'OR':{response=this.applyORLogic(response,filters,currentFeed)
break}
case 'NOR':{response=this.applyNORLogic(response,filters,currentFeed)
break}
default:{break}}
return response}
WDIFeed.prototype.applyANDLogic=function(response,filters){var currentFeed=this;for(var i=0;i<filters.length;i++){response=this.filterResponse(response,filters[i])}
return response}
WDIFeed.prototype.applyORLogic=function(response,filters){var currentFeed=this;var allData=[],res,mergedData=[],returnObject,media;for(var i=0;i<filters.length;i++){res=this.filterResponse(response,filters[i]);allData=allData.concat(res.data);res={}}
for(i=0;i<allData.length;i++){media=allData[i];if(!this.mediaExists(media,mergedData)&&!this.mediaExists(media,currentFeed.dataStorageList)){mergedData.push(media)}}
returnObject={data:mergedData,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.applyNORLogic=function(response,filters){var res=response,currentFeed=this,matchedData=this.applyORLogic(response,filters,currentFeed),mergedData=[],returnObject;for(var i=0;i<res.data.length;i++){if(!this.mediaExists(res.data[i],matchedData.data)){mergedData.push(res.data[i])}}
returnObject={data:mergedData,meta:res.meta,pagination:res.pagination}
return returnObject}
WDIFeed.prototype.mediaExists=function(media,array){for(var i=0;i<array.length;i++){if(media.id==array[i].id){return !0}}
return !1}
WDIFeed.prototype.filterResponse=function(response,filter){switch(filter.filter_type){case 'hashtag':{return this.filterByHashtag(response,filter);break}
case 'username':{return this.filterByUsername(response,filter);break}
case 'mention':{return this.filterByMention(response,filter);break}
case 'description':{return this.filterByDescription(response,filter);break}
case 'location':{return this.filterByLocation(response,filter);break}
case 'url':{return this.filterByUrl(response,filter);break}}}
WDIFeed.prototype.filterByHashtag=function(response,filter){var filteredResponse=[],currentTag,media,returnObject;for(var i=0;i<response.data.length;i++){media=response.data[i];for(var j=0;j<media.tags.length;j++){tag=media.tags[j];if(tag.toLowerCase()==filter.filter_by.toLowerCase()){filteredResponse.push(media)}}}
returnObject={data:filteredResponse,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.filterByUsername=function(response,filter){var filteredResponse=[],media,returnObject;for(var i=0;i<response.data.length;i++){media=response.data[i];if(media.user.username.toLowerCase()==filter.filter_by.toLowerCase()){filteredResponse.push(media)}}
returnObject={data:filteredResponse,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.filterByMention=function(response,filter){var filteredResponse=[],media,captionText,returnObject;for(var i=0;i<response.data.length;i++){media=response.data[i];if(media.caption!==null){captionText=media.caption.text.toLowerCase();if(captionText.indexOf('@'+filter.filter_by.toLowerCase())!=-1){filteredResponse.push(media)}}}
returnObject={data:filteredResponse,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.filterByDescription=function(response,filter){var filteredResponse=[],media,captionText,returnObject;for(var i=0;i<response.data.length;i++){media=response.data[i];if(media.caption!==null){captionText=media.caption.text.toLowerCase();captionText=wdi_front.replaceNewLines(captionText);var searchkey=filter.filter_by.toLowerCase();if(wdi_front.regexpTestCaption(captionText,searchkey)){filteredResponse.push(media)}}}
returnObject={data:filteredResponse,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.filterByLocation=function(response,filter){var filteredResponse=[],media,locationId,returnObject;for(var i=0;i<response.data.length;i++){media=response.data[i];if(media.location!==null){locationId=media.location.id;if(locationId==filter.filter_by){filteredResponse.push(media)}}}
returnObject={data:filteredResponse,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.filterByUrl=function(response,filter){var filteredResponse=[],media,id,returnObject,filter_by;filter.filter_by=this.getIdFromUrl(filter.filter_by);for(var i=0;i<response.data.length;i++){media=response.data[i];if(media.link!==null){id=this.getIdFromUrl(media.link);if(id==filter.filter_by){filteredResponse.push(media)}}}
returnObject={data:filteredResponse,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.getIdFromUrl=function(url){var url_parts=url.split('/'),id=!1;for(var i=0;i<url_parts.length;i++){if(url_parts[i]=='p'){if(typeof url_parts[i+1]!='undefined'){id=url_parts[i+1];break}}};return id}
WDIFeed.prototype.avoidDuplicateMedia=function(response){var data=response.data,uniqueData=[],returnObject={};for(var i=0;i<data.length;i++){if(!this.mediaExists(data[i],this.dataStorageList)&&!this.mediaExists(data[i],uniqueData)&&!this.mediaExists(data[i],this.conditionalFilterBuffer)){uniqueData.push(data[i])}}
this.conditionalFilterBuffer=this.conditionalFilterBuffer.concat(uniqueData);returnObject={data:uniqueData,meta:response.meta,pagination:response.pagination}
return returnObject}
WDIFeed.prototype.storeRawData=function(objects,variable){var _this=this;if(typeof this[variable]=="object"&&typeof this[variable].length=="number"){for(var i=0;i<objects.length;i++){var hash_id="";if(wdi_front.isHashtag(objects[i].user_id)){hash_id=objects[i].pagination.next_max_tag_id}else{hash_id=objects[i].pagination.next_max_id;if(typeof hash_id=="undefined"){hash_id=""}}
if(typeof this[variable][i]=="undefined"){this[variable].push({data:objects[i].data,index:0,locked:!1,hash_id:hash_id,usersDataFinished:!1,userId:objects[i].user_id,length:function(){return this.data.length-this.index},getData:function(num){var data=this.data.slice(this.index,this.index+num);this.index+=Math.min(num,this.length());if(this.index==this.data.length&&this.locked==!0&&this.usersDataFinished==!1){for(var j=0;j<_this.usersData.length;j++){if(_this.usersData[j].user_id==this.userId){_this.usersData[j].finished="finished";this.usersDataFinished=!0;break}}}
return data}})}else{if(this[variable][i].locked==!1){if(hash_id!=this[variable][i].hash_id){this[variable][i].data=this[variable][i].data.concat(objects[i].data);this[variable][i].hash_id=hash_id}else{this[variable][i].locked=!0}}}}}}
wdi_front.updateUsersIfNecessary=function(currentFeed){var users=currentFeed.feed_users;var ifUpdateNecessary=!1;for(var i=0;i<users.length;i++){if("#"==users[i].username.substr(0,1)){users[i].id=users[i].username;continue}
if(""==users[i].id||'username'==users[i].id){ifUpdateNecessary=!0;currentFeed.instagram.searchForUsersByName(users[i].username,{success:function(res){if(res.meta.code==200&&res.data.length>0){var found=!1;for(var k=0;k<res.data.length;k++){if(res.data[k].username==res.args.username){found=!0;break}}
if(found){for(var j=0;j<users.length;j++){if(res.data[k].username==users[j].username){users[j].id=res.data[k].id}}}}
var noid_user_left=!1;for(var m=0;m<users.length;m++){if(users[m].id==""||users[m].id=="username"){noid_user_left=!0;break}}
if(!noid_user_left){currentFeed.feed_row.feed_users=JSON.stringify(users);wdi_front.init(currentFeed)}},username:users[i].username})}}
return ifUpdateNecessary}
;;
jQuery(document).ready(function(){});function wdi_responsive(){};wdi_responsive.columnControl=function(currentFeed,load,customWidth){currentFeed.openRows=[];if(load===1){var wrapper=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+" .wdi_feed_wrapper");var itemWidth=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+" .wdi_feed_item").css('width')+'';var containerWidth=wrapper.width();if(itemWidth.substr(itemWidth.length-2,itemWidth.length)=='px'){itemWidth=parseFloat(itemWidth)}else{itemWidth=0.01*containerWidth*parseFloat(itemWidth)}
if(currentFeed.feed_row.feed_type=='masonry'){var itemWidth=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+" .wdi_masonry_column").width()}
if(customWidth!=undefined){itemWidth=customWidth}
var currentClass=wrapper.attr('wdi-res');var newClass=currentClass.substr(0,8)+Math.round(containerWidth/itemWidth);wrapper.removeClass(currentClass);wrapper.attr('wdi-res',newClass);wrapper.addClass(newClass);if(currentClass!=newClass){var colNum=newClass.substr(8,newClass.length);if(currentFeed.feed_row.feed_display_view=='pagination'){currentFeed.freeSpaces=(Math.floor(currentFeed.feed_row.pagination_per_page_number/Math.round(containerWidth/itemWidth))+1)*Math.round(containerWidth/itemWidth)-currentFeed.feed_row.pagination_per_page_number;if(currentFeed.freeSpaces%colNum==0){currentFeed.freeSpaces=0}
currentFeed.resIndex=0;var k=0;jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_feed_item').each(function(){jQuery(this).attr('wdi_res_index',currentFeed.resIndex);if((k+1)%currentFeed.feed_row.pagination_per_page_number===0){currentFeed.resIndex+=currentFeed.freeSpaces+1}else{currentFeed.resIndex++}
k++})}}}else{jQuery(window).resize(function(){var wrapper=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+" .wdi_feed_wrapper");if(wrapper.length==0){return}
var itemWidth=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+" .wdi_feed_item").css('width')+'';var containerWidth=wrapper.width();if(itemWidth.substr(itemWidth.length-2,itemWidth.length)=='px'){itemWidth=parseFloat(itemWidth)}else{itemWidth=0.01*containerWidth*parseFloat(itemWidth)}
var currentClass=wrapper.attr('wdi-res');if(currentFeed.feed_row.feed_type=='masonry'){var itemWidth=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+" .wdi_masonry_column").width()}
var newClass=currentClass.substr(0,8)+Math.round(containerWidth/itemWidth);wrapper.removeClass(currentClass);wrapper.attr('wdi-res',newClass);wrapper.addClass(newClass);if(currentFeed.feed_row.feed_type==='thumbnails'){wdi_responsive.fixRow(currentFeed)}
if(currentFeed.feed_row.feed_type==='masonry'){if(currentClass!=newClass){wdi_front.ajaxLoader(currentFeed);var colNum=newClass.substr(8,newClass.length);wrapper.html('');var newCols='';for(var i=0;i<colNum;i++){newCols+='<div class="wdi_masonry_column" wdi_mas_col="'+i+'"></div>'}
newCols+='<div class="clear">';wrapper.html(newCols);currentFeed.imageIndex=0;currentFeed.resIndex=0;var dataToBeDisplayed=currentFeed.displayedData;currentFeed.displayedData=[];wdi_front.masonryDisplayFeedItems(dataToBeDisplayed,currentFeed);wdi_front.applyFilters(currentFeed);wdi_front.allImagesLoaded(currentFeed)}}
if(currentClass!=newClass){var colNum=newClass.substr(8,newClass.length);if(currentFeed.feed_row.feed_display_view=='pagination'){currentFeed.freeSpaces=(Math.floor(currentFeed.feed_row.number_of_photos/Math.round(containerWidth/itemWidth))+1)*Math.round(containerWidth/itemWidth)-currentFeed.feed_row.number_of_photos;if(currentFeed.freeSpaces%colNum==0){currentFeed.freeSpaces=0}
currentFeed.resIndex=0;var k=0;jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_feed_item').each(function(){jQuery(this).attr('wdi_res_index',currentFeed.resIndex);if((k+1)%currentFeed.feed_row.pagination_per_page_number===0){currentFeed.resIndex+=currentFeed.freeSpaces+1}else{currentFeed.resIndex++}
k++})}}})}};wdi_responsive.bindCaptionEvent=function(imgtitle,currentFeed){}
wdi_responsive.bindMasonryCaptionEvent=function(imgtitle,currentFeed){}
wdi_responsive.showCaption=function(caption,currentFeedCounter){var currentFeed=window["wdi_feed_"+currentFeedCounter]
var imgItem=caption.parent().parent();if(currentFeed.feed_row.feed_display_view==='pagination'){var indexType='wdi_res_index'}else{var indexType='wdi_index'}
var imgIndex=imgItem.attr(indexType);var colClass=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_feed_wrapper').attr('wdi-res');var colNum=parseInt(colClass.substr(8,colClass.length));var imgBeforRows=Math.floor(imgIndex/colNum);var indexInRow=imgIndex-colNum*imgBeforRows;var indexes=[];for(var i=0;i<colNum;i++){var rowIndex=i+(imgBeforRows)*colNum;indexes.push(rowIndex)}
if(imgItem.hasClass('wdi_full_caption')){caption.css('white-space','nowrap');imgItem.removeClass('wdi_full_caption')}else{caption.css('white-space','normal');imgItem.addClass('wdi_full_caption');imgItem.attr('wdi_scroll_to',imgItem.offset().top-50)}
imgItem.css('height','auto');var maxHeight=0;for(var i=0;i<indexes.length;i++){var currentItem=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_feed_wrapper ['+indexType+'='+indexes[i]+']');currentItem.addClass('wdi_row_affected');currentItem.css('height','auto');if(maxHeight<currentItem.height()&&currentItem.hasClass('wdi_full_caption')){maxHeight=currentItem.height()}}
if(maxHeight==0){maxHeight=imgItem.height()}
for(var i=0;i<indexes.length;i++){var currentItem=jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_feed_wrapper ['+indexType+'='+indexes[i]+']');currentItem.height(maxHeight)}
currentFeed.affectedRow=!0}
wdi_responsive.fixRow=function(currentFeed){jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_row_affected').each(function(){jQuery(this).css('height','auto');jQuery(this).removeClass('wdi_row_affected')});if(currentFeed.feed_row.feed_display_view==='pagination'){jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_full_caption').each(function(){if(!jQuery(this).hasClass('wdi_hidden')){jQuery(this).find('.wdi_photo_title').trigger(wdi_front.clickOrTouch);jQuery(this).find('.wdi_photo_title').trigger(wdi_front.clickOrTouch)}})}else{jQuery('#wdi_feed_'+currentFeed.feed_row.wdi_feed_counter+' .wdi_full_caption').each(function(){jQuery(this).find('.wdi_photo_title').trigger(wdi_front.clickOrTouch);jQuery(this).find('.wdi_photo_title').trigger(wdi_front.clickOrTouch)})}}
wdi_responsive.showMasonryCaption=function(caption,currentFeedCounter){var currentFeed=window["wdi_feed_"+currentFeedCounter];var imgItem=caption.parent().parent();if(imgItem.hasClass('wdi_full_caption')){caption.css('white-space','nowrap');imgItem.removeClass('wdi_full_caption')}else{imgItem.attr('wdi_scroll_to',imgItem.offset().top-50);caption.css('white-space','normal');imgItem.addClass('wdi_full_caption')}}