import React, {useCallback, useMemo, useState} from 'react'
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
import useAutoSuggest from 'react-use-autosuggest';
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";
//=========================================================
let f;
let string=[];
const command = [
    {
        title: 'Fтяж',
        description: 'сила тяжести',
    },
    {
        title: 'Fупр',
        description: 'упругая сила',
    },
    {
        title: 'F',
        description: 'сила',
    },
    {
        title: 'Fтр',
        description: 'сила реакции',
    },
    {
        title: 'Fкул',
        description: 'сила кулона',
    },
    {
        title: 'Fарх',
        description: 'Архимедовое усилие',
    },
    {
        title: 'N',
        description: 'сила реакции опоры',
    },
    {
        title: 'm_',
        description: 'коэффициент трения',
    },
    {
        title: 'm',
        description: 'вес',
    },
    {
        title: 'g',
        description: 'гравитация',
    },
    {
        title: 't',
        description: 'время',
    },
    {
        title: 'l',
        description: 'длина',
    },
    {
        title: 's',
        description: 'перемещение',
    },
    {
        title: 's1',
        description: 'перемещение 1',
    },
    {
        title: 's2',
        description: 'перемещение 2',
    },
    {
        title: 'V',
        description: 'обьем',
    },
    {
        title: 'S',
        description: 'площадь',
    },
    {
        title: 'k',
        description: 'коэффициент твердости',
    },
    {
        title: 'v',
        description: 'скорость',
    },
    {
        title: 'v1',
        description: 'скорость 1',
    },
    {
        title: 'v2',
        description: 'скорость 2',
    },
    {
        title: 'd',
        description: 'расстояние',
    },
    {
        title: 'd1',
        description: 'расстояние 1',
    },
    {
        title: 'd2',
        description: 'расстояние 2',
    },
    {
        title: 'p_',
        description: 'импульс',
    },
    {
        title: 'p',
        description: 'давление',
    },
    {
        title: '_p',
        description: 'плотность',
    },
    {
        title: 'h',
        description: 'высота',
    },
    {
        title: 'A',
        description: 'работа',
    },
    {
        title: 'Апол',
        description: 'полезная работа',
    },
    {
        title: 'Асов',
        description: 'полная работа',
    },
    {
        title: 'P',
        description: 'мощность',
    },
    {
        title: 'n',
        description: 'КПД',
    },
    {
        title: 'Ек',
        description: 'кинетическая энергия',
    },
    {
        title: 'Eп',
        description: 'потенциальная энергия',
    },
    {
        title: 'Q',
        description: 'тепло',
    },
    {
        title: 'c',
        description: 'теплоемкость',
    },
    {
        title: 'q_',
        description: 'теплотворная способность',
    },
    {
        title: 'L_',
        description: 'теплота плавления',
    },
    {
        title: 'L',
        description: 'теплота испарения',
    },
    {
        title: 'x',
        description: 'сжатие',
    },
    {
        title: 'r_',
        description: 'расстояние между зарядами',
    },
    {
        title: 'r',
        description: 'радиус',
    },
    {
        title: 'q',
        description: 'заряд',
    },
    {
        title: 'a',
        description: 'ускорение',
    },
    {
        title: 'E',
        description: 'характеристика электрического поля',
    },
    {
        title: 'Wp',
        description: 'потенциальная энергия поля',
    },
    {
        title: 'C',
        description: 'электрическая емкость',
    },
    {
        title: 'Б',
        description: 'плотность заряда',
    },
    {
        title: 'Wc',
        description: 'энергия конденсатора',
    },
    {
        title: 'ф',
        description: 'потенциал поля',
    },
    {
        title: 'ф1',
        description: 'потенциал поля 1',
    },
    {
        title: 'ф2',
        description: 'потенциал поля 2',
    },
    {
        title: 'T',
        description: 'температура',
    },
    {
        title: 'T1',
        description: 'температура 1',
    },
    {
        title: 'T2',
        description: 'температура 2',
    },
    {
        title: 'e',
        description: 'диэлектрическая постоянная',
    },
    {
        title: 'I',
        description: 'сила тока',
    },
    {
        title: 'U',
        description: 'напряжение',
    },
    {
        title: 'R',
        description: 'сопротивление',
    },
    {
        title: 'Pуд',
        description: 'удельное сопротивление',
    }
];
//===========================================================
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

    //========================================================================================

    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const previousTitles = useMemo(() => {
        return command.map(({title}) => title);
    }, [command]);
    const previousDescriptions = useMemo(() => {
        return command.map(({description}) => description);
    }, [command]);

    const titleSuggestions = useAutoSuggest(
        titleInput, previousTitles
    );
    const descriptionSuggestions = useAutoSuggest(
        descriptionInput, previousDescriptions
    );

    const handleTitleInput = useCallback(e => {
        setTitleInput(e.target.value);
    }, []);
    const handleDescriptionInput = useCallback(e => {
        setDescriptionInput(e.target.value);
    }, []);
    //========================================================================================

    return (
        <div>
            <PanelHeader>Калькулятор</PanelHeader>
            <FormLayout>

                <FormLayoutGroup top="Дано:" bottom="Данные могут быть введены только в верном формате" className="add">
                    <Input
                        type="text"
                        name="initData"
                        placeholder="Введите данные"
                        value={titleInput}
                        className="add"
                        onChange={handleChange}
                        onChange={handleTitleInput}
                    />
                    <Text weight="regular" style={{marginBottom: 16}}>{titleSuggestions}</Text>
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