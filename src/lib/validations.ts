import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = z.infer<typeof schema>;

export const userSchema = z.object({
   name: z.string().min(2, 'Name must be at least 2 characters long'),
   email: z.string().email('Invalid email address'),
});

export const apiResponsesSchema = z.object({
   success: z.boolean(),
   data: z.any().optional(),
   error: z.string().optional(),
});


const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

// export default function MyForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('name')} placeholder="Name" />
//       {errors.name && <span>{errors.name.message}</span>}

//       <input {...register('email')} placeholder="Email" />
//       {errors.email && <span>{errors.email.message}</span>}

//       <button type="submit">Submit</button>
//     </form>
//   );
// }


export type User = z.infer<typeof userSchema>;
export type ApiResponse = z.infer<typeof apiResponsesSchema>;