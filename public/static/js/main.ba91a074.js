/*! For license information please see main.ba91a074.js.LICENSE.txt */
!(function () {
  'use strict';
  var t = {
      110: function (t, e, n) {
        var r = n(441),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          o = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function s(t) {
          return r.isMemo(t) ? o : l[t.$$typeof] || i;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = o);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          h = Object.getOwnPropertyDescriptor,
          d = Object.getPrototypeOf,
          p = Object.prototype;
        t.exports = function t(e, n, r) {
          if ('string' !== typeof n) {
            if (p) {
              var i = d(n);
              i && i !== p && t(e, i, r);
            }
            var o = c(n);
            f && (o = o.concat(f(n)));
            for (var l = s(e), v = s(n), g = 0; g < o.length; ++g) {
              var y = o[g];
              if (!a[y] && (!r || !r[y]) && (!v || !v[y]) && (!l || !l[y])) {
                var m = h(n, y);
                try {
                  u(e, y, m);
                } catch (b) {}
              }
            }
          }
          return e;
        };
      },
      463: function (t, e, n) {
        var r = n(791),
          i = n(296);
        function a(t) {
          for (
            var e =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + t,
              n = 1;
            n < arguments.length;
            n++
          )
            e += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            t +
            '; visit ' +
            e +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var o = new Set(),
          l = {};
        function s(t, e) {
          u(t, e), u(t + 'Capture', e);
        }
        function u(t, e) {
          for (l[t] = e, t = 0; t < e.length; t++) o.add(e[t]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          h =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          d = {},
          p = {};
        function v(t, e, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === e || 3 === e || 4 === e),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = t),
            (this.type = e),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (t) {
            g[t] = new v(t, 0, !1, t, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (t) {
            var e = t[0];
            g[e] = new v(e, 1, !1, t[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (t) {
              g[t] = new v(t, 2, !1, t.toLowerCase(), null, !1, !1);
            }
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (t) {
            g[t] = new v(t, 2, !1, t, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (t) {
              g[t] = new v(t, 3, !1, t.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
            g[t] = new v(t, 3, !0, t, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (t) {
            g[t] = new v(t, 4, !1, t, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (t) {
            g[t] = new v(t, 6, !1, t, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (t) {
            g[t] = new v(t, 5, !1, t.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function m(t) {
          return t[1].toUpperCase();
        }
        function b(t, e, n, r) {
          var i = g.hasOwnProperty(e) ? g[e] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < e.length) ||
              ('o' !== e[0] && 'O' !== e[0]) ||
              ('n' !== e[1] && 'N' !== e[1])) &&
            ((function (t, e, n, r) {
              if (
                null === e ||
                'undefined' === typeof e ||
                (function (t, e, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof e) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (t = t.toLowerCase().slice(0, 5)) &&
                            'aria-' !== t)
                      );
                    default:
                      return !1;
                  }
                })(t, e, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !e;
                  case 4:
                    return !1 === e;
                  case 5:
                    return isNaN(e);
                  case 6:
                    return isNaN(e) || 1 > e;
                }
              return !1;
            })(e, n, i, r) && (n = null),
            r || null === i
              ? (function (t) {
                  return (
                    !!f.call(p, t) ||
                    (!f.call(d, t) &&
                      (h.test(t) ? (p[t] = !0) : ((d[t] = !0), !1)))
                  );
                })(e) &&
                (null === n ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
              : i.mustUseProperty
              ? (t[i.propertyName] = null === n ? 3 !== i.type && '' : n)
              : ((e = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? t.removeAttribute(e)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ''
                        : '' + n),
                    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (t) {
            var e = t.replace(y, m);
            g[e] = new v(e, 1, !1, t, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (t) {
              var e = t.replace(y, m);
              g[e] = new v(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
            var e = t.replace(y, m);
            g[e] = new v(
              e,
              1,
              !1,
              t,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (t) {
            g[t] = new v(t, 1, !1, t.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new v(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (t) {
            g[t] = new v(t, 1, !1, t.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for('react.element'),
          _ = Symbol.for('react.portal'),
          w = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          M = Symbol.for('react.profiler'),
          E = Symbol.for('react.provider'),
          P = Symbol.for('react.context'),
          C = Symbol.for('react.forward_ref'),
          O = Symbol.for('react.suspense'),
          A = Symbol.for('react.suspense_list'),
          T = Symbol.for('react.memo'),
          D = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var L = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var R = Symbol.iterator;
        function N(t) {
          return null === t || 'object' !== typeof t
            ? null
            : 'function' === typeof (t = (R && t[R]) || t['@@iterator'])
            ? t
            : null;
        }
        var I,
          z = Object.assign;
        function j(t) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var e = n.stack.trim().match(/\n( *(at )?)/);
              I = (e && e[1]) || '';
            }
          return '\n' + I + t;
        }
        var F = !1;
        function V(t, e) {
          if (!t || F) return '';
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (e)
              if (
                ((e = function () {
                  throw Error();
                }),
                Object.defineProperty(e.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(e, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(t, [], e);
              } else {
                try {
                  e.call();
                } catch (u) {
                  r = u;
                }
                t.call(e.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              t();
            }
          } catch (u) {
            if (u && r && 'string' === typeof u.stack) {
              for (
                var i = u.stack.split('\n'),
                  a = r.stack.split('\n'),
                  o = i.length - 1,
                  l = a.length - 1;
                1 <= o && 0 <= l && i[o] !== a[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== a[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || i[o] !== a[l])) {
                        var s = '\n' + i[o].replace(' at new ', ' at ');
                        return (
                          t.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', t.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (t = t ? t.displayName || t.name : '') ? j(t) : '';
        }
        function B(t) {
          switch (t.tag) {
            case 5:
              return j(t.type);
            case 16:
              return j('Lazy');
            case 13:
              return j('Suspense');
            case 19:
              return j('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (t = V(t.type, !1));
            case 11:
              return (t = V(t.type.render, !1));
            case 1:
              return (t = V(t.type, !0));
            default:
              return '';
          }
        }
        function W(t) {
          if (null == t) return null;
          if ('function' === typeof t) return t.displayName || t.name || null;
          if ('string' === typeof t) return t;
          switch (t) {
            case w:
              return 'Fragment';
            case _:
              return 'Portal';
            case M:
              return 'Profiler';
            case S:
              return 'StrictMode';
            case O:
              return 'Suspense';
            case A:
              return 'SuspenseList';
          }
          if ('object' === typeof t)
            switch (t.$$typeof) {
              case P:
                return (t.displayName || 'Context') + '.Consumer';
              case E:
                return (t._context.displayName || 'Context') + '.Provider';
              case C:
                var e = t.render;
                return (
                  (t = t.displayName) ||
                    (t =
                      '' !== (t = e.displayName || e.name || '')
                        ? 'ForwardRef(' + t + ')'
                        : 'ForwardRef'),
                  t
                );
              case T:
                return null !== (e = t.displayName || null)
                  ? e
                  : W(t.type) || 'Memo';
              case D:
                (e = t._payload), (t = t._init);
                try {
                  return W(t(e));
                } catch (n) {}
            }
          return null;
        }
        function H(t) {
          var e = t.type;
          switch (t.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (e.displayName || 'Context') + '.Consumer';
            case 10:
              return (e._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (t = (t = e.render).displayName || t.name || ''),
                e.displayName ||
                  ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return e;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return W(e);
            case 8:
              return e === S ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof e)
                return e.displayName || e.name || null;
              if ('string' === typeof e) return e;
          }
          return null;
        }
        function U(t) {
          switch (typeof t) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return t;
            default:
              return '';
          }
        }
        function Y(t) {
          var e = t.type;
          return (
            (t = t.nodeName) &&
            'input' === t.toLowerCase() &&
            ('checkbox' === e || 'radio' === e)
          );
        }
        function $(t) {
          t._valueTracker ||
            (t._valueTracker = (function (t) {
              var e = Y(t) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                r = '' + t[e];
              if (
                !t.hasOwnProperty(e) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (t) {
                      (r = '' + t), a.call(this, t);
                    },
                  }),
                  Object.defineProperty(t, e, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (t) {
                      r = '' + t;
                    },
                    stopTracking: function () {
                      (t._valueTracker = null), delete t[e];
                    },
                  }
                );
              }
            })(t));
        }
        function X(t) {
          if (!t) return !1;
          var e = t._valueTracker;
          if (!e) return !0;
          var n = e.getValue(),
            r = '';
          return (
            t && (r = Y(t) ? (t.checked ? 'true' : 'false') : t.value),
            (t = r) !== n && (e.setValue(t), !0)
          );
        }
        function G(t) {
          if (
            'undefined' ===
            typeof (t =
              t || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return t.activeElement || t.body;
          } catch (e) {
            return t.body;
          }
        }
        function Q(t, e) {
          var n = e.checked;
          return z({}, e, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : t._wrapperState.initialChecked,
          });
        }
        function q(t, e) {
          var n = null == e.defaultValue ? '' : e.defaultValue,
            r = null != e.checked ? e.checked : e.defaultChecked;
          (n = U(null != e.value ? e.value : n)),
            (t._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === e.type || 'radio' === e.type
                  ? null != e.checked
                  : null != e.value,
            });
        }
        function Z(t, e) {
          null != (e = e.checked) && b(t, 'checked', e, !1);
        }
        function K(t, e) {
          Z(t, e);
          var n = U(e.value),
            r = e.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === t.value) || t.value != n) &&
                (t.value = '' + n)
              : t.value !== '' + n && (t.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void t.removeAttribute('value');
          e.hasOwnProperty('value')
            ? tt(t, e.type, n)
            : e.hasOwnProperty('defaultValue') &&
              tt(t, e.type, U(e.defaultValue)),
            null == e.checked &&
              null != e.defaultChecked &&
              (t.defaultChecked = !!e.defaultChecked);
        }
        function J(t, e, n) {
          if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
            var r = e.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== e.value && null !== e.value)
              )
            )
              return;
            (e = '' + t._wrapperState.initialValue),
              n || e === t.value || (t.value = e),
              (t.defaultValue = e);
          }
          '' !== (n = t.name) && (t.name = ''),
            (t.defaultChecked = !!t._wrapperState.initialChecked),
            '' !== n && (t.name = n);
        }
        function tt(t, e, n) {
          ('number' === e && G(t.ownerDocument) === t) ||
            (null == n
              ? (t.defaultValue = '' + t._wrapperState.initialValue)
              : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
        }
        var et = Array.isArray;
        function nt(t, e, n, r) {
          if (((t = t.options), e)) {
            e = {};
            for (var i = 0; i < n.length; i++) e['$' + n[i]] = !0;
            for (n = 0; n < t.length; n++)
              (i = e.hasOwnProperty('$' + t[n].value)),
                t[n].selected !== i && (t[n].selected = i),
                i && r && (t[n].defaultSelected = !0);
          } else {
            for (n = '' + U(n), e = null, i = 0; i < t.length; i++) {
              if (t[i].value === n)
                return (
                  (t[i].selected = !0), void (r && (t[i].defaultSelected = !0))
                );
              null !== e || t[i].disabled || (e = t[i]);
            }
            null !== e && (e.selected = !0);
          }
        }
        function rt(t, e) {
          if (null != e.dangerouslySetInnerHTML) throw Error(a(91));
          return z({}, e, {
            value: void 0,
            defaultValue: void 0,
            children: '' + t._wrapperState.initialValue,
          });
        }
        function it(t, e) {
          var n = e.value;
          if (null == n) {
            if (((n = e.children), (e = e.defaultValue), null != n)) {
              if (null != e) throw Error(a(92));
              if (et(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              e = n;
            }
            null == e && (e = ''), (n = e);
          }
          t._wrapperState = { initialValue: U(n) };
        }
        function at(t, e) {
          var n = U(e.value),
            r = U(e.defaultValue);
          null != n &&
            ((n = '' + n) !== t.value && (t.value = n),
            null == e.defaultValue &&
              t.defaultValue !== n &&
              (t.defaultValue = n)),
            null != r && (t.defaultValue = '' + r);
        }
        function ot(t) {
          var e = t.textContent;
          e === t._wrapperState.initialValue &&
            '' !== e &&
            null !== e &&
            (t.value = e);
        }
        function lt(t) {
          switch (t) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function st(t, e) {
          return null == t || 'http://www.w3.org/1999/xhtml' === t
            ? lt(e)
            : 'http://www.w3.org/2000/svg' === t && 'foreignObject' === e
            ? 'http://www.w3.org/1999/xhtml'
            : t;
        }
        var ut,
          ct,
          ft =
            ((ct = function (t, e) {
              if (
                'http://www.w3.org/2000/svg' !== t.namespaceURI ||
                'innerHTML' in t
              )
                t.innerHTML = e;
              else {
                for (
                  (ut = ut || document.createElement('div')).innerHTML =
                    '<svg>' + e.valueOf().toString() + '</svg>',
                    e = ut.firstChild;
                  t.firstChild;

                )
                  t.removeChild(t.firstChild);
                for (; e.firstChild; ) t.appendChild(e.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (t, e, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ct(t, e);
                  });
                }
              : ct);
        function ht(t, e) {
          if (e) {
            var n = t.firstChild;
            if (n && n === t.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = e);
          }
          t.textContent = e;
        }
        var dt = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pt = ['Webkit', 'ms', 'Moz', 'O'];
        function vt(t, e, n) {
          return null == e || 'boolean' === typeof e || '' === e
            ? ''
            : n ||
              'number' !== typeof e ||
              0 === e ||
              (dt.hasOwnProperty(t) && dt[t])
            ? ('' + e).trim()
            : e + 'px';
        }
        function gt(t, e) {
          for (var n in ((t = t.style), e))
            if (e.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                i = vt(n, e[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? t.setProperty(n, i) : (t[n] = i);
            }
        }
        Object.keys(dt).forEach(function (t) {
          pt.forEach(function (e) {
            (e = e + t.charAt(0).toUpperCase() + t.substring(1)),
              (dt[e] = dt[t]);
          });
        });
        var yt = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function mt(t, e) {
          if (e) {
            if (
              yt[t] &&
              (null != e.children || null != e.dangerouslySetInnerHTML)
            )
              throw Error(a(137, t));
            if (null != e.dangerouslySetInnerHTML) {
              if (null != e.children) throw Error(a(60));
              if (
                'object' !== typeof e.dangerouslySetInnerHTML ||
                !('__html' in e.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != e.style && 'object' !== typeof e.style)
              throw Error(a(62));
          }
        }
        function bt(t, e) {
          if (-1 === t.indexOf('-')) return 'string' === typeof e.is;
          switch (t) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xt = null;
        function kt(t) {
          return (
            (t = t.target || t.srcElement || window).correspondingUseElement &&
              (t = t.correspondingUseElement),
            3 === t.nodeType ? t.parentNode : t
          );
        }
        var _t = null,
          wt = null,
          St = null;
        function Mt(t) {
          if ((t = bi(t))) {
            if ('function' !== typeof _t) throw Error(a(280));
            var e = t.stateNode;
            e && ((e = ki(e)), _t(t.stateNode, t.type, e));
          }
        }
        function Et(t) {
          wt ? (St ? St.push(t) : (St = [t])) : (wt = t);
        }
        function Pt() {
          if (wt) {
            var t = wt,
              e = St;
            if (((St = wt = null), Mt(t), e))
              for (t = 0; t < e.length; t++) Mt(e[t]);
          }
        }
        function Ct(t, e) {
          return t(e);
        }
        function Ot() {}
        var At = !1;
        function Tt(t, e, n) {
          if (At) return t(e, n);
          At = !0;
          try {
            return Ct(t, e, n);
          } finally {
            (At = !1), (null !== wt || null !== St) && (Ot(), Pt());
          }
        }
        function Dt(t, e) {
          var n = t.stateNode;
          if (null === n) return null;
          var r = ki(n);
          if (null === r) return null;
          n = r[e];
          t: switch (e) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (t = t.type) ||
                  'input' === t ||
                  'select' === t ||
                  'textarea' === t
                )),
                (t = !r);
              break t;
            default:
              t = !1;
          }
          if (t) return null;
          if (n && 'function' !== typeof n) throw Error(a(231, e, typeof n));
          return n;
        }
        var Lt = !1;
        if (c)
          try {
            var Rt = {};
            Object.defineProperty(Rt, 'passive', {
              get: function () {
                Lt = !0;
              },
            }),
              window.addEventListener('test', Rt, Rt),
              window.removeEventListener('test', Rt, Rt);
          } catch (ct) {
            Lt = !1;
          }
        function Nt(t, e, n, r, i, a, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            e.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var It = !1,
          zt = null,
          jt = !1,
          Ft = null,
          Vt = {
            onError: function (t) {
              (It = !0), (zt = t);
            },
          };
        function Bt(t, e, n, r, i, a, o, l, s) {
          (It = !1), (zt = null), Nt.apply(Vt, arguments);
        }
        function Wt(t) {
          var e = t,
            n = t;
          if (t.alternate) for (; e.return; ) e = e.return;
          else {
            t = e;
            do {
              0 !== (4098 & (e = t).flags) && (n = e.return), (t = e.return);
            } while (t);
          }
          return 3 === e.tag ? n : null;
        }
        function Ht(t) {
          if (13 === t.tag) {
            var e = t.memoizedState;
            if (
              (null === e &&
                null !== (t = t.alternate) &&
                (e = t.memoizedState),
              null !== e)
            )
              return e.dehydrated;
          }
          return null;
        }
        function Ut(t) {
          if (Wt(t) !== t) throw Error(a(188));
        }
        function Yt(t) {
          return null !==
            (t = (function (t) {
              var e = t.alternate;
              if (!e) {
                if (null === (e = Wt(t))) throw Error(a(188));
                return e !== t ? null : t;
              }
              for (var n = t, r = e; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return Ut(i), t;
                    if (o === r) return Ut(i), e;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var l = !1, s = i.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = i), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = i);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? t : e;
            })(t))
            ? $t(t)
            : null;
        }
        function $t(t) {
          if (5 === t.tag || 6 === t.tag) return t;
          for (t = t.child; null !== t; ) {
            var e = $t(t);
            if (null !== e) return e;
            t = t.sibling;
          }
          return null;
        }
        var Xt = i.unstable_scheduleCallback,
          Gt = i.unstable_cancelCallback,
          Qt = i.unstable_shouldYield,
          qt = i.unstable_requestPaint,
          Zt = i.unstable_now,
          Kt = i.unstable_getCurrentPriorityLevel,
          Jt = i.unstable_ImmediatePriority,
          te = i.unstable_UserBlockingPriority,
          ee = i.unstable_NormalPriority,
          ne = i.unstable_LowPriority,
          re = i.unstable_IdlePriority,
          ie = null,
          ae = null;
        var oe = Math.clz32
            ? Math.clz32
            : function (t) {
                return 0 === (t >>>= 0) ? 32 : (31 - ((le(t) / se) | 0)) | 0;
              },
          le = Math.log,
          se = Math.LN2;
        var ue = 64,
          ce = 4194304;
        function fe(t) {
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & t;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & t;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return t;
          }
        }
        function he(t, e) {
          var n = t.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = t.suspendedLanes,
            a = t.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~i;
            0 !== l ? (r = fe(l)) : 0 !== (a &= o) && (r = fe(a));
          } else 0 !== (o = n & ~i) ? (r = fe(o)) : 0 !== a && (r = fe(a));
          if (0 === r) return 0;
          if (
            0 !== e &&
            e !== r &&
            0 === (e & i) &&
            ((i = r & -r) >= (a = e & -e) || (16 === i && 0 !== (4194240 & a)))
          )
            return e;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (e = t.entangledLanes)))
            for (t = t.entanglements, e &= r; 0 < e; )
              (i = 1 << (n = 31 - oe(e))), (r |= t[n]), (e &= ~i);
          return r;
        }
        function de(t, e) {
          switch (t) {
            case 1:
            case 2:
            case 4:
              return e + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return e + 5e3;
            default:
              return -1;
          }
        }
        function pe(t) {
          return 0 !== (t = -1073741825 & t.pendingLanes)
            ? t
            : 1073741824 & t
            ? 1073741824
            : 0;
        }
        function ve() {
          var t = ue;
          return 0 === (4194240 & (ue <<= 1)) && (ue = 64), t;
        }
        function ge(t) {
          for (var e = [], n = 0; 31 > n; n++) e.push(t);
          return e;
        }
        function ye(t, e, n) {
          (t.pendingLanes |= e),
            536870912 !== e && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
            ((t = t.eventTimes)[(e = 31 - oe(e))] = n);
        }
        function me(t, e) {
          var n = (t.entangledLanes |= e);
          for (t = t.entanglements; n; ) {
            var r = 31 - oe(n),
              i = 1 << r;
            (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
          }
        }
        var be = 0;
        function xe(t) {
          return 1 < (t &= -t)
            ? 4 < t
              ? 0 !== (268435455 & t)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var ke,
          _e,
          we,
          Se,
          Me,
          Ee = !1,
          Pe = [],
          Ce = null,
          Oe = null,
          Ae = null,
          Te = new Map(),
          De = new Map(),
          Le = [],
          Re =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' '
            );
        function Ne(t, e) {
          switch (t) {
            case 'focusin':
            case 'focusout':
              Ce = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Oe = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Ae = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Te.delete(e.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              De.delete(e.pointerId);
          }
        }
        function Ie(t, e, n, r, i, a) {
          return null === t || t.nativeEvent !== a
            ? ((t = {
                blockedOn: e,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [i],
              }),
              null !== e && null !== (e = bi(e)) && _e(e),
              t)
            : ((t.eventSystemFlags |= r),
              (e = t.targetContainers),
              null !== i && -1 === e.indexOf(i) && e.push(i),
              t);
        }
        function ze(t) {
          var e = mi(t.target);
          if (null !== e) {
            var n = Wt(e);
            if (null !== n)
              if (13 === (e = n.tag)) {
                if (null !== (e = Ht(n)))
                  return (
                    (t.blockedOn = e),
                    void Me(t.priority, function () {
                      we(n);
                    })
                  );
              } else if (
                3 === e &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (t.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          t.blockedOn = null;
        }
        function je(t) {
          if (null !== t.blockedOn) return !1;
          for (var e = t.targetContainers; 0 < e.length; ) {
            var n = Qe(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
            if (null !== n)
              return null !== (e = bi(n)) && _e(e), (t.blockedOn = n), !1;
            var r = new (n = t.nativeEvent).constructor(n.type, n);
            (xt = r), n.target.dispatchEvent(r), (xt = null), e.shift();
          }
          return !0;
        }
        function Fe(t, e, n) {
          je(t) && n.delete(e);
        }
        function Ve() {
          (Ee = !1),
            null !== Ce && je(Ce) && (Ce = null),
            null !== Oe && je(Oe) && (Oe = null),
            null !== Ae && je(Ae) && (Ae = null),
            Te.forEach(Fe),
            De.forEach(Fe);
        }
        function Be(t, e) {
          t.blockedOn === e &&
            ((t.blockedOn = null),
            Ee ||
              ((Ee = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Ve)));
        }
        function We(t) {
          function e(e) {
            return Be(e, t);
          }
          if (0 < Pe.length) {
            Be(Pe[0], t);
            for (var n = 1; n < Pe.length; n++) {
              var r = Pe[n];
              r.blockedOn === t && (r.blockedOn = null);
            }
          }
          for (
            null !== Ce && Be(Ce, t),
              null !== Oe && Be(Oe, t),
              null !== Ae && Be(Ae, t),
              Te.forEach(e),
              De.forEach(e),
              n = 0;
            n < Le.length;
            n++
          )
            (r = Le[n]).blockedOn === t && (r.blockedOn = null);
          for (; 0 < Le.length && null === (n = Le[0]).blockedOn; )
            ze(n), null === n.blockedOn && Le.shift();
        }
        var He = x.ReactCurrentBatchConfig,
          Ue = !0;
        function Ye(t, e, n, r) {
          var i = be,
            a = He.transition;
          He.transition = null;
          try {
            (be = 1), Xe(t, e, n, r);
          } finally {
            (be = i), (He.transition = a);
          }
        }
        function $e(t, e, n, r) {
          var i = be,
            a = He.transition;
          He.transition = null;
          try {
            (be = 4), Xe(t, e, n, r);
          } finally {
            (be = i), (He.transition = a);
          }
        }
        function Xe(t, e, n, r) {
          if (Ue) {
            var i = Qe(t, e, n, r);
            if (null === i) Ur(t, e, r, Ge, n), Ne(t, r);
            else if (
              (function (t, e, n, r, i) {
                switch (e) {
                  case 'focusin':
                    return (Ce = Ie(Ce, t, e, n, r, i)), !0;
                  case 'dragenter':
                    return (Oe = Ie(Oe, t, e, n, r, i)), !0;
                  case 'mouseover':
                    return (Ae = Ie(Ae, t, e, n, r, i)), !0;
                  case 'pointerover':
                    var a = i.pointerId;
                    return Te.set(a, Ie(Te.get(a) || null, t, e, n, r, i)), !0;
                  case 'gotpointercapture':
                    return (
                      (a = i.pointerId),
                      De.set(a, Ie(De.get(a) || null, t, e, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, t, e, n, r)
            )
              r.stopPropagation();
            else if ((Ne(t, r), 4 & e && -1 < Re.indexOf(t))) {
              for (; null !== i; ) {
                var a = bi(i);
                if (
                  (null !== a && ke(a),
                  null === (a = Qe(t, e, n, r)) && Ur(t, e, r, Ge, n),
                  a === i)
                )
                  break;
                i = a;
              }
              null !== i && r.stopPropagation();
            } else Ur(t, e, r, null, n);
          }
        }
        var Ge = null;
        function Qe(t, e, n, r) {
          if (((Ge = null), null !== (t = mi((t = kt(r))))))
            if (null === (e = Wt(t))) t = null;
            else if (13 === (n = e.tag)) {
              if (null !== (t = Ht(e))) return t;
              t = null;
            } else if (3 === n) {
              if (e.stateNode.current.memoizedState.isDehydrated)
                return 3 === e.tag ? e.stateNode.containerInfo : null;
              t = null;
            } else e !== t && (t = null);
          return (Ge = t), null;
        }
        function qe(t) {
          switch (t) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Kt()) {
                case Jt:
                  return 1;
                case te:
                  return 4;
                case ee:
                case ne:
                  return 16;
                case re:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Ze = null,
          Ke = null,
          Je = null;
        function tn() {
          if (Je) return Je;
          var t,
            e,
            n = Ke,
            r = n.length,
            i = 'value' in Ze ? Ze.value : Ze.textContent,
            a = i.length;
          for (t = 0; t < r && n[t] === i[t]; t++);
          var o = r - t;
          for (e = 1; e <= o && n[r - e] === i[a - e]; e++);
          return (Je = i.slice(t, 1 < e ? 1 - e : void 0));
        }
        function en(t) {
          var e = t.keyCode;
          return (
            'charCode' in t
              ? 0 === (t = t.charCode) && 13 === e && (t = 13)
              : (t = e),
            10 === t && (t = 13),
            32 <= t || 13 === t ? t : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(t) {
          function e(e, n, r, i, a) {
            for (var o in ((this._reactName = e),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            t))
              t.hasOwnProperty(o) && ((e = t[o]), (this[o] = e ? e(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(e.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t &&
                  (t.preventDefault
                    ? t.preventDefault()
                    : 'unknown' !== typeof t.returnValue &&
                      (t.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var t = this.nativeEvent;
                t &&
                  (t.stopPropagation
                    ? t.stopPropagation()
                    : 'unknown' !== typeof t.cancelBubble &&
                      (t.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            e
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
              return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = z({}, un, { view: 0, detail: 0 }),
          hn = an(fn),
          dn = z({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Mn,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
              return void 0 === t.relatedTarget
                ? t.fromElement === t.srcElement
                  ? t.toElement
                  : t.fromElement
                : t.relatedTarget;
            },
            movementX: function (t) {
              return 'movementX' in t
                ? t.movementX
                : (t !== sn &&
                    (sn && 'mousemove' === t.type
                      ? ((on = t.screenX - sn.screenX),
                        (ln = t.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = t)),
                  on);
            },
            movementY: function (t) {
              return 'movementY' in t ? t.movementY : ln;
            },
          }),
          pn = an(dn),
          vn = an(z({}, dn, { dataTransfer: 0 })),
          gn = an(z({}, fn, { relatedTarget: 0 })),
          yn = an(
            z({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          mn = z({}, un, {
            clipboardData: function (t) {
              return 'clipboardData' in t
                ? t.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(mn),
          xn = an(z({}, un, { data: 0 })),
          kn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          _n = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          wn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function Sn(t) {
          var e = this.nativeEvent;
          return e.getModifierState
            ? e.getModifierState(t)
            : !!(t = wn[t]) && !!e[t];
        }
        function Mn() {
          return Sn;
        }
        var En = z({}, fn, {
            key: function (t) {
              if (t.key) {
                var e = kn[t.key] || t.key;
                if ('Unidentified' !== e) return e;
              }
              return 'keypress' === t.type
                ? 13 === (t = en(t))
                  ? 'Enter'
                  : String.fromCharCode(t)
                : 'keydown' === t.type || 'keyup' === t.type
                ? _n[t.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Mn,
            charCode: function (t) {
              return 'keypress' === t.type ? en(t) : 0;
            },
            keyCode: function (t) {
              return 'keydown' === t.type || 'keyup' === t.type ? t.keyCode : 0;
            },
            which: function (t) {
              return 'keypress' === t.type
                ? en(t)
                : 'keydown' === t.type || 'keyup' === t.type
                ? t.keyCode
                : 0;
            },
          }),
          Pn = an(En),
          Cn = an(
            z({}, dn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          On = an(
            z({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Mn,
            })
          ),
          An = an(
            z({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = z({}, dn, {
            deltaX: function (t) {
              return 'deltaX' in t
                ? t.deltaX
                : 'wheelDeltaX' in t
                ? -t.wheelDeltaX
                : 0;
            },
            deltaY: function (t) {
              return 'deltaY' in t
                ? t.deltaY
                : 'wheelDeltaY' in t
                ? -t.wheelDeltaY
                : 'wheelDelta' in t
                ? -t.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Dn = an(Tn),
          Ln = [9, 13, 27, 32],
          Rn = c && 'CompositionEvent' in window,
          Nn = null;
        c && 'documentMode' in document && (Nn = document.documentMode);
        var In = c && 'TextEvent' in window && !Nn,
          zn = c && (!Rn || (Nn && 8 < Nn && 11 >= Nn)),
          jn = String.fromCharCode(32),
          Fn = !1;
        function Vn(t, e) {
          switch (t) {
            case 'keyup':
              return -1 !== Ln.indexOf(e.keyCode);
            case 'keydown':
              return 229 !== e.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Bn(t) {
          return 'object' === typeof (t = t.detail) && 'data' in t
            ? t.data
            : null;
        }
        var Wn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Un(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return 'input' === e ? !!Hn[t.type] : 'textarea' === e;
        }
        function Yn(t, e, n, r) {
          Et(r),
            0 < (e = $r(e, 'onChange')).length &&
              ((n = new cn('onChange', 'change', null, n, r)),
              t.push({ event: n, listeners: e }));
        }
        var $n = null,
          Xn = null;
        function Gn(t) {
          jr(t, 0);
        }
        function Qn(t) {
          if (X(xi(t))) return t;
        }
        function qn(t, e) {
          if ('change' === t) return e;
        }
        var Zn = !1;
        if (c) {
          var Kn;
          if (c) {
            var Jn = 'oninput' in document;
            if (!Jn) {
              var tr = document.createElement('div');
              tr.setAttribute('oninput', 'return;'),
                (Jn = 'function' === typeof tr.oninput);
            }
            Kn = Jn;
          } else Kn = !1;
          Zn = Kn && (!document.documentMode || 9 < document.documentMode);
        }
        function er() {
          $n && ($n.detachEvent('onpropertychange', nr), (Xn = $n = null));
        }
        function nr(t) {
          if ('value' === t.propertyName && Qn(Xn)) {
            var e = [];
            Yn(e, Xn, t, kt(t)), Tt(Gn, e);
          }
        }
        function rr(t, e, n) {
          'focusin' === t
            ? (er(), (Xn = n), ($n = e).attachEvent('onpropertychange', nr))
            : 'focusout' === t && er();
        }
        function ir(t) {
          if ('selectionchange' === t || 'keyup' === t || 'keydown' === t)
            return Qn(Xn);
        }
        function ar(t, e) {
          if ('click' === t) return Qn(e);
        }
        function or(t, e) {
          if ('input' === t || 'change' === t) return Qn(e);
        }
        var lr =
          'function' === typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t === 1 / e)) ||
                  (t !== t && e !== e)
                );
              };
        function sr(t, e) {
          if (lr(t, e)) return !0;
          if (
            'object' !== typeof t ||
            null === t ||
            'object' !== typeof e ||
            null === e
          )
            return !1;
          var n = Object.keys(t),
            r = Object.keys(e);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!f.call(e, i) || !lr(t[i], e[i])) return !1;
          }
          return !0;
        }
        function ur(t) {
          for (; t && t.firstChild; ) t = t.firstChild;
          return t;
        }
        function cr(t, e) {
          var n,
            r = ur(t);
          for (t = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = t + r.textContent.length), t <= e && n >= e))
                return { node: r, offset: e - t };
              t = n;
            }
            t: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break t;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(t, e) {
          return (
            !(!t || !e) &&
            (t === e ||
              ((!t || 3 !== t.nodeType) &&
                (e && 3 === e.nodeType
                  ? fr(t, e.parentNode)
                  : 'contains' in t
                  ? t.contains(e)
                  : !!t.compareDocumentPosition &&
                    !!(16 & t.compareDocumentPosition(e)))))
          );
        }
        function hr() {
          for (var t = window, e = G(); e instanceof t.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof e.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            e = G((t = e.contentWindow).document);
          }
          return e;
        }
        function dr(t) {
          var e = t && t.nodeName && t.nodeName.toLowerCase();
          return (
            e &&
            (('input' === e &&
              ('text' === t.type ||
                'search' === t.type ||
                'tel' === t.type ||
                'url' === t.type ||
                'password' === t.type)) ||
              'textarea' === e ||
              'true' === t.contentEditable)
          );
        }
        function pr(t) {
          var e = hr(),
            n = t.focusedElem,
            r = t.selectionRange;
          if (
            e !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && dr(n))
              if (
                ((e = r.start),
                void 0 === (t = r.end) && (t = e),
                'selectionStart' in n)
              )
                (n.selectionStart = e),
                  (n.selectionEnd = Math.min(t, n.value.length));
              else if (
                (t =
                  ((e = n.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                t = t.getSelection();
                var i = n.textContent.length,
                  a = Math.min(r.start, i);
                (r = void 0 === r.end ? a : Math.min(r.end, i)),
                  !t.extend && a > r && ((i = r), (r = a), (a = i)),
                  (i = cr(n, a));
                var o = cr(n, r);
                i &&
                  o &&
                  (1 !== t.rangeCount ||
                    t.anchorNode !== i.node ||
                    t.anchorOffset !== i.offset ||
                    t.focusNode !== o.node ||
                    t.focusOffset !== o.offset) &&
                  ((e = e.createRange()).setStart(i.node, i.offset),
                  t.removeAllRanges(),
                  a > r
                    ? (t.addRange(e), t.extend(o.node, o.offset))
                    : (e.setEnd(o.node, o.offset), t.addRange(e)));
              }
            for (e = [], t = n; (t = t.parentNode); )
              1 === t.nodeType &&
                e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
            for (
              'function' === typeof n.focus && n.focus(), n = 0;
              n < e.length;
              n++
            )
              ((t = e[n]).element.scrollLeft = t.left),
                (t.element.scrollTop = t.top);
          }
        }
        var vr = c && 'documentMode' in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          mr = null,
          br = !1;
        function xr(t, e, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== G(r) ||
            ('selectionStart' in (r = gr) && dr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (mr && sr(mr, r)) ||
              ((mr = r),
              0 < (r = $r(yr, 'onSelect')).length &&
                ((e = new cn('onSelect', 'select', null, e, n)),
                t.push({ event: e, listeners: r }),
                (e.target = gr))));
        }
        function kr(t, e) {
          var n = {};
          return (
            (n[t.toLowerCase()] = e.toLowerCase()),
            (n['Webkit' + t] = 'webkit' + e),
            (n['Moz' + t] = 'moz' + e),
            n
          );
        }
        var _r = {
            animationend: kr('Animation', 'AnimationEnd'),
            animationiteration: kr('Animation', 'AnimationIteration'),
            animationstart: kr('Animation', 'AnimationStart'),
            transitionend: kr('Transition', 'TransitionEnd'),
          },
          wr = {},
          Sr = {};
        function Mr(t) {
          if (wr[t]) return wr[t];
          if (!_r[t]) return t;
          var e,
            n = _r[t];
          for (e in n)
            if (n.hasOwnProperty(e) && e in Sr) return (wr[t] = n[e]);
          return t;
        }
        c &&
          ((Sr = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          'TransitionEvent' in window || delete _r.transitionend.transition);
        var Er = Mr('animationend'),
          Pr = Mr('animationiteration'),
          Cr = Mr('animationstart'),
          Or = Mr('transitionend'),
          Ar = new Map(),
          Tr =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' '
            );
        function Dr(t, e) {
          Ar.set(t, e), s(e, [t]);
        }
        for (var Lr = 0; Lr < Tr.length; Lr++) {
          var Rr = Tr[Lr];
          Dr(Rr.toLowerCase(), 'on' + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Dr(Er, 'onAnimationEnd'),
          Dr(Pr, 'onAnimationIteration'),
          Dr(Cr, 'onAnimationStart'),
          Dr('dblclick', 'onDoubleClick'),
          Dr('focusin', 'onFocus'),
          Dr('focusout', 'onBlur'),
          Dr(Or, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' '
            )
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' '
            )
          ),
          s('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' '
            )
          );
        var Nr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' '
            ),
          Ir = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Nr)
          );
        function zr(t, e, n) {
          var r = t.type || 'unknown-event';
          (t.currentTarget = n),
            (function (t, e, n, r, i, o, l, s, u) {
              if ((Bt.apply(this, arguments), It)) {
                if (!It) throw Error(a(198));
                var c = zt;
                (It = !1), (zt = null), jt || ((jt = !0), (Ft = c));
              }
            })(r, e, void 0, t),
            (t.currentTarget = null);
        }
        function jr(t, e) {
          e = 0 !== (4 & e);
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
              i = r.event;
            r = r.listeners;
            t: {
              var a = void 0;
              if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && i.isPropagationStopped()))
                    break t;
                  zr(i, l, u), (a = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && i.isPropagationStopped())
                  )
                    break t;
                  zr(i, l, u), (a = s);
                }
            }
          }
          if (jt) throw ((t = Ft), (jt = !1), (Ft = null), t);
        }
        function Fr(t, e) {
          var n = e[vi];
          void 0 === n && (n = e[vi] = new Set());
          var r = t + '__bubble';
          n.has(r) || (Hr(e, t, 2, !1), n.add(r));
        }
        function Vr(t, e, n) {
          var r = 0;
          e && (r |= 4), Hr(n, t, r, e);
        }
        var Br = '_reactListening' + Math.random().toString(36).slice(2);
        function Wr(t) {
          if (!t[Br]) {
            (t[Br] = !0),
              o.forEach(function (e) {
                'selectionchange' !== e &&
                  (Ir.has(e) || Vr(e, !1, t), Vr(e, !0, t));
              });
            var e = 9 === t.nodeType ? t : t.ownerDocument;
            null === e || e[Br] || ((e[Br] = !0), Vr('selectionchange', !1, e));
          }
        }
        function Hr(t, e, n, r) {
          switch (qe(e)) {
            case 1:
              var i = Ye;
              break;
            case 4:
              i = $e;
              break;
            default:
              i = Xe;
          }
          (n = i.bind(null, e, n, t)),
            (i = void 0),
            !Lt ||
              ('touchstart' !== e && 'touchmove' !== e && 'wheel' !== e) ||
              (i = !0),
            r
              ? void 0 !== i
                ? t.addEventListener(e, n, { capture: !0, passive: i })
                : t.addEventListener(e, n, !0)
              : void 0 !== i
              ? t.addEventListener(e, n, { passive: i })
              : t.addEventListener(e, n, !1);
        }
        function Ur(t, e, n, r, i) {
          var a = r;
          if (0 === (1 & e) && 0 === (2 & e) && null !== r)
            t: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === i ||
                        (8 === s.nodeType && s.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = mi(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = a = o;
                    continue t;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Tt(function () {
            var r = a,
              i = kt(n),
              o = [];
            t: {
              var l = Ar.get(t);
              if (void 0 !== l) {
                var s = cn,
                  u = t;
                switch (t) {
                  case 'keypress':
                    if (0 === en(n)) break t;
                  case 'keydown':
                  case 'keyup':
                    s = Pn;
                    break;
                  case 'focusin':
                    (u = 'focus'), (s = gn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (s = gn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = gn;
                    break;
                  case 'click':
                    if (2 === n.button) break t;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = pn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = vn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = On;
                    break;
                  case Er:
                  case Pr:
                  case Cr:
                    s = yn;
                    break;
                  case Or:
                    s = An;
                    break;
                  case 'scroll':
                    s = hn;
                    break;
                  case 'wheel':
                    s = Dn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = bn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = Cn;
                }
                var c = 0 !== (4 & e),
                  f = !c && 'scroll' === t,
                  h = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var d, p = r; null !== p; ) {
                  var v = (d = p).stateNode;
                  if (
                    (5 === d.tag &&
                      null !== v &&
                      ((d = v),
                      null !== h &&
                        null != (v = Dt(p, h)) &&
                        c.push(Yr(p, v, d))),
                    f)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, i)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & e)) {
              if (
                ((s = 'mouseout' === t || 'pointerout' === t),
                (!(l = 'mouseover' === t || 'pointerover' === t) ||
                  n === xt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!mi(u) && !u[pi])) &&
                  (s || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? mi(u)
                          : null) &&
                        (u !== (f = Wt(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = pn),
                  (v = 'onMouseLeave'),
                  (h = 'onMouseEnter'),
                  (p = 'mouse'),
                  ('pointerout' !== t && 'pointerover' !== t) ||
                    ((c = Cn),
                    (v = 'onPointerLeave'),
                    (h = 'onPointerEnter'),
                    (p = 'pointer')),
                  (f = null == s ? l : xi(s)),
                  (d = null == u ? l : xi(u)),
                  ((l = new c(v, p + 'leave', s, n, i)).target = f),
                  (l.relatedTarget = d),
                  (v = null),
                  mi(i) === r &&
                    (((c = new c(h, p + 'enter', u, n, i)).target = d),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && u)
                )
                  t: {
                    for (h = u, p = 0, d = c = s; d; d = Xr(d)) p++;
                    for (d = 0, v = h; v; v = Xr(v)) d++;
                    for (; 0 < p - d; ) (c = Xr(c)), p--;
                    for (; 0 < d - p; ) (h = Xr(h)), d--;
                    for (; p--; ) {
                      if (c === h || (null !== h && c === h.alternate)) break t;
                      (c = Xr(c)), (h = Xr(h));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Gr(o, l, s, c, !1),
                  null !== u && null !== f && Gr(o, f, u, c, !0);
              }
              if (
                'select' ===
                  (s =
                    (l = r ? xi(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === l.type)
              )
                var g = qn;
              else if (Un(l))
                if (Zn) g = or;
                else {
                  g = ir;
                  var y = rr;
                }
              else
                (s = l.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (g = ar);
              switch (
                (g && (g = g(t, r))
                  ? Yn(o, g, n, i)
                  : (y && y(t, l, r),
                    'focusout' === t &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      'number' === l.type &&
                      tt(l, 'number', l.value)),
                (y = r ? xi(r) : window),
                t)
              ) {
                case 'focusin':
                  (Un(y) || 'true' === y.contentEditable) &&
                    ((gr = y), (yr = r), (mr = null));
                  break;
                case 'focusout':
                  mr = yr = gr = null;
                  break;
                case 'mousedown':
                  br = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (br = !1), xr(o, n, i);
                  break;
                case 'selectionchange':
                  if (vr) break;
                case 'keydown':
                case 'keyup':
                  xr(o, n, i);
              }
              var m;
              if (Rn)
                t: {
                  switch (t) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break t;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break t;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break t;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Vn(t, n) && (b = 'onCompositionEnd')
                  : 'keydown' === t &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart');
              b &&
                (zn &&
                  'ko' !== n.locale &&
                  (Wn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Wn && (m = tn())
                    : ((Ke = 'value' in (Ze = i) ? Ze.value : Ze.textContent),
                      (Wn = !0))),
                0 < (y = $r(r, b)).length &&
                  ((b = new xn(b, t, null, n, i)),
                  o.push({ event: b, listeners: y }),
                  m ? (b.data = m) : null !== (m = Bn(n)) && (b.data = m))),
                (m = In
                  ? (function (t, e) {
                      switch (t) {
                        case 'compositionend':
                          return Bn(e);
                        case 'keypress':
                          return 32 !== e.which ? null : ((Fn = !0), jn);
                        case 'textInput':
                          return (t = e.data) === jn && Fn ? null : t;
                        default:
                          return null;
                      }
                    })(t, n)
                  : (function (t, e) {
                      if (Wn)
                        return 'compositionend' === t || (!Rn && Vn(t, e))
                          ? ((t = tn()), (Je = Ke = Ze = null), (Wn = !1), t)
                          : null;
                      switch (t) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(e.ctrlKey || e.altKey || e.metaKey) ||
                            (e.ctrlKey && e.altKey)
                          ) {
                            if (e.char && 1 < e.char.length) return e.char;
                            if (e.which) return String.fromCharCode(e.which);
                          }
                          return null;
                        case 'compositionend':
                          return zn && 'ko' !== e.locale ? null : e.data;
                      }
                    })(t, n)) &&
                  0 < (r = $r(r, 'onBeforeInput')).length &&
                  ((i = new xn('onBeforeInput', 'beforeinput', null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = m));
            }
            jr(o, e);
          });
        }
        function Yr(t, e, n) {
          return { instance: t, listener: e, currentTarget: n };
        }
        function $r(t, e) {
          for (var n = e + 'Capture', r = []; null !== t; ) {
            var i = t,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Dt(t, n)) && r.unshift(Yr(t, a, i)),
              null != (a = Dt(t, e)) && r.push(Yr(t, a, i))),
              (t = t.return);
          }
          return r;
        }
        function Xr(t) {
          if (null === t) return null;
          do {
            t = t.return;
          } while (t && 5 !== t.tag);
          return t || null;
        }
        function Gr(t, e, n, r, i) {
          for (var a = e._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              i
                ? null != (s = Dt(n, a)) && o.unshift(Yr(n, s, l))
                : i || (null != (s = Dt(n, a)) && o.push(Yr(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && t.push({ event: e, listeners: o });
        }
        var Qr = /\r\n?/g,
          qr = /\u0000|\uFFFD/g;
        function Zr(t) {
          return ('string' === typeof t ? t : '' + t)
            .replace(Qr, '\n')
            .replace(qr, '');
        }
        function Kr(t, e, n) {
          if (((e = Zr(e)), Zr(t) !== e && n)) throw Error(a(425));
        }
        function Jr() {}
        var ti = null,
          ei = null;
        function ni(t, e) {
          return (
            'textarea' === t ||
            'noscript' === t ||
            'string' === typeof e.children ||
            'number' === typeof e.children ||
            ('object' === typeof e.dangerouslySetInnerHTML &&
              null !== e.dangerouslySetInnerHTML &&
              null != e.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = 'function' === typeof setTimeout ? setTimeout : void 0,
          ii = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          ai = 'function' === typeof Promise ? Promise : void 0,
          oi =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ai
              ? function (t) {
                  return ai.resolve(null).then(t).catch(li);
                }
              : ri;
        function li(t) {
          setTimeout(function () {
            throw t;
          });
        }
        function si(t, e) {
          var n = e,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((t.removeChild(n), i && 8 === i.nodeType))
              if ('/$' === (n = i.data)) {
                if (0 === r) return t.removeChild(i), void We(e);
                r--;
              } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
            n = i;
          } while (n);
          We(e);
        }
        function ui(t) {
          for (; null != t; t = t.nextSibling) {
            var e = t.nodeType;
            if (1 === e || 3 === e) break;
            if (8 === e) {
              if ('$' === (e = t.data) || '$!' === e || '$?' === e) break;
              if ('/$' === e) return null;
            }
          }
          return t;
        }
        function ci(t) {
          t = t.previousSibling;
          for (var e = 0; t; ) {
            if (8 === t.nodeType) {
              var n = t.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === e) return t;
                e--;
              } else '/$' === n && e++;
            }
            t = t.previousSibling;
          }
          return null;
        }
        var fi = Math.random().toString(36).slice(2),
          hi = '__reactFiber$' + fi,
          di = '__reactProps$' + fi,
          pi = '__reactContainer$' + fi,
          vi = '__reactEvents$' + fi,
          gi = '__reactListeners$' + fi,
          yi = '__reactHandles$' + fi;
        function mi(t) {
          var e = t[hi];
          if (e) return e;
          for (var n = t.parentNode; n; ) {
            if ((e = n[pi] || n[hi])) {
              if (
                ((n = e.alternate),
                null !== e.child || (null !== n && null !== n.child))
              )
                for (t = ci(t); null !== t; ) {
                  if ((n = t[hi])) return n;
                  t = ci(t);
                }
              return e;
            }
            n = (t = n).parentNode;
          }
          return null;
        }
        function bi(t) {
          return !(t = t[hi] || t[pi]) ||
            (5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag)
            ? null
            : t;
        }
        function xi(t) {
          if (5 === t.tag || 6 === t.tag) return t.stateNode;
          throw Error(a(33));
        }
        function ki(t) {
          return t[di] || null;
        }
        var _i = [],
          wi = -1;
        function Si(t) {
          return { current: t };
        }
        function Mi(t) {
          0 > wi || ((t.current = _i[wi]), (_i[wi] = null), wi--);
        }
        function Ei(t, e) {
          wi++, (_i[wi] = t.current), (t.current = e);
        }
        var Pi = {},
          Ci = Si(Pi),
          Oi = Si(!1),
          Ai = Pi;
        function Ti(t, e) {
          var n = t.type.contextTypes;
          if (!n) return Pi;
          var r = t.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = e[i];
          return (
            r &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                e),
              (t.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Di(t) {
          return null !== (t = t.childContextTypes) && void 0 !== t;
        }
        function Li() {
          Mi(Oi), Mi(Ci);
        }
        function Ri(t, e, n) {
          if (Ci.current !== Pi) throw Error(a(168));
          Ei(Ci, e), Ei(Oi, n);
        }
        function Ni(t, e, n) {
          var r = t.stateNode;
          if (
            ((e = e.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in e)) throw Error(a(108, H(t) || 'Unknown', i));
          return z({}, n, r);
        }
        function Ii(t) {
          return (
            (t =
              ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
              Pi),
            (Ai = Ci.current),
            Ei(Ci, t),
            Ei(Oi, Oi.current),
            !0
          );
        }
        function zi(t, e, n) {
          var r = t.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((t = Ni(t, e, Ai)),
              (r.__reactInternalMemoizedMergedChildContext = t),
              Mi(Oi),
              Mi(Ci),
              Ei(Ci, t))
            : Mi(Oi),
            Ei(Oi, n);
        }
        var ji = null,
          Fi = !1,
          Vi = !1;
        function Bi(t) {
          null === ji ? (ji = [t]) : ji.push(t);
        }
        function Wi() {
          if (!Vi && null !== ji) {
            Vi = !0;
            var t = 0,
              e = be;
            try {
              var n = ji;
              for (be = 1; t < n.length; t++) {
                var r = n[t];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (ji = null), (Fi = !1);
            } catch (i) {
              throw (null !== ji && (ji = ji.slice(t + 1)), Xt(Jt, Wi), i);
            } finally {
              (be = e), (Vi = !1);
            }
          }
          return null;
        }
        var Hi = [],
          Ui = 0,
          Yi = null,
          $i = 0,
          Xi = [],
          Gi = 0,
          Qi = null,
          qi = 1,
          Zi = '';
        function Ki(t, e) {
          (Hi[Ui++] = $i), (Hi[Ui++] = Yi), (Yi = t), ($i = e);
        }
        function Ji(t, e, n) {
          (Xi[Gi++] = qi), (Xi[Gi++] = Zi), (Xi[Gi++] = Qi), (Qi = t);
          var r = qi;
          t = Zi;
          var i = 32 - oe(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var a = 32 - oe(e) + i;
          if (30 < a) {
            var o = i - (i % 5);
            (a = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (i -= o),
              (qi = (1 << (32 - oe(e) + i)) | (n << i) | r),
              (Zi = a + t);
          } else (qi = (1 << a) | (n << i) | r), (Zi = t);
        }
        function ta(t) {
          null !== t.return && (Ki(t, 1), Ji(t, 1, 0));
        }
        function ea(t) {
          for (; t === Yi; )
            (Yi = Hi[--Ui]), (Hi[Ui] = null), ($i = Hi[--Ui]), (Hi[Ui] = null);
          for (; t === Qi; )
            (Qi = Xi[--Gi]),
              (Xi[Gi] = null),
              (Zi = Xi[--Gi]),
              (Xi[Gi] = null),
              (qi = Xi[--Gi]),
              (Xi[Gi] = null);
        }
        var na = null,
          ra = null,
          ia = !1,
          aa = null;
        function oa(t, e) {
          var n = Tu(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.stateNode = e),
            (n.return = t),
            null === (e = t.deletions)
              ? ((t.deletions = [n]), (t.flags |= 16))
              : e.push(n);
        }
        function la(t, e) {
          switch (t.tag) {
            case 5:
              var n = t.type;
              return (
                null !==
                  (e =
                    1 !== e.nodeType ||
                    n.toLowerCase() !== e.nodeName.toLowerCase()
                      ? null
                      : e) &&
                ((t.stateNode = e), (na = t), (ra = ui(e.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (e = '' === t.pendingProps || 3 !== e.nodeType ? null : e) &&
                ((t.stateNode = e), (na = t), (ra = null), !0)
              );
            case 13:
              return (
                null !== (e = 8 !== e.nodeType ? null : e) &&
                ((n = null !== Qi ? { id: qi, overflow: Zi } : null),
                (t.memoizedState = {
                  dehydrated: e,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Tu(18, null, null, 0)).stateNode = e),
                (n.return = t),
                (t.child = n),
                (na = t),
                (ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sa(t) {
          return 0 !== (1 & t.mode) && 0 === (128 & t.flags);
        }
        function ua(t) {
          if (ia) {
            var e = ra;
            if (e) {
              var n = e;
              if (!la(t, e)) {
                if (sa(t)) throw Error(a(418));
                e = ui(n.nextSibling);
                var r = na;
                e && la(t, e)
                  ? oa(r, n)
                  : ((t.flags = (-4097 & t.flags) | 2), (ia = !1), (na = t));
              }
            } else {
              if (sa(t)) throw Error(a(418));
              (t.flags = (-4097 & t.flags) | 2), (ia = !1), (na = t);
            }
          }
        }
        function ca(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

          )
            t = t.return;
          na = t;
        }
        function fa(t) {
          if (t !== na) return !1;
          if (!ia) return ca(t), (ia = !0), !1;
          var e;
          if (
            ((e = 3 !== t.tag) &&
              !(e = 5 !== t.tag) &&
              (e =
                'head' !== (e = t.type) &&
                'body' !== e &&
                !ni(t.type, t.memoizedProps)),
            e && (e = ra))
          ) {
            if (sa(t)) throw (ha(), Error(a(418)));
            for (; e; ) oa(t, e), (e = ui(e.nextSibling));
          }
          if ((ca(t), 13 === t.tag)) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
              throw Error(a(317));
            t: {
              for (t = t.nextSibling, e = 0; t; ) {
                if (8 === t.nodeType) {
                  var n = t.data;
                  if ('/$' === n) {
                    if (0 === e) {
                      ra = ui(t.nextSibling);
                      break t;
                    }
                    e--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || e++;
                }
                t = t.nextSibling;
              }
              ra = null;
            }
          } else ra = na ? ui(t.stateNode.nextSibling) : null;
          return !0;
        }
        function ha() {
          for (var t = ra; t; ) t = ui(t.nextSibling);
        }
        function da() {
          (ra = na = null), (ia = !1);
        }
        function pa(t) {
          null === aa ? (aa = [t]) : aa.push(t);
        }
        var va = x.ReactCurrentBatchConfig;
        function ga(t, e) {
          if (t && t.defaultProps) {
            for (var n in ((e = z({}, e)), (t = t.defaultProps)))
              void 0 === e[n] && (e[n] = t[n]);
            return e;
          }
          return e;
        }
        var ya = Si(null),
          ma = null,
          ba = null,
          xa = null;
        function ka() {
          xa = ba = ma = null;
        }
        function _a(t) {
          var e = ya.current;
          Mi(ya), (t._currentValue = e);
        }
        function wa(t, e, n) {
          for (; null !== t; ) {
            var r = t.alternate;
            if (
              ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), null !== r && (r.childLanes |= e))
                : null !== r && (r.childLanes & e) !== e && (r.childLanes |= e),
              t === n)
            )
              break;
            t = t.return;
          }
        }
        function Sa(t, e) {
          (ma = t),
            (xa = ba = null),
            null !== (t = t.dependencies) &&
              null !== t.firstContext &&
              (0 !== (t.lanes & e) && (xl = !0), (t.firstContext = null));
        }
        function Ma(t) {
          var e = t._currentValue;
          if (xa !== t)
            if (
              ((t = { context: t, memoizedValue: e, next: null }), null === ba)
            ) {
              if (null === ma) throw Error(a(308));
              (ba = t), (ma.dependencies = { lanes: 0, firstContext: t });
            } else ba = ba.next = t;
          return e;
        }
        var Ea = null;
        function Pa(t) {
          null === Ea ? (Ea = [t]) : Ea.push(t);
        }
        function Ca(t, e, n, r) {
          var i = e.interleaved;
          return (
            null === i
              ? ((n.next = n), Pa(e))
              : ((n.next = i.next), (i.next = n)),
            (e.interleaved = n),
            Oa(t, r)
          );
        }
        function Oa(t, e) {
          t.lanes |= e;
          var n = t.alternate;
          for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t; )
            (t.childLanes |= e),
              null !== (n = t.alternate) && (n.childLanes |= e),
              (n = t),
              (t = t.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Aa = !1;
        function Ta(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Da(t, e) {
          (t = t.updateQueue),
            e.updateQueue === t &&
              (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
              });
        }
        function La(t, e) {
          return {
            eventTime: t,
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ra(t, e, n) {
          var r = t.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Cs))) {
            var i = r.pending;
            return (
              null === i ? (e.next = e) : ((e.next = i.next), (i.next = e)),
              (r.pending = e),
              Oa(t, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((e.next = e), Pa(r))
              : ((e.next = i.next), (i.next = e)),
            (r.interleaved = e),
            Oa(t, n)
          );
        }
        function Na(t, e, n) {
          if (
            null !== (e = e.updateQueue) &&
            ((e = e.shared), 0 !== (4194240 & n))
          ) {
            var r = e.lanes;
            (n |= r &= t.pendingLanes), (e.lanes = n), me(t, n);
          }
        }
        function Ia(t, e) {
          var n = t.updateQueue,
            r = t.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = e) : (a = a.next = e);
            } else i = a = e;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (t.updateQueue = n)
            );
          }
          null === (t = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = e)
            : (t.next = e),
            (n.lastBaseUpdate = e);
        }
        function za(t, e, n, r) {
          var i = t.updateQueue;
          Aa = !1;
          var a = i.firstBaseUpdate,
            o = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === o ? (a = u) : (o.next = u), (o = s);
            var c = t.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var f = i.baseState;
            for (o = 0, c = u = s = null, l = a; ; ) {
              var h = l.lane,
                d = l.eventTime;
              if ((r & h) === h) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: d,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                t: {
                  var p = t,
                    v = l;
                  switch (((h = e), (d = n), v.tag)) {
                    case 1:
                      if ('function' === typeof (p = v.payload)) {
                        f = p.call(d, f, h);
                        break t;
                      }
                      f = p;
                      break t;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (h =
                            'function' === typeof (p = v.payload)
                              ? p.call(d, f, h)
                              : p) ||
                        void 0 === h
                      )
                        break t;
                      f = z({}, f, h);
                      break t;
                    case 2:
                      Aa = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((t.flags |= 64),
                  null === (h = i.effects) ? (i.effects = [l]) : h.push(l));
              } else
                (d = {
                  eventTime: d,
                  lane: h,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = d), (s = f)) : (c = c.next = d),
                  (o |= h);
              if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                (l = (h = l).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (i.baseState = s),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (e = i.shared.interleaved))
            ) {
              i = e;
              do {
                (o |= i.lane), (i = i.next);
              } while (i !== e);
            } else null === a && (i.shared.lanes = 0);
            (Is |= o), (t.lanes = o), (t.memoizedState = f);
          }
        }
        function ja(t, e, n) {
          if (((t = e.effects), (e.effects = null), null !== t))
            for (e = 0; e < t.length; e++) {
              var r = t[e],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), 'function' !== typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var Fa = new r.Component().refs;
        function Va(t, e, n, r) {
          (n =
            null === (n = n(r, (e = t.memoizedState))) || void 0 === n
              ? e
              : z({}, e, n)),
            (t.memoizedState = n),
            0 === t.lanes && (t.updateQueue.baseState = n);
        }
        var Ba = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && Wt(t) === t;
          },
          enqueueSetState: function (t, e, n) {
            t = t._reactInternals;
            var r = tu(),
              i = eu(t),
              a = La(r, i);
            (a.payload = e),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (e = Ra(t, a, i)) && (nu(e, t, i, r), Na(e, t, i));
          },
          enqueueReplaceState: function (t, e, n) {
            t = t._reactInternals;
            var r = tu(),
              i = eu(t),
              a = La(r, i);
            (a.tag = 1),
              (a.payload = e),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (e = Ra(t, a, i)) && (nu(e, t, i, r), Na(e, t, i));
          },
          enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var n = tu(),
              r = eu(t),
              i = La(n, r);
            (i.tag = 2),
              void 0 !== e && null !== e && (i.callback = e),
              null !== (e = Ra(t, i, r)) && (nu(e, t, r, n), Na(e, t, r));
          },
        };
        function Wa(t, e, n, r, i, a, o) {
          return 'function' === typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(r, a, o)
            : !e.prototype ||
                !e.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(i, a);
        }
        function Ha(t, e, n) {
          var r = !1,
            i = Pi,
            a = e.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = Ma(a))
              : ((i = Di(e) ? Ai : Ci.current),
                (a = (r = null !== (r = e.contextTypes) && void 0 !== r)
                  ? Ti(t, i)
                  : Pi)),
            (e = new e(n, a)),
            (t.memoizedState =
              null !== e.state && void 0 !== e.state ? e.state : null),
            (e.updater = Ba),
            (t.stateNode = e),
            (e._reactInternals = t),
            r &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (t.__reactInternalMemoizedMaskedChildContext = a)),
            e
          );
        }
        function Ua(t, e, n, r) {
          (t = e.state),
            'function' === typeof e.componentWillReceiveProps &&
              e.componentWillReceiveProps(n, r),
            'function' === typeof e.UNSAFE_componentWillReceiveProps &&
              e.UNSAFE_componentWillReceiveProps(n, r),
            e.state !== t && Ba.enqueueReplaceState(e, e.state, null);
        }
        function Ya(t, e, n, r) {
          var i = t.stateNode;
          (i.props = n), (i.state = t.memoizedState), (i.refs = Fa), Ta(t);
          var a = e.contextType;
          'object' === typeof a && null !== a
            ? (i.context = Ma(a))
            : ((a = Di(e) ? Ai : Ci.current), (i.context = Ti(t, a))),
            (i.state = t.memoizedState),
            'function' === typeof (a = e.getDerivedStateFromProps) &&
              (Va(t, e, a, n), (i.state = t.memoizedState)),
            'function' === typeof e.getDerivedStateFromProps ||
              'function' === typeof i.getSnapshotBeforeUpdate ||
              ('function' !== typeof i.UNSAFE_componentWillMount &&
                'function' !== typeof i.componentWillMount) ||
              ((e = i.state),
              'function' === typeof i.componentWillMount &&
                i.componentWillMount(),
              'function' === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              e !== i.state && Ba.enqueueReplaceState(i, i.state, null),
              za(t, n, i, r),
              (i.state = t.memoizedState)),
            'function' === typeof i.componentDidMount && (t.flags |= 4194308);
        }
        function $a(t, e, n) {
          if (
            null !== (t = n.ref) &&
            'function' !== typeof t &&
            'object' !== typeof t
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, t));
              var i = r,
                o = '' + t;
              return null !== e &&
                null !== e.ref &&
                'function' === typeof e.ref &&
                e.ref._stringRef === o
                ? e.ref
                : ((e = function (t) {
                    var e = i.refs;
                    e === Fa && (e = i.refs = {}),
                      null === t ? delete e[o] : (e[o] = t);
                  }),
                  (e._stringRef = o),
                  e);
            }
            if ('string' !== typeof t) throw Error(a(284));
            if (!n._owner) throw Error(a(290, t));
          }
          return t;
        }
        function Xa(t, e) {
          throw (
            ((t = Object.prototype.toString.call(e)),
            Error(
              a(
                31,
                '[object Object]' === t
                  ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                  : t
              )
            ))
          );
        }
        function Ga(t) {
          return (0, t._init)(t._payload);
        }
        function Qa(t) {
          function e(e, n) {
            if (t) {
              var r = e.deletions;
              null === r ? ((e.deletions = [n]), (e.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!t) return null;
            for (; null !== r; ) e(n, r), (r = r.sibling);
            return null;
          }
          function r(t, e) {
            for (t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function i(t, e) {
            return ((t = Lu(t, e)).index = 0), (t.sibling = null), t;
          }
          function o(e, n, r) {
            return (
              (e.index = r),
              t
                ? null !== (r = e.alternate)
                  ? (r = r.index) < n
                    ? ((e.flags |= 2), n)
                    : r
                  : ((e.flags |= 2), n)
                : ((e.flags |= 1048576), n)
            );
          }
          function l(e) {
            return t && null === e.alternate && (e.flags |= 2), e;
          }
          function s(t, e, n, r) {
            return null === e || 6 !== e.tag
              ? (((e = zu(n, t.mode, r)).return = t), e)
              : (((e = i(e, n)).return = t), e);
          }
          function u(t, e, n, r) {
            var a = n.type;
            return a === w
              ? f(t, e, n.props.children, r, n.key)
              : null !== e &&
                (e.elementType === a ||
                  ('object' === typeof a &&
                    null !== a &&
                    a.$$typeof === D &&
                    Ga(a) === e.type))
              ? (((r = i(e, n.props)).ref = $a(t, e, n)), (r.return = t), r)
              : (((r = Ru(n.type, n.key, n.props, null, t.mode, r)).ref = $a(
                  t,
                  e,
                  n
                )),
                (r.return = t),
                r);
          }
          function c(t, e, n, r) {
            return null === e ||
              4 !== e.tag ||
              e.stateNode.containerInfo !== n.containerInfo ||
              e.stateNode.implementation !== n.implementation
              ? (((e = ju(n, t.mode, r)).return = t), e)
              : (((e = i(e, n.children || [])).return = t), e);
          }
          function f(t, e, n, r, a) {
            return null === e || 7 !== e.tag
              ? (((e = Nu(n, t.mode, r, a)).return = t), e)
              : (((e = i(e, n)).return = t), e);
          }
          function h(t, e, n) {
            if (('string' === typeof e && '' !== e) || 'number' === typeof e)
              return ((e = zu('' + e, t.mode, n)).return = t), e;
            if ('object' === typeof e && null !== e) {
              switch (e.$$typeof) {
                case k:
                  return (
                    ((n = Ru(e.type, e.key, e.props, null, t.mode, n)).ref = $a(
                      t,
                      null,
                      e
                    )),
                    (n.return = t),
                    n
                  );
                case _:
                  return ((e = ju(e, t.mode, n)).return = t), e;
                case D:
                  return h(t, (0, e._init)(e._payload), n);
              }
              if (et(e) || N(e))
                return ((e = Nu(e, t.mode, n, null)).return = t), e;
              Xa(t, e);
            }
            return null;
          }
          function d(t, e, n, r) {
            var i = null !== e ? e.key : null;
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return null !== i ? null : s(t, e, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === i ? u(t, e, n, r) : null;
                case _:
                  return n.key === i ? c(t, e, n, r) : null;
                case D:
                  return d(t, e, (i = n._init)(n._payload), r);
              }
              if (et(n) || N(n)) return null !== i ? null : f(t, e, n, r, null);
              Xa(t, n);
            }
            return null;
          }
          function p(t, e, n, r, i) {
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return s(e, (t = t.get(n) || null), '' + r, i);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    e,
                    (t = t.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case _:
                  return c(
                    e,
                    (t = t.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case D:
                  return p(t, e, n, (0, r._init)(r._payload), i);
              }
              if (et(r) || N(r))
                return f(e, (t = t.get(n) || null), r, i, null);
              Xa(e, r);
            }
            return null;
          }
          function v(i, a, l, s) {
            for (
              var u = null, c = null, f = a, v = (a = 0), g = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((g = f), (f = null)) : (g = f.sibling);
              var y = d(i, f, l[v], s);
              if (null === y) {
                null === f && (f = g);
                break;
              }
              t && f && null === y.alternate && e(i, f),
                (a = o(y, a, v)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (f = g);
            }
            if (v === l.length) return n(i, f), ia && Ki(i, v), u;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = h(i, l[v], s)) &&
                  ((a = o(f, a, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ia && Ki(i, v), u;
            }
            for (f = r(i, f); v < l.length; v++)
              null !== (g = p(f, i, v, l[v], s)) &&
                (t &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? v : g.key),
                (a = o(g, a, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              t &&
                f.forEach(function (t) {
                  return e(i, t);
                }),
              ia && Ki(i, v),
              u
            );
          }
          function g(i, l, s, u) {
            var c = N(s);
            if ('function' !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var f = (c = null), v = l, g = (l = 0), y = null, m = s.next();
              null !== v && !m.done;
              g++, m = s.next()
            ) {
              v.index > g ? ((y = v), (v = null)) : (y = v.sibling);
              var b = d(i, v, m.value, u);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              t && v && null === b.alternate && e(i, v),
                (l = o(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (m.done) return n(i, v), ia && Ki(i, g), c;
            if (null === v) {
              for (; !m.done; g++, m = s.next())
                null !== (m = h(i, m.value, u)) &&
                  ((l = o(m, l, g)),
                  null === f ? (c = m) : (f.sibling = m),
                  (f = m));
              return ia && Ki(i, g), c;
            }
            for (v = r(i, v); !m.done; g++, m = s.next())
              null !== (m = p(v, i, g, m.value, u)) &&
                (t &&
                  null !== m.alternate &&
                  v.delete(null === m.key ? g : m.key),
                (l = o(m, l, g)),
                null === f ? (c = m) : (f.sibling = m),
                (f = m));
            return (
              t &&
                v.forEach(function (t) {
                  return e(i, t);
                }),
              ia && Ki(i, g),
              c
            );
          }
          return function t(r, a, o, s) {
            if (
              ('object' === typeof o &&
                null !== o &&
                o.type === w &&
                null === o.key &&
                (o = o.props.children),
              'object' === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  t: {
                    for (var u = o.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === w) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = i(c, o.props.children)).return = r),
                              (r = a);
                            break t;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === D &&
                            Ga(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = i(c, o.props)).ref = $a(r, c, o)),
                            (a.return = r),
                            (r = a);
                          break t;
                        }
                        n(r, c);
                        break;
                      }
                      e(r, c), (c = c.sibling);
                    }
                    o.type === w
                      ? (((a = Nu(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = a))
                      : (((s = Ru(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = $a(r, a, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case _:
                  t: {
                    for (c = o.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === o.containerInfo &&
                          a.stateNode.implementation === o.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = i(a, o.children || [])).return = r),
                            (r = a);
                          break t;
                        }
                        n(r, a);
                        break;
                      }
                      e(r, a), (a = a.sibling);
                    }
                    ((a = ju(o, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case D:
                  return t(r, a, (c = o._init)(o._payload), s);
              }
              if (et(o)) return v(r, a, o, s);
              if (N(o)) return g(r, a, o, s);
              Xa(r, o);
            }
            return ('string' === typeof o && '' !== o) || 'number' === typeof o
              ? ((o = '' + o),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = i(a, o)).return = r), (r = a))
                  : (n(r, a), ((a = zu(o, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var qa = Qa(!0),
          Za = Qa(!1),
          Ka = {},
          Ja = Si(Ka),
          to = Si(Ka),
          eo = Si(Ka);
        function no(t) {
          if (t === Ka) throw Error(a(174));
          return t;
        }
        function ro(t, e) {
          switch ((Ei(eo, e), Ei(to, t), Ei(Ja, Ka), (t = e.nodeType))) {
            case 9:
            case 11:
              e = (e = e.documentElement) ? e.namespaceURI : st(null, '');
              break;
            default:
              e = st(
                (e = (t = 8 === t ? e.parentNode : e).namespaceURI || null),
                (t = t.tagName)
              );
          }
          Mi(Ja), Ei(Ja, e);
        }
        function io() {
          Mi(Ja), Mi(to), Mi(eo);
        }
        function ao(t) {
          no(eo.current);
          var e = no(Ja.current),
            n = st(e, t.type);
          e !== n && (Ei(to, t), Ei(Ja, n));
        }
        function oo(t) {
          to.current === t && (Mi(Ja), Mi(to));
        }
        var lo = Si(0);
        function so(t) {
          for (var e = t; null !== e; ) {
            if (13 === e.tag) {
              var n = e.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return e;
            } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
              if (0 !== (128 & e.flags)) return e;
            } else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) return null;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var t = 0; t < uo.length; t++)
            uo[t]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          ho = x.ReactCurrentBatchConfig,
          po = 0,
          vo = null,
          go = null,
          yo = null,
          mo = !1,
          bo = !1,
          xo = 0,
          ko = 0;
        function _o() {
          throw Error(a(321));
        }
        function wo(t, e) {
          if (null === e) return !1;
          for (var n = 0; n < e.length && n < t.length; n++)
            if (!lr(t[n], e[n])) return !1;
          return !0;
        }
        function So(t, e, n, r, i, o) {
          if (
            ((po = o),
            (vo = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (fo.current = null === t || null === t.memoizedState ? ll : sl),
            (t = n(r, i)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(a(301));
              (o += 1),
                (yo = go = null),
                (e.updateQueue = null),
                (fo.current = ul),
                (t = n(r, i));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (e = null !== go && null !== go.next),
            (po = 0),
            (yo = go = vo = null),
            (mo = !1),
            e)
          )
            throw Error(a(300));
          return t;
        }
        function Mo() {
          var t = 0 !== xo;
          return (xo = 0), t;
        }
        function Eo() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yo ? (vo.memoizedState = yo = t) : (yo = yo.next = t), yo
          );
        }
        function Po() {
          if (null === go) {
            var t = vo.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = go.next;
          var e = null === yo ? vo.memoizedState : yo.next;
          if (null !== e) (yo = e), (go = t);
          else {
            if (null === t) throw Error(a(310));
            (t = {
              memoizedState: (go = t).memoizedState,
              baseState: go.baseState,
              baseQueue: go.baseQueue,
              queue: go.queue,
              next: null,
            }),
              null === yo ? (vo.memoizedState = yo = t) : (yo = yo.next = t);
          }
          return yo;
        }
        function Co(t, e) {
          return 'function' === typeof e ? e(t) : e;
        }
        function Oo(t) {
          var e = Po(),
            n = e.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = t;
          var r = go,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var l = i.next;
              (i.next = o.next), (o.next = l);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (o = i.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((po & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : t(r, c.action));
              else {
                var h = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = h), (l = r)) : (u = u.next = h),
                  (vo.lanes |= f),
                  (Is |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (l = r) : (u.next = s),
              lr(r, e.memoizedState) || (xl = !0),
              (e.memoizedState = r),
              (e.baseState = l),
              (e.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (t = n.interleaved)) {
            i = t;
            do {
              (o = i.lane), (vo.lanes |= o), (Is |= o), (i = i.next);
            } while (i !== t);
          } else null === i && (n.lanes = 0);
          return [e.memoizedState, n.dispatch];
        }
        function Ao(t) {
          var e = Po(),
            n = e.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = t;
          var r = n.dispatch,
            i = n.pending,
            o = e.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (o = t(o, l.action)), (l = l.next);
            } while (l !== i);
            lr(o, e.memoizedState) || (xl = !0),
              (e.memoizedState = o),
              null === e.baseQueue && (e.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function To() {}
        function Do(t, e) {
          var n = vo,
            r = Po(),
            i = e(),
            o = !lr(r.memoizedState, i);
          if (
            (o && ((r.memoizedState = i), (xl = !0)),
            (r = r.queue),
            Uo(No.bind(null, n, r, t), [t]),
            r.getSnapshot !== e ||
              o ||
              (null !== yo && 1 & yo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fo(9, Ro.bind(null, n, r, i, e), void 0, null),
              null === Os)
            )
              throw Error(a(349));
            0 !== (30 & po) || Lo(n, e, i);
          }
          return i;
        }
        function Lo(t, e, n) {
          (t.flags |= 16384),
            (t = { getSnapshot: e, value: n }),
            null === (e = vo.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (vo.updateQueue = e),
                (e.stores = [t]))
              : null === (n = e.stores)
              ? (e.stores = [t])
              : n.push(t);
        }
        function Ro(t, e, n, r) {
          (e.value = n), (e.getSnapshot = r), Io(e) && zo(t);
        }
        function No(t, e, n) {
          return n(function () {
            Io(e) && zo(t);
          });
        }
        function Io(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !lr(t, n);
          } catch (r) {
            return !0;
          }
        }
        function zo(t) {
          var e = Oa(t, 1);
          null !== e && nu(e, t, 1, -1);
        }
        function jo(t) {
          var e = Eo();
          return (
            'function' === typeof t && (t = t()),
            (e.memoizedState = e.baseState = t),
            (t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Co,
              lastRenderedState: t,
            }),
            (e.queue = t),
            (t = t.dispatch = nl.bind(null, vo, t)),
            [e.memoizedState, t]
          );
        }
        function Fo(t, e, n, r) {
          return (
            (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
            null === (e = vo.updateQueue)
              ? ((e = { lastEffect: null, stores: null }),
                (vo.updateQueue = e),
                (e.lastEffect = t.next = t))
              : null === (n = e.lastEffect)
              ? (e.lastEffect = t.next = t)
              : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t)),
            t
          );
        }
        function Vo() {
          return Po().memoizedState;
        }
        function Bo(t, e, n, r) {
          var i = Eo();
          (vo.flags |= t),
            (i.memoizedState = Fo(1 | e, n, void 0, void 0 === r ? null : r));
        }
        function Wo(t, e, n, r) {
          var i = Po();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== go) {
            var o = go.memoizedState;
            if (((a = o.destroy), null !== r && wo(r, o.deps)))
              return void (i.memoizedState = Fo(e, n, a, r));
          }
          (vo.flags |= t), (i.memoizedState = Fo(1 | e, n, a, r));
        }
        function Ho(t, e) {
          return Bo(8390656, 8, t, e);
        }
        function Uo(t, e) {
          return Wo(2048, 8, t, e);
        }
        function Yo(t, e) {
          return Wo(4, 2, t, e);
        }
        function $o(t, e) {
          return Wo(4, 4, t, e);
        }
        function Xo(t, e) {
          return 'function' === typeof e
            ? ((t = t()),
              e(t),
              function () {
                e(null);
              })
            : null !== e && void 0 !== e
            ? ((t = t()),
              (e.current = t),
              function () {
                e.current = null;
              })
            : void 0;
        }
        function Go(t, e, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([t]) : null),
            Wo(4, 4, Xo.bind(null, e, t), n)
          );
        }
        function Qo() {}
        function qo(t, e) {
          var n = Po();
          e = void 0 === e ? null : e;
          var r = n.memoizedState;
          return null !== r && null !== e && wo(e, r[1])
            ? r[0]
            : ((n.memoizedState = [t, e]), t);
        }
        function Zo(t, e) {
          var n = Po();
          e = void 0 === e ? null : e;
          var r = n.memoizedState;
          return null !== r && null !== e && wo(e, r[1])
            ? r[0]
            : ((t = t()), (n.memoizedState = [t, e]), t);
        }
        function Ko(t, e, n) {
          return 0 === (21 & po)
            ? (t.baseState && ((t.baseState = !1), (xl = !0)),
              (t.memoizedState = n))
            : (lr(n, e) ||
                ((n = ve()), (vo.lanes |= n), (Is |= n), (t.baseState = !0)),
              e);
        }
        function Jo(t, e) {
          var n = be;
          (be = 0 !== n && 4 > n ? n : 4), t(!0);
          var r = ho.transition;
          ho.transition = {};
          try {
            t(!1), e();
          } finally {
            (be = n), (ho.transition = r);
          }
        }
        function tl() {
          return Po().memoizedState;
        }
        function el(t, e, n) {
          var r = eu(t);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(t))
          )
            il(e, n);
          else if (null !== (n = Ca(t, e, n, r))) {
            nu(n, t, r, tu()), al(n, e, r);
          }
        }
        function nl(t, e, n) {
          var r = eu(t),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(t)) il(e, i);
          else {
            var a = t.alternate;
            if (
              0 === t.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = e.lastRenderedReducer)
            )
              try {
                var o = e.lastRenderedState,
                  l = a(o, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), lr(l, o))) {
                  var s = e.interleaved;
                  return (
                    null === s
                      ? ((i.next = i), Pa(e))
                      : ((i.next = s.next), (s.next = i)),
                    void (e.interleaved = i)
                  );
                }
              } catch (u) {}
            null !== (n = Ca(t, e, i, r)) &&
              (nu(n, t, r, (i = tu())), al(n, e, r));
          }
        }
        function rl(t) {
          var e = t.alternate;
          return t === vo || (null !== e && e === vo);
        }
        function il(t, e) {
          bo = mo = !0;
          var n = t.pending;
          null === n ? (e.next = e) : ((e.next = n.next), (n.next = e)),
            (t.pending = e);
        }
        function al(t, e, n) {
          if (0 !== (4194240 & n)) {
            var r = e.lanes;
            (n |= r &= t.pendingLanes), (e.lanes = n), me(t, n);
          }
        }
        var ol = {
            readContext: Ma,
            useCallback: _o,
            useContext: _o,
            useEffect: _o,
            useImperativeHandle: _o,
            useInsertionEffect: _o,
            useLayoutEffect: _o,
            useMemo: _o,
            useReducer: _o,
            useRef: _o,
            useState: _o,
            useDebugValue: _o,
            useDeferredValue: _o,
            useTransition: _o,
            useMutableSource: _o,
            useSyncExternalStore: _o,
            useId: _o,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ma,
            useCallback: function (t, e) {
              return (Eo().memoizedState = [t, void 0 === e ? null : e]), t;
            },
            useContext: Ma,
            useEffect: Ho,
            useImperativeHandle: function (t, e, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([t]) : null),
                Bo(4194308, 4, Xo.bind(null, e, t), n)
              );
            },
            useLayoutEffect: function (t, e) {
              return Bo(4194308, 4, t, e);
            },
            useInsertionEffect: function (t, e) {
              return Bo(4, 2, t, e);
            },
            useMemo: function (t, e) {
              var n = Eo();
              return (
                (e = void 0 === e ? null : e),
                (t = t()),
                (n.memoizedState = [t, e]),
                t
              );
            },
            useReducer: function (t, e, n) {
              var r = Eo();
              return (
                (e = void 0 !== n ? n(e) : e),
                (r.memoizedState = r.baseState = e),
                (t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: e,
                }),
                (r.queue = t),
                (t = t.dispatch = el.bind(null, vo, t)),
                [r.memoizedState, t]
              );
            },
            useRef: function (t) {
              return (t = { current: t }), (Eo().memoizedState = t);
            },
            useState: jo,
            useDebugValue: Qo,
            useDeferredValue: function (t) {
              return (Eo().memoizedState = t);
            },
            useTransition: function () {
              var t = jo(!1),
                e = t[0];
              return (
                (t = Jo.bind(null, t[1])), (Eo().memoizedState = t), [e, t]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, e, n) {
              var r = vo,
                i = Eo();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = e()), null === Os)) throw Error(a(349));
                0 !== (30 & po) || Lo(r, e, n);
              }
              i.memoizedState = n;
              var o = { value: n, getSnapshot: e };
              return (
                (i.queue = o),
                Ho(No.bind(null, r, o, t), [t]),
                (r.flags |= 2048),
                Fo(9, Ro.bind(null, r, o, n, e), void 0, null),
                n
              );
            },
            useId: function () {
              var t = Eo(),
                e = Os.identifierPrefix;
              if (ia) {
                var n = Zi;
                (e =
                  ':' +
                  e +
                  'R' +
                  (n = (qi & ~(1 << (32 - oe(qi) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (e += 'H' + n.toString(32)),
                  (e += ':');
              } else e = ':' + e + 'r' + (n = ko++).toString(32) + ':';
              return (t.memoizedState = e);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ma,
            useCallback: qo,
            useContext: Ma,
            useEffect: Uo,
            useImperativeHandle: Go,
            useInsertionEffect: Yo,
            useLayoutEffect: $o,
            useMemo: Zo,
            useReducer: Oo,
            useRef: Vo,
            useState: function () {
              return Oo(Co);
            },
            useDebugValue: Qo,
            useDeferredValue: function (t) {
              return Ko(Po(), go.memoizedState, t);
            },
            useTransition: function () {
              return [Oo(Co)[0], Po().memoizedState];
            },
            useMutableSource: To,
            useSyncExternalStore: Do,
            useId: tl,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ma,
            useCallback: qo,
            useContext: Ma,
            useEffect: Uo,
            useImperativeHandle: Go,
            useInsertionEffect: Yo,
            useLayoutEffect: $o,
            useMemo: Zo,
            useReducer: Ao,
            useRef: Vo,
            useState: function () {
              return Ao(Co);
            },
            useDebugValue: Qo,
            useDeferredValue: function (t) {
              var e = Po();
              return null === go
                ? (e.memoizedState = t)
                : Ko(e, go.memoizedState, t);
            },
            useTransition: function () {
              return [Ao(Co)[0], Po().memoizedState];
            },
            useMutableSource: To,
            useSyncExternalStore: Do,
            useId: tl,
            unstable_isNewReconciler: !1,
          };
        function cl(t, e) {
          try {
            var n = '',
              r = e;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: t, source: e, stack: i, digest: null };
        }
        function fl(t, e, n) {
          return {
            value: t,
            source: null,
            stack: null != n ? n : null,
            digest: null != e ? e : null,
          };
        }
        function hl(t, e) {
          try {
            console.error(e.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var dl = 'function' === typeof WeakMap ? WeakMap : Map;
        function pl(t, e, n) {
          ((n = La(-1, n)).tag = 3), (n.payload = { element: null });
          var r = e.value;
          return (
            (n.callback = function () {
              Us || ((Us = !0), (Ys = r)), hl(0, e);
            }),
            n
          );
        }
        function vl(t, e, n) {
          (n = La(-1, n)).tag = 3;
          var r = t.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var i = e.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                hl(0, e);
              });
          }
          var a = t.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                hl(0, e),
                  'function' !== typeof r &&
                    (null === $s ? ($s = new Set([this])) : $s.add(this));
                var t = e.stack;
                this.componentDidCatch(e.value, {
                  componentStack: null !== t ? t : '',
                });
              }),
            n
          );
        }
        function gl(t, e, n) {
          var r = t.pingCache;
          if (null === r) {
            r = t.pingCache = new dl();
            var i = new Set();
            r.set(e, i);
          } else void 0 === (i = r.get(e)) && ((i = new Set()), r.set(e, i));
          i.has(n) || (i.add(n), (t = Mu.bind(null, t, e, n)), e.then(t, t));
        }
        function yl(t) {
          do {
            var e;
            if (
              ((e = 13 === t.tag) &&
                (e = null === (e = t.memoizedState) || null !== e.dehydrated),
              e)
            )
              return t;
            t = t.return;
          } while (null !== t);
          return null;
        }
        function ml(t, e, n, r, i) {
          return 0 === (1 & t.mode)
            ? (t === e
                ? (t.flags |= 65536)
                : ((t.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((e = La(-1, 1)).tag = 2), Ra(n, e, 1))),
                  (n.lanes |= 1)),
              t)
            : ((t.flags |= 65536), (t.lanes = i), t);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function kl(t, e, n, r) {
          e.child = null === t ? Za(e, null, n, r) : qa(e, t.child, n, r);
        }
        function _l(t, e, n, r, i) {
          n = n.render;
          var a = e.ref;
          return (
            Sa(e, i),
            (r = So(t, e, n, r, a, i)),
            (n = Mo()),
            null === t || xl
              ? (ia && n && ta(e), (e.flags |= 1), kl(t, e, r, i), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~i),
                Ul(t, e, i))
          );
        }
        function wl(t, e, n, r, i) {
          if (null === t) {
            var a = n.type;
            return 'function' !== typeof a ||
              Du(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((t = Ru(n.type, null, r, e, e.mode, i)).ref = e.ref),
                (t.return = e),
                (e.child = t))
              : ((e.tag = 15), (e.type = a), Sl(t, e, a, r, i));
          }
          if (((a = t.child), 0 === (t.lanes & i))) {
            var o = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              t.ref === e.ref
            )
              return Ul(t, e, i);
          }
          return (
            (e.flags |= 1),
            ((t = Lu(a, r)).ref = e.ref),
            (t.return = e),
            (e.child = t)
          );
        }
        function Sl(t, e, n, r, i) {
          if (null !== t) {
            var a = t.memoizedProps;
            if (sr(a, r) && t.ref === e.ref) {
              if (((xl = !1), (e.pendingProps = r = a), 0 === (t.lanes & i)))
                return (e.lanes = t.lanes), Ul(t, e, i);
              0 !== (131072 & t.flags) && (xl = !0);
            }
          }
          return Pl(t, e, n, r, i);
        }
        function Ml(t, e, n) {
          var r = e.pendingProps,
            i = r.children,
            a = null !== t ? t.memoizedState : null;
          if ('hidden' === r.mode)
            if (0 === (1 & e.mode))
              (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ei(Ls, Ds),
                (Ds |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (t = null !== a ? a.baseLanes | n : n),
                  (e.lanes = e.childLanes = 1073741824),
                  (e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null,
                  }),
                  (e.updateQueue = null),
                  Ei(Ls, Ds),
                  (Ds |= t),
                  null
                );
              (e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Ei(Ls, Ds),
                (Ds |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (e.memoizedState = null))
              : (r = n),
              Ei(Ls, Ds),
              (Ds |= r);
          return kl(t, e, i, n), e.child;
        }
        function El(t, e) {
          var n = e.ref;
          ((null === t && null !== n) || (null !== t && t.ref !== n)) &&
            ((e.flags |= 512), (e.flags |= 2097152));
        }
        function Pl(t, e, n, r, i) {
          var a = Di(n) ? Ai : Ci.current;
          return (
            (a = Ti(e, a)),
            Sa(e, i),
            (n = So(t, e, n, r, a, i)),
            (r = Mo()),
            null === t || xl
              ? (ia && r && ta(e), (e.flags |= 1), kl(t, e, n, i), e.child)
              : ((e.updateQueue = t.updateQueue),
                (e.flags &= -2053),
                (t.lanes &= ~i),
                Ul(t, e, i))
          );
        }
        function Cl(t, e, n, r, i) {
          if (Di(n)) {
            var a = !0;
            Ii(e);
          } else a = !1;
          if ((Sa(e, i), null === e.stateNode))
            Hl(t, e), Ha(e, n, r), Ya(e, n, r, i), (r = !0);
          else if (null === t) {
            var o = e.stateNode,
              l = e.memoizedProps;
            o.props = l;
            var s = o.context,
              u = n.contextType;
            'object' === typeof u && null !== u
              ? (u = Ma(u))
              : (u = Ti(e, (u = Di(n) ? Ai : Ci.current)));
            var c = n.getDerivedStateFromProps,
              f =
                'function' === typeof c ||
                'function' === typeof o.getSnapshotBeforeUpdate;
            f ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Ua(e, o, r, u)),
              (Aa = !1);
            var h = e.memoizedState;
            (o.state = h),
              za(e, r, o, i),
              (s = e.memoizedState),
              l !== r || h !== s || Oi.current || Aa
                ? ('function' === typeof c &&
                    (Va(e, n, c, r), (s = e.memoizedState)),
                  (l = Aa || Wa(e, n, l, r, h, s, u))
                    ? (f ||
                        ('function' !== typeof o.UNSAFE_componentWillMount &&
                          'function' !== typeof o.componentWillMount) ||
                        ('function' === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        'function' === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      'function' === typeof o.componentDidMount &&
                        (e.flags |= 4194308))
                    : ('function' === typeof o.componentDidMount &&
                        (e.flags |= 4194308),
                      (e.memoizedProps = r),
                      (e.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ('function' === typeof o.componentDidMount &&
                    (e.flags |= 4194308),
                  (r = !1));
          } else {
            (o = e.stateNode),
              Da(t, e),
              (l = e.memoizedProps),
              (u = e.type === e.elementType ? l : ga(e.type, l)),
              (o.props = u),
              (f = e.pendingProps),
              (h = o.context),
              'object' === typeof (s = n.contextType) && null !== s
                ? (s = Ma(s))
                : (s = Ti(e, (s = Di(n) ? Ai : Ci.current)));
            var d = n.getDerivedStateFromProps;
            (c =
              'function' === typeof d ||
              'function' === typeof o.getSnapshotBeforeUpdate) ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((l !== f || h !== s) && Ua(e, o, r, s)),
              (Aa = !1),
              (h = e.memoizedState),
              (o.state = h),
              za(e, r, o, i);
            var p = e.memoizedState;
            l !== f || h !== p || Oi.current || Aa
              ? ('function' === typeof d &&
                  (Va(e, n, d, r), (p = e.memoizedState)),
                (u = Aa || Wa(e, n, u, r, h, p, s) || !1)
                  ? (c ||
                      ('function' !== typeof o.UNSAFE_componentWillUpdate &&
                        'function' !== typeof o.componentWillUpdate) ||
                      ('function' === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, p, s),
                      'function' === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, p, s)),
                    'function' === typeof o.componentDidUpdate &&
                      (e.flags |= 4),
                    'function' === typeof o.getSnapshotBeforeUpdate &&
                      (e.flags |= 1024))
                  : ('function' !== typeof o.componentDidUpdate ||
                      (l === t.memoizedProps && h === t.memoizedState) ||
                      (e.flags |= 4),
                    'function' !== typeof o.getSnapshotBeforeUpdate ||
                      (l === t.memoizedProps && h === t.memoizedState) ||
                      (e.flags |= 1024),
                    (e.memoizedProps = r),
                    (e.memoizedState = p)),
                (o.props = r),
                (o.state = p),
                (o.context = s),
                (r = u))
              : ('function' !== typeof o.componentDidUpdate ||
                  (l === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 4),
                'function' !== typeof o.getSnapshotBeforeUpdate ||
                  (l === t.memoizedProps && h === t.memoizedState) ||
                  (e.flags |= 1024),
                (r = !1));
          }
          return Ol(t, e, n, r, a, i);
        }
        function Ol(t, e, n, r, i, a) {
          El(t, e);
          var o = 0 !== (128 & e.flags);
          if (!r && !o) return i && zi(e, n, !1), Ul(t, e, a);
          (r = e.stateNode), (bl.current = e);
          var l =
            o && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (e.flags |= 1),
            null !== t && o
              ? ((e.child = qa(e, t.child, null, a)),
                (e.child = qa(e, null, l, a)))
              : kl(t, e, l, a),
            (e.memoizedState = r.state),
            i && zi(e, n, !0),
            e.child
          );
        }
        function Al(t) {
          var e = t.stateNode;
          e.pendingContext
            ? Ri(0, e.pendingContext, e.pendingContext !== e.context)
            : e.context && Ri(0, e.context, !1),
            ro(t, e.containerInfo);
        }
        function Tl(t, e, n, r, i) {
          return da(), pa(i), (e.flags |= 256), kl(t, e, n, r), e.child;
        }
        var Dl,
          Ll,
          Rl,
          Nl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(t) {
          return { baseLanes: t, cachePool: null, transitions: null };
        }
        function zl(t, e, n) {
          var r,
            i = e.pendingProps,
            o = lo.current,
            l = !1,
            s = 0 !== (128 & e.flags);
          if (
            ((r = s) ||
              (r = (null === t || null !== t.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (e.flags &= -129))
              : (null !== t && null === t.memoizedState) || (o |= 1),
            Ei(lo, 1 & o),
            null === t)
          )
            return (
              ua(e),
              null !== (t = e.memoizedState) && null !== (t = t.dehydrated)
                ? (0 === (1 & e.mode)
                    ? (e.lanes = 1)
                    : '$!' === t.data
                    ? (e.lanes = 8)
                    : (e.lanes = 1073741824),
                  null)
                : ((s = i.children),
                  (t = i.fallback),
                  l
                    ? ((i = e.mode),
                      (l = e.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & i) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Iu(s, i, 0, null)),
                      (t = Nu(t, i, n, null)),
                      (l.return = e),
                      (t.return = e),
                      (l.sibling = t),
                      (e.child = l),
                      (e.child.memoizedState = Il(n)),
                      (e.memoizedState = Nl),
                      t)
                    : jl(e, s))
            );
          if (null !== (o = t.memoizedState) && null !== (r = o.dehydrated))
            return (function (t, e, n, r, i, o, l) {
              if (n)
                return 256 & e.flags
                  ? ((e.flags &= -257), Fl(t, e, l, (r = fl(Error(a(422))))))
                  : null !== e.memoizedState
                  ? ((e.child = t.child), (e.flags |= 128), null)
                  : ((o = r.fallback),
                    (i = e.mode),
                    (r = Iu(
                      { mode: 'visible', children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((o = Nu(o, i, l, null)).flags |= 2),
                    (r.return = e),
                    (o.return = e),
                    (r.sibling = o),
                    (e.child = r),
                    0 !== (1 & e.mode) && qa(e, t.child, null, l),
                    (e.child.memoizedState = Il(l)),
                    (e.memoizedState = Nl),
                    o);
              if (0 === (1 & e.mode)) return Fl(t, e, l, null);
              if ('$!' === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fl(t, e, l, (r = fl((o = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & t.childLanes)), xl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | l)) ? 0 : i) &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), Oa(t, i), nu(r, t, i, -1));
                }
                return vu(), Fl(t, e, l, (r = fl(Error(a(421)))));
              }
              return '$?' === i.data
                ? ((e.flags |= 128),
                  (e.child = t.child),
                  (e = Pu.bind(null, t)),
                  (i._reactRetry = e),
                  null)
                : ((t = o.treeContext),
                  (ra = ui(i.nextSibling)),
                  (na = e),
                  (ia = !0),
                  (aa = null),
                  null !== t &&
                    ((Xi[Gi++] = qi),
                    (Xi[Gi++] = Zi),
                    (Xi[Gi++] = Qi),
                    (qi = t.id),
                    (Zi = t.overflow),
                    (Qi = e)),
                  ((e = jl(e, r.children)).flags |= 4096),
                  e);
            })(t, e, s, i, r, o, n);
          if (l) {
            (l = i.fallback), (s = e.mode), (r = (o = t.child).sibling);
            var u = { mode: 'hidden', children: i.children };
            return (
              0 === (1 & s) && e.child !== o
                ? (((i = e.child).childLanes = 0),
                  (i.pendingProps = u),
                  (e.deletions = null))
                : ((i = Lu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = Lu(r, l))
                : ((l = Nu(l, s, n, null)).flags |= 2),
              (l.return = e),
              (i.return = e),
              (i.sibling = l),
              (e.child = i),
              (i = l),
              (l = e.child),
              (s =
                null === (s = t.child.memoizedState)
                  ? Il(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = t.childLanes & ~n),
              (e.memoizedState = Nl),
              i
            );
          }
          return (
            (t = (l = t.child).sibling),
            (i = Lu(l, { mode: 'visible', children: i.children })),
            0 === (1 & e.mode) && (i.lanes = n),
            (i.return = e),
            (i.sibling = null),
            null !== t &&
              (null === (n = e.deletions)
                ? ((e.deletions = [t]), (e.flags |= 16))
                : n.push(t)),
            (e.child = i),
            (e.memoizedState = null),
            i
          );
        }
        function jl(t, e) {
          return (
            ((e = Iu(
              { mode: 'visible', children: e },
              t.mode,
              0,
              null
            )).return = t),
            (t.child = e)
          );
        }
        function Fl(t, e, n, r) {
          return (
            null !== r && pa(r),
            qa(e, t.child, null, n),
            ((t = jl(e, e.pendingProps.children)).flags |= 2),
            (e.memoizedState = null),
            t
          );
        }
        function Vl(t, e, n) {
          t.lanes |= e;
          var r = t.alternate;
          null !== r && (r.lanes |= e), wa(t.return, e, n);
        }
        function Bl(t, e, n, r, i) {
          var a = t.memoizedState;
          null === a
            ? (t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((a.isBackwards = e),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i));
        }
        function Wl(t, e, n) {
          var r = e.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((kl(t, e, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (e.flags |= 128);
          else {
            if (null !== t && 0 !== (128 & t.flags))
              t: for (t = e.child; null !== t; ) {
                if (13 === t.tag) null !== t.memoizedState && Vl(t, n, e);
                else if (19 === t.tag) Vl(t, n, e);
                else if (null !== t.child) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break t;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break t;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            r &= 1;
          }
          if ((Ei(lo, r), 0 === (1 & e.mode))) e.memoizedState = null;
          else
            switch (i) {
              case 'forwards':
                for (n = e.child, i = null; null !== n; )
                  null !== (t = n.alternate) && null === so(t) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = e.child), (e.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  Bl(e, !1, i, n, a);
                break;
              case 'backwards':
                for (n = null, i = e.child, e.child = null; null !== i; ) {
                  if (null !== (t = i.alternate) && null === so(t)) {
                    e.child = i;
                    break;
                  }
                  (t = i.sibling), (i.sibling = n), (n = i), (i = t);
                }
                Bl(e, !0, n, null, a);
                break;
              case 'together':
                Bl(e, !1, null, null, void 0);
                break;
              default:
                e.memoizedState = null;
            }
          return e.child;
        }
        function Hl(t, e) {
          0 === (1 & e.mode) &&
            null !== t &&
            ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
        }
        function Ul(t, e, n) {
          if (
            (null !== t && (e.dependencies = t.dependencies),
            (Is |= e.lanes),
            0 === (n & e.childLanes))
          )
            return null;
          if (null !== t && e.child !== t.child) throw Error(a(153));
          if (null !== e.child) {
            for (
              n = Lu((t = e.child), t.pendingProps), e.child = n, n.return = e;
              null !== t.sibling;

            )
              (t = t.sibling),
                ((n = n.sibling = Lu(t, t.pendingProps)).return = e);
            n.sibling = null;
          }
          return e.child;
        }
        function Yl(t, e) {
          if (!ia)
            switch (t.tailMode) {
              case 'hidden':
                e = t.tail;
                for (var n = null; null !== e; )
                  null !== e.alternate && (n = e), (e = e.sibling);
                null === n ? (t.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = t.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? e || null === t.tail
                    ? (t.tail = null)
                    : (t.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $l(t) {
          var e = null !== t.alternate && t.alternate.child === t.child,
            n = 0,
            r = 0;
          if (e)
            for (var i = t.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = t),
                (i = i.sibling);
          else
            for (i = t.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = t),
                (i = i.sibling);
          return (t.subtreeFlags |= r), (t.childLanes = n), e;
        }
        function Xl(t, e, n) {
          var r = e.pendingProps;
          switch ((ea(e), e.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $l(e), null;
            case 1:
            case 17:
              return Di(e.type) && Li(), $l(e), null;
            case 3:
              return (
                (r = e.stateNode),
                io(),
                Mi(Oi),
                Mi(Ci),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== t && null !== t.child) ||
                  (fa(e)
                    ? (e.flags |= 4)
                    : null === t ||
                      (t.memoizedState.isDehydrated && 0 === (256 & e.flags)) ||
                      ((e.flags |= 1024),
                      null !== aa && (ou(aa), (aa = null)))),
                $l(e),
                null
              );
            case 5:
              oo(e);
              var i = no(eo.current);
              if (((n = e.type), null !== t && null != e.stateNode))
                Ll(t, e, n, r),
                  t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
              else {
                if (!r) {
                  if (null === e.stateNode) throw Error(a(166));
                  return $l(e), null;
                }
                if (((t = no(Ja.current)), fa(e))) {
                  (r = e.stateNode), (n = e.type);
                  var o = e.memoizedProps;
                  switch (
                    ((r[hi] = e), (r[di] = o), (t = 0 !== (1 & e.mode)), n)
                  ) {
                    case 'dialog':
                      Fr('cancel', r), Fr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Fr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (i = 0; i < Nr.length; i++) Fr(Nr[i], r);
                      break;
                    case 'source':
                      Fr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Fr('error', r), Fr('load', r);
                      break;
                    case 'details':
                      Fr('toggle', r);
                      break;
                    case 'input':
                      q(r, o), Fr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr('invalid', r);
                      break;
                    case 'textarea':
                      it(r, o), Fr('invalid', r);
                  }
                  for (var s in (mt(n, o), (i = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      'children' === s
                        ? 'string' === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, u, t),
                            (i = ['children', u]))
                          : 'number' === typeof u &&
                            r.textContent !== '' + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Kr(r.textContent, u, t),
                            (i = ['children', '' + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          'onScroll' === s &&
                          Fr('scroll', r);
                    }
                  switch (n) {
                    case 'input':
                      $(r), J(r, o, !0);
                      break;
                    case 'textarea':
                      $(r), ot(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = i), (e.updateQueue = r), null !== r && (e.flags |= 4);
                } else {
                  (s = 9 === i.nodeType ? i : i.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === t && (t = lt(n)),
                    'http://www.w3.org/1999/xhtml' === t
                      ? 'script' === n
                        ? (((t = s.createElement('div')).innerHTML =
                            '<script></script>'),
                          (t = t.removeChild(t.firstChild)))
                        : 'string' === typeof r.is
                        ? (t = s.createElement(n, { is: r.is }))
                        : ((t = s.createElement(n)),
                          'select' === n &&
                            ((s = t),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (t = s.createElementNS(t, n)),
                    (t[hi] = e),
                    (t[di] = r),
                    Dl(t, e),
                    (e.stateNode = t);
                  t: {
                    switch (((s = bt(n, r)), n)) {
                      case 'dialog':
                        Fr('cancel', t), Fr('close', t), (i = r);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Fr('load', t), (i = r);
                        break;
                      case 'video':
                      case 'audio':
                        for (i = 0; i < Nr.length; i++) Fr(Nr[i], t);
                        i = r;
                        break;
                      case 'source':
                        Fr('error', t), (i = r);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Fr('error', t), Fr('load', t), (i = r);
                        break;
                      case 'details':
                        Fr('toggle', t), (i = r);
                        break;
                      case 'input':
                        q(t, r), (i = Q(t, r)), Fr('invalid', t);
                        break;
                      case 'option':
                      default:
                        i = r;
                        break;
                      case 'select':
                        (t._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = z({}, r, { value: void 0 })),
                          Fr('invalid', t);
                        break;
                      case 'textarea':
                        it(t, r), (i = rt(t, r)), Fr('invalid', t);
                    }
                    for (o in (mt(n, i), (u = i)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        'style' === o
                          ? gt(t, c)
                          : 'dangerouslySetInnerHTML' === o
                          ? null != (c = c ? c.__html : void 0) && ft(t, c)
                          : 'children' === o
                          ? 'string' === typeof c
                            ? ('textarea' !== n || '' !== c) && ht(t, c)
                            : 'number' === typeof c && ht(t, '' + c)
                          : 'suppressContentEditableWarning' !== o &&
                            'suppressHydrationWarning' !== o &&
                            'autoFocus' !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && 'onScroll' === o && Fr('scroll', t)
                              : null != c && b(t, o, c, s));
                      }
                    switch (n) {
                      case 'input':
                        $(t), J(t, r, !1);
                        break;
                      case 'textarea':
                        $(t), ot(t);
                        break;
                      case 'option':
                        null != r.value &&
                          t.setAttribute('value', '' + U(r.value));
                        break;
                      case 'select':
                        (t.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? nt(t, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              nt(t, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof i.onClick && (t.onclick = Jr);
                    }
                    switch (n) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        r = !!r.autoFocus;
                        break t;
                      case 'img':
                        r = !0;
                        break t;
                      default:
                        r = !1;
                    }
                  }
                  r && (e.flags |= 4);
                }
                null !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
              }
              return $l(e), null;
            case 6:
              if (t && null != e.stateNode) Rl(0, e, t.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === e.stateNode)
                  throw Error(a(166));
                if (((n = no(eo.current)), no(Ja.current), fa(e))) {
                  if (
                    ((r = e.stateNode),
                    (n = e.memoizedProps),
                    (r[hi] = e),
                    (o = r.nodeValue !== n) && null !== (t = na))
                  )
                    switch (t.tag) {
                      case 3:
                        Kr(r.nodeValue, n, 0 !== (1 & t.mode));
                        break;
                      case 5:
                        !0 !== t.memoizedProps.suppressHydrationWarning &&
                          Kr(r.nodeValue, n, 0 !== (1 & t.mode));
                    }
                  o && (e.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[hi] = e),
                    (e.stateNode = r);
              }
              return $l(e), null;
            case 13:
              if (
                (Mi(lo),
                (r = e.memoizedState),
                null === t ||
                  (null !== t.memoizedState &&
                    null !== t.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== ra &&
                  0 !== (1 & e.mode) &&
                  0 === (128 & e.flags)
                )
                  ha(), da(), (e.flags |= 98560), (o = !1);
                else if (((o = fa(e)), null !== r && null !== r.dehydrated)) {
                  if (null === t) {
                    if (!o) throw Error(a(318));
                    if (
                      !(o =
                        null !== (o = e.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(a(317));
                    o[hi] = e;
                  } else
                    da(),
                      0 === (128 & e.flags) && (e.memoizedState = null),
                      (e.flags |= 4);
                  $l(e), (o = !1);
                } else null !== aa && (ou(aa), (aa = null)), (o = !0);
                if (!o) return 65536 & e.flags ? e : null;
              }
              return 0 !== (128 & e.flags)
                ? ((e.lanes = n), e)
                : ((r = null !== r) !==
                    (null !== t && null !== t.memoizedState) &&
                    r &&
                    ((e.child.flags |= 8192),
                    0 !== (1 & e.mode) &&
                      (null === t || 0 !== (1 & lo.current)
                        ? 0 === Rs && (Rs = 3)
                        : vu())),
                  null !== e.updateQueue && (e.flags |= 4),
                  $l(e),
                  null);
            case 4:
              return (
                io(), null === t && Wr(e.stateNode.containerInfo), $l(e), null
              );
            case 10:
              return _a(e.type._context), $l(e), null;
            case 19:
              if ((Mi(lo), null === (o = e.memoizedState))) return $l(e), null;
              if (((r = 0 !== (128 & e.flags)), null === (s = o.rendering)))
                if (r) Yl(o, !1);
                else {
                  if (0 !== Rs || (null !== t && 0 !== (128 & t.flags)))
                    for (t = e.child; null !== t; ) {
                      if (null !== (s = so(t))) {
                        for (
                          e.flags |= 128,
                            Yl(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((e.updateQueue = r), (e.flags |= 4)),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child;
                          null !== n;

                        )
                          (t = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = t),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (t = s.dependencies),
                                (o.dependencies =
                                  null === t
                                    ? null
                                    : {
                                        lanes: t.lanes,
                                        firstContext: t.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ei(lo, (1 & lo.current) | 2), e.child;
                      }
                      t = t.sibling;
                    }
                  null !== o.tail &&
                    Zt() > Ws &&
                    ((e.flags |= 128),
                    (r = !0),
                    Yl(o, !1),
                    (e.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (t = so(s))) {
                    if (
                      ((e.flags |= 128),
                      (r = !0),
                      null !== (n = t.updateQueue) &&
                        ((e.updateQueue = n), (e.flags |= 4)),
                      Yl(o, !0),
                      null === o.tail &&
                        'hidden' === o.tailMode &&
                        !s.alternate &&
                        !ia)
                    )
                      return $l(e), null;
                  } else
                    2 * Zt() - o.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((e.flags |= 128),
                      (r = !0),
                      Yl(o, !1),
                      (e.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = e.child), (e.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (e.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((e = o.tail),
                  (o.rendering = e),
                  (o.tail = e.sibling),
                  (o.renderingStartTime = Zt()),
                  (e.sibling = null),
                  (n = lo.current),
                  Ei(lo, r ? (1 & n) | 2 : 1 & n),
                  e)
                : ($l(e), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== e.memoizedState),
                null !== t &&
                  (null !== t.memoizedState) !== r &&
                  (e.flags |= 8192),
                r && 0 !== (1 & e.mode)
                  ? 0 !== (1073741824 & Ds) &&
                    ($l(e), 6 & e.subtreeFlags && (e.flags |= 8192))
                  : $l(e),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, e.tag));
        }
        function Gl(t, e) {
          switch ((ea(e), e.tag)) {
            case 1:
              return (
                Di(e.type) && Li(),
                65536 & (t = e.flags)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 3:
              return (
                io(),
                Mi(Oi),
                Mi(Ci),
                co(),
                0 !== (65536 & (t = e.flags)) && 0 === (128 & t)
                  ? ((e.flags = (-65537 & t) | 128), e)
                  : null
              );
            case 5:
              return oo(e), null;
            case 13:
              if (
                (Mi(lo),
                null !== (t = e.memoizedState) && null !== t.dehydrated)
              ) {
                if (null === e.alternate) throw Error(a(340));
                da();
              }
              return 65536 & (t = e.flags)
                ? ((e.flags = (-65537 & t) | 128), e)
                : null;
            case 19:
              return Mi(lo), null;
            case 4:
              return io(), null;
            case 10:
              return _a(e.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Dl = function (t, e) {
          for (var n = e.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ll = function (t, e, n, r) {
            var i = t.memoizedProps;
            if (i !== r) {
              (t = e.stateNode), no(Ja.current);
              var a,
                o = null;
              switch (n) {
                case 'input':
                  (i = Q(t, i)), (r = Q(t, r)), (o = []);
                  break;
                case 'select':
                  (i = z({}, i, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case 'textarea':
                  (i = rt(t, i)), (r = rt(t, r)), (o = []);
                  break;
                default:
                  'function' !== typeof i.onClick &&
                    'function' === typeof r.onClick &&
                    (t.onclick = Jr);
              }
              for (c in (mt(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ('style' === c) {
                    var s = i[c];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ''));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          s[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : 'children' === c
                      ? ('string' !== typeof u && 'number' !== typeof u) ||
                        (o = o || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && Fr('scroll', t),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push('style', n);
              var c = o;
              (e.updateQueue = c) && (e.flags |= 4);
            }
          }),
          (Rl = function (t, e, n, r) {
            n !== r && (e.flags |= 4);
          });
        var Ql = !1,
          ql = !1,
          Zl = 'function' === typeof WeakSet ? WeakSet : Set,
          Kl = null;
        function Jl(t, e) {
          var n = t.ref;
          if (null !== n)
            if ('function' === typeof n)
              try {
                n(null);
              } catch (r) {
                Su(t, e, r);
              }
            else n.current = null;
        }
        function ts(t, e, n) {
          try {
            n();
          } catch (r) {
            Su(t, e, r);
          }
        }
        var es = !1;
        function ns(t, e, n) {
          var r = e.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & t) === t) {
                var a = i.destroy;
                (i.destroy = void 0), void 0 !== a && ts(e, n, a);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function rs(t, e) {
          if (
            null !== (e = null !== (e = e.updateQueue) ? e.lastEffect : null)
          ) {
            var n = (e = e.next);
            do {
              if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== e);
          }
        }
        function is(t) {
          var e = t.ref;
          if (null !== e) {
            var n = t.stateNode;
            t.tag, (t = n), 'function' === typeof e ? e(t) : (e.current = t);
          }
        }
        function as(t) {
          var e = t.alternate;
          null !== e && ((t.alternate = null), as(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            5 === t.tag &&
              null !== (e = t.stateNode) &&
              (delete e[hi],
              delete e[di],
              delete e[vi],
              delete e[gi],
              delete e[yi]),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null);
        }
        function os(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function ls(t) {
          t: for (;;) {
            for (; null === t.sibling; ) {
              if (null === t.return || os(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

            ) {
              if (2 & t.flags) continue t;
              if (null === t.child || 4 === t.tag) continue t;
              (t.child.return = t), (t = t.child);
            }
            if (!(2 & t.flags)) return t.stateNode;
          }
        }
        function ss(t, e, n) {
          var r = t.tag;
          if (5 === r || 6 === r)
            (t = t.stateNode),
              e
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(t, e)
                  : n.insertBefore(t, e)
                : (8 === n.nodeType
                    ? (e = n.parentNode).insertBefore(t, n)
                    : (e = n).appendChild(t),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== e.onclick ||
                    (e.onclick = Jr));
          else if (4 !== r && null !== (t = t.child))
            for (ss(t, e, n), t = t.sibling; null !== t; )
              ss(t, e, n), (t = t.sibling);
        }
        function us(t, e, n) {
          var r = t.tag;
          if (5 === r || 6 === r)
            (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
          else if (4 !== r && null !== (t = t.child))
            for (us(t, e, n), t = t.sibling; null !== t; )
              us(t, e, n), (t = t.sibling);
        }
        var cs = null,
          fs = !1;
        function hs(t, e, n) {
          for (n = n.child; null !== n; ) ds(t, e, n), (n = n.sibling);
        }
        function ds(t, e, n) {
          if (ae && 'function' === typeof ae.onCommitFiberUnmount)
            try {
              ae.onCommitFiberUnmount(ie, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              ql || Jl(n, e);
            case 6:
              var r = cs,
                i = fs;
              (cs = null),
                hs(t, e, n),
                (fs = i),
                null !== (cs = r) &&
                  (fs
                    ? ((t = cs),
                      (n = n.stateNode),
                      8 === t.nodeType
                        ? t.parentNode.removeChild(n)
                        : t.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((t = cs),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? si(t.parentNode, n)
                      : 1 === t.nodeType && si(t, n),
                    We(t))
                  : si(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (i = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                hs(t, e, n),
                (cs = r),
                (fs = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !ql &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var a = i,
                    o = a.destroy;
                  (a = a.tag),
                    void 0 !== o &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, e, o),
                    (i = i.next);
                } while (i !== r);
              }
              hs(t, e, n);
              break;
            case 1:
              if (
                !ql &&
                (Jl(n, e),
                'function' === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Su(n, e, l);
                }
              hs(t, e, n);
              break;
            case 21:
              hs(t, e, n);
              break;
            case 22:
              1 & n.mode
                ? ((ql = (r = ql) || null !== n.memoizedState),
                  hs(t, e, n),
                  (ql = r))
                : hs(t, e, n);
              break;
            default:
              hs(t, e, n);
          }
        }
        function ps(t) {
          var e = t.updateQueue;
          if (null !== e) {
            t.updateQueue = null;
            var n = t.stateNode;
            null === n && (n = t.stateNode = new Zl()),
              e.forEach(function (e) {
                var r = Cu.bind(null, t, e);
                n.has(e) || (n.add(e), e.then(r, r));
              });
          }
        }
        function vs(t, e) {
          var n = e.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var o = t,
                  l = e,
                  s = l;
                t: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break t;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break t;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(a(160));
                ds(o, l, i), (cs = null), (fs = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                Su(i, e, c);
              }
            }
          if (12854 & e.subtreeFlags)
            for (e = e.child; null !== e; ) gs(e, t), (e = e.sibling);
        }
        function gs(t, e) {
          var n = t.alternate,
            r = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vs(e, t), ys(t), 4 & r)) {
                try {
                  ns(3, t, t.return), rs(3, t);
                } catch (g) {
                  Su(t, t.return, g);
                }
                try {
                  ns(5, t, t.return);
                } catch (g) {
                  Su(t, t.return, g);
                }
              }
              break;
            case 1:
              vs(e, t), ys(t), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (
                (vs(e, t),
                ys(t),
                512 & r && null !== n && Jl(n, n.return),
                32 & t.flags)
              ) {
                var i = t.stateNode;
                try {
                  ht(i, '');
                } catch (g) {
                  Su(t, t.return, g);
                }
              }
              if (4 & r && null != (i = t.stateNode)) {
                var o = t.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = t.type,
                  u = t.updateQueue;
                if (((t.updateQueue = null), null !== u))
                  try {
                    'input' === s &&
                      'radio' === o.type &&
                      null != o.name &&
                      Z(i, o),
                      bt(s, l);
                    var c = bt(s, o);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        h = u[l + 1];
                      'style' === f
                        ? gt(i, h)
                        : 'dangerouslySetInnerHTML' === f
                        ? ft(i, h)
                        : 'children' === f
                        ? ht(i, h)
                        : b(i, f, h, c);
                    }
                    switch (s) {
                      case 'input':
                        K(i, o);
                        break;
                      case 'textarea':
                        at(i, o);
                        break;
                      case 'select':
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        null != p
                          ? nt(i, !!o.multiple, p, !1)
                          : d !== !!o.multiple &&
                            (null != o.defaultValue
                              ? nt(i, !!o.multiple, o.defaultValue, !0)
                              : nt(i, !!o.multiple, o.multiple ? [] : '', !1));
                    }
                    i[di] = o;
                  } catch (g) {
                    Su(t, t.return, g);
                  }
              }
              break;
            case 6:
              if ((vs(e, t), ys(t), 4 & r)) {
                if (null === t.stateNode) throw Error(a(162));
                (i = t.stateNode), (o = t.memoizedProps);
                try {
                  i.nodeValue = o;
                } catch (g) {
                  Su(t, t.return, g);
                }
              }
              break;
            case 3:
              if (
                (vs(e, t),
                ys(t),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  We(e.containerInfo);
                } catch (g) {
                  Su(t, t.return, g);
                }
              break;
            case 4:
            default:
              vs(e, t), ys(t);
              break;
            case 13:
              vs(e, t),
                ys(t),
                8192 & (i = t.child).flags &&
                  ((o = null !== i.memoizedState),
                  (i.stateNode.isHidden = o),
                  !o ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (Bs = Zt())),
                4 & r && ps(t);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & t.mode
                  ? ((ql = (c = ql) || f), vs(e, t), (ql = c))
                  : vs(e, t),
                ys(t),
                8192 & r)
              ) {
                if (
                  ((c = null !== t.memoizedState),
                  (t.stateNode.isHidden = c) && !f && 0 !== (1 & t.mode))
                )
                  for (Kl = t, f = t.child; null !== f; ) {
                    for (h = Kl = f; null !== Kl; ) {
                      switch (((p = (d = Kl).child), d.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, d, d.return);
                          break;
                        case 1:
                          Jl(d, d.return);
                          var v = d.stateNode;
                          if ('function' === typeof v.componentWillUnmount) {
                            (r = d), (n = d.return);
                            try {
                              (e = r),
                                (v.props = e.memoizedProps),
                                (v.state = e.memoizedState),
                                v.componentWillUnmount();
                            } catch (g) {
                              Su(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Jl(d, d.return);
                          break;
                        case 22:
                          if (null !== d.memoizedState) {
                            ks(h);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = d), (Kl = p)) : ks(h);
                    }
                    f = f.sibling;
                  }
                t: for (f = null, h = t; ; ) {
                  if (5 === h.tag) {
                    if (null === f) {
                      f = h;
                      try {
                        (i = h.stateNode),
                          c
                            ? 'function' === typeof (o = i.style).setProperty
                              ? o.setProperty('display', 'none', 'important')
                              : (o.display = 'none')
                            : ((s = h.stateNode),
                              (l =
                                void 0 !== (u = h.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = vt('display', l)));
                      } catch (g) {
                        Su(t, t.return, g);
                      }
                    }
                  } else if (6 === h.tag) {
                    if (null === f)
                      try {
                        h.stateNode.nodeValue = c ? '' : h.memoizedProps;
                      } catch (g) {
                        Su(t, t.return, g);
                      }
                  } else if (
                    ((22 !== h.tag && 23 !== h.tag) ||
                      null === h.memoizedState ||
                      h === t) &&
                    null !== h.child
                  ) {
                    (h.child.return = h), (h = h.child);
                    continue;
                  }
                  if (h === t) break t;
                  for (; null === h.sibling; ) {
                    if (null === h.return || h.return === t) break t;
                    f === h && (f = null), (h = h.return);
                  }
                  f === h && (f = null),
                    (h.sibling.return = h.return),
                    (h = h.sibling);
                }
              }
              break;
            case 19:
              vs(e, t), ys(t), 4 & r && ps(t);
            case 21:
          }
        }
        function ys(t) {
          var e = t.flags;
          if (2 & e) {
            try {
              t: {
                for (var n = t.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break t;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (ht(i, ''), (r.flags &= -33)),
                    us(t, ls(t), i);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(t, ls(t), o);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Su(t, t.return, l);
            }
            t.flags &= -3;
          }
          4096 & e && (t.flags &= -4097);
        }
        function ms(t, e, n) {
          (Kl = t), bs(t, e, n);
        }
        function bs(t, e, n) {
          for (var r = 0 !== (1 & t.mode); null !== Kl; ) {
            var i = Kl,
              a = i.child;
            if (22 === i.tag && r) {
              var o = null !== i.memoizedState || Ql;
              if (!o) {
                var l = i.alternate,
                  s = (null !== l && null !== l.memoizedState) || ql;
                l = Ql;
                var u = ql;
                if (((Ql = o), (ql = s) && !u))
                  for (Kl = i; null !== Kl; )
                    (s = (o = Kl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? _s(i)
                        : null !== s
                        ? ((s.return = o), (Kl = s))
                        : _s(i);
                for (; null !== a; ) (Kl = a), bs(a, e, n), (a = a.sibling);
                (Kl = i), (Ql = l), (ql = u);
              }
              xs(t);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== a
                ? ((a.return = i), (Kl = a))
                : xs(t);
          }
        }
        function xs(t) {
          for (; null !== Kl; ) {
            var e = Kl;
            if (0 !== (8772 & e.flags)) {
              var n = e.alternate;
              try {
                if (0 !== (8772 & e.flags))
                  switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ql || rs(5, e);
                      break;
                    case 1:
                      var r = e.stateNode;
                      if (4 & e.flags && !ql)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            e.elementType === e.type
                              ? n.memoizedProps
                              : ga(e.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = e.updateQueue;
                      null !== o && ja(e, o, r);
                      break;
                    case 3:
                      var l = e.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== e.child))
                          switch (e.child.tag) {
                            case 5:
                            case 1:
                              n = e.child.stateNode;
                          }
                        ja(e, l, n);
                      }
                      break;
                    case 5:
                      var s = e.stateNode;
                      if (null === n && 4 & e.flags) {
                        n = s;
                        var u = e.memoizedProps;
                        switch (e.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && n.focus();
                            break;
                          case 'img':
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === e.memoizedState) {
                        var c = e.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var h = f.dehydrated;
                            null !== h && We(h);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                ql || (512 & e.flags && is(e));
              } catch (d) {
                Su(e, e.return, d);
              }
            }
            if (e === t) {
              Kl = null;
              break;
            }
            if (null !== (n = e.sibling)) {
              (n.return = e.return), (Kl = n);
              break;
            }
            Kl = e.return;
          }
        }
        function ks(t) {
          for (; null !== Kl; ) {
            var e = Kl;
            if (e === t) {
              Kl = null;
              break;
            }
            var n = e.sibling;
            if (null !== n) {
              (n.return = e.return), (Kl = n);
              break;
            }
            Kl = e.return;
          }
        }
        function _s(t) {
          for (; null !== Kl; ) {
            var e = Kl;
            try {
              switch (e.tag) {
                case 0:
                case 11:
                case 15:
                  var n = e.return;
                  try {
                    rs(4, e);
                  } catch (s) {
                    Su(e, n, s);
                  }
                  break;
                case 1:
                  var r = e.stateNode;
                  if ('function' === typeof r.componentDidMount) {
                    var i = e.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Su(e, i, s);
                    }
                  }
                  var a = e.return;
                  try {
                    is(e);
                  } catch (s) {
                    Su(e, a, s);
                  }
                  break;
                case 5:
                  var o = e.return;
                  try {
                    is(e);
                  } catch (s) {
                    Su(e, o, s);
                  }
              }
            } catch (s) {
              Su(e, e.return, s);
            }
            if (e === t) {
              Kl = null;
              break;
            }
            var l = e.sibling;
            if (null !== l) {
              (l.return = e.return), (Kl = l);
              break;
            }
            Kl = e.return;
          }
        }
        var ws,
          Ss = Math.ceil,
          Ms = x.ReactCurrentDispatcher,
          Es = x.ReactCurrentOwner,
          Ps = x.ReactCurrentBatchConfig,
          Cs = 0,
          Os = null,
          As = null,
          Ts = 0,
          Ds = 0,
          Ls = Si(0),
          Rs = 0,
          Ns = null,
          Is = 0,
          zs = 0,
          js = 0,
          Fs = null,
          Vs = null,
          Bs = 0,
          Ws = 1 / 0,
          Hs = null,
          Us = !1,
          Ys = null,
          $s = null,
          Xs = !1,
          Gs = null,
          Qs = 0,
          qs = 0,
          Zs = null,
          Ks = -1,
          Js = 0;
        function tu() {
          return 0 !== (6 & Cs) ? Zt() : -1 !== Ks ? Ks : (Ks = Zt());
        }
        function eu(t) {
          return 0 === (1 & t.mode)
            ? 1
            : 0 !== (2 & Cs) && 0 !== Ts
            ? Ts & -Ts
            : null !== va.transition
            ? (0 === Js && (Js = ve()), Js)
            : 0 !== (t = be)
            ? t
            : (t = void 0 === (t = window.event) ? 16 : qe(t.type));
        }
        function nu(t, e, n, r) {
          if (50 < qs) throw ((qs = 0), (Zs = null), Error(a(185)));
          ye(t, n, r),
            (0 !== (2 & Cs) && t === Os) ||
              (t === Os && (0 === (2 & Cs) && (zs |= n), 4 === Rs && lu(t, Ts)),
              ru(t, r),
              1 === n &&
                0 === Cs &&
                0 === (1 & e.mode) &&
                ((Ws = Zt() + 500), Fi && Wi()));
        }
        function ru(t, e) {
          var n = t.callbackNode;
          !(function (t, e) {
            for (
              var n = t.suspendedLanes,
                r = t.pingedLanes,
                i = t.expirationTimes,
                a = t.pendingLanes;
              0 < a;

            ) {
              var o = 31 - oe(a),
                l = 1 << o,
                s = i[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (i[o] = de(l, e))
                : s <= e && (t.expiredLanes |= l),
                (a &= ~l);
            }
          })(t, e);
          var r = he(t, t === Os ? Ts : 0);
          if (0 === r)
            null !== n && Gt(n),
              (t.callbackNode = null),
              (t.callbackPriority = 0);
          else if (((e = r & -r), t.callbackPriority !== e)) {
            if ((null != n && Gt(n), 1 === e))
              0 === t.tag
                ? (function (t) {
                    (Fi = !0), Bi(t);
                  })(su.bind(null, t))
                : Bi(su.bind(null, t)),
                oi(function () {
                  0 === (6 & Cs) && Wi();
                }),
                (n = null);
            else {
              switch (xe(r)) {
                case 1:
                  n = Jt;
                  break;
                case 4:
                  n = te;
                  break;
                case 16:
                default:
                  n = ee;
                  break;
                case 536870912:
                  n = re;
              }
              n = Ou(n, iu.bind(null, t));
            }
            (t.callbackPriority = e), (t.callbackNode = n);
          }
        }
        function iu(t, e) {
          if (((Ks = -1), (Js = 0), 0 !== (6 & Cs))) throw Error(a(327));
          var n = t.callbackNode;
          if (_u() && t.callbackNode !== n) return null;
          var r = he(t, t === Os ? Ts : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & t.expiredLanes) || e) e = gu(t, r);
          else {
            e = r;
            var i = Cs;
            Cs |= 2;
            var o = pu();
            for (
              (Os === t && Ts === e) ||
              ((Hs = null), (Ws = Zt() + 500), hu(t, e));
              ;

            )
              try {
                mu();
                break;
              } catch (s) {
                du(t, s);
              }
            ka(),
              (Ms.current = o),
              (Cs = i),
              null !== As ? (e = 0) : ((Os = null), (Ts = 0), (e = Rs));
          }
          if (0 !== e) {
            if (
              (2 === e && 0 !== (i = pe(t)) && ((r = i), (e = au(t, i))),
              1 === e)
            )
              throw ((n = Ns), hu(t, 0), lu(t, r), ru(t, Zt()), n);
            if (6 === e) lu(t, r);
            else {
              if (
                ((i = t.current.alternate),
                0 === (30 & r) &&
                  !(function (t) {
                    for (var e = t; ; ) {
                      if (16384 & e.flags) {
                        var n = e.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              a = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!lr(a(), i)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = e.child), 16384 & e.subtreeFlags && null !== n))
                        (n.return = e), (e = n);
                      else {
                        if (e === t) break;
                        for (; null === e.sibling; ) {
                          if (null === e.return || e.return === t) return !0;
                          e = e.return;
                        }
                        (e.sibling.return = e.return), (e = e.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (e = gu(t, r)) &&
                    0 !== (o = pe(t)) &&
                    ((r = o), (e = au(t, o))),
                  1 === e))
              )
                throw ((n = Ns), hu(t, 0), lu(t, r), ru(t, Zt()), n);
              switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ku(t, Vs, Hs);
                  break;
                case 3:
                  if (
                    (lu(t, r),
                    (130023424 & r) === r && 10 < (e = Bs + 500 - Zt()))
                  ) {
                    if (0 !== he(t, 0)) break;
                    if (((i = t.suspendedLanes) & r) !== r) {
                      tu(), (t.pingedLanes |= t.suspendedLanes & i);
                      break;
                    }
                    t.timeoutHandle = ri(ku.bind(null, t, Vs, Hs), e);
                    break;
                  }
                  ku(t, Vs, Hs);
                  break;
                case 4:
                  if ((lu(t, r), (4194240 & r) === r)) break;
                  for (e = t.eventTimes, i = -1; 0 < r; ) {
                    var l = 31 - oe(r);
                    (o = 1 << l), (l = e[l]) > i && (i = l), (r &= ~o);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Zt() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    t.timeoutHandle = ri(ku.bind(null, t, Vs, Hs), r);
                    break;
                  }
                  ku(t, Vs, Hs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ru(t, Zt()), t.callbackNode === n ? iu.bind(null, t) : null;
        }
        function au(t, e) {
          var n = Fs;
          return (
            t.current.memoizedState.isDehydrated && (hu(t, e).flags |= 256),
            2 !== (t = gu(t, e)) && ((e = Vs), (Vs = n), null !== e && ou(e)),
            t
          );
        }
        function ou(t) {
          null === Vs ? (Vs = t) : Vs.push.apply(Vs, t);
        }
        function lu(t, e) {
          for (
            e &= ~js,
              e &= ~zs,
              t.suspendedLanes |= e,
              t.pingedLanes &= ~e,
              t = t.expirationTimes;
            0 < e;

          ) {
            var n = 31 - oe(e),
              r = 1 << n;
            (t[n] = -1), (e &= ~r);
          }
        }
        function su(t) {
          if (0 !== (6 & Cs)) throw Error(a(327));
          _u();
          var e = he(t, 0);
          if (0 === (1 & e)) return ru(t, Zt()), null;
          var n = gu(t, e);
          if (0 !== t.tag && 2 === n) {
            var r = pe(t);
            0 !== r && ((e = r), (n = au(t, r)));
          }
          if (1 === n) throw ((n = Ns), hu(t, 0), lu(t, e), ru(t, Zt()), n);
          if (6 === n) throw Error(a(345));
          return (
            (t.finishedWork = t.current.alternate),
            (t.finishedLanes = e),
            ku(t, Vs, Hs),
            ru(t, Zt()),
            null
          );
        }
        function uu(t, e) {
          var n = Cs;
          Cs |= 1;
          try {
            return t(e);
          } finally {
            0 === (Cs = n) && ((Ws = Zt() + 500), Fi && Wi());
          }
        }
        function cu(t) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Cs) && _u();
          var e = Cs;
          Cs |= 1;
          var n = Ps.transition,
            r = be;
          try {
            if (((Ps.transition = null), (be = 1), t)) return t();
          } finally {
            (be = r), (Ps.transition = n), 0 === (6 & (Cs = e)) && Wi();
          }
        }
        function fu() {
          (Ds = Ls.current), Mi(Ls);
        }
        function hu(t, e) {
          (t.finishedWork = null), (t.finishedLanes = 0);
          var n = t.timeoutHandle;
          if ((-1 !== n && ((t.timeoutHandle = -1), ii(n)), null !== As))
            for (n = As.return; null !== n; ) {
              var r = n;
              switch ((ea(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Li();
                  break;
                case 3:
                  io(), Mi(Oi), Mi(Ci), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  io();
                  break;
                case 13:
                case 19:
                  Mi(lo);
                  break;
                case 10:
                  _a(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Os = t),
            (As = t = Lu(t.current, null)),
            (Ts = Ds = e),
            (Rs = 0),
            (Ns = null),
            (js = zs = Is = 0),
            (Vs = Fs = null),
            null !== Ea)
          ) {
            for (e = 0; e < Ea.length; e++)
              if (null !== (r = (n = Ea[e]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  a = n.pending;
                if (null !== a) {
                  var o = a.next;
                  (a.next = i), (r.next = o);
                }
                n.pending = r;
              }
            Ea = null;
          }
          return t;
        }
        function du(t, e) {
          for (;;) {
            var n = As;
            try {
              if ((ka(), (fo.current = ol), mo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                mo = !1;
              }
              if (
                ((po = 0),
                (yo = go = vo = null),
                (bo = !1),
                (xo = 0),
                (Es.current = null),
                null === n || null === n.return)
              ) {
                (Rs = 1), (Ns = e), (As = null);
                break;
              }
              t: {
                var o = t,
                  l = n.return,
                  s = n,
                  u = e;
                if (
                  ((e = Ts),
                  (s.flags |= 32768),
                  null !== u &&
                    'object' === typeof u &&
                    'function' === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    h = f.tag;
                  if (0 === (1 & f.mode) && (0 === h || 11 === h || 15 === h)) {
                    var d = f.alternate;
                    d
                      ? ((f.updateQueue = d.updateQueue),
                        (f.memoizedState = d.memoizedState),
                        (f.lanes = d.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var p = yl(l);
                  if (null !== p) {
                    (p.flags &= -257),
                      ml(p, l, s, 0, e),
                      1 & p.mode && gl(o, c, e),
                      (u = c);
                    var v = (e = p).updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(u), (e.updateQueue = g);
                    } else v.add(u);
                    break t;
                  }
                  if (0 === (1 & e)) {
                    gl(o, c, e), vu();
                    break t;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & s.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      ml(y, l, s, 0, e),
                      pa(cl(u, s));
                    break t;
                  }
                }
                (o = u = cl(u, s)),
                  4 !== Rs && (Rs = 2),
                  null === Fs ? (Fs = [o]) : Fs.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (e &= -e),
                        (o.lanes |= e),
                        Ia(o, pl(0, u, e));
                      break t;
                    case 1:
                      s = u;
                      var m = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ('function' === typeof m.getDerivedStateFromError ||
                          (null !== b &&
                            'function' === typeof b.componentDidCatch &&
                            (null === $s || !$s.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (e &= -e),
                          (o.lanes |= e),
                          Ia(o, vl(o, s, e));
                        break t;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xu(n);
            } catch (x) {
              (e = x), As === n && null !== n && (As = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var t = Ms.current;
          return (Ms.current = ol), null === t ? ol : t;
        }
        function vu() {
          (0 !== Rs && 3 !== Rs && 2 !== Rs) || (Rs = 4),
            null === Os ||
              (0 === (268435455 & Is) && 0 === (268435455 & zs)) ||
              lu(Os, Ts);
        }
        function gu(t, e) {
          var n = Cs;
          Cs |= 2;
          var r = pu();
          for ((Os === t && Ts === e) || ((Hs = null), hu(t, e)); ; )
            try {
              yu();
              break;
            } catch (i) {
              du(t, i);
            }
          if ((ka(), (Cs = n), (Ms.current = r), null !== As))
            throw Error(a(261));
          return (Os = null), (Ts = 0), Rs;
        }
        function yu() {
          for (; null !== As; ) bu(As);
        }
        function mu() {
          for (; null !== As && !Qt(); ) bu(As);
        }
        function bu(t) {
          var e = ws(t.alternate, t, Ds);
          (t.memoizedProps = t.pendingProps),
            null === e ? xu(t) : (As = e),
            (Es.current = null);
        }
        function xu(t) {
          var e = t;
          do {
            var n = e.alternate;
            if (((t = e.return), 0 === (32768 & e.flags))) {
              if (null !== (n = Xl(n, e, Ds))) return void (As = n);
            } else {
              if (null !== (n = Gl(n, e)))
                return (n.flags &= 32767), void (As = n);
              if (null === t) return (Rs = 6), void (As = null);
              (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            }
            if (null !== (e = e.sibling)) return void (As = e);
            As = e = t;
          } while (null !== e);
          0 === Rs && (Rs = 5);
        }
        function ku(t, e, n) {
          var r = be,
            i = Ps.transition;
          try {
            (Ps.transition = null),
              (be = 1),
              (function (t, e, n, r) {
                do {
                  _u();
                } while (null !== Gs);
                if (0 !== (6 & Cs)) throw Error(a(327));
                n = t.finishedWork;
                var i = t.finishedLanes;
                if (null === n) return null;
                if (
                  ((t.finishedWork = null),
                  (t.finishedLanes = 0),
                  n === t.current)
                )
                  throw Error(a(177));
                (t.callbackNode = null), (t.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (t, e) {
                    var n = t.pendingLanes & ~e;
                    (t.pendingLanes = e),
                      (t.suspendedLanes = 0),
                      (t.pingedLanes = 0),
                      (t.expiredLanes &= e),
                      (t.mutableReadLanes &= e),
                      (t.entangledLanes &= e),
                      (e = t.entanglements);
                    var r = t.eventTimes;
                    for (t = t.expirationTimes; 0 < n; ) {
                      var i = 31 - oe(n),
                        a = 1 << i;
                      (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~a);
                    }
                  })(t, o),
                  t === Os && ((As = Os = null), (Ts = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xs ||
                    ((Xs = !0),
                    Ou(ee, function () {
                      return _u(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ps.transition), (Ps.transition = null);
                  var l = be;
                  be = 1;
                  var s = Cs;
                  (Cs |= 4),
                    (Es.current = null),
                    (function (t, e) {
                      if (((ti = Ue), dr((t = hr())))) {
                        if ('selectionStart' in t)
                          var n = {
                            start: t.selectionStart,
                            end: t.selectionEnd,
                          };
                        else
                          t: {
                            var r =
                              (n =
                                ((n = t.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break t;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                h = t,
                                d = null;
                              e: for (;;) {
                                for (
                                  var p;
                                  h !== n ||
                                    (0 !== i && 3 !== h.nodeType) ||
                                    (s = l + i),
                                    h !== o ||
                                      (0 !== r && 3 !== h.nodeType) ||
                                      (u = l + r),
                                    3 === h.nodeType &&
                                      (l += h.nodeValue.length),
                                    null !== (p = h.firstChild);

                                )
                                  (d = h), (h = p);
                                for (;;) {
                                  if (h === t) break e;
                                  if (
                                    (d === n && ++c === i && (s = l),
                                    d === o && ++f === r && (u = l),
                                    null !== (p = h.nextSibling))
                                  )
                                    break;
                                  d = (h = d).parentNode;
                                }
                                h = p;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ei = { focusedElem: t, selectionRange: n },
                          Ue = !1,
                          Kl = e;
                        null !== Kl;

                      )
                        if (
                          ((t = (e = Kl).child),
                          0 !== (1028 & e.subtreeFlags) && null !== t)
                        )
                          (t.return = e), (Kl = t);
                        else
                          for (; null !== Kl; ) {
                            e = Kl;
                            try {
                              var v = e.alternate;
                              if (0 !== (1024 & e.flags))
                                switch (e.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var g = v.memoizedProps,
                                        y = v.memoizedState,
                                        m = e.stateNode,
                                        b = m.getSnapshotBeforeUpdate(
                                          e.elementType === e.type
                                            ? g
                                            : ga(e.type, g),
                                          y
                                        );
                                      m.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = e.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (k) {
                              Su(e, e.return, k);
                            }
                            if (null !== (t = e.sibling)) {
                              (t.return = e.return), (Kl = t);
                              break;
                            }
                            Kl = e.return;
                          }
                      (v = es), (es = !1);
                    })(t, n),
                    gs(n, t),
                    pr(ei),
                    (Ue = !!ti),
                    (ei = ti = null),
                    (t.current = n),
                    ms(n, t, i),
                    qt(),
                    (Cs = s),
                    (be = l),
                    (Ps.transition = o);
                } else t.current = n;
                if (
                  (Xs && ((Xs = !1), (Gs = t), (Qs = i)),
                  0 === (o = t.pendingLanes) && ($s = null),
                  (function (t) {
                    if (ae && 'function' === typeof ae.onCommitFiberRoot)
                      try {
                        ae.onCommitFiberRoot(
                          ie,
                          t,
                          void 0,
                          128 === (128 & t.current.flags)
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  ru(t, Zt()),
                  null !== e)
                )
                  for (r = t.onRecoverableError, n = 0; n < e.length; n++)
                    r((i = e[n]).value, {
                      componentStack: i.stack,
                      digest: i.digest,
                    });
                if (Us) throw ((Us = !1), (t = Ys), (Ys = null), t);
                0 !== (1 & Qs) && 0 !== t.tag && _u(),
                  0 !== (1 & (o = t.pendingLanes))
                    ? t === Zs
                      ? qs++
                      : ((qs = 0), (Zs = t))
                    : (qs = 0),
                  Wi();
              })(t, e, n, r);
          } finally {
            (Ps.transition = i), (be = r);
          }
          return null;
        }
        function _u() {
          if (null !== Gs) {
            var t = xe(Qs),
              e = Ps.transition,
              n = be;
            try {
              if (((Ps.transition = null), (be = 16 > t ? 16 : t), null === Gs))
                var r = !1;
              else {
                if (((t = Gs), (Gs = null), (Qs = 0), 0 !== (6 & Cs)))
                  throw Error(a(331));
                var i = Cs;
                for (Cs |= 4, Kl = t.current; null !== Kl; ) {
                  var o = Kl,
                    l = o.child;
                  if (0 !== (16 & Kl.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Kl = c; null !== Kl; ) {
                          var f = Kl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, o);
                          }
                          var h = f.child;
                          if (null !== h) (h.return = f), (Kl = h);
                          else
                            for (; null !== Kl; ) {
                              var d = (f = Kl).sibling,
                                p = f.return;
                              if ((as(f), f === c)) {
                                Kl = null;
                                break;
                              }
                              if (null !== d) {
                                (d.return = p), (Kl = d);
                                break;
                              }
                              Kl = p;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var g = v.child;
                        if (null !== g) {
                          v.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Kl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Kl = l);
                  else
                    t: for (; null !== Kl; ) {
                      if (0 !== (2048 & (o = Kl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var m = o.sibling;
                      if (null !== m) {
                        (m.return = o.return), (Kl = m);
                        break t;
                      }
                      Kl = o.return;
                    }
                }
                var b = t.current;
                for (Kl = b; null !== Kl; ) {
                  var x = (l = Kl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), (Kl = x);
                  else
                    t: for (l = b; null !== Kl; ) {
                      if (0 !== (2048 & (s = Kl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (_) {
                          Su(s, s.return, _);
                        }
                      if (s === l) {
                        Kl = null;
                        break t;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Kl = k);
                        break t;
                      }
                      Kl = s.return;
                    }
                }
                if (
                  ((Cs = i),
                  Wi(),
                  ae && 'function' === typeof ae.onPostCommitFiberRoot)
                )
                  try {
                    ae.onPostCommitFiberRoot(ie, t);
                  } catch (_) {}
                r = !0;
              }
              return r;
            } finally {
              (be = n), (Ps.transition = e);
            }
          }
          return !1;
        }
        function wu(t, e, n) {
          (t = Ra(t, (e = pl(0, (e = cl(n, e)), 1)), 1)),
            (e = tu()),
            null !== t && (ye(t, 1, e), ru(t, e));
        }
        function Su(t, e, n) {
          if (3 === t.tag) wu(t, t, n);
          else
            for (; null !== e; ) {
              if (3 === e.tag) {
                wu(e, t, n);
                break;
              }
              if (1 === e.tag) {
                var r = e.stateNode;
                if (
                  'function' === typeof e.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === $s || !$s.has(r)))
                ) {
                  (e = Ra(e, (t = vl(e, (t = cl(n, t)), 1)), 1)),
                    (t = tu()),
                    null !== e && (ye(e, 1, t), ru(e, t));
                  break;
                }
              }
              e = e.return;
            }
        }
        function Mu(t, e, n) {
          var r = t.pingCache;
          null !== r && r.delete(e),
            (e = tu()),
            (t.pingedLanes |= t.suspendedLanes & n),
            Os === t &&
              (Ts & n) === n &&
              (4 === Rs ||
              (3 === Rs && (130023424 & Ts) === Ts && 500 > Zt() - Bs)
                ? hu(t, 0)
                : (js |= n)),
            ru(t, e);
        }
        function Eu(t, e) {
          0 === e &&
            (0 === (1 & t.mode)
              ? (e = 1)
              : ((e = ce), 0 === (130023424 & (ce <<= 1)) && (ce = 4194304)));
          var n = tu();
          null !== (t = Oa(t, e)) && (ye(t, e, n), ru(t, n));
        }
        function Pu(t) {
          var e = t.memoizedState,
            n = 0;
          null !== e && (n = e.retryLane), Eu(t, n);
        }
        function Cu(t, e) {
          var n = 0;
          switch (t.tag) {
            case 13:
              var r = t.stateNode,
                i = t.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = t.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(e), Eu(t, n);
        }
        function Ou(t, e) {
          return Xt(t, e);
        }
        function Au(t, e, n, r) {
          (this.tag = t),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = e),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Tu(t, e, n, r) {
          return new Au(t, e, n, r);
        }
        function Du(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function Lu(t, e) {
          var n = t.alternate;
          return (
            null === n
              ? (((n = Tu(t.tag, e, t.key, t.mode)).elementType =
                  t.elementType),
                (n.type = t.type),
                (n.stateNode = t.stateNode),
                (n.alternate = t),
                (t.alternate = n))
              : ((n.pendingProps = e),
                (n.type = t.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & t.flags),
            (n.childLanes = t.childLanes),
            (n.lanes = t.lanes),
            (n.child = t.child),
            (n.memoizedProps = t.memoizedProps),
            (n.memoizedState = t.memoizedState),
            (n.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (n.dependencies =
              null === e
                ? null
                : { lanes: e.lanes, firstContext: e.firstContext }),
            (n.sibling = t.sibling),
            (n.index = t.index),
            (n.ref = t.ref),
            n
          );
        }
        function Ru(t, e, n, r, i, o) {
          var l = 2;
          if (((r = t), 'function' === typeof t)) Du(t) && (l = 1);
          else if ('string' === typeof t) l = 5;
          else
            t: switch (t) {
              case w:
                return Nu(n.children, i, o, e);
              case S:
                (l = 8), (i |= 8);
                break;
              case M:
                return (
                  ((t = Tu(12, n, e, 2 | i)).elementType = M), (t.lanes = o), t
                );
              case O:
                return (
                  ((t = Tu(13, n, e, i)).elementType = O), (t.lanes = o), t
                );
              case A:
                return (
                  ((t = Tu(19, n, e, i)).elementType = A), (t.lanes = o), t
                );
              case L:
                return Iu(n, i, o, e);
              default:
                if ('object' === typeof t && null !== t)
                  switch (t.$$typeof) {
                    case E:
                      l = 10;
                      break t;
                    case P:
                      l = 9;
                      break t;
                    case C:
                      l = 11;
                      break t;
                    case T:
                      l = 14;
                      break t;
                    case D:
                      (l = 16), (r = null);
                      break t;
                  }
                throw Error(a(130, null == t ? t : typeof t, ''));
            }
          return (
            ((e = Tu(l, n, e, i)).elementType = t),
            (e.type = r),
            (e.lanes = o),
            e
          );
        }
        function Nu(t, e, n, r) {
          return ((t = Tu(7, t, r, e)).lanes = n), t;
        }
        function Iu(t, e, n, r) {
          return (
            ((t = Tu(22, t, r, e)).elementType = L),
            (t.lanes = n),
            (t.stateNode = { isHidden: !1 }),
            t
          );
        }
        function zu(t, e, n) {
          return ((t = Tu(6, t, null, e)).lanes = n), t;
        }
        function ju(t, e, n) {
          return (
            ((e = Tu(
              4,
              null !== t.children ? t.children : [],
              t.key,
              e
            )).lanes = n),
            (e.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            }),
            e
          );
        }
        function Fu(t, e, n, r, i) {
          (this.tag = e),
            (this.containerInfo = t),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ge(0)),
            (this.expirationTimes = ge(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ge(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vu(t, e, n, r, i, a, o, l, s) {
          return (
            (t = new Fu(t, e, n, l, s)),
            1 === e ? ((e = 1), !0 === a && (e |= 8)) : (e = 0),
            (a = Tu(3, null, null, e)),
            (t.current = a),
            (a.stateNode = t),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ta(a),
            t
          );
        }
        function Bu(t, e, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: _,
            key: null == r ? null : '' + r,
            children: t,
            containerInfo: e,
            implementation: n,
          };
        }
        function Wu(t) {
          if (!t) return Pi;
          t: {
            if (Wt((t = t._reactInternals)) !== t || 1 !== t.tag)
              throw Error(a(170));
            var e = t;
            do {
              switch (e.tag) {
                case 3:
                  e = e.stateNode.context;
                  break t;
                case 1:
                  if (Di(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              e = e.return;
            } while (null !== e);
            throw Error(a(171));
          }
          if (1 === t.tag) {
            var n = t.type;
            if (Di(n)) return Ni(t, n, e);
          }
          return e;
        }
        function Hu(t, e, n, r, i, a, o, l, s) {
          return (
            ((t = Vu(n, r, !0, t, 0, a, 0, l, s)).context = Wu(null)),
            (n = t.current),
            ((a = La((r = tu()), (i = eu(n)))).callback =
              void 0 !== e && null !== e ? e : null),
            Ra(n, a, i),
            (t.current.lanes = i),
            ye(t, i, r),
            ru(t, r),
            t
          );
        }
        function Uu(t, e, n, r) {
          var i = e.current,
            a = tu(),
            o = eu(i);
          return (
            (n = Wu(n)),
            null === e.context ? (e.context = n) : (e.pendingContext = n),
            ((e = La(a, o)).payload = { element: t }),
            null !== (r = void 0 === r ? null : r) && (e.callback = r),
            null !== (t = Ra(i, e, o)) && (nu(t, i, o, a), Na(t, i, o)),
            o
          );
        }
        function Yu(t) {
          return (t = t.current).child
            ? (t.child.tag, t.child.stateNode)
            : null;
        }
        function $u(t, e) {
          if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
            var n = t.retryLane;
            t.retryLane = 0 !== n && n < e ? n : e;
          }
        }
        function Xu(t, e) {
          $u(t, e), (t = t.alternate) && $u(t, e);
        }
        ws = function (t, e, n) {
          if (null !== t)
            if (t.memoizedProps !== e.pendingProps || Oi.current) xl = !0;
            else {
              if (0 === (t.lanes & n) && 0 === (128 & e.flags))
                return (
                  (xl = !1),
                  (function (t, e, n) {
                    switch (e.tag) {
                      case 3:
                        Al(e), da();
                        break;
                      case 5:
                        ao(e);
                        break;
                      case 1:
                        Di(e.type) && Ii(e);
                        break;
                      case 4:
                        ro(e, e.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = e.type._context,
                          i = e.memoizedProps.value;
                        Ei(ya, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = e.memoizedState))
                          return null !== r.dehydrated
                            ? (Ei(lo, 1 & lo.current), (e.flags |= 128), null)
                            : 0 !== (n & e.child.childLanes)
                            ? zl(t, e, n)
                            : (Ei(lo, 1 & lo.current),
                              null !== (t = Ul(t, e, n)) ? t.sibling : null);
                        Ei(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & e.childLanes)),
                          0 !== (128 & t.flags))
                        ) {
                          if (r) return Wl(t, e, n);
                          e.flags |= 128;
                        }
                        if (
                          (null !== (i = e.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ei(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (e.lanes = 0), Ml(t, e, n);
                    }
                    return Ul(t, e, n);
                  })(t, e, n)
                );
              xl = 0 !== (131072 & t.flags);
            }
          else (xl = !1), ia && 0 !== (1048576 & e.flags) && Ji(e, $i, e.index);
          switch (((e.lanes = 0), e.tag)) {
            case 2:
              var r = e.type;
              Hl(t, e), (t = e.pendingProps);
              var i = Ti(e, Ci.current);
              Sa(e, n), (i = So(null, e, r, t, i, n));
              var o = Mo();
              return (
                (e.flags |= 1),
                'object' === typeof i &&
                null !== i &&
                'function' === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((e.tag = 1),
                    (e.memoizedState = null),
                    (e.updateQueue = null),
                    Di(r) ? ((o = !0), Ii(e)) : (o = !1),
                    (e.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Ta(e),
                    (i.updater = Ba),
                    (e.stateNode = i),
                    (i._reactInternals = e),
                    Ya(e, r, t, n),
                    (e = Ol(null, e, r, !0, o, n)))
                  : ((e.tag = 0),
                    ia && o && ta(e),
                    kl(null, e, i, n),
                    (e = e.child)),
                e
              );
            case 16:
              r = e.elementType;
              t: {
                switch (
                  (Hl(t, e),
                  (t = e.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (e.type = r),
                  (i = e.tag =
                    (function (t) {
                      if ('function' === typeof t) return Du(t) ? 1 : 0;
                      if (void 0 !== t && null !== t) {
                        if ((t = t.$$typeof) === C) return 11;
                        if (t === T) return 14;
                      }
                      return 2;
                    })(r)),
                  (t = ga(r, t)),
                  i)
                ) {
                  case 0:
                    e = Pl(null, e, r, t, n);
                    break t;
                  case 1:
                    e = Cl(null, e, r, t, n);
                    break t;
                  case 11:
                    e = _l(null, e, r, t, n);
                    break t;
                  case 14:
                    e = wl(null, e, r, ga(r.type, t), n);
                    break t;
                }
                throw Error(a(306, r, ''));
              }
              return e;
            case 0:
              return (
                (r = e.type),
                (i = e.pendingProps),
                Pl(t, e, r, (i = e.elementType === r ? i : ga(r, i)), n)
              );
            case 1:
              return (
                (r = e.type),
                (i = e.pendingProps),
                Cl(t, e, r, (i = e.elementType === r ? i : ga(r, i)), n)
              );
            case 3:
              t: {
                if ((Al(e), null === t)) throw Error(a(387));
                (r = e.pendingProps),
                  (i = (o = e.memoizedState).element),
                  Da(t, e),
                  za(e, r, null, n);
                var l = e.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (e.updateQueue.baseState = o),
                    (e.memoizedState = o),
                    256 & e.flags)
                  ) {
                    e = Tl(t, e, r, n, (i = cl(Error(a(423)), e)));
                    break t;
                  }
                  if (r !== i) {
                    e = Tl(t, e, r, n, (i = cl(Error(a(424)), e)));
                    break t;
                  }
                  for (
                    ra = ui(e.stateNode.containerInfo.firstChild),
                      na = e,
                      ia = !0,
                      aa = null,
                      n = Za(e, null, r, n),
                      e.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((da(), r === i)) {
                    e = Ul(t, e, n);
                    break t;
                  }
                  kl(t, e, r, n);
                }
                e = e.child;
              }
              return e;
            case 5:
              return (
                ao(e),
                null === t && ua(e),
                (r = e.type),
                (i = e.pendingProps),
                (o = null !== t ? t.memoizedProps : null),
                (l = i.children),
                ni(r, i)
                  ? (l = null)
                  : null !== o && ni(r, o) && (e.flags |= 32),
                El(t, e),
                kl(t, e, l, n),
                e.child
              );
            case 6:
              return null === t && ua(e), null;
            case 13:
              return zl(t, e, n);
            case 4:
              return (
                ro(e, e.stateNode.containerInfo),
                (r = e.pendingProps),
                null === t ? (e.child = qa(e, null, r, n)) : kl(t, e, r, n),
                e.child
              );
            case 11:
              return (
                (r = e.type),
                (i = e.pendingProps),
                _l(t, e, r, (i = e.elementType === r ? i : ga(r, i)), n)
              );
            case 7:
              return kl(t, e, e.pendingProps, n), e.child;
            case 8:
            case 12:
              return kl(t, e, e.pendingProps.children, n), e.child;
            case 10:
              t: {
                if (
                  ((r = e.type._context),
                  (i = e.pendingProps),
                  (o = e.memoizedProps),
                  (l = i.value),
                  Ei(ya, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === i.children && !Oi.current) {
                      e = Ul(t, e, n);
                      break t;
                    }
                  } else
                    for (
                      null !== (o = e.child) && (o.return = e);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = La(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              wa(o.return, n, e),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === e.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          wa(l, n, e),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === e) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                kl(t, e, i.children, n), (e = e.child);
              }
              return e;
            case 9:
              return (
                (i = e.type),
                (r = e.pendingProps.children),
                Sa(e, n),
                (r = r((i = Ma(i)))),
                (e.flags |= 1),
                kl(t, e, r, n),
                e.child
              );
            case 14:
              return (
                (i = ga((r = e.type), e.pendingProps)),
                wl(t, e, r, (i = ga(r.type, i)), n)
              );
            case 15:
              return Sl(t, e, e.type, e.pendingProps, n);
            case 17:
              return (
                (r = e.type),
                (i = e.pendingProps),
                (i = e.elementType === r ? i : ga(r, i)),
                Hl(t, e),
                (e.tag = 1),
                Di(r) ? ((t = !0), Ii(e)) : (t = !1),
                Sa(e, n),
                Ha(e, r, i),
                Ya(e, r, i, n),
                Ol(null, e, r, !0, t, n)
              );
            case 19:
              return Wl(t, e, n);
            case 22:
              return Ml(t, e, n);
          }
          throw Error(a(156, e.tag));
        };
        var Gu =
          'function' === typeof reportError
            ? reportError
            : function (t) {
                console.error(t);
              };
        function Qu(t) {
          this._internalRoot = t;
        }
        function qu(t) {
          this._internalRoot = t;
        }
        function Zu(t) {
          return !(
            !t ||
            (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
          );
        }
        function Ku(t) {
          return !(
            !t ||
            (1 !== t.nodeType &&
              9 !== t.nodeType &&
              11 !== t.nodeType &&
              (8 !== t.nodeType ||
                ' react-mount-point-unstable ' !== t.nodeValue))
          );
        }
        function Ju() {}
        function tc(t, e, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a;
            if ('function' === typeof i) {
              var l = i;
              i = function () {
                var t = Yu(o);
                l.call(t);
              };
            }
            Uu(e, o, t, i);
          } else
            o = (function (t, e, n, r, i) {
              if (i) {
                if ('function' === typeof r) {
                  var a = r;
                  r = function () {
                    var t = Yu(o);
                    a.call(t);
                  };
                }
                var o = Hu(e, r, t, 0, null, !1, 0, '', Ju);
                return (
                  (t._reactRootContainer = o),
                  (t[pi] = o.current),
                  Wr(8 === t.nodeType ? t.parentNode : t),
                  cu(),
                  o
                );
              }
              for (; (i = t.lastChild); ) t.removeChild(i);
              if ('function' === typeof r) {
                var l = r;
                r = function () {
                  var t = Yu(s);
                  l.call(t);
                };
              }
              var s = Vu(t, 0, !1, null, 0, !1, 0, '', Ju);
              return (
                (t._reactRootContainer = s),
                (t[pi] = s.current),
                Wr(8 === t.nodeType ? t.parentNode : t),
                cu(function () {
                  Uu(e, s, n, r);
                }),
                s
              );
            })(n, e, t, i, r);
          return Yu(o);
        }
        (qu.prototype.render = Qu.prototype.render =
          function (t) {
            var e = this._internalRoot;
            if (null === e) throw Error(a(409));
            Uu(t, e, null, null);
          }),
          (qu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var t = this._internalRoot;
              if (null !== t) {
                this._internalRoot = null;
                var e = t.containerInfo;
                cu(function () {
                  Uu(null, t, null, null);
                }),
                  (e[pi] = null);
              }
            }),
          (qu.prototype.unstable_scheduleHydration = function (t) {
            if (t) {
              var e = Se();
              t = { blockedOn: null, target: t, priority: e };
              for (
                var n = 0;
                n < Le.length && 0 !== e && e < Le[n].priority;
                n++
              );
              Le.splice(n, 0, t), 0 === n && ze(t);
            }
          }),
          (ke = function (t) {
            switch (t.tag) {
              case 3:
                var e = t.stateNode;
                if (e.current.memoizedState.isDehydrated) {
                  var n = fe(e.pendingLanes);
                  0 !== n &&
                    (me(e, 1 | n),
                    ru(e, Zt()),
                    0 === (6 & Cs) && ((Ws = Zt() + 500), Wi()));
                }
                break;
              case 13:
                cu(function () {
                  var e = Oa(t, 1);
                  if (null !== e) {
                    var n = tu();
                    nu(e, t, 1, n);
                  }
                }),
                  Xu(t, 1);
            }
          }),
          (_e = function (t) {
            if (13 === t.tag) {
              var e = Oa(t, 134217728);
              if (null !== e) nu(e, t, 134217728, tu());
              Xu(t, 134217728);
            }
          }),
          (we = function (t) {
            if (13 === t.tag) {
              var e = eu(t),
                n = Oa(t, e);
              if (null !== n) nu(n, t, e, tu());
              Xu(t, e);
            }
          }),
          (Se = function () {
            return be;
          }),
          (Me = function (t, e) {
            var n = be;
            try {
              return (be = t), e();
            } finally {
              be = n;
            }
          }),
          (_t = function (t, e, n) {
            switch (e) {
              case 'input':
                if ((K(t, n), (e = n.name), 'radio' === n.type && null != e)) {
                  for (n = t; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' + JSON.stringify('' + e) + '][type="radio"]'
                    ),
                      e = 0;
                    e < n.length;
                    e++
                  ) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                      var i = ki(r);
                      if (!i) throw Error(a(90));
                      X(r), K(r, i);
                    }
                  }
                }
                break;
              case 'textarea':
                at(t, n);
                break;
              case 'select':
                null != (e = n.value) && nt(t, !!n.multiple, e, !1);
            }
          }),
          (Ct = uu),
          (Ot = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [bi, xi, ki, Et, Pt, uu],
          },
          nc = {
            findFiberByHostInstance: mi,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (t) {
              return null === (t = Yt(t)) ? null : t.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (ie = ic.inject(rc)), (ae = ic);
            } catch (ct) {}
        }
        (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (e.createPortal = function (t, e) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Zu(e)) throw Error(a(200));
            return Bu(t, e, null, n);
          }),
          (e.createRoot = function (t, e) {
            if (!Zu(t)) throw Error(a(299));
            var n = !1,
              r = '',
              i = Gu;
            return (
              null !== e &&
                void 0 !== e &&
                (!0 === e.unstable_strictMode && (n = !0),
                void 0 !== e.identifierPrefix && (r = e.identifierPrefix),
                void 0 !== e.onRecoverableError && (i = e.onRecoverableError)),
              (e = Vu(t, 1, !1, null, 0, n, 0, r, i)),
              (t[pi] = e.current),
              Wr(8 === t.nodeType ? t.parentNode : t),
              new Qu(e)
            );
          }),
          (e.findDOMNode = function (t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var e = t._reactInternals;
            if (void 0 === e) {
              if ('function' === typeof t.render) throw Error(a(188));
              throw ((t = Object.keys(t).join(',')), Error(a(268, t)));
            }
            return (t = null === (t = Yt(e)) ? null : t.stateNode);
          }),
          (e.flushSync = function (t) {
            return cu(t);
          }),
          (e.hydrate = function (t, e, n) {
            if (!Ku(e)) throw Error(a(200));
            return tc(null, t, e, !0, n);
          }),
          (e.hydrateRoot = function (t, e, n) {
            if (!Zu(t)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              o = '',
              l = Gu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (e = Hu(e, null, t, 1, null != n ? n : null, i, 0, o, l)),
              (t[pi] = e.current),
              Wr(t),
              r)
            )
              for (t = 0; t < r.length; t++)
                (i = (i = (n = r[t])._getVersion)(n._source)),
                  null == e.mutableSourceEagerHydrationData
                    ? (e.mutableSourceEagerHydrationData = [n, i])
                    : e.mutableSourceEagerHydrationData.push(n, i);
            return new qu(e);
          }),
          (e.render = function (t, e, n) {
            if (!Ku(e)) throw Error(a(200));
            return tc(null, t, e, !1, n);
          }),
          (e.unmountComponentAtNode = function (t) {
            if (!Ku(t)) throw Error(a(40));
            return (
              !!t._reactRootContainer &&
              (cu(function () {
                tc(null, null, t, !1, function () {
                  (t._reactRootContainer = null), (t[pi] = null);
                });
              }),
              !0)
            );
          }),
          (e.unstable_batchedUpdates = uu),
          (e.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
            if (!Ku(n)) throw Error(a(200));
            if (null == t || void 0 === t._reactInternals) throw Error(a(38));
            return tc(t, e, n, !1, r);
          }),
          (e.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: function (t, e, n) {
        var r = n(164);
        (e.createRoot = r.createRoot), (e.hydrateRoot = r.hydrateRoot);
      },
      164: function (t, e, n) {
        !(function t() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (e) {
              console.error(e);
            }
        })(),
          (t.exports = n(463));
      },
      372: function (t, e) {
        var n = 'function' === typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          i = n ? Symbol.for('react.portal') : 60106,
          a = n ? Symbol.for('react.fragment') : 60107,
          o = n ? Symbol.for('react.strict_mode') : 60108,
          l = n ? Symbol.for('react.profiler') : 60114,
          s = n ? Symbol.for('react.provider') : 60109,
          u = n ? Symbol.for('react.context') : 60110,
          c = n ? Symbol.for('react.async_mode') : 60111,
          f = n ? Symbol.for('react.concurrent_mode') : 60111,
          h = n ? Symbol.for('react.forward_ref') : 60112,
          d = n ? Symbol.for('react.suspense') : 60113,
          p = n ? Symbol.for('react.suspense_list') : 60120,
          v = n ? Symbol.for('react.memo') : 60115,
          g = n ? Symbol.for('react.lazy') : 60116,
          y = n ? Symbol.for('react.block') : 60121,
          m = n ? Symbol.for('react.fundamental') : 60117,
          b = n ? Symbol.for('react.responder') : 60118,
          x = n ? Symbol.for('react.scope') : 60119;
        function k(t) {
          if ('object' === typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
              case r:
                switch ((t = t.type)) {
                  case c:
                  case f:
                  case a:
                  case l:
                  case o:
                  case d:
                    return t;
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case u:
                      case h:
                      case g:
                      case v:
                      case s:
                        return t;
                      default:
                        return e;
                    }
                }
              case i:
                return e;
            }
          }
        }
        function _(t) {
          return k(t) === f;
        }
        (e.AsyncMode = c),
          (e.ConcurrentMode = f),
          (e.ContextConsumer = u),
          (e.ContextProvider = s),
          (e.Element = r),
          (e.ForwardRef = h),
          (e.Fragment = a),
          (e.Lazy = g),
          (e.Memo = v),
          (e.Portal = i),
          (e.Profiler = l),
          (e.StrictMode = o),
          (e.Suspense = d),
          (e.isAsyncMode = function (t) {
            return _(t) || k(t) === c;
          }),
          (e.isConcurrentMode = _),
          (e.isContextConsumer = function (t) {
            return k(t) === u;
          }),
          (e.isContextProvider = function (t) {
            return k(t) === s;
          }),
          (e.isElement = function (t) {
            return 'object' === typeof t && null !== t && t.$$typeof === r;
          }),
          (e.isForwardRef = function (t) {
            return k(t) === h;
          }),
          (e.isFragment = function (t) {
            return k(t) === a;
          }),
          (e.isLazy = function (t) {
            return k(t) === g;
          }),
          (e.isMemo = function (t) {
            return k(t) === v;
          }),
          (e.isPortal = function (t) {
            return k(t) === i;
          }),
          (e.isProfiler = function (t) {
            return k(t) === l;
          }),
          (e.isStrictMode = function (t) {
            return k(t) === o;
          }),
          (e.isSuspense = function (t) {
            return k(t) === d;
          }),
          (e.isValidElementType = function (t) {
            return (
              'string' === typeof t ||
              'function' === typeof t ||
              t === a ||
              t === f ||
              t === l ||
              t === o ||
              t === d ||
              t === p ||
              ('object' === typeof t &&
                null !== t &&
                (t.$$typeof === g ||
                  t.$$typeof === v ||
                  t.$$typeof === s ||
                  t.$$typeof === u ||
                  t.$$typeof === h ||
                  t.$$typeof === m ||
                  t.$$typeof === b ||
                  t.$$typeof === x ||
                  t.$$typeof === y))
            );
          }),
          (e.typeOf = k);
      },
      441: function (t, e, n) {
        t.exports = n(372);
      },
      459: function (t, e) {
        var n,
          r = Symbol.for('react.element'),
          i = Symbol.for('react.portal'),
          a = Symbol.for('react.fragment'),
          o = Symbol.for('react.strict_mode'),
          l = Symbol.for('react.profiler'),
          s = Symbol.for('react.provider'),
          u = Symbol.for('react.context'),
          c = Symbol.for('react.server_context'),
          f = Symbol.for('react.forward_ref'),
          h = Symbol.for('react.suspense'),
          d = Symbol.for('react.suspense_list'),
          p = Symbol.for('react.memo'),
          v = Symbol.for('react.lazy'),
          g = Symbol.for('react.offscreen');
        function y(t) {
          if ('object' === typeof t && null !== t) {
            var e = t.$$typeof;
            switch (e) {
              case r:
                switch ((t = t.type)) {
                  case a:
                  case l:
                  case o:
                  case h:
                  case d:
                    return t;
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case c:
                      case u:
                      case f:
                      case v:
                      case p:
                      case s:
                        return t;
                      default:
                        return e;
                    }
                }
              case i:
                return e;
            }
          }
        }
        n = Symbol.for('react.module.reference');
      },
      900: function (t, e, n) {
        n(459);
      },
      374: function (t, e, n) {
        var r = n(791),
          i = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(t, e, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== e.key && (u = '' + e.key),
          void 0 !== e.ref && (c = e.ref),
          e))
            o.call(e, r) && !s.hasOwnProperty(r) && (a[r] = e[r]);
          if (t && t.defaultProps)
            for (r in (e = t.defaultProps)) void 0 === a[r] && (a[r] = e[r]);
          return {
            $$typeof: i,
            type: t,
            key: u,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (e.Fragment = a), (e.jsx = u), (e.jsxs = u);
      },
      117: function (t, e) {
        var n = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          i = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          o = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          f = Symbol.for('react.memo'),
          h = Symbol.for('react.lazy'),
          d = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          g = {};
        function y(t, e, n) {
          (this.props = t),
            (this.context = e),
            (this.refs = g),
            (this.updater = n || p);
        }
        function m() {}
        function b(t, e, n) {
          (this.props = t),
            (this.context = e),
            (this.refs = g),
            (this.updater = n || p);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (t, e) {
            if ('object' !== typeof t && 'function' !== typeof t && null != t)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            this.updater.enqueueSetState(this, t, e, 'setState');
          }),
          (y.prototype.forceUpdate = function (t) {
            this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
          }),
          (m.prototype = y.prototype);
        var x = (b.prototype = new m());
        (x.constructor = b), v(x, y.prototype), (x.isPureReactComponent = !0);
        var k = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          w = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function M(t, e, r) {
          var i,
            a = {},
            o = null,
            l = null;
          if (null != e)
            for (i in (void 0 !== e.ref && (l = e.ref),
            void 0 !== e.key && (o = '' + e.key),
            e))
              _.call(e, i) && !S.hasOwnProperty(i) && (a[i] = e[i]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (t && t.defaultProps)
            for (i in (s = t.defaultProps)) void 0 === a[i] && (a[i] = s[i]);
          return {
            $$typeof: n,
            type: t,
            key: o,
            ref: l,
            props: a,
            _owner: w.current,
          };
        }
        function E(t) {
          return 'object' === typeof t && null !== t && t.$$typeof === n;
        }
        var P = /\/+/g;
        function C(t, e) {
          return 'object' === typeof t && null !== t && null != t.key
            ? (function (t) {
                var e = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  t.replace(/[=:]/g, function (t) {
                    return e[t];
                  })
                );
              })('' + t.key)
            : e.toString(36);
        }
        function O(t, e, i, a, o) {
          var l = typeof t;
          ('undefined' !== l && 'boolean' !== l) || (t = null);
          var s = !1;
          if (null === t) s = !0;
          else
            switch (l) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = t))),
              (t = '' === a ? '.' + C(s, 0) : a),
              k(o)
                ? ((i = ''),
                  null != t && (i = t.replace(P, '$&/') + '/'),
                  O(o, e, i, '', function (t) {
                    return t;
                  }))
                : null != o &&
                  (E(o) &&
                    (o = (function (t, e) {
                      return {
                        $$typeof: n,
                        type: t.type,
                        key: e,
                        ref: t.ref,
                        props: t.props,
                        _owner: t._owner,
                      };
                    })(
                      o,
                      i +
                        (!o.key || (s && s.key === o.key)
                          ? ''
                          : ('' + o.key).replace(P, '$&/') + '/') +
                        t
                    )),
                  e.push(o)),
              1
            );
          if (((s = 0), (a = '' === a ? '.' : a + ':'), k(t)))
            for (var u = 0; u < t.length; u++) {
              var c = a + C((l = t[u]), u);
              s += O(l, e, i, c, o);
            }
          else if (
            ((c = (function (t) {
              return null === t || 'object' !== typeof t
                ? null
                : 'function' === typeof (t = (d && t[d]) || t['@@iterator'])
                ? t
                : null;
            })(t)),
            'function' === typeof c)
          )
            for (t = c.call(t), u = 0; !(l = t.next()).done; )
              s += O((l = l.value), e, i, (c = a + C(l, u++)), o);
          else if ('object' === l)
            throw (
              ((e = String(t)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === e
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e) +
                  '). If you meant to render a collection of children, use an array instead.'
              ))
            );
          return s;
        }
        function A(t, e, n) {
          if (null == t) return t;
          var r = [],
            i = 0;
          return (
            O(t, r, '', '', function (t) {
              return e.call(n, t, i++);
            }),
            r
          );
        }
        function T(t) {
          if (-1 === t._status) {
            var e = t._result;
            (e = e()).then(
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 1), (t._result = e));
              },
              function (e) {
                (0 !== t._status && -1 !== t._status) ||
                  ((t._status = 2), (t._result = e));
              }
            ),
              -1 === t._status && ((t._status = 0), (t._result = e));
          }
          if (1 === t._status) return t._result.default;
          throw t._result;
        }
        var D = { current: null },
          L = { transition: null },
          R = {
            ReactCurrentDispatcher: D,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: w,
          };
        (e.Children = {
          map: A,
          forEach: function (t, e, n) {
            A(
              t,
              function () {
                e.apply(this, arguments);
              },
              n
            );
          },
          count: function (t) {
            var e = 0;
            return (
              A(t, function () {
                e++;
              }),
              e
            );
          },
          toArray: function (t) {
            return (
              A(t, function (t) {
                return t;
              }) || []
            );
          },
          only: function (t) {
            if (!E(t))
              throw Error(
                'React.Children.only expected to receive a single React element child.'
              );
            return t;
          },
        }),
          (e.Component = y),
          (e.Fragment = i),
          (e.Profiler = o),
          (e.PureComponent = b),
          (e.StrictMode = a),
          (e.Suspense = c),
          (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (e.cloneElement = function (t, e, r) {
            if (null === t || void 0 === t)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  t +
                  '.'
              );
            var i = v({}, t.props),
              a = t.key,
              o = t.ref,
              l = t._owner;
            if (null != e) {
              if (
                (void 0 !== e.ref && ((o = e.ref), (l = w.current)),
                void 0 !== e.key && (a = '' + e.key),
                t.type && t.type.defaultProps)
              )
                var s = t.type.defaultProps;
              for (u in e)
                _.call(e, u) &&
                  !S.hasOwnProperty(u) &&
                  (i[u] = void 0 === e[u] && void 0 !== s ? s[u] : e[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              i.children = s;
            }
            return {
              $$typeof: n,
              type: t.type,
              key: a,
              ref: o,
              props: i,
              _owner: l,
            };
          }),
          (e.createContext = function (t) {
            return (
              ((t = {
                $$typeof: s,
                _currentValue: t,
                _currentValue2: t,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: t }),
              (t.Consumer = t)
            );
          }),
          (e.createElement = M),
          (e.createFactory = function (t) {
            var e = M.bind(null, t);
            return (e.type = t), e;
          }),
          (e.createRef = function () {
            return { current: null };
          }),
          (e.forwardRef = function (t) {
            return { $$typeof: u, render: t };
          }),
          (e.isValidElement = E),
          (e.lazy = function (t) {
            return {
              $$typeof: h,
              _payload: { _status: -1, _result: t },
              _init: T,
            };
          }),
          (e.memo = function (t, e) {
            return { $$typeof: f, type: t, compare: void 0 === e ? null : e };
          }),
          (e.startTransition = function (t) {
            var e = L.transition;
            L.transition = {};
            try {
              t();
            } finally {
              L.transition = e;
            }
          }),
          (e.unstable_act = function () {
            throw Error(
              'act(...) is not supported in production builds of React.'
            );
          }),
          (e.useCallback = function (t, e) {
            return D.current.useCallback(t, e);
          }),
          (e.useContext = function (t) {
            return D.current.useContext(t);
          }),
          (e.useDebugValue = function () {}),
          (e.useDeferredValue = function (t) {
            return D.current.useDeferredValue(t);
          }),
          (e.useEffect = function (t, e) {
            return D.current.useEffect(t, e);
          }),
          (e.useId = function () {
            return D.current.useId();
          }),
          (e.useImperativeHandle = function (t, e, n) {
            return D.current.useImperativeHandle(t, e, n);
          }),
          (e.useInsertionEffect = function (t, e) {
            return D.current.useInsertionEffect(t, e);
          }),
          (e.useLayoutEffect = function (t, e) {
            return D.current.useLayoutEffect(t, e);
          }),
          (e.useMemo = function (t, e) {
            return D.current.useMemo(t, e);
          }),
          (e.useReducer = function (t, e, n) {
            return D.current.useReducer(t, e, n);
          }),
          (e.useRef = function (t) {
            return D.current.useRef(t);
          }),
          (e.useState = function (t) {
            return D.current.useState(t);
          }),
          (e.useSyncExternalStore = function (t, e, n) {
            return D.current.useSyncExternalStore(t, e, n);
          }),
          (e.useTransition = function () {
            return D.current.useTransition();
          }),
          (e.version = '18.2.0');
      },
      791: function (t, e, n) {
        t.exports = n(117);
      },
      184: function (t, e, n) {
        t.exports = n(374);
      },
      813: function (t, e) {
        function n(t, e) {
          var n = t.length;
          t.push(e);
          t: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = t[r];
            if (!(0 < a(i, e))) break t;
            (t[r] = e), (t[n] = i), (n = r);
          }
        }
        function r(t) {
          return 0 === t.length ? null : t[0];
        }
        function i(t) {
          if (0 === t.length) return null;
          var e = t[0],
            n = t.pop();
          if (n !== e) {
            t[0] = n;
            t: for (var r = 0, i = t.length, o = i >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = t[l],
                u = l + 1,
                c = t[u];
              if (0 > a(s, n))
                u < i && 0 > a(c, s)
                  ? ((t[r] = c), (t[u] = n), (r = u))
                  : ((t[r] = s), (t[l] = n), (r = l));
              else {
                if (!(u < i && 0 > a(c, n))) break t;
                (t[r] = c), (t[u] = n), (r = u);
              }
            }
          }
          return e;
        }
        function a(t, e) {
          var n = t.sortIndex - e.sortIndex;
          return 0 !== n ? n : t.id - e.id;
        }
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var o = performance;
          e.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          e.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          h = null,
          d = 3,
          p = !1,
          v = !1,
          g = !1,
          y = 'function' === typeof setTimeout ? setTimeout : null,
          m = 'function' === typeof clearTimeout ? clearTimeout : null,
          b = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(t) {
          for (var e = r(c); null !== e; ) {
            if (null === e.callback) i(c);
            else {
              if (!(e.startTime <= t)) break;
              i(c), (e.sortIndex = e.expirationTime), n(u, e);
            }
            e = r(c);
          }
        }
        function k(t) {
          if (((g = !1), x(t), !v))
            if (null !== r(u)) (v = !0), L(_);
            else {
              var e = r(c);
              null !== e && R(k, e.startTime - t);
            }
        }
        function _(t, n) {
          (v = !1), g && ((g = !1), m(E), (E = -1)), (p = !0);
          var a = d;
          try {
            for (
              x(n), h = r(u);
              null !== h && (!(h.expirationTime > n) || (t && !O()));

            ) {
              var o = h.callback;
              if ('function' === typeof o) {
                (h.callback = null), (d = h.priorityLevel);
                var l = o(h.expirationTime <= n);
                (n = e.unstable_now()),
                  'function' === typeof l
                    ? (h.callback = l)
                    : h === r(u) && i(u),
                  x(n);
              } else i(u);
              h = r(u);
            }
            if (null !== h) var s = !0;
            else {
              var f = r(c);
              null !== f && R(k, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (h = null), (d = a), (p = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var w,
          S = !1,
          M = null,
          E = -1,
          P = 5,
          C = -1;
        function O() {
          return !(e.unstable_now() - C < P);
        }
        function A() {
          if (null !== M) {
            var t = e.unstable_now();
            C = t;
            var n = !0;
            try {
              n = M(!0, t);
            } finally {
              n ? w() : ((S = !1), (M = null));
            }
          } else S = !1;
        }
        if ('function' === typeof b)
          w = function () {
            b(A);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var T = new MessageChannel(),
            D = T.port2;
          (T.port1.onmessage = A),
            (w = function () {
              D.postMessage(null);
            });
        } else
          w = function () {
            y(A, 0);
          };
        function L(t) {
          (M = t), S || ((S = !0), w());
        }
        function R(t, n) {
          E = y(function () {
            t(e.unstable_now());
          }, n);
        }
        (e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (t) {
            t.callback = null;
          }),
          (e.unstable_continueExecution = function () {
            v || p || ((v = !0), L(_));
          }),
          (e.unstable_forceFrameRate = function (t) {
            0 > t || 125 < t
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (P = 0 < t ? Math.floor(1e3 / t) : 5);
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return d;
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (e.unstable_next = function (t) {
            switch (d) {
              case 1:
              case 2:
              case 3:
                var e = 3;
                break;
              default:
                e = d;
            }
            var n = d;
            d = e;
            try {
              return t();
            } finally {
              d = n;
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (t, e) {
            switch (t) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                t = 3;
            }
            var n = d;
            d = t;
            try {
              return e();
            } finally {
              d = n;
            }
          }),
          (e.unstable_scheduleCallback = function (t, i, a) {
            var o = e.unstable_now();
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? o + a : o)
                : (a = o),
              t)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (t = {
                id: f++,
                callback: i,
                priorityLevel: t,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > o
                ? ((t.sortIndex = a),
                  n(c, t),
                  null === r(u) &&
                    t === r(c) &&
                    (g ? (m(E), (E = -1)) : (g = !0), R(k, a - o)))
                : ((t.sortIndex = l), n(u, t), v || p || ((v = !0), L(_))),
              t
            );
          }),
          (e.unstable_shouldYield = O),
          (e.unstable_wrapCallback = function (t) {
            var e = d;
            return function () {
              var n = d;
              d = e;
              try {
                return t.apply(this, arguments);
              } finally {
                d = n;
              }
            };
          });
      },
      296: function (t, e, n) {
        t.exports = n(813);
      },
      561: function (t, e, n) {
        var r = n(791);
        var i =
            'function' === typeof Object.is
              ? Object.is
              : function (t, e) {
                  return (
                    (t === e && (0 !== t || 1 / t === 1 / e)) ||
                    (t !== t && e !== e)
                  );
                },
          a = r.useState,
          o = r.useEffect,
          l = r.useLayoutEffect,
          s = r.useDebugValue;
        function u(t) {
          var e = t.getSnapshot;
          t = t.value;
          try {
            var n = e();
            return !i(t, n);
          } catch (r) {
            return !0;
          }
        }
        var c =
          'undefined' === typeof window ||
          'undefined' === typeof window.document ||
          'undefined' === typeof window.document.createElement
            ? function (t, e) {
                return e();
              }
            : function (t, e) {
                var n = e(),
                  r = a({ inst: { value: n, getSnapshot: e } }),
                  i = r[0].inst,
                  c = r[1];
                return (
                  l(
                    function () {
                      (i.value = n),
                        (i.getSnapshot = e),
                        u(i) && c({ inst: i });
                    },
                    [t, n, e]
                  ),
                  o(
                    function () {
                      return (
                        u(i) && c({ inst: i }),
                        t(function () {
                          u(i) && c({ inst: i });
                        })
                      );
                    },
                    [t]
                  ),
                  s(n),
                  n
                );
              };
        e.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
      },
      595: function (t, e, n) {
        var r = n(791),
          i = n(248);
        var a =
            'function' === typeof Object.is
              ? Object.is
              : function (t, e) {
                  return (
                    (t === e && (0 !== t || 1 / t === 1 / e)) ||
                    (t !== t && e !== e)
                  );
                },
          o = i.useSyncExternalStore,
          l = r.useRef,
          s = r.useEffect,
          u = r.useMemo,
          c = r.useDebugValue;
        e.useSyncExternalStoreWithSelector = function (t, e, n, r, i) {
          var f = l(null);
          if (null === f.current) {
            var h = { hasValue: !1, value: null };
            f.current = h;
          } else h = f.current;
          f = u(
            function () {
              function t(t) {
                if (!s) {
                  if (
                    ((s = !0), (o = t), (t = r(t)), void 0 !== i && h.hasValue)
                  ) {
                    var e = h.value;
                    if (i(e, t)) return (l = e);
                  }
                  return (l = t);
                }
                if (((e = l), a(o, t))) return e;
                var n = r(t);
                return void 0 !== i && i(e, n) ? e : ((o = t), (l = n));
              }
              var o,
                l,
                s = !1,
                u = void 0 === n ? null : n;
              return [
                function () {
                  return t(e());
                },
                null === u
                  ? void 0
                  : function () {
                      return t(u());
                    },
              ];
            },
            [e, n, r, i]
          );
          var d = o(t, f[0], f[1]);
          return (
            s(
              function () {
                (h.hasValue = !0), (h.value = d);
              },
              [d]
            ),
            c(d),
            d
          );
        };
      },
      248: function (t, e, n) {
        t.exports = n(561);
      },
      327: function (t, e, n) {
        t.exports = n(595);
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var a = (e[r] = { exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.g = (function () {
    if ('object' === typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (t) {
      if ('object' === typeof window) return window;
    }
  })()),
    (function () {
      var t = n(791),
        e = n(250);
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e) {
        if (t) {
          if ('string' === typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }
      function a(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
                  t['@@iterator'];
            if (null != n) {
              var r,
                i,
                a = [],
                o = !0,
                l = !1;
              try {
                for (
                  n = n.call(t);
                  !(o = (r = n.next()).done) &&
                  (a.push(r.value), !e || a.length !== e);
                  o = !0
                );
              } catch (s) {
                (l = !0), (i = s);
              } finally {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (l) throw i;
                }
              }
              return a;
            }
          })(t, e) ||
          i(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function o(t) {
        return (
          (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          o(t)
        );
      }
      function l() {
        l = function () {
          return t;
        };
        var t = {},
          e = Object.prototype,
          n = e.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          s = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          c({}, '');
        } catch (A) {
          c = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, i) {
          var a = e && e.prototype instanceof p ? e : p,
            o = Object.create(a.prototype),
            l = new P(i || []);
          return r(o, '_invoke', { value: w(t, n, l) }), o;
        }
        function h(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) };
          } catch (A) {
            return { type: 'throw', arg: A };
          }
        }
        t.wrap = f;
        var d = {};
        function p() {}
        function v() {}
        function g() {}
        var y = {};
        c(y, a, function () {
          return this;
        });
        var m = Object.getPrototypeOf,
          b = m && m(m(C([])));
        b && b !== e && n.call(b, a) && (y = b);
        var x = (g.prototype = p.prototype = Object.create(y));
        function k(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          function i(r, a, l, s) {
            var u = h(t[r], t, a);
            if ('throw' !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && 'object' == o(f) && n.call(f, '__await')
                ? e.resolve(f.__await).then(
                    function (t) {
                      i('next', t, l, s);
                    },
                    function (t) {
                      i('throw', t, l, s);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (c.value = t), l(c);
                    },
                    function (t) {
                      return i('throw', t, l, s);
                    }
                  );
            }
            s(u.arg);
          }
          var a;
          r(this, '_invoke', {
            value: function (t, n) {
              function r() {
                return new e(function (e, r) {
                  i(t, n, e, r);
                });
              }
              return (a = a ? a.then(r, r) : r());
            },
          });
        }
        function w(t, e, n) {
          var r = 'suspendedStart';
          return function (i, a) {
            if ('executing' === r)
              throw new Error('Generator is already running');
            if ('completed' === r) {
              if ('throw' === i) throw a;
              return O();
            }
            for (n.method = i, n.arg = a; ; ) {
              var o = n.delegate;
              if (o) {
                var l = S(o, n);
                if (l) {
                  if (l === d) continue;
                  return l;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              r = 'executing';
              var s = h(t, e, n);
              if ('normal' === s.type) {
                if (
                  ((r = n.done ? 'completed' : 'suspendedYield'), s.arg === d)
                )
                  continue;
                return { value: s.arg, done: n.done };
              }
              'throw' === s.type &&
                ((r = 'completed'), (n.method = 'throw'), (n.arg = s.arg));
            }
          };
        }
        function S(t, e) {
          var n = t.iterator[e.method];
          if (void 0 === n) {
            if (((e.delegate = null), 'throw' === e.method)) {
              if (
                t.iterator.return &&
                ((e.method = 'return'),
                (e.arg = void 0),
                S(t, e),
                'throw' === e.method)
              )
                return d;
              (e.method = 'throw'),
                (e.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var r = h(n, t.iterator, e.arg);
          if ('throw' === r.type)
            return (
              (e.method = 'throw'), (e.arg = r.arg), (e.delegate = null), d
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                'return' !== e.method &&
                  ((e.method = 'next'), (e.arg = void 0)),
                (e.delegate = null),
                d)
              : i
            : ((e.method = 'throw'),
              (e.arg = new TypeError('iterator result is not an object')),
              (e.delegate = null),
              d);
        }
        function M(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function E(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(M, this),
            this.reset(!0);
        }
        function C(t) {
          if (t) {
            var e = t[a];
            if (e) return e.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                i = function e() {
                  for (; ++r < t.length; )
                    if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                  return (e.value = void 0), (e.done = !0), e;
                };
              return (i.next = i);
            }
          }
          return { next: O };
        }
        function O() {
          return { value: void 0, done: !0 };
        }
        return (
          (v.prototype = g),
          r(x, 'constructor', { value: g, configurable: !0 }),
          r(g, 'constructor', { value: v, configurable: !0 }),
          (v.displayName = c(g, u, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === v || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), c(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          k(_.prototype),
          c(_.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = _),
          (t.async = function (e, n, r, i, a) {
            void 0 === a && (a = Promise);
            var o = new _(f(e, n, r, i), a);
            return t.isGeneratorFunction(n)
              ? o
              : o.next().then(function (t) {
                  return t.done ? t.value : o.next();
                });
          }),
          k(x),
          c(x, u, 'Generator'),
          c(x, a, function () {
            return this;
          }),
          c(x, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = C),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !t)
              )
                for (var e in this)
                  't' === e.charAt(0) &&
                    n.call(this, e) &&
                    !isNaN(+e.slice(1)) &&
                    (this[e] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function r(n, r) {
                return (
                  (o.type = 'throw'),
                  (o.arg = t),
                  (e.next = n),
                  r && ((e.method = 'next'), (e.arg = void 0)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  o = a.completion;
                if ('root' === a.tryLoc) return r('end');
                if (a.tryLoc <= this.prev) {
                  var l = n.call(a, 'catchLoc'),
                    s = n.call(a, 'finallyLoc');
                  if (l && s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (l) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (
                  i.tryLoc <= this.prev &&
                  n.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var a = i;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var o = a ? a.completion : {};
              return (
                (o.type = t),
                (o.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), d)
                  : this.complete(o)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), E(n), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    E(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: C(t), resultName: e, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          t
        );
      }
      function s(t, e, n, r, i, a, o) {
        try {
          var l = t[a](o),
            s = l.value;
        } catch (u) {
          return void n(u);
        }
        l.done ? e(s) : Promise.resolve(s).then(r, i);
      }
      function u(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
              s(a, r, i, o, l, 'next', t);
            }
            function l(t) {
              s(a, r, i, o, l, 'throw', t);
            }
            o(void 0);
          });
        };
      }
      function c(t) {
        if (null == t) throw new TypeError('Cannot destructure ' + t);
      }
      var f = n(248),
        h = n(327),
        d = n(164);
      var p = function (t) {
          t();
        },
        v = function () {
          return p;
        },
        g = (0, t.createContext)(null);
      function y() {
        return (0, t.useContext)(g);
      }
      var m = function () {
          throw new Error('uSES not initialized!');
        },
        b = m,
        x = function (t, e) {
          return t === e;
        };
      function k() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          n =
            e === g
              ? y
              : function () {
                  return (0, t.useContext)(e);
                };
        return function (e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
          var i = n(),
            a = i.store,
            o = i.subscription,
            l = i.getServerState,
            s = b(o.addNestedSub, a.getState, l || a.getState, e, r);
          return (0, t.useDebugValue)(s), s;
        };
      }
      var _ = k();
      n(110), n(900);
      var w = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function S(t, e) {
        var n,
          r = w;
        function i() {
          o.onStateChange && o.onStateChange();
        }
        function a() {
          n ||
            ((n = e ? e.addNestedSub(i) : t.subscribe(i)),
            (r = (function () {
              var t = v(),
                e = null,
                n = null;
              return {
                clear: function () {
                  (e = null), (n = null);
                },
                notify: function () {
                  t(function () {
                    for (var t = e; t; ) t.callback(), (t = t.next);
                  });
                },
                get: function () {
                  for (var t = [], n = e; n; ) t.push(n), (n = n.next);
                  return t;
                },
                subscribe: function (t) {
                  var r = !0,
                    i = (n = { callback: t, next: null, prev: n });
                  return (
                    i.prev ? (i.prev.next = i) : (e = i),
                    function () {
                      r &&
                        null !== e &&
                        ((r = !1),
                        i.next ? (i.next.prev = i.prev) : (n = i.prev),
                        i.prev ? (i.prev.next = i.next) : (e = i.next));
                    }
                  );
                },
              };
            })()));
        }
        var o = {
          addNestedSub: function (t) {
            return a(), r.subscribe(t);
          },
          notifyNestedSubs: function () {
            r.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: a,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), r.clear(), (r = w));
          },
          getListeners: function () {
            return r;
          },
        };
        return o;
      }
      var M = !(
        'undefined' === typeof window ||
        'undefined' === typeof window.document ||
        'undefined' === typeof window.document.createElement
      )
        ? t.useLayoutEffect
        : t.useEffect;
      var E = function (e) {
        var n = e.store,
          r = e.context,
          i = e.children,
          a = e.serverState,
          o = (0, t.useMemo)(
            function () {
              var t = S(n);
              return {
                store: n,
                subscription: t,
                getServerState: a
                  ? function () {
                      return a;
                    }
                  : void 0,
              };
            },
            [n, a]
          ),
          l = (0, t.useMemo)(
            function () {
              return n.getState();
            },
            [n]
          );
        M(
          function () {
            var t = o.subscription;
            return (
              (t.onStateChange = t.notifyNestedSubs),
              t.trySubscribe(),
              l !== n.getState() && t.notifyNestedSubs(),
              function () {
                t.tryUnsubscribe(), (t.onStateChange = void 0);
              }
            );
          },
          [o, l]
        );
        var s = r || g;
        return t.createElement(s.Provider, { value: o }, i);
      };
      function P() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          n =
            e === g
              ? y
              : function () {
                  return (0, t.useContext)(e);
                };
        return function () {
          return n().store;
        };
      }
      var C = P();
      function O() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          e = t === g ? C : P(t);
        return function () {
          return e().dispatch;
        };
      }
      var A,
        T = O();
      function D(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function L(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? L(Object(n), !0).forEach(function (e) {
                D(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function N(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function I(t) {
        return (
          (I = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          I(t)
        );
      }
      function z(t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = I(t));

        );
        return t;
      }
      function j() {
        return (
          (j =
            'undefined' !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (t, e, n) {
                  var r = z(t, e);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    return i.get
                      ? i.get.call(arguments.length < 3 ? t : n)
                      : i.value;
                  }
                }),
          j.apply(this, arguments)
        );
      }
      function F(t, e) {
        return (
          (F = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t;
              }),
          F(t, e)
        );
      }
      function V(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e && F(t, e);
      }
      function B(t, e) {
        if (e && ('object' === o(e) || 'function' === typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined'
          );
        return N(t);
      }
      function W(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = I(t);
          if (e) {
            var i = I(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return B(this, n);
        };
      }
      function H(t, e) {
        var n =
          ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = i(t)) ||
            (e && t && 'number' === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var o,
          l = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (l = t.done), t;
          },
          e: function (t) {
            (s = !0), (o = t);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (s) throw o;
            }
          },
        };
      }
      function U(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return r(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' !== typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          i(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Y(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function $(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function X(t, e, n) {
        return (
          e && $(t.prototype, e),
          n && $(t, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          t
        );
      }
      function G() {}
      !(function (t) {
        b = t;
      })(h.useSyncExternalStoreWithSelector),
        (function (t) {
          t;
        })(f.useSyncExternalStore),
        (A = d.unstable_batchedUpdates),
        (p = A);
      var Q = (function () {
        var t = 0;
        return function () {
          return t++;
        };
      })();
      function q(t) {
        return null === t || 'undefined' === typeof t;
      }
      function Z(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        var e = Object.prototype.toString.call(t);
        return '[object' === e.slice(0, 7) && 'Array]' === e.slice(-6);
      }
      function K(t) {
        return (
          null !== t && '[object Object]' === Object.prototype.toString.call(t)
        );
      }
      var J = function (t) {
        return ('number' === typeof t || t instanceof Number) && isFinite(+t);
      };
      function tt(t, e) {
        return J(t) ? t : e;
      }
      function et(t, e) {
        return 'undefined' === typeof t ? e : t;
      }
      var nt = function (t, e) {
        return 'string' === typeof t && t.endsWith('%')
          ? (parseFloat(t) / 100) * e
          : +t;
      };
      function rt(t, e, n) {
        if (t && 'function' === typeof t.call) return t.apply(n, e);
      }
      function it(t, e, n, r) {
        var i, a, o;
        if (Z(t))
          if (((a = t.length), r))
            for (i = a - 1; i >= 0; i--) e.call(n, t[i], i);
          else for (i = 0; i < a; i++) e.call(n, t[i], i);
        else if (K(t))
          for (a = (o = Object.keys(t)).length, i = 0; i < a; i++)
            e.call(n, t[o[i]], o[i]);
      }
      function at(t, e) {
        var n, r, i, a;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, r = t.length; n < r; ++n)
          if (
            ((i = t[n]),
            (a = e[n]),
            i.datasetIndex !== a.datasetIndex || i.index !== a.index)
          )
            return !1;
        return !0;
      }
      function ot(t) {
        if (Z(t)) return t.map(ot);
        if (K(t)) {
          for (
            var e = Object.create(null),
              n = Object.keys(t),
              r = n.length,
              i = 0;
            i < r;
            ++i
          )
            e[n[i]] = ot(t[n[i]]);
          return e;
        }
        return t;
      }
      function lt(t) {
        return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t);
      }
      function st(t, e, n, r) {
        if (lt(t)) {
          var i = e[t],
            a = n[t];
          K(i) && K(a) ? ut(i, a, r) : (e[t] = ot(a));
        }
      }
      function ut(t, e, n) {
        var r = Z(e) ? e : [e],
          i = r.length;
        if (!K(t)) return t;
        for (var a = (n = n || {}).merger || st, o = 0; o < i; ++o)
          if (K((e = r[o])))
            for (var l = Object.keys(e), s = 0, u = l.length; s < u; ++s)
              a(l[s], t, e, n);
        return t;
      }
      function ct(t, e) {
        return ut(t, e, { merger: ft });
      }
      function ft(t, e, n) {
        if (lt(t)) {
          var r = e[t],
            i = n[t];
          K(r) && K(i)
            ? ct(r, i)
            : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = ot(i));
        }
      }
      var ht = {
        '': function (t) {
          return t;
        },
        x: function (t) {
          return t.x;
        },
        y: function (t) {
          return t.y;
        },
      };
      function dt(t, e) {
        var n =
          ht[e] ||
          (ht[e] = (function (t) {
            var e = (function (t) {
              var e,
                n = t.split('.'),
                r = [],
                i = '',
                a = H(n);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  (i += e.value).endsWith('\\')
                    ? (i = i.slice(0, -1) + '.')
                    : (r.push(i), (i = ''));
                }
              } catch (o) {
                a.e(o);
              } finally {
                a.f();
              }
              return r;
            })(t);
            return function (t) {
              var n,
                r = H(e);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var i = n.value;
                  if ('' === i) break;
                  t = t && t[i];
                }
              } catch (a) {
                r.e(a);
              } finally {
                r.f();
              }
              return t;
            };
          })(e));
        return n(t);
      }
      function pt(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      var vt = function (t) {
          return 'undefined' !== typeof t;
        },
        gt = function (t) {
          return 'function' === typeof t;
        },
        yt = function (t, e) {
          if (t.size !== e.size) return !1;
          var n,
            r = H(t);
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var i = n.value;
              if (!e.has(i)) return !1;
            }
          } catch (a) {
            r.e(a);
          } finally {
            r.f();
          }
          return !0;
        };
      var mt = Math.PI,
        bt = 2 * mt,
        xt = bt + mt,
        kt = Number.POSITIVE_INFINITY,
        _t = mt / 180,
        wt = mt / 2,
        St = mt / 4,
        Mt = (2 * mt) / 3,
        Et = Math.log10,
        Pt = Math.sign;
      function Ct(t) {
        var e = Math.round(t);
        t = At(t, e, t / 1e3) ? e : t;
        var n = Math.pow(10, Math.floor(Et(t))),
          r = t / n;
        return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
      }
      function Ot(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function At(t, e, n) {
        return Math.abs(t - e) < n;
      }
      function Tt(t, e, n) {
        var r, i, a;
        for (r = 0, i = t.length; r < i; r++)
          (a = t[r][n]),
            isNaN(a) ||
              ((e.min = Math.min(e.min, a)), (e.max = Math.max(e.max, a)));
      }
      function Dt(t) {
        return t * (mt / 180);
      }
      function Lt(t) {
        return t * (180 / mt);
      }
      function Rt(t) {
        if (J(t)) {
          for (var e = 1, n = 0; Math.round(t * e) / e !== t; ) (e *= 10), n++;
          return n;
        }
      }
      function Nt(t, e) {
        var n = e.x - t.x,
          r = e.y - t.y,
          i = Math.sqrt(n * n + r * r),
          a = Math.atan2(r, n);
        return a < -0.5 * mt && (a += bt), { angle: a, distance: i };
      }
      function It(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function zt(t, e) {
        return ((t - e + xt) % bt) - mt;
      }
      function jt(t) {
        return ((t % bt) + bt) % bt;
      }
      function Ft(t, e, n, r) {
        var i = jt(t),
          a = jt(e),
          o = jt(n),
          l = jt(a - i),
          s = jt(o - i),
          u = jt(i - a),
          c = jt(i - o);
        return i === a || i === o || (r && a === o) || (l > s && u < c);
      }
      function Vt(t, e, n) {
        return Math.max(e, Math.min(n, t));
      }
      function Bt(t, e, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
        return t >= Math.min(e, n) - r && t <= Math.max(e, n) + r;
      }
      function Wt(t, e, n) {
        n =
          n ||
          function (n) {
            return t[n] < e;
          };
        for (var r, i = t.length - 1, a = 0; i - a > 1; )
          n((r = (a + i) >> 1)) ? (a = r) : (i = r);
        return { lo: a, hi: i };
      }
      var Ht = function (t, e, n, r) {
          return Wt(
            t,
            n,
            r
              ? function (r) {
                  return t[r][e] <= n;
                }
              : function (r) {
                  return t[r][e] < n;
                }
          );
        },
        Ut = function (t, e, n) {
          return Wt(t, n, function (r) {
            return t[r][e] >= n;
          });
        };
      var Yt = ['push', 'pop', 'shift', 'splice', 'unshift'];
      function $t(t, e) {
        var n = t._chartjs;
        if (n) {
          var r = n.listeners,
            i = r.indexOf(e);
          -1 !== i && r.splice(i, 1),
            r.length > 0 ||
              (Yt.forEach(function (e) {
                delete t[e];
              }),
              delete t._chartjs);
        }
      }
      function Xt(t) {
        var e,
          n,
          r = new Set();
        for (e = 0, n = t.length; e < n; ++e) r.add(t[e]);
        return r.size === n ? t : Array.from(r);
      }
      var Gt =
        'undefined' === typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function Qt(t, e, n) {
        var r =
            n ||
            function (t) {
              return Array.prototype.slice.call(t);
            },
          i = !1,
          a = [];
        return function () {
          for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
            o[l] = arguments[l];
          (a = r(o)),
            i ||
              ((i = !0),
              Gt.call(window, function () {
                (i = !1), t.apply(e, a);
              }));
        };
      }
      var qt = function (t) {
          return 'start' === t ? 'left' : 'end' === t ? 'right' : 'center';
        },
        Zt = function (t, e, n) {
          return 'start' === t ? e : 'end' === t ? n : (e + n) / 2;
        };
      function Kt(t, e, n) {
        var r = e.length,
          i = 0,
          a = r;
        if (t._sorted) {
          var o = t.iScale,
            l = t._parsed,
            s = o.axis,
            u = o.getUserBounds(),
            c = u.min,
            f = u.max,
            h = u.minDefined,
            d = u.maxDefined;
          h &&
            (i = Vt(
              Math.min(
                Ht(l, o.axis, c).lo,
                n ? r : Ht(e, s, o.getPixelForValue(c)).lo
              ),
              0,
              r - 1
            )),
            (a = d
              ? Vt(
                  Math.max(
                    Ht(l, o.axis, f, !0).hi + 1,
                    n ? 0 : Ht(e, s, o.getPixelForValue(f), !0).hi + 1
                  ),
                  i,
                  r
                ) - i
              : r - i);
        }
        return { start: i, count: a };
      }
      function Jt(t) {
        var e = t.xScale,
          n = t.yScale,
          r = t._scaleRanges,
          i = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max };
        if (!r) return (t._scaleRanges = i), !0;
        var a =
          r.xmin !== e.min ||
          r.xmax !== e.max ||
          r.ymin !== n.min ||
          r.ymax !== n.max;
        return Object.assign(r, i), a;
      }
      var te = function (t) {
          return 0 === t || 1 === t;
        },
        ee = function (t, e, n) {
          return -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * bt) / n);
        },
        ne = function (t, e, n) {
          return Math.pow(2, -10 * t) * Math.sin(((t - e) * bt) / n) + 1;
        },
        re = {
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return -t * (t - 2);
          },
          easeInOutQuad: function (t) {
            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return (t -= 1) * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t
              : 0.5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return -((t -= 1) * t * t * t - 1);
          },
          easeInOutQuart: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return (t -= 1) * t * t * t * t + 1;
          },
          easeInOutQuint: function (t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function (t) {
            return 1 - Math.cos(t * wt);
          },
          easeOutSine: function (t) {
            return Math.sin(t * wt);
          },
          easeInOutSine: function (t) {
            return -0.5 * (Math.cos(mt * t) - 1);
          },
          easeInExpo: function (t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
          },
          easeOutExpo: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          easeInOutExpo: function (t) {
            return te(t)
              ? t
              : t < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
          },
          easeInCirc: function (t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
          },
          easeOutCirc: function (t) {
            return Math.sqrt(1 - (t -= 1) * t);
          },
          easeInOutCirc: function (t) {
            return (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function (t) {
            return te(t) ? t : ee(t, 0.075, 0.3);
          },
          easeOutElastic: function (t) {
            return te(t) ? t : ne(t, 0.075, 0.3);
          },
          easeInOutElastic: function (t) {
            var e = 0.1125;
            return te(t)
              ? t
              : t < 0.5
              ? 0.5 * ee(2 * t, e, 0.45)
              : 0.5 + 0.5 * ne(2 * t - 1, e, 0.45);
          },
          easeInBack: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack: function (t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack: function (t) {
            var e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: function (t) {
            return 1 - re.easeOutBounce(1 - t);
          },
          easeOutBounce: function (t) {
            var e = 7.5625,
              n = 2.75;
            return t < 1 / n
              ? e * t * t
              : t < 2 / n
              ? e * (t -= 1.5 / n) * t + 0.75
              : t < 2.5 / n
              ? e * (t -= 2.25 / n) * t + 0.9375
              : e * (t -= 2.625 / n) * t + 0.984375;
          },
          easeInOutBounce: function (t) {
            return t < 0.5
              ? 0.5 * re.easeInBounce(2 * t)
              : 0.5 * re.easeOutBounce(2 * t - 1) + 0.5;
          },
        };
      function ie(t) {
        return (t + 0.5) | 0;
      }
      var ae = function (t, e, n) {
        return Math.max(Math.min(t, n), e);
      };
      function oe(t) {
        return ae(ie(2.55 * t), 0, 255);
      }
      function le(t) {
        return ae(ie(255 * t), 0, 255);
      }
      function se(t) {
        return ae(ie(t / 2.55) / 100, 0, 1);
      }
      function ue(t) {
        return ae(ie(100 * t), 0, 100);
      }
      var ce = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        fe = U('0123456789ABCDEF'),
        he = function (t) {
          return fe[15 & t];
        },
        de = function (t) {
          return fe[(240 & t) >> 4] + fe[15 & t];
        },
        pe = function (t) {
          return (240 & t) >> 4 === (15 & t);
        };
      function ve(t) {
        var e = (function (t) {
          return pe(t.r) && pe(t.g) && pe(t.b) && pe(t.a);
        })(t)
          ? he
          : de;
        return t
          ? '#' +
              e(t.r) +
              e(t.g) +
              e(t.b) +
              (function (t, e) {
                return t < 255 ? e(t) : '';
              })(t.a, e)
          : void 0;
      }
      var ge =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function ye(t, e, n) {
        var r = e * Math.min(n, 1 - n),
          i = function (e) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : (e + t / 30) % 12;
            return n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
          };
        return [i(0), i(8), i(4)];
      }
      function me(t, e, n) {
        var r = function (r) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (r + t / 60) % 6;
          return n - n * e * Math.max(Math.min(i, 4 - i, 1), 0);
        };
        return [r(5), r(3), r(1)];
      }
      function be(t, e, n) {
        var r,
          i = ye(t, 1, 0.5);
        for (e + n > 1 && ((e *= r = 1 / (e + n)), (n *= r)), r = 0; r < 3; r++)
          (i[r] *= 1 - e - n), (i[r] += e);
        return i;
      }
      function xe(t) {
        var e,
          n,
          r,
          i = t.r / 255,
          a = t.g / 255,
          o = t.b / 255,
          l = Math.max(i, a, o),
          s = Math.min(i, a, o),
          u = (l + s) / 2;
        return (
          l !== s &&
            ((r = l - s),
            (n = u > 0.5 ? r / (2 - l - s) : r / (l + s)),
            (e = (function (t, e, n, r, i) {
              return t === i
                ? (e - n) / r + (e < n ? 6 : 0)
                : e === i
                ? (n - t) / r + 2
                : (t - e) / r + 4;
            })(i, a, o, r, l)),
            (e = 60 * e + 0.5)),
          [0 | e, n || 0, u]
        );
      }
      function ke(t, e, n, r) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(le);
      }
      function _e(t, e, n) {
        return ke(ye, t, e, n);
      }
      function we(t) {
        return ((t % 360) + 360) % 360;
      }
      function Se(t) {
        var e,
          n = ge.exec(t),
          r = 255;
        if (n) {
          n[5] !== e && (r = n[6] ? oe(+n[5]) : le(+n[5]));
          var i = we(+n[2]),
            a = +n[3] / 100,
            o = +n[4] / 100;
          return (
            (e =
              'hwb' === n[1]
                ? (function (t, e, n) {
                    return ke(be, t, e, n);
                  })(i, a, o)
                : 'hsv' === n[1]
                ? (function (t, e, n) {
                    return ke(me, t, e, n);
                  })(i, a, o)
                : _e(i, a, o)),
            { r: e[0], g: e[1], b: e[2], a: r }
          );
        }
      }
      var Me,
        Ee = {
          x: 'dark',
          Z: 'light',
          Y: 're',
          X: 'blu',
          W: 'gr',
          V: 'medium',
          U: 'slate',
          A: 'ee',
          T: 'ol',
          S: 'or',
          B: 'ra',
          C: 'lateg',
          D: 'ights',
          R: 'in',
          Q: 'turquois',
          E: 'hi',
          P: 'ro',
          O: 'al',
          N: 'le',
          M: 'de',
          L: 'yello',
          F: 'en',
          K: 'ch',
          G: 'arks',
          H: 'ea',
          I: 'ightg',
          J: 'wh',
        },
        Pe = {
          OiceXe: 'f0f8ff',
          antiquewEte: 'faebd7',
          aqua: 'ffff',
          aquamarRe: '7fffd4',
          azuY: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '0',
          blanKedOmond: 'ffebcd',
          Xe: 'ff',
          XeviTet: '8a2be2',
          bPwn: 'a52a2a',
          burlywood: 'deb887',
          caMtXe: '5f9ea0',
          KartYuse: '7fff00',
          KocTate: 'd2691e',
          cSO: 'ff7f50',
          cSnflowerXe: '6495ed',
          cSnsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: 'ffff',
          xXe: '8b',
          xcyan: '8b8b',
          xgTMnPd: 'b8860b',
          xWay: 'a9a9a9',
          xgYF: '6400',
          xgYy: 'a9a9a9',
          xkhaki: 'bdb76b',
          xmagFta: '8b008b',
          xTivegYF: '556b2f',
          xSange: 'ff8c00',
          xScEd: '9932cc',
          xYd: '8b0000',
          xsOmon: 'e9967a',
          xsHgYF: '8fbc8f',
          xUXe: '483d8b',
          xUWay: '2f4f4f',
          xUgYy: '2f4f4f',
          xQe: 'ced1',
          xviTet: '9400d3',
          dAppRk: 'ff1493',
          dApskyXe: 'bfff',
          dimWay: '696969',
          dimgYy: '696969',
          dodgerXe: '1e90ff',
          fiYbrick: 'b22222',
          flSOwEte: 'fffaf0',
          foYstWAn: '228b22',
          fuKsia: 'ff00ff',
          gaRsbSo: 'dcdcdc',
          ghostwEte: 'f8f8ff',
          gTd: 'ffd700',
          gTMnPd: 'daa520',
          Way: '808080',
          gYF: '8000',
          gYFLw: 'adff2f',
          gYy: '808080',
          honeyMw: 'f0fff0',
          hotpRk: 'ff69b4',
          RdianYd: 'cd5c5c',
          Rdigo: '4b0082',
          ivSy: 'fffff0',
          khaki: 'f0e68c',
          lavFMr: 'e6e6fa',
          lavFMrXsh: 'fff0f5',
          lawngYF: '7cfc00',
          NmoncEffon: 'fffacd',
          ZXe: 'add8e6',
          ZcSO: 'f08080',
          Zcyan: 'e0ffff',
          ZgTMnPdLw: 'fafad2',
          ZWay: 'd3d3d3',
          ZgYF: '90ee90',
          ZgYy: 'd3d3d3',
          ZpRk: 'ffb6c1',
          ZsOmon: 'ffa07a',
          ZsHgYF: '20b2aa',
          ZskyXe: '87cefa',
          ZUWay: '778899',
          ZUgYy: '778899',
          ZstAlXe: 'b0c4de',
          ZLw: 'ffffe0',
          lime: 'ff00',
          limegYF: '32cd32',
          lRF: 'faf0e6',
          magFta: 'ff00ff',
          maPon: '800000',
          VaquamarRe: '66cdaa',
          VXe: 'cd',
          VScEd: 'ba55d3',
          VpurpN: '9370db',
          VsHgYF: '3cb371',
          VUXe: '7b68ee',
          VsprRggYF: 'fa9a',
          VQe: '48d1cc',
          VviTetYd: 'c71585',
          midnightXe: '191970',
          mRtcYam: 'f5fffa',
          mistyPse: 'ffe4e1',
          moccasR: 'ffe4b5',
          navajowEte: 'ffdead',
          navy: '80',
          Tdlace: 'fdf5e6',
          Tive: '808000',
          TivedBb: '6b8e23',
          Sange: 'ffa500',
          SangeYd: 'ff4500',
          ScEd: 'da70d6',
          pOegTMnPd: 'eee8aa',
          pOegYF: '98fb98',
          pOeQe: 'afeeee',
          pOeviTetYd: 'db7093',
          papayawEp: 'ffefd5',
          pHKpuff: 'ffdab9',
          peru: 'cd853f',
          pRk: 'ffc0cb',
          plum: 'dda0dd',
          powMrXe: 'b0e0e6',
          purpN: '800080',
          YbeccapurpN: '663399',
          Yd: 'ff0000',
          Psybrown: 'bc8f8f',
          PyOXe: '4169e1',
          saddNbPwn: '8b4513',
          sOmon: 'fa8072',
          sandybPwn: 'f4a460',
          sHgYF: '2e8b57',
          sHshell: 'fff5ee',
          siFna: 'a0522d',
          silver: 'c0c0c0',
          skyXe: '87ceeb',
          UXe: '6a5acd',
          UWay: '708090',
          UgYy: '708090',
          snow: 'fffafa',
          sprRggYF: 'ff7f',
          stAlXe: '4682b4',
          tan: 'd2b48c',
          teO: '8080',
          tEstN: 'd8bfd8',
          tomato: 'ff6347',
          Qe: '40e0d0',
          viTet: 'ee82ee',
          JHt: 'f5deb3',
          wEte: 'ffffff',
          wEtesmoke: 'f5f5f5',
          Lw: 'ffff00',
          LwgYF: '9acd32',
        };
      function Ce(t) {
        Me ||
          ((Me = (function () {
            var t,
              e,
              n,
              r,
              i,
              a = {},
              o = Object.keys(Pe),
              l = Object.keys(Ee);
            for (t = 0; t < o.length; t++) {
              for (r = i = o[t], e = 0; e < l.length; e++)
                (n = l[e]), (i = i.replace(n, Ee[n]));
              (n = parseInt(Pe[r], 16)),
                (a[i] = [(n >> 16) & 255, (n >> 8) & 255, 255 & n]);
            }
            return a;
          })()),
          (Me.transparent = [0, 0, 0, 0]));
        var e = Me[t.toLowerCase()];
        return (
          e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        );
      }
      var Oe =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      var Ae = function (t) {
          return t <= 0.0031308
            ? 12.92 * t
            : 1.055 * Math.pow(t, 1 / 2.4) - 0.055;
        },
        Te = function (t) {
          return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
        };
      function De(t, e, n) {
        if (t) {
          var r = xe(t);
          (r[e] = Math.max(0, Math.min(r[e] + r[e] * n, 0 === e ? 360 : 1))),
            (r = _e(r)),
            (t.r = r[0]),
            (t.g = r[1]),
            (t.b = r[2]);
        }
      }
      function Le(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function Re(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = le(t[3])))
            : ((e = Le(t, { r: 0, g: 0, b: 0, a: 1 })).a = le(e.a)),
          e
        );
      }
      function Ne(t) {
        return 'r' === t.charAt(0)
          ? (function (t) {
              var e,
                n,
                r,
                i = Oe.exec(t),
                a = 255;
              if (i) {
                if (i[7] !== e) {
                  var o = +i[7];
                  a = i[8] ? oe(o) : ae(255 * o, 0, 255);
                }
                return (
                  (e = +i[1]),
                  (n = +i[3]),
                  (r = +i[5]),
                  {
                    r: (e = 255 & (i[2] ? oe(e) : ae(e, 0, 255))),
                    g: (n = 255 & (i[4] ? oe(n) : ae(n, 0, 255))),
                    b: (r = 255 & (i[6] ? oe(r) : ae(r, 0, 255))),
                    a: a,
                  }
                );
              }
            })(t)
          : Se(t);
      }
      var Ie = (function () {
        function t(e) {
          if ((Y(this, t), e instanceof t)) return e;
          var n,
            r = typeof e;
          'object' === r
            ? (n = Re(e))
            : 'string' === r &&
              (n =
                (function (t) {
                  var e,
                    n = t.length;
                  return (
                    '#' === t[0] &&
                      (4 === n || 5 === n
                        ? (e = {
                            r: 255 & (17 * ce[t[1]]),
                            g: 255 & (17 * ce[t[2]]),
                            b: 255 & (17 * ce[t[3]]),
                            a: 5 === n ? 17 * ce[t[4]] : 255,
                          })
                        : (7 !== n && 9 !== n) ||
                          (e = {
                            r: (ce[t[1]] << 4) | ce[t[2]],
                            g: (ce[t[3]] << 4) | ce[t[4]],
                            b: (ce[t[5]] << 4) | ce[t[6]],
                            a: 9 === n ? (ce[t[7]] << 4) | ce[t[8]] : 255,
                          })),
                    e
                  );
                })(e) ||
                Ce(e) ||
                Ne(e)),
            (this._rgb = n),
            (this._valid = !!n);
        }
        return (
          X(t, [
            {
              key: 'valid',
              get: function () {
                return this._valid;
              },
            },
            {
              key: 'rgb',
              get: function () {
                var t = Le(this._rgb);
                return t && (t.a = se(t.a)), t;
              },
              set: function (t) {
                this._rgb = Re(t);
              },
            },
            {
              key: 'rgbString',
              value: function () {
                return this._valid
                  ? (function (t) {
                      return (
                        t &&
                        (t.a < 255
                          ? 'rgba('
                              .concat(t.r, ', ')
                              .concat(t.g, ', ')
                              .concat(t.b, ', ')
                              .concat(se(t.a), ')')
                          : 'rgb('
                              .concat(t.r, ', ')
                              .concat(t.g, ', ')
                              .concat(t.b, ')'))
                      );
                    })(this._rgb)
                  : void 0;
              },
            },
            {
              key: 'hexString',
              value: function () {
                return this._valid ? ve(this._rgb) : void 0;
              },
            },
            {
              key: 'hslString',
              value: function () {
                return this._valid
                  ? (function (t) {
                      if (t) {
                        var e = xe(t),
                          n = e[0],
                          r = ue(e[1]),
                          i = ue(e[2]);
                        return t.a < 255
                          ? 'hsla('
                              .concat(n, ', ')
                              .concat(r, '%, ')
                              .concat(i, '%, ')
                              .concat(se(t.a), ')')
                          : 'hsl('
                              .concat(n, ', ')
                              .concat(r, '%, ')
                              .concat(i, '%)');
                      }
                    })(this._rgb)
                  : void 0;
              },
            },
            {
              key: 'mix',
              value: function (t, e) {
                if (t) {
                  var n,
                    r = this.rgb,
                    i = t.rgb,
                    a = e === n ? 0.5 : e,
                    o = 2 * a - 1,
                    l = r.a - i.a,
                    s = ((o * l === -1 ? o : (o + l) / (1 + o * l)) + 1) / 2;
                  (n = 1 - s),
                    (r.r = 255 & (s * r.r + n * i.r + 0.5)),
                    (r.g = 255 & (s * r.g + n * i.g + 0.5)),
                    (r.b = 255 & (s * r.b + n * i.b + 0.5)),
                    (r.a = a * r.a + (1 - a) * i.a),
                    (this.rgb = r);
                }
                return this;
              },
            },
            {
              key: 'interpolate',
              value: function (t, e) {
                return (
                  t &&
                    (this._rgb = (function (t, e, n) {
                      var r = Te(se(t.r)),
                        i = Te(se(t.g)),
                        a = Te(se(t.b));
                      return {
                        r: le(Ae(r + n * (Te(se(e.r)) - r))),
                        g: le(Ae(i + n * (Te(se(e.g)) - i))),
                        b: le(Ae(a + n * (Te(se(e.b)) - a))),
                        a: t.a + n * (e.a - t.a),
                      };
                    })(this._rgb, t._rgb, e)),
                  this
                );
              },
            },
            {
              key: 'clone',
              value: function () {
                return new t(this.rgb);
              },
            },
            {
              key: 'alpha',
              value: function (t) {
                return (this._rgb.a = le(t)), this;
              },
            },
            {
              key: 'clearer',
              value: function (t) {
                return (this._rgb.a *= 1 - t), this;
              },
            },
            {
              key: 'greyscale',
              value: function () {
                var t = this._rgb,
                  e = ie(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
                return (t.r = t.g = t.b = e), this;
              },
            },
            {
              key: 'opaquer',
              value: function (t) {
                return (this._rgb.a *= 1 + t), this;
              },
            },
            {
              key: 'negate',
              value: function () {
                var t = this._rgb;
                return (
                  (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
                );
              },
            },
            {
              key: 'lighten',
              value: function (t) {
                return De(this._rgb, 2, t), this;
              },
            },
            {
              key: 'darken',
              value: function (t) {
                return De(this._rgb, 2, -t), this;
              },
            },
            {
              key: 'saturate',
              value: function (t) {
                return De(this._rgb, 1, t), this;
              },
            },
            {
              key: 'desaturate',
              value: function (t) {
                return De(this._rgb, 1, -t), this;
              },
            },
            {
              key: 'rotate',
              value: function (t) {
                return (
                  (function (t, e) {
                    var n = xe(t);
                    (n[0] = we(n[0] + e)),
                      (n = _e(n)),
                      (t.r = n[0]),
                      (t.g = n[1]),
                      (t.b = n[2]);
                  })(this._rgb, t),
                  this
                );
              },
            },
          ]),
          t
        );
      })();
      function ze(t) {
        return new Ie(t);
      }
      function je(t) {
        if (t && 'object' === typeof t) {
          var e = t.toString();
          return (
            '[object CanvasPattern]' === e || '[object CanvasGradient]' === e
          );
        }
        return !1;
      }
      function Fe(t) {
        return je(t) ? t : ze(t);
      }
      function Ve(t) {
        return je(t) ? t : ze(t).saturate(0.5).darken(0.1).hexString();
      }
      var Be = Object.create(null),
        We = Object.create(null);
      function He(t, e) {
        if (!e) return t;
        for (var n = e.split('.'), r = 0, i = n.length; r < i; ++r) {
          var a = n[r];
          t = t[a] || (t[a] = Object.create(null));
        }
        return t;
      }
      function Ue(t, e, n) {
        return 'string' === typeof e ? ut(He(t, e), n) : ut(He(t, ''), e);
      }
      var Ye = (function () {
          function t(e) {
            Y(this, t),
              (this.animation = void 0),
              (this.backgroundColor = 'rgba(0,0,0,0.1)'),
              (this.borderColor = 'rgba(0,0,0,0.1)'),
              (this.color = '#666'),
              (this.datasets = {}),
              (this.devicePixelRatio = function (t) {
                return t.chart.platform.getDevicePixelRatio();
              }),
              (this.elements = {}),
              (this.events = [
                'mousemove',
                'mouseout',
                'click',
                'touchstart',
                'touchmove',
              ]),
              (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: 'normal',
                lineHeight: 1.2,
                weight: null,
              }),
              (this.hover = {}),
              (this.hoverBackgroundColor = function (t, e) {
                return Ve(e.backgroundColor);
              }),
              (this.hoverBorderColor = function (t, e) {
                return Ve(e.borderColor);
              }),
              (this.hoverColor = function (t, e) {
                return Ve(e.color);
              }),
              (this.indexAxis = 'x'),
              (this.interaction = {
                mode: 'nearest',
                intersect: !0,
                includeInvisible: !1,
              }),
              (this.maintainAspectRatio = !0),
              (this.onHover = null),
              (this.onClick = null),
              (this.parsing = !0),
              (this.plugins = {}),
              (this.responsive = !0),
              (this.scale = void 0),
              (this.scales = {}),
              (this.showLine = !0),
              (this.drawActiveElementsOnTop = !0),
              this.describe(e);
          }
          return (
            X(t, [
              {
                key: 'set',
                value: function (t, e) {
                  return Ue(this, t, e);
                },
              },
              {
                key: 'get',
                value: function (t) {
                  return He(this, t);
                },
              },
              {
                key: 'describe',
                value: function (t, e) {
                  return Ue(We, t, e);
                },
              },
              {
                key: 'override',
                value: function (t, e) {
                  return Ue(Be, t, e);
                },
              },
              {
                key: 'route',
                value: function (t, e, n, r) {
                  var i,
                    a = He(this, t),
                    o = He(this, n),
                    l = '_' + e;
                  Object.defineProperties(
                    a,
                    (D((i = {}), l, { value: a[e], writable: !0 }),
                    D(i, e, {
                      enumerable: !0,
                      get: function () {
                        var t = this[l],
                          e = o[r];
                        return K(t) ? Object.assign({}, e, t) : et(t, e);
                      },
                      set: function (t) {
                        this[l] = t;
                      },
                    }),
                    i)
                  );
                },
              },
            ]),
            t
          );
        })(),
        $e = new Ye({
          _scriptable: function (t) {
            return !t.startsWith('on');
          },
          _indexable: function (t) {
            return 'events' !== t;
          },
          hover: { _fallback: 'interaction' },
          interaction: { _scriptable: !1, _indexable: !1 },
        });
      function Xe(t, e, n, r, i) {
        var a = e[i];
        return (
          a || ((a = e[i] = t.measureText(i).width), n.push(i)),
          a > r && (r = a),
          r
        );
      }
      function Ge(t, e, n, r) {
        var i = ((r = r || {}).data = r.data || {}),
          a = (r.garbageCollect = r.garbageCollect || []);
        r.font !== e &&
          ((i = r.data = {}), (a = r.garbageCollect = []), (r.font = e)),
          t.save(),
          (t.font = e);
        var o,
          l,
          s,
          u,
          c,
          f = 0,
          h = n.length;
        for (o = 0; o < h; o++)
          if (void 0 !== (u = n[o]) && null !== u && !0 !== Z(u))
            f = Xe(t, i, a, f, u);
          else if (Z(u))
            for (l = 0, s = u.length; l < s; l++)
              void 0 === (c = u[l]) ||
                null === c ||
                Z(c) ||
                (f = Xe(t, i, a, f, c));
        t.restore();
        var d = a.length / 2;
        if (d > n.length) {
          for (o = 0; o < d; o++) delete i[a[o]];
          a.splice(0, d);
        }
        return f;
      }
      function Qe(t, e, n) {
        var r = t.currentDevicePixelRatio,
          i = 0 !== n ? Math.max(n / 2, 0.5) : 0;
        return Math.round((e - i) * r) / r + i;
      }
      function qe(t, e) {
        (e = e || t.getContext('2d')).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore();
      }
      function Ze(t, e, n, r) {
        Ke(t, e, n, r, null);
      }
      function Ke(t, e, n, r, i) {
        var a,
          o,
          l,
          s,
          u,
          c,
          f = e.pointStyle,
          h = e.rotation,
          d = e.radius,
          p = (h || 0) * _t;
        if (
          f &&
          'object' === typeof f &&
          ('[object HTMLImageElement]' === (a = f.toString()) ||
            '[object HTMLCanvasElement]' === a)
        )
          return (
            t.save(),
            t.translate(n, r),
            t.rotate(p),
            t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
            void t.restore()
          );
        if (!(isNaN(d) || d <= 0)) {
          switch ((t.beginPath(), f)) {
            default:
              i ? t.ellipse(n, r, i / 2, d, 0, 0, bt) : t.arc(n, r, d, 0, bt),
                t.closePath();
              break;
            case 'triangle':
              t.moveTo(n + Math.sin(p) * d, r - Math.cos(p) * d),
                (p += Mt),
                t.lineTo(n + Math.sin(p) * d, r - Math.cos(p) * d),
                (p += Mt),
                t.lineTo(n + Math.sin(p) * d, r - Math.cos(p) * d),
                t.closePath();
              break;
            case 'rectRounded':
              (s = d - (u = 0.516 * d)),
                (o = Math.cos(p + St) * s),
                (l = Math.sin(p + St) * s),
                t.arc(n - o, r - l, u, p - mt, p - wt),
                t.arc(n + l, r - o, u, p - wt, p),
                t.arc(n + o, r + l, u, p, p + wt),
                t.arc(n - l, r + o, u, p + wt, p + mt),
                t.closePath();
              break;
            case 'rect':
              if (!h) {
                (s = Math.SQRT1_2 * d),
                  (c = i ? i / 2 : s),
                  t.rect(n - c, r - s, 2 * c, 2 * s);
                break;
              }
              p += St;
            case 'rectRot':
              (o = Math.cos(p) * d),
                (l = Math.sin(p) * d),
                t.moveTo(n - o, r - l),
                t.lineTo(n + l, r - o),
                t.lineTo(n + o, r + l),
                t.lineTo(n - l, r + o),
                t.closePath();
              break;
            case 'crossRot':
              p += St;
            case 'cross':
              (o = Math.cos(p) * d),
                (l = Math.sin(p) * d),
                t.moveTo(n - o, r - l),
                t.lineTo(n + o, r + l),
                t.moveTo(n + l, r - o),
                t.lineTo(n - l, r + o);
              break;
            case 'star':
              (o = Math.cos(p) * d),
                (l = Math.sin(p) * d),
                t.moveTo(n - o, r - l),
                t.lineTo(n + o, r + l),
                t.moveTo(n + l, r - o),
                t.lineTo(n - l, r + o),
                (p += St),
                (o = Math.cos(p) * d),
                (l = Math.sin(p) * d),
                t.moveTo(n - o, r - l),
                t.lineTo(n + o, r + l),
                t.moveTo(n + l, r - o),
                t.lineTo(n - l, r + o);
              break;
            case 'line':
              (o = i ? i / 2 : Math.cos(p) * d),
                (l = Math.sin(p) * d),
                t.moveTo(n - o, r - l),
                t.lineTo(n + o, r + l);
              break;
            case 'dash':
              t.moveTo(n, r),
                t.lineTo(n + Math.cos(p) * d, r + Math.sin(p) * d);
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function Je(t, e, n) {
        return (
          (n = n || 0.5),
          !e ||
            (t &&
              t.x > e.left - n &&
              t.x < e.right + n &&
              t.y > e.top - n &&
              t.y < e.bottom + n)
        );
      }
      function tn(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function en(t) {
        t.restore();
      }
      function nn(t, e, n, r, i) {
        if (!e) return t.lineTo(n.x, n.y);
        if ('middle' === i) {
          var a = (e.x + n.x) / 2;
          t.lineTo(a, e.y), t.lineTo(a, n.y);
        } else
          ('after' === i) !== !!r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
        t.lineTo(n.x, n.y);
      }
      function rn(t, e, n, r) {
        if (!e) return t.lineTo(n.x, n.y);
        t.bezierCurveTo(
          r ? e.cp1x : e.cp2x,
          r ? e.cp1y : e.cp2y,
          r ? n.cp2x : n.cp1x,
          r ? n.cp2y : n.cp1y,
          n.x,
          n.y
        );
      }
      function an(t, e, n, r, i) {
        var a,
          o,
          l =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          s = Z(e) ? e : [e],
          u = l.strokeWidth > 0 && '' !== l.strokeColor;
        for (t.save(), t.font = i.string, on(t, l), a = 0; a < s.length; ++a)
          (o = s[a]),
            u &&
              (l.strokeColor && (t.strokeStyle = l.strokeColor),
              q(l.strokeWidth) || (t.lineWidth = l.strokeWidth),
              t.strokeText(o, n, r, l.maxWidth)),
            t.fillText(o, n, r, l.maxWidth),
            ln(t, n, r, o, l),
            (r += i.lineHeight);
        t.restore();
      }
      function on(t, e) {
        e.translation && t.translate(e.translation[0], e.translation[1]),
          q(e.rotation) || t.rotate(e.rotation),
          e.color && (t.fillStyle = e.color),
          e.textAlign && (t.textAlign = e.textAlign),
          e.textBaseline && (t.textBaseline = e.textBaseline);
      }
      function ln(t, e, n, r, i) {
        if (i.strikethrough || i.underline) {
          var a = t.measureText(r),
            o = e - a.actualBoundingBoxLeft,
            l = e + a.actualBoundingBoxRight,
            s = n - a.actualBoundingBoxAscent,
            u = n + a.actualBoundingBoxDescent,
            c = i.strikethrough ? (s + u) / 2 : u;
          (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = i.decorationWidth || 2),
            t.moveTo(o, c),
            t.lineTo(l, c),
            t.stroke();
        }
      }
      function sn(t, e) {
        var n = e.x,
          r = e.y,
          i = e.w,
          a = e.h,
          o = e.radius;
        t.arc(n + o.topLeft, r + o.topLeft, o.topLeft, -wt, mt, !0),
          t.lineTo(n, r + a - o.bottomLeft),
          t.arc(
            n + o.bottomLeft,
            r + a - o.bottomLeft,
            o.bottomLeft,
            mt,
            wt,
            !0
          ),
          t.lineTo(n + i - o.bottomRight, r + a),
          t.arc(
            n + i - o.bottomRight,
            r + a - o.bottomRight,
            o.bottomRight,
            wt,
            0,
            !0
          ),
          t.lineTo(n + i, r + o.topRight),
          t.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -wt, !0),
          t.lineTo(n + o.topLeft, r);
      }
      var un = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        cn = new RegExp(
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
        );
      function fn(t, e) {
        var n = ('' + t).match(un);
        if (!n || 'normal' === n[1]) return 1.2 * e;
        switch (((t = +n[2]), n[3])) {
          case 'px':
            return t;
          case '%':
            t /= 100;
        }
        return e * t;
      }
      var hn = function (t) {
        return +t || 0;
      };
      function dn(t, e) {
        var n,
          r = {},
          i = K(e),
          a = i ? Object.keys(e) : e,
          o = K(t)
            ? i
              ? function (n) {
                  return et(t[n], t[e[n]]);
                }
              : function (e) {
                  return t[e];
                }
            : function () {
                return t;
              },
          l = H(a);
        try {
          for (l.s(); !(n = l.n()).done; ) {
            var s = n.value;
            r[s] = hn(o(s));
          }
        } catch (u) {
          l.e(u);
        } finally {
          l.f();
        }
        return r;
      }
      function pn(t) {
        return dn(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
      }
      function vn(t) {
        return dn(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
      }
      function gn(t) {
        var e = pn(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function yn(t, e) {
        (t = t || {}), (e = e || $e.font);
        var n = et(t.size, e.size);
        'string' === typeof n && (n = parseInt(n, 10));
        var r = et(t.style, e.style);
        r &&
          !('' + r).match(cn) &&
          (console.warn('Invalid font style specified: "' + r + '"'), (r = ''));
        var i = {
          family: et(t.family, e.family),
          lineHeight: fn(et(t.lineHeight, e.lineHeight), n),
          size: n,
          style: r,
          weight: et(t.weight, e.weight),
          string: '',
        };
        return (
          (i.string = (function (t) {
            return !t || q(t.size) || q(t.family)
              ? null
              : (t.style ? t.style + ' ' : '') +
                  (t.weight ? t.weight + ' ' : '') +
                  t.size +
                  'px ' +
                  t.family;
          })(i)),
          i
        );
      }
      function mn(t, e, n, r) {
        var i,
          a,
          o,
          l = !0;
        for (i = 0, a = t.length; i < a; ++i)
          if (
            void 0 !== (o = t[i]) &&
            (void 0 !== e && 'function' === typeof o && ((o = o(e)), (l = !1)),
            void 0 !== n && Z(o) && ((o = o[n % o.length]), (l = !1)),
            void 0 !== o)
          )
            return r && !l && (r.cacheable = !1), o;
      }
      function bn(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function xn(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : [''],
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          i = arguments.length > 3 ? arguments[3] : void 0,
          a =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : function () {
                  return t[0];
                };
        vt(i) || (i = Dn('_fallback', t));
        var o =
          (D((e = {}), Symbol.toStringTag, 'Object'),
          D(e, '_cacheable', !0),
          D(e, '_scopes', t),
          D(e, '_rootScopes', r),
          D(e, '_fallback', i),
          D(e, '_getTarget', a),
          D(e, 'override', function (e) {
            return xn([e].concat(U(t)), n, r, i);
          }),
          e);
        return new Proxy(o, {
          deleteProperty: function (e, n) {
            return delete e[n], delete e._keys, delete t[0][n], !0;
          },
          get: function (e, r) {
            return Mn(e, r, function () {
              return Tn(r, n, t, e);
            });
          },
          getOwnPropertyDescriptor: function (t, e) {
            return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(t[0]);
          },
          has: function (t, e) {
            return Ln(t).includes(e);
          },
          ownKeys: function (t) {
            return Ln(t);
          },
          set: function (t, e, n) {
            var r = t._storage || (t._storage = a());
            return (t[e] = r[e] = n), delete t._keys, !0;
          },
        });
      }
      function kn(t, e, n, r) {
        var i = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: n,
          _stack: new Set(),
          _descriptors: _n(t, r),
          setContext: function (e) {
            return kn(t, e, n, r);
          },
          override: function (i) {
            return kn(t.override(i), e, n, r);
          },
        };
        return new Proxy(i, {
          deleteProperty: function (e, n) {
            return delete e[n], delete t[n], !0;
          },
          get: function (t, e, n) {
            return Mn(t, e, function () {
              return (function (t, e, n) {
                var r = t._proxy,
                  i = t._context,
                  a = t._subProxy,
                  o = t._descriptors,
                  l = r[e];
                gt(l) &&
                  o.isScriptable(e) &&
                  (l = (function (t, e, n, r) {
                    var i = n._proxy,
                      a = n._context,
                      o = n._subProxy,
                      l = n._stack;
                    if (l.has(t))
                      throw new Error(
                        'Recursion detected: ' +
                          Array.from(l).join('->') +
                          '->' +
                          t
                      );
                    l.add(t),
                      (e = e(a, o || r)),
                      l.delete(t),
                      Sn(t, e) && (e = On(i._scopes, i, t, e));
                    return e;
                  })(e, l, t, n));
                Z(l) &&
                  l.length &&
                  (l = (function (t, e, n, r) {
                    var i = n._proxy,
                      a = n._context,
                      o = n._subProxy,
                      l = n._descriptors;
                    if (vt(a.index) && r(t)) e = e[a.index % e.length];
                    else if (K(e[0])) {
                      var s = e,
                        u = i._scopes.filter(function (t) {
                          return t !== s;
                        });
                      e = [];
                      var c,
                        f = H(s);
                      try {
                        for (f.s(); !(c = f.n()).done; ) {
                          var h = On(u, i, t, c.value);
                          e.push(kn(h, a, o && o[t], l));
                        }
                      } catch (d) {
                        f.e(d);
                      } finally {
                        f.f();
                      }
                    }
                    return e;
                  })(e, l, t, o.isIndexable));
                Sn(e, l) && (l = kn(l, i, a && a[e], o));
                return l;
              })(t, e, n);
            });
          },
          getOwnPropertyDescriptor: function (e, n) {
            return e._descriptors.allKeys
              ? Reflect.has(t, n)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, n);
          },
          getPrototypeOf: function () {
            return Reflect.getPrototypeOf(t);
          },
          has: function (e, n) {
            return Reflect.has(t, n);
          },
          ownKeys: function () {
            return Reflect.ownKeys(t);
          },
          set: function (e, n, r) {
            return (t[n] = r), delete e[n], !0;
          },
        });
      }
      function _n(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { scriptable: !0, indexable: !0 },
          n = t._scriptable,
          r = void 0 === n ? e.scriptable : n,
          i = t._indexable,
          a = void 0 === i ? e.indexable : i,
          o = t._allKeys,
          l = void 0 === o ? e.allKeys : o;
        return {
          allKeys: l,
          scriptable: r,
          indexable: a,
          isScriptable: gt(r)
            ? r
            : function () {
                return r;
              },
          isIndexable: gt(a)
            ? a
            : function () {
                return a;
              },
        };
      }
      var wn = function (t, e) {
          return t ? t + pt(e) : e;
        },
        Sn = function (t, e) {
          return (
            K(e) &&
            'adapters' !== t &&
            (null === Object.getPrototypeOf(e) || e.constructor === Object)
          );
        };
      function Mn(t, e, n) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        var r = n();
        return (t[e] = r), r;
      }
      function En(t, e, n) {
        return gt(t) ? t(e, n) : t;
      }
      var Pn = function (t, e) {
        return !0 === t ? e : 'string' === typeof t ? dt(e, t) : void 0;
      };
      function Cn(t, e, n, r, i) {
        var a,
          o = H(e);
        try {
          for (o.s(); !(a = o.n()).done; ) {
            var l = a.value,
              s = Pn(n, l);
            if (s) {
              t.add(s);
              var u = En(s._fallback, n, i);
              if (vt(u) && u !== n && u !== r) return u;
            } else if (!1 === s && vt(r) && n !== r) return null;
          }
        } catch (c) {
          o.e(c);
        } finally {
          o.f();
        }
        return !1;
      }
      function On(t, e, n, r) {
        var i = e._rootScopes,
          a = En(e._fallback, n, r),
          o = [].concat(U(t), U(i)),
          l = new Set();
        l.add(r);
        var s = An(l, o, n, a || n, r);
        return (
          null !== s &&
          (!vt(a) || a === n || null !== (s = An(l, o, a, s, r))) &&
          xn(Array.from(l), [''], i, a, function () {
            return (function (t, e, n) {
              var r = t._getTarget();
              e in r || (r[e] = {});
              var i = r[e];
              if (Z(i) && K(n)) return n;
              return i;
            })(e, n, r);
          })
        );
      }
      function An(t, e, n, r, i) {
        for (; n; ) n = Cn(t, e, n, r, i);
        return n;
      }
      function Tn(t, e, n, r) {
        var i,
          a,
          o = H(e);
        try {
          for (o.s(); !(a = o.n()).done; ) {
            var l = a.value;
            if (((i = Dn(wn(l, t), n)), vt(i)))
              return Sn(t, i) ? On(n, r, t, i) : i;
          }
        } catch (s) {
          o.e(s);
        } finally {
          o.f();
        }
      }
      function Dn(t, e) {
        var n,
          r = H(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (i) {
              var a = i[t];
              if (vt(a)) return a;
            }
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
      }
      function Ln(t) {
        var e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                var e,
                  n = new Set(),
                  r = H(t);
                try {
                  for (r.s(); !(e = r.n()).done; ) {
                    var i,
                      a = e.value,
                      o = H(
                        Object.keys(a).filter(function (t) {
                          return !t.startsWith('_');
                        })
                      );
                    try {
                      for (o.s(); !(i = o.n()).done; ) {
                        var l = i.value;
                        n.add(l);
                      }
                    } catch (s) {
                      o.e(s);
                    } finally {
                      o.f();
                    }
                  }
                } catch (s) {
                  r.e(s);
                } finally {
                  r.f();
                }
                return Array.from(n);
              })(t._scopes)),
          e
        );
      }
      function Rn(t, e, n, r) {
        var i,
          a,
          o,
          l,
          s = t.iScale,
          u = this._parsing.key,
          c = void 0 === u ? 'r' : u,
          f = new Array(r);
        for (i = 0, a = r; i < a; ++i)
          (l = e[(o = i + n)]), (f[i] = { r: s.parse(dt(l, c), o) });
        return f;
      }
      var Nn = Number.EPSILON || 1e-14,
        In = function (t, e) {
          return e < t.length && !t[e].skip && t[e];
        },
        zn = function (t) {
          return 'x' === t ? 'y' : 'x';
        };
      function jn(t, e, n, r) {
        var i = t.skip ? e : t,
          a = e,
          o = n.skip ? e : n,
          l = It(a, i),
          s = It(o, a),
          u = l / (l + s),
          c = s / (l + s),
          f = r * (u = isNaN(u) ? 0 : u),
          h = r * (c = isNaN(c) ? 0 : c);
        return {
          previous: { x: a.x - f * (o.x - i.x), y: a.y - f * (o.y - i.y) },
          next: { x: a.x + h * (o.x - i.x), y: a.y + h * (o.y - i.y) },
        };
      }
      function Fn(t, e, n) {
        for (
          var r, i, a, o, l, s = t.length, u = In(t, 0), c = 0;
          c < s - 1;
          ++c
        )
          (l = u),
            (u = In(t, c + 1)),
            l &&
              u &&
              (At(e[c], 0, Nn)
                ? (n[c] = n[c + 1] = 0)
                : ((r = n[c] / e[c]),
                  (i = n[c + 1] / e[c]),
                  (o = Math.pow(r, 2) + Math.pow(i, 2)) <= 9 ||
                    ((a = 3 / Math.sqrt(o)),
                    (n[c] = r * a * e[c]),
                    (n[c + 1] = i * a * e[c]))));
      }
      function Vn(t, e) {
        for (
          var n,
            r,
            i,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 'x',
            o = zn(a),
            l = t.length,
            s = In(t, 0),
            u = 0;
          u < l;
          ++u
        )
          if (((r = i), (i = s), (s = In(t, u + 1)), i)) {
            var c = i[a],
              f = i[o];
            r &&
              ((n = (c - r[a]) / 3),
              (i['cp1'.concat(a)] = c - n),
              (i['cp1'.concat(o)] = f - n * e[u])),
              s &&
                ((n = (s[a] - c) / 3),
                (i['cp2'.concat(a)] = c + n),
                (i['cp2'.concat(o)] = f + n * e[u]));
          }
      }
      function Bn(t, e, n) {
        return Math.max(Math.min(t, n), e);
      }
      function Wn(t, e, n, r, i) {
        var a, o, l, s;
        if (
          (e.spanGaps &&
            (t = t.filter(function (t) {
              return !t.skip;
            })),
          'monotone' === e.cubicInterpolationMode)
        )
          !(function (t) {
            var e,
              n,
              r,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'x',
              a = zn(i),
              o = t.length,
              l = Array(o).fill(0),
              s = Array(o),
              u = In(t, 0);
            for (e = 0; e < o; ++e)
              if (((n = r), (r = u), (u = In(t, e + 1)), r)) {
                if (u) {
                  var c = u[i] - r[i];
                  l[e] = 0 !== c ? (u[a] - r[a]) / c : 0;
                }
                s[e] = n
                  ? u
                    ? Pt(l[e - 1]) !== Pt(l[e])
                      ? 0
                      : (l[e - 1] + l[e]) / 2
                    : l[e - 1]
                  : l[e];
              }
            Fn(t, l, s), Vn(t, s, i);
          })(t, i);
        else {
          var u = r ? t[t.length - 1] : t[0];
          for (a = 0, o = t.length; a < o; ++a)
            (s = jn(
              u,
              (l = t[a]),
              t[Math.min(a + 1, o - (r ? 0 : 1)) % o],
              e.tension
            )),
              (l.cp1x = s.previous.x),
              (l.cp1y = s.previous.y),
              (l.cp2x = s.next.x),
              (l.cp2y = s.next.y),
              (u = l);
        }
        e.capBezierPoints &&
          (function (t, e) {
            var n,
              r,
              i,
              a,
              o,
              l = Je(t[0], e);
            for (n = 0, r = t.length; n < r; ++n)
              (o = a),
                (a = l),
                (l = n < r - 1 && Je(t[n + 1], e)),
                a &&
                  ((i = t[n]),
                  o &&
                    ((i.cp1x = Bn(i.cp1x, e.left, e.right)),
                    (i.cp1y = Bn(i.cp1y, e.top, e.bottom))),
                  l &&
                    ((i.cp2x = Bn(i.cp2x, e.left, e.right)),
                    (i.cp2y = Bn(i.cp2y, e.top, e.bottom))));
          })(t, n);
      }
      function Hn() {
        return 'undefined' !== typeof window && 'undefined' !== typeof document;
      }
      function Un(t) {
        var e = t.parentNode;
        return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e;
      }
      function Yn(t, e, n) {
        var r;
        return (
          'string' === typeof t
            ? ((r = parseInt(t, 10)),
              -1 !== t.indexOf('%') && (r = (r / 100) * e.parentNode[n]))
            : (r = t),
          r
        );
      }
      var $n = function (t) {
        return window.getComputedStyle(t, null);
      };
      var Xn = ['top', 'right', 'bottom', 'left'];
      function Gn(t, e, n) {
        var r = {};
        n = n ? '-' + n : '';
        for (var i = 0; i < 4; i++) {
          var a = Xn[i];
          r[a] = parseFloat(t[e + '-' + a + n]) || 0;
        }
        return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
      }
      function Qn(t, e) {
        if ('native' in t) return t;
        var n = e.canvas,
          r = e.currentDevicePixelRatio,
          i = $n(n),
          a = 'border-box' === i.boxSizing,
          o = Gn(i, 'padding'),
          l = Gn(i, 'border', 'width'),
          s = (function (t, e) {
            var n,
              r,
              i = t.touches,
              a = i && i.length ? i[0] : t,
              o = a.offsetX,
              l = a.offsetY,
              s = !1;
            if (
              (function (t, e, n) {
                return (t > 0 || e > 0) && (!n || !n.shadowRoot);
              })(o, l, t.target)
            )
              (n = o), (r = l);
            else {
              var u = e.getBoundingClientRect();
              (n = a.clientX - u.left), (r = a.clientY - u.top), (s = !0);
            }
            return { x: n, y: r, box: s };
          })(t, n),
          u = s.x,
          c = s.y,
          f = s.box,
          h = o.left + (f && l.left),
          d = o.top + (f && l.top),
          p = e.width,
          v = e.height;
        return (
          a && ((p -= o.width + l.width), (v -= o.height + l.height)),
          {
            x: Math.round((((u - h) / p) * n.width) / r),
            y: Math.round((((c - d) / v) * n.height) / r),
          }
        );
      }
      var qn = function (t) {
        return Math.round(10 * t) / 10;
      };
      function Zn(t, e, n, r) {
        var i = $n(t),
          a = Gn(i, 'margin'),
          o = Yn(i.maxWidth, t, 'clientWidth') || kt,
          l = Yn(i.maxHeight, t, 'clientHeight') || kt,
          s = (function (t, e, n) {
            var r, i;
            if (void 0 === e || void 0 === n) {
              var a = Un(t);
              if (a) {
                var o = a.getBoundingClientRect(),
                  l = $n(a),
                  s = Gn(l, 'border', 'width'),
                  u = Gn(l, 'padding');
                (e = o.width - u.width - s.width),
                  (n = o.height - u.height - s.height),
                  (r = Yn(l.maxWidth, a, 'clientWidth')),
                  (i = Yn(l.maxHeight, a, 'clientHeight'));
              } else (e = t.clientWidth), (n = t.clientHeight);
            }
            return {
              width: e,
              height: n,
              maxWidth: r || kt,
              maxHeight: i || kt,
            };
          })(t, e, n),
          u = s.width,
          c = s.height;
        if ('content-box' === i.boxSizing) {
          var f = Gn(i, 'border', 'width'),
            h = Gn(i, 'padding');
          (u -= h.width + f.width), (c -= h.height + f.height);
        }
        return (
          (u = Math.max(0, u - a.width)),
          (c = Math.max(0, r ? Math.floor(u / r) : c - a.height)),
          (u = qn(Math.min(u, o, s.maxWidth))),
          (c = qn(Math.min(c, l, s.maxHeight))),
          u && !c && (c = qn(u / 2)),
          { width: u, height: c }
        );
      }
      function Kn(t, e, n) {
        var r = e || 1,
          i = Math.floor(t.height * r),
          a = Math.floor(t.width * r);
        (t.height = i / r), (t.width = a / r);
        var o = t.canvas;
        return (
          o.style &&
            (n || (!o.style.height && !o.style.width)) &&
            ((o.style.height = ''.concat(t.height, 'px')),
            (o.style.width = ''.concat(t.width, 'px'))),
          (t.currentDevicePixelRatio !== r ||
            o.height !== i ||
            o.width !== a) &&
            ((t.currentDevicePixelRatio = r),
            (o.height = i),
            (o.width = a),
            t.ctx.setTransform(r, 0, 0, r, 0, 0),
            !0)
        );
      }
      var Jn = (function () {
        var t = !1;
        try {
          var e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          window.addEventListener('test', null, e),
            window.removeEventListener('test', null, e);
        } catch (n) {}
        return t;
      })();
      function tr(t, e) {
        var n = (function (t, e) {
            return $n(t).getPropertyValue(e);
          })(t, e),
          r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? +r[1] : void 0;
      }
      function er(t, e, n, r) {
        return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) };
      }
      function nr(t, e, n, r) {
        return {
          x: t.x + n * (e.x - t.x),
          y:
            'middle' === r
              ? n < 0.5
                ? t.y
                : e.y
              : 'after' === r
              ? n < 1
                ? t.y
                : e.y
              : n > 0
              ? e.y
              : t.y,
        };
      }
      function rr(t, e, n, r) {
        var i = { x: t.cp2x, y: t.cp2y },
          a = { x: e.cp1x, y: e.cp1y },
          o = er(t, i, n),
          l = er(i, a, n),
          s = er(a, e, n),
          u = er(o, l, n),
          c = er(l, s, n);
        return er(u, c, n);
      }
      var ir = new Map();
      function ar(t, e, n) {
        return (function (t, e) {
          e = e || {};
          var n = t + JSON.stringify(e),
            r = ir.get(n);
          return r || ((r = new Intl.NumberFormat(t, e)), ir.set(n, r)), r;
        })(e, n).format(t);
      }
      function or(t, e, n) {
        return t
          ? (function (t, e) {
              return {
                x: function (n) {
                  return t + t + e - n;
                },
                setWidth: function (t) {
                  e = t;
                },
                textAlign: function (t) {
                  return 'center' === t ? t : 'right' === t ? 'left' : 'right';
                },
                xPlus: function (t, e) {
                  return t - e;
                },
                leftForLtr: function (t, e) {
                  return t - e;
                },
              };
            })(e, n)
          : {
              x: function (t) {
                return t;
              },
              setWidth: function (t) {},
              textAlign: function (t) {
                return t;
              },
              xPlus: function (t, e) {
                return t + e;
              },
              leftForLtr: function (t, e) {
                return t;
              },
            };
      }
      function lr(t, e) {
        var n, r;
        ('ltr' !== e && 'rtl' !== e) ||
          ((r = [
            (n = t.canvas.style).getPropertyValue('direction'),
            n.getPropertyPriority('direction'),
          ]),
          n.setProperty('direction', e, 'important'),
          (t.prevTextDirection = r));
      }
      function sr(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty('direction', e[0], e[1]));
      }
      function ur(t) {
        return 'angle' === t
          ? { between: Ft, compare: zt, normalize: jt }
          : {
              between: Bt,
              compare: function (t, e) {
                return t - e;
              },
              normalize: function (t) {
                return t;
              },
            };
      }
      function cr(t) {
        var e = t.start,
          n = t.end,
          r = t.count;
        return {
          start: e % r,
          end: n % r,
          loop: t.loop && (n - e + 1) % r === 0,
          style: t.style,
        };
      }
      function fr(t, e, n) {
        if (!n) return [t];
        for (
          var r,
            i,
            a,
            o = n.property,
            l = n.start,
            s = n.end,
            u = e.length,
            c = ur(o),
            f = c.compare,
            h = c.between,
            d = c.normalize,
            p = (function (t, e, n) {
              var r,
                i,
                a = n.property,
                o = n.start,
                l = n.end,
                s = ur(a),
                u = s.between,
                c = s.normalize,
                f = e.length,
                h = t.start,
                d = t.end,
                p = t.loop;
              if (p) {
                for (
                  h += f, d += f, r = 0, i = f;
                  r < i && u(c(e[h % f][a]), o, l);
                  ++r
                )
                  h--, d--;
                (h %= f), (d %= f);
              }
              return (
                d < h && (d += f), { start: h, end: d, loop: p, style: t.style }
              );
            })(t, e, n),
            v = p.start,
            g = p.end,
            y = p.loop,
            m = p.style,
            b = [],
            x = !1,
            k = null,
            _ = function () {
              return x || (h(l, a, r) && 0 !== f(l, a));
            },
            w = function () {
              return !x || 0 === f(s, r) || h(s, a, r);
            },
            S = v,
            M = v;
          S <= g;
          ++S
        )
          (i = e[S % u]).skip ||
            ((r = d(i[o])) !== a &&
              ((x = h(r, l, s)),
              null === k && _() && (k = 0 === f(r, l) ? S : M),
              null !== k &&
                w() &&
                (b.push(cr({ start: k, end: S, loop: y, count: u, style: m })),
                (k = null)),
              (M = S),
              (a = r)));
        return (
          null !== k &&
            b.push(cr({ start: k, end: g, loop: y, count: u, style: m })),
          b
        );
      }
      function hr(t, e) {
        for (var n = [], r = t.segments, i = 0; i < r.length; i++) {
          var a = fr(r[i], t.points, e);
          a.length && n.push.apply(n, U(a));
        }
        return n;
      }
      function dr(t, e, n, r) {
        return r && r.setContext && n
          ? (function (t, e, n, r) {
              var i = t._chart.getContext(),
                a = pr(t.options),
                o = t._datasetIndex,
                l = t.options.spanGaps,
                s = n.length,
                u = [],
                c = a,
                f = e[0].start,
                h = f;
              function d(t, e, r, i) {
                var a = l ? -1 : 1;
                if (t !== e) {
                  for (t += s; n[t % s].skip; ) t -= a;
                  for (; n[e % s].skip; ) e += a;
                  t % s !== e % s &&
                    (u.push({ start: t % s, end: e % s, loop: r, style: i }),
                    (c = i),
                    (f = e % s));
                }
              }
              var p,
                v = H(e);
              try {
                for (v.s(); !(p = v.n()).done; ) {
                  var g = p.value;
                  f = l ? f : g.start;
                  var y = n[f % s],
                    m = void 0;
                  for (h = f + 1; h <= g.end; h++) {
                    var b = n[h % s];
                    vr(
                      (m = pr(
                        r.setContext(
                          bn(i, {
                            type: 'segment',
                            p0: y,
                            p1: b,
                            p0DataIndex: (h - 1) % s,
                            p1DataIndex: h % s,
                            datasetIndex: o,
                          })
                        )
                      )),
                      c
                    ) && d(f, h - 1, g.loop, c),
                      (y = b),
                      (c = m);
                  }
                  f < h - 1 && d(f, h - 1, g.loop, c);
                }
              } catch (x) {
                v.e(x);
              } finally {
                v.f();
              }
              return u;
            })(t, e, n, r)
          : e;
      }
      function pr(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function vr(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e);
      }
      var gr = (function () {
          function t() {
            Y(this, t),
              (this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0);
          }
          return (
            X(t, [
              {
                key: '_notify',
                value: function (t, e, n, r) {
                  var i = e.listeners[r],
                    a = e.duration;
                  i.forEach(function (r) {
                    return r({
                      chart: t,
                      initial: e.initial,
                      numSteps: a,
                      currentStep: Math.min(n - e.start, a),
                    });
                  });
                },
              },
              {
                key: '_refresh',
                value: function () {
                  var t = this;
                  this._request ||
                    ((this._running = !0),
                    (this._request = Gt.call(window, function () {
                      t._update(),
                        (t._request = null),
                        t._running && t._refresh();
                    })));
                },
              },
              {
                key: '_update',
                value: function () {
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : Date.now(),
                    n = 0;
                  this._charts.forEach(function (r, i) {
                    if (r.running && r.items.length) {
                      for (
                        var a, o = r.items, l = o.length - 1, s = !1;
                        l >= 0;
                        --l
                      )
                        (a = o[l])._active
                          ? (a._total > r.duration && (r.duration = a._total),
                            a.tick(e),
                            (s = !0))
                          : ((o[l] = o[o.length - 1]), o.pop());
                      s && (i.draw(), t._notify(i, r, e, 'progress')),
                        o.length ||
                          ((r.running = !1),
                          t._notify(i, r, e, 'complete'),
                          (r.initial = !1)),
                        (n += o.length);
                    }
                  }),
                    (this._lastDate = e),
                    0 === n && (this._running = !1);
                },
              },
              {
                key: '_getAnims',
                value: function (t) {
                  var e = this._charts,
                    n = e.get(t);
                  return (
                    n ||
                      ((n = {
                        running: !1,
                        initial: !0,
                        items: [],
                        listeners: { complete: [], progress: [] },
                      }),
                      e.set(t, n)),
                    n
                  );
                },
              },
              {
                key: 'listen',
                value: function (t, e, n) {
                  this._getAnims(t).listeners[e].push(n);
                },
              },
              {
                key: 'add',
                value: function (t, e) {
                  var n;
                  e &&
                    e.length &&
                    (n = this._getAnims(t).items).push.apply(n, U(e));
                },
              },
              {
                key: 'has',
                value: function (t) {
                  return this._getAnims(t).items.length > 0;
                },
              },
              {
                key: 'start',
                value: function (t) {
                  var e = this._charts.get(t);
                  e &&
                    ((e.running = !0),
                    (e.start = Date.now()),
                    (e.duration = e.items.reduce(function (t, e) {
                      return Math.max(t, e._duration);
                    }, 0)),
                    this._refresh());
                },
              },
              {
                key: 'running',
                value: function (t) {
                  if (!this._running) return !1;
                  var e = this._charts.get(t);
                  return !!(e && e.running && e.items.length);
                },
              },
              {
                key: 'stop',
                value: function (t) {
                  var e = this._charts.get(t);
                  if (e && e.items.length) {
                    for (var n = e.items, r = n.length - 1; r >= 0; --r)
                      n[r].cancel();
                    (e.items = []), this._notify(t, e, Date.now(), 'complete');
                  }
                },
              },
              {
                key: 'remove',
                value: function (t) {
                  return this._charts.delete(t);
                },
              },
            ]),
            t
          );
        })(),
        yr = new gr(),
        mr = 'transparent',
        br = {
          boolean: function (t, e, n) {
            return n > 0.5 ? e : t;
          },
          color: function (t, e, n) {
            var r = Fe(t || mr),
              i = r.valid && Fe(e || mr);
            return i && i.valid ? i.mix(r, n).hexString() : e;
          },
          number: function (t, e, n) {
            return t + (e - t) * n;
          },
        },
        xr = (function () {
          function t(e, n, r, i) {
            Y(this, t);
            var a = n[r];
            i = mn([e.to, i, a, e.from]);
            var o = mn([e.from, a, i]);
            (this._active = !0),
              (this._fn = e.fn || br[e.type || typeof o]),
              (this._easing = re[e.easing] || re.linear),
              (this._start = Math.floor(Date.now() + (e.delay || 0))),
              (this._duration = this._total = Math.floor(e.duration)),
              (this._loop = !!e.loop),
              (this._target = n),
              (this._prop = r),
              (this._from = o),
              (this._to = i),
              (this._promises = void 0);
          }
          return (
            X(t, [
              {
                key: 'active',
                value: function () {
                  return this._active;
                },
              },
              {
                key: 'update',
                value: function (t, e, n) {
                  if (this._active) {
                    this._notify(!1);
                    var r = this._target[this._prop],
                      i = n - this._start,
                      a = this._duration - i;
                    (this._start = n),
                      (this._duration = Math.floor(Math.max(a, t.duration))),
                      (this._total += i),
                      (this._loop = !!t.loop),
                      (this._to = mn([t.to, e, r, t.from])),
                      (this._from = mn([t.from, r, e]));
                  }
                },
              },
              {
                key: 'cancel',
                value: function () {
                  this._active &&
                    (this.tick(Date.now()),
                    (this._active = !1),
                    this._notify(!1));
                },
              },
              {
                key: 'tick',
                value: function (t) {
                  var e,
                    n = t - this._start,
                    r = this._duration,
                    i = this._prop,
                    a = this._from,
                    o = this._loop,
                    l = this._to;
                  if (((this._active = a !== l && (o || n < r)), !this._active))
                    return (this._target[i] = l), void this._notify(!0);
                  n < 0
                    ? (this._target[i] = a)
                    : ((e = (n / r) % 2),
                      (e = o && e > 1 ? 2 - e : e),
                      (e = this._easing(Math.min(1, Math.max(0, e)))),
                      (this._target[i] = this._fn(a, l, e)));
                },
              },
              {
                key: 'wait',
                value: function () {
                  var t = this._promises || (this._promises = []);
                  return new Promise(function (e, n) {
                    t.push({ res: e, rej: n });
                  });
                },
              },
              {
                key: '_notify',
                value: function (t) {
                  for (
                    var e = t ? 'res' : 'rej', n = this._promises || [], r = 0;
                    r < n.length;
                    r++
                  )
                    n[r][e]();
                },
              },
            ]),
            t
          );
        })();
      $e.set('animation', {
        delay: void 0,
        duration: 1e3,
        easing: 'easeOutQuart',
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0,
      });
      var kr = Object.keys($e.animation);
      $e.describe('animation', {
        _fallback: !1,
        _indexable: !1,
        _scriptable: function (t) {
          return 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t;
        },
      }),
        $e.set('animations', {
          colors: {
            type: 'color',
            properties: ['color', 'borderColor', 'backgroundColor'],
          },
          numbers: {
            type: 'number',
            properties: ['x', 'y', 'borderWidth', 'radius', 'tension'],
          },
        }),
        $e.describe('animations', { _fallback: 'animation' }),
        $e.set('transitions', {
          active: { animation: { duration: 400 } },
          resize: { animation: { duration: 0 } },
          show: {
            animations: {
              colors: { from: 'transparent' },
              visible: { type: 'boolean', duration: 0 },
            },
          },
          hide: {
            animations: {
              colors: { to: 'transparent' },
              visible: {
                type: 'boolean',
                easing: 'linear',
                fn: function (t) {
                  return 0 | t;
                },
              },
            },
          },
        });
      var _r = (function () {
        function t(e, n) {
          Y(this, t),
            (this._chart = e),
            (this._properties = new Map()),
            this.configure(n);
        }
        return (
          X(t, [
            {
              key: 'configure',
              value: function (t) {
                if (K(t)) {
                  var e = this._properties;
                  Object.getOwnPropertyNames(t).forEach(function (n) {
                    var r = t[n];
                    if (K(r)) {
                      var i,
                        a = {},
                        o = H(kr);
                      try {
                        for (o.s(); !(i = o.n()).done; ) {
                          var l = i.value;
                          a[l] = r[l];
                        }
                      } catch (s) {
                        o.e(s);
                      } finally {
                        o.f();
                      }
                      ((Z(r.properties) && r.properties) || [n]).forEach(
                        function (t) {
                          (t !== n && e.has(t)) || e.set(t, a);
                        }
                      );
                    }
                  });
                }
              },
            },
            {
              key: '_animateOptions',
              value: function (t, e) {
                var n = e.options,
                  r = (function (t, e) {
                    if (!e) return;
                    var n = t.options;
                    if (!n) return void (t.options = e);
                    n.$shared &&
                      (t.options = n =
                        Object.assign({}, n, { $shared: !1, $animations: {} }));
                    return n;
                  })(t, n);
                if (!r) return [];
                var i = this._createAnimations(r, n);
                return (
                  n.$shared &&
                    (function (t, e) {
                      for (
                        var n = [], r = Object.keys(e), i = 0;
                        i < r.length;
                        i++
                      ) {
                        var a = t[r[i]];
                        a && a.active() && n.push(a.wait());
                      }
                      return Promise.all(n);
                    })(t.options.$animations, n).then(
                      function () {
                        t.options = n;
                      },
                      function () {}
                    ),
                  i
                );
              },
            },
            {
              key: '_createAnimations',
              value: function (t, e) {
                var n,
                  r = this._properties,
                  i = [],
                  a = t.$animations || (t.$animations = {}),
                  o = Object.keys(e),
                  l = Date.now();
                for (n = o.length - 1; n >= 0; --n) {
                  var s = o[n];
                  if ('$' !== s.charAt(0))
                    if ('options' !== s) {
                      var u = e[s],
                        c = a[s],
                        f = r.get(s);
                      if (c) {
                        if (f && c.active()) {
                          c.update(f, u, l);
                          continue;
                        }
                        c.cancel();
                      }
                      f && f.duration
                        ? ((a[s] = c = new xr(f, t, s, u)), i.push(c))
                        : (t[s] = u);
                    } else i.push.apply(i, U(this._animateOptions(t, e)));
                }
                return i;
              },
            },
            {
              key: 'update',
              value: function (t, e) {
                if (0 !== this._properties.size) {
                  var n = this._createAnimations(t, e);
                  return n.length ? (yr.add(this._chart, n), !0) : void 0;
                }
                Object.assign(t, e);
              },
            },
          ]),
          t
        );
      })();
      function wr(t, e) {
        var n = (t && t.options) || {},
          r = n.reverse,
          i = void 0 === n.min ? e : 0,
          a = void 0 === n.max ? e : 0;
        return { start: r ? a : i, end: r ? i : a };
      }
      function Sr(t, e) {
        var n,
          r,
          i = [],
          a = t._getSortedDatasetMetas(e);
        for (n = 0, r = a.length; n < r; ++n) i.push(a[n].index);
        return i;
      }
      function Mr(t, e, n) {
        var r,
          i,
          a,
          o,
          l =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          s = t.keys,
          u = 'single' === l.mode;
        if (null !== e) {
          for (r = 0, i = s.length; r < i; ++r) {
            if ((a = +s[r]) === n) {
              if (l.all) continue;
              break;
            }
            (o = t.values[a]),
              J(o) && (u || 0 === e || Pt(e) === Pt(o)) && (e += o);
          }
          return e;
        }
      }
      function Er(t, e) {
        var n = t && t.options.stacked;
        return n || (void 0 === n && void 0 !== e.stack);
      }
      function Pr(t, e, n) {
        var r = t[e] || (t[e] = {});
        return r[n] || (r[n] = {});
      }
      function Cr(t, e, n, r) {
        var i,
          a = H(e.getMatchingVisibleMetas(r).reverse());
        try {
          for (a.s(); !(i = a.n()).done; ) {
            var o = i.value,
              l = t[o.index];
            if ((n && l > 0) || (!n && l < 0)) return o.index;
          }
        } catch (s) {
          a.e(s);
        } finally {
          a.f();
        }
        return null;
      }
      function Or(t, e) {
        for (
          var n,
            r = t.chart,
            i = t._cachedMeta,
            a = r._stacks || (r._stacks = {}),
            o = i.iScale,
            l = i.vScale,
            s = i.index,
            u = o.axis,
            c = l.axis,
            f = (function (t, e, n) {
              return ''
                .concat(t.id, '.')
                .concat(e.id, '.')
                .concat(n.stack || n.type);
            })(o, l, i),
            h = e.length,
            d = 0;
          d < h;
          ++d
        ) {
          var p = e[d],
            v = p[u],
            g = p[c];
          ((n = (p._stacks || (p._stacks = {}))[c] = Pr(a, f, v))[s] = g),
            (n._top = Cr(n, l, !0, i.type)),
            (n._bottom = Cr(n, l, !1, i.type));
        }
      }
      function Ar(t, e) {
        var n = t.scales;
        return Object.keys(n)
          .filter(function (t) {
            return n[t].axis === e;
          })
          .shift();
      }
      function Tr(t, e) {
        var n = t.controller.index,
          r = t.vScale && t.vScale.axis;
        if (r) {
          var i,
            a = H((e = e || t._parsed));
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var o = i.value._stacks;
              if (!o || void 0 === o[r] || void 0 === o[r][n]) return;
              delete o[r][n];
            }
          } catch (l) {
            a.e(l);
          } finally {
            a.f();
          }
        }
      }
      var Dr = function (t) {
          return 'reset' === t || 'none' === t;
        },
        Lr = function (t, e) {
          return e ? t : Object.assign({}, t);
        },
        Rr = (function () {
          function t(e, n) {
            Y(this, t),
              (this.chart = e),
              (this._ctx = e.ctx),
              (this.index = n),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.supportsDecimation = !1),
              (this.$context = void 0),
              (this._syncList = []),
              this.initialize();
          }
          return (
            X(t, [
              {
                key: 'initialize',
                value: function () {
                  var t = this._cachedMeta;
                  this.configure(),
                    this.linkScales(),
                    (t._stacked = Er(t.vScale, t)),
                    this.addElements();
                },
              },
              {
                key: 'updateIndex',
                value: function (t) {
                  this.index !== t && Tr(this._cachedMeta), (this.index = t);
                },
              },
              {
                key: 'linkScales',
                value: function () {
                  var t = this.chart,
                    e = this._cachedMeta,
                    n = this.getDataset(),
                    r = function (t, e, n, r) {
                      return 'x' === t ? e : 'r' === t ? r : n;
                    },
                    i = (e.xAxisID = et(n.xAxisID, Ar(t, 'x'))),
                    a = (e.yAxisID = et(n.yAxisID, Ar(t, 'y'))),
                    o = (e.rAxisID = et(n.rAxisID, Ar(t, 'r'))),
                    l = e.indexAxis,
                    s = (e.iAxisID = r(l, i, a, o)),
                    u = (e.vAxisID = r(l, a, i, o));
                  (e.xScale = this.getScaleForId(i)),
                    (e.yScale = this.getScaleForId(a)),
                    (e.rScale = this.getScaleForId(o)),
                    (e.iScale = this.getScaleForId(s)),
                    (e.vScale = this.getScaleForId(u));
                },
              },
              {
                key: 'getDataset',
                value: function () {
                  return this.chart.data.datasets[this.index];
                },
              },
              {
                key: 'getMeta',
                value: function () {
                  return this.chart.getDatasetMeta(this.index);
                },
              },
              {
                key: 'getScaleForId',
                value: function (t) {
                  return this.chart.scales[t];
                },
              },
              {
                key: '_getOtherScale',
                value: function (t) {
                  var e = this._cachedMeta;
                  return t === e.iScale ? e.vScale : e.iScale;
                },
              },
              {
                key: 'reset',
                value: function () {
                  this._update('reset');
                },
              },
              {
                key: '_destroy',
                value: function () {
                  var t = this._cachedMeta;
                  this._data && $t(this._data, this), t._stacked && Tr(t);
                },
              },
              {
                key: '_dataCheck',
                value: function () {
                  var t = this.getDataset(),
                    e = t.data || (t.data = []),
                    n = this._data;
                  if (K(e))
                    this._data = (function (t) {
                      var e,
                        n,
                        r,
                        i = Object.keys(t),
                        a = new Array(i.length);
                      for (e = 0, n = i.length; e < n; ++e)
                        (r = i[e]), (a[e] = { x: r, y: t[r] });
                      return a;
                    })(e);
                  else if (n !== e) {
                    if (n) {
                      $t(n, this);
                      var r = this._cachedMeta;
                      Tr(r), (r._parsed = []);
                    }
                    e &&
                      Object.isExtensible(e) &&
                      (function (t, e) {
                        t._chartjs
                          ? t._chartjs.listeners.push(e)
                          : (Object.defineProperty(t, '_chartjs', {
                              configurable: !0,
                              enumerable: !1,
                              value: { listeners: [e] },
                            }),
                            Yt.forEach(function (e) {
                              var n = '_onData' + pt(e),
                                r = t[e];
                              Object.defineProperty(t, e, {
                                configurable: !0,
                                enumerable: !1,
                                value: function () {
                                  for (
                                    var e = arguments.length,
                                      i = new Array(e),
                                      a = 0;
                                    a < e;
                                    a++
                                  )
                                    i[a] = arguments[a];
                                  var o = r.apply(this, i);
                                  return (
                                    t._chartjs.listeners.forEach(function (t) {
                                      'function' === typeof t[n] &&
                                        t[n].apply(t, i);
                                    }),
                                    o
                                  );
                                },
                              });
                            }));
                      })(e, this),
                      (this._syncList = []),
                      (this._data = e);
                  }
                },
              },
              {
                key: 'addElements',
                value: function () {
                  var t = this._cachedMeta;
                  this._dataCheck(),
                    this.datasetElementType &&
                      (t.dataset = new this.datasetElementType());
                },
              },
              {
                key: 'buildOrUpdateElements',
                value: function (t) {
                  var e = this._cachedMeta,
                    n = this.getDataset(),
                    r = !1;
                  this._dataCheck();
                  var i = e._stacked;
                  (e._stacked = Er(e.vScale, e)),
                    e.stack !== n.stack &&
                      ((r = !0), Tr(e), (e.stack = n.stack)),
                    this._resyncElements(t),
                    (r || i !== e._stacked) && Or(this, e._parsed);
                },
              },
              {
                key: 'configure',
                value: function () {
                  var t = this.chart.config,
                    e = t.datasetScopeKeys(this._type),
                    n = t.getOptionScopes(this.getDataset(), e, !0);
                  (this.options = t.createResolver(n, this.getContext())),
                    (this._parsing = this.options.parsing),
                    (this._cachedDataOpts = {});
                },
              },
              {
                key: 'parse',
                value: function (t, e) {
                  var n,
                    r,
                    i,
                    a = this._cachedMeta,
                    o = this._data,
                    l = a.iScale,
                    s = a._stacked,
                    u = l.axis,
                    c = (0 === t && e === o.length) || a._sorted,
                    f = t > 0 && a._parsed[t - 1];
                  if (!1 === this._parsing)
                    (a._parsed = o), (a._sorted = !0), (i = o);
                  else {
                    i = Z(o[t])
                      ? this.parseArrayData(a, o, t, e)
                      : K(o[t])
                      ? this.parseObjectData(a, o, t, e)
                      : this.parsePrimitiveData(a, o, t, e);
                    for (n = 0; n < e; ++n)
                      (a._parsed[n + t] = r = i[n]),
                        c &&
                          ((null === r[u] || (f && r[u] < f[u])) && (c = !1),
                          (f = r));
                    a._sorted = c;
                  }
                  s && Or(this, i);
                },
              },
              {
                key: 'parsePrimitiveData',
                value: function (t, e, n, r) {
                  var i,
                    a,
                    o,
                    l = t.iScale,
                    s = t.vScale,
                    u = l.axis,
                    c = s.axis,
                    f = l.getLabels(),
                    h = l === s,
                    d = new Array(r);
                  for (i = 0, a = r; i < a; ++i) {
                    var p;
                    (o = i + n),
                      (d[i] =
                        (D((p = {}), u, h || l.parse(f[o], o)),
                        D(p, c, s.parse(e[o], o)),
                        p));
                  }
                  return d;
                },
              },
              {
                key: 'parseArrayData',
                value: function (t, e, n, r) {
                  var i,
                    a,
                    o,
                    l,
                    s = t.xScale,
                    u = t.yScale,
                    c = new Array(r);
                  for (i = 0, a = r; i < a; ++i)
                    (l = e[(o = i + n)]),
                      (c[i] = { x: s.parse(l[0], o), y: u.parse(l[1], o) });
                  return c;
                },
              },
              {
                key: 'parseObjectData',
                value: function (t, e, n, r) {
                  var i,
                    a,
                    o,
                    l,
                    s = t.xScale,
                    u = t.yScale,
                    c = this._parsing,
                    f = c.xAxisKey,
                    h = void 0 === f ? 'x' : f,
                    d = c.yAxisKey,
                    p = void 0 === d ? 'y' : d,
                    v = new Array(r);
                  for (i = 0, a = r; i < a; ++i)
                    (l = e[(o = i + n)]),
                      (v[i] = {
                        x: s.parse(dt(l, h), o),
                        y: u.parse(dt(l, p), o),
                      });
                  return v;
                },
              },
              {
                key: 'getParsed',
                value: function (t) {
                  return this._cachedMeta._parsed[t];
                },
              },
              {
                key: 'getDataElement',
                value: function (t) {
                  return this._cachedMeta.data[t];
                },
              },
              {
                key: 'applyStack',
                value: function (t, e, n) {
                  var r = this.chart,
                    i = this._cachedMeta,
                    a = e[t.axis];
                  return Mr(
                    { keys: Sr(r, !0), values: e._stacks[t.axis] },
                    a,
                    i.index,
                    { mode: n }
                  );
                },
              },
              {
                key: 'updateRangeFromParsed',
                value: function (t, e, n, r) {
                  var i = n[e.axis],
                    a = null === i ? NaN : i,
                    o = r && n._stacks[e.axis];
                  r &&
                    o &&
                    ((r.values = o), (a = Mr(r, i, this._cachedMeta.index))),
                    (t.min = Math.min(t.min, a)),
                    (t.max = Math.max(t.max, a));
                },
              },
              {
                key: 'getMinMax',
                value: function (t, e) {
                  var n,
                    r,
                    i = this._cachedMeta,
                    a = i._parsed,
                    o = i._sorted && t === i.iScale,
                    l = a.length,
                    s = this._getOtherScale(t),
                    u = (function (t, e, n) {
                      return (
                        t &&
                        !e.hidden &&
                        e._stacked && { keys: Sr(n, !0), values: null }
                      );
                    })(e, i, this.chart),
                    c = {
                      min: Number.POSITIVE_INFINITY,
                      max: Number.NEGATIVE_INFINITY,
                    },
                    f = (function (t) {
                      var e = t.getUserBounds(),
                        n = e.min,
                        r = e.max,
                        i = e.minDefined,
                        a = e.maxDefined;
                      return {
                        min: i ? n : Number.NEGATIVE_INFINITY,
                        max: a ? r : Number.POSITIVE_INFINITY,
                      };
                    })(s),
                    h = f.min,
                    d = f.max;
                  function p() {
                    var e = (r = a[n])[s.axis];
                    return !J(r[t.axis]) || h > e || d < e;
                  }
                  for (
                    n = 0;
                    n < l &&
                    (p() || (this.updateRangeFromParsed(c, t, r, u), !o));
                    ++n
                  );
                  if (o)
                    for (n = l - 1; n >= 0; --n)
                      if (!p()) {
                        this.updateRangeFromParsed(c, t, r, u);
                        break;
                      }
                  return c;
                },
              },
              {
                key: 'getAllParsedValues',
                value: function (t) {
                  var e,
                    n,
                    r,
                    i = this._cachedMeta._parsed,
                    a = [];
                  for (e = 0, n = i.length; e < n; ++e)
                    (r = i[e][t.axis]), J(r) && a.push(r);
                  return a;
                },
              },
              {
                key: 'getMaxOverflow',
                value: function () {
                  return !1;
                },
              },
              {
                key: 'getLabelAndValue',
                value: function (t) {
                  var e = this._cachedMeta,
                    n = e.iScale,
                    r = e.vScale,
                    i = this.getParsed(t);
                  return {
                    label: n ? '' + n.getLabelForValue(i[n.axis]) : '',
                    value: r ? '' + r.getLabelForValue(i[r.axis]) : '',
                  };
                },
              },
              {
                key: '_update',
                value: function (t) {
                  var e = this._cachedMeta;
                  this.update(t || 'default'),
                    (e._clip = (function (t) {
                      var e, n, r, i;
                      return (
                        K(t)
                          ? ((e = t.top),
                            (n = t.right),
                            (r = t.bottom),
                            (i = t.left))
                          : (e = n = r = i = t),
                        {
                          top: e,
                          right: n,
                          bottom: r,
                          left: i,
                          disabled: !1 === t,
                        }
                      );
                    })(
                      et(
                        this.options.clip,
                        (function (t, e, n) {
                          if (!1 === n) return !1;
                          var r = wr(t, n),
                            i = wr(e, n);
                          return {
                            top: i.end,
                            right: r.end,
                            bottom: i.start,
                            left: r.start,
                          };
                        })(e.xScale, e.yScale, this.getMaxOverflow())
                      )
                    ));
                },
              },
              { key: 'update', value: function (t) {} },
              {
                key: 'draw',
                value: function () {
                  var t,
                    e = this._ctx,
                    n = this.chart,
                    r = this._cachedMeta,
                    i = r.data || [],
                    a = n.chartArea,
                    o = [],
                    l = this._drawStart || 0,
                    s = this._drawCount || i.length - l,
                    u = this.options.drawActiveElementsOnTop;
                  for (
                    r.dataset && r.dataset.draw(e, a, l, s), t = l;
                    t < l + s;
                    ++t
                  ) {
                    var c = i[t];
                    c.hidden || (c.active && u ? o.push(c) : c.draw(e, a));
                  }
                  for (t = 0; t < o.length; ++t) o[t].draw(e, a);
                },
              },
              {
                key: 'getStyle',
                value: function (t, e) {
                  var n = e ? 'active' : 'default';
                  return void 0 === t && this._cachedMeta.dataset
                    ? this.resolveDatasetElementOptions(n)
                    : this.resolveDataElementOptions(t || 0, n);
                },
              },
              {
                key: 'getContext',
                value: function (t, e, n) {
                  var r,
                    i = this.getDataset();
                  if (t >= 0 && t < this._cachedMeta.data.length) {
                    var a = this._cachedMeta.data[t];
                    (r =
                      a.$context ||
                      (a.$context = (function (t, e, n) {
                        return bn(t, {
                          active: !1,
                          dataIndex: e,
                          parsed: void 0,
                          raw: void 0,
                          element: n,
                          index: e,
                          mode: 'default',
                          type: 'data',
                        });
                      })(this.getContext(), t, a))),
                      (r.parsed = this.getParsed(t)),
                      (r.raw = i.data[t]),
                      (r.index = r.dataIndex = t);
                  } else
                    (r =
                      this.$context ||
                      (this.$context = (function (t, e) {
                        return bn(t, {
                          active: !1,
                          dataset: void 0,
                          datasetIndex: e,
                          index: e,
                          mode: 'default',
                          type: 'dataset',
                        });
                      })(this.chart.getContext(), this.index))),
                      (r.dataset = i),
                      (r.index = r.datasetIndex = this.index);
                  return (r.active = !!e), (r.mode = n), r;
                },
              },
              {
                key: 'resolveDatasetElementOptions',
                value: function (t) {
                  return this._resolveElementOptions(
                    this.datasetElementType.id,
                    t
                  );
                },
              },
              {
                key: 'resolveDataElementOptions',
                value: function (t, e) {
                  return this._resolveElementOptions(
                    this.dataElementType.id,
                    e,
                    t
                  );
                },
              },
              {
                key: '_resolveElementOptions',
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'default',
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = 'active' === n,
                    a = this._cachedDataOpts,
                    o = t + '-' + n,
                    l = a[o],
                    s = this.enableOptionSharing && vt(r);
                  if (l) return Lr(l, s);
                  var u = this.chart.config,
                    c = u.datasetElementScopeKeys(this._type, t),
                    f = i ? [''.concat(t, 'Hover'), 'hover', t, ''] : [t, ''],
                    h = u.getOptionScopes(this.getDataset(), c),
                    d = Object.keys($e.elements[t]),
                    p = function () {
                      return e.getContext(r, i);
                    },
                    v = u.resolveNamedOptions(h, d, p, f);
                  return (
                    v.$shared &&
                      ((v.$shared = s), (a[o] = Object.freeze(Lr(v, s)))),
                    v
                  );
                },
              },
              {
                key: '_resolveAnimations',
                value: function (t, e, n) {
                  var r,
                    i = this.chart,
                    a = this._cachedDataOpts,
                    o = 'animation-'.concat(e),
                    l = a[o];
                  if (l) return l;
                  if (!1 !== i.options.animation) {
                    var s = this.chart.config,
                      u = s.datasetAnimationScopeKeys(this._type, e),
                      c = s.getOptionScopes(this.getDataset(), u);
                    r = s.createResolver(c, this.getContext(t, n, e));
                  }
                  var f = new _r(i, r && r.animations);
                  return r && r._cacheable && (a[o] = Object.freeze(f)), f;
                },
              },
              {
                key: 'getSharedOptions',
                value: function (t) {
                  if (t.$shared)
                    return (
                      this._sharedOptions ||
                      (this._sharedOptions = Object.assign({}, t))
                    );
                },
              },
              {
                key: 'includeOptions',
                value: function (t, e) {
                  return !e || Dr(t) || this.chart._animationsDisabled;
                },
              },
              {
                key: '_getSharedOptions',
                value: function (t, e) {
                  var n = this.resolveDataElementOptions(t, e),
                    r = this._sharedOptions,
                    i = this.getSharedOptions(n),
                    a = this.includeOptions(e, i) || i !== r;
                  return (
                    this.updateSharedOptions(i, e, n),
                    { sharedOptions: i, includeOptions: a }
                  );
                },
              },
              {
                key: 'updateElement',
                value: function (t, e, n, r) {
                  Dr(r)
                    ? Object.assign(t, n)
                    : this._resolveAnimations(e, r).update(t, n);
                },
              },
              {
                key: 'updateSharedOptions',
                value: function (t, e, n) {
                  t &&
                    !Dr(e) &&
                    this._resolveAnimations(void 0, e).update(t, n);
                },
              },
              {
                key: '_setStyle',
                value: function (t, e, n, r) {
                  t.active = r;
                  var i = this.getStyle(e, r);
                  this._resolveAnimations(e, n, r).update(t, {
                    options: (!r && this.getSharedOptions(i)) || i,
                  });
                },
              },
              {
                key: 'removeHoverStyle',
                value: function (t, e, n) {
                  this._setStyle(t, n, 'active', !1);
                },
              },
              {
                key: 'setHoverStyle',
                value: function (t, e, n) {
                  this._setStyle(t, n, 'active', !0);
                },
              },
              {
                key: '_removeDatasetHoverStyle',
                value: function () {
                  var t = this._cachedMeta.dataset;
                  t && this._setStyle(t, void 0, 'active', !1);
                },
              },
              {
                key: '_setDatasetHoverStyle',
                value: function () {
                  var t = this._cachedMeta.dataset;
                  t && this._setStyle(t, void 0, 'active', !0);
                },
              },
              {
                key: '_resyncElements',
                value: function (t) {
                  var e,
                    n = this._data,
                    r = this._cachedMeta.data,
                    i = H(this._syncList);
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      var o = a(e.value, 3),
                        l = o[0],
                        s = o[1],
                        u = o[2];
                      this[l](s, u);
                    }
                  } catch (d) {
                    i.e(d);
                  } finally {
                    i.f();
                  }
                  this._syncList = [];
                  var c = r.length,
                    f = n.length,
                    h = Math.min(f, c);
                  h && this.parse(0, h),
                    f > c
                      ? this._insertElements(c, f - c, t)
                      : f < c && this._removeElements(f, c - f);
                },
              },
              {
                key: '_insertElements',
                value: function (t, e) {
                  var n,
                    r =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2],
                    i = this._cachedMeta,
                    a = i.data,
                    o = t + e,
                    l = function (t) {
                      for (t.length += e, n = t.length - 1; n >= o; n--)
                        t[n] = t[n - e];
                    };
                  for (l(a), n = t; n < o; ++n)
                    a[n] = new this.dataElementType();
                  this._parsing && l(i._parsed),
                    this.parse(t, e),
                    r && this.updateElements(a, t, e, 'reset');
                },
              },
              { key: 'updateElements', value: function (t, e, n, r) {} },
              {
                key: '_removeElements',
                value: function (t, e) {
                  var n = this._cachedMeta;
                  if (this._parsing) {
                    var r = n._parsed.splice(t, e);
                    n._stacked && Tr(n, r);
                  }
                  n.data.splice(t, e);
                },
              },
              {
                key: '_sync',
                value: function (t) {
                  if (this._parsing) this._syncList.push(t);
                  else {
                    var e = a(t, 3),
                      n = e[0],
                      r = e[1],
                      i = e[2];
                    this[n](r, i);
                  }
                  this.chart._dataChanges.push([this.index].concat(U(t)));
                },
              },
              {
                key: '_onDataPush',
                value: function () {
                  var t = arguments.length;
                  this._sync([
                    '_insertElements',
                    this.getDataset().data.length - t,
                    t,
                  ]);
                },
              },
              {
                key: '_onDataPop',
                value: function () {
                  this._sync([
                    '_removeElements',
                    this._cachedMeta.data.length - 1,
                    1,
                  ]);
                },
              },
              {
                key: '_onDataShift',
                value: function () {
                  this._sync(['_removeElements', 0, 1]);
                },
              },
              {
                key: '_onDataSplice',
                value: function (t, e) {
                  e && this._sync(['_removeElements', t, e]);
                  var n = arguments.length - 2;
                  n && this._sync(['_insertElements', t, n]);
                },
              },
              {
                key: '_onDataUnshift',
                value: function () {
                  this._sync(['_insertElements', 0, arguments.length]);
                },
              },
            ]),
            t
          );
        })();
      function Nr(t) {
        var e,
          n,
          r,
          i,
          a = t.iScale,
          o = (function (t, e) {
            if (!t._cache.$bar) {
              for (
                var n = t.getMatchingVisibleMetas(e),
                  r = [],
                  i = 0,
                  a = n.length;
                i < a;
                i++
              )
                r = r.concat(n[i].controller.getAllParsedValues(t));
              t._cache.$bar = Xt(
                r.sort(function (t, e) {
                  return t - e;
                })
              );
            }
            return t._cache.$bar;
          })(a, t.type),
          l = a._length,
          s = function () {
            32767 !== r &&
              -32768 !== r &&
              (vt(i) && (l = Math.min(l, Math.abs(r - i) || l)), (i = r));
          };
        for (e = 0, n = o.length; e < n; ++e)
          (r = a.getPixelForValue(o[e])), s();
        for (i = void 0, e = 0, n = a.ticks.length; e < n; ++e)
          (r = a.getPixelForTick(e)), s();
        return l;
      }
      function Ir(t, e, n, r) {
        return (
          Z(t)
            ? (function (t, e, n, r) {
                var i = n.parse(t[0], r),
                  a = n.parse(t[1], r),
                  o = Math.min(i, a),
                  l = Math.max(i, a),
                  s = o,
                  u = l;
                Math.abs(o) > Math.abs(l) && ((s = l), (u = o)),
                  (e[n.axis] = u),
                  (e._custom = {
                    barStart: s,
                    barEnd: u,
                    start: i,
                    end: a,
                    min: o,
                    max: l,
                  });
              })(t, e, n, r)
            : (e[n.axis] = n.parse(t, r)),
          e
        );
      }
      function zr(t, e, n, r) {
        var i,
          a,
          o,
          l,
          s = t.iScale,
          u = t.vScale,
          c = s.getLabels(),
          f = s === u,
          h = [];
        for (i = n, a = n + r; i < a; ++i)
          (l = e[i]),
            ((o = {})[s.axis] = f || s.parse(c[i], i)),
            h.push(Ir(l, o, u, i));
        return h;
      }
      function jr(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function Fr(t, e, n, r) {
        var i = e.borderSkipped,
          a = {};
        if (i)
          if (!0 !== i) {
            var o = (function (t) {
                var e, n, r, i, a;
                return (
                  t.horizontal
                    ? ((e = t.base > t.x), (n = 'left'), (r = 'right'))
                    : ((e = t.base < t.y), (n = 'bottom'), (r = 'top')),
                  e
                    ? ((i = 'end'), (a = 'start'))
                    : ((i = 'start'), (a = 'end')),
                  { start: n, end: r, reverse: e, top: i, bottom: a }
                );
              })(t),
              l = o.start,
              s = o.end,
              u = o.reverse,
              c = o.top,
              f = o.bottom;
            'middle' === i &&
              n &&
              ((t.enableBorderRadius = !0),
              (n._top || 0) === r
                ? (i = c)
                : (n._bottom || 0) === r
                ? (i = f)
                : ((a[Vr(f, l, s, u)] = !0), (i = c))),
              (a[Vr(i, l, s, u)] = !0),
              (t.borderSkipped = a);
          } else t.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
        else t.borderSkipped = a;
      }
      function Vr(t, e, n, r) {
        var i, a, o;
        return (
          r
            ? ((o = n),
              (t = Br((t = (i = t) === (a = e) ? o : i === o ? a : i), n, e)))
            : (t = Br(t, e, n)),
          t
        );
      }
      function Br(t, e, n) {
        return 'start' === t ? e : 'end' === t ? n : t;
      }
      function Wr(t, e, n) {
        var r = e.inflateAmount;
        t.inflateAmount = 'auto' === r ? (1 === n ? 0.33 : 0) : r;
      }
      (Rr.defaults = {}),
        (Rr.prototype.datasetElementType = null),
        (Rr.prototype.dataElementType = null);
      var Hr = (function (t) {
        V(n, t);
        var e = W(n);
        function n() {
          return Y(this, n), e.apply(this, arguments);
        }
        return (
          X(n, [
            {
              key: 'parsePrimitiveData',
              value: function (t, e, n, r) {
                return zr(t, e, n, r);
              },
            },
            {
              key: 'parseArrayData',
              value: function (t, e, n, r) {
                return zr(t, e, n, r);
              },
            },
            {
              key: 'parseObjectData',
              value: function (t, e, n, r) {
                var i,
                  a,
                  o,
                  l,
                  s = t.iScale,
                  u = t.vScale,
                  c = this._parsing,
                  f = c.xAxisKey,
                  h = void 0 === f ? 'x' : f,
                  d = c.yAxisKey,
                  p = void 0 === d ? 'y' : d,
                  v = 'x' === s.axis ? h : p,
                  g = 'x' === u.axis ? h : p,
                  y = [];
                for (i = n, a = n + r; i < a; ++i)
                  (l = e[i]),
                    ((o = {})[s.axis] = s.parse(dt(l, v), i)),
                    y.push(Ir(dt(l, g), o, u, i));
                return y;
              },
            },
            {
              key: 'updateRangeFromParsed',
              value: function (t, e, r, i) {
                j(I(n.prototype), 'updateRangeFromParsed', this).call(
                  this,
                  t,
                  e,
                  r,
                  i
                );
                var a = r._custom;
                a &&
                  e === this._cachedMeta.vScale &&
                  ((t.min = Math.min(t.min, a.min)),
                  (t.max = Math.max(t.max, a.max)));
              },
            },
            {
              key: 'getMaxOverflow',
              value: function () {
                return 0;
              },
            },
            {
              key: 'getLabelAndValue',
              value: function (t) {
                var e = this._cachedMeta,
                  n = e.iScale,
                  r = e.vScale,
                  i = this.getParsed(t),
                  a = i._custom,
                  o = jr(a)
                    ? '[' + a.start + ', ' + a.end + ']'
                    : '' + r.getLabelForValue(i[r.axis]);
                return { label: '' + n.getLabelForValue(i[n.axis]), value: o };
              },
            },
            {
              key: 'initialize',
              value: function () {
                (this.enableOptionSharing = !0),
                  j(I(n.prototype), 'initialize', this).call(this),
                  (this._cachedMeta.stack = this.getDataset().stack);
              },
            },
            {
              key: 'update',
              value: function (t) {
                var e = this._cachedMeta;
                this.updateElements(e.data, 0, e.data.length, t);
              },
            },
            {
              key: 'updateElements',
              value: function (t, e, n, r) {
                for (
                  var i = 'reset' === r,
                    a = this.index,
                    o = this._cachedMeta.vScale,
                    l = o.getBasePixel(),
                    s = o.isHorizontal(),
                    u = this._getRuler(),
                    c = this._getSharedOptions(e, r),
                    f = c.sharedOptions,
                    h = c.includeOptions,
                    d = e;
                  d < e + n;
                  d++
                ) {
                  var p = this.getParsed(d),
                    v =
                      i || q(p[o.axis])
                        ? { base: l, head: l }
                        : this._calculateBarValuePixels(d),
                    g = this._calculateBarIndexPixels(d, u),
                    y = (p._stacks || {})[o.axis],
                    m = {
                      horizontal: s,
                      base: v.base,
                      enableBorderRadius:
                        !y || jr(p._custom) || a === y._top || a === y._bottom,
                      x: s ? v.head : g.center,
                      y: s ? g.center : v.head,
                      height: s ? g.size : Math.abs(v.size),
                      width: s ? Math.abs(v.size) : g.size,
                    };
                  h &&
                    (m.options =
                      f ||
                      this.resolveDataElementOptions(
                        d,
                        t[d].active ? 'active' : r
                      ));
                  var b = m.options || t[d].options;
                  Fr(m, b, y, a),
                    Wr(m, b, u.ratio),
                    this.updateElement(t[d], d, m, r);
                }
              },
            },
            {
              key: '_getStacks',
              value: function (t, e) {
                var n,
                  r = this._cachedMeta.iScale,
                  i = r
                    .getMatchingVisibleMetas(this._type)
                    .filter(function (t) {
                      return t.controller.options.grouped;
                    }),
                  a = r.options.stacked,
                  o = [],
                  l = function (t) {
                    var n = t.controller.getParsed(e),
                      r = n && n[t.vScale.axis];
                    if (q(r) || isNaN(r)) return !0;
                  },
                  s = H(i);
                try {
                  for (s.s(); !(n = s.n()).done; ) {
                    var u = n.value;
                    if (
                      (void 0 === e || !l(u)) &&
                      ((!1 === a ||
                        -1 === o.indexOf(u.stack) ||
                        (void 0 === a && void 0 === u.stack)) &&
                        o.push(u.stack),
                      u.index === t)
                    )
                      break;
                  }
                } catch (c) {
                  s.e(c);
                } finally {
                  s.f();
                }
                return o.length || o.push(void 0), o;
              },
            },
            {
              key: '_getStackCount',
              value: function (t) {
                return this._getStacks(void 0, t).length;
              },
            },
            {
              key: '_getStackIndex',
              value: function (t, e, n) {
                var r = this._getStacks(t, n),
                  i = void 0 !== e ? r.indexOf(e) : -1;
                return -1 === i ? r.length - 1 : i;
              },
            },
            {
              key: '_getRuler',
              value: function () {
                var t,
                  e,
                  n = this.options,
                  r = this._cachedMeta,
                  i = r.iScale,
                  a = [];
                for (t = 0, e = r.data.length; t < e; ++t)
                  a.push(i.getPixelForValue(this.getParsed(t)[i.axis], t));
                var o = n.barThickness;
                return {
                  min: o || Nr(r),
                  pixels: a,
                  start: i._startPixel,
                  end: i._endPixel,
                  stackCount: this._getStackCount(),
                  scale: i,
                  grouped: n.grouped,
                  ratio: o ? 1 : n.categoryPercentage * n.barPercentage,
                };
              },
            },
            {
              key: '_calculateBarValuePixels',
              value: function (t) {
                var e,
                  n,
                  r = this._cachedMeta,
                  i = r.vScale,
                  a = r._stacked,
                  o = this.options,
                  l = o.base,
                  s = o.minBarLength,
                  u = l || 0,
                  c = this.getParsed(t),
                  f = c._custom,
                  h = jr(f),
                  d = c[i.axis],
                  p = 0,
                  v = a ? this.applyStack(i, c, a) : d;
                v !== d && ((p = v - d), (v = d)),
                  h &&
                    ((d = f.barStart),
                    (v = f.barEnd - f.barStart),
                    0 !== d && Pt(d) !== Pt(f.barEnd) && (p = 0),
                    (p += d));
                var g = q(l) || h ? p : l,
                  y = i.getPixelForValue(g);
                if (
                  ((n =
                    (e = this.chart.getDataVisibility(t)
                      ? i.getPixelForValue(p + v)
                      : y) - y),
                  Math.abs(n) < s)
                ) {
                  (n =
                    (function (t, e, n) {
                      return 0 !== t
                        ? Pt(t)
                        : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1);
                    })(n, i, u) * s),
                    d === u && (y -= n / 2);
                  var m = i.getPixelForDecimal(0),
                    b = i.getPixelForDecimal(1),
                    x = Math.min(m, b),
                    k = Math.max(m, b);
                  e = (y = Math.max(Math.min(y, k), x)) + n;
                }
                if (y === i.getPixelForValue(u)) {
                  var _ = (Pt(n) * i.getLineWidthForValue(u)) / 2;
                  (y += _), (n -= _);
                }
                return { size: n, base: y, head: e, center: e + n / 2 };
              },
            },
            {
              key: '_calculateBarIndexPixels',
              value: function (t, e) {
                var n,
                  r,
                  i = e.scale,
                  a = this.options,
                  o = a.skipNull,
                  l = et(a.maxBarThickness, 1 / 0);
                if (e.grouped) {
                  var s = o ? this._getStackCount(t) : e.stackCount,
                    u =
                      'flex' === a.barThickness
                        ? (function (t, e, n, r) {
                            var i = e.pixels,
                              a = i[t],
                              o = t > 0 ? i[t - 1] : null,
                              l = t < i.length - 1 ? i[t + 1] : null,
                              s = n.categoryPercentage;
                            null === o &&
                              (o = a - (null === l ? e.end - e.start : l - a)),
                              null === l && (l = a + a - o);
                            var u = a - ((a - Math.min(o, l)) / 2) * s;
                            return {
                              chunk: ((Math.abs(l - o) / 2) * s) / r,
                              ratio: n.barPercentage,
                              start: u,
                            };
                          })(t, e, a, s)
                        : (function (t, e, n, r) {
                            var i,
                              a,
                              o = n.barThickness;
                            return (
                              q(o)
                                ? ((i = e.min * n.categoryPercentage),
                                  (a = n.barPercentage))
                                : ((i = o * r), (a = 1)),
                              {
                                chunk: i / r,
                                ratio: a,
                                start: e.pixels[t] - i / 2,
                              }
                            );
                          })(t, e, a, s),
                    c = this._getStackIndex(
                      this.index,
                      this._cachedMeta.stack,
                      o ? t : void 0
                    );
                  (n = u.start + u.chunk * c + u.chunk / 2),
                    (r = Math.min(l, u.chunk * u.ratio));
                } else
                  (n = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
                    (r = Math.min(l, e.min * e.ratio));
                return { base: n - r / 2, head: n + r / 2, center: n, size: r };
              },
            },
            {
              key: 'draw',
              value: function () {
                for (
                  var t = this._cachedMeta,
                    e = t.vScale,
                    n = t.data,
                    r = n.length,
                    i = 0;
                  i < r;
                  ++i
                )
                  null !== this.getParsed(i)[e.axis] && n[i].draw(this._ctx);
              },
            },
          ]),
          n
        );
      })(Rr);
      (Hr.id = 'bar'),
        (Hr.defaults = {
          datasetElementType: !1,
          dataElementType: 'bar',
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'base', 'width', 'height'],
            },
          },
        }),
        (Hr.overrides = {
          scales: {
            _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
            _value_: { type: 'linear', beginAtZero: !0 },
          },
        });
      var Ur = (function (t) {
        V(n, t);
        var e = W(n);
        function n() {
          return Y(this, n), e.apply(this, arguments);
        }
        return (
          X(n, [
            {
              key: 'initialize',
              value: function () {
                (this.enableOptionSharing = !0),
                  j(I(n.prototype), 'initialize', this).call(this);
              },
            },
            {
              key: 'parsePrimitiveData',
              value: function (t, e, r, i) {
                for (
                  var a = j(I(n.prototype), 'parsePrimitiveData', this).call(
                      this,
                      t,
                      e,
                      r,
                      i
                    ),
                    o = 0;
                  o < a.length;
                  o++
                )
                  a[o]._custom = this.resolveDataElementOptions(o + r).radius;
                return a;
              },
            },
            {
              key: 'parseArrayData',
              value: function (t, e, r, i) {
                for (
                  var a = j(I(n.prototype), 'parseArrayData', this).call(
                      this,
                      t,
                      e,
                      r,
                      i
                    ),
                    o = 0;
                  o < a.length;
                  o++
                ) {
                  var l = e[r + o];
                  a[o]._custom = et(
                    l[2],
                    this.resolveDataElementOptions(o + r).radius
                  );
                }
                return a;
              },
            },
            {
              key: 'parseObjectData',
              value: function (t, e, r, i) {
                for (
                  var a = j(I(n.prototype), 'parseObjectData', this).call(
                      this,
                      t,
                      e,
                      r,
                      i
                    ),
                    o = 0;
                  o < a.length;
                  o++
                ) {
                  var l = e[r + o];
                  a[o]._custom = et(
                    l && l.r && +l.r,
                    this.resolveDataElementOptions(o + r).radius
                  );
                }
                return a;
              },
            },
            {
              key: 'getMaxOverflow',
              value: function () {
                for (
                  var t = this._cachedMeta.data, e = 0, n = t.length - 1;
                  n >= 0;
                  --n
                )
                  e = Math.max(
                    e,
                    t[n].size(this.resolveDataElementOptions(n)) / 2
                  );
                return e > 0 && e;
              },
            },
            {
              key: 'getLabelAndValue',
              value: function (t) {
                var e = this._cachedMeta,
                  n = e.xScale,
                  r = e.yScale,
                  i = this.getParsed(t),
                  a = n.getLabelForValue(i.x),
                  o = r.getLabelForValue(i.y),
                  l = i._custom;
                return {
                  label: e.label,
                  value: '(' + a + ', ' + o + (l ? ', ' + l : '') + ')',
                };
              },
            },
            {
              key: 'update',
              value: function (t) {
                var e = this._cachedMeta.data;
                this.updateElements(e, 0, e.length, t);
              },
            },
            {
              key: 'updateElements',
              value: function (t, e, n, r) {
                for (
                  var i = 'reset' === r,
                    a = this._cachedMeta,
                    o = a.iScale,
                    l = a.vScale,
                    s = this._getSharedOptions(e, r),
                    u = s.sharedOptions,
                    c = s.includeOptions,
                    f = o.axis,
                    h = l.axis,
                    d = e;
                  d < e + n;
                  d++
                ) {
                  var p = t[d],
                    v = !i && this.getParsed(d),
                    g = {},
                    y = (g[f] = i
                      ? o.getPixelForDecimal(0.5)
                      : o.getPixelForValue(v[f])),
                    m = (g[h] = i
                      ? l.getBasePixel()
                      : l.getPixelForValue(v[h]));
                  (g.skip = isNaN(y) || isNaN(m)),
                    c &&
                      ((g.options =
                        u ||
                        this.resolveDataElementOptions(
                          d,
                          p.active ? 'active' : r
                        )),
                      i && (g.options.radius = 0)),
                    this.updateElement(p, d, g, r);
                }
              },
            },
            {
              key: 'resolveDataElementOptions',
              value: function (t, e) {
                var r = this.getParsed(t),
                  i = j(I(n.prototype), 'resolveDataElementOptions', this).call(
                    this,
                    t,
                    e
                  );
                i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
                var a = i.radius;
                return (
                  'active' !== e && (i.radius = 0),
                  (i.radius += et(r && r._custom, a)),
                  i
                );
              },
            },
          ]),
          n
        );
      })(Rr);
      (Ur.id = 'bubble'),
        (Ur.defaults = {
          datasetElementType: !1,
          dataElementType: 'point',
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'borderWidth', 'radius'],
            },
          },
        }),
        (Ur.overrides = {
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return '';
                },
              },
            },
          },
        });
      var Yr = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t, r) {
          var i;
          return (
            Y(this, n),
            ((i = e.call(this, t, r)).enableOptionSharing = !0),
            (i.innerRadius = void 0),
            (i.outerRadius = void 0),
            (i.offsetX = void 0),
            (i.offsetY = void 0),
            i
          );
        }
        return (
          X(n, [
            { key: 'linkScales', value: function () {} },
            {
              key: 'parse',
              value: function (t, e) {
                var n = this.getDataset().data,
                  r = this._cachedMeta;
                if (!1 === this._parsing) r._parsed = n;
                else {
                  var i,
                    a,
                    o = function (t) {
                      return +n[t];
                    };
                  if (K(n[t])) {
                    var l = this._parsing.key,
                      s = void 0 === l ? 'value' : l;
                    o = function (t) {
                      return +dt(n[t], s);
                    };
                  }
                  for (i = t, a = t + e; i < a; ++i) r._parsed[i] = o(i);
                }
              },
            },
            {
              key: '_getRotation',
              value: function () {
                return Dt(this.options.rotation - 90);
              },
            },
            {
              key: '_getCircumference',
              value: function () {
                return Dt(this.options.circumference);
              },
            },
            {
              key: '_getRotationExtents',
              value: function () {
                for (
                  var t = bt, e = -bt, n = 0;
                  n < this.chart.data.datasets.length;
                  ++n
                )
                  if (this.chart.isDatasetVisible(n)) {
                    var r = this.chart.getDatasetMeta(n).controller,
                      i = r._getRotation(),
                      a = r._getCircumference();
                    (t = Math.min(t, i)), (e = Math.max(e, i + a));
                  }
                return { rotation: t, circumference: e - t };
              },
            },
            {
              key: 'update',
              value: function (t) {
                var e,
                  n,
                  r = this.chart.chartArea,
                  i = this._cachedMeta,
                  a = i.data,
                  o =
                    this.getMaxBorderWidth() +
                    this.getMaxOffset(a) +
                    this.options.spacing,
                  l = Math.max((Math.min(r.width, r.height) - o) / 2, 0),
                  s = Math.min(
                    ((e = this.options.cutout),
                    (n = l),
                    'string' === typeof e && e.endsWith('%')
                      ? parseFloat(e) / 100
                      : e / n),
                    1
                  ),
                  u = this._getRingWeight(this.index),
                  c = this._getRotationExtents(),
                  f = c.circumference,
                  h = (function (t, e, n) {
                    var r = 1,
                      i = 1,
                      a = 0,
                      o = 0;
                    if (e < bt) {
                      var l = t,
                        s = l + e,
                        u = Math.cos(l),
                        c = Math.sin(l),
                        f = Math.cos(s),
                        h = Math.sin(s),
                        d = function (t, e, r) {
                          return Ft(t, l, s, !0)
                            ? 1
                            : Math.max(e, e * n, r, r * n);
                        },
                        p = function (t, e, r) {
                          return Ft(t, l, s, !0)
                            ? -1
                            : Math.min(e, e * n, r, r * n);
                        },
                        v = d(0, u, f),
                        g = d(wt, c, h),
                        y = p(mt, u, f),
                        m = p(mt + wt, c, h);
                      (r = (v - y) / 2),
                        (i = (g - m) / 2),
                        (a = -(v + y) / 2),
                        (o = -(g + m) / 2);
                    }
                    return { ratioX: r, ratioY: i, offsetX: a, offsetY: o };
                  })(c.rotation, f, s),
                  d = h.ratioX,
                  p = h.ratioY,
                  v = h.offsetX,
                  g = h.offsetY,
                  y = (r.width - o) / d,
                  m = (r.height - o) / p,
                  b = Math.max(Math.min(y, m) / 2, 0),
                  x = nt(this.options.radius, b),
                  k =
                    (x - Math.max(x * s, 0)) /
                    this._getVisibleDatasetWeightTotal();
                (this.offsetX = v * x),
                  (this.offsetY = g * x),
                  (i.total = this.calculateTotal()),
                  (this.outerRadius =
                    x - k * this._getRingWeightOffset(this.index)),
                  (this.innerRadius = Math.max(this.outerRadius - k * u, 0)),
                  this.updateElements(a, 0, a.length, t);
              },
            },
            {
              key: '_circumference',
              value: function (t, e) {
                var n = this.options,
                  r = this._cachedMeta,
                  i = this._getCircumference();
                return (e && n.animation.animateRotate) ||
                  !this.chart.getDataVisibility(t) ||
                  null === r._parsed[t] ||
                  r.data[t].hidden
                  ? 0
                  : this.calculateCircumference((r._parsed[t] * i) / bt);
              },
            },
            {
              key: 'updateElements',
              value: function (t, e, n, r) {
                var i,
                  a = 'reset' === r,
                  o = this.chart,
                  l = o.chartArea,
                  s = o.options.animation,
                  u = (l.left + l.right) / 2,
                  c = (l.top + l.bottom) / 2,
                  f = a && s.animateScale,
                  h = f ? 0 : this.innerRadius,
                  d = f ? 0 : this.outerRadius,
                  p = this._getSharedOptions(e, r),
                  v = p.sharedOptions,
                  g = p.includeOptions,
                  y = this._getRotation();
                for (i = 0; i < e; ++i) y += this._circumference(i, a);
                for (i = e; i < e + n; ++i) {
                  var m = this._circumference(i, a),
                    b = t[i],
                    x = {
                      x: u + this.offsetX,
                      y: c + this.offsetY,
                      startAngle: y,
                      endAngle: y + m,
                      circumference: m,
                      outerRadius: d,
                      innerRadius: h,
                    };
                  g &&
                    (x.options =
                      v ||
                      this.resolveDataElementOptions(
                        i,
                        b.active ? 'active' : r
                      )),
                    (y += m),
                    this.updateElement(b, i, x, r);
                }
              },
            },
            {
              key: 'calculateTotal',
              value: function () {
                var t,
                  e = this._cachedMeta,
                  n = e.data,
                  r = 0;
                for (t = 0; t < n.length; t++) {
                  var i = e._parsed[t];
                  null === i ||
                    isNaN(i) ||
                    !this.chart.getDataVisibility(t) ||
                    n[t].hidden ||
                    (r += Math.abs(i));
                }
                return r;
              },
            },
            {
              key: 'calculateCircumference',
              value: function (t) {
                var e = this._cachedMeta.total;
                return e > 0 && !isNaN(t) ? bt * (Math.abs(t) / e) : 0;
              },
            },
            {
              key: 'getLabelAndValue',
              value: function (t) {
                var e = this._cachedMeta,
                  n = this.chart,
                  r = n.data.labels || [],
                  i = ar(e._parsed[t], n.options.locale);
                return { label: r[t] || '', value: i };
              },
            },
            {
              key: 'getMaxBorderWidth',
              value: function (t) {
                var e,
                  n,
                  r,
                  i,
                  a,
                  o = 0,
                  l = this.chart;
                if (!t)
                  for (e = 0, n = l.data.datasets.length; e < n; ++e)
                    if (l.isDatasetVisible(e)) {
                      (t = (r = l.getDatasetMeta(e)).data), (i = r.controller);
                      break;
                    }
                if (!t) return 0;
                for (e = 0, n = t.length; e < n; ++e)
                  'inner' !==
                    (a = i.resolveDataElementOptions(e)).borderAlign &&
                    (o = Math.max(
                      o,
                      a.borderWidth || 0,
                      a.hoverBorderWidth || 0
                    ));
                return o;
              },
            },
            {
              key: 'getMaxOffset',
              value: function (t) {
                for (var e = 0, n = 0, r = t.length; n < r; ++n) {
                  var i = this.resolveDataElementOptions(n);
                  e = Math.max(e, i.offset || 0, i.hoverOffset || 0);
                }
                return e;
              },
            },
            {
              key: '_getRingWeightOffset',
              value: function (t) {
                for (var e = 0, n = 0; n < t; ++n)
                  this.chart.isDatasetVisible(n) &&
                    (e += this._getRingWeight(n));
                return e;
              },
            },
            {
              key: '_getRingWeight',
              value: function (t) {
                return Math.max(et(this.chart.data.datasets[t].weight, 1), 0);
              },
            },
            {
              key: '_getVisibleDatasetWeightTotal',
              value: function () {
                return (
                  this._getRingWeightOffset(this.chart.data.datasets.length) ||
                  1
                );
              },
            },
          ]),
          n
        );
      })(Rr);
      (Yr.id = 'doughnut'),
        (Yr.defaults = {
          datasetElementType: !1,
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'circumference',
                'endAngle',
                'innerRadius',
                'outerRadius',
                'startAngle',
                'x',
                'y',
                'offset',
                'borderWidth',
                'spacing',
              ],
            },
          },
          cutout: '50%',
          rotation: 0,
          circumference: 360,
          radius: '100%',
          spacing: 0,
          indexAxis: 'r',
        }),
        (Yr.descriptors = {
          _scriptable: function (t) {
            return 'spacing' !== t;
          },
          _indexable: function (t) {
            return 'spacing' !== t;
          },
        }),
        (Yr.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (t) {
                  var e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    var n = t.legend.options.labels.pointStyle;
                    return e.labels.map(function (e, r) {
                      var i = t.getDatasetMeta(0).controller.getStyle(r);
                      return {
                        text: e,
                        fillStyle: i.backgroundColor,
                        strokeStyle: i.borderColor,
                        lineWidth: i.borderWidth,
                        pointStyle: n,
                        hidden: !t.getDataVisibility(r),
                        index: r,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick: function (t, e, n) {
                n.chart.toggleDataVisibility(e.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return '';
                },
                label: function (t) {
                  var e = t.label,
                    n = ': ' + t.formattedValue;
                  return Z(e) ? ((e = e.slice())[0] += n) : (e += n), e;
                },
              },
            },
          },
        });
      var $r = (function (t) {
        V(n, t);
        var e = W(n);
        function n() {
          return Y(this, n), e.apply(this, arguments);
        }
        return (
          X(n, [
            {
              key: 'initialize',
              value: function () {
                (this.enableOptionSharing = !0),
                  (this.supportsDecimation = !0),
                  j(I(n.prototype), 'initialize', this).call(this);
              },
            },
            {
              key: 'update',
              value: function (t) {
                var e = this._cachedMeta,
                  n = e.dataset,
                  r = e.data,
                  i = void 0 === r ? [] : r,
                  a = e._dataset,
                  o = this.chart._animationsDisabled,
                  l = Kt(e, i, o),
                  s = l.start,
                  u = l.count;
                (this._drawStart = s),
                  (this._drawCount = u),
                  Jt(e) && ((s = 0), (u = i.length)),
                  (n._chart = this.chart),
                  (n._datasetIndex = this.index),
                  (n._decimated = !!a._decimated),
                  (n.points = i);
                var c = this.resolveDatasetElementOptions(t);
                this.options.showLine || (c.borderWidth = 0),
                  (c.segment = this.options.segment),
                  this.updateElement(
                    n,
                    void 0,
                    { animated: !o, options: c },
                    t
                  ),
                  this.updateElements(i, s, u, t);
              },
            },
            {
              key: 'updateElements',
              value: function (t, e, n, r) {
                for (
                  var i = 'reset' === r,
                    a = this._cachedMeta,
                    o = a.iScale,
                    l = a.vScale,
                    s = a._stacked,
                    u = a._dataset,
                    c = this._getSharedOptions(e, r),
                    f = c.sharedOptions,
                    h = c.includeOptions,
                    d = o.axis,
                    p = l.axis,
                    v = this.options,
                    g = v.spanGaps,
                    y = v.segment,
                    m = Ot(g) ? g : Number.POSITIVE_INFINITY,
                    b = this.chart._animationsDisabled || i || 'none' === r,
                    x = e > 0 && this.getParsed(e - 1),
                    k = e;
                  k < e + n;
                  ++k
                ) {
                  var _ = t[k],
                    w = this.getParsed(k),
                    S = b ? _ : {},
                    M = q(w[p]),
                    E = (S[d] = o.getPixelForValue(w[d], k)),
                    P = (S[p] =
                      i || M
                        ? l.getBasePixel()
                        : l.getPixelForValue(
                            s ? this.applyStack(l, w, s) : w[p],
                            k
                          ));
                  (S.skip = isNaN(E) || isNaN(P) || M),
                    (S.stop = k > 0 && Math.abs(w[d] - x[d]) > m),
                    y && ((S.parsed = w), (S.raw = u.data[k])),
                    h &&
                      (S.options =
                        f ||
                        this.resolveDataElementOptions(
                          k,
                          _.active ? 'active' : r
                        )),
                    b || this.updateElement(_, k, S, r),
                    (x = w);
                }
              },
            },
            {
              key: 'getMaxOverflow',
              value: function () {
                var t = this._cachedMeta,
                  e = t.dataset,
                  n = (e.options && e.options.borderWidth) || 0,
                  r = t.data || [];
                if (!r.length) return n;
                var i = r[0].size(this.resolveDataElementOptions(0)),
                  a = r[r.length - 1].size(
                    this.resolveDataElementOptions(r.length - 1)
                  );
                return Math.max(n, i, a) / 2;
              },
            },
            {
              key: 'draw',
              value: function () {
                var t = this._cachedMeta;
                t.dataset.updateControlPoints(
                  this.chart.chartArea,
                  t.iScale.axis
                ),
                  j(I(n.prototype), 'draw', this).call(this);
              },
            },
          ]),
          n
        );
      })(Rr);
      ($r.id = 'line'),
        ($r.defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          showLine: !0,
          spanGaps: !1,
        }),
        ($r.overrides = {
          scales: {
            _index_: { type: 'category' },
            _value_: { type: 'linear' },
          },
        });
      var Xr = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t, r) {
          var i;
          return (
            Y(this, n),
            ((i = e.call(this, t, r)).innerRadius = void 0),
            (i.outerRadius = void 0),
            i
          );
        }
        return (
          X(n, [
            {
              key: 'getLabelAndValue',
              value: function (t) {
                var e = this._cachedMeta,
                  n = this.chart,
                  r = n.data.labels || [],
                  i = ar(e._parsed[t].r, n.options.locale);
                return { label: r[t] || '', value: i };
              },
            },
            {
              key: 'parseObjectData',
              value: function (t, e, n, r) {
                return Rn.bind(this)(t, e, n, r);
              },
            },
            {
              key: 'update',
              value: function (t) {
                var e = this._cachedMeta.data;
                this._updateRadius(), this.updateElements(e, 0, e.length, t);
              },
            },
            {
              key: 'getMinMax',
              value: function () {
                var t = this,
                  e = this._cachedMeta,
                  n = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY,
                  };
                return (
                  e.data.forEach(function (e, r) {
                    var i = t.getParsed(r).r;
                    !isNaN(i) &&
                      t.chart.getDataVisibility(r) &&
                      (i < n.min && (n.min = i), i > n.max && (n.max = i));
                  }),
                  n
                );
              },
            },
            {
              key: '_updateRadius',
              value: function () {
                var t = this.chart,
                  e = t.chartArea,
                  n = t.options,
                  r = Math.min(e.right - e.left, e.bottom - e.top),
                  i = Math.max(r / 2, 0),
                  a =
                    (i -
                      Math.max(
                        n.cutoutPercentage ? (i / 100) * n.cutoutPercentage : 1,
                        0
                      )) /
                    t.getVisibleDatasetCount();
                (this.outerRadius = i - a * this.index),
                  (this.innerRadius = this.outerRadius - a);
              },
            },
            {
              key: 'updateElements',
              value: function (t, e, n, r) {
                var i,
                  a = 'reset' === r,
                  o = this.chart,
                  l = o.options.animation,
                  s = this._cachedMeta.rScale,
                  u = s.xCenter,
                  c = s.yCenter,
                  f = s.getIndexAngle(0) - 0.5 * mt,
                  h = f,
                  d = 360 / this.countVisibleElements();
                for (i = 0; i < e; ++i) h += this._computeAngle(i, r, d);
                for (i = e; i < e + n; i++) {
                  var p = t[i],
                    v = h,
                    g = h + this._computeAngle(i, r, d),
                    y = o.getDataVisibility(i)
                      ? s.getDistanceFromCenterForValue(this.getParsed(i).r)
                      : 0;
                  (h = g),
                    a &&
                      (l.animateScale && (y = 0),
                      l.animateRotate && (v = g = f));
                  var m = {
                    x: u,
                    y: c,
                    innerRadius: 0,
                    outerRadius: y,
                    startAngle: v,
                    endAngle: g,
                    options: this.resolveDataElementOptions(
                      i,
                      p.active ? 'active' : r
                    ),
                  };
                  this.updateElement(p, i, m, r);
                }
              },
            },
            {
              key: 'countVisibleElements',
              value: function () {
                var t = this,
                  e = this._cachedMeta,
                  n = 0;
                return (
                  e.data.forEach(function (e, r) {
                    !isNaN(t.getParsed(r).r) &&
                      t.chart.getDataVisibility(r) &&
                      n++;
                  }),
                  n
                );
              },
            },
            {
              key: '_computeAngle',
              value: function (t, e, n) {
                return this.chart.getDataVisibility(t)
                  ? Dt(this.resolveDataElementOptions(t, e).angle || n)
                  : 0;
              },
            },
          ]),
          n
        );
      })(Rr);
      (Xr.id = 'polarArea'),
        (Xr.defaults = {
          dataElementType: 'arc',
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: 'number',
              properties: [
                'x',
                'y',
                'startAngle',
                'endAngle',
                'innerRadius',
                'outerRadius',
              ],
            },
          },
          indexAxis: 'r',
          startAngle: 0,
        }),
        (Xr.overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels: function (t) {
                  var e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    var n = t.legend.options.labels.pointStyle;
                    return e.labels.map(function (e, r) {
                      var i = t.getDatasetMeta(0).controller.getStyle(r);
                      return {
                        text: e,
                        fillStyle: i.backgroundColor,
                        strokeStyle: i.borderColor,
                        lineWidth: i.borderWidth,
                        pointStyle: n,
                        hidden: !t.getDataVisibility(r),
                        index: r,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick: function (t, e, n) {
                n.chart.toggleDataVisibility(e.index), n.chart.update();
              },
            },
            tooltip: {
              callbacks: {
                title: function () {
                  return '';
                },
                label: function (t) {
                  return (
                    t.chart.data.labels[t.dataIndex] + ': ' + t.formattedValue
                  );
                },
              },
            },
          },
          scales: {
            r: {
              type: 'radialLinear',
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        });
      var Gr = (function (t) {
        V(n, t);
        var e = W(n);
        function n() {
          return Y(this, n), e.apply(this, arguments);
        }
        return X(n);
      })(Yr);
      (Gr.id = 'pie'),
        (Gr.defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: '100%',
        });
      var Qr = (function (t) {
        V(n, t);
        var e = W(n);
        function n() {
          return Y(this, n), e.apply(this, arguments);
        }
        return (
          X(n, [
            {
              key: 'getLabelAndValue',
              value: function (t) {
                var e = this._cachedMeta.vScale,
                  n = this.getParsed(t);
                return {
                  label: e.getLabels()[t],
                  value: '' + e.getLabelForValue(n[e.axis]),
                };
              },
            },
            {
              key: 'parseObjectData',
              value: function (t, e, n, r) {
                return Rn.bind(this)(t, e, n, r);
              },
            },
            {
              key: 'update',
              value: function (t) {
                var e = this._cachedMeta,
                  n = e.dataset,
                  r = e.data || [],
                  i = e.iScale.getLabels();
                if (((n.points = r), 'resize' !== t)) {
                  var a = this.resolveDatasetElementOptions(t);
                  this.options.showLine || (a.borderWidth = 0);
                  var o = {
                    _loop: !0,
                    _fullLoop: i.length === r.length,
                    options: a,
                  };
                  this.updateElement(n, void 0, o, t);
                }
                this.updateElements(r, 0, r.length, t);
              },
            },
            {
              key: 'updateElements',
              value: function (t, e, n, r) {
                for (
                  var i = this._cachedMeta.rScale, a = 'reset' === r, o = e;
                  o < e + n;
                  o++
                ) {
                  var l = t[o],
                    s = this.resolveDataElementOptions(
                      o,
                      l.active ? 'active' : r
                    ),
                    u = i.getPointPositionForValue(o, this.getParsed(o).r),
                    c = a ? i.xCenter : u.x,
                    f = a ? i.yCenter : u.y,
                    h = {
                      x: c,
                      y: f,
                      angle: u.angle,
                      skip: isNaN(c) || isNaN(f),
                      options: s,
                    };
                  this.updateElement(l, o, h, r);
                }
              },
            },
          ]),
          n
        );
      })(Rr);
      (Qr.id = 'radar'),
        (Qr.defaults = {
          datasetElementType: 'line',
          dataElementType: 'point',
          indexAxis: 'r',
          showLine: !0,
          elements: { line: { fill: 'start' } },
        }),
        (Qr.overrides = {
          aspectRatio: 1,
          scales: { r: { type: 'radialLinear' } },
        });
      var qr = (function () {
        function t() {
          Y(this, t),
            (this.x = void 0),
            (this.y = void 0),
            (this.active = !1),
            (this.options = void 0),
            (this.$animations = void 0);
        }
        return (
          X(t, [
            {
              key: 'tooltipPosition',
              value: function (t) {
                var e = this.getProps(['x', 'y'], t);
                return { x: e.x, y: e.y };
              },
            },
            {
              key: 'hasValue',
              value: function () {
                return Ot(this.x) && Ot(this.y);
              },
            },
            {
              key: 'getProps',
              value: function (t, e) {
                var n = this,
                  r = this.$animations;
                if (!e || !r) return this;
                var i = {};
                return (
                  t.forEach(function (t) {
                    i[t] = r[t] && r[t].active() ? r[t]._to : n[t];
                  }),
                  i
                );
              },
            },
          ]),
          t
        );
      })();
      (qr.defaults = {}), (qr.defaultRoutes = void 0);
      var Zr = {
        values: function (t) {
          return Z(t) ? t : '' + t;
        },
        numeric: function (t, e, n) {
          if (0 === t) return '0';
          var r,
            i = this.chart.options.locale,
            a = t;
          if (n.length > 1) {
            var o = Math.max(
              Math.abs(n[0].value),
              Math.abs(n[n.length - 1].value)
            );
            (o < 1e-4 || o > 1e15) && (r = 'scientific'),
              (a = (function (t, e) {
                var n =
                  e.length > 3
                    ? e[2].value - e[1].value
                    : e[1].value - e[0].value;
                Math.abs(n) >= 1 &&
                  t !== Math.floor(t) &&
                  (n = t - Math.floor(t));
                return n;
              })(t, n));
          }
          var l = Et(Math.abs(a)),
            s = Math.max(Math.min(-1 * Math.floor(l), 20), 0),
            u = {
              notation: r,
              minimumFractionDigits: s,
              maximumFractionDigits: s,
            };
          return Object.assign(u, this.options.ticks.format), ar(t, i, u);
        },
        logarithmic: function (t, e, n) {
          if (0 === t) return '0';
          var r = t / Math.pow(10, Math.floor(Et(t)));
          return 1 === r || 2 === r || 5 === r
            ? Zr.numeric.call(this, t, e, n)
            : '';
        },
      };
      var Kr = { formatters: Zr };
      function Jr(t, e) {
        var n = t.options.ticks,
          r =
            n.maxTicksLimit ||
            (function (t) {
              var e = t.options.offset,
                n = t._tickSize(),
                r = t._length / n + (e ? 0 : 1),
                i = t._maxLength / n;
              return Math.floor(Math.min(r, i));
            })(t),
          i = n.major.enabled
            ? (function (t) {
                var e,
                  n,
                  r = [];
                for (e = 0, n = t.length; e < n; e++) t[e].major && r.push(e);
                return r;
              })(e)
            : [],
          a = i.length,
          o = i[0],
          l = i[a - 1],
          s = [];
        if (a > r)
          return (
            (function (t, e, n, r) {
              var i,
                a = 0,
                o = n[0];
              for (r = Math.ceil(r), i = 0; i < t.length; i++)
                i === o && (e.push(t[i]), (o = n[++a * r]));
            })(e, s, i, a / r),
            s
          );
        var u = (function (t, e, n) {
          var r = (function (t) {
              var e,
                n,
                r = t.length;
              if (r < 2) return !1;
              for (n = t[0], e = 1; e < r; ++e)
                if (t[e] - t[e - 1] !== n) return !1;
              return n;
            })(t),
            i = e.length / n;
          if (!r) return Math.max(i, 1);
          for (
            var a = (function (t) {
                var e,
                  n = [],
                  r = Math.sqrt(t);
                for (e = 1; e < r; e++)
                  t % e === 0 && (n.push(e), n.push(t / e));
                return (
                  r === (0 | r) && n.push(r),
                  n
                    .sort(function (t, e) {
                      return t - e;
                    })
                    .pop(),
                  n
                );
              })(r),
              o = 0,
              l = a.length - 1;
            o < l;
            o++
          ) {
            var s = a[o];
            if (s > i) return s;
          }
          return Math.max(i, 1);
        })(i, e, r);
        if (a > 0) {
          var c,
            f,
            h = a > 1 ? Math.round((l - o) / (a - 1)) : null;
          for (ti(e, s, u, q(h) ? 0 : o - h, o), c = 0, f = a - 1; c < f; c++)
            ti(e, s, u, i[c], i[c + 1]);
          return ti(e, s, u, l, q(h) ? e.length : l + h), s;
        }
        return ti(e, s, u), s;
      }
      function ti(t, e, n, r, i) {
        var a,
          o,
          l,
          s = et(r, 0),
          u = Math.min(et(i, t.length), t.length),
          c = 0;
        for (
          n = Math.ceil(n), i && (n = (a = i - r) / Math.floor(a / n)), l = s;
          l < 0;

        )
          c++, (l = Math.round(s + c * n));
        for (o = Math.max(s, 0); o < u; o++)
          o === l && (e.push(t[o]), c++, (l = Math.round(s + c * n)));
      }
      $e.set('scale', {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: 'ticks',
        grace: 0,
        grid: {
          display: !0,
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickLength: 8,
          tickWidth: function (t, e) {
            return e.lineWidth;
          },
          tickColor: function (t, e) {
            return e.color;
          },
          offset: !1,
          borderDash: [],
          borderDashOffset: 0,
          borderWidth: 1,
        },
        title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
        ticks: {
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          textStrokeWidth: 0,
          textStrokeColor: '',
          padding: 3,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 3,
          labelOffset: 0,
          callback: Kr.formatters.values,
          minor: {},
          major: {},
          align: 'center',
          crossAlign: 'near',
          showLabelBackdrop: !1,
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          backdropPadding: 2,
        },
      }),
        $e.route('scale.ticks', 'color', '', 'color'),
        $e.route('scale.grid', 'color', '', 'borderColor'),
        $e.route('scale.grid', 'borderColor', '', 'borderColor'),
        $e.route('scale.title', 'color', '', 'color'),
        $e.describe('scale', {
          _fallback: !1,
          _scriptable: function (t) {
            return (
              !t.startsWith('before') &&
              !t.startsWith('after') &&
              'callback' !== t &&
              'parser' !== t
            );
          },
          _indexable: function (t) {
            return 'borderDash' !== t && 'tickBorderDash' !== t;
          },
        }),
        $e.describe('scales', { _fallback: 'scale' }),
        $e.describe('scale.ticks', {
          _scriptable: function (t) {
            return 'backdropPadding' !== t && 'callback' !== t;
          },
          _indexable: function (t) {
            return 'backdropPadding' !== t;
          },
        });
      var ei = function (t, e, n) {
        return 'top' === e || 'left' === e ? t[e] + n : t[e] - n;
      };
      function ni(t, e) {
        for (var n = [], r = t.length / e, i = t.length, a = 0; a < i; a += r)
          n.push(t[Math.floor(a)]);
        return n;
      }
      function ri(t, e, n) {
        var r,
          i = t.ticks.length,
          a = Math.min(e, i - 1),
          o = t._startPixel,
          l = t._endPixel,
          s = 1e-6,
          u = t.getPixelForTick(a);
        if (
          !(
            n &&
            ((r =
              1 === i
                ? Math.max(u - o, l - u)
                : 0 === e
                ? (t.getPixelForTick(1) - u) / 2
                : (u - t.getPixelForTick(a - 1)) / 2),
            (u += a < e ? r : -r) < o - s || u > l + s)
          )
        )
          return u;
      }
      function ii(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function ai(t, e) {
        if (!t.display) return 0;
        var n = yn(t.font, e),
          r = gn(t.padding);
        return (Z(t.text) ? t.text.length : 1) * n.lineHeight + r.height;
      }
      function oi(t, e, n) {
        var r = qt(t);
        return (
          ((n && 'right' !== e) || (!n && 'right' === e)) &&
            (r = (function (t) {
              return 'left' === t ? 'right' : 'right' === t ? 'left' : t;
            })(r)),
          r
        );
      }
      var li = (function (t) {
          V(n, t);
          var e = W(n);
          function n(t) {
            var r;
            return (
              Y(this, n),
              ((r = e.call(this)).id = t.id),
              (r.type = t.type),
              (r.options = void 0),
              (r.ctx = t.ctx),
              (r.chart = t.chart),
              (r.top = void 0),
              (r.bottom = void 0),
              (r.left = void 0),
              (r.right = void 0),
              (r.width = void 0),
              (r.height = void 0),
              (r._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (r.maxWidth = void 0),
              (r.maxHeight = void 0),
              (r.paddingTop = void 0),
              (r.paddingBottom = void 0),
              (r.paddingLeft = void 0),
              (r.paddingRight = void 0),
              (r.axis = void 0),
              (r.labelRotation = void 0),
              (r.min = void 0),
              (r.max = void 0),
              (r._range = void 0),
              (r.ticks = []),
              (r._gridLineItems = null),
              (r._labelItems = null),
              (r._labelSizes = null),
              (r._length = 0),
              (r._maxLength = 0),
              (r._longestTextCache = {}),
              (r._startPixel = void 0),
              (r._endPixel = void 0),
              (r._reversePixels = !1),
              (r._userMax = void 0),
              (r._userMin = void 0),
              (r._suggestedMax = void 0),
              (r._suggestedMin = void 0),
              (r._ticksLength = 0),
              (r._borderValue = 0),
              (r._cache = {}),
              (r._dataLimitsCached = !1),
              (r.$context = void 0),
              r
            );
          }
          return (
            X(n, [
              {
                key: 'init',
                value: function (t) {
                  (this.options = t.setContext(this.getContext())),
                    (this.axis = t.axis),
                    (this._userMin = this.parse(t.min)),
                    (this._userMax = this.parse(t.max)),
                    (this._suggestedMin = this.parse(t.suggestedMin)),
                    (this._suggestedMax = this.parse(t.suggestedMax));
                },
              },
              {
                key: 'parse',
                value: function (t, e) {
                  return t;
                },
              },
              {
                key: 'getUserBounds',
                value: function () {
                  var t = this._userMin,
                    e = this._userMax,
                    n = this._suggestedMin,
                    r = this._suggestedMax;
                  return (
                    (t = tt(t, Number.POSITIVE_INFINITY)),
                    (e = tt(e, Number.NEGATIVE_INFINITY)),
                    (n = tt(n, Number.POSITIVE_INFINITY)),
                    (r = tt(r, Number.NEGATIVE_INFINITY)),
                    {
                      min: tt(t, n),
                      max: tt(e, r),
                      minDefined: J(t),
                      maxDefined: J(e),
                    }
                  );
                },
              },
              {
                key: 'getMinMax',
                value: function (t) {
                  var e,
                    n = this.getUserBounds(),
                    r = n.min,
                    i = n.max,
                    a = n.minDefined,
                    o = n.maxDefined;
                  if (a && o) return { min: r, max: i };
                  for (
                    var l = this.getMatchingVisibleMetas(), s = 0, u = l.length;
                    s < u;
                    ++s
                  )
                    (e = l[s].controller.getMinMax(this, t)),
                      a || (r = Math.min(r, e.min)),
                      o || (i = Math.max(i, e.max));
                  return {
                    min: tt(
                      (r = o && r > i ? i : r),
                      tt((i = a && r > i ? r : i), r)
                    ),
                    max: tt(i, tt(r, i)),
                  };
                },
              },
              {
                key: 'getPadding',
                value: function () {
                  return {
                    left: this.paddingLeft || 0,
                    top: this.paddingTop || 0,
                    right: this.paddingRight || 0,
                    bottom: this.paddingBottom || 0,
                  };
                },
              },
              {
                key: 'getTicks',
                value: function () {
                  return this.ticks;
                },
              },
              {
                key: 'getLabels',
                value: function () {
                  var t = this.chart.data;
                  return (
                    this.options.labels ||
                    (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                    t.labels ||
                    []
                  );
                },
              },
              {
                key: 'beforeLayout',
                value: function () {
                  (this._cache = {}), (this._dataLimitsCached = !1);
                },
              },
              {
                key: 'beforeUpdate',
                value: function () {
                  rt(this.options.beforeUpdate, [this]);
                },
              },
              {
                key: 'update',
                value: function (t, e, n) {
                  var r = this.options,
                    i = r.beginAtZero,
                    a = r.grace,
                    o = r.ticks,
                    l = o.sampleSize;
                  this.beforeUpdate(),
                    (this.maxWidth = t),
                    (this.maxHeight = e),
                    (this._margins = n =
                      Object.assign(
                        { left: 0, right: 0, top: 0, bottom: 0 },
                        n
                      )),
                    (this.ticks = null),
                    (this._labelSizes = null),
                    (this._gridLineItems = null),
                    (this._labelItems = null),
                    this.beforeSetDimensions(),
                    this.setDimensions(),
                    this.afterSetDimensions(),
                    (this._maxLength = this.isHorizontal()
                      ? this.width + n.left + n.right
                      : this.height + n.top + n.bottom),
                    this._dataLimitsCached ||
                      (this.beforeDataLimits(),
                      this.determineDataLimits(),
                      this.afterDataLimits(),
                      (this._range = (function (t, e, n) {
                        var r = t.min,
                          i = t.max,
                          a = nt(e, (i - r) / 2),
                          o = function (t, e) {
                            return n && 0 === t ? 0 : t + e;
                          };
                        return { min: o(r, -Math.abs(a)), max: o(i, a) };
                      })(this, a, i)),
                      (this._dataLimitsCached = !0)),
                    this.beforeBuildTicks(),
                    (this.ticks = this.buildTicks() || []),
                    this.afterBuildTicks();
                  var s = l < this.ticks.length;
                  this._convertTicksToLabels(
                    s ? ni(this.ticks, l) : this.ticks
                  ),
                    this.configure(),
                    this.beforeCalculateLabelRotation(),
                    this.calculateLabelRotation(),
                    this.afterCalculateLabelRotation(),
                    o.display &&
                      (o.autoSkip || 'auto' === o.source) &&
                      ((this.ticks = Jr(this, this.ticks)),
                      (this._labelSizes = null),
                      this.afterAutoSkip()),
                    s && this._convertTicksToLabels(this.ticks),
                    this.beforeFit(),
                    this.fit(),
                    this.afterFit(),
                    this.afterUpdate();
                },
              },
              {
                key: 'configure',
                value: function () {
                  var t,
                    e,
                    n = this.options.reverse;
                  this.isHorizontal()
                    ? ((t = this.left), (e = this.right))
                    : ((t = this.top), (e = this.bottom), (n = !n)),
                    (this._startPixel = t),
                    (this._endPixel = e),
                    (this._reversePixels = n),
                    (this._length = e - t),
                    (this._alignToPixels = this.options.alignToPixels);
                },
              },
              {
                key: 'afterUpdate',
                value: function () {
                  rt(this.options.afterUpdate, [this]);
                },
              },
              {
                key: 'beforeSetDimensions',
                value: function () {
                  rt(this.options.beforeSetDimensions, [this]);
                },
              },
              {
                key: 'setDimensions',
                value: function () {
                  this.isHorizontal()
                    ? ((this.width = this.maxWidth),
                      (this.left = 0),
                      (this.right = this.width))
                    : ((this.height = this.maxHeight),
                      (this.top = 0),
                      (this.bottom = this.height)),
                    (this.paddingLeft = 0),
                    (this.paddingTop = 0),
                    (this.paddingRight = 0),
                    (this.paddingBottom = 0);
                },
              },
              {
                key: 'afterSetDimensions',
                value: function () {
                  rt(this.options.afterSetDimensions, [this]);
                },
              },
              {
                key: '_callHooks',
                value: function (t) {
                  this.chart.notifyPlugins(t, this.getContext()),
                    rt(this.options[t], [this]);
                },
              },
              {
                key: 'beforeDataLimits',
                value: function () {
                  this._callHooks('beforeDataLimits');
                },
              },
              { key: 'determineDataLimits', value: function () {} },
              {
                key: 'afterDataLimits',
                value: function () {
                  this._callHooks('afterDataLimits');
                },
              },
              {
                key: 'beforeBuildTicks',
                value: function () {
                  this._callHooks('beforeBuildTicks');
                },
              },
              {
                key: 'buildTicks',
                value: function () {
                  return [];
                },
              },
              {
                key: 'afterBuildTicks',
                value: function () {
                  this._callHooks('afterBuildTicks');
                },
              },
              {
                key: 'beforeTickToLabelConversion',
                value: function () {
                  rt(this.options.beforeTickToLabelConversion, [this]);
                },
              },
              {
                key: 'generateTickLabels',
                value: function (t) {
                  var e,
                    n,
                    r,
                    i = this.options.ticks;
                  for (e = 0, n = t.length; e < n; e++)
                    (r = t[e]).label = rt(i.callback, [r.value, e, t], this);
                },
              },
              {
                key: 'afterTickToLabelConversion',
                value: function () {
                  rt(this.options.afterTickToLabelConversion, [this]);
                },
              },
              {
                key: 'beforeCalculateLabelRotation',
                value: function () {
                  rt(this.options.beforeCalculateLabelRotation, [this]);
                },
              },
              {
                key: 'calculateLabelRotation',
                value: function () {
                  var t,
                    e,
                    n,
                    r = this.options,
                    i = r.ticks,
                    a = this.ticks.length,
                    o = i.minRotation || 0,
                    l = i.maxRotation,
                    s = o;
                  if (
                    !this._isVisible() ||
                    !i.display ||
                    o >= l ||
                    a <= 1 ||
                    !this.isHorizontal()
                  )
                    this.labelRotation = o;
                  else {
                    var u = this._getLabelSizes(),
                      c = u.widest.width,
                      f = u.highest.height,
                      h = Vt(this.chart.width - c, 0, this.maxWidth);
                    c + 6 > (t = r.offset ? this.maxWidth / a : h / (a - 1)) &&
                      ((t = h / (a - (r.offset ? 0.5 : 1))),
                      (e =
                        this.maxHeight -
                        ii(r.grid) -
                        i.padding -
                        ai(r.title, this.chart.options.font)),
                      (n = Math.sqrt(c * c + f * f)),
                      (s = Lt(
                        Math.min(
                          Math.asin(Vt((u.highest.height + 6) / t, -1, 1)),
                          Math.asin(Vt(e / n, -1, 1)) -
                            Math.asin(Vt(f / n, -1, 1))
                        )
                      )),
                      (s = Math.max(o, Math.min(l, s)))),
                      (this.labelRotation = s);
                  }
                },
              },
              {
                key: 'afterCalculateLabelRotation',
                value: function () {
                  rt(this.options.afterCalculateLabelRotation, [this]);
                },
              },
              { key: 'afterAutoSkip', value: function () {} },
              {
                key: 'beforeFit',
                value: function () {
                  rt(this.options.beforeFit, [this]);
                },
              },
              {
                key: 'fit',
                value: function () {
                  var t = { width: 0, height: 0 },
                    e = this.chart,
                    n = this.options,
                    r = n.ticks,
                    i = n.title,
                    a = n.grid,
                    o = this._isVisible(),
                    l = this.isHorizontal();
                  if (o) {
                    var s = ai(i, e.options.font);
                    if (
                      (l
                        ? ((t.width = this.maxWidth), (t.height = ii(a) + s))
                        : ((t.height = this.maxHeight), (t.width = ii(a) + s)),
                      r.display && this.ticks.length)
                    ) {
                      var u = this._getLabelSizes(),
                        c = u.first,
                        f = u.last,
                        h = u.widest,
                        d = u.highest,
                        p = 2 * r.padding,
                        v = Dt(this.labelRotation),
                        g = Math.cos(v),
                        y = Math.sin(v);
                      if (l) {
                        var m = r.mirror ? 0 : y * h.width + g * d.height;
                        t.height = Math.min(this.maxHeight, t.height + m + p);
                      } else {
                        var b = r.mirror ? 0 : g * h.width + y * d.height;
                        t.width = Math.min(this.maxWidth, t.width + b + p);
                      }
                      this._calculatePadding(c, f, y, g);
                    }
                  }
                  this._handleMargins(),
                    l
                      ? ((this.width = this._length =
                          e.width - this._margins.left - this._margins.right),
                        (this.height = t.height))
                      : ((this.width = t.width),
                        (this.height = this._length =
                          e.height - this._margins.top - this._margins.bottom));
                },
              },
              {
                key: '_calculatePadding',
                value: function (t, e, n, r) {
                  var i = this.options,
                    a = i.ticks,
                    o = a.align,
                    l = a.padding,
                    s = i.position,
                    u = 0 !== this.labelRotation,
                    c = 'top' !== s && 'x' === this.axis;
                  if (this.isHorizontal()) {
                    var f = this.getPixelForTick(0) - this.left,
                      h =
                        this.right -
                        this.getPixelForTick(this.ticks.length - 1),
                      d = 0,
                      p = 0;
                    u
                      ? c
                        ? ((d = r * t.width), (p = n * e.height))
                        : ((d = n * t.height), (p = r * e.width))
                      : 'start' === o
                      ? (p = e.width)
                      : 'end' === o
                      ? (d = t.width)
                      : 'inner' !== o && ((d = t.width / 2), (p = e.width / 2)),
                      (this.paddingLeft = Math.max(
                        ((d - f + l) * this.width) / (this.width - f),
                        0
                      )),
                      (this.paddingRight = Math.max(
                        ((p - h + l) * this.width) / (this.width - h),
                        0
                      ));
                  } else {
                    var v = e.height / 2,
                      g = t.height / 2;
                    'start' === o
                      ? ((v = 0), (g = t.height))
                      : 'end' === o && ((v = e.height), (g = 0)),
                      (this.paddingTop = v + l),
                      (this.paddingBottom = g + l);
                  }
                },
              },
              {
                key: '_handleMargins',
                value: function () {
                  this._margins &&
                    ((this._margins.left = Math.max(
                      this.paddingLeft,
                      this._margins.left
                    )),
                    (this._margins.top = Math.max(
                      this.paddingTop,
                      this._margins.top
                    )),
                    (this._margins.right = Math.max(
                      this.paddingRight,
                      this._margins.right
                    )),
                    (this._margins.bottom = Math.max(
                      this.paddingBottom,
                      this._margins.bottom
                    )));
                },
              },
              {
                key: 'afterFit',
                value: function () {
                  rt(this.options.afterFit, [this]);
                },
              },
              {
                key: 'isHorizontal',
                value: function () {
                  var t = this.options,
                    e = t.axis,
                    n = t.position;
                  return 'top' === n || 'bottom' === n || 'x' === e;
                },
              },
              {
                key: 'isFullSize',
                value: function () {
                  return this.options.fullSize;
                },
              },
              {
                key: '_convertTicksToLabels',
                value: function (t) {
                  var e, n;
                  for (
                    this.beforeTickToLabelConversion(),
                      this.generateTickLabels(t),
                      e = 0,
                      n = t.length;
                    e < n;
                    e++
                  )
                    q(t[e].label) && (t.splice(e, 1), n--, e--);
                  this.afterTickToLabelConversion();
                },
              },
              {
                key: '_getLabelSizes',
                value: function () {
                  var t = this._labelSizes;
                  if (!t) {
                    var e = this.options.ticks.sampleSize,
                      n = this.ticks;
                    e < n.length && (n = ni(n, e)),
                      (this._labelSizes = t =
                        this._computeLabelSizes(n, n.length));
                  }
                  return t;
                },
              },
              {
                key: '_computeLabelSizes',
                value: function (t, e) {
                  var n,
                    r,
                    i,
                    a,
                    o,
                    l,
                    s,
                    u,
                    c,
                    f,
                    h,
                    d = this.ctx,
                    p = this._longestTextCache,
                    v = [],
                    g = [],
                    y = 0,
                    m = 0;
                  for (n = 0; n < e; ++n) {
                    if (
                      ((a = t[n].label),
                      (o = this._resolveTickFontOptions(n)),
                      (d.font = l = o.string),
                      (s = p[l] = p[l] || { data: {}, gc: [] }),
                      (u = o.lineHeight),
                      (c = f = 0),
                      q(a) || Z(a))
                    ) {
                      if (Z(a))
                        for (r = 0, i = a.length; r < i; ++r)
                          q((h = a[r])) ||
                            Z(h) ||
                            ((c = Xe(d, s.data, s.gc, c, h)), (f += u));
                    } else (c = Xe(d, s.data, s.gc, c, a)), (f = u);
                    v.push(c),
                      g.push(f),
                      (y = Math.max(c, y)),
                      (m = Math.max(f, m));
                  }
                  !(function (t, e) {
                    it(t, function (t) {
                      var n,
                        r = t.gc,
                        i = r.length / 2;
                      if (i > e) {
                        for (n = 0; n < i; ++n) delete t.data[r[n]];
                        r.splice(0, i);
                      }
                    });
                  })(p, e);
                  var b = v.indexOf(y),
                    x = g.indexOf(m),
                    k = function (t) {
                      return { width: v[t] || 0, height: g[t] || 0 };
                    };
                  return {
                    first: k(0),
                    last: k(e - 1),
                    widest: k(b),
                    highest: k(x),
                    widths: v,
                    heights: g,
                  };
                },
              },
              {
                key: 'getLabelForValue',
                value: function (t) {
                  return t;
                },
              },
              {
                key: 'getPixelForValue',
                value: function (t, e) {
                  return NaN;
                },
              },
              { key: 'getValueForPixel', value: function (t) {} },
              {
                key: 'getPixelForTick',
                value: function (t) {
                  var e = this.ticks;
                  return t < 0 || t > e.length - 1
                    ? null
                    : this.getPixelForValue(e[t].value);
                },
              },
              {
                key: 'getPixelForDecimal',
                value: function (t) {
                  this._reversePixels && (t = 1 - t);
                  var e = this._startPixel + t * this._length;
                  return Vt(
                    this._alignToPixels ? Qe(this.chart, e, 0) : e,
                    -32768,
                    32767
                  );
                },
              },
              {
                key: 'getDecimalForPixel',
                value: function (t) {
                  var e = (t - this._startPixel) / this._length;
                  return this._reversePixels ? 1 - e : e;
                },
              },
              {
                key: 'getBasePixel',
                value: function () {
                  return this.getPixelForValue(this.getBaseValue());
                },
              },
              {
                key: 'getBaseValue',
                value: function () {
                  var t = this.min,
                    e = this.max;
                  return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
                },
              },
              {
                key: 'getContext',
                value: function (t) {
                  var e = this.ticks || [];
                  if (t >= 0 && t < e.length) {
                    var n = e[t];
                    return (
                      n.$context ||
                      (n.$context = (function (t, e, n) {
                        return bn(t, { tick: n, index: e, type: 'tick' });
                      })(this.getContext(), t, n))
                    );
                  }
                  return (
                    this.$context ||
                    (this.$context = bn(this.chart.getContext(), {
                      scale: this,
                      type: 'scale',
                    }))
                  );
                },
              },
              {
                key: '_tickSize',
                value: function () {
                  var t = this.options.ticks,
                    e = Dt(this.labelRotation),
                    n = Math.abs(Math.cos(e)),
                    r = Math.abs(Math.sin(e)),
                    i = this._getLabelSizes(),
                    a = t.autoSkipPadding || 0,
                    o = i ? i.widest.width + a : 0,
                    l = i ? i.highest.height + a : 0;
                  return this.isHorizontal()
                    ? l * n > o * r
                      ? o / n
                      : l / r
                    : l * r < o * n
                    ? l / n
                    : o / r;
                },
              },
              {
                key: '_isVisible',
                value: function () {
                  var t = this.options.display;
                  return 'auto' !== t
                    ? !!t
                    : this.getMatchingVisibleMetas().length > 0;
                },
              },
              {
                key: '_computeGridLineItems',
                value: function (t) {
                  var e,
                    n,
                    r,
                    i,
                    a,
                    o,
                    l,
                    s,
                    u,
                    c,
                    f,
                    h,
                    d = this.axis,
                    p = this.chart,
                    v = this.options,
                    g = v.grid,
                    y = v.position,
                    m = g.offset,
                    b = this.isHorizontal(),
                    x = this.ticks.length + (m ? 1 : 0),
                    k = ii(g),
                    _ = [],
                    w = g.setContext(this.getContext()),
                    S = w.drawBorder ? w.borderWidth : 0,
                    M = S / 2,
                    E = function (t) {
                      return Qe(p, t, S);
                    };
                  if ('top' === y)
                    (e = E(this.bottom)),
                      (o = this.bottom - k),
                      (s = e - M),
                      (c = E(t.top) + M),
                      (h = t.bottom);
                  else if ('bottom' === y)
                    (e = E(this.top)),
                      (c = t.top),
                      (h = E(t.bottom) - M),
                      (o = e + M),
                      (s = this.top + k);
                  else if ('left' === y)
                    (e = E(this.right)),
                      (a = this.right - k),
                      (l = e - M),
                      (u = E(t.left) + M),
                      (f = t.right);
                  else if ('right' === y)
                    (e = E(this.left)),
                      (u = t.left),
                      (f = E(t.right) - M),
                      (a = e + M),
                      (l = this.left + k);
                  else if ('x' === d) {
                    if ('center' === y) e = E((t.top + t.bottom) / 2 + 0.5);
                    else if (K(y)) {
                      var P = Object.keys(y)[0],
                        C = y[P];
                      e = E(this.chart.scales[P].getPixelForValue(C));
                    }
                    (c = t.top), (h = t.bottom), (s = (o = e + M) + k);
                  } else if ('y' === d) {
                    if ('center' === y) e = E((t.left + t.right) / 2);
                    else if (K(y)) {
                      var O = Object.keys(y)[0],
                        A = y[O];
                      e = E(this.chart.scales[O].getPixelForValue(A));
                    }
                    (l = (a = e - M) - k), (u = t.left), (f = t.right);
                  }
                  var T = et(v.ticks.maxTicksLimit, x),
                    D = Math.max(1, Math.ceil(x / T));
                  for (n = 0; n < x; n += D) {
                    var L = g.setContext(this.getContext(n)),
                      R = L.lineWidth,
                      N = L.color,
                      I = L.borderDash || [],
                      z = L.borderDashOffset,
                      j = L.tickWidth,
                      F = L.tickColor,
                      V = L.tickBorderDash || [],
                      B = L.tickBorderDashOffset;
                    void 0 !== (r = ri(this, n, m)) &&
                      ((i = Qe(p, r, R)),
                      b ? (a = l = u = f = i) : (o = s = c = h = i),
                      _.push({
                        tx1: a,
                        ty1: o,
                        tx2: l,
                        ty2: s,
                        x1: u,
                        y1: c,
                        x2: f,
                        y2: h,
                        width: R,
                        color: N,
                        borderDash: I,
                        borderDashOffset: z,
                        tickWidth: j,
                        tickColor: F,
                        tickBorderDash: V,
                        tickBorderDashOffset: B,
                      }));
                  }
                  return (this._ticksLength = x), (this._borderValue = e), _;
                },
              },
              {
                key: '_computeLabelItems',
                value: function (t) {
                  var e,
                    n,
                    r,
                    i,
                    a,
                    o,
                    l,
                    s,
                    u,
                    c,
                    f,
                    h = this.axis,
                    d = this.options,
                    p = d.position,
                    v = d.ticks,
                    g = this.isHorizontal(),
                    y = this.ticks,
                    m = v.align,
                    b = v.crossAlign,
                    x = v.padding,
                    k = v.mirror,
                    _ = ii(d.grid),
                    w = _ + x,
                    S = k ? -x : w,
                    M = -Dt(this.labelRotation),
                    E = [],
                    P = 'middle';
                  if ('top' === p)
                    (a = this.bottom - S), (o = this._getXAxisLabelAlignment());
                  else if ('bottom' === p)
                    (a = this.top + S), (o = this._getXAxisLabelAlignment());
                  else if ('left' === p) {
                    var C = this._getYAxisLabelAlignment(_);
                    (o = C.textAlign), (i = C.x);
                  } else if ('right' === p) {
                    var O = this._getYAxisLabelAlignment(_);
                    (o = O.textAlign), (i = O.x);
                  } else if ('x' === h) {
                    if ('center' === p) a = (t.top + t.bottom) / 2 + w;
                    else if (K(p)) {
                      var A = Object.keys(p)[0],
                        T = p[A];
                      a = this.chart.scales[A].getPixelForValue(T) + w;
                    }
                    o = this._getXAxisLabelAlignment();
                  } else if ('y' === h) {
                    if ('center' === p) i = (t.left + t.right) / 2 - w;
                    else if (K(p)) {
                      var D = Object.keys(p)[0],
                        L = p[D];
                      i = this.chart.scales[D].getPixelForValue(L);
                    }
                    o = this._getYAxisLabelAlignment(_).textAlign;
                  }
                  'y' === h &&
                    ('start' === m
                      ? (P = 'top')
                      : 'end' === m && (P = 'bottom'));
                  var R = this._getLabelSizes();
                  for (e = 0, n = y.length; e < n; ++e) {
                    r = y[e].label;
                    var N = v.setContext(this.getContext(e));
                    (l = this.getPixelForTick(e) + v.labelOffset),
                      (u = (s = this._resolveTickFontOptions(e)).lineHeight);
                    var I = (c = Z(r) ? r.length : 1) / 2,
                      z = N.color,
                      j = N.textStrokeColor,
                      F = N.textStrokeWidth,
                      V = o;
                    g
                      ? ((i = l),
                        'inner' === o &&
                          (V =
                            e === n - 1
                              ? this.options.reverse
                                ? 'left'
                                : 'right'
                              : 0 === e
                              ? this.options.reverse
                                ? 'right'
                                : 'left'
                              : 'center'),
                        (f =
                          'top' === p
                            ? 'near' === b || 0 !== M
                              ? -c * u + u / 2
                              : 'center' === b
                              ? -R.highest.height / 2 - I * u + u
                              : -R.highest.height + u / 2
                            : 'near' === b || 0 !== M
                            ? u / 2
                            : 'center' === b
                            ? R.highest.height / 2 - I * u
                            : R.highest.height - c * u),
                        k && (f *= -1))
                      : ((a = l), (f = ((1 - c) * u) / 2));
                    var B = void 0;
                    if (N.showLabelBackdrop) {
                      var W = gn(N.backdropPadding),
                        H = R.heights[e],
                        U = R.widths[e],
                        Y = a + f - W.top,
                        $ = i - W.left;
                      switch (P) {
                        case 'middle':
                          Y -= H / 2;
                          break;
                        case 'bottom':
                          Y -= H;
                      }
                      switch (o) {
                        case 'center':
                          $ -= U / 2;
                          break;
                        case 'right':
                          $ -= U;
                      }
                      B = {
                        left: $,
                        top: Y,
                        width: U + W.width,
                        height: H + W.height,
                        color: N.backdropColor,
                      };
                    }
                    E.push({
                      rotation: M,
                      label: r,
                      font: s,
                      color: z,
                      strokeColor: j,
                      strokeWidth: F,
                      textOffset: f,
                      textAlign: V,
                      textBaseline: P,
                      translation: [i, a],
                      backdrop: B,
                    });
                  }
                  return E;
                },
              },
              {
                key: '_getXAxisLabelAlignment',
                value: function () {
                  var t = this.options,
                    e = t.position,
                    n = t.ticks;
                  if (-Dt(this.labelRotation))
                    return 'top' === e ? 'left' : 'right';
                  var r = 'center';
                  return (
                    'start' === n.align
                      ? (r = 'left')
                      : 'end' === n.align
                      ? (r = 'right')
                      : 'inner' === n.align && (r = 'inner'),
                    r
                  );
                },
              },
              {
                key: '_getYAxisLabelAlignment',
                value: function (t) {
                  var e,
                    n,
                    r = this.options,
                    i = r.position,
                    a = r.ticks,
                    o = a.crossAlign,
                    l = a.mirror,
                    s = a.padding,
                    u = t + s,
                    c = this._getLabelSizes().widest.width;
                  return (
                    'left' === i
                      ? l
                        ? ((n = this.right + s),
                          'near' === o
                            ? (e = 'left')
                            : 'center' === o
                            ? ((e = 'center'), (n += c / 2))
                            : ((e = 'right'), (n += c)))
                        : ((n = this.right - u),
                          'near' === o
                            ? (e = 'right')
                            : 'center' === o
                            ? ((e = 'center'), (n -= c / 2))
                            : ((e = 'left'), (n = this.left)))
                      : 'right' === i
                      ? l
                        ? ((n = this.left + s),
                          'near' === o
                            ? (e = 'right')
                            : 'center' === o
                            ? ((e = 'center'), (n -= c / 2))
                            : ((e = 'left'), (n -= c)))
                        : ((n = this.left + u),
                          'near' === o
                            ? (e = 'left')
                            : 'center' === o
                            ? ((e = 'center'), (n += c / 2))
                            : ((e = 'right'), (n = this.right)))
                      : (e = 'right'),
                    { textAlign: e, x: n }
                  );
                },
              },
              {
                key: '_computeLabelArea',
                value: function () {
                  if (!this.options.ticks.mirror) {
                    var t = this.chart,
                      e = this.options.position;
                    return 'left' === e || 'right' === e
                      ? {
                          top: 0,
                          left: this.left,
                          bottom: t.height,
                          right: this.right,
                        }
                      : 'top' === e || 'bottom' === e
                      ? {
                          top: this.top,
                          left: 0,
                          bottom: this.bottom,
                          right: t.width,
                        }
                      : void 0;
                  }
                },
              },
              {
                key: 'drawBackground',
                value: function () {
                  var t = this.ctx,
                    e = this.options.backgroundColor,
                    n = this.left,
                    r = this.top,
                    i = this.width,
                    a = this.height;
                  e &&
                    (t.save(),
                    (t.fillStyle = e),
                    t.fillRect(n, r, i, a),
                    t.restore());
                },
              },
              {
                key: 'getLineWidthForValue',
                value: function (t) {
                  var e = this.options.grid;
                  if (!this._isVisible() || !e.display) return 0;
                  var n = this.ticks.findIndex(function (e) {
                    return e.value === t;
                  });
                  return n >= 0
                    ? e.setContext(this.getContext(n)).lineWidth
                    : 0;
                },
              },
              {
                key: 'drawGrid',
                value: function (t) {
                  var e,
                    n,
                    r = this.options.grid,
                    i = this.ctx,
                    a =
                      this._gridLineItems ||
                      (this._gridLineItems = this._computeGridLineItems(t)),
                    o = function (t, e, n) {
                      n.width &&
                        n.color &&
                        (i.save(),
                        (i.lineWidth = n.width),
                        (i.strokeStyle = n.color),
                        i.setLineDash(n.borderDash || []),
                        (i.lineDashOffset = n.borderDashOffset),
                        i.beginPath(),
                        i.moveTo(t.x, t.y),
                        i.lineTo(e.x, e.y),
                        i.stroke(),
                        i.restore());
                    };
                  if (r.display)
                    for (e = 0, n = a.length; e < n; ++e) {
                      var l = a[e];
                      r.drawOnChartArea &&
                        o({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
                        r.drawTicks &&
                          o(
                            { x: l.tx1, y: l.ty1 },
                            { x: l.tx2, y: l.ty2 },
                            {
                              color: l.tickColor,
                              width: l.tickWidth,
                              borderDash: l.tickBorderDash,
                              borderDashOffset: l.tickBorderDashOffset,
                            }
                          );
                    }
                },
              },
              {
                key: 'drawBorder',
                value: function () {
                  var t = this.chart,
                    e = this.ctx,
                    n = this.options.grid,
                    r = n.setContext(this.getContext()),
                    i = n.drawBorder ? r.borderWidth : 0;
                  if (i) {
                    var a,
                      o,
                      l,
                      s,
                      u = n.setContext(this.getContext(0)).lineWidth,
                      c = this._borderValue;
                    this.isHorizontal()
                      ? ((a = Qe(t, this.left, i) - i / 2),
                        (o = Qe(t, this.right, u) + u / 2),
                        (l = s = c))
                      : ((l = Qe(t, this.top, i) - i / 2),
                        (s = Qe(t, this.bottom, u) + u / 2),
                        (a = o = c)),
                      e.save(),
                      (e.lineWidth = r.borderWidth),
                      (e.strokeStyle = r.borderColor),
                      e.beginPath(),
                      e.moveTo(a, l),
                      e.lineTo(o, s),
                      e.stroke(),
                      e.restore();
                  }
                },
              },
              {
                key: 'drawLabels',
                value: function (t) {
                  if (this.options.ticks.display) {
                    var e = this.ctx,
                      n = this._computeLabelArea();
                    n && tn(e, n);
                    var r,
                      i,
                      a =
                        this._labelItems ||
                        (this._labelItems = this._computeLabelItems(t));
                    for (r = 0, i = a.length; r < i; ++r) {
                      var o = a[r],
                        l = o.font,
                        s = o.label;
                      o.backdrop &&
                        ((e.fillStyle = o.backdrop.color),
                        e.fillRect(
                          o.backdrop.left,
                          o.backdrop.top,
                          o.backdrop.width,
                          o.backdrop.height
                        )),
                        an(e, s, 0, o.textOffset, l, o);
                    }
                    n && en(e);
                  }
                },
              },
              {
                key: 'drawTitle',
                value: function () {
                  var t = this.ctx,
                    e = this.options,
                    n = e.position,
                    r = e.title,
                    i = e.reverse;
                  if (r.display) {
                    var a = yn(r.font),
                      o = gn(r.padding),
                      l = r.align,
                      s = a.lineHeight / 2;
                    'bottom' === n || 'center' === n || K(n)
                      ? ((s += o.bottom),
                        Z(r.text) && (s += a.lineHeight * (r.text.length - 1)))
                      : (s += o.top);
                    var u = (function (t, e, n, r) {
                        var i,
                          a,
                          o,
                          l = t.top,
                          s = t.left,
                          u = t.bottom,
                          c = t.right,
                          f = t.chart,
                          h = f.chartArea,
                          d = f.scales,
                          p = 0,
                          v = u - l,
                          g = c - s;
                        if (t.isHorizontal()) {
                          if (((a = Zt(r, s, c)), K(n))) {
                            var y = Object.keys(n)[0],
                              m = n[y];
                            o = d[y].getPixelForValue(m) + v - e;
                          } else
                            o =
                              'center' === n
                                ? (h.bottom + h.top) / 2 + v - e
                                : ei(t, n, e);
                          i = c - s;
                        } else {
                          if (K(n)) {
                            var b = Object.keys(n)[0],
                              x = n[b];
                            a = d[b].getPixelForValue(x) - g + e;
                          } else
                            a =
                              'center' === n
                                ? (h.left + h.right) / 2 - g + e
                                : ei(t, n, e);
                          (o = Zt(r, u, l)), (p = 'left' === n ? -wt : wt);
                        }
                        return {
                          titleX: a,
                          titleY: o,
                          maxWidth: i,
                          rotation: p,
                        };
                      })(this, s, n, l),
                      c = u.titleX,
                      f = u.titleY,
                      h = u.maxWidth,
                      d = u.rotation;
                    an(t, r.text, 0, 0, a, {
                      color: r.color,
                      maxWidth: h,
                      rotation: d,
                      textAlign: oi(l, n, i),
                      textBaseline: 'middle',
                      translation: [c, f],
                    });
                  }
                },
              },
              {
                key: 'draw',
                value: function (t) {
                  this._isVisible() &&
                    (this.drawBackground(),
                    this.drawGrid(t),
                    this.drawBorder(),
                    this.drawTitle(),
                    this.drawLabels(t));
                },
              },
              {
                key: '_layers',
                value: function () {
                  var t = this,
                    e = this.options,
                    r = (e.ticks && e.ticks.z) || 0,
                    i = et(e.grid && e.grid.z, -1);
                  return this._isVisible() && this.draw === n.prototype.draw
                    ? [
                        {
                          z: i,
                          draw: function (e) {
                            t.drawBackground(), t.drawGrid(e), t.drawTitle();
                          },
                        },
                        {
                          z: i + 1,
                          draw: function () {
                            t.drawBorder();
                          },
                        },
                        {
                          z: r,
                          draw: function (e) {
                            t.drawLabels(e);
                          },
                        },
                      ]
                    : [
                        {
                          z: r,
                          draw: function (e) {
                            t.draw(e);
                          },
                        },
                      ];
                },
              },
              {
                key: 'getMatchingVisibleMetas',
                value: function (t) {
                  var e,
                    n,
                    r = this.chart.getSortedVisibleDatasetMetas(),
                    i = this.axis + 'AxisID',
                    a = [];
                  for (e = 0, n = r.length; e < n; ++e) {
                    var o = r[e];
                    o[i] !== this.id || (t && o.type !== t) || a.push(o);
                  }
                  return a;
                },
              },
              {
                key: '_resolveTickFontOptions',
                value: function (t) {
                  return yn(
                    this.options.ticks.setContext(this.getContext(t)).font
                  );
                },
              },
              {
                key: '_maxDigits',
                value: function () {
                  var t = this._resolveTickFontOptions(0).lineHeight;
                  return (this.isHorizontal() ? this.width : this.height) / t;
                },
              },
            ]),
            n
          );
        })(qr),
        si = (function () {
          function t(e, n, r) {
            Y(this, t),
              (this.type = e),
              (this.scope = n),
              (this.override = r),
              (this.items = Object.create(null));
          }
          return (
            X(t, [
              {
                key: 'isForType',
                value: function (t) {
                  return Object.prototype.isPrototypeOf.call(
                    this.type.prototype,
                    t.prototype
                  );
                },
              },
              {
                key: 'register',
                value: function (t) {
                  var e,
                    n = Object.getPrototypeOf(t);
                  (function (t) {
                    return 'id' in t && 'defaults' in t;
                  })(n) && (e = this.register(n));
                  var r = this.items,
                    i = t.id,
                    a = this.scope + '.' + i;
                  if (!i) throw new Error('class does not have id: ' + t);
                  return (
                    i in r ||
                      ((r[i] = t),
                      (function (t, e, n) {
                        var r = ut(Object.create(null), [
                          n ? $e.get(n) : {},
                          $e.get(e),
                          t.defaults,
                        ]);
                        $e.set(e, r),
                          t.defaultRoutes &&
                            (function (t, e) {
                              Object.keys(e).forEach(function (n) {
                                var r = n.split('.'),
                                  i = r.pop(),
                                  a = [t].concat(r).join('.'),
                                  o = e[n].split('.'),
                                  l = o.pop(),
                                  s = o.join('.');
                                $e.route(a, i, s, l);
                              });
                            })(e, t.defaultRoutes);
                        t.descriptors && $e.describe(e, t.descriptors);
                      })(t, a, e),
                      this.override && $e.override(t.id, t.overrides)),
                    a
                  );
                },
              },
              {
                key: 'get',
                value: function (t) {
                  return this.items[t];
                },
              },
              {
                key: 'unregister',
                value: function (t) {
                  var e = this.items,
                    n = t.id,
                    r = this.scope;
                  n in e && delete e[n],
                    r &&
                      n in $e[r] &&
                      (delete $e[r][n], this.override && delete Be[n]);
                },
              },
            ]),
            t
          );
        })();
      var ui = (function () {
          function t() {
            Y(this, t),
              (this.controllers = new si(Rr, 'datasets', !0)),
              (this.elements = new si(qr, 'elements')),
              (this.plugins = new si(Object, 'plugins')),
              (this.scales = new si(li, 'scales')),
              (this._typedRegistries = [
                this.controllers,
                this.scales,
                this.elements,
              ]);
          }
          return (
            X(t, [
              {
                key: 'add',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('register', e);
                },
              },
              {
                key: 'remove',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('unregister', e);
                },
              },
              {
                key: 'addControllers',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('register', e, this.controllers);
                },
              },
              {
                key: 'addElements',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('register', e, this.elements);
                },
              },
              {
                key: 'addPlugins',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('register', e, this.plugins);
                },
              },
              {
                key: 'addScales',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('register', e, this.scales);
                },
              },
              {
                key: 'getController',
                value: function (t) {
                  return this._get(t, this.controllers, 'controller');
                },
              },
              {
                key: 'getElement',
                value: function (t) {
                  return this._get(t, this.elements, 'element');
                },
              },
              {
                key: 'getPlugin',
                value: function (t) {
                  return this._get(t, this.plugins, 'plugin');
                },
              },
              {
                key: 'getScale',
                value: function (t) {
                  return this._get(t, this.scales, 'scale');
                },
              },
              {
                key: 'removeControllers',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('unregister', e, this.controllers);
                },
              },
              {
                key: 'removeElements',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('unregister', e, this.elements);
                },
              },
              {
                key: 'removePlugins',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('unregister', e, this.plugins);
                },
              },
              {
                key: 'removeScales',
                value: function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  this._each('unregister', e, this.scales);
                },
              },
              {
                key: '_each',
                value: function (t, e, n) {
                  var r = this;
                  U(e).forEach(function (e) {
                    var i = n || r._getRegistryForType(e);
                    n || i.isForType(e) || (i === r.plugins && e.id)
                      ? r._exec(t, i, e)
                      : it(e, function (e) {
                          var i = n || r._getRegistryForType(e);
                          r._exec(t, i, e);
                        });
                  });
                },
              },
              {
                key: '_exec',
                value: function (t, e, n) {
                  var r = pt(t);
                  rt(n['before' + r], [], n),
                    e[t](n),
                    rt(n['after' + r], [], n);
                },
              },
              {
                key: '_getRegistryForType',
                value: function (t) {
                  for (var e = 0; e < this._typedRegistries.length; e++) {
                    var n = this._typedRegistries[e];
                    if (n.isForType(t)) return n;
                  }
                  return this.plugins;
                },
              },
              {
                key: '_get',
                value: function (t, e, n) {
                  var r = e.get(t);
                  if (void 0 === r)
                    throw new Error(
                      '"' + t + '" is not a registered ' + n + '.'
                    );
                  return r;
                },
              },
            ]),
            t
          );
        })(),
        ci = new ui(),
        fi = (function (t) {
          V(n, t);
          var e = W(n);
          function n() {
            return Y(this, n), e.apply(this, arguments);
          }
          return (
            X(n, [
              {
                key: 'update',
                value: function (t) {
                  var e = this._cachedMeta,
                    n = e.data,
                    r = void 0 === n ? [] : n,
                    i = this.chart._animationsDisabled,
                    a = Kt(e, r, i),
                    o = a.start,
                    l = a.count;
                  if (
                    ((this._drawStart = o),
                    (this._drawCount = l),
                    Jt(e) && ((o = 0), (l = r.length)),
                    this.options.showLine)
                  ) {
                    var s = e.dataset,
                      u = e._dataset;
                    (s._chart = this.chart),
                      (s._datasetIndex = this.index),
                      (s._decimated = !!u._decimated),
                      (s.points = r);
                    var c = this.resolveDatasetElementOptions(t);
                    (c.segment = this.options.segment),
                      this.updateElement(
                        s,
                        void 0,
                        { animated: !i, options: c },
                        t
                      );
                  }
                  this.updateElements(r, o, l, t);
                },
              },
              {
                key: 'addElements',
                value: function () {
                  var t = this.options.showLine;
                  !this.datasetElementType &&
                    t &&
                    (this.datasetElementType = ci.getElement('line')),
                    j(I(n.prototype), 'addElements', this).call(this);
                },
              },
              {
                key: 'updateElements',
                value: function (t, e, n, r) {
                  for (
                    var i = 'reset' === r,
                      a = this._cachedMeta,
                      o = a.iScale,
                      l = a.vScale,
                      s = a._stacked,
                      u = a._dataset,
                      c = this.resolveDataElementOptions(e, r),
                      f = this.getSharedOptions(c),
                      h = this.includeOptions(r, f),
                      d = o.axis,
                      p = l.axis,
                      v = this.options,
                      g = v.spanGaps,
                      y = v.segment,
                      m = Ot(g) ? g : Number.POSITIVE_INFINITY,
                      b = this.chart._animationsDisabled || i || 'none' === r,
                      x = e > 0 && this.getParsed(e - 1),
                      k = e;
                    k < e + n;
                    ++k
                  ) {
                    var _ = t[k],
                      w = this.getParsed(k),
                      S = b ? _ : {},
                      M = q(w[p]),
                      E = (S[d] = o.getPixelForValue(w[d], k)),
                      P = (S[p] =
                        i || M
                          ? l.getBasePixel()
                          : l.getPixelForValue(
                              s ? this.applyStack(l, w, s) : w[p],
                              k
                            ));
                    (S.skip = isNaN(E) || isNaN(P) || M),
                      (S.stop = k > 0 && Math.abs(w[d] - x[d]) > m),
                      y && ((S.parsed = w), (S.raw = u.data[k])),
                      h &&
                        (S.options =
                          f ||
                          this.resolveDataElementOptions(
                            k,
                            _.active ? 'active' : r
                          )),
                      b || this.updateElement(_, k, S, r),
                      (x = w);
                  }
                  this.updateSharedOptions(f, r, c);
                },
              },
              {
                key: 'getMaxOverflow',
                value: function () {
                  var t = this._cachedMeta,
                    e = t.data || [];
                  if (!this.options.showLine) {
                    for (var n = 0, r = e.length - 1; r >= 0; --r)
                      n = Math.max(
                        n,
                        e[r].size(this.resolveDataElementOptions(r)) / 2
                      );
                    return n > 0 && n;
                  }
                  var i = t.dataset,
                    a = (i.options && i.options.borderWidth) || 0;
                  if (!e.length) return a;
                  var o = e[0].size(this.resolveDataElementOptions(0)),
                    l = e[e.length - 1].size(
                      this.resolveDataElementOptions(e.length - 1)
                    );
                  return Math.max(a, o, l) / 2;
                },
              },
            ]),
            n
          );
        })(Rr);
      (fi.id = 'scatter'),
        (fi.defaults = {
          datasetElementType: !1,
          dataElementType: 'point',
          showLine: !1,
          fill: !1,
        }),
        (fi.overrides = {
          interaction: { mode: 'point' },
          plugins: {
            tooltip: {
              callbacks: {
                title: function () {
                  return '';
                },
                label: function (t) {
                  return '(' + t.label + ', ' + t.formattedValue + ')';
                },
              },
            },
          },
          scales: { x: { type: 'linear' }, y: { type: 'linear' } },
        });
      function hi() {
        throw new Error(
          'This method is not implemented: Check that a complete date adapter is provided.'
        );
      }
      var di = (function () {
        function t(e) {
          Y(this, t), (this.options = e || {});
        }
        return (
          X(t, [
            { key: 'init', value: function (t) {} },
            {
              key: 'formats',
              value: function () {
                return hi();
              },
            },
            {
              key: 'parse',
              value: function (t, e) {
                return hi();
              },
            },
            {
              key: 'format',
              value: function (t, e) {
                return hi();
              },
            },
            {
              key: 'add',
              value: function (t, e, n) {
                return hi();
              },
            },
            {
              key: 'diff',
              value: function (t, e, n) {
                return hi();
              },
            },
            {
              key: 'startOf',
              value: function (t, e, n) {
                return hi();
              },
            },
            {
              key: 'endOf',
              value: function (t, e) {
                return hi();
              },
            },
          ]),
          t
        );
      })();
      di.override = function (t) {
        Object.assign(di.prototype, t);
      };
      var pi = { _date: di };
      function vi(t, e, n, r) {
        var i = t.controller,
          a = t.data,
          o = t._sorted,
          l = i._cachedMeta.iScale;
        if (l && e === l.axis && 'r' !== e && o && a.length) {
          var s = l._reversePixels ? Ut : Ht;
          if (!r) return s(a, e, n);
          if (i._sharedOptions) {
            var u = a[0],
              c = 'function' === typeof u.getRange && u.getRange(e);
            if (c) {
              var f = s(a, e, n - c),
                h = s(a, e, n + c);
              return { lo: f.lo, hi: h.hi };
            }
          }
        }
        return { lo: 0, hi: a.length - 1 };
      }
      function gi(t, e, n, r, i) {
        for (
          var a = t.getSortedVisibleDatasetMetas(),
            o = n[e],
            l = 0,
            s = a.length;
          l < s;
          ++l
        )
          for (
            var u = a[l],
              c = u.index,
              f = u.data,
              h = vi(a[l], e, o, i),
              d = h.lo,
              p = h.hi,
              v = d;
            v <= p;
            ++v
          ) {
            var g = f[v];
            g.skip || r(g, c, v);
          }
      }
      function yi(t, e, n, r, i) {
        var a = [];
        if (!i && !t.isPointInArea(e)) return a;
        return (
          gi(
            t,
            n,
            e,
            function (n, o, l) {
              (i || Je(n, t.chartArea, 0)) &&
                n.inRange(e.x, e.y, r) &&
                a.push({ element: n, datasetIndex: o, index: l });
            },
            !0
          ),
          a
        );
      }
      function mi(t, e, n, r, i, a) {
        var o = [],
          l = (function (t) {
            var e = -1 !== t.indexOf('x'),
              n = -1 !== t.indexOf('y');
            return function (t, r) {
              var i = e ? Math.abs(t.x - r.x) : 0,
                a = n ? Math.abs(t.y - r.y) : 0;
              return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
            };
          })(n),
          s = Number.POSITIVE_INFINITY;
        return (
          gi(t, n, e, function (n, u, c) {
            var f = n.inRange(e.x, e.y, i);
            if (!r || f) {
              var h = n.getCenterPoint(i);
              if (!!a || t.isPointInArea(h) || f) {
                var d = l(e, h);
                d < s
                  ? ((o = [{ element: n, datasetIndex: u, index: c }]), (s = d))
                  : d === s &&
                    o.push({ element: n, datasetIndex: u, index: c });
              }
            }
          }),
          o
        );
      }
      function bi(t, e, n, r, i, a) {
        return a || t.isPointInArea(e)
          ? 'r' !== n || r
            ? mi(t, e, n, r, i, a)
            : (function (t, e, n, r) {
                var i = [];
                return (
                  gi(t, n, e, function (t, n, a) {
                    var o = t.getProps(['startAngle', 'endAngle'], r),
                      l = o.startAngle,
                      s = o.endAngle;
                    Ft(Nt(t, { x: e.x, y: e.y }).angle, l, s) &&
                      i.push({ element: t, datasetIndex: n, index: a });
                  }),
                  i
                );
              })(t, e, n, i)
          : [];
      }
      function xi(t, e, n, r, i) {
        var a = [],
          o = 'x' === n ? 'inXRange' : 'inYRange',
          l = !1;
        return (
          gi(t, n, e, function (t, r, s) {
            t[o](e[n], i) &&
              (a.push({ element: t, datasetIndex: r, index: s }),
              (l = l || t.inRange(e.x, e.y, i)));
          }),
          r && !l ? [] : a
        );
      }
      var ki = {
          evaluateInteractionItems: gi,
          modes: {
            index: function (t, e, n, r) {
              var i = Qn(e, t),
                a = n.axis || 'x',
                o = n.includeInvisible || !1,
                l = n.intersect ? yi(t, i, a, r, o) : bi(t, i, a, !1, r, o),
                s = [];
              return l.length
                ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
                    var e = l[0].index,
                      n = t.data[e];
                    n &&
                      !n.skip &&
                      s.push({ element: n, datasetIndex: t.index, index: e });
                  }),
                  s)
                : [];
            },
            dataset: function (t, e, n, r) {
              var i = Qn(e, t),
                a = n.axis || 'xy',
                o = n.includeInvisible || !1,
                l = n.intersect ? yi(t, i, a, r, o) : bi(t, i, a, !1, r, o);
              if (l.length > 0) {
                var s = l[0].datasetIndex,
                  u = t.getDatasetMeta(s).data;
                l = [];
                for (var c = 0; c < u.length; ++c)
                  l.push({ element: u[c], datasetIndex: s, index: c });
              }
              return l;
            },
            point: function (t, e, n, r) {
              return yi(
                t,
                Qn(e, t),
                n.axis || 'xy',
                r,
                n.includeInvisible || !1
              );
            },
            nearest: function (t, e, n, r) {
              var i = Qn(e, t),
                a = n.axis || 'xy',
                o = n.includeInvisible || !1;
              return bi(t, i, a, n.intersect, r, o);
            },
            x: function (t, e, n, r) {
              return xi(t, Qn(e, t), 'x', n.intersect, r);
            },
            y: function (t, e, n, r) {
              return xi(t, Qn(e, t), 'y', n.intersect, r);
            },
          },
        },
        _i = ['left', 'top', 'right', 'bottom'];
      function wi(t, e) {
        return t.filter(function (t) {
          return t.pos === e;
        });
      }
      function Si(t, e) {
        return t.filter(function (t) {
          return -1 === _i.indexOf(t.pos) && t.box.axis === e;
        });
      }
      function Mi(t, e) {
        return t.sort(function (t, n) {
          var r = e ? n : t,
            i = e ? t : n;
          return r.weight === i.weight
            ? r.index - i.index
            : r.weight - i.weight;
        });
      }
      function Ei(t, e) {
        var n,
          r,
          i,
          a = (function (t) {
            var e,
              n = {},
              r = H(t);
            try {
              for (r.s(); !(e = r.n()).done; ) {
                var i = e.value,
                  a = i.stack,
                  o = i.pos,
                  l = i.stackWeight;
                if (a && _i.includes(o)) {
                  var s =
                    n[a] ||
                    (n[a] = { count: 0, placed: 0, weight: 0, size: 0 });
                  s.count++, (s.weight += l);
                }
              }
            } catch (u) {
              r.e(u);
            } finally {
              r.f();
            }
            return n;
          })(t),
          o = e.vBoxMaxWidth,
          l = e.hBoxMaxHeight;
        for (n = 0, r = t.length; n < r; ++n) {
          var s = (i = t[n]).box.fullSize,
            u = a[i.stack],
            c = u && i.stackWeight / u.weight;
          i.horizontal
            ? ((i.width = c ? c * o : s && e.availableWidth), (i.height = l))
            : ((i.width = o), (i.height = c ? c * l : s && e.availableHeight));
        }
        return a;
      }
      function Pi(t, e, n, r) {
        return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
      }
      function Ci(t, e) {
        (t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right));
      }
      function Oi(t, e, n, r) {
        var i = n.pos,
          a = n.box,
          o = t.maxPadding;
        if (!K(i)) {
          n.size && (t[i] -= n.size);
          var l = r[n.stack] || { size: 0, count: 1 };
          (l.size = Math.max(l.size, n.horizontal ? a.height : a.width)),
            (n.size = l.size / l.count),
            (t[i] += n.size);
        }
        a.getPadding && Ci(o, a.getPadding());
        var s = Math.max(0, e.outerWidth - Pi(o, t, 'left', 'right')),
          u = Math.max(0, e.outerHeight - Pi(o, t, 'top', 'bottom')),
          c = s !== t.w,
          f = u !== t.h;
        return (
          (t.w = s),
          (t.h = u),
          n.horizontal ? { same: c, other: f } : { same: f, other: c }
        );
      }
      function Ai(t, e) {
        var n = e.maxPadding;
        function r(t) {
          var r = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach(function (t) {
              r[t] = Math.max(e[t], n[t]);
            }),
            r
          );
        }
        return r(t ? ['left', 'right'] : ['top', 'bottom']);
      }
      function Ti(t, e, n, r) {
        var i,
          a,
          o,
          l,
          s,
          u,
          c = [];
        for (i = 0, a = t.length, s = 0; i < a; ++i) {
          (l = (o = t[i]).box).update(
            o.width || e.w,
            o.height || e.h,
            Ai(o.horizontal, e)
          );
          var f = Oi(e, n, o, r),
            h = f.same,
            d = f.other;
          (s |= h && c.length), (u = u || d), l.fullSize || c.push(o);
        }
        return (s && Ti(c, e, n, r)) || u;
      }
      function Di(t, e, n, r, i) {
        (t.top = n),
          (t.left = e),
          (t.right = e + r),
          (t.bottom = n + i),
          (t.width = r),
          (t.height = i);
      }
      function Li(t, e, n, r) {
        var i,
          a = n.padding,
          o = e.x,
          l = e.y,
          s = H(t);
        try {
          for (s.s(); !(i = s.n()).done; ) {
            var u = i.value,
              c = u.box,
              f = r[u.stack] || { count: 1, placed: 0, weight: 1 },
              h = u.stackWeight / f.weight || 1;
            if (u.horizontal) {
              var d = e.w * h,
                p = f.size || c.height;
              vt(f.start) && (l = f.start),
                c.fullSize
                  ? Di(c, a.left, l, n.outerWidth - a.right - a.left, p)
                  : Di(c, e.left + f.placed, l, d, p),
                (f.start = l),
                (f.placed += d),
                (l = c.bottom);
            } else {
              var v = e.h * h,
                g = f.size || c.width;
              vt(f.start) && (o = f.start),
                c.fullSize
                  ? Di(c, o, a.top, g, n.outerHeight - a.bottom - a.top)
                  : Di(c, o, e.top + f.placed, g, v),
                (f.start = o),
                (f.placed += v),
                (o = c.right);
            }
          }
        } catch (y) {
          s.e(y);
        } finally {
          s.f();
        }
        (e.x = o), (e.y = l);
      }
      $e.set('layout', {
        autoPadding: !0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      var Ri = function (t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || 'top'),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw: function (t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e);
        },
        Ni = function (t, e) {
          var n = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== n && t.boxes.splice(n, 1);
        },
        Ii = function (t, e, n) {
          (e.fullSize = n.fullSize),
            (e.position = n.position),
            (e.weight = n.weight);
        },
        zi = function (t, e, n, r) {
          if (t) {
            var i = gn(t.options.layout.padding),
              a = Math.max(e - i.width, 0),
              o = Math.max(n - i.height, 0),
              l = (function (t) {
                var e = (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      a,
                      o,
                      l = [];
                    for (e = 0, n = (t || []).length; e < n; ++e) {
                      var s = (r = t[e]);
                      i = s.position;
                      var u = s.options;
                      a = u.stack;
                      var c = u.stackWeight;
                      (o = void 0 === c ? 1 : c),
                        l.push({
                          index: e,
                          box: r,
                          pos: i,
                          horizontal: r.isHorizontal(),
                          weight: r.weight,
                          stack: a && i + a,
                          stackWeight: o,
                        });
                    }
                    return l;
                  })(t),
                  n = Mi(
                    e.filter(function (t) {
                      return t.box.fullSize;
                    }),
                    !0
                  ),
                  r = Mi(wi(e, 'left'), !0),
                  i = Mi(wi(e, 'right')),
                  a = Mi(wi(e, 'top'), !0),
                  o = Mi(wi(e, 'bottom')),
                  l = Si(e, 'x'),
                  s = Si(e, 'y');
                return {
                  fullSize: n,
                  leftAndTop: r.concat(a),
                  rightAndBottom: i.concat(s).concat(o).concat(l),
                  chartArea: wi(e, 'chartArea'),
                  vertical: r.concat(i).concat(s),
                  horizontal: a.concat(o).concat(l),
                };
              })(t.boxes),
              s = l.vertical,
              u = l.horizontal;
            it(t.boxes, function (t) {
              'function' === typeof t.beforeLayout && t.beforeLayout();
            });
            var c =
                s.reduce(function (t, e) {
                  return e.box.options && !1 === e.box.options.display
                    ? t
                    : t + 1;
                }, 0) || 1,
              f = Object.freeze({
                outerWidth: e,
                outerHeight: n,
                padding: i,
                availableWidth: a,
                availableHeight: o,
                vBoxMaxWidth: a / 2 / c,
                hBoxMaxHeight: o / 2,
              }),
              h = Object.assign({}, i);
            Ci(h, gn(r));
            var d = Object.assign(
                { maxPadding: h, w: a, h: o, x: i.left, y: i.top },
                i
              ),
              p = Ei(s.concat(u), f);
            Ti(l.fullSize, d, f, p),
              Ti(s, d, f, p),
              Ti(u, d, f, p) && Ti(s, d, f, p),
              (function (t) {
                var e = t.maxPadding;
                function n(n) {
                  var r = Math.max(e[n] - t[n], 0);
                  return (t[n] += r), r;
                }
                (t.y += n('top')), (t.x += n('left')), n('right'), n('bottom');
              })(d),
              Li(l.leftAndTop, d, f, p),
              (d.x += d.w),
              (d.y += d.h),
              Li(l.rightAndBottom, d, f, p),
              (t.chartArea = {
                left: d.left,
                top: d.top,
                right: d.left + d.w,
                bottom: d.top + d.h,
                height: d.h,
                width: d.w,
              }),
              it(l.chartArea, function (e) {
                var n = e.box;
                Object.assign(n, t.chartArea),
                  n.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
              });
          }
        },
        ji = (function () {
          function t() {
            Y(this, t);
          }
          return (
            X(t, [
              { key: 'acquireContext', value: function (t, e) {} },
              {
                key: 'releaseContext',
                value: function (t) {
                  return !1;
                },
              },
              { key: 'addEventListener', value: function (t, e, n) {} },
              { key: 'removeEventListener', value: function (t, e, n) {} },
              {
                key: 'getDevicePixelRatio',
                value: function () {
                  return 1;
                },
              },
              {
                key: 'getMaximumSize',
                value: function (t, e, n, r) {
                  return (
                    (e = Math.max(0, e || t.width)),
                    (n = n || t.height),
                    { width: e, height: Math.max(0, r ? Math.floor(e / r) : n) }
                  );
                },
              },
              {
                key: 'isAttached',
                value: function (t) {
                  return !0;
                },
              },
              { key: 'updateConfig', value: function (t) {} },
            ]),
            t
          );
        })(),
        Fi = (function (t) {
          V(n, t);
          var e = W(n);
          function n() {
            return Y(this, n), e.apply(this, arguments);
          }
          return (
            X(n, [
              {
                key: 'acquireContext',
                value: function (t) {
                  return (t && t.getContext && t.getContext('2d')) || null;
                },
              },
              {
                key: 'updateConfig',
                value: function (t) {
                  t.options.animation = !1;
                },
              },
            ]),
            n
          );
        })(ji),
        Vi = {
          touchstart: 'mousedown',
          touchmove: 'mousemove',
          touchend: 'mouseup',
          pointerenter: 'mouseenter',
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointerleave: 'mouseout',
          pointerout: 'mouseout',
        },
        Bi = function (t) {
          return null === t || '' === t;
        };
      var Wi = !!Jn && { passive: !0 };
      function Hi(t, e, n) {
        t.canvas.removeEventListener(e, n, Wi);
      }
      function Ui(t, e) {
        var n,
          r = H(t);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (i === e || i.contains(e)) return !0;
          }
        } catch (a) {
          r.e(a);
        } finally {
          r.f();
        }
      }
      function Yi(t, e, n) {
        var r = t.canvas,
          i = new MutationObserver(function (t) {
            var e,
              i = !1,
              a = H(t);
            try {
              for (a.s(); !(e = a.n()).done; ) {
                var o = e.value;
                i = (i = i || Ui(o.addedNodes, r)) && !Ui(o.removedNodes, r);
              }
            } catch (l) {
              a.e(l);
            } finally {
              a.f();
            }
            i && n();
          });
        return i.observe(document, { childList: !0, subtree: !0 }), i;
      }
      function $i(t, e, n) {
        var r = t.canvas,
          i = new MutationObserver(function (t) {
            var e,
              i = !1,
              a = H(t);
            try {
              for (a.s(); !(e = a.n()).done; ) {
                var o = e.value;
                i = (i = i || Ui(o.removedNodes, r)) && !Ui(o.addedNodes, r);
              }
            } catch (l) {
              a.e(l);
            } finally {
              a.f();
            }
            i && n();
          });
        return i.observe(document, { childList: !0, subtree: !0 }), i;
      }
      var Xi = new Map(),
        Gi = 0;
      function Qi() {
        var t = window.devicePixelRatio;
        t !== Gi &&
          ((Gi = t),
          Xi.forEach(function (e, n) {
            n.currentDevicePixelRatio !== t && e();
          }));
      }
      function qi(t, e, n) {
        var r = t.canvas,
          i = r && Un(r);
        if (i) {
          var a = Qt(function (t, e) {
              var r = i.clientWidth;
              n(t, e), r < i.clientWidth && n();
            }, window),
            o = new ResizeObserver(function (t) {
              var e = t[0],
                n = e.contentRect.width,
                r = e.contentRect.height;
              (0 === n && 0 === r) || a(n, r);
            });
          return (
            o.observe(i),
            (function (t, e) {
              Xi.size || window.addEventListener('resize', Qi), Xi.set(t, e);
            })(t, a),
            o
          );
        }
      }
      function Zi(t, e, n) {
        n && n.disconnect(),
          'resize' === e &&
            (function (t) {
              Xi.delete(t), Xi.size || window.removeEventListener('resize', Qi);
            })(t);
      }
      function Ki(t, e, n) {
        var r = t.canvas,
          i = Qt(
            function (e) {
              null !== t.ctx &&
                n(
                  (function (t, e) {
                    var n = Vi[t.type] || t.type,
                      r = Qn(t, e),
                      i = r.x,
                      a = r.y;
                    return {
                      type: n,
                      chart: e,
                      native: t,
                      x: void 0 !== i ? i : null,
                      y: void 0 !== a ? a : null,
                    };
                  })(e, t)
                );
            },
            t,
            function (t) {
              var e = t[0];
              return [e, e.offsetX, e.offsetY];
            }
          );
        return (
          (function (t, e, n) {
            t.addEventListener(e, n, Wi);
          })(r, e, i),
          i
        );
      }
      var Ji = (function (t) {
        V(n, t);
        var e = W(n);
        function n() {
          return Y(this, n), e.apply(this, arguments);
        }
        return (
          X(n, [
            {
              key: 'acquireContext',
              value: function (t, e) {
                var n = t && t.getContext && t.getContext('2d');
                return n && n.canvas === t
                  ? ((function (t, e) {
                      var n = t.style,
                        r = t.getAttribute('height'),
                        i = t.getAttribute('width');
                      if (
                        ((t.$chartjs = {
                          initial: {
                            height: r,
                            width: i,
                            style: {
                              display: n.display,
                              height: n.height,
                              width: n.width,
                            },
                          },
                        }),
                        (n.display = n.display || 'block'),
                        (n.boxSizing = n.boxSizing || 'border-box'),
                        Bi(i))
                      ) {
                        var a = tr(t, 'width');
                        void 0 !== a && (t.width = a);
                      }
                      if (Bi(r))
                        if ('' === t.style.height)
                          t.height = t.width / (e || 2);
                        else {
                          var o = tr(t, 'height');
                          void 0 !== o && (t.height = o);
                        }
                    })(t, e),
                    n)
                  : null;
              },
            },
            {
              key: 'releaseContext',
              value: function (t) {
                var e = t.canvas;
                if (!e.$chartjs) return !1;
                var n = e.$chartjs.initial;
                ['height', 'width'].forEach(function (t) {
                  var r = n[t];
                  q(r) ? e.removeAttribute(t) : e.setAttribute(t, r);
                });
                var r = n.style || {};
                return (
                  Object.keys(r).forEach(function (t) {
                    e.style[t] = r[t];
                  }),
                  (e.width = e.width),
                  delete e.$chartjs,
                  !0
                );
              },
            },
            {
              key: 'addEventListener',
              value: function (t, e, n) {
                this.removeEventListener(t, e);
                var r = t.$proxies || (t.$proxies = {}),
                  i = { attach: Yi, detach: $i, resize: qi }[e] || Ki;
                r[e] = i(t, e, n);
              },
            },
            {
              key: 'removeEventListener',
              value: function (t, e) {
                var n = t.$proxies || (t.$proxies = {}),
                  r = n[e];
                r &&
                  (({ attach: Zi, detach: Zi, resize: Zi }[e] || Hi)(t, e, r),
                  (n[e] = void 0));
              },
            },
            {
              key: 'getDevicePixelRatio',
              value: function () {
                return window.devicePixelRatio;
              },
            },
            {
              key: 'getMaximumSize',
              value: function (t, e, n, r) {
                return Zn(t, e, n, r);
              },
            },
            {
              key: 'isAttached',
              value: function (t) {
                var e = Un(t);
                return !(!e || !e.isConnected);
              },
            },
          ]),
          n
        );
      })(ji);
      var ta = (function () {
        function t() {
          Y(this, t), (this._init = []);
        }
        return (
          X(t, [
            {
              key: 'notify',
              value: function (t, e, n, r) {
                'beforeInit' === e &&
                  ((this._init = this._createDescriptors(t, !0)),
                  this._notify(this._init, t, 'install'));
                var i = r
                    ? this._descriptors(t).filter(r)
                    : this._descriptors(t),
                  a = this._notify(i, t, e, n);
                return (
                  'afterDestroy' === e &&
                    (this._notify(i, t, 'stop'),
                    this._notify(this._init, t, 'uninstall')),
                  a
                );
              },
            },
            {
              key: '_notify',
              value: function (t, e, n, r) {
                r = r || {};
                var i,
                  a = H(t);
                try {
                  for (a.s(); !(i = a.n()).done; ) {
                    var o = i.value,
                      l = o.plugin;
                    if (!1 === rt(l[n], [e, r, o.options], l) && r.cancelable)
                      return !1;
                  }
                } catch (s) {
                  a.e(s);
                } finally {
                  a.f();
                }
                return !0;
              },
            },
            {
              key: 'invalidate',
              value: function () {
                q(this._cache) ||
                  ((this._oldCache = this._cache), (this._cache = void 0));
              },
            },
            {
              key: '_descriptors',
              value: function (t) {
                if (this._cache) return this._cache;
                var e = (this._cache = this._createDescriptors(t));
                return this._notifyStateChanges(t), e;
              },
            },
            {
              key: '_createDescriptors',
              value: function (t, e) {
                var n = t && t.config,
                  r = et(n.options && n.options.plugins, {}),
                  i = (function (t) {
                    for (
                      var e = {},
                        n = [],
                        r = Object.keys(ci.plugins.items),
                        i = 0;
                      i < r.length;
                      i++
                    )
                      n.push(ci.getPlugin(r[i]));
                    for (var a = t.plugins || [], o = 0; o < a.length; o++) {
                      var l = a[o];
                      -1 === n.indexOf(l) && (n.push(l), (e[l.id] = !0));
                    }
                    return { plugins: n, localIds: e };
                  })(n);
                return !1 !== r || e
                  ? (function (t, e, n, r) {
                      var i,
                        a = e.plugins,
                        o = e.localIds,
                        l = [],
                        s = t.getContext(),
                        u = H(a);
                      try {
                        for (u.s(); !(i = u.n()).done; ) {
                          var c = i.value,
                            f = c.id,
                            h = ea(n[f], r);
                          null !== h &&
                            l.push({
                              plugin: c,
                              options: na(
                                t.config,
                                { plugin: c, local: o[f] },
                                h,
                                s
                              ),
                            });
                        }
                      } catch (d) {
                        u.e(d);
                      } finally {
                        u.f();
                      }
                      return l;
                    })(t, i, r, e)
                  : [];
              },
            },
            {
              key: '_notifyStateChanges',
              value: function (t) {
                var e = this._oldCache || [],
                  n = this._cache,
                  r = function (t, e) {
                    return t.filter(function (t) {
                      return !e.some(function (e) {
                        return t.plugin.id === e.plugin.id;
                      });
                    });
                  };
                this._notify(r(e, n), t, 'stop'),
                  this._notify(r(n, e), t, 'start');
              },
            },
          ]),
          t
        );
      })();
      function ea(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function na(t, e, n, r) {
        var i = e.plugin,
          a = e.local,
          o = t.pluginScopeKeys(i),
          l = t.getOptionScopes(n, o);
        return (
          a && i.defaults && l.push(i.defaults),
          t.createResolver(l, r, [''], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
          })
        );
      }
      function ra(t, e) {
        var n = $e.datasets[t] || {};
        return (
          ((e.datasets || {})[t] || {}).indexAxis ||
          e.indexAxis ||
          n.indexAxis ||
          'x'
        );
      }
      function ia(t, e) {
        return 'x' === t || 'y' === t
          ? t
          : e.axis ||
              ('top' === (n = e.position) || 'bottom' === n
                ? 'x'
                : 'left' === n || 'right' === n
                ? 'y'
                : void 0) ||
              t.charAt(0).toLowerCase();
        var n;
      }
      function aa(t) {
        var e = t.options || (t.options = {});
        (e.plugins = et(e.plugins, {})),
          (e.scales = (function (t, e) {
            var n = Be[t.type] || { scales: {} },
              r = e.scales || {},
              i = ra(t.type, e),
              a = Object.create(null),
              o = Object.create(null);
            return (
              Object.keys(r).forEach(function (t) {
                var e = r[t];
                if (!K(e))
                  return console.error(
                    'Invalid scale configuration for scale: '.concat(t)
                  );
                if (e._proxy)
                  return console.warn(
                    'Ignoring resolver passed as options for scale: '.concat(t)
                  );
                var l = ia(t, e),
                  s = (function (t, e) {
                    return t === e ? '_index_' : '_value_';
                  })(l, i),
                  u = n.scales || {};
                (a[l] = a[l] || t),
                  (o[t] = ct(Object.create(null), [
                    { axis: l },
                    e,
                    u[l],
                    u[s],
                  ]));
              }),
              t.data.datasets.forEach(function (n) {
                var i = n.type || t.type,
                  l = n.indexAxis || ra(i, e),
                  s = (Be[i] || {}).scales || {};
                Object.keys(s).forEach(function (t) {
                  var e = (function (t, e) {
                      var n = t;
                      return (
                        '_index_' === t
                          ? (n = e)
                          : '_value_' === t && (n = 'x' === e ? 'y' : 'x'),
                        n
                      );
                    })(t, l),
                    i = n[e + 'AxisID'] || a[e] || e;
                  (o[i] = o[i] || Object.create(null)),
                    ct(o[i], [{ axis: e }, r[i], s[t]]);
                });
              }),
              Object.keys(o).forEach(function (t) {
                var e = o[t];
                ct(e, [$e.scales[e.type], $e.scale]);
              }),
              o
            );
          })(t, e));
      }
      function oa(t) {
        return (
          ((t = t || {}).datasets = t.datasets || []),
          (t.labels = t.labels || []),
          t
        );
      }
      var la = new Map(),
        sa = new Set();
      function ua(t, e) {
        var n = la.get(t);
        return n || ((n = e()), la.set(t, n), sa.add(n)), n;
      }
      var ca = function (t, e, n) {
          var r = dt(e, n);
          void 0 !== r && t.add(r);
        },
        fa = (function () {
          function t(e) {
            Y(this, t),
              (this._config = (function (t) {
                return ((t = t || {}).data = oa(t.data)), aa(t), t;
              })(e)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map());
          }
          return (
            X(t, [
              {
                key: 'platform',
                get: function () {
                  return this._config.platform;
                },
              },
              {
                key: 'type',
                get: function () {
                  return this._config.type;
                },
                set: function (t) {
                  this._config.type = t;
                },
              },
              {
                key: 'data',
                get: function () {
                  return this._config.data;
                },
                set: function (t) {
                  this._config.data = oa(t);
                },
              },
              {
                key: 'options',
                get: function () {
                  return this._config.options;
                },
                set: function (t) {
                  this._config.options = t;
                },
              },
              {
                key: 'plugins',
                get: function () {
                  return this._config.plugins;
                },
              },
              {
                key: 'update',
                value: function () {
                  var t = this._config;
                  this.clearCache(), aa(t);
                },
              },
              {
                key: 'clearCache',
                value: function () {
                  this._scopeCache.clear(), this._resolverCache.clear();
                },
              },
              {
                key: 'datasetScopeKeys',
                value: function (t) {
                  return ua(t, function () {
                    return [['datasets.'.concat(t), '']];
                  });
                },
              },
              {
                key: 'datasetAnimationScopeKeys',
                value: function (t, e) {
                  return ua(
                    ''.concat(t, '.transition.').concat(e),
                    function () {
                      return [
                        [
                          'datasets.'.concat(t, '.transitions.').concat(e),
                          'transitions.'.concat(e),
                        ],
                        ['datasets.'.concat(t), ''],
                      ];
                    }
                  );
                },
              },
              {
                key: 'datasetElementScopeKeys',
                value: function (t, e) {
                  return ua(''.concat(t, '-').concat(e), function () {
                    return [
                      [
                        'datasets.'.concat(t, '.elements.').concat(e),
                        'datasets.'.concat(t),
                        'elements.'.concat(e),
                        '',
                      ],
                    ];
                  });
                },
              },
              {
                key: 'pluginScopeKeys',
                value: function (t) {
                  var e = t.id,
                    n = this.type;
                  return ua(''.concat(n, '-plugin-').concat(e), function () {
                    return [
                      ['plugins.'.concat(e)].concat(
                        U(t.additionalOptionScopes || [])
                      ),
                    ];
                  });
                },
              },
              {
                key: '_cachedScopes',
                value: function (t, e) {
                  var n = this._scopeCache,
                    r = n.get(t);
                  return (r && !e) || ((r = new Map()), n.set(t, r)), r;
                },
              },
              {
                key: 'getOptionScopes',
                value: function (t, e, n) {
                  var r = this.options,
                    i = this.type,
                    a = this._cachedScopes(t, n),
                    o = a.get(e);
                  if (o) return o;
                  var l = new Set();
                  e.forEach(function (e) {
                    t &&
                      (l.add(t),
                      e.forEach(function (e) {
                        return ca(l, t, e);
                      })),
                      e.forEach(function (t) {
                        return ca(l, r, t);
                      }),
                      e.forEach(function (t) {
                        return ca(l, Be[i] || {}, t);
                      }),
                      e.forEach(function (t) {
                        return ca(l, $e, t);
                      }),
                      e.forEach(function (t) {
                        return ca(l, We, t);
                      });
                  });
                  var s = Array.from(l);
                  return (
                    0 === s.length && s.push(Object.create(null)),
                    sa.has(e) && a.set(e, s),
                    s
                  );
                },
              },
              {
                key: 'chartOptionScopes',
                value: function () {
                  var t = this.options,
                    e = this.type;
                  return [
                    t,
                    Be[e] || {},
                    $e.datasets[e] || {},
                    { type: e },
                    $e,
                    We,
                  ];
                },
              },
              {
                key: 'resolveNamedOptions',
                value: function (t, e, n) {
                  var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [''],
                    i = { $shared: !0 },
                    a = ha(this._resolverCache, t, r),
                    o = a.resolver,
                    l = a.subPrefixes,
                    s = o;
                  if (pa(o, e)) {
                    (i.$shared = !1), (n = gt(n) ? n() : n);
                    var u = this.createResolver(t, n, l);
                    s = kn(o, n, u);
                  }
                  var c,
                    f = H(e);
                  try {
                    for (f.s(); !(c = f.n()).done; ) {
                      var h = c.value;
                      i[h] = s[h];
                    }
                  } catch (d) {
                    f.e(d);
                  } finally {
                    f.f();
                  }
                  return i;
                },
              },
              {
                key: 'createResolver',
                value: function (t, e) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [''],
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = ha(this._resolverCache, t, n),
                    a = i.resolver;
                  return K(e) ? kn(a, e, void 0, r) : a;
                },
              },
            ]),
            t
          );
        })();
      function ha(t, e, n) {
        var r = t.get(e);
        r || ((r = new Map()), t.set(e, r));
        var i = n.join(),
          a = r.get(i);
        a ||
          ((a = {
            resolver: xn(e, n),
            subPrefixes: n.filter(function (t) {
              return !t.toLowerCase().includes('hover');
            }),
          }),
          r.set(i, a));
        return a;
      }
      var da = function (t) {
        return (
          K(t) &&
          Object.getOwnPropertyNames(t).reduce(function (e, n) {
            return e || gt(t[n]);
          }, !1)
        );
      };
      function pa(t, e) {
        var n,
          r = _n(t),
          i = r.isScriptable,
          a = r.isIndexable,
          o = H(e);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var l = n.value,
              s = i(l),
              u = a(l),
              c = (u || s) && t[l];
            if ((s && (gt(c) || da(c))) || (u && Z(c))) return !0;
          }
        } catch (f) {
          o.e(f);
        } finally {
          o.f();
        }
        return !1;
      }
      var va = ['top', 'bottom', 'left', 'right', 'chartArea'];
      function ga(t, e) {
        return (
          'top' === t || 'bottom' === t || (-1 === va.indexOf(t) && 'x' === e)
        );
      }
      function ya(t, e) {
        return function (n, r) {
          return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
        };
      }
      function ma(t) {
        var e = t.chart,
          n = e.options.animation;
        e.notifyPlugins('afterRender'), rt(n && n.onComplete, [t], e);
      }
      function ba(t) {
        var e = t.chart,
          n = e.options.animation;
        rt(n && n.onProgress, [t], e);
      }
      function xa(t) {
        return (
          Hn() && 'string' === typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      var ka = {},
        _a = function (t) {
          var e = xa(t);
          return Object.values(ka)
            .filter(function (t) {
              return t.canvas === e;
            })
            .pop();
        };
      function wa(t, e, n) {
        for (var r = 0, i = Object.keys(t); r < i.length; r++) {
          var a = i[r],
            o = +a;
          if (o >= e) {
            var l = t[a];
            delete t[a], (n > 0 || o > e) && (t[o + n] = l);
          }
        }
      }
      var Sa = (function () {
          function t(e, n) {
            var r = this;
            Y(this, t);
            var i = (this.config = new fa(n)),
              a = xa(e),
              o = _a(a);
            if (o)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  o.id +
                  "' must be destroyed before the canvas with ID '" +
                  o.canvas.id +
                  "' can be reused."
              );
            var l = i.createResolver(i.chartOptionScopes(), this.getContext());
            (this.platform = new (i.platform ||
              (function (t) {
                return !Hn() ||
                  ('undefined' !== typeof OffscreenCanvas &&
                    t instanceof OffscreenCanvas)
                  ? Fi
                  : Ji;
              })(a))()),
              this.platform.updateConfig(i);
            var s = this.platform.acquireContext(a, l.aspectRatio),
              u = s && s.canvas,
              c = u && u.height,
              f = u && u.width;
            (this.id = Q()),
              (this.ctx = s),
              (this.canvas = u),
              (this.width = f),
              (this.height = c),
              (this._options = l),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new ta()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (function (t, e) {
                var n;
                return function () {
                  for (
                    var r = arguments.length, i = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    e
                      ? (clearTimeout(n), (n = setTimeout(t, e, i)))
                      : t.apply(this, i),
                    e
                  );
                };
              })(function (t) {
                return r.update(t);
              }, l.resizeDelay || 0)),
              (this._dataChanges = []),
              (ka[this.id] = this),
              s && u
                ? (yr.listen(this, 'complete', ma),
                  yr.listen(this, 'progress', ba),
                  this._initialize(),
                  this.attached && this.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item"
                  );
          }
          return (
            X(t, [
              {
                key: 'aspectRatio',
                get: function () {
                  var t = this.options,
                    e = t.aspectRatio,
                    n = t.maintainAspectRatio,
                    r = this.width,
                    i = this.height,
                    a = this._aspectRatio;
                  return q(e) ? (n && a ? a : i ? r / i : null) : e;
                },
              },
              {
                key: 'data',
                get: function () {
                  return this.config.data;
                },
                set: function (t) {
                  this.config.data = t;
                },
              },
              {
                key: 'options',
                get: function () {
                  return this._options;
                },
                set: function (t) {
                  this.config.options = t;
                },
              },
              {
                key: '_initialize',
                value: function () {
                  return (
                    this.notifyPlugins('beforeInit'),
                    this.options.responsive
                      ? this.resize()
                      : Kn(this, this.options.devicePixelRatio),
                    this.bindEvents(),
                    this.notifyPlugins('afterInit'),
                    this
                  );
                },
              },
              {
                key: 'clear',
                value: function () {
                  return qe(this.canvas, this.ctx), this;
                },
              },
              {
                key: 'stop',
                value: function () {
                  return yr.stop(this), this;
                },
              },
              {
                key: 'resize',
                value: function (t, e) {
                  yr.running(this)
                    ? (this._resizeBeforeDraw = { width: t, height: e })
                    : this._resize(t, e);
                },
              },
              {
                key: '_resize',
                value: function (t, e) {
                  var n = this.options,
                    r = this.canvas,
                    i = n.maintainAspectRatio && this.aspectRatio,
                    a = this.platform.getMaximumSize(r, t, e, i),
                    o =
                      n.devicePixelRatio || this.platform.getDevicePixelRatio(),
                    l = this.width ? 'resize' : 'attach';
                  (this.width = a.width),
                    (this.height = a.height),
                    (this._aspectRatio = this.aspectRatio),
                    Kn(this, o, !0) &&
                      (this.notifyPlugins('resize', { size: a }),
                      rt(n.onResize, [this, a], this),
                      this.attached && this._doResize(l) && this.render());
                },
              },
              {
                key: 'ensureScalesHaveIDs',
                value: function () {
                  it(this.options.scales || {}, function (t, e) {
                    t.id = e;
                  });
                },
              },
              {
                key: 'buildOrUpdateScales',
                value: function () {
                  var t = this,
                    e = this.options,
                    n = e.scales,
                    r = this.scales,
                    i = Object.keys(r).reduce(function (t, e) {
                      return (t[e] = !1), t;
                    }, {}),
                    a = [];
                  n &&
                    (a = a.concat(
                      Object.keys(n).map(function (t) {
                        var e = n[t],
                          r = ia(t, e),
                          i = 'r' === r,
                          a = 'x' === r;
                        return {
                          options: e,
                          dposition: i ? 'chartArea' : a ? 'bottom' : 'left',
                          dtype: i ? 'radialLinear' : a ? 'category' : 'linear',
                        };
                      })
                    )),
                    it(a, function (n) {
                      var a = n.options,
                        o = a.id,
                        l = ia(o, a),
                        s = et(a.type, n.dtype);
                      (void 0 !== a.position &&
                        ga(a.position, l) === ga(n.dposition)) ||
                        (a.position = n.dposition),
                        (i[o] = !0);
                      var u = null;
                      o in r && r[o].type === s
                        ? (u = r[o])
                        : ((u = new (ci.getScale(s))({
                            id: o,
                            type: s,
                            ctx: t.ctx,
                            chart: t,
                          })),
                          (r[u.id] = u));
                      u.init(a, e);
                    }),
                    it(i, function (t, e) {
                      t || delete r[e];
                    }),
                    it(r, function (e) {
                      Ii(t, e, e.options), Ri(t, e);
                    });
                },
              },
              {
                key: '_updateMetasets',
                value: function () {
                  var t = this._metasets,
                    e = this.data.datasets.length,
                    n = t.length;
                  if (
                    (t.sort(function (t, e) {
                      return t.index - e.index;
                    }),
                    n > e)
                  ) {
                    for (var r = e; r < n; ++r) this._destroyDatasetMeta(r);
                    t.splice(e, n - e);
                  }
                  this._sortedMetasets = t.slice(0).sort(ya('order', 'index'));
                },
              },
              {
                key: '_removeUnreferencedMetasets',
                value: function () {
                  var t = this,
                    e = this._metasets,
                    n = this.data.datasets;
                  e.length > n.length && delete this._stacks,
                    e.forEach(function (e, r) {
                      0 ===
                        n.filter(function (t) {
                          return t === e._dataset;
                        }).length && t._destroyDatasetMeta(r);
                    });
                },
              },
              {
                key: 'buildOrUpdateControllers',
                value: function () {
                  var t,
                    e,
                    n = [],
                    r = this.data.datasets;
                  for (
                    this._removeUnreferencedMetasets(), t = 0, e = r.length;
                    t < e;
                    t++
                  ) {
                    var i = r[t],
                      a = this.getDatasetMeta(t),
                      o = i.type || this.config.type;
                    if (
                      (a.type &&
                        a.type !== o &&
                        (this._destroyDatasetMeta(t),
                        (a = this.getDatasetMeta(t))),
                      (a.type = o),
                      (a.indexAxis = i.indexAxis || ra(o, this.options)),
                      (a.order = i.order || 0),
                      (a.index = t),
                      (a.label = '' + i.label),
                      (a.visible = this.isDatasetVisible(t)),
                      a.controller)
                    )
                      a.controller.updateIndex(t), a.controller.linkScales();
                    else {
                      var l = ci.getController(o),
                        s = $e.datasets[o],
                        u = s.datasetElementType,
                        c = s.dataElementType;
                      Object.assign(l.prototype, {
                        dataElementType: ci.getElement(c),
                        datasetElementType: u && ci.getElement(u),
                      }),
                        (a.controller = new l(this, t)),
                        n.push(a.controller);
                    }
                  }
                  return this._updateMetasets(), n;
                },
              },
              {
                key: '_resetElements',
                value: function () {
                  var t = this;
                  it(
                    this.data.datasets,
                    function (e, n) {
                      t.getDatasetMeta(n).controller.reset();
                    },
                    this
                  );
                },
              },
              {
                key: 'reset',
                value: function () {
                  this._resetElements(), this.notifyPlugins('reset');
                },
              },
              {
                key: 'update',
                value: function (t) {
                  var e = this.config;
                  e.update();
                  var n = (this._options = e.createResolver(
                      e.chartOptionScopes(),
                      this.getContext()
                    )),
                    r = (this._animationsDisabled = !n.animation);
                  if (
                    (this._updateScales(),
                    this._checkEventBindings(),
                    this._updateHiddenIndices(),
                    this._plugins.invalidate(),
                    !1 !==
                      this.notifyPlugins('beforeUpdate', {
                        mode: t,
                        cancelable: !0,
                      }))
                  ) {
                    var i = this.buildOrUpdateControllers();
                    this.notifyPlugins('beforeElementsUpdate');
                    for (
                      var a = 0, o = 0, l = this.data.datasets.length;
                      o < l;
                      o++
                    ) {
                      var s = this.getDatasetMeta(o).controller,
                        u = !r && -1 === i.indexOf(s);
                      s.buildOrUpdateElements(u),
                        (a = Math.max(+s.getMaxOverflow(), a));
                    }
                    (a = this._minPadding = n.layout.autoPadding ? a : 0),
                      this._updateLayout(a),
                      r ||
                        it(i, function (t) {
                          t.reset();
                        }),
                      this._updateDatasets(t),
                      this.notifyPlugins('afterUpdate', { mode: t }),
                      this._layers.sort(ya('z', '_idx'));
                    var c = this._active,
                      f = this._lastEvent;
                    f
                      ? this._eventHandler(f, !0)
                      : c.length && this._updateHoverStyles(c, c, !0),
                      this.render();
                  }
                },
              },
              {
                key: '_updateScales',
                value: function () {
                  var t = this;
                  it(this.scales, function (e) {
                    Ni(t, e);
                  }),
                    this.ensureScalesHaveIDs(),
                    this.buildOrUpdateScales();
                },
              },
              {
                key: '_checkEventBindings',
                value: function () {
                  var t = this.options,
                    e = new Set(Object.keys(this._listeners)),
                    n = new Set(t.events);
                  (yt(e, n) && !!this._responsiveListeners === t.responsive) ||
                    (this.unbindEvents(), this.bindEvents());
                },
              },
              {
                key: '_updateHiddenIndices',
                value: function () {
                  var t,
                    e = this._hiddenIndices,
                    n = H(this._getUniformDataChanges() || []);
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      var r = t.value,
                        i = r.method,
                        a = r.start,
                        o = r.count;
                      wa(e, a, '_removeElements' === i ? -o : o);
                    }
                  } catch (l) {
                    n.e(l);
                  } finally {
                    n.f();
                  }
                },
              },
              {
                key: '_getUniformDataChanges',
                value: function () {
                  var t = this._dataChanges;
                  if (t && t.length) {
                    this._dataChanges = [];
                    for (
                      var e = this.data.datasets.length,
                        n = function (e) {
                          return new Set(
                            t
                              .filter(function (t) {
                                return t[0] === e;
                              })
                              .map(function (t, e) {
                                return e + ',' + t.splice(1).join(',');
                              })
                          );
                        },
                        r = n(0),
                        i = 1;
                      i < e;
                      i++
                    )
                      if (!yt(r, n(i))) return;
                    return Array.from(r)
                      .map(function (t) {
                        return t.split(',');
                      })
                      .map(function (t) {
                        return { method: t[1], start: +t[2], count: +t[3] };
                      });
                  }
                },
              },
              {
                key: '_updateLayout',
                value: function (t) {
                  var e = this;
                  if (
                    !1 !==
                    this.notifyPlugins('beforeLayout', { cancelable: !0 })
                  ) {
                    zi(this, this.width, this.height, t);
                    var n = this.chartArea,
                      r = n.width <= 0 || n.height <= 0;
                    (this._layers = []),
                      it(
                        this.boxes,
                        function (t) {
                          var n;
                          (r && 'chartArea' === t.position) ||
                            (t.configure && t.configure(),
                            (n = e._layers).push.apply(n, U(t._layers())));
                        },
                        this
                      ),
                      this._layers.forEach(function (t, e) {
                        t._idx = e;
                      }),
                      this.notifyPlugins('afterLayout');
                  }
                },
              },
              {
                key: '_updateDatasets',
                value: function (t) {
                  if (
                    !1 !==
                    this.notifyPlugins('beforeDatasetsUpdate', {
                      mode: t,
                      cancelable: !0,
                    })
                  ) {
                    for (var e = 0, n = this.data.datasets.length; e < n; ++e)
                      this.getDatasetMeta(e).controller.configure();
                    for (var r = 0, i = this.data.datasets.length; r < i; ++r)
                      this._updateDataset(
                        r,
                        gt(t) ? t({ datasetIndex: r }) : t
                      );
                    this.notifyPlugins('afterDatasetsUpdate', { mode: t });
                  }
                },
              },
              {
                key: '_updateDataset',
                value: function (t, e) {
                  var n = this.getDatasetMeta(t),
                    r = { meta: n, index: t, mode: e, cancelable: !0 };
                  !1 !== this.notifyPlugins('beforeDatasetUpdate', r) &&
                    (n.controller._update(e),
                    (r.cancelable = !1),
                    this.notifyPlugins('afterDatasetUpdate', r));
                },
              },
              {
                key: 'render',
                value: function () {
                  !1 !==
                    this.notifyPlugins('beforeRender', { cancelable: !0 }) &&
                    (yr.has(this)
                      ? this.attached && !yr.running(this) && yr.start(this)
                      : (this.draw(), ma({ chart: this })));
                },
              },
              {
                key: 'draw',
                value: function () {
                  var t;
                  if (this._resizeBeforeDraw) {
                    var e = this._resizeBeforeDraw,
                      n = e.width,
                      r = e.height;
                    this._resize(n, r), (this._resizeBeforeDraw = null);
                  }
                  if (
                    (this.clear(),
                    !(this.width <= 0 || this.height <= 0) &&
                      !1 !==
                        this.notifyPlugins('beforeDraw', { cancelable: !0 }))
                  ) {
                    var i = this._layers;
                    for (t = 0; t < i.length && i[t].z <= 0; ++t)
                      i[t].draw(this.chartArea);
                    for (this._drawDatasets(); t < i.length; ++t)
                      i[t].draw(this.chartArea);
                    this.notifyPlugins('afterDraw');
                  }
                },
              },
              {
                key: '_getSortedDatasetMetas',
                value: function (t) {
                  var e,
                    n,
                    r = this._sortedMetasets,
                    i = [];
                  for (e = 0, n = r.length; e < n; ++e) {
                    var a = r[e];
                    (t && !a.visible) || i.push(a);
                  }
                  return i;
                },
              },
              {
                key: 'getSortedVisibleDatasetMetas',
                value: function () {
                  return this._getSortedDatasetMetas(!0);
                },
              },
              {
                key: '_drawDatasets',
                value: function () {
                  if (
                    !1 !==
                    this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })
                  ) {
                    for (
                      var t = this.getSortedVisibleDatasetMetas(),
                        e = t.length - 1;
                      e >= 0;
                      --e
                    )
                      this._drawDataset(t[e]);
                    this.notifyPlugins('afterDatasetsDraw');
                  }
                },
              },
              {
                key: '_drawDataset',
                value: function (t) {
                  var e = this.ctx,
                    n = t._clip,
                    r = !n.disabled,
                    i = this.chartArea,
                    a = { meta: t, index: t.index, cancelable: !0 };
                  !1 !== this.notifyPlugins('beforeDatasetDraw', a) &&
                    (r &&
                      tn(e, {
                        left: !1 === n.left ? 0 : i.left - n.left,
                        right: !1 === n.right ? this.width : i.right + n.right,
                        top: !1 === n.top ? 0 : i.top - n.top,
                        bottom:
                          !1 === n.bottom ? this.height : i.bottom + n.bottom,
                      }),
                    t.controller.draw(),
                    r && en(e),
                    (a.cancelable = !1),
                    this.notifyPlugins('afterDatasetDraw', a));
                },
              },
              {
                key: 'isPointInArea',
                value: function (t) {
                  return Je(t, this.chartArea, this._minPadding);
                },
              },
              {
                key: 'getElementsAtEventForMode',
                value: function (t, e, n, r) {
                  var i = ki.modes[e];
                  return 'function' === typeof i ? i(this, t, n, r) : [];
                },
              },
              {
                key: 'getDatasetMeta',
                value: function (t) {
                  var e = this.data.datasets[t],
                    n = this._metasets,
                    r = n
                      .filter(function (t) {
                        return t && t._dataset === e;
                      })
                      .pop();
                  return (
                    r ||
                      ((r = {
                        type: null,
                        data: [],
                        dataset: null,
                        controller: null,
                        hidden: null,
                        xAxisID: null,
                        yAxisID: null,
                        order: (e && e.order) || 0,
                        index: t,
                        _dataset: e,
                        _parsed: [],
                        _sorted: !1,
                      }),
                      n.push(r)),
                    r
                  );
                },
              },
              {
                key: 'getContext',
                value: function () {
                  return (
                    this.$context ||
                    (this.$context = bn(null, { chart: this, type: 'chart' }))
                  );
                },
              },
              {
                key: 'getVisibleDatasetCount',
                value: function () {
                  return this.getSortedVisibleDatasetMetas().length;
                },
              },
              {
                key: 'isDatasetVisible',
                value: function (t) {
                  var e = this.data.datasets[t];
                  if (!e) return !1;
                  var n = this.getDatasetMeta(t);
                  return 'boolean' === typeof n.hidden ? !n.hidden : !e.hidden;
                },
              },
              {
                key: 'setDatasetVisibility',
                value: function (t, e) {
                  this.getDatasetMeta(t).hidden = !e;
                },
              },
              {
                key: 'toggleDataVisibility',
                value: function (t) {
                  this._hiddenIndices[t] = !this._hiddenIndices[t];
                },
              },
              {
                key: 'getDataVisibility',
                value: function (t) {
                  return !this._hiddenIndices[t];
                },
              },
              {
                key: '_updateVisibility',
                value: function (t, e, n) {
                  var r = n ? 'show' : 'hide',
                    i = this.getDatasetMeta(t),
                    a = i.controller._resolveAnimations(void 0, r);
                  vt(e)
                    ? ((i.data[e].hidden = !n), this.update())
                    : (this.setDatasetVisibility(t, n),
                      a.update(i, { visible: n }),
                      this.update(function (e) {
                        return e.datasetIndex === t ? r : void 0;
                      }));
                },
              },
              {
                key: 'hide',
                value: function (t, e) {
                  this._updateVisibility(t, e, !1);
                },
              },
              {
                key: 'show',
                value: function (t, e) {
                  this._updateVisibility(t, e, !0);
                },
              },
              {
                key: '_destroyDatasetMeta',
                value: function (t) {
                  var e = this._metasets[t];
                  e && e.controller && e.controller._destroy(),
                    delete this._metasets[t];
                },
              },
              {
                key: '_stop',
                value: function () {
                  var t, e;
                  for (
                    this.stop(),
                      yr.remove(this),
                      t = 0,
                      e = this.data.datasets.length;
                    t < e;
                    ++t
                  )
                    this._destroyDatasetMeta(t);
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.notifyPlugins('beforeDestroy');
                  var t = this.canvas,
                    e = this.ctx;
                  this._stop(),
                    this.config.clearCache(),
                    t &&
                      (this.unbindEvents(),
                      qe(t, e),
                      this.platform.releaseContext(e),
                      (this.canvas = null),
                      (this.ctx = null)),
                    this.notifyPlugins('destroy'),
                    delete ka[this.id],
                    this.notifyPlugins('afterDestroy');
                },
              },
              {
                key: 'toBase64Image',
                value: function () {
                  var t;
                  return (t = this.canvas).toDataURL.apply(t, arguments);
                },
              },
              {
                key: 'bindEvents',
                value: function () {
                  this.bindUserEvents(),
                    this.options.responsive
                      ? this.bindResponsiveEvents()
                      : (this.attached = !0);
                },
              },
              {
                key: 'bindUserEvents',
                value: function () {
                  var t = this,
                    e = this._listeners,
                    n = this.platform,
                    r = function (e, n, r) {
                      (e.offsetX = n), (e.offsetY = r), t._eventHandler(e);
                    };
                  it(this.options.events, function (i) {
                    return (function (r, i) {
                      n.addEventListener(t, r, i), (e[r] = i);
                    })(i, r);
                  });
                },
              },
              {
                key: 'bindResponsiveEvents',
                value: function () {
                  var t = this;
                  this._responsiveListeners || (this._responsiveListeners = {});
                  var e,
                    n = this._responsiveListeners,
                    r = this.platform,
                    i = function (e, i) {
                      r.addEventListener(t, e, i), (n[e] = i);
                    },
                    a = function (e, i) {
                      n[e] && (r.removeEventListener(t, e, i), delete n[e]);
                    },
                    o = function (e, n) {
                      t.canvas && t.resize(e, n);
                    },
                    l = function n() {
                      a('attach', n),
                        (t.attached = !0),
                        t.resize(),
                        i('resize', o),
                        i('detach', e);
                    };
                  (e = function () {
                    (t.attached = !1),
                      a('resize', o),
                      t._stop(),
                      t._resize(0, 0),
                      i('attach', l);
                  }),
                    r.isAttached(this.canvas) ? l() : e();
                },
              },
              {
                key: 'unbindEvents',
                value: function () {
                  var t = this;
                  it(this._listeners, function (e, n) {
                    t.platform.removeEventListener(t, n, e);
                  }),
                    (this._listeners = {}),
                    it(this._responsiveListeners, function (e, n) {
                      t.platform.removeEventListener(t, n, e);
                    }),
                    (this._responsiveListeners = void 0);
                },
              },
              {
                key: 'updateHoverStyle',
                value: function (t, e, n) {
                  var r,
                    i,
                    a,
                    o = n ? 'set' : 'remove';
                  for (
                    'dataset' === e &&
                      this.getDatasetMeta(t[0].datasetIndex).controller[
                        '_' + o + 'DatasetHoverStyle'
                      ](),
                      i = 0,
                      a = t.length;
                    i < a;
                    ++i
                  ) {
                    var l =
                      (r = t[i]) &&
                      this.getDatasetMeta(r.datasetIndex).controller;
                    l &&
                      l[o + 'HoverStyle'](r.element, r.datasetIndex, r.index);
                  }
                },
              },
              {
                key: 'getActiveElements',
                value: function () {
                  return this._active || [];
                },
              },
              {
                key: 'setActiveElements',
                value: function (t) {
                  var e = this,
                    n = this._active || [],
                    r = t.map(function (t) {
                      var n = t.datasetIndex,
                        r = t.index,
                        i = e.getDatasetMeta(n);
                      if (!i) throw new Error('No dataset found at index ' + n);
                      return { datasetIndex: n, element: i.data[r], index: r };
                    });
                  !at(r, n) &&
                    ((this._active = r),
                    (this._lastEvent = null),
                    this._updateHoverStyles(r, n));
                },
              },
              {
                key: 'notifyPlugins',
                value: function (t, e, n) {
                  return this._plugins.notify(this, t, e, n);
                },
              },
              {
                key: '_updateHoverStyles',
                value: function (t, e, n) {
                  var r = this.options.hover,
                    i = function (t, e) {
                      return t.filter(function (t) {
                        return !e.some(function (e) {
                          return (
                            t.datasetIndex === e.datasetIndex &&
                            t.index === e.index
                          );
                        });
                      });
                    },
                    a = i(e, t),
                    o = n ? t : i(t, e);
                  a.length && this.updateHoverStyle(a, r.mode, !1),
                    o.length && r.mode && this.updateHoverStyle(o, r.mode, !0);
                },
              },
              {
                key: '_eventHandler',
                value: function (t, e) {
                  var n = this,
                    r = {
                      event: t,
                      replay: e,
                      cancelable: !0,
                      inChartArea: this.isPointInArea(t),
                    },
                    i = function (e) {
                      return (e.options.events || n.options.events).includes(
                        t.native.type
                      );
                    };
                  if (!1 !== this.notifyPlugins('beforeEvent', r, i)) {
                    var a = this._handleEvent(t, e, r.inChartArea);
                    return (
                      (r.cancelable = !1),
                      this.notifyPlugins('afterEvent', r, i),
                      (a || r.changed) && this.render(),
                      this
                    );
                  }
                },
              },
              {
                key: '_handleEvent',
                value: function (t, e, n) {
                  var r = this._active,
                    i = void 0 === r ? [] : r,
                    a = this.options,
                    o = e,
                    l = this._getActiveElements(t, i, n, o),
                    s = (function (t) {
                      return (
                        'mouseup' === t.type ||
                        'click' === t.type ||
                        'contextmenu' === t.type
                      );
                    })(t),
                    u = (function (t, e, n, r) {
                      return n && 'mouseout' !== t.type ? (r ? e : t) : null;
                    })(t, this._lastEvent, n, s);
                  n &&
                    ((this._lastEvent = null),
                    rt(a.onHover, [t, l, this], this),
                    s && rt(a.onClick, [t, l, this], this));
                  var c = !at(l, i);
                  return (
                    (c || e) &&
                      ((this._active = l), this._updateHoverStyles(l, i, e)),
                    (this._lastEvent = u),
                    c
                  );
                },
              },
              {
                key: '_getActiveElements',
                value: function (t, e, n, r) {
                  if ('mouseout' === t.type) return [];
                  if (!n) return e;
                  var i = this.options.hover;
                  return this.getElementsAtEventForMode(t, i.mode, i, r);
                },
              },
            ]),
            t
          );
        })(),
        Ma = function () {
          return it(Sa.instances, function (t) {
            return t._plugins.invalidate();
          });
        },
        Ea = !0;
      function Pa(t, e, n) {
        var r = e.startAngle,
          i = e.pixelMargin,
          a = e.x,
          o = e.y,
          l = e.outerRadius,
          s = e.innerRadius,
          u = i / l;
        t.beginPath(),
          t.arc(a, o, l, r - u, n + u),
          s > i
            ? ((u = i / s), t.arc(a, o, s, n + u, r - u, !0))
            : t.arc(a, o, i, n + wt, r - wt),
          t.closePath(),
          t.clip();
      }
      function Ca(t, e, n, r) {
        var i = dn(t.options.borderRadius, [
            'outerStart',
            'outerEnd',
            'innerStart',
            'innerEnd',
          ]),
          a = (n - e) / 2,
          o = Math.min(a, (r * e) / 2),
          l = function (t) {
            var e = ((n - Math.min(a, t)) * r) / 2;
            return Vt(t, 0, Math.min(a, e));
          };
        return {
          outerStart: l(i.outerStart),
          outerEnd: l(i.outerEnd),
          innerStart: Vt(i.innerStart, 0, o),
          innerEnd: Vt(i.innerEnd, 0, o),
        };
      }
      function Oa(t, e, n, r) {
        return { x: n + t * Math.cos(e), y: r + t * Math.sin(e) };
      }
      function Aa(t, e, n, r, i, a) {
        var o = e.x,
          l = e.y,
          s = e.startAngle,
          u = e.pixelMargin,
          c = e.innerRadius,
          f = Math.max(e.outerRadius + r + n - u, 0),
          h = c > 0 ? c + r + n + u : 0,
          d = 0,
          p = i - s;
        if (r) {
          var v = ((c > 0 ? c - r : 0) + (f > 0 ? f - r : 0)) / 2;
          d = (p - (0 !== v ? (p * v) / (v + r) : p)) / 2;
        }
        var g = (p - Math.max(0.001, p * f - n / mt) / f) / 2,
          y = s + g + d,
          m = i - g - d,
          b = Ca(e, h, f, m - y),
          x = b.outerStart,
          k = b.outerEnd,
          _ = b.innerStart,
          w = b.innerEnd,
          S = f - x,
          M = f - k,
          E = y + x / S,
          P = m - k / M,
          C = h + _,
          O = h + w,
          A = y + _ / C,
          T = m - w / O;
        if ((t.beginPath(), a)) {
          if ((t.arc(o, l, f, E, P), k > 0)) {
            var D = Oa(M, P, o, l);
            t.arc(D.x, D.y, k, P, m + wt);
          }
          var L = Oa(O, m, o, l);
          if ((t.lineTo(L.x, L.y), w > 0)) {
            var R = Oa(O, T, o, l);
            t.arc(R.x, R.y, w, m + wt, T + Math.PI);
          }
          if ((t.arc(o, l, h, m - w / h, y + _ / h, !0), _ > 0)) {
            var N = Oa(C, A, o, l);
            t.arc(N.x, N.y, _, A + Math.PI, y - wt);
          }
          var I = Oa(S, y, o, l);
          if ((t.lineTo(I.x, I.y), x > 0)) {
            var z = Oa(S, E, o, l);
            t.arc(z.x, z.y, x, y - wt, E);
          }
        } else {
          t.moveTo(o, l);
          var j = Math.cos(E) * f + o,
            F = Math.sin(E) * f + l;
          t.lineTo(j, F);
          var V = Math.cos(P) * f + o,
            B = Math.sin(P) * f + l;
          t.lineTo(V, B);
        }
        t.closePath();
      }
      function Ta(t, e, n, r, i, a) {
        var o = e.options,
          l = o.borderWidth,
          s = o.borderJoinStyle,
          u = 'inner' === o.borderAlign;
        l &&
          (u
            ? ((t.lineWidth = 2 * l), (t.lineJoin = s || 'round'))
            : ((t.lineWidth = l), (t.lineJoin = s || 'bevel')),
          e.fullCircles &&
            (function (t, e, n) {
              var r,
                i = e.x,
                a = e.y,
                o = e.startAngle,
                l = e.pixelMargin,
                s = e.fullCircles,
                u = Math.max(e.outerRadius - l, 0),
                c = e.innerRadius + l;
              for (
                n && Pa(t, e, o + bt),
                  t.beginPath(),
                  t.arc(i, a, c, o + bt, o, !0),
                  r = 0;
                r < s;
                ++r
              )
                t.stroke();
              for (t.beginPath(), t.arc(i, a, u, o, o + bt), r = 0; r < s; ++r)
                t.stroke();
            })(t, e, u),
          u && Pa(t, e, i),
          Aa(t, e, n, r, i, a),
          t.stroke());
      }
      Object.defineProperties(Sa, {
        defaults: { enumerable: Ea, value: $e },
        instances: { enumerable: Ea, value: ka },
        overrides: { enumerable: Ea, value: Be },
        registry: { enumerable: Ea, value: ci },
        version: { enumerable: Ea, value: '3.9.1' },
        getChart: { enumerable: Ea, value: _a },
        register: {
          enumerable: Ea,
          value: function () {
            ci.add.apply(ci, arguments), Ma();
          },
        },
        unregister: {
          enumerable: Ea,
          value: function () {
            ci.remove.apply(ci, arguments), Ma();
          },
        },
      });
      var Da = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this)).options = void 0),
            (r.circumference = void 0),
            (r.startAngle = void 0),
            (r.endAngle = void 0),
            (r.innerRadius = void 0),
            (r.outerRadius = void 0),
            (r.pixelMargin = 0),
            (r.fullCircles = 0),
            t && Object.assign(N(r), t),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'inRange',
              value: function (t, e, n) {
                var r = Nt(this.getProps(['x', 'y'], n), { x: t, y: e }),
                  i = r.angle,
                  a = r.distance,
                  o = this.getProps(
                    [
                      'startAngle',
                      'endAngle',
                      'innerRadius',
                      'outerRadius',
                      'circumference',
                    ],
                    n
                  ),
                  l = o.startAngle,
                  s = o.endAngle,
                  u = o.innerRadius,
                  c = o.outerRadius,
                  f = o.circumference,
                  h = this.options.spacing / 2,
                  d = et(f, s - l) >= bt || Ft(i, l, s),
                  p = Bt(a, u + h, c + h);
                return d && p;
              },
            },
            {
              key: 'getCenterPoint',
              value: function (t) {
                var e = this.getProps(
                    [
                      'x',
                      'y',
                      'startAngle',
                      'endAngle',
                      'innerRadius',
                      'outerRadius',
                      'circumference',
                    ],
                    t
                  ),
                  n = e.x,
                  r = e.y,
                  i = e.startAngle,
                  a = e.endAngle,
                  o = e.innerRadius,
                  l = e.outerRadius,
                  s = this.options,
                  u = s.offset,
                  c = (i + a) / 2,
                  f = (o + l + s.spacing + u) / 2;
                return { x: n + Math.cos(c) * f, y: r + Math.sin(c) * f };
              },
            },
            {
              key: 'tooltipPosition',
              value: function (t) {
                return this.getCenterPoint(t);
              },
            },
            {
              key: 'draw',
              value: function (t) {
                var e = this.options,
                  n = this.circumference,
                  r = (e.offset || 0) / 2,
                  i = (e.spacing || 0) / 2,
                  a = e.circular;
                if (
                  ((this.pixelMargin = 'inner' === e.borderAlign ? 0.33 : 0),
                  (this.fullCircles = n > bt ? Math.floor(n / bt) : 0),
                  !(0 === n || this.innerRadius < 0 || this.outerRadius < 0))
                ) {
                  t.save();
                  var o = 0;
                  if (r) {
                    o = r / 2;
                    var l = (this.startAngle + this.endAngle) / 2;
                    t.translate(Math.cos(l) * o, Math.sin(l) * o),
                      this.circumference >= mt && (o = r);
                  }
                  (t.fillStyle = e.backgroundColor),
                    (t.strokeStyle = e.borderColor);
                  var s = (function (t, e, n, r, i) {
                    var a = e.fullCircles,
                      o = e.startAngle,
                      l = e.circumference,
                      s = e.endAngle;
                    if (a) {
                      Aa(t, e, n, r, o + bt, i);
                      for (var u = 0; u < a; ++u) t.fill();
                      isNaN(l) ||
                        ((s = o + (l % bt)), l % bt === 0 && (s += bt));
                    }
                    return Aa(t, e, n, r, s, i), t.fill(), s;
                  })(t, this, o, i, a);
                  Ta(t, this, o, i, s, a), t.restore();
                }
              },
            },
          ]),
          n
        );
      })(qr);
      function La(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e;
        (t.lineCap = et(n.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(et(n.borderDash, e.borderDash)),
          (t.lineDashOffset = et(n.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = et(n.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = et(n.borderWidth, e.borderWidth)),
          (t.strokeStyle = et(n.borderColor, e.borderColor));
      }
      function Ra(t, e, n) {
        t.lineTo(n.x, n.y);
      }
      function Na(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = t.length,
          i = n.start,
          a = void 0 === i ? 0 : i,
          o = n.end,
          l = void 0 === o ? r - 1 : o,
          s = e.start,
          u = e.end,
          c = Math.max(a, s),
          f = Math.min(l, u),
          h = (a < s && l < s) || (a > u && l > u);
        return {
          count: r,
          start: c,
          loop: e.loop,
          ilen: f < c && !h ? r + f - c : f - c,
        };
      }
      function Ia(t, e, n, r) {
        var i,
          a,
          o,
          l = e.points,
          s = e.options,
          u = Na(l, n, r),
          c = u.count,
          f = u.start,
          h = u.loop,
          d = u.ilen,
          p = (function (t) {
            return t.stepped
              ? nn
              : t.tension || 'monotone' === t.cubicInterpolationMode
              ? rn
              : Ra;
          })(s),
          v = r || {},
          g = v.move,
          y = void 0 === g || g,
          m = v.reverse;
        for (i = 0; i <= d; ++i)
          (a = l[(f + (m ? d - i : i)) % c]).skip ||
            (y ? (t.moveTo(a.x, a.y), (y = !1)) : p(t, o, a, m, s.stepped),
            (o = a));
        return h && p(t, o, (a = l[(f + (m ? d : 0)) % c]), m, s.stepped), !!h;
      }
      function za(t, e, n, r) {
        var i,
          a,
          o,
          l,
          s,
          u,
          c = e.points,
          f = Na(c, n, r),
          h = f.count,
          d = f.start,
          p = f.ilen,
          v = r || {},
          g = v.move,
          y = void 0 === g || g,
          m = v.reverse,
          b = 0,
          x = 0,
          k = function (t) {
            return (d + (m ? p - t : t)) % h;
          },
          _ = function () {
            l !== s && (t.lineTo(b, s), t.lineTo(b, l), t.lineTo(b, u));
          };
        for (y && ((a = c[k(0)]), t.moveTo(a.x, a.y)), i = 0; i <= p; ++i)
          if (!(a = c[k(i)]).skip) {
            var w = a.x,
              S = a.y,
              M = 0 | w;
            M === o
              ? (S < l ? (l = S) : S > s && (s = S), (b = (x * b + w) / ++x))
              : (_(), t.lineTo(w, S), (o = M), (x = 0), (l = s = S)),
              (u = S);
          }
        _();
      }
      function ja(t) {
        var e = t.options,
          n = e.borderDash && e.borderDash.length;
        return !t._decimated &&
          !t._loop &&
          !e.tension &&
          'monotone' !== e.cubicInterpolationMode &&
          !e.stepped &&
          !n
          ? za
          : Ia;
      }
      (Da.id = 'arc'),
        (Da.defaults = {
          borderAlign: 'center',
          borderColor: '#fff',
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
        }),
        (Da.defaultRoutes = { backgroundColor: 'backgroundColor' });
      var Fa = 'function' === typeof Path2D;
      function Va(t, e, n, r) {
        Fa && !e.options.segment
          ? (function (t, e, n, r) {
              var i = e._path;
              i ||
                ((i = e._path = new Path2D()),
                e.path(i, n, r) && i.closePath()),
                La(t, e.options),
                t.stroke(i);
            })(t, e, n, r)
          : (function (t, e, n, r) {
              var i,
                a = e.segments,
                o = e.options,
                l = ja(e),
                s = H(a);
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  var u = i.value;
                  La(t, o, u.style),
                    t.beginPath(),
                    l(t, e, u, { start: n, end: n + r - 1 }) && t.closePath(),
                    t.stroke();
                }
              } catch (c) {
                s.e(c);
              } finally {
                s.f();
              }
            })(t, e, n, r);
      }
      var Ba = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this)).animated = !0),
            (r.options = void 0),
            (r._chart = void 0),
            (r._loop = void 0),
            (r._fullLoop = void 0),
            (r._path = void 0),
            (r._points = void 0),
            (r._segments = void 0),
            (r._decimated = !1),
            (r._pointsUpdated = !1),
            (r._datasetIndex = void 0),
            t && Object.assign(N(r), t),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'updateControlPoints',
              value: function (t, e) {
                var n = this.options;
                if (
                  (n.tension || 'monotone' === n.cubicInterpolationMode) &&
                  !n.stepped &&
                  !this._pointsUpdated
                ) {
                  var r = n.spanGaps ? this._loop : this._fullLoop;
                  Wn(this._points, n, t, r, e), (this._pointsUpdated = !0);
                }
              },
            },
            {
              key: 'points',
              get: function () {
                return this._points;
              },
              set: function (t) {
                (this._points = t),
                  delete this._segments,
                  delete this._path,
                  (this._pointsUpdated = !1);
              },
            },
            {
              key: 'segments',
              get: function () {
                return (
                  this._segments ||
                  (this._segments = (function (t, e) {
                    var n = t.points,
                      r = t.options.spanGaps,
                      i = n.length;
                    if (!i) return [];
                    var a = !!t._loop,
                      o = (function (t, e, n, r) {
                        var i = 0,
                          a = e - 1;
                        if (n && !r) for (; i < e && !t[i].skip; ) i++;
                        for (; i < e && t[i].skip; ) i++;
                        for (i %= e, n && (a += i); a > i && t[a % e].skip; )
                          a--;
                        return { start: i, end: (a %= e) };
                      })(n, i, a, r),
                      l = o.start,
                      s = o.end;
                    return dr(
                      t,
                      !0 === r
                        ? [{ start: l, end: s, loop: a }]
                        : (function (t, e, n, r) {
                            var i,
                              a = t.length,
                              o = [],
                              l = e,
                              s = t[e];
                            for (i = e + 1; i <= n; ++i) {
                              var u = t[i % a];
                              u.skip || u.stop
                                ? s.skip ||
                                  ((r = !1),
                                  o.push({
                                    start: e % a,
                                    end: (i - 1) % a,
                                    loop: r,
                                  }),
                                  (e = l = u.stop ? i : null))
                                : ((l = i), s.skip && (e = i)),
                                (s = u);
                            }
                            return (
                              null !== l &&
                                o.push({ start: e % a, end: l % a, loop: r }),
                              o
                            );
                          })(
                            n,
                            l,
                            s < l ? s + i : s,
                            !!t._fullLoop && 0 === l && s === i - 1
                          ),
                      n,
                      e
                    );
                  })(this, this.options.segment))
                );
              },
            },
            {
              key: 'first',
              value: function () {
                var t = this.segments,
                  e = this.points;
                return t.length && e[t[0].start];
              },
            },
            {
              key: 'last',
              value: function () {
                var t = this.segments,
                  e = this.points,
                  n = t.length;
                return n && e[t[n - 1].end];
              },
            },
            {
              key: 'interpolate',
              value: function (t, e) {
                var n = this.options,
                  r = t[e],
                  i = this.points,
                  a = hr(this, { property: e, start: r, end: r });
                if (a.length) {
                  var o,
                    l,
                    s = [],
                    u = (function (t) {
                      return t.stepped
                        ? nr
                        : t.tension || 'monotone' === t.cubicInterpolationMode
                        ? rr
                        : er;
                    })(n);
                  for (o = 0, l = a.length; o < l; ++o) {
                    var c = a[o],
                      f = c.start,
                      h = c.end,
                      d = i[f],
                      p = i[h];
                    if (d !== p) {
                      var v = u(
                        d,
                        p,
                        Math.abs((r - d[e]) / (p[e] - d[e])),
                        n.stepped
                      );
                      (v[e] = t[e]), s.push(v);
                    } else s.push(d);
                  }
                  return 1 === s.length ? s[0] : s;
                }
              },
            },
            {
              key: 'pathSegment',
              value: function (t, e, n) {
                return ja(this)(t, this, e, n);
              },
            },
            {
              key: 'path',
              value: function (t, e, n) {
                var r = this.segments,
                  i = ja(this),
                  a = this._loop;
                (e = e || 0), (n = n || this.points.length - e);
                var o,
                  l = H(r);
                try {
                  for (l.s(); !(o = l.n()).done; ) {
                    a &= i(t, this, o.value, { start: e, end: e + n - 1 });
                  }
                } catch (s) {
                  l.e(s);
                } finally {
                  l.f();
                }
                return !!a;
              },
            },
            {
              key: 'draw',
              value: function (t, e, n, r) {
                var i = this.options || {};
                (this.points || []).length &&
                  i.borderWidth &&
                  (t.save(), Va(t, this, n, r), t.restore()),
                  this.animated &&
                    ((this._pointsUpdated = !1), (this._path = void 0));
              },
            },
          ]),
          n
        );
      })(qr);
      function Wa(t, e, n, r) {
        var i = t.options,
          a = t.getProps([n], r)[n];
        return Math.abs(e - a) < i.radius + i.hitRadius;
      }
      (Ba.id = 'line'),
        (Ba.defaults = {
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: 'miter',
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: 'default',
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        }),
        (Ba.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        }),
        (Ba.descriptors = {
          _scriptable: !0,
          _indexable: function (t) {
            return 'borderDash' !== t && 'fill' !== t;
          },
        });
      var Ha = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this)).options = void 0),
            (r.parsed = void 0),
            (r.skip = void 0),
            (r.stop = void 0),
            t && Object.assign(N(r), t),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'inRange',
              value: function (t, e, n) {
                var r = this.options,
                  i = this.getProps(['x', 'y'], n),
                  a = i.x,
                  o = i.y;
                return (
                  Math.pow(t - a, 2) + Math.pow(e - o, 2) <
                  Math.pow(r.hitRadius + r.radius, 2)
                );
              },
            },
            {
              key: 'inXRange',
              value: function (t, e) {
                return Wa(this, t, 'x', e);
              },
            },
            {
              key: 'inYRange',
              value: function (t, e) {
                return Wa(this, t, 'y', e);
              },
            },
            {
              key: 'getCenterPoint',
              value: function (t) {
                var e = this.getProps(['x', 'y'], t);
                return { x: e.x, y: e.y };
              },
            },
            {
              key: 'size',
              value: function (t) {
                var e = (t = t || this.options || {}).radius || 0;
                return (
                  2 *
                  ((e = Math.max(e, (e && t.hoverRadius) || 0)) +
                    ((e && t.borderWidth) || 0))
                );
              },
            },
            {
              key: 'draw',
              value: function (t, e) {
                var n = this.options;
                this.skip ||
                  n.radius < 0.1 ||
                  !Je(this, e, this.size(n) / 2) ||
                  ((t.strokeStyle = n.borderColor),
                  (t.lineWidth = n.borderWidth),
                  (t.fillStyle = n.backgroundColor),
                  Ze(t, n, this.x, this.y));
              },
            },
            {
              key: 'getRange',
              value: function () {
                var t = this.options || {};
                return t.radius + t.hitRadius;
              },
            },
          ]),
          n
        );
      })(qr);
      function Ua(t, e) {
        var n,
          r,
          i,
          a,
          o,
          l = t.getProps(['x', 'y', 'base', 'width', 'height'], e),
          s = l.x,
          u = l.y,
          c = l.base,
          f = l.width,
          h = l.height;
        return (
          t.horizontal
            ? ((o = h / 2),
              (n = Math.min(s, c)),
              (r = Math.max(s, c)),
              (i = u - o),
              (a = u + o))
            : ((n = s - (o = f / 2)),
              (r = s + o),
              (i = Math.min(u, c)),
              (a = Math.max(u, c))),
          { left: n, top: i, right: r, bottom: a }
        );
      }
      function Ya(t, e, n, r) {
        return t ? 0 : Vt(e, n, r);
      }
      function $a(t) {
        var e = Ua(t),
          n = e.right - e.left,
          r = e.bottom - e.top,
          i = (function (t, e, n) {
            var r = t.options.borderWidth,
              i = t.borderSkipped,
              a = pn(r);
            return {
              t: Ya(i.top, a.top, 0, n),
              r: Ya(i.right, a.right, 0, e),
              b: Ya(i.bottom, a.bottom, 0, n),
              l: Ya(i.left, a.left, 0, e),
            };
          })(t, n / 2, r / 2),
          a = (function (t, e, n) {
            var r = t.getProps(['enableBorderRadius']).enableBorderRadius,
              i = t.options.borderRadius,
              a = vn(i),
              o = Math.min(e, n),
              l = t.borderSkipped,
              s = r || K(i);
            return {
              topLeft: Ya(!s || l.top || l.left, a.topLeft, 0, o),
              topRight: Ya(!s || l.top || l.right, a.topRight, 0, o),
              bottomLeft: Ya(!s || l.bottom || l.left, a.bottomLeft, 0, o),
              bottomRight: Ya(!s || l.bottom || l.right, a.bottomRight, 0, o),
            };
          })(t, n / 2, r / 2);
        return {
          outer: { x: e.left, y: e.top, w: n, h: r, radius: a },
          inner: {
            x: e.left + i.l,
            y: e.top + i.t,
            w: n - i.l - i.r,
            h: r - i.t - i.b,
            radius: {
              topLeft: Math.max(0, a.topLeft - Math.max(i.t, i.l)),
              topRight: Math.max(0, a.topRight - Math.max(i.t, i.r)),
              bottomLeft: Math.max(0, a.bottomLeft - Math.max(i.b, i.l)),
              bottomRight: Math.max(0, a.bottomRight - Math.max(i.b, i.r)),
            },
          },
        };
      }
      function Xa(t, e, n, r) {
        var i = null === e,
          a = null === n,
          o = t && !(i && a) && Ua(t, r);
        return (
          o && (i || Bt(e, o.left, o.right)) && (a || Bt(n, o.top, o.bottom))
        );
      }
      function Ga(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function Qa(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = t.x !== n.x ? -e : 0,
          i = t.y !== n.y ? -e : 0,
          a = (t.x + t.w !== n.x + n.w ? e : 0) - r,
          o = (t.y + t.h !== n.y + n.h ? e : 0) - i;
        return {
          x: t.x + r,
          y: t.y + i,
          w: t.w + a,
          h: t.h + o,
          radius: t.radius,
        };
      }
      (Ha.id = 'point'),
        (Ha.defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: 'circle',
          radius: 3,
          rotation: 0,
        }),
        (Ha.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        });
      var qa = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this)).options = void 0),
            (r.horizontal = void 0),
            (r.base = void 0),
            (r.width = void 0),
            (r.height = void 0),
            (r.inflateAmount = void 0),
            t && Object.assign(N(r), t),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'draw',
              value: function (t) {
                var e,
                  n = this.inflateAmount,
                  r = this.options,
                  i = r.borderColor,
                  a = r.backgroundColor,
                  o = $a(this),
                  l = o.inner,
                  s = o.outer,
                  u =
                    (e = s.radius).topLeft ||
                    e.topRight ||
                    e.bottomLeft ||
                    e.bottomRight
                      ? sn
                      : Ga;
                t.save(),
                  (s.w === l.w && s.h === l.h) ||
                    (t.beginPath(),
                    u(t, Qa(s, n, l)),
                    t.clip(),
                    u(t, Qa(l, -n, s)),
                    (t.fillStyle = i),
                    t.fill('evenodd')),
                  t.beginPath(),
                  u(t, Qa(l, n)),
                  (t.fillStyle = a),
                  t.fill(),
                  t.restore();
              },
            },
            {
              key: 'inRange',
              value: function (t, e, n) {
                return Xa(this, t, e, n);
              },
            },
            {
              key: 'inXRange',
              value: function (t, e) {
                return Xa(this, t, null, e);
              },
            },
            {
              key: 'inYRange',
              value: function (t, e) {
                return Xa(this, null, t, e);
              },
            },
            {
              key: 'getCenterPoint',
              value: function (t) {
                var e = this.getProps(['x', 'y', 'base', 'horizontal'], t),
                  n = e.x,
                  r = e.y,
                  i = e.base,
                  a = e.horizontal;
                return { x: a ? (n + i) / 2 : n, y: a ? r : (r + i) / 2 };
              },
            },
            {
              key: 'getRange',
              value: function (t) {
                return 'x' === t ? this.width / 2 : this.height / 2;
              },
            },
          ]),
          n
        );
      })(qr);
      (qa.id = 'bar'),
        (qa.defaults = {
          borderSkipped: 'start',
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: 'auto',
          pointStyle: void 0,
        }),
        (qa.defaultRoutes = {
          backgroundColor: 'backgroundColor',
          borderColor: 'borderColor',
        });
      var Za = function (t, e) {
          var n = t.boxHeight,
            r = void 0 === n ? e : n,
            i = t.boxWidth,
            a = void 0 === i ? e : i;
          return (
            t.usePointStyle &&
              ((r = Math.min(r, e)), (a = t.pointStyleWidth || Math.min(a, e))),
            { boxWidth: a, boxHeight: r, itemHeight: Math.max(e, r) }
          );
        },
        Ka = (function (t) {
          V(n, t);
          var e = W(n);
          function n(t) {
            var r;
            return (
              Y(this, n),
              ((r = e.call(this))._added = !1),
              (r.legendHitBoxes = []),
              (r._hoveredItem = null),
              (r.doughnutMode = !1),
              (r.chart = t.chart),
              (r.options = t.options),
              (r.ctx = t.ctx),
              (r.legendItems = void 0),
              (r.columnSizes = void 0),
              (r.lineWidths = void 0),
              (r.maxHeight = void 0),
              (r.maxWidth = void 0),
              (r.top = void 0),
              (r.bottom = void 0),
              (r.left = void 0),
              (r.right = void 0),
              (r.height = void 0),
              (r.width = void 0),
              (r._margins = void 0),
              (r.position = void 0),
              (r.weight = void 0),
              (r.fullSize = void 0),
              r
            );
          }
          return (
            X(n, [
              {
                key: 'update',
                value: function (t, e, n) {
                  (this.maxWidth = t),
                    (this.maxHeight = e),
                    (this._margins = n),
                    this.setDimensions(),
                    this.buildLabels(),
                    this.fit();
                },
              },
              {
                key: 'setDimensions',
                value: function () {
                  this.isHorizontal()
                    ? ((this.width = this.maxWidth),
                      (this.left = this._margins.left),
                      (this.right = this.width))
                    : ((this.height = this.maxHeight),
                      (this.top = this._margins.top),
                      (this.bottom = this.height));
                },
              },
              {
                key: 'buildLabels',
                value: function () {
                  var t = this,
                    e = this.options.labels || {},
                    n = rt(e.generateLabels, [this.chart], this) || [];
                  e.filter &&
                    (n = n.filter(function (n) {
                      return e.filter(n, t.chart.data);
                    })),
                    e.sort &&
                      (n = n.sort(function (n, r) {
                        return e.sort(n, r, t.chart.data);
                      })),
                    this.options.reverse && n.reverse(),
                    (this.legendItems = n);
                },
              },
              {
                key: 'fit',
                value: function () {
                  var t = this.options,
                    e = this.ctx;
                  if (t.display) {
                    var n,
                      r,
                      i = t.labels,
                      a = yn(i.font),
                      o = a.size,
                      l = this._computeTitleHeight(),
                      s = Za(i, o),
                      u = s.boxWidth,
                      c = s.itemHeight;
                    (e.font = a.string),
                      this.isHorizontal()
                        ? ((n = this.maxWidth),
                          (r = this._fitRows(l, o, u, c) + 10))
                        : ((r = this.maxHeight),
                          (n = this._fitCols(l, o, u, c) + 10)),
                      (this.width = Math.min(n, t.maxWidth || this.maxWidth)),
                      (this.height = Math.min(
                        r,
                        t.maxHeight || this.maxHeight
                      ));
                  } else this.width = this.height = 0;
                },
              },
              {
                key: '_fitRows',
                value: function (t, e, n, r) {
                  var i = this.ctx,
                    a = this.maxWidth,
                    o = this.options.labels.padding,
                    l = (this.legendHitBoxes = []),
                    s = (this.lineWidths = [0]),
                    u = r + o,
                    c = t;
                  (i.textAlign = 'left'), (i.textBaseline = 'middle');
                  var f = -1,
                    h = -u;
                  return (
                    this.legendItems.forEach(function (t, d) {
                      var p = n + e / 2 + i.measureText(t.text).width;
                      (0 === d || s[s.length - 1] + p + 2 * o > a) &&
                        ((c += u),
                        (s[s.length - (d > 0 ? 0 : 1)] = 0),
                        (h += u),
                        f++),
                        (l[d] = {
                          left: 0,
                          top: h,
                          row: f,
                          width: p,
                          height: r,
                        }),
                        (s[s.length - 1] += p + o);
                    }),
                    c
                  );
                },
              },
              {
                key: '_fitCols',
                value: function (t, e, n, r) {
                  var i = this.ctx,
                    a = this.maxHeight,
                    o = this.options.labels.padding,
                    l = (this.legendHitBoxes = []),
                    s = (this.columnSizes = []),
                    u = a - t,
                    c = o,
                    f = 0,
                    h = 0,
                    d = 0,
                    p = 0;
                  return (
                    this.legendItems.forEach(function (t, a) {
                      var v = n + e / 2 + i.measureText(t.text).width;
                      a > 0 &&
                        h + r + 2 * o > u &&
                        ((c += f + o),
                        s.push({ width: f, height: h }),
                        (d += f + o),
                        p++,
                        (f = h = 0)),
                        (l[a] = {
                          left: d,
                          top: h,
                          col: p,
                          width: v,
                          height: r,
                        }),
                        (f = Math.max(f, v)),
                        (h += r + o);
                    }),
                    (c += f),
                    s.push({ width: f, height: h }),
                    c
                  );
                },
              },
              {
                key: 'adjustHitBoxes',
                value: function () {
                  if (this.options.display) {
                    var t = this._computeTitleHeight(),
                      e = this.legendHitBoxes,
                      n = this.options,
                      r = n.align,
                      i = n.labels.padding,
                      a = or(n.rtl, this.left, this.width);
                    if (this.isHorizontal()) {
                      var o,
                        l = 0,
                        s = Zt(
                          r,
                          this.left + i,
                          this.right - this.lineWidths[l]
                        ),
                        u = H(e);
                      try {
                        for (u.s(); !(o = u.n()).done; ) {
                          var c = o.value;
                          l !== c.row &&
                            ((l = c.row),
                            (s = Zt(
                              r,
                              this.left + i,
                              this.right - this.lineWidths[l]
                            ))),
                            (c.top += this.top + t + i),
                            (c.left = a.leftForLtr(a.x(s), c.width)),
                            (s += c.width + i);
                        }
                      } catch (g) {
                        u.e(g);
                      } finally {
                        u.f();
                      }
                    } else {
                      var f,
                        h = 0,
                        d = Zt(
                          r,
                          this.top + t + i,
                          this.bottom - this.columnSizes[h].height
                        ),
                        p = H(e);
                      try {
                        for (p.s(); !(f = p.n()).done; ) {
                          var v = f.value;
                          v.col !== h &&
                            ((h = v.col),
                            (d = Zt(
                              r,
                              this.top + t + i,
                              this.bottom - this.columnSizes[h].height
                            ))),
                            (v.top = d),
                            (v.left += this.left + i),
                            (v.left = a.leftForLtr(a.x(v.left), v.width)),
                            (d += v.height + i);
                        }
                      } catch (g) {
                        p.e(g);
                      } finally {
                        p.f();
                      }
                    }
                  }
                },
              },
              {
                key: 'isHorizontal',
                value: function () {
                  return (
                    'top' === this.options.position ||
                    'bottom' === this.options.position
                  );
                },
              },
              {
                key: 'draw',
                value: function () {
                  if (this.options.display) {
                    var t = this.ctx;
                    tn(t, this), this._draw(), en(t);
                  }
                },
              },
              {
                key: '_draw',
                value: function () {
                  var t,
                    e = this,
                    n = this.options,
                    r = this.columnSizes,
                    i = this.lineWidths,
                    a = this.ctx,
                    o = n.align,
                    l = n.labels,
                    s = $e.color,
                    u = or(n.rtl, this.left, this.width),
                    c = yn(l.font),
                    f = l.color,
                    h = l.padding,
                    d = c.size,
                    p = d / 2;
                  this.drawTitle(),
                    (a.textAlign = u.textAlign('left')),
                    (a.textBaseline = 'middle'),
                    (a.lineWidth = 0.5),
                    (a.font = c.string);
                  var v = Za(l, d),
                    g = v.boxWidth,
                    y = v.boxHeight,
                    m = v.itemHeight,
                    b = this.isHorizontal(),
                    x = this._computeTitleHeight();
                  (t = b
                    ? {
                        x: Zt(o, this.left + h, this.right - i[0]),
                        y: this.top + h + x,
                        line: 0,
                      }
                    : {
                        x: this.left + h,
                        y: Zt(o, this.top + x + h, this.bottom - r[0].height),
                        line: 0,
                      }),
                    lr(this.ctx, n.textDirection);
                  var k = m + h;
                  this.legendItems.forEach(function (v, _) {
                    (a.strokeStyle = v.fontColor || f),
                      (a.fillStyle = v.fontColor || f);
                    var w = a.measureText(v.text).width,
                      S = u.textAlign(
                        v.textAlign || (v.textAlign = l.textAlign)
                      ),
                      M = g + p + w,
                      E = t.x,
                      P = t.y;
                    u.setWidth(e.width),
                      b
                        ? _ > 0 &&
                          E + M + h > e.right &&
                          ((P = t.y += k),
                          t.line++,
                          (E = t.x = Zt(o, e.left + h, e.right - i[t.line])))
                        : _ > 0 &&
                          P + k > e.bottom &&
                          ((E = t.x = E + r[t.line].width + h),
                          t.line++,
                          (P = t.y =
                            Zt(o, e.top + x + h, e.bottom - r[t.line].height))),
                      (function (t, e, n) {
                        if (!(isNaN(g) || g <= 0 || isNaN(y) || y < 0)) {
                          a.save();
                          var r = et(n.lineWidth, 1);
                          if (
                            ((a.fillStyle = et(n.fillStyle, s)),
                            (a.lineCap = et(n.lineCap, 'butt')),
                            (a.lineDashOffset = et(n.lineDashOffset, 0)),
                            (a.lineJoin = et(n.lineJoin, 'miter')),
                            (a.lineWidth = r),
                            (a.strokeStyle = et(n.strokeStyle, s)),
                            a.setLineDash(et(n.lineDash, [])),
                            l.usePointStyle)
                          ) {
                            var i = {
                                radius: (y * Math.SQRT2) / 2,
                                pointStyle: n.pointStyle,
                                rotation: n.rotation,
                                borderWidth: r,
                              },
                              o = u.xPlus(t, g / 2);
                            Ke(a, i, o, e + p, l.pointStyleWidth && g);
                          } else {
                            var c = e + Math.max((d - y) / 2, 0),
                              f = u.leftForLtr(t, g),
                              h = vn(n.borderRadius);
                            a.beginPath(),
                              Object.values(h).some(function (t) {
                                return 0 !== t;
                              })
                                ? sn(a, { x: f, y: c, w: g, h: y, radius: h })
                                : a.rect(f, c, g, y),
                              a.fill(),
                              0 !== r && a.stroke();
                          }
                          a.restore();
                        }
                      })(u.x(E), P, v),
                      (E = (function (t, e, n, r) {
                        return t === (r ? 'left' : 'right')
                          ? n
                          : 'center' === t
                          ? (e + n) / 2
                          : e;
                      })(S, E + g + p, b ? E + M : e.right, n.rtl)),
                      (function (t, e, n) {
                        an(a, n.text, t, e + m / 2, c, {
                          strikethrough: n.hidden,
                          textAlign: u.textAlign(n.textAlign),
                        });
                      })(u.x(E), P, v),
                      b ? (t.x += M + h) : (t.y += k);
                  }),
                    sr(this.ctx, n.textDirection);
                },
              },
              {
                key: 'drawTitle',
                value: function () {
                  var t = this.options,
                    e = t.title,
                    n = yn(e.font),
                    r = gn(e.padding);
                  if (e.display) {
                    var i,
                      a = or(t.rtl, this.left, this.width),
                      o = this.ctx,
                      l = e.position,
                      s = n.size / 2,
                      u = r.top + s,
                      c = this.left,
                      f = this.width;
                    if (this.isHorizontal())
                      (f = Math.max.apply(Math, U(this.lineWidths))),
                        (i = this.top + u),
                        (c = Zt(t.align, c, this.right - f));
                    else {
                      var h = this.columnSizes.reduce(function (t, e) {
                        return Math.max(t, e.height);
                      }, 0);
                      i =
                        u +
                        Zt(
                          t.align,
                          this.top,
                          this.bottom -
                            h -
                            t.labels.padding -
                            this._computeTitleHeight()
                        );
                    }
                    var d = Zt(l, c, c + f);
                    (o.textAlign = a.textAlign(qt(l))),
                      (o.textBaseline = 'middle'),
                      (o.strokeStyle = e.color),
                      (o.fillStyle = e.color),
                      (o.font = n.string),
                      an(o, e.text, d, i, n);
                  }
                },
              },
              {
                key: '_computeTitleHeight',
                value: function () {
                  var t = this.options.title,
                    e = yn(t.font),
                    n = gn(t.padding);
                  return t.display ? e.lineHeight + n.height : 0;
                },
              },
              {
                key: '_getLegendItemAt',
                value: function (t, e) {
                  var n, r, i;
                  if (
                    Bt(t, this.left, this.right) &&
                    Bt(e, this.top, this.bottom)
                  )
                    for (i = this.legendHitBoxes, n = 0; n < i.length; ++n)
                      if (
                        Bt(t, (r = i[n]).left, r.left + r.width) &&
                        Bt(e, r.top, r.top + r.height)
                      )
                        return this.legendItems[n];
                  return null;
                },
              },
              {
                key: 'handleEvent',
                value: function (t) {
                  var e = this.options;
                  if (
                    (function (t, e) {
                      if (
                        ('mousemove' === t || 'mouseout' === t) &&
                        (e.onHover || e.onLeave)
                      )
                        return !0;
                      if (e.onClick && ('click' === t || 'mouseup' === t))
                        return !0;
                      return !1;
                    })(t.type, e)
                  ) {
                    var n = this._getLegendItemAt(t.x, t.y);
                    if ('mousemove' === t.type || 'mouseout' === t.type) {
                      var r = this._hoveredItem,
                        i = (function (t, e) {
                          return (
                            null !== t &&
                            null !== e &&
                            t.datasetIndex === e.datasetIndex &&
                            t.index === e.index
                          );
                        })(r, n);
                      r && !i && rt(e.onLeave, [t, r, this], this),
                        (this._hoveredItem = n),
                        n && !i && rt(e.onHover, [t, n, this], this);
                    } else n && rt(e.onClick, [t, n, this], this);
                  }
                },
              },
            ]),
            n
          );
        })(qr);
      var Ja = {
          id: 'legend',
          _element: Ka,
          start: function (t, e, n) {
            var r = (t.legend = new Ka({ ctx: t.ctx, options: n, chart: t }));
            Ii(t, r, n), Ri(t, r);
          },
          stop: function (t) {
            Ni(t, t.legend), delete t.legend;
          },
          beforeUpdate: function (t, e, n) {
            var r = t.legend;
            Ii(t, r, n), (r.options = n);
          },
          afterUpdate: function (t) {
            var e = t.legend;
            e.buildLabels(), e.adjustHitBoxes();
          },
          afterEvent: function (t, e) {
            e.replay || t.legend.handleEvent(e.event);
          },
          defaults: {
            display: !0,
            position: 'top',
            align: 'center',
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (t, e, n) {
              var r = e.datasetIndex,
                i = n.chart;
              i.isDatasetVisible(r)
                ? (i.hide(r), (e.hidden = !0))
                : (i.show(r), (e.hidden = !1));
            },
            onHover: null,
            onLeave: null,
            labels: {
              color: function (t) {
                return t.chart.options.color;
              },
              boxWidth: 40,
              padding: 10,
              generateLabels: function (t) {
                var e = t.data.datasets,
                  n = t.legend.options.labels,
                  r = n.usePointStyle,
                  i = n.pointStyle,
                  a = n.textAlign,
                  o = n.color;
                return t._getSortedDatasetMetas().map(function (t) {
                  var n = t.controller.getStyle(r ? 0 : void 0),
                    l = gn(n.borderWidth);
                  return {
                    text: e[t.index].label,
                    fillStyle: n.backgroundColor,
                    fontColor: o,
                    hidden: !t.visible,
                    lineCap: n.borderCapStyle,
                    lineDash: n.borderDash,
                    lineDashOffset: n.borderDashOffset,
                    lineJoin: n.borderJoinStyle,
                    lineWidth: (l.width + l.height) / 4,
                    strokeStyle: n.borderColor,
                    pointStyle: i || n.pointStyle,
                    rotation: n.rotation,
                    textAlign: a || n.textAlign,
                    borderRadius: 0,
                    datasetIndex: t.index,
                  };
                }, this);
              },
            },
            title: {
              color: function (t) {
                return t.chart.options.color;
              },
              display: !1,
              position: 'center',
              text: '',
            },
          },
          descriptors: {
            _scriptable: function (t) {
              return !t.startsWith('on');
            },
            labels: {
              _scriptable: function (t) {
                return !['generateLabels', 'filter', 'sort'].includes(t);
              },
            },
          },
        },
        to = (function (t) {
          V(n, t);
          var e = W(n);
          function n(t) {
            var r;
            return (
              Y(this, n),
              ((r = e.call(this)).chart = t.chart),
              (r.options = t.options),
              (r.ctx = t.ctx),
              (r._padding = void 0),
              (r.top = void 0),
              (r.bottom = void 0),
              (r.left = void 0),
              (r.right = void 0),
              (r.width = void 0),
              (r.height = void 0),
              (r.position = void 0),
              (r.weight = void 0),
              (r.fullSize = void 0),
              r
            );
          }
          return (
            X(n, [
              {
                key: 'update',
                value: function (t, e) {
                  var n = this.options;
                  if (((this.left = 0), (this.top = 0), n.display)) {
                    (this.width = this.right = t),
                      (this.height = this.bottom = e);
                    var r = Z(n.text) ? n.text.length : 1;
                    this._padding = gn(n.padding);
                    var i = r * yn(n.font).lineHeight + this._padding.height;
                    this.isHorizontal() ? (this.height = i) : (this.width = i);
                  } else
                    this.width = this.height = this.right = this.bottom = 0;
                },
              },
              {
                key: 'isHorizontal',
                value: function () {
                  var t = this.options.position;
                  return 'top' === t || 'bottom' === t;
                },
              },
              {
                key: '_drawArgs',
                value: function (t) {
                  var e,
                    n,
                    r,
                    i = this.top,
                    a = this.left,
                    o = this.bottom,
                    l = this.right,
                    s = this.options,
                    u = s.align,
                    c = 0;
                  return (
                    this.isHorizontal()
                      ? ((n = Zt(u, a, l)), (r = i + t), (e = l - a))
                      : ('left' === s.position
                          ? ((n = a + t), (r = Zt(u, o, i)), (c = -0.5 * mt))
                          : ((n = l - t), (r = Zt(u, i, o)), (c = 0.5 * mt)),
                        (e = o - i)),
                    { titleX: n, titleY: r, maxWidth: e, rotation: c }
                  );
                },
              },
              {
                key: 'draw',
                value: function () {
                  var t = this.ctx,
                    e = this.options;
                  if (e.display) {
                    var n = yn(e.font),
                      r = n.lineHeight / 2 + this._padding.top,
                      i = this._drawArgs(r),
                      a = i.titleX,
                      o = i.titleY,
                      l = i.maxWidth,
                      s = i.rotation;
                    an(t, e.text, 0, 0, n, {
                      color: e.color,
                      maxWidth: l,
                      rotation: s,
                      textAlign: qt(e.align),
                      textBaseline: 'middle',
                      translation: [a, o],
                    });
                  }
                },
              },
            ]),
            n
          );
        })(qr);
      var eo = {
          id: 'title',
          _element: to,
          start: function (t, e, n) {
            !(function (t, e) {
              var n = new to({ ctx: t.ctx, options: e, chart: t });
              Ii(t, n, e), Ri(t, n), (t.titleBlock = n);
            })(t, n);
          },
          stop: function (t) {
            var e = t.titleBlock;
            Ni(t, e), delete t.titleBlock;
          },
          beforeUpdate: function (t, e, n) {
            var r = t.titleBlock;
            Ii(t, r, n), (r.options = n);
          },
          defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'bold' },
            fullSize: !0,
            padding: 10,
            position: 'top',
            text: '',
            weight: 2e3,
          },
          defaultRoutes: { color: 'color' },
          descriptors: { _scriptable: !0, _indexable: !1 },
        },
        no =
          (new WeakMap(),
          {
            average: function (t) {
              if (!t.length) return !1;
              var e,
                n,
                r = 0,
                i = 0,
                a = 0;
              for (e = 0, n = t.length; e < n; ++e) {
                var o = t[e].element;
                if (o && o.hasValue()) {
                  var l = o.tooltipPosition();
                  (r += l.x), (i += l.y), ++a;
                }
              }
              return { x: r / a, y: i / a };
            },
            nearest: function (t, e) {
              if (!t.length) return !1;
              var n,
                r,
                i,
                a = e.x,
                o = e.y,
                l = Number.POSITIVE_INFINITY;
              for (n = 0, r = t.length; n < r; ++n) {
                var s = t[n].element;
                if (s && s.hasValue()) {
                  var u = It(e, s.getCenterPoint());
                  u < l && ((l = u), (i = s));
                }
              }
              if (i) {
                var c = i.tooltipPosition();
                (a = c.x), (o = c.y);
              }
              return { x: a, y: o };
            },
          });
      function ro(t, e) {
        return e && (Z(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }
      function io(t) {
        return ('string' === typeof t || t instanceof String) &&
          t.indexOf('\n') > -1
          ? t.split('\n')
          : t;
      }
      function ao(t, e) {
        var n = e.element,
          r = e.datasetIndex,
          i = e.index,
          a = t.getDatasetMeta(r).controller,
          o = a.getLabelAndValue(i),
          l = o.label,
          s = o.value;
        return {
          chart: t,
          label: l,
          parsed: a.getParsed(i),
          raw: t.data.datasets[r].data[i],
          formattedValue: s,
          dataset: a.getDataset(),
          dataIndex: i,
          datasetIndex: r,
          element: n,
        };
      }
      function oo(t, e) {
        var n = t.chart.ctx,
          r = t.body,
          i = t.footer,
          a = t.title,
          o = e.boxWidth,
          l = e.boxHeight,
          s = yn(e.bodyFont),
          u = yn(e.titleFont),
          c = yn(e.footerFont),
          f = a.length,
          h = i.length,
          d = r.length,
          p = gn(e.padding),
          v = p.height,
          g = 0,
          y = r.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
        ((y += t.beforeBody.length + t.afterBody.length),
        f &&
          (v +=
            f * u.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom),
        y) &&
          (v +=
            d * (e.displayColors ? Math.max(l, s.lineHeight) : s.lineHeight) +
            (y - d) * s.lineHeight +
            (y - 1) * e.bodySpacing);
        h &&
          (v +=
            e.footerMarginTop + h * c.lineHeight + (h - 1) * e.footerSpacing);
        var m = 0,
          b = function (t) {
            g = Math.max(g, n.measureText(t).width + m);
          };
        return (
          n.save(),
          (n.font = u.string),
          it(t.title, b),
          (n.font = s.string),
          it(t.beforeBody.concat(t.afterBody), b),
          (m = e.displayColors ? o + 2 + e.boxPadding : 0),
          it(r, function (t) {
            it(t.before, b), it(t.lines, b), it(t.after, b);
          }),
          (m = 0),
          (n.font = c.string),
          it(t.footer, b),
          n.restore(),
          { width: (g += p.width), height: v }
        );
      }
      function lo(t, e, n, r) {
        var i = n.x,
          a = n.width,
          o = t.width,
          l = t.chartArea,
          s = l.left,
          u = l.right,
          c = 'center';
        return (
          'center' === r
            ? (c = i <= (s + u) / 2 ? 'left' : 'right')
            : i <= a / 2
            ? (c = 'left')
            : i >= o - a / 2 && (c = 'right'),
          (function (t, e, n, r) {
            var i = r.x,
              a = r.width,
              o = n.caretSize + n.caretPadding;
            return (
              ('left' === t && i + a + o > e.width) ||
              ('right' === t && i - a - o < 0) ||
              void 0
            );
          })(c, t, e, n) && (c = 'center'),
          c
        );
      }
      function so(t, e, n) {
        var r =
          n.yAlign ||
          e.yAlign ||
          (function (t, e) {
            var n = e.y,
              r = e.height;
            return n < r / 2
              ? 'top'
              : n > t.height - r / 2
              ? 'bottom'
              : 'center';
          })(t, n);
        return { xAlign: n.xAlign || e.xAlign || lo(t, e, n, r), yAlign: r };
      }
      function uo(t, e, n, r) {
        var i = t.caretSize,
          a = t.caretPadding,
          o = t.cornerRadius,
          l = n.xAlign,
          s = n.yAlign,
          u = i + a,
          c = vn(o),
          f = c.topLeft,
          h = c.topRight,
          d = c.bottomLeft,
          p = c.bottomRight,
          v = (function (t, e) {
            var n = t.x,
              r = t.width;
            return 'right' === e ? (n -= r) : 'center' === e && (n -= r / 2), n;
          })(e, l),
          g = (function (t, e, n) {
            var r = t.y,
              i = t.height;
            return (
              'top' === e ? (r += n) : (r -= 'bottom' === e ? i + n : i / 2), r
            );
          })(e, s, u);
        return (
          'center' === s
            ? 'left' === l
              ? (v += u)
              : 'right' === l && (v -= u)
            : 'left' === l
            ? (v -= Math.max(f, d) + i)
            : 'right' === l && (v += Math.max(h, p) + i),
          { x: Vt(v, 0, r.width - e.width), y: Vt(g, 0, r.height - e.height) }
        );
      }
      function co(t, e, n) {
        var r = gn(n.padding);
        return 'center' === e
          ? t.x + t.width / 2
          : 'right' === e
          ? t.x + t.width - r.right
          : t.x + r.left;
      }
      function fo(t) {
        return ro([], io(t));
      }
      function ho(t, e) {
        var n =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return n ? t.override(n) : t;
      }
      var po = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this)).opacity = 0),
            (r._active = []),
            (r._eventPosition = void 0),
            (r._size = void 0),
            (r._cachedAnimations = void 0),
            (r._tooltipItems = []),
            (r.$animations = void 0),
            (r.$context = void 0),
            (r.chart = t.chart || t._chart),
            (r._chart = r.chart),
            (r.options = t.options),
            (r.dataPoints = void 0),
            (r.title = void 0),
            (r.beforeBody = void 0),
            (r.body = void 0),
            (r.afterBody = void 0),
            (r.footer = void 0),
            (r.xAlign = void 0),
            (r.yAlign = void 0),
            (r.x = void 0),
            (r.y = void 0),
            (r.height = void 0),
            (r.width = void 0),
            (r.caretX = void 0),
            (r.caretY = void 0),
            (r.labelColors = void 0),
            (r.labelPointStyles = void 0),
            (r.labelTextColors = void 0),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'initialize',
              value: function (t) {
                (this.options = t),
                  (this._cachedAnimations = void 0),
                  (this.$context = void 0);
              },
            },
            {
              key: '_resolveAnimations',
              value: function () {
                var t = this._cachedAnimations;
                if (t) return t;
                var e = this.chart,
                  n = this.options.setContext(this.getContext()),
                  r = n.enabled && e.options.animation && n.animations,
                  i = new _r(this.chart, r);
                return (
                  r._cacheable && (this._cachedAnimations = Object.freeze(i)), i
                );
              },
            },
            {
              key: 'getContext',
              value: function () {
                return (
                  this.$context ||
                  (this.$context =
                    ((t = this.chart.getContext()),
                    (e = this),
                    (n = this._tooltipItems),
                    bn(t, { tooltip: e, tooltipItems: n, type: 'tooltip' })))
                );
                var t, e, n;
              },
            },
            {
              key: 'getTitle',
              value: function (t, e) {
                var n = e.callbacks,
                  r = n.beforeTitle.apply(this, [t]),
                  i = n.title.apply(this, [t]),
                  a = n.afterTitle.apply(this, [t]),
                  o = [];
                return (
                  (o = ro(o, io(r))), (o = ro(o, io(i))), (o = ro(o, io(a)))
                );
              },
            },
            {
              key: 'getBeforeBody',
              value: function (t, e) {
                return fo(e.callbacks.beforeBody.apply(this, [t]));
              },
            },
            {
              key: 'getBody',
              value: function (t, e) {
                var n = this,
                  r = e.callbacks,
                  i = [];
                return (
                  it(t, function (t) {
                    var e = { before: [], lines: [], after: [] },
                      a = ho(r, t);
                    ro(e.before, io(a.beforeLabel.call(n, t))),
                      ro(e.lines, a.label.call(n, t)),
                      ro(e.after, io(a.afterLabel.call(n, t))),
                      i.push(e);
                  }),
                  i
                );
              },
            },
            {
              key: 'getAfterBody',
              value: function (t, e) {
                return fo(e.callbacks.afterBody.apply(this, [t]));
              },
            },
            {
              key: 'getFooter',
              value: function (t, e) {
                var n = e.callbacks,
                  r = n.beforeFooter.apply(this, [t]),
                  i = n.footer.apply(this, [t]),
                  a = n.afterFooter.apply(this, [t]),
                  o = [];
                return (
                  (o = ro(o, io(r))), (o = ro(o, io(i))), (o = ro(o, io(a)))
                );
              },
            },
            {
              key: '_createItems',
              value: function (t) {
                var e,
                  n,
                  r = this,
                  i = this._active,
                  a = this.chart.data,
                  o = [],
                  l = [],
                  s = [],
                  u = [];
                for (e = 0, n = i.length; e < n; ++e)
                  u.push(ao(this.chart, i[e]));
                return (
                  t.filter &&
                    (u = u.filter(function (e, n, r) {
                      return t.filter(e, n, r, a);
                    })),
                  t.itemSort &&
                    (u = u.sort(function (e, n) {
                      return t.itemSort(e, n, a);
                    })),
                  it(u, function (e) {
                    var n = ho(t.callbacks, e);
                    o.push(n.labelColor.call(r, e)),
                      l.push(n.labelPointStyle.call(r, e)),
                      s.push(n.labelTextColor.call(r, e));
                  }),
                  (this.labelColors = o),
                  (this.labelPointStyles = l),
                  (this.labelTextColors = s),
                  (this.dataPoints = u),
                  u
                );
              },
            },
            {
              key: 'update',
              value: function (t, e) {
                var n,
                  r = this.options.setContext(this.getContext()),
                  i = this._active,
                  a = [];
                if (i.length) {
                  var o = no[r.position].call(this, i, this._eventPosition);
                  (a = this._createItems(r)),
                    (this.title = this.getTitle(a, r)),
                    (this.beforeBody = this.getBeforeBody(a, r)),
                    (this.body = this.getBody(a, r)),
                    (this.afterBody = this.getAfterBody(a, r)),
                    (this.footer = this.getFooter(a, r));
                  var l = (this._size = oo(this, r)),
                    s = Object.assign({}, o, l),
                    u = so(this.chart, r, s),
                    c = uo(r, s, u, this.chart);
                  (this.xAlign = u.xAlign),
                    (this.yAlign = u.yAlign),
                    (n = {
                      opacity: 1,
                      x: c.x,
                      y: c.y,
                      width: l.width,
                      height: l.height,
                      caretX: o.x,
                      caretY: o.y,
                    });
                } else 0 !== this.opacity && (n = { opacity: 0 });
                (this._tooltipItems = a),
                  (this.$context = void 0),
                  n && this._resolveAnimations().update(this, n),
                  t &&
                    r.external &&
                    r.external.call(this, {
                      chart: this.chart,
                      tooltip: this,
                      replay: e,
                    });
              },
            },
            {
              key: 'drawCaret',
              value: function (t, e, n, r) {
                var i = this.getCaretPosition(t, n, r);
                e.lineTo(i.x1, i.y1),
                  e.lineTo(i.x2, i.y2),
                  e.lineTo(i.x3, i.y3);
              },
            },
            {
              key: 'getCaretPosition',
              value: function (t, e, n) {
                var r,
                  i,
                  a,
                  o,
                  l,
                  s,
                  u = this.xAlign,
                  c = this.yAlign,
                  f = n.caretSize,
                  h = vn(n.cornerRadius),
                  d = h.topLeft,
                  p = h.topRight,
                  v = h.bottomLeft,
                  g = h.bottomRight,
                  y = t.x,
                  m = t.y,
                  b = e.width,
                  x = e.height;
                return (
                  'center' === c
                    ? ((l = m + x / 2),
                      'left' === u
                        ? ((i = (r = y) - f), (o = l + f), (s = l - f))
                        : ((i = (r = y + b) + f), (o = l - f), (s = l + f)),
                      (a = r))
                    : ((i =
                        'left' === u
                          ? y + Math.max(d, v) + f
                          : 'right' === u
                          ? y + b - Math.max(p, g) - f
                          : this.caretX),
                      'top' === c
                        ? ((l = (o = m) - f), (r = i - f), (a = i + f))
                        : ((l = (o = m + x) + f), (r = i + f), (a = i - f)),
                      (s = o)),
                  { x1: r, x2: i, x3: a, y1: o, y2: l, y3: s }
                );
              },
            },
            {
              key: 'drawTitle',
              value: function (t, e, n) {
                var r,
                  i,
                  a,
                  o = this.title,
                  l = o.length;
                if (l) {
                  var s = or(n.rtl, this.x, this.width);
                  for (
                    t.x = co(this, n.titleAlign, n),
                      e.textAlign = s.textAlign(n.titleAlign),
                      e.textBaseline = 'middle',
                      r = yn(n.titleFont),
                      i = n.titleSpacing,
                      e.fillStyle = n.titleColor,
                      e.font = r.string,
                      a = 0;
                    a < l;
                    ++a
                  )
                    e.fillText(o[a], s.x(t.x), t.y + r.lineHeight / 2),
                      (t.y += r.lineHeight + i),
                      a + 1 === l && (t.y += n.titleMarginBottom - i);
                }
              },
            },
            {
              key: '_drawColorBox',
              value: function (t, e, n, r, i) {
                var a = this.labelColors[n],
                  o = this.labelPointStyles[n],
                  l = i.boxHeight,
                  s = i.boxWidth,
                  u = i.boxPadding,
                  c = yn(i.bodyFont),
                  f = co(this, 'left', i),
                  h = r.x(f),
                  d = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
                  p = e.y + d;
                if (i.usePointStyle) {
                  var v = {
                      radius: Math.min(s, l) / 2,
                      pointStyle: o.pointStyle,
                      rotation: o.rotation,
                      borderWidth: 1,
                    },
                    g = r.leftForLtr(h, s) + s / 2,
                    y = p + l / 2;
                  (t.strokeStyle = i.multiKeyBackground),
                    (t.fillStyle = i.multiKeyBackground),
                    Ze(t, v, g, y),
                    (t.strokeStyle = a.borderColor),
                    (t.fillStyle = a.backgroundColor),
                    Ze(t, v, g, y);
                } else {
                  (t.lineWidth = K(a.borderWidth)
                    ? Math.max.apply(Math, U(Object.values(a.borderWidth)))
                    : a.borderWidth || 1),
                    (t.strokeStyle = a.borderColor),
                    t.setLineDash(a.borderDash || []),
                    (t.lineDashOffset = a.borderDashOffset || 0);
                  var m = r.leftForLtr(h, s - u),
                    b = r.leftForLtr(r.xPlus(h, 1), s - u - 2),
                    x = vn(a.borderRadius);
                  Object.values(x).some(function (t) {
                    return 0 !== t;
                  })
                    ? (t.beginPath(),
                      (t.fillStyle = i.multiKeyBackground),
                      sn(t, { x: m, y: p, w: s, h: l, radius: x }),
                      t.fill(),
                      t.stroke(),
                      (t.fillStyle = a.backgroundColor),
                      t.beginPath(),
                      sn(t, { x: b, y: p + 1, w: s - 2, h: l - 2, radius: x }),
                      t.fill())
                    : ((t.fillStyle = i.multiKeyBackground),
                      t.fillRect(m, p, s, l),
                      t.strokeRect(m, p, s, l),
                      (t.fillStyle = a.backgroundColor),
                      t.fillRect(b, p + 1, s - 2, l - 2));
                }
                t.fillStyle = this.labelTextColors[n];
              },
            },
            {
              key: 'drawBody',
              value: function (t, e, n) {
                var r,
                  i,
                  a,
                  o,
                  l,
                  s,
                  u,
                  c = this.body,
                  f = n.bodySpacing,
                  h = n.bodyAlign,
                  d = n.displayColors,
                  p = n.boxHeight,
                  v = n.boxWidth,
                  g = n.boxPadding,
                  y = yn(n.bodyFont),
                  m = y.lineHeight,
                  b = 0,
                  x = or(n.rtl, this.x, this.width),
                  k = function (n) {
                    e.fillText(n, x.x(t.x + b), t.y + m / 2), (t.y += m + f);
                  },
                  _ = x.textAlign(h);
                for (
                  e.textAlign = h,
                    e.textBaseline = 'middle',
                    e.font = y.string,
                    t.x = co(this, _, n),
                    e.fillStyle = n.bodyColor,
                    it(this.beforeBody, k),
                    b =
                      d && 'right' !== _
                        ? 'center' === h
                          ? v / 2 + g
                          : v + 2 + g
                        : 0,
                    o = 0,
                    s = c.length;
                  o < s;
                  ++o
                ) {
                  for (
                    r = c[o],
                      i = this.labelTextColors[o],
                      e.fillStyle = i,
                      it(r.before, k),
                      a = r.lines,
                      d &&
                        a.length &&
                        (this._drawColorBox(e, t, o, x, n),
                        (m = Math.max(y.lineHeight, p))),
                      l = 0,
                      u = a.length;
                    l < u;
                    ++l
                  )
                    k(a[l]), (m = y.lineHeight);
                  it(r.after, k);
                }
                (b = 0), (m = y.lineHeight), it(this.afterBody, k), (t.y -= f);
              },
            },
            {
              key: 'drawFooter',
              value: function (t, e, n) {
                var r,
                  i,
                  a = this.footer,
                  o = a.length;
                if (o) {
                  var l = or(n.rtl, this.x, this.width);
                  for (
                    t.x = co(this, n.footerAlign, n),
                      t.y += n.footerMarginTop,
                      e.textAlign = l.textAlign(n.footerAlign),
                      e.textBaseline = 'middle',
                      r = yn(n.footerFont),
                      e.fillStyle = n.footerColor,
                      e.font = r.string,
                      i = 0;
                    i < o;
                    ++i
                  )
                    e.fillText(a[i], l.x(t.x), t.y + r.lineHeight / 2),
                      (t.y += r.lineHeight + n.footerSpacing);
                }
              },
            },
            {
              key: 'drawBackground',
              value: function (t, e, n, r) {
                var i = this.xAlign,
                  a = this.yAlign,
                  o = t.x,
                  l = t.y,
                  s = n.width,
                  u = n.height,
                  c = vn(r.cornerRadius),
                  f = c.topLeft,
                  h = c.topRight,
                  d = c.bottomLeft,
                  p = c.bottomRight;
                (e.fillStyle = r.backgroundColor),
                  (e.strokeStyle = r.borderColor),
                  (e.lineWidth = r.borderWidth),
                  e.beginPath(),
                  e.moveTo(o + f, l),
                  'top' === a && this.drawCaret(t, e, n, r),
                  e.lineTo(o + s - h, l),
                  e.quadraticCurveTo(o + s, l, o + s, l + h),
                  'center' === a && 'right' === i && this.drawCaret(t, e, n, r),
                  e.lineTo(o + s, l + u - p),
                  e.quadraticCurveTo(o + s, l + u, o + s - p, l + u),
                  'bottom' === a && this.drawCaret(t, e, n, r),
                  e.lineTo(o + d, l + u),
                  e.quadraticCurveTo(o, l + u, o, l + u - d),
                  'center' === a && 'left' === i && this.drawCaret(t, e, n, r),
                  e.lineTo(o, l + f),
                  e.quadraticCurveTo(o, l, o + f, l),
                  e.closePath(),
                  e.fill(),
                  r.borderWidth > 0 && e.stroke();
              },
            },
            {
              key: '_updateAnimationTarget',
              value: function (t) {
                var e = this.chart,
                  n = this.$animations,
                  r = n && n.x,
                  i = n && n.y;
                if (r || i) {
                  var a = no[t.position].call(
                    this,
                    this._active,
                    this._eventPosition
                  );
                  if (!a) return;
                  var o = (this._size = oo(this, t)),
                    l = Object.assign({}, a, this._size),
                    s = so(e, t, l),
                    u = uo(t, l, s, e);
                  (r._to === u.x && i._to === u.y) ||
                    ((this.xAlign = s.xAlign),
                    (this.yAlign = s.yAlign),
                    (this.width = o.width),
                    (this.height = o.height),
                    (this.caretX = a.x),
                    (this.caretY = a.y),
                    this._resolveAnimations().update(this, u));
                }
              },
            },
            {
              key: '_willRender',
              value: function () {
                return !!this.opacity;
              },
            },
            {
              key: 'draw',
              value: function (t) {
                var e = this.options.setContext(this.getContext()),
                  n = this.opacity;
                if (n) {
                  this._updateAnimationTarget(e);
                  var r = { width: this.width, height: this.height },
                    i = { x: this.x, y: this.y };
                  n = Math.abs(n) < 0.001 ? 0 : n;
                  var a = gn(e.padding),
                    o =
                      this.title.length ||
                      this.beforeBody.length ||
                      this.body.length ||
                      this.afterBody.length ||
                      this.footer.length;
                  e.enabled &&
                    o &&
                    (t.save(),
                    (t.globalAlpha = n),
                    this.drawBackground(i, t, r, e),
                    lr(t, e.textDirection),
                    (i.y += a.top),
                    this.drawTitle(i, t, e),
                    this.drawBody(i, t, e),
                    this.drawFooter(i, t, e),
                    sr(t, e.textDirection),
                    t.restore());
                }
              },
            },
            {
              key: 'getActiveElements',
              value: function () {
                return this._active || [];
              },
            },
            {
              key: 'setActiveElements',
              value: function (t, e) {
                var n = this,
                  r = this._active,
                  i = t.map(function (t) {
                    var e = t.datasetIndex,
                      r = t.index,
                      i = n.chart.getDatasetMeta(e);
                    if (!i)
                      throw new Error('Cannot find a dataset at index ' + e);
                    return { datasetIndex: e, element: i.data[r], index: r };
                  }),
                  a = !at(r, i),
                  o = this._positionChanged(i, e);
                (a || o) &&
                  ((this._active = i),
                  (this._eventPosition = e),
                  (this._ignoreReplayEvents = !0),
                  this.update(!0));
              },
            },
            {
              key: 'handleEvent',
              value: function (t, e) {
                var n =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2];
                if (e && this._ignoreReplayEvents) return !1;
                this._ignoreReplayEvents = !1;
                var r = this.options,
                  i = this._active || [],
                  a = this._getActiveElements(t, i, e, n),
                  o = this._positionChanged(a, t),
                  l = e || !at(a, i) || o;
                return (
                  l &&
                    ((this._active = a),
                    (r.enabled || r.external) &&
                      ((this._eventPosition = { x: t.x, y: t.y }),
                      this.update(!0, e))),
                  l
                );
              },
            },
            {
              key: '_getActiveElements',
              value: function (t, e, n, r) {
                var i = this.options;
                if ('mouseout' === t.type) return [];
                if (!r) return e;
                var a = this.chart.getElementsAtEventForMode(t, i.mode, i, n);
                return i.reverse && a.reverse(), a;
              },
            },
            {
              key: '_positionChanged',
              value: function (t, e) {
                var n = this.caretX,
                  r = this.caretY,
                  i = this.options,
                  a = no[i.position].call(this, t, e);
                return !1 !== a && (n !== a.x || r !== a.y);
              },
            },
          ]),
          n
        );
      })(qr);
      po.positioners = no;
      var vo = {
        id: 'tooltip',
        _element: po,
        positioners: no,
        afterInit: function (t, e, n) {
          n && (t.tooltip = new po({ chart: t, options: n }));
        },
        beforeUpdate: function (t, e, n) {
          t.tooltip && t.tooltip.initialize(n);
        },
        reset: function (t, e, n) {
          t.tooltip && t.tooltip.initialize(n);
        },
        afterDraw: function (t) {
          var e = t.tooltip;
          if (e && e._willRender()) {
            var n = { tooltip: e };
            if (!1 === t.notifyPlugins('beforeTooltipDraw', n)) return;
            e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n);
          }
        },
        afterEvent: function (t, e) {
          if (t.tooltip) {
            var n = e.replay;
            t.tooltip.handleEvent(e.event, n, e.inChartArea) &&
              (e.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: 'average',
          backgroundColor: 'rgba(0,0,0,0.8)',
          titleColor: '#fff',
          titleFont: { weight: 'bold' },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: 'left',
          bodyColor: '#fff',
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: 'left',
          footerColor: '#fff',
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: 'bold' },
          footerAlign: 'left',
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: function (t, e) {
            return e.bodyFont.size;
          },
          boxWidth: function (t, e) {
            return e.bodyFont.size;
          },
          multiKeyBackground: '#fff',
          displayColors: !0,
          boxPadding: 0,
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          animation: { duration: 400, easing: 'easeOutQuart' },
          animations: {
            numbers: {
              type: 'number',
              properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
            },
            opacity: { easing: 'linear', duration: 200 },
          },
          callbacks: {
            beforeTitle: G,
            title: function (t) {
              if (t.length > 0) {
                var e = t[0],
                  n = e.chart.data.labels,
                  r = n ? n.length : 0;
                if (this && this.options && 'dataset' === this.options.mode)
                  return e.dataset.label || '';
                if (e.label) return e.label;
                if (r > 0 && e.dataIndex < r) return n[e.dataIndex];
              }
              return '';
            },
            afterTitle: G,
            beforeBody: G,
            beforeLabel: G,
            label: function (t) {
              if (this && this.options && 'dataset' === this.options.mode)
                return t.label + ': ' + t.formattedValue || t.formattedValue;
              var e = t.dataset.label || '';
              e && (e += ': ');
              var n = t.formattedValue;
              return q(n) || (e += n), e;
            },
            labelColor: function (t) {
              var e = t.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getStyle(t.dataIndex);
              return {
                borderColor: e.borderColor,
                backgroundColor: e.backgroundColor,
                borderWidth: e.borderWidth,
                borderDash: e.borderDash,
                borderDashOffset: e.borderDashOffset,
                borderRadius: 0,
              };
            },
            labelTextColor: function () {
              return this.options.bodyColor;
            },
            labelPointStyle: function (t) {
              var e = t.chart
                .getDatasetMeta(t.datasetIndex)
                .controller.getStyle(t.dataIndex);
              return { pointStyle: e.pointStyle, rotation: e.rotation };
            },
            afterLabel: G,
            afterBody: G,
            beforeFooter: G,
            footer: G,
            afterFooter: G,
          },
        },
        defaultRoutes: {
          bodyFont: 'font',
          footerFont: 'font',
          titleFont: 'font',
        },
        descriptors: {
          _scriptable: function (t) {
            return 'filter' !== t && 'itemSort' !== t && 'external' !== t;
          },
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: 'animation' },
        },
        additionalOptionScopes: ['interaction'],
      };
      function go(t, e, n, r) {
        var i = t.indexOf(e);
        return -1 === i
          ? (function (t, e, n, r) {
              return (
                'string' === typeof e
                  ? ((n = t.push(e) - 1), r.unshift({ index: n, label: e }))
                  : isNaN(e) && (n = null),
                n
              );
            })(t, e, n, r)
          : i !== t.lastIndexOf(e)
          ? n
          : i;
      }
      var yo = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this, t))._startValue = void 0),
            (r._valueRange = 0),
            (r._addedLabels = []),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'init',
              value: function (t) {
                var e = this._addedLabels;
                if (e.length) {
                  var r,
                    i = this.getLabels(),
                    a = H(e);
                  try {
                    for (a.s(); !(r = a.n()).done; ) {
                      var o = r.value,
                        l = o.index,
                        s = o.label;
                      i[l] === s && i.splice(l, 1);
                    }
                  } catch (u) {
                    a.e(u);
                  } finally {
                    a.f();
                  }
                  this._addedLabels = [];
                }
                j(I(n.prototype), 'init', this).call(this, t);
              },
            },
            {
              key: 'parse',
              value: function (t, e) {
                if (q(t)) return null;
                var n = this.getLabels();
                return (function (t, e) {
                  return null === t ? null : Vt(Math.round(t), 0, e);
                })(
                  (e =
                    isFinite(e) && n[e] === t
                      ? e
                      : go(n, t, et(e, t), this._addedLabels)),
                  n.length - 1
                );
              },
            },
            {
              key: 'determineDataLimits',
              value: function () {
                var t = this.getUserBounds(),
                  e = t.minDefined,
                  n = t.maxDefined,
                  r = this.getMinMax(!0),
                  i = r.min,
                  a = r.max;
                'ticks' === this.options.bounds &&
                  (e || (i = 0), n || (a = this.getLabels().length - 1)),
                  (this.min = i),
                  (this.max = a);
              },
            },
            {
              key: 'buildTicks',
              value: function () {
                var t = this.min,
                  e = this.max,
                  n = this.options.offset,
                  r = [],
                  i = this.getLabels();
                (i = 0 === t && e === i.length - 1 ? i : i.slice(t, e + 1)),
                  (this._valueRange = Math.max(i.length - (n ? 0 : 1), 1)),
                  (this._startValue = this.min - (n ? 0.5 : 0));
                for (var a = t; a <= e; a++) r.push({ value: a });
                return r;
              },
            },
            {
              key: 'getLabelForValue',
              value: function (t) {
                var e = this.getLabels();
                return t >= 0 && t < e.length ? e[t] : t;
              },
            },
            {
              key: 'configure',
              value: function () {
                j(I(n.prototype), 'configure', this).call(this),
                  this.isHorizontal() ||
                    (this._reversePixels = !this._reversePixels);
              },
            },
            {
              key: 'getPixelForValue',
              value: function (t) {
                return (
                  'number' !== typeof t && (t = this.parse(t)),
                  null === t
                    ? NaN
                    : this.getPixelForDecimal(
                        (t - this._startValue) / this._valueRange
                      )
                );
              },
            },
            {
              key: 'getPixelForTick',
              value: function (t) {
                var e = this.ticks;
                return t < 0 || t > e.length - 1
                  ? null
                  : this.getPixelForValue(e[t].value);
              },
            },
            {
              key: 'getValueForPixel',
              value: function (t) {
                return Math.round(
                  this._startValue +
                    this.getDecimalForPixel(t) * this._valueRange
                );
              },
            },
            {
              key: 'getBasePixel',
              value: function () {
                return this.bottom;
              },
            },
          ]),
          n
        );
      })(li);
      function mo(t, e) {
        var n,
          r,
          i,
          a,
          o = [],
          l = t.bounds,
          s = t.step,
          u = t.min,
          c = t.max,
          f = t.precision,
          h = t.count,
          d = t.maxTicks,
          p = t.maxDigits,
          v = t.includeBounds,
          g = s || 1,
          y = d - 1,
          m = e.min,
          b = e.max,
          x = !q(u),
          k = !q(c),
          _ = !q(h),
          w = (b - m) / (p + 1),
          S = Ct((b - m) / y / g) * g;
        if (S < 1e-14 && !x && !k) return [{ value: m }, { value: b }];
        (a = Math.ceil(b / S) - Math.floor(m / S)) > y &&
          (S = Ct((a * S) / y / g) * g),
          q(f) || ((n = Math.pow(10, f)), (S = Math.ceil(S * n) / n)),
          'ticks' === l
            ? ((r = Math.floor(m / S) * S), (i = Math.ceil(b / S) * S))
            : ((r = m), (i = b)),
          x &&
          k &&
          s &&
          (function (t, e) {
            var n = Math.round(t);
            return n - e <= t && n + e >= t;
          })((c - u) / s, S / 1e3)
            ? ((S = (c - u) / (a = Math.round(Math.min((c - u) / S, d)))),
              (r = u),
              (i = c))
            : _
            ? (S = ((i = k ? c : i) - (r = x ? u : r)) / (a = h - 1))
            : (a = At((a = (i - r) / S), Math.round(a), S / 1e3)
                ? Math.round(a)
                : Math.ceil(a));
        var M = Math.max(Rt(S), Rt(r));
        (n = Math.pow(10, q(f) ? M : f)),
          (r = Math.round(r * n) / n),
          (i = Math.round(i * n) / n);
        var E = 0;
        for (
          x &&
          (v && r !== u
            ? (o.push({ value: u }),
              r < u && E++,
              At(Math.round((r + E * S) * n) / n, u, bo(u, w, t)) && E++)
            : r < u && E++);
          E < a;
          ++E
        )
          o.push({ value: Math.round((r + E * S) * n) / n });
        return (
          k && v && i !== c
            ? o.length && At(o[o.length - 1].value, c, bo(c, w, t))
              ? (o[o.length - 1].value = c)
              : o.push({ value: c })
            : (k && i !== c) || o.push({ value: i }),
          o
        );
      }
      function bo(t, e, n) {
        var r = n.horizontal,
          i = Dt(n.minRotation),
          a = (r ? Math.sin(i) : Math.cos(i)) || 0.001,
          o = 0.75 * e * ('' + t).length;
        return Math.min(e / a, o);
      }
      (yo.id = 'category'),
        (yo.defaults = { ticks: { callback: yo.prototype.getLabelForValue } });
      var xo = (function (t) {
          V(n, t);
          var e = W(n);
          function n(t) {
            var r;
            return (
              Y(this, n),
              ((r = e.call(this, t)).start = void 0),
              (r.end = void 0),
              (r._startValue = void 0),
              (r._endValue = void 0),
              (r._valueRange = 0),
              r
            );
          }
          return (
            X(n, [
              {
                key: 'parse',
                value: function (t, e) {
                  return q(t) ||
                    (('number' === typeof t || t instanceof Number) &&
                      !isFinite(+t))
                    ? null
                    : +t;
                },
              },
              {
                key: 'handleTickRangeOptions',
                value: function () {
                  var t = this.options.beginAtZero,
                    e = this.getUserBounds(),
                    n = e.minDefined,
                    r = e.maxDefined,
                    i = this.min,
                    a = this.max,
                    o = function (t) {
                      return (i = n ? i : t);
                    },
                    l = function (t) {
                      return (a = r ? a : t);
                    };
                  if (t) {
                    var s = Pt(i),
                      u = Pt(a);
                    s < 0 && u < 0 ? l(0) : s > 0 && u > 0 && o(0);
                  }
                  if (i === a) {
                    var c = 1;
                    (a >= Number.MAX_SAFE_INTEGER ||
                      i <= Number.MIN_SAFE_INTEGER) &&
                      (c = Math.abs(0.05 * a)),
                      l(a + c),
                      t || o(i - c);
                  }
                  (this.min = i), (this.max = a);
                },
              },
              {
                key: 'getTickLimit',
                value: function () {
                  var t,
                    e = this.options.ticks,
                    n = e.maxTicksLimit,
                    r = e.stepSize;
                  return (
                    r
                      ? (t =
                          Math.ceil(this.max / r) -
                          Math.floor(this.min / r) +
                          1) > 1e3 &&
                        (console.warn(
                          'scales.'
                            .concat(this.id, '.ticks.stepSize: ')
                            .concat(r, ' would result generating up to ')
                            .concat(t, ' ticks. Limiting to 1000.')
                        ),
                        (t = 1e3))
                      : ((t = this.computeTickLimit()), (n = n || 11)),
                    n && (t = Math.min(n, t)),
                    t
                  );
                },
              },
              {
                key: 'computeTickLimit',
                value: function () {
                  return Number.POSITIVE_INFINITY;
                },
              },
              {
                key: 'buildTicks',
                value: function () {
                  var t = this.options,
                    e = t.ticks,
                    n = this.getTickLimit(),
                    r = mo(
                      {
                        maxTicks: (n = Math.max(2, n)),
                        bounds: t.bounds,
                        min: t.min,
                        max: t.max,
                        precision: e.precision,
                        step: e.stepSize,
                        count: e.count,
                        maxDigits: this._maxDigits(),
                        horizontal: this.isHorizontal(),
                        minRotation: e.minRotation || 0,
                        includeBounds: !1 !== e.includeBounds,
                      },
                      this._range || this
                    );
                  return (
                    'ticks' === t.bounds && Tt(r, this, 'value'),
                    t.reverse
                      ? (r.reverse(),
                        (this.start = this.max),
                        (this.end = this.min))
                      : ((this.start = this.min), (this.end = this.max)),
                    r
                  );
                },
              },
              {
                key: 'configure',
                value: function () {
                  var t = this.ticks,
                    e = this.min,
                    r = this.max;
                  if (
                    (j(I(n.prototype), 'configure', this).call(this),
                    this.options.offset && t.length)
                  ) {
                    var i = (r - e) / Math.max(t.length - 1, 1) / 2;
                    (e -= i), (r += i);
                  }
                  (this._startValue = e),
                    (this._endValue = r),
                    (this._valueRange = r - e);
                },
              },
              {
                key: 'getLabelForValue',
                value: function (t) {
                  return ar(
                    t,
                    this.chart.options.locale,
                    this.options.ticks.format
                  );
                },
              },
            ]),
            n
          );
        })(li),
        ko = (function (t) {
          V(n, t);
          var e = W(n);
          function n() {
            return Y(this, n), e.apply(this, arguments);
          }
          return (
            X(n, [
              {
                key: 'determineDataLimits',
                value: function () {
                  var t = this.getMinMax(!0),
                    e = t.min,
                    n = t.max;
                  (this.min = J(e) ? e : 0),
                    (this.max = J(n) ? n : 1),
                    this.handleTickRangeOptions();
                },
              },
              {
                key: 'computeTickLimit',
                value: function () {
                  var t = this.isHorizontal(),
                    e = t ? this.width : this.height,
                    n = Dt(this.options.ticks.minRotation),
                    r = (t ? Math.sin(n) : Math.cos(n)) || 0.001,
                    i = this._resolveTickFontOptions(0);
                  return Math.ceil(e / Math.min(40, i.lineHeight / r));
                },
              },
              {
                key: 'getPixelForValue',
                value: function (t) {
                  return null === t
                    ? NaN
                    : this.getPixelForDecimal(
                        (t - this._startValue) / this._valueRange
                      );
                },
              },
              {
                key: 'getValueForPixel',
                value: function (t) {
                  return (
                    this._startValue +
                    this.getDecimalForPixel(t) * this._valueRange
                  );
                },
              },
            ]),
            n
          );
        })(xo);
      function _o(t) {
        return 1 === t / Math.pow(10, Math.floor(Et(t)));
      }
      (ko.id = 'linear'),
        (ko.defaults = { ticks: { callback: Kr.formatters.numeric } });
      var wo = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this, t)).start = void 0),
            (r.end = void 0),
            (r._startValue = void 0),
            (r._valueRange = 0),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'parse',
              value: function (t, e) {
                var n = xo.prototype.parse.apply(this, [t, e]);
                if (0 !== n) return J(n) && n > 0 ? n : null;
                this._zero = !0;
              },
            },
            {
              key: 'determineDataLimits',
              value: function () {
                var t = this.getMinMax(!0),
                  e = t.min,
                  n = t.max;
                (this.min = J(e) ? Math.max(0, e) : null),
                  (this.max = J(n) ? Math.max(0, n) : null),
                  this.options.beginAtZero && (this._zero = !0),
                  this.handleTickRangeOptions();
              },
            },
            {
              key: 'handleTickRangeOptions',
              value: function () {
                var t = this.getUserBounds(),
                  e = t.minDefined,
                  n = t.maxDefined,
                  r = this.min,
                  i = this.max,
                  a = function (t) {
                    return (r = e ? r : t);
                  },
                  o = function (t) {
                    return (i = n ? i : t);
                  },
                  l = function (t, e) {
                    return Math.pow(10, Math.floor(Et(t)) + e);
                  };
                r === i && (r <= 0 ? (a(1), o(10)) : (a(l(r, -1)), o(l(i, 1)))),
                  r <= 0 && a(l(i, -1)),
                  i <= 0 && o(l(r, 1)),
                  this._zero &&
                    this.min !== this._suggestedMin &&
                    r === l(this.min, 0) &&
                    a(l(r, -1)),
                  (this.min = r),
                  (this.max = i);
              },
            },
            {
              key: 'buildTicks',
              value: function () {
                var t = this.options,
                  e = (function (t, e) {
                    var n = Math.floor(Et(e.max)),
                      r = Math.ceil(e.max / Math.pow(10, n)),
                      i = [],
                      a = tt(t.min, Math.pow(10, Math.floor(Et(e.min)))),
                      o = Math.floor(Et(a)),
                      l = Math.floor(a / Math.pow(10, o)),
                      s = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
                    do {
                      i.push({ value: a, major: _o(a) }),
                        10 === ++l && ((l = 1), (s = ++o >= 0 ? 1 : s)),
                        (a = Math.round(l * Math.pow(10, o) * s) / s);
                    } while (o < n || (o === n && l < r));
                    var u = tt(t.max, a);
                    return i.push({ value: u, major: _o(a) }), i;
                  })({ min: this._userMin, max: this._userMax }, this);
                return (
                  'ticks' === t.bounds && Tt(e, this, 'value'),
                  t.reverse
                    ? (e.reverse(),
                      (this.start = this.max),
                      (this.end = this.min))
                    : ((this.start = this.min), (this.end = this.max)),
                  e
                );
              },
            },
            {
              key: 'getLabelForValue',
              value: function (t) {
                return void 0 === t
                  ? '0'
                  : ar(t, this.chart.options.locale, this.options.ticks.format);
              },
            },
            {
              key: 'configure',
              value: function () {
                var t = this.min;
                j(I(n.prototype), 'configure', this).call(this),
                  (this._startValue = Et(t)),
                  (this._valueRange = Et(this.max) - Et(t));
              },
            },
            {
              key: 'getPixelForValue',
              value: function (t) {
                return (
                  (void 0 !== t && 0 !== t) || (t = this.min),
                  null === t || isNaN(t)
                    ? NaN
                    : this.getPixelForDecimal(
                        t === this.min
                          ? 0
                          : (Et(t) - this._startValue) / this._valueRange
                      )
                );
              },
            },
            {
              key: 'getValueForPixel',
              value: function (t) {
                var e = this.getDecimalForPixel(t);
                return Math.pow(10, this._startValue + e * this._valueRange);
              },
            },
          ]),
          n
        );
      })(li);
      function So(t) {
        var e = t.ticks;
        if (e.display && t.display) {
          var n = gn(e.backdropPadding);
          return et(e.font && e.font.size, $e.font.size) + n.height;
        }
        return 0;
      }
      function Mo(t, e, n, r, i) {
        return t === r || t === i
          ? { start: e - n / 2, end: e + n / 2 }
          : t < r || t > i
          ? { start: e - n, end: e }
          : { start: e, end: e + n };
      }
      function Eo(t) {
        for (
          var e,
            n,
            r,
            i = {
              l: t.left + t._padding.left,
              r: t.right - t._padding.right,
              t: t.top + t._padding.top,
              b: t.bottom - t._padding.bottom,
            },
            a = Object.assign({}, i),
            o = [],
            l = [],
            s = t._pointLabels.length,
            u = t.options.pointLabels,
            c = u.centerPointLabels ? mt / s : 0,
            f = 0;
          f < s;
          f++
        ) {
          var h = u.setContext(t.getPointLabelContext(f));
          l[f] = h.padding;
          var d = t.getPointPosition(f, t.drawingArea + l[f], c),
            p = yn(h.font),
            v =
              ((e = t.ctx),
              (n = p),
              (r = Z((r = t._pointLabels[f])) ? r : [r]),
              { w: Ge(e, n.string, r), h: r.length * n.lineHeight });
          o[f] = v;
          var g = jt(t.getIndexAngle(f) + c),
            y = Math.round(Lt(g));
          Po(a, i, g, Mo(y, d.x, v.w, 0, 180), Mo(y, d.y, v.h, 90, 270));
        }
        t.setCenterPoint(i.l - a.l, a.r - i.r, i.t - a.t, a.b - i.b),
          (t._pointLabelItems = (function (t, e, n) {
            for (
              var r = [],
                i = t._pointLabels.length,
                a = t.options,
                o = So(a) / 2,
                l = t.drawingArea,
                s = a.pointLabels.centerPointLabels ? mt / i : 0,
                u = 0;
              u < i;
              u++
            ) {
              var c = t.getPointPosition(u, l + o + n[u], s),
                f = Math.round(Lt(jt(c.angle + wt))),
                h = e[u],
                d = Ao(c.y, h.h, f),
                p = Co(f),
                v = Oo(c.x, h.w, p);
              r.push({
                x: c.x,
                y: d,
                textAlign: p,
                left: v,
                top: d,
                right: v + h.w,
                bottom: d + h.h,
              });
            }
            return r;
          })(t, o, l));
      }
      function Po(t, e, n, r, i) {
        var a = Math.abs(Math.sin(n)),
          o = Math.abs(Math.cos(n)),
          l = 0,
          s = 0;
        r.start < e.l
          ? ((l = (e.l - r.start) / a), (t.l = Math.min(t.l, e.l - l)))
          : r.end > e.r &&
            ((l = (r.end - e.r) / a), (t.r = Math.max(t.r, e.r + l))),
          i.start < e.t
            ? ((s = (e.t - i.start) / o), (t.t = Math.min(t.t, e.t - s)))
            : i.end > e.b &&
              ((s = (i.end - e.b) / o), (t.b = Math.max(t.b, e.b + s)));
      }
      function Co(t) {
        return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right';
      }
      function Oo(t, e, n) {
        return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t;
      }
      function Ao(t, e, n) {
        return (
          90 === n || 270 === n
            ? (t -= e / 2)
            : (n > 270 || n < 90) && (t -= e),
          t
        );
      }
      function To(t, e, n, r) {
        var i = t.ctx;
        if (n) i.arc(t.xCenter, t.yCenter, e, 0, bt);
        else {
          var a = t.getPointPosition(0, e);
          i.moveTo(a.x, a.y);
          for (var o = 1; o < r; o++)
            (a = t.getPointPosition(o, e)), i.lineTo(a.x, a.y);
        }
      }
      (wo.id = 'logarithmic'),
        (wo.defaults = {
          ticks: {
            callback: Kr.formatters.logarithmic,
            major: { enabled: !0 },
          },
        });
      var Do = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this, t)).xCenter = void 0),
            (r.yCenter = void 0),
            (r.drawingArea = void 0),
            (r._pointLabels = []),
            (r._pointLabelItems = []),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'setDimensions',
              value: function () {
                var t = (this._padding = gn(So(this.options) / 2)),
                  e = (this.width = this.maxWidth - t.width),
                  n = (this.height = this.maxHeight - t.height);
                (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
                  (this.yCenter = Math.floor(this.top + n / 2 + t.top)),
                  (this.drawingArea = Math.floor(Math.min(e, n) / 2));
              },
            },
            {
              key: 'determineDataLimits',
              value: function () {
                var t = this.getMinMax(!1),
                  e = t.min,
                  n = t.max;
                (this.min = J(e) && !isNaN(e) ? e : 0),
                  (this.max = J(n) && !isNaN(n) ? n : 0),
                  this.handleTickRangeOptions();
              },
            },
            {
              key: 'computeTickLimit',
              value: function () {
                return Math.ceil(this.drawingArea / So(this.options));
              },
            },
            {
              key: 'generateTickLabels',
              value: function (t) {
                var e = this;
                xo.prototype.generateTickLabels.call(this, t),
                  (this._pointLabels = this.getLabels()
                    .map(function (t, n) {
                      var r = rt(e.options.pointLabels.callback, [t, n], e);
                      return r || 0 === r ? r : '';
                    })
                    .filter(function (t, n) {
                      return e.chart.getDataVisibility(n);
                    }));
              },
            },
            {
              key: 'fit',
              value: function () {
                var t = this.options;
                t.display && t.pointLabels.display
                  ? Eo(this)
                  : this.setCenterPoint(0, 0, 0, 0);
              },
            },
            {
              key: 'setCenterPoint',
              value: function (t, e, n, r) {
                (this.xCenter += Math.floor((t - e) / 2)),
                  (this.yCenter += Math.floor((n - r) / 2)),
                  (this.drawingArea -= Math.min(
                    this.drawingArea / 2,
                    Math.max(t, e, n, r)
                  ));
              },
            },
            {
              key: 'getIndexAngle',
              value: function (t) {
                return jt(
                  t * (bt / (this._pointLabels.length || 1)) +
                    Dt(this.options.startAngle || 0)
                );
              },
            },
            {
              key: 'getDistanceFromCenterForValue',
              value: function (t) {
                if (q(t)) return NaN;
                var e = this.drawingArea / (this.max - this.min);
                return this.options.reverse
                  ? (this.max - t) * e
                  : (t - this.min) * e;
              },
            },
            {
              key: 'getValueForDistanceFromCenter',
              value: function (t) {
                if (q(t)) return NaN;
                var e = t / (this.drawingArea / (this.max - this.min));
                return this.options.reverse ? this.max - e : this.min + e;
              },
            },
            {
              key: 'getPointLabelContext',
              value: function (t) {
                var e = this._pointLabels || [];
                if (t >= 0 && t < e.length) {
                  var n = e[t];
                  return (function (t, e, n) {
                    return bn(t, { label: n, index: e, type: 'pointLabel' });
                  })(this.getContext(), t, n);
                }
              },
            },
            {
              key: 'getPointPosition',
              value: function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  r = this.getIndexAngle(t) - wt + n;
                return {
                  x: Math.cos(r) * e + this.xCenter,
                  y: Math.sin(r) * e + this.yCenter,
                  angle: r,
                };
              },
            },
            {
              key: 'getPointPositionForValue',
              value: function (t, e) {
                return this.getPointPosition(
                  t,
                  this.getDistanceFromCenterForValue(e)
                );
              },
            },
            {
              key: 'getBasePosition',
              value: function (t) {
                return this.getPointPositionForValue(
                  t || 0,
                  this.getBaseValue()
                );
              },
            },
            {
              key: 'getPointLabelPosition',
              value: function (t) {
                var e = this._pointLabelItems[t];
                return {
                  left: e.left,
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                };
              },
            },
            {
              key: 'drawBackground',
              value: function () {
                var t = this.options,
                  e = t.backgroundColor,
                  n = t.grid.circular;
                if (e) {
                  var r = this.ctx;
                  r.save(),
                    r.beginPath(),
                    To(
                      this,
                      this.getDistanceFromCenterForValue(this._endValue),
                      n,
                      this._pointLabels.length
                    ),
                    r.closePath(),
                    (r.fillStyle = e),
                    r.fill(),
                    r.restore();
                }
              },
            },
            {
              key: 'drawGrid',
              value: function () {
                var t,
                  e,
                  n,
                  r = this,
                  i = this.ctx,
                  a = this.options,
                  o = a.angleLines,
                  l = a.grid,
                  s = this._pointLabels.length;
                if (
                  (a.pointLabels.display &&
                    (function (t, e) {
                      for (
                        var n = t.ctx, r = t.options.pointLabels, i = e - 1;
                        i >= 0;
                        i--
                      ) {
                        var a = r.setContext(t.getPointLabelContext(i)),
                          o = yn(a.font),
                          l = t._pointLabelItems[i],
                          s = l.x,
                          u = l.y,
                          c = l.textAlign,
                          f = l.left,
                          h = l.top,
                          d = l.right,
                          p = l.bottom,
                          v = a.backdropColor;
                        if (!q(v)) {
                          var g = vn(a.borderRadius),
                            y = gn(a.backdropPadding);
                          n.fillStyle = v;
                          var m = f - y.left,
                            b = h - y.top,
                            x = d - f + y.width,
                            k = p - h + y.height;
                          Object.values(g).some(function (t) {
                            return 0 !== t;
                          })
                            ? (n.beginPath(),
                              sn(n, { x: m, y: b, w: x, h: k, radius: g }),
                              n.fill())
                            : n.fillRect(m, b, x, k);
                        }
                        an(n, t._pointLabels[i], s, u + o.lineHeight / 2, o, {
                          color: a.color,
                          textAlign: c,
                          textBaseline: 'middle',
                        });
                      }
                    })(this, s),
                  l.display &&
                    this.ticks.forEach(function (t, n) {
                      if (0 !== n) {
                        e = r.getDistanceFromCenterForValue(t.value);
                        var i = l.setContext(r.getContext(n - 1));
                        !(function (t, e, n, r) {
                          var i = t.ctx,
                            a = e.circular,
                            o = e.color,
                            l = e.lineWidth;
                          (!a && !r) ||
                            !o ||
                            !l ||
                            n < 0 ||
                            (i.save(),
                            (i.strokeStyle = o),
                            (i.lineWidth = l),
                            i.setLineDash(e.borderDash),
                            (i.lineDashOffset = e.borderDashOffset),
                            i.beginPath(),
                            To(t, n, a, r),
                            i.closePath(),
                            i.stroke(),
                            i.restore());
                        })(r, i, e, s);
                      }
                    }),
                  o.display)
                ) {
                  for (i.save(), t = s - 1; t >= 0; t--) {
                    var u = o.setContext(this.getPointLabelContext(t)),
                      c = u.color,
                      f = u.lineWidth;
                    f &&
                      c &&
                      ((i.lineWidth = f),
                      (i.strokeStyle = c),
                      i.setLineDash(u.borderDash),
                      (i.lineDashOffset = u.borderDashOffset),
                      (e = this.getDistanceFromCenterForValue(
                        a.ticks.reverse ? this.min : this.max
                      )),
                      (n = this.getPointPosition(t, e)),
                      i.beginPath(),
                      i.moveTo(this.xCenter, this.yCenter),
                      i.lineTo(n.x, n.y),
                      i.stroke());
                  }
                  i.restore();
                }
              },
            },
            { key: 'drawBorder', value: function () {} },
            {
              key: 'drawLabels',
              value: function () {
                var t = this,
                  e = this.ctx,
                  n = this.options,
                  r = n.ticks;
                if (r.display) {
                  var i,
                    a,
                    o = this.getIndexAngle(0);
                  e.save(),
                    e.translate(this.xCenter, this.yCenter),
                    e.rotate(o),
                    (e.textAlign = 'center'),
                    (e.textBaseline = 'middle'),
                    this.ticks.forEach(function (o, l) {
                      if (0 !== l || n.reverse) {
                        var s = r.setContext(t.getContext(l)),
                          u = yn(s.font);
                        if (
                          ((i = t.getDistanceFromCenterForValue(
                            t.ticks[l].value
                          )),
                          s.showLabelBackdrop)
                        ) {
                          (e.font = u.string),
                            (a = e.measureText(o.label).width),
                            (e.fillStyle = s.backdropColor);
                          var c = gn(s.backdropPadding);
                          e.fillRect(
                            -a / 2 - c.left,
                            -i - u.size / 2 - c.top,
                            a + c.width,
                            u.size + c.height
                          );
                        }
                        an(e, o.label, 0, -i, u, { color: s.color });
                      }
                    }),
                    e.restore();
                }
              },
            },
            { key: 'drawTitle', value: function () {} },
          ]),
          n
        );
      })(xo);
      (Do.id = 'radialLinear'),
        (Do.defaults = {
          display: !0,
          animate: !0,
          position: 'chartArea',
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: Kr.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: function (t) {
              return t;
            },
            padding: 5,
            centerPointLabels: !1,
          },
        }),
        (Do.defaultRoutes = {
          'angleLines.color': 'borderColor',
          'pointLabels.color': 'color',
          'ticks.color': 'color',
        }),
        (Do.descriptors = { angleLines: { _fallback: 'grid' } });
      var Lo = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        Ro = Object.keys(Lo);
      function No(t, e) {
        return t - e;
      }
      function Io(t, e) {
        if (q(e)) return null;
        var n = t._adapter,
          r = t._parseOpts,
          i = r.parser,
          a = r.round,
          o = r.isoWeekday,
          l = e;
        return (
          'function' === typeof i && (l = i(l)),
          J(l) || (l = 'string' === typeof i ? n.parse(l, i) : n.parse(l)),
          null === l
            ? null
            : (a &&
                (l =
                  'week' !== a || (!Ot(o) && !0 !== o)
                    ? n.startOf(l, a)
                    : n.startOf(l, 'isoWeek', o)),
              +l)
        );
      }
      function zo(t, e, n, r) {
        for (var i = Ro.length, a = Ro.indexOf(t); a < i - 1; ++a) {
          var o = Lo[Ro[a]],
            l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
          if (o.common && Math.ceil((n - e) / (l * o.size)) <= r) return Ro[a];
        }
        return Ro[i - 1];
      }
      function jo(t, e, n) {
        if (n) {
          if (n.length) {
            var r = Wt(n, e),
              i = r.lo,
              a = r.hi;
            t[n[i] >= e ? n[i] : n[a]] = !0;
          }
        } else t[e] = !0;
      }
      function Fo(t, e, n) {
        var r,
          i,
          a = [],
          o = {},
          l = e.length;
        for (r = 0; r < l; ++r)
          (o[(i = e[r])] = r), a.push({ value: i, major: !1 });
        return 0 !== l && n
          ? (function (t, e, n, r) {
              var i,
                a,
                o = t._adapter,
                l = +o.startOf(e[0].value, r),
                s = e[e.length - 1].value;
              for (i = l; i <= s; i = +o.add(i, 1, r))
                (a = n[i]) >= 0 && (e[a].major = !0);
              return e;
            })(t, a, o, n)
          : a;
      }
      var Vo = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this, t))._cache = { data: [], labels: [], all: [] }),
            (r._unit = 'day'),
            (r._majorUnit = void 0),
            (r._offsets = {}),
            (r._normalized = !1),
            (r._parseOpts = void 0),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'init',
              value: function (t, e) {
                var r = t.time || (t.time = {}),
                  i = (this._adapter = new pi._date(t.adapters.date));
                i.init(e),
                  ct(r.displayFormats, i.formats()),
                  (this._parseOpts = {
                    parser: r.parser,
                    round: r.round,
                    isoWeekday: r.isoWeekday,
                  }),
                  j(I(n.prototype), 'init', this).call(this, t),
                  (this._normalized = e.normalized);
              },
            },
            {
              key: 'parse',
              value: function (t, e) {
                return void 0 === t ? null : Io(this, t);
              },
            },
            {
              key: 'beforeLayout',
              value: function () {
                j(I(n.prototype), 'beforeLayout', this).call(this),
                  (this._cache = { data: [], labels: [], all: [] });
              },
            },
            {
              key: 'determineDataLimits',
              value: function () {
                var t = this.options,
                  e = this._adapter,
                  n = t.time.unit || 'day',
                  r = this.getUserBounds(),
                  i = r.min,
                  a = r.max,
                  o = r.minDefined,
                  l = r.maxDefined;
                function s(t) {
                  o || isNaN(t.min) || (i = Math.min(i, t.min)),
                    l || isNaN(t.max) || (a = Math.max(a, t.max));
                }
                (o && l) ||
                  (s(this._getLabelBounds()),
                  ('ticks' === t.bounds && 'labels' === t.ticks.source) ||
                    s(this.getMinMax(!1))),
                  (i = J(i) && !isNaN(i) ? i : +e.startOf(Date.now(), n)),
                  (a = J(a) && !isNaN(a) ? a : +e.endOf(Date.now(), n) + 1),
                  (this.min = Math.min(i, a - 1)),
                  (this.max = Math.max(i + 1, a));
              },
            },
            {
              key: '_getLabelBounds',
              value: function () {
                var t = this.getLabelTimestamps(),
                  e = Number.POSITIVE_INFINITY,
                  n = Number.NEGATIVE_INFINITY;
                return (
                  t.length && ((e = t[0]), (n = t[t.length - 1])),
                  { min: e, max: n }
                );
              },
            },
            {
              key: 'buildTicks',
              value: function () {
                var t = this.options,
                  e = t.time,
                  n = t.ticks,
                  r =
                    'labels' === n.source
                      ? this.getLabelTimestamps()
                      : this._generate();
                'ticks' === t.bounds &&
                  r.length &&
                  ((this.min = this._userMin || r[0]),
                  (this.max = this._userMax || r[r.length - 1]));
                var i = this.min,
                  a = (function (t, e, n) {
                    for (var r = 0, i = t.length; r < i && t[r] < e; ) r++;
                    for (; i > r && t[i - 1] > n; ) i--;
                    return r > 0 || i < t.length ? t.slice(r, i) : t;
                  })(r, i, this.max);
                return (
                  (this._unit =
                    e.unit ||
                    (n.autoSkip
                      ? zo(
                          e.minUnit,
                          this.min,
                          this.max,
                          this._getLabelCapacity(i)
                        )
                      : (function (t, e, n, r, i) {
                          for (var a = Ro.length - 1; a >= Ro.indexOf(n); a--) {
                            var o = Ro[a];
                            if (
                              Lo[o].common &&
                              t._adapter.diff(i, r, o) >= e - 1
                            )
                              return o;
                          }
                          return Ro[n ? Ro.indexOf(n) : 0];
                        })(this, a.length, e.minUnit, this.min, this.max))),
                  (this._majorUnit =
                    n.major.enabled && 'year' !== this._unit
                      ? (function (t) {
                          for (
                            var e = Ro.indexOf(t) + 1, n = Ro.length;
                            e < n;
                            ++e
                          )
                            if (Lo[Ro[e]].common) return Ro[e];
                        })(this._unit)
                      : void 0),
                  this.initOffsets(r),
                  t.reverse && a.reverse(),
                  Fo(this, a, this._majorUnit)
                );
              },
            },
            {
              key: 'afterAutoSkip',
              value: function () {
                this.options.offsetAfterAutoskip &&
                  this.initOffsets(
                    this.ticks.map(function (t) {
                      return +t.value;
                    })
                  );
              },
            },
            {
              key: 'initOffsets',
              value: function (t) {
                var e,
                  n,
                  r = 0,
                  i = 0;
                this.options.offset &&
                  t.length &&
                  ((e = this.getDecimalForValue(t[0])),
                  (r =
                    1 === t.length
                      ? 1 - e
                      : (this.getDecimalForValue(t[1]) - e) / 2),
                  (n = this.getDecimalForValue(t[t.length - 1])),
                  (i =
                    1 === t.length
                      ? n
                      : (n - this.getDecimalForValue(t[t.length - 2])) / 2));
                var a = t.length < 3 ? 0.5 : 0.25;
                (r = Vt(r, 0, a)),
                  (i = Vt(i, 0, a)),
                  (this._offsets = {
                    start: r,
                    end: i,
                    factor: 1 / (r + 1 + i),
                  });
              },
            },
            {
              key: '_generate',
              value: function () {
                var t,
                  e,
                  n = this._adapter,
                  r = this.min,
                  i = this.max,
                  a = this.options,
                  o = a.time,
                  l = o.unit || zo(o.minUnit, r, i, this._getLabelCapacity(r)),
                  s = et(o.stepSize, 1),
                  u = 'week' === l && o.isoWeekday,
                  c = Ot(u) || !0 === u,
                  f = {},
                  h = r;
                if (
                  (c && (h = +n.startOf(h, 'isoWeek', u)),
                  (h = +n.startOf(h, c ? 'day' : l)),
                  n.diff(i, r, l) > 1e5 * s)
                )
                  throw new Error(
                    r +
                      ' and ' +
                      i +
                      ' are too far apart with stepSize of ' +
                      s +
                      ' ' +
                      l
                  );
                var d = 'data' === a.ticks.source && this.getDataTimestamps();
                for (t = h, e = 0; t < i; t = +n.add(t, s, l), e++) jo(f, t, d);
                return (
                  (t !== i && 'ticks' !== a.bounds && 1 !== e) || jo(f, t, d),
                  Object.keys(f)
                    .sort(function (t, e) {
                      return t - e;
                    })
                    .map(function (t) {
                      return +t;
                    })
                );
              },
            },
            {
              key: 'getLabelForValue',
              value: function (t) {
                var e = this._adapter,
                  n = this.options.time;
                return n.tooltipFormat
                  ? e.format(t, n.tooltipFormat)
                  : e.format(t, n.displayFormats.datetime);
              },
            },
            {
              key: '_tickFormatFunction',
              value: function (t, e, n, r) {
                var i = this.options,
                  a = i.time.displayFormats,
                  o = this._unit,
                  l = this._majorUnit,
                  s = o && a[o],
                  u = l && a[l],
                  c = n[e],
                  f = l && u && c && c.major,
                  h = this._adapter.format(t, r || (f ? u : s)),
                  d = i.ticks.callback;
                return d ? rt(d, [h, e, n], this) : h;
              },
            },
            {
              key: 'generateTickLabels',
              value: function (t) {
                var e, n, r;
                for (e = 0, n = t.length; e < n; ++e)
                  (r = t[e]).label = this._tickFormatFunction(r.value, e, t);
              },
            },
            {
              key: 'getDecimalForValue',
              value: function (t) {
                return null === t
                  ? NaN
                  : (t - this.min) / (this.max - this.min);
              },
            },
            {
              key: 'getPixelForValue',
              value: function (t) {
                var e = this._offsets,
                  n = this.getDecimalForValue(t);
                return this.getPixelForDecimal((e.start + n) * e.factor);
              },
            },
            {
              key: 'getValueForPixel',
              value: function (t) {
                var e = this._offsets,
                  n = this.getDecimalForPixel(t) / e.factor - e.end;
                return this.min + n * (this.max - this.min);
              },
            },
            {
              key: '_getLabelSize',
              value: function (t) {
                var e = this.options.ticks,
                  n = this.ctx.measureText(t).width,
                  r = Dt(this.isHorizontal() ? e.maxRotation : e.minRotation),
                  i = Math.cos(r),
                  a = Math.sin(r),
                  o = this._resolveTickFontOptions(0).size;
                return { w: n * i + o * a, h: n * a + o * i };
              },
            },
            {
              key: '_getLabelCapacity',
              value: function (t) {
                var e = this.options.time,
                  n = e.displayFormats,
                  r = n[e.unit] || n.millisecond,
                  i = this._tickFormatFunction(
                    t,
                    0,
                    Fo(this, [t], this._majorUnit),
                    r
                  ),
                  a = this._getLabelSize(i),
                  o =
                    Math.floor(
                      this.isHorizontal() ? this.width / a.w : this.height / a.h
                    ) - 1;
                return o > 0 ? o : 1;
              },
            },
            {
              key: 'getDataTimestamps',
              value: function () {
                var t,
                  e,
                  n = this._cache.data || [];
                if (n.length) return n;
                var r = this.getMatchingVisibleMetas();
                if (this._normalized && r.length)
                  return (this._cache.data =
                    r[0].controller.getAllParsedValues(this));
                for (t = 0, e = r.length; t < e; ++t)
                  n = n.concat(r[t].controller.getAllParsedValues(this));
                return (this._cache.data = this.normalize(n));
              },
            },
            {
              key: 'getLabelTimestamps',
              value: function () {
                var t,
                  e,
                  n = this._cache.labels || [];
                if (n.length) return n;
                var r = this.getLabels();
                for (t = 0, e = r.length; t < e; ++t) n.push(Io(this, r[t]));
                return (this._cache.labels = this._normalized
                  ? n
                  : this.normalize(n));
              },
            },
            {
              key: 'normalize',
              value: function (t) {
                return Xt(t.sort(No));
              },
            },
          ]),
          n
        );
      })(li);
      function Bo(t, e, n) {
        var r,
          i,
          a,
          o,
          l = 0,
          s = t.length - 1;
        if (n) {
          if (e >= t[l].pos && e <= t[s].pos) {
            var u = Ht(t, 'pos', e);
            (l = u.lo), (s = u.hi);
          }
          var c = t[l];
          (r = c.pos), (a = c.time);
          var f = t[s];
          (i = f.pos), (o = f.time);
        } else {
          if (e >= t[l].time && e <= t[s].time) {
            var h = Ht(t, 'time', e);
            (l = h.lo), (s = h.hi);
          }
          var d = t[l];
          (r = d.time), (a = d.pos);
          var p = t[s];
          (i = p.time), (o = p.pos);
        }
        var v = i - r;
        return v ? a + ((o - a) * (e - r)) / v : a;
      }
      (Vo.id = 'time'),
        (Vo.defaults = {
          bounds: 'data',
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: 'millisecond',
            displayFormats: {},
          },
          ticks: { source: 'auto', major: { enabled: !1 } },
        });
      var Wo = (function (t) {
        V(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return (
            Y(this, n),
            ((r = e.call(this, t))._table = []),
            (r._minPos = void 0),
            (r._tableRange = void 0),
            r
          );
        }
        return (
          X(n, [
            {
              key: 'initOffsets',
              value: function () {
                var t = this._getTimestampsForTable(),
                  e = (this._table = this.buildLookupTable(t));
                (this._minPos = Bo(e, this.min)),
                  (this._tableRange = Bo(e, this.max) - this._minPos),
                  j(I(n.prototype), 'initOffsets', this).call(this, t);
              },
            },
            {
              key: 'buildLookupTable',
              value: function (t) {
                var e,
                  n,
                  r,
                  i,
                  a,
                  o = this.min,
                  l = this.max,
                  s = [],
                  u = [];
                for (e = 0, n = t.length; e < n; ++e)
                  (i = t[e]) >= o && i <= l && s.push(i);
                if (s.length < 2)
                  return [
                    { time: o, pos: 0 },
                    { time: l, pos: 1 },
                  ];
                for (e = 0, n = s.length; e < n; ++e)
                  (a = s[e + 1]),
                    (r = s[e - 1]),
                    (i = s[e]),
                    Math.round((a + r) / 2) !== i &&
                      u.push({ time: i, pos: e / (n - 1) });
                return u;
              },
            },
            {
              key: '_getTimestampsForTable',
              value: function () {
                var t = this._cache.all || [];
                if (t.length) return t;
                var e = this.getDataTimestamps(),
                  n = this.getLabelTimestamps();
                return (
                  (t =
                    e.length && n.length
                      ? this.normalize(e.concat(n))
                      : e.length
                      ? e
                      : n),
                  (t = this._cache.all = t)
                );
              },
            },
            {
              key: 'getDecimalForValue',
              value: function (t) {
                return (Bo(this._table, t) - this._minPos) / this._tableRange;
              },
            },
            {
              key: 'getValueForPixel',
              value: function (t) {
                var e = this._offsets,
                  n = this.getDecimalForPixel(t) / e.factor - e.end;
                return Bo(this._table, n * this._tableRange + this._minPos, !0);
              },
            },
          ]),
          n
        );
      })(Vo);
      (Wo.id = 'timeseries'), (Wo.defaults = Vo.defaults);
      function Ho(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              a = Object.keys(t);
            for (r = 0; r < a.length; r++)
              (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var Uo = [
          'height',
          'width',
          'redraw',
          'datasetIdKey',
          'type',
          'data',
          'options',
          'plugins',
          'fallbackContent',
          'updateMode',
        ],
        Yo = 'label';
      function $o(t, e) {
        'function' === typeof t ? t(e) : t && (t.current = e);
      }
      function Xo(t, e) {
        t.labels = e;
      }
      function Go(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Yo,
          r = [];
        t.datasets = e.map(function (e) {
          var i = t.datasets.find(function (t) {
            return t[n] === e[n];
          });
          return i && e.data && !r.includes(i)
            ? (r.push(i), Object.assign(i, e), i)
            : R({}, e);
        });
      }
      function Qo(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yo,
          n = { labels: [], datasets: [] };
        return Xo(n, t.labels), Go(n, t.datasets, e), n;
      }
      function qo(e, n) {
        var r = e.height,
          i = void 0 === r ? 150 : r,
          a = e.width,
          o = void 0 === a ? 300 : a,
          l = e.redraw,
          s = void 0 !== l && l,
          u = e.datasetIdKey,
          c = e.type,
          f = e.data,
          h = e.options,
          d = e.plugins,
          p = void 0 === d ? [] : d,
          v = e.fallbackContent,
          g = e.updateMode,
          y = Ho(e, Uo),
          m = (0, t.useRef)(null),
          b = (0, t.useRef)(),
          x = function () {
            m.current &&
              ((b.current = new Sa(m.current, {
                type: c,
                data: Qo(f, u),
                options: h && R({}, h),
                plugins: p,
              })),
              $o(n, b.current));
          },
          k = function () {
            $o(n, null), b.current && (b.current.destroy(), (b.current = null));
          };
        return (
          (0, t.useEffect)(
            function () {
              var t, e;
              !s &&
                b.current &&
                h &&
                ((t = b.current), (e = h), Object.assign(t.options, e));
            },
            [s, h]
          ),
          (0, t.useEffect)(
            function () {
              !s && b.current && Xo(b.current.config.data, f.labels);
            },
            [s, f.labels]
          ),
          (0, t.useEffect)(
            function () {
              !s &&
                b.current &&
                f.datasets &&
                Go(b.current.config.data, f.datasets, u);
            },
            [s, f.datasets]
          ),
          (0, t.useEffect)(
            function () {
              b.current && (s ? (k(), setTimeout(x)) : b.current.update(g));
            },
            [s, h, f.labels, f.datasets, g]
          ),
          (0, t.useEffect)(
            function () {
              b.current && (k(), setTimeout(x));
            },
            [c]
          ),
          (0, t.useEffect)(function () {
            return (
              x(),
              function () {
                return k();
              }
            );
          }, []),
          t.createElement(
            'canvas',
            Object.assign({ ref: m, role: 'img', height: i, width: o }, y),
            v
          )
        );
      }
      var Zo = (0, t.forwardRef)(qo);
      function Ko(e, n) {
        return (
          Sa.register(n),
          (0, t.forwardRef)(function (n, r) {
            return t.createElement(
              Zo,
              Object.assign({}, n, { ref: r, type: e })
            );
          })
        );
      }
      var Jo = Ko('line', $r),
        tl = n(184);
      Sa.register(yo, ko, Ha, Ba, eo, vo, Ja),
        (Sa.defaults.font.family = 'Roboto'),
        (Sa.defaults.font.size = 14),
        (Sa.defaults.color = 'black');
      var el = function (e) {
        var n,
          r,
          i = e.type,
          o = e.label,
          l = e.arrDate,
          s = e.arrTime,
          u = e.yAxis,
          c = e.promise,
          f = e.panel,
          h = _(function (t) {
            return t.selectFile.selectCsv;
          }),
          d = a((0, t.useState)({ datasets: [] }), 2),
          p = d[0],
          v = d[1];
        'amp' === i && ((n = 'rgb(255, 8, 0)'), (r = 10)),
          'volt' === i && ((n = 'rgb(0, 102, 255)'), (r = 45)),
          'watt' === i && ((n = 'rgb(120, 0, 255)'), (r = 300)),
          (0, t.useEffect)(
            function () {
              c.then(function () {
                v({
                  labels: l,
                  datasets: [{ label: o, data: u, borderColor: n }],
                });
              });
            },
            [f, h]
          );
        var g = {
          responsive: !0,
          plugins: {
            tooltip: {
              enabled: !0,
              callbacks: {
                footer: function (t) {
                  var e = t[0].dataIndex;
                  return s[e];
                },
              },
            },
          },
          scales: { y: { max: r, min: 0 } },
        };
        return (0, tl.jsx)('div', {
          className: 'chart',
          children: (0, tl.jsx)(Jo, { data: p, options: g }),
        });
      };
      function nl() {}
      function rl(t) {
        return null == t
          ? nl
          : function () {
              return this.querySelector(t);
            };
      }
      function il(t) {
        return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
      }
      function al() {
        return [];
      }
      function ol(t) {
        return null == t
          ? al
          : function () {
              return this.querySelectorAll(t);
            };
      }
      function ll(t) {
        return function () {
          return this.matches(t);
        };
      }
      function sl(t) {
        return function (e) {
          return e.matches(t);
        };
      }
      var ul = Array.prototype.find;
      function cl() {
        return this.firstElementChild;
      }
      var fl = Array.prototype.filter;
      function hl() {
        return Array.from(this.children);
      }
      function dl(t) {
        return new Array(t.length);
      }
      function pl(t, e) {
        (this.ownerDocument = t.ownerDocument),
          (this.namespaceURI = t.namespaceURI),
          (this._next = null),
          (this._parent = t),
          (this.__data__ = e);
      }
      function vl(t) {
        return function () {
          return t;
        };
      }
      function gl(t, e, n, r, i, a) {
        for (var o, l = 0, s = e.length, u = a.length; l < u; ++l)
          (o = e[l])
            ? ((o.__data__ = a[l]), (r[l] = o))
            : (n[l] = new pl(t, a[l]));
        for (; l < s; ++l) (o = e[l]) && (i[l] = o);
      }
      function yl(t, e, n, r, i, a, o) {
        var l,
          s,
          u,
          c = new Map(),
          f = e.length,
          h = a.length,
          d = new Array(f);
        for (l = 0; l < f; ++l)
          (s = e[l]) &&
            ((d[l] = u = o.call(s, s.__data__, l, e) + ''),
            c.has(u) ? (i[l] = s) : c.set(u, s));
        for (l = 0; l < h; ++l)
          (u = o.call(t, a[l], l, a) + ''),
            (s = c.get(u))
              ? ((r[l] = s), (s.__data__ = a[l]), c.delete(u))
              : (n[l] = new pl(t, a[l]));
        for (l = 0; l < f; ++l) (s = e[l]) && c.get(d[l]) === s && (i[l] = s);
      }
      function ml(t) {
        return t.__data__;
      }
      function bl(t) {
        return 'object' === typeof t && 'length' in t ? t : Array.from(t);
      }
      function xl(t, e) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      pl.prototype = {
        constructor: pl,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, e) {
          return this._parent.insertBefore(t, e);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      };
      var kl = 'http://www.w3.org/1999/xhtml',
        _l = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: kl,
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        };
      function wl(t) {
        var e = (t += ''),
          n = e.indexOf(':');
        return (
          n >= 0 && 'xmlns' !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
          _l.hasOwnProperty(e) ? { space: _l[e], local: t } : t
        );
      }
      function Sl(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function Ml(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function El(t, e) {
        return function () {
          this.setAttribute(t, e);
        };
      }
      function Pl(t, e) {
        return function () {
          this.setAttributeNS(t.space, t.local, e);
        };
      }
      function Cl(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
        };
      }
      function Ol(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n
            ? this.removeAttributeNS(t.space, t.local)
            : this.setAttributeNS(t.space, t.local, n);
        };
      }
      function Al(t) {
        return (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          (t.document && t) ||
          t.defaultView
        );
      }
      function Tl(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function Dl(t, e, n) {
        return function () {
          this.style.setProperty(t, e, n);
        };
      }
      function Ll(t, e, n) {
        return function () {
          var r = e.apply(this, arguments);
          null == r
            ? this.style.removeProperty(t)
            : this.style.setProperty(t, r, n);
        };
      }
      function Rl(t, e) {
        return (
          t.style.getPropertyValue(e) ||
          Al(t).getComputedStyle(t, null).getPropertyValue(e)
        );
      }
      function Nl(t) {
        return function () {
          delete this[t];
        };
      }
      function Il(t, e) {
        return function () {
          this[t] = e;
        };
      }
      function zl(t, e) {
        return function () {
          var n = e.apply(this, arguments);
          null == n ? delete this[t] : (this[t] = n);
        };
      }
      function jl(t) {
        return t.trim().split(/^|\s+/);
      }
      function Fl(t) {
        return t.classList || new Vl(t);
      }
      function Vl(t) {
        (this._node = t), (this._names = jl(t.getAttribute('class') || ''));
      }
      function Bl(t, e) {
        for (var n = Fl(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
      }
      function Wl(t, e) {
        for (var n = Fl(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
      }
      function Hl(t) {
        return function () {
          Bl(this, t);
        };
      }
      function Ul(t) {
        return function () {
          Wl(this, t);
        };
      }
      function Yl(t, e) {
        return function () {
          (e.apply(this, arguments) ? Bl : Wl)(this, t);
        };
      }
      function $l() {
        this.textContent = '';
      }
      function Xl(t) {
        return function () {
          this.textContent = t;
        };
      }
      function Gl(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.textContent = null == e ? '' : e;
        };
      }
      function Ql() {
        this.innerHTML = '';
      }
      function ql(t) {
        return function () {
          this.innerHTML = t;
        };
      }
      function Zl(t) {
        return function () {
          var e = t.apply(this, arguments);
          this.innerHTML = null == e ? '' : e;
        };
      }
      function Kl() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function Jl() {
        this.previousSibling &&
          this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function ts(t) {
        return function () {
          var e = this.ownerDocument,
            n = this.namespaceURI;
          return n === kl && e.documentElement.namespaceURI === kl
            ? e.createElement(t)
            : e.createElementNS(n, t);
        };
      }
      function es(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }
      function ns(t) {
        var e = wl(t);
        return (e.local ? es : ts)(e);
      }
      function rs() {
        return null;
      }
      function is() {
        var t = this.parentNode;
        t && t.removeChild(this);
      }
      function as() {
        var t = this.cloneNode(!1),
          e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
      }
      function os() {
        var t = this.cloneNode(!0),
          e = this.parentNode;
        return e ? e.insertBefore(t, this.nextSibling) : t;
      }
      function ls(t) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var e = '',
              n = t.indexOf('.');
            return (
              n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
              { type: t, name: e }
            );
          });
      }
      function ss(t) {
        return function () {
          var e = this.__on;
          if (e) {
            for (var n, r = 0, i = -1, a = e.length; r < a; ++r)
              (n = e[r]),
                (t.type && n.type !== t.type) || n.name !== t.name
                  ? (e[++i] = n)
                  : this.removeEventListener(n.type, n.listener, n.options);
            ++i ? (e.length = i) : delete this.__on;
          }
        };
      }
      function us(t, e, n) {
        return function () {
          var r,
            i = this.__on,
            a = (function (t) {
              return function (e) {
                t.call(this, e, this.__data__);
              };
            })(e);
          if (i)
            for (var o = 0, l = i.length; o < l; ++o)
              if ((r = i[o]).type === t.type && r.name === t.name)
                return (
                  this.removeEventListener(r.type, r.listener, r.options),
                  this.addEventListener(
                    r.type,
                    (r.listener = a),
                    (r.options = n)
                  ),
                  void (r.value = e)
                );
          this.addEventListener(t.type, a, n),
            (r = {
              type: t.type,
              name: t.name,
              value: e,
              listener: a,
              options: n,
            }),
            i ? i.push(r) : (this.__on = [r]);
        };
      }
      function cs(t, e, n) {
        var r = Al(t),
          i = r.CustomEvent;
        'function' === typeof i
          ? (i = new i(e, n))
          : ((i = r.document.createEvent('Event')),
            n
              ? (i.initEvent(e, n.bubbles, n.cancelable), (i.detail = n.detail))
              : i.initEvent(e, !1, !1)),
          t.dispatchEvent(i);
      }
      function fs(t, e) {
        return function () {
          return cs(this, t, e);
        };
      }
      function hs(t, e) {
        return function () {
          return cs(this, t, e.apply(this, arguments));
        };
      }
      Vl.prototype = {
        add: function (t) {
          this._names.indexOf(t) < 0 &&
            (this._names.push(t),
            this._node.setAttribute('class', this._names.join(' ')));
        },
        remove: function (t) {
          var e = this._names.indexOf(t);
          e >= 0 &&
            (this._names.splice(e, 1),
            this._node.setAttribute('class', this._names.join(' ')));
        },
        contains: function (t) {
          return this._names.indexOf(t) >= 0;
        },
      };
      var ds = l().mark(ps);
      function ps() {
        var t, e, n, r, i, a, o;
        return l().wrap(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  (t = this._groups), (e = 0), (n = t.length);
                case 1:
                  if (!(e < n)) {
                    l.next = 13;
                    break;
                  }
                  (r = t[e]), (i = 0), (a = r.length);
                case 3:
                  if (!(i < a)) {
                    l.next = 10;
                    break;
                  }
                  if (!(o = r[i])) {
                    l.next = 7;
                    break;
                  }
                  return (l.next = 7), o;
                case 7:
                  ++i, (l.next = 3);
                  break;
                case 10:
                  ++e, (l.next = 1);
                  break;
                case 13:
                case 'end':
                  return l.stop();
              }
          },
          ds,
          this
        );
      }
      var vs = [null];
      function gs(t, e) {
        (this._groups = t), (this._parents = e);
      }
      function ys() {
        return new gs([[document.documentElement]], vs);
      }
      gs.prototype = ys.prototype = D(
        {
          constructor: gs,
          select: function (t) {
            'function' !== typeof t && (t = rl(t));
            for (
              var e = this._groups, n = e.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var a,
                  o,
                  l = e[i],
                  s = l.length,
                  u = (r[i] = new Array(s)),
                  c = 0;
                c < s;
                ++c
              )
                (a = l[c]) &&
                  (o = t.call(a, a.__data__, c, l)) &&
                  ('__data__' in a && (o.__data__ = a.__data__), (u[c] = o));
            return new gs(r, this._parents);
          },
          selectAll: function (t) {
            t =
              'function' === typeof t
                ? (function (t) {
                    return function () {
                      return il(t.apply(this, arguments));
                    };
                  })(t)
                : ol(t);
            for (
              var e = this._groups, n = e.length, r = [], i = [], a = 0;
              a < n;
              ++a
            )
              for (var o, l = e[a], s = l.length, u = 0; u < s; ++u)
                (o = l[u]) && (r.push(t.call(o, o.__data__, u, l)), i.push(o));
            return new gs(r, i);
          },
          selectChild: function (t) {
            return this.select(
              null == t
                ? cl
                : (function (t) {
                    return function () {
                      return ul.call(this.children, t);
                    };
                  })('function' === typeof t ? t : sl(t))
            );
          },
          selectChildren: function (t) {
            return this.selectAll(
              null == t
                ? hl
                : (function (t) {
                    return function () {
                      return fl.call(this.children, t);
                    };
                  })('function' === typeof t ? t : sl(t))
            );
          },
          filter: function (t) {
            'function' !== typeof t && (t = ll(t));
            for (
              var e = this._groups, n = e.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var a, o = e[i], l = o.length, s = (r[i] = []), u = 0;
                u < l;
                ++u
              )
                (a = o[u]) && t.call(a, a.__data__, u, o) && s.push(a);
            return new gs(r, this._parents);
          },
          data: function (t, e) {
            if (!arguments.length) return Array.from(this, ml);
            var n = e ? yl : gl,
              r = this._parents,
              i = this._groups;
            'function' !== typeof t && (t = vl(t));
            for (
              var a = i.length,
                o = new Array(a),
                l = new Array(a),
                s = new Array(a),
                u = 0;
              u < a;
              ++u
            ) {
              var c = r[u],
                f = i[u],
                h = f.length,
                d = bl(t.call(c, c && c.__data__, u, r)),
                p = d.length,
                v = (l[u] = new Array(p)),
                g = (o[u] = new Array(p)),
                y = (s[u] = new Array(h));
              n(c, f, v, g, y, d, e);
              for (var m, b, x = 0, k = 0; x < p; ++x)
                if ((m = v[x])) {
                  for (x >= k && (k = x + 1); !(b = g[k]) && ++k < p; );
                  m._next = b || null;
                }
            }
            return ((o = new gs(o, r))._enter = l), (o._exit = s), o;
          },
          enter: function () {
            return new gs(this._enter || this._groups.map(dl), this._parents);
          },
          exit: function () {
            return new gs(this._exit || this._groups.map(dl), this._parents);
          },
          join: function (t, e, n) {
            var r = this.enter(),
              i = this,
              a = this.exit();
            return (
              'function' === typeof t
                ? (r = t(r)) && (r = r.selection())
                : (r = r.append(t + '')),
              null != e && (i = e(i)) && (i = i.selection()),
              null == n ? a.remove() : n(a),
              r && i ? r.merge(i).order() : i
            );
          },
          merge: function (t) {
            for (
              var e = t.selection ? t.selection() : t,
                n = this._groups,
                r = e._groups,
                i = n.length,
                a = r.length,
                o = Math.min(i, a),
                l = new Array(i),
                s = 0;
              s < o;
              ++s
            )
              for (
                var u,
                  c = n[s],
                  f = r[s],
                  h = c.length,
                  d = (l[s] = new Array(h)),
                  p = 0;
                p < h;
                ++p
              )
                (u = c[p] || f[p]) && (d[p] = u);
            for (; s < i; ++s) l[s] = n[s];
            return new gs(l, this._parents);
          },
          selection: function () {
            return this;
          },
          order: function () {
            for (var t = this._groups, e = -1, n = t.length; ++e < n; )
              for (var r, i = t[e], a = i.length - 1, o = i[a]; --a >= 0; )
                (r = i[a]) &&
                  (o &&
                    4 ^ r.compareDocumentPosition(o) &&
                    o.parentNode.insertBefore(r, o),
                  (o = r));
            return this;
          },
          sort: function (t) {
            function e(e, n) {
              return e && n ? t(e.__data__, n.__data__) : !e - !n;
            }
            t || (t = xl);
            for (
              var n = this._groups, r = n.length, i = new Array(r), a = 0;
              a < r;
              ++a
            ) {
              for (
                var o, l = n[a], s = l.length, u = (i[a] = new Array(s)), c = 0;
                c < s;
                ++c
              )
                (o = l[c]) && (u[c] = o);
              u.sort(e);
            }
            return new gs(i, this._parents).order();
          },
          call: function () {
            var t = arguments[0];
            return (arguments[0] = this), t.apply(null, arguments), this;
          },
          nodes: function () {
            return Array.from(this);
          },
          node: function () {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
              for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
                var o = r[i];
                if (o) return o;
              }
            return null;
          },
          size: function () {
            var t,
              e = 0,
              n = H(this);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                t.value;
                ++e;
              }
            } catch (r) {
              n.e(r);
            } finally {
              n.f();
            }
            return e;
          },
          empty: function () {
            return !this.node();
          },
          each: function (t) {
            for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
              for (var i, a = e[n], o = 0, l = a.length; o < l; ++o)
                (i = a[o]) && t.call(i, i.__data__, o, a);
            return this;
          },
          attr: function (t, e) {
            var n = wl(t);
            if (arguments.length < 2) {
              var r = this.node();
              return n.local
                ? r.getAttributeNS(n.space, n.local)
                : r.getAttribute(n);
            }
            return this.each(
              (null == e
                ? n.local
                  ? Ml
                  : Sl
                : 'function' === typeof e
                ? n.local
                  ? Ol
                  : Cl
                : n.local
                ? Pl
                : El)(n, e)
            );
          },
          style: function (t, e, n) {
            return arguments.length > 1
              ? this.each(
                  (null == e ? Tl : 'function' === typeof e ? Ll : Dl)(
                    t,
                    e,
                    null == n ? '' : n
                  )
                )
              : Rl(this.node(), t);
          },
          property: function (t, e) {
            return arguments.length > 1
              ? this.each(
                  (null == e ? Nl : 'function' === typeof e ? zl : Il)(t, e)
                )
              : this.node()[t];
          },
          classed: function (t, e) {
            var n = jl(t + '');
            if (arguments.length < 2) {
              for (var r = Fl(this.node()), i = -1, a = n.length; ++i < a; )
                if (!r.contains(n[i])) return !1;
              return !0;
            }
            return this.each(
              ('function' === typeof e ? Yl : e ? Hl : Ul)(n, e)
            );
          },
          text: function (t) {
            return arguments.length
              ? this.each(
                  null == t ? $l : ('function' === typeof t ? Gl : Xl)(t)
                )
              : this.node().textContent;
          },
          html: function (t) {
            return arguments.length
              ? this.each(
                  null == t ? Ql : ('function' === typeof t ? Zl : ql)(t)
                )
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each(Kl);
          },
          lower: function () {
            return this.each(Jl);
          },
          append: function (t) {
            var e = 'function' === typeof t ? t : ns(t);
            return this.select(function () {
              return this.appendChild(e.apply(this, arguments));
            });
          },
          insert: function (t, e) {
            var n = 'function' === typeof t ? t : ns(t),
              r = null == e ? rs : 'function' === typeof e ? e : rl(e);
            return this.select(function () {
              return this.insertBefore(
                n.apply(this, arguments),
                r.apply(this, arguments) || null
              );
            });
          },
          remove: function () {
            return this.each(is);
          },
          clone: function (t) {
            return this.select(t ? os : as);
          },
          datum: function (t) {
            return arguments.length
              ? this.property('__data__', t)
              : this.node().__data__;
          },
          on: function (t, e, n) {
            var r,
              i,
              a = ls(t + ''),
              o = a.length;
            if (!(arguments.length < 2)) {
              for (l = e ? us : ss, r = 0; r < o; ++r) this.each(l(a[r], e, n));
              return this;
            }
            var l = this.node().__on;
            if (l)
              for (var s, u = 0, c = l.length; u < c; ++u)
                for (r = 0, s = l[u]; r < o; ++r)
                  if ((i = a[r]).type === s.type && i.name === s.name)
                    return s.value;
          },
          dispatch: function (t, e) {
            return this.each(('function' === typeof e ? hs : fs)(t, e));
          },
        },
        Symbol.iterator,
        ps
      );
      var ms = ys,
        bs = { value: function () {} };
      function xs() {
        for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
          if (!(t = arguments[e] + '') || t in r || /[\s.]/.test(t))
            throw new Error('illegal type: ' + t);
          r[t] = [];
        }
        return new ks(r);
      }
      function ks(t) {
        this._ = t;
      }
      function _s(t, e) {
        return t
          .trim()
          .split(/^|\s+/)
          .map(function (t) {
            var n = '',
              r = t.indexOf('.');
            if (
              (r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
              t && !e.hasOwnProperty(t))
            )
              throw new Error('unknown type: ' + t);
            return { type: t, name: n };
          });
      }
      function ws(t, e) {
        for (var n, r = 0, i = t.length; r < i; ++r)
          if ((n = t[r]).name === e) return n.value;
      }
      function Ss(t, e, n) {
        for (var r = 0, i = t.length; r < i; ++r)
          if (t[r].name === e) {
            (t[r] = bs), (t = t.slice(0, r).concat(t.slice(r + 1)));
            break;
          }
        return null != n && t.push({ name: e, value: n }), t;
      }
      ks.prototype = xs.prototype = {
        constructor: ks,
        on: function (t, e) {
          var n,
            r = this._,
            i = _s(t + '', r),
            a = -1,
            o = i.length;
          if (!(arguments.length < 2)) {
            if (null != e && 'function' !== typeof e)
              throw new Error('invalid callback: ' + e);
            for (; ++a < o; )
              if ((n = (t = i[a]).type)) r[n] = Ss(r[n], t.name, e);
              else if (null == e) for (n in r) r[n] = Ss(r[n], t.name, null);
            return this;
          }
          for (; ++a < o; )
            if ((n = (t = i[a]).type) && (n = ws(r[n], t.name))) return n;
        },
        copy: function () {
          var t = {},
            e = this._;
          for (var n in e) t[n] = e[n].slice();
          return new ks(t);
        },
        call: function (t, e) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, i = new Array(n), a = 0; a < n; ++a)
              i[a] = arguments[a + 2];
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (a = 0, n = (r = this._[t]).length; a < n; ++a)
            r[a].value.apply(e, i);
        },
        apply: function (t, e, n) {
          if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
          for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
            r[i].value.apply(e, n);
        },
      };
      var Ms,
        Es,
        Ps = xs,
        Cs = 0,
        Os = 0,
        As = 0,
        Ts = 0,
        Ds = 0,
        Ls = 0,
        Rs =
          'object' === typeof performance && performance.now
            ? performance
            : Date,
        Ns =
          'object' === typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function Is() {
        return Ds || (Ns(zs), (Ds = Rs.now() + Ls));
      }
      function zs() {
        Ds = 0;
      }
      function js() {
        this._call = this._time = this._next = null;
      }
      function Fs(t, e, n) {
        var r = new js();
        return r.restart(t, e, n), r;
      }
      function Vs() {
        (Ds = (Ts = Rs.now()) + Ls), (Cs = Os = 0);
        try {
          !(function () {
            Is(), ++Cs;
            for (var t, e = Ms; e; )
              (t = Ds - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
            --Cs;
          })();
        } finally {
          (Cs = 0),
            (function () {
              var t,
                e,
                n = Ms,
                r = 1 / 0;
              for (; n; )
                n._call
                  ? (r > n._time && (r = n._time), (t = n), (n = n._next))
                  : ((e = n._next),
                    (n._next = null),
                    (n = t ? (t._next = e) : (Ms = e)));
              (Es = t), Ws(r);
            })(),
            (Ds = 0);
        }
      }
      function Bs() {
        var t = Rs.now(),
          e = t - Ts;
        e > 1e3 && ((Ls -= e), (Ts = t));
      }
      function Ws(t) {
        Cs ||
          (Os && (Os = clearTimeout(Os)),
          t - Ds > 24
            ? (t < 1 / 0 && (Os = setTimeout(Vs, t - Rs.now() - Ls)),
              As && (As = clearInterval(As)))
            : (As || ((Ts = Rs.now()), (As = setInterval(Bs, 1e3))),
              (Cs = 1),
              Ns(Vs)));
      }
      function Hs(t, e, n) {
        var r = new js();
        return (
          (e = null == e ? 0 : +e),
          r.restart(
            function (n) {
              r.stop(), t(n + e);
            },
            e,
            n
          ),
          r
        );
      }
      js.prototype = Fs.prototype = {
        constructor: js,
        restart: function (t, e, n) {
          if ('function' !== typeof t)
            throw new TypeError('callback is not a function');
          (n = (null == n ? Is() : +n) + (null == e ? 0 : +e)),
            this._next ||
              Es === this ||
              (Es ? (Es._next = this) : (Ms = this), (Es = this)),
            (this._call = t),
            (this._time = n),
            Ws();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), Ws());
        },
      };
      var Us = Ps('start', 'end', 'cancel', 'interrupt'),
        Ys = [];
      function $s(t, e, n, r, i, a) {
        var o = t.__transition;
        if (o) {
          if (n in o) return;
        } else t.__transition = {};
        !(function (t, e, n) {
          var r,
            i = t.__transition;
          function a(t) {
            (n.state = 1),
              n.timer.restart(o, n.delay, n.time),
              n.delay <= t && o(t - n.delay);
          }
          function o(a) {
            var u, c, f, h;
            if (1 !== n.state) return s();
            for (u in i)
              if ((h = i[u]).name === n.name) {
                if (3 === h.state) return Hs(o);
                4 === h.state
                  ? ((h.state = 6),
                    h.timer.stop(),
                    h.on.call('interrupt', t, t.__data__, h.index, h.group),
                    delete i[u])
                  : +u < e &&
                    ((h.state = 6),
                    h.timer.stop(),
                    h.on.call('cancel', t, t.__data__, h.index, h.group),
                    delete i[u]);
              }
            if (
              (Hs(function () {
                3 === n.state &&
                  ((n.state = 4), n.timer.restart(l, n.delay, n.time), l(a));
              }),
              (n.state = 2),
              n.on.call('start', t, t.__data__, n.index, n.group),
              2 === n.state)
            ) {
              for (
                n.state = 3, r = new Array((f = n.tween.length)), u = 0, c = -1;
                u < f;
                ++u
              )
                (h = n.tween[u].value.call(t, t.__data__, n.index, n.group)) &&
                  (r[++c] = h);
              r.length = c + 1;
            }
          }
          function l(e) {
            for (
              var i =
                  e < n.duration
                    ? n.ease.call(null, e / n.duration)
                    : (n.timer.restart(s), (n.state = 5), 1),
                a = -1,
                o = r.length;
              ++a < o;

            )
              r[a].call(t, i);
            5 === n.state &&
              (n.on.call('end', t, t.__data__, n.index, n.group), s());
          }
          function s() {
            for (var r in ((n.state = 6), n.timer.stop(), delete i[e], i))
              return;
            delete t.__transition;
          }
          (i[e] = n), (n.timer = Fs(a, 0, n.time));
        })(t, n, {
          name: e,
          index: r,
          group: i,
          on: Us,
          tween: Ys,
          time: a.time,
          delay: a.delay,
          duration: a.duration,
          ease: a.ease,
          timer: null,
          state: 0,
        });
      }
      function Xs(t, e) {
        var n = Qs(t, e);
        if (n.state > 0) throw new Error('too late; already scheduled');
        return n;
      }
      function Gs(t, e) {
        var n = Qs(t, e);
        if (n.state > 3) throw new Error('too late; already running');
        return n;
      }
      function Qs(t, e) {
        var n = t.__transition;
        if (!n || !(n = n[e])) throw new Error('transition not found');
        return n;
      }
      function qs(t, e) {
        return (
          (t = +t),
          (e = +e),
          function (n) {
            return t * (1 - n) + e * n;
          }
        );
      }
      var Zs,
        Ks = 180 / Math.PI,
        Js = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1,
        };
      function tu(t, e, n, r, i, a) {
        var o, l, s;
        return (
          (o = Math.sqrt(t * t + e * e)) && ((t /= o), (e /= o)),
          (s = t * n + e * r) && ((n -= t * s), (r -= e * s)),
          (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (s /= l)),
          t * r < e * n && ((t = -t), (e = -e), (s = -s), (o = -o)),
          {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(e, t) * Ks,
            skewX: Math.atan(s) * Ks,
            scaleX: o,
            scaleY: l,
          }
        );
      }
      function eu(t, e, n, r) {
        function i(t) {
          return t.length ? t.pop() + ' ' : '';
        }
        return function (a, o) {
          var l = [],
            s = [];
          return (
            (a = t(a)),
            (o = t(o)),
            (function (t, r, i, a, o, l) {
              if (t !== i || r !== a) {
                var s = o.push('translate(', null, e, null, n);
                l.push({ i: s - 4, x: qs(t, i) }, { i: s - 2, x: qs(r, a) });
              } else (i || a) && o.push('translate(' + i + e + a + n);
            })(a.translateX, a.translateY, o.translateX, o.translateY, l, s),
            (function (t, e, n, a) {
              t !== e
                ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                  a.push({
                    i: n.push(i(n) + 'rotate(', null, r) - 2,
                    x: qs(t, e),
                  }))
                : e && n.push(i(n) + 'rotate(' + e + r);
            })(a.rotate, o.rotate, l, s),
            (function (t, e, n, a) {
              t !== e
                ? a.push({
                    i: n.push(i(n) + 'skewX(', null, r) - 2,
                    x: qs(t, e),
                  })
                : e && n.push(i(n) + 'skewX(' + e + r);
            })(a.skewX, o.skewX, l, s),
            (function (t, e, n, r, a, o) {
              if (t !== n || e !== r) {
                var l = a.push(i(a) + 'scale(', null, ',', null, ')');
                o.push({ i: l - 4, x: qs(t, n) }, { i: l - 2, x: qs(e, r) });
              } else
                (1 === n && 1 === r) ||
                  a.push(i(a) + 'scale(' + n + ',' + r + ')');
            })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, l, s),
            (a = o = null),
            function (t) {
              for (var e, n = -1, r = s.length; ++n < r; )
                l[(e = s[n]).i] = e.x(t);
              return l.join('');
            }
          );
        };
      }
      var nu = eu(
          function (t) {
            var e = new (
              'function' === typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
            )(t + '');
            return e.isIdentity ? Js : tu(e.a, e.b, e.c, e.d, e.e, e.f);
          },
          'px, ',
          'px)',
          'deg)'
        ),
        ru = eu(
          function (t) {
            return null == t
              ? Js
              : (Zs ||
                  (Zs = document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'g'
                  )),
                Zs.setAttribute('transform', t),
                (t = Zs.transform.baseVal.consolidate())
                  ? tu((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                  : Js);
          },
          ', ',
          ')',
          ')'
        );
      function iu(t, e) {
        var n, r;
        return function () {
          var i = Gs(this, t),
            a = i.tween;
          if (a !== n)
            for (var o = 0, l = (r = n = a).length; o < l; ++o)
              if (r[o].name === e) {
                (r = r.slice()).splice(o, 1);
                break;
              }
          i.tween = r;
        };
      }
      function au(t, e, n) {
        var r, i;
        if ('function' !== typeof n) throw new Error();
        return function () {
          var a = Gs(this, t),
            o = a.tween;
          if (o !== r) {
            i = (r = o).slice();
            for (var l = { name: e, value: n }, s = 0, u = i.length; s < u; ++s)
              if (i[s].name === e) {
                i[s] = l;
                break;
              }
            s === u && i.push(l);
          }
          a.tween = i;
        };
      }
      function ou(t, e, n) {
        var r = t._id;
        return (
          t.each(function () {
            var t = Gs(this, r);
            (t.value || (t.value = {}))[e] = n.apply(this, arguments);
          }),
          function (t) {
            return Qs(t, r).value[e];
          }
        );
      }
      function lu(t, e, n) {
        (t.prototype = e.prototype = n), (n.constructor = t);
      }
      function su(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function uu() {}
      var cu = 0.7,
        fu = 1 / cu,
        hu = '\\s*([+-]?\\d+)\\s*',
        du = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
        pu = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
        vu = /^#([0-9a-f]{3,8})$/,
        gu = new RegExp(
          '^rgb\\('.concat(hu, ',').concat(hu, ',').concat(hu, '\\)$')
        ),
        yu = new RegExp(
          '^rgb\\('.concat(pu, ',').concat(pu, ',').concat(pu, '\\)$')
        ),
        mu = new RegExp(
          '^rgba\\('
            .concat(hu, ',')
            .concat(hu, ',')
            .concat(hu, ',')
            .concat(du, '\\)$')
        ),
        bu = new RegExp(
          '^rgba\\('
            .concat(pu, ',')
            .concat(pu, ',')
            .concat(pu, ',')
            .concat(du, '\\)$')
        ),
        xu = new RegExp(
          '^hsl\\('.concat(du, ',').concat(pu, ',').concat(pu, '\\)$')
        ),
        ku = new RegExp(
          '^hsla\\('
            .concat(du, ',')
            .concat(pu, ',')
            .concat(pu, ',')
            .concat(du, '\\)$')
        ),
        _u = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function wu() {
        return this.rgb().formatHex();
      }
      function Su() {
        return this.rgb().formatRgb();
      }
      function Mu(t) {
        var e, n;
        return (
          (t = (t + '').trim().toLowerCase()),
          (e = vu.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? Eu(e)
                : 3 === n
                ? new Au(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1
                  )
                : 8 === n
                ? Pu(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255
                  )
                : 4 === n
                ? Pu(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255
                  )
                : null)
            : (e = gu.exec(t))
            ? new Au(e[1], e[2], e[3], 1)
            : (e = yu.exec(t))
            ? new Au(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1
              )
            : (e = mu.exec(t))
            ? Pu(e[1], e[2], e[3], e[4])
            : (e = bu.exec(t))
            ? Pu(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4]
              )
            : (e = xu.exec(t))
            ? Iu(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = ku.exec(t))
            ? Iu(e[1], e[2] / 100, e[3] / 100, e[4])
            : _u.hasOwnProperty(t)
            ? Eu(_u[t])
            : 'transparent' === t
            ? new Au(NaN, NaN, NaN, 0)
            : null
        );
      }
      function Eu(t) {
        return new Au((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function Pu(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new Au(t, e, n, r);
      }
      function Cu(t) {
        return (
          t instanceof uu || (t = Mu(t)),
          t ? new Au((t = t.rgb()).r, t.g, t.b, t.opacity) : new Au()
        );
      }
      function Ou(t, e, n, r) {
        return 1 === arguments.length
          ? Cu(t)
          : new Au(t, e, n, null == r ? 1 : r);
      }
      function Au(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function Tu() {
        return '#'.concat(Nu(this.r)).concat(Nu(this.g)).concat(Nu(this.b));
      }
      function Du() {
        var t = Lu(this.opacity);
        return ''
          .concat(1 === t ? 'rgb(' : 'rgba(')
          .concat(Ru(this.r), ', ')
          .concat(Ru(this.g), ', ')
          .concat(Ru(this.b))
          .concat(1 === t ? ')' : ', '.concat(t, ')'));
      }
      function Lu(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function Ru(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function Nu(t) {
        return ((t = Ru(t)) < 16 ? '0' : '') + t.toString(16);
      }
      function Iu(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new ju(t, e, n, r)
        );
      }
      function zu(t) {
        if (t instanceof ju) return new ju(t.h, t.s, t.l, t.opacity);
        if ((t instanceof uu || (t = Mu(t)), !t)) return new ju();
        if (t instanceof ju) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          i = Math.min(e, n, r),
          a = Math.max(e, n, r),
          o = NaN,
          l = a - i,
          s = (a + i) / 2;
        return (
          l
            ? ((o =
                e === a
                  ? (n - r) / l + 6 * (n < r)
                  : n === a
                  ? (r - e) / l + 2
                  : (e - n) / l + 4),
              (l /= s < 0.5 ? a + i : 2 - a - i),
              (o *= 60))
            : (l = s > 0 && s < 1 ? 0 : o),
          new ju(o, l, s, t.opacity)
        );
      }
      function ju(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function Fu(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function Vu(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function Bu(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e)
        );
      }
      function Wu(t, e, n, r, i) {
        var a = t * t,
          o = a * t;
        return (
          ((1 - 3 * t + 3 * a - o) * e +
            (4 - 6 * a + 3 * o) * n +
            (1 + 3 * t + 3 * a - 3 * o) * r +
            o * i) /
          6
        );
      }
      lu(uu, Mu, {
        copy: function (t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: wu,
        formatHex: wu,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return zu(this).formatHsl();
        },
        formatRgb: Su,
        toString: Su,
      }),
        lu(
          Au,
          Ou,
          su(uu, {
            brighter: function (t) {
              return (
                (t = null == t ? fu : Math.pow(fu, t)),
                new Au(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? cu : Math.pow(cu, t)),
                new Au(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            clamp: function () {
              return new Au(
                Ru(this.r),
                Ru(this.g),
                Ru(this.b),
                Lu(this.opacity)
              );
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: Tu,
            formatHex: Tu,
            formatHex8: function () {
              return '#'
                .concat(Nu(this.r))
                .concat(Nu(this.g))
                .concat(Nu(this.b))
                .concat(Nu(255 * (isNaN(this.opacity) ? 1 : this.opacity)));
            },
            formatRgb: Du,
            toString: Du,
          })
        ),
        lu(
          ju,
          function (t, e, n, r) {
            return 1 === arguments.length
              ? zu(t)
              : new ju(t, e, n, null == r ? 1 : r);
          },
          su(uu, {
            brighter: function (t) {
              return (
                (t = null == t ? fu : Math.pow(fu, t)),
                new ju(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? cu : Math.pow(cu, t)),
                new ju(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                i = 2 * n - r;
              return new Au(
                Bu(t >= 240 ? t - 240 : t + 120, i, r),
                Bu(t, i, r),
                Bu(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity
              );
            },
            clamp: function () {
              return new ju(
                Fu(this.h),
                Vu(this.s),
                Vu(this.l),
                Lu(this.opacity)
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var t = Lu(this.opacity);
              return ''
                .concat(1 === t ? 'hsl(' : 'hsla(')
                .concat(Fu(this.h), ', ')
                .concat(100 * Vu(this.s), '%, ')
                .concat(100 * Vu(this.l), '%')
                .concat(1 === t ? ')' : ', '.concat(t, ')'));
            },
          })
        );
      var Hu = function (t) {
        return function () {
          return t;
        };
      };
      function Uu(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function Yu(t) {
        return 1 === (t = +t)
          ? $u
          : function (e, n) {
              return n - e
                ? (function (t, e, n) {
                    return (
                      (t = Math.pow(t, n)),
                      (e = Math.pow(e, n) - t),
                      (n = 1 / n),
                      function (r) {
                        return Math.pow(t + r * e, n);
                      }
                    );
                  })(e, n, t)
                : Hu(isNaN(e) ? n : e);
            };
      }
      function $u(t, e) {
        var n = e - t;
        return n ? Uu(t, n) : Hu(isNaN(t) ? e : t);
      }
      var Xu = (function t(e) {
        var n = Yu(e);
        function r(t, e) {
          var r = n((t = Ou(t)).r, (e = Ou(e)).r),
            i = n(t.g, e.g),
            a = n(t.b, e.b),
            o = $u(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = i(e)),
              (t.b = a(e)),
              (t.opacity = o(e)),
              t + ''
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function Gu(t) {
        return function (e) {
          var n,
            r,
            i = e.length,
            a = new Array(i),
            o = new Array(i),
            l = new Array(i);
          for (n = 0; n < i; ++n)
            (r = Ou(e[n])),
              (a[n] = r.r || 0),
              (o[n] = r.g || 0),
              (l[n] = r.b || 0);
          return (
            (a = t(a)),
            (o = t(o)),
            (l = t(l)),
            (r.opacity = 1),
            function (t) {
              return (r.r = a(t)), (r.g = o(t)), (r.b = l(t)), r + '';
            }
          );
        };
      }
      Gu(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            a = t[r + 1],
            o = r > 0 ? t[r - 1] : 2 * i - a,
            l = r < e - 1 ? t[r + 2] : 2 * a - i;
          return Wu((n - r / e) * e, o, i, a, l);
        };
      }),
        Gu(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(r + e - 1) % e],
              a = t[r % e],
              o = t[(r + 1) % e],
              l = t[(r + 2) % e];
            return Wu((n - r / e) * e, i, a, o, l);
          };
        });
      var Qu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        qu = new RegExp(Qu.source, 'g');
      function Zu(t, e) {
        var n,
          r,
          i,
          a = (Qu.lastIndex = qu.lastIndex = 0),
          o = -1,
          l = [],
          s = [];
        for (t += '', e += ''; (n = Qu.exec(t)) && (r = qu.exec(e)); )
          (i = r.index) > a &&
            ((i = e.slice(a, i)), l[o] ? (l[o] += i) : (l[++o] = i)),
            (n = n[0]) === (r = r[0])
              ? l[o]
                ? (l[o] += r)
                : (l[++o] = r)
              : ((l[++o] = null), s.push({ i: o, x: qs(n, r) })),
            (a = qu.lastIndex);
        return (
          a < e.length && ((i = e.slice(a)), l[o] ? (l[o] += i) : (l[++o] = i)),
          l.length < 2
            ? s[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + '';
                  };
                })(s[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = s.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) l[(n = s[r]).i] = n.x(t);
                return l.join('');
              })
        );
      }
      function Ku(t, e) {
        var n;
        return (
          'number' === typeof e
            ? qs
            : e instanceof Mu
            ? Xu
            : (n = Mu(e))
            ? ((e = n), Xu)
            : Zu
        )(t, e);
      }
      function Ju(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function tc(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function ec(t, e, n) {
        var r,
          i,
          a = n + '';
        return function () {
          var o = this.getAttribute(t);
          return o === a ? null : o === r ? i : (i = e((r = o), n));
        };
      }
      function nc(t, e, n) {
        var r,
          i,
          a = n + '';
        return function () {
          var o = this.getAttributeNS(t.space, t.local);
          return o === a ? null : o === r ? i : (i = e((r = o), n));
        };
      }
      function rc(t, e, n) {
        var r, i, a;
        return function () {
          var o,
            l,
            s = n(this);
          if (null != s)
            return (o = this.getAttribute(t)) === (l = s + '')
              ? null
              : o === r && l === i
              ? a
              : ((i = l), (a = e((r = o), s)));
          this.removeAttribute(t);
        };
      }
      function ic(t, e, n) {
        var r, i, a;
        return function () {
          var o,
            l,
            s = n(this);
          if (null != s)
            return (o = this.getAttributeNS(t.space, t.local)) === (l = s + '')
              ? null
              : o === r && l === i
              ? a
              : ((i = l), (a = e((r = o), s)));
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function ac(t, e) {
        return function (n) {
          this.setAttribute(t, e.call(this, n));
        };
      }
      function oc(t, e) {
        return function (n) {
          this.setAttributeNS(t.space, t.local, e.call(this, n));
        };
      }
      function lc(t, e) {
        var n, r;
        function i() {
          var i = e.apply(this, arguments);
          return i !== r && (n = (r = i) && oc(t, i)), n;
        }
        return (i._value = e), i;
      }
      function sc(t, e) {
        var n, r;
        function i() {
          var i = e.apply(this, arguments);
          return i !== r && (n = (r = i) && ac(t, i)), n;
        }
        return (i._value = e), i;
      }
      function uc(t, e) {
        return function () {
          Xs(this, t).delay = +e.apply(this, arguments);
        };
      }
      function cc(t, e) {
        return (
          (e = +e),
          function () {
            Xs(this, t).delay = e;
          }
        );
      }
      function fc(t, e) {
        return function () {
          Gs(this, t).duration = +e.apply(this, arguments);
        };
      }
      function hc(t, e) {
        return (
          (e = +e),
          function () {
            Gs(this, t).duration = e;
          }
        );
      }
      function dc(t, e) {
        if ('function' !== typeof e) throw new Error();
        return function () {
          Gs(this, t).ease = e;
        };
      }
      function pc(t, e, n) {
        var r,
          i,
          a = (function (t) {
            return (t + '')
              .trim()
              .split(/^|\s+/)
              .every(function (t) {
                var e = t.indexOf('.');
                return e >= 0 && (t = t.slice(0, e)), !t || 'start' === t;
              });
          })(e)
            ? Xs
            : Gs;
        return function () {
          var o = a(this, t),
            l = o.on;
          l !== r && (i = (r = l).copy()).on(e, n), (o.on = i);
        };
      }
      var vc = ms.prototype.constructor;
      function gc(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function yc(t, e, n) {
        return function (r) {
          this.style.setProperty(t, e.call(this, r), n);
        };
      }
      function mc(t, e, n) {
        var r, i;
        function a() {
          var a = e.apply(this, arguments);
          return a !== i && (r = (i = a) && yc(t, a, n)), r;
        }
        return (a._value = e), a;
      }
      function bc(t) {
        return function (e) {
          this.textContent = t.call(this, e);
        };
      }
      function xc(t) {
        var e, n;
        function r() {
          var r = t.apply(this, arguments);
          return r !== n && (e = (n = r) && bc(r)), e;
        }
        return (r._value = t), r;
      }
      var kc = 0;
      function _c(t, e, n, r) {
        (this._groups = t),
          (this._parents = e),
          (this._name = n),
          (this._id = r);
      }
      function wc() {
        return ++kc;
      }
      var Sc = ms.prototype;
      _c.prototype = function (t) {
        return ms().transition(t);
      }.prototype = D(
        {
          constructor: _c,
          select: function (t) {
            var e = this._name,
              n = this._id;
            'function' !== typeof t && (t = rl(t));
            for (
              var r = this._groups, i = r.length, a = new Array(i), o = 0;
              o < i;
              ++o
            )
              for (
                var l,
                  s,
                  u = r[o],
                  c = u.length,
                  f = (a[o] = new Array(c)),
                  h = 0;
                h < c;
                ++h
              )
                (l = u[h]) &&
                  (s = t.call(l, l.__data__, h, u)) &&
                  ('__data__' in l && (s.__data__ = l.__data__),
                  (f[h] = s),
                  $s(f[h], e, n, h, f, Qs(l, n)));
            return new _c(a, this._parents, e, n);
          },
          selectAll: function (t) {
            var e = this._name,
              n = this._id;
            'function' !== typeof t && (t = ol(t));
            for (
              var r = this._groups, i = r.length, a = [], o = [], l = 0;
              l < i;
              ++l
            )
              for (var s, u = r[l], c = u.length, f = 0; f < c; ++f)
                if ((s = u[f])) {
                  for (
                    var h,
                      d = t.call(s, s.__data__, f, u),
                      p = Qs(s, n),
                      v = 0,
                      g = d.length;
                    v < g;
                    ++v
                  )
                    (h = d[v]) && $s(h, e, n, v, d, p);
                  a.push(d), o.push(s);
                }
            return new _c(a, o, e, n);
          },
          selectChild: Sc.selectChild,
          selectChildren: Sc.selectChildren,
          filter: function (t) {
            'function' !== typeof t && (t = ll(t));
            for (
              var e = this._groups, n = e.length, r = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var a, o = e[i], l = o.length, s = (r[i] = []), u = 0;
                u < l;
                ++u
              )
                (a = o[u]) && t.call(a, a.__data__, u, o) && s.push(a);
            return new _c(r, this._parents, this._name, this._id);
          },
          merge: function (t) {
            if (t._id !== this._id) throw new Error();
            for (
              var e = this._groups,
                n = t._groups,
                r = e.length,
                i = n.length,
                a = Math.min(r, i),
                o = new Array(r),
                l = 0;
              l < a;
              ++l
            )
              for (
                var s,
                  u = e[l],
                  c = n[l],
                  f = u.length,
                  h = (o[l] = new Array(f)),
                  d = 0;
                d < f;
                ++d
              )
                (s = u[d] || c[d]) && (h[d] = s);
            for (; l < r; ++l) o[l] = e[l];
            return new _c(o, this._parents, this._name, this._id);
          },
          selection: function () {
            return new vc(this._groups, this._parents);
          },
          transition: function () {
            for (
              var t = this._name,
                e = this._id,
                n = wc(),
                r = this._groups,
                i = r.length,
                a = 0;
              a < i;
              ++a
            )
              for (var o, l = r[a], s = l.length, u = 0; u < s; ++u)
                if ((o = l[u])) {
                  var c = Qs(o, e);
                  $s(o, t, n, u, l, {
                    time: c.time + c.delay + c.duration,
                    delay: 0,
                    duration: c.duration,
                    ease: c.ease,
                  });
                }
            return new _c(r, this._parents, t, n);
          },
          call: Sc.call,
          nodes: Sc.nodes,
          node: Sc.node,
          size: Sc.size,
          empty: Sc.empty,
          each: Sc.each,
          on: function (t, e) {
            var n = this._id;
            return arguments.length < 2
              ? Qs(this.node(), n).on.on(t)
              : this.each(pc(n, t, e));
          },
          attr: function (t, e) {
            var n = wl(t),
              r = 'transform' === n ? ru : Ku;
            return this.attrTween(
              t,
              'function' === typeof e
                ? (n.local ? ic : rc)(n, r, ou(this, 'attr.' + t, e))
                : null == e
                ? (n.local ? tc : Ju)(n)
                : (n.local ? nc : ec)(n, r, e)
            );
          },
          attrTween: function (t, e) {
            var n = 'attr.' + t;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == e) return this.tween(n, null);
            if ('function' !== typeof e) throw new Error();
            var r = wl(t);
            return this.tween(n, (r.local ? lc : sc)(r, e));
          },
          style: function (t, e, n) {
            var r = 'transform' === (t += '') ? nu : Ku;
            return null == e
              ? this.styleTween(
                  t,
                  (function (t, e) {
                    var n, r, i;
                    return function () {
                      var a = Rl(this, t),
                        o = (this.style.removeProperty(t), Rl(this, t));
                      return a === o
                        ? null
                        : a === n && o === r
                        ? i
                        : (i = e((n = a), (r = o)));
                    };
                  })(t, r)
                ).on('end.style.' + t, gc(t))
              : 'function' === typeof e
              ? this.styleTween(
                  t,
                  (function (t, e, n) {
                    var r, i, a;
                    return function () {
                      var o = Rl(this, t),
                        l = n(this),
                        s = l + '';
                      return (
                        null == l &&
                          (this.style.removeProperty(t), (s = l = Rl(this, t))),
                        o === s
                          ? null
                          : o === r && s === i
                          ? a
                          : ((i = s), (a = e((r = o), l)))
                      );
                    };
                  })(t, r, ou(this, 'style.' + t, e))
                ).each(
                  (function (t, e) {
                    var n,
                      r,
                      i,
                      a,
                      o = 'style.' + e,
                      l = 'end.' + o;
                    return function () {
                      var s = Gs(this, t),
                        u = s.on,
                        c = null == s.value[o] ? a || (a = gc(e)) : void 0;
                      (u === n && i === c) ||
                        (r = (n = u).copy()).on(l, (i = c)),
                        (s.on = r);
                    };
                  })(this._id, t)
                )
              : this.styleTween(
                  t,
                  (function (t, e, n) {
                    var r,
                      i,
                      a = n + '';
                    return function () {
                      var o = Rl(this, t);
                      return o === a ? null : o === r ? i : (i = e((r = o), n));
                    };
                  })(t, r, e),
                  n
                ).on('end.style.' + t, null);
          },
          styleTween: function (t, e, n) {
            var r = 'style.' + (t += '');
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == e) return this.tween(r, null);
            if ('function' !== typeof e) throw new Error();
            return this.tween(r, mc(t, e, null == n ? '' : n));
          },
          text: function (t) {
            return this.tween(
              'text',
              'function' === typeof t
                ? (function (t) {
                    return function () {
                      var e = t(this);
                      this.textContent = null == e ? '' : e;
                    };
                  })(ou(this, 'text', t))
                : (function (t) {
                    return function () {
                      this.textContent = t;
                    };
                  })(null == t ? '' : t + '')
            );
          },
          textTween: function (t) {
            var e = 'text';
            if (arguments.length < 1) return (e = this.tween(e)) && e._value;
            if (null == t) return this.tween(e, null);
            if ('function' !== typeof t) throw new Error();
            return this.tween(e, xc(t));
          },
          remove: function () {
            return this.on(
              'end.remove',
              (function (t) {
                return function () {
                  var e = this.parentNode;
                  for (var n in this.__transition) if (+n !== t) return;
                  e && e.removeChild(this);
                };
              })(this._id)
            );
          },
          tween: function (t, e) {
            var n = this._id;
            if (((t += ''), arguments.length < 2)) {
              for (
                var r, i = Qs(this.node(), n).tween, a = 0, o = i.length;
                a < o;
                ++a
              )
                if ((r = i[a]).name === t) return r.value;
              return null;
            }
            return this.each((null == e ? iu : au)(n, t, e));
          },
          delay: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(('function' === typeof t ? uc : cc)(e, t))
              : Qs(this.node(), e).delay;
          },
          duration: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(('function' === typeof t ? fc : hc)(e, t))
              : Qs(this.node(), e).duration;
          },
          ease: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(dc(e, t))
              : Qs(this.node(), e).ease;
          },
          easeVarying: function (t) {
            if ('function' !== typeof t) throw new Error();
            return this.each(
              (function (t, e) {
                return function () {
                  var n = e.apply(this, arguments);
                  if ('function' !== typeof n) throw new Error();
                  Gs(this, t).ease = n;
                };
              })(this._id, t)
            );
          },
          end: function () {
            var t,
              e,
              n = this,
              r = n._id,
              i = n.size();
            return new Promise(function (a, o) {
              var l = { value: o },
                s = {
                  value: function () {
                    0 === --i && a();
                  },
                };
              n.each(function () {
                var n = Gs(this, r),
                  i = n.on;
                i !== t &&
                  ((e = (t = i).copy())._.cancel.push(l),
                  e._.interrupt.push(l),
                  e._.end.push(s)),
                  (n.on = e);
              }),
                0 === i && a();
            });
          },
        },
        Symbol.iterator,
        Sc[Symbol.iterator]
      );
      var Mc = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function (t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
        },
      };
      function Ec(t, e) {
        for (var n; !(n = t.__transition) || !(n = n[e]); )
          if (!(t = t.parentNode))
            throw new Error('transition '.concat(e, ' not found'));
        return n;
      }
      (ms.prototype.interrupt = function (t) {
        return this.each(function () {
          !(function (t, e) {
            var n,
              r,
              i,
              a = t.__transition,
              o = !0;
            if (a) {
              for (i in ((e = null == e ? null : e + ''), a))
                (n = a[i]).name === e
                  ? ((r = n.state > 2 && n.state < 5),
                    (n.state = 6),
                    n.timer.stop(),
                    n.on.call(
                      r ? 'interrupt' : 'cancel',
                      t,
                      t.__data__,
                      n.index,
                      n.group
                    ),
                    delete a[i])
                  : (o = !1);
              o && delete t.__transition;
            }
          })(this, t);
        });
      }),
        (ms.prototype.transition = function (t) {
          var e, n;
          t instanceof _c
            ? ((e = t._id), (t = t._name))
            : ((e = wc()),
              ((n = Mc).time = Is()),
              (t = null == t ? null : t + ''));
          for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
            for (var o, l = r[a], s = l.length, u = 0; u < s; ++u)
              (o = l[u]) && $s(o, t, e, u, l, n || Ec(o, e));
          return new _c(r, this._parents, t, e);
        });
      Math.abs, Math.max, Math.min;
      function Pc(t) {
        return [+t[0], +t[1]];
      }
      function Cc(t) {
        return [Pc(t[0]), Pc(t[1])];
      }
      ['w', 'e'].map(Oc),
        ['n', 's'].map(Oc),
        ['n', 'w', 'e', 's', 'nw', 'ne', 'sw', 'se'].map(Oc);
      function Oc(t) {
        return { type: t };
      }
      var Ac = {},
        Tc = {};
      function Dc(t) {
        return new Function(
          'd',
          'return {' +
            t
              .map(function (t, e) {
                return JSON.stringify(t) + ': d[' + e + '] || ""';
              })
              .join(',') +
            '}'
        );
      }
      function Lc(t) {
        var e = Object.create(null),
          n = [];
        return (
          t.forEach(function (t) {
            for (var r in t) r in e || n.push((e[r] = r));
          }),
          n
        );
      }
      function Rc(t, e) {
        var n = t + '',
          r = n.length;
        return r < e ? new Array(e - r + 1).join(0) + n : n;
      }
      function Nc(t) {
        var e,
          n = t.getUTCHours(),
          r = t.getUTCMinutes(),
          i = t.getUTCSeconds(),
          a = t.getUTCMilliseconds();
        return isNaN(t)
          ? 'Invalid Date'
          : ((e = t.getUTCFullYear()) < 0
              ? '-' + Rc(-e, 6)
              : e > 9999
              ? '+' + Rc(e, 6)
              : Rc(e, 4)) +
              '-' +
              Rc(t.getUTCMonth() + 1, 2) +
              '-' +
              Rc(t.getUTCDate(), 2) +
              (a
                ? 'T' +
                  Rc(n, 2) +
                  ':' +
                  Rc(r, 2) +
                  ':' +
                  Rc(i, 2) +
                  '.' +
                  Rc(a, 3) +
                  'Z'
                : i
                ? 'T' + Rc(n, 2) + ':' + Rc(r, 2) + ':' + Rc(i, 2) + 'Z'
                : r || n
                ? 'T' + Rc(n, 2) + ':' + Rc(r, 2) + 'Z'
                : '');
      }
      function Ic(t) {
        var e = new RegExp('["' + t + '\n\r]'),
          n = t.charCodeAt(0);
        function r(t, e) {
          var r,
            i = [],
            a = t.length,
            o = 0,
            l = 0,
            s = a <= 0,
            u = !1;
          function c() {
            if (s) return Tc;
            if (u) return (u = !1), Ac;
            var e,
              r,
              i = o;
            if (34 === t.charCodeAt(i)) {
              for (
                ;
                (o++ < a && 34 !== t.charCodeAt(o)) || 34 === t.charCodeAt(++o);

              );
              return (
                (e = o) >= a
                  ? (s = !0)
                  : 10 === (r = t.charCodeAt(o++))
                  ? (u = !0)
                  : 13 === r && ((u = !0), 10 === t.charCodeAt(o) && ++o),
                t.slice(i + 1, e - 1).replace(/""/g, '"')
              );
            }
            for (; o < a; ) {
              if (10 === (r = t.charCodeAt((e = o++)))) u = !0;
              else if (13 === r) (u = !0), 10 === t.charCodeAt(o) && ++o;
              else if (r !== n) continue;
              return t.slice(i, e);
            }
            return (s = !0), t.slice(i, a);
          }
          for (
            10 === t.charCodeAt(a - 1) && --a,
              13 === t.charCodeAt(a - 1) && --a;
            (r = c()) !== Tc;

          ) {
            for (var f = []; r !== Ac && r !== Tc; ) f.push(r), (r = c());
            (e && null == (f = e(f, l++))) || i.push(f);
          }
          return i;
        }
        function i(e, n) {
          return e.map(function (e) {
            return n
              .map(function (t) {
                return o(e[t]);
              })
              .join(t);
          });
        }
        function a(e) {
          return e.map(o).join(t);
        }
        function o(t) {
          return null == t
            ? ''
            : t instanceof Date
            ? Nc(t)
            : e.test((t += ''))
            ? '"' + t.replace(/"/g, '""') + '"'
            : t;
        }
        return {
          parse: function (t, e) {
            var n,
              i,
              a = r(t, function (t, r) {
                if (n) return n(t, r - 1);
                (i = t),
                  (n = e
                    ? (function (t, e) {
                        var n = Dc(t);
                        return function (r, i) {
                          return e(n(r), i, t);
                        };
                      })(t, e)
                    : Dc(t));
              });
            return (a.columns = i || []), a;
          },
          parseRows: r,
          format: function (e, n) {
            return (
              null == n && (n = Lc(e)),
              [n.map(o).join(t)].concat(i(e, n)).join('\n')
            );
          },
          formatBody: function (t, e) {
            return null == e && (e = Lc(t)), i(t, e).join('\n');
          },
          formatRows: function (t) {
            return t.map(a).join('\n');
          },
          formatRow: a,
          formatValue: o,
        };
      }
      var zc = Ic(','),
        jc = zc.parse,
        Fc =
          (zc.parseRows,
          zc.format,
          zc.formatBody,
          zc.formatRows,
          zc.formatRow,
          zc.formatValue,
          Ic('\t')),
        Vc = Fc.parse;
      Fc.parseRows,
        Fc.format,
        Fc.formatBody,
        Fc.formatRows,
        Fc.formatRow,
        Fc.formatValue;
      function Bc(t) {
        if (!t.ok) throw new Error(t.status + ' ' + t.statusText);
        return t.text();
      }
      function Wc(t, e) {
        return fetch(t, e).then(Bc);
      }
      function Hc(t) {
        return function (e, n, r) {
          return (
            2 === arguments.length &&
              'function' === typeof n &&
              ((r = n), (n = void 0)),
            Wc(e, n).then(function (e) {
              return t(e, r);
            })
          );
        };
      }
      var Uc = Hc(jc);
      Hc(Vc);
      function Yc(t, e, n) {
        (this.k = t), (this.x = e), (this.y = n);
      }
      Yc.prototype = {
        constructor: Yc,
        scale: function (t) {
          return 1 === t ? this : new Yc(this.k * t, this.x, this.y);
        },
        translate: function (t, e) {
          return (0 === t) & (0 === e)
            ? this
            : new Yc(this.k, this.x + this.k * t, this.y + this.k * e);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            'translate(' + this.x + ',' + this.y + ') scale(' + this.k + ')'
          );
        },
      };
      new Yc(1, 0, 0);
      Yc.prototype;
      var $c = function (t) {
          c(t);
          T();
          var e = _(function (t) {
              return t.selectFile.selectCsv;
            }),
            n = _(function (t) {
              return t.panel.selectPanel;
            }),
            r = '/'.concat(e, '.csv'),
            i = new Headers();
          i.set('Authorization', 'Basic ' + btoa('nikita.max:E4DqvJacNxSW'));
          var a = [],
            o = './'.concat(e, '.csv');
          Uc(o, function (t) {
            a.push(t);
          });
          function s() {
            return (
              (s = u(
                l().mark(function t(e) {
                  var n, a, o, s;
                  return l().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            fetch(r, { mode: 'no-cors', headers: i })
                          );
                        case 2:
                          return (n = t.sent), (t.next = 5), n.text();
                        case 5:
                          (a = t.sent),
                            (o = a.split(/\n/)),
                            (s = o.length - 2),
                            o.splice(1, s).forEach(function (t) {
                              var n = t.split(','),
                                r = n[0],
                                i = n[1],
                                a = [+n[2], +n[3], +n[4]],
                                o = [+n[5], +n[6], +n[7]],
                                l = a.map(function (t, e) {
                                  return t * o[e];
                                });
                              f.push(r),
                                h.push(i),
                                d.push(a[e]),
                                p.push(o[e]),
                                v.push(l[e]);
                            });
                        case 10:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )),
              s.apply(this, arguments)
            );
          }
          console.log(a);
          var f = [],
            h = [],
            d = [],
            p = [],
            v = [],
            g = (function (t) {
              return s.apply(this, arguments);
            })(n);
          return (0, tl.jsxs)('div', {
            className: 'mainBox',
            children: [
              (0, tl.jsxs)('div', {
                className: 'chart-box',
                children: [
                  (0, tl.jsx)(el, {
                    type: 'amp',
                    label:
                      '\u0421\u0438\u043b\u0430 \u0442\u043e\u043a\u0430, A',
                    arrDate: f,
                    arrTime: h,
                    yAxis: d,
                    promise: g,
                    panel: n,
                  }),
                  (0, tl.jsx)(el, {
                    type: 'volt',
                    label:
                      '\u041d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u0435, V',
                    arrDate: f,
                    arrTime: h,
                    yAxis: p,
                    promise: g,
                    panel: n,
                  }),
                ],
              }),
              (0, tl.jsx)('div', {
                className: 'chart-box',
                children: (0, tl.jsx)(el, {
                  type: 'watt',
                  label: '\u041c\u043e\u0449\u043d\u043e\u0441\u0442\u044c, W',
                  arrDate: f,
                  arrTime: h,
                  yAxis: v,
                  promise: g,
                  panel: n,
                }),
              }),
            ],
          });
        },
        Xc = function (t) {
          var e = t.elementInside;
          return (0, tl.jsx)('div', { className: 'sideElement', children: e });
        };
      function Gc(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          '[Immer] minified error nr: ' +
            t +
            (n.length
              ? ' ' +
                n
                  .map(function (t) {
                    return "'" + t + "'";
                  })
                  .join(',')
              : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf'
        );
      }
      function Qc(t) {
        return !!t && !!t[Ff];
      }
      function qc(t) {
        var e;
        return (
          !!t &&
          ((function (t) {
            if (!t || 'object' != typeof t) return !1;
            var e = Object.getPrototypeOf(t);
            if (null === e) return !0;
            var n =
              Object.hasOwnProperty.call(e, 'constructor') && e.constructor;
            return (
              n === Object ||
              ('function' == typeof n && Function.toString.call(n) === Vf)
            );
          })(t) ||
            Array.isArray(t) ||
            !!t[jf] ||
            !!(null === (e = t.constructor) || void 0 === e ? void 0 : e[jf]) ||
            rf(t) ||
            af(t))
        );
      }
      function Zc(t, e, n) {
        void 0 === n && (n = !1),
          0 === Kc(t)
            ? (n ? Object.keys : Bf)(t).forEach(function (r) {
                (n && 'symbol' == typeof r) || e(r, t[r], t);
              })
            : t.forEach(function (n, r) {
                return e(r, n, t);
              });
      }
      function Kc(t) {
        var e = t[Ff];
        return e
          ? e.i > 3
            ? e.i - 4
            : e.i
          : Array.isArray(t)
          ? 1
          : rf(t)
          ? 2
          : af(t)
          ? 3
          : 0;
      }
      function Jc(t, e) {
        return 2 === Kc(t)
          ? t.has(e)
          : Object.prototype.hasOwnProperty.call(t, e);
      }
      function tf(t, e) {
        return 2 === Kc(t) ? t.get(e) : t[e];
      }
      function ef(t, e, n) {
        var r = Kc(t);
        2 === r ? t.set(e, n) : 3 === r ? (t.delete(e), t.add(n)) : (t[e] = n);
      }
      function nf(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      }
      function rf(t) {
        return Rf && t instanceof Map;
      }
      function af(t) {
        return Nf && t instanceof Set;
      }
      function of(t) {
        return t.o || t.t;
      }
      function lf(t) {
        if (Array.isArray(t)) return Array.prototype.slice.call(t);
        var e = Wf(t);
        delete e[Ff];
        for (var n = Bf(e), r = 0; r < n.length; r++) {
          var i = n[r],
            a = e[i];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (e[i] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: t[i],
              });
        }
        return Object.create(Object.getPrototypeOf(t), e);
      }
      function sf(t, e) {
        return (
          void 0 === e && (e = !1),
          cf(t) ||
            Qc(t) ||
            !qc(t) ||
            (Kc(t) > 1 && (t.set = t.add = t.clear = t.delete = uf),
            Object.freeze(t),
            e &&
              Zc(
                t,
                function (t, e) {
                  return sf(e, !0);
                },
                !0
              )),
          t
        );
      }
      function uf() {
        Gc(2);
      }
      function cf(t) {
        return null == t || 'object' != typeof t || Object.isFrozen(t);
      }
      function ff(t) {
        var e = Hf[t];
        return e || Gc(18, t), e;
      }
      function hf(t, e) {
        Hf[t] || (Hf[t] = e);
      }
      function df() {
        return Df;
      }
      function pf(t, e) {
        e && (ff('Patches'), (t.u = []), (t.s = []), (t.v = e));
      }
      function vf(t) {
        gf(t), t.p.forEach(mf), (t.p = null);
      }
      function gf(t) {
        t === Df && (Df = t.l);
      }
      function yf(t) {
        return (Df = { p: [], l: Df, h: t, m: !0, _: 0 });
      }
      function mf(t) {
        var e = t[Ff];
        0 === e.i || 1 === e.i ? e.j() : (e.O = !0);
      }
      function bf(t, e) {
        e._ = e.p.length;
        var n = e.p[0],
          r = void 0 !== t && t !== n;
        return (
          e.h.g || ff('ES5').S(e, t, r),
          r
            ? (n[Ff].P && (vf(e), Gc(4)),
              qc(t) && ((t = xf(e, t)), e.l || _f(e, t)),
              e.u && ff('Patches').M(n[Ff].t, t, e.u, e.s))
            : (t = xf(e, n, [])),
          vf(e),
          e.u && e.v(e.u, e.s),
          t !== zf ? t : void 0
        );
      }
      function xf(t, e, n) {
        if (cf(e)) return e;
        var r = e[Ff];
        if (!r)
          return (
            Zc(
              e,
              function (i, a) {
                return kf(t, r, e, i, a, n);
              },
              !0
            ),
            e
          );
        if (r.A !== t) return e;
        if (!r.P) return _f(t, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var i = 4 === r.i || 5 === r.i ? (r.o = lf(r.k)) : r.o;
          Zc(3 === r.i ? new Set(i) : i, function (e, a) {
            return kf(t, r, i, e, a, n);
          }),
            _f(t, i, !1),
            n && t.u && ff('Patches').R(r, n, t.u, t.s);
        }
        return r.o;
      }
      function kf(t, e, n, r, i, a) {
        if (Qc(i)) {
          var o = xf(
            t,
            i,
            a && e && 3 !== e.i && !Jc(e.D, r) ? a.concat(r) : void 0
          );
          if ((ef(n, r, o), !Qc(o))) return;
          t.m = !1;
        }
        if (qc(i) && !cf(i)) {
          if (!t.h.F && t._ < 1) return;
          xf(t, i), (e && e.A.l) || _f(t, i);
        }
      }
      function _f(t, e, n) {
        void 0 === n && (n = !1), t.h.F && t.m && sf(e, n);
      }
      function wf(t, e) {
        var n = t[Ff];
        return (n ? of(n) : t)[e];
      }
      function Sf(t, e) {
        if (e in t)
          for (var n = Object.getPrototypeOf(t); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, e);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function Mf(t) {
        t.P || ((t.P = !0), t.l && Mf(t.l));
      }
      function Ef(t) {
        t.o || (t.o = lf(t.t));
      }
      function Pf(t, e, n) {
        var r = rf(e)
          ? ff('MapSet').N(e, n)
          : af(e)
          ? ff('MapSet').T(e, n)
          : t.g
          ? (function (t, e) {
              var n = Array.isArray(t),
                r = {
                  i: n ? 1 : 0,
                  A: e ? e.A : df(),
                  P: !1,
                  I: !1,
                  D: {},
                  l: e,
                  t: t,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                },
                i = r,
                a = Uf;
              n && ((i = [r]), (a = Yf));
              var o = Proxy.revocable(i, a),
                l = o.revoke,
                s = o.proxy;
              return (r.k = s), (r.j = l), s;
            })(e, n)
          : ff('ES5').J(e, n);
        return (n ? n.A : df()).p.push(r), r;
      }
      function Cf(t) {
        return (
          Qc(t) || Gc(22, t),
          (function t(e) {
            if (!qc(e)) return e;
            var n,
              r = e[Ff],
              i = Kc(e);
            if (r) {
              if (!r.P && (r.i < 4 || !ff('ES5').K(r))) return r.t;
              (r.I = !0), (n = Of(e, i)), (r.I = !1);
            } else n = Of(e, i);
            return (
              Zc(n, function (e, i) {
                (r && tf(r.t, e) === i) || ef(n, e, t(i));
              }),
              3 === i ? new Set(n) : n
            );
          })(t)
        );
      }
      function Of(t, e) {
        switch (e) {
          case 2:
            return new Map(t);
          case 3:
            return Array.from(t);
        }
        return lf(t);
      }
      function Af() {
        function t(t, e) {
          var n = i[t];
          return (
            n
              ? (n.enumerable = e)
              : (i[t] = n =
                  {
                    configurable: !0,
                    enumerable: e,
                    get: function () {
                      var e = this[Ff];
                      return Uf.get(e, t);
                    },
                    set: function (e) {
                      var n = this[Ff];
                      Uf.set(n, t, e);
                    },
                  }),
            n
          );
        }
        function e(t) {
          for (var e = t.length - 1; e >= 0; e--) {
            var i = t[e][Ff];
            if (!i.P)
              switch (i.i) {
                case 5:
                  r(i) && Mf(i);
                  break;
                case 4:
                  n(i) && Mf(i);
              }
          }
        }
        function n(t) {
          for (var e = t.t, n = t.k, r = Bf(n), i = r.length - 1; i >= 0; i--) {
            var a = r[i];
            if (a !== Ff) {
              var o = e[a];
              if (void 0 === o && !Jc(e, a)) return !0;
              var l = n[a],
                s = l && l[Ff];
              if (s ? s.t !== o : !nf(l, o)) return !0;
            }
          }
          var u = !!e[Ff];
          return r.length !== Bf(e).length + (u ? 0 : 1);
        }
        function r(t) {
          var e = t.k;
          if (e.length !== t.t.length) return !0;
          var n = Object.getOwnPropertyDescriptor(e, e.length - 1);
          if (n && !n.get) return !0;
          for (var r = 0; r < e.length; r++)
            if (!e.hasOwnProperty(r)) return !0;
          return !1;
        }
        var i = {};
        hf('ES5', {
          J: function (e, n) {
            var r = Array.isArray(e),
              i = (function (e, n) {
                if (e) {
                  for (var r = Array(n.length), i = 0; i < n.length; i++)
                    Object.defineProperty(r, '' + i, t(i, !0));
                  return r;
                }
                var a = Wf(n);
                delete a[Ff];
                for (var o = Bf(a), l = 0; l < o.length; l++) {
                  var s = o[l];
                  a[s] = t(s, e || !!a[s].enumerable);
                }
                return Object.create(Object.getPrototypeOf(n), a);
              })(r, e),
              a = {
                i: r ? 5 : 4,
                A: n ? n.A : df(),
                P: !1,
                I: !1,
                D: {},
                l: n,
                t: e,
                k: i,
                o: null,
                O: !1,
                C: !1,
              };
            return Object.defineProperty(i, Ff, { value: a, writable: !0 }), i;
          },
          S: function (t, n, i) {
            i
              ? Qc(n) && n[Ff].A === t && e(t.p)
              : (t.u &&
                  (function t(e) {
                    if (e && 'object' == typeof e) {
                      var n = e[Ff];
                      if (n) {
                        var i = n.t,
                          a = n.k,
                          o = n.D,
                          l = n.i;
                        if (4 === l)
                          Zc(a, function (e) {
                            e !== Ff &&
                              (void 0 !== i[e] || Jc(i, e)
                                ? o[e] || t(a[e])
                                : ((o[e] = !0), Mf(n)));
                          }),
                            Zc(i, function (t) {
                              void 0 !== a[t] ||
                                Jc(a, t) ||
                                ((o[t] = !1), Mf(n));
                            });
                        else if (5 === l) {
                          if (
                            (r(n) && (Mf(n), (o.length = !0)),
                            a.length < i.length)
                          )
                            for (var s = a.length; s < i.length; s++) o[s] = !1;
                          else
                            for (var u = i.length; u < a.length; u++) o[u] = !0;
                          for (
                            var c = Math.min(a.length, i.length), f = 0;
                            f < c;
                            f++
                          )
                            a.hasOwnProperty(f) || (o[f] = !0),
                              void 0 === o[f] && t(a[f]);
                        }
                      }
                    }
                  })(t.p[0]),
                e(t.p));
          },
          K: function (t) {
            return 4 === t.i ? n(t) : r(t);
          },
        });
      }
      var Tf,
        Df,
        Lf = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
        Rf = 'undefined' != typeof Map,
        Nf = 'undefined' != typeof Set,
        If =
          'undefined' != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          'undefined' != typeof Reflect,
        zf = Lf
          ? Symbol.for('immer-nothing')
          : (((Tf = {})['immer-nothing'] = !0), Tf),
        jf = Lf ? Symbol.for('immer-draftable') : '__$immer_draftable',
        Ff = Lf ? Symbol.for('immer-state') : '__$immer_state',
        Vf =
          ('undefined' != typeof Symbol && Symbol.iterator,
          '' + Object.prototype.constructor),
        Bf =
          'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t)
                );
              }
            : Object.getOwnPropertyNames,
        Wf =
          Object.getOwnPropertyDescriptors ||
          function (t) {
            var e = {};
            return (
              Bf(t).forEach(function (n) {
                e[n] = Object.getOwnPropertyDescriptor(t, n);
              }),
              e
            );
          },
        Hf = {},
        Uf = {
          get: function (t, e) {
            if (e === Ff) return t;
            var n = of(t);
            if (!Jc(n, e))
              return (function (t, e, n) {
                var r,
                  i = Sf(e, n);
                return i
                  ? 'value' in i
                    ? i.value
                    : null === (r = i.get) || void 0 === r
                    ? void 0
                    : r.call(t.k)
                  : void 0;
              })(t, n, e);
            var r = n[e];
            return t.I || !qc(r)
              ? r
              : r === wf(t.t, e)
              ? (Ef(t), (t.o[e] = Pf(t.A.h, r, t)))
              : r;
          },
          has: function (t, e) {
            return e in of(t);
          },
          ownKeys: function (t) {
            return Reflect.ownKeys(of(t));
          },
          set: function (t, e, n) {
            var r = Sf(of(t), e);
            if (null == r ? void 0 : r.set) return r.set.call(t.k, n), !0;
            if (!t.P) {
              var i = wf(of(t), e),
                a = null == i ? void 0 : i[Ff];
              if (a && a.t === n) return (t.o[e] = n), (t.D[e] = !1), !0;
              if (nf(n, i) && (void 0 !== n || Jc(t.t, e))) return !0;
              Ef(t), Mf(t);
            }
            return (
              (t.o[e] === n &&
                'number' != typeof n &&
                (void 0 !== n || e in t.o)) ||
              ((t.o[e] = n), (t.D[e] = !0), !0)
            );
          },
          deleteProperty: function (t, e) {
            return (
              void 0 !== wf(t.t, e) || e in t.t
                ? ((t.D[e] = !1), Ef(t), Mf(t))
                : delete t.D[e],
              t.o && delete t.o[e],
              !0
            );
          },
          getOwnPropertyDescriptor: function (t, e) {
            var n = of(t),
              r = Reflect.getOwnPropertyDescriptor(n, e);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== t.i || 'length' !== e,
                  enumerable: r.enumerable,
                  value: n[e],
                }
              : r;
          },
          defineProperty: function () {
            Gc(11);
          },
          getPrototypeOf: function (t) {
            return Object.getPrototypeOf(t.t);
          },
          setPrototypeOf: function () {
            Gc(12);
          },
        },
        Yf = {};
      Zc(Uf, function (t, e) {
        Yf[t] = function () {
          return (arguments[0] = arguments[0][0]), e.apply(this, arguments);
        };
      }),
        (Yf.deleteProperty = function (t, e) {
          return Yf.set.call(this, t, e, void 0);
        }),
        (Yf.set = function (t, e, n) {
          return Uf.set.call(this, t[0], e, n, t[0]);
        });
      var $f = (function () {
          function t(t) {
            var e = this;
            (this.g = If),
              (this.F = !0),
              (this.produce = function (t, n, r) {
                if ('function' == typeof t && 'function' != typeof n) {
                  var i = n;
                  n = t;
                  var a = e;
                  return function (t) {
                    var e = this;
                    void 0 === t && (t = i);
                    for (
                      var r = arguments.length,
                        o = Array(r > 1 ? r - 1 : 0),
                        l = 1;
                      l < r;
                      l++
                    )
                      o[l - 1] = arguments[l];
                    return a.produce(t, function (t) {
                      var r;
                      return (r = n).call.apply(r, [e, t].concat(o));
                    });
                  };
                }
                var o;
                if (
                  ('function' != typeof n && Gc(6),
                  void 0 !== r && 'function' != typeof r && Gc(7),
                  qc(t))
                ) {
                  var l = yf(e),
                    s = Pf(e, t, void 0),
                    u = !0;
                  try {
                    (o = n(s)), (u = !1);
                  } finally {
                    u ? vf(l) : gf(l);
                  }
                  return 'undefined' != typeof Promise && o instanceof Promise
                    ? o.then(
                        function (t) {
                          return pf(l, r), bf(t, l);
                        },
                        function (t) {
                          throw (vf(l), t);
                        }
                      )
                    : (pf(l, r), bf(o, l));
                }
                if (!t || 'object' != typeof t) {
                  if (
                    (void 0 === (o = n(t)) && (o = t),
                    o === zf && (o = void 0),
                    e.F && sf(o, !0),
                    r)
                  ) {
                    var c = [],
                      f = [];
                    ff('Patches').M(t, o, c, f), r(c, f);
                  }
                  return o;
                }
                Gc(21, t);
              }),
              (this.produceWithPatches = function (t, n) {
                if ('function' == typeof t)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        a = 1;
                      a < r;
                      a++
                    )
                      i[a - 1] = arguments[a];
                    return e.produceWithPatches(n, function (e) {
                      return t.apply(void 0, [e].concat(i));
                    });
                  };
                var r,
                  i,
                  a = e.produce(t, n, function (t, e) {
                    (r = t), (i = e);
                  });
                return 'undefined' != typeof Promise && a instanceof Promise
                  ? a.then(function (t) {
                      return [t, r, i];
                    })
                  : [a, r, i];
              }),
              'boolean' == typeof (null == t ? void 0 : t.useProxies) &&
                this.setUseProxies(t.useProxies),
              'boolean' == typeof (null == t ? void 0 : t.autoFreeze) &&
                this.setAutoFreeze(t.autoFreeze);
          }
          var e = t.prototype;
          return (
            (e.createDraft = function (t) {
              qc(t) || Gc(8), Qc(t) && (t = Cf(t));
              var e = yf(this),
                n = Pf(this, t, void 0);
              return (n[Ff].C = !0), gf(e), n;
            }),
            (e.finishDraft = function (t, e) {
              var n = (t && t[Ff]).A;
              return pf(n, e), bf(void 0, n);
            }),
            (e.setAutoFreeze = function (t) {
              this.F = t;
            }),
            (e.setUseProxies = function (t) {
              t && !If && Gc(20), (this.g = t);
            }),
            (e.applyPatches = function (t, e) {
              var n;
              for (n = e.length - 1; n >= 0; n--) {
                var r = e[n];
                if (0 === r.path.length && 'replace' === r.op) {
                  t = r.value;
                  break;
                }
              }
              n > -1 && (e = e.slice(n + 1));
              var i = ff('Patches').$;
              return Qc(t)
                ? i(t, e)
                : this.produce(t, function (t) {
                    return i(t, e);
                  });
            }),
            t
          );
        })(),
        Xf = new $f(),
        Gf = Xf.produce,
        Qf =
          (Xf.produceWithPatches.bind(Xf),
          Xf.setAutoFreeze.bind(Xf),
          Xf.setUseProxies.bind(Xf),
          Xf.applyPatches.bind(Xf),
          Xf.createDraft.bind(Xf),
          Xf.finishDraft.bind(Xf),
          Gf);
      function qf(t) {
        return (
          'Minified Redux error #' +
          t +
          '; visit https://redux.js.org/Errors?code=' +
          t +
          ' for the full message or use the non-minified dev environment for full errors. '
        );
      }
      var Zf =
          ('function' === typeof Symbol && Symbol.observable) || '@@observable',
        Kf = function () {
          return Math.random().toString(36).substring(7).split('').join('.');
        },
        Jf = {
          INIT: '@@redux/INIT' + Kf(),
          REPLACE: '@@redux/REPLACE' + Kf(),
          PROBE_UNKNOWN_ACTION: function () {
            return '@@redux/PROBE_UNKNOWN_ACTION' + Kf();
          },
        };
      function th(t) {
        if ('object' !== typeof t || null === t) return !1;
        for (var e = t; null !== Object.getPrototypeOf(e); )
          e = Object.getPrototypeOf(e);
        return Object.getPrototypeOf(t) === e;
      }
      function eh(t, e, n) {
        var r;
        if (
          ('function' === typeof e && 'function' === typeof n) ||
          ('function' === typeof n && 'function' === typeof arguments[3])
        )
          throw new Error(qf(0));
        if (
          ('function' === typeof e &&
            'undefined' === typeof n &&
            ((n = e), (e = void 0)),
          'undefined' !== typeof n)
        ) {
          if ('function' !== typeof n) throw new Error(qf(1));
          return n(eh)(t, e);
        }
        if ('function' !== typeof t) throw new Error(qf(2));
        var i = t,
          a = e,
          o = [],
          l = o,
          s = !1;
        function u() {
          l === o && (l = o.slice());
        }
        function c() {
          if (s) throw new Error(qf(3));
          return a;
        }
        function f(t) {
          if ('function' !== typeof t) throw new Error(qf(4));
          if (s) throw new Error(qf(5));
          var e = !0;
          return (
            u(),
            l.push(t),
            function () {
              if (e) {
                if (s) throw new Error(qf(6));
                (e = !1), u();
                var n = l.indexOf(t);
                l.splice(n, 1), (o = null);
              }
            }
          );
        }
        function h(t) {
          if (!th(t)) throw new Error(qf(7));
          if ('undefined' === typeof t.type) throw new Error(qf(8));
          if (s) throw new Error(qf(9));
          try {
            (s = !0), (a = i(a, t));
          } finally {
            s = !1;
          }
          for (var e = (o = l), n = 0; n < e.length; n++) {
            (0, e[n])();
          }
          return t;
        }
        function d(t) {
          if ('function' !== typeof t) throw new Error(qf(10));
          (i = t), h({ type: Jf.REPLACE });
        }
        function p() {
          var t,
            e = f;
          return (
            ((t = {
              subscribe: function (t) {
                if ('object' !== typeof t || null === t)
                  throw new Error(qf(11));
                function n() {
                  t.next && t.next(c());
                }
                return n(), { unsubscribe: e(n) };
              },
            })[Zf] = function () {
              return this;
            }),
            t
          );
        }
        return (
          h({ type: Jf.INIT }),
          ((r = { dispatch: h, subscribe: f, getState: c, replaceReducer: d })[
            Zf
          ] = p),
          r
        );
      }
      function nh(t) {
        for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++) {
          var i = e[r];
          0, 'function' === typeof t[i] && (n[i] = t[i]);
        }
        var a,
          o = Object.keys(n);
        try {
          !(function (t) {
            Object.keys(t).forEach(function (e) {
              var n = t[e];
              if ('undefined' === typeof n(void 0, { type: Jf.INIT }))
                throw new Error(qf(12));
              if (
                'undefined' ===
                typeof n(void 0, { type: Jf.PROBE_UNKNOWN_ACTION() })
              )
                throw new Error(qf(13));
            });
          })(n);
        } catch (l) {
          a = l;
        }
        return function (t, e) {
          if ((void 0 === t && (t = {}), a)) throw a;
          for (var r = !1, i = {}, l = 0; l < o.length; l++) {
            var s = o[l],
              u = n[s],
              c = t[s],
              f = u(c, e);
            if ('undefined' === typeof f) {
              e && e.type;
              throw new Error(qf(14));
            }
            (i[s] = f), (r = r || f !== c);
          }
          return (r = r || o.length !== Object.keys(t).length) ? i : t;
        };
      }
      function rh() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return 0 === e.length
          ? function (t) {
              return t;
            }
          : 1 === e.length
          ? e[0]
          : e.reduce(function (t, e) {
              return function () {
                return t(e.apply(void 0, arguments));
              };
            });
      }
      function ih() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function (t) {
          return function () {
            var n = t.apply(void 0, arguments),
              r = function () {
                throw new Error(qf(15));
              },
              i = {
                getState: n.getState,
                dispatch: function () {
                  return r.apply(void 0, arguments);
                },
              },
              a = e.map(function (t) {
                return t(i);
              });
            return (
              (r = rh.apply(void 0, a)(n.dispatch)),
              R(R({}, n), {}, { dispatch: r })
            );
          };
        };
      }
      function ah(t) {
        return function (e) {
          var n = e.dispatch,
            r = e.getState;
          return function (e) {
            return function (i) {
              return 'function' === typeof i ? i(n, r, t) : e(i);
            };
          };
        };
      }
      var oh = ah();
      oh.withExtraArgument = ah;
      var lh = oh,
        sh = (function () {
          var t = function (e, n) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                }),
              t(e, n)
            );
          };
          return function (e, n) {
            if ('function' !== typeof n && null !== n)
              throw new TypeError(
                'Class extends value ' +
                  String(n) +
                  ' is not a constructor or null'
              );
            function r() {
              this.constructor = e;
            }
            t(e, n),
              (e.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r()));
          };
        })(),
        uh = function (t, e) {
          var n,
            r,
            i,
            a,
            o = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (a = { next: l(0), throw: l(1), return: l(2) }),
            'function' === typeof Symbol &&
              (a[Symbol.iterator] = function () {
                return this;
              }),
            a
          );
          function l(a) {
            return function (l) {
              return (function (a) {
                if (n) throw new TypeError('Generator is already executing.');
                for (; o; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (i =
                          2 & a[0]
                            ? r.return
                            : a[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                        !(i = i.call(r, a[1])).done)
                    )
                      return i;
                    switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                      case 0:
                      case 1:
                        i = a;
                        break;
                      case 4:
                        return o.label++, { value: a[1], done: !1 };
                      case 5:
                        o.label++, (r = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = o.ops.pop()), o.trys.pop();
                        continue;
                      default:
                        if (
                          !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          o = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!i || (a[1] > i[0] && a[1] < i[3]))
                        ) {
                          o.label = a[1];
                          break;
                        }
                        if (6 === a[0] && o.label < i[1]) {
                          (o.label = i[1]), (i = a);
                          break;
                        }
                        if (i && o.label < i[2]) {
                          (o.label = i[2]), o.ops.push(a);
                          break;
                        }
                        i[2] && o.ops.pop(), o.trys.pop();
                        continue;
                    }
                    a = e.call(t, o);
                  } catch (l) {
                    (a = [6, l]), (r = 0);
                  } finally {
                    n = i = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, l]);
            };
          }
        },
        ch = function (t, e) {
          for (var n = 0, r = e.length, i = t.length; n < r; n++, i++)
            t[i] = e[n];
          return t;
        },
        fh = Object.defineProperty,
        hh = Object.defineProperties,
        dh = Object.getOwnPropertyDescriptors,
        ph = Object.getOwnPropertySymbols,
        vh = Object.prototype.hasOwnProperty,
        gh = Object.prototype.propertyIsEnumerable,
        yh = function (t, e, n) {
          return e in t
            ? fh(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        },
        mh = function (t, e) {
          for (var n in e || (e = {})) vh.call(e, n) && yh(t, n, e[n]);
          if (ph)
            for (var r = 0, i = ph(e); r < i.length; r++) {
              n = i[r];
              gh.call(e, n) && yh(t, n, e[n]);
            }
          return t;
        },
        bh = function (t, e) {
          return hh(t, dh(e));
        },
        xh = function (t, e, n) {
          return new Promise(function (r, i) {
            var a = function (t) {
                try {
                  l(n.next(t));
                } catch (e) {
                  i(e);
                }
              },
              o = function (t) {
                try {
                  l(n.throw(t));
                } catch (e) {
                  i(e);
                }
              },
              l = function (t) {
                return t.done
                  ? r(t.value)
                  : Promise.resolve(t.value).then(a, o);
              };
            l((n = n.apply(t, e)).next());
          });
        },
        kh =
          'undefined' !== typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 !== arguments.length)
                  return 'object' === typeof arguments[0]
                    ? rh
                    : rh.apply(null, arguments);
              };
      'undefined' !== typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      function _h(t) {
        if ('object' !== typeof t || null === t) return !1;
        var e = Object.getPrototypeOf(t);
        if (null === e) return !0;
        for (var n = e; null !== Object.getPrototypeOf(n); )
          n = Object.getPrototypeOf(n);
        return e === n;
      }
      var wh = (function (t) {
        function e() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          var i = t.apply(this, n) || this;
          return Object.setPrototypeOf(i, e.prototype), i;
        }
        return (
          sh(e, t),
          Object.defineProperty(e, Symbol.species, {
            get: function () {
              return e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.concat = function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            return t.prototype.concat.apply(this, e);
          }),
          (e.prototype.prepend = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return 1 === t.length && Array.isArray(t[0])
              ? new (e.bind.apply(e, ch([void 0], t[0].concat(this))))()
              : new (e.bind.apply(e, ch([void 0], t.concat(this))))();
          }),
          e
        );
      })(Array);
      function Sh(t) {
        return qc(t) ? Qf(t, function () {}) : t;
      }
      function Mh() {
        return function (t) {
          return (function (t) {
            void 0 === t && (t = {});
            var e = t.thunk,
              n = void 0 === e || e,
              r = (t.immutableCheck, t.serializableCheck, new wh());
            n &&
              (!(function (t) {
                return 'boolean' === typeof t;
              })(n)
                ? r.push(lh.withExtraArgument(n.extraArgument))
                : r.push(lh));
            0;
            return r;
          })(t);
        };
      }
      function Eh(t, e) {
        function n() {
          for (var n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          if (e) {
            var i = e.apply(void 0, n);
            if (!i) throw new Error('prepareAction did not return an object');
            return mh(
              mh(
                { type: t, payload: i.payload },
                'meta' in i && { meta: i.meta }
              ),
              'error' in i && { error: i.error }
            );
          }
          return { type: t, payload: n[0] };
        }
        return (
          (n.toString = function () {
            return '' + t;
          }),
          (n.type = t),
          (n.match = function (e) {
            return e.type === t;
          }),
          n
        );
      }
      function Ph(t) {
        var e,
          n = {},
          r = [],
          i = {
            addCase: function (t, e) {
              var r = 'string' === typeof t ? t : t.type;
              if (r in n)
                throw new Error(
                  'addCase cannot be called with two reducers for the same action type'
                );
              return (n[r] = e), i;
            },
            addMatcher: function (t, e) {
              return r.push({ matcher: t, reducer: e }), i;
            },
            addDefaultCase: function (t) {
              return (e = t), i;
            },
          };
        return t(i), [n, r, e];
      }
      function Ch(t) {
        var e = t.name;
        if (!e) throw new Error('`name` is a required option for createSlice');
        var n,
          r =
            'function' == typeof t.initialState
              ? t.initialState
              : Sh(t.initialState),
          i = t.reducers || {},
          a = Object.keys(i),
          o = {},
          l = {},
          s = {};
        function u() {
          var e =
              'function' === typeof t.extraReducers
                ? Ph(t.extraReducers)
                : [t.extraReducers],
            n = e[0],
            i = void 0 === n ? {} : n,
            a = e[1],
            o = void 0 === a ? [] : a,
            s = e[2],
            u = void 0 === s ? void 0 : s,
            c = mh(mh({}, i), l);
          return (function (t, e, n, r) {
            void 0 === n && (n = []);
            var i,
              a = 'function' === typeof e ? Ph(e) : [e, n, r],
              o = a[0],
              l = a[1],
              s = a[2];
            if (
              (function (t) {
                return 'function' === typeof t;
              })(t)
            )
              i = function () {
                return Sh(t());
              };
            else {
              var u = Sh(t);
              i = function () {
                return u;
              };
            }
            function c(t, e) {
              void 0 === t && (t = i());
              var n = ch(
                [o[e.type]],
                l
                  .filter(function (t) {
                    return (0, t.matcher)(e);
                  })
                  .map(function (t) {
                    return t.reducer;
                  })
              );
              return (
                0 ===
                  n.filter(function (t) {
                    return !!t;
                  }).length && (n = [s]),
                n.reduce(function (t, n) {
                  if (n) {
                    var r;
                    if (Qc(t)) return void 0 === (r = n(t, e)) ? t : r;
                    if (qc(t))
                      return Qf(t, function (t) {
                        return n(t, e);
                      });
                    if (void 0 === (r = n(t, e))) {
                      if (null === t) return t;
                      throw Error(
                        'A case reducer on a non-draftable value must not return undefined'
                      );
                    }
                    return r;
                  }
                  return t;
                }, t)
              );
            }
            return (c.getInitialState = i), c;
          })(r, function (t) {
            for (var e in c) t.addCase(e, c[e]);
            for (var n = 0, r = o; n < r.length; n++) {
              var i = r[n];
              t.addMatcher(i.matcher, i.reducer);
            }
            u && t.addDefaultCase(u);
          });
        }
        return (
          a.forEach(function (t) {
            var n,
              r,
              a = i[t],
              u = e + '/' + t;
            'reducer' in a ? ((n = a.reducer), (r = a.prepare)) : (n = a),
              (o[t] = n),
              (l[u] = n),
              (s[t] = r ? Eh(u, r) : Eh(u));
          }),
          {
            name: e,
            reducer: function (t, e) {
              return n || (n = u()), n(t, e);
            },
            actions: s,
            caseReducers: o,
            getInitialState: function () {
              return n || (n = u()), n.getInitialState();
            },
          }
        );
      }
      var Oh = function (t) {
          void 0 === t && (t = 21);
          for (var e = '', n = t; n--; )
            e +=
              'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'[
                (64 * Math.random()) | 0
              ];
          return e;
        },
        Ah = ['name', 'message', 'stack', 'code'],
        Th = function (t, e) {
          (this.payload = t), (this.meta = e);
        },
        Dh = function (t, e) {
          (this.payload = t), (this.meta = e);
        },
        Lh = function (t) {
          if ('object' === typeof t && null !== t) {
            for (var e = {}, n = 0, r = Ah; n < r.length; n++) {
              var i = r[n];
              'string' === typeof t[i] && (e[i] = t[i]);
            }
            return e;
          }
          return { message: String(t) };
        };
      !(function () {
        function t(t, e, n) {
          var r = Eh(t + '/fulfilled', function (t, e, n, r) {
              return {
                payload: t,
                meta: bh(mh({}, r || {}), {
                  arg: n,
                  requestId: e,
                  requestStatus: 'fulfilled',
                }),
              };
            }),
            i = Eh(t + '/pending', function (t, e, n) {
              return {
                payload: void 0,
                meta: bh(mh({}, n || {}), {
                  arg: e,
                  requestId: t,
                  requestStatus: 'pending',
                }),
              };
            }),
            a = Eh(t + '/rejected', function (t, e, r, i, a) {
              return {
                payload: i,
                error: ((n && n.serializeError) || Lh)(t || 'Rejected'),
                meta: bh(mh({}, a || {}), {
                  arg: r,
                  requestId: e,
                  rejectedWithValue: !!i,
                  requestStatus: 'rejected',
                  aborted: 'AbortError' === (null == t ? void 0 : t.name),
                  condition: 'ConditionError' === (null == t ? void 0 : t.name),
                }),
              };
            }),
            o =
              'undefined' !== typeof AbortController
                ? AbortController
                : (function () {
                    function t() {
                      this.signal = {
                        aborted: !1,
                        addEventListener: function () {},
                        dispatchEvent: function () {
                          return !1;
                        },
                        onabort: function () {},
                        removeEventListener: function () {},
                        reason: void 0,
                        throwIfAborted: function () {},
                      };
                    }
                    return (
                      (t.prototype.abort = function () {
                        0;
                      }),
                      t
                    );
                  })();
          return Object.assign(
            function (t) {
              return function (l, s, u) {
                var c,
                  f = (null == n ? void 0 : n.idGenerator)
                    ? n.idGenerator(t)
                    : Oh(),
                  h = new o(),
                  d = new Promise(function (t, e) {
                    return h.signal.addEventListener('abort', function () {
                      return e({ name: 'AbortError', message: c || 'Aborted' });
                    });
                  }),
                  p = !1;
                function v(t) {
                  p && ((c = t), h.abort());
                }
                var g = (function () {
                  return xh(this, null, function () {
                    var o, c, g, y, m;
                    return uh(this, function (b) {
                      switch (b.label) {
                        case 0:
                          return (
                            b.trys.push([0, 4, , 5]),
                            (y =
                              null == (o = null == n ? void 0 : n.condition)
                                ? void 0
                                : o.call(n, t, { getState: s, extra: u })),
                            null === (x = y) ||
                            'object' !== typeof x ||
                            'function' !== typeof x.then
                              ? [3, 2]
                              : [4, y]
                          );
                        case 1:
                          (y = b.sent()), (b.label = 2);
                        case 2:
                          if (!1 === y)
                            throw {
                              name: 'ConditionError',
                              message:
                                'Aborted due to condition callback returning false.',
                            };
                          return (
                            (p = !0),
                            l(
                              i(
                                f,
                                t,
                                null ==
                                  (c = null == n ? void 0 : n.getPendingMeta)
                                  ? void 0
                                  : c.call(
                                      n,
                                      { requestId: f, arg: t },
                                      { getState: s, extra: u }
                                    )
                              )
                            ),
                            [
                              4,
                              Promise.race([
                                d,
                                Promise.resolve(
                                  e(t, {
                                    dispatch: l,
                                    getState: s,
                                    extra: u,
                                    requestId: f,
                                    signal: h.signal,
                                    abort: v,
                                    rejectWithValue: function (t, e) {
                                      return new Th(t, e);
                                    },
                                    fulfillWithValue: function (t, e) {
                                      return new Dh(t, e);
                                    },
                                  })
                                ).then(function (e) {
                                  if (e instanceof Th) throw e;
                                  return e instanceof Dh
                                    ? r(e.payload, f, t, e.meta)
                                    : r(e, f, t);
                                }),
                              ]),
                            ]
                          );
                        case 3:
                          return (g = b.sent()), [3, 5];
                        case 4:
                          return (
                            (m = b.sent()),
                            (g =
                              m instanceof Th
                                ? a(null, f, t, m.payload, m.meta)
                                : a(m, f, t)),
                            [3, 5]
                          );
                        case 5:
                          return (
                            (n &&
                              !n.dispatchConditionRejection &&
                              a.match(g) &&
                              g.meta.condition) ||
                              l(g),
                            [2, g]
                          );
                      }
                      var x;
                    });
                  });
                })();
                return Object.assign(g, {
                  abort: v,
                  requestId: f,
                  arg: t,
                  unwrap: function () {
                    return g.then(Rh);
                  },
                });
              };
            },
            { pending: i, rejected: a, fulfilled: r, typePrefix: t }
          );
        }
        t.withTypes = t;
      })();
      function Rh(t) {
        if (t.meta && t.meta.rejectedWithValue) throw t.payload;
        if (t.error) throw t.error;
        return t.payload;
      }
      Object.assign;
      var Nh = 'listenerMiddleware';
      Eh(Nh + '/add'), Eh(Nh + '/removeAll'), Eh(Nh + '/remove');
      var Ih;
      'function' === typeof queueMicrotask &&
        queueMicrotask.bind('undefined' !== typeof window ? window : n.g);
      Af();
      var zh = Ch({
          name: 'panel',
          initialState: { selectPanel: 0 },
          reducers: {
            setSelectPanel: function (t, e) {
              t.selectPanel = e.payload;
            },
          },
        }),
        jh = zh.actions.setSelectPanel,
        Fh = zh.reducer,
        Vh = function (t) {
          var e = t.options,
            n = T(),
            r = _(function (t) {
              return t.panel.selectPanel;
            }),
            i = e + 1;
          return (0, tl.jsx)('button', {
            className: 'button '.concat(e === r ? 'chosen' : ' '),
            onClick: function () {
              return n(jh(e));
            },
            children: i,
          });
        },
        Bh = Ch({
          name: 'dropdown',
          initialState: { dropdawnActive: !1 },
          reducers: {
            setDropdawnActive: function (t, e) {
              t.dropdawnActive = e.payload;
            },
          },
        }),
        Wh = Bh.actions.setDropdawnActive,
        Hh = Bh.reducer,
        Uh = Ch({
          name: 'selectFile',
          initialState: { selectFile: '09.2022', selectCsv: '2022-09' },
          reducers: {
            setSelectFile: function (t, e) {
              t.selectFile = e.payload;
            },
            setSelectCsv: function (t, e) {
              t.selectCsv = e.payload;
            },
          },
        }),
        Yh = Uh.actions,
        $h = Yh.setSelectFile,
        Xh = Yh.setSelectCsv,
        Gh = Uh.reducer,
        Qh = function (t) {
          var e = t.options,
            n = T(),
            r = _(function (t) {
              return t.dropdawn.dropdawnActive;
            }),
            i = _(function (t) {
              return t.selectFile.selectFile;
            });
          return (0, tl.jsx)(tl.Fragment, {
            children: (0, tl.jsxs)('div', {
              className: 'select '.concat(r && 'select-active'),
              onClick: function () {
                n(Wh(!r));
              },
              children: [
                i,
                (0, tl.jsx)('span', {
                  className: 'arrow-box',
                  children: (0, tl.jsx)('svg', {
                    className: 'arrow',
                    children: (0, tl.jsxs)('g', {
                      className: r ? 'reverse-rotate-arrow' : 'rotate-arrow',
                      children: [
                        (0, tl.jsx)('line', {
                          className: 'line',
                          x1: '1',
                          y1: '5',
                          x2: '7',
                          y2: '9',
                          stroke: '#000000',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                        }),
                        (0, tl.jsx)('line', {
                          x1: '7',
                          y1: '9',
                          x2: '13',
                          y2: '5',
                          stroke: '#000000',
                          strokeWidth: '2',
                          strokeLinecap: 'round',
                        }),
                      ],
                    }),
                  }),
                }),
                (0, tl.jsx)('div', {
                  className: 'dropdown '.concat(r ? 'dropdown-active' : ' '),
                  children: e.map(function (t, e) {
                    return (0, tl.jsx)(
                      'div',
                      {
                        className: 'dropdown-item',
                        onClick: function () {
                          n($h(t.option)), n(Xh(t.value));
                        },
                        children: t.option,
                      },
                      e
                    );
                  }),
                }),
              ],
            }),
          });
        },
        qh = function (t) {
          c(t);
          for (var e = [], n = 2022; n < 2051; n++)
            for (var r = 1; r < 13; r++) {
              2022 === n && r < 9 && (r = 9);
              var i = String(r);
              r < 10 && (i = '0' + r);
              var a = i + '.' + n,
                o = n + '-' + i;
              e.push({ option: a, value: o });
            }
          return (0, tl.jsxs)('div', {
            className: 'sidePanel',
            children: [
              (0, tl.jsx)(Xc, {
                elementInside: (0, tl.jsxs)('a', {
                  className: 'isemLogo',
                  href: 'https://isem.irk.ru/',
                  children: [
                    (0, tl.jsx)('img', {
                      src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAuCAYAAABkgjQ+AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXOaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjU1MmJhYWM0LWVjY2QtZmY0NC04NzAzLTBkOTA2OGEyNWZiYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMThBMzcyNzNGNkExMUU3QUZFMUMyQTIzOUE2ODc5OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkNDYwZjJkMi1mOGZhLWZmNDQtYTA2MS0xODZiNzU4NTM5YTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNi0yMFQxNDoxMTowOSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDYtMjBUMTQ6MTI6MTArMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDYtMjBUMTQ6MTI6MTArMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjRhMzdlZWUtNWZiYy1mMTQ3LWIyY2MtN2YzYzA5ZGUxZDJjIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1MmJhYWM0LWVjY2QtZmY0NC04NzAzLTBkOTA2OGEyNWZiYSIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNDYwZjJkMi1mOGZhLWZmNDQtYTA2MS0xODZiNzU4NTM5YTMiIHN0RXZ0OndoZW49IjIwMjEtMDYtMjBUMTQ6MTI6MTArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4iOF46AAAIG0lEQVRogc3be4xcZRkG8N8uXaAtIFe51QpyCbZIoCggCAIRlBaxAhoRlWBAMQQx+geIBkUFUYMJKkI0IhhEvEJABRQpEUUogsq91oLWAhVaVMql113/eGbc6dlzZs7M7KJPcjK7Z77bvt97ed73+3Zgz0PmeokwhOmYhpdha2yCtRjAIJbjcTyFJ/Dvl2px7TBpAsd+JfbHwXgtdsa2XfRfgcV4ELfhbtyDkXFdZQ2Mt5D2wNzGs3+fY22KmY3nnY13i3Ejvovb+xy/NgbGydyOxmmYMx6D1cQfcDmuwr8mcqLBPvvPwR24wUsrINgHX8WjOMcEuo5ehbQnfo6f4vXjt5yesAXOx0KcMBET9CL9s3BhD/2ewmP4S+NZjlXYoPH9WkzBK7A7XoWdMLXm+Dvhahwvpv90D2ssRTdCmoofYHbN9iswH/MkMj2Cv6sfnYZEYDPwBhyBWTX6HYs34qjGvH2jruPeCb/ErjXa3ifR5wY83OvCKrCvRLoPYPMObYfxZtzS76R1hLQbfo/NOrT7HS7BtXihQ9vthFhuK5o1Ilq9An/Dohr9z8CZOpvjsY019YxOQhoUE9mhTZuVEl0ult0rw+Z4Cw4R/vQaMacqPCqmcjdulXBfhuniHzs57IPxmw5tKtFJSDcIB6rCXbKjVbY/C6fgXRKFesWduBLfxLqS798tnGmjiv5rJBAs6WXydhTgw9oL6Ds4TLmApsui78GH9CcgOACXYoEIpIirxV/9o6L/EG7qdfIqTdoOT7bp9w18sOK7E/AtTO4w95NCCZ4QKjCCDUXAu2CbNn0vE+EXMQ33tun7NdH8rlBFAS5p0+d61QI6X/xTFZbKjl4rGli1ES/HfjhOeM8mhe9Pw16iyatb3i8R//NIyZhPijkO6DJJLtOkmXigov0DOFCiUBFfV767xLl/SUymnYaWYXu8H+cZJZ5NPISDjM3djhNzX4ybhb7cg2Vdzo1yIV2FE0vajoiA7qwY6xjRsCLZfEj+yLt6WWALZuI6Y7naveKPipimR0ddRJnjPqai7cWqBUTMcI78EV+UXWtqXr8CInWlfY3lULPw6ZL24yIgIqTJotKb4r2NzyLWitpOlYriNo1+G0vkaA29iyS/Owhv0191cbAw9rPCoov4FHYsvPu4ENOH8GeJjAe0mWsWvi0+cD1MwkU4Fc9LWbUMA2KGQ0ZJ4AoxweHG96uMksl1kmAOilAH2iyuHbaTSPaxlneL8GPxO604GZ9r+X0viZStONz61jBJXMGJQnSJ//yRQqNtG59VAiIOc6vCu04hvk6e1wl/lYBQxNnGCmm29YVUZm4LGp+74yS8x1hBPlfsNMnYiPH/guW4QLTzdUa1cTW2FBbdmtrMkux/UaNNsZ4+IqnR8ZIBVOGfxReTJE/qhDViOv0IdKWE5B3VqxFtKnytKscrcp2N5MBgWNa7YUmfU2rMO0MCxBShFvcP7HnI3CmyCy8IU967pOP5+J5UAnrxL80s/wy8o4f+/0vsOkmE08yQH1YupCUSgvvB0ThSHP6qHvoPi7asa/y8dUmbpsavlsjba8BoxY7FtGRpRcMDJcr0gzvFt6xRXVJph2ExoSck0hYd991iTgOyEWdJca6IG2XTT60576qikKrSkdmyMytrDkyKdQtbfl+mx7SgBIeWvLtOqqJNFPO3P0mp5RI5yKgrpDGM+xcV7bbCW2uMt5mUMm4XAnde3YV0gbuMpSMviHa1YufG54OSLh1oNHGf1sV8Q0VNWtJYRNnp6yfxw4qBdsPnhay11o7OFf9zQReLqsJm+IlUB4q4QCJnK66XZPpSYxPgB6USsUVjfVMkig4avZcwJAHn+bIE90Rjd6WJM/GVkve7yDFRFW7CR4ySuW4xV7SgrIw8T05SyiqW3WCg4hmuKrotknJnGQ4TPlLELnJYuUebhVwuJv1rnUsm++BNkv8dVNFmnpDDZ1reDUmSvrbxNK1lQ3HoNxuHehJxjPMq+owITbiv5LuN5Wyuk/9aI2b9gJjJs0JUtxbT3U/1JjVxpUSv1YX3d6g+VX6xMUen05z10O4g4PtGb3MUsVI4T9XNjo+K0y5WFMcDz0r1s1g9nSyafHibvmdL8a8rCtLuIOB9qnnTxmIyVWXcL+PVkpw+382C2uBFXCHljqKAZuCP2gvoV/iCHjhaOyGtEofYDpfJSUUxJJNIebr4qHOE7HXrXFdL5fGzQkRPNvZU+HTcL5l9FR6XTe8JdU5wT5IdbIdlUvgqK2u0YoZowiyJVNtLaB+WDXtRtHexkL/5IoC1JWMd0Zizyqk3saLRtufqaN27AHUERWjAlbhGe0rQiskSDAZEczpp27GSfhxVY+wVEh2rglAtdHPT7Uhx5pvXbP8zOaX4rdwl6BVbSNXwMKM19Dp4TOpG8/uYG91fB5wumnJol/MslCOdBVK/Wip/xDLhMcNCAXYVM2weUM4U0yyru7fDbaL9RRbeE7q9xLVYdvRsfEb7Sw+t2K3xFPFcYw3rGp9VZ/l1sUpq9ufqn4H/F71eB7xQdvmKPuffROjEVP0L6Do5vf2EcRQQ/V0sXSgheX993v/pA2tFOHPwduN0s62I8bixOl8izt5SJpktWjaReESS5muMz8FnW4zXPe71xhS/dajkYHvr7j8ByrBcBHOvhPNblN9HmBBMxN3nEbmddmvj923kZttMKYTtIEdCW0odp+k/NpDE95nGs1ROYBcIoaxzqjMhmMj/LWniaesLrYlBcdrNXGqg8XMvhwQTiv8AE3HA5T5u44QAAAAASUVORK5CYII=',
                      alt: 'logo',
                    }),
                    '\u0418\u0421\u042d\u041c \u0421\u041e \u0420\u0410\u041d',
                  ],
                }),
              }),
              (0, tl.jsx)(Xc, {
                elementInside: (0, tl.jsx)(Qh, { options: e }),
              }),
              (0, tl.jsx)(Xc, {
                elementInside: (0, tl.jsxs)(tl.Fragment, {
                  children: [
                    (0, tl.jsx)('p', {
                      children:
                        '\u0412\u044b\u0431\u043e\u0440 \u043f\u0430\u043d\u0435\u043b\u0438',
                    }),
                    (0, tl.jsxs)('div', {
                      children: [
                        (0, tl.jsx)(Vh, { options: 0 }),
                        (0, tl.jsx)(Vh, { options: 1 }),
                        (0, tl.jsx)(Vh, { options: 2 }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, tl.jsx)(Xc, {
                elementInside: (0, tl.jsx)('p', { children: 'FAQ?' }),
              }),
            ],
          });
        };
      var Zh = function () {
          var e = a((0, t.useState)('2022-09'), 2),
            n = e[0];
          return (
            e[1],
            '/'.concat(n, '.csv'),
            (0, tl.jsx)('div', {
              className: 'App',
              children: (0, tl.jsxs)('div', {
                className: 'myApp',
                children: [(0, tl.jsx)(qh, {}), (0, tl.jsx)($c, {})],
              }),
            })
          );
        },
        Kh = (function (t) {
          var e,
            n = Mh(),
            r = t || {},
            i = r.reducer,
            a = void 0 === i ? void 0 : i,
            o = r.middleware,
            l = void 0 === o ? n() : o,
            s = r.devTools,
            u = void 0 === s || s,
            c = r.preloadedState,
            f = void 0 === c ? void 0 : c,
            h = r.enhancers,
            d = void 0 === h ? void 0 : h;
          if ('function' === typeof a) e = a;
          else {
            if (!_h(a))
              throw new Error(
                '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
              );
            e = nh(a);
          }
          var p = l;
          'function' === typeof p && (p = p(n));
          var v = ih.apply(void 0, p),
            g = rh;
          u && (g = kh(mh({ trace: !1 }, 'object' === typeof u && u)));
          var y = [v];
          return (
            Array.isArray(d)
              ? (y = ch([v], d))
              : 'function' === typeof d && (y = d(y)),
            eh(e, f, g.apply(void 0, y))
          );
        })({ reducer: { panel: Fh, selectFile: Gh, dropdawn: Hh } });
      e.createRoot(document.getElementById('root')).render(
        (0, tl.jsx)(E, { store: Kh, children: (0, tl.jsx)(Zh, {}) })
      );
    })();
})();
//# sourceMappingURL=main.ba91a074.js.map
