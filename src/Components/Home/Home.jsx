import React from 'react'
import styles from './Home.module.css'
import Navbar from './Navbar'
import { WordData } from './WordData'
import BoltIcon from '@mui/icons-material/Bolt';
import {Link} from 'react-router-dom'
import FormDialog from './FormDialog';



export const Home = () => {



  return (
    <div>


    <div className={styles.Wrapper}>

        {/* <button className={styles.fixedButton}> <BoltIcon /> </button> */}


        <div className={styles.Navbar}>
            <Navbar />
            
            <div className={styles.Wordbar}>
                <p style={{textAlign:"left", fontSize:"14px",padding:"10px 0 0 25px",margin:"0"}}>Word List</p>
                <hr />
            </div>
        </div>

        <div className={styles.results}>
        


           <Link style={{textDecoration:"none", color:"black"}} to={'/result'}> <div className={styles.wordData}>
                <WordData />
            </div></Link>

            <FormDialog />


        </div>

    </div>


    </div>
  )
}
