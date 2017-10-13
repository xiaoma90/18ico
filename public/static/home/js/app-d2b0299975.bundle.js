webpackJsonp([0], [function(t, e, i) {! function(i, r) { t.exports = e = r() }(this, function() { var t = t || function(t, e) { var i = Object.create || function() {
					function t() {} return function(e) { var i; return t.prototype = e, i = new t, t.prototype = null, i } }(),
				r = {},
				n = r.lib = {},
				o = n.Base = function() { return { extend: function(t) { var e = i(this); return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() { e.$super.init.apply(this, arguments) }), e.init.prototype = e, e.$super = this, e }, create: function() { var t = this.extend(); return t.init.apply(t, arguments), t }, init: function() {}, mixIn: function(t) { for(var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
							t.hasOwnProperty("toString") && (this.toString = t.toString) }, clone: function() { return this.init.prototype.extend(this) } } }(),
				s = n.WordArray = o.extend({ init: function(t, i) { t = this.words = t || [], i != e ? this.sigBytes = i : this.sigBytes = 4 * t.length }, toString: function(t) { return(t || l).stringify(this) }, concat: function(t) { var e = this.words,
							i = t.words,
							r = this.sigBytes,
							n = t.sigBytes; if(this.clamp(), r % 4)
							for(var o = 0; o < n; o++) { var s = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
								e[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8 } else
								for(var o = 0; o < n; o += 4) e[r + o >>> 2] = i[o >>> 2]; return this.sigBytes += n, this }, clamp: function() { var e = this.words,
							i = this.sigBytes;
						e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, e.length = t.ceil(i / 4) }, clone: function() { var t = o.clone.call(this); return t.words = this.words.slice(0), t }, random: function(e) { for(var i, r = [], n = function(e) { var e = e,
									i = 987654321,
									r = 4294967295; return function() { i = 36969 * (65535 & i) + (i >> 16) & r, e = 18e3 * (65535 & e) + (e >> 16) & r; var n = (i << 16) + e & r; return n /= 4294967296, n += .5, n * (t.random() > .5 ? 1 : -1) } }, o = 0; o < e; o += 4) { var a = n(4294967296 * (i || t.random()));
							i = 987654071 * a(), r.push(4294967296 * a() | 0) } return new s.init(r, e) } }),
				a = r.enc = {},
				l = a.Hex = { stringify: function(t) { for(var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) { var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
							r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16)) } return r.join("") }, parse: function(t) { for(var e = t.length, i = [], r = 0; r < e; r += 2) i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4; return new s.init(i, e / 2) } },
				c = a.Latin1 = { stringify: function(t) { for(var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n++) { var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
							r.push(String.fromCharCode(o)) } return r.join("") }, parse: function(t) { for(var e = t.length, i = [], r = 0; r < e; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8; return new s.init(i, e) } },
				h = a.Utf8 = { stringify: function(t) { try { return decodeURIComponent(escape(c.stringify(t))) } catch(e) { throw new Error("Malformed UTF-8 data") } }, parse: function(t) { return c.parse(unescape(encodeURIComponent(t))) } },
				u = n.BufferedBlockAlgorithm = o.extend({ reset: function() { this._data = new s.init, this._nDataBytes = 0 }, _append: function(t) { "string" == typeof t && (t = h.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes }, _process: function(e) { var i = this._data,
							r = i.words,
							n = i.sigBytes,
							o = this.blockSize,
							a = 4 * o,
							l = n / a;
						l = e ? t.ceil(l) : t.max((0 | l) - this._minBufferSize, 0); var c = l * o,
							h = t.min(4 * c, n); if(c) { for(var u = 0; u < c; u += o) this._doProcessBlock(r, u); var f = r.splice(0, c);
							i.sigBytes -= h } return new s.init(f, h) }, clone: function() { var t = o.clone.call(this); return t._data = this._data.clone(), t }, _minBufferSize: 0 }),
				f = (n.Hasher = u.extend({ cfg: o.extend(), init: function(t) { this.cfg = this.cfg.extend(t), this.reset() }, reset: function() { u.reset.call(this), this._doReset() }, update: function(t) { return this._append(t), this._process(), this }, finalize: function(t) { t && this._append(t); var e = this._doFinalize(); return e }, blockSize: 16, _createHelper: function(t) { return function(e, i) { return new t.init(i).finalize(e) } }, _createHmacHelper: function(t) { return function(e, i) { return new f.HMAC.init(t, i).finalize(e) } } }), r.algo = {}); return r }(Math); return t }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(3)) }(this, function(t) { t.lib.Cipher || function(e) { var i = t,
				r = i.lib,
				n = r.Base,
				o = r.WordArray,
				s = r.BufferedBlockAlgorithm,
				a = i.enc,
				l = (a.Utf8, a.Base64),
				c = i.algo,
				h = c.EvpKDF,
				u = r.Cipher = s.extend({ cfg: n.extend(), createEncryptor: function(t, e) { return this.create(this._ENC_XFORM_MODE, t, e) }, createDecryptor: function(t, e) { return this.create(this._DEC_XFORM_MODE, t, e) }, init: function(t, e, i) { this.cfg = this.cfg.extend(i), this._xformMode = t, this._key = e, this.reset() }, reset: function() { s.reset.call(this), this._doReset() }, process: function(t) { return this._append(t), this._process() }, finalize: function(t) { t && this._append(t); var e = this._doFinalize(); return e }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function() {
						function t(t) { return "string" == typeof t ? k : b } return function(e) { return { encrypt: function(i, r, n) { return t(r).encrypt(e, i, r, n) }, decrypt: function(i, r, n) { return t(r).decrypt(e, i, r, n) } } } }() }),
				f = (r.StreamCipher = u.extend({ _doFinalize: function() { var t = this._process(!0); return t }, blockSize: 1 }), i.mode = {}),
				d = r.BlockCipherMode = n.extend({ createEncryptor: function(t, e) { return this.Encryptor.create(t, e) }, createDecryptor: function(t, e) { return this.Decryptor.create(t, e) }, init: function(t, e) { this._cipher = t, this._iv = e } }),
				p = f.CBC = function() {
					function t(t, i, r) { var n = this._iv; if(n) { var o = n;
							this._iv = e } else var o = this._prevBlock; for(var s = 0; s < r; s++) t[i + s] ^= o[s] } var i = d.extend(); return i.Encryptor = i.extend({ processBlock: function(e, i) { var r = this._cipher,
								n = r.blockSize;
							t.call(this, e, i, n), r.encryptBlock(e, i), this._prevBlock = e.slice(i, i + n) } }), i.Decryptor = i.extend({ processBlock: function(e, i) { var r = this._cipher,
								n = r.blockSize,
								o = e.slice(i, i + n);
							r.decryptBlock(e, i), t.call(this, e, i, n), this._prevBlock = o } }), i }(),
				g = i.pad = {},
				v = g.Pkcs7 = { pad: function(t, e) { for(var i = 4 * e, r = i - t.sigBytes % i, n = r << 24 | r << 16 | r << 8 | r, s = [], a = 0; a < r; a += 4) s.push(n); var l = o.create(s, r);
						t.concat(l) }, unpad: function(t) { var e = 255 & t.words[t.sigBytes - 1 >>> 2];
						t.sigBytes -= e } },
				y = (r.BlockCipher = u.extend({ cfg: u.cfg.extend({ mode: p, padding: v }), reset: function() { u.reset.call(this); var t = this.cfg,
							e = t.iv,
							i = t.mode; if(this._xformMode == this._ENC_XFORM_MODE) var r = i.createEncryptor;
						else { var r = i.createDecryptor;
							this._minBufferSize = 1 } this._mode && this._mode.__creator == r ? this._mode.init(this, e && e.words) : (this._mode = r.call(i, this, e && e.words), this._mode.__creator = r) }, _doProcessBlock: function(t, e) { this._mode.processBlock(t, e) }, _doFinalize: function() { var t = this.cfg.padding; if(this._xformMode == this._ENC_XFORM_MODE) { t.pad(this._data, this.blockSize); var e = this._process(!0) } else { var e = this._process(!0);
							t.unpad(e) } return e }, blockSize: 4 }), r.CipherParams = n.extend({ init: function(t) { this.mixIn(t) }, toString: function(t) { return(t || this.formatter).stringify(this) } })),
				m = i.format = {},
				x = m.OpenSSL = { stringify: function(t) { var e = t.ciphertext,
							i = t.salt; if(i) var r = o.create([1398893684, 1701076831]).concat(i).concat(e);
						else var r = e; return r.toString(l) }, parse: function(t) { var e = l.parse(t),
							i = e.words; if(1398893684 == i[0] && 1701076831 == i[1]) { var r = o.create(i.slice(2, 4));
							i.splice(0, 4), e.sigBytes -= 16 } return y.create({ ciphertext: e, salt: r }) } },
				b = r.SerializableCipher = n.extend({ cfg: n.extend({ format: x }), encrypt: function(t, e, i, r) { r = this.cfg.extend(r); var n = t.createEncryptor(i, r),
							o = n.finalize(e),
							s = n.cfg; return y.create({ ciphertext: o, key: i, iv: s.iv, algorithm: t, mode: s.mode, padding: s.padding, blockSize: t.blockSize, formatter: r.format }) }, decrypt: function(t, e, i, r) { r = this.cfg.extend(r), e = this._parse(e, r.format); var n = t.createDecryptor(i, r).finalize(e.ciphertext); return n }, _parse: function(t, e) { return "string" == typeof t ? e.parse(t, this) : t } }),
				w = i.kdf = {},
				_ = w.OpenSSL = { execute: function(t, e, i, r) { r || (r = o.random(8)); var n = h.create({ keySize: e + i }).compute(t, r),
							s = o.create(n.words.slice(e), 4 * i); return n.sigBytes = 4 * e, y.create({ key: n, iv: s, salt: r }) } },
				k = r.PasswordBasedCipher = b.extend({ cfg: b.cfg.extend({ kdf: _ }), encrypt: function(t, e, i, r) { r = this.cfg.extend(r); var n = r.kdf.execute(i, t.keySize, t.ivSize);
						r.iv = n.iv; var o = b.encrypt.call(this, t, e, n.key, r); return o.mixIn(n), o }, decrypt: function(t, e, i, r) { r = this.cfg.extend(r), e = this._parse(e, r.format); var n = r.kdf.execute(i, t.keySize, t.ivSize, e.salt);
						r.iv = n.iv; var o = b.decrypt.call(this, t, e, n.key, r); return o } }) }() }) }, , function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(13), i(12)) }(this, function(t) { return function() { var e = t,
				i = e.lib,
				r = i.Base,
				n = i.WordArray,
				o = e.algo,
				s = o.MD5,
				a = o.EvpKDF = r.extend({ cfg: r.extend({ keySize: 4, hasher: s, iterations: 1 }), init: function(t) { this.cfg = this.cfg.extend(t) }, compute: function(t, e) { for(var i = this.cfg, r = i.hasher.create(), o = n.create(), s = o.words, a = i.keySize, l = i.iterations; s.length < a;) { c && r.update(c); var c = r.update(t).finalize(e);
							r.reset(); for(var h = 1; h < l; h++) c = r.finalize(c), r.reset();
							o.concat(c) } return o.sigBytes = 4 * a, o } });
			e.EvpKDF = function(t, e, i) { return a.create(i).compute(t, e) } }(), t.EvpKDF }) }, function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function() {
			function e(t, e, i) { for(var r = [], o = 0, s = 0; s < e; s++)
					if(s % 4) { var a = i[t.charCodeAt(s - 1)] << s % 4 * 2,
							l = i[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
						r[o >>> 2] |= (a | l) << 24 - o % 4 * 8, o++ }
				return n.create(r, o) } var i = t,
				r = i.lib,
				n = r.WordArray,
				o = i.enc;
			o.Base64 = { stringify: function(t) { var e = t.words,
						i = t.sigBytes,
						r = this._map;
					t.clamp(); for(var n = [], o = 0; o < i; o += 3)
						for(var s = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, l = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = s << 16 | a << 8 | l, h = 0; h < 4 && o + .75 * h < i; h++) n.push(r.charAt(c >>> 6 * (3 - h) & 63)); var u = r.charAt(64); if(u)
						for(; n.length % 4;) n.push(u); return n.join("") }, parse: function(t) { var i = t.length,
						r = this._map,
						n = this._reverseMap; if(!n) { n = this._reverseMap = []; for(var o = 0; o < r.length; o++) n[r.charCodeAt(o)] = o } var s = r.charAt(64); if(s) { var a = t.indexOf(s);
						a !== -1 && (i = a) } return e(t, i, n) }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" } }(), t.enc.Base64 }) }, function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function(e) {
			function i(t, e, i, r, n, o, s) { var a = t + (e & i | ~e & r) + n + s; return(a << o | a >>> 32 - o) + e }

			function r(t, e, i, r, n, o, s) { var a = t + (e & r | i & ~r) + n + s; return(a << o | a >>> 32 - o) + e }

			function n(t, e, i, r, n, o, s) { var a = t + (e ^ i ^ r) + n + s; return(a << o | a >>> 32 - o) + e }

			function o(t, e, i, r, n, o, s) { var a = t + (i ^ (e | ~r)) + n + s; return(a << o | a >>> 32 - o) + e } var s = t,
				a = s.lib,
				l = a.WordArray,
				c = a.Hasher,
				h = s.algo,
				u = [];! function() { for(var t = 0; t < 64; t++) u[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0 }(); var f = h.MD5 = c.extend({ _doReset: function() { this._hash = new l.init([1732584193, 4023233417, 2562383102, 271733878]) }, _doProcessBlock: function(t, e) { for(var s = 0; s < 16; s++) { var a = e + s,
							l = t[a];
						t[a] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8) } var c = this._hash.words,
						h = t[e + 0],
						f = t[e + 1],
						d = t[e + 2],
						p = t[e + 3],
						g = t[e + 4],
						v = t[e + 5],
						y = t[e + 6],
						m = t[e + 7],
						x = t[e + 8],
						b = t[e + 9],
						w = t[e + 10],
						_ = t[e + 11],
						k = t[e + 12],
						C = t[e + 13],
						B = t[e + 14],
						T = t[e + 15],
						S = c[0],
						A = c[1],
						E = c[2],
						$ = c[3];
					S = i(S, A, E, $, h, 7, u[0]), $ = i($, S, A, E, f, 12, u[1]), E = i(E, $, S, A, d, 17, u[2]), A = i(A, E, $, S, p, 22, u[3]), S = i(S, A, E, $, g, 7, u[4]), $ = i($, S, A, E, v, 12, u[5]), E = i(E, $, S, A, y, 17, u[6]), A = i(A, E, $, S, m, 22, u[7]), S = i(S, A, E, $, x, 7, u[8]), $ = i($, S, A, E, b, 12, u[9]), E = i(E, $, S, A, w, 17, u[10]), A = i(A, E, $, S, _, 22, u[11]), S = i(S, A, E, $, k, 7, u[12]), $ = i($, S, A, E, C, 12, u[13]), E = i(E, $, S, A, B, 17, u[14]), A = i(A, E, $, S, T, 22, u[15]), S = r(S, A, E, $, f, 5, u[16]), $ = r($, S, A, E, y, 9, u[17]), E = r(E, $, S, A, _, 14, u[18]), A = r(A, E, $, S, h, 20, u[19]), S = r(S, A, E, $, v, 5, u[20]), $ = r($, S, A, E, w, 9, u[21]), E = r(E, $, S, A, T, 14, u[22]), A = r(A, E, $, S, g, 20, u[23]), S = r(S, A, E, $, b, 5, u[24]), $ = r($, S, A, E, B, 9, u[25]), E = r(E, $, S, A, p, 14, u[26]), A = r(A, E, $, S, x, 20, u[27]), S = r(S, A, E, $, C, 5, u[28]), $ = r($, S, A, E, d, 9, u[29]), E = r(E, $, S, A, m, 14, u[30]), A = r(A, E, $, S, k, 20, u[31]), S = n(S, A, E, $, v, 4, u[32]), $ = n($, S, A, E, x, 11, u[33]), E = n(E, $, S, A, _, 16, u[34]), A = n(A, E, $, S, B, 23, u[35]), S = n(S, A, E, $, f, 4, u[36]), $ = n($, S, A, E, g, 11, u[37]), E = n(E, $, S, A, m, 16, u[38]), A = n(A, E, $, S, w, 23, u[39]), S = n(S, A, E, $, C, 4, u[40]), $ = n($, S, A, E, h, 11, u[41]), E = n(E, $, S, A, p, 16, u[42]), A = n(A, E, $, S, y, 23, u[43]), S = n(S, A, E, $, b, 4, u[44]), $ = n($, S, A, E, k, 11, u[45]), E = n(E, $, S, A, T, 16, u[46]), A = n(A, E, $, S, d, 23, u[47]), S = o(S, A, E, $, h, 6, u[48]), $ = o($, S, A, E, m, 10, u[49]), E = o(E, $, S, A, B, 15, u[50]), A = o(A, E, $, S, v, 21, u[51]), S = o(S, A, E, $, k, 6, u[52]), $ = o($, S, A, E, p, 10, u[53]), E = o(E, $, S, A, w, 15, u[54]), A = o(A, E, $, S, f, 21, u[55]), S = o(S, A, E, $, x, 6, u[56]), $ = o($, S, A, E, T, 10, u[57]), E = o(E, $, S, A, y, 15, u[58]), A = o(A, E, $, S, C, 21, u[59]), S = o(S, A, E, $, g, 6, u[60]), $ = o($, S, A, E, _, 10, u[61]), E = o(E, $, S, A, d, 15, u[62]), A = o(A, E, $, S, b, 21, u[63]), c[0] = c[0] + S | 0, c[1] = c[1] + A | 0, c[2] = c[2] + E | 0, c[3] = c[3] + $ | 0 }, _doFinalize: function() { var t = this._data,
						i = t.words,
						r = 8 * this._nDataBytes,
						n = 8 * t.sigBytes;
					i[n >>> 5] |= 128 << 24 - n % 32; var o = e.floor(r / 4294967296),
						s = r;
					i[(n + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), i[(n + 64 >>> 9 << 4) + 14] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t.sigBytes = 4 * (i.length + 1), this._process(); for(var a = this._hash, l = a.words, c = 0; c < 4; c++) { var h = l[c];
						l[c] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8) } return a }, clone: function() { var t = c.clone.call(this); return t._hash = this._hash.clone(), t } });
			s.MD5 = c._createHelper(f), s.HmacMD5 = c._createHmacHelper(f) }(Math), t.MD5 }) }, , , , , function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function(e) { var i = t,
				r = i.lib,
				n = r.Base,
				o = r.WordArray,
				s = i.x64 = {};
			s.Word = n.extend({ init: function(t, e) { this.high = t, this.low = e } }), s.WordArray = n.extend({ init: function(t, i) { t = this.words = t || [], i != e ? this.sigBytes = i : this.sigBytes = 8 * t.length }, toX32: function() { for(var t = this.words, e = t.length, i = [], r = 0; r < e; r++) { var n = t[r];
						i.push(n.high), i.push(n.low) } return o.create(i, this.sigBytes) }, clone: function() { for(var t = n.clone.call(this), e = t.words = this.words.slice(0), i = e.length, r = 0; r < i; r++) e[r] = e[r].clone(); return t } }) }(), t }) }, , function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) {! function() { var e = t,
				i = e.lib,
				r = i.Base,
				n = e.enc,
				o = n.Utf8,
				s = e.algo;
			s.HMAC = r.extend({ init: function(t, e) { t = this._hasher = new t.init, "string" == typeof e && (e = o.parse(e)); var i = t.blockSize,
						r = 4 * i;
					e.sigBytes > r && (e = t.finalize(e)), e.clamp(); for(var n = this._oKey = e.clone(), s = this._iKey = e.clone(), a = n.words, l = s.words, c = 0; c < i; c++) a[c] ^= 1549556828, l[c] ^= 909522486;
					n.sigBytes = s.sigBytes = r, this.reset() }, reset: function() { var t = this._hasher;
					t.reset(), t.update(this._iKey) }, update: function(t) { return this._hasher.update(t), this }, finalize: function(t) { var e = this._hasher,
						i = e.finalize(t);
					e.reset(); var r = e.finalize(this._oKey.clone().concat(i)); return r } }) }() }) }, function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function() { var e = t,
				i = e.lib,
				r = i.WordArray,
				n = i.Hasher,
				o = e.algo,
				s = [],
				a = o.SHA1 = n.extend({ _doReset: function() { this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function(t, e) { for(var i = this._hash.words, r = i[0], n = i[1], o = i[2], a = i[3], l = i[4], c = 0; c < 80; c++) { if(c < 16) s[c] = 0 | t[e + c];
							else { var h = s[c - 3] ^ s[c - 8] ^ s[c - 14] ^ s[c - 16];
								s[c] = h << 1 | h >>> 31 } var u = (r << 5 | r >>> 27) + l + s[c];
							u += c < 20 ? (n & o | ~n & a) + 1518500249 : c < 40 ? (n ^ o ^ a) + 1859775393 : c < 60 ? (n & o | n & a | o & a) - 1894007588 : (n ^ o ^ a) - 899497514, l = a, a = o, o = n << 30 | n >>> 2, n = r, r = u } i[0] = i[0] + r | 0, i[1] = i[1] + n | 0, i[2] = i[2] + o | 0, i[3] = i[3] + a | 0, i[4] = i[4] + l | 0 }, _doFinalize: function() { var t = this._data,
							e = t.words,
							i = 8 * this._nDataBytes,
							r = 8 * t.sigBytes; return e[r >>> 5] |= 128 << 24 - r % 32, e[(r + 64 >>> 9 << 4) + 14] = Math.floor(i / 4294967296), e[(r + 64 >>> 9 << 4) + 15] = i, t.sigBytes = 4 * e.length, this._process(), this._hash }, clone: function() { var t = n.clone.call(this); return t._hash = this._hash.clone(), t } });
			e.SHA1 = n._createHelper(a), e.HmacSHA1 = n._createHmacHelper(a) }(), t.SHA1 }) }, , , , function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function(e) { var i = t,
				r = i.lib,
				n = r.WordArray,
				o = r.Hasher,
				s = i.algo,
				a = [],
				l = [];! function() {
				function t(t) { for(var i = e.sqrt(t), r = 2; r <= i; r++)
						if(!(t % r)) return !1; return !0 }

				function i(t) { return 4294967296 * (t - (0 | t)) | 0 } for(var r = 2, n = 0; n < 64;) t(r) && (n < 8 && (a[n] = i(e.pow(r, .5))), l[n] = i(e.pow(r, 1 / 3)), n++), r++ }(); var c = [],
				h = s.SHA256 = o.extend({ _doReset: function() { this._hash = new n.init(a.slice(0)) }, _doProcessBlock: function(t, e) { for(var i = this._hash.words, r = i[0], n = i[1], o = i[2], s = i[3], a = i[4], h = i[5], u = i[6], f = i[7], d = 0; d < 64; d++) { if(d < 16) c[d] = 0 | t[e + d];
							else { var p = c[d - 15],
									g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
									v = c[d - 2],
									y = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
								c[d] = g + c[d - 7] + y + c[d - 16] } var m = a & h ^ ~a & u,
								x = r & n ^ r & o ^ n & o,
								b = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
								w = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25),
								_ = f + w + m + l[d] + c[d],
								k = b + x;
							f = u, u = h, h = a, a = s + _ | 0, s = o, o = n, n = r, r = _ + k | 0 } i[0] = i[0] + r | 0, i[1] = i[1] + n | 0, i[2] = i[2] + o | 0, i[3] = i[3] + s | 0, i[4] = i[4] + a | 0, i[5] = i[5] + h | 0, i[6] = i[6] + u | 0, i[7] = i[7] + f | 0 }, _doFinalize: function() { var t = this._data,
							i = t.words,
							r = 8 * this._nDataBytes,
							n = 8 * t.sigBytes; return i[n >>> 5] |= 128 << 24 - n % 32, i[(n + 64 >>> 9 << 4) + 14] = e.floor(r / 4294967296), i[(n + 64 >>> 9 << 4) + 15] = r, t.sigBytes = 4 * i.length, this._process(), this._hash }, clone: function() { var t = o.clone.call(this); return t._hash = this._hash.clone(), t } });
			i.SHA256 = o._createHelper(h), i.HmacSHA256 = o._createHmacHelper(h) }(Math), t.SHA256 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(10)) }(this, function(t) { return function() {
			function e() { return s.create.apply(s, arguments) } var i = t,
				r = i.lib,
				n = r.Hasher,
				o = i.x64,
				s = o.Word,
				a = o.WordArray,
				l = i.algo,
				c = [e(1116352408, 3609767458), e(1899447441, 602891725), e(3049323471, 3964484399), e(3921009573, 2173295548), e(961987163, 4081628472), e(1508970993, 3053834265), e(2453635748, 2937671579), e(2870763221, 3664609560), e(3624381080, 2734883394), e(310598401, 1164996542), e(607225278, 1323610764), e(1426881987, 3590304994), e(1925078388, 4068182383), e(2162078206, 991336113), e(2614888103, 633803317), e(3248222580, 3479774868), e(3835390401, 2666613458), e(4022224774, 944711139), e(264347078, 2341262773), e(604807628, 2007800933), e(770255983, 1495990901), e(1249150122, 1856431235), e(1555081692, 3175218132), e(1996064986, 2198950837), e(2554220882, 3999719339), e(2821834349, 766784016), e(2952996808, 2566594879), e(3210313671, 3203337956), e(3336571891, 1034457026), e(3584528711, 2466948901), e(113926993, 3758326383), e(338241895, 168717936), e(666307205, 1188179964), e(773529912, 1546045734), e(1294757372, 1522805485), e(1396182291, 2643833823), e(1695183700, 2343527390), e(1986661051, 1014477480), e(2177026350, 1206759142), e(2456956037, 344077627), e(2730485921, 1290863460), e(2820302411, 3158454273), e(3259730800, 3505952657), e(3345764771, 106217008), e(3516065817, 3606008344), e(3600352804, 1432725776), e(4094571909, 1467031594), e(275423344, 851169720), e(430227734, 3100823752), e(506948616, 1363258195), e(659060556, 3750685593), e(883997877, 3785050280), e(958139571, 3318307427), e(1322822218, 3812723403), e(1537002063, 2003034995), e(1747873779, 3602036899), e(1955562222, 1575990012), e(2024104815, 1125592928), e(2227730452, 2716904306), e(2361852424, 442776044), e(2428436474, 593698344), e(2756734187, 3733110249), e(3204031479, 2999351573), e(3329325298, 3815920427), e(3391569614, 3928383900), e(3515267271, 566280711), e(3940187606, 3454069534), e(4118630271, 4000239992), e(116418474, 1914138554), e(174292421, 2731055270), e(289380356, 3203993006), e(460393269, 320620315), e(685471733, 587496836), e(852142971, 1086792851), e(1017036298, 365543100), e(1126000580, 2618297676), e(1288033470, 3409855158), e(1501505948, 4234509866), e(1607167915, 987167468), e(1816402316, 1246189591)],
				h = [];! function() { for(var t = 0; t < 80; t++) h[t] = e() }(); var u = l.SHA512 = n.extend({ _doReset: function() { this._hash = new a.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]) }, _doProcessBlock: function(t, e) { for(var i = this._hash.words, r = i[0], n = i[1], o = i[2], s = i[3], a = i[4], l = i[5], u = i[6], f = i[7], d = r.high, p = r.low, g = n.high, v = n.low, y = o.high, m = o.low, x = s.high, b = s.low, w = a.high, _ = a.low, k = l.high, C = l.low, B = u.high, T = u.low, S = f.high, A = f.low, E = d, $ = p, D = g, L = v, I = y, P = m, z = x, R = b, N = w, M = _, F = k, H = C, O = B, j = T, W = S, U = A, X = 0; X < 80; X++) { var q = h[X]; if(X < 16) var V = q.high = 0 | t[e + 2 * X],
							G = q.low = 0 | t[e + 2 * X + 1];
						else { var Y = h[X - 15],
								K = Y.high,
								Q = Y.low,
								Z = (K >>> 1 | Q << 31) ^ (K >>> 8 | Q << 24) ^ K >>> 7,
								J = (Q >>> 1 | K << 31) ^ (Q >>> 8 | K << 24) ^ (Q >>> 7 | K << 25),
								tt = h[X - 2],
								et = tt.high,
								it = tt.low,
								rt = (et >>> 19 | it << 13) ^ (et << 3 | it >>> 29) ^ et >>> 6,
								nt = (it >>> 19 | et << 13) ^ (it << 3 | et >>> 29) ^ (it >>> 6 | et << 26),
								ot = h[X - 7],
								st = ot.high,
								at = ot.low,
								lt = h[X - 16],
								ct = lt.high,
								ht = lt.low,
								G = J + at,
								V = Z + st + (G >>> 0 < J >>> 0 ? 1 : 0),
								G = G + nt,
								V = V + rt + (G >>> 0 < nt >>> 0 ? 1 : 0),
								G = G + ht,
								V = V + ct + (G >>> 0 < ht >>> 0 ? 1 : 0);
							q.high = V, q.low = G } var ut = N & F ^ ~N & O,
							ft = M & H ^ ~M & j,
							dt = E & D ^ E & I ^ D & I,
							pt = $ & L ^ $ & P ^ L & P,
							gt = (E >>> 28 | $ << 4) ^ (E << 30 | $ >>> 2) ^ (E << 25 | $ >>> 7),
							vt = ($ >>> 28 | E << 4) ^ ($ << 30 | E >>> 2) ^ ($ << 25 | E >>> 7),
							yt = (N >>> 14 | M << 18) ^ (N >>> 18 | M << 14) ^ (N << 23 | M >>> 9),
							mt = (M >>> 14 | N << 18) ^ (M >>> 18 | N << 14) ^ (M << 23 | N >>> 9),
							xt = c[X],
							bt = xt.high,
							wt = xt.low,
							_t = U + mt,
							kt = W + yt + (_t >>> 0 < U >>> 0 ? 1 : 0),
							_t = _t + ft,
							kt = kt + ut + (_t >>> 0 < ft >>> 0 ? 1 : 0),
							_t = _t + wt,
							kt = kt + bt + (_t >>> 0 < wt >>> 0 ? 1 : 0),
							_t = _t + G,
							kt = kt + V + (_t >>> 0 < G >>> 0 ? 1 : 0),
							Ct = vt + pt,
							Bt = gt + dt + (Ct >>> 0 < vt >>> 0 ? 1 : 0);
						W = O, U = j, O = F, j = H, F = N, H = M, M = R + _t | 0, N = z + kt + (M >>> 0 < R >>> 0 ? 1 : 0) | 0, z = I, R = P, I = D, P = L, D = E, L = $, $ = _t + Ct | 0, E = kt + Bt + ($ >>> 0 < _t >>> 0 ? 1 : 0) | 0 } p = r.low = p + $, r.high = d + E + (p >>> 0 < $ >>> 0 ? 1 : 0), v = n.low = v + L, n.high = g + D + (v >>> 0 < L >>> 0 ? 1 : 0), m = o.low = m + P, o.high = y + I + (m >>> 0 < P >>> 0 ? 1 : 0), b = s.low = b + R, s.high = x + z + (b >>> 0 < R >>> 0 ? 1 : 0), _ = a.low = _ + M, a.high = w + N + (_ >>> 0 < M >>> 0 ? 1 : 0), C = l.low = C + H, l.high = k + F + (C >>> 0 < H >>> 0 ? 1 : 0), T = u.low = T + j, u.high = B + O + (T >>> 0 < j >>> 0 ? 1 : 0), A = f.low = A + U, f.high = S + W + (A >>> 0 < U >>> 0 ? 1 : 0) }, _doFinalize: function() { var t = this._data,
						e = t.words,
						i = 8 * this._nDataBytes,
						r = 8 * t.sigBytes;
					e[r >>> 5] |= 128 << 24 - r % 32, e[(r + 128 >>> 10 << 5) + 30] = Math.floor(i / 4294967296), e[(r + 128 >>> 10 << 5) + 31] = i, t.sigBytes = 4 * e.length, this._process(); var n = this._hash.toX32(); return n }, clone: function() { var t = n.clone.call(this); return t._hash = this._hash.clone(), t }, blockSize: 32 });
			i.SHA512 = n._createHelper(u), i.HmacSHA512 = n._createHmacHelper(u) }(), t.SHA512 }) }, , function(t, e, i) { i(69), i(59), i(60), i(61), i(62), i(63), i(64), i(68), i(65), i(66), i(67), i(58) }, function(t, e, i) { window._ = i(15), window.$ = window.jQuery = i(2), $(function() { i(16)({ polyfill: !0 }) }), window.Raphael = i(107), window.CryptoJS = i(74) }, function(module, exports) {! function() {
		function scrollTo(t, e) { e ? $("html, body").animate({ scrollTop: t }, 500) : $("html, body").scrollTop(t) } var lang = { en: { enter_title: "please enter the title", enter_email: "please enter the email", enter_content: "please enter the content", email_format: "Email address format error" }, "zh-CN": { enter_title: "请输入标题", enter_email: "清输入邮箱", enter_content: "请输入内容", email_format: "邮箱地址格式有误哦" } },
			cur_lang = "";
		$(function() { cur_lang = $("html").attr("lang") || "zh-CN"; var t = $("#header"),
				e = 0,
				i = $(this).scrollTop(),
				r = t.hasClass("no-fixed");
			i > e && !r && t.addClass("fixed"), $(document).on("scroll", function() { if(!r) { var i = $(this).scrollTop();
					i > e ? t.addClass("fixed") : t.removeClass("fixed") } }), $(window).on("scroll", function() { $(window).scrollTop() > 100 ? $("#back_to_top").fadeIn(500) : $("#back_to_top").fadeOut(500) }), $.get("/api/getMessageState").then(function(t) { t.success && (t.data.message_unread && $(".messages-unread").addClass("unread-dot"), t.data.notify_unread && $(".notify-unread").addClass("unread-dot"), t.data.phone_state || $(".phoneDisplay").remove()) }) }).on("click", "#back_to_top", function() { return scrollTo(0, !0), !1 }).on("click", ".locale-lang", function() { var lang = $(this).data("lang"),
				url = window.location.href,
				newUrl = "",
				reg = new RegExp("(^|)hl=([^&]*)(|$)"),
				tmp = "hl=" + lang;
			newUrl = null != url.match(reg) ? url.replace(eval(reg), tmp) : url.match("[?]") ? url + "&" + tmp : url + "?" + tmp, location.href = newUrl }).on("click", "#submitFeedback", function() { var t = $("#feedback_title"),
				e = $("#feedback_email"),
				i = $("#feedback_content"),
				r = $.trim(t.val()),
				n = $.trim(e.val()),
				o = $.trim(i.val()); return "" == r ? (layer.tips(lang[cur_lang].enter_title, t, { tips: [2, "#da2e2b"] }), t.focus(), !1) : "" == n ? (layer.tips(lang[cur_lang].enter_email, e, { tips: [2, "#da2e2b"] }), e.focus(), !1) : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(n) ? "" == o ? (layer.tips(lang[cur_lang].enter_content, i, { tips: [2, "#da2e2b"] }), i.focus(), !1) : void $.post("/api/feedback", { title: r, email: n, content: o }, function(t) { t.success ? layer.msg(t.error, { time: 2e3 }, function() { window.location.reload() }) : layer.msg(t.error) }, "json") : (layer.tips(lang[cur_lang].email_format, e, { tips: [2, "#da2e2b"] }), e.focus(), !1) }) }() }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
	! function(t) {
		t.fn.qrcode = function(e) {
			function i(t) { this.mode = a, this.data = t }

			function r(t, e) { this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [] }

			function n(t, e) { if(void 0 == t.length) throw Error(t.length + "/" + e); for(var i = 0; i < t.length && 0 == t[i];) i++;
				this.num = Array(t.length - i + e); for(var r = 0; r < t.length - i; r++) this.num[r] = t[r + i] }

			function o(t, e) { this.totalCount = t, this.dataCount = e }

			function s() { this.buffer = [], this.length = 0 }
			var a;
			i.prototype = { getLength: function() { return this.data.length }, write: function(t) { for(var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8) } }, r.prototype = { addData: function(t) { this.dataList.push(new i(t)), this.dataCache = null }, isDark: function(t, e) { if(0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e); return this.modules[t][e] }, getModuleCount: function() { return this.moduleCount }, make: function() { if(1 > this.typeNumber) { for(var t = 1, t = 1; 40 > t; t++) { for(var e = o.getRSBlocks(t, this.errorCorrectLevel), i = new s, r = 0, n = 0; n < e.length; n++) r += e[n].dataCount; for(n = 0; n < this.dataList.length; n++) e = this.dataList[n], i.put(e.mode, 4), i.put(e.getLength(), l.getLengthInBits(e.mode, t)), e.write(i); if(i.getLengthInBits() <= 8 * r) break } this.typeNumber = t } this.makeImpl(!1, this.getBestMaskPattern()) }, makeImpl: function(t, e) { this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount); for(var i = 0; i < this.moduleCount; i++) { this.modules[i] = Array(this.moduleCount); for(var n = 0; n < this.moduleCount; n++) this.modules[i][n] = null } this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), 7 <= this.typeNumber && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e) }, setupPositionProbePattern: function(t, e) { for(var i = -1; 7 >= i; i++)
						if(!(-1 >= t + i || this.moduleCount <= t + i))
							for(var r = -1; 7 >= r; r++) - 1 >= e + r || this.moduleCount <= e + r || (this.modules[t + i][e + r] = 0 <= i && 6 >= i && (0 == r || 6 == r) || 0 <= r && 6 >= r && (0 == i || 6 == i) || 2 <= i && 4 >= i && 2 <= r && 4 >= r) }, getBestMaskPattern: function() { for(var t = 0, e = 0, i = 0; 8 > i; i++) { this.makeImpl(!0, i); var r = l.getLostPoint(this);
						(0 == i || t > r) && (t = r, e = i) } return e }, createMovieClip: function(t, e, i) { for(t = t.createEmptyMovieClip(e, i), this.make(), e = 0; e < this.modules.length; e++)
						for(var i = 1 * e, r = 0; r < this.modules[e].length; r++) { var n = 1 * r;
							this.modules[e][r] && (t.beginFill(0, 100), t.moveTo(n, i), t.lineTo(n + 1, i), t.lineTo(n + 1, i + 1), t.lineTo(n, i + 1), t.endFill()) }
					return t }, setupTimingPattern: function() { for(var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2); for(t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2) }, setupPositionAdjustPattern: function() { for(var t = l.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
						for(var i = 0; i < t.length; i++) { var r = t[e],
								n = t[i]; if(null == this.modules[r][n])
								for(var o = -2; 2 >= o; o++)
									for(var s = -2; 2 >= s; s++) this.modules[r + o][n + s] = -2 == o || 2 == o || -2 == s || 2 == s || 0 == o && 0 == s } }, setupTypeNumber: function(t) { for(var e = l.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) { var r = !t && 1 == (e >> i & 1);
						this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = r } for(i = 0; 18 > i; i++) r = !t && 1 == (e >> i & 1), this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = r }, setupTypeInfo: function(t, e) { for(var i = l.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), r = 0; 15 > r; r++) { var n = !t && 1 == (i >> r & 1);
						6 > r ? this.modules[r][8] = n : 8 > r ? this.modules[r + 1][8] = n : this.modules[this.moduleCount - 15 + r][8] = n } for(r = 0; 15 > r; r++) n = !t && 1 == (i >> r & 1), 8 > r ? this.modules[8][this.moduleCount - r - 1] = n : 9 > r ? this.modules[8][15 - r - 1 + 1] = n : this.modules[8][15 - r - 1] = n;
					this.modules[this.moduleCount - 8][8] = !t }, mapData: function(t, e) { for(var i = -1, r = this.moduleCount - 1, n = 7, o = 0, s = this.moduleCount - 1; 0 < s; s -= 2)
						for(6 == s && s--;;) { for(var a = 0; 2 > a; a++)
								if(null == this.modules[r][s - a]) { var c = !1;
									o < t.length && (c = 1 == (t[o] >>> n & 1)), l.getMask(e, r, s - a) && (c = !c), this.modules[r][s - a] = c, n--, -1 == n && (o++, n = 7) }
							if(r += i, 0 > r || this.moduleCount <= r) { r -= i, i = -i; break } } } }, r.PAD0 = 236, r.PAD1 = 17, r.createData = function(t, e, i) { for(var e = o.getRSBlocks(t, e), n = new s, a = 0; a < i.length; a++) { var c = i[a];
					n.put(c.mode, 4), n.put(c.getLength(), l.getLengthInBits(c.mode, t)), c.write(n) } for(a = t = 0; a < e.length; a++) t += e[a].dataCount; if(n.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * t + ")"); for(n.getLengthInBits() + 4 <= 8 * t && n.put(0, 4); 0 != n.getLengthInBits() % 8;) n.putBit(!1); for(; !(n.getLengthInBits() >= 8 * t || (n.put(r.PAD0, 8), n.getLengthInBits() >= 8 * t));) n.put(r.PAD1, 8); return r.createBytes(n, e) }, r.createBytes = function(t, e) { for(var i = 0, r = 0, o = 0, s = Array(e.length), a = Array(e.length), c = 0; c < e.length; c++) { var h = e[c].dataCount,
						u = e[c].totalCount - h,
						r = Math.max(r, h),
						o = Math.max(o, u);
					s[c] = Array(h); for(var f = 0; f < s[c].length; f++) s[c][f] = 255 & t.buffer[f + i]; for(i += h, f = l.getErrorCorrectPolynomial(u), h = new n(s[c], f.getLength() - 1).mod(f), a[c] = Array(f.getLength() - 1), f = 0; f < a[c].length; f++) u = f + h.getLength() - a[c].length, a[c][f] = 0 <= u ? h.get(u) : 0 } for(f = c = 0; f < e.length; f++) c += e[f].totalCount; for(i = Array(c), f = h = 0; f < r; f++)
					for(c = 0; c < e.length; c++) f < s[c].length && (i[h++] = s[c][f]); for(f = 0; f < o; f++)
					for(c = 0; c < e.length; c++) f < a[c].length && (i[h++] = a[c][f]); return i }, a = 4;
			for(var l = { PATTERN_POSITION_TABLE: [
						[],
						[6, 18],
						[6, 22],
						[6, 26],
						[6, 30],
						[6, 34],
						[6, 22, 38],
						[6, 24, 42],
						[6, 26, 46],
						[6, 28, 50],
						[6, 30, 54],
						[6, 32, 58],
						[6, 34, 62],
						[6, 26, 46, 66],
						[6, 26, 48, 70],
						[6, 26, 50, 74],
						[6, 30, 54, 78],
						[6, 30, 56, 82],
						[6, 30, 58, 86],
						[6, 34, 62, 90],
						[6, 28, 50, 72, 94],
						[6, 26, 50, 74, 98],
						[6, 30, 54, 78, 102],
						[6, 28, 54, 80, 106],
						[6, 32, 58, 84, 110],
						[6, 30, 58, 86, 114],
						[6, 34, 62, 90, 118],
						[6, 26, 50, 74, 98, 122],
						[6, 30, 54, 78, 102, 126],
						[6, 26, 52, 78, 104, 130],
						[6, 30, 56, 82, 108, 134],
						[6, 34, 60, 86, 112, 138],
						[6, 30, 58, 86, 114, 142],
						[6, 34, 62, 90, 118, 146],
						[6, 30, 54, 78, 102, 126, 150],
						[6, 24, 50, 76, 102, 128, 154],
						[6, 28, 54, 80, 106, 132, 158],
						[6, 32, 58, 84, 110, 136, 162],
						[6, 26, 54, 82, 110, 138, 166],
						[6, 30, 58, 86, 114, 142, 170]
					], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(t) { for(var e = t << 10; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G15);) e ^= l.G15 << l.getBCHDigit(e) - l.getBCHDigit(l.G15); return(t << 10 | e) ^ l.G15_MASK }, getBCHTypeNumber: function(t) { for(var e = t << 12; 0 <= l.getBCHDigit(e) - l.getBCHDigit(l.G18);) e ^= l.G18 << l.getBCHDigit(e) - l.getBCHDigit(l.G18); return t << 12 | e }, getBCHDigit: function(t) { for(var e = 0; 0 != t;) e++, t >>>= 1; return e }, getPatternPosition: function(t) { return l.PATTERN_POSITION_TABLE[t - 1] }, getMask: function(t, e, i) { switch(t) {
							case 0:
								return 0 == (e + i) % 2;
							case 1:
								return 0 == e % 2;
							case 2:
								return 0 == i % 3;
							case 3:
								return 0 == (e + i) % 3;
							case 4:
								return 0 == (Math.floor(e / 2) + Math.floor(i / 3)) % 2;
							case 5:
								return 0 == e * i % 2 + e * i % 3;
							case 6:
								return 0 == (e * i % 2 + e * i % 3) % 2;
							case 7:
								return 0 == (e * i % 3 + (e + i) % 2) % 2;
							default:
								throw Error("bad maskPattern:" + t) } }, getErrorCorrectPolynomial: function(t) { for(var e = new n([1], 0), i = 0; i < t; i++) e = e.multiply(new n([1, c.gexp(i)], 0)); return e }, getLengthInBits: function(t, e) { if(1 <= e && 10 > e) switch(t) {
							case 1:
								return 10;
							case 2:
								return 9;
							case a:
								return 8;
							case 8:
								return 8;
							default:
								throw Error("mode:" + t) } else if(27 > e) switch(t) {
							case 1:
								return 12;
							case 2:
								return 11;
							case a:
								return 16;
							case 8:
								return 10;
							default:
								throw Error("mode:" + t) } else { if(!(41 > e)) throw Error("type:" + e); switch(t) {
								case 1:
									return 14;
								case 2:
									return 13;
								case a:
									return 16;
								case 8:
									return 12;
								default:
									throw Error("mode:" + t) } } }, getLostPoint: function(t) { for(var e = t.getModuleCount(), i = 0, r = 0; r < e; r++)
							for(var n = 0; n < e; n++) { for(var o = 0, s = t.isDark(r, n), a = -1; 1 >= a; a++)
									if(!(0 > r + a || e <= r + a))
										for(var l = -1; 1 >= l; l++) 0 > n + l || e <= n + l || 0 == a && 0 == l || s == t.isDark(r + a, n + l) && o++;
								5 < o && (i += 3 + o - 5) }
						for(r = 0; r < e - 1; r++)
							for(n = 0; n < e - 1; n++) o = 0, t.isDark(r, n) && o++, t.isDark(r + 1, n) && o++, t.isDark(r, n + 1) && o++, t.isDark(r + 1, n + 1) && o++, (0 == o || 4 == o) && (i += 3); for(r = 0; r < e; r++)
							for(n = 0; n < e - 6; n++) t.isDark(r, n) && !t.isDark(r, n + 1) && t.isDark(r, n + 2) && t.isDark(r, n + 3) && t.isDark(r, n + 4) && !t.isDark(r, n + 5) && t.isDark(r, n + 6) && (i += 40); for(n = 0; n < e; n++)
							for(r = 0; r < e - 6; r++) t.isDark(r, n) && !t.isDark(r + 1, n) && t.isDark(r + 2, n) && t.isDark(r + 3, n) && t.isDark(r + 4, n) && !t.isDark(r + 5, n) && t.isDark(r + 6, n) && (i += 40); for(n = o = 0; n < e; n++)
							for(r = 0; r < e; r++) t.isDark(r, n) && o++; return t = Math.abs(100 * o / e / e - 50) / 5, i + 10 * t } }, c = { glog: function(t) { if(1 > t) throw Error("glog(" + t + ")"); return c.LOG_TABLE[t] }, gexp: function(t) { for(; 0 > t;) t += 255; for(; 256 <= t;) t -= 255; return c.EXP_TABLE[t] }, EXP_TABLE: Array(256), LOG_TABLE: Array(256) }, h = 0; 8 > h; h++) c.EXP_TABLE[h] = 1 << h;
			for(h = 8; 256 > h; h++) c.EXP_TABLE[h] = c.EXP_TABLE[h - 4] ^ c.EXP_TABLE[h - 5] ^ c.EXP_TABLE[h - 6] ^ c.EXP_TABLE[h - 8];
			for(h = 0; 255 > h; h++) c.LOG_TABLE[c.EXP_TABLE[h]] = h;
			return n.prototype = {
				get: function(t) { return this.num[t] },
				getLength: function() { return this.num.length },
				multiply: function(t) {
					for(var e = Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
						for(var r = 0; r < t.getLength(); r++) e[i + r] ^= c.gexp(c.glog(this.get(i)) + c.glog(t.get(r)));
					return new n(e, 0)
				},
				mod: function(t) { if(0 > this.getLength() - t.getLength()) return this; for(var e = c.glog(this.get(0)) - c.glog(t.get(0)), i = Array(this.getLength()), r = 0; r < this.getLength(); r++) i[r] = this.get(r); for(r = 0; r < t.getLength(); r++) i[r] ^= c.gexp(c.glog(t.get(r)) + e); return new n(i, 0).mod(t) }
			}, o.RS_BLOCK_TABLE = [
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16],
				[4, 101, 81],
				[1, 80, 50, 4, 81, 51],
				[4, 50, 22, 4, 51, 23],
				[3, 36, 12, 8, 37, 13],
				[2, 116, 92, 2, 117, 93],
				[6, 58, 36, 2, 59, 37],
				[4, 46, 20, 6, 47, 21],
				[7, 42, 14, 4, 43, 15],
				[4, 133, 107],
				[8, 59, 37, 1, 60, 38],
				[8, 44, 20, 4, 45, 21],
				[12, 33, 11, 4, 34, 12],
				[3, 145, 115, 1, 146, 116],
				[4, 64, 40, 5, 65, 41],
				[11, 36, 16, 5, 37, 17],
				[11, 36, 12, 5, 37, 13],
				[5, 109, 87, 1, 110, 88],
				[5, 65, 41, 5, 66, 42],
				[5, 54, 24, 7, 55, 25],
				[11, 36, 12],
				[5, 122, 98, 1, 123, 99],
				[7, 73, 45, 3, 74, 46],
				[15, 43, 19, 2, 44, 20],
				[3, 45, 15, 13, 46, 16],
				[1, 135, 107, 5, 136, 108],
				[10, 74, 46, 1, 75, 47],
				[1, 50, 22, 15, 51, 23],
				[2, 42, 14, 17, 43, 15],
				[5, 150, 120, 1, 151, 121],
				[9, 69, 43, 4, 70, 44],
				[17, 50, 22, 1, 51, 23],
				[2, 42, 14, 19, 43, 15],
				[3, 141, 113, 4, 142, 114],
				[3, 70, 44, 11, 71, 45],
				[17, 47, 21, 4, 48, 22],
				[9, 39, 13, 16, 40, 14],
				[3, 135, 107, 5, 136, 108],
				[3, 67, 41, 13, 68, 42],
				[15, 54, 24, 5, 55, 25],
				[15, 43, 15, 10, 44, 16],
				[4, 144, 116, 4, 145, 117],
				[17, 68, 42],
				[17, 50, 22, 6, 51, 23],
				[19, 46, 16, 6, 47, 17],
				[2, 139, 111, 7, 140, 112],
				[17, 74, 46],
				[7, 54, 24, 16, 55, 25],
				[34, 37, 13],
				[4, 151, 121, 5, 152, 122],
				[4, 75, 47, 14, 76, 48],
				[11, 54, 24, 14, 55, 25],
				[16, 45, 15, 14, 46, 16],
				[6, 147, 117, 4, 148, 118],
				[6, 73, 45, 14, 74, 46],
				[11, 54, 24, 16, 55, 25],
				[30, 46, 16, 2, 47, 17],
				[8, 132, 106, 4, 133, 107],
				[8, 75, 47, 13, 76, 48],
				[7, 54, 24, 22, 55, 25],
				[22, 45, 15, 13, 46, 16],
				[10, 142, 114, 2, 143, 115],
				[19, 74, 46, 4, 75, 47],
				[28, 50, 22, 6, 51, 23],
				[33, 46, 16, 4, 47, 17],
				[8, 152, 122, 4, 153, 123],
				[22, 73, 45, 3, 74, 46],
				[8, 53, 23, 26, 54, 24],
				[12, 45, 15, 28, 46, 16],
				[3, 147, 117, 10, 148, 118],
				[3, 73, 45, 23, 74, 46],
				[4, 54, 24, 31, 55, 25],
				[11, 45, 15, 31, 46, 16],
				[7, 146, 116, 7, 147, 117],
				[21, 73, 45, 7, 74, 46],
				[1, 53, 23, 37, 54, 24],
				[19, 45, 15, 26, 46, 16],
				[5, 145, 115, 10, 146, 116],
				[19, 75, 47, 10, 76, 48],
				[15, 54, 24, 25, 55, 25],
				[23, 45, 15, 25, 46, 16],
				[13, 145, 115, 3, 146, 116],
				[2, 74, 46, 29, 75, 47],
				[42, 54, 24, 1, 55, 25],
				[23, 45, 15, 28, 46, 16],
				[17, 145, 115],
				[10, 74, 46, 23, 75, 47],
				[10, 54, 24, 35, 55, 25],
				[19, 45, 15, 35, 46, 16],
				[17, 145, 115, 1, 146, 116],
				[14, 74, 46, 21, 75, 47],
				[29, 54, 24, 19, 55, 25],
				[11, 45, 15, 46, 46, 16],
				[13, 145, 115, 6, 146, 116],
				[14, 74, 46, 23, 75, 47],
				[44, 54, 24, 7, 55, 25],
				[59, 46, 16, 1, 47, 17],
				[12, 151, 121, 7, 152, 122],
				[12, 75, 47, 26, 76, 48],
				[39, 54, 24, 14, 55, 25],
				[22, 45, 15, 41, 46, 16],
				[6, 151, 121, 14, 152, 122],
				[6, 75, 47, 34, 76, 48],
				[46, 54, 24, 10, 55, 25],
				[2, 45, 15, 64, 46, 16],
				[17, 152, 122, 4, 153, 123],
				[29, 74, 46, 14, 75, 47],
				[49, 54, 24, 10, 55, 25],
				[24, 45, 15, 46, 46, 16],
				[4, 152, 122, 18, 153, 123],
				[13, 74, 46, 32, 75, 47],
				[48, 54, 24, 14, 55, 25],
				[42, 45, 15, 32, 46, 16],
				[20, 147, 117, 4, 148, 118],
				[40, 75, 47, 7, 76, 48],
				[43, 54, 24, 22, 55, 25],
				[10, 45, 15, 67, 46, 16],
				[19, 148, 118, 6, 149, 119],
				[18, 75, 47, 31, 76, 48],
				[34, 54, 24, 34, 55, 25],
				[20, 45, 15, 61, 46, 16]
			], o.getRSBlocks = function(t, e) { var i = o.getRsBlockTable(t, e); if(void 0 == i) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e); for(var r = i.length / 3, n = [], s = 0; s < r; s++)
					for(var a = i[3 * s + 0], l = i[3 * s + 1], c = i[3 * s + 2], h = 0; h < a; h++) n.push(new o(l, c)); return n }, o.getRsBlockTable = function(t, e) { switch(e) {
					case 1:
						return o.RS_BLOCK_TABLE[4 * (t - 1) + 0];
					case 0:
						return o.RS_BLOCK_TABLE[4 * (t - 1) + 1];
					case 3:
						return o.RS_BLOCK_TABLE[4 * (t - 1) + 2];
					case 2:
						return o.RS_BLOCK_TABLE[4 * (t - 1) + 3] } }, s.prototype = { get: function(t) { return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) }, put: function(t, e) { for(var i = 0; i < e; i++) this.putBit(1 == (t >>> e - i - 1 & 1)) }, getLengthInBits: function() { return this.length }, putBit: function(t) { var e = Math.floor(this.length / 8);
					this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++ } }, "string" == typeof e && (e = { text: e }), e = t.extend({}, { render: "canvas", width: 256, height: 256, typeNumber: -1, correctLevel: 2, background: "#ffffff", foreground: "#000000" }, e), this.each(function() { var i; if("canvas" == e.render) { i = new r(e.typeNumber, e.correctLevel), i.addData(e.text), i.make(); var n = document.createElement("canvas");
					n.width = e.width, n.height = e.height; for(var o = n.getContext("2d"), s = e.width / i.getModuleCount(), a = e.height / i.getModuleCount(), l = 0; l < i.getModuleCount(); l++)
						for(var c = 0; c < i.getModuleCount(); c++) { o.fillStyle = i.isDark(l, c) ? e.foreground : e.background; var h = Math.ceil((c + 1) * s) - Math.floor(c * s),
								u = Math.ceil((l + 1) * s) - Math.floor(l * s);
							o.fillRect(Math.round(c * s), Math.round(l * a), h, u) } } else
					for(i = new r(e.typeNumber, e.correctLevel), i.addData(e.text), i.make(), n = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), o = e.width / i.getModuleCount(), s = e.height / i.getModuleCount(), a = 0; a < i.getModuleCount(); a++)
						for(l = t("<tr></tr>").css("height", s + "px").appendTo(n), c = 0; c < i.getModuleCount(); c++) t("<td></td>").css("width", o + "px").css("background-color", i.isDark(a, c) ? e.foreground : e.background).appendTo(l);
				i = n, jQuery(i).appendTo(this) })
		}
	}(jQuery)
}, function(t, e, i) { var r, n;
	i(100), ! function(o, s) { "use strict"; var a, l, c = (o.layui && layui.define, { getPath: function() { var t = document.scripts,
						e = t[t.length - 1],
						i = e.src; if(!e.getAttribute("merge")) return i.substring(0, i.lastIndexOf("/") + 1) }(), config: {}, end: {}, minIndex: 0, minLeft: [], btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"], type: ["dialog", "page", "iframe", "loading", "tips"] }),
			h = { v: "3.0.3", ie: function() { var t = navigator.userAgent.toLowerCase(); return !!(o.ActiveXObject || "ActiveXObject" in o) && ((t.match(/msie\s(\d+)/) || [])[1] || "11") }(), index: o.layer && o.layer.v ? 1e5 : 0, path: c.getPath, config: function(t, e) { return t = t || {}, h.cache = c.config = a.extend({}, c.config, t), h.path = c.config.path || h.path, "string" == typeof t.extend && (t.extend = [t.extend]), c.config.path && h.ready(), t.extend ? this : this }, ready: function(t) { return this }, alert: function(t, e, i) { var r = "function" == typeof e; return r && (i = e), h.open(a.extend({ content: t, yes: i }, r ? {} : e)) }, confirm: function(t, e, i, r) { var n = "function" == typeof e; return n && (r = i, i = e), h.open(a.extend({ content: t, btn: c.btn, yes: i, btn2: r }, n ? {} : e)) }, msg: function(t, e, i) { var r = "function" == typeof e,
						n = c.config.skin,
						o = (n ? n + " " + n + "-msg" : "") || "layui-layer-msg",
						l = f.anim.length - 1; return r && (i = e), h.open(a.extend({ content: t, time: 3e3, shade: !1, skin: o, title: !1, closeBtn: !1, btn: !1, resize: !1, end: i }, r && !c.config.skin ? { skin: o + " layui-layer-hui", anim: l } : function() { return e = e || {}, (e.icon === -1 || e.icon === s && !c.config.skin) && (e.skin = o + " " + (e.skin || "layui-layer-hui")), e }())) }, load: function(t, e) { return h.open(a.extend({ type: 3, icon: t || 0, resize: !1, shade: .01 }, e)) }, tips: function(t, e, i) { return h.open(a.extend({ type: 4, content: [t, e], closeBtn: !1, time: 3e3, shade: !1, resize: !1, fixed: !1, maxWidth: 210 }, i)) } },
			u = function(t) { var e = this;
				e.index = ++h.index, e.config = a.extend({}, e.config, c.config, t), document.body ? e.creat() : setTimeout(function() { e.creat() }, 30) };
		u.pt = u.prototype; var f = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
		f.anim = ["layer-anim", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], u.pt.config = { type: 0, shade: .3, fixed: !0, move: f[1], title: "&#x4FE1;&#x606F;", offset: "auto", area: "auto", closeBtn: 1, time: 0, zIndex: 19891014, maxWidth: 360, anim: 0, isOutAnim: !0, icon: -1, moveType: 1, resize: !0, scrollbar: !0, tips: 2 }, u.pt.vessel = function(t, e) { var i = this,
				r = i.index,
				n = i.config,
				o = n.zIndex + r,
				s = "object" == typeof n.title,
				l = n.maxmin && (1 === n.type || 2 === n.type),
				h = n.title ? '<div class="layui-layer-title" style="' + (s ? n.title[1] : "") + '">' + (s ? n.title[0] : n.title) + "</div>" : ""; return n.zIndex = o, e([n.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + r + '" times="' + r + '" style="' + ("z-index:" + (o - 1) + "; background-color:" + (n.shade[1] || "#000") + "; opacity:" + (n.shade[0] || n.shade) + "; filter:alpha(opacity=" + (100 * n.shade[0] || 100 * n.shade) + ");") + '"></div>' : "", '<div class="' + f[0] + (" layui-layer-" + c.type[n.type]) + (0 != n.type && 2 != n.type || n.shade ? "" : " layui-layer-border") + " " + (n.skin || "") + '" id="' + f[0] + r + '" type="' + c.type[n.type] + '" times="' + r + '" showtime="' + n.time + '" conType="' + (t ? "object" : "string") + '" style="z-index: ' + o + "; width:" + n.area[0] + ";height:" + n.area[1] + (n.fixed ? "" : ";position:absolute;") + '">' + (t && 2 != n.type ? "" : h) + '<div id="' + (n.id || "") + '" class="layui-layer-content' + (0 == n.type && n.icon !== -1 ? " layui-layer-padding" : "") + (3 == n.type ? " layui-layer-loading" + n.icon : "") + '">' + (0 == n.type && n.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + n.icon + '"></i>' : "") + (1 == n.type && t ? "" : n.content || "") + '</div><span class="layui-layer-setwin">' + function() { var t = l ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : ""; return n.closeBtn && (t += '<a class="layui-layer-ico ' + f[7] + " " + f[7] + (n.title ? n.closeBtn : 4 == n.type ? "1" : "2") + '" href="javascript:;"></a>'), t }() + "</span>" + (n.btn ? function() { var t = ""; "string" == typeof n.btn && (n.btn = [n.btn]); for(var e = 0, i = n.btn.length; e < i; e++) t += '<a class="' + f[6] + e + '">' + n.btn[e] + "</a>"; return '<div class="' + f[6] + (n.btnAlign ? " layui-layer-btn-" + n.btnAlign : "") + '">' + t + "</div>" }() : "") + (n.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"], h, a('<div class="layui-layer-move"></div>')), i }, u.pt.creat = function() { var t = this,
				e = t.config,
				i = t.index,
				r = e.content,
				n = "object" == typeof r,
				o = a("body"); if(!e.id || !a("#" + e.id)[0]) { switch("string" == typeof e.area && (e.area = "auto" === e.area ? ["", ""] : [e.area, ""]), e.shift && (e.anim = e.shift), 6 == h.ie && (e.fixed = !1), e.type) {
					case 0:
						e.btn = "btn" in e ? e.btn : c.btn[0], h.closeAll("dialog"); break;
					case 2:
						var r = e.content = n ? e.content : [e.content, "auto"];
						e.content = '<iframe scrolling="' + (e.content[1] || "auto") + '" allowtransparency="true" id="' + f[4] + i + '" name="' + f[4] + i + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + e.content[0] + '"></iframe>'; break;
					case 3:
						delete e.title, delete e.closeBtn, e.icon === -1 && 0 === e.icon, h.closeAll("loading"); break;
					case 4:
						n || (e.content = [e.content, "body"]), e.follow = e.content[1], e.content = e.content[0] + '<i class="layui-layer-TipsG"></i>', delete e.title, e.tips = "object" == typeof e.tips ? e.tips : [e.tips, !0], e.tipsMore || h.closeAll("tips") } t.vessel(n, function(s, l, h) { o.append(s[0]), n ? function() { 2 == e.type || 4 == e.type ? function() { a("body").append(s[1]) }() : function() { r.parents("." + f[0])[0] || (r.data("display", r.css("display")).show().addClass("layui-layer-wrap").wrap(s[1]), a("#" + f[0] + i).find("." + f[5]).before(l)) }() }() : o.append(s[1]), a(".layui-layer-move")[0] || o.append(c.moveElem = h), t.layero = a("#" + f[0] + i), e.scrollbar || f.html.css("overflow", "hidden").attr("layer-full", i) }).auto(i), 2 == e.type && 6 == h.ie && t.layero.find("iframe").attr("src", r[0]), 4 == e.type ? t.tips() : t.offset(), e.fixed && l.on("resize", function() { t.offset(), (/^\d+%$/.test(e.area[0]) || /^\d+%$/.test(e.area[1])) && t.auto(i), 4 == e.type && t.tips() }), e.time <= 0 || setTimeout(function() { h.close(t.index) }, e.time), t.move().callback(), f.anim[e.anim] && t.layero.addClass(f.anim[e.anim]), e.isOutAnim && t.layero.data("isOutAnim", !0) } }, u.pt.auto = function(t) {
			function e(t) { t = n.find(t), t.height(o[1] - s - c - 2 * (0 | parseFloat(t.css("padding-top")))) } var i = this,
				r = i.config,
				n = a("#" + f[0] + t); "" === r.area[0] && r.maxWidth > 0 && (h.ie && h.ie < 8 && r.btn && n.width(n.innerWidth()), n.outerWidth() > r.maxWidth && n.width(r.maxWidth)); var o = [n.innerWidth(), n.innerHeight()],
				s = n.find(f[1]).outerHeight() || 0,
				c = n.find("." + f[6]).outerHeight() || 0; switch(r.type) {
				case 2:
					e("iframe"); break;
				default:
					"" === r.area[1] ? r.fixed && o[1] >= l.height() && (o[1] = l.height(), e("." + f[5])) : e("." + f[5]) } return i }, u.pt.offset = function() { var t = this,
				e = t.config,
				i = t.layero,
				r = [i.outerWidth(), i.outerHeight()],
				n = "object" == typeof e.offset;
			t.offsetTop = (l.height() - r[1]) / 2, t.offsetLeft = (l.width() - r[0]) / 2, n ? (t.offsetTop = e.offset[0], t.offsetLeft = e.offset[1] || t.offsetLeft) : "auto" !== e.offset && ("t" === e.offset ? t.offsetTop = 0 : "r" === e.offset ? t.offsetLeft = l.width() - r[0] : "b" === e.offset ? t.offsetTop = l.height() - r[1] : "l" === e.offset ? t.offsetLeft = 0 : "lt" === e.offset ? (t.offsetTop = 0, t.offsetLeft = 0) : "lb" === e.offset ? (t.offsetTop = l.height() - r[1], t.offsetLeft = 0) : "rt" === e.offset ? (t.offsetTop = 0, t.offsetLeft = l.width() - r[0]) : "rb" === e.offset ? (t.offsetTop = l.height() - r[1], t.offsetLeft = l.width() - r[0]) : t.offsetTop = e.offset), e.fixed || (t.offsetTop = /%$/.test(t.offsetTop) ? l.height() * parseFloat(t.offsetTop) / 100 : parseFloat(t.offsetTop), t.offsetLeft = /%$/.test(t.offsetLeft) ? l.width() * parseFloat(t.offsetLeft) / 100 : parseFloat(t.offsetLeft), t.offsetTop += l.scrollTop(), t.offsetLeft += l.scrollLeft()), i.attr("minLeft") && (t.offsetTop = l.height() - (i.find(f[1]).outerHeight() || 0), t.offsetLeft = i.css("left")), i.css({ top: t.offsetTop, left: t.offsetLeft }) }, u.pt.tips = function() { var t = this,
				e = t.config,
				i = t.layero,
				r = [i.outerWidth(), i.outerHeight()],
				n = a(e.follow);
			n[0] || (n = a("body")); var o = { width: n.outerWidth(), height: n.outerHeight(), top: n.offset().top, left: n.offset().left },
				s = i.find(".layui-layer-TipsG"),
				c = e.tips[0];
			e.tips[1] || s.remove(), o.autoLeft = function() { o.left + r[0] - l.width() > 0 ? (o.tipLeft = o.left + o.width - r[0], s.css({ right: 12, left: "auto" })) : o.tipLeft = o.left }, o.where = [function() { o.autoLeft(), o.tipTop = o.top - r[1] - 10, s.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", e.tips[1]) }, function() { o.tipLeft = o.left + o.width + 10, o.tipTop = o.top, s.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", e.tips[1]) }, function() { o.autoLeft(), o.tipTop = o.top + o.height + 10, s.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", e.tips[1]) }, function() { o.tipLeft = o.left - r[0] - 10, o.tipTop = o.top, s.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", e.tips[1]) }], o.where[c - 1](), 1 === c ? o.top - (l.scrollTop() + r[1] + 16) < 0 && o.where[2]() : 2 === c ? l.width() - (o.left + o.width + r[0] + 16) > 0 || o.where[3]() : 3 === c ? o.top - l.scrollTop() + o.height + r[1] + 16 - l.height() > 0 && o.where[0]() : 4 === c && r[0] + 16 - o.left > 0 && o.where[1](), i.find("." + f[5]).css({ "background-color": e.tips[1], "padding-right": e.closeBtn ? "30px" : "" }), i.css({ left: o.tipLeft - (e.fixed ? l.scrollLeft() : 0), top: o.tipTop - (e.fixed ? l.scrollTop() : 0) }) }, u.pt.move = function() { var t = this,
				e = t.config,
				i = a(document),
				r = t.layero,
				n = r.find(e.move),
				o = r.find(".layui-layer-resize"),
				s = {}; return e.move && n.css("cursor", "move"), n.on("mousedown", function(t) { t.preventDefault(), e.move && (s.moveStart = !0, s.offset = [t.clientX - parseFloat(r.css("left")), t.clientY - parseFloat(r.css("top"))], c.moveElem.css("cursor", "move").show()) }), o.on("mousedown", function(t) { t.preventDefault(), s.resizeStart = !0, s.offset = [t.clientX, t.clientY], s.area = [r.outerWidth(), r.outerHeight()], c.moveElem.css("cursor", "se-resize").show() }), i.on("mousemove", function(i) { if(s.moveStart) { var n = i.clientX - s.offset[0],
						o = i.clientY - s.offset[1],
						a = "fixed" === r.css("position"); if(i.preventDefault(), s.stX = a ? 0 : l.scrollLeft(), s.stY = a ? 0 : l.scrollTop(), !e.moveOut) { var c = l.width() - r.outerWidth() + s.stX,
							u = l.height() - r.outerHeight() + s.stY;
						n < s.stX && (n = s.stX), n > c && (n = c), o < s.stY && (o = s.stY), o > u && (o = u) } r.css({ left: n, top: o }) } if(e.resize && s.resizeStart) { var n = i.clientX - s.offset[0],
						o = i.clientY - s.offset[1];
					i.preventDefault(), h.style(t.index, { width: s.area[0] + n, height: s.area[1] + o }), s.isResize = !0, e.resizing && e.resizing(r) } }).on("mouseup", function(t) { s.moveStart && (delete s.moveStart, c.moveElem.hide(), e.moveEnd && e.moveEnd(r)), s.resizeStart && (delete s.resizeStart, c.moveElem.hide()) }), t }, u.pt.callback = function() {
			function t() { var t = r.cancel && r.cancel(e.index, i);
				t === !1 || h.close(e.index) } var e = this,
				i = e.layero,
				r = e.config;
			e.openLayer(), r.success && (2 == r.type ? i.find("iframe").on("load", function() { r.success(i, e.index) }) : r.success(i, e.index)), 6 == h.ie && e.IE6(i), i.find("." + f[6]).children("a").on("click", function() { var t = a(this).index(); if(0 === t) r.yes ? r.yes(e.index, i) : r.btn1 ? r.btn1(e.index, i) : h.close(e.index);
				else { var n = r["btn" + (t + 1)] && r["btn" + (t + 1)](e.index, i);
					n === !1 || h.close(e.index) } }), i.find("." + f[7]).on("click", t), r.shadeClose && a("#layui-layer-shade" + e.index).on("click", function() { h.close(e.index) }), i.find(".layui-layer-min").on("click", function() { var t = r.min && r.min(i);
				t === !1 || h.min(e.index, r) }), i.find(".layui-layer-max").on("click", function() { a(this).hasClass("layui-layer-maxmin") ? (h.restore(e.index), r.restore && r.restore(i)) : (h.full(e.index, r), setTimeout(function() { r.full && r.full(i) }, 100)) }), r.end && (c.end[e.index] = r.end) }, c.reselect = function() { a.each(a("select"), function(t, e) { var i = a(this);
				i.parents("." + f[0])[0] || 1 == i.attr("layer") && a("." + f[0]).length < 1 && i.removeAttr("layer").show(), i = null }) }, u.pt.IE6 = function(t) { a("select").each(function(t, e) { var i = a(this);
				i.parents("." + f[0])[0] || "none" === i.css("display") || i.attr({ layer: "1" }).hide(), i = null }) }, u.pt.openLayer = function() { var t = this;
			h.zIndex = t.config.zIndex, h.setTop = function(t) { var e = function() { h.zIndex++, t.css("z-index", h.zIndex + 1) }; return h.zIndex = parseInt(t[0].style.zIndex), t.on("mousedown", e), h.zIndex } }, c.record = function(t) { var e = [t.width(), t.height(), t.position().top, t.position().left + parseFloat(t.css("margin-left"))];
			t.find(".layui-layer-max").addClass("layui-layer-maxmin"), t.attr({ area: e }) }, c.rescollbar = function(t) { f.html.attr("layer-full") == t && (f.html[0].style.removeProperty ? f.html[0].style.removeProperty("overflow") : f.html[0].style.removeAttribute("overflow"), f.html.removeAttr("layer-full")) }, o.layer = h, h.getChildFrame = function(t, e) { return e = e || a("." + f[4]).attr("times"), a("#" + f[0] + e).find("iframe").contents().find(t) }, h.getFrameIndex = function(t) { return a("#" + t).parents("." + f[4]).attr("times") }, h.iframeAuto = function(t) { if(t) { var e = h.getChildFrame("html", t).outerHeight(),
					i = a("#" + f[0] + t),
					r = i.find(f[1]).outerHeight() || 0,
					n = i.find("." + f[6]).outerHeight() || 0;
				i.css({ height: e + r + n }), i.find("iframe").css({ height: e }) } }, h.iframeSrc = function(t, e) { a("#" + f[0] + t).find("iframe").attr("src", e) }, h.style = function(t, e, i) { var r = a("#" + f[0] + t),
				n = r.find(".layui-layer-content"),
				o = r.attr("type"),
				s = r.find(f[1]).outerHeight() || 0,
				l = r.find("." + f[6]).outerHeight() || 0;
			r.attr("minLeft"), o !== c.type[3] && o !== c.type[4] && (i || (parseFloat(e.width) <= 260 && (e.width = 260), parseFloat(e.height) - s - l <= 64 && (e.height = 64 + s + l)), r.css(e), l = r.find("." + f[6]).outerHeight(), o === c.type[2] ? r.find("iframe").css({ height: parseFloat(e.height) - s - l }) : n.css({ height: parseFloat(e.height) - s - l - parseFloat(n.css("padding-top")) - parseFloat(n.css("padding-bottom")) })) }, h.min = function(t, e) { var i = a("#" + f[0] + t),
				r = i.find(f[1]).outerHeight() || 0,
				n = i.attr("minLeft") || 181 * c.minIndex + "px",
				o = i.css("position");
			c.record(i), c.minLeft[0] && (n = c.minLeft[0], c.minLeft.shift()), i.attr("position", o), h.style(t, { width: 180, height: r, left: n, top: l.height() - r, position: "fixed", overflow: "hidden" }, !0), i.find(".layui-layer-min").hide(), "page" === i.attr("type") && i.find(f[4]).hide(), c.rescollbar(t), i.attr("minLeft") || c.minIndex++, i.attr("minLeft", n) }, h.restore = function(t) { var e = a("#" + f[0] + t),
				i = e.attr("area").split(",");
			e.attr("type"), h.style(t, { width: parseFloat(i[0]), height: parseFloat(i[1]), top: parseFloat(i[2]), left: parseFloat(i[3]), position: e.attr("position"), overflow: "visible" }, !0), e.find(".layui-layer-max").removeClass("layui-layer-maxmin"), e.find(".layui-layer-min").show(), "page" === e.attr("type") && e.find(f[4]).show(), c.rescollbar(t) }, h.full = function(t) { var e, i = a("#" + f[0] + t);
			c.record(i), f.html.attr("layer-full") || f.html.css("overflow", "hidden").attr("layer-full", t), clearTimeout(e), e = setTimeout(function() { var e = "fixed" === i.css("position");
				h.style(t, { top: e ? 0 : l.scrollTop(), left: e ? 0 : l.scrollLeft(), width: l.width(), height: l.height() }, !0), i.find(".layui-layer-min").hide() }, 100) }, h.title = function(t, e) { var i = a("#" + f[0] + (e || h.index)).find(f[1]);
			i.html(t) }, h.close = function(t) { var e = a("#" + f[0] + t),
				i = e.attr("type"),
				r = "layer-anim-close"; if(e[0]) { var n = "layui-layer-wrap",
					o = function() { if(i === c.type[1] && "object" === e.attr("conType")) { e.children(":not(." + f[5] + ")").remove(); for(var r = e.find("." + n), o = 0; o < 2; o++) r.unwrap();
							r.css("display", r.data("display")).removeClass(n) } else { if(i === c.type[2]) try { var s = a("#" + f[4] + t)[0];
								s.contentWindow.document.write(""), s.contentWindow.close(), e.find("." + f[5])[0].removeChild(s) } catch(l) {} e[0].innerHTML = "", e.remove() } "function" == typeof c.end[t] && c.end[t](), delete c.end[t] };
				e.data("isOutAnim") && e.addClass(r), a("#layui-layer-moves, #layui-layer-shade" + t).remove(), 6 == h.ie && c.reselect(), c.rescollbar(t), e.attr("minLeft") && (c.minIndex--, c.minLeft.push(e.attr("minLeft"))), h.ie && h.ie < 10 || !e.data("isOutAnim") ? o() : setTimeout(function() { o() }, 200) } }, h.closeAll = function(t) { a.each(a("." + f[0]), function() { var e = a(this),
					i = t ? e.attr("type") === t : 1;
				i && h.close(e.attr("times")), i = null }) }; var d = h.cache || {},
			p = function(t) { return d.skin ? " " + d.skin + " " + d.skin + "-" + t : "" };
		h.prompt = function(t, e) { var i = ""; if(t = t || {}, "function" == typeof t && (e = t), t.area) { var r = t.area;
				i = 'style="width: ' + r[0] + "; height: " + r[1] + ';"', delete t.area } var n, o = 2 == t.formType ? '<textarea class="layui-layer-input"' + i + ">" + (t.value || "") + "</textarea>" : function() { return '<input type="' + (1 == t.formType ? "password" : "text") + '" class="layui-layer-input" value="' + (t.value || "") + '">' }(),
				s = t.success; return delete t.success, h.open(a.extend({ type: 1, btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"], content: o, skin: "layui-layer-prompt" + p("prompt"), maxWidth: l.width(), success: function(t) { n = t.find(".layui-layer-input"), n.focus(), "function" == typeof s && s(t) }, resize: !1, yes: function(i) { var r = n.val(); "" === r ? n.focus() : r.length > (t.maxlength || 500) ? h.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (t.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", n, { tips: 1 }) : e && e(r, i, n) } }, t)) }, h.tab = function(t) { t = t || {}; var e = t.tab || {},
				i = t.success; return delete t.success, h.open(a.extend({ type: 1, skin: "layui-layer-tab" + p("tab"), resize: !1, title: function() { var t = e.length,
						i = 1,
						r = ""; if(t > 0)
						for(r = '<span class="layui-layer-tabnow">' + e[0].title + "</span>"; i < t; i++) r += "<span>" + e[i].title + "</span>"; return r }(), content: '<ul class="layui-layer-tabmain">' + function() { var t = e.length,
						i = 1,
						r = ""; if(t > 0)
						for(r = '<li class="layui-layer-tabli xubox_tab_layer">' + (e[0].content || "no content") + "</li>"; i < t; i++) r += '<li class="layui-layer-tabli">' + (e[i].content || "no  content") + "</li>"; return r }() + "</ul>", success: function(e) { var r = e.find(".layui-layer-title").children(),
						n = e.find(".layui-layer-tabmain").children();
					r.on("mousedown", function(e) { e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0; var i = a(this),
							r = i.index();
						i.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"), n.eq(r).show().siblings().hide(), "function" == typeof t.change && t.change(r) }), "function" == typeof i && i(e) } }, t)) }, h.photos = function(t, e, i) {
			function r(t, e, i) { var r = new Image; return r.src = t, r.complete ? e(r) : (r.onload = function() { r.onload = null, e(r) }, void(r.onerror = function(t) { r.onerror = null, i(t) })) } var n = {}; if(t = t || {}, t.photos) { var s = t.photos.constructor === Object,
					l = s ? t.photos : {},
					c = l.data || [],
					u = l.start || 0;
				n.imgIndex = (0 | u) + 1, t.img = t.img || "img"; var f = t.success; if(delete t.success, s) { if(0 === c.length) return h.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;") } else { var d = a(t.photos),
						g = function() { c = [], d.find(t.img).each(function(t) { var e = a(this);
								e.attr("layer-index", t), c.push({ alt: e.attr("alt"), pid: e.attr("layer-pid"), src: e.attr("layer-src") || e.attr("src"), thumb: e.attr("src") }) }) }; if(g(), 0 === c.length) return; if(e || d.on("click", t.img, function() { var e = a(this),
								i = e.attr("layer-index");
							h.photos(a.extend(t, { photos: { start: i, data: c, tab: t.tab }, full: t.full }), !0), g() }), !e) return } n.imgprev = function(t) { n.imgIndex--, n.imgIndex < 1 && (n.imgIndex = c.length), n.tabimg(t) }, n.imgnext = function(t, e) { n.imgIndex++, n.imgIndex > c.length && (n.imgIndex = 1, e) || n.tabimg(t) }, n.keyup = function(t) { if(!n.end) { var e = t.keyCode;
						t.preventDefault(), 37 === e ? n.imgprev(!0) : 39 === e ? n.imgnext(!0) : 27 === e && h.close(n.index) } }, n.tabimg = function(e) { if(!(c.length <= 1)) return l.start = n.imgIndex - 1, h.close(n.index), h.photos(t, !0, e) }, n.event = function() { n.bigimg.hover(function() { n.imgsee.show() }, function() { n.imgsee.hide() }), n.bigimg.find(".layui-layer-imgprev").on("click", function(t) { t.preventDefault(), n.imgprev() }), n.bigimg.find(".layui-layer-imgnext").on("click", function(t) { t.preventDefault(), n.imgnext() }), a(document).on("keyup", n.keyup) }, n.loadi = h.load(1, { shade: !("shade" in t) && .9, scrollbar: !1 }), r(c[u].src, function(e) { h.close(n.loadi), n.index = h.open(a.extend({ type: 1, id: "layui-layer-photos", area: function() { var i = [e.width, e.height],
								r = [a(o).width() - 100, a(o).height() - 100]; if(!t.full && (i[0] > r[0] || i[1] > r[1])) { var n = [i[0] / r[0], i[1] / r[1]];
								n[0] > n[1] ? (i[0] = i[0] / n[0], i[1] = i[1] / n[0]) : n[0] < n[1] && (i[0] = i[0] / n[1], i[1] = i[1] / n[1]) } return [i[0] + "px", i[1] + "px"] }(), title: !1, shade: .9, shadeClose: !0, closeBtn: !1, move: ".layui-layer-phimg img", moveType: 1, scrollbar: !1, moveOut: !0, isOutAnim: !1, skin: "layui-layer-photos" + p("photos"), content: '<div class="layui-layer-phimg"><img src="' + c[u].src + '" alt="' + (c[u].alt || "") + '" layer-pid="' + c[u].pid + '"><div class="layui-layer-imgsee">' + (c.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : "") + '<div class="layui-layer-imgbar" style="display:' + (i ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (c[u].alt || "") + "</a><em>" + n.imgIndex + "/" + c.length + "</em></span></div></div></div>", success: function(e, i) { n.bigimg = e.find(".layui-layer-phimg"), n.imgsee = e.find(".layui-layer-imguide,.layui-layer-imgbar"), n.event(e), t.tab && t.tab(c[u], e), "function" == typeof f && f(e) }, end: function() { n.end = !0, a(document).off("keyup", n.keyup) } }, t)) }, function() { h.close(n.loadi), h.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", { time: 3e4, btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"], yes: function() { c.length > 1 && n.imgnext(!0, !0) } }) }) } }, c.run = function(t) { a = t, l = a(o), f.html = a("html"), h.open = function(t) { var e = new u(t); return e.index } }, o.layui && layui.define ? (h.ready(), layui.define("jquery", function(t) { h.path = layui.cache.dir, c.run(layui.jquery), o.layer = h, t("layer", h) })) : (r = [i(2)], n = function() { return c.run(o.jQuery), h }.apply(e, r), !(n !== s && (t.exports = n))) }(window) }, function(t, e, i) { var r;! function() { "use strict";

		function n(t) { var e = "laypagecss";
			n.dir = "dir" in n ? n.dir : c.getpath + "/skin/laypage.css", new c(t), n.dir && !o[s](e) && c.use(n.dir, e) } n.v = "1.3"; var o = document,
			s = "getElementById",
			a = "getElementsByTagName",
			l = 0,
			c = function(t) { var e = this,
					i = e.config = t || {};
				i.item = l++, e.render(!0) };
		c.on = function(t, e, i) { return t.attachEvent ? t.attachEvent("on" + e, function() { i.call(t, window.even) }) : t.addEventListener(e, i, !1), c }, c.getpath = function() { var t = document.scripts,
				e = t[t.length - 1].src; return e.substring(0, e.lastIndexOf("/") + 1) }(), c.use = function(t, e) { var i = o.createElement("link");
			i.type = "text/css", i.rel = "stylesheet", i.href = n.dir, e && (i.id = e), o[a]("head")[0].appendChild(i), i = null }, c.prototype.type = function() { var t = this.config; if("object" == typeof t.cont) return void 0 === t.cont.length ? 2 : 3 }, c.prototype.view = function() { var t = this,
				e = t.config,
				i = [],
				r = {}; if(e.pages = 0 | e.pages, e.curr = 0 | e.curr || 1, e.groups = "groups" in e ? 0 | e.groups : 5, e.first = "first" in e ? e.first : "&#x9996;&#x9875;", e.last = "last" in e ? e.last : "&#x5C3E;&#x9875;", e.prev = "prev" in e ? e.prev : "&#x4E0A;&#x4E00;&#x9875;", e.next = "next" in e ? e.next : "&#x4E0B;&#x4E00;&#x9875;", e.pages <= 1) return ""; for(e.groups > e.pages && (e.groups = e.pages), r.index = Math.ceil((e.curr + (e.groups > 1 && e.groups !== e.pages ? 1 : 0)) / (0 === e.groups ? 1 : e.groups)), e.curr > 1 && e.prev && i.push('<a href="javascript:;" class="laypage_prev" data-page="' + (e.curr - 1) + '">' + e.prev + "</a>"), r.index > 1 && e.first && 0 !== e.groups && i.push('<a href="javascript:;" class="laypage_first" data-page="1"  title="&#x9996;&#x9875;">' + e.first + "</a><span>&#x2026;</span>"), r.poor = Math.floor((e.groups - 1) / 2), r.start = r.index > 1 ? e.curr - r.poor : 1, r.end = r.index > 1 ? function() { var t = e.curr + (e.groups - r.poor - 1); return t > e.pages ? e.pages : t }() : e.groups, r.end - r.start < e.groups - 1 && (r.start = r.end - e.groups + 1); r.start <= r.end; r.start++) r.start === e.curr ? i.push('<span class="laypage_curr" ' + (/^#/.test(e.skin) ? 'style="background-color:' + e.skin + '"' : "") + ">" + r.start + "</span>") : i.push('<a href="javascript:;" data-page="' + r.start + '">' + r.start + "</a>"); return e.pages > e.groups && r.end < e.pages && e.last && 0 !== e.groups && i.push('<span>&#x2026;</span><a href="javascript:;" class="laypage_last" title="&#x5C3E;&#x9875;"  data-page="' + e.pages + '">' + e.last + "</a>"), r.flow = !e.prev && 0 === e.groups, (e.curr !== e.pages && e.next || r.flow) && i.push(function() { return r.flow && e.curr === e.pages ? '<span class="page_nomore" title="&#x5DF2;&#x6CA1;&#x6709;&#x66F4;&#x591A;">' + e.next + "</span>" : '<a href="javascript:;" class="laypage_next" data-page="' + (e.curr + 1) + '">' + e.next + "</a>" }()), '<div name="laypage' + n.v + '" class="laypage_main laypageskin_' + (e.skin ? function(t) { return /^#/.test(t) ? "molv" : t }(e.skin) : "default") + '" id="laypage_' + t.config.item + '">' + i.join("") + function() { return e.skip ? '<span class="laypage_total"><label>&#x5230;&#x7B2C;</label><input type="number" min="1" onkeyup="this.value=this.value.replace(/\\D/, \'\');" class="laypage_skip"><label>&#x9875;</label><button type="button" class="laypage_btn">&#x786e;&#x5b9a;</button></span>' : "" }() + "</div>" }, c.prototype.jump = function(t) { if(t) { for(var e = this, i = e.config, r = t.children, n = t[a]("button")[0], o = t[a]("input")[0], s = 0, l = r.length; s < l; s++) "a" === r[s].nodeName.toLowerCase() && c.on(r[s], "click", function() { var t = 0 | this.getAttribute("data-page");
					i.curr = t, e.render() });
				n && c.on(n, "click", function() { var t = 0 | o.value.replace(/\s|\D/g, "");
					t && t <= i.pages && (i.curr = t, e.render()) }) } }, c.prototype.render = function(t) { var e = this,
				i = e.config,
				r = e.type(),
				n = e.view();
			2 === r ? i.cont.innerHTML = n : 3 === r ? i.cont.html(n) : o[s](i.cont).innerHTML = n, i.jump && i.jump(i, t), e.jump(o[s]("laypage_" + i.item)), i.hash && !t && (location.hash = "!" + i.hash + "=" + i.curr) }, r = function() { return n }.call(e, i, e, t), !(void 0 !== r && (t.exports = r)) }() }, , , function(t, e) {
	+ function(t) {
		"use strict";

		function e(e) { return this.each(function() { var r = t(this),
					n = r.data("bs.affix"),
					o = "object" == typeof e && e;
				n || r.data("bs.affix", n = new i(this, o)), "string" == typeof e && n[e]() }) }
		var i = function(e, r) { this.options = t.extend({}, i.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
		i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, r) { var n = this.$target.scrollTop(),
				o = this.$element.offset(),
				s = this.$target.height(); if(null != i && "top" == this.affixed) return n < i && "top"; if("bottom" == this.affixed) return null != i ? !(n + this.unpin <= o.top) && "bottom" : !(n + s <= t - r) && "bottom"; var a = null == this.affixed,
				l = a ? n : o.top,
				c = a ? s : e; return null != i && n <= i ? "top" : null != r && l + c >= t - r && "bottom" }, i.prototype.getPinnedOffset = function() { if(this.pinnedOffset) return this.pinnedOffset;
			this.$element.removeClass(i.RESET).addClass("affix"); var t = this.$target.scrollTop(),
				e = this.$element.offset(); return this.pinnedOffset = e.top - t }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() { if(this.$element.is(":visible")) { var e = this.$element.height(),
					r = this.options.offset,
					n = r.top,
					o = r.bottom,
					s = Math.max(t(document).height(), t(document.body).height()); "object" != typeof r && (o = n = r), "function" == typeof n && (n = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element)); var a = this.getState(s, e, n, o); if(this.affixed != a) { null != this.unpin && this.$element.css("top", ""); var l = "affix" + (a ? "-" + a : ""),
						c = t.Event(l + ".bs.affix"); if(this.$element.trigger(c), c.isDefaultPrevented()) return;
					this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == a && this.$element.offset({ top: s - e - o }) } };
		var r = t.fn.affix;
		t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
			return t.fn.affix = r,
				this
		}, t(window).on("load", function() { t('[data-spy="affix"]').each(function() { var i = t(this),
					r = i.data();
				r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(i, r) }) })
	}(jQuery)
}, function(t, e) {+ function(t) { "use strict";

		function e(e) { return this.each(function() { var i = t(this),
					n = i.data("bs.alert");
				n || i.data("bs.alert", n = new r(this)), "string" == typeof e && n[e].call(i) }) } var i = '[data-dismiss="alert"]',
			r = function(e) { t(e).on("click", i, this.close) };
		r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function(e) {
			function i() { s.detach().trigger("closed.bs.alert").remove() } var n = t(this),
				o = n.attr("data-target");
			o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")); var s = t("#" === o ? [] : o);
			e && e.preventDefault(), s.length || (s = n.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(r.TRANSITION_DURATION) : i()) }; var n = t.fn.alert;
		t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function() { return t.fn.alert = n, this }, t(document).on("click.bs.alert.data-api", i, r.prototype.close) }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(e) { return this.each(function() { var r = t(this),
					n = r.data("bs.button"),
					o = "object" == typeof e && e;
				n || r.data("bs.button", n = new i(this, o)), "toggle" == e ? n.toggle() : e && n.setState(e) }) } var i = function(e, r) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, r), this.isLoading = !1 };
		i.VERSION = "3.3.7", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) { var i = "disabled",
				r = this.$element,
				n = r.is("input") ? "val" : "html",
				o = r.data();
			e += "Text", null == o.resetText && r.data("resetText", r[n]()), setTimeout(t.proxy(function() { r[n](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1)) }, this), 0) }, i.prototype.toggle = function() { var t = !0,
				e = this.$element.closest('[data-toggle="buttons"]'); if(e.length) { var i = this.$element.find("input"); "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var r = t.fn.button;
		t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() { return t.fn.button = r, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) { var r = t(i.target).closest(".btn");
			e.call(r, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) }) }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(e) { return this.each(function() { var r = t(this),
					n = r.data("bs.carousel"),
					o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e),
					s = "string" == typeof e ? e : o.slide;
				n || r.data("bs.carousel", n = new i(this, o)), "number" == typeof e ? n.to(e) : s ? n[s]() : o.interval && n.pause().cycle() }) } var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
		i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) { if(!/input|textarea/i.test(t.target.tagName)) { switch(t.which) {
					case 37:
						this.prev(); break;
					case 39:
						this.next(); break;
					default:
						return } t.preventDefault() } }, i.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) { var i = this.getItemIndex(e),
				r = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1; if(r && !this.options.wrap) return e; var n = "prev" == t ? -1 : 1,
				o = (i + n) % this.$items.length; return this.$items.eq(o) }, i.prototype.to = function(t) { var e = this,
				i = this.getItemIndex(this.$active = this.$element.find(".item.active")); if(!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t)) }, i.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() { if(!this.sliding) return this.slide("next") }, i.prototype.prev = function() { if(!this.sliding) return this.slide("prev") }, i.prototype.slide = function(e, r) { var n = this.$element.find(".item.active"),
				o = r || this.getItemForDirection(e, n),
				s = this.interval,
				a = "next" == e ? "left" : "right",
				l = this; if(o.hasClass("active")) return this.sliding = !1; var c = o[0],
				h = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a }); if(this.$element.trigger(h), !h.isDefaultPrevented()) { if(this.sliding = !0, s && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var u = t(this.$indicators.children()[this.getItemIndex(o)]);
					u && u.addClass("active") } var f = t.Event("slid.bs.carousel", { relatedTarget: c, direction: a }); return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, n.addClass(a), o.addClass(a), n.one("bsTransitionEnd", function() { o.removeClass([e, a].join(" ")).addClass("active"), n.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(f) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this } }; var r = t.fn.carousel;
		t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() { return t.fn.carousel = r, this }; var n = function(i) { var r, n = t(this),
				o = t(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")); if(o.hasClass("carousel")) { var s = t.extend({}, o.data(), n.data()),
					a = n.attr("data-slide-to");
				a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), i.preventDefault() } };
		t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() { var i = t(this);
				e.call(i, i.data()) }) }) }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(e) { var i, r = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""); return t(r) }

		function i(e) { return this.each(function() { var i = t(this),
					n = i.data("bs.collapse"),
					o = t.extend({}, r.DEFAULTS, i.data(), "object" == typeof e && e);!n && o.toggle && /show|hide/.test(e) && (o.toggle = !1), n || i.data("bs.collapse", n = new r(this, o)), "string" == typeof e && n[e]() }) } var r = function(e, i) { this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
		r.VERSION = "3.3.7", r.TRANSITION_DURATION = 350, r.DEFAULTS = { toggle: !0 }, r.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, r.prototype.show = function() { if(!this.transitioning && !this.$element.hasClass("in")) { var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if(!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) { var o = t.Event("show.bs.collapse"); if(this.$element.trigger(o), !o.isDefaultPrevented()) { n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null)); var s = this.dimension();
						this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var a = function() { this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if(!t.support.transition) return a.call(this); var l = t.camelCase(["scroll", s].join("-"));
						this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[s](this.$element[0][l]) } } } }, r.prototype.hide = function() { if(!this.transitioning && this.$element.hasClass("in")) { var e = t.Event("hide.bs.collapse"); if(this.$element.trigger(e), !e.isDefaultPrevented()) { var i = this.dimension();
					this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var n = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : n.call(this) } } }, r.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, r.prototype.getParent = function() { return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, r) { var n = t(r);
				this.addAriaAndCollapsedClass(e(n), n) }, this)).end() }, r.prototype.addAriaAndCollapsedClass = function(t, e) { var i = t.hasClass("in");
			t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i) }; var n = t.fn.collapse;
		t.fn.collapse = i, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function() { return t.fn.collapse = n, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) { var n = t(this);
			n.attr("data-target") || r.preventDefault(); var o = e(n),
				s = o.data("bs.collapse"),
				a = s ? "toggle" : n.data();
			i.call(o, a) }) }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(e) { var i = e.attr("data-target");
			i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")); var r = i && t(i); return r && r.length ? r : e.parent() }

		function i(i) { i && 3 === i.which || (t(n).remove(), t(o).each(function() { var r = t(this),
					n = e(r),
					o = { relatedTarget: this };
				n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (r.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o))))) })) }

		function r(e) { return this.each(function() { var i = t(this),
					r = i.data("bs.dropdown");
				r || i.data("bs.dropdown", r = new s(this)), "string" == typeof e && r[e].call(i) }) } var n = ".dropdown-backdrop",
			o = '[data-toggle="dropdown"]',
			s = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
		s.VERSION = "3.3.7", s.prototype.toggle = function(r) { var n = t(this); if(!n.is(".disabled, :disabled")) { var o = e(n),
					s = o.hasClass("open"); if(i(), !s) { "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i); var a = { relatedTarget: this }; if(o.trigger(r = t.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) return;
					n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a)) } return !1 } }, s.prototype.keydown = function(i) { if(/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) { var r = t(this); if(i.preventDefault(), i.stopPropagation(), !r.is(".disabled, :disabled")) { var n = e(r),
						s = n.hasClass("open"); if(!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && n.find(o).trigger("focus"), r.trigger("click"); var a = " li:not(.disabled):visible a",
						l = n.find(".dropdown-menu" + a); if(l.length) { var c = l.index(i.target);
						38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus") } } } }; var a = t.fn.dropdown;
		t.fn.dropdown = r, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = a, this }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown) }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(e, r) { return this.each(function() { var n = t(this),
					o = n.data("bs.modal"),
					s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
				o || n.data("bs.modal", o = new i(this, s)), "string" == typeof e ? o[e](r) : s.show && o.show(r) }) } var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
		i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) { var r = this,
				n = t.Event("show.bs.modal", { relatedTarget: e });
			this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { r.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var n = t.support.transition && r.$element.hasClass("fade");
				r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), n && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus(); var o = t.Event("shown.bs.modal", { relatedTarget: e });
				n ? r.$dialog.one("bsTransitionEnd", function() { r.$element.trigger("focus").trigger(o) }).emulateTransitionEnd(i.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o) })) }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() { var t = this;
			this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) { var r = this,
				n = this.$element.hasClass("fade") ? "fade" : ""; if(this.isShown && this.options.backdrop) { var o = t.support.transition && n; if(this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
				o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if(!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var s = function() { r.removeBackdrop(), e && e() };
				t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s() } else e && e() }, i.prototype.handleUpdate = function() { this.adjustDialog() }, i.prototype.adjustDialog = function() { var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
			this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() { var t = window.innerWidth; if(!t) { var e = document.documentElement.getBoundingClientRect();
				t = e.right - Math.abs(e.left) } this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function() { var t = parseInt(this.$body.css("padding-right") || 0, 10);
			this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function() { var t = document.createElement("div");
			t.className = "modal-scrollbar-measure", this.$body.append(t); var e = t.offsetWidth - t.clientWidth; return this.$body[0].removeChild(t), e }; var r = t.fn.modal;
		t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() { return t.fn.modal = r, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) { var r = t(this),
				n = r.attr("href"),
				o = t(r.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
				s = o.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(n) && n }, o.data(), r.data());
			r.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) { t.isDefaultPrevented() || o.one("hidden.bs.modal", function() { r.is(":visible") && r.trigger("focus") }) }), e.call(o, s, this) }) }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(e) { return this.each(function() { var r = t(this),
					n = r.data("bs.popover"),
					o = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || r.data("bs.popover", n = new i(this, o)), "string" == typeof e && n[e]()) }) } var i = function(t, e) { this.init("popover", t, e) }; if(!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
		i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.setContent = function() { var t = this.tip(),
				e = this.getTitle(),
				i = this.getContent();
			t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, i.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, i.prototype.getContent = function() { var t = this.$element,
				e = this.options; return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var r = t.fn.popover;
		t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() { return t.fn.popover = r, this } }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(i, r) { this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

		function i(i) { return this.each(function() { var r = t(this),
					n = r.data("bs.scrollspy"),
					o = "object" == typeof i && i;
				n || r.data("bs.scrollspy", n = new e(this, o)), "string" == typeof i && n[i]() }) } e.VERSION = "3.3.7", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() { var e = this,
				i = "offset",
				r = 0;
			this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var e = t(this),
					n = e.data("target") || e.attr("href"),
					o = /^#./.test(n) && t(n); return o && o.length && o.is(":visible") && [
					[o[i]().top + r, n]
				] || null }).sort(function(t, e) { return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) }) }, e.prototype.process = function() { var t, e = this.$scrollElement.scrollTop() + this.options.offset,
				i = this.getScrollHeight(),
				r = this.options.offset + i - this.$scrollElement.height(),
				n = this.offsets,
				o = this.targets,
				s = this.activeTarget; if(this.scrollHeight != i && this.refresh(), e >= r) return s != (t = o[o.length - 1]) && this.activate(t); if(s && e < n[0]) return this.activeTarget = null, this.clear(); for(t = n.length; t--;) s != o[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(o[t]) }, e.prototype.activate = function(e) { this.activeTarget = e, this.clear(); var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
				r = t(i).parents("li").addClass("active");
			r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy") }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var r = t.fn.scrollspy;
		t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = r, this }, t(window).on("load.bs.scrollspy.data-api", function() { t('[data-spy="scroll"]').each(function() { var e = t(this);
				i.call(e, e.data()) }) }) }(jQuery) }, function(t, e) {+ function(t) { "use strict";

		function e(e) { return this.each(function() { var r = t(this),
					n = r.data("bs.tab");
				n || r.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]() }) } var i = function(e) { this.element = t(e) };
		i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() { var e = this.element,
				i = e.closest("ul:not(.dropdown-menu)"),
				r = e.data("target"); if(r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) { var n = i.find(".active:last a"),
					o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
					s = t.Event("show.bs.tab", { relatedTarget: n[0] }); if(n.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) { var a = t(r);
					this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() { n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] }) }) } } }, i.prototype.activate = function(e, r, n) {
			function o() { s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n() } var s = r.find("> .active"),
				a = n && t.support.transition && (s.length && s.hasClass("fade") || !!r.find("> .fade").length);
			s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), s.removeClass("in") }; var r = t.fn.tab;
		t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() { return t.fn.tab = r, this }; var n = function(i) { i.preventDefault(), e.call(t(this), "show") };
		t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n) }(jQuery) }, function(t, e) {
	+ function(t) {
		"use strict";

		function e(e) { return this.each(function() { var r = t(this),
					n = r.data("bs.tooltip"),
					o = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || r.data("bs.tooltip", n = new i(this, o)), "string" == typeof e && n[e]()) }) }
		var i = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
		i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, r) { if(this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for(var n = this.options.trigger.split(" "), o = n.length; o--;) { var s = n[o]; if("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
				else if("manual" != s) { var a = "hover" == s ? "mouseenter" : "focusin",
						l = "hover" == s ? "mouseleave" : "focusout";
					this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } } this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, i.prototype.getDefaults = function() { return i.DEFAULTS }, i.prototype.getOptions = function(e) { return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() { var e = {},
				i = this.getDefaults(); return this._options && t.each(this._options, function(t, r) { i[t] != r && (e[t] = r) }), e }, i.prototype.enter = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }, i.prototype.isInStateTrue = function() { for(var t in this.inState)
				if(this.inState[t]) return !0; return !1 }, i.prototype.leave = function(e) { var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); if(i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide() }, i.prototype.show = function() { var e = t.Event("show.bs." + this.type); if(this.hasContent() && this.enabled) { this.$element.trigger(e); var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if(e.isDefaultPrevented() || !r) return; var n = this,
					o = this.tip(),
					s = this.getUID(this.type);
				this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade"); var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
					l = /\s?auto?\s?/i,
					c = l.test(a);
				c && (a = a.replace(l, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var h = this.getPosition(),
					u = o[0].offsetWidth,
					f = o[0].offsetHeight; if(c) { var d = a,
						p = this.getPosition(this.$viewport);
					a = "bottom" == a && h.bottom + f > p.bottom ? "top" : "top" == a && h.top - f < p.top ? "bottom" : "right" == a && h.right + u > p.width ? "left" : "left" == a && h.left - u < p.left ? "right" : a, o.removeClass(d).addClass(a) } var g = this.getCalculatedOffset(a, h, u, f);
				this.applyPlacement(g, a); var v = function() { var t = n.hoverState;
					n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n) };
				t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v() } }, i.prototype.applyPlacement = function(e, i) { var r = this.tip(),
				n = r[0].offsetWidth,
				o = r[0].offsetHeight,
				s = parseInt(r.css("margin-top"), 10),
				a = parseInt(r.css("margin-left"), 10);
			isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(r[0], t.extend({ using: function(t) { r.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), r.addClass("in"); var l = r[0].offsetWidth,
				c = r[0].offsetHeight; "top" == i && c != o && (e.top = e.top + o - c); var h = this.getViewportAdjustedDelta(i, e, l, c);
			h.left ? e.left += h.left : e.top += h.top; var u = /top|bottom/.test(i),
				f = u ? 2 * h.left - n + l : 2 * h.top - o + c,
				d = u ? "offsetWidth" : "offsetHeight";
			r.offset(e), this.replaceArrow(f, r[0][d], u) }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, i.prototype.setContent = function() { var t = this.tip(),
				e = this.getTitle();
			t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right") }, i.prototype.hide = function(e) {
			function r() { "in" != n.hoverState && o.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e() } var n = this,
				o = t(this.$tip),
				s = t.Event("hide.bs." + this.type); if(this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), this.hoverState = null, this }, i.prototype.fixTitle = function() { var t = this.$element;
			(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, i.prototype.hasContent = function() { return this.getTitle() }, i.prototype.getPosition = function(e) { e = e || this.$element; var i = e[0],
				r = "BODY" == i.tagName,
				n = i.getBoundingClientRect();
			null == n.width && (n = t.extend({}, n, { width: n.right - n.left, height: n.bottom - n.top })); var o = window.SVGElement && i instanceof window.SVGElement,
				s = r ? { top: 0, left: 0 } : o ? null : e.offset(),
				a = { scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
				l = r ? { width: t(window).width(), height: t(window).height() } : null; return t.extend({}, n, a, l, s) }, i.prototype.getCalculatedOffset = function(t, e, i, r) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - r, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - r / 2, left: e.left - i } : { top: e.top + e.height / 2 - r / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, r) {
			var n = { top: 0, left: 0 };
			if(!this.$viewport) return n;
			var o = this.options.viewport && this.options.viewport.padding || 0,
				s = this.getPosition(this.$viewport);
			if(/right|left/.test(t)) { var a = e.top - o - s.scroll,
					l = e.top + o - s.scroll + r;
				a < s.top ? n.top = s.top - a : l > s.top + s.height && (n.top = s.top + s.height - l) } else { var c = e.left - o,
					h = e.left + o + i;
				c < s.left ? n.left = s.left - c : h > s.right && (n.left = s.left + s.width - h) }
			return n
		}, i.prototype.getTitle = function() { var t, e = this.$element,
				i = this.options; return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title) }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t)); return t }, i.prototype.tip = function() { if(!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, i.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) { var i = this;
			e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }, i.prototype.destroy = function() { var t = this;
			clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null }) };
		var r = t.fn.tooltip;
		t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() { return t.fn.tooltip = r, this }
	}(jQuery)
}, function(t, e) {+ function(t) { "use strict";

		function e() { var t = document.createElement("bootstrap"),
				e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for(var i in e)
				if(void 0 !== t.style[i]) return { end: e[i] }; return !1 } t.fn.emulateTransitionEnd = function(e) { var i = !1,
				r = this;
			t(this).one("bsTransitionEnd", function() { i = !0 }); var n = function() { i || t(r).trigger(t.support.transition.end) }; return setTimeout(n, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { if(t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }) }) }(jQuery) }, , function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(4), i(5), i(3), i(1)) }(this, function(t) { return function() { var e = t,
				i = e.lib,
				r = i.BlockCipher,
				n = e.algo,
				o = [],
				s = [],
				a = [],
				l = [],
				c = [],
				h = [],
				u = [],
				f = [],
				d = [],
				p = [];! function() { for(var t = [], e = 0; e < 256; e++) e < 128 ? t[e] = e << 1 : t[e] = e << 1 ^ 283; for(var i = 0, r = 0, e = 0; e < 256; e++) { var n = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
					n = n >>> 8 ^ 255 & n ^ 99, o[i] = n, s[n] = i; var g = t[i],
						v = t[g],
						y = t[v],
						m = 257 * t[n] ^ 16843008 * n;
					a[i] = m << 24 | m >>> 8, l[i] = m << 16 | m >>> 16, c[i] = m << 8 | m >>> 24, h[i] = m; var m = 16843009 * y ^ 65537 * v ^ 257 * g ^ 16843008 * i;
					u[n] = m << 24 | m >>> 8, f[n] = m << 16 | m >>> 16, d[n] = m << 8 | m >>> 24, p[n] = m, i ? (i = g ^ t[t[t[y ^ g]]], r ^= t[t[r]]) : i = r = 1 } }(); var g = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
				v = n.AES = r.extend({ _doReset: function() { if(!this._nRounds || this._keyPriorReset !== this._key) { for(var t = this._keyPriorReset = this._key, e = t.words, i = t.sigBytes / 4, r = this._nRounds = i + 6, n = 4 * (r + 1), s = this._keySchedule = [], a = 0; a < n; a++)
								if(a < i) s[a] = e[a];
								else { var l = s[a - 1];
									a % i ? i > 6 && a % i == 4 && (l = o[l >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & l]) : (l = l << 8 | l >>> 24, l = o[l >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & l], l ^= g[a / i | 0] << 24), s[a] = s[a - i] ^ l }
							for(var c = this._invKeySchedule = [], h = 0; h < n; h++) { var a = n - h; if(h % 4) var l = s[a];
								else var l = s[a - 4];
								h < 4 || a <= 4 ? c[h] = l : c[h] = u[o[l >>> 24]] ^ f[o[l >>> 16 & 255]] ^ d[o[l >>> 8 & 255]] ^ p[o[255 & l]] } } }, encryptBlock: function(t, e) { this._doCryptBlock(t, e, this._keySchedule, a, l, c, h, o) }, decryptBlock: function(t, e) { var i = t[e + 1];
						t[e + 1] = t[e + 3], t[e + 3] = i, this._doCryptBlock(t, e, this._invKeySchedule, u, f, d, p, s); var i = t[e + 1];
						t[e + 1] = t[e + 3], t[e + 3] = i }, _doCryptBlock: function(t, e, i, r, n, o, s, a) { for(var l = this._nRounds, c = t[e] ^ i[0], h = t[e + 1] ^ i[1], u = t[e + 2] ^ i[2], f = t[e + 3] ^ i[3], d = 4, p = 1; p < l; p++) { var g = r[c >>> 24] ^ n[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & f] ^ i[d++],
								v = r[h >>> 24] ^ n[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & c] ^ i[d++],
								y = r[u >>> 24] ^ n[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[255 & h] ^ i[d++],
								m = r[f >>> 24] ^ n[c >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & u] ^ i[d++];
							c = g, h = v, u = y, f = m } var g = (a[c >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & f]) ^ i[d++],
							v = (a[h >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & c]) ^ i[d++],
							y = (a[u >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & h]) ^ i[d++],
							m = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & u]) ^ i[d++];
						t[e] = g, t[e + 1] = v, t[e + 2] = y, t[e + 3] = m }, keySize: 8 });
			e.AES = r._createHelper(v) }(), t.AES }) }, function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function() {
			function e(t) { return t << 8 & 4278255360 | t >>> 8 & 16711935 } var i = t,
				r = i.lib,
				n = r.WordArray,
				o = i.enc;
			o.Utf16 = o.Utf16BE = { stringify: function(t) { for(var e = t.words, i = t.sigBytes, r = [], n = 0; n < i; n += 2) { var o = e[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
						r.push(String.fromCharCode(o)) } return r.join("") }, parse: function(t) { for(var e = t.length, i = [], r = 0; r < e; r++) i[r >>> 1] |= t.charCodeAt(r) << 16 - r % 2 * 16; return n.create(i, 2 * e) } }, o.Utf16LE = { stringify: function(t) { for(var i = t.words, r = t.sigBytes, n = [], o = 0; o < r; o += 2) { var s = e(i[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
						n.push(String.fromCharCode(s)) } return n.join("") }, parse: function(t) { for(var i = t.length, r = [], o = 0; o < i; o++) r[o >>> 1] |= e(t.charCodeAt(o) << 16 - o % 2 * 16); return n.create(r, 2 * i) } } }(), t.enc.Utf16 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return function(e) { var i = t,
				r = i.lib,
				n = r.CipherParams,
				o = i.enc,
				s = o.Hex,
				a = i.format;
			a.Hex = { stringify: function(t) { return t.ciphertext.toString(s) }, parse: function(t) { var e = s.parse(t); return n.create({ ciphertext: e }) } } }(), t.format.Hex }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(10), i(75), i(72), i(4), i(5), i(13), i(17), i(91), i(18), i(93), i(92), i(90), i(12), i(86), i(3), i(1), i(76), i(78), i(77), i(80), i(79), i(81), i(82), i(83), i(85), i(84), i(73), i(71), i(94), i(89), i(88), i(87)) }(this, function(t) { return t }) }, function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function() { if("function" == typeof ArrayBuffer) { var e = t,
					i = e.lib,
					r = i.WordArray,
					n = r.init,
					o = r.init = function(t) { if(t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) { for(var e = t.byteLength, i = [], r = 0; r < e; r++) i[r >>> 2] |= t[r] << 24 - r % 4 * 8;
							n.call(this, i, e) } else n.apply(this, arguments) };
				o.prototype = r } }(), t.lib.WordArray }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.mode.CFB = function() {
			function e(t, e, i, r) { var n = this._iv; if(n) { var o = n.slice(0);
					this._iv = void 0 } else var o = this._prevBlock;
				r.encryptBlock(o, 0); for(var s = 0; s < i; s++) t[e + s] ^= o[s] } var i = t.lib.BlockCipherMode.extend(); return i.Encryptor = i.extend({ processBlock: function(t, i) { var r = this._cipher,
						n = r.blockSize;
					e.call(this, t, i, n, r), this._prevBlock = t.slice(i, i + n) } }), i.Decryptor = i.extend({ processBlock: function(t, i) { var r = this._cipher,
						n = r.blockSize,
						o = t.slice(i, i + n);
					e.call(this, t, i, n, r), this._prevBlock = o } }), i }(), t.mode.CFB }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.mode.CTRGladman = function() {
			function e(t) { if(255 === (t >> 24 & 255)) { var e = t >> 16 & 255,
						i = t >> 8 & 255,
						r = 255 & t;
					255 === e ? (e = 0, 255 === i ? (i = 0, 255 === r ? r = 0 : ++r) : ++i) : ++e, t = 0, t += e << 16, t += i << 8, t += r } else t += 1 << 24; return t }

			function i(t) { return 0 === (t[0] = e(t[0])) && (t[1] = e(t[1])), t } var r = t.lib.BlockCipherMode.extend(),
				n = r.Encryptor = r.extend({ processBlock: function(t, e) { var r = this._cipher,
							n = r.blockSize,
							o = this._iv,
							s = this._counter;
						o && (s = this._counter = o.slice(0), this._iv = void 0), i(s); var a = s.slice(0);
						r.encryptBlock(a, 0); for(var l = 0; l < n; l++) t[e + l] ^= a[l] } }); return r.Decryptor = n, r }(), t.mode.CTRGladman }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.mode.CTR = function() { var e = t.lib.BlockCipherMode.extend(),
				i = e.Encryptor = e.extend({ processBlock: function(t, e) { var i = this._cipher,
							r = i.blockSize,
							n = this._iv,
							o = this._counter;
						n && (o = this._counter = n.slice(0), this._iv = void 0); var s = o.slice(0);
						i.encryptBlock(s, 0), o[r - 1] = o[r - 1] + 1 | 0; for(var a = 0; a < r; a++) t[e + a] ^= s[a] } }); return e.Decryptor = i, e }(), t.mode.CTR }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.mode.ECB = function() { var e = t.lib.BlockCipherMode.extend(); return e.Encryptor = e.extend({ processBlock: function(t, e) { this._cipher.encryptBlock(t, e) } }), e.Decryptor = e.extend({ processBlock: function(t, e) { this._cipher.decryptBlock(t, e) } }), e }(), t.mode.ECB }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.mode.OFB = function() { var e = t.lib.BlockCipherMode.extend(),
				i = e.Encryptor = e.extend({ processBlock: function(t, e) { var i = this._cipher,
							r = i.blockSize,
							n = this._iv,
							o = this._keystream;
						n && (o = this._keystream = n.slice(0), this._iv = void 0), i.encryptBlock(o, 0); for(var s = 0; s < r; s++) t[e + s] ^= o[s] } }); return e.Decryptor = i, e }(), t.mode.OFB }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.pad.AnsiX923 = { pad: function(t, e) { var i = t.sigBytes,
					r = 4 * e,
					n = r - i % r,
					o = i + n - 1;
				t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n }, unpad: function(t) { var e = 255 & t.words[t.sigBytes - 1 >>> 2];
				t.sigBytes -= e } }, t.pad.Ansix923 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.pad.Iso10126 = { pad: function(e, i) { var r = 4 * i,
					n = r - e.sigBytes % r;
				e.concat(t.lib.WordArray.random(n - 1)).concat(t.lib.WordArray.create([n << 24], 1)) }, unpad: function(t) { var e = 255 & t.words[t.sigBytes - 1 >>> 2];
				t.sigBytes -= e } }, t.pad.Iso10126 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.pad.Iso97971 = { pad: function(e, i) { e.concat(t.lib.WordArray.create([2147483648], 1)), t.pad.ZeroPadding.pad(e, i) }, unpad: function(e) { t.pad.ZeroPadding.unpad(e), e.sigBytes-- } }, t.pad.Iso97971 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.pad.NoPadding = { pad: function() {}, unpad: function() {} }, t.pad.NoPadding }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(1)) }(this, function(t) { return t.pad.ZeroPadding = { pad: function(t, e) { var i = 4 * e;
				t.clamp(), t.sigBytes += i - (t.sigBytes % i || i) }, unpad: function(t) { for(var e = t.words, i = t.sigBytes - 1; !(e[i >>> 2] >>> 24 - i % 4 * 8 & 255);) i--;
				t.sigBytes = i + 1 } }, t.pad.ZeroPadding }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(13), i(12)) }(this, function(t) { return function() { var e = t,
				i = e.lib,
				r = i.Base,
				n = i.WordArray,
				o = e.algo,
				s = o.SHA1,
				a = o.HMAC,
				l = o.PBKDF2 = r.extend({ cfg: r.extend({ keySize: 4, hasher: s, iterations: 1 }), init: function(t) { this.cfg = this.cfg.extend(t) }, compute: function(t, e) { for(var i = this.cfg, r = a.create(i.hasher, t), o = n.create(), s = n.create([1]), l = o.words, c = s.words, h = i.keySize, u = i.iterations; l.length < h;) { var f = r.update(e).finalize(s);
							r.reset(); for(var d = f.words, p = d.length, g = f, v = 1; v < u; v++) { g = r.finalize(g), r.reset(); for(var y = g.words, m = 0; m < p; m++) d[m] ^= y[m] } o.concat(f), c[0]++ } return o.sigBytes = 4 * h, o } });
			e.PBKDF2 = function(t, e, i) { return l.create(i).compute(t, e) } }(), t.PBKDF2 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(4), i(5), i(3), i(1)) }(this, function(t) { return function() {
			function e() { for(var t = this._X, e = this._C, i = 0; i < 8; i++) a[i] = e[i];
				e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0; for(var i = 0; i < 8; i++) { var r = t[i] + e[i],
						n = 65535 & r,
						o = r >>> 16,
						s = ((n * n >>> 17) + n * o >>> 15) + o * o,
						c = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
					l[i] = s ^ c } t[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, t[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, t[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, t[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, t[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, t[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, t[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, t[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0 } var i = t,
				r = i.lib,
				n = r.StreamCipher,
				o = i.algo,
				s = [],
				a = [],
				l = [],
				c = o.RabbitLegacy = n.extend({ _doReset: function() { var t = this._key.words,
							i = this.cfg.iv,
							r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
							n = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
						this._b = 0; for(var o = 0; o < 4; o++) e.call(this); for(var o = 0; o < 8; o++) n[o] ^= r[o + 4 & 7]; if(i) { var s = i.words,
								a = s[0],
								l = s[1],
								c = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
								h = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
								u = c >>> 16 | 4294901760 & h,
								f = h << 16 | 65535 & c;
							n[0] ^= c, n[1] ^= u, n[2] ^= h, n[3] ^= f, n[4] ^= c, n[5] ^= u, n[6] ^= h, n[7] ^= f; for(var o = 0; o < 4; o++) e.call(this) } }, _doProcessBlock: function(t, i) { var r = this._X;
						e.call(this), s[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, s[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, s[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, s[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16; for(var n = 0; n < 4; n++) s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[i + n] ^= s[n] }, blockSize: 4, ivSize: 2 });
			i.RabbitLegacy = n._createHelper(c) }(), t.RabbitLegacy }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(4), i(5), i(3), i(1)) }(this, function(t) { return function() {
			function e() { for(var t = this._X, e = this._C, i = 0; i < 8; i++) a[i] = e[i];
				e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0; for(var i = 0; i < 8; i++) { var r = t[i] + e[i],
						n = 65535 & r,
						o = r >>> 16,
						s = ((n * n >>> 17) + n * o >>> 15) + o * o,
						c = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
					l[i] = s ^ c } t[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, t[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, t[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, t[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, t[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, t[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, t[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, t[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0 } var i = t,
				r = i.lib,
				n = r.StreamCipher,
				o = i.algo,
				s = [],
				a = [],
				l = [],
				c = o.Rabbit = n.extend({ _doReset: function() { for(var t = this._key.words, i = this.cfg.iv, r = 0; r < 4; r++) t[r] = 16711935 & (t[r] << 8 | t[r] >>> 24) | 4278255360 & (t[r] << 24 | t[r] >>> 8); var n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16],
							o = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
						this._b = 0; for(var r = 0; r < 4; r++) e.call(this); for(var r = 0; r < 8; r++) o[r] ^= n[r + 4 & 7]; if(i) { var s = i.words,
								a = s[0],
								l = s[1],
								c = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
								h = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8),
								u = c >>> 16 | 4294901760 & h,
								f = h << 16 | 65535 & c;
							o[0] ^= c, o[1] ^= u, o[2] ^= h, o[3] ^= f, o[4] ^= c, o[5] ^= u, o[6] ^= h, o[7] ^= f; for(var r = 0; r < 4; r++) e.call(this) } }, _doProcessBlock: function(t, i) { var r = this._X;
						e.call(this), s[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, s[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, s[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, s[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16; for(var n = 0; n < 4; n++) s[n] = 16711935 & (s[n] << 8 | s[n] >>> 24) | 4278255360 & (s[n] << 24 | s[n] >>> 8), t[i + n] ^= s[n] }, blockSize: 4, ivSize: 2 });
			i.Rabbit = n._createHelper(c) }(), t.Rabbit }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(4), i(5), i(3), i(1)) }(this, function(t) { return function() {
			function e() { for(var t = this._S, e = this._i, i = this._j, r = 0, n = 0; n < 4; n++) { e = (e + 1) % 256, i = (i + t[e]) % 256; var o = t[e];
					t[e] = t[i], t[i] = o, r |= t[(t[e] + t[i]) % 256] << 24 - 8 * n } return this._i = e, this._j = i, r } var i = t,
				r = i.lib,
				n = r.StreamCipher,
				o = i.algo,
				s = o.RC4 = n.extend({ _doReset: function() { for(var t = this._key, e = t.words, i = t.sigBytes, r = this._S = [], n = 0; n < 256; n++) r[n] = n; for(var n = 0, o = 0; n < 256; n++) { var s = n % i,
								a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
							o = (o + r[n] + a) % 256; var l = r[n];
							r[n] = r[o], r[o] = l } this._i = this._j = 0 }, _doProcessBlock: function(t, i) { t[i] ^= e.call(this) }, keySize: 8, ivSize: 0 });
			i.RC4 = n._createHelper(s); var a = o.RC4Drop = s.extend({ cfg: s.cfg.extend({ drop: 192 }), _doReset: function() { s._doReset.call(this); for(var t = this.cfg.drop; t > 0; t--) e.call(this) } });
			i.RC4Drop = n._createHelper(a) }(), t.RC4 }) }, function(t, e, i) {! function(r, n) { t.exports = e = n(i(0)) }(this, function(t) { return function(e) {
			function i(t, e, i) { return t ^ e ^ i }

			function r(t, e, i) { return t & e | ~t & i }

			function n(t, e, i) { return(t | ~e) ^ i }

			function o(t, e, i) { return t & i | e & ~i }

			function s(t, e, i) { return t ^ (e | ~i) }

			function a(t, e) { return t << e | t >>> 32 - e } var l = t,
				c = l.lib,
				h = c.WordArray,
				u = c.Hasher,
				f = l.algo,
				d = h.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
				p = h.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
				g = h.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
				v = h.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
				y = h.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
				m = h.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
				x = f.RIPEMD160 = u.extend({ _doReset: function() { this._hash = h.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]) }, _doProcessBlock: function(t, e) { for(var l = 0; l < 16; l++) { var c = e + l,
								h = t[c];
							t[c] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8) } var u, f, x, b, w, _, k, C, B, T, S = this._hash.words,
							A = y.words,
							E = m.words,
							$ = d.words,
							D = p.words,
							L = g.words,
							I = v.words;
						_ = u = S[0], k = f = S[1], C = x = S[2], B = b = S[3], T = w = S[4]; for(var P, l = 0; l < 80; l += 1) P = u + t[e + $[l]] | 0, P += l < 16 ? i(f, x, b) + A[0] : l < 32 ? r(f, x, b) + A[1] : l < 48 ? n(f, x, b) + A[2] : l < 64 ? o(f, x, b) + A[3] : s(f, x, b) + A[4], P = 0 | P, P = a(P, L[l]), P = P + w | 0, u = w, w = b, b = a(x, 10), x = f, f = P, P = _ + t[e + D[l]] | 0, P += l < 16 ? s(k, C, B) + E[0] : l < 32 ? o(k, C, B) + E[1] : l < 48 ? n(k, C, B) + E[2] : l < 64 ? r(k, C, B) + E[3] : i(k, C, B) + E[4], P = 0 | P, P = a(P, I[l]), P = P + T | 0, _ = T, T = B, B = a(C, 10), C = k, k = P;
						P = S[1] + x + B | 0, S[1] = S[2] + b + T | 0, S[2] = S[3] + w + _ | 0, S[3] = S[4] + u + k | 0, S[4] = S[0] + f + C | 0, S[0] = P }, _doFinalize: function() { var t = this._data,
							e = t.words,
							i = 8 * this._nDataBytes,
							r = 8 * t.sigBytes;
						e[r >>> 5] |= 128 << 24 - r % 32, e[(r + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (e.length + 1), this._process(); for(var n = this._hash, o = n.words, s = 0; s < 5; s++) { var a = o[s];
							o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8) } return n }, clone: function() { var t = u.clone.call(this); return t._hash = this._hash.clone(), t } });
			l.RIPEMD160 = u._createHelper(x), l.HmacRIPEMD160 = u._createHmacHelper(x) }(Math), t.RIPEMD160 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(17)) }(this, function(t) { return function() { var e = t,
				i = e.lib,
				r = i.WordArray,
				n = e.algo,
				o = n.SHA256,
				s = n.SHA224 = o.extend({ _doReset: function() { this._hash = new r.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]) }, _doFinalize: function() { var t = o._doFinalize.call(this); return t.sigBytes -= 4, t } });
			e.SHA224 = o._createHelper(s), e.HmacSHA224 = o._createHmacHelper(s) }(), t.SHA224 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(10)) }(this, function(t) { return function(e) { var i = t,
				r = i.lib,
				n = r.WordArray,
				o = r.Hasher,
				s = i.x64,
				a = s.Word,
				l = i.algo,
				c = [],
				h = [],
				u = [];! function() { for(var t = 1, e = 0, i = 0; i < 24; i++) { c[t + 5 * e] = (i + 1) * (i + 2) / 2 % 64; var r = e % 5,
						n = (2 * t + 3 * e) % 5;
					t = r, e = n } for(var t = 0; t < 5; t++)
					for(var e = 0; e < 5; e++) h[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5; for(var o = 1, s = 0; s < 24; s++) { for(var l = 0, f = 0, d = 0; d < 7; d++) { if(1 & o) { var p = (1 << d) - 1;
							p < 32 ? f ^= 1 << p : l ^= 1 << p - 32 } 128 & o ? o = o << 1 ^ 113 : o <<= 1 } u[s] = a.create(l, f) } }(); var f = [];! function() { for(var t = 0; t < 25; t++) f[t] = a.create() }(); var d = l.SHA3 = o.extend({ cfg: o.cfg.extend({ outputLength: 512 }), _doReset: function() { for(var t = this._state = [], e = 0; e < 25; e++) t[e] = new a.init;
					this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32 }, _doProcessBlock: function(t, e) { for(var i = this._state, r = this.blockSize / 2, n = 0; n < r; n++) { var o = t[e + 2 * n],
							s = t[e + 2 * n + 1];
						o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8); var a = i[n];
						a.high ^= s, a.low ^= o } for(var l = 0; l < 24; l++) { for(var d = 0; d < 5; d++) { for(var p = 0, g = 0, v = 0; v < 5; v++) { var a = i[d + 5 * v];
								p ^= a.high, g ^= a.low } var y = f[d];
							y.high = p, y.low = g } for(var d = 0; d < 5; d++)
							for(var m = f[(d + 4) % 5], x = f[(d + 1) % 5], b = x.high, w = x.low, p = m.high ^ (b << 1 | w >>> 31), g = m.low ^ (w << 1 | b >>> 31), v = 0; v < 5; v++) { var a = i[d + 5 * v];
								a.high ^= p, a.low ^= g }
						for(var _ = 1; _ < 25; _++) { var a = i[_],
								k = a.high,
								C = a.low,
								B = c[_]; if(B < 32) var p = k << B | C >>> 32 - B,
								g = C << B | k >>> 32 - B;
							else var p = C << B - 32 | k >>> 64 - B,
								g = k << B - 32 | C >>> 64 - B; var T = f[h[_]];
							T.high = p, T.low = g } var S = f[0],
							A = i[0];
						S.high = A.high, S.low = A.low; for(var d = 0; d < 5; d++)
							for(var v = 0; v < 5; v++) { var _ = d + 5 * v,
									a = i[_],
									E = f[_],
									$ = f[(d + 1) % 5 + 5 * v],
									D = f[(d + 2) % 5 + 5 * v];
								a.high = E.high ^ ~$.high & D.high, a.low = E.low ^ ~$.low & D.low }
						var a = i[0],
							L = u[l];
						a.high ^= L.high, a.low ^= L.low } }, _doFinalize: function() { var t = this._data,
						i = t.words,
						r = (8 * this._nDataBytes, 8 * t.sigBytes),
						o = 32 * this.blockSize;
					i[r >>> 5] |= 1 << 24 - r % 32, i[(e.ceil((r + 1) / o) * o >>> 5) - 1] |= 128, t.sigBytes = 4 * i.length, this._process(); for(var s = this._state, a = this.cfg.outputLength / 8, l = a / 8, c = [], h = 0; h < l; h++) { var u = s[h],
							f = u.high,
							d = u.low;
						f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), c.push(d), c.push(f) } return new n.init(c, a) }, clone: function() { for(var t = o.clone.call(this), e = t._state = this._state.slice(0), i = 0; i < 25; i++) e[i] = e[i].clone(); return t } });
			i.SHA3 = o._createHelper(d), i.HmacSHA3 = o._createHmacHelper(d) }(Math), t.SHA3 }) }, function(t, e, i) {! function(r, n, o) { t.exports = e = n(i(0), i(10), i(18)) }(this, function(t) { return function() { var e = t,
				i = e.x64,
				r = i.Word,
				n = i.WordArray,
				o = e.algo,
				s = o.SHA512,
				a = o.SHA384 = s.extend({ _doReset: function() { this._hash = new n.init([new r.init(3418070365, 3238371032), new r.init(1654270250, 914150663), new r.init(2438529370, 812702999), new r.init(355462360, 4144912697), new r.init(1731405415, 4290775857), new r.init(2394180231, 1750603025), new r.init(3675008525, 1694076839), new r.init(1203062813, 3204075428)]) }, _doFinalize: function() { var t = s._doFinalize.call(this); return t.sigBytes -= 16, t } });
			e.SHA384 = s._createHelper(a), e.HmacSHA384 = s._createHmacHelper(a) }(), t.SHA384 }) }, function(t, e, i) {
	! function(r, n, o) { t.exports = e = n(i(0), i(4), i(5), i(3), i(1)) }(this, function(t) {
		return function() {
			function e(t, e) { var i = (this._lBlock >>> t ^ this._rBlock) & e;
				this._rBlock ^= i, this._lBlock ^= i << t }

			function i(t, e) { var i = (this._rBlock >>> t ^ this._lBlock) & e;
				this._lBlock ^= i, this._rBlock ^= i << t }
			var r = t,
				n = r.lib,
				o = n.WordArray,
				s = n.BlockCipher,
				a = r.algo,
				l = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
				c = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
				h = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
				u = [{ 0: 8421888, 268435456: 32768, 536870912: 8421378, 805306368: 2, 1073741824: 512, 1342177280: 8421890, 1610612736: 8389122, 1879048192: 8388608, 2147483648: 514, 2415919104: 8389120, 2684354560: 33280, 2952790016: 8421376, 3221225472: 32770, 3489660928: 8388610, 3758096384: 0, 4026531840: 33282, 134217728: 0, 402653184: 8421890, 671088640: 33282, 939524096: 32768, 1207959552: 8421888, 1476395008: 512, 1744830464: 8421378, 2013265920: 2, 2281701376: 8389120, 2550136832: 33280, 2818572288: 8421376, 3087007744: 8389122, 3355443200: 8388610, 3623878656: 32770, 3892314112: 514, 4160749568: 8388608, 1: 32768, 268435457: 2, 536870913: 8421888, 805306369: 8388608, 1073741825: 8421378, 1342177281: 33280, 1610612737: 512, 1879048193: 8389122, 2147483649: 8421890, 2415919105: 8421376, 2684354561: 8388610, 2952790017: 33282, 3221225473: 514, 3489660929: 8389120, 3758096385: 32770, 4026531841: 0, 134217729: 8421890, 402653185: 8421376, 671088641: 8388608, 939524097: 512, 1207959553: 32768, 1476395009: 8388610, 1744830465: 2, 2013265921: 33282, 2281701377: 32770, 2550136833: 8389122, 2818572289: 514, 3087007745: 8421888, 3355443201: 8389120, 3623878657: 0, 3892314113: 33280, 4160749569: 8421378 }, { 0: 1074282512, 16777216: 16384, 33554432: 524288, 50331648: 1074266128, 67108864: 1073741840, 83886080: 1074282496, 100663296: 1073758208, 117440512: 16, 134217728: 540672, 150994944: 1073758224, 167772160: 1073741824, 184549376: 540688, 201326592: 524304, 218103808: 0, 234881024: 16400, 251658240: 1074266112, 8388608: 1073758208, 25165824: 540688, 41943040: 16, 58720256: 1073758224, 75497472: 1074282512, 92274688: 1073741824, 109051904: 524288, 125829120: 1074266128, 142606336: 524304, 159383552: 0, 176160768: 16384, 192937984: 1074266112, 209715200: 1073741840, 226492416: 540672, 243269632: 1074282496, 260046848: 16400, 268435456: 0, 285212672: 1074266128, 301989888: 1073758224, 318767104: 1074282496, 335544320: 1074266112, 352321536: 16, 369098752: 540688, 385875968: 16384, 402653184: 16400, 419430400: 524288, 436207616: 524304, 452984832: 1073741840, 469762048: 540672, 486539264: 1073758208, 503316480: 1073741824, 520093696: 1074282512, 276824064: 540688, 293601280: 524288, 310378496: 1074266112, 327155712: 16384, 343932928: 1073758208, 360710144: 1074282512, 377487360: 16, 394264576: 1073741824, 411041792: 1074282496, 427819008: 1073741840, 444596224: 1073758224, 461373440: 524304, 478150656: 0, 494927872: 16400, 511705088: 1074266128, 528482304: 540672 }, { 0: 260, 1048576: 0, 2097152: 67109120, 3145728: 65796, 4194304: 65540, 5242880: 67108868, 6291456: 67174660, 7340032: 67174400, 8388608: 67108864, 9437184: 67174656, 10485760: 65792, 11534336: 67174404, 12582912: 67109124, 13631488: 65536, 14680064: 4, 15728640: 256, 524288: 67174656, 1572864: 67174404, 2621440: 0, 3670016: 67109120, 4718592: 67108868, 5767168: 65536, 6815744: 65540, 7864320: 260, 8912896: 4, 9961472: 256, 11010048: 67174400, 12058624: 65796, 13107200: 65792, 14155776: 67109124, 15204352: 67174660, 16252928: 67108864, 16777216: 67174656, 17825792: 65540, 18874368: 65536, 19922944: 67109120, 20971520: 256, 22020096: 67174660, 23068672: 67108868, 24117248: 0, 25165824: 67109124, 26214400: 67108864, 27262976: 4, 28311552: 65792, 29360128: 67174400, 30408704: 260, 31457280: 65796, 32505856: 67174404, 17301504: 67108864, 18350080: 260, 19398656: 67174656, 20447232: 0, 21495808: 65540, 22544384: 67109120, 23592960: 256, 24641536: 67174404, 25690112: 65536, 26738688: 67174660, 27787264: 65796, 28835840: 67108868, 29884416: 67109124, 30932992: 67174400, 31981568: 4, 33030144: 65792 }, { 0: 2151682048, 65536: 2147487808, 131072: 4198464, 196608: 2151677952, 262144: 0, 327680: 4198400, 393216: 2147483712, 458752: 4194368, 524288: 2147483648, 589824: 4194304, 655360: 64, 720896: 2147487744, 786432: 2151678016, 851968: 4160, 917504: 4096, 983040: 2151682112, 32768: 2147487808, 98304: 64, 163840: 2151678016, 229376: 2147487744, 294912: 4198400, 360448: 2151682112, 425984: 0, 491520: 2151677952, 557056: 4096, 622592: 2151682048, 688128: 4194304, 753664: 4160, 819200: 2147483648, 884736: 4194368, 950272: 4198464, 1015808: 2147483712, 1048576: 4194368, 1114112: 4198400, 1179648: 2147483712, 1245184: 0, 1310720: 4160, 1376256: 2151678016, 1441792: 2151682048, 1507328: 2147487808, 1572864: 2151682112, 1638400: 2147483648, 1703936: 2151677952, 1769472: 4198464, 1835008: 2147487744, 1900544: 4194304, 1966080: 64, 2031616: 4096, 1081344: 2151677952, 1146880: 2151682112, 1212416: 0, 1277952: 4198400, 1343488: 4194368, 1409024: 2147483648, 1474560: 2147487808, 1540096: 64, 1605632: 2147483712, 1671168: 4096, 1736704: 2147487744, 1802240: 2151678016, 1867776: 4160, 1933312: 2151682048, 1998848: 4194304, 2064384: 4198464 }, { 0: 128, 4096: 17039360, 8192: 262144, 12288: 536870912, 16384: 537133184, 20480: 16777344, 24576: 553648256, 28672: 262272, 32768: 16777216, 36864: 537133056, 40960: 536871040, 45056: 553910400, 49152: 553910272, 53248: 0, 57344: 17039488, 61440: 553648128, 2048: 17039488, 6144: 553648256, 10240: 128, 14336: 17039360, 18432: 262144, 22528: 537133184, 26624: 553910272, 30720: 536870912, 34816: 537133056, 38912: 0, 43008: 553910400, 47104: 16777344, 51200: 536871040, 55296: 553648128, 59392: 16777216, 63488: 262272, 65536: 262144, 69632: 128, 73728: 536870912, 77824: 553648256, 81920: 16777344, 86016: 553910272, 90112: 537133184, 94208: 16777216, 98304: 553910400, 102400: 553648128, 106496: 17039360, 110592: 537133056, 114688: 262272, 118784: 536871040, 122880: 0, 126976: 17039488, 67584: 553648256, 71680: 16777216, 75776: 17039360, 79872: 537133184, 83968: 536870912, 88064: 17039488, 92160: 128, 96256: 553910272, 100352: 262272, 104448: 553910400, 108544: 0, 112640: 553648128, 116736: 16777344, 120832: 262144, 124928: 537133056, 129024: 536871040 }, { 0: 268435464, 256: 8192, 512: 270532608, 768: 270540808, 1024: 268443648, 1280: 2097152, 1536: 2097160, 1792: 268435456, 2048: 0, 2304: 268443656, 2560: 2105344, 2816: 8, 3072: 270532616, 3328: 2105352, 3584: 8200, 3840: 270540800, 128: 270532608, 384: 270540808, 640: 8, 896: 2097152, 1152: 2105352, 1408: 268435464, 1664: 268443648, 1920: 8200, 2176: 2097160, 2432: 8192, 2688: 268443656, 2944: 270532616, 3200: 0, 3456: 270540800, 3712: 2105344, 3968: 268435456, 4096: 268443648, 4352: 270532616, 4608: 270540808, 4864: 8200, 5120: 2097152, 5376: 268435456, 5632: 268435464, 5888: 2105344, 6144: 2105352, 6400: 0, 6656: 8, 6912: 270532608, 7168: 8192, 7424: 268443656, 7680: 270540800, 7936: 2097160, 4224: 8, 4480: 2105344, 4736: 2097152, 4992: 268435464, 5248: 268443648, 5504: 8200, 5760: 270540808, 6016: 270532608, 6272: 270540800, 6528: 270532616, 6784: 8192, 7040: 2105352, 7296: 2097160, 7552: 0, 7808: 268435456, 8064: 268443656 }, { 0: 1048576, 16: 33555457, 32: 1024, 48: 1049601, 64: 34604033, 80: 0, 96: 1, 112: 34603009, 128: 33555456, 144: 1048577, 160: 33554433, 176: 34604032, 192: 34603008, 208: 1025, 224: 1049600, 240: 33554432, 8: 34603009, 24: 0, 40: 33555457, 56: 34604032, 72: 1048576, 88: 33554433, 104: 33554432, 120: 1025, 136: 1049601, 152: 33555456, 168: 34603008, 184: 1048577, 200: 1024, 216: 34604033, 232: 1, 248: 1049600, 256: 33554432, 272: 1048576, 288: 33555457, 304: 34603009, 320: 1048577, 336: 33555456, 352: 34604032, 368: 1049601, 384: 1025, 400: 34604033, 416: 1049600, 432: 1, 448: 0, 464: 34603008, 480: 33554433, 496: 1024, 264: 1049600, 280: 33555457, 296: 34603009, 312: 1, 328: 33554432, 344: 1048576, 360: 1025, 376: 34604032, 392: 33554433, 408: 34603008, 424: 0, 440: 34604033, 456: 1049601, 472: 1024, 488: 33555456, 504: 1048577 }, { 0: 134219808, 1: 131072, 2: 134217728, 3: 32, 4: 131104, 5: 134350880, 6: 134350848, 7: 2048, 8: 134348800, 9: 134219776, 10: 133120, 11: 134348832, 12: 2080, 13: 0, 14: 134217760, 15: 133152, 2147483648: 2048, 2147483649: 134350880, 2147483650: 134219808, 2147483651: 134217728, 2147483652: 134348800, 2147483653: 133120, 2147483654: 133152, 2147483655: 32, 2147483656: 134217760, 2147483657: 2080, 2147483658: 131104, 2147483659: 134350848, 2147483660: 0, 2147483661: 134348832, 2147483662: 134219776, 2147483663: 131072, 16: 133152, 17: 134350848, 18: 32, 19: 2048, 20: 134219776, 21: 134217760, 22: 134348832, 23: 131072, 24: 0, 25: 131104, 26: 134348800, 27: 134219808, 28: 134350880, 29: 133120, 30: 2080, 31: 134217728, 2147483664: 131072, 2147483665: 2048, 2147483666: 134348832, 2147483667: 133152, 2147483668: 32, 2147483669: 134348800, 2147483670: 134217728, 2147483671: 134219808, 2147483672: 134350880, 2147483673: 134217760, 2147483674: 134219776, 2147483675: 0, 2147483676: 133120, 2147483677: 2080, 2147483678: 131104, 2147483679: 134350848 }],
				f = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
				d = a.DES = s.extend({
					_doReset: function() { for(var t = this._key, e = t.words, i = [], r = 0; r < 56; r++) { var n = l[r] - 1;
							i[r] = e[n >>> 5] >>> 31 - n % 32 & 1 } for(var o = this._subKeys = [], s = 0; s < 16; s++) { for(var a = o[s] = [], u = h[s], r = 0; r < 24; r++) a[r / 6 | 0] |= i[(c[r] - 1 + u) % 28] << 31 - r % 6, a[4 + (r / 6 | 0)] |= i[28 + (c[r + 24] - 1 + u) % 28] << 31 - r % 6;
							a[0] = a[0] << 1 | a[0] >>> 31; for(var r = 1; r < 7; r++) a[r] = a[r] >>> 4 * (r - 1) + 3;
							a[7] = a[7] << 5 | a[7] >>> 27 } for(var f = this._invSubKeys = [], r = 0; r < 16; r++) f[r] = o[15 - r] },
					encryptBlock: function(t, e) { this._doCryptBlock(t, e, this._subKeys) },
					decryptBlock: function(t, e) { this._doCryptBlock(t, e, this._invSubKeys) },
					_doCryptBlock: function(t, r, n) {
						this._lBlock = t[r], this._rBlock = t[r + 1], e.call(this, 4, 252645135), e.call(this, 16, 65535), i.call(this, 2, 858993459), i.call(this, 8, 16711935), e.call(this, 1, 1431655765);
						for(var o = 0; o < 16; o++) {
							for(var s = n[o], a = this._lBlock, l = this._rBlock, c = 0, h = 0; h < 8; h++) c |= u[h][((l ^ s[h]) & f[h]) >>> 0];
							this._lBlock = l, this._rBlock = a ^ c
						}
						var d = this._lBlock;
						this._lBlock = this._rBlock, this._rBlock = d, e.call(this, 1, 1431655765), i.call(this, 8, 16711935), i.call(this, 2, 858993459), e.call(this, 16, 65535), e.call(this, 4, 252645135), t[r] = this._lBlock, t[r + 1] = this._rBlock
					},
					keySize: 2,
					ivSize: 2,
					blockSize: 2
				});
			r.DES = s._createHelper(d);
			var p = a.TripleDES = s.extend({ _doReset: function() { var t = this._key,
						e = t.words;
					this._des1 = d.createEncryptor(o.create(e.slice(0, 2))), this._des2 = d.createEncryptor(o.create(e.slice(2, 4))), this._des3 = d.createEncryptor(o.create(e.slice(4, 6))) }, encryptBlock: function(t, e) { this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e) }, decryptBlock: function(t, e) { this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e) }, keySize: 6, ivSize: 2, blockSize: 2 });
			r.TripleDES = s._createHelper(p)
		}(), t.TripleDES
	})
}, , , , , , function(t, e) {}, , , , , , , function(t, e, i) {
	! function(e, i) { t.exports = i() }(this, function() {
		return function(t) {
			function e(r) { if(i[r]) return i[r].exports; var n = i[r] = { exports: {}, id: r, loaded: !1 }; return t[r].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports } var i = {}; return e.m = t, e.c = i, e.p = "", e(0) }([function(t, e, i) { var r, n;
			r = [i(1), i(3), i(4)], n = function(t) { return t }.apply(e, r), !(void 0 !== n && (t.exports = n)) }, function(t, e, i) {
			var r, n;
			r = [i(2)], n = function(t) {
				function e(i) { if(e.is(i, "function")) return x ? i() : t.on("raphael.DOMload", i); if(e.is(i, q)) return e._engine.create[A](e, i.splice(0, 3 + e.is(i[0], U))).add(i); var r = Array.prototype.slice.call(arguments, 0); if(e.is(r[r.length - 1], "function")) { var n = r.pop(); return x ? n.call(e._engine.create[A](e, r)) : t.on("raphael.DOMload", function() { n.call(e._engine.create[A](e, r)) }) } return e._engine.create[A](e, arguments) }

				function i(t) { if("function" == typeof t || Object(t) !== t) return t; var e = new t.constructor; for(var r in t) t[C](r) && (e[r] = i(t[r])); return e }

				function r(t, e) { for(var i = 0, r = t.length; i < r; i++)
						if(t[i] === e) return t.push(t.splice(i, 1)[0]) }

				function n(t, e, i) {
					function n() { var o = Array.prototype.slice.call(arguments, 0),
							s = o.join("␀"),
							a = n.cache = n.cache || {},
							l = n.count = n.count || []; return a[C](s) ? (r(l, s), i ? i(a[s]) : a[s]) : (l.length >= 1e3 && delete a[l.shift()], l.push(s), a[s] = t[A](e, o), i ? i(a[s]) : a[s]) } return n }

				function o() { return this.hex }

				function s(t, e) { for(var i = [], r = 0, n = t.length; n - 2 * !e > r; r += 2) { var o = [{ x: +t[r - 2], y: +t[r - 1] }, { x: +t[r], y: +t[r + 1] }, { x: +t[r + 2], y: +t[r + 3] }, { x: +t[r + 4], y: +t[r + 5] }];
						e ? r ? n - 4 == r ? o[3] = { x: +t[0], y: +t[1] } : n - 2 == r && (o[2] = { x: +t[0], y: +t[1] }, o[3] = { x: +t[2], y: +t[3] }) : o[0] = { x: +t[n - 2], y: +t[n - 1] } : n - 4 == r ? o[3] = o[2] : r || (o[0] = { x: +t[r], y: +t[r + 1] }), i.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y]) } return i }

				function a(t, e, i, r, n) { var o = -3 * e + 9 * i - 9 * r + 3 * n,
						s = t * o + 6 * e - 12 * i + 6 * r; return t * s - 3 * e + 3 * i }

				function l(t, e, i, r, n, o, s, l, c) { null == c && (c = 1), c = c > 1 ? 1 : c < 0 ? 0 : c; for(var h = c / 2, u = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; g < u; g++) { var v = h * f[g] + h,
							y = a(v, t, i, n, s),
							m = a(v, e, r, o, l),
							x = y * y + m * m;
						p += d[g] * M.sqrt(x) } return h * p }

				function c(t, e, i, r, n, o, s, a, c) { if(!(c < 0 || l(t, e, i, r, n, o, s, a) < c)) { var h, u = 1,
							f = u / 2,
							d = u - f,
							p = .01; for(h = l(t, e, i, r, n, o, s, a, d); O(h - c) > p;) f /= 2, d += (h < c ? 1 : -1) * f, h = l(t, e, i, r, n, o, s, a, d); return d } }

				function h(t, e, i, r, n, o, s, a) { if(!(F(t, i) < H(n, s) || H(t, i) > F(n, s) || F(e, r) < H(o, a) || H(e, r) > F(o, a))) { var l = (t * r - e * i) * (n - s) - (t - i) * (n * a - o * s),
							c = (t * r - e * i) * (o - a) - (e - r) * (n * a - o * s),
							h = (t - i) * (o - a) - (e - r) * (n - s); if(h) { var u = l / h,
								f = c / h,
								d = +u.toFixed(2),
								p = +f.toFixed(2); if(!(d < +H(t, i).toFixed(2) || d > +F(t, i).toFixed(2) || d < +H(n, s).toFixed(2) || d > +F(n, s).toFixed(2) || p < +H(e, r).toFixed(2) || p > +F(e, r).toFixed(2) || p < +H(o, a).toFixed(2) || p > +F(o, a).toFixed(2))) return { x: u, y: f } } } }

				function u(t, i, r) { var n = e.bezierBBox(t),
						o = e.bezierBBox(i); if(!e.isBBoxIntersect(n, o)) return r ? 0 : []; for(var s = l.apply(0, t), a = l.apply(0, i), c = F(~~(s / 5), 1), u = F(~~(a / 5), 1), f = [], d = [], p = {}, g = r ? 0 : [], v = 0; v < c + 1; v++) { var y = e.findDotsAtSegment.apply(e, t.concat(v / c));
						f.push({ x: y.x, y: y.y, t: v / c }) } for(v = 0; v < u + 1; v++) y = e.findDotsAtSegment.apply(e, i.concat(v / u)), d.push({ x: y.x, y: y.y, t: v / u }); for(v = 0; v < c; v++)
						for(var m = 0; m < u; m++) { var x = f[v],
								b = f[v + 1],
								w = d[m],
								_ = d[m + 1],
								k = O(b.x - x.x) < .001 ? "y" : "x",
								C = O(_.x - w.x) < .001 ? "y" : "x",
								B = h(x.x, x.y, b.x, b.y, w.x, w.y, _.x, _.y); if(B) { if(p[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
								p[B.x.toFixed(4)] = B.y.toFixed(4); var T = x.t + O((B[k] - x[k]) / (b[k] - x[k])) * (b.t - x.t),
									S = w.t + O((B[C] - w[C]) / (_[C] - w[C])) * (_.t - w.t);
								T >= 0 && T <= 1.001 && S >= 0 && S <= 1.001 && (r ? g++ : g.push({ x: B.x, y: B.y, t1: H(T, 1), t2: H(S, 1) })) } }
					return g }

				function f(t, i, r) { t = e._path2curve(t), i = e._path2curve(i); for(var n, o, s, a, l, c, h, f, d, p, g = r ? 0 : [], v = 0, y = t.length; v < y; v++) { var m = t[v]; if("M" == m[0]) n = l = m[1], o = c = m[2];
						else { "C" == m[0] ? (d = [n, o].concat(m.slice(1)), n = d[6], o = d[7]) : (d = [n, o, n, o, l, c, l, c], n = l, o = c); for(var x = 0, b = i.length; x < b; x++) { var w = i[x]; if("M" == w[0]) s = h = w[1], a = f = w[2];
								else { "C" == w[0] ? (p = [s, a].concat(w.slice(1)), s = p[6], a = p[7]) : (p = [s, a, s, a, h, f, h, f], s = h, a = f); var _ = u(d, p, r); if(r) g += _;
									else { for(var k = 0, C = _.length; k < C; k++) _[k].segment1 = v, _[k].segment2 = x, _[k].bez1 = d, _[k].bez2 = p;
										g = g.concat(_) } } } } } return g }

				function d(t, e, i, r, n, o) { null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +r, this.e = +n, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0) }

				function p() { return this.x + L + this.y + L + this.width + " × " + this.height }

				function g(t, e, i, r, n, o) {
					function s(t) { return((u * t + h) * t + c) * t }

					function a(t, e) { var i = l(t, e); return((p * i + d) * i + f) * i }

					function l(t, e) { var i, r, n, o, a, l; for(n = t, l = 0; l < 8; l++) { if(o = s(n) - t, O(o) < e) return n; if(a = (3 * u * n + 2 * h) * n + c, O(a) < 1e-6) break;
							n -= o / a } if(i = 0, r = 1, n = t, n < i) return i; if(n > r) return r; for(; i < r;) { if(o = s(n), O(o - t) < e) return n;
							t > o ? i = n : r = n, n = (r - i) / 2 + i } return n } var c = 3 * e,
						h = 3 * (r - e) - c,
						u = 1 - c - h,
						f = 3 * i,
						d = 3 * (n - i) - f,
						p = 1 - f - d; return a(t, 1 / (200 * o)) }

				function v(t, e) { var i = [],
						r = {}; if(this.ms = e, this.times = 1, t) { for(var n in t) t[C](n) && (r[Z(n)] = t[n], i.push(Z(n)));
						i.sort(ht) } this.anim = r, this.top = i[i.length - 1], this.percents = i }

				function y(i, r, n, o, s, a) { n = Z(n); var l, c, h, u, f, p, v = i.ms,
						y = {},
						m = {},
						x = {}; if(o)
						for(_ = 0, k = oe.length; _ < k; _++) { var b = oe[_]; if(b.el.id == r.id && b.anim == i) { b.percent != n ? (oe.splice(_, 1), h = 1) : c = b, r.attr(b.totalOrigin); break } } else o = +m; for(var _ = 0, k = i.percents.length; _ < k; _++) { if(i.percents[_] == n || i.percents[_] > o * i.top) { n = i.percents[_], f = i.percents[_ - 1] || 0, v = v / i.top * (n - f), u = i.percents[_ + 1], l = i.anim[n]; break } o && r.attr(i.anim[i.percents[_]]) } if(l) { if(c) c.initstatus = o, c.start = new Date - c.ms * o;
						else { for(var B in l)
								if(l[C](B) && (it[C](B) || r.paper.customAttributes[C](B))) switch(y[B] = r.attr(B), null == y[B] && (y[B] = et[B]), m[B] = l[B], it[B]) {
									case U:
										x[B] = (m[B] - y[B]) / v; break;
									case "colour":
										y[B] = e.getRGB(y[B]); var T = e.getRGB(m[B]);
										x[B] = { r: (T.r - y[B].r) / v, g: (T.g - y[B].g) / v, b: (T.b - y[B].b) / v }; break;
									case "path":
										var S = Pt(y[B], m[B]),
											A = S[1]; for(y[B] = S[0], x[B] = [], _ = 0, k = y[B].length; _ < k; _++) { x[B][_] = [0]; for(var $ = 1, D = y[B][_].length; $ < D; $++) x[B][_][$] = (A[_][$] - y[B][_][$]) / v } break;
									case "transform":
										var L = r._,
											z = Ft(L[B], m[B]); if(z)
											for(y[B] = z.from, m[B] = z.to, x[B] = [], x[B].real = !0, _ = 0, k = y[B].length; _ < k; _++)
												for(x[B][_] = [y[B][_][0]], $ = 1, D = y[B][_].length; $ < D; $++) x[B][_][$] = (m[B][_][$] - y[B][_][$]) / v;
										else { var R = r.matrix || new d,
												N = { _: { transform: L.transform }, getBBox: function() { return r.getBBox(1) } };
											y[B] = [R.a, R.b, R.c, R.d, R.e, R.f], Nt(N, m[B]), m[B] = N._.transform, x[B] = [(N.matrix.a - R.a) / v, (N.matrix.b - R.b) / v, (N.matrix.c - R.c) / v, (N.matrix.d - R.d) / v, (N.matrix.e - R.e) / v, (N.matrix.f - R.f) / v] } break;
									case "csv":
										var M = I(l[B])[P](w),
											F = I(y[B])[P](w); if("clip-rect" == B)
											for(y[B] = F, x[B] = [], _ = F.length; _--;) x[B][_] = (M[_] - y[B][_]) / v;
										m[B] = M; break;
									default:
										for(M = [][E](l[B]), F = [][E](y[B]), x[B] = [], _ = r.paper.customAttributes[B].length; _--;) x[B][_] = ((M[_] || 0) - (F[_] || 0)) / v }
							var H = l.easing,
								O = e.easing_formulas[H]; if(!O)
								if(O = I(H).match(K), O && 5 == O.length) { var j = O;
									O = function(t) { return g(t, +j[1], +j[2], +j[3], +j[4], v) } } else O = ut; if(p = l.start || i.start || +new Date, b = { anim: i, percent: n, timestamp: p, start: p + (i.del || 0), status: 0, initstatus: o || 0, stop: !1, ms: v, easing: O, from: y, diff: x, to: m, el: r, callback: l.callback, prev: f, next: u, repeat: a || i.times, origin: r.attr(), totalOrigin: s }, oe.push(b), o && !c && !h && (b.stop = !0, b.start = new Date - v * o, 1 == oe.length)) return ae();
							h && (b.start = new Date - b.ms * o), 1 == oe.length && se(ae) } t("raphael.anim.start." + r.id, r, i) } }

				function m(t) { for(var e = 0; e < oe.length; e++) oe[e].el.paper == t && oe.splice(e--, 1) } e.version = "2.2.0", e.eve = t;
				var x, b, w = /[, ]+/,
					_ = { circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1 },
					k = /\{(\d+)\}/g,
					C = "hasOwnProperty",
					B = { doc: document, win: window },
					T = { was: Object.prototype[C].call(B.win, "Raphael"), is: B.win.Raphael },
					S = function() { this.ca = this.customAttributes = {} },
					A = "apply",
					E = "concat",
					$ = "ontouchstart" in B.win || B.win.DocumentTouch && B.doc instanceof DocumentTouch,
					D = "",
					L = " ",
					I = String,
					P = "split",
					z = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [P](L),
					R = { mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend" },
					N = I.prototype.toLowerCase,
					M = Math,
					F = M.max,
					H = M.min,
					O = M.abs,
					j = M.pow,
					W = M.PI,
					U = "number",
					X = "string",
					q = "array",
					V = Object.prototype.toString,
					G = (e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
					Y = { NaN: 1, Infinity: 1, "-Infinity": 1 },
					K = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
					Q = M.round,
					Z = parseFloat,
					J = parseInt,
					tt = I.prototype.toUpperCase,
					et = e._availableAttrs = { "arrow-end": "none", "arrow-start": "none", blur: 0, "clip-rect": "0 0 1e9 1e9", cursor: "default", cx: 0, cy: 0, fill: "#fff", "fill-opacity": 1, font: '10px "Arial"', "font-family": '"Arial"', "font-size": "10", "font-style": "normal", "font-weight": 400, gradient: 0, height: 0, href: "http://raphaeljs.com/", "letter-spacing": 0, opacity: 1, path: "M0,0", r: 0, rx: 0, ry: 0, src: "", stroke: "#000", "stroke-dasharray": "", "stroke-linecap": "butt", "stroke-linejoin": "butt", "stroke-miterlimit": 0, "stroke-opacity": 1, "stroke-width": 1, target: "_blank", "text-anchor": "middle", title: "Raphael", transform: "", width: 0, x: 0, y: 0, "class": "" },
					it = e._availableAnimAttrs = { blur: U, "clip-rect": "csv", cx: U, cy: U, fill: "colour", "fill-opacity": U, "font-size": U, height: U, opacity: U, path: "path", r: U, rx: U, ry: U, stroke: "colour", "stroke-opacity": U, "stroke-width": U, transform: "transform", width: U, x: U, y: U },
					rt = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
					nt = { hs: 1, rg: 1 },
					ot = /,?([achlmqrstvxz]),?/gi,
					st = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
					at = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
					lt = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
					ct = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
					ht = function(t, e) { return Z(t) - Z(e) },
					ut = function(t) { return t },
					ft = e._rectPath = function(t, e, i, r, n) { return n ? [
							["M", t + n, e],
							["l", i - 2 * n, 0],
							["a", n, n, 0, 0, 1, n, n],
							["l", 0, r - 2 * n],
							["a", n, n, 0, 0, 1, -n, n],
							["l", 2 * n - i, 0],
							["a", n, n, 0, 0, 1, -n, -n],
							["l", 0, 2 * n - r],
							["a", n, n, 0, 0, 1, n, -n],
							["z"]
						] : [
							["M", t, e],
							["l", i, 0],
							["l", 0, r],
							["l", -i, 0],
							["z"]
						] },
					dt = function(t, e, i, r) { return null == r && (r = i), [
							["M", t, e],
							["m", 0, -r],
							["a", i, r, 0, 1, 1, 0, 2 * r],
							["a", i, r, 0, 1, 1, 0, -2 * r],
							["z"]
						] },
					pt = e._getPath = { path: function(t) { return t.attr("path") }, circle: function(t) { var e = t.attrs; return dt(e.cx, e.cy, e.r) }, ellipse: function(t) { var e = t.attrs; return dt(e.cx, e.cy, e.rx, e.ry) }, rect: function(t) { var e = t.attrs; return ft(e.x, e.y, e.width, e.height, e.r) }, image: function(t) { var e = t.attrs; return ft(e.x, e.y, e.width, e.height) }, text: function(t) { var e = t._getBBox(); return ft(e.x, e.y, e.width, e.height) }, set: function(t) { var e = t._getBBox(); return ft(e.x, e.y, e.width, e.height) } },
					gt = e.mapPath = function(t, e) { if(!e) return t; var i, r, n, o, s, a, l; for(t = Pt(t), n = 0, s = t.length; n < s; n++)
							for(l = t[n], o = 1, a = l.length; o < a; o += 2) i = e.x(l[o], l[o + 1]), r = e.y(l[o], l[o + 1]), l[o] = i, l[o + 1] = r; return t };
				if(e._g = B, e.type = B.win.SVGAngle || B.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == e.type) { var vt, yt = B.doc.createElement("div"); if(yt.innerHTML = '<v:shape adj="1"/>', vt = yt.firstChild, vt.style.behavior = "url(#default#VML)", !vt || "object" != typeof vt.adj) return e.type = D;
					yt = null } e.svg = !(e.vml = "VML" == e.type), e._Paper = S, e.fn = b = S.prototype = e.prototype, e._id = 0, e.is = function(t, e) { return e = N.call(e), "finite" == e ? !Y[C](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || V.call(t).slice(8, -1).toLowerCase() == e }, e.angle = function(t, i, r, n, o, s) { if(null == o) { var a = t - r,
							l = i - n; return a || l ? (180 + 180 * M.atan2(-l, -a) / W + 360) % 360 : 0 } return e.angle(t, i, o, s) - e.angle(r, n, o, s) }, e.rad = function(t) { return t % 360 * W / 180 }, e.deg = function(t) { return Math.round(180 * t / W % 360 * 1e3) / 1e3 }, e.snapTo = function(t, i, r) { if(r = e.is(r, "finite") ? r : 10, e.is(t, q)) { for(var n = t.length; n--;)
							if(O(t[n] - i) <= r) return t[n] } else { t = +t; var o = i % t; if(o < r) return i - o; if(o > t - r) return i - o + t } return i }, e.createUUID = function(t, e) { return function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase() } }(/[xy]/g, function(t) { var e = 16 * M.random() | 0,
						i = "x" == t ? e : 3 & e | 8; return i.toString(16) }), e.setWindow = function(i) { t("raphael.setWindow", e, B.win, i), B.win = i, B.doc = B.win.document, e._engine.initWin && e._engine.initWin(B.win) };
				var mt = function(t) { if(e.vml) { var i, r = /^\s+|\s+$/g; try { var o = new ActiveXObject("htmlfile");
								o.write("<body>"), o.close(), i = o.body } catch(s) { i = createPopup().document.body } var a = i.createTextRange();
							mt = n(function(t) { try { i.style.color = I(t).replace(r, D); var e = a.queryCommandValue("ForeColor"); return e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16, "#" + ("000000" + e.toString(16)).slice(-6) } catch(n) { return "none" } }) } else { var l = B.doc.createElement("i");
							l.title = "Raphaël Colour Picker", l.style.display = "none", B.doc.body.appendChild(l), mt = n(function(t) { return l.style.color = t, B.doc.defaultView.getComputedStyle(l, D).getPropertyValue("color") }) } return mt(t) },
					xt = function() { return "hsb(" + [this.h, this.s, this.b] + ")" },
					bt = function() { return "hsl(" + [this.h, this.s, this.l] + ")" },
					wt = function() { return this.hex },
					_t = function(t, i, r) { if(null == i && e.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, i = t.g, t = t.r), null == i && e.is(t, X)) { var n = e.getRGB(t);
							t = n.r, i = n.g, r = n.b } return(t > 1 || i > 1 || r > 1) && (t /= 255, i /= 255, r /= 255), [t, i, r] },
					kt = function(t, i, r, n) { t *= 255, i *= 255, r *= 255; var o = { r: t, g: i, b: r, hex: e.rgb(t, i, r), toString: wt }; return e.is(n, "finite") && (o.opacity = n), o };
				e.color = function(t) { var i; return e.is(t, "object") && "h" in t && "s" in t && "b" in t ? (i = e.hsb2rgb(t), t.r = i.r, t.g = i.g, t.b = i.b, t.hex = i.hex) : e.is(t, "object") && "h" in t && "s" in t && "l" in t ? (i = e.hsl2rgb(t), t.r = i.r, t.g = i.g, t.b = i.b, t.hex = i.hex) : (e.is(t, "string") && (t = e.getRGB(t)), e.is(t, "object") && "r" in t && "g" in t && "b" in t ? (i = e.rgb2hsl(t), t.h = i.h, t.s = i.s, t.l = i.l, i = e.rgb2hsb(t), t.v = i.b) : (t = { hex: "none" }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = wt, t }, e.hsb2rgb = function(t, e, i, r) { this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, r = t.o, t = t.h), t *= 360; var n, o, s, a, l; return t = t % 360 / 60, l = i * e, a = l * (1 - O(t % 2 - 1)), n = o = s = i - l, t = ~~t, n += [l, a, 0, 0, a, l][t], o += [a, l, l, a, 0, 0][t], s += [0, 0, a, l, l, a][t], kt(n, o, s, r) }, e.hsl2rgb = function(t, e, i, r) { this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), t *= 360; var n, o, s, a, l; return t = t % 360 / 60, l = 2 * e * (i < .5 ? i : 1 - i), a = l * (1 - O(t % 2 - 1)), n = o = s = i - l / 2, t = ~~t, n += [l, a, 0, 0, a, l][t], o += [a, l, l, a, 0, 0][t], s += [0, 0, a, l, l, a][t], kt(n, o, s, r) }, e.rgb2hsb = function(t, e, i) { i = _t(t, e, i), t = i[0], e = i[1], i = i[2]; var r, n, o, s; return o = F(t, e, i), s = o - H(t, e, i), r = 0 == s ? null : o == t ? (e - i) / s : o == e ? (i - t) / s + 2 : (t - e) / s + 4, r = (r + 360) % 6 * 60 / 360, n = 0 == s ? 0 : s / o, { h: r, s: n, b: o, toString: xt } }, e.rgb2hsl = function(t, e, i) { i = _t(t, e, i), t = i[0], e = i[1], i = i[2]; var r, n, o, s, a, l; return s = F(t, e, i), a = H(t, e, i), l = s - a, r = 0 == l ? null : s == t ? (e - i) / l : s == e ? (i - t) / l + 2 : (t - e) / l + 4, r = (r + 360) % 6 * 60 / 360, o = (s + a) / 2, n = 0 == l ? 0 : o < .5 ? l / (2 * o) : l / (2 - 2 * o), { h: r, s: n, l: o, toString: bt } }, e._path2string = function() { return this.join(",").replace(ot, "$1") }, e._preload = function(t, e) { var i = B.doc.createElement("img");
					i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() { e.call(this), this.onload = null, B.doc.body.removeChild(this) }, i.onerror = function() { B.doc.body.removeChild(this) }, B.doc.body.appendChild(i), i.src = t }, e.getRGB = n(function(t) { if(!t || (t = I(t)).indexOf("-") + 1) return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: o }; if("none" == t) return { r: -1, g: -1, b: -1, hex: "none", toString: o };!(nt[C](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = mt(t)); var i, r, n, s, a, l, c = t.match(G); return c ? (c[2] && (n = J(c[2].substring(5), 16), r = J(c[2].substring(3, 5), 16), i = J(c[2].substring(1, 3), 16)), c[3] && (n = J((a = c[3].charAt(3)) + a, 16), r = J((a = c[3].charAt(2)) + a, 16), i = J((a = c[3].charAt(1)) + a, 16)), c[4] && (l = c[4][P](rt), i = Z(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), r = Z(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), n = Z(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (s = Z(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100)), c[5] ? (l = c[5][P](rt), i = Z(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), r = Z(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), n = Z(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (i /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (s = Z(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), e.hsb2rgb(i, r, n, s)) : c[6] ? (l = c[6][P](rt), i = Z(l[0]), "%" == l[0].slice(-1) && (i *= 2.55), r = Z(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), n = Z(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (i /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (s = Z(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), e.hsl2rgb(i, r, n, s)) : (c = { r: i, g: r, b: n, toString: o }, c.hex = "#" + (16777216 | n | r << 8 | i << 16).toString(16).slice(1), e.is(s, "finite") && (c.opacity = s), c)) : { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: o } }, e), e.hsb = n(function(t, i, r) { return e.hsb2rgb(t, i, r).hex }), e.hsl = n(function(t, i, r) { return e.hsl2rgb(t, i, r).hex }), e.rgb = n(function(t, e, i) {
					function r(t) { return t + .5 | 0 } return "#" + (16777216 | r(i) | r(e) << 8 | r(t) << 16).toString(16).slice(1) }), e.getColor = function(t) { var e = this.getColor.start = this.getColor.start || { h: 0, s: 1, b: t || .75 },
						i = this.hsb2rgb(e.h, e.s, e.b); return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = { h: 0, s: 1, b: e.b })), i.hex }, e.getColor.reset = function() { delete this.start }, e.parsePathString = function(t) { if(!t) return null; var i = Ct(t); if(i.arr) return Tt(i.arr); var r = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
						n = []; return e.is(t, q) && e.is(t[0], q) && (n = Tt(t)), n.length || I(t).replace(st, function(t, e, i) { var o = [],
							s = e.toLowerCase(); if(i.replace(lt, function(t, e) { e && o.push(+e) }), "m" == s && o.length > 2 && (n.push([e][E](o.splice(0, 2))), s = "l", e = "m" == e ? "l" : "L"), "r" == s) n.push([e][E](o));
						else
							for(; o.length >= r[s] && (n.push([e][E](o.splice(0, r[s]))), r[s]);); }), n.toString = e._path2string, i.arr = Tt(n), n }, e.parseTransformString = n(function(t) { if(!t) return null; var i = []; return e.is(t, q) && e.is(t[0], q) && (i = Tt(t)), i.length || I(t).replace(at, function(t, e, r) { var n = [];
						N.call(e), r.replace(lt, function(t, e) { e && n.push(+e) }), i.push([e][E](n)) }), i.toString = e._path2string, i });
				var Ct = function(t) { var e = Ct.ps = Ct.ps || {}; return e[t] ? e[t].sleep = 100 : e[t] = { sleep: 100 }, setTimeout(function() { for(var i in e) e[C](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i]) }), e[t] };
				e.findDotsAtSegment = function(t, e, i, r, n, o, s, a, l) { var c = 1 - l,
						h = j(c, 3),
						u = j(c, 2),
						f = l * l,
						d = f * l,
						p = h * t + 3 * u * l * i + 3 * c * l * l * n + d * s,
						g = h * e + 3 * u * l * r + 3 * c * l * l * o + d * a,
						v = t + 2 * l * (i - t) + f * (n - 2 * i + t),
						y = e + 2 * l * (r - e) + f * (o - 2 * r + e),
						m = i + 2 * l * (n - i) + f * (s - 2 * n + i),
						x = r + 2 * l * (o - r) + f * (a - 2 * o + r),
						b = c * t + l * i,
						w = c * e + l * r,
						_ = c * n + l * s,
						k = c * o + l * a,
						C = 90 - 180 * M.atan2(v - m, y - x) / W; return(v > m || y < x) && (C += 180), { x: p, y: g, m: { x: v, y: y }, n: { x: m, y: x }, start: { x: b, y: w }, end: { x: _, y: k }, alpha: C } }, e.bezierBBox = function(t, i, r, n, o, s, a, l) { e.is(t, "array") || (t = [t, i, r, n, o, s, a, l]); var c = It.apply(null, t); return { x: c.min.x, y: c.min.y, x2: c.max.x, y2: c.max.y, width: c.max.x - c.min.x, height: c.max.y - c.min.y } }, e.isPointInsideBBox = function(t, e, i) { return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2 }, e.isBBoxIntersect = function(t, i) { var r = e.isPointInsideBBox; return r(i, t.x, t.y) || r(i, t.x2, t.y) || r(i, t.x, t.y2) || r(i, t.x2, t.y2) || r(t, i.x, i.y) || r(t, i.x2, i.y) || r(t, i.x, i.y2) || r(t, i.x2, i.y2) || (t.x < i.x2 && t.x > i.x || i.x < t.x2 && i.x > t.x) && (t.y < i.y2 && t.y > i.y || i.y < t.y2 && i.y > t.y) }, e.pathIntersection = function(t, e) { return f(t, e) }, e.pathIntersectionNumber = function(t, e) { return f(t, e, 1) }, e.isPointInsidePath = function(t, i, r) { var n = e.pathBBox(t); return e.isPointInsideBBox(n, i, r) && f(t, [
						["M", i, r],
						["H", n.x2 + 10]
					], 1) % 2 == 1 }, e._removedFactory = function(e) { return function() { t("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e) } };
				var Bt = e.pathBBox = function(t) { var e = Ct(t); if(e.bbox) return i(e.bbox); if(!t) return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
						t = Pt(t); for(var r, n = 0, o = 0, s = [], a = [], l = 0, c = t.length; l < c; l++)
							if(r = t[l], "M" == r[0]) n = r[1], o = r[2], s.push(n), a.push(o);
							else { var h = It(n, o, r[1], r[2], r[3], r[4], r[5], r[6]);
								s = s[E](h.min.x, h.max.x), a = a[E](h.min.y, h.max.y), n = r[5], o = r[6] }
						var u = H[A](0, s),
							f = H[A](0, a),
							d = F[A](0, s),
							p = F[A](0, a),
							g = d - u,
							v = p - f,
							y = { x: u, y: f, x2: d, y2: p, width: g, height: v, cx: u + g / 2, cy: f + v / 2 }; return e.bbox = i(y), y },
					Tt = function(t) { var r = i(t); return r.toString = e._path2string, r },
					St = e._pathToRelative = function(t) { var i = Ct(t); if(i.rel) return Tt(i.rel);
						e.is(t, q) && e.is(t && t[0], q) || (t = e.parsePathString(t)); var r = [],
							n = 0,
							o = 0,
							s = 0,
							a = 0,
							l = 0; "M" == t[0][0] && (n = t[0][1], o = t[0][2], s = n, a = o, l++, r.push(["M", n, o])); for(var c = l, h = t.length; c < h; c++) { var u = r[c] = [],
								f = t[c]; if(f[0] != N.call(f[0])) switch(u[0] = N.call(f[0]), u[0]) {
								case "a":
									u[1] = f[1], u[2] = f[2], u[3] = f[3], u[4] = f[4], u[5] = f[5], u[6] = +(f[6] - n).toFixed(3), u[7] = +(f[7] - o).toFixed(3); break;
								case "v":
									u[1] = +(f[1] - o).toFixed(3); break;
								case "m":
									s = f[1], a = f[2];
								default:
									for(var d = 1, p = f.length; d < p; d++) u[d] = +(f[d] - (d % 2 ? n : o)).toFixed(3) } else { u = r[c] = [], "m" == f[0] && (s = f[1] + n, a = f[2] + o); for(var g = 0, v = f.length; g < v; g++) r[c][g] = f[g] }
							var y = r[c].length; switch(r[c][0]) {
								case "z":
									n = s, o = a; break;
								case "h":
									n += +r[c][y - 1]; break;
								case "v":
									o += +r[c][y - 1]; break;
								default:
									n += +r[c][y - 2], o += +r[c][y - 1] } } return r.toString = e._path2string, i.rel = Tt(r), r },
					At = e._pathToAbsolute = function(t) { var i = Ct(t); if(i.abs) return Tt(i.abs); if(e.is(t, q) && e.is(t && t[0], q) || (t = e.parsePathString(t)), !t || !t.length) return [
							["M", 0, 0]
						]; var r = [],
							n = 0,
							o = 0,
							a = 0,
							l = 0,
							c = 0; "M" == t[0][0] && (n = +t[0][1], o = +t[0][2], a = n, l = o, c++, r[0] = ["M", n, o]); for(var h, u, f = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), d = c, p = t.length; d < p; d++) { if(r.push(h = []), u = t[d], u[0] != tt.call(u[0])) switch(h[0] = tt.call(u[0]), h[0]) {
									case "A":
										h[1] = u[1], h[2] = u[2], h[3] = u[3], h[4] = u[4], h[5] = u[5], h[6] = +(u[6] + n), h[7] = +(u[7] + o); break;
									case "V":
										h[1] = +u[1] + o; break;
									case "H":
										h[1] = +u[1] + n; break;
									case "R":
										for(var g = [n, o][E](u.slice(1)), v = 2, y = g.length; v < y; v++) g[v] = +g[v] + n, g[++v] = +g[v] + o;
										r.pop(), r = r[E](s(g, f)); break;
									case "M":
										a = +u[1] + n, l = +u[2] + o;
									default:
										for(v = 1, y = u.length; v < y; v++) h[v] = +u[v] + (v % 2 ? n : o) } else if("R" == u[0]) g = [n, o][E](u.slice(1)), r.pop(), r = r[E](s(g, f)), h = ["R"][E](u.slice(-2));
								else
									for(var m = 0, x = u.length; m < x; m++) h[m] = u[m]; switch(h[0]) {
								case "Z":
									n = a, o = l; break;
								case "H":
									n = h[1]; break;
								case "V":
									o = h[1]; break;
								case "M":
									a = h[h.length - 2], l = h[h.length - 1];
								default:
									n = h[h.length - 2], o = h[h.length - 1] } } return r.toString = e._path2string, i.abs = Tt(r), r },
					Et = function(t, e, i, r) { return [t, e, i, r, i, r] },
					$t = function(t, e, i, r, n, o) { var s = 1 / 3,
							a = 2 / 3; return [s * t + a * i, s * e + a * r, s * n + a * i, s * o + a * r, n, o] },
					Dt = function(t, e, i, r, o, s, a, l, c, h) { var u, f = 120 * W / 180,
							d = W / 180 * (+o || 0),
							p = [],
							g = n(function(t, e, i) { var r = t * M.cos(i) - e * M.sin(i),
									n = t * M.sin(i) + e * M.cos(i); return { x: r, y: n } }); if(h) C = h[0], B = h[1], _ = h[2], k = h[3];
						else { u = g(t, e, -d), t = u.x, e = u.y, u = g(l, c, -d), l = u.x, c = u.y; var v = (M.cos(W / 180 * o), M.sin(W / 180 * o), (t - l) / 2),
								y = (e - c) / 2,
								m = v * v / (i * i) + y * y / (r * r);
							m > 1 && (m = M.sqrt(m), i = m * i, r = m * r); var x = i * i,
								b = r * r,
								w = (s == a ? -1 : 1) * M.sqrt(O((x * b - x * y * y - b * v * v) / (x * y * y + b * v * v))),
								_ = w * i * y / r + (t + l) / 2,
								k = w * -r * v / i + (e + c) / 2,
								C = M.asin(((e - k) / r).toFixed(9)),
								B = M.asin(((c - k) / r).toFixed(9));
							C = t < _ ? W - C : C, B = l < _ ? W - B : B, C < 0 && (C = 2 * W + C), B < 0 && (B = 2 * W + B), a && C > B && (C -= 2 * W), !a && B > C && (B -= 2 * W) } var T = B - C; if(O(T) > f) { var S = B,
								A = l,
								$ = c;
							B = C + f * (a && B > C ? 1 : -1), l = _ + i * M.cos(B), c = k + r * M.sin(B), p = Dt(l, c, i, r, o, 0, a, A, $, [B, S, _, k]) } T = B - C; var D = M.cos(C),
							L = M.sin(C),
							I = M.cos(B),
							z = M.sin(B),
							R = M.tan(T / 4),
							N = 4 / 3 * i * R,
							F = 4 / 3 * r * R,
							H = [t, e],
							j = [t + N * L, e - F * D],
							U = [l + N * z, c - F * I],
							X = [l, c]; if(j[0] = 2 * H[0] - j[0], j[1] = 2 * H[1] - j[1], h) return [j, U, X][E](p);
						p = [j, U, X][E](p).join()[P](","); for(var q = [], V = 0, G = p.length; V < G; V++) q[V] = V % 2 ? g(p[V - 1], p[V], d).y : g(p[V], p[V + 1], d).x; return q },
					Lt = function(t, e, i, r, n, o, s, a, l) { var c = 1 - l; return { x: j(c, 3) * t + 3 * j(c, 2) * l * i + 3 * c * l * l * n + j(l, 3) * s, y: j(c, 3) * e + 3 * j(c, 2) * l * r + 3 * c * l * l * o + j(l, 3) * a } },
					It = n(function(t, e, i, r, n, o, s, a) { var l, c = n - 2 * i + t - (s - 2 * n + i),
							h = 2 * (i - t) - 2 * (n - i),
							u = t - i,
							f = (-h + M.sqrt(h * h - 4 * c * u)) / 2 / c,
							d = (-h - M.sqrt(h * h - 4 * c * u)) / 2 / c,
							p = [e, a],
							g = [t, s]; return O(f) > "1e12" && (f = .5), O(d) > "1e12" && (d = .5), f > 0 && f < 1 && (l = Lt(t, e, i, r, n, o, s, a, f), g.push(l.x), p.push(l.y)), d > 0 && d < 1 && (l = Lt(t, e, i, r, n, o, s, a, d), g.push(l.x), p.push(l.y)), c = o - 2 * r + e - (a - 2 * o + r), h = 2 * (r - e) - 2 * (o - r), u = e - r, f = (-h + M.sqrt(h * h - 4 * c * u)) / 2 / c, d = (-h - M.sqrt(h * h - 4 * c * u)) / 2 / c, O(f) > "1e12" && (f = .5), O(d) > "1e12" && (d = .5), f > 0 && f < 1 && (l = Lt(t, e, i, r, n, o, s, a, f), g.push(l.x), p.push(l.y)), d > 0 && d < 1 && (l = Lt(t, e, i, r, n, o, s, a, d), g.push(l.x), p.push(l.y)), { min: { x: H[A](0, g), y: H[A](0, p) }, max: { x: F[A](0, g), y: F[A](0, p) } } }),
					Pt = e._path2curve = n(function(t, e) { var i = !e && Ct(t); if(!e && i.curve) return Tt(i.curve); for(var r = At(t), n = e && At(e), o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, s = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, a = (function(t, e, i) { var r, n, o = { T: 1, Q: 1 }; if(!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y]; switch(!(t[0] in o) && (e.qx = e.qy = null), t[0]) {
									case "M":
										e.X = t[1], e.Y = t[2]; break;
									case "A":
										t = ["C"][E](Dt[A](0, [e.x, e.y][E](t.slice(1)))); break;
									case "S":
										"C" == i || "S" == i ? (r = 2 * e.x - e.bx, n = 2 * e.y - e.by) : (r = e.x, n = e.y), t = ["C", r, n][E](t.slice(1)); break;
									case "T":
										"Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][E]($t(e.x, e.y, e.qx, e.qy, t[1], t[2])); break;
									case "Q":
										e.qx = t[1], e.qy = t[2], t = ["C"][E]($t(e.x, e.y, t[1], t[2], t[3], t[4])); break;
									case "L":
										t = ["C"][E](Et(e.x, e.y, t[1], t[2])); break;
									case "H":
										t = ["C"][E](Et(e.x, e.y, t[1], e.y)); break;
									case "V":
										t = ["C"][E](Et(e.x, e.y, e.x, t[1])); break;
									case "Z":
										t = ["C"][E](Et(e.x, e.y, e.X, e.Y)) } return t }), l = function(t, e) { if(t[e].length > 7) { t[e].shift(); for(var i = t[e]; i.length;) h[e] = "A", n && (u[e] = "A"), t.splice(e++, 0, ["C"][E](i.splice(0, 6)));
									t.splice(e, 1), g = F(r.length, n && n.length || 0) } }, c = function(t, e, i, o, s) { t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", o.x, o.y]), i.bx = 0, i.by = 0, i.x = t[s][1], i.y = t[s][2], g = F(r.length, n && n.length || 0)) }, h = [], u = [], f = "", d = "", p = 0, g = F(r.length, n && n.length || 0); p < g; p++) { r[p] && (f = r[p][0]), "C" != f && (h[p] = f, p && (d = h[p - 1])), r[p] = a(r[p], o, d), "A" != h[p] && "C" == f && (h[p] = "C"), l(r, p), n && (n[p] && (f = n[p][0]), "C" != f && (u[p] = f, p && (d = u[p - 1])), n[p] = a(n[p], s, d), "A" != u[p] && "C" == f && (u[p] = "C"), l(n, p)), c(r, n, o, s, p), c(n, r, s, o, p); var v = r[p],
								y = n && n[p],
								m = v.length,
								x = n && y.length;
							o.x = v[m - 2], o.y = v[m - 1], o.bx = Z(v[m - 4]) || o.x, o.by = Z(v[m - 3]) || o.y, s.bx = n && (Z(y[x - 4]) || s.x), s.by = n && (Z(y[x - 3]) || s.y), s.x = n && y[x - 2], s.y = n && y[x - 1] } return n || (i.curve = Tt(r)), n ? [r, n] : r }, null, Tt),
					zt = (e._parseDots = n(function(t) { for(var i = [], r = 0, n = t.length; r < n; r++) { var o = {},
								s = t[r].match(/^([^:]*):?([\d\.]*)/); if(o.color = e.getRGB(s[1]), o.color.error) return null;
							o.opacity = o.color.opacity, o.color = o.color.hex, s[2] && (o.offset = s[2] + "%"), i.push(o) } for(r = 1, n = i.length - 1; r < n; r++)
							if(!i[r].offset) { for(var a = Z(i[r - 1].offset || 0), l = 0, c = r + 1; c < n; c++)
									if(i[c].offset) { l = i[c].offset; break }
								l || (l = 100, c = n), l = Z(l); for(var h = (l - a) / (c - r + 1); r < c; r++) a += h, i[r].offset = a + "%" }
						return i }), e._tear = function(t, e) { t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next) }),
					Rt = (e._tofront = function(t, e) { e.top !== t && (zt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t) }, e._toback = function(t, e) { e.bottom !== t && (zt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t) }, e._insertafter = function(t, e, i) { zt(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t }, e._insertbefore = function(t, e, i) { zt(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e }, e.toMatrix = function(t, e) { var i = Bt(t),
							r = { _: { transform: D }, getBBox: function() { return i } }; return Nt(r, e), r.matrix }),
					Nt = (e.transformPath = function(t, e) { return gt(t, Rt(t, e)) }, e._extractTransform = function(t, i) { if(null == i) return t._.transform;
						i = I(i).replace(/\.{3}|\u2026/g, t._.transform || D); var r = e.parseTransformString(i),
							n = 0,
							o = 0,
							s = 0,
							a = 1,
							l = 1,
							c = t._,
							h = new d; if(c.transform = r || [], r)
							for(var u = 0, f = r.length; u < f; u++) { var p, g, v, y, m, x = r[u],
									b = x.length,
									w = I(x[0]).toLowerCase(),
									_ = x[0] != w,
									k = _ ? h.invert() : 0; "t" == w && 3 == b ? _ ? (p = k.x(0, 0), g = k.y(0, 0), v = k.x(x[1], x[2]), y = k.y(x[1], x[2]), h.translate(v - p, y - g)) : h.translate(x[1], x[2]) : "r" == w ? 2 == b ? (m = m || t.getBBox(1), h.rotate(x[1], m.x + m.width / 2, m.y + m.height / 2), n += x[1]) : 4 == b && (_ ? (v = k.x(x[2], x[3]), y = k.y(x[2], x[3]), h.rotate(x[1], v, y)) : h.rotate(x[1], x[2], x[3]), n += x[1]) : "s" == w ? 2 == b || 3 == b ? (m = m || t.getBBox(1), h.scale(x[1], x[b - 1], m.x + m.width / 2, m.y + m.height / 2), a *= x[1], l *= x[b - 1]) : 5 == b && (_ ? (v = k.x(x[3], x[4]), y = k.y(x[3], x[4]), h.scale(x[1], x[2], v, y)) : h.scale(x[1], x[2], x[3], x[4]), a *= x[1], l *= x[2]) : "m" == w && 7 == b && h.add(x[1], x[2], x[3], x[4], x[5], x[6]), c.dirtyT = 1, t.matrix = h } t.matrix = h, c.sx = a, c.sy = l, c.deg = n, c.dx = o = h.e, c.dy = s = h.f, 1 == a && 1 == l && !n && c.bbox ? (c.bbox.x += +o, c.bbox.y += +s) : c.dirtyT = 1 }),
					Mt = function(t) { var e = t[0]; switch(e.toLowerCase()) {
							case "t":
								return [e, 0, 0];
							case "m":
								return [e, 1, 0, 0, 1, 0, 0];
							case "r":
								return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
							case "s":
								return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1] } },
					Ft = e._equaliseTransform = function(t, i) { i = I(i).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], i = e.parseTransformString(i) || []; for(var r, n, o, s, a = F(t.length, i.length), l = [], c = [], h = 0; h < a; h++) { if(o = t[h] || Mt(i[h]), s = i[h] || Mt(o), o[0] != s[0] || "r" == o[0].toLowerCase() && (o[2] != s[2] || o[3] != s[3]) || "s" == o[0].toLowerCase() && (o[3] != s[3] || o[4] != s[4])) return; for(l[h] = [], c[h] = [], r = 0, n = F(o.length, s.length); r < n; r++) r in o && (l[h][r] = o[r]), r in s && (c[h][r] = s[r]) } return { from: l, to: c } };
				e._getContainer = function(t, i, r, n) { var o; if(o = null != n || e.is(t, "object") ? t : B.doc.getElementById(t), null != o) return o.tagName ? null == i ? { container: o, width: o.style.pixelWidth || o.offsetWidth, height: o.style.pixelHeight || o.offsetHeight } : { container: o, width: i, height: r } : { container: 1, x: t, y: i, width: r, height: n } }, e.pathToRelative = St, e._engine = {}, e.path2curve = Pt, e.matrix = function(t, e, i, r, n, o) { return new d(t, e, i, r, n, o) },
					function(t) {
						function i(t) { return t[0] * t[0] + t[1] * t[1] }

						function r(t) { var e = M.sqrt(i(t));
							t[0] && (t[0] /= e), t[1] && (t[1] /= e) } t.add = function(t, e, i, r, n, o) {
							var s, a, l, c, h = [
									[],
									[],
									[]
								],
								u = [
									[this.a, this.c, this.e],
									[this.b, this.d, this.f],
									[0, 0, 1]
								],
								f = [
									[t, i, n],
									[e, r, o],
									[0, 0, 1]
								];
							for(t && t instanceof d && (f = [
									[t.a, t.c, t.e],
									[t.b, t.d, t.f],
									[0, 0, 1]
								]), s = 0; s < 3; s++)
								for(a = 0; a < 3; a++) { for(c = 0, l = 0; l < 3; l++) c += u[s][l] * f[l][a];
									h[s][a] = c } this.a = h[0][0], this.b = h[1][0], this.c = h[0][1], this.d = h[1][1], this.e = h[0][2],
								this.f = h[1][2]
						}, t.invert = function() { var t = this,
								e = t.a * t.d - t.b * t.c; return new d(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e) }, t.clone = function() { return new d(this.a, this.b, this.c, this.d, this.e, this.f) }, t.translate = function(t, e) { this.add(1, 0, 0, 1, t, e) }, t.scale = function(t, e, i, r) { null == e && (e = t), (i || r) && this.add(1, 0, 0, 1, i, r), this.add(t, 0, 0, e, 0, 0), (i || r) && this.add(1, 0, 0, 1, -i, -r) }, t.rotate = function(t, i, r) { t = e.rad(t), i = i || 0, r = r || 0; var n = +M.cos(t).toFixed(9),
								o = +M.sin(t).toFixed(9);
							this.add(n, o, -o, n, i, r), this.add(1, 0, 0, 1, -i, -r) }, t.x = function(t, e) { return t * this.a + e * this.c + this.e }, t.y = function(t, e) { return t * this.b + e * this.d + this.f }, t.get = function(t) { return +this[I.fromCharCode(97 + t)].toFixed(4) }, t.toString = function() { return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join() }, t.toFilter = function() { return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')" }, t.offset = function() { return [this.e.toFixed(4), this.f.toFixed(4)] }, t.split = function() { var t = {};
							t.dx = this.e, t.dy = this.f; var n = [
								[this.a, this.c],
								[this.b, this.d]
							];
							t.scalex = M.sqrt(i(n[0])), r(n[0]), t.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * t.shear, n[1][1] - n[0][1] * t.shear], t.scaley = M.sqrt(i(n[1])), r(n[1]), t.shear /= t.scaley; var o = -n[0][1],
								s = n[1][1]; return s < 0 ? (t.rotate = e.deg(M.acos(s)), o < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(M.asin(o)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t }, t.toTransformString = function(t) { var e = t || this[P](); return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : D) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : D) + (e.rotate ? "r" + [e.rotate, 0, 0] : D)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] }
					}(d.prototype);
				for(var Ht = function() { this.returnValue = !1 }, Ot = function() { return this.originalEvent.preventDefault() }, jt = function() { this.cancelBubble = !0 }, Wt = function() { return this.originalEvent.stopPropagation() }, Ut = function(t) { var e = B.doc.documentElement.scrollTop || B.doc.body.scrollTop,
							i = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft; return { x: t.clientX + i, y: t.clientY + e } }, Xt = function() { return B.doc.addEventListener ? function(t, e, i, r) { var n = function(t) { var e = Ut(t); return i.call(r, t, e.x, e.y) }; if(t.addEventListener(e, n, !1), $ && R[e]) { var o = function(e) { for(var n = Ut(e), o = e, s = 0, a = e.targetTouches && e.targetTouches.length; s < a; s++)
										if(e.targetTouches[s].target == t) { e = e.targetTouches[s], e.originalEvent = o, e.preventDefault = Ot, e.stopPropagation = Wt; break }
									return i.call(r, e, n.x, n.y) };
								t.addEventListener(R[e], o, !1) } return function() { return t.removeEventListener(e, n, !1), $ && R[e] && t.removeEventListener(R[e], o, !1), !0 } } : B.doc.attachEvent ? function(t, e, i, r) { var n = function(t) { t = t || B.win.event; var e = B.doc.documentElement.scrollTop || B.doc.body.scrollTop,
									n = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft,
									o = t.clientX + n,
									s = t.clientY + e; return t.preventDefault = t.preventDefault || Ht, t.stopPropagation = t.stopPropagation || jt, i.call(r, t, o, s) };
							t.attachEvent("on" + e, n); var o = function() { return t.detachEvent("on" + e, n), !0 }; return o } : void 0 }(), qt = [], Vt = function(e) { for(var i, r = e.clientX, n = e.clientY, o = B.doc.documentElement.scrollTop || B.doc.body.scrollTop, s = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft, a = qt.length; a--;) { if(i = qt[a], $ && e.touches) { for(var l, c = e.touches.length; c--;)
									if(l = e.touches[c], l.identifier == i.el._drag.id) { r = l.clientX, n = l.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault(); break } } else e.preventDefault(); var h, u = i.el.node,
								f = u.nextSibling,
								d = u.parentNode,
								p = u.style.display;
							B.win.opera && d.removeChild(u), u.style.display = "none", h = i.el.paper.getElementByPoint(r, n), u.style.display = p, B.win.opera && (f ? d.insertBefore(u, f) : d.appendChild(u)), h && t("raphael.drag.over." + i.el.id, i.el, h), r += s, n += o, t("raphael.drag.move." + i.el.id, i.move_scope || i.el, r - i.el._drag.x, n - i.el._drag.y, r, n, e) } }, Gt = function(i) { e.unmousemove(Vt).unmouseup(Gt); for(var r, n = qt.length; n--;) r = qt[n], r.el._drag = {}, t("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, i);
						qt = [] }, Yt = e.el = {}, Kt = z.length; Kt--;) ! function(t) { e[t] = Yt[t] = function(i, r) { return e.is(i, "function") && (this.events = this.events || [], this.events.push({ name: t, f: i, unbind: Xt(this.shape || this.node || B.doc, t, i, r || this) })), this }, e["un" + t] = Yt["un" + t] = function(i) { for(var r = this.events || [], n = r.length; n--;) r[n].name != t || !e.is(i, "undefined") && r[n].f != i || (r[n].unbind(), r.splice(n, 1), !r.length && delete this.events); return this } }(z[Kt]);
				Yt.data = function(i, r) { var n = ct[this.id] = ct[this.id] || {}; if(0 == arguments.length) return n; if(1 == arguments.length) { if(e.is(i, "object")) { for(var o in i) i[C](o) && this.data(o, i[o]); return this } return t("raphael.data.get." + this.id, this, n[i], i), n[i] } return n[i] = r, t("raphael.data.set." + this.id, this, r, i), this }, Yt.removeData = function(t) { return null == t ? ct[this.id] = {} : ct[this.id] && delete ct[this.id][t], this }, Yt.getData = function() { return i(ct[this.id] || {}) }, Yt.hover = function(t, e, i, r) { return this.mouseover(t, i).mouseout(e, r || i) }, Yt.unhover = function(t, e) { return this.unmouseover(t).unmouseout(e) };
				var Qt = [];
				Yt.drag = function(i, r, n, o, s, a) {
					function l(l) {
						(l.originalEvent || l).preventDefault(); var c = l.clientX,
							h = l.clientY,
							u = B.doc.documentElement.scrollTop || B.doc.body.scrollTop,
							f = B.doc.documentElement.scrollLeft || B.doc.body.scrollLeft; if(this._drag.id = l.identifier, $ && l.touches)
							for(var d, p = l.touches.length; p--;)
								if(d = l.touches[p], this._drag.id = d.identifier, d.identifier == this._drag.id) { c = d.clientX, h = d.clientY; break }
						this._drag.x = c + f, this._drag.y = h + u, !qt.length && e.mousemove(Vt).mouseup(Gt), qt.push({ el: this, move_scope: o, start_scope: s, end_scope: a }), r && t.on("raphael.drag.start." + this.id, r), i && t.on("raphael.drag.move." + this.id, i), n && t.on("raphael.drag.end." + this.id, n), t("raphael.drag.start." + this.id, s || o || this, l.clientX + f, l.clientY + u, l) } return this._drag = {}, Qt.push({ el: this, start: l }), this.mousedown(l), this }, Yt.onDragOver = function(e) { e ? t.on("raphael.drag.over." + this.id, e) : t.unbind("raphael.drag.over." + this.id) }, Yt.undrag = function() { for(var i = Qt.length; i--;) Qt[i].el == this && (this.unmousedown(Qt[i].start), Qt.splice(i, 1), t.unbind("raphael.drag.*." + this.id));!Qt.length && e.unmousemove(Vt).unmouseup(Gt), qt = [] }, b.circle = function(t, i, r) { var n = e._engine.circle(this, t || 0, i || 0, r || 0); return this.__set__ && this.__set__.push(n), n }, b.rect = function(t, i, r, n, o) { var s = e._engine.rect(this, t || 0, i || 0, r || 0, n || 0, o || 0); return this.__set__ && this.__set__.push(s), s }, b.ellipse = function(t, i, r, n) { var o = e._engine.ellipse(this, t || 0, i || 0, r || 0, n || 0); return this.__set__ && this.__set__.push(o), o }, b.path = function(t) { t && !e.is(t, X) && !e.is(t[0], q) && (t += D); var i = e._engine.path(e.format[A](e, arguments), this); return this.__set__ && this.__set__.push(i), i }, b.image = function(t, i, r, n, o) { var s = e._engine.image(this, t || "about:blank", i || 0, r || 0, n || 0, o || 0); return this.__set__ && this.__set__.push(s), s }, b.text = function(t, i, r) { var n = e._engine.text(this, t || 0, i || 0, I(r)); return this.__set__ && this.__set__.push(n), n }, b.set = function(t) {!e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length)); var i = new ce(t); return this.__set__ && this.__set__.push(i), i.paper = this, i.type = "set", i }, b.setStart = function(t) { this.__set__ = t || this.set() }, b.setFinish = function(t) { var e = this.__set__; return delete this.__set__, e }, b.getSize = function() { var t = this.canvas.parentNode; return { width: t.offsetWidth, height: t.offsetHeight } }, b.setSize = function(t, i) { return e._engine.setSize.call(this, t, i) }, b.setViewBox = function(t, i, r, n, o) { return e._engine.setViewBox.call(this, t, i, r, n, o) }, b.top = b.bottom = null, b.raphael = e;
				var Zt = function(t) { var e = t.getBoundingClientRect(),
						i = t.ownerDocument,
						r = i.body,
						n = i.documentElement,
						o = n.clientTop || r.clientTop || 0,
						s = n.clientLeft || r.clientLeft || 0,
						a = e.top + (B.win.pageYOffset || n.scrollTop || r.scrollTop) - o,
						l = e.left + (B.win.pageXOffset || n.scrollLeft || r.scrollLeft) - s; return { y: a, x: l } };
				b.getElementByPoint = function(t, e) { var i = this,
						r = i.canvas,
						n = B.doc.elementFromPoint(t, e); if(B.win.opera && "svg" == n.tagName) { var o = Zt(r),
							s = r.createSVGRect();
						s.x = t - o.x, s.y = e - o.y, s.width = s.height = 1; var a = r.getIntersectionList(s, null);
						a.length && (n = a[a.length - 1]) } if(!n) return null; for(; n.parentNode && n != r.parentNode && !n.raphael;) n = n.parentNode; return n == i.canvas.parentNode && (n = r), n = n && n.raphael ? i.getById(n.raphaelid) : null }, b.getElementsByBBox = function(t) { var i = this.set(); return this.forEach(function(r) { e.isBBoxIntersect(r.getBBox(), t) && i.push(r) }), i }, b.getById = function(t) { for(var e = this.bottom; e;) { if(e.id == t) return e;
						e = e.next } return null }, b.forEach = function(t, e) { for(var i = this.bottom; i;) { if(t.call(e, i) === !1) return this;
						i = i.next } return this }, b.getElementsByPoint = function(t, e) { var i = this.set(); return this.forEach(function(r) { r.isPointInside(t, e) && i.push(r) }), i }, Yt.isPointInside = function(t, i) { var r = this.realPath = pt[this.type](this); return this.attr("transform") && this.attr("transform").length && (r = e.transformPath(r, this.attr("transform"))), e.isPointInsidePath(r, t, i) }, Yt.getBBox = function(t) { if(this.removed) return {}; var e = this._; return t ? (!e.dirty && e.bboxwt || (this.realPath = pt[this.type](this), e.bboxwt = Bt(this.realPath), e.bboxwt.toString = p, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0, this.realPath = pt[this.type](this)), e.bbox = Bt(gt(this.realPath, this.matrix)), e.bbox.toString = p, e.dirty = e.dirtyT = 0), e.bbox) }, Yt.clone = function() { if(this.removed) return null; var t = this.paper[this.type]().attr(this.attr()); return this.__set__ && this.__set__.push(t), t }, Yt.glow = function(t) { if("text" == this.type) return null;
					t = t || {}; var e = { width: (t.width || 10) + (+this.attr("stroke-width") || 1), fill: t.fill || !1, opacity: null == t.opacity ? .5 : t.opacity, offsetx: t.offsetx || 0, offsety: t.offsety || 0, color: t.color || "#000" },
						i = e.width / 2,
						r = this.paper,
						n = r.set(),
						o = this.realPath || pt[this.type](this);
					o = this.matrix ? gt(o, this.matrix) : o; for(var s = 1; s < i + 1; s++) n.push(r.path(o).attr({ stroke: e.color, fill: e.fill ? e.color : "none", "stroke-linejoin": "round", "stroke-linecap": "round", "stroke-width": +(e.width / i * s).toFixed(3), opacity: +(e.opacity / i).toFixed(3) })); return n.insertBefore(this).translate(e.offsetx, e.offsety) };
				var Jt = function(t, i, r, n, o, s, a, h, u) { return null == u ? l(t, i, r, n, o, s, a, h) : e.findDotsAtSegment(t, i, r, n, o, s, a, h, c(t, i, r, n, o, s, a, h, u)) },
					te = function(t, i) { return function(r, n, o) { r = Pt(r); for(var s, a, l, c, h, u = "", f = {}, d = 0, p = 0, g = r.length; p < g; p++) { if(l = r[p], "M" == l[0]) s = +l[1], a = +l[2];
								else { if(c = Jt(s, a, l[1], l[2], l[3], l[4], l[5], l[6]), d + c > n) { if(i && !f.start) { if(h = Jt(s, a, l[1], l[2], l[3], l[4], l[5], l[6], n - d), u += ["C" + h.start.x, h.start.y, h.m.x, h.m.y, h.x, h.y], o) return u;
											f.start = u, u = ["M" + h.x, h.y + "C" + h.n.x, h.n.y, h.end.x, h.end.y, l[5], l[6]].join(), d += c, s = +l[5], a = +l[6]; continue } if(!t && !i) return h = Jt(s, a, l[1], l[2], l[3], l[4], l[5], l[6], n - d), { x: h.x, y: h.y, alpha: h.alpha } } d += c, s = +l[5], a = +l[6] } u += l.shift() + l } return f.end = u, h = t ? d : i ? f : e.findDotsAtSegment(s, a, l[0], l[1], l[2], l[3], l[4], l[5], 1), h.alpha && (h = { x: h.x, y: h.y, alpha: h.alpha }), h } },
					ee = te(1),
					ie = te(),
					re = te(0, 1);
				e.getTotalLength = ee, e.getPointAtLength = ie, e.getSubpath = function(t, e, i) { if(this.getTotalLength(t) - i < 1e-6) return re(t, e).end; var r = re(t, i, 1); return e ? re(r, e).end : r }, Yt.getTotalLength = function() { var t = this.getPath(); if(t) return this.node.getTotalLength ? this.node.getTotalLength() : ee(t) }, Yt.getPointAtLength = function(t) { var e = this.getPath(); if(e) return ie(e, t) }, Yt.getPath = function() { var t, i = e._getPath[this.type]; if("text" != this.type && "set" != this.type) return i && (t = i(this)), t }, Yt.getSubpath = function(t, i) { var r = this.getPath(); if(r) return e.getSubpath(r, t, i) };
				var ne = e.easing_formulas = { linear: function(t) { return t }, "<": function(t) { return j(t, 1.7) }, ">": function(t) { return j(t, .48) }, "<>": function(t) { var e = .48 - t / 1.04,
							i = M.sqrt(.1734 + e * e),
							r = i - e,
							n = j(O(r), 1 / 3) * (r < 0 ? -1 : 1),
							o = -i - e,
							s = j(O(o), 1 / 3) * (o < 0 ? -1 : 1),
							a = n + s + .5; return 3 * (1 - a) * a * a + a * a * a }, backIn: function(t) { var e = 1.70158; return t * t * ((e + 1) * t - e) }, backOut: function(t) { t -= 1; var e = 1.70158; return t * t * ((e + 1) * t + e) + 1 }, elastic: function(t) { return t == !!t ? t : j(2, -10 * t) * M.sin((t - .075) * (2 * W) / .3) + 1 }, bounce: function(t) { var e, i = 7.5625,
							r = 2.75; return t < 1 / r ? e = i * t * t : t < 2 / r ? (t -= 1.5 / r, e = i * t * t + .75) : t < 2.5 / r ? (t -= 2.25 / r, e = i * t * t + .9375) : (t -= 2.625 / r, e = i * t * t + .984375), e } };
				ne.easeIn = ne["ease-in"] = ne["<"], ne.easeOut = ne["ease-out"] = ne[">"], ne.easeInOut = ne["ease-in-out"] = ne["<>"], ne["back-in"] = ne.backIn, ne["back-out"] = ne.backOut;
				var oe = [],
					se = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { setTimeout(t, 16) },
					ae = function() { for(var i = +new Date, r = 0; r < oe.length; r++) { var n = oe[r]; if(!n.el.removed && !n.paused) { var o, s, a = i - n.start,
									l = n.ms,
									c = n.easing,
									h = n.from,
									u = n.diff,
									f = n.to,
									d = (n.t, n.el),
									p = {},
									g = {}; if(n.initstatus ? (a = (n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev) * l, n.status = n.initstatus, delete n.initstatus, n.stop && oe.splice(r--, 1)) : n.status = (n.prev + (n.percent - n.prev) * (a / l)) / n.anim.top, !(a < 0))
									if(a < l) { var v = c(a / l); for(var m in h)
											if(h[C](m)) { switch(it[m]) {
													case U:
														o = +h[m] + v * l * u[m]; break;
													case "colour":
														o = "rgb(" + [le(Q(h[m].r + v * l * u[m].r)), le(Q(h[m].g + v * l * u[m].g)), le(Q(h[m].b + v * l * u[m].b))].join(",") + ")"; break;
													case "path":
														o = []; for(var x = 0, b = h[m].length; x < b; x++) { o[x] = [h[m][x][0]]; for(var w = 1, _ = h[m][x].length; w < _; w++) o[x][w] = +h[m][x][w] + v * l * u[m][x][w];
															o[x] = o[x].join(L) } o = o.join(L); break;
													case "transform":
														if(u[m].real)
															for(o = [], x = 0, b = h[m].length; x < b; x++)
																for(o[x] = [h[m][x][0]], w = 1, _ = h[m][x].length; w < _; w++) o[x][w] = h[m][x][w] + v * l * u[m][x][w];
														else { var k = function(t) { return +h[m][t] + v * l * u[m][t] };
															o = [
																["m", k(0), k(1), k(2), k(3), k(4), k(5)]
															] } break;
													case "csv":
														if("clip-rect" == m)
															for(o = [], x = 4; x--;) o[x] = +h[m][x] + v * l * u[m][x]; break;
													default:
														var B = [][E](h[m]); for(o = [], x = d.paper.customAttributes[m].length; x--;) o[x] = +B[x] + v * l * u[m][x] } p[m] = o }
										d.attr(p),
											function(e, i, r) { setTimeout(function() { t("raphael.anim.frame." + e, i, r) }) }(d.id, d, n.anim) } else { if(function(i, r, n) { setTimeout(function() { t("raphael.anim.frame." + r.id, r, n), t("raphael.anim.finish." + r.id, r, n), e.is(i, "function") && i.call(r) }) }(n.callback, d, n.anim), d.attr(f), oe.splice(r--, 1), n.repeat > 1 && !n.next) { for(s in f) f[C](s) && (g[s] = n.totalOrigin[s]);
											n.el.attr(g), y(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1) } n.next && !n.stop && y(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat) } } } oe.length && se(ae) },
					le = function(t) { return t > 255 ? 255 : t < 0 ? 0 : t };
				Yt.animateWith = function(t, i, r, n, o, s) { var a = this; if(a.removed) return s && s.call(a), a; var l = r instanceof v ? r : e.animation(r, n, o, s);
					y(l, a, l.percents[0], null, a.attr()); for(var c = 0, h = oe.length; c < h; c++)
						if(oe[c].anim == i && oe[c].el == t) { oe[h - 1].start = oe[c].start; break }
					return a }, Yt.onAnimation = function(e) { return e ? t.on("raphael.anim.frame." + this.id, e) : t.unbind("raphael.anim.frame." + this.id), this }, v.prototype.delay = function(t) { var e = new v(this.anim, this.ms); return e.times = this.times, e.del = +t || 0, e }, v.prototype.repeat = function(t) { var e = new v(this.anim, this.ms); return e.del = this.del, e.times = M.floor(F(t, 0)) || 1, e }, e.animation = function(t, i, r, n) { if(t instanceof v) return t;!e.is(r, "function") && r || (n = n || r || null, r = null), t = Object(t), i = +i || 0; var o, s, a = {}; for(s in t) t[C](s) && Z(s) != s && Z(s) + "%" != s && (o = !0, a[s] = t[s]); if(o) return r && (a.easing = r), n && (a.callback = n), new v({ 100: a }, i); if(n) { var l = 0; for(var c in t) { var h = J(c);
							t[C](c) && h > l && (l = h) } l += "%", !t[l].callback && (t[l].callback = n) } return new v(t, i) }, Yt.animate = function(t, i, r, n) { var o = this; if(o.removed) return n && n.call(o), o; var s = t instanceof v ? t : e.animation(t, i, r, n); return y(s, o, s.percents[0], null, o.attr()), o }, Yt.setTime = function(t, e) { return t && null != e && this.status(t, H(e, t.ms) / t.ms), this }, Yt.status = function(t, e) { var i, r, n = [],
						o = 0; if(null != e) return y(t, this, -1, H(e, 1)), this; for(i = oe.length; o < i; o++)
						if(r = oe[o], r.el.id == this.id && (!t || r.anim == t)) { if(t) return r.status;
							n.push({ anim: r.anim, status: r.status }) }
					return t ? 0 : n }, Yt.pause = function(e) { for(var i = 0; i < oe.length; i++) oe[i].el.id != this.id || e && oe[i].anim != e || t("raphael.anim.pause." + this.id, this, oe[i].anim) !== !1 && (oe[i].paused = !0); return this }, Yt.resume = function(e) { for(var i = 0; i < oe.length; i++)
						if(oe[i].el.id == this.id && (!e || oe[i].anim == e)) { var r = oe[i];
							t("raphael.anim.resume." + this.id, this, r.anim) !== !1 && (delete r.paused, this.status(r.anim, r.status)) }
					return this }, Yt.stop = function(e) { for(var i = 0; i < oe.length; i++) oe[i].el.id != this.id || e && oe[i].anim != e || t("raphael.anim.stop." + this.id, this, oe[i].anim) !== !1 && oe.splice(i--, 1); return this }, t.on("raphael.remove", m), t.on("raphael.clear", m), Yt.toString = function() { return "Raphaël’s object" };
				var ce = function(t) { if(this.items = [], this.length = 0, this.type = "set", t)
							for(var e = 0, i = t.length; e < i; e++) !t[e] || t[e].constructor != Yt.constructor && t[e].constructor != ce || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++) },
					he = ce.prototype;
				he.push = function() { for(var t, e, i = 0, r = arguments.length; i < r; i++) t = arguments[i], !t || t.constructor != Yt.constructor && t.constructor != ce || (e = this.items.length, this[e] = this.items[e] = t, this.length++); return this }, he.pop = function() { return this.length && delete this[this.length--], this.items.pop() }, he.forEach = function(t, e) { for(var i = 0, r = this.items.length; i < r; i++)
						if(t.call(e, this.items[i], i) === !1) return this; return this };
				for(var ue in Yt) Yt[C](ue) && (he[ue] = function(t) { return function() { var e = arguments; return this.forEach(function(i) { i[t][A](i, e) }) } }(ue));
				return he.attr = function(t, i) { if(t && e.is(t, q) && e.is(t[0], "object"))
							for(var r = 0, n = t.length; r < n; r++) this.items[r].attr(t[r]);
						else
							for(var o = 0, s = this.items.length; o < s; o++) this.items[o].attr(t, i); return this }, he.clear = function() { for(; this.length;) this.pop() }, he.splice = function(t, e, i) { t = t < 0 ? F(this.length + t, 0) : t, e = F(0, H(this.length - t, e)); var r, n = [],
							o = [],
							s = []; for(r = 2; r < arguments.length; r++) s.push(arguments[r]); for(r = 0; r < e; r++) o.push(this[t + r]); for(; r < this.length - t; r++) n.push(this[t + r]); var a = s.length; for(r = 0; r < a + n.length; r++) this.items[t + r] = this[t + r] = r < a ? s[r] : n[r - a]; for(r = this.items.length = this.length -= e - a; this[r];) delete this[r++]; return new ce(o) }, he.exclude = function(t) { for(var e = 0, i = this.length; e < i; e++)
							if(this[e] == t) return this.splice(e, 1), !0 }, he.animate = function(t, i, r, n) {
						(e.is(r, "function") || !r) && (n = r || null); var o, s, a = this.items.length,
							l = a,
							c = this; if(!a) return this;
						n && (s = function() {!--a && n.call(c) }), r = e.is(r, X) ? r : s; var h = e.animation(t, i, r, s); for(o = this.items[--l].animate(h); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(o, h, h), this.items[l] && !this.items[l].removed || a--; return this }, he.insertAfter = function(t) { for(var e = this.items.length; e--;) this.items[e].insertAfter(t); return this }, he.getBBox = function() { for(var t = [], e = [], i = [], r = [], n = this.items.length; n--;)
							if(!this.items[n].removed) { var o = this.items[n].getBBox();
								t.push(o.x), e.push(o.y), i.push(o.x + o.width), r.push(o.y + o.height) }
						return t = H[A](0, t), e = H[A](0, e), i = F[A](0, i), r = F[A](0, r), { x: t, y: e, x2: i, y2: r, width: i - t, height: r - e } }, he.clone = function(t) { t = this.paper.set(); for(var e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].clone()); return t }, he.toString = function() { return "Raphaël‘s set" }, he.glow = function(t) { var e = this.paper.set(); return this.forEach(function(i, r) { var n = i.glow(t);
							null != n && n.forEach(function(t, i) { e.push(t) }) }), e }, he.isPointInside = function(t, e) { var i = !1; return this.forEach(function(r) { if(r.isPointInside(t, e)) return i = !0, !1 }), i }, e.registerFont = function(t) { if(!t.face) return t;
						this.fonts = this.fonts || {}; var e = { w: t.w, face: {}, glyphs: {} },
							i = t.face["font-family"]; for(var r in t.face) t.face[C](r) && (e.face[r] = t.face[r]); if(this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg) { e.face["units-per-em"] = J(t.face["units-per-em"], 10); for(var n in t.glyphs)
								if(t.glyphs[C](n)) { var o = t.glyphs[n]; if(e.glyphs[n] = { w: o.w, k: {}, d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, function(t) { return { l: "L", c: "C", x: "z", t: "m", r: "l", v: "c" }[t] || "M" }) + "z" }, o.k)
										for(var s in o.k) o[C](s) && (e.glyphs[n].k[s] = o.k[s]) } } return t }, b.getFont = function(t, i, r, n) { if(n = n || "normal", r = r || "normal", i = +i || { normal: 400, bold: 700, lighter: 300, bolder: 800 }[i] || 400, e.fonts) { var o = e.fonts[t]; if(!o) { var s = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, D) + "(\\s|$)", "i"); for(var a in e.fonts)
									if(e.fonts[C](a) && s.test(a)) { o = e.fonts[a]; break } } var l; if(o)
								for(var c = 0, h = o.length; c < h && (l = o[c], l.face["font-weight"] != i || l.face["font-style"] != r && l.face["font-style"] || l.face["font-stretch"] != n); c++); return l } }, b.print = function(t, i, r, n, o, s, a, l) { s = s || "middle", a = F(H(a || 0, 1), -1), l = F(H(l || 1, 3), 1); var c, h = I(r)[P](D),
							u = 0,
							f = 0,
							d = D; if(e.is(n, "string") && (n = this.getFont(n)), n) { c = (o || 16) / n.face["units-per-em"]; for(var p = n.face.bbox[P](w), g = +p[0], v = p[3] - p[1], y = 0, m = +p[1] + ("baseline" == s ? v + +n.face.descent : v / 2), x = 0, b = h.length; x < b; x++) { if("\n" == h[x]) u = 0, k = 0, f = 0, y += v * l;
								else { var _ = f && n.glyphs[h[x - 1]] || {},
										k = n.glyphs[h[x]];
									u += f ? (_.w || n.w) + (_.k && _.k[h[x]] || 0) + n.w * a : 0, f = 1 } k && k.d && (d += e.transformPath(k.d, ["t", u * c, y * c, "s", c, c, g, m, "t", (t - g) / c, (i - m) / c])) } } return this.path(d).attr({ fill: "#000", stroke: "none" }) }, b.add = function(t) { if(e.is(t, "array"))
							for(var i, r = this.set(), n = 0, o = t.length; n < o; n++) i = t[n] || {}, _[C](i.type) && r.push(this[i.type]().attr(i)); return r }, e.format = function(t, i) { var r = e.is(i, q) ? [0][E](i) : arguments; return t && e.is(t, X) && r.length - 1 && (t = t.replace(k, function(t, e) { return null == r[++e] ? D : r[e] })), t || D }, e.fullfill = function() { var t = /\{([^\}]+)\}/g,
							e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
							i = function(t, i, r) { var n = r; return i.replace(e, function(t, e, i, r, o) { e = e || r, n && (e in n && (n = n[e]), "function" == typeof n && o && (n = n())) }), n = (null == n || n == r ? t : n) + "" }; return function(e, r) { return String(e).replace(t, function(t, e) { return i(t, e, r) }) } }(), e.ninja = function() { if(T.was) B.win.Raphael = T.is;
						else { window.Raphael = void 0; try { delete window.Raphael } catch(t) {} } return e }, e.st = he, t.on("raphael.DOMload", function() { x = !0 }),
					function(t, i, r) {
						function n() { /in/.test(t.readyState) ? setTimeout(n, 9) : e.eve("raphael.DOMload") } null == t.readyState && t.addEventListener && (t.addEventListener(i, r = function() { t.removeEventListener(i, r, !1), t.readyState = "complete" }, !1), t.readyState = "loading"), n() }(document, "DOMContentLoaded"), e
			}.apply(e, r), !(void 0 !== n && (t.exports = n))
		}, function(t, e, i) { var r, n;! function(i) { var o, s, a = "0.5.0",
					l = "hasOwnProperty",
					c = /[\.\/]/,
					h = /\s*,\s*/,
					u = "*",
					f = function(t, e) { return t - e },
					d = { n: {} },
					p = function() { for(var t = 0, e = this.length; t < e; t++)
							if("undefined" != typeof this[t]) return this[t] },
					g = function() { for(var t = this.length; --t;)
							if("undefined" != typeof this[t]) return this[t] },
					v = Object.prototype.toString,
					y = String,
					m = Array.isArray || function(t) { return t instanceof Array || "[object Array]" == v.call(t) };
				eve = function(t, e) { var i, r = s,
						n = Array.prototype.slice.call(arguments, 2),
						a = eve.listeners(t),
						l = 0,
						c = [],
						h = {},
						u = [],
						d = o;
					u.firstDefined = p, u.lastDefined = g, o = t, s = 0; for(var v = 0, y = a.length; v < y; v++) "zIndex" in a[v] && (c.push(a[v].zIndex), a[v].zIndex < 0 && (h[a[v].zIndex] = a[v])); for(c.sort(f); c[l] < 0;)
						if(i = h[c[l++]], u.push(i.apply(e, n)), s) return s = r, u; for(v = 0; v < y; v++)
						if(i = a[v], "zIndex" in i)
							if(i.zIndex == c[l]) { if(u.push(i.apply(e, n)), s) break;
								do
									if(l++, i = h[c[l]], i && u.push(i.apply(e, n)), s) break; while (i) } else h[i.zIndex] = i;
					else if(u.push(i.apply(e, n)), s) break; return s = r, o = d, u }, eve._events = d, eve.listeners = function(t) { var e, i, r, n, o, s, a, l, h = m(t) ? t : t.split(c),
						f = d,
						p = [f],
						g = []; for(n = 0, o = h.length; n < o; n++) { for(l = [], s = 0, a = p.length; s < a; s++)
							for(f = p[s].n, i = [f[h[n]], f[u]], r = 2; r--;) e = i[r], e && (l.push(e), g = g.concat(e.f || []));
						p = l } return g }, eve.separator = function(t) { t ? (t = y(t).replace(/(?=[\.\^\]\[\-])/g, "\\"), t = "[" + t + "]", c = new RegExp(t)) : c = /[\.\/]/ }, eve.on = function(t, e) { if("function" != typeof e) return function() {}; for(var i = m(t) ? m(t[0]) ? t : [t] : y(t).split(h), r = 0, n = i.length; r < n; r++) ! function(t) { for(var i, r = m(t) ? t : y(t).split(c), n = d, o = 0, s = r.length; o < s; o++) n = n.n, n = n.hasOwnProperty(r[o]) && n[r[o]] || (n[r[o]] = { n: {} }); for(n.f = n.f || [], o = 0, s = n.f.length; o < s; o++)
							if(n.f[o] == e) { i = !0; break }!i && n.f.push(e) }(i[r]); return function(t) {+t == +t && (e.zIndex = +t) } }, eve.f = function(t) { var e = [].slice.call(arguments, 1); return function() { eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0))) } }, eve.stop = function() { s = 1 }, eve.nt = function(t) { var e = m(o) ? o.join(".") : o; return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e }, eve.nts = function() { return m(o) ? o : o.split(c) }, eve.off = eve.unbind = function(t, e) { if(!t) return void(eve._events = d = { n: {} }); var i = m(t) ? m(t[0]) ? t : [t] : y(t).split(h); if(i.length > 1)
						for(var r = 0, n = i.length; r < n; r++) eve.off(i[r], e);
					else { i = m(t) ? t : y(t).split(c); var o, s, a, r, n, f, p, g = [d]; for(r = 0, n = i.length; r < n; r++)
							for(f = 0; f < g.length; f += a.length - 2) { if(a = [f, 1], o = g[f].n, i[r] != u) o[i[r]] && a.push(o[i[r]]);
								else
									for(s in o) o[l](s) && a.push(o[s]);
								g.splice.apply(g, a) }
						for(r = 0, n = g.length; r < n; r++)
							for(o = g[r]; o.n;) { if(e) { if(o.f) { for(f = 0, p = o.f.length; f < p; f++)
											if(o.f[f] == e) { o.f.splice(f, 1); break }!o.f.length && delete o.f } for(s in o.n)
										if(o.n[l](s) && o.n[s].f) { var v = o.n[s].f; for(f = 0, p = v.length; f < p; f++)
												if(v[f] == e) { v.splice(f, 1); break }!v.length && delete o.n[s].f } } else { delete o.f; for(s in o.n) o.n[l](s) && o.n[s].f && delete o.n[s].f } o = o.n } } }, eve.once = function(t, e) { var i = function() { return eve.off(t, i), e.apply(this, arguments) }; return eve.on(t, i) }, eve.version = a, eve.toString = function() { return "You are running Eve " + a }, "undefined" != typeof t && t.exports ? t.exports = eve : (r = [], n = function() { return eve }.apply(e, r), !(void 0 !== n && (t.exports = n))) }(this) }, function(t, e, i) {
			var r, n;
			r = [i(1)], n = function(t) {
				if(!t || t.svg) {
					var e = "hasOwnProperty",
						i = String,
						r = parseFloat,
						n = parseInt,
						o = Math,
						s = o.max,
						a = o.abs,
						l = o.pow,
						c = /[, ]+/,
						h = t.eve,
						u = "",
						f = " ",
						d = "http://www.w3.org/1999/xlink",
						p = { block: "M5,0 0,2.5 5,5z", classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z", diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z", open: "M6,1 1,3.5 6,6", oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z" },
						g = {};
					t.toString = function() { return "Your browser supports SVG.\nYou are running Raphaël " + this.version };
					var v = function(r, n) { if(n) { "string" == typeof r && (r = v(r)); for(var o in n) n[e](o) && ("xlink:" == o.substring(0, 6) ? r.setAttributeNS(d, o.substring(6), i(n[o])) : r.setAttribute(o, i(n[o]))) } else r = t._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)"); return r },
						y = function(e, n) { var c = "linear",
								h = e.id + n,
								f = .5,
								d = .5,
								p = e.node,
								g = e.paper,
								y = p.style,
								m = t._g.doc.getElementById(h); if(!m) { if(n = i(n).replace(t._radial_gradient, function(t, e, i) { if(c = "radial", e && i) { f = r(e), d = r(i); var n = 2 * (d > .5) - 1;
											l(f - .5, 2) + l(d - .5, 2) > .25 && (d = o.sqrt(.25 - l(f - .5, 2)) * n + .5) && .5 != d && (d = d.toFixed(5) - 1e-5 * n) } return u }), n = n.split(/\s*\-\s*/), "linear" == c) { var b = n.shift(); if(b = -r(b), isNaN(b)) return null; var w = [0, 0, o.cos(t.rad(b)), o.sin(t.rad(b))],
										_ = 1 / (s(a(w[2]), a(w[3])) || 1);
									w[2] *= _, w[3] *= _, w[2] < 0 && (w[0] = -w[2], w[2] = 0), w[3] < 0 && (w[1] = -w[3], w[3] = 0) } var k = t._parseDots(n); if(!k) return null; if(h = h.replace(/[\(\)\s,\xb0#]/g, "_"), e.gradient && h != e.gradient.id && (g.defs.removeChild(e.gradient), delete e.gradient), !e.gradient) { m = v(c + "Gradient", { id: h }), e.gradient = m, v(m, "radial" == c ? { fx: f, fy: d } : { x1: w[0], y1: w[1], x2: w[2], y2: w[3], gradientTransform: e.matrix.invert() }), g.defs.appendChild(m); for(var C = 0, B = k.length; C < B; C++) m.appendChild(v("stop", { offset: k[C].offset ? k[C].offset : C ? "100%" : "0%", "stop-color": k[C].color || "#fff", "stop-opacity": isFinite(k[C].opacity) ? k[C].opacity : 1 })) } } return v(p, { fill: x(h), opacity: 1, "fill-opacity": 1 }), y.fill = u, y.opacity = 1, y.fillOpacity = 1, 1 },
						m = function() { var t = document.documentMode; return t && (9 === t || 10 === t) },
						x = function(t) { if(m()) return "url('#" + t + "')"; var e = document.location,
								i = e.protocol + "//" + e.host + e.pathname + e.search; return "url('" + i + "#" + t + "')" },
						b = function(t) { var e = t.getBBox(1);
							v(t.pattern, { patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")" }) },
						w = function(r, n, o) { if("path" == r.type) { for(var s, a, l, c, h, f = i(n).toLowerCase().split("-"), d = r.paper, y = o ? "end" : "start", m = r.node, x = r.attrs, b = x["stroke-width"], w = f.length, _ = "classic", k = 3, C = 3, B = 5; w--;) switch(f[w]) {
									case "block":
									case "classic":
									case "oval":
									case "diamond":
									case "open":
									case "none":
										_ = f[w]; break;
									case "wide":
										C = 5; break;
									case "narrow":
										C = 2; break;
									case "long":
										k = 5; break;
									case "short":
										k = 2 }
								if("open" == _ ? (k += 2, C += 2, B += 2, l = 1, c = o ? 4 : 1, h = { fill: "none", stroke: x.stroke }) : (c = l = k / 2, h = { fill: x.stroke, stroke: "none" }), r._.arrows ? o ? (r._.arrows.endPath && g[r._.arrows.endPath]--, r._.arrows.endMarker && g[r._.arrows.endMarker]--) : (r._.arrows.startPath && g[r._.arrows.startPath]--, r._.arrows.startMarker && g[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != _) { var T = "raphael-marker-" + _,
										S = "raphael-marker-" + y + _ + k + C + "-obj" + r.id;
									t._g.doc.getElementById(T) ? g[T]++ : (d.defs.appendChild(v(v("path"), { "stroke-linecap": "round", d: p[_], id: T })), g[T] = 1); var A, E = t._g.doc.getElementById(S);
									E ? (g[S]++, A = E.getElementsByTagName("use")[0]) : (E = v(v("marker"), { id: S, markerHeight: C, markerWidth: k, orient: "auto", refX: c, refY: C / 2 }), A = v(v("use"), { "xlink:href": "#" + T, transform: (o ? "rotate(180 " + k / 2 + " " + C / 2 + ") " : u) + "scale(" + k / B + "," + C / B + ")", "stroke-width": (1 / ((k / B + C / B) / 2)).toFixed(4) }), E.appendChild(A), d.defs.appendChild(E), g[S] = 1), v(A, h); var $ = l * ("diamond" != _ && "oval" != _);
									o ? (s = r._.arrows.startdx * b || 0, a = t.getTotalLength(x.path) - $ * b) : (s = $ * b, a = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), h = {}, h["marker-" + y] = "url(#" + S + ")", (a || s) && (h.d = t.getSubpath(x.path, s, a)), v(m, h), r._.arrows[y + "Path"] = T, r._.arrows[y + "Marker"] = S, r._.arrows[y + "dx"] = $, r._.arrows[y + "Type"] = _, r._.arrows[y + "String"] = n } else o ? (s = r._.arrows.startdx * b || 0, a = t.getTotalLength(x.path) - s) : (s = 0, a = t.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), r._.arrows[y + "Path"] && v(m, { d: t.getSubpath(x.path, s, a) }), delete r._.arrows[y + "Path"], delete r._.arrows[y + "Marker"], delete r._.arrows[y + "dx"], delete r._.arrows[y + "Type"], delete r._.arrows[y + "String"]; for(h in g)
									if(g[e](h) && !g[h]) { var D = t._g.doc.getElementById(h);
										D && D.parentNode.removeChild(D) } } },
						_ = { "-": [3, 1], ".": [1, 1], "-.": [3, 1, 1, 1], "-..": [3, 1, 1, 1, 1, 1], ". ": [1, 3], "- ": [4, 3], "--": [8, 3], "- .": [4, 3, 1, 3], "--.": [8, 3, 1, 3], "--..": [8, 3, 1, 3, 1, 3] },
						k = function(t, e, r) { if(e = _[i(e).toLowerCase()]) { for(var n = t.attrs["stroke-width"] || "1", o = { round: n, square: n, butt: 0 }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, s = [], a = e.length; a--;) s[a] = e[a] * n + (a % 2 ? 1 : -1) * o;
								v(t.node, { "stroke-dasharray": s.join(",") }) } else v(t.node, { "stroke-dasharray": "none" }) },
						C = function(r, o) {
							var l = r.node,
								h = r.attrs,
								f = l.style.visibility;
							l.style.visibility = "hidden";
							for(var p in o)
								if(o[e](p)) {
									if(!t._availableAttrs[e](p)) continue;
									var g = o[p];
									switch(h[p] = g, p) {
										case "blur":
											r.blur(g);
											break;
										case "title":
											var m = l.getElementsByTagName("title");
											if(m.length && (m = m[0])) m.firstChild.nodeValue = g;
											else { m = v("title"); var x = t._g.doc.createTextNode(g);
												m.appendChild(x), l.appendChild(m) }
											break;
										case "href":
										case "target":
											var _ = l.parentNode;
											if("a" != _.tagName.toLowerCase()) { var C = v("a");
												_.insertBefore(C, l), C.appendChild(l), _ = C }
											"target" == p ? _.setAttributeNS(d, "show", "blank" == g ? "new" : g) : _.setAttributeNS(d, p, g);
											break;
										case "cursor":
											l.style.cursor = g;
											break;
										case "transform":
											r.transform(g);
											break;
										case "arrow-start":
											w(r, g);
											break;
										case "arrow-end":
											w(r, g, 1);
											break;
										case "clip-rect":
											var B = i(g).split(c);
											if(4 == B.length) { r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode); var S = v("clipPath"),
													A = v("rect");
												S.id = t.createUUID(), v(A, { x: B[0], y: B[1], width: B[2], height: B[3] }), S.appendChild(A), r.paper.defs.appendChild(S), v(l, { "clip-path": "url(#" + S.id + ")" }), r.clip = A }
											if(!g) { var E = l.getAttribute("clip-path"); if(E) { var $ = t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g, u));
													$ && $.parentNode.removeChild($), v(l, { "clip-path": u }), delete r.clip } }
											break;
										case "path":
											"path" == r.type && (v(l, { d: g ? h.path = t._pathToAbsolute(g) : "M0,0" }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && w(r, r._.arrows.startString), "endString" in r._.arrows && w(r, r._.arrows.endString, 1)));
											break;
										case "width":
											if(l.setAttribute(p, g), r._.dirty = 1, !h.fx) break;
											p = "x", g = h.x;
										case "x":
											h.fx && (g = -h.x - (h.width || 0));
										case "rx":
											if("rx" == p && "rect" == r.type) break;
										case "cx":
											l.setAttribute(p, g), r.pattern && b(r), r._.dirty = 1;
											break;
										case "height":
											if(l.setAttribute(p, g), r._.dirty = 1, !h.fy) break;
											p = "y", g = h.y;
										case "y":
											h.fy && (g = -h.y - (h.height || 0));
										case "ry":
											if("ry" == p && "rect" == r.type) break;
										case "cy":
											l.setAttribute(p, g), r.pattern && b(r), r._.dirty = 1;
											break;
										case "r":
											"rect" == r.type ? v(l, { rx: g, ry: g }) : l.setAttribute(p, g),
												r._.dirty = 1;
											break;
										case "src":
											"image" == r.type && l.setAttributeNS(d, "href", g);
											break;
										case "stroke-width":
											1 == r._.sx && 1 == r._.sy || (g /= s(a(r._.sx), a(r._.sy)) || 1), l.setAttribute(p, g), h["stroke-dasharray"] && k(r, h["stroke-dasharray"], o), r._.arrows && ("startString" in r._.arrows && w(r, r._.arrows.startString), "endString" in r._.arrows && w(r, r._.arrows.endString, 1));
											break;
										case "stroke-dasharray":
											k(r, g, o);
											break;
										case "fill":
											var D = i(g).match(t._ISURL);
											if(D) { S = v("pattern"); var L = v("image");
												S.id = t.createUUID(), v(S, { x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1 }), v(L, { x: 0, y: 0, "xlink:href": D[1] }), S.appendChild(L),
													function(e) { t._preload(D[1], function() { var t = this.offsetWidth,
																i = this.offsetHeight;
															v(e, { width: t, height: i }), v(L, { width: t, height: i }) }) }(S), r.paper.defs.appendChild(S), v(l, { fill: "url(#" + S.id + ")" }), r.pattern = S, r.pattern && b(r); break }
											var I = t.getRGB(g);
											if(I.error) { if(("circle" == r.type || "ellipse" == r.type || "r" != i(g).charAt()) && y(r, g)) { if("opacity" in h || "fill-opacity" in h) { var P = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u)); if(P) { var z = P.getElementsByTagName("stop");
															v(z[z.length - 1], { "stop-opacity": ("opacity" in h ? h.opacity : 1) * ("fill-opacity" in h ? h["fill-opacity"] : 1) }) } } h.gradient = g, h.fill = "none"; break } } else delete o.gradient, delete h.gradient, !t.is(h.opacity, "undefined") && t.is(o.opacity, "undefined") && v(l, { opacity: h.opacity }), !t.is(h["fill-opacity"], "undefined") && t.is(o["fill-opacity"], "undefined") && v(l, { "fill-opacity": h["fill-opacity"] });
											I[e]("opacity") && v(l, { "fill-opacity": I.opacity > 1 ? I.opacity / 100 : I.opacity });
										case "stroke":
											I = t.getRGB(g), l.setAttribute(p, I.hex), "stroke" == p && I[e]("opacity") && v(l, { "stroke-opacity": I.opacity > 1 ? I.opacity / 100 : I.opacity }), "stroke" == p && r._.arrows && ("startString" in r._.arrows && w(r, r._.arrows.startString), "endString" in r._.arrows && w(r, r._.arrows.endString, 1));
											break;
										case "gradient":
											("circle" == r.type || "ellipse" == r.type || "r" != i(g).charAt()) && y(r, g);
											break;
										case "opacity":
											h.gradient && !h[e]("stroke-opacity") && v(l, { "stroke-opacity": g > 1 ? g / 100 : g });
										case "fill-opacity":
											if(h.gradient) { P = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u)), P && (z = P.getElementsByTagName("stop"), v(z[z.length - 1], { "stop-opacity": g })); break }
										default:
											"font-size" == p && (g = n(g, 10) + "px");
											var R = p.replace(/(\-.)/g, function(t) { return t.substring(1).toUpperCase() });
											l.style[R] = g, r._.dirty = 1, l.setAttribute(p, g)
									}
								}
							T(r, o), l.style.visibility = f
						},
						B = 1.2,
						T = function(r, o) { if("text" == r.type && (o[e]("text") || o[e]("font") || o[e]("font-size") || o[e]("x") || o[e]("y"))) { var s = r.attrs,
									a = r.node,
									l = a.firstChild ? n(t._g.doc.defaultView.getComputedStyle(a.firstChild, u).getPropertyValue("font-size"), 10) : 10; if(o[e]("text")) { for(s.text = o.text; a.firstChild;) a.removeChild(a.firstChild); for(var c, h = i(o.text).split("\n"), f = [], d = 0, p = h.length; d < p; d++) c = v("tspan"), d && v(c, { dy: l * B, x: s.x }), c.appendChild(t._g.doc.createTextNode(h[d])), a.appendChild(c), f[d] = c } else
									for(f = a.getElementsByTagName("tspan"), d = 0, p = f.length; d < p; d++) d ? v(f[d], { dy: l * B, x: s.x }) : v(f[0], { dy: 0 });
								v(a, { x: s.x, y: s.y }), r._.dirty = 1; var g = r._getBBox(),
									y = s.y - (g.y + g.height / 2);
								y && t.is(y, "finite") && v(f[0], { dy: y }) } },
						S = function(t) { return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t },
						A = function(e, i) {
							function r() { return("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5) } this[0] = this.node = e, e.raphael = !0, this.id = r(), e.raphaelid = this.id, this.matrix = t.matrix(), this.realPath = null, this.paper = i, this.attrs = this.attrs || {}, this._ = { transform: [], sx: 1, sy: 1, deg: 0, dx: 0, dy: 0, dirty: 1 }, !i.bottom && (i.bottom = this), this.prev = i.top, i.top && (i.top.next = this), i.top = this, this.next = null },
						E = t.el;
					A.prototype = E, E.constructor = A, t._engine.path = function(t, e) { var i = v("path");
						e.canvas && e.canvas.appendChild(i); var r = new A(i, e); return r.type = "path", C(r, { fill: "none", stroke: "#000", path: t }), r }, E.rotate = function(t, e, n) { if(this.removed) return this; if(t = i(t).split(c), t.length - 1 && (e = r(t[1]), n = r(t[2])), t = r(t[0]), null == n && (e = n), null == e || null == n) { var o = this.getBBox(1);
							e = o.x + o.width / 2, n = o.y + o.height / 2 } return this.transform(this._.transform.concat([
							["r", t, e, n]
						])), this }, E.scale = function(t, e, n, o) { if(this.removed) return this; if(t = i(t).split(c), t.length - 1 && (e = r(t[1]), n = r(t[2]), o = r(t[3])), t = r(t[0]), null == e && (e = t), null == o && (n = o), null == n || null == o) var s = this.getBBox(1); return n = null == n ? s.x + s.width / 2 : n, o = null == o ? s.y + s.height / 2 : o, this.transform(this._.transform.concat([
							["s", t, e, n, o]
						])), this }, E.translate = function(t, e) { return this.removed ? this : (t = i(t).split(c), t.length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
							["t", t, e]
						])), this) }, E.transform = function(i) { var r = this._; if(null == i) return r.transform; if(t._extractTransform(this, i), this.clip && v(this.clip, { transform: this.matrix.invert() }), this.pattern && b(this), this.node && v(this.node, { transform: this.matrix }), 1 != r.sx || 1 != r.sy) { var n = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
							this.attr({ "stroke-width": n }) } return this }, E.hide = function() { return this.removed || (this.node.style.display = "none"), this }, E.show = function() { return this.removed || (this.node.style.display = ""), this }, E.remove = function() { var e = S(this.node); if(!this.removed && e.parentNode) { var i = this.paper;
							i.__set__ && i.__set__.exclude(this), h.unbind("raphael.*.*." + this.id), this.gradient && i.defs.removeChild(this.gradient), t._tear(this, i), e.parentNode.removeChild(e), this.removeData(); for(var r in this) this[r] = "function" == typeof this[r] ? t._removedFactory(r) : null;
							this.removed = !0 } }, E._getBBox = function() { if("none" == this.node.style.display) { this.show(); var t = !0 } var e, i = !1;
						this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style), e && "none" == e.display && (i = !0, e.display = ""); var r = {}; try { r = this.node.getBBox() } catch(n) { r = { x: this.node.clientLeft, y: this.node.clientTop, width: this.node.clientWidth, height: this.node.clientHeight } } finally { r = r || {}, i && (e.display = "none") } return t && this.hide(), r }, E.attr = function(i, r) { if(this.removed) return this; if(null == i) { var n = {}; for(var o in this.attrs) this.attrs[e](o) && (n[o] = this.attrs[o]); return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n } if(null == r && t.is(i, "string")) { if("fill" == i && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; if("transform" == i) return this._.transform; for(var s = i.split(c), a = {}, l = 0, u = s.length; l < u; l++) i = s[l], i in this.attrs ? a[i] = this.attrs[i] : t.is(this.paper.customAttributes[i], "function") ? a[i] = this.paper.customAttributes[i].def : a[i] = t._availableAttrs[i]; return u - 1 ? a : a[s[0]] } if(null == r && t.is(i, "array")) { for(a = {}, l = 0, u = i.length; l < u; l++) a[i[l]] = this.attr(i[l]); return a } if(null != r) { var f = {};
							f[i] = r } else null != i && t.is(i, "object") && (f = i); for(var d in f) h("raphael.attr." + d + "." + this.id, this, f[d]); for(d in this.paper.customAttributes)
							if(this.paper.customAttributes[e](d) && f[e](d) && t.is(this.paper.customAttributes[d], "function")) { var p = this.paper.customAttributes[d].apply(this, [].concat(f[d]));
								this.attrs[d] = f[d]; for(var g in p) p[e](g) && (f[g] = p[g]) }
						return C(this, f), this }, E.toFront = function() { if(this.removed) return this; var e = S(this.node);
						e.parentNode.appendChild(e); var i = this.paper; return i.top != this && t._tofront(this, i), this }, E.toBack = function() { if(this.removed) return this; var e = S(this.node),
							i = e.parentNode; return i.insertBefore(e, i.firstChild), t._toback(this, this.paper), this.paper, this }, E.insertAfter = function(e) { if(this.removed || !e) return this; var i = S(this.node),
							r = S(e.node || e[e.length - 1].node); return r.nextSibling ? r.parentNode.insertBefore(i, r.nextSibling) : r.parentNode.appendChild(i), t._insertafter(this, e, this.paper), this }, E.insertBefore = function(e) { if(this.removed || !e) return this; var i = S(this.node),
							r = S(e.node || e[0].node); return r.parentNode.insertBefore(i, r), t._insertbefore(this, e, this.paper), this }, E.blur = function(e) { var i = this; if(0 !== +e) { var r = v("filter"),
								n = v("feGaussianBlur");
							i.attrs.blur = e, r.id = t.createUUID(), v(n, { stdDeviation: +e || 1.5 }), r.appendChild(n), i.paper.defs.appendChild(r), i._blur = r, v(i.node, { filter: "url(#" + r.id + ")" }) } else i._blur && (i._blur.parentNode.removeChild(i._blur), delete i._blur, delete i.attrs.blur), i.node.removeAttribute("filter"); return i }, t._engine.circle = function(t, e, i, r) { var n = v("circle");
						t.canvas && t.canvas.appendChild(n); var o = new A(n, t); return o.attrs = { cx: e, cy: i, r: r, fill: "none", stroke: "#000" }, o.type = "circle", v(n, o.attrs), o }, t._engine.rect = function(t, e, i, r, n, o) { var s = v("rect");
						t.canvas && t.canvas.appendChild(s); var a = new A(s, t); return a.attrs = { x: e, y: i, width: r, height: n, rx: o || 0, ry: o || 0, fill: "none", stroke: "#000" }, a.type = "rect", v(s, a.attrs), a }, t._engine.ellipse = function(t, e, i, r, n) { var o = v("ellipse");
						t.canvas && t.canvas.appendChild(o); var s = new A(o, t); return s.attrs = { cx: e, cy: i, rx: r, ry: n, fill: "none", stroke: "#000" }, s.type = "ellipse", v(o, s.attrs), s }, t._engine.image = function(t, e, i, r, n, o) { var s = v("image");
						v(s, { x: i, y: r, width: n, height: o, preserveAspectRatio: "none" }), s.setAttributeNS(d, "href", e), t.canvas && t.canvas.appendChild(s); var a = new A(s, t); return a.attrs = { x: i, y: r, width: n, height: o, src: e }, a.type = "image", a }, t._engine.text = function(e, i, r, n) { var o = v("text");
						e.canvas && e.canvas.appendChild(o); var s = new A(o, e); return s.attrs = { x: i, y: r, "text-anchor": "middle", text: n, "font-family": t._availableAttrs["font-family"], "font-size": t._availableAttrs["font-size"], stroke: "none", fill: "#000" }, s.type = "text", C(s, s.attrs), s }, t._engine.setSize = function(t, e) { return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this }, t._engine.create = function() { var e = t._getContainer.apply(0, arguments),
							i = e && e.container,
							r = e.x,
							n = e.y,
							o = e.width,
							s = e.height; if(!i) throw new Error("SVG container not found."); var a, l = v("svg"),
							c = "overflow:hidden;"; return r = r || 0, n = n || 0, o = o || 512, s = s || 342, v(l, { height: s, version: 1.1, width: o, xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" }), 1 == i ? (l.style.cssText = c + "position:absolute;left:" + r + "px;top:" + n + "px", t._g.doc.body.appendChild(l), a = 1) : (l.style.cssText = c + "position:relative", i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l)), i = new t._Paper, i.width = o, i.height = s, i.canvas = l, i.clear(), i._left = i._top = 0, a && (i.renderfix = function() {}), i.renderfix(), i }, t._engine.setViewBox = function(t, e, i, r, n) { h("raphael.setViewBox", this, this._viewBox, [t, e, i, r, n]); var o, a, l = this.getSize(),
							c = s(i / l.width, r / l.height),
							u = this.top,
							d = n ? "xMidYMid meet" : "xMinYMin"; for(null == t ? (this._vbSize && (c = 1), delete this._vbSize, o = "0 0 " + this.width + f + this.height) : (this._vbSize = c, o = t + f + e + f + i + f + r), v(this.canvas, { viewBox: o, preserveAspectRatio: d }); c && u;) a = "stroke-width" in u.attrs ? u.attrs["stroke-width"] : 1, u.attr({ "stroke-width": a }), u._.dirty = 1, u._.dirtyT = 1, u = u.prev; return this._viewBox = [t, e, i, r, !!n], this }, t.prototype.renderfix = function() { var t, e = this.canvas,
							i = e.style; try { t = e.getScreenCTM() || e.createSVGMatrix() } catch(r) { t = e.createSVGMatrix() } var n = -t.e % 1,
							o = -t.f % 1;
						(n || o) && (n && (this._left = (this._left + n) % 1, i.left = this._left + "px"), o && (this._top = (this._top + o) % 1, i.top = this._top + "px")) }, t.prototype.clear = function() { t.eve("raphael.clear", this); for(var e = this.canvas; e.firstChild;) e.removeChild(e.firstChild);
						this.bottom = this.top = null, (this.desc = v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)), e.appendChild(this.desc), e.appendChild(this.defs = v("defs")) }, t.prototype.remove = function() { h("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas); for(var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null };
					var $ = t.st;
					for(var D in E) E[e](D) && !$[e](D) && ($[D] = function(t) { return function() { var e = arguments; return this.forEach(function(i) { i[t].apply(i, e) }) } }(D))
				}
			}.apply(e, r), !(void 0 !== n && (t.exports = n))
		}, function(t, e, i) { var r, n;
			r = [i(1)], n = function(t) { if(!t || t.vml) { var e = "hasOwnProperty",
						i = String,
						r = parseFloat,
						n = Math,
						o = n.round,
						s = n.max,
						a = n.min,
						l = n.abs,
						c = "fill",
						h = /[, ]+/,
						u = t.eve,
						f = " progid:DXImageTransform.Microsoft",
						d = " ",
						p = "",
						g = { M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x" },
						v = /([clmz]),?([^clmz]*)/gi,
						y = / progid:\S+Blur\([^\)]+\)/g,
						m = /-?[^,\s-]+/g,
						x = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
						b = 21600,
						w = { path: 1, rect: 1, image: 1 },
						_ = { circle: 1, ellipse: 1 },
						k = function(e) { var r = /[ahqstv]/gi,
								n = t._pathToAbsolute; if(i(e).match(r) && (n = t._path2curve), r = /[clmz]/g, n == t._pathToAbsolute && !i(e).match(r)) { var s = i(e).replace(v, function(t, e, i) { var r = [],
										n = "m" == e.toLowerCase(),
										s = g[e]; return i.replace(m, function(t) { n && 2 == r.length && (s += r + g["m" == e ? "l" : "L"], r = []), r.push(o(t * b)) }), s + r }); return s } var a, l, c = n(e);
							s = []; for(var h = 0, u = c.length; h < u; h++) { a = c[h], l = c[h][0].toLowerCase(), "z" == l && (l = "x"); for(var f = 1, y = a.length; f < y; f++) l += o(a[f] * b) + (f != y - 1 ? "," : p);
								s.push(l) } return s.join(d) },
						C = function(e, i, r) { var n = t.matrix(); return n.rotate(-e, .5, .5), { dx: n.x(i, r), dy: n.y(i, r) } },
						B = function(t, e, i, r, n, o) { var s = t._,
								a = t.matrix,
								h = s.fillpos,
								u = t.node,
								f = u.style,
								p = 1,
								g = "",
								v = b / e,
								y = b / i; if(f.visibility = "hidden", e && i) { if(u.coordsize = l(v) + d + l(y), f.rotation = o * (e * i < 0 ? -1 : 1), o) { var m = C(o, r, n);
									r = m.dx, n = m.dy } if(e < 0 && (g += "x"), i < 0 && (g += " y") && (p = -1), f.flip = g, u.coordorigin = r * -v + d + n * -y, h || s.fillsize) { var x = u.getElementsByTagName(c);
									x = x && x[0], u.removeChild(x), h && (m = C(o, a.x(h[0], h[1]), a.y(h[0], h[1])), x.position = m.dx * p + d + m.dy * p), s.fillsize && (x.size = s.fillsize[0] * l(e) + d + s.fillsize[1] * l(i)), u.appendChild(x) } f.visibility = "visible" } };
					t.toString = function() { return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version }; var T = function(t, e, r) { for(var n = i(e).toLowerCase().split("-"), o = r ? "end" : "start", s = n.length, a = "classic", l = "medium", c = "medium"; s--;) switch(n[s]) {
								case "block":
								case "classic":
								case "oval":
								case "diamond":
								case "open":
								case "none":
									a = n[s]; break;
								case "wide":
								case "narrow":
									c = n[s]; break;
								case "long":
								case "short":
									l = n[s] }
							var h = t.node.getElementsByTagName("stroke")[0];
							h[o + "arrow"] = a, h[o + "arrowlength"] = l, h[o + "arrowwidth"] = c },
						S = function(n, l) { n.attrs = n.attrs || {}; var u = n.node,
								f = n.attrs,
								g = u.style,
								v = w[n.type] && (l.x != f.x || l.y != f.y || l.width != f.width || l.height != f.height || l.cx != f.cx || l.cy != f.cy || l.rx != f.rx || l.ry != f.ry || l.r != f.r),
								y = _[n.type] && (f.cx != l.cx || f.cy != l.cy || f.r != l.r || f.rx != l.rx || f.ry != l.ry),
								m = n; for(var x in l) l[e](x) && (f[x] = l[x]); if(v && (f.path = t._getPath[n.type](n), n._.dirty = 1), l.href && (u.href = l.href), l.title && (u.title = l.title), l.target && (u.target = l.target), l.cursor && (g.cursor = l.cursor), "blur" in l && n.blur(l.blur), (l.path && "path" == n.type || v) && (u.path = k(~i(f.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(f.path) : f.path), n._.dirty = 1, "image" == n.type && (n._.fillpos = [f.x, f.y], n._.fillsize = [f.width, f.height], B(n, 1, 1, 0, 0, 0))), "transform" in l && n.transform(l.transform), y) { var C = +f.cx,
									S = +f.cy,
									E = +f.rx || +f.r || 0,
									$ = +f.ry || +f.r || 0;
								u.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((C - E) * b), o((S - $) * b), o((C + E) * b), o((S + $) * b), o(C * b)), n._.dirty = 1 } if("clip-rect" in l) { var L = i(l["clip-rect"]).split(h); if(4 == L.length) { L[2] = +L[2] + +L[0], L[3] = +L[3] + +L[1]; var I = u.clipRect || t._g.doc.createElement("div"),
										P = I.style;
									P.clip = t.format("rect({1}px {2}px {3}px {0}px)", L), u.clipRect || (P.position = "absolute", P.top = 0, P.left = 0, P.width = n.paper.width + "px", P.height = n.paper.height + "px", u.parentNode.insertBefore(I, u), I.appendChild(u), u.clipRect = I) } l["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto") } if(n.textpath) { var z = n.textpath.style;
								l.font && (z.font = l.font), l["font-family"] && (z.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, p) + '"'), l["font-size"] && (z.fontSize = l["font-size"]), l["font-weight"] && (z.fontWeight = l["font-weight"]), l["font-style"] && (z.fontStyle = l["font-style"]) } if("arrow-start" in l && T(m, l["arrow-start"]), "arrow-end" in l && T(m, l["arrow-end"], 1), null != l.opacity || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) { var R = u.getElementsByTagName(c),
									N = !1; if(R = R && R[0], !R && (N = R = D(c)), "image" == n.type && l.src && (R.src = l.src), l.fill && (R.on = !0), null != R.on && "none" != l.fill && null !== l.fill || (R.on = !1), R.on && l.fill) { var M = i(l.fill).match(t._ISURL); if(M) { R.parentNode == u && u.removeChild(R), R.rotate = !0, R.src = M[1], R.type = "tile"; var F = n.getBBox(1);
										R.position = F.x + d + F.y, n._.fillpos = [F.x, F.y], t._preload(M[1], function() { n._.fillsize = [this.offsetWidth, this.offsetHeight] }) } else R.color = t.getRGB(l.fill).hex, R.src = p, R.type = "solid", t.getRGB(l.fill).error && (m.type in { circle: 1, ellipse: 1 } || "r" != i(l.fill).charAt()) && A(m, l.fill, R) && (f.fill = "none", f.gradient = l.fill, R.rotate = !1) } if("fill-opacity" in l || "opacity" in l) { var H = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
									H = a(s(H, 0), 1), R.opacity = H, R.src && (R.color = "none") } u.appendChild(R); var O = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0],
									j = !1;!O && (j = O = D("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (O.on = !0), ("none" == l.stroke || null === l.stroke || null == O.on || 0 == l.stroke || 0 == l["stroke-width"]) && (O.on = !1); var W = t.getRGB(l.stroke);
								O.on && l.stroke && (O.color = W.hex), H = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+W.o + 1 || 2) - 1); var U = .75 * (r(l["stroke-width"]) || 1); if(H = a(s(H, 0), 1), null == l["stroke-width"] && (U = f["stroke-width"]), l["stroke-width"] && (O.weight = U), U && U < 1 && (H *= U) && (O.weight = 1), O.opacity = H, l["stroke-linejoin"] && (O.joinstyle = l["stroke-linejoin"] || "miter"), O.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (O.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in l) { var X = { "-": "shortdash", ".": "shortdot", "-.": "shortdashdot", "-..": "shortdashdotdot", ". ": "dot", "- ": "dash", "--": "longdash", "- .": "dashdot", "--.": "longdashdot", "--..": "longdashdotdot" };
									O.dashstyle = X[e](l["stroke-dasharray"]) ? X[l["stroke-dasharray"]] : p } j && u.appendChild(O) } if("text" == m.type) { m.paper.canvas.style.display = p; var q = m.paper.span,
									V = 100,
									G = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
								g = q.style, f.font && (g.font = f.font), f["font-family"] && (g.fontFamily = f["font-family"]), f["font-weight"] && (g.fontWeight = f["font-weight"]), f["font-style"] && (g.fontStyle = f["font-style"]), G = r(f["font-size"] || G && G[0]) || 10, g.fontSize = G * V + "px", m.textpath.string && (q.innerHTML = i(m.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>")); var Y = q.getBoundingClientRect();
								m.W = f.w = (Y.right - Y.left) / V, m.H = f.h = (Y.bottom - Y.top) / V, m.X = f.x, m.Y = f.y + m.H / 2, ("x" in l || "y" in l) && (m.path.v = t.format("m{0},{1}l{2},{1}", o(f.x * b), o(f.y * b), o(f.x * b) + 1)); for(var K = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Q = 0, Z = K.length; Q < Z; Q++)
									if(K[Q] in l) { m._.dirty = 1; break }
								switch(f["text-anchor"]) {
									case "start":
										m.textpath.style["v-text-align"] = "left", m.bbx = m.W / 2; break;
									case "end":
										m.textpath.style["v-text-align"] = "right", m.bbx = -m.W / 2; break;
									default:
										m.textpath.style["v-text-align"] = "center", m.bbx = 0 } m.textpath.style["v-text-kern"] = !0 } },
						A = function(e, o, s) { e.attrs = e.attrs || {}; var a = (e.attrs, Math.pow),
								l = "linear",
								c = ".5 .5"; if(e.attrs.gradient = o, o = i(o).replace(t._radial_gradient, function(t, e, i) { return l = "radial", e && i && (e = r(e), i = r(i), a(e - .5, 2) + a(i - .5, 2) > .25 && (i = n.sqrt(.25 - a(e - .5, 2)) * (2 * (i > .5) - 1) + .5), c = e + d + i), p }), o = o.split(/\s*\-\s*/), "linear" == l) { var h = o.shift(); if(h = -r(h), isNaN(h)) return null } var u = t._parseDots(o); if(!u) return null; if(e = e.shape || e.node, u.length) { e.removeChild(s), s.on = !0, s.method = "none", s.color = u[0].color, s.color2 = u[u.length - 1].color; for(var f = [], g = 0, v = u.length; g < v; g++) u[g].offset && f.push(u[g].offset + d + u[g].color);
								s.colors = f.length ? f.join() : "0% " + s.color, "radial" == l ? (s.type = "gradientTitle", s.focus = "100%", s.focussize = "0 0", s.focusposition = c, s.angle = 0) : (s.type = "gradient", s.angle = (270 - h) % 360), e.appendChild(s) } return 1 },
						E = function(e, i) { this[0] = this.node = e, e.raphael = !0, this.id = t._oid++, e.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = i, this.matrix = t.matrix(), this._ = { transform: [], sx: 1, sy: 1, dx: 0, dy: 0, deg: 0, dirty: 1, dirtyT: 1 }, !i.bottom && (i.bottom = this), this.prev = i.top, i.top && (i.top.next = this), i.top = this, this.next = null },
						$ = t.el;
					E.prototype = $, $.constructor = E, $.transform = function(e) { if(null == e) return this._.transform; var r, n = this.paper._viewBoxShift,
							o = n ? "s" + [n.scale, n.scale] + "-1-1t" + [n.dx, n.dy] : p;
						n && (r = e = i(e).replace(/\.{3}|\u2026/g, this._.transform || p)), t._extractTransform(this, o + e); var s, a = this.matrix.clone(),
							l = this.skew,
							c = this.node,
							h = ~i(this.attrs.fill).indexOf("-"),
							u = !i(this.attrs.fill).indexOf("url("); if(a.translate(1, 1), u || h || "image" == this.type)
							if(l.matrix = "1 0 0 1", l.offset = "0 0", s = a.split(), h && s.noRotation || !s.isSimple) { c.style.filter = a.toFilter(); var f = this.getBBox(),
									g = this.getBBox(1),
									v = f.x - g.x,
									y = f.y - g.y;
								c.coordorigin = v * -b + d + y * -b, B(this, 1, 1, v, y, 0) } else c.style.filter = p, B(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
						else c.style.filter = p, l.matrix = i(a), l.offset = a.offset(); return null !== r && (this._.transform = r, t._extractTransform(this, r)), this }, $.rotate = function(t, e, n) { if(this.removed) return this; if(null != t) { if(t = i(t).split(h), t.length - 1 && (e = r(t[1]), n = r(t[2])), t = r(t[0]), null == n && (e = n), null == e || null == n) { var o = this.getBBox(1);
								e = o.x + o.width / 2, n = o.y + o.height / 2 } return this._.dirtyT = 1, this.transform(this._.transform.concat([
								["r", t, e, n]
							])), this } }, $.translate = function(t, e) { return this.removed ? this : (t = i(t).split(h), t.length - 1 && (e = r(t[1])), t = r(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
							["t", t, e]
						])), this) }, $.scale = function(t, e, n, o) { if(this.removed) return this; if(t = i(t).split(h), t.length - 1 && (e = r(t[1]), n = r(t[2]), o = r(t[3]), isNaN(n) && (n = null), isNaN(o) && (o = null)), t = r(t[0]), null == e && (e = t), null == o && (n = o), null == n || null == o) var s = this.getBBox(1); return n = null == n ? s.x + s.width / 2 : n, o = null == o ? s.y + s.height / 2 : o, this.transform(this._.transform.concat([
							["s", t, e, n, o]
						])), this._.dirtyT = 1, this }, $.hide = function() { return !this.removed && (this.node.style.display = "none"), this }, $.show = function() { return !this.removed && (this.node.style.display = p), this }, $.auxGetBBox = t.el.getBBox, $.getBBox = function() { var t = this.auxGetBBox(); if(this.paper && this.paper._viewBoxShift) { var e = {},
								i = 1 / this.paper._viewBoxShift.scale; return e.x = t.x - this.paper._viewBoxShift.dx, e.x *= i, e.y = t.y - this.paper._viewBoxShift.dy, e.y *= i, e.width = t.width * i, e.height = t.height * i, e.x2 = e.x + e.width, e.y2 = e.y + e.height, e } return t }, $._getBBox = function() { return this.removed ? {} : { x: this.X + (this.bbx || 0) - this.W / 2, y: this.Y - this.H, width: this.W, height: this.H } }, $.remove = function() { if(!this.removed && this.node.parentNode) { this.paper.__set__ && this.paper.__set__.exclude(this), t.eve.unbind("raphael.*.*." + this.id), t._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape); for(var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
							this.removed = !0 } }, $.attr = function(i, r) { if(this.removed) return this; if(null == i) { var n = {}; for(var o in this.attrs) this.attrs[e](o) && (n[o] = this.attrs[o]); return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n } if(null == r && t.is(i, "string")) { if(i == c && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient; for(var s = i.split(h), a = {}, l = 0, f = s.length; l < f; l++) i = s[l], i in this.attrs ? a[i] = this.attrs[i] : t.is(this.paper.customAttributes[i], "function") ? a[i] = this.paper.customAttributes[i].def : a[i] = t._availableAttrs[i]; return f - 1 ? a : a[s[0]] } if(this.attrs && null == r && t.is(i, "array")) { for(a = {}, l = 0, f = i.length; l < f; l++) a[i[l]] = this.attr(i[l]); return a } var d;
						null != r && (d = {}, d[i] = r), null == r && t.is(i, "object") && (d = i); for(var p in d) u("raphael.attr." + p + "." + this.id, this, d[p]); if(d) { for(p in this.paper.customAttributes)
								if(this.paper.customAttributes[e](p) && d[e](p) && t.is(this.paper.customAttributes[p], "function")) { var g = this.paper.customAttributes[p].apply(this, [].concat(d[p]));
									this.attrs[p] = d[p]; for(var v in g) g[e](v) && (d[v] = g[v]) }
							d.text && "text" == this.type && (this.textpath.string = d.text), S(this, d) } return this }, $.toFront = function() { return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && t._tofront(this, this.paper), this }, $.toBack = function() { return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), t._toback(this, this.paper)), this) }, $.insertAfter = function(e) { return this.removed ? this : (e.constructor == t.st.constructor && (e = e[e.length - 1]), e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node), t._insertafter(this, e, this.paper), this) }, $.insertBefore = function(e) { return this.removed ? this : (e.constructor == t.st.constructor && (e = e[0]), e.node.parentNode.insertBefore(this.node, e.node), t._insertbefore(this, e, this.paper), this) }, $.blur = function(e) { var i = this.node.runtimeStyle,
							r = i.filter; return r = r.replace(y, p), 0 !== +e ? (this.attrs.blur = e, i.filter = r + d + f + ".Blur(pixelradius=" + (+e || 1.5) + ")", i.margin = t.format("-{0}px 0 0 -{0}px", o(+e || 1.5))) : (i.filter = r, i.margin = 0, delete this.attrs.blur), this }, t._engine.path = function(t, e) { var i = D("shape");
						i.style.cssText = x, i.coordsize = b + d + b, i.coordorigin = e.coordorigin; var r = new E(i, e),
							n = { fill: "none", stroke: "#000" };
						t && (n.path = t), r.type = "path", r.path = [], r.Path = p, S(r, n), e.canvas && e.canvas.appendChild(i); var o = D("skew"); return o.on = !0, i.appendChild(o), r.skew = o, r.transform(p), r }, t._engine.rect = function(e, i, r, n, o, s) { var a = t._rectPath(i, r, n, o, s),
							l = e.path(a),
							c = l.attrs; return l.X = c.x = i, l.Y = c.y = r, l.W = c.width = n, l.H = c.height = o, c.r = s, c.path = a, l.type = "rect", l }, t._engine.ellipse = function(t, e, i, r, n) { var o = t.path(); return o.attrs, o.X = e - r, o.Y = i - n, o.W = 2 * r, o.H = 2 * n, o.type = "ellipse", S(o, { cx: e, cy: i, rx: r, ry: n }), o }, t._engine.circle = function(t, e, i, r) { var n = t.path(); return n.attrs, n.X = e - r, n.Y = i - r, n.W = n.H = 2 * r, n.type = "circle", S(n, { cx: e, cy: i, r: r }), n }, t._engine.image = function(e, i, r, n, o, s) { var a = t._rectPath(r, n, o, s),
							l = e.path(a).attr({ stroke: "none" }),
							h = l.attrs,
							u = l.node,
							f = u.getElementsByTagName(c)[0]; return h.src = i, l.X = h.x = r, l.Y = h.y = n, l.W = h.width = o, l.H = h.height = s, h.path = a, l.type = "image", f.parentNode == u && u.removeChild(f), f.rotate = !0, f.src = i, f.type = "tile", l._.fillpos = [r, n], l._.fillsize = [o, s], u.appendChild(f), B(l, 1, 1, 0, 0, 0), l }, t._engine.text = function(e, r, n, s) { var a = D("shape"),
							l = D("path"),
							c = D("textpath");
						r = r || 0, n = n || 0, s = s || "", l.v = t.format("m{0},{1}l{2},{1}", o(r * b), o(n * b), o(r * b) + 1), l.textpathok = !0, c.string = i(s), c.on = !0, a.style.cssText = x, a.coordsize = b + d + b, a.coordorigin = "0 0"; var h = new E(a, e),
							u = { fill: "#000", stroke: "none", font: t._availableAttrs.font, text: s };
						h.shape = a, h.path = l, h.textpath = c, h.type = "text", h.attrs.text = i(s), h.attrs.x = r, h.attrs.y = n, h.attrs.w = 1, h.attrs.h = 1, S(h, u), a.appendChild(c), a.appendChild(l), e.canvas.appendChild(a); var f = D("skew"); return f.on = !0, a.appendChild(f), h.skew = f, h.transform(p), h }, t._engine.setSize = function(e, i) { var r = this.canvas.style; return this.width = e, this.height = i, e == +e && (e += "px"), i == +i && (i += "px"), r.width = e, r.height = i, r.clip = "rect(0 " + e + " " + i + " 0)", this._viewBox && t._engine.setViewBox.apply(this, this._viewBox), this }, t._engine.setViewBox = function(e, i, r, n, o) { t.eve("raphael.setViewBox", this, this._viewBox, [e, i, r, n, o]); var s, a, l = this.getSize(),
							c = l.width,
							h = l.height; return o && (s = h / n, a = c / r, r * s < c && (e -= (c - r * s) / 2 / s), n * a < h && (i -= (h - n * a) / 2 / a)), this._viewBox = [e, i, r, n, !!o], this._viewBoxShift = { dx: -e, dy: -i, scale: l }, this.forEach(function(t) { t.transform("...") }), this }; var D;
					t._engine.initWin = function(t) { var e = t.document;
						e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)"); try {!e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), D = function(t) { return e.createElement("<rvml:" + t + ' class="rvml">') } } catch(i) { D = function(t) { return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">') } } }, t._engine.initWin(t._g.win), t._engine.create = function() { var e = t._getContainer.apply(0, arguments),
							i = e.container,
							r = e.height,
							n = e.width,
							o = e.x,
							s = e.y; if(!i) throw new Error("VML container not found."); var a = new t._Paper,
							l = a.canvas = t._g.doc.createElement("div"),
							c = l.style; return o = o || 0, s = s || 0, n = n || 512, r = r || 342, a.width = n, a.height = r, n == +n && (n += "px"), r == +r && (r += "px"), a.coordsize = 1e3 * b + d + 1e3 * b, a.coordorigin = "0 0", a.span = t._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(a.span), c.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", n, r), 1 == i ? (t._g.doc.body.appendChild(l), c.left = o + "px", c.top = s + "px", c.position = "absolute") : i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l), a.renderfix = function() {}, a }, t.prototype.clear = function() { t.eve("raphael.clear", this), this.canvas.innerHTML = p, this.span = t._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null }, t.prototype.remove = function() { t.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas); for(var e in this) this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null; return !0 }; var L = t.st; for(var I in $) $[e](I) && !L[e](I) && (L[I] = function(t) { return function() { var e = arguments; return this.forEach(function(i) { i[t].apply(i, e) }) } }(I)) } }.apply(e, r), !(void 0 !== n && (t.exports = n)) }])
	})
}, , , , , function(t, e, i) { i(21), i(54), window.layPage = i(55), i(53), i(20), i(22) }], [112]);