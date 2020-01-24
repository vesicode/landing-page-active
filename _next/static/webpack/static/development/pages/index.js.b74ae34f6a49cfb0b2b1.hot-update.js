webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/header.jsx":
/*!*******************************!*\
  !*** ./components/header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/tailwind.css */ "./public/css/tailwind.css");
/* harmony import */ var _public_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _menu_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-link */ "./components/menu-link.jsx");
/* harmony import */ var _menu_link_children__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-link-children */ "./components/menu-link-children.jsx");
var _jsxFileName = "C:\\Active\\landing-page-next\\components\\header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var menuItems = function menuItems(activeRoute) {
  return [//  { page: "Ordering", route: "/ordering" },
  {
    page: "Products",
    route: "/products",
    children: [{
      prefix: "Products",
      page: "Cancer panel",
      route: "/products/cancer-panel"
    }]
  }, {
    page: "Technology",
    route: "/technology"
  }, {
    page: "News",
    route: "/news"
  }, {
    page: "About Us",
    route: "/about",
    children: [{
      prefix: "About Us",
      page: "Contact Us",
      route: "/about/contact"
    }, {
      prefix: "About Us",
      page: "Find Us",
      route: "/about/find-us"
    }, {
      prefix: "About Us",
      page: "Our Vision",
      route: "/about/vision"
    }]
  }].map(function (itm) {
    return activatePage(activeRoute, itm);
  }).map(linkUp);
};

var activatePage = function activatePage(activeRoute, menuItem) {
  if (typeof menuItem.children !== "undefined") {
    menuItem.children = menuItem.children.map(function (itm) {
      return activatePage(activeRoute, itm);
    });
  }

  menuItem.active = menuItem.route === activeRoute;
  return menuItem;
};

var linkUp = function linkUp(menuItem) {
  return typeof menuItem.children !== "undefined" ? __jsx(_menu_link_children__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: menuItem.route,
    menuItem: menuItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }) : __jsx(_menu_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: menuItem.route,
    menuItem: menuItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Boolean(false)),
      showMenu = _useState[0],
      setShowMenu = _useState[1];

  var menu = menuItems(router.pathname);
  return __jsx("div", {
    className: "w-full lg:max-w-5xl lg:container lg:mx-auto font-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("nav", {
    className: "flex items-center justify-between flex-wrap lg:flex-no-wrap p-6 lg:p-0 lg:pt-6 text-vesicode-grey uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "flex-shrink-0 mr-6 pb-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("a", {
    className: "fill-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    className: "pb-2",
    src: "/img/vesicode-logo.svg",
    alt: "Vesicode AB",
    title: "Vesicode AB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })))), __jsx("div", {
    className: "block lg:hidden",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setShowMenu(new Boolean(!showMenu.valueOf()));
    },
    className: "flex items-center px-3 py-2 border rounded-sm text-vesicode-green-light border-vesicode-green-light hover:text-white hover:border-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("svg", {
    className: "fill-current h-5 w-5",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Menu"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })))), __jsx("div", {
    className: "w-full block flex-grow lg:flex lg:flex-row lg:flex-grow-0 lg:items-center lg:w-auto lg:visible " + (showMenu.valueOf() ? "visible" : "hidden"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "lg:flex-grow lg:flex-row lg:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, menu))));
}));

/***/ })

})
//# sourceMappingURL=index.js.b74ae34f6a49cfb0b2b1.hot-update.js.map