"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[3209],{23245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(95657);const i={},r="Decentralized Well-being Game API",o={unversionedId:"applications/decentralized_well-being_game_api",id:"applications/decentralized_well-being_game_api",title:"Decentralized Well-being Game API",description:"Team Name",source:"@site/applications/decentralized_well-being_game_api.md",sourceDirName:"applications",slug:"/applications/decentralized_well-being_game_api",permalink:"/applications/decentralized_well-being_game_api",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/decentralized_well-being_game_api.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Team Name",id:"team-name",level:2},{value:"Payment Address",id:"payment-address",level:2},{value:"Overview",id:"overview",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:2},{value:"Team",id:"team",level:2},{value:"Team Members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:2},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status",id:"development-status",level:2},{value:"Development Road Map",id:"development-road-map",level:2},{value:"Milestone 1 - Exposing Game API endpoints",id:"milestone-1---exposing-game-api-endpoints",level:3},{value:"Purposed Diagram",id:"purposed-diagram",level:3},{value:"State Channels Implementation",id:"state-channels-implementation",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"decentralized-well-being-game-api"},"Decentralized Well-being Game API"),(0,l.kt)("h2",{id:"team-name"},"Team Name"),(0,l.kt)("p",null,"Health Hero"),(0,l.kt)("h2",{id:"payment-address"},"Payment Address"),(0,l.kt)("p",null,"0xc7ad868f9b421dabf7cdaa0e6c508ff74e2f1cfd (USDT)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Status:")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/675#issuecomment-1129061247"},"Terminated")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Well-being engagement is up and rising. With a more health-conscious generation of users, they are wanting to experience health engagement in different areas of their lives. Health Hero, as a digital health engagement company, seeks to grow a well-being focused game API that engages developers with health-related development tools. With more people now working remotely, health engagement has never been more important. Healthcare is a multi-billion dollar industry that still struggles with delivering tools to consumers to engage with their health in their own way. IoT, omnichannel, chatbots, and other interactive interfaces are just a few to mention for the opportunities surrounding the use of Health Hero","'","s Game API."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"The Health Hero Game API provides the opportunity for developers to build games, apps, and features using well-being data endpoints that are centered around steps and fitness data. The play-to-earn approach of the API endpoints, allows the users to earn points in different areas such as XP (Experience Points), HP (Hero Points), Levels, Life, Star Power, badges, and parcels of land that ultimately rewards the user with digital assets (collectibles/NFTs) that are valued in Polkadot currency and Using State Channels to send out the payouts to users from the treasury based on their authentic health data."),(0,l.kt)("p",null,"API specifications of the core functionality"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Endpoints will provide the following data:"),(0,l.kt)("li",{parentName:"ol"},"IoT data: step trackers, to include Google Fit, Apple Health, Garmin, Fitbit, Peloton, Headspace, Calm, and more."),(0,l.kt)("li",{parentName:"ol"},"Activity data"),(0,l.kt)("li",{parentName:"ol"},"Gamification data points such as XP, HP, levels, life, star power"),(0,l.kt)("li",{parentName:"ol"},"Smart contracts customization based on health data engagement")),(0,l.kt)("h2",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Where and how does your project fit into the ecosystem? / What need(s) does your project meet?")),(0,l.kt)("p",null,"With the growing need of well-being engagement tools, a major pain point is the lack of shareability, access, and implementation of wellness-related features into games, apps, and other online applications. From the users","'"," perspective, the delivery of gamification and rewards is also poorly present in today","'","s games and apps ecosystems. Not only would the developers be able to create and build apps off of our API, but they will have the tools necessary to create customized smart contracts that will deliver a unique and evolving experience to the users based on their own health engagement within the app or game the developers created. These smart contracts will be used against the minting of personalized collectibles that will evolve with a series of attributes (XP, HP, levels, etc.) which are then translated into earnings (play-to-earn) for the users."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp","'","s userbase, yourself)?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Game developers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Blockchain engineers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Cryptocurrency developers")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In-house")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Game artists"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At the moment, there are no other projects similar to ours in any ecosystem.")),(0,l.kt)("h2",{id:"team"},"Team"),(0,l.kt)("h3",{id:"team-members"},"Team Members"),(0,l.kt)("p",null,"Team Leaders:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Umair Azhar (CTO)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Anthony Diaz (CEO)"))),(0,l.kt)("p",null,"Team Members:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Angel Leon (Product and UX)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Jon Izquierdo (Senior Full Stack Engineer)"))),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("p",null,"Contact Name:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Anthony Diaz (CEO)")),(0,l.kt)("p",null,"Contact Email:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:anthony@gohealthhero.com"},"anthony@gohealthhero.com"))),(0,l.kt)("p",null,"Website:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"gohealthhero.com")),(0,l.kt)("h2",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Registered Address")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Health Hero, Inc, 548 Market St, Suite 15351, San Francisco, CA 94104")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Registered Legal Entity")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Health Hero, Inc")),(0,l.kt)("h3",{id:"teams-experience"},"Team","'","s experience"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mr. Diaz has over a decade of experience in leadership in healthcare, global product and platform development, and digital consumer engagement. Repeat founder. People leader that commands an uncanny sense of global business and brings global products to life that generate profit.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mr. Azhar is a software engineer with over 7 years of experience. Mr. Azhar has a passion for back-end development with great instinct for reflecting code on user interfaces and user experience, Artificial Intelligence, machine learning, innovative technologies, and development operations. Strong leader with a tactical vision on integrating latest technologies into highly complex products. Mr. Azhar has driven development efforts for large teams of engineers and has an acute eye for security, product, and technology architecture")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mr. Leon is a U.S. Navy veteran, product, operations, and innovation leader overseeing teams that manage revenue, strategy, business, partnerships, information technology, product management, policy, security, workplace resources, and other cross-functional operations. Angel","'","s passion is on how to operationalize and productize integration technologies, patterns, best practices, and user interfaces. His experience includes a decade+ years in health IT, working with a wide spectrum of customers, including IDNs, payers, life sciences companies, and software vendors, with the goal of improving outcomes and reducing costs by aggregating and analyzing clinical, claims, and cost data."))),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Umair Azhar: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/iumairazhar"},"https://github.com/iumairazhar"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Umair Azhar: ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/iumairazhar/"},"https://www.linkedin.com/in/umair-azhar-a72259206/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Angel Leon: ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angelgleon/"},"https://www.linkedin.com/in/angelgleon/"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Anthony Diaz: ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/adiaz123/"},"https://www.linkedin.com/in/adiaz123/")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"development-status"},"Development Status"),(0,l.kt)("h2",{id:"development-road-map"},"Development Road Map"),(0,l.kt)("h3",{id:"milestone-1---exposing-game-api-endpoints"},"Milestone 1 - Exposing Game API endpoints"),(0,l.kt)("p",null,"Estimated Duration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"4 weeks")),(0,l.kt)("p",null,"FTE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"2")),(0,l.kt)("p",null,"Costs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"$25,000 USD")),(0,l.kt)("h3",{id:"purposed-diagram"},"Purposed Diagram"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://gohealthhero-production.s3.amazonaws.com/Web3.png",alt:"Architecture  Diagram"})),(0,l.kt)("h3",{id:"state-channels-implementation"},"State Channels Implementation"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/44548958/144947081-88d681a9-e9c7-419d-96b0-8ec68fda6687.png",alt:"State Channels (2)"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a"),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache License 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can run a local instance and / or fetch metrics using the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c"),(0,l.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0d"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0e"),(0,l.kt)("td",{parentName:"tr",align:null},"Press Release"),(0,l.kt)("td",{parentName:"tr",align:null},"We will create a press release to inform the audience.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1a"),(0,l.kt)("td",{parentName:"tr",align:null},"Ink Contract Development"),(0,l.kt)("td",{parentName:"tr",align:null},"A contract with all required functions for service written in ink!                                                               In our ecosystem, smart contracts will be utilized in a variety of ways within the platform such as: To store user data smart contracts will need to be used via state channels for all aspects of the relationship between the data store and the user. Fitness games within the Ecosystem will utilize smart contracts to pay out and reward winners or games and challenges. A multi-signature smart contract will hold all DAO funds and payout based on milestones reached. Users will be rewarded for logging and tracking well-being through simple actions such as taking a picture of food, logging breakfast via smartwatches, or through slack.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1b"),(0,l.kt)("td",{parentName:"tr",align:null},"Services Implementation"),(0,l.kt)("td",{parentName:"tr",align:null},"API for developers to: 1. store user data to Postgres Database 2. serve API to users to collect the Health Data 3. interact with the Smart Contract 4. Written in Rust/TypeScript5. Rust/TypeScript unit tests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1c"),(0,l.kt)("td",{parentName:"tr",align:null},"State Channels"),(0,l.kt)("td",{parentName:"tr",align:null},"We will be implementing Perun Polkadot Pallet as a part of our Ink Smart Contract and will use RUST language for the backend implementing these state channels.These channels will allow us to make transactions to the users for their payouts from the treasury based on their authentic health data. As state channels will be established between treasury and users to handle frequently occurring transactions for their payouts")))))}u.isMDXComponent=!0}}]);