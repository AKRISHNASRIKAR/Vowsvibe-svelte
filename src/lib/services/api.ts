class ApiClient {
	async get<T>(chapterId: number): Promise<T> {
		try {
			// Use our server-side proxy to avoid CORS issues
			const response = await fetch(`/api/chapters/${chapterId}`);

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			// Return the data directly since the API wraps everything in a response object
			return data as T;
		} catch (error) {
			console.error('API Error:', error);
			throw error;
		}
	}
}

export const apiClient = new ApiClient();
