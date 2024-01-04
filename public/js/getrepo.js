"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var username = 'littleblack111';
var hideForks = true;
var repoList = document.querySelector('.repo-list');
var reposSection = document.querySelector('.repos');
var filterInput = document.querySelector('.filter-repos');
var getProfile = function () {
  var _ref = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
    var res, profile;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://api.github.com/users/".concat(username));
        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();
        case 5:
          profile = _context.sent;
          displayProfile(profile);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getProfile() {
    return _ref.apply(this, arguments);
  };
}();
getProfile();
var displayProfile = function displayProfile(profile) {
  var userInfo = document.querySelector('.user-info');
  userInfo.innerHTML = "\n\t\t<figure class=\"floattext\">\n\t\t\t<a href=".concat(profile.html_url, "><img alt=\"user avatar\" src=").concat(profile.avatar_url, "></a>\n\t\t</figure>\n\t\t<div class=\"floattext\">\n\t\t\t<!-- <h2><a href=").concat(profile.blog, "><strong>").concat(profile.name, "</strong></a></h2> -->\n\t\t\t<h2><a href=/><strong data-value=\"").concat(profile.name, "\" class=\"usertitle hacktype\">").concat(profile.name, "</strong></a></h2>\n\t\t\t<!-- <h2><a href=").concat(profile.html_url, "><strong>").concat(profile.name, "</strong></a></h2> -->\n\t\t\t<p>").concat(profile.bio, "</p>\n\t\t\t<p>\n\t\t\t<strong>Mail:</strong> ").concat(profile.email, "\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<strong>Location:</strong> ").concat(profile.location, "\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<strong>@").concat(profile.login, " </strong>\n\t\t\t\tRepos: ").concat(profile.public_repos, "\n\t\t\t\tGists: ").concat(profile.public_gists, "\n\t\t\t</p>\n\t\t</div>\n\t");
};
var getRepos = function () {
  var _ref2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
    var repos, res, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          repos = [];
          _context2.next = 3;
          return fetch("https://api.github.com/users/".concat(username, "/repos?&sort=pushed"));
        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return res.json();
        case 6:
          data = _context2.sent;
          repos = repos.concat(data);
          repos.sort(function (a, b) {
            return b.forks_count - a.forks_count;
          });
          repos.sort(function (a, b) {
            return b.stargazers_count - a.stargazers_count;
          });
          displayRepos(repos);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getRepos() {
    return _ref2.apply(this, arguments);
  };
}();
getRepos();
var displayRepos = function displayRepos(repos) {
  var userHome = "https://github.com/".concat(username);
  filterInput.classList.remove('hide');
  var _iterator = _createForOfIteratorHelper(repos),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var repo = _step.value;
      if (repo.fork && hideForks) {
        continue;
      }
      var langUrl = "".concat(userHome, "?tab=repositories&q=&language=").concat(repo.language);
      var starsUrl = "".concat(userHome, "/").concat(repo.name, "/stargazers");
      var forksUrl = "".concat(userHome, "/").concat(repo.name, "/network/members");
      var listItem = document.createElement('li');
      listItem.classList.add('repo', 'animate', 'zoomIn');
      listItem.innerHTML = "\n\t\t\t<h2 class=\"repo-title\">".concat(repo.name, "</h2>\n\t\t\t<span class=\"rdescription\">").concat(repo.description ? "<span class=\"rdescriptiontext\">".concat(repo.description, "</span>") : '', "<br/><br/>");
      if (repo.stargazers_count > 0) {
        listItem.innerHTML += "<a href=\"".concat(starsUrl, "\">\n\t\t\t<span>\u2B50 ").concat(repo.stargazers_count, "</span></a>");
      }
      if (repo.language) {
        listItem.innerHTML += "<a href=\"".concat(langUrl, "\">\n\t\t\t<span>").concat(devicons[repo.language], "</span></a>");
      }
      if (repo.forks_count > 0) {
        listItem.innerHTML += "<a href=\"".concat(starsUrl, "\">\n\t\t\t<span>").concat(devicons["Git"], " ").concat(repo.forks_count, "</span></a>");
      }
      if (repo.homepage && repo.homepage !== "") {
        listItem.innerHTML += "<br /> <br />\n\t\t\t<a class=\"link-btn btn-code\" href=".concat(repo.html_url, ">Code ").concat(devicons["Github"], "</a>\n\t\t\t<a class=\"link-btn btn-live\" href=").concat(repo.homepage, ">Live ").concat(devicons["Chrome"], "</a> <br />");
      } else {
        listItem.innerHTML += "<br /> <br />\n\t\t\t<a class=\"link-btn btn-gh\" href=".concat(repo.html_url, ">View Project ").concat(devicons["Github"], "</a><br />");
      }
      repoList.append(listItem);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
filterInput.addEventListener('input', function (e) {
  var search = e.target.value;
  var repos = document.querySelectorAll('.repo');
  var searchLowerText = search.toLowerCase();
  var _iterator2 = _createForOfIteratorHelper(repos),
    _step2;
  try {
    var _loop = function _loop() {
      var repo = _step2.value;
      var lowerText = repo.innerText.toLowerCase();
      if (lowerText.includes(searchLowerText)) {
        repo.classList.remove('hide');
        repo.style.position = 'relative';
      } else {
        repo.classList.add('hide');
        repo.addEventListener('animationend', function () {
          if (searchLowerText != '') {
            repo.style.position = 'absolute';
          } else {
            repo.style.position = 'relative';
          }
        });
      }
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
var devicons = {
  Git: '<i class="devicon-git-plain" style="color: #555"></i>',
  Github: '<i class="devicon-github-plain" style="color: #1688f0"></i>',
  Chrome: '<i class="devicon-chrome-plain" style="color: #1688f0"></i>',
  Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
  'C#': '<i class="devicon-csharp-plain colored"></i> C#',
  'C++': '<i class="devicon-cplusplus-plain colored"></i> C++',
  C: '<i class="devicon-c-plain colored"></i> C',
  Clojure: '<i class="devicon-clojure-plain colored"></i> C',
  CoffeeScript: '<i class="devicon-coffeescript-plain colored"></i> CoffeeScript',
  Crystal: '<i class="devicon-crystal-plain colored"></i> Crystal',
  CSS: '<i class="devicon-css3-plain colored"></i> CSS',
  Dart: '<i class="devicon-dart-plain colored"></i> Dart',
  Dockerfile: '<i class="devicon-docker-plain colored"></i> Docker',
  Elixir: '<i class="devicon-elixir-plain colored"></i> Elixir',
  Elm: '<i class="devicon-elm-plain colored"></i> Elm',
  Erlang: '<i class="devicon-erlang-plain colored"></i> Erlang',
  'F#': '<i class="devicon-fsharp-plain colored"></i> F#',
  Go: '<i class="devicon-go-plain colored"></i> Go',
  Groovy: '<i class="devicon-groovy-plain colored"></i> Groovy',
  HTML: '<i class="devicon-html5-plain colored"></i> HTML',
  Haskell: '<i class="devicon-haskell-plain colored"></i> Haskell',
  Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
  JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
  Julia: '<i class="devicon-julia-plain colored"></i> Julia',
  'Jupyter Notebook': '<i class="devicon-jupyter-plain colored"></i> Jupyter',
  Kotlin: '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
  Latex: '<i class="devicon-latex-plain colored"></i> Latex',
  Lua: '<i class="devicon-lua-plain-wordmark colored" style="color: #0000d0"></i> Lua',
  Matlab: '<i class="devicon-matlab-plain colored"></i> Matlab',
  Nim: '<i class="devicon-nixos-plain colored" style="color: #FFC200"></i> Nim',
  Nix: '<i class="devicon-nixos-plain colored"></i> Nix',
  ObjectiveC: '<i class="devicon-objectivec-plain colored"></i> ObjectiveC',
  OCaml: '<i class="devicon-ocaml-plain colored"></i> OCaml',
  Perl: '<i class="devicon-perl-plain colored"></i> Perl',
  PHP: '<i class="devicon-php-plain colored"></i> PHP',
  PLSQL: '<i class="devicon-sqlite-plain colored"></i> PLSQL',
  Processing: '<i class="devicon-processing-plain colored" style="color: #0096D8"></i> Processing',
  Python: '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
  R: '<i class="devicon-r-plain colored"></i> R',
  Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
  Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
  Sass: '<i class="devicon-sass-original colored"></i> Sass',
  Scala: '<i class="devicon-scala-plain colored"></i> Scala',
  Shell: '<i class="devicon-bash-plain colored" style="color: #89E051"></i> Shell',
  Solidity: '<i class="devicon-solidity-plain colored"></i> Solidity',
  Stylus: '<i class="devicon-stylus-plain colored"></i> Stylus',
  Svelte: '<i class="devicon-svelte-plain colored"></i> Svelte',
  Swift: '<i class="devicon-swift-plain colored"></i> Swift',
  Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
  TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
  'Vim Script': '<i class="devicon-vim-plain colored"></i> Vim Script',
  Vue: '<i class="devicon-vuejs-plain colored"></i> Vue',
  Mail: '<i class="nf nf-cod-mail"></i>'
};