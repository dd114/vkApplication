import React from 'react';
import { View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';

function TestComponents() {
return (
    <View activePanel="main">
        <Panel id="main">
            <PanelHeader>VKUI</PanelHeader>
            <Group header={<Header mode="secondary">Items</Header>}>
                <Cell>Hello</Cell>
                <Cell>World</Cell>
            </Group>
        </Panel>
    </View>
)
}

export default TestComponents