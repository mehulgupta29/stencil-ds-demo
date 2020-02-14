import {
	Component,
	Event,
	EventEmitter,
	h,
	JSX,
	Prop,
	State,
} from '@stencil/core';
import { stencilIconStateType, stencilIconType } from '../stencil-icon';
import { stencilButtonSizeEnum, stencilButtonTypeEnum } from './model';
import { Button } from './model/button';
import { stencilButtonConstants } from './model/button.constants';

@Component({
	tag: 'stencil-button',
  styleUrl: 'stencil-button.scss',
	shadow: true,
})
export class StencilButton {
	/**This property sets button to disabled */
	@Prop() isDisabled?: boolean = false;

	/**
	 * This property sets label
	 * @type {string}
	 * @default ''
	 */
	@Prop({
		mutable: true,
	})
	label?: string = '';

	/**
	 * This property sets icon
	 * @type {stencilIconType}
	 */
	@Prop({
		mutable: true,
	})
	icon?: stencilIconType;

	/**This property is to specify type for button e.g. primary */
	@Prop({
		mutable: true,
	})
	type?: string = 'primary';

	/**This property is to specify size for button e.g. large */
	@Prop({
		mutable: true,
	})
	size?: string = 'regular';

	/**This property position icon to left or right */
	@Prop({
		mutable: true,
	})
	isIconRight?: boolean = false;

	/** Controls split button and provides the icon to use */
	@Prop() splitIcon?: stencilIconType;

	/** Emits event  when split button is clicked */
	@Event() splitButtonClicked: EventEmitter;

	private _buttonRef: HTMLElement;

	private splitButtonClickedHandler(event: MouseEvent): void {
		this.splitButtonClicked.emit({
			mainButtonClicked: false,
			srcEvent: event,
		});
	}

	@State() iconState: stencilIconStateType;

	componentWillLoad() {
		const { type, size } = new Button(this.type, this.size);
		this.icon =
			this.size && this.size.toLowerCase() === 'xsmall'
				? null
				: this.icon; // making sure icon doesn't show in case of extra small button
		this.iconState = (this.type + '-button') as stencilIconStateType;
		this.size = size;
		this.type = type;
	}

	componentDidLoad() {
		this._buttonRef.addEventListener('mouseenter', () => {
			if (this.type === stencilButtonTypeEnum.SECONDARY) {
				this.iconState = (this.type +
					'-button-hover') as stencilIconStateType;
			}
		});

		this._buttonRef.addEventListener('mouseleave', () => {
			if (this.type === stencilButtonTypeEnum.SECONDARY) {
				this.iconState = (this.type + '-button') as stencilIconStateType;
			}
		});
	}

	componentDidUpdate() {
		if (this.isDisabled) {
			this.iconState = (this.type + '-button') as stencilIconStateType;
		}
	}

	/**This sets button CSS styling */
	get buttonCss(): string {
		let btnCss = 'stencil-button ';
		btnCss += 'stencil-button__' + this.size + ' ';
		btnCss += 'stencil-button__' + this.type + ' ';
		btnCss += !this.label ? 'stencil-button__icon-only ' : '';
		btnCss += this.splitIcon ? 'stencil-button__split-button--left' : '';
		return btnCss;
	}

	/**This sets label styling */
	get labelCss(): string {
		let labelCss = '';
		labelCss += this.icon && this.label ? 'stencil-button__label ' : '';
		labelCss += 'stencil-button__label--' + this.size + ' ';
		labelCss += this.isIconRight ? 'stencil-button__icon--right' : '';
		return labelCss;
	}

	private clickHandler(event: Event): void {
		if (this.isDisabled) {
			event.preventDefault();
			event.stopPropagation();
		}
		if (this.splitIcon) {
			this.splitButtonClicked.emit({
				mainButtonClicked: true,
				srcEvent: event,
			});
		}
	}

	private renderLeftIcon(): JSX.Element {
		if (this.icon && !this.isIconRight) {
			return (
				<stencil-icon
					type={this.icon}
					state={this.iconState}
					isDisabled={this.isDisabled}
				/>
			);
		}
	}

	private renderRightIcon(): JSX.Element {
		if (this.icon && this.isIconRight) {
			return (
				<stencil-icon
					type={this.icon}
					state={this.iconState}
					isDisabled={this.isDisabled}
				/>
			);
		}
	}

	private renderLabel(): JSX.Element {
		if (this.label) {
			return <div class={this.labelCss}>{this.label}</div>;
		}
	}

	private renderMainButton(): JSX.Element {
		return (
			<div
				class={
					this.size !== stencilButtonSizeEnum.BLOCK
						? stencilButtonConstants.STRING.BUTTON_CONTAINER
						: ''
				}
				onClick={this.clickHandler.bind(this)}
			>
				<div class={stencilButtonConstants.STRING.CONTENT}>
					<button
						ref={el => (this._buttonRef = el)}
						class={this.buttonCss}
						disabled={this.isDisabled}
					>
						{this.renderLeftIcon()}
						{this.renderLabel()}
						{this.renderRightIcon()}
					</button>
				</div>
			</div>
		);
	}

	private renderButton(): JSX.Element {
		if (this.splitIcon) {
			return (
				<div class="stencil-button__split-container">
					{this.renderMainButton()}
					<div class={stencilButtonConstants.STRING.CONTENT}>
						<button
							class={`${this.buttonCss} stencil-button__split-button--right`}
							disabled={this.isDisabled}
							onClick={event =>
								this.splitButtonClickedHandler(event)
							}
						>
							<stencil-icon
								type={this.splitIcon}
								state={this.iconState}
								isDisabled={this.isDisabled}
							/>
						</button>
					</div>
				</div>
			);
		}

		return this.renderMainButton();
	}

	render(): JSX.Element {
		return this.renderButton();
	}
}
