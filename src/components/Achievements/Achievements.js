import React, { useState } from "react";
import styles from "./Achievements.module.css";
import InputControl from "../InputControl/InputControl.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Banner from "../Banner/Banner.js";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
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
    if (current !== "") {
      setAchievements((achievements) => [...achievements, current]);
      setCurrent("");
    } else {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
      }, 2000);
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
            />
            <button
              className={styles.achButton}
              disabled={achievements.length === 8}
              onClick={handleSubmit}
            >
              Add Achievement
            </button>
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
                  {achievements.map((item, index) => (
                    <Draggable
                      key={index}
                      draggableId={index}
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
                          {item}
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
