"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[2001],{69407:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},r="SARP - A Static Analysis Tool for Runtime Pallets",s={unversionedId:"applications/sarp-basic-functionality",id:"applications/sarp-basic-functionality",title:"SARP - A Static Analysis Tool for Runtime Pallets",description:"- Team Name: Supercomputing Systems AG (SCS)",source:"@site/applications/sarp-basic-functionality.md",sourceDirName:"applications",slug:"/applications/sarp-basic-functionality",permalink:"/applications/sarp-basic-functionality",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sarp-basic-functionality.md",tags:[],version:"current",frontMatter:{}},o={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Vulnerability Classes",id:"vulnerability-classes",level:4},{value:"Milestone 1 - Research",id:"milestone-1---research",level:3},{value:"Deliverables",id:"deliverables",level:4},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sarp---a-static-analysis-tool-for-runtime-pallets"},"SARP - A Static Analysis Tool for Runtime Pallets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Supercomputing Systems AG (SCS)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xd24622311a22470353bd21d9bcd9e02ba0cfebbe (USDC)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This application is a response to the RFP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/Static-Analysis-for-Runtime-Pallets.md"},"Static Analysis for Runtime Pallets")),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/learn/runtime-development/"},"Runtime Pallets")," are modules for writing the business logic of blockchains in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," (a Rust framework for building blockchains). These are usually concise pieces of standalone code with relatively few dependencies and clear specifications, hence tractable targets for performing static analysis and verification. The code quality of a runtime pallet is crucial, as even minor defects can result in major exploits like DoS attacks or the stealing of funds by a malicious party. A static code analysis can help to automate the auditing processes and prevent introduction of defects throughout the software life-cycle."),(0,i.kt)("p",null,"Therefore we would like to develop a tool - SARP (Static Analysis tool for Runtime Pallets) to perform static analysis with reasonable soundness guarantees. In particular, we would like to target vunerability classes that are detectable using dataflow analysis techniques like ",(0,i.kt)("em",{parentName:"p"},"tag analysis")," and ",(0,i.kt)("em",{parentName:"p"},"taint analysis"),"."),(0,i.kt)("p",null,"Our team has no prior knowledge in static code analysis, but has a good understanding of substrate and Rust."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"We will base our work on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/MIRAI/"},"MIRAI")," and extend it with checks on substrate pallets. For details see the ",(0,i.kt)("a",{parentName:"p",href:"#development-roadmap-nut_and_bolt"},"Development Roadmap")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"The tool will help any team developing substrate pallets. It can further be integrated in the CI pipelines of the teams, providing a continuous quality check on the pallet code."),(0,i.kt)("p",null,"In the long term it could be interesting to connect the work done here with the new emerging auditing DAOs (like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/FuzzLand.md"},"Fuzzland")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/QRUCIAL_DAO.md"},"QRUCIAL DAO"),")."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sabine Proll: Project Lead"),(0,i.kt)("li",{parentName:"ul"},"Bigna H\xe4rdi: Developer"),(0,i.kt)("li",{parentName:"ul"},"Edith Chevrier: Developer"),(0,i.kt)("li",{parentName:"ul"},"Thomas Niederberger: Developer")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Sabine Proll"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:Sabine.Proll@scs.ch"},"Sabine.Proll@scs.ch")," | ",(0,i.kt)("a",{parentName:"li",href:"mailto:info@scs.ch"},"info@scs.ch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.scs.ch"},"https://www.scs.ch"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Technoparkstrasse 1, 8005 Z\xfcrich, Switzerland"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Supercomputing Systems AG")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Supercomputing Systems AG is a contractor with 130 engineers, working in the fields of software, electronics and system design. Profound know-how, solid methodological competence as well as efficient project management are the foundation of our success. Within the company we have a team of 5 blockchain developers, who have experience in the Polkadot ecosystem."),(0,i.kt)("p",null,"Our blockchain team has been a contributor to the ecoysystem since 2019. We started with grants from the Web3 Foundation to build the basis for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/integritee-network"},"Integritee")," (see our grants from waves ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate_sgx_proposal.md"},"1"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/substrate-api-client.md"},"3")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/SubstraTEE-extension-pack1.md"},"5"),"). After that, our team has worked for Integritee and Encointer as a contractor. Recently the team received grants from the Kusama treasury for maintaining and improving the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scs/substrate-api-client"},"substrate-api-client"),", see our proposals for ",(0,i.kt)("a",{parentName:"p",href:"https://kusama.subsquare.io/referenda/referendum/26"},"Nov 22 - Jan 23")," and ",(0,i.kt)("a",{parentName:"p",href:"https://kusama.subsquare.io/referenda/referendum/88"},"Feb 23 - Apr 23"),"."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("p",null,"The team has mainly worked on the following repositories"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scs/substrate-api-client"},"Substrate Api Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/integritee-network/worker"},"Integritee Worker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/encointer/community-sidechain"},"Encointer Sidechain"))),(0,i.kt)("p",null,"Github accounts of the team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/masapr"},"https://github.com/masapr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/haerdib"},"https://github.com/haerdib")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/echevrier"},"https://github.com/echevrier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Niederb"},"https://github.com/Niederb"))),(0,i.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/sabine-proll-5a7118153"},"https://www.linkedin.com/in/sabine-proll-5a7118153")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/bigna-h%C3%A4rdi-736bb21a9"},"https://www.linkedin.com/in/bigna-h%C3%A4rdi-736bb21a9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/edith-chevrier-90233297"},"https://www.linkedin.com/in/edith-chevrier-90233297")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/thomas-niederberger-6057b71a7"},"https://www.linkedin.com/in/thomas-niederberger-6057b71a7"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"We will base our work on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookexperimental/MIRAI"},"MIRAI")," and the RFP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/Static-Analysis-for-Runtime-Pallets.md"},"Static Analysis for Runtime Pallets")),(0,i.kt)("p",null,"We have not started to work on this."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 0,5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 0,8 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 10.000 USD")),(0,i.kt)("h4",{id:"vulnerability-classes"},"Vulnerability Classes"),(0,i.kt)("p",null,"For this project we want to address the following vulnerability classes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/incorrect-origin/description.md"},"incorrect origin")," of dispatchable functions. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/unsigned-transaction/description.md"},"unsigned transaction")," validation.")),(0,i.kt)("h3",{id:"milestone-1---research"},"Milestone 1 - Research"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 0,5 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 0,8 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 10.000 USD")),(0,i.kt)("p",null,"In milestone 1 we want to investigate how the above stated ",(0,i.kt)("a",{parentName:"p",href:"#vulnerability-classes"},"vulnerability classes"),", can be detected by extending MIRAI. "),(0,i.kt)("h4",{id:"deliverables"},"Deliverables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"MIT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"User Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how to use the tool on a substrate pallet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"A first set of tests will be provided, together with a testing guide, that describes how to run them.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Prototype Code"),(0,i.kt)("td",{parentName:"tr",align:null},"Prototype code to approach the above two stated vulnerability classes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Technical documentation ",(0,i.kt)("ul",null,(0,i.kt)("li",null,"describing the approach we plan to implement in milestone 2, incl. its limitations. "),(0,i.kt)("li",null,"with (interesting) examples of the vulnerability classes.")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Engagement"),(0,i.kt)("td",{parentName:"tr",align:null},"Engage with teams at Web3 Foundation and Parity for prioritization.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"The next steps for the tool would be to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Implement a first simple version of the tool, together with tests and documentation. "),(0,i.kt)("li",{parentName:"ol"},"Improve the usability, by providing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"means to surpress warnings"),(0,i.kt)("li",{parentName:"ul"},"a comprehensive user tutorial, incl. documentation on the risks of each vulnerability"))),(0,i.kt)("li",{parentName:"ol"},"Add more features including checks on the following vulnerability classes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"tracking bad randomness: ensure bad randomness does not leak into sensitive functions."),(0,i.kt)("li",{parentName:"ul"},"detect panics statically to avoid potential DoS attacks: these include ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bhargavbh/MIRAI/blob/main/substrate_examples/arithmetic-overflow/description.md"},"unsafe arithmetic operations"),", access outside bounds, assertion failures, etc."),(0,i.kt)("li",{parentName:"ul"},"tracking unsanitised input leakage for sensitive functions.")))),(0,i.kt)("p",null,"Once we have a tool with a good feature set and basic usability features, we want to promote it to the Polkadot developers. Once the tool is in use, we hope to receive feedback on further features and improvements by the developers."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nWe have previously received grants by the Web3 Foundation for other projects (substratee and substrate-api-client)."))}c.isMDXComponent=!0}}]);