import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

export const VtnortonContext = createContext<{
	relatedPostVisibility: boolean
	setRelatedPostVisibility: Dispatch<SetStateAction<boolean>>
}>({
	relatedPostVisibility: false,
	setRelatedPostVisibility: () => {},
})

export const VtnortonContextProvider = ({ children }: any) => {
	const [relatedPostVisibility, setRelatedPostVisibility] = useState(false)

	return <VtnortonContext.Provider value={{ relatedPostVisibility, setRelatedPostVisibility }}>{children}</VtnortonContext.Provider>
}
