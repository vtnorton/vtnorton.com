import React, { Dispatch, SetStateAction, createContext, useState } from 'react'

export const VtnortonContext = createContext<{
	relatedPostVisibility: boolean
	setRelatedPostVisibility: Dispatch<SetStateAction<boolean>>
	isPostPage: boolean
	setPostPage: Dispatch<SetStateAction<boolean>>
}>({
	relatedPostVisibility: false,
	setRelatedPostVisibility: () => {},
	isPostPage: false,
	setPostPage: () => {},
})

export const VtnortonContextProvider = ({ children }: any) => {
	const [relatedPostVisibility, setRelatedPostVisibility] = useState(false)
	const [isPostPage, setPostPage] = useState(false)

	return <VtnortonContext.Provider value={{ relatedPostVisibility, setRelatedPostVisibility, isPostPage, setPostPage }}>{children}</VtnortonContext.Provider>
}
