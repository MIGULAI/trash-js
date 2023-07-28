import { ReactElement } from 'react'
import classes from './SiteWrapper.module.css'

interface ISiteWrapper{
    children: ReactElement
}

const SiteWrapper =({children}:ISiteWrapper) => {
    return (
        <div className={classes.wraper}>
            {children}
        </div>
    )
}

export default SiteWrapper