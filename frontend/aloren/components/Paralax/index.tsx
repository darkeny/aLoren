import Head from 'next/head';
import styles from '../../styles/Paralax.module.css';

type Apparence = 'paralax_sm' | 'paralax_lg' 

type Props = {
    apparence: Apparence
}

export default function (props: Props): JSX.Element {
    return states[props.apparence](props)
}

const states = {
    paralax_sm: Paralax_sm,
    paralax_lg: Paralax_lg,
}

function Paralax_sm(props: Props): JSX.Element {
    return (
        <>
            <div className={styles.board_img_sm} />
        </>
    )
}

function Paralax_lg(props: Props): JSX.Element {
    return (
        <>
            <div className={styles.board_img_lg} />
        </>
    )
}

