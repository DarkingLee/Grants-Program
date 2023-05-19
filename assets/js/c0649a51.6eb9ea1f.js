"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2249],{33417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(87462),n=(a(67294),a(3905));a(95657);const r={},i="User Account Access Security Analysis for Wallets",o={unversionedId:"docs/RFPs/Open/user-account-access-analysis",id:"docs/RFPs/Open/user-account-access-analysis",title:"User Account Access Security Analysis for Wallets",description:"Status:* Open",source:"@site/docs/RFPs/Open/user-account-access-analysis.md",sourceDirName:"docs/RFPs/Open",slug:"/docs/RFPs/Open/user-account-access-analysis",permalink:"/docs/RFPs/Open/user-account-access-analysis",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Open/user-account-access-analysis.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Designing Upchain: A framework for securing Substrate software update systems",permalink:"/docs/RFPs/Open/uptane-for-substrate-design-and-scope"},next:{title:"XCM library & tools",permalink:"/docs/RFPs/Open/xcm-tool"}},l={},c=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-account-access-security-analysis-for-wallets"},"User Account Access Security Analysis for Wallets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," Open"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh"},"Bhargav Bhatt"),", ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Noc2"},"David Hawig")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Objectives")," Security analysis of the user interface of Polkadot Wallets, particularly account access and recovery.")),(0,n.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,n.kt)("p",null,"Security is as strong as its weakest link. More often than not, it's the users (humans) that are the most vulnerable point in the system. This proposal aims to comprehensively analyse the security of user-facing protocols of Polkadot. In particular, Polkadot\u2019s account generation and access is quite complex for users in the ecosystem. Several non-conventional mechanisms for account access like ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-account-multisig"},"multi-signatures"),", intent-specific ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-proxies"},"proxies"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/recovery"},"social recovery mechanisms")," provide interesting functionalities but also result in non-trivial user experiences. "),(0,n.kt)("p",null,"The proposal intends to first formally model the account generation, access, backup, and recovery mechanism for popular Polkadot wallets considering human-interactions as part of the system. Secondly, a comprehensive security analysis (automated or otherwise) is warranted to detect loop-holes in account access by the user, covering features like multi-signatures and anonymous proxies. A systematic technique for modelling and analysing account access is described in the paper ",(0,n.kt)("a",{parentName:"p",href:"https://people.inf.ethz.ch/rsasse/pub/AccountAccessGraphs-CCS19.pdf"},"'User Account Access Graphs'"),". The security analysis should focus on detecting unauthorised access across attack surfaces, and also detect possible scenarios of genuine users being locked-out of the account. This analysis may also lead to detecting redundancies in the authentication process and streamlining the user experience. "),(0,n.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,n.kt)("p",null,"The project is well-suited to be completed as a Bachelor's Thesis/ Master's Thesis/ Internship at an academic institute in collaboration with the Research Team at Web3 Foundation. The deliverables are just a template and can be modified taking into consideration the interests of the appplicant. "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Document describing the threat model, scope of the analysis, and  description of the approach/methodology used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Analysis Report"),(0,n.kt)("td",{parentName:"tr",align:null},"Security analysis report of the current account generation, access, back-up, and restoring mechanism used in popular Polkadot wallets like ",(0,n.kt)("a",{parentName:"td",href:"https://polkadot.js.org/extension/"},"Polkadot-JS Browser Extension"),", ",(0,n.kt)("a",{parentName:"td",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"subkey"),", ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/ui"},"Polkadot-JS UI"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.parity.io/technologies/signer/"},"Parity Signer"),", ",(0,n.kt)("a",{parentName:"td",href:"https://www.talisman.xyz/"},"Talisman")," etc. The analysis should also take into consideration features like multi-signatures, stashing, proxies, and anonymous proxies. The analysis includes: 1) sound and complete detection of unauthorised access; 2) minimal counterexamples for exploits if any; 3) lockout risks for users")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Analysis Report"),(0,n.kt)("td",{parentName:"tr",align:null},"Possible improvements in usability (e.g., getting rid of redundant authentication layers during restoration) stemming from the analysis should be documented.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"Models/Code"),(0,n.kt)("td",{parentName:"tr",align:null},"Models developed to formalise and analyse the different wallets. Code and set-up for automated analysis, if any.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"Engagements"),(0,n.kt)("td",{parentName:"tr",align:null},"Engage with the Web3 Foundation teams to validate the correctness of models and the specifications.")))))}d.isMDXComponent=!0}}]);