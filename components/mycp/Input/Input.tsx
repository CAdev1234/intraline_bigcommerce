import cn from 'classnames'
import s from './Input.module.css'
import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onChange?: (...args: any[]) => any,
  enableValiMsg?: boolean,
  valiMsgText?: string
}

const Input: React.FC<InputProps> = (props) => {
  const { className, children, onChange, enableValiMsg, valiMsgText, ...rest } = props

  const rootClassName = cn(s.root, {}, className)

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value)
    }
    return null
  }

  return (
    <label>
      <div className='relative h-15'>
        <input
          className={rootClassName}
          onChange={handleOnChange}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          {...rest}
        />
        <span className={`vali-span text-c_F4511E text-sm ${enableValiMsg ? 'block' : 'hidden'}`}>{valiMsgText}</span>
      </div>
      
    </label>
  )
}

export default Input
