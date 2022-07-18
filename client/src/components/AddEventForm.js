import React from "react";
import { useForm } from "react-hook-form";

export default function AddEventForm() {
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
        <label>Event Date</label>
        <input {...register("date", { required: true })} />
        {errors.date && <p>date is required</p>}
        <label>Description</label>
        <input {...register("description", { required: true })} />
        {errors.description && <p>Description is required</p>}
        <label>Event Host</label>
        <input {...register("host", { required: true })} />
        {errors.host && <p>host is required</p>}
        <label>Event Location</label>
        <input {...register("location", { required: true })} />
        {errors.location && <p>location is required</p>}
        <input className="submit-btn" type="submit" />
      </form>
    </>
  );
}
