import React, {useState} from 'react'
import {
    PanelHeader,
    FormLayout,
    Input,
    Button,
    FormLayoutGroup,
    CardScroll,
} from "@vkontakte/vkui"
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline'
import Cards from "../../components/Cards"
import MyFormStatus from "../../components/MyFormStatus";


function HomePanel(props) {

    const [initInput, setInitInput] = useState('')
    const [cards, setCards] = useState([])
    const [formStatus, setFormStatus] = useState({mode: 'valid', error: ''})


    let goToPage = (namePage) => {
        props.setActiveStory('additionally')
        props.setActivePanel(namePage)
    }


    let handleChange = (event) => {
        setInitInput(event.target.value)
    }

    let handleClick = () => {
        generalValidation(initInput)
    }

    // console.log(cards)

    let dataProcessing = (initData) => {
        let regex = /(?<=[0-9]+),(?=[0-9]+)/g
        // console.log(initData.replace(regex, '.'))
        return initData.replace(regex, '.')
    }


    let equalityCheck = initData => {
        let regex = /[A-Za-zа-я12_]{1,4}[= ]+[0-9]+(.){0,1}[0-9]*/g
        let correctExpression
        if (regex.test(initData)) correctExpression = initData.match(regex)[0]
        // console.log(correctExpression)
        return correctExpression === initData
    }
    let dataSpliting = initData => {
        let regex = /(?<=[0-9]+)[\s,]+(?=[A-Za-zа-я12_]+)/g
        // console.log(initData.split(regex))
        return initData.split(regex)
    }

    let generalValidation = initInput => {
        let initData = dataProcessing(initInput)
        let equality = dataSpliting(initData)

        setFormStatus({
            mode: 'valid',
            error: ''
        })

        let correctEquality = []
        for (let i = 0; i < equality.length; i++) {
            if (equalityCheck(equality[i])) {
                correctEquality.push({id: Date.now() + Math.round(Math.random() * 1000), initData: equality[i]})
            } else {
                setFormStatus({
                    mode: 'error',
                    error: equality[i]
                })
                break
            }
            setInitInput('')
        }

        if (!!initData)
            setCards([...cards, ...correctEquality])
        // else
        // setCards([...cards, {id: Date.now(), initData: 'Nothing entered'}])

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
                        status={formStatus.mode}
                        className="add"
                        onChange={handleChange}
                        value={initInput}
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
                    placeholder="Что нужно найти?"
                    /*status="valid"*/
                    /*bottom="{email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}"*/
                />

                <CardScroll>
                    {cards.map(item => <Cards key={item.id} item={item}/>)}
                </CardScroll>

                <MyFormStatus mode={formStatus.mode} error={formStatus.error} goToPage={goToPage}/>

                <Button size="xl">Решить</Button>

            </FormLayout>
        </div>

    )
}

export default HomePanel