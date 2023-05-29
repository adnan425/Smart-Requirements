import React from "react";

export default function Button({ label = "" }) {
  return <button className="btn btn-primary btn-block mt-2">{label}</button>;
}
