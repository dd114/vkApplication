import React from 'react'
import {Card, CardGrid, Div, PanelHeader, PanelHeaderBack, Link, Title, Text} from "@vkontakte/vkui"


function AboutApplication(props) {
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
                О приложении
            </PanelHeader>

            <CardGrid style={styles.CardGrid}>
                <Card size="l">
                    <Div style={styles.div}>
                        <Title level="3">О нас:</Title>
                        <Text weight="regular">
                        <Link href="https://github.com/dd114/vkApplication" target="_blank">Мы на GitHub</Link><br/>
                        </Text>
                    </Div>
                </Card>
            </CardGrid>
        </div>

    )

}


export default AboutApplication
