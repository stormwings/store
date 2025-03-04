import { useProfileForm } from "./../hooks/userProfileForm";

export function meta() {
  return [
    { title: "Mis datos" },
    { name: "description", content: "Formulario de datos del usuario." },
  ];
}

export default function Profile() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useProfileForm();

  return (
    <div className="container mx-auto px-1 py-4 font-sans">
      <h2 className="text-xl font-bold text-gray-600 mb-4">Mis datos</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium text-sm mb-2 leading-[19.07px]">
              Nombre <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 text-[14px] leading-[19.07px] focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium text-sm mb-2 leading-[19.07px]">
              Email <span className="text-red-800">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 text-[14px] leading-[19.07px] focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium text-sm mb-2 leading-[19.07px]">
              Teléfono <span className="text-red-800">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 text-[14px] leading-[19.07px] focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-green-500"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="w-full bg-[#639605] text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 disabled:bg-gray-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
