"use strict";
exports.__esModule = true;
exports.useTodoLoadData = void 0;
var graphql_1 = require("../generated/graphql");
exports.useTodoLoadData = function () {
    var todoProps = graphql_1.useGetTodoQuery();
    return todoProps;
};
