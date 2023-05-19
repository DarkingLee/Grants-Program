"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9403],{41704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="Pallet-dPoS for Parachain Staking",o={unversionedId:"applications/parachain-staking",id:"applications/parachain-staking",title:"Pallet-dPoS for Parachain Staking",description:"Proposer:* Moonbeam Network",source:"@site/applications/parachain-staking.md",sourceDirName:"applications",slug:"/applications/parachain-staking",permalink:"/applications/parachain-staking",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/parachain-staking.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Background",id:"background",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1: Improve Parachain-Staking Pallet",id:"milestone-1-improve-parachain-staking-pallet",level:3},{value:"Milestone 2: Parachain-Staking Polkadot-JS UI",id:"milestone-2-parachain-staking-polkadot-js-ui",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},d="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pallet-dpos-for-parachain-staking"},"Pallet-dPoS for Parachain Staking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PureStake/moonbeam"},"Moonbeam Network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x9a66721302d9f30a9d11cf48a09c7ef1a842b5c8")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"Moonbeam is an Ethereum-compatible parachain built with Substrate. Since January 2021, Moonbeam's runtime developer team has written and maintained a delegated Proof of Stake (dPoS) implementation designed specifically for parachains called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src"},(0,i.kt)("inlineCode",{parentName:"a"},"parachain-staking")),". To make this code useful for other parachain teams, Moonbeam is applying for ecosystem funding to extend, benchmark, and document its dPoS implementation."),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("p",null,"In the Polkadot consensus model, parachains have different requirements and constraints than the relay chain. While ",(0,i.kt)("inlineCode",{parentName:"p"},"frame/pallet-staking")," offers many features necessary for relay chain consensus and shared security, it is overkill for parachains, which operate with more limited execution resources."),(0,i.kt)("p",null,"Instead of running an on-chain election, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src"},(0,i.kt)("inlineCode",{parentName:"a"},"parachain-staking"))," implements direct delegation with a bounded number of nominations per ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId")," (maximum of ",(0,i.kt)("inlineCode",{parentName:"p"},"Config::MaxCollatorsPerNominator")," per account). In this paradigm, token holders (nominators) express exactly which collator candidates they would like to support and with what quantity of stake."),(0,i.kt)("p",null,"There is a new round every ",(0,i.kt)("inlineCode",{parentName:"p"},"<Round<T>>::get().length = 600")," blocks. At the start of each round, the top ",(0,i.kt)("inlineCode",{parentName:"p"},"<TotalSelected<T>>::get() = 16")," collator candidates (in terms of total backing stake) are chosen to be in the active collator set. At every block, a subset of this active collator set is chosen pseudorandomly by the ",(0,i.kt)("inlineCode",{parentName:"p"},"author-filter")," pallet as valid block authors. Only valid block authors can produce blocks."),(0,i.kt)("p",null,"Block authors are logged via the ",(0,i.kt)("inlineCode",{parentName:"p"},"set_author_inherent")," method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"author-inherent")," pallet. The logic in this runtime method reports each block author to ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain-staking"),", which distributes inflation rewards after a 2 round delay."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Members:")," Derek Yoo, Alan Sapede, Antoine Estienne, Joshy Orndorff, Amar Singh"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LinkedIn Profiles"),": ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/derek-yoo-8a050/"},"https://www.linkedin.com/in/derek-yoo-8a050/"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alansapede/"},"https://www.linkedin.com/in/alansapede/"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code Repos:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PureStake/moonbeam"},"https://github.com/PureStake/moonbeam")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.purestake.com/"},"https://www.purestake.com/"),", ",(0,i.kt)("a",{parentName:"li",href:"https://moonbeam.network/"},"https://moonbeam.network/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Legal Structure:")," PureStake Ltd, Floor 4, Willow House, Cricket Square, Grand Cayman, KY1-9010, Cayman Islands"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team's Experience:")," ")),(0,i.kt)("p",null,"The PureStake team has extensive experience developing and delivering complex web2 software systems. In the last year, PureStake has built a number of web3 infrastructure projects including Algorand API Services (",(0,i.kt)("a",{parentName:"p",href:"https://developer.purestake.io/"},"https://developer.purestake.io/"),") and the Goalseeker block explorer (",(0,i.kt)("a",{parentName:"p",href:"https://goalseeker.purestake.io/"},"https://goalseeker.purestake.io/"),"), among others."),(0,i.kt)("p",null,"Derek co-founded Fuze in 2006 and as CTO was responsible for engineering, technical operations, product management, and design as the company grew over time into a 700 person cloud business. Alan was responsible for large parts of the Fuze cloud backend. Before joining Fuze, Alan was on the Google Streetview Team and also worked at NVidia developing drivers."),(0,i.kt)("p",null,"Antoine has been developing Web3 Dapps since 2016. He has participated in 3 projects inside ConsenSys (VariabL, Localties and Fathom) and helped HyperNetwork build their token system. Now, he's working for Moonbeam and has contributed to the polkadot-js suite (apps, common, api, etc)."),(0,i.kt)("p",null,"Joshy and Amar worked at Parity on the Substrate Recipes."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 30000 DAI")),(0,i.kt)("p",null,"Both milestones will be worked on in parallel, but UI development will lag changes to the pallet implementation."),(0,i.kt)("h3",{id:"milestone-1-improve-parachain-staking-pallet"},"Milestone 1: Improve Parachain-Staking Pallet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 20000 DAI")),(0,i.kt)("p",null,"In addition to updating Rust crate-level docs and ",(0,i.kt)("a",{parentName:"p",href:"https://meta5.world/stake-docs/"},"outdated user-level docs")," in step (5), we will also pursue the following changes to the current ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/tree/master/pallets/parachain-staking/src"},(0,i.kt)("inlineCode",{parentName:"a"},"parachain-staking"))," implementation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Benchmark to derive transaction weights. This work has been started in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/pull/372"},"this PR"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Security Research Labs reported two critical vulnerabilities in ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain-staking"),": (i) total locked balance was not updated in ",(0,i.kt)("inlineCode",{parentName:"p"},"{collator, nominator}_bond_more")," leading to a potential underflow error (which could trigger excessive issuance) (ii) bounded number of nominations per collator allowed any account to fill the slots with the minimum nomination thereby preventing higher nominations.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The inflation logic implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/blob/master/pallets/parachain-staking/src/inflation.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"parachain-staking"))," is minimal. Instead of integrating ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-staking"),"'s reward curve, the current implementation calculates per-round inflation derived from an annual inflation rate. Although the inflation rate can be updated by governance (sudo as of now), it is constant. Some parachain teams (i.e. Kilt) have requested configurable inflation that uses ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-staking"),"'s reward curve instead because it has been audited and reviewed more closely.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Moonbeam reserves 30% of inflation for future parachain bond(s). To support this functionality, ",(0,i.kt)("inlineCode",{parentName:"p"},"parachain-staking")," added the storage item ",(0,i.kt)("inlineCode",{parentName:"p"},"ParachainBondConfig"),". This storage item is updatable by the root origin; it configures the percent (30%) of inflation reserved as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId")," which receives the reserved funds. This feature is convenient for parachains in the Polkadot ecosystem, all of which must pay rent to the network by locking funds in the parachain bond."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"GPL3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Update Rust crate-level docs and ",(0,i.kt)("a",{parentName:"td",href:"https://meta5.world/stake-docs/"},"user-level docs")," with implementation details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmark"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmark the existing implementation to derive transaction weights and discern optimization opportunities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Patch SR-Labs Critical Vulnerabilities"),(0,i.kt)("td",{parentName:"tr",align:null},"Patch both critical vulnerabilities reported by SR labs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Configurable Inflation"),(0,i.kt)("td",{parentName:"tr",align:null},"Replace sudo with governance origin for setting inflation rate. Provide instructions for replacing constant inflation with ",(0,i.kt)("inlineCode",{parentName:"td"},"pallet-staking"),"'s reward curve logic.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Configurable Parachain Bond Reservation"),(0,i.kt)("td",{parentName:"tr",align:null},"Add optional parachain bond configuration that enables reserving a portion of inflation for future parachain bonds.")))),(0,i.kt)("h3",{id:"milestone-2-parachain-staking-polkadot-js-ui"},"Milestone 2: Parachain-Staking Polkadot-JS UI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10000 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Custom Polkadot-JS UI"),(0,i.kt)("td",{parentName:"tr",align:null},"An overlay UI using polkadot-js similar to the ",(0,i.kt)("inlineCode",{parentName:"td"},"pallet-staking")," UI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"PR polkadot-js apps"),(0,i.kt)("td",{parentName:"tr",align:null},"Make a pull request to polkadot-js apps with output")))),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,"The current implementation has ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PureStake/moonbeam/blob/master/pallets/parachain-staking/src/tests.rs"},"significant unit test coverage")," and this will be maintained throughout the changes listed in Milestone 1. There are also runtime integration tests written in Rust as well as TS integration tests. Maintenance is not explicitly included in the milestones because test coverage is already relatively comprehensive and we have an incentive to maintain it throughout the proposed changes."))}k.isMDXComponent=!0}}]);