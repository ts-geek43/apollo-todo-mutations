"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../styles/TodoDisplay.css");
var TodoDisplaySub_1 = require("./TodoDisplaySub");
var graphql_1 = require("../generated/graphql");
var useTodo_1 = require("../hooks/useTodo");
var TodoDisplay = function () {
    var _a;
    var getTodoProps = useTodo_1.useTodoLoadData();
    var updateTodoRef = react_1.useRef(null);
    var _b = graphql_1.useUpdateTodoMutation(), todoUpdateCodegen = _b[0], todoUpdateCodegenProps = _b[1];
    var _c = react_1.useState(""), updateType = _c[0], setUpdateType = _c[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "todoDisplayBox", ref: updateTodoRef },
            react_1["default"].createElement("div", { className: "todoUpdateStateBox" },
                getTodoProps.loading && react_1["default"].createElement("h3", null, "Updating...."),
                getTodoProps.error && react_1["default"].createElement("h3", null, getTodoProps.error.message)),
            ((_a = getTodoProps.data) === null || _a === void 0 ? void 0 : _a.todos) &&
                getTodoProps.data.todos.map(function (item, i) {
                    return (react_1["default"].createElement("div", { key: "" + i, className: "todoDataBox" },
                        react_1["default"].createElement(TodoDisplaySub_1["default"], { i: i, item: item, handleUpdate: todoUpdateCodegen })));
                }))));
};
exports["default"] = TodoDisplay;
