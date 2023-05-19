"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9090],{44405:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="Zero Network",o={unversionedId:"applications/zero-network",id:"applications/zero-network",title:"Zero Network",description:"See the Grants Program Process on how to submit a proposal.",source:"@site/applications/zero-network.md",sourceDirName:"applications",slug:"/applications/zero-network",permalink:"/applications/zero-network",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/zero-network.md",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Primitive",id:"primitive",level:4},{value:"Functionality",id:"functionality",level:4},{value:"Module",id:"module",level:4},{value:"Client",id:"client",level:4},{value:"Use Case",id:"use-case",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Similar Project",id:"similar-project",level:3},{value:"Comparison",id:"comparison",level:4},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 | Confidential Transfers",id:"milestone-1--confidential-transfers",level:3},{value:"Milestone 2 | Confidential Smart Contract Executions",id:"milestone-2--confidential-smart-contract-executions",level:3},{value:"Milestone 3 | Confidential Transaction Wallet",id:"milestone-3--confidential-transaction-wallet",level:3},{value:"Timeline",id:"timeline",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],s={toc:m},d="wrapper";function k(t){let{components:e,...a}=t;return(0,i.kt)(d,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zero-network"},"Zero Network"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/#pencil-process"},"Grants Program Process")," on how to submit a proposal.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Zero Network"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x9061b0787D28d0fDaD845d670F7505EAE5F3B01B (DAI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Level:")," 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," Terminated")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"We would like to implement a ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain")," which specializes in privacy."),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain")," supports ",(0,i.kt)("strong",{parentName:"p"},"confidential transfers")," and ",(0,i.kt)("strong",{parentName:"p"},"privacy preserving smart contracts")," on the mainchain based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"plonk"),". To support privacy, the traditional blockchains need to implement L2 solutions, complex contract logic or depend on centralized security assumption. The L2 technologies often sacrifice the usability, the complex contract logic cost too much gas and development workload, and the centralized security assumption force us to believe someone you have never met before. As the solution for these problems, we are going to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain")," supporting privacy on mainchain and depending on only cryptographic hardness assumption. The documentation is ",(0,i.kt)("a",{parentName:"p",href:"https://zero-network.github.io/"},"here"),"."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Through this grant, we would like to implement confidential transaction functionalities for both transfers and smart contract executions. There are two types of privacy ",(0,i.kt)("inlineCode",{parentName:"p"},"confidential")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymous"),". In this scope, we support the ",(0,i.kt)("inlineCode",{parentName:"p"},"confidential")," transactions which hide the input and output. The ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymous")," hides the users related to the transaction. The ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymous")," is going to be supported in the future. We provide the confidential transactions for both ",(0,i.kt)("strong",{parentName:"p"},"transfer")," and ",(0,i.kt)("strong",{parentName:"p"},"contract execution"),"."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain")," privacy preserving protocol relys on the cryptographic hardness assumptions.\nThere are some components consisting this system and We divide the components as following."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"primitive"),": Basic cryptography libraries necessary for the network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"functionality"),": Confidential transactions pallets to realize the privacy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"module"),": Developer tools to develop the confidential smart contracts and output the constraints metadata.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"client"),": Wallet libraries to transfer and execute the confidential smart contracts."))),(0,i.kt)("p",null,"We describe the detail as following."),(0,i.kt)("h4",{id:"primitive"},"Primitive"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"primitive")," provides crypto libraries necessary for ",(0,i.kt)("inlineCode",{parentName:"p"},"functionality")," as pallet."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Lifted-ElGamal")," encryption pallet"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"zk-SNARKs plonk")," pallet which supports the plookup and aggregation proof on top of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ZK-Garage/plonk"},(0,i.kt)("inlineCode",{parentName:"a"},"ZK-Garage/plonk"))),(0,i.kt)("li",{parentName:"ol"},"Encrypted balance pallet")),(0,i.kt)("h4",{id:"functionality"},"Functionality"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"functionality")," provides the ",(0,i.kt)("strong",{parentName:"p"},"confidential transfers")," and ",(0,i.kt)("strong",{parentName:"p"},"confidential smart contracts")," functions as pallet."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Confidential Transfer")," pallet"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Condidential Smart Contract")," pallet")),(0,i.kt)("h4",{id:"module"},"Module"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"module")," provides the developer with tools and necessary libraries managing privacy application."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Encrypted ",(0,i.kt)("inlineCode",{parentName:"li"},"ink!")),(0,i.kt)("li",{parentName:"ol"},"Contract constraint builder"),(0,i.kt)("li",{parentName:"ol"},"Proof generation library"),(0,i.kt)("li",{parentName:"ol"},"Confidential smart contract IDE")),(0,i.kt)("h4",{id:"client"},"Client"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," provides the transactor client libraries for users."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Key generation wallet"),(0,i.kt)("li",{parentName:"ol"},"Decrypt and encrypt transaction and balance"),(0,i.kt)("li",{parentName:"ol"},"Create zero knowledge proof of ",(0,i.kt)("inlineCode",{parentName:"li"},"plonk")),(0,i.kt)("li",{parentName:"ol"},"Confidential transfers"),(0,i.kt)("li",{parentName:"ol"},"Confidential smart contracts executor")),(0,i.kt)("h3",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,"We explain the use case we assume."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/39494661/163749008-3ad6fa47-9771-419b-98de-7a85cedaa2c7.jpg",alt:"diagram1"})),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"This is the world's first account based and ",(0,i.kt)("inlineCode",{parentName:"p"},"plonk")," built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain")," which supports confidential transactions for both transfers and contract executions only depending on the cryptographic hardness assumptions.\nWe can contribute to ",(0,i.kt)("inlineCode",{parentName:"p"},"Polkadot")," network mainly in three ways."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"High performance and ",(0,i.kt)("inlineCode",{parentName:"li"},"Polkadot")," friendly cryptography primitive")))),(0,i.kt)("p",null,"Our team has been working on ",(0,i.kt)("inlineCode",{parentName:"p"},"zk-SNARKs")," probjects for long time so we are sure that we can contribute to implement cryptography pallets  ",(0,i.kt)("strong",{parentName:"p"},"confidential smart contracts"),", ",(0,i.kt)("strong",{parentName:"p"},"homomorphic encryption")," and so on which require a high degree of skill and these will be used for many developers. Most parts of them are composed by cutting edge technologies for example ",(0,i.kt)("inlineCode",{parentName:"p"},"plonk")," which supports ",(0,i.kt)("strong",{parentName:"p"},"plookup")," and ",(0,i.kt)("strong",{parentName:"p"},"proof aggregation"),", and encryption library which supports ",(0,i.kt)("strong",{parentName:"p"},"somewhat homomorphic encryption")," so we can catch up them. Especially, we have been working on prover time optimization using speed up algorithm, assembly and parallelize, and also exprienced implementing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/plonk"},(0,i.kt)("inlineCode",{parentName:"a"},"plonk"))," as pallet so we can design the fastest encryption primitive which is ",(0,i.kt)("inlineCode",{parentName:"p"},"Polkadot")," friendly ",(0,i.kt)("inlineCode",{parentName:"p"},"no_std")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-scale-codec"},(0,i.kt)("inlineCode",{parentName:"a"},"parity SCALE Codec"))," compatible."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"Privacy preserving ",(0,i.kt)("inlineCode",{parentName:"li"},"XCMP"))))),(0,i.kt)("p",null,"We are planning to connect this blockchain to ",(0,i.kt)("inlineCode",{parentName:"p"},"Polkadot")," as parachain after redesign and optimization. We will be able to use these blockchain functionalities in the entire network. It means that all parachain in ",(0,i.kt)("inlineCode",{parentName:"p"},"Polkadot")," network can use privacy preserving transactions. We think that this is huge benefit for ",(0,i.kt)("inlineCode",{parentName:"p"},"Polkadot")," network users because they can easily use the confidential transactions whatever parachain they use."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Research and development")))),(0,i.kt)("p",null,"We would like to improve privacy and scaling using cryptographic scheme. We are going to do experiment about rollup transactions and block compression for storage scaling, ",(0,i.kt)("inlineCode",{parentName:"p"},"Fully Homomorphic Encryption")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MPC")," for privacy. Especially the ",(0,i.kt)("inlineCode",{parentName:"p"},"Fully Homomorphic Encryption")," will be the next hot topic we are going to focus on."),(0,i.kt)("h3",{id:"similar-project"},"Similar Project"),(0,i.kt)("p",null,"There are some similar projects. We compare their features."),(0,i.kt)("h4",{id:"comparison"},"Comparison"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/39494661/163749080-05ed497c-29ca-480c-a314-c7218279137c.jpg",alt:"diagram2"})),(0,i.kt)("p",null,"The most valuable point is that we implement ",(0,i.kt)("inlineCode",{parentName:"p"},"zero knowledge")," friendly blockchain. The main problem of confidential smart contract projects is the gas limit problem. The additive homomorphic encryption and zk-SNARKs are using heavy arithmetic workload and these processes often exceed the gas limit so it's important to design the blockchain as ",(0,i.kt)("inlineCode",{parentName:"p"},"zero knowledge")," friendly structure. To make it practical, we think that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Substrate")," is suitable for three reasons. The account base blockchain, customizable Wasm and zero knowledge scheme."),(0,i.kt)("p",null,"The prover side, the more simple structure we generate the zero knowledge proof, the more efficiency we get. The account base blockchain using the key value mapping so it's more efficient than ",(0,i.kt)("inlineCode",{parentName:"p"},"UTXO"),". We can save the prover time with account based structure."),(0,i.kt)("p",null,"The verifier side, we need to optimize the virtual machine performing the zero knowledge function to define case specific bytecode. We can customize the bytecode and get benefit from efficiency of ",(0,i.kt)("inlineCode",{parentName:"p"},"Wasm")," VM."),(0,i.kt)("p",null,"Considering both sides, the zero knowledge scheme is related deeply to calculation workload and the ",(0,i.kt)("inlineCode",{parentName:"p"},"zk-SNARKs")," is the most efficient one but has a setup scheme. Previously, the ",(0,i.kt)("inlineCode",{parentName:"p"},"zk-SNARKs")," setup parameters depended on circuit so we needed to setup parameters when we deployed some new contracts. It's hard to ensure that there are enough parties for each deploy contracts so almost contract base confidential smart contract project uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"bulletproof"),". However, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"plonk")," which can generate the parameters without depending on circuit so once we setup the parameters, we can reuse that parameters for every transaction with getting profit of ",(0,i.kt)("inlineCode",{parentName:"p"},"zk-SNARKs")," efficiency."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ash Whitehat"),(0,i.kt)("li",{parentName:"ul"},"Kirill Karbushev")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Invers Inc"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:info@invers.tech"},"info@invers.tech")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://invers.tech/"},"Invers"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," 2F\u30fb3F Emblem Nishiarai, 3-33-6 Umejima, Adachi City, Tokyo-to 121-0816, Japan"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Invers Inc.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Our company is working on the blockchain scaling and information hiding technologies. We already delivered several grants with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/astarnetwork"},(0,i.kt)("inlineCode",{parentName:"a"},"Astar Network")),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md"},"zk-rollups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md"},"zk-plonk"))),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/zero-network"},"Zero Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NoCtrlZ"},"Ash Whitehat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KiriosK"},"Kirill Karbushev"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("p",null,"We are not on LinkedIn."),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"The information about this project and what we did are following."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The documentations about this project is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zero-network/zero-network.github.io"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PlasmNetwork/plonk"},"plonk pallet")," implementation."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://zero-network.github.io/"},"documentation")," describing the details.")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"Through this grant, we are going to develop the blockchain which supports confidential transactions for both transfers and smart contract executions."),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6.5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 45,000 DAI")),(0,i.kt)("h3",{id:"milestone-1--confidential-transfers"},"Milestone 1 | Confidential Transfers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10,000 DAI")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Milestone 1"),", we are going to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"confidential transfer")," pallet on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/balances"},(0,i.kt)("inlineCode",{parentName:"a"},"balance"))," pallet. With this pallet, the user can transfer the asset with hiding input and output with ",(0,i.kt)("inlineCode",{parentName:"p"},"Lifted-ElGamal")," encryption."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("inlineCode",{parentName:"td"},"inline documentation")," of the code and a ",(0,i.kt)("inlineCode",{parentName:"td"},"basic tutorial")," that explains how users send the ",(0,i.kt)("inlineCode",{parentName:"td"},"confidential transfers"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Lifted-ElGamal")," pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"Lifted-ElGamal")," pallet which allows our calculation to remain encrypted. The ",(0,i.kt)("inlineCode",{parentName:"td"},"Lifted-ElGamal")," allows us multiple addition and one time multiplication for encrypted number.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"encrypted-balance")," pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"encrypted-balance")," pallet which allows us to store the balance encrypted by ",(0,i.kt)("inlineCode",{parentName:"td"},"Lifted-ElGamal")," encryption. The ",(0,i.kt)("inlineCode",{parentName:"td"},"encrypted-balance")," allows us to hide whole network user's balance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"plonk")," pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"plonk")," pallet which allows us to use ",(0,i.kt)("inlineCode",{parentName:"td"},"plonk")," on ",(0,i.kt)("inlineCode",{parentName:"td"},"Substrate"),". In confidential smart contracts execution, the ",(0,i.kt)("inlineCode",{parentName:"td"},"plonk")," need to support ",(0,i.kt)("inlineCode",{parentName:"td"},"lookup")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"aggregation proof"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"confidential-transfer")," pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"confidential-transfer")," pallet which allows us to send transactions without revealing any information of it.")))),(0,i.kt)("h3",{id:"milestone-2--confidential-smart-contract-executions"},"Milestone 2 | Confidential Smart Contract Executions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 25,000 DAI")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Milestone 2"),", we are going to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"confidential smart contract execution")," pallet on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,i.kt)("inlineCode",{parentName:"a"},"contracts"))," pallet and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink"},(0,i.kt)("inlineCode",{parentName:"a"},"ink!")),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("inlineCode",{parentName:"td"},"inline documentation")," of the code and a ",(0,i.kt)("inlineCode",{parentName:"td"},"basic tutorial")," that explains how users send the ",(0,i.kt)("inlineCode",{parentName:"td"},"confidential smart contracts"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"zk-contracts")," pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"zk-contracts")," pallet which allows us to execute deployed contract WASM binary on top of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,i.kt)("inlineCode",{parentName:"a"},"contracts"))," pallet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"zk ink!")," eDSL"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement confidential smart contract ",(0,i.kt)("inlineCode",{parentName:"td"},"eDSL")," on top of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/ink"},(0,i.kt)("inlineCode",{parentName:"a"},"ink!"))," which allows developer to develop the confidential smart contract.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"zk ink!")," compiler"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"zk ink!")," compiler on top of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/cargo-contract"},(0,i.kt)("inlineCode",{parentName:"a"},"cargo-contract"))," which allows developer to compile and deploy the confidential smart contract.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"zk ink!")," metadata"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"zk ink!")," metadata on top of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/ink/blob/master/crates/metadata"},(0,i.kt)("inlineCode",{parentName:"a"},"ink_metadata"))," which generate the contract constraint statement for zk contract used when the user create the proof.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"zk-contracts")," pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"zk-contracts")," on top of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,i.kt)("inlineCode",{parentName:"a"},"contract"))," pallet which allows runtime to execute deployed contracts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"6."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"zk-contracts-rpc")," pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"zk-contracts-rpc")," pallet on top of ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts/rpc"},(0,i.kt)("inlineCode",{parentName:"a"},"pallet-contracts-rpc"))," pallet which allows the blockchain to have interface interacting with deployed contracts.")))),(0,i.kt)("h3",{id:"milestone-3--confidential-transaction-wallet"},"Milestone 3 | Confidential Transaction Wallet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10,000 DAI")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Milestone 3"),", we are going to implement ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet")," which provides the user to interact with blockchain, send transactions and manage the secret on locally."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("inlineCode",{parentName:"td"},"inline documentation")," of the code and a ",(0,i.kt)("inlineCode",{parentName:"td"},"basic tutorial")," that explains how users participate network and send transaction.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide Dockerfiles that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an article/tutorial/workshop that explains")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Key generation"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement key generation libraries which allow user to generate key with random and store the secret on locally.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"ElGamal crypto utils"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"ElGamal")," encryption libaries which allow user to decrypt and encrypt transaction and balance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"plonk")," proof generation"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement ",(0,i.kt)("inlineCode",{parentName:"td"},"plonk")," proof generation which allows user to create proof for circuit constraint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Confidential transfer"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement confidential transfer libraries.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Confidential smart contract execution"),(0,i.kt)("td",{parentName:"tr",align:null},"We are going to implement executing smart contract libraries.")))),(0,i.kt)("h2",{id:"timeline"},"Timeline"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Milestone"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Estimated Duration (month)"),(0,i.kt)("th",{parentName:"tr",align:null},"Deadline"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Confidential Transfers"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"2023 1/7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Confidential Smart Contract Executions"),(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"2023 4/7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"Confidential Smart Contract Executions"),(0,i.kt)("td",{parentName:"tr",align:null},"1.5"),(0,i.kt)("td",{parentName:"tr",align:null},"2023 5/26")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rollup transactions"),(0,i.kt)("li",{parentName:"ul"},"Compress block with zero knowledge proof"),(0,i.kt)("li",{parentName:"ul"},"High performance and ",(0,i.kt)("inlineCode",{parentName:"li"},"Polkadot")," friendly ",(0,i.kt)("inlineCode",{parentName:"li"},"plonk")," library"),(0,i.kt)("li",{parentName:"ul"},"Anonymous transactions"),(0,i.kt)("li",{parentName:"ul"},"Wasm optimization")),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How did you hear about the Grants Program?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Announcement by another team"))),(0,i.kt)("li",{parentName:"ul"},"Work you have already done.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/PlasmNetwork/plonk"},"plonk pallet")))),(0,i.kt)("li",{parentName:"ul"},"Wheter there are any other teams who have already contributed (financially) to the project.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No."))),(0,i.kt)("li",{parentName:"ul"},"Previous grants you may have applied for.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-rollups.md"},"zk-rollup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/zk-plonk.md"},"zk-plonk"))))))}k.isMDXComponent=!0}}]);