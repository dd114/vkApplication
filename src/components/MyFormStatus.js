import React from 'react'
import {FormStatus} from "@vkontakte/vkui"
import ValidFormStatus from "./ValidFormStatus"
import ErrorFormStatus from "./ErrorFormStatus"

function MyFormStatus(props) {


    return (
        <FormStatus header={props.mode === 'valid' ? 'Вводите данные' : 'Некорректно введеннные данные: ' + props.error} mode={props.mode}>
            {props.mode === 'valid' ? <ValidFormStatus goToPage={props.goToPage}/> : <ErrorFormStatus goToPage={props.goToPage} error={props.error}/>}
        </FormStatus>
    )

}

export default MyFormStatus