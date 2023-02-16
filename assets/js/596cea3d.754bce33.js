"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5630],{30947:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(8209);const r={},i="Candle Auctions on Ink!",o={unversionedId:"applications/candle_auction_ink",id:"applications/candle_auction_ink",title:"Candle Auctions on Ink!",description:"- Team Name: @agryaznov",source:"@site/docs/applications/candle_auction_ink.md",sourceDirName:"applications",slug:"/applications/candle_auction_ink",permalink:"/Grants-Program/applications/candle_auction_ink",draft:!1,tags:[],version:"current",frontMatter:{}},m={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Milestone 1 - Basic auction",id:"milestone-1---basic-auction",level:3},{value:"Milestone 2 - Random close",id:"milestone-2---random-close",level:3},{value:"Milestone 3 - Substrate.dev Workshop",id:"milestone-3---substratedev-workshop",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],s={toc:p},d="wrapper";function c(t){let{components:e,...a}=t;return(0,l.kt)(d,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"candle-auctions-on-ink"},"Candle Auctions on Ink!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/agryaznov"},"@agryaznov")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," (DAI) 0x3ef892235Ca80B537f5916E208d8C612EA55aC69"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("p",null,"This application is submitted in response to the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"rfps/candle-auction.md"},"following RFP")),"."),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"An ",(0,l.kt)("inlineCode",{parentName:"strong"},"Ink!")," smart contract that handles a ",(0,l.kt)("a",{parentName:"strong",href:"https://wiki.polkadot.network/docs/learn-auction#mechanics-of-a-candle-auction"},"candle auction")," mechanism.")),(0,l.kt)("li",{parentName:"ul"},"I follow up the Substrate & Polkadot technology from the first ",(0,l.kt)("inlineCode",{parentName:"li"},"sub0")," conference back then in 2019.",(0,l.kt)("br",{parentName:"li"}),"(",(0,l.kt)("em",{parentName:"li"},"See my ",(0,l.kt)("a",{parentName:"em",href:"https://agryaznov.com/reports/2019/05/06/sub-0-highlights/"},"blogpost")," on that topic btw"),")"),(0,l.kt)("li",{parentName:"ul"},"Started getting my hands dirty with it some time ago."),(0,l.kt)("li",{parentName:"ul"},"Just want to implement some useful stuff. ")),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"Project is a ",(0,l.kt)("em",{parentName:"p"},"Work in Progress"),".",(0,l.kt)("br",{parentName:"p"}),"\n","Please have a look at the project's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/agryaznov/candle-auction-ink"},"Github repo")," for details and ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo doc")," documentation.  "),(0,l.kt)("p",null,"Main ",(0,l.kt)("strong",{parentName:"p"},"design considerations")," to date are following:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contract logic is heavily inspired by ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/blob/master/runtime/common/src/auctions.rs"},"parachain auction")," implementation."),(0,l.kt)("li",{parentName:"ul"},"Auction is initialized by setting Opening\\Ending periods in block numbers.   ",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// example of an auction schedule:\n//  [1][2][3][4][5][6][7][8][9][10][11][12][13]\n//     | opening  |        ending         |   \n"))),(0,l.kt)("li",{parentName:"ul"},"The contract accepts payments and records participants` balances."),(0,l.kt)("li",{parentName:"ul"},"Bids storage is a ",(0,l.kt)("em",{parentName:"li"},"HashMap")," which stores only a top bid per user, therefore serving as users` balances ledger.  "),(0,l.kt)("li",{parentName:"ul"},"In order to make ",(0,l.kt)("em",{parentName:"li"},"candle")," logic possible, we also store ",(0,l.kt)("inlineCode",{parentName:"li"},"winning_data")," in featured ",(0,l.kt)("em",{parentName:"li"},"StorageVec")," which holds bids for every ",(0,l.kt)("em",{parentName:"li"},"sample"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Sample")," is a number of consequent blocks identifying a time interval inside Ending Period.",(0,l.kt)("br",{parentName:"li"}),"In ",(0,l.kt)("em",{parentName:"li"},"PoC")," version, sample equals to a single block. This will be enhanced later to be a configurable parameter.  "),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("em",{parentName:"li"},"winning sample"),' (i.e. in which candle "went out") will be randomly selected retrospectively after Ending period ends.  '),(0,l.kt)("li",{parentName:"ul"},"Bids are made by transferring an amount to increment current bidder's balance which effectively equals her top bid at any point of time.  ",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"E.g. Alice making calls:  "),(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"bid()")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"101")," ",(0,l.kt)("inlineCode",{parentName:"li"},"<Balance>")," <- Alice' top bid is 101",(0,l.kt)("br",{parentName:"li"}),"some time later, she calls "),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"bid()")," again, with ",(0,l.kt)("inlineCode",{parentName:"li"},"1000")," ",(0,l.kt)("inlineCode",{parentName:"li"},"<Balance>")," <- Alice' top bid now is 1101 (",(0,l.kt)("em",{parentName:"li"},"not 1000"),")"))))),(0,l.kt)("p",null,"See current project status ",(0,l.kt)("a",{parentName:"p",href:"#development-status-open_book"},"below"),"."),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"(",(0,l.kt)("em",{parentName:"p"},"quote from the ",(0,l.kt)("a",{parentName:"em",href:"rfps/candle-auction.md"},"RFP")),"):"),(0,l.kt)("p",{parentName:"blockquote"},"Auctions will come in handy for various types of applications, but especially for NFTs."),(0,l.kt)("p",{parentName:"blockquote"},"The idea behind this proposal is to create an ",(0,l.kt)("inlineCode",{parentName:"p"},"ink!")," smart contract that is able to run a candle auction mechanism. This will be known to Polkadot followers from the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/en/learn-auction"},"parachain auction mechanism"),". One of the advantages of the candle mechanism is that it incentivises bidders to submit their true bids early, thus leading to more optimal market."),(0,l.kt)("p",{parentName:"blockquote"},"Rather than restricting the use of candle auctions to parachain slot allocation only, users should be able to utilise it for other needs, e.g. auctioning off their NFTs.")),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Alexander Gryaznov (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/agryaznov"},"@agryaznov"),")")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"hi")," \ud83d\udc36 ",(0,l.kt)("inlineCode",{parentName:"li"},"agryaznov.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://agryaznov.com"},"agryaznov.com"))),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"I do programming for the most part of my life.",(0,l.kt)("br",{parentName:"p"}),"\n","My professional career started at Intel in 2007 with implementing icc compiler benchmarking tools.\nA lot of projects have been done since then, including an\n",(0,l.kt)("a",{parentName:"p",href:"https://innopolis.university/ects/decentralized_applications_on_ethereum_platform/"},"academic course")," on Decentralized Applications on Ethereum platform at Innopolis University in 2017."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/agryaznov"},"https://github.com/agryaznov"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/agryaznovcom"},"https://www.linkedin.com/in/agryaznovcom"))),(0,l.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,l.kt)("p",null,"\u2714\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"PoC is implemented")," (~75% completeness of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/rfps/candle-auction.md#milestone-1---basic-auction"},"Milestone-1"),").",(0,l.kt)("br",{parentName:"p"}),"\n","Please see the project's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/agryaznov/candle-auction-ink"},"Github repo")," \ud83d\udc48",(0,l.kt)("br",{parentName:"p"}),"\n","which contains both sources and documentation."),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"(This is taken as_is from the ",(0,l.kt)("a",{parentName:"em",href:"rfps/candle-auction.md"},"RFP"),", as I agree with it)"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1")),(0,l.kt)("h3",{id:"milestone-1---basic-auction"},"Milestone 1 - Basic auction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 7500 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline documentation (builds to ",(0,l.kt)("em",{parentName:"td"},"cargo doc"),") + basic ",(0,l.kt)("em",{parentName:"td"},"How-Tos")," explaining installation, deployment and usage of the contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions are covered by unit tests, which serve both sustainability of code and providing another way of explaining its logic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"N/A")," for smart contracts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1. \u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Start & close period"),(0,l.kt)("td",{parentName:"tr",align:null},"Create an auction mechanism that has a fixed start and end period")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2. \u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Accept bids"),(0,l.kt)("td",{parentName:"tr",align:null},"Any user can call the contract with a bid that is higher than the last highest bid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3. \u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Find winner"),(0,l.kt)("td",{parentName:"tr",align:null},"Determine a winner at the close period")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Embed reward logic"),(0,l.kt)("td",{parentName:"tr",align:null},"The contract creator should set logic that will be executable by the winner. Such call logic should accept optional parameters. This logic should be set at the start and be immutable henceforth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"Payout"),(0,l.kt)("td",{parentName:"tr",align:null},"A winner should be able to make a call, with an arbitrary number of parameters, to the reward/payout method. The contract would then pass the arguments to whichever logic is encoded as the reward (and e.g. send tokens)")))),(0,l.kt)("h3",{id:"milestone-2---random-close"},"Milestone 2 - Random close"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 2500 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0b."),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline documentation (builds to ",(0,l.kt)("em",{parentName:"td"},"cargo doc"),") + basic ",(0,l.kt)("em",{parentName:"td"},"How-Tos")," explaining installation, deployment and usage of the contract")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0c."),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Core functions are covered by unit tests, which serve both sustainability of code and providing another way of explaining its logic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0d."),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"N/A")," for smart contracts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0e."),(0,l.kt)("td",{parentName:"tr",align:null},"Article"),(0,l.kt)("td",{parentName:"tr",align:null},"A blogpost and\\or a workshop showing the smart contract features will be published")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Retroactive close"),(0,l.kt)("td",{parentName:"tr",align:null},"At the close block, rather than announcing the highest bidder at that point, the contract should randomly determine a block in the past (between start & end blocks) and calculate the highest bidder at that block to be the winner")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Randomness source (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Randomness source should be configurable (e.g. from hash of the block in the relay chain, from a randomness beacon parachain etc.)")))),(0,l.kt)("h3",{id:"milestone-3---substratedev-workshop"},"Milestone 3 - Substrate.dev Workshop"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 3000 DAI")),(0,l.kt)("p",null,"A comprehensive tutorial\\workshop to be added to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/"},"Substrate Developer Hub"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0a."),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as ",(0,l.kt)("em",{parentName:"td"},"substrate-docs")," or Apache 2.0. The delivery will be either merged into ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/substrate-developer-hub/substrate-docs"},(0,l.kt)("em",{parentName:"a"},"substrate-docs"))," and inherit license from it, or published under ",(0,l.kt)("em",{parentName:"td"},"Apache 2.0")," as part of a separate repo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 Candle Auction Basics"),(0,l.kt)("td",{parentName:"tr",align:null},"Learn the basic mechanincs of a candle auction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 ",(0,l.kt)("em",{parentName:"td"},"ERC721")," & ",(0,l.kt)("em",{parentName:"td"},"DNS")),(0,l.kt)("td",{parentName:"tr",align:null},"Learn ",(0,l.kt)("em",{parentName:"td"},"ERC721")," and ",(0,l.kt)("em",{parentName:"td"},"DNS")," contracts implementations in Ink!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 Cross-Contract Calls"),(0,l.kt)("td",{parentName:"tr",align:null},"Learn cross-contract communication patterns in Ink!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 Auction Set Up"),(0,l.kt)("td",{parentName:"tr",align:null},"Learn to deploy and to instantiate these contracts, to mint tokens, to register domain and to put them dowm to an auction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 Auction Run"),(0,l.kt)("td",{parentName:"tr",align:null},"Learn to place bids to an auction, to check its subject and status, to detect winner and to get payouts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 Contract Verification"),(0,l.kt)("td",{parentName:"tr",align:null},"Learn how to verify smart contract code on Polkadot parachain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 Add New Reward Contract"),(0,l.kt)("td",{parentName:"tr",align:null},"Learn to add a new type of auction subject and to plug-in it into our conract logic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8."),(0,l.kt)("td",{parentName:"tr",align:null},"\xa7 Change Randomness Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Learn to set another on-chain randomness source for our candle")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I would be happy to gather feedback from folks using the contract and to enhance it to better fit the real needs.  "),(0,l.kt)("li",{parentName:"ul"},"Specific UI template for dealing with this contract could be implemented.")),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," "),(0,l.kt)("p",null,"I came across its repository while surfing Parity's and W3F resources on Github."))}c.isMDXComponent=!0}}]);