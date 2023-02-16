"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8449],{70172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(8209);const s={},i="Stable Asset",r={unversionedId:"applications/stable-asset",id:"applications/stable-asset",title:"Stable Asset",description:"Project Name:* Stable Asset",source:"@site/docs/applications/stable-asset.md",sourceDirName:"applications",slug:"/applications/stable-asset",permalink:"/Grants-Program/applications/stable-asset",draft:!1,tags:[],version:"current",frontMatter:{}},o={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Stable Asset",id:"stable-asset-1",level:4},{value:"Stable Swap",id:"stable-swap",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"<strong>Overview</strong>",id:"overview-1",level:3},{value:"<strong>Milestone 1 \u2014 Implement Stable Swap Module</strong>",id:"milestone-1--implement-stable-swap-module",level:3},{value:"<strong>Milestone 2 \u2014 Implement Stable Asset Module</strong>",id:"milestone-2--implement-stable-asset-module",level:3},{value:"<strong>Milestone 3 \u2014 Support Yield in Stable Asset</strong>",id:"milestone-3--support-yield-in-stable-asset",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stable-asset"},"Stable Asset"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Project Name:")," Stable Asset"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Team Name:")," NUTS Finance"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payment Address:")," 0x679824d755B054a2a50358008472a6F400740319")),(0,l.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"There are vastly emerging assets in the Polkadot ecosystem, including both Polkadot native assets and assets bridged from other blockchains such as Ethereum and EOS. These assets introduce diversity in architecture and business model, but also fragmentizes the ecosystem since applications need to build separate markets for each of these assets. For example, stables coins can be divided into three categories: fiat-backed, crypto-backed and algorithmic stable coins, and on Ethereum each category has more than ten stable coin protocols. DEX benefits from such asset diversification but other protocols such as lending and options find it difficult to accommodate all these various assets."),(0,l.kt)("p",null,"Asset synthesis is a common approach to unify asset values and hedge asset risks. One approach is to synthesize several mainstream assets or assets belonging to the same niche so that the synthetic assets represents the general trend of the underlying assets. In this approach the synthetic assets acts similiar to an index fund, and how to fairly price and adopt the synthetic assets becomes a new question. The second approach is to synthetize several assets of the same value peg such as BTC, ETH or USD. The synthetic asset has the same value peg, and it could simplifies financial application development since only one synthetic asset needs to be supported for each peg type."),(0,l.kt)("p",null,"Stable Asset is an asset synthetic protocol of the second approach. It is also built with integrated swap and saving functionalities using the basket of assets."),(0,l.kt)("h3",{id:"project-details"},"Project Details"),(0,l.kt)("p",null,"The Stable Asset is an asset synthetic protocol based on Curve's StableSwap algorithm as shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/i6owf1R5cUcc8lQtPTouisnVsj1Dt3xeCyeC_XcSjLPBCk1glLh_ZHx5GUa_f5WhsrkXJZx-PKfy8dxxrl1YjDsy-suFyXeU0vx1i6zp82lK7__NCR-HcE5cxEZ0FmaACfH8Ah7z",alt:"Stable Swap Algorithm"})),(0,l.kt)("p",null,"Widely adopted as swap algorithm among assets with the same peg, it also works perfectly as an asset synthesis algorithm with a basket of assets with the same peg due to the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the prices of all underlying assets in the basket are equal, the number of each underlying assets in the baskets are equal as well. At this moment, the value of the synthetic asset equals the total number of underlying assets in the basket, and the collateral ratio reaches 100%;"),(0,l.kt)("li",{parentName:"ul"},"Whenever the price of any underlying asset differs from each other, the value of StableAsset is smaller than the total number of underlying assets so that the collateral ratio is larger than 100%. Since all assets in the baskets are of the same value peg, their prices should fluctuate about the peg prices with low variation expected so that the overall collateral ratio should be slightly over 100%;"),(0,l.kt)("li",{parentName:"ul"},"Users of the underlying swap can help to maintain the basket balance subject to underlying assets price shift.")),(0,l.kt)("p",null,"The Stable Asset system consists of three major components: Stable Asset, Stable Swap and Stable Savings."),(0,l.kt)("h4",{id:"stable-asset-1"},"Stable Asset"),(0,l.kt)("p",null,"Stable Asset is a synthetic asset with value peg such as BTC or USD. It's backed by a basket of assets with similar peg, and it provides more reliability and better peg compared to individual asset in the basket."),(0,l.kt)("p",null,"The value of Stable Asset is derived from Curve's StableSwap algorithm. When there is shift in price from individual asset in the basket, the value of Stable Asset remains unchanged: The total value of Stable Asset is always the total amount of assets in the basket when their prices are all equal."),(0,l.kt)("h4",{id:"stable-swap"},"Stable Swap"),(0,l.kt)("p",null,"Stable Swap is a DEX built on top of the basket which is backing Swap Asset. It serves several purposes in the systems."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First, it enhances the capital efficiency of the baskets. Instead of staying still, the asset basket is used as DEX;"),(0,l.kt)("li",{parentName:"ul"},"Second, it helps maintain peg of Stable Asset. Since the prices of individual asset might shift over time, DEX users can adjust the basket composition in order to reflect the current underlying asset value;"),(0,l.kt)("li",{parentName:"ul"},"Third, the trading fee, along with the Stable Asset redemption fee, provide native yield to the Stable Asset holders.")),(0,l.kt)("p",null,"Stable Swap component is built with Curve's StableSwap algorithm with enhancement to better support the value of Stable Asset. It's different from the Curve DEX in that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Its value composition is calculated based on the instrinic value of the Stable Assets instead of value of the underlying assets;"),(0,l.kt)("li",{parentName:"ul"},"It has more robust and flexible basket management functionalities which are not required in DEX;"),(0,l.kt)("li",{parentName:"ul"},"It's optimized in asset value computation.")),(0,l.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,l.kt)("p",null,"Equilibrium is planning to deliver a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/curve_amm.md"},"Curve AMM")," which is also based on StableSwap algorithm. Stable Asset, on the other hand, is a synthetic asset protocol built on top of the StableSwap algorithm with the following enhancement worth highlighted:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Liquidity providers received a strongly peg asset instead of LP token so that they don't lose usability of their assets;"),(0,l.kt)("li",{parentName:"ul"},"Users of the DEX helps the synthetic assets to maintain peg in cases of asset price shift;"),(0,l.kt)("li",{parentName:"ul"},"Holders of Stable Asset have native interest coming from the system itself.")),(0,l.kt)("p",null,"In short, Equilibrium is a DEX while uses the bonding curve to compute the balance of the underlying assets, while StableAsset is a synthetic asset which uses the bonding curve to maintain the derived value of the basket."),(0,l.kt)("p",null,"Similar to Equilibrium, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/sunrise-dex.md"},"Sunrise DEX")," is a DEX that focuses on swap functionalities. On the other hand, StableAsset focus on asset synthesis and the Stable Swap module is an internal system that helps keep the basket balanced."),(0,l.kt)("p",null,"Laminar is an over-collateralized synthetic asset protocol that uses various underlying assets to generate a value pegged assets. StableAsset is highly optimized for asset synthesis with a basket of assets with the same peg, and it can achieve a collateral ratio closed to 100%."),(0,l.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,l.kt)("h3",{id:"team-members"},"Team members"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Daniel Tang, Co-founder"),(0,l.kt)("li",{parentName:"ul"},"Terry Lam, Co-founder")),(0,l.kt)("h3",{id:"contact"},"Contact"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Name:"),"\xa0Terry Lam"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Contact Email:"),"\xa0",(0,l.kt)("a",{parentName:"li",href:"mailto:terry@nuts.finance"},"terry@nuts.finance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Website:")," ",(0,l.kt)("a",{parentName:"li",href:"https://acoconut.fi/"},"https://acoconut.fi/"))),(0,l.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Address:"),"\xa0PO Box 309, Ugland House, Grand Cayman, KY1-1104, Cayman Islands"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Registered Legal Entity:"),"\xa0ACoconut")),(0,l.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,l.kt)("p",null,"NUTS Finance is a blockchain development DAO. Our team is composed of experienced developers, financiers and serial entrepreneurs. We build open source, secure and composable technology solutions to empower developers and financial services providers to launch decentralized financial applications on the blockchain."),(0,l.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nutsfinance"},"https://github.com/nutsfinance"))),(0,l.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/joeztang"},"https://www.linkedin.com/in/joeztang")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/terry-lam-80a71927"},"https://www.linkedin.com/in/terry-lam-80a71927"))),(0,l.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,l.kt)("h3",{id:"overview-1"},(0,l.kt)("strong",{parentName:"h3"},"Overview")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:"),"\xa01 month"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"\xa02"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:"),"\xa020,000 DAI")),(0,l.kt)("h3",{id:"milestone-1--implement-stable-swap-module"},(0,l.kt)("strong",{parentName:"h3"},"Milestone 1 \u2014 Implement Stable Swap Module")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:"),"\xa01.5 week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"\xa02"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:"),"\xa07,000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide documentation on components, working algorithms, and deployment processes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: Stable Swap Substrate module"),(0,l.kt)("td",{parentName:"tr",align:null},"This module will implement ",(0,l.kt)("a",{parentName:"td",href:"https://docs.acoconut.fi/asset/acbtc/algorithm"},"core Stable Swap algorithm")," to maintain balance of the basket, e.g.",(0,l.kt)("br",null),"computeD",(0,l.kt)("br",null),"computeDy",(0,l.kt)("br",null),"computeSwapAmount",(0,l.kt)("br",null),"swap.",(0,l.kt)("br",null)," Part of the algorithm is implemented in Solidity in acBTC's ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/nutsfinance/acBTC/blob/master/contracts/acoconut/ACoconutSwap.sol"},"ACoconutSwap")," contract.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Comprehensive tests that cover Stable Swap Substrate module")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide a docker image with a Substrate chain that demonstrates this project")))),(0,l.kt)("h3",{id:"milestone-2--implement-stable-asset-module"},(0,l.kt)("strong",{parentName:"h3"},"Milestone 2 \u2014 Implement Stable Asset Module")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:"),"\xa01.5 week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"\xa02"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:"),"\xa07,000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide documentation on components, working algorithms, and deployment processes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: Stable Asset Substrate module"),(0,l.kt)("td",{parentName:"tr",align:null},"This module will contain core functionalities for Stable Asset, which includes both how Stable Asset is minted/redeemed, e.g.  ",(0,l.kt)("br",null),"getMintAmount",(0,l.kt)("br",null),"mint",(0,l.kt)("br",null),"getRedeemProportionAmount",(0,l.kt)("br",null),"redeemProportion",(0,l.kt)("br",null),"getRedeemSingleAmount",(0,l.kt)("br",null),"redeemSingle",(0,l.kt)("br",null),"getRedeemMultiAmount",(0,l.kt)("br",null),"redeemMulti,",(0,l.kt)("br",null)," and how the basket assets are managed. The first part is partly implemented in Solidity in acBTC's ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/nutsfinance/acBTC/blob/master/contracts/acoconut/ACoconutSwap.sol"},"ACoconutSwap")," contract.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Comprehensive tests that cover the Stable Asset Substrate modules")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide a docker image with a Substrate chain that demonstrates this project")))),(0,l.kt)("h3",{id:"milestone-3--support-yield-in-stable-asset"},(0,l.kt)("strong",{parentName:"h3"},"Milestone 3 \u2014 Support Yield in Stable Asset")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:"),"\xa02 week"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"\xa02"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:"),"\xa06,000 DAI")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"License"),(0,l.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / MIT / Unlicense")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide documentation on how to handle yield in stable asset pools")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Substrate module: Stable Asset Substrate module"),(0,l.kt)("td",{parentName:"tr",align:null},"The Stable Asset module supports yield assets, e.g. LDOT/LKSM whose intrinsic values increase over time. It's able to collect yield generated by the yield asset to generate additional total supply of the stable asset. The Stable Asset module also supports increasing swap available liquidity within the same price range to better support price shift of DOT/KSM derivatives such as LDOT/LCDOT.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Comprehensive tests that cover yield asset and amplification parameter change.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"right"},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Docker"),(0,l.kt)("td",{parentName:"tr",align:null},"Provide a docker image with a Substrate chain that demonstrates this project")))),(0,l.kt)("h2",{id:"future-plans"},"Future Plans"),(0,l.kt)("p",null,"We are going to launch token economics and governance to support the system."),(0,l.kt)("p",null,"We are also going to launch multiple Stable Assets on Polkadot and reach DeFi applications for community adoption."),(0,l.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,l.kt)("p",null,"We've successfully launched our first StableAsset, ",(0,l.kt)("a",{parentName:"p",href:"https://app.acbtc.fi/"},"acBTC"),", on Ethereum. It receives positive feedback from the community and reaches peak total supply of 577 acBTC. The source code for acBTC can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nutsfinance/acBTC"},"here"),"."),(0,l.kt)("p",null,"cBTC is an implementation of the core algorithm and used to prove our concept in Ethereum. The StableAsset will be a full-fledged asset protocol with the following anhancements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stable Asset is a Substrate module in Polkadot ecosystem;"),(0,l.kt)("li",{parentName:"ul"},"Stable Asset is a generic asset module which allows anyone to create synthetic value peg asset with integrated swap and saving functionalities;"),(0,l.kt)("li",{parentName:"ul"},"Stable Asset provides complete and flexible asset management solutions which is currently not available in acBTC.")))}d.isMDXComponent=!0}}]);