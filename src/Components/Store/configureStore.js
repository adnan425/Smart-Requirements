import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import api from './Middlwware/api';
export default function () {
    return configureStore({
        reducer,
        middleware: [
            api
        ]
    });
}