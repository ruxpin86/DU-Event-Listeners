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
      title: "Css and Html",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description: "Creat react-app on your Heroko",
      create: "Olly",
      category: "frontend",
      create_date: "2022/07/07",
    },
    {
      title: "create-react-app-buildpack",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description:
        "The large-scale contamination of the public sphere by rumours, hate speech, dangerous conspiracy theories and orchestrated deception campaigns is causing widespread concern around the world. These ills are collectively referred to as “information disorder” .The disorder results from a range of factors. They include a rapidly changing media ecology and an increasingly fractious, populist and polarised political environment. The surge in misleading and false information about the Covid-19 pandemic has increased these concerns.",
      create: "Peter",
      category: "frontend",
      create_date: "2022/07/07",
    },
    {
      title: "react advanced",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description:
        "The large-scale contamination of the public sphere by rumours, hate speech, dangerous conspiracy theories and orchestrated deception campaigns is causing widespread concern around the world. These ills are collectively referred to as “information disorder”.",
      create: "Ted",
      category: "frontend",
      create_date: "2022/07/07",
    },
    {
      title: "GraphQL Note",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description:
        "The large-scale contamination of the public sphere by rumours, hate speech, dangerous conspiracy theories and orchestrated deception campaigns is causing widespread concern around the world. These ills are collectively referred to as “information disorder”.",
      create: "Kris",
      create_date: "2022/07/07",
    },
    {
      title: "MongoDb Note",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description:
        "The large-scale contamination of the public sphere by rumours, hate speech, dangerous conspiracy theories and orchestrated deception campaigns is causing widespread concern around the world. These ills are collectively referred to as “information disorder”.",
      create: "Andrew",
      create_date: "2022/07/07",
    },
  ];

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
