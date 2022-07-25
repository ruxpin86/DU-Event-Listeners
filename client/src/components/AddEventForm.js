import React from "react";
import { useForm } from "react-hook-form";
import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_EVENT } from "../utils/mutations";
export default function AddEventForm({ updateData }) {
  const { loading, data, error: userError } = useQuery(QUERY_ME);
  //this is how we unpack QUERY_ME
  //mess around here... userData and uData is coming back undefined
  const userData = data?.getMe || {};
  // console.log("userData", userData);

  const [addEvent, { error }] = useMutation(ADD_EVENT);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log("submit data", data);
    try {
      const newEvent = await addEvent({
        variables: { input: { ...data } },
      });
      console.log("newEvent", newEvent);
      updateData();
    } catch (err) {
      console.error(err);
      console.log(JSON.stringify(err));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input {...register("eventName", { required: true })} />
        {errors.eventName && <p>Title is required</p>}
        <label>Event Date</label>
        <input {...register("eventDate", { required: true })} />
        {errors.eventDate && <p>date is required</p>}
        <label>Description</label>
        <input {...register("description", { required: true })} />
        {errors.description && <p>Description is required</p>}
        <label>Event Host</label>
        <input {...register("creator", { required: true })} />
        {errors.creator && <p>host is required</p>}
        <label>Event Location</label>
        <input {...register("location", { required: true })} />
        <label>Event Link (Not required)</label>
        <input {...register("link")} />
        <input className="submit-btn" type="submit" />
      </form>
    </>
  );
}
