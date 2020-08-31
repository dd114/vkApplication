import React from 'react'
import {Card, Text} from "@vkontakte/vkui"

function Cards(props) {
    const styles = {
        div: {
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5,
            // backgroundColor: 'red',
            borderColor: 'red'
        }
    }

    return (
        <Card size="s">
            <div style={styles.div}><Text weight="regular">{props.item.initData}</Text></div>
        </Card>
        )

}

export default Cards