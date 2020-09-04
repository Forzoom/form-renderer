'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('core-js/modules/es.array.index-of');
require('core-js/modules/es.array.slice');
require('core-js/modules/es.object.define-property');
require('core-js/modules/es.date.to-string');
require('core-js/modules/es.object.to-string');
require('core-js/modules/es.regexp.to-string');
require('core-js/modules/es.array.join');
require('core-js/modules/es.regexp.exec');
require('core-js/modules/es.string.split');
require('core-js/modules/es.array.map');
require('core-js/modules/es.symbol');
require('core-js/modules/es.symbol.description');
require('core-js/modules/es.symbol.async-iterator');
require('core-js/modules/es.symbol.iterator');
require('core-js/modules/es.symbol.to-string-tag');
require('core-js/modules/es.array.for-each');
require('core-js/modules/es.array.iterator');
require('core-js/modules/es.array.reverse');
require('core-js/modules/es.function.name');
require('core-js/modules/es.json.to-string-tag');
require('core-js/modules/es.math.to-string-tag');
require('core-js/modules/es.object.create');
require('core-js/modules/es.object.get-prototype-of');
require('core-js/modules/es.object.set-prototype-of');
require('core-js/modules/es.promise');
require('core-js/modules/es.string.iterator');
require('core-js/modules/web.dom-collections.for-each');
require('core-js/modules/web.dom-collections.iterator');
require('core-js/modules/es.array.is-array');
require('core-js/modules/es.number.constructor');
require('core-js/modules/es.array.filter');
require('core-js/modules/es.object.keys');
require('core-js/modules/es.array.concat');

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
  var core = module.exports = {
    version: '2.6.11'
  };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var _isObject = function _isObject(it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function _anObject(it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function _fails(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

var document$1 = _global.document; // typeof document.createElement is 'object' in old IE

var is = _isObject(document$1) && _isObject(document$1.createElement);

var _domCreate = function _domCreate(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string

var _toPrimitive = function _toPrimitive(it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;
var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var _objectDp = {
  f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;

var _has = function _has(it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();

var _uid = function _uid(key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});
  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode:  'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
});

var _functionToString = _shared('native-function-to-string', Function.toString);

var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
});

var _aFunction = function _aFunction(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

var _ctx = function _ctx(fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

    if (target) _redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

_global.core = _core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

var _export = $export;

var navigator$1 = _global.navigator;

var _userAgent = navigator$1 && navigator$1.userAgent || '';

var slice = [].slice;
var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check

var wrap = function wrap(set) {
  return function (fn, time
  /* , ...args */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};

_export(_export.G + _export.B + _export.F * MSIE, {
  setTimeout: wrap(_global.setTimeout),
  setInterval: wrap(_global.setInterval)
});

!function (e) {
  var t,
      n,
      _o,
      i,
      c,
      d,
      _a,
      s = '<svg><symbol id="iconxiangji1" viewBox="0 0 1024 1024"><path d="M887.844571 314.148571h-112.091428c-26.075429 0-47.908571-21.174857-47.908572-47.945142V194.267429c0-26.075429-21.211429-47.908571-47.981714-47.908572H359.789714c-26.075429 0-47.908571 21.138286-47.908571 47.908572v72.630857c0 26.075429-21.174857 47.908571-47.945143 47.908571H151.844571c-26.112 0-47.945143 21.211429-47.945142 47.981714v496.274286c0 26.112 21.138286 47.981714 47.908571 47.981714h736.036571c26.075429 0 47.908571-21.174857 47.908572-47.945142V362.057143c0-26.112-21.101714-47.945143-47.908572-47.945143zM518.436571 759.698286a170.752 170.752 0 0 1-170.605714-170.605715c0-93.769143 76.836571-170.605714 170.605714-170.605714a170.752 170.752 0 0 1 170.605715 170.605714 170.752 170.752 0 0 1-170.605715 170.605715z"  ></path></symbol></svg>',
      l = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e);
    }
  }

  function r() {
    d || (d = !0, i());
  }

  n = function n() {
    var e,
        t,
        n,
        o,
        i,
        c = document.createElement("div");
    c.innerHTML = s, s = null, (e = c.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (n = document.body).firstChild ? (o = t, (i = n.firstChild).parentNode.insertBefore(o, i)) : n.appendChild(t));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(n, 0) : (_o = function o() {
    document.removeEventListener("DOMContentLoaded", _o, !1), n();
  }, document.addEventListener("DOMContentLoaded", _o, !1)) : document.attachEvent && (i = n, c = e.document, d = !1, (_a = function a() {
    try {
      c.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(_a, 50);
    }

    r();
  })(), c.onreadystatechange = function () {
    "complete" == c.readyState && (c.onreadystatechange = null, r());
  });
}(window);

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

/**
 * 是否是null或者undefined
 *
 * @param {} v 参数
 *
 * @return {boolean}
 */
function isUndef(v) {
  return v === null || v === undefined;
}
/**
 * 是否是某种类型
 */

function isType(name) {
  return function (val) {
    return Object.prototype.toString.call(val) === "[object ".concat(name, "]");
  };
}
var isArray = Array.isArray || isType(name);
function checkValidate(value, rules) {
  var _iterator = _createForOfIteratorHelper(rules),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rule = _step.value;

      if (rule.required && (value === '' || isUndef(value) || value.length === 0)) {
        return rule;
      } else if (rule.pattern && value && !rule.pattern.test(value)) {
        return rule;
      } else if (rule.max != null && value != null) {
        var type = _typeof(value);

        if ((type == 'string' || isArray(value)) && value.length > rule.max || type == 'number' && value > rule.max) {
          return rule;
        }
      } else if (rule.min != null && value != null) {
        var _type = _typeof(value);

        if ((_type == 'string' || isArray(value)) && value.length < rule.min || _type == 'number' && value < rule.min) {
          return rule;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

var script = {
  name: 'Renderer',
  props: {
    meta: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    form: {
      type: Object
    }
  },
  data: function data() {
    return {
      /**
       * 存储数据
       */
      innerForm: {},
      isValidate: {},
      pageIndex: 0
    };
  },
  computed: {
    /**
     * 所有的规则
     */
    validateRule: function validateRule() {
      var rule = {};

      for (var pi = 0, plen = this.meta.length; pi < plen; pi++) {
        var page = this.meta[pi];

        for (var si = 0, slen = page.sections.length; si < slen; si++) {
          var section = page.sections[si];
          rule[section.key] = {};

          if (section.validates) {
            for (var i = 0, len = section.validates.length; i < len; i++) {
              var validate = section.validates[i];
              var trigger = validate.trigger || 'blur';

              if (!rule[section.key][trigger]) {
                rule[section.key][trigger] = [];
              }

              rule[section.key][trigger].push(validate);
            }
          }
        }
      }

      return rule;
    }
  },
  watch: {},
  methods: {
    /**
     * 进入前一页
     */
    prevPage: function prevPage() {
      if (this.pageIndex === 0) {
        return false;
      }

      this.pageIndex--;
      return true;
    },

    /**
     * 进入后一页，会检查当前页是否填写完整
     */
    nextPage: function nextPage() {
      // 检查是否到最后一页
      if (this.pageIndex === this.meta.length - 1) {
        return false;
      }

      if (!this.validate()) {
        return false;
      }

      this.pageIndex++;
      return true;
    },
    isFirstPage: function isFirstPage() {
      return this.pageIndex === 0;
    },
    isLastPage: function isLastPage() {
      return this.pageIndex === this.meta.length - 1;
    },

    /**
     * 检查所有规则
     */
    validate: function validate() {
      // 检查是否可以进入下一页
      var sections = this.meta[this.pageIndex].sections;

      if (sections) {
        for (var i = 0, len = sections.length; i < len; i++) {
          var section = sections[i];
          var value = this.innerForm[section.key];
          var ruleMap = this.validateRule[section.key]; // 对于所有的trigger都处理

          for (var trigger in ruleMap) {
            var rules = ruleMap[trigger] || [];
            var failRule = checkValidate(value, rules);
            this.$set(this.isValidate, section.key, !failRule);

            if (failRule) {
              if (failRule.message) {
                this.$emit('error', failRule.message);
              }

              return false;
            }
          }
        }
      }

      return true;
    },

    /**
     * 提交前的最后操作，主要是uploader将未上传的文件进行上传
     */
    beforeSubmit: function () {
      var _beforeSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var pi, plen, meta, i, len, section, $el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pi = 0, plen = this.meta.length;

              case 1:
                if (!(pi < plen)) {
                  _context.next = 16;
                  break;
                }

                meta = this.meta[pi];
                i = 0, len = meta.sections.length;

              case 4:
                if (!(i < len)) {
                  _context.next = 13;
                  break;
                }

                section = meta.sections[i];
                $el = this.$refs[section.key]; // @ts-ignore

                if (!($el && $el.beforeSubmit)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 10;
                return $el.beforeSubmit();

              case 10:
                i++;
                _context.next = 4;
                break;

              case 13:
                pi++;
                _context.next = 1;
                break;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function beforeSubmit() {
        return _beforeSubmit.apply(this, arguments);
      }

      return beforeSubmit;
    }()
  },
  render: function render(h) {
    var _this = this;

    var children = this.meta[this.pageIndex].sections.map(function (section) {
      return [h(section.type, {
        ref: section.key,
        props: _objectSpread2({
          value: _this.innerForm[section.key],
          isValidate: _this.isValidate[section.key]
        }, section.props),
        on: {
          input: function input(value) {
            _this.innerForm[section.key] = value;

            _this.$emit('update:form', _this.innerForm); // 当输入时，标记为正常


            _this.$set(_this.isValidate, section.key, true);
          },
          blur: function blur() {
            // 触发validate
            var ruleMap = _this.validateRule[section.key];

            if (ruleMap) {
              var value = _this.innerForm[section.key];
              var failRule = checkValidate(value, ruleMap['blur'] || []);

              _this.$set(_this.isValidate, section.key, !failRule);

              if (failRule && failRule.message) {
                _this.$emit('error', failRule.message);
              }
            }
          }
        }
      })];
    });
    return h('div', {
      "class": 'form-renderer'
    }, children);
  },
  created: function created() {
    if (this.form) {
      this.innerForm = this.form;
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__ = script;
/* template */

/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-330e6ade_0", {
    source: ".form-renderer .icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.form-renderer .clearfix:before,\n.form-renderer .clearfix:after {\n  content: '';\n  display: table;\n}\n.form-renderer .clearfix:after {\n  clear: both;\n}\n",
    map: {
      "version": 3,
      "sources": ["renderer.vue"],
      "names": [],
      "mappings": "AAAA;EACE,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;EAEE,WAAW;EACX,cAAc;AAChB;AACA;EACE,WAAW;AACb",
      "file": "renderer.vue",
      "sourcesContent": [".form-renderer .icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.form-renderer .clearfix:before,\n.form-renderer .clearfix:after {\n  content: '';\n  display: table;\n}\n.form-renderer .clearfix:after {\n  clear: both;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = undefined;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

var script$1 = {
  name: 'ItemTitle',
  props: {
    title: {
      type: String
    },
    titleHint: {
      type: String
    },
    isRequired: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {}
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-title"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n    "), _vm.isRequired ? _c("span", {
    staticClass: "primary-color"
  }, [_vm._v("*")]) : _vm._e(), _vm._v(" "), _vm.titleHint ? _c("span", {
    staticClass: "tips"
  }, [_vm._v(_vm._s(_vm.titleHint))]) : _vm._e()]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4ebe45b3_0", {
    source: ".item-title {\n  padding: 16px 0px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: bold;\n}\n.item-title .tips {\n  color: #999;\n  font-size: 12px;\n}\n",
    map: {
      "version": 3,
      "sources": ["title.vue"],
      "names": [],
      "mappings": "AAAA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,eAAe;AACjB",
      "file": "title.vue",
      "sourcesContent": [".item-title {\n  padding: 16px 0px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: bold;\n}\n.item-title .tips {\n  color: #999;\n  font-size: 12px;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

var script$2 = {
  name: 'ItemButtonGroup',
  components: {
    ItemTitle: __vue_component__$1
  },
  props: {
    /** 内容 */
    value: {},

    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },
    options: {
      required: true,
      type: Array
    },
    readonly: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    onClickOption: function onClickOption(option) {
      this.$emit('input', option.value);
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-button-group"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }, _vm._l(_vm.options, function (option, index) {
    return _c("div", {
      key: index,
      staticClass: "item-button-item fl",
      staticStyle: {
        "text-align": "left"
      }
    }, [_c("MobileButton", {
      staticClass: "team-level",
      "class": {
        selected: _vm.value == option.value
      },
      attrs: {
        name: "level-selected",
        "is-disabled": _vm.readonly
      },
      on: {
        click: function click($event) {
          return _vm.onClickOption(option);
        }
      }
    }, [_vm._v("\n                " + _vm._s(option.text) + "\n            ")])], 1);
  }), 0)], 1);
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2aaa294e_0", {
    source: ".item-button-group .item-button-item {\n  text-align: center;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n.item-button-group .item-button-item:last-of-type {\n  margin-right: 0;\n}\n",
    map: {
      "version": 3,
      "sources": ["buttonGroup.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB",
      "file": "buttonGroup.vue",
      "sourcesContent": [".item-button-group .item-button-item {\n  text-align: center;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n.item-button-group .item-button-item:last-of-type {\n  margin-right: 0;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

/**
 * @update(names, ids) 数据更新
 * @finish() 点击最后一级的情况下触发事件，可能使用于当点击最后一级的情况下，将关闭地址选择组件
 */

var script$3 = {
  name: 'Cascader',
  props: {
    /** 默认显示的位置内容 */
    value: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },

    /** 最大的level，默认为3，只允许显示 <= maxLevel 的内容 */
    maxLevel: {
      type: Number,
      "default": 3
    },

    /** 获取列表数据 */
    fetchList: {
      required: true,
      type: Function
    }
  },
  data: function data() {
    return {
      /** 当前显示的level */
      level: 0,
      itemMap: {},
      listMap: {}
    };
  },
  computed: {
    list: function list() {
      return this.level === 0 ? this.listMap[0] : this.listMap[this.value[this.level - 1]];
    },

    /**
     * 如果没有的情况下，返回null
     *
     * @return {Number|null} 最后一级districtId，当没有districtIds时候返回null
     */
    lastId: function lastId() {
      var len = this.value.length;

      if (len === 0) {
        return null;
      }

      return this.value[len - 1];
    },

    /**
     * 指示下一列是否存在
     *
     * 1. 当前列数>=3的情况 -> false
     * 2. isUndef(lastDistrictId) -> true
     * 3. district的level达到标准的情况下 -> false
     * 4. !list == null && !(list.length === 0)
     */
    moreColumnVisible: function moreColumnVisible() {
      // 如果列数已经到达了3
      if (this.value.length >= this.maxLevel) {
        return false;
      } // 如果最后一个districtId不存在情况下，表明当前没有任何级别被选中


      var lastId = this.lastId; // 如果最后一级的list不存在，那么返回false

      if (isUndef(this.listMap[lastId]) || !this.listMap[lastId].length) {
        return false;
      }

      if (isUndef(lastId)) {
        return true;
      }

      return true;
    },

    /**
     * 所需要显示的面包屑导航
     *
     * - 当没有的情况下，将会默认显示一列内容
     */
    crumbs: function crumbs() {
      var _this = this;

      if (this.value.length > 0) {
        var result = this.value.map(function (id) {
          var item = _this.itemMap[id];
          return item ? item.name : '';
        });

        if (this.moreColumnVisible) {
          result.push('请选择');
        }

        return result;
      } else {
        return ['请选择'];
      }
    }
  },
  watch: {},
  methods: {
    innerFetchList: function () {
      var _innerFetchList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
        var ret, i, len;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetchList(item);

              case 2:
                ret = _context.sent;

                for (i = 0, len = ret.length; i < len; i++) {
                  this.$set(this.itemMap, ret[i].id, ret[i]);
                }

                this.$set(this.listMap, item.id, ret);
                this.$emit('itemMap', this.itemMap);
                this.$emit('listMap', this.listMap);
                return _context.abrupt("return", ret);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function innerFetchList(_x) {
        return _innerFetchList.apply(this, arguments);
      }

      return innerFetchList;
    }(),

    /**
     * 当address被点击
     *
     * @param {} id 行政区id
     * @param {} column 列数，从0开始
     */
    onClickItem: function () {
      var _onClickItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item, level) {
        var _this2 = this;

        var ids, list;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 删除被点击level开始之后的所有id，保留level之前的所有的id
                ids = this.value.slice(0, level); // 更新ids

                ids.push(item.id);
                _context2.next = 4;
                return this.innerFetchList(item);

              case 4:
                list = _context2.sent;

                if (list.length > 0) {
                  this.level = level + 1;
                }

                this.$emit('input', ids);
                this.$nextTick(function () {
                  if (!_this2.moreColumnVisible) {
                    _this2.$emit('finish');
                  }
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onClickItem(_x2, _x3) {
        return _onClickItem.apply(this, arguments);
      }

      return onClickItem;
    }(),

    /**
     * 点击面包屑的时候
     *
     * @param {} index 导航的位置
     */
    onClickCrumb: function onClickCrumb(level) {
      this.level = level;
    }
  },
  created: function created() {
    this.innerFetchList({
      id: 0,
      name: ''
    });
  }
};

var __vue_script__$3 = script$3;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "cascader"
  }, [_c("div", {
    staticClass: "clearfix white-bg"
  }, _vm._l(_vm.crumbs, function (name, index) {
    return _c("div", {
      key: index,
      staticClass: "cascader__crumb",
      "class": {
        selected: _vm.level == index
      },
      on: {
        click: function click($event) {
          return _vm.onClickCrumb(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(name) + "\n        ")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "cascader__level"
  }, _vm._l(_vm.list, function (item) {
    return _c("div", {
      key: item.id,
      staticClass: "cascader__item after-line",
      "class": {
        selected: item.id == _vm.value[_vm.level]
      },
      on: {
        click: function click($event) {
          return _vm.onClickItem(item, _vm.level);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.name) + "\n        ")]);
  }), 0)]);
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4b663bfc_0", {
    source: ".cascader__crumb {\n  float: left;\n  padding: 7px 10px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n  border-bottom: 1px solid #fff;\n}\n.cascader__crumb.selected {\n  border-bottom: 1px solid #fc4548;\n}\n.cascader__level {\n  height: 216px;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n}\n.cascader__item {\n  position: relative;\n  padding: 7px 20px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n}\n.cascader__item:after {\n  left: 15px;\n}\n.cascader__item.selected {\n  color: #fc4548;\n}\n.cascader__item:last-child:after {\n  display: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["cascader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;EACtB,6BAA6B;AAC/B;AACA;EACE,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,iCAAiC;EACjC,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,UAAU;AACZ;AACA;EACE,cAAc;AAChB;AACA;EACE,aAAa;AACf",
      "file": "cascader.vue",
      "sourcesContent": [".cascader__crumb {\n  float: left;\n  padding: 7px 10px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n  border-bottom: 1px solid #fff;\n}\n.cascader__crumb.selected {\n  border-bottom: 1px solid #fc4548;\n}\n.cascader__level {\n  height: 216px;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: auto;\n}\n.cascader__item {\n  position: relative;\n  padding: 7px 20px;\n  font-size: 12px;\n  line-height: 22px;\n  background-color: #fff;\n}\n.cascader__item:after {\n  left: 15px;\n}\n.cascader__item.selected {\n  color: #fc4548;\n}\n.cascader__item:last-child:after {\n  display: none;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, createInjector, undefined, undefined);

var script$4 = {
  name: 'ItemCascader',
  components: {
    ItemTitle: __vue_component__$1,
    Cascader: __vue_component__$3
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },
    value: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      "default": '请选择'
    },
    fetchList: {
      required: true,
      type: Function
    },
    isValidate: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      visible: false,
      ids: [],
      itemMap: {}
    };
  },
  computed: {
    name: function name() {
      var _this = this;

      if (!this.itemMap) {
        return '';
      }

      return (this.value || []).map(function (id) {
        return _this.itemMap[id] ? _this.itemMap[id].name : '';
      }).join('');
    }
  },
  watch: {
    ids: function ids() {
      this.$emit('input', this.ids);
    }
  },
  methods: {
    onItemMapUpate: function onItemMapUpate(itemMap) {
      this.itemMap = itemMap;
    },
    onClickPlaceholder: function onClickPlaceholder() {
      this.visible = true;
    },
    onFinish: function onFinish() {
      this.visible = false;
    }
  }
};

var __vue_script__$4 = script$4;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-cascader__wrap"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-cascader",
    "class": {
      placeholder: _vm.name.length === 0,
      "is-error": !_vm.isValidate
    },
    on: {
      click: _vm.onClickPlaceholder
    }
  }, [_vm._v("\n        " + _vm._s(_vm.name || _vm.placeholder) + "\n    ")]), _vm._v(" "), _c("van-popup", {
    attrs: {
      position: "bottom"
    },
    model: {
      value: _vm.visible,
      callback: function callback($$v) {
        _vm.visible = $$v;
      },
      expression: "visible"
    }
  }, [_c("Cascader", {
    attrs: {
      fetchList: _vm.fetchList
    },
    on: {
      itemMap: _vm.onItemMapUpate,
      finish: _vm.onFinish
    },
    model: {
      value: _vm.ids,
      callback: function callback($$v) {
        _vm.ids = $$v;
      },
      expression: "ids"
    }
  })], 1)], 1);
};

var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-c464a9aa_0", {
    source: ".item-cascader {\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.item-cascader.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-cascader.placeholder {\n  color: #c8c8c8;\n}\n",
    map: {
      "version": 3,
      "sources": ["cascader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,cAAc;AAChB",
      "file": "cascader.vue",
      "sourcesContent": [".item-cascader {\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.item-cascader.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-cascader.placeholder {\n  color: #c8c8c8;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, createInjector, undefined, undefined);

var script$5 = {
  name: 'ItemInput',
  components: {
    ItemTitle: __vue_component__$1
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },
    // 内容
    value: {},
    name: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      "default": 'text'
    },
    readonly: {
      type: Boolean
    },
    isValidate: {
      type: Boolean,
      "default": true
    },
    parser: {
      type: Function
    },
    formatter: {
      type: Function
    }
  },
  data: function data() {
    return {
      content: ''
    };
  },
  computed: {},
  watch: {
    '$props.value': function $propsValue(val) {
      this.content = this.formatter ? this.formatter(val) : val;
    },
    content: function content(val) {
      this.$emit('input', this.parser ? this.parser(val) : val);
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.$emit('blur');
    }
  },
  created: function created() {
    this.content = this.formatter ? this.formatter(this.value || '') : this.value || '';
  }
};

var __vue_script__$5 = script$5;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint
    }
  }), _vm._v(" "), _vm.type == "text" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "item-input",
    "class": {
      "is-error": !_vm.isValidate
    },
    attrs: {
      type: "text",
      name: _vm.name,
      placeholder: _vm.placeholder,
      readonly: _vm.readonly
    },
    domProps: {
      value: _vm.content
    },
    on: {
      blur: _vm.onBlur,
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.content = $event.target.value;
      }
    }
  }) : _vm.type == "tel" ? _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "item-input",
    "class": {
      "is-error": !_vm.isValidate
    },
    attrs: {
      type: "tel",
      name: _vm.name,
      placeholder: _vm.placeholder,
      readonly: _vm.readonly
    },
    domProps: {
      value: _vm.content
    },
    on: {
      blur: _vm.onBlur,
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.content = $event.target.value;
      }
    }
  }) : _vm._e()], 1);
};

