"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[659],{67606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},o="Typechain-Polkadot Follow-up-2",l={unversionedId:"applications/typechain-polkadot-follow-up-2",id:"applications/typechain-polkadot-follow-up-2",title:"Typechain-Polkadot Follow-up-2",description:"- Team Name: 727.ventures",source:"@site/applications/typechain-polkadot-follow-up-2.md",sourceDirName:"applications",slug:"/applications/typechain-polkadot-follow-up-2",permalink:"/applications/typechain-polkadot-follow-up-2",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/typechain-polkadot-follow-up-2.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Usage of Typechain-compiler",id:"usage-of-typechain-compiler",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Previous work",id:"previous-work",level:2},{value:"Grant #1",id:"grant-1",level:3},{value:"Grant #2",id:"grant-2",level:3},{value:"Current work - Scope of this grant",id:"current-work---scope-of-this-grant",level:2},{value:"Milestone 1 - High-level improvements, flexibility and simplifying of usage",id:"milestone-1---high-level-improvements-flexibility-and-simplifying-of-usage",level:3},{value:"Future work",id:"future-work",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typechain-polkadot-follow-up-2"},"Typechain-Polkadot Follow-up-2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures"},"727.ventures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," ERC 20 (DAI):\n0x352F779203202c99699CdA8cc95adF06CcC8abEf"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Nowadays, when technologies are growing faster and faster, we should think about optimizing different routine processes and making older stuff better. One of these optimizations is to make code typesafe that will be flexible in different situations."),(0,i.kt)("p",null,"When a smart contract is being written, the front-end developer receives its file representation in the Application Binary Interface (ABI) format. One ABI per each contract, a new ABI for every contract update."),(0,i.kt)("p",null,"Information about how to interact with a contract (methods names, arguments & returns types, etc.) is included in this ABI file. It is not relatively human-readable, so extracting that information becomes a challenge. We need to have correct type definitions for each contract in TypeScript."),(0,i.kt)("p",null,"Interaction with blockchain is done with the polkadot.js library, which only has abstract definitions for the contract in use. Thus users' code cannot be typesafe. And Typechain-Polkadot can change it."),(0,i.kt)("p",null,"This Grant is a follow-up to the previous grants, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot.md"},"Typechain-Polkadot")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot-follow-up.md"},"Typechain-Polkadot Follow-up"),".\nIn this grant, we aim to integrate event subscription, allow users to create their plugins and expand the tool into more packages so the users can alo use different parts of the application alone if needed."),(0,i.kt)("h3",{id:"usage-of-typechain-compiler"},"Usage of Typechain-compiler"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    npx typechain-compiler --config config.json\n\n")),(0,i.kt)("p",null,"Also, you can set some additional arguments like ",(0,i.kt)("inlineCode",{parentName:"p"},"--noCompile"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--noTypechain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--release")),(0,i.kt)("p",null,"Config interface will be something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export interface Config {\n    projectFiles: string[]; // Path to all project files, everystring in glob format\n    skipLinting : boolean; // Skip linting of project files\n    artifactsPath : string; // Path to artifacts folder, where artifacts will be stored it will save both .contract and .json (contract ABI)\n    typechainGeneratedPath : string; // Path to typechain generated folder\n}\n\n")),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output."),(0,i.kt)("p",null,"Given that a front-end developer needs to do this with every contract update, the such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI."),(0,i.kt)("p",null,"When contract descriptions come both with ABI and source code (",(0,i.kt)("inlineCode",{parentName:"p"},"*.contract")," files), our tool will provide means for deployment as well."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Where and how does your project fit into the ecosystem?")),(0,i.kt)("p",null,"There is a whole side to every project in the ecosystem - that is, the front-end side of contract integration - that will find a use for Typechain-Polkadot during the development process."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Who is your target audience?")),(0,i.kt)("p",null,"Our main target audience is front-end and smart-contract developers of Polkadot projects."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What need(s) does your project meet?")),(0,i.kt)("p",null,"Our project speeds up the front-end integration of Polkadot/Substrate/Kusama contracts. As well as brings type safety to developers' code when dealing with contracts. For smart contract developers, it simplifies integration test writing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")),(0,i.kt)("p",null,"No, we are the first project of the kind in the ecosystem. However, in the Solidity ecosystem, a similar project already exists, ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typechain"},"Typechain"),"."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Markian Ivanichok")," (\u0421EO of 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fedor Lebed")," (Head of Operations | 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dominik Kr\xed\u017eo")," (Head of Engineering | 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Varex Silver")," (Blockchain developer | 727.ventures)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Artem Lech")," (Blockchain developer | 727.ventures)")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Fedor Lebed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:feder.lebed@727.ventures"},"fedor.lebed@727.ventures")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"727.ventures"},"727.ventures"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," The registered office shall be in Coastal Building, Wickham\u2019s\nCay II, P. O. Box 2221, Road Town, Tortola, VG1110, British Virgin Islands."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Seven2seven Ventures Ltd")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Markian Ivanichok"),"\nCEO of 727.ventures, Blockchain entrepreneur, Software Engineer. Started my engineering career back when I was 15. Since then, I developed and got a lot of experience in engineering and leadership. Gained entrepreneur experience by founding a couple of startups. Inspired, co-founded and invested in Sector F, one of the top consulting companies in Ukraine that helps entrepreneurs to move faster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fedor Lebed"),"\nFedor is the head of operations at Brushfam, a portfolio company of 727. ventures which is developing the ink! Smart contracts tools.\nFedor invested in mining pools from 15 years old. He has a background in product management, working with international software products for Tier-1 markets."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dominik Kr\xed\u017eo"),"\nHead of Engineering"),(0,i.kt)("p",null,"Started programming own games at age of 15 as a hobby, then went to University studying informatics and object oriented programming, becoming an Android developer, eventually switching to work in web3. Dominik played a crucial role in the OpenBrush and Sol2Ink development and is currently developing the ink! smart contracts tools as part of Brushfam."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Varex Silver"),"\nBlockchain Developer."),(0,i.kt)("p",null,"Student of Computer Science at the Kyiv National University of Taras Shevchenko. Participated in programming competitions of different stages in school since 2017 (C++).\nWas a Backend developer(Go), Solidity developer(Solidity, Hardhat, Typescript), and now Blockchain developer(Rust, Typescript)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Artem Lech"),"\nBlockchain Developer."),(0,i.kt)("p",null,"Student of Applied Mathematics at the Kyiv National University of Taras Shevchenko. Started programming in 2016 and participated in a lot of Ukrainian and international competitions of competitive programming. Worked as a lecturer of algorithms at the school of competitive programming and as Intern Backend Engineer (Rust). Now works as Blockchain Developer on Polkadot Blockchain (Rust, Typescript)."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures"},"https://github.com/727-Ventures"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/coreggon11"},"https://github.com/coreggon11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/varex83"},"https://github.com/varex83")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Artemka374"},"https://github.com/Artemka374"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mivanichok/"},"https://www.linkedin.com/in/mivanichok/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/fedor-lebed-b8520b1a8/"},"https://www.linkedin.com/in/fedor-lebed-b8520b1a8/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dominik-krizo/"},"https://www.linkedin.com/in/dominik-krizo/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bogdan-ogorodniy/"},"https://www.linkedin.com/in/bogdan-ogorodniy/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/artem-fomiuk-31249b226/"},"https://www.linkedin.com/in/artem-fomiuk-31249b226/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/typechain-polkadot"},"The project")," is already a work-in-progress."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"We have decided to describe a full roadmap of a Typechain here, with estimates. However, the funding we request at this stage is for milestone 3."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 8 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 56,000 USD")),(0,i.kt)("h2",{id:"previous-work"},"Previous work"),(0,i.kt)("h3",{id:"grant-1"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/w3f/Grants-Program/pull/992"},"Grant #1")),(0,i.kt)("h3",{id:"grant-2"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/w3f/Grants-Program/pull/1368"},"Grant #2")),(0,i.kt)("h2",{id:"current-work---scope-of-this-grant"},"Current work - Scope of this grant"),(0,i.kt)("h3",{id:"milestone-1---high-level-improvements-flexibility-and-simplifying-of-usage"},"Milestone 1 - High-level improvements, flexibility and simplifying of usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 8 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 56,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will cover new-added features in documentation and usage examples.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article that explains how to integrate the typechain library into a project and describes the types of connection options (directly or via compiler).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"User-defined plugins"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide an opportunity for users to make their plugins, for instance, how to use parsed types, adding new fields and so on.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Subscribing to events"),(0,i.kt)("td",{parentName:"tr",align:null},"We will research and subscribe to events the contract emits, which will be handy for developers.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Typechain-compiler"),(0,i.kt)("td",{parentName:"tr",align:null},"The tool will be easy for big projects to compile Rust code and generate Typechain definitions. It\u2019ll be helpful for TDD when users can write code and develop everything in one CLI command instead of generating a typechain-code file by file. In plans, we want to make a wrapper for running user scripts (like hardhat run) and also functionality to initialize the environment for typechain usage")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Openbrush integration tests"),(0,i.kt)("td",{parentName:"tr",align:null},"We will test typechain on openbrush integration tests to ensure everything is working correctly and is easy to use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"typechain/types package"),(0,i.kt)("td",{parentName:"tr",align:null},"We will make a separate package for types that typechain use to reduce the usage of the same code and separate static code from generated code.")))),(0,i.kt)("h2",{id:"future-work"},"Future work"),(0,i.kt)("p",null,"After this grant, we will maintain the project to keep up with new emerging ecosystem standards, listen to community issues, and update the tool to make the transformation process a more excellent experience for the developers and teams."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")),(0,i.kt)("p",null,"Have a number of approved applications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenBrush"),(0,i.kt)("li",{parentName:"ul"},"Sol2Ink"),(0,i.kt)("li",{parentName:"ul"},"Typechain-polkadot (Milestone 1, 2)")))}c.isMDXComponent=!0}}]);