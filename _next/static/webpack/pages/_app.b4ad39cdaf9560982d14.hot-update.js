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
              debugger;
              arr = Object(C_Users_micro_source_repos_vote_incentives_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(parseInt(nGauges)).keys());
              promises = arr.map(function (index) {
                return new Promise(function (resolve, reject) {
                  var gaugeInfo = _this._getGaugeInfo(web3, gaugeController, 118);

                  resolve(gaugeInfo);
                });
              });
              _context4.next = 10;
              return Promise.all(promises);

            case 10:
              result = _context4.sent;
              res = result.filter(function (g) {
                return g !== null;
              });
              return _context4.abrupt("return", res);

            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getGauges(".concat(web3, ")"));
              console.log(_context4.t0);
              console.log("------------------------------------");

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 15]]);
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
              _context5.next = 48;
              break;

            case 23:
              _context5.t0 = gaugeAddress;
              _context5.next = _context5.t0 === '0xb9C05B8EE41FDCbd9956114B3aF15834FDEDCb54' ? 26 : _context5.t0 === '0xfE1A3dD8b169fB5BF0D5dbFe813d956F39fF6310' ? 28 : _context5.t0 === '0xC48f4653dd6a9509De44c92beb0604BEA3AEe714' ? 30 : _context5.t0 === '0x6955a55416a06839309018A8B0cB72c4DDC11f15' ? 32 : _context5.t0 === '0x488E6ef919C2bB9de535C634a80afb0114DA8F62' ? 34 : _context5.t0 === '0xfDb129ea4b6f557b07BcDCedE54F665b7b6Bc281' ? 36 : _context5.t0 === '0x060e386eCfBacf42Aa72171Af9EFe17b3993fC4F' ? 38 : _context5.t0 === '0x6C09F6727113543Fd061a721da512B7eFCDD0267' ? 40 : _context5.t0 === '0xDeFd8FdD20e0f34115C7018CCfb655796F6B2168' ? 42 : _context5.t0 === '0xd8b712d29381748dB89c36BCa0138d7c75866ddF' ? 44 : _context5.t0 === '0xc5ae4b5f86332e70f3205a8151ee9ed9f71e0797' ? 46 : 48;
              break;

            case 26:
              name = 'Curve.fi DAI/USDC (DAI+USDC)';
              return _context5.abrupt("break", 48);

            case 28:
              name = 'Curve.fi fUSDT/DAI/USDC';
              return _context5.abrupt("break", 48);

            case 30:
              name = 'Curve.fi amDAI/amUSDC/amUSDT';
              return _context5.abrupt("break", 48);

            case 32:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 48);

            case 34:
              name = 'Curve.fi amWBTC/renBTC';
              return _context5.abrupt("break", 48);

            case 36:
              name = 'Curve.fi WBTC/renBTC';
              return _context5.abrupt("break", 48);

            case 38:
              name = 'Curve USD-BTC-ETH';
              return _context5.abrupt("break", 48);

            case 40:
              name = 'Curve.fi wxDAI/USDC/USDT';
              return _context5.abrupt("break", 48);

            case 42:
              name = 'Curve.fi USD-BTC-ETH';
              return _context5.abrupt("break", 48);

            case 44:
              name = 'Curve.fi Factory USD Metapool: Magic Internet Money 3Pool';
              return _context5.abrupt("break", 48);

            case 46:
              name = 'yolo';
              return _context5.abrupt("break", 48);

            case 48:
              return _context5.abrupt("return", {
                gaugeAddress: gaugeAddress,
                lpTokenAddress: lpTokenAddress,
                name: name,
                gaugeWeight: gaugeWeight,
                gaugeType: gaugeType,
                gaugeTypeName: _this._mapGaugeTypeToName(gaugeType),
                logo: '/unknown-logo.png'
              });

            case 51:
              _context5.prev = 51;
              _context5.t1 = _context5["catch"](0);
              console.log("------------------------------------");
              console.log("exception thrown in _getGaugeInfo(".concat(web3, ", ").concat(gaugeController, ", ").concat(index, ")"));
              console.log(_context5.t1);
              console.log("------------------------------------");
              return _context5.abrupt("return", null);

            case 58:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 51]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmVzL2luY2VudGl2ZXNTdG9yZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInJlcXVpcmUiLCJTdG9yZSIsImRpc3BhdGNoZXIiLCJlbWl0dGVyIiwiaW5kZXgiLCJzdG9yZSIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJlbWl0IiwiU1RPUkVfVVBEQVRFRCIsInBheWxvYWQiLCJzdG9yZXMiLCJhY2NvdW50U3RvcmUiLCJnZXRXZWIzUHJvdmlkZXIiLCJ3ZWIzIiwiX2dldEdhdWdlcyIsImdhdWdlcyIsInNldFN0b3JlIiwiY29uZmlndXJlZCIsIl9nZXRWb3RlcyIsInZvdGVzIiwiZGlzcGF0Y2giLCJ0eXBlIiwiR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMiLCJJTkNFTlRJVkVTX0NPTkZJR1VSRUQiLCJ2b3Rlc1NvdXJjZUNvbnRyYWN0IiwiZXRoIiwiQ29udHJhY3QiLCJWT1RFX1NPVVJDRV9BQkkiLCJWT1RFX1NPVVJDRV9BRERSRVNTIiwidm90ZXNCcmliZXJ5Q29udHJhY3QiLCJWT1RFX0JSSUJFUllfQUJJIiwiVk9URV9CUklCRVJZX0FERFJFU1MiLCJtZXRob2RzIiwidm90ZXNMZW5ndGgiLCJjYWxsIiwiblZvdGVzIiwiYXJyIiwiQXJyYXkiLCJwYXJzZUludCIsImtleXMiLCJwcm9taXNlcyIsIm1hcCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwidm90ZUluZm8iLCJfZ2V0Vm90ZUluZm8iLCJhbGwiLCJyZXN1bHQiLCJnZXRWb3RlIiwicmV3YXJkc19wZXJfdm90ZSIsInZvdGUiLCJyZXdhcmRzUGVyVm90ZSIsImdhdWdlQ29udHJvbGxlciIsIkdBVUdFX0NPTlRST0xMRVJfQUJJIiwiR0FVR0VfQ09OVFJPTExFUl9BRERSRVNTIiwibl9nYXVnZXMiLCJuR2F1Z2VzIiwiZ2F1Z2VJbmZvIiwiX2dldEdhdWdlSW5mbyIsInJlcyIsImZpbHRlciIsImciLCJnYXVnZUFkZHJlc3MiLCJnYXVnZV90eXBlcyIsImdhdWdlX3JlbGF0aXZlX3dlaWdodCIsImdhdWdlVHlwZSIsImdhdWdlV2VpZ2h0IiwibmFtZSIsImxwVG9rZW5BZGRyZXNzIiwiaW5jbHVkZXMiLCJnYXVnZSIsIkdBVUdFX0NPTlRSQUNUX0FCSSIsImxwX3Rva2VuIiwibHBUb2tlbiIsIkVSQzIwX0FCSSIsImdhdWdlVHlwZU5hbWUiLCJfbWFwR2F1Z2VUeXBlVG9OYW1lIiwibG9nbyIsImFkZHJlc3MiLCJzeW1ib2wiLCJkZWNpbWFscyIsImdldFN0b3JlIiwiYWNjb3VudCIsImxlbmd0aCIsIl9nZXRDdXJyZW50R2F1Z2VWb3RlcyIsIm15UGFyYW0iLCJjb250ZW50IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJyZXdhcmRUb2tlbkFkZHJlc3MiLCJkZWZhdWx0VG9rZW5zIiwiX2dldERlZmF1bHRUb2tlbnMiLCJ1dGlscyIsImlzQWRkcmVzcyIsImluY2x1ZGVzVG9rZW4iLCJpIiwidG9Mb3dlckNhc2UiLCJfZ2V0VG9rZW5JbmZvIiwicmV3YXJkVG9rZW4iLCJwdXNoIiwiYXN5bmMiLCJ0b2tlbiIsImNhbGxiYWNrIiwiX2dldEJyaWJlcnkiLCJicmliZXJ5IiwiZXJyIiwiYnJpYmVyaWVzIiwiRVJST1IiLCJmbGF0QnJpYmVyaWVzIiwiZmxhdCIsInJld2FyZHMiLCJqIiwiYnJpYmUiLCJhY3RpdmVQZXJpb2QiLCJyZXdhcmRzVW5sb2NrIiwiQmlnTnVtYmVyIiwicGx1cyIsIldFRUsiLCJ0b0ZpeGVkIiwiY2xhaW1hYmxlIiwiZGl2IiwiY2FuQ2xhaW0iLCJoYXNDbGFpbWVkIiwidG9rZW5zRm9yQnJpYmUiLCJyZXdhcmRQZXJUb2tlbiIsIklOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQiLCJfZ2V0Vm90ZUJyaWJlcnkiLCJ2b3RlUmV3YXJkcyIsInRva2VuQWRkcmVzcyIsImdldEJhbGFuY2UiLCJiYWxhbmNlIiwiYmFsYW5jZU9mIiwidm90ZUJyaWJlcnlDb250cmFjdCIsImVzdGltYXRlX2JyaWJlIiwicmV3YXJkX2Ftb3VudCIsImdldFZvdGVyU3RhdGUiLCJoYXNfY2xhaW1lZCIsImVzdGltYXRlQnJpYmUiLCJyZXdhcmRBbW91bnQiLCJ2b3RlclN0YXRlIiwiaHNhQ2xhaW1lZCIsInJld2FyZCIsInJld2FyZFRva2VucyIsImdldEJsb2NrTnVtYmVyIiwiYmxvY2siLCJCUklCRVJZX0FCSSIsIkJSSUJFUllfQUREUkVTUyIsImJyaWJlcnlWMiIsIkJSSUJFUllfQUREUkVTU19WMiIsImJyaWJlcnlUb2tlbnNDb250cmFjdCIsIkJSSUJFUllfVE9LRU5TX0FERFJFU1NfVjIiLCJnYXVnZXNfcGVyX3Jld2FyZCIsImdhdWdlc1BlclJld2FyZFYyIiwiYnJpYmVyeVJlc3VsdHNQcm9taXNlc1YyIiwiYWN0aXZlX3BlcmlvZCIsImxhc3RfdXNlcl9jbGFpbSIsInRva2Vuc19mb3JfYnJpYmUiLCJyZXdhcmRfcGVyX3Rva2VuIiwibGFzdFVzZXJDbGFpbSIsInZlcnNpb24iLCJsdCIsImVxIiwiciIsImJyaWJlcnlSZXN1bHRzVjIiLCJ2b3RlX3VzZXJfc2xvcGVzIiwidXNlclZvdGVTbG9wZXMiLCJ1c2VyVm90ZVNsb3BlQW1vdW50Iiwic2xvcGUiLCJ1c2VyVm90ZVNsb3BlUGVyY2VudCIsInBvd2VyIiwiX2NhbGxDbGFpbVJld2FyZCIsIlJFV0FSRF9DTEFJTUVEIiwiZ2V0R2FzUHJpY2UiLCJnYXNQcmljZSIsIl9jYWxsQ29udHJhY3RXYWl0IiwiU0VBUkNIX1RPS0VOX1JFVFVSTkVEIiwic2VuZEFtb3VudCIsInRpbWVzIiwiX2NoZWNrQWxsb3dhbmNlIiwiX2NhbGxBZGRSZXdhcmQiLCJBRERfUkVXQVJEX1JFVFVSTkVEIiwib3duZXIiLCJzcGVuZGVyIiwic3BlbmRpbmdBbW91bnQiLCJ0b2tlbkNvbnRyYWN0IiwiYWxsb3dhbmNlIiwibHRlIiwiTUFYX1VJTlQyNTYiLCJfY2FsbEFkZFZvdGVSZXdhcmQiLCJBRERfVk9URV9SRVdBUkRfUkVUVVJORUQiLCJ2b3RlSW5kZXgiLCJjb250cmFjdCIsIm1ldGhvZCIsInBhcmFtcyIsImRpc3BhdGNoRXZlbnQiLCJkaXNwYXRjaEV2ZW50UGF5bG9hZCIsImNvbnRleHQiLCJzZW5kIiwiZnJvbSIsInRvV2VpIiwib24iLCJoYXNoIiwiVFhfU1VCTUlUVEVEIiwiY29uZmlybWF0aW9uTnVtYmVyIiwicmVjZWlwdCIsImVycm9yIiwidG9TdHJpbmciLCJtZXNzYWdlIiwidHJhbnNhY3Rpb25IYXNoIiwicmVnaXN0ZXIiLCJDT05GSUdVUkVfSU5DRU5USVZFUyIsImNvbmZpZ3VyZSIsImdldEJhbGFuY2VzIiwiQ0xBSU1fUkVXQVJEIiwiY2xhaW1SZXdhcmQiLCJTRUFSQ0hfVE9LRU4iLCJzZWFyY2hUb2tlbiIsIkFERF9SRVdBUkQiLCJhZGRSZXdhcmQiLCJBRERfVk9URV9SRVdBUkQiLCJhZGRWb3RlUmV3YXJkIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBMEJBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHdEQUFELENBQXJCOztJQUVNQyxLLEdBQ0osZUFBWUMsVUFBWixFQUF3QkMsT0FBeEIsRUFBaUM7QUFBQTs7QUFBQTs7QUFBQSx1TEF3Q3RCLFVBQUNDLEtBQUQsRUFBVztBQUNwQixXQUFPLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRCxLQUFYLENBQVA7QUFDRCxHQTFDZ0M7O0FBQUEsdUxBNEN0QixVQUFDRSxHQUFELEVBQVM7QUFDbEIsU0FBSSxDQUFDRCxLQUFMLG1DQUFrQixLQUFJLENBQUNBLEtBQXZCLEdBQWlDQyxHQUFqQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNILEtBQWpCO0FBQ0EsV0FBTyxLQUFJLENBQUNGLE9BQUwsQ0FBYU0sSUFBYixDQUFrQkMsd0RBQWxCLENBQVA7QUFDRCxHQWhEZ0M7O0FBQUE7QUFBQSxrVkFrRHJC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TixxREFBTDtBQUNFLGFBQUtDLFNBQUwsQ0FBZXROLE9BQWY7QUFDQTs7QUFDRixXQUFLdU4sMERBQUw7QUFDRSxhQUFLQyxhQUFMLENBQW1CeE4sT0FBbkI7QUFDQTs7QUFDRjtBQUFTLFNBQ1I7QUFwQkg7QUFzQkQsR0F2QkQsQ0F1QkV5TixJQXZCRixDQXVCTyxJQXZCUCxDQURGO0FBMEJELEM7O0FBOHNCWW5PLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjRhZDM5Y2RhZjk1NjA5ODJkMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3luYyBmcm9tICdhc3luYyc7XHJcbmltcG9ydCB7XHJcbiAgTUFYX1VJTlQyNTYsXHJcbiAgV0VFSyxcclxuICBFUlJPUixcclxuICBUWF9TVUJNSVRURUQsXHJcbiAgU1RPUkVfVVBEQVRFRCxcclxuICBJTkNFTlRJVkVTX1VQREFURUQsXHJcbiAgQ09ORklHVVJFX0lOQ0VOVElWRVMsXHJcbiAgSU5DRU5USVZFU19DT05GSUdVUkVELFxyXG4gIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTLFxyXG4gIElOQ0VOVElWRVNfQkFMQU5DRVNfUkVUVVJORUQsXHJcbiAgQlJJQkVSWV9BRERSRVNTLFxyXG4gIEJSSUJFUllfQUREUkVTU19WMixcclxuICBCUklCRVJZX1RPS0VOU19BRERSRVNTX1YyLFxyXG4gIEdBVUdFX0NPTlRST0xMRVJfQUREUkVTUyxcclxuICBWT1RFX0JSSUJFUllfQUREUkVTUyxcclxuICBWT1RFX1NPVVJDRV9BRERSRVNTLFxyXG4gIENMQUlNX1JFV0FSRCxcclxuICBSRVdBUkRfQ0xBSU1FRCxcclxuICBTRUFSQ0hfVE9LRU4sXHJcbiAgU0VBUkNIX1RPS0VOX1JFVFVSTkVELFxyXG4gIEFERF9SRVdBUkQsXHJcbiAgQUREX1JFV0FSRF9SRVRVUk5FRCxcclxuICBBRERfVk9URV9SRVdBUkQsXHJcbiAgQUREX1ZPVEVfUkVXQVJEX1JFVFVSTkVEXHJcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuaW1wb3J0IHsgRVJDMjBfQUJJLCBCUklCRVJZX0FCSSwgR0FVR0VfQ09OVFJPTExFUl9BQkksIEdBVUdFX0NPTlRSQUNUX0FCSSwgVk9URV9TT1VSQ0VfQUJJLCBWT1RFX0JSSUJFUllfQUJJIH0gZnJvbSAnLi9hYmlzJztcclxuXHJcblxyXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4vJztcclxuaW1wb3J0IHsgYm5EZWMgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCBCaWdOdW1iZXIgZnJvbSAnYmlnbnVtYmVyLmpzJztcclxuXHJcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xyXG5cclxuY2xhc3MgU3RvcmUge1xyXG4gIGNvbnN0cnVjdG9yKGRpc3BhdGNoZXIsIGVtaXR0ZXIpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XHJcbiAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xyXG5cclxuICAgIHRoaXMuc3RvcmUgPSB7XHJcbiAgICAgIGNvbmZpZ3VyZWQ6IGZhbHNlLFxyXG4gICAgICBnYXVnZXM6IFtdLFxyXG4gICAgICB2b3RlczogW10sXHJcbiAgICAgIHJld2FyZHM6IFtdLFxyXG4gICAgICB2b3RlUmV3YXJkczogW11cclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2hlci5yZWdpc3RlcihcclxuICAgICAgZnVuY3Rpb24gKHBheWxvYWQpIHtcclxuICAgICAgICBzd2l0Y2ggKHBheWxvYWQudHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBDT05GSUdVUkVfSU5DRU5USVZFUzpcclxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmUocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBHRVRfSU5DRU5USVZFU19CQUxBTkNFUzpcclxuICAgICAgICAgICAgdGhpcy5nZXRCYWxhbmNlcyhwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIENMQUlNX1JFV0FSRDpcclxuICAgICAgICAgICAgdGhpcy5jbGFpbVJld2FyZChwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFNFQVJDSF9UT0tFTjpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hUb2tlbihwYXlsb2FkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFERF9SRVdBUkQ6XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmV3YXJkKHBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQUREX1ZPVEVfUkVXQVJEOlxyXG4gICAgICAgICAgICB0aGlzLmFkZFZvdGVSZXdhcmQocGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldFN0b3JlID0gKGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yZVtpbmRleF07XHJcbiAgfTtcclxuXHJcbiAgc2V0U3RvcmUgPSAob2JqKSA9PiB7XHJcbiAgICB0aGlzLnN0b3JlID0geyAuLi50aGlzLnN0b3JlLCAuLi5vYmogfTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUpO1xyXG4gICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KFNUT1JFX1VQREFURUQpO1xyXG4gIH07XHJcblxyXG4gIGNvbmZpZ3VyZSA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnYXVnZXMgPSBhd2FpdCB0aGlzLl9nZXRHYXVnZXMod2ViMyk7XHJcbiAgICB0aGlzLnNldFN0b3JlKHsgZ2F1Z2VzOiBnYXVnZXMsIGNvbmZpZ3VyZWQ6IHRydWUgfSlcclxuXHJcbiAgICBjb25zdCB2b3RlcyA9IGF3YWl0IHRoaXMuX2dldFZvdGVzKHdlYjMpO1xyXG4gICAgdGhpcy5zZXRTdG9yZSh7IHZvdGVzOiB2b3RlcyB9KVxyXG5cclxuICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTIH0pO1xyXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoSU5DRU5USVZFU19DT05GSUdVUkVEKTtcclxuICB9O1xyXG5cclxuICBfZ2V0Vm90ZXMgPSBhc3luYyAod2ViMykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgdm90ZXNTb3VyY2VDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChWT1RFX1NPVVJDRV9BQkksIFZPVEVfU09VUkNFX0FERFJFU1MpXHJcbiAgICAgIGNvbnN0IHZvdGVzQnJpYmVyeUNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFZPVEVfQlJJQkVSWV9BQkksIFZPVEVfQlJJQkVSWV9BRERSRVNTKVxyXG4gICAgICBjb25zdCBuVm90ZXMgPSBhd2FpdCB2b3Rlc1NvdXJjZUNvbnRyYWN0Lm1ldGhvZHMudm90ZXNMZW5ndGgoKS5jYWxsKClcclxuXHJcbiAgICAgIGNvbnN0IGFyciA9IFsuLi5BcnJheShwYXJzZUludChuVm90ZXMpKS5rZXlzKCldXHJcblxyXG4gICAgICBjb25zdCBwcm9taXNlcyA9IGFyci5tYXAoaW5kZXggPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB2b3RlSW5mbyA9IHRoaXMuX2dldFZvdGVJbmZvKHdlYjMsIHZvdGVzU291cmNlQ29udHJhY3QsIHZvdGVzQnJpYmVyeUNvbnRyYWN0LCBpbmRleCk7XHJcbiAgICAgICAgICByZXNvbHZlKHZvdGVJbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIF9nZXRWb3Rlcygke3dlYjN9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldFZvdGVJbmZvID0gYXN5bmMgKHdlYjMsIHZvdGVzU291cmNlQ29udHJhY3QsIHZvdGVzQnJpYmVyeUNvbnRyYWN0LCBpbmRleCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW3ZvdGUsIHJld2FyZHNQZXJWb3RlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICB2b3Rlc1NvdXJjZUNvbnRyYWN0Lm1ldGhvZHMuZ2V0Vm90ZShpbmRleCkuY2FsbCgpLFxyXG4gICAgICAgIHZvdGVzQnJpYmVyeUNvbnRyYWN0Lm1ldGhvZHMucmV3YXJkc19wZXJfdm90ZShpbmRleCkuY2FsbCgpXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleCxcclxuICAgICAgICB2b3RlLFxyXG4gICAgICAgIHJld2FyZHNQZXJWb3RlLFxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIDQoJHt3ZWIzfSwgJHt2b3Rlc1NvdXJjZUNvbnRyYWN0fSwgJHt2b3Rlc0JyaWJlcnlDb250cmFjdH0sICR7aW5kZXh9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICByZXR1cm4gZXhcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRHYXVnZXMgPSBhc3luYyAod2ViMykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZ2F1Z2VDb250cm9sbGVyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEdBVUdFX0NPTlRST0xMRVJfQUJJLCBHQVVHRV9DT05UUk9MTEVSX0FERFJFU1MpXHJcbiAgICAgIGNvbnN0IG5HYXVnZXMgPSBhd2FpdCBnYXVnZUNvbnRyb2xsZXIubWV0aG9kcy5uX2dhdWdlcygpLmNhbGwoKVxyXG4gICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgIGNvbnN0IGFyciA9IFsuLi5BcnJheShwYXJzZUludChuR2F1Z2VzKSkua2V5cygpXVxyXG5cclxuICAgICAgY29uc3QgcHJvbWlzZXMgPSBhcnIubWFwKGluZGV4ID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ2F1Z2VJbmZvID0gdGhpcy5fZ2V0R2F1Z2VJbmZvKHdlYjMsIGdhdWdlQ29udHJvbGxlciwgMTE4KTtcclxuICAgICAgICAgIHJlc29sdmUoZ2F1Z2VJbmZvKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHJlc3VsdC5maWx0ZXIoKGcpID0+IHtcclxuICAgICAgICByZXR1cm4gZyAhPT0gbnVsbFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfSBjYXRjaChleCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhgZXhjZXB0aW9uIHRocm93biBpbiBfZ2V0R2F1Z2VzKCR7d2ViM30pYClcclxuICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0R2F1Z2VJbmZvID0gYXN5bmMgKHdlYjMsIGdhdWdlQ29udHJvbGxlciwgaW5kZXgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGdhdWdlQWRkcmVzcyA9IGF3YWl0IGdhdWdlQ29udHJvbGxlci5tZXRob2RzLmdhdWdlcyhpbmRleCkuY2FsbCgpXHJcbiAgICAgIGNvbnN0IFtnYXVnZVR5cGUsIGdhdWdlV2VpZ2h0XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBnYXVnZUNvbnRyb2xsZXIubWV0aG9kcy5nYXVnZV90eXBlcyhnYXVnZUFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICBnYXVnZUNvbnRyb2xsZXIubWV0aG9kcy5nYXVnZV9yZWxhdGl2ZV93ZWlnaHQoZ2F1Z2VBZGRyZXNzKS5jYWxsKClcclxuICAgICAgXSk7XHJcblxyXG4gICAgICBsZXQgbmFtZSA9ICdVbmtub3duJ1xyXG4gICAgICBsZXQgbHBUb2tlbkFkZHJlc3MgPSAnJ1xyXG5cclxuICAgICAgaWYoWycwJywgJzUnLCAnNiddLmluY2x1ZGVzKGdhdWdlVHlwZSkpIHtcclxuICAgICAgICBjb25zdCBnYXVnZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChHQVVHRV9DT05UUkFDVF9BQkksIGdhdWdlQWRkcmVzcylcclxuICAgICAgICBscFRva2VuQWRkcmVzcyA9IGF3YWl0IGdhdWdlLm1ldGhvZHMubHBfdG9rZW4oKS5jYWxsKClcclxuICAgICAgICAvLyBpZiBub3QgMCwgd2UgY2FudCBnZXQgTFAgdG9rZW4gaW5mbyBjYXVzZSBpdCBpcyBvbiBhIGRpZmZlcmVudCBjaGFpblxyXG4gICAgICAgIGNvbnN0IGxwVG9rZW4gPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoRVJDMjBfQUJJLCBscFRva2VuQWRkcmVzcylcclxuICAgICAgICBuYW1lID0gYXdhaXQgbHBUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL21hbnVhbGx5IG1hcCBnYXVnZSBuYW1lc1xyXG4gICAgICAgIHN3aXRjaCAoZ2F1Z2VBZGRyZXNzKSB7XHJcbiAgICAgICAgICBjYXNlICcweGI5QzA1QjhFRTQxRkRDYmQ5OTU2MTE0QjNhRjE1ODM0RkRFRENiNTQnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIERBSS9VU0RDIChEQUkrVVNEQyknXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhmRTFBM2REOGIxNjlmQjVCRjBENWRiRmU4MTNkOTU2RjM5ZkY2MzEwJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBmVVNEVC9EQUkvVVNEQydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweEM0OGY0NjUzZGQ2YTk1MDlEZTQ0YzkyYmViMDYwNEJFQTNBRWU3MTQnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIGFtREFJL2FtVVNEQy9hbVVTRFQnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHg2OTU1YTU1NDE2YTA2ODM5MzA5MDE4QThCMGNCNzJjNEREQzExZjE1JzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBVU0QtQlRDLUVUSCdcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweDQ4OEU2ZWY5MTlDMmJCOWRlNTM1QzYzNGE4MGFmYjAxMTREQThGNjInOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlLmZpIGFtV0JUQy9yZW5CVEMnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhmRGIxMjllYTRiNmY1NTdiMDdCY0RDZWRFNTRGNjY1YjdiNkJjMjgxJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBXQlRDL3JlbkJUQydcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcweDA2MGUzODZlQ2ZCYWNmNDJBYTcyMTcxQWY5RUZlMTdiMzk5M2ZDNEYnOlxyXG4gICAgICAgICAgICBuYW1lID0gJ0N1cnZlIFVTRC1CVEMtRVRIJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4NkMwOUY2NzI3MTEzNTQzRmQwNjFhNzIxZGE1MTJCN2VGQ0REMDI2Nyc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgd3hEQUkvVVNEQy9VU0RUJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJzB4RGVGZDhGZEQyMGUwZjM0MTE1QzcwMThDQ2ZiNjU1Nzk2RjZCMjE2OCc6XHJcbiAgICAgICAgICAgIG5hbWUgPSAnQ3VydmUuZmkgVVNELUJUQy1FVEgnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhkOGI3MTJkMjkzODE3NDhkQjg5YzM2QkNhMDEzOGQ3Yzc1ODY2ZGRGJzpcclxuICAgICAgICAgICAgbmFtZSA9ICdDdXJ2ZS5maSBGYWN0b3J5IFVTRCBNZXRhcG9vbDogTWFnaWMgSW50ZXJuZXQgTW9uZXkgM1Bvb2wnXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnMHhjNWFlNGI1Zjg2MzMyZTcwZjMyMDVhODE1MWVlOWVkOWY3MWUwNzk3JzpcclxuICAgICAgICAgICAgbmFtZSA9ICd5b2xvJ1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGdhdWdlQWRkcmVzczogZ2F1Z2VBZGRyZXNzLFxyXG4gICAgICAgIGxwVG9rZW5BZGRyZXNzOiBscFRva2VuQWRkcmVzcyxcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIGdhdWdlV2VpZ2h0OiBnYXVnZVdlaWdodCxcclxuICAgICAgICBnYXVnZVR5cGU6IGdhdWdlVHlwZSxcclxuICAgICAgICBnYXVnZVR5cGVOYW1lOiB0aGlzLl9tYXBHYXVnZVR5cGVUb05hbWUoZ2F1Z2VUeXBlKSxcclxuICAgICAgICBsb2dvOiAnL3Vua25vd24tbG9nby5wbmcnXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZXgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgY29uc29sZS5sb2coYGV4Y2VwdGlvbiB0aHJvd24gaW4gX2dldEdhdWdlSW5mbygke3dlYjN9LCAke2dhdWdlQ29udHJvbGxlcn0sICR7aW5kZXh9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX21hcEdhdWdlVHlwZVRvTmFtZSA9IChnYXVnZVR5cGUpID0+IHtcclxuICAgIHN3aXRjaCAoZ2F1Z2VUeXBlKSB7XHJcbiAgICAgIGNhc2UgJzAnOlxyXG4gICAgICBjYXNlICczJzpcclxuICAgICAgY2FzZSAnNSc6XHJcbiAgICAgIGNhc2UgJzYnOlxyXG4gICAgICAgIHJldHVybiAnRXRoZXJldW0nXHJcbiAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgIHJldHVybiAnRmFudG9tJ1xyXG4gICAgICBjYXNlICcyJzpcclxuICAgICAgICByZXR1cm4gJ1BvbHlnb24nXHJcbiAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgIHJldHVybiAneERBSSdcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ1Vua25vd24nXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0RGVmYXVsdFRva2VucyA9ICgpID0+IHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg0ZTE1MzYxZmQ2YjRiYjYwOWZhNjNjODFhMmJlMTlkODczNzE3ODcwJyxcclxuICAgICAgICBzeW1ib2w6ICdGVE0nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4MmJhNTkyZjc4ZGI2NDM2NTI3NzI5OTI5YWFmNmM5MDg0OTdjYjIwMCcsXHJcbiAgICAgICAgc3ltYm9sOiAnQ1JFQU0nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4MDkwMTg1ZjIxMzUzMDhiYWQxNzUyNzAwNDM2NGViY2MyZDM3ZTVmNicsXHJcbiAgICAgICAgc3ltYm9sOiAnU1BFTEwnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4NmIxNzU0NzRlODkwOTRjNDRkYTk4Yjk1NGVlZGVhYzQ5NTI3MWQwZicsXHJcbiAgICAgICAgc3ltYm9sOiAnREFJJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGEwYjg2OTkxYzYyMThiMzZjMWQxOWQ0YTJlOWViMGNlMzYwNmViNDgnLFxyXG4gICAgICAgIHN5bWJvbDogJ1VTREMnLFxyXG4gICAgICAgIGRlY2ltYWxzOiA2XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg1YTk4ZmNiZWE1MTZjZjA2ODU3MjE1Nzc5ZmQ4MTJjYTNiZWYxYjMyJyxcclxuICAgICAgICBzeW1ib2w6ICdMRE8nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4ZGJkYjRkMTZlZGE0NTFkMDUwM2I4NTRjZjc5ZDU1Njk3ZjkwYzhkZicsXHJcbiAgICAgICAgc3ltYm9sOiAnQUxDWCcsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg5RDc5ZDVCNjFEZTU5RDg4MmNlOTAxMjViMThGNzRhZjY1MGFjQjkzJyxcclxuICAgICAgICBzeW1ib2w6ICdOU0JUJyxcclxuICAgICAgICBkZWNpbWFsczogNlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4N2QxYWZhN2I3MThmYjg5M2RiMzBhM2FiYzBjZmM2MDhhYWNmZWJiMCcsXHJcbiAgICAgICAgc3ltYm9sOiAnTUFUSUMnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4OTJlMTg3YTAzYjZjZDE5Y2I2YWYyOTNiYTE3ZjI3NDVmZDIzNTdkNScsXHJcbiAgICAgICAgc3ltYm9sOiAnRFVDSycsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHg4MjA3YzFGZkM1QjY4MDRGNjAyNDMyMkNjRjM0RjI5YzM1NDFBZTI2JyxcclxuICAgICAgICBzeW1ib2w6ICdPR04nLFxyXG4gICAgICAgIGRlY2ltYWxzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4YTNCZUQ0RTFjNzVEMDBmYTZmNEU1RTY5MjJEQjcyNjFCNUU5QWNEMicsXHJcbiAgICAgICAgc3ltYm9sOiAnTVRBJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGQ1MzNhOTQ5NzQwYmIzMzA2ZDExOWNjNzc3ZmE5MDBiYTAzNGNkNTInLFxyXG4gICAgICAgIHN5bWJvbDogJ0NSVicsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHhjZGY3MDI4Y2VhYjgxZmEwYzY5NzEyMDhlODNmYTc4NzI5OTRiZWU1JyxcclxuICAgICAgICBzeW1ib2w6ICdUJyxcclxuICAgICAgICBkZWNpbWFsczogMThcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6ICcweGRiMjVmMjExYWIwNWIxYzk3ZDU5NTUxNmY0NTc5NDUyOGE4MDdhZDgnLFxyXG4gICAgICAgIHN5bWJvbDogJ0VVUlMnLFxyXG4gICAgICAgIGRlY2ltYWxzOiAyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiAnMHgzMTQyOWQxODU2YUQxMzc3QThBMDA3OTQxMEIyOTdlMWE5ZTIxNGMyJyxcclxuICAgICAgICBzeW1ib2w6ICdBTkdMRScsXHJcbiAgICAgICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogJzB4NGUzRkJENTZDRDU2YzNlNzJjMTQwM2UxMDNiNDVEYjlkYTVCOUQyQicsXHJcbiAgICAgICAgc3ltYm9sOiAnQ1ZYJyxcclxuICAgICAgICBkZWNpbWFsczogMTgsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgZ2V0QmFsYW5jZXMgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0U3RvcmUoJ2FjY291bnQnKTtcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2F1Z2VzID0gdGhpcy5nZXRTdG9yZSgnZ2F1Z2VzJylcclxuICAgIGlmKCFnYXVnZXMgfHwgZ2F1Z2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGdhdWdlcyA9IGF3YWl0IHRoaXMuX2dldEN1cnJlbnRHYXVnZVZvdGVzKHdlYjMsIGFjY291bnQsIGdhdWdlcylcclxuXHJcbiAgICBsZXQgbXlQYXJhbSA9IG51bGxcclxuXHJcbiAgICBpZihwYXlsb2FkLmNvbnRlbnQgJiYgcGF5bG9hZC5jb250ZW50LmFkZHJlc3MpIHtcclxuICAgICAgbXlQYXJhbSA9IHBheWxvYWQuY29udGVudC5hZGRyZXNzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICBteVBhcmFtID0gdXJsUGFyYW1zLmdldCgncmV3YXJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV3YXJkVG9rZW5BZGRyZXNzID0gbXlQYXJhbVxyXG5cclxuICAgIC8vIEZUTSwgQ1JFQU0sIE1JTSwgREFJLCBVU0RDLFxyXG4gICAgY29uc3QgZGVmYXVsdFRva2VucyA9IHRoaXMuX2dldERlZmF1bHRUb2tlbnMoKVxyXG5cclxuICAgIC8vSWYgaXQgaXMgYSB2YWxpZCB0b2tlbiwgd2UgYWRkIGl0IHRvIHRoZSBzZWFyY2ggbGlzdFxyXG4gICAgaWYocmV3YXJkVG9rZW5BZGRyZXNzICYmIHdlYjMudXRpbHMuaXNBZGRyZXNzKHJld2FyZFRva2VuQWRkcmVzcykpIHtcclxuICAgICAgbGV0IGluY2x1ZGVzVG9rZW4gPSBmYWxzZVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGVmYXVsdFRva2Vucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKGRlZmF1bHRUb2tlbnNbaV0uYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSByZXdhcmRUb2tlbkFkZHJlc3MudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgaW5jbHVkZXNUb2tlbiA9IHRydWVcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWluY2x1ZGVzVG9rZW4pIHtcclxuICAgICAgICBjb25zdCByZXdhcmRUb2tlbiA9IGF3YWl0IHRoaXMuX2dldFRva2VuSW5mbyh3ZWIzLCByZXdhcmRUb2tlbkFkZHJlc3MpXHJcbiAgICAgICAgZGVmYXVsdFRva2Vucy5wdXNoKHJld2FyZFRva2VuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMubWFwKGRlZmF1bHRUb2tlbnMsIGFzeW5jICh0b2tlbiwgY2FsbGJhY2spID0+IHtcclxuICAgICAgY29uc3QgYnJpYmVyeSA9IGF3YWl0IHRoaXMuX2dldEJyaWJlcnkod2ViMywgYWNjb3VudCwgZ2F1Z2VzLCBkZWZhdWx0VG9rZW5zLCB0b2tlbi5hZGRyZXNzKVxyXG4gICAgICBpZihjYWxsYmFjaykge1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGJyaWJlcnkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGJyaWJlcnlcclxuICAgICAgfVxyXG4gICAgfSwgKGVyciwgYnJpYmVyaWVzKSA9PiB7XHJcbiAgICAgIGlmKGVycikge1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBmbGF0QnJpYmVyaWVzID0gYnJpYmVyaWVzLmZsYXQoKVxyXG4gICAgICBsZXQgcmV3YXJkcyA9IFtdXHJcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBmbGF0QnJpYmVyaWVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IGJyaWJlcnkgPSBmbGF0QnJpYmVyaWVzW2pdXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJyaWJlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBicmliZSA9IGJyaWJlcnlbaV1cclxuICAgICAgICAgIHJld2FyZHMucHVzaCh7XHJcbiAgICAgICAgICAgIGFjdGl2ZVBlcmlvZDogYnJpYmUuYWN0aXZlUGVyaW9kLFxyXG4gICAgICAgICAgICByZXdhcmRzVW5sb2NrOiBCaWdOdW1iZXIoYnJpYmUuYWN0aXZlUGVyaW9kKS5wbHVzKFdFRUspLnRvRml4ZWQoMCksXHJcbiAgICAgICAgICAgIGNsYWltYWJsZTogQmlnTnVtYmVyKGJyaWJlLmNsYWltYWJsZSkuZGl2KDEwKipicmliZS5yZXdhcmRUb2tlbi5kZWNpbWFscykudG9GaXhlZChicmliZS5yZXdhcmRUb2tlbi5kZWNpbWFscyksXHJcbiAgICAgICAgICAgIGNhbkNsYWltOiBicmliZS5jYW5DbGFpbSxcclxuICAgICAgICAgICAgaGFzQ2xhaW1lZDogYnJpYmUuaGFzQ2xhaW1lZCxcclxuICAgICAgICAgICAgZ2F1Z2U6IGJyaWJlLmdhdWdlLFxyXG4gICAgICAgICAgICB0b2tlbnNGb3JCcmliZTogQmlnTnVtYmVyKGJyaWJlLnRva2Vuc0ZvckJyaWJlKS5kaXYoMTAqKmJyaWJlLnJld2FyZFRva2VuLmRlY2ltYWxzKS50b0ZpeGVkKGJyaWJlLnJld2FyZFRva2VuLmRlY2ltYWxzKSxcclxuICAgICAgICAgICAgcmV3YXJkUGVyVG9rZW46IGJyaWJlLnJld2FyZFBlclRva2VuLFxyXG4gICAgICAgICAgICByZXdhcmRUb2tlbjogYnJpYmUucmV3YXJkVG9rZW5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0b3JlKHsgcmV3YXJkczogcmV3YXJkcyB9KVxyXG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdChJTkNFTlRJVkVTX0JBTEFOQ0VTX1JFVFVSTkVELCBbXSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGxldCB2b3RlcyA9IHRoaXMuZ2V0U3RvcmUoJ3ZvdGVzJylcclxuICAgIGlmKCF2b3RlcyB8fCB2b3Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2b3RlUmV3YXJkcyA9IGF3YWl0IHRoaXMuX2dldFZvdGVCcmliZXJ5KHdlYjMsIGFjY291bnQsIHZvdGVzKVxyXG4gICAgdGhpcy5zZXRTdG9yZSh7IHZvdGVSZXdhcmRzOiB2b3RlUmV3YXJkcyB9KVxyXG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoSU5DRU5USVZFU19CQUxBTkNFU19SRVRVUk5FRCwgW10pO1xyXG4gIH07XHJcblxyXG4gIF9nZXRUb2tlbkluZm8gPSBhc3luYyAod2ViMywgdG9rZW5BZGRyZXNzLCBnZXRCYWxhbmNlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChFUkMyMF9BQkksIHRva2VuQWRkcmVzcylcclxuXHJcbiAgICAgIGNvbnN0IFtzeW1ib2wsIGRlY2ltYWxzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICB0b2tlbi5tZXRob2RzLnN5bWJvbCgpLmNhbGwoKSxcclxuICAgICAgICB0b2tlbi5tZXRob2RzLmRlY2ltYWxzKCkuY2FsbCgpXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgbGV0IGJhbGFuY2UgPSAwXHJcbiAgICAgIGlmKGdldEJhbGFuY2UpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRTdG9yZSgnYWNjb3VudCcpO1xyXG4gICAgICAgIGJhbGFuY2UgPSBhd2FpdCB0b2tlbi5tZXRob2RzLmJhbGFuY2VPZihhY2NvdW50LmFkZHJlc3MpLmNhbGwoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZHJlc3M6IHRva2VuQWRkcmVzcyxcclxuICAgICAgICBzeW1ib2wsXHJcbiAgICAgICAgZGVjaW1hbHM6IHBhcnNlSW50KGRlY2ltYWxzKSxcclxuICAgICAgICBiYWxhbmNlXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBleGNlcHRpb24gdGhyb3duIGluIF9nZXRUb2tlbkluZm8oJHt3ZWIzfSwgJHt0b2tlbkFkZHJlc3N9KWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICByZXR1cm4gZXhcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRWb3RlQnJpYmVyeSA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCB2b3RlcykgPT4ge1xyXG4gICAgY29uc3Qgdm90ZUJyaWJlcnlDb250cmFjdCA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChWT1RFX0JSSUJFUllfQUJJLCBWT1RFX0JSSUJFUllfQUREUkVTUylcclxuICAgIGNvbnN0IHZvdGVzU291cmNlQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVk9URV9TT1VSQ0VfQUJJLCBWT1RFX1NPVVJDRV9BRERSRVNTKVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKHZvdGVzLm1hcChhc3luYyAodm90ZSkgPT4ge1xyXG5cclxuICAgICAgaWYoIXZvdGUucmV3YXJkc1BlclZvdGUgfHwgdm90ZS5yZXdhcmRzUGVyVm90ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXdhcmRzID0gYXdhaXQgUHJvbWlzZS5hbGwodm90ZS5yZXdhcmRzUGVyVm90ZS5tYXAoYXN5bmMgKHJld2FyZFRva2VuQWRkcmVzcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW2VzdGltYXRlQnJpYmUsIHJld2FyZEFtb3VudCwgdm90ZXJTdGF0ZSwgaHNhQ2xhaW1lZF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHZvdGVCcmliZXJ5Q29udHJhY3QubWV0aG9kcy5lc3RpbWF0ZV9icmliZSh2b3RlLmluZGV4LCByZXdhcmRUb2tlbkFkZHJlc3MsIGFjY291bnQuYWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgICB2b3RlQnJpYmVyeUNvbnRyYWN0Lm1ldGhvZHMucmV3YXJkX2Ftb3VudCh2b3RlLmluZGV4LCByZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKSxcclxuICAgICAgICAgICAgdm90ZXNTb3VyY2VDb250cmFjdC5tZXRob2RzLmdldFZvdGVyU3RhdGUodm90ZS5pbmRleCwgYWNjb3VudC5hZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICAgIHZvdGVCcmliZXJ5Q29udHJhY3QubWV0aG9kcy5oYXNfY2xhaW1lZCh2b3RlLmluZGV4LCByZXdhcmRUb2tlbkFkZHJlc3MsIGFjY291bnQuYWRkcmVzcykuY2FsbCgpXHJcbiAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICBjb25zdCByZXdhcmRUb2tlbiA9IGF3YWl0IHRoaXMuX2dldFRva2VuSW5mbyh3ZWIzLCByZXdhcmRUb2tlbkFkZHJlc3MpXHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXN0aW1hdGVCcmliZTogQmlnTnVtYmVyKGVzdGltYXRlQnJpYmUpLmRpdigxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQocmV3YXJkVG9rZW4uZGVjaW1hbHMpLFxyXG4gICAgICAgICAgICByZXdhcmRBbW91bnQ6IEJpZ051bWJlcihyZXdhcmRBbW91bnQpLmRpdigxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQocmV3YXJkVG9rZW4uZGVjaW1hbHMpLFxyXG4gICAgICAgICAgICB2b3RlclN0YXRlLFxyXG4gICAgICAgICAgICBoc2FDbGFpbWVkLFxyXG4gICAgICAgICAgICB2b3RlLFxyXG4gICAgICAgICAgICByZXdhcmRUb2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuXHJcbiAgICAgIHJldHVybiByZXdhcmRzXHJcbiAgICB9KSlcclxuXHJcbiAgICByZXR1cm4gcmVzLmZpbHRlcigocmV3YXJkKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXdhcmQgIT0gbnVsbFxyXG4gICAgfSkuZmxhdCgpXHJcbiAgfVxyXG5cclxuICBfZ2V0QnJpYmVyeSA9IGFzeW5jICh3ZWIzLCBhY2NvdW50LCBnYXVnZXMsIHJld2FyZFRva2VucywgcmV3YXJkVG9rZW5BZGRyZXNzKSA9PiB7XHJcbiAgICBjb25zdCBibG9jayA9IGF3YWl0IHdlYjMuZXRoLmdldEJsb2NrTnVtYmVyKCk7XHJcblxyXG4gICAgY29uc3QgYnJpYmVyeSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChCUklCRVJZX0FCSSwgQlJJQkVSWV9BRERSRVNTKVxyXG4gICAgY29uc3QgYnJpYmVyeVYyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEJSSUJFUllfQUJJLCBCUklCRVJZX0FERFJFU1NfVjIpXHJcbiAgICBjb25zdCBicmliZXJ5VG9rZW5zQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoQlJJQkVSWV9BQkksIEJSSUJFUllfVE9LRU5TX0FERFJFU1NfVjIpXHJcblxyXG4gICAgLy8gRm9yIFYyIGNhbGwgZ2F1Z2VzX3Blcl9yZXdhcmQuXHJcbiAgICAvLyBmb3JlYWNoIG9mIHRob3NlLCB3ZSBnZXQgdGhlIHVzZXIncyByZXdhcmQgb25seS4gbm8gbG9vcGluZyB0aHJvdWdoIGRlYWQgZ2F1Z2VzIGFueW1vcmUuXHJcbiAgICBjb25zdCBbZ2F1Z2VzUGVyUmV3YXJkVjJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICBicmliZXJ5VjIubWV0aG9kcy5nYXVnZXNfcGVyX3Jld2FyZChyZXdhcmRUb2tlbkFkZHJlc3MpLmNhbGwoKVxyXG4gICAgXSk7XHJcblxyXG4gICAgbGV0IGJyaWJlcnlSZXN1bHRzUHJvbWlzZXNWMiA9IFtdXHJcbiAgICBpZihnYXVnZXNQZXJSZXdhcmRWMi5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGJyaWJlcnlSZXN1bHRzUHJvbWlzZXNWMiA9IGdhdWdlc1BlclJld2FyZFYyLm1hcChhc3luYyAoZ2F1Z2UpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgW2FjdGl2ZVBlcmlvZCwgY2xhaW1hYmxlLCBsYXN0VXNlckNsYWltLCB0b2tlbnNGb3JCcmliZSwgcmV3YXJkUGVyVG9rZW5dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgYnJpYmVyeVYyLm1ldGhvZHMuYWN0aXZlX3BlcmlvZChnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICBicmliZXJ5VjIubWV0aG9kcy5jbGFpbWFibGUoYWNjb3VudC5hZGRyZXNzLCBnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICBicmliZXJ5VjIubWV0aG9kcy5sYXN0X3VzZXJfY2xhaW0oYWNjb3VudC5hZGRyZXNzLCBnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgICBicmliZXJ5VG9rZW5zQ29udHJhY3QubWV0aG9kcy50b2tlbnNfZm9yX2JyaWJlKGFjY291bnQuYWRkcmVzcywgZ2F1Z2UsIHJld2FyZFRva2VuQWRkcmVzcykuY2FsbCgpLFxyXG4gICAgICAgICAgYnJpYmVyeVYyLm1ldGhvZHMucmV3YXJkX3Blcl90b2tlbihnYXVnZSwgcmV3YXJkVG9rZW5BZGRyZXNzKS5jYWxsKCksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2ZXJzaW9uOiAyLFxyXG4gICAgICAgICAgY2xhaW1hYmxlLFxyXG4gICAgICAgICAgbGFzdFVzZXJDbGFpbSxcclxuICAgICAgICAgIGFjdGl2ZVBlcmlvZCxcclxuICAgICAgICAgIHRva2Vuc0ZvckJyaWJlLFxyXG4gICAgICAgICAgcmV3YXJkUGVyVG9rZW4sXHJcbiAgICAgICAgICBjYW5DbGFpbTogQmlnTnVtYmVyKGJsb2NrKS5sdChCaWdOdW1iZXIoYWN0aXZlUGVyaW9kKS5wbHVzKFdFRUspKSxcclxuICAgICAgICAgIGhhc0NsYWltZWQ6IEJpZ051bWJlcihsYXN0VXNlckNsYWltKS5lcShhY3RpdmVQZXJpb2QpLFxyXG4gICAgICAgICAgZ2F1Z2U6IGdhdWdlcy5maWx0ZXIoKGcpID0+IHsgcmV0dXJuIGcuZ2F1Z2VBZGRyZXNzLnRvTG93ZXJDYXNlKCkgPT09IGdhdWdlLnRvTG93ZXJDYXNlKCkgfSlbMF0sXHJcbiAgICAgICAgICByZXdhcmRUb2tlbjogcmV3YXJkVG9rZW5zLmZpbHRlcigocikgPT4geyByZXR1cm4gci5hZGRyZXNzLnRvTG93ZXJDYXNlKCkgPT09IHJld2FyZFRva2VuQWRkcmVzcy50b0xvd2VyQ2FzZSgpIH0pWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJyaWJlcnlSZXN1bHRzVjIgPSBhd2FpdCBQcm9taXNlLmFsbChicmliZXJ5UmVzdWx0c1Byb21pc2VzVjIpO1xyXG4gICAgcmV0dXJuIFticmliZXJ5UmVzdWx0c1YyXVxyXG4gIH1cclxuXHJcbiAgX2dldEN1cnJlbnRHYXVnZVZvdGVzID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIGdhdWdlcykgPT4ge1xyXG4gICAgY29uc3QgZ2F1Z2VDb250cm9sbGVyID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEdBVUdFX0NPTlRST0xMRVJfQUJJLCBHQVVHRV9DT05UUk9MTEVSX0FERFJFU1MpXHJcblxyXG4gICAgY29uc3QgdXNlclZvdGVTbG9wZXMgPSBhd2FpdCBQcm9taXNlLmFsbChnYXVnZXMubWFwKChnYXVnZSkgPT4ge1xyXG4gICAgICByZXR1cm4gZ2F1Z2VDb250cm9sbGVyLm1ldGhvZHMudm90ZV91c2VyX3Nsb3BlcyhhY2NvdW50LmFkZHJlc3MsIGdhdWdlLmdhdWdlQWRkcmVzcykuY2FsbCgpXHJcbiAgICB9KSk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGdhdWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBnYXVnZXNbaV0udm90ZXMgPSB1c2VyVm90ZVNsb3Blc1tpXVxyXG4gICAgICBnYXVnZXNbaV0udm90ZXMudXNlclZvdGVTbG9wZUFtb3VudCA9IEJpZ051bWJlcih1c2VyVm90ZVNsb3Blc1tpXS5zbG9wZSkuZGl2KDEwKioxMCkudG9GaXhlZCgxMClcclxuICAgICAgZ2F1Z2VzW2ldLnZvdGVzLnVzZXJWb3RlU2xvcGVQZXJjZW50ID0gQmlnTnVtYmVyKHVzZXJWb3RlU2xvcGVzW2ldLnBvd2VyKS5kaXYoMTAwKS50b0ZpeGVkKDIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdhdWdlc1xyXG4gIH1cclxuXHJcbiAgY2xhaW1SZXdhcmQgPSBhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0U3RvcmUoJ2FjY291bnQnKTtcclxuICAgIGlmICghYWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgd2ViMyA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0V2ViM1Byb3ZpZGVyKCk7XHJcbiAgICBpZiAoIXdlYjMpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgcmV3YXJkIH0gPSBwYXlsb2FkLmNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5fY2FsbENsYWltUmV3YXJkKHdlYjMsIGFjY291bnQsIHJld2FyZC5nYXVnZS5nYXVnZUFkZHJlc3MsIHJld2FyZC5yZXdhcmRUb2tlbi5hZGRyZXNzLCByZXdhcmQudmVyc2lvbiwgIChlcnIsIHJlcykgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoUkVXQVJEX0NMQUlNRUQsIHJlcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jYWxsQ2xhaW1SZXdhcmQgPSBhc3luYyAod2ViMywgYWNjb3VudCwgZ2F1Z2UsIHJld2FyZFRva2VuLCB2ZXJzaW9uLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgbGV0IGFkZHJlc3MgPSBCUklCRVJZX0FERFJFU1NfVjJcclxuICAgIGlmKHZlcnNpb24gPT09IDEpIHtcclxuICAgICAgYWRkcmVzcyA9IEJSSUJFUllfQUREUkVTU1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnJpYmVyeSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChCUklCRVJZX0FCSSwgYWRkcmVzcyk7XHJcbiAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0R2FzUHJpY2UoKTtcclxuXHJcbiAgICB0aGlzLl9jYWxsQ29udHJhY3RXYWl0KHdlYjMsIGJyaWJlcnksICdjbGFpbV9yZXdhcmQnLCBbZ2F1Z2UsIHJld2FyZFRva2VuXSwgYWNjb3VudCwgZ2FzUHJpY2UsIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTLCB7fSwgY2FsbGJhY2spO1xyXG4gIH07XHJcblxyXG4gIHNlYXJjaFRva2VuID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHBheWxvYWQuY29udGVudDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX2dldFRva2VuSW5mbyh3ZWIzLCBhZGRyZXNzLCB0cnVlKVxyXG4gICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoU0VBUkNIX1RPS0VOX1JFVFVSTkVELCB0b2tlbik7XHJcbiAgICB9IGNhdGNoKGV4KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV4KVxyXG4gICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGV4KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkUmV3YXJkID0gYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgIGNvbnN0IGFjY291bnQgPSBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFN0b3JlKCdhY2NvdW50Jyk7XHJcbiAgICBpZiAoIWFjY291bnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldFdlYjNQcm92aWRlcigpO1xyXG4gICAgaWYgKCF3ZWIzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHJld2FyZFRva2VuLCByZXdhcmRBbW91bnQsIGdhdWdlIH0gPSBwYXlsb2FkLmNvbnRlbnQ7XHJcblxyXG4gICAgbGV0IHNlbmRBbW91bnQgPSBCaWdOdW1iZXIocmV3YXJkQW1vdW50KS50aW1lcygxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQoMClcclxuXHJcbiAgICB0aGlzLl9jaGVja0FsbG93YW5jZSh3ZWIzLCByZXdhcmRUb2tlbi5hZGRyZXNzLCBhY2NvdW50LmFkZHJlc3MsIEJSSUJFUllfQUREUkVTU19WMiwgc2VuZEFtb3VudCwgKGVycikgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX2NhbGxBZGRSZXdhcmQod2ViMywgYWNjb3VudCwgZ2F1Z2UuZ2F1Z2VBZGRyZXNzLCByZXdhcmRUb2tlbi5hZGRyZXNzLCBzZW5kQW1vdW50LCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoQUREX1JFV0FSRF9SRVRVUk5FRCwgcmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2NoZWNrQWxsb3dhbmNlID0gYXN5bmMgKHdlYjMsIHRva2VuLCBvd25lciwgc3BlbmRlciwgc3BlbmRpbmdBbW91bnQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEVSQzIwX0FCSSwgdG9rZW4pXHJcbiAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCB0b2tlbkNvbnRyYWN0Lm1ldGhvZHMuYWxsb3dhbmNlKG93bmVyLCBzcGVuZGVyKS5jYWxsKCk7XHJcblxyXG4gICAgaWYoQmlnTnVtYmVyKHNwZW5kaW5nQW1vdW50KS5sdGUoYWxsb3dhbmNlKSkge1xyXG4gICAgICBjYWxsYmFjaygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBnYXNQcmljZSA9IGF3YWl0IHN0b3Jlcy5hY2NvdW50U3RvcmUuZ2V0R2FzUHJpY2UoKTtcclxuICAgICAgdGhpcy5fY2FsbENvbnRyYWN0V2FpdCh3ZWIzLCB0b2tlbkNvbnRyYWN0LCAnYXBwcm92ZScsIFtzcGVuZGVyLCBNQVhfVUlOVDI1Nl0sIHsgYWRkcmVzczogb3duZXIgfSwgZ2FzUHJpY2UsIG51bGwsIG51bGwsIGNhbGxiYWNrKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2NhbGxBZGRSZXdhcmQgPSBhc3luYyAod2ViMywgYWNjb3VudCwgZ2F1Z2UsIHJld2FyZFRva2VuLCByZXdhcmRBbW91bnQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCBicmliZXJ5ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEJSSUJFUllfQUJJLCBCUklCRVJZX0FERFJFU1NfVjIpO1xyXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldEdhc1ByaWNlKCk7XHJcblxyXG4gICAgdGhpcy5fY2FsbENvbnRyYWN0V2FpdCh3ZWIzLCBicmliZXJ5LCAnYWRkX3Jld2FyZF9hbW91bnQnLCBbZ2F1Z2UsIHJld2FyZFRva2VuLCByZXdhcmRBbW91bnRdLCBhY2NvdW50LCBnYXNQcmljZSwgR0VUX0lOQ0VOVElWRVNfQkFMQU5DRVMsIHt9LCBjYWxsYmFjayk7XHJcbiAgfTtcclxuXHJcbiAgYWRkVm90ZVJld2FyZCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gc3RvcmVzLmFjY291bnRTdG9yZS5nZXRTdG9yZSgnYWNjb3VudCcpO1xyXG4gICAgaWYgKCFhY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWIzID0gYXdhaXQgc3RvcmVzLmFjY291bnRTdG9yZS5nZXRXZWIzUHJvdmlkZXIoKTtcclxuICAgIGlmICghd2ViMykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50LCB2b3RlIH0gPSBwYXlsb2FkLmNvbnRlbnQ7XHJcblxyXG4gICAgbGV0IHNlbmRBbW91bnQgPSBCaWdOdW1iZXIocmV3YXJkQW1vdW50KS50aW1lcygxMCoqcmV3YXJkVG9rZW4uZGVjaW1hbHMpLnRvRml4ZWQoMClcclxuXHJcbiAgICB0aGlzLl9jaGVja0FsbG93YW5jZSh3ZWIzLCByZXdhcmRUb2tlbi5hZGRyZXNzLCBhY2NvdW50LmFkZHJlc3MsIFZPVEVfQlJJQkVSWV9BRERSRVNTLCBzZW5kQW1vdW50LCAoZXJyKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoRVJST1IsIGVycik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fY2FsbEFkZFZvdGVSZXdhcmQod2ViMywgYWNjb3VudCwgdm90ZS5pbmRleCwgcmV3YXJkVG9rZW4uYWRkcmVzcywgc2VuZEFtb3VudCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEVSUk9SLCBlcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlci5lbWl0KEFERF9WT1RFX1JFV0FSRF9SRVRVUk5FRCwgcmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgX2NhbGxBZGRWb3RlUmV3YXJkID0gYXN5bmMgKHdlYjMsIGFjY291bnQsIHZvdGVJbmRleCwgcmV3YXJkVG9rZW4sIHJld2FyZEFtb3VudCwgY2FsbGJhY2spID0+IHtcclxuICAgIGNvbnN0IGJyaWJlcnkgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoVk9URV9CUklCRVJZX0FCSSwgVk9URV9CUklCRVJZX0FERFJFU1MpO1xyXG4gICAgY29uc3QgZ2FzUHJpY2UgPSBhd2FpdCBzdG9yZXMuYWNjb3VudFN0b3JlLmdldEdhc1ByaWNlKCk7XHJcblxyXG4gICAgdGhpcy5fY2FsbENvbnRyYWN0V2FpdCh3ZWIzLCBicmliZXJ5LCAnYWRkX3Jld2FyZF9hbW91bnQnLCBbdm90ZUluZGV4LCByZXdhcmRUb2tlbiwgcmV3YXJkQW1vdW50XSwgYWNjb3VudCwgZ2FzUHJpY2UsIEdFVF9JTkNFTlRJVkVTX0JBTEFOQ0VTLCB7fSwgY2FsbGJhY2spO1xyXG4gIH07XHJcblxyXG4gIF9jYWxsQ29udHJhY3QgPSAod2ViMywgY29udHJhY3QsIG1ldGhvZCwgcGFyYW1zLCBhY2NvdW50LCBnYXNQcmljZSwgZGlzcGF0Y2hFdmVudCwgZGlzcGF0Y2hFdmVudFBheWxvYWQsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcclxuICAgIGNvbnRyYWN0Lm1ldGhvZHNbbWV0aG9kXSguLi5wYXJhbXMpXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBmcm9tOiBhY2NvdW50LmFkZHJlc3MsXHJcbiAgICAgICAgZ2FzUHJpY2U6IHdlYjMudXRpbHMudG9XZWkoZ2FzUHJpY2UsICdnd2VpJyksXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbigndHJhbnNhY3Rpb25IYXNoJywgZnVuY3Rpb24gKGhhc2gpIHtcclxuICAgICAgICBjb250ZXh0LmVtaXR0ZXIuZW1pdChUWF9TVUJNSVRURUQsIGhhc2gpO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGhhc2gpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2NvbmZpcm1hdGlvbicsIGZ1bmN0aW9uIChjb25maXJtYXRpb25OdW1iZXIsIHJlY2VpcHQpIHtcclxuICAgICAgICBpZiAoZGlzcGF0Y2hFdmVudCAmJiBjb25maXJtYXRpb25OdW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaGVyLmRpc3BhdGNoKHsgdHlwZTogZGlzcGF0Y2hFdmVudCwgY29udGVudDogZGlzcGF0Y2hFdmVudFBheWxvYWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKCFlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKCctMzI2MDEnKSkge1xyXG4gICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGlmICghZXJyb3IudG9TdHJpbmcoKS5pbmNsdWRlcygnLTMyNjAxJykpIHtcclxuICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF9jYWxsQ29udHJhY3RXYWl0ID0gKHdlYjMsIGNvbnRyYWN0LCBtZXRob2QsIHBhcmFtcywgYWNjb3VudCwgZ2FzUHJpY2UsIGRpc3BhdGNoRXZlbnQsIGRpc3BhdGNoRXZlbnRQYXlsb2FkLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XHJcbiAgICBjb250cmFjdC5tZXRob2RzW21ldGhvZF0oLi4ucGFyYW1zKVxyXG4gICAgICAuc2VuZCh7XHJcbiAgICAgICAgZnJvbTogYWNjb3VudC5hZGRyZXNzLFxyXG4gICAgICAgIGdhc1ByaWNlOiB3ZWIzLnV0aWxzLnRvV2VpKGdhc1ByaWNlLCAnZ3dlaScpLFxyXG4gICAgICB9KVxyXG4gICAgICAub24oJ3RyYW5zYWN0aW9uSGFzaCcsIGZ1bmN0aW9uIChoYXNoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaGFzaClcclxuICAgICAgICAvLyBjb250ZXh0LmVtaXR0ZXIuZW1pdChUWF9TVUJNSVRURUQsIGhhc2gpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ3JlY2VpcHQnLCBmdW5jdGlvbiAocmVjZWlwdCkge1xyXG4gICAgICAgIGNvbnRleHQuZW1pdHRlci5lbWl0KFRYX1NVQk1JVFRFRCwgcmVjZWlwdC50cmFuc2FjdGlvbkhhc2gpO1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwsIHJlY2VpcHQudHJhbnNhY3Rpb25IYXNoKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3BhdGNoRXZlbnQpIHtcclxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hlci5kaXNwYXRjaCh7IHR5cGU6IGRpc3BhdGNoRXZlbnQsIGNvbnRlbnQ6IGRpc3BhdGNoRXZlbnRQYXlsb2FkIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGlmICghZXJyb3IudG9TdHJpbmcoKS5pbmNsdWRlcygnLTMyNjAxJykpIHtcclxuICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBpZiAoIWVycm9yLnRvU3RyaW5nKCkuaW5jbHVkZXMoJy0zMjYwMScpKSB7XHJcbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==