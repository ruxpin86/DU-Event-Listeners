import React from "react";
import { useForm } from "react-hook-form";

export default function ForumAddPostForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form className="postform" onSubmit={handleSubmit(onSubmit)}>
        <label>Description</label>
        <input
          className="descripInput"
          {...register("description", { required: true })}
        />
        {errors.link && <p>Description is required</p>}
        <div className="radio-frame">
          <div className="radio-flex">
            <input
              {...register("topic", { required: true })}
              type="radio"
              value="classActivities"
            />
            <label>Class Activities</label>
          </div>
          <div className="radio-flex">
            <input
              {...register("topic", { required: true })}
              type="radio"
              value="projectHelp"
            />
            <label>Project Help</label>
          </div>
          <div className="radio-flex">
            <input
              {...register("topic", { required: true })}
              type="radio"
              value="shoutout"
            />
            <label>Shout Out</label>
          </div>
          <div className="radio-flex">
            <input
              {...register("topic", { required: true })}
              type="radio"
              value="random"
            />
            <label>random</label>
          </div>
        </div>
        {errors.category && <p>Topic is required</p>}
        <input className="submit-btn" type="submit" />
      </form>
    </>
  );
}
