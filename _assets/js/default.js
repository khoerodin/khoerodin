function windowPopup(t,e,o){var i=screen.width/2-e/2,n=screen.height/2-o/2;window.open(t,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+e+",height="+o+",top="+n+",left="+i)}$(document).ready(function(){$("div.side-icons").length>0&&$(window).on("scroll",function(){var t=$(".side-icons").offset().top-10,e=$(".single-content").offset().top,o=$(".comments").offset().top;screen.width<980?additional=50:additional=190,t>e&&t+additional<o?($(".side-icons").removeClass("transparent"),$(".side-icons").addClass("solid"),$(".side-icons .icon-item").css("cursor","pointer"),click_share=!0):t+additional>=o?($(".side-icons").addClass("transparent"),$(".side-icons").removeClass("solid"),$(".side-icons .icon-item").css("cursor","default"),click_share=!1):($(".side-icons").addClass("transparent"),$(".side-icons").removeClass("solid"),$(".side-icons .icon-item").css("cursor","default"),click_share=!1)})});var currentURL=window.location.protocol+"/"+window.location.host+window.location.pathname;$(document).on("click",".share-to-tw",function(t){1==click_share&&(t.preventDefault(),title=$(".parent-title a").text()+" "+$(".title").text(),tweetUrl="https://twitter.com/intent/tweet/?text="+title+"&url="+encodeURI(currentURL),windowPopup(tweetUrl,500,300))}),$(document).on("click",".share-to-fb",function(t){if(1==click_share){t.preventDefault();var e=$(this).attr("data-share");windowPopup(e,500,300)}}),$(document).ready(function(){function t(t){$.isArray(t)?$(t).each(function(t,e){$(e).click(function(t){t.preventDefault()})}):$(t).click(function(t){t.preventDefault()})}hljs.initHighlightingOnLoad(),$("pre:has(code)").css("margin-bottom","25px"),t(["a.active"]),NProgress.set(1),$(document).on("click","a.local",function(t){function e(){i++,i<=4?(setTimeout(e,200),val=i/20,NProgress.inc(val)):window.location=o}t.preventDefault();var o=this.getAttribute("href"),i=0;setTimeout(e,200)});var e=window.location.protocol+"//"+top.location.host.toString(),o=$("a[href^='"+e+"'], a[href^='/'], a[href^='./'], a[href^='../']");o.addClass("local")});