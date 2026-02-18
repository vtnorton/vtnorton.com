import sharp from 'sharp'

export const getImageDimensions = async (buffer: Buffer): Promise<{ width: number; height: number }> => {
	const metadata = await sharp(buffer).metadata()
	return {
		width: metadata.width || 0,
		height: metadata.height || 0,
	}
}

export const calculateTargetWidth = (width: number, height: number): number => {
	const isHorizontalWide = width >= height
	return isHorizontalWide ? 1920 : 1080
}

export const resizeImage = async (buffer: Buffer, maxWidth: number): Promise<Buffer> => {
	const { width } = await getImageDimensions(buffer)

	if (width <= maxWidth) {
		return buffer
	}

	return await sharp(buffer)
		.resize({ width: maxWidth, withoutEnlargement: true })
		.toBuffer()
}

export const compressToJpeg = async (buffer: Buffer, quality = 80): Promise<Buffer> => {
	return await sharp(buffer)
		.jpeg({ quality, mozjpeg: true })
		.toBuffer()
}

export const processImage = async (buffer: Buffer): Promise<Buffer> => {
	const { width, height } = await getImageDimensions(buffer)
	const targetWidth = calculateTargetWidth(width, height)
	const resized = await resizeImage(buffer, targetWidth)
	const compressed = await compressToJpeg(resized)
	return compressed
}
