"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1976],{48936:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},r="Parallel Finance",o={unversionedId:"applications/Parallel",id:"applications/Parallel",title:"Parallel Finance",description:"- Project Name: Parallel Finance",source:"@site/applications/Parallel.md",sourceDirName:"applications",slug:"/applications/Parallel",permalink:"/applications/Parallel",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Parallel.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"MVP links",id:"mvp-links",level:5},{value:"Mockups and UI components",id:"mockups-and-ui-components",level:4},{value:"An overview of the technology stack to be used",id:"an-overview-of-the-technology-stack-to-be-used",level:5},{value:"Lending and Borrowing Workflow",id:"lending-and-borrowing-workflow",level:5},{value:"Interest Rate Model",id:"interest-rate-model",level:5},{value:"Auto Liquidation Algorithm",id:"auto-liquidation-algorithm",level:5},{value:"Staking Workflow",id:"staking-workflow",level:5},{value:"Staking Rate Model",id:"staking-rate-model",level:5},{value:"What your project is <em>not</em> or will <em>not</em> provide or implement",id:"what-your-project-is-not-or-will-not-provide-or-implement",level:5},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Cross-chain support for DOT and KSM",id:"milestone-1--implement-cross-chain-support-for-dot-and-ksm",level:3},{value:"Milestone 2 \u2014 Enable Staking for DOT and KSM",id:"milestone-2--enable-staking-for-dot-and-ksm",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parallel-finance"},"Parallel Finance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Project Name:")," Parallel Finance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Parallel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x17816E9A858b161c3E37016D139cf618056CaCD4")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,'Parallel finance is a decentralized lending/borrowing and staking protocol built on top of the Polkadot ecosystem. Our platform will allow users to earn "double interests" from staking and lending their tokens simultaneously (hence the name "parallel" finance).'),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Our platform offers a few key features and benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lending and borrowing"),": users can lend and borrow assets based on interest rates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Staking"),": users can participate in Polkadot\u2019s network validation and earn rewards."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Earning double interests"),": users can choose to stake and lend out their tokens simultaneously based on our new approach."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Powered by Substrate"),": our platform benefits from the speed, resiliency and convenient upgradability of Polkadot.")),(0,i.kt)("p",null,"Our project utilizes substrate framework and is built on top of polkadot parachain ecosystem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We built the core interests model and functionalities on substrate runtime"),(0,i.kt)("li",{parentName:"ul"},"We enabled off-chain worker to query the current price feed of DOT and other tokens"),(0,i.kt)("li",{parentName:"ul"},"We will build cross-chain interoperability using XCMP protocol in the near future")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why are we building Parallel Finance?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We decided to pick this idea because of the rising demand for decentralized lending protocols on Polkadot and Kusama, as well as the lack of token liquidity that comes with staking on the mainnet. We estimate that 50% of all existing DOT and KSM tokens will be staked for blockchain validation with an estimated staking APY of 10-20%. However, the DOT and KSM tokens will lose their liquidity once they are staked to validate the network. Institutions and large token holders have high incentives to use our platform since it will allow them to not only participate in staking, but also generate additional profits through lending, and allow them to use their DOTs and KSMs as payment, or trading assets.")),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("h5",{id:"mvp-links"},"MVP links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Testnet demo: ",(0,i.kt)("a",{parentName:"li",href:"https://parallel.fi/#/"},"https://parallel.fi/#/")),(0,i.kt)("li",{parentName:"ul"},"Video demo: ",(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/lgQX9rELpL8"},"https://youtu.be/lgQX9rELpL8"))),(0,i.kt)("h4",{id:"mockups-and-ui-components"},"Mockups and UI components"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40745291/111884834-5f719d80-8981-11eb-84cf-df6494f05650.png",alt:"image"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40745291/111884839-68626f00-8981-11eb-94ae-750dfab5e951.png",alt:"image"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40745291/111884847-6d272300-8981-11eb-9bac-81514f1f8358.png",alt:"image"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40745291/111884852-70baaa00-8981-11eb-8b42-ba6aa5045afb.png",alt:"image"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40745291/111884855-76b08b00-8981-11eb-9dc4-0a2e49845aa7.png",alt:"image"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40745291/111884857-7b753f00-8981-11eb-9197-73cd29ddb4b8.png",alt:"image"})),(0,i.kt)("h5",{id:"an-overview-of-the-technology-stack-to-be-used"},"An overview of the technology stack to be used"),(0,i.kt)("p",null,"The lending protocol was inspired by compound protocol and our blockchain solution is developed on substrate 3.0, which allows for efficiency and scalability."),(0,i.kt)("h5",{id:"lending-and-borrowing-workflow"},"Lending and Borrowing Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56744348/111891853-0aa34680-89c4-11eb-8657-7396d1ab154d.png",alt:"image"})),(0,i.kt)("h5",{id:"interest-rate-model"},"Interest Rate Model"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56744348/111891848-070fbf80-89c4-11eb-8d15-c3ee5fcb7cf3.png",alt:"image"})),(0,i.kt)("h5",{id:"auto-liquidation-algorithm"},"Auto Liquidation Algorithm"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56744348/111891839-f19a9580-89c3-11eb-9c08-2094e1aa5972.png",alt:"image"})),(0,i.kt)("h5",{id:"staking-workflow"},"Staking Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56744348/111891844-ff501b00-89c3-11eb-829d-130d6bb48e67.png",alt:"image"})),(0,i.kt)("h5",{id:"staking-rate-model"},"Staking Rate Model"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/56744348/111891842-f8c1a380-89c3-11eb-9210-1bf0bbd9ed83.png",alt:"image"})),(0,i.kt)("h5",{id:"what-your-project-is-not-or-will-not-provide-or-implement"},"What your project is ",(0,i.kt)("em",{parentName:"h5"},"not")," or will ",(0,i.kt)("em",{parentName:"h5"},"not")," provide or implement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our team does not plan on implementing the support for other tokens besides the native DOT and KSM tokens and Stable Coin at the initial launch in order to reduce the risks in cross-collaterals"),(0,i.kt)("li",{parentName:"ul"},"We will not implement a decentralized exchange by ourselves. Instead, we will be focusing on building the lending/borrowing and staking protocol.")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Where and how does your project fit into the ecosystem?")," We are aiming to offer the first decentralized lending/borrowing and staking protocol in the Polkadot and Kusama ecosystem as a DeFi and a parachain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"),' Our target audience are the DOT and KSM token holders who are looking to participate in lending/borrowing, staking and unlocking liquidity for their staked tokens, or generating "double interests" returns by lending and staking simultaneously. This audience would include retail, institutional and large token holders, traders (arbitrage opportunities in DeFi) and network validators. In general, large token holders will have a higher incentive to join the platform earlier as the exchange rate will be more favorable.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"What need(s) does your project meet?")," Our project helps generate additional interests for token holders, provide assets for borrowing and unlock liquidity for token stakers who can use staked tokens (ex: xDOT) to trade, lend or use as payment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"If so, how is your project different?")," Compound has been a successful and proven model for lending and borrowing assets in a decentralized manner in the Ethereum ecosystem. However, Compound doesn't offer staking services, and there is currently no decentralized lending/borrowing solution launched in the Polkadot ecosystem. Acala Network does offer staking services, but doesn't offer lending/borrowing services. From that perspective, we are a unique solution that combines both services and offers additional interests to our users."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"If not, are there similar projects in related ecosystems?")," We have not yet found a project that will be focusing on generating double interests for token holders through lending and staking.")))),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name of team leader: Yubo Ruan"),(0,i.kt)("li",{parentName:"ul"},"Names of team members: Remi Gai, Zhou Yang, Li Pai, Cheng Jiang, Hai Yi")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Yubo Ruan"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:yubo@parallel.fi"},"yubo@parallel.fi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"http://www.parallel.fi"},"www.parallel.fi"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("p",null,"(we are in the process of registering the legal entity)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," N/A"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," N/A")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yubo Ruan"),": Yubo is currently a venture investor at Polychain Capital and 8 Decimal Capital. Yubo previously worked at TrustToken as a solidity engineer and helped build the TrueFi uncollateralized lending protocol. Additionally, Yubo started Alisimba Technology with wide range of media coverage in China and was granted many national patents and innovation awards. Yubo studied computer science at Stanford University."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Yang Zhou"),": Yang is a senior blockchain engineer at Elastos and its Gelaxy group. At Elastos, Yang contributed to the cli tool, cross-chain protocol, and merged mining specification. Additionally, Yang was the point of contact with the world's top mining pool (F2Pool, BTCPool, ANTPool, and Huobipool), and successfully launched the Elastos mining business. Yang also worked at large software tech companies and has 9 years of development experience."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Remi Gai"),": Remi is a software engineer with a background in product management, entrepreneurship and venture capital, and currently works at Microsoft. Previously, Remi worked as an early stage investor at 8 Decimal Capital, a crypto/blockchain focused fund, and was the co-founder of Bitsystems, a blockchain development firm based in Cambridge, Massachusetts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lipai Zhu"),": Lipai has 4 years of experience in blockchain. For the past 2 years, Li Pai has been working as a blockchain engineer at JianXinZhuHe technology at Shenzhen and focuses on consortium blockchain. Prior, Lipai studied BitCoin, Ethereum and Solidity and won a prize at BSN Second developer competition and a grand prize at the 4th China Blockchain Development Competition (In Competition, his duty is design smart contract and develop it)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cheng Jiang"),": Cheng Jiang is a senior Fullstack Developer at Ubudu, experienced in Fullstack development, Network topology and Indoor Location System Algorithms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hai Yi"),": Hai Yi has 4 years experience in software engineering. He was a former software engineer at Swissborg, and trading product associate at the Bank of Montreal. Hai Yi holds a BSc in Computer Science degree from the University of Waterloo).")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Backend: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/parallel-finance/parallel"},"https://github.com/parallel-finance/parallel")),(0,i.kt)("li",{parentName:"ul"},"Frontend: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/parallel-finance/hackathon-2021-spring/tree/main/teams/22-Parallel/src/parallel-dapp"},"https://github.com/parallel-finance/hackathon-2021-spring/tree/main/teams/22-Parallel/src/parallel-dapp"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/yubo-ruan/"},"https://www.linkedin.com/in/yubo-ruan/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/remigai/"},"https://www.linkedin.com/in/remigai/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/cheng-jiang-2a414020a/"},"https://www.linkedin.com/in/cheng-jiang-2a414020a/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/haiyi-zhong-6274108b/?originalSubdomain=ca"},"https://www.linkedin.com/in/haiyi-zhong-6274108b/?originalSubdomain=ca")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/zhulipai/"},"https://www.linkedin.com/in/zhulipai/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/yz89/"},"https://www.linkedin.com/in/yz89/"))),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 4 months")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  4 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 9k USD")),(0,i.kt)("h3",{id:"milestone-1--implement-cross-chain-support-for-dot-and-ksm"},"Milestone 1 \u2014 Implement Cross-chain support for DOT and KSM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 8 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 1.8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 4000 USD")),(0,i.kt)("p",null,"The major deliverable of for this milestone:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement a multi-assets lending protocol."),(0,i.kt)("li",{parentName:"ul"},"Support automatic liquidation by using an off-chain worker.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.a"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Loans pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"Loans pallet will be implemented as a multi-assets lending protocol which offers lending and borrowing by using floating rate model. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#i-lending-protocol"},"here")," (\u2162-1, \u2162-2).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.b"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Liquidation pallet"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a liquidation solution build with Substrate Off-chain Worker, which will calculate the health factor of each borrower's account and send a liquidation transaction automatically. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#4-1-auto-liquidation-algorithm"},"here")," (\u2162-4.1).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.c"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Price aggregation oracle"),(0,i.kt)("td",{parentName:"tr",align:null},"We will need to create an on-chain price aggregation pallet for the oracle prices from multiple sources that is queried by off-chain workers. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#5-oracle-and-price-feed"},"here")," (\u2162-5).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2.a"),(0,i.kt)("td",{parentName:"tr",align:null},"Integration with front-end"),(0,i.kt)("td",{parentName:"tr",align:null},"We will integrate our existing front end to the finalized substrate backend.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2.b"),(0,i.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create an article and a demo video that will explain how users can start using the platform for lending and borrowing DOT or KSM tokens.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the lending functionality.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"While we develop our module, we will ensure that our code has significant test coverage (>80%) to ensure quality and provide explanations on how the functions work for the community to review, as well as craft test guides.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"User Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"We will conduct user testing to improve our product's UI and UX, to ensure that the borrowing and lending functionalities are intuitive. Initially, we will conduct qualitative user testing by observing 10-15 users who will use the v1 platform and provide a summary of the findings and improvements made based on insights.")))),(0,i.kt)("p",null,"Other:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will implement more quantitative user testing with A/B tests, web analytics, and heatmap once we have more adoption (>100-200 DAU) in order to get more significant insights (not part of v1 deliverables).")),(0,i.kt)("h3",{id:"milestone-2--enable-staking-for-dot-and-ksm"},"Milestone 2 \u2014 Enable Staking for DOT and KSM"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 8 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 2.2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5000 USD")),(0,i.kt)("p",null,"The major deliverable of for this milestone:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement the modules that allow for staking functionality, which includes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Exchange Rate"),(0,i.kt)("li",{parentName:"ul"},"28 days locking period for unstaking tokens"),(0,i.kt)("li",{parentName:"ul"},"Slashing scenarios"),(0,i.kt)("li",{parentName:"ul"},"Relay tokens to validators"))),(0,i.kt)("li",{parentName:"ul"},"Users will be able to stake DOT tokens, and receives xDOT in return. xDOT will then start accruing interests from staking and also be used for lending or transfered elsewhere for payment or trading. Similarly, staked KSM will be converted to xKSM with the same features as xDOT.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 /")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.a"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Staking DOT"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement the on-chain staking pool for the staking process from the nominators. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#2-nomination-workflow"},"here")," (IV-1, IV-3, IV-4).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.b"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Unstaking DOT"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a 28 days locking period for the unstaking process of DOT tokens from validators. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#4-delegated-staking"},"here")," IV-1, IV-4).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.c"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Exchange Rate"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement the process for issuing and trading DOT for xDOT with the users based on our exchange rate. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#4-delegated-staking"},"here")," (IV-4).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.d"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: Slashing Scenario"),(0,i.kt)("td",{parentName:"tr",align:null},"Staking tokens does have inherent risks of being slashed. We will implement our model that will change the exchange rate in case of slashing scenarios. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#6-slash-insurance"},"here")," (IV-6).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1.e"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate module: KSM"),(0,i.kt)("td",{parentName:"tr",align:null},"Since DOT and KSM will have similar code, we will mainly transfer over some of the previous development to allow for KSM staking.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Validator evaluation schema"),(0,i.kt)("td",{parentName:"tr",align:null},"We will design the validator evaluation schema to select the outstanding validators. The full expected functionality is described ",(0,i.kt)("a",{parentName:"td",href:"https://docs.parallel.fi/white-paper#2-validator-choosing-strategy"},"here")," (IV-2).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Integration with front-end"),(0,i.kt)("td",{parentName:"tr",align:null},"We will integrate our existing front end to the finalized substrate backend.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},'We will create an article and a demo video that will explain how users can start using the platform for staking DOT and KSM. Additionally, we will also create tutorials for users to explain how they can earn "double interests" through staking and lending at the same time via xDOT and xKSM.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"While we develop our module, we will ensure that our code has significant test coverage (>80%) to ensure quality and provide explanations on how the functions work for the community to review, as well as craft test guides.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"User Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"We will conduct user testing to improve our product's UX and UI, to ensure that the borrowing and lending functionalities are intuitive. Initially, we will conduct qualitative user testing by observing 10-15 users use the v1 platform and provide a summary of the findings and improvements made based on insights.")))),(0,i.kt)("p",null,"Other:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We will implement more quantitative user testing with A/B tests, web analytics, and heatmap once we have more adoption (>100-200 DAU) in order to get more significant insights (not part of v1 deliverables).  ")),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Community Development"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the short term, we will focus on acquiring the early users for our platform, who are large token holders and institutions. The exchange rate will be lower initially as the pool size and number of blocks are lower, so there's a strong incentive for larger players to deposit their tokens early on. As the Kusama and Polkadot mainnets are approaching, we will be forming partnership with validators who might be interested in forming partnerships or use our platform to gain liquidity on their staked tokens."),(0,i.kt)("li",{parentName:"ul"},"We will frequently post on social media (Twitter, Medium, Youtube) to provide development news and video tutorials regarding our platform. We will also work with influencers, who can break down complex concepts and provide clear guidance to the mainstream users on how to use our platform."),(0,i.kt)("li",{parentName:"ul"},"Our long term plan is to provide a suite of products that will allow users to earn superior interests with their assets on our Defi platform, as we truly believe in the benefits of decentralization and allowing more mainstream investors to participate in the financial economy.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Product Development"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is our tentative development roadmap for the rest of this year:\n",(0,i.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/56744348/111891918-94ebaa80-89c4-11eb-8707-a16b33e7b54c.png",alt:"image"}))),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We are a team that met and formed during the March 2021 Polkadot Hackathon in Shanghai. Our team members are both in the US and China, and come from a strong engineering background (crypto/blockchain, startup, traditional tech company), product management and financial background (venture capital, Defi). We were able to deliver our proof of concept within a month, and earned third place at the Hackathon.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We are currently still in the process of creating our white paper, but you can find more details about our documentation on our gitbook: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.parallel.fi/"},"https://docs.parallel.fi/"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Email: ",(0,i.kt)("a",{parentName:"p",href:"mailto:team@parallel.fi"},"team@parallel.fi"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Website: parallel.fi")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Twitter: ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ParallelFi"},"https://twitter.com/ParallelFi"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Medium: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@parallelfinance"},"https://medium.com/@parallelfinance"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LinkedIn: ",(0,i.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/parallel-finance/"},"https://www.linkedin.com/company/parallel-finance/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unofficial white paper: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.parallel.fi/"},"https://docs.parallel.fi/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Testnet demo: ",(0,i.kt)("a",{parentName:"p",href:"https://parallel.fi/#/app"},"https://parallel.fi/#/app"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Video demo (Hackathon March 2021): ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/lgQX9rELpL8"},"https://youtu.be/lgQX9rELpL8")))))}u.isMDXComponent=!0}}]);