var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-367e1fb1_0", {
    source: ".item-input {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-input::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-input.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n",
    map: {
      "version": 3,
      "sources": ["input.vue"],
      "names": [],
      "mappings": "AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA;EACE,+BAA+B;AACjC",
      "file": "input.vue",
      "sourcesContent": [".item-input {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-input::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-input.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, createInjector, undefined, undefined);

var script$6 = {
  name: 'ItemList',
  components: {
    ItemTitle: __vue_component__$1
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },
    value: {},
    options: {},
    multiple: {
      type: Boolean,
      "default": false
    },
    separator: {
      type: String,
      "default": '、'
    },
    placeholder: {
      type: String
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  computed: {
    valueStr: function valueStr() {
      if (this.multiple) {
        return this.value.length > 0 ? this.value.join(this.separator) : this.placeholder;
      } else {
        return this.value || this.placeholder;
      }
    },
    isPlaceholder: function isPlaceholder() {
      return this.multiple ? !this.value.length : !this.value;
    },
    optionList: function optionList() {
      if (!this.options) {
        return [];
      } else if (typeof this.options === 'function') {
        return this.options();
      } else {
        return this.options;
      }
    }
  },
  watch: {},
  methods: {
    onClickSubject: function onClickSubject() {
      this.visible = true;
    },
    onClickAction: function onClickAction(mutlipleValue) {
      this.$emit('input', Object.keys(mutlipleValue).filter(function (key) {
        return mutlipleValue[key];
      }));
      this.visible = false;
    }
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-list"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-list__inner",
    "class": {
      placeholder: _vm.isPlaceholder
    },
    on: {
      click: _vm.onClickSubject
    }
  }, [_vm._v("\n        " + _vm._s(_vm.valueStr) + "\n    ")])], 1);
};

