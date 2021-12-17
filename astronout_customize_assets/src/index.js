import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { astronout_customize } from "../../declarations/astronout_customize";

document.querySelector("form").addEventListener("submit", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
    var button, name, greeting;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            button = e.target.querySelector("button");
            name = document.getElementById("name").value.toString();


            button.setAttribute("disabled", true);

            // Interact with foo actor, calling the greet method
            _context.next = 6;
            return astronout_customize.greet(name);

          case 6:
            greeting = _context.sent;


            button.removeAttribute("disabled");

            document.getElementById("greeting").innerText = greeting;

            return _context.abrupt("return", false);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());