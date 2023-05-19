"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1236],{84122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="Sol2Ink",o={unversionedId:"applications/sol2ink-follow-up",id:"applications/sol2ink-follow-up",title:"Sol2Ink",description:"- Team Name: 727.ventures",source:"@site/applications/sol2ink-follow-up.md",sourceDirName:"applications",slug:"/applications/sol2ink-follow-up",permalink:"/applications/sol2ink-follow-up",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sol2ink-follow-up.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Previous work",id:"previous-work",level:3},{value:"Milestone 1 \u2014 Implement\tSol2Ink cli tool for simple contract parsing",id:"milestone-1--implementsol2ink-cli-tool-for-simple-contract-parsing",level:3},{value:"Current work - Scope of this Grant",id:"current-work---scope-of-this-grant",level:3},{value:"Milestone 2 \u2014 Upgrade focused on complex Smart contract applications parsing",id:"milestone-2--upgrade-focused-on-complex-smart-contract-applications-parsing",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sol2ink"},"Sol2Ink"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures"},"727.ventures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," ERC 20 ADDRESS (DAI):\n0x352F779203202c99699CdA8cc95adF06CcC8abEf "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This is a follow-up application for our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/sol2ink.md"},"first milestone")),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The goal of this project is to ease the way to Polkadot (Ink!) ecosystem\nfor the current Solidity smart contract developers and dapps written\nin Solidity. Since the ecosystem is relatively new, it may be\ndiscouraging and time-consuming for developers and teams to rewrite\nwhole existing code bases of their smart contract applications into a\ndifferent language (Rust, Ink!)."),(0,i.kt)("p",null,"This project aims to accelerate this process by transpiling existing\nSolidity code into Rust and ink! code, while considering existing\nstandards of these languages and ecosystems. Some of the points which\nare the most time-consuming while doing such transformation are for\nexample rewriting the headers of functions (position of type and name\nidentifiers), different behavior of common data types, as well as\nusage of different primitive types, and many more. If a developer\ndecides to use Sol2Ink, it is still needed for them to check the\ngenerated code and correct some issues which may not be handled well\nby the program, but the first step of transforming the code base is\ncompleted and already has saved the developer a lot of time. A simple\nprototype that was already tested by our developers, which handles\nonly interfaces for now (since it is very simple to transform those),\ncan already decrease the time of rewriting some extensive interfaces\ninto Rust and Ink! from one hour to ten minutes, after correcting\nsmall issues, which the prototype did not consider yet."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Sol2Ink will take the code of an existing smart contract (or existing\nsmart contract application) and transpile the code from Solidity into\nRust. Since it is a smart contract application, it will also use Ink!\nimplementations to make it a deployable smart contract application.\nWhile doing this, the developer will have an option to use existing\nstandards and PSPs, one example may be optional usage of OpenBrush\nstandards (e.g. if there is a call to the ERC-20 interface inside\nthe contract being transformed, the program will use the PSP-22\ninterface from OpenBrush to do the same call). The next step (where\nRust applications differ from Solidity applications) is to use the\ncorrect file structure in the transformed application, and Sol2Ink\nwill handle this as well."),(0,i.kt)("p",null,"This way, we can divide the details of Sol2Ink into a roadmap:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement\tSol2Ink cli tool for simple contract parsing")),(0,i.kt)("p",null,"The user will give Sol2Ink the\ncode they want to transform into Ink! and Rust, Sol2Ink will\ntranspile this code and output the Rust/Ink! code in a new file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create\tdocumentation and a website with guides on how to use Sol2Ink")),(0,i.kt)("p",null,"Users will better understand\nthe processes behind the code transpilation and will be more aware of\npossible issues which may emerge while using Sol2Ink."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sol2Ink\tupgrade focused on the ability to parse complex smart contract\tapplications")),(0,i.kt)("p",null,"The user will be able to give Sol2Ink their whole Solidity project, Sol2Ink will transpile the code and output the Rust/Ink! code in files with a comprehensive file structure. At this stage, Sol2Ink should be able to handle generalization or multiple file dapps in a single step"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integration\tof parsing dependencies and PSP usage option")),(0,i.kt)("p",null,"One problem may emerge with\ngeneralization, which exists in Solidity but does not exist in Rust.\nWe can solve this with traits, and this milestone will be focused on\na more efficient way of handling such cases."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sol2Ink\tweb application interface")),(0,i.kt)("p",null,"More user-friendly way of using Sol2Ink, with a better user experience and without the need of downloading additional tools."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maintenance\tand integration of new ecosystem standards and updates")),(0,i.kt)("p",null,"The ecosystem is growing each day, each day new standards and tools emerge. Our product aims to give the best results, and we need to keep up with the ecosystem to fulfill this goal."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Where\tand how does your project fit into the ecosystem?")),(0,i.kt)("p",null,"As there are many products already existing within the Solidity\necosystem, which aim to live in the Polkadot/Ink! ecosystem as well,\nwe think that a lot of processes linked with such transformation are\nrepetitive and time-consuming and can be done faster with such\ntranspiler as Sol2Ink aims to be. Therefore we think, that such a\ntranspiler may speed up the development process for teams\ntransforming Solidity code bases into Rust and Ink!, and also ease\nthe way into this ecosystem for new Ink! developers who want to\ntransform their existing Solidity solutions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Who\tis your target audience (parachain/dapp/wallet/UI developers,\tdesigners, your own user base, some dapp's userbase, yourself)?")),(0,i.kt)("p",null,"Solidity developers looking to transform applications into Rust and Ink!."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What need(s) does your project meet?")),(0,i.kt)("p",null,"Our project is a tool that will fasten the development process of\ntransforming existing Solidity projects into Rust and Ink!."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are\tthere any other projects similar to yours in the Substrate /\tPolkadot / Kusama ecosystem?")),(0,i.kt)("p",null,"We know about ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/solang"},"Solang"),", which is a similar project to Sol2Ink, but\nSolang is used for the transition between Solidity and WASM, while Sol2Ink will be a transpiler to readable and editable source code, we are\nnot aware of such projects in the Dotsama ecosystem.\nWe are also aware of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/madfish-solutions/sol2ligo"},"Sol2Ligo"),", which is a transpiler from Solidity to Ligo, which should help with migration to Tezos."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Markian Ivanichok")," (\u0421EO of 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fedor Lebed")," (Head of Operations | 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nameless Endless")," (Blockchain Developer | 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dominik Kr\xed\u017eo")," (Blockchain Developer | 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Green Baneling")," (Blockchain Core Rust Engineer | 727.ventures)  ")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Fedor Lebed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:fedor.lebed@727.ventures"},"fedor.lebed@727.ventures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"727.ventures"},"727.ventures"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," The registered office shall be in Coastal Building, Wickham\u2019s\nCay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Seven2seven Ventures Ltd")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Markian Ivanichok"),(0,i.kt)("br",{parentName:"p"}),"\n","CEO of 727.ventures, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fedor Lebed"),(0,i.kt)("br",{parentName:"p"}),"\n","Head of Operations\nFedor is the head of operations at Brushfam, a portfolio company of 727. ventures which is developing the ink! Smart contracts tools.\nFedor invested in mining pools from 15 years old. He has a background in product management, working with international software products for Tier-1 markets."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nameless Endless"),(0,i.kt)("br",{parentName:"p"}),"\n","Blockchain Developer\nBecame interested in programming at the age of 16. At this time, he tried web development and created a website. Then decided to go to University to study system programming and object-oriented programming. Most often, he used C and C++ languages. Nameless likes innovations of web3 technologies and believes in the potential of Rust language and WASM standard for smart contracts."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dominik Kr\xed\u017eo"),(0,i.kt)("br",{parentName:"p"}),"\n","Blockchain Developer\nStarted programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer in 2018. In 2017 he started his crypto venture by investing in BTC and Ethereum and getting more knowledge regarding smart contracts and DeFi protocols during DeFi summer 2020. As a programmer, he wanted to know more behind the scenes of smart contracts, so he started to develop his own smart contract applications for Ethereum and then becoming a Rust and Ink! developer in , since he believes that WASM with its benefits over EVM is the future of smart contract applications. As a part of his Android developer career, Dominik was working on porting of applications from C++ to Android/Java, for which he also worked on a tool to ease this process, describing the process of transformation of code base from one language to another in his bachelor's thesis."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Green Baneling"),(0,i.kt)("br",{parentName:"p"}),"\n","Blockchain Core Developer",(0,i.kt)("br",{parentName:"p"}),"\n","Primary programming languages are: C++, Go, Rust"),(0,i.kt)("p",null,"Finished the faculty of applied mathematics(Master degree). Participated in programming competitions during education. Has worked as a programmer for around 6 years."),(0,i.kt)("p",null,"Was a freelancer the first year, creating an application for IOS(Swift), creating modules for the desktop application on C++. After that, spent 2 years in a company which created software for TV devices(C++/ Haxe).  After which, for 3 years, worked on different blockchain projects(C++/Go/Rust/Solidity/Js)."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures"},"https://github.com/727-Ventures"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/o-tsaruk"},"https://github.com/o-tsaruk")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/coreggon11"},"https://github.com/coreggon11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/xgreenx"},"https://github.com/xgreenx"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mivanichok/"},"https://www.linkedin.com/in/mivanichok/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/toma-sadova/"},"https://www.linkedin.com/in/toma-sadova/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dominik-krizo/"},"https://www.linkedin.com/in/dominik-krizo/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/sol2ink"},"The project")," is already in release ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0"),"."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We have decided to describe a full roadmap of an Sol2Ink here, with estimates. However, the funding we request at this stage is for milestone 2.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 10 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2-2.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 60,000 USD")),(0,i.kt)("h3",{id:"previous-work"},"Previous work"),(0,i.kt)("h3",{id:"milestone-1--implementsol2ink-cli-tool-for-simple-contract-parsing"},"Milestone 1 \u2014 Implement\tSol2Ink cli tool for simple contract parsing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 36,000 USD"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delivery status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/sol2ink-delivery.md"},"Delivered"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a documentation for the user on how to use our tool for simplification of their process of transformation of Solidity code to Rust and Ink! code, along with inline documentation of code so the developers can better understand the processes in the backend")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Sol2Ink CLI"),(0,i.kt)("td",{parentName:"tr",align:null},"A CLI application which will take a Solidity file as the input and produce a transformed Rust file with Rust and ink! code as the output")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Integrate OpenBrush"),(0,i.kt)("td",{parentName:"tr",align:null},"Since OpenBrush is a tool to ease and fasten the smart contracts development in ink!, we will add this library to the smart contracts generated by Sol2Ink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Website with guides"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a website where we will compare a transformation of Solidity code into Rust and ink! code, along with issues which may occur (for example handling of Assembly blocks etc.).")))),(0,i.kt)("h3",{id:"current-work---scope-of-this-grant"},"Current work - Scope of this Grant"),(0,i.kt)("h3",{id:"milestone-2--upgrade-focused-on-complex-smart-contract-applications-parsing"},"Milestone 2 \u2014 Upgrade focused on complex Smart contract applications parsing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 10 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2-2.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 60,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will enhance both the inline documentation as well as the website with guides to reflect new features implemented in this milestone")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. Documentation will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Website with guides"),(0,i.kt)("td",{parentName:"tr",align:null},"We will enhance the existing guides to reflect new features implemented in this milestone; The website with guides is something like an enhanced documentation, the inline documentation just describes the functions of the program, the guides go deeper into how it works, and it also contains a tutorial for usage of Sol2Ink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Split contract into traits"),(0,i.kt)("td",{parentName:"tr",align:null},"Currently all logic and storage is in one contract file. This upgrade will generate traits for each contract that the contract is using, splitting logic and storage into separate traits. This will also nicely handle inheritance of Solidity smart contracts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Sol2Ink transpiler update"),(0,i.kt)("td",{parentName:"tr",align:null},"We will update the transpiler to deal with code which it currently does not support or parses incorrectly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3a."),(0,i.kt)("td",{parentName:"tr",align:null},"Functions with value"),(0,i.kt)("td",{parentName:"tr",align:null},"Support calls with value transferring")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3b."),(0,i.kt)("td",{parentName:"tr",align:null},"Chained selectors"),(0,i.kt)("td",{parentName:"tr",align:null},"Fix parsing of chained selectors")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3c."),(0,i.kt)("td",{parentName:"tr",align:null},"Updating structs inside of a mapping"),(0,i.kt)("td",{parentName:"tr",align:null},"Fix how Sol2Ink rewrites fields of a structure inside a mapping")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3d."),(0,i.kt)("td",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("td",{parentName:"tr",align:null},"Fix some occassions where parsing of a modifier causes the output code to be uncompilable (for example if there is a function call as a modifier argument")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3e."),(0,i.kt)("td",{parentName:"tr",align:null},"Fix bugs"),(0,i.kt)("td",{parentName:"tr",align:null},"Fix many small bugs which can occur, after this a more complex contracts (e.g. Uniswap) can be fully covered with Sol2Ink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Library parsing"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement the parser for Solidity libraries; currently Sol2Ink only looks for definition of a contract or an interface, since libraries must be handled in a different way, meaning that there is no problem in parsing of Solidity code of a library, but the output code of a Solidity library must be handled in a different way, which is the goal of this deliverable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Handling dependencies and generalization"),(0,i.kt)("td",{parentName:"tr",align:null},"This will be implemented via traits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"Multi-file project parsing"),(0,i.kt)("td",{parentName:"tr",align:null},"This will be implemented via traits")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article which explains the advantages of using Sol2Ink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Handle Solidity specific cases"),(0,i.kt)("td",{parentName:"tr",align:null},"Delegate calls, assembly code, try/catch blocks etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Sol2Ink web application"),(0,i.kt)("td",{parentName:"tr",align:null},"Web app for an even easier work with Sol2Ink")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Maintenance"),(0,i.kt)("td",{parentName:"tr",align:null},"Keeping up with new ecosystem standards, fixing issues from community")))),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," personal recommendation"))}u.isMDXComponent=!0}}]);