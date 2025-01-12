import {createSlice} from "@reduxjs/toolkit";


const TabReducer = createSlice({
    name: 'tab',
    initialState: {
        isCollapsed: false,
    },
    reducers: {
        collapseMenu: state => {
            state.isCollapsed = !state.isCollapsed
        }
    }
})

export default TabReducer.reducer