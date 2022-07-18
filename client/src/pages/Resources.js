import React, { useState } from "react";
import "../style/resources.css";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import ResourceCard from "../components/ResourceCard";

import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
//not sure if i need both of these resource queries
import {
  // QUERY_ALL_RESOURCES,

  QUERY_ME,
} from "../utils/queries";
import { ADD_RESOURCE } from "../utils/mutations";
//need this so i can check if user is logged in
import Auth from "../utils/auth";
//query all resources first then query resource is used where and how?
//if the user hits this page and they are logged in then they should see all resources displayed
// const { resourceData } = useQuery(
//   resource ? QUERY_ALL_RESOURCES ,
//   {
//     variables: {}
//   }
const Resources = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loading, uData, error: userError } = useQuery(QUERY_ME);
  //this is how we unpack QUERY_ME
  //mess around here... userData and uData is coming back undefined
  const userData = uData?.getMe || {};

  //if this is working get data compliled into addResource and boom
  const [addResource, { error }] = useMutation(ADD_RESOURCE);
  if (error || userError) {
    console.log(JSON.stringify(error || userError));
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // get token
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  // console.log("token IN sreachpage", token);
  if (!token) {
    return false;
  }

  //how do i use the log in token to make sure user is logged in or not to allow them to see the page or not!

  //changed data to match backend resourceSeeds key values
  const data = [
    {
      user: "krisd",
      link: "https://medium.com/@MarkPieszak/how-to-delete-all-node-modules-folders-on-your-machine-and-free-up-hd-space-f3954843aeda",
      category: "other",
      title: "How to Delete Node Modules",
      description:
        "This resource highlights how to remove the node_modules when they are taking up too much space on your machine",
    },
    {
      user: "ted",
      link: "https://dev.to/underscorecode/css-selectors-the-full-reference-guide-3cbf",
      category: "Frontend",
      title: "CSS Selectors",
      description:
        "This resource highlights some important details on CSS Selectors",
    },
    {
      user: "olly",
      link: "https://flexbox.malven.co/",
      category: "Frontend",
      title: "Flexbox Cheat-Sheet",
      description:
        "This resource is quick guide for all the essential knowledge on flexbox",
    },
    {
      user: "andyp",
      link: "https://reactrouter.com/docs/en/v6/getting-started/overview",
      category: "Frontend",
      title: "Guide to React Router",
      description: "React router information!",
    },
    {
      user: "pete",
      link: "https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express",
      category: "Backend",
      title: "Apollo Server Guide",
      description:
        "This resource highlights how get an Apollo Server up and running on your server side applications.",
    },
  ];

  const onSubmit = (submitResult) => {
    console.log(submitResult);
    console.log(userData);
  };
  return (
    <div className="resources-frame">
      <div className="title">
        <h1>Resources</h1>
        <a href="/main">
          <MdClose />
        </a>
      </div>
      <div className="blog-block">
        <div className="left">
          <div className="filter">
            <select defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>
                Select Resources Type
              </option>
              <option value="1">Front end</option>
              <option value="2">Back end</option>
              <option value="3">Other</option>
            </select>
          </div>
          {data.map((data, i) => (
            <ResourceCard data={data} i={i} key={i} />
          ))}
        </div>
        <div className="right">
          <h2>Add Resources</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Resources;
