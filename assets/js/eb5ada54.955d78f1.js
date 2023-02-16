"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[5194],{85047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));a(8209);const r={},l="Polka SignIn",o={unversionedId:"applications/PolkaSignIn",id:"applications/PolkaSignIn",title:"Polka SignIn",description:"Team Name:* Litentry",source:"@site/docs/applications/PolkaSignIn.md",sourceDirName:"applications",slug:"/applications/PolkaSignIn",permalink:"/Grants-Program/applications/PolkaSignIn",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Sign in Participants",id:"sign-in-participants",level:4},{value:"Workflow",id:"workflow",level:4},{value:"Implementation",id:"implementation",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Future Plans",id:"future-plans",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"polka-signin"},"Polka SignIn"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:")," Litentry"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x37a45AdBb275d5d3F8100f4cF16977cd4B0f9Fb7 (USDT)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/641#issuecomment-1320286386"},"Terminated"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,i.kt)("em",{parentName:"p"},"The combination of your GitHub account submitting the application and the payment address above will be your unique identifier during the program. Please keep them safe."))),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In a Web2 world, OAuth is the industry-standard protocol for authorization, it obtains an access token--a string denoting a specific scope, lifetime, and other access attributes. Access tokens are issued to third-party clients by an authorization server with the approval of the resource owner. Then the client uses the access token to access the protected resources hosted by the resource server."),(0,i.kt)("p",null,"In Web3, injected signers are widely used for connecting accounts with dApps, for example, Metamask one-click connect gives the dApp Ethereum accounts information with ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_account")," method, WalletConnect generate a QR code to connect a mobile wallet with its handshake protocol. And after connecting, every user action needs to be signed by the injected Ethereum account, this method is safe and efficient."),(0,i.kt)("p",null,'Considering injected signers\' "connect" feature as a sign-in method is not optimal because a malicious user could inject a custom signer like Metamask with a customized ',(0,i.kt)("inlineCode",{parentName:"p"},"eth_account")," method so that the malicious user could pretend to be the owner of a labeled Ethereum address. So that for an injected signer, the user needs to sign a piece of data for each action, which is not efficient and has a bad user experience."),(0,i.kt)("p",null,"A combination with OAuth and injected signer should be raised, there is some research and practices in the industry as listed below:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pelith/node-eauth-server"},"EAuth"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://magic.link/docs/blockchains/ethereum"},"Sign in with Magic links")," rely on JsonRpcProvider\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/madhavanmalolan/dauth"},"DAuth")," registration by decentralized authorities.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Recoblix/ethereum-oauth"},"ethereum oauth"),"\nThis paper ","[OAuth 2.0 authorization using blockchain-based tokens]","\nauth0 team has make a ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/blog/an-introduction-to-ethereum-and-smart-contracts-part-3/"},"proposal")),(0,i.kt)("p",null,"to ask the user to sign such a magic string with injected signers and provides it as an access tokens for Applications. Instead of verified by authorization server who holds the approval of resource owner (user), it should be verified in a decentralized way."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("h4",{id:"sign-in-participants"},"Sign in Participants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Service providers")," are the dApps that have the sign-in requirement."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Identity providers")," are the injected signers which provide the authentication information of the user who holds the wallet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resource Owners")," are the users who hold the self-custody crypto wallets.")),(0,i.kt)("h4",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"The workflow works the same with or without OAuth specification. Only the 4th step will differ."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A user sends a request to a service provider."),(0,i.kt)("li",{parentName:"ol"},"The service provider sends a callback address, the sign-in challenge, and required permissions to the user."),(0,i.kt)("li",{parentName:"ol"},"The user connects to the injected signer."),(0,i.kt)("li",{parentName:"ol"},"injected signed to sign the challenge, and send the signature together with the public address, an access token specifying the scopes like expire time, back to the callback address. With OAuth Implementation, the access token is compliant with the OAuth standard."),(0,i.kt)("li",{parentName:"ol"},"The service provider validates the signature, if successful, the user signed in,"),(0,i.kt)("li",{parentName:"ol"},"If there is no related user information in the database, the service provider will lookup for the user information from Identity Registrar, if related TEXT records are found for this address, the information will be imported into the service provider\u2019s database.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/hanwencheng/gists/master/Litentry/imgs/Sign-in%20Flow.png",alt:"Sign-in Flow"})),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sign-in Request"),(0,i.kt)("p",{parentName:"li"},"User want to sign in the dApp by send a simple request with identity chain type, eg: DOT, KSM, ETH etc."),(0,i.kt)("p",{parentName:"li"},"The payload is required since each chain has its own algorithmic mechanism."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"request payload(1)")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "identity-type": "dot"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Authentication Requirement"),(0,i.kt)("p",{parentName:"li"},"dApp will return the callback info.\nThe callback endpoint is used by Identity provider to send signature data to dApp."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "identity-type": "dot",\n    "callback-endpoint": "http://dapp.com/login/callback",\n    "scope": ["xxx", "yyy"],\n    "chanllenge": xxxxxxxxxx",\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect to Signer"),(0,i.kt)("p",{parentName:"li"},"User sends request to the Identity Provider (Injected Signer like : Polkadot.js Extension, Metamask, Parity Signer ...)."),(0,i.kt)("p",{parentName:"li"},"This action will call up a browser extension or some other external applications."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "identity-type": "dot",\n    "callback-endpoint": "http://dapp.com/login/callback",\n    "scope": ["xxx", "yyy"],\n    "chanllenge": xxxxxxxxxx",\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Provide Signature\nThe Identity Provider will generate the Signature data."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "identity-type": "dot",\n    "public-key": "xxxxxxxx",\n    "account-signed": "xxxxxxxxxx",\n    "scope": ["xxx", "yyy"],\n}\n')),(0,i.kt)("p",{parentName:"li"},"explains:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"identity-type"),(0,i.kt)("p",{parentName:"li"},"This field is used to choose the chain type and account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"public-key"),(0,i.kt)("p",{parentName:"li"},"With the chain account chosen, get the public key of the account. This field will be used by dApp to decrypt the data and verify data consistency.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"account-signed"),(0,i.kt)("p",{parentName:"li"},"use private key to sign the account."),(0,i.kt)("p",{parentName:"li"},"eg:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"account = 0x1016f75c54c607f082ae6b0881fac0abeda21781\n\nprivate-key = 18e14a7b6a307f426a94f8114701e7c8e774e7f9a47e2c2035db29a206321725\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"account-signed = ECIES ( ${account} , ${private-key})\n\n# encrypt account with private-key by the specified algorithmic mechanism: ECIES\n\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"scope"),(0,i.kt)("p",{parentName:"li"},"  scope define the permission needed for the dapp to interact with the account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"chanllenge"),(0,i.kt)("p",{parentName:"li"},"  a text string need to be signed by the private key."))),(0,i.kt)("p",{parentName:"li"},"The Identity Provider will send the signature data to the callback endpoint of dApp by step #3.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validation"),(0,i.kt)("p",{parentName:"li"},"The dApp receives the signature data and do the verification."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'```\n{\n    "identity-type": "dot",\n    "public-key": "xxxxxxxx",\n    "account-signed": "xxxxxxxxxx",\n    "scope": ["xxx", "yyy"],\n}\n```\n')),(0,i.kt)("p",{parentName:"li"},"Verification Steps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use ",(0,i.kt)("strong",{parentName:"p"},"public-key")," to decrypt the data of ",(0,i.kt)("strong",{parentName:"p"},"account-signed")," , this progress should be successful, and get the account address."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("strong",{parentName:"p"},"public-key")," pairs with ",(0,i.kt)("strong",{parentName:"p"},"private-key"),", this step proves the validity of the private key, and ensure that the data was not tampered with.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"use ",(0,i.kt)("strong",{parentName:"p"},"public-key")," to generate the address by the specified algorithmic mechanism according to the chain type, and get the account address refer to ",(0,i.kt)("strong",{parentName:"p"},"public-key")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"verify the two account address , success if they are the same.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"if failure, it means the public key does not match the account address, it may happen when some malicious users want to impersonate an account.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"if success, the dApp should return the response to the Identity Provider with the payload:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n    "verified": true,\n    "access-token": "xxxxxx"  # generated by dApp as access token\n}\n'))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lookup Identity"),(0,i.kt)("p",{parentName:"li"},"The dApp gets the account address . It can retrieve the related information of account from the external service providers , such as ENS, Polkadot/Kusama Identity Registrar, etc."))),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("p",null,"There is few solution combine the OAuth and self-custody wallet, and no such solutions in the Polkadot ecosystem. With our solution and the ecosystem tools like polkadot.js extension and Parity Signer, the substrate account could be used to sign in any web2 or web3 platform which support OAuth, user also do not need to input all his information once registered in a new platform, the information could automatically be fetched from the info records in ",(0,i.kt)("inlineCode",{parentName:"p"},"identity")," pallet, which could gain huge adoption of Substrate account in Web2 world."),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hanwen Cheng"),(0,i.kt)("li",{parentName:"ul"},"Yunjian Bian"),(0,i.kt)("li",{parentName:"ul"},"Eric Zhang")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Hanwen Cheng"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:hanwen@litentry.com"},"hanwen@litentry.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Website:")," ",(0,i.kt)("a",{parentName:"li",href:"http://www.litentry.com"},"www.litentry.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," Eichhornstr. 3, 10785 Berlin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Litentry Technologies GmbH.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.litentry.com/"},"Litentry")," Technologies GmbH is a Berlin-based technology company, the team builds the identity-related infrastructure of Web3, builds a Decentralized Identity Aggregation protocol across multiple networks, it features a DID indexing mechanism, and a Substrate-based credit computation network. The protocol provides a decentralized, privacy-preserving interoperable identity aggregation service that mitigates the difficulty of resolving agnostic DID mechanisms. The team has lots of experience in the DID field and has a strong background in Web3 technology. Current products include ",(0,i.kt)("a",{parentName:"p",href:"https://litentry.medium.com/developing-a-did-aggregator-on-blockchain-part-%E2%85%B1-3dab1398c512"},"Litentry Network"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mycryptoprofile.io/"},"My Crypto Profile"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/49"},"a Governance-focused mobile App"),"."),(0,i.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/litentry"},"https://github.com/litentry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/litentry/litentry-parachain"},"https://github.com/litentry/litentry-parachain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/litentry/litentry-app"},"https://github.com/litentry/litentry-app"))),(0,i.kt)("p",null,"Github accounts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hanwencheng"},"https://github.com/hanwencheng")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/bianyunjian"},"https://github.com/bianyunjian")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jingleizhang"},"https://github.com/jingleizhang"))),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,"The development is not started yet."),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("p",null,"As the project is small, we only have 1 milestone to be finished."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,i.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1a."),(0,i.kt)("td",{parentName:"tr",align:null},"Research"),(0,i.kt)("td",{parentName:"tr",align:null},"Survey and discuss with related team 20 FTE hours")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1b."),(0,i.kt)("td",{parentName:"tr",align:null},"Standard Development"),(0,i.kt)("td",{parentName:"tr",align:null},"Create the specification w/o OAuth 20 FTE hours")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1c."),(0,i.kt)("td",{parentName:"tr",align:null},"Create Library"),(0,i.kt)("td",{parentName:"tr",align:null},"Create a Javascript/Typescript library 50 FTE hours")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1d."),(0,i.kt)("td",{parentName:"tr",align:null},"Real Use Case"),(0,i.kt)("td",{parentName:"tr",align:null},"Integration with a dApp as first use case 30 FTE hours")))),(0,i.kt)("p",null,"The hourly pay rate is 50 USD/hour"),(0,i.kt)("p",null,"In total is 120 hours, and the total payment will be 6000 USD equivalent USDT."),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"We planned to have a web app for user to manage the access control of the logged platforms, and enable user to curate the profile information in the future."),(0,i.kt)("p",null,"It would be great to integrate with popular auth solutions in web technology, like passport (node js), next-auth (next.js)."))}h.isMDXComponent=!0}}]);