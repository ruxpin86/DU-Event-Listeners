import React, { useState, useEffect } from "react";
import "../style/resources.css";
import { MdClose, MdControlPoint } from "react-icons/md";
import ResourceCard from "../components/ResourceCard";
import AddResourceForm from "../components/AddResourceForm";
import useBreakpoint from "../components/tool/useBreakpoint";

export default function Resources() {
  const [webAddForm, setOpenForm] = useState(true);
  const [openAddFormPhon, setOpenFormPhon] = useState(false);
  const [selectValue, setSelect] = useState("all");
  const [newdata, setNewdata] = useState([]);
  const point = useBreakpoint();

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
      category: "backend",
      create_date: "2022/07/07",
    },
    {
      title: "MongoDb Note",
      link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
      description:
        "The large-scale contamination of the public sphere by rumours, hate speech, dangerous conspiracy theories and orchestrated deception campaigns is causing widespread concern around the world. These ills are collectively referred to as “information disorder”.",
      create: "Andrew",
      category: "backend",
      create_date: "2022/07/07",
    },
    // {
    //   title: "Github Note",
    //   link: "https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack",
    //   description:
    //     "The large-scale contamination of the public sphere by rumours, hate speech, dangerous conspiracy theories and orchestrated deception campaigns is causing widespread concern around the world. These ills are collectively referred to as “information disorder”.",
    //   create: "Justin",
    //   category: "other",
    //   create_date: "2022/07/07",
    // },
  ];
  useEffect(() => {
    setNewdata(data);
  }, []);
  const closeFunc = () => {
    setOpenFormPhon(false);
  };

  const changeSelect = (event) => {
    setSelect(event.target.value);
    if (data.length > 0) {
      switch (event.target.value) {
        case "all":
          setNewdata(data);
        case "frontend":
          const frontendArr = data.filter(
            (item) => item.category === "frontend"
          );
          setNewdata(frontendArr);
          break;
        case "backend":
          const backendArr = data.filter((item) => item.category === "backend");
          setNewdata(backendArr);
          break;
        case "other":
          const otherArr = data.filter((item) => item.category === "other");
          setNewdata(otherArr);
          break;
        default:
          break;
      }
    }
  };
  console.log("selectValue", selectValue);
  return (
    <div className="resources-frame">
      <div className="title">
        <h1>Resources</h1>
        <div className="icon-frame">
          <MdControlPoint
            className="addBtn"
            onClick={() => setOpenFormPhon(!openAddFormPhon)}
          />
          <a href="/main">
            <MdClose />
          </a>
        </div>
      </div>
      <div className="blog-block">
        <div className="left">
          <div className="filter">
            <select onChange={changeSelect} value={selectValue}>
              <option value="all" disabled>
                Select Resources Type
              </option>
              <option value="all">All Resources</option>
              <option value="frontend">Front end</option>
              <option value="backend">Back end</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* {newdata.map((data, i) => (
            <ResourceCard data={data} i={i} key={i} />
          ))} */}
          {newdata.length > 0 ? (
            newdata.map((data, i) => <ResourceCard data={data} i={i} key={i} />)
          ) : (
            <h1>Resources data is empty!!!</h1>
          )}
        </div>
        {point === "lg"
          ? webAddForm && (
              <div className="right">
                <div className="title">
                  <h2>Add Resources</h2>
                </div>
                <AddResourceForm />
              </div>
            )
          : openAddFormPhon && (
              <div className="right">
                <div className="title">
                  <h2>Add Resources</h2>
                  <MdClose onClick={closeFunc} />
                </div>
                <AddResourceForm />
              </div>
            )}
      </div>
    </div>
  );
}
