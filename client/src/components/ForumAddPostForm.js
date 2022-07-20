import React from "react";
import { useForm } from "react-hook-form";
import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_EVENT, ADD_TO_FORUM } from "../utils/mutations";
import { MdClose } from "react-icons/md";

export default function ForumAddPostForm({ updateData, closeFunc }) {
  const { loading, data, error: userError } = useQuery(QUERY_ME);

  const userData = data?.getMe || {};
  console.log(userData);
  const [addToForum, { error }] = useMutation(ADD_TO_FORUM);
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
    const newData = {
      ...data,
      creator: userData.username,
      createdAt: "7.19.2022",
    };
    try {
      const newPost = await addToForum({
        variables: { userId: userData._id, input: { ...newData } },
      });
      console.log("newPost", newPost);
      updateData();
    } catch (err) {
      console.error(err);
      console.log(JSON.stringify(err));
    }
  };

  return (
    <>
      <form className="postform" onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label>Description</label>
          <MdClose className="closeBtn" onClick={closeFunc} />
        </div>

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
