import { Component, FC, forwardRef, InputHTMLAttributes, JSXElementConstructor, useRef } from "react"
import cn from 'classnames'
import s from './Checkbox.module.css'
import mergeRefs from "react-merge-refs"


export interface CheckboxProps extends InputHTMLAttributes<HTMLButtonElement> {
    id?: string
    href?: string
    className?: string
    variant?: 'default' | 'primary' | 'scrollup'
    active?: boolean
    type?: 'checkbox' | 'radio'
    Component?: string | JSXElementConstructor<any>
    width?: string | number
    height?: string | number
    disabled?: boolean
    label?: string
}

const Checkbox: React.FC<CheckboxProps> = forwardRef((props, checkboxRef) => {
    const {
        id,
        className,
        variant = 'default',
        children,
        active,
        width,
        height,
        type,
        disabled = false,
        label,
        style = {},
        Component = 'input',
        ...rest
    } = props
    const ref = useRef<typeof Component>(null)

    const rootClassName = cn(
        s.root,
        {
            [s.default]: variant === 'default',
            [s.primary]: variant === 'primary',
            [s.scrollup]: variant === 'scrollup',
            [s.disabled]: disabled,
        },
        className
    )

    return (
        <div className={rootClassName}>
            <div className="flex items-center">
                <Component
                    id={id}
                    aria-pressed={active}
                    data-variant={variant}
                    ref={mergeRefs([ref, checkboxRef])}
                    // className={rootClassName}
                    type={type}
                    disabled={disabled}
                    style={{
                        width,
                        ...style,
                    }}
                    {...rest}
                >
                    {children}
                </Component>
                <label htmlFor={id}>{label}</label>
            </div>
            
        </div>

        
    )
})

export default Checkbox