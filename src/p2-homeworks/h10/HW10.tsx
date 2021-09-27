import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer'
import { AppStoreType } from './bll/store'
import s from "./style.module.css"
function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch();
    // useSelector, useDispatch


    const setLoading = () => {
        const action = loadingAC(true)
        dispatch(action);

        setTimeout(() => dispatch(loadingAC(false)), 1000)

    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div className={s.loader}> </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
