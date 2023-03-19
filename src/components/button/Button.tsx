import React from 'react';
import classnames from "classnames"

import { BUTTON_TYPE } from "../../enum"

import './button.scss';

interface Props {
    children?: React.ReactNode,
    className?: string,
    type?: string,
}

const styles = {
    default: 'uk__button__default',
    type: {
     primary: 'uk__button__type-primary',
     secondary: 'uk__button__type-secondary',
    }
}

const Button = (props: Props) => {
    
    const { children, className, type } = props

    const customButtonClassName = classnames(styles.default, className, {
        [styles.type.primary]: type === BUTTON_TYPE.PRIMARY,
        [styles.type.primary]: type === BUTTON_TYPE.SECONDARY,
    } )
    

    return (
        <button
        className={customButtonClassName}
        >{children}</button>
    )
}

Button.defaultProps = {
   className: '',
   type: '',
   children: ''
}

export { Button }