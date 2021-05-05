import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/a.jpg", name: "piyas" },
    { id: 2, image: "/images/b.jpg", name: "reyad" },
    { id: 3, image: "/images/c.jpg", name: "asik" },
    { id: 4, image: "/images/d.jpg", name: "forid" },
    { id: 5, image: "/images/e.jpg", name: "forhan" },
    { id: 6, image: "/images/f.jpg", name: "adil5" },
    { id: 7, image: "/images/Aaa.jpg", name: "imrsan" },
    { id: 8, image: "/images/k.jpg", name: "khan4" },
    { id: 9, image: "/images/kk.jpg", name: "alikhan4" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
