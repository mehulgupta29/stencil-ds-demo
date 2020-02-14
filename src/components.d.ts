/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  stencilIconType,
} from './components/stencil-icon';
import {
  stencilIconStateType,
  stencilIconType as stencilIconType1,
} from './components/stencil-icon/model';

export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface StencilButton {
    /**
    * This property sets icon
    * @type {stencilIconType}
    */
    'icon'?: stencilIconType;
    /**
    * This property sets button to disabled
    */
    'isDisabled'?: boolean;
    /**
    * This property position icon to left or right
    */
    'isIconRight'?: boolean;
    /**
    * This property sets label
    * @type {string}
    * @default ''
    */
    'label'?: string;
    /**
    * This property is to specify size for button e.g. large
    */
    'size'?: string;
    /**
    * Controls split button and provides the icon to use
    */
    'splitIcon'?: stencilIconType;
    /**
    * This property is to specify type for button e.g. primary
    */
    'type'?: string;
  }
  interface StencilIcon {
    /**
    * Determines if icon is disabled
    * @type {boolean}
    * @default false
    */
    'isDisabled'?: boolean;
    /**
    * Determines state of icon e.g. primary
    * @type {stencilIconStateType}
    * @default 'non-action'
    */
    'state'?: stencilIconStateType;
    /**
    * Determines type of icon e.g. settings
    * @type {stencilIconType}
    * @default undefined
    */
    'type': stencilIconType;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLStencilButtonElement extends Components.StencilButton, HTMLStencilElement {}
  var HTMLStencilButtonElement: {
    prototype: HTMLStencilButtonElement;
    new (): HTMLStencilButtonElement;
  };

  interface HTMLStencilIconElement extends Components.StencilIcon, HTMLStencilElement {}
  var HTMLStencilIconElement: {
    prototype: HTMLStencilIconElement;
    new (): HTMLStencilIconElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'stencil-button': HTMLStencilButtonElement;
    'stencil-icon': HTMLStencilIconElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface StencilButton {
    /**
    * This property sets icon
    * @type {stencilIconType}
    */
    'icon'?: stencilIconType;
    /**
    * This property sets button to disabled
    */
    'isDisabled'?: boolean;
    /**
    * This property position icon to left or right
    */
    'isIconRight'?: boolean;
    /**
    * This property sets label
    * @type {string}
    * @default ''
    */
    'label'?: string;
    /**
    * Emits event  when split button is clicked
    */
    'onSplitButtonClicked'?: (event: CustomEvent<any>) => void;
    /**
    * This property is to specify size for button e.g. large
    */
    'size'?: string;
    /**
    * Controls split button and provides the icon to use
    */
    'splitIcon'?: stencilIconType;
    /**
    * This property is to specify type for button e.g. primary
    */
    'type'?: string;
  }
  interface StencilIcon {
    /**
    * Determines if icon is disabled
    * @type {boolean}
    * @default false
    */
    'isDisabled'?: boolean;
    /**
    * Determines state of icon e.g. primary
    * @type {stencilIconStateType}
    * @default 'non-action'
    */
    'state'?: stencilIconStateType;
    /**
    * Determines type of icon e.g. settings
    * @type {stencilIconType}
    * @default undefined
    */
    'type'?: stencilIconType;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'stencil-button': StencilButton;
    'stencil-icon': StencilIcon;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'stencil-button': LocalJSX.StencilButton & JSXBase.HTMLAttributes<HTMLStencilButtonElement>;
      'stencil-icon': LocalJSX.StencilIcon & JSXBase.HTMLAttributes<HTMLStencilIconElement>;
    }
  }
}

