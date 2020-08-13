import React from 'react';
import {PanelHeader, Group, Cell} from '@vkontakte/vkui';

import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

function MorePanel(props) {



    return (
        <div>
            <PanelHeader>Ещё</PanelHeader>
            <Group>
                <Cell expandable before={<Icon28HelpOutline/>}
                      onClick={() => props.setActivePanel('help')}>
                    Помощь
                </Cell>
                <Cell expandable before={<Icon28ArticleOutline/>}
                      onClick={() => props.setActivePanel('listCharacters')}>
                    Список обозначений
                </Cell>
                <Cell expandable before={<Icon28InfoOutline/>}
                      onClick={() => props.setActivePanel('aboutApplication')}>
                    О приложении
                </Cell>
            </Group>
        </div>

    )

}


export default MorePanel
