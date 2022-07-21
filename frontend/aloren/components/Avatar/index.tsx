import Head from "next/head";
import Link from "next/link";

type Avatar = 'small' | 'big'

type Props = {
    avatar: Avatar;
}

const avatars = {

    small: SmallAvatar,
    big: BigAvatar,
}

export default function (props: Props): JSX.Element {
    return avatars[props.avatar](props)
}

function SmallAvatar(props: Props): JSX.Element {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/globals.css" />
            </Head>
            <Link href={"/darken"}><img src="/img/person-circle.svg" id="mini-perfil" className="order-lg-3 avatar-small me-2" /></Link>
        </>
    )
}
function BigAvatar(props: Props): JSX.Element {
    
    function getValue() {
        let file = document.getElementById("perfil");
        let img = document.getElementById("image");
        let mini = document.getElementById("mini-perfil");

        file?.addEventListener('change', (event) => {

            try {
                let url = URL.createObjectURL(event.target.files[0]);
                img.src = url;
                mini.src = url;

            } catch (err) {

            }

        })
    }
    return (
        <>
            <div className="avatar">
                <input type="file" id="perfil" onClick={getValue} name="perfil" className="hidden-all" accept=".jpg,.svg,.png,.svg" />

                <div><img id="image" /><label htmlFor="perfil"><img className="icon" width="20px" src="/img/emoji-smile.svg" /></label></div>
            </div>
        </>
    )
}