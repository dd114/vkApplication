import React from 'react';
import {PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";



function ListCharacters(props) {


    return (
        <div>
            <PanelHeader separator={true} left={<PanelHeaderBack onClick={() => props.setActivePanel('more')}/>}>
                Список обозначений
            </PanelHeader>
        </div>

    )

}


export default ListCharacters
