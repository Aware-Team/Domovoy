﻿import React from "react";
import {AnimatePresence} from "framer-motion";
import {useOutlet} from "react-router-dom";

export interface Props {

}

function CompanyAdminLayout(props: Props) {
    const Outlet = useOutlet()
    
    return <>
        <AnimatePresence exitBeforeEnter>
            {Outlet && React.cloneElement(Outlet, {key: location.pathname.split("create")[0].split("details")[0]})}
        </AnimatePresence>
        
        <nav>Тут навбар</nav>
    </>
}

export default CompanyAdminLayout;