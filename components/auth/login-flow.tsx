import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Form
} from "@/components/ui/form"

import { CustomFormField } from "@/components/common/custom-form-field"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Step } from "./auth-type"
import { FormSchema } from "./auth-schema"

export const LoginFlow = ({ 
  form,
  currentStep,
  onSubmit,
  stepTitles
}: {
  form: ReturnType<typeof useForm<FormSchema>>
  currentStep: Step
  onSubmit: (values: FormSchema) => void
  stepTitles: Record<Step, string>
}) => {
  return(
    <>
      <DialogHeader>
        <DialogTitle>
          <span>{stepTitles[currentStep]}</span>
        </DialogTitle>
        <DialogDescription>
          <span>to continue to lingo.</span>
        </DialogDescription>
      </DialogHeader>
      
      <div className="grid gap-4 py-4">
        {
          currentStep === 'email' && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomFormField 
                control={form.control}
                name="username"
                label="Username"
              />
                <Button type="submit" className="w-full bg-[#0d33bf] span-white">CONTINUE</Button>
              </form>
            </Form>
          )
        }
         {
          currentStep === 'password' && (
            <>
              <div>1111111@qq.com</div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <CustomFormField
                    control={form.control}
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <Button type="submit" className="w-full bg-[#0d33bf] span-white">CONTINUE</Button>
                </form>
              </Form>
            </>
          )
        }
        {
          currentStep === 'check' && (
            <>
              <div>1111111@qq.com</div>
              <div>Verification code</div>
              <div> Enter the verification code sent to your email address</div>
            </>
          )
        }
      </div>
      <DialogFooter>
        <div>Use another method</div>
      </DialogFooter>
    </>
)}