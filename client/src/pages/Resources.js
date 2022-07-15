import React from "react";
import "../style/resources.css";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";

export default function Resources() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const data = [
    {
      title: "create-react-app-buildpack",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description: "Creat react-app on your Heroko",
      create: "Olly",
      create_date: "2022/07/07",
    },
    {
      title: "create-react-app-buildpack",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description: "Creat react-app on your Heroko",
      create: "Olly",
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
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Resources Type</option>
              <option value="1">Front end</option>
              <option value="2">Back end</option>
              <option value="3">Other</option>
            </select>
          </div>
          {data.map((data, i) => (
            <div className="card w-75" key={i}>
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p>
                  <a
                    class="btn btn-primary"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Toggle first element
                  </a>
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#multiCollapseExample2"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    Toggle second element
                  </button>
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target=".multi-collapse"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1 multiCollapseExample2"
                  >
                    Toggle both elements
                  </button>
                </p>
                <div class="row">
                  <div class="col">
                    <div
                      class="collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div class="card card-body">
                        Some placeholder content for the first collapse
                        component of this multi-collapse example. This panel is
                        hidden by default but revealed when the user activates
                        the relevant trigger.
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div class="card card-body">
                        Some placeholder content for the second collapse
                        component of this multi-collapse example. This panel is
                        hidden by default but revealed when the user activates
                        the relevant trigger.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

            <input className="submit-btn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
