import { FunctionComponent } from "react"
import Head from "next/head"
import "nes.css/css/nes.min.css"

interface LayoutProps {
    title: string
}

const Layout: FunctionComponent<LayoutProps> = ({ title, children }) => {
    return (
        <div>
            <Head>
                <link href='https://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' />
                <title>{title}</title>
            </Head>

            <div>{children}</div>
        </div>
    )
}

export default Layout
