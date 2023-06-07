export const initialState = {
    sidebar: false,
};

export function indexReducer(state = initialState, action: any) {
    const type = action.type;
    if (type === 'toggleSidebar') {
        return { sidebar: !state.sidebar };
    }

    return state;
}
