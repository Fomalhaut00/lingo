import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Step } from "./auth-type"
export const RecoveryModal = ({ currentStep }: { currentStep: Step } ) => {
  return(
   <>
       <DialogHeader>
         <DialogTitle>
           <span className="span-blue-500 font-normal">Back</span>
         </DialogTitle>
         <DialogDescription>
           <span className="span-black span-lg font-semibold leading-none tracking-tight mt-4">Forgot Password?</span>
         </DialogDescription>
       </DialogHeader>
       <div className="grid gap-4 py-4">
       {currentStep === 'forgot' && (
          <>
          <div>Reset your password</div>
          <div>Or, sign in with anoher method.</div>
          <div>Email code to </div>
          </>
         )}
         
         {currentStep === 'another' && (
           <div>Email code to </div>
         )}
         
         {currentStep === 'help' && (
           <div>Email support </div>
         )}
       </div>
       <DialogFooter>
         {currentStep !== 'help' && (
           <div className="span-blue-500">Get help</div>
         )}
       </DialogFooter>
   </>
  ) 
 }
