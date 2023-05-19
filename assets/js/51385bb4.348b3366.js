"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8264],{92503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},r="Fennel Protocol",o={unversionedId:"applications/Fennel_Protocol",id:"applications/Fennel_Protocol",title:"Fennel Protocol",description:"- Team Name: Fennel Labs",source:"@site/applications/Fennel_Protocol.md",sourceDirName:"applications",slug:"/applications/Fennel_Protocol",permalink:"/applications/Fennel_Protocol",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/Fennel_Protocol.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Sean Batzel",id:"sean-batzel",level:4},{value:"Isaac Adams",id:"isaac-adams",level:4},{value:"Andre Vanoncini",id:"andre-vanoncini",level:4},{value:"Fernando Fonseca-Avalos",id:"fernando-fonseca-avalos",level:4},{value:"Mateusz Plaza",id:"mateusz-plaza",level:4},{value:"Jan Eberle",id:"jan-eberle",level:4},{value:"Advisors",id:"advisors",level:4},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Whiteflag Section 2.5: Minimally Viable Implementation:",id:"whiteflag-section-25-minimally-viable-implementation",level:4},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Substrate Modules",id:"milestone-1--implement-substrate-modules",level:3},{value:"Milestone 2 \u2014 Additional features",id:"milestone-2--additional-features",level:3},{value:"Milestone 3 \u2014 Additional features",id:"milestone-3--additional-features",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fennel-protocol"},"Fennel Protocol"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Fennel Labs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0xF505894841d53AaBDe6EdeA7C5970fFe3A0240b2 (DAI)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Fennel Labs and Whiteflag Foundation aim to improve the ways that organizations communicate with each other in calamitous situations and austere environments where coordination and deconfliction is vital."),(0,i.kt)("p",null,"This grant proposal describes the first step of a long-term plan to develop Fennel Protocol, a Substrate chain that will provide the Polkadot ecosystem with the Whiteflag Protocol specification, an open standard for a neutral and trusted messaging network based on blockchain technology."),(0,i.kt)("p",null,"The background of the Whiteflag specification is as follows:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Current armed conflicts are highly complex, because of the sheer number of parties involved: regular military forces, armed groups, peacekeeping forces, neutral parties such as journalists and non-governmental human-rights and aid organisations, civilians, refugees etc. Even though parties are opposing forces, or neutral organisations that do not want to show any affiliation, they do require to quickly and directly communicate to one or more other parties involved in the conflict in different situations."),(0,i.kt)("br",null)," ",(0,i.kt)("br",null)," This is not new. The white flag is the original internationally recognized protective sign of truce or ceasefire, and request for negotiation. A white flag signifies to all that an approaching negotiator is unarmed, with an intent to surrender or a desire to communicate.",(0,i.kt)("br",null)," ",(0,i.kt)("br",null)," This standard for a digital white flag protocol, the Whiteflag Protocol, provides a reliable means for both combatant and neutral parties in conflict zones to digitally communicate pre-defined signs and signals using blockchain technology. These sign and signals can also be used to communicate information about natural and man-made disasters, thus creating shared situational awareness beyond conflicts.",(0,i.kt)("br",null)," ",(0,i.kt)("br",null),"  All in all, the protocol forms the basis for a neutral and open network, the Whiteflag Network, for trusted real-time messaging between parties in conflicts and disaster response."),(0,i.kt)("p",null,"One can find more details about the Whiteflag Protocol specification by clicking on these links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://standard.whiteflagprotocol.org/"},"Protocol Specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.whiteflagprotocol.org/"},"Whiteflag Website"))),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,"Fennel Protocol will be a blockchain implementing the protocol outlined in our specification documents.\nAs such, the interface will be exposed through Substrate extrinsics, callable through normal RPC execution.\nThe protocol implementation itself will ship as a standard Substrate executable node.\nDocker will be used to generate consistent testing environments, and Github Actions will provide continuous revision checking against a set of tests defined during the development process."),(0,i.kt)("p",null,"The Protocol will consist of 3 Runtime Modules - ",(0,i.kt)("inlineCode",{parentName:"p"},"fennel_trust_pallet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fennel_keystore_pallet"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"fennel-signal"),".\nDocumentation for the in-progress development of these modules is located on ",(0,i.kt)("a",{parentName:"p",href:"https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html"},"GitHub")," and is refreshed as changes are accepted into the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch of the source repository.\nThe high-level project specification is located on ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/fennelLabs/Fennel-Protocol-Paper/master/Paper.pdf"},"Github")," as well and is available as a PDF."),(0,i.kt)("p",null,"For exact specifications of storage, events, and extrinsics definitions, visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://fennellabs.com/Fennel-Protocol/doc/pallet_keystore/pallet/struct.Pallet.html"},"pallet-keystore"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://fennellabs.com/Fennel-Protocol/doc/pallet_trust/pallet/struct.Pallet.html"},"pallet-trust"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://fennellabs.com/Fennel-Protocol/doc/pallet_signal/pallet/struct.Pallet.html"},"pallet-signal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://fennellabs.com/Fennel-Protocol/doc/pallet_fennel_identity/pallet/struct.Pallet.html"},"pallet-fennel-identity")))),(0,i.kt)("p",null,"A proof-of-concept for the basic functionality of Fennel Protocol was completed as the winning entry to the Conflict Prevention track of the Odyssey Momentum Hackathon in 2020, under the name Theriak.\nThe repository for that project is located on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fennelLabs/Theriak"},"GitHub"),".\nThe features for this proof-of-concept included key management, basic trust operations, and a simple, preliminary version of the signaling mechanism."),(0,i.kt)("p",null,"Fennel Protocol is not a user-facing application.\nThough applications are planned, they are beyond scope for this proposal."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/arch-overview.png",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/detailed-arch.png",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/sequence_diagram.svg",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/component_diagram.svg",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/keytosignal.png",alt:"img"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/fennelLabs/FennelBlog/master/Whiteflag_on_Fennel.png",alt:"img"})),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sean Batzel"),(0,i.kt)("li",{parentName:"ul"},"Isaac Adams"),(0,i.kt)("li",{parentName:"ul"},"Andre Vanoncini"),(0,i.kt)("li",{parentName:"ul"},"Fernando Fonseca-Avalos"),(0,i.kt)("li",{parentName:"ul"},"Mateusz Plaza"),(0,i.kt)("li",{parentName:"ul"},"Jan Eberle")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Fennel Labs Core Team"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:info@fennellabs.com"},"info@fennellabs.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"http://www.fennellabs.com"},"www.fennellabs.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," 1309 Coffeen Avenue Suite 1200, Sheridan, Wyoming 82801"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Fennel Labs, LLC.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("h4",{id:"sean-batzel"},"Sean Batzel"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Development Team co-lead for Theriak, a project which won the 2020 Odyssey Momentum hackathon's Conflict Prevention track.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 years as lead and only developer of fEMR OnChain, a modular EMR software targeting eventual decentralization.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"10 years of programming and software development experience")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"5 years of experience as lead/primary developer on expansive projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 years experience in remote development team coordination")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Graduate-level research experience studying blockchain\u2019s uses in high-level information networks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dedicated focus on exploring use cases for blockchain and decentralized consensus beyond cryptocurrency and fusing Web 2 and Web 3 applications in a way that eases the industry\u2019s transition to more decentralized computing"))),(0,i.kt)("h4",{id:"isaac-adams"},"Isaac Adams"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Succesfully launched ",(0,i.kt)("a",{parentName:"p",href:"https://savvi.com"},"savvi")," as tech lead and developed the jwt authentication, sign in/out, cart, and checkout features on the application while helping manage other developers working on the project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open source contributions: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harmony-one/sdk/pull/82"},"added missing rpc method")," to harmony-one blockchain's npm package, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/parcel-bundler/parcel/pull/4397"},"json ld transformer")," for parcel v2, and extending usage of action-download-artifact to support the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dawidd6/action-download-artifact/pull/55"},"github.ref variable"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Published author for ",(0,i.kt)("a",{parentName:"p",href:"https://www.mdpi.com/2571-6182/1/1/1"},"research")," on the degradation of antibiotics using a plasma apparatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"4 years of experience development experience on a wide range of projects, including web applications built using react/angular|.net core|SQL, labview applications for lab experiments, and devops/cloud operations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1 year of experience of being tech lead on two successfully launched web projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Graduated from Drexel University with a B.S. in Chemical Engineering"))),(0,i.kt)("h4",{id:"andre-vanoncini"},"Andre Vanoncini"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Working with the Google Tango tablet for my master thesis (C++, first in depth steps for me with git and linux)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Developing and implementing a focussing tool and process in C++ with Qt QML GUI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Getting Inference working with libtorch (C++) and JNI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Understanding compilation of C++ with cmake and being able to compile on the command line instead of the green play buttons"))),(0,i.kt)("h4",{id:"fernando-fonseca-avalos"},"Fernando Fonseca-Avalos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Experience with C/C++, Python, JavaScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Developing proficiency with Rust."))),(0,i.kt)("h4",{id:"mateusz-plaza"},"Mateusz Plaza"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Captain for Theriak, a project which won the 2020 Odyssey Momentum hackathon's Conflict Prevention track.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"8 years of experience working in high performance medical units")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 years of experience leading medical humanitarian teams in Central America")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2012 Fulbright Research Fellow: completed research project on Poland's Solidarity Movement, exploring methods of self-organization and coordination of social movements that leverage symbols as a form of empowerment and that resist the threat of disinformation/active measures/propaganda.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Published blockchain researcher, with a focus on the epistemic significance of decentralized blockchain ledgers, especially in terms of Self Sovereign Identity, Decentralized Autonomous Organization, and AI Ontology."))),(0,i.kt)("h4",{id:"jan-eberle"},"Jan Eberle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Experience distinguishing misinformation, disinformation, and combatting the infodemic as a Media Analyst")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Strong communications & usability experience from linguistic studies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Writing documents for different channels/audiences as a technical writer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Practical peace keeping experience as a swiss guard in the Vatican"))),(0,i.kt)("h4",{id:"advisors"},"Advisors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Andrew Plaza")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Zbigniew Zielinski"))),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Romulus10"},"https://github.com/Romulus10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/isaacadams"},"https://github.com/isaacadams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vanandre"},"https://github.com/vanandre")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fennelLabs"},"https://github.com/fennelLabs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Romulus10/infostratus"},"https://github.com/Romulus10/infostratus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Romulus10/blockchain_message"},"https://github.com/Romulus10/blockchain_message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fennelLabs/Theriak"},"https://github.com/fennelLabs/Theriak"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/seanbatzel/"},"https://www.linkedin.com/in/seanbatzel/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/mateusz-p-6b126424/"},"https://www.linkedin.com/in/mateusz-p-6b126424/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jan-eberle-553110195/"},"https://www.linkedin.com/in/jan-eberle-553110195/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/fernando-fonseca-avalos-a0a516224/"},"https://www.linkedin.com/in/fernando-fonseca-avalos-a0a516224/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/andreva/"},"https://www.linkedin.com/in/andreva/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/isaacdadams/"},"https://www.linkedin.com/in/isaacdadams/"))),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"Fennel Protocol's key and identity management functionality is fine-tuned for decentralized communication that makes use of pre-defined signals and signs;\nfor example, the Whiteflag specification uses predefined signals and signs derived from International Humanitarian Law, the CRED Disaster Category Classification, and the OECD Economic Infrastructure Common Reporting Standard Codes.\nFuture proposals will build up Fennel Protocol to accomodate the full extent of the Whiteflag Protocol specification.\nSubstrate's interoperability will provide the Polkadot ecosystem with a shared conception of Whiteflag Protocol's predefined signals and signs;\nthis will allow users to seemlessly send Whiteflag messages across the decentralized Polkadot ecosystem. Critically, an interoperable Whiteflag Network ensures situational awareness is not siloed but is unified in critical use cases. This helps decision makers receive a full picture of the field of operations."),(0,i.kt)("h4",{id:"whiteflag-section-25-minimally-viable-implementation"},"Whiteflag Section 2.5: Minimally Viable Implementation:"),(0,i.kt)("p",null,"Fennel Protocol will implement the minimally viable implementation of the Whiteflag functionality that allows for the sending of Whiteflag messages.\nWe will implement further components of Whiteflag in further proposals. Whiteflag section 2.5 states: any implementation of the Whiteflag Protocol that sends messages on the Whiteflag Network, must implement at a minimum the following functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The Whiteflag Authentication message with at least one authentication option. At release, both Shared Secret and External Resource Authentication will be fully supported.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The possibility to Recall, Update and Discontinue (Whiteflag Reference Codes 1, 2 and 4) any implemented sign or signal, if such Reference Type is valid i.a.w. Reference options. These will be implemented as low-level Fennel messages through the Sign extrinsic call, effectively creating a specialized transaction subtype for each of these."))),(0,i.kt)("p",null,"Fennel Protocol will provide the Substrate infrastructure for two authentication methodologies that abide by Whiteflag Protocol\u2019s specification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Method 1, External Resource Authentication: requires the user to declare their identity in some public and trusted place which can be referenced in their activities. This often requires a strong proof, such as a cryptographic signature and public key declaration, that can be verified to prove that a transaction comes from the identity declared.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Method 2, Shared Secret Authentication:  requires an end user to establish a token known only to themselves and some authentication authority, similar to a password in more Web 2.0-oriented authentication."))),(0,i.kt)("p",null,"Fennel Protocol will support both of these authentication mechanisms at launch, with shared secrets covered by our encrypted channel mechanism and external resources declared and submitted as public transactions through the Identity Update extrinsic."),(0,i.kt)("p",null,"In terms of a target audience, we have a small established userbase waiting for this protocol to be prepared for launch.\nThis proposal will set the stage for a greater effort to empower developers to build decentralized applications that allow users to transmit authentic, secure, and timely real-time messages based on pre-defined signals and signs.\nMost importantly, we hope this effort will support decision makers working in critical environments in need of such communication, such as first responders, medical professionals, pharmacovigilance scientists, and investigative journalists."),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"The Fennel Protocol source respository is located at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fennelLabs/Fennel-Protocol"},"https://github.com/fennelLabs/Fennel-Protocol"),".\nIncluded is the runtime structure for a Substrate node and references to the three main submodules that will implement Fennel Protocol's core functionalities.\nThe most recent version of this is an updated version of the Theriak project's core functionality, ported to the most recent version of Substrate at the time of writing.\nAny blockchain components will be implemented in Rust, with the initial implementations of chain-parallel components written in Python."),(0,i.kt)("p",null,"The initial Whiteflag implementation will cover AES 256 encryption as outlined in the Whiteflag specification.\nFennel Protocol will also include support for RSA with a minimal key size of 4096 bits."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3 FTE"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 50,000 USD")),(0,i.kt)("h3",{id:"milestone-1--implement-substrate-modules"},"Milestone 1 \u2014 Implement Substrate Modules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that explains the basic structure of our identity management tools and how they can be used at the blockchain level.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Identity Creation"),(0,i.kt)("td",{parentName:"tr",align:null},"A Substrate extrinsic set will be created for creating an identity.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Identity Mutation"),(0,i.kt)("td",{parentName:"tr",align:null},"A Substrate extrinsic set will be created and added to the Identity module for updating identity elements to an existing identity structure.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Identity Revocation"),(0,i.kt)("td",{parentName:"tr",align:null},"A Substrate extrinsic set will be created that will securely declare revocation of an identity or key to the rest of the network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Identity Signature"),(0,i.kt)("td",{parentName:"tr",align:null},"The Identity module will be updated with an extrinsic set that will allow for an identity to issue signed certificates and sign existing certificates.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Trust Issuance"),(0,i.kt)("td",{parentName:"tr",align:null},"We shall create a Substrate Extrinsic to create signed trust connections between identities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"6."),(0,i.kt)("td",{parentName:"tr",align:null},"Trust Request"),(0,i.kt)("td",{parentName:"tr",align:null},"We shall create a Substrate Extrinsic to send an asyncronous message asking an identity to issue trust to the sender.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"7."),(0,i.kt)("td",{parentName:"tr",align:null},"Trust Revocation"),(0,i.kt)("td",{parentName:"tr",align:null},"The Trust pallet will be expanded to allow for revoking existing trust transactions.")))),(0,i.kt)("h3",{id:"milestone-2--additional-features"},"Milestone 2 \u2014 Additional features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," that describes key generation and management with Fennel Protocol.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Keypair Creation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will integrate system-level key management libraries to provide a collection of non-blockchain key sources. We'll include AES 256 and RSA 4096 at this point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Public Key Transmission"),(0,i.kt)("td",{parentName:"tr",align:null},"We will develop a Substrate module that contains public key management extrinsics for broadcasting public keys' existence and locations as a signal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Public Key Retrieval"),(0,i.kt)("td",{parentName:"tr",align:null},"We will add an extrinsics set to the Key Management module allowing for simple retrieval of public keys given their location.",(0,i.kt)("br",null),"This will necessarily include a mechanism for verifying that the key retrieved is the key requested.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Encrypted Communciation Channel Negotiation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module with extrinsics used to negotiate a three-way key handshake between two parties through cooperation of on- and off-chain compute.")))),(0,i.kt)("h3",{id:"milestone-3--additional-features"},"Milestone 3 \u2014 Additional features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," 20,000 USD")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article")," overviewing using Fennel Protocol in applications for secure off-chain data-centric messaging and secure on-chain signal mechanisms.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Peer Retrieval"),(0,i.kt)("td",{parentName:"tr",align:null},"We will construct a Substrate-resident method for applications exposing the same services to identify and locate one another through on-chain signals.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Encrypted Channels for IP Information"),(0,i.kt)("td",{parentName:"tr",align:null},"A set of off-chain workers and a parallel, scalable server will be constructed allowing for encrypted channels to be created, used, and collapsed to exchange small amounts of sensitive information such as service endpoint IP addresses.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"General-Purpose Signal Generation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module capable of producing arbitrary signals on-chain, both through broadcast and directly targeted to a single recipient or group of recipients.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Whiteflag Authentication"),(0,i.kt)("td",{parentName:"tr",align:null},"At grant completion, Fennel Protocol will support the basic authentication message mechanism outlined in section 2.5 of the Whiteflag Specification. This will establish a unified message format for applications authenticating over Fennel and targeting our eventual full Whiteflag implementation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"5."),(0,i.kt)("td",{parentName:"tr",align:null},"Whiteflag Reference Codes 1, 2, and 4"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Minimum Implementation of Whiteflag, fully resident as a component of Fennel Protocol, which will support operations for creating, recalling, updating, and discontinuing Whiteflag signals.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Fennel Protocol is intended to be a continuously-developing project.\nThe basic architecture was designed with extensibility in mind;\nidentity and signaling applications should be able to easily build on the runtime with expanding available features and continued support for existing features."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?"),"\nWe heard about the Grants Program from the Web 3 Foundation Website, as well as personal recommendations from Polkadot community members."),(0,i.kt)("p",null,"Thus far, we've ported our Theriak repository to the most recent version of Substrate as of writing of this application.\nFinancial contribution has not yet begun for the Fennel Protocol project.\nWe've also begun writing function and trait stubs to ensure that thorough documentation can be generated."))}c.isMDXComponent=!0}}]);