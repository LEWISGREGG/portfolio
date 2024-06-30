"use client"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "sonner";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Email from "./Email";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 2,
      delayChildren: 1.5,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function ContactPage() {

  const [text, count] = useTypewriter({
    words: [
        "Hello You !",
        "<Contact Me For Any Question ./>",
    ],
    loop: true,
    delaySpeed: 2000,
    })

  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {

    const toastId = toast.loading("Sending your message, please wait....")

    emailjs
    .send(
      'service_0g8hdxo', 
      'template_vvmry63', 
      params,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
          throttle: 5000, 
                  },
            }
          )
          .then (
            () => {
              toast.success("Success!", {
                id: toastId,
                duration: 5000,
              });
            },
            (error) => {
              toast.error("Failed!", {
                id: toastId,
                duration: 5000,
              });
            }
          )
        }
        

        const onSubmit = (data) => {
          const templateParams = {
            to_name: "Serhio",
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
          };
      
          sendEmail(templateParams);
        };

return (
  
  <>

  <Toaster richColors={true} />

<article className="relative h-full w-full flex flex-col items-center justify-center space-y-8 mx-auto">

<div className="flex flex-col items-center justify-center space-y-6 w-3/4 mt-16">

<motion.h1 className="text-red-500 dark:text-green-500 font-semibold text-center text-4xl capitalize scroll-px-10"
variants={container}
initial="hidden"
animate="show"
>
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="amber"/>
</motion.h1> 

<motion.p 
variants={container}
initial="hidden"
animate="show"
className="text-center my-8 text-slate-900 dark:text-white font-light">I am <span className="text-red-600 dark:text-green-600 font-extrabold text-xl">Professional Engineer</span> is proud to provide commercial and residential telco 
engineering consulting services. <br/>
Please do not hesitate to contact me by using the contact form on this page.</motion.p>
</div>

<Email/>




</article>
</>
  )
}
