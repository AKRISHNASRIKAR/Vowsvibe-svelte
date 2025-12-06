class ApiClient {
  async get<T>(chapterId: number): Promise<T> {
    const res = await fetch(`/api/chapters/${chapterId}`);

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
    }

    return await res.json() as T;
  }
}

export const apiClient = new ApiClient();