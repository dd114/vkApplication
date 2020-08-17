import React from 'react'
import {PanelHeader, Group, Cell} from '@vkontakte/vkui';

function DataValidation(props) {

    let dataValidation = (initData, cards, setCards) => {
        if (initData)
            setCards([...cards, {id: Date.now(), initData: initData}])
        return true
    }

return (
    'rere'

)



}


export default DataValidation