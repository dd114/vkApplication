import React, { useState } from 'react';
import { View, Panel, PanelHeader, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28MenuOutline from '@vkontakte/icons/dist/28/menu_outline';

function TabBar() {
    const [activeStory, setActiveStory] = useState('home')

        return (
            <Epic activeStory={activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={() => setActiveStory('home')}
                        selected={activeStory === 'home'}
                        data-story="home"
                        text="Калькулятор"
                    >{<Icon28HomeOutline />}</TabbarItem>
                    <TabbarItem
                        onClick={() => setActiveStory('additionally')}
                        selected={activeStory === 'additionally'}
                        data-story="additionally"
                        text="Ещё"
                    >{<Icon28MenuOutline />}</TabbarItem>
                </Tabbar>
            }>
                <View id="home" activePanel="home">
                    <Panel id="home">
                        <PanelHeader>Калькулятор</PanelHeader>
                    </Panel>
                </View>
                <View id="additionally" activePanel="additionally">
                    <Panel id="additionally">
                        <PanelHeader>Ещё</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )

}
export default TabBar
