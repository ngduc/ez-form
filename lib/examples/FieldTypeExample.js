"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var Yup = require("yup");
var Utils_1 = require("../Utils");
var Utils_2 = require("../Utils");
var EzFormContainer_1 = require("../EzFormContainer");
var EzForm_1 = require("../EzForm");
var EzField_1 = require("../EzField");
var EzButton_1 = require("../EzButton");
var schema = Yup.object().shape({});
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSubmit = function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            setTimeout(function () {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                Utils_2.log('onSubmit')(values);
            }, 800);
            setSubmitting(true);
        };
        _this.renderForm = function (props) {
            return (React.createElement(EzForm_1["default"], { use: "spectre" },
                React.createElement(EzField_1["default"], null, "Text Field | text"),
                React.createElement(EzField_1["default"], { password: true }, "Password | password"),
                React.createElement(EzField_1["default"], { textarea: true }, "Textarea | textarea"),
                React.createElement(EzField_1["default"], { select: true, options: Utils_2.animals }, "Select | select"),
                React.createElement(EzField_1["default"], { radios: true, options: Utils_2.genders }, "Radios | radio"),
                React.createElement(EzField_1["default"], { checkboxes: true, options: Utils_2.roles }, "Checkboxes | checkboxes"),
                React.createElement(EzField_1["default"], { number: true }, "Number | number"),
                React.createElement(EzField_1["default"], { date: true }, "Date | date"),
                React.createElement(EzField_1["default"], { time: true }, "Time | time"),
                React.createElement(EzField_1["default"], { file: true }, "File Upload | file1"),
                React.createElement(EzField_1["default"], { file: true, withPreview: true }, "File Upload (with Preview) | file2"),
                React.createElement(EzField_1["default"], { range: true }, "Range | range"),
                React.createElement(EzButton_1["default"], { type: "submit" }),
                React.createElement(EzButton_1["default"], { gap: 10 }, "Button"),
                React.createElement(Utils_1.DisplayFormState, __assign({}, props))));
        };
        return _this;
    }
    default_1.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("strong", null, "Examples: All Field Types"),
            React.createElement(EzFormContainer_1["default"], { initialValues: { password: 'password', number: 3.14 }, validationSchema: schema, onSubmit: this.onSubmit, render: this.renderForm })));
    };
    return default_1;
}(React.Component));
exports["default"] = default_1;
