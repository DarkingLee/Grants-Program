"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[369],{36976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(95657);const o={},r="MyBank Network",l={unversionedId:"applications/mybank",id:"applications/mybank",title:"MyBank Network",description:"- Team Name: MyBank Labs",source:"@site/applications/mybank.md",sourceDirName:"applications",slug:"/applications/mybank",permalink:"/applications/mybank",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/mybank.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Platform Bank",id:"platform-bank",level:4},{value:"Social Network Bank",id:"social-network-bank",level:4},{value:"MyDeX",id:"mydex",level:4},{value:"Credit Scoring System Explanation",id:"credit-scoring-system-explanation",level:4},{value:"Anonymous Vote",id:"anonymous-vote",level:5},{value:"Social Location",id:"social-location",level:5},{value:"Directionality Of Transactions",id:"directionality-of-transactions",level:5},{value:"UI",id:"ui",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team Members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s Experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status",id:"development-status",level:2},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Platform Bank",id:"milestone-1--implement-platform-bank",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mybank-network"},"MyBank Network"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Team Name:")," MyBank Labs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Payment Address(DAI):")," 0xd2884f29b1aE21Cd88c51068f2C81060B58ddC1e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Status:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/343#issuecomment-908667062"},"Terminated")))),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"MyBank is a decentralized financial platform based on Polkadot, aiming to establish a blockchain network that realizes asset appreciation and promotes asset flow. MyBank is divided into four parts: Platform Bank, Social Network Bank, MyDeX and Credit Scoring System."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In Platform Bank, users can participate as depositors, borrowers, and guarantors. Depositors can obtain deterministic returns by injecting liquidity into the corresponding asset pool. Borrowers can borrow by mortgaging collateral or invite guarantors to guarantee them to make zero-mortgage loans. After the implementation of the credit scoring system, credit loans without collateral or guarantee will be supported based on the user profile.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In Social Network Bank, MyBank as an infrastructure platform provides corresponding tools so that any individual and organization can build a collective bank that belongs to all members of a social network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MyDeX aims to provide users with the service of AMM, and support users to participate in the liquidation of Platform Bank.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We will develop a credit scoring system based on users' deposit records, loan records, guarantee records, transaction records, social networks and third-party data to generate user profile."))),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("h4",{id:"platform-bank"},"Platform Bank"),(0,i.kt)("p",null,"Most DeFi lending products are based on the mortgage system. Users lend assets from the asset pool by mortgaging collateral. We try to go further on this pattern. While providing mortgage lending services, we will release the liquidity of the depositor's assets and provide zero mortgage services. Depositors can use their deposit certificates to guarantee loans for friends, and friends can make zero mortgage loans on the platform based on the guarantee certificates. During the guarantee process, the guarantor's deposits will continue to generate income and will not be affected."),(0,i.kt)("p",null,"Each user will maintain a social network circle of their own, and the friend relationship needs to be confirmed by both parties. When a user has a loan demand and wants to choose a zero-mortgage loan, he can send the loan event to his friend's inbox, and the friend can choose to respond to the event to guarantee him. After the guarantee is successful, the system will issue a loan to his friend, and the deposit certificate will be locked by the system. Before the borrower repays, unless the guarantor chooses to pay a certain amount of funds to redeem the deposit certificate, his deposit will not be withdrawn."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gq1r6uwp7oj30yu0sq0v2.jpg",alt:"image-20210429161048216"}),"Platform Bank supports multi-currency digital assets as collateral for loans or guarantees. Each type of asset corresponds to different risk parameters according to its risk coefficient. In the future, MB Token holders can vote on the adjustment of the parameters, and the proposal passed by the referendum will be automatically executed by substrate runtime."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Liquidation Ratio")," Each loan that occurs in the PB will correspond to a collateral-to-debit ratio. Each type of asset will have a corresponding liquidation ratio according to its market value and volatility, and the system will monitor the collaterals-to-debit ratio of each loan. Once the collaterals-to-debit ratio is lower than the liquidation ratio, it will trigger liquidation behaviour. Assets with a higher risk coefficient usually correspond to a larger liquidation ratio and vice versa.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Interest Rates")," Determine the annualized rate of return of depositors, the borrowing cost of borrowers, and the size of the asset pool, and at the same time affect the risk of the system. The interest rate is determined by supply and demand. When the utilization rate of the asset pool is low, users will be encouraged to borrow through low-interest rates. When the utilization rate of the fund pool is high, the interest rate will increase to encourage users to repay the loan and attract depositors to provide liquidity to the asset pool through higher yields. Each asset pool will set a critical point, and the loan interest rate will increase faster after the utilization rate of the asset pool exceeds the critical point.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Insurance Fund")," MyBank has set aside a part of MB Token as insurance funds. When the Black Swan incident causes unexpected situations, MyBank will take part of the assets from the insurance fund to compensate users for losses. MyBank will charge depositors a certain percentage of handling fees and this part of funds will be combined with insurance funds."))),(0,i.kt)("p",null,"We will expand Platform Bank to support credit loans. The user's social networks, deposit records, loan records, guarantee records, and transaction records will all be stored on the chain to form an anonymous credit scoring system. The credit data accumulated by users combined with off-ch governance has brought the possibility of developing credit loan business. Credit loans need a strong governance organization, relying on the relevant identity authentication system and legal system. In the first stage, the credit loan business will be launched through the Private Pool and will only be open to financial institutions and enterprises that have passed the off-chain review."),(0,i.kt)("p",null,"Institutions can also pay a certain fee to create an independent Private Pool to develop loan business based on the infrastructure provided by MyBank. For example, the identity on the chain is an anonymous hash address. With the user's permission, the institution can verify the user's identity under the chain, and combine the credit score record to decide whether to issue a credit loan or mortgage loan to the user. The loan contract will be written to MyBank's distributed ledger. Loan records incurred by Private Pool can also be synchronized to the credit scoring system."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gq1r6sf64qj310i0dqab9.jpg",alt:"img"})),(0,i.kt)("h4",{id:"social-network-bank"},"Social Network Bank"),(0,i.kt)("p",null,"We try to integrate the advantages of blockchain, social network and collective governance to establish a brand-new collective bank to improve the utilization rate of funds and realize inclusive finance. Anyone can build a digital bank of their own through the blockchain infrastructure provided by MyBank. The bank will be governed by the users and MyBank will not intervene. The governance of each bank will be the responsibility of all users of the bank. As a bank based on social networks, members have real social relationships under the chain."),(0,i.kt)("p",null,"Members can contribute deposits to the bank. The more deposits, the greater the contribution to the bank. Deposit contributions will be recorded on the chain, and depositors will not only gain wealth but also reputation. The deposit records contributed by members are visible to other members. In the future, when they need loans, loan applications will be easier to pass. The more people they helped in the past, the greater the probability of getting help from others in the future."),(0,i.kt)("p",null,"Repayment of a loan will leave a record on the chain. Borrowers will have a greater chance to obtain larger loans in the future, indirectly encouraging users to gradually accumulate their credit history. All behaviours will be recorded on the chain. Based on the external constraints of social networks, the default will affect the reputation of individuals in the real life. And borrowers will not be able to obtain loans from the bank in the future or it will become more difficult to borrow. Loans can be based on joint and several liabilities. If a person fails to repay the loan, the credit history of the members who guarantee or vote for it will also be affected. It may be regarded as a default, so the borrower's friends have an additional incentive to help the borrower."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gq1racw53tj318p0u0qlc.jpg",alt:"image-20210430143053169"})),(0,i.kt)("p",null,"MyBank abstracts the user's demands into corresponding events, and the event is decided by the collective or the committee. Users can set the governance of the bank by themselves. "),(0,i.kt)("p",null,"Users can select a committee to govern. The committee members are elected by all members, and all members also have the right to initiate a referendum to remove a committee member. The management of the bank will be fully represented by the committee, and each event requires the consent of a certain proportion of the committee members before it can be executed. The event approved by the committee can be an automatic event, or it needs to be executed after a while. If all members reject the event by referendum, the event will be automatically removed. The committee member can choose to pledge a certain amount of assets to obtain more nomination votes. If the committee member acts against the interests of other members of the bank, other members can initiate a referendum to confiscate the pledged assets of the committee member."),(0,i.kt)("p",null,"Users can also choose collective governance. Each event requires the consent of a certain proportion of all members before it can be executed. Or users can combine the advantages of committee governance and collective governance to conduct mixed governance, and choose a balance between efficiency and democracy. For example, a loan event requires a collective decision, and a deposit event can be decided by the committee."),(0,i.kt)("h4",{id:"mydex"},"MyDeX"),(0,i.kt)("p",null,"Any user can inject funds into the asset pool to obtain the transaction fee income. The equation for working out the price of each token is x*y=k, where the amount of XToken is x and the amount of YToken is y. K is a constant value."),(0,i.kt)("p",null,"At the same time, users can pledge the LP Token to become a liquidator in Platform Bank, and can easily capture the income brought by liquidation while obtaining the transaction fee income. When the liquidation is triggered, the borrower needs to pay a certain percentage of the penalty fee, and the liquidator will receive this penalty fee."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gq1r6s1b63j31260jujss.jpg",alt:"img"})),(0,i.kt)("p",null,"MyDeX will integrate with Platform Bank to make it easier to short or long."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a user is not optimistic that XToken will continue to rise in the future, he can choose to lend XToken at Platform Bank, then sell XToken in MyDeX to obtain stable coins, and redeem XToken to repay the loan when the price falls.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If a user is optimistic that XToken will continue to rise in the future, want to leverage. He can lends stable currency in Platform Bank, and then use the stable currency to obtain XToken in MyDeX, and sell XToken to redeem stable currency to repay the loan when the price rises."))),(0,i.kt)("p",null,"On the current Ethereum platform, if the above two operations are to be carried out, users need to jump and click multiple times between multiple DeFi products. On the front-end interactive page of MyBank, the above-mentioned operation users only need to click once, and the whole operation will be completed in one block, which is more convenient and has a faster execution speed."),(0,i.kt)("h4",{id:"credit-scoring-system-explanation"},"Credit Scoring System Explanation"),(0,i.kt)("p",null,"Human beings are the total of social relations, and we should create a credit score system that does not need a third party or a central institution but is based on individual social relations."),(0,i.kt)("p",null,"The structure and location of human networks determine everyone's choices in making friends, choosing schools, employment, financial management, raising children, leisure and entertainment. They also determine people's social circles and beliefs, as well as who is more powerful and influential and more likely to be successful. We quantified a person\u2019s 'position' in social networks, combined with a continuous \"Proof Of Vote\" to establish a completely digital blockchain credit system."),(0,i.kt)("p",null,"Unlike trust models such as EigenTrust, the trust system is based on the fact that we can use homomorphic encryption to achieve anonymous scoring of any individual in social networks; and a person's centrality, eigenvector centrality, propagation centrality, intermediary centrality, etc. are used as weight factors; Burn mechanism of Coindays is used as another set of main credit evaluation factors."),(0,i.kt)("h5",{id:"anonymous-vote"},"Anonymous Vote"),(0,i.kt)("p",null,"In an interpersonal network, we should directly express our likes and dislikes, and should not be affected by identity, status, skin color, wealth, etc. In addition, we should digitize it and show it to the newly joined individuals in an intuitive way."),(0,i.kt)("p",null,"Homomorphic encryption provides the technical foundation. Each vote will consume a certain amount of MB, and the cost of the vote will be directly related to Token, which will affect the opportunity to obtain Token in the future. We use the Burn mechanism of Coindays as a credit evaluation factor. In a vote, the value of destruction is positively related to the weight of the credit evaluation. When two accounts are trying to repeatedly trade to obtain the score of this weight, the first evaluation is valid, and at this time the accumulated Coindays have been destroyed. When the second vote is conducted, the accumulation of Coindays will be very small because it occurs shortly after the first transaction. Correspondingly, the contribution to the credit evaluation is very small, but a certain amount of MB tokens will be consumed as a handling fee. Similarly, when there are possible malicious bad reviews, because the credit evaluation is proportional to the destruction of Coindays, the amount of the transaction is too small, and it can hardly affect the user's credit."),(0,i.kt)("h5",{id:"social-location"},"Social Location"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://journals.aps.org/pre/abstract/10.1103/PhysRevE.68.036122"},"Social networks")," are different from other networks. We measure a person's position in society. At present, it mainly includes the following five aspects:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'The number of friends. We have created a new relationship network on the chain. To establish such a relationship, we need the consent of the other party and pay a certain fee. The existence of a hash algorithm naturally helps us avoid network storms. For possible abuse, we combine social science research similar to "Dunbar number". After the number of friends reaches a certain threshold, the cost will be greatly increased. ',(0,i.kt)("a",{parentName:"li",href:"https://www.bebr.ufl.edu/sites/default/files/Centrality%20in%20Social%20Networks.pdf"},"Centricity")," is used to measure this indicator."),(0,i.kt)("li",{parentName:"ol"},'The number of friends with high scores. Real-life experience tells us that it is necessary for a person to have many friends, and it is more important to have higher-quality friends. Although a person may not have many friends, it is usually more useful to have some "powerful" friends. We use the term eigenvector centrality to measure this indicator.'),(0,i.kt)("li",{parentName:"ol"},"The trust score on the chain should be closely related to the activities on the chain. As an extension of the AMM function, we hope to spread the demand in social networks, and the spreading individuals can charge a certain handling fee and earn a certain interest rate spread."),(0,i.kt)("li",{parentName:"ol"},"There is a cost to forwarding requirements. When there are more friends to forward your requirements to help you achieve your requirements, we believe that your role in your network cannot be ignored. We use the degree of communication centrality to measure this indicator."),(0,i.kt)("li",{parentName:"ol"},"The role of mediation cannot be ignored. In fact, with smart contract, combined with the trust subsystem, anyone can act as an intermediary. When a demand can only be propagated and matched through this individual, this role is crucial to both supply and demand.")),(0,i.kt)("h5",{id:"directionality-of-transactions"},"Directionality Of Transactions"),(0,i.kt)("p",null,"Another use of Coindays is to establish the weight of trust scores assessed by transfers. Usually, we will deal with transactions as equivalent transactions. In a transaction, one party's expenditure is equal to the other party's income. This is no problem in itself, but in the world of digital, it is necessary to convert scalars into vectors. In the process of trading, the system's Coindays are always destroyed, and the original ordinary transaction."),(0,i.kt)("h4",{id:"ui"},"UI"),(0,i.kt)("p",null,"Homepage"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gq1r6tw1ujj31c50p7425.jpg",alt:"img"})),(0,i.kt)("p",null,"Social Networks"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gq1tgzmw83j30s00kz0z3.jpg",alt:"image"})),(0,i.kt)("p",null,"Different colors represent different relationships, friends or not, vouch or not, one-way vote, obligatory relationships, etc."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNgy1gq1r6vnt4fj30nx0fk754.jpg",alt:"img"})),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Similar lending products on Ethereum include Compound & Aave, and AMM products include Uniswap & Sushiswap."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In Platform Bank, we will release the liquidity of depositors' assets to maximize their social guarantee value and provide borrowers with zero mortgage loans service. After perfecting the credit scoring system, we will support users to make credit loans.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Platform Bank and MyDex are developed based on Polkadot and Substrate, and users will pay fewer transaction fees and get higher TPS.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Based on Polkadot's cross-chain bridge, MyBank can provide users with more diversified choices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MyBank integrates lending and trading, abstracting it into an interface at the front end. Users can conduct leveraged trading with one click, making it more convenient to long and short without switching between multiple products to obtain lower transaction delay."))),(0,i.kt)("p",null,"At present, there is no similar product to Social Network Bank(SNB) in the market. SNB is not only aimed at the existing DeFi user group. SNB is an inclusive finance platform, allowing most people, including poor groups, to enjoy the convenience brought by finance and blockchain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Most of the existing lending product is based on asset collateral, but many poor people in the world do not have enough assets to mortgage, so they cannot obtain loans from financial institutions. MyBank will provide relevant digital tools based on the blockchain, so that poor groups can help each other and supervise each other based on their social networks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the same time, we will cooperate with charities to provide start-up funds for the user's bank. When charities choose to donate to a poor village, after the initial distribution, some funds can be reserved for the user's SNB. Members in the same social network know each other better than third-party financial institutions. SNB can invest this sum of money in the village's most capable people through collective governance. All members share the income as angel investors."))),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("h3",{id:"team-members"},"Team Members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/ziwenxie"},"Amos")," - Full-stack Developer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/armatrix"},"Dean")," - Full-stack Developer"))),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("p",null,"Email: ",(0,i.kt)("a",{parentName:"p",href:"mailto:official@mybank.network"},"official@mybank.network")),(0,i.kt)("h3",{id:"teams-experience"},"Team's Experience"),(0,i.kt)("p",null,"Amos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Machine Learning Engineer(Big Data & Computer Version)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rust And Substrate Developer"))),(0,i.kt)("p",null,"Dean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Distributed Storage Engineer(FileCoin)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rust And Substrate Developer"))),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mybank-network/mybank-network"},"https://github.com/mybank-network/mybank-network")),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/amos-green-387703165/"},"Amos")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dean-anderson-1485b8b9/"},"Dean"))),(0,i.kt)("h2",{id:"development-status"},"Development Status"),(0,i.kt)("p",null,"Currently, we have finished the basic lending pallets and deployed a test network in ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer/query"},"polkadot.js"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Substrate Code Repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mybank-network/mybank-network"},"https://github.com/mybank-network/mybank-network"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Substrate Websocket Address: wss://app.mybank.network/substrate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Officail Website: ",(0,i.kt)("a",{parentName:"p",href:"https://mybank.network"},"https://mybank.network"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lending APP: ",(0,i.kt)("a",{parentName:"p",href:"https://app.mybank.network/mybank"},"https://app.mybank.network/mybank")))),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Estimated Duration:")," 2 months")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Full-time equivalent (FTE):")," 4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Costs:")," 8000 DAI"))),(0,i.kt)("h3",{id:"milestone-1--implement-platform-bank"},"Milestone 1 \u2014 Implement Platform Bank"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Estimated Duration:")," 2 months")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Full-time equivalent (FTE):")," 4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Total Costs:")," 8000 DAI"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.a"),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"The documentation will be given to show the whole architecture of the Platform Network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.b"),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"The testing guide will be provided to test pallets and the front-end.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.a"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate Module: Asset Pool"),(0,i.kt)("td",{parentName:"tr",align:null},"Realize the interface of deposit and debit. Support multi-currency lending. Automatically adjusts interest rates based on demand and supply. Support mortgage lending and guraantee lending. Implement Liqudation Module(off-chain worker).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.b"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate Module: User Profile & Credit Score"),(0,i.kt)("td",{parentName:"tr",align:null},"Generate user profiles based on the user's past deposit records, loan records, transaction records, and social networks.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.c"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate Module: Private Pool"),(0,i.kt)("td",{parentName:"tr",align:null},"Users can apply to create an private pool and inject liquidity to develop loan business.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2.d"),(0,i.kt)("td",{parentName:"tr",align:null},"Substrate Module: Social Network"),(0,i.kt)("td",{parentName:"tr",align:null},"Users can friend someone on PB and send a guarantee request to a friend.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Front End Of Platform Bank"),(0,i.kt)("td",{parentName:"tr",align:null},"Complete the development of the platform bank interactive page in react.  The interface will be available in Chinese as well as English.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker Image"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of our chain.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build MyBank Community."),(0,i.kt)("li",{parentName:"ol"},"Publish articles on media channels to expose the MyBank Network."),(0,i.kt)("li",{parentName:"ol"},"Cooperate with ETH-bridge and BTC-bridge project."),(0,i.kt)("li",{parentName:"ol"},"Support Kusama Node. The MyBank Network will run as a parachain of the Kusama."),(0,i.kt)("li",{parentName:"ol"},"Implement WASM Smart Contract by using !ink."),(0,i.kt)("li",{parentName:"ol"},"Develop credit loan module."),(0,i.kt)("li",{parentName:"ol"},"Cooperate with third-party institutions to introduce users' off-chain assets into MyBank."),(0,i.kt)("li",{parentName:"ol"},"Develop Social Network Bank after we implement Platform Bank and MyDeX.")),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,"We have just developed the first version of the MyBank Network and have not yet accepted external donations and financing."))}m.isMDXComponent=!0}}]);