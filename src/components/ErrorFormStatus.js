import React from 'react'
import {Link} from "@vkontakte/vkui"



function ErrorFormStatus(props) {


    return (
        <div>
            Необходимо корректно ввести данные в заданном формате<br/>
            Посетите раздел <Link onClick={() =>props.goToPage('help')}>помощь</Link> и <Link
            onClick={() => props.goToPage('listCharacters')}>список обозначений</Link>
        </div>
    )

}

export default ErrorFormStatus