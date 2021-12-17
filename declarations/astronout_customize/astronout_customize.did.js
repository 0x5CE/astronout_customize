export var idlFactory = function idlFactory(_ref) {
  var IDL = _ref.IDL;

  return IDL.Service({ 'greet': IDL.Func([IDL.Text], [IDL.Text], ['query']) });
};
export var init = function init(_ref2) {
  var IDL = _ref2.IDL;
  return [];
};