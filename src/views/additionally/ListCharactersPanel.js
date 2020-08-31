import React from 'react'
import {PanelHeader, PanelHeaderBack, Search, Div, Card, CardGrid, Title, Text} from "@vkontakte/vkui"


function ListCharacters(props) {
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
            <PanelHeader separator={false} left={<PanelHeaderBack onClick={() => props.setActivePanel('more')}/>}>
                Обозначения
            </PanelHeader>
            <Search/>
            <CardGrid style={styles.CardGrid}>
                <Card size="l">
                    <Div style={styles.div}>
                        <Title level="3">Список обозначений:</Title>
                        <Text weight="regular">
                        Fтяж => сила тяжести<br/>
                        F => сила<br/>
                        Fупр => упругая сила<br/>
                        Fуп => упругая сила<br/>
                        Fтр => сила реакции<br/>
                        Fкул => сила кулона<br/>
                        Fкл => сила кулона<br/>
                        Fарх => Архимедовое усилие<br/>
                        N => сила реакции опоры<br/>
                        m_ => коэффициент трения<br/>
                        m => вес<br/>
                        g => гравитация<br/>
                        t => время<br/>
                        l => длина<br/>
                        s => перемещение<br/>
                        s1 => перемещение 1<br/>
                        s2 => перемещение 2<br/>
                        V => обьем<br/>
                        S => площадь<br/>
                        k => коэффициент твердости<br/>
                        v => скорость<br/>
                        v1 => скорость 1<br/>
                        v2 => скорость 2<br/>
                        d => расстояние<br/>
                        d1 => расстояние 1<br/>
                        d2 => расстояние 2<br/>
                        p_ => импульс<br/>
                        p => давление<br/>
                        _p => плотность<br/>
                        h => высота<br/>
                        A => работа<br/>
                        Апол => полезная работа<br/>
                        Асов => полная работа<br/>
                        P => мощность<br/>
                        n => КПД<br/>
                        Ек => кинетическая энергия<br/>
                        Eп => потенциальная энергия<br/>
                        Q => тепло<br/>
                        c => теплоемкость<br/>
                        с => теплоемкость<br/>
                        q_ => теплотворная способность<br/>
                        L_ => теплота плавления<br/>
                        L => теплота испарения<br/>
                        x => сжатие<br/>
                        r_ => расстояние между зарядами<br/>
                        r => радиус<br/>
                        q => заряд<br/>
                        a => ускорение<br/>
                        E => характеристика электрического поля<br/>
                        Wp => потенциальная энергия поля<br/>
                        C => электрическая емкость<br/>
                        Б => плотность заряда<br/>
                        Wc => энергия конденсатора<br/>
                        ф => потенциал поля<br/>
                        ф1 => потенциал поля 1<br/>
                        ф2 => потенциал поля 2<br/>
                        T => температура<br/>
                        T1 => температура 1<br/>
                        T2 => температура 2<br/>
                        е => диэлектрическая постоянная<br/>
                        I => сила тока<br/>
                        U => напряжение<br/>
                        R => сопротивление<br/>
                        Pуд => удельное сопротивление<br/>
                        </Text>
                    </Div>
                </Card>
            </CardGrid>
        </div>

    )

}


export default ListCharacters
