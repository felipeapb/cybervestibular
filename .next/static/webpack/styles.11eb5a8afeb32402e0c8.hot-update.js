webpackHotUpdate("styles",{

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"logo":"_3rAg6AIwaAMIhQtHncqlRG","topo":"_12qT2Fx8cs0DVRA1YsqCyr","slide":"_3QFUROdtl2dYpwf7t75Df5","imgSlide":"_1CdF7xg3NymdUWtM6Fa-U-","textSlide":"_1Qxk_Ykw-y_Mt9VOgRLlJO","h2_destaque":"_2Gptmgtn2wLYeOtW2Lao4_","porEstados":"_3rvdS9acwMzO9bhLgsqlIZ","grupoEstados":"_24fLHaf_HqV34hf1MTjHvv","caixaestado":"_38Mi0QRligVEVhA3L1VL3V","destaques_cartao":"_1Gz35NOjSPtDNdbCtxhYqc","menucaixa":"_2-e20iTUom9lk37uPhzrTs","menusuperior":"_13MX1e2MiwZU_LoOc7k5c6","body_destaque":"_1kd5zA7945xMb5WxD3Mm0J","itemProva":"_1HNpHt0VuTHxsfYuwqp8HI"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1555892105100");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.11eb5a8afeb32402e0c8.hot-update.js.map