import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export default function StudentLogin() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data) {
        // Do something with the form values.
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Add your form fields here */}
            </form>
        </div>
    );
}