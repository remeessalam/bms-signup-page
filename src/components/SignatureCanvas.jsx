import SignatureCanvas from "react-signature-canvas";
// eslint-disable-next-line
const SignaturePad = ({ register, setValue, clear, sigCanvas }) => {
  const save = () => {
    // eslint-disable-next-line
    setValue("signature", sigCanvas.current.toDataURL());
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-white text-lg">
          Signature <span className="text-red-500">*</span>
        </label>
        <button
          type="button"
          onClick={clear}
          className="text-blue-500 hover:text-blue-600"
        >
          Clear
        </button>
      </div>
      <div className="border rounded-lg bg-white p-4">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            className: "w-full h-40 border rounded cursor-crosshair",
          }}
          penColor="black"
          dotSize={0.1}
          onEnd={save}
          velocityFilterWeight={0.1}
          minWidth={0.5}
          maxWidth={1.5}
        />
      </div>
    </div>
  );
};

export default SignaturePad;
