import type { NavItem, SocialLink } from '$lib/types';

export const NAV_ITEMS: NavItem[] = [
	{
		label: 'AYURVEDA',
		href: '/ayurveda',
		dropdown: [
			{ label: 'Introduction', href: '/ayurveda/introduction' },
			{ label: 'Timing', href: '/ayurveda/timing' },
			{ label: 'Food', href: '/ayurveda/food' }
		]
	},
	{
		label: 'YOGASŪTRAS',
		href: '/yoga-sutras',
		dropdown: [
			{ label: 'Introduction', href: '/yoga-sutras/introduction' },
			{ label: 'Obstacles', href: '/yoga-sutras/obstacles' },
			{ label: 'Practices', href: '/yoga-sutras/practices' },
			{ label: 'Yogasanas', href: '/yoga-sutras/yogasanas' },
			{ label: 'Glossary', href: '/yoga-sutras/glossary' }
		]
	},
	{ label: 'BHAGAVAD GĪTĀ', href: '/' },
	{
		label: 'UPANIṢADS',
		href: '/upanishads',
		dropdown: [
			{ label: 'Īśopaniṣad', href: '/upanishads/isopanisad' },
			{ label: 'Taittirīyopaniṣad', href: '/upanishads/taittiriyopanisad' },
			{ label: 'Māṇḍūkyopaniṣad', href: '/upanishads/mandukyopanisad' },
			{ label: 'Kenopaniṣad', href: '/upanishads/kenopanisad' },
			{ label: 'Kaṭhopaniṣad', href: '/upanishads/kathopanisad' },
			{ label: 'Aitareyopaniṣad', href: '/upanishads/aitareyopanisad' },
			{ label: 'Muṇḍakopaniṣad', href: '/upanishads/mundakopanisad' },
			{ label: 'Praśnopaniṣad', href: '/upanishads/prasnopanisad' }
		]
	},
	{
		label: 'SANSKRIT',
		href: '/sanskrit',
		dropdown: [
			{ label: 'Devotional Songs', href: '/sanskrit/devotional-songs' },
			{ label: 'Grammar Songs', href: '/sanskrit/grammar-songs' },
			{ label: 'Fun Songs', href: '/sanskrit/fun-songs' },
			{ label: 'Script Songs', href: '/sanskrit/script-songs' }
		]
	},
	{ label: 'CONTACT US', href: '/contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
	{ icon: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
	{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com' },
	{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
	{ icon: 'instagram', label: 'Instagram', href: 'https://instagram.com' }
];

export const COMPANY_INFO = {
	name: 'WELLBEING-SVASTI',
	author: 'Rutger Kortenhorst',
	developer: 'Burning Design Includes',
	developerUrl: 'https://burningdesign.com'
};
