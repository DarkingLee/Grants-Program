"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[8309],{88526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));a(8209);const l={},o="Sukhavati PoC Module",r={unversionedId:"applications/sukhavati_poc_module",id:"applications/sukhavati_poc_module",title:"Sukhavati PoC Module",description:"Team Name:* Sukhavati Labs",source:"@site/docs/applications/sukhavati_poc_module.md",sourceDirName:"applications",slug:"/applications/sukhavati_poc_module",permalink:"/Grants-Program/applications/sukhavati_poc_module",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Plot Algorithm and Capacity File Import",id:"plot-algorithm-and-capacity-file-import",level:4},{value:"PoC Consensus Engine",id:"poc-consensus-engine",level:4},{value:"Block Production",id:"block-production",level:5},{value:"Block Validation",id:"block-validation",level:5},{value:"Difficulty Adjustment",id:"difficulty-adjustment",level:5},{value:"Fork Choice",id:"fork-choice",level:5},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Capacity Management Pallet",id:"milestone-1--implement-capacity-management-pallet",level:3},{value:"Milestone 2 \u2014 Implement Sukhavati PoC Consensus Pallet",id:"milestone-2--implement-sukhavati-poc-consensus-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sukhavati-poc-module"},"Sukhavati PoC Module"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Team Name:")," Sukhavati Labs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Payment Address:")," 0x4756b4a72Fb08d936a9ee780f36e411B3F9E1873"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/340#issuecomment-937770696"},"Terminated"))),(0,n.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Sukhavati is a decentralized cloud service network focused on storage. It uses the MASS Proof of Capacity (PoC) protocol as its consensus protocol so that it can reuse existing PoC capacity power and quickly establish a strong consensus layer. The MASS PoC consensus algorithm is very energy efficient. After the initialization operation, it requires only a small amount of computing and IO resource consumption to maintain high security consensus, allowing most resources to be used for other meaningful work."),(0,n.kt)("p",null,"Currently the MASS PoC network has a total of about 230PB in capacity power, making it the second-largest PoC network. Sukhavati takes PoC as the entry point. After incorporating a wide range of PoC miners into the consensus network, Sukhavati will continue to build the needed infrastructure to serve the Web3.0 ecosystem on these PoC devices, taking full advantage of idle computing and bandwidth resources and truly decentralized network topology. Sukhavati eventually intends to build a decentralized data access gateway that covers both Web3.0 and Web2.0 storage services and that provides unified data storage, retrieval, and management services that can meet various local compliance requirements for Web3.0 applications."),(0,n.kt)("p",null,"After completing the first version (which is based on the original codebase) and idea validation, Sukhavati plans to migrate to the Substrate framework (planned for Q2). The powerful and flexible features such as off-chain workers, on-chain governance and runtime upgrade provided by Substrate can bring Sukhavati great convenience and enable us to easily develop the storage and content distribution functions in the future steps."),(0,n.kt)("p",null,"While enjoying all these features, we would like to give back to the community by providing a PoC Module for Substrate based on the MASS PoC consensus protocol, so that any blockchain developed based on Substrate can choose to use this module to implement PoC consensus and be able to reuse existing MASS PoC capacity power. This \u201cpiggybacking\u201d allows them to quickly have the same underlying device resources and potential influence as we do, thereby further exploiting the idle resources of the vast number of PoC mining devices. Through the implementation of this module, we hope to establish a connection between the substrate and the PoC ecosystem, giving web3.0 builders more options and room for imagination."),(0,n.kt)("h3",{id:"project-details"},"Project Details"),(0,n.kt)("h4",{id:"plot-algorithm-and-capacity-file-import"},"Plot Algorithm and Capacity File Import"),(0,n.kt)("p",null,"The plot algorithm will generate two HashMaps, of which the latter one is kept as the capacity file."),(0,n.kt)("p",null,"The plot process is as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generate a ",(0,n.kt)("inlineCode",{parentName:"li"},"root_key")," through secp256k1/ECDSA"),(0,n.kt)("li",{parentName:"ol"},"Using BIP-44 to derive child key pairs ",(0,n.kt)("inlineCode",{parentName:"li"},"(pk, sk)")," from the ",(0,n.kt)("inlineCode",{parentName:"li"},"root_key")),(0,n.kt)("li",{parentName:"ol"},"Set a BitLength and runs Plot algorithm with ",(0,n.kt)("inlineCode",{parentName:"li"},"pk")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"BL")," as follows:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Generate a unique ",(0,n.kt)("inlineCode",{parentName:"li"},"ID = doubleSHA256(pk)")," of the capacity file"),(0,n.kt)("li",{parentName:"ul"},"For each ",(0,n.kt)("inlineCode",{parentName:"li"},"x in [0, 2^BL-1]"),", calculate ",(0,n.kt)("inlineCode",{parentName:"li"},"y = SHA256(\u2018MASS\u2019||ID||x)"),". Generate a ",(0,n.kt)("strong",{parentName:"li"},"HashMap A")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"y")," as the index and ",(0,n.kt)("inlineCode",{parentName:"li"},"x")," as the value"),(0,n.kt)("li",{parentName:"ul"},"For each index ",(0,n.kt)("inlineCode",{parentName:"li"},"y")," in ",(0,n.kt)("strong",{parentName:"li"},"HashMap A"),", flip each bit of it to get ",(0,n.kt)("inlineCode",{parentName:"li"},"y\u2019"),", use ",(0,n.kt)("inlineCode",{parentName:"li"},"y\u2019")," as the index to find the corresponding ",(0,n.kt)("inlineCode",{parentName:"li"},"x\u2019")),(0,n.kt)("li",{parentName:"ul"},"For each ",(0,n.kt)("inlineCode",{parentName:"li"},"x in [0, 2^BL-1]")," and corresponding ",(0,n.kt)("inlineCode",{parentName:"li"},"x\u2019"),", calculate ",(0,n.kt)("inlineCode",{parentName:"li"},"z = SHA256(\u2018MASS\u2019||ID||x||x\u2019)"),". Generate the ",(0,n.kt)("strong",{parentName:"li"},"HashMap B")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"z")," as the index and ",(0,n.kt)("inlineCode",{parentName:"li"},"(x, x\u2019)")," as the value"))),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("strong",{parentName:"li"},"HashMap B")," as the efficient capacity")),(0,n.kt)("p",null,"The import method can be derived from the above process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Import the existing root_key from the mass miner"),(0,n.kt)("li",{parentName:"ol"},"Load the existing capacity file"),(0,n.kt)("li",{parentName:"ol"},"Derive child keys from root_key and match the public keys with the ID of the capacity files"),(0,n.kt)("li",{parentName:"ol"},"We can now use these existing capacity files for our own PoC consensus")),(0,n.kt)("h4",{id:"poc-consensus-engine"},"PoC Consensus Engine"),(0,n.kt)("h5",{id:"block-production"},"Block Production"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get challenge ",(0,n.kt)("inlineCode",{parentName:"li"},"c")," from previous block"),(0,n.kt)("li",{parentName:"ol"},"The miner tries to find ",(0,n.kt)("inlineCode",{parentName:"li"},"(x, x\u2019)")," and its corresponding BitLength and ID from HashMap B that satisfies:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cuthash(c, bl) == cuthash(SHA256(\u2018MASS\u2019||ID||x||x\u2019), bl)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cuthash(y, bl) == flipped(cuthash(y\u2019, bl))"),", where ",(0,n.kt)("inlineCode",{parentName:"li"},"y = SHA256(\u2018MASS\u2019||ID||x)")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"y\u2019 = SHA256(\u2018MASS\u2019||ID||x\u2019)")))),(0,n.kt)("li",{parentName:"ol"},"If the above proof is found, the miner then calculates ",(0,n.kt)("inlineCode",{parentName:"li"},"quality = (2^BitLength * BitLength ) / [256 - log2(H)]"),", where ",(0,n.kt)("inlineCode",{parentName:"li"},"H = SHA256(block_timestamp // slot_length, x, x', height)")),(0,n.kt)("li",{parentName:"ol"},"If the quality is higher than difficulty, the miner produces the block, creates the proof sig and signs the block.")),(0,n.kt)("h5",{id:"block-validation"},"Block Validation"),(0,n.kt)("p",null,"When a node receives a new block, it verifies all the signatures and PoC proof as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Verify the block signature and capacity proof signature"),(0,n.kt)("li",{parentName:"ol"},"Get PoC proof ",(0,n.kt)("inlineCode",{parentName:"li"},"(x, x\u2019, bl)"),", publickey ",(0,n.kt)("inlineCode",{parentName:"li"},"pk")," and challenge ",(0,n.kt)("inlineCode",{parentName:"li"},"c")," from block header and verify if they satisfy:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cuthash(c, bl) = cuthash(SHA256(\u2018MASS\u2019||doubleSHA256(pk)||x||x\u2019), bl)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cuthash(SHA256(\u2018MASS\u2019||doubleSHA256(pk)||x)) = flipped(cuthash(SHA256(\u2018MASS\u2019|| doubleSHA256(pk)||x\u2019)))")))),(0,n.kt)("li",{parentName:"ol"},"Calculate quality of the proof, and verify if it\u2019s higher than difficulty")),(0,n.kt)("h5",{id:"difficulty-adjustment"},"Difficulty Adjustment"),(0,n.kt)("p",null,"The desired block time is maintained by the following difficulty adjustment algorithm on every block:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"diff = parent_diff + parent_diff // 2048 * max(1 - (new_block_timestamp \u2013 last_block_timestamp) // 10, -99)")),(0,n.kt)("h5",{id:"fork-choice"},"Fork Choice"),(0,n.kt)("p",null,"When there is a potential new best chain, the node checks the following rules in sequential order to make the choice:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The one with greater total difficulty"),(0,n.kt)("li",{parentName:"ol"},"The one with a better proof quality"),(0,n.kt)("li",{parentName:"ol"},"The one with an earlier block timestamp"),(0,n.kt)("li",{parentName:"ol"},"If all the above conditions are the same, choose the one with a smaller block hash ")),(0,n.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,n.kt)("p",null,"The PoS/PoC consensus mechanism is starting to attract more attention with the rise of Chia. We notice that there are some other teams who are also building PoS/PoC consensus module for substrate, such as Subspace. The main difference between our protocols is that we are not trying to create a new PoC algorithm from scratch. What we want to do is to compatibly reuse the existing PoS/PoC consensus powers to form our own consensus layer and promote our blockchain to these miners, so that we can utilize their idle resources."),(0,n.kt)("p",null,"In this proposal, we hope to make this capability of reusing PoS/PoC consensus power available as a substrate pallet. We believe some connection can be established between the substrate ecosystem and the PoS/PoC ecosystem, bringing more options and resources to Web3.0 builders."),(0,n.kt)("p",null,"After establishing the underlying infrastructure, we hope to serve the Polkadot ecosystem as a parachain or parathread and provide a data access gateway for all Web3.0 DApps."),(0,n.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,n.kt)("h3",{id:"team-members"},"Team members"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sukhavati Dev Team")),(0,n.kt)("h3",{id:"contact"},"Contact"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Name:")," Mindaugas Savickas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,n.kt)("a",{parentName:"li",href:"mailto:mindaugas@sukhavati.io"},"mindaugas@sukhavati.io")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Website:")," ",(0,n.kt)("a",{parentName:"li",href:"https://sukhavati.io"},"https://sukhavati.io"))),(0,n.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Address:")," Vistra corporate Services Centre, Wickhams Cay II, Road Town, Tortola, VG1110, British Virgin Islands."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Sukhavati Labs Ltd.")),(0,n.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rami: Blockchain Hardware Architect and consultant with a PhD in Electrical and Computer Engineering.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Chen: Expert in blockchain development and crypto economy modeling.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Hairu: Senior backend developer with over 10 years experience."))),(0,n.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Sukhavati-Labs/go-miner"},"https://github.com/Sukhavati-Labs/go-miner")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Sukhavati-Labs/go-wallet"},"https://github.com/Sukhavati-Labs/go-wallet")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Sukhavati-Labs/web-wallet"},"https://github.com/Sukhavati-Labs/web-wallet")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Sukhavati-Labs/skt-data"},"https://github.com/Sukhavati-Labs/skt-data")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Sukhavati-Labs/explorer"},"https://github.com/Sukhavati-Labs/explorer")),(0,n.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,n.kt)("h3",{id:"overview-1"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Total Costs:")," 4,000 DAI")),(0,n.kt)("h3",{id:"milestone-1--implement-capacity-management-pallet"},"Milestone 1 \u2014 Implement Capacity Management Pallet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 1,000 DAI")),(0,n.kt)("p",null,"This milestone will provide a PoC capacity management pallet. It allows miners to do the plot operation and import existing MASS PoC keys and capacity files."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to plot files and how to import existing capacity files with this module.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"A guide describing how to run the tests covering the cases in 0b.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"Capacity Management Pallet"),(0,n.kt)("td",{parentName:"tr",align:null},"This pallet will implement features include: 1) PoC key management, 2) plotting, 3) capacity import.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Test"),(0,n.kt)("td",{parentName:"tr",align:null},"Unit test and test cases.")))),(0,n.kt)("h3",{id:"milestone-2--implement-sukhavati-poc-consensus-pallet"},"Milestone 2 \u2014 Implement Sukhavati PoC Consensus Pallet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Estimated Duration:")," 8 weeks"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"FTE:"),"  1.5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Costs:")," 3,000 DAI")),(0,n.kt)("p",null,"This milestone will provide a poc consensus pallet. Together with the capacity managemnt pallet in Milestone 1, developers can easily build their own chain that can reuse the MASS capacity power."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,n.kt)("td",{parentName:"tr",align:null},"License"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,n.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,n.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to use this PoC consensus engine.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,n.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,n.kt)("td",{parentName:"tr",align:null},"A guide describing how to build a PoC blockchain with this module.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1."),(0,n.kt)("td",{parentName:"tr",align:null},"PoC Consensus Pallet"),(0,n.kt)("td",{parentName:"tr",align:null},"This pallet will implement the Sukhavati PoC Consensus engine including block production, block validation, difficulty adjustment and fork choice.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2."),(0,n.kt)("td",{parentName:"tr",align:null},"Test"),(0,n.kt)("td",{parentName:"tr",align:null},"Unit test and test cases.")))),(0,n.kt)("h2",{id:"future-plans"},"Future Plans"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Research PoC/PoS power reuse, such as Chia."),(0,n.kt)("li",{parentName:"ol"},"Help promote and develop channels of communication between blockchains based on this module and the miner community.")),(0,n.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,n.kt)("p",null,"Sukhavati Labs has raised a seed round of funding. "),(0,n.kt)("p",null,"We are in contact with several PoC pools and the information we have received so far shows that PoC mining devices have a substantial amount of idle resources available, and most miners are very interested in being able to further upgrade their devices in order to provide real, meaningful use."))}d.isMDXComponent=!0}}]);