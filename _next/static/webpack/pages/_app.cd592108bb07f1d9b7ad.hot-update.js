webpackHotUpdate_N_E("pages/_app",{

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
              _context5.next = 3;
              return gaugeController.methods.gauges(index).call();

            case 3:
              gaugeAddress = _context5.sent;
              _context5.next = 6;
              return Promise.all([gaugeController.methods.gauge_types(gaugeAddress).call(), gaugeController.methods.gauge_relative_weight(gaugeAddress).call()]);

            case 6:
              _yield$Promise$all3 = _context5.sent;
              _yield$Promise$all4 = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all3, 2);
              gaugeType = _yield$Promise$all4[0];
              gaugeWeight = _yield$Promise$all4[1];
              name = 'Unknown';
              lpTokenAddress = ''; // if not 0, we cant get LP token info cause it is on a different chain

              if (!['0', '5', '6'].includes(gaugeType)) {
                _context5.next = 33;
                break;
              }

              gauge = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["GAUGE_CONTRACT_ABI"], gaugeAddress); // this can still fail for optimism gauges because it's still 'mainnet' gaugetype 0.
              // the lptoken address get call will give an error.

              _context5.prev = 14;
              _context5.next = 17;
              return gauge.methods.lp_token().call();

            case 17:
              lpTokenAddress = _context5.sent;
              lpToken = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["ERC20_ABI"], lpTokenAddress);
              _context5.next = 21;
              return lpToken.methods.name().call();

            case 21:
              name = _context5.sent;
              _context5.next = 31;
              break;

            case 24:
              _context5.prev = 24;
              _context5.t0 = _context5["catch"](14);
              _context5.t1 = gaugeAddress;
              _context5.next = _context5.t1 === "0xc5aE4B5F86332e70f3205a8151Ee9eD9F71e0797" ? 29 : 31;
              break;

            case 29:
              name = "sUSD Synthetix";
              return _context5.abrupt("break", 31);

            case 31:
              _context5.next = 56;
              break;

            case 33:
              _context5.t2 = gaugeAddress;
              _context5.next = _context5.t2 === '0xb9C05B8EE41FDCbd9956114B3aF15834FDEDCb54' ? 36 : _context5.t2 === '0xfE1A3dD8b169fB5BF0D5dbFe813d956F39fF6310' ? 38 : _context5.t2 === '0xC48f4653dd6a9509De44c92beb0604BEA3AEe714' ? 40 : _context5.t2 === '0x6955a55416a06839309018A8B0cB72c4DDC11f15' ? 42 : _context5.t2 === '0x488E6ef919C2bB9de535C634a80afb0114DA8F62' ? 44 : _context5.t2 === '0xfDb129ea4b6f557b07BcDCedE54F665b7b6Bc281' ? 46 : _context5.t2 === '0x060e386eCfBacf42Aa72171Af9EFe17b3993fC4F' ? 48 : _context5.t2 === '0x6C09F6727113543Fd061a721da512B7eFCDD0267' ? 50 : _context5.t2 === '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168' ? 52 : _context5.t2 === '0xd8b712d29381748dB89c36BCa0138d7c75866ddF' ? 54 : 56;
              break;

            case 36:
              name = 'Curve.fi DAI/USDC (DAI+USDC)';
              return _context5.abrupt("break", 56);

            case 38:
              name = 'Curve.fi fUSDT/DAI/USDC';
              return _context5.abrupt("break", 56);

            case 40:
              name = 'Curve.fi amDAI/amUSDC/amUSDT';
              return _context5.abrupt("break", 56);

            case 42:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 56);

            case 44:
              name = 'Curve.fi amWBTC/renBTC';
              return _context5.abrupt("break", 56);

            case 46:
              name = 'Curve.fi WBTC/renBTC';
              return _context5.abrupt("break", 56);

            case 48:
              name = 'Curve USD-BTC-ETH';
              return _context5.abrupt("break", 56);

            case 50:
              name = 'Curve.fi wxDAI/USDC/USDT';
              return _context5.abrupt("break", 56);

            case 52:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 56);

            case 54:
              name = 'Curve.fi Factory USD Metapool: Magic Internet Money 3Pool';
              return _context5.abrupt("break", 56);

            case 56:
              return _context5.abrupt("return", {
                gaugeAddress: gaugeAddress,
                lpTokenAddress: lpTokenAddress,
                name: name,
                gaugeWeight: gaugeWeight,
                gaugeType: gaugeType,
                gaugeTypeName: _this._mapGaugeTypeToName(gaugeType),
                logo: '/unknown-logo.png'
              });

            case 59:
              _context5.prev = 59;
              _context5.t3 = _context5["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getGaugeInfo(".concat(web3, ", ").concat(gaugeController, ", ").concat(index, ")"));
              console.log(_context5.t3);
              console.log("------------------------------------");
              return _context5.abrupt("return", null);

            case 66:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 59], [14, 24]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL2luY2VudGl2ZXNTdG9yZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJTdG9yZSIsImRpc3BhdGNoZXIiLCJlbWl0dGVyIiwiaW5kZXgiLCJzdG9yZSIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwiU1RPUkVfVVBEQVRFRCIsInBheWxvYWQiLCJzdG9yZXMiLCJhY2NvdW50U3RvcmUiLCJnZXRXZWIzUHJvdmlkZXIiLCJ3ZWIzIiwiX2dldEdhdWdlcyIsImdhdWdlcyIsInNldFN0b3JlIiwiY29uZmlndXJlZCIsIl9nZXRWb3RlcyIsInZvdGVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMiLCJJTkNFTlRJVkVTX0NPTkZJR1VSRUQiLCJ2b3Rlc1NvdXJjZUNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJWT1RFX1NPVVJDRV9BQkkiLCJWT1RFX1NPVVJDRV9BRERSRVNTIiwidm90ZXNCcmliZXJ5Q29udHJhY3QiLCJWT1RFX0JSSUJFUllfQUJJIiwiVk9URV9CUklCRVJZX0FERFJFU1MiLCJtZXRob2RzIiwidm90ZXNMZW5ndGgiLCJjYWxsIiwiblZvdGVzIiwiYXJyIiwiQXJyYXkiLCJwYXJzZUludCIsImtleXMiLCJwcm9taXNlcyIsIm1hcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwidm90ZUluZm8iLCJfZ2V0Vm90ZUluZm8iLCJhbGwiLCJyZXN1bHQiLCJnZXRWb3RlIiwicmV3YXJkc19wZXJfdm90ZSIsInZvdGUiLCJyZXdhcmRzUGVyVm90ZSIsImdhdWdlQ29udHJvbGxlciIsIkdBVUdFX0NPTlRST0xMRVJfQUJJIiwiR0FVR0VfQ09OVFJPTExFUl9BRERSRVNTIiwibl9nYXVnZXMiLCJuR2F1Z2VzIiwiZ2F1Z2VJbmZvIiwiX2dldEdhdWdlSW5mbyIsInJlcyIsImZpbHRlciIsImciLCJnYXVnZUFkZHJlc3MiLCJnYXVnZV90eXBlcyIsImdhdWdlX3JlbGF0aXZlX3dlaWdodCIsImdhdWdlVHlwZSIsImdhdWdlV2VpZ2h0IiwibmFtZSIsImxwVG9rZW5BZGRyZXNzIiwiaW5jbHVkZXMiLCJnYXVnZSIsIkdBVUdFX0NPTlRSQUNUX0FCSSIsImxwX3Rva2VuIiwibHBUb2tlbiIsIkVSQzIwX0FCSSIsImdhdWdlVHlwZU5hbWUiLCJfbWFwR2F1Z2VUeXBlVG9OYW1lIiwibG9nbyIsImFkZHJlc3MiLCJzeW1ib2wiLCJkZWNpbWFscyIsImdldFN0b3JlIiwiYWNjb3VudCIsImxlbmd0aCIsIl9nZXRDdXJyZW50R2F1Z2VWb3RlcyIsIm15UGFyYW0iLCJjb250ZW50IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJyZXdhcmRUb2tlbkFkZHJlc3MiLCJkZWZhdWx0VG9rZW5zIiwiX2dldERlZmF1bHRUb2tlbnMiLCJ1dGlscyIsImlzQWRkcmVzcyIsImluY2x1ZGVzVG9rZW4iLCJpIiwidG9Mb3dlckNhc2UiLCJfZ2V0VG9rZW5JbmZvIiwicmV3YXJkVG9rZW4iLCJwdXNoIiwiYXN5bmMiLCJ0b2tlbiIsImNhbGxiYWNrIiwiX2dldEJyaWJlcnkiLCJicmliZXJ5IiwiZXJyIiwiYnJpYmVyaWVzIiwiRVJST1IiLCJmbGF0QnJpYmVyaWVzIiwiZmxhdCIsInJld2FyZHMiLCJqIiwiYnJpYmUiLCJhY3RpdmVQZXJpb2QiLCJyZXdhcmRzVW5sb2NrIiwiQmlnTnVtYmVyIiwicGx1cyIsIldFRUsiLCJ0b0ZpeGVkIiwiY2xhaW1hYmxlIiwiZGl2IiwiY2FuQ2xhaW0iLCJoYXNDbGFpbWVkIiwidG9rZW5zRm9yQnJpYmUiLCJyZXdhcmRQZXJUb2tlbiIsIklOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQiLCJfZ2V0Vm90ZUJyaWJlcnkiLCJ2b3RlUmV3YXJkcyIsInRva2VuQWRkcmVzcyIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwidm90ZUJyaWJlcnlDb250cmFjdCIsImVzdGltYXRlX2JyaWJlIiwicmV3YXJkX2Ftb3VudCIsImdldFZvdGVyU3RhdGUiLCJoYXNfY2xhaW1lZCIsImVzdGltYXRlQnJpYmUiLCJyZXdhcmRBbW91bnQiLCJ2b3RlclN0YXRlIiwiaHNhQ2xhaW1lZCIsInJld2FyZCIsInJld2FyZFRva2VucyIsImdldEJsb2NrTnVtYmVyIiwiYmxvY2siLCJCUklCRVJZX0FCSSIsIkJSSUJFUllfQUREUkVTUyIsImJyaWJlcnlWMiIsIkJSSUJFUllfQUREUkVTU19WMiIsImJyaWJlcnlUb2tlbnNDb250cmFjdCIsIkJSSUJFUllfVE9LRU5TX0FERFJFU1NfVjIiLCJnYXVnZXNfcGVyX3Jld2FyZCIsImdhdWdlc1BlclJld2FyZFYyIiwiYnJpYmVyeVJlc3VsdHNQcm9taXNlc1YyIiwiYWN0aXZlX3BlcmlvZCIsImxhc3RfdXNlcl9jbGFpbSIsInRva2Vuc19mb3JfYnJpYmUiLCJyZXdhcmRfcGVyX3Rva2VuIiwibGFzdFVzZXJDbGFpbSIsInZlcnNpb24iLCJsdCIsImVxIiwiciIsImJyaWJlcnlSZXN1bHRzVjIiLCJ2b3RlX3VzZXJfc2xvcGVzIiwidXNlclZvdGVTbG9wZXMiLCJ1c2VyVm90ZVNsb3BlQW1vdW50Iiwic2xvcGUiLCJ1c2VyVm90ZVNsb3BlUGVyY2VudCIsInBvd2VyIiwiX2NhbGxDbGFpbVJld2FyZCIsIlJFV0FSRF9DTEFJTUVEIiwiZ2V0R2FzUHJpY2UiLCJnYXNQcmljZSIsIl9jYWxsQ29udHJhY3RXYWl0IiwiU0VBUkNIX1RPS0VOX1JFVFVSTkVEIiwic2VuZEFtb3VudCIsInRpbWVzIiwiX2NoZWNrQWxsb3dhbmNlIiwiX2NhbGxBZGRSZXdhcmQiLCJBRERfUkVXQVJEX1JFVFVSTkVEIiwib3duZXIiLCJzcGVuZGVyIiwic3BlbmRpbmdBbW91bnQiLCJ0b2tlbkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwibHRlIiwiTUFYX1VJTlQyNTYiLCJfY2FsbEFkZFZvdGVSZXdhcmQiLCJBRERfVk9URV9SRVdBUkRfUkVUVVJORUQiLCJ2b3RlSW5kZXgiLCJjb250cmFjdCIsIm1ldGhvZCIsInBhcmFtcyIsImRpc3BhdGNoRXZlbnQiLCJkaXNwYXRjaEV2ZW50UGF5bG9hZCIsImNvbnRleHQiLCJzZW5kIiwiZnJvbSIsInRvV2VpIiwib24iLCJoYXNoIiwiVFhfU1VCTUlUVEVEIiwiY29uZmlybWF0aW9uTnVtYmVyIiwicmVjZWlwdCIsImVycm9yIiwidG9TdHJpbmciLCJtZXNzYWdlIiwidHJhbnNhY3Rpb25IYXNoIiwicmVnaXN0ZXIiLCJDT05GSUdVUkVfSU5DRU5USVZFUyIsImNvbmZpZ3VyZSIsImdldEJhbGFuY2VzIiwiQ0xBSU1fUkVXQVJEIiwiY2xhaW1SZXdhcmQiLCJTRUFSQ0hfVE9LRU4iLCJzZWFyY2hUb2tlbiIsIkFERF9SRVdBUkQiLCJhZGRSZXdhcmQiLCJBRERfVk9URV9SRVdBUkQiLCJhZGRWb3RlUmV3YXJkIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBMEJBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztJQUVNQyxLLEdBQ0osZUFBWUMsVUFBWixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQTs7QUFBQSx1TEF3Q3RCLFVBQUNDLEtBQUQsRUFBVztBQUNwQixXQUFPLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRCxLQUFYLENBQVA7QUFDRCxHQTFDZ0M7O0FBQUEsdUxBNEN0QixVQUFDRSxHQUFELEVBQVM7QUFDbEIsU0FBSSxDQUFDRCxLQUFMLG1DQUFrQixLQUFJLENBQUNBLEtBQXZCLEdBQWlDQyxHQUFqQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNILEtBQWpCO0FBQ0EsV0FBTyxLQUFJLENBQUNGLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkMsd0RBQWxCLENBQVA7QUFDRCxHQWhEZ0M7O0FBQUE7QUFBQSxrVkFrRHJC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QmxOLE9BQWpCO0FBQ0E7O0FBQ0YsV0FBS21OLHVEQUFMO0FBQ0UsYUFBS0MsV0FBTCxDQUFpQnBOLE9BQWpCO0FBQ0E7O0FBQ0YsV0FBS3FOLHFEQUFMO0FBQ0UsYUFBS0MsU0FBTCxDQUFldE4sT0FBZjtBQUNBOztBQUNGLFdBQUt1TiwwREFBTDtBQUNFLGFBQUtDLGFBQUwsQ0FBbUJ4TixPQUFuQjtBQUNBOztBQUNGO0FBQVMsU0FDUjtBQXBCSDtBQXNCRCxHQXZCRCxDQXVCRXlOLElBdkJGLENBdUJPLElBdkJQLENBREY7QUEwQkQsQzs7QUFxdEJZbk8sb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZDU5MjEwOGJiMDdmMWQ5YjdhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzeW5jIGZyb20gJ2FzeW5jJztcclxuaW1wb3J0IHtcclxuICBNQVhfVUlOVDI1NixcclxuICBXRUVLLFxyXG4gIEVSUk9SLFxyXG4gIFRYX1NVQk1JVFRFRCxcclxuICBTVE9SRV9VUERBVEVELFxyXG4gIElOQ0VOVElWRVNfVVBEQVRFRCxcclxuICBDT05GSUdVUkVfSU5DRU5USVZFUyxcclxuICBJTkNFTlRJVkVTX0NPTkZJR1VSRUQsXHJcbiAgR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMsXHJcbiAgSU5DRU5USVZFU19CQUxBTkNFU19SRVRVUk5FRCxcclxuICBCUklCRVJZX0FERFJFU1MsXHJcbiAgQlJJQkVSWV9BRERSRVNTX1YyLFxyXG4gIEJSSUJFUllfVE9LRU5TX0FERFJFU1NfVjIsXHJcbiAgR0FVR0VfQ09OVFJPTExFUl9BRERSRVNTLFxyXG4gIFZPVEVfQlJJQkVSWV9BRERSRVNTLFxyXG4gIFZPVEVfU09VUkNFX0FERFJFU1MsXHJcbiAgQ0xBSU1fUkVXQVJELFxyXG4gIFJFV0FSRF9DTEFJTUVELFxyXG4gIFNFQVJDSF9UT0tFTixcclxuICBTRUFSQ0hfVE9LRU5fUkVUVVJORUQsXHJcbiAgQUREX1JFV0FSRCxcclxuICBBRERfUkVXQVJEX1JFVFVSTkVELFxyXG4gIEFERF9WT1RFX1JFV0FSRCxcclxuICBBRERfVk9URV9SRVdBUkRfUkVUVVJORURcclxufSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5pbXBvcnQgeyBFUkMyMF9BQkksIEJSSUJFUllfQUJJLCBHQVVHRV9DT05UUk9MTEVSX0FCSSwgR0FVR0VfQ09OVFJBQ1RfQUJJLCBWT1RFX1NPVVJDRV9BQkksIFZPVEVfQlJJQkVSWV9BQkkgfSBmcm9tICcuL2FiaXMnO1xyXG5cclxuXHJcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBibkRlYyB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IEJpZ051bWJlciBmcm9tICdiaWdudW1iZXIuanMnO1xyXG5cclxuY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XHJcblxyXG5jbGFzcyBTdG9yZSB7XHJcbiAgY29uc3RydWN0b3IoZGlzcGF0Y2hlciwgZW1pdHRlcikge1xyXG4gICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcclxuICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XHJcblxyXG4gICAgdGhpcy5zdG9yZSA9IHtcclxuICAgICAgY29uZmlndXJlZDogZmFsc2UsXHJcbiAgICAgIGdhdWdlczogW10sXHJcbiAgICAgIHZvdGVzOiBbXSxcclxuICAgICAgcmV3YXJkczogW10sXHJcbiAgICAgIHZvdGVSZXdhcmRzOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwYXRjaGVyLnJlZ2lzdGVyKFxyXG4gICAgICBmdW5jdGlvbiAocGF5bG9hZCkge1xyXG4gICAgICAgIHN3aXRjaCAocGF5bG9hZC50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIENPTkZJR1VSRV9JTkNFTlRJVkVTOlxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyZShwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTOlxyXG4gICAgICAgICAgICB0aGlzLmdldEJhbGFuY2VzKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQ0xBSU1fUkVXQVJEOlxyXG4gICAgICAgICAgICB0aGlzLmNsYWltUmV3YXJkKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU0VBUkNIX1RPS0VOOlxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRva2VuKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQUREX1JFV0FSRDpcclxuICAgICAgICAgICAgdGhpcy5hZGRSZXdhcmQocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBRERfVk9URV9SRVdBUkQ6XHJcbiAgICAgICAgICAgIHRoaXMuYWRkVm90ZVJld2FyZChwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LmJpbmQodGhpcyksXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RvcmUgPSAoaW5kZXgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JlW2luZGV4XTtcclxuICB9O1xyXG5cclxuICBzZXRTdG9yZSA9IChvYmopID0+IHtcclxuICAgIHRoaXMuc3RvcmUgPSB7IC4uLnRoaXMuc3RvcmUsIC4uLm9iaiB9O1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdG9yZSk7XHJcbiAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoU1RPUkVfVVBEQVRFRCk7XHJcbiAgfTtcclxuXHJcbiAgY29uZmlndXJlID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdhdWdlcyA9IGF3YWl0IHRoaXMuX2dldEdhdWdlcyh3ZWIzKTtcclxuICAgIHRoaXMuc2V0U3RvcmUoeyBnYXVnZXM6IGdhdWdlcywgY29uZmlndXJlZDogdHJ1ZSB9KVxyXG5cclxuICAgIGNvbnN0IHZvdGVzID0gYXdhaXQgdGhpcy5fZ2V0Vm90ZXMod2ViMyk7XHJcbiAgICB0aGlzLnNldFN0b3JlKHsgdm90ZXM6IHZvdGVzIH0pXHJcblxyXG4gICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMgfSk7XHJcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdChJTkNFTlRJVkVTX0NPTkZJR1VSRUQpO1xyXG4gIH07XHJcblxyXG4gIF9nZXRWb3RlcyA9IGFzeW5jICh3ZWIzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB2b3Rlc1NvdXJjZUNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFZPVEVfU09VUkNFX0FCSSwgVk9URV9TT1VSQ0VfQUREUkVTUylcclxuICAgICAgY29uc3Qgdm90ZXNCcmliZXJ5Q29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVk9URV9CUklCRVJZX0FCSSwgVk9URV9CUklCRVJZX0FERFJFU1MpXHJcbiAgICAgIGNvbnN0IG5Wb3RlcyA9IGF3YWl0IHZvdGVzU291cmNlQ29udHJhY3QubWV0aG9kcy52b3Rlc0xlbmd0aCgpLmNhbGwoKVxyXG5cclxuICAgICAgY29uc3QgYXJyID0gWy4uLkFycmF5KHBhcnNlSW50KG5Wb3RlcykpLmtleXMoKV1cclxuXHJcbiAgICAgIGNvbnN0IHByb21pc2VzID0gYXJyLm1hcChpbmRleCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHZvdGVJbmZvID0gdGhpcy5fZ2V0Vm90ZUluZm8od2ViMywgdm90ZXNTb3VyY2VDb250cmFjdCwgdm90ZXNCcmliZXJ5Q29udHJhY3QsIGluZGV4KTtcclxuICAgICAgICAgIHJlc29sdmUodm90ZUluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuXHJcbiAgICAgIHJldHVybiByZXN1bHRcclxuICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgY29uc29sZS5sb2coYGV4Y2VwdGlvbiB0aHJvd24gaW4gX2dldFZvdGVzKCR7d2ViM30pYClcclxuICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0Vm90ZUluZm8gPSBhc3luYyAod2ViMywgdm90ZXNTb3VyY2VDb250cmFjdCwgdm90ZXNCcmliZXJ5Q29udHJhY3QsIGluZGV4KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbdm90ZSwgcmV3YXJkc1BlclZvdGVdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIHZvdGVzU291cmNlQ29udHJhY3QubWV0aG9kcy5nZXRWb3RlKGluZGV4KS5jYWxsKCksXHJcbiAgICAgICAgdm90ZXNCcmliZXJ5Q29udHJhY3QubWV0aG9kcy5yZXdhcmRzX3Blcl92b3RlKGluZGV4KS5jYWxsKClcclxuICAgICAgXSk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGluZGV4LFxyXG4gICAgICAgIHZvdGUsXHJcbiAgICAgICAgcmV3YXJkc1BlclZvdGUsXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgY29uc29sZS5sb2coYGV4Y2VwdGlvbiB0aHJvd24gaW4gNCgke3dlYjN9LCAke3ZvdGVzU291cmNlQ29udHJhY3R9LCAke3ZvdGVzQnJpYmVyeUNvbnRyYWN0fSwgJHtpbmRleH0pYClcclxuICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIHJldHVybiBleFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldEdhdWdlcyA9IGFzeW5jICh3ZWIzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBnYXVnZUNvbnRyb2xsZXIgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoR0FVR0VfQ09OVFJPTExFUl9BQkksIEdBVUdFX0NPTlRST0xMRVJfQUREUkVTUylcclxuICAgICAgY29uc3QgbkdhdWdlcyA9IGF3YWl0IGdhdWdlQ29udHJvbGxlci5tZXRob2RzLm5fZ2F1Z2VzKCkuY2FsbCgpXHJcblxyXG4gICAgICBjb25zdCBhcnIgPSBbLi4uQXJyYXkocGFyc2VJbnQobkdhdWdlcykpLmtleXMoKV1cclxuXHJcbiAgICAgIGNvbnN0IHByb21pc2VzID0gYXJyLm1hcChpbmRleCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGdhdWdlSW5mbyA9IHRoaXMuX2dldEdhdWdlSW5mbyh3ZWIzLCBnYXVnZUNvbnRyb2xsZXIsIGluZGV4KTtcclxuICAgICAgICAgIHJlc29sdmUoZ2F1Z2VJbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHJlc3VsdC5maWx0ZXIoKGcpID0+IHtcclxuICAgICAgICByZXR1cm4gZyAhPT0gbnVsbFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfSBjYXRjaChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhgZXhjZXB0aW9uIHRocm93biBpbiBfZ2V0R2F1Z2VzKCR7d2ViM30pYClcclxuICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0R2F1Z2VJbmZvID0gYXN5bmMgKHdlYjMsIGdhdWdlQ29udHJvbGxlciwgaW5kZXgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGdhdWdlQWRkcmVzcyA9IGF3YWl0IGdhdWdlQ29udHJvbGxlci5tZXRob2RzLmdhdWdlcyhpbmRleCkuY2FsbCgpXHJcbiAgICAgIGNvbnN0IFtnYXVnZVR5cGUsIGdhdWdlV2VpZ2h0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBnYXVnZUNvbnRyb2xsZXIubWV0aG9kcy5nYXVnZV90eXBlcyhnYXVnZUFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICBnYXVnZUNvbnRyb2xsZXIubWV0aG9kcy5nYXVnZV9yZWxhdGl2ZV93ZWlnaHQoZ2F1Z2VBZGRyZXNzKS5jYWxsKClcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgbmFtZSA9ICdVbmtub3duJ1xyXG4gICAgICBsZXQgbHBUb2tlbkFkZHJlc3MgPSAnJ1xyXG5cclxuICAgICAgLy8gaWYgbm90IDAsIHdlIGNhbnQgZ2V0IExQIHRva2VuIGluZm8gY2F1c2UgaXQgaXMgb24gYSBkaWZmZXJlbnQgY2hhaW5cclxuICAgICAgaWYoWycwJywgJzUnLCAnNiddLmluY2x1ZGVzKGdhdWdlVHlwZSkpIHtcclxuICAgICAgICBjb25zdCBnYXVnZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChHQVVHRV9DT05UUkFDVF9BQkksIGdhdWdlQWRkcmVzcylcclxuICAgICAgICAvLyB0aGlzIGNhbiBzdGlsbCBmYWlsIGZvciBvcHRpbWlzbSBnYXVnZXMgYmVjYXVzZSBpdCdzIHN0aWxsICdtYWlubmV0JyBnYXVnZXR5cGUgMC5cclxuICAgICAgICAvLyB0aGUgbHB0b2tlbiBhZGRyZXNzIGdldCBjYWxsIHdpbGwgZ2l2ZSBhbiBlcnJvci5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgbHBUb2tlbkFkZHJlc3MgPSBhd2FpdCBnYXVnZS5tZXRob2RzLmxwX3Rva2VuKCkuY2FsbCgpXHJcbiAgICAgICAgICBjb25zdCBscFRva2VuID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEVSQzIwX0FCSSwgbHBUb2tlbkFkZHJlc3MpXHJcbiAgICAgICAgICBuYW1lID0gYXdhaXQgbHBUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgc3dpdGNoIChnYXVnZUFkZHJlc3MpIHtcclxuICAgICAgICAgICAgY2FzZSBcIjB4YzVhRTRCNUY4NjMzMmU3MGYzMjA1YTgxNTFFZTllRDlGNzFlMDc5N1wiOlxyXG4gICAgICAgICAgICAgIG5hbWUgPSBcInNVU0QgU3ludGhldGl4XCI7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy9tYW51YWxseSBtYXAgZ2F1Z2UgbmFtZXNcclxuICAgICAgICBzd2l0Y2ggKGdhdWdlQWRkcmVzcykge1xyXG4gICAgICAgICAgY2FzZSAnMHhiOUMwNUI4RUU0MUZEQ2JkOTk1NjExNEIzYUYxNTgzNEZERURDYjU0JzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBEQUkvVVNEQyAoREFJK1VTREMpJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4ZkUxQTNkRDhiMTY5ZkI1QkYwRDVkYkZlODEzZDk1NkYzOWZGNjMxMCc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgZlVTRFQvREFJL1VTREMnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhDNDhmNDY1M2RkNmE5NTA5RGU0NGM5MmJlYjA2MDRCRUEzQUVlNzE0JzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBhbURBSS9hbVVTREMvYW1VU0RUJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4Njk1NWE1NTQxNmEwNjgzOTMwOTAxOEE4QjBjQjcyYzREREMxMWYxNSc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgVVNELUJUQy1FVEgnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHg0ODhFNmVmOTE5QzJiQjlkZTUzNUM2MzRhODBhZmIwMTE0REE4RjYyJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBhbVdCVEMvcmVuQlRDJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4ZkRiMTI5ZWE0YjZmNTU3YjA3QmNEQ2VkRTU0RjY2NWI3YjZCYzI4MSc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgV0JUQy9yZW5CVEMnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHgwNjBlMzg2ZUNmQmFjZjQyQWE3MjE3MUFmOUVGZTE3YjM5OTNmQzRGJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZSBVU0QtQlRDLUVUSCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweDZDMDlGNjcyNzExMzU0M0ZkMDYxYTcyMWRhNTEyQjdlRkNERDAyNjcnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIHd4REFJL1VTREMvVVNEVCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweERlRmQ4RmREMjBlMGYzNDExNUM3MDE4Q0NmYjY1NTc5NkY2QjIxNjgnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIFVTRC1CVEMtRVRIJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4ZDhiNzEyZDI5MzgxNzQ4ZEI4OWMzNkJDYTAxMzhkN2M3NTg2NmRkRic6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgRmFjdG9yeSBVU0QgTWV0YXBvb2w6IE1hZ2ljIEludGVybmV0IE1vbmV5IDNQb29sJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGdhdWdlQWRkcmVzczogZ2F1Z2VBZGRyZXNzLFxyXG4gICAgICAgIGxwVG9rZW5BZGRyZXNzOiBscFRva2VuQWRkcmVzcyxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIGdhdWdlV2VpZ2h0OiBnYXVnZVdlaWdodCxcclxuICAgICAgICBnYXVnZVR5cGU6IGdhdWdlVHlwZSxcclxuICAgICAgICBnYXVnZVR5cGVOYW1lOiB0aGlzLl9tYXBHYXVnZVR5cGVUb05hbWUoZ2F1Z2VUeXBlKSxcclxuICAgICAgICBsb2dvOiAnL3Vua25vd24tbG9nby5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgY29uc29sZS5sb2coYGV4Y2VwdGlvbiB0aHJvd24gaW4gX2dldEdhdWdlSW5mbygke3dlYjN9LCAke2dhdWdlQ29udHJvbGxlcn0sICR7aW5kZXh9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX21hcEdhdWdlVHlwZVRvTmFtZSA9IChnYXVnZVR5cGUpID0+IHtcclxuICAgIHN3aXRjaCAoZ2F1Z2VUeXBlKSB7XHJcbiAgICAgIGNhc2UgJzAnOlxyXG4gICAgICBjYXNlICczJzpcclxuICAgICAgY2FzZSAnNSc6XHJcbiAgICAgIGNhc2UgJzYnOlxyXG4gICAgICAgIHJldHVybiAnRXRoZXJldW0nXHJcbiAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgIHJldHVybiAnRmFudG9tJ1xyXG4gICAgICBjYXNlICcyJzpcclxuICAgICAgICByZXR1cm4gJ1BvbHlnb24nXHJcbiAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgIHJldHVybiAneERBSSdcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ1Vua25vd24nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0RGVmYXVsdFRva2VucyA9ICgpID0+IHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg0ZTE1MzYxZmQ2YjRiYjYwOWZhNjNjODFhMmJlMTlkODczNzE3ODcwJyxcclxuICAgICAgICBzeW1ib2w6ICdGVE0nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4MmJhNTkyZjc4ZGI2NDM2NTI3NzI5OTI5YWFmNmM5MDg0OTdjYjIwMCcsXHJcbiAgICAgICAgc3ltYm9sOiAnQ1JFQU0nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4MDkwMTg1ZjIxMzUzMDhiYWQxNzUyNzAwNDM2NGViY2MyZDM3ZTVmNicsXHJcbiAgICAgICAgc3ltYm9sOiAnU1BFTEwnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4NmIxNzU0NzRlODkwOTRjNDRkYTk4Yjk1NGVlZGVhYzQ5NTI3MWQwZicsXHJcbiAgICAgICAgc3ltYm9sOiAnREFJJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGEwYjg2OTkxYzYyMThiMzZjMWQxOWQ0YTJlOWViMGNlMzYwNmViNDgnLFxyXG4gICAgICAgIHN5bWJvbDogJ1VTREMnLFxyXG4gICAgICAgIGRlY2ltYWxzOiA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg1YTk4ZmNiZWE1MTZjZjA2ODU3MjE1Nzc5ZmQ4MTJjYTNiZWYxYjMyJyxcclxuICAgICAgICBzeW1ib2w6ICdMRE8nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4ZGJkYjRkMTZlZGE0NTFkMDUwM2I4NTRjZjc5ZDU1Njk3ZjkwYzhkZicsXHJcbiAgICAgICAgc3ltYm9sOiAnQUxDWCcsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg5RDc5ZDVCNjFEZTU5RDg4MmNlOTAxMjViMThGNzRhZjY1MGFjQjkzJyxcclxuICAgICAgICBzeW1ib2w6ICdOU0JUJyxcclxuICAgICAgICBkZWNpbWFsczogNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4N2QxYWZhN2I3MThmYjg5M2RiMzBhM2FiYzBjZmM2MDhhYWNmZWJiMCcsXHJcbiAgICAgICAgc3ltYm9sOiAnTUFUSUMnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4OTJlMTg3YTAzYjZjZDE5Y2I2YWYyOTNiYTE3ZjI3NDVmZDIzNTdkNScsXHJcbiAgICAgICAgc3ltYm9sOiAnRFVDSycsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg4MjA3YzFGZkM1QjY4MDRGNjAyNDMyMkNjRjM0RjI5YzM1NDFBZTI2JyxcclxuICAgICAgICBzeW1ib2w6ICdPR04nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4YTNCZUQ0RTFjNzVEMDBmYTZmNEU1RTY5MjJEQjcyNjFCNUU5QWNEMicsXHJcbiAgICAgICAgc3ltYm9sOiAnTVRBJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGQ1MzNhOTQ5NzQwYmIzMzA2ZDExOWNjNzc3ZmE5MDBiYTAzNGNkNTInLFxyXG4gICAgICAgIHN5bWJvbDogJ0NSVicsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHhjZGY3MDI4Y2VhYjgxZmEwYzY5NzEyMDhlODNmYTc4NzI5OTRiZWU1JyxcclxuICAgICAgICBzeW1ib2w6ICdUJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGRiMjVmMjExYWIwNWIxYzk3ZDU5NTUxNmY0NTc5NDUyOGE4MDdhZDgnLFxyXG4gICAgICAgIHN5bWJvbDogJ0VVUlMnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHgzMTQyOWQxODU2YUQxMzc3QThBMDA3OTQxMEIyOTdlMWE5ZTIxNGMyJyxcclxuICAgICAgICBzeW1ib2w6ICdBTkdMRScsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4NGUzRkJENTZDRDU2YzNlNzJjMTQwM2UxMDNiNDVEYjlkYTVCOUQyQicsXHJcbiAgICAgICAgc3ltYm9sOiAnQ1ZYJyxcclxuICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgZ2V0QmFsYW5jZXMgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0U3RvcmUoJ2FjY291bnQnKTtcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2F1Z2VzID0gdGhpcy5nZXRTdG9yZSgnZ2F1Z2VzJylcclxuICAgIGlmKCFnYXVnZXMgfHwgZ2F1Z2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdhdWdlcyA9IGF3YWl0IHRoaXMuX2dldEN1cnJlbnRHYXVnZVZvdGVzKHdlYjMsIGFjY291bnQsIGdhdWdlcylcclxuXHJcbiAgICBsZXQgbXlQYXJhbSA9IG51bGxcclxuXHJcbiAgICBpZihwYXlsb2FkLmNvbnRlbnQgJiYgcGF5bG9hZC5jb250ZW50LmFkZHJlc3MpIHtcclxuICAgICAgbXlQYXJhbSA9IHBheWxvYWQuY29udGVudC5hZGRyZXNzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICBteVBhcmFtID0gdXJsUGFyYW1zLmdldCgncmV3YXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV3YXJkVG9rZW5BZGRyZXNzID0gbXlQYXJhbVxyXG5cclxuICAgIC8vIEZUTSwgQ1JFQU0sIE1JTSwgREFJLCBVU0RDLFxyXG4gICAgY29uc3QgZGVmYXVsdFRva2VucyA9IHRoaXMuX2dldERlZmF1bHRUb2tlbnMoKVxyXG5cclxuICAgIC8vSWYgaXQgaXMgYSB2YWxpZCB0b2tlbiwgd2UgYWRkIGl0IHRvIHRoZSBzZWFyY2ggbGlzdFxyXG4gICAgaWYocmV3YXJkVG9rZW5BZGRyZXNzICYmIHdlYjMudXRpbHMuaXNBZGRyZXNzKHJld2FyZFRva2VuQWRkcmVzcykpIHtcclxuICAgICAgbGV0IGluY2x1ZGVzVG9rZW4gPSBmYWxzZVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGVmYXVsdFRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGRlZmF1bHRUb2tlbnNbaV0uYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSByZXdhcmRUb2tlbkFkZHJlc3MudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgaW5jbHVkZXNUb2tlbiA9IHRydWVcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWluY2x1ZGVzVG9rZW4pIHtcclxuICAgICAgICBjb25zdCByZXdhcmRUb2tlbiA9IGF3YWl0IHRoaXMuX2dldFRva2VuSW5mbyh3ZWIzLCByZXdhcmRUb2tlbkFkZHJlc3MpXHJcbiAgICAgICAgZGVmYXVsdFRva2Vucy5wdXNoKHJld2FyZFRva2VuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMubWFwKGRlZmF1bHRUb2tlbnMsIGFzeW5jICh0b2tlbiwgY2FsbGJhY2spID0+IHtcclxuICAgICAgY29uc3QgYnJpYmVyeSA9IGF3YWl0IHRoaXMuX2dldEJyaWJlcnkod2ViMywgYWNjb3VudCwgZ2F1Z2VzLCBkZWZhdWx0VG9rZW5zLCB0b2tlbi5hZGRyZXNzKVxyXG4gICAgICBpZihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGJyaWJlcnkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGJyaWJlcnlcclxuICAgICAgfVxyXG4gICAgfSwgKGVyciwgYnJpYmVyaWVzKSA9PiB7XHJcbiAgICAgIGlmKGVycikge1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBmbGF0QnJpYmVyaWVzID0gYnJpYmVyaWVzLmZsYXQoKVxyXG4gICAgICBsZXQgcmV3YXJkcyA9IFtdXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBmbGF0QnJpYmVyaWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IGJyaWJlcnkgPSBmbGF0QnJpYmVyaWVzW2pdXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJyaWJlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBicmliZSA9IGJyaWJlcnlbaV1cclxuICAgICAgICAgIHJld2FyZHMucHVzaCh7XHJcbiAgICAgICAgICAgIGFjdGl2ZVBlcmlvZDogYnJpYmUuYWN0aXZlUGVyaW9kLFxyXG4gICAgICAgICAgICByZXdhcmRzVW5sb2NrOiBCaWdOdW1iZXIoYnJpYmUuYWN0aXZlUGVyaW9kKS5wbHVzKFdFRUspLnRvRml4ZWQoMCksXHJcbiAgICAgICAgICAgIGNsYWltYWJsZTogQmlnTnVtYmVyKGJyaWJlLmNsYWltYWJsZSkuZGl2KDEwKipicmliZS5yZXdhcmRUb2tlbi5kZWNpbWFscykudG9GaXhlZChicmliZS5yZXdhcmRUb2tlbi5kZWNpbWFscyksXHJcbiAgICAgICAgICAgIGNhbkNsYWltOiBicmliZS5jYW5DbGFpbSxcclxuICAgICAgICAgICAgaGFzQ2xhaW1lZDogYnJpYmUuaGFzQ2xhaW1lZCxcclxuICAgICAgICAgICAgZ2F1Z2U6IGJyaWJlLmdhdWdlLFxyXG4gICAgICAgICAgICB0b2tlbnNGb3JCcmliZTogQmlnTnVtYmVyKGJyaWJlLnRva2Vuc0ZvckJyaWJlKS5kaXYoMTAqKmJyaWJlLnJld2FyZFRva2VuLmRlY2ltYWxzKS50b0ZpeGVkKGJyaWJlLnJld2FyZFRva2VuLmRlY2ltYWxzKSxcclxuICAgICAgICAgICAgcmV3YXJkUGVyVG9rZW46IGJyaWJlLnJld2FyZFBlclRva2VuLFxyXG4gICAgICAgICAgICByZXdhcmRUb2tlbjogYnJpYmUucmV3YXJkVG9rZW5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0b3JlKHsgcmV3YXJkczogcmV3YXJkcyB9KVxyXG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdChJTkNFTlRJVkVTX0JBTEFOQ0VTX1JFVFVSTkVELCBbXSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGxldCB2b3RlcyA9IHRoaXMuZ2V0U3RvcmUoJ3ZvdGVzJylcclxuICAgIGlmKCF2b3RlcyB8fCB2b3Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2b3RlUmV3YXJkcyA9IGF3YWl0IHRoaXMuX2dldFZvdGVCcmliZXJ5KHdlYjMsIGFjY291bnQsIHZvdGVzKVxyXG4gICAgdGhpcy5zZXRTdG9yZSh7IHZvdGVSZXdhcmRzOiB2b3RlUmV3YXJkcyB9KVxyXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoSU5DRU5USVZFU19CQUxBTkNFU19SRVRVUk5FRCwgW10pO1xyXG4gIH07XHJcblxyXG4gIF9nZXRUb2tlbkluZm8gPSBhc3luYyAod2ViMywgdG9rZW5BZGRyZXNzLCBnZXRCYWxhbmNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChFUkMyMF9BQkksIHRva2VuQWRkcmVzcylcclxuXHJcbiAgICAgIGNvbnN0IFtzeW1ib2wsIGRlY2ltYWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICB0b2tlbi5tZXRob2RzLnN5bWJvbCgpLmNhbGwoKSxcclxuICAgICAgICB0b2tlbi5tZXRob2RzLmRlY2ltYWxzKCkuY2FsbCgpXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IGJhbGFuY2UgPSAwXHJcbiAgICAgIGlmKGdldEJhbGFuY2UpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRTdG9yZSgnYWNjb3VudCcpO1xyXG4gICAgICAgIGJhbGFuY2UgPSBhd2FpdCB0b2tlbi5tZXRob2RzLmJhbGFuY2VPZihhY2NvdW50LmFkZHJlc3MpLmNhbGwoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZHJlc3M6IHRva2VuQWRkcmVzcyxcclxuICAgICAgICBzeW1ib2wsXHJcbiAgICAgICAgZGVjaW1hbHM6IHBhcnNlSW50KGRlY2ltYWxzKSxcclxuICAgICAgICBiYWxhbmNlXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIF9nZXRUb2tlbkluZm8oJHt3ZWIzfSwgJHt0b2tlbkFkZHJlc3N9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICByZXR1cm4gZXhcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRWb3RlQnJpYmVyeSA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCB2b3RlcykgPT4ge1xyXG4gICAgY29uc3Qgdm90ZUJyaWJlcnlDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChWT1RFX0JSSUJFUllfQUJJLCBWT1RFX0JSSUJFUllfQUREUkVTUylcclxuICAgIGNvbnN0IHZvdGVzU291cmNlQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVk9URV9TT1VSQ0VfQUJJLCBWT1RFX1NPVVJDRV9BRERSRVNTKVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKHZvdGVzLm1hcChhc3luYyAodm90ZSkgPT4ge1xyXG5cclxuICAgICAgaWYoIXZvdGUucmV3YXJkc1BlclZvdGUgfHwgdm90ZS5yZXdhcmRzUGVyVm90ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXdhcmRzID0gYXdhaXQgUHJvbWlzZS5hbGwodm90ZS5yZXdhcmRzUGVyVm90ZS5tYXAoYXN5bmMgKHJld2FyZFRva2VuQWRkcmVzcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW2VzdGltYXRlQnJpYmUsIHJld2FyZEFtb3VudCwgdm90ZXJTdGF0ZSwgaHNhQ2xhaW1lZF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHZvdGVCcmliZXJ5Q29udHJhY3QubWV0aG9kcy5lc3RpbWF0ZV9icmliZSh2b3RlLmluZGV4LCByZXdhcmRUb2tlbkFkZHJlc3MsIGFjY291bnQuYWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgICB2b3RlQnJpYmVyeUNvbnRyYWN0Lm1ldGhvZHMucmV3YXJkX2Ftb3VudCh2b3RlLmluZGV4LCByZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgICAgdm90ZXNTb3VyY2VDb250cmFjdC5tZXRob2RzLmdldFZvdGVyU3RhdGUodm90ZS5pbmRleCwgYWNjb3VudC5hZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICAgIHZvdGVCcmliZXJ5Q29udHJhY3QubWV0aG9kcy5oYXNfY2xhaW1lZCh2b3RlLmluZGV4LCByZXdhcmRUb2tlbkFkZHJlc3MsIGFjY291bnQuYWRkcmVzcykuY2FsbCgpXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXdhcmRUb2tlbiA9IGF3YWl0IHRoaXMuX2dldFRva2VuSW5mbyh3ZWIzLCByZXdhcmRUb2tlbkFkZHJlc3MpXHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXN0aW1hdGVCcmliZTogQmlnTnVtYmVyKGVzdGltYXRlQnJpYmUpLmRpdigxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQocmV3YXJkVG9rZW4uZGVjaW1hbHMpLFxyXG4gICAgICAgICAgICByZXdhcmRBbW91bnQ6IEJpZ051bWJlcihyZXdhcmRBbW91bnQpLmRpdigxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQocmV3YXJkVG9rZW4uZGVjaW1hbHMpLFxyXG4gICAgICAgICAgICB2b3RlclN0YXRlLFxyXG4gICAgICAgICAgICBoc2FDbGFpbWVkLFxyXG4gICAgICAgICAgICB2b3RlLFxyXG4gICAgICAgICAgICByZXdhcmRUb2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuXHJcbiAgICAgIHJldHVybiByZXdhcmRzXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gcmVzLmZpbHRlcigocmV3YXJkKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXdhcmQgIT0gbnVsbFxyXG4gICAgfSkuZmxhdCgpXHJcbiAgfVxyXG5cclxuICBfZ2V0QnJpYmVyeSA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCBnYXVnZXMsIHJld2FyZFRva2VucywgcmV3YXJkVG9rZW5BZGRyZXNzKSA9PiB7XHJcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IHdlYjMuZXRoLmdldEJsb2NrTnVtYmVyKCk7XHJcblxyXG4gICAgY29uc3QgYnJpYmVyeSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChCUklCRVJZX0FCSSwgQlJJQkVSWV9BRERSRVNTKVxyXG4gICAgY29uc3QgYnJpYmVyeVYyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEJSSUJFUllfQUJJLCBCUklCRVJZX0FERFJFU1NfVjIpXHJcbiAgICBjb25zdCBicmliZXJ5VG9rZW5zQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQlJJQkVSWV9BQkksIEJSSUJFUllfVE9LRU5TX0FERFJFU1NfVjIpXHJcblxyXG4gICAgLy8gRm9yIFYyIGNhbGwgZ2F1Z2VzX3Blcl9yZXdhcmQuXHJcbiAgICAvLyBmb3JlYWNoIG9mIHRob3NlLCB3ZSBnZXQgdGhlIHVzZXIncyByZXdhcmQgb25seS4gbm8gbG9vcGluZyB0aHJvdWdoIGRlYWQgZ2F1Z2VzIGFueW1vcmUuXHJcbiAgICBjb25zdCBbZ2F1Z2VzUGVyUmV3YXJkVjJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBicmliZXJ5VjIubWV0aG9kcy5nYXVnZXNfcGVyX3Jld2FyZChyZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKVxyXG4gICAgXSk7XHJcblxyXG4gICAgbGV0IGJyaWJlcnlSZXN1bHRzUHJvbWlzZXNWMiA9IFtdXHJcbiAgICBpZihnYXVnZXNQZXJSZXdhcmRWMi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGJyaWJlcnlSZXN1bHRzUHJvbWlzZXNWMiA9IGdhdWdlc1BlclJld2FyZFYyLm1hcChhc3luYyAoZ2F1Z2UpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgW2FjdGl2ZVBlcmlvZCwgY2xhaW1hYmxlLCBsYXN0VXNlckNsYWltLCB0b2tlbnNGb3JCcmliZSwgcmV3YXJkUGVyVG9rZW5dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgYnJpYmVyeVYyLm1ldGhvZHMuYWN0aXZlX3BlcmlvZChnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICBicmliZXJ5VjIubWV0aG9kcy5jbGFpbWFibGUoYWNjb3VudC5hZGRyZXNzLCBnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICBicmliZXJ5VjIubWV0aG9kcy5sYXN0X3VzZXJfY2xhaW0oYWNjb3VudC5hZGRyZXNzLCBnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICBicmliZXJ5VG9rZW5zQ29udHJhY3QubWV0aG9kcy50b2tlbnNfZm9yX2JyaWJlKGFjY291bnQuYWRkcmVzcywgZ2F1Z2UsIHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgYnJpYmVyeVYyLm1ldGhvZHMucmV3YXJkX3Blcl90b2tlbihnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2ZXJzaW9uOiAyLFxyXG4gICAgICAgICAgY2xhaW1hYmxlLFxyXG4gICAgICAgICAgbGFzdFVzZXJDbGFpbSxcclxuICAgICAgICAgIGFjdGl2ZVBlcmlvZCxcclxuICAgICAgICAgIHRva2Vuc0ZvckJyaWJlLFxyXG4gICAgICAgICAgcmV3YXJkUGVyVG9rZW4sXHJcbiAgICAgICAgICBjYW5DbGFpbTogQmlnTnVtYmVyKGJsb2NrKS5sdChCaWdOdW1iZXIoYWN0aXZlUGVyaW9kKS5wbHVzKFdFRUspKSxcclxuICAgICAgICAgIGhhc0NsYWltZWQ6IEJpZ051bWJlcihsYXN0VXNlckNsYWltKS5lcShhY3RpdmVQZXJpb2QpLFxyXG4gICAgICAgICAgZ2F1Z2U6IGdhdWdlcy5maWx0ZXIoKGcpID0+IHsgcmV0dXJuIGcuZ2F1Z2VBZGRyZXNzLnRvTG93ZXJDYXNlKCkgPT09IGdhdWdlLnRvTG93ZXJDYXNlKCkgfSlbMF0sXHJcbiAgICAgICAgICByZXdhcmRUb2tlbjogcmV3YXJkVG9rZW5zLmZpbHRlcigocikgPT4geyByZXR1cm4gci5hZGRyZXNzLnRvTG93ZXJDYXNlKCkgPT09IHJld2FyZFRva2VuQWRkcmVzcy50b0xvd2VyQ2FzZSgpIH0pWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJyaWJlcnlSZXN1bHRzVjIgPSBhd2FpdCBQcm9taXNlLmFsbChicmliZXJ5UmVzdWx0c1Byb21pc2VzVjIpO1xyXG4gICAgcmV0dXJuIFticmliZXJ5UmVzdWx0c1YyXVxyXG4gIH1cclxuXHJcbiAgX2dldEN1cnJlbnRHYXVnZVZvdGVzID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIGdhdWdlcykgPT4ge1xyXG4gICAgY29uc3QgZ2F1Z2VDb250cm9sbGVyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEdBVUdFX0NPTlRST0xMRVJfQUJJLCBHQVVHRV9DT05UUk9MTEVSX0FERFJFU1MpXHJcblxyXG4gICAgY29uc3QgdXNlclZvdGVTbG9wZXMgPSBhd2FpdCBQcm9taXNlLmFsbChnYXVnZXMubWFwKChnYXVnZSkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2F1Z2VDb250cm9sbGVyLm1ldGhvZHMudm90ZV91c2VyX3Nsb3BlcyhhY2NvdW50LmFkZHJlc3MsIGdhdWdlLmdhdWdlQWRkcmVzcykuY2FsbCgpXHJcbiAgICB9KSk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdhdWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBnYXVnZXNbaV0udm90ZXMgPSB1c2VyVm90ZVNsb3Blc1tpXVxyXG4gICAgICBnYXVnZXNbaV0udm90ZXMudXNlclZvdGVTbG9wZUFtb3VudCA9IEJpZ051bWJlcih1c2VyVm90ZVNsb3Blc1tpXS5zbG9wZSkuZGl2KDEwKioxMCkudG9GaXhlZCgxMClcclxuICAgICAgZ2F1Z2VzW2ldLnZvdGVzLnVzZXJWb3RlU2xvcGVQZXJjZW50ID0gQmlnTnVtYmVyKHVzZXJWb3RlU2xvcGVzW2ldLnBvd2VyKS5kaXYoMTAwKS50b0ZpeGVkKDIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdhdWdlc1xyXG4gIH1cclxuXHJcbiAgY2xhaW1SZXdhcmQgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0U3RvcmUoJ2FjY291bnQnKTtcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcmV3YXJkIH0gPSBwYXlsb2FkLmNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5fY2FsbENsYWltUmV3YXJkKHdlYjMsIGFjY291bnQsIHJld2FyZC5nYXVnZS5nYXVnZUFkZHJlc3MsIHJld2FyZC5yZXdhcmRUb2tlbi5hZGRyZXNzLCByZXdhcmQudmVyc2lvbiwgIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoUkVXQVJEX0NMQUlNRUQsIHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jYWxsQ2xhaW1SZXdhcmQgPSBhc3luYyAod2ViMywgYWNjb3VudCwgZ2F1Z2UsIHJld2FyZFRva2VuLCB2ZXJzaW9uLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgbGV0IGFkZHJlc3MgPSBCUklCRVJZX0FERFJFU1NfVjJcclxuICAgIGlmKHZlcnNpb24gPT09IDEpIHtcclxuICAgICAgYWRkcmVzcyA9IEJSSUJFUllfQUREUkVTU1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnJpYmVyeSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChCUklCRVJZX0FCSSwgYWRkcmVzcyk7XHJcbiAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0R2FzUHJpY2UoKTtcclxuXHJcbiAgICB0aGlzLl9jYWxsQ29udHJhY3RXYWl0KHdlYjMsIGJyaWJlcnksICdjbGFpbV9yZXdhcmQnLCBbZ2F1Z2UsIHJld2FyZFRva2VuXSwgYWNjb3VudCwgZ2FzUHJpY2UsIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTLCB7fSwgY2FsbGJhY2spO1xyXG4gIH07XHJcblxyXG4gIHNlYXJjaFRva2VuID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHBheWxvYWQuY29udGVudDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2dldFRva2VuSW5mbyh3ZWIzLCBhZGRyZXNzLCB0cnVlKVxyXG4gICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoU0VBUkNIX1RPS0VOX1JFVFVSTkVELCB0b2tlbik7XHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGV4KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUmV3YXJkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IGFjY291bnQgPSBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFN0b3JlKCdhY2NvdW50Jyk7XHJcbiAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHJld2FyZFRva2VuLCByZXdhcmRBbW91bnQsIGdhdWdlIH0gPSBwYXlsb2FkLmNvbnRlbnQ7XHJcblxyXG4gICAgbGV0IHNlbmRBbW91bnQgPSBCaWdOdW1iZXIocmV3YXJkQW1vdW50KS50aW1lcygxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQoMClcclxuXHJcbiAgICB0aGlzLl9jaGVja0FsbG93YW5jZSh3ZWIzLCByZXdhcmRUb2tlbi5hZGRyZXNzLCBhY2NvdW50LmFkZHJlc3MsIEJSSUJFUllfQUREUkVTU19WMiwgc2VuZEFtb3VudCwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2NhbGxBZGRSZXdhcmQod2ViMywgYWNjb3VudCwgZ2F1Z2UuZ2F1Z2VBZGRyZXNzLCByZXdhcmRUb2tlbi5hZGRyZXNzLCBzZW5kQW1vdW50LCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoQUREX1JFV0FSRF9SRVRVUk5FRCwgcmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2NoZWNrQWxsb3dhbmNlID0gYXN5bmMgKHdlYjMsIHRva2VuLCBvd25lciwgc3BlbmRlciwgc3BlbmRpbmdBbW91bnQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEVSQzIwX0FCSSwgdG9rZW4pXHJcbiAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuYWxsb3dhbmNlKG93bmVyLCBzcGVuZGVyKS5jYWxsKCk7XHJcblxyXG4gICAgaWYoQmlnTnVtYmVyKHNwZW5kaW5nQW1vdW50KS5sdGUoYWxsb3dhbmNlKSkge1xyXG4gICAgICBjYWxsYmFjaygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0R2FzUHJpY2UoKTtcclxuICAgICAgdGhpcy5fY2FsbENvbnRyYWN0V2FpdCh3ZWIzLCB0b2tlbkNvbnRyYWN0LCAnYXBwcm92ZScsIFtzcGVuZGVyLCBNQVhfVUlOVDI1Nl0sIHsgYWRkcmVzczogb3duZXIgfSwgZ2FzUHJpY2UsIG51bGwsIG51bGwsIGNhbGxiYWNrKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NhbGxBZGRSZXdhcmQgPSBhc3luYyAod2ViMywgYWNjb3VudCwgZ2F1Z2UsIHJld2FyZFRva2VuLCByZXdhcmRBbW91bnQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCBicmliZXJ5ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEJSSUJFUllfQUJJLCBCUklCRVJZX0FERFJFU1NfVjIpO1xyXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldEdhc1ByaWNlKCk7XHJcblxyXG4gICAgdGhpcy5fY2FsbENvbnRyYWN0V2FpdCh3ZWIzLCBicmliZXJ5LCAnYWRkX3Jld2FyZF9hbW91bnQnLCBbZ2F1Z2UsIHJld2FyZFRva2VuLCByZXdhcmRBbW91bnRdLCBhY2NvdW50LCBnYXNQcmljZSwgR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMsIHt9LCBjYWxsYmFjayk7XHJcbiAgfTtcclxuXHJcbiAgYWRkVm90ZVJld2FyZCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gc3RvcmVzLmFjY291bnRTdG9yZS5nZXRTdG9yZSgnYWNjb3VudCcpO1xyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50LCB2b3RlIH0gPSBwYXlsb2FkLmNvbnRlbnQ7XHJcblxyXG4gICAgbGV0IHNlbmRBbW91bnQgPSBCaWdOdW1iZXIocmV3YXJkQW1vdW50KS50aW1lcygxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQoMClcclxuXHJcbiAgICB0aGlzLl9jaGVja0FsbG93YW5jZSh3ZWIzLCByZXdhcmRUb2tlbi5hZGRyZXNzLCBhY2NvdW50LmFkZHJlc3MsIFZPVEVfQlJJQkVSWV9BRERSRVNTLCBzZW5kQW1vdW50LCAoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2FsbEFkZFZvdGVSZXdhcmQod2ViMywgYWNjb3VudCwgdm90ZS5pbmRleCwgcmV3YXJkVG9rZW4uYWRkcmVzcywgc2VuZEFtb3VudCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEFERF9WT1RFX1JFV0FSRF9SRVRVUk5FRCwgcmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2NhbGxBZGRWb3RlUmV3YXJkID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIHZvdGVJbmRleCwgcmV3YXJkVG9rZW4sIHJld2FyZEFtb3VudCwgY2FsbGJhY2spID0+IHtcclxuICAgIGNvbnN0IGJyaWJlcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVk9URV9CUklCRVJZX0FCSSwgVk9URV9CUklCRVJZX0FERFJFU1MpO1xyXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldEdhc1ByaWNlKCk7XHJcblxyXG4gICAgdGhpcy5fY2FsbENvbnRyYWN0V2FpdCh3ZWIzLCBicmliZXJ5LCAnYWRkX3Jld2FyZF9hbW91bnQnLCBbdm90ZUluZGV4LCByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50XSwgYWNjb3VudCwgZ2FzUHJpY2UsIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTLCB7fSwgY2FsbGJhY2spO1xyXG4gIH07XHJcblxyXG4gIF9jYWxsQ29udHJhY3QgPSAod2ViMywgY29udHJhY3QsIG1ldGhvZCwgcGFyYW1zLCBhY2NvdW50LCBnYXNQcmljZSwgZGlzcGF0Y2hFdmVudCwgZGlzcGF0Y2hFdmVudFBheWxvYWQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgIGNvbnRyYWN0Lm1ldGhvZHNbbWV0aG9kXSguLi5wYXJhbXMpXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50LmFkZHJlc3MsXHJcbiAgICAgICAgZ2FzUHJpY2U6IHdlYjMudXRpbHMudG9XZWkoZ2FzUHJpY2UsICdnd2VpJyksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbigndHJhbnNhY3Rpb25IYXNoJywgZnVuY3Rpb24gKGhhc2gpIHtcclxuICAgICAgICBjb250ZXh0LmVtaXR0ZXIuZW1pdChUWF9TVUJNSVRURUQsIGhhc2gpO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGhhc2gpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2NvbmZpcm1hdGlvbicsIGZ1bmN0aW9uIChjb25maXJtYXRpb25OdW1iZXIsIHJlY2VpcHQpIHtcclxuICAgICAgICBpZiAoZGlzcGF0Y2hFdmVudCAmJiBjb25maXJtYXRpb25OdW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogZGlzcGF0Y2hFdmVudCwgY29udGVudDogZGlzcGF0Y2hFdmVudFBheWxvYWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKCFlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKCctMzI2MDEnKSkge1xyXG4gICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmICghZXJyb3IudG9TdHJpbmcoKS5pbmNsdWRlcygnLTMyNjAxJykpIHtcclxuICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF9jYWxsQ29udHJhY3RXYWl0ID0gKHdlYjMsIGNvbnRyYWN0LCBtZXRob2QsIHBhcmFtcywgYWNjb3VudCwgZ2FzUHJpY2UsIGRpc3BhdGNoRXZlbnQsIGRpc3BhdGNoRXZlbnRQYXlsb2FkLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XHJcbiAgICBjb250cmFjdC5tZXRob2RzW21ldGhvZF0oLi4ucGFyYW1zKVxyXG4gICAgICAuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudC5hZGRyZXNzLFxyXG4gICAgICAgIGdhc1ByaWNlOiB3ZWIzLnV0aWxzLnRvV2VpKGdhc1ByaWNlLCAnZ3dlaScpLFxyXG4gICAgICB9KVxyXG4gICAgICAub24oJ3RyYW5zYWN0aW9uSGFzaCcsIGZ1bmN0aW9uIChoYXNoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaGFzaClcclxuICAgICAgICAvLyBjb250ZXh0LmVtaXR0ZXIuZW1pdChUWF9TVUJNSVRURUQsIGhhc2gpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ3JlY2VpcHQnLCBmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgIGNvbnRleHQuZW1pdHRlci5lbWl0KFRYX1NVQk1JVFRFRCwgcmVjZWlwdC50cmFuc2FjdGlvbkhhc2gpO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlY2VpcHQudHJhbnNhY3Rpb25IYXNoKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3BhdGNoRXZlbnQpIHtcclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IGRpc3BhdGNoRXZlbnQsIGNvbnRlbnQ6IGRpc3BhdGNoRXZlbnRQYXlsb2FkIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGlmICghZXJyb3IudG9TdHJpbmcoKS5pbmNsdWRlcygnLTMyNjAxJykpIHtcclxuICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoIWVycm9yLnRvU3RyaW5nKCkuaW5jbHVkZXMoJy0zMjYwMScpKSB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==