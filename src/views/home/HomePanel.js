import React, {useState} from 'react'
import {
    PanelHeader,
    FormLayout,
    Input,
    Button,
    FormLayoutGroup,
    FormStatus,
    Link,
    CardScroll,
} from "@vkontakte/vkui"
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline'
import Cards from "../../components/Cards"


function HomePanel(props) {

    const [initInput, setInitInput] = useState('')
    const [cards, setCards] = useState([])


    let goToPage = (namePage) => {
        props.setActiveStory('additionally')
        props.setActivePanel(namePage)
    }

    let logs = initData => {
        let regex = /[A-Za-zа-я12_]{1,4}[= ]+[0-9]+(.){0,1}[0-9]+/g
        console.log('Text=value ')
        console.log(initData.match(regex))

        regex = /,(?=[0-9]+)/g //возможна ошибка, нет проверки на наличие цифр слева от запятой
        console.log('what are we replacing ')
        console.log(initInput.match(regex))
        console.log('answer ')
        console.log(initInput.replace(regex, '.'))
        // setInitInput(initData.replace(regex, '.'))
        initData = initInput.replace(regex, '.')

        regex = /[\s=,]+/g
        console.log('array by delimiter ')
        console.log(initData.split(regex))

        console.log(' ============== ')
        }

    let handleChange = (event) => {
        setInitInput(event.target.value)
    }


    let handleClick = () => {
        if (dataValidation(initInput) === true)
            setCards([...cards, {id: Date.now(), initData: initInput}])
        else
            setCards([...cards, {id: Date.now(), initData: 'Nothing entered'}])
        // console.log(cards.reverse())
    }

    // console.log(cards)

    let dataValidation = initData => {
        // logs(initData)

        console.log(initData.match((/([0-9]=?) (?=[A-Za-zа-я])/g)))

        return !!initData
    }


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