var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-30627709_0", {
    source: ".item-list {\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n.item-list__inner {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.item-list .placeholder {\n  color: #c8c8c8;\n}\n",
    map: {
      "version": 3,
      "sources": ["list.vue"],
      "names": [],
      "mappings": "AAAA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB",
      "file": "list.vue",
      "sourcesContent": [".item-list {\n  background-color: #f2f2f2;\n  border-radius: 5px;\n}\n.item-list__inner {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n}\n.item-list .placeholder {\n  color: #c8c8c8;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, createInjector, undefined, undefined);

var script$7 = {
  name: 'ItemSelect',
  components: {
    ItemTitle: __vue_component__$1
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },

    /** 内容 */
    value: {},
    name: {
      type: String
    },
    placeholder: {
      type: String
    },

    /** 是否提示为空 */
    blank: {
      type: Boolean,
      "default": false
    },

    /** 对齐 */
    align: {
      type: String,
      "default": 'left'
    },

    /** 是否禁用 */
    disabled: {
      type: Boolean,
      "default": false
    },

    /** 选择内容 */
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },

    /** 是否错误 */
    isValidate: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      /** 内容 */
      content: ''
    };
  },
  computed: {},
  watch: {
    '$props.value': function $propsValue(val) {
      this.content = val;
    },
    content: function content(val) {
      this.$emit('input', val);
    }
  },
  methods: {},
  created: function created() {
    this.content = this.value;
  }
};

