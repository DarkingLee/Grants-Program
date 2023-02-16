"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9642],{19710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(8209);const r={},o="Rubeus Keeper",s={unversionedId:"applications/RubeusKeeper",id:"applications/RubeusKeeper",title:"Rubeus Keeper",description:"- Team Name: Bela Supernova",source:"@site/docs/applications/RubeusKeeper.md",sourceDirName:"applications",slug:"/applications/RubeusKeeper",permalink:"/Grants-Program/applications/RubeusKeeper",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Design and development of a smart-contract and a testing page",id:"milestone-1--design-and-development-of-a-smart-contract-and-a-testing-page",level:3},{value:"Milestone 2 \u2014 Design and development of a browser extension",id:"milestone-2--design-and-development-of-a-browser-extension",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rubeus-keeper"},"Rubeus Keeper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Bela Supernova"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xC0d28794eA40Ce9b9F4B62a1B2Bb42FD34b7d305 (USDT)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This application is not in response to an RFP, but it fully complies with a potentially interesting project \u201cSign-in with your Polkadot, Kusama, etc. account\u201d mentioned in ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-open-source"},"Open Source Polkadot Stack")," page in the \u201c browser extensions\u201d section."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Remembering passwords from all resources is a challenging task. It doesn\u2019t need any introduction as all Internet users use passwords dozen times a day. The most common, but less reliable way of password managing is using the only password for all resources \u2013 not a good idea, but true. The other one, next most popular \u2013 using password managers built in your browser. Quite reliable for low critical data, but for privacy critical data this is not the way to store passwords as there are several ways for third parties to obtain passwords from these centralized systems. Users that value privacy usually use offline desktop applications for managing passwords \u2013 it\u2019s safe, but has disadvantages as different devices won\u2019t sync, so one has to manage them separately."),(0,i.kt)("p",null,"The aim of this project is to develop a decentralized password manager that stores data in a blockchain and uses personal Polkadot wallet credentials to access the passwords manager dApp. Saved passwords will be added automatically to appropriate forms on websites after logging in with user\u2019s wallet private key in the browser extension."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"The Rubeus Keeper dApp will consist of two functional modules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An Ink! smart contract for se\u0441ure password storage using a Polkadot or Kusama account. Just log in to your Polkadot wallet and get access to your passwords DB. The smart contract will includes methods for writing and getting passwords, as well as categorizing."),(0,i.kt)("li",{parentName:"ol"},"A browser extension for password managing: registration, log in, password generation, categorizing, saving, retrieving, autocomplete functionality.")),(0,i.kt)("p",null,"Under this MVP we consider security in the next attack vectors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Transferred data unauthorized interception and decryption (categories, URLs/logins, passwords)."),(0,i.kt)("li",{parentName:"ol"},"Malicious data substitution by a node.\nTo solve the above mentioned tasks the data will be encrypted using the ChaCha20-Poly1305 streaming algorithm with message authentication. The protocol is standardized by IETF in RFC 7539, in software implementations it is much more efficient and faster than AES.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/98888366/184879468-bb14b061-7e32-4f89-bc15-8d753d66f236.png",alt:"Rubeus schema 3"})),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"The Rubeus Keeper dApp will be used by all the community and even all Internet users as it simplifies and secures daily interaction with web applications \u2013 web2 or web3 \u2013 our dApp will be comprehensively useful. The target audience is \u201ca web user\u201d."),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-open-source"},"Open Source Polkadot Stack")," we see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/logion-network/logion-node"},"Logion network")," project, that represents a separate parachain with very wide functionality. Unlike Logion we offer a simple Ink! contract and an extension that can be used in any Substrate based parachain with no need for setting nodes and etc. Fast, easy and no need for a separate wallet."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sergey Cymbal, MBA, CEO at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Dmitrii Putilov, Blockchain Department Director at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Ilia Shavrin, Full stack software developer at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Anton Shramko, Full stack software developer at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Ksenia Baranova, QA Lead at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Alexey Vexin, Project Manager at Bela Supernova d.o.o"),(0,i.kt)("li",{parentName:"ul"},"Anton Borisov, DevOps Engineer at Bela Supernova d.o.o")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Alexey Vexin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:av@bsn.si"},"av@bsn.si")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.bsn.si"},"https://www.bsn.si"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Cesta v Mestni log 55, Ljubljana 1000, Slovenia"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," BELA SUPERNOVA, sistemske re\u0161itve d.o.o.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Sergey Cymbal is an experienced executive, leader and visioner responsible for the most disruptive innovations initiatives across Oil/Gas, Utilities, and Telcos. Ex-member of winter Olympics HQ, responsible for digitalization, Smart grid evangelist. Blockchain early follower, participates in several crypto initiatives."),(0,i.kt)("p",null,"Dmitrii Putilov has over 17 years of experience leading the teams creating and maintaining high availability sites. His portfolio contains creation of the robee.io investment platform included in top500 in coinmarketcap."),(0,i.kt)("p",null,"Ilia Shavrin is a solution architect and full stack software developer with over 12 years of experience in high load enterprise applications. His most recent focus is on blockchain and creation of decentralized applications."),(0,i.kt)("p",null,"Anton Shramko is an experienced developer with 7 years of experience on various positions, including solution architect in Krypton. Anton active contributor to open source and blockchain communities, he is also a frequent speaker in DevCon conferences. "),(0,i.kt)("p",null,"Ksenia Baranova is an QA test engineer with over 5 years of experience. Ksenia has exceptional knowledge and skills in the field. She is highly referred within this team, as well as by her former teams."),(0,i.kt)("p",null,"Alexey Vexin is a product owner and a project manager with 15+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities and Governmental sectors with deep focus on business process management. Led a dozen of national scaled projects for IT systems implementation and industry scaled technology development, standardization and implementation."),(0,i.kt)("p",null,"Anton Borisov is a DevOps Engineer with broad experience. For over 15 years Anton was supporting, administering, and maintaining secure networks, servers, and clusters. He also has versatile experience with CI/CD, IT Infrastructure Monitoring, and Kubernetes on-premise and in Cloud. One of the most recent projects Anton participated in was building a first on chain casino."),(0,i.kt)("p",null,"Bela Supernova has delivered a W3f grant earlier: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/803#issuecomment-1064184965"},"OCEX")),(0,i.kt)("p",null,"BSN also has 2 active projects under FileCoin, Chainlink and Tgrade grants."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/orgs/bsn-si/repositories"},"https://github.com/orgs/bsn-si/repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManageIQ/manageiq-providers-amazon/commits?author=aiperon"},"https://github.com/ManageIQ/manageiq-providers-amazon/commits?author=aiperon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManageIQ/manageiq/commits/?author=aiperon"},"https://github.com/ManageIQ/manageiq/commits/?author=aiperon")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/friktor?tab=repositories"},"https://github.com/friktor?tab=repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/dsputilov"},"https://github.com/dsputilov")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/friktor"},"https://github.com/friktor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/aiperon"},"https://github.com/aiperon"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Sergey Cymbal]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sergecymbal/"},"https://www.linkedin.com/in/sergecymbal/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Dmitrii Putilov]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dmitri-p-96b0a140/"},"https://www.linkedin.com/in/dmitri-p-96b0a140/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Ilia Shavrin]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ilia-shavrin-716552228/"},"https://www.linkedin.com/in/ilia-shavrin-716552228/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Anton Shramko]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/anton-shramko-25971b162/"},"https://www.linkedin.com/in/anton-shramko-25971b162/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Ksenia Baranova]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mayawotson/"},"https://www.linkedin.com/in/mayawotson/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Alexey Vexin]"," (",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alexey-vexin-800a4068/"},"https://www.linkedin.com/in/alexey-vexin-800a4068/"),")"),(0,i.kt)("li",{parentName:"ul"},"[Anton Borisov]")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"We plan to execute 2 deliverables in two milestones:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an Ink! smart contract for password storage;"),(0,i.kt)("li",{parentName:"ul"},"a browser extension for password management (tested under Chrome browser).")),(0,i.kt)("p",null,"The project will be supported by a team of 2 developers, 1 UI/UX designer, 1 DevOps engineer and 1 QA."),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 2,5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USDT")),(0,i.kt)("h3",{id:"milestone-1--design-and-development-of-a-smart-contract-and-a-testing-page"},"Milestone 1 \u2014 Design and development of a smart-contract and a testing page"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1,5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 22,000 USDT")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can run our smart contract and send test transactions, which will show how the functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Ink! smart-contract"),(0,i.kt)("td",{parentName:"tr",align:null},"An Ink! smart-contract for password storage and use: \u201cadd password (title, url, username, password, comment)\u201d, \u201cdelete password\u201d, \u201cget password\u201d, \u201cadd category\u201d, \u201cdelete category\u201d, \u201cget categories\u201d. Stored data will be encrypted using the ChaCha20-Poly1305 streaming algorithm with message authentication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Test page"),(0,i.kt)("td",{parentName:"tr",align:null},"A test page for running functional tests: categories (get data from a blockchain, decrypt received data, unzip and get passwords, categories list render, passwords list render by categories); save password (data entry form, data serialization, zip data, data encryption, send transaction); show balance. The test page will be developed using JavaScript.")))),(0,i.kt)("h3",{id:"milestone-2--design-and-development-of-a-browser-extension"},"Milestone 2 \u2014 Design and development of a browser extension"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USDT")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can run our smart contract and send test transactions, which will show how the functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness under the Chrome browser. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains what was achieved, how to use the new Dapp and what are the benefits of using the system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Browser extension"),(0,i.kt)("td",{parentName:"tr",align:null},"A Chrome browser extension MVP for password management: a registration page (login with a Polkadot wallet private key and set a master-password); login page (using master-password); categories (get data from a blockchain, decrypt received data, unzip and get passwords, categories list render, passwords list render by categories); save password (data entry form, data serialization, zip data, data encryption, send transaction); password generation window, show balance. The extension will be developed using JavaScript.")))))}u.isMDXComponent=!0}}]);