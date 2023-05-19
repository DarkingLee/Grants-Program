"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5219],{84253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));a(95657);const l={},o="Avoiding Rust Deadlocks via Visualizing Lifetime",r={unversionedId:"applications/visualize_rust_lifetime",id:"applications/visualize_rust_lifetime",title:"Avoiding Rust Deadlocks via Visualizing Lifetime",description:"- Team Name: Song's research group at Pennsylvania State University",source:"@site/applications/visualize_rust_lifetime.md",sourceDirName:"applications",slug:"/applications/visualize_rust_lifetime",permalink:"/applications/visualize_rust_lifetime",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/visualize_rust_lifetime.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement the bug detection component",id:"milestone-1--implement-the-bug-detection-component",level:3},{value:"Milestone 2 \u2014 Integrate the bug detection functionalities into rust-analyzer",id:"milestone-2--integrate-the-bug-detection-functionalities-into-rust-analyzer",level:3},{value:"Milestone 3 \u2014 Implement the visualization component",id:"milestone-3--implement-the-visualization-component",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"avoiding-rust-deadlocks-via-visualizing-lifetime"},"Avoiding Rust Deadlocks via Visualizing Lifetime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Song's research group at Pennsylvania State University"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," TBD"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Rust is a new programming language designed to provide both safety guarantees that are like high-level languages and performance guarantees that are like low-level languages. To achieve this design purpose, Rust leverages static compiler checks to rule out severe memory and thread safety issues at the compilation time. At runtime, Rust behaves like C/C++ and could deliver performance that is as good as C/C++. Due to its safety and performance benefits, Rust has seen increasing adoption in building low-level systems software, such as OSs and browsers. Rust is also used to implement many software systems in the Web3 technology stack (e.g., substrate, polkadot, ink!)."),(0,i.kt)("p",null,"Rust's compiler checks are based on a suite of ownership and lifetime rules. The basic rule allows one value to only have one owner variable, and the value is dropped (freed) when its owner variable ends its lifetime. Rust extends the basic rule to allow ownership to be moved and borrowed, while still guaranteeing all accesses to a value to be within its owner variable's lifetime scope. Besides safety checks, lifetime is also used for automated resource management. For example, there is no explicit Unlock() in Rust. A Lock() function call returns a reference to the protected variable, and when the reference ends its lifetime, Rust automatically releases the acquired lock (by implicitly calling Unlock()). "),(0,i.kt)("p",null,"Rust's lifetime rules are complex and different from all other existing languages. It is challenging for Rust programmers to infer where a variable's lifetime ends. As a result, it is not uncommon for programmers to incorrectly identify the location where an implicit unlock is called. When a lock is held longer than programmers' expectation, the same lock may be acquired again or a different lock may be acquired before releasing the acquired lock, leading to a double-lock error or a lock-in-conflicting-orders error. "),(0,i.kt)("p",null,"In our previous work ","[1]",", we conducted an empirical study on real-world Rust concurrency bugs. We inspected GitHub commit logs for five Rust applications and five Rust libraries to collect previously fixed concurrency bugs. In total, we found 37 deadlocks due to the misunderstanding of where the implicit Unlock() is called, including 30 double locks and seven locks acquired in conflicting orders. These deadlocks constitute almost all lock-related concurrency bugs (37/38) in our collection. They are all from popular Rust software systems (e.g., Servo, Parity-Ethereum, TiKV, Redox) and have severely hurt the reliability of those systems before they were fixed. "),(0,i.kt)("ins",null,"A brief description of the project."),"We propose to build an IDE tool for visualizing the lifetime scope of a user-selected Rust variable. We believe our tool can help Rust programmers avoid deadlocks at the development stage. After writing a piece of code involving a mutex, a programmer can select the return value of a locking operation or the locking operation itself (when the return is not saved to a variable). Our tool will visualize the lifetime scope of the return value (i.e., the critical section). The programmer can then inspect whether the end of the critical section is expected. In addition, our tool will conduct deadlock detection for the selected critical section and provide detailed debugging information for identified bugs, such as highlighting blocking operations or function calls leading to blocking operations.",(0,i.kt)("ins",null,"How our tool will be integrated into Substrate/Polkadot?"),"Both Substrate and Polkadot are implemented in Rust. Previously, double locks or locks in conflicting orders were fixed in Substrate [2, 3]. After applying our prototype, we identified four previously unknown double locks in Substrate or the dependent libraries of Substrate/Polkadot. We reported detected bugs. All of them were confirmed and fixed by developers [4, 5, 6]. We believe our tool will effectively prevent Substrate/Polkadot programmers from making similar mistakes and other types of mistakes our tool will reveal.",(0,i.kt)("ins",null,"Why are we interested in creating this project?"),"We are interested in building the tool due to three reasons. First, our previous empirical study shows that deadlocks due to the misunderstanding of Rust's lifetime rules are common in Rust programs. Visualizing lifetime can avoid these bugs during the development stage, benefiting the whole Rust community. Second, the misunderstanding of Rust's lifetime rules can also cause memory bugs such as use-after-free and double free. Thus, the proposed tool has the potential to combat memory bugs. Third, the experience of building the proposed tool can inspire similar tools for other programming languages featuring lifetime (e.g., Kotlin).",(0,i.kt)("p",null,"[1]"," Boqin Qin, Yilun Chen, Zeming Yu, Linhai Song, and Yiying Zhang. \u201cUnderstanding Memory and Thread Safety Practices and Issues in Real-World Rust Programs.\u201d In PLDI'2020. "),(0,i.kt)("p",null,"[2]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/197"},"https://github.com/paritytech/substrate/pull/197")),(0,i.kt)("p",null,"[3]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/6225/commits/61e3b8d53674687790d2b30bc450cd59e09f563d"},"https://github.com/paritytech/substrate/pull/6225/commits/61e3b8d53674687790d2b30bc450cd59e09f563d")),(0,i.kt)("p",null,"[4]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db/pull/8"},"https://github.com/paritytech/parity-db/pull/8")),(0,i.kt)("p",null,"[5]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/6277"},"https://github.com/paritytech/substrate/pull/6277")),(0,i.kt)("p",null,"[6]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-common/pull/396"},"https://github.com/paritytech/parity-common/pull/396")),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("ins",null,"What have we already done?"),"We have built a prototype of the proposed tool. Our prototype can visualize a selected variable and conduct double-lock detection. We published a demonstration paper at CCS'2020 to describe the prototype. The paper can be found here: https://songlh.github.io/paper/vr.pdf. We also recorded a video to explain the prototype, and the video can be found here: https://youtu.be/L5F_XCOrJTQ.",(0,i.kt)("p",null,"We applied the double-lock detection component to Substrate, Polkadot, and ink!. We found four previously unknown deadlocks. One is in Substrate. The other three are in the dependent libraries of Substrate or Polkadot. We reported all the detected bugs. All of them were fixed by developers based on our reporting. The information of the detected bugs is listed as follows:"),(0,i.kt)("p",null,"[PR-1]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db/pull/8"},"https://github.com/paritytech/parity-db/pull/8")),(0,i.kt)("p",null,"[PR-2]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/6277"},"https://github.com/paritytech/substrate/pull/6277")),(0,i.kt)("p",null,"[PR-3]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-common/pull/396"},"https://github.com/paritytech/parity-common/pull/396")),(0,i.kt)("ins",null,"What are we going to do?"),"We propose to extend the prototype along four directions:",(0,i.kt)("p",null,"First, we will integrate our existing implementation of lifetime computation and deadlock detection to rust-analyzer, so that our proposed technique can easily cooperate with different text editors. "),(0,i.kt)("p",null,"Second, we will detect more types of deadlock bugs. Specifically, we will add the detection of locks with conflicting orders and misuse of mutex and non-mutex synchronization primitives (e.g., channel, conditional variable). "),(0,i.kt)("p",null,"Third, we will identify and visualize more blocking operations that can potentially lead to deadlocks in a selected critical section such as receiving from a channel and waiting on a conditional variable. "),(0,i.kt)("p",null,"Fourth, we will implement the visualization functionality by parsing the analysis results generated by rust-analyzer in a text editor (i.e., VS Code) and document our tool. "),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"There is no existing project similar to ours. "),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name of team leader: Linhai Song"),(0,i.kt)("li",{parentName:"ul"},"Names of team members: Linhai Song, Yiying Zhang, Ziyi Zhang")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Linhai Song"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:songlh@ist.psu.edu"},"songlh@ist.psu.edu")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"https://songlh.github.io/"},"https://songlh.github.io/"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Information of our legal structure will be disclosed privately."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Pennsylvania State University")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"The team conducted an empirical study on memory bugs and concurrency bugs in real-world Rust programs. The study was published in PLDI'2020. Through this project, the team has built a comprehensive understanding of common errors made by programmers when coding Rust. "),(0,i.kt)("p",null,"The team built a prototype for the proposed tool. The prototype was published in the demonstration track of CCS'2020, demonstrating the team's capability to build the proposed technique. "),(0,i.kt)("p",null,"The team has another research paper on understanding concurrency bugs in Go published in ASPLOS'2019. The team has more than three years' research experience on concurrency bugs. "),(0,i.kt)("p",null,"Team member Linhai Song has 10 years of expertise in programming analysis, and has published at top programming languages and software engineering conferences (e.g., PLDI, ICSE, FSE, OOPSLA). "),(0,i.kt)("p",null,"Team member Yiying Zhang has conducted various systems research with papers published at OSDI and SOSP. "),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/songlh/LDoctor"},"LDoctor (ICSE '17)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/system-pclub/rust-study"},"Rust-Study (PLDI '20)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WukLab/LegoOS"},"LegoOS (OSDI '18)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WukLab/pDPM"},"pDPM (ATC '20)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WukLab/Pythia"},"Pythia (USENIX SEC '20)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WukLab/LITE"},"LITE (SOSP '17)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WukLab/Hotpot"},"Hotpot (SoCC '17)"))),(0,i.kt)("p",null,"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/songlh"},"https://github.com/songlh")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/system-pclub"},"https://github.com/system-pclub")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/WukLab"},"https://github.com/WukLab"))),(0,i.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/linhai-song-7a3b12120/"},"https://www.linkedin.com/in/linhai-song-7a3b12120/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/yiyingzhang/"},"https://www.linkedin.com/in/yiyingzhang/"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"We have built a prototype of the proposed tool. We wrote ",(0,i.kt)("a",{parentName:"p",href:"https://songlh.github.io/paper/vr.pdf"},"one paper")," and recorded ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/L5F_XCOrJTQ"},"one video")," to describe the prototype. "),(0,i.kt)("p",null,"We applied the bug detection component of the prototype to Substrate, Polkadot, and ink!. We found four previously unknown deadlocks. We reported all the detected bugs and all of them were fixed based on our reporting ","[PR-1, PR-2, PR-3]",". "),(0,i.kt)("p",null,"[PR-1]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db/pull/8"},"https://github.com/paritytech/parity-db/pull/8")),(0,i.kt)("p",null,"[PR-2]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/6277"},"https://github.com/paritytech/substrate/pull/6277")),(0,i.kt)("p",null,"[PR-3]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-common/pull/396"},"https://github.com/paritytech/parity-common/pull/396")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"We will integrate the proposed tool into rust-analyzer and demonstrate the virtualization functionality in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/vscode"},"VSCode"),", which is an open-source IDE project. We will implement the proposed program analysis by analyzing Rust's MIR. "),(0,i.kt)("p",null,"We divide the project into three milestones. We aim to finish the whole project in three months and achieve a milestone in each month.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 3 months"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," financial information will be disclosed privately.")),(0,i.kt)("h3",{id:"milestone-1--implement-the-bug-detection-component"},"Milestone 1 \u2014 Implement the bug detection component"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," financial information will be disclosed privately.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"BSD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to run the bug detection component as a standalone tool on terminal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will include unit tests to ensure the functionality and robustness of our code. We will also include 10 toy programs containing different types of deadlocks to demonstrate the bug detection capability. We will also run this component on the latest version of Substrate, Polkadot, and ink!. We will manually inspect all reported results to count the number of bugs and the number of false positives.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Detecting Conflicting Locks"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a detector that can identify deadlocks due to locks in conflicting orders through analyzing the MIR of Rust programs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Detecting Misuse of Mutex and Channel"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a detector to identify deadlocks due to errors when using a mutex together with a channel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Detecting Misuse of Mutex and Conditional Variable"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a detector to identify deadlocks due to mistakes when using a mutex together with a conditional variable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of this component.")))),(0,i.kt)("h3",{id:"milestone-2--integrate-the-bug-detection-functionalities-into-rust-analyzer"},"Milestone 2 \u2014 Integrate the bug detection functionalities into rust-analyzer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," financial information will be disclosed privately.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"BSD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to install and use the changed rust-analyzer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will also use the 10 toy programs designed in the last milestone to test whether the bug detection capability is successfully integrated into rust-analyzer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Extend Language Server Protocol (LSP)"),(0,i.kt)("td",{parentName:"tr",align:null},"We will extend LSP to contain the key information related to deadlocks (e.g., the start and the end of a critical section, blocking operations in a critical section).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Change rust-analyzer to emit MIR"),(0,i.kt)("td",{parentName:"tr",align:null},"We will change the build module of rust-analyzer to emit MIR for our bug detection functionalities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Conduct bug detection in rust-analyzer"),(0,i.kt)("td",{parentName:"tr",align:null},"We will change the analysis crate of rust-analyzer to execute the code for bug detection and change the server module to send the detection results out.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of this component.")))),(0,i.kt)("h3",{id:"milestone-3--implement-the-visualization-component"},"Milestone 3 \u2014 Implement the visualization component"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Costs:")," financial information will be disclosed privately.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"BSD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to install and use the visualization component in VSCode.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"We will include unit tests to ensure the functionality and robustness of our code. We will also include 10 toy programs to test whether channel operations are correctly identified, whether channel operations are correctly visualized, whether operations on conditional variables are correctly identified, and whether operations on conditional variables are correctly highlighted.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"Parse the Extended LSP"),(0,i.kt)("td",{parentName:"tr",align:null},"We will implement a component to parse the extended LSP and get computed information, such as the scope of a critical section and identified blocking operations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2."),(0,i.kt)("td",{parentName:"tr",align:null},"Highlight Blocking Operations"),(0,i.kt)("td",{parentName:"tr",align:null},"If a selected variable is the return of a locking operation, besides visualizing the critical section, we will also highlight identified channel operations, conditional variable operations, and locking operations in the selected critical section.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3."),(0,i.kt)("td",{parentName:"tr",align:null},"Tutorial Writing"),(0,i.kt)("td",{parentName:"tr",align:null},"We will write a tutorial and record a video to explain how to use our tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a dockerfile to demonstrate the full functionality of this component.")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"In the future, we plan to extend the proposed tool along two directions."),(0,i.kt)("p",null,"First, we plan to extend the proposed tool to cover memory bugs. Our previous empirical study showed that there are also memory bugs due to misunderstanding Rust's lifetime rules, such as use-after-free bugs and double-free bugs. The proposed tool has the potential to help Rust programmers avoid these bugs. Of course, we need to explore what program elements should be visualized for memory bugs. "),(0,i.kt)("p",null,"Second, we plan to conduct a survey to understand what challenges programmers face when understanding Rust's lifetime rules and whether the proposed tool can really help them avoid deadlocks. The survey results will guide us on improving the proposed tool, and broadly speaking, the evolution of Rust. "),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," Web3 Foundation Website"),(0,i.kt)("p",null,"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Work you have already done.")),(0,i.kt)("p",null,"We have built a prototype of the proposed tool. We wrote ",(0,i.kt)("a",{parentName:"p",href:"https://songlh.github.io/paper/vr.pdf"},"one paper")," and recorded ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/L5F_XCOrJTQ"},"one video")," to describe the prototype. "),(0,i.kt)("p",null,"We applied the bug detection component of the prototype to Substrate, Polkadot, and ink!. We found four previously unknown deadlocks. We reported all the detected bugs and all of them were fixed based on our reporting ","[PR-1, PR-2, PR-3]",". "),(0,i.kt)("p",null,"[PR-1]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-db/pull/8"},"https://github.com/paritytech/parity-db/pull/8")),(0,i.kt)("p",null,"[PR-2]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/6277"},"https://github.com/paritytech/substrate/pull/6277")),(0,i.kt)("p",null,"[PR-3]"," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-common/pull/396"},"https://github.com/paritytech/parity-common/pull/396")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wheter there are any other teams who have already contributed (financially) to the project.")),(0,i.kt)("p",null,"No"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Previous grants you may have applied for.")),(0,i.kt)("p",null,"No"))}m.isMDXComponent=!0}}]);