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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Container */\\r\\n.container {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  background-color: #f5f6fa;\\r\\n  margin: 0; /* Prevent margin around the container */\\r\\n}\\r\\n\\r\\n/* Navbar */\\r\\n.navHeader {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 100; /* Keep navbar on top */\\r\\n}\\r\\n\\r\\n/* Main Layout */\\r\\n.main-layout {\\r\\n  display: flex;\\r\\n  padding-top: 60px; /* Adjust this value based on the height of the navbar */\\r\\n  margin-top: 0; /* Prevent any margin from creating spacing */\\r\\n  padding-left: 250px; /* Add space for the sidebar */\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* Sidebar */\\r\\n.sidebarele {\\r\\n  height: calc(100vh - 60px); /* Adjust height to account for the navbar */\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  z-index: 50; /* Ensure sidebar stays behind the navbar */\\r\\n  transition: all 0.3s ease; /* Smooth transition when toggling the sidebar */\\r\\n  width: 250px; /* Set the fixed width of the sidebar */\\r\\n  background-color: #333; /* You can adjust the background color */\\r\\n}\\r\\n\\r\\n/* Dashboard Content */\\r\\n.dashboard-content {\\r\\n  transition: all 0.3s ease;\\r\\n  z-index: 10; /* Ensure content stays in front of the sidebar */\\r\\n  width: calc(100% - 250px); /* Make the content take up the remaining space */\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n/* When sidebar is closed */\\r\\n.main-layout .dashboard-content {\\r\\n  width: 100%; /* Full width without sidebar */\\r\\n}\\r\\n\\r\\n/* When sidebar is open */\\r\\n.main-layout .dashboard-content.sidebar-open {\\r\\n  margin-left: 50px; /* Adjusted width for expanded sidebar */\\r\\n  width: calc(100% - 250px); /* Adjust width of content when sidebar is open */\\r\\n}\\r\\n\\r\\n/* Media Query for mobile devices */\\r\\n@media (max-width: 768px) {\\r\\n  .main-layout {\\r\\n    flex-direction: column; /* Stack sidebar and content vertically */\\r\\n    padding-left: 0;\\r\\n  }\\r\\n\\r\\n  .sidebarele {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    height: auto; /* Adjust height for mobile */\\r\\n  }\\r\\n\\r\\n  .dashboard-content {\\r\\n    margin-left: 0;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .main-layout .dashboard-content.sidebar-open {\\r\\n    width: 100%;\\r\\n    margin-left: 0;\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,cAAc;AACd;EACE,WAAW;EACX,iBAAiB;EACjB,yBAAyB;EACzB,SAAS,EAAE,wCAAwC;AACrD;;AAEA,WAAW;AACX;EACE,eAAe;EACf,MAAM;EACN,WAAW;EACX,YAAY,EAAE,uBAAuB;AACvC;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,iBAAiB,EAAE,wDAAwD;EAC3E,aAAa,EAAE,6CAA6C;EAC5D,mBAAmB,EAAE,8BAA8B;EACnD,WAAW;AACb;;AAEA,YAAY;AACZ;EACE,0BAA0B,EAAE,4CAA4C;EACxE,eAAe;EACf,OAAO;EACP,WAAW,EAAE,2CAA2C;EACxD,yBAAyB,EAAE,gDAAgD;EAC3E,YAAY,EAAE,uCAAuC;EACrD,sBAAsB,EAAE,wCAAwC;AAClE;;AAEA,sBAAsB;AACtB;EACE,yBAAyB;EACzB,WAAW,EAAE,iDAAiD;EAC9D,yBAAyB,EAAE,iDAAiD;EAC5E,sBAAsB;AACxB;;AAEA,2BAA2B;AAC3B;EACE,WAAW,EAAE,+BAA+B;AAC9C;;AAEA,yBAAyB;AACzB;EACE,iBAAiB,EAAE,wCAAwC;EAC3D,yBAAyB,EAAE,iDAAiD;AAC9E;;AAEA,mCAAmC;AACnC;EACE;IACE,sBAAsB,EAAE,yCAAyC;IACjE,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY,EAAE,6BAA6B;EAC7C;;EAEA;IACE,cAAc;IACd,WAAW;EACb;;EAEA;IACE,WAAW;IACX,cAAc;EAChB;AACF\",\"sourcesContent\":[\"/* Container */\\r\\n.container {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  background-color: #f5f6fa;\\r\\n  margin: 0; /* Prevent margin around the container */\\r\\n}\\r\\n\\r\\n/* Navbar */\\r\\n.navHeader {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  z-index: 100; /* Keep navbar on top */\\r\\n}\\r\\n\\r\\n/* Main Layout */\\r\\n.main-layout {\\r\\n  display: flex;\\r\\n  padding-top: 60px; /* Adjust this value based on the height of the navbar */\\r\\n  margin-top: 0; /* Prevent any margin from creating spacing */\\r\\n  padding-left: 250px; /* Add space for the sidebar */\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* Sidebar */\\r\\n.sidebarele {\\r\\n  height: calc(100vh - 60px); /* Adjust height to account for the navbar */\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  z-index: 50; /* Ensure sidebar stays behind the navbar */\\r\\n  transition: all 0.3s ease; /* Smooth transition when toggling the sidebar */\\r\\n  width: 250px; /* Set the fixed width of the sidebar */\\r\\n  background-color: #333; /* You can adjust the background color */\\r\\n}\\r\\n\\r\\n/* Dashboard Content */\\r\\n.dashboard-content {\\r\\n  transition: all 0.3s ease;\\r\\n  z-index: 10; /* Ensure content stays in front of the sidebar */\\r\\n  width: calc(100% - 250px); /* Make the content take up the remaining space */\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n/* When sidebar is closed */\\r\\n.main-layout .dashboard-content {\\r\\n  width: 100%; /* Full width without sidebar */\\r\\n}\\r\\n\\r\\n/* When sidebar is open */\\r\\n.main-layout .dashboard-content.sidebar-open {\\r\\n  margin-left: 50px; /* Adjusted width for expanded sidebar */\\r\\n  width: calc(100% - 250px); /* Adjust width of content when sidebar is open */\\r\\n}\\r\\n\\r\\n/* Media Query for mobile devices */\\r\\n@media (max-width: 768px) {\\r\\n  .main-layout {\\r\\n    flex-direction: column; /* Stack sidebar and content vertically */\\r\\n    padding-left: 0;\\r\\n  }\\r\\n\\r\\n  .sidebarele {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    height: auto; /* Adjust height for mobile */\\r\\n  }\\r\\n\\r\\n  .dashboard-content {\\r\\n    margin-left: 0;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .main-layout .dashboard-content.sidebar-open {\\r\\n    width: 100%;\\r\\n    margin-left: 0;\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s1XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzVdLm9uZU9mWzE0XS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx5RUFBeUUsa0JBQWtCLHdCQUF3QixnQ0FBZ0MsaUJBQWlCLDhDQUE4QyxvQ0FBb0Msc0JBQXNCLGFBQWEsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMkNBQTJDLG9CQUFvQix5QkFBeUIsOEVBQThFLHlFQUF5RSxpREFBaUQsS0FBSyxzQ0FBc0Msa0NBQWtDLG1FQUFtRSxjQUFjLG1CQUFtQiw2RUFBNkUscUVBQXFFLHNFQUFzRSw4Q0FBOEMsdURBQXVELGdDQUFnQyxtQkFBbUIsbUZBQW1GLCtFQUErRSxLQUFLLHlFQUF5RSxtQkFBbUIscUNBQXFDLG9GQUFvRix5QkFBeUIsMEVBQTBFLHVEQUF1RCwyRUFBMkUsb0JBQW9CLGdDQUFnQyxrRUFBa0UsT0FBTyx1QkFBdUIsMkJBQTJCLG9CQUFvQixzQkFBc0IscUNBQXFDLDhCQUE4Qix1QkFBdUIsb0JBQW9CLE9BQU8sd0RBQXdELG9CQUFvQix1QkFBdUIsT0FBTyxLQUFLLFdBQVcsNEZBQTRGLEtBQUssVUFBVSxZQUFZLGFBQWEsdUJBQXVCLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLHNCQUFzQixPQUFPLFlBQVksTUFBTSxVQUFVLHdCQUF3Qix1QkFBdUIseUJBQXlCLFdBQVcsTUFBTSxVQUFVLEtBQUssd0JBQXdCLFdBQVcsVUFBVSxzQkFBc0IseUJBQXlCLHVCQUF1Qix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sWUFBWSx1QkFBdUIseUJBQXlCLGFBQWEsT0FBTyxZQUFZLE1BQU0sc0JBQXNCLE9BQU8sWUFBWSxNQUFNLHdCQUF3Qix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sS0FBSyx3QkFBd0IsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLHNCQUFzQixPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSx3REFBd0Qsa0JBQWtCLHdCQUF3QixnQ0FBZ0MsaUJBQWlCLDhDQUE4QyxvQ0FBb0Msc0JBQXNCLGFBQWEsa0JBQWtCLG9CQUFvQiw2QkFBNkIsMkNBQTJDLG9CQUFvQix5QkFBeUIsOEVBQThFLHlFQUF5RSxpREFBaUQsS0FBSyxzQ0FBc0Msa0NBQWtDLG1FQUFtRSxjQUFjLG1CQUFtQiw2RUFBNkUscUVBQXFFLHNFQUFzRSw4Q0FBOEMsdURBQXVELGdDQUFnQyxtQkFBbUIsbUZBQW1GLCtFQUErRSxLQUFLLHlFQUF5RSxtQkFBbUIscUNBQXFDLG9GQUFvRix5QkFBeUIsMEVBQTBFLHVEQUF1RCwyRUFBMkUsb0JBQW9CLGdDQUFnQyxrRUFBa0UsT0FBTyx1QkFBdUIsMkJBQTJCLG9CQUFvQixzQkFBc0IscUNBQXFDLDhCQUE4Qix1QkFBdUIsb0JBQW9CLE9BQU8sd0RBQXdELG9CQUFvQix1QkFBdUIsT0FBTyxLQUFLLHVCQUF1QjtBQUM3eEs7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzPzQ3ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbnRhaW5lciAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XFxyXFxuICBtYXJnaW46IDA7IC8qIFByZXZlbnQgbWFyZ2luIGFyb3VuZCB0aGUgY29udGFpbmVyICovXFxyXFxufVxcclxcblxcclxcbi8qIE5hdmJhciAqL1xcclxcbi5uYXZIZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxMDA7IC8qIEtlZXAgbmF2YmFyIG9uIHRvcCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIExheW91dCAqL1xcclxcbi5tYWluLWxheW91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIEFkanVzdCB0aGlzIHZhbHVlIGJhc2VkIG9uIHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhciAqL1xcclxcbiAgbWFyZ2luLXRvcDogMDsgLyogUHJldmVudCBhbnkgbWFyZ2luIGZyb20gY3JlYXRpbmcgc3BhY2luZyAqL1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDsgLyogQWRkIHNwYWNlIGZvciB0aGUgc2lkZWJhciAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZGViYXIgKi9cXHJcXG4uc2lkZWJhcmVsZSB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTsgLyogQWRqdXN0IGhlaWdodCB0byBhY2NvdW50IGZvciB0aGUgbmF2YmFyICovXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogNTA7IC8qIEVuc3VyZSBzaWRlYmFyIHN0YXlzIGJlaGluZCB0aGUgbmF2YmFyICovXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiB3aGVuIHRvZ2dsaW5nIHRoZSBzaWRlYmFyICovXFxyXFxuICB3aWR0aDogMjUwcHg7IC8qIFNldCB0aGUgZml4ZWQgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIFlvdSBjYW4gYWRqdXN0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXFxyXFxufVxcclxcblxcclxcbi8qIERhc2hib2FyZCBDb250ZW50ICovXFxyXFxuLmRhc2hib2FyZC1jb250ZW50IHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGNvbnRlbnQgc3RheXMgaW4gZnJvbnQgb2YgdGhlIHNpZGViYXIgKi9cXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7IC8qIE1ha2UgdGhlIGNvbnRlbnQgdGFrZSB1cCB0aGUgcmVtYWluaW5nIHNwYWNlICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBXaGVuIHNpZGViYXIgaXMgY2xvc2VkICovXFxyXFxuLm1haW4tbGF5b3V0IC5kYXNoYm9hcmQtY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCB3aXRob3V0IHNpZGViYXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogV2hlbiBzaWRlYmFyIGlzIG9wZW4gKi9cXHJcXG4ubWFpbi1sYXlvdXQgLmRhc2hib2FyZC1jb250ZW50LnNpZGViYXItb3BlbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDsgLyogQWRqdXN0ZWQgd2lkdGggZm9yIGV4cGFuZGVkIHNpZGViYXIgKi9cXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7IC8qIEFkanVzdCB3aWR0aCBvZiBjb250ZW50IHdoZW4gc2lkZWJhciBpcyBvcGVuICovXFxyXFxufVxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJ5IGZvciBtb2JpbGUgZGV2aWNlcyAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4tbGF5b3V0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgc2lkZWJhciBhbmQgY29udGVudCB2ZXJ0aWNhbGx5ICovXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyZWxlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBBZGp1c3QgaGVpZ2h0IGZvciBtb2JpbGUgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kYXNoYm9hcmQtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWxheW91dCAuZGFzaGJvYXJkLWNvbnRlbnQuc2lkZWJhci1vcGVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixTQUFTLEVBQUUsd0NBQXdDO0FBQ3JEOztBQUVBLFdBQVc7QUFDWDtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVksRUFBRSx1QkFBdUI7QUFDdkM7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQixFQUFFLHdEQUF3RDtFQUMzRSxhQUFhLEVBQUUsNkNBQTZDO0VBQzVELG1CQUFtQixFQUFFLDhCQUE4QjtFQUNuRCxXQUFXO0FBQ2I7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMEJBQTBCLEVBQUUsNENBQTRDO0VBQ3hFLGVBQWU7RUFDZixPQUFPO0VBQ1AsV0FBVyxFQUFFLDJDQUEyQztFQUN4RCx5QkFBeUIsRUFBRSxnREFBZ0Q7RUFDM0UsWUFBWSxFQUFFLHVDQUF1QztFQUNyRCxzQkFBc0IsRUFBRSx3Q0FBd0M7QUFDbEU7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBRSxpREFBaUQ7RUFDOUQseUJBQXlCLEVBQUUsaURBQWlEO0VBQzVFLHNCQUFzQjtBQUN4Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxXQUFXLEVBQUUsK0JBQStCO0FBQzlDOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLGlCQUFpQixFQUFFLHdDQUF3QztFQUMzRCx5QkFBeUIsRUFBRSxpREFBaUQ7QUFDOUU7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0U7SUFDRSxzQkFBc0IsRUFBRSx5Q0FBeUM7SUFDakUsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWSxFQUFFLDZCQUE2QjtFQUM3Qzs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIENvbnRhaW5lciAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XFxyXFxuICBtYXJnaW46IDA7IC8qIFByZXZlbnQgbWFyZ2luIGFyb3VuZCB0aGUgY29udGFpbmVyICovXFxyXFxufVxcclxcblxcclxcbi8qIE5hdmJhciAqL1xcclxcbi5uYXZIZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxMDA7IC8qIEtlZXAgbmF2YmFyIG9uIHRvcCAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWluIExheW91dCAqL1xcclxcbi5tYWluLWxheW91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy10b3A6IDYwcHg7IC8qIEFkanVzdCB0aGlzIHZhbHVlIGJhc2VkIG9uIHRoZSBoZWlnaHQgb2YgdGhlIG5hdmJhciAqL1xcclxcbiAgbWFyZ2luLXRvcDogMDsgLyogUHJldmVudCBhbnkgbWFyZ2luIGZyb20gY3JlYXRpbmcgc3BhY2luZyAqL1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDsgLyogQWRkIHNwYWNlIGZvciB0aGUgc2lkZWJhciAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFNpZGViYXIgKi9cXHJcXG4uc2lkZWJhcmVsZSB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTsgLyogQWRqdXN0IGhlaWdodCB0byBhY2NvdW50IGZvciB0aGUgbmF2YmFyICovXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogNTA7IC8qIEVuc3VyZSBzaWRlYmFyIHN0YXlzIGJlaGluZCB0aGUgbmF2YmFyICovXFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAvKiBTbW9vdGggdHJhbnNpdGlvbiB3aGVuIHRvZ2dsaW5nIHRoZSBzaWRlYmFyICovXFxyXFxuICB3aWR0aDogMjUwcHg7IC8qIFNldCB0aGUgZml4ZWQgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIFlvdSBjYW4gYWRqdXN0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yICovXFxyXFxufVxcclxcblxcclxcbi8qIERhc2hib2FyZCBDb250ZW50ICovXFxyXFxuLmRhc2hib2FyZC1jb250ZW50IHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICB6LWluZGV4OiAxMDsgLyogRW5zdXJlIGNvbnRlbnQgc3RheXMgaW4gZnJvbnQgb2YgdGhlIHNpZGViYXIgKi9cXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7IC8qIE1ha2UgdGhlIGNvbnRlbnQgdGFrZSB1cCB0aGUgcmVtYWluaW5nIHNwYWNlICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBXaGVuIHNpZGViYXIgaXMgY2xvc2VkICovXFxyXFxuLm1haW4tbGF5b3V0IC5kYXNoYm9hcmQtY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCB3aXRob3V0IHNpZGViYXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogV2hlbiBzaWRlYmFyIGlzIG9wZW4gKi9cXHJcXG4ubWFpbi1sYXlvdXQgLmRhc2hib2FyZC1jb250ZW50LnNpZGViYXItb3BlbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogNTBweDsgLyogQWRqdXN0ZWQgd2lkdGggZm9yIGV4cGFuZGVkIHNpZGViYXIgKi9cXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7IC8qIEFkanVzdCB3aWR0aCBvZiBjb250ZW50IHdoZW4gc2lkZWJhciBpcyBvcGVuICovXFxyXFxufVxcclxcblxcclxcbi8qIE1lZGlhIFF1ZXJ5IGZvciBtb2JpbGUgZGV2aWNlcyAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4tbGF5b3V0IHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU3RhY2sgc2lkZWJhciBhbmQgY29udGVudCB2ZXJ0aWNhbGx5ICovXFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zaWRlYmFyZWxlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBBZGp1c3QgaGVpZ2h0IGZvciBtb2JpbGUgKi9cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kYXNoYm9hcmQtY29udGVudCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWxheW91dCAuZGFzaGJvYXJkLWNvbnRlbnQuc2lkZWJhci1vcGVuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[5].oneOf[14].use[2]!./src/styles/globals.css\n"));

/***/ })

});