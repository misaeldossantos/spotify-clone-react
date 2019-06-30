import React from 'react'
import {StyledView} from "../base/View";
import dayjs from 'dayjs'
import {observer} from 'mobx-react-lite'
import * as Icons from 'react-icons/io'
import {RangeIndicator} from "../common/RangeIndicator";

const timeZero = dayjs().set("minute", 0).set("hour", 0).set("second", 0);

function formatTime(secs) {
    return dayjs(timeZero).set("second", secs).format(secs >= 3600 ? "h:mm:ss" : "m:ss")
}

export const PlayerIndicator = observer(({actions, status, currentSg = 0, total = 0, setCurrent}) => {

    return <Container>
        <Controls>
            {/*<Icons.IoIosPlay size={25}/>*/}
            <Icons.IoIosSkipBackward size={18}/>
            <CenterControl size={18}>{status === 'pause' ? <Icons.IoIosPlay size={25}/> :
                <Icons.IoIosPause size={20} />}</CenterControl>
            <Icons.IoIosSkipForward size={18}/>
            {/*<Icons.IoIosPlay size={25}/>*/}
        </Controls>

        <TimeIndicator>

            <span>{formatTime(currentSg)}</span>

            <RangeIndicator value={currentSg} total={total} setValue={setCurrent}/>

            <span>{formatTime(total)}</span>

        </TimeIndicator>

    </Container>

});

const Controls = StyledView.attrs({
    direction: 'row',
    internalDistance: 20
})(props => `
    justify-content: space-between;
    align-items: center;
    overflow: visible;
    
    > * {
        color: gray;
        transition: all 0.5s;
        cursor: pointer;
    }
    
    > *:hover {
        color: white;
    }
    
    margin-bottom: 10px;
`);

const Container = StyledView.attrs()`
    align-items: center;
    justify-content: space-between;
    overflow: visible;
    width: 40%;
`;

const TimeIndicator = StyledView.attrs({
    direction: 'row',
    internalDistance: 20
})`
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const CenterControl = StyledView(({size = 0, padding = 6}) => `
    overflow: visible;
    padding: ${padding}px;
    border-radius: ${size + padding/2}px;
    justify-content: center;
    align-items: center;
    flex: 1;
    border: 1px solid;
    width: ${size}px;
    height: ${size}px;
    
    :hover {
        transform: scale(1.12);
    }
`);