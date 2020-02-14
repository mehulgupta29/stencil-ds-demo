import { stencilButtonSizeEnum } from './button-size.enum';
import { stencilButtonTypeEnum } from './button-type.enum';

export class Button {
	constructor(
		public type: string = 'PRIMARY',
		public size: string = 'REGULAR'
	) {
		this.getProps();
		this.setSize();
	}

	getProps(): Button {
		switch (stencilButtonTypeEnum[this.type.toUpperCase()]) {
			case stencilButtonTypeEnum.PRIMARY:
				this.type = 'primary';
				break;

			case stencilButtonTypeEnum.SECONDARY:
				this.type = 'secondary';
				break;

			case stencilButtonTypeEnum.TERTIARY:
				this.type = 'tertiary';
				break;

			case stencilButtonTypeEnum.PRIMARY_DANGER:
				this.type = 'primary-danger';
				break;
			case stencilButtonTypeEnum.SECONDARY_DANGER:
				this.type = 'secondary-danger';
				break;
			case stencilButtonTypeEnum.TERTIARY_DANGER:
				this.type = 'tertiary-danger';
				break;
		}
		return this;
	}

	setSize(): void {
		switch (stencilButtonSizeEnum[this.size.toUpperCase()]) {
			case stencilButtonSizeEnum.XSMALL:
				this.size = 'xsmall';
				break;

			case stencilButtonSizeEnum.SMALL:
				this.size = 'small';
				break;

			case stencilButtonSizeEnum.REGULAR:
				this.size = 'regular';
				break;

			case stencilButtonSizeEnum.LARGE:
				this.size = 'large';
				break;

			case stencilButtonSizeEnum.BLOCK:
				this.size = 'block';
				break;
		}
	}
}
