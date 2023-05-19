"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6295],{25300:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(95657);const i={},l="Crossbow (formerly Creator)",o={unversionedId:"applications/crossbow",id:"applications/crossbow",title:"Crossbow (formerly Creator)",description:"- Team Name: DodoRare, Inc.",source:"@site/applications/crossbow.md",sourceDirName:"applications",slug:"/applications/crossbow",permalink:"/applications/crossbow",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/crossbow.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Maintenance list",id:"maintenance-list",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 AAB and new engine support",id:"milestone-1--aab-and-new-engine-support",level:3},{value:"Milestone 2 \u2014 Android Plugins and Cross-platform permissions",id:"milestone-2--android-plugins-and-cross-platform-permissions",level:3},{value:"Milestone 3 \u2014 Android Plugins",id:"milestone-3--android-plugins",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],d={toc:s},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"crossbow-formerly-creator"},"Crossbow (formerly ",(0,r.kt)("inlineCode",{parentName:"h1"},"Creator"),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," DodoRare, Inc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"In the previous grant, we built a tool that can automate building rust game projects for Android and iOS and tested it on applications with base elements such as 2D image / 3D model rendering, music, touch events, networking (substrate communication), etc. Also, we made it engine agnostic, and the process itself of creating similar apps pretty straightforward. But there are plenty of things left to do to provide full support of features for more advanced games: like notifications, permissions, in-app purchases, better sounds and music support, Google Play/Apple ID authentication, AdMob, iOS Bitcode, Android Application Bundles, or AAB, etc. Most of these problems are not easy to solve, and many projects facing them are moving to more popular engines because you never know how much time it will take to add IAP or authentication to your project in pure rust. So our intention on this grant is to continue fixing and adding the most crucial components of games so that the whole rust community can use them in any rust project without any problems."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Crossbow - Cross-Platform Rust Toolkit for Games."),(0,r.kt)("p",null,"A goal of the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossbow")," project is to provide a complete infrastructure for game development in rust. In addition, the project simplifies the creation and packaging of crates for Android, iOS, and other platforms. Finally, we want to make most of our tools - engine agnostic to help rust game developers integrate them into their games, engines, and crates."),(0,r.kt)("p",null,"Plenty of Polkadot / Kusama / Substrate game projects want to develop their games in pure rust game engines, but as there's no well-tested and reliable software - they choose standard game engines. It's terrible for the Substrate ecosystem in several ways: 1. they could enhance the rust ecosystem; 2. generate more rust jobs that will potentially start own Polkadot projects in the future or contribute to the ecosystem itself; 3. miss an opportunity to integrate full or light Substrate node directly in-game for peer2peer synchronization and a lot of other exciting stuff."),(0,r.kt)("p",null,"Of course, there are already a bunch of promising game engine projects, but they almost all don't provide at least adequate support to simple tools like mobile permissions, game SDK, auth, achievements, etc. That's why we want to create a single game toolkit for the most popular platforms."),(0,r.kt)("h3",{id:"maintenance-list"},"Maintenance list"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dodorare/crossbow"},"https://github.com/dodorare/crossbow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dodorare/android-manifest-rs"},"https://github.com/dodorare/android-manifest-rs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dodorare/apple-bundle-rs"},"https://github.com/dodorare/apple-bundle-rs"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("em",{parentName:"p"},"Note that we may move some libraries to separate repositories for more convenient maintenance in the future."))),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"David Knyshenko, Blockchain/Full stack developer and Team Leader"),(0,r.kt)("li",{parentName:"ul"},"Oleksii Knyshenko, Mobile/Backend developer"),(0,r.kt)("li",{parentName:"ul"},"Kulmurzin Adil, Android developer"),(0,r.kt)("li",{parentName:"ul"},"Daniil Anikin, Mobile/System developer"),(0,r.kt)("li",{parentName:"ul"},"Rodrigo Oliveira, Game/Mobile developer")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," David Knyshenko"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:info@dodorare.com"},"info@dodorare.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Website:")," ",(0,r.kt)("a",{parentName:"li",href:"https://dodorare.com"},"https://dodorare.com"))),(0,r.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," 651 N Broad St Suite 206, Middletown, DE 19709."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," DodoRare, Inc.")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mobile Game Framework - Our first team Web3Foundation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enfipy/Grants-Program/blob/master/applications/mobile-game-framework.md"},"grant"),", mobile building tool. By ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dodorare"},"our team"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Substrate Atom and VSCode plugins - Have contributed some code to Web3Foundation Grant for Substrate ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everstake/vscode-plugin-substrate/graphs/contributors"},"VSCode")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everstake/atom-plugin-substrate/graphs/contributors"},"Atom")," plugins while worked in outsource company. By ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enfipy"},"enfipy"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/adoriasoft/polkadot_cosmos_integration"},"Polkadot CosmosSDK Integration")," - Also, contributed to another Web3Foundation Grant while worked in another outsource company. Built some logic behind ABCI, pallet and substrate with tendermint. By ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enfipy"},"enfipy"),"."))),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/dodorare"},"https://github.com/dodorare"))),(0,r.kt)("p",null,"GitHub accounts of all team members:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/enfipy"},"https://github.com/enfipy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/olvyko"},"https://github.com/olvyko")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Heezay"},"https://github.com/Heezay")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Adoka3710"},"https://github.com/Adoka3710")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/rodrigocam"},"https://github.com/rodrigocam"))),(0,r.kt)("h3",{id:"team-linkedin-profiles-if-available"},"Team LinkedIn Profiles (if available)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ackerman-david/"},"https://www.linkedin.com/in/ackerman-david/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/oleksii-knyshenko/"},"https://www.linkedin.com/in/oleksii-knyshenko/"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 5.0 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 3.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 40,000 USD")),(0,r.kt)("h3",{id:"milestone-1--aab-and-new-engine-support"},"Milestone 1 \u2014 AAB and new engine support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 1 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 3.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a user can create own game project with Macroquad and our toolkit, generate and sign AAB file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Add aapt2 tool wrapper"),(0,r.kt)("td",{parentName:"tr",align:null},"Add wrapper for ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/studio/command-line/aapt2"},"aapt2")," tool for AAB generation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Add bundletool wrapper"),(0,r.kt)("td",{parentName:"tr",align:null},"Add wrapper for ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/studio/command-line/aapt2"},"bundletool")," for generation AAB file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Support AAB (needs deliverable#1 and deliverable#2)"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support of generation AAB file. ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/guide/app-bundle"},"Android App Bundle")," is a publishing format that includes all your app\u2019s compiled code and resources.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Support Macroquad engine"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support of ",(0,r.kt)("a",{parentName:"td",href:"https://macroquad.rs/"},"Macroquad")," engine. We will change our crossbundle command-line tool to support Android building of Macroquad.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Enhance documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"Write better code and wiki documentation.")))),(0,r.kt)("h3",{id:"milestone-2--android-plugins-and-cross-platform-permissions"},"Milestone 2 \u2014 Android Plugins and Cross-platform permissions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2.0 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 4.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to create own Android plugins and how to use cross-platform permissions. Also, update docs on how to install and start using toolkit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Support Android Plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support of Android plugins to help add additional functionality provided by the Android platform and ecosystem (like Ads, Auth, In-app purchases, etc.). Something similar to ",(0,r.kt)("a",{parentName:"td",href:"https://docs.godotengine.org/en/stable/tutorials/plugins/android/android_plugin.html"},"Godot Android plugins")," and ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/google/play-unity-plugins"},"Unity Plugins")," (or ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/playgameservices/play-games-plugin-for-unity"},"here"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Support Cross-platform permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a single cross-platform permission API that works with any ",(0,r.kt)("a",{parentName:"td",href:"https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessing-user-data/"},"iOS"),", ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/games/develop/permissions"},"Android")," application that can be accessed from shared code no matter how the user interface is created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Simple installation of Android SDK and NDK"),(0,r.kt)("td",{parentName:"tr",align:null},"Simple installation with environment variables, libs, etc. Make installation of Android SDK, NDK, tools more robust.")))),(0,r.kt)("h3",{id:"milestone-3--android-plugins"},"Milestone 3 \u2014 Android Plugins"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2.0 months"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:")," 3.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 15,000 USD")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how to use Google Play Billing and In-App updates in your own rust game project.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"0d."),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Sign in with Google"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support of ",(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/games/services/common/concepts/sign-in"},"Google Sign In")," inside any application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Android In-App purchases with Google Play Billing"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support for ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/godotengine/godot-google-play-billing"},"Google Play Billing"),". Make it possible to buy items from your game.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Support Android In-App updates"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support for ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/guide/playcore/in-app-updates"},"Android In-App updates"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Support Android In-App billing"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support for ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/google/play-unity-plugins/tree/master/GooglePlayPlugins"},"Android In-App billing"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will prepare and publish an article/tutorial that explains how to add Sign in with Google, create own Android Plugins with our toolkit (what was done/achieved as part of the grant).")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"Possible additional features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Firebase SDK."),(0,r.kt)("li",{parentName:"ul"},"Android Game SDK."),(0,r.kt)("li",{parentName:"ul"},"Some features that people will may be interested in.")),(0,r.kt)("p",null,"Also we want to make similar stuff for native iOS apps. Current nearest plans are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Support iOS Plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support of iOS plugins to help add additional functionality provided by the Apple platforms and ecosystem (like Ads, Auth, In-app purchases, etc.). Something similar to ",(0,r.kt)("a",{parentName:"td",href:"https://docs.godotengine.org/en/stable/tutorials/platform/ios/ios_plugin.html"},"Godot iOS plugins"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Sign in with Apple"),(0,r.kt)("td",{parentName:"tr",align:null},"Add support of ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/lupidan/apple-signin-unity"},"Apple Sign In")," inside any application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Better support for Apple xcrun, xcode proj"),(0,r.kt)("td",{parentName:"tr",align:null},"Add better support and rust wrappers for Apple xcode tools, xcrun. Make cool xcode project generation library.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Apple Game Center"),(0,r.kt)("td",{parentName:"tr",align:null},"Add ",(0,r.kt)("a",{parentName:"td",href:"https://developer.apple.com/documentation/gamekit"},"Apple Game Center")," support.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Support Apple In-App purchases"),(0,r.kt)("td",{parentName:"tr",align:null},"Support Apple ",(0,r.kt)("a",{parentName:"td",href:"https://developer.apple.com/documentation/storekit/in-app_purchase"},"StoreKit"),". Make it possible to buy items from your application.")))),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How did you hear about the Maintenance Grants Program?")," Personal recommendation."))}u.isMDXComponent=!0}}]);