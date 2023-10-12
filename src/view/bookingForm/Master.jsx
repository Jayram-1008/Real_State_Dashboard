import React, {useState} from 'react'
import CustomerDetails from './CustomerDetails'
import Nominee from './Nominee'
import PaymentDetails from './PaymentDetails'
import PlotDetails from './PlotDetails'
import ThankyouForm from './ThankyouForm'
import {  Box, Button, Paper } from '@mui/material';
import {  Outlet, useNavigate } from 'react-router-dom'


const Master = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // Initialize with default or empty data
        associate_id: "",
        branch: "",
        product_name:'',
        customer_first_name:'',
        customer_last_name:'',
        father_first_name:'',
        father_last_name:'',
        address:'',
        age:'',
        date_of_birth:'',
        occupation:'',
        email:'',
        mobile_no:'',
        nominee_first_name:'',
        nominee_last_name:'',
        nominee_date_of_birth:'',
        relation:'',
        plot_number:'',
        khasra_number:'',
        mauza:'',
        phh_number:'', //may be change
        square_feet:'',
        size:'',
        rate:'',
        total_amount:'',
        booking_mode:'',
        token_amount:'',
        discount_amount:'',
        remark:'',
        token_amount_date:'',
      });

      const clearFormData = () => {
        setFormData({
          associate_id: "",
          branch: "",
          product_name: "",
          customer_first_name: "",
          customer_last_name: "",
          father_first_name: "",
          father_last_name: "",
          address: "",
          age: "",
          date_of_birth: "",
          occupation: "",
          email: "",
          mobile_no: "",
          nominee_first_name: "",
          nominee_last_name: "",
          nominee_date_of_birth: "",
          relation: "",
          plot_number: "",
          khasra_number: "",
          mauza: "",
          phh_number: "", // You may set the default value for other properties as needed
          square_feet: "",
          size: "",
          rate: "",
          total_amount: "",
          booking_mode: "",
          token_amount: "",
          discount_amount: "",
          remark: "",
          token_amount_date: "",
        });
      };
      

    const [currentStep, setCurrentStep] = useState(1);
    
    const handleNext = (data) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          ...data,
        }));
    
        // Increment the step
        if (currentStep < 6) {
          setCurrentStep(currentStep + 1);
        }
        navigate(`form${currentStep+1}`)
    };

    const handlePrevious = () =>{
        if(currentStep > 1 ){
            setCurrentStep(currentStep -1 )
        }
        navigate(`form${currentStep-1}`)
    }

    const handleHold = () =>{
        
        // Here you have all details of customer, payment, nominee and plots 
        // use as per needed

        // here call an api to send the form data 
        console.log(formData);
        console.log("cleared")
        handleNext();
        clearFormData();
    }

    let stepComponent;
    switch(currentStep){
        case 1:
            stepComponent = (
                <CustomerDetails
                    formData = {formData}
                    setFormData = {setFormData}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />
            );
            break;
        case 2:
            stepComponent = (
                <Nominee
                    formData = {formData}
                    setFormData = {setFormData}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />
            );
            break;
        case 3:
            stepComponent = (
                <PaymentDetails
                    formData = {formData}
                    setFormData = {setFormData}
                    handleNext={handleNext}
                    handlePrevious={handlePrevious}
                />
            );
            break;
        case 4:
            stepComponent = (
                <PlotDetails
                    formData = {formData}
                    setFormData = {setFormData}
                    handleNext={handleNext}
                    handleHold= {handleHold}
                    handlePrevious={handlePrevious}
                />
            );
            break;
        case 5:
            stepComponent = (
                <ThankyouForm
                    
                />
            );
            break;
       
        default:
            break;
    }

  return (
    <>
        <Box>
            <Outlet context={{formData, setFormData, handleNext, handlePrevious, handleHold}}/>
            {/* {stepComponent}             */}
            {/* <ThankyouForm/> */}
        </Box> 
    </>
  )
}

export default Master