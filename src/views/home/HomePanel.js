import React, {useState} from 'react';
import {
    PanelHeader,
    FormLayout,
    Input,
    Button,
    FormLayoutGroup,
    FormStatus,
    Link,
    CardScroll,
} from "@vkontakte/vkui";
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Cards from "../../components/Cards";



function HomePanel(props) {

    const [initInput, setInitInput] = useState('')
    const [cards, setCards] = useState([])


    let goToPage = (namePage) => {
        props.setActiveStory('additionally')
        props.setActivePanel(namePage)
    }

    let handleChange = (event) => {
        setInitInput(event.target.value)
    }

    let handleClick = () => {
        setCards([...cards, {id: Date.now(), initData: initInput}])
    }
    // console.log(cards)


    return (
        <div>
            <PanelHeader>Калькулятор</PanelHeader>
            <FormLayout>

                <FormLayoutGroup top="Дано:" bottom="Данные могут быть введены только в верном формате" className="add">
                    <Input
                        type="text"
                        name="initData"
                        placeholder="Введите данные"
                        /*status="valid"*/
                        className="add"
                        onChange={handleChange}
                    />

                    <Button
                        mode="outline"
                        onClick={handleClick}
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

                <CardScroll>
                        {cards.map(item => <Cards key={item.id} item={item}/>)}
                </CardScroll>

                <FormStatus header="Некорректно введенные данные" mode="error">
                    Необходимо корректно ввести данные в заданном формате<br/>
                    Посетите раздел <Link onClick={() => goToPage('help')}>помощь</Link> и <Link
                    onClick={() => goToPage('listCharacters')}>список обозначений</Link>
                </FormStatus>

                <Button size="xl">Решить</Button>

            </FormLayout>
        </div>

    )
}

export default HomePanel