import React, {useState} from 'react'
import {
    View,
    Panel,
    Epic,
    Tabbar,
    TabbarItem
} from '@vkontakte/vkui';
import HomePanel from "./home/HomePanel";
import HelpPanel from "./additionally/HelpPanel";
import ListCharacters from "./additionally/ListCharactersPanel";
import AboutApplication from "./additionally/AboutApplicationPanel";
import MorePanel from "./home/MorePanel";
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28MenuOutline from '@vkontakte/icons/dist/28/menu_outline';


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
                    <HomePanel setActiveStory={setActiveStory} setActivePanel={setActivePanel}/>
                </Panel>
            </View>


            <View id="additionally" activePanel={activePanel}>

                <Panel id="more">
                    <MorePanel setActivePanel={setActivePanel}/>
                </Panel>

                <Panel id="help">
                    <HelpPanel setActivePanel={setActivePanel}/>
                </Panel>

                <Panel id="listCharacters">
                    <ListCharacters setActivePanel={setActivePanel}/>
                </Panel>

                <Panel id="aboutApplication">
                    <AboutApplication setActivePanel={setActivePanel}/>
                </Panel>

            </View>

        </Epic>
)

}

export default TabBar
