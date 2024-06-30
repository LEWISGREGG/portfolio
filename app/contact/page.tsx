"use client"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "sonner";
import Transition from "../components/Transition";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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

<motion.form
variants={item}
initial="hidden"
animate="show"
onSubmit={handleSubmit(onSubmit)} className='max-w-lg w-full flex flex-col items-center justify-center space-y-4'>
      <input 
            placeholder="Name"
            type="text" {...register("name", {
            required: "This field is required!",
            minLength: {
            value: 3,
            message: "Name should be atleast 3 characters long.",
            },
          })} 
          className='w-full border border-red-600 p-2 rounded-md shadow-lg hover:shadow-red-600 dark:border-green-600 dark:hover:shadow-green-600 text-foreground focus:outline-none focus:ring-2 focus:ring-red-500/50'/>
      {
      errors.name && <span className='inline-block self-start text-red-500'>{errors.name.message}</span>
      }


      <input type="email" placeholder="Email" {...register("email", { required: "This field is required!" })} 
      className='w-full border border-red-600 p-2 rounded-md shadow-lg hover:shadow-red-600 dark:border-green-600 dark:hover:shadow-green-600 text-foreground 
      focus:outline-none focus:ring-2 focus:ring-red-500/50' />
      {
      errors.email && <span className='inline-block self-start text-red-500'>{errors.email.message}</span>
      }


      
      <textarea placeholder="Message"
      {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 200,
              message: "Message should be less than 200 characters",
            },
            minLength: {
              value: 20,
              message: "Message should be more than 20 characters",
            },
          })} 
      className='w-full border border-red-600 p-2 rounded-md  text-foreground 
      focus:outline-none focus:ring-2 focus:ring-red-500/50 shadow-2xl hover:shadow-red-600 dark:border-green-600 dark:hover:shadow-green-600'/>
      {errors.message && (
          <span className="inline-block self-start text-red-500">
            {errors.message.message}
          </span>
        )}



      <input 
      value="Send your message!"
      className='px-10 py-4 rounded-md shadow-lg border overflow-hidden border-red-600 border-solid group 
      bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 
      hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
      relative bg-white dark:bg-gray-900 group-hover:bg-opacity-0 cursor-pointer transition-all duration-500 ease-in-out' 
      type="submit" />
</motion.form>

</article>
</>
  )
}
