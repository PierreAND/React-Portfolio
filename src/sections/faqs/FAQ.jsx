import React from 'react'
import Card from "../../components/Card"
import {AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'

const FAQ = ({faq}) => {

  const [toggle, setToggle] = useState(false);
  return (
    <Card className="faq">
      <div>
        <h5 className='faq__question'>{faq.question}</h5>
        <button className='faq__icon' onClick={()=> setToggle(prev =>!prev)} >
         {toggle ? <AiOutlineMinus/> : <AiOutlinePlus/> }
        </button>
      </div>
     {toggle && <p className='faq__answer'>{faq.answer}</p> }

    </Card>
    )
}

export default FAQ