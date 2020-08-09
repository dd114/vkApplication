import React from 'react';
import { View, Panel, PanelHeader, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
// import { Icon28NewsfeedOutline, Icon28ServicesOutline, Icon28MessageOutline, Icon28ClipOutline, Icon28UserCircleOutline } from '@vkontakte/icons';

class Example extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activeStory: 'profile'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render () {

        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'feed'}
                        data-story="feed"
                        text="Новости"
                    >{/*<Icon28NewsfeedOutline />*/}</TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'services'}
                        data-story="services"
                        text="Сервисы"
                    >{/*<Icon28ServicesOutline/>*/}</TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'messages'}
                        data-story="messages"
                        label="12"
                        text="Сообщения"
                    >{/*<Icon28MessageOutline /*/}></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'clips'}
                        data-story="clips"
                        text="Клипы"
                    >{/*<Icon28ClipOutline />*/}</TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'profile'}
                        data-story="profile"
                        text="Профиль"
                    >{/*<Icon28UserCircleOutline />*/}</TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
                <View id="services" activePanel="services">
                    <Panel id="services">
                        <PanelHeader>Сервисы</PanelHeader>
                    </Panel>
                </View>
                <View id="messages" activePanel="messages">
                    <Panel id="messages">
                        <PanelHeader>Сообщения</PanelHeader>
                    </Panel>
                </View>
                <View id="clips" activePanel="clips">
                    <Panel id="clips">
                        <PanelHeader>Клипы</PanelHeader>
                    </Panel>
                </View>
                <View id="profile" activePanel="profile">
                    <Panel id="profile">
                        <PanelHeader>Профиль</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}
export default Example
