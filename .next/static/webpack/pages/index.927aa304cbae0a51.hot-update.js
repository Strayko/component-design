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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Session = function(param) {\n    var title = param.title, room = param.room;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"session w-100\",\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 6,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this));\n};\n_c = Session;\nvar Sessions = function(param) {\n    var sessions = param.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sessionBox card h-250\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = Sessions;\nvar SpeakerImage = function(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, _this));\n};\n_c2 = SpeakerImage;\nvar SpeakerFavorite = function(param) {\n    var favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    var doneCallback = function doneCallback() {\n        setInTransition(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inTransition = ref[0], setInTransition = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"action padB1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            onClick: function onClick() {\n                // setInTransition(true);\n                return onFavoriteToggle(doneCallback);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: favorite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, _this),\n                \" \",\n                \"Favorite\",\n                \" \",\n                inTransition ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"fas fa-circle-notch fa-spin\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, _this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this));\n};\n_s(SpeakerFavorite, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = SpeakerFavorite;\nvar SpeakerDemographics = function(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavoriteToggle = param.onFavoriteToggle;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"speaker-info\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFavorite, {\n                favorite: favorite,\n                onFavoriteToggle: onFavoriteToggle\n            }, void 0, false, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-description\",\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"social d-flex flex-row mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"company\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: company\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"twitter\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        children: twitterHandle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, _this));\n};\n_c4 = SpeakerDemographics;\nvar Speaker = function(param) {\n    var speaker = param.speaker, showSessions = param.showSessions, onFavoriteToggle = param.onFavoriteToggle;\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card card-height p-4 mt-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                    id: id,\n                    first: first,\n                    last: last\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 90,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerDemographics, _objectSpread({}, speaker, {\n                    onFavoriteToggle: onFavoriteToggle\n                }), void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, _this),\n                showSessions === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                    sessions: sessions\n                }, void 0, false, {\n                    fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 92,\n                    columnNumber: 42\n                }, _this) : null\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 89,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Speaker.js\",\n        lineNumber: 88,\n        columnNumber: 9\n    }, _this));\n};\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavorite\");\n$RefreshReg$(_c4, \"SpeakerDemographics\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFQUFFO29CQUFFQyxLQUFLLEVBQUVBLEtBQUs7b0JBQUVDLElBQUksRUFBRUEsSUFBSTs7Ozs7OzRGQUM3Q2EsbUJBQW1CLG9CQUFLUyxPQUFPO29CQUFFZixnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7Ozs7Z0JBQ25FZ0IsWUFBWSxLQUFLLElBQUksK0VBQUk3QixRQUFRO29CQUFDQyxRQUFRLEVBQUVBLFFBQVE7Ozs7OzRCQUFNLElBQUk7Ozs7Ozs7Ozs7OztBQUkvRSxDQUFDO01BWEswQixPQUFPO0FBYWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2VyLmpzPzI5MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTZXNzaW9uID0gKHt0aXRsZSwgcm9vbX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBTZXNzaW9ucyA9ICh7c2Vzc2lvbnN9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgIDxTZXNzaW9uIHsuLi5zZXNzaW9uc1swXX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFNwZWFrZXJJbWFnZSA9ICh7aWQsIGZpcnN0LCBsYXN0fSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgU3BlYWtlckZhdm9yaXRlID0gKHtmYXZvcml0ZSwgb25GYXZvcml0ZVRvZ2dsZX0pID0+IHtcclxuICAgIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uIHBhZEIxXCI+XHJcbiAgICAgICAgPHNwYW4gb25DbGljaz17ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbkZhdm9yaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIn0vPntcIiBcIn1cclxuICAgICAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAgICAgIHtpblRyYW5zaXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLW5vdGNoIGZhLXNwaW5cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFNwZWFrZXJEZW1vZ3JhcGhpY3MgPSAoe2ZpcnN0LCBsYXN0LCBiaW8sIGNvbXBhbnksIHR3aXR0ZXJIYW5kbGUsIGZhdm9yaXRlLCBvbkZhdm9yaXRlVG9nZ2xlfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaXJzdH0ge2xhc3R9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNwZWFrZXJGYXZvcml0ZVxyXG4gICAgICAgICAgICAgICAgZmF2b3JpdGU9e2Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17b25GYXZvcml0ZVRvZ2dsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7YmlvfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IFNwZWFrZXIgPSAoe3NwZWFrZXIsIHNob3dTZXNzaW9ucywgb25GYXZvcml0ZVRvZ2dsZX0pID0+IHtcclxuICAgIGNvbnN0IHtpZCwgZmlyc3QsIGxhc3QsIHNlc3Npb25zfSA9IHNwZWFrZXI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJJbWFnZSBpZD17aWR9IGZpcnN0PXtmaXJzdH0gbGFzdD17bGFzdH0vPlxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9Lz5cclxuICAgICAgICAgICAgICAgIHtzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfS8+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm9yaXRlIiwiZmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiZG9uZUNhbGxiYWNrIiwic2V0SW5UcmFuc2l0aW9uIiwiaW5UcmFuc2l0aW9uIiwib25DbGljayIsImkiLCJTcGVha2VyRGVtb2dyYXBoaWNzIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJoMyIsInAiLCJoNSIsImg2IiwiU3BlYWtlciIsInNwZWFrZXIiLCJzaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});