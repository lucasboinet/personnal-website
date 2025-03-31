import { SendContactEmail } from "@/actions/SendContactMail";
import { sendContactEmailSchema, SendContactEmailSchemaType } from "@/schema/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const form = useForm<SendContactEmailSchemaType>({
    resolver: zodResolver(sendContactEmailSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: SendContactEmail,
    onSuccess: () => {
      toast.success('Message envoyé', { id: "contact-form" });
      form.reset()
    },
    onError: (error: any) => {
      toast.error(error.message, { id: "contact-form" });
    },
  });

  const onSubmit = useCallback((values: SendContactEmailSchemaType) => {
    toast.loading("Envoie du message...", { id: "contact-form" });
    mutate(values);
  }, [mutate])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex gap-1 items-center'>
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nom complet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='flex gap-1 items-center'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="votre@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='flex gap-1 items-center'>
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none min-h-44"
                  placeholder="Décrivez votre projet"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full" disabled={isPending}>
          {!isPending && 'Envoyer le Message'}
          {isPending && (
            <>
              <Loader2Icon className="animate-spin" />
              Envoie en cours
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}