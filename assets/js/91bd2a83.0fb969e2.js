"use strict";(self.webpackChunkdepinfo_template=self.webpackChunkdepinfo_template||[]).push([[6051],{3046:(e,n,s)=>{s.d(n,{Ay:()=>l});var i=s(4848),t=s(8453);function r(e){const n={admonition:"admonition",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["C'est le moment de ",(0,i.jsx)(n.strong,{children:"tester"}),", ajouter des ",(0,i.jsx)(n.strong,{children:"commentaires"})," et faire votre ",(0,i.jsx)(n.strong,{children:"commit"})," et votre ",(0,i.jsx)(n.strong,{children:"push"})]})})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},2096:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>j});var i=s(4848),t=s(8453),r=s(1432),l=s(3046);const a='<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>@ViewData["Title"] - JuliePro</title>\n    <link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />\n    <link rel="stylesheet" href="~/css/site.css" />\n    <style>\n      .accordion-item { border: 1px solid rgba(0,0,0,.125) }\n    </style>\n</head>\n<body>\n  <header>\n    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-primary border-bottom box-shadow mb-3">\n      <div class="container">\n        <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index"><img src="~/images/imagesLayout/tile.png" style="width:80%" /></a>\n\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"\n                aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">\n          <ul class="navbar-nav flex-grow-1">\n            <li class="nav-item">\n              <a class="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="Index">Home</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" asp-area="">Specialities</a>\n            </li>\n            <li class="nav-item">\n                <a class="nav-link" asp-area="">Trainers</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n  </header>\n  <div class="container">\n    <main role="main" class="pb-3">\n      @RenderBody()\n    </main>\n  </div>\n\n  <script src="~/lib/jquery/dist/jquery.min.js"><\/script>\n  <script src="~/lib/bootstrap/dist/js/bootstrap.bundle.min.js"><\/script>\n  <script src="~/js/site.js" asp-append-version="true"><\/script>\n  @await RenderSectionAsync("Scripts", required: false)\n</body>\n</html>\n',c='@{\n    ViewData["Title"] = "Home Page";\n}\n\n<style>\n    body{\n        background-image: linear-gradient(60deg,#6f4f4f,#b3541e,#ffe34a)\n    }\n</style>\n\n<div class="text-center">\n  <a  asp-area="" asp-controller="Home" asp-action="Index"><img src="~/images/imagesLayout/ImageGenere.png" style="width:75%" /></a>\n</div>\n',d={},o="TP1",u={id:"tp_Regulier/tp1",title:"TP1",description:"Consignes (20% de la note finale)",source:"@site/docs/02-tp_Regulier/01-tp1.md",sourceDirName:"02-tp_Regulier",slug:"/tp_Regulier/tp1",permalink:"/BW5-Web-Transactionelle/tp_Regulier/tp1",draft:!1,unlisted:!1,editUrl:"https://github.com/departement-info-cem/BW5-Web-Transactionelle/tree/main/web/docs/02-tp_Regulier/01-tp1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tp_Regulier",next:{title:"TP2:",permalink:"/BW5-Web-Transactionelle/tp_Regulier/tp2"}},h={},j=[{value:"Consignes (20% de la note finale)",id:"consignes-20-de-la-note-finale",level:2},{value:"\xc9tude de cas JuliePro",id:"\xe9tude-de-cas-juliepro",level:2},{value:"Les fonctionnalit\xe9s \xe0 impl\xe9menter",id:"les-fonctionnalit\xe9s-\xe0-impl\xe9menter",level:2},{value:"Cr\xe9ation du projet",id:"cr\xe9ation-du-projet",level:2},{value:"Gestion des sp\xe9cialit\xe9s",id:"gestion-des-sp\xe9cialit\xe9s",level:2},{value:"Gestion des entra\xeeneurs",id:"gestion-des-entra\xeeneurs",level:2},{value:"Ajout \xe0 l&#39;index de sp\xe9cialit\xe9s",id:"ajout-\xe0-lindex-de-sp\xe9cialit\xe9s",level:2},{value:"Impl\xe9mentation de la logique d&#39;affaire",id:"impl\xe9mentation-de-la-logique-daffaire",level:2},{value:"Utilisation des vues partielles et de FontAwesome",id:"utilisation-des-vues-partielles-et-de-fontawesome",level:2},{value:"Ajout de clients et de leurs objectifs",id:"ajout-de-clients-et-de-leurs-objectifs",level:2},{value:"Ajout d&#39;une page de statistiques",id:"ajout-dune-page-de-statistiques",level:2},{value:"Affichage d&#39;un menu d&#39;objectifs",id:"affichage-dun-menu-dobjectifs",level:2},{value:"Grille de correction",id:"grille-de-correction",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:d}=n;return d||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tp1",children:"TP1"}),"\n","\n",(0,i.jsx)(n.h2,{id:"consignes-20-de-la-note-finale",children:"Consignes (20% de la note finale)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Lisez toutes les instructions et la grille de correction avant de commencer"}),"\n",(0,i.jsxs)(n.li,{children:["Cr\xe9ez un Repository ",(0,i.jsx)(n.code,{children:"PRIV\xc9"})," et ajoutez votre enseignant comme collaborateur"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["N'oubliez pas de choisir l'option ",(0,i.jsx)(n.strong,{children:"VisualStudio"})," pour ",(0,i.jsx)(n.strong,{children:".gitignore"})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Vous ",(0,i.jsx)(n.strong,{children:"DEVEZ"})," faire au moins les migrations et les commits demand\xe9s, mais vous pouvez en faire plus sans probl\xe8me, tant que vous les documentez correctement"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\xe9tude-de-cas-juliepro",children:"\xc9tude de cas JuliePro"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Julie Loiselle est propri\xe9taire de l\u2019entreprise d\u2019entrainement personnel JuliePro. L\u2019entreprise emploi une douzaine d\u2019entra\xeeneurs (",(0,i.jsx)(n.strong,{children:"Trainer"}),") chevronn\xe9s et sp\xe9cialis\xe9s (",(0,i.jsx)(n.strong,{children:"Speciality"})," : perte de poids, alth\xe9rophilie, course, r\xe9abilitation, etc).\nUn ",(0,i.jsx)(n.strong,{children:"Trainer"})," a une seule ",(0,i.jsx)(n.strong,{children:"Speciality"}),".\nChaque client (",(0,i.jsx)(n.strong,{children:"Customer"}),") est assign\xe9 \xe0 un ",(0,i.jsx)(n.strong,{children:"Trainer"}),".\nLe ",(0,i.jsx)(n.strong,{children:"Trainer"})," d\xe9finit \xe9galement avec son client un objectif courant (",(0,i.jsx)(n.strong,{children:"Objective"}),") : soit de perte de poids ou de distance. Lorsqu\u2019un ",(0,i.jsx)(n.strong,{children:"Objective"})," est atteint, on indique la date."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"les-fonctionnalit\xe9s-\xe0-impl\xe9menter",children:"Les fonctionnalit\xe9s \xe0 impl\xe9menter"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Gestion des sp\xe9cialit\xe9s (",(0,i.jsx)(n.strong,{children:"Speciality"}),") avec seed\ud83c\udf31"]}),"\n",(0,i.jsxs)(n.li,{children:["Gestion des entra\xeeneurs (",(0,i.jsx)(n.strong,{children:"Trainer"}),") et de leur sp\xe9cialit\xe9 (",(0,i.jsx)(n.strong,{children:"Speciality"}),") avec seed\ud83c\udf31"]}),"\n",(0,i.jsx)(n.li,{children:"Ajout \xe0 l'index de sp\xe9cialit\xe9s"}),"\n",(0,i.jsx)(n.li,{children:"Impl\xe9mentation des r\xe8gles d'affaire sp\xe9cifiques"}),"\n",(0,i.jsxs)(n.li,{children:["Utilisation de ",(0,i.jsx)(n.strong,{children:"vues partielles"})]}),"\n",(0,i.jsxs)(n.li,{children:["Utilisation de ",(0,i.jsx)(n.strong,{children:"FontAwesome"})]}),"\n",(0,i.jsxs)(n.li,{children:["Mise en place du mod\xe8le de donn\xe9e pour les clients (",(0,i.jsx)(n.strong,{children:"Customer"}),") et de leurs objectifs (",(0,i.jsx)(n.strong,{children:"Objective"}),") avec seed\ud83c\udf31"]}),"\n",(0,i.jsx)(n.li,{children:"Vue de statistiques"}),"\n",(0,i.jsx)(n.li,{children:"Vue des objectifs des entra\xeeneurs"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cr\xe9ation-du-projet",children:"Cr\xe9ation du projet"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cr\xe9ez le Repository ",(0,i.jsx)(n.code,{children:"PRIV\xc9"})," ",(0,i.jsx)(n.strong,{children:"3W6_TP_NOM_PRENOM"})," dans GitHub et ajoutez votre enseignant comme collaborateur"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Cr\xe9ez un nouveau projet MVC qui se nomme ",(0,i.jsx)(n.strong,{children:"JuliePro"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dans le projet MVC:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Il faut t\xe9l\xe9charger ce ",(0,i.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(9660).A+"",children:"fichier zip"})," qui contient les images utilis\xe9es dans le projet et extraire son contenu dans le r\xe9pertoire ",(0,i.jsx)(n.strong,{children:"/wwwroot/"})," de votre projet"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Dites oui pour remplacer les fichiers ",(0,i.jsx)(n.strong,{children:"bootstrap.css"})," et ",(0,i.jsx)(n.strong,{children:"bootstrap.min.css"})," (Bootstrap ",(0,i.jsx)(n.strong,{children:"5.1.0"})," contient un bug, alors on utilise la version ",(0,i.jsx)(n.strong,{children:"5.1.1"}),")"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Remplacez le contenu du fichier de Layout par ce qui suit:"}),"\n"]}),"\n","\n",(0,i.jsxs)(d,{children:[(0,i.jsx)("summary",{children:"/Views/Shared/_Layout.cshtml"}),(0,i.jsx)("p",{children:(0,i.jsx)(r.A,{language:"html",title:"_Layout.cshtml",children:a})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Remplacez le contenu du fichier d'Index par ce qui suit:"}),"\n"]}),"\n","\n","\n",(0,i.jsxs)(d,{children:[(0,i.jsx)("summary",{children:"/Views/Home/Index.cshtml"}),(0,i.jsx)("p",{children:(0,i.jsx)(r.A,{language:"html",title:"Index.cshtml",children:c})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Finalement, ",(0,i.jsx)(n.strong,{children:"ajoutez"})," ceci ",(0,i.jsx)(n.strong,{children:"\xe0 la fin"})," du fichier wwwroot/css/site.css"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Il faut ajouter \xe0 la fin et non remplacer tout le contenu pour ce fichier"})}),"\n",(0,i.jsxs)(d,{children:[(0,i.jsx)("summary",{children:"/wwwroot/css/site.css"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:":root {\n    --bs-primary: #fc9032;\n    --bs-primary-rgb: 232,144,50\n}\n\nbody {\n    background-image: none\n}\n"})})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assurez-vous que la page d'accueil de votre application est identique \xe0 celle-ci:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image Reference",src:s(4145).A+"",width:"1244",height:"968"})}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"gestion-des-sp\xe9cialit\xe9s",children:"Gestion des sp\xe9cialit\xe9s"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Ajout de la classe ",(0,i.jsx)(n.strong,{children:"Speciality"})," qui sera g\xe9rer par Entity Framework (",(0,i.jsx)(n.strong,{children:"EF"}),") dans le r\xe9pertoire ",(0,i.jsx)(n.strong,{children:"/Models/"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image Reference",src:s(14).A+"",width:"429",height:"138"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Speciality"',children:"public string Name { get; set; }\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Il faut ajouter les champs n\xe9cessaires pour Entity Framework (",(0,i.jsx)(n.strong,{children:"EF"}),") et les annotations. R\xe9f\xe9rez-vous au diagramme plus haut qui vous montre les champs de la classe ",(0,i.jsx)(n.strong,{children:"Speciality"}),"."]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["G\xe9n\xe9ration du contr\xf4leur MVC pour la classe ",(0,i.jsx)(n.strong,{children:"Speciality"})]}),"\n",(0,i.jsx)(n.li,{children:"Ajouter un seed\ud83c\udf31 pour les sp\xe9cialit\xe9s"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Seed des sp\xe9cialit\xe9s"',children:'builder.Entity<Speciality>().HasData(new Speciality() { Id = 1, Name = "Perte de poids" });\nbuilder.Entity<Speciality>().HasData(new Speciality() { Id = 2, Name = "Course" });\nbuilder.Entity<Speciality>().HasData(new Speciality() { Id = 3, Name = "Halth\xe9rophilie" });\nbuilder.Entity<Speciality>().HasData(new Speciality() { Id = 4, Name = "R\xe9habilitation" });\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Ajoutez une migration et mettez \xe0 jour votre base de donn\xe9es"}),"\n",(0,i.jsxs)(n.li,{children:["Le menu ",(0,i.jsx)(n.strong,{children:"Specialities"})," de la page principale doit nous diriger vers la gestion des sp\xe9cialit\xe9s"]}),"\n",(0,i.jsxs)(n.li,{children:["Prenez un moment pour retirer la vue ",(0,i.jsx)(n.strong,{children:"Details"})," et retirer le lien dans la vue ",(0,i.jsx)(n.strong,{children:"Index"})]}),"\n",(0,i.jsxs)(n.li,{children:["\xc0 ce point, vous devez pouvoir faire les actions ",(0,i.jsx)(n.strong,{children:"CRUD"})," de ",(0,i.jsx)(n.strong,{children:"Speciality"})]}),"\n"]}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"gestion-des-entra\xeeneurs",children:"Gestion des entra\xeeneurs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Ajout de la classe ",(0,i.jsx)(n.strong,{children:"Trainer"})," qui sera g\xe9rer par Entity Framework Core dans le r\xe9pertoire ",(0,i.jsx)(n.strong,{children:"/Models/"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image Reference",src:s(4654).A+"",width:"428",height:"224"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Trainer"',children:"public string FirstName { get; set; }\npublic string LastName { get; set; }\npublic string Email { get; set; }\npublic string Photo { get; set; }\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Il faut ajouter les champs n\xe9cessaires pour les ",(0,i.jsx)(n.strong,{children:"relations"})," et les ",(0,i.jsx)(n.strong,{children:"annotations"}),"."]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["G\xe9n\xe9ration du contr\xf4leur MVC pour la classe ",(0,i.jsx)(n.strong,{children:"Trainer"})]}),"\n",(0,i.jsx)(n.li,{children:"Ajouter un seed\ud83c\udf31 pour les entra\xeeneurs"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Seed des entra\xeeneurs"',children:'builder.Entity<Trainer>().HasData(new Trainer() { Id = 1, FirstName = "Chrystal", LastName = "Lapierre", Email = "Chrystal.lapierre@juliepro.ca", SpecialityId= 1, Photo = "Chrystal.png"});\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 2, FirstName = "F\xe9lix", LastName = "Trudeau", Email = "Felix.trudeau@juliePro.ca", SpecialityId = 2, Photo = "Felix.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 3, FirstName = "Fran\xe7ois", LastName = "Saint-John", Email = "Frank.StJohn@juliepro.ca", SpecialityId = 1, Photo = "Francois.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 4, FirstName = "Jean-Claude", LastName = "Bastien", Email = "JC.Bastien@juliepro.ca", SpecialityId = 4, Photo = "JeanClaude.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 5, FirstName = "Jin Lee", LastName = "Godette", Email = "JinLee.godette@juliepro.ca", SpecialityId = 3, Photo = "Jin Lee.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 6, FirstName = "Karine", LastName = "Lachance", Email = "Karine.Lachance@juliepro.ca", SpecialityId = 2, Photo = "Karine.png" });\nbuilder.Entity<Trainer>().HasData(new Trainer() { Id = 7, FirstName = "Ramone", LastName = "Esteban", Email = "Ramone.Esteban@juliepro.ca", SpecialityId = 3, Photo = "Ramone.png" });\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ajoutez une migration et mettez \xe0 jour votre base de donn\xe9es"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Le menu ",(0,i.jsx)(n.strong,{children:"Trainers"})," de la page principale doit nous diriger vers la gestion des entra\xeeneurs"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Modification de la vue et ajout des entra\xeeneurs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Dans la vue Index:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Triez les entra\xeeneurs par FirstName en premier et par LastName ensuite"}),"\n",(0,i.jsx)(n.li,{children:"Affichez l'image de la photo de l'entra\xeeneur si elle est pr\xe9sente et limitez sa largeur \xe0 200 pixels"}),"\n",(0,i.jsx)(n.li,{children:"Affichez le nom de la sp\xe9cialit\xe9, pas son id"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dans la vue Details:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Affichez l'image de la photo de l'entra\xeeneur en pleine r\xe9solution si elle est pr\xe9sente"}),"\n",(0,i.jsx)(n.li,{children:"Affichez le nom de la sp\xe9cialit\xe9, pas son id"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dans la vue Delete:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Affichez le nom de la sp\xe9cialit\xe9, pas son id"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dans les vues Create et Edit:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Votre select de sp\xe9cialit\xe9 est-il vraiment laid?\ud83e\udd2e Rappelez-vous que l'on utilise bootstrap et que les diff\xe9rents \xe9l\xe9ments doivent utiliser les classes bootstraps!"}),"\n",(0,i.jsx)(n.li,{children:"Permettre de s\xe9lectionner une sp\xe9cialit\xe9 et affichez le nom des sp\xe9cialit\xe9s et non pas leurs ids"}),"\n",(0,i.jsx)(n.li,{children:"Pour la photo, on garde \xe7a simple pour l'instant et on doit taper le nom de l'image de l'entra\xeeneur"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"ajout-\xe0-lindex-de-sp\xe9cialit\xe9s",children:"Ajout \xe0 l'index de sp\xe9cialit\xe9s"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Ajouter une colonne qui affiche les ",(0,i.jsx)(n.strong,{children:"Trainers"})," des sp\xe9cialit\xe9s"]}),"\n",(0,i.jsxs)(n.li,{children:["Chaque ",(0,i.jsx)(n.strong,{children:"Trainer"})," doit \xeatre un lien vers la page ",(0,i.jsx)(n.strong,{children:"Edit"})," de ce ",(0,i.jsx)(n.strong,{children:"Trainer"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:s(9418).A+"",width:"1318",height:"368"})}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"impl\xe9mentation-de-la-logique-daffaire",children:"Impl\xe9mentation de la logique d'affaire"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Emp\xeachez d\u2019effacer une ",(0,i.jsx)(n.strong,{children:"Speciality"})," si elle est associ\xe9 \xe0 au moins un ",(0,i.jsx)(n.strong,{children:"Trainer"})," et affichez un message appropri\xe9 \xe0 l'utilisateur dans ce cas"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image Reference",src:s(9748).A+"",width:"381",height:"163"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Assurez-vous que le delete d'une ",(0,i.jsx)(n.strong,{children:"sp\xe9cialit\xe9"})," fonctionne correctement si elle n'est pas utilis\xe9e"]}),"\n",(0,i.jsxs)(n.li,{children:["Assurez-vous que le delete d'un ",(0,i.jsx)(n.strong,{children:"entra\xeeneur"})," fonctionne correctement"]}),"\n"]}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"utilisation-des-vues-partielles-et-de-fontawesome",children:"Utilisation des vues partielles et de FontAwesome"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Utilisez une vue partielle pour regrouper le bouton d'",(0,i.jsx)(n.strong,{children:"action"})," et le bouton de ",(0,i.jsx)(n.strong,{children:"retour vers la liste"}),". Utilisez une vue partielle pour les boutons d'actions des vues suivantes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Trainers/Create"}),"\n",(0,i.jsx)(n.li,{children:"Trainers/Edit"}),"\n",(0,i.jsx)(n.li,{children:"Trainers/Delete"}),"\n",(0,i.jsx)(n.li,{children:"Specialities/Create"}),"\n",(0,i.jsx)(n.li,{children:"Specialities/Edit"}),"\n",(0,i.jsx)(n.li,{children:"Specialities/Delete"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Chaque action peut avoir sa propre vue partielle et c'est aussi possible que 2 actions partagent une m\xeame vue partielle. Au total, vous ne devrez donc pas avoir plus de 3 vue partielles diff\xe9rentes pour cette section, car il existe 3 actions (Create, Edit et Delete) et vous ",(0,i.jsx)(n.strong,{children:"DEVEZ"})," r\xe9utiliser vos vues partielles entre ",(0,i.jsx)(n.strong,{children:"Trainer"})," et ",(0,i.jsx)(n.strong,{children:"Speciality"})]})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Maintenant que vos boutons d'actions sont r\xe9utilis\xe9s dans vos diff\xe9rentes vues, utilisez FontAwesome pour les boutons suivants:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/plus.svg",width:"20",height:"20"})," pour Create"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/floppy-disk.svg",width:"20",height:"20"})," pour Save"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/trash.svg",width:"20",height:"20"})," pour Delete"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/circle-left.svg",width:"20",height:"20"})," pour Back to List"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Si vos boutons sont trop pr\xe8s des autres champs, donnez leur un peu d'espace!"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Image Reference",src:s(4761).A+"",width:"261",height:"133"}),"\n\u274c"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Image Reference",src:s(9884).A+"",width:"261",height:"135"}),"\n\ud83d\udc4c"]}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"ajout-de-clients-et-de-leurs-objectifs",children:"Ajout de clients et de leurs objectifs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Mettez en place le mod\xe8le de donn\xe9e pour les clients (",(0,i.jsx)(n.strong,{children:"Customer"}),") et leurs objectifs (",(0,i.jsx)(n.strong,{children:"Objective"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image Reference",src:s(2805).A+"",width:"430",height:"242"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Customer"',children:"public string FirstName { get; set; }\npublic string LastName { get; set; }\npublic string Email { get; set; }\npublic DateTime BirthDate { get; set; }\npublic double StartWeight { get; set; }\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image Reference",src:s(9828).A+"",width:"435",height:"221"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",metastring:'title="Objective"',children:"public string Name { get; set; }\npublic double LostWeightKg { get; set; }\npublic double DistanceKm { get; set; }\npublic DateTime AchievedDate { get; set; }\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Un ",(0,i.jsx)(n.strong,{children:"Customer"})," a donc une relation ",(0,i.jsx)(n.strong,{children:"un \xe0 plusieurs"})," avec ses ",(0,i.jsx)(n.strong,{children:"Objective"}),". La seule chose qui diff\xe9rencie l'objectif courant, c'est qu'il n'a pas d'",(0,i.jsx)(n.strong,{children:"AchievedDate"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ajouter un seed \ud83c\udf31 avec 3 clients (",(0,i.jsx)(n.strong,{children:"Customer"}),") et leurs objectifs (",(0,i.jsx)(n.strong,{children:"Objective"}),").","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Les 3 premier clients doivent \xeatre associ\xe9 \xe0 l'entra\xeeneur: ",(0,i.jsx)(n.strong,{children:"Chrystal Lapierre"})]}),"\n",(0,i.jsxs)(n.li,{children:["Le 4e client doit \xeatre associ\xe9 \xe0 l'entra\xeeneur: ",(0,i.jsx)(n.strong,{children:"F\xe9lix Trudeau"})]}),"\n",(0,i.jsxs)(n.li,{children:["Un objectif est consid\xe9r\xe9 comme ",(0,i.jsx)(n.strong,{children:"courant"})," si il n'a pas d'AchievedDate et comme ",(0,i.jsx)(n.strong,{children:"compl\xe9t\xe9"})," si il en a un."]}),"\n",(0,i.jsxs)(n.li,{children:["Le premier client doit avoir un objectif ",(0,i.jsx)(n.strong,{children:"courant"})," et ",(0,i.jsx)(n.strong,{children:"trois"})," objectifs ",(0,i.jsx)(n.strong,{children:"compl\xe9t\xe9"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Le deuxi\xe8me client doit avoir ",(0,i.jsx)(n.strong,{children:"deux"})," objectifs ",(0,i.jsx)(n.strong,{children:"courants"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Le troisi\xe8me client doit avoir ",(0,i.jsx)(n.strong,{children:"deux"})," objectifs ",(0,i.jsx)(n.strong,{children:"compl\xe9t\xe9s"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Le quatri\xe8me client doit avoir un objectif ",(0,i.jsx)(n.strong,{children:"courant"})," et un objectif ",(0,i.jsx)(n.strong,{children:"compl\xe9t\xe9"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Le contenu exacte des objectif n'est pas important, mais ils doivent tous \xeatre diff\xe9rents et ils doivent contenir un m\xe9lange de courses et de perte de poids."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Une fois que c'est fait, v\xe9rifiez les donn\xe9es dans votre base de donn\xe9es!"}),"\n"]}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"ajout-dune-page-de-statistiques",children:"Ajout d'une page de statistiques"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Cr\xe9er une page pour afficher des statistiques \xe0 propos de l'application."}),"\n",(0,i.jsxs)(n.li,{children:["Il faut ajouter ",(0,i.jsx)(n.strong,{children:"Stats"})," dans le menu de navigation pour pouvoir acc\xe9der \xe0 la page de statistiques."]}),"\n",(0,i.jsxs)(n.li,{children:["Il faut utiliser un ",(0,i.jsx)(n.strong,{children:"ViewModel"})," pour contenir les informations \xe0 afficher dans cette vue, nommez-le simplement ",(0,i.jsx)(n.strong,{children:"StatsVM"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Il faut utiliser ",(0,i.jsx)(n.strong,{children:"Linq"})," pour obtenir les stats. Chaque stat va demander l'utilisation d'au moins une m\xe9thode de Linq qui est sp\xe9cifi\xe9e dans les instructions."]}),"\n",(0,i.jsx)(n.li,{children:"Voici les stats qu'il faut afficher"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["La distance totale des objectifs avec une Distance (En utilisant ",(0,i.jsx)(n.strong,{children:"Sum"})," de Linq)"]}),"\n",(0,i.jsxs)(n.li,{children:["Le nombre d'objectifs le plus \xe9lev\xe9 d'un m\xeame client (En utilisant ",(0,i.jsx)(n.strong,{children:"Max"})," de Linq)"]}),"\n",(0,i.jsxs)(n.li,{children:["Une tr\xe8s courte liste avec les deux clients les plus vieux en ordre d\xe9croissant. Il faut afficher leurs noms et leurs \xe2ges. (En utilisant ",(0,i.jsx)(n.strong,{children:"OrderBy"})," et ",(0,i.jsx)(n.strong,{children:"Take"})," de Linq)"]}),"\n",(0,i.jsxs)(n.li,{children:["Les deux stats suivantes sont seulement pour l'entra\xeeneur Chrystal Lapierre","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["La perte de poids moyenne de ses clients (Moyenne par client, pas par objectif en utilisant ",(0,i.jsx)(n.strong,{children:"Average"})," et ",(0,i.jsx)(n.strong,{children:"Sum"})," de Linq)"]}),"\n",(0,i.jsxs)(n.li,{children:["Le nombre maximal d'objectifs compl\xe9t\xe9s par un de ses clients (En utilisant ",(0,i.jsx)(n.strong,{children:"Max"})," de Linq)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Voici une r\xe9f\xe9rence pour comprendre ce que l'application doit afficher. (Les valeurs ne sont ",(0,i.jsx)(n.strong,{children:"pas"})," les bonnes, \xe9videmment)"]}),"\n"]}),"\n",(0,i.jsx)(d,{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:s(8120).A+"",width:"741",height:"578"})})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Vous pouvez faire cette page en fran\xe7ais ou en anglais."})}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"affichage-dun-menu-dobjectifs",children:"Affichage d'un menu d'objectifs"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"C'est maintenant le moment de travailler sur la derni\xe8re fonctionnalit\xe9e, l'affichage des objectifs."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Il faut ajouter une nouvelle option qui doit se nommer ",(0,i.jsx)(n.strong,{children:"Objectives"})," dans le menu de navigation pour pouvoir acc\xe9der \xe0 la page d'objectifs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Voici ce que l'on doit voir dans ce menu lorsque l'on clique sur ",(0,i.jsx)(n.strong,{children:"Chrystal Lapierre"}),":\n",(0,i.jsx)(n.img,{alt:"Image Reference",src:s(8250).A+"",width:"1335",height:"470"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Et lorsque l'on clique sur ",(0,i.jsx)(n.strong,{children:"F\xe9lix Trudeau"}),":\n",(0,i.jsx)(n.img,{alt:"Objectifs #2",src:s(8466).A+"",width:"1349",height:"333"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pour le menu pr\xe9c\xe9dent vous devrez utiliser un ",(0,i.jsx)(n.strong,{children:"accordion"})," de bootstrap pour afficher chacun des entra\xeeneurs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Une fois que vous affichez le contenu pour un entra\xeeneur, utilisez simplement un tableau."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Pour ce menu, vous ",(0,i.jsx)(n.strong,{children:"devez"})," utiliser au une vue partielle pour affichez le tableau et vous ",(0,i.jsx)(n.strong,{children:"devez"})," \xe9galement utiliser une vue partielle pour afficher le contenu de chaque rang\xe9 du tableau."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Vous ",(0,i.jsx)(n.strong,{children:"devez"})," \xe9galement utiliser un ViewModel qui doit se nommer ",(0,i.jsx)(n.strong,{children:"TrainerObjectivesVM"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Vous ",(0,i.jsx)(n.strong,{children:"devez"})," \xe9galement cr\xe9er un ViewModel qui doit se nommer ",(0,i.jsx)(n.strong,{children:"CustomerObjectivesVM"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Le ViewModel ",(0,i.jsx)(n.strong,{children:"TrainerObjectivesVM"})," ",(0,i.jsx)(n.strong,{children:"doit"}),", en plus de ses autres propri\xe9t\xe9s, contenir un IEnumerable<CustomerObjectivesVM>."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Vous pouvez nommer vos vues comme vous le voulez, mais voici une suggestion:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Vue principale avec l'accord\xe9on (",(0,i.jsx)(n.strong,{children:"accordion"}),") (AllObjectives.cshtml)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Vue partielle avec le tableau (TrainerObjectives.cshtml)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Vue partielle avec une rang\xe9 du tableau (CustomerObjectives.cshtml)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"12",children:["\n",(0,i.jsxs)(n.li,{children:["Remarquez que pour chaque titre de l'",(0,i.jsx)(n.strong,{children:"accordion"})," on affiche le nom de l'entra\xeeneur ",(0,i.jsx)(n.strong,{children:"ET sa sp\xe9cialit\xe9"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Pour le status, il faut afficher un de ces 3 messages qui d\xe9pend directement du nombre d'objectif incomplet qui est affich\xe9 dans la colonne pr\xe9c\xe9dente. Utilisez une couleur diff\xe9rente pour chaque message (color-success, color-warning, color-danger)."}),"\n"]}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"grille-de-correction",children:"Grille de correction"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"T\xe2che"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Nb Points"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Mise en place du projet initial"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Gestion des sp\xe9cialit\xe9s"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Gestion des entra\xeeneurs"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Ajout \xe0 l'index de sp\xe9cialit\xe9s"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Logique d'affaire"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Utilisation de vues partielles pour les boutons"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Utilisation de FontAwesome"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Ajout des clients et de leurs objectifs"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Affichage de statisques avec requ\xeates Linq"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Affichage des objectifs"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Consignes Git (commits/push)"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Total"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.strong,{children:"/20"})})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9660:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/files/TP1_FichiersComplementaires-9fed67dbed347a217878dafbe053c719.zip"},8120:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-1-4edb1416e912101d7d20f18c34af8891.png"},9418:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-0787f79a0c18228ce1a3022771b8afae.png"},8250:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Objectives-c49b2a4d709e3870b2ba202718a5221a.png"},8466:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/Objectives2-888718ab8f9ed002ebe33e2b0b3e2ba8.png"},4145:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/ReferenceProjet-485a4f3ba054f3427faa2d042f4dbbc2.png"},9748:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/deleteSpecialityError-678dcdd1dcfd95f37a5d56c9589a7da1.png"},2805:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/diagrammeCustomer-c0ef1a4a90614aa669ff36d083869a6a.png"},9828:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/diagrammeObjective-701eae8fea2e5b401518857edcd209ac.png"},14:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/diagrammeSpeciality-8987567d080f0e5cd33eb93ed3aa0cb0.png"},4654:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/diagrammeTrainer-95591dcdd3d4340f5ca9000e89716016.png"},9884:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/rightMargin-c7e3eb4150cc4619bec947d378865c3a.png"},4761:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/wrongMargin-a3ef021e2a97b7f7dbea7ffbdb7f06b0.png"}}]);