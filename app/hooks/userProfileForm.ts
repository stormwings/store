import { useState, useEffect } from "react";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
}

export const useProfileForm = () => {
  const [formData, setFormData] = useState<ProfileData>({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Partial<ProfileData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const validate = () => {
    let newErrors: Partial<ProfileData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!/^\d{9,15}$/.test(formData.phone)) {
      newErrors.phone = "El teléfono debe tener entre 9 y 15 dígitos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      localStorage.setItem("profileData", JSON.stringify(formData));
      console.log("Datos guardados en localStorage:", formData);
    }

    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
