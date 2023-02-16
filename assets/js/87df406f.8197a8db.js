"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6870],{23059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={},i="Open Node Framework",o={unversionedId:"applications/open-node-framework",id:"applications/open-node-framework",title:"Open Node Framework",description:"Team Name:* Phala Network",source:"@site/docs/applications/open-node-framework.md",sourceDirName:"applications",slug:"/applications/open-node-framework",permalink:"/Grants-Program/applications/open-node-framework",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Basic features and operating security improvement",id:"milestone-1---basic-features-and-operating-security-improvement",level:3},{value:"Milestone 2 \u2014 Advanced Features",id:"milestone-2--advanced-features",level:3},{value:"Future Plans",id:"future-plans",level:2}],d={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"open-node-framework"},"Open Node Framework"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Phala Network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," DAI at 0x50DC97D0345d61B4D096e15313d50b6506972e5F"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/334#issuecomment-1168505655"},"Terminated"))),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open Node Framework")," is an end-to-end DevOps (SRE) solution to deploy a Substrate node network for staking and other purposes. It's designed to address high availability, scalability, and flexibility, using the modern technology stack."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"While developing a Substrate based parachain, we found it challenging to operate and maintain different types of nodes. Validators and collators require high availability and key security. Bootnodes and RPC nodes require high performance and flexible scalability. So Open Node Framework has the following design purpose:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parachain first: Focus on the requirement of parachains"),(0,r.kt)("li",{parentName:"ul"},"Flexibility: Integrate with any Substrate based blockchain easily"),(0,r.kt)("li",{parentName:"ul"},"Multipurpose: Run validators, collators, full nodes, bootstrap nodes, or RPC nodes"),(0,r.kt)("li",{parentName:"ul"},"High Availability: Add redundancy to nodes (validators & collators) for higher security and robustness")),(0,r.kt)("p",null,"There are a few existing projects that can partially meet the above requirements. Among them, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-deployer"},"Polkadot Deployer")," is a k8s-based network deployment and monitoring tool. However, it's mainly designed for bootstraping and operating a full Polkadot, which may not meet the typical requirement of running a parachain. Therefore we think it's a good idea to iterate on it and make it parachain ready and address the features mentioned above."),(0,r.kt)("p",null,"Tere are other interesting projects as well. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-secure-validator"},"Polkadot Secure Validator")," implements a validator setup for Polkadot and Kusama coming with a monitoring system ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ironoa/polkadot-k8s-monitor"},"Polkadot K8s Monitor"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gantree-io/"},"Gantree")," is a W3F Grant funded Substrate DevOps framework supporting customized Substrate node. However it lacks the support of node HA, and like the other two projects, doesn't support cross-datacenter deployment, and is not built on modern Kubernetes stack."),(0,r.kt)("p",null,"Open Node Framework wants to feature:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi IT infrastructure",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Native Kubernetes architecture"),(0,r.kt)("li",{parentName:"ul"},"Cross-datacenter / cloud providers deployment with a central dashboard for daily management"),(0,r.kt)("li",{parentName:"ul"},"Support multiple cloud providers with Terraform"),(0,r.kt)("li",{parentName:"ul"},"Scale up to a large node network easily"))),(0,r.kt)("li",{parentName:"ul"},"High availability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Upgradable node binary"),(0,r.kt)("li",{parentName:"ul"},"Blockchain database backup and recovery"),(0,r.kt)("li",{parentName:"ul"},"DDoS mitigation"),(0,r.kt)("li",{parentName:"ul"},"Collator and validator redundancy"))),(0,r.kt)("li",{parentName:"ul"},"Hardened security",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ops jump servers / VPN behind a firewall"),(0,r.kt)("li",{parentName:"ul"},"RPC authentication"))),(0,r.kt)("li",{parentName:"ul"},"Monitoring",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dashboard and data visualization with Prometheus and Graphana"),(0,r.kt)("li",{parentName:"ul"},"Grafana / Loki stack for metrics, logging, tracing"))),(0,r.kt)("li",{parentName:"ul"},"Flexible node integration",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replacible Docker images for node binaries")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/VeoV3Oh.png",alt:null})),(0,r.kt)("p",null,"Open Node Framework has its MVP implementaion availabe at our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Tenet-X/open-node"},"Github Repo"),". It implemented a basic infrastructure as shown in the above diagram. The components are deployed in a Kubernetes cluster with the binaries defined by Docker images. It supports both Terraform and Google GKE deployment, and it has been tested on Polkadot and Phala Network testnets."),(0,r.kt)("p",null,"In this grant, we are going to expand Open Node Framework in aspects:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Switch the code base to a fork of w3f/polkadot-deployer"),(0,r.kt)("li",{parentName:"ol"},"Enable parachain and 3rd party binary config"),(0,r.kt)("li",{parentName:"ol"},"Cross-datacenter deployment with a central place to manage and view the dashboard"),(0,r.kt)("li",{parentName:"ol"},"HA collator validator setup")),(0,r.kt)("p",null,"We are interested in the following areas but want to leave them for future work:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Secure Enclave protected Key Management Service"),(0,r.kt)("li",{parentName:"ol"},"Integrate with indexing tools like SubQuery"),(0,r.kt)("li",{parentName:"ol"},"Comprehensive UI for the end users")),(0,r.kt)("p",null,"Open Node Framework doesn't aim to build everything from scratch. We prefer to utilize the existing open source tools and potentially contribute to them. We plan to work on a fork of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-deployer"},"Polkadot Deployer"),", and contribute it to the upstream if possible."),(0,r.kt)("p",null,"The other building block candidates are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Raft-based validator availablity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Consul validator failover: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/protofire/polkadot-failover-mechanism"},"protofire/polkadot-failover-mechanism")))),(0,r.kt)("li",{parentName:"ul"},"Monitoring dashboard",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ironoa/polkadot-k8s-monitor"},"ironoa/polkadot-k8s-monitor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"SimplyVC/panic_polkadot")))),(0,r.kt)("li",{parentName:"ul"},"API Serving",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Joystream/hydra"},"Joystream/hydra")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/subquery/subql"},"subquery/subql")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/insight-w3f/terragrunt-polkadot"},"insight-w3f/terragrunt-polkadot"))))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Open Node Framework provides the infrastructure to deploy any Substrate based parachain or standalone blockchain for multiple purposes, including running a bootstrap network, a validator cluster, a full node RPC service network, or a temporary simulation network for experiments, with all the essential infrastructure. It allows other Substrate blockchains to integrate with it easily."),(0,r.kt)("p",null,"The project serves standalone the Substrate blockchain, parachain, and relay chain operators, offering them a flexible and user-friendly infrastructure framework with production best practice."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hang Yin: Lead & Software Engineer"),(0,r.kt)("li",{parentName:"ul"},"Jun Jiang: Project Manager & Software Architect")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Hang Yin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:hangyin@phala.network"},"hangyin@phala.network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://phala.network"},"https://phala.network"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 3 FRASER STREET #05-25 DUO TOWER SINGAPORE (189352)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," HASHFOREST TECHNOLOGY PTE. LTD.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Open Node Framework is an open source project initiated by core members of ",(0,r.kt)("a",{parentName:"p",href:"https://phala.network"},"Phala Network")," and other contributors. Phala Network is a confidentiality layer for Polkadot that provides general purpose confidential smart contract to parachains on Polkadot and Kusama. The Phala team got two W3F General Grants: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/pLIBRA.md"},"pDiem")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/web3_analytics.md"},"Web3 Analytics"),". Phala has launched 3 testnets and got 1200+ nodes and 2600+ registered miners."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Node development repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Phala-Network/open-node-deployer"},"https://github.com/Phala-Network/open-node-deployer")),(0,r.kt)("li",{parentName:"ul"},"Open Node MVP: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Tenet-X"},"https://github.com/Tenet-X")),(0,r.kt)("li",{parentName:"ul"},"Phala Network team repo: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Phala-Network"},"https://github.com/Phala-Network"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hang-yin-167012a7/"},"https://www.linkedin.com/in/hang-yin-167012a7/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jun-jiang-5b9b4153/"},"https://www.linkedin.com/in/jun-jiang-5b9b4153/"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"The MVP of Open Node Framework is available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Tenet-X"},"Github")," but we are going to switch to build on polkadot-deployer ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Phala-Network/open-node-deployer"},"on our fork")," instead. Please see ",(0,r.kt)("a",{parentName:"p",href:"#Project-Details"},"Project Details"),"."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  2 FTE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 22,000 USD")),(0,r.kt)("p",null,"In the milestone deliverable table, the features marked with ",(0,r.kt)("em",{parentName:"p"},'"(addition)"')," means add-on feature to the upstrea polkadot-deployer, and ",(0,r.kt)("em",{parentName:"p"},'"(integration)"')," means some changes in the upstream are required."),(0,r.kt)("h3",{id:"milestone-1---basic-features-and-operating-security-improvement"},"Milestone 1 - Basic features and operating security improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 months (ETA: Mar 15, 2022)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Design docs including the architecture of the system and the design choices (including which open source projects to integrate). Inline documentation of the config files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"A guide describing how to run the tests covering the cases in 0b.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish a tutorial and an workshop that explains how the project can be used to deploy different types of blockchain network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Parachain support"),(0,r.kt)("td",{parentName:"tr",align:null},"Add parachain config support. (addition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Substrate support"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable custom Substrate blockchain integration with the example configs to integrate with Substrate sample node (substrate/node/cli) (addition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Operating scripts"),(0,r.kt)("td",{parentName:"tr",align:null},"Apply the declarative configs to: scale up / down the nodes (addition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring, and logging"),(0,r.kt)("td",{parentName:"tr",align:null},"Implement the monitoring infrastructure with Prometheus and Loki to collect metrics and logs. (integration)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Grey release"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with CI/CD pipeline and enable greyscale release inside the cluster. (addition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"More deployment modes"),(0,r.kt)("td",{parentName:"tr",align:null},"Templates to deploy bootstrap nodes, API nodes, and simulation network. (addition)")))),(0,r.kt)("h3",{id:"milestone-2--advanced-features"},"Milestone 2 \u2014 Advanced Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1.5 month (ETA: Apr 30, 2022)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  4"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 12,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide high availability and session key management design docs, inline documentation of the config files and a basic tutorial that explains how to add HA setup, backup nodes, and alerts to the basic configurations as in M1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"A guide describing how to run the tests covering the cases in 0b.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"We will extend the workshop to show how to deploy a hardened node network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Backup node and recovery"),(0,r.kt)("td",{parentName:"tr",align:null},"Add sync node type and database backup & recovery routines. Add scripts to trigger and minotor the process. (addition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Session key management"),(0,r.kt)("td",{parentName:"tr",align:null},"Add the script to interact with the node and the blockchain to generate and rotate the session keys, and add routines to migrate keys between validators and collators (or mount the keystore db to the assigned validators) (addition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Alerts"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the collator / validator related warnings and metrics from Prometheus and Loki and add them to the alerm manager. (integration)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"HPA scaling"),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically scale the storage and the size of the cluster based on load of the nodes. (addition)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Authenticated RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"Add the authentication layer to the node RPC for node operation (integration)")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Besides the future work we described in ",(0,r.kt)("a",{parentName:"p",href:"#Project-Details"},"Project Details"),", the general plan is to make Open Node Framework an open and friendly open source project, lowering the barrier for Susbstrate developers to run their network. So we intend to use the project as a start point to build a developer community, and attract more contributors to sustain it."))}u.isMDXComponent=!0}}]);