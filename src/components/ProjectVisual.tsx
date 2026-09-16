import React from 'react';
import { Project } from '../data/projects';
import { BookOpen, WifiOff, ThermometerSnowflake, Flame, Trash2, Droplets, LineChart, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface ProjectVisualProps {
  project: Project;
  compact?: boolean;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project }) => {
  switch (project.visualType) {
    case 'ncert':
      return (
        <div className="bg-canvas border border-editorial rounded-xl p-4 sm:p-5 space-y-3 font-sans text-xs">
          <div className="flex items-center justify-between border-b border-editorial pb-2 text-ink-muted font-mono text-[11px]">
            <span className="flex items-center space-x-1.5 font-semibold text-vermilion">
              <BookOpen size={14} />
              <span>NCERT Class 11 Physics · Chapter 3</span>
            </span>
            <span className="bg-surface px-2 py-0.5 rounded text-[10px]">CBSE Pattern</span>
          </div>
          <div className="p-3 bg-surface rounded-lg space-y-1.5 border border-border-subtle">
            <div className="font-mono text-[10px] text-ink-muted uppercase">Interactive Flashcard</div>
            <div className="font-semibold text-ink text-sm">State the Work-Energy Theorem and derive its vector form.</div>
            <div className="text-ink-secondary text-[11px] leading-relaxed">
              "The net work done by all forces acting on a body equals the change in its kinetic energy..."
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted pt-1">
            <span>Indexed Document Chunk #412</span>
            <span className="text-emerald-700 font-semibold">Active RAG Query</span>
          </div>
        </div>
      );

    case 'offline-app':
      return (
        <div className="bg-canvas-dark text-canvas border border-editorial-dark rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-border-dark pb-2 text-ink-muted text-[11px]">
            <span className="flex items-center space-x-1.5 text-amber-400 font-semibold">
              <WifiOff size={14} />
              <span>OFFLINE MODE ACTIVE</span>
            </span>
            <span className="text-slate-400">ONNX Model</span>
          </div>
          <div className="p-3 bg-surface-dark rounded-lg space-y-1 border border-border-dark text-slate-200">
            <div className="text-[10px] text-amber-400 uppercase">// On-Device Query</div>
            <div className="text-xs font-semibold text-canvas">"Derive the formula for centripetal acceleration."</div>
            <div className="text-[11px] text-slate-300 pt-1">
              a_c = v² / r = ω²r (Computed on local model)
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span>Zero Network Calls</span>
            <span className="text-emerald-400">SQLite Vector Cache</span>
          </div>
        </div>
      );

    case 'frostalert':
      return (
        <div className="bg-canvas border border-editorial rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-editorial pb-2 text-ink-muted text-[11px]">
            <span className="flex items-center space-x-1.5 font-semibold text-sky-600">
              <ThermometerSnowflake size={14} />
              <span>ESP32 Sensor Telemetry</span>
            </span>
            <span className="bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded text-[10px]">GSM Solar Node</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-surface rounded-lg border border-border-subtle">
              <div className="text-[10px] text-ink-muted">Soil Temp</div>
              <div className="font-bold text-ink text-sm mt-0.5">2.4°C</div>
            </div>
            <div className="p-2 bg-surface rounded-lg border border-border-subtle">
              <div className="text-[10px] text-ink-muted">Dew Point</div>
              <div className="font-bold text-amber-600 text-sm mt-0.5">0.8°C</div>
            </div>
            <div className="p-2 bg-surface rounded-lg border border-border-subtle">
              <div className="text-[10px] text-ink-muted">Status</div>
              <div className="font-bold text-vermilion text-xs mt-1">WARNING</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-ink-muted pt-1">
            <span>Telemetry: 15s interval</span>
            <span className="text-amber-700">SMS Alert Trigger Active</span>
          </div>
        </div>
      );

    case 'would-you-rather':
      return (
        <div className="bg-canvas border-2 border-vermilion/40 rounded-xl p-4 sm:p-5 space-y-3 font-sans text-xs relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-editorial pb-2">
            <span className="flex items-center space-x-1.5 font-editorial font-bold text-vermilion text-sm">
              <Flame size={16} />
              <span>Interactive Game Preview</span>
            </span>
            <span className="font-mono text-[10px] bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
              Playable Demo
            </span>
          </div>
          <div className="p-3 bg-surface rounded-lg border border-border-subtle space-y-2">
            <div className="font-mono text-[10px] text-ink-muted uppercase">Dilemma #1</div>
            <div className="font-semibold text-ink text-xs">
              "Only write C++ without pointers OR explain APIs to your aunt using cooking metaphors?"
            </div>
          </div>
          <NavLink
            to="/work/would-you-rather-roast"
            className="w-full py-2 rounded-lg bg-ink text-canvas font-mono text-[11px] font-bold hover:bg-vermilion transition-colors duration-200 flex items-center justify-center space-x-1.5"
          >
            <Play size={12} />
            <span>Play the game now →</span>
          </NavLink>
        </div>
      );

    case 'dustbin':
      return (
        <div className="bg-canvas border border-editorial rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-editorial pb-2 text-ink-muted text-[11px]">
            <span className="flex items-center space-x-1.5 font-semibold text-ink">
              <Trash2 size={14} />
              <span>Arduino UNO Circuit Schematic</span>
            </span>
            <span className="bg-surface px-2 py-0.5 rounded text-[10px]">Embedded C++</span>
          </div>
          <div className="p-3 bg-surface rounded-lg space-y-1.5 border border-border-subtle text-[11px]">
            <div className="flex justify-between text-ink-secondary">
              <span>HC-SR04 Distance:</span>
              <span className="font-bold text-ink">&lt; 20 cm trigger</span>
            </div>
            <div className="flex justify-between text-ink-secondary">
              <span>Servo Actuation:</span>
              <span className="font-bold text-ink">0° → 180° (Open)</span>
            </div>
            <div className="flex justify-between text-ink-secondary">
              <span>Auto-Close Delay:</span>
              <span className="font-bold text-ink">3.5 seconds</span>
            </div>
          </div>
        </div>
      );

    case 'watering':
      return (
        <div className="bg-canvas border border-editorial rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-editorial pb-2 text-ink-muted text-[11px]">
            <span className="flex items-center space-x-1.5 font-semibold text-emerald-700">
              <Droplets size={14} />
              <span>Closed-Loop Moisture Logic</span>
            </span>
            <span className="bg-surface px-2 py-0.5 rounded text-[10px]">5V Relay</span>
          </div>
          <div className="p-3 bg-surface rounded-lg space-y-1.5 border border-border-subtle text-[11px]">
            <div className="text-ink-secondary">
              Capacitive Sensor ──► Threshold Check ──► 5V Relay Pump
            </div>
            <div className="flex justify-between text-ink font-semibold pt-1">
              <span>Moisture Level: 38%</span>
              <span className="text-emerald-700">Pump Trigger: ACTIVE</span>
            </div>
          </div>
        </div>
      );

    case 'progress':
      return (
        <div className="bg-canvas border border-editorial rounded-xl p-4 sm:p-5 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-editorial pb-2 text-ink-muted text-[11px]">
            <span className="flex items-center space-x-1.5 font-semibold text-sky-700">
              <LineChart size={14} />
              <span>Academic Trajectory Dashboard</span>
            </span>
            <span className="bg-surface px-2 py-0.5 rounded text-[10px]">Recharts UI</span>
          </div>
          <div className="p-3 bg-surface rounded-lg border border-border-subtle space-y-2 text-[11px]">
            <div className="flex justify-between text-ink font-semibold">
              <span>Physics Revision Streak:</span>
              <span className="text-vermilion">14 Days</span>
            </div>
            <div className="w-full bg-canvas h-2 rounded-full overflow-hidden border border-editorial">
              <div className="bg-vermilion h-full w-[78%]" />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
