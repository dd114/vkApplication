import React from 'react';
import {Card} from "@vkontakte/vkui";

function Cards(props) {
    const styles = {
        div: {
            textAlign: 'center',
            paddingTop: 5,
            paddingBottom: 5
        }
    }

    return (
        <Card size="s">
            <div style={styles.div}>{props.item.initData}</div>
        </Card>
        )

}

export default Cards