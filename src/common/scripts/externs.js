/**
 * @fileoverview Externs file for PiPer used by Closure Compiler
 * @externs
 */


/* Safari Extension */

/** @const */
const safari = {};

/** @const */
safari.extension = {};

/** @type {string} */
safari.extension.baseURI;

/** @type {string} */
HTMLVideoElement.prototype.webkitPresentationMode;

/** @return {undefined} */
HTMLVideoElement.prototype.webkitSetPresentationMode = function(mode) {};

/** @type {string} */
TextTrack.prototype.label;

/** @return {undefined} */
safari.extension.dispatchMessage = function(message, userInfo) {};

/** @const */
safari.self = {};

/** @return {undefined} */
safari.self.addEventListener = function(type, listener) {};

/** @constructor */
const SafariExtensionMessageEvent = function() {};

/** @type {*} */
SafariExtensionMessageEvent.prototype.message;

/** @type {string} */
SafariExtensionMessageEvent.prototype.name;


/* Legacy Safari Extension */

/** @const */
safari.extension.settings = {};

/** @return {undefined} */
safari.extension.settings.clear = function() {};


/* Chrome Extension */

/** @const */
const chrome = {};

/** @const */
chrome.runtime = {};

/** @return {string} */
chrome.runtime.getURL = function(path) {};

/** @const */
chrome.runtime.onInstalled = {};

/** @return {undefined} */
chrome.runtime.onInstalled.addListener = function(callback) {};

/** @constructor */
chrome.runtime.Manifest = function() {};

/** @type {string} */
chrome.runtime.Manifest.prototype.version;

/** @return {!chrome.runtime.Manifest} */
chrome.runtime.getManifest = function() {};

/** @const */
chrome.tabs = {};

/** @return {undefined} */
chrome.tabs.create = function(properties) {};

/** @return {Promise<*>} */
HTMLVideoElement.prototype.requestPictureInPicture = function() {};

/** @const */
chrome.extension = {};

/** @return {string} */
chrome.extension.getURL = function(path) {};

/** @const */
chrome.storage = {};

/** @const */
chrome.storage.sync = {};

/** @return {undefined} */
chrome.storage.sync.get = function(keys, callback) {};

/** @return {undefined} */
chrome.storage.sync.set = function(items, callback) {};

/** @return {undefined} */
chrome.storage.sync.clear = function(callback) {};