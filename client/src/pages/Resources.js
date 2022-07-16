import { useQuery, useMutation } from "@apollo/client";
import { ADD_RESOURCE } from '../utils'
import React, { useState } from "react";
import "../style/resources.css";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import ResourceCard from "../components/ResourceCard";
export default function Resources() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
      user: "krisd",
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

  const Resource

  const onSubmit = (data) => console.log(data);
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
}
