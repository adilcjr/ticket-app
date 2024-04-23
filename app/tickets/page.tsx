import React from "react";

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}
const Tickets = async () => {
  await sleep();
  return (
    <div>
      <h1>Tickets</h1>
    </div>
  );
};

export default Tickets;
