import React, { HTMLAttributes, MouseEventHandler, useCallback } from 'react';
import classNames from 'classnames';


import './button.scss';
import { BUTTON_TYPE, ICON_ALIGNMENT } from '../../statics/enum';

const styles = {
    button: {
        common: 'cl__button__button-common',
        primary: 'cl__button__button-primary',
        secondary: 'cl__button__button-secondary',
        tertiary: 'cl__button__button-tertiary',
        text: 'cl__button__button-text',
        ghost: 'cl__button__button-ghost',
        disabled: 'cl__button__button-disabled',
        small: 'cl__button__button-small',
        onlyChild: 'cl__button__button-only-child',
    },
    icon: {
        left: 'cl__button__icon-left',
        right: 'cl__button__icon-right',
        loading: 'cl__button__icon-loading',
    }
}

interface Props extends HTMLAttributes<HTMLButtonElement> {  //used to inherit the properties of button
    children?: React.ReactNode,
    onlyChild?: boolean,
    className?: string,
    onClick?: (callbackValues?: any, e?: MouseEventHandler) => void,
    type?: BUTTON_TYPE,
    disabled?: boolean,
    callbackValues?: any,
    icon?: string,
    iconAlign?: string,
    isLoading?: boolean,
    small?: boolean,
}

const Button: React.FC<Props> = (props) => {
    const { children, onlyChild, className, onClick, type, disabled, callbackValues, icon , iconAlign, isLoading, small, ...rest } = props;

    const onInternalClick = useCallback(() => {
       if(onClick) if(callbackValues) onClick(callbackValues);
    },[])

    const buttonClassName = classNames(styles.button.common, className, {
        [styles.button.common]: !onlyChild,
        [styles.button.onlyChild]: onlyChild,
        [styles.button.primary]: type === BUTTON_TYPE.PRIMARY,
        [styles.button.secondary]: type === BUTTON_TYPE.SECONDARY,
        [styles.button.tertiary]: type === BUTTON_TYPE.TERTIARY,
        [styles.button.ghost]: type === BUTTON_TYPE.GHOST,
        [styles.button.text]: type === BUTTON_TYPE.TEXT,
        [styles.button.disabled]: disabled,
        [styles.button.small]: small
    })
       
    const buttonIconClassName = classNames( icon, {
        [styles.icon.loading]: isLoading,
        [styles.icon.left]: iconAlign === ICON_ALIGNMENT.LEFT,
        [styles.icon.right]: iconAlign === ICON_ALIGNMENT.RIGHT,
    })
    

    const getLoadingView = () => (
        <i className={'fa fa-spinner fa-spin'}></i>
    )
    
    const getIcon = () => (
        <i className={icon}></i>
    )

    const getContent = () => (
        <div>
       {iconAlign !== ICON_ALIGNMENT.RIGHT && <i className={buttonIconClassName}></i>}
        {children}
       {iconAlign === ICON_ALIGNMENT.RIGHT && <i className={buttonIconClassName}></i>}
        </div>
    )

    return (
            <button 
            className={buttonClassName}
            onClick={onInternalClick}
            disabled={disabled}
            {...rest}
            >
                {isLoading && getLoadingView()}
                {onlyChild && children}
                {!onlyChild && getContent()}
        </button>
    )
}


export { Button }