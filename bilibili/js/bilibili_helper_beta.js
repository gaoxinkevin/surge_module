// Build: 2023/7/10 14:28:06
(() => {
    console.time = function (o) {
        this._times = this._times || {}, this._times[o] = Date.now()
    };
    console.timeEnd = function (o) {
        if (this._times && this._times[o]) {
            let e = Date.now() - this._times[o];
            console.log(`${o}: ${e}ms`), delete this._times[o]
        } else console.log(`Timer with label ${o} does not exist.`)
    };

    function Wn(o) {
        "use strict";

        function e() {
        }

        function t() {
        }

        var n = String.fromCharCode, i = {}.toString, r = i.call(o.SharedArrayBuffer), l = i(), s = o.Uint8Array,
            a = s || Array, f = s ? ArrayBuffer : a, c = f.isView || function (x) {
                return x && "length" in x
            }, d = i.call(f.prototype);
        f = t.prototype;
        var y = o.TextEncoder, m = new (s ? Uint16Array : a)(32);
        e.prototype.decode = function (x) {
            if (!c(x)) {
                var V = i.call(x);
                if (V !== d && V !== r && V !== l) throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
                x = s ? new a(x) : x || []
            }
            for (var I = V = "", k = 0, N = x.length | 0, J = N - 32 | 0, F, E, D = 0, j = 0, A, S = 0, L = -1; k < N;) {
                for (F = k <= J ? 32 : N - k | 0; S < F; k = k + 1 | 0, S = S + 1 | 0) {
                    switch (E = x[k] & 255, E >> 4) {
                        case 15:
                            if (A = x[k = k + 1 | 0] & 255, A >> 6 !== 2 || 247 < E) {
                                k = k - 1 | 0;
                                break
                            }
                            D = (E & 7) << 6 | A & 63, j = 5, E = 256;
                        case 14:
                            A = x[k = k + 1 | 0] & 255, D <<= 6, D |= (E & 15) << 6 | A & 63, j = A >> 6 === 2 ? j + 4 | 0 : 24, E = E + 256 & 768;
                        case 13:
                        case 12:
                            A = x[k = k + 1 | 0] & 255, D <<= 6, D |= (E & 31) << 6 | A & 63, j = j + 7 | 0, k < N && A >> 6 === 2 && D >> j && 1114112 > D ? (E = D, D = D - 65536 | 0, 0 <= D && (L = (D >> 10) + 55296 | 0, E = (D & 1023) + 56320 | 0, 31 > S ? (m[S] = L, S = S + 1 | 0, L = -1) : (A = L, L = E, E = A))) : (E >>= 8, k = k - E - 1 | 0, E = 65533), D = j = 0, F = k <= J ? 32 : N - k | 0;
                        default:
                            m[S] = E;
                            continue;
                        case 11:
                        case 10:
                        case 9:
                        case 8:
                    }
                    m[S] = 65533
                }
                if (I += n(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15], m[16], m[17], m[18], m[19], m[20], m[21], m[22], m[23], m[24], m[25], m[26], m[27], m[28], m[29], m[30], m[31]), 32 > S && (I = I.slice(0, S - 32 | 0)), k < N) {
                    if (m[0] = L, S = ~L >>> 31, L = -1, I.length < V.length) continue
                } else L !== -1 && (I += n(L));
                V += I, I = ""
            }
            return V
        }, f.encode = function (x) {
            x = x === void 0 ? "" : "" + x;
            var V = x.length | 0, I = new a((V << 1) + 8 | 0), k, N = 0, J = !s;
            for (k = 0; k < V; k = k + 1 | 0, N = N + 1 | 0) {
                var F = x.charCodeAt(k) | 0;
                if (127 >= F) I[N] = F; else {
                    if (2047 >= F) I[N] = 192 | F >> 6; else {
                        e:{
                            if (55296 <= F) if (56319 >= F) {
                                var E = x.charCodeAt(k = k + 1 | 0) | 0;
                                if (56320 <= E && 57343 >= E) {
                                    if (F = (F << 10) + E - 56613888 | 0, 65535 < F) {
                                        I[N] = 240 | F >> 18, I[N = N + 1 | 0] = 128 | F >> 12 & 63, I[N = N + 1 | 0] = 128 | F >> 6 & 63, I[N = N + 1 | 0] = 128 | F & 63;
                                        continue
                                    }
                                    break e
                                }
                                F = 65533
                            } else 57343 >= F && (F = 65533);
                            !J && k << 1 < N && k << 1 < (N - 7 | 0) && (J = !0, E = new a(3 * V), E.set(I), I = E)
                        }
                        I[N] = 224 | F >> 12, I[N = N + 1 | 0] = 128 | F >> 6 & 63
                    }
                    I[N = N + 1 | 0] = 128 | F & 63
                }
            }
            return s ? I.subarray(0, N) : I.slice(0, N)
        }, o.TextDecoder = e, o.TextEncoder = t
    }

    var w = Wn(globalThis);
    var C = Uint8Array, ne = Uint16Array, Cn = Int32Array,
        Zt = new C([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        _t = new C([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        $n = new C([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), qt = function (o, e) {
            for (var t = new ne(31), n = 0; n < 31; ++n) t[n] = e += 1 << o[n - 1];
            for (var i = new Cn(t[30]), n = 1; n < 30; ++n) for (var r = t[n]; r < t[n + 1]; ++r) i[r] = r - t[n] << 5 | n;
            return {b: t, r: i}
        }, Yt = qt(Zt, 2), Ht = Yt.b, Pn = Yt.r;
    Ht[28] = 258, Pn[258] = 28;
    var Qt = qt(_t, 0), zn = Qt.b, yi = Qt.r, Le = new ne(32768);
    for (B = 0; B < 32768; ++B) K = (B & 43690) >> 1 | (B & 21845) << 1, K = (K & 52428) >> 2 | (K & 13107) << 2, K = (K & 61680) >> 4 | (K & 3855) << 4, Le[B] = ((K & 65280) >> 8 | (K & 255) << 8) >> 1;
    var K, B, ae = function (o, e, t) {
        for (var n = o.length, i = 0, r = new ne(e); i < n; ++i) o[i] && ++r[o[i] - 1];
        var l = new ne(e);
        for (i = 1; i < e; ++i) l[i] = l[i - 1] + r[i - 1] << 1;
        var s;
        if (t) {
            s = new ne(1 << e);
            var a = 15 - e;
            for (i = 0; i < n; ++i) if (o[i]) for (var f = i << 4 | o[i], c = e - o[i], d = l[o[i] - 1]++ << c, y = d | (1 << c) - 1; d <= y; ++d) s[Le[d] >> a] = f
        } else for (s = new ne(n), i = 0; i < n; ++i) o[i] && (s[i] = Le[l[o[i] - 1]++] >> 15 - o[i]);
        return s
    }, le = new C(288);
    for (B = 0; B < 144; ++B) le[B] = 8;
    var B;
    for (B = 144; B < 256; ++B) le[B] = 9;
    var B;
    for (B = 256; B < 280; ++B) le[B] = 7;
    var B;
    for (B = 280; B < 288; ++B) le[B] = 8;
    var B, en = new C(32);
    for (B = 0; B < 32; ++B) en[B] = 5;
    var B;
    var jn = ae(le, 9, 1);
    var Gn = ae(en, 5, 1), Re = function (o) {
        for (var e = o[0], t = 1; t < o.length; ++t) o[t] > e && (e = o[t]);
        return e
    }, P = function (o, e, t) {
        var n = e / 8 | 0;
        return (o[n] | o[n + 1] << 8) >> (e & 7) & t
    }, Oe = function (o, e) {
        var t = e / 8 | 0;
        return (o[t] | o[t + 1] << 8 | o[t + 2] << 16) >> (e & 7)
    }, Jn = function (o) {
        return (o + 7) / 8 | 0
    }, Kn = function (o, e, t) {
        (e == null || e < 0) && (e = 0), (t == null || t > o.length) && (t = o.length);
        var n = new C(t - e);
        return n.set(o.subarray(e, t)), n
    };
    var Xn = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
        z = function (o, e, t) {
            var n = new Error(e || Xn[o]);
            if (n.code = o, Error.captureStackTrace && Error.captureStackTrace(n, z), !t) throw n;
            return n
        }, Zn = function (o, e, t, n) {
            var i = o.length, r = n ? n.length : 0;
            if (!i || e.f && !e.l) return t || new C(0);
            var l = !t || e.i != 2, s = e.i;
            t || (t = new C(i * 3));
            var a = function (Jt) {
                var Kt = t.length;
                if (Jt > Kt) {
                    var Xt = new C(Math.max(Kt * 2, Jt));
                    Xt.set(t), t = Xt
                }
            }, f = e.f || 0, c = e.p || 0, d = e.b || 0, y = e.l, m = e.d, x = e.m, V = e.n, I = i * 8;
            do {
                if (!y) {
                    f = P(o, c, 1);
                    var k = P(o, c + 1, 3);
                    if (c += 3, k) if (k == 1) y = jn, m = Gn, x = 9, V = 5; else if (k == 2) {
                        var E = P(o, c, 31) + 257, D = P(o, c + 10, 15) + 4, j = E + P(o, c + 5, 31) + 1;
                        c += 14;
                        for (var A = new C(j), S = new C(19), L = 0; L < D; ++L) S[$n[L]] = P(o, c + L * 3, 7);
                        c += D * 3;
                        for (var $t = Re(S), Vn = (1 << $t) - 1, Dn = ae(S, $t, 1), L = 0; L < j;) {
                            var Pt = Dn[P(o, c, Vn)];
                            c += Pt & 15;
                            var N = Pt >> 4;
                            if (N < 16) A[L++] = N; else {
                                var ee = 0, pe = 0;
                                for (N == 16 ? (pe = 3 + P(o, c, 3), c += 2, ee = A[L - 1]) : N == 17 ? (pe = 3 + P(o, c, 7), c += 3) : N == 18 && (pe = 11 + P(o, c, 127), c += 7); pe--;) A[L++] = ee
                            }
                        }
                        var zt = A.subarray(0, E), $ = A.subarray(E);
                        x = Re(zt), V = Re($), y = ae(zt, x, 1), m = ae($, V, 1)
                    } else z(1); else {
                        var N = Jn(c) + 4, J = o[N - 4] | o[N - 3] << 8, F = N + J;
                        if (F > i) {
                            s && z(0);
                            break
                        }
                        l && a(d + J), t.set(o.subarray(N, F), d), e.b = d += J, e.p = c = F * 8, e.f = f;
                        continue
                    }
                    if (c > I) {
                        s && z(0);
                        break
                    }
                }
                l && a(d + 131072);
                for (var An = (1 << x) - 1, Sn = (1 << V) - 1, Ie = c; ; Ie = c) {
                    var ee = y[Oe(o, c) & An], te = ee >> 4;
                    if (c += ee & 15, c > I) {
                        s && z(0);
                        break
                    }
                    if (ee || z(2), te < 256) t[d++] = te; else if (te == 256) {
                        Ie = c, y = null;
                        break
                    } else {
                        var jt = te - 254;
                        if (te > 264) {
                            var L = te - 257, se = Zt[L];
                            jt = P(o, c, (1 << se) - 1) + Ht[L], c += se
                        }
                        var Ue = m[Oe(o, c) & Sn], Ee = Ue >> 4;
                        Ue || z(3), c += Ue & 15;
                        var $ = zn[Ee];
                        if (Ee > 3) {
                            var se = _t[Ee];
                            $ += Oe(o, c) & (1 << se) - 1, c += se
                        }
                        if (c > I) {
                            s && z(0);
                            break
                        }
                        l && a(d + 131072);
                        var Fe = d + jt;
                        if (d < $) {
                            var Gt = r - $, Mn = Math.min($, Fe);
                            for (Gt + d < 0 && z(3); d < Mn; ++d) t[d] = n[Gt + d]
                        }
                        for (; d < Fe; d += 4) t[d] = t[d - $], t[d + 1] = t[d + 1 - $], t[d + 2] = t[d + 2 - $], t[d + 3] = t[d + 3 - $];
                        d = Fe
                    }
                }
                e.l = y, e.p = Ie, e.b = d, e.f = f, y && (f = 1, e.m = x, e.d = m, e.n = V)
            } while (!f);
            return d == t.length ? t : Kn(t, 0, d)
        };
    var _n = new C(0);
    var qn = function (o) {
        (o[0] != 31 || o[1] != 139 || o[2] != 8) && z(6, "invalid gzip data");
        var e = o[3], t = 10;
        e & 4 && (t += (o[10] | o[11] << 8) + 2);
        for (var n = (e >> 3 & 1) + (e >> 4 & 1); n > 0; n -= !o[t++]) ;
        return t + (e & 2)
    }, Yn = function (o) {
        var e = o.length;
        return (o[e - 4] | o[e - 3] << 8 | o[e - 2] << 16 | o[e - 1] << 24) >>> 0
    };

    function tn(o, e) {
        var t = qn(o);
        return t + 8 > o.length && z(6, "invalid gzip data"), Zn(o.subarray(t, -8), {i: 2}, e && e.out || new C(Yn(o)), e && e.dictionary)
    }

    var Hn = typeof TextDecoder < "u" && new TextDecoder, Qn = 0;
    try {
        Hn.decode(_n, {stream: !0}), Qn = 1
    } catch {
    }

    function q(o) {
        let e = typeof o;
        if (e == "object") {
            if (Array.isArray(o)) return "array";
            if (o === null) return "null"
        }
        return e
    }

    function ie(o) {
        return o !== null && typeof o == "object" && !Array.isArray(o)
    }

    var X = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), de = [];
    for (let o = 0; o < X.length; o++) de[X[o].charCodeAt(0)] = o;
    de["-".charCodeAt(0)] = X.indexOf("+");
    de["_".charCodeAt(0)] = X.indexOf("/");

    function nn(o) {
        let e = o.length * 3 / 4;
        o[o.length - 2] == "=" ? e -= 2 : o[o.length - 1] == "=" && (e -= 1);
        let t = new Uint8Array(e), n = 0, i = 0, r, l = 0;
        for (let s = 0; s < o.length; s++) {
            if (r = de[o.charCodeAt(s)], r === void 0) switch (o[s]) {
                case"=":
                    i = 0;
                case`
`:
                case"\r":
                case"	":
                case" ":
                    continue;
                default:
                    throw Error("invalid base64 string.")
            }
            switch (i) {
                case 0:
                    l = r, i = 1;
                    break;
                case 1:
                    t[n++] = l << 2 | (r & 48) >> 4, l = r, i = 2;
                    break;
                case 2:
                    t[n++] = (l & 15) << 4 | (r & 60) >> 2, l = r, i = 3;
                    break;
                case 3:
                    t[n++] = (l & 3) << 6 | r, i = 0;
                    break
            }
        }
        if (i == 1) throw Error("invalid base64 string.");
        return t.subarray(0, n)
    }

    function rn(o) {
        let e = "", t = 0, n, i = 0;
        for (let r = 0; r < o.length; r++) switch (n = o[r], t) {
            case 0:
                e += X[n >> 2], i = (n & 3) << 4, t = 1;
                break;
            case 1:
                e += X[i | n >> 4], i = (n & 15) << 2, t = 2;
                break;
            case 2:
                e += X[i | n >> 6], e += X[n & 63], t = 0;
                break
        }
        return t && (e += X[i], e += "=", t == 1 && (e += "=")), e
    }

    var p;
    (function (o) {
        o.symbol = Symbol.for("protobuf-ts/unknown"), o.onRead = (t, n, i, r, l) => {
            (e(n) ? n[o.symbol] : n[o.symbol] = []).push({no: i, wireType: r, data: l})
        }, o.onWrite = (t, n, i) => {
            for (let {no: r, wireType: l, data: s} of o.list(n)) i.tag(r, l).raw(s)
        }, o.list = (t, n) => {
            if (e(t)) {
                let i = t[o.symbol];
                return n ? i.filter(r => r.no == n) : i
            }
            return []
        }, o.last = (t, n) => o.list(t, n).slice(-1)[0];
        let e = t => t && Array.isArray(t[o.symbol])
    })(p || (p = {}));
    var u;
    (function (o) {
        o[o.Varint = 0] = "Varint", o[o.Bit64 = 1] = "Bit64", o[o.LengthDelimited = 2] = "LengthDelimited", o[o.StartGroup = 3] = "StartGroup", o[o.EndGroup = 4] = "EndGroup", o[o.Bit32 = 5] = "Bit32"
    })(u || (u = {}));

    function on() {
        let o = 0, e = 0;
        for (let n = 0; n < 28; n += 7) {
            let i = this.buf[this.pos++];
            if (o |= (i & 127) << n, !(i & 128)) return this.assertBounds(), [o, e]
        }
        let t = this.buf[this.pos++];
        if (o |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128)) return this.assertBounds(), [o, e];
        for (let n = 3; n <= 31; n += 7) {
            let i = this.buf[this.pos++];
            if (e |= (i & 127) << n, !(i & 128)) return this.assertBounds(), [o, e]
        }
        throw new Error("invalid varint")
    }

    function ge(o, e, t) {
        for (let r = 0; r < 28; r = r + 7) {
            let l = o >>> r, s = !(!(l >>> 7) && e == 0), a = (s ? l | 128 : l) & 255;
            if (t.push(a), !s) return
        }
        let n = o >>> 28 & 15 | (e & 7) << 4, i = !!(e >> 3);
        if (t.push((i ? n | 128 : n) & 255), !!i) {
            for (let r = 3; r < 31; r = r + 7) {
                let l = e >>> r, s = !!(l >>> 7), a = (s ? l | 128 : l) & 255;
                if (t.push(a), !s) return
            }
            t.push(e >>> 31 & 1)
        }
    }

    var me = 65536 * 65536;

    function Ve(o) {
        let e = o[0] == "-";
        e && (o = o.slice(1));
        let t = 1e6, n = 0, i = 0;

        function r(l, s) {
            let a = Number(o.slice(l, s));
            i *= t, n = n * t + a, n >= me && (i = i + (n / me | 0), n = n % me)
        }

        return r(-24, -18), r(-18, -12), r(-12, -6), r(-6), [e, n, i]
    }

    function ye(o, e) {
        if (e <= 2097151) return "" + (me * e + (o >>> 0));
        let t = o & 16777215, n = (o >>> 24 | e << 8) >>> 0 & 16777215, i = e >> 16 & 65535,
            r = t + n * 6777216 + i * 6710656, l = n + i * 8147497, s = i * 2, a = 1e7;
        r >= a && (l += Math.floor(r / a), r %= a), l >= a && (s += Math.floor(l / a), l %= a);

        function f(c, d) {
            let y = c ? String(c) : "";
            return d ? "0000000".slice(y.length) + y : y
        }

        return f(s, 0) + f(l, s) + f(r, 1)
    }

    function De(o, e) {
        if (o >= 0) {
            for (; o > 127;) e.push(o & 127 | 128), o = o >>> 7;
            e.push(o)
        } else {
            for (let t = 0; t < 9; t++) e.push(o & 127 | 128), o = o >> 7;
            e.push(1)
        }
    }

    function sn() {
        let o = this.buf[this.pos++], e = o & 127;
        if (!(o & 128)) return this.assertBounds(), e;
        if (o = this.buf[this.pos++], e |= (o & 127) << 7, !(o & 128)) return this.assertBounds(), e;
        if (o = this.buf[this.pos++], e |= (o & 127) << 14, !(o & 128)) return this.assertBounds(), e;
        if (o = this.buf[this.pos++], e |= (o & 127) << 21, !(o & 128)) return this.assertBounds(), e;
        o = this.buf[this.pos++], e |= (o & 15) << 28;
        for (let t = 5; o & 128 && t < 10; t++) o = this.buf[this.pos++];
        if (o & 128) throw new Error("invalid varint");
        return this.assertBounds(), e >>> 0
    }

    function ei() {
        let o = new DataView(new ArrayBuffer(8));
        return globalThis.BigInt !== void 0 && typeof o.getBigInt64 == "function" && typeof o.getBigUint64 == "function" && typeof o.setBigInt64 == "function" && typeof o.setBigUint64 == "function" ? {
            MIN: BigInt("-9223372036854775808"),
            MAX: BigInt("9223372036854775807"),
            UMIN: BigInt("0"),
            UMAX: BigInt("18446744073709551615"),
            C: BigInt,
            V: o
        } : void 0
    }

    var R = ei();

    function an(o) {
        if (!o) throw new Error("BigInt unavailable, see https://github.com/timostamm/protobuf-ts/blob/v1.0.8/MANUAL.md#bigint-support")
    }

    var ln = /^-?[0-9]+$/, we = 65536 * 65536, ve = class {
        constructor(e, t) {
            this.lo = e | 0, this.hi = t | 0
        }

        isZero() {
            return this.lo == 0 && this.hi == 0
        }

        toNumber() {
            let e = this.hi * we + (this.lo >>> 0);
            if (!Number.isSafeInteger(e)) throw new Error("cannot convert to safe number");
            return e
        }
    }, O = class extends ve {
        static from(e) {
            if (R) switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e == "") throw new Error("string is no integer");
                    e = R.C(e);
                case"number":
                    if (e === 0) return this.ZERO;
                    e = R.C(e);
                case"bigint":
                    if (!e) return this.ZERO;
                    if (e < R.UMIN) throw new Error("signed value for ulong");
                    if (e > R.UMAX) throw new Error("ulong too large");
                    return R.V.setBigUint64(0, e, !0), new O(R.V.getInt32(0, !0), R.V.getInt32(4, !0))
            } else switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e = e.trim(), !ln.test(e)) throw new Error("string is no integer");
                    let [t, n, i] = Ve(e);
                    if (t) throw new Error("signed value");
                    return new O(n, i);
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    if (e < 0) throw new Error("signed value for ulong");
                    return new O(e, e / we)
            }
            throw new Error("unknown value " + typeof e)
        }

        toString() {
            return R ? this.toBigInt().toString() : ye(this.lo, this.hi)
        }

        toBigInt() {
            return an(R), R.V.setInt32(0, this.lo, !0), R.V.setInt32(4, this.hi, !0), R.V.getBigUint64(0, !0)
        }
    };
    O.ZERO = new O(0, 0);
    var U = class extends ve {
        static from(e) {
            if (R) switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e == "") throw new Error("string is no integer");
                    e = R.C(e);
                case"number":
                    if (e === 0) return this.ZERO;
                    e = R.C(e);
                case"bigint":
                    if (!e) return this.ZERO;
                    if (e < R.MIN) throw new Error("ulong too small");
                    if (e > R.MAX) throw new Error("ulong too large");
                    return R.V.setBigInt64(0, e, !0), new U(R.V.getInt32(0, !0), R.V.getInt32(4, !0))
            } else switch (typeof e) {
                case"string":
                    if (e == "0") return this.ZERO;
                    if (e = e.trim(), !ln.test(e)) throw new Error("string is no integer");
                    let [t, n, i] = Ve(e), r = new U(n, i);
                    return t ? r.negate() : r;
                case"number":
                    if (e == 0) return this.ZERO;
                    if (!Number.isSafeInteger(e)) throw new Error("number is no integer");
                    return e > 0 ? new U(e, e / we) : new U(-e, -e / we).negate()
            }
            throw new Error("unknown value " + typeof e)
        }

        isNegative() {
            return (this.hi & 2147483648) !== 0
        }

        negate() {
            let e = ~this.hi, t = this.lo;
            return t ? t = ~t + 1 : e += 1, new U(t, e)
        }

        toString() {
            if (R) return this.toBigInt().toString();
            if (this.isNegative()) {
                let e = this.negate();
                return "-" + ye(e.lo, e.hi)
            }
            return ye(this.lo, this.hi)
        }

        toBigInt() {
            return an(R), R.V.setInt32(0, this.lo, !0), R.V.setInt32(4, this.hi, !0), R.V.getBigInt64(0, !0)
        }
    };
    U.ZERO = new U(0, 0);
    var fn = {readUnknownField: !0, readerFactory: o => new Ae(o)};

    function un(o) {
        return o ? Object.assign(Object.assign({}, fn), o) : fn
    }

    var Ae = class {
        constructor(e, t) {
            this.varint64 = on, this.uint32 = sn, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            })
        }

        tag() {
            let e = this.uint32(), t = e >>> 3, n = e & 7;
            if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
            return [t, n]
        }

        skip(e) {
            let t = this.pos;
            switch (e) {
                case u.Varint:
                    for (; this.buf[this.pos++] & 128;) ;
                    break;
                case u.Bit64:
                    this.pos += 4;
                case u.Bit32:
                    this.pos += 4;
                    break;
                case u.LengthDelimited:
                    let n = this.uint32();
                    this.pos += n;
                    break;
                case u.StartGroup:
                    let i;
                    for (; (i = this.tag()[1]) !== u.EndGroup;) this.skip(i);
                    break;
                default:
                    throw new Error("cant skip wire type " + e)
            }
            return this.assertBounds(), this.buf.subarray(t, this.pos)
        }

        assertBounds() {
            if (this.pos > this.len) throw new RangeError("premature EOF")
        }

        int32() {
            return this.uint32() | 0
        }

        sint32() {
            let e = this.uint32();
            return e >>> 1 ^ -(e & 1)
        }

        int64() {
            return new U(...this.varint64())
        }

        uint64() {
            return new O(...this.varint64())
        }

        sint64() {
            let [e, t] = this.varint64(), n = -(e & 1);
            return e = (e >>> 1 | (t & 1) << 31) ^ n, t = t >>> 1 ^ n, new U(e, t)
        }

        bool() {
            let [e, t] = this.varint64();
            return e !== 0 || t !== 0
        }

        fixed32() {
            return this.view.getUint32((this.pos += 4) - 4, !0)
        }

        sfixed32() {
            return this.view.getInt32((this.pos += 4) - 4, !0)
        }

        fixed64() {
            return new O(this.sfixed32(), this.sfixed32())
        }

        sfixed64() {
            return new U(this.sfixed32(), this.sfixed32())
        }

        float() {
            return this.view.getFloat32((this.pos += 4) - 4, !0)
        }

        double() {
            return this.view.getFloat64((this.pos += 8) - 8, !0)
        }

        bytes() {
            let e = this.uint32(), t = this.pos;
            return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
        }

        string() {
            return this.textDecoder.decode(this.bytes())
        }
    };

    function T(o, e) {
        if (!o) throw new Error(e)
    }

    var ti = 34028234663852886e22, ni = -34028234663852886e22, ii = 4294967295, ri = 2147483647, oi = -2147483648;

    function _(o) {
        if (typeof o != "number") throw new Error("invalid int 32: " + typeof o);
        if (!Number.isInteger(o) || o > ri || o < oi) throw new Error("invalid int 32: " + o)
    }

    function Y(o) {
        if (typeof o != "number") throw new Error("invalid uint 32: " + typeof o);
        if (!Number.isInteger(o) || o > ii || o < 0) throw new Error("invalid uint 32: " + o)
    }

    function re(o) {
        if (typeof o != "number") throw new Error("invalid float 32: " + typeof o);
        if (Number.isFinite(o) && (o > ti || o < ni)) throw new Error("invalid float 32: " + o)
    }

    var cn = {writeUnknownFields: !0, writerFactory: () => new Se};

    function hn(o) {
        return o ? Object.assign(Object.assign({}, cn), o) : cn
    }

    var Se = class {
        constructor(e) {
            this.stack = [], this.textEncoder = e ?? new TextEncoder, this.chunks = [], this.buf = []
        }

        finish() {
            this.chunks.push(new Uint8Array(this.buf));
            let e = 0;
            for (let i = 0; i < this.chunks.length; i++) e += this.chunks[i].length;
            let t = new Uint8Array(e), n = 0;
            for (let i = 0; i < this.chunks.length; i++) t.set(this.chunks[i], n), n += this.chunks[i].length;
            return this.chunks = [], t
        }

        fork() {
            return this.stack.push({chunks: this.chunks, buf: this.buf}), this.chunks = [], this.buf = [], this
        }

        join() {
            let e = this.finish(), t = this.stack.pop();
            if (!t) throw new Error("invalid state, fork stack empty");
            return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
        }

        tag(e, t) {
            return this.uint32((e << 3 | t) >>> 0)
        }

        raw(e) {
            return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
        }

        uint32(e) {
            for (Y(e); e > 127;) this.buf.push(e & 127 | 128), e = e >>> 7;
            return this.buf.push(e), this
        }

        int32(e) {
            return _(e), De(e, this.buf), this
        }

        bool(e) {
            return this.buf.push(e ? 1 : 0), this
        }

        bytes(e) {
            return this.uint32(e.byteLength), this.raw(e)
        }

        string(e) {
            let t = this.textEncoder.encode(e);
            return this.uint32(t.byteLength), this.raw(t)
        }

        float(e) {
            re(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
        }

        double(e) {
            let t = new Uint8Array(8);
            return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
        }

        fixed32(e) {
            Y(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
        }

        sfixed32(e) {
            _(e);
            let t = new Uint8Array(4);
            return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
        }

        sint32(e) {
            return _(e), e = (e << 1 ^ e >> 31) >>> 0, De(e, this.buf), this
        }

        sfixed64(e) {
            let t = new Uint8Array(8), n = new DataView(t.buffer), i = U.from(e);
            return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
        }

        fixed64(e) {
            let t = new Uint8Array(8), n = new DataView(t.buffer), i = O.from(e);
            return n.setInt32(0, i.lo, !0), n.setInt32(4, i.hi, !0), this.raw(t)
        }

        int64(e) {
            let t = U.from(e);
            return ge(t.lo, t.hi, this.buf), this
        }

        sint64(e) {
            let t = U.from(e), n = t.hi >> 31, i = t.lo << 1 ^ n, r = (t.hi << 1 | t.lo >>> 31) ^ n;
            return ge(i, r, this.buf), this
        }

        uint64(e) {
            let t = O.from(e);
            return ge(t.lo, t.hi, this.buf), this
        }
    };
    var pn = {emitDefaultValues: !1, enumAsInteger: !1, useProtoFieldName: !1, prettySpaces: 0},
        dn = {ignoreUnknownFields: !1};

    function Me(o) {
        return o ? Object.assign(Object.assign({}, dn), o) : dn
    }

    function fe(o) {
        return o ? Object.assign(Object.assign({}, pn), o) : pn
    }

    var v = Symbol.for("protobuf-ts/message-type");

    function We(o) {
        let e = !1, t = [];
        for (let n = 0; n < o.length; n++) {
            let i = o.charAt(n);
            i == "_" ? e = !0 : /\d/.test(i) ? (t.push(i), e = !0) : e ? (t.push(i.toUpperCase()), e = !1) : n == 0 ? t.push(i.toLowerCase()) : t.push(i)
        }
        return t.join("")
    }

    var h;
    (function (o) {
        o[o.DOUBLE = 1] = "DOUBLE", o[o.FLOAT = 2] = "FLOAT", o[o.INT64 = 3] = "INT64", o[o.UINT64 = 4] = "UINT64", o[o.INT32 = 5] = "INT32", o[o.FIXED64 = 6] = "FIXED64", o[o.FIXED32 = 7] = "FIXED32", o[o.BOOL = 8] = "BOOL", o[o.STRING = 9] = "STRING", o[o.BYTES = 12] = "BYTES", o[o.UINT32 = 13] = "UINT32", o[o.SFIXED32 = 15] = "SFIXED32", o[o.SFIXED64 = 16] = "SFIXED64", o[o.SINT32 = 17] = "SINT32", o[o.SINT64 = 18] = "SINT64"
    })(h || (h = {}));
    var M;
    (function (o) {
        o[o.BIGINT = 0] = "BIGINT", o[o.STRING = 1] = "STRING", o[o.NUMBER = 2] = "NUMBER"
    })(M || (M = {}));
    var ue;
    (function (o) {
        o[o.NO = 0] = "NO", o[o.PACKED = 1] = "PACKED", o[o.UNPACKED = 2] = "UNPACKED"
    })(ue || (ue = {}));

    function mn(o) {
        var e, t, n, i;
        return o.localName = (e = o.localName) !== null && e !== void 0 ? e : We(o.name), o.jsonName = (t = o.jsonName) !== null && t !== void 0 ? t : We(o.name), o.repeat = (n = o.repeat) !== null && n !== void 0 ? n : ue.NO, o.opt = (i = o.opt) !== null && i !== void 0 ? i : o.repeat || o.oneof ? !1 : o.kind == "message", o
    }

    function gn(o) {
        if (typeof o != "object" || o === null || !o.hasOwnProperty("oneofKind")) return !1;
        switch (typeof o.oneofKind) {
            case"string":
                return o[o.oneofKind] === void 0 ? !1 : Object.keys(o).length == 2;
            case"undefined":
                return Object.keys(o).length == 1;
            default:
                return !1
        }
    }

    var be = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        prepare() {
            if (this.data) return;
            let e = [], t = [], n = [];
            for (let i of this.fields) if (i.oneof) n.includes(i.oneof) || (n.push(i.oneof), e.push(i.oneof), t.push(i.oneof)); else switch (t.push(i.localName), i.kind) {
                case"scalar":
                case"enum":
                    (!i.opt || i.repeat) && e.push(i.localName);
                    break;
                case"message":
                    i.repeat && e.push(i.localName);
                    break;
                case"map":
                    e.push(i.localName);
                    break
            }
            this.data = {req: e, known: t, oneofs: Object.values(n)}
        }

        is(e, t, n = !1) {
            if (t < 0) return !0;
            if (e == null || typeof e != "object") return !1;
            this.prepare();
            let i = Object.keys(e), r = this.data;
            if (i.length < r.req.length || r.req.some(l => !i.includes(l)) || !n && i.some(l => !r.known.includes(l))) return !1;
            if (t < 1) return !0;
            for (let l of r.oneofs) {
                let s = e[l];
                if (!gn(s)) return !1;
                if (s.oneofKind === void 0) continue;
                let a = this.fields.find(f => f.localName === s.oneofKind);
                if (!a || !this.field(s[s.oneofKind], a, n, t)) return !1
            }
            for (let l of this.fields) if (l.oneof === void 0 && !this.field(e[l.localName], l, n, t)) return !1;
            return !0
        }

        field(e, t, n, i) {
            let r = t.repeat;
            switch (t.kind) {
                case"scalar":
                    return e === void 0 ? t.opt : r ? this.scalars(e, t.T, i, t.L) : this.scalar(e, t.T, t.L);
                case"enum":
                    return e === void 0 ? t.opt : r ? this.scalars(e, h.INT32, i) : this.scalar(e, h.INT32);
                case"message":
                    return e === void 0 ? !0 : r ? this.messages(e, t.T(), n, i) : this.message(e, t.T(), n, i);
                case"map":
                    if (typeof e != "object" || e === null) return !1;
                    if (i < 2) return !0;
                    if (!this.mapKeys(e, t.K, i)) return !1;
                    switch (t.V.kind) {
                        case"scalar":
                            return this.scalars(Object.values(e), t.V.T, i, t.V.L);
                        case"enum":
                            return this.scalars(Object.values(e), h.INT32, i);
                        case"message":
                            return this.messages(Object.values(e), t.V.T(), n, i)
                    }
                    break
            }
            return !0
        }

        message(e, t, n, i) {
            return n ? t.isAssignable(e, i) : t.is(e, i)
        }

        messages(e, t, n, i) {
            if (!Array.isArray(e)) return !1;
            if (i < 2) return !0;
            if (n) {
                for (let r = 0; r < e.length && r < i; r++) if (!t.isAssignable(e[r], i - 1)) return !1
            } else for (let r = 0; r < e.length && r < i; r++) if (!t.is(e[r], i - 1)) return !1;
            return !0
        }

        scalar(e, t, n) {
            let i = typeof e;
            switch (t) {
                case h.UINT64:
                case h.FIXED64:
                case h.INT64:
                case h.SFIXED64:
                case h.SINT64:
                    switch (n) {
                        case M.BIGINT:
                            return i == "bigint";
                        case M.NUMBER:
                            return i == "number" && !isNaN(e);
                        default:
                            return i == "string"
                    }
                case h.BOOL:
                    return i == "boolean";
                case h.STRING:
                    return i == "string";
                case h.BYTES:
                    return e instanceof Uint8Array;
                case h.DOUBLE:
                case h.FLOAT:
                    return i == "number" && !isNaN(e);
                default:
                    return i == "number" && Number.isInteger(e)
            }
        }

        scalars(e, t, n, i) {
            if (!Array.isArray(e)) return !1;
            if (n < 2) return !0;
            if (Array.isArray(e)) {
                for (let r = 0; r < e.length && r < n; r++) if (!this.scalar(e[r], t, i)) return !1
            }
            return !0
        }

        mapKeys(e, t, n) {
            let i = Object.keys(e);
            switch (t) {
                case h.INT32:
                case h.FIXED32:
                case h.SFIXED32:
                case h.SINT32:
                case h.UINT32:
                    return this.scalars(i.slice(0, n).map(r => parseInt(r)), t, n);
                case h.BOOL:
                    return this.scalars(i.slice(0, n).map(r => r == "true" ? !0 : r == "false" ? !1 : r), t, n);
                default:
                    return this.scalars(i, t, n, M.STRING)
            }
        }
    };

    function W(o, e) {
        switch (e) {
            case M.BIGINT:
                return o.toBigInt();
            case M.NUMBER:
                return o.toNumber();
            default:
                return o.toString()
        }
    }

    var ke = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (this.fMap === void 0) {
                this.fMap = {};
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                for (let n of t) this.fMap[n.name] = n, this.fMap[n.jsonName] = n, this.fMap[n.localName] = n
            }
        }

        assert(e, t, n) {
            if (!e) {
                let i = q(n);
                throw (i == "number" || i == "boolean") && (i = n.toString()), new Error(`Cannot parse JSON ${i} for ${this.info.typeName}#${t}`)
            }
        }

        read(e, t, n) {
            this.prepare();
            let i = [];
            for (let [r, l] of Object.entries(e)) {
                let s = this.fMap[r];
                if (!s) {
                    if (!n.ignoreUnknownFields) throw new Error(`Found unknown field while reading ${this.info.typeName} from JSON format. JSON key: ${r}`);
                    continue
                }
                let a = s.localName, f;
                if (s.oneof) {
                    if (i.includes(s.oneof)) throw new Error(`Multiple members of the oneof group "${s.oneof}" of ${this.info.typeName} are present in JSON.`);
                    i.push(s.oneof), f = t[s.oneof] = {oneofKind: a}
                } else f = t;
                if (s.kind == "map") {
                    if (l === null) continue;
                    this.assert(ie(l), s.name, l);
                    let c = f[a];
                    for (let [d, y] of Object.entries(l)) {
                        this.assert(y !== null, s.name + " map value", null);
                        let m;
                        switch (s.V.kind) {
                            case"message":
                                m = s.V.T().internalJsonRead(y, n);
                                break;
                            case"enum":
                                if (m = this.enum(s.V.T(), y, s.name, n.ignoreUnknownFields), m === !1) continue;
                                break;
                            case"scalar":
                                m = this.scalar(y, s.V.T, s.V.L, s.name);
                                break
                        }
                        this.assert(m !== void 0, s.name + " map value", y);
                        let x = d;
                        s.K == h.BOOL && (x = x == "true" ? !0 : x == "false" ? !1 : x), x = this.scalar(x, s.K, M.STRING, s.name).toString(), c[x] = m
                    }
                } else if (s.repeat) {
                    if (l === null) continue;
                    this.assert(Array.isArray(l), s.name, l);
                    let c = f[a];
                    for (let d of l) {
                        this.assert(d !== null, s.name, null);
                        let y;
                        switch (s.kind) {
                            case"message":
                                y = s.T().internalJsonRead(d, n);
                                break;
                            case"enum":
                                if (y = this.enum(s.T(), d, s.name, n.ignoreUnknownFields), y === !1) continue;
                                break;
                            case"scalar":
                                y = this.scalar(d, s.T, s.L, s.name);
                                break
                        }
                        this.assert(y !== void 0, s.name, l), c.push(y)
                    }
                } else switch (s.kind) {
                    case"message":
                        if (l === null && s.T().typeName != "google.protobuf.Value") {
                            this.assert(s.oneof === void 0, s.name + " (oneof member)", null);
                            continue
                        }
                        f[a] = s.T().internalJsonRead(l, n, f[a]);
                        break;
                    case"enum":
                        let c = this.enum(s.T(), l, s.name, n.ignoreUnknownFields);
                        if (c === !1) continue;
                        f[a] = c;
                        break;
                    case"scalar":
                        f[a] = this.scalar(l, s.T, s.L, s.name);
                        break
                }
            }
        }

        enum(e, t, n, i) {
            if (e[0] == "google.protobuf.NullValue" && T(t === null, `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} only accepts null.`), t === null) return 0;
            switch (typeof t) {
                case"number":
                    return T(Number.isInteger(t), `Unable to parse field ${this.info.typeName}#${n}, enum can only be integral number, got ${t}.`), t;
                case"string":
                    let r = t;
                    e[2] && t.substring(0, e[2].length) === e[2] && (r = t.substring(e[2].length));
                    let l = e[1][r];
                    return typeof l > "u" && i ? !1 : (T(typeof l == "number", `Unable to parse field ${this.info.typeName}#${n}, enum ${e[0]} has no value for "${t}".`), l)
            }
            T(!1, `Unable to parse field ${this.info.typeName}#${n}, cannot parse enum value from ${typeof t}".`)
        }

        scalar(e, t, n, i) {
            let r;
            try {
                switch (t) {
                    case h.DOUBLE:
                    case h.FLOAT:
                        if (e === null) return 0;
                        if (e === "NaN") return Number.NaN;
                        if (e === "Infinity") return Number.POSITIVE_INFINITY;
                        if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
                        if (e === "") {
                            r = "empty string";
                            break
                        }
                        if (typeof e == "string" && e.trim().length !== e.length) {
                            r = "extra whitespace";
                            break
                        }
                        if (typeof e != "string" && typeof e != "number") break;
                        let l = Number(e);
                        if (Number.isNaN(l)) {
                            r = "not a number";
                            break
                        }
                        if (!Number.isFinite(l)) {
                            r = "too large or small";
                            break
                        }
                        return t == h.FLOAT && re(l), l;
                    case h.INT32:
                    case h.FIXED32:
                    case h.SFIXED32:
                    case h.SINT32:
                    case h.UINT32:
                        if (e === null) return 0;
                        let s;
                        if (typeof e == "number" ? s = e : e === "" ? r = "empty string" : typeof e == "string" && (e.trim().length !== e.length ? r = "extra whitespace" : s = Number(e)), s === void 0) break;
                        return t == h.UINT32 ? Y(s) : _(s), s;
                    case h.INT64:
                    case h.SFIXED64:
                    case h.SINT64:
                        if (e === null) return W(U.ZERO, n);
                        if (typeof e != "number" && typeof e != "string") break;
                        return W(U.from(e), n);
                    case h.FIXED64:
                    case h.UINT64:
                        if (e === null) return W(O.ZERO, n);
                        if (typeof e != "number" && typeof e != "string") break;
                        return W(O.from(e), n);
                    case h.BOOL:
                        if (e === null) return !1;
                        if (typeof e != "boolean") break;
                        return e;
                    case h.STRING:
                        if (e === null) return "";
                        if (typeof e != "string") {
                            r = "extra whitespace";
                            break
                        }
                        try {
                            encodeURIComponent(e)
                        } catch (a) {
                            a = "invalid UTF8";
                            break
                        }
                        return e;
                    case h.BYTES:
                        if (e === null || e === "") return new Uint8Array(0);
                        if (typeof e != "string") break;
                        return nn(e)
                }
            } catch (l) {
                r = l.message
            }
            this.assert(!1, i + (r ? " - " + r : ""), e)
        }
    };
    var Ne = class {
        constructor(e) {
            var t;
            this.fields = (t = e.fields) !== null && t !== void 0 ? t : []
        }

        write(e, t) {
            let n = {}, i = e;
            for (let r of this.fields) {
                if (!r.oneof) {
                    let f = this.field(r, i[r.localName], t);
                    f !== void 0 && (n[t.useProtoFieldName ? r.name : r.jsonName] = f);
                    continue
                }
                let l = i[r.oneof];
                if (l.oneofKind !== r.localName) continue;
                let s = r.kind == "scalar" || r.kind == "enum" ? Object.assign(Object.assign({}, t), {emitDefaultValues: !0}) : t,
                    a = this.field(r, l[r.localName], s);
                T(a !== void 0), n[t.useProtoFieldName ? r.name : r.jsonName] = a
            }
            return n
        }

        field(e, t, n) {
            let i;
            if (e.kind == "map") {
                T(typeof t == "object" && t !== null);
                let r = {};
                switch (e.V.kind) {
                    case"scalar":
                        for (let [a, f] of Object.entries(t)) {
                            let c = this.scalar(e.V.T, f, e.name, !1, !0);
                            T(c !== void 0), r[a.toString()] = c
                        }
                        break;
                    case"message":
                        let l = e.V.T();
                        for (let [a, f] of Object.entries(t)) {
                            let c = this.message(l, f, e.name, n);
                            T(c !== void 0), r[a.toString()] = c
                        }
                        break;
                    case"enum":
                        let s = e.V.T();
                        for (let [a, f] of Object.entries(t)) {
                            T(f === void 0 || typeof f == "number");
                            let c = this.enum(s, f, e.name, !1, !0, n.enumAsInteger);
                            T(c !== void 0), r[a.toString()] = c
                        }
                        break
                }
                (n.emitDefaultValues || Object.keys(r).length > 0) && (i = r)
            } else if (e.repeat) {
                T(Array.isArray(t));
                let r = [];
                switch (e.kind) {
                    case"scalar":
                        for (let a = 0; a < t.length; a++) {
                            let f = this.scalar(e.T, t[a], e.name, e.opt, !0);
                            T(f !== void 0), r.push(f)
                        }
                        break;
                    case"enum":
                        let l = e.T();
                        for (let a = 0; a < t.length; a++) {
                            T(t[a] === void 0 || typeof t[a] == "number");
                            let f = this.enum(l, t[a], e.name, e.opt, !0, n.enumAsInteger);
                            T(f !== void 0), r.push(f)
                        }
                        break;
                    case"message":
                        let s = e.T();
                        for (let a = 0; a < t.length; a++) {
                            let f = this.message(s, t[a], e.name, n);
                            T(f !== void 0), r.push(f)
                        }
                        break
                }
                (n.emitDefaultValues || r.length > 0 || n.emitDefaultValues) && (i = r)
            } else switch (e.kind) {
                case"scalar":
                    i = this.scalar(e.T, t, e.name, e.opt, n.emitDefaultValues);
                    break;
                case"enum":
                    i = this.enum(e.T(), t, e.name, e.opt, n.emitDefaultValues, n.enumAsInteger);
                    break;
                case"message":
                    i = this.message(e.T(), t, e.name, n);
                    break
            }
            return i
        }

        enum(e, t, n, i, r, l) {
            if (e[0] == "google.protobuf.NullValue") return null;
            if (t === void 0) {
                T(i);
                return
            }
            if (!(t === 0 && !r && !i)) return T(typeof t == "number"), T(Number.isInteger(t)), l || !e[1].hasOwnProperty(t) ? t : e[2] ? e[2] + e[1][t] : e[1][t]
        }

        message(e, t, n, i) {
            return t === void 0 ? i.emitDefaultValues ? null : void 0 : e.internalJsonWrite(t, i)
        }

        scalar(e, t, n, i, r) {
            if (t === void 0) {
                T(i);
                return
            }
            let l = r || i;
            switch (e) {
                case h.INT32:
                case h.SFIXED32:
                case h.SINT32:
                    return t === 0 ? l ? 0 : void 0 : (_(t), t);
                case h.FIXED32:
                case h.UINT32:
                    return t === 0 ? l ? 0 : void 0 : (Y(t), t);
                case h.FLOAT:
                    re(t);
                case h.DOUBLE:
                    return t === 0 ? l ? 0 : void 0 : (T(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t);
                case h.STRING:
                    return t === "" ? l ? "" : void 0 : (T(typeof t == "string"), t);
                case h.BOOL:
                    return t === !1 ? l ? !1 : void 0 : (T(typeof t == "boolean"), t);
                case h.UINT64:
                case h.FIXED64:
                    T(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                    let s = O.from(t);
                    return s.isZero() && !l ? void 0 : s.toString();
                case h.INT64:
                case h.SFIXED64:
                case h.SINT64:
                    T(typeof t == "number" || typeof t == "string" || typeof t == "bigint");
                    let a = U.from(t);
                    return a.isZero() && !l ? void 0 : a.toString();
                case h.BYTES:
                    return T(t instanceof Uint8Array), t.byteLength ? rn(t) : l ? "" : void 0
            }
        }
    };

    function ce(o, e = M.STRING) {
        switch (o) {
            case h.BOOL:
                return !1;
            case h.UINT64:
            case h.FIXED64:
                return W(O.ZERO, e);
            case h.INT64:
            case h.SFIXED64:
            case h.SINT64:
                return W(U.ZERO, e);
            case h.DOUBLE:
            case h.FLOAT:
                return 0;
            case h.BYTES:
                return new Uint8Array(0);
            case h.STRING:
                return "";
            default:
                return 0
        }
    }

    var xe = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            var e;
            if (!this.fieldNoToField) {
                let t = (e = this.info.fields) !== null && e !== void 0 ? e : [];
                this.fieldNoToField = new Map(t.map(n => [n.no, n]))
            }
        }

        read(e, t, n, i) {
            this.prepare();
            let r = i === void 0 ? e.len : e.pos + i;
            for (; e.pos < r;) {
                let [l, s] = e.tag(), a = this.fieldNoToField.get(l);
                if (!a) {
                    let y = n.readUnknownField;
                    if (y == "throw") throw new Error(`Unknown field ${l} (wire type ${s}) for ${this.info.typeName}`);
                    let m = e.skip(s);
                    y !== !1 && (y === !0 ? p.onRead : y)(this.info.typeName, t, l, s, m);
                    continue
                }
                let f = t, c = a.repeat, d = a.localName;
                switch (a.oneof && (f = f[a.oneof], f.oneofKind !== d && (f = t[a.oneof] = {oneofKind: d})), a.kind) {
                    case"scalar":
                    case"enum":
                        let y = a.kind == "enum" ? h.INT32 : a.T, m = a.kind == "scalar" ? a.L : void 0;
                        if (c) {
                            let I = f[d];
                            if (s == u.LengthDelimited && y != h.STRING && y != h.BYTES) {
                                let k = e.uint32() + e.pos;
                                for (; e.pos < k;) I.push(this.scalar(e, y, m))
                            } else I.push(this.scalar(e, y, m))
                        } else f[d] = this.scalar(e, y, m);
                        break;
                    case"message":
                        if (c) {
                            let I = f[d], k = a.T().internalBinaryRead(e, e.uint32(), n);
                            I.push(k)
                        } else f[d] = a.T().internalBinaryRead(e, e.uint32(), n, f[d]);
                        break;
                    case"map":
                        let [x, V] = this.mapEntry(a, e, n);
                        f[d][x] = V;
                        break
                }
            }
        }

        mapEntry(e, t, n) {
            let i = t.uint32(), r = t.pos + i, l, s;
            for (; t.pos < r;) {
                let [a, f] = t.tag();
                switch (a) {
                    case 1:
                        e.K == h.BOOL ? l = t.bool().toString() : l = this.scalar(t, e.K, M.STRING);
                        break;
                    case 2:
                        switch (e.V.kind) {
                            case"scalar":
                                s = this.scalar(t, e.V.T, e.V.L);
                                break;
                            case"enum":
                                s = t.int32();
                                break;
                            case"message":
                                s = e.V.T().internalBinaryRead(t, t.uint32(), n);
                                break
                        }
                        break;
                    default:
                        throw new Error(`Unknown field ${a} (wire type ${f}) in map entry for ${this.info.typeName}#${e.name}`)
                }
            }
            if (l === void 0) {
                let a = ce(e.K);
                l = e.K == h.BOOL ? a.toString() : a
            }
            if (s === void 0) switch (e.V.kind) {
                case"scalar":
                    s = ce(e.V.T, e.V.L);
                    break;
                case"enum":
                    s = 0;
                    break;
                case"message":
                    s = e.V.T().create();
                    break
            }
            return [l, s]
        }

        scalar(e, t, n) {
            switch (t) {
                case h.INT32:
                    return e.int32();
                case h.STRING:
                    return e.string();
                case h.BOOL:
                    return e.bool();
                case h.DOUBLE:
                    return e.double();
                case h.FLOAT:
                    return e.float();
                case h.INT64:
                    return W(e.int64(), n);
                case h.UINT64:
                    return W(e.uint64(), n);
                case h.FIXED64:
                    return W(e.fixed64(), n);
                case h.FIXED32:
                    return e.fixed32();
                case h.BYTES:
                    return e.bytes();
                case h.UINT32:
                    return e.uint32();
                case h.SFIXED32:
                    return e.sfixed32();
                case h.SFIXED64:
                    return W(e.sfixed64(), n);
                case h.SINT32:
                    return e.sint32();
                case h.SINT64:
                    return W(e.sint64(), n)
            }
        }
    };
    var Te = class {
        constructor(e) {
            this.info = e
        }

        prepare() {
            if (!this.fields) {
                let e = this.info.fields ? this.info.fields.concat() : [];
                this.fields = e.sort((t, n) => t.no - n.no)
            }
        }

        write(e, t, n) {
            this.prepare();
            for (let r of this.fields) {
                let l, s, a = r.repeat, f = r.localName;
                if (r.oneof) {
                    let c = e[r.oneof];
                    if (c.oneofKind !== f) continue;
                    l = c[f], s = !0
                } else l = e[f], s = !1;
                switch (r.kind) {
                    case"scalar":
                    case"enum":
                        let c = r.kind == "enum" ? h.INT32 : r.T;
                        if (a) if (T(Array.isArray(l)), a == ue.PACKED) this.packed(t, c, r.no, l); else for (let d of l) this.scalar(t, c, r.no, d, !0); else l === void 0 ? T(r.opt) : this.scalar(t, c, r.no, l, s || r.opt);
                        break;
                    case"message":
                        if (a) {
                            T(Array.isArray(l));
                            for (let d of l) this.message(t, n, r.T(), r.no, d)
                        } else this.message(t, n, r.T(), r.no, l);
                        break;
                    case"map":
                        T(typeof l == "object" && l !== null);
                        for (let [d, y] of Object.entries(l)) this.mapEntry(t, n, r, d, y);
                        break
                }
            }
            let i = n.writeUnknownFields;
            i !== !1 && (i === !0 ? p.onWrite : i)(this.info.typeName, e, t)
        }

        mapEntry(e, t, n, i, r) {
            e.tag(n.no, u.LengthDelimited), e.fork();
            let l = i;
            switch (n.K) {
                case h.INT32:
                case h.FIXED32:
                case h.UINT32:
                case h.SFIXED32:
                case h.SINT32:
                    l = Number.parseInt(i);
                    break;
                case h.BOOL:
                    T(i == "true" || i == "false"), l = i == "true";
                    break
            }
            switch (this.scalar(e, n.K, 1, l, !0), n.V.kind) {
                case"scalar":
                    this.scalar(e, n.V.T, 2, r, !0);
                    break;
                case"enum":
                    this.scalar(e, h.INT32, 2, r, !0);
                    break;
                case"message":
                    this.message(e, t, n.V.T(), 2, r);
                    break
            }
            e.join()
        }

        message(e, t, n, i, r) {
            r !== void 0 && (n.internalBinaryWrite(r, e.tag(i, u.LengthDelimited).fork(), t), e.join())
        }

        scalar(e, t, n, i, r) {
            let [l, s, a] = this.scalarInfo(t, i);
            (!a || r) && (e.tag(n, l), e[s](i))
        }

        packed(e, t, n, i) {
            if (!i.length) return;
            T(t !== h.BYTES && t !== h.STRING), e.tag(n, u.LengthDelimited), e.fork();
            let [, r] = this.scalarInfo(t);
            for (let l = 0; l < i.length; l++) e[r](i[l]);
            e.join()
        }

        scalarInfo(e, t) {
            let n = u.Varint, i, r = t === void 0, l = t === 0;
            switch (e) {
                case h.INT32:
                    i = "int32";
                    break;
                case h.STRING:
                    l = r || !t.length, n = u.LengthDelimited, i = "string";
                    break;
                case h.BOOL:
                    l = t === !1, i = "bool";
                    break;
                case h.UINT32:
                    i = "uint32";
                    break;
                case h.DOUBLE:
                    n = u.Bit64, i = "double";
                    break;
                case h.FLOAT:
                    n = u.Bit32, i = "float";
                    break;
                case h.INT64:
                    l = r || U.from(t).isZero(), i = "int64";
                    break;
                case h.UINT64:
                    l = r || O.from(t).isZero(), i = "uint64";
                    break;
                case h.FIXED64:
                    l = r || O.from(t).isZero(), n = u.Bit64, i = "fixed64";
                    break;
                case h.BYTES:
                    l = r || !t.byteLength, n = u.LengthDelimited, i = "bytes";
                    break;
                case h.FIXED32:
                    n = u.Bit32, i = "fixed32";
                    break;
                case h.SFIXED32:
                    n = u.Bit32, i = "sfixed32";
                    break;
                case h.SFIXED64:
                    l = r || U.from(t).isZero(), n = u.Bit64, i = "sfixed64";
                    break;
                case h.SINT32:
                    i = "sint32";
                    break;
                case h.SINT64:
                    l = r || U.from(t).isZero(), i = "sint64";
                    break
            }
            return [n, i, r || l]
        }
    };

    function yn(o) {
        let e = {};
        Object.defineProperty(e, v, {enumerable: !1, value: o});
        for (let t of o.fields) {
            let n = t.localName;
            if (!t.opt) if (t.oneof) e[t.oneof] = {oneofKind: void 0}; else if (t.repeat) e[n] = []; else switch (t.kind) {
                case"scalar":
                    e[n] = ce(t.T, t.L);
                    break;
                case"enum":
                    e[n] = 0;
                    break;
                case"map":
                    e[n] = {};
                    break
            }
        }
        return e
    }

    function g(o, e, t) {
        let n, i = t, r;
        for (let l of o.fields) {
            let s = l.localName;
            if (l.oneof) {
                let a = i[l.oneof];
                if (a?.oneofKind == null) continue;
                if (n = a[s], r = e[l.oneof], r.oneofKind = a.oneofKind, n == null) {
                    delete r[s];
                    continue
                }
            } else if (n = i[s], r = e, n == null) continue;
            switch (l.repeat && (r[s].length = n.length), l.kind) {
                case"scalar":
                case"enum":
                    if (l.repeat) for (let f = 0; f < n.length; f++) r[s][f] = n[f]; else r[s] = n;
                    break;
                case"message":
                    let a = l.T();
                    if (l.repeat) for (let f = 0; f < n.length; f++) r[s][f] = a.create(n[f]); else r[s] === void 0 ? r[s] = a.create(n) : a.mergePartial(r[s], n);
                    break;
                case"map":
                    switch (l.V.kind) {
                        case"scalar":
                        case"enum":
                            Object.assign(r[s], n);
                            break;
                        case"message":
                            let f = l.V.T();
                            for (let c of Object.keys(n)) r[s][c] = f.create(n[c]);
                            break
                    }
                    break
            }
        }
    }

    function bn(o, e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        for (let n of o.fields) {
            let i = n.localName, r = n.oneof ? e[n.oneof][i] : e[i], l = n.oneof ? t[n.oneof][i] : t[i];
            switch (n.kind) {
                case"enum":
                case"scalar":
                    let s = n.kind == "enum" ? h.INT32 : n.T;
                    if (!(n.repeat ? wn(s, r, l) : kn(s, r, l))) return !1;
                    break;
                case"map":
                    if (!(n.V.kind == "message" ? vn(n.V.T(), Be(r), Be(l)) : wn(n.V.kind == "enum" ? h.INT32 : n.V.T, Be(r), Be(l)))) return !1;
                    break;
                case"message":
                    let a = n.T();
                    if (!(n.repeat ? vn(a, r, l) : a.equals(r, l))) return !1;
                    break
            }
        }
        return !0
    }

    var Be = Object.values;

    function kn(o, e, t) {
        if (e === t) return !0;
        if (o !== h.BYTES) return !1;
        let n = e, i = t;
        if (n.length !== i.length) return !1;
        for (let r = 0; r < n.length; r++) if (n[r] != i[r]) return !1;
        return !0
    }

    function wn(o, e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!kn(o, e[n], t[n])) return !1;
        return !0
    }

    function vn(o, e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (!o.equals(e[n], t[n])) return !1;
        return !0
    }

    var b = class {
        constructor(e, t, n) {
            this.defaultCheckDepth = 16, this.typeName = e, this.fields = t.map(mn), this.options = n ?? {}, this.refTypeCheck = new be(this), this.refJsonReader = new ke(this), this.refJsonWriter = new Ne(this), this.refBinReader = new xe(this), this.refBinWriter = new Te(this)
        }

        create(e) {
            let t = yn(this);
            return e !== void 0 && g(this, t, e), t
        }

        clone(e) {
            let t = this.create();
            return g(this, t, e), t
        }

        equals(e, t) {
            return bn(this, e, t)
        }

        is(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !1)
        }

        isAssignable(e, t = this.defaultCheckDepth) {
            return this.refTypeCheck.is(e, t, !0)
        }

        mergePartial(e, t) {
            g(this, e, t)
        }

        fromBinary(e, t) {
            let n = un(t);
            return this.internalBinaryRead(n.readerFactory(e), e.byteLength, n)
        }

        fromJson(e, t) {
            return this.internalJsonRead(e, Me(t))
        }

        fromJsonString(e, t) {
            let n = JSON.parse(e);
            return this.fromJson(n, t)
        }

        toJson(e, t) {
            return this.internalJsonWrite(e, fe(t))
        }

        toJsonString(e, t) {
            var n;
            let i = this.toJson(e, t);
            return JSON.stringify(i, null, (n = t?.prettySpaces) !== null && n !== void 0 ? n : 0)
        }

        toBinary(e, t) {
            let n = hn(t);
            return this.internalBinaryWrite(e, n.writerFactory(), n).finish()
        }

        internalJsonRead(e, t, n) {
            if (e !== null && typeof e == "object" && !Array.isArray(e)) {
                let i = n ?? this.create();
                return this.refJsonReader.read(e, i, t), i
            }
            throw new Error(`Unable to parse message ${this.typeName} from JSON ${q(e)}.`)
        }

        internalJsonWrite(e, t) {
            return this.refJsonWriter.write(e, t)
        }

        internalBinaryWrite(e, t, n) {
            return this.refBinWriter.write(e, t, n), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create();
            return this.refBinReader.read(e, r, n, t), r
        }
    };
    var $e = class extends b {
        constructor() {
            super("CommandDm", [{no: 1, name: "id", kind: "scalar", T: 3, L: 0}, {
                no: 2,
                name: "oid",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "mid", kind: "scalar", T: 3, L: 0}, {no: 4, name: "command", kind: "scalar", T: 9}, {
                no: 5,
                name: "content",
                kind: "scalar",
                T: 9
            }, {no: 6, name: "progress", kind: "scalar", T: 5}, {no: 7, name: "ctime", kind: "scalar", T: 9}, {
                no: 8,
                name: "mtime",
                kind: "scalar",
                T: 9
            }, {no: 9, name: "extra", kind: "scalar", T: 9}, {no: 10, name: "idStr", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = {
                id: 0n,
                oid: 0n,
                mid: 0n,
                command: "",
                content: "",
                progress: 0,
                ctime: "",
                mtime: "",
                extra: "",
                idStr: ""
            };
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.id = e.int64().toBigInt();
                        break;
                    case 2:
                        r.oid = e.int64().toBigInt();
                        break;
                    case 3:
                        r.mid = e.int64().toBigInt();
                        break;
                    case 4:
                        r.command = e.string();
                        break;
                    case 5:
                        r.content = e.string();
                        break;
                    case 6:
                        r.progress = e.int32();
                        break;
                    case 7:
                        r.ctime = e.string();
                        break;
                    case 8:
                        r.mtime = e.string();
                        break;
                    case 9:
                        r.extra = e.string();
                        break;
                    case 10:
                        r.idStr = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.id !== 0n && t.tag(1, u.Varint).int64(e.id), e.oid !== 0n && t.tag(2, u.Varint).int64(e.oid), e.mid !== 0n && t.tag(3, u.Varint).int64(e.mid), e.command !== "" && t.tag(4, u.LengthDelimited).string(e.command), e.content !== "" && t.tag(5, u.LengthDelimited).string(e.content), e.progress !== 0 && t.tag(6, u.Varint).int32(e.progress), e.ctime !== "" && t.tag(7, u.LengthDelimited).string(e.ctime), e.mtime !== "" && t.tag(8, u.LengthDelimited).string(e.mtime), e.extra !== "" && t.tag(9, u.LengthDelimited).string(e.extra), e.idStr !== "" && t.tag(10, u.LengthDelimited).string(e.idStr);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, H = new $e, Pe = class extends b {
        constructor() {
            super("DmView", [{no: 1, name: "commandDms", kind: "message", repeat: 1, T: () => H}])
        }

        create(e) {
            let t = {commandDms: []};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.commandDms.push(H.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.commandDms.length; r++) H.internalBinaryWrite(e.commandDms[r], t.tag(1, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ce = new Pe, ze = class extends b {
        constructor() {
            super("DmViewReply", [{no: 22, name: "dmView", kind: "message", T: () => Ce}])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 22:
                        r.dmView = Ce.internalBinaryRead(e, e.uint32(), n, r.dmView);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.dmView && Ce.internalBinaryWrite(e.dmView, t.tag(22, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, je = new ze;
    var si = /^(http|https):\/\/[^/]*/;

    function ai(o) {
        let e = li(o.length), t = new Uint8Array(5 + o.length);
        return t[0] = 0, t.set(e, 1), t.set(o, 5), t
    }

    function li(o) {
        let e = new ArrayBuffer(4);
        return new DataView(e).setUint32(0, o, !1), new Uint8Array(e)
    }

    var Ge = {protocol: "http", hostname: "upos-sz-mirrorali.bilivideo.com", port: 80, active: !1, needWrite: !0};

    function Nn() {
        let {protocol: o, hostname: e, port: t, active: n, needWrite: i} = fi(), r = `${o}://${e}:${t}`;
        return i && ui(), n ? r : null
    }

    function fi() {
        let o = $persistentStore.read("Bilibili-CDN");
        return o ? JSON.parse(o) : Ge
    }

    function ui() {
        delete Ge.needWrite, $persistentStore.write(JSON.stringify(Ge), "Bilibili-CDN")
    }

    function Je(o, e) {
        for (let t of o) {
            let n = t.baseURL ? t : t.dashVideo;
            if (n) {
                let i = n.baseURL;
                n.baseURL = i.replace(si, e)
            }
        }
        console.log(`CDN replace -> ${e}`)
    }

    function Z(o, e) {
        let t = o.toBinary(e);
        $done({body: ai(t)})
    }

    var Ze = class extends b {
        constructor() {
            super("ModeStatus", [{no: 1, name: "modes", kind: "message", repeat: 1, T: () => Ke}])
        }

        create(e) {
            let t = {modes: []};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.modes.push(Ke.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.modes.length; r++) Ke.internalBinaryWrite(e.modes[r], t.tag(1, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ye = new Ze, _e = class extends b {
        constructor() {
            super("Mode", [{no: 1, name: "id", kind: "scalar", T: 5}, {
                no: 2,
                name: "name",
                kind: "scalar",
                T: 9
            }, {no: 4, name: "f4", kind: "scalar", T: 5}, {no: 5, name: "f5", kind: "message", T: () => Xe}])
        }

        create(e) {
            let t = {id: 0, name: "", f4: 0};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.id = e.int32();
                        break;
                    case 2:
                        r.name = e.string();
                        break;
                    case 4:
                        r.f4 = e.int32();
                        break;
                    case 5:
                        r.f5 = Xe.internalBinaryRead(e, e.uint32(), n, r.f5);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.id !== 0 && t.tag(1, u.Varint).int32(e.id), e.name !== "" && t.tag(2, u.LengthDelimited).string(e.name), e.f4 !== 0 && t.tag(4, u.Varint).int32(e.f4), e.f5 && Xe.internalBinaryWrite(e.f5, t.tag(5, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ke = new _e, qe = class extends b {
        constructor() {
            super("F5", [{no: 1, name: "f1", kind: "scalar", T: 5}])
        }

        create(e) {
            let t = {f1: 0};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.f1 = e.int32();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.f1 !== 0 && t.tag(1, u.Varint).int32(e.f1);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Xe = new qe;
    var rt;
    (function (o) {
        o[o.NoErr = 0] = "NoErr", o[o.WithMultiDeviceLoginErr = 1] = "WithMultiDeviceLoginErr"
    })(rt || (rt = {}));
    var ot = class extends b {
        constructor() {
            super("PlayView", [{no: 1, name: "playURL", kind: "message", T: () => He}])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.playURL = He.internalBinaryRead(e, e.uint32(), n, r.playURL);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.playURL && He.internalBinaryWrite(e.playURL, t.tag(1, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, ht = new ot, st = class extends b {
        constructor() {
            super("PlayURLReply", [{no: 1, name: "quality", kind: "scalar", T: 13}, {
                no: 2,
                name: "format",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "timelength", kind: "scalar", T: 4, L: 0}, {
                no: 4,
                name: "video_codecid",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "videos", kind: "message", repeat: 1, T: () => et}, {
                no: 6,
                name: "audios",
                kind: "message",
                repeat: 1,
                T: () => Qe
            }])
        }

        create(e) {
            let t = {quality: 0, format: "", timelength: 0n, videoCodecid: 0, videos: [], audios: []};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.quality = e.uint32();
                        break;
                    case 2:
                        r.format = e.string();
                        break;
                    case 3:
                        r.timelength = e.uint64().toBigInt();
                        break;
                    case 4:
                        r.videoCodecid = e.uint32();
                        break;
                    case 5:
                        r.videos.push(et.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 6:
                        r.audios.push(Qe.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.quality !== 0 && t.tag(1, u.Varint).uint32(e.quality), e.format !== "" && t.tag(2, u.LengthDelimited).string(e.format), e.timelength !== 0n && t.tag(3, u.Varint).uint64(e.timelength), e.videoCodecid !== 0 && t.tag(4, u.Varint).uint32(e.videoCodecid);
            for (let r = 0; r < e.videos.length; r++) et.internalBinaryWrite(e.videos[r], t.tag(5, u.LengthDelimited).fork(), n).join();
            for (let r = 0; r < e.audios.length; r++) Qe.internalBinaryWrite(e.audios[r], t.tag(6, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, He = new st, at = class extends b {
        constructor() {
            super("DashItem", [{no: 1, name: "id", kind: "scalar", T: 13}, {
                no: 2,
                name: "baseURL",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "backup_url", kind: "scalar", repeat: 2, T: 9}, {
                no: 4,
                name: "bandwidth",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "codecid", kind: "scalar", T: 13}, {no: 6, name: "md5", kind: "scalar", T: 9}, {
                no: 7,
                name: "size",
                kind: "scalar",
                T: 4,
                L: 0
            }, {no: 8, name: "frame_rate", kind: "scalar", T: 9}, {no: 9, name: "widevine_pssh", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = {
                id: 0,
                baseURL: "",
                backupUrl: [],
                bandwidth: 0,
                codecid: 0,
                md5: "",
                size: 0n,
                frameRate: "",
                widevinePssh: ""
            };
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.id = e.uint32();
                        break;
                    case 2:
                        r.baseURL = e.string();
                        break;
                    case 3:
                        r.backupUrl.push(e.string());
                        break;
                    case 4:
                        r.bandwidth = e.uint32();
                        break;
                    case 5:
                        r.codecid = e.uint32();
                        break;
                    case 6:
                        r.md5 = e.string();
                        break;
                    case 7:
                        r.size = e.uint64().toBigInt();
                        break;
                    case 8:
                        r.frameRate = e.string();
                        break;
                    case 9:
                        r.widevinePssh = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.id !== 0 && t.tag(1, u.Varint).uint32(e.id), e.baseURL !== "" && t.tag(2, u.LengthDelimited).string(e.baseURL);
            for (let r = 0; r < e.backupUrl.length; r++) t.tag(3, u.LengthDelimited).string(e.backupUrl[r]);
            e.bandwidth !== 0 && t.tag(4, u.Varint).uint32(e.bandwidth), e.codecid !== 0 && t.tag(5, u.Varint).uint32(e.codecid), e.md5 !== "" && t.tag(6, u.LengthDelimited).string(e.md5), e.size !== 0n && t.tag(7, u.Varint).uint64(e.size), e.frameRate !== "" && t.tag(8, u.LengthDelimited).string(e.frameRate), e.widevinePssh !== "" && t.tag(9, u.LengthDelimited).string(e.widevinePssh);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Qe = new at, lt = class extends b {
        constructor() {
            super("Stream", [{no: 1, name: "stream_info", kind: "message", T: () => tt}, {
                no: 2,
                name: "dash_video",
                kind: "message",
                T: () => nt
            }])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.streamInfo = tt.internalBinaryRead(e, e.uint32(), n, r.streamInfo);
                        break;
                    case 2:
                        r.dashVideo = nt.internalBinaryRead(e, e.uint32(), n, r.dashVideo);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.streamInfo && tt.internalBinaryWrite(e.streamInfo, t.tag(1, u.LengthDelimited).fork(), n).join(), e.dashVideo && nt.internalBinaryWrite(e.dashVideo, t.tag(2, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, et = new lt, ft = class extends b {
        constructor() {
            super("StreamInfo", [{no: 1, name: "quality", kind: "scalar", T: 13}, {
                no: 2,
                name: "format",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "description", kind: "scalar", T: 9}, {
                no: 4,
                name: "err_code",
                kind: "enum",
                T: () => ["PlayErr", rt]
            }, {no: 5, name: "limit", kind: "message", T: () => it}, {
                no: 6,
                name: "need_vip",
                kind: "scalar",
                T: 8
            }, {no: 7, name: "need_login", kind: "scalar", T: 8}, {no: 8, name: "intact", kind: "scalar", T: 8}, {
                no: 9,
                name: "no_rexcode",
                kind: "scalar",
                T: 8
            }, {no: 10, name: "attribute", kind: "scalar", T: 3, L: 0}, {
                no: 11,
                name: "new_description",
                kind: "scalar",
                T: 9
            }, {no: 12, name: "display_desc", kind: "scalar", T: 9}, {
                no: 13,
                name: "superscript",
                kind: "scalar",
                T: 9
            }])
        }

        create(e) {
            let t = {
                quality: 0,
                format: "",
                description: "",
                errCode: 0,
                needVip: !1,
                needLogin: !1,
                intact: !1,
                noRexcode: !1,
                attribute: 0n,
                newDescription: "",
                displayDesc: "",
                superscript: ""
            };
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.quality = e.uint32();
                        break;
                    case 2:
                        r.format = e.string();
                        break;
                    case 3:
                        r.description = e.string();
                        break;
                    case 4:
                        r.errCode = e.int32();
                        break;
                    case 5:
                        r.limit = it.internalBinaryRead(e, e.uint32(), n, r.limit);
                        break;
                    case 6:
                        r.needVip = e.bool();
                        break;
                    case 7:
                        r.needLogin = e.bool();
                        break;
                    case 8:
                        r.intact = e.bool();
                        break;
                    case 9:
                        r.noRexcode = e.bool();
                        break;
                    case 10:
                        r.attribute = e.int64().toBigInt();
                        break;
                    case 11:
                        r.newDescription = e.string();
                        break;
                    case 12:
                        r.displayDesc = e.string();
                        break;
                    case 13:
                        r.superscript = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.quality !== 0 && t.tag(1, u.Varint).uint32(e.quality), e.format !== "" && t.tag(2, u.LengthDelimited).string(e.format), e.description !== "" && t.tag(3, u.LengthDelimited).string(e.description), e.errCode !== 0 && t.tag(4, u.Varint).int32(e.errCode), e.limit && it.internalBinaryWrite(e.limit, t.tag(5, u.LengthDelimited).fork(), n).join(), e.needVip !== !1 && t.tag(6, u.Varint).bool(e.needVip), e.needLogin !== !1 && t.tag(7, u.Varint).bool(e.needLogin), e.intact !== !1 && t.tag(8, u.Varint).bool(e.intact), e.noRexcode !== !1 && t.tag(9, u.Varint).bool(e.noRexcode), e.attribute !== 0n && t.tag(10, u.Varint).int64(e.attribute), e.newDescription !== "" && t.tag(11, u.LengthDelimited).string(e.newDescription), e.displayDesc !== "" && t.tag(12, u.LengthDelimited).string(e.displayDesc), e.superscript !== "" && t.tag(13, u.LengthDelimited).string(e.superscript);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, tt = new ft, ut = class extends b {
        constructor() {
            super("DashVideo", [{no: 1, name: "baseURL", kind: "scalar", T: 9}, {
                no: 2,
                name: "backup_url",
                kind: "scalar",
                repeat: 2,
                T: 9
            }, {no: 3, name: "bandwidth", kind: "scalar", T: 13}, {
                no: 4,
                name: "codecid",
                kind: "scalar",
                T: 13
            }, {no: 5, name: "md5", kind: "scalar", T: 9}, {no: 6, name: "size", kind: "scalar", T: 4, L: 0}, {
                no: 7,
                name: "audioId",
                kind: "scalar",
                T: 13
            }, {no: 8, name: "no_rexcode", kind: "scalar", T: 8}, {
                no: 9,
                name: "frame_rate",
                kind: "scalar",
                T: 9
            }, {no: 10, name: "width", kind: "scalar", T: 5}, {no: 11, name: "height", kind: "scalar", T: 5}, {
                no: 12,
                name: "widevine_pssh",
                kind: "scalar",
                T: 9
            }])
        }

        create(e) {
            let t = {
                baseURL: "",
                backupUrl: [],
                bandwidth: 0,
                codecid: 0,
                md5: "",
                size: 0n,
                audioId: 0,
                noRexcode: !1,
                frameRate: "",
                width: 0,
                height: 0,
                widevinePssh: ""
            };
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.baseURL = e.string();
                        break;
                    case 2:
                        r.backupUrl.push(e.string());
                        break;
                    case 3:
                        r.bandwidth = e.uint32();
                        break;
                    case 4:
                        r.codecid = e.uint32();
                        break;
                    case 5:
                        r.md5 = e.string();
                        break;
                    case 6:
                        r.size = e.uint64().toBigInt();
                        break;
                    case 7:
                        r.audioId = e.uint32();
                        break;
                    case 8:
                        r.noRexcode = e.bool();
                        break;
                    case 9:
                        r.frameRate = e.string();
                        break;
                    case 10:
                        r.width = e.int32();
                        break;
                    case 11:
                        r.height = e.int32();
                        break;
                    case 12:
                        r.widevinePssh = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.baseURL !== "" && t.tag(1, u.LengthDelimited).string(e.baseURL);
            for (let r = 0; r < e.backupUrl.length; r++) t.tag(2, u.LengthDelimited).string(e.backupUrl[r]);
            e.bandwidth !== 0 && t.tag(3, u.Varint).uint32(e.bandwidth), e.codecid !== 0 && t.tag(4, u.Varint).uint32(e.codecid), e.md5 !== "" && t.tag(5, u.LengthDelimited).string(e.md5), e.size !== 0n && t.tag(6, u.Varint).uint64(e.size), e.audioId !== 0 && t.tag(7, u.Varint).uint32(e.audioId), e.noRexcode !== !1 && t.tag(8, u.Varint).bool(e.noRexcode), e.frameRate !== "" && t.tag(9, u.LengthDelimited).string(e.frameRate), e.width !== 0 && t.tag(10, u.Varint).int32(e.width), e.height !== 0 && t.tag(11, u.Varint).int32(e.height), e.widevinePssh !== "" && t.tag(12, u.LengthDelimited).string(e.widevinePssh);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, nt = new ut, ct = class extends b {
        constructor() {
            super("StreamLimit", [{no: 1, name: "title", kind: "scalar", T: 9}, {
                no: 2,
                name: "uri",
                kind: "scalar",
                T: 9
            }, {no: 3, name: "msg", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = {title: "", uri: "", msg: ""};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.title = e.string();
                        break;
                    case 2:
                        r.uri = e.string();
                        break;
                    case 3:
                        r.msg = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.title !== "" && t.tag(1, u.LengthDelimited).string(e.title), e.uri !== "" && t.tag(2, u.LengthDelimited).string(e.uri), e.msg !== "" && t.tag(3, u.LengthDelimited).string(e.msg);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, it = new ct;
    var pt = class extends b {
        constructor() {
            super("google.protobuf.Any", [{no: 1, name: "type_url", kind: "scalar", T: 9}, {
                no: 2,
                name: "value",
                kind: "scalar",
                T: 12
            }])
        }

        pack(e, t) {
            return {typeUrl: this.typeNameToUrl(t.typeName), value: t.toBinary(e)}
        }

        unpack(e, t, n) {
            if (!this.contains(e, t)) throw new Error("Cannot unpack google.protobuf.Any with typeUrl '" + e.typeUrl + "' as " + t.typeName + ".");
            return t.fromBinary(e.value, n)
        }

        contains(e, t) {
            if (!e.typeUrl.length) return !1;
            let n = typeof t == "string" ? t : t.typeName, i = this.typeUrlToName(e.typeUrl);
            return n === i
        }

        internalJsonWrite(e, t) {
            var n;
            if (e.typeUrl === "") return {};
            let i = this.typeUrlToName(e.typeUrl), r = fe(t),
                l = (n = r.typeRegistry) === null || n === void 0 ? void 0 : n.find(f => f.typeName === i);
            if (!l) throw new globalThis.Error("Unable to convert google.protobuf.Any with typeUrl '" + e.typeUrl + "' to JSON. The specified type " + i + " is not available in the type registry.");
            let s = l.fromBinary(e.value, {readUnknownField: !1}), a = l.internalJsonWrite(s, r);
            return (i.startsWith("google.protobuf.") || !ie(a)) && (a = {value: a}), a["@type"] = e.typeUrl, a
        }

        internalJsonRead(e, t, n) {
            var i;
            if (!ie(e)) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON " + q(e) + ".");
            if (typeof e["@type"] != "string" || e["@type"] == "") return this.create();
            let r = this.typeUrlToName(e["@type"]),
                l = (i = t?.typeRegistry) === null || i === void 0 ? void 0 : i.find(a => a.typeName == r);
            if (!l) throw new globalThis.Error("Unable to parse google.protobuf.Any from JSON. The specified type " + r + " is not available in the type registry.");
            let s;
            if (r.startsWith("google.protobuf.") && e.hasOwnProperty("value")) s = l.fromJson(e.value, t); else {
                let a = Object.assign({}, e);
                delete a["@type"], s = l.fromJson(a, t)
            }
            return n === void 0 && (n = this.create()), n.typeUrl = e["@type"], n.value = l.toBinary(s), n
        }

        typeNameToUrl(e) {
            if (!e.length) throw new Error("invalid type name: " + e);
            return "type.googleapis.com/" + e
        }

        typeUrlToName(e) {
            if (!e.length) throw new Error("invalid type url: " + e);
            let t = e.lastIndexOf("/"), n = t > 0 ? e.substring(t + 1) : e;
            if (!n.length) throw new Error("invalid type url: " + e);
            return n
        }

        create(e) {
            let t = {typeUrl: "", value: new Uint8Array(0)};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.typeUrl = e.string();
                        break;
                    case 2:
                        r.value = e.bytes();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.typeUrl !== "" && t.tag(1, u.LengthDelimited).string(e.typeUrl), e.value.length && t.tag(2, u.LengthDelimited).bytes(e.value);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Q = new pt;
    var gt = class extends b {
        constructor() {
            super("CM", [{no: 1, name: "source_content", kind: "message", T: () => Q}])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.sourceContent = Q.internalBinaryRead(e, e.uint32(), n, r.sourceContent);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.sourceContent && Q.internalBinaryWrite(e.sourceContent, t.tag(1, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, G = new gt, yt = class extends b {
        constructor() {
            super("CMConfig", [{no: 1, name: "ads_control", kind: "message", T: () => Q}])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.adsControl = Q.internalBinaryRead(e, e.uint32(), n, r.adsControl);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.adsControl && Q.internalBinaryWrite(e.adsControl, t.tag(1, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, dt = new yt, wt = class extends b {
        constructor() {
            super("CmIpad", [{no: 1, name: "cm", kind: "message", T: () => G}, {
                no: 4,
                name: "duration",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 5, name: "aid", kind: "scalar", T: 3, L: 0}])
        }

        create(e) {
            let t = {duration: 0n, aid: 0n};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.cm = G.internalBinaryRead(e, e.uint32(), n, r.cm);
                        break;
                    case 4:
                        r.duration = e.int64().toBigInt();
                        break;
                    case 5:
                        r.aid = e.int64().toBigInt();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.cm && G.internalBinaryWrite(e.cm, t.tag(1, u.LengthDelimited).fork(), n).join(), e.duration !== 0n && t.tag(4, u.Varint).int64(e.duration), e.aid !== 0n && t.tag(5, u.Varint).int64(e.aid);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, mt = new wt, vt = class extends b {
        constructor() {
            super("ViewReply", [{no: 30, name: "cms", kind: "message", repeat: 1, T: () => G}, {
                no: 31,
                name: "cm_config",
                kind: "message",
                T: () => dt
            }, {no: 41, name: "cm_ipad", kind: "message", T: () => mt}])
        }

        create(e) {
            let t = {cms: []};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 30:
                        r.cms.push(G.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 31:
                        r.cmConfig = dt.internalBinaryRead(e, e.uint32(), n, r.cmConfig);
                        break;
                    case 41:
                        r.cmIpad = mt.internalBinaryRead(e, e.uint32(), n, r.cmIpad);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.cms.length; r++) G.internalBinaryWrite(e.cms[r], t.tag(30, u.LengthDelimited).fork(), n).join();
            e.cmConfig && dt.internalBinaryWrite(e.cmConfig, t.tag(31, u.LengthDelimited).fork(), n).join(), e.cmIpad && mt.internalBinaryWrite(e.cmIpad, t.tag(41, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, bt = new vt;
    var kt = class extends b {
        constructor() {
            super("MainListReply", [{no: 11, name: "cm", kind: "message", T: () => G}])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 11:
                        r.cm = G.internalBinaryRead(e, e.uint32(), n, r.cm);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.cm && G.internalBinaryWrite(e.cm, t.tag(11, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Nt = new kt;
    var Tt = class extends b {
        constructor() {
            super("Item", [{no: 4, name: "linktype", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = {linktype: ""};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 4:
                        r.linktype = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.linktype !== "" && t.tag(4, u.LengthDelimited).string(e.linktype);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, xt = new Tt, Bt = class extends b {
        constructor() {
            super("SearchAll", [{no: 4, name: "items", kind: "message", repeat: 1, T: () => xt}])
        }

        create(e) {
            let t = {items: []};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 4:
                        r.items.push(xt.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.items.length; r++) xt.internalBinaryWrite(e.items[r], t.tag(4, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, It = new Bt;
    var oe;
    (function (o) {
        o[o.dyn_none = 0] = "dyn_none", o[o.forward = 1] = "forward", o[o.av = 2] = "av", o[o.pgc = 3] = "pgc", o[o.courses = 4] = "courses", o[o.fold = 5] = "fold", o[o.word = 6] = "word", o[o.draw = 7] = "draw", o[o.article = 8] = "article", o[o.music = 9] = "music", o[o.common_square = 10] = "common_square", o[o.common_vertical = 11] = "common_vertical", o[o.live = 12] = "live", o[o.medialist = 13] = "medialist", o[o.courses_season = 14] = "courses_season", o[o.ad = 15] = "ad", o[o.applet = 16] = "applet", o[o.subscription = 17] = "subscription", o[o.live_rcmd = 18] = "live_rcmd", o[o.banner = 19] = "banner", o[o.ugc_season = 20] = "ugc_season", o[o.subscription_new = 21] = "subscription_new", o[o.story = 22] = "story", o[o.topic_rcmd = 23] = "topic_rcmd"
    })(oe || (oe = {}));
    var Rt = class extends b {
        constructor() {
            super("DynamicItem", [{no: 1, name: "card_type", kind: "enum", T: () => ["DynamicType", oe]}, {
                no: 2,
                name: "item_type",
                kind: "enum",
                T: () => ["DynamicType", oe]
            }, {no: 5, name: "has_fold", kind: "scalar", T: 5}, {no: 6, name: "server_info", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = {cardType: 0, itemType: 0, hasFold: 0, serverInfo: ""};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.cardType = e.int32();
                        break;
                    case 2:
                        r.itemType = e.int32();
                        break;
                    case 5:
                        r.hasFold = e.int32();
                        break;
                    case 6:
                        r.serverInfo = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.cardType !== 0 && t.tag(1, u.Varint).int32(e.cardType), e.itemType !== 0 && t.tag(2, u.Varint).int32(e.itemType), e.hasFold !== 0 && t.tag(5, u.Varint).int32(e.hasFold), e.serverInfo !== "" && t.tag(6, u.LengthDelimited).string(e.serverInfo);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ut = new Rt, Ot = class extends b {
        constructor() {
            super("DynamicList", [{no: 1, name: "list", kind: "message", repeat: 1, T: () => Ut}, {
                no: 2,
                name: "update_num",
                kind: "scalar",
                T: 3,
                L: 0
            }, {no: 3, name: "history_offset", kind: "scalar", T: 9}, {
                no: 4,
                name: "update_baseline",
                kind: "scalar",
                T: 9
            }, {no: 5, name: "has_more", kind: "scalar", T: 8}])
        }

        create(e) {
            let t = {list: [], updateNum: 0n, historyOffset: "", updateBaseline: "", hasMore: !1};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.list.push(Ut.internalBinaryRead(e, e.uint32(), n));
                        break;
                    case 2:
                        r.updateNum = e.int64().toBigInt();
                        break;
                    case 3:
                        r.historyOffset = e.string();
                        break;
                    case 4:
                        r.updateBaseline = e.string();
                        break;
                    case 5:
                        r.hasMore = e.bool();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.list.length; r++) Ut.internalBinaryWrite(e.list[r], t.tag(1, u.LengthDelimited).fork(), n).join();
            e.updateNum !== 0n && t.tag(2, u.Varint).int64(e.updateNum), e.historyOffset !== "" && t.tag(3, u.LengthDelimited).string(e.historyOffset), e.updateBaseline !== "" && t.tag(4, u.LengthDelimited).string(e.updateBaseline), e.hasMore !== !1 && t.tag(5, u.Varint).bool(e.hasMore);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Et = new Ot, Lt = class extends b {
        constructor() {
            super("TopicList", [{no: 1, name: "title", kind: "scalar", T: 9}])
        }

        create(e) {
            let t = {title: ""};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.title = e.string();
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.title !== "" && t.tag(1, u.LengthDelimited).string(e.title);
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Ft = new Lt, Vt = class extends b {
        constructor() {
            super("DynAllReply", [{no: 1, name: "dynamic_list", kind: "message", T: () => Et}, {
                no: 3,
                name: "topic_list",
                kind: "message",
                T: () => Ft
            }])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.dynamicList = Et.internalBinaryRead(e, e.uint32(), n, r.dynamicList);
                        break;
                    case 3:
                        r.topicList = Ft.internalBinaryRead(e, e.uint32(), n, r.topicList);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.dynamicList && Et.internalBinaryWrite(e.dynamicList, t.tag(1, u.LengthDelimited).fork(), n).join(), e.topicList && Ft.internalBinaryWrite(e.topicList, t.tag(3, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Dt = new Vt;
    var St = class extends b {
        constructor() {
            super("ViewProgress", [{no: 1, name: "dm", kind: "message", T: () => At}])
        }

        create(e) {
            let t = {};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 1:
                        r.dm = At.internalBinaryRead(e, e.uint32(), n, r.dm);
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            e.dm && At.internalBinaryWrite(e.dm, t.tag(1, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, Wt = new St, Mt = class extends b {
        constructor() {
            super("DM", [{no: 2, name: "commandDms", kind: "message", repeat: 1, T: () => H}])
        }

        create(e) {
            let t = {commandDms: []};
            return globalThis.Object.defineProperty(t, v, {
                enumerable: !1,
                value: this
            }), e !== void 0 && g(this, t, e), t
        }

        internalBinaryRead(e, t, n, i) {
            let r = i ?? this.create(), l = e.pos + t;
            for (; e.pos < l;) {
                let [s, a] = e.tag();
                switch (s) {
                    case 2:
                        r.commandDms.push(H.internalBinaryRead(e, e.uint32(), n));
                        break;
                    default:
                        let f = n.readUnknownField;
                        if (f === "throw") throw new globalThis.Error(`Unknown field ${s} (wire type ${a}) for ${this.typeName}`);
                        let c = e.skip(a);
                        f !== !1 && (f === !0 ? p.onRead : f)(this.typeName, r, s, a, c)
                }
            }
            return r
        }

        internalBinaryWrite(e, t, n) {
            for (let r = 0; r < e.commandDms.length; r++) H.internalBinaryWrite(e.commandDms[r], t.tag(2, u.LengthDelimited).fork(), n).join();
            let i = n.writeUnknownFields;
            return i !== !1 && (i == !0 ? p.onWrite : i)(this.typeName, e, t), t
        }
    }, At = new Mt;

    function xn(o) {
        let e = je.fromBinary(o);
        e.dmView?.commandDms?.length && (e.dmView.commandDms.length = 0, Z(je, e))
    }

    function Tn(o) {
        let e = Ye.fromBinary(o), t = e.modes.find(n => n.name === "teenagers");
        t?.f5?.f1 && (t.f5.f1 = 0, Z(Ye, e))
    }

    function Bn(o) {
        let e = Nn();
        if (!e) return;
        let t = ht.fromBinary(o), n = t.playURL.videos, i = t.playURL.audios;
        Je(n, e), Je(i, e), Z(ht, t)
    }

    function In(o) {
        let e = bt.fromBinary(o);
        delete e.cmConfig, delete e.cmIpad, e.cms.length = 0, Z(bt, e)
    }

    function Un(o) {
        let e = Nt.fromBinary(o);
        delete e.cm, Z(Nt, e)
    }

    function En(o) {
        let e = It.fromBinary(o);
        e.items = e.items.filter(t => !t.linktype.endsWith("_ad")), Z(It, e)
    }

    function Fn(o) {
        let e = Dt.fromBinary(o);
        delete e.topicList, e.dynamicList.list = e.dynamicList.list.filter(t => t.cardType !== oe.ad), Z(Dt, e)
    }

    function Rn(o) {
        let e = Wt.fromBinary(o);
        delete e.dm, Z(Wt, e)
    }

    var ci = /(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/, he = class {
        constructor(e = "") {
            if (this.name = "URL v1.0.2", !e) throw new Error("Empty URL");
            this.parse(e)
        }

        parse(e) {
            let {scheme: t, host: n, path: i = "", params: r} = e.match(ci)?.groups ?? {};
            this.scheme = t, this.host = n, this.path = i, this.params = r ? r.split("&").reduce((l, s) => {
                let [a, f] = s.split("=");
                return l[a] = f, l
            }, {}) : {}
        }

        toString() {
            let e = this.scheme + "://" + this.host + "/" + this.path;
            return this.params && (e += "?" + Object.entries(this.params).reduce((t, [n, i], r) => t + (r ? "&" : "") + n + "=" + i, "")), e
        }
    };
    var hi = $request.url, Ln = $response.body, pi = new he(hi).path,
        di = typeof $utils == "object" && typeof $utils?.ungzip == "function" ? $utils.ungzip : tn, mi = Ln.slice(0, 5),
        Ct = Ln.slice(5);
    mi[0] && (Ct = di(Ct));
    var On = {
        "v1.DM/DmView": xn,
        "Teenagers/ModeStatus": Tn,
        "v1.PlayURL/PlayView": Bn,
        "v1.View/View": In,
        "v1.Reply/MainList": Un,
        "v1.Search/SearchAll": En,
        "v2.Dynamic/DynAll": Fn,
        "v1.View/ViewProgress": Rn
    };
    for (let o in On) if (pi.endsWith(o)) {
        On[o](Ct);
        break
    }
    $done({});
})();
