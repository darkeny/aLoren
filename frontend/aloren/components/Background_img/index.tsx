import Head from 'next/head';
import styles from '../../styles/Background_img.module.css';

type Apparence = 'bg_sm' | 'bg_lg'

type Props = {
    apparence: Apparence
}

export default function (props: Props): JSX.Element {
    return states[props.apparence](props)
}

const states = {
    bg_sm: Bg_sm,
    bg_lg: Bg_lg,
}

function Bg_sm(props: Props): JSX.Element {
    return (
        <>

        </>
    )
}

function Bg_lg(props: Props): JSX.Element {
    return (
        <>
            <div className={styles.board_img_background_lg}/>
        </>
    )
}