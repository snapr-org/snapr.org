(self.webpackChunksnapr_org=self.webpackChunksnapr_org||[]).push([[610],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),i=a(6742),m=a(9732),c=a(7277),o=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,E=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=e.children,v=e.frontMatter,f=e.metadata,_=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,Z=f.date,T=f.formattedDate,w=f.permalink,P=f.tags,M=f.readingTime,I=f.title,L=f.editUrl,x=v.author,y=v.image,U=v.keywords,A=v.author_url||v.authorURL,C=v.author_title||v.authorTitle,R=v.author_image_url||v.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(o.Z,{keywords:U,image:y}),r.createElement("article",{className:k?void 0:"margin-bottom--xl"},(p=k?"h1":"h2",r.createElement("header",null,r.createElement(p,{className:d},k?I:r.createElement(i.Z,{to:w},I)),r.createElement("div",{className:(0,l.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:Z},T),M&&r.createElement(r.Fragment,null," \xb7 ",E(M))),r.createElement("div",{className:"avatar margin-vert--md"},R&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:A},r.createElement("img",{src:R,alt:x})),r.createElement("div",{className:"avatar__intro"},x&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:A},x)),r.createElement("small",{className:"avatar__subtitle"},C)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},b)),(P.length>0||_)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[h]=k,t))},P.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return r.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),k&&L&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:L})),!k&&_&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+I},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),l=a(6010),n=a(6742),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",c="sidebarItem_2UVv",o="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",d=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:u},e.title))}))))}},9404:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(9349),n=a(3146),s=a(6742),i=a(5601),m=a(4973),c=a(9732);t.default=function(e){var t,a=e.metadata,o=e.items,u=e.sidebar,d=a.allTagsPath,g=a.name,h=a.count,p=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),E=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(h),tagName:g});return r.createElement(l.Z,{title:E,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(i.Z,{sidebar:u})),r.createElement("main",{className:"col col--7"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,E),r.createElement(s.Z,{href:d},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))}))))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(7294),l=a(4973),n=a(2122),s=a(9756),i=a(6010),m="iconEdit_2_ui",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(o,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);