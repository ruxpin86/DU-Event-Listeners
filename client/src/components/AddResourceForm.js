import React from "react";
import { useForm } from "react-hook-form";
import { ADD_RESOURCE } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function AddResourceForm({ updateData }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [addResource, { error }] = useMutation(ADD_RESOURCE);
  if (error) {
    console.log(JSON.stringify(error));
  }
  const onSubmit = async (submitResult) => {
    console.log(submitResult);
    //trying to map through to show all resources to user
    try {
      const userResource = await addResource({
        variables: { input: { ...submitResult } },
      });
      console.log(userResource);
      updateData();
    } catch (error) {
      console.error(error);
    }
  };

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
