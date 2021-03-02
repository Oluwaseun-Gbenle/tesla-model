import React from 'react'
import './item.css'
import Button from './button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({desc,descLink,title,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twobtns,first}) => {
    return (
       <div className='item' style={{
           backgroundImage:`url(${backgroundImg})`
       }}>

<div className='item-container' >
<div className='item-text' >
<p>{title}</p>
<div className='text-descr' >
<a href={descLink} style={{color:'#393c41',cursor:'pointer',textDecoration:'none'}}>{desc}</a>
</div>
</div>

<div className='item-base' >
<div className='base-btns' >
<Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/>
{twobtns && (
   <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink}/> 
)}
</div>
 {first && (
    <div className='item-expand'>
      <ExpandMoreIcon  style={{ fontSize: '50px' }}/>
    </div>
)}
</div>
</div>




        </div>
    )  
}

export default Item