var __vue_script__$7 = script$7;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-select__wrap"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-select",
    "class": {
      "is-error": !_vm.isValidate
    }
  }, [_c("div", {
    staticClass: "single-line-left"
  }, [_vm._t("left")], 2), _vm._v(" "), _c("div", {
    staticClass: "single-line-right"
  }, [_vm._t("right")], 2), _vm._v(" "), _c("div", {
    staticClass: "single-line-center-wrapper overflow"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "select",
    "class": {
      placeholder: _vm.value == null || _vm.value == ""
    },
    attrs: {
      disabled: _vm.disabled
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.content = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c("option", {
    attrs: {
      value: ""
    }
  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _vm._l(_vm.options, function (option, index) {
    return _c("option", {
      key: index,
      domProps: {
        value: option.value
      }
    }, [_vm._v("\n                    " + _vm._s(option.text) + "\n                ")]);
  })], 2)])])], 1);
};

var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-b8d5803e_0", {
    source: ".item-select {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-select.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-select .select {\n  width: 100%;\n  line-height: 25px;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n.item-select .select.padding-left {\n  padding-left: 10px;\n}\n.item-select .select.padding-right {\n  padding-right: 10px;\n}\n.item-select .select.left {\n  text-align: left;\n}\n.item-select .select.right {\n  text-align: right;\n}\n.item-select .select.center {\n  text-align: center;\n}\n.item-select .select.placeholder {\n  color: #c8c8c8;\n}\n.item-select.blank {\n  border-color: #fc4548;\n}\n.item-select.blank .input::-webkit-input-placeholder {\n  color: #fc4548;\n}\n",
    map: {
      "version": 3,
      "sources": ["select.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,6BAA6B;EAC7B,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;AAChB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB",
      "file": "select.vue",
      "sourcesContent": [".item-select {\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: #f2f2f2;\n  border: 1px solid transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.item-select.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-select .select {\n  width: 100%;\n  line-height: 25px;\n  background-color: transparent;\n  box-sizing: border-box;\n}\n.item-select .select.padding-left {\n  padding-left: 10px;\n}\n.item-select .select.padding-right {\n  padding-right: 10px;\n}\n.item-select .select.left {\n  text-align: left;\n}\n.item-select .select.right {\n  text-align: right;\n}\n.item-select .select.center {\n  text-align: center;\n}\n.item-select .select.placeholder {\n  color: #c8c8c8;\n}\n.item-select.blank {\n  border-color: #fc4548;\n}\n.item-select.blank .input::-webkit-input-placeholder {\n  color: #fc4548;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = undefined;
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, createInjector, undefined, undefined);

var script$8 = {
  name: 'ItemTextarea',
  components: {
    ItemTitle: __vue_component__$1
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },

    /** 数据 */
    value: {},

    /** 占位 */
    placeholder: {
      type: [String, Number]
    },

    /** 最大长度 */
    max: {
      type: Number
    },

    /** is error */
    isValidate: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      content: ''
    };
  },
  computed: {},
  watch: {
    content: function content(val) {
      var vm = this;

      if (vm.max) {
        if (val.length > vm.max) {
          val = val.slice(0, vm.max);
        }

        vm.content = val;
      }

      vm.$emit('input', val);
    },
    '$props.value': function $propsValue(val) {
      this.content = val;
    }
  },
  methods: {},
  created: function created() {
    this.content = this.value || '';
  }
};

