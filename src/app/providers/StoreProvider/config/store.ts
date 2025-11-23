import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "../types/StateSchema";
import { currencyReducer } from "@/entities/Currency";

interface rootStore {
    initialState?: StateSchema;
}

export function rootStore(initialState: StateSchema) {
    const store = configureStore<StateSchema>({
        reducer: {
            currency: currencyReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
    return store;
}

export type AppStore = ReturnType<typeof rootStore>
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];