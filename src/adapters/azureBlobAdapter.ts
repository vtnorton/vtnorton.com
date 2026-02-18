import { BlobServiceClient } from '@azure/storage-blob'

const CONTAINER_NAME = 'covers'
const AZURE_BASE_URL = 'https://vtnphotoswebsite.blob.core.windows.net'

const getContainerClient = () => {
	const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING
	if (!connectionString) {
		throw new Error('AZURE_STORAGE_CONNECTION_STRING is not set')
	}

	const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString)
	return blobServiceClient.getContainerClient(CONTAINER_NAME)
}

export const uploadCover = async (buffer: Buffer, fileName: string): Promise<string> => {
	const containerClient = getContainerClient()
	const blockBlobClient = containerClient.getBlockBlobClient(fileName)

	await blockBlobClient.uploadData(buffer, {
		blobHTTPHeaders: {
			blobContentType: 'image/jpeg',
		},
	})

	return `${AZURE_BASE_URL}/${CONTAINER_NAME}/${fileName}`
}

export const azureBlobAdapter = {
	uploadCover,
}
