(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog-details"],{"19d4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-widget__wrapper"},[a("div",{staticClass:"blog-widget mt-30"},[a("h4",{staticClass:"blog-widget__title"},[t._v(t._s(t.sidebar.searchTitle))]),t._m(0)]),a("div",{staticClass:"blog-widget mt-30"},[a("h4",{staticClass:"blog-widget__title"},[t._v(t._s(t.sidebar.categoryTitle))]),a("ul",{staticClass:"blog-widget__categories"},t._l(t.sidebar.categories,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:"/blog"}},[t._v(t._s(e.title))]),a("span",[t._v("("+t._s(e.count)+")")])],1)})),0)]),a("div",{staticClass:"blog-widget mt-30"},[a("h4",{staticClass:"blog-widget__title"},[t._v(t._s(t.sidebar.recentPostTitle))]),a("ul",{staticClass:"recent-posts-inner"},t._l(t.sidebar.recentPosts,(function(e){return a("li",{key:e.id,staticClass:"recent-posts"},[a("div",{staticClass:"recent-posts-image"},[a("router-link",{attrs:{to:"/blog-details"}},[a("img",{attrs:{src:e.image,alt:e.alt}})])],1),a("div",{staticClass:"recent-posts-body"},[a("span",{staticClass:"recent-posts-meta"},[t._v(t._s(e.date))]),a("h6",{staticClass:"recent-posts-title"},[a("router-link",{attrs:{to:"/blog-details"}},[t._v(" "+t._s(e.title)+" ")])],1)])])})),0)]),a("div",{staticClass:"blog-widget mt-30"},[a("h4",{staticClass:"blog-widget__title"},[t._v(t._s(t.sidebar.tagTitle))]),a("div",{staticClass:"blog-tag"},t._l(t.sidebar.tags,(function(e){return a("router-link",{key:e.id,attrs:{to:e.link}},[t._v(" "+t._s(e.name)+" ")])})),1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"widget-search-form"},[a("input",{staticClass:"search-field",attrs:{placeholder:"Search keyword",type:"text"}}),a("button",{staticClass:"search-btn",attrs:{type:"submit"}},[a("i",{staticClass:"fa fa-search"})])])}],l={props:["sidebar"]},o=l,r=a("2877"),n=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=n.exports},4265:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("Header"),a("div",{staticClass:"breadcrumb-area"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"breadcrumb-wrap text-center"},[t._m(0),a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ul",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" Blog Details ")])])])])])])])]),a("BlogDetailsWrapper"),a("Footer"),a("OffCanvasMobileMenu"),a("BackToTop")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title"},[a("span",{staticClass:"water-text"},[t._v("Blog Details")]),a("h1",{staticClass:"title"},[t._v("Blog Details")])])}],l=a("0418"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-main-wrapper section-padding"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-3 col-lg-4 order-2 order-lg-1 mtn-30 blog-widget__wrapper"},[a("SidebarWidget",{attrs:{sidebar:t.data.sidebar}})],1),a("div",{staticClass:"col-xl-9 col-lg-8 order-1 order-lg-2"},[a("BlogDetailsPost",{attrs:{blog:t.data.blogDetails}}),a("div",{staticClass:"about-author mt-70"},[a("div",{staticClass:"about-author__image"},[a("img",{attrs:{src:t.data.blogDetails.aboutAuthor.image,alt:"author thumb"}})]),a("div",{staticClass:"about-author__content"},[a("h4",{staticClass:"heading"},[t._v(t._s(t.data.blogDetails.aboutAuthor.heading))]),a("p",[t._v(t._s(t.data.blogDetails.aboutAuthor.text))]),a("h6",{staticClass:"author-name"},[t._v(t._s(t.data.blogDetails.aboutAuthor.name))])])]),a("BlogComment",{attrs:{comment:t.data.blogComment}}),a("BlogCommentForm")],1)])])])},r=[],n=a("46c9"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog-post"},[a("div",{staticClass:"blog-post__thumb"},[a("v-lazy-image",{attrs:{src:"/img/blog/blog-details.jpg",alt:"blog image"}})],1),a("div",{staticClass:"blog-post__content blog-details"},[a("h4",{staticClass:"blog-title"},[t._v(" "+t._s(t.blog.title)+" ")]),a("div",{staticClass:"blog-meta d-flex justify-content-between"},[a("div",{staticClass:"date"},[t._v(" "+t._s(t.blog.meta.postDate)+" ")]),a("ul",{staticClass:"blog-meta-action"},[a("li",[a("button",[a("i",{staticClass:"fa fa-comment"}),t._v(" "+t._s(t.blog.meta.comment)+" ")])]),a("li",[a("button",[a("i",{staticClass:"fa fa-heart-o"}),t._v(" "+t._s(t.blog.meta.like)+" ")])])])]),a("p",[t._v(t._s(t.blog.para_1))]),a("blockquote",[a("h4",{staticClass:"blockquote-title"},[t._v(t._s(t.blog.quoteTitle))])]),a("p",{staticClass:"pb-4"},[t._v(t._s(t.blog.para_2))]),a("div",{staticClass:"blog-post__thumb"},[a("v-lazy-image",{attrs:{src:t.blog.blogMidleImage,alt:"blog image"}})],1),a("p",[t._v(t._s(t.blog.para_3))])])])},c=[],g={props:["blog"]},u=g,d=a("2877"),p=Object(d["a"])(u,m,c,!1,null,null,null),b=p.exports,v=a("19d4"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-wrapper"},[a("h3",{staticClass:"heading"},[t._v(t._s(t.comment.heading))]),a("ul",t._l(t.comment.comments,(function(e){return a("li",{key:e.id,staticClass:"comment",class:{comment__reply:e.isReply}},[a("div",{staticClass:"comment__avatar"},[a("v-lazy-image",{attrs:{src:e.authorImage,alt:"thumbnail"}})],1),a("div",{staticClass:"comment__body"},[a("div",{staticClass:"header"},[a("h6",{staticClass:"author-name"},[t._v(t._s(e.authorName))]),a("p",{staticClass:"comment-date"},[t._v(t._s(e.CommentTime))])]),a("p",[t._v(t._s(e.desc))]),a("button",{staticClass:"reply-btn"},[t._v("Reply")])])])})),0)])},h=[],C={props:["comment"]},f=C,y=Object(d["a"])(f,_,h,!1,null,null,null),w=y.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-wrapper"},[a("h3",{staticClass:"heading"},[t._v("Leave Your Comment")]),a("div",{staticClass:"comment-form"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-12 section-space--bottom--20"},[a("label",[t._v("Your Name Here")]),a("input",{staticClass:"comment-field mb-30",attrs:{type:"text",placeholder:"Type Your Name"}})]),a("div",{staticClass:"col-md-6 col-12 section-space--bottom--20"},[a("label",[t._v("Your Email Here")]),a("input",{staticClass:"comment-field mb-30",attrs:{type:"email",placeholder:"Type Your Email"}})]),a("div",{staticClass:"col-12"},[a("label",[t._v("Your Comment Here")]),a("textarea",{staticClass:"comment-field mb-30",attrs:{placeholder:"Type Your Message"}})]),a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-default"},[t._v("Send Message")])])])])])])}],q={},j=Object(d["a"])(q,k,D,!1,null,null,null),T=j.exports,x={components:{BlogDetailsPost:b,SidebarWidget:v["a"],BlogComment:w,BlogCommentForm:T},data:function(){return{data:n}}},B=x,E=Object(d["a"])(B,o,r,!1,null,null,null),M=E.exports,P=a("fd2d"),J=a("1e05"),H=a("205c"),O={components:{Header:l["a"],BlogDetailsWrapper:M,Footer:P["a"],OffCanvasMobileMenu:J["a"],BackToTop:H["a"]},metaInfo:{title:"Blog Details",htmlAttrs:{lang:"en",amp:!0}}},A=O,S=Object(d["a"])(A,i,s,!1,null,null,null);e["default"]=S.exports},"46c9":function(t){t.exports=JSON.parse('{"blog":{"sectionTitle":"Latest Post","sectionTitleWaterText":"Latest Post","blogPosts":[{"title":"Despite not being built for business, it does let you display","image":"/img/blog/blog-1.jpg","comment":4,"like":15,"postDate":"15 May, 2020"},{"title":"There are many things Google looks at when analyzing website.","image":"/img/blog/blog-2.jpg","comment":4,"like":15,"postDate":"18 Jun, 2020"},{"title":"Google handles billions websites every day. How does it do that","image":"/img/blog/blog-3.jpg","comment":4,"like":15,"postDate":"22 Jul, 2020"},{"title":"How to get your website into Google’s index with right way","image":"/img/blog/blog-4.jpg","comment":4,"like":15,"postDate":"08 Aug, 2020"},{"title":"Before your site can appear in the search results, search engine","image":"/img/blog/blog-5.jpg","comment":4,"like":15,"postDate":"28 Feb, 2020"},{"title":"Ready to launch a blog with these free blog sites for ever","image":"/img/blog/blog-6.jpg","comment":4,"like":15,"postDate":"16 Jan, 2020"},{"title":"Despite not being built for business, it does let you display","image":"/img/blog/blog-1.jpg","comment":4,"like":15,"postDate":"15 May, 2020"},{"title":"There are many things Google looks at when analyzing website.","image":"/img/blog/blog-2.jpg","comment":4,"like":15,"postDate":"18 Jun, 2020"},{"title":"Google handles billions websites every day. How does it do that","image":"/img/blog/blog-3.jpg","comment":4,"like":15,"postDate":"22 Jul, 2020"},{"title":"How to get your website into Google’s index with right way","image":"/img/blog/blog-4.jpg","comment":4,"like":15,"postDate":"08 Aug, 2020"},{"title":"Before your site can appear in the search results, search engine","image":"/img/blog/blog-5.jpg","comment":4,"like":15,"postDate":"28 Feb, 2020"},{"title":"Ready to launch a blog with these free blog sites for ever","image":"/img/blog/blog-6.jpg","comment":4,"like":15,"postDate":"16 Jan, 2020"}]},"sidebar":{"searchTitle":"Search","categoryTitle":"Categories","categories":[{"title":"web development","count":"30"},{"title":"web design","count":"15"},{"title":"apps development","count":"25"},{"title":"digital marketing","count":"22"},{"title":"SEO analyst","count":"08"}],"recentPostTitle":"Recent Posts","recentPosts":[{"image":"/img/blog/recent-01.jpg","alt":"post thumbnail","title":"Despite being built for business","date":"15 June, 2020"},{"image":"/img/blog/recent-02.jpg","alt":"post thumbnail","title":"Ready to launch a blog with these","date":"18 July, 2020"},{"image":"/img/blog/recent-03.jpg","alt":"post thumbnail","title":"Before your site can appear","date":"25 May, 2020"},{"image":"/img/blog/recent-04.jpg","alt":"post thumbnail","title":"There are many things Google","date":"09 March, 2020"}],"tagTitle":"Tags","tags":[{"name":"Development","link":"/blog"},{"name":"Design","link":"/blog"},{"name":"marketing","link":"/blog"},{"name":"Software","link":"/blog"},{"name":"SEO","link":"/blog"},{"name":"Apps","link":"/blog"}]},"blogDetails":{"aboutAuthor":{"image":"/img/blog/author.jpg","name":"Erik Jhonson","heading":"About the author","text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis voluptatem libero perspiciatis veritatis sequi corrupti aperiam nostrum voluptas aliquid vel dolorem eos eius."},"title":"International activities of the online world human bieng","quoteTitle":"Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. venenatis elit ac ultrices convallis.","para_1":"Bigger ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis consequuntur illo aliquid nihil ad neque, debitis praesentium libero ullam asperiores exercitationem deserunt inventore facilis, officiis,","para_2":"aliquam maiores asperiores recusandae commodi blanditiis ipsum tempora culpa possimus assumenda ab quidem a voluptatum quia natus? Ex neque, saepe reiciendis quasi velit perspiciatis error vel quas quibusdam autem nesciunt voluptas oditquis dignissimos aspernatur voluptatum est repellat. Pariatur praesentiumcorrupti","blogMidleImage":"/img/blog/blog-details-2.jpg","para_3":"deserunt ducimus quo doloremque nostrum aspernatur saepe cupiditate sit autem exercitationem debitis, maiores vitae perferendis nemo? Voluptas illo, animitemporibus quod earum molestias eaque, iure rem amet autem dignissimos officia dolores numquam distinctio esse voluptates optio pariatur aspernatur omnis? Ipsam qui commodi velit natus reiciendis quod quibusdam nemo eveniet similique animi!","meta":{"postDate":"25 May, 2020","comment":3,"like":15}},"blogComment":{"heading":"What our users think about this blog post (02)","comments":[{"isReply":false,"authorName":"Simon","authorImage":"/img/blog/comment-01.jpg","CommentTime":"Posted on Jan 15, 2020 at 09:15pm","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?"},{"isReply":true,"authorName":"Henry","authorImage":"/img/blog/comment-02.jpg","CommentTime":"Posted on May 24, 2020 at 06:20pm","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?"},{"isReply":false,"authorName":"William","authorImage":"/img/blog/comment-03.jpg","CommentTime":"Posted on Mar 18, 2020 at 10:45am","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores adipisci optio ex, non pariatur itaque illo sunt?"}]}}')}}]);
//# sourceMappingURL=blog-details.688391fe.js.map