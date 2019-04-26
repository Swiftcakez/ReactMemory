import React from "react";
import PropTypes from "prop-types";
import Card from "../Presentational Components/Card";

import "./CardField.css";

const CardField = ({ reset, cards, onClick, selectable }) => {
  let id = -1;

  const cardsTmp = cards.map(card => {
    id += 1;
    return (
      <Card
        key={id}
        reset={reset}
        card={card}
        onClick={onClick}
        selectable={selectable}
      />
    );
  });

  return <div className="CardField">{cardsTmp}</div>;
};

export default CardField;

CardField.propTypes = {
  reset: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
  selectable: PropTypes.bool.isRequired
};
