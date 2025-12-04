export interface Chapter {
	id: number;
	name: string;
	transliteration: string;
	translation: string;
	verses: number;
	summary: string;
}

export interface DropdownItem {
	label: string;
	href: string;
}

export interface NavItem {
	label: string;
	href: string;
	dropdown?: DropdownItem[];
}

export interface SocialLink {
	icon: string;
	label: string;
	href: string;
}
