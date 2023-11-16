import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {episodeService} from "../../services/episodeService";

const initialState = {
    allEpisodes: [],
    episodeCharacters: [],
    chapter: null,
    currentPage: '1',
    prevPage: null,
    nextPage: null,
    charactersIds: []
}

const getAll = createAsyncThunk(
    'episodeSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page);
            return thunkAPI.fulfillWithValue(data)
        } catch (e) {
            return thunkAPI.fulfillWithValue(e.response.data)
        }
    }
)

const getCharacters = createAsyncThunk(
    'episodeSlice/getCharacters',
    async({ids}, thunkAPI) => {
        try {
            const {data} = await episodeService.getCharacters(ids);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.fulfillWithValue(e.response.data)
        }

    }
)

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setCharacters: (state, action) => {
            state.charactersIds = action.payload;
        },
        setChapter: (state, action) => {
            state.chapter = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info, results} = action.payload;
                state.allEpisodes = results;
                state.prevPage = info.prev;
                state.nextPage = info.next;
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.episodeCharacters = action.payload;
            })

})

const {reducer:episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions,
    getAll,
    getCharacters
}

export {
    episodeReducer,
    episodeActions
}