import { toastCore } from "@/lib/toast";
import apiContact from "@/services/contact/contact.services";
import { IValueFormContact } from "@/types/contact/IContact";
import { useMutation } from "@tanstack/react-query";
import { UseFormReturn } from "react-hook-form";

export const usePostContact = () => {
    const contactMutation = useMutation({
        mutationFn: (data: FormData) => apiContact.postContact(data),
    });

    const onSubmit = (data: IValueFormContact, form: UseFormReturn<IValueFormContact>) => {
        let formData = new FormData();
        formData.append("full_name", data.name);
        formData.append("email", data.email);
        formData.append("phone_number", data.phone);
        formData.append("company", data.company);
        formData.append("items", data.products);
        formData.append("budget", data.budget);
        formData.append("content", data.note ?? "");
        contactMutation.mutate(formData, {
            onSuccess: (res: any) => {
                if (res?.data?.result) {
                    toastCore.success(res?.data?.message);
                    form.reset();
                    return;
                }
                toastCore.error(res?.data?.message);
            },
            onError: (err) => {
                throw err;
            },
        });
    };

    return { onSubmit };
};
