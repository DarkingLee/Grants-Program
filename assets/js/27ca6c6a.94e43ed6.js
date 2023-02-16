"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[485],{91453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=a(87462),n=(a(67294),a(3905));a(8209);const i={},r="Saito Gaming Protocol and Library",l={unversionedId:"applications/saito-game-protocol-and-engine",id:"applications/saito-game-protocol-and-engine",title:"Saito Gaming Protocol and Library",description:"Proposer:* @trevelyan (David Lancashire)",source:"@site/docs/applications/saito-game-protocol-and-engine.md",sourceDirName:"applications",slug:"/applications/saito-game-protocol-and-engine",permalink:"/Grants-Program/applications/saito-game-protocol-and-engine",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview: Introduction to Saito",id:"project-overview-introduction-to-saito",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Website",id:"team-website",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team experience",id:"team-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Saito",id:"saito",level:4},{value:"Non-Saito Crypto",id:"non-saito-crypto",level:4},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Saito Polkadot API Module",id:"milestone-1--saito-polkadot-api-module",level:3},{value:"Milestone 2 \u2014 Asset Transfers in Gaming Protocol",id:"milestone-2--asset-transfers-in-gaming-protocol",level:3},{value:"Community engagement",id:"community-engagement",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2},{value:"Twilight Struggle",id:"twilight-struggle",level:4},{value:"Poker",id:"poker",level:4},{value:"Red Imperium",id:"red-imperium",level:4},{value:"Wordblocks",id:"wordblocks",level:4},{value:"Notes",id:"notes",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"saito-gaming-protocol-and-library"},"Saito Gaming Protocol and Library"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proposer:")," @trevelyan (David Lancashire)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," bc1qvx6wzyxsjw5yza5f7qj4mprzj4hl49q9js0d46")),(0,n.kt)("h2",{id:"project-overview-introduction-to-saito"},"Project Overview: Introduction to Saito"),(0,n.kt)("p",null,"Saito is a data-network that allows developers to write web3 applications that run inside browsers. Our network is similar to a blockchain in the sense that it does not need an owner to pay for its servers. Where Saito differs from traditional blockchains is that it does not have miners or stakers or validators and does not have a permanent ledger."),(0,n.kt)("p",null,"This can make Saito confusing on first encounter. The network has some of the properties of a layer-one blockchain, but it is also a transient broadcast layer. Our community is building chat, email, gaming and other web3 applications, but these applications need to integrate with other blockchains when they want to add asset-transfer and smart contract functionality. When it comes to the rest of the blockchain space, Saito's role in the ecosystem is basically bringing the throughput and cryptographic tools to shoulder the burden of handling off-chain data flows, and generating fee-bearing transactions for other blockchains (or parachains) where permanent on-chain transactions are required."),(0,n.kt)("p",null,"Because of this, the most similar thing to Saito in the cryptocurrency space is metamask. Both allow developers to write applications that run in web-browsers and use blockchains. The difference is that metamask relies on Infura to provide a network while Saito provides one that pays for itself. The Saito approach is superior because it is an open network layer that cannot be privatized. And it elegantly pays for user-facing network infrastructure without the need for IFPs or corporate subsidies. Saito is also blockchain agnostic in the sense it can be deployed as a UI-layer without the need for the underlying blockchain if network operators are willing to accept zero-fee transactions."),(0,n.kt)("p",null,"We believe that as Saito continues to grow developers will look at applications like the ",(0,n.kt)("a",{parentName:"p",href:"https://saito.io/arcade"},"Saito Arcade")," and embrace this method of developing web3 applications. To make the applications our community is building truly web, we need our platform to be able to interact with Polkadot and its parachains so that Saito applications can send-and-receive NFTs and other financial assets. To use the metamask analogy above, this is essentially the step where we add ETH support and our community starts to incorporate money-functions directly into their games and other applications."),(0,n.kt)("p",null,"This proposal outlines how we would like to accomplish this. Our goal is to increase the power of Saito as a metamask-layer by enabling our applications to interact with the non-transient ledgers provided by Polkadot and its parachains. To make sure this delivers value to the Polkadot ecosystem, we propose to start by integrating the gaming applications that are driving double-digit monthly growth on our platform. We believe this will be a win-win move. Polkadot will gain gaming traffic and transaction volume, while Saito users can start deploying parachains and transferring financial assets across them directly in their browsers."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"To accomplish this in a manner that will attract developers, we propose integrating Polkadot and Polkadot parachains with the web3 games that are driving growth in our community. We believe this will help both projects. About eighty percent of Saito transaction volume is coming from online gaming, so this is a practical area where we can deliver transaction growth and developer attention to Polkadot along with a new class of gaming applications. Having Polkadot integration and the ability to interact with NFTs and parachains meanwhile makes Saito more compelling as a user-facing network layer."),(0,n.kt)("p",null,'To understand how Polkadot can benefit from integration with an open web3 gaming library, let us briefly explain what it is that we are building. Historically, most "blockchain games" in the industry use blockchains to deposit and withdraw money, hold random number lotteries, or to manage NFTs that represent in-game assets (weapons, land, etc.). These use-cases require blockchains to serve as a holder of financial assets. The standards for how these assets are created and managed on-chain are best defined by POLKADOT developers and is not the sort of standard we are discussing. Substrate can simplify the process of deploying these tremendously.'),(0,n.kt)("p",null,'The standard we are building concerns how to define the language of game moves in sequence. To make this clearer, understand that in the games that developers are building on Saito, players broadcast moves to each other and execute them in parallel from a stack of gaming instructions that are kept synchronized via the metamask-like network. This approach eliminates the need for middlemen like Steam to connect users or control gameplay, while it enables cryptographic techniques like "mental poker"',(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," to be used to ensure provably-fair deck shuffling, dice rolls and other core game functions."),(0,n.kt)("p",null,"We already have over a dozen sophisticated games that people can play that adopt this approach: sharing moves between players and executing them in parallel in the browser of each player. These games use an open protocol we have been developing that define how game moves should be broadcast and executed in browsers. This protocol (instantiated in a supporting library) removes the need for developers to implement common techniques like deck-shuffling, random number generation, card deals and otherwise complicated tasks like simultaneous moves. It is important to note that this protocol and library are chain-agnostic: while the games our community are building are deployed atop Saito, it is possible to deploy them on other blockchains or even non-blockchain peer-to-peer networks."),(0,n.kt)("p",null,"Integrating NFT and asset-transfer functionality means expanding this protocol so that in additional to handling shuffling, turn-management and those sorts of common cryptographic operations, it also provides ways for developers to transfer in-game assets on Polkadot simply by broadcasting a game move. In the next section we provide more details about how our web3 protocol standard and reference implementation works in order to make it clear why this is necessary and the benefits it will bring to the web3 ecosystem. Section IV then outlines how we will deliver it in three stages spread across two months. Section V closes this proposal with examples of real applications that already exist - making it clear we are talking about solving practical problems that deliver applications that will be immediately able to interact with Polkadot and benefit from parachain deployment."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("p",null,"The overarching goal of having a protocol and reference game library is simplifying Web3 game development by creating a standardized method for describing common game moves that can be executed in parallel on different user computers rather than in smart contracts managed by a central blockchain. The reference library is also needed so developers can build games with it directly or consult it as a reference tool when tackling similar problems or porting games between networks by developing competing reference implementations."),(0,n.kt)("p",null,"To make it clear what we are talking about and why it is important, let's start by describing a practical problem common to many games - the need to shuffle a deck of cards and deal them out to many players. In a typical game, this is handled by custom code or the use of closed game-engines that don't play nicely with the open web3 ecosystem."),(0,n.kt)("p",null,"In the stack-powered development method, a developer that wishes to have cards dealt to a player needs only add a single instruction to the game stack. This can be done by broadcasting the move to all other players in the game who add it to their respective stacks on receipt of the move. As an example, the following command instructs the game engine to DEAL a total of 5 cards from card deck 1 to player 2:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DEAL 1 2 5")),(0,n.kt)("p",null,"When this command is executed in parallel on all player computers, the underlying game engine takes over, adding sub-moves to the stack that prompt players to send player 2 the necessary keys they need to decrypt the 5 cards they are pulling from the deck. Control then passes to the next instruction on the stack, which may prompt player 2 to select one of their newly issued cards, or perhaps discard two cards and then re-shuffle the deck. Each game is obviously unique: the point of the protocol (and supporting library) is to eliminate the need for developers to touch the underlying cryptography and let them focus on game-specific UI and logic."),(0,n.kt)("p",null,"The starting point for a robust gaming protocol / engine is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"shuffling cards (game assets)"),(0,n.kt)("li",{parentName:"ul"},"dealing cards to players (private)"),(0,n.kt)("li",{parentName:"ul"},"dealing cards to piles (public)"),(0,n.kt)("li",{parentName:"ul"},"moving into a player turn"),(0,n.kt)("li",{parentName:"ul"},"rolling-dice (secure random number)"),(0,n.kt)("li",{parentName:"ul"},"simultaneous card-selection"),(0,n.kt)("li",{parentName:"ul"},"simultaneous game moves"),(0,n.kt)("li",{parentName:"ul"},"player alerts and log management")),(0,n.kt)("p",null,"While the protocol can ultimately be ported to any language, our starting place is javascript (NodeJS) as browsers provide the UI for most web3 blockchain games, and this is what our developers are building and where they need integration with permanent ledgers like Polkadot and its parachains. "),(0,n.kt)("p",null,'Our work on developing this library and adding features is ongoing: at present our standard handles somewhere over half of these requirements. Features tend to get added as games are added which need them, and documentation is developed after the fact. To simplify Polkadot integration, we will prioritize implementing the remainder in a standardized javascript (NodeJS) implementation that is well-documented, has an intuitive API with non-ad-hoc naming conventions ("DEAL", "SHUFFLE", "ROLL") that is available under a flexible open-source license. This will enable games and web3 development to occur across multiple blockchains and networks. \\'),(0,n.kt)("p",null,"Our proposal begins with the next step: extending this open standard to add commands that let developers programmatically handle blockchain / asset / NFT transfers within games as well as the in-game moves it already supports. Just as the gaming protocol / library permits developers to trigger a deal or shuffle a deck, so must it support users making deposits, confirming receipt of assets and/or NFT tokens, transferring them to other players, or otherwise engaging with assets on external ledgers. This functionality is needed both within gameplay as well for industry-focused cases such as letting users prove that they have purchased a game or handling real-time payments to game publishers on game creation."),(0,n.kt)("p",null,"The protocol needs to support the following use cases that should be provided by permanent ledgers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"checking account balances"),(0,n.kt)("li",{parentName:"ul"},"sending tokens to accounts"),(0,n.kt)("li",{parentName:"ul"},"confirming receipt of tokens")),(0,n.kt)("p",null,"Adding asset-transfer commands into the game engine will create a powerful backend that can be deployed across different parachains (no user or developer lock-in) and permit integration between asset-transfer networks and the high-throughput web 3.0 data services supported by the metamask-layer. The game library meanwhile abstracts away everything that is difficult about on-chain game creation."),(0,n.kt)("p",null,"Adding these features will also web3 games to support use cases like: ensuring users pay the game publisher prior to being able to play the game, in-game transfers of funds or NFT assets between players depending on what happens in gameplay. There are many use-cases where a large gaming community or tournament may even want to create a dedicated parachain to manage ranked-games, leaderboards, buy-ins and payouts and more."),(0,n.kt)("p",null,"Our goal building this is encouraging third-party developers to roll out more games using open standards, raising awareness of the power of blockchains for on-chain gaming via the Web3 Foundation and taking part in the shift that is coming from centralized to decentralized gaming networks. Funding is sought to justify prioritizing resources on Polkadot integration and make sure we can devote the needed time to apply polish to the documentation and other developer-focused assets so the library/engine can be of use to external developers."),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"Saito is deeply committed to web3 and our stack is focussed firmly on helping make it simple for developers to bring truly decentralized applications, on line automomy and new business models to users. Adding the ability to interface with parachains, as a bridge to the Polkadot ecosystem opens up a world of financial and other tools to those developers, and provides developers working in or interested in the Polkadot ecosystem a fast simple way to get started.  Gaming is the perfect proving ground for this."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"David Lancashire"),(0,n.kt)("li",{parentName:"ul"},"Richard Parris"),(0,n.kt)("li",{parentName:"ul"},"Clayton Rabenda\t")),(0,n.kt)("h3",{id:"team-website"},"Team Website"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://saito.io/"},"https://saito.io/"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("p",null,"Proclus Technologies Limited.\n1101 299QRC, 299 Queens Road Central, Hong Kong."),(0,n.kt)("h3",{id:"team-experience"},"Team experience"),(0,n.kt)("p",null,"Saito's founders have both worked leading development and broader IT teams in China for over 10 years. The team has worked on projects in a variety of fields, and are all early 'cyrpto adopters'."),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("h4",{id:"saito"},"Saito"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/saito-lite"},"https://github.com/saito-lite"))),(0,n.kt)("h4",{id:"non-saito-crypto"},"Non-Saito Crypto"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/clayrab/snekCoin"},"https://github.com/clayrab/snekCoin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/trevelyan/lighthouse"},"https://github.com/trevelyan/lighthouse"))),(0,n.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/david-lancashire/"},"https://www.linkedin.com/in/david-lancashire/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/richard-parris-02b5a39/"},"https://www.linkedin.com/in/richard-parris-02b5a39/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/clayton-rabenda-6ab9b39/"},"https://www.linkedin.com/in/clayton-rabenda-6ab9b39/"))),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 8 Weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  1.5 FTE "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 1.65 BTC")),(0,n.kt)("h3",{id:"milestone-1--saito-polkadot-api-module"},"Milestone 1 \u2014 Saito Polkadot API Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 Weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 0.9 BTC")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Saito Module"),(0,n.kt)("td",{parentName:"tr",align:null},'Polkadot module that allows Saito applications to connect to a Polkadot API access point to send / receive network Polkadot data. This module would be the equivalent of "metamask" application for all of the existing games and applications already running on Saito. It would run fully in-browser.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Inline documentation and published how to guide.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Environment Build"),(0,n.kt)("td",{parentName:"tr",align:null},"Build and test environment containing Polkadot node and Saito Stack. ",(0,n.kt)("br",null),"Test interoperability and benchmark performance. ",(0,n.kt)("br",null),"Document configuration, deployment and management. ",(0,n.kt)("br",null)," Deploy against public test net.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"Tutorial"),(0,n.kt)("td",{parentName:"tr",align:null},"Developer tutorial showing how applications can integrate with Polkadot module on a base-level (i.e. without the need for use of the gaming API layer), making Polkadot a first-class citizen for all Saito Web3 applications and allowing all of them to send and receive payments in DOT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Details:")),(0,n.kt)("p",null,"The point of building this module first is to have a set of ",(0,n.kt)("em",{parentName:"p"},"local")," API functions that our own communications stack can use when the open game library needs to make API queries to the external Polkadot chain. Relying on local interface simplifies the coding of the game library so that networking and chain-specific connection information can be abstracted away. This is critical for keeping the game library cross-chain portable, ensuring that it will run on any blockchain or parachain, and removing the need for the game library itself to handle networking code."),(0,n.kt)("p",null,"A side-benefit of building this module first is that Polkadot and parachain tokens become A-class citizens on the Saito network. Getting this module written and documented first allows all games and other (non-stack) developer applications to send and receive Polkadot. Polkadot or parachain developers who want to port or hack any existing Saito applications will be able to do so while having the application handle their own native token. "),(0,n.kt)("p",null,"A plug-and-play Saito module will also simplify building UI components and web applications for Polkadot that monitor or interact with the chain through an API-access point. Getting this functionality out first allows us to reach out to the Polkadot community with an immediately-useful solution for certain classes of Web3 application-development work. \\"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Timeline Notes:"),"\nThree weeks should be adequate for building and documenting this module, as well as putting together a tutorial demonstrating how independent Web3 modules can make API requests and check account balances. Part of this work will obviously require setting up and running API infrastructure so we can make the process as painless as possible for developers, etc."),(0,n.kt)("h3",{id:"milestone-2--asset-transfers-in-gaming-protocol"},"Milestone 2 \u2014 Asset Transfers in Gaming Protocol"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 Weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 0.75 BTC")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Protocol and Library Upgrade"),(0,n.kt)("td",{parentName:"tr",align:null},"Token-specific transfer instructions added to game engine / protocol.",(0,n.kt)("br",null)," Code addig Stack-based instructions for applications adding the following common game mechanics:  ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"player Y deposits assets"),(0,n.kt)("li",null,"player Y sends assets to player X"),(0,n.kt)("li",null,"player Y requests balance")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"Inline and published documentation of library extensions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3."),(0,n.kt)("td",{parentName:"tr",align:null},"Game"),(0,n.kt)("td",{parentName:"tr",align:null},"Provision of at least a single open-sourced game demonstrating the features.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Details:")),(0,n.kt)("p",null,"Combine the previous API work with the game protocol work to add financial asset transfers and payment functionality into the underlying protocol and game engine. This will be entirely new functionality. It will allow developers to do things like check that payments have been made prior to gameplay or send and receive assets during play."),(0,n.kt)("p",null,'We suggest the creation of a "play-for-charity" game to demonstrate the required financial use-cases (players deposit tokens, players send those tokens to each other and in case of loss send the funds to a charity) without the need to worry about legal issues surrounding gaming. Another idea might be a game that requires players to submit proof-of-payment to be permitted to play the game. '),(0,n.kt)("p",null,"Regardless, this work is done last as it builds on the experience of both the initial Polkadot module, as well as the work expanding and systematizing the protocol. Since in some ways it is the most interesting part of the project, we also want to leave it for last so that the community will be aware of the work being done and ideally come in with suggestions on which games to port and which particular features to focus on first."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Timeline Notes:")),(0,n.kt)("p",null,"We expect it to take about four weeks to do this work. Two weeks are probably sufficient for the initial protocol and game library work. We will need to add another two weeks to get a workable / fun game built that demonstrates the functionality and has enough polish and design work done that it feels like more than a playable tutorial. We hope to get a sense of the best sort of game to build by talking with other gaming projects in the Polkadot ecosystem to get a sense of what they are doing with NFTs on their parachains."),(0,n.kt)("h3",{id:"community-engagement"},"Community engagement"),(0,n.kt)("p",null,"The Saito team will publish regular updates on developments and milestone completions. This project represents a great developer outreach opportunity for Saito, and to bring much anticipated features from the Polkadot ecosystem. There will be many opportunities to promote this to our growing community and specifically to developers working on Saito, and those in the Polkadot space."),(0,n.kt)("p",null,"More importantly Saito will seek out a partner project working on NFTs or other tokens on a parachain to colaborate on building a game in which these tokens are issued as prizes, trophies, in game assets, achievement badges or similar. This would cap off the work done as part of this grant, and set the stage for broader colaboration."),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("p",null,"Our hope is that this work continues well into the future, and that the Polkadot community embraces not only the sort of open source games that our community is producing, but the more flexible style of application design that comes from in-browser stack-based program execution instead of offloading everything into smart contracts."),(0,n.kt)("p",null,"Should it become apparent that a game protocol compliant substrate module could be valuable to Polkadot and the community, we would investigate building such. Either under a separate grant or in colaboration with the Polkadot community."),(0,n.kt)("p",null,"Our criteria for success is our ability to build community around feature-rich games. Our hope is that integration with Polkadot and other financial parachains brings value to Polkadot users, programmers, and our own gamers. We are happy to work with other chains and communities to bring their valuable features into our gaming environment. The shared goal is an open ecosystem that is more attractive than closed source competitors like Steam and the Apple Store."),(0,n.kt)("p",null,"Our criteria for failure would be spending a significant amount of our time building foundational tools that do not drive game development and community growth. We think this unlikely, as our own community is growing rather quickly and there is a clear need for Web3 games to integrate with asset-class blockchains and parachains."),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,"The Saito Project has seed support."),(0,n.kt)("p",null,"The images below are from playable games that are currently running on the Saito network (",(0,n.kt)("a",{parentName:"p",href:"https://saito.io/arcade"},"https://saito.io/arcade"),"). In addition to building their own games, developers are able to start building payment functionality on top of these and other games immediately upon this project being completed."),(0,n.kt)("p",null,"Games generally available for play around the network include Chess, Wordblocks, Twilight Struggle, Red Imperium, Poker, President, Solitrio, Scotland Yard, Thirteen Days, Pandemic, and several others. Most games support anywhere from 2 to 8 players and take anywhere from 15 minutes to 6 hours of time to play through completion."),(0,n.kt)("p",null,"###Game Images"),(0,n.kt)("h4",{id:"twilight-struggle"},"Twilight Struggle"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://org.saito.tech/wp-content/uploads/2020/10/twilight.png",alt:"Twilight Struggle"})),(0,n.kt)("h4",{id:"poker"},"Poker"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://org.saito.tech/wp-content/uploads/2020/10/poker.png",alt:"Poker"})),(0,n.kt)("h4",{id:"red-imperium"},"Red Imperium"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://org.saito.tech/wp-content/uploads/2020/10/imperium.png",alt:"Red Imperium"})),(0,n.kt)("h4",{id:"wordblocks"},"Wordblocks"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://org.saito.tech/wp-content/uploads/2020/10/wordblocks.png",alt:"Wordblocks"})),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"}," ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mental_poker"},"https://en.wikipedia.org/wiki/Mental_poker"),(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"}," ",(0,n.kt)("a",{parentName:"li",href:"https://apps.dtic.mil/dtic/tr/fulltext/u2/a066331.pdf"},"https://apps.dtic.mil/dtic/tr/fulltext/u2/a066331.pdf"),(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);