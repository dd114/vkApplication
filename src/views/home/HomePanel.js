import React from 'react';
import {PanelHeader, FormLayout, Input, Button, FormLayoutGroup, FormStatus, Link} from "@vkontakte/vkui";
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';

function HomePanel(props) {

    let goToPage = (namePage) => {
        props.setActiveStory('additionally')
        props.setActivePanel(namePage)
    }

    return (
        <div>
            <PanelHeader>Калькулятор</PanelHeader>
            <FormLayout>

                <FormLayoutGroup top="Дано:" bottom="Данные могут быть введены только в верном формате" className="add">
                    <Input
                        type="text"
                        name="data"
                        placeholder="Введите данные"
                        /*status="valid"*/
                        className="add"
                    />

                    <Button
                        mode="outline"
                        onClick={() => console.log("WORK")}
                        before={<Icon28AddOutline/>}
                        size="l"
                    >Добавить</Button>
                </FormLayoutGroup>

                <Input
                    type="text"
                    top="Найти"
                    name="toFind"
                    /*value="rrr"*/
                    placeholder="Что нужно найти?"
                    /*status="valid"*/
                    /*bottom="{email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}"*/
                />

                <FormStatus header="Некорректно введенные данные" mode="error">
                    Необходимо корректно ввести данные в заданном формате<br/>
                    Посетите раздел <Link onClick={() => goToPage('help')}>помощь</Link> и <Link
                    onClick={() => goToPage('listCharacters')}>список обозначений</Link>
                </FormStatus>
            </FormLayout>
        </div>

    )
}

export default HomePanel