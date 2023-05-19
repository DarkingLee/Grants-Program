"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8735],{39075:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(95657);const r={},i="Calamar",s={unversionedId:"applications/Calamar",id:"applications/Calamar",title:"Calamar",description:"- Team Name: TopMonks",source:"@site/applications/Calamar.md",sourceDirName:"applications",slug:"/applications/Calamar",permalink:"/applications/Calamar",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Calamar.md",tags:[],version:"current",frontMatter:{}},o={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Homepage",id:"homepage",level:4},{value:"Universal search",id:"universal-search",level:4},{value:"Block detail",id:"block-detail",level:4},{value:"Extrinsic detail",id:"extrinsic-detail",level:4},{value:"Call detail",id:"call-detail",level:4},{value:"Event detail",id:"event-detail",level:4},{value:"Search extrinsics and events by name",id:"search-extrinsics-and-events-by-name",level:4},{value:"Account detail",id:"account-detail",level:4},{value:"Chain dashboards",id:"chain-dashboards",level:4},{value:"Cross-chain transfers",id:"cross-chain-transfers",level:4},{value:"Technology stack",id:"technology-stack",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Project references",id:"project-references",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Core functionality",id:"milestone-1--core-functionality",level:3},{value:"Milestone 2 - Account detail &amp; Cross-chain transfers",id:"milestone-2---account-detail--cross-chain-transfers",level:3},{value:"Milestone 3 - Universal search &amp; Chain dashboards",id:"milestone-3---universal-search--chain-dashboards",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},m="wrapper";function u(t){let{components:e,...a}=t;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"calamar"},"Calamar"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," TopMonks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 32NoFbB4x8bZ7YNvjra1DUYcje2B2XQwP3 (BTC)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"This application is a response to a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/under_development/multi-chain-block-explorer.md"},"Multi-chain Block Explorer")," RFP"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Calamar is a block explorer for Polkadot and Kusama relay chains and their parachains, that uses Subsquid API for data fetching."),(0,l.kt)("p",null,"The idea for another explorer has emerged during the dotsama events in Amsterdam and Prague. The team of TopMonks company's Blockchain Studio has gathered feedback from friendly projects such as HydraDx and KodaDot among others.\nWe have applied for and won the bounty from Subsquid in the Polkadot Hackaton: North America edition, that requested developing a block explorer. Our submission: ",(0,l.kt)("a",{parentName:"p",href:"https://devpost.com/software/calamar"},"https://devpost.com/software/calamar")),(0,l.kt)("p",null,"We call the app Calamar, as it is in line with the Subsquid identity."),(0,l.kt)("p",null,"It is available here:\n",(0,l.kt)("a",{parentName:"p",href:"https://calamar.app"},"https://calamar.app")," \\\nand we manage the code here:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/topmonks/calamar"},"https://github.com/topmonks/calamar")),(0,l.kt)("p",null,"Based on the positive feedback we would like to push the project further and bring more valuable features for the users, closely cooperating with the ",(0,l.kt)("a",{parentName:"p",href:"https://subsquid.io"},"Subsquid")," team and gathering an ongoing feedback from the users."),(0,l.kt)("p",null,"While developing Calamar, we focus on UI and UX friendliness so that users enjoy dotsama chains exploring, as well as relevance of displayed data."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"Calamar explorer will allow users to search and display various items and statistics."),(0,l.kt)("p",null,"The plan is to have at least these features implemented:"),(0,l.kt)("h4",{id:"homepage"},"Homepage"),(0,l.kt)("p",null,"Homepage with google-like search box and with links to ",(0,l.kt)("a",{parentName:"p",href:"#chain-dashboards"},"chain dashboards"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/topmonks/image/upload/v1661767637/calamar/homepage.png",alt:"Home page"})),(0,l.kt)("h4",{id:"universal-search"},"Universal search"),(0,l.kt)("p",null,"Search where you don't have to know which chain the searched item belongs to. You just put the hash into the search box and the explorer will take care of the determining on which chain it is. This is going to be an addition to the ability to restrict search to a specific chain."),(0,l.kt)("h4",{id:"block-detail"},"Block detail"),(0,l.kt)("p",null,"Display block's data and its extrinsics, transfers, calls and events."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"searchable by hash and height")),(0,l.kt)("h4",{id:"extrinsic-detail"},"Extrinsic detail"),(0,l.kt)("p",null,"Display extrinsic's data, its calls and events."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"searchable by hash and id")),(0,l.kt)("h4",{id:"call-detail"},"Call detail"),(0,l.kt)("p",null,"Display call's data, and its events."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"searchable by id")),(0,l.kt)("h4",{id:"event-detail"},"Event detail"),(0,l.kt)("p",null,"Display event's data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"searchable by id")),(0,l.kt)("h4",{id:"search-extrinsics-and-events-by-name"},"Search extrinsics and events by name"),(0,l.kt)("p",null,"Display a list of matching extrinsics and events by name."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"full-text search - doesn't require exact name, substring is sufficient, case insensitive")),(0,l.kt)("h4",{id:"account-detail"},"Account detail"),(0,l.kt)("p",null,"As we are gathering feedback, one of the most important features for the users seems to be the account overview where users can find information about their balances and transactions across all chains."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"searchable by public key or chain-specific address"),(0,l.kt)("li",{parentName:"ul"},"display",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"account's name if set"),(0,l.kt)("li",{parentName:"ul"},"owned assets accross all listed chains, including dollar values and graphs for visualization."),(0,l.kt)("li",{parentName:"ul"},"list all chain-specific addresses"),(0,l.kt)("li",{parentName:"ul"},"list all related transfers, XCM transfers, extrinsics and calls")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/topmonks/image/upload/v1672668761/calamar/account2.png",alt:"Account page"})),(0,l.kt)("h4",{id:"chain-dashboards"},"Chain dashboards"),(0,l.kt)("p",null,"Each chain will have own dashboard with statistics and listing of latest blocks, latest transfers, top holders, etc. It makes the explorer more useful even for users who are not searching for specific items."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/topmonks/image/upload/v1661765199/calamar/statistics.png",alt:"Statistics page"})),(0,l.kt)("h4",{id:"cross-chain-transfers"},"Cross-chain transfers"),(0,l.kt)("p",null,"Important feature is to create good UI for displaying information about XCM teleports and other cross-chain transfers where you can easily see all involved sides (chains, accounts) and other useful data."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"XCM transfer detail")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/topmonks/image/upload/v1662492906/calamar/xcm-transfer-detail.png",alt:"XCM transfer page"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"in transfers table")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/topmonks/image/upload/v1662492938/calamar/xcm-transfers-list.png",alt:"Transfers table"})),(0,l.kt)("h3",{id:"technology-stack"},"Technology stack"),(0,l.kt)("p",null,"Typescript, React, GraphQL"),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Calamar will help the community keep track of what's happening on the network, including XMC transfers, account overviews and chains statistics."),(0,l.kt)("li",{parentName:"ul"},"Target audience are Dotsama developers, investors and ecosystem users."),(0,l.kt)("li",{parentName:"ul"},"Calamar users will have opensource user-friendly UI prepared to use with Subsquid API."),(0,l.kt)("li",{parentName:"ul"},"There are projects with similar functionality like Subscan or Polkaholic. Instead of trying to reinvent the wheel, we won't build our custom data indexing solution and rather rely on the powerful framework and API from Subsquid which is still evolving and has own dedicated development team. We focus on good UI and UX. Our solution will be aware of multichain environment (XCM transfers, cross-chain search, multichain account view). And the code will be opensource.")),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Antonina Nesmelova - developer"),(0,l.kt)("li",{parentName:"ul"},"Richard Jedli\u010dka - developer"),(0,l.kt)("li",{parentName:"ul"},"Radek Jakl - designer"),(0,l.kt)("li",{parentName:"ul"},"Jan Lopusek - project manager")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:")," Jan Lopusek"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("a",{parentName:"li",href:"mailto:jan.lopusek@topmonks.com"},"jan.lopusek@topmonks.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://topmonks.com/"},"https://topmonks.com/")," , ",(0,l.kt)("a",{parentName:"li",href:"https://blockchain.topmonks.com/"},"https://blockchain.topmonks.com/"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:")," Struha\u0159ovsk\xe1 2931/9, 141 00, Praha 4, Czech Republic"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," TopMonks s.r.o")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"All of our team members developed the first version of Calamar explorer."),(0,l.kt)("p",null,"Antonina Nesmelova is young and enthusiastic web-developer with 3,5 years experience with web applications development, including a year and a half of experience in the world of crypto: development of dApps and smart contracts."),(0,l.kt)("p",null,"Richard Jedli\u010dka has several years of expertise in web applications full-stack development."),(0,l.kt)("p",null,"Radek Jakl invented the design for Calamar. He has many years of experience in graphics and UI/UX design."),(0,l.kt)("p",null,"Jan Lopusek co-founded the startup studio for TopMonks software house. He is experienced project manager and business developer"),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/topmonks"},"https://github.com/topmonks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/topmonks/calamar"},"https://github.com/topmonks/calamar")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/uiii"},"https://github.com/uiii")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/antonina-nesmelova"},"https://github.com/antonina-nesmelova"))),(0,l.kt)("h3",{id:"project-references"},"Project references"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://calamar.app/"},"https://calamar.app/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://about.meetvers.io/"},"https://about.meetvers.io/"),", ",(0,l.kt)("a",{parentName:"li",href:"https://app.meetvers.io/"},"https://app.meetvers.io/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brute.cz/"},"https://brute.cz/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://jaklradek.com/"},"http://jaklradek.com/"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/antonina-nesmelova-3a8365149"},"https://www.linkedin.com/in/antonina-nesmelova-3a8365149")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/richardjedlicka/"},"https://www.linkedin.com/in/richardjedlicka/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jaklradek/"},"https://www.linkedin.com/in/jaklradek/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jan-lopusek/"},"https://www.linkedin.com/in/jan-lopusek/"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("p",null,"Current version of Calamar is running on ",(0,l.kt)("a",{parentName:"p",href:"https://calamar.app"},"https://calamar.app")),(0,l.kt)("p",null,"It is mostly a result of our participation in hackaton as an implementation of the bounty declared by Subsquid team. See ",(0,l.kt)("a",{parentName:"p",href:"#additional-information-heavy_plus_sign"},"Additional Information"),"."),(0,l.kt)("p",null,"For now, it allows users to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"search block by hash and height display its parameters and extrinsics"),(0,l.kt)("li",{parentName:"ul"},"search extrinsic by hash and display its parameters and events"),(0,l.kt)("li",{parentName:"ul"},"search account by address and list its extrinsics"),(0,l.kt)("li",{parentName:"ul"},"search extrinsics and events by their exact name.")),(0,l.kt)("p",null,"While it may seem to be already working explorer it has only basic features and lacks many of the important or useful ones. See ",(0,l.kt)("a",{parentName:"p",href:"#milestone-1--core-functionality"},"Milestone 1")," for details."),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 11 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," $27,500")),(0,l.kt)("h3",{id:"milestone-1--core-functionality"},"Milestone 1 \u2014 Core functionality"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," $10,000")),(0,l.kt)("p",null,"Even though we have the already working application, there are still many things missing. Some of them prevent the users from using Calamar fully as the main explorer. We need to first assure the correct core functionality, display all the meaningful data which are retrievable without further complex processing, improve design and UX and integrate more into the Polkadot ecosystem."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation of the code where necessary, technical description of how to run the own instance of Calamar and tutorials how to use the application from the user perspective.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide end-to-end tests covering UI functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) for testing and running own Calamar instance.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains what was done as part of the grant.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Fix usage blockers"),(0,l.kt)("td",{parentName:"tr",align:null},"Fix things which block the app's real usage ",(0,l.kt)("ul",null,(0,l.kt)("li",null,"search results are not shareable due to missing info about the chain in the URL"),(0,l.kt)("li",null,"extrinsic's args are missing")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Add related items listings"),(0,l.kt)("td",{parentName:"tr",align:null},"Add missing related items listing to detail pages",(0,l.kt)("ul",null,(0,l.kt)("li",null,"block's extrinsics, call and events"),(0,l.kt)("li",null,"extrinsic's calls")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Add call detail page"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#call-detail"},"Call detail"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Add event detail page"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#event-detail"},"Event detail"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Responsiveness"),(0,l.kt)("td",{parentName:"tr",align:null},"Improve overall responsiveness for mobile devices especially of item tables and extrinsics/event args.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Extrinsics/event args displaying improvements"),(0,l.kt)("td",{parentName:"tr",align:null},"Add args display options: raw/json, human readable. Find a better way to show nested properties' data types.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Items count"),(0,l.kt)("td",{parentName:"tr",align:null},"Current implementation doens't show the total number of searched items. We would like to retrieve the items count and display it properly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"8."),(0,l.kt)("td",{parentName:"tr",align:null},"Extrinsic/event case-insensitive search by name"),(0,l.kt)("td",{parentName:"tr",align:null},"Add ability to search extrinsics and events by their name case-insensitive.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"9."),(0,l.kt)("td",{parentName:"tr",align:null},"Account address parsing in events args"),(0,l.kt)("td",{parentName:"tr",align:null},"Detect account address in event args and link it to the account detail (chain detected automatically).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"10."),(0,l.kt)("td",{parentName:"tr",align:null},"Website polishing"),(0,l.kt)("td",{parentName:"tr",align:null},"Add useful information to the website (footer with team logos, contact information, terms, etc.).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"11."),(0,l.kt)("td",{parentName:"tr",align:null},"Polkadot.js integration"),(0,l.kt)("td",{parentName:"tr",align:null},"Create a PR to integrate links to the Calamar Explorer into Polkadot.js app.")))),(0,l.kt)("h3",{id:"milestone-2---account-detail--cross-chain-transfers"},"Milestone 2 - Account detail & Cross-chain transfers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 4 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," $10,000")),(0,l.kt)("p",null,"In this milestone we are going to improve ",(0,l.kt)("a",{parentName:"p",href:"#account-detail"},"account detail")," page and replace latest extrinsics page with proper ",(0,l.kt)("a",{parentName:"p",href:"#chain-dashboards"},"dashboard")," page for each chain."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Subsquid (data provider) might not support each feature for all chains at the time of the implementation, so the features will be implemented universally to support each chain whenever the data are provided in the future.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation of the code where necessary and user documentation for new features.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide end-to-end tests covering UI functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"N/A - will be provided by the first milestone."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains what was done as part of the grant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Account / Balance overview"),(0,l.kt)("td",{parentName:"tr",align:null},"Overview of owned assets accross all listed chains with chain specific addresses, including dollar values")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Account / Balance charts"),(0,l.kt)("td",{parentName:"tr",align:null},"Chart visualization of balance by assets and by type (reserved, tranferable, ...), including dollar values")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Account / Transfers list"),(0,l.kt)("td",{parentName:"tr",align:null},"Add account's transfers list table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Account / Calls list"),(0,l.kt)("td",{parentName:"tr",align:null},"Add account's calls list table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Account / Identity info"),(0,l.kt)("td",{parentName:"tr",align:null},"Add account's identity information if set (name, twitter, ...)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"Chain dashboard / Stats"),(0,l.kt)("td",{parentName:"tr",align:null},"Show chain's stats (blocks count, signed extrinsics count, total issuence, transfers count, holders count, total issuence, staked value, inflation rate, validators count) including USD values")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"Chain dashboard / Asset value chart"),(0,l.kt)("td",{parentName:"tr",align:null},"Chart visualization of asset value by type (staked, circulating, other)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"8."),(0,l.kt)("td",{parentName:"tr",align:null},"Chain dashboard / Latest blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Add latest blocks list table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"9."),(0,l.kt)("td",{parentName:"tr",align:null},"Chain dashboard / Latest transfers"),(0,l.kt)("td",{parentName:"tr",align:null},"Add latest transfers list table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"10."),(0,l.kt)("td",{parentName:"tr",align:null},"Chain dashboard / Top holders"),(0,l.kt)("td",{parentName:"tr",align:null},"Add top holders list table")))),(0,l.kt)("h3",{id:"milestone-3---universal-search--chain-dashboards"},"Milestone 3 - Universal search & Chain dashboards"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," $7,500")),(0,l.kt)("p",null,"In this milestone we are going to implement ",(0,l.kt)("a",{parentName:"p",href:"#universal-search"},"universal search")," and one of the most requested features: ",(0,l.kt)("a",{parentName:"p",href:"#cross-chain-transfers"},"cross-chain transfers")," detection."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation of the code where necessary and tutorials on how to use new features.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide end-to-end tests covering UI functionality.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"N/A - will be provided by the first milestone."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains what was done as part of the grant")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Universal search"),(0,l.kt)("td",{parentName:"tr",align:null},"Search items through all the chains without the knowledge where it belongs. See ",(0,l.kt)("a",{parentName:"td",href:"#universal-search"},"Universal search"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"XCM transfers and teleports"),(0,l.kt)("td",{parentName:"tr",align:null},"Detect cross-chain transfers and display relevant information of involved chains and accounts: from chain, to chain, relayed at chain (reserve), sender, beneficiary, etc. Also add their listings to account detail and chain dashboard. See ",(0,l.kt)("a",{parentName:"td",href:"#cross-chain-transfers"},"Cross-chain transfers")," for more.")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"There is a huge potential for future improvements which the Polkadot's community can benefit from."),(0,l.kt)("p",null,"As developers of most parachains implement their own custom modules/pallets it opens the opportunity to cooperate and customize Calamar explorer with UI/UX components and logic tailored to their needs."),(0,l.kt)("p",null,"It relates to various XCM transactions which makes it even more complex and the more types will our explorer support the more it makes the users' lives easier."),(0,l.kt)("p",null,"Another requests which came to us are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"supporting EVM and WASM smart contracts"),(0,l.kt)("li",{parentName:"ul"},"exporting transactions for accounting and taxation purposes"),(0,l.kt)("li",{parentName:"ul"},"displaying NFTs collections and crowdloans rich data")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal recommendation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We participated and won a bounty in ",(0,l.kt)("a",{parentName:"li",href:"https://polkadot-na.devpost.com/"},"Polkadot Hackaton: North America Edition"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bounty: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/subsquid/bounties/issues/1"},"https://github.com/subsquid/bounties/issues/1")),(0,l.kt)("li",{parentName:"ul"},"our submission: ",(0,l.kt)("a",{parentName:"li",href:"https://devpost.com/software/calamar"},"https://devpost.com/software/calamar")))),(0,l.kt)("li",{parentName:"ul"},"We are cooperating with ",(0,l.kt)("a",{parentName:"li",href:"https://subsquid.io"},"Subsquid team")," that provides us data")))}u.isMDXComponent=!0}}]);