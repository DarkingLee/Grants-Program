"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9367],{14359:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));a(95657);const l={},n="solidity-trie-verifier",o={unversionedId:"applications/solidity-trie-verifier",id:"applications/solidity-trie-verifier",title:"solidity-trie-verifier",description:"- Team Name: Polytope Labs",source:"@site/applications/solidity-trie-verifier.md",sourceDirName:"applications",slug:"/applications/solidity-trie-verifier",permalink:"/applications/solidity-trie-verifier",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/solidity-trie-verifier.md",tags:[],version:"current",frontMatter:{}},d={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"APIs",id:"apis",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team GitHub Profiles",id:"team-github-profiles",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Implementation",id:"milestone-1-implementation",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:s},m="wrapper";function c(t){let{components:e,...a}=t;return(0,i.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solidity-trie-verifier"},"solidity-trie-verifier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Polytope Labs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x486cbad2d704bc76f8d0cdda6aa93c94d53297b9 (Ethereum DAI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This project aims to deliver an implementation of the parity trie ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233"},"verifier")," as required by state proof checking algorithms (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/state-machine/src/lib.rs#L1102"},"read_child_proof_check"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/state-machine/src/lib.rs#L1128"},"read_proof_check_on_proving_backend"),") in the Solidity programming language, which would include various sub implementations (for example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81"},"NodeCodec")," for both layoutv0 & layoutv1) required to build trustless bridging protocols from the Polkadot ecosystem to the EVM ecosystem."),(0,i.kt)("p",null,"Goal: To create a primitive for more generalized bridging protocols like IBC, it is more efficient to verify Parachain state/storage than to use custom implementations which ",(0,i.kt)("a",{parentName:"p",href:"https://darwinia.network/"},"Darwinia")," and ",(0,i.kt)("a",{parentName:"p",href:"https://snowfork.com/"},"Snowfork")," do."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("h4",{id:"apis"},"APIs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function VerifyProof(root bytes32, proof bytes[], keyValues KeyValue[]) public external returns (bool)\n\nstruct KeyValue {\n    key bytes;\n    value bytes;\n}\n")),(0,i.kt)("h4",{id:"technology-stack"},"Technology Stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Solidity")),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seun Lanlege,"),(0,i.kt)("li",{parentName:"ul"},"Sam Omidiora, Femi Bankole")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Jesse Chejieh"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:jesse@polytope.technology"},"jesse@polytope.technology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://research.polytope.technology/"},"research.polytope.technology"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Harneys Fiduciary (Cayman) Limited, 4th Floor, Harbour Place, 103 South Church Street, Cayman Islands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Polytope Labs Ltd.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Polytope Labs is a collective of core blockchain engineers, researchers & scientists from varying blockchain protocol backgrounds passionate about the proliferation of networks over platforms and enabling this future through blockchain research & education, tooling and core infrastructure development. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Seun Lanlege: Previously core developer at Parity Tech, Ethereum and Polkadot with over 4 years of industry experience, core contributor of the code utilized by the ecosystem who recently joined the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-fellows/seeding/pull/33"},"Polkadot fellowship program")," and Mad Scientist at Polytope Labs."),(0,i.kt)("li",{parentName:"ul"},"Sam Omidiora: Senior Blockchain Engineer with over four years of industry experience, previosly at ",(0,i.kt)("a",{parentName:"li",href:"https://aave.com/"},"Aave"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.ambire.com/"},"Ambire")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.advancedblockchain.com/"},"Advanced Blockchain")," working with the solidity programming language and Lab Scientist at Polytope Labs."),(0,i.kt)("li",{parentName:"ul"},"Femi Bankole: Blockchain engineer at ",(0,i.kt)("a",{parentName:"li",href:"https://matchx.io/"},"Matchx_iot")," + ",(0,i.kt)("a",{parentName:"li",href:"https://www.mxc.org/"},"MXC Foundation")," and Lab Intern at Polytope Labs.")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/solidity-merkle-trees"},"Solidity Merkle Trees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/sc-simnode"},"Simnode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/prisma-client-rs"},"Prisma Client"))),(0,i.kt)("h3",{id:"team-github-profiles"},"Team GitHub Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/seunlanlege/"},"Seun Lanlege")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/samparsky"},"Sam Omidiora")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iTranscend/"},"Femi Bankole"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/seunlanlege/"},"Seun Lanlege")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/omidiora-samuel/"},"Sam Omidiora")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/femibankole"},"Femi Bankole"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 Weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2.5 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 30,000 USD")),(0,i.kt)("h3",{id:"milestone-1-implementation"},"Milestone 1 Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 Weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2.5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 30,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"A documentation on how to use this library in form of a README on the project repository.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that covers what was done/achieved as part of the grant.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Solidity SCALE Codec"),(0,i.kt)("td",{parentName:"tr",align:null},"This will include support for ",(0,i.kt)("inlineCode",{parentName:"td"},"enum{option/result}"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Vec<Vec<u8>>")," decoding and other types required for verifying state proofs as current implementations(",(0,i.kt)("a",{parentName:"td",href:"https://github.com/darwinia-network/darwinia-messages-sol/blob/master/contracts/utils/contracts/ScaleCodec.sol"},"Darwinia"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/ScaleCodec.sol"},"Snowfork"),") don't support.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"KeyspacedDB"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426"},"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"MemoryDB"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163"},"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"NodeCodec"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81"},"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Node"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184"},"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"NodePlan"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507"},"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"7."),(0,i.kt)("td",{parentName:"tr",align:null},"NodeHeader"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26"},"https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"8."),(0,i.kt)("td",{parentName:"tr",align:null},"NibbleSlicePlan"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454"},"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"9."),(0,i.kt)("td",{parentName:"tr",align:null},"NibbleSlice"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180"},"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"10."),(0,i.kt)("td",{parentName:"tr",align:null},"Layoutv0"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the Solidity implementation of following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60"},"https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"11."),(0,i.kt)("td",{parentName:"tr",align:null},"Layoutv1"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the Solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63"},"https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"12."),(0,i.kt)("td",{parentName:"tr",align:null},"Trie Verifier"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide the Solidity implementation of the following; ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233"},"https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233"),".")))),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website."))}c.isMDXComponent=!0}}]);