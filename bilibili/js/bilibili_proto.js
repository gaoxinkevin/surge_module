console.log(`b站proto-2023.08.06`);
let protobuf;
!function (g) {
    "use strict";
    !function (r, e, t) {
        var i = function t(i) {
            var n = e[i];
            return n || r[i][0].call(n = e[i] = {exports: {}}, t, n, n.exports), n.exports
        }(t[0]);
        protobuf = i.util.global.protobuf = i, "function" == typeof define && define.amd && define(["long"], function (t) {
            return t && t.isLong && (i.util.Long = t, i.configure()), i
        }), "object" == typeof module && module && module.exports && (module.exports = i)
    }({
        1: [function (t, i, n) {
            i.exports = function (t, i) {
                var n = Array(arguments.length - 1), s = 0, r = 2, u = !0;
                for (; r < arguments.length;) n[s++] = arguments[r++];
                return new Promise(function (r, e) {
                    n[s] = function (t) {
                        if (u) if (u = !1, t) e(t); else {
                            for (var i = Array(arguments.length - 1), n = 0; n < i.length;) i[n++] = arguments[n];
                            r.apply(null, i)
                        }
                    };
                    try {
                        t.apply(i || null, n)
                    } catch (t) {
                        u && (u = !1, e(t))
                    }
                })
            }
        }, {}], 2: [function (t, i, n) {
            n.length = function (t) {
                var i = t.length;
                if (!i) return 0;
                for (var n = 0; 1 < --i % 4 && "=" == (t[0 | i] || "");) ++n;
                return Math.ceil(3 * t.length) / 4 - n
            };
            for (var f = Array(64), h = Array(123), r = 0; r < 64;) h[f[r] = r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r - 59 | 43] = r++;
            n.encode = function (t, i, n) {
                for (var r, e = null, s = [], u = 0, o = 0; i < n;) {
                    var h = t[i++];
                    switch (o) {
                        case 0:
                            s[u++] = f[h >> 2], r = (3 & h) << 4, o = 1;
                            break;
                        case 1:
                            s[u++] = f[r | h >> 4], r = (15 & h) << 2, o = 2;
                            break;
                        case 2:
                            s[u++] = f[r | h >> 6], s[u++] = f[63 & h], o = 0
                    }
                    8191 < u && ((e = e || []).push(String.fromCharCode.apply(String, s)), u = 0)
                }
                return o && (s[u++] = f[r], s[u++] = 61, 1 === o && (s[u++] = 61)), e ? (u && e.push(String.fromCharCode.apply(String, s.slice(0, u))), e.join("")) : String.fromCharCode.apply(String, s.slice(0, u))
            };
            var c = "invalid encoding";
            n.decode = function (t, i, n) {
                for (var r, e = n, s = 0, u = 0; u < t.length;) {
                    var o = t.charCodeAt(u++);
                    if (61 == o && 1 < s) break;
                    if ((o = h[o]) === g) throw Error(c);
                    switch (s) {
                        case 0:
                            r = o, s = 1;
                            break;
                        case 1:
                            i[n++] = r << 2 | (48 & o) >> 4, r = o, s = 2;
                            break;
                        case 2:
                            i[n++] = (15 & r) << 4 | (60 & o) >> 2, r = o, s = 3;
                            break;
                        case 3:
                            i[n++] = (3 & r) << 6 | o, s = 0
                    }
                }
                if (1 === s) throw Error(c);
                return n - e
            }, n.test = function (t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
            }
        }, {}], 3: [function (t, i, n) {
            function a(i, n) {
                "string" == typeof i && (n = i, i = g);
                var h = [];

                function f(t) {
                    if ("string" != typeof t) {
                        var i = c();
                        if (a.verbose && console.log("codegen: " + i), i = "return " + i, t) {
                            for (var n = Object.keys(t), r = Array(n.length + 1), e = Array(n.length), s = 0; s < n.length;) r[s] = n[s], e[s] = t[n[s++]];
                            return r[s] = i, Function.apply(null, r).apply(null, e)
                        }
                        return Function(i)()
                    }
                    for (var u = Array(arguments.length - 1), o = 0; o < u.length;) u[o] = arguments[++o];
                    if (o = 0, t = t.replace(/%([%dfijs])/g, function (t, i) {
                        var n = u[o++];
                        switch (i) {
                            case"d":
                            case"f":
                                return "" + +("" + n);
                            case"i":
                                return "" + Math.floor(n);
                            case"j":
                                return JSON.stringify(n);
                            case"s":
                                return "" + n
                        }
                        return "%"
                    }), o !== u.length) throw Error("parameter count mismatch");
                    return h.push(t), f
                }

                function c(t) {
                    return "function " + (t || n || "") + "(" + (i && i.join(",") || "") + "){\n  " + h.join("\n  ") + "\n}"
                }

                return f.toString = c, f
            }

            (i.exports = a).verbose = !1
        }, {}], 4: [function (t, i, n) {
            function r() {
                this.t = {}
            }

            (i.exports = r).prototype.on = function (t, i, n) {
                return (this.t[t] || (this.t[t] = [])).push({fn: i, ctx: n || this}), this
            }, r.prototype.off = function (t, i) {
                if (t === g) this.t = {}; else if (i === g) this.t[t] = []; else for (var n = this.t[t], r = 0; r < n.length;) n[r].fn === i ? n.splice(r, 1) : ++r;
                return this
            }, r.prototype.emit = function (t) {
                var i = this.t[t];
                if (i) {
                    for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
                    for (r = 0; r < i.length;) i[r].fn.apply(i[r++].ctx, n)
                }
                return this
            }
        }, {}], 5: [function (t, i, n) {
            i.exports = o;
            var s = t(1), u = t(7)("fs");

            function o(n, r, e) {
                return r = "function" == typeof r ? (e = r, {}) : r || {}, e ? !r.xhr && u && u.readFile ? u.readFile(n, function (t, i) {
                    return t && "undefined" != typeof XMLHttpRequest ? o.xhr(n, r, e) : t ? e(t) : e(null, r.binary ? i : i.toString("utf8"))
                }) : o.xhr(n, r, e) : s(o, this, n, r)
            }

            o.xhr = function (t, n, r) {
                var e = new XMLHttpRequest;
                e.onreadystatechange = function () {
                    if (4 !== e.readyState) return g;
                    if (0 !== e.status && 200 !== e.status) return r(Error("status " + e.status));
                    if (n.binary) {
                        if (!(t = e.response)) for (var t = [], i = 0; i < e.responseText.length; ++i) t.push(255 & e.responseText.charCodeAt(i));
                        return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(t) : t)
                    }
                    return r(null, e.responseText)
                }, n.binary && ("overrideMimeType" in e && e.overrideMimeType("text/plain; charset=x-user-defined"), e.responseType = "arraybuffer"), e.open("GET", t), e.send()
            }
        }, {1: 1, 7: 7}], 6: [function (t, i, n) {
            function r(t) {
                function i(t, i, n, r) {
                    var e = i < 0 ? 1 : 0;
                    t(0 === (i = e ? -i : i) ? 0 < 1 / i ? 0 : 2147483648 : isNaN(i) ? 2143289344 : 34028234663852886e22 < i ? (e << 31 | 2139095040) >>> 0 : i < 11754943508222875e-54 ? (e << 31 | Math.round(i / 1401298464324817e-60)) >>> 0 : (e << 31 | 127 + (t = Math.floor(Math.log(i) / Math.LN2)) << 23 | 8388607 & Math.round(i * Math.pow(2, -t) * 8388608)) >>> 0, n, r)
                }

                function n(t, i, n) {
                    t = t(i, n), i = 2 * (t >> 31) + 1, n = t >>> 23 & 255, t &= 8388607;
                    return 255 == n ? t ? NaN : 1 / 0 * i : 0 == n ? 1401298464324817e-60 * i * t : i * Math.pow(2, n - 150) * (8388608 + t)
                }

                function r(t, i, n) {
                    o[0] = t, i[n] = h[0], i[n + 1] = h[1], i[n + 2] = h[2], i[n + 3] = h[3]
                }

                function e(t, i, n) {
                    o[0] = t, i[n] = h[3], i[n + 1] = h[2], i[n + 2] = h[1], i[n + 3] = h[0]
                }

                function s(t, i) {
                    return h[0] = t[i], h[1] = t[i + 1], h[2] = t[i + 2], h[3] = t[i + 3], o[0]
                }

                function u(t, i) {
                    return h[3] = t[i], h[2] = t[i + 1], h[1] = t[i + 2], h[0] = t[i + 3], o[0]
                }

                var o, h, f, c, a;

                function l(t, i, n, r, e, s) {
                    var u, o = r < 0 ? 1 : 0;
                    0 === (r = o ? -r : r) ? (t(0, e, s + i), t(0 < 1 / r ? 0 : 2147483648, e, s + n)) : isNaN(r) ? (t(0, e, s + i), t(2146959360, e, s + n)) : 17976931348623157e292 < r ? (t(0, e, s + i), t((o << 31 | 2146435072) >>> 0, e, s + n)) : r < 22250738585072014e-324 ? (t((u = r / 5e-324) >>> 0, e, s + i), t((o << 31 | u / 4294967296) >>> 0, e, s + n)) : (t(4503599627370496 * (u = r * Math.pow(2, -(r = 1024 === (r = Math.floor(Math.log(r) / Math.LN2)) ? 1023 : r))) >>> 0, e, s + i), t((o << 31 | r + 1023 << 20 | 1048576 * u & 1048575) >>> 0, e, s + n))
                }

                function d(t, i, n, r, e) {
                    i = t(r, e + i), t = t(r, e + n), r = 2 * (t >> 31) + 1, e = t >>> 20 & 2047, n = 4294967296 * (1048575 & t) + i;
                    return 2047 == e ? n ? NaN : 1 / 0 * r : 0 == e ? 5e-324 * r * n : r * Math.pow(2, e - 1075) * (n + 4503599627370496)
                }

                function v(t, i, n) {
                    f[0] = t, i[n] = c[0], i[n + 1] = c[1], i[n + 2] = c[2], i[n + 3] = c[3], i[n + 4] = c[4], i[n + 5] = c[5], i[n + 6] = c[6], i[n + 7] = c[7]
                }

                function b(t, i, n) {
                    f[0] = t, i[n] = c[7], i[n + 1] = c[6], i[n + 2] = c[5], i[n + 3] = c[4], i[n + 4] = c[3], i[n + 5] = c[2], i[n + 6] = c[1], i[n + 7] = c[0]
                }

                function p(t, i) {
                    return c[0] = t[i], c[1] = t[i + 1], c[2] = t[i + 2], c[3] = t[i + 3], c[4] = t[i + 4], c[5] = t[i + 5], c[6] = t[i + 6], c[7] = t[i + 7], f[0]
                }

                function y(t, i) {
                    return c[7] = t[i], c[6] = t[i + 1], c[5] = t[i + 2], c[4] = t[i + 3], c[3] = t[i + 4], c[2] = t[i + 5], c[1] = t[i + 6], c[0] = t[i + 7], f[0]
                }

                return "undefined" != typeof Float32Array ? (o = new Float32Array([-0]), h = new Uint8Array(o.buffer), a = 128 === h[3], t.writeFloatLE = a ? r : e, t.writeFloatBE = a ? e : r, t.readFloatLE = a ? s : u, t.readFloatBE = a ? u : s) : (t.writeFloatLE = i.bind(null, m), t.writeFloatBE = i.bind(null, w), t.readFloatLE = n.bind(null, g), t.readFloatBE = n.bind(null, j)), "undefined" != typeof Float64Array ? (f = new Float64Array([-0]), c = new Uint8Array(f.buffer), a = 128 === c[7], t.writeDoubleLE = a ? v : b, t.writeDoubleBE = a ? b : v, t.readDoubleLE = a ? p : y, t.readDoubleBE = a ? y : p) : (t.writeDoubleLE = l.bind(null, m, 0, 4), t.writeDoubleBE = l.bind(null, w, 4, 0), t.readDoubleLE = d.bind(null, g, 0, 4), t.readDoubleBE = d.bind(null, j, 4, 0)), t
            }

            function m(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24
            }

            function w(t, i, n) {
                i[n] = t >>> 24, i[n + 1] = t >>> 16 & 255, i[n + 2] = t >>> 8 & 255, i[n + 3] = 255 & t
            }

            function g(t, i) {
                return (t[i] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24) >>> 0
            }

            function j(t, i) {
                return (t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]) >>> 0
            }

            i.exports = r(r)
        }, {}], 7: [function (t, i, n) {
            function r(t) {
                try {
                    var i = eval("require")(t);
                    if (i && (i.length || Object.keys(i).length)) return i
                } catch (t) {
                }
                return null
            }

            i.exports = r
        }, {}], 8: [function (t, i, n) {
            var e = n.isAbsolute = function (t) {
                return /^(?:\/|\w+:)/.test(t)
            }, r = n.normalize = function (t) {
                var i = (t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), n = e(t), t = "";
                n && (t = i.shift() + "/");
                for (var r = 0; r < i.length;) ".." === i[r] ? 0 < r && ".." !== i[r - 1] ? i.splice(--r, 2) : n ? i.splice(r, 1) : ++r : "." === i[r] ? i.splice(r, 1) : ++r;
                return t + i.join("/")
            };
            n.resolve = function (t, i, n) {
                return n || (i = r(i)), !e(i) && (t = (t = n ? t : r(t)).replace(/(?:\/|^)[^/]+$/, "")).length ? r(t + "/" + i) : i
            }
        }, {}], 9: [function (t, i, n) {
            i.exports = function (i, n, t) {
                var r = t || 8192, e = r >>> 1, s = null, u = r;
                return function (t) {
                    if (t < 1 || e < t) return i(t);
                    r < u + t && (s = i(r), u = 0);
                    t = n.call(s, u, u += t);
                    return 7 & u && (u = 1 + (7 | u)), t
                }
            }
        }, {}], 10: [function (t, i, n) {
            n.length = function (t) {
                for (var i, n = 0, r = 0; r < t.length; ++r) (i = t.charCodeAt(r)) < 128 ? n += 1 : i < 2048 ? n += 2 : 55296 == (64512 & i) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r, n += 4) : n += 3;
                return n
            }, n.read = function (t, i, n) {
                if (n - i < 1) return "";
                for (var r, e = null, s = [], u = 0; i < n;) (r = t[i++]) < 128 ? s[u++] = r : 191 < r && r < 224 ? s[u++] = (31 & r) << 6 | 63 & t[i++] : 239 < r && r < 365 ? (r = ((7 & r) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536, s[u++] = 55296 + (r >> 10), s[u++] = 56320 + (1023 & r)) : s[u++] = (15 & r) << 12 | (63 & t[i++]) << 6 | 63 & t[i++], 8191 < u && ((e = e || []).push(String.fromCharCode.apply(String, s)), u = 0);
                return e ? (u && e.push(String.fromCharCode.apply(String, s.slice(0, u))), e.join("")) : String.fromCharCode.apply(String, s.slice(0, u))
            }, n.write = function (t, i, n) {
                for (var r, e, s = n, u = 0; u < t.length; ++u) (r = t.charCodeAt(u)) < 128 ? i[n++] = r : (r < 2048 ? i[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (e = t.charCodeAt(u + 1))) ? (++u, i[n++] = (r = 65536 + ((1023 & r) << 10) + (1023 & e)) >> 18 | 240, i[n++] = r >> 12 & 63 | 128) : i[n++] = r >> 12 | 224, i[n++] = r >> 6 & 63 | 128), i[n++] = 63 & r | 128);
                return n - s
            }
        }, {}], 11: [function (t, i, n) {
            var l = t(14), d = t(33);

            function u(t, i, n, r) {
                var e = !1;
                if (i.resolvedType) if (i.resolvedType instanceof l) {
                    t("switch(d%s){", r);
                    for (var s = i.resolvedType.values, u = Object.keys(s), o = 0; o < u.length; ++o) s[u[o]] !== i.typeDefault || e || (t("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', r, r, r), i.repeated || t("break"), e = !0), t("case%j:", u[o])("case %i:", s[u[o]])("m%s=%j", r, s[u[o]])("break");
                    t("}")
                } else t('if(typeof d%s!=="object")', r)("throw TypeError(%j)", i.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, n, r); else {
                    var h = !1;
                    switch (i.type) {
                        case"double":
                        case"float":
                            t("m%s=Number(d%s)", r, r);
                            break;
                        case"uint32":
                        case"fixed32":
                            t("m%s=d%s>>>0", r, r);
                            break;
                        case"int32":
                        case"sint32":
                        case"sfixed32":
                            t("m%s=d%s|0", r, r);
                            break;
                        case"uint64":
                            h = !0;
                        case"int64":
                        case"sint64":
                        case"fixed64":
                        case"sfixed64":
                            t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, h)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, h ? "true" : "");
                            break;
                        case"bytes":
                            t('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length >= 0)", r)("m%s=d%s", r, r);
                            break;
                        case"string":
                            t("m%s=String(d%s)", r, r);
                            break;
                        case"bool":
                            t("m%s=Boolean(d%s)", r, r)
                    }
                }
                return t
            }

            function v(t, i, n, r) {
                if (i.resolvedType) i.resolvedType instanceof l ? t("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", r, n, r, r, n, r, r) : t("d%s=types[%i].toObject(m%s,o)", r, n, r); else {
                    var e = !1;
                    switch (i.type) {
                        case"double":
                        case"float":
                            t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                            break;
                        case"uint64":
                            e = !0;
                        case"int64":
                        case"sint64":
                        case"fixed64":
                        case"sfixed64":
                            t('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, e ? "true" : "", r);
                            break;
                        case"bytes":
                            t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                            break;
                        default:
                            t("d%s=m%s", r, r)
                    }
                }
                return t
            }

            n.fromObject = function (t) {
                var i = t.fieldsArray,
                    n = d.codegen(["d"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                if (!i.length) return n("return new this.ctor");
                n("var m=new this.ctor");
                for (var r = 0; r < i.length; ++r) {
                    var e = i[r].resolve(), s = d.safeProp(e.name);
                    e.map ? (n("if(d%s){", s)('if(typeof d%s!=="object")', s)("throw TypeError(%j)", e.fullName + ": object expected")("m%s={}", s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", s), u(n, e, r, s + "[ks[i]]")("}")("}")) : e.repeated ? (n("if(d%s){", s)("if(!Array.isArray(d%s))", s)("throw TypeError(%j)", e.fullName + ": array expected")("m%s=[]", s)("for(var i=0;i<d%s.length;++i){", s), u(n, e, r, s + "[i]")("}")("}")) : (e.resolvedType instanceof l || n("if(d%s!=null){", s), u(n, e, r, s), e.resolvedType instanceof l || n("}"))
                }
                return n("return m")
            }, n.toObject = function (t) {
                var i = t.fieldsArray.slice().sort(d.compareFieldsById);
                if (!i.length) return d.codegen()("return {}");
                for (var n = d.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), r = [], e = [], s = [], u = 0; u < i.length; ++u) i[u].partOf || (i[u].resolve().repeated ? r : i[u].map ? e : s).push(i[u]);
                if (r.length) {
                    for (n("if(o.arrays||o.defaults){"), u = 0; u < r.length; ++u) n("d%s=[]", d.safeProp(r[u].name));
                    n("}")
                }
                if (e.length) {
                    for (n("if(o.objects||o.defaults){"), u = 0; u < e.length; ++u) n("d%s={}", d.safeProp(e[u].name));
                    n("}")
                }
                if (s.length) {
                    for (n("if(o.defaults){"), u = 0; u < s.length; ++u) {
                        var o, h = s[u], f = d.safeProp(h.name);
                        h.resolvedType instanceof l ? n("d%s=o.enums===String?%j:%j", f, h.resolvedType.valuesById[h.typeDefault], h.typeDefault) : h.long ? n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", h.typeDefault.low, h.typeDefault.high, h.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", f)("}else")("d%s=o.longs===String?%j:%i", f, h.typeDefault.toString(), h.typeDefault.toNumber()) : h.bytes ? (o = "[" + Array.prototype.slice.call(h.typeDefault).join(",") + "]", n("if(o.bytes===String)d%s=%j", f, String.fromCharCode.apply(String, h.typeDefault))("else{")("d%s=%s", f, o)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", f, f)("}")) : n("d%s=%j", f, h.typeDefault)
                    }
                    n("}")
                }
                for (var c = !1, u = 0; u < i.length; ++u) {
                    var h = i[u], a = t.i.indexOf(h), f = d.safeProp(h.name);
                    h.map ? (c || (c = !0, n("var ks2")), n("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)("for(var j=0;j<ks2.length;++j){"), v(n, h, a, f + "[ks2[j]]")("}")) : h.repeated ? (n("if(m%s&&m%s.length){", f, f)("d%s=[]", f)("for(var j=0;j<m%s.length;++j){", f), v(n, h, a, f + "[j]")("}")) : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", f, h.name), v(n, h, a, f), h.partOf && n("if(o.oneofs)")("d%s=%j", d.safeProp(h.partOf.name), h.name)), n("}")
                }
                return n("return d")
            }
        }, {14: 14, 33: 33}], 12: [function (t, i, n) {
            i.exports = function (t) {
                var i = f.codegen(["r", "l"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter(function (t) {
                    return t.map
                }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
                t.group && i("if((t&7)===4)")("break");
                i("switch(t>>>3){");
                for (var n = 0; n < t.fieldsArray.length; ++n) {
                    var r = t.i[n].resolve(), e = r.resolvedType instanceof o ? "int32" : r.type,
                        s = "m" + f.safeProp(r.name);
                    i("case %i: {", r.id), r.map ? (i("if(%s===util.emptyObject)", s)("%s={}", s)("var c2 = r.uint32()+r.pos"), h.defaults[r.keyType] !== g ? i("k=%j", h.defaults[r.keyType]) : i("k=null"), h.defaults[e] !== g ? i("value=%j", h.defaults[e]) : i("value=null"), i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", r.keyType)("case 2:"), h.basic[e] === g ? i("value=types[%i].decode(r,r.uint32())", n) : i("value=r.%s()", e), i("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), h.long[r.keyType] !== g ? i('%s[typeof k==="object"?util.longToHash(k):k]=value', s) : i("%s[k]=value", s)) : r.repeated ? (i("if(!(%s&&%s.length))", s, s)("%s=[]", s), h.packed[e] !== g && i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", s, e)("}else"), h.basic[e] === g ? i(r.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", s, n) : i("%s.push(r.%s())", s, e)) : h.basic[e] === g ? i(r.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", s, n) : i("%s=r.%s()", s, e), i("break")("}")
                }
                for (i("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < t.i.length; ++n) {
                    var u = t.i[n];
                    u.required && i("if(!m.hasOwnProperty(%j))", u.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + u.name + "'")
                }
                return i("return m")
            };
            var o = t(14), h = t(32), f = t(33)
        }, {14: 14, 32: 32, 33: 33}], 13: [function (t, i, n) {
            i.exports = function (t) {
                for (var i, n = a.codegen(["m", "w"], t.name + "$encode")("if(!w)")("w=Writer.create()"), r = t.fieldsArray.slice().sort(a.compareFieldsById), e = 0; e < r.length; ++e) {
                    var s = r[e].resolve(), u = t.i.indexOf(s), o = s.resolvedType instanceof f ? "int32" : s.type,
                        h = c.basic[o];
                    i = "m" + a.safeProp(s.name), s.map ? (n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (s.id << 3 | 2) >>> 0, 8 | c.mapKey[s.keyType], s.keyType), h === g ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", u, i) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | h, o, i), n("}")("}")) : s.repeated ? (n("if(%s!=null&&%s.length){", i, i), s.packed && c.packed[o] !== g ? n("w.uint32(%i).fork()", (s.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", o, i)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", i), h === g ? l(n, s, u, i + "[i]") : n("w.uint32(%i).%s(%s[i])", (s.id << 3 | h) >>> 0, o, i)), n("}")) : (s.optional && n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, s.name), h === g ? l(n, s, u, i) : n("w.uint32(%i).%s(%s)", (s.id << 3 | h) >>> 0, o, i))
                }
                return n("return w")
            };
            var f = t(14), c = t(32), a = t(33);

            function l(t, i, n, r) {
                i.resolvedType.group ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, r, (i.id << 3 | 3) >>> 0, (i.id << 3 | 4) >>> 0) : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, r, (i.id << 3 | 2) >>> 0)
            }
        }, {14: 14, 32: 32, 33: 33}], 14: [function (t, i, n) {
            i.exports = s;
            var h = t(22), r = (((s.prototype = Object.create(h.prototype)).constructor = s).className = "Enum", t(21)),
                e = t(33);

            function s(t, i, n, r, e, s) {
                if (h.call(this, t, n), i && "object" != typeof i) throw TypeError("values must be an object");
                if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = r, this.comments = e || {}, this.valuesOptions = s, this.reserved = g, i) for (var u = Object.keys(i), o = 0; o < u.length; ++o) "number" == typeof i[u[o]] && (this.valuesById[this.values[u[o]] = i[u[o]]] = u[o])
            }

            s.fromJSON = function (t, i) {
                t = new s(t, i.values, i.options, i.comment, i.comments);
                return t.reserved = i.reserved, t
            }, s.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return e.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "comment", t ? this.comment : g, "comments", t ? this.comments : g])
            }, s.prototype.add = function (t, i, n, r) {
                if (!e.isString(t)) throw TypeError("name must be a string");
                if (!e.isInteger(i)) throw TypeError("id must be an integer");
                if (this.values[t] !== g) throw Error("duplicate name '" + t + "' in " + this);
                if (this.isReservedId(i)) throw Error("id " + i + " is reserved in " + this);
                if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
                if (this.valuesById[i] !== g) {
                    if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + i + " in " + this);
                    this.values[t] = i
                } else this.valuesById[this.values[t] = i] = t;
                return r && (this.valuesOptions === g && (this.valuesOptions = {}), this.valuesOptions[t] = r || null), this.comments[t] = n || null, this
            }, s.prototype.remove = function (t) {
                if (!e.isString(t)) throw TypeError("name must be a string");
                var i = this.values[t];
                if (null == i) throw Error("name '" + t + "' does not exist in " + this);
                return delete this.valuesById[i], delete this.values[t], delete this.comments[t], this.valuesOptions && delete this.valuesOptions[t], this
            }, s.prototype.isReservedId = function (t) {
                return r.isReservedId(this.reserved, t)
            }, s.prototype.isReservedName = function (t) {
                return r.isReservedName(this.reserved, t)
            }
        }, {21: 21, 22: 22, 33: 33}], 15: [function (t, i, n) {
            i.exports = u;
            var r, o = t(22),
                e = (((u.prototype = Object.create(o.prototype)).constructor = u).className = "Field", t(14)),
                h = t(32), f = t(33), c = /^required|optional|repeated$/;

            function u(t, i, n, r, e, s, u) {
                if (f.isObject(r) ? (u = e, s = r, r = e = g) : f.isObject(e) && (u = s, s = e, e = g), o.call(this, t, s), !f.isInteger(i) || i < 0) throw TypeError("id must be a non-negative integer");
                if (!f.isString(n)) throw TypeError("type must be a string");
                if (r !== g && !c.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
                if (e !== g && !f.isString(e)) throw TypeError("extend must be a string");
                this.rule = (r = "proto3_optional" === r ? "optional" : r) && "optional" !== r ? r : g, this.type = n, this.id = i, this.extend = e || g, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!f.Long && h.long[n] !== g, this.bytes = "bytes" === n, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.n = null, this.comment = u
            }

            u.fromJSON = function (t, i) {
                return new u(t, i.id, i.type, i.rule, i.extend, i.options, i.comment)
            }, Object.defineProperty(u.prototype, "packed", {
                get: function () {
                    return null === this.n && (this.n = !1 !== this.getOption("packed")), this.n
                }
            }), u.prototype.setOption = function (t, i, n) {
                return "packed" === t && (this.n = null), o.prototype.setOption.call(this, t, i, n)
            }, u.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return f.toObject(["rule", "optional" !== this.rule && this.rule || g, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : g])
            }, u.prototype.resolve = function () {
                var t;
                return this.resolved ? this : ((this.typeDefault = h.defaults[this.type]) === g ? (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type), this.resolvedType instanceof r ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]) : this.options && this.options.proto3_optional && (this.typeDefault = null), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof e && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (this.options.packed === g || !this.resolvedType || this.resolvedType instanceof e) || delete this.options.packed, Object.keys(this.options).length || (this.options = g)), this.long ? (this.typeDefault = f.Long.fromNumber(this.typeDefault, "u" == (this.type[0] || "")), Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (f.base64.test(this.typeDefault) ? f.base64.decode(this.typeDefault, t = f.newBuffer(f.base64.length(this.typeDefault)), 0) : f.utf8.write(this.typeDefault, t = f.newBuffer(f.utf8.length(this.typeDefault)), 0), this.typeDefault = t), this.map ? this.defaultValue = f.emptyObject : this.repeated ? this.defaultValue = f.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof r && (this.parent.ctor.prototype[this.name] = this.defaultValue), o.prototype.resolve.call(this))
            }, u.d = function (n, r, e, s) {
                return "function" == typeof r ? r = f.decorateType(r).name : r && "object" == typeof r && (r = f.decorateEnum(r).name), function (t, i) {
                    f.decorateType(t.constructor).add(new u(i, n, r, e, {default: s}))
                }
            }, u.r = function (t) {
                r = t
            }
        }, {14: 14, 22: 22, 32: 32, 33: 33}], 16: [function (t, i, n) {
            var r = i.exports = t(17);
            r.build = "light", r.load = function (t, i, n) {
                return (i = "function" == typeof i ? (n = i, new r.Root) : i || new r.Root).load(t, n)
            }, r.loadSync = function (t, i) {
                return (i = i || new r.Root).loadSync(t)
            }, r.encoder = t(13), r.decoder = t(12), r.verifier = t(36), r.converter = t(11), r.ReflectionObject = t(22), r.Namespace = t(21), r.Root = t(26), r.Enum = t(14), r.Type = t(31), r.Field = t(15), r.OneOf = t(23), r.MapField = t(18), r.Service = t(30), r.Method = t(20), r.Message = t(19), r.wrappers = t(37), r.types = t(32), r.util = t(33), r.ReflectionObject.r(r.Root), r.Namespace.r(r.Type, r.Service, r.Enum), r.Root.r(r.Type), r.Field.r(r.Type)
        }, {
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            26: 26,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            36: 36,
            37: 37
        }], 17: [function (t, i, n) {
            var r = n;

            function e() {
                r.util.r(), r.Writer.r(r.BufferWriter), r.Reader.r(r.BufferReader)
            }

            r.build = "minimal", r.Writer = t(38), r.BufferWriter = t(39), r.Reader = t(24), r.BufferReader = t(25), r.util = t(35), r.rpc = t(28), r.roots = t(27), r.configure = e, e()
        }, {24: 24, 25: 25, 27: 27, 28: 28, 35: 35, 38: 38, 39: 39}], 18: [function (t, i, n) {
            i.exports = s;
            var u = t(15),
                r = (((s.prototype = Object.create(u.prototype)).constructor = s).className = "MapField", t(32)),
                o = t(33);

            function s(t, i, n, r, e, s) {
                if (u.call(this, t, i, r, g, g, e, s), !o.isString(n)) throw TypeError("keyType must be a string");
                this.keyType = n, this.resolvedKeyType = null, this.map = !0
            }

            s.fromJSON = function (t, i) {
                return new s(t, i.id, i.keyType, i.type, i.options, i.comment)
            }, s.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return o.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : g])
            }, s.prototype.resolve = function () {
                if (this.resolved) return this;
                if (r.mapKey[this.keyType] === g) throw Error("invalid key type: " + this.keyType);
                return u.prototype.resolve.call(this)
            }, s.d = function (n, r, e) {
                return "function" == typeof e ? e = o.decorateType(e).name : e && "object" == typeof e && (e = o.decorateEnum(e).name), function (t, i) {
                    o.decorateType(t.constructor).add(new s(i, n, r, e))
                }
            }
        }, {15: 15, 32: 32, 33: 33}], 19: [function (t, i, n) {
            i.exports = e;
            var r = t(35);

            function e(t) {
                if (t) for (var i = Object.keys(t), n = 0; n < i.length; ++n) this[i[n]] = t[i[n]]
            }

            e.create = function (t) {
                return this.$type.create(t)
            }, e.encode = function (t, i) {
                return this.$type.encode(t, i)
            }, e.encodeDelimited = function (t, i) {
                return this.$type.encodeDelimited(t, i)
            }, e.decode = function (t) {
                return this.$type.decode(t)
            }, e.decodeDelimited = function (t) {
                return this.$type.decodeDelimited(t)
            }, e.verify = function (t) {
                return this.$type.verify(t)
            }, e.fromObject = function (t) {
                return this.$type.fromObject(t)
            }, e.toObject = function (t, i) {
                return this.$type.toObject(t, i)
            }, e.prototype.toJSON = function () {
                return this.$type.toObject(this, r.toJSONOptions)
            }
        }, {35: 35}], 20: [function (t, i, n) {
            i.exports = r;
            var f = t(22),
                c = (((r.prototype = Object.create(f.prototype)).constructor = r).className = "Method", t(33));

            function r(t, i, n, r, e, s, u, o, h) {
                if (c.isObject(e) ? (u = e, e = s = g) : c.isObject(s) && (u = s, s = g), i !== g && !c.isString(i)) throw TypeError("type must be a string");
                if (!c.isString(n)) throw TypeError("requestType must be a string");
                if (!c.isString(r)) throw TypeError("responseType must be a string");
                f.call(this, t, u), this.type = i || "rpc", this.requestType = n, this.requestStream = !!e || g, this.responseType = r, this.responseStream = !!s || g, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = o, this.parsedOptions = h
            }

            r.fromJSON = function (t, i) {
                return new r(t, i.type, i.requestType, i.responseType, i.requestStream, i.responseStream, i.options, i.comment, i.parsedOptions)
            }, r.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return c.toObject(["type", "rpc" !== this.type && this.type || g, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : g, "parsedOptions", this.parsedOptions])
            }, r.prototype.resolve = function () {
                return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), f.prototype.resolve.call(this))
            }
        }, {22: 22, 33: 33}], 21: [function (t, i, n) {
            i.exports = a;
            var e, s, u, r = t(22),
                o = (((a.prototype = Object.create(r.prototype)).constructor = a).className = "Namespace", t(15)),
                h = t(33), f = t(23);

            function c(t, i) {
                if (!t || !t.length) return g;
                for (var n = {}, r = 0; r < t.length; ++r) n[t[r].name] = t[r].toJSON(i);
                return n
            }

            function a(t, i) {
                r.call(this, t, i), this.nested = g, this.e = null
            }

            function l(t) {
                return t.e = null, t
            }

            a.fromJSON = function (t, i) {
                return new a(t, i.options).addJSON(i.nested)
            }, a.arrayToJSON = c, a.isReservedId = function (t, i) {
                if (t) for (var n = 0; n < t.length; ++n) if ("string" != typeof t[n] && t[n][0] <= i && t[n][1] > i) return !0;
                return !1
            }, a.isReservedName = function (t, i) {
                if (t) for (var n = 0; n < t.length; ++n) if (t[n] === i) return !0;
                return !1
            }, Object.defineProperty(a.prototype, "nestedArray", {
                get: function () {
                    return this.e || (this.e = h.toArray(this.nested))
                }
            }), a.prototype.toJSON = function (t) {
                return h.toObject(["options", this.options, "nested", c(this.nestedArray, t)])
            }, a.prototype.addJSON = function (t) {
                if (t) for (var i, n = Object.keys(t), r = 0; r < n.length; ++r) i = t[n[r]], this.add((i.fields !== g ? e : i.values !== g ? u : i.methods !== g ? s : i.id !== g ? o : a).fromJSON(n[r], i));
                return this
            }, a.prototype.get = function (t) {
                return this.nested && this.nested[t] || null
            }, a.prototype.getEnum = function (t) {
                if (this.nested && this.nested[t] instanceof u) return this.nested[t].values;
                throw Error("no such enum: " + t)
            }, a.prototype.add = function (t) {
                if (!(t instanceof o && t.extend !== g || t instanceof e || t instanceof f || t instanceof u || t instanceof s || t instanceof a)) throw TypeError("object must be a valid nested object");
                if (this.nested) {
                    var i = this.get(t.name);
                    if (i) {
                        if (!(i instanceof a && t instanceof a) || i instanceof e || i instanceof s) throw Error("duplicate name '" + t.name + "' in " + this);
                        for (var n = i.nestedArray, r = 0; r < n.length; ++r) t.add(n[r]);
                        this.remove(i), this.nested || (this.nested = {}), t.setOptions(i.options, !0)
                    }
                } else this.nested = {};
                return (this.nested[t.name] = t).onAdd(this), l(this)
            }, a.prototype.remove = function (t) {
                if (!(t instanceof r)) throw TypeError("object must be a ReflectionObject");
                if (t.parent !== this) throw Error(t + " is not a member of " + this);
                return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = g), t.onRemove(this), l(this)
            }, a.prototype.define = function (t, i) {
                if (h.isString(t)) t = t.split("."); else if (!Array.isArray(t)) throw TypeError("illegal path");
                if (t && t.length && "" === t[0]) throw Error("path must be relative");
                for (var n = this; 0 < t.length;) {
                    var r = t.shift();
                    if (n.nested && n.nested[r]) {
                        if (!((n = n.nested[r]) instanceof a)) throw Error("path conflicts with non-namespace objects")
                    } else n.add(n = new a(r))
                }
                return i && n.addJSON(i), n
            }, a.prototype.resolveAll = function () {
                for (var t = this.nestedArray, i = 0; i < t.length;) t[i] instanceof a ? t[i++].resolveAll() : t[i++].resolve();
                return this.resolve()
            }, a.prototype.lookup = function (t, i, n) {
                if ("boolean" == typeof i ? (n = i, i = g) : i && !Array.isArray(i) && (i = [i]), h.isString(t) && t.length) {
                    if ("." === t) return this.root;
                    t = t.split(".")
                } else if (!t.length) return this;
                if ("" === t[0]) return this.root.lookup(t.slice(1), i);
                var r = this.get(t[0]);
                if (r) {
                    if (1 === t.length) {
                        if (!i || ~i.indexOf(r.constructor)) return r
                    } else if (r instanceof a && (r = r.lookup(t.slice(1), i, !0))) return r
                } else for (var e = 0; e < this.nestedArray.length; ++e) if (this.e[e] instanceof a && (r = this.e[e].lookup(t, i, !0))) return r;
                return null === this.parent || n ? null : this.parent.lookup(t, i)
            }, a.prototype.lookupType = function (t) {
                var i = this.lookup(t, [e]);
                if (i) return i;
                throw Error("no such type: " + t)
            }, a.prototype.lookupEnum = function (t) {
                var i = this.lookup(t, [u]);
                if (i) return i;
                throw Error("no such Enum '" + t + "' in " + this)
            }, a.prototype.lookupTypeOrEnum = function (t) {
                var i = this.lookup(t, [e, u]);
                if (i) return i;
                throw Error("no such Type or Enum '" + t + "' in " + this)
            }, a.prototype.lookupService = function (t) {
                var i = this.lookup(t, [s]);
                if (i) return i;
                throw Error("no such Service '" + t + "' in " + this)
            }, a.r = function (t, i, n) {
                e = t, s = i, u = n
            }
        }, {15: 15, 22: 22, 23: 23, 33: 33}], 22: [function (t, i, n) {
            (i.exports = e).className = "ReflectionObject";
            var r, u = t(33);

            function e(t, i) {
                if (!u.isString(t)) throw TypeError("name must be a string");
                if (i && !u.isObject(i)) throw TypeError("options must be an object");
                this.options = i, this.parsedOptions = null, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
            }

            Object.defineProperties(e.prototype, {
                root: {
                    get: function () {
                        for (var t = this; null !== t.parent;) t = t.parent;
                        return t
                    }
                }, fullName: {
                    get: function () {
                        for (var t = [this.name], i = this.parent; i;) t.unshift(i.name), i = i.parent;
                        return t.join(".")
                    }
                }
            }), e.prototype.toJSON = function () {
                throw Error()
            }, e.prototype.onAdd = function (t) {
                this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
                t = t.root;
                t instanceof r && t.u(this)
            }, e.prototype.onRemove = function (t) {
                t = t.root;
                t instanceof r && t.o(this), this.parent = null, this.resolved = !1
            }, e.prototype.resolve = function () {
                return this.resolved || this.root instanceof r && (this.resolved = !0), this
            }, e.prototype.getOption = function (t) {
                return this.options ? this.options[t] : g
            }, e.prototype.setOption = function (t, i, n) {
                return n && this.options && this.options[t] !== g || ((this.options || (this.options = {}))[t] = i), this
            }, e.prototype.setParsedOption = function (i, t, n) {
                this.parsedOptions || (this.parsedOptions = []);
                var r, e, s = this.parsedOptions;
                return n ? (r = s.find(function (t) {
                    return Object.prototype.hasOwnProperty.call(t, i)
                })) ? (e = r[i], u.setProperty(e, n, t)) : ((r = {})[i] = u.setProperty({}, n, t), s.push(r)) : ((e = {})[i] = t, s.push(e)), this
            }, e.prototype.setOptions = function (t, i) {
                if (t) for (var n = Object.keys(t), r = 0; r < n.length; ++r) this.setOption(n[r], t[n[r]], i);
                return this
            }, e.prototype.toString = function () {
                var t = this.constructor.className, i = this.fullName;
                return i.length ? t + " " + i : t
            }, e.r = function (t) {
                r = t
            }
        }, {33: 33}], 23: [function (t, i, n) {
            i.exports = u;
            var e = t(22),
                r = (((u.prototype = Object.create(e.prototype)).constructor = u).className = "OneOf", t(15)),
                s = t(33);

            function u(t, i, n, r) {
                if (Array.isArray(i) || (n = i, i = g), e.call(this, t, n), i !== g && !Array.isArray(i)) throw TypeError("fieldNames must be an Array");
                this.oneof = i || [], this.fieldsArray = [], this.comment = r
            }

            function o(t) {
                if (t.parent) for (var i = 0; i < t.fieldsArray.length; ++i) t.fieldsArray[i].parent || t.parent.add(t.fieldsArray[i])
            }

            u.fromJSON = function (t, i) {
                return new u(t, i.oneof, i.options, i.comment)
            }, u.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return s.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : g])
            }, u.prototype.add = function (t) {
                if (t instanceof r) return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), o(t.partOf = this), this;
                throw TypeError("field must be a Field")
            }, u.prototype.remove = function (t) {
                if (!(t instanceof r)) throw TypeError("field must be a Field");
                var i = this.fieldsArray.indexOf(t);
                if (i < 0) throw Error(t + " is not a member of " + this);
                return this.fieldsArray.splice(i, 1), -1 < (i = this.oneof.indexOf(t.name)) && this.oneof.splice(i, 1), t.partOf = null, this
            }, u.prototype.onAdd = function (t) {
                e.prototype.onAdd.call(this, t);
                for (var i = 0; i < this.oneof.length; ++i) {
                    var n = t.get(this.oneof[i]);
                    n && !n.partOf && (n.partOf = this).fieldsArray.push(n)
                }
                o(this)
            }, u.prototype.onRemove = function (t) {
                for (var i, n = 0; n < this.fieldsArray.length; ++n) (i = this.fieldsArray[n]).parent && i.parent.remove(i);
                e.prototype.onRemove.call(this, t)
            }, u.d = function () {
                for (var n = Array(arguments.length), t = 0; t < arguments.length;) n[t] = arguments[t++];
                return function (t, i) {
                    s.decorateType(t.constructor).add(new u(i, n)), Object.defineProperty(t, i, {
                        get: s.oneOfGetter(n),
                        set: s.oneOfSetter(n)
                    })
                }
            }
        }, {15: 15, 22: 22, 33: 33}], 24: [function (t, i, n) {
            i.exports = h;
            var r, e = t(35), s = e.LongBits, u = e.utf8;

            function o(t, i) {
                return RangeError("index out of range: " + t.pos + " + " + (i || 1) + " > " + t.len)
            }

            function h(t) {
                this.buf = t, this.pos = 0, this.len = t.length
            }

            function f() {
                return e.Buffer ? function (t) {
                    return (h.create = function (t) {
                        return e.Buffer.isBuffer(t) ? new r(t) : a(t)
                    })(t)
                } : a
            }

            var c, a = "undefined" != typeof Uint8Array ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t)) return new h(t);
                throw Error("illegal buffer")
            } : function (t) {
                if (Array.isArray(t)) return new h(t);
                throw Error("illegal buffer")
            };

            function l() {
                var t = new s(0, 0), i = 0;
                if (!(4 < this.len - this.pos)) {
                    for (; i < 3; ++i) {
                        if (this.pos >= this.len) throw o(this);
                        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                    return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0, t
                }
                for (; i < 4; ++i) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t;
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
                if (i = 0, 4 < this.len - this.pos) {
                    for (; i < 5; ++i) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
                } else for (; i < 5; ++i) {
                    if (this.pos >= this.len) throw o(this);
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
                }
                throw Error("invalid varint encoding")
            }

            function d(t, i) {
                return (t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0
            }

            function v() {
                if (this.pos + 8 > this.len) throw o(this, 8);
                return new s(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4))
            }

            h.create = f(), h.prototype.h = e.Array.prototype.subarray || e.Array.prototype.slice, h.prototype.uint32 = (c = 4294967295, function () {
                if (c = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (c = (c | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128 || (c = (c | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128 || (c = (c | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128 || (c = (c | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128 || !((this.pos += 5) > this.len)))))) return c;
                throw this.pos = this.len, o(this, 10)
            }), h.prototype.int32 = function () {
                return 0 | this.uint32()
            }, h.prototype.sint32 = function () {
                var t = this.uint32();
                return t >>> 1 ^ -(1 & t) | 0
            }, h.prototype.bool = function () {
                return 0 !== this.uint32()
            }, h.prototype.fixed32 = function () {
                if (this.pos + 4 > this.len) throw o(this, 4);
                return d(this.buf, this.pos += 4)
            }, h.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw o(this, 4);
                return 0 | d(this.buf, this.pos += 4)
            }, h.prototype.float = function () {
                if (this.pos + 4 > this.len) throw o(this, 4);
                var t = e.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, t
            }, h.prototype.double = function () {
                if (this.pos + 8 > this.len) throw o(this, 4);
                var t = e.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, t
            }, h.prototype.bytes = function () {
                var t = this.uint32(), i = this.pos, n = this.pos + t;
                if (n > this.len) throw o(this, t);
                return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(i, n) : i === n ? new this.buf.constructor(0) : this.h.call(this.buf, i, n)
            }, h.prototype.string = function () {
                var t = this.bytes();
                return u.read(t, 0, t.length)
            }, h.prototype.skip = function (t) {
                if ("number" == typeof t) {
                    if (this.pos + t > this.len) throw o(this, t);
                    this.pos += t
                } else do {
                    if (this.pos >= this.len) throw o(this)
                } while (128 & this.buf[this.pos++]);
                return this
            }, h.prototype.skipType = function (t) {
                switch (t) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + t + " at offset " + this.pos)
                }
                return this
            }, h.r = function (t) {
                r = t, h.create = f(), r.r();
                var i = e.Long ? "toLong" : "toNumber";
                e.merge(h.prototype, {
                    int64: function () {
                        return l.call(this)[i](!1)
                    }, uint64: function () {
                        return l.call(this)[i](!0)
                    }, sint64: function () {
                        return l.call(this).zzDecode()[i](!1)
                    }, fixed64: function () {
                        return v.call(this)[i](!0)
                    }, sfixed64: function () {
                        return v.call(this)[i](!1)
                    }
                })
            }
        }, {35: 35}], 25: [function (t, i, n) {
            i.exports = s;
            var r = t(24), e = ((s.prototype = Object.create(r.prototype)).constructor = s, t(35));

            function s(t) {
                r.call(this, t)
            }

            s.r = function () {
                e.Buffer && (s.prototype.h = e.Buffer.prototype.slice)
            }, s.prototype.string = function () {
                var t = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len))
            }, s.r()
        }, {24: 24, 35: 35}], 26: [function (t, i, n) {
            i.exports = h;
            var r, d, v, e = t(21),
                s = (((h.prototype = Object.create(e.prototype)).constructor = h).className = "Root", t(15)), u = t(14),
                o = t(23), b = t(33);

            function h(t) {
                e.call(this, "", t), this.deferred = [], this.files = []
            }

            function p() {
            }

            h.fromJSON = function (t, i) {
                return i = i || new h, t.options && i.setOptions(t.options), i.addJSON(t.nested)
            }, h.prototype.resolvePath = b.path.resolve, h.prototype.fetch = b.fetch, h.prototype.load = function t(i, s, e) {
                "function" == typeof s && (e = s, s = g);
                var u = this;
                if (!e) return b.asPromise(t, u, i, s);
                var o = e === p;

                function h(t, i) {
                    if (e) {
                        var n = e;
                        if (e = null, o) throw t;
                        n(t, i)
                    }
                }

                function f(t) {
                    var i = t.lastIndexOf("google/protobuf/");
                    if (-1 < i) {
                        t = t.substring(i);
                        if (t in v) return t
                    }
                    return null
                }

                function c(t, i) {
                    try {
                        if (b.isString(i) && "{" == (i[0] || "") && (i = JSON.parse(i)), b.isString(i)) {
                            d.filename = t;
                            var n, r = d(i, u, s), e = 0;
                            if (r.imports) for (; e < r.imports.length; ++e) (n = f(r.imports[e]) || u.resolvePath(t, r.imports[e])) && a(n);
                            if (r.weakImports) for (e = 0; e < r.weakImports.length; ++e) (n = f(r.weakImports[e]) || u.resolvePath(t, r.weakImports[e])) && a(n, !0)
                        } else u.setOptions(i.options).addJSON(i.nested)
                    } catch (t) {
                        h(t)
                    }
                    o || l || h(null, u)
                }

                function a(n, r) {
                    if (!~u.files.indexOf(n)) if (u.files.push(n), n in v) o ? c(n, v[n]) : (++l, setTimeout(function () {
                        --l, c(n, v[n])
                    })); else if (o) {
                        var t;
                        try {
                            t = b.fs.readFileSync(n).toString("utf8")
                        } catch (t) {
                            return void (r || h(t))
                        }
                        c(n, t)
                    } else ++l, u.fetch(n, function (t, i) {
                        --l, e && (t ? r ? l || h(null, u) : h(t) : c(n, i))
                    })
                }

                var l = 0;
                b.isString(i) && (i = [i]);
                for (var n, r = 0; r < i.length; ++r) (n = u.resolvePath("", i[r])) && a(n);
                return o ? u : (l || h(null, u), g)
            }, h.prototype.loadSync = function (t, i) {
                if (b.isNode) return this.load(t, i, p);
                throw Error("not supported")
            }, h.prototype.resolveAll = function () {
                if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (t) {
                    return "'extend " + t.extend + "' in " + t.parent.fullName
                }).join(", "));
                return e.prototype.resolveAll.call(this)
            };
            var f = /^[A-Z]/;

            function c(t, i) {
                var n, r = i.parent.lookup(i.extend);
                if (r) return ((n = new s(i.fullName, i.id, i.type, i.rule, g, i.options)).declaringField = i).extensionField = n, r.add(n), 1
            }

            h.prototype.u = function (t) {
                if (t instanceof s) t.extend === g || t.extensionField || c(0, t) || this.deferred.push(t); else if (t instanceof u) f.test(t.name) && (t.parent[t.name] = t.values); else if (!(t instanceof o)) {
                    if (t instanceof r) for (var i = 0; i < this.deferred.length;) c(0, this.deferred[i]) ? this.deferred.splice(i, 1) : ++i;
                    for (var n = 0; n < t.nestedArray.length; ++n) this.u(t.e[n]);
                    f.test(t.name) && (t.parent[t.name] = t)
                }
            }, h.prototype.o = function (t) {
                var i;
                if (t instanceof s) t.extend !== g && (t.extensionField ? (t.extensionField.parent.remove(t.extensionField), t.extensionField = null) : -1 < (i = this.deferred.indexOf(t)) && this.deferred.splice(i, 1)); else if (t instanceof u) f.test(t.name) && delete t.parent[t.name]; else if (t instanceof e) {
                    for (var n = 0; n < t.nestedArray.length; ++n) this.o(t.e[n]);
                    f.test(t.name) && delete t.parent[t.name]
                }
            }, h.r = function (t, i, n) {
                r = t, d = i, v = n
            }
        }, {14: 14, 15: 15, 21: 21, 23: 23, 33: 33}], 27: [function (t, i, n) {
            i.exports = {}
        }, {}], 28: [function (t, i, n) {
            n.Service = t(29)
        }, {29: 29}], 29: [function (t, i, n) {
            i.exports = r;
            var o = t(35);

            function r(t, i, n) {
                if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
                o.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!i, this.responseDelimited = !!n
            }

            ((r.prototype = Object.create(o.EventEmitter.prototype)).constructor = r).prototype.rpcCall = function t(n, i, r, e, s) {
                if (!e) throw TypeError("request must be specified");
                var u = this;
                if (!s) return o.asPromise(t, u, n, i, r, e);
                if (!u.rpcImpl) return setTimeout(function () {
                    s(Error("already ended"))
                }, 0), g;
                try {
                    return u.rpcImpl(n, i[u.requestDelimited ? "encodeDelimited" : "encode"](e).finish(), function (t, i) {
                        if (t) return u.emit("error", t, n), s(t);
                        if (null === i) return u.end(!0), g;
                        if (!(i instanceof r)) try {
                            i = r[u.responseDelimited ? "decodeDelimited" : "decode"](i)
                        } catch (t) {
                            return u.emit("error", t, n), s(t)
                        }
                        return u.emit("data", i, n), s(null, i)
                    })
                } catch (t) {
                    return u.emit("error", t, n), setTimeout(function () {
                        s(t)
                    }, 0), g
                }
            }, r.prototype.end = function (t) {
                return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        }, {35: 35}], 30: [function (t, i, n) {
            i.exports = u;
            var r = t(21),
                s = (((u.prototype = Object.create(r.prototype)).constructor = u).className = "Service", t(20)),
                o = t(33), h = t(28);

            function u(t, i) {
                r.call(this, t, i), this.methods = {}, this.f = null
            }

            function e(t) {
                return t.f = null, t
            }

            u.fromJSON = function (t, i) {
                var n = new u(t, i.options);
                if (i.methods) for (var r = Object.keys(i.methods), e = 0; e < r.length; ++e) n.add(s.fromJSON(r[e], i.methods[r[e]]));
                return i.nested && n.addJSON(i.nested), n.comment = i.comment, n
            }, u.prototype.toJSON = function (t) {
                var i = r.prototype.toJSON.call(this, t), n = !!t && !!t.keepComments;
                return o.toObject(["options", i && i.options || g, "methods", r.arrayToJSON(this.methodsArray, t) || {}, "nested", i && i.nested || g, "comment", n ? this.comment : g])
            }, Object.defineProperty(u.prototype, "methodsArray", {
                get: function () {
                    return this.f || (this.f = o.toArray(this.methods))
                }
            }), u.prototype.get = function (t) {
                return this.methods[t] || r.prototype.get.call(this, t)
            }, u.prototype.resolveAll = function () {
                for (var t = this.methodsArray, i = 0; i < t.length; ++i) t[i].resolve();
                return r.prototype.resolve.call(this)
            }, u.prototype.add = function (t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                return t instanceof s ? e((this.methods[t.name] = t).parent = this) : r.prototype.add.call(this, t)
            }, u.prototype.remove = function (t) {
                if (t instanceof s) {
                    if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.methods[t.name], t.parent = null, e(this)
                }
                return r.prototype.remove.call(this, t)
            }, u.prototype.create = function (t, i, n) {
                for (var r, e = new h.Service(t, i, n), s = 0; s < this.methodsArray.length; ++s) {
                    var u = o.lcFirst((r = this.f[s]).resolve().name).replace(/[^$\w_]/g, "");
                    e[u] = o.codegen(["r", "c"], o.isReserved(u) ? u + "_" : u)("return this.rpcCall(m,q,s,r,c)")({
                        m: r,
                        q: r.resolvedRequestType.ctor,
                        s: r.resolvedResponseType.ctor
                    })
                }
                return e
            }
        }, {20: 20, 21: 21, 28: 28, 33: 33}], 31: [function (t, i, n) {
            i.exports = w;
            var u = t(21), o = (((w.prototype = Object.create(u.prototype)).constructor = w).className = "Type", t(14)),
                h = t(23), f = t(15), c = t(18), a = t(30), e = t(19), s = t(24), l = t(38), d = t(33), v = t(13),
                b = t(12), p = t(36), y = t(11), m = t(37);

            function w(t, i) {
                u.call(this, t, i), this.fields = {}, this.oneofs = g, this.extensions = g, this.reserved = g, this.group = g, this.c = null, this.i = null, this.a = null, this.l = null
            }

            function r(t) {
                return t.c = t.i = t.a = null, delete t.encode, delete t.decode, delete t.verify, t
            }

            Object.defineProperties(w.prototype, {
                fieldsById: {
                    get: function () {
                        if (!this.c) {
                            this.c = {};
                            for (var t = Object.keys(this.fields), i = 0; i < t.length; ++i) {
                                var n = this.fields[t[i]], r = n.id;
                                if (this.c[r]) throw Error("duplicate id " + r + " in " + this);
                                this.c[r] = n
                            }
                        }
                        return this.c
                    }
                }, fieldsArray: {
                    get: function () {
                        return this.i || (this.i = d.toArray(this.fields))
                    }
                }, oneofsArray: {
                    get: function () {
                        return this.a || (this.a = d.toArray(this.oneofs))
                    }
                }, ctor: {
                    get: function () {
                        return this.l || (this.ctor = w.generateConstructor(this)())
                    }, set: function (t) {
                        for (var i = t.prototype, n = (i instanceof e || ((t.prototype = new e).constructor = t, d.merge(t.prototype, i)), t.$type = t.prototype.$type = this, d.merge(t, e, !0), this.l = t, 0); n < this.fieldsArray.length; ++n) this.i[n].resolve();
                        for (var r = {}, n = 0; n < this.oneofsArray.length; ++n) r[this.a[n].resolve().name] = {
                            get: d.oneOfGetter(this.a[n].oneof),
                            set: d.oneOfSetter(this.a[n].oneof)
                        };
                        n && Object.defineProperties(t.prototype, r)
                    }
                }
            }), w.generateConstructor = function (t) {
                for (var i, n = d.codegen(["p"], t.name), r = 0; r < t.fieldsArray.length; ++r) (i = t.i[r]).map ? n("this%s={}", d.safeProp(i.name)) : i.repeated && n("this%s=[]", d.safeProp(i.name));
                return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
            }, w.fromJSON = function (t, i) {
                for (var n = new w(t, i.options), r = (n.extensions = i.extensions, n.reserved = i.reserved, Object.keys(i.fields)), e = 0; e < r.length; ++e) n.add((void 0 !== i.fields[r[e]].keyType ? c : f).fromJSON(r[e], i.fields[r[e]]));
                if (i.oneofs) for (r = Object.keys(i.oneofs), e = 0; e < r.length; ++e) n.add(h.fromJSON(r[e], i.oneofs[r[e]]));
                if (i.nested) for (r = Object.keys(i.nested), e = 0; e < r.length; ++e) {
                    var s = i.nested[r[e]];
                    n.add((s.id !== g ? f : s.fields !== g ? w : s.values !== g ? o : s.methods !== g ? a : u).fromJSON(r[e], s))
                }
                return i.extensions && i.extensions.length && (n.extensions = i.extensions), i.reserved && i.reserved.length && (n.reserved = i.reserved), i.group && (n.group = !0), i.comment && (n.comment = i.comment), n
            }, w.prototype.toJSON = function (t) {
                var i = u.prototype.toJSON.call(this, t), n = !!t && !!t.keepComments;
                return d.toObject(["options", i && i.options || g, "oneofs", u.arrayToJSON(this.oneofsArray, t), "fields", u.arrayToJSON(this.fieldsArray.filter(function (t) {
                    return !t.declaringField
                }), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : g, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "group", this.group || g, "nested", i && i.nested || g, "comment", n ? this.comment : g])
            }, w.prototype.resolveAll = function () {
                for (var t = this.fieldsArray, i = 0; i < t.length;) t[i++].resolve();
                for (var n = this.oneofsArray, i = 0; i < n.length;) n[i++].resolve();
                return u.prototype.resolveAll.call(this)
            }, w.prototype.get = function (t) {
                return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null
            }, w.prototype.add = function (t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                if (t instanceof f && t.extend === g) {
                    if ((this.c || this.fieldsById)[t.id]) throw Error("duplicate id " + t.id + " in " + this);
                    if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
                    if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
                    return t.parent && t.parent.remove(t), (this.fields[t.name] = t).message = this, t.onAdd(this), r(this)
                }
                return t instanceof h ? (this.oneofs || (this.oneofs = {}), (this.oneofs[t.name] = t).onAdd(this), r(this)) : u.prototype.add.call(this, t)
            }, w.prototype.remove = function (t) {
                if (t instanceof f && t.extend === g) {
                    if (this.fields && this.fields[t.name] === t) return delete this.fields[t.name], t.parent = null, t.onRemove(this), r(this);
                    throw Error(t + " is not a member of " + this)
                }
                if (t instanceof h) {
                    if (this.oneofs && this.oneofs[t.name] === t) return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), r(this);
                    throw Error(t + " is not a member of " + this)
                }
                return u.prototype.remove.call(this, t)
            }, w.prototype.isReservedId = function (t) {
                return u.isReservedId(this.reserved, t)
            }, w.prototype.isReservedName = function (t) {
                return u.isReservedName(this.reserved, t)
            }, w.prototype.create = function (t) {
                return new this.ctor(t)
            }, w.prototype.setup = function () {
                for (var t = this.fullName, i = [], n = 0; n < this.fieldsArray.length; ++n) i.push(this.i[n].resolve().resolvedType);
                this.encode = v(this)({Writer: l, types: i, util: d}), this.decode = b(this)({
                    Reader: s,
                    types: i,
                    util: d
                }), this.verify = p(this)({types: i, util: d}), this.fromObject = y.fromObject(this)({
                    types: i,
                    util: d
                }), this.toObject = y.toObject(this)({types: i, util: d});
                var r, t = m[t];
                return t && ((r = Object.create(this)).fromObject = this.fromObject, this.fromObject = t.fromObject.bind(r), r.toObject = this.toObject, this.toObject = t.toObject.bind(r)), this
            }, w.prototype.encode = function (t, i) {
                return this.setup().encode(t, i)
            }, w.prototype.encodeDelimited = function (t, i) {
                return this.encode(t, i && i.len ? i.fork() : i).ldelim()
            }, w.prototype.decode = function (t, i) {
                return this.setup().decode(t, i)
            }, w.prototype.decodeDelimited = function (t) {
                return t instanceof s || (t = s.create(t)), this.decode(t, t.uint32())
            }, w.prototype.verify = function (t) {
                return this.setup().verify(t)
            }, w.prototype.fromObject = function (t) {
                return this.setup().fromObject(t)
            }, w.prototype.toObject = function (t, i) {
                return this.setup().toObject(t, i)
            }, w.d = function (i) {
                return function (t) {
                    d.decorateType(t, i)
                }
            }
        }, {
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            18: 18,
            19: 19,
            21: 21,
            23: 23,
            24: 24,
            30: 30,
            33: 33,
            36: 36,
            37: 37,
            38: 38
        }], 32: [function (t, i, n) {
            var t = t(33),
                e = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

            function r(t, i) {
                var n = 0, r = {};
                for (i |= 0; n < t.length;) r[e[n + i]] = t[n++];
                return r
            }

            n.basic = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), n.defaults = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", t.emptyArray, null]), n.long = r([0, 0, 0, 1, 1], 7), n.mapKey = r([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), n.packed = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
        }, {33: 33}], 33: [function (n, t, i) {
            var r, e, s = t.exports = n(35), u = n(27),
                o = (s.codegen = n(3), s.fetch = n(5), s.path = n(8), s.fs = s.inquire("fs"), s.toArray = function (t) {
                    if (t) {
                        for (var i = Object.keys(t), n = Array(i.length), r = 0; r < i.length;) n[r] = t[i[r++]];
                        return n
                    }
                    return []
                }, s.toObject = function (t) {
                    for (var i = {}, n = 0; n < t.length;) {
                        var r = t[n++], e = t[n++];
                        e !== g && (i[r] = e)
                    }
                    return i
                }, /\\/g), h = /"/g, f = (s.isReserved = function (t) {
                    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
                }, s.safeProp = function (t) {
                    return !/^[$\w_]+$/.test(t) || s.isReserved(t) ? '["' + t.replace(o, "\\\\").replace(h, '\\"') + '"]' : "." + t
                }, s.ucFirst = function (t) {
                    return (t[0] || "").toUpperCase() + t.substring(1)
                }, /_([a-z])/g), c = (s.camelCase = function (t) {
                    return t.substring(0, 1) + t.substring(1).replace(f, function (t, i) {
                        return i.toUpperCase()
                    })
                }, s.compareFieldsById = function (t, i) {
                    return t.id - i.id
                }, s.decorateType = function (t, i) {
                    return t.$type ? (i && t.$type.name !== i && (s.decorateRoot.remove(t.$type), t.$type.name = i, s.decorateRoot.add(t.$type)), t.$type) : (i = new (r = r || n(31))(i || t.name), s.decorateRoot.add(i), i.ctor = t, Object.defineProperty(t, "$type", {
                        value: i,
                        enumerable: !1
                    }), Object.defineProperty(t.prototype, "$type", {value: i, enumerable: !1}), i)
                }, 0);
            s.decorateEnum = function (t) {
                var i;
                return t.$type || (i = new (e = e || n(14))("Enum" + c++, t), s.decorateRoot.add(i), Object.defineProperty(t, "$type", {
                    value: i,
                    enumerable: !1
                }), i)
            }, s.setProperty = function (t, i, n) {
                if ("object" != typeof t) throw TypeError("dst must be an object");
                if (i) return function t(i, n, r) {
                    var e = n.shift();
                    return "__proto__" !== e && (0 < n.length ? i[e] = t(i[e] || {}, n, r) : ((n = i[e]) && (r = [].concat(n).concat(r)), i[e] = r)), i
                }(t, i = i.split("."), n);
                throw TypeError("path must be specified")
            }, Object.defineProperty(s, "decorateRoot", {
                get: function () {
                    return u.decorated || (u.decorated = new (n(26)))
                }
            })
        }, {14: 14, 26: 26, 27: 27, 3: 3, 31: 31, 35: 35, 5: 5, 8: 8}], 34: [function (t, i, n) {
            i.exports = e;
            var r = t(35);

            function e(t, i) {
                this.lo = t >>> 0, this.hi = i >>> 0
            }

            var s = e.zero = new e(0, 0), u = (s.toNumber = function () {
                return 0
            }, s.zzEncode = s.zzDecode = function () {
                return this
            }, s.length = function () {
                return 1
            }, e.zeroHash = "\0\0\0\0\0\0\0\0", e.fromNumber = function (t) {
                var i, n;
                return 0 === t ? s : (n = (t = (i = t < 0) ? -t : t) >>> 0, t = (t - n) / 4294967296 >>> 0, i && (t = ~t >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++t && (t = 0))), new e(n, t))
            }, e.from = function (t) {
                if ("number" == typeof t) return e.fromNumber(t);
                if (r.isString(t)) {
                    if (!r.Long) return e.fromNumber(parseInt(t, 10));
                    t = r.Long.fromString(t)
                }
                return t.low || t.high ? new e(t.low >>> 0, t.high >>> 0) : s
            }, e.prototype.toNumber = function (t) {
                var i;
                return !t && this.hi >>> 31 ? (t = 1 + ~this.lo >>> 0, i = ~this.hi >>> 0, -(t + 4294967296 * (i = t ? i : i + 1 >>> 0))) : this.lo + 4294967296 * this.hi
            }, e.prototype.toLong = function (t) {
                return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, !!t) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!t
                }
            }, String.prototype.charCodeAt);
            e.fromHash = function (t) {
                return "\0\0\0\0\0\0\0\0" === t ? s : new e((u.call(t, 0) | u.call(t, 1) << 8 | u.call(t, 2) << 16 | u.call(t, 3) << 24) >>> 0, (u.call(t, 4) | u.call(t, 5) << 8 | u.call(t, 6) << 16 | u.call(t, 7) << 24) >>> 0)
            }, e.prototype.toHash = function () {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }, e.prototype.zzEncode = function () {
                var t = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
            }, e.prototype.zzDecode = function () {
                var t = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
            }, e.prototype.length = function () {
                var t = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
                return 0 == n ? 0 == i ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
            }
        }, {35: 35}], 35: [function (t, i, n) {
            var r = n;

            function e(t, i, n) {
                for (var r = Object.keys(i), e = 0; e < r.length; ++e) t[r[e]] !== g && n || (t[r[e]] = i[r[e]]);
                return t
            }

            function s(t) {
                function n(t, i) {
                    if (!(this instanceof n)) return new n(t, i);
                    Object.defineProperty(this, "message", {
                        get: function () {
                            return t
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, n) : Object.defineProperty(this, "stack", {value: Error().stack || ""}), i && e(this, i)
                }

                return n.prototype = Object.create(Error.prototype, {
                    constructor: {
                        value: n,
                        writable: !0,
                        enumerable: !1,
                        configurable: !0
                    }, name: {
                        get() {
                            return t
                        }, set: g, enumerable: !1, configurable: !0
                    }, toString: {
                        value() {
                            return this.name + ": " + this.message
                        }, writable: !0, enumerable: !1, configurable: !0
                    }
                }), n
            }

            r.asPromise = t(1), r.base64 = t(2), r.EventEmitter = t(4), r.float = t(6), r.inquire = t(7), r.utf8 = t(10), r.pool = t(9), r.LongBits = t(34), r.isNode = !!("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node), r.global = r.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function (t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }, r.isString = function (t) {
                return "string" == typeof t || t instanceof String
            }, r.isObject = function (t) {
                return t && "object" == typeof t
            }, r.isset = r.isSet = function (t, i) {
                var n = t[i];
                return null != n && t.hasOwnProperty(i) && ("object" != typeof n || 0 < (Array.isArray(n) ? n : Object.keys(n)).length)
            }, r.Buffer = function () {
                try {
                    var t = r.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null
                } catch (t) {
                    return null
                }
            }(), r.v = null, r.b = null, r.newBuffer = function (t) {
                return "number" == typeof t ? r.Buffer ? r.b(t) : new r.Array(t) : r.Buffer ? r.v(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
            }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function (t) {
                return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash
            }, r.longFromHash = function (t, i) {
                t = r.LongBits.fromHash(t);
                return r.Long ? r.Long.fromBits(t.lo, t.hi, i) : t.toNumber(!!i)
            }, r.merge = e, r.lcFirst = function (t) {
                return (t[0] || "").toLowerCase() + t.substring(1)
            }, r.newError = s, r.ProtocolError = s("ProtocolError"), r.oneOfGetter = function (t) {
                for (var n = {}, i = 0; i < t.length; ++i) n[t[i]] = 1;
                return function () {
                    for (var t = Object.keys(this), i = t.length - 1; -1 < i; --i) if (1 === n[t[i]] && this[t[i]] !== g && null !== this[t[i]]) return t[i]
                }
            }, r.oneOfSetter = function (n) {
                return function (t) {
                    for (var i = 0; i < n.length; ++i) n[i] !== t && delete this[n[i]]
                }
            }, r.toJSONOptions = {longs: String, enums: String, bytes: String, json: !0}, r.r = function () {
                var n = r.Buffer;
                n ? (r.v = n.from !== Uint8Array.from && n.from || function (t, i) {
                    return new n(t, i)
                }, r.b = n.allocUnsafe || function (t) {
                    return new n(t)
                }) : r.v = r.b = null
            }
        }, {1: 1, 10: 10, 2: 2, 34: 34, 4: 4, 6: 6, 7: 7, 9: 9}], 36: [function (t, i, n) {
            i.exports = function (t) {
                var i = h.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
                    n = t.oneofsArray, r = {};
                n.length && i("var p={}");
                for (var e = 0; e < t.fieldsArray.length; ++e) {
                    var s, u = t.i[e].resolve(), o = "m" + h.safeProp(u.name);
                    u.optional && i("if(%s!=null&&m.hasOwnProperty(%j)){", o, u.name), u.map ? (i("if(!util.isObject(%s))", o)("return%j", f(u, "object"))("var k=Object.keys(%s)", o)("for(var i=0;i<k.length;++i){"), function (t, i, n) {
                        switch (i.keyType) {
                            case"int32":
                            case"uint32":
                            case"sint32":
                            case"fixed32":
                            case"sfixed32":
                                t("if(!util.key32Re.test(%s))", n)("return%j", f(i, "integer key"));
                                break;
                            case"int64":
                            case"uint64":
                            case"sint64":
                            case"fixed64":
                            case"sfixed64":
                                t("if(!util.key64Re.test(%s))", n)("return%j", f(i, "integer|Long key"));
                                break;
                            case"bool":
                                t("if(!util.key2Re.test(%s))", n)("return%j", f(i, "boolean key"))
                        }
                    }(i, u, "k[i]"), c(i, u, e, o + "[k[i]]")("}")) : u.repeated ? (i("if(!Array.isArray(%s))", o)("return%j", f(u, "array"))("for(var i=0;i<%s.length;++i){", o), c(i, u, e, o + "[i]")("}")) : (u.partOf && (s = h.safeProp(u.partOf.name), 1 === r[u.partOf.name] && i("if(p%s===1)", s)("return%j", u.partOf.name + ": multiple values"), r[u.partOf.name] = 1, i("p%s=1", s)), c(i, u, e, o)), u.optional && i("}")
                }
                return i("return null")
            };
            var u = t(14), h = t(33);

            function f(t, i) {
                return t.name + ": " + i + (t.repeated && "array" !== i ? "[]" : t.map && "object" !== i ? "{k:" + t.keyType + "}" : "") + " expected"
            }

            function c(t, i, n, r) {
                if (i.resolvedType) if (i.resolvedType instanceof u) {
                    t("switch(%s){", r)("default:")("return%j", f(i, "enum value"));
                    for (var e = Object.keys(i.resolvedType.values), s = 0; s < e.length; ++s) t("case %i:", i.resolvedType.values[e[s]]);
                    t("break")("}")
                } else t("{")("var e=types[%i].verify(%s);", n, r)("if(e)")("return%j+e", i.name + ".")("}"); else switch (i.type) {
                    case"int32":
                    case"uint32":
                    case"sint32":
                    case"fixed32":
                    case"sfixed32":
                        t("if(!util.isInteger(%s))", r)("return%j", f(i, "integer"));
                        break;
                    case"int64":
                    case"uint64":
                    case"sint64":
                    case"fixed64":
                    case"sfixed64":
                        t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", r, r, r, r)("return%j", f(i, "integer|Long"));
                        break;
                    case"float":
                    case"double":
                        t('if(typeof %s!=="number")', r)("return%j", f(i, "number"));
                        break;
                    case"bool":
                        t('if(typeof %s!=="boolean")', r)("return%j", f(i, "boolean"));
                        break;
                    case"string":
                        t("if(!util.isString(%s))", r)("return%j", f(i, "string"));
                        break;
                    case"bytes":
                        t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', r, r, r)("return%j", f(i, "buffer"))
                }
                return t
            }
        }, {14: 14, 33: 33}], 37: [function (t, i, n) {
            var u = t(19);
            n[".google.protobuf.Any"] = {
                fromObject: function (t) {
                    if (t && t["@type"]) {
                        var i, n = t["@type"].substring(1 + t["@type"].lastIndexOf("/")), n = this.lookup(n);
                        if (n) return ~(i = "." == (t["@type"][0] || "") ? t["@type"].slice(1) : t["@type"]).indexOf("/") || (i = "/" + i), this.create({
                            type_url: i,
                            value: n.encode(n.fromObject(t)).finish()
                        })
                    }
                    return this.fromObject(t)
                }, toObject: function (t, i) {
                    var n, r, e = "", s = "";
                    return i && i.json && t.type_url && t.value && (s = t.type_url.substring(1 + t.type_url.lastIndexOf("/")), e = t.type_url.substring(0, 1 + t.type_url.lastIndexOf("/")), (n = this.lookup(s)) && (t = n.decode(t.value))), !(t instanceof this.ctor) && t instanceof u ? (n = t.$type.toObject(t, i), r = "." === t.$type.fullName[0] ? t.$type.fullName.slice(1) : t.$type.fullName, n["@type"] = s = (e = "" === e ? "type.googleapis.com/" : e) + r, n) : this.toObject(t, i)
                }
            }
        }, {19: 19}], 38: [function (t, i, n) {
            i.exports = a;
            var r, e = t(35), s = e.LongBits, u = e.base64, o = e.utf8;

            function h(t, i, n) {
                this.fn = t, this.len = i, this.next = g, this.val = n
            }

            function f() {
            }

            function c(t) {
                this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
            }

            function a() {
                this.len = 0, this.head = new h(f, 0, 0), this.tail = this.head, this.states = null
            }

            function l() {
                return e.Buffer ? function () {
                    return (a.create = function () {
                        return new r
                    })()
                } : function () {
                    return new a
                }
            }

            function d(t, i, n) {
                i[n] = 255 & t
            }

            function v(t, i) {
                this.len = t, this.next = g, this.val = i
            }

            function b(t, i, n) {
                for (; t.hi;) i[n++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
                for (; 127 < t.lo;) i[n++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
                i[n++] = t.lo
            }

            function p(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24
            }

            a.create = l(), a.alloc = function (t) {
                return new e.Array(t)
            }, e.Array !== Array && (a.alloc = e.pool(a.alloc, e.Array.prototype.subarray)), a.prototype.p = function (t, i, n) {
                return this.tail = this.tail.next = new h(t, i, n), this.len += i, this
            }, (v.prototype = Object.create(h.prototype)).fn = function (t, i, n) {
                for (; 127 < t;) i[n++] = 127 & t | 128, t >>>= 7;
                i[n] = t
            }, a.prototype.uint32 = function (t) {
                return this.len += (this.tail = this.tail.next = new v((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
            }, a.prototype.int32 = function (t) {
                return t < 0 ? this.p(b, 10, s.fromNumber(t)) : this.uint32(t)
            }, a.prototype.sint32 = function (t) {
                return this.uint32((t << 1 ^ t >> 31) >>> 0)
            }, a.prototype.int64 = a.prototype.uint64 = function (t) {
                t = s.from(t);
                return this.p(b, t.length(), t)
            }, a.prototype.sint64 = function (t) {
                t = s.from(t).zzEncode();
                return this.p(b, t.length(), t)
            }, a.prototype.bool = function (t) {
                return this.p(d, 1, t ? 1 : 0)
            }, a.prototype.sfixed32 = a.prototype.fixed32 = function (t) {
                return this.p(p, 4, t >>> 0)
            }, a.prototype.sfixed64 = a.prototype.fixed64 = function (t) {
                t = s.from(t);
                return this.p(p, 4, t.lo).p(p, 4, t.hi)
            }, a.prototype.float = function (t) {
                return this.p(e.float.writeFloatLE, 4, t)
            }, a.prototype.double = function (t) {
                return this.p(e.float.writeDoubleLE, 8, t)
            };
            var y = e.Array.prototype.set ? function (t, i, n) {
                i.set(t, n)
            } : function (t, i, n) {
                for (var r = 0; r < t.length; ++r) i[n + r] = t[r]
            };
            a.prototype.bytes = function (t) {
                var i, n = t.length >>> 0;
                return n ? (e.isString(t) && (i = a.alloc(n = u.length(t)), u.decode(t, i, 0), t = i), this.uint32(n).p(y, n, t)) : this.p(d, 1, 0)
            }, a.prototype.string = function (t) {
                var i = o.length(t);
                return i ? this.uint32(i).p(o.write, i, t) : this.p(d, 1, 0)
            }, a.prototype.fork = function () {
                return this.states = new c(this), this.head = this.tail = new h(f, 0, 0), this.len = 0, this
            }, a.prototype.reset = function () {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new h(f, 0, 0), this.len = 0), this
            }, a.prototype.ldelim = function () {
                var t = this.head, i = this.tail, n = this.len;
                return this.reset().uint32(n), n && (this.tail.next = t.next, this.tail = i, this.len += n), this
            }, a.prototype.finish = function () {
                for (var t = this.head.next, i = this.constructor.alloc(this.len), n = 0; t;) t.fn(t.val, i, n), n += t.len, t = t.next;
                return i
            }, a.r = function (t) {
                r = t, a.create = l(), r.r()
            }
        }, {35: 35}], 39: [function (t, i, n) {
            i.exports = s;
            var r = t(38), e = ((s.prototype = Object.create(r.prototype)).constructor = s, t(35));

            function s() {
                r.call(this)
            }

            function u(t, i, n) {
                t.length < 40 ? e.utf8.write(t, i, n) : i.utf8Write ? i.utf8Write(t, n) : i.write(t, n)
            }

            s.r = function () {
                s.alloc = e.b, s.writeBytesBuffer = e.Buffer && e.Buffer.prototype instanceof Uint8Array && "set" === e.Buffer.prototype.set.name ? function (t, i, n) {
                    i.set(t, n)
                } : function (t, i, n) {
                    if (t.copy) t.copy(i, n, 0, t.length); else for (var r = 0; r < t.length;) i[n++] = t[r++]
                }
            }, s.prototype.bytes = function (t) {
                var i = (t = e.isString(t) ? e.v(t, "base64") : t).length >>> 0;
                return this.uint32(i), i && this.p(s.writeBytesBuffer, i, t), this
            }, s.prototype.string = function (t) {
                var i = e.Buffer.byteLength(t);
                return this.uint32(i), i && this.p(u, i, t), this
            }, s.r()
        }, {35: 35, 38: 38}]
    }, {}, [16])
}();
// pako 2.0.4
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).pako = {})
}(this, (function (t) {
    "use strict";

    function e(t) {
        let e = t.length;
        for (; --e >= 0;) t[e] = 0
    }

    const a = 256, i = 286, n = 30, s = 15,
        r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
        l = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
        o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
        h = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), d = new Array(576);
    e(d);
    const _ = new Array(60);
    e(_);
    const f = new Array(512);
    e(f);
    const c = new Array(256);
    e(c);
    const u = new Array(29);
    e(u);
    const w = new Array(n);

    function b(t, e, a, i, n) {
        this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = i, this.max_length = n, this.has_stree = t && t.length
    }

    let g, p, m;

    function k(t, e) {
        this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
    }

    e(w);
    const v = t => t < 256 ? f[t] : f[256 + (t >>> 7)], y = (t, e) => {
        t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
    }, x = (t, e, a) => {
        t.bi_valid > 16 - a ? (t.bi_buf |= e << t.bi_valid & 65535, y(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += a - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a)
    }, z = (t, e, a) => {
        x(t, a[2 * e], a[2 * e + 1])
    }, A = (t, e) => {
        let a = 0;
        do {
            a |= 1 & t, t >>>= 1, a <<= 1
        } while (--e > 0);
        return a >>> 1
    }, E = (t, e, a) => {
        const i = new Array(16);
        let n, r, l = 0;
        for (n = 1; n <= s; n++) i[n] = l = l + a[n - 1] << 1;
        for (r = 0; r <= e; r++) {
            let e = t[2 * r + 1];
            0 !== e && (t[2 * r] = A(i[e]++, e))
        }
    }, R = t => {
        let e;
        for (e = 0; e < i; e++) t.dyn_ltree[2 * e] = 0;
        for (e = 0; e < n; e++) t.dyn_dtree[2 * e] = 0;
        for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
        t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
    }, Z = t => {
        t.bi_valid > 8 ? y(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
    }, U = (t, e, a, i) => {
        const n = 2 * e, s = 2 * a;
        return t[n] < t[s] || t[n] === t[s] && i[e] <= i[a]
    }, S = (t, e, a) => {
        const i = t.heap[a];
        let n = a << 1;
        for (; n <= t.heap_len && (n < t.heap_len && U(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !U(e, i, t.heap[n], t.depth));) t.heap[a] = t.heap[n], a = n, n <<= 1;
        t.heap[a] = i
    }, D = (t, e, i) => {
        let n, s, o, h, d = 0;
        if (0 !== t.last_lit) do {
            n = t.pending_buf[t.d_buf + 2 * d] << 8 | t.pending_buf[t.d_buf + 2 * d + 1], s = t.pending_buf[t.l_buf + d], d++, 0 === n ? z(t, s, e) : (o = c[s], z(t, o + a + 1, e), h = r[o], 0 !== h && (s -= u[o], x(t, s, h)), n--, o = v(n), z(t, o, i), h = l[o], 0 !== h && (n -= w[o], x(t, n, h)))
        } while (d < t.last_lit);
        z(t, 256, e)
    }, T = (t, e) => {
        const a = e.dyn_tree, i = e.stat_desc.static_tree, n = e.stat_desc.has_stree, r = e.stat_desc.elems;
        let l, o, h, d = -1;
        for (t.heap_len = 0, t.heap_max = 573, l = 0; l < r; l++) 0 !== a[2 * l] ? (t.heap[++t.heap_len] = d = l, t.depth[l] = 0) : a[2 * l + 1] = 0;
        for (; t.heap_len < 2;) h = t.heap[++t.heap_len] = d < 2 ? ++d : 0, a[2 * h] = 1, t.depth[h] = 0, t.opt_len--, n && (t.static_len -= i[2 * h + 1]);
        for (e.max_code = d, l = t.heap_len >> 1; l >= 1; l--) S(t, a, l);
        h = r;
        do {
            l = t.heap[1], t.heap[1] = t.heap[t.heap_len--], S(t, a, 1), o = t.heap[1], t.heap[--t.heap_max] = l, t.heap[--t.heap_max] = o, a[2 * h] = a[2 * l] + a[2 * o], t.depth[h] = (t.depth[l] >= t.depth[o] ? t.depth[l] : t.depth[o]) + 1, a[2 * l + 1] = a[2 * o + 1] = h, t.heap[1] = h++, S(t, a, 1)
        } while (t.heap_len >= 2);
        t.heap[--t.heap_max] = t.heap[1], ((t, e) => {
            const a = e.dyn_tree, i = e.max_code, n = e.stat_desc.static_tree, r = e.stat_desc.has_stree,
                l = e.stat_desc.extra_bits, o = e.stat_desc.extra_base, h = e.stat_desc.max_length;
            let d, _, f, c, u, w, b = 0;
            for (c = 0; c <= s; c++) t.bl_count[c] = 0;
            for (a[2 * t.heap[t.heap_max] + 1] = 0, d = t.heap_max + 1; d < 573; d++) _ = t.heap[d], c = a[2 * a[2 * _ + 1] + 1] + 1, c > h && (c = h, b++), a[2 * _ + 1] = c, _ > i || (t.bl_count[c]++, u = 0, _ >= o && (u = l[_ - o]), w = a[2 * _], t.opt_len += w * (c + u), r && (t.static_len += w * (n[2 * _ + 1] + u)));
            if (0 !== b) {
                do {
                    for (c = h - 1; 0 === t.bl_count[c];) c--;
                    t.bl_count[c]--, t.bl_count[c + 1] += 2, t.bl_count[h]--, b -= 2
                } while (b > 0);
                for (c = h; 0 !== c; c--) for (_ = t.bl_count[c]; 0 !== _;) f = t.heap[--d], f > i || (a[2 * f + 1] !== c && (t.opt_len += (c - a[2 * f + 1]) * a[2 * f], a[2 * f + 1] = c), _--)
            }
        })(t, e), E(a, d, t.bl_count)
    }, O = (t, e, a) => {
        let i, n, s = -1, r = e[1], l = 0, o = 7, h = 4;
        for (0 === r && (o = 138, h = 3), e[2 * (a + 1) + 1] = 65535, i = 0; i <= a; i++) n = r, r = e[2 * (i + 1) + 1], ++l < o && n === r || (l < h ? t.bl_tree[2 * n] += l : 0 !== n ? (n !== s && t.bl_tree[2 * n]++, t.bl_tree[32]++) : l <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, l = 0, s = n, 0 === r ? (o = 138, h = 3) : n === r ? (o = 6, h = 3) : (o = 7, h = 4))
    }, I = (t, e, a) => {
        let i, n, s = -1, r = e[1], l = 0, o = 7, h = 4;
        for (0 === r && (o = 138, h = 3), i = 0; i <= a; i++) if (n = r, r = e[2 * (i + 1) + 1], !(++l < o && n === r)) {
            if (l < h) do {
                z(t, n, t.bl_tree)
            } while (0 != --l); else 0 !== n ? (n !== s && (z(t, n, t.bl_tree), l--), z(t, 16, t.bl_tree), x(t, l - 3, 2)) : l <= 10 ? (z(t, 17, t.bl_tree), x(t, l - 3, 3)) : (z(t, 18, t.bl_tree), x(t, l - 11, 7));
            l = 0, s = n, 0 === r ? (o = 138, h = 3) : n === r ? (o = 6, h = 3) : (o = 7, h = 4)
        }
    };
    let F = !1;
    const L = (t, e, a, i) => {
        x(t, 0 + (i ? 1 : 0), 3), ((t, e, a, i) => {
            Z(t), i && (y(t, a), y(t, ~a)), t.pending_buf.set(t.window.subarray(e, e + a), t.pending), t.pending += a
        })(t, e, a, !0)
    };
    var N = {
        _tr_init: t => {
            F || ((() => {
                let t, e, a, h, k;
                const v = new Array(16);
                for (a = 0, h = 0; h < 28; h++) for (u[h] = a, t = 0; t < 1 << r[h]; t++) c[a++] = h;
                for (c[a - 1] = h, k = 0, h = 0; h < 16; h++) for (w[h] = k, t = 0; t < 1 << l[h]; t++) f[k++] = h;
                for (k >>= 7; h < n; h++) for (w[h] = k << 7, t = 0; t < 1 << l[h] - 7; t++) f[256 + k++] = h;
                for (e = 0; e <= s; e++) v[e] = 0;
                for (t = 0; t <= 143;) d[2 * t + 1] = 8, t++, v[8]++;
                for (; t <= 255;) d[2 * t + 1] = 9, t++, v[9]++;
                for (; t <= 279;) d[2 * t + 1] = 7, t++, v[7]++;
                for (; t <= 287;) d[2 * t + 1] = 8, t++, v[8]++;
                for (E(d, 287, v), t = 0; t < n; t++) _[2 * t + 1] = 5, _[2 * t] = A(t, 5);
                g = new b(d, r, 257, i, s), p = new b(_, l, 0, n, s), m = new b(new Array(0), o, 0, 19, 7)
            })(), F = !0), t.l_desc = new k(t.dyn_ltree, g), t.d_desc = new k(t.dyn_dtree, p), t.bl_desc = new k(t.bl_tree, m), t.bi_buf = 0, t.bi_valid = 0, R(t)
        },
        _tr_stored_block: L,
        _tr_flush_block: (t, e, i, n) => {
            let s, r, l = 0;
            t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = (t => {
                let e, i = 4093624447;
                for (e = 0; e <= 31; e++, i >>>= 1) if (1 & i && 0 !== t.dyn_ltree[2 * e]) return 0;
                if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                for (e = 32; e < a; e++) if (0 !== t.dyn_ltree[2 * e]) return 1;
                return 0
            })(t)), T(t, t.l_desc), T(t, t.d_desc), l = (t => {
                let e;
                for (O(t, t.dyn_ltree, t.l_desc.max_code), O(t, t.dyn_dtree, t.d_desc.max_code), T(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * h[e] + 1]; e--) ;
                return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
            })(t), s = t.opt_len + 3 + 7 >>> 3, r = t.static_len + 3 + 7 >>> 3, r <= s && (s = r)) : s = r = i + 5, i + 4 <= s && -1 !== e ? L(t, e, i, n) : 4 === t.strategy || r === s ? (x(t, 2 + (n ? 1 : 0), 3), D(t, d, _)) : (x(t, 4 + (n ? 1 : 0), 3), ((t, e, a, i) => {
                let n;
                for (x(t, e - 257, 5), x(t, a - 1, 5), x(t, i - 4, 4), n = 0; n < i; n++) x(t, t.bl_tree[2 * h[n] + 1], 3);
                I(t, t.dyn_ltree, e - 1), I(t, t.dyn_dtree, a - 1)
            })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, l + 1), D(t, t.dyn_ltree, t.dyn_dtree)), R(t), n && Z(t)
        },
        _tr_tally: (t, e, i) => (t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & i, t.last_lit++, 0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++, e--, t.dyn_ltree[2 * (c[i] + a + 1)]++, t.dyn_dtree[2 * v(e)]++), t.last_lit === t.lit_bufsize - 1),
        _tr_align: t => {
            x(t, 2, 3), z(t, 256, d), (t => {
                16 === t.bi_valid ? (y(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
            })(t)
        }
    };
    var B = (t, e, a, i) => {
        let n = 65535 & t | 0, s = t >>> 16 & 65535 | 0, r = 0;
        for (; 0 !== a;) {
            r = a > 2e3 ? 2e3 : a, a -= r;
            do {
                n = n + e[i++] | 0, s = s + n | 0
            } while (--r);
            n %= 65521, s %= 65521
        }
        return n | s << 16 | 0
    };
    const C = new Uint32Array((() => {
        let t, e = [];
        for (var a = 0; a < 256; a++) {
            t = a;
            for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[a] = t
        }
        return e
    })());
    var M = (t, e, a, i) => {
        const n = C, s = i + a;
        t ^= -1;
        for (let a = i; a < s; a++) t = t >>> 8 ^ n[255 & (t ^ e[a])];
        return -1 ^ t
    }, H = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
    }, j = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_MEM_ERROR: -4,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
    };
    const {_tr_init: K, _tr_stored_block: P, _tr_flush_block: Y, _tr_tally: G, _tr_align: X} = N, {
            Z_NO_FLUSH: W,
            Z_PARTIAL_FLUSH: q,
            Z_FULL_FLUSH: J,
            Z_FINISH: Q,
            Z_BLOCK: V,
            Z_OK: $,
            Z_STREAM_END: tt,
            Z_STREAM_ERROR: et,
            Z_DATA_ERROR: at,
            Z_BUF_ERROR: it,
            Z_DEFAULT_COMPRESSION: nt,
            Z_FILTERED: st,
            Z_HUFFMAN_ONLY: rt,
            Z_RLE: lt,
            Z_FIXED: ot,
            Z_DEFAULT_STRATEGY: ht,
            Z_UNKNOWN: dt,
            Z_DEFLATED: _t
        } = j, ft = 258, ct = 262, ut = 103, wt = 113, bt = 666, gt = (t, e) => (t.msg = H[e], e),
        pt = t => (t << 1) - (t > 4 ? 9 : 0), mt = t => {
            let e = t.length;
            for (; --e >= 0;) t[e] = 0
        };
    let kt = (t, e, a) => (e << t.hash_shift ^ a) & t.hash_mask;
    const vt = t => {
        const e = t.state;
        let a = e.pending;
        a > t.avail_out && (a = t.avail_out), 0 !== a && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + a), t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0))
    }, yt = (t, e) => {
        Y(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, vt(t.strm)
    }, xt = (t, e) => {
        t.pending_buf[t.pending++] = e
    }, zt = (t, e) => {
        t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
    }, At = (t, e, a, i) => {
        let n = t.avail_in;
        return n > i && (n = i), 0 === n ? 0 : (t.avail_in -= n, e.set(t.input.subarray(t.next_in, t.next_in + n), a), 1 === t.state.wrap ? t.adler = B(t.adler, e, n, a) : 2 === t.state.wrap && (t.adler = M(t.adler, e, n, a)), t.next_in += n, t.total_in += n, n)
    }, Et = (t, e) => {
        let a, i, n = t.max_chain_length, s = t.strstart, r = t.prev_length, l = t.nice_match;
        const o = t.strstart > t.w_size - ct ? t.strstart - (t.w_size - ct) : 0, h = t.window, d = t.w_mask, _ = t.prev,
            f = t.strstart + ft;
        let c = h[s + r - 1], u = h[s + r];
        t.prev_length >= t.good_match && (n >>= 2), l > t.lookahead && (l = t.lookahead);
        do {
            if (a = e, h[a + r] === u && h[a + r - 1] === c && h[a] === h[s] && h[++a] === h[s + 1]) {
                s += 2, a++;
                do {
                } while (h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && h[++s] === h[++a] && s < f);
                if (i = ft - (f - s), s = f - ft, i > r) {
                    if (t.match_start = e, r = i, i >= l) break;
                    c = h[s + r - 1], u = h[s + r]
                }
            }
        } while ((e = _[e & d]) > o && 0 != --n);
        return r <= t.lookahead ? r : t.lookahead
    }, Rt = t => {
        const e = t.w_size;
        let a, i, n, s, r;
        do {
            if (s = t.window_size - t.lookahead - t.strstart, t.strstart >= e + (e - ct)) {
                t.window.set(t.window.subarray(e, e + e), 0), t.match_start -= e, t.strstart -= e, t.block_start -= e, i = t.hash_size, a = i;
                do {
                    n = t.head[--a], t.head[a] = n >= e ? n - e : 0
                } while (--i);
                i = e, a = i;
                do {
                    n = t.prev[--a], t.prev[a] = n >= e ? n - e : 0
                } while (--i);
                s += e
            }
            if (0 === t.strm.avail_in) break;
            if (i = At(t.strm, t.window, t.strstart + t.lookahead, s), t.lookahead += i, t.lookahead + t.insert >= 3) for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = kt(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = kt(t, t.ins_h, t.window[r + 3 - 1]), t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < 3));) ;
        } while (t.lookahead < ct && 0 !== t.strm.avail_in)
    }, Zt = (t, e) => {
        let a, i;
        for (; ;) {
            if (t.lookahead < ct) {
                if (Rt(t), t.lookahead < ct && e === W) return 1;
                if (0 === t.lookahead) break
            }
            if (a = 0, t.lookahead >= 3 && (t.ins_h = kt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== a && t.strstart - a <= t.w_size - ct && (t.match_length = Et(t, a)), t.match_length >= 3) if (i = G(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                t.match_length--;
                do {
                    t.strstart++, t.ins_h = kt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                } while (0 != --t.match_length);
                t.strstart++
            } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = kt(t, t.ins_h, t.window[t.strstart + 1]); else i = G(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
            if (i && (yt(t, !1), 0 === t.strm.avail_out)) return 1
        }
        return t.insert = t.strstart < 2 ? t.strstart : 2, e === Q ? (yt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (yt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
    }, Ut = (t, e) => {
        let a, i, n;
        for (; ;) {
            if (t.lookahead < ct) {
                if (Rt(t), t.lookahead < ct && e === W) return 1;
                if (0 === t.lookahead) break
            }
            if (a = 0, t.lookahead >= 3 && (t.ins_h = kt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - ct && (t.match_length = Et(t, a), t.match_length <= 5 && (t.strategy === st || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                n = t.strstart + t.lookahead - 3, i = G(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                do {
                    ++t.strstart <= n && (t.ins_h = kt(t, t.ins_h, t.window[t.strstart + 3 - 1]), a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                } while (0 != --t.prev_length);
                if (t.match_available = 0, t.match_length = 2, t.strstart++, i && (yt(t, !1), 0 === t.strm.avail_out)) return 1
            } else if (t.match_available) {
                if (i = G(t, 0, t.window[t.strstart - 1]), i && yt(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1
            } else t.match_available = 1, t.strstart++, t.lookahead--
        }
        return t.match_available && (i = G(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === Q ? (yt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (yt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
    };

    function St(t, e, a, i, n) {
        this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = i, this.func = n
    }

    const Dt = [new St(0, 0, 0, 0, ((t, e) => {
        let a = 65535;
        for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5); ;) {
            if (t.lookahead <= 1) {
                if (Rt(t), 0 === t.lookahead && e === W) return 1;
                if (0 === t.lookahead) break
            }
            t.strstart += t.lookahead, t.lookahead = 0;
            const i = t.block_start + a;
            if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, yt(t, !1), 0 === t.strm.avail_out)) return 1;
            if (t.strstart - t.block_start >= t.w_size - ct && (yt(t, !1), 0 === t.strm.avail_out)) return 1
        }
        return t.insert = 0, e === Q ? (yt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && (yt(t, !1), t.strm.avail_out), 1)
    })), new St(4, 4, 8, 4, Zt), new St(4, 5, 16, 8, Zt), new St(4, 6, 32, 32, Zt), new St(4, 4, 16, 16, Ut), new St(8, 16, 32, 32, Ut), new St(8, 16, 128, 128, Ut), new St(8, 32, 128, 256, Ut), new St(32, 128, 258, 1024, Ut), new St(32, 258, 258, 4096, Ut)];

    function Tt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _t, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), mt(this.dyn_ltree), mt(this.dyn_dtree), mt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), mt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), mt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
    }

    const Ot = t => {
        if (!t || !t.state) return gt(t, et);
        t.total_in = t.total_out = 0, t.data_type = dt;
        const e = t.state;
        return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? 42 : wt, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = W, K(e), $
    }, It = t => {
        const e = Ot(t);
        var a;
        return e === $ && ((a = t.state).window_size = 2 * a.w_size, mt(a.head), a.max_lazy_match = Dt[a.level].max_lazy, a.good_match = Dt[a.level].good_length, a.nice_match = Dt[a.level].nice_length, a.max_chain_length = Dt[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = 2, a.match_available = 0, a.ins_h = 0), e
    }, Ft = (t, e, a, i, n, s) => {
        if (!t) return et;
        let r = 1;
        if (e === nt && (e = 6), i < 0 ? (r = 0, i = -i) : i > 15 && (r = 2, i -= 16), n < 1 || n > 9 || a !== _t || i < 8 || i > 15 || e < 0 || e > 9 || s < 0 || s > ot) return gt(t, et);
        8 === i && (i = 9);
        const l = new Tt;
        return t.state = l, l.strm = t, l.wrap = r, l.gzhead = null, l.w_bits = i, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = n + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + 3 - 1) / 3), l.window = new Uint8Array(2 * l.w_size), l.head = new Uint16Array(l.hash_size), l.prev = new Uint16Array(l.w_size), l.lit_bufsize = 1 << n + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new Uint8Array(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = e, l.strategy = s, l.method = a, It(t)
    };
    var Lt = {
        deflateInit: (t, e) => Ft(t, e, _t, 15, 8, ht),
        deflateInit2: Ft,
        deflateReset: It,
        deflateResetKeep: Ot,
        deflateSetHeader: (t, e) => t && t.state ? 2 !== t.state.wrap ? et : (t.state.gzhead = e, $) : et,
        deflate: (t, e) => {
            let a, i;
            if (!t || !t.state || e > V || e < 0) return t ? gt(t, et) : et;
            const n = t.state;
            if (!t.output || !t.input && 0 !== t.avail_in || n.status === bt && e !== Q) return gt(t, 0 === t.avail_out ? it : et);
            n.strm = t;
            const s = n.last_flush;
            if (n.last_flush = e, 42 === n.status) if (2 === n.wrap) t.adler = 0, xt(n, 31), xt(n, 139), xt(n, 8), n.gzhead ? (xt(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), xt(n, 255 & n.gzhead.time), xt(n, n.gzhead.time >> 8 & 255), xt(n, n.gzhead.time >> 16 & 255), xt(n, n.gzhead.time >> 24 & 255), xt(n, 9 === n.level ? 2 : n.strategy >= rt || n.level < 2 ? 4 : 0), xt(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (xt(n, 255 & n.gzhead.extra.length), xt(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (t.adler = M(t.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69) : (xt(n, 0), xt(n, 0), xt(n, 0), xt(n, 0), xt(n, 0), xt(n, 9 === n.level ? 2 : n.strategy >= rt || n.level < 2 ? 4 : 0), xt(n, 3), n.status = wt); else {
                let e = _t + (n.w_bits - 8 << 4) << 8, a = -1;
                a = n.strategy >= rt || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3, e |= a << 6, 0 !== n.strstart && (e |= 32), e += 31 - e % 31, n.status = wt, zt(n, e), 0 !== n.strstart && (zt(n, t.adler >>> 16), zt(n, 65535 & t.adler)), t.adler = 1
            }
            if (69 === n.status) if (n.gzhead.extra) {
                for (a = n.pending; n.gzindex < (65535 & n.gzhead.extra.length) && (n.pending !== n.pending_buf_size || (n.gzhead.hcrc && n.pending > a && (t.adler = M(t.adler, n.pending_buf, n.pending - a, a)), vt(t), a = n.pending, n.pending !== n.pending_buf_size));) xt(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
                n.gzhead.hcrc && n.pending > a && (t.adler = M(t.adler, n.pending_buf, n.pending - a, a)), n.gzindex === n.gzhead.extra.length && (n.gzindex = 0, n.status = 73)
            } else n.status = 73;
            if (73 === n.status) if (n.gzhead.name) {
                a = n.pending;
                do {
                    if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > a && (t.adler = M(t.adler, n.pending_buf, n.pending - a, a)), vt(t), a = n.pending, n.pending === n.pending_buf_size)) {
                        i = 1;
                        break
                    }
                    i = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, xt(n, i)
                } while (0 !== i);
                n.gzhead.hcrc && n.pending > a && (t.adler = M(t.adler, n.pending_buf, n.pending - a, a)), 0 === i && (n.gzindex = 0, n.status = 91)
            } else n.status = 91;
            if (91 === n.status) if (n.gzhead.comment) {
                a = n.pending;
                do {
                    if (n.pending === n.pending_buf_size && (n.gzhead.hcrc && n.pending > a && (t.adler = M(t.adler, n.pending_buf, n.pending - a, a)), vt(t), a = n.pending, n.pending === n.pending_buf_size)) {
                        i = 1;
                        break
                    }
                    i = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, xt(n, i)
                } while (0 !== i);
                n.gzhead.hcrc && n.pending > a && (t.adler = M(t.adler, n.pending_buf, n.pending - a, a)), 0 === i && (n.status = ut)
            } else n.status = ut;
            if (n.status === ut && (n.gzhead.hcrc ? (n.pending + 2 > n.pending_buf_size && vt(t), n.pending + 2 <= n.pending_buf_size && (xt(n, 255 & t.adler), xt(n, t.adler >> 8 & 255), t.adler = 0, n.status = wt)) : n.status = wt), 0 !== n.pending) {
                if (vt(t), 0 === t.avail_out) return n.last_flush = -1, $
            } else if (0 === t.avail_in && pt(e) <= pt(s) && e !== Q) return gt(t, it);
            if (n.status === bt && 0 !== t.avail_in) return gt(t, it);
            if (0 !== t.avail_in || 0 !== n.lookahead || e !== W && n.status !== bt) {
                let a = n.strategy === rt ? ((t, e) => {
                    let a;
                    for (; ;) {
                        if (0 === t.lookahead && (Rt(t), 0 === t.lookahead)) {
                            if (e === W) return 1;
                            break
                        }
                        if (t.match_length = 0, a = G(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (yt(t, !1), 0 === t.strm.avail_out)) return 1
                    }
                    return t.insert = 0, e === Q ? (yt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (yt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                })(n, e) : n.strategy === lt ? ((t, e) => {
                    let a, i, n, s;
                    const r = t.window;
                    for (; ;) {
                        if (t.lookahead <= ft) {
                            if (Rt(t), t.lookahead <= ft && e === W) return 1;
                            if (0 === t.lookahead) break
                        }
                        if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (n = t.strstart - 1, i = r[n], i === r[++n] && i === r[++n] && i === r[++n])) {
                            s = t.strstart + ft;
                            do {
                            } while (i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && i === r[++n] && n < s);
                            t.match_length = ft - (s - n), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                        }
                        if (t.match_length >= 3 ? (a = G(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = G(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (yt(t, !1), 0 === t.strm.avail_out)) return 1
                    }
                    return t.insert = 0, e === Q ? (yt(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (yt(t, !1), 0 === t.strm.avail_out) ? 1 : 2
                })(n, e) : Dt[n.level].func(n, e);
                if (3 !== a && 4 !== a || (n.status = bt), 1 === a || 3 === a) return 0 === t.avail_out && (n.last_flush = -1), $;
                if (2 === a && (e === q ? X(n) : e !== V && (P(n, 0, 0, !1), e === J && (mt(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), vt(t), 0 === t.avail_out)) return n.last_flush = -1, $
            }
            return e !== Q ? $ : n.wrap <= 0 ? tt : (2 === n.wrap ? (xt(n, 255 & t.adler), xt(n, t.adler >> 8 & 255), xt(n, t.adler >> 16 & 255), xt(n, t.adler >> 24 & 255), xt(n, 255 & t.total_in), xt(n, t.total_in >> 8 & 255), xt(n, t.total_in >> 16 & 255), xt(n, t.total_in >> 24 & 255)) : (zt(n, t.adler >>> 16), zt(n, 65535 & t.adler)), vt(t), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? $ : tt)
        },
        deflateEnd: t => {
            if (!t || !t.state) return et;
            const e = t.state.status;
            return 42 !== e && 69 !== e && 73 !== e && 91 !== e && e !== ut && e !== wt && e !== bt ? gt(t, et) : (t.state = null, e === wt ? gt(t, at) : $)
        },
        deflateSetDictionary: (t, e) => {
            let a = e.length;
            if (!t || !t.state) return et;
            const i = t.state, n = i.wrap;
            if (2 === n || 1 === n && 42 !== i.status || i.lookahead) return et;
            if (1 === n && (t.adler = B(t.adler, e, a, 0)), i.wrap = 0, a >= i.w_size) {
                0 === n && (mt(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
                let t = new Uint8Array(i.w_size);
                t.set(e.subarray(a - i.w_size, a), 0), e = t, a = i.w_size
            }
            const s = t.avail_in, r = t.next_in, l = t.input;
            for (t.avail_in = a, t.next_in = 0, t.input = e, Rt(i); i.lookahead >= 3;) {
                let t = i.strstart, e = i.lookahead - 2;
                do {
                    i.ins_h = kt(i, i.ins_h, i.window[t + 3 - 1]), i.prev[t & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = t, t++
                } while (--e);
                i.strstart = t, i.lookahead = 2, Rt(i)
            }
            return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = 2, i.match_available = 0, t.next_in = r, t.input = l, t.avail_in = s, i.wrap = n, $
        },
        deflateInfo: "pako deflate (from Nodeca project)"
    };
    const Nt = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var Bt = function (t) {
        const e = Array.prototype.slice.call(arguments, 1);
        for (; e.length;) {
            const a = e.shift();
            if (a) {
                if ("object" != typeof a) throw new TypeError(a + "must be non-object");
                for (const e in a) Nt(a, e) && (t[e] = a[e])
            }
        }
        return t
    }, Ct = t => {
        let e = 0;
        for (let a = 0, i = t.length; a < i; a++) e += t[a].length;
        const a = new Uint8Array(e);
        for (let e = 0, i = 0, n = t.length; e < n; e++) {
            let n = t[e];
            a.set(n, i), i += n.length
        }
        return a
    };
    let Mt = !0;
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (t) {
        Mt = !1
    }
    const Ht = new Uint8Array(256);
    for (let t = 0; t < 256; t++) Ht[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
    Ht[254] = Ht[254] = 1;
    var jt = t => {
        if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(t);
        let e, a, i, n, s, r = t.length, l = 0;
        for (n = 0; n < r; n++) a = t.charCodeAt(n), 55296 == (64512 & a) && n + 1 < r && (i = t.charCodeAt(n + 1), 56320 == (64512 & i) && (a = 65536 + (a - 55296 << 10) + (i - 56320), n++)), l += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
        for (e = new Uint8Array(l), s = 0, n = 0; s < l; n++) a = t.charCodeAt(n), 55296 == (64512 & a) && n + 1 < r && (i = t.charCodeAt(n + 1), 56320 == (64512 & i) && (a = 65536 + (a - 55296 << 10) + (i - 56320), n++)), a < 128 ? e[s++] = a : a < 2048 ? (e[s++] = 192 | a >>> 6, e[s++] = 128 | 63 & a) : a < 65536 ? (e[s++] = 224 | a >>> 12, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a) : (e[s++] = 240 | a >>> 18, e[s++] = 128 | a >>> 12 & 63, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a);
        return e
    }, Kt = (t, e) => {
        const a = e || t.length;
        if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(t.subarray(0, e));
        let i, n;
        const s = new Array(2 * a);
        for (n = 0, i = 0; i < a;) {
            let e = t[i++];
            if (e < 128) {
                s[n++] = e;
                continue
            }
            let r = Ht[e];
            if (r > 4) s[n++] = 65533, i += r - 1; else {
                for (e &= 2 === r ? 31 : 3 === r ? 15 : 7; r > 1 && i < a;) e = e << 6 | 63 & t[i++], r--;
                r > 1 ? s[n++] = 65533 : e < 65536 ? s[n++] = e : (e -= 65536, s[n++] = 55296 | e >> 10 & 1023, s[n++] = 56320 | 1023 & e)
            }
        }
        return ((t, e) => {
            if (e < 65534 && t.subarray && Mt) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
            let a = "";
            for (let i = 0; i < e; i++) a += String.fromCharCode(t[i]);
            return a
        })(s, n)
    }, Pt = (t, e) => {
        (e = e || t.length) > t.length && (e = t.length);
        let a = e - 1;
        for (; a >= 0 && 128 == (192 & t[a]);) a--;
        return a < 0 || 0 === a ? e : a + Ht[t[a]] > e ? a : e
    };
    var Yt = function () {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
    };
    const Gt = Object.prototype.toString, {
        Z_NO_FLUSH: Xt,
        Z_SYNC_FLUSH: Wt,
        Z_FULL_FLUSH: qt,
        Z_FINISH: Jt,
        Z_OK: Qt,
        Z_STREAM_END: Vt,
        Z_DEFAULT_COMPRESSION: $t,
        Z_DEFAULT_STRATEGY: te,
        Z_DEFLATED: ee
    } = j;

    function ae(t) {
        this.options = Bt({
            level: $t,
            method: ee,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: te
        }, t || {});
        let e = this.options;
        e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Yt, this.strm.avail_out = 0;
        let a = Lt.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (a !== Qt) throw new Error(H[a]);
        if (e.header && Lt.deflateSetHeader(this.strm, e.header), e.dictionary) {
            let t;
            if (t = "string" == typeof e.dictionary ? jt(e.dictionary) : "[object ArrayBuffer]" === Gt.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, a = Lt.deflateSetDictionary(this.strm, t), a !== Qt) throw new Error(H[a]);
            this._dict_set = !0
        }
    }

    function ie(t, e) {
        const a = new ae(e);
        if (a.push(t, !0), a.err) throw a.msg || H[a.err];
        return a.result
    }

    ae.prototype.push = function (t, e) {
        const a = this.strm, i = this.options.chunkSize;
        let n, s;
        if (this.ended) return !1;
        for (s = e === ~~e ? e : !0 === e ? Jt : Xt, "string" == typeof t ? a.input = jt(t) : "[object ArrayBuffer]" === Gt.call(t) ? a.input = new Uint8Array(t) : a.input = t, a.next_in = 0, a.avail_in = a.input.length; ;) if (0 === a.avail_out && (a.output = new Uint8Array(i), a.next_out = 0, a.avail_out = i), (s === Wt || s === qt) && a.avail_out <= 6) this.onData(a.output.subarray(0, a.next_out)), a.avail_out = 0; else {
            if (n = Lt.deflate(a, s), n === Vt) return a.next_out > 0 && this.onData(a.output.subarray(0, a.next_out)), n = Lt.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === Qt;
            if (0 !== a.avail_out) {
                if (s > 0 && a.next_out > 0) this.onData(a.output.subarray(0, a.next_out)), a.avail_out = 0; else if (0 === a.avail_in) break
            } else this.onData(a.output)
        }
        return !0
    }, ae.prototype.onData = function (t) {
        this.chunks.push(t)
    }, ae.prototype.onEnd = function (t) {
        t === Qt && (this.result = Ct(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
    };
    var ne = {
        Deflate: ae, deflate: ie, deflateRaw: function (t, e) {
            return (e = e || {}).raw = !0, ie(t, e)
        }, gzip: function (t, e) {
            return (e = e || {}).gzip = !0, ie(t, e)
        }, constants: j
    };
    var se = function (t, e) {
        let a, i, n, s, r, l, o, h, d, _, f, c, u, w, b, g, p, m, k, v, y, x, z, A;
        const E = t.state;
        a = t.next_in, z = t.input, i = a + (t.avail_in - 5), n = t.next_out, A = t.output, s = n - (e - t.avail_out), r = n + (t.avail_out - 257), l = E.dmax, o = E.wsize, h = E.whave, d = E.wnext, _ = E.window, f = E.hold, c = E.bits, u = E.lencode, w = E.distcode, b = (1 << E.lenbits) - 1, g = (1 << E.distbits) - 1;
        t:do {
            c < 15 && (f += z[a++] << c, c += 8, f += z[a++] << c, c += 8), p = u[f & b];
            e:for (; ;) {
                if (m = p >>> 24, f >>>= m, c -= m, m = p >>> 16 & 255, 0 === m) A[n++] = 65535 & p; else {
                    if (!(16 & m)) {
                        if (0 == (64 & m)) {
                            p = u[(65535 & p) + (f & (1 << m) - 1)];
                            continue e
                        }
                        if (32 & m) {
                            E.mode = 12;
                            break t
                        }
                        t.msg = "invalid literal/length code", E.mode = 30;
                        break t
                    }
                    k = 65535 & p, m &= 15, m && (c < m && (f += z[a++] << c, c += 8), k += f & (1 << m) - 1, f >>>= m, c -= m), c < 15 && (f += z[a++] << c, c += 8, f += z[a++] << c, c += 8), p = w[f & g];
                    a:for (; ;) {
                        if (m = p >>> 24, f >>>= m, c -= m, m = p >>> 16 & 255, !(16 & m)) {
                            if (0 == (64 & m)) {
                                p = w[(65535 & p) + (f & (1 << m) - 1)];
                                continue a
                            }
                            t.msg = "invalid distance code", E.mode = 30;
                            break t
                        }
                        if (v = 65535 & p, m &= 15, c < m && (f += z[a++] << c, c += 8, c < m && (f += z[a++] << c, c += 8)), v += f & (1 << m) - 1, v > l) {
                            t.msg = "invalid distance too far back", E.mode = 30;
                            break t
                        }
                        if (f >>>= m, c -= m, m = n - s, v > m) {
                            if (m = v - m, m > h && E.sane) {
                                t.msg = "invalid distance too far back", E.mode = 30;
                                break t
                            }
                            if (y = 0, x = _, 0 === d) {
                                if (y += o - m, m < k) {
                                    k -= m;
                                    do {
                                        A[n++] = _[y++]
                                    } while (--m);
                                    y = n - v, x = A
                                }
                            } else if (d < m) {
                                if (y += o + d - m, m -= d, m < k) {
                                    k -= m;
                                    do {
                                        A[n++] = _[y++]
                                    } while (--m);
                                    if (y = 0, d < k) {
                                        m = d, k -= m;
                                        do {
                                            A[n++] = _[y++]
                                        } while (--m);
                                        y = n - v, x = A
                                    }
                                }
                            } else if (y += d - m, m < k) {
                                k -= m;
                                do {
                                    A[n++] = _[y++]
                                } while (--m);
                                y = n - v, x = A
                            }
                            for (; k > 2;) A[n++] = x[y++], A[n++] = x[y++], A[n++] = x[y++], k -= 3;
                            k && (A[n++] = x[y++], k > 1 && (A[n++] = x[y++]))
                        } else {
                            y = n - v;
                            do {
                                A[n++] = A[y++], A[n++] = A[y++], A[n++] = A[y++], k -= 3
                            } while (k > 2);
                            k && (A[n++] = A[y++], k > 1 && (A[n++] = A[y++]))
                        }
                        break
                    }
                }
                break
            }
        } while (a < i && n < r);
        k = c >> 3, a -= k, c -= k << 3, f &= (1 << c) - 1, t.next_in = a, t.next_out = n, t.avail_in = a < i ? i - a + 5 : 5 - (a - i), t.avail_out = n < r ? r - n + 257 : 257 - (n - r), E.hold = f, E.bits = c
    };
    const re = 15,
        le = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
        oe = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
        he = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
        de = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    var _e = (t, e, a, i, n, s, r, l) => {
        const o = l.bits;
        let h, d, _, f, c, u, w = 0, b = 0, g = 0, p = 0, m = 0, k = 0, v = 0, y = 0, x = 0, z = 0, A = null, E = 0;
        const R = new Uint16Array(16), Z = new Uint16Array(16);
        let U, S, D, T = null, O = 0;
        for (w = 0; w <= re; w++) R[w] = 0;
        for (b = 0; b < i; b++) R[e[a + b]]++;
        for (m = o, p = re; p >= 1 && 0 === R[p]; p--) ;
        if (m > p && (m = p), 0 === p) return n[s++] = 20971520, n[s++] = 20971520, l.bits = 1, 0;
        for (g = 1; g < p && 0 === R[g]; g++) ;
        for (m < g && (m = g), y = 1, w = 1; w <= re; w++) if (y <<= 1, y -= R[w], y < 0) return -1;
        if (y > 0 && (0 === t || 1 !== p)) return -1;
        for (Z[1] = 0, w = 1; w < re; w++) Z[w + 1] = Z[w] + R[w];
        for (b = 0; b < i; b++) 0 !== e[a + b] && (r[Z[e[a + b]]++] = b);
        if (0 === t ? (A = T = r, u = 19) : 1 === t ? (A = le, E -= 257, T = oe, O -= 257, u = 256) : (A = he, T = de, u = -1), z = 0, b = 0, w = g, c = s, k = m, v = 0, _ = -1, x = 1 << m, f = x - 1, 1 === t && x > 852 || 2 === t && x > 592) return 1;
        for (; ;) {
            U = w - v, r[b] < u ? (S = 0, D = r[b]) : r[b] > u ? (S = T[O + r[b]], D = A[E + r[b]]) : (S = 96, D = 0), h = 1 << w - v, d = 1 << k, g = d;
            do {
                d -= h, n[c + (z >> v) + d] = U << 24 | S << 16 | D | 0
            } while (0 !== d);
            for (h = 1 << w - 1; z & h;) h >>= 1;
            if (0 !== h ? (z &= h - 1, z += h) : z = 0, b++, 0 == --R[w]) {
                if (w === p) break;
                w = e[a + r[b]]
            }
            if (w > m && (z & f) !== _) {
                for (0 === v && (v = m), c += g, k = w - v, y = 1 << k; k + v < p && (y -= R[k + v], !(y <= 0));) k++, y <<= 1;
                if (x += 1 << k, 1 === t && x > 852 || 2 === t && x > 592) return 1;
                _ = z & f, n[_] = m << 24 | k << 16 | c - s | 0
            }
        }
        return 0 !== z && (n[c + z] = w - v << 24 | 64 << 16 | 0), l.bits = m, 0
    };
    const {
        Z_FINISH: fe,
        Z_BLOCK: ce,
        Z_TREES: ue,
        Z_OK: we,
        Z_STREAM_END: be,
        Z_NEED_DICT: ge,
        Z_STREAM_ERROR: pe,
        Z_DATA_ERROR: me,
        Z_MEM_ERROR: ke,
        Z_BUF_ERROR: ve,
        Z_DEFLATED: ye
    } = j, xe = 12, ze = 30, Ae = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);

    function Ee() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
    }

    const Re = t => {
        if (!t || !t.state) return pe;
        const e = t.state;
        return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = 1, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(852), e.distcode = e.distdyn = new Int32Array(592), e.sane = 1, e.back = -1, we
    }, Ze = t => {
        if (!t || !t.state) return pe;
        const e = t.state;
        return e.wsize = 0, e.whave = 0, e.wnext = 0, Re(t)
    }, Ue = (t, e) => {
        let a;
        if (!t || !t.state) return pe;
        const i = t.state;
        return e < 0 ? (a = 0, e = -e) : (a = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? pe : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = a, i.wbits = e, Ze(t))
    }, Se = (t, e) => {
        if (!t) return pe;
        const a = new Ee;
        t.state = a, a.window = null;
        const i = Ue(t, e);
        return i !== we && (t.state = null), i
    };
    let De, Te, Oe = !0;
    const Ie = t => {
        if (Oe) {
            De = new Int32Array(512), Te = new Int32Array(32);
            let e = 0;
            for (; e < 144;) t.lens[e++] = 8;
            for (; e < 256;) t.lens[e++] = 9;
            for (; e < 280;) t.lens[e++] = 7;
            for (; e < 288;) t.lens[e++] = 8;
            for (_e(1, t.lens, 0, 288, De, 0, t.work, {bits: 9}), e = 0; e < 32;) t.lens[e++] = 5;
            _e(2, t.lens, 0, 32, Te, 0, t.work, {bits: 5}), Oe = !1
        }
        t.lencode = De, t.lenbits = 9, t.distcode = Te, t.distbits = 5
    }, Fe = (t, e, a, i) => {
        let n;
        const s = t.state;
        return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), i >= s.wsize ? (s.window.set(e.subarray(a - s.wsize, a), 0), s.wnext = 0, s.whave = s.wsize) : (n = s.wsize - s.wnext, n > i && (n = i), s.window.set(e.subarray(a - i, a - i + n), s.wnext), (i -= n) ? (s.window.set(e.subarray(a - i, a), 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += n, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))), 0
    };
    var Le = {
        inflateReset: Ze,
        inflateReset2: Ue,
        inflateResetKeep: Re,
        inflateInit: t => Se(t, 15),
        inflateInit2: Se,
        inflate: (t, e) => {
            let a, i, n, s, r, l, o, h, d, _, f, c, u, w, b, g, p, m, k, v, y, x, z = 0;
            const A = new Uint8Array(4);
            let E, R;
            const Z = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
            if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return pe;
            a = t.state, a.mode === xe && (a.mode = 13), r = t.next_out, n = t.output, o = t.avail_out, s = t.next_in, i = t.input, l = t.avail_in, h = a.hold, d = a.bits, _ = l, f = o, x = we;
            t:for (; ;) switch (a.mode) {
                case 1:
                    if (0 === a.wrap) {
                        a.mode = 13;
                        break
                    }
                    for (; d < 16;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    if (2 & a.wrap && 35615 === h) {
                        a.check = 0, A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = M(a.check, A, 2, 0), h = 0, d = 0, a.mode = 2;
                        break
                    }
                    if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & h) << 8) + (h >> 8)) % 31) {
                        t.msg = "incorrect header check", a.mode = ze;
                        break
                    }
                    if ((15 & h) !== ye) {
                        t.msg = "unknown compression method", a.mode = ze;
                        break
                    }
                    if (h >>>= 4, d -= 4, y = 8 + (15 & h), 0 === a.wbits) a.wbits = y; else if (y > a.wbits) {
                        t.msg = "invalid window size", a.mode = ze;
                        break
                    }
                    a.dmax = 1 << a.wbits, t.adler = a.check = 1, a.mode = 512 & h ? 10 : xe, h = 0, d = 0;
                    break;
                case 2:
                    for (; d < 16;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    if (a.flags = h, (255 & a.flags) !== ye) {
                        t.msg = "unknown compression method", a.mode = ze;
                        break
                    }
                    if (57344 & a.flags) {
                        t.msg = "unknown header flags set", a.mode = ze;
                        break
                    }
                    a.head && (a.head.text = h >> 8 & 1), 512 & a.flags && (A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = M(a.check, A, 2, 0)), h = 0, d = 0, a.mode = 3;
                case 3:
                    for (; d < 32;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    a.head && (a.head.time = h), 512 & a.flags && (A[0] = 255 & h, A[1] = h >>> 8 & 255, A[2] = h >>> 16 & 255, A[3] = h >>> 24 & 255, a.check = M(a.check, A, 4, 0)), h = 0, d = 0, a.mode = 4;
                case 4:
                    for (; d < 16;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    a.head && (a.head.xflags = 255 & h, a.head.os = h >> 8), 512 & a.flags && (A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = M(a.check, A, 2, 0)), h = 0, d = 0, a.mode = 5;
                case 5:
                    if (1024 & a.flags) {
                        for (; d < 16;) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        a.length = h, a.head && (a.head.extra_len = h), 512 & a.flags && (A[0] = 255 & h, A[1] = h >>> 8 & 255, a.check = M(a.check, A, 2, 0)), h = 0, d = 0
                    } else a.head && (a.head.extra = null);
                    a.mode = 6;
                case 6:
                    if (1024 & a.flags && (c = a.length, c > l && (c = l), c && (a.head && (y = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Uint8Array(a.head.extra_len)), a.head.extra.set(i.subarray(s, s + c), y)), 512 & a.flags && (a.check = M(a.check, i, c, s)), l -= c, s += c, a.length -= c), a.length)) break t;
                    a.length = 0, a.mode = 7;
                case 7:
                    if (2048 & a.flags) {
                        if (0 === l) break t;
                        c = 0;
                        do {
                            y = i[s + c++], a.head && y && a.length < 65536 && (a.head.name += String.fromCharCode(y))
                        } while (y && c < l);
                        if (512 & a.flags && (a.check = M(a.check, i, c, s)), l -= c, s += c, y) break t
                    } else a.head && (a.head.name = null);
                    a.length = 0, a.mode = 8;
                case 8:
                    if (4096 & a.flags) {
                        if (0 === l) break t;
                        c = 0;
                        do {
                            y = i[s + c++], a.head && y && a.length < 65536 && (a.head.comment += String.fromCharCode(y))
                        } while (y && c < l);
                        if (512 & a.flags && (a.check = M(a.check, i, c, s)), l -= c, s += c, y) break t
                    } else a.head && (a.head.comment = null);
                    a.mode = 9;
                case 9:
                    if (512 & a.flags) {
                        for (; d < 16;) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        if (h !== (65535 & a.check)) {
                            t.msg = "header crc mismatch", a.mode = ze;
                            break
                        }
                        h = 0, d = 0
                    }
                    a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), t.adler = a.check = 0, a.mode = xe;
                    break;
                case 10:
                    for (; d < 32;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    t.adler = a.check = Ae(h), h = 0, d = 0, a.mode = 11;
                case 11:
                    if (0 === a.havedict) return t.next_out = r, t.avail_out = o, t.next_in = s, t.avail_in = l, a.hold = h, a.bits = d, ge;
                    t.adler = a.check = 1, a.mode = xe;
                case xe:
                    if (e === ce || e === ue) break t;
                case 13:
                    if (a.last) {
                        h >>>= 7 & d, d -= 7 & d, a.mode = 27;
                        break
                    }
                    for (; d < 3;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    switch (a.last = 1 & h, h >>>= 1, d -= 1, 3 & h) {
                        case 0:
                            a.mode = 14;
                            break;
                        case 1:
                            if (Ie(a), a.mode = 20, e === ue) {
                                h >>>= 2, d -= 2;
                                break t
                            }
                            break;
                        case 2:
                            a.mode = 17;
                            break;
                        case 3:
                            t.msg = "invalid block type", a.mode = ze
                    }
                    h >>>= 2, d -= 2;
                    break;
                case 14:
                    for (h >>>= 7 & d, d -= 7 & d; d < 32;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    if ((65535 & h) != (h >>> 16 ^ 65535)) {
                        t.msg = "invalid stored block lengths", a.mode = ze;
                        break
                    }
                    if (a.length = 65535 & h, h = 0, d = 0, a.mode = 15, e === ue) break t;
                case 15:
                    a.mode = 16;
                case 16:
                    if (c = a.length, c) {
                        if (c > l && (c = l), c > o && (c = o), 0 === c) break t;
                        n.set(i.subarray(s, s + c), r), l -= c, s += c, o -= c, r += c, a.length -= c;
                        break
                    }
                    a.mode = xe;
                    break;
                case 17:
                    for (; d < 14;) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    if (a.nlen = 257 + (31 & h), h >>>= 5, d -= 5, a.ndist = 1 + (31 & h), h >>>= 5, d -= 5, a.ncode = 4 + (15 & h), h >>>= 4, d -= 4, a.nlen > 286 || a.ndist > 30) {
                        t.msg = "too many length or distance symbols", a.mode = ze;
                        break
                    }
                    a.have = 0, a.mode = 18;
                case 18:
                    for (; a.have < a.ncode;) {
                        for (; d < 3;) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        a.lens[Z[a.have++]] = 7 & h, h >>>= 3, d -= 3
                    }
                    for (; a.have < 19;) a.lens[Z[a.have++]] = 0;
                    if (a.lencode = a.lendyn, a.lenbits = 7, E = {bits: a.lenbits}, x = _e(0, a.lens, 0, 19, a.lencode, 0, a.work, E), a.lenbits = E.bits, x) {
                        t.msg = "invalid code lengths set", a.mode = ze;
                        break
                    }
                    a.have = 0, a.mode = 19;
                case 19:
                    for (; a.have < a.nlen + a.ndist;) {
                        for (; z = a.lencode[h & (1 << a.lenbits) - 1], b = z >>> 24, g = z >>> 16 & 255, p = 65535 & z, !(b <= d);) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        if (p < 16) h >>>= b, d -= b, a.lens[a.have++] = p; else {
                            if (16 === p) {
                                for (R = b + 2; d < R;) {
                                    if (0 === l) break t;
                                    l--, h += i[s++] << d, d += 8
                                }
                                if (h >>>= b, d -= b, 0 === a.have) {
                                    t.msg = "invalid bit length repeat", a.mode = ze;
                                    break
                                }
                                y = a.lens[a.have - 1], c = 3 + (3 & h), h >>>= 2, d -= 2
                            } else if (17 === p) {
                                for (R = b + 3; d < R;) {
                                    if (0 === l) break t;
                                    l--, h += i[s++] << d, d += 8
                                }
                                h >>>= b, d -= b, y = 0, c = 3 + (7 & h), h >>>= 3, d -= 3
                            } else {
                                for (R = b + 7; d < R;) {
                                    if (0 === l) break t;
                                    l--, h += i[s++] << d, d += 8
                                }
                                h >>>= b, d -= b, y = 0, c = 11 + (127 & h), h >>>= 7, d -= 7
                            }
                            if (a.have + c > a.nlen + a.ndist) {
                                t.msg = "invalid bit length repeat", a.mode = ze;
                                break
                            }
                            for (; c--;) a.lens[a.have++] = y
                        }
                    }
                    if (a.mode === ze) break;
                    if (0 === a.lens[256]) {
                        t.msg = "invalid code -- missing end-of-block", a.mode = ze;
                        break
                    }
                    if (a.lenbits = 9, E = {bits: a.lenbits}, x = _e(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, E), a.lenbits = E.bits, x) {
                        t.msg = "invalid literal/lengths set", a.mode = ze;
                        break
                    }
                    if (a.distbits = 6, a.distcode = a.distdyn, E = {bits: a.distbits}, x = _e(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, E), a.distbits = E.bits, x) {
                        t.msg = "invalid distances set", a.mode = ze;
                        break
                    }
                    if (a.mode = 20, e === ue) break t;
                case 20:
                    a.mode = 21;
                case 21:
                    if (l >= 6 && o >= 258) {
                        t.next_out = r, t.avail_out = o, t.next_in = s, t.avail_in = l, a.hold = h, a.bits = d, se(t, f), r = t.next_out, n = t.output, o = t.avail_out, s = t.next_in, i = t.input, l = t.avail_in, h = a.hold, d = a.bits, a.mode === xe && (a.back = -1);
                        break
                    }
                    for (a.back = 0; z = a.lencode[h & (1 << a.lenbits) - 1], b = z >>> 24, g = z >>> 16 & 255, p = 65535 & z, !(b <= d);) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    if (g && 0 == (240 & g)) {
                        for (m = b, k = g, v = p; z = a.lencode[v + ((h & (1 << m + k) - 1) >> m)], b = z >>> 24, g = z >>> 16 & 255, p = 65535 & z, !(m + b <= d);) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        h >>>= m, d -= m, a.back += m
                    }
                    if (h >>>= b, d -= b, a.back += b, a.length = p, 0 === g) {
                        a.mode = 26;
                        break
                    }
                    if (32 & g) {
                        a.back = -1, a.mode = xe;
                        break
                    }
                    if (64 & g) {
                        t.msg = "invalid literal/length code", a.mode = ze;
                        break
                    }
                    a.extra = 15 & g, a.mode = 22;
                case 22:
                    if (a.extra) {
                        for (R = a.extra; d < R;) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        a.length += h & (1 << a.extra) - 1, h >>>= a.extra, d -= a.extra, a.back += a.extra
                    }
                    a.was = a.length, a.mode = 23;
                case 23:
                    for (; z = a.distcode[h & (1 << a.distbits) - 1], b = z >>> 24, g = z >>> 16 & 255, p = 65535 & z, !(b <= d);) {
                        if (0 === l) break t;
                        l--, h += i[s++] << d, d += 8
                    }
                    if (0 == (240 & g)) {
                        for (m = b, k = g, v = p; z = a.distcode[v + ((h & (1 << m + k) - 1) >> m)], b = z >>> 24, g = z >>> 16 & 255, p = 65535 & z, !(m + b <= d);) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        h >>>= m, d -= m, a.back += m
                    }
                    if (h >>>= b, d -= b, a.back += b, 64 & g) {
                        t.msg = "invalid distance code", a.mode = ze;
                        break
                    }
                    a.offset = p, a.extra = 15 & g, a.mode = 24;
                case 24:
                    if (a.extra) {
                        for (R = a.extra; d < R;) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        a.offset += h & (1 << a.extra) - 1, h >>>= a.extra, d -= a.extra, a.back += a.extra
                    }
                    if (a.offset > a.dmax) {
                        t.msg = "invalid distance too far back", a.mode = ze;
                        break
                    }
                    a.mode = 25;
                case 25:
                    if (0 === o) break t;
                    if (c = f - o, a.offset > c) {
                        if (c = a.offset - c, c > a.whave && a.sane) {
                            t.msg = "invalid distance too far back", a.mode = ze;
                            break
                        }
                        c > a.wnext ? (c -= a.wnext, u = a.wsize - c) : u = a.wnext - c, c > a.length && (c = a.length), w = a.window
                    } else w = n, u = r - a.offset, c = a.length;
                    c > o && (c = o), o -= c, a.length -= c;
                    do {
                        n[r++] = w[u++]
                    } while (--c);
                    0 === a.length && (a.mode = 21);
                    break;
                case 26:
                    if (0 === o) break t;
                    n[r++] = a.length, o--, a.mode = 21;
                    break;
                case 27:
                    if (a.wrap) {
                        for (; d < 32;) {
                            if (0 === l) break t;
                            l--, h |= i[s++] << d, d += 8
                        }
                        if (f -= o, t.total_out += f, a.total += f, f && (t.adler = a.check = a.flags ? M(a.check, n, f, r - f) : B(a.check, n, f, r - f)), f = o, (a.flags ? h : Ae(h)) !== a.check) {
                            t.msg = "incorrect data check", a.mode = ze;
                            break
                        }
                        h = 0, d = 0
                    }
                    a.mode = 28;
                case 28:
                    if (a.wrap && a.flags) {
                        for (; d < 32;) {
                            if (0 === l) break t;
                            l--, h += i[s++] << d, d += 8
                        }
                        if (h !== (4294967295 & a.total)) {
                            t.msg = "incorrect length check", a.mode = ze;
                            break
                        }
                        h = 0, d = 0
                    }
                    a.mode = 29;
                case 29:
                    x = be;
                    break t;
                case ze:
                    x = me;
                    break t;
                case 31:
                    return ke;
                case 32:
                default:
                    return pe
            }
            return t.next_out = r, t.avail_out = o, t.next_in = s, t.avail_in = l, a.hold = h, a.bits = d, (a.wsize || f !== t.avail_out && a.mode < ze && (a.mode < 27 || e !== fe)) && Fe(t, t.output, t.next_out, f - t.avail_out), _ -= t.avail_in, f -= t.avail_out, t.total_in += _, t.total_out += f, a.total += f, a.wrap && f && (t.adler = a.check = a.flags ? M(a.check, n, f, t.next_out - f) : B(a.check, n, f, t.next_out - f)), t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === xe ? 128 : 0) + (20 === a.mode || 15 === a.mode ? 256 : 0), (0 === _ && 0 === f || e === fe) && x === we && (x = ve), x
        },
        inflateEnd: t => {
            if (!t || !t.state) return pe;
            let e = t.state;
            return e.window && (e.window = null), t.state = null, we
        },
        inflateGetHeader: (t, e) => {
            if (!t || !t.state) return pe;
            const a = t.state;
            return 0 == (2 & a.wrap) ? pe : (a.head = e, e.done = !1, we)
        },
        inflateSetDictionary: (t, e) => {
            const a = e.length;
            let i, n, s;
            return t && t.state ? (i = t.state, 0 !== i.wrap && 11 !== i.mode ? pe : 11 === i.mode && (n = 1, n = B(n, e, a, 0), n !== i.check) ? me : (s = Fe(t, e, a, a), s ? (i.mode = 31, ke) : (i.havedict = 1, we))) : pe
        },
        inflateInfo: "pako inflate (from Nodeca project)"
    };
    var Ne = function () {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
    };
    const Be = Object.prototype.toString, {
        Z_NO_FLUSH: Ce,
        Z_FINISH: Me,
        Z_OK: He,
        Z_STREAM_END: je,
        Z_NEED_DICT: Ke,
        Z_STREAM_ERROR: Pe,
        Z_DATA_ERROR: Ye,
        Z_MEM_ERROR: Ge
    } = j;

    function Xe(t) {
        this.options = Bt({chunkSize: 65536, windowBits: 15, to: ""}, t || {});
        const e = this.options;
        e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Yt, this.strm.avail_out = 0;
        let a = Le.inflateInit2(this.strm, e.windowBits);
        if (a !== He) throw new Error(H[a]);
        if (this.header = new Ne, Le.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = jt(e.dictionary) : "[object ArrayBuffer]" === Be.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (a = Le.inflateSetDictionary(this.strm, e.dictionary), a !== He))) throw new Error(H[a])
    }

    function We(t, e) {
        const a = new Xe(e);
        if (a.push(t), a.err) throw a.msg || H[a.err];
        return a.result
    }

    Xe.prototype.push = function (t, e) {
        const a = this.strm, i = this.options.chunkSize, n = this.options.dictionary;
        let s, r, l;
        if (this.ended) return !1;
        for (r = e === ~~e ? e : !0 === e ? Me : Ce, "[object ArrayBuffer]" === Be.call(t) ? a.input = new Uint8Array(t) : a.input = t, a.next_in = 0, a.avail_in = a.input.length; ;) {
            for (0 === a.avail_out && (a.output = new Uint8Array(i), a.next_out = 0, a.avail_out = i), s = Le.inflate(a, r), s === Ke && n && (s = Le.inflateSetDictionary(a, n), s === He ? s = Le.inflate(a, r) : s === Ye && (s = Ke)); a.avail_in > 0 && s === je && a.state.wrap > 0 && 0 !== t[a.next_in];) Le.inflateReset(a), s = Le.inflate(a, r);
            switch (s) {
                case Pe:
                case Ye:
                case Ke:
                case Ge:
                    return this.onEnd(s), this.ended = !0, !1
            }
            if (l = a.avail_out, a.next_out && (0 === a.avail_out || s === je)) if ("string" === this.options.to) {
                let t = Pt(a.output, a.next_out), e = a.next_out - t, n = Kt(a.output, t);
                a.next_out = e, a.avail_out = i - e, e && a.output.set(a.output.subarray(t, t + e), 0), this.onData(n)
            } else this.onData(a.output.length === a.next_out ? a.output : a.output.subarray(0, a.next_out));
            if (s !== He || 0 !== l) {
                if (s === je) return s = Le.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
                if (0 === a.avail_in) break
            }
        }
        return !0
    }, Xe.prototype.onData = function (t) {
        this.chunks.push(t)
    }, Xe.prototype.onEnd = function (t) {
        t === He && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Ct(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
    };
    var qe = {
        Inflate: Xe, inflate: We, inflateRaw: function (t, e) {
            return (e = e || {}).raw = !0, We(t, e)
        }, ungzip: We, constants: j
    };
    const {Deflate: Je, deflate: Qe, deflateRaw: Ve, gzip: $e} = ne, {
        Inflate: ta,
        inflate: ea,
        inflateRaw: aa,
        ungzip: ia
    } = qe;
    var na = Je, sa = Qe, ra = Ve, la = $e, oa = ta, ha = ea, da = aa, _a = ia, fa = j, ca = {
        Deflate: na,
        deflate: sa,
        deflateRaw: ra,
        gzip: la,
        Inflate: oa,
        inflate: ha,
        inflateRaw: da,
        ungzip: _a,
        constants: fa
    };
    t.Deflate = na, t.Inflate = oa, t.constants = fa, t.default = ca, t.deflate = sa, t.deflateRaw = ra, t.gzip = la, t.inflate = ha, t.inflateRaw = da, t.ungzip = _a, Object.defineProperty(t, "__esModule", {value: !0})
}));
const biliJson = {
    "nested": {
        "bilibili": {
            "nested": {
                "ad": {
                    "nested": {
                        "v1": {
                            "options": {"java_package": "com.smile.bilibili.model"},
                            "nested": {
                                "AdDto": {
                                    "fields": {
                                        "creativeId": {"type": "int64", "id": 1},
                                        "adCb": {"type": "string", "id": 2},
                                        "cmMark": {"type": "int32", "id": 4},
                                        "topViewId": {"type": "int64", "id": 5},
                                        "creativeType": {"type": "int32", "id": 6},
                                        "cardType": {"type": "int32", "id": 7},
                                        "creativeStyle": {"type": "int32", "id": 8},
                                        "isAd": {"type": "bool", "id": 9}
                                    }
                                },
                                "SourceContentDto": {"fields": {"adContent": {"type": "AdDto", "id": 9}}},
                                "AdsControlDto": {
                                    "fields": {
                                        "hasDanmu": {"type": "int32", "id": 1},
                                        "cids": {"rule": "repeated", "type": "int64", "id": 2}
                                    }
                                }
                            }
                        }
                    }
                }, "app": {
                    "nested": {
                        "archive": {
                            "nested": {
                                "v1": {
                                    "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                        "Arc": {
                                            "fields": {
                                                "aid": {"type": "int64", "id": 1},
                                                "videos": {"type": "int64", "id": 2},
                                                "typeId": {"type": "int32", "id": 3},
                                                "typeName": {"type": "string", "id": 4},
                                                "copyright": {"type": "int32", "id": 5},
                                                "pic": {"type": "string", "id": 6},
                                                "title": {"type": "string", "id": 7},
                                                "pubdate": {"type": "int64", "id": 8},
                                                "ctime": {"type": "int64", "id": 9},
                                                "desc": {"type": "string", "id": 10},
                                                "state": {"type": "int32", "id": 11},
                                                "access": {"type": "int32", "id": 12},
                                                "attribute": {"type": "int32", "id": 13},
                                                "tag": {"type": "string", "id": 14},
                                                "tags": {"rule": "repeated", "type": "string", "id": 15},
                                                "duration": {"type": "int64", "id": 16},
                                                "missionId": {"type": "int64", "id": 17},
                                                "orderId": {"type": "int64", "id": 18},
                                                "redirectUrl": {"type": "string", "id": 19},
                                                "forward": {"type": "int64", "id": 20},
                                                "rights": {"type": "Rights", "id": 21},
                                                "author": {"type": "Author", "id": 22},
                                                "stat": {"type": "Stat", "id": 23},
                                                "reportResult": {"type": "string", "id": 24},
                                                "dynamic": {"type": "string", "id": 25},
                                                "firstCid": {"type": "int64", "id": 26},
                                                "dimension": {"type": "Dimension", "id": 27},
                                                "staffInfo": {"rule": "repeated", "type": "StaffInfo", "id": 28},
                                                "seasonId": {"type": "int64", "id": 29},
                                                "attributeV2": {"type": "int64", "id": 30},
                                                "shortLinkV2": {"type": "string", "id": 40},
                                                "upFromV2": {"type": "int32", "id": 41},
                                                "firstFrame": {"type": "string", "id": 42}
                                            }
                                        },
                                        "Rights": {
                                            "fields": {
                                                "bp": {"type": "int32", "id": 1},
                                                "elec": {"type": "int32", "id": 2},
                                                "download": {"type": "int32", "id": 3},
                                                "movie": {"type": "int32", "id": 4},
                                                "pay": {"type": "int32", "id": 5},
                                                "hd5": {"type": "int32", "id": 6},
                                                "noReprint": {"type": "int32", "id": 7},
                                                "autoplay": {"type": "int32", "id": 8},
                                                "ugcPay": {"type": "int32", "id": 9},
                                                "isCooperation": {"type": "int32", "id": 10},
                                                "ugcPayPreview": {"type": "int32", "id": 11},
                                                "noBackground": {"type": "int32", "id": 12}
                                            }
                                        },
                                        "Author": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "face": {"type": "string", "id": 3}
                                            }
                                        },
                                        "Stat": {
                                            "fields": {
                                                "aid": {"type": "int64", "id": 1},
                                                "view": {"type": "int32", "id": 2},
                                                "danmaku": {"type": "int32", "id": 3},
                                                "reply": {"type": "int32", "id": 4},
                                                "fav": {"type": "int32", "id": 5},
                                                "coin": {"type": "int32", "id": 6},
                                                "share": {"type": "int32", "id": 7},
                                                "nowRank": {"type": "int32", "id": 8},
                                                "hisRank": {"type": "int32", "id": 9},
                                                "like": {"type": "int32", "id": 10},
                                                "dislike": {"type": "int32", "id": 11}
                                            }
                                        },
                                        "StaffInfo": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "attribute": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "Dimension": {
                                            "fields": {
                                                "width": {"type": "int64", "id": 1},
                                                "height": {"type": "int64", "id": 2},
                                                "rotate": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "Page": {
                                            "fields": {
                                                "cid": {"type": "int64", "id": 1},
                                                "page": {"type": "int32", "id": 2},
                                                "from": {"type": "string", "id": 3},
                                                "part": {"type": "string", "id": 4},
                                                "duration": {"type": "int64", "id": 5},
                                                "vid": {"type": "string", "id": 6},
                                                "desc": {"type": "string", "id": 7},
                                                "webLink": {"type": "string", "id": 8},
                                                "dimension": {"type": "Dimension", "id": 9},
                                                "firstFrame": {"type": "string", "id": 10}
                                            }
                                        }
                                    }
                                }
                            }
                        }, "dynamic": {
                            "nested": {
                                "v2": {
                                    "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                        "AdditionalButton": {
                                            "fields": {
                                                "type": {"type": "AddButtonType", "id": 1},
                                                "jumpStyle": {"type": "AdditionalButtonStyle", "id": 2},
                                                "jumpUrl": {"type": "string", "id": 3},
                                                "uncheck": {"type": "AdditionalButtonStyle", "id": 4},
                                                "check": {"type": "AdditionalButtonStyle", "id": 5},
                                                "status": {"type": "AdditionalButtonStatus", "id": 6},
                                                "clickType": {"type": "AdditionalButtonClickType", "id": 7}
                                            }
                                        },
                                        "AddButtonType": {"values": {"bt_none": 0, "bt_jump": 1, "bt_button": 2}},
                                        "AdditionalButtonStatus": {"values": {"none": 0, "uncheck": 1, "check": 2}},
                                        "AdditionalButtonClickType": {"values": {"click_none": 0, "click_up": 1}},
                                        "AdditionalButtonInteractive": {
                                            "fields": {
                                                "popups": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "confirm": {"type": "string", "id": 2},
                                                "cancel": {"type": "string", "id": 3},
                                                "desc": {"type": "string", "id": 4}
                                            }
                                        },
                                        "AdditionalButtonStyle": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "interactive": {"type": "AdditionalButtonInteractive", "id": 3},
                                                "bgStyle": {"type": "AddButtonBgStyle", "id": 4},
                                                "toast": {"type": "string", "id": 5},
                                                "disable": {"type": "DisableState", "id": 6},
                                                "share": {"type": "AdditionalButtonShare", "id": 7}
                                            }
                                        },
                                        "AddButtonBgStyle": {"values": {"fill": 0, "stroke": 1, "gray": 2}},
                                        "DisableState": {"values": {"highlight": 0, "gary": 1}},
                                        "AdditionalButtonShare": {
                                            "fields": {
                                                "show": {
                                                    "type": "AdditionalShareShowType",
                                                    "id": 1
                                                },
                                                "icon": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3}
                                            }
                                        },
                                        "AdditionalShareShowType": {"values": {"st_none": 0, "st_show": 1}},
                                        "AdditionalPGC": {
                                            "fields": {
                                                "headText": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "imageUrl": {"type": "string", "id": 3},
                                                "descText1": {"type": "string", "id": 4},
                                                "descText2": {"type": "string", "id": 5},
                                                "url": {"type": "string", "id": 6},
                                                "button": {"type": "AdditionalButton", "id": 7},
                                                "headIcon": {"type": "string", "id": 8},
                                                "style": {"type": "ImageStyle", "id": 9},
                                                "type": {"type": "string", "id": 10}
                                            }
                                        },
                                        "ImageStyle": {"values": {"add_style_vertical": 0, "add_style_square": 1}},
                                        "AdditionalType": {
                                            "values": {
                                                "additional_none": 0,
                                                "additional_type_pgc": 1,
                                                "additional_type_goods": 2,
                                                "additional_type_vote": 3,
                                                "additional_type_common": 4,
                                                "additional_type_esport": 5,
                                                "additional_type_up_rcmd": 6,
                                                "additional_type_ugc": 7,
                                                "additional_type_up_reservation": 8
                                            }
                                        },
                                        "AdditionCommon": {
                                            "fields": {
                                                "headText": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "imageUrl": {"type": "string", "id": 3},
                                                "descText1": {"type": "string", "id": 4},
                                                "descText2": {"type": "string", "id": 5},
                                                "url": {"type": "string", "id": 6},
                                                "button": {"type": "AdditionalButton", "id": 7},
                                                "headIcon": {"type": "string", "id": 8},
                                                "style": {"type": "ImageStyle", "id": 9},
                                                "type": {"type": "string", "id": 10},
                                                "cardType": {"type": "string", "id": 11}
                                            }
                                        },
                                        "AdditionEsport": {
                                            "oneofs": {"item": {"oneof": ["additionEsportMoba"]}},
                                            "fields": {
                                                "style": {"type": "EspaceStyle", "id": 1},
                                                "additionEsportMoba": {"type": "AdditionEsportMoba", "id": 2},
                                                "type": {"type": "string", "id": 3},
                                                "cardType": {"type": "string", "id": 4}
                                            }
                                        },
                                        "AdditionEsportMoba": {
                                            "fields": {
                                                "headText": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "matchTeam": {"rule": "repeated", "type": "MatchTeam", "id": 3},
                                                "additionEsportMobaStatus": {
                                                    "type": "AdditionEsportMobaStatus",
                                                    "id": 4
                                                },
                                                "uri": {"type": "string", "id": 5},
                                                "button": {"type": "AdditionalButton", "id": 6},
                                                "subTitle": {"type": "string", "id": 7},
                                                "type": {"type": "string", "id": 10},
                                                "cardType": {"type": "string", "id": 11},
                                                "headIcon": {"type": "string", "id": 12}
                                            }
                                        },
                                        "AdditionEsportMobaStatus": {
                                            "fields": {
                                                "additionEsportMobaStatusDesc": {
                                                    "rule": "repeated",
                                                    "type": "AdditionEsportMobaStatusDesc",
                                                    "id": 1
                                                },
                                                "title": {"type": "string", "id": 2},
                                                "status": {"type": "int32", "id": 3},
                                                "color": {"type": "string", "id": 4},
                                                "nightColor": {"type": "string", "id": 5}
                                            }
                                        },
                                        "AdditionEsportMobaStatusDesc": {
                                            "fields": {
                                                "title": {
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "color": {"type": "string", "id": 2},
                                                "nightColor": {"type": "string", "id": 3}
                                            }
                                        },
                                        "AdditionGoods": {
                                            "fields": {
                                                "rcmdDesc": {"type": "string", "id": 1},
                                                "goodsItems": {"rule": "repeated", "type": "GoodsItem", "id": 2},
                                                "cardType": {"type": "string", "id": 3},
                                                "icon": {"type": "string", "id": 4},
                                                "uri": {"type": "string", "id": 5},
                                                "sourceType": {"type": "int32", "id": 6},
                                                "jumpType": {"type": "GoodsJumpType", "id": 7},
                                                "appName": {"type": "string", "id": 8},
                                                "adMarkIcon": {"type": "string", "id": 9}
                                            }
                                        },
                                        "GoodsJumpType": {
                                            "values": {
                                                "goods_none": 0,
                                                "goods_schema": 1,
                                                "goods_url": 2
                                            }
                                        },
                                        "AdditionUgc": {
                                            "fields": {
                                                "headText": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "cover": {"type": "string", "id": 3},
                                                "descText1": {"type": "string", "id": 4},
                                                "descText2": {"type": "string", "id": 5},
                                                "uri": {"type": "string", "id": 6},
                                                "duration": {"type": "string", "id": 7},
                                                "lineFeed": {"type": "bool", "id": 8},
                                                "cardType": {"type": "string", "id": 9}
                                            }
                                        },
                                        "AdditionUP": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "descText1": {"type": "HighlightText", "id": 2},
                                                "descText2": {"type": "string", "id": 3},
                                                "url": {"type": "string", "id": 4},
                                                "button": {"type": "AdditionalButton", "id": 5},
                                                "cardType": {"type": "string", "id": 6},
                                                "reserveTotal": {"type": "int64", "id": 7},
                                                "actSkin": {"type": "AdditionalActSkin", "id": 8},
                                                "rid": {"type": "int64", "id": 9},
                                                "lotteryType": {"type": "ReserveRelationLotteryType", "id": 10},
                                                "descText3": {"type": "HighlightText", "id": 11},
                                                "upMid": {"type": "int64", "id": 12},
                                                "userInfo": {"type": "AdditionUserInfo", "id": 13},
                                                "dynamicId": {"type": "string", "id": 14},
                                                "showText2": {"type": "bool", "id": 15},
                                                "dynType": {"type": "int64", "id": 16},
                                                "businessId": {"type": "string", "id": 17},
                                                "badgeText": {"type": "string", "id": 18},
                                                "isPremiere": {"type": "bool", "id": 19}
                                            }
                                        },
                                        "ReserveRelationLotteryType": {
                                            "values": {
                                                "eserve_relation_lottery_type_default": 0,
                                                "reserve_relation_lottery_type_cron": 1
                                            }
                                        },
                                        "AdditionalActSkin": {
                                            "fields": {
                                                "svga": {"type": "string", "id": 1},
                                                "lastImage": {"type": "string", "id": 2},
                                                "playTimes": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "AdditionUserInfo": {
                                            "fields": {
                                                "name": {"type": "string", "id": 1},
                                                "face": {"type": "string", "id": 2}
                                            }
                                        },
                                        "AdditionVote": {
                                            "fields": {
                                                "imageUrl": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "text1": {"type": "string", "id": 3},
                                                "buttonText": {"type": "string", "id": 4},
                                                "url": {"type": "string", "id": 5}
                                            }
                                        },
                                        "AdditionVote2": {
                                            "oneofs": {"item": {"oneof": ["additionVoteWord", "additionVotePic", "additionVoteDefaule"]}},
                                            "fields": {
                                                "additionVoteType": {"type": "AdditionVoteType", "id": 1},
                                                "voteId": {"type": "int64", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "label": {"type": "string", "id": 4},
                                                "deadline": {"type": "int64", "id": 5},
                                                "openText": {"type": "string", "id": 6},
                                                "closeText": {"type": "string", "id": 7},
                                                "votedText": {"type": "string", "id": 8},
                                                "state": {"type": "AdditionVoteState", "id": 9},
                                                "additionVoteWord": {"type": "AdditionVoteWord", "id": 10},
                                                "additionVotePic": {"type": "AdditionVotePic", "id": 11},
                                                "additionVoteDefaule": {"type": "AdditionVoteDefaule", "id": 12},
                                                "bizType": {"type": "int32", "id": 13},
                                                "total": {"type": "int64", "id": 14},
                                                "cardType": {"type": "string", "id": 15},
                                                "tips": {"type": "string", "id": 16},
                                                "uri": {"type": "string", "id": 17},
                                                "isVoted": {"type": "bool", "id": 18},
                                                "choiceCnt": {"type": "int32", "id": 19},
                                                "defauleSelectShare": {"type": "bool", "id": 20}
                                            }
                                        },
                                        "AdditionVoteDefaule": {
                                            "fields": {
                                                "cover": {
                                                    "rule": "repeated",
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "AdditionVotePic": {
                                            "fields": {
                                                "item": {
                                                    "rule": "repeated",
                                                    "type": "AdditionVotePicItem",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "AdditionVotePicItem": {
                                            "fields": {
                                                "optIdx": {"type": "int32", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "isVote": {"type": "bool", "id": 3},
                                                "total": {"type": "int32", "id": 4},
                                                "persent": {"type": "double", "id": 5},
                                                "title": {"type": "string", "id": 6},
                                                "isMaxOption": {"type": "bool", "id": 7}
                                            }
                                        },
                                        "AdditionVoteState": {
                                            "values": {
                                                "addition_vote_state_none": 0,
                                                "addition_vote_state_open": 1,
                                                "addition_vote_state_close": 2
                                            }
                                        },
                                        "AdditionVoteType": {
                                            "values": {
                                                "addition_vote_type_none": 0,
                                                "addition_vote_type_word": 1,
                                                "addition_vote_type_pic": 2,
                                                "addition_vote_type_default": 3
                                            }
                                        },
                                        "AdditionVoteWord": {
                                            "fields": {
                                                "item": {
                                                    "rule": "repeated",
                                                    "type": "AdditionVoteWordItem",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "AdditionVoteWordItem": {
                                            "fields": {
                                                "optIdx": {"type": "int32", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "isVote": {"type": "bool", "id": 3},
                                                "total": {"type": "int32", "id": 4},
                                                "persent": {"type": "double", "id": 5},
                                                "isMaxOption": {"type": "bool", "id": 6}
                                            }
                                        },
                                        "CardVideoUpList": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "list": {"rule": "repeated", "type": "UpListItem", "id": 2},
                                                "footprint": {"type": "string", "id": 3},
                                                "showLiveNum": {"type": "int32", "id": 4},
                                                "moreLabel": {"type": "UpListMoreLabel", "id": 5},
                                                "titleSwitch": {"type": "int32", "id": 6},
                                                "showMoreLabel": {"type": "bool", "id": 7},
                                                "showInPersonal": {"type": "bool", "id": 8},
                                                "showMoreButton": {"type": "bool", "id": 9}
                                            }
                                        },
                                        "CmtShowItem": {
                                            "fields": {
                                                "uid": {"type": "int64", "id": 1},
                                                "uname": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "comment": {"type": "string", "id": 4}
                                            }
                                        },
                                        "DecoCardFan": {
                                            "fields": {
                                                "isFan": {"type": "int32", "id": 1},
                                                "number": {"type": "int32", "id": 2},
                                                "numberStr": {"type": "string", "id": 3},
                                                "color": {"type": "string", "id": 4}
                                            }
                                        },
                                        "DecorateCard": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "cardUrl": {"type": "string", "id": 2},
                                                "jumpUrl": {"type": "string", "id": 3},
                                                "fan": {"type": "DecoCardFan", "id": 4}
                                            }
                                        },
                                        "Description": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "type": {"type": "DescType", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "emojiType": {"type": "EmojiType", "id": 4},
                                                "goodsType": {"type": "string", "id": 5},
                                                "iconUrl": {"type": "string", "id": 6},
                                                "iconName": {"type": "string", "id": 7},
                                                "rid": {"type": "string", "id": 8},
                                                "goods": {"type": "ModuleDescGoods", "id": 9},
                                                "origText": {"type": "string", "id": 10},
                                                "emojiSize": {"type": "int32", "id": 11},
                                                "emojiSizeSpec": {"type": "EmojiSizeSpec", "id": 12}
                                            }
                                        },
                                        "EmojiSizeSpec": {"fields": {"width": {"type": "int64", "id": 1}}},
                                        "EmojiType": {
                                            "values": {
                                                "emoji_none": 0,
                                                "emoji_old": 1,
                                                "emoji_new": 2,
                                                "vip": 3
                                            }
                                        },
                                        "DescType": {
                                            "values": {
                                                "desc_type_none": 0,
                                                "desc_type_text": 1,
                                                "desc_type_aite": 2,
                                                "desc_type_lottery": 3,
                                                "desc_type_vote": 4,
                                                "desc_type_topic": 5,
                                                "desc_type_goods": 6,
                                                "desc_type_bv": 7,
                                                "desc_type_av": 8,
                                                "desc_type_emoji": 9,
                                                "desc_type_user": 10,
                                                "desc_type_cv": 11,
                                                "desc_type_vc": 12,
                                                "desc_type_web": 13,
                                                "desc_type_taobao": 14,
                                                "desc_type_mail": 15,
                                                "desc_type_ogv_season": 16,
                                                "desc_type_ogv_ep": 17,
                                                "desc_type_search_word": 18
                                            }
                                        },
                                        "Dimension": {
                                            "fields": {
                                                "height": {"type": "int64", "id": 1},
                                                "width": {"type": "int64", "id": 2},
                                                "rotate": {"type": "int64", "id": 3},
                                                "forceHorizontal": {"type": "bool", "id": 4}
                                            }
                                        },
                                        "DynAllReply": {
                                            "fields": {
                                                "dynamicList": {"type": "DynamicList", "id": 1},
                                                "upList": {"type": "CardVideoUpList", "id": 2},
                                                "topicList": {"type": "TopicList", "id": 3},
                                                "unfollow": {"type": "Unfollow", "id": 4},
                                                "regionRcmd": {"type": "DynRegionRcmd", "id": 5},
                                                "config": {"type": "Config", "id": 6}
                                            }
                                        },
                                        "Config": {
                                            "fields": {
                                                "storyVerticalExp": {"type": "bool", "id": 1},
                                                "detailViewBits": {"type": "int64", "id": 2}
                                            }
                                        },
                                        "DynRegionRcmd": {
                                            "fields": {
                                                "items": {
                                                    "rule": "repeated",
                                                    "type": "DynRegionRcmdItem",
                                                    "id": 1
                                                }, "opts": {"type": "RcmdOption", "id": 2}
                                            }
                                        },
                                        "RcmdOption": {"fields": {"showTitle": {"type": "bool", "id": 1}}},
                                        "DynRegionRcmdItem": {
                                            "fields": {
                                                "rid": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "items": {"rule": "repeated", "type": "ModuleRcmd", "id": 3}
                                            }
                                        },
                                        "ModuleRcmd": {
                                            "fields": {
                                                "author": {"type": "RcmdAuthor", "id": 1},
                                                "items": {"rule": "repeated", "type": "RcmdItem", "id": 2},
                                                "serverInfo": {"type": "string", "id": 3}
                                            }
                                        },
                                        "RcmdAuthor": {
                                            "fields": {
                                                "author": {"type": "UserInfo", "id": 1},
                                                "desc": {"type": "string", "id": 2},
                                                "relation": {"type": "Relation", "id": 3}
                                            }
                                        },
                                        "RcmdItem": {
                                            "oneofs": {"item": {"oneof": ["rcmdArchive"]}},
                                            "fields": {
                                                "type": {"type": "RcmdType", "id": 1},
                                                "rcmdArchive": {"type": "RcmdArchive", "id": 2}
                                            }
                                        },
                                        "RcmdArchive": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "coverLeftIcon1": {"type": "CoverIcon", "id": 3},
                                                "coverLeftText1": {"type": "string", "id": 4},
                                                "uri": {"type": "string", "id": 5},
                                                "isPgc": {"type": "bool", "id": 6},
                                                "aid": {"type": "int64", "id": 7},
                                                "badge": {"type": "IconBadge", "id": 8},
                                                "coverLeftIcon2": {"type": "CoverIcon", "id": 9},
                                                "coverLeftText2": {"type": "string", "id": 10},
                                                "coverLeftIcon3": {"type": "CoverIcon", "id": 11},
                                                "coverLeftText3": {"type": "string", "id": 12},
                                                "desc": {"type": "string", "id": 13},
                                                "trackId": {"type": "string", "id": 14},
                                                "rcmdReason": {"type": "RcmdReason", "id": 15}
                                            }
                                        },
                                        "RcmdReason": {
                                            "fields": {
                                                "campusName": {"type": "string", "id": 1},
                                                "style": {"type": "RcmdReasonStyle", "id": 2},
                                                "rcmdReason": {"type": "string", "id": 3},
                                                "upName": {"type": "string", "id": 4}
                                            }
                                        },
                                        "RcmdReasonStyle": {
                                            "values": {
                                                "rcmd_reason_style_none": 0,
                                                "rcmd_reason_style_campus_nearby": 1,
                                                "rcmd_reason_style_campus_up": 2,
                                                "rcmd_reason_style_campus_near_up_mix": 3
                                            }
                                        },
                                        "CoverIcon": {
                                            "values": {
                                                "cover_icon_none": 0,
                                                "cover_icon_play": 1,
                                                "cover_icon_danmaku": 2,
                                                "cover_icon_up": 3
                                            }
                                        },
                                        "IconBadge": {
                                            "fields": {
                                                "iconBgUrl": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2}
                                            }
                                        },
                                        "RcmdType": {"values": {"rcmd_archive": 0, "rcmd_dynamic": 1}},
                                        "DynamicItem": {
                                            "fields": {
                                                "cardType": {"type": "DynamicType", "id": 1},
                                                "itemType": {"type": "DynamicType", "id": 2},
                                                "modules": {"rule": "repeated", "type": "Module", "id": 3},
                                                "extend": {"type": "Extend", "id": 4},
                                                "hasFold": {"type": "int32", "id": 5},
                                                "serverInfo": {"type": "string", "id": 6}
                                            }
                                        },
                                        "DynamicType": {
                                            "values": {
                                                "dyn_none": 0,
                                                "forward": 1,
                                                "av": 2,
                                                "pgc": 3,
                                                "courses": 4,
                                                "fold": 5,
                                                "word": 6,
                                                "draw": 7,
                                                "article": 8,
                                                "music": 9,
                                                "common_square": 10,
                                                "common_vertical": 11,
                                                "live": 12,
                                                "medialist": 13,
                                                "courses_season": 14,
                                                "ad": 15,
                                                "applet": 16,
                                                "subscription": 17,
                                                "live_rcmd": 18,
                                                "banner": 19,
                                                "ugc_season": 20,
                                                "subscription_new": 21,
                                                "story": 22,
                                                "topic_rcmd": 23,
                                                "cour_up": 24,
                                                "topic_set": 25,
                                                "notice": 26
                                            }
                                        },
                                        "DynamicList": {
                                            "fields": {
                                                "list": {
                                                    "rule": "repeated",
                                                    "type": "DynamicItem",
                                                    "id": 1
                                                },
                                                "updateNum": {"type": "int64", "id": 2},
                                                "historyOffset": {"type": "string", "id": 3},
                                                "updateBaseline": {"type": "string", "id": 4},
                                                "hasMore": {"type": "bool", "id": 5}
                                            }
                                        },
                                        "DynExtendType": {
                                            "values": {
                                                "dyn_ext_type_none": 0,
                                                "dyn_ext_type_topic": 1,
                                                "dyn_ext_type_lbs": 2,
                                                "dyn_ext_type_hot": 3,
                                                "dyn_ext_type_game": 4,
                                                "dyn_ext_type_common": 5,
                                                "dyn_ext_type_biliCut": 6,
                                                "dyn_ext_type_ogv": 7,
                                                "dyn_ext_type_auto_ogv": 8
                                            }
                                        },
                                        "DynModuleType": {
                                            "values": {
                                                "module_none": 0,
                                                "module_author": 1,
                                                "module_dispute": 2,
                                                "module_desc": 3,
                                                "module_dynamic": 4,
                                                "module_forward": 5,
                                                "module_likeUser": 6,
                                                "module_extend": 7,
                                                "module_additional": 8,
                                                "module_stat": 9,
                                                "module_fold": 10,
                                                "module_comment": 11,
                                                "module_interaction": 12,
                                                "module_author_forward": 13,
                                                "module_ad": 14,
                                                "module_banner": 15,
                                                "module_item_null": 16,
                                                "module_share_info": 17,
                                                "module_recommend": 18,
                                                "module_stat_forward": 19,
                                                "module_top": 20,
                                                "module_bottom": 21,
                                                "module_story": 22,
                                                "module_topic": 23,
                                                "module_topic_details_ext": 24,
                                                "module_top_tag": 25,
                                                "module_topic_brief": 26,
                                                "module_title": 27,
                                                "module_button": 28,
                                                "module_notice": 29,
                                                "module_opus_summary": 30,
                                                "module_copyright": 31,
                                                "module_paragraph": 32,
                                                "module_blocked": 33
                                            }
                                        },
                                        "EspaceStyle": {"values": {"moba": 0}},
                                        "Extend": {
                                            "fields": {
                                                "dynIdStr": {"type": "string", "id": 1},
                                                "businessId": {"type": "string", "id": 2},
                                                "origDynIdStr": {"type": "string", "id": 3},
                                                "origName": {"type": "string", "id": 4},
                                                "origImgUrl": {"type": "string", "id": 5},
                                                "origDesc": {"rule": "repeated", "type": "Description", "id": 6},
                                                "desc": {"rule": "repeated", "type": "Description", "id": 7},
                                                "origDynType": {"type": "DynamicType", "id": 8},
                                                "shareType": {"type": "string", "id": 9},
                                                "shareScene": {"type": "string", "id": 10},
                                                "isFastShare": {"type": "bool", "id": 11},
                                                "rType": {"type": "int32", "id": 12},
                                                "dynType": {"type": "int64", "id": 13},
                                                "uid": {"type": "int64", "id": 14},
                                                "cardUrl": {"type": "string", "id": 15},
                                                "sourceContent": {"type": "google.protobuf.Any", "id": 16},
                                                "origFace": {"type": "string", "id": 17},
                                                "reply": {"type": "ExtendReply", "id": 18},
                                                "trackId": {"type": "string", "id": 19},
                                                "opusSummary": {"type": "ModuleOpusSummary", "id": 20},
                                                "onlyFansProperty": {"type": "OnlyFansProperty", "id": 21},
                                                "featureGate": {"type": "DynFeatureGate", "id": 22},
                                                "isInAudit": {"type": "bool", "id": 23}
                                            }
                                        },
                                        "ExtendReply": {
                                            "fields": {
                                                "uri": {"type": "string", "id": 1},
                                                "params": {"rule": "repeated", "type": "ExtendReplyParam", "id": 2}
                                            }
                                        },
                                        "ExtendReplyParam": {
                                            "fields": {
                                                "key": {"type": "string", "id": 1},
                                                "value": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ExtInfoCommon": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "poiType": {"type": "int32", "id": 4},
                                                "type": {"type": "DynExtendType", "id": 5},
                                                "subModule": {"type": "string", "id": 6},
                                                "actionText": {"type": "string", "id": 7},
                                                "actionUrl": {"type": "string", "id": 8},
                                                "rid": {"type": "int64", "id": 9},
                                                "isShowLight": {"type": "bool", "id": 10}
                                            }
                                        },
                                        "ExtInfoGame": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ExtInfoHot": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ExtInfoLBS": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "poiType": {"type": "int32", "id": 4}
                                            }
                                        },
                                        "ExtInfoOGV": {
                                            "fields": {
                                                "infoOgv": {
                                                    "rule": "repeated",
                                                    "type": "InfoOGV",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ExtInfoTopic": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3}
                                            }
                                        },
                                        "GoodsItem": {
                                            "fields": {
                                                "cover": {"type": "string", "id": 1},
                                                "schemaPackageName": {"type": "string", "id": 2},
                                                "sourceType": {"type": "int32", "id": 3},
                                                "jumpUrl": {"type": "string", "id": 4},
                                                "jumpDesc": {"type": "string", "id": 5},
                                                "title": {"type": "string", "id": 6},
                                                "brief": {"type": "string", "id": 7},
                                                "price": {"type": "string", "id": 8},
                                                "itemId": {"type": "int64", "id": 9},
                                                "schemaUrl": {"type": "string", "id": 10},
                                                "openWhiteList": {"rule": "repeated", "type": "string", "id": 11},
                                                "userWebV2": {"type": "bool", "id": 12},
                                                "adMark": {"type": "string", "id": 13},
                                                "appName": {"type": "string", "id": 14},
                                                "jumpType": {"type": "GoodsJumpType", "id": 15}
                                            }
                                        },
                                        "HighlightText": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "textStyle": {"type": "HighlightTextStyle", "id": 2},
                                                "jumpUrl": {"type": "string", "id": 3},
                                                "icon": {"type": "string", "id": 4}
                                            }
                                        },
                                        "HighlightTextStyle": {"values": {"style_none": 0, "style_highlight": 1}},
                                        "InfoOGV": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "subModule": {"type": "string", "id": 4}
                                            }
                                        },
                                        "InteractionItem": {
                                            "fields": {
                                                "iconType": {"type": "LocalIconType", "id": 1},
                                                "desc": {"rule": "repeated", "type": "Description", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "dynamicId": {"type": "string", "id": 4},
                                                "commentMid": {"type": "int64", "id": 6},
                                                "faces": {"rule": "repeated", "type": "InteractionFace", "id": 7},
                                                "stat": {"type": "InteractionStat", "id": 8},
                                                "icon": {"type": "string", "id": 9},
                                                "tailIcon": {"type": "string", "id": 10},
                                                "tailDesc": {"rule": "repeated", "type": "Description", "id": 11}
                                            }
                                        },
                                        "LocalIconType": {
                                            "values": {
                                                "local_icon_comment": 0,
                                                "local_icon_like": 1,
                                                "local_icon_avatar": 2,
                                                "local_icon_cover": 3,
                                                "local_icon_like_and_forward": 4
                                            }
                                        },
                                        "InteractionFace": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "face": {"type": "string", "id": 2}
                                            }
                                        },
                                        "InteractionStat": {
                                            "fields": {
                                                "like": {"type": "int64", "id": 1},
                                                "forward": {"type": "int64", "id": 2}
                                            }
                                        },
                                        "LikeAnimation": {
                                            "fields": {
                                                "begin": {"type": "string", "id": 1},
                                                "proc": {"type": "string", "id": 2},
                                                "end": {"type": "string", "id": 3},
                                                "likeIconId": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "LikeInfo": {
                                            "fields": {
                                                "animation": {"type": "LikeAnimation", "id": 1},
                                                "isLike": {"type": "bool", "id": 2}
                                            }
                                        },
                                        "LikeUser": {
                                            "fields": {
                                                "uid": {"type": "int64", "id": 1},
                                                "uname": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3}
                                            }
                                        },
                                        "LiveInfo": {
                                            "fields": {
                                                "isLiving": {"type": "int32", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "liveState": {"type": "LiveState", "id": 3}
                                            }
                                        },
                                        "LiveState": {"values": {"live_none": 0, "live_live": 1, "live_rotation": 2}},
                                        "MatchTeam": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "cover": {"type": "string", "id": 3},
                                                "color": {"type": "string", "id": 4},
                                                "nightColor": {"type": "string", "id": 5}
                                            }
                                        },
                                        "MdlDynApplet": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 4},
                                                "subTitle": {"type": "string", "id": 5},
                                                "cover": {"type": "string", "id": 6},
                                                "icon": {"type": "string", "id": 7},
                                                "label": {"type": "string", "id": 8},
                                                "buttonTitle": {"type": "string", "id": 9}
                                            }
                                        },
                                        "MdlDynArchive": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "coverLeftText1": {"type": "string", "id": 4},
                                                "coverLeftText2": {"type": "string", "id": 5},
                                                "coverLeftText3": {"type": "string", "id": 6},
                                                "avid": {"type": "int64", "id": 7},
                                                "cid": {"type": "int64", "id": 8},
                                                "mediaType": {"type": "MediaType", "id": 9},
                                                "dimension": {"type": "Dimension", "id": 10},
                                                "badge": {"rule": "repeated", "type": "VideoBadge", "id": 11},
                                                "canPlay": {"type": "bool", "id": 12},
                                                "stype": {"type": "VideoType", "id": 13},
                                                "isPGC": {"type": "bool", "id": 14},
                                                "inlineURL": {"type": "string", "id": 15},
                                                "episodeId": {"type": "int64", "id": 16},
                                                "subType": {"type": "int32", "id": 17},
                                                "pgcSeasonId": {"type": "int64", "id": 18},
                                                "playIcon": {"type": "string", "id": 19},
                                                "duration": {"type": "int64", "id": 20},
                                                "jumpUrl": {"type": "string", "id": 21},
                                                "isPreview": {"type": "bool", "id": 22},
                                                "badgeCategory": {"rule": "repeated", "type": "VideoBadge", "id": 23},
                                                "isFeature": {"type": "bool", "id": 24},
                                                "reserveType": {"type": "ReserveType", "id": 25},
                                                "bvid": {"type": "string", "id": 26},
                                                "view": {"type": "int32", "id": 27},
                                                "showPremiereBadge": {"type": "bool", "id": 28},
                                                "premiereCard": {"type": "bool", "id": 29},
                                                "showProgress": {"type": "bool", "id": 30},
                                                "partDuration": {"type": "int64", "id": 31},
                                                "partProgress": {"type": "int64", "id": 32}
                                            }
                                        },
                                        "MediaType": {
                                            "values": {
                                                "MediaTypeNone": 0,
                                                "MediaTypeUGC": 1,
                                                "MediaTypePGC": 2,
                                                "MediaTypeLive": 3,
                                                "MediaTypeVCS": 4
                                            }
                                        },
                                        "VideoType": {
                                            "values": {
                                                "video_type_general": 0,
                                                "video_type_dynamic": 1,
                                                "video_type_playback": 2,
                                                "video_type_story": 3
                                            }
                                        },
                                        "ReserveType": {"values": {"reserve_none": 0, "reserve_recall": 1}},
                                        "MdlDynArticle": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "desc": {"type": "string", "id": 4},
                                                "covers": {"rule": "repeated", "type": "string", "id": 5},
                                                "label": {"type": "string", "id": 6},
                                                "templateID": {"type": "int32", "id": 7}
                                            }
                                        },
                                        "MdlDynCommon": {
                                            "fields": {
                                                "oid": {"type": "int64", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "desc": {"type": "string", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "label": {"type": "string", "id": 6},
                                                "bizType": {"type": "int32", "id": 7},
                                                "sketchID": {"type": "int64", "id": 8},
                                                "style": {"type": "MdlDynCommonType", "id": 9},
                                                "badge": {"rule": "repeated", "type": "VideoBadge", "id": 10},
                                                "button": {"type": "AdditionalButton", "id": 11}
                                            }
                                        },
                                        "MdlDynCommonType": {
                                            "values": {
                                                "mdl_dyn_common_none": 0,
                                                "mdl_dyn_common_square": 1,
                                                "mdl_dyn_common_vertica": 2
                                            }
                                        },
                                        "MdlDynCourBatch": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "text1": {"type": "string", "id": 4},
                                                "text2": {"type": "string", "id": 5},
                                                "badge": {"type": "VideoBadge", "id": 6},
                                                "playIcon": {"type": "string", "id": 7},
                                                "canPlay": {"type": "bool", "id": 8},
                                                "isPreview": {"type": "bool", "id": 9},
                                                "coverLeftText1": {"type": "string", "id": 10},
                                                "coverLeftText2": {"type": "string", "id": 11},
                                                "coverLeftText3": {"type": "string", "id": 12},
                                                "avid": {"type": "int64", "id": 13},
                                                "cid": {"type": "int64", "id": 14},
                                                "epid": {"type": "int64", "id": 15},
                                                "duration": {"type": "int64", "id": 16},
                                                "seasonId": {"type": "int64", "id": 17}
                                            }
                                        },
                                        "MdlDynCourSeason": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "text1": {"type": "string", "id": 4},
                                                "desc": {"type": "string", "id": 5},
                                                "badge": {"type": "VideoBadge", "id": 6},
                                                "playIcon": {"type": "string", "id": 7},
                                                "canPlay": {"type": "bool", "id": 8},
                                                "isPreview": {"type": "bool", "id": 9},
                                                "avid": {"type": "int64", "id": 10},
                                                "cid": {"type": "int64", "id": 11},
                                                "epid": {"type": "int64", "id": 12},
                                                "duration": {"type": "int64", "id": 13},
                                                "seasonId": {"type": "int64", "id": 14}
                                            }
                                        },
                                        "MdlDynDraw": {
                                            "fields": {
                                                "items": {
                                                    "rule": "repeated",
                                                    "type": "MdlDynDrawItem",
                                                    "id": 1
                                                },
                                                "uri": {"type": "string", "id": 2},
                                                "id": {"type": "int64", "id": 3},
                                                "isDrawFirst": {"type": "bool", "id": 4},
                                                "isBigCover": {"type": "bool", "id": 5},
                                                "isArticleCover": {"type": "bool", "id": 6}
                                            }
                                        },
                                        "MdlDynDrawItem": {
                                            "fields": {
                                                "src": {"type": "string", "id": 1},
                                                "width": {"type": "int64", "id": 2},
                                                "height": {"type": "int64", "id": 3},
                                                "size": {"type": "float", "id": 4},
                                                "tags": {"rule": "repeated", "type": "MdlDynDrawTag", "id": 5}
                                            }
                                        },
                                        "MdlDynDrawTag": {
                                            "fields": {
                                                "type": {"type": "MdlDynDrawTagType", "id": 1},
                                                "item": {"type": "MdlDynDrawTagItem", "id": 2}
                                            }
                                        },
                                        "MdlDynDrawTagType": {
                                            "values": {
                                                "mdl_draw_tag_none": 0,
                                                "mdl_draw_tag_common": 1,
                                                "mdl_draw_tag_goods": 2,
                                                "mdl_draw_tag_user": 3,
                                                "mdl_draw_tag_topic": 4,
                                                "mdl_draw_tag_lbs": 5
                                            }
                                        },
                                        "MdlDynDrawTagItem": {
                                            "fields": {
                                                "url": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "x": {"type": "int64", "id": 3},
                                                "y": {"type": "int64", "id": 4},
                                                "orientation": {"type": "int32", "id": 5},
                                                "source": {"type": "int32", "id": 6},
                                                "itemId": {"type": "int64", "id": 7},
                                                "mid": {"type": "int64", "id": 8},
                                                "tid": {"type": "int64", "id": 9},
                                                "poi": {"type": "string", "id": 10},
                                                "schemaUrl": {"type": "string", "id": 11}
                                            }
                                        },
                                        "MdlDynForward": {
                                            "fields": {
                                                "item": {"type": "DynamicItem", "id": 1},
                                                "rtype": {"type": "int32", "id": 2}
                                            }
                                        },
                                        "MdlDynLive": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "cover": {"type": "string", "id": 4},
                                                "coverLabel": {"type": "string", "id": 5},
                                                "coverLabel2": {"type": "string", "id": 6},
                                                "liveState": {"type": "LiveState", "id": 7},
                                                "badge": {"type": "VideoBadge", "id": 8},
                                                "reserveType": {"type": "ReserveType", "id": 9}
                                            }
                                        },
                                        "MdlDynLiveRcmd": {
                                            "fields": {
                                                "content": {"type": "string", "id": 1},
                                                "reserveType": {"type": "ReserveType", "id": 2},
                                                "pendant": {"type": "LivePendant", "id": 3}
                                            }
                                        },
                                        "LivePendant": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "icon": {"type": "string", "id": 2},
                                                "pendantId": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "MdlDynMedialist": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "subTitle": {"type": "string", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "coverType": {"type": "int32", "id": 6},
                                                "badge": {"type": "VideoBadge", "id": 7},
                                                "coverBottomRightIcon": {"type": "string", "id": 8}
                                            }
                                        },
                                        "MdlDynMusic": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "upId": {"type": "int64", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "label1": {"type": "string", "id": 6},
                                                "upper": {"type": "string", "id": 7}
                                            }
                                        },
                                        "MdlDynPGC": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "coverLeftText1": {"type": "string", "id": 4},
                                                "coverLeftText2": {"type": "string", "id": 5},
                                                "coverLeftText3": {"type": "string", "id": 6},
                                                "cid": {"type": "int64", "id": 7},
                                                "seasonId": {"type": "int64", "id": 8},
                                                "epid": {"type": "int64", "id": 9},
                                                "aid": {"type": "int64", "id": 10},
                                                "mediaType": {"type": "MediaType", "id": 11},
                                                "subType": {"type": "VideoSubType", "id": 12},
                                                "isPreview": {"type": "bool", "id": 13},
                                                "dimension": {"type": "Dimension", "id": 14},
                                                "badge": {"rule": "repeated", "type": "VideoBadge", "id": 15},
                                                "canPlay": {"type": "bool", "id": 16},
                                                "season": {"type": "PGCSeason", "id": 17},
                                                "playIcon": {"type": "string", "id": 18},
                                                "duration": {"type": "int64", "id": 19},
                                                "jumpUrl": {"type": "string", "id": 20},
                                                "badgeCategory": {"rule": "repeated", "type": "VideoBadge", "id": 21},
                                                "isFeature": {"type": "bool", "id": 22}
                                            }
                                        },
                                        "VideoSubType": {
                                            "values": {
                                                "VideoSubTypeNone": 0,
                                                "VideoSubTypeBangumi": 1,
                                                "VideoSubTypeMovie": 2,
                                                "VideoSubTypeDocumentary": 3,
                                                "VideoSubTypeDomestic": 4,
                                                "VideoSubTypeTeleplay": 5
                                            }
                                        },
                                        "MdlDynSubscription": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "adId": {"type": "int64", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "adTitle": {"type": "string", "id": 6},
                                                "badge": {"type": "VideoBadge", "id": 7},
                                                "tips": {"type": "string", "id": 8}
                                            }
                                        },
                                        "MdlDynSubscriptionNew": {
                                            "oneofs": {"item": {"oneof": ["dynSubscription", "dynLiveRcmd"]}},
                                            "fields": {
                                                "style": {"type": "MdlDynSubscriptionNewStyle", "id": 1},
                                                "dynSubscription": {"type": "MdlDynSubscription", "id": 2},
                                                "dynLiveRcmd": {"type": "MdlDynLiveRcmd", "id": 3}
                                            }
                                        },
                                        "MdlDynSubscriptionNewStyle": {
                                            "values": {
                                                "mdl_dyn_subscription_new_style_nont": 0,
                                                "mdl_dyn_subscription_new_style_live": 1,
                                                "mdl_dyn_subscription_new_style_draw": 2
                                            }
                                        },
                                        "MdlDynUGCSeason": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "coverLeftText1": {"type": "string", "id": 4},
                                                "coverLeftText2": {"type": "string", "id": 5},
                                                "coverLeftText3": {"type": "string", "id": 6},
                                                "id": {"type": "int64", "id": 7},
                                                "inlineURL": {"type": "string", "id": 8},
                                                "canPlay": {"type": "bool", "id": 9},
                                                "playIcon": {"type": "string", "id": 10},
                                                "avid": {"type": "int64", "id": 11},
                                                "cid": {"type": "int64", "id": 12},
                                                "dimension": {"type": "Dimension", "id": 13},
                                                "duration": {"type": "int64", "id": 14},
                                                "jumpUrl": {"type": "string", "id": 15},
                                                "badge": {"rule": "repeated", "type": "VideoBadge", "id": 16}
                                            }
                                        },
                                        "Module": {
                                            "oneofs": {"moduleItem": {"oneof": ["moduleAuthor", "moduleDispute", "moduleDesc", "moduleDynamic", "moduleLikeUser", "moduleExtend", "moduleAdditional", "moduleStat", "moduleFold", "moduleComment", "moduleInteraction", "moduleAuthorForward", "moduleAd", "moduleBanner", "moduleItemNull", "moduleShareInfo", "moduleRecommend", "moduleTop", "moduleButtom", "moduleStat1", "moduleStory", "moduleTopic", "moduleTopicDetailsExt", "moduleTopTag", "moduleTopicBrief", "moduleTitle", "moduleButton", "moduleNotice", "moduleOpusSummary", "moduleCopyright", "moduleParagraph", "moduleBlocked"]}},
                                            "fields": {
                                                "moduleType": {"type": "DynModuleType", "id": 1},
                                                "moduleAuthor": {"type": "ModuleAuthor", "id": 2},
                                                "moduleDispute": {"type": "ModuleDispute", "id": 3},
                                                "moduleDesc": {"type": "ModuleDesc", "id": 4},
                                                "moduleDynamic": {"type": "ModuleDynamic", "id": 5},
                                                "moduleLikeUser": {"type": "ModuleLikeUser", "id": 6},
                                                "moduleExtend": {"type": "ModuleExtend", "id": 7},
                                                "moduleAdditional": {"type": "ModuleAdditional", "id": 8},
                                                "moduleStat": {"type": "ModuleStat", "id": 9},
                                                "moduleFold": {"type": "ModuleFold", "id": 10},
                                                "moduleComment": {"type": "ModuleComment", "id": 11},
                                                "moduleInteraction": {"type": "ModuleInteraction", "id": 12},
                                                "moduleAuthorForward": {"type": "ModuleAuthorForward", "id": 13},
                                                "moduleAd": {"type": "ModuleAd", "id": 14},
                                                "moduleBanner": {"type": "ModuleBanner", "id": 15},
                                                "moduleItemNull": {"type": "ModuleItemNull", "id": 16},
                                                "moduleShareInfo": {"type": "ModuleShareInfo", "id": 17},
                                                "moduleRecommend": {"type": "ModuleRecommend", "id": 18},
                                                "moduleTop": {"type": "ModuleTop", "id": 19},
                                                "moduleButtom": {"type": "ModuleButtom", "id": 20},
                                                "moduleStat1": {"type": "ModuleStat", "id": 21},
                                                "moduleStory": {"type": "ModuleStory", "id": 22},
                                                "moduleTopic": {"type": "ModuleTopic", "id": 23},
                                                "moduleTopicDetailsExt": {"type": "ModuleTopicDetailsExt", "id": 24},
                                                "moduleTopTag": {"type": "ModuleTopTag", "id": 25},
                                                "moduleTopicBrief": {"type": "ModuleTopicBrief", "id": 26},
                                                "moduleTitle": {"type": "ModuleTitle", "id": 27},
                                                "moduleButton": {"type": "ModuleButton", "id": 28},
                                                "moduleNotice": {"type": "ModuleNotice", "id": 29},
                                                "moduleOpusSummary": {"type": "ModuleOpusSummary", "id": 30},
                                                "moduleCopyright": {"type": "ModuleCopyright", "id": 31},
                                                "moduleParagraph": {"type": "ModuleParagraph", "id": 32},
                                                "moduleBlocked": {"type": "ModuleBlocked", "id": 33}
                                            }
                                        },
                                        "ModuleButton": {"fields": {"btn": {"type": "IconButton", "id": 1}}},
                                        "ModuleTitle": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "rightBtn": {"type": "IconButton", "id": 2},
                                                "titleStyle": {"type": "int32", "id": 3}
                                            }
                                        },
                                        "IconButton": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "iconHead": {"type": "string", "id": 2},
                                                "iconTail": {"type": "string", "id": 3},
                                                "jumpUri": {"type": "string", "id": 4},
                                                "routerAction": {"type": "RouterAction", "id": 5}
                                            }
                                        },
                                        "RouterAction": {"values": {"OPEN": 0, "EMBED": 1}},
                                        "ModuleTopicBrief": {"fields": {"topic": {"type": "TopicItem", "id": 1}}},
                                        "TopicItem": {
                                            "fields": {
                                                "topicId": {"type": "int64", "id": 1},
                                                "topicName": {"type": "string", "id": 2},
                                                "url": {"type": "string", "id": 3},
                                                "desc": {"type": "string", "id": 4},
                                                "desc2": {"type": "string", "id": 5},
                                                "rcmdDesc": {"type": "string", "id": 6},
                                                "button": {"type": "IconButton", "id": 7}
                                            }
                                        },
                                        "ModuleTopicDetailsExt": {
                                            "fields": {
                                                "commentGuide": {
                                                    "type": "string",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ModuleTopTag": {"fields": {"tagName": {"type": "string", "id": 1}}},
                                        "ModuleTopic": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "url": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ModuleTop": {
                                            "fields": {
                                                "tpList": {
                                                    "rule": "repeated",
                                                    "type": "ThreePointItem",
                                                    "id": 1
                                                },
                                                "archive": {"type": "MdlDynArchive", "id": 2},
                                                "author": {"type": "ModuleAuthor", "id": 3},
                                                "hiddenNavBar": {"type": "bool", "id": 4}
                                            }
                                        },
                                        "ModuleButtom": {
                                            "fields": {
                                                "moduleStat": {"type": "ModuleStat", "id": 1},
                                                "commentBox": {"type": "bool", "id": 2},
                                                "commentBoxMsg": {"type": "string", "id": 3},
                                                "interactionIcons": {"rule": "repeated", "type": "int32", "id": 4},
                                                "faces": {"rule": "repeated", "type": "InteractionFace", "id": 5}
                                            }
                                        },
                                        "ModuleStory": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "items": {"rule": "repeated", "type": "StoryItem", "id": 2},
                                                "showPublishEntrance": {"type": "bool", "id": 3},
                                                "foldState": {"type": "int64", "id": 4},
                                                "uri": {"type": "string", "id": 5},
                                                "cover": {"type": "string", "id": 6},
                                                "publishText": {"type": "string", "id": 7}
                                            }
                                        },
                                        "StoryItem": {
                                            "oneofs": {"item": {"oneof": ["storyArchive"]}},
                                            "fields": {
                                                "author": {"type": "UserInfo", "id": 1},
                                                "desc": {"type": "string", "id": 2},
                                                "status": {"type": "int64", "id": 3},
                                                "type": {"type": "RcmdType", "id": 4},
                                                "storyArchive": {"type": "StoryArchive", "id": 5}
                                            }
                                        },
                                        "StoryArchive": {
                                            "fields": {
                                                "cover": {"type": "string", "id": 1},
                                                "aid": {"type": "int64", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "dimension": {"type": "Dimension", "id": 4}
                                            }
                                        },
                                        "ModuleAd": {
                                            "fields": {
                                                "sourceContent": {
                                                    "type": "google.protobuf.Any",
                                                    "id": 1
                                                },
                                                "moduleAuthor": {"type": "ModuleAuthor", "id": 2},
                                                "adContentType": {"type": "int32", "id": 3},
                                                "coverLeftText1": {"type": "string", "id": 4},
                                                "coverLeftText2": {"type": "string", "id": 5},
                                                "coverLeftText3": {"type": "string", "id": 6}
                                            }
                                        },
                                        "ModuleAdditional": {
                                            "oneofs": {"item": {"oneof": ["pgc", "goods", "vote", "common", "esport", "vote2", "ugc", "up"]}},
                                            "fields": {
                                                "type": {"type": "AdditionalType", "id": 1},
                                                "pgc": {"type": "AdditionalPGC", "id": 2},
                                                "goods": {"type": "AdditionGoods", "id": 3},
                                                "vote": {"type": "AdditionVote", "id": 4},
                                                "common": {"type": "AdditionCommon", "id": 5},
                                                "esport": {"type": "AdditionEsport", "id": 6},
                                                "vote2": {"type": "AdditionVote2", "id": 8},
                                                "ugc": {"type": "AdditionUgc", "id": 9},
                                                "up": {"type": "AdditionUP", "id": 10},
                                                "rid": {"type": "int64", "id": 7},
                                                "needWriteCalender": {"type": "bool", "id": 11}
                                            }
                                        },
                                        "ModuleAuthor": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "ptimeLabelText": {"type": "string", "id": 2},
                                                "author": {"type": "UserInfo", "id": 3},
                                                "decorateCard": {"type": "DecorateCard", "id": 4},
                                                "uri": {"type": "string", "id": 5},
                                                "tpList": {"rule": "repeated", "type": "ThreePointItem", "id": 6},
                                                "badgeType": {"type": "ModuleAuthorBadgeType", "id": 7},
                                                "badgeButton": {"type": "ModuleAuthorBadgeButton", "id": 8},
                                                "attend": {"type": "int32", "id": 9},
                                                "relation": {"type": "Relation", "id": 10},
                                                "weight": {"type": "Weight", "id": 11},
                                                "showFollow": {"type": "bool", "id": 12},
                                                "isTop": {"type": "bool", "id": 13},
                                                "ptimeLocationText": {"type": "string", "id": 14},
                                                "showLevel": {"type": "bool", "id": 15},
                                                "onlyFans": {"type": "OnlyFans", "id": 16}
                                            }
                                        },
                                        "ModuleAuthorBadgeType": {
                                            "values": {
                                                "module_author_badge_type_none": 0,
                                                "module_author_badge_type_threePoint": 1,
                                                "module_author_badge_type_button": 2,
                                                "module_author_badge_type_weight": 3
                                            }
                                        },
                                        "Weight": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "items": {"rule": "repeated", "type": "WeightItem", "id": 2},
                                                "icon": {"type": "string", "id": 3}
                                            }
                                        },
                                        "WeightItem": {
                                            "oneofs": {"item": {"oneof": ["weightButton", "weightDislike"]}},
                                            "fields": {
                                                "type": {"type": "WeightType", "id": 1},
                                                "weightButton": {"type": "WeightButton", "id": 2},
                                                "weightDislike": {"type": "WeightDislike", "id": 3}
                                            }
                                        },
                                        "WeightDislike": {
                                            "fields": {
                                                "feedBackType": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "WeightButton": {
                                            "fields": {
                                                "jumpUrl": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "WeightType": {
                                            "values": {
                                                "weight_none": 0,
                                                "weight_dislike": 1,
                                                "weight_jump": 2
                                            }
                                        },
                                        "ModuleAuthorBadgeButton": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "state": {"type": "int32", "id": 3},
                                                "id": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "ModuleAuthorForward": {
                                            "fields": {
                                                "title": {
                                                    "rule": "repeated",
                                                    "type": "ModuleAuthorForwardTitle",
                                                    "id": 1
                                                },
                                                "url": {"type": "string", "id": 2},
                                                "uid": {"type": "int64", "id": 3},
                                                "ptimeLabelText": {"type": "string", "id": 4},
                                                "showFollow": {"type": "bool", "id": 5},
                                                "faceUrl": {"type": "string", "id": 6},
                                                "relation": {"type": "Relation", "id": 7},
                                                "tpList": {"rule": "repeated", "type": "ThreePointItem", "id": 8}
                                            }
                                        },
                                        "ModuleAuthorForwardTitle": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "url": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ModuleBanner": {
                                            "oneofs": {"item": {"oneof": ["user"]}},
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "type": {"type": "ModuleBannerType", "id": 2},
                                                "user": {"type": "ModuleBannerUser", "id": 3},
                                                "dislikeText": {"type": "string", "id": 4},
                                                "dislikeIcon": {"type": "string", "id": 5}
                                            }
                                        },
                                        "ModuleBannerType": {
                                            "values": {
                                                "module_banner_type_none": 0,
                                                "module_banner_type_user": 1
                                            }
                                        },
                                        "ModuleBannerUser": {
                                            "fields": {
                                                "list": {
                                                    "rule": "repeated",
                                                    "type": "ModuleBannerUserItem",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ModuleBannerUserItem": {
                                            "fields": {
                                                "face": {"type": "string", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "uid": {"type": "int64", "id": 3},
                                                "liveState": {"type": "LiveState", "id": 4},
                                                "official": {"type": "OfficialVerify", "id": 5},
                                                "vip": {"type": "VipInfo", "id": 6},
                                                "label": {"type": "string", "id": 7},
                                                "button": {"type": "AdditionalButton", "id": 8},
                                                "uri": {"type": "string", "id": 9},
                                                "relation": {"type": "Relation", "id": 10}
                                            }
                                        },
                                        "ModuleComment": {
                                            "fields": {
                                                "cmtShowItem": {
                                                    "rule": "repeated",
                                                    "type": "CmtShowItem",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ModuleDesc": {
                                            "fields": {
                                                "desc": {
                                                    "rule": "repeated",
                                                    "type": "Description",
                                                    "id": 1
                                                },
                                                "jumpUri": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ModuleDescGoods": {
                                            "fields": {
                                                "sourceType": {"type": "int32", "id": 1},
                                                "jumpUrl": {"type": "string", "id": 2},
                                                "schemaUrl": {"type": "string", "id": 3},
                                                "itemId": {"type": "int64", "id": 4},
                                                "openWhiteList": {"rule": "repeated", "type": "string", "id": 5},
                                                "userWebV2": {"type": "bool", "id": 6},
                                                "adMark": {"type": "string", "id": 7},
                                                "schemaPackageName": {"type": "string", "id": 8},
                                                "goodsJumpType": {"type": "GoodsJumpType", "id": 9},
                                                "appName": {"type": "string", "id": 10}
                                            }
                                        },
                                        "ModuleDispute": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "desc": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ModuleDynamic": {
                                            "oneofs": {"moduleItem": {"oneof": ["dynArchive", "dynPgc", "dynCourSeason", "dynCourBatch", "dynForward", "dynDraw", "dynArticle", "dynMusic", "dynCommon", "dynCommonLive", "dynMedialist", "dynApplet", "dynSubscription", "dynLiveRcmd", "dynUgcSeason", "dynSubscriptionNew", "mdlDynCourUp", "mdlDynTopicSet"]}},
                                            "fields": {
                                                "type": {"type": "ModuleDynamicType", "id": 1},
                                                "dynArchive": {"type": "MdlDynArchive", "id": 2},
                                                "dynPgc": {"type": "MdlDynPGC", "id": 3},
                                                "dynCourSeason": {"type": "MdlDynCourSeason", "id": 4},
                                                "dynCourBatch": {"type": "MdlDynCourBatch", "id": 5},
                                                "dynForward": {"type": "MdlDynForward", "id": 6},
                                                "dynDraw": {"type": "MdlDynDraw", "id": 7},
                                                "dynArticle": {"type": "MdlDynArticle", "id": 8},
                                                "dynMusic": {"type": "MdlDynMusic", "id": 9},
                                                "dynCommon": {"type": "MdlDynCommon", "id": 10},
                                                "dynCommonLive": {"type": "MdlDynLive", "id": 11},
                                                "dynMedialist": {"type": "MdlDynMedialist", "id": 12},
                                                "dynApplet": {"type": "MdlDynApplet", "id": 13},
                                                "dynSubscription": {"type": "MdlDynSubscription", "id": 14},
                                                "dynLiveRcmd": {"type": "MdlDynLiveRcmd", "id": 15},
                                                "dynUgcSeason": {"type": "MdlDynUGCSeason", "id": 16},
                                                "dynSubscriptionNew": {"type": "MdlDynSubscriptionNew", "id": 17},
                                                "mdlDynCourUp": {"type": "MdlDynCourUp", "id": 18},
                                                "mdlDynTopicSet": {"type": "MdlDynTopicSet", "id": 19}
                                            }
                                        },
                                        "MdlDynTopicSet": {
                                            "fields": {
                                                "topics": {
                                                    "rule": "repeated",
                                                    "type": "TopicItem",
                                                    "id": 1
                                                },
                                                "moreBtn": {"type": "IconButton", "id": 2},
                                                "topicSetId": {"type": "int64", "id": 3},
                                                "pushId": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "MdlDynCourUp": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "desc": {"type": "string", "id": 2},
                                                "cover": {"type": "string", "id": 3},
                                                "uri": {"type": "string", "id": 4},
                                                "text1": {"type": "string", "id": 5},
                                                "badge": {"type": "VideoBadge", "id": 6},
                                                "playIcon": {"type": "string", "id": 7},
                                                "canPlay": {"type": "bool", "id": 8},
                                                "isPreview": {"type": "bool", "id": 9},
                                                "avid": {"type": "int64", "id": 10},
                                                "cid": {"type": "int64", "id": 11},
                                                "epid": {"type": "int64", "id": 12},
                                                "duration": {"type": "int64", "id": 13},
                                                "seasonId": {"type": "int64", "id": 14}
                                            }
                                        },
                                        "ModuleDynamicType": {
                                            "values": {
                                                "mdl_dyn_archive": 0,
                                                "mdl_dyn_pgc": 1,
                                                "mdl_dyn_cour_season": 2,
                                                "mdl_dyn_cour_batch": 3,
                                                "mdl_dyn_forward": 4,
                                                "mdl_dyn_draw": 5,
                                                "mdl_dyn_article": 6,
                                                "mdl_dyn_music": 7,
                                                "mdl_dyn_common": 8,
                                                "mdl_dyn_live": 9,
                                                "mdl_dyn_medialist": 10,
                                                "mdl_dyn_applet": 11,
                                                "mdl_dyn_subscription": 12,
                                                "mdl_dyn_live_rcmd": 13,
                                                "mdl_dyn_ugc_season": 14,
                                                "mdl_dyn_subscription_new": 15,
                                                "mdl_dyn_cour_up": 16,
                                                "mdl_dyn_topic_set": 17
                                            }
                                        },
                                        "ModuleExtend": {
                                            "fields": {
                                                "extend": {
                                                    "rule": "repeated",
                                                    "type": "ModuleExtendItem",
                                                    "id": 1
                                                }, "uri": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ModuleExtendItem": {
                                            "oneofs": {"extend": {"oneof": ["extInfoTopic", "extInfoLbs", "extInfoHot", "extInfoGame", "extInfoCommon", "extInfoOgv"]}},
                                            "fields": {
                                                "type": {"type": "DynExtendType", "id": 1},
                                                "extInfoTopic": {"type": "ExtInfoTopic", "id": 2},
                                                "extInfoLbs": {"type": "ExtInfoLBS", "id": 3},
                                                "extInfoHot": {"type": "ExtInfoHot", "id": 4},
                                                "extInfoGame": {"type": "ExtInfoGame", "id": 5},
                                                "extInfoCommon": {"type": "ExtInfoCommon", "id": 6},
                                                "extInfoOgv": {"type": "ExtInfoOGV", "id": 7}
                                            }
                                        },
                                        "ModuleFold": {
                                            "fields": {
                                                "foldType": {"type": "FoldType", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "foldIds": {"type": "string", "id": 3},
                                                "foldUsers": {"rule": "repeated", "type": "UserInfo", "id": 4},
                                                "topicMergedResource": {"type": "TopicMergedResource", "id": 5}
                                            }
                                        },
                                        "FoldType": {
                                            "values": {
                                                "FoldTypeZore": 0,
                                                "FoldTypePublish": 1,
                                                "FoldTypeFrequent": 2,
                                                "FoldTypeUnite": 3,
                                                "FoldTypeLimit": 4,
                                                "FoldTypeTopicMerged": 5
                                            }
                                        },
                                        "ModuleInteraction": {
                                            "fields": {
                                                "interactionItem": {
                                                    "rule": "repeated",
                                                    "type": "InteractionItem",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ModuleItemNull": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ModuleLikeUser": {
                                            "fields": {
                                                "likeUsers": {
                                                    "rule": "repeated",
                                                    "type": "LikeUser",
                                                    "id": 1
                                                }, "displayText": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ModuleRecommend": {
                                            "fields": {
                                                "moduleTitle": {"type": "string", "id": 1},
                                                "image": {"type": "string", "id": 2},
                                                "tag": {"type": "string", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "jumpUrl": {"type": "string", "id": 5},
                                                "ad": {"type": "string", "id": 6}
                                            }
                                        },
                                        "ModuleShareInfo": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "shareChannels": {"rule": "repeated", "type": "ShareChannel", "id": 2},
                                                "shareOrigin": {"type": "string", "id": 3},
                                                "oid": {"type": "string", "id": 4},
                                                "sid": {"type": "string", "id": 5}
                                            }
                                        },
                                        "ModuleStat": {
                                            "fields": {
                                                "repost": {"type": "int64", "id": 1},
                                                "like": {"type": "int64", "id": 2},
                                                "reply": {"type": "int64", "id": 3},
                                                "likeInfo": {"type": "LikeInfo", "id": 4},
                                                "noComment": {"type": "bool", "id": 5},
                                                "noForward": {"type": "bool", "id": 6},
                                                "replyUrl": {"type": "string", "id": 7},
                                                "noCommentText": {"type": "string", "id": 8},
                                                "noForwardText": {"type": "string", "id": 9},
                                                "favorite": {"type": "int64", "id": 10},
                                                "isFavorite": {"type": "bool", "id": 11}
                                            }
                                        },
                                        "Nameplate": {
                                            "fields": {
                                                "nid": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "image": {"type": "string", "id": 3},
                                                "imageSmall": {"type": "string", "id": 4},
                                                "level": {"type": "string", "id": 5},
                                                "condition": {"type": "string", "id": 6}
                                            }
                                        },
                                        "OfficialVerify": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "desc": {"type": "string", "id": 2},
                                                "isAtten": {"type": "int32", "id": 3}
                                            }
                                        },
                                        "PGCSeason": {
                                            "fields": {
                                                "isFinish": {"type": "int32", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "type": {"type": "int32", "id": 3}
                                            }
                                        },
                                        "Relation": {
                                            "fields": {
                                                "status": {"type": "RelationStatus", "id": 1},
                                                "isFollow": {"type": "int32", "id": 2},
                                                "isFollowed": {"type": "int32", "id": 3},
                                                "title": {"type": "string", "id": 4}
                                            }
                                        },
                                        "RelationStatus": {
                                            "values": {
                                                "relation_status_none": 0,
                                                "relation_status_nofollow": 1,
                                                "relation_status_follow": 2,
                                                "relation_status_followed": 3,
                                                "relation_status_mutual_concern": 4,
                                                "relation_status_special": 5
                                            }
                                        },
                                        "ShareChannel": {
                                            "fields": {
                                                "name": {"type": "string", "id": 1},
                                                "image": {"type": "string", "id": 2},
                                                "channel": {"type": "string", "id": 3},
                                                "reserve": {"type": "ShareReserve", "id": 4}
                                            }
                                        },
                                        "ShareReserve": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "desc": {"type": "string", "id": 2},
                                                "qrCodeIcon": {"type": "string", "id": 3},
                                                "qrCodeText": {"type": "string", "id": 4},
                                                "qrCodeUrl": {"type": "string", "id": 5},
                                                "userInfo": {"type": "AdditionUserInfo", "id": 6}
                                            }
                                        },
                                        "ThreePointAttention": {
                                            "fields": {
                                                "attentionIcon": {"type": "string", "id": 1},
                                                "attentionText": {"type": "string", "id": 2},
                                                "notAttentionIcon": {"type": "string", "id": 3},
                                                "notAttentionText": {"type": "string", "id": 4},
                                                "status": {"type": "ThreePointAttentionStatus", "id": 5}
                                            }
                                        },
                                        "ThreePointAttentionStatus": {
                                            "values": {
                                                "tp_not_attention": 0,
                                                "tp_attention": 1
                                            }
                                        },
                                        "ThreePointAutoPlay": {
                                            "fields": {
                                                "openIcon": {"type": "string", "id": 1},
                                                "openText": {"type": "string", "id": 2},
                                                "closeIcon": {"type": "string", "id": 3},
                                                "closeText": {"type": "string", "id": 4},
                                                "openTextV2": {"type": "string", "id": 5},
                                                "closeTextV2": {"type": "string", "id": 6},
                                                "onlyIcon": {"type": "string", "id": 7},
                                                "onlyText": {"type": "string", "id": 8},
                                                "openIconV2": {"type": "string", "id": 9},
                                                "closeIconV2": {"type": "string", "id": 10}
                                            }
                                        },
                                        "ThreePointDefault": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "id": {"type": "string", "id": 4},
                                                "toast": {"type": "ThreePointDefaultToast", "id": 5}
                                            }
                                        },
                                        "ThreePointDefaultToast": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "desc": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ThreePointDislike": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ThreePointFavorite": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "id": {"type": "int64", "id": 3},
                                                "isFavourite": {"type": "bool", "id": 4},
                                                "cancelIcon": {"type": "string", "id": 5},
                                                "cancelTitle": {"type": "string", "id": 6}
                                            }
                                        },
                                        "ThreePointItem": {
                                            "oneofs": {"item": {"oneof": ["default", "autoPlayer", "share", "attention", "wait", "dislike", "favorite", "threePointTop", "threePointComment", "threePointHide", "threePointTopicIrrelevant", "threePointDynEdit", "threePointDynCoin"]}},
                                            "fields": {
                                                "type": {"type": "ThreePointType", "id": 1},
                                                "default": {"type": "ThreePointDefault", "id": 2},
                                                "autoPlayer": {"type": "ThreePointAutoPlay", "id": 3},
                                                "share": {"type": "ThreePointShare", "id": 4},
                                                "attention": {"type": "ThreePointAttention", "id": 5},
                                                "wait": {"type": "ThreePointWait", "id": 6},
                                                "dislike": {"type": "ThreePointDislike", "id": 7},
                                                "favorite": {"type": "ThreePointFavorite", "id": 8},
                                                "threePointTop": {"type": "ThreePointTop", "id": 9},
                                                "threePointComment": {"type": "ThreePointComment", "id": 10},
                                                "threePointHide": {"type": "ThreePointHide", "id": 11},
                                                "threePointTopicIrrelevant": {
                                                    "type": "ThreePointTopicIrrelevant",
                                                    "id": 12
                                                },
                                                "threePointDynEdit": {"type": "ThreePointDynEdit", "id": 13},
                                                "threePointDynCoin": {"type": "ThreePointDynCoin", "id": 14}
                                            }
                                        },
                                        "ThreePointTopicIrrelevant": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "toast": {"type": "string", "id": 3},
                                                "topicId": {"type": "int64", "id": 4},
                                                "resId": {"type": "int64", "id": 5},
                                                "resType": {"type": "int64", "id": 6},
                                                "reason": {"type": "string", "id": 7}
                                            }
                                        },
                                        "ThreePointHide": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "interactive": {"type": "ThreePointHideInteractive", "id": 3},
                                                "blookFid": {"type": "int64", "id": 4},
                                                "blookType": {"type": "string", "id": 5}
                                            }
                                        },
                                        "ThreePointHideInteractive": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "confirm": {"type": "string", "id": 2},
                                                "cancel": {"type": "string", "id": 3},
                                                "toast": {"type": "string", "id": 4}
                                            }
                                        },
                                        "ThreePointComment": {
                                            "fields": {
                                                "upSelection": {
                                                    "type": "CommentDetail",
                                                    "id": 1
                                                },
                                                "upClose": {"type": "CommentDetail", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "title": {"type": "string", "id": 4}
                                            }
                                        },
                                        "CommentDetail": {
                                            "fields": {
                                                "canModify": {"type": "bool", "id": 1},
                                                "status": {"type": "int64", "id": 2}
                                            }
                                        },
                                        "ThreePointTop": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "type": {"type": "TopType", "id": 3}
                                            }
                                        },
                                        "TopType": {"values": {"top_none": 0, "top_cancel": 1}},
                                        "ThreePointShare": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "channel": {
                                                    "rule": "repeated",
                                                    "type": "ThreePointShareChannel",
                                                    "id": 3
                                                },
                                                "channelName": {"type": "string", "id": 4},
                                                "reserve": {"type": "ShareReserve", "id": 5}
                                            }
                                        },
                                        "ThreePointShareChannel": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ThreePointType": {
                                            "values": {
                                                "tp_none": 0,
                                                "background": 1,
                                                "auto_play": 2,
                                                "share": 3,
                                                "wait": 4,
                                                "attention": 5,
                                                "report": 6,
                                                "delete": 7,
                                                "dislike": 8,
                                                "favorite": 9,
                                                "top": 10,
                                                "comment": 11,
                                                "hide": 12,
                                                "campus_delete": 13,
                                                "topic_irrelevant": 14,
                                                "batch_cancel": 15,
                                                "topic_set_cancel": 16,
                                                "dynamic_edit": 17,
                                                "create_video": 18,
                                                "coin": 19
                                            }
                                        },
                                        "ThreePointWait": {
                                            "fields": {
                                                "additionIcon": {"type": "string", "id": 1},
                                                "additionText": {"type": "string", "id": 2},
                                                "noAdditionIcon": {"type": "string", "id": 3},
                                                "noAdditionText": {"type": "string", "id": 4},
                                                "id": {"type": "int64", "id": 5}
                                            }
                                        },
                                        "TopicButton": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "jumpUri": {"type": "string", "id": 3},
                                                "redDot": {"type": "bool", "id": 4}
                                            }
                                        },
                                        "TopicList": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "topicListItem": {"rule": "repeated", "type": "TopicListItem", "id": 2},
                                                "actButton": {"type": "TopicButton", "id": 3},
                                                "moreButton": {"type": "TopicButton", "id": 4},
                                                "serverInfo": {"type": "string", "id": 5},
                                                "subTitle": {"type": "string", "id": 6},
                                                "expStyle": {"type": "int32", "id": 7},
                                                "titleIcon": {"type": "string", "id": 8}
                                            }
                                        },
                                        "TopicListItem": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "iconTitle": {"type": "string", "id": 2},
                                                "topicId": {"type": "int64", "id": 3},
                                                "topicName": {"type": "string", "id": 4},
                                                "url": {"type": "string", "id": 5},
                                                "pos": {"type": "int64", "id": 6},
                                                "serverInfo": {"type": "string", "id": 7},
                                                "headIconUrl": {"type": "string", "id": 8},
                                                "upMid": {"type": "int64", "id": 9},
                                                "tailIconUrl": {"type": "string", "id": 10},
                                                "extension": {"type": "string", "id": 11},
                                                "position": {"type": "int64", "id": 12}
                                            }
                                        },
                                        "Unfollow": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "list": {"rule": "repeated", "type": "UnfollowUserItem", "id": 2},
                                                "trackId": {"type": "string", "id": 3}
                                            }
                                        },
                                        "UnfollowUserItem": {
                                            "fields": {
                                                "hasUpdate": {"type": "bool", "id": 1},
                                                "face": {"type": "string", "id": 2},
                                                "name": {"type": "string", "id": 3},
                                                "uid": {"type": "int64", "id": 4},
                                                "pos": {"type": "int32", "id": 5},
                                                "liveState": {"type": "LiveState", "id": 6},
                                                "official": {"type": "OfficialVerify", "id": 7},
                                                "vip": {"type": "VipInfo", "id": 8},
                                                "sign": {"type": "string", "id": 9},
                                                "label": {"type": "string", "id": 10},
                                                "button": {"type": "AdditionalButton", "id": 11},
                                                "uri": {"type": "string", "id": 12}
                                            }
                                        },
                                        "UpListItem": {
                                            "fields": {
                                                "hasUpdate": {"type": "bool", "id": 1},
                                                "face": {"type": "string", "id": 2},
                                                "name": {"type": "string", "id": 3},
                                                "uid": {"type": "int64", "id": 4},
                                                "pos": {"type": "int64", "id": 5},
                                                "userItemType": {"type": "UserItemType", "id": 6},
                                                "displayStyleDay": {"type": "UserItemStyle", "id": 7},
                                                "displayStyleNight": {"type": "UserItemStyle", "id": 8},
                                                "styleId": {"type": "int64", "id": 9},
                                                "liveState": {"type": "LiveState", "id": 10},
                                                "separator": {"type": "bool", "id": 11},
                                                "uri": {"type": "string", "id": 12},
                                                "isRecall": {"type": "bool", "id": 13}
                                            }
                                        },
                                        "UserItemType": {
                                            "values": {
                                                "user_item_type_none": 0,
                                                "user_item_type_live": 1,
                                                "user_item_type_live_custom": 2,
                                                "user_item_type_normal": 3,
                                                "user_item_type_extend": 4,
                                                "user_item_type_premiere_reserve": 5,
                                                "user_item_type_premiere": 6
                                            }
                                        },
                                        "UpListMoreLabel": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2}
                                            }
                                        },
                                        "UserInfo": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "face": {"type": "string", "id": 3},
                                                "official": {"type": "OfficialVerify", "id": 4},
                                                "vip": {"type": "VipInfo", "id": 5},
                                                "live": {"type": "LiveInfo", "id": 6},
                                                "uri": {"type": "string", "id": 7},
                                                "pendant": {"type": "UserPendant", "id": 8},
                                                "nameplate": {"type": "Nameplate", "id": 9},
                                                "level": {"type": "int32", "id": 10},
                                                "sign": {"type": "string", "id": 11},
                                                "faceNft": {"type": "int32", "id": 12},
                                                "faceNftNew": {"type": "int32", "id": 13},
                                                "nftInfo": {"type": "NFTInfo", "id": 14},
                                                "isSeniorMember": {"type": "int32", "id": 15},
                                                "avatar": {
                                                    "type": "bilibili.dagw.component.avatar.v1.AvatarItem",
                                                    "id": 16
                                                }
                                            }
                                        },
                                        "UserItemStyle": {
                                            "fields": {
                                                "rectText": {"type": "string", "id": 1},
                                                "rectTextColor": {"type": "string", "id": 2},
                                                "rectIcon": {"type": "string", "id": 3},
                                                "rectBgColor": {"type": "string", "id": 4},
                                                "outerAnimation": {"type": "string", "id": 5}
                                            }
                                        },
                                        "UserPendant": {
                                            "fields": {
                                                "pid": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "image": {"type": "string", "id": 3},
                                                "expire": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "VideoBadge": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "textColor": {"type": "string", "id": 2},
                                                "textColorNight": {"type": "string", "id": 3},
                                                "bgColor": {"type": "string", "id": 4},
                                                "bgColorNight": {"type": "string", "id": 5},
                                                "borderColor": {"type": "string", "id": 6},
                                                "borderColorNight": {"type": "string", "id": 7},
                                                "bgStyle": {"type": "int32", "id": 8},
                                                "bgAlpha": {"type": "int32", "id": 9},
                                                "bgAlphaNight": {"type": "int32", "id": 10}
                                            }
                                        },
                                        "VipInfo": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "status": {"type": "int32", "id": 2},
                                                "dueDate": {"type": "int64", "id": 3},
                                                "label": {"type": "VipLabel", "id": 4},
                                                "themeType": {"type": "int32", "id": 5},
                                                "avatarSubscript": {"type": "int32", "id": 6},
                                                "nicknameColor": {"type": "string", "id": 7}
                                            }
                                        },
                                        "VipLabel": {
                                            "fields": {
                                                "path": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "labelTheme": {"type": "string", "id": 3}
                                            }
                                        },
                                        "NFTInfo": {
                                            "fields": {
                                                "regionType": {"type": "NFTRegionType", "id": 1},
                                                "regionIcon": {"type": "string", "id": 2},
                                                "regionShowStatus": {"type": "NFTShowStatus", "id": 3}
                                            }
                                        },
                                        "NFTRegionType": {
                                            "values": {
                                                "nft_region_default": 0,
                                                "nft_region_mainlang": 1,
                                                "nft_region_gat": 2
                                            }
                                        },
                                        "NFTShowStatus": {
                                            "values": {
                                                "nft_show_default": 0,
                                                "nft_show_zoominmainlang": 1,
                                                "nft_show_raw": 2
                                            }
                                        },
                                        "ModuleOpusSummary": {
                                            "fields": {
                                                "title": {"type": "Paragraph", "id": 1},
                                                "summary": {"type": "Paragraph", "id": 2},
                                                "summaryJumpBtnText": {"type": "string", "id": 3},
                                                "covers": {"rule": "repeated", "type": "MdlDynDrawItem", "id": 4}
                                            }
                                        },
                                        "Paragraph": {
                                            "oneofs": {"content": {"oneof": ["text", "pic", "line", "card"]}},
                                            "fields": {
                                                "paraType": {"type": "ParagraphType", "id": 1},
                                                "paraFormat": {"type": "ParagraphFormat", "id": 2},
                                                "text": {"type": "TextParagraph", "id": 3},
                                                "pic": {"type": "PicParagraph", "id": 4},
                                                "line": {"type": "LineParagraph", "id": 5},
                                                "card": {"type": "CardParagraph", "id": 6}
                                            }
                                        },
                                        "ParagraphType": {
                                            "values": {
                                                "INVALID": 0,
                                                "TEXT": 1,
                                                "PICTURES": 2,
                                                "LINE": 3,
                                                "REFERENCE": 4,
                                                "SORTED_LIST": 5,
                                                "UNSORTED_LIST": 6,
                                                "LINK_CARD": 7
                                            }
                                        },
                                        "ParagraphFormat": {
                                            "fields": {
                                                "align": {"type": "ParagraphAlign", "id": 1},
                                                "listFormat": {"type": "ListFormat", "id": 2}
                                            }
                                        },
                                        "ParagraphAlign": {"values": {"LEFT": 0, "MIDDLE": 1, "RIGHT": 2}},
                                        "ListFormat": {
                                            "fields": {
                                                "level": {"type": "int32", "id": 1},
                                                "order": {"type": "int32", "id": 2},
                                                "theme": {"type": "string", "id": 3}
                                            }
                                        },
                                        "TextParagraph": {
                                            "fields": {
                                                "nodes": {
                                                    "rule": "repeated",
                                                    "type": "TextNode",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "TextNode": {
                                            "oneofs": {"text": {"oneof": ["word", "emote", "link"]}},
                                            "fields": {
                                                "nodeType": {"type": "TextNodeType", "id": 1},
                                                "rawText": {"type": "string", "id": 2},
                                                "word": {"type": "WordNode", "id": 3},
                                                "emote": {"type": "EmoteNode", "id": 4},
                                                "link": {"type": "LinkNode", "id": 5}
                                            }
                                        },
                                        "TextNodeType": {
                                            "values": {
                                                "INVALID1": 0,
                                                "WORDS": 1,
                                                "EMOTE": 2,
                                                "AT": 3,
                                                "BIZ_LINK": 4
                                            }
                                        },
                                        "WordNode": {
                                            "fields": {
                                                "words": {"type": "string", "id": 1},
                                                "fontSize": {"type": "double", "id": 2},
                                                "color": {"type": "Colors", "id": 3},
                                                "style": {"type": "WordNodeStyle", "id": 4}
                                            }
                                        },
                                        "Colors": {
                                            "fields": {
                                                "colorDay": {"type": "string", "id": 1},
                                                "colorNight": {"type": "string", "id": 2}
                                            }
                                        },
                                        "WordNodeStyle": {
                                            "fields": {
                                                "bold": {"type": "bool", "id": 1},
                                                "italic": {"type": "bool", "id": 2},
                                                "strikethrough": {"type": "bool", "id": 3},
                                                "underline": {"type": "bool", "id": 4}
                                            }
                                        },
                                        "EmoteNode": {
                                            "fields": {
                                                "rawText": {"type": "WordNode", "id": 1},
                                                "emoteUrl": {"type": "string", "id": 2},
                                                "emoteWidth": {"type": "EmoteSize", "id": 3}
                                            }
                                        },
                                        "EmoteSize": {
                                            "fields": {
                                                "width": {"type": "double", "id": 1},
                                                "emojiSize": {"type": "int32", "id": 2}
                                            }
                                        },
                                        "LinkNode": {
                                            "fields": {
                                                "showText": {"type": "WordNode", "id": 1},
                                                "link": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "iconSuffix": {"type": "string", "id": 4},
                                                "linkType": {"type": "string", "id": 5},
                                                "linkTypeEnum": {"type": "LinkNodeType", "id": 6},
                                                "bizId": {"type": "string", "id": 7},
                                                "timestamp": {"type": "int64", "id": 8},
                                                "goodsItem": {"type": "GoodsItem", "id": 9}
                                            }
                                        },
                                        "LinkNodeType": {
                                            "values": {
                                                "INVALID2": 0,
                                                "VIDEO": 1,
                                                "RESERVE": 2,
                                                "VOTE": 3,
                                                "LIVE": 4,
                                                "LOTTERY": 5,
                                                "MATCH": 6,
                                                "GOODS": 7,
                                                "OGV_SS": 8,
                                                "OGV_EP": 9,
                                                "MANGA": 10,
                                                "CHEESE": 11,
                                                "VIDEO_TS": 12,
                                                "AT1": 13,
                                                "HASH_TAG": 14,
                                                "ARTICLE": 15,
                                                "URL": 16,
                                                "MAIL": 17,
                                                "LBS": 18,
                                                "ACTIVITY": 19,
                                                "ATTACH_CARD_OFFICIAL_ACTIVITY": 20,
                                                "GAME": 21,
                                                "DECORATION": 22,
                                                "UP_TOPIC": 23,
                                                "UP_ACTIVITY": 24,
                                                "UP_MAOER": 25,
                                                "MEMBER_GOODS": 26,
                                                "OPENMALL_UP_ITEMS": 27
                                            }
                                        },
                                        "PicParagraph": {
                                            "fields": {
                                                "pics": {"type": "MdlDynDraw", "id": 1},
                                                "style": {"type": "PicParagraphStyle", "id": 2}
                                            }
                                        },
                                        "PicParagraphStyle": {
                                            "values": {
                                                "INVALID3": 0,
                                                "NINE_CELL": 1,
                                                "BIG_SCROLL": 2
                                            }
                                        },
                                        "LineParagraph": {"fields": {"pic": {"type": "MdlDynDrawItem", "id": 1}}},
                                        "CardParagraph": {
                                            "fields": {
                                                "additionalCard": {
                                                    "type": "ModuleAdditional",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "OnlyFansProperty": {
                                            "fields": {
                                                "hasPrivilege": {"type": "bool", "id": 1},
                                                "isOnlyFans": {"type": "bool", "id": 2}
                                            }
                                        },
                                        "DynFeatureGate": {
                                            "fields": {
                                                "enhancedInteraction": {
                                                    "type": "bool",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ModuleNotice": {
                                            "fields": {
                                                "identity": {"type": "string", "id": 1},
                                                "icon": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "url": {"type": "string", "id": 4},
                                                "noticeType": {"type": "int32", "id": 5}
                                            }
                                        },
                                        "ModuleCopyright": {
                                            "fields": {
                                                "leftText": {"type": "string", "id": 1},
                                                "rightText": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ModuleParagraph": {
                                            "fields": {
                                                "paragraph": {"type": "Paragraph", "id": 1},
                                                "isArticleTitle": {"type": "bool", "id": 2},
                                                "paraSpacing": {"type": "ParaSpacing", "id": 3}
                                            }
                                        },
                                        "ParaSpacing": {
                                            "fields": {
                                                "spacingBeforePara": {"type": "double", "id": 1},
                                                "spacingAfterPara": {"type": "double", "id": 2},
                                                "lineSpacing": {"type": "double", "id": 3}
                                            }
                                        },
                                        "ModuleBlocked": {
                                            "fields": {
                                                "icon": {"type": "ImageSet", "id": 1},
                                                "bgImg": {"type": "ImageSet", "id": 2},
                                                "hintMessage": {"type": "string", "id": 3},
                                                "actBtn": {"type": "IconButton", "id": 4},
                                                "blockStyle": {"type": "MdlBlockedStyle", "id": 5}
                                            }
                                        },
                                        "MdlBlockedStyle": {
                                            "values": {
                                                "BLOCKED_STYLE_DEFAULT": 0,
                                                "BLOCKED_STYLE_IN_AUDIT": 1
                                            }
                                        },
                                        "ImageSet": {
                                            "fields": {
                                                "imgDay": {"type": "string", "id": 1},
                                                "imgDark": {"type": "string", "id": 2}
                                            }
                                        },
                                        "OnlyFans": {
                                            "fields": {
                                                "isOnlyFans": {"type": "bool", "id": 1},
                                                "badge": {"type": "IconBadge", "id": 2}
                                            }
                                        },
                                        "TopicMergedResource": {
                                            "fields": {
                                                "mergeType": {"type": "int32", "id": 1},
                                                "mergedResCnt": {"type": "int32", "id": 2}
                                            }
                                        },
                                        "ThreePointDynCoin": {
                                            "fields": {
                                                "hadCoin": {"type": "bool", "id": 1},
                                                "coinNum": {"type": "int64", "id": 2},
                                                "coinBusiness": {"type": "string", "id": 3},
                                                "oid": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "ThreePointDynEdit": {
                                            "fields": {
                                                "dynId": {"type": "int64", "id": 1},
                                                "originId": {"type": "int64", "id": 2},
                                                "isOriginDeleted": {"type": "bool", "id": 3},
                                                "url": {"type": "string", "id": 4}
                                            }
                                        }
                                    }
                                }
                            }
                        }, "playurl": {
                            "nested": {
                                "v1": {
                                    "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                        "PlayViewReply": {
                                            "fields": {
                                                "videoInfo": {"type": "VideoInfo", "id": 1},
                                                "playConf": {"type": "PlayAbilityConf", "id": 2},
                                                "upgradeLimit": {"type": "UpgradeLimit", "id": 3},
                                                "chronos": {"type": "Chronos", "id": 4},
                                                "playArc": {"type": "PlayArcConf", "id": 5},
                                                "event": {"type": "Event", "id": 6},
                                                "ab": {"type": "AB", "id": 7},
                                                "playLimit": {"type": "PlayLimit", "id": 8}
                                            }
                                        },
                                        "VideoInfo": {
                                            "fields": {
                                                "quality": {"type": "int32", "id": 1},
                                                "format": {"type": "string", "id": 2},
                                                "timelength": {"type": "int64", "id": 3},
                                                "videoCodecid": {"type": "int32", "id": 4},
                                                "streamList": {"rule": "repeated", "type": "Stream", "id": 5},
                                                "dashAudio": {"rule": "repeated", "type": "DashItem", "id": 6},
                                                "dolby": {"type": "DolbyItem", "id": 7},
                                                "volume": {"type": "VolumeInfo", "id": 8},
                                                "lossLessItem": {"type": "LossLessItem", "id": 9}
                                            }
                                        },
                                        "LossLessItem": {
                                            "fields": {
                                                "isLosslessAudio": {"type": "bool", "id": 1},
                                                "audio": {"type": "DashItem", "id": 2},
                                                "needVip": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "Stream": {
                                            "oneofs": {"content": {"oneof": ["dashVideo", "segmentVideo"]}},
                                            "fields": {
                                                "streamInfo": {"type": "StreamInfo", "id": 1},
                                                "dashVideo": {"type": "DashVideo", "id": 2},
                                                "segmentVideo": {"type": "SegmentVideo", "id": 3}
                                            }
                                        },
                                        "StreamInfo": {
                                            "fields": {
                                                "quality": {"type": "int32", "id": 1},
                                                "format": {"type": "string", "id": 2},
                                                "description": {"type": "string", "id": 3},
                                                "errCode": {"type": "PlayErr", "id": 4},
                                                "limit": {"type": "StreamLimit", "id": 5},
                                                "needVip": {"type": "bool", "id": 6},
                                                "needLogin": {"type": "bool", "id": 7},
                                                "intact": {"type": "bool", "id": 8},
                                                "noRexcode": {"type": "bool", "id": 9},
                                                "attribute": {"type": "int64", "id": 10},
                                                "newDescription": {"type": "string", "id": 11},
                                                "displayDesc": {"type": "string", "id": 12},
                                                "superscript": {"type": "string", "id": 13},
                                                "vipFree": {"type": "bool", "id": 14},
                                                "subtitle": {"type": "string", "id": 15},
                                                "scheme": {"type": "Scheme", "id": 16},
                                                "supportDrm": {"type": "bool", "id": 17}
                                            }
                                        },
                                        "Scheme": {
                                            "fields": {
                                                "actionType": {"type": "ActionType", "id": 1},
                                                "toast": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ActionType": {"values": {"UNKNOWN": 0, "SHOW_TOAST": 1}},
                                        "PlayErr": {"values": {"NoErr": 0, "WithMultiDeviceLoginErr": 1}},
                                        "StreamLimit": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "msg": {"type": "string", "id": 3}
                                            }
                                        },
                                        "DashVideo": {
                                            "fields": {
                                                "baseUrl": {"type": "string", "id": 1},
                                                "backupUrl": {"rule": "repeated", "type": "string", "id": 2},
                                                "bandwidth": {"type": "int32", "id": 3},
                                                "codecid": {"type": "int32", "id": 4},
                                                "md5": {"type": "string", "id": 5},
                                                "size": {"type": "int64", "id": 6},
                                                "audioId": {"type": "int32", "id": 7},
                                                "noRexcode": {"type": "bool", "id": 8},
                                                "frameRate": {"type": "string", "id": 9},
                                                "width": {"type": "int32", "id": 10},
                                                "height": {"type": "int32", "id": 11},
                                                "widevinePssh": {"type": "string", "id": 12}
                                            }
                                        },
                                        "SegmentVideo": {
                                            "fields": {
                                                "segment": {
                                                    "rule": "repeated",
                                                    "type": "ResponseUrl",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ResponseUrl": {
                                            "fields": {
                                                "order": {"type": "int32", "id": 1},
                                                "length": {"type": "int64", "id": 2},
                                                "size": {"type": "int64", "id": 3},
                                                "url": {"type": "string", "id": 4},
                                                "backupUrl": {"rule": "repeated", "type": "string", "id": 5},
                                                "md5": {"type": "string", "id": 6}
                                            }
                                        },
                                        "DashItem": {
                                            "fields": {
                                                "id": {"type": "int32", "id": 1},
                                                "baseUrl": {"type": "string", "id": 2},
                                                "backupUrl": {"rule": "repeated", "type": "string", "id": 3},
                                                "bandwidth": {"type": "int32", "id": 4},
                                                "codecid": {"type": "int32", "id": 5},
                                                "md5": {"type": "string", "id": 6},
                                                "size": {"type": "int64", "id": 7},
                                                "frameRate": {"type": "string", "id": 8},
                                                "widevinePssh": {"type": "string", "id": 9}
                                            }
                                        },
                                        "DolbyItem": {
                                            "fields": {
                                                "type": {"type": "Type", "id": 1},
                                                "audio": {"rule": "repeated", "type": "DashItem", "id": 2}
                                            }
                                        },
                                        "Type": {"values": {"NONE": 0, "COMMON": 1, "ATMOS": 2}},
                                        "VolumeInfo": {
                                            "fields": {
                                                "measuredI": {"type": "double", "id": 1},
                                                "measuredLra": {"type": "double", "id": 2},
                                                "measuredTp": {"type": "double", "id": 3},
                                                "measuredThreshold": {"type": "double", "id": 4},
                                                "targetOffset": {"type": "double", "id": 5},
                                                "targetI": {"type": "double", "id": 6},
                                                "targetTp": {"type": "double", "id": 7}
                                            }
                                        },
                                        "PlayAbilityConf": {
                                            "fields": {
                                                "backgroundPlayConf": {"type": "CloudConf", "id": 1},
                                                "flipConf": {"type": "CloudConf", "id": 2},
                                                "castConf": {"type": "CloudConf", "id": 3},
                                                "feedbackConf": {"type": "CloudConf", "id": 4},
                                                "subtitleConf": {"type": "CloudConf", "id": 5},
                                                "playbackRateConf": {"type": "CloudConf", "id": 6},
                                                "timeUpConf": {"type": "CloudConf", "id": 7},
                                                "playbackModeConf": {"type": "CloudConf", "id": 8},
                                                "scaleModeConf": {"type": "CloudConf", "id": 9},
                                                "likeConf": {"type": "CloudConf", "id": 10},
                                                "dislikeConf": {"type": "CloudConf", "id": 11},
                                                "coinConf": {"type": "CloudConf", "id": 12},
                                                "elecConf": {"type": "CloudConf", "id": 13},
                                                "shareConf": {"type": "CloudConf", "id": 14},
                                                "screenShotConf": {"type": "CloudConf", "id": 15},
                                                "lockScreenConf": {"type": "CloudConf", "id": 16},
                                                "recommendConf": {"type": "CloudConf", "id": 17},
                                                "playbackSpeedConf": {"type": "CloudConf", "id": 18},
                                                "definitionConf": {"type": "CloudConf", "id": 19},
                                                "selectionsConf": {"type": "CloudConf", "id": 20},
                                                "nextConf": {"type": "CloudConf", "id": 21},
                                                "editDmConf": {"type": "CloudConf", "id": 22},
                                                "smallWindowConf": {"type": "CloudConf", "id": 23},
                                                "shakeConf": {"type": "CloudConf", "id": 24},
                                                "outerDmConf": {"type": "CloudConf", "id": 25},
                                                "innerDmConf": {"type": "CloudConf", "id": 26},
                                                "panoramaConf": {"type": "CloudConf", "id": 27},
                                                "dolbyConf": {"type": "CloudConf", "id": 28},
                                                "colorFilterConf": {"type": "CloudConf", "id": 29},
                                                "lossLessConf": {"type": "CloudConf", "id": 30}
                                            }
                                        },
                                        "CloudConf": {
                                            "fields": {
                                                "show": {"type": "bool", "id": 1},
                                                "confType": {"type": "ConfType", "id": 2},
                                                "fieldValue": {"type": "FieldValue", "id": 3},
                                                "confValue": {"type": "ConfValue", "id": 4}
                                            }
                                        },
                                        "ConfType": {
                                            "values": {
                                                "NoType": 0,
                                                "FLIPCONF": 1,
                                                "CASTCONF": 2,
                                                "FEEDBACK": 3,
                                                "SUBTITLE": 4,
                                                "PLAYBACKRATE": 5,
                                                "TIMEUP": 6,
                                                "PLAYBACKMODE": 7,
                                                "SCALEMODE": 8,
                                                "BACKGROUNDPLAY": 9,
                                                "LIKE": 10,
                                                "DISLIKE": 11,
                                                "COIN": 12,
                                                "ELEC": 13,
                                                "SHARE": 14,
                                                "SCREENSHOT": 15,
                                                "LOCKSCREEN": 16,
                                                "RECOMMEND": 17,
                                                "PLAYBACKSPEED": 18,
                                                "DEFINITION": 19,
                                                "SELECTIONS": 20,
                                                "NEXT": 21,
                                                "EDITDM": 22,
                                                "SMALLWINDOW": 23,
                                                "SHAKE": 24,
                                                "OUTERDM": 25,
                                                "INNERDM": 26,
                                                "PANORAMA": 27,
                                                "DOLBY": 28,
                                                "COLORFILTER": 29,
                                                "LOSSLESS": 30
                                            }
                                        },
                                        "FieldValue": {
                                            "oneofs": {"value": {"oneof": ["switch"]}},
                                            "fields": {"switch": {"type": "bool", "id": 1}}
                                        },
                                        "ConfValue": {
                                            "oneofs": {"value": {"oneof": ["switch", "selected"]}},
                                            "fields": {
                                                "switch": {"type": "bool", "id": 1},
                                                "selected": {"type": "int64", "id": 2}
                                            }
                                        },
                                        "UpgradeLimit": {
                                            "fields": {
                                                "code": {"type": "int32", "id": 1},
                                                "message": {"type": "string", "id": 2},
                                                "image": {"type": "string", "id": 3},
                                                "button": {"type": "UpgradeButton", "id": 4}
                                            }
                                        },
                                        "UpgradeButton": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "link": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Chronos": {
                                            "fields": {
                                                "md5": {"type": "string", "id": 1},
                                                "file": {"type": "string", "id": 2}
                                            }
                                        },
                                        "PlayArcConf": {
                                            "fields": {
                                                "backgroundPlayConf": {"type": "ArcConf", "id": 1},
                                                "flipConf": {"type": "ArcConf", "id": 2},
                                                "castConf": {"type": "ArcConf", "id": 3},
                                                "feedbackConf": {"type": "ArcConf", "id": 4},
                                                "subtitleConf": {"type": "ArcConf", "id": 5},
                                                "playbackRateConf": {"type": "ArcConf", "id": 6},
                                                "timeUpConf": {"type": "ArcConf", "id": 7},
                                                "playbackModeConf": {"type": "ArcConf", "id": 8},
                                                "scaleModeConf": {"type": "ArcConf", "id": 9},
                                                "likeConf": {"type": "ArcConf", "id": 10},
                                                "dislikeConf": {"type": "ArcConf", "id": 11},
                                                "coinConf": {"type": "ArcConf", "id": 12},
                                                "elecConf": {"type": "ArcConf", "id": 13},
                                                "shareConf": {"type": "ArcConf", "id": 14},
                                                "screenShotConf": {"type": "ArcConf", "id": 15},
                                                "lockScreenConf": {"type": "ArcConf", "id": 16},
                                                "recommendConf": {"type": "ArcConf", "id": 17},
                                                "playbackSpeedConf": {"type": "ArcConf", "id": 18},
                                                "definitionConf": {"type": "ArcConf", "id": 19},
                                                "selectionsConf": {"type": "ArcConf", "id": 20},
                                                "nextConf": {"type": "ArcConf", "id": 21},
                                                "editDmConf": {"type": "ArcConf", "id": 22},
                                                "smallWindowConf": {"type": "ArcConf", "id": 23},
                                                "shakeConf": {"type": "ArcConf", "id": 24},
                                                "outerDmConf": {"type": "ArcConf", "id": 25},
                                                "innerDmConf": {"type": "ArcConf", "id": 26},
                                                "panoramaConf": {"type": "ArcConf", "id": 27},
                                                "dolbyConf": {"type": "ArcConf", "id": 28},
                                                "screenRecordingConf": {"type": "ArcConf", "id": 29},
                                                "colorFilterConf": {"type": "ArcConf", "id": 30},
                                                "lossLessConf": {"type": "ArcConf", "id": 31}
                                            }
                                        },
                                        "ArcConf": {
                                            "fields": {
                                                "isSupport": {"type": "bool", "id": 1},
                                                "disabled": {"type": "bool", "id": 2},
                                                "extraContent": {"type": "ExtraContent", "id": 3},
                                                "unsupportScene": {"rule": "repeated", "type": "int64", "id": 4}
                                            }
                                        },
                                        "ExtraContent": {
                                            "fields": {
                                                "disabledReason": {"type": "string", "id": 1},
                                                "disabledCode": {"type": "int64", "id": 2}
                                            }
                                        },
                                        "Event": {"fields": {"shake": {"type": "Shake", "id": 1}}},
                                        "Shake": {"fields": {"file": {"type": "string", "id": 1}}},
                                        "AB": {
                                            "fields": {
                                                "glance": {"type": "Glance", "id": 1},
                                                "group": {"type": "Group", "id": 2}
                                            }
                                        },
                                        "Group": {"values": {"UnknownGroup": 0, "A": 1, "B": 2, "C": 3}},
                                        "Glance": {
                                            "fields": {
                                                "canWatch": {"type": "bool", "id": 1},
                                                "times": {"type": "int64", "id": 2},
                                                "duration": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "PlayLimit": {
                                            "fields": {
                                                "code": {"type": "PlayLimitCode", "id": 1},
                                                "message": {"type": "string", "id": 2},
                                                "subMessage": {"type": "string", "id": 3},
                                                "button": {"type": "ButtonStyle", "id": 4}
                                            }
                                        },
                                        "PlayLimitCode": {"values": {"PLCUnkown": 0, "PLCUgcNotPayed": 1}},
                                        "ButtonStyle": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "textColor": {"type": "string", "id": 2},
                                                "bgColor": {"type": "string", "id": 3},
                                                "jumpLink": {"type": "string", "id": 4}
                                            }
                                        }
                                    }
                                }
                            }
                        }, "view": {
                            "nested": {
                                "v1": {
                                    "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                        "ViewReply": {
                                            "fields": {
                                                "arc": {"type": "bilibili.app.archive.v1.Arc", "id": 1},
                                                "pages": {"rule": "repeated", "type": "ViewPage", "id": 2},
                                                "ownerExt": {"type": "OnwerExt", "id": 3},
                                                "reqUser": {"type": "ReqUser", "id": 4},
                                                "tag": {"rule": "repeated", "type": "Tag", "id": 5},
                                                "tIcon": {"keyType": "string", "type": "TIcon", "id": 6},
                                                "season": {"type": "Season", "id": 7},
                                                "elecRank": {"type": "ElecRank", "id": 8},
                                                "history": {"type": "History", "id": 9},
                                                "relates": {"rule": "repeated", "type": "Relate", "id": 10},
                                                "dislike": {"type": "Dislike", "id": 11},
                                                "playerIcon": {"type": "PlayerIcon", "id": 12},
                                                "vipActive": {"type": "string", "id": 13},
                                                "bvid": {"type": "string", "id": 14},
                                                "honor": {"type": "Honor", "id": 15},
                                                "relateTab": {"rule": "repeated", "type": "RelateTab", "id": 16},
                                                "activityUrl": {"type": "string", "id": 17},
                                                "bgm": {"rule": "repeated", "type": "Bgm", "id": 18},
                                                "staff": {"rule": "repeated", "type": "Staff", "id": 19},
                                                "argueMsg": {"type": "string", "id": 20},
                                                "shortLink": {"type": "string", "id": 21},
                                                "playParam": {"type": "int32", "id": 22},
                                                "label": {"type": "Label", "id": 23},
                                                "ugcSeason": {"type": "UgcSeason", "id": 24},
                                                "config": {"type": "Config", "id": 25},
                                                "shareSubtitle": {"type": "string", "id": 26},
                                                "interaction": {"type": "Interaction", "id": 27},
                                                "ecode": {"type": "ECode", "id": 28},
                                                "customConfig": {"type": "CustomConfig", "id": 29},
                                                "cms": {"rule": "repeated", "type": "CM", "id": 30},
                                                "cmConfig": {"type": "CMConfig", "id": 31},
                                                "tab": {"type": "Tab", "id": 32},
                                                "rank": {"type": "Rank", "id": 33},
                                                "tfPanelCustomized": {"type": "TFPanelCustomized", "id": 34},
                                                "upAct": {"type": "UpAct", "id": 35},
                                                "userGarb": {"type": "UserGarb", "id": 36},
                                                "activitySeason": {"type": "ActivitySeason", "id": 37},
                                                "badgeUrl": {"type": "string", "id": 38},
                                                "liveOrderInfo": {"type": "LiveOrderInfo", "id": 39},
                                                "descV2": {"rule": "repeated", "type": "DescV2", "id": 40},
                                                "cmIpad": {"type": "CmIpad", "id": 41},
                                                "sticker": {"rule": "repeated", "type": "ViewMaterial", "id": 42},
                                                "upLikeImg": {"type": "UpLikeImg", "id": 43},
                                                "likeCustom": {"type": "LikeCustom", "id": 44},
                                                "descTag": {"rule": "repeated", "type": "Tag", "id": 45},
                                                "specialCell": {"type": "SpecialCell", "id": 46},
                                                "online": {"type": "Online", "id": 47},
                                                "cmUnderPlayer": {"type": "google.protobuf.Any", "id": 48},
                                                "videoSource": {"rule": "repeated", "type": "ViewMaterial", "id": 49},
                                                "specialCellNew": {"rule": "repeated", "type": "SpecialCell", "id": 50},
                                                "premiere": {"type": "PremiereResource", "id": 51},
                                                "refreshSpecialCell": {"type": "bool", "id": 52},
                                                "materialLeft": {"type": "MaterialLeft", "id": 53},
                                                "notesCount": {"type": "int64", "id": 54},
                                                "pullAction": {"type": "PullClientAction", "id": 55},
                                                "arcExtra": {"type": "ArcExtra", "id": 56},
                                                "pagination": {"type": "PaginationReply", "id": 57},
                                                "likeAnimation": {"type": "LikeAnimation", "id": 58},
                                                "replyPreface": {"type": "ReplyStyle", "id": 59},
                                                "refreshPage": {"type": "RefreshPage", "id": 60},
                                                "controlConfig": {"type": "ControlConfig", "id": 62},
                                                "upViewMaterial": {"type": "UpViewMaterial", "id": 63},
                                                "userRelation": {"type": "UserRelation", "id": 64},
                                                "coinStyle": {"type": "CoinStyle", "id": 65},
                                                "rabbitYear": {"type": "RabbitYear", "id": 66}
                                            }
                                        },
                                        "MaterialLeft": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "url": {"type": "string", "id": 3},
                                                "leftType": {"type": "string", "id": 4},
                                                "param": {"type": "string", "id": 5},
                                                "operationalType": {"type": "string", "id": 6},
                                                "staticIcon": {"type": "string", "id": 7}
                                            }
                                        },
                                        "PremiereResource": {
                                            "fields": {
                                                "premiere": {"type": "Premiere", "id": 1},
                                                "reserve": {"type": "PremiereReserve", "id": 2},
                                                "text": {"type": "PremiereText", "id": 3}
                                            }
                                        },
                                        "PremiereText": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "subtitle_": {"type": "string", "id": 2},
                                                "onlineText_": {"type": "string", "id": 3},
                                                "onlineIcon_": {"type": "string", "id": 4},
                                                "onlineIconDark_": {"type": "string", "id": 5},
                                                "introTitle": {"type": "string", "id": 6},
                                                "introIcon": {"type": "string", "id": 7},
                                                "guidancePulldown": {"type": "string", "id": 8},
                                                "guidanceEntry": {"type": "string", "id": 9},
                                                "introIconNight": {"type": "string", "id": 10}
                                            }
                                        },
                                        "PremiereReserve": {
                                            "fields": {
                                                "reserveId": {"type": "int64", "id": 1},
                                                "count": {"type": "int64", "id": 2},
                                                "isFollow": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "Premiere": {
                                            "fields": {
                                                "premiereState": {"type": "PremiereState", "id": 1},
                                                "serviceTime": {"type": "int64", "id": 3},
                                                "startTime": {"type": "int64", "id": 2},
                                                "roomId": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "PremiereState": {
                                            "values": {
                                                "premiere_none": 0,
                                                "premiere_before": 1,
                                                "premiere_in": 2,
                                                "premiere_after": 3
                                            }
                                        },
                                        "Online": {
                                            "fields": {
                                                "onlineShow": {"type": "bool", "id": 1},
                                                "playerOnlineLogo": {"type": "string", "id": 2}
                                            }
                                        },
                                        "SpecialCell": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "iconNight": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3},
                                                "textColor": {"type": "string", "id": 4},
                                                "textColorNight": {"type": "string", "id": 5},
                                                "jumpUrl": {"type": "string", "id": 6},
                                                "cellType": {"type": "string", "id": 7},
                                                "cellBgcolor": {"type": "string", "id": 8},
                                                "cellBgcolorNight": {"type": "string", "id": 9},
                                                "param": {"type": "string", "id": 10},
                                                "pageTitle": {"type": "string", "id": 11},
                                                "jumpType": {"type": "string", "id": 12},
                                                "endIcon": {"type": "string", "id": 13},
                                                "endIconNight": {"type": "string", "id": 14},
                                                "notesCount": {"type": "int64", "id": 15},
                                                "cellFluid": {"type": "CellFluid", "id": 16}
                                            }
                                        },
                                        "LikeCustom": {
                                            "fields": {
                                                "likeSwitch": {"type": "bool", "id": 1},
                                                "fullToHalfProgress": {"type": "int64", "id": 2},
                                                "nonFullProgress": {"type": "int64", "id": 3},
                                                "updateCount": {"type": "int64", "id": 4},
                                                "immediatelyUpgrade": {"type": "bool", "id": 5},
                                                "likeComment": {"type": "LikeComment", "id": 6}
                                            }
                                        },
                                        "UpLikeImg": {
                                            "fields": {
                                                "preImg": {"type": "string", "id": 1},
                                                "sucImg": {"type": "string", "id": 2},
                                                "content": {"type": "string", "id": 3},
                                                "type": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "ViewMaterial": {
                                            "fields": {
                                                "oid": {"type": "int64", "id": 1},
                                                "mid": {"type": "int64", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "author": {"type": "string", "id": 4},
                                                "jumpUrl": {"type": "string", "id": 5}
                                            }
                                        },
                                        "CmIpad": {
                                            "fields": {
                                                "cm": {"type": "CM", "id": 1},
                                                "author": {"type": "bilibili.app.archive.v1.Author", "id": 2},
                                                "stat": {"type": "bilibili.app.archive.v1.Stat", "id": 3},
                                                "duration": {"type": "int64", "id": 4},
                                                "aid": {"type": "int64", "id": 5}
                                            }
                                        },
                                        "DescV2": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "type": {"type": "DescType", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "rid": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "DescType": {
                                            "values": {
                                                "DescTypeUnknown": 0,
                                                "DescTypeText": 1,
                                                "DescTypeAt": 2
                                            }
                                        },
                                        "LiveOrderInfo": {
                                            "fields": {
                                                "sid": {"type": "int64", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "livePlanStartTime": {"type": "int64", "id": 3},
                                                "isFollow": {"type": "bool", "id": 4},
                                                "followCount": {"type": "int64", "id": 5},
                                                "style": {"type": "string", "id": 6}
                                            }
                                        },
                                        "Season": {
                                            "fields": {
                                                "allowDownload": {"type": "string", "id": 1},
                                                "seasonId": {"type": "int64", "id": 2},
                                                "isJump": {"type": "int32", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "isFinish": {"type": "int32", "id": 6},
                                                "newestEpId": {"type": "int64", "id": 7},
                                                "newestEpIndex": {"type": "string", "id": 8},
                                                "totalCount": {"type": "int64", "id": 9},
                                                "weekday": {"type": "int32", "id": 10},
                                                "userSeason": {"type": "UserSeason", "id": 11},
                                                "player": {"type": "SeasonPlayer", "id": 12},
                                                "ogvPlayurl": {"type": "string", "id": 13}
                                            }
                                        },
                                        "SeasonPlayer": {
                                            "fields": {
                                                "aid": {"type": "int64", "id": 1},
                                                "vid": {"type": "string", "id": 2},
                                                "cid": {"type": "int64", "id": 3},
                                                "from": {"type": "string", "id": 4}
                                            }
                                        },
                                        "UserSeason": {"fields": {"attention": {"type": "string", "id": 1}}},
                                        "Tag": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "likes": {"type": "int64", "id": 3},
                                                "hates": {"type": "int64", "id": 4},
                                                "liked": {"type": "int32", "id": 5},
                                                "hated": {"type": "int32", "id": 6},
                                                "uri": {"type": "string", "id": 7},
                                                "tagType": {"type": "string", "id": 8}
                                            }
                                        },
                                        "TIcon": {"fields": {"icon": {"type": "string", "id": 1}}},
                                        "ECode": {"values": {"DEFAULT": 0, "CODE404": 1}},
                                        "ViewPage": {
                                            "fields": {
                                                "page": {
                                                    "type": "bilibili.app.archive.v1.Page",
                                                    "id": 1
                                                },
                                                "audio": {"type": "Audio", "id": 2},
                                                "dm": {"type": "DM", "id": 3},
                                                "downloadTitle": {"type": "string", "id": 4},
                                                "downloadSubtitle": {"type": "string", "id": 5}
                                            }
                                        },
                                        "Audio": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "coverUrl": {"type": "string", "id": 2},
                                                "songId": {"type": "int64", "id": 3},
                                                "playCount": {"type": "int64", "id": 4},
                                                "replyCount": {"type": "int64", "id": 5},
                                                "upperId": {"type": "int64", "id": 6},
                                                "entrance": {"type": "string", "id": 7},
                                                "songAttr": {"type": "int64", "id": 8}
                                            }
                                        },
                                        "DM": {
                                            "fields": {
                                                "closed": {"type": "bool", "id": 1},
                                                "realName": {"type": "bool", "id": 2},
                                                "count": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "OnwerExt": {
                                            "fields": {
                                                "officialVerify": {"type": "OfficialVerify", "id": 1},
                                                "live": {"type": "Live", "id": 2},
                                                "vip": {"type": "Vip", "id": 3},
                                                "assists": {"rule": "repeated", "type": "int64", "id": 4},
                                                "fans": {"type": "int64", "id": 5},
                                                "arcCount": {"type": "string", "id": 6},
                                                "nftFaceIcon": {"type": "NftFaceIcon", "id": 7}
                                            }
                                        },
                                        "OfficialVerify": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "desc": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Live": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "roomid": {"type": "int64", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "endpageUri": {"type": "string", "id": 4}
                                            }
                                        },
                                        "Vip": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "dueDate": {"type": "int64", "id": 2},
                                                "dueRemark": {"type": "string", "id": 3},
                                                "accessStatus": {"type": "int32", "id": 4},
                                                "vipStatus": {"type": "int32", "id": 5},
                                                "vipStatusWarn": {"type": "string", "id": 6},
                                                "themeType": {"type": "int32", "id": 7},
                                                "label": {"type": "VipLabel", "id": 8}
                                            }
                                        },
                                        "VipLabel": {
                                            "fields": {
                                                "path": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "labelTheme": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ReqUser": {
                                            "fields": {
                                                "attention": {"type": "int32", "id": 1},
                                                "guestAttention": {"type": "int32", "id": 2},
                                                "favorite": {"type": "int32", "id": 3},
                                                "like": {"type": "int32", "id": 4},
                                                "dislike": {"type": "int32", "id": 5},
                                                "coin": {"type": "int32", "id": 6},
                                                "attentionLevel": {"type": "int32", "id": 7},
                                                "favSeason": {"type": "int32", "id": 8},
                                                "elecPlusBtn": {"type": "Button", "id": 9}
                                            }
                                        },
                                        "ElecRank": {
                                            "fields": {
                                                "list": {
                                                    "rule": "repeated",
                                                    "type": "ElecRankItem",
                                                    "id": 1
                                                },
                                                "count": {"type": "int64", "id": 2},
                                                "text": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ElecRankItem": {
                                            "fields": {
                                                "avatar": {"type": "string", "id": 1},
                                                "nickname": {"type": "string", "id": 2},
                                                "message": {"type": "string", "id": 3},
                                                "mid": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "History": {
                                            "fields": {
                                                "cid": {"type": "int64", "id": 1},
                                                "progress": {"type": "int64", "id": 2}
                                            }
                                        },
                                        "Relate": {
                                            "fields": {
                                                "aid": {"type": "int64", "id": 1},
                                                "pic": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "author": {"type": "bilibili.app.archive.v1.Author", "id": 4},
                                                "stat": {"type": "bilibili.app.archive.v1.Stat", "id": 5},
                                                "duration": {"type": "int64", "id": 6},
                                                "goto": {"type": "string", "id": 7},
                                                "param": {"type": "string", "id": 8},
                                                "uri": {"type": "string", "id": 9},
                                                "jumpUrl": {"type": "string", "id": 10},
                                                "rating": {"type": "double", "id": 11},
                                                "reserve": {"type": "string", "id": 12},
                                                "from": {"type": "string", "id": 13},
                                                "desc": {"type": "string", "id": 14},
                                                "rcmdReason": {"type": "string", "id": 15},
                                                "badge": {"type": "string", "id": 16},
                                                "cid": {"type": "int64", "id": 17},
                                                "seasonType": {"type": "int32", "id": 18},
                                                "ratingCount": {"type": "int32", "id": 19},
                                                "tagName": {"type": "string", "id": 20},
                                                "packInfo": {"type": "PackInfo", "id": 21},
                                                "notice": {"type": "Notice", "id": 22},
                                                "button": {"type": "Button", "id": 23},
                                                "trackid": {"type": "string", "id": 24},
                                                "newCard": {"type": "int32", "id": 25},
                                                "rcmdReasonStyle": {"type": "ReasonStyle", "id": 26},
                                                "coverGif": {"type": "string", "id": 27},
                                                "cm": {"type": "CM", "id": 28},
                                                "reserveStatus": {"type": "int64", "id": 29},
                                                "rcmdReasonExtra_": {"type": "string", "id": 30},
                                                "recThreePoint": {"type": "RecThreePoint", "id": 31},
                                                "uniqueId": {"type": "string", "id": 32},
                                                "materialId": {"type": "int64", "id": 33},
                                                "fromSourceType": {"type": "int64", "id": 34},
                                                "fromSourceId": {"type": "string", "id": 35},
                                                "dimension": {"type": "bilibili.app.archive.v1.Dimension", "id": 36},
                                                "cover": {"type": "string", "id": 37},
                                                "badgeStyle": {"type": "ReasonStyle", "id": 38},
                                                "powerIconStyle": {"type": "PowerIconStyle", "id": 39},
                                                "reserveStatusText": {"type": "string", "id": 40},
                                                "dislikeReportData": {"type": "string", "id": 41},
                                                "firstFrame": {"type": "string", "id": 43},
                                                "gameRecommendReason": {"type": "string", "id": 44},
                                                "wikiInfoGame": {"type": "WikiInfo", "id": 45},
                                                "liveInfo": {"type": "LiveInfo", "id": 46}
                                            }
                                        },
                                        "PowerIconStyle": {
                                            "fields": {
                                                "iconUrl": {"type": "string", "id": 1},
                                                "iconNightUrl": {"type": "string", "id": 2},
                                                "iconWidth": {"type": "int64", "id": 3},
                                                "iconHeight": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "RecThreePoint": {
                                            "fields": {
                                                "dislike": {"type": "RecDislike", "id": 1},
                                                "feedback": {"type": "RecDislike", "id": 2},
                                                "watchLater": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "RecDislike": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "subTitle": {"type": "string", "id": 2},
                                                "closedSubTitle": {"type": "string", "id": 3},
                                                "pasteText": {"type": "string", "id": 4},
                                                "closedPasteText": {"type": "string", "id": 5},
                                                "dislikeReason": {
                                                    "rule": "repeated",
                                                    "type": "DislikeReasons",
                                                    "id": 6
                                                },
                                                "toast": {"type": "string", "id": 7},
                                                "closedToast": {"type": "string", "id": 8}
                                            }
                                        },
                                        "PackInfo": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Notice": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "desc": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Button": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ReasonStyle": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "textColor": {"type": "string", "id": 2},
                                                "bgColor": {"type": "string", "id": 3},
                                                "borderColor": {"type": "string", "id": 4},
                                                "textColorNight": {"type": "string", "id": 5},
                                                "bgColorNight": {"type": "string", "id": 6},
                                                "borderColorNight": {"type": "string", "id": 7},
                                                "bgStyle": {"type": "int32", "id": 8},
                                                "selected": {"type": "int32", "id": 9}
                                            }
                                        },
                                        "CM": {"fields": {"sourceContent": {"type": "google.protobuf.Any", "id": 1}}},
                                        "Dislike": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "subtitle": {"type": "string", "id": 2},
                                                "reasons": {"rule": "repeated", "type": "DislikeReasons", "id": 3}
                                            }
                                        },
                                        "DislikeReasons": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "mid": {"type": "int64", "id": 2},
                                                "rid": {"type": "int32", "id": 3},
                                                "tagId": {"type": "int64", "id": 4},
                                                "name": {"type": "string", "id": 5}
                                            }
                                        },
                                        "PlayerIcon": {
                                            "fields": {
                                                "url1": {"type": "string", "id": 1},
                                                "hash1": {"type": "string", "id": 2},
                                                "url2": {"type": "string", "id": 3},
                                                "hash2": {"type": "string", "id": 4},
                                                "dragLeftPng": {"type": "string", "id": 5},
                                                "middlePng": {"type": "string", "id": 6},
                                                "dragRightPng": {"type": "string", "id": 7},
                                                "dragData": {"type": "IconData", "id": 8},
                                                "nodragData": {"type": "IconData", "id": 9}
                                            }
                                        },
                                        "Honor": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "iconNight": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3},
                                                "textExtra": {"type": "string", "id": 4},
                                                "textColor": {"type": "string", "id": 5},
                                                "textColorNight": {"type": "string", "id": 6},
                                                "bgColor": {"type": "string", "id": 7},
                                                "bgColorNight": {"type": "string", "id": 8},
                                                "url": {"type": "string", "id": 9},
                                                "urlText": {"type": "string", "id": 10},
                                                "category": {"type": "string", "id": 11}
                                            }
                                        },
                                        "RelateTab": {
                                            "fields": {
                                                "id": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Bgm": {
                                            "fields": {
                                                "sid": {"type": "int64", "id": 1},
                                                "mid": {"type": "int64", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "author": {"type": "string", "id": 4},
                                                "jumpUrl": {"type": "string", "id": 5},
                                                "cover": {"type": "string", "id": 6}
                                            }
                                        },
                                        "Staff": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "face": {"type": "string", "id": 3},
                                                "name": {"type": "string", "id": 4},
                                                "officialVerify": {"type": "OfficialVerify", "id": 5},
                                                "vip": {"type": "Vip", "id": 6},
                                                "attention": {"type": "int32", "id": 7},
                                                "labelStyle": {"type": "int32", "id": 8}
                                            }
                                        },
                                        "Label": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "iconNight": {"type": "string", "id": 4},
                                                "iconWidth": {"type": "int64", "id": 5},
                                                "iconHeight": {"type": "int64", "id": 6},
                                                "lottie": {"type": "string", "id": 7},
                                                "lottieNight": {"type": "string", "id": 8}
                                            }
                                        },
                                        "UgcSeason": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "cover": {"type": "string", "id": 3},
                                                "intro": {"type": "string", "id": 4},
                                                "sections": {"rule": "repeated", "type": "Section", "id": 5},
                                                "stat": {"type": "UgcSeasonStat", "id": 6},
                                                "labelText": {"type": "string", "id": 7},
                                                "labelTextColor": {"type": "string", "id": 8},
                                                "labelBgColor": {"type": "string", "id": 9},
                                                "labelTextNightColor": {"type": "string", "id": 10},
                                                "labelBgNightColor": {"type": "string", "id": 11},
                                                "descRight": {"type": "string", "id": 12},
                                                "epCount": {"type": "int64", "id": 13},
                                                "seasonType": {"type": "SeasonType", "id": 14},
                                                "showContinualButton": {"type": "bool", "id": 15},
                                                "epNum": {"type": "int64", "id": 16},
                                                "seasonPay": {"type": "bool", "id": 17},
                                                "goodsInfo": {"type": "GoodsInfo", "id": 18},
                                                "payButton": {"type": "ButtonStyle", "id": 19},
                                                "labelTextNew": {"type": "string", "id": 20},
                                                "activity": {"type": "UgcSeasonActivity", "id": 21},
                                                "seasonAbility": {"rule": "repeated", "type": "string", "id": 22}
                                            }
                                        },
                                        "SeasonType": {"values": {"Unknown": 0, "Base": 1, "Good": 2}},
                                        "Section": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "type": {"type": "int64", "id": 3},
                                                "episodes": {"rule": "repeated", "type": "Episode", "id": 4}
                                            }
                                        },
                                        "Episode": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "aid": {"type": "int64", "id": 2},
                                                "cid": {"type": "int64", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "coverRightText": {"type": "string", "id": 6},
                                                "page": {"type": "bilibili.app.archive.v1.Page", "id": 7},
                                                "stat": {"type": "bilibili.app.archive.v1.Stat", "id": 8},
                                                "bvid": {"type": "string", "id": 9},
                                                "author": {"type": "bilibili.app.archive.v1.Author", "id": 10},
                                                "authorDesc": {"type": "string", "id": 11},
                                                "firstFrame": {"type": "string", "id": 16}
                                            }
                                        },
                                        "UgcSeasonStat": {
                                            "fields": {
                                                "seasonId": {"type": "int64", "id": 1},
                                                "view": {"type": "int32", "id": 2},
                                                "danmaku": {"type": "int32", "id": 3},
                                                "reply": {"type": "int32", "id": 4},
                                                "fav": {"type": "int32", "id": 5},
                                                "coin": {"type": "int32", "id": 6},
                                                "share": {"type": "int32", "id": 7},
                                                "nowRank": {"type": "int32", "id": 8},
                                                "hisRank": {"type": "int32", "id": 9},
                                                "like": {"type": "int32", "id": 10}
                                            }
                                        },
                                        "Config": {
                                            "fields": {
                                                "relatesTitle": {"type": "string", "id": 1},
                                                "relatesStyle": {"type": "int32", "id": 2},
                                                "relateGifExp": {"type": "int32", "id": 3},
                                                "endPageHalf": {"type": "int32", "id": 4},
                                                "endPageFull": {"type": "int32", "id": 5},
                                                "autoSwindow": {"type": "bool", "id": 6},
                                                "popupInfo_": {"type": "bool", "id": 7},
                                                "abtestSmallWindow": {"type": "string", "id": 8},
                                                "recThreePointStyle": {"type": "int32", "id": 9},
                                                "isAbsoluteTime": {"type": "bool", "id": 10},
                                                "newSwindow": {"type": "bool", "id": 11},
                                                "relatesBiserial": {"type": "bool", "id": 12},
                                                "listenerConf": {"type": "ListenerConfig", "id": 13},
                                                "relatesFeedStyle": {"type": "string", "id": 14},
                                                "relatesFeedPopup": {"type": "bool", "id": 15},
                                                "relatesHasNext": {"type": "bool", "id": 16},
                                                "localPlay": {"type": "int32", "id": 17},
                                                "playStory": {"type": "bool", "id": 18},
                                                "arcPlayStory": {"type": "bool", "id": 19},
                                                "storyIcon": {"type": "string", "id": 20},
                                                "landscapeStory": {"type": "bool", "id": 21},
                                                "arcLandscapeStory": {"type": "bool", "id": 22},
                                                "landscapeIcon": {"type": "string", "id": 23},
                                                "showListenButton": {"type": "bool", "id": 24},
                                                "validShowM": {"type": "int64", "id": 25},
                                                "validShowN": {"type": "int64", "id": 26},
                                                "dmTreasureBoxControl": {"type": "bool", "id": 27}
                                            }
                                        },
                                        "ListenerConfig": {
                                            "fields": {
                                                "jumpStyle": {"type": "int64", "id": 1},
                                                "guideBar": {"type": "ListenerGuideBar", "id": 2}
                                            }
                                        },
                                        "ListenerGuideBar": {
                                            "fields": {
                                                "showStrategy": {"type": "int64", "id": 1},
                                                "icon": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3},
                                                "btnText": {"type": "string", "id": 4},
                                                "showTime": {"type": "int64", "id": 5},
                                                "backgroundTime": {"type": "int64", "id": 6}
                                            }
                                        },
                                        "Interaction": {
                                            "fields": {
                                                "historyNode": {"type": "Node", "id": 1},
                                                "graphVersion": {"type": "int64", "id": 2},
                                                "msg": {"type": "string", "id": 3},
                                                "evaluation": {"type": "string", "id": 4},
                                                "mark": {"type": "int64", "id": 5}
                                            }
                                        },
                                        "Node": {
                                            "fields": {
                                                "nodeId": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "cid": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "CustomConfig": {"fields": {"redirectUrl": {"type": "string", "id": 1}}},
                                        "CMConfig": {
                                            "fields": {
                                                "adsControl": {
                                                    "type": "google.protobuf.Any",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "Tab": {
                                            "fields": {
                                                "background": {"type": "string", "id": 1},
                                                "otype": {"type": "TabOtype", "id": 2},
                                                "oid": {"type": "int64", "id": 3},
                                                "uri": {"type": "string", "id": 4},
                                                "style": {"type": "TabStyle", "id": 5},
                                                "text": {"type": "string", "id": 6},
                                                "textColor": {"type": "string", "id": 7},
                                                "textColorSelected": {"type": "string", "id": 8},
                                                "pic": {"type": "string", "id": 9},
                                                "id": {"type": "int64", "id": 10},
                                                "adTabInfo": {"type": "google.protobuf.Any", "id": 11}
                                            }
                                        },
                                        "TabOtype": {"values": {"UnknownOtype": 0, "URL": 1, "TopicNA": 2, "CmURI": 3}},
                                        "TabStyle": {"values": {"UnknownStyle": 0, "Text": 1, "Pic": 2}},
                                        "Rank": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "iconNight": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3}
                                            }
                                        },
                                        "TFPanelCustomized": {
                                            "fields": {
                                                "rightBtnImg": {"type": "string", "id": 1},
                                                "rightBtnText": {"type": "string", "id": 2},
                                                "rightBtnTextColor": {"type": "string", "id": 3},
                                                "rightBtnLink": {"type": "string", "id": 4},
                                                "mainLabel": {"type": "string", "id": 5},
                                                "operator": {"type": "string", "id": 6},
                                                "subPanel": {"keyType": "string", "type": "subTFPanel", "id": 7}
                                            }
                                        },
                                        "subTFPanel": {
                                            "fields": {
                                                "rightBtnImg": {"type": "string", "id": 1},
                                                "rightBtnText": {"type": "string", "id": 2},
                                                "rightBtnTextColor": {"type": "string", "id": 3},
                                                "rightBtnLink": {"type": "string", "id": 4},
                                                "mainLabel": {"type": "string", "id": 5},
                                                "operator": {"type": "string", "id": 6}
                                            }
                                        },
                                        "UpAct": {
                                            "fields": {
                                                "sid": {"type": "int64", "id": 1},
                                                "mid": {"type": "int64", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "statement": {"type": "string", "id": 4},
                                                "image": {"type": "string", "id": 5},
                                                "url": {"type": "string", "id": 6},
                                                "button": {"type": "string", "id": 7}
                                            }
                                        },
                                        "UserGarb": {
                                            "fields": {
                                                "urlImageAniCut": {"type": "string", "id": 1},
                                                "likeToast": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ActivitySeason": {
                                            "fields": {
                                                "arc": {"type": "bilibili.app.archive.v1.Arc", "id": 1},
                                                "pages": {"rule": "repeated", "type": "ViewPage", "id": 2},
                                                "ownerExt": {"type": "OnwerExt", "id": 3},
                                                "reqUser": {"type": "ReqUser", "id": 4},
                                                "elecRank": {"type": "ElecRank", "id": 5},
                                                "history": {"type": "History", "id": 6},
                                                "bvid": {"type": "string", "id": 7},
                                                "honor": {"type": "Honor", "id": 8},
                                                "staff": {"rule": "repeated", "type": "Staff", "id": 9},
                                                "ugcSeason": {"type": "UgcSeason", "id": 10},
                                                "tab": {"type": "Tab", "id": 11},
                                                "rank": {"type": "Rank", "id": 12},
                                                "order": {"type": "Order", "id": 13},
                                                "supportDislike": {"type": "bool", "id": 14},
                                                "operationRelate": {"type": "OperationRelate", "id": 15},
                                                "activityResource": {"type": "ActivityResource", "id": 16},
                                                "shortLink": {"type": "string", "id": 17},
                                                "label": {"type": "Label", "id": 18},
                                                "dislike": {"type": "Dislike", "id": 19},
                                                "playerIcon": {"type": "PlayerIcon", "id": 20},
                                                "shareSubtitle": {"type": "string", "id": 21},
                                                "cmConfig": {"type": "CMConfig", "id": 22},
                                                "tfPanelCustomized": {"type": "TFPanelCustomized", "id": 23},
                                                "argueMsg": {"type": "string", "id": 24},
                                                "ecode": {"type": "ECode", "id": 25},
                                                "customConfig": {"type": "CustomConfig", "id": 26},
                                                "badgeUrl": {"type": "string", "id": 27},
                                                "descV2": {"rule": "repeated", "type": "DescV2", "id": 28},
                                                "config": {"type": "Config", "id": 29},
                                                "online": {"type": "Online", "id": 30},
                                                "arcExtra": {"type": "ArcExtra", "id": 31},
                                                "replyPreface": {"type": "ReplyStyle", "id": 32},
                                                "upLikeImg": {"type": "UpLikeImg", "id": 33},
                                                "specialCellNew": {"rule": "repeated", "type": "SpecialCell", "id": 34},
                                                "likeAnimation": {"type": "LikeAnimation", "id": 35},
                                                "userGarb": {"type": "UserGarb", "id": 36},
                                                "controlConfig": {"type": "ControlConfig", "id": 37},
                                                "coinStyle": {"type": "CoinStyle", "id": 38},
                                                "rabbitYear": {"type": "RabbitYear", "id": 39}
                                            }
                                        },
                                        "Order": {
                                            "oneofs": {"orderParam": {"oneof": ["reserve", "favSeason"]}},
                                            "fields": {
                                                "status": {"type": "bool", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "buttonTitle": {"type": "string", "id": 3},
                                                "buttonSelectedTitle": {"type": "string", "id": 4},
                                                "seasonStatView": {"type": "int64", "id": 5},
                                                "seasonStatDanmaku": {"type": "int64", "id": 6},
                                                "orderType": {"type": "BizType", "id": 7},
                                                "reserve": {"type": "BizReserveActivityParam", "id": 8},
                                                "favSeason": {"type": "BizFavSeasonParam", "id": 9},
                                                "intro": {"type": "string", "id": 10}
                                            }
                                        },
                                        "BizType": {
                                            "values": {
                                                "BizTypeNone": 0,
                                                "BizTypeFollowVideo": 1,
                                                "BizTypeReserveActivity": 2,
                                                "BizTypeJumpLink": 3,
                                                "BizTypeFavSeason": 4,
                                                "BizTypeReserveGame": 5
                                            }
                                        },
                                        "BizReserveActivityParam": {
                                            "fields": {
                                                "activityId": {"type": "int64", "id": 1},
                                                "from": {"type": "string", "id": 2},
                                                "type": {"type": "string", "id": 3},
                                                "oid": {"type": "int64", "id": 4},
                                                "reserveId": {"type": "int64", "id": 5}
                                            }
                                        },
                                        "BizFavSeasonParam": {"fields": {"seasonId": {"type": "int64", "id": 1}}},
                                        "OperationRelate": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "relateItem": {"rule": "repeated", "type": "RelateItem", "id": 2},
                                                "aiRelateItem": {"rule": "repeated", "type": "Relate", "id": 3}
                                            }
                                        },
                                        "RelateItem": {
                                            "fields": {
                                                "url": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "useDefaultBrowser": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "ActivityResource": {
                                            "fields": {
                                                "modPoolName": {"type": "string", "id": 1},
                                                "modResourceName": {"type": "string", "id": 2},
                                                "bgColor": {"type": "string", "id": 3},
                                                "selectedBgColor": {"type": "string", "id": 4},
                                                "textColor": {"type": "string", "id": 5},
                                                "lightTextColor": {"type": "string", "id": 6},
                                                "darkTextColor": {"type": "string", "id": 7},
                                                "dividerColor": {"type": "string", "id": 8}
                                            }
                                        },
                                        "GoodsInfo": {
                                            "fields": {
                                                "goodsId": {"type": "string", "id": 1},
                                                "category": {"type": "Category", "id": 2},
                                                "goodsPrice": {"type": "int64", "id": 3},
                                                "payState": {"type": "PayState", "id": 4},
                                                "goodsName": {"type": "string", "id": 5},
                                                "priceFmt": {"type": "string", "id": 6}
                                            }
                                        },
                                        "Category": {"values": {"CategoryUnknown": 0, "CategorySeason": 1}},
                                        "PayState": {"values": {"PayStateUnknown": 0, "PayStateActive": 1}},
                                        "ButtonStyle": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "textColor": {"type": "string", "id": 2},
                                                "textColorNight": {"type": "string", "id": 3},
                                                "bgColor": {"type": "string", "id": 4},
                                                "bgColorNight": {"type": "string", "id": 5},
                                                "jumpLink": {"type": "string", "id": 6}
                                            }
                                        },
                                        "UgcSeasonActivity": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "oid": {"type": "int64", "id": 2},
                                                "activityId": {"type": "int64", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "intro": {"type": "string", "id": 5},
                                                "dayCount": {"type": "int32", "id": 6},
                                                "userCount": {"type": "int32", "id": 7},
                                                "joinDeadline": {"type": "int64", "id": 8},
                                                "activityDeadline": {"type": "int64", "id": 9},
                                                "checkinViewTime": {"type": "int32", "id": 10},
                                                "newActivity": {"type": "bool", "id": 11},
                                                "userActivity": {"type": "UserActivity", "id": 12},
                                                "seasonShow": {"type": "SeasonShow", "id": 13}
                                            }
                                        },
                                        "UserActivity": {
                                            "fields": {
                                                "userState": {"type": "int32", "id": 1},
                                                "lastCheckinDate": {"type": "int64", "id": 2},
                                                "checkinToday": {"type": "int32", "id": 3},
                                                "userDayCount": {"type": "int32", "id": 4},
                                                "userViewTime": {"type": "int32", "id": 5},
                                                "portrait": {"type": "string", "id": 6}
                                            }
                                        },
                                        "SeasonShow": {
                                            "fields": {
                                                "buttonText": {"type": "string", "id": 1},
                                                "joinText": {"type": "string", "id": 2},
                                                "ruleText": {"type": "string", "id": 3},
                                                "checkinText": {"type": "string", "id": 4},
                                                "checkinPrompt": {"type": "string", "id": 5}
                                            }
                                        },
                                        "PullClientAction": {
                                            "fields": {
                                                "type": {"type": "string", "id": 1},
                                                "pullAction": {"type": "bool", "id": 2},
                                                "params": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ArcExtra": {"fields": {"arcPubLocation": {"type": "string", "id": 1}}},
                                        "PaginationReply": {
                                            "fields": {
                                                "next": {"type": "string", "id": 1},
                                                "prev": {"type": "string", "id": 2}
                                            }
                                        },
                                        "LikeAnimation": {
                                            "fields": {
                                                "likeIcon": {"type": "string", "id": 1},
                                                "likedIcon": {"type": "string", "id": 2},
                                                "likeAnimation": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ReplyStyle": {
                                            "fields": {
                                                "badgeUrl": {"type": "string", "id": 1},
                                                "badgeText": {"type": "string", "id": 2},
                                                "badgeType": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "RefreshPage": {
                                            "fields": {
                                                "refreshable": {"type": "int32", "id": 1},
                                                "refreshIcon": {"type": "int32", "id": 2},
                                                "refreshText": {"type": "string", "id": 3},
                                                "refreshShow": {"type": "float", "id": 4}
                                            }
                                        },
                                        "ControlConfig": {
                                            "fields": {
                                                "likeShow": {"type": "Control", "id": 1},
                                                "dislikeShow": {"type": "Control", "id": 2},
                                                "coinShow": {"type": "Control", "id": 3},
                                                "favShow": {"type": "Control", "id": 4},
                                                "shareShow": {"type": "Control", "id": 5},
                                                "toastShow": {"type": "Control", "id": 6},
                                                "materialShow": {"type": "Control", "id": 7},
                                                "danmuShow": {"type": "Control", "id": 8}
                                            }
                                        },
                                        "Control": {"fields": {"limit": {"type": "bool", "id": 1}}},
                                        "WikiInfo": {
                                            "fields": {
                                                "wikiLabel": {"type": "string", "id": 1},
                                                "wikiUrl": {"type": "string", "id": 2}
                                            }
                                        },
                                        "LiveInfo": {
                                            "fields": {
                                                "areaName": {"type": "string", "id": 1},
                                                "watchedShow": {"type": "int64", "id": 2},
                                                "liveStatus": {"type": "int64", "id": 3},
                                                "iconType": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "LikeComment": {
                                            "fields": {
                                                "reply": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "UpViewMaterial": {
                                            "fields": {
                                                "likeInfo": {"type": "InteractArea", "id": 1},
                                                "dataCenterInfo": {"type": "string", "id": 2}
                                            }
                                        },
                                        "InteractArea": {
                                            "fields": {
                                                "list": {
                                                    "rule": "repeated",
                                                    "type": "User",
                                                    "id": 1
                                                }, "text": {"type": "string", "id": 2}
                                            }
                                        },
                                        "User": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "face": {"type": "string", "id": 3},
                                                "follower": {"type": "int64", "id": 4},
                                                "isAttention": {"type": "int64", "id": 5},
                                                "isInterrelation": {"type": "int64", "id": 6},
                                                "isFollow": {"type": "int64", "id": 7},
                                                "interactDesc": {"type": "string", "id": 8}
                                            }
                                        },
                                        "UserRelation": {"fields": {"likeInfo": {"type": "InteractArea", "id": 1}}},
                                        "CoinStyle": {
                                            "fields": {
                                                "coinAppZipIcon": {"type": "string", "id": 1},
                                                "coinAppIcon1": {"type": "string", "id": 2},
                                                "coinAppIcon2": {"type": "string", "id": 3},
                                                "coinAppIcon3": {"type": "string", "id": 4},
                                                "coinAppIcon4": {"type": "string", "id": 5}
                                            }
                                        },
                                        "RabbitYear": {
                                            "fields": {
                                                "playerAutomate": {"type": "PlayerAutomate", "id": 1},
                                                "dmSummon": {"type": "DmSummon", "id": 2},
                                                "halfScreen": {"type": "HalfScreen", "id": 3},
                                                "specialDm": {"type": "SpecialDm", "id": 4}
                                            }
                                        },
                                        "PlayerAutomate": {
                                            "fields": {
                                                "dailyMax": {"type": "int64", "id": 1},
                                                "url": {"type": "string", "id": 2}
                                            }
                                        },
                                        "DmSummon": {
                                            "fields": {
                                                "title": {
                                                    "rule": "repeated",
                                                    "type": "string",
                                                    "id": 1
                                                },
                                                "url": {"type": "string", "id": 2},
                                                "errMsg": {"type": "string", "id": 3},
                                                "longContent": {"type": "string", "id": 4},
                                                "shortContent": {"type": "string", "id": 5}
                                            }
                                        },
                                        "HalfScreen": {
                                            "fields": {
                                                "dailyMax": {"type": "int64", "id": 1},
                                                "url": {"type": "string", "id": 2}
                                            }
                                        },
                                        "SpecialDm": {
                                            "fields": {
                                                "start": {"type": "int64", "id": 1},
                                                "end": {"type": "int64", "id": 2},
                                                "isDisplay": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "CellFluid": {
                                            "fields": {
                                                "topBaseColor": {"type": "string", "id": 1},
                                                "topSplitColor": {"type": "string", "id": 2},
                                                "topTextColor": {"type": "string", "id": 3}
                                            }
                                        },
                                        "NftFaceIcon": {
                                            "fields": {
                                                "regionType": {"type": "int32", "id": 1},
                                                "icon": {"type": "string", "id": 2},
                                                "showStatus": {"type": "int32", "id": 3}
                                            }
                                        },
                                        "IconData": {
                                            "fields": {
                                                "metaJson": {"type": "string", "id": 1},
                                                "spritsImg": {"type": "string", "id": 2}
                                            }
                                        }
                                    }
                                }
                            }
                        }, "viewunite": {
                            "nested": {
                                "common": {
                                    "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                        "Owner": {
                                            "fields": {
                                                "avatar": {
                                                    "type": "bilibili.dagw.component.avatar.v1.AvatarItem",
                                                    "id": 1
                                                },
                                                "url": {"type": "string", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "fans": {"type": "string", "id": 4},
                                                "arcCount": {"type": "string", "id": 5},
                                                "attention": {"type": "int32", "id": 6},
                                                "attentionRelation": {"type": "AttentionRelationStatus", "id": 7},
                                                "pubLocation": {"type": "string", "id": 8},
                                                "vip": {"type": "Vip", "id": 9},
                                                "titleUrl": {"type": "string", "id": 10},
                                                "face": {"type": "string", "id": 11},
                                                "mid": {"type": "int64", "id": 12},
                                                "officialVerify": {"type": "OfficialVerify", "id": 13},
                                                "live": {"type": "Live", "id": 14},
                                                "fansNum": {"type": "int64", "id": 15},
                                                "assists": {"rule": "repeated", "type": "int64", "id": 16}
                                            }
                                        },
                                        "UgcIntroduction": {
                                            "fields": {
                                                "tags": {
                                                    "rule": "repeated",
                                                    "type": "Tag",
                                                    "id": 1
                                                },
                                                "rating": {"type": "Rating", "id": 2},
                                                "rank": {"type": "Rank", "id": 3},
                                                "bgm": {"rule": "repeated", "type": "ViewMaterial", "id": 4},
                                                "sticker": {"rule": "repeated", "type": "ViewMaterial", "id": 5},
                                                "videoSource": {"rule": "repeated", "type": "ViewMaterial", "id": 6},
                                                "pubdate": {"type": "int64", "id": 7},
                                                "desc": {"rule": "repeated", "type": "DescV2", "id": 8}
                                            }
                                        },
                                        "AttentionRelationStatus": {
                                            "values": {
                                                "ARS_NONE": 0,
                                                "ARS_N0RELATION": 1,
                                                "ARS_FOLLOWHIM": 2,
                                                "ARS_FOLLOWME": 3,
                                                "ARS_BUDDY": 4,
                                                "ARS_SPECIAL": 5,
                                                "ARS_CANCELBLOCK": 6
                                            }
                                        },
                                        "Stat": {
                                            "fields": {
                                                "vt": {"type": "StatInfo", "id": 1},
                                                "danmaku": {"type": "StatInfo", "id": 2},
                                                "reply": {"type": "int64", "id": 3},
                                                "fav": {"type": "int64", "id": 4},
                                                "coin": {"type": "int64", "id": 5},
                                                "share": {"type": "int64", "id": 6},
                                                "like": {"type": "int64", "id": 7},
                                                "follow": {"type": "int64", "id": 8}
                                            }
                                        },
                                        "StatInfo": {
                                            "fields": {
                                                "value": {"type": "int64", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "pureText": {"type": "string", "id": 3},
                                                "icon": {"type": "string", "id": 4}
                                            }
                                        },
                                        "Module": {
                                            "oneofs": {"data": {"oneof": ["ogvIntroduction", "ugcIntroduction", "kingPosition", "headline", "ogvTitle", "honor", "userList", "staffs", "activityReserve", "liveOrder", "sectionData", "deliveryData", "followLayer", "ogvSeasons", "ugcSeasons", "ogvLiveReserve", "combinationEp", "sponsor", "activityEntranceModule", "serialSeason", "relates", "banner", "audio", "likeComment"]}},
                                            "fields": {
                                                "type": {"type": "ModuleType", "id": 1},
                                                "ogvIntroduction": {"type": "OgvIntroduction", "id": 2},
                                                "ugcIntroduction": {"type": "UgcIntroduction", "id": 3},
                                                "kingPosition": {"type": "KingPosition", "id": 4},
                                                "headline": {"type": "Headline", "id": 5},
                                                "ogvTitle": {"type": "OgvTitle", "id": 6},
                                                "honor": {"type": "Honor", "id": 7},
                                                "userList": {"type": "UserList", "id": 8},
                                                "staffs": {"type": "Staffs", "id": 9},
                                                "activityReserve": {"type": "ActivityReserve", "id": 10},
                                                "liveOrder": {"type": "LiveOrder", "id": 11},
                                                "sectionData": {"type": "SectionData", "id": 12},
                                                "deliveryData": {"type": "DeliveryData", "id": 13},
                                                "followLayer": {"type": "FollowLayer", "id": 14},
                                                "ogvSeasons": {"type": "OgvSeasons", "id": 15},
                                                "ugcSeasons": {"type": "UgcSeasons", "id": 16},
                                                "ogvLiveReserve": {"type": "OgvLiveReserve", "id": 17},
                                                "combinationEp": {"type": "CombinationEp", "id": 18},
                                                "sponsor": {"type": "Sponsor", "id": 19},
                                                "activityEntranceModule": {"type": "ActivityEntranceModule", "id": 20},
                                                "serialSeason": {"type": "SerialSeason", "id": 21},
                                                "relates": {"type": "Relates", "id": 22},
                                                "banner": {"type": "Banner", "id": 23},
                                                "audio": {"type": "Audio", "id": 24},
                                                "likeComment": {"type": "LikeComment", "id": 25}
                                            }
                                        },
                                        "OgvIntroduction": {
                                            "fields": {
                                                "followers": {"type": "string", "id": 1},
                                                "score": {"type": "string", "id": 2},
                                                "playData": {"type": "StatInfo", "id": 3}
                                            }
                                        },
                                        "ModuleType": {
                                            "values": {
                                                "UNKNOWN": 0,
                                                "OGV_INTRODUCTION": 1,
                                                "OGV_TITLE": 2,
                                                "UGC_HEADLINE": 3,
                                                "UGC_INTRODUCTION": 4,
                                                "KING_POSITION": 5,
                                                "MASTER_USER_LIST": 6,
                                                "STAFFS": 7,
                                                "HONOR": 8,
                                                "OWNER": 9,
                                                "PAGE": 10,
                                                "ACTIVITY_RESERVE": 11,
                                                "LIVE_ORDER": 12,
                                                "POSITIVE": 13,
                                                "SECTION": 14,
                                                "RELATE": 15,
                                                "PUGV": 16,
                                                "COLLECTION_CARD": 17,
                                                "ACTIVITY": 18,
                                                "CHARACTER": 19,
                                                "FOLLOW_LAYER": 20,
                                                "OGV_SEASONS": 21,
                                                "UGC_SEASON": 22,
                                                "OGV_LIVE_RESERVE": 23,
                                                "COMBINATION_EPISODE": 24,
                                                "SPONSOR": 25,
                                                "ACTIVITY_ENTRANCE": 26,
                                                "THEATRE_HOT_TOPIC": 27,
                                                "RELATED_RECOMMEND": 28,
                                                "PAY_BAR": 29,
                                                "BANNER": 30,
                                                "AUDIO": 31,
                                                "AGG_CARD": 32,
                                                "SINGLE_EP": 33,
                                                "LIKE_COMMENT": 34,
                                                "ATTENTION_RECOMMEND": 35,
                                                "COVENANTER": 36
                                            }
                                        },
                                        "Tag": {
                                            "fields": {
                                                "tagId": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "tagType": {"type": "string", "id": 4}
                                            }
                                        },
                                        "Rating": {
                                            "fields": {
                                                "score": {"type": "string", "id": 1},
                                                "count": {"type": "int32", "id": 2}
                                            }
                                        },
                                        "Rank": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "iconNight": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ViewMaterial": {
                                            "fields": {
                                                "oid": {"type": "int64", "id": 1},
                                                "mid": {"type": "int64", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "author": {"type": "string", "id": 4},
                                                "jumpUrl": {"type": "string", "id": 5}
                                            }
                                        },
                                        "DescV2": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "type": {"type": "DescType", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "rid": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "DescType": {
                                            "values": {
                                                "DescTypeUnknown": 0,
                                                "DescTypeText": 1,
                                                "DescTypeAt": 2
                                            }
                                        },
                                        "KingPosition": {
                                            "fields": {
                                                "kingPos": {
                                                    "rule": "repeated",
                                                    "type": "KingPos",
                                                    "id": 1
                                                }, "extend": {"rule": "repeated", "type": "KingPos", "id": 2}
                                            }
                                        },
                                        "KingPos": {
                                            "oneofs": {"extend": {"oneof": ["likeExtend", "coinExtend"]}},
                                            "fields": {
                                                "disable": {"type": "bool", "id": 1},
                                                "icon": {"type": "string", "id": 2},
                                                "kingPositionType": {"type": "KingPositionType", "id": 3},
                                                "disableToast": {"type": "string", "id": 4},
                                                "checkedToast": {"type": "string", "id": 5},
                                                "likeExtend": {"type": "LikeExtend", "id": 6},
                                                "coinExtend": {"type": "CoinExtend", "id": 7}
                                            }
                                        },
                                        "KingPositionType": {
                                            "values": {
                                                "KING_POS_UNSPECIFIED": 0,
                                                "LIKE": 1,
                                                "DISLIKE": 2,
                                                "COIN": 3,
                                                "FAV": 4,
                                                "SHARE": 5,
                                                "CACHE": 6,
                                                "DANMAKU": 7
                                            }
                                        },
                                        "CoinExtend": {
                                            "fields": {
                                                "coinAppZipIcon": {"type": "string", "id": 1},
                                                "coinAppIcon1": {"type": "string", "id": 2},
                                                "coinAppIcon2": {"type": "string", "id": 3},
                                                "coinAppIcon3": {"type": "string", "id": 4},
                                                "coinAppIcon4": {"type": "string", "id": 5}
                                            }
                                        },
                                        "LikeExtend": {
                                            "fields": {
                                                "tripleLike": {"type": "UpLikeImg", "id": 1},
                                                "likeAnimation": {"type": "string", "id": 2},
                                                "playerAnimation": {"type": "PlayerAnimation", "id": 3},
                                                "resource": {"type": "ActivityResource", "id": 4}
                                            }
                                        },
                                        "UpLikeImg": {
                                            "fields": {
                                                "preImg": {"type": "string", "id": 1},
                                                "sucImg": {"type": "string", "id": 2},
                                                "content": {"type": "string", "id": 3},
                                                "type": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "PlayerAnimation": {
                                            "fields": {
                                                "playerIcon": {"type": "string", "id": 1},
                                                "playerTripleIcon": {"type": "string", "id": 2}
                                            }
                                        },
                                        "ActivityResource": {
                                            "fields": {
                                                "modPoolName": {"type": "string", "id": 1},
                                                "modResourceName": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Headline": {
                                            "fields": {
                                                "label": {"type": "Label", "id": 1},
                                                "content": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Label": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "iconNight": {"type": "string", "id": 4},
                                                "iconWidth": {"type": "int64", "id": 5},
                                                "iconHeight": {"type": "int64", "id": 6},
                                                "lottie": {"type": "string", "id": 7},
                                                "lottieNight": {"type": "string", "id": 8}
                                            }
                                        },
                                        "OgvTitle": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "badgeInfo": {"type": "BadgeInfo", "id": 2},
                                                "isShowBtnAnimation": {"type": "int32", "id": 3},
                                                "followVideoIsReserveLive": {"type": "int32", "id": 4},
                                                "reserveId": {"type": "int64", "id": 5},
                                                "titleDeliveryButton": {"type": "TitleDeliveryButton", "id": 6}
                                            }
                                        },
                                        "BadgeInfo": {
                                            "fields": {
                                                "text": {"type": "string", "id": 1},
                                                "textColor": {"type": "string", "id": 2},
                                                "textColorNight": {"type": "string", "id": 3},
                                                "bgColor": {"type": "string", "id": 4},
                                                "bgColorNight": {"type": "string", "id": 5},
                                                "borderColor": {"type": "string", "id": 6},
                                                "borderColorNight": {"type": "string", "id": 7},
                                                "bgStyle": {"type": "int32", "id": 8},
                                                "img": {"type": "string", "id": 9},
                                                "type": {"type": "int32", "id": 10}
                                            }
                                        },
                                        "TitleDeliveryButton": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "link": {"type": "string", "id": 3},
                                                "report": {"keyType": "string", "type": "string", "id": 4}
                                            }
                                        },
                                        "Honor": {
                                            "fields": {
                                                "icon": {"type": "string", "id": 1},
                                                "iconNight": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3},
                                                "textExtra": {"type": "string", "id": 4},
                                                "textColor": {"type": "string", "id": 5},
                                                "textColorNight": {"type": "string", "id": 6},
                                                "bgColor": {"type": "string", "id": 7},
                                                "bgColorNight": {"type": "string", "id": 8},
                                                "url": {"type": "string", "id": 9},
                                                "urlText": {"type": "string", "id": 10},
                                                "type": {"type": "HonorType", "id": 11},
                                                "honorJumpType": {"type": "HonorJumpType", "id": 12},
                                                "report": {"keyType": "string", "type": "string", "id": 13}
                                            }
                                        },
                                        "HonorJumpType": {
                                            "values": {
                                                "HONOR_JUMP_TYPE_UNKNOWN": 0,
                                                "HONOR_OPEN_URL": 1,
                                                "HONOR_HALF_SCREEN": 2
                                            }
                                        },
                                        "HonorType": {
                                            "values": {
                                                "HONOR_NONE": 0,
                                                "PLAYLET": 1,
                                                "ARGUE": 2,
                                                "NOTICE": 3,
                                                "GUIDANCE": 4,
                                                "HONOR_BILI_RANK": 5,
                                                "HONOR_WEEKLY_RANK": 6,
                                                "HONOR_DAILY_RANK": 7,
                                                "HONOR_CHANNEL": 8,
                                                "HONOR_MUSIC": 9,
                                                "HONOR_REPLY": 10
                                            }
                                        },
                                        "UserList": {
                                            "fields": {
                                                "list": {"rule": "repeated", "type": "User", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "User": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "face": {"type": "string", "id": 3},
                                                "follower": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "Staffs": {
                                            "fields": {
                                                "staff": {"rule": "repeated", "type": "Staff", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Staff": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "attention": {"type": "int32", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "name": {"type": "string", "id": 4},
                                                "face": {"type": "string", "id": 5},
                                                "official": {"type": "OfficialVerify", "id": 6},
                                                "vip": {"type": "Vip", "id": 7},
                                                "labelStyle": {"type": "int32", "id": 8},
                                                "fans": {"type": "string", "id": 9}
                                            }
                                        },
                                        "OfficialVerify": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "desc": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Vip": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "vipStatus": {"type": "int32", "id": 2},
                                                "themeType": {"type": "int32", "id": 3},
                                                "label": {"type": "VipLabel", "id": 4},
                                                "isVip": {"type": "int32", "id": 5}
                                            }
                                        },
                                        "VipLabel": {
                                            "fields": {
                                                "path": {"type": "string", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "labelTheme": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ActivityReserve": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "vt": {"type": "StatInfo", "id": 2},
                                                "danmaku": {"type": "StatInfo", "id": 3},
                                                "button": {"type": "ReserveButton", "id": 4}
                                            }
                                        },
                                        "ReserveButton": {
                                            "oneofs": {"orderParam": {"oneof": ["bizReserveActivityParam", "bizFavParam"]}},
                                            "fields": {
                                                "status": {"type": "bool", "id": 1},
                                                "text": {"type": "string", "id": 3},
                                                "selectedText": {"type": "string", "id": 4},
                                                "orderType": {"type": "ReserveBizType", "id": 7},
                                                "bizReserveActivityParam": {"type": "BizReserveActivityParam", "id": 8},
                                                "bizFavParam": {"type": "BizFavParam", "id": 9}
                                            }
                                        },
                                        "ReserveBizType": {
                                            "values": {
                                                "BizTypeNone": 0,
                                                "BizTypeReserveActivity": 1,
                                                "BizTypeFavSeason": 2
                                            }
                                        },
                                        "BizReserveActivityParam": {
                                            "fields": {
                                                "activityId": {"type": "int64", "id": 1},
                                                "from": {"type": "string", "id": 2},
                                                "type": {"type": "string", "id": 3},
                                                "oid": {"type": "int64", "id": 4},
                                                "reserveId": {"type": "int64", "id": 5}
                                            }
                                        },
                                        "BizFavParam": {"fields": {"seasonId": {"type": "int64", "id": 1}}},
                                        "LiveOrder": {
                                            "fields": {
                                                "sid": {"type": "int64", "id": 1},
                                                "text": {"type": "string", "id": 2},
                                                "livePlanStartTime": {"type": "int64", "id": 3},
                                                "isFollow": {"type": "bool", "id": 4},
                                                "followCount": {"type": "int64", "id": 5}
                                            }
                                        },
                                        "SectionData": {
                                            "fields": {
                                                "id": {"type": "int32", "id": 1},
                                                "sectionId": {"type": "int32", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "canOrdDesc": {"type": "int32", "id": 4},
                                                "more": {"type": "string", "id": 5},
                                                "episodeIds": {"rule": "repeated", "type": "int32", "id": 6},
                                                "episodes": {"rule": "repeated", "type": "ViewEpisode", "id": 7},
                                                "splitText": {"type": "string", "id": 8},
                                                "moduleStyle": {"type": "Style", "id": 9},
                                                "moreBottomDesc": {"type": "string", "id": 10},
                                                "seasons": {"rule": "repeated", "type": "SerialSeason", "id": 11},
                                                "moreLeft": {"type": "Button", "id": 12},
                                                "type": {"type": "int32", "id": 13},
                                                "report": {"keyType": "string", "type": "string", "id": 14}
                                            }
                                        },
                                        "ViewEpisode": {
                                            "fields": {
                                                "epId": {"type": "int64", "id": 1},
                                                "badge": {"type": "string", "id": 2},
                                                "badgeType": {"type": "int32", "id": 3},
                                                "badgeInfo": {"type": "BadgeInfo", "id": 4},
                                                "duration": {"type": "int32", "id": 5},
                                                "status": {"type": "int32", "id": 6},
                                                "cover": {"type": "string", "id": 7},
                                                "aid": {"type": "int64", "id": 8},
                                                "title": {"type": "string", "id": 9},
                                                "movieTitle": {"type": "string", "id": 10},
                                                "subtitle": {"type": "string", "id": 11},
                                                "longTitle": {"type": "string", "id": 12},
                                                "toastTitle": {"type": "string", "id": 13},
                                                "cid": {"type": "int64", "id": 14},
                                                "from": {"type": "string", "id": 15},
                                                "shareUrl": {"type": "string", "id": 16},
                                                "shareCopy": {"type": "string", "id": 17},
                                                "shortLink": {"type": "string", "id": 18},
                                                "vid": {"type": "string", "id": 19},
                                                "releaseDate": {"type": "string", "id": 20},
                                                "dimension": {"type": "Dimension", "id": 21},
                                                "rights": {"type": "Rights", "id": 22},
                                                "interaction": {"type": "Interaction", "id": 23},
                                                "bvid": {"type": "string", "id": 24},
                                                "archiveAttr": {"type": "int32", "id": 25},
                                                "link": {"type": "string", "id": 26},
                                                "linkType": {"type": "string", "id": 27},
                                                "bmid": {"type": "string", "id": 28},
                                                "pubTime": {"type": "int64", "id": 29},
                                                "pv": {"type": "int32", "id": 30},
                                                "epIndex": {"type": "int32", "id": 31},
                                                "sectionIndex": {"type": "int32", "id": 32},
                                                "upInfos": {"rule": "repeated", "type": "Staff", "id": 33},
                                                "upInfo": {"type": "Staff", "id": 34},
                                                "dialogType": {"type": "string", "id": 35},
                                                "toastType": {"type": "string", "id": 36},
                                                "multiViewEps": {"rule": "repeated", "type": "MultiViewEp", "id": 37},
                                                "isSubView": {"type": "bool", "id": 38},
                                                "isViewHide": {"type": "bool", "id": 39},
                                                "jumpLink": {"type": "string", "id": 40},
                                                "statForUnity": {"type": "Stat", "id": 41},
                                                "report": {"keyType": "string", "type": "string", "id": 42}
                                            }
                                        },
                                        "Dimension": {
                                            "fields": {
                                                "width": {"type": "int64", "id": 1},
                                                "height": {"type": "int64", "id": 2},
                                                "rotate": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "Rights": {
                                            "fields": {
                                                "allowDownload": {"type": "int32", "id": 1},
                                                "allowReview": {"type": "int32", "id": 2},
                                                "canWatch": {"type": "int32", "id": 3},
                                                "resource": {"type": "string", "id": 4},
                                                "allowDm": {"type": "int32", "id": 5},
                                                "allowDemand": {"type": "int32", "id": 6},
                                                "areaLimit": {"type": "int32", "id": 7}
                                            }
                                        },
                                        "Interaction": {
                                            "fields": {
                                                "epId": {"type": "int64", "id": 1},
                                                "historyNode": {"type": "HistoryNode", "id": 2},
                                                "graphVersion": {"type": "int64", "id": 3},
                                                "msg": {"type": "string", "id": 4},
                                                "isInteraction": {"type": "bool", "id": 5}
                                            }
                                        },
                                        "HistoryNode": {
                                            "fields": {
                                                "nodeId": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "cid": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "Style": {
                                            "fields": {
                                                "line": {"type": "int32", "id": 1},
                                                "hidden": {"type": "int32", "id": 2},
                                                "showPages": {"rule": "repeated", "type": "string", "id": 3}
                                            }
                                        },
                                        "SerialSeason": {
                                            "fields": {
                                                "seasonId": {"type": "int32", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "seasonTitle": {"type": "string", "id": 3},
                                                "isNew": {"type": "int32", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "badge": {"type": "string", "id": 6},
                                                "badgeType": {"type": "int32", "id": 7},
                                                "badgeInfo": {"type": "BadgeInfo", "id": 8},
                                                "link": {"type": "string", "id": 9},
                                                "resource": {"type": "string", "id": 10},
                                                "newEp": {"type": "NewEp", "id": 11}
                                            }
                                        },
                                        "NewEp": {
                                            "fields": {
                                                "id": {"type": "int32", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "desc": {"type": "string", "id": 3},
                                                "isNew": {"type": "int32", "id": 4},
                                                "more": {"type": "string", "id": 5},
                                                "cover": {"type": "string", "id": 6},
                                                "indexShow": {"type": "string", "id": 7}
                                            }
                                        },
                                        "Button": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "leftStrikethroughText": {"type": "string", "id": 2},
                                                "type": {"type": "string", "id": 3},
                                                "link": {"type": "string", "id": 4},
                                                "badgeInfo": {"type": "BadgeInfo", "id": 5},
                                                "subTitle": {"type": "string", "id": 6}
                                            }
                                        },
                                        "DeliveryData": {
                                            "oneofs": {"data": {"oneof": ["activity", "characters", "theatreHotTopic", "aggEps"]}},
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "moduleStyle": {"type": "Style", "id": 2},
                                                "more": {"type": "string", "id": 3},
                                                "activity": {"type": "Activity", "id": 4},
                                                "characters": {"type": "Characters", "id": 5},
                                                "theatreHotTopic": {"type": "TheatreHotTopic", "id": 6},
                                                "aggEps": {"type": "AggEps", "id": 7},
                                                "id": {"type": "int32", "id": 8},
                                                "report": {"keyType": "string", "type": "string", "id": 9}
                                            }
                                        },
                                        "Activity": {
                                            "fields": {
                                                "id": {"type": "int32", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "link": {"type": "string", "id": 3},
                                                "cover": {"type": "string", "id": 4},
                                                "type": {"type": "int32", "id": 5},
                                                "ab": {"type": "string", "id": 6},
                                                "showName": {"type": "string", "id": 7},
                                                "picurl": {"type": "string", "id": 8},
                                                "picurlSelected": {"type": "string", "id": 9},
                                                "h5Link": {"type": "string", "id": 10},
                                                "jumpMode": {"type": "string", "id": 11},
                                                "items": {"rule": "repeated", "type": "Item", "id": 12}
                                            }
                                        },
                                        "Item": {
                                            "fields": {
                                                "link": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Characters": {
                                            "fields": {
                                                "groups": {
                                                    "rule": "repeated",
                                                    "type": "CharacterGroup",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "CharacterGroup": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "characters": {"rule": "repeated", "type": "Celebrity", "id": 2}
                                            }
                                        },
                                        "Celebrity": {
                                            "fields": {
                                                "id": {"type": "int32", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "role": {"type": "string", "id": 3},
                                                "avatar": {"type": "string", "id": 4},
                                                "shortDesc": {"type": "string", "id": 5},
                                                "desc": {"type": "string", "id": 6},
                                                "characterAvatar": {"type": "string", "id": 7},
                                                "link": {"type": "string", "id": 8},
                                                "mid": {"type": "int64", "id": 9},
                                                "isFollow": {"type": "int32", "id": 10},
                                                "occupationName": {"type": "string", "id": 11},
                                                "occupationType": {"type": "OccupationType", "id": 12},
                                                "relateAttr": {"type": "int32", "id": 13},
                                                "smallAvatar": {"type": "string", "id": 14},
                                                "report": {"keyType": "string", "type": "string", "id": 15}
                                            }
                                        },
                                        "OccupationType": {"values": {"STAFF": 0, "CAST": 1, "UNKNOWN_TYPE": -1}},
                                        "TheatreHotTopic": {
                                            "fields": {
                                                "theatreId": {"type": "int64", "id": 1},
                                                "theatreSetId": {"type": "int64", "id": 2},
                                                "theatreTitle": {"type": "string", "id": 3},
                                                "backgroundImageUrl": {"type": "string", "id": 4},
                                                "theatreUrl": {"type": "string", "id": 5},
                                                "hotTopicId": {"type": "int64", "id": 6},
                                                "hotTopicSetId": {"type": "int64", "id": 7},
                                                "hotTopicTitle": {"type": "string", "id": 8},
                                                "hotTopicUrl": {"type": "string", "id": 9},
                                                "isSubscribe": {"type": "int32", "id": 10},
                                                "report": {"keyType": "string", "type": "string", "id": 11}
                                            }
                                        },
                                        "AggEps": {
                                            "fields": {
                                                "aggEpCards": {
                                                    "rule": "repeated",
                                                    "type": "AggEpCard",
                                                    "id": 1
                                                }, "placeIndex": {"type": "int32", "id": 2}
                                            }
                                        },
                                        "AggEpCard": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "num": {"type": "int32", "id": 4},
                                                "jumpUrl": {"type": "string", "id": 5}
                                            }
                                        },
                                        "MultiViewEp": {"fields": {"epId": {"type": "int64", "id": 1}}},
                                        "FollowLayer": {
                                            "fields": {
                                                "staff": {"type": "Staff", "id": 1},
                                                "desc": {"type": "Desc", "id": 2},
                                                "report": {"keyType": "string", "type": "string", "id": 3}
                                            }
                                        },
                                        "Desc": {
                                            "fields": {
                                                "info": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "OgvSeasons": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "serialSeason": {"rule": "repeated", "type": "SerialSeason", "id": 2},
                                                "style": {"type": "SerialSeasonCoverStyle", "id": 3}
                                            }
                                        },
                                        "SerialSeasonCoverStyle": {
                                            "values": {
                                                "TITLE": 0,
                                                "PICTURE": 1,
                                                "SERIAL_SEASON_COVER_STYLE_UNKNOWN": -1
                                            }
                                        },
                                        "UgcSeasons": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "cover": {"type": "string", "id": 3},
                                                "supernatantTitle": {"type": "string", "id": 4},
                                                "section": {"rule": "repeated", "type": "UgcSection", "id": 5},
                                                "unionTitle": {"type": "string", "id": 6},
                                                "head": {"type": "SeasonHead", "id": 7},
                                                "epCount": {"type": "int64", "id": 8},
                                                "seasonType": {"type": "SeasonType", "id": 9},
                                                "activity": {"type": "UgcSeasonActivity", "id": 10},
                                                "seasonAbility": {"rule": "repeated", "type": "string", "id": 11},
                                                "seasonTitle": {"type": "string", "id": 12}
                                            }
                                        },
                                        "SeasonType": {"values": {"Unknown": 0, "Base": 1, "Good": 2}},
                                        "UgcSection": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "type": {"type": "int64", "id": 3},
                                                "episodes": {"rule": "repeated", "type": "UgcEpisode", "id": 4}
                                            }
                                        },
                                        "UgcEpisode": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "aid": {"type": "int64", "id": 2},
                                                "cid": {"type": "int64", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "cover": {"type": "string", "id": 5},
                                                "coverRightText": {"type": "string", "id": 6},
                                                "page": {"type": "Page", "id": 7},
                                                "vt": {"type": "StatInfo", "id": 8},
                                                "danmaku": {"type": "StatInfo", "id": 9}
                                            }
                                        },
                                        "Page": {
                                            "fields": {
                                                "cid": {"type": "int64", "id": 1},
                                                "part": {"type": "string", "id": 2},
                                                "duration": {"type": "int64", "id": 3},
                                                "desc": {"type": "string", "id": 4},
                                                "dimension": {"type": "Dimension", "id": 5},
                                                "dlTitle": {"type": "string", "id": 6},
                                                "dlSubtitle": {"type": "string", "id": 7}
                                            }
                                        },
                                        "SeasonHead": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "intro": {"type": "string", "id": 2},
                                                "vt": {"type": "StatInfo", "id": 3},
                                                "danmaku": {"type": "StatInfo", "id": 4}
                                            }
                                        },
                                        "UgcSeasonActivity": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "oid": {"type": "int64", "id": 2},
                                                "activityId": {"type": "int64", "id": 3},
                                                "title": {"type": "string", "id": 4},
                                                "intro": {"type": "string", "id": 5},
                                                "dayCount": {"type": "int32", "id": 6},
                                                "userCount": {"type": "int32", "id": 7},
                                                "joinDeadline": {"type": "int64", "id": 8},
                                                "activityDeadline": {"type": "int64", "id": 9},
                                                "checkinViewTime": {"type": "int32", "id": 10},
                                                "newActivity": {"type": "bool", "id": 11},
                                                "userActivity": {"type": "UserActivity", "id": 12},
                                                "seasonShow": {"type": "SeasonShow", "id": 13}
                                            }
                                        },
                                        "UserActivity": {
                                            "fields": {
                                                "userState": {"type": "int32", "id": 1},
                                                "lastCheckinDate": {"type": "int64", "id": 2},
                                                "checkinToday": {"type": "int32", "id": 3},
                                                "userDayCount": {"type": "int32", "id": 4},
                                                "userViewTime": {"type": "int32", "id": 5},
                                                "portrait": {"type": "string", "id": 6}
                                            }
                                        },
                                        "SeasonShow": {
                                            "fields": {
                                                "buttonText": {"type": "string", "id": 1},
                                                "joinText": {"type": "string", "id": 2},
                                                "ruleText": {"type": "string", "id": 3},
                                                "checkinText": {"type": "string", "id": 4},
                                                "checkinPrompt": {"type": "string", "id": 5}
                                            }
                                        },
                                        "OgvLiveReserve": {
                                            "fields": {
                                                "reserveId": {"type": "int64", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "nightIcon": {"type": "string", "id": 4},
                                                "clickButton": {"type": "string", "id": 5},
                                                "link": {"type": "string", "id": 6},
                                                "followVideoIsReserveLive": {"type": "int32", "id": 7},
                                                "bgColor": {"type": "string", "id": 8},
                                                "nightBgColor": {"type": "string", "id": 9},
                                                "textColor": {"type": "string", "id": 10},
                                                "nightTextColor": {"type": "string", "id": 11},
                                                "btBgColor": {"type": "string", "id": 12},
                                                "btFrameColor": {"type": "string", "id": 13},
                                                "nightBtBgColor": {"type": "string", "id": 14},
                                                "nightBtFrameColor": {"type": "string", "id": 15},
                                                "activeType": {"type": "int32", "id": 16},
                                                "reserveStatus": {"type": "int32", "id": 17},
                                                "btTextColor": {"type": "string", "id": 18},
                                                "nightBtTextColor": {"type": "string", "id": 19},
                                                "report": {"keyType": "string", "type": "string", "id": 20}
                                            }
                                        },
                                        "CombinationEp": {
                                            "fields": {
                                                "id": {"type": "int32", "id": 1},
                                                "sectionId": {"type": "int32", "id": 2},
                                                "title": {"type": "string", "id": 3},
                                                "canOrdDesc": {"type": "int32", "id": 4},
                                                "more": {"type": "string", "id": 5},
                                                "episodeIds": {"rule": "repeated", "type": "int32", "id": 6},
                                                "episodes": {"rule": "repeated", "type": "ViewEpisode", "id": 7},
                                                "splitText": {"type": "string", "id": 8},
                                                "moduleStyle": {"type": "Style", "id": 9},
                                                "serialSeason": {"rule": "repeated", "type": "SerialSeason", "id": 10},
                                                "sectionData": {"type": "SectionData", "id": 11}
                                            }
                                        },
                                        "Sponsor": {
                                            "fields": {
                                                "total": {"type": "int64", "id": 1},
                                                "week": {"type": "int64", "id": 2},
                                                "rankList": {"rule": "repeated", "type": "SponsorRank", "id": 3},
                                                "mine": {"type": "Mine", "id": 4},
                                                "pointActivity": {"type": "PointActivity", "id": 5},
                                                "pendants": {"rule": "repeated", "type": "Pendant", "id": 6},
                                                "threshold": {"rule": "repeated", "type": "Threshold", "id": 7}
                                            }
                                        },
                                        "SponsorRank": {
                                            "fields": {
                                                "uid": {"type": "int64", "id": 1},
                                                "msg": {"type": "string", "id": 2},
                                                "uname": {"type": "string", "id": 3},
                                                "face": {"type": "string", "id": 4},
                                                "vip": {"type": "Vip", "id": 5}
                                            }
                                        },
                                        "Mine": {
                                            "fields": {
                                                "amount": {"type": "double", "id": 1},
                                                "rank": {"type": "int32", "id": 2},
                                                "msg": {"type": "string", "id": 3}
                                            }
                                        },
                                        "PointActivity": {
                                            "fields": {
                                                "tip": {"type": "string", "id": 1},
                                                "content": {"type": "string", "id": 2},
                                                "link": {"type": "string", "id": 3}
                                            }
                                        },
                                        "Pendant": {
                                            "fields": {
                                                "pid": {"type": "int32", "id": 1},
                                                "name": {"type": "string", "id": 2},
                                                "image": {"type": "string", "id": 3}
                                            }
                                        },
                                        "Threshold": {
                                            "fields": {
                                                "bp": {"type": "int32", "id": 1},
                                                "days": {"type": "int32", "id": 2},
                                                "daysText": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ActivityEntranceModule": {
                                            "fields": {
                                                "activityEntrance": {
                                                    "rule": "repeated",
                                                    "type": "ActivityEntrance",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "ActivityEntrance": {
                                            "fields": {
                                                "activityCover": {"type": "string", "id": 1},
                                                "activityTitle": {"type": "string", "id": 2},
                                                "wordTag": {"type": "string", "id": 3},
                                                "activitySubtitle": {"type": "string", "id": 4},
                                                "activityLink": {"type": "string", "id": 5},
                                                "activityType": {"type": "int32", "id": 6},
                                                "reserveId": {"type": "int32", "id": 7},
                                                "status": {"type": "int32", "id": 8},
                                                "upperList": {"rule": "repeated", "type": "User", "id": 9},
                                                "report": {"keyType": "string", "type": "string", "id": 10}
                                            }
                                        },
                                        "Relates": {
                                            "fields": {
                                                "cards": {
                                                    "rule": "repeated",
                                                    "type": "RelateCard",
                                                    "id": 1
                                                }, "config": {"type": "RelateConfig", "id": 2}
                                            }
                                        },
                                        "RelateCard": {
                                            "oneofs": {"card": {"oneof": ["relateAVCard", "relateBangumiCard", "relateBangumiResourceCard", "relateGameCard", "relateCMCard", "relateLiveCard", "relateBangumiAvCard", "relatedAICard"]}},
                                            "fields": {
                                                "relateCardType": {"type": "RelateCardType", "id": 1},
                                                "relateAVCard": {"type": "RelateAVCard", "id": 2},
                                                "relateBangumiCard": {"type": "RelateBangumiCard", "id": 3},
                                                "relateBangumiResourceCard": {
                                                    "type": "RelateBangumiResourceCard",
                                                    "id": 4
                                                },
                                                "relateGameCard": {"type": "RelateGameCard", "id": 5},
                                                "relateCMCard": {"type": "RelateCMCard", "id": 6},
                                                "relateLiveCard": {"type": "RelateLiveCard", "id": 7},
                                                "relateBangumiAvCard": {"type": "RelateBangumiAvCard", "id": 8},
                                                "relatedAICard": {"type": "RelatedAICard", "id": 9},
                                                "threePoint": {"type": "RelateThreePoint", "id": 10},
                                                "cmStock": {"type": "google.protobuf.Any", "id": 11},
                                                "basicInfo": {"type": "CardBasicInfo", "id": 12}
                                            }
                                        },
                                        "RelateCardType": {
                                            "values": {
                                                "CARD_TYPE_UNKNOWN": 0,
                                                "AV": 1,
                                                "BANGUMI": 2,
                                                "RESOURCE": 3,
                                                "GAME": 4,
                                                "CM": 5,
                                                "LIVE": 6,
                                                "AI_RECOMMEND": 7,
                                                "BANGUMI_AV": 8,
                                                "BANGUMI_UGC": 9,
                                                "SPECIAL": 10
                                            }
                                        },
                                        "RelateAVCard": {
                                            "fields": {
                                                "duration": {"type": "int64", "id": 1},
                                                "cid": {"type": "int64", "id": 2},
                                                "dimension": {"type": "Dimension", "id": 3},
                                                "stat": {"type": "Stat", "id": 4},
                                                "jumpUrl": {"type": "string", "id": 5},
                                                "showUpName": {"type": "bool", "id": 6},
                                                "rcmdReason": {"type": "BadgeInfo", "id": 7}
                                            }
                                        },
                                        "RelateBangumiCard": {
                                            "fields": {
                                                "seasonId": {"type": "int32", "id": 1},
                                                "seasonType": {"type": "int32", "id": 2},
                                                "newEp": {"type": "NewEp", "id": 3},
                                                "stat": {"type": "Stat", "id": 4},
                                                "rating": {"type": "Rating", "id": 5},
                                                "rcmdReason": {"type": "string", "id": 6},
                                                "badgeInfo": {"type": "BadgeInfo", "id": 7},
                                                "gotoType": {"type": "string", "id": 8},
                                                "report": {"keyType": "string", "type": "string", "id": 9}
                                            }
                                        },
                                        "RelateBangumiResourceCard": {
                                            "fields": {
                                                "type": {"type": "int32", "id": 1},
                                                "scover": {"type": "string", "id": 2},
                                                "reType": {"type": "int32", "id": 3},
                                                "reValue": {"type": "string", "id": 4},
                                                "corner": {"type": "string", "id": 5},
                                                "card": {"type": "int32", "id": 6},
                                                "siz": {"type": "string", "id": 7},
                                                "position": {"type": "int32", "id": 8},
                                                "rcmdReason": {"type": "string", "id": 9},
                                                "label": {"type": "string", "id": 10},
                                                "report": {"keyType": "string", "type": "string", "id": 11},
                                                "gotoType": {"type": "string", "id": 12}
                                            }
                                        },
                                        "RelateGameCard": {
                                            "fields": {
                                                "reserveStatus": {"type": "int64", "id": 1},
                                                "reserveStatusText": {"type": "string", "id": 2},
                                                "reserve": {"type": "string", "id": 3},
                                                "rating": {"type": "float", "id": 4},
                                                "tagName": {"type": "string", "id": 5},
                                                "rankInfo": {"type": "RankInfo", "id": 6},
                                                "packInfo": {"type": "Button", "id": 7},
                                                "notice": {"type": "Button", "id": 8},
                                                "powerIconStyle": {"type": "PowerIconStyle", "id": 9},
                                                "gameRcmdReason": {"type": "string", "id": 10},
                                                "wikiInfo": {"type": "WikiInfo", "id": 11},
                                                "badge": {"type": "BadgeInfo", "id": 12}
                                            }
                                        },
                                        "RankInfo": {
                                            "fields": {
                                                "iconUrlNight": {"type": "string", "id": 1},
                                                "iconUrlDay": {"type": "string", "id": 2},
                                                "bkgNightColor": {"type": "string", "id": 3},
                                                "bkgDayColor": {"type": "string", "id": 4},
                                                "fontNightColor": {"type": "string", "id": 5},
                                                "fontDayColor": {"type": "string", "id": 6},
                                                "rankContent": {"type": "string", "id": 7},
                                                "rankLink": {"type": "string", "id": 8}
                                            }
                                        },
                                        "PowerIconStyle": {
                                            "fields": {
                                                "iconUrl": {"type": "string", "id": 1},
                                                "iconNightUrl": {"type": "string", "id": 2},
                                                "iconWidth": {"type": "int64", "id": 3},
                                                "iconHeight": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "WikiInfo": {
                                            "fields": {
                                                "wikiLabel": {"type": "string", "id": 1},
                                                "wikiUrl": {"type": "string", "id": 2}
                                            }
                                        },
                                        "RelateCMCard": {
                                            "fields": {
                                                "aid": {"type": "int64", "id": 1},
                                                "sourceContent": {"type": "google.protobuf.Any", "id": 2},
                                                "duration": {"type": "int64", "id": 3},
                                                "stat": {"type": "Stat", "id": 4}
                                            }
                                        },
                                        "RelateLiveCard": {
                                            "fields": {
                                                "iconType": {"type": "int64", "id": 1},
                                                "areaName": {"type": "string", "id": 2},
                                                "watchedShow": {"type": "int64", "id": 3},
                                                "liveStatus": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "RelateBangumiAvCard": {
                                            "fields": {
                                                "badge": {"type": "BadgeInfo", "id": 1},
                                                "stat": {"type": "Stat", "id": 2},
                                                "rating": {"type": "Rating", "id": 3}
                                            }
                                        },
                                        "RelatedAICard": {
                                            "fields": {
                                                "aid": {"type": "int64", "id": 1},
                                                "duration": {"type": "int64", "id": 2},
                                                "upInfo": {"type": "Staff", "id": 3},
                                                "stat": {"type": "Stat", "id": 4},
                                                "report": {"keyType": "string", "type": "string", "id": 5},
                                                "gotoType": {"type": "string", "id": 6}
                                            }
                                        },
                                        "RelateThreePoint": {
                                            "fields": {
                                                "dislike": {"type": "RelateDislike", "id": 1},
                                                "feedback": {"type": "RelateDislike", "id": 2},
                                                "watchLater": {"type": "bool", "id": 3},
                                                "dislikeReportData": {"type": "string", "id": 4}
                                            }
                                        },
                                        "RelateDislike": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "subTitle": {"type": "string", "id": 2},
                                                "closedSubTitle": {"type": "string", "id": 3},
                                                "pasteText": {"type": "string", "id": 4},
                                                "closedPasteText": {"type": "string", "id": 5},
                                                "dislikeReason": {
                                                    "rule": "repeated",
                                                    "type": "DislikeReasons",
                                                    "id": 6
                                                },
                                                "toast": {"type": "string", "id": 7},
                                                "closedToast": {"type": "string", "id": 8}
                                            }
                                        },
                                        "DislikeReasons": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "mid": {"type": "int64", "id": 2},
                                                "rid": {"type": "int32", "id": 3},
                                                "tagId": {"type": "int64", "id": 4},
                                                "name": {"type": "string", "id": 5}
                                            }
                                        },
                                        "CardBasicInfo": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "desc": {"type": "string", "id": 2},
                                                "cover": {"type": "string", "id": 3},
                                                "uri": {"type": "string", "id": 4},
                                                "trackId": {"type": "string", "id": 5},
                                                "uniqueId": {"type": "string", "id": 6},
                                                "fromSourceType": {"type": "int64", "id": 7},
                                                "fromSourceId": {"type": "string", "id": 8},
                                                "materialId": {"type": "int64", "id": 9},
                                                "coverGif": {"type": "string", "id": 10},
                                                "author": {"type": "Owner", "id": 11},
                                                "id": {"type": "int64", "id": 12},
                                                "from": {"type": "string", "id": 13},
                                                "fromSpmidSuffix": {"type": "string", "id": 14},
                                                "reportFlowData": {"type": "string", "id": 15}
                                            }
                                        },
                                        "RelateConfig": {
                                            "fields": {
                                                "validShowM": {"type": "int64", "id": 1},
                                                "validShowN": {"type": "int64", "id": 2},
                                                "pagination": {"type": "Pagination", "id": 3},
                                                "canLoadMore": {"type": "bool", "id": 4}
                                            }
                                        },
                                        "Pagination": {
                                            "fields": {
                                                "pageSize": {"type": "int32", "id": 1},
                                                "next": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Banner": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "relateItem": {"rule": "repeated", "type": "RelateItem", "id": 2}
                                            }
                                        },
                                        "RelateItem": {
                                            "fields": {
                                                "url": {"type": "string", "id": 1},
                                                "cover": {"type": "string", "id": 2},
                                                "useDefaultBrowser": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "Audio": {
                                            "fields": {
                                                "audioInfo": {
                                                    "keyType": "int64",
                                                    "type": "AudioInfo",
                                                    "id": 1
                                                }
                                            }
                                        },
                                        "AudioInfo": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "coverUrl": {"type": "string", "id": 2},
                                                "songId": {"type": "int64", "id": 3},
                                                "playCount": {"type": "int64", "id": 4},
                                                "replyCount": {"type": "int64", "id": 5},
                                                "upperId": {"type": "int64", "id": 6},
                                                "entrance": {"type": "string", "id": 7},
                                                "songAttr": {"type": "int64", "id": 8}
                                            }
                                        },
                                        "LikeComment": {
                                            "fields": {
                                                "reply": {"type": "string", "id": 1},
                                                "title": {"type": "string", "id": 2}
                                            }
                                        },
                                        "Live": {
                                            "fields": {
                                                "mid": {"type": "int64", "id": 1},
                                                "roomId": {"type": "int64", "id": 2},
                                                "uri": {"type": "string", "id": 3},
                                                "endpageUri": {"type": "string", "id": 4}
                                            }
                                        }
                                    }
                                }, "ugcanymodel": {
                                    "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                        "ViewUgcAny": {
                                            "fields": {
                                                "premiere": {"type": "PremiereResource", "id": 1},
                                                "dislike": {"type": "Dislike", "id": 2},
                                                "shortLink": {"type": "string", "id": 3},
                                                "shareSubtitle": {"type": "string", "id": 4},
                                                "pages": {
                                                    "rule": "repeated",
                                                    "type": "bilibili.app.viewunite.common.Page",
                                                    "id": 5
                                                },
                                                "elecRank": {"type": "ElecRank", "id": 6}
                                            }
                                        },
                                        "PremiereResource": {
                                            "fields": {
                                                "premiere": {"type": "Premiere", "id": 1},
                                                "reserve": {"type": "PremiereReserve", "id": 2},
                                                "text": {"type": "PremiereText", "id": 3}
                                            }
                                        },
                                        "Premiere": {
                                            "fields": {
                                                "premiereState": {"type": "PremiereState", "id": 1},
                                                "startTime": {"type": "int64", "id": 2},
                                                "serviceTime": {"type": "int64", "id": 3},
                                                "roomId": {"type": "int64", "id": 4}
                                            }
                                        },
                                        "PremiereState": {
                                            "values": {
                                                "premiere_none": 0,
                                                "premiere_before": 1,
                                                "premiere_in": 2,
                                                "premiere_after": 3
                                            }
                                        },
                                        "PremiereReserve": {
                                            "fields": {
                                                "reserveId": {"type": "int64", "id": 1},
                                                "count": {"type": "int64", "id": 2},
                                                "isFollow": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "PremiereText": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "subtitle": {"type": "string", "id": 2},
                                                "onlineText": {"type": "string", "id": 3},
                                                "onlineIcon": {"type": "string", "id": 4},
                                                "onlineIconDark": {"type": "string", "id": 5},
                                                "introTitle": {"type": "string", "id": 6},
                                                "introIcon": {"type": "string", "id": 7},
                                                "guidancePulldown": {"type": "string", "id": 8},
                                                "guidanceEntry": {"type": "string", "id": 9},
                                                "introIconNight": {"type": "string", "id": 10}
                                            }
                                        },
                                        "Dislike": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "subtitle": {"type": "string", "id": 2},
                                                "reasons": {"rule": "repeated", "type": "DislikeReason", "id": 3}
                                            }
                                        },
                                        "DislikeReason": {
                                            "fields": {
                                                "id": {"type": "int64", "id": 1},
                                                "mid": {"type": "int64", "id": 2},
                                                "rid": {"type": "int32", "id": 3},
                                                "tagId": {"type": "int64", "id": 4},
                                                "name": {"type": "string", "id": 5}
                                            }
                                        },
                                        "ElecRank": {
                                            "fields": {
                                                "list": {
                                                    "rule": "repeated",
                                                    "type": "ElecRankItem",
                                                    "id": 1
                                                },
                                                "count": {"type": "int64", "id": 2},
                                                "text": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ElecRankItem": {
                                            "fields": {
                                                "avatar": {"type": "string", "id": 1},
                                                "nickname": {"type": "string", "id": 2},
                                                "message": {"type": "string", "id": 3},
                                                "mid": {"type": "int64", "id": 4}
                                            }
                                        }
                                    }
                                }, "v1": {
                                    "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                        "ViewReply": {
                                            "fields": {
                                                "viewBase": {"type": "ViewBase", "id": 1},
                                                "arc": {"type": "Arc", "id": 2},
                                                "reqUser": {"type": "ReqUser", "id": 3},
                                                "owner": {"type": "bilibili.app.viewunite.common.Owner", "id": 4},
                                                "tab": {"type": "Tab", "id": 5},
                                                "supplement": {"type": "google.protobuf.Any", "id": 6},
                                                "cm": {"type": "CM", "id": 7},
                                                "ecode": {"type": "ECode", "id": 8},
                                                "ecodeConfig": {"type": "ECodeConfig", "id": 9},
                                                "report": {"keyType": "string", "type": "string", "id": 10}
                                            }
                                        },
                                        "ECode": {"values": {"CODE_DEFAULT": 0, "CODE_404": 1, "CODE_TEENAGER": 78301}},
                                        "Arc": {
                                            "fields": {
                                                "aid": {"type": "int64", "id": 1},
                                                "cid": {"type": "int64", "id": 2},
                                                "duration": {"type": "int64", "id": 3},
                                                "stat": {"type": "bilibili.app.viewunite.common.Stat", "id": 4},
                                                "bvid": {"type": "string", "id": 5},
                                                "copyright": {"type": "int32", "id": 6},
                                                "right": {"type": "Rights", "id": 7},
                                                "cover": {"type": "string", "id": 8},
                                                "typeId": {"type": "int64", "id": 9},
                                                "title": {"type": "string", "id": 10}
                                            }
                                        },
                                        "CM": {
                                            "fields": {
                                                "cmUnderPlayer": {"type": "google.protobuf.Any", "id": 1},
                                                "adsControl": {"type": "google.protobuf.Any", "id": 2},
                                                "sourceContent": {
                                                    "rule": "repeated",
                                                    "type": "google.protobuf.Any",
                                                    "id": 3
                                                }
                                            }
                                        },
                                        "ViewBase": {
                                            "fields": {
                                                "bizType": {"type": "BizType", "id": 1},
                                                "pageType": {"type": "PageCategory", "id": 2},
                                                "control": {"type": "PageControl", "id": 3},
                                                "activityResource": {"type": "ActivityResource", "id": 4},
                                                "config": {"type": "Config", "id": 5}
                                            }
                                        },
                                        "BizType": {
                                            "values": {
                                                "BIZ_TYPE_UNKNOWN": 0,
                                                "BIZ_TYPE_UGC": 1,
                                                "BIZ_TYPE_PGC": 2,
                                                "BIZ_TYPE_PUGV": 3
                                            }
                                        },
                                        "PageCategory": {"values": {"COMMON_PAGE": 0, "ACTIVITY_PAGE": 1}},
                                        "ReqUser": {
                                            "fields": {
                                                "favorite": {"type": "int32", "id": 1},
                                                "like": {"type": "int32", "id": 2},
                                                "coin": {"type": "int32", "id": 3},
                                                "favSeason": {"type": "int32", "id": 4},
                                                "follow": {"type": "int32", "id": 5},
                                                "dislike": {"type": "int32", "id": 6},
                                                "elecPlusBtn": {"type": "Button", "id": 7},
                                                "chargingPlus": {"type": "ChargingPlus", "id": 8}
                                            }
                                        },
                                        "Tab": {
                                            "fields": {
                                                "tabModule": {
                                                    "rule": "repeated",
                                                    "type": "TabModule",
                                                    "id": 1
                                                },
                                                "tabBg": {"type": "string", "id": 2},
                                                "danmakuEntrance": {"type": "TabControl", "id": 3}
                                            }
                                        },
                                        "ECodeConfig": {"fields": {"redirectUrl": {"type": "string", "id": 1}}},
                                        "Rights": {
                                            "fields": {
                                                "onlyVipDownload": {"type": "bool", "id": 1},
                                                "noReprint": {"type": "bool", "id": 2},
                                                "download": {"type": "bool", "id": 3}
                                            }
                                        },
                                        "PageControl": {
                                            "fields": {
                                                "toastShow": {"type": "Control", "id": 1},
                                                "materialShow": {"type": "Control", "id": 2},
                                                "upShow": {"type": "Control", "id": 3}
                                            }
                                        },
                                        "Control": {"fields": {"limit": {"type": "bool", "id": 1}}},
                                        "ActivityResource": {
                                            "fields": {
                                                "darkTextColor": {"type": "string", "id": 1},
                                                "dividerColor": {"type": "string", "id": 2},
                                                "bgColor": {"type": "string", "id": 3},
                                                "selectedBgColor": {"type": "string", "id": 4},
                                                "textColor": {"type": "string", "id": 5},
                                                "lightTextColor": {"type": "string", "id": 6}
                                            }
                                        },
                                        "Config": {
                                            "fields": {
                                                "online": {"type": "Online", "id": 1},
                                                "playerIcon": {"type": "PlayerIcon", "id": 2},
                                                "storyEntrance": {"type": "StoryEntrance", "id": 3}
                                            }
                                        },
                                        "Online": {"fields": {"onlineShow": {"type": "bool", "id": 1}}},
                                        "PlayerIcon": {
                                            "fields": {
                                                "url1": {"type": "string", "id": 1},
                                                "hash1": {"type": "string", "id": 2},
                                                "url2": {"type": "string", "id": 3},
                                                "hash2": {"type": "string", "id": 4},
                                                "dragLeftPng": {"type": "string", "id": 5},
                                                "middlePng": {"type": "string", "id": 6},
                                                "dragRightPng": {"type": "string", "id": 7},
                                                "dragData": {"type": "IconData", "id": 8},
                                                "nodragData": {"type": "IconData", "id": 9}
                                            }
                                        },
                                        "IconData": {
                                            "fields": {
                                                "metaJson": {"type": "string", "id": 1},
                                                "spritsImg": {"type": "string", "id": 2}
                                            }
                                        },
                                        "StoryEntrance": {
                                            "fields": {
                                                "arcPlayStory": {"type": "bool", "id": 1},
                                                "storyIcon": {"type": "string", "id": 2},
                                                "arcLandscapeStory": {"type": "bool", "id": 3},
                                                "landscapeIcon": {"type": "string", "id": 4},
                                                "playStory": {"type": "bool", "id": 5}
                                            }
                                        },
                                        "Button": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "uri": {"type": "string", "id": 2},
                                                "icon": {"type": "string", "id": 3},
                                                "jumpShowType": {"type": "JumpShowType", "id": 4}
                                            }
                                        },
                                        "JumpShowType": {
                                            "values": {
                                                "JST_DEFAULT": 0,
                                                "JST_FULLSCREEN": 1,
                                                "JST_HALFSCREEN": 2
                                            }
                                        },
                                        "ChargingPlus": {
                                            "fields": {
                                                "pass": {"type": "bool", "id": 1},
                                                "playToast": {"rule": "repeated", "type": "PlayToast", "id": 2}
                                            }
                                        },
                                        "PlayToast": {
                                            "fields": {
                                                "business": {"type": "PlayToastEnum", "id": 1},
                                                "iconUrl": {"type": "string", "id": 2},
                                                "text": {"type": "string", "id": 3}
                                            }
                                        },
                                        "PlayToastEnum": {
                                            "values": {
                                                "PLAYTOAST_UNKNOWN": 0,
                                                "PLAYTOAST_CHARGINGPLUS": 1
                                            }
                                        },
                                        "TabModule": {
                                            "oneofs": {"tab": {"oneof": ["introduction", "replyTab", "activityTab"]}},
                                            "fields": {
                                                "introduction": {"type": "IntroductionTab", "id": 2},
                                                "replyTab": {"type": "ReplyTab", "id": 3},
                                                "activityTab": {"type": "ActivityTab", "id": 4},
                                                "tabType": {"type": "TabType", "id": 1}
                                            }
                                        },
                                        "TabType": {
                                            "values": {
                                                "TAB_NONE": 0,
                                                "TAB_INTRODUCTION": 1,
                                                "TAB_REPLY": 2,
                                                "TAB_OGV_ACTIVITY": 3
                                            }
                                        },
                                        "IntroductionTab": {
                                            "fields": {
                                                "title": {"type": "string", "id": 1},
                                                "modules": {
                                                    "rule": "repeated",
                                                    "type": "bilibili.app.viewunite.common.Module",
                                                    "id": 2
                                                }
                                            }
                                        },
                                        "ReplyTab": {
                                            "fields": {
                                                "replyStyle": {"type": "ReplyStyle", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "control": {"type": "TabControl", "id": 3}
                                            }
                                        },
                                        "ReplyStyle": {
                                            "fields": {
                                                "badgeUrl": {"type": "string", "id": 1},
                                                "badgeText": {"type": "string", "id": 2},
                                                "badgeType": {"type": "int64", "id": 3}
                                            }
                                        },
                                        "TabControl": {
                                            "fields": {
                                                "limit": {"type": "bool", "id": 1},
                                                "disable": {"type": "bool", "id": 2},
                                                "disableClickTip": {"type": "string", "id": 3}
                                            }
                                        },
                                        "ActivityTab": {
                                            "fields": {
                                                "id": {"type": "int32", "id": 1},
                                                "title": {"type": "string", "id": 2},
                                                "type": {"type": "int32", "id": 3},
                                                "showName": {"type": "string", "id": 4},
                                                "picurl": {"type": "string", "id": 5},
                                                "picurlSelected": {"type": "string", "id": 6},
                                                "h5Link": {"type": "string", "id": 7},
                                                "link": {"type": "string", "id": 8},
                                                "linkType": {"type": "int32", "id": 9},
                                                "bizKey": {"type": "int64", "id": 10},
                                                "desc": {"type": "string", "id": 11},
                                                "actExt": {"type": "string", "id": 12},
                                                "report": {"keyType": "string", "type": "string", "id": 13}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, "dagw": {
                    "nested": {
                        "component": {
                            "nested": {
                                "avatar": {
                                    "nested": {
                                        "common": {
                                            "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                                "SizeSpec": {
                                                    "fields": {
                                                        "width": {"type": "double", "id": 1},
                                                        "height": {"type": "double", "id": 2}
                                                    }
                                                },
                                                "MaskProperty": {
                                                    "fields": {
                                                        "generalSpec": {
                                                            "type": "LayerGeneralSpec",
                                                            "id": 1
                                                        }, "maskSrc": {"type": "ResourceSource", "id": 2}
                                                    }
                                                },
                                                "LayerGeneralSpec": {
                                                    "fields": {
                                                        "posSpec": {
                                                            "type": "PositionSpec",
                                                            "id": 1
                                                        },
                                                        "sizeSpec": {"type": "SizeSpec", "id": 2},
                                                        "renderSpec": {"type": "BasicRenderSpec", "id": 3}
                                                    }
                                                },
                                                "BasicRenderSpec": {"fields": {"opacity": {"type": "double", "id": 1}}},
                                                "PositionSpec": {
                                                    "fields": {
                                                        "coordinatePos": {
                                                            "type": "CoordinatePos",
                                                            "id": 1
                                                        },
                                                        "axisX": {"type": "double", "id": 2},
                                                        "axisY": {"type": "double", "id": 3}
                                                    }
                                                },
                                                "CoordinatePos": {
                                                    "values": {
                                                        "INVALID_COORDINATE": 0,
                                                        "DEFAULT_COORDINATE": 1,
                                                        "CENTRAL_COORDINATE": 2
                                                    }
                                                },
                                                "ResourceSource": {
                                                    "oneofs": {"res": {"oneof": ["remoteRes", "local", "draw"]}},
                                                    "fields": {
                                                        "srcType": {"type": "SourceType", "id": 1},
                                                        "placeholder": {"type": "LocalRes", "id": 2},
                                                        "remoteRes": {"type": "RemoteRes", "id": 3},
                                                        "local": {"type": "LocalRes", "id": 4},
                                                        "draw": {"type": "NativeDrawRes", "id": 5}
                                                    }
                                                },
                                                "SourceType": {
                                                    "values": {
                                                        "SRC_TYPE_INVALID": 0,
                                                        "SRC_TYPE_URL": 1,
                                                        "SRC_TYPE_LOCAL": 2,
                                                        "SRC_TYPE_DRAW": 3
                                                    }
                                                },
                                                "LocalRes": {
                                                    "values": {
                                                        "LOCAL_RES_INVALID": 0,
                                                        "LOCAL_RES_ICON_VIP": 1,
                                                        "LOCAL_RES_ICON_SMALL_VIP": 2,
                                                        "LOCAL_RES_ICON_PERSONAL_VERIFY": 3,
                                                        "LOCAL_RES_ICON_ENTERPRISE_VERIFY": 4,
                                                        "LOCAL_RES_ICON_NFT_MAINLAND": 5,
                                                        "LOCAL_RES_DEFAULT_AVATAR": 6
                                                    }
                                                },
                                                "RemoteRes": {
                                                    "fields": {
                                                        "url": {"type": "string", "id": 1},
                                                        "bfsStyle": {"type": "string", "id": 2}
                                                    }
                                                },
                                                "NativeDrawRes": {
                                                    "fields": {
                                                        "drawType": {
                                                            "type": "NativeDraw",
                                                            "id": 1
                                                        },
                                                        "fillMode": {"type": "FillMode", "id": 2},
                                                        "colorConfig": {"type": "ColorConfig", "id": 3},
                                                        "edgeWeight": {"type": "double", "id": 4}
                                                    }
                                                },
                                                "NativeDraw": {
                                                    "values": {
                                                        "DRAW_INVALID": 0,
                                                        "DRAW_CIRCLE": 1,
                                                        "DRAW_RECTANGLE": 2
                                                    }
                                                },
                                                "FillMode": {
                                                    "values": {
                                                        "FILL_MODE_INVALID": 0,
                                                        "FILL_MODE_INTERNAL": 1,
                                                        "FILL_MODE_EDGE": 2
                                                    }
                                                },
                                                "ColorConfig": {
                                                    "fields": {
                                                        "isDarkModeAware": {"type": "bool", "id": 1},
                                                        "day": {"type": "ColorSpec", "id": 2},
                                                        "night": {"type": "ColorSpec", "id": 3}
                                                    }
                                                },
                                                "ColorSpec": {"fields": {"argb": {"type": "string", "id": 1}}}
                                            }
                                        }, "v1": {
                                            "options": {"java_package": "com.smile.bilibili.model"}, "nested": {
                                                "AvatarItem": {
                                                    "fields": {
                                                        "containerSize": {
                                                            "type": "bilibili.dagw.component.avatar.common.SizeSpec",
                                                            "id": 1
                                                        },
                                                        "layers": {"rule": "repeated", "type": "LayerGroup", "id": 2},
                                                        "fallbackLayers": {"type": "LayerGroup", "id": 3},
                                                        "mid": {"type": "int64", "id": 4}
                                                    }
                                                },
                                                "LayerGroup": {
                                                    "fields": {
                                                        "groupId": {"type": "string", "id": 1},
                                                        "layers": {"rule": "repeated", "type": "Layer", "id": 2},
                                                        "groupMask": {
                                                            "type": "bilibili.dagw.component.avatar.common.MaskProperty",
                                                            "id": 3
                                                        },
                                                        "isCriticalGroup": {"type": "bool", "id": 4}
                                                    }
                                                },
                                                "Layer": {
                                                    "fields": {
                                                        "layerId": {"type": "string", "id": 1},
                                                        "visible": {"type": "bool", "id": 2},
                                                        "generalSpec": {
                                                            "type": "bilibili.dagw.component.avatar.common.LayerGeneralSpec",
                                                            "id": 3
                                                        },
                                                        "layerConfig": {"type": "LayerConfig", "id": 4},
                                                        "resource": {"type": "BasicLayerResource", "id": 5}
                                                    }
                                                },
                                                "LayerConfig": {
                                                    "fields": {
                                                        "isCritical": {"type": "bool", "id": 2},
                                                        "allowOverPaint": {"type": "bool", "id": 3},
                                                        "layerMask": {
                                                            "type": "bilibili.dagw.component.avatar.common.MaskProperty",
                                                            "id": 4
                                                        }
                                                    }
                                                },
                                                "TagConfigType": {
                                                    "values": {
                                                        "TAG_CFG_INVALID": 0,
                                                        "TAG_CFG_GENERAL": 1,
                                                        "TAG_CFG_GYRO": 2,
                                                        "TAG_CFG_COMMENT_DOUBLE_CLICK": 3,
                                                        "TAG_CFG_IN_LIVE": 4
                                                    }
                                                },
                                                "GeneralConfig": {
                                                    "fields": {
                                                        "webCssStyle": {
                                                            "keyType": "string",
                                                            "type": "string",
                                                            "id": 1
                                                        }
                                                    }
                                                },
                                                "GyroConfig": {
                                                    "fields": {
                                                        "gyroscope": {
                                                            "type": "NFTImageV2",
                                                            "id": 1
                                                        }
                                                    }
                                                },
                                                "NFTImageV2": {
                                                    "fields": {
                                                        "gyroscope": {
                                                            "rule": "repeated",
                                                            "type": "GyroscopeEntityV2",
                                                            "id": 1
                                                        }
                                                    }
                                                },
                                                "GyroscopeEntityV2": {
                                                    "fields": {
                                                        "displayType": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "contents": {
                                                            "rule": "repeated",
                                                            "type": "GyroscopeContentV2",
                                                            "id": 2
                                                        }
                                                    }
                                                },
                                                "GyroscopeContentV2": {
                                                    "fields": {
                                                        "fileUrl": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "scale": {"type": "float", "id": 2},
                                                        "physicalOrientation": {
                                                            "rule": "repeated",
                                                            "type": "PhysicalOrientationV2",
                                                            "id": 3
                                                        }
                                                    }
                                                },
                                                "PhysicalOrientationV2": {
                                                    "fields": {
                                                        "type": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "angle": {"rule": "repeated", "type": "float", "id": 2},
                                                        "animations": {
                                                            "rule": "repeated",
                                                            "type": "PhysicalOrientationAnimation",
                                                            "id": 3
                                                        }
                                                    }
                                                },
                                                "PhysicalOrientationAnimation": {
                                                    "fields": {
                                                        "type": {
                                                            "type": "string",
                                                            "id": 1
                                                        },
                                                        "value": {"rule": "repeated", "type": "float", "id": 2},
                                                        "bezier": {"type": "string", "id": 3}
                                                    }
                                                },
                                                "CommentDoubleClickConfig": {
                                                    "fields": {
                                                        "interaction": {
                                                            "type": "Interaction",
                                                            "id": 1
                                                        }, "animationScale": {"type": "double", "id": 2}
                                                    }
                                                },
                                                "Interaction": {
                                                    "fields": {
                                                        "nftId": {"type": "string", "id": 1},
                                                        "enabled": {"type": "bool", "id": 2},
                                                        "itype": {"type": "string", "id": 3},
                                                        "metadataUrl": {"type": "string", "id": 4}
                                                    }
                                                },
                                                "LiveAnimeConfig": {"fields": {"isLive": {"type": "bool", "id": 1}}},
                                                "BasicLayerResource": {
                                                    "oneofs": {"payload": {"oneof": ["resImage", "resAnimation", "resNativeDraw"]}},
                                                    "fields": {
                                                        "resType": {"type": "ResType", "id": 1},
                                                        "resImage": {"type": "ResImage", "id": 2},
                                                        "resAnimation": {"type": "ResAnimation", "id": 3},
                                                        "resNativeDraw": {"type": "ResNativeDraw", "id": 4}
                                                    }
                                                },
                                                "ResType": {
                                                    "values": {
                                                        "RES_TYPE_INVALID": 0,
                                                        "RES_TYPE_PLUGIN": 1,
                                                        "RES_TYPE_EMPTY": 2,
                                                        "RES_TYPE_IMAGE": 3,
                                                        "RES_TYPE_ANIMATION": 4,
                                                        "RES_TYPE_NATIVE_DRAW": 5
                                                    }
                                                },
                                                "ResImage": {
                                                    "fields": {
                                                        "imageSrc": {
                                                            "type": "bilibili.dagw.component.avatar.common.ResourceSource",
                                                            "id": 1
                                                        }
                                                    }
                                                },
                                                "ResAnimation": {
                                                    "fields": {
                                                        "webpSrc": {
                                                            "type": "bilibili.dagw.component.avatar.common.ResourceSource",
                                                            "id": 1
                                                        }
                                                    }
                                                },
                                                "ResNativeDraw": {
                                                    "fields": {
                                                        "drawSrc": {
                                                            "type": "bilibili.dagw.component.avatar.common.ResourceSource",
                                                            "id": 1
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "google": {
            "nested": {
                "protobuf": {
                    "nested": {
                        "Any": {
                            "fields": {
                                "type_url": {"type": "string", "id": 1},
                                "value": {"type": "bytes", "id": 2}
                            }
                        }
                    }
                }
            }
        }
    }
};

const url = $request.url;
const method = $request.method;
let headers = $response.headers;
const isQuanX = typeof $task !== "undefined";
const binaryBody = isQuanX ? new Uint8Array($response.bodyBytes) : $response.body;
let gzipStrName = 'grpc-encoding';
if (!headers[gzipStrName]) {
    // Loon QX做调整
    gzipStrName = 'Grpc-Encoding';
}
const isGzipCompress = headers[gzipStrName] === 'gzip';
console.log(`isGzipCompress:${isGzipCompress}`);
const unGzipBody = isGzipCompress ? pako.ungzip(binaryBody.slice(5)) : binaryBody.slice(5);
headers[gzipStrName] = 'identity';
let body;
const biliRoot = protobuf.Root.fromJSON(biliJson);
let needProcessFlag = false;
if (method !== "POST") {
    $notification.post(notifyTitle, "method错误:", method);
}

if (url.includes("Dynamic/DynAll")) {
    console.log('动态DynAll');
    const dynAllReplyType = biliRoot.lookupType("bilibili.app.dynamic.DynAllReply");
    let dynAllReplyObj = dynAllReplyType.decode(unGzipBody);
    if (!dynAllReplyObj.topicList) {
        console.log('topicList为空');
    } else {
        needProcessFlag = true;
        dynAllReplyObj.topicList = null;
        console.log('推荐话题topicList去除');
    }

    if (!dynAllReplyObj.dynamicList?.list?.length) {
        console.log('动态列表list为空');
    } else {
        let adCount = 0;
        dynAllReplyObj.dynamicList.list = dynAllReplyObj.dynamicList.list.filter(item => {
            if (item.cardType !== 15) {
                return true;
            }
            adCount++;
            return false;
        });
        if (adCount) {
            needProcessFlag = true;
        }
        console.log(`动态列表广告数量:${adCount}`);
    }
    if (needProcessFlag) {
        // let tagMapNullCount = 0;
        // dynAllReplyObj.dynamicList.list.forEach(item => {
        //     item.modules.forEach(mo => {
        //         mo.moduleAuthor?.author.avatar.fallbackLayers.layers.forEach(lObj => {
        //             const tagsMap = lObj.layerConfig.tags;
        //             for (const i in tagsMap) {
        //                 if(tagsMap[i] === null){
        //                     // 解决tagsMap的null is not an object问题
        //                     tagMapNullCount++;
        //                     delete tagsMap[i];
        //                 }
        //             }
        //         })
        //     })
        // })
        // console.log(`tagsMap处理:${tagMapNullCount}`)
        body = processNewBody(dynAllReplyType.encode(dynAllReplyObj).finish());
    }
} else if (url.includes("viewunite.v1.View/View")) {
    console.log('新视频播放页viewunite View');
    const viewReplyType = biliRoot.lookupType("bilibili.app.viewunite.v1.ViewReply");
    let viewReplyObj = viewReplyType.decode(unGzipBody);

    if (viewReplyObj.cm?.sourceContent?.length) {
        let adCount = 0;
        const sourceContentDtoType = biliRoot.lookupType("bilibili.ad.v1.SourceContentDto");
        for (let i = 0; i < viewReplyObj.cm.sourceContent.length; i++) {
            let item = viewReplyObj.cm.sourceContent[i];
            if (item?.value) {
                const sourceContentDtoObj = sourceContentDtoType.decode(item.value);
                if (sourceContentDtoObj.adContent) {
                    adCount++;
                }
            }
        }
        viewReplyObj.cm.sourceContent = [];
        console.log(`up主推荐广告:${adCount}`);
        if (adCount) {
            needProcessFlag = true;
        }
    } else {
        console.log('无需处理cm.sourceContent');
    }
    if (needProcessFlag) {
        body = processNewBody(viewReplyType.encode(viewReplyObj).finish());
    }
} else if (url.includes("view.v1.View/View")) {
    console.log('视频播放页View/View');
    const viewReplyType = biliRoot.lookupType("bilibili.app.view.ViewReply");
    let viewReplyObj = viewReplyType.decode(unGzipBody);
    if (!viewReplyObj.cms?.length) {
        console.log('cms为空');
    } else {
        let adCount = 0;
        const sourceContentDtoType = biliRoot.lookupType("bilibili.ad.v1.SourceContentDto");
        for (let i = 0; i < viewReplyObj.cms.length; i++) {
            let item = viewReplyObj.cms[i];
            if (item.sourceContent?.value) {
                // 注意这里虽然proto没有属性value  但是viewReplyMessage解析的有
                const sourceContentDtoObj = sourceContentDtoType.decode(item.sourceContent.value);
                if (sourceContentDtoObj.adContent) {
                    adCount++;
                }
            }
        }
        viewReplyObj.cms = [];
        console.log(`up主推荐广告:${adCount}`);
        if (adCount) {
            needProcessFlag = true;
        }
    }

    if (!viewReplyObj.relates?.length) {
        console.log('relates相关推荐为空');
    } else {
        let adCount = 0;
        viewReplyObj.relates = viewReplyObj.relates.filter(item => {
            if (item.goto === 'cm') {
                adCount++;
                return false;
            }
            return true;
        });
        console.log(`相关推荐广告:${adCount}`);
        if (adCount) {
            needProcessFlag = true;
        }
    }
    const adsControlValue = viewReplyObj.cmConfig?.adsControl?.value;
    if (adsControlValue) {
        const adsControlDtoType = biliRoot.lookupType("bilibili.ad.v1.AdsControlDto");
        const adsControlDtoObj = adsControlDtoType.decode(adsControlValue);
        if (adsControlDtoObj?.hasDanmu === 1 || adsControlDtoObj?.cids?.length > 0) {
            console.log(`up主推荐广告-弹幕. ${adsControlDtoObj?.hasDanmu}, ${adsControlDtoObj?.cids}`);
            viewReplyObj.cmConfig = null;
            needProcessFlag = true;
        }
    }
    if (needProcessFlag) {
        let tIconMap = viewReplyObj.tIcon;
        for (const i in tIconMap) {
            if (tIconMap[i] === null) {
                // 解决tIcon的null is not an object问题
                console.log(`tIconMap:${i}`);
                delete tIconMap[i];
            }
        }

        body = processNewBody(viewReplyType.encode(viewReplyObj).finish());
    }
} else if (url.includes("PlayURL/PlayView")) {
    console.log('PlayURL/PlayView/View');
    const playViewReplyType = biliRoot.lookupType("bilibili.app.playurl.PlayViewReply");
    let playViewReplyObj = playViewReplyType.decode(unGzipBody);
    const oldBackgroundConf = playViewReplyObj.playArc?.backgroundPlayConf;
    if (oldBackgroundConf && (!oldBackgroundConf.isSupport || oldBackgroundConf.disabled)) {
        console.log(`后台播放限制去除`);
        playViewReplyObj.playArc.backgroundPlayConf.isSupport = true;
        playViewReplyObj.playArc.backgroundPlayConf.disabled = false;
        playViewReplyObj.playArc.backgroundPlayConf.extraContent = null;

        needProcessFlag = true;
        body = processNewBody(playViewReplyType.encode(playViewReplyObj).finish());
    } else {
        console.log('无需调整后台播放设置');
    }
} else {
    $notification.post('bilibili-proto', "路径匹配错误:", url);
}

if (needProcessFlag) {
    if (isQuanX) {
        $done({
            bodyBytes: body.buffer.slice(body.byteOffset, body.byteLength + body.byteOffset),
            headers
        });
    } else {
        $done({
            body,
            headers
        });
    }
} else {
    console.log('无需处理');
    $done({});
}

function processNewBody(unGzipBody) {
    const length = unGzipBody.length;
    let merge = new Uint8Array(5 + length);
    merge.set(intToUint8Array(length), 1);
    merge.set(unGzipBody, 5);
    return merge;
}

function intToUint8Array(num) {
    let arr = new ArrayBuffer(4); // an Int32 takes 4 bytes
    let view = new DataView(arr);
    view.setUint32(0, num, false); // byteOffset = 0; litteEndian = false
    return new Uint8Array(arr);
}