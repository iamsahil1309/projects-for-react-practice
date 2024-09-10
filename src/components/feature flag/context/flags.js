import { createContext, useContext } from "react";

export const FlagCntext = createContext({
    loading: '',
    enabledFlags: {} ,
    fetachFeatureFlag : () => {},
})

export const FlagsProvider = FlagCntext.Provider

export default function useFlags () {
    return useContext(FlagCntext)
}