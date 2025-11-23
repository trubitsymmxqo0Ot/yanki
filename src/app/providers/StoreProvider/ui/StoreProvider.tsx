import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import { StateSchema } from "../types/StateSchema";
import { DeepPartial } from "@/shared/config/types/types";
import { rootStore } from "../config/store";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = ({initialState, children}) => {
    const store = rootStore(
        initialState as StateSchema,
    )
    return (
        <Provider store={store}>{children}</Provider>
    )
}