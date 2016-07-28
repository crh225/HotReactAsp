
export interface ITask {
    index: number
    text: string
    done: boolean,
}

export interface IStoreAction {
    type: ActionType
    task?: ITask
}

export interface IState {
    tasks: Array<ITask>,
    canUndo: boolean
}

export enum ActionType {
    ADD_TASK,
    EDIT_TASK,
    REMOVE_TASK,
    MARK_DONE,
    MARK_NOT_DONE,
    UNDO
}