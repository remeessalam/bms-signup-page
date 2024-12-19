import { useForm } from "react-hook-form";
import Header from "../components/Header";
import FileUpload from "../components/FileUpload";
import SignaturePad from "../components/SignatureCanvas";
import gif from "../assets/gif/signup-gif.gif";
import Footer from "../components/Footer";
import { useEffect } from "react";
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your server
    if (!data.signature) {
      console.log(data, "asdfjaksdfklajdsf");
      alert("Please provide a signature");
      return;
    }
    // Process form submission
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(
        `[name="${firstErrorField}"]`
      );

      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [errors]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <img
              src={gif}
              alt="Sign Up Illustration"
              className="mx-auto w-64"
            />
          </div>

          <div className="bg-orange-500 rounded-lg p-6 shadow-lg">
            <h1 className="text-white text-4xl font-light mb-8 text-center">
              SIGN UP
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-white text-lg mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-200 text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-white text-lg mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <span className="text-red-200 text-sm">
                    Please enter a valid email
                  </span>
                )}
              </div>
              <div>
                <label className="block text-white text-lg mb-2">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full p-3 rounded-lg"
                  {...register("whatsapp", {
                    required: true,
                    pattern: /^\+?[1-9]\d{1,14}$/,
                  })}
                />
                {errors.whatsapp && (
                  <span className="text-red-200 text-sm">
                    Please enter a valid WhatsApp number (e.g., +1234567890)
                  </span>
                )}
              </div>

              <FileUpload
                register={register}
                name="idProof"
                label="ID Proof"
                errors={errors}
              />

              <div>
                <label className="block text-white text-lg mb-2">
                  Payment ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg"
                  {...register("paymentId", { required: true })}
                />
              </div>
              {errors.paymentId && (
                <span className="text-red-200 text-sm">
                  Payment ID is required. Please enter a valid Payment ID to
                  proceed.
                </span>
              )}
              <div>
                <label className="block text-white text-lg mb-2">
                  Payment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full p-3 rounded-lg"
                  {...register("paymentDate", { required: true })}
                />
              </div>
              {errors.paymentDate && (
                <span className="text-red-200 text-sm">
                  Payment Date is required. Please select a valid date.
                </span>
              )}

              <SignaturePad register={register} setValue={setValue} />

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1"
                  {...register("declaration", { required: true })}
                />
                <label className="text-white text-sm">
                  I confirm that I have read and agree to the Terms and
                  Conditions of the website.
                </label>
              </div>
              {errors.declaration && (
                <span className="text-red-200 text-sm">
                  You must agree to the Terms and Conditions to proceed.
                </span>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="fixed bottom-4 right-4">
          <button className="bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors">
            Contact us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpForm;
