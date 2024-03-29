{/*only here the backend(blockchain) and frontend will get combine*/}
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { ethers } from 'ethers';

import { money } from '../assets';
import { CustomButton } from '../components';
import {checkIfImage} from '../utils';


const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setform] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });


  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      
    </div>
  )
}

export default CreateCampaign