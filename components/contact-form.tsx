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
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 h-full w-full">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem
                  data-aos="fade-up"
                  data-aos-delay="550"
              >
                <FormLabel className='flex gap-1 items-center text-sm'>
                    Nom complet
                </FormLabel>
                <FormControl>
                  <Input placeholder="ex: John Doe, Google, ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem
                  data-aos="fade-up"
                  data-aos-delay="600"
              >
                <FormLabel className='flex gap-1 items-center text-sm'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="exemple@email.com" {...field} />
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
            <FormItem
                className="flex flex-col h-full"
                data-aos="fade-up"
                data-aos-delay="650"
            >
              <FormLabel className='flex gap-1 items-center text-sm'>
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="resize-none min-h-[200px] lg:h-full"
                  placeholder="Votre message..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
            type="submit" className="w-fit" disabled={isPending}
            data-aos="fade-up"
            data-aos-delay="750"
        >
          {!isPending && 'Discutons de votre projet'}
          {isPending && (
            <>
              <Loader2Icon className="animate-spin" />
              Envoie en cours...
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}