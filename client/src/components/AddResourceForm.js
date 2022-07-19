import React from "react";
import { useForm } from "react-hook-form";

export default function AddResourceForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input {...register("title", { required: true })} />
        {errors.title && <p>Title is required</p>}
        <label>Link</label>
        <input {...register("link", { required: true })} />
        {errors.link && <p>Link is required</p>}
        <label>Description</label>
        <input {...register("description", { required: true })} />
        {errors.description && <p>Description is required</p>}
        <div className="radio-frame">
          <div className="radio-flex">
            <input
              {...register("category", { required: true })}
              type="radio"
              value="frontend"
            />
            <label>Frontend</label>
          </div>
          <div className="radio-flex">
            <input
              {...register("category", { required: true })}
              type="radio"
              value="backend"
            />
            <label>Backend</label>
          </div>
          <div className="radio-flex">
            <input
              {...register("category", { required: true })}
              type="radio"
              value="other"
            />
            <label>Other</label>
          </div>
        </div>
        {errors.category && <p>Type is required</p>}
        <input className="submit-btn" type="submit" />
      </form>
    </>
  );
}
