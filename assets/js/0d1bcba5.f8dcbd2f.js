"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9446],{58038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));a(8209);const n={},s="Decentralized Security Marketplace",i={unversionedId:"RFPs/Open/decentralized-security-marketplace",id:"RFPs/Open/decentralized-security-marketplace",title:"Decentralized Security Marketplace",description:"Status:* Open",source:"@site/docs/RFPs/Open/decentralized-security-marketplace.md",sourceDirName:"RFPs/Open",slug:"/RFPs/Open/decentralized-security-marketplace",permalink:"/Grants-Program/RFPs/Open/decentralized-security-marketplace",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Data Analysis Tools for Substrate-based Blockchains",permalink:"/Grants-Program/RFPs/Open/data_analysis_tools"},next:{title:"e-Passport ZK Validation",permalink:"/Grants-Program/RFPs/Open/epassport-zk-validation"}},l={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Actors \ud83d\udc65",id:"actors-",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decentralized-security-marketplace"},"Decentralized Security Marketplace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/0xCaso"},"Matteo Casonato"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh"},"Bhargav Batt"))),(0,o.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,o.kt)("p",null,"According to the ",(0,o.kt)("a",{parentName:"p",href:"https://assets.ctfassets.net/t3wqy70tc3bv/1ObYJk9jzWS4ExHICslYep/e2b5cee51268e47ee164c4dffbd78ad4/Immunefi_Crypto_Losses_2022_Report.pdf"},(0,o.kt)("em",{parentName:"a"},"Immunefi's 2022 annual report")),", there has been a total loss of ~$3.77B because of hacks in the web3 space. To increase the protocol's security, audits and bug bounties can be a useful tool."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"decentralized security marketplace")," would allow projects to find reviewers/testers/auditors/whitehats, and vice versa. This would benefit everyone:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Projects")," would increase their security;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Developers")," would have the possibility to earn while using their skills, improving them;"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"ecosystem")," would be more secure, with more projects being audited and more developers learning about security.")),(0,o.kt)("p",null,"The original thought is to make it as a smart contract platform, deployable on an existing parachain (that supports WASM smart contracts, such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.astar.network/docs/getting-started"},"Astar")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.watr.org/builders/substrate-contracts"},"Watr"),") using ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/"},"ink!")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/awesome-ink"},"here")," you can see some examples)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": This use case can be extended/applied to other areas. The main problem to solve here is to find a way to manage the ",(0,o.kt)("em",{parentName:"p"},"delayed")," transaction between two parties (i.e., ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escrow"},"escrow"),"), and to ensure fairness and transparency (e.g., a reviewer is not able to deliver all the reports in time, and the project's team would like to decide whether to extend the escrow duration or just to pay a lower percentage of the established bounty)."),(0,o.kt)("h3",{id:"actors-"},"Actors \ud83d\udc65"),(0,o.kt)("p",null,"To ensure fairness and transparency, the marketplace could have the following actors:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Projects")," - The projects that want to be reviewed / tested;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Auditors")," - The developers that want to perform audits / hunt bugs;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arbiters")," - The developers that will arbitrate the disputes between projects and auditors (they will be useful if a project opens a dispute for any reason). They could get a small percentage of the bounty.")),(0,o.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,o.kt)("p",null,"The followings could be the initial deliverables of the project. Of course, improvements and additions are more than welcome.\n1) Initial ",(0,o.kt)("strong",{parentName:"p"},"research and design")," of the protocol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can refer to what ",(0,o.kt)("a",{parentName:"li",href:"https://immunefi.com/explore/"},"Immunefi")," and ",(0,o.kt)("a",{parentName:"li",href:"https://code4rena.com/"},"Code4rena")," are doing (but bring that on-chain);"),(0,o.kt)("li",{parentName:"ul"},"How to ensure the trustless interaction (e.g., projects could lock a percentage of the bounty to open the request);"),(0,o.kt)("li",{parentName:"ul"},"What types of disputes could be risen and how to solve them;"),(0,o.kt)("li",{parentName:"ul"},"How to manage time delays;"),(0,o.kt)("li",{parentName:"ul"},"Look for other use cases (in or outside the security field);\n2) Development of the ",(0,o.kt)("strong",{parentName:"li"},"protocol"),":"),(0,o.kt)("li",{parentName:"ul"},"Development of the governance smart contract (e.g. to add/remove projects, auditors, arbiters, etc.);"),(0,o.kt)("li",{parentName:"ul"},"Development of the auditing smart contract (e.g. to create audits);"),(0,o.kt)("li",{parentName:"ul"},"Development of the arbitration smart contract (e.g. to create/solve disputes);\n3) Development of the ",(0,o.kt)("strong",{parentName:"li"},"frontend"),", that enables the actors to interact with the protocol.")))}d.isMDXComponent=!0}}]);