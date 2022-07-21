import Head from "next/head";

type Stamps = 'active' | 'disabled'

type Props ={
    stamps: Stamps
}

export default function (props:Props):JSX.Element{
    return states[props.stamps](props)
}

const states = {
    active: Active,
    disabled: Disabled,
}

function Active(props:Props):JSX.Element{
    return(

        <>
            <span><img width="19px" src="/img/verified.png" /></span>
        </>
    )
}

function Disabled(props:Props): JSX.Element{
    return(

        <>
            
        </>
    )
}