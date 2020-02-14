import { stencilIconType } from './stencil-icon.type';

export type stencilIconMapType = {
	[key in stencilIconType]: {
		path?: string;
		svg?: string;
		viewBox?: string;
		transform?: string;
	};
};
