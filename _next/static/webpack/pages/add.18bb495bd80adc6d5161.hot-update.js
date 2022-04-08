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
              lpTokenAddress = '';

              if (!['0', '5', '6'].includes(gaugeType)) {
                _context5.next = 23;
                break;
              }

              gauge = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["GAUGE_CONTRACT_ABI"], gaugeAddress);
              _context5.next = 16;
              return gauge.methods.lp_token().call();

            case 16:
              lpTokenAddress = _context5.sent;
              // if not 0, we cant get LP token info cause it is on a different chain
              lpToken = new web3.eth.Contract(_abis__WEBPACK_IMPORTED_MODULE_9__["ERC20_ABI"], lpTokenAddress);
              _context5.next = 20;
              return lpToken.methods.name().call();

            case 20:
              name = _context5.sent;
              _context5.next = 46;
              break;

            case 23:
              _context5.t0 = gaugeAddress;
              _context5.next = _context5.t0 === '0xb9C05B8EE41FDCbd9956114B3aF15834FDEDCb54' ? 26 : _context5.t0 === '0xfE1A3dD8b169fB5BF0D5dbFe813d956F39fF6310' ? 28 : _context5.t0 === '0xC48f4653dd6a9509De44c92beb0604BEA3AEe714' ? 30 : _context5.t0 === '0x6955a55416a06839309018A8B0cB72c4DDC11f15' ? 32 : _context5.t0 === '0x488E6ef919C2bB9de535C634a80afb0114DA8F62' ? 34 : _context5.t0 === '0xfDb129ea4b6f557b07BcDCedE54F665b7b6Bc281' ? 36 : _context5.t0 === '0x060e386eCfBacf42Aa72171Af9EFe17b3993fC4F' ? 38 : _context5.t0 === '0x6C09F6727113543Fd061a721da512B7eFCDD0267' ? 40 : _context5.t0 === '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168' ? 42 : _context5.t0 === '0xd8b712d29381748dB89c36BCa0138d7c75866ddF' ? 44 : 46;
              break;

            case 26:
              name = 'Curve.fi DAI/USDC (DAI+USDC)';
              return _context5.abrupt("break", 46);

            case 28:
              name = 'Curve.fi fUSDT/DAI/USDC';
              return _context5.abrupt("break", 46);

            case 30:
              name = 'Curve.fi amDAI/amUSDC/amUSDT';
              return _context5.abrupt("break", 46);

            case 32:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 46);

            case 34:
              name = 'Curve.fi amWBTC/renBTC';
              return _context5.abrupt("break", 46);

            case 36:
              name = 'Curve.fi WBTC/renBTC';
              return _context5.abrupt("break", 46);

            case 38:
              name = 'Curve USD-BTC-ETH';
              return _context5.abrupt("break", 46);

            case 40:
              name = 'Curve.fi wxDAI/USDC/USDT';
              return _context5.abrupt("break", 46);

            case 42:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 46);

            case 44:
              name = 'Curve.fi Factory USD Metapool: Magic Internet Money 3Pool';
              return _context5.abrupt("break", 46);

            case 46:
              return _context5.abrupt("return", {
                gaugeAddress: gaugeAddress,
                lpTokenAddress: lpTokenAddress,
                name: name,
                gaugeWeight: gaugeWeight,
                gaugeType: gaugeType,
                gaugeTypeName: _this._mapGaugeTypeToName(gaugeType),
                logo: '/unknown-logo.png'
              });

            case 49:
              _context5.prev = 49;
              _context5.t1 = _context5["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getGaugeInfo(".concat(web3, ", ").concat(gaugeController, ", ").concat(index, ")"));
              console.log(_context5.t1);
              console.log("------------------------------------");
              return _context5.abrupt("return", null);

            case 56:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 49]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL2luY2VudGl2ZXNTdG9yZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJTdG9yZSIsImRpc3BhdGNoZXIiLCJlbWl0dGVyIiwiaW5kZXgiLCJzdG9yZSIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwiU1RPUkVfVVBEQVRFRCIsInBheWxvYWQiLCJzdG9yZXMiLCJhY2NvdW50U3RvcmUiLCJnZXRXZWIzUHJvdmlkZXIiLCJ3ZWIzIiwiX2dldEdhdWdlcyIsImdhdWdlcyIsInNldFN0b3JlIiwiY29uZmlndXJlZCIsIl9nZXRWb3RlcyIsInZvdGVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMiLCJJTkNFTlRJVkVTX0NPTkZJR1VSRUQiLCJ2b3Rlc1NvdXJjZUNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJWT1RFX1NPVVJDRV9BQkkiLCJWT1RFX1NPVVJDRV9BRERSRVNTIiwidm90ZXNCcmliZXJ5Q29udHJhY3QiLCJWT1RFX0JSSUJFUllfQUJJIiwiVk9URV9CUklCRVJZX0FERFJFU1MiLCJtZXRob2RzIiwidm90ZXNMZW5ndGgiLCJjYWxsIiwiblZvdGVzIiwiYXJyIiwiQXJyYXkiLCJwYXJzZUludCIsImtleXMiLCJwcm9taXNlcyIsIm1hcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwidm90ZUluZm8iLCJfZ2V0Vm90ZUluZm8iLCJhbGwiLCJyZXN1bHQiLCJnZXRWb3RlIiwicmV3YXJkc19wZXJfdm90ZSIsInZvdGUiLCJyZXdhcmRzUGVyVm90ZSIsImdhdWdlQ29udHJvbGxlciIsIkdBVUdFX0NPTlRST0xMRVJfQUJJIiwiR0FVR0VfQ09OVFJPTExFUl9BRERSRVNTIiwibl9nYXVnZXMiLCJuR2F1Z2VzIiwiZ2F1Z2VJbmZvIiwiX2dldEdhdWdlSW5mbyIsInJlcyIsImZpbHRlciIsImciLCJnYXVnZUFkZHJlc3MiLCJnYXVnZV90eXBlcyIsImdhdWdlX3JlbGF0aXZlX3dlaWdodCIsImdhdWdlVHlwZSIsImdhdWdlV2VpZ2h0IiwibmFtZSIsImxwVG9rZW5BZGRyZXNzIiwiaW5jbHVkZXMiLCJnYXVnZSIsIkdBVUdFX0NPTlRSQUNUX0FCSSIsImxwX3Rva2VuIiwibHBUb2tlbiIsIkVSQzIwX0FCSSIsImdhdWdlVHlwZU5hbWUiLCJfbWFwR2F1Z2VUeXBlVG9OYW1lIiwibG9nbyIsImFkZHJlc3MiLCJzeW1ib2wiLCJkZWNpbWFscyIsImdldFN0b3JlIiwiYWNjb3VudCIsImxlbmd0aCIsIl9nZXRDdXJyZW50R2F1Z2VWb3RlcyIsIm15UGFyYW0iLCJjb250ZW50IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJyZXdhcmRUb2tlbkFkZHJlc3MiLCJkZWZhdWx0VG9rZW5zIiwiX2dldERlZmF1bHRUb2tlbnMiLCJ1dGlscyIsImlzQWRkcmVzcyIsImluY2x1ZGVzVG9rZW4iLCJpIiwidG9Mb3dlckNhc2UiLCJfZ2V0VG9rZW5JbmZvIiwicmV3YXJkVG9rZW4iLCJwdXNoIiwiYXN5bmMiLCJ0b2tlbiIsImNhbGxiYWNrIiwiX2dldEJyaWJlcnkiLCJicmliZXJ5IiwiZXJyIiwiYnJpYmVyaWVzIiwiRVJST1IiLCJmbGF0QnJpYmVyaWVzIiwiZmxhdCIsInJld2FyZHMiLCJqIiwiYnJpYmUiLCJhY3RpdmVQZXJpb2QiLCJyZXdhcmRzVW5sb2NrIiwiQmlnTnVtYmVyIiwicGx1cyIsIldFRUsiLCJ0b0ZpeGVkIiwiY2xhaW1hYmxlIiwiZGl2IiwiY2FuQ2xhaW0iLCJoYXNDbGFpbWVkIiwidG9rZW5zRm9yQnJpYmUiLCJyZXdhcmRQZXJUb2tlbiIsIklOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQiLCJfZ2V0Vm90ZUJyaWJlcnkiLCJ2b3RlUmV3YXJkcyIsInRva2VuQWRkcmVzcyIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwidm90ZUJyaWJlcnlDb250cmFjdCIsImVzdGltYXRlX2JyaWJlIiwicmV3YXJkX2Ftb3VudCIsImdldFZvdGVyU3RhdGUiLCJoYXNfY2xhaW1lZCIsImVzdGltYXRlQnJpYmUiLCJyZXdhcmRBbW91bnQiLCJ2b3RlclN0YXRlIiwiaHNhQ2xhaW1lZCIsInJld2FyZCIsInJld2FyZFRva2VucyIsImdldEJsb2NrTnVtYmVyIiwiYmxvY2siLCJCUklCRVJZX0FCSSIsIkJSSUJFUllfQUREUkVTUyIsImJyaWJlcnlWMiIsIkJSSUJFUllfQUREUkVTU19WMiIsImJyaWJlcnlUb2tlbnNDb250cmFjdCIsIkJSSUJFUllfVE9LRU5TX0FERFJFU1NfVjIiLCJnYXVnZXNfcGVyX3Jld2FyZCIsImdhdWdlc1BlclJld2FyZFYyIiwiYnJpYmVyeVJlc3VsdHNQcm9taXNlc1YyIiwiYWN0aXZlX3BlcmlvZCIsImxhc3RfdXNlcl9jbGFpbSIsInRva2Vuc19mb3JfYnJpYmUiLCJyZXdhcmRfcGVyX3Rva2VuIiwibGFzdFVzZXJDbGFpbSIsInZlcnNpb24iLCJsdCIsImVxIiwiciIsImJyaWJlcnlSZXN1bHRzVjIiLCJ2b3RlX3VzZXJfc2xvcGVzIiwidXNlclZvdGVTbG9wZXMiLCJ1c2VyVm90ZVNsb3BlQW1vdW50Iiwic2xvcGUiLCJ1c2VyVm90ZVNsb3BlUGVyY2VudCIsInBvd2VyIiwiX2NhbGxDbGFpbVJld2FyZCIsIlJFV0FSRF9DTEFJTUVEIiwiZ2V0R2FzUHJpY2UiLCJnYXNQcmljZSIsIl9jYWxsQ29udHJhY3RXYWl0IiwiU0VBUkNIX1RPS0VOX1JFVFVSTkVEIiwic2VuZEFtb3VudCIsInRpbWVzIiwiX2NoZWNrQWxsb3dhbmNlIiwiX2NhbGxBZGRSZXdhcmQiLCJBRERfUkVXQVJEX1JFVFVSTkVEIiwib3duZXIiLCJzcGVuZGVyIiwic3BlbmRpbmdBbW91bnQiLCJ0b2tlbkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwibHRlIiwiTUFYX1VJTlQyNTYiLCJfY2FsbEFkZFZvdGVSZXdhcmQiLCJBRERfVk9URV9SRVdBUkRfUkVUVVJORUQiLCJ2b3RlSW5kZXgiLCJjb250cmFjdCIsIm1ldGhvZCIsInBhcmFtcyIsImRpc3BhdGNoRXZlbnQiLCJkaXNwYXRjaEV2ZW50UGF5bG9hZCIsImNvbnRleHQiLCJzZW5kIiwiZnJvbSIsInRvV2VpIiwib24iLCJoYXNoIiwiVFhfU1VCTUlUVEVEIiwiY29uZmlybWF0aW9uTnVtYmVyIiwicmVjZWlwdCIsImVycm9yIiwidG9TdHJpbmciLCJtZXNzYWdlIiwidHJhbnNhY3Rpb25IYXNoIiwicmVnaXN0ZXIiLCJDT05GSUdVUkVfSU5DRU5USVZFUyIsImNvbmZpZ3VyZSIsImdldEJhbGFuY2VzIiwiQ0xBSU1fUkVXQVJEIiwiY2xhaW1SZXdhcmQiLCJTRUFSQ0hfVE9LRU4iLCJzZWFyY2hUb2tlbiIsIkFERF9SRVdBUkQiLCJhZGRSZXdhcmQiLCJBRERfVk9URV9SRVdBUkQiLCJhZGRWb3RlUmV3YXJkIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBMEJBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztJQUVNQyxLLEdBQ0osZUFBWUMsVUFBWixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQTs7QUFBQSx1TEF3Q3RCLFVBQUNDLEtBQUQsRUFBVztBQUNwQixXQUFPLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRCxLQUFYLENBQVA7QUFDRCxHQTFDZ0M7O0FBQUEsdUxBNEN0QixVQUFDRSxHQUFELEVBQVM7QUFDbEIsU0FBSSxDQUFDRCxLQUFMLG1DQUFrQixLQUFJLENBQUNBLEtBQXZCLEdBQWlDQyxHQUFqQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNILEtBQWpCO0FBQ0EsV0FBTyxLQUFJLENBQUNGLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkMsd0RBQWxCLENBQVA7QUFDRCxHQWhEZ0M7O0FBQUE7QUFBQSxrVkFrRHJC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REFBTDtBQUNFLGFBQUtDLGFBQUwsQ0FBbUJ4TixPQUFuQjtBQUNBOztBQUNGO0FBQVMsU0FDUjtBQXBCSDtBQXNCRCxHQXZCRCxDQXVCRXlOLElBdkJGLENBdUJPLElBdkJQLENBREY7QUEwQkQsQzs7QUEwc0JZbk8sb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkLjE4YmI0OTViZDgwYWRjNmQ1MTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXN5bmMgZnJvbSAnYXN5bmMnO1xyXG5pbXBvcnQge1xyXG4gIE1BWF9VSU5UMjU2LFxyXG4gIFdFRUssXHJcbiAgRVJST1IsXHJcbiAgVFhfU1VCTUlUVEVELFxyXG4gIFNUT1JFX1VQREFURUQsXHJcbiAgSU5DRU5USVZFU19VUERBVEVELFxyXG4gIENPTkZJR1VSRV9JTkNFTlRJVkVTLFxyXG4gIElOQ0VOVElWRVNfQ09ORklHVVJFRCxcclxuICBHRVRfSU5DRU5USVZFU19CQUxBTkNFUyxcclxuICBJTkNFTlRJVkVTX0JBTEFOQ0VTX1JFVFVSTkVELFxyXG4gIEJSSUJFUllfQUREUkVTUyxcclxuICBCUklCRVJZX0FERFJFU1NfVjIsXHJcbiAgQlJJQkVSWV9UT0tFTlNfQUREUkVTU19WMixcclxuICBHQVVHRV9DT05UUk9MTEVSX0FERFJFU1MsXHJcbiAgVk9URV9CUklCRVJZX0FERFJFU1MsXHJcbiAgVk9URV9TT1VSQ0VfQUREUkVTUyxcclxuICBDTEFJTV9SRVdBUkQsXHJcbiAgUkVXQVJEX0NMQUlNRUQsXHJcbiAgU0VBUkNIX1RPS0VOLFxyXG4gIFNFQVJDSF9UT0tFTl9SRVRVUk5FRCxcclxuICBBRERfUkVXQVJELFxyXG4gIEFERF9SRVdBUkRfUkVUVVJORUQsXHJcbiAgQUREX1ZPVEVfUkVXQVJELFxyXG4gIEFERF9WT1RFX1JFV0FSRF9SRVRVUk5FRFxyXG59IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmltcG9ydCB7IEVSQzIwX0FCSSwgQlJJQkVSWV9BQkksIEdBVUdFX0NPTlRST0xMRVJfQUJJLCBHQVVHRV9DT05UUkFDVF9BQkksIFZPVEVfU09VUkNFX0FCSSwgVk9URV9CUklCRVJZX0FCSSB9IGZyb20gJy4vYWJpcyc7XHJcblxyXG5cclxuaW1wb3J0IHN0b3JlcyBmcm9tICcuLyc7XHJcbmltcG9ydCB7IGJuRGVjIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgQmlnTnVtYmVyIGZyb20gJ2JpZ251bWJlci5qcyc7XHJcblxyXG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcclxuXHJcbmNsYXNzIFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcihkaXNwYXRjaGVyLCBlbWl0dGVyKSB7XHJcbiAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xyXG4gICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcclxuXHJcbiAgICB0aGlzLnN0b3JlID0ge1xyXG4gICAgICBjb25maWd1cmVkOiBmYWxzZSxcclxuICAgICAgZ2F1Z2VzOiBbXSxcclxuICAgICAgdm90ZXM6IFtdLFxyXG4gICAgICByZXdhcmRzOiBbXSxcclxuICAgICAgdm90ZVJld2FyZHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoZXIucmVnaXN0ZXIoXHJcbiAgICAgIGZ1bmN0aW9uIChwYXlsb2FkKSB7XHJcbiAgICAgICAgc3dpdGNoIChwYXlsb2FkLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgQ09ORklHVVJFX0lOQ0VOVElWRVM6XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJlKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVM6XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QmFsYW5jZXMocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBDTEFJTV9SRVdBUkQ6XHJcbiAgICAgICAgICAgIHRoaXMuY2xhaW1SZXdhcmQocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTRUFSQ0hfVE9LRU46XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVG9rZW4ocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBRERfUkVXQVJEOlxyXG4gICAgICAgICAgICB0aGlzLmFkZFJld2FyZChwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFERF9WT1RFX1JFV0FSRDpcclxuICAgICAgICAgICAgdGhpcy5hZGRWb3RlUmV3YXJkKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRTdG9yZSA9IChpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmVbaW5kZXhdO1xyXG4gIH07XHJcblxyXG4gIHNldFN0b3JlID0gKG9iaikgPT4ge1xyXG4gICAgdGhpcy5zdG9yZSA9IHsgLi4udGhpcy5zdG9yZSwgLi4ub2JqIH07XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0b3JlKTtcclxuICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChTVE9SRV9VUERBVEVEKTtcclxuICB9O1xyXG5cclxuICBjb25maWd1cmUgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2F1Z2VzID0gYXdhaXQgdGhpcy5fZ2V0R2F1Z2VzKHdlYjMpO1xyXG4gICAgdGhpcy5zZXRTdG9yZSh7IGdhdWdlczogZ2F1Z2VzLCBjb25maWd1cmVkOiB0cnVlIH0pXHJcblxyXG4gICAgY29uc3Qgdm90ZXMgPSBhd2FpdCB0aGlzLl9nZXRWb3Rlcyh3ZWIzKTtcclxuICAgIHRoaXMuc2V0U3RvcmUoeyB2b3Rlczogdm90ZXMgfSlcclxuXHJcbiAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBHRVRfSU5DRU5USVZFU19CQUxBTkNFUyB9KTtcclxuICAgIHRoaXMuZW1pdHRlci5lbWl0KElOQ0VOVElWRVNfQ09ORklHVVJFRCk7XHJcbiAgfTtcclxuXHJcbiAgX2dldFZvdGVzID0gYXN5bmMgKHdlYjMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHZvdGVzU291cmNlQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVk9URV9TT1VSQ0VfQUJJLCBWT1RFX1NPVVJDRV9BRERSRVNTKVxyXG4gICAgICBjb25zdCB2b3Rlc0JyaWJlcnlDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChWT1RFX0JSSUJFUllfQUJJLCBWT1RFX0JSSUJFUllfQUREUkVTUylcclxuICAgICAgY29uc3QgblZvdGVzID0gYXdhaXQgdm90ZXNTb3VyY2VDb250cmFjdC5tZXRob2RzLnZvdGVzTGVuZ3RoKCkuY2FsbCgpXHJcblxyXG4gICAgICBjb25zdCBhcnIgPSBbLi4uQXJyYXkocGFyc2VJbnQoblZvdGVzKSkua2V5cygpXVxyXG5cclxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBhcnIubWFwKGluZGV4ID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgdm90ZUluZm8gPSB0aGlzLl9nZXRWb3RlSW5mbyh3ZWIzLCB2b3Rlc1NvdXJjZUNvbnRyYWN0LCB2b3Rlc0JyaWJlcnlDb250cmFjdCwgaW5kZXgpO1xyXG4gICAgICAgICAgcmVzb2x2ZSh2b3RlSW5mbyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgfSBjYXRjaChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhgZXhjZXB0aW9uIHRocm93biBpbiBfZ2V0Vm90ZXMoJHt3ZWIzfSlgKVxyXG4gICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRWb3RlSW5mbyA9IGFzeW5jICh3ZWIzLCB2b3Rlc1NvdXJjZUNvbnRyYWN0LCB2b3Rlc0JyaWJlcnlDb250cmFjdCwgaW5kZXgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFt2b3RlLCByZXdhcmRzUGVyVm90ZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgdm90ZXNTb3VyY2VDb250cmFjdC5tZXRob2RzLmdldFZvdGUoaW5kZXgpLmNhbGwoKSxcclxuICAgICAgICB2b3Rlc0JyaWJlcnlDb250cmFjdC5tZXRob2RzLnJld2FyZHNfcGVyX3ZvdGUoaW5kZXgpLmNhbGwoKVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgdm90ZSxcclxuICAgICAgICByZXdhcmRzUGVyVm90ZSxcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhgZXhjZXB0aW9uIHRocm93biBpbiA0KCR7d2ViM30sICR7dm90ZXNTb3VyY2VDb250cmFjdH0sICR7dm90ZXNCcmliZXJ5Q29udHJhY3R9LCAke2luZGV4fSlgKVxyXG4gICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgcmV0dXJuIGV4XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0R2F1Z2VzID0gYXN5bmMgKHdlYjMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGdhdWdlQ29udHJvbGxlciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChHQVVHRV9DT05UUk9MTEVSX0FCSSwgR0FVR0VfQ09OVFJPTExFUl9BRERSRVNTKVxyXG4gICAgICBjb25zdCBuR2F1Z2VzID0gYXdhaXQgZ2F1Z2VDb250cm9sbGVyLm1ldGhvZHMubl9nYXVnZXMoKS5jYWxsKClcclxuXHJcbiAgICAgIGNvbnN0IGFyciA9IFsuLi5BcnJheShwYXJzZUludChuR2F1Z2VzKSkua2V5cygpXVxyXG5cclxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBhcnIubWFwKGluZGV4ID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ2F1Z2VJbmZvID0gdGhpcy5fZ2V0R2F1Z2VJbmZvKHdlYjMsIGdhdWdlQ29udHJvbGxlciwgaW5kZXgpO1xyXG4gICAgICAgICAgcmVzb2x2ZShnYXVnZUluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgICAgY29uc3QgcmVzID0gcmVzdWx0LmZpbHRlcigoZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBnICE9PSBudWxsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gcmVzXHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIF9nZXRHYXVnZXMoJHt3ZWIzfSlgKVxyXG4gICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRHYXVnZUluZm8gPSBhc3luYyAod2ViMywgZ2F1Z2VDb250cm9sbGVyLCBpbmRleCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZ2F1Z2VBZGRyZXNzID0gYXdhaXQgZ2F1Z2VDb250cm9sbGVyLm1ldGhvZHMuZ2F1Z2VzKGluZGV4KS5jYWxsKClcclxuICAgICAgY29uc3QgW2dhdWdlVHlwZSwgZ2F1Z2VXZWlnaHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGdhdWdlQ29udHJvbGxlci5tZXRob2RzLmdhdWdlX3R5cGVzKGdhdWdlQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgIGdhdWdlQ29udHJvbGxlci5tZXRob2RzLmdhdWdlX3JlbGF0aXZlX3dlaWdodChnYXVnZUFkZHJlc3MpLmNhbGwoKVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCBuYW1lID0gJ1Vua25vd24nXHJcbiAgICAgIGxldCBscFRva2VuQWRkcmVzcyA9ICcnXHJcblxyXG4gICAgICBpZihbJzAnLCAnNScsICc2J10uaW5jbHVkZXMoZ2F1Z2VUeXBlKSkge1xyXG4gICAgICAgIGNvbnN0IGdhdWdlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEdBVUdFX0NPTlRSQUNUX0FCSSwgZ2F1Z2VBZGRyZXNzKVxyXG4gICAgICAgIGxwVG9rZW5BZGRyZXNzID0gYXdhaXQgZ2F1Z2UubWV0aG9kcy5scF90b2tlbigpLmNhbGwoKVxyXG4gICAgICAgIC8vIGlmIG5vdCAwLCB3ZSBjYW50IGdldCBMUCB0b2tlbiBpbmZvIGNhdXNlIGl0IGlzIG9uIGEgZGlmZmVyZW50IGNoYWluXHJcbiAgICAgICAgY29uc3QgbHBUb2tlbiA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChFUkMyMF9BQkksIGxwVG9rZW5BZGRyZXNzKVxyXG4gICAgICAgIG5hbWUgPSBhd2FpdCBscFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vbWFudWFsbHkgbWFwIGdhdWdlIG5hbWVzXHJcbiAgICAgICAgc3dpdGNoIChnYXVnZUFkZHJlc3MpIHtcclxuICAgICAgICAgIGNhc2UgJzB4YjlDMDVCOEVFNDFGRENiZDk5NTYxMTRCM2FGMTU4MzRGREVEQ2I1NCc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgREFJL1VTREMgKERBSStVU0RDKSdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweGZFMUEzZEQ4YjE2OWZCNUJGMEQ1ZGJGZTgxM2Q5NTZGMzlmRjYzMTAnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIGZVU0RUL0RBSS9VU0RDJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4QzQ4ZjQ2NTNkZDZhOTUwOURlNDRjOTJiZWIwNjA0QkVBM0FFZTcxNCc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgYW1EQUkvYW1VU0RDL2FtVVNEVCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweDY5NTVhNTU0MTZhMDY4MzkzMDkwMThBOEIwY0I3MmM0RERDMTFmMTUnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIFVTRC1CVEMtRVRIJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4NDg4RTZlZjkxOUMyYkI5ZGU1MzVDNjM0YTgwYWZiMDExNERBOEY2Mic6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgYW1XQlRDL3JlbkJUQydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweGZEYjEyOWVhNGI2ZjU1N2IwN0JjRENlZEU1NEY2NjViN2I2QmMyODEnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIFdCVEMvcmVuQlRDJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4MDYwZTM4NmVDZkJhY2Y0MkFhNzIxNzFBZjlFRmUxN2IzOTkzZkM0Ric6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUgVVNELUJUQy1FVEgnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHg2QzA5RjY3MjcxMTM1NDNGZDA2MWE3MjFkYTUxMkI3ZUZDREQwMjY3JzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSB3eERBSS9VU0RDL1VTRFQnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhEZUZkOEZkRDIwZTBmMzQxMTVDNzAxOENDZmI2NTU3OTZGNkIyMTY4JzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBVU0QtQlRDLUVUSCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweGQ4YjcxMmQyOTM4MTc0OGRCODljMzZCQ2EwMTM4ZDdjNzU4NjZkZEYnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIEZhY3RvcnkgVVNEIE1ldGFwb29sOiBNYWdpYyBJbnRlcm5ldCBNb25leSAzUG9vbCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBnYXVnZUFkZHJlc3M6IGdhdWdlQWRkcmVzcyxcclxuICAgICAgICBscFRva2VuQWRkcmVzczogbHBUb2tlbkFkZHJlc3MsXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICBnYXVnZVdlaWdodDogZ2F1Z2VXZWlnaHQsXHJcbiAgICAgICAgZ2F1Z2VUeXBlOiBnYXVnZVR5cGUsXHJcbiAgICAgICAgZ2F1Z2VUeXBlTmFtZTogdGhpcy5fbWFwR2F1Z2VUeXBlVG9OYW1lKGdhdWdlVHlwZSksXHJcbiAgICAgICAgbG9nbzogJy91bmtub3duLWxvZ28ucG5nJ1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIF9nZXRHYXVnZUluZm8oJHt3ZWIzfSwgJHtnYXVnZUNvbnRyb2xsZXJ9LCAke2luZGV4fSlgKVxyXG4gICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9tYXBHYXVnZVR5cGVUb05hbWUgPSAoZ2F1Z2VUeXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGdhdWdlVHlwZSkge1xyXG4gICAgICBjYXNlICcwJzpcclxuICAgICAgY2FzZSAnMyc6XHJcbiAgICAgIGNhc2UgJzUnOlxyXG4gICAgICBjYXNlICc2JzpcclxuICAgICAgICByZXR1cm4gJ0V0aGVyZXVtJ1xyXG4gICAgICBjYXNlICcxJzpcclxuICAgICAgICByZXR1cm4gJ0ZhbnRvbSdcclxuICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgcmV0dXJuICdQb2x5Z29uJ1xyXG4gICAgICBjYXNlICc0JzpcclxuICAgICAgICByZXR1cm4gJ3hEQUknXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICdVbmtub3duJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldERlZmF1bHRUb2tlbnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4NGUxNTM2MWZkNmI0YmI2MDlmYTYzYzgxYTJiZTE5ZDg3MzcxNzg3MCcsXHJcbiAgICAgICAgc3ltYm9sOiAnRlRNJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDJiYTU5MmY3OGRiNjQzNjUyNzcyOTkyOWFhZjZjOTA4NDk3Y2IyMDAnLFxyXG4gICAgICAgIHN5bWJvbDogJ0NSRUFNJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDA5MDE4NWYyMTM1MzA4YmFkMTc1MjcwMDQzNjRlYmNjMmQzN2U1ZjYnLFxyXG4gICAgICAgIHN5bWJvbDogJ1NQRUxMJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDZiMTc1NDc0ZTg5MDk0YzQ0ZGE5OGI5NTRlZWRlYWM0OTUyNzFkMGYnLFxyXG4gICAgICAgIHN5bWJvbDogJ0RBSScsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHhhMGI4Njk5MWM2MjE4YjM2YzFkMTlkNGEyZTllYjBjZTM2MDZlYjQ4JyxcclxuICAgICAgICBzeW1ib2w6ICdVU0RDJyxcclxuICAgICAgICBkZWNpbWFsczogNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4NWE5OGZjYmVhNTE2Y2YwNjg1NzIxNTc3OWZkODEyY2EzYmVmMWIzMicsXHJcbiAgICAgICAgc3ltYm9sOiAnTERPJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGRiZGI0ZDE2ZWRhNDUxZDA1MDNiODU0Y2Y3OWQ1NTY5N2Y5MGM4ZGYnLFxyXG4gICAgICAgIHN5bWJvbDogJ0FMQ1gnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4OUQ3OWQ1QjYxRGU1OUQ4ODJjZTkwMTI1YjE4Rjc0YWY2NTBhY0I5MycsXHJcbiAgICAgICAgc3ltYm9sOiAnTlNCVCcsXHJcbiAgICAgICAgZGVjaW1hbHM6IDZcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDdkMWFmYTdiNzE4ZmI4OTNkYjMwYTNhYmMwY2ZjNjA4YWFjZmViYjAnLFxyXG4gICAgICAgIHN5bWJvbDogJ01BVElDJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDkyZTE4N2EwM2I2Y2QxOWNiNmFmMjkzYmExN2YyNzQ1ZmQyMzU3ZDUnLFxyXG4gICAgICAgIHN5bWJvbDogJ0RVQ0snLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4ODIwN2MxRmZDNUI2ODA0RjYwMjQzMjJDY0YzNEYyOWMzNTQxQWUyNicsXHJcbiAgICAgICAgc3ltYm9sOiAnT0dOJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGEzQmVENEUxYzc1RDAwZmE2ZjRFNUU2OTIyREI3MjYxQjVFOUFjRDInLFxyXG4gICAgICAgIHN5bWJvbDogJ01UQScsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHhkNTMzYTk0OTc0MGJiMzMwNmQxMTljYzc3N2ZhOTAwYmEwMzRjZDUyJyxcclxuICAgICAgICBzeW1ib2w6ICdDUlYnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4Y2RmNzAyOGNlYWI4MWZhMGM2OTcxMjA4ZTgzZmE3ODcyOTk0YmVlNScsXHJcbiAgICAgICAgc3ltYm9sOiAnVCcsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHhkYjI1ZjIxMWFiMDViMWM5N2Q1OTU1MTZmNDU3OTQ1MjhhODA3YWQ4JyxcclxuICAgICAgICBzeW1ib2w6ICdFVVJTJyxcclxuICAgICAgICBkZWNpbWFsczogMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4MzE0MjlkMTg1NmFEMTM3N0E4QTAwNzk0MTBCMjk3ZTFhOWUyMTRjMicsXHJcbiAgICAgICAgc3ltYm9sOiAnQU5HTEUnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweDRlM0ZCRDU2Q0Q1NmMzZTcyYzE0MDNlMTAzYjQ1RGI5ZGE1QjlEMkInLFxyXG4gICAgICAgIHN5bWJvbDogJ0NWWCcsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgICB9LFxyXG5cclxuICAgIF1cclxuICB9XHJcblxyXG4gIGdldEJhbGFuY2VzID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFN0b3JlKCdhY2NvdW50Jyk7XHJcbiAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdhdWdlcyA9IHRoaXMuZ2V0U3RvcmUoJ2dhdWdlcycpXHJcbiAgICBpZighZ2F1Z2VzIHx8IGdhdWdlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBnYXVnZXMgPSBhd2FpdCB0aGlzLl9nZXRDdXJyZW50R2F1Z2VWb3Rlcyh3ZWIzLCBhY2NvdW50LCBnYXVnZXMpXHJcblxyXG4gICAgbGV0IG15UGFyYW0gPSBudWxsXHJcblxyXG4gICAgaWYocGF5bG9hZC5jb250ZW50ICYmIHBheWxvYWQuY29udGVudC5hZGRyZXNzKSB7XHJcbiAgICAgIG15UGFyYW0gPSBwYXlsb2FkLmNvbnRlbnQuYWRkcmVzc1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgbXlQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ3Jld2FyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJld2FyZFRva2VuQWRkcmVzcyA9IG15UGFyYW1cclxuXHJcbiAgICAvLyBGVE0sIENSRUFNLCBNSU0sIERBSSwgVVNEQyxcclxuICAgIGNvbnN0IGRlZmF1bHRUb2tlbnMgPSB0aGlzLl9nZXREZWZhdWx0VG9rZW5zKClcclxuXHJcbiAgICAvL0lmIGl0IGlzIGEgdmFsaWQgdG9rZW4sIHdlIGFkZCBpdCB0byB0aGUgc2VhcmNoIGxpc3RcclxuICAgIGlmKHJld2FyZFRva2VuQWRkcmVzcyAmJiB3ZWIzLnV0aWxzLmlzQWRkcmVzcyhyZXdhcmRUb2tlbkFkZHJlc3MpKSB7XHJcbiAgICAgIGxldCBpbmNsdWRlc1Rva2VuID0gZmFsc2VcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRlZmF1bHRUb2tlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZihkZWZhdWx0VG9rZW5zW2ldLmFkZHJlc3MudG9Mb3dlckNhc2UoKSA9PT0gcmV3YXJkVG9rZW5BZGRyZXNzLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIGluY2x1ZGVzVG9rZW4gPSB0cnVlXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFpbmNsdWRlc1Rva2VuKSB7XHJcbiAgICAgICAgY29uc3QgcmV3YXJkVG9rZW4gPSBhd2FpdCB0aGlzLl9nZXRUb2tlbkluZm8od2ViMywgcmV3YXJkVG9rZW5BZGRyZXNzKVxyXG4gICAgICAgIGRlZmF1bHRUb2tlbnMucHVzaChyZXdhcmRUb2tlbilcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jLm1hcChkZWZhdWx0VG9rZW5zLCBhc3luYyAodG9rZW4sIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJyaWJlcnkgPSBhd2FpdCB0aGlzLl9nZXRCcmliZXJ5KHdlYjMsIGFjY291bnQsIGdhdWdlcywgZGVmYXVsdFRva2VucywgdG9rZW4uYWRkcmVzcylcclxuICAgICAgaWYoY2FsbGJhY2spIHtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCBicmliZXJ5KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBicmliZXJ5XHJcbiAgICAgIH1cclxuICAgIH0sIChlcnIsIGJyaWJlcmllcykgPT4ge1xyXG4gICAgICBpZihlcnIpIHtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChFUlJPUiwgZXJyKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZmxhdEJyaWJlcmllcyA9IGJyaWJlcmllcy5mbGF0KClcclxuICAgICAgbGV0IHJld2FyZHMgPSBbXVxyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgZmxhdEJyaWJlcmllcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGxldCBicmliZXJ5ID0gZmxhdEJyaWJlcmllc1tqXVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBicmliZXJ5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgYnJpYmUgPSBicmliZXJ5W2ldXHJcbiAgICAgICAgICByZXdhcmRzLnB1c2goe1xyXG4gICAgICAgICAgICBhY3RpdmVQZXJpb2Q6IGJyaWJlLmFjdGl2ZVBlcmlvZCxcclxuICAgICAgICAgICAgcmV3YXJkc1VubG9jazogQmlnTnVtYmVyKGJyaWJlLmFjdGl2ZVBlcmlvZCkucGx1cyhXRUVLKS50b0ZpeGVkKDApLFxyXG4gICAgICAgICAgICBjbGFpbWFibGU6IEJpZ051bWJlcihicmliZS5jbGFpbWFibGUpLmRpdigxMCoqYnJpYmUucmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQoYnJpYmUucmV3YXJkVG9rZW4uZGVjaW1hbHMpLFxyXG4gICAgICAgICAgICBjYW5DbGFpbTogYnJpYmUuY2FuQ2xhaW0sXHJcbiAgICAgICAgICAgIGhhc0NsYWltZWQ6IGJyaWJlLmhhc0NsYWltZWQsXHJcbiAgICAgICAgICAgIGdhdWdlOiBicmliZS5nYXVnZSxcclxuICAgICAgICAgICAgdG9rZW5zRm9yQnJpYmU6IEJpZ051bWJlcihicmliZS50b2tlbnNGb3JCcmliZSkuZGl2KDEwKipicmliZS5yZXdhcmRUb2tlbi5kZWNpbWFscykudG9GaXhlZChicmliZS5yZXdhcmRUb2tlbi5kZWNpbWFscyksXHJcbiAgICAgICAgICAgIHJld2FyZFBlclRva2VuOiBicmliZS5yZXdhcmRQZXJUb2tlbixcclxuICAgICAgICAgICAgcmV3YXJkVG9rZW46IGJyaWJlLnJld2FyZFRva2VuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRTdG9yZSh7IHJld2FyZHM6IHJld2FyZHMgfSlcclxuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoSU5DRU5USVZFU19CQUxBTkNFU19SRVRVUk5FRCwgW10pO1xyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgdm90ZXMgPSB0aGlzLmdldFN0b3JlKCd2b3RlcycpXHJcbiAgICBpZighdm90ZXMgfHwgdm90ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgdm90ZVJld2FyZHMgPSBhd2FpdCB0aGlzLl9nZXRWb3RlQnJpYmVyeSh3ZWIzLCBhY2NvdW50LCB2b3RlcylcclxuICAgIHRoaXMuc2V0U3RvcmUoeyB2b3RlUmV3YXJkczogdm90ZVJld2FyZHMgfSlcclxuICAgIHRoaXMuZW1pdHRlci5lbWl0KElOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQsIFtdKTtcclxuICB9O1xyXG5cclxuICBfZ2V0VG9rZW5JbmZvID0gYXN5bmMgKHdlYjMsIHRva2VuQWRkcmVzcywgZ2V0QmFsYW5jZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoRVJDMjBfQUJJLCB0b2tlbkFkZHJlc3MpXHJcblxyXG4gICAgICBjb25zdCBbc3ltYm9sLCBkZWNpbWFsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgdG9rZW4ubWV0aG9kcy5zeW1ib2woKS5jYWxsKCksXHJcbiAgICAgICAgdG9rZW4ubWV0aG9kcy5kZWNpbWFscygpLmNhbGwoKVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIGxldCBiYWxhbmNlID0gMFxyXG4gICAgICBpZihnZXRCYWxhbmNlKSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0U3RvcmUoJ2FjY291bnQnKTtcclxuICAgICAgICBiYWxhbmNlID0gYXdhaXQgdG9rZW4ubWV0aG9kcy5iYWxhbmNlT2YoYWNjb3VudC5hZGRyZXNzKS5jYWxsKClcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRyZXNzOiB0b2tlbkFkZHJlc3MsXHJcbiAgICAgICAgc3ltYm9sLFxyXG4gICAgICAgIGRlY2ltYWxzOiBwYXJzZUludChkZWNpbWFscyksXHJcbiAgICAgICAgYmFsYW5jZVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhgZXhjZXB0aW9uIHRocm93biBpbiBfZ2V0VG9rZW5JbmZvKCR7d2ViM30sICR7dG9rZW5BZGRyZXNzfSlgKVxyXG4gICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgcmV0dXJuIGV4XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0Vm90ZUJyaWJlcnkgPSBhc3luYyAod2ViMywgYWNjb3VudCwgdm90ZXMpID0+IHtcclxuICAgIGNvbnN0IHZvdGVCcmliZXJ5Q29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVk9URV9CUklCRVJZX0FCSSwgVk9URV9CUklCRVJZX0FERFJFU1MpXHJcbiAgICBjb25zdCB2b3Rlc1NvdXJjZUNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFZPVEVfU09VUkNFX0FCSSwgVk9URV9TT1VSQ0VfQUREUkVTUylcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbCh2b3Rlcy5tYXAoYXN5bmMgKHZvdGUpID0+IHtcclxuXHJcbiAgICAgIGlmKCF2b3RlLnJld2FyZHNQZXJWb3RlIHx8IHZvdGUucmV3YXJkc1BlclZvdGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmV3YXJkcyA9IGF3YWl0IFByb21pc2UuYWxsKHZvdGUucmV3YXJkc1BlclZvdGUubWFwKGFzeW5jIChyZXdhcmRUb2tlbkFkZHJlc3MpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFtlc3RpbWF0ZUJyaWJlLCByZXdhcmRBbW91bnQsIHZvdGVyU3RhdGUsIGhzYUNsYWltZWRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICB2b3RlQnJpYmVyeUNvbnRyYWN0Lm1ldGhvZHMuZXN0aW1hdGVfYnJpYmUodm90ZS5pbmRleCwgcmV3YXJkVG9rZW5BZGRyZXNzLCBhY2NvdW50LmFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgICAgdm90ZUJyaWJlcnlDb250cmFjdC5tZXRob2RzLnJld2FyZF9hbW91bnQodm90ZS5pbmRleCwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICAgIHZvdGVzU291cmNlQ29udHJhY3QubWV0aG9kcy5nZXRWb3RlclN0YXRlKHZvdGUuaW5kZXgsIGFjY291bnQuYWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgICB2b3RlQnJpYmVyeUNvbnRyYWN0Lm1ldGhvZHMuaGFzX2NsYWltZWQodm90ZS5pbmRleCwgcmV3YXJkVG9rZW5BZGRyZXNzLCBhY2NvdW50LmFkZHJlc3MpLmNhbGwoKVxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmV3YXJkVG9rZW4gPSBhd2FpdCB0aGlzLl9nZXRUb2tlbkluZm8od2ViMywgcmV3YXJkVG9rZW5BZGRyZXNzKVxyXG5cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVzdGltYXRlQnJpYmU6IEJpZ051bWJlcihlc3RpbWF0ZUJyaWJlKS5kaXYoMTAqKnJld2FyZFRva2VuLmRlY2ltYWxzKS50b0ZpeGVkKHJld2FyZFRva2VuLmRlY2ltYWxzKSxcclxuICAgICAgICAgICAgcmV3YXJkQW1vdW50OiBCaWdOdW1iZXIocmV3YXJkQW1vdW50KS5kaXYoMTAqKnJld2FyZFRva2VuLmRlY2ltYWxzKS50b0ZpeGVkKHJld2FyZFRva2VuLmRlY2ltYWxzKSxcclxuICAgICAgICAgICAgdm90ZXJTdGF0ZSxcclxuICAgICAgICAgICAgaHNhQ2xhaW1lZCxcclxuICAgICAgICAgICAgdm90ZSxcclxuICAgICAgICAgICAgcmV3YXJkVG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApXHJcblxyXG4gICAgICByZXR1cm4gcmV3YXJkc1xyXG4gICAgfSkpXHJcblxyXG4gICAgcmV0dXJuIHJlcy5maWx0ZXIoKHJld2FyZCkgPT4ge1xyXG4gICAgICByZXR1cm4gcmV3YXJkICE9IG51bGxcclxuICAgIH0pLmZsYXQoKVxyXG4gIH1cclxuXHJcbiAgX2dldEJyaWJlcnkgPSBhc3luYyAod2ViMywgYWNjb3VudCwgZ2F1Z2VzLCByZXdhcmRUb2tlbnMsIHJld2FyZFRva2VuQWRkcmVzcykgPT4ge1xyXG4gICAgY29uc3QgYmxvY2sgPSBhd2FpdCB3ZWIzLmV0aC5nZXRCbG9ja051bWJlcigpO1xyXG5cclxuICAgIGNvbnN0IGJyaWJlcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQlJJQkVSWV9BQkksIEJSSUJFUllfQUREUkVTUylcclxuICAgIGNvbnN0IGJyaWJlcnlWMiA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChCUklCRVJZX0FCSSwgQlJJQkVSWV9BRERSRVNTX1YyKVxyXG4gICAgY29uc3QgYnJpYmVyeVRva2Vuc0NvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEJSSUJFUllfQUJJLCBCUklCRVJZX1RPS0VOU19BRERSRVNTX1YyKVxyXG5cclxuICAgIC8vIEZvciBWMiBjYWxsIGdhdWdlc19wZXJfcmV3YXJkLlxyXG4gICAgLy8gZm9yZWFjaCBvZiB0aG9zZSwgd2UgZ2V0IHRoZSB1c2VyJ3MgcmV3YXJkIG9ubHkuIG5vIGxvb3BpbmcgdGhyb3VnaCBkZWFkIGdhdWdlcyBhbnltb3JlLlxyXG4gICAgY29uc3QgW2dhdWdlc1BlclJld2FyZFYyXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgYnJpYmVyeVYyLm1ldGhvZHMuZ2F1Z2VzX3Blcl9yZXdhcmQocmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKClcclxuICAgIF0pO1xyXG5cclxuICAgIGxldCBicmliZXJ5UmVzdWx0c1Byb21pc2VzVjIgPSBbXVxyXG4gICAgaWYoZ2F1Z2VzUGVyUmV3YXJkVjIubGVuZ3RoID4gMCkge1xyXG4gICAgICBicmliZXJ5UmVzdWx0c1Byb21pc2VzVjIgPSBnYXVnZXNQZXJSZXdhcmRWMi5tYXAoYXN5bmMgKGdhdWdlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IFthY3RpdmVQZXJpb2QsIGNsYWltYWJsZSwgbGFzdFVzZXJDbGFpbSwgdG9rZW5zRm9yQnJpYmUsIHJld2FyZFBlclRva2VuXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGJyaWJlcnlWMi5tZXRob2RzLmFjdGl2ZV9wZXJpb2QoZ2F1Z2UsIHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgYnJpYmVyeVYyLm1ldGhvZHMuY2xhaW1hYmxlKGFjY291bnQuYWRkcmVzcywgZ2F1Z2UsIHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgYnJpYmVyeVYyLm1ldGhvZHMubGFzdF91c2VyX2NsYWltKGFjY291bnQuYWRkcmVzcywgZ2F1Z2UsIHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgYnJpYmVyeVRva2Vuc0NvbnRyYWN0Lm1ldGhvZHMudG9rZW5zX2Zvcl9icmliZShhY2NvdW50LmFkZHJlc3MsIGdhdWdlLCByZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgIGJyaWJlcnlWMi5tZXRob2RzLnJld2FyZF9wZXJfdG9rZW4oZ2F1Z2UsIHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmVyc2lvbjogMixcclxuICAgICAgICAgIGNsYWltYWJsZSxcclxuICAgICAgICAgIGxhc3RVc2VyQ2xhaW0sXHJcbiAgICAgICAgICBhY3RpdmVQZXJpb2QsXHJcbiAgICAgICAgICB0b2tlbnNGb3JCcmliZSxcclxuICAgICAgICAgIHJld2FyZFBlclRva2VuLFxyXG4gICAgICAgICAgY2FuQ2xhaW06IEJpZ051bWJlcihibG9jaykubHQoQmlnTnVtYmVyKGFjdGl2ZVBlcmlvZCkucGx1cyhXRUVLKSksXHJcbiAgICAgICAgICBoYXNDbGFpbWVkOiBCaWdOdW1iZXIobGFzdFVzZXJDbGFpbSkuZXEoYWN0aXZlUGVyaW9kKSxcclxuICAgICAgICAgIGdhdWdlOiBnYXVnZXMuZmlsdGVyKChnKSA9PiB7IHJldHVybiBnLmdhdWdlQWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSBnYXVnZS50b0xvd2VyQ2FzZSgpIH0pWzBdLFxyXG4gICAgICAgICAgcmV3YXJkVG9rZW46IHJld2FyZFRva2Vucy5maWx0ZXIoKHIpID0+IHsgcmV0dXJuIHIuYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSByZXdhcmRUb2tlbkFkZHJlc3MudG9Mb3dlckNhc2UoKSB9KVswXVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBicmliZXJ5UmVzdWx0c1YyID0gYXdhaXQgUHJvbWlzZS5hbGwoYnJpYmVyeVJlc3VsdHNQcm9taXNlc1YyKTtcclxuICAgIHJldHVybiBbYnJpYmVyeVJlc3VsdHNWMl1cclxuICB9XHJcblxyXG4gIF9nZXRDdXJyZW50R2F1Z2VWb3RlcyA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCBnYXVnZXMpID0+IHtcclxuICAgIGNvbnN0IGdhdWdlQ29udHJvbGxlciA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChHQVVHRV9DT05UUk9MTEVSX0FCSSwgR0FVR0VfQ09OVFJPTExFUl9BRERSRVNTKVxyXG5cclxuICAgIGNvbnN0IHVzZXJWb3RlU2xvcGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZ2F1Z2VzLm1hcCgoZ2F1Z2UpID0+IHtcclxuICAgICAgcmV0dXJuIGdhdWdlQ29udHJvbGxlci5tZXRob2RzLnZvdGVfdXNlcl9zbG9wZXMoYWNjb3VudC5hZGRyZXNzLCBnYXVnZS5nYXVnZUFkZHJlc3MpLmNhbGwoKVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYXVnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZ2F1Z2VzW2ldLnZvdGVzID0gdXNlclZvdGVTbG9wZXNbaV1cclxuICAgICAgZ2F1Z2VzW2ldLnZvdGVzLnVzZXJWb3RlU2xvcGVBbW91bnQgPSBCaWdOdW1iZXIodXNlclZvdGVTbG9wZXNbaV0uc2xvcGUpLmRpdigxMCoqMTApLnRvRml4ZWQoMTApXHJcbiAgICAgIGdhdWdlc1tpXS52b3Rlcy51c2VyVm90ZVNsb3BlUGVyY2VudCA9IEJpZ051bWJlcih1c2VyVm90ZVNsb3Blc1tpXS5wb3dlcikuZGl2KDEwMCkudG9GaXhlZCgyKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBnYXVnZXNcclxuICB9XHJcblxyXG4gIGNsYWltUmV3YXJkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IGFjY291bnQgPSBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFN0b3JlKCdhY2NvdW50Jyk7XHJcbiAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHJld2FyZCB9ID0gcGF5bG9hZC5jb250ZW50O1xyXG5cclxuICAgIHRoaXMuX2NhbGxDbGFpbVJld2FyZCh3ZWIzLCBhY2NvdW50LCByZXdhcmQuZ2F1Z2UuZ2F1Z2VBZGRyZXNzLCByZXdhcmQucmV3YXJkVG9rZW4uYWRkcmVzcywgcmV3YXJkLnZlcnNpb24sICAoZXJyLCByZXMpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChFUlJPUiwgZXJyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KFJFV0FSRF9DTEFJTUVELCByZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfY2FsbENsYWltUmV3YXJkID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIGdhdWdlLCByZXdhcmRUb2tlbiwgdmVyc2lvbiwgY2FsbGJhY2spID0+IHtcclxuICAgIGxldCBhZGRyZXNzID0gQlJJQkVSWV9BRERSRVNTX1YyXHJcbiAgICBpZih2ZXJzaW9uID09PSAxKSB7XHJcbiAgICAgIGFkZHJlc3MgPSBCUklCRVJZX0FERFJFU1NcclxuICAgIH1cclxuICAgIGNvbnN0IGJyaWJlcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQlJJQkVSWV9BQkksIGFkZHJlc3MpO1xyXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldEdhc1ByaWNlKCk7XHJcblxyXG4gICAgdGhpcy5fY2FsbENvbnRyYWN0V2FpdCh3ZWIzLCBicmliZXJ5LCAnY2xhaW1fcmV3YXJkJywgW2dhdWdlLCByZXdhcmRUb2tlbl0sIGFjY291bnQsIGdhc1ByaWNlLCBHRVRfSU5DRU5USVZFU19CQUxBTkNFUywge30sIGNhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICBzZWFyY2hUb2tlbiA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwYXlsb2FkLmNvbnRlbnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9nZXRUb2tlbkluZm8od2ViMywgYWRkcmVzcywgdHJ1ZSlcclxuICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KFNFQVJDSF9UT0tFTl9SRVRVUk5FRCwgdG9rZW4pO1xyXG4gICAgfSBjYXRjaChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBleClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZFJld2FyZCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gc3RvcmVzLmFjY291bnRTdG9yZS5nZXRTdG9yZSgnYWNjb3VudCcpO1xyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50LCBnYXVnZSB9ID0gcGF5bG9hZC5jb250ZW50O1xyXG5cclxuICAgIGxldCBzZW5kQW1vdW50ID0gQmlnTnVtYmVyKHJld2FyZEFtb3VudCkudGltZXMoMTAqKnJld2FyZFRva2VuLmRlY2ltYWxzKS50b0ZpeGVkKDApXHJcblxyXG4gICAgdGhpcy5fY2hlY2tBbGxvd2FuY2Uod2ViMywgcmV3YXJkVG9rZW4uYWRkcmVzcywgYWNjb3VudC5hZGRyZXNzLCBCUklCRVJZX0FERFJFU1NfVjIsIHNlbmRBbW91bnQsIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChFUlJPUiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9jYWxsQWRkUmV3YXJkKHdlYjMsIGFjY291bnQsIGdhdWdlLmdhdWdlQWRkcmVzcywgcmV3YXJkVG9rZW4uYWRkcmVzcywgc2VuZEFtb3VudCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEFERF9SRVdBUkRfUkVUVVJORUQsIHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9jaGVja0FsbG93YW5jZSA9IGFzeW5jICh3ZWIzLCB0b2tlbiwgb3duZXIsIHNwZW5kZXIsIHNwZW5kaW5nQW1vdW50LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChFUkMyMF9BQkksIHRva2VuKVxyXG4gICAgY29uc3QgYWxsb3dhbmNlID0gYXdhaXQgdG9rZW5Db250cmFjdC5tZXRob2RzLmFsbG93YW5jZShvd25lciwgc3BlbmRlcikuY2FsbCgpO1xyXG5cclxuICAgIGlmKEJpZ051bWJlcihzcGVuZGluZ0Ftb3VudCkubHRlKGFsbG93YW5jZSkpIHtcclxuICAgICAgY2FsbGJhY2soKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldEdhc1ByaWNlKCk7XHJcbiAgICAgIHRoaXMuX2NhbGxDb250cmFjdFdhaXQod2ViMywgdG9rZW5Db250cmFjdCwgJ2FwcHJvdmUnLCBbc3BlbmRlciwgTUFYX1VJTlQyNTZdLCB7IGFkZHJlc3M6IG93bmVyIH0sIGdhc1ByaWNlLCBudWxsLCBudWxsLCBjYWxsYmFjaylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jYWxsQWRkUmV3YXJkID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIGdhdWdlLCByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50LCBjYWxsYmFjaykgPT4ge1xyXG4gICAgY29uc3QgYnJpYmVyeSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChCUklCRVJZX0FCSSwgQlJJQkVSWV9BRERSRVNTX1YyKTtcclxuICAgIGNvbnN0IGdhc1ByaWNlID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRHYXNQcmljZSgpO1xyXG5cclxuICAgIHRoaXMuX2NhbGxDb250cmFjdFdhaXQod2ViMywgYnJpYmVyeSwgJ2FkZF9yZXdhcmRfYW1vdW50JywgW2dhdWdlLCByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50XSwgYWNjb3VudCwgZ2FzUHJpY2UsIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTLCB7fSwgY2FsbGJhY2spO1xyXG4gIH07XHJcblxyXG4gIGFkZFZvdGVSZXdhcmQgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0U3RvcmUoJ2FjY291bnQnKTtcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcmV3YXJkVG9rZW4sIHJld2FyZEFtb3VudCwgdm90ZSB9ID0gcGF5bG9hZC5jb250ZW50O1xyXG5cclxuICAgIGxldCBzZW5kQW1vdW50ID0gQmlnTnVtYmVyKHJld2FyZEFtb3VudCkudGltZXMoMTAqKnJld2FyZFRva2VuLmRlY2ltYWxzKS50b0ZpeGVkKDApXHJcblxyXG4gICAgdGhpcy5fY2hlY2tBbGxvd2FuY2Uod2ViMywgcmV3YXJkVG9rZW4uYWRkcmVzcywgYWNjb3VudC5hZGRyZXNzLCBWT1RFX0JSSUJFUllfQUREUkVTUywgc2VuZEFtb3VudCwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2NhbGxBZGRWb3RlUmV3YXJkKHdlYjMsIGFjY291bnQsIHZvdGUuaW5kZXgsIHJld2FyZFRva2VuLmFkZHJlc3MsIHNlbmRBbW91bnQsIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChFUlJPUiwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXIuZW1pdChBRERfVk9URV9SRVdBUkRfUkVUVVJORUQsIHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9jYWxsQWRkVm90ZVJld2FyZCA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCB2b3RlSW5kZXgsIHJld2FyZFRva2VuLCByZXdhcmRBbW91bnQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCBicmliZXJ5ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFZPVEVfQlJJQkVSWV9BQkksIFZPVEVfQlJJQkVSWV9BRERSRVNTKTtcclxuICAgIGNvbnN0IGdhc1ByaWNlID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRHYXNQcmljZSgpO1xyXG5cclxuICAgIHRoaXMuX2NhbGxDb250cmFjdFdhaXQod2ViMywgYnJpYmVyeSwgJ2FkZF9yZXdhcmRfYW1vdW50JywgW3ZvdGVJbmRleCwgcmV3YXJkVG9rZW4sIHJld2FyZEFtb3VudF0sIGFjY291bnQsIGdhc1ByaWNlLCBHRVRfSU5DRU5USVZFU19CQUxBTkNFUywge30sIGNhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICBfY2FsbENvbnRyYWN0ID0gKHdlYjMsIGNvbnRyYWN0LCBtZXRob2QsIHBhcmFtcywgYWNjb3VudCwgZ2FzUHJpY2UsIGRpc3BhdGNoRXZlbnQsIGRpc3BhdGNoRXZlbnRQYXlsb2FkLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XHJcbiAgICBjb250cmFjdC5tZXRob2RzW21ldGhvZF0oLi4ucGFyYW1zKVxyXG4gICAgICAuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudC5hZGRyZXNzLFxyXG4gICAgICAgIGdhc1ByaWNlOiB3ZWIzLnV0aWxzLnRvV2VpKGdhc1ByaWNlLCAnZ3dlaScpLFxyXG4gICAgICB9KVxyXG4gICAgICAub24oJ3RyYW5zYWN0aW9uSGFzaCcsIGZ1bmN0aW9uIChoYXNoKSB7XHJcbiAgICAgICAgY29udGV4dC5lbWl0dGVyLmVtaXQoVFhfU1VCTUlUVEVELCBoYXNoKTtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCBoYXNoKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKCdjb25maXJtYXRpb24nLCBmdW5jdGlvbiAoY29uZmlybWF0aW9uTnVtYmVyLCByZWNlaXB0KSB7XHJcbiAgICAgICAgaWYgKGRpc3BhdGNoRXZlbnQgJiYgY29uZmlybWF0aW9uTnVtYmVyID09IDApIHtcclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IGRpc3BhdGNoRXZlbnQsIGNvbnRlbnQ6IGRpc3BhdGNoRXZlbnRQYXlsb2FkIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGlmICghZXJyb3IudG9TdHJpbmcoKS5pbmNsdWRlcygnLTMyNjAxJykpIHtcclxuICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoIWVycm9yLnRvU3RyaW5nKCkuaW5jbHVkZXMoJy0zMjYwMScpKSB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBfY2FsbENvbnRyYWN0V2FpdCA9ICh3ZWIzLCBjb250cmFjdCwgbWV0aG9kLCBwYXJhbXMsIGFjY291bnQsIGdhc1ByaWNlLCBkaXNwYXRjaEV2ZW50LCBkaXNwYXRjaEV2ZW50UGF5bG9hZCwgY2FsbGJhY2spID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgY29udHJhY3QubWV0aG9kc1ttZXRob2RdKC4uLnBhcmFtcylcclxuICAgICAgLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnQuYWRkcmVzcyxcclxuICAgICAgICBnYXNQcmljZTogd2ViMy51dGlscy50b1dlaShnYXNQcmljZSwgJ2d3ZWknKSxcclxuICAgICAgfSlcclxuICAgICAgLm9uKCd0cmFuc2FjdGlvbkhhc2gnLCBmdW5jdGlvbiAoaGFzaCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhhc2gpXHJcbiAgICAgICAgLy8gY29udGV4dC5lbWl0dGVyLmVtaXQoVFhfU1VCTUlUVEVELCBoYXNoKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKCdyZWNlaXB0JywgZnVuY3Rpb24gKHJlY2VpcHQpIHtcclxuICAgICAgICBjb250ZXh0LmVtaXR0ZXIuZW1pdChUWF9TVUJNSVRURUQsIHJlY2VpcHQudHJhbnNhY3Rpb25IYXNoKTtcclxuICAgICAgICBjYWxsYmFjayhudWxsLCByZWNlaXB0LnRyYW5zYWN0aW9uSGFzaCk7XHJcblxyXG4gICAgICAgIGlmIChkaXNwYXRjaEV2ZW50KSB7XHJcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoZXIuZGlzcGF0Y2goeyB0eXBlOiBkaXNwYXRjaEV2ZW50LCBjb250ZW50OiBkaXNwYXRjaEV2ZW50UGF5bG9hZCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoIWVycm9yLnRvU3RyaW5nKCkuaW5jbHVkZXMoJy0zMjYwMScpKSB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgaWYgKCFlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKCctMzI2MDEnKSkge1xyXG4gICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=