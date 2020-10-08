"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openDBSaga = openDBSaga;
exports.closeDBSaga = closeDBSaga;

var _reactNativeSqliteStorage = _interopRequireDefault(require("react-native-sqlite-storage"));

var _effects = require("redux-saga/effects");

var _actionTypes = require("../actions/sql-actions/action-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(openDBSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(closeDBSaga);

function openDBSaga() {
  var _ref, db, database;

  return regeneratorRuntime.wrap(function openDBSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.select)(function (state) {
            return state.sqlReducer.db;
          });

        case 3:
          _ref = _context.sent;
          db = _ref.db;

          if (db) {
            _context.next = 9;
            break;
          }

          _context.next = 8;
          return (0, _effects.call)(_reactNativeSqliteStorage["default"].openDatabase, {
            name: "sqldb.db",
            createFromLocation: "~sqldb.db"
          });

        case 8:
          database = _context.sent;

        case 9:
          _context.next = 11;
          return (0, _effects.put)({
            type: _actionTypes.SET_DB_INSTANCE,
            payload: {
              db: db
            }
          });

        case 11:
          _context.next = 18;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);

          if (_context.t0) {
            console.log(_context.t0);
          }

          _context.next = 18;
          return (0, _effects.put)({
            type: _actionTypes.DB_ERROR,
            payload: {
              error: _context.t0
            }
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 13]]);
}

function closeDBSaga() {
  var _ref2, db;

  return regeneratorRuntime.wrap(function closeDBSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.select)(function (state) {
            return state.sqlReducer.db;
          });

        case 3:
          _ref2 = _context2.sent;
          db = _ref2.db;

          if (!db) {
            _context2.next = 10;
            break;
          }

          _context2.next = 8;
          return (0, _effects.call)(db.close);

        case 8:
          _context2.next = 10;
          return (0, _effects.put)({
            type: _actionTypes.CLEAR_DB_INSTANCE,
            payload: {}
          });

        case 10:
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 16;
          return (0, _effects.put)({
            type: _actionTypes.DB_ERROR,
            payload: {
              error: _context2.t0
            }
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 12]]);
}