import { stencilIconMapType } from './stencil-icon-map.type';

export class stencilIconMap {
	/**
	 * TODO:
	 * Investigate: https://stackoverflow.com/questions/10028345/calculating-viewbox-parameters-based-on-path-elements-in-svg
	 * for better aligned viewbox attributes.
	 */
	public static readonly typeMap: stencilIconMapType = {
		action: {
			svg: `<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<g id="icon-action" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g>
						<rect id="Rectangle-path" x="0" y="0" width="16" height="16"></rect>
						<circle id="Oval" fill="#000000" fill-rule="nonzero" cx="8" cy="12.72" r="1.28"></circle>
						<circle id="Oval" fill="#000000" fill-rule="nonzero" cx="8" cy="8" r="1.28"></circle>
						<circle id="Oval" fill="#000000" fill-rule="nonzero" cx="8" cy="3.28" r="1.28"></circle>
					</g>
				</g>
			</svg>`,
		}
	}
}
