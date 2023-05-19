"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[7791],{78422:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(95657);const l={},o="Front-End for Staking Rewards Collector",i={unversionedId:"docs/RFPs/Closed/staking-rewards-collector-front-end",id:"docs/RFPs/Closed/staking-rewards-collector-front-end",title:"Front-End for Staking Rewards Collector",description:"Status Repo 1, finished, Repo 2, in progress",source:"@site/docs/RFPs/Closed/staking-rewards-collector-front-end.md",sourceDirName:"docs/RFPs/Closed",slug:"/docs/RFPs/Closed/staking-rewards-collector-front-end",permalink:"/docs/RFPs/Closed/staking-rewards-collector-front-end",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Closed/staking-rewards-collector-front-end.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Polkadot Collator Setup",permalink:"/docs/RFPs/Closed/polkadot-collator-setup"},next:{title:"Uncollateralized Stablecoin Research",permalink:"/docs/RFPs/Closed/uncollateralized-stablecoin-research"}},s={},p=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 (Implementation)",id:"milestone-1-implementation",level:3},{value:"Milestone 2 (Testing)",id:"milestone-2-testing",level:3}],d={toc:p},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"front-end-for-staking-rewards-collector"},"Front-End for Staking Rewards Collector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," Implemented: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/cryptolab-staking-reward-collector-front-end.md"},"Repo 1, finished"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/blob/master/applications/staking-rewards-collector-front-end.md"},"Repo 2, in progress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," JonasW3F"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Your Project(s):")," -"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Projects you think this work could be useful for")," Staking operations of all nominators and validators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Teams/People that could deliver the RFP")," -")),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/staking-rewards-collector"},"staking-rewards-collector")," is a tool to gather staking rewards for given addresses and cross-reference those with daily price data. This is a very useful tool for every validator and nominator in the ecosystem. However, since it has currently a CLI and requires some technical knowledge to set up (git, nodejs, yarn). A front-end hosted on a website could help many users getting access to this tool and enjoy the benefits. "),(0,r.kt)("p",null,"The backend is already written in javascript, this should make it quite easy to host as a website and develope a front-end. "),(0,r.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,r.kt)("p",null,"In order to apply for the project, we will require you to propose the design in the form of mock-ups."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Implementation of a user interface"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Query input parameters (from the users)"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Addresses (multiple ones are supported by the code)."),(0,r.kt)("li",{parentName:"ul"},"Start and end date "),(0,r.kt)("li",{parentName:"ul"},"Does the user want price data linked to staking rewards?"),(0,r.kt)("li",{parentName:"ul"},"What are the startBalances of each address?"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data output viewer"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The code produces a .csv and .json file which should be displayed in the browser."),(0,r.kt)("li",{parentName:"ul"},"Visualization for the varying number of input addresses."),(0,r.kt)("li",{parentName:"ul"},"Some sorting based on network / amount."),(0,r.kt)("li",{parentName:"ul"},"Search for specific entries like dates."),(0,r.kt)("li",{parentName:"ul"},"Option to download to local storage."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Help page / buttons:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Both the input query and output viewer should have several help buttons to give explanations for all users. "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compatibility"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It should be easy to extend the underlying script and the UI should be flexible enough to incorporate that (e.g., adding another column in the data output)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hosting")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Centralized and preferably decentralized (IPFS)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Testing")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Test if the code behaves as expected.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 Weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  15 days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 4000 USD (provisional)")),(0,r.kt)("h3",{id:"milestone-1-implementation"},"Milestone 1 (Implementation)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 9 days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 3500 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"UI for user input"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop an UI to request necessary data from the users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"UI for data visualizer"),(0,r.kt)("td",{parentName:"tr",align:null},"Develop an environment to display the output (.csv and .json) for the end user in a pleasurable way.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Help pages / comments"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement help texts and descriptions for users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Internal testing"),(0,r.kt)("td",{parentName:"tr",align:null},"Unit tests covering the functionality and logic")))),(0,r.kt)("h3",{id:"milestone-2-testing"},"Milestone 2 (Testing)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3 days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 500 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},"Deploy the code on a centralized server and IPFS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Test live environment"),(0,r.kt)("td",{parentName:"tr",align:null},"Test the homepage with various different OS and browsers and provide a report")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Polishing"),(0,r.kt)("td",{parentName:"tr",align:null},"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like font size, colors, typos etc.")))))}u.isMDXComponent=!0}}]);