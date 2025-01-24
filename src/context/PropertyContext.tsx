import React, { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type PropertyProviderProps = {
    children: ReactNode;
  };

type PropertyContextType = {
    propertyItems: PropertyItem[];
    addProperty: (id: number) => void 
}
type PropertyItem = {
    id: number
}

const PropertyContext = createContext({} as PropertyContextType)

export function usePropertyContext() {
    return useContext(PropertyContext)
}

export function PropertiesProvider({children}: PropertyProviderProps) {
    const [propertyItems, setPropertyItems] = useLocalStorage<PropertyItem[]>("properties",[])

    function addProperty(id: number) {
        setPropertyItems([])
        setPropertyItems((currItems)  => {
            if(currItems.find((item) => item.id === id) == null) {
                return [...currItems, {id}]
            } else {
                return currItems.map((item) => {
                    if(item.id === id) {
                        return {...item}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    return (
        <PropertyContext.Provider value={{propertyItems, addProperty}}>
            {children}
        </PropertyContext.Provider>
    )
}