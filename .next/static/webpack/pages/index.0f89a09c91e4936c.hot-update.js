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

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeContext\": function() { return /* binding */ ThemeContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/components/Header.js\");\n/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ \"./src/components/Speakers.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar Layout = function(param) {\n    var startingTheme = param.startingTheme, children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(startingTheme), theme = ref[0], setTheme = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n        value: {\n            setTheme: setTheme,\n            theme: theme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: theme === \"light\" ? \"container-fluid light\" : \"container-fluid dark\",\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Layout.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\ReactApp\\\\designing-components\\\\src\\\\components\\\\Layout.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, _this));\n};\n_s(Layout, \"nKddrJbobq4ddKYRO5PfilONORY=\");\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDdkI7QUFDSTs7O0FBRTFCLEdBQUssQ0FBQ0ssWUFBWSxpQkFBR0osb0RBQWE7QUFFekMsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFBUSxRQUF1QixDQUFDO1FBQTlCQyxhQUFhLFNBQWJBLGFBQWEsRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUVwQyxHQUFLLENBQXFCTixHQUF1QixHQUF2QkEsK0NBQVEsQ0FBQ0ssYUFBYSxHQUF6Q0UsS0FBSyxHQUFjUCxHQUF1QixLQUFuQ1EsUUFBUSxHQUFJUixHQUF1QjtJQUVqRCxNQUFNLDZFQUNERyxZQUFZLENBQUNNLFFBQVE7UUFBQ0MsS0FBSyxFQUN4QixDQUFDRjtZQUFBQSxRQUFRLEVBQVJBLFFBQVE7WUFBRUQsS0FBSyxFQUFMQSxLQUFLO1FBQUEsQ0FBQzs4RkFFaEJJLENBQUc7WUFBQ0MsU0FBUyxFQUFFTCxLQUFLLEtBQUssQ0FBTyxTQUFHLENBQXVCLHlCQUFHLENBQXNCO3NCQUMvRUQsUUFBUTs7Ozs7Ozs7Ozs7QUFJekIsQ0FBQztHQWJLRixNQUFNO0tBQU5BLE1BQU07QUFlWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC5qcz9mZTZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gXCIuL1NwZWFrZXJzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtzdGFydGluZ1RoZW1lLCBjaGlsZHJlbn0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHN0YXJ0aW5nVGhlbWUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17XHJcbiAgICAgICAgICAgIHtzZXRUaGVtZSwgdGhlbWV9XHJcbiAgICAgICAgfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcImNvbnRhaW5lci1mbHVpZCBsaWdodFwiIDogXCJjb250YWluZXItZmx1aWQgZGFya1wifT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiSGVhZGVyIiwiU3BlYWtlcnMiLCJUaGVtZUNvbnRleHQiLCJMYXlvdXQiLCJzdGFydGluZ1RoZW1lIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout.js\n");

/***/ })

});