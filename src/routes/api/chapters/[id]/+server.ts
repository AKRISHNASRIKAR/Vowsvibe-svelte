import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, fetch }) => {
	const chapterId = params.id;

	try {
		// Using BhagavadGita.io API - no auth required for basic usage
		const response = await fetch(`https://bhagavadgita.io/api/v1/chapters/${chapterId}/verses`, {
			headers: {
				Accept: 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`API returned ${response.status}`);
		}

		const data = await response.json();
		console.log('Raw API Response:', data);

		return json(data);
	} catch (error) {
		console.error('Error fetching chapter:', error);
		return json(
			{
				error: error instanceof Error ? error.message : 'Failed to fetch chapter data',
				verses: []
			},
			{ status: 500 }
		);
	}
};
