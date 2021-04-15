/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
const version = "";
const appName = "qcobjects-docs";
const cacheSufix = (Math.round(Date.now()/(1000*3600))).toString(); // 1 hour
const cacheName = `qcobjects-app-${appName}-${version}-${cacheSufix}`;
const start_url = "/?homescreen=1";
caches.delete(cacheName); // force to reload cache for the first time the sw is loaded
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([`${start_url}`,
	"/",
	"LICENSE.txt",
	"README-es.md",
	"README-es.pdf",
	"README.md",
	"README.pdf",
	"README.rst",
	"VERSION",
	"doc/css/components/3dcubesplashscreen.css",
	"doc/css/components/appbar-dark.css",
	"doc/css/components/appbar-white.css",
	"doc/css/components/card.css",
	"doc/css/components/floating-object-effect.css",
	"doc/css/components/hero/hero-call-to-action.css",
	"doc/css/components/hero/hero-overlay.css",
	"doc/css/components/hero/hero-two-column-form.css",
	"doc/css/components/login.css",
	"doc/css/components/modal.css",
	"doc/css/components/morph-shape-effect.css",
	"doc/css/desktop/container.css",
	"doc/css/desktop/content.css",
	"doc/css/desktop/footer.css",
	"doc/css/desktop/index.css",
	"doc/css/desktop/navbar.css",
	"doc/css/desktop/sidebar.css",
	"doc/css/github-style.css",
	"doc/css/index.css",
	"doc/css/mobile/content.css",
	"doc/css/mobile/footer.css",
	"doc/css/mobile/index.css",
	"doc/css/mobile/navbar.css",
	"doc/css/mobile/sidebar.css",
	"doc/css/modern-base.css",
	"doc/css/modern-fonts.css",
	"doc/css/prism-okaidia.css",
	"doc/css/snippet.css",
	"doc/css/theme/basic/style.css",
	"doc/css/theme/cyan/style.css",
	"doc/css/theme/neumorphism/style.css",
	"doc/css/theme/redlight/style.css",
	"doc/css/theme/xtra/style.css",
	"doc/img/Q_web copy.png",
	"doc/img/Q_web-white.png",
	"doc/img/Q_web.png",
	"doc/img/Q_web.svg",
	"doc/img/bookcover-qcobjects-ce-amazon.png",
	"doc/img/home/bg_hr.png",
	"doc/img/home/blacktocat.png",
	"doc/img/home/icon_download.png",
	"doc/img/home/sprite_download.png",
	"doc/img/icons/home-icon-jma-nofill.svg",
	"doc/img/icons/home-icon-jma.svg",
	"doc/img/icons/home-icon.png",
	"doc/img/icons/icon-128x128.png",
	"doc/img/icons/icon-144x144.png",
	"doc/img/icons/icon-152x152.png",
	"doc/img/icons/icon-192x192.png",
	"doc/img/icons/icon-384x384.png",
	"doc/img/icons/icon-512x512.png",
	"doc/img/icons/icon-72x72.png",
	"doc/img/icons/icon-96x96.png",
	"doc/img/installing-qcobjects.png",
	"doc/img/logo-qcobjects-white-original.svg",
	"doc/img/logo-qcobjects-white.svg",
	"doc/img/logo-qcobjects.svg",
	"doc/img/logo.png",
	"doc/img/placeholder.svg",
	"doc/img/qcobjects-cli.png",
	"doc/img/qcobjects-essentials.png",
	"doc/img/screenshots/screenshot1.png",
	"doc/img/screenshots/screenshot1.webp",
	"doc/img/screenshots/screenshot2.png",
	"doc/img/screenshots/screenshot2.webp",
	"doc/js/init.js",
	"doc/js/packages/installer.js",
	"doc/js/packages/org.quickcorp.custom.components.js",
	"doc/js/packages/org.quickcorp.custom.controllers.js",
	"doc/js/packages/org.quickcorp.custom.js",
	"doc/js/packages/org.quickcorp.custom.models.js",
	"doc/js/packages/org.quickcorp.custom.tools.js",
	"doc/js/packages/org.quickcorp.custom.views.js",
	"doc/js/prism-okaidia.js",
	"doc/templates/components/appbar.tpl.html",
	"doc/templates/components/article1.tpl.html",
	"doc/templates/components/article2.tpl.html",
	"doc/templates/components/article3.tpl.html",
	"doc/templates/components/article4.tpl.html",
	"doc/templates/components/blank.md",
	"doc/templates/components/blank.tpl.html",
	"doc/templates/components/boxed-content.tpl.html",
	"doc/templates/components/card.tpl.html",
	"doc/templates/components/contentblock.tpl.html",
	"doc/templates/components/footer.tpl.html",
	"doc/templates/components/footer2.tpl.html",
	"doc/templates/components/header.tpl.html",
	"doc/templates/components/layout-basic.tpl.html",
	"doc/templates/components/login.tpl.html",
	"doc/templates/components/login2.tpl.html",
	"doc/templates/components/loginform.tpl.html",
	"doc/templates/components/markdown/en/AUTHOR.md",
	"doc/templates/components/markdown/en/page_en_0.md",
	"doc/templates/components/markdown/en/page_en_0_0.md",
	"doc/templates/components/markdown/en/page_en_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_0_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_1.md",
	"doc/templates/components/markdown/en/page_en_10.md",
	"doc/templates/components/markdown/en/page_en_10_0.md",
	"doc/templates/components/markdown/en/page_en_10_0_0.md",
	"doc/templates/components/markdown/en/page_en_10_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_11.md",
	"doc/templates/components/markdown/en/page_en_11_0.md",
	"doc/templates/components/markdown/en/page_en_11_0_0.md",
	"doc/templates/components/markdown/en/page_en_11_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_12.md",
	"doc/templates/components/markdown/en/page_en_12_0.md",
	"doc/templates/components/markdown/en/page_en_12_0_0.md",
	"doc/templates/components/markdown/en/page_en_12_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_13.md",
	"doc/templates/components/markdown/en/page_en_13_0.md",
	"doc/templates/components/markdown/en/page_en_13_0_0.md",
	"doc/templates/components/markdown/en/page_en_13_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_13_1.md",
	"doc/templates/components/markdown/en/page_en_13_1_0.md",
	"doc/templates/components/markdown/en/page_en_13_1_0_0.md",
	"doc/templates/components/markdown/en/page_en_13_2.md",
	"doc/templates/components/markdown/en/page_en_13_2_0.md",
	"doc/templates/components/markdown/en/page_en_13_2_0_0.md",
	"doc/templates/components/markdown/en/page_en_13_3.md",
	"doc/templates/components/markdown/en/page_en_13_3_0.md",
	"doc/templates/components/markdown/en/page_en_13_3_0_0.md",
	"doc/templates/components/markdown/en/page_en_13_4.md",
	"doc/templates/components/markdown/en/page_en_13_4_0.md",
	"doc/templates/components/markdown/en/page_en_13_4_0_0.md",
	"doc/templates/components/markdown/en/page_en_13_5.md",
	"doc/templates/components/markdown/en/page_en_13_5_0.md",
	"doc/templates/components/markdown/en/page_en_13_5_0_0.md",
	"doc/templates/components/markdown/en/page_en_14.md",
	"doc/templates/components/markdown/en/page_en_14_0.md",
	"doc/templates/components/markdown/en/page_en_14_0_0.md",
	"doc/templates/components/markdown/en/page_en_14_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_15.md",
	"doc/templates/components/markdown/en/page_en_15_0.md",
	"doc/templates/components/markdown/en/page_en_15_0_0.md",
	"doc/templates/components/markdown/en/page_en_15_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_16.md",
	"doc/templates/components/markdown/en/page_en_16_0.md",
	"doc/templates/components/markdown/en/page_en_16_0_0.md",
	"doc/templates/components/markdown/en/page_en_16_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_17.md",
	"doc/templates/components/markdown/en/page_en_17_0.md",
	"doc/templates/components/markdown/en/page_en_17_0_0.md",
	"doc/templates/components/markdown/en/page_en_17_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_18.md",
	"doc/templates/components/markdown/en/page_en_18_0.md",
	"doc/templates/components/markdown/en/page_en_18_0_0.md",
	"doc/templates/components/markdown/en/page_en_18_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_19.md",
	"doc/templates/components/markdown/en/page_en_19_0.md",
	"doc/templates/components/markdown/en/page_en_19_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_1.md",
	"doc/templates/components/markdown/en/page_en_19_10.md",
	"doc/templates/components/markdown/en/page_en_19_10_0.md",
	"doc/templates/components/markdown/en/page_en_19_10_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_11.md",
	"doc/templates/components/markdown/en/page_en_19_11_0.md",
	"doc/templates/components/markdown/en/page_en_19_11_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_12.md",
	"doc/templates/components/markdown/en/page_en_19_12_0.md",
	"doc/templates/components/markdown/en/page_en_19_12_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_13.md",
	"doc/templates/components/markdown/en/page_en_19_13_0.md",
	"doc/templates/components/markdown/en/page_en_19_13_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_14.md",
	"doc/templates/components/markdown/en/page_en_19_14_0.md",
	"doc/templates/components/markdown/en/page_en_19_14_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_1_0.md",
	"doc/templates/components/markdown/en/page_en_19_1_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_2.md",
	"doc/templates/components/markdown/en/page_en_19_2_0.md",
	"doc/templates/components/markdown/en/page_en_19_2_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_3.md",
	"doc/templates/components/markdown/en/page_en_19_3_0.md",
	"doc/templates/components/markdown/en/page_en_19_3_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_4.md",
	"doc/templates/components/markdown/en/page_en_19_4_0.md",
	"doc/templates/components/markdown/en/page_en_19_4_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_5.md",
	"doc/templates/components/markdown/en/page_en_19_5_0.md",
	"doc/templates/components/markdown/en/page_en_19_5_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_6.md",
	"doc/templates/components/markdown/en/page_en_19_6_0.md",
	"doc/templates/components/markdown/en/page_en_19_6_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_7.md",
	"doc/templates/components/markdown/en/page_en_19_7_0.md",
	"doc/templates/components/markdown/en/page_en_19_7_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_8.md",
	"doc/templates/components/markdown/en/page_en_19_8_0.md",
	"doc/templates/components/markdown/en/page_en_19_8_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_9.md",
	"doc/templates/components/markdown/en/page_en_19_9_0.md",
	"doc/templates/components/markdown/en/page_en_19_9_0_0.md",
	"doc/templates/components/markdown/en/page_en_19_9_1.md",
	"doc/templates/components/markdown/en/page_en_19_9_1_0.md",
	"doc/templates/components/markdown/en/page_en_19_9_2.md",
	"doc/templates/components/markdown/en/page_en_19_9_2_0.md",
	"doc/templates/components/markdown/en/page_en_19_9_3.md",
	"doc/templates/components/markdown/en/page_en_19_9_3_0.md",
	"doc/templates/components/markdown/en/page_en_1_0.md",
	"doc/templates/components/markdown/en/page_en_1_0_0.md",
	"doc/templates/components/markdown/en/page_en_1_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_2.md",
	"doc/templates/components/markdown/en/page_en_20.md",
	"doc/templates/components/markdown/en/page_en_20_0.md",
	"doc/templates/components/markdown/en/page_en_20_0_0.md",
	"doc/templates/components/markdown/en/page_en_20_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_20_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_0_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_10.md",
	"doc/templates/components/markdown/en/page_en_20_1_10_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_10_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_11.md",
	"doc/templates/components/markdown/en/page_en_20_1_11_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_11_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_12.md",
	"doc/templates/components/markdown/en/page_en_20_1_12_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_12_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_12_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_12_3.md",
	"doc/templates/components/markdown/en/page_en_20_1_12_4.md",
	"doc/templates/components/markdown/en/page_en_20_1_13.md",
	"doc/templates/components/markdown/en/page_en_20_1_13_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_13_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_13_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_14.md",
	"doc/templates/components/markdown/en/page_en_20_1_14_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_14_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_14_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_15.md",
	"doc/templates/components/markdown/en/page_en_20_1_15_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_15_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_15_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_15_3.md",
	"doc/templates/components/markdown/en/page_en_20_1_16.md",
	"doc/templates/components/markdown/en/page_en_20_1_16_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_16_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_16_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_16_3.md",
	"doc/templates/components/markdown/en/page_en_20_1_17.md",
	"doc/templates/components/markdown/en/page_en_20_1_17_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_17_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_17_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_18.md",
	"doc/templates/components/markdown/en/page_en_20_1_18_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_18_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_18_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_19.md",
	"doc/templates/components/markdown/en/page_en_20_1_19_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_19_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_19_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_1_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_20.md",
	"doc/templates/components/markdown/en/page_en_20_1_20_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_20_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_21.md",
	"doc/templates/components/markdown/en/page_en_20_1_21_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_21_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_21_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_22.md",
	"doc/templates/components/markdown/en/page_en_20_1_22_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_22_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_22_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_22_3.md",
	"doc/templates/components/markdown/en/page_en_20_1_22_4.md",
	"doc/templates/components/markdown/en/page_en_20_1_23.md",
	"doc/templates/components/markdown/en/page_en_20_1_23_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_24.md",
	"doc/templates/components/markdown/en/page_en_20_1_24_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_25.md",
	"doc/templates/components/markdown/en/page_en_20_1_25_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_26.md",
	"doc/templates/components/markdown/en/page_en_20_1_26_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_26_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_26_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_27.md",
	"doc/templates/components/markdown/en/page_en_20_1_27_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_27_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_27_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_28.md",
	"doc/templates/components/markdown/en/page_en_20_1_28_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_28_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_28_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_28_3.md",
	"doc/templates/components/markdown/en/page_en_20_1_29.md",
	"doc/templates/components/markdown/en/page_en_20_1_29_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_29_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_2_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_2_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_2_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_3.md",
	"doc/templates/components/markdown/en/page_en_20_1_30.md",
	"doc/templates/components/markdown/en/page_en_20_1_30_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_30_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_31.md",
	"doc/templates/components/markdown/en/page_en_20_1_31_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_32.md",
	"doc/templates/components/markdown/en/page_en_20_1_32_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_32_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_33.md",
	"doc/templates/components/markdown/en/page_en_20_1_33_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_33_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_3_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_3_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_3_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_4.md",
	"doc/templates/components/markdown/en/page_en_20_1_4_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_4_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_4_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_5.md",
	"doc/templates/components/markdown/en/page_en_20_1_5_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_5_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_6.md",
	"doc/templates/components/markdown/en/page_en_20_1_6_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_6_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_6_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_7.md",
	"doc/templates/components/markdown/en/page_en_20_1_7_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_7_1.md",
	"doc/templates/components/markdown/en/page_en_20_1_7_2.md",
	"doc/templates/components/markdown/en/page_en_20_1_8.md",
	"doc/templates/components/markdown/en/page_en_20_1_8_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_9.md",
	"doc/templates/components/markdown/en/page_en_20_1_9_0.md",
	"doc/templates/components/markdown/en/page_en_20_1_9_1.md",
	"doc/templates/components/markdown/en/page_en_20_2.md",
	"doc/templates/components/markdown/en/page_en_20_2_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_0_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_1.md",
	"doc/templates/components/markdown/en/page_en_20_2_10.md",
	"doc/templates/components/markdown/en/page_en_20_2_10_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_10_1.md",
	"doc/templates/components/markdown/en/page_en_20_2_11.md",
	"doc/templates/components/markdown/en/page_en_20_2_11_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_12.md",
	"doc/templates/components/markdown/en/page_en_20_2_12_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_13.md",
	"doc/templates/components/markdown/en/page_en_20_2_13_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_14.md",
	"doc/templates/components/markdown/en/page_en_20_2_14_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_1_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_2.md",
	"doc/templates/components/markdown/en/page_en_20_2_2_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_3.md",
	"doc/templates/components/markdown/en/page_en_20_2_3_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_4.md",
	"doc/templates/components/markdown/en/page_en_20_2_4_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_5.md",
	"doc/templates/components/markdown/en/page_en_20_2_5_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_6.md",
	"doc/templates/components/markdown/en/page_en_20_2_6_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_7.md",
	"doc/templates/components/markdown/en/page_en_20_2_7_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_7_1.md",
	"doc/templates/components/markdown/en/page_en_20_2_8.md",
	"doc/templates/components/markdown/en/page_en_20_2_8_0.md",
	"doc/templates/components/markdown/en/page_en_20_2_9.md",
	"doc/templates/components/markdown/en/page_en_20_2_9_0.md",
	"doc/templates/components/markdown/en/page_en_20_3.md",
	"doc/templates/components/markdown/en/page_en_20_3_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_0_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_1.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_1.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_10.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_11.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_2.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_3.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_4.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_5.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_6.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_7.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_8.md",
	"doc/templates/components/markdown/en/page_en_20_3_1_9.md",
	"doc/templates/components/markdown/en/page_en_20_3_2.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_1.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_2.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_3.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_4.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_5.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_6.md",
	"doc/templates/components/markdown/en/page_en_20_3_2_7.md",
	"doc/templates/components/markdown/en/page_en_20_3_3.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_1.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_10.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_11.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_12.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_13.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_14.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_15.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_16.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_2.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_3.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_4.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_5.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_6.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_7.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_8.md",
	"doc/templates/components/markdown/en/page_en_20_3_3_9.md",
	"doc/templates/components/markdown/en/page_en_20_3_4.md",
	"doc/templates/components/markdown/en/page_en_20_3_4_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_4_1.md",
	"doc/templates/components/markdown/en/page_en_20_3_4_2.md",
	"doc/templates/components/markdown/en/page_en_20_3_5.md",
	"doc/templates/components/markdown/en/page_en_20_3_5_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_5_1.md",
	"doc/templates/components/markdown/en/page_en_20_3_6.md",
	"doc/templates/components/markdown/en/page_en_20_3_6_0.md",
	"doc/templates/components/markdown/en/page_en_20_3_6_1.md",
	"doc/templates/components/markdown/en/page_en_20_4.md",
	"doc/templates/components/markdown/en/page_en_20_4_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_0_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_1.md",
	"doc/templates/components/markdown/en/page_en_20_4_1_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_2.md",
	"doc/templates/components/markdown/en/page_en_20_4_2_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_3.md",
	"doc/templates/components/markdown/en/page_en_20_4_3_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_4.md",
	"doc/templates/components/markdown/en/page_en_20_4_4_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_5.md",
	"doc/templates/components/markdown/en/page_en_20_4_5_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_6.md",
	"doc/templates/components/markdown/en/page_en_20_4_6_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_7.md",
	"doc/templates/components/markdown/en/page_en_20_4_7_0.md",
	"doc/templates/components/markdown/en/page_en_20_4_8.md",
	"doc/templates/components/markdown/en/page_en_20_4_8_0.md",
	"doc/templates/components/markdown/en/page_en_21.md",
	"doc/templates/components/markdown/en/page_en_21_0.md",
	"doc/templates/components/markdown/en/page_en_21_0_0.md",
	"doc/templates/components/markdown/en/page_en_21_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_21_0_1.md",
	"doc/templates/components/markdown/en/page_en_21_0_1_0.md",
	"doc/templates/components/markdown/en/page_en_21_0_2.md",
	"doc/templates/components/markdown/en/page_en_21_0_2_0.md",
	"doc/templates/components/markdown/en/page_en_22.md",
	"doc/templates/components/markdown/en/page_en_22_0.md",
	"doc/templates/components/markdown/en/page_en_22_0_0.md",
	"doc/templates/components/markdown/en/page_en_22_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_22_1.md",
	"doc/templates/components/markdown/en/page_en_22_1_0.md",
	"doc/templates/components/markdown/en/page_en_22_1_0_0.md",
	"doc/templates/components/markdown/en/page_en_22_2.md",
	"doc/templates/components/markdown/en/page_en_22_2_0.md",
	"doc/templates/components/markdown/en/page_en_22_2_0_0.md",
	"doc/templates/components/markdown/en/page_en_22_3.md",
	"doc/templates/components/markdown/en/page_en_22_3_0.md",
	"doc/templates/components/markdown/en/page_en_22_3_0_0.md",
	"doc/templates/components/markdown/en/page_en_22_4.md",
	"doc/templates/components/markdown/en/page_en_22_4_0.md",
	"doc/templates/components/markdown/en/page_en_22_4_0_0.md",
	"doc/templates/components/markdown/en/page_en_22_5.md",
	"doc/templates/components/markdown/en/page_en_22_5_0.md",
	"doc/templates/components/markdown/en/page_en_22_5_0_0.md",
	"doc/templates/components/markdown/en/page_en_23.md",
	"doc/templates/components/markdown/en/page_en_23_0.md",
	"doc/templates/components/markdown/en/page_en_23_0_0.md",
	"doc/templates/components/markdown/en/page_en_23_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_23_1.md",
	"doc/templates/components/markdown/en/page_en_23_1_0.md",
	"doc/templates/components/markdown/en/page_en_23_1_0_0.md",
	"doc/templates/components/markdown/en/page_en_23_2.md",
	"doc/templates/components/markdown/en/page_en_23_2_0.md",
	"doc/templates/components/markdown/en/page_en_23_2_0_0.md",
	"doc/templates/components/markdown/en/page_en_23_3.md",
	"doc/templates/components/markdown/en/page_en_23_3_0.md",
	"doc/templates/components/markdown/en/page_en_23_3_0_0.md",
	"doc/templates/components/markdown/en/page_en_23_4.md",
	"doc/templates/components/markdown/en/page_en_23_4_0.md",
	"doc/templates/components/markdown/en/page_en_23_4_0_0.md",
	"doc/templates/components/markdown/en/page_en_23_5.md",
	"doc/templates/components/markdown/en/page_en_23_5_0.md",
	"doc/templates/components/markdown/en/page_en_23_5_0_0.md",
	"doc/templates/components/markdown/en/page_en_2_0.md",
	"doc/templates/components/markdown/en/page_en_2_0_0.md",
	"doc/templates/components/markdown/en/page_en_2_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_3.md",
	"doc/templates/components/markdown/en/page_en_3_0.md",
	"doc/templates/components/markdown/en/page_en_3_0_0.md",
	"doc/templates/components/markdown/en/page_en_3_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_4.md",
	"doc/templates/components/markdown/en/page_en_4_0.md",
	"doc/templates/components/markdown/en/page_en_4_0_0.md",
	"doc/templates/components/markdown/en/page_en_4_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_5.md",
	"doc/templates/components/markdown/en/page_en_5_0.md",
	"doc/templates/components/markdown/en/page_en_5_0_0.md",
	"doc/templates/components/markdown/en/page_en_5_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_6.md",
	"doc/templates/components/markdown/en/page_en_6_0.md",
	"doc/templates/components/markdown/en/page_en_6_0_0.md",
	"doc/templates/components/markdown/en/page_en_6_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_7.md",
	"doc/templates/components/markdown/en/page_en_7_0.md",
	"doc/templates/components/markdown/en/page_en_7_0_0.md",
	"doc/templates/components/markdown/en/page_en_7_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_7_1.md",
	"doc/templates/components/markdown/en/page_en_7_1_0.md",
	"doc/templates/components/markdown/en/page_en_7_1_0_0.md",
	"doc/templates/components/markdown/en/page_en_7_2.md",
	"doc/templates/components/markdown/en/page_en_7_2_0.md",
	"doc/templates/components/markdown/en/page_en_7_2_0_0.md",
	"doc/templates/components/markdown/en/page_en_7_3.md",
	"doc/templates/components/markdown/en/page_en_7_3_0.md",
	"doc/templates/components/markdown/en/page_en_7_3_0_0.md",
	"doc/templates/components/markdown/en/page_en_8.md",
	"doc/templates/components/markdown/en/page_en_8_0.md",
	"doc/templates/components/markdown/en/page_en_8_0_0.md",
	"doc/templates/components/markdown/en/page_en_8_0_0_0.md",
	"doc/templates/components/markdown/en/page_en_9.md",
	"doc/templates/components/markdown/en/page_en_9_0.md",
	"doc/templates/components/markdown/en/page_en_9_0_0.md",
	"doc/templates/components/markdown/en/page_en_9_0_0_0.md",
	"doc/templates/components/markdown/en/routings.tpl.html",
	"doc/templates/components/modal.tpl.html",
	"doc/templates/components/nav.tpl.html",
	"doc/templates/components/pages/page1.tpl.html",
	"doc/templates/components/pages/page2.tpl.html",
	"doc/templates/components/pages/page3.tpl.html",
	"doc/templates/components/pwa.tpl.html",
	"doc/templates/components/section1.tpl.html",
	"doc/templates/components/section2.tpl.html",
	"doc/templates/components/shadowed-card.tpl.html",
	"doc/templates/components/shadowed-snippet-card.tpl.html",
	"doc/templates/components/signin.tpl.html",
	"doc/templates/components/signup.tpl.html",
	"doc/templates/components/signupbuttons.tpl.html",
	"doc/templates/components/signuppage.tpl.html",
	"doc/templates/components/snippet-card.tpl.html",
	"doc/templates/components/topmenu.tpl.html",
	"favicon.ico",
	"humans.txt",
	"index.html",
	"manifest.json",
	"robots.txt"
])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
