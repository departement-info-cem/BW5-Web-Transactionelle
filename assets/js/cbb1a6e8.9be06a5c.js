"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[1125],{6803:(e,t,n)=>{n.d(t,{ZP:()=>r});var s=n(5893),i=n(1151);function l(e){const t={admonition:"admonition",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["C'est le moment de ",(0,s.jsx)(t.strong,{children:"tester"}),", ajouter des ",(0,s.jsx)(t.strong,{children:"commentaires"})," et faire votre ",(0,s.jsx)(t.strong,{children:"commit"})," et votre ",(0,s.jsx)(t.strong,{children:"push"})]})})}function r(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=n(5893),i=n(1151);n(9286),n(6803);const l={},r="TP1 : Projet MVC au choix!",o={id:"tp_FC/tp1",title:"TP1 : Projet MVC au choix!",description:"Adaptation de votre TP3 du cours Web Serveur.",source:"@site/docs/02-tp_FC/01-tp1.md",sourceDirName:"02-tp_FC",slug:"/tp_FC/tp1",permalink:"/BW5-Web-Transactionelle/tp_FC/tp1",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/BW5-Web-Transactionelle/tree/main/web/docs/02-tp_FC/01-tp1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tp_FC",next:{title:"TP2: Votre projet Plus!",permalink:"/BW5-Web-Transactionelle/tp_FC/tp2"}},d={},c=[{value:"Consignes (15% de la note finale)",id:"consignes-15-de-la-note-finale",level:2},{value:"\xc9tude de cas: Au choix",id:"\xe9tude-de-cas-au-choix",level:2},{value:"Les fonctionnalit\xe9s \xe0 impl\xe9menter",id:"les-fonctionnalit\xe9s-\xe0-impl\xe9menter",level:2},{value:"Grille de correction (15%)",id:"grille-de-correction-15",level:2}];function a(e){const t={admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tp1--projet-mvc-au-choix",children:"TP1 : Projet MVC au choix!"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"Adaptation de votre TP3 du cours Web Serveur."})}),"\n",(0,s.jsx)(t.h2,{id:"consignes-15-de-la-note-finale",children:"Consignes (15% de la note finale)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Lisez toutes les instructions et la grille de correction avant de commencer"}),"\n",(0,s.jsxs)(t.li,{children:["Vous ",(0,s.jsx)(t.strong,{children:"DEVEZ"})," faire au moins une migration PAR mod\xe8le. Plus si vous corrigez des erreurs: c'est OK! Et au moins un commit pour chaque action/View, plus si vous faites des corrections,tant que vous les documentez correctement. Une migration s\xe9par\xe9e pour le chargement des donn\xe9es (Seed).\n-Faites de petits commits avec des commentaires pertinents."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Ne pas travailler directement dans la branche ",(0,s.jsx)(t.strong,{children:"Main"}),". Vous devez ajouter une fonctionnalit\xe9 \xe0 la fois. Cr\xe9ez une branche et faite un ",(0,s.jsx)(t.em,{children:"merge"})," dans la branche ",(0,s.jsx)(t.strong,{children:"Main"})," \xe0 la fin."]})}),"\n",(0,s.jsx)(t.h2,{id:"\xe9tude-de-cas-au-choix",children:"\xc9tude de cas: Au choix"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Votre application doit contenir des donn\xe9es de enfants qui sont associ\xe9s \xe0 UN parent."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"les-fonctionnalit\xe9s-\xe0-impl\xe9menter",children:"Les fonctionnalit\xe9s \xe0 impl\xe9menter"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Mettre en place ",(0,s.jsx)(t.em,{children:"Entity Framework"})]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DbContext"}),"\n",(0,s.jsx)(t.li,{children:"Connection BD"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Gestion des parents"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Adaptation du mod\xe8le avec propri\xe9t\xe9s de navigation et cl\xe9s explicites"}),"\n",(0,s.jsx)(t.li,{children:"Impl\xe9mentation des r\xe8gles d'affaire sp\xe9cifiques (annotations)"}),"\n",(0,s.jsxs)(t.li,{children:["avec seed\ud83c\udf31 (",(0,s.jsx)(t.em,{children:"modelBuilderDataGenerator"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Ajout ou modification du Controlleur et vues afin d'avoir toutes les actions du CRUD ",(0,s.jsx)(t.em,{children:"comment, commit, push"})," \xe0 chaque action/vue"]}),"\n",(0,s.jsx)(t.li,{children:"Ajout dans le menu (si pas d\xe9j\xe0 l\xe0)"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Gestion des enfants et de leur parent associ\xe9"}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Adaptation du mod\xe8le avec propri\xe9t\xe9s de navigation et cl\xe9s explicites"}),"\n",(0,s.jsx)(t.li,{children:"Impl\xe9mentation des r\xe8gles d'affaire sp\xe9cifiques (annotations)"}),"\n",(0,s.jsxs)(t.li,{children:["avec seed\ud83c\udf31 (",(0,s.jsx)(t.em,{children:"modelBuilderDataGenerator"}),") dans une migration \xe0 part"]}),"\n",(0,s.jsxs)(t.li,{children:["Ajout ou modification du Controlleur et vues afin d'avoir toutes les actions du CRUD ",(0,s.jsx)(t.em,{children:"comment, commit, push"})," \xe0 chaque action/vue"]}),"\n",(0,s.jsx)(t.li,{children:"Ajout dans le menu (si pas d\xe9j\xe0 l\xe0)"}),"\n"]}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Utilisation de ",(0,s.jsx)(t.strong,{children:"vues partielles"}),": boutons, contenu de boucles (exemple Card Bootstrap), menu, etc."]}),"\n",(0,s.jsxs)(t.li,{children:["Utilisation de ",(0,s.jsx)(t.strong,{children:"FontAwesome"})," pour les boutons et autres petits ic\xf4nes"]}),"\n",(0,s.jsxs)(t.li,{children:["Utilisation de ",(0,s.jsx)(t.strong,{children:"SummerNote"})," pour les textAreas"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["Ne modifiez pas les vues pour ",(0,s.jsx)(t.strong,{children:"Favori"})," et les vues du tableau de bord (si vous les avez)"]})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Il faut ajouter les champs n\xe9cessaires pour ",(0,s.jsx)(t.strong,{children:"EFC"})," et les annotations. R\xe9f\xe9rez-vous \xe0 votre diagramme de classes du projet."]})}),"\n",(0,s.jsx)(t.h2,{id:"grille-de-correction-15",children:"Grille de correction (15%)"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"T\xe2che"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Nb Points"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Mise en place du projet initial MVC EF migrations etc"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Gestion des parents: mod\xe8les, propri\xe9t\xe9s navigations"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Gestion des enfants: mod\xe8les, propri\xe9t\xe9s navigations"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Logique d'affaire: annotations dans mod\xe8les, recherche id, nom etc."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"15"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ViewsModels, Contr\xf4leurs et vues, page de recherche"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"20"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Utilisation de vues partielles pour les boutons et boucles"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Utilisation de FontAwesome, SummerNote"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"5"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Consignes Git (branches/commits/push)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"15"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Qualit\xe9 du fran\xe7ais \xe9crit -commentaires git et interface"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"10"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.strong,{children:"Total"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"/100"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);