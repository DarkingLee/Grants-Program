"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7780],{91640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="Sunrise DEX",o={unversionedId:"applications/sunrise-dex",id:"applications/sunrise-dex",title:"Sunrise DEX",description:"Team Name:* Sunrise Protocol",source:"@site/applications/sunrise-dex.md",sourceDirName:"applications",slug:"/applications/sunrise-dex",permalink:"/applications/sunrise-dex",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sunrise-dex.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"3. Sunrise DEX Factory",id:"3-sunrise-dex-factory",level:4},{value:"3.1 Sunrise Factory/Registry Contract",id:"31-sunrise-factoryregistry-contract",level:4},{value:"Sunrise Protocol Overview",id:"sunrise-protocol-overview",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"DEX Evolution",id:"dex-evolution",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1: Framework design and minimal DEX Pallets",id:"milestone-1-framework-design-and-minimal-dex-pallets",level:3},{value:"Milestone 2: Full version of SRS model",id:"milestone-2-full-version-of-srs-model",level:3},{value:"Milestone 3: Sunrise DApp on Test Network",id:"milestone-3-sunrise-dapp-on-test-network",level:3},{value:"Future plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sunrise-dex"},"Sunrise DEX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Sunrise Protocol"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qv2jhx5ykm4szuu9lp4ehtxclf67v6n7dprcgyl "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/pull/164#issuecomment-874248620"},"Terminated"))),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Sunrise is building a decentralized protocol on a dedicated Polkadot parachain. We will enable deep liquidity starting with support for tokens on Sunrise Chain, Ethereum, and all parachains. Sunrise will support additional blockchains in the future. "),(0,i.kt)("p",null,"Our Decentralized EXchange (DEX) uses a bonding curve factory which supports liquidity pools for unpegged tokens such as ETH,DOT, LINK, ACA etc. Sunrise will support stable coin pools offering very low slippage and fees (e.g. DAI-USDT) and in the future stable coins that have different pegs (e.g. srsUSD-srsCNY)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Chain.png",alt:"Sunrise Chain Vision",title:"Sunrise Chain"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Deployment")),(0,i.kt)("p",null,"The first phase of the project will be built and deployed on a parachain via Rococo. Our standalone parachain ",(0,i.kt)("a",{parentName:"p",href:"https://daybreakexplorer.sunriseprotocol.com/"},"Sunrise Protocol Daybreak")," will be the precursor. Sunrise is also evaluating the ability to deploy an Intrachain DEX (running on our partners) parachain, this will be done either publishing a DEX crate, updating ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-web3-stack/open-runtime-module-library/tree/master"},"ORML libraries"),", or directly contributing to partners codebase with a pull request to their repository."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Polkadot Ecosystem Benefits")),(0,i.kt)("p",null,"Sunrise protocol lays the foundation for the seamless exchange of assets, efficiency of stable coin transactions and advanced aggregation. Our product will attract the decentralized finance (DeFi) community and provide more liquidity that helps drive increased adoption for the Polkadot Network. The DEX is multi-platform and bridges across parachains allowing the community to access the latest protocols and initiatives. Sunrise has identified numerous gaps to capitalize on, in relation to the infrastructure of the most popular decentralized exchanges, which includes liquidity pool customization, limit order functionality and compliance functionality."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why are we creating this project")),(0,i.kt)("p",null,"This project provides a foundational layer for the Sunrise Protocol."),(0,i.kt)("p",null,"Our team consists of founders, researchers, builders and strategists for blockchain and decentralized finance. We have built a layer 1 blockchain at Harmony (public blockchain with sharding and open staking), have launched private permissioned chains on ethereum and hyperledger fabric  and have been actively involved in the Decentralized Finance community. We have chosen to build this project on Polkadot because Substrate allows us to focus on the Protocol and business logic. We feel the Partners in the ecosystem are laying the foundation for interoperable decentralization and we want to contribute to the community."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://about.sunriseprotocol.com"},"this product overview presentation")," and ",(0,i.kt)("a",{parentName:"p",href:"https://whitepaper.sunriseprotocol.com"},"Sunrise Protocol Whitepaper")," for an overview of the Sunrise Protocol vision."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This Project is specifically for the Sunrise Dex Factory which is a foundational component for the Sunrise Protocol")),(0,i.kt)("p",null,"The Sunrise Decentralized Exchange (DEX) combines the use of multiple bonding curves and price oracles to support liquidity pools for unpegged tokens, and stable coin pools. Below is an excerpt from the ",(0,i.kt)("a",{parentName:"p",href:"https://whitepaper.sunriseprotocol.com"},"Sunrise Protocol Whitepaper")," "),(0,i.kt)("h4",{id:"3-sunrise-dex-factory"},"3. Sunrise DEX Factory"),(0,i.kt)("p",null,"The Sunrise DEX Factory will support the creation of Liquidity Pool Contracts.  The bonding curves for these liquidity pools, will be slightly different depending on the use case. Each exchange contract can be configured to the specific needs of the liquidity pool."),(0,i.kt)("h4",{id:"31-sunrise-factoryregistry-contract"},"3.1 Sunrise Factory/Registry Contract"),(0,i.kt)("p",null,"All contracts will have a uniform interface for liquidity management and swap management. Thus abstracting away the underlying complexity from liquidity providers and traders, giving them a uniform mechanism to interact with all Sunrise liquidity pools."),(0,i.kt)("p",null,"Below is a list of the configuration parameters input into the factory contract when creating an exchange contract."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sunrise Protocol Seven Key Parameters")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"T")," Token Weight : Weight of Token in the Pool",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tokens:  ",(0,i.kt)("strong",{parentName:"li"},"T"),". Assume there are ",(0,i.kt)("strong",{parentName:"li"},"n")," type of tokens in one liquidity pool, we denote them as ",(0,i.kt)("strong",{parentName:"li"},"(T1,T2,... Tn)"),"."),(0,i.kt)("li",{parentName:"ul"},"weight parameter: ",(0,i.kt)("strong",{parentName:"li"},"Wi(0<=Wi<=1)")," is the parameter of token ",(0,i.kt)("strong",{parentName:"li"},"i")," in our model, which is a constant defined when creating the pool. We always assume ",(0,i.kt)("strong",{parentName:"li"},"the sum of Wi =1"),"."),(0,i.kt)("li",{parentName:"ul"},"initial balance: ",(0,i.kt)("strong",{parentName:"li"},"(x1,x2,...,xn)"),"  are the initial amounts a liquidity provider puts into a liquidity pool."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"epsilon")," Fees : Liquidity Provider and Protocol Fees"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"beta")," Depth : Depth of Pool before slippage occurs"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Delta")," Slippage: The rate at which price slippage increases"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Alpha")," Max Min: Maximum and Minimum Token allocation for each reserve"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"lambda")," Dynamic fees : Unbalancing Penalty Fees"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"k"),"  Market Price Alignment: Alignment of the Bonding Curve with Price Oracle ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Bonding%20Curves.png",alt:"Sunrise Bonding Curves",title:"Sunrise Bonding Curves"}),"\n",(0,i.kt)("strong",{parentName:"p"},"The three types of bonding curves use the following variables")),(0,i.kt)("p",null,"3.1 MultiToken Bonding Curve (1,2)"),(0,i.kt)("p",null,"3.2 StableCoin Bonding Curve (1,2,3,4,5,6)"),(0,i.kt)("p",null,"3.3. Proactive Bonding Curve (1,2,3,4,5,6,7)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"There will be default values for each of these parameters based on the Bonding Curve Type.")),(0,i.kt)("p",null,"When not utilized the variable will be set to a default value having a nonconsequential effect."),(0,i.kt)("h4",{id:"sunrise-protocol-overview"},"Sunrise Protocol Overview"),(0,i.kt)("p",null,"Sunrise Protocol is creating an open decentralized financial framework. Sunrise is building a complete suite of financial tools and non custodial services within a compliant framework . This will be done in a trustless decentralized environment. With the goal of disrupting and streamlining current solutions offered by Centralized Exchanges and International remittances."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The following information is a short summary of the other features of the protocol")),(0,i.kt)("p",null,"Sunrise Bridge is used to create a multi-platform, multi-asset protocol using cryptocurrencies (tokens) as building blocks. We will start with Polkadot parachains, ERC-20 tokens and then other blockchains."),(0,i.kt)("p",null,"Once the primitives of a multi-platform, multi-asset DEX have been realized, decentralized financial protocols can leverage this for their liquidity needs. "),(0,i.kt)("p",null,"Sunrise Protocol will then add limit orders, a compliance framework and smart wallet functionality to give cost effective alternatives to Centralized Exchanges and International remittances."),(0,i.kt)("p",null,"Below are the high level modules that can be integrated into the Sunrise Ecosystem. A number of these will be implemented by our partners and the community, some of which may be subsidized by Sunrise Protocol grants."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Ecosystem.png",alt:"Sunrise Ecosystem",title:"Sunrise Ecosystem"})),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Sunrise Protocol is building an open decentralized framework. This grant application is for the Sunrise DEX, a sub-component of the larger Sunrise Protocol. "),(0,i.kt)("p",null,"We have done a comprehensive review of the other DEX projects which include Polkaswap, Reef, Mangata, HydraDx, Polkadex, Subdex. We see there are gaps in the current DEX Approaches, these include stable coin support, limit order functionality and compliance functionality. We feel that these DEX projects cannot be leveraged as part of our protocol due to the mentioned gaps and the different technical approaches. "),(0,i.kt)("p",null,"We are the only protocol to offer multi-asset pools, optimized stable coin support, multiple bonding curves, adjustable transaction fees and limit orders.  We combine this with bridging capabilities for multi-platform support, limit order capabilities, combinatorial staking for better rewards, synthetic asset support, a compliance framework and smart wallet functionality to drive mass adoption."),(0,i.kt)("p",null,"This application is specific to the DEX Pallet and lays the foundation for the larger vision which can be seen in our ",(0,i.kt)("a",{parentName:"p",href:"https://whitepaper.sunriseprotocol.com"},"draft white paper"),"."),(0,i.kt)("h3",{id:"dex-evolution"},"DEX Evolution"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Reference%20Protocols.png",alt:"Sunrise Reference Protocols",title:"Sunrise Reference Protocols"})),(0,i.kt)("p",null,"The following protocols offer specific functionality and are often leaders in their respective areas.  The points below walk through a chronological evolution of DEX and cross-chain capabilities."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uniswap introduced a simple bonding curve supporting two token liquidity pools."),(0,i.kt)("li",{parentName:"ul"},"It later introduced it\u2019s UNI token which is now table stakes for all Decentralized Exchanges, Sunrise Protocol extends this combining trading, protocol and liquidity balance rewards."),(0,i.kt)("li",{parentName:"ul"},"Multi Asset Pools were introduced by Balancer and adopted by Curve who introduced the first bonding curve to support stable coins."),(0,i.kt)("li",{parentName:"ul"},"Price Oracles being utilized by Automated Market Makers are being evaluated by Sunrise and DodoEx wrote a good white paper about the topic."),(0,i.kt)("li",{parentName:"ul"},"Sunrise protocol adds to this with multipe bonding curves which supports multi asset pools, stable coins, and traditional tokens."),(0,i.kt)("li",{parentName:"ul"},"Our Liquidity Providers can set the transaction fees when creating a Liquidity Pool similar to Balancer and Curve."),(0,i.kt)("li",{parentName:"ul"},"We also introduce limit orders powered by our unique off-chain worker capabilities."),(0,i.kt)("li",{parentName:"ul"},"Polkadot and Ethereum are supported initially with more platforms to come powered by our integrated bridging technology."),(0,i.kt)("li",{parentName:"ul"},"Reef and PolkaDex are also building on Polkadot which provides the ability to create dedicated parachains."),(0,i.kt)("li",{parentName:"ul"},"A Compliance Framework will be leveraged by Sunrise Protocol to provide cost effective solutions which compete with Centralized Exchanges and International remittances."),(0,i.kt)("li",{parentName:"ul"},"Smart Wallet Functionality will also be provided to simplify the user experience and drive mass adoption.")),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("p",null,"John and Geoff will be the major contributors for this phase of Sunrise Protocol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"John Whitton: Sunrise Protocol Founder"),(0,i.kt)("li",{parentName:"ul"},"Geoff: Sunrise Protocol Core Protocol Engineer and Solution Architect")),(0,i.kt)("p",null,"Additional team members will be announced shortly and contributing to this and other components of Sunrise Protocol"),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," John Whitton "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:john@sunriseprotocol.com"},"john@sunriseprotocol.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://sunriseprotocol.com"},"https://sunriseprotocol.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A ")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"The team all have strong experience building Layer 1 Blockchain Platforms and Decentralized Financial Protocols."),(0,i.kt)("p",null,"Relevant Contributions are"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"John Whitton:")," John Whiton has been passionate about software and technology since high school. He graduated from the University of Queensland in Computer Science and travelled globally leading the design and development of many Service Oriented Architectures. He has built private permissioned blockchains on Ethereum and Hypersphere Fabric, partnering with firms such as IBM and Deloitte. He then grew the ecosystem for a public blockchain at Harmony. He has worked extensively with decentralized financial protocols, bringing a unique perspective by combining his extensive corporate experience with IBM, SAP, Deloitte and KPMG with the disruptive financial models being developed on blockchain."),(0,i.kt)("p",null,"John originally met Gavin Wood in 2016 and worked briefly with Tomasz Drwi\u0119ga on Parity before taking a role as CTO of a small Blockchain Startup based on Ethereum which then moved to Hyperledger. He did further ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnwhitton/blockchain-eval/blob/master/substrate.md"},"research")," into Polkadot and Substrate in 2019 and did strategy work on smart contract protocols and digital assets in 2019 including working on Cowri (now shell protocol),a stablecoin exchange protocol, before taking a role with Harmony as an Ecosystem Architect with a focus on Developer tooling and Ecosystem growth. At Harmony, John helped launch the Mainnet while also being intimately involved with hiring decisions and business strategy. His technical Portfolio is ",(0,i.kt)("a",{parentName:"p",href:"https://johnwhitton.dev/docs/docs/learn/portfolio/"},"here")," and more information can be found on ",(0,i.kt)("a",{parentName:"p",href:"https://johnwhitton.dev/"},"johnwhitton.dev"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Geoff:")," Prior to joining Sunrise Protocol where Geoff leads the SRS token design and works on core protocol development. Geoff worked as a Blockchain Engineer and Research analyst, leading  technical due diligence on Decentralized Financial Protocols and Layer 1 Protocol offerings. He has reviewed thousands of whitepapers and tokenomics models. He has mentored many founders and blockchain startups and created investor briefings including strategy review, market fit and technical due diligence.  Technical contributions  include Decentralized Financial Protocols, Layer 2 Solutions, Decentralized Identity and encrypted data storage as well as protocol and infrastructure work such as consensus algorithms, sharding, smart contracts design and standards (Open Zeppelin). He has done extensive smart contract design and development with an in depth knowledge of decentralized financial protocols and tooling; including prototyping and development of DeFi Standards across multiple platforms."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sunriseprotocol"},"Sunrise Protocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/johnwhitton"},"John Whitton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gdevsrs"},"Geoff"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/johnwhitton/"},"John Whitton")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/geoff-s-9417b31bb/"},"Geoff"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"In this phase we plan to develop the initial decentralized exchange pallet for the Sunrise Protocol."),(0,i.kt)("p",null,"This application is specific to the DEX Pallet and lays the foundation for the larger vision which can be seen in our ",(0,i.kt)("a",{parentName:"p",href:"https://whitepaper.sunriseprotocol.com"},"draft white paper"),"."),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 Months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 0.9 BTC")),(0,i.kt)("h3",{id:"milestone-1-framework-design-and-minimal-dex-pallets"},"Milestone 1: Framework design and minimal DEX Pallets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Estimated Duration: 1 month"),(0,i.kt)("li",{parentName:"ul"},"FTE: 2"),(0,i.kt)("li",{parentName:"ul"},"Costs: 0.4 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how to create a liquidity pool and provision funds to it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests.",(0,i.kt)("br",null),"The tests will cover basic functionlity like",(0,i.kt)("br",null),"i. Creating a Liquidity Pool",(0,i.kt)("br",null),"ii. Adding and removing liquidity",(0,i.kt)("br",null),"iii. Swapping based on exact amount in and exact amount out")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Multi-currency Baseline"),(0,i.kt)("td",{parentName:"tr",align:null},"Support Multiple Currencies being traded this will leverage and expand upon the following from ",(0,i.kt)("a",{parentName:"td",href:"https://substrate.dev/docs/en/knowledgebase/runtime/frame"},"FRAME")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/open-web3-stack/open-runtime-module-library"},"ORML"),(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"https://github.com/paritytech/substrate/blob/master/frame/support/src/traits.rs#L858"},"FRAME:support:currency trait"),(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"https://crates.io/crates/pallet-balances"},"FRAME:pallet-balances"),(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"https://github.com/open-web3-stack/open-runtime-module-library/blob/master/tokens/src/lib.rs"},"orml-tokens"),(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"https://github.com/open-web3-stack/open-runtime-module-library/blob/master/currencies/src/lib.rs"},"orml-currencies"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Pallet: sunrise-dex"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Pallet that will implement a simplified multi-token bonding curve.",(0,i.kt)("br",null),"We will begin prototyping with a two token pool similar to ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol"},"uniswapV2Pair"),(0,i.kt)("br",null),"Then enhance to a multi-token-pool see ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/balancer-labs/balancer-core/blob/master/contracts/BMath.sol"},"balancer as a reference implementation"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2a."),(0,i.kt)("td",{parentName:"tr",align:null},"Liquidity Pool Management"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create functions that will implement liquidity management samples included below",(0,i.kt)("br",null),"Pool Creation",(0,i.kt)("br",null),"Add liquidity",(0,i.kt)("br",null)," Remove Liquidity ",(0,i.kt)("br",null),"Pool creation will be configurable based on the seven parameters mentioned above")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2b."),(0,i.kt)("td",{parentName:"tr",align:null},"Swap Functionality"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create functions that will implement swap functionality including samples included below",(0,i.kt)("br",null)," calcSpotPrice",(0,i.kt)("br",null),"calcOutGivenIn",(0,i.kt)("br",null),"calcInGivenOut",(0,i.kt)("br",null),"calcPoolOutGivenSingleIn",(0,i.kt)("br",null),"calcSingleInGivenPoolOut",(0,i.kt)("br",null),"calcSingleOutGivenPoolIn ",(0,i.kt)("br",null),"calcPoolInGivenSingleOut",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"https://github.com/balancer-labs/balancer-core/blob/master/contracts/BMath.sol"},"Reference Implementation from Balancer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2c."),(0,i.kt)("td",{parentName:"tr",align:null},"Sunrise Router"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create functions that will implement routing capabilities samples included below",(0,i.kt)("br",null)," processPaths ",(0,i.kt)("br",null)," processEpsOfInterestMultiHop",(0,i.kt)("br",null)," getPricesOfInterest",(0,i.kt)("br",null),"calculateBestPathIdsForPricesOfInterest",(0,i.kt)("br",null),"getSwapAmountsForPriceOfInterest",(0,i.kt)("br",null),"getExactSwapAmounts ",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"td",href:"https://github.com/balancer-labs/balancer-sor/blob/master/src/sor.ts"},"Reference Implementation from Balancer"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,i.kt)("td",{parentName:"tr",align:null},"We will Host this on our Dawn Parachain on Rococco or our  ",(0,i.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdaybreak.sunriseprotocol.com%3A443#/explorer"},"Daybreak Standalone Chain"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain")))),(0,i.kt)("h3",{id:"milestone-2-full-version-of-srs-model"},"Milestone 2: Full version of SRS model"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Estimated Duration: 1 month"),(0,i.kt)("li",{parentName:"ul"},"FTE: 2"),(0,i.kt)("li",{parentName:"ul"},"Costs: 0.3 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes. Once the node is up, it will be possible to send test transactions that will show how to create a liquidity pool and provision funds to it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests.",(0,i.kt)("br",null),"Tests will include",(0,i.kt)("br",null),"i. Creating a stable coin pool",(0,i.kt)("br",null),"ii. Adding and removing liquidity ",(0,i.kt)("br",null)," iii. Swaps ",(0,i.kt)("br",null),"iv.Rewards staking and earning ",(0,i.kt)("br",null),"v. Testing functionalitly using explorer Extrinsics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Pallet: sunrise-dex"),(0,i.kt)("td",{parentName:"tr",align:null},"We will enhance the sunrise factory to support a stable coin bonding curve. ",(0,i.kt)("br",null),"Reference implementations include ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/curvefi/curve-contract/blob/master/contracts/pools/usdt/StableSwapUSDT.vy#L74"},"curve")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/cowri/shell-solidity-v1/blob/wbtc-renbtc-sbtc-10/22/2020/src/Shells.sol"},"shellprotocol"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Pallet: sunrise-rewards"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Pallet that will implement basic reward functionality.",(0,i.kt)("br",null)," Reference implementations include ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Uniswap/liquidity-staker"},"uniswap"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/balancer-labs/bal-mining-scripts"},"balancer")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/sushiswap/sushiswap/blob/master/contracts/SushiMaker.sol"},"sushiswap"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,i.kt)("td",{parentName:"tr",align:null},"We will Host this on our Dawn Parachain on Rococco or our  ",(0,i.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdaybreak.sunriseprotocol.com%3A443#/explorer"},"Daybreak Standalone Chain"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here is an overview of the Sunrise Reward design")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Rewards.png",alt:"Sunrise Rewards Design",title:"Sunrise Rewards Design"})),(0,i.kt)("h3",{id:"milestone-3-sunrise-dapp-on-test-network"},"Milestone 3: Sunrise DApp on Test Network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Estimated Duration: 1 month"),(0,i.kt)("li",{parentName:"ul"},"FTE: 2"),(0,i.kt)("li",{parentName:"ul"},"Costs: 0.2 BTC")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can deploy the Sunrise Protocol DApp and the polakdot-js app forked by Sunrise Protocol with DEX Capabilities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The code will have proper unit-test coverage (e.g. 90%) to ensure functionality and robustness. In the guide we will describe how to run these tests.",(0,i.kt)("br",null)," Tests will include ",(0,i.kt)("br",null),"i. Testing all functions via explorer using extrinsics ",(0,i.kt)("br",null),"ii. Testing functionality via the DApp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Polkadot-js app DEX Capabilities"),(0,i.kt)("td",{parentName:"tr",align:null},"We will fork polkadot-js app and provide dex functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Sunrise Protocol DApp"),(0,i.kt)("td",{parentName:"tr",align:null},"We will build Sunrise Protocol DApp with DEX Functionality")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Applications Deployed and Hosted on Dawn"),(0,i.kt)("td",{parentName:"tr",align:null},"We will deploy a hosted application that connects to Dawn.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate chain"),(0,i.kt)("td",{parentName:"tr",align:null},"We will Host this on our Dawn Parachain on Rococco or our  ",(0,i.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdaybreak.sunriseprotocol.com%3A443#/explorer"},"Daybreak Standalone Chain"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Community Education"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish Medium Articles in English and Chinese and also posts on twitter. Explaining the DEX Functionality.")))),(0,i.kt)("h2",{id:"future-plans"},"Future plans"),(0,i.kt)("p",null,"We plan to make our chain one of the leading parachains in the polkadot ecosystem. Thus, there is still a lot of work to be done. Here are a few of them:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Support for Multi-Currencies  via INK or EVM conforming to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/PSPs/blob/master/PSPs/drafts/psp-3.md"},"psp-3")),(0,i.kt)("li",{parentName:"ol"},"Enhance Deployment capabilities of the Sunrise DEX for other chains (either as an ORML module or as an INK Contract)"),(0,i.kt)("li",{parentName:"ol"},"Implement SRS Incentivization Functionality"),(0,i.kt)("li",{parentName:"ol"},"Bridging Functionality (XCMP Parachain Integration and Ethereum snowfork like integration)"),(0,i.kt)("li",{parentName:"ol"},"Sunrise Order Book and Limit Order Functionality"),(0,i.kt)("li",{parentName:"ol"},"Application Functionality (Sunrise Dapp, polkadot-js apps, wallet)"),(0,i.kt)("li",{parentName:"ol"},"Governance model using SRS"),(0,i.kt)("li",{parentName:"ol"},"Parachain Functionality (Launching on Rococco initially)"),(0,i.kt)("li",{parentName:"ol"},"Proactive Bonding curve integrated with price oracles"),(0,i.kt)("li",{parentName:"ol"},"Compliance Framework"),(0,i.kt)("li",{parentName:"ol"},"Smart Wallet Functionality"),(0,i.kt)("li",{parentName:"ol"},"Governance model using SRS")),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"Work done so far has included research and prototyping."),(0,i.kt)("p",null,"No other teams have contributed to the project."),(0,i.kt)("p",null,"This is Sunrise Protocol's first grant application. However John wrote a previous application for a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/pull/351"},"DEX Pallet"),". The original application has been archived and the vision has been refined based on feedback from David Hawig and knowledge gained working on substrate over the past months by the Sunrise Protocol team."),(0,i.kt)("p",null,"For a more comprehensive Sunrise Protocol Vision please read the following"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://about.sunriseprotocol.com"},"Sunrise Protocol Product Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lightpaper.sunriseprotocol.com"},"Sunrise Protocol Light Paper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://whitepaper.sunriseprotocol.com"},"Sunrise Protocol White Paper"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here is an overview of the Sunrise Order Book design")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/sunriseprotocol/wiki/main/assets/Sunrise%20Limit%20Orders%20Detailed.png",alt:"Sunrise Reference Protocols",title:"Sunrise Order Book Design"})))}d.isMDXComponent=!0}}]);