/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-textarea__wrap"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "item-textarea",
    "class": {
      "is-error": !_vm.isValidate
    }
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.content,
      expression: "content"
    }],
    staticClass: "textarea",
    attrs: {
      placeholder: _vm.placeholder,
      rows: "6"
    },
    domProps: {
      value: _vm.content
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.content = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.max ? _c("div", {
    staticClass: "length"
  }, [_vm._v(_vm._s(_vm.content.length) + "/" + _vm._s(_vm.max))]) : _vm._e()])], 1);
};

var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-21d94a5c_0", {
    source: ".item-textarea {\n  background-color: #f2f2f2;\n}\n.item-textarea.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-textarea .textarea {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n  resize: none;\n}\n.item-textarea .textarea::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-textarea .length {\n  padding: 0px 15px 10px;\n  font-size: 12px;\n  line-height: 17px;\n  color: #999;\n  text-align: right;\n}\n",
    map: {
      "version": 3,
      "sources": ["textarea.vue"],
      "names": [],
      "mappings": "AAAA;EACE,yBAAyB;AAC3B;AACA;EACE,+BAA+B;AACjC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,iBAAiB;AACnB",
      "file": "textarea.vue",
      "sourcesContent": [".item-textarea {\n  background-color: #f2f2f2;\n}\n.item-textarea.is-error {\n  box-shadow: 0 0 1px 1px #fc4548;\n}\n.item-textarea .textarea {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 14px;\n  line-height: 25px;\n  background-color: transparent;\n  border-radius: 5px;\n  box-sizing: border-box;\n  resize: none;\n}\n.item-textarea .textarea::-webkit-input-placeholder {\n  color: #c8c8c8;\n}\n.item-textarea .length {\n  padding: 0px 15px 10px;\n  font-size: 12px;\n  line-height: 17px;\n  color: #999;\n  text-align: right;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = undefined;
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, createInjector, undefined, undefined);

/**
 * 班级头像上传逻辑
 *
 * - @add 数据添加
 * - @remove 数据删除
 */
var script$9 = {
  name: 'Uploader',
  props: {
    /** 提示内容 */
    hint: {
      type: String
    },

    /** 背景样式类 */
    backgroundStyle: {
      type: [Object, Array]
    },

    /** 是否未填写 */
    blank: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      // 图片内容
      image: null
    };
  },
  computed: {
    opacity: function opacity() {
      return this.image ? 1 : 0;
    }
  },
  watch: {},
  methods: {
    /**
     * 获得元素
     *
     * @return {} uploader
     */
    getImage: function getImage() {
      return this.image;
    },

    /**
     * 设置头像
     *
     * @param {} image 头像内容
     */
    setImage: function setImage(image) {
      var $uploader = this.$refs.uploader;
      $uploader.setImages([{
        image: image,
        serverId: null
      }]);
      this.image = image;
    },

    /**
     * 删除当前的图片信息
     */
    removeImage: function removeImage() {
      var $uploader = this.$refs.uploader;
      $uploader.setImages([]);
    },

    /**
     * 数据开始加载
     */
    onLoad: function onLoad() {
      this.$emit('load');
    },

    /**
     * 图片加载完成
     */
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * add事件
     *
     *  {image, serverId}
     */
    onAdd: function onAdd() {
      var $uploader = this.$refs.uploader;
      var images = $uploader.getImages();
      this.image = images[0].image;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['add'].concat(args));
    },

    /**
     * remove事件
     *
     *  {} 可能没有数据
     */
    onRemove: function onRemove() {
      this.image = null;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.$emit.apply(this, ['remove'].concat(args));
    }
  }
};

