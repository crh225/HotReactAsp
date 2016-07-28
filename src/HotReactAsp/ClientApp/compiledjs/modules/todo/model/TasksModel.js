"use strict";
(function (ActionType) {
    ActionType[ActionType["ADD_TASK"] = 0] = "ADD_TASK";
    ActionType[ActionType["EDIT_TASK"] = 1] = "EDIT_TASK";
    ActionType[ActionType["REMOVE_TASK"] = 2] = "REMOVE_TASK";
    ActionType[ActionType["MARK_DONE"] = 3] = "MARK_DONE";
    ActionType[ActionType["MARK_NOT_DONE"] = 4] = "MARK_NOT_DONE";
    ActionType[ActionType["UNDO"] = 5] = "UNDO";
})(exports.ActionType || (exports.ActionType = {}));
var ActionType = exports.ActionType;
//# sourceMappingURL=TasksModel.js.map