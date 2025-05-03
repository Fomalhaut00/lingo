import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const CustomFormField = ({
  control,
  name,
  label,
  type = "text"
}: {
  control: any
  name: string
  label: string
  type?: string
}) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type={type} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)