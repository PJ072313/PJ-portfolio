import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";


import './Additions.css'

import { SingleBlog } from '../../components'
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import { headerData } from '../../data/headerData'


function Additions() {
    const { theme } = useContext(ThemeContext);
    return (
        <div>let me check if it is working</div>
    )
}

export default Additions