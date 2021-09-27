import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react'
import s from "./superRadio.module.css"
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: Array<string>
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options.map((e, i) => ( // map options with key
        <label  key={name + '-' + i}>

            <input
               className={s.superRadio} 
                type={'radio'}
                name={name}
                value={e}
                onChange={onChangeCallback}
                checked={value === e ? true : false}
            // name, checked, value, onChange
            />
            {e}

        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
