import React, {FC} from 'react';
import './button.scss'

type ButtonType = {
    title: string;
    onclick: () => void
    size: string
}

const buttonSizeClassName = {
    sm: 'button-size-sm',
    md: 'button-size-md',
    lg: 'button-size-lg',
} as any

export const Button: FC<ButtonType> = ({onclick, title, size='sm'}) => {
    return (
        <button className={`button ${buttonSizeClassName[size]}`} onClick={onclick}>
            <span className="button-title">{title}</span>
        </button>
    );
};

