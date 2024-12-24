import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axios';

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
    const response = await axiosInstance.get('/students');
    return response.data;
});

export const addStudent = createAsyncThunk(
    'students/addStudent', async (newStudent) => {
        const response = await axiosInstance.post('/students', newStudent);
        console.log(response.data)
        return response.data;
    });

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStudents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchStudents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                console.log(action.payload)
                if (Array.isArray(state.data)) {
                    state.data.push(action.payload);
                } else {
                    state.data = [action.payload];
                }
            });
    },
});

export default studentsSlice.reducer;
