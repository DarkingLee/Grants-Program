"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8602],{44711:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},r="High-availability validator setup",o={unversionedId:"applications/High_availability_validator_setup",id:"applications/High_availability_validator_setup",title:"High-availability validator setup",description:"- Team Name: Bright Inventions",source:"@site/applications/High_availability_validator_setup.md",sourceDirName:"applications",slug:"/applications/High_availability_validator_setup",permalink:"/applications/High_availability_validator_setup",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/High_availability_validator_setup.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2},{value:"Milestone 1 - Block authoring, finalization  &amp; liveness PoC",id:"milestone-1---block-authoring-finalization---liveness-poc",level:3},{value:"Milestone 2 - External service for permission granting",id:"milestone-2---external-service-for-permission-granting",level:3},{value:"Milestone 3 - Raft based current leader selection",id:"milestone-3---raft-based-current-leader-selection",level:3},{value:"Leader selection process",id:"leader-selection-process",level:4}],p={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"high-availability-validator-setup"},"High-availability validator setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Bright Inventions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xD75dDC4Aa3618e1417c68E5Df79ef9D66E4B1Ed9, DAI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":"),"  2 ")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"Validator leader selection via Raft consensus.\nThis is a follow-up to the previous version of the grant, that was up for discussion with the Parity development team. "),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Currently, the recommended setup is to have one active node per validator. The main advantage of this approach is that it removes the danger of equivocation, thus preventing slashing. The key drawback is the lack of a ready backup machine to takeover the responsibility of producing blocks, voting on finality etc. in case the primary one fails. "),(0,i.kt)("p",null,"The drawback can be somewhat remedied by having a backup node in sync, but without access to the session keys necessary for authoring blocks. The process of replacing the keys, however, is manual. Furthermore, the session keys cannot be replaced mid-session and this introduces a time delay for when the validator is active again."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Rather than relying on one validator node to perform the work, what if we had multiple nodes equally capable of taking part in consensus, yet still avoiding the risk of equivocation?"),(0,i.kt)("p",null,"Since all our validator nodes are trusted and we don't worry about censorship resistance, we can leverage a leader-follower model to ensure high availibility. ",(0,i.kt)("a",{parentName:"p",href:"https://raft.github.io/"},"Raft")," is a good candidate - it offers a simple consensus mechanism, fault-tolerance and performance. It ensures only one leader is ever in charge of interacting with the network, while the followers simply receive the state updates and automatically replace the leader in case of a failure."),(0,i.kt)("p",null,"Following the feedback from the Parity developers team our solution is not tightly coupled with Substrate node as it adds too much complexity in the node. It should be implemented in a way that makes this optional and loosely coupled with the node. "),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"The goal is to present a solution that would update the current recommended setup of one active node per validator and allow to use multiple nodes."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Katarzyna \u0141ukasiewicz"),(0,i.kt)("li",{parentName:"ul"},"Kasper Ziemianek"),(0,i.kt)("li",{parentName:"ul"},"Micha\u0142 Grali\u0144ski")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Katarzyna \u0141ukasiewicz"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:katarzyna.lukasiewicz@brightinventions.pl"},"katarzyna.lukasiewicz@brightinventions.pl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://brightinventions.pl/"},"https://brightinventions.pl/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," ul. Jana Matejki 12, 80-232 Gda\u0144sk, Poland"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Bright Inventions Sp. z o. o.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"Bright Inventions is a team of over 70 full-time onsite developers, project managers & UX/UI designers - experts in mobile and web applications, systems integration, IOT devices and Blockchain platforms."),(0,i.kt)("p",null,"We believe that building a software product is about people working together in a collective way. By offering complex support \u2013 mobile and web development as well as IT consultancy we try to eliminate roadblocks towards engaging clients as partners at every step of the process."),(0,i.kt)("p",null,"We support startups, digital agencies as well as medium to big businesses. We cooperate with startups, accelerators and incubators. Whatever the client profile is, we always aim to establish a satisfying partnership for both sides. Since 2012 we have built software for more than 40 businesses worldwide."),(0,i.kt)("p",null,"The team: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Micha\u0142 - Rust Developer, for over 12 years he has been working as a C++ developer. In his career he participate in various projects, starting from the embedded devices, automotive, mobile games and ending on the financial systems. Right now he is focused on the blockchain technology."),(0,i.kt)("li",{parentName:"ul"},"Kasper - Software developer with 10 years of experience. Former Java Developer who has recently switched to Rust. Around blockchain ecosystem since 2017."),(0,i.kt)("li",{parentName:"ul"},"Kasia - she has been working with agile methods for over 10 years, both as a researcher and a practitioner. She believes in teamwork and a power of user centered mindset. With experience in leading international projects, she knows how to support and encourage timely and high quality deliveries.")),(0,i.kt)("p",null,"Previous grants that the team members were involved in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BrightTreasury"),(0,i.kt)("li",{parentName:"ul"},"ZK-Snarks tutorial in Substrate")),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bright/substrate"},"https://github.com/bright/substrate"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bufta"},"https://github.com/bufta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kziemianek"},"https://github.com/kziemianek")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mgralinski-bright"},"https://github.com/mgralinski-bright"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/katarzyna-%C5%82ukasiewicz-b473901aa/"},"https://www.linkedin.com/in/katarzyna-\u0142ukasiewicz-b473901aa/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/kziemianek/"},"https://www.linkedin.com/in/kziemianek/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/michal-gralinski-b464152/"},"https://www.linkedin.com/in/michal-gralinski-b464152/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"This grant proposal is a follow-up to a discussion that began in autumn 2022. Since then we managed to receive some required feedback from Parity development team and we continued to apply their suggestions in the span of these few months. It allowed us to already develop most of the original scope. "),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"The development of the specified goal will be broken into 3 milestones, lasting 4 weeks (M1), 3 weeks (M2) and 2 weeks (M3)."),(0,i.kt)("p",null,"Definition of Done for each deliverable:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Unit tests passed"),(0,i.kt)("li",null,"Code has been reviewed by peer"),(0,i.kt)("li",null,"Acceptance criteria were met"),(0,i.kt)("li",null,"Internal QA has been performed"),(0,i.kt)("li",null,"Documentation has been written")),(0,i.kt)("p",null,"At the end of each milestone:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The deliverables listed for the given milestone have been implemented and the DoD criteria were met, allowing the user to perform the defined actions"),(0,i.kt)("li",{parentName:"ul"},"The functioning code has been pushed to the public repository, indicated in the proposal")),(0,i.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 9 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 25,000 DAI")),(0,i.kt)("h3",{id:"milestone-1---block-authoring-finalization---liveness-poc"},"Milestone 1 - Block authoring, finalization  & liveness PoC"),(0,i.kt)("p",null,"The goal of the first milestone will be adding a switch to the substrate codebase, which will conditionally allow block production, voting or sending ",(0,i.kt)("inlineCode",{parentName:"p"},"I'm online")," message. We will achieve this by introducing a ",(0,i.kt)("inlineCode",{parentName:"p"},"PermissionResolver")," trait. Only for the purpose of this milestone there are going to be two trivial implantations of this trait. First configuration will grant the validator permissions and the second one will not. At this stage we only want to verify if hardcoded conditional logic works well with the nodes with the same auth key but different configurations (permission granted/denied). For the testing purpose we will provide an additional option to the CLI, to run a validator with one of the pointed configurations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 12,500 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide unit tests and the guidelines for running and testing it the scope.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Update substrate"),(0,i.kt)("td",{parentName:"tr",align:null},"Modify the substrate code to conditionally submit blocks/votes for finalised blocks (GRANDPA)/",(0,i.kt)("inlineCode",{parentName:"td"},"I'm online")," messages.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Update substrate client - cli"),(0,i.kt)("td",{parentName:"tr",align:null},"Modify the substrate code to conditionally grant or permit permissions. There will be option to run node in permission granted or permission denied mode). It will be useful to prove that permissioning works by running two nodes with same auth keys but different modes (permission granted/denied)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Integration test"),(0,i.kt)("td",{parentName:"tr",align:null},"A dockerised setup that allows to run network in setup described above.")))),(0,i.kt)("h3",{id:"milestone-2---external-service-for-permission-granting"},"Milestone 2 - External service for permission granting"),(0,i.kt)("p",null,"The second milestone introduces a microservice which will test dynamic switching of the permission granting, during the validator's work. We will be able to test permission granting triggered whenever the block is produced, the vote is made on the finalized block (GRANDPA) and a message (",(0,i.kt)("inlineCode",{parentName:"p"},"I'm online"),") is sent for communicating liveness. Only the leader validator will be granted to run those actions. At worst, the author may miss a slot."),(0,i.kt)("p",null,"The service should contain only basic logic (e.g. return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for node that asked first and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," for following ones)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 7,500 DAI")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide unit tests and the guidelines for running and testing it the scope.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Basic service"),(0,i.kt)("td",{parentName:"tr",align:null},"Create a microservice that accepts connections from the node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Getting permission from microservice"),(0,i.kt)("td",{parentName:"tr",align:null},"Set up a custom node repository and write the ",(0,i.kt)("inlineCode",{parentName:"td"},"PermissionResolver")," trait implementation for getting permission from the microservice.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Allow as optional"),(0,i.kt)("td",{parentName:"tr",align:null},"The choice of using an outside decision making agent for block submission should be configurable in the cli.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Clean up substrate code"),(0,i.kt)("td",{parentName:"tr",align:null},"Remove deprecated cli options.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Integration test"),(0,i.kt)("td",{parentName:"tr",align:null},"A dockerized setup that allows to run custom node networks and a microservice in order to show that the created solution works.")))),(0,i.kt)("h3",{id:"milestone-3---raft-based-current-leader-selection"},"Milestone 3 - Raft based current leader selection"),(0,i.kt)("p",null,"Replace the dummy microservice as an infrastructure component with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tikv/tikv"},"TiKV")," cluster used for leader selection.\nEach node should try to get authorship permission based on the KV (Key-value) state. Replace the current microservice client with a TiKV client and add corresponding logic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide unit tests and the guidelines for running and testing it the scope.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Run the necessary Raft services"),(0,i.kt)("td",{parentName:"tr",align:null},"Set up a local dev infrastructure to run TiKV components in order to provide a distributed KV store.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Integrate a Raft client into the node"),(0,i.kt)("td",{parentName:"tr",align:null},"Replace the previous logic with a TiKV based one and modify configs to allow the TiKV client to connect to Placement Drivers. Placement Drivers (PD) is one of the components which stores metadata for the entire TiKV cluster. It is responsible for sending commands to the TiKV nodes. The minimum setup for PD is to manage three TiKV nodes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Integration test"),(0,i.kt)("td",{parentName:"tr",align:null},"A dockerised setup that allows to test the Raft consensus mechanism.")))),(0,i.kt)("h4",{id:"leader-selection-process"},"Leader selection process"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ummEJOK.png",alt:null}),"\nSimilar for rounds and sessions."))}u.isMDXComponent=!0}}]);