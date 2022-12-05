import React from "react";

function FormComponent() {
  return (
    <div>
      <form className="bg-slate-50 flex flex-col md:w-60 h-44 content-center justify-center px-4">
        <p className="pb-2">Login</p>
        <div className="flex flex-col">
          <label className="text-slate-800">Name</label>
          <div className="bg-slate-400 py-2 rounded-md px-2">
            <input
              className="color-inherit text-sm focus:border-transparent"
              type="text"
              id="names"
              placeholder="Name"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
