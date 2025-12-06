import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, fetch }) => {
  const chapterId = params.id;

  try {
    // IMPORTANT: use the exact API URL (http, not https, no extra path)
    const res = await fetch(`http://sanskrit.ie/api/geeta.php?q=${chapterId}`);

    const text = await res.text();          // read as text first

    // Debug: see what actually comes back
    console.log('Upstream status:', res.status);
    console.log('First 200 chars:', text.slice(0, 200));

    // If it looks like HTML, do NOT try to parse JSON
    if (text.trim().startsWith('<')) {
      throw new Error('Upstream returned HTML, not JSON');
    }

    const data = JSON.parse(text);         // now safely parse JSON string
    return json(data);
  } catch (err) {
    console.error('Error fetching chapter:', err);
    return json(
      { error: 'Failed to fetch chapter data' },
      { status: 500 }
    );
  }
};