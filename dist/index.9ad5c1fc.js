// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6Va53":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "344a65ae9ad5c1fc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bsTmd":[function(require,module,exports) {
var _loginPageJs = require("./js/pages/login.page.js");
var _signupPageJs = require("./js/pages/signup.page.js");
var _userUpdatePageJs = require("./js/pages/user-update.page.js");
var _contactsPageJs = require("./js/pages/contacts.page.js");
var _newContactPageJs = require("./js/pages/new-contact.page.js");
async function redirectPages() {
    const root = document.getElementById("root");
    const Router = {
        "#login": {
            component: (0, _loginPageJs.LoginHtml),
            path: "#login"
        },
        "#signup": {
            component: (0, _signupPageJs.UserSingUpHtml),
            path: "#signup"
        },
        "#contatos": {
            component: (0, _contactsPageJs.AllContacts),
            path: "#contatos"
        },
        "#contato-detalhes": {
            component: ()=>{
                window.location.href = "./contact-details.html#0";
            },
            path: "#contato-detalhes"
        },
        "#novo-contato": {
            component: (0, _newContactPageJs.NewContactHtml),
            path: "#novo-contato"
        },
        "#0": {
            component: ()=>{},
            path: ""
        },
        "#404": {
            component: (0, _loginPageJs.LoginHtml),
            path: "#login"
        }
    };
    if (window.location.hash === "#0") return;
    const route = Router[window.location.hash.split("?id=")[0]] || Router["#404"];
    let id = window.location.hash.split("?id=")[1];
    if (id) sessionStorage.setItem("@id", id);
    root.innerHTML = null;
    root.append(await route.component());
    window.history.pushState(null, null, route.path);
}
window.addEventListener("load", ()=>{
    redirectPages();
    window.addEventListener("hashchange", redirectPages);
});

},{"./js/pages/login.page.js":"5sv1E","./js/pages/signup.page.js":"cFsFL","./js/pages/user-update.page.js":"9aywJ","./js/pages/new-contact.page.js":"6LZCj","./js/pages/contacts.page.js":"4xvej"}],"5sv1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LoginHtml", ()=>LoginHtml);
var _loginServiceJs = require("../services/login.service.js");
const login = document.createElement("form");
login.setAttribute("id", "p-login");
const entrar = async (event)=>{
    event.preventDefault();
    const fd = new FormData(login);
    const response = await (0, _loginServiceJs.AuthPost)(fd);
    if (response.status === 200) {
        const { token , ...user } = response.data;
        sessionStorage.setItem("@user", JSON.stringify(user));
        sessionStorage.setItem("@token", token);
        window.open("#contatos", "_self");
    } else window.alert("N\xe3o abriu!");
};
const events = ()=>{
    login.addEventListener("submit", entrar);
};
const LoginHtml = ()=>{
    login.innerHTML = `<input type="email" name="email" placeholder="Usuário">
    <input type="password" name="senha" placeholder="Senha">

    <button>Login</button>
    
    <p><a href="#signup" target="_self">Não possui conta? Cadastre-se!</a></p>`;
    events();
    return login;
};

},{"../services/login.service.js":"80rfz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80rfz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthPost", ()=>AuthPost);
const baseUrl = "http://localhost:5000/v1/";
const headers = new Headers();
headers.append("Content-Type", "application/json");
const AuthPost = async (formData)=>{
    const obj = Object.fromEntries(formData);
    const body = JSON.stringify(obj);
    const response = await fetch(baseUrl + "auth", {
        body,
        headers,
        method: "POST"
    });
    return await response.json();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cFsFL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserSingUpHtml", ()=>UserSingUpHtml);
var _signupServiceJs = require("../services/signup.service.js");
var _compressJs = require("compress.js");
var _compressJsDefault = parcelHelpers.interopDefault(_compressJs);
const userForm = document.createElement("form");
userForm.setAttribute("id", "p-user-signup");
const photoRecoveringAndResizing = async ()=>{
    return new Promise((resolve, reject)=>{
        const compress = new (0, _compressJsDefault.default)();
        const photoInput = userForm.querySelector('input[type="file"]');
        const files = [
            ...photoInput.files
        ];
        const options = {
            size: 2,
            quality: .75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false
        };
        compress.compress(files, options).then((data)=>resolve(data[0])).catch(()=>reject(null));
    });
};
const userRegistration = async (event)=>{
    event.preventDefault();
    const fd = new FormData(userForm);
    const photo = await photoRecoveringAndResizing();
    if (photo) fd.append("foto", photo.data);
    const response = await (0, _signupServiceJs.UserSingUpPost)(fd);
    if (response.status == 200) {
        window.alert("Usu\xe1rio cadastrado!");
        window.open("#login", "_self");
    } else if (response.status == 409) window.alert("Erro! Usu\xe1rio j\xe1 cadastrado.");
    else window.alert("Erro!");
    const json = await response.json();
};
const events = ()=>{
    userForm.addEventListener("submit", userRegistration);
};
const UserSingUpHtml = ()=>{
    userForm.innerHTML = `<input type="text" name="email" placeholder="E-mail" required>
    <input type="password" name="senha" placeholder="Senha" required>
    <input type="text" name="nome" placeholder="Nome de usuário" required>
    <input type="file" accept="image/*" name="foto" placeholder="Foto">

    <button type="submit" class="btn-user-reg">Cadastrar meu usuário</button>

    <p><a href="#login" target="_self">Já possui conta? Faça o login!</a></p>`;
    events();
    return userForm;
};

},{"../services/signup.service.js":"6TggS","compress.js":"gGLmb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TggS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserSingUpPost", ()=>UserSingUpPost);
const baseUrl = "http://localhost:5000/v1/";
const headers = new Headers();
headers.append("Content-type", "application/json");
const UserSingUpPost = (formData)=>{
    const body = JSON.stringify(Object.fromEntries(formData));
    return fetch(baseUrl + "user", {
        body,
        headers,
        method: "POST"
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGLmb":[function(require,module,exports) {
// Support regenerator-runtime globally.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _base64Js = require("./core/base64.js");
var _base64JsDefault = parcelHelpers.interopDefault(_base64Js);
var _converterJs = require("./core/converter.js");
var _converterJsDefault = parcelHelpers.interopDefault(_converterJs);
var _fileJs = require("./core/file.js");
var _fileJsDefault = parcelHelpers.interopDefault(_fileJs);
var _imageJs = require("./core/image.js");
var _imageJsDefault = parcelHelpers.interopDefault(_imageJs);
var _photoJs = require("./core/photo.js");
var _photoJsDefault = parcelHelpers.interopDefault(_photoJs);
var _rotateJs = require("./core/rotate.js");
var _rotateJsDefault = parcelHelpers.interopDefault(_rotateJs);
class Compress {
    attach(el, options) {
        return new Promise((resolve)=>{
            const input = document.querySelector(el);
            input.setAttribute("accept", "image/*");
            input.addEventListener("change", (evt)=>{
                const output = this.compress([
                    ...evt.target.files
                ], options);
                resolve(output);
            }, false);
        });
    }
    compress(files, options) {
        return Promise.all(files.map((file)=>compressFile(file, options)));
    }
    static convertBase64ToFile(base64, mime) {
        return (0, _converterJsDefault.default).base64ToFile(base64, mime);
    }
}
exports.default = Compress;
function loopCompression(canvas, size, quality = 1, targetSize, targetQuality = 1, iterations = 1) {
    const base64str = (0, _converterJsDefault.default).canvasToBase64(canvas, quality);
    const newSize = (0, _base64JsDefault.default).size(base64str);
    return newSize > targetSize || quality > targetQuality ? loopCompression(canvas, newSize, quality - 0.1, targetSize, targetQuality, iterations + 1) : base64str;
}
async function compressFile(file, options) {
    // Create a new photo object
    const photo = new (0, _photoJsDefault.default)(options);
    photo.start = window.performance.now();
    photo.alt = file.name;
    photo.ext = file.type;
    photo.startSize = file.size;
    photo.orientation = photo.rotate ? await (0, _rotateJsDefault.default).orientation(file) : 0;
    return compressImage(photo)(await (0, _fileJsDefault.default).load(file));
}
function compressImage(photo) {
    return async (src)=>{
        const img = await (0, _imageJsDefault.default).load(src);
        // Store the initial dimensions
        photo.startWidth = img.naturalWidth;
        photo.startHeight = img.naturalHeight;
        // Resize the image
        if (photo.resize) {
            const { width , height  } = (0, _imageJsDefault.default).resize(photo.maxWidth, photo.maxHeight)(img.naturalWidth, img.naturalHeight);
            photo.endWidth = width;
            photo.endHeight = height;
        } else {
            photo.endWidth = img.naturalWidth;
            photo.endHeight = img.naturalHeight;
        }
        const canvas = (0, _converterJsDefault.default).imageToCanvas(photo.endWidth, photo.endHeight, photo.orientation)(img);
        photo.iterations = 1;
        photo.base64prefix = (0, _base64JsDefault.default).prefix(photo.ext);
        const base64 = await loopCompression(canvas, photo.startSize, photo.quality, photo.size, photo.minQuality, photo.iterations);
        photo.finalSize = (0, _base64JsDefault.default).size(base64);
        photo.end = window.performance.now();
        const difference = photo.end - photo.start; // in ms
        return {
            data: (0, _base64JsDefault.default).data(base64),
            prefix: photo.base64prefix,
            elapsedTimeInSeconds: difference / 1000,
            alt: photo.alt,
            initialSizeInMb: (0, _converterJsDefault.default).size(photo.startSize).MB,
            endSizeInMb: (0, _converterJsDefault.default).size(photo.finalSize).MB,
            ext: photo.ext,
            quality: photo.quality,
            endWidthInPx: photo.endWidth,
            endHeightInPx: photo.endHeight,
            initialWidthInPx: photo.startWidth,
            initialHeightInPx: photo.startHeight,
            sizeReducedInPercent: (photo.startSize - photo.finalSize) / photo.startSize * 100,
            iterations: photo.iterations
        };
    };
}

},{"./core/base64.js":"nQY6t","./core/converter.js":"5Ehsy","./core/file.js":"eaDxq","./core/image.js":"khc95","./core/photo.js":"8dTM7","./core/rotate.js":"cb6PZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"nQY6t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const size = (base64)=>{
    const len = base64.replace(/^data:image\/\w+;base64,/, "").length;
    return (len - 814) / 1.37;
// return len * 3 / 4
};
// strip off the data: url prefix to get just the base64-encoded bytes
// var data = img.replace(/^data:image\/\w+;base64,/, "");
const mime = (base64)=>{
    return base64.split(";")[0].match(/jpeg|png|gif/)[0];
};
const data = (base64)=>{
    return base64.replace(/^data:image\/\w+;base64,/, "");
};
const prefix = (ext)=>{
    return `data:${ext};base64,`;
};
exports.default = {
    size,
    mime,
    data,
    prefix
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Ehsy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const base64ToFile = (base64, mime = "image/jpeg")=>{
    const byteString = window.atob(base64);
    const content = [];
    for(let i = 0; i < byteString.length; i++)content[i] = byteString.charCodeAt(i);
    return new window.Blob([
        new Uint8Array(content)
    ], {
        type: mime
    });
};
const imageToCanvas = (width, height, orientation)=>{
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    return (image)=>{
        if (!orientation || orientation > 8) {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            return canvas;
        }
        if (orientation > 4) {
            canvas.width = height;
            canvas.height = width;
        }
        switch(orientation){
            case 2:
                // horizontal flip
                context.translate(width, 0);
                context.scale(-1, 1);
                break;
            case 3:
                // 180° rotate left
                context.translate(width, height);
                context.rotate(Math.PI);
                break;
            case 4:
                // vertical flip
                context.translate(0, height);
                context.scale(1, -1);
                break;
            case 5:
                // vertical flip + 90 rotate right
                context.rotate(0.5 * Math.PI);
                context.scale(1, -1);
                break;
            case 6:
                // 90° rotate right
                context.rotate(0.5 * Math.PI);
                context.translate(0, -height);
                break;
            case 7:
                // horizontal flip + 90 rotate right
                context.rotate(0.5 * Math.PI);
                context.translate(width, -height);
                context.scale(-1, 1);
                break;
            case 8:
                // 90° rotate left
                context.rotate(-0.5 * Math.PI);
                context.translate(-width, 0);
                break;
        }
        if (orientation > 4) context.drawImage(image, 0, 0, canvas.height, canvas.width);
        else context.drawImage(image, 0, 0, canvas.width, canvas.height);
        return canvas;
    };
};
const canvasToBase64 = (canvas, quality = 0.75)=>{
    // in order to compress the final image format has to be jpeg
    const base64 = canvas.toDataURL("image/jpeg", quality);
    return base64;
};
const size = (size)=>({
        KB: size / 1000,
        MB: size / 1000000
    });
exports.default = {
    base64ToFile,
    imageToCanvas,
    canvasToBase64,
    size
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eaDxq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const load = (file)=>{
    return new Promise((resolve, reject)=>{
        const fileReader = new window.FileReader();
        fileReader.addEventListener("load", (evt)=>resolve(evt.target.result), false);
        fileReader.addEventListener("error", reject, false);
        fileReader.readAsDataURL(file);
    });
};
exports.default = {
    load
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khc95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const load = (src)=>{
    return new Promise((resolve, reject)=>{
        const img = new window.Image();
        img.addEventListener("load", ()=>resolve(img), false);
        img.addEventListener("error", reject, false);
        img.src = src;
    });
};
/*
 * Resize the image based on the given height or width boundary.
 * Auto resize based on aspect ratio.
 **/ const resize = (targetWidth, targetHeight)=>{
    return (width, height)=>{
        if (!targetWidth && !targetHeight) return {
            width,
            height
        };
        const originalAspectRatio = width / height;
        const targetAspectRatio = targetWidth / targetHeight;
        let outputWidth, outputHeight;
        if (originalAspectRatio > targetAspectRatio) {
            outputWidth = Math.min(width, targetWidth);
            outputHeight = outputWidth / originalAspectRatio;
        } else {
            outputHeight = Math.min(height, targetHeight);
            outputWidth = outputHeight * originalAspectRatio;
        }
        return {
            width: outputWidth,
            height: outputHeight
        };
    };
};
exports.default = {
    load,
    resize
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dTM7":[function(require,module,exports) {
// The photo model
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Photo {
    constructor({ quality =0.75 , size =2 , maxWidth =1920 , maxHeight =1920 , resize =true , rotate =false  }){
        this.start = window.performance.now();
        this.end = null;
        this.alt = null;
        this.ext = null;
        this.startSize = null;
        this.startWidth = null;
        this.startHeight = null;
        // size in MB
        this.size = size * 1000000;
        this.endSize = null;
        this.endWidth = null;
        this.endHeight = null;
        this.iterations = 0;
        this.base64prefix = null;
        this.quality = quality;
        this.resize = resize;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.orientation = 1;
        this.rotate = rotate;
    }
}
exports.default = Photo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cb6PZ":[function(require,module,exports) {
// https://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images/31273162#31273162
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const orientation = (file)=>{
    return new Promise((resolve)=>{
        const reader = new window.FileReader();
        reader.onload = function(event) {
            var view = new DataView(event.target.result);
            if (view.getUint16(0, false) !== 0xffd8) resolve(-2);
            const length = view.byteLength;
            let offset = 2;
            while(offset < length){
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xffe1) {
                    if (view.getUint32(offset += 2, false) !== 0x45786966) resolve(-1);
                    const little = view.getUint16(offset += 6, false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    const tags = view.getUint16(offset, little);
                    offset += 2;
                    for(let i = 0; i < tags; i++)if (view.getUint16(offset + i * 12, little) === 0x0112) resolve(view.getUint16(offset + i * 12 + 8, little));
                } else if ((marker & 0xff00) !== 0xff00) break;
                else offset += view.getUint16(offset, false);
            }
            resolve(-1);
        };
        reader.readAsArrayBuffer(file.slice(0, 65536));
    });
};
exports.default = {
    orientation
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9aywJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserUpdateHtml", ()=>UserUpdateHtml);
var _userUpdateServiceJs = require("../services/user-update.service.js");
var _compressJs = require("compress.js");
var _compressJsDefault = parcelHelpers.interopDefault(_compressJs);
const userForm = document.createElement("form");
userForm.setAttribute("id", "p-user-update");
const photoRecoveringAndResizing = async ()=>{
    return new Promise((resolve, reject)=>{
        const compress = new (0, _compressJsDefault.default)();
        const photoInput = userForm.querySelector('input[type="file"]');
        const files = [
            ...photoInput.files
        ];
        const options = {
            size: 2,
            quality: .75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false
        };
        compress.compress(files, options).then((data)=>resolve(data[0])).catch(()=>reject(null));
    });
};
const userUpdate = async (event)=>{
    event.preventDefault();
    const fd = new FormData(userForm);
    const photo = await photoRecoveringAndResizing();
    if (photo) fd.append("foto", photo.data);
    const response = await (0, _userUpdateServiceJs.UserPatch)(fd);
    if (response.status == 200) window.alert("Informa\xe7\xf5es alteradas com sucesso!");
    else if (response.status == 404) window.alert("Erro! Usu\xe1rio n\xe3o encontrado.");
    else window.alert("Erro!");
    const json = await response.json();
};
// const filler = () => {
//     document.getElementById('user-email').value = sessionStorage.getItem('@user').email;
// };
const events = ()=>{
    userForm.addEventListener("submit", userUpdate);
};
const UserUpdateHtml = ()=>{
    userForm.innerHTML = `<input type="text" name="email" id="user-email">
    <input type="password" name="senha">
    <input type="text" name="nome">
    <input type="file" accept="image/*" name="foto">

    <button type="submit" class="btn-user-reg">Salvar alterações</button>`;
    events();
    return userForm;
};

},{"../services/user-update.service.js":"bWWtM","compress.js":"gGLmb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWWtM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserPatch", ()=>UserPatch);
const baseUrl = "http://localhost:5000/v1/";
const token = sessionStorage.getItem("@token");
const headers = new Headers({
    "Content-type": "application/json",
    "Authorization": token
});
const UserPatch = (formData)=>{
    const body = JSON.stringify(Object.fromEntries(formData));
    return fetch(baseUrl + "user", {
        body,
        headers,
        method: "PATCH"
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LZCj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewContactHtml", ()=>NewContactHtml);
var _newContactServiceJs = require("../services/new-contact.service.js");
const createContact = document.createElement("form");
createContact.setAttribute("id", "p-new-contact");
const sendForm = async (event)=>{
    event.preventDefault();
    const fd = new FormData(createContact);
    const type = fd.getAll("tipo");
    const number = fd.getAll("numero");
    const phones = type.map((type, i)=>({
            tipo: type,
            numero: number[i]
        }));
    const obj = Object.fromEntries(fd);
    obj.telefones = phones;
    delete obj.tipo;
    delete obj.numero;
    const address = {
        logradouro: fd.get("logradouro"),
        cidade: fd.get("cidade"),
        estado: fd.get("estado"),
        cep: fd.get("cep"),
        pais: fd.get("pais")
    };
    obj.endereco = address;
    delete obj.logradouro;
    delete obj.cidade;
    delete obj.estado;
    delete obj.cep;
    delete obj.pais;
    console.log(obj);
    const body = obj; //JSON.stringify(obj); 
    const response = await (0, _newContactServiceJs.NewContactPost)(body);
    if (response.status === 200) window.alert("Criou!");
    else window.alert("Erro!");
    const json = await response.json();
};
const addNumber = ()=>{};
const events = ()=>{
    createContact.addEventListener("submit", sendForm);
// createContact.addEventListener('click', );
// const addNumberButton = document.getElementById('btn-add-number');
// addNumberButton.addEventListener('click', addNumber);
// createContact.addEventListener('submit', sendForm);    
};
const NewContactHtml = ()=>{
    createContact.innerHTML = `
        <a href='#contatos'>Voltar</a>
        
        <input type="text" name="nome" placeholder="Nome do Contato"/>
        <input type="text" name="apelido" placeholder="Apelido"/>

        <input type="text" name="tipo" placeholder="Tipo"/>
        <input type="text" name="numero" placeholder="Telefone"/>
        <input type="text" name="tipo" placeholder="Tipo"/>
        <input type="text" name="numero" placeholder="Telefone"/>

        <input type="text" name="email" placeholder="E-mail"/>
        <input type="text" name="notas" palceholder="Notas"/>
        <input type="text" name="foto" placeholder="Insira uma imagem"/>

        <input type="text" name="logradouro" placeholder="Logradouro"/>
        <input type="text" name="cidade" placeholder="Cidade"/>
        <input type="text" name="estado" placeholder="Estado"/>
        <input type="text" name="cep" placeholder="CEP"/>
        <input type="text" name="pais" placeholder="País"/>

        <button type="submit">Criar novo contato</button>`;
    events();
    return createContact;
};

},{"../services/new-contact.service.js":"kluQu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kluQu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewContactPost", ()=>NewContactPost);
const baseUrl = "http://localhost:5000/v1/";
const NewContactPost = (body)=>{
    const token = sessionStorage.getItem("@token");
    const header = new Headers({
        "Content-type": "application/json",
        "Authorization": sessionStorage.getItem("@token")
    });
    return fetch(baseUrl + "contact", {
        body,
        header,
        method: "POST"
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xvej":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AllContacts", ()=>AllContacts);
var _contactsServiceJs = require("../services/contacts.service.js");
const searchContacts = document.createElement("form");
const displayContacts = document.createElement("ul");
// const search = document.getElementById('search');
// contact.setAttribute('');
const header = new Headers();
const events = ()=>{
    displayContacts.addEventListener("click", handleClick);
// createContact.addEventListener('click', );
// const addNumberButton = document.getElementById('btn-add-number');
// addNumberButton.addEventListener('click', addNumber);
// createContact.addEventListener('submit', sendForm);    
};
const handleClick = (event)=>{
    console.log(event.target);
};
function deleta() {
    console.log("deletado");
}
const AllContacts = async ()=>{
    const contatos1 = await (0, _contactsServiceJs.GetAllContacts)();
    const container = document.createElement("div");
    container.classList.add("container");
    container.innerHTML = `
        <header class="contacts">Contacts <a href='#novo-contato'>+</a></header>
        <input id="search" type="text" name="contact" placeholder="Busque um contato">
        `;
    const form = searchContacts.querySelector("#search");
    // form.addEventListener('change', searchByName);
    displayContacts.innerHTML = "";
    for (let contato of contatos1.data)displayContacts.innerHTML += `<li >
            <div class="contatos">
                <h3>${contato.nome}</h1>
                <a href="#contato-detalhes?id=${contato.id}">Editar</a>
                <button id='delete'>X</button>
            </div>
        </li>`;
    const deleteButton = displayContacts.querySelector("#delete");
    deleteButton.addEventListener("click", deleta);
    const selector = document.querySelectorAll("#contatos");
    selector.forEach((element)=>{
        element.addEventListener("click", sendContactDetails);
    });
    const id = document.querySelectorAll("#id");
    id.display = "none";
    container.append(displayContacts);
    container.innerHTML += `<section class="keyboard-size"></section>`;
    container.innerHTML += `<footer>
    <span class="icon">
      <img src="./icons/star-fill.svg">
      Favoritos
    </span>
    <span class="icon selected">
      <img src="./icons/person-crop-circle.svg">
      Contatos
    </span>
    <span class="icon">
      <img src="./icons/gear.svg">
      Configuração
    </span>
  </footer>`;
    events();
    return container;
};
function searchByName() {
    const searchInput = document.querySelector("#search");
    const filter = searchInput.value.toLowerCase();
    for (let contato of contatos.data){
        let text = contato.textContent;
        if (text.toLowerCase().includes(filter)) contato.display = "";
        else contato.display = "none";
    }
}
function sendContactDetails(id) {
    header.append("id", id);
    window.open(`#contato-detalhes`, "_self");
}

},{"../services/contacts.service.js":"3lRxw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lRxw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GetAllContacts", ()=>GetAllContacts);
const baseUrl = "http://localhost:5000/v1/";
const token = sessionStorage.getItem("@token");
const header = new Headers({
    "Content-Type": "application/json"
});
const GetAllContacts = async ()=>{
    // header.append('Authorization', token);
    const response = await fetch(baseUrl + "contact", {
        header,
        method: "GET"
    });
    return await response.json();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6Va53","bsTmd"], "bsTmd", "parcelRequire3532")

//# sourceMappingURL=index.9ad5c1fc.js.map
