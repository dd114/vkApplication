import React from 'react'
import {Link} from "@vkontakte/vkui"



function ValidFormStatus(props) {


    return (
        <div>
            Чтобы добавить информацию на первичную валидацию, нажмите соответствующую кнопку<br/>
            При необходимости посетите раздел <Link onClick={() =>props.goToPage('help')}>помощь</Link> или <Link
            onClick={() => props.goToPage('listCharacters')}>список обозначений</Link>
        </div>
    )

}

export default ValidFormStatus