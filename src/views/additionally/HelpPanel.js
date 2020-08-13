import React from 'react';
import {PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";


function HelpPanel(props) {


    return (
        <div>
            <PanelHeader separator={true} left={<PanelHeaderBack onClick={() => props.setActivePanel('more')}/>}>
                Помощь
            </PanelHeader>
        </div>

    )

}


export default HelpPanel
