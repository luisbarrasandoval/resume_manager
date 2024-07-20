import { FC } from "react";

const Upload: FC = () => {
  return (
    <div className="md:flex">
      <div className="w-full">
        <div className="relative border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
          <div className="absolute">
            <div className="flex flex-col items-center">
              <i className="fa fa-folder-open fa-4x text-blue-700"></i>
              <span className="block text-gray-400 font-normal">
               Sube tu CV
              </span>
            </div>
          </div>

          <input type="file" className="h-full w-full opacity-0" name="" />
        </div>
      </div>
    </div>
  );
};

export default Upload;
