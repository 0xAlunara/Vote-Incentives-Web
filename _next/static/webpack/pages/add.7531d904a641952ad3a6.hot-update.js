webpackHotUpdate_N_E("pages/add",{

/***/ "./stores/incentivesStore.js":
/*!***********************************!*\
  !*** ./stores/incentivesStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! async */ "./node_modules/async/dist/async.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./stores/constants/constants.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _abis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./abis */ "./stores/abis/abis.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ */ "./stores/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./utils/utils.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");

var Store = function Store(dispatcher, emitter) {
  var _this = this;

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Store);

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "getStore", function (index) {
    return _this.store[index];
  });

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "setStore", function (obj) {
    _this.store = _objectSpread(_objectSpread({}, _this.store), obj);
    console.log(_this.store);
    return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["STORE_UPDATED"]);
  });

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "configure", /*#__PURE__*/function () {
    var _ref = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(payload) {
      var web3, gauges, votes;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getWeb3Provider();

            case 2:
              web3 = _context.sent;

              if (web3) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", null);

            case 5:
              _context.next = 7;
              return _this._getGauges(web3);

            case 7:
              gauges = _context.sent;

              _this.setStore({
                gauges: gauges,
                configured: true
              });

              _context.next = 11;
              return _this._getVotes(web3);

            case 11:
              votes = _context.sent;

              _this.setStore({
                votes: votes
              });

              _this.dispatcher.dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_7__["GET_INCENTIVES_BALANCES"]
              });

              _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["INCENTIVES_CONFIGURED"]);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getVotes", /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(web3) {
      var votesSourceContract, votesBriberyContract, nVotes, arr, promises, result;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              votesSourceContract = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["VOTE_SOURCE_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["VOTE_SOURCE_ADDRESS"]);
              votesBriberyContract = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["VOTE_BRIBERY_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["VOTE_BRIBERY_ADDRESS"]);
              _context2.next = 5;
              return votesSourceContract.methods.votesLength().call();

            case 5:
              nVotes = _context2.sent;
              arr = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(parseInt(nVotes)).keys());
              promises = arr.map(function (index) {
                return new Promise(function (resolve, reject) {
                  var voteInfo = _this._getVoteInfo(web3, votesSourceContract, votesBriberyContract, index);

                  resolve(voteInfo);
                });
              });
              _context2.next = 10;
              return Promise.all(promises);

            case 10:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getVotes(".concat(web3, ")"));
              console.log(_context2.t0);
              console.log("------------------------------------");

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getVoteInfo", /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(web3, votesSourceContract, votesBriberyContract, index) {
      var _yield$Promise$all, _yield$Promise$all2, vote, rewardsPerVote;

      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Promise.all([votesSourceContract.methods.getVote(index).call(), votesBriberyContract.methods.rewards_per_vote(index).call()]);

            case 3:
              _yield$Promise$all = _context3.sent;
              _yield$Promise$all2 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
              vote = _yield$Promise$all2[0];
              rewardsPerVote = _yield$Promise$all2[1];
              return _context3.abrupt("return", {
                index: index,
                vote: vote,
                rewardsPerVote: rewardsPerVote
              });

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in 4(".concat(web3, ", ").concat(votesSourceContract, ", ").concat(votesBriberyContract, ", ").concat(index, ")"));
              console.log(_context3.t0);
              console.log("------------------------------------");
              return _context3.abrupt("return", _context3.t0);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }));

    return function (_x3, _x4, _x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getGauges", /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(web3) {
      var gaugeController, nGauges, arr, promises, result, res;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              gaugeController = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["GAUGE_CONTROLLER_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["GAUGE_CONTROLLER_ADDRESS"]);
              _context4.next = 4;
              return gaugeController.methods.n_gauges().call();

            case 4:
              nGauges = _context4.sent;
              arr = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(parseInt(nGauges)).keys());
              promises = arr.map(function (index) {
                return new Promise(function (resolve, reject) {
                  var gaugeInfo = _this._getGaugeInfo(web3, gaugeController, index);

                  resolve(gaugeInfo);
                });
              });
              _context4.next = 9;
              return Promise.all(promises);

            case 9:
              result = _context4.sent;
              res = result.filter(function (g) {
                return g !== null;
              });
              return _context4.abrupt("return", res);

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getGauges(".concat(web3, ")"));
              console.log(_context4.t0);
              console.log("------------------------------------");

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 14]]);
    }));

    return function (_x7) {
      return _ref4.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getGaugeInfo", /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(web3, gaugeController, index) {
      var gaugeAddress, _yield$Promise$all3, _yield$Promise$all4, gaugeType, gaugeWeight, name, lpTokenAddress, gauge, lpToken;

      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              index = 117;
              _context5.next = 4;
              return gaugeController.methods.gauges(index).call();

            case 4:
              gaugeAddress = _context5.sent;
              _context5.next = 7;
              return Promise.all([gaugeController.methods.gauge_types(gaugeAddress).call(), gaugeController.methods.gauge_relative_weight(gaugeAddress).call()]);

            case 7:
              _yield$Promise$all3 = _context5.sent;
              _yield$Promise$all4 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all3, 2);
              gaugeType = _yield$Promise$all4[0];
              gaugeWeight = _yield$Promise$all4[1];
              name = 'Unknown';
              lpTokenAddress = '';

              if (!['0', '5', '6'].includes(gaugeType)) {
                _context5.next = 34;
                break;
              }

              gauge = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["GAUGE_CONTRACT_ABI"], gaugeAddress);
              _context5.next = 17;
              return gauge.methods.lp_token().call();

            case 17:
              lpTokenAddress = _context5.sent;
              _context5.prev = 18;
              lpToken = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["ERC20_ABI"], lpTokenAddress);
              _context5.next = 22;
              return lpToken.methods.name().call();

            case 22:
              name = _context5.sent;
              _context5.next = 32;
              break;

            case 25:
              _context5.prev = 25;
              _context5.t0 = _context5["catch"](18);
              _context5.t1 = gaugeAddress;
              _context5.next = _context5.t1 === "0xc5aE4B5F86332e70f3205a8151Ee9eD9F71e0797" ? 30 : 32;
              break;

            case 30:
              name = "sUSD Synthetix";
              return _context5.abrupt("break", 32);

            case 32:
              _context5.next = 57;
              break;

            case 34:
              _context5.t2 = gaugeAddress;
              _context5.next = _context5.t2 === '0xb9C05B8EE41FDCbd9956114B3aF15834FDEDCb54' ? 37 : _context5.t2 === '0xfE1A3dD8b169fB5BF0D5dbFe813d956F39fF6310' ? 39 : _context5.t2 === '0xC48f4653dd6a9509De44c92beb0604BEA3AEe714' ? 41 : _context5.t2 === '0x6955a55416a06839309018A8B0cB72c4DDC11f15' ? 43 : _context5.t2 === '0x488E6ef919C2bB9de535C634a80afb0114DA8F62' ? 45 : _context5.t2 === '0xfDb129ea4b6f557b07BcDCedE54F665b7b6Bc281' ? 47 : _context5.t2 === '0x060e386eCfBacf42Aa72171Af9EFe17b3993fC4F' ? 49 : _context5.t2 === '0x6C09F6727113543Fd061a721da512B7eFCDD0267' ? 51 : _context5.t2 === '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168' ? 53 : _context5.t2 === '0xd8b712d29381748dB89c36BCa0138d7c75866ddF' ? 55 : 57;
              break;

            case 37:
              name = 'Curve.fi DAI/USDC (DAI+USDC)';
              return _context5.abrupt("break", 57);

            case 39:
              name = 'Curve.fi fUSDT/DAI/USDC';
              return _context5.abrupt("break", 57);

            case 41:
              name = 'Curve.fi amDAI/amUSDC/amUSDT';
              return _context5.abrupt("break", 57);

            case 43:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 57);

            case 45:
              name = 'Curve.fi amWBTC/renBTC';
              return _context5.abrupt("break", 57);

            case 47:
              name = 'Curve.fi WBTC/renBTC';
              return _context5.abrupt("break", 57);

            case 49:
              name = 'Curve USD-BTC-ETH';
              return _context5.abrupt("break", 57);

            case 51:
              name = 'Curve.fi wxDAI/USDC/USDT';
              return _context5.abrupt("break", 57);

            case 53:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 57);

            case 55:
              name = 'Curve.fi Factory USD Metapool: Magic Internet Money 3Pool';
              return _context5.abrupt("break", 57);

            case 57:
              return _context5.abrupt("return", {
                gaugeAddress: gaugeAddress,
                lpTokenAddress: lpTokenAddress,
                name: name,
                gaugeWeight: gaugeWeight,
                gaugeType: gaugeType,
                gaugeTypeName: _this._mapGaugeTypeToName(gaugeType),
                logo: '/unknown-logo.png'
              });

            case 60:
              _context5.prev = 60;
              _context5.t3 = _context5["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getGaugeInfo(".concat(web3, ", ").concat(gaugeController, ", ").concat(index, ")"));
              console.log(_context5.t3);
              console.log("------------------------------------");
              return _context5.abrupt("return", null);

            case 67:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 60], [18, 25]]);
    }));

    return function (_x8, _x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_mapGaugeTypeToName", function (gaugeType) {
    switch (gaugeType) {
      case '0':
      case '3':
      case '5':
      case '6':
        return 'Ethereum';

      case '1':
        return 'Fantom';

      case '2':
        return 'Polygon';

      case '4':
        return 'xDAI';

      default:
        return 'Unknown';
    }
  });

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getDefaultTokens", function () {
    return [{
      address: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
      symbol: 'FTM',
      decimals: 18
    }, {
      address: '0x2ba592f78db6436527729929aaf6c908497cb200',
      symbol: 'CREAM',
      decimals: 18
    }, {
      address: '0x090185f2135308bad17527004364ebcc2d37e5f6',
      symbol: 'SPELL',
      decimals: 18
    }, {
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      symbol: 'DAI',
      decimals: 18
    }, {
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      symbol: 'USDC',
      decimals: 6
    }, {
      address: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
      symbol: 'LDO',
      decimals: 18
    }, {
      address: '0xdbdb4d16eda451d0503b854cf79d55697f90c8df',
      symbol: 'ALCX',
      decimals: 18
    }, {
      address: '0x9D79d5B61De59D882ce90125b18F74af650acB93',
      symbol: 'NSBT',
      decimals: 6
    }, {
      address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
      symbol: 'MATIC',
      decimals: 18
    }, {
      address: '0x92e187a03b6cd19cb6af293ba17f2745fd2357d5',
      symbol: 'DUCK',
      decimals: 18
    }, {
      address: '0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26',
      symbol: 'OGN',
      decimals: 18
    }, {
      address: '0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2',
      symbol: 'MTA',
      decimals: 18
    }, {
      address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      symbol: 'CRV',
      decimals: 18
    }, {
      address: '0xcdf7028ceab81fa0c6971208e83fa7872994bee5',
      symbol: 'T',
      decimals: 18
    }, {
      address: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
      symbol: 'EURS',
      decimals: 2
    }, {
      address: '0x31429d1856aD1377A8A0079410B297e1a9e214c2',
      symbol: 'ANGLE',
      decimals: 18
    }, {
      address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
      symbol: 'CVX',
      decimals: 18
    }];
  });

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "getBalances", /*#__PURE__*/function () {
    var _ref6 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(payload) {
      var web3, account, gauges, myParam, urlParams, rewardTokenAddress, defaultTokens, includesToken, i, rewardToken, votes, voteRewards;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getWeb3Provider();

            case 2:
              web3 = _context7.sent;

              if (web3) {
                _context7.next = 5;
                break;
              }

              return _context7.abrupt("return", null);

            case 5:
              _context7.next = 7;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getStore('account');

            case 7:
              account = _context7.sent;

              if (account) {
                _context7.next = 10;
                break;
              }

              return _context7.abrupt("return", null);

            case 10:
              gauges = _this.getStore('gauges');

              if (!(!gauges || gauges.length === 0)) {
                _context7.next = 13;
                break;
              }

              return _context7.abrupt("return", null);

            case 13:
              _context7.next = 15;
              return _this._getCurrentGaugeVotes(web3, account, gauges);

            case 15:
              gauges = _context7.sent;
              myParam = null;

              if (payload.content && payload.content.address) {
                myParam = payload.content.address;
              } else {
                urlParams = new URLSearchParams(window.location.search);
                myParam = urlParams.get('reward');
              }

              rewardTokenAddress = myParam; // FTM, CREAM, MIM, DAI, USDC,

              defaultTokens = _this._getDefaultTokens(); //If it is a valid token, we add it to the search list

              if (!(rewardTokenAddress && web3.utils.isAddress(rewardTokenAddress))) {
                _context7.next = 35;
                break;
              }

              includesToken = false;
              i = 0;

            case 23:
              if (!(i < defaultTokens.length)) {
                _context7.next = 30;
                break;
              }

              if (!(defaultTokens[i].address.toLowerCase() === rewardTokenAddress.toLowerCase())) {
                _context7.next = 27;
                break;
              }

              includesToken = true;
              return _context7.abrupt("break", 30);

            case 27:
              i++;
              _context7.next = 23;
              break;

            case 30:
              if (includesToken) {
                _context7.next = 35;
                break;
              }

              _context7.next = 33;
              return _this._getTokenInfo(web3, rewardTokenAddress);

            case 33:
              rewardToken = _context7.sent;
              defaultTokens.push(rewardToken);

            case 35:
              async__WEBPACK_IMPORTED_MODULE_6__["default"].map(defaultTokens, /*#__PURE__*/function () {
                var _ref7 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(token, callback) {
                  var bribery;
                  return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return _this._getBribery(web3, account, gauges, defaultTokens, token.address);

                        case 2:
                          bribery = _context6.sent;

                          if (!callback) {
                            _context6.next = 7;
                            break;
                          }

                          callback(null, bribery);
                          _context6.next = 8;
                          break;

                        case 7:
                          return _context6.abrupt("return", bribery);

                        case 8:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x12, _x13) {
                  return _ref7.apply(this, arguments);
                };
              }(), function (err, briberies) {
                if (err) {
                  _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR"], err);
                }

                var flatBriberies = briberies.flat();
                var rewards = [];

                for (var j = 0; j < flatBriberies.length; j++) {
                  var bribery = flatBriberies[j];

                  for (var _i = 0; _i < bribery.length; _i++) {
                    var bribe = bribery[_i];
                    rewards.push({
                      activePeriod: bribe.activePeriod,
                      rewardsUnlock: bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(bribe.activePeriod).plus(_constants__WEBPACK_IMPORTED_MODULE_7__["WEEK"]).toFixed(0),
                      claimable: bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(bribe.claimable).div(Math.pow(10, bribe.rewardToken.decimals)).toFixed(bribe.rewardToken.decimals),
                      canClaim: bribe.canClaim,
                      hasClaimed: bribe.hasClaimed,
                      gauge: bribe.gauge,
                      tokensForBribe: bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(bribe.tokensForBribe).div(Math.pow(10, bribe.rewardToken.decimals)).toFixed(bribe.rewardToken.decimals),
                      rewardPerToken: bribe.rewardPerToken,
                      rewardToken: bribe.rewardToken
                    });
                  }
                }

                _this.setStore({
                  rewards: rewards
                });

                _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["INCENTIVES_BALANCES_RETURNED"], []);
              });
              votes = _this.getStore('votes');

              if (!(!votes || votes.length === 0)) {
                _context7.next = 39;
                break;
              }

              return _context7.abrupt("return", null);

            case 39:
              _context7.next = 41;
              return _this._getVoteBribery(web3, account, votes);

            case 41:
              voteRewards = _context7.sent;

              _this.setStore({
                voteRewards: voteRewards
              });

              _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["INCENTIVES_BALANCES_RETURNED"], []);

            case 44:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function (_x11) {
      return _ref6.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getTokenInfo", /*#__PURE__*/function () {
    var _ref8 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(web3, tokenAddress, getBalance) {
      var token, _yield$Promise$all5, _yield$Promise$all6, symbol, decimals, balance, account;

      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              token = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["ERC20_ABI"], tokenAddress);
              _context8.next = 4;
              return Promise.all([token.methods.symbol().call(), token.methods.decimals().call()]);

            case 4:
              _yield$Promise$all5 = _context8.sent;
              _yield$Promise$all6 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all5, 2);
              symbol = _yield$Promise$all6[0];
              decimals = _yield$Promise$all6[1];
              balance = 0;

              if (!getBalance) {
                _context8.next = 16;
                break;
              }

              _context8.next = 12;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getStore('account');

            case 12:
              account = _context8.sent;
              _context8.next = 15;
              return token.methods.balanceOf(account.address).call();

            case 15:
              balance = _context8.sent;

            case 16:
              return _context8.abrupt("return", {
                address: tokenAddress,
                symbol: symbol,
                decimals: parseInt(decimals),
                balance: balance
              });

            case 19:
              _context8.prev = 19;
              _context8.t0 = _context8["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getTokenInfo(".concat(web3, ", ").concat(tokenAddress, ")"));
              console.log(_context8.t0);
              console.log("------------------------------------");
              return _context8.abrupt("return", _context8.t0);

            case 26:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 19]]);
    }));

    return function (_x14, _x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getVoteBribery", /*#__PURE__*/function () {
    var _ref9 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11(web3, account, votes) {
      var voteBriberyContract, votesSourceContract, res;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              voteBriberyContract = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["VOTE_BRIBERY_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["VOTE_BRIBERY_ADDRESS"]);
              votesSourceContract = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["VOTE_SOURCE_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["VOTE_SOURCE_ADDRESS"]);
              _context11.next = 4;
              return Promise.all(votes.map( /*#__PURE__*/function () {
                var _ref10 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10(vote) {
                  var rewards;
                  return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          if (!(!vote.rewardsPerVote || vote.rewardsPerVote.length === 0)) {
                            _context10.next = 2;
                            break;
                          }

                          return _context10.abrupt("return", null);

                        case 2:
                          _context10.next = 4;
                          return Promise.all(vote.rewardsPerVote.map( /*#__PURE__*/function () {
                            var _ref11 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9(rewardTokenAddress) {
                              var _yield$Promise$all7, _yield$Promise$all8, estimateBribe, rewardAmount, voterState, hsaClaimed, rewardToken;

                              return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
                                while (1) {
                                  switch (_context9.prev = _context9.next) {
                                    case 0:
                                      _context9.next = 2;
                                      return Promise.all([voteBriberyContract.methods.estimate_bribe(vote.index, rewardTokenAddress, account.address).call(), voteBriberyContract.methods.reward_amount(vote.index, rewardTokenAddress).call(), votesSourceContract.methods.getVoterState(vote.index, account.address).call(), voteBriberyContract.methods.has_claimed(vote.index, rewardTokenAddress, account.address).call()]);

                                    case 2:
                                      _yield$Promise$all7 = _context9.sent;
                                      _yield$Promise$all8 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all7, 4);
                                      estimateBribe = _yield$Promise$all8[0];
                                      rewardAmount = _yield$Promise$all8[1];
                                      voterState = _yield$Promise$all8[2];
                                      hsaClaimed = _yield$Promise$all8[3];
                                      _context9.next = 10;
                                      return _this._getTokenInfo(web3, rewardTokenAddress);

                                    case 10:
                                      rewardToken = _context9.sent;
                                      return _context9.abrupt("return", {
                                        estimateBribe: bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(estimateBribe).div(Math.pow(10, rewardToken.decimals)).toFixed(rewardToken.decimals),
                                        rewardAmount: bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(rewardAmount).div(Math.pow(10, rewardToken.decimals)).toFixed(rewardToken.decimals),
                                        voterState: voterState,
                                        hsaClaimed: hsaClaimed,
                                        vote: vote,
                                        rewardToken: rewardToken
                                      });

                                    case 12:
                                    case "end":
                                      return _context9.stop();
                                  }
                                }
                              }, _callee9);
                            }));

                            return function (_x21) {
                              return _ref11.apply(this, arguments);
                            };
                          }()));

                        case 4:
                          rewards = _context10.sent;
                          return _context10.abrupt("return", rewards);

                        case 6:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function (_x20) {
                  return _ref10.apply(this, arguments);
                };
              }()));

            case 4:
              res = _context11.sent;
              return _context11.abrupt("return", res.filter(function (reward) {
                return reward != null;
              }).flat());

            case 6:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function (_x17, _x18, _x19) {
      return _ref9.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getBribery", /*#__PURE__*/function () {
    var _ref12 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee13(web3, account, gauges, rewardTokens, rewardTokenAddress) {
      var block, bribery, briberyV2, briberyTokensContract, _yield$Promise$all9, _yield$Promise$all10, gaugesPerRewardV2, briberyResultsPromisesV2, briberyResultsV2;

      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return web3.eth.getBlockNumber();

            case 2:
              block = _context13.sent;
              bribery = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["BRIBERY_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["BRIBERY_ADDRESS"]);
              briberyV2 = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["BRIBERY_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["BRIBERY_ADDRESS_V2"]);
              briberyTokensContract = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["BRIBERY_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["BRIBERY_TOKENS_ADDRESS_V2"]); // For V2 call gauges_per_reward.
              // foreach of those, we get the user's reward only. no looping through dead gauges anymore.

              _context13.next = 8;
              return Promise.all([briberyV2.methods.gauges_per_reward(rewardTokenAddress).call()]);

            case 8:
              _yield$Promise$all9 = _context13.sent;
              _yield$Promise$all10 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all9, 1);
              gaugesPerRewardV2 = _yield$Promise$all10[0];
              briberyResultsPromisesV2 = [];

              if (gaugesPerRewardV2.length > 0) {
                briberyResultsPromisesV2 = gaugesPerRewardV2.map( /*#__PURE__*/function () {
                  var _ref13 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(gauge) {
                    var _yield$Promise$all11, _yield$Promise$all12, activePeriod, claimable, lastUserClaim, tokensForBribe, rewardPerToken;

                    return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            _context12.next = 2;
                            return Promise.all([briberyV2.methods.active_period(gauge, rewardTokenAddress).call(), briberyV2.methods.claimable(account.address, gauge, rewardTokenAddress).call(), briberyV2.methods.last_user_claim(account.address, gauge, rewardTokenAddress).call(), briberyTokensContract.methods.tokens_for_bribe(account.address, gauge, rewardTokenAddress).call(), briberyV2.methods.reward_per_token(gauge, rewardTokenAddress).call()]);

                          case 2:
                            _yield$Promise$all11 = _context12.sent;
                            _yield$Promise$all12 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all11, 5);
                            activePeriod = _yield$Promise$all12[0];
                            claimable = _yield$Promise$all12[1];
                            lastUserClaim = _yield$Promise$all12[2];
                            tokensForBribe = _yield$Promise$all12[3];
                            rewardPerToken = _yield$Promise$all12[4];
                            return _context12.abrupt("return", {
                              version: 2,
                              claimable: claimable,
                              lastUserClaim: lastUserClaim,
                              activePeriod: activePeriod,
                              tokensForBribe: tokensForBribe,
                              rewardPerToken: rewardPerToken,
                              canClaim: bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(block).lt(bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(activePeriod).plus(_constants__WEBPACK_IMPORTED_MODULE_7__["WEEK"])),
                              hasClaimed: bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(lastUserClaim).eq(activePeriod),
                              gauge: gauges.filter(function (g) {
                                return g.gaugeAddress.toLowerCase() === gauge.toLowerCase();
                              })[0],
                              rewardToken: rewardTokens.filter(function (r) {
                                return r.address.toLowerCase() === rewardTokenAddress.toLowerCase();
                              })[0]
                            });

                          case 10:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));

                  return function (_x27) {
                    return _ref13.apply(this, arguments);
                  };
                }());
              }

              _context13.next = 15;
              return Promise.all(briberyResultsPromisesV2);

            case 15:
              briberyResultsV2 = _context13.sent;
              return _context13.abrupt("return", [briberyResultsV2]);

            case 17:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function (_x22, _x23, _x24, _x25, _x26) {
      return _ref12.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_getCurrentGaugeVotes", /*#__PURE__*/function () {
    var _ref14 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee14(web3, account, gauges) {
      var gaugeController, userVoteSlopes, i;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              gaugeController = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["GAUGE_CONTROLLER_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["GAUGE_CONTROLLER_ADDRESS"]);
              _context14.next = 3;
              return Promise.all(gauges.map(function (gauge) {
                return gaugeController.methods.vote_user_slopes(account.address, gauge.gaugeAddress).call();
              }));

            case 3:
              userVoteSlopes = _context14.sent;

              for (i = 0; i < gauges.length; i++) {
                gauges[i].votes = userVoteSlopes[i];
                gauges[i].votes.userVoteSlopeAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(userVoteSlopes[i].slope).div(Math.pow(10, 10)).toFixed(10);
                gauges[i].votes.userVoteSlopePercent = bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(userVoteSlopes[i].power).div(100).toFixed(2);
              }

              return _context14.abrupt("return", gauges);

            case 6:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    return function (_x28, _x29, _x30) {
      return _ref14.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "claimReward", /*#__PURE__*/function () {
    var _ref15 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee15(payload) {
      var account, web3, reward;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              account = ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getStore('account');

              if (account) {
                _context15.next = 3;
                break;
              }

              return _context15.abrupt("return", false);

            case 3:
              _context15.next = 5;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getWeb3Provider();

            case 5:
              web3 = _context15.sent;

              if (web3) {
                _context15.next = 8;
                break;
              }

              return _context15.abrupt("return", false);

            case 8:
              reward = payload.content.reward;

              _this._callClaimReward(web3, account, reward.gauge.gaugeAddress, reward.rewardToken.address, reward.version, function (err, res) {
                if (err) {
                  return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR"], err);
                }

                return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["REWARD_CLAIMED"], res);
              });

            case 10:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    return function (_x31) {
      return _ref15.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_callClaimReward", /*#__PURE__*/function () {
    var _ref16 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee16(web3, account, gauge, rewardToken, version, callback) {
      var address, bribery, gasPrice;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              address = _constants__WEBPACK_IMPORTED_MODULE_7__["BRIBERY_ADDRESS_V2"];

              if (version === 1) {
                address = _constants__WEBPACK_IMPORTED_MODULE_7__["BRIBERY_ADDRESS"];
              }

              bribery = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["BRIBERY_ABI"], address);
              _context16.next = 5;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getGasPrice();

            case 5:
              gasPrice = _context16.sent;

              _this._callContractWait(web3, bribery, 'claim_reward', [gauge, rewardToken], account, gasPrice, _constants__WEBPACK_IMPORTED_MODULE_7__["GET_INCENTIVES_BALANCES"], {}, callback);

            case 7:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    return function (_x32, _x33, _x34, _x35, _x36, _x37) {
      return _ref16.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "searchToken", /*#__PURE__*/function () {
    var _ref17 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee17(payload) {
      var web3, address, token;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getWeb3Provider();

            case 2:
              web3 = _context17.sent;

              if (web3) {
                _context17.next = 5;
                break;
              }

              return _context17.abrupt("return", false);

            case 5:
              address = payload.content.address;
              _context17.prev = 6;
              _context17.next = 9;
              return _this._getTokenInfo(web3, address, true);

            case 9:
              token = _context17.sent;
              return _context17.abrupt("return", _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["SEARCH_TOKEN_RETURNED"], token));

            case 13:
              _context17.prev = 13;
              _context17.t0 = _context17["catch"](6);
              console.log(_context17.t0);
              return _context17.abrupt("return", _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR"], _context17.t0));

            case 17:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, null, [[6, 13]]);
    }));

    return function (_x38) {
      return _ref17.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "addReward", /*#__PURE__*/function () {
    var _ref18 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee18(payload) {
      var account, web3, _payload$content, rewardToken, rewardAmount, gauge, sendAmount;

      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              account = ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getStore('account');

              if (account) {
                _context18.next = 3;
                break;
              }

              return _context18.abrupt("return", false);

            case 3:
              _context18.next = 5;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getWeb3Provider();

            case 5:
              web3 = _context18.sent;

              if (web3) {
                _context18.next = 8;
                break;
              }

              return _context18.abrupt("return", false);

            case 8:
              _payload$content = payload.content, rewardToken = _payload$content.rewardToken, rewardAmount = _payload$content.rewardAmount, gauge = _payload$content.gauge;
              sendAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(rewardAmount).times(Math.pow(10, rewardToken.decimals)).toFixed(0);

              _this._checkAllowance(web3, rewardToken.address, account.address, _constants__WEBPACK_IMPORTED_MODULE_7__["BRIBERY_ADDRESS_V2"], sendAmount, function (err) {
                if (err) {
                  return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR"], err);
                }

                _this._callAddReward(web3, account, gauge.gaugeAddress, rewardToken.address, sendAmount, function (err, res) {
                  if (err) {
                    return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR"], err);
                  }

                  return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ADD_REWARD_RETURNED"], res);
                });
              });

            case 11:
            case "end":
              return _context18.stop();
          }
        }
      }, _callee18);
    }));

    return function (_x39) {
      return _ref18.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_checkAllowance", /*#__PURE__*/function () {
    var _ref19 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee19(web3, token, owner, spender, spendingAmount, callback) {
      var tokenContract, allowance, gasPrice;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              tokenContract = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["ERC20_ABI"], token);
              _context19.next = 3;
              return tokenContract.methods.allowance(owner, spender).call();

            case 3:
              allowance = _context19.sent;

              if (!bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(spendingAmount).lte(allowance)) {
                _context19.next = 8;
                break;
              }

              callback();
              _context19.next = 12;
              break;

            case 8:
              _context19.next = 10;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getGasPrice();

            case 10:
              gasPrice = _context19.sent;

              _this._callContractWait(web3, tokenContract, 'approve', [spender, _constants__WEBPACK_IMPORTED_MODULE_7__["MAX_UINT256"]], {
                address: owner
              }, gasPrice, null, null, callback);

            case 12:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function (_x40, _x41, _x42, _x43, _x44, _x45) {
      return _ref19.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_callAddReward", /*#__PURE__*/function () {
    var _ref20 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee20(web3, account, gauge, rewardToken, rewardAmount, callback) {
      var bribery, gasPrice;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              bribery = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["BRIBERY_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["BRIBERY_ADDRESS_V2"]);
              _context20.next = 3;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getGasPrice();

            case 3:
              gasPrice = _context20.sent;

              _this._callContractWait(web3, bribery, 'add_reward_amount', [gauge, rewardToken, rewardAmount], account, gasPrice, _constants__WEBPACK_IMPORTED_MODULE_7__["GET_INCENTIVES_BALANCES"], {}, callback);

            case 5:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20);
    }));

    return function (_x46, _x47, _x48, _x49, _x50, _x51) {
      return _ref20.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "addVoteReward", /*#__PURE__*/function () {
    var _ref21 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee21(payload) {
      var account, web3, _payload$content2, rewardToken, rewardAmount, vote, sendAmount;

      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              account = ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getStore('account');

              if (account) {
                _context21.next = 3;
                break;
              }

              return _context21.abrupt("return", false);

            case 3:
              _context21.next = 5;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getWeb3Provider();

            case 5:
              web3 = _context21.sent;

              if (web3) {
                _context21.next = 8;
                break;
              }

              return _context21.abrupt("return", false);

            case 8:
              _payload$content2 = payload.content, rewardToken = _payload$content2.rewardToken, rewardAmount = _payload$content2.rewardAmount, vote = _payload$content2.vote;
              sendAmount = bignumber_js__WEBPACK_IMPORTED_MODULE_12___default()(rewardAmount).times(Math.pow(10, rewardToken.decimals)).toFixed(0);

              _this._checkAllowance(web3, rewardToken.address, account.address, _constants__WEBPACK_IMPORTED_MODULE_7__["VOTE_BRIBERY_ADDRESS"], sendAmount, function (err) {
                if (err) {
                  return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR"], err);
                }

                _this._callAddVoteReward(web3, account, vote.index, rewardToken.address, sendAmount, function (err, res) {
                  if (err) {
                    return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ERROR"], err);
                  }

                  return _this.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["ADD_VOTE_REWARD_RETURNED"], res);
                });
              });

            case 11:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21);
    }));

    return function (_x52) {
      return _ref21.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_callAddVoteReward", /*#__PURE__*/function () {
    var _ref22 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee22(web3, account, voteIndex, rewardToken, rewardAmount, callback) {
      var bribery, gasPrice;
      return C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee22$(_context22) {
        while (1) {
          switch (_context22.prev = _context22.next) {
            case 0:
              bribery = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["VOTE_BRIBERY_ABI"], _constants__WEBPACK_IMPORTED_MODULE_7__["VOTE_BRIBERY_ADDRESS"]);
              _context22.next = 3;
              return ___WEBPACK_IMPORTED_MODULE_10__["default"].accountStore.getGasPrice();

            case 3:
              gasPrice = _context22.sent;

              _this._callContractWait(web3, bribery, 'add_reward_amount', [voteIndex, rewardToken, rewardAmount], account, gasPrice, _constants__WEBPACK_IMPORTED_MODULE_7__["GET_INCENTIVES_BALANCES"], {}, callback);

            case 5:
            case "end":
              return _context22.stop();
          }
        }
      }, _callee22);
    }));

    return function (_x53, _x54, _x55, _x56, _x57, _x58) {
      return _ref22.apply(this, arguments);
    };
  }());

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_callContract", function (web3, contract, method, params, account, gasPrice, dispatchEvent, dispatchEventPayload, callback) {
    var _contract$methods;

    var context = _this;

    (_contract$methods = contract.methods)[method].apply(_contract$methods, Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(params)).send({
      from: account.address,
      gasPrice: web3.utils.toWei(gasPrice, 'gwei')
    }).on('transactionHash', function (hash) {
      context.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["TX_SUBMITTED"], hash);
      callback(null, hash);
    }).on('confirmation', function (confirmationNumber, receipt) {
      if (dispatchEvent && confirmationNumber == 0) {
        context.dispatcher.dispatch({
          type: dispatchEvent,
          content: dispatchEventPayload
        });
      }
    }).on('error', function (error) {
      if (!error.toString().includes('-32601')) {
        if (error.message) {
          return callback(error.message);
        }

        callback(error);
      }
    })["catch"](function (error) {
      if (!error.toString().includes('-32601')) {
        if (error.message) {
          return callback(error.message);
        }

        callback(error);
      }
    });
  });

  Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "_callContractWait", function (web3, contract, method, params, account, gasPrice, dispatchEvent, dispatchEventPayload, callback) {
    var _contract$methods2;

    var context = _this;

    (_contract$methods2 = contract.methods)[method].apply(_contract$methods2, Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(params)).send({
      from: account.address,
      gasPrice: web3.utils.toWei(gasPrice, 'gwei')
    }).on('transactionHash', function (hash) {
      console.log(hash); // context.emitter.emit(TX_SUBMITTED, hash);
    }).on('receipt', function (receipt) {
      context.emitter.emit(_constants__WEBPACK_IMPORTED_MODULE_7__["TX_SUBMITTED"], receipt.transactionHash);
      callback(null, receipt.transactionHash);

      if (dispatchEvent) {
        context.dispatcher.dispatch({
          type: dispatchEvent,
          content: dispatchEventPayload
        });
      }
    }).on('error', function (error) {
      if (!error.toString().includes('-32601')) {
        if (error.message) {
          return callback(error.message);
        }

        callback(error);
      }
    })["catch"](function (error) {
      if (!error.toString().includes('-32601')) {
        if (error.message) {
          return callback(error.message);
        }

        callback(error);
      }
    });
  });

  this.dispatcher = dispatcher;
  this.emitter = emitter;
  this.store = {
    configured: false,
    gauges: [],
    votes: [],
    rewards: [],
    voteRewards: []
  };
  dispatcher.register(function (payload) {
    switch (payload.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_7__["CONFIGURE_INCENTIVES"]:
        this.configure(payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_7__["GET_INCENTIVES_BALANCES"]:
        this.getBalances(payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_7__["CLAIM_REWARD"]:
        this.claimReward(payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_7__["SEARCH_TOKEN"]:
        this.searchToken(payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_7__["ADD_REWARD"]:
        this.addReward(payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_7__["ADD_VOTE_REWARD"]:
        this.addVoteReward(payload);
        break;

      default:
        {}
    }
  }.bind(this));
};

/* harmony default export */ __webpack_exports__["default"] = (Store);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL2luY2VudGl2ZXNTdG9yZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJTdG9yZSIsImRpc3BhdGNoZXIiLCJlbWl0dGVyIiwiaW5kZXgiLCJzdG9yZSIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwiU1RPUkVfVVBEQVRFRCIsInBheWxvYWQiLCJzdG9yZXMiLCJhY2NvdW50U3RvcmUiLCJnZXRXZWIzUHJvdmlkZXIiLCJ3ZWIzIiwiX2dldEdhdWdlcyIsImdhdWdlcyIsInNldFN0b3JlIiwiY29uZmlndXJlZCIsIl9nZXRWb3RlcyIsInZvdGVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMiLCJJTkNFTlRJVkVTX0NPTkZJR1VSRUQiLCJ2b3Rlc1NvdXJjZUNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJWT1RFX1NPVVJDRV9BQkkiLCJWT1RFX1NPVVJDRV9BRERSRVNTIiwidm90ZXNCcmliZXJ5Q29udHJhY3QiLCJWT1RFX0JSSUJFUllfQUJJIiwiVk9URV9CUklCRVJZX0FERFJFU1MiLCJtZXRob2RzIiwidm90ZXNMZW5ndGgiLCJjYWxsIiwiblZvdGVzIiwiYXJyIiwiQXJyYXkiLCJwYXJzZUludCIsImtleXMiLCJwcm9taXNlcyIsIm1hcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwidm90ZUluZm8iLCJfZ2V0Vm90ZUluZm8iLCJhbGwiLCJyZXN1bHQiLCJnZXRWb3RlIiwicmV3YXJkc19wZXJfdm90ZSIsInZvdGUiLCJyZXdhcmRzUGVyVm90ZSIsImdhdWdlQ29udHJvbGxlciIsIkdBVUdFX0NPTlRST0xMRVJfQUJJIiwiR0FVR0VfQ09OVFJPTExFUl9BRERSRVNTIiwibl9nYXVnZXMiLCJuR2F1Z2VzIiwiZ2F1Z2VJbmZvIiwiX2dldEdhdWdlSW5mbyIsInJlcyIsImZpbHRlciIsImciLCJnYXVnZUFkZHJlc3MiLCJnYXVnZV90eXBlcyIsImdhdWdlX3JlbGF0aXZlX3dlaWdodCIsImdhdWdlVHlwZSIsImdhdWdlV2VpZ2h0IiwibmFtZSIsImxwVG9rZW5BZGRyZXNzIiwiaW5jbHVkZXMiLCJnYXVnZSIsIkdBVUdFX0NPTlRSQUNUX0FCSSIsImxwX3Rva2VuIiwibHBUb2tlbiIsIkVSQzIwX0FCSSIsImdhdWdlVHlwZU5hbWUiLCJfbWFwR2F1Z2VUeXBlVG9OYW1lIiwibG9nbyIsImFkZHJlc3MiLCJzeW1ib2wiLCJkZWNpbWFscyIsImdldFN0b3JlIiwiYWNjb3VudCIsImxlbmd0aCIsIl9nZXRDdXJyZW50R2F1Z2VWb3RlcyIsIm15UGFyYW0iLCJjb250ZW50IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJyZXdhcmRUb2tlbkFkZHJlc3MiLCJkZWZhdWx0VG9rZW5zIiwiX2dldERlZmF1bHRUb2tlbnMiLCJ1dGlscyIsImlzQWRkcmVzcyIsImluY2x1ZGVzVG9rZW4iLCJpIiwidG9Mb3dlckNhc2UiLCJfZ2V0VG9rZW5JbmZvIiwicmV3YXJkVG9rZW4iLCJwdXNoIiwiYXN5bmMiLCJ0b2tlbiIsImNhbGxiYWNrIiwiX2dldEJyaWJlcnkiLCJicmliZXJ5IiwiZXJyIiwiYnJpYmVyaWVzIiwiRVJST1IiLCJmbGF0QnJpYmVyaWVzIiwiZmxhdCIsInJld2FyZHMiLCJqIiwiYnJpYmUiLCJhY3RpdmVQZXJpb2QiLCJyZXdhcmRzVW5sb2NrIiwiQmlnTnVtYmVyIiwicGx1cyIsIldFRUsiLCJ0b0ZpeGVkIiwiY2xhaW1hYmxlIiwiZGl2IiwiY2FuQ2xhaW0iLCJoYXNDbGFpbWVkIiwidG9rZW5zRm9yQnJpYmUiLCJyZXdhcmRQZXJUb2tlbiIsIklOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQiLCJfZ2V0Vm90ZUJyaWJlcnkiLCJ2b3RlUmV3YXJkcyIsInRva2VuQWRkcmVzcyIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwidm90ZUJyaWJlcnlDb250cmFjdCIsImVzdGltYXRlX2JyaWJlIiwicmV3YXJkX2Ftb3VudCIsImdldFZvdGVyU3RhdGUiLCJoYXNfY2xhaW1lZCIsImVzdGltYXRlQnJpYmUiLCJyZXdhcmRBbW91bnQiLCJ2b3RlclN0YXRlIiwiaHNhQ2xhaW1lZCIsInJld2FyZCIsInJld2FyZFRva2VucyIsImdldEJsb2NrTnVtYmVyIiwiYmxvY2siLCJCUklCRVJZX0FCSSIsIkJSSUJFUllfQUREUkVTUyIsImJyaWJlcnlWMiIsIkJSSUJFUllfQUREUkVTU19WMiIsImJyaWJlcnlUb2tlbnNDb250cmFjdCIsIkJSSUJFUllfVE9LRU5TX0FERFJFU1NfVjIiLCJnYXVnZXNfcGVyX3Jld2FyZCIsImdhdWdlc1BlclJld2FyZFYyIiwiYnJpYmVyeVJlc3VsdHNQcm9taXNlc1YyIiwiYWN0aXZlX3BlcmlvZCIsImxhc3RfdXNlcl9jbGFpbSIsInRva2Vuc19mb3JfYnJpYmUiLCJyZXdhcmRfcGVyX3Rva2VuIiwibGFzdFVzZXJDbGFpbSIsInZlcnNpb24iLCJsdCIsImVxIiwiciIsImJyaWJlcnlSZXN1bHRzVjIiLCJ2b3RlX3VzZXJfc2xvcGVzIiwidXNlclZvdGVTbG9wZXMiLCJ1c2VyVm90ZVNsb3BlQW1vdW50Iiwic2xvcGUiLCJ1c2VyVm90ZVNsb3BlUGVyY2VudCIsInBvd2VyIiwiX2NhbGxDbGFpbVJld2FyZCIsIlJFV0FSRF9DTEFJTUVEIiwiZ2V0R2FzUHJpY2UiLCJnYXNQcmljZSIsIl9jYWxsQ29udHJhY3RXYWl0IiwiU0VBUkNIX1RPS0VOX1JFVFVSTkVEIiwic2VuZEFtb3VudCIsInRpbWVzIiwiX2NoZWNrQWxsb3dhbmNlIiwiX2NhbGxBZGRSZXdhcmQiLCJBRERfUkVXQVJEX1JFVFVSTkVEIiwib3duZXIiLCJzcGVuZGVyIiwic3BlbmRpbmdBbW91bnQiLCJ0b2tlbkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwibHRlIiwiTUFYX1VJTlQyNTYiLCJfY2FsbEFkZFZvdGVSZXdhcmQiLCJBRERfVk9URV9SRVdBUkRfUkVUVVJORUQiLCJ2b3RlSW5kZXgiLCJjb250cmFjdCIsIm1ldGhvZCIsInBhcmFtcyIsImRpc3BhdGNoRXZlbnQiLCJkaXNwYXRjaEV2ZW50UGF5bG9hZCIsImNvbnRleHQiLCJzZW5kIiwiZnJvbSIsInRvV2VpIiwib24iLCJoYXNoIiwiVFhfU1VCTUlUVEVEIiwiY29uZmlybWF0aW9uTnVtYmVyIiwicmVjZWlwdCIsImVycm9yIiwidG9TdHJpbmciLCJtZXNzYWdlIiwidHJhbnNhY3Rpb25IYXNoIiwicmVnaXN0ZXIiLCJDT05GSUdVUkVfSU5DRU5USVZFUyIsImNvbmZpZ3VyZSIsImdldEJhbGFuY2VzIiwiQ0xBSU1fUkVXQVJEIiwiY2xhaW1SZXdhcmQiLCJTRUFSQ0hfVE9LRU4iLCJzZWFyY2hUb2tlbiIsIkFERF9SRVdBUkQiLCJhZGRSZXdhcmQiLCJBRERfVk9URV9SRVdBUkQiLCJhZGRWb3RlUmV3YXJkIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBMEJBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztJQUVNQyxLLEdBQ0osZUFBWUMsVUFBWixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQTs7QUFBQSx1TEF3Q3RCLFVBQUNDLEtBQUQsRUFBVztBQUNwQixXQUFPLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRCxLQUFYLENBQVA7QUFDRCxHQTFDZ0M7O0FBQUEsdUxBNEN0QixVQUFDRSxHQUFELEVBQVM7QUFDbEIsU0FBSSxDQUFDRCxLQUFMLG1DQUFrQixLQUFJLENBQUNBLEtBQXZCLEdBQWlDQyxHQUFqQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNILEtBQWpCO0FBQ0EsV0FBTyxLQUFJLENBQUNGLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkMsd0RBQWxCLENBQVA7QUFDRCxHQWhEZ0M7O0FBQUE7QUFBQSxrVkFrRHJC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QWlCbE4sT0FBakI7QUFDQTs7QUFDRixXQUFLbU4sdURBQUw7QUFDRSxhQUFLQyxXQUFMLENBQWlCcE4sT0FBakI7QUFDQTs7QUFDRixXQUFLcU4scURBQUw7QUFDRSxhQUFLQyxTQUFMLENBQWV0TixPQUFmO0FBQ0E7O0FBQ0YsV0FBS3VOLDBEQUFMO0FBQ0UsYUFBS0MsYUFBTCxDQUFtQnhOLE9BQW5CO0FBQ0E7O0FBQ0Y7QUFBUyxTQUNSO0FBcEJIO0FBc0JELEdBdkJELENBdUJFeU4sSUF2QkYsQ0F1Qk8sSUF2QlAsQ0FERjtBQTBCRCxDOztBQXF0QlluTyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGQuNzUzMWQ5MDRhNjQxOTUyYWQzYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3luYyBmcm9tICdhc3luYyc7XHJcbmltcG9ydCB7XHJcbiAgTUFYX1VJTlQyNTYsXHJcbiAgV0VFSyxcclxuICBFUlJPUixcclxuICBUWF9TVUJNSVRURUQsXHJcbiAgU1RPUkVfVVBEQVRFRCxcclxuICBJTkNFTlRJVkVTX1VQREFURUQsXHJcbiAgQ09ORklHVVJFX0lOQ0VOVElWRVMsXHJcbiAgSU5DRU5USVZFU19DT05GSUdVUkVELFxyXG4gIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTLFxyXG4gIElOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQsXHJcbiAgQlJJQkVSWV9BRERSRVNTLFxyXG4gIEJSSUJFUllfQUREUkVTU19WMixcclxuICBCUklCRVJZX1RPS0VOU19BRERSRVNTX1YyLFxyXG4gIEdBVUdFX0NPTlRST0xMRVJfQUREUkVTUyxcclxuICBWT1RFX0JSSUJFUllfQUREUkVTUyxcclxuICBWT1RFX1NPVVJDRV9BRERSRVNTLFxyXG4gIENMQUlNX1JFV0FSRCxcclxuICBSRVdBUkRfQ0xBSU1FRCxcclxuICBTRUFSQ0hfVE9LRU4sXHJcbiAgU0VBUkNIX1RPS0VOX1JFVFVSTkVELFxyXG4gIEFERF9SRVdBUkQsXHJcbiAgQUREX1JFV0FSRF9SRVRVUk5FRCxcclxuICBBRERfVk9URV9SRVdBUkQsXHJcbiAgQUREX1ZPVEVfUkVXQVJEX1JFVFVSTkVEXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuaW1wb3J0IHsgRVJDMjBfQUJJLCBCUklCRVJZX0FCSSwgR0FVR0VfQ09OVFJPTExFUl9BQkksIEdBVUdFX0NPTlRSQUNUX0FCSSwgVk9URV9TT1VSQ0VfQUJJLCBWT1RFX0JSSUJFUllfQUJJIH0gZnJvbSAnLi9hYmlzJztcclxuXHJcblxyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4vJztcclxuaW1wb3J0IHsgYm5EZWMgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSAnYmlnbnVtYmVyLmpzJztcclxuXHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKGRpc3BhdGNoZXIsIGVtaXR0ZXIpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XHJcbiAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xyXG5cclxuICAgIHRoaXMuc3RvcmUgPSB7XHJcbiAgICAgIGNvbmZpZ3VyZWQ6IGZhbHNlLFxyXG4gICAgICBnYXVnZXM6IFtdLFxyXG4gICAgICB2b3RlczogW10sXHJcbiAgICAgIHJld2FyZHM6IFtdLFxyXG4gICAgICB2b3RlUmV3YXJkczogW11cclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2hlci5yZWdpc3RlcihcclxuICAgICAgZnVuY3Rpb24gKHBheWxvYWQpIHtcclxuICAgICAgICBzd2l0Y2ggKHBheWxvYWQudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBDT05GSUdVUkVfSU5DRU5USVZFUzpcclxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmUocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBHRVRfSU5DRU5USVZFU19CQUxBTkNFUzpcclxuICAgICAgICAgICAgdGhpcy5nZXRCYWxhbmNlcyhwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIENMQUlNX1JFV0FSRDpcclxuICAgICAgICAgICAgdGhpcy5jbGFpbVJld2FyZChwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNFQVJDSF9UT0tFTjpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hUb2tlbihwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFERF9SRVdBUkQ6XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmV3YXJkKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQUREX1ZPVEVfUkVXQVJEOlxyXG4gICAgICAgICAgICB0aGlzLmFkZFZvdGVSZXdhcmQocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFN0b3JlID0gKGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZVtpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgc2V0U3RvcmUgPSAob2JqKSA9PiB7XHJcbiAgICB0aGlzLnN0b3JlID0geyAuLi50aGlzLnN0b3JlLCAuLi5vYmogfTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUpO1xyXG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KFNUT1JFX1VQREFURUQpO1xyXG4gIH07XHJcblxyXG4gIGNvbmZpZ3VyZSA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnYXVnZXMgPSBhd2FpdCB0aGlzLl9nZXRHYXVnZXMod2ViMyk7XHJcbiAgICB0aGlzLnNldFN0b3JlKHsgZ2F1Z2VzOiBnYXVnZXMsIGNvbmZpZ3VyZWQ6IHRydWUgfSlcclxuXHJcbiAgICBjb25zdCB2b3RlcyA9IGF3YWl0IHRoaXMuX2dldFZvdGVzKHdlYjMpO1xyXG4gICAgdGhpcy5zZXRTdG9yZSh7IHZvdGVzOiB2b3RlcyB9KVxyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTIH0pO1xyXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoSU5DRU5USVZFU19DT05GSUdVUkVEKTtcclxuICB9O1xyXG5cclxuICBfZ2V0Vm90ZXMgPSBhc3luYyAod2ViMykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgdm90ZXNTb3VyY2VDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChWT1RFX1NPVVJDRV9BQkksIFZPVEVfU09VUkNFX0FERFJFU1MpXHJcbiAgICAgIGNvbnN0IHZvdGVzQnJpYmVyeUNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFZPVEVfQlJJQkVSWV9BQkksIFZPVEVfQlJJQkVSWV9BRERSRVNTKVxyXG4gICAgICBjb25zdCBuVm90ZXMgPSBhd2FpdCB2b3Rlc1NvdXJjZUNvbnRyYWN0Lm1ldGhvZHMudm90ZXNMZW5ndGgoKS5jYWxsKClcclxuXHJcbiAgICAgIGNvbnN0IGFyciA9IFsuLi5BcnJheShwYXJzZUludChuVm90ZXMpKS5rZXlzKCldXHJcblxyXG4gICAgICBjb25zdCBwcm9taXNlcyA9IGFyci5tYXAoaW5kZXggPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2b3RlSW5mbyA9IHRoaXMuX2dldFZvdGVJbmZvKHdlYjMsIHZvdGVzU291cmNlQ29udHJhY3QsIHZvdGVzQnJpYmVyeUNvbnRyYWN0LCBpbmRleCk7XHJcbiAgICAgICAgICByZXNvbHZlKHZvdGVJbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIF9nZXRWb3Rlcygke3dlYjN9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldFZvdGVJbmZvID0gYXN5bmMgKHdlYjMsIHZvdGVzU291cmNlQ29udHJhY3QsIHZvdGVzQnJpYmVyeUNvbnRyYWN0LCBpbmRleCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW3ZvdGUsIHJld2FyZHNQZXJWb3RlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICB2b3Rlc1NvdXJjZUNvbnRyYWN0Lm1ldGhvZHMuZ2V0Vm90ZShpbmRleCkuY2FsbCgpLFxyXG4gICAgICAgIHZvdGVzQnJpYmVyeUNvbnRyYWN0Lm1ldGhvZHMucmV3YXJkc19wZXJfdm90ZShpbmRleCkuY2FsbCgpXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleCxcclxuICAgICAgICB2b3RlLFxyXG4gICAgICAgIHJld2FyZHNQZXJWb3RlLFxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIDQoJHt3ZWIzfSwgJHt2b3Rlc1NvdXJjZUNvbnRyYWN0fSwgJHt2b3Rlc0JyaWJlcnlDb250cmFjdH0sICR7aW5kZXh9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICByZXR1cm4gZXhcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRHYXVnZXMgPSBhc3luYyAod2ViMykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZ2F1Z2VDb250cm9sbGVyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEdBVUdFX0NPTlRST0xMRVJfQUJJLCBHQVVHRV9DT05UUk9MTEVSX0FERFJFU1MpXHJcbiAgICAgIGNvbnN0IG5HYXVnZXMgPSBhd2FpdCBnYXVnZUNvbnRyb2xsZXIubWV0aG9kcy5uX2dhdWdlcygpLmNhbGwoKVxyXG5cclxuICAgICAgY29uc3QgYXJyID0gWy4uLkFycmF5KHBhcnNlSW50KG5HYXVnZXMpKS5rZXlzKCldXHJcblxyXG4gICAgICBjb25zdCBwcm9taXNlcyA9IGFyci5tYXAoaW5kZXggPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBnYXVnZUluZm8gPSB0aGlzLl9nZXRHYXVnZUluZm8od2ViMywgZ2F1Z2VDb250cm9sbGVyLCBpbmRleCk7XHJcbiAgICAgICAgICByZXNvbHZlKGdhdWdlSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgICBjb25zdCByZXMgPSByZXN1bHQuZmlsdGVyKChnKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGcgIT09IG51bGxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiByZXNcclxuICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgY29uc29sZS5sb2coYGV4Y2VwdGlvbiB0aHJvd24gaW4gX2dldEdhdWdlcygke3dlYjN9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldEdhdWdlSW5mbyA9IGFzeW5jICh3ZWIzLCBnYXVnZUNvbnRyb2xsZXIsIGluZGV4KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpbmRleCA9IDExNztcclxuICAgICAgY29uc3QgZ2F1Z2VBZGRyZXNzID0gYXdhaXQgZ2F1Z2VDb250cm9sbGVyLm1ldGhvZHMuZ2F1Z2VzKGluZGV4KS5jYWxsKClcclxuICAgICAgY29uc3QgW2dhdWdlVHlwZSwgZ2F1Z2VXZWlnaHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGdhdWdlQ29udHJvbGxlci5tZXRob2RzLmdhdWdlX3R5cGVzKGdhdWdlQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgIGdhdWdlQ29udHJvbGxlci5tZXRob2RzLmdhdWdlX3JlbGF0aXZlX3dlaWdodChnYXVnZUFkZHJlc3MpLmNhbGwoKVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCBuYW1lID0gJ1Vua25vd24nXHJcbiAgICAgIGxldCBscFRva2VuQWRkcmVzcyA9ICcnXHJcblxyXG4gICAgICBpZihbJzAnLCAnNScsICc2J10uaW5jbHVkZXMoZ2F1Z2VUeXBlKSkge1xyXG4gICAgICAgIGNvbnN0IGdhdWdlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEdBVUdFX0NPTlRSQUNUX0FCSSwgZ2F1Z2VBZGRyZXNzKVxyXG4gICAgICAgIGxwVG9rZW5BZGRyZXNzID0gYXdhaXQgZ2F1Z2UubWV0aG9kcy5scF90b2tlbigpLmNhbGwoKVxyXG4gICAgICAgIC8vIGlmIG5vdCAwLCB3ZSBjYW50IGdldCBMUCB0b2tlbiBpbmZvIGNhdXNlIGl0IGlzIG9uIGEgZGlmZmVyZW50IGNoYWluXHJcbiAgICAgICAgLy8gdGhpcyBjYW4gc3RpbGwgZmFpbCBmb3Igb3B0aW1pc20gZ2F1Z2VzIGJlY2F1c2UgaXQncyBzdGlsbCAnbWFpbm5ldCcgZ2F1Z2V0eXBlIDAuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGxwVG9rZW4gPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoRVJDMjBfQUJJLCBscFRva2VuQWRkcmVzcylcclxuICAgICAgICAgIG5hbWUgPSBhd2FpdCBscFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICBzd2l0Y2ggKGdhdWdlQWRkcmVzcykge1xyXG4gICAgICAgICAgICBjYXNlIFwiMHhjNWFFNEI1Rjg2MzMyZTcwZjMyMDVhODE1MUVlOWVEOUY3MWUwNzk3XCI6XHJcbiAgICAgICAgICAgICAgbmFtZSA9IFwic1VTRCBTeW50aGV0aXhcIjtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL21hbnVhbGx5IG1hcCBnYXVnZSBuYW1lc1xyXG4gICAgICAgIHN3aXRjaCAoZ2F1Z2VBZGRyZXNzKSB7XHJcbiAgICAgICAgICBjYXNlICcweGI5QzA1QjhFRTQxRkRDYmQ5OTU2MTE0QjNhRjE1ODM0RkRFRENiNTQnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIERBSS9VU0RDIChEQUkrVVNEQyknXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhmRTFBM2REOGIxNjlmQjVCRjBENWRiRmU4MTNkOTU2RjM5ZkY2MzEwJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBmVVNEVC9EQUkvVVNEQydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweEM0OGY0NjUzZGQ2YTk1MDlEZTQ0YzkyYmViMDYwNEJFQTNBRWU3MTQnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIGFtREFJL2FtVVNEQy9hbVVTRFQnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHg2OTU1YTU1NDE2YTA2ODM5MzA5MDE4QThCMGNCNzJjNEREQzExZjE1JzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBVU0QtQlRDLUVUSCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweDQ4OEU2ZWY5MTlDMmJCOWRlNTM1QzYzNGE4MGFmYjAxMTREQThGNjInOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIGFtV0JUQy9yZW5CVEMnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhmRGIxMjllYTRiNmY1NTdiMDdCY0RDZWRFNTRGNjY1YjdiNkJjMjgxJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBXQlRDL3JlbkJUQydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweDA2MGUzODZlQ2ZCYWNmNDJBYTcyMTcxQWY5RUZlMTdiMzk5M2ZDNEYnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlIFVTRC1CVEMtRVRIJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4NkMwOUY2NzI3MTEzNTQzRmQwNjFhNzIxZGE1MTJCN2VGQ0REMDI2Nyc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgd3hEQUkvVVNEQy9VU0RUJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4RGVGZDhGZEQyMGUwZjM0MTE1QzcwMThDQ2ZiNjU1Nzk2RjZCMjE2OCc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgVVNELUJUQy1FVEgnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhkOGI3MTJkMjkzODE3NDhkQjg5YzM2QkNhMDEzOGQ3Yzc1ODY2ZGRGJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBGYWN0b3J5IFVTRCBNZXRhcG9vbDogTWFnaWMgSW50ZXJuZXQgTW9uZXkgM1Bvb2wnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2F1Z2VBZGRyZXNzOiBnYXVnZUFkZHJlc3MsXHJcbiAgICAgICAgbHBUb2tlbkFkZHJlc3M6IGxwVG9rZW5BZGRyZXNzLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgZ2F1Z2VXZWlnaHQ6IGdhdWdlV2VpZ2h0LFxyXG4gICAgICAgIGdhdWdlVHlwZTogZ2F1Z2VUeXBlLFxyXG4gICAgICAgIGdhdWdlVHlwZU5hbWU6IHRoaXMuX21hcEdhdWdlVHlwZVRvTmFtZShnYXVnZVR5cGUpLFxyXG4gICAgICAgIGxvZ286ICcvdW5rbm93bi1sb2dvLnBuZydcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhgZXhjZXB0aW9uIHRocm93biBpbiBfZ2V0R2F1Z2VJbmZvKCR7d2ViM30sICR7Z2F1Z2VDb250cm9sbGVyfSwgJHtpbmRleH0pYClcclxuICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbWFwR2F1Z2VUeXBlVG9OYW1lID0gKGdhdWdlVHlwZSkgPT4ge1xyXG4gICAgc3dpdGNoIChnYXVnZVR5cGUpIHtcclxuICAgICAgY2FzZSAnMCc6XHJcbiAgICAgIGNhc2UgJzMnOlxyXG4gICAgICBjYXNlICc1JzpcclxuICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgcmV0dXJuICdFdGhlcmV1bSdcclxuICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgcmV0dXJuICdGYW50b20nXHJcbiAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgIHJldHVybiAnUG9seWdvbidcclxuICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgcmV0dXJuICd4REFJJ1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnVW5rbm93bidcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXREZWZhdWx0VG9rZW5zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDRlMTUzNjFmZDZiNGJiNjA5ZmE2M2M4MWEyYmUxOWQ4NzM3MTc4NzAnLFxyXG4gICAgICAgIHN5bWJvbDogJ0ZUTScsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHgyYmE1OTJmNzhkYjY0MzY1Mjc3Mjk5MjlhYWY2YzkwODQ5N2NiMjAwJyxcclxuICAgICAgICBzeW1ib2w6ICdDUkVBTScsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHgwOTAxODVmMjEzNTMwOGJhZDE3NTI3MDA0MzY0ZWJjYzJkMzdlNWY2JyxcclxuICAgICAgICBzeW1ib2w6ICdTUEVMTCcsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg2YjE3NTQ3NGU4OTA5NGM0NGRhOThiOTU0ZWVkZWFjNDk1MjcxZDBmJyxcclxuICAgICAgICBzeW1ib2w6ICdEQUknLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4YTBiODY5OTFjNjIxOGIzNmMxZDE5ZDRhMmU5ZWIwY2UzNjA2ZWI0OCcsXHJcbiAgICAgICAgc3ltYm9sOiAnVVNEQycsXHJcbiAgICAgICAgZGVjaW1hbHM6IDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDVhOThmY2JlYTUxNmNmMDY4NTcyMTU3NzlmZDgxMmNhM2JlZjFiMzInLFxyXG4gICAgICAgIHN5bWJvbDogJ0xETycsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHhkYmRiNGQxNmVkYTQ1MWQwNTAzYjg1NGNmNzlkNTU2OTdmOTBjOGRmJyxcclxuICAgICAgICBzeW1ib2w6ICdBTENYJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDlENzlkNUI2MURlNTlEODgyY2U5MDEyNWIxOEY3NGFmNjUwYWNCOTMnLFxyXG4gICAgICAgIHN5bWJvbDogJ05TQlQnLFxyXG4gICAgICAgIGRlY2ltYWxzOiA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg3ZDFhZmE3YjcxOGZiODkzZGIzMGEzYWJjMGNmYzYwOGFhY2ZlYmIwJyxcclxuICAgICAgICBzeW1ib2w6ICdNQVRJQycsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg5MmUxODdhMDNiNmNkMTljYjZhZjI5M2JhMTdmMjc0NWZkMjM1N2Q1JyxcclxuICAgICAgICBzeW1ib2w6ICdEVUNLJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDgyMDdjMUZmQzVCNjgwNEY2MDI0MzIyQ2NGMzRGMjljMzU0MUFlMjYnLFxyXG4gICAgICAgIHN5bWJvbDogJ09HTicsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHhhM0JlRDRFMWM3NUQwMGZhNmY0RTVFNjkyMkRCNzI2MUI1RTlBY0QyJyxcclxuICAgICAgICBzeW1ib2w6ICdNVEEnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4ZDUzM2E5NDk3NDBiYjMzMDZkMTE5Y2M3NzdmYTkwMGJhMDM0Y2Q1MicsXHJcbiAgICAgICAgc3ltYm9sOiAnQ1JWJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGNkZjcwMjhjZWFiODFmYTBjNjk3MTIwOGU4M2ZhNzg3Mjk5NGJlZTUnLFxyXG4gICAgICAgIHN5bWJvbDogJ1QnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4ZGIyNWYyMTFhYjA1YjFjOTdkNTk1NTE2ZjQ1Nzk0NTI4YTgwN2FkOCcsXHJcbiAgICAgICAgc3ltYm9sOiAnRVVSUycsXHJcbiAgICAgICAgZGVjaW1hbHM6IDJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDMxNDI5ZDE4NTZhRDEzNzdBOEEwMDc5NDEwQjI5N2UxYTllMjE0YzInLFxyXG4gICAgICAgIHN5bWJvbDogJ0FOR0xFJyxcclxuICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg0ZTNGQkQ1NkNENTZjM2U3MmMxNDAzZTEwM2I0NURiOWRhNUI5RDJCJyxcclxuICAgICAgICBzeW1ib2w6ICdDVlgnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgfSxcclxuXHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBnZXRCYWxhbmNlcyA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRTdG9yZSgnYWNjb3VudCcpO1xyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnYXVnZXMgPSB0aGlzLmdldFN0b3JlKCdnYXVnZXMnKVxyXG4gICAgaWYoIWdhdWdlcyB8fCBnYXVnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgZ2F1Z2VzID0gYXdhaXQgdGhpcy5fZ2V0Q3VycmVudEdhdWdlVm90ZXMod2ViMywgYWNjb3VudCwgZ2F1Z2VzKVxyXG5cclxuICAgIGxldCBteVBhcmFtID0gbnVsbFxyXG5cclxuICAgIGlmKHBheWxvYWQuY29udGVudCAmJiBwYXlsb2FkLmNvbnRlbnQuYWRkcmVzcykge1xyXG4gICAgICBteVBhcmFtID0gcGF5bG9hZC5jb250ZW50LmFkZHJlc3NcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgIG15UGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdyZXdhcmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXdhcmRUb2tlbkFkZHJlc3MgPSBteVBhcmFtXHJcblxyXG4gICAgLy8gRlRNLCBDUkVBTSwgTUlNLCBEQUksIFVTREMsXHJcbiAgICBjb25zdCBkZWZhdWx0VG9rZW5zID0gdGhpcy5fZ2V0RGVmYXVsdFRva2VucygpXHJcblxyXG4gICAgLy9JZiBpdCBpcyBhIHZhbGlkIHRva2VuLCB3ZSBhZGQgaXQgdG8gdGhlIHNlYXJjaCBsaXN0XHJcbiAgICBpZihyZXdhcmRUb2tlbkFkZHJlc3MgJiYgd2ViMy51dGlscy5pc0FkZHJlc3MocmV3YXJkVG9rZW5BZGRyZXNzKSkge1xyXG4gICAgICBsZXQgaW5jbHVkZXNUb2tlbiA9IGZhbHNlXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkZWZhdWx0VG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYoZGVmYXVsdFRva2Vuc1tpXS5hZGRyZXNzLnRvTG93ZXJDYXNlKCkgPT09IHJld2FyZFRva2VuQWRkcmVzcy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICBpbmNsdWRlc1Rva2VuID0gdHJ1ZVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighaW5jbHVkZXNUb2tlbikge1xyXG4gICAgICAgIGNvbnN0IHJld2FyZFRva2VuID0gYXdhaXQgdGhpcy5fZ2V0VG9rZW5JbmZvKHdlYjMsIHJld2FyZFRva2VuQWRkcmVzcylcclxuICAgICAgICBkZWZhdWx0VG9rZW5zLnB1c2gocmV3YXJkVG9rZW4pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYy5tYXAoZGVmYXVsdFRva2VucywgYXN5bmMgKHRva2VuLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgICBjb25zdCBicmliZXJ5ID0gYXdhaXQgdGhpcy5fZ2V0QnJpYmVyeSh3ZWIzLCBhY2NvdW50LCBnYXVnZXMsIGRlZmF1bHRUb2tlbnMsIHRva2VuLmFkZHJlc3MpXHJcbiAgICAgIGlmKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYnJpYmVyeSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYnJpYmVyeVxyXG4gICAgICB9XHJcbiAgICB9LCAoZXJyLCBicmliZXJpZXMpID0+IHtcclxuICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycilcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGZsYXRCcmliZXJpZXMgPSBicmliZXJpZXMuZmxhdCgpXHJcbiAgICAgIGxldCByZXdhcmRzID0gW11cclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGZsYXRCcmliZXJpZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBsZXQgYnJpYmVyeSA9IGZsYXRCcmliZXJpZXNbal1cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYnJpYmVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IGJyaWJlID0gYnJpYmVyeVtpXVxyXG4gICAgICAgICAgcmV3YXJkcy5wdXNoKHtcclxuICAgICAgICAgICAgYWN0aXZlUGVyaW9kOiBicmliZS5hY3RpdmVQZXJpb2QsXHJcbiAgICAgICAgICAgIHJld2FyZHNVbmxvY2s6IEJpZ051bWJlcihicmliZS5hY3RpdmVQZXJpb2QpLnBsdXMoV0VFSykudG9GaXhlZCgwKSxcclxuICAgICAgICAgICAgY2xhaW1hYmxlOiBCaWdOdW1iZXIoYnJpYmUuY2xhaW1hYmxlKS5kaXYoMTAqKmJyaWJlLnJld2FyZFRva2VuLmRlY2ltYWxzKS50b0ZpeGVkKGJyaWJlLnJld2FyZFRva2VuLmRlY2ltYWxzKSxcclxuICAgICAgICAgICAgY2FuQ2xhaW06IGJyaWJlLmNhbkNsYWltLFxyXG4gICAgICAgICAgICBoYXNDbGFpbWVkOiBicmliZS5oYXNDbGFpbWVkLFxyXG4gICAgICAgICAgICBnYXVnZTogYnJpYmUuZ2F1Z2UsXHJcbiAgICAgICAgICAgIHRva2Vuc0ZvckJyaWJlOiBCaWdOdW1iZXIoYnJpYmUudG9rZW5zRm9yQnJpYmUpLmRpdigxMCoqYnJpYmUucmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQoYnJpYmUucmV3YXJkVG9rZW4uZGVjaW1hbHMpLFxyXG4gICAgICAgICAgICByZXdhcmRQZXJUb2tlbjogYnJpYmUucmV3YXJkUGVyVG9rZW4sXHJcbiAgICAgICAgICAgIHJld2FyZFRva2VuOiBicmliZS5yZXdhcmRUb2tlblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0U3RvcmUoeyByZXdhcmRzOiByZXdhcmRzIH0pXHJcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KElOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQsIFtdKTtcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IHZvdGVzID0gdGhpcy5nZXRTdG9yZSgndm90ZXMnKVxyXG4gICAgaWYoIXZvdGVzIHx8IHZvdGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZvdGVSZXdhcmRzID0gYXdhaXQgdGhpcy5fZ2V0Vm90ZUJyaWJlcnkod2ViMywgYWNjb3VudCwgdm90ZXMpXHJcbiAgICB0aGlzLnNldFN0b3JlKHsgdm90ZVJld2FyZHM6IHZvdGVSZXdhcmRzIH0pXHJcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdChJTkNFTlRJVkVTX0JBTEFOQ0VTX1JFVFVSTkVELCBbXSk7XHJcbiAgfTtcclxuXHJcbiAgX2dldFRva2VuSW5mbyA9IGFzeW5jICh3ZWIzLCB0b2tlbkFkZHJlc3MsIGdldEJhbGFuY2UpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEVSQzIwX0FCSSwgdG9rZW5BZGRyZXNzKVxyXG5cclxuICAgICAgY29uc3QgW3N5bWJvbCwgZGVjaW1hbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHRva2VuLm1ldGhvZHMuc3ltYm9sKCkuY2FsbCgpLFxyXG4gICAgICAgIHRva2VuLm1ldGhvZHMuZGVjaW1hbHMoKS5jYWxsKClcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgYmFsYW5jZSA9IDBcclxuICAgICAgaWYoZ2V0QmFsYW5jZSkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFN0b3JlKCdhY2NvdW50Jyk7XHJcbiAgICAgICAgYmFsYW5jZSA9IGF3YWl0IHRva2VuLm1ldGhvZHMuYmFsYW5jZU9mKGFjY291bnQuYWRkcmVzcykuY2FsbCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkcmVzczogdG9rZW5BZGRyZXNzLFxyXG4gICAgICAgIHN5bWJvbCxcclxuICAgICAgICBkZWNpbWFsczogcGFyc2VJbnQoZGVjaW1hbHMpLFxyXG4gICAgICAgIGJhbGFuY2VcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgY29uc29sZS5sb2coYGV4Y2VwdGlvbiB0aHJvd24gaW4gX2dldFRva2VuSW5mbygke3dlYjN9LCAke3Rva2VuQWRkcmVzc30pYClcclxuICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIHJldHVybiBleFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldFZvdGVCcmliZXJ5ID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIHZvdGVzKSA9PiB7XHJcbiAgICBjb25zdCB2b3RlQnJpYmVyeUNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFZPVEVfQlJJQkVSWV9BQkksIFZPVEVfQlJJQkVSWV9BRERSRVNTKVxyXG4gICAgY29uc3Qgdm90ZXNTb3VyY2VDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChWT1RFX1NPVVJDRV9BQkksIFZPVEVfU09VUkNFX0FERFJFU1MpXHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwodm90ZXMubWFwKGFzeW5jICh2b3RlKSA9PiB7XHJcblxyXG4gICAgICBpZighdm90ZS5yZXdhcmRzUGVyVm90ZSB8fCB2b3RlLnJld2FyZHNQZXJWb3RlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJld2FyZHMgPSBhd2FpdCBQcm9taXNlLmFsbCh2b3RlLnJld2FyZHNQZXJWb3RlLm1hcChhc3luYyAocmV3YXJkVG9rZW5BZGRyZXNzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBbZXN0aW1hdGVCcmliZSwgcmV3YXJkQW1vdW50LCB2b3RlclN0YXRlLCBoc2FDbGFpbWVkXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdm90ZUJyaWJlcnlDb250cmFjdC5tZXRob2RzLmVzdGltYXRlX2JyaWJlKHZvdGUuaW5kZXgsIHJld2FyZFRva2VuQWRkcmVzcywgYWNjb3VudC5hZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICAgIHZvdGVCcmliZXJ5Q29udHJhY3QubWV0aG9kcy5yZXdhcmRfYW1vdW50KHZvdGUuaW5kZXgsIHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgICB2b3Rlc1NvdXJjZUNvbnRyYWN0Lm1ldGhvZHMuZ2V0Vm90ZXJTdGF0ZSh2b3RlLmluZGV4LCBhY2NvdW50LmFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgICAgdm90ZUJyaWJlcnlDb250cmFjdC5tZXRob2RzLmhhc19jbGFpbWVkKHZvdGUuaW5kZXgsIHJld2FyZFRva2VuQWRkcmVzcywgYWNjb3VudC5hZGRyZXNzKS5jYWxsKClcclxuICAgICAgICAgIF0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJld2FyZFRva2VuID0gYXdhaXQgdGhpcy5fZ2V0VG9rZW5JbmZvKHdlYjMsIHJld2FyZFRva2VuQWRkcmVzcylcclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlc3RpbWF0ZUJyaWJlOiBCaWdOdW1iZXIoZXN0aW1hdGVCcmliZSkuZGl2KDEwKipyZXdhcmRUb2tlbi5kZWNpbWFscykudG9GaXhlZChyZXdhcmRUb2tlbi5kZWNpbWFscyksXHJcbiAgICAgICAgICAgIHJld2FyZEFtb3VudDogQmlnTnVtYmVyKHJld2FyZEFtb3VudCkuZGl2KDEwKipyZXdhcmRUb2tlbi5kZWNpbWFscykudG9GaXhlZChyZXdhcmRUb2tlbi5kZWNpbWFscyksXHJcbiAgICAgICAgICAgIHZvdGVyU3RhdGUsXHJcbiAgICAgICAgICAgIGhzYUNsYWltZWQsXHJcbiAgICAgICAgICAgIHZvdGUsXHJcbiAgICAgICAgICAgIHJld2FyZFRva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG5cclxuICAgICAgcmV0dXJuIHJld2FyZHNcclxuICAgIH0pKVxyXG5cclxuICAgIHJldHVybiByZXMuZmlsdGVyKChyZXdhcmQpID0+IHtcclxuICAgICAgcmV0dXJuIHJld2FyZCAhPSBudWxsXHJcbiAgICB9KS5mbGF0KClcclxuICB9XHJcblxyXG4gIF9nZXRCcmliZXJ5ID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIGdhdWdlcywgcmV3YXJkVG9rZW5zLCByZXdhcmRUb2tlbkFkZHJlc3MpID0+IHtcclxuICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgd2ViMy5ldGguZ2V0QmxvY2tOdW1iZXIoKTtcclxuXHJcbiAgICBjb25zdCBicmliZXJ5ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEJSSUJFUllfQUJJLCBCUklCRVJZX0FERFJFU1MpXHJcbiAgICBjb25zdCBicmliZXJ5VjIgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQlJJQkVSWV9BQkksIEJSSUJFUllfQUREUkVTU19WMilcclxuICAgIGNvbnN0IGJyaWJlcnlUb2tlbnNDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChCUklCRVJZX0FCSSwgQlJJQkVSWV9UT0tFTlNfQUREUkVTU19WMilcclxuXHJcbiAgICAvLyBGb3IgVjIgY2FsbCBnYXVnZXNfcGVyX3Jld2FyZC5cclxuICAgIC8vIGZvcmVhY2ggb2YgdGhvc2UsIHdlIGdldCB0aGUgdXNlcidzIHJld2FyZCBvbmx5LiBubyBsb29waW5nIHRocm91Z2ggZGVhZCBnYXVnZXMgYW55bW9yZS5cclxuICAgIGNvbnN0IFtnYXVnZXNQZXJSZXdhcmRWMl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgIGJyaWJlcnlWMi5tZXRob2RzLmdhdWdlc19wZXJfcmV3YXJkKHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpXHJcbiAgICBdKTtcclxuXHJcbiAgICBsZXQgYnJpYmVyeVJlc3VsdHNQcm9taXNlc1YyID0gW11cclxuICAgIGlmKGdhdWdlc1BlclJld2FyZFYyLmxlbmd0aCA+IDApIHtcclxuICAgICAgYnJpYmVyeVJlc3VsdHNQcm9taXNlc1YyID0gZ2F1Z2VzUGVyUmV3YXJkVjIubWFwKGFzeW5jIChnYXVnZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBbYWN0aXZlUGVyaW9kLCBjbGFpbWFibGUsIGxhc3RVc2VyQ2xhaW0sIHRva2Vuc0ZvckJyaWJlLCByZXdhcmRQZXJUb2tlbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICBicmliZXJ5VjIubWV0aG9kcy5hY3RpdmVfcGVyaW9kKGdhdWdlLCByZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgIGJyaWJlcnlWMi5tZXRob2RzLmNsYWltYWJsZShhY2NvdW50LmFkZHJlc3MsIGdhdWdlLCByZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgIGJyaWJlcnlWMi5tZXRob2RzLmxhc3RfdXNlcl9jbGFpbShhY2NvdW50LmFkZHJlc3MsIGdhdWdlLCByZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgIGJyaWJlcnlUb2tlbnNDb250cmFjdC5tZXRob2RzLnRva2Vuc19mb3JfYnJpYmUoYWNjb3VudC5hZGRyZXNzLCBnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICBicmliZXJ5VjIubWV0aG9kcy5yZXdhcmRfcGVyX3Rva2VuKGdhdWdlLCByZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZlcnNpb246IDIsXHJcbiAgICAgICAgICBjbGFpbWFibGUsXHJcbiAgICAgICAgICBsYXN0VXNlckNsYWltLFxyXG4gICAgICAgICAgYWN0aXZlUGVyaW9kLFxyXG4gICAgICAgICAgdG9rZW5zRm9yQnJpYmUsXHJcbiAgICAgICAgICByZXdhcmRQZXJUb2tlbixcclxuICAgICAgICAgIGNhbkNsYWltOiBCaWdOdW1iZXIoYmxvY2spLmx0KEJpZ051bWJlcihhY3RpdmVQZXJpb2QpLnBsdXMoV0VFSykpLFxyXG4gICAgICAgICAgaGFzQ2xhaW1lZDogQmlnTnVtYmVyKGxhc3RVc2VyQ2xhaW0pLmVxKGFjdGl2ZVBlcmlvZCksXHJcbiAgICAgICAgICBnYXVnZTogZ2F1Z2VzLmZpbHRlcigoZykgPT4geyByZXR1cm4gZy5nYXVnZUFkZHJlc3MudG9Mb3dlckNhc2UoKSA9PT0gZ2F1Z2UudG9Mb3dlckNhc2UoKSB9KVswXSxcclxuICAgICAgICAgIHJld2FyZFRva2VuOiByZXdhcmRUb2tlbnMuZmlsdGVyKChyKSA9PiB7IHJldHVybiByLmFkZHJlc3MudG9Mb3dlckNhc2UoKSA9PT0gcmV3YXJkVG9rZW5BZGRyZXNzLnRvTG93ZXJDYXNlKCkgfSlbMF1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnJpYmVyeVJlc3VsdHNWMiA9IGF3YWl0IFByb21pc2UuYWxsKGJyaWJlcnlSZXN1bHRzUHJvbWlzZXNWMik7XHJcbiAgICByZXR1cm4gW2JyaWJlcnlSZXN1bHRzVjJdXHJcbiAgfVxyXG5cclxuICBfZ2V0Q3VycmVudEdhdWdlVm90ZXMgPSBhc3luYyAod2ViMywgYWNjb3VudCwgZ2F1Z2VzKSA9PiB7XHJcbiAgICBjb25zdCBnYXVnZUNvbnRyb2xsZXIgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoR0FVR0VfQ09OVFJPTExFUl9BQkksIEdBVUdFX0NPTlRST0xMRVJfQUREUkVTUylcclxuXHJcbiAgICBjb25zdCB1c2VyVm90ZVNsb3BlcyA9IGF3YWl0IFByb21pc2UuYWxsKGdhdWdlcy5tYXAoKGdhdWdlKSA9PiB7XHJcbiAgICAgIHJldHVybiBnYXVnZUNvbnRyb2xsZXIubWV0aG9kcy52b3RlX3VzZXJfc2xvcGVzKGFjY291bnQuYWRkcmVzcywgZ2F1Z2UuZ2F1Z2VBZGRyZXNzKS5jYWxsKClcclxuICAgIH0pKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2F1Z2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGdhdWdlc1tpXS52b3RlcyA9IHVzZXJWb3RlU2xvcGVzW2ldXHJcbiAgICAgIGdhdWdlc1tpXS52b3Rlcy51c2VyVm90ZVNsb3BlQW1vdW50ID0gQmlnTnVtYmVyKHVzZXJWb3RlU2xvcGVzW2ldLnNsb3BlKS5kaXYoMTAqKjEwKS50b0ZpeGVkKDEwKVxyXG4gICAgICBnYXVnZXNbaV0udm90ZXMudXNlclZvdGVTbG9wZVBlcmNlbnQgPSBCaWdOdW1iZXIodXNlclZvdGVTbG9wZXNbaV0ucG93ZXIpLmRpdigxMDApLnRvRml4ZWQoMilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2F1Z2VzXHJcbiAgfVxyXG5cclxuICBjbGFpbVJld2FyZCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gc3RvcmVzLmFjY291bnRTdG9yZS5nZXRTdG9yZSgnYWNjb3VudCcpO1xyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyByZXdhcmQgfSA9IHBheWxvYWQuY29udGVudDtcclxuXHJcbiAgICB0aGlzLl9jYWxsQ2xhaW1SZXdhcmQod2ViMywgYWNjb3VudCwgcmV3YXJkLmdhdWdlLmdhdWdlQWRkcmVzcywgcmV3YXJkLnJld2FyZFRva2VuLmFkZHJlc3MsIHJld2FyZC52ZXJzaW9uLCAgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChSRVdBUkRfQ0xBSU1FRCwgcmVzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2NhbGxDbGFpbVJld2FyZCA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCBnYXVnZSwgcmV3YXJkVG9rZW4sIHZlcnNpb24sIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBsZXQgYWRkcmVzcyA9IEJSSUJFUllfQUREUkVTU19WMlxyXG4gICAgaWYodmVyc2lvbiA9PT0gMSkge1xyXG4gICAgICBhZGRyZXNzID0gQlJJQkVSWV9BRERSRVNTXHJcbiAgICB9XHJcbiAgICBjb25zdCBicmliZXJ5ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEJSSUJFUllfQUJJLCBhZGRyZXNzKTtcclxuICAgIGNvbnN0IGdhc1ByaWNlID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRHYXNQcmljZSgpO1xyXG5cclxuICAgIHRoaXMuX2NhbGxDb250cmFjdFdhaXQod2ViMywgYnJpYmVyeSwgJ2NsYWltX3Jld2FyZCcsIFtnYXVnZSwgcmV3YXJkVG9rZW5dLCBhY2NvdW50LCBnYXNQcmljZSwgR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMsIHt9LCBjYWxsYmFjayk7XHJcbiAgfTtcclxuXHJcbiAgc2VhcmNoVG9rZW4gPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcGF5bG9hZC5jb250ZW50O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5fZ2V0VG9rZW5JbmZvKHdlYjMsIGFkZHJlc3MsIHRydWUpXHJcbiAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChTRUFSQ0hfVE9LRU5fUkVUVVJORUQsIHRva2VuKTtcclxuICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChFUlJPUiwgZXgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRSZXdhcmQgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0U3RvcmUoJ2FjY291bnQnKTtcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcmV3YXJkVG9rZW4sIHJld2FyZEFtb3VudCwgZ2F1Z2UgfSA9IHBheWxvYWQuY29udGVudDtcclxuXHJcbiAgICBsZXQgc2VuZEFtb3VudCA9IEJpZ051bWJlcihyZXdhcmRBbW91bnQpLnRpbWVzKDEwKipyZXdhcmRUb2tlbi5kZWNpbWFscykudG9GaXhlZCgwKVxyXG5cclxuICAgIHRoaXMuX2NoZWNrQWxsb3dhbmNlKHdlYjMsIHJld2FyZFRva2VuLmFkZHJlc3MsIGFjY291bnQuYWRkcmVzcywgQlJJQkVSWV9BRERSRVNTX1YyLCBzZW5kQW1vdW50LCAoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2FsbEFkZFJld2FyZCh3ZWIzLCBhY2NvdW50LCBnYXVnZS5nYXVnZUFkZHJlc3MsIHJld2FyZFRva2VuLmFkZHJlc3MsIHNlbmRBbW91bnQsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChFUlJPUiwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChBRERfUkVXQVJEX1JFVFVSTkVELCByZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBfY2hlY2tBbGxvd2FuY2UgPSBhc3luYyAod2ViMywgdG9rZW4sIG93bmVyLCBzcGVuZGVyLCBzcGVuZGluZ0Ftb3VudCwgY2FsbGJhY2spID0+IHtcclxuICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoRVJDMjBfQUJJLCB0b2tlbilcclxuICAgIGNvbnN0IGFsbG93YW5jZSA9IGF3YWl0IHRva2VuQ29udHJhY3QubWV0aG9kcy5hbGxvd2FuY2Uob3duZXIsIHNwZW5kZXIpLmNhbGwoKTtcclxuXHJcbiAgICBpZihCaWdOdW1iZXIoc3BlbmRpbmdBbW91bnQpLmx0ZShhbGxvd2FuY2UpKSB7XHJcbiAgICAgIGNhbGxiYWNrKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGdhc1ByaWNlID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRHYXNQcmljZSgpO1xyXG4gICAgICB0aGlzLl9jYWxsQ29udHJhY3RXYWl0KHdlYjMsIHRva2VuQ29udHJhY3QsICdhcHByb3ZlJywgW3NwZW5kZXIsIE1BWF9VSU5UMjU2XSwgeyBhZGRyZXNzOiBvd25lciB9LCBnYXNQcmljZSwgbnVsbCwgbnVsbCwgY2FsbGJhY2spXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2FsbEFkZFJld2FyZCA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCBnYXVnZSwgcmV3YXJkVG9rZW4sIHJld2FyZEFtb3VudCwgY2FsbGJhY2spID0+IHtcclxuICAgIGNvbnN0IGJyaWJlcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQlJJQkVSWV9BQkksIEJSSUJFUllfQUREUkVTU19WMik7XHJcbiAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0R2FzUHJpY2UoKTtcclxuXHJcbiAgICB0aGlzLl9jYWxsQ29udHJhY3RXYWl0KHdlYjMsIGJyaWJlcnksICdhZGRfcmV3YXJkX2Ftb3VudCcsIFtnYXVnZSwgcmV3YXJkVG9rZW4sIHJld2FyZEFtb3VudF0sIGFjY291bnQsIGdhc1ByaWNlLCBHRVRfSU5DRU5USVZFU19CQUxBTkNFUywge30sIGNhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICBhZGRWb3RlUmV3YXJkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IGFjY291bnQgPSBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFN0b3JlKCdhY2NvdW50Jyk7XHJcbiAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHJld2FyZFRva2VuLCByZXdhcmRBbW91bnQsIHZvdGUgfSA9IHBheWxvYWQuY29udGVudDtcclxuXHJcbiAgICBsZXQgc2VuZEFtb3VudCA9IEJpZ051bWJlcihyZXdhcmRBbW91bnQpLnRpbWVzKDEwKipyZXdhcmRUb2tlbi5kZWNpbWFscykudG9GaXhlZCgwKVxyXG5cclxuICAgIHRoaXMuX2NoZWNrQWxsb3dhbmNlKHdlYjMsIHJld2FyZFRva2VuLmFkZHJlc3MsIGFjY291bnQuYWRkcmVzcywgVk9URV9CUklCRVJZX0FERFJFU1MsIHNlbmRBbW91bnQsIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChFUlJPUiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYWxsQWRkVm90ZVJld2FyZCh3ZWIzLCBhY2NvdW50LCB2b3RlLmluZGV4LCByZXdhcmRUb2tlbi5hZGRyZXNzLCBzZW5kQW1vdW50LCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoQUREX1ZPVEVfUkVXQVJEX1JFVFVSTkVELCByZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBfY2FsbEFkZFZvdGVSZXdhcmQgPSBhc3luYyAod2ViMywgYWNjb3VudCwgdm90ZUluZGV4LCByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgY29uc3QgYnJpYmVyeSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChWT1RFX0JSSUJFUllfQUJJLCBWT1RFX0JSSUJFUllfQUREUkVTUyk7XHJcbiAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0R2FzUHJpY2UoKTtcclxuXHJcbiAgICB0aGlzLl9jYWxsQ29udHJhY3RXYWl0KHdlYjMsIGJyaWJlcnksICdhZGRfcmV3YXJkX2Ftb3VudCcsIFt2b3RlSW5kZXgsIHJld2FyZFRva2VuLCByZXdhcmRBbW91bnRdLCBhY2NvdW50LCBnYXNQcmljZSwgR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMsIHt9LCBjYWxsYmFjayk7XHJcbiAgfTtcclxuXHJcbiAgX2NhbGxDb250cmFjdCA9ICh3ZWIzLCBjb250cmFjdCwgbWV0aG9kLCBwYXJhbXMsIGFjY291bnQsIGdhc1ByaWNlLCBkaXNwYXRjaEV2ZW50LCBkaXNwYXRjaEV2ZW50UGF5bG9hZCwgY2FsbGJhY2spID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgY29udHJhY3QubWV0aG9kc1ttZXRob2RdKC4uLnBhcmFtcylcclxuICAgICAgLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnQuYWRkcmVzcyxcclxuICAgICAgICBnYXNQcmljZTogd2ViMy51dGlscy50b1dlaShnYXNQcmljZSwgJ2d3ZWknKSxcclxuICAgICAgfSlcclxuICAgICAgLm9uKCd0cmFuc2FjdGlvbkhhc2gnLCBmdW5jdGlvbiAoaGFzaCkge1xyXG4gICAgICAgIGNvbnRleHQuZW1pdHRlci5lbWl0KFRYX1NVQk1JVFRFRCwgaGFzaCk7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFzaCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignY29uZmlybWF0aW9uJywgZnVuY3Rpb24gKGNvbmZpcm1hdGlvbk51bWJlciwgcmVjZWlwdCkge1xyXG4gICAgICAgIGlmIChkaXNwYXRjaEV2ZW50ICYmIGNvbmZpcm1hdGlvbk51bWJlciA9PSAwKSB7XHJcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBkaXNwYXRjaEV2ZW50LCBjb250ZW50OiBkaXNwYXRjaEV2ZW50UGF5bG9hZCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoIWVycm9yLnRvU3RyaW5nKCkuaW5jbHVkZXMoJy0zMjYwMScpKSB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKCctMzI2MDEnKSkge1xyXG4gICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgX2NhbGxDb250cmFjdFdhaXQgPSAod2ViMywgY29udHJhY3QsIG1ldGhvZCwgcGFyYW1zLCBhY2NvdW50LCBnYXNQcmljZSwgZGlzcGF0Y2hFdmVudCwgZGlzcGF0Y2hFdmVudFBheWxvYWQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgIGNvbnRyYWN0Lm1ldGhvZHNbbWV0aG9kXSguLi5wYXJhbXMpXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50LmFkZHJlc3MsXHJcbiAgICAgICAgZ2FzUHJpY2U6IHdlYjMudXRpbHMudG9XZWkoZ2FzUHJpY2UsICdnd2VpJyksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbigndHJhbnNhY3Rpb25IYXNoJywgZnVuY3Rpb24gKGhhc2gpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhoYXNoKVxyXG4gICAgICAgIC8vIGNvbnRleHQuZW1pdHRlci5lbWl0KFRYX1NVQk1JVFRFRCwgaGFzaCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbigncmVjZWlwdCcsIGZ1bmN0aW9uIChyZWNlaXB0KSB7XHJcbiAgICAgICAgY29udGV4dC5lbWl0dGVyLmVtaXQoVFhfU1VCTUlUVEVELCByZWNlaXB0LnRyYW5zYWN0aW9uSGFzaCk7XHJcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVjZWlwdC50cmFuc2FjdGlvbkhhc2gpO1xyXG5cclxuICAgICAgICBpZiAoZGlzcGF0Y2hFdmVudCkge1xyXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogZGlzcGF0Y2hFdmVudCwgY29udGVudDogZGlzcGF0Y2hFdmVudFBheWxvYWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKCFlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKCctMzI2MDEnKSkge1xyXG4gICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmICghZXJyb3IudG9TdHJpbmcoKS5pbmNsdWRlcygnLTMyNjAxJykpIHtcclxuICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9