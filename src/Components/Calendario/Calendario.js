import React from 'react'

import HeaderCalendario from '../HeaderCalendario/HeaderCalendario'
import DaysTable from '../DaysTable/DaysTable'

export default function Calendario(){
    return(
        <table className="calendario">
            <HeaderCalendario/>
            <DaysTable/>
        </table>
    )
}