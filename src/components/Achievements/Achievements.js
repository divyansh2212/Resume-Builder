import React, { useState, useEffect } from "react";
import styles from "./Achievements.module.css";
import InputControl from "../InputControl/InputControl.js";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Banner from "../Banner/Banner.js";
import DeleteIcon from "@material-ui/icons/Delete";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  position: "relative",
  color: "black",
  userSelect: "none",
  padding: grid * 2,
  borderRadius: 10,
  display: "flex",
  alignItems: "Center",
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "lightblue" : "lightblue",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "white" : "white",
  padding: grid,
  width: "100%",
});

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [current, setCurrent] = useState("");
  const [flag, setFlag] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      achievements,
      result.source.index,
      result.destination.index
    );

    setAchievements(reorderedItems);
  };

  const handleSubmit = () => {
    let flag = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== " ") flag = 1;
    }
    if (flag === 0) {
      setCurrent("");
      return;
    }
    let newText = current.split(/[ ]+/);
    if (current !== "" && newText.length !== 0) {
      setAchievements((achievement) => [...achievement, newText.join(" ")]);
      setCurrent("");
    } else {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("achievements")) || null;
    if (data) setAchievements(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const data = JSON.stringify(achievements);
      localStorage.setItem("achievements", data);
    }, 10);
  }, [achievements]);
  const handleDelete = (id) => {
    setAchievements((current) => current.filter((item, index) => index != id));
  };

  const handleKeyDown = (event) => {
    let flag = 0;
    for (let i = 0; i < current.length; i++) {
      if (current[i] !== " ") flag = 1;
    }
    if (flag === 0) {
      setCurrent("");
      return;
    }

    let newText = current.split(/[ ]+/);
    if (
      event.key === "Enter" &&
      newText.length !== 0 &&
      achievements.length <= 7
    ) {
      setAchievements((achievements) => [...achievements, newText.join(" ")]);
      setCurrent("");
    } else if (event.key === "Enter" && newText.length !== 0) {
      setCurrent("");
    }
  };

  return (
    <>
      {flag && <Banner title="Field is mandatory !" />}

      <div>
        <div className={styles.detail}>
          <div className={styles.column}>
            <label>Add your achievements 🎗️!!</label>
            <InputControl
              placeholder="Add your Achievement"
              value={current}
              onChange={(e) => {
                setCurrent(e.target.value);
              }}
              onKeyDown={handleKeyDown} 
            />
            <div className={styles.achAddArea}>
              <button
                className={styles.achButton}
                disabled={achievements.length >=8}
                onClick={handleSubmit}
              >
                Add Achievement
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.achHeader}>Listed Achievements</div>
      <div className={styles.listAchievements}>
        {achievements.length > 0 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {achievements?.map((item, index) => (
                    <Draggable
                      key={`item-${index}`}
                      draggableId={`item-${index}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <span className={styles.number}>{index + 1}. </span>
                          <span className={styles.text}>{item}</span>
                          <span
                            className={styles.deleteIcon}
                            onClick={() => handleDelete(index)}
                          >
                            <DeleteIcon />
                          </span>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
      {achievements.length === 0 && (
        <div className={styles.noAchievements}>
          ❌ You have not added any Achievement
        </div>
      )}
    </>
  );
};

export default Achievements;
