import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full h-auto max-w-4xl mx-4 shadow-lg rounded-md bg-white">
        <div className="max-h-[700px] h-screen flex relative justify-center overflow-y-auto">
          <div className="w-full md:w-[896px]">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col items-center h-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
