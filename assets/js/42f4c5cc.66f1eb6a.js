"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8977],{26855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=a(87462),r=(a(67294),a(3905));a(95657);const n={},l="Solidity Verifier Implementation for Accountable Light Client",o={unversionedId:"applications/solidity-verifier-for-accountable-light-client",id:"applications/solidity-verifier-for-accountable-light-client",title:"Solidity Verifier Implementation for Accountable Light Client",description:"- Team Name: Itering",source:"@site/applications/solidity-verifier-for-accountable-light-client.md",sourceDirName:"applications",slug:"/applications/solidity-verifier-for-accountable-light-client",permalink:"/applications/solidity-verifier-for-accountable-light-client",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/solidity-verifier-for-accountable-light-client.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Curve precompiles",id:"milestone-1--curve-precompiles",level:3},{value:"Milestone 2 \u2014 Basic &amp; Packed verifier",id:"milestone-2--basic--packed-verifier",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solidity-verifier-implementation-for-accountable-light-client"},"Solidity Verifier Implementation for Accountable Light Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Itering"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x5FD8bCC6180eCd977813465bDd0A76A5a9F88B47 (Ethereum USDC)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"As a developer company contributing to Darwinia, Itering is working on implementing an on-chain accountable light client verifier using the Solidity language. The accountable light client design is based on a recent ",(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2022/1205"},"paper")," published by the Web3 Foundation. "),(0,r.kt)("p",null,"Darwinia is constantly following innovations in the cross-chain space, especially from the Web3 Foundation and Polkadot, with a goal of implementing these innovations in practical settings. Currently, Darwinia is prioritizing the development of on-chain light clients as the cross-chain solution. We recognize the importance of the accountable light client system presented in the paper."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"After reading the paper, we found it to be extremely valuable. It presents an efficient method for utilizing SNARK to verify the aggregated public key of signers, while still holding those signers accountable. This approach greatly improves the speed and cost-effectiveness of proof generation."),(0,r.kt)("p",null,"Darwinia has created ",(0,r.kt)("a",{parentName:"p",href:"https://darwinia.subscan.io/account/0xD2A37C4523542F2dFD7Cb792D2aeAd5c61C1bAAE"},"a beacon light client from ethereum to darwinia"),", which is based on the BLS aggregate signature verification. The cross-chain gas is effectively reduced by aggregate signatures, but it is still too high because the light client smart contract needs to be aware of the entire list of public keys. If there are too many pubkeys, this could be a serious issue."),(0,r.kt)("p",null,"So, we are searching for a more effective solution to the aggregate signature pubkeys problem. We concentrate on the honest computation provided by zero-knowledge proof solutions. It allows us to off-chain the verification step. But through our study, we discovered that the generic SNARK solutions have so many limits that not only took a long time to produce the proof, but also required an extremely powerful device. We were stuck here until we came across this paper and Alistair's explanation ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=MCvX9ZZhO4I&list=PLOyWqupZ-WGvywLqJDsMIYdCn8QEa2ShQ&index=19"},"video")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/16LlsXWY2Q6_6QGZxkg84evaJqWNk6szX"},"slides"),"."),(0,r.kt)("p",null,"This verifier will be implemented based on the BLS12-377 and BW6-761 elliptic curves, which is consistent with the implementation in the paper and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/apk-proofs"},"W3F's PoC implementation"),"."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Where and how does your project fit into the ecosystem?"),(0,r.kt)("p",{parentName:"li"},"When Polkadot/Substrate/Kusama bridges to a blockchain that is EVM-compatible, this verifier will be helpful.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"),(0,r.kt)("p",{parentName:"li"},"The users of this verifier will be the cross-chain messaging/bridge service providers.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What need(s) does your project meet?"),(0,r.kt)("p",{parentName:"li"},"Precompiled versions of BLS12-377 and BW6-761 should ideally be supported by the blockchains that use this verifier. "),(0,r.kt)("p",{parentName:"li"},"If gas and speed are not a concern, you can also use the no-precompiled curves.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"),(0,r.kt)("p",{parentName:"li"},"This kind of verifier hasn't been implemented in solidity yet, as far as we know."))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Denny, ",(0,r.kt)("a",{parentName:"li",href:"mailto:denny.wang@itering.io"},"denny.wang@itering.io")),(0,r.kt)("li",{parentName:"ul"},"Echo, ",(0,r.kt)("a",{parentName:"li",href:"mailto:echo.hu@itering.io"},"echo.hu@itering.io")),(0,r.kt)("li",{parentName:"ul"},"Aki, ",(0,r.kt)("a",{parentName:"li",href:"mailto:aki.wu@itering.io"},"aki.wu@itering.io")),(0,r.kt)("li",{parentName:"ul"},"Nada, ",(0,r.kt)("a",{parentName:"li",href:"mailto:nada.fu@darwiniadao.xyz"},"nada.fu@darwiniadao.xyz"))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Aki Wu"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:aki.wu@itering.io"},"aki.wu@itering.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wuminzhe"},"https://github.com/wuminzhe"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," ITERING TECH PTE. LTD.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Itering is a team of passionate blockchain technology enthusiasts. We believe that blockchains should be interoperable with each other. Itering has accumulated significant expertise in the field of cross-chain technology through several years of experience. Our expertise spans various cross-chain approaches, with a focus on light client. "),(0,r.kt)("p",null,"We are well-versed in Polkadot/Substrate technology. We leverage the Polkadot/Substrate technology stack to power most of our blockchain development. Our blockchains, Darwinia and its canary network Crab, are based on Substrate and currently operate as parachains of Polkadot and Kusama respectively. "),(0,r.kt)("p",null,"Additionally, we have extensive experience with the Solidity programming language. Notably, we have already implemented a beacon light client in Solidity that has been successfully running on the Darwinia Chain."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/darwinia-network/darwinia-messages-sol"},"https://github.com/darwinia-network/darwinia-messages-sol")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/darwinia-network/darwinia-messages-substrate"},"https://github.com/darwinia-network/darwinia-messages-substrate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/darwinia-network/darwinia"},"https://github.com/darwinia-network/darwinia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/darwinia-network/darwinia-common"},"https://github.com/darwinia-network/darwinia-common"))),(0,r.kt)("p",null,"Github accounts of team members:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Denny: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hackfisher"},"https://github.com/hackfisher")),(0,r.kt)("li",{parentName:"ul"},"Echo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hujw77"},"https://github.com/hujw77")),(0,r.kt)("li",{parentName:"ul"},"Aki: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wuminzhe"},"https://github.com/wuminzhe"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"references to conversations you might have had related to this project with anyone from the Web3 Foundation,\n",(0,r.kt)("a",{parentName:"li",href:"https://forum.polkadot.network/t/decentralized-dot-eth-bridges-a-comparison-thread/777/33"},"https://forum.polkadot.network/t/decentralized-dot-eth-bridges-a-comparison-thread/777/33"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:"),"  6 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 60,000 USD")),(0,r.kt)("h3",{id:"milestone-1--curve-precompiles"},"Milestone 1 \u2014 Curve precompiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 2 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 20,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"BLS12-377 precompile"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-2539"},"EIP-2539")," compatible BLS12-377 precompile which can run inside ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paritytech/frontier"},"frontier"),". It will be developed using Rust programming language. The libraries we plan to use are ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/arkworks-rs/curves"},"arkworks-rs/curves")," library or the substrate host function calls provided by this ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/pull/13031"},"Pull Request"),".",(0,r.kt)("br",null),"Other references: ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://github.com/celo-org/celo-blockchain/pull/1157"},"https://github.com/celo-org/celo-blockchain/pull/1157"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://github.com/celo-org/celo-blockchain/pull/1341"},"https://github.com/celo-org/celo-blockchain/pull/1341"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"BW6-761 precompile"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-3026"},"EIP-3026")," compatible BW6-761 precompile which can run inside ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/paritytech/frontier"},"frontier"),". The programming language and libs to use are the same as BLS12-377 precompile.",(0,r.kt)("br",null),"Other references: ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://github.com/celo-org/celo-blockchain/pull/1282"},"https://github.com/celo-org/celo-blockchain/pull/1282"))))),(0,r.kt)("h3",{id:"milestone-2--basic--packed-verifier"},"Milestone 2 \u2014 Basic & Packed verifier"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 40,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"MIT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and an example to verify the proof generated from ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/w3f/apk-proofs/blob/main/bw6/examples/recursive.rs"},"W3F's PoC example"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Libraries preparation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will prepare the import libraries which are critical to the implementation of the verifier in solidity.",(0,r.kt)("br",null),"1. Fiat-shamir transformation. A solidity friendly replacement to the Merlin::Transcript.",(0,r.kt)("br",null),"2. Lagrange evaluation.",(0,r.kt)("br",null),"3. KZG verification. We will write a froniter precompile to do it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Basic APK verifier"),(0,r.kt)("td",{parentName:"tr",align:null},"We will implement the basic verifer which will check the apk is correct.  We plan to use the PoC code from ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/w3f/apk-proofs"},"apk-proofs")," as a reference to implement this verifier. It can verify the proofs generated by ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/w3f/apk-proofs/blob/main/bw6/examples/recursive.rs"},"the PoC example"),". We will implement it using Solidity language.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Packed APK verifier"),(0,r.kt)("td",{parentName:"tr",align:null},"We will implement the packed verifer which will check the apk is correct. We plan to use the PoC code from ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/w3f/apk-proofs"},"apk-proofs")," as a reference to implement this verifier. We will implement it using Solidity language.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"BLS verifier"),(0,r.kt)("td",{parentName:"tr",align:null},"We will implement the bls verifier which will check if the aggregate signature is signed by the apk. We will use the BLS12-377 precompile implemented in Milestone 1. We will implement it using Solidity language.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Signers threshold checker"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if the bitvector of pubkeys contains enough signers. We will implement it using Solidity language.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We intend to leverage this verifier to develop our on-chain light clients after the grant is completed. "),(0,r.kt)("li",{parentName:"ul"},"Adapt to other EVM chains that satisfy the curves' requirements."),(0,r.kt)("li",{parentName:"ul"},"Follow the revision of the W3F paper.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website / personal recommendation"),(0,r.kt)("p",null,"Additional information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/darwinia-network/darwinia-messages-sol/tree/master/contracts/bridge/src/truth"},"Darwinia truth layer")," currently include Beacon light client, BSC light client and Darwinia light client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helixbridge.app/en"},"Helix Bridge")," which have bridges based on Darwinia cross-chain messaging protocol.")))}u.isMDXComponent=!0}}]);