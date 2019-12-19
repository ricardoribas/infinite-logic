const CIRCLE_BORDER = {
    width: 40,
    height: 40,
    borderRadius: 20
}

export const DISABLED_CELL = {
    ...CIRCLE_BORDER,
    borderWidth: 1,
    borderColor: 'black',
};

export const BLOCKED_CELL = {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
}

export const SELECTED_CELL = {
    ...CIRCLE_BORDER,
    borderWidth: 1,
    borderColor: 'blue',
}

export default {
    BLOCKED_CELL,
    DISABLED_CELL
}