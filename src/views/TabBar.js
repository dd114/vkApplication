import React, {useState} from 'react';
import {
    View,
    Panel,
    Epic,
    Tabbar,
    TabbarItem, PanelHeader, Group, Cell, PanelHeaderBack,
} from '@vkontakte/vkui';
import HomePanel from "./home/HomePanel";
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28MenuOutline from '@vkontakte/icons/dist/28/menu_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

function TabBar() {
    const [activeStory, setActiveStory] = useState('home')
    const [activePanel, setActivePanel] = useState('more')

    return (
        <Epic activeStory={activeStory} tabbar={
            <Tabbar>
                <TabbarItem
                    onClick={() => setActiveStory('home')}
                    selected={activeStory === 'home'}
                    data-story="home"
                    text="Калькулятор"
                ><Icon28HomeOutline/></TabbarItem>
                <TabbarItem
                    onClick={() => setActiveStory('additionally')}
                    selected={activeStory === 'additionally'}
                    data-story="additionally"
                    text="Ещё"
                ><Icon28MenuOutline/></TabbarItem>
            </Tabbar>
        }>




            <View id="home" activePanel="home">
                <Panel id="home">
                    <HomePanel/>
                </Panel>
            </View>




            <View id="additionally" activePanel={activePanel}>

                <Panel id="more">
                    <PanelHeader>More</PanelHeader>
                    <Group>
                        <Cell expandable before={<Icon28HelpOutline/>}
                              onClick={() => setActivePanel('help')}>
                            Помощь
                        </Cell>
                        <Cell expandable before={<Icon28ArticleOutline/>}
                              onClick={() => setActivePanel('listCharacters')}>
                            Список обозначений
                        </Cell>
                        <Cell expandable before={<Icon28InfoOutline/>}
                              onClick={() => setActivePanel('aboutApplication')}>
                            О приложении
                        </Cell>
                    </Group>
                </Panel>

                <Panel id="help">
                    <PanelHeader separator={true} left={<PanelHeaderBack onClick={() => setActivePanel('more')}/>}>
                        Помощь
                    </PanelHeader>
                </Panel>

                <Panel id="listCharacters">
                    <PanelHeader separator={true} left={<PanelHeaderBack onClick={() => setActivePanel('more')}/>}>
                        Список обозначений
                    </PanelHeader>
                </Panel>

                <Panel id="aboutApplication">
                    <PanelHeader separator={true} left={<PanelHeaderBack onClick={() => setActivePanel('more')}/>}>
                        О приложении
                    </PanelHeader>
                </Panel>

            </View>

        </Epic>
    )

}

export default TabBar
