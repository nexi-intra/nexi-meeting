"use client";
import React from "react";

export default function ResourceReport(props: { params: { slug: string[] } }) {
  const { slug } = props.params;
  return (
    <div>
      ResourceReport ss
      <pre>{JSON.stringify(slug, null, 2)}</pre>
    </div>
  );
}