/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "form-renderer-uploader",
    "class": {
      blank: _vm.blank
    }
  }, [_c("WechatUploader", {
    ref: "uploader",
    attrs: {
      size: 1,
      "can-modify": true,
      "container-class": ["loaderImg"],
      "container-style": {
        opacity: _vm.opacity,
        "z-index": 1,
        position: "relative"
      },
      "request-class": ["loaderImg"],
      "image-class": ["loaderImg"]
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "uploader-mock-background",
    style: _vm.backgroundStyle
  }, [_c("p", [_c("svg", {
    staticClass: "icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c("use", {
    attrs: {
      "xlink:href": "#iconxiangji1"
    }
  })])]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.hint))])])], 1);
};

var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;
/* style */

var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-bdf99fd0_0", {
    source: ".form-renderer-uploader {\n  position: relative;\n  width: 84px;\n  height: 84px;\n  border-radius: 3px;\n  border: 1px solid #eaeaea;\n  background-color: #fafafa;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.form-renderer-uploader .uploader-mock-background {\n  color: #000;\n  text-align: center;\n  margin-top: 30px;\n}\n.form-renderer-uploader.blank {\n  border: 1px solid #fc4548;\n}\n.form-renderer-uploader.blank .uploader-mock-background {\n  color: #fc4548;\n}\n.form-renderer-uploader .icon {\n  font-size: 23px;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-request.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n  margin-right: 0;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  position: relative;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .remove-wrapper {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  left: 0;\n  top: 61px;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  line-height: 23px !important;\n  font-size: 14px !important;\n  left: 0;\n  top: 0 !important;\n  color: #666;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100% !important;\n  height: 0 !important;\n  content: '更换图片';\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 0 !important;\n  height: 0 !important;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.form-renderer-uploader .loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.form-renderer-uploader .upLoaderImg {\n  width: 84px;\n  height: 84px;\n  position: absolute;\n}\n.form-renderer-uploader .uploader-mock-background {\n  position: absolute;\n  top: 0;\n  width: 84px;\n  height: 84px;\n  text-align: center;\n}\n",
    map: {
      "version": 3,
      "sources": ["uploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,yBAAyB;EACzB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,cAAc;AAChB;AACA;EACE,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,OAAO;EACP,SAAS;AACX;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,0BAA0B;EAC1B,OAAO;EACP,iBAAiB;EACjB,WAAW;EACX,+CAA+C;AACjD;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,sBAAsB;EACtB,oBAAoB;EACpB,eAAe;EACf,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,6CAA6C;AAC/C;AACA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB",
      "file": "uploader.vue",
      "sourcesContent": [".form-renderer-uploader {\n  position: relative;\n  width: 84px;\n  height: 84px;\n  border-radius: 3px;\n  border: 1px solid #eaeaea;\n  background-color: #fafafa;\n  margin: 0 auto;\n  overflow: hidden;\n}\n.form-renderer-uploader .uploader-mock-background {\n  color: #000;\n  text-align: center;\n  margin-top: 30px;\n}\n.form-renderer-uploader.blank {\n  border: 1px solid #fc4548;\n}\n.form-renderer-uploader.blank .uploader-mock-background {\n  color: #fc4548;\n}\n.form-renderer-uploader .icon {\n  font-size: 23px;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-request.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n  margin-right: 0;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  position: relative;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .remove-wrapper {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  left: 0;\n  top: 61px;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 84px !important;\n  height: 23px !important;\n  line-height: 23px !important;\n  font-size: 14px !important;\n  left: 0;\n  top: 0 !important;\n  color: #666;\n  background-color: rgba(0, 0, 0, 0.5) !important;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100% !important;\n  height: 0 !important;\n  content: '更换图片';\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 0 !important;\n  height: 0 !important;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.form-renderer-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.form-renderer-uploader .loaderImg {\n  width: 84px !important;\n  height: 84px !important;\n}\n.form-renderer-uploader .upLoaderImg {\n  width: 84px;\n  height: 84px;\n  position: absolute;\n}\n.form-renderer-uploader .uploader-mock-background {\n  position: absolute;\n  top: 0;\n  width: 84px;\n  height: 84px;\n  text-align: center;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = undefined;
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, createInjector, undefined, undefined);

var script$a = {
  name: 'ItemUploader',
  components: {
    ItemTitle: __vue_component__$1,
    Uploader: __vue_component__$9
  },
  props: {
    value: {},
    title: {
      type: String
    },
    titleHint: {
      type: String
    },

    /** 上传函数 */
    httpRequest: {
      required: true,
      type: Function
    },

    /** 是否自动上传 */
    autoUpload: {
      type: Boolean,
      "default": true
    },

    /** 是否通过验证 */
    isValiate: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      /** 可能存在判断出错的情况 */
      hasUploaded: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 添加二维码
     */
    onAdd: function onAdd(_ref) {
      var image = _ref.image,
          serverId = _ref.serverId;
      var imageInfo = {
        key: serverId,
        url: image,
        mode: 'wechat'
      };

      if (this.autoUpload) {
        this.upload(imageInfo);
      } else {
        this.$emit('input', imageInfo);
      }
    },

    /**
     * 删除二维码
     */
    onRemove: function onRemove() {
      this.$emit('input', null);
      this.hasUploaded = false;
    },
    onLoad: function onLoad() {
      this.$emit('load');
    },
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * 上传流程
     */
    upload: function () {
      var _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                image = image || this.value;

                if (!(this.hasUploaded || !image)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return this.httpRequest(image);

              case 5:
                result = _context.sent;
                this.$emit('input', result);
                this.hasUploaded = true;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function upload(_x) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),

    /**
     * 生命周期
     */
    beforeSubmit: function () {
      var _beforeSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.upload();

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeSubmit() {
        return _beforeSubmit.apply(this, arguments);
      }

      return beforeSubmit;
    }()
  },
  mounted: function mounted() {
    if (this.value) {
      // @ts-ignore
      this.$refs.uploader.setImage(this.value.url); // 如果已经有数据情况下，认为已经上传了

      this.hasUploaded = true;
    }
  }
};

/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-uploader clearfix"
  }, [_c("Uploader", {
    ref: "uploader",
    staticClass: "fr",
    attrs: {
      black: !_vm.isValiate
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "code-title"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title
    }
  }), _vm._v(" "), _vm.titleHint ? _c("div", {
    staticClass: "title-hint"
  }, [_vm._v(_vm._s(_vm.titleHint))]) : _vm._e()], 1)], 1);
};

