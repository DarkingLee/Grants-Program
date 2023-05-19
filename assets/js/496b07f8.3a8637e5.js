"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5276],{46175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(95657);const r={},l="Sequester",o={unversionedId:"applications/sequester",id:"applications/sequester",title:"Sequester",description:"- Team Name: Sequester",source:"@site/applications/sequester.md",sourceDirName:"applications",slug:"/applications/sequester",permalink:"/applications/sequester",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sequester.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team",id:"team",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Github Repos",id:"team-github-repos",level:3},{value:"Individual Github Repos",id:"individual-github-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status",id:"development-status",level:2},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information",id:"additional-information",level:2}],u={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sequester"},"Sequester"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Sequester"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," bc1quup4v5el5s7m6szh24d6sn6cl25yjvr8mlymnt"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Since Polkadot-based chains are fee-optional, transaction fees currently being used as an anti-spam mechanism can be leveraged to make every transaction on Polkadot carbon negative, without requiring any changes to the user experience. We propose a common good parathread on Polkadot, named Sequester, that provides the functionality of aggregating transaction fees, exchanging them into carbon-backed tokens, and retiring underlying carbon offsets that meet the community\u2019s specifications."),(0,i.kt)("p",null,"Sequester is a toolkit that will allow any chain in the Polkadot ecosystem to easily buy carbon-backed assets and retire associated carbon credits. By retiring these carbon credits, we aim to incentivize the creation of more high-quality carbon reduction projects by substantially increasing demand and the economic viability of this work."),(0,i.kt)("p",null,"Due to Polkadot\u2019s shared security model, the network is uniquely positioned to utilize existing network activity to natively power a carbon sink. With the widespread adoption of Sequester across its growing ecosystem, Polkadot has the potential to power one of the largest carbon-offsetting entities worldwide."),(0,i.kt)("p",null,"For more information, see our full ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/15L7bO8dnx1XvWpS6ZRi4wEmSTV5yEnON_wEhaGJnHpQ/"},"white paper"),"."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"To allow chains to sustainably leverage their transaction fees to buy carbon credits on-chain, we will need to handle:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Receiving tokens sent from other chains"),(0,i.kt)("li",{parentName:"ol"},"Exchanging those tokens into carbon-backed tokens, and"),(0,i.kt)("li",{parentName:"ol"},"Initiating retirement of the underlying assets for the carbon-backed tokens")),(0,i.kt)("p",null,"This grant addresses step 1. Specifically, we will implement a pallet that will calculate a chain\u2019s transaction fees over a period of time and allow any chain connected to Polkadot or Kusama to send a percentage of them to Sequester."),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Sequester is building the infrastructure to allow any chain in Dotsama to donate a portion of their transaction fees towards buying and retiring carbon-backed assets.  We aim to provide parachain developers a simple way to integrate Sequester\u2019s functionalities into their chain.  We hope to lead the charge in implementing Polkadot\u2019s environmental strategy. With the widespread adoption of Sequester across its growing ecosystem, Polkadot has the potential to be one of the largest carbon-offsetting entities worldwide. We visualize and explain this process in the diagram below:"),(0,i.kt)("img",{alt:"High-Level Diagram Detailing Sequester\u2019s Role in the Polkadot Ecosystem",src:"https://user-images.githubusercontent.com/16585653/167210224-2c3692f0-ec2c-47d5-b7ae-b4df1a1bee11.png",style:{display:"block","margin-left":"auto","margin-right":"auto",width:"80%"}}),(0,i.kt)("h2",{id:"team"},"Team"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brendan Edelson - Full Stack Developer"),(0,i.kt)("li",{parentName:"ul"},"Ethan Brown - Full Stack Developer")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Sequester Team"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:sequester.chain@gmail.com"},"sequester.chain@gmail.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website"),": Coming Soon (tbd)")),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," UniSearch Inc. 800 N. State Street, Suite 403, Dover, DE 19901, United States"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Sequester Chain LLC.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brendan Edelson - Software Engineer at CTRL-Labs. Bachelor of Science, Computer Science from Stanford University."),(0,i.kt)("li",{parentName:"ul"},"Ethan Brown - Software Engineer at Instagram. Bachelor of Science, Computer Science from Stanford University.")),(0,i.kt)("h3",{id:"team-github-repos"},"Team Github Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Code for the pallet will live here: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SequesterChain/pallets"},"https://github.com/SequesterChain/pallets")),(0,i.kt)("li",{parentName:"ul"},"Code for the Sequester chain will live here: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SequesterChain/Sequester-node"},"https://github.com/SequesterChain/Sequester-node"))),(0,i.kt)("h3",{id:"individual-github-repos"},"Individual Github Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brendan: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/brendanedelson"},"https://github.com/brendanedelson")),(0,i.kt)("li",{parentName:"ul"},"Ethan: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/esbrown"},"https://github.com/esbrown"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brendan: \u200b\u200b",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/brendanedelson/"},"https://www.linkedin.com/in/brendanedelson/")),(0,i.kt)("li",{parentName:"ul"},"Ethan: ",(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ethanbrown2/"},"https://www.linkedin.com/in/ethanbrown2/"))),(0,i.kt)("h2",{id:"development-status"},"Development Status"),(0,i.kt)("p",null,"For the past two+ months, we have been fleshing out the technical implementation details and meeting regularly with several members of Web3 Foundation and Parity Technologies: Marta Moranduzzo, Joe Petrowski, Raul Romanutti, Otar Shakarishvili, and a one-off intro meeting with David Hawaig."),(0,i.kt)("p",null,"The Bitgreen team will be our initial ecosystem partner and will be responsible for bridging Carbon Credits on-chain in a sustainable manner."),(0,i.kt)("p",null,"We also attended the AmsterDOT conference and established working connections with several parachain teams in the ecosystem."),(0,i.kt)("h2",{id:"development-roadmap"},"Development Roadmap"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated duration:")," 5 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Effort:"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," $25000")),(0,i.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 5 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Effort:"),"  2 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," $25000")),(0,i.kt)("p",null,"Goal - Implement a pallet that allows chains to calculate transaction fees used on-chain during a period of time and send those funds from their treasury via XCM to the Sequester chain."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide documentation on how to add our pallet to a Substrate chain and an overview of the configuration options.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing"),(0,i.kt)("td",{parentName:"tr",align:null},"Our code will have full unit-test coverage to ensure functionality and robustness. We will also provide documentation describing how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) to run a test node in order to test that our pallet functions correctly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Calculate Transaction Fees"),(0,i.kt)("td",{parentName:"tr",align:null},"Inside our pallet, we will create a method that calculates the transaction fees over a period of x blocks. For the fee-calculation, we will be using an off-chain worker to index the transaction fees on a per-block basis and store that calculation in off-chain storage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Send to Sequester"),(0,i.kt)("td",{parentName:"tr",align:null},"Implement a method that will retrieve the sum of transaction fees from offchain-storage and will send a percentage (a configurable variable) of them to Sequester's chain via XCM every x blocks (also a configurable variable). This transfer process will be automated so that no manual transfer will be needed by the parachain through governance. This method will also handle resetting the proper off-chain variables.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a full tutorial outlining how to add the pallet to your chain. This will be added to the wiki of the sequester website.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Weight estimation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide reasonable weight estimations, e.g., using benchmarking.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creation of Common-Good Chain to receive tokens from chains that implement the Transaction Fee pallet"),(0,i.kt)("li",{parentName:"ol"},"Integration with leading ecosystem DEX to swap substrate tokens for carbon credit-backed tokens"),(0,i.kt)("li",{parentName:"ol"},"Auditing and security analysis of Sequester chain and pallet"),(0,i.kt)("li",{parentName:"ol"},"Sequester website to host our documentation and wikis to allow easy onboarding for other chains"),(0,i.kt)("li",{parentName:"ol"},"Onboarding of Sequester onto Kusama"),(0,i.kt)("li",{parentName:"ol"},"Integration with our first parachain partner for initiating carbon retirement functionality"),(0,i.kt)("li",{parentName:"ol"},"Onboarding of partner Parachain teams"),(0,i.kt)("li",{parentName:"ol"},"Onboarding of Sequester onto Polkadot"),(0,i.kt)("li",{parentName:"ol"},"UI for visualizing Sequester\u2019s impact"),(0,i.kt)("li",{parentName:"ol"},"Integration with future partners and increased offerings of ESG tokens")),(0,i.kt)("h2",{id:"additional-information"},"Additional Information"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Personal Recommendation"))}p.isMDXComponent=!0}}]);