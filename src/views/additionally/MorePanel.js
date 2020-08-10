import React from 'react';
import {PanelHeader, Group, Cell} from '@vkontakte/vkui';

import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';

function MorePanel() {



    return (
        <div>
            <PanelHeader>More</PanelHeader>
            <Group>
                <Cell expandable before={<Icon28HomeOutline/>}
                      onClick={() => this.setState({activePanel: 'panel2'})}>
                    Помощь
                </Cell>
                <Cell expandable before={<Icon28HomeOutline/>}
                      onClick={() => this.setState({activePanel: 'panel2'})}>
                    Список обозначений
                </Cell>
                <Cell expandable before={<Icon28HomeOutline/>}
                      onClick={() => this.setState({activePanel: 'panel2'})}>
                    О приложении
                </Cell>
            </Group>
        </div>

    )

}


export default MorePanel
