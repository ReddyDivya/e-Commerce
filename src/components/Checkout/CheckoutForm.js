import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from "@material-ui/core";
import AddressForm from "./AddressForm2";
import PaymentForm from "./PaymentForm";
import Confirmation from "./Confirmation";

const steps = ["Shipping address", "Payment details"];

export default function CheckoutForm() {

  const [activeStep, setActiveStep] = useState(0); //active steps (0, 1, 2)

  const Form = () => {
    /*
    0 - Shipping address
    1 - Payment details
    2 - Confirmation
    */
    return activeStep === 0 ? <AddressForm /> : <PaymentForm />
  }
  return (
    <>
      <main className="w-2/4 m-10 font-bold">
        <Paper>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep}>
            {
              steps.map((step) => (
                <Step key={step}>
                  <StepLabel>
                    {step}
                  </StepLabel>
                </Step>
              ))
            }
          </Stepper>
          {
            activeStep === steps.length ? <Confirmation /> : <Form />
          }
        </Paper>
      </main>
    </>
  )
}