var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;
/* style */

var __vue_inject_styles__$a = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-acd19378_0", {
    source: ".item-uploader {\n  padding: 20px 0 0px;\n  text-align: center;\n}\n.item-uploader .ro-uploader-wrap {\n  width: 72px;\n  height: 72px;\n}\n.item-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  background-size: cover;\n  background-position: center;\n}\n.item-uploader .code-title {\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #101010;\n  text-align: left;\n  overflow: hidden;\n}\n.item-uploader .code-title .item-title {\n  padding: 6px 0 0px;\n}\n.item-uploader .code-title .title-hint {\n  margin-top: 4px;\n  color: #999;\n}\n",
    map: {
      "version": 3,
      "sources": ["uploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,WAAW;AACb",
      "file": "uploader.vue",
      "sourcesContent": [".item-uploader {\n  padding: 20px 0 0px;\n  text-align: center;\n}\n.item-uploader .ro-uploader-wrap {\n  width: 72px;\n  height: 72px;\n}\n.item-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image.loaderImg {\n  background-size: cover;\n  background-position: center;\n}\n.item-uploader .code-title {\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #101010;\n  text-align: left;\n  overflow: hidden;\n}\n.item-uploader .code-title .item-title {\n  padding: 6px 0 0px;\n}\n.item-uploader .code-title .title-hint {\n  margin-top: 4px;\n  color: #999;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = undefined;
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, createInjector, undefined, undefined);

var script$b = {
  name: 'ItemMultiUploader',
  components: {
    ItemTitle: __vue_component__$1
  },
  props: {
    /** title */
    title: {
      type: String
    },

    /** titleHint */
    titleHint: {
      type: String
    },

    /** 数据 */
    value: {},
    size: {
      type: Number,
      "default": 9
    },

    /** 上传函数 */
    httpRequest: {
      required: true,
      type: Function
    }
  },
  data: function data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 数据开始加载
     */
    onLoad: function onLoad() {
      this.$emit('load');
    },

    /**
     * 图片加载完成
     */
    onFinish: function onFinish() {
      this.$emit('finish');
    },

    /**
     * add事件
     *
     *  {image, serverId}
     */
    onAdd: function onAdd() {
      var $uploader = this.$refs.uploader;
      var images = $uploader.getImages();
      this.$emit('input', images.map(function (image) {
        var info = {
          key: image.serverId,
          url: image.image,
          // @ts-ignore
          mode: image.mode || 'wechat'
        };
        return info;
      }));

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['add'].concat(args));
    },

    /**
     * remove事件
     *
     *  {} 可能没有数据
     */
    onRemove: function onRemove() {
      var $uploader = this.$refs.uploader;
      var images = $uploader.getImages();
      this.$emit('input', images.map(function (image) {
        var info = {
          key: image.serverId,
          url: image.image,
          // @ts-ignore
          mode: image.mode || 'wechat'
        };
        return info;
      }));

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.$emit.apply(this, ['remove'].concat(args));
    },

    /**
     * 完成上传
     */
    upload: function () {
      var _upload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var rdatas, i, len, rdata;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.all((this.value || []).map(function (image) {
                  return image.mode === 'wechat' ? _this.httpRequest(image) : null;
                }));

              case 2:
                rdatas = _context.sent;
                i = 0, len = rdatas.length;

              case 4:
                if (!(i < len)) {
                  _context.next = 14;
                  break;
                }

                rdata = rdatas[i];

                if (!(rdata === null)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("continue", 11);

              case 8:
                this.value[i].key = rdata.key;
                this.value[i].url = rdata.url;
                this.value[i].mode = 'file';

              case 11:
                i++;
                _context.next = 4;
                break;

              case 14:
                this.$emit('input', this.value);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function upload() {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),

    /**
     * 生命周期
     */
    beforeSubmit: function () {
      var _beforeSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.upload();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeSubmit() {
        return _beforeSubmit.apply(this, arguments);
      }

      return beforeSubmit;
    }()
  },
  mounted: function mounted() {
    if (this.value) {
      this.$refs.uploader.setImages(this.value.map(function (item) {
        return {
          image: item.url,
          serverId: item.key,
          mode: item.mode || 'file'
        };
      }));
    }
  }
};

/* script */
var __vue_script__$b = script$b;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "item-multi-uploader"
  }, [_c("ItemTitle", {
    attrs: {
      title: _vm.title,
      titleHint: _vm.titleHint
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "clearfix"
  }, [_c("WechatUploader", {
    ref: "uploader",
    attrs: {
      size: _vm.size,
      "can-modify": true
    },
    on: {
      add: _vm.onAdd,
      remove: _vm.onRemove,
      load: _vm.onLoad,
      finish: _vm.onFinish
    }
  })], 1)], 1);
};

