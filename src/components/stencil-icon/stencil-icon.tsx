import { Component, h, JSX, Prop } from '@stencil/core';
import get from 'lodash/get';
import {
	stencilIconMap,
	stencilIconMapType,
	stencilIconSizeInterface,
	stencilIconStateMap,
	stencilIconStateType,
	stencilIconType,
} from './model';

@Component({
	tag: 'stencil-icon',
	styleUrl: 'stencil-icon.scss',
	shadow: false,
	scoped: false,
})
export class StencilIcon {
	public static readonly DEFAULT_VIEW_BOX = '0 0 1792 1792';

	/**
	 * Determines type of icon e.g. settings
	 *
	 * @type {stencilIconType}
	 * @default undefined
	 */
	@Prop() type: stencilIconType;

	/**
	 * Determines state of icon e.g. primary
	 *
	 * @type {stencilIconStateType}
	 * @default 'non-action'
	 */
	@Prop() state?: stencilIconStateType = 'non-action';

	/**
	 * Determines if icon is disabled
	 *
	 * @type {boolean}
	 * @default false
	 */
	@Prop() isDisabled?: boolean = false;

	private _typeMap: stencilIconMapType = stencilIconMap.typeMap;
	private _stateMap: stencilIconStateMap = stencilIconStateMap.stateMap;
	private _ref: HTMLElement;
	private _size: stencilIconSizeInterface;

	private assignCssClasses(): string {
		return `Stencil-icon__container Stencil-icon__${this.type}--${
			this._stateMap[this.state]
		} ${this.isDisabled ? 'disabled' : ''}`;
	}

	private refHandler(el: HTMLElement): void {
		if (el) {
			this._ref = el;
			this._ref.style.width = this._size.width;
			this._ref.style.height = this._size.height;
		}
	}

	private setSize(iconSVG): void {
		let div = document.createElement('div');
		div.innerHTML = iconSVG;

		const el = get(div, 'children[0]');
		const size = el ? el.getAttribute('width') : '16px';

		this._size = {
			width: size,
			height: size,
		};
	}

	render(): JSX.Element {
		if (this.type) {
			const iconSVG = get(this._typeMap, `[${this.type}].svg`);
			if (iconSVG) {
				this.setSize(iconSVG);
				return (
					<div
						ref={el => this.refHandler(el)}
						class={this.assignCssClasses()}
						innerHTML={iconSVG}
					/>
				);
			}
		}
		return <div />;
	}
}
