/* eslint-disable */
const FileUpload = ({
  register,
  name,
  label,
  errors,
  setFile,
  file,
  handleRemoveFile,
  setImage,
  image,
}) => {
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setImage(URL.createObjectURL(uploadedFile));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setImage(URL.createObjectURL(uploadedFile));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mb-6">
      <label className="block text-white text-lg mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="text-center">
          <input
            type="file"
            className="hidden"
            {...register(name, { required: "Please upload a file" })}
            id={name}
            onChange={handleFileChange}
          />
          {!image && (
            <>
              <label htmlFor={name} className="cursor-pointer block">
                <div className="text-gray-600 text-lg mb-2">
                  Drop A File Here Or Click To Upload
                </div>
                <div className="text-gray-500 text-sm">
                  Maximum upload size: 268.44MB
                </div>
              </label>
            </>
          )}
        </div>

        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Uploaded file preview"
              className="max-w-full h-auto mb-2"
            />
            <button onClick={handleRemoveFile} className="text-red-500 text-sm">
              Remove
            </button>
          </div>
        )}
      </div>

      {errors[name] && !file && (
        <span className="text-red-200 text-sm mt-2">
          {/* eslint-disable-line */ errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default FileUpload;
