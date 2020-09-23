(this["webpackJsonpreact-website-v2"]=this["webpackJsonpreact-website-v2"]||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),c=a.n(r),i=a(15),o=(a(27),["btn--primary","btn--outline"]),s=["btn--medium","btn--large","btn--mobile","btn--wide"],m=["primary","blue","red","green"],u=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,i=e.buttonColor,u=o.includes(r)?r:o[0],d=s.includes(c)?c:s[0],E=m.includes(i)?i:null;return l.a.createElement("button",{className:"btn ".concat(u," ").concat(d," ").concat(E),onClick:n,type:a},t)},d=a(2),E=(a(28),a(11)),b=a(8),p=a(0);var g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(i.a)(c,2),s=o[0],m=o[1],g=function(){return r(!1)},h=function(){window.innerWidth<=960?m(!1):m(!0)};return Object(n.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),l.a.createElement(l.a.Fragment,null,l.a.createElement(p.b.Provider,{value:{color:"#fff"}},l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container container"},l.a.createElement(d.b,{to:"/",className:"navbar-logo",onClick:g},l.a.createElement(E.a,{className:"navbar-icon"}),"TREASURE"),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},a?l.a.createElement(b.f,null):l.a.createElement(b.a,null)),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/",className:"nav-links",onClick:g},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/services",className:"nav-links",onClick:g},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/products",className:"nav-links",onClick:g},"Products")),l.a.createElement("li",{className:"nav-btn"},s?l.a.createElement(d.b,{to:"/sign-up",className:"btn-link"},l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP")):l.a.createElement(d.b,{to:"/sign-up",className:"btn-link"},l.a.createElement(u,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",onClick:g},"SIGN UP"))))))))},h=(a(34),a(3));a(35);var v=function(e){var t=e.lightBg,a=e.topLine,n=e.lightText,r=e.lightTextDesc,c=e.headline,i=e.description,o=e.buttonLabel,s=e.img,m=e.alt,E=e.imgStart;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t?"home__hero-section":"home__hero-section darkBg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===E?"row-reverse":"row"}},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-text-wrapper"},l.a.createElement("div",{className:"top-line"},a),l.a.createElement("h1",{className:n?"heading":"heading dark"},c),l.a.createElement("p",{className:r?"home__hero-subtitle":"home__hero-subtitle dark"},i),l.a.createElement(d.b,{to:"/sign-up"},l.a.createElement(u,{buttonSize:"btn--wide",buttonColor:"blue"},o)))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-img-wrapper"},l.a.createElement("img",{src:s,alt:m,className:"home__hero-img"})))))))},f={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"https://cdn1.savepice.ru/uploads/2020/9/23/7fcbcfb33070c061402ec1fe09489016-full.png",alt:"Credit Card"},N={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"100% SECURE",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"",img:"https://cdn1.savepice.ru/uploads/2020/9/23/6445f75f455b5e99b44fd017ceba0043-full.png",alt:"Vault"},y={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"https://cdn1.savepice.ru/uploads/2020/9/23/405fc230edb15534de0d46619bf87c08-full.png",alt:"Vault"},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"https://cdn1.savepice.ru/uploads/2020/9/23/3514d2e591052da705fb655adcac4b0b-full.png",alt:"Vault"},_=(a(36),a(20)),w=a(21);var k=function(){return l.a.createElement(p.b.Provider,{value:{color:"#fff",size:64}},l.a.createElement("div",{className:"pricing__section"},l.a.createElement("div",{className:"pricing__wrapper"},l.a.createElement("h1",{className:"pricing__heading"},"Pricing"),l.a.createElement("div",{className:"pricing__container"},l.a.createElement(d.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(b.c,null)),l.a.createElement("h3",null,"Starter"),l.a.createElement("h4",null,"$8.99"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"100 Transactions"),l.a.createElement("li",null,"2% Cash Back"),l.a.createElement("li",null,"$10,000 Limit")),l.a.createElement(u,{buttonSize:"btn--wide",buttonColor:"primary"},"Choose Plan"))),l.a.createElement(d.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(_.a,null)),l.a.createElement("h3",null,"Gold"),l.a.createElement("h4",null,"$29.99"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"1000 Transactions"),l.a.createElement("li",null,"3.5% Cash Back"),l.a.createElement("li",null,"$100,000 Limit")),l.a.createElement(u,{buttonSize:"btn--wide",buttonColor:"blue"},"Choose Plan"))),l.a.createElement(d.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(w.a,null)),l.a.createElement("h3",null,"Diamond"),l.a.createElement("h4",null,"$99.99"),l.a.createElement("p",null,"per month"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"Unlimited Transactions"),l.a.createElement("li",null,"5% Cash Back"),l.a.createElement("li",null,"Unlimited Spending")),l.a.createElement(u,{buttonSize:"btn--wide",buttonColor:"primary"},"Choose Plan")))))))};var T=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,f),l.a.createElement(v,y),l.a.createElement(v,N),l.a.createElement(k,null),l.a.createElement(v,S))},x={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:"https://cdn1.savepice.ru/uploads/2020/9/23/7fcbcfb33070c061402ec1fe09489016-full.png",alt:"Credit Card"};var C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(v,x))},L={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every transaction is stored on our secure cloud database",description:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",buttonLabel:"Sign Up Now",imgStart:"start",img:"https://cdn1.savepice.ru/uploads/2020/9/23/3514d2e591052da705fb655adcac4b0b-full.png",alt:"Vault"};var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,L))},U={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"EASY SETUP",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:"https://cdn1.savepice.ru/uploads/2020/9/23/405fc230edb15534de0d46619bf87c08-full.png",alt:"Vault"};var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,U))};a(37);var D=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join our exclusive membership to receive the latest news and trends"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(d.b,{to:"/sign-up"},"How it works"),l.a.createElement(d.b,{to:"/"},"Testimonials"),l.a.createElement(d.b,{to:"/"},"Careers"),l.a.createElement(d.b,{to:"/"},"Investors"),l.a.createElement(d.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(d.b,{to:"/"},"Contact"),l.a.createElement(d.b,{to:"/"},"Support"),l.a.createElement(d.b,{to:"/"},"Destinations"),l.a.createElement(d.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(d.b,{to:"/"},"Submit Video"),l.a.createElement(d.b,{to:"/"},"Ambassadors"),l.a.createElement(d.b,{to:"/"},"Agency"),l.a.createElement(d.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(d.b,{to:"/"},"Instagram"),l.a.createElement(d.b,{to:"/"},"Facebook"),l.a.createElement(d.b,{to:"/"},"Youtube"),l.a.createElement(d.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(d.b,{to:"/",className:"social-logo"},l.a.createElement(E.a,{className:"navbar-icon"}),"TREASURE")),l.a.createElement("small",{className:"website-rights"},"Anatoliy Ermakov \xa9 2020"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(d.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement(b.b,null)),l.a.createElement(d.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement(b.d,null)),l.a.createElement(d.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement(b.h,null)),l.a.createElement(d.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement(b.g,null)),l.a.createElement(d.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement(b.e,null))))))};var I=function(){return l.a.createElement(d.a,null,l.a.createElement(g,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",exact:!0,component:T}),l.a.createElement(h.a,{path:"/services",exact:!0,component:C}),l.a.createElement(h.a,{path:"/products",exact:!0,component:A}),l.a.createElement(h.a,{path:"/sign-up",exact:!0,component:B})),l.a.createElement(D,null))};c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3a686a6a.chunk.js.map