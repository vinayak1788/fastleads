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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  background-color: #f5f6fa;\\r\\n}\\r\\n\\r\\n.navHeader {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 100;\\r\\n}\\r\\n\\r\\n.main-layout {\\r\\n  display: flex;\\r\\n  padding-top: 60px; /* Adjust based on navbar height */\\r\\n}\\r\\n\\r\\n.sidebarele {\\r\\n  height: calc(100vh - 60px);\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  \\r\\n  transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n/* When sidebar is closed */\\r\\n.main-layout .dashboard-content {\\r\\n  margin-left: 80px; /* Collapsed sidebar width */\\r\\n  width: calc(100% - 80px);\\r\\n  transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n/* When sidebar is open */\\r\\n.main-layout .dashboard-content.sidebar-open {\\r\\n  margin-left: 250px; /* Expanded sidebar width */\\r\\n  width: calc(100% - 250px);\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .main-layout .dashboard-content {\\r\\n    margin-left: 0;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .main-layout .dashboard-content.sidebar-open {\\r\\n    margin-left: 0;\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,WAAW;EACX,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iBAAiB,EAAE,kCAAkC;AACvD;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,OAAO;;EAEP,yBAAyB;AAC3B;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB,EAAE,4BAA4B;EAC/C,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA,yBAAyB;AACzB;EACE,kBAAkB,EAAE,2BAA2B;EAC/C,yBAAyB;AAC3B;;AAEA;EACE;IACE,cAAc;IACd,WAAW;EACb;;EAEA;IACE,cAAc;IACd,WAAW;EACb;AACF\",\"sourcesContent\":[\".container {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  background-color: #f5f6fa;\\r\\n}\\r\\n\\r\\n.navHeader {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 100;\\r\\n}\\r\\n\\r\\n.main-layout {\\r\\n  display: flex;\\r\\n  padding-top: 60px; /* Adjust based on navbar height */\\r\\n}\\r\\n\\r\\n.sidebarele {\\r\\n  height: calc(100vh - 60px);\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  \\r\\n  transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n/* When sidebar is closed */\\r\\n.main-layout .dashboard-content {\\r\\n  margin-left: 80px; /* Collapsed sidebar width */\\r\\n  width: calc(100% - 80px);\\r\\n  transition: all 0.3s ease;\\r\\n}\\r\\n\\r\\n/* When sidebar is open */\\r\\n.main-layout .dashboard-content.sidebar-open {\\r\\n  margin-left: 250px; /* Expanded sidebar width */\\r\\n  width: calc(100% - 250px);\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .main-layout .dashboard-content {\\r\\n    margin-left: 0;\\r\\n    width: 100%;\\r\\n  }\\r\\n  \\r\\n  .main-layout .dashboard-content.sidebar-open {\\r\\n    margin-left: 0;\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLm9uZU9mWzE0XS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxzREFBc0Qsa0JBQWtCLHdCQUF3QixnQ0FBZ0MsS0FBSyxvQkFBb0Isc0JBQXNCLGFBQWEsa0JBQWtCLG1CQUFtQixLQUFLLHNCQUFzQixvQkFBb0IseUJBQXlCLHdDQUF3QyxxQkFBcUIsaUNBQWlDLHNCQUFzQixjQUFjLHNDQUFzQyxLQUFLLHlFQUF5RSx5QkFBeUIsNERBQTRELGdDQUFnQyxLQUFLLG9GQUFvRiwwQkFBMEIsNERBQTRELEtBQUssbUNBQW1DLHVDQUF1Qyx1QkFBdUIsb0JBQW9CLE9BQU8sMERBQTBELHVCQUF1QixvQkFBb0IsT0FBTyxLQUFLLFdBQVcsdUZBQXVGLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLHdCQUF3QixPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSx3QkFBd0IsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUsscUNBQXFDLGtCQUFrQix3QkFBd0IsZ0NBQWdDLEtBQUssb0JBQW9CLHNCQUFzQixhQUFhLGtCQUFrQixtQkFBbUIsS0FBSyxzQkFBc0Isb0JBQW9CLHlCQUF5Qix3Q0FBd0MscUJBQXFCLGlDQUFpQyxzQkFBc0IsY0FBYyxzQ0FBc0MsS0FBSyx5RUFBeUUseUJBQXlCLDREQUE0RCxnQ0FBZ0MsS0FBSyxvRkFBb0YsMEJBQTBCLDREQUE0RCxLQUFLLG1DQUFtQyx1Q0FBdUMsdUJBQXVCLG9CQUFvQixPQUFPLDBEQUEwRCx1QkFBdUIsb0JBQW9CLE9BQU8sS0FBSyx1QkFBdUI7QUFDbG1GO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz80N2RmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2SGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1sYXlvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctdG9wOiA2MHB4OyAvKiBBZGp1c3QgYmFzZWQgb24gbmF2YmFyIGhlaWdodCAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcmVsZSB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi8qIFdoZW4gc2lkZWJhciBpcyBjbG9zZWQgKi9cXHJcXG4ubWFpbi1sYXlvdXQgLmRhc2hib2FyZC1jb250ZW50IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4MHB4OyAvKiBDb2xsYXBzZWQgc2lkZWJhciB3aWR0aCAqL1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogV2hlbiBzaWRlYmFyIGlzIG9wZW4gKi9cXHJcXG4ubWFpbi1sYXlvdXQgLmRhc2hib2FyZC1jb250ZW50LnNpZGViYXItb3BlbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjUwcHg7IC8qIEV4cGFuZGVkIHNpZGViYXIgd2lkdGggKi9cXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4tbGF5b3V0IC5kYXNoYm9hcmQtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1haW4tbGF5b3V0IC5kYXNoYm9hcmQtY29udGVudC5zaWRlYmFyLW9wZW4ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCLEVBQUUsa0NBQWtDO0FBQ3ZEOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixPQUFPOztFQUVQLHlCQUF5QjtBQUMzQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUIsRUFBRSw0QkFBNEI7RUFDL0Msd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxrQkFBa0IsRUFBRSwyQkFBMkI7RUFDL0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XFxyXFxufVxcclxcblxcclxcbi5uYXZIZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxheW91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIEFkanVzdCBiYXNlZCBvbiBuYXZiYXIgaGVpZ2h0ICovXFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyZWxlIHtcXHJcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIFxcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogV2hlbiBzaWRlYmFyIGlzIGNsb3NlZCAqL1xcclxcbi5tYWluLWxheW91dCAuZGFzaGJvYXJkLWNvbnRlbnQge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7IC8qIENvbGxhcHNlZCBzaWRlYmFyIHdpZHRoICovXFxyXFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBXaGVuIHNpZGViYXIgaXMgb3BlbiAqL1xcclxcbi5tYWluLWxheW91dCAuZGFzaGJvYXJkLWNvbnRlbnQuc2lkZWJhci1vcGVuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNTBweDsgLyogRXhwYW5kZWQgc2lkZWJhciB3aWR0aCAqL1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbi1sYXlvdXQgLmRhc2hib2FyZC1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubWFpbi1sYXlvdXQgLmRhc2hib2FyZC1jb250ZW50LnNpZGViYXItb3BlbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[2]!./src/styles/globals.css\n"));

/***/ })

});