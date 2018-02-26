'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UserAccount = require('../../components/User/UserAccount');

var _UserAccount2 = _interopRequireDefault(_UserAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by supun on 24/02/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by supun on 23/02/18.
 */


var UserAccountView = function (_Component) {
    _inherits(UserAccountView, _Component);

    function UserAccountView(props) {
        _classCallCheck(this, UserAccountView);

        return _possibleConstructorReturn(this, (UserAccountView.__proto__ || Object.getPrototypeOf(UserAccountView)).call(this, props));
    }

    _createClass(UserAccountView, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_UserAccount2.default, this.props.account);
        }
    }]);

    return UserAccountView;
}(_react.Component);

UserAccountView.propTypes = {
    account: _propTypes2.default.object.isRequired
};

exports.default = UserAccountView;
//# sourceMappingURL=UserAccountView.js.map