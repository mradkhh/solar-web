import { createRef, FC, useEffect, useState } from 'react'
import styles from './styles/inputs.module.scss'
import {ChevronDown} from "../../assets/icons";

type Option = {
    id: number,
    name: string
}

interface CustomSelectProps {
    options: Option[]
    initialPositon: string
    setState: (state: any) => any
}

const CustomSelect: FC<CustomSelectProps> = ({ options, initialPositon, setState }) => {
    const optionsRef = createRef<HTMLDivElement>()
    const [ showOptions, setShowOptions ] = useState<boolean>(false)
    // const [ optionId, setOptionId ] = useState<string>(initialPositon)
    const [ optionName, setOptionName ] = useState<string>(initialPositon)

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowOptions(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(optionsRef)

    const onFocus = () => {
        setShowOptions(!showOptions)
    }

    const onSelect = (id: number, name: string) => {
        setShowOptions(false)
        setOptionName(name)
        setState((state: any) => {
            let obj = {
                ...state,
                position: id
            }
            return obj
        })
    }

    return (
        <div className={styles.wrapper}>
            <div
                onClick={onFocus}
                className={styles.select + ' header_drop_down'}>{optionName}
                <b style={{
                    transform: showOptions ? 'rotate(180deg)' : 'rotate(0)'
                }}>
                    <ChevronDown/>
                </b>
            </div>
            {
                showOptions &&
                <div ref={optionsRef} className={styles.options}>
                    {
                        options && options.map((item: Option, index: number) =>
                            <span key={index} onClick={() => onSelect(item?.id, item?.name)}>{item?.name}</span>
                        )
                    }
                </div>
            }
        </div>
    )
}
export default CustomSelect