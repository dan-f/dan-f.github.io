webpackJsonp([0x67ef26645b2a,60335399758886],{130:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Daniel Friedman"}}},layoutContext:{}}},262:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=a(2),u=l(n),o=a(271),d=l(o),i=a(130),f=l(i);t.default=function(e){return u.default.createElement(d.default,r({},e,f.default))},e.exports=t.default},614:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.withRouter=t.matchPath=t.Switch=t.StaticRouter=t.Router=t.Route=t.Redirect=t.Prompt=t.MemoryRouter=void 0;var r=a(246),n=l(r),u=a(247),o=l(u),d=a(248),i=l(d),f=a(162),c=l(f),s=a(93),m=l(s),p=a(249),h=l(p),g=a(250),_=l(g),v=a(94),x=l(v),y=a(251),b=l(y);t.MemoryRouter=n.default,t.Prompt=o.default,t.Redirect=i.default,t.Route=c.default,t.Router=m.default,t.StaticRouter=h.default,t.Switch=_.default,t.matchPath=x.default,t.withRouter=b.default},266:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r,n=a(2),u=l(n),o=a(9),d=l(o),i=a(44),f=l(i),c=a(32),s=l(c),m=a(268),p=l(m),h=a(11),g=(l(h),a(33)),_=l(g),v=(0,d.default)("header",{target:"e1pcjso90"})((r={alignItems:"baseline",borderBottom:"2px solid",display:"flex",justifyContent:"space-between",marginBottom:"2rem",padding:"1rem 0"},r[(0,g.smallerThan)(_.default.small)]={flexDirection:"column"},r)),x=function(){return u.default.createElement(v,null,u.default.createElement(s.default,null,u.default.createElement(f.default,{className:"no-underline",to:"/"},"Daniel Friedman")),u.default.createElement(p.default,null))};t.default=x,e.exports=t.default},268:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r,n=a(2),u=l(n),o=a(9),d=l(o),i=a(269),f=l(i),c=a(33),s=l(c),m=a(11),p=(l(m),(0,d.default)("ul",{target:"ev5m8t40"})({alignItems:"baseline",display:"flex",justifyContent:"flex-end",listStyle:"none",margin:0,padding:0,width:"100%"})),h=(0,d.default)("li",{target:"ev5m8t41"})((r={margin:0,marginLeft:"1rem"},r[(0,c.smallerThan)(s.default.small)]={marginLeft:0,marginRight:"1rem"},r));t.default=function(){return u.default.createElement("nav",null,u.default.createElement(p,null,u.default.createElement(h,null,u.default.createElement(f.default,{to:"/"},"home")),u.default.createElement(h,null,u.default.createElement(f.default,{to:"/projects/"},"projects")),u.default.createElement(h,null,u.default.createElement(f.default,{to:"/blog/"},"blog")),u.default.createElement(h,null,u.default.createElement(f.default,{to:"/contact/"},"contact"))))},e.exports=t.default},269:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=a(2),u=l(n),o=a(9),d=(l(o),a(614),a(44)),i=l(d),f=a(11);l(f);t.default=function(e){return u.default.createElement(i.default,r({activeClassName:"nav-link-is-current-page",exact:!0},e))},e.exports=t.default},271:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=a(2),n=l(r),u=a(9),o=l(u),d=a(7),i=l(d),f=a(49),c=l(f),s=a(266),m=l(s),p=a(278),h=l(p),g=a(11);l(g);(0,u.injectGlobal)(h.default);var _=(0,o.default)("div",{target:"e1ps6qf60"})({height:"100vh",padding:"0 50px",margin:"auto",maxWidth:960}),v=function(e){var t=e.children,a=e.data.site.siteMetadata.title;return n.default.createElement("div",null,n.default.createElement(c.default,{title:a+" - Home",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),n.default.createElement(_,null,n.default.createElement(m.default,null),n.default.createElement("main",null,t())))};t.query="** extracted graphql fragment **";v.propTypes={children:i.default.func},t.default=v},33:function(e,t){"use strict";t.__esModule=!0,t.default={small:"666px"};t.smallerThan=function(e){return"@media (max-width: "+e+")"}},278:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=a(11),u=l(n),o={borderWidth:"2px"};t.default={body:{backgroundColor:u.default.light,color:u.default.dark},a:{borderBottom:"1px solid",borderWidth:"0px",color:u.default.primary,textDecoration:"none",transition:"border-width 0.05s"},li:{margin:0},"a:hover":o,"a:focus":o,"a.no-underline":{borderBottom:0},"a.nav-link-is-current-page":r({},o,{color:u.default.primaryDark})},e.exports=t.default},11:function(e,t){"use strict";t.__esModule=!0,t.default={primary:"#D73C65",primaryDark:"#8A1937",light:"#F5F5FA",dark:"#383740",xDark:"#2D2C33"},e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-790cd2e845fcbb27f621.js.map