var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;
/* style */

var __vue_inject_styles__$b = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2e68185e_0", {
    source: ".item-multi-uploader .uploader-wrap {\n  padding: 8px 18px;\n}\n.item-multi-uploader .ro-uploader-wrap {\n  display: block;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  float: left;\n  position: relative;\n  margin-right: 0;\n  padding: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image {\n  vertical-align: middle;\n  width: 109px !important;\n  height: 109px !important;\n  background-position: center center;\n  border-radius: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 11px !important;\n  height: 11px !important;\n  font-size: 11px;\n  line-height: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  background-color: rgba(255, 255, 255, 0.8);\n  right: 6px;\n  top: 6px;\n  border-radius: 50%;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  background-color: #ccc;\n  transform: translate(-50%, -50%) rotateZ(45deg);\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  width: 1px;\n  height: 7px !important;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 7px !important;\n  height: 1px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request {\n  position: relative;\n  width: 109px !important;\n  height: 109px !important;\n  border: 1px dashed #ccc;\n  margin: 2px 0px 0px 2px;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  background-color: #ccc;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before {\n  width: 3px;\n  height: 36.33333333px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  width: 36.33333333px;\n  height: 3px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active {\n  border-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:after {\n  background-color: #999;\n}\n",
    map: {
      "version": 3,
      "sources": ["multiUploader.vue"],
      "names": [],
      "mappings": "AAAA;EACE,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,wBAAwB;EACxB,kCAAkC;EAClC,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,+BAA+B;EAC/B,0CAA0C;EAC1C,UAAU;EACV,QAAQ;EACR,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;EACtB,+CAA+C;AACjD;AACA;EACE,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;;EAEE,sBAAsB;AACxB;AACA;EACE,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,WAAW;EACX,kBAAkB;EAClB,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;AACxB",
      "file": "multiUploader.vue",
      "sourcesContent": [".item-multi-uploader .uploader-wrap {\n  padding: 8px 18px;\n}\n.item-multi-uploader .ro-uploader-wrap {\n  display: block;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap {\n  float: left;\n  position: relative;\n  margin-right: 0;\n  padding: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-image {\n  vertical-align: middle;\n  width: 109px !important;\n  height: 109px !important;\n  background-position: center center;\n  border-radius: 2px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove {\n  position: absolute;\n  width: 11px !important;\n  height: 11px !important;\n  font-size: 11px;\n  line-height: 11px;\n  color: rgba(255, 255, 255, 0.6);\n  background-color: rgba(255, 255, 255, 0.8);\n  right: 6px;\n  top: 6px;\n  border-radius: 50%;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  background-color: #ccc;\n  transform: translate(-50%, -50%) rotateZ(45deg);\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:before {\n  width: 1px;\n  height: 7px !important;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:after {\n  width: 7px !important;\n  height: 1px;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active {\n  border-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-image-wrap .ro-uploader-remove:active:after {\n  background-color: #fff;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request {\n  position: relative;\n  width: 109px !important;\n  height: 109px !important;\n  border: 1px dashed #ccc;\n  margin: 2px 0px 0px 2px;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  background-color: #ccc;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:before {\n  width: 3px;\n  height: 36.33333333px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:after {\n  width: 36.33333333px;\n  height: 3px;\n  border-radius: 3px;\n  background-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active {\n  border-color: #999;\n}\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:before,\n.item-multi-uploader .ro-uploader-wrap .ro-uploader-request:active:after {\n  background-color: #999;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = undefined;
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, createInjector, undefined, undefined);

exports.ItemButtonGroup = __vue_component__$2;
exports.ItemCascader = __vue_component__$4;
exports.ItemInput = __vue_component__$5;
exports.ItemList = __vue_component__$6;
exports.ItemMultiUploader = __vue_component__$b;
exports.ItemSelect = __vue_component__$7;
exports.ItemTextarea = __vue_component__$8;
exports.ItemTitle = __vue_component__$1;
exports.ItemUploader = __vue_component__$a;
exports.Renderer = __vue_component__;
