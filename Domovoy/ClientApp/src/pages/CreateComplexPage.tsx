﻿import {useStorage} from "./CompanyAdminIndexPage";
import {useState} from "react";
import {upVariants} from "../animations";
import { motion } from "framer-motion";
import {ConstructionCompanyService} from "../api";

export interface Props {

}

function CreateComplexPage(props: Props) {
    const storage = useStorage()
    if (!storage) return <></>
    
    const [name, setName] = useState("")
    
    return  <motion.div variants={upVariants} initial={'init'} animate={'show'} exit={'hide'} className={'layout'}>
        Создание комплекса
        <input value={name} onChange={e => setName(e.target.value)} placeholder={"Название"}/>
        <button onClick={() => {
            ConstructionCompanyService.postApiConstructioncompanyComplexes({name}).finally(() => {
                storage?.reload()
            })
        }}>Создать</button>
    </motion.div>
}

export default CreateComplexPage;