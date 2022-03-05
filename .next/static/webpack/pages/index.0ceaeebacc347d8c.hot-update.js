"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Session = function(param) {\n    var title = param.title, room = param.room;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this));\n};\n_c = Session;\nvar Sessions = function(param) {\n    var sessions = param.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = Sessions;\nvar SpeakerImage = function(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, _this));\n};\n_c2 = SpeakerImage;\nvar SpeakerFavorite = function(param) {\n    var favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    var doneCallback = function doneCallback() {\n        setInTransition(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inTransition = ref[0], setInTransition = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function onClick() {\n                setInTransition(true);\n                return onFavoriteToggle(doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, _this),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, _this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this));\n};\n_s(SpeakerFavorite, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = SpeakerFavorite;\nvar SpeakerDemographics = function(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, _this));\n};\n_c4 = SpeakerDemographics;\nvar Speaker = function(param) {\n    var speaker = param.speaker, showSessions = param.showSessions, onFavoriteToggle = param.onFavoriteToggle;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card card-height p-4 mt-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                    id: id,\n                    first: first,\n                    last: last\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 90,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker, {\n                    onFavoriteToggle: onFavoriteToggle\n                }), void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, _this),\n                showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                    sessions: sessions\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 92,\n                    columnNumber: 42\n                }, _this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 89,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this));\n};\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixHQUFLLENBQUNDLE9BQU8sR0FBRyxRQUFRLFFBQVcsQ0FBQztRQUFsQkMsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLElBQUksU0FBSkEsSUFBSTtJQUN6QixNQUFNLDZFQUNEQyxDQUFJO1FBQUNDLFNBQVMsRUFBQyxDQUFlOztZQUMxQkgsS0FBSztZQUFDLENBQUM7d0ZBQUNJLENBQU07O29CQUFDLENBQU07b0JBQUNILElBQUksQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7OztBQUc1QyxDQUFDO0tBTktOLE9BQU87QUFRYixHQUFLLENBQUNPLFFBQVEsR0FBRyxRQUFRLFFBQVEsQ0FBQztRQUFmQyxRQUFRLFNBQVJBLFFBQVE7SUFDdkIsTUFBTSw2RUFDREMsQ0FBRztRQUFDTCxTQUFTLEVBQUMsQ0FBdUI7OEZBQ2pDSixPQUFPLG9CQUFLUSxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7OztBQUduQyxDQUFDO01BTktELFFBQVE7QUFRZCxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLFFBQWUsQ0FBQztRQUF0QkMsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUk7SUFDbEMsTUFBTSw2RUFDREosQ0FBRztRQUFDTCxTQUFTLEVBQUMsQ0FBNkU7OEZBQ3ZGVSxDQUFHO1lBQ0FWLFNBQVMsRUFBQyxDQUFhO1lBQ3ZCVyxHQUFHLEVBQUcsQ0FBZ0Isa0JBQUssTUFBSSxDQUFQSixFQUFFLEVBQUMsQ0FBSTtZQUMvQkssS0FBSyxFQUFDLENBQUs7WUFDWEMsR0FBRyxFQUFHLEdBQVdKLE1BQUksQ0FBYkQsS0FBSyxFQUFDLENBQUMsSUFBTyxPQUFMQyxJQUFJOzs7Ozs7Ozs7OztBQUlyQyxDQUFDO01BWEtILFlBQVk7QUFhbEIsR0FBSyxDQUFDUSxlQUFlLEdBQUcsUUFBUSxRQUEwQixDQUFDO1FBQWpDQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0I7UUFFdkNDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLEdBQUcsQ0FBQztRQUNyQkMsZUFBZSxDQUFDLEtBQUs7SUFDekIsQ0FBQzs7SUFIRCxHQUFLLENBQW1DdkIsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0N3QixZQUFZLEdBQXFCeEIsR0FBZSxLQUFsQ3VCLGVBQWUsR0FBSXZCLEdBQWU7SUFLdkQsTUFBTSw2RUFDRFUsQ0FBRztRQUFDTCxTQUFTLEVBQUMsQ0FBYzs4RkFDNUJELENBQUk7WUFBQ3FCLE9BQU8sRUFBRSxRQUFRLENBQWpCQSxPQUFPLEdBQWMsQ0FBQztnQkFDeEJGLGVBQWUsQ0FBQyxJQUFJO2dCQUNwQixNQUFNLENBQUNGLGdCQUFnQixDQUFDQyxZQUFZO1lBQ3hDLENBQUM7OzRGQUNJSSxDQUFDO29CQUFDckIsU0FBUyxFQUFFZSxRQUFRLEtBQUssSUFBSSxHQUFHLENBQW1CLHFCQUFHLENBQXFCOzs7Ozs7Z0JBQUksQ0FBRztnQkFBQyxDQUM3RTtnQkFBQyxDQUFHO2dCQUNYSSxZQUFZLCtFQUNScEIsQ0FBSTtvQkFBQ0MsU0FBUyxFQUFDLENBQTZCOzs7Ozs0QkFDN0MsSUFBSTs7Ozs7Ozs7Ozs7O0FBSXBCLENBQUM7R0FwQktjLGVBQWU7TUFBZkEsZUFBZTtBQXNCckIsR0FBSyxDQUFDUSxtQkFBbUIsR0FBRyxRQUFRLFFBQW9FLENBQUM7UUFBM0VkLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRWMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxhQUFhLFNBQWJBLGFBQWEsRUFBRVYsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLGdCQUFnQixTQUFoQkEsZ0JBQWdCO0lBQzlGLE1BQU0sNkVBQ0RYLENBQUc7UUFBQ0wsU0FBUyxFQUFDLENBQWM7O3dGQUN4QkssQ0FBRztnQkFBQ0wsU0FBUyxFQUFDLENBQXFDO3NHQUMvQzBCLENBQUU7b0JBQUMxQixTQUFTLEVBQUMsQ0FBcUI7O3dCQUM5QlEsS0FBSzt3QkFBQyxDQUFDO3dCQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs7d0ZBR3BCSyxlQUFlO2dCQUNaQyxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCQyxnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7Ozs7d0ZBRXJDWCxDQUFHOztnR0FDQ3NCLENBQUM7d0JBQUMzQixTQUFTLEVBQUMsQ0FBa0I7a0NBQzFCdUIsR0FBRzs7Ozs7O2dHQUVQbEIsQ0FBRzt3QkFBQ0wsU0FBUyxFQUFDLENBQTZCOzt3R0FDdkNLLENBQUc7Z0NBQUNMLFNBQVMsRUFBQyxDQUFTOztnSEFDbkI0QixDQUFFO2tEQUFDLENBQU87Ozs7OztnSEFDVkMsQ0FBRTtrREFBRUwsT0FBTzs7Ozs7Ozs7Ozs7O3dHQUVmbkIsQ0FBRztnQ0FBQ0wsU0FBUyxFQUFDLENBQVM7O2dIQUNuQjRCLENBQUU7a0RBQUMsQ0FBTzs7Ozs7O2dIQUNWQyxDQUFFO2tEQUFFSixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUMsQ0FBQztNQTdCS0gsbUJBQW1CO0FBK0J6QixHQUFLLENBQUNRLE9BQU8sR0FBRyxRQUFRLFFBQXVDLENBQUM7UUFBOUNDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxZQUFZLFNBQVpBLFlBQVksRUFBRWhCLGdCQUFnQixTQUFoQkEsZ0JBQWdCO0lBQ3JELEdBQUssQ0FBRVQsRUFBRSxHQUEyQndCLE9BQU8sQ0FBcEN4QixFQUFFLEVBQUVDLEtBQUssR0FBb0J1QixPQUFPLENBQWhDdkIsS0FBSyxFQUFFQyxJQUFJLEdBQWNzQixPQUFPLENBQXpCdEIsSUFBSSxFQUFFTCxRQUFRLEdBQUkyQixPQUFPLENBQW5CM0IsUUFBUTtJQUNoQyxNQUFNLDZFQUNEQyxDQUFHO1FBQUNMLFNBQVMsRUFBQyxDQUEyRDs4RkFDckVLLENBQUc7WUFBQ0wsU0FBUyxFQUFDLENBQTJCOzs0RkFDckNNLFlBQVk7b0JBQUNDLEVBQUUsRUFBRUEsRUFBRTtvQkFBRUMsS0FBSyxFQUFFQSxLQUFLO29CQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs0RkFDN0NhLG1CQUFtQixvQkFBS1MsT0FBTztvQkFBRWYsZ0JBQWdCLEVBQUVBLGdCQUFnQjs7Ozs7O2dCQUNuRWdCLFlBQVksS0FBSyxJQUFJLCtFQUFJN0IsUUFBUTtvQkFBQ0MsUUFBUSxFQUFFQSxRQUFROzs7Ozs0QkFBTSxJQUFJOzs7Ozs7Ozs7Ozs7QUFJL0UsQ0FBQztNQVhLMEIsT0FBTztBQWFiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2Vzc2lvbiA9ICh7dGl0bGUsIHJvb219KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAgICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgU2Vzc2lvbnMgPSAoe3Nlc3Npb25zfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgICAgICAgICA8U2Vzc2lvbiB7Li4uc2Vzc2lvbnNbMF19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBTcGVha2VySW1hZ2UgPSAoe2lkLCBmaXJzdCwgbGFzdH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFNwZWFrZXJGYXZvcml0ZSA9ICh7ZmF2b3JpdGUsIG9uRmF2b3JpdGVUb2dnbGV9KSA9PiB7XHJcbiAgICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKCkge1xyXG4gICAgICAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gb25GYXZvcml0ZVRvZ2dsZShkb25lQ2FsbGJhY2spO1xyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Zhdm9yaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJ9Lz57XCIgXCJ9XHJcbiAgICAgICAgICAgIEZhdm9yaXRle1wiIFwifVxyXG4gICAgICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBTcGVha2VyRGVtb2dyYXBoaWNzID0gKHtmaXJzdCwgbGFzdCwgYmlvLCBjb21wYW55LCB0d2l0dGVySGFuZGxlLCBmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTcGVha2VyRmF2b3JpdGVcclxuICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jpb31cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsIGQtZmxleCBmbGV4LXJvdyBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Db21wYW55PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pntjb21wYW55fTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Ud2l0dGVyPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt0d2l0dGVySGFuZGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBTcGVha2VyID0gKHtzcGVha2VyLCBzaG93U2Vzc2lvbnMsIG9uRmF2b3JpdGVUb2dnbGV9KSA9PiB7XHJcbiAgICBjb25zdCB7aWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9uc30gPSBzcGVha2VyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1oZWlnaHQgcC00IG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9Lz5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VyRGVtb2dyYXBoaWNzIHsuLi5zcGVha2VyfSBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfS8+XHJcbiAgICAgICAgICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID8gPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30vPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiU3BlYWtlckltYWdlIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJpbWciLCJzcmMiLCJ3aWR0aCIsImFsdCIsIlNwZWFrZXJGYXZvcml0ZSIsImZhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZSIsImRvbmVDYWxsYmFjayIsInNldEluVHJhbnNpdGlvbiIsImluVHJhbnNpdGlvbiIsIm9uQ2xpY2siLCJpIiwiU3BlYWtlckRlbW9ncmFwaGljcyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiaDMiLCJwIiwiaDUiLCJoNiIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});