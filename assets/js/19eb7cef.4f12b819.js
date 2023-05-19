"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8900],{92136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},i="Five Degrees on Substrate",o={unversionedId:"applications/hex",id:"applications/hex",title:"Five Degrees on Substrate",description:"- Team Name: Lee",source:"@site/applications/hex.md",sourceDirName:"applications",slug:"/applications/hex",permalink:"/applications/hex",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/hex.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Five Degrees ink! Contract &amp; Front-end Modules",id:"milestone-1--implement-five-degrees-ink-contract--front-end-modules",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"five-degrees-on-substrate"},"Five Degrees on Substrate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Lee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x352a7f69df71bda6c51ee7fa938dd76ff2375087(USDT)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Hex  Space Social Graph is  heavily inspired by Five Degrees protocol implementation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/5DegreesProtocol/5degrees-protocol.git"},"5degrees"),"\nFive Degrees propose a simple entity data ownership protocol and use the protocol to capitalize these core data. To make the protocol simple enough, permission-less, and composable, we choose to build the protocol under the existing ERC-1155 standard. Compatible with the ERC-1155 standard, meaning it will be easily implanted into any protocol or business of Web3 that supports ERC-1155. The NFT generated in the protocol can be traded in any NFT market, also any smart contract that requires user relationships can track this data on chain. Any application that supports ERC-1155, can easily integrate this protocol."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"With the development of the Web3.0 industry, entities build a relationship network by minting target NFTs, thereby forming a huge transparent, unified, and permission-less relationship network\ninfrastructure. All DAPPs focus on their own business, and combine the relationship network to realize various products. For example, a social module can be added to Uniswap, so that users can easily know the detailed data of the transactions of the people they follow, or a moment feature can be added to OpenSea, so that users can easily know what kinds of NFTs are their friends trading or holding, just like integrating Twitter or Discord into OpenSea, or if a social network product uses this solution to start its business, the user's friend relationship can be reconnected in Sandbox even the product failed.\nCore methods:\nSet Entity's Info:Invoke setInfo to set entity's information\nGet Entity's Info:Invoke contract's URI methods to get current entity's information Set entity's followers limitation:invoke increaseMaxSupply method\nBuild the relationship between entities:Invoke mint method to mint an NFT of the following, hold his NFT means your relationship is connected\nDestroy the relationship between entities:Invoke burn method to destroy a following's NFT to disconnect the relationship\nGet entity's follower list:Query through check the who is holding the entity's NFT Get entity's following list:Query through check the whose NFT is the entity holding.\n(5degrees protocol white paper)","[https://www.5degrees.io/5Degrees-Whitepaper.pdf]"),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Project"),(0,r.kt)("th",{parentName:"tr",align:null},"5Degrees"),(0,r.kt)("th",{parentName:"tr",align:null},"Lens Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"RSS3"),(0,r.kt)("th",{parentName:"tr",align:null},"CyberConnect"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Introduce"),(0,r.kt)("td",{parentName:"tr",align:null},"5Degrees is a Web3.0 native social protocol,Capitalize the user's core data,Generate NFTs. Protocol compatible and recognized.The ERC-1155 standard allows developers to Any protocol that is firstly implanted into Web 3.0 protocol layer or business layer"),(0,r.kt)("td",{parentName:"tr",align:null},"Lens Protocol is a Web3.0 social graph protocol. It capitalizes users' calibration data through self-defined protocol standards, generates NFT, and builds a healthy social network."),(0,r.kt)("td",{parentName:"tr",align:null},"RSS3 is Decentralized Content Distribution and Aggregation protocol, the RSS3 network consists of service nodes(Server Node).Subgroups and Global Indexers (Global Indexer) composition, the content is stored in Arweave,"),(0,r.kt)("td",{parentName:"tr",align:null},"CyberConnect implements the Web3.0 social graph protocol and builds an extensible standardized social graph module, which simplifies the development process. CyberConnect Society The cross-graph data is stored on IPFS through Ceramic, and the CyberConnect gateway provides a common data layer for DApps.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Core functions"),(0,r.kt)("td",{parentName:"tr",align:null},"Profile, on-chain user relationship"),(0,r.kt)("td",{parentName:"tr",align:null},"Profile, on-chain user relationshipPost Mirror. Comment"),(0,r.kt)("td",{parentName:"tr",align:null},"Profile. Web3.0 social graph module, public chain"),(0,r.kt)("td",{parentName:"tr",align:null},"Profile, Web3.0 social graph module  Cyberchat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Technical implement"),(0,r.kt)("td",{parentName:"tr",align:null},"ERC-1155 protocol standard"),(0,r.kt)("td",{parentName:"tr",align:null},"Lens Protocol self-built protocol standard"),(0,r.kt)("td",{parentName:"tr",align:null},"Arweave"),(0,r.kt)("td",{parentName:"tr",align:null},"Ceramics IPFS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Open source"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"DApp access method"),(0,r.kt)("td",{parentName:"tr",align:null},"No permission required"),(0,r.kt)("td",{parentName:"tr",align:null},"No permission required"),(0,r.kt)("td",{parentName:"tr",align:null},"API access required"),(0,r.kt)("td",{parentName:"tr",align:null},"API access required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"Composability"),(0,r.kt)("td",{parentName:"tr",align:null},"on+off chain"),(0,r.kt)("td",{parentName:"tr",align:null},"on+off chain"),(0,r.kt)("td",{parentName:"tr",align:null},"off chain"),(0,r.kt)("td",{parentName:"tr",align:null},"off chain")))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lester ")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Lester Lee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:rust.0x0@gmail.com"},"rust.0x0@gmail.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:"),"\nNo.")),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("p",null,"Individual"),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Lester has 20+ years of software development experience and 4 years working in Blockchain   developer.now working as a freelancer.He is proficient in C++. He has 2 years Rust development experience and 3 years Solidity development experience."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rust-0x0/5degrees-protocol-substrate/tree/dev"},"https://github.com/rust-0x0/5degrees-protocol-substrate/tree/dev")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rust-0x0/5degrees-protocol-front-end/tree/dev"},"https://github.com/rust-0x0/5degrees-protocol-front-end/tree/dev"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rust-0x0"},"https://github.com/rust-0x0"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("p",null,"No."),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"5degrees-protocol-substrate ink! contract implement finished.\n5degrees-protocol-front-end implement finished."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rust-0x0/5degrees-protocol-substrate/tree/dev"},"https://github.com/rust-0x0/5degrees-protocol-substrate/tree/dev")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rust-0x0/5degrees-protocol-front-end/tree/dev"},"https://github.com/rust-0x0/5degrees-protocol-front-end/tree/dev"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"5degrees-protocol-front-end screenshot picture\n",(0,r.kt)("img",{parentName:"li",src:"https://github.com/rust-0x0/5degrees-protocol-doc/blob/dev/images/ScreenShot.png",alt:"image"}))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:"),"  1 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:"),"  3,500 USD")),(0,r.kt)("h3",{id:"milestone-1--implement-five-degrees-ink-contract--front-end-modules"},"Milestone 1 \u2014 Implement Five Degrees ink! Contract & Front-end Modules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:"),"  3,500 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"Unlicense"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can deploy our smart contract, which will show how the new functionality works.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Docker file(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish an article on medium detailing our social protocol construction .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"ink! Contract: FiveDegrees"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract is the overall contract of the FiveDegrees protocol.Set Entity's Info, Get Entity's Info,Build the relationship,Destroy the relationship and so on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"protocol front-end"),(0,r.kt)("td",{parentName:"tr",align:null},"We will deliver the  react-based front-end base on substrate-front-end-template  with the contract,which demonstrates core methods of the contract.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"No."),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"personal recommendation.")))}u.isMDXComponent=!0}}]);