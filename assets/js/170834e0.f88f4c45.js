"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[835],{90036:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(87462),r=(t(67294),t(3905));t(95657);const i={},n="Analytics Website/Data Platform",o={unversionedId:"docs/RFPs/Open/analysis-website-and-data-platform",id:"docs/RFPs/Open/analysis-website-and-data-platform",title:"Analytics Website/Data Platform",description:"Status:* Open",source:"@site/docs/RFPs/Open/analysis-website-and-data-platform.md",sourceDirName:"docs/RFPs/Open",slug:"/docs/RFPs/Open/analysis-website-and-data-platform",permalink:"/docs/RFPs/Open/analysis-website-and-data-platform",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/Open/analysis-website-and-data-platform.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Availability and Validity - Network Topology",permalink:"/docs/RFPs/Open/a-and-v-topology"},next:{title:"Anti-Collusion Infrastructure",permalink:"/docs/RFPs/Open/anti-collusion_infrastructure"}},l={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-",level:2}],u={toc:d},c="wrapper";function p(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,s.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"analytics-websitedata-platform"},"Analytics Website/Data Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status:")," Open "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/keeganquigley"},"Keegan Quigley")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Teams/People that could deliver the RFP"),": @web3go-xyz")),(0,r.kt)("h2",{id:"project-description-"},"Project Description \ud83d\udcc4"),(0,r.kt)("p",null,"On-chain analysis is an important emerging field for the Polkadot & Kusama ecosystems. One can currently use GraphQL to query data via backend services such as ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.subquery.network/"},"Subquery")," and ",(0,r.kt)("a",{parentName:"p",href:"https://app.subsquid.io"},"Subsquid"),". However, it would be nice to have an easy-to-use front-end with sharable customized dashboards as well. The end result might look similar to ",(0,r.kt)("a",{parentName:"p",href:"https://dune.com/browse/dashboards"},"Dune Analytics"),", a popular data sharing dashboard used in the Ethereum community. Using Dune Analytics, users can quickly create and openly share queries which can then be forked and remixed in a variety of ways by others."),(0,r.kt)("p",null,"This RFP, based on a ",(0,r.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/dune-analytics-style-data-service-for-polkadot-kusama/271"},"forum post")," by Rob Habermeier, aims to fund a dashboard designed to allow analysts and power-users to interactively query high-quality data, and subsequently create custom charts and visualizations to share metrics with others. Ideally, many projects would create custom dashboards to share data with the Polkadot & Kusama community."),(0,r.kt)("p",null,"At the moment, building custom dashboards requires quite a bit of effort since the data needs to be fed directly from the parachain via Polkadot.js, or through a custom squid or GraphQL via Subquery. This RFP aims to ease the process of building dashboards and sharing powerful data visualizations."),(0,r.kt)("h2",{id:"deliverables-"},"Deliverables \ud83d\udd29"),(0,r.kt)("p",null,"The following items could be potential expected deliverables for the project. Of course, improvements and additions are more than welcome."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define a common dataset and data model for Substrate that can be shared for interactive querying use cases such as on Dune Analytics."),(0,r.kt)("li",{parentName:"ul"},"Build a publicly accessible interactive query engine. The platform should allow users to aggregate raw data from relay chains and parachains into SQL databases that can be easily queried. This might include storing data on a postgreSQL database, for example."),(0,r.kt)("li",{parentName:"ul"},"Users should be able to perform simple SQL queries in a matter of minutes, and create visualizations and dashboards using these queries."),(0,r.kt)("li",{parentName:"ul"},"Provide the ability to integrate data from backend services such as Subsquid, Subquery."),(0,r.kt)("li",{parentName:"ul"},"Create UX/UI to make it easier for analysts and power-users to easily query human-readable data and follow key metrics. The front-end could be written in React, AngularJS, Vue, etc.")))}p.isMDXComponent=!0}}]);