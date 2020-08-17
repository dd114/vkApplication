import React from 'react'
import {Card, CardGrid, Div, PanelHeader, PanelHeaderBack, Text, Title} from "@vkontakte/vkui"


function HelpPanel(props) {
    const styles = {
        div: {
            color: 'black'
        },
        p: {
            fontWeight: 'bold'
        },
        CardGrid: {
            paddingTop: 10
        }
    }

    return (
        <div>
            <PanelHeader separator={true} left={<PanelHeaderBack onClick={() => props.setActivePanel('more')}/>}>
                Помощь
            </PanelHeader>
            <CardGrid style={styles.CardGrid}>
                <Card size="l">
                    <Div style={styles.div}>
                        <Title level="3">Как пользоваться приложением?</Title><br/>
                        <Text weight="regular">
                            1) Вводить данные по образцу Дано ... Найти<br/>
                            2) Регистр ключевых слов "дано, найти" не имеет значения, а обозначений - да. Например А - работа, а - ускорение.<br/>
                            3) При записи десятичных дробей, успользуйте точку! Например: 6.25, а не 6,25<br/>
                            4) Допускается отсутствие знака "=" и запятых<br/>
                            5) В пункте "найти" допустимо только 1 значение! Нельзя искать сразу несколько ( в будущем если будет не лень - добавлю )<br/>
                            6) Первая буква пишется на английском, а уточнение на русском. Пример: Fтр, Fарх, Eк, Еп<br/>
                            Исключение: потенциал - "ф" (см. пост ниже)<br/>
                            7) Все измерения должны быть даны в системе СИ ( время в секундах, расстояние в метрах, масса в килограммах и тд )<br/>
                        </Text>
                    </Div>
                </Card>
            </CardGrid>
        </div>

    )

}


export default HelpPanel
