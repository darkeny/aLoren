import Head from "next/head";

const Copy = () => {
    return (
        <>
        <Head>
            <link rel="stylesheet" href="css/globals.css" />
        </Head>
            <div className="fixed-b0">
                <div className="container">
                    <div className="py-4 text-center">
                        <p className="text-muted">&copy; 2020-2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Copy;