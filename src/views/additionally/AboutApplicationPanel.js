import React from 'react';
import {PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
// import {Cell, PanelHeader, PanelHeaderBack} from '@vkontakte/vkui';


function AboutApplication(props) {


    return (
        <div>
            <PanelHeader separator={true} left={<PanelHeaderBack onClick={() => props.setActivePanel('more')}/>}>
                О приложении
            </PanelHeader>
        </div>

    )

}


export default AboutApplication
