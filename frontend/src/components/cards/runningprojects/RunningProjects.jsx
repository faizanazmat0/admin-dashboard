import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChevronDown, ChevronRight } from "lucide-react";
import "./runningprojects.css";

const RunningProjectsCard = () => {
  const projects = [
    {
      name: "Falcon",
      code: "F",
      color: {
        bg: "#D9E7FA",
        text: "#2C7BE5",
      },
      progress: 38,
      time: "12:50:00",
    },
    {
      name: "Reign",
      code: "R",
      color: {
        bg: "#D9E7FA",
        text: "#08D47E",
      },
      progress: 79,
      time: "25:20:00",
    },
    {
      name: "Boot64",
      code: "B",
      color: {
        bg: "#D9E7FA",
        text: "#2DBFFD",
      },
      progress: 90,
      time: "58:20:00",
    },
    {
      name: "Raven",
      code: "R",
      color: {
        bg: "#D9E7FA",
        text: "#F58344",
      },
      progress: 40,
      time: "21:20:00",
    },
    {
      name: "Slick",
      code: "S",
      color: {
        bg: "#D9E7FA",
        text: "#E63757",
      },
      progress: 70,
      time: "31:20:00",
    },
  ];

  return (
    <div className="running-projects-card">
      <div className="card-header">
        <h3>Running Projects</h3>
        <div className="time-selector">
          <span>Working Time</span>
          <ChevronDown />
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-info">
              <div
                className="project-avatar"
                style={{
                  backgroundColor: project.color.bg,
                  color: project.color.text,
                }}
              >
                {project.code}
              </div>
              <div className="project-details">
                <div className="project-name">{project.name}</div>
                <div className="project-progress">{project.progress}%</div>
              </div>
            </div>

            {/* Project Time and Bar */}
            <div className="project-time-and-bar">
              <div className="project-time">{project.time}</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${project.progress}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="show-all">
        <button className="show-all-btn">Show all projects</button>
        <ChevronRight style={{ color: "#3b82f6" }} />
      </div>
    </div>
  );
};

export default RunningProjectsCard;
