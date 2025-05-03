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

export const SignupForm = ({ 
  form,
  onSubmit,
}: {
  form: ReturnType<typeof useForm<FormSchema>>
  onSubmit: (values: FormSchema) => void
}) => {
  return(
    <>
      <DialogHeader>
        <DialogTitle>
          <span>Create your account</span>
        </DialogTitle>
        <DialogDescription>
          <span>to continue to lingo.</span>
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomFormField 
              control={form.control}
              name="username"
              label="Username"
            />
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              type="password"
            />
            <Button type="submit" className="w-full bg-[#0d33bf] span-white">CONTINUE</Button>
          </form>
        </Form>
      </div>
      <DialogFooter>
        <div>Have an account? Sign in</div>
      </DialogFooter>
      </>
)}