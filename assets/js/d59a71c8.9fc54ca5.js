"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[516],{1967:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={},i="BLDG App",o={unversionedId:"applications/bldg_app",id:"applications/bldg_app",title:"BLDG App",description:"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.",source:"@site/docs/applications/bldg_app.md",sourceDirName:"applications",slug:"/applications/bldg_app",permalink:"/Grants-Program/applications/bldg_app",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 ESG Ratings Dashboard",id:"milestone-1--esg-ratings-dashboard",level:3},{value:"Milestone 2 \u2014  User Blockchain Onboarding (Identity Management)",id:"milestone-2---user-blockchain-onboarding-identity-management",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bldg-app"},"BLDG App"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md"},"Open Grants Program Process")," on how to submit a proposal.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," BLDG BLOX INC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 3BR66M3qUbYKnUaP7ZF3G6cuyCcEF6nbgf"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Open-Grants-Program/pull/131#issuecomment-874245652"},"Terminated"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe.")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Bldg App is an online bulletin board to support organizations to work closely with their communities. Since launching in January 2020, our platform has supported dozens of diverse organizations including universities, coworking spaces, and nonprofits to create and share resources."),(0,r.kt)("p",null,"Our first milestone is to deploy smart contracts to log project engagement activity and form an ESG (Environmental, Social, and Corporate Governance) ratings dashboard. This dashboard will allow institutional users to measure project and campaign growth."),(0,r.kt)("p",null,"Our second milestone aims to help onboard users to the polkadot ecosystem. We\u2019ll be integrating with polkadot.js and introducing users to the web3 fundamentals. Make use of current in development polkadot SDKs around user identity and data management (e.g kilt.io)"),(0,r.kt)("p",null,"After 5 years of developing various creative and social-impact programs in the blockchain sector, we began developing the Bldg App in 2019 to provide an alternative infrastructure for community management and member contributions. Our aim was to develop an application with public traction first, then integrate smart contracts so that organizations and users could have more confidence and control over their data."),(0,r.kt)("p",null,"With our MVP live and supporting organizations across the US, we\u2019re moving to the next phase of bridging the platform with blockchain through analytical and rating tools such as this ESG dashboard."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Core functionality for the ESG ratings dashboard is split into calculations, storage and visualisations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ESG Rating Calculations")," \u2013 Serverless functions\nThe rating system will initially be run as a callable serverless function. Passing input data (TBD) returns rating value and/or submits corresponding value with a timestamp and issuing authority (initially BLDG BLOX inc/BLDG app.)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/ Calculate ESG Rating")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ESG Rating Dashboard UI")," \u2013 Front-end Data visualisations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/ Request All"),(0,r.kt)("li",{parentName:"ul"},"/ Request By Project ID")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ESG Rating Data Storage")," \u2013 Smart Contract Interactions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/ Request Latest By Project ID"),(0,r.kt)("li",{parentName:"ul"},"/ Request All By Project ID"),(0,r.kt)("li",{parentName:"ul"},"/ Submit By Project ID")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Smart Contract <\u2013> Jamstack bridge")," \u2013 Serverless functions\n// Matches above smart contract requests to be stored in a real-time database \u2013 removing the need for individual users to continually interact with the blockchain cientside.\nScheduled tasks to run and submit ESG rating calculations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tech Stack")),(0,r.kt)("p",null,"The Bldging app MVP uses the jamstack style architecture. A pre-rendered SPA served via Netlify. We use Google Firebase real-time database for data storage, Firebase authentication for ease-of-use Oauth and serverless functions where necessary.\nThe front-end is powered by Nuxt.js"),(0,r.kt)("p",null,"We\u2019ll provide documentation, examples and source code via github (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BLDG-BLOX/"},"https://github.com/BLDG-BLOX/"),") for the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Polkadot parachain based smart contract for Submitting/Reading Project based ESG rating values"),(0,r.kt)("li",{parentName:"ul"},"Serverless functions for bridging data from on-chain to off-chain database"),(0,r.kt)("li",{parentName:"ul"},"Alternative dashboard UI for viewing and verifying ESG ratings  \u2013 a replica of what we\u2019re using internally for the Bldging app extracted for ease-of use."),(0,r.kt)("li",{parentName:"ul"},"Current MVP running at  \u2013 ",(0,r.kt)("a",{parentName:"li",href:"http://bldg.app/"},"http://bldg.app/")),(0,r.kt)("li",{parentName:"ul"},"Information and articles can be found on medium at ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/bldg-blox"},"https://medium.com/bldg-blox"))),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Currently, ESG analysis and data are created through private services (i.e. Morningstar, MSCI, Sustainalytics) with very little information available for public use. Our aim is to expand on real-time ESG analysis produced by the user and organizational activity on our platform, all verified and secure on-chain."),(0,r.kt)("p",null,"We believe this to be a unique opportunity to transition our current and new users onto blockchain while deploying a consumer application on Polkadot."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Michael Lee, CEO"),(0,r.kt)("li",{parentName:"ul"},"Sam Billingham, Lead Engineer")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Micheal Lee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:micheal@bldgblox.io"},"micheal@bldgblox.io")),(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://bldg.app/"},"https://bldg.app/"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 100 Bogart St. Brooklyn NY, 11206"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," BLDG BLOX Inc.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our team has 5 years of experience with blockchain program development and creative programming. Interest and development in blockchain began with the Steem protocol, initially launching the Sndbox Incubator as a foundational program for global participants to launch social enterprises through the various tools available on Steem."),(0,r.kt)("li",{parentName:"ul"},"Our flagship project included Steem Park (",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/TChGLKaspFk"},"https://youtu.be/TChGLKaspFk"),"), the first public design project launched through blockchain, with a 10,000USD grant support from the Steem Foundation."),(0,r.kt)("li",{parentName:"ul"},"Over the years, our office has support several blockchain companies with creative and community development including Cryptokitties, Blockade Games, the TQ Tezos, and other. Sample projects can be found on thecreativecrypto.com.")),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Sambillingham"},"https://github.com/Sambillingham")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/code-with-sam"},"https://github.com/code-with-sam"))),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("p",null,"Micheal Lee: ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/michaelslee54/"},"https://www.linkedin.com/in/michaelslee54/"),"\nSam Billingham:  ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/sambillingham/"},"https://www.linkedin.com/in/sambillingham/")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," Project will launch in February/March 2021 (~3months)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," ~20,000 USD (1.2 BTC)")),(0,r.kt)("h3",{id:"milestone-1--esg-ratings-dashboard"},"Milestone 1 \u2014 ESG Ratings Dashboard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.6 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation where helpful. External documentation for making use of example code and replicating any data/interactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Interface Designs"),(0,r.kt)("td",{parentName:"tr",align:null},"Wireframes and designs provided in Adobe XD to showcase dashboard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Smart contract"),(0,r.kt)("td",{parentName:"tr",align:null},"We will create a smart contract for submitting ESG (Environmental, Social, and Corporate Governance) rating values for individual projects/organisations. Written in Ink to be deployed on a polkadot parachain. Contract functionality to support read/write storage access of rating value (rating, issuing/signing authority & timestamp)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Automate ESG Ratings"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js scheduled serverless functions for calculating and submitting ESG values to smart contract. Will calculate ESG (TBD) using data provided by clientside app input and/or cloud database (Firebase) and broadcast function calls to substrate chain using JS polkadot/api. Ratings to run periodically (daily/weekly) and on demand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4a."),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Vue.js powered SPA dashboard interface \u2013 showcase a project\u2019s current and historical ESG ratings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4b."),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"View and verify issuing authority. Show the percentage of onchain/offchain data used in the calculations. Where possible provide access to raw data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4c."),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Searching, sorting & filtering UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4d."),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"Shareable individual card/view per Project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Bldg.app"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate dashboard with current BLDG.app MVP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6."),(0,r.kt)("td",{parentName:"tr",align:null},"Example"),(0,r.kt)("td",{parentName:"tr",align:null},"We\u2019ll host a separate prototype version of the standalone dashboard UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an article and/or video tutorials that explain the work done as part of the grant and how to make use of it.")))),(0,r.kt)("h3",{id:"milestone-2---user-blockchain-onboarding-identity-management"},"Milestone 2 \u2014  User Blockchain Onboarding (Identity Management)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 0.6 BTC")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide inline documentation where helpful. External documentation for making use of example code and replicating any data/interactions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot.js"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate polkadot.js extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Link Accounts"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow users of bldg.app to link internal account with a Polkadot parachain account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Identity Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with third party identity protocol  or data management SDK (e.g Kilt.io)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Data Metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"SAssign metrics to individual users \u2013 e.g NGO-online-contributor for activity within BLDG application in NGO based projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Article/Tutorial"),(0,r.kt)("td",{parentName:"tr",align:null},"Showcase how bldg.app is integrating with other parachain based protocols in a series of walkthrough articles/videos. The advantages it provides and how other applications can do the same.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our plans include a number of further milestones in blockchain integration with Polkadot."),(0,r.kt)("li",{parentName:"ul"},"Once the dashboard is complete, several key metrics will be integrated into the front end of the Bldg App with links back to the parachain explorer."),(0,r.kt)("li",{parentName:"ul"},"Finally, leveraging ESG data for institutional grants, investing, donations, and crowdfunding. We are currently speaking with the Acala team to explore how to integrate stablecoin transactions for this purpose.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What work has been done so far?\n\u2013 The Bldg App MVP is live \u2013 ",(0,r.kt)("a",{parentName:"li",href:"http://bldg.app/"},"http://bldg.app/")),(0,r.kt)("li",{parentName:"ul"},"Are there are any teams who have already contributed (financially) to the project?\n\u2013 No"),(0,r.kt)("li",{parentName:"ul"},"Have you applied for other grants so far?\n\u2013 No")))}m.isMDXComponent=!0}}]);