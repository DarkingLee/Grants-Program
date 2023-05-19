"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8986],{81891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(95657);const i={},l="Hybrid Block Explorer",o={unversionedId:"applications/hybrid",id:"applications/hybrid",title:"Hybrid Block Explorer",description:"- Team Name: Jonathan Brown",source:"@site/applications/hybrid.md",sourceDirName:"applications",slug:"/applications/hybrid",permalink:"/applications/hybrid",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/hybrid.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Indexer",id:"indexer",level:4},{value:"Dapp",id:"dapp",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Comparison to other Substrate explorers / indexers",id:"comparison-to-other-substrate-explorers--indexers",level:4},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Event Indexing component",id:"milestone-1--event-indexing-component",level:3},{value:"Milestone 2 \u2014 Event Subscribing",id:"milestone-2--event-subscribing",level:3},{value:"Milestone 3 \u2014 Decentralized Component",id:"milestone-3--decentralized-component",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hybrid-block-explorer"},"Hybrid Block Explorer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Jonathan Brown"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x36a7401F269555916a0243E586234D3Bbf5A0c36 (DAI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"This application is in response to two RFPs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-chain Block Explorer ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/multi-chain-block-explorer.md"},"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/multi-chain-block-explorer.md")),(0,r.kt)("li",{parentName:"ul"},"ink! smart contract block explorer. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/ink_smart_contract_block_explorer.md"},"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Under%20Development/ink_smart_contract_block_explorer.md"))),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Hybrid takes a unique, partially decentralized approach that improves two major problems with current open source Substrate block explorers: centralization and huge hosting requirements."),(0,r.kt)("p",null,"A fully centralized block explorer typically populates an SQL database with the entirety of an archive node and stores additional data to index everything. Operating such a database reliably requires huge system resources and expense."),(0,r.kt)("p",null,"When querying block information, or the chain state at any block height, the Hybrid dapp will use the ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/developers/substrate-connect/"},"Substrate Connect")," light client from within the browser. Alternatively, these queries can be made directly to an archive node via WSS."),(0,r.kt)("p",null,"For event search functionality, the Hybrid indexer efficiently indexes events in all blocks so they can be found with a simple WSS query. For example, to find all events connected with a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId"),"."),(0,r.kt)("p",null,"This architecture has three main advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"state queries are fully decentralized - you don't have to trust an RPC provider not to lie to you"),(0,r.kt)("li",{parentName:"ul"},"100% availability - the light client doesn't depend on any centralized service that may not always be available"),(0,r.kt)("li",{parentName:"ul"},"the Hybrid indexer has significantly lower system requirements - it doesn't need to store all chain history")),(0,r.kt)("p",null,"Eventually, Hybrid will use this centralized / decentralized approach as the basis for an ink! contract explorer."),(0,r.kt)("p",null,"Because Substrate is a federated platform, it will be possible browse multiple chains from the Hybrid dapp."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Hybrid will be a Substrate block explorer dapp. By default it will connect to major Substrate blockchains. Additionally it can be configured to connect to any Substrate chain."),(0,r.kt)("p",null,"There are two types of queries that the explorer can perform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decentralized - ideally using the Substrate Connect light client, or alternatively connecting to an archival node via WSS. For example, querying blocks or state storage."),(0,r.kt)("li",{parentName:"ul"},"Centralized - the Hybrid indexer for the chain will be queried via WSS. This is for event searching and watching, such as finding all events across all chains that relate to a specific ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountId"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ethernomad/hybrid-diagram/main/hybrid.png",alt:"Hybrid Architecture"})),(0,r.kt)("h4",{id:"indexer"},"Indexer"),(0,r.kt)("p",null,"The Hybrid indexer will be written in Rust. It can be configured to connect to any Substrate chain."),(0,r.kt)("p",null,"It will read events in all blocks using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/subxt"},"subxt")," and index these events in a Key-value database using the ",(0,r.kt)("a",{parentName:"p",href:"http://sled.rs/"},"sled")," library. This is considerably more efficient than storing the index in an SQL database."),(0,r.kt)("p",null,"subxt currently has an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/subxt/issues/793#issuecomment-1386902010"},"issue")," where it is not possible to query blocks prior to V14 metadata (block #7,229,126 on Polkadot). Resolving this issue is not within the scope of the grant. Once this grant is completed a further grant application will be made that includes resolving this issue."),(0,r.kt)("p",null,"When decoding events, subxt needs to have the correct metadata. The metadata changes whenever a chain performs a runtime upgrade. Hybrid Indexer handles this in a very elegant way. When indexing begins it downloads the metadata for the starting block. When it encounters a decoding error it downloads the metadata for the current block and retries decoding. This means that the indexer does not have to be built with the metadata and block number of every runtime upgrade."),(0,r.kt)("p",null,"To index an event, it needs to be converted into a Rust type that matches the metadata. Sometimes the metadata for an event will change during a runtime upgrade. To handle this the indexer will have Rust types for current and historic versions of all events. When an event fails to be converted into a Rust type the previous type will be tried."),(0,r.kt)("p",null,"All events in all pallets that have identifying parameters will be indexed. For example the Transfer event in the Balances pallet is identifiable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," of both ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"."),(0,r.kt)("p",null,"Other examples of identifying event parameters are ",(0,r.kt)("inlineCode",{parentName:"p"},"assetId")," in the Assets pallet, ",(0,r.kt)("inlineCode",{parentName:"p"},"code_hash")," in the contracts pallet, ",(0,r.kt)("inlineCode",{parentName:"p"},"CollectionId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemId")," in the NFTs pallet, and ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiLocation")," in the XCM pallet."),(0,r.kt)("p",null,"Additionally, all events are indexed by event variant."),(0,r.kt)("p",null,"To download a block, a query first has to be made to determine the hash for a given block number. In order to ensure throughput is as high as possible, multiple queries to the full node will be active at the same time to avoid round-trip delay. Block processing will be in a separate thread. "),(0,r.kt)("p",null,"In the same manner that each Substrate chain is a separate Rust build that uses Substrate crates, each chain will need a separate Hybrid Indexer build that is configured to index the correct pallets."),(0,r.kt)("p",null,"When a chain is going to potentially perform a runtime upgrade, the Hybrid Indexer for the chain will need a new release with any updated events. If an instance of the indexer is not updated before the runtime upgrade occurs, it can be restarted with the new version at the correct block number."),(0,r.kt)("p",null,"WSS queries will be handled via the highly scalable ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/snapview/tokio-tungstenite"},"tokio_tungstenite")," Rust library."),(0,r.kt)("p",null,"In addition to the identifier being searched for, queries will be able to include start block, offset, and limit to control which events are returned."),(0,r.kt)("p",null,"Consumers will be able to subscribe for new events that match a query."),(0,r.kt)("p",null,"The database keys will be constructed in such a way so that events can be found using iterators starting at a specific block number. For example, for for the AccountId keyspace:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AccountId/BlockNumber/EventIndex")),(0,r.kt)("p",null,"Database entries will be key-only. No value will be stored. The blocknumber and event index are all that need to be returned for each event found. This reduces the size of the index database and increases decentralization. The frontend can query the chain in a decentralized manner to retrieve the event."),(0,r.kt)("h4",{id:"dapp"},"Dapp"),(0,r.kt)("p",null,"The Hybrid dapp will be a ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue")," dapp, using the ",(0,r.kt)("a",{parentName:"p",href:"https://vuetifyjs.com"},"Vuetify")," framework for the user interface. ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/"},"pnpm")," and ",(0,r.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," will be used for the build."),(0,r.kt)("p",null,"It will use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api"},"@polkadot/api")," to retrieve data from the chain, either via the Substrate Connect light client, or via an RPC connection to a full archival node. The Hybrid indexer will be queried via WSS."),(0,r.kt)("p",null,"This grant will only include a basic dapp including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"block browsing, showing transactions and events"),(0,r.kt)("li",{parentName:"ul"},"event searching, e.g. searching for all events connected to a specific ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountId"),".")),(0,r.kt)("p",null,"A subsequent grant application will be made to develop a richer dapp experience."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"A major issue holding back the Substrate and Polkadot ecosystem is a high quality block explorer comparable to Etherscan. We need such a block explorer to be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"non-proprietary"),(0,r.kt)("li",{parentName:"ul"},"as decentralized as possible"),(0,r.kt)("li",{parentName:"ul"},"not requiring massive system resources"),(0,r.kt)("li",{parentName:"ul"},"feature-rich")),(0,r.kt)("p",null,"The target audience is blockchain enthusiasts and developers. Eventually end-users should not need to know about block explorers, but this depends on dapps improving their user experience."),(0,r.kt)("p",null,"The indexing component has value far beyond the Hybrid block explorer. Many Substrate applications will find a centralized event indexer extremely useful."),(0,r.kt)("h4",{id:"comparison-to-other-substrate-explorers--indexers"},"Comparison to other Substrate explorers / indexers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dotscan.com/"},"DotScan")," - proprietary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blockchair.com/polkadot"},"Blockchair")," - proprietary"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.subscan.io/"},"Subscan")," - proprietary. Open source version is very basic with fully centralized database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"Polkadot Apps")," - open source and fully decentralized, but non-indexing"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.polkascan.io/"},"Polkascan")," - fully centralized database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ink-explorer.blockcoders.io/"},"Blockcoders ink! Explorer")," - fully centralized database, focused on contracts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/web3labs/epirus-substrate"},"Sirato ink! Explorer")," (previously Epirus) - fully centralized database, focused on contracts"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.subsquid.io/"},"SubSquid")," - fully centralized database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://subquery.network/"},"SubQuery")," - fully centralized database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-archive"},"Substrate Archive")," - fully centralized database, unmaintained")),(0,r.kt)("p",null,"There are no known block explorers in other ecosystems that are indexing, and either fully decentralized or have a hybrid design like this one."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jonathan Brown")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Jonathan Brown"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:jbrown@acuity.social"},"jbrown@acuity.social")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://acuity.social"},"https://acuity.social"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," n/a"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," n/a")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Jonathan Brown has extensive relevant experience to build this software."),(0,r.kt)("p",null,"He built a proof-of-concept centralized indexer for a cross-chain DEX that has a very similar architecture to the Hybrid indexer. It is written in Rust, indexes data from Substrate and Ethereum blockchains, writes it to RocksDB, and enables WSS queries via tokio_tungstenite."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/acuity-social/acuity-atomic-swap-offchain"},"https://github.com/acuity-social/acuity-atomic-swap-offchain")),(0,r.kt)("p",null,"He is also very experienced building dapps with polakdot.js such as the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acuity-social/acuity-dex-app"},"Acuity DEX"),"."),(0,r.kt)("p",null,"Jonathan has also made some videos about Substrate development: ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FMr2bNSmnfY"},"https://www.youtube.com/watch?v=FMr2bNSmnfY")),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethernomad"},"https://github.com/ethernomad")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/acuity-social"},"https://github.com/acuity-social"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"n/a")),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"Development has not started on the project, however the codebase will largely follow that of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/acuity-social/acuity-atomic-swap-offchain"},"Acuity DEX offchain indexer"),"."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 12 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 USD")),(0,r.kt)("h3",{id:"milestone-1--event-indexing-component"},"Milestone 1 \u2014 Event Indexing component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 5,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can index a Polkadot node and query events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Connect to Substrate chains"),(0,r.kt)("td",{parentName:"tr",align:null},"The indexer will be written in Rust and configurable to connect to the Polkadot chain using the subxt library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Block syncing"),(0,r.kt)("td",{parentName:"tr",align:null},"As new blocks are produced, the indexer reads all events. Additionally, it will read events from archived blocks. Indexing will be quite slow because communication with the full node will not be asynchronous. Only the Polkadot chain will be supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Index writing"),(0,r.kt)("td",{parentName:"tr",align:null},"The following identifying parameters in events will be indexed in the database using the sled library: AccountId, AccountIndex, AuctionIndex, BountyIndex, CandidateHash, MessageId, ParaId, PoolId, ProposalHash, ProposalIndex, RefIndex, RegistrarIndex, TipHash. Not all events will be indexed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Status querying"),(0,r.kt)("td",{parentName:"tr",align:null},"It will be possible to query the current status of the indexer via WSS. This will include information about which chain is being indexed, indexing progress and last know block. Queries will be handled via  tokio_tungstenite.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Index querying"),(0,r.kt)("td",{parentName:"tr",align:null},"It will be possible to search via WSS for events with an identifier. Basic event parameters details will be provided for most events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Dapp"),(0,r.kt)("td",{parentName:"tr",align:null},"A rudimentary web interface will be developed to expose this functionality. This will be built using pnpm, vite, vue, vuetify & polkdadot.js .")))),(0,r.kt)("h3",{id:"milestone-2--event-subscribing"},"Milestone 2 \u2014 Event Subscribing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 2,500 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can witness live updates to event search results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Event subscription API"),(0,r.kt)("td",{parentName:"tr",align:null},"The indexer will be updated to service subscription requests via WSS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Live dapp"),(0,r.kt)("td",{parentName:"tr",align:null},"The dapp will be updated so that pages displaying results from event queries will be updated as soon as a new event appears on the chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Full Substrate & Polkadot support"),(0,r.kt)("td",{parentName:"tr",align:null},"All substrate & polkadot pallets & events supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Variant index"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional event index by pallet, variant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Increased decentralization"),(0,r.kt)("td",{parentName:"tr",align:null},"Don't store event in db - load events in front end from chain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Asynchrous block downloading"),(0,r.kt)("td",{parentName:"tr",align:null},"Blocks will be downloaded as fast as possible for improved indexing speed.")))),(0,r.kt)("h3",{id:"milestone-3--decentralized-component"},"Milestone 3 \u2014 Decentralized Component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 2,500 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can build a chain-specific Hybrid Indexer and use the rudimentary explorer dapp.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,r.kt)("td",{parentName:"tr",align:null},"Video"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish a video that explains and demonstrates all aspects of the explorer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Dapp"),(0,r.kt)("td",{parentName:"tr",align:null},"The dapp will be extended to query block and state via either the Substrate Connect light client, or via direct connect to a full node via WSS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Cross-chain UI"),(0,r.kt)("td",{parentName:"tr",align:null},"When a Tx includes a XCM, it will be easy and intuitive to open the relevant block from the other chain(s).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Support event schema changes"),(0,r.kt)("td",{parentName:"tr",align:null},"It will be possible to index old events that have changed their Rust type in a runtime upgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Per-chain build"),(0,r.kt)("td",{parentName:"tr",align:null},"Indexer needs to be built for the chain, e.g. hybrid-indexer-polkadot - custom pallets can be indexed.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"indexing block prior to V14 metadata (block #7,229,126 on Polkadot). See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/subxt/issues/793#issuecomment-1386902010"},"issue"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hosting - The project needs to host indexes for all major Substrate chains. The frontend can be hosted as a traditional website and on IPFS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"improve dapp - explore how the event index can be used to better display the richness of the Polkadot ecosystem.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"support for tokens and nfts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add support for ink! smart contracts with decentralized source code publishing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"maintain Hybrid as the most decentralized Substrate block explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"marketing"))),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Twitter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"What work has been done so far? Development has not started yet.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Are there are any teams who have already contributed (financially) to the project?\nNo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Have you applied for other grants so far?\nNo"))))}h.isMDXComponent=!0}}]);