/*
 *  /MathJax/config/MMLorHTML.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(c){var i="1.0.1";var g=MathJax.Hub.Insert({prefer:{MSIE:"MML",Firefox:"MML",Opera:"HTML",other:"HTML"}},(MathJax.Hub.config.MMLorHTML||{}));var e={Firefox:3,Opera:9.52,MSIE:6,Chrome:0.3,Safari:2,Konqueror:4};var h=(c.Browser.version==="0.0"||c.Browser.versionAtLeast(e[c.Browser]||0));var b;try{new ActiveXObject("MathPlayer.Factory.1");b=true}catch(d){b=false}var f=(c.Browser.isFirefox&&c.Browser.versionAtLeast("1.5"))||(c.Browser.isMSIE&&b)||(c.Browser.isOpera&&c.Browser.versionAtLeast("9.52"));var a=(g.prefer&&typeof(g.prefer)==="object"?g.prefer[MathJax.Hub.Browser]||g.prefer.other||"HTML":g.prefer);if(h||f){if(f&&(a==="MML"||!h)){if(MathJax.OutputJax.NativeMML){MathJax.OutputJax.NativeMML.Register("jax/mml")}else{c.config.jax.unshift("output/NativeMML")}}else{if(MathJax.OutputJax["HTML-CSS"]){MathJax.OutputJax["HTML-CSS"].Register("jax/mml")}else{c.config.jax.unshift("output/HTML-CSS")}}}else{c.PreProcess.disabled=true;c.prepareScripts.disabled=true;MathJax.Message.Set("Your browser does not support MathJax",null,4000);c.Startup.signal.Post("MathJax not supported")}})(MathJax.Hub);MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js");

