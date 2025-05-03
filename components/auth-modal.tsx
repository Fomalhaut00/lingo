import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import { LoginFlow } from "./auth/login-flow"
import { SignupForm } from "./auth/signup-form"
import { RecoveryModal } from "./auth/recovery-modal"
import { Step } from "./auth/auth-type"
import { FormSchema, formSchema } from "./auth/auth-schema"


type Props = {
  children: React.ReactNode;
  mode: 'signup' | 'login' | 'back'; // 新增模式参数
};

export default function LoginModal({ children, mode: initialMode }: Props) {
  const [mode, setMode] = useState(initialMode);
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);
  const [currentStep, setCurrentStep] = useState<Step>('email')
  
   // 1. Define your form.
   const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })
  // const form = useForm()
  // 2. Define a submit handler.
  function onSubmit(values: FormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  const stepTitles = {
    email: 'Sign In',
    password: 'Enter your password',
    verification: 'Verify your email',
    help: 'Get help',
    forgot: 'Forgot Password?',
    another: 'Use another method',
    check: 'Check your email'
  }
 

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
       <DialogContent className="sm:max-w-[425px]">

        {mode === 'signup' && (
          <SignupForm form={form} onSubmit={onSubmit}/>
        )}
        
        {mode === 'login' && (
          <LoginFlow currentStep={currentStep} form={form} stepTitles={stepTitles} onSubmit={onSubmit}/>
        )}

        {mode === 'back' && (
          <RecoveryModal currentStep={currentStep}/>
        )}
      </DialogContent>
    </Dialog>
  )
}
