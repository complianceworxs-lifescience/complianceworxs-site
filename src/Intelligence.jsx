import { useState } from "react";
import { Link } from "react-router-dom";

export default function Intelligence() {
  const [activeFilter, setActiveFilter] = useState("featured");

  const hubs = [
    {
      id: "reg-change",
      category: "featured",
      title: "Regulatory Change Impact",
      description:
        "See what changed, why it matters, and which decisions are affected. Signals are prioritized by risk and scope.",
      cta: "Get Free Change Impact Report",
    },
    {
      id: "inspection",
      category: "inspection",
      title: "Inspection & Enforcement Signals",
      description:
        "Identify enforcement patterns before they become findings and understand what inspectors are targeting.",
      cta: "Start Inspection Signal Check",
    },
    {
      id: "risk",
      category: "risk",
      title: "Risk Management",
      description:
        "Prioritize compliance risks by severity, urgency, and business impact.",
      cta: "Start Risk Assessment",
    },
    {
      id: "ownership",
      category: "risk",
      title: "Decision Ownership",
      description:
        "Clarify who owns regulated decisions and where accountability is undefined.",
      cta: "Start Decision Ownership Mapping",
    },
    {
      id: "evidence",
      category: "featured",
      title: "Defensibility & Evidence",
      description:
        "Identify evidence gaps inspectors will question and map corrective actions.",
      cta: "Start Defensibility Assessment",
    },
    {
      id: "audit",
      category: "inspection",
      title: "Audit Readiness",
      description:
        "See what will fail first when an inspector asks for proof.",
      cta: "Start Audit Readiness Assessment",
    },
  ];

  const filteredHubs =
    activeFilter === "featured"
      ? hubs
      : hubs.filter((hub) => hub.category === activeFilter);

  return (
    <div className="intelligence-page">
      {/* HERO */}
      <section className="intelligence-hero">
        <div className="container">
          <h1>
            Topic Intelligence Hubs turn regulatory change into actions that
            protect revenue, prevent inspection surprises, and show you exactly
            what to do next.
          </h1>
          <p>
            Each hub maps regulatory signals to a defensible compliance action.
            Nothing is generic. Everything leads to a decision.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="intelligence-section">
        <div className="container intelligence-filters">
          <button
            type
