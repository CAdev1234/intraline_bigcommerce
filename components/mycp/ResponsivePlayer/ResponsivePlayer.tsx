import { FC } from "react";
import ReactPlayer from "react-player/youtube";
import cn from 'classnames'
import s from './ResponsivePlayer.module.css'

interface ResponsivePlayerProps {
    url?: string
}

const ResponsivePlayer:FC<ResponsivePlayerProps> = ({url}) => {
    const rootClassName = cn(
        s.root
    )
    return (
        <div className={rootClassName}>
            <ReactPlayer
                className={s.react_player}
                url={url}
                width='100%'
                height='100%'
                muted={true}
                playing={true}
                loop={true}
            />
        </div>
    )
}

export default ResponsivePlayer