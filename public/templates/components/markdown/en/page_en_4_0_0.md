### Table of Contents

<!-- TOC depthFrom:1 depthTo:3 withLinks:1 updateOnSave:1 orderedList:0 -->

- [QCObjects](#qcobjects)
- [The meaning of the name QCObjects (Do not forget the Q)](#the-meaning-of-the-name-qcobjects-do-not-forget-the-q)
- [QCObjects Explainer Video](#qcobjects-explainer-video)
- [Table of Contents](#table-of-contents)
- [Principals](#principals)
- [Main features](#main-features)
- [Progressive Web Apps (PWA) Adopted Features](#progressive-web-apps-pwa-adopted-features)
	- [Prevent Render-blocking resources](#prevent-render-blocking-resources)
	- [On-Demand Resources Load](#on-demand-resources-load)
	- [Lazy-loading of images in components (use lazy-src instead of src attribute in img tag)](#lazy-loading-of-images-in-components-use-lazy-src-instead-of-src-attribute-in-img-tag)
- [Cross Browser Javascript Framework for MVC Patterns](#cross-browser-javascript-framework-for-mvc-patterns)
- [Install it, make a textfield or a navigate home functionality, all in just one step.](#install-it-make-a-textfield-or-a-navigate-home-functionality-all-in-just-one-step)
- [Dynamic Components Architecture](#dynamic-components-architecture)
- [ECMA-262 Specification](#ecma-262-specification)
- [Copyright](#copyright)
- [Demo](#demo)
	- [PWA Live Demo](#pwa-live-demo)
	- [Demo Integrating with Foundation](#demo-integrating-with-foundation)
	- [Demo Integrating with Materializecss](#demo-integrating-with-materializecss)
	- [Demo Using Raw CSS](#demo-using-raw-css)
	- [Example of QCObjects using and manipulating canvas objects](#example-of-qcobjects-using-and-manipulating-canvas-objects)
- [DevBlog](#devblog)
- [Fork](#fork)
- [Become a Sponsor](#become-a-sponsor)
- [Check out the QCObjects SDK](#check-out-the-qcobjects-sdk)
- [Donate](#donate)
- [Installing](#installing)
	- [Using QCObjects with Atom:](#using-qcobjects-with-atom)
	- [Using QCObjects in Visual Studio Code:](#using-qcobjects-in-visual-studio-code)
	- [Installing with NPM:](#installing-with-npm)
	- [Installing the docker playground:](#installing-the-docker-playground)
	- [One-Step Installation Script for Ubuntu 18.x](#one-step-installation-script-for-ubuntu-18x)
	- [One-Step Installation Script for RHEL8](#one-step-installation-script-for-rhel8)
	- [One-Step Installation Script for Raspberry PI Raspbian 9](#one-step-installation-script-for-raspberry-pi-raspbian-9)
	- [One-Step Installation Script for macOS](#one-step-installation-script-for-macos)
	- [Install and test QCObjects on Microsoft Windows OS](#install-and-test-qcobjects-on-microsoft-windows-os)
	- [QCObjects Multi-Cloud Installation](#qcobjects-multi-cloud-installation)
		- [DigitalOcean One-Click Droplet](#digitalocean-one-click-droplet)
		- [AWS Amazon Machine Images (AMI)](#aws-amazon-machine-images-ami)
		- [Amazon Web Services AWS PIB (Private Amazon Machine Image)](#amazon-web-services-aws-pib-private-amazon-machine-image)
	- [Using the development version code in the straight way into HTML5:](#using-the-development-version-code-in-the-straight-way-into-html5)
	- [Using the CDN minified version code from jsDelivr CDN](#using-the-cdn-minified-version-code-from-jsdelivr-cdn)
	- [Using the latest non-minified version from jsDelivr CDN](#using-the-latest-non-minified-version-from-jsdelivr-cdn)
	- [Using UNPKG CDN](#using-unpkg-cdn)
	- [Using CDNJS](#using-cdnjs)
- [Reference](#reference)
	- [Essentials](#essentials)
		- [QC\_Object](#qc_object)
		- [ComplexStorageCache](#complexstoragecache)
			- [Usage:](#usage)
			- [Example:](#example)
		- [asyncLoad](#asyncload)
			- [Usage:](#usage-1)
			- [Example:](#example-1)
		- [Class](#class)
			- [Usage:](#usage-2)
			- [Example:](#example-2)
		- [QC\_Append, append method](#qc_append-append-method)
				- [Usage:](#usage-3)
			- [Example:](#example-3)
		- [The \_super\_ method](#the-_super_-method)
			- [Usage:](#usage-4)
			- [Example:](#example-4)
		- [New](#new)
			- [Usage:](#usage-5)
			- [Example:](#example-5)
		- [InheritClass](#inheritclass)
		- [ClassFactory](#classfactory)
			- [Example:](#example-6)
		- [\_Crypt](#_crypt)
			- [Example (1):](#example-1)
			- [Example (2):](#example-2)
		- [GLOBAL](#global)
			- [Example:](#example-7)
		- [CONFIG](#config)
			- [Usage from memory:](#usage-from-memory)
			- [Usage from config.json:](#usage-from-configjson)
			- [Usage from an encrypted config.json:](#usage-from-an-encrypted-configjson)
			- [Dynamic CONFIG Settings](#dynamic-config-settings)
		- [Processor](#processor)
			- [Usage:](#usage-6)
			- [Example:](#example-8)
		- [waitUntil](#waituntil)
			- [Usage:](#usage-7)
			- [Example:](#example-9)
		- [Package](#package)
			- [Usage:](#usage-8)
			- [Example (1):](#example-1-1)
			- [Example (2):](#example-2-1)
		- [Import](#import)
			- [Usage:](#usage-9)
			- [Example (1):](#example-1-2)
			- [Example (2):](#example-2-2)
		- [Export](#export)
			- [Usage:](#usage-10)
			- [Example:](#example-10)
		- [Cast](#cast)
			- [Usage:](#usage-11)
			- [Example:](#example-11)
		- [Tag](#tag)
			- [Usage:](#usage-12)
			- [Example:](#example-12)
		- [Ready](#ready)
			- [Usage:](#usage-13)
		- [Component Class](#component-class)
			- [Properties](#properties)
			- [Methods](#methods)
		- [Component HTML Tag](#component-html-tag)
			- [Available attributes](#available-attributes)
				- [The name Attribute](#the-name-attribute)
					- [Usage:](#usage-14)
					- [Example:](#example-13)
				- [The cached Attribute](#the-cached-attribute)
					- [Usage:](#usage-15)
				- [The data property tag declaration](#the-data-property-tag-declaration)
				- [The controllerClass Attribute](#the-controllerclass-attribute)
					- [Usage:](#usage-16)
				- [The viewClass Attribute](#the-viewclass-attribute)
					- [Usage:](#usage-17)
				- [The componentClass Attribute](#the-componentclass-attribute)
					- [Usage:](#usage-18)
				- [The effecClass Attribute](#the-effecclass-attribute)
					- [Usage:](#usage-19)
				- [The template-source Attribute](#the-template-source-attribute)
					- [Usage:](#usage-20)
				- [The tplextension Attribute](#the-tplextension-attribute)
					- [Usage:](#usage-21)
			- [ComponentURI](#componenturi)
				- [Example:](#example-14)
			- [componentLoader](#componentloader)
				- [Usage:](#usage-22)
				- [Example:](#example-15)
			- [buildComponents](#buildcomponents)
				- [Usage:](#usage-23)
				- [Example:](#example-16)
		- [Controller](#controller)
		- [View](#view)
		- [VO](#vo)
		- [Service](#service)
			- [Properties](#properties-1)
			- [Methods](#methods-1)
		- [serviceLoader](#serviceloader)
			- [Usage:](#usage-24)
			- [Example:](#example-17)
		- [JSONService](#jsonservice)
			- [Properties](#properties-2)
			- [Methods](#methods-2)
			- [Example:](#example-18)
		- [ConfigService](#configservice)
			- [Example:](#example-19)
		- [SourceJS](#sourcejs)
			- [Example:](#example-20)
		- [SourceCSS](#sourcecss)
		- [Effect](#effect)
			- [Example:](#example-21)
		- [Timer](#timer)
			- [Example:](#example-22)
	- [List and Math Functions](#list-and-math-functions)
		- [ArrayList](#arraylist)
		- [ArrayCollection](#arraycollection)
		- [\[ArrayList or Array\].unique](#arraylist-or-arrayunique)
		- [\[ArrayList or Array\].table](#arraylist-or-arraytable)
		- [\[ArrayList or Array\].sort](#arraylist-or-arraysort)
		- [\[ArrayList or Array\].sortBy](#arraylist-or-arraysortby)
		- [\[ArrayList or Array\].matrix](#arraylist-or-arraymatrix)
			- [Usage](#usage-25)
		- [\[ArrayList or Array\].matrix2d](#arraylist-or-arraymatrix2d)
		- [\[ArrayList or Array\].matrix3d](#arraylist-or-arraymatrix3d)
		- [range](#range)
			- [Usage](#usage-26)
		- [Array.sum](#arraysum)
		- [Array.avg](#arrayavg)
		- [Array.min](#arraymin)
		- [Array.max](#arraymax)
	- [SDK](#sdk)
		- [SDK Components](#sdk-components)
			- [org.quickcorp.components.ShadowedComponent](#orgquickcorpcomponentsshadowedcomponent)
				- [Usage:](#usage-27)
			- [org.quickcorp.components.FormField](#orgquickcorpcomponentsformfield)
				- [Usage:](#usage-28)
				- [FormField.executeBindings():](#formfieldexecutebindings)
				- [Data Binding Event Change:](#data-binding-event-change)
				- [Data Binding Event Blur:](#data-binding-event-blur)
				- [Data Binding Event Focus:](#data-binding-event-focus)
				- [Data Binding Event Keydown:](#data-binding-event-keydown)
			- [org.quickcorp.components.ButtonField](#orgquickcorpcomponentsbuttonfield)
				- [Usage:](#usage-29)
			- [org.quickcorp.components.InputField](#orgquickcorpcomponentsinputfield)
				- [Usage:](#usage-30)
			- [org.quickcorp.components.TextField](#orgquickcorpcomponentstextfield)
				- [Usage:](#usage-31)
			- [org.quickcorp.components.EmailField](#orgquickcorpcomponentsemailfield)
				- [Usage:](#usage-32)
			- [org.quickcorp.components.GridComponent](#orgquickcorpcomponentsgridcomponent)
				- [Usage:](#usage-33)
				- [Example:](#example-23)
			- [org.quickcorp.components.ModalEnclosureComponent](#orgquickcorpcomponentsmodalenclosurecomponent)
			- [org.quickcorp.components.ModalComponent](#orgquickcorpcomponentsmodalcomponent)
			- [org.quickcorp.components.SwaggerUIComponent](#orgquickcorpcomponentsswaggeruicomponent)
				- [Usage:](#usage-34)
			- [org.quickcorp.components.splashscreen.VideoSplashScreenComponent](#orgquickcorpcomponentssplashscreenvideosplashscreencomponent)
				- [Example:](#example-24)
		- [SDK Controllers](#sdk-controllers)
			- [org.quickcorp.controllers.GridController](#orgquickcorpcontrollersgridcontroller)
			- [org.quickcorp.controllers.DataGridController](#orgquickcorpcontrollersdatagridcontroller)
				- [Usage:](#usage-35)
				- [Example:](#example-25)
			- [org.quickcorp.controllers.ModalController](#orgquickcorpcontrollersmodalcontroller)
			- [org.quickcorp.controllers.FormValidations](#orgquickcorpcontrollersformvalidations)
			- [Usage:](#usage-36)
			- [org.quickcorp.controllers.FormController](#orgquickcorpcontrollersformcontroller)
				- [\[FormController\].serviceClass](#formcontrollerserviceclass)
				- [\[FormController\].formSettings](#formcontrollerformsettings)
				- [\[FormController\].validations](#formcontrollervalidations)
				- [Usage:](#usage-37)
				- [\[FormController\].formSaveTouchHandler](#formcontrollerformsavetouchhandler)
				- [A complete example of FormController](#a-complete-example-of-formcontroller)
			- [org.quickcorp.controllers.SwaggerUIController](#orgquickcorpcontrollersswaggeruicontroller)
				- [Usage:](#usage-38)
		- [SDK Effects](#sdk-effects)
			- [org.quickcorp.tools.effects.Move](#orgquickcorptoolseffectsmove)
				- [Usage:](#usage-39)
				- [Example:](#example-26)
			- [org.quickcorp.tools.effects.MoveXInFromRight](#orgquickcorptoolseffectsmovexinfromright)
				- [Usage:](#usage-40)
				- [Example:](#example-27)
			- [org.quickcorp.tools.effects.MoveXInFromLeft](#orgquickcorptoolseffectsmovexinfromleft)
				- [Usage:](#usage-41)
				- [Example:](#example-28)
			- [org.quickcorp.tools.effects.MoveYInFromBottom](#orgquickcorptoolseffectsmoveyinfrombottom)
				- [Usage:](#usage-42)
				- [Example:](#example-29)
			- [org.quickcorp.tools.effects.MoveYInFromTop](#orgquickcorptoolseffectsmoveyinfromtop)
				- [Usage:](#usage-43)
				- [Example:](#example-30)
			- [org.quickcorp.tools.effects.RotateX](#orgquickcorptoolseffectsrotatex)
				- [Usage:](#usage-44)
				- [Example:](#example-31)
			- [org.quickcorp.tools.effects.RotateY](#orgquickcorptoolseffectsrotatey)
				- [Usage:](#usage-45)
				- [Example:](#example-32)
			- [org.quickcorp.tools.effects.RotateZ](#orgquickcorptoolseffectsrotatez)
				- [Usage:](#usage-46)
				- [Example:](#example-33)
			- [org.quickcorp.tools.effects.Rotate](#orgquickcorptoolseffectsrotate)
				- [Usage:](#usage-47)
				- [Example:](#example-34)
			- [org.quickcorp.tools.effects.Fade](#orgquickcorptoolseffectsfade)
				- [Usage:](#usage-48)
			- [org.quickcorp.tools.effects.Radius](#orgquickcorptoolseffectsradius)
				- [Usage:](#usage-49)
				- [Example:](#example-35)
			- [org.quickcorp.tools.effects.Resize](#orgquickcorptoolseffectsresize)
				- [Usage:](#usage-50)
				- [Example:](#example-36)
			- [org.quickcorp.tools.effects.WipeLeft](#orgquickcorptoolseffectswipeleft)
				- [Usage:](#usage-51)
				- [Example](#example-37)
			- [org.quickcorp.tools.effects.WipeRight](#orgquickcorptoolseffectswiperight)
				- [Usage:](#usage-52)
				- [Example](#example-38)
			- [org.quickcorp.tools.effects.WipeUp](#orgquickcorptoolseffectswipeup)
				- [Usage:](#usage-53)
				- [Example](#example-39)
			- [org.quickcorp.tools.effects.WipeDown](#orgquickcorptoolseffectswipedown)
				- [Usage:](#usage-54)
				- [Example](#example-40)
		- [SDK Misc Tools](#sdk-misc-tools)
			- [org.quickcorp.tools.canvas.CanvasTool](#orgquickcorptoolscanvascanvastool)
			- [org.quickcorp.tools.layouts.BasicLayout](#orgquickcorptoolslayoutsbasiclayout)
		- [SDK Views](#sdk-views)
			- [org.quickcorp.views.GridView](#orgquickcorpviewsgridview)
		- [SDK i18n messages](#sdk-i18n-messages)
			- [org.quickcorp.i18n\_messages.i18n\_messages](#orgquickcorpi18n_messagesi18n_messages)
				- [Usage:](#usage-55)
				- [Example](#example-41)
	- [The QCObjects HTTP2 Built-In Server](#the-qcobjects-http2-built-in-server)
		- [Start serving your files with QCObjects](#start-serving-your-files-with-qcobjects)
		- [Principals of an N-Tier or Multitier architecture](#principals-of-an-n-tier-or-multitier-architecture)
		- [Micro-services Principals](#micro-services-principals)
		- [Backend settings in config.json](#backend-settings-in-configjson)
		- [Backend routing](#backend-routing)
		- [The QCObjects Microservice Class and Package](#the-qcobjects-microservice-class-and-package)
		- [Generating a Self-Signed Certificate with QCObjects](#generating-a-self-signed-certificate-with-qcobjects)
		- [Working with a Letsencrypt HTTPS certificate, Certbot and QCObjects](#working-with-a-letsencrypt-https-certificate-certbot-and-qcobjects)
- [Quick Start Guide](#quick-start-guide)
		- [Quick Start your PWA (Progressive Web App)](#quick-start-your-pwa-progressive-web-app)
		- [Quick Start your AMP (Accelerated Mobile Page)](#quick-start-your-amp-accelerated-mobile-page)
- [Start Coding](#start-coding)
	- [Step 1: Start creating a main import file and name it like: cl.quickcorp.js. Put it into packages/js/ file directory](#step-1-start-creating-a-main-import-file-and-name-it-like-clquickcorpjs-put-it-into-packagesjs-file-directory)
	- [Step 2: Then create some services inhereting classes into the file js/packages/cl.quickcorp.services.js :](#step-2-then-create-some-services-inhereting-classes-into-the-file-jspackagesclquickcorpservicesjs-)
	- [Step 3: Now it's time to create the components (cl.quickcorp.components.js)](#step-3-now-its-time-to-create-the-components-clquickcorpcomponentsjs)
	- [Step 4: Once you have done the above components declaration, you will now want to code your controllers (cl.quickcorp.controller.js)](#step-4-once-you-have-done-the-above-components-declaration-you-will-now-want-to-code-your-controllers-clquickcorpcontrollerjs)
	- [Step 5: To use into the HTML5 code you only need to do some settings between script tags:](#step-5-to-use-into-the-html5-code-you-only-need-to-do-some-settings-between-script-tags)
- [QCObjects CLI Tool](#qcobjects-cli-tool)
	- [Usage](#usage-56)
	- [Options](#options)
	- [Commands](#commands)
	- [Use:](#use)
	- [License](#license)

<!-- /TOC -->

