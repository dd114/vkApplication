import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import something from "./Inputs/AddData";
import AddData from "./Inputs/AddData";

function App() {
    return (
        <div className='wrapper'>
            Введите данные полей
        <AddData/>
        </div>
)

}

export default App;

