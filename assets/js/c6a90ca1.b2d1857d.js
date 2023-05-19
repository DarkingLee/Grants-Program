"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[1958],{17506:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));a(95657);const r={},i="RFP: Validator Selection Algorithm",o={unversionedId:"docs/RFPs/Under Development/validator-selection-algorithm",id:"docs/RFPs/Under Development/validator-selection-algorithm",title:"RFP: Validator Selection Algorithm",description:"Status:* Under Development",source:"@site/docs/RFPs/Under Development/validator-selection-algorithm.md",sourceDirName:"docs/RFPs/Under Development",slug:"/docs/RFPs/Under Development/validator-selection-algorithm",permalink:"/docs/RFPs/Under Development/validator-selection-algorithm",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Under Development/validator-selection-algorithm.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Social Recovery Wallet",permalink:"/docs/RFPs/Under Development/social-recovery-wallet"},next:{title:"polkadot-validator-setup maintenance",permalink:"/docs/RFPs/Under Development/validator-setup-maintenance"}},p={},s=[{value:"Project Description",id:"project-description",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 (Implementation)",id:"milestone-1-implementation",level:3},{value:"Milestone 2 (Testing)",id:"milestone-2-testing",level:3}],m={toc:s},d="wrapper";function u(t){let{components:e,...a}=t;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rfp-validator-selection-algorithm"},"RFP: Validator Selection Algorithm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Status:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/validators_selection.md"},"Under Development")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jonasW3F"},"jonasW3F"))),(0,l.kt)("h2",{id:"project-description"},"Project Description"),(0,l.kt)("p",null,"Together with colleagues from academia, we developed an interactive process for nominations to better find suitable validators and the study is published ",(0,l.kt)("a",{parentName:"p",href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4253515"},"here"),". The process is non-opinionated, which means that we do not have any opinion on any validator ex ante. The score of a validator is purely derived by the choices of the nominators."),(0,l.kt)("p",null,"After having validated the results in the study, I'd like to see this implemented. For that, we need to set up a proper backend that exposes an API for other services to connect to."),(0,l.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,l.kt)("p",null,"The aim of this project is only a backend. The final result will be a Python flask application exposing its functionality via RESTful API"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Functionality"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Providing a pair of validators for comparison"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Input:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"previous comparisons"))),(0,l.kt)("li",{parentName:"ul"},"Output:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"next pair"),(0,l.kt)("li",{parentName:"ul"},"current model\u2019s quality"),(0,l.kt)("li",{parentName:"ul"},"current model"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Providing a ranking for a given model"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Input:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"model"))),(0,l.kt)("li",{parentName:"ul"},"Output:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ranking of validators"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Accepting new data"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Input:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"validators.csv file that contains information of recent era data from trusted sources"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Requirements"),":"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Linux system with python 3 and listed packages installed"),(0,l.kt)("li",{parentName:"ul"},"2GB of RAM"),(0,l.kt)("li",{parentName:"ul"},"GPU (optional)"),(0,l.kt)("li",{parentName:"ul"},"Network configuration allowing for communication on a selected port"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Testing")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Test if the code behaves as expected.")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  30 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Total Costs:")," 9000 USD (provisional)")),(0,l.kt)("h3",{id:"milestone-1-implementation"},"Milestone 1 (Implementation)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  20 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 6000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Next pair"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop an algorithm for efficient calculations of the next pair to be compared to maximize the model\u2019s information gain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Ranking calculation"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop an algorithm calculating a score for each validator")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"New data"),(0,l.kt)("td",{parentName:"tr",align:null},"Develop a function for the data preprocessing")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4."),(0,l.kt)("td",{parentName:"tr",align:null},"Internal testing"),(0,l.kt)("td",{parentName:"tr",align:null},"Unit tests covering the functionality and logic")))),(0,l.kt)("h3",{id:"milestone-2-testing"},"Milestone 2 (Testing)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FTE:"),"  10 days"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Costs:")," 3000 USD")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,l.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1."),(0,l.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,l.kt)("td",{parentName:"tr",align:null},"Deploy the code on a provided server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2."),(0,l.kt)("td",{parentName:"tr",align:null},"Test live environment"),(0,l.kt)("td",{parentName:"tr",align:null},"Test the server efficiency and provide a report")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3."),(0,l.kt)("td",{parentName:"tr",align:null},"Polishing"),(0,l.kt)("td",{parentName:"tr",align:null},"Reach out for feedback to the Grants Team. Integrate final feedback on functional, as well as cosmetic changes like the way data are provided, configuration, etc.")))))}u.isMDXComponent=!0}}]);