"use client"

import { Button } from "@/components/ui/button"
import { Menu, Check, Linkedin } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Network, BrainCircuit, Target, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function GarudaEyeLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                  <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" opacity="0.7" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Garuda Eye</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("solution")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("value-proposition")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Value Proposition
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="hidden md:inline-flex text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Login
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium">Request a Demo</Button>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Neural Network Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900">
            <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
              {/* Top Layer - More nodes distributed across the screen */}
              <g className="top-layer-normal">
                {/* Left side nodes */}
                <circle cx="80" cy="120" r="3" fill="#3B82F6" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="12s" repeatCount="indefinite" begin="0s" />
                  <animate attributeName="r" values="2;4;2" dur="16s" repeatCount="indefinite" begin="0s" />
                </circle>
                <circle cx="150" cy="80" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="10s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="r" values="3;5;3" dur="14s" repeatCount="indefinite" begin="2s" />
                </circle>
                <circle cx="220" cy="140" r="3" fill="#1D4ED8" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="15s" repeatCount="indefinite" begin="4s" />
                  <animate attributeName="r" values="2;4;2" dur="18s" repeatCount="indefinite" begin="4s" />
                </circle>
                <circle cx="120" cy="200" r="4" fill="#3B82F6" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="11s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="r" values="3;5;3" dur="13s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="180" cy="250" r="3" fill="#60A5FA" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="13s" repeatCount="indefinite" begin="3s" />
                  <animate attributeName="r" values="2;4;2" dur="15s" repeatCount="indefinite" begin="3s" />
                </circle>

                {/* Center-left nodes */}
                <circle cx="300" cy="100" r="5" fill="#1D4ED8" style={{ opacity: "0.7" }}>
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="9s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="r" values="4;6;4" dur="12s" repeatCount="indefinite" begin="2s" />
                </circle>
                <circle cx="380" cy="160" r="4" fill="#3B82F6" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="14s" repeatCount="indefinite" begin="5s" />
                  <animate attributeName="r" values="3;5;3" dur="17s" repeatCount="indefinite" begin="5s" />
                </circle>
                <circle cx="320" cy="220" r="3" fill="#60A5FA" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="16s" repeatCount="indefinite" begin="7s" />
                  <animate attributeName="r" values="2;4;2" dur="19s" repeatCount="indefinite" begin="7s" />
                </circle>
                <circle cx="420" cy="280" r="4" fill="#1D4ED8" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="8s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="r" values="3;5;3" dur="11s" repeatCount="indefinite" begin="1s" />
                </circle>

                {/* Center nodes */}
                <circle cx="500" cy="90" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="7s" repeatCount="indefinite" begin="4s" />
                  <animate attributeName="r" values="3;5;3" dur="10s" repeatCount="indefinite" begin="4s" />
                </circle>
                <circle cx="580" cy="150" r="5" fill="#3B82F6" style={{ opacity: "0.7" }}>
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="12s" repeatCount="indefinite" begin="6s" />
                  <animate attributeName="r" values="4;6;4" dur="15s" repeatCount="indefinite" begin="6s" />
                </circle>
                <circle cx="520" cy="210" r="3" fill="#1D4ED8" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="18s" repeatCount="indefinite" begin="8s" />
                  <animate attributeName="r" values="2;4;2" dur="21s" repeatCount="indefinite" begin="8s" />
                </circle>
                <circle cx="620" cy="270" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="9s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="r" values="3;5;3" dur="12s" repeatCount="indefinite" begin="2s" />
                </circle>

                {/* Center-right nodes */}
                <circle cx="720" cy="120" r="4" fill="#1D4ED8" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="11s" repeatCount="indefinite" begin="3s" />
                  <animate attributeName="r" values="3;5;3" dur="14s" repeatCount="indefinite" begin="3s" />
                </circle>
                <circle cx="800" cy="180" r="3" fill="#3B82F6" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="13s" repeatCount="indefinite" begin="5s" />
                  <animate attributeName="r" values="2;4;2" dur="16s" repeatCount="indefinite" begin="5s" />
                </circle>
                <circle cx="740" cy="240" r="5" fill="#60A5FA" style={{ opacity: "0.7" }}>
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="10s" repeatCount="indefinite" begin="7s" />
                  <animate attributeName="r" values="4;6;4" dur="13s" repeatCount="indefinite" begin="7s" />
                </circle>

                {/* Suspected nodes - strategically placed */}
                <circle
                  cx="850"
                  cy="220"
                  r="6"
                  fill="#EF4444"
                  style={{ opacity: "0.7", filter: "drop-shadow(0 0 4px #EF4444)" }}
                >
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="6s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="r" values="5;7;5" dur="8s" repeatCount="indefinite" begin="2s" />
                </circle>
                <circle
                  cx="1100"
                  cy="160"
                  r="5"
                  fill="#DC2626"
                  style={{ opacity: "0.6", filter: "drop-shadow(0 0 3px #DC2626)" }}
                >
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="7s" repeatCount="indefinite" begin="4s" />
                  <animate attributeName="r" values="4;6;4" dur="9s" repeatCount="indefinite" begin="4s" />
                </circle>

                {/* Right side nodes */}
                <circle cx="1200" cy="100" r="4" fill="#1D4ED8" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="12s" repeatCount="indefinite" begin="5s" />
                  <animate attributeName="r" values="3;5;3" dur="15s" repeatCount="indefinite" begin="5s" />
                </circle>
                <circle cx="1280" cy="160" r="3" fill="#60A5FA" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="14s" repeatCount="indefinite" begin="7s" />
                  <animate attributeName="r" values="2;4;2" dur="17s" repeatCount="indefinite" begin="7s" />
                </circle>
                <circle cx="1320" cy="220" r="4" fill="#3B82F6" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="16s" repeatCount="indefinite" begin="9s" />
                  <animate attributeName="r" values="3;5;3" dur="19s" repeatCount="indefinite" begin="9s" />
                </circle>
                <circle cx="1400" cy="140" r="3" fill="#1D4ED8" style={{ opacity: "0.5" }}>
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur="18s"
                    repeatCount="indefinite"
                    begin="11s"
                  />
                  <animate attributeName="r" values="2;4;2" dur="21s" repeatCount="indefinite" begin="11s" />
                </circle>

                {/* Far right nodes */}
                <circle cx="1500" cy="90" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="15s" repeatCount="indefinite" begin="7s" />
                  <animate attributeName="r" values="3;5;3" dur="18s" repeatCount="indefinite" begin="7s" />
                </circle>
                <circle cx="1580" cy="180" r="3" fill="#3B82F6" style={{ opacity: "0.5" }}>
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="13s"
                  />
                  <animate attributeName="r" values="2;4;2" dur="23s" repeatCount="indefinite" begin="13s" />
                </circle>
                <circle cx="1650" cy="120" r="4" fill="#1D4ED8" style={{ opacity: "0.6" }}>
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="17s"
                    repeatCount="indefinite"
                    begin="15s"
                  />
                  <animate attributeName="r" values="3;5;3" dur="20s" repeatCount="indefinite" begin="15s" />
                </circle>
              </g>

              {/* Middle Layer - More distributed nodes */}
              <g className="middle-layer-normal">
                {/* Left middle */}
                <circle cx="100" cy="350" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="11s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="r" values="3;5;3" dur="14s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="200" cy="380" r="3" fill="#1D4ED8" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="13s" repeatCount="indefinite" begin="3s" />
                  <animate attributeName="r" values="2;4;2" dur="16s" repeatCount="indefinite" begin="3s" />
                </circle>
                <circle cx="150" cy="420" r="4" fill="#3B82F6" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="15s" repeatCount="indefinite" begin="5s" />
                  <animate attributeName="r" values="3;5;3" dur="18s" repeatCount="indefinite" begin="5s" />
                </circle>

                {/* Center middle */}
                <circle cx="350" cy="320" r="5" fill="#1D4ED8" style={{ opacity: "0.7" }}>
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="13s" repeatCount="indefinite" begin="3s" />
                  <animate attributeName="r" values="4;6;4" dur="16s" repeatCount="indefinite" begin="3s" />
                </circle>
                <circle cx="450" cy="380" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="10s" repeatCount="indefinite" begin="6s" />
                  <animate attributeName="r" values="3;5;3" dur="13s" repeatCount="indefinite" begin="6s" />
                </circle>
                <circle cx="550" cy="340" r="3" fill="#3B82F6" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="17s" repeatCount="indefinite" begin="8s" />
                  <animate attributeName="r" values="2;4;2" dur="20s" repeatCount="indefinite" begin="8s" />
                </circle>
                <circle cx="650" cy="400" r="4" fill="#1D4ED8" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="12s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="r" values="3;5;3" dur="15s" repeatCount="indefinite" begin="2s" />
                </circle>

                {/* Right middle */}
                <circle cx="750" cy="360" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="14s" repeatCount="indefinite" begin="4s" />
                  <animate attributeName="r" values="3;5;3" dur="17s" repeatCount="indefinite" begin="4s" />
                </circle>
                <circle cx="850" cy="320" r="3" fill="#3B82F6" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="16s" repeatCount="indefinite" begin="6s" />
                  <animate attributeName="r" values="2;4;2" dur="19s" repeatCount="indefinite" begin="6s" />
                </circle>

                {/* Suspected middle node */}
                <circle
                  cx="1270"
                  cy="440"
                  r="7"
                  fill="#DC2626"
                  style={{ opacity: "0.8", filter: "drop-shadow(0 0 5px #DC2626)" }}
                >
                  <animate attributeName="opacity" values="0.6;1.0;0.6" dur="7s" repeatCount="indefinite" begin="5s" />
                  <animate attributeName="r" values="6;8;6" dur="9s" repeatCount="indefinite" begin="5s" />
                </circle>

                {/* Far right middle */}
                <circle cx="1450" cy="340" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="9s" repeatCount="indefinite" begin="6s" />
                  <animate attributeName="r" values="3;5;3" dur="12s" repeatCount="indefinite" begin="6s" />
                </circle>
                <circle cx="1550" cy="380" r="3" fill="#1D4ED8" style={{ opacity: "0.5" }}>
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur="18s"
                    repeatCount="indefinite"
                    begin="10s"
                  />
                  <animate attributeName="r" values="2;4;2" dur="21s" repeatCount="indefinite" begin="10s" />
                </circle>
              </g>

              {/* Bottom Layer - Additional nodes */}
              <g className="bottom-layer-normal">
                <circle cx="120" cy="500" r="3" fill="#3B82F6" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="19s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="r" values="2;4;2" dur="22s" repeatCount="indefinite" begin="2s" />
                </circle>
                <circle cx="280" cy="480" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="16s" repeatCount="indefinite" begin="4s" />
                  <animate attributeName="r" values="3;5;3" dur="19s" repeatCount="indefinite" begin="4s" />
                </circle>
                <circle cx="420" cy="520" r="3" fill="#1D4ED8" style={{ opacity: "0.5" }}>
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="21s" repeatCount="indefinite" begin="6s" />
                  <animate attributeName="r" values="2;4;2" dur="24s" repeatCount="indefinite" begin="6s" />
                </circle>
                <circle cx="580" cy="490" r="4" fill="#3B82F6" style={{ opacity: "0.6" }}>
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="13s" repeatCount="indefinite" begin="8s" />
                  <animate attributeName="r" values="3;5;3" dur="16s" repeatCount="indefinite" begin="8s" />
                </circle>
                <circle cx="720" cy="510" r="3" fill="#60A5FA" style={{ opacity: "0.5" }}>
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur="17s"
                    repeatCount="indefinite"
                    begin="10s"
                  />
                  <animate attributeName="r" values="2;4;2" dur="20s" repeatCount="indefinite" begin="10s" />
                </circle>
                <circle cx="880" cy="480" r="4" fill="#1D4ED8" style={{ opacity: "0.6" }}>
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="14s"
                    repeatCount="indefinite"
                    begin="12s"
                  />
                  <animate attributeName="r" values="3;5;3" dur="17s" repeatCount="indefinite" begin="12s" />
                </circle>
                <circle cx="1020" cy="520" r="3" fill="#3B82F6" style={{ opacity: "0.5" }}>
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur="20s"
                    repeatCount="indefinite"
                    begin="14s"
                  />
                  <animate attributeName="r" values="2;4;2" dur="23s" repeatCount="indefinite" begin="14s" />
                </circle>
                <circle cx="1180" cy="490" r="4" fill="#60A5FA" style={{ opacity: "0.6" }}>
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="11s"
                    repeatCount="indefinite"
                    begin="16s"
                  />
                  <animate attributeName="r" values="3;5;3" dur="14s" repeatCount="indefinite" begin="16s" />
                </circle>
                <circle cx="1320" cy="510" r="3" fill="#1D4ED8" style={{ opacity: "0.5" }}>
                  <animate
                    attributeName="opacity"
                    values="0.3;0.7;0.3"
                    dur="18s"
                    repeatCount="indefinite"
                    begin="18s"
                  />
                  <animate attributeName="r" values="2;4;2" dur="21s" repeatCount="indefinite" begin="18s" />
                </circle>
                <circle cx="1480" cy="480" r="4" fill="#3B82F6" style={{ opacity: "0.6" }}>
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="15s"
                    repeatCount="indefinite"
                    begin="20s"
                  />
                  <animate attributeName="r" values="3;5;3" dur="18s" repeatCount="indefinite" begin="20s" />
                </circle>
              </g>

              {/* Subtle Connection Lines */}
              <g className="connection-lines opacity-5">
                {/* Horizontal connections */}
                <line x1="150" y1="80" x2="300" y2="100" stroke="#3B82F6" strokeWidth="0.5">
                  <animate attributeName="opacity" values="0.05;0.15;0.05" dur="20s" repeatCount="indefinite" />
                </line>
                <line x1="380" y1="160" x2="580" y2="150" stroke="#60A5FA" strokeWidth="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.05;0.15;0.05"
                    dur="25s"
                    repeatCount="indefinite"
                    begin="3s"
                  />
                </line>
                <line x1="720" y1="120" x2="850" y2="220" stroke="#1D4ED8" strokeWidth="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.05;0.15;0.05"
                    dur="18s"
                    repeatCount="indefinite"
                    begin="5s"
                  />
                </line>
                <line x1="1200" y1="100" x2="1400" y2="140" stroke="#3B82F6" strokeWidth="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.05;0.15;0.05"
                    dur="22s"
                    repeatCount="indefinite"
                    begin="7s"
                  />
                </line>

                {/* Vertical connections */}
                <line x1="350" y1="320" x2="280" y2="480" stroke="#60A5FA" strokeWidth="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.05;0.15;0.05"
                    dur="30s"
                    repeatCount="indefinite"
                    begin="2s"
                  />
                </line>
                <line x1="650" y1="400" x2="720" y2="510" stroke="#1D4ED8" strokeWidth="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.05;0.15;0.05"
                    dur="28s"
                    repeatCount="indefinite"
                    begin="4s"
                  />
                </line>

                {/* Suspected connections - slightly more visible */}
                <line x1="850" y1="220" x2="1270" y2="440" stroke="#EF4444" strokeWidth="1" opacity="0.1">
                  <animate
                    attributeName="opacity"
                    values="0.05;0.2;0.05"
                    dur="12s"
                    repeatCount="indefinite"
                    begin="3s"
                  />
                </line>
                <line x1="1100" y1="160" x2="1270" y2="440" stroke="#DC2626" strokeWidth="1" opacity="0.1">
                  <animate
                    attributeName="opacity"
                    values="0.05;0.2;0.05"
                    dur="15s"
                    repeatCount="indefinite"
                    begin="6s"
                  />
                </line>
              </g>

              {/* Gentle Data Packets - More distributed */}
              <g className="data-packets">
                <circle r="1.5" fill="#60A5FA" className="opacity-30">
                  <animateMotion
                    dur="25s"
                    repeatCount="indefinite"
                    path="M100,80 Q400,200 800,340 Q1200,400 1500,300"
                  />
                  <animate attributeName="opacity" values="0;0.4;0.4;0" dur="25s" repeatCount="indefinite" />
                </circle>
                <circle r="2" fill="#3B82F6" className="opacity-25">
                  <animateMotion
                    dur="30s"
                    repeatCount="indefinite"
                    path="M1600,100 Q1200,250 800,180 Q400,350 100,450"
                  />
                  <animate attributeName="opacity" values="0;0.3;0.3;0" dur="30s" repeatCount="indefinite" />
                </circle>
                <circle r="1.5" fill="#1D4ED8" className="opacity-35">
                  <animateMotion
                    dur="20s"
                    repeatCount="indefinite"
                    path="M300,500 Q600,300 900,200 Q1200,150 1500,400"
                  />
                  <animate attributeName="opacity" values="0;0.4;0.4;0" dur="20s" repeatCount="indefinite" />
                </circle>

                {/* Suspected data packets */}
                <circle r="2.5" fill="#EF4444" className="opacity-40">
                  <animateMotion dur="15s" repeatCount="indefinite" path="M850,220 Q1100,350 1270,440" />
                  <animate attributeName="opacity" values="0;0.5;0.5;0" dur="15s" repeatCount="indefinite" />
                </circle>
                <circle r="2" fill="#DC2626" className="opacity-35">
                  <animateMotion
                    dur="18s"
                    repeatCount="indefinite"
                    path="M1100,160 Q950,300 850,220 Q1150,380 1270,440"
                  />
                  <animate attributeName="opacity" values="0;0.4;0.4;0" dur="18s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Melihat <span className="text-blue-500">Tak Terlihat</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Garuda Eye adalah platform intelijen jaringan berbasis AI yang membongkar kejahatan keuangan sistemik dari
              akarnya.
            </h2>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 text-lg">
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("problem")}
                className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Section 4: The Problem Section */}
      <section id="problem" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Problem Section Network Animation */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {/* Chaotic Network Pattern - Representing the Problem */}
            <g className="chaotic-network">
              {/* Scattered nodes representing fragmented detection */}
              <circle cx="100" cy="100" r="3" fill="#EF4444" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="150" r="4" fill="#F59E0B" opacity="0.5">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="500" cy="80" r="3" fill="#EF4444" opacity="0.7">
                <animate
                  attributeName="opacity"
                  values="0.4;0.9;0.4"
                  dur="2.5s"
                  repeatCount="indefinite"
                  begin="0.5s"
                />
              </circle>
              <circle cx="700" cy="200" r="5" fill="#DC2626" opacity="0.6">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.5s" repeatCount="indefinite" begin="2s" />
              </circle>
              <circle cx="900" cy="120" r="3" fill="#F59E0B" opacity="0.5">
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur="4.5s"
                  repeatCount="indefinite"
                  begin="1.5s"
                />
              </circle>
              <circle cx="1100" cy="180" r="4" fill="#EF4444" opacity="0.7">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="0.8s" />
              </circle>

              {/* Broken/Missing connections */}
              <line
                x1="100"
                y1="100"
                x2="300"
                y2="150"
                stroke="#EF4444"
                strokeWidth="1"
                opacity="0.3"
                strokeDasharray="5,5"
              >
                <animate attributeName="opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" />
              </line>
              <line
                x1="500"
                y1="80"
                x2="700"
                y2="200"
                stroke="#F59E0B"
                strokeWidth="1"
                opacity="0.2"
                strokeDasharray="3,7"
              >
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="8s" repeatCount="indefinite" begin="2s" />
              </line>

              {/* Floating threat indicators */}
              <circle r="2" fill="#DC2626" opacity="0.8">
                <animateMotion dur="12s" repeatCount="indefinite" path="M50,50 Q400,100 800,150 Q1000,200 1150,100" />
                <animate attributeName="opacity" values="0;0.8;0" dur="12s" repeatCount="indefinite" />
              </circle>
              <circle r="1.5" fill="#F59E0B" opacity="0.6">
                <animateMotion dur="15s" repeatCount="indefinite" path="M1150,50 Q800,120 400,180 Q200,100 50,150" />
                <animate attributeName="opacity" values="0;0.6;0" dur="15s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              {/* Tagline */}
              <div className="text-blue-500 text-sm font-semibold tracking-wider uppercase">THE NATIONAL CRISIS</div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Perang Asimetris Melawan <span className="text-blue-500">Epidemi Judi Online</span>
              </h2>

              {/* Body Text */}
              <p className="text-xl text-gray-300 leading-relaxed">
                Indonesia menghadapi krisis sosial-ekonomi akibat judi online yang kini beroperasi sebagai jaringan
                terdesentralisasi yang sangat adaptif. Sistem pertahanan konvensional, meskipun kuat, kesulitan melihat
                ancaman yang bergerak secara kolektif di bawah radar.
              </p>

              {/* Key Statistics */}
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <Card className="bg-gray-800 border-gray-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">{">Rp 1.200"}</div>
                    <div className="text-sm text-gray-400">Triliun</div>
                    <div className="text-xs text-gray-500 mt-1">Proyeksi Kerugian Tahunan</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-500 mb-2">{">8.8"}</div>
                    <div className="text-sm text-gray-400">Juta</div>
                    <div className="text-xs text-gray-500 mt-1">Warga Terjerat</div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-500 mb-2">Network</div>
                    <div className="text-sm text-gray-400">Centric</div>
                    <div className="text-xs text-gray-500 mt-1">Taktik Musuh Baru</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/online-gambling-network.png"
                  alt="Complex Network Visualization of Online Gambling Criminal Networks"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  priority
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=400&text=Network+Visualization"
                  }}
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Solution Section */}
      <section className="py-20 bg-gray-800/30 relative overflow-hidden">
        {/* Solution Section Network Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {/* Organized Network Pattern - Representing the Solution */}
            <g className="organized-network">
              {/* Central hub representing Garuda Eye */}
              <circle cx="600" cy="300" r="8" fill="#3B82F6" opacity="0.8">
                <animate attributeName="r" values="6;10;6" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
              </circle>

              {/* Surrounding nodes in organized pattern */}
              <circle cx="450" cy="200" r="4" fill="#60A5FA" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="750" cy="200" r="4" fill="#60A5FA" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="450" cy="400" r="4" fill="#60A5FA" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle cx="750" cy="400" r="4" fill="#60A5FA" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" begin="2s" />
              </circle>

              {/* Outer ring */}
              <circle cx="300" cy="150" r="3" fill="#1D4ED8" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" begin="0.2s" />
              </circle>
              <circle cx="900" cy="150" r="3" fill="#1D4ED8" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" begin="0.7s" />
              </circle>
              <circle cx="300" cy="450" r="3" fill="#1D4ED8" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" begin="1.2s" />
              </circle>
              <circle cx="900" cy="450" r="3" fill="#1D4ED8" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" begin="1.7s" />
              </circle>

              {/* Organized connections */}
              <line x1="600" y1="300" x2="450" y2="200" stroke="#3B82F6" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="600" y1="300" x2="750" y2="200" stroke="#3B82F6" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" begin="0.5s" />
              </line>
              <line x1="600" y1="300" x2="450" y2="400" stroke="#3B82F6" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" begin="1s" />
              </line>
              <line x1="600" y1="300" x2="750" y2="400" stroke="#3B82F6" strokeWidth="1" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="5s" repeatCount="indefinite" begin="1.5s" />
              </line>

              {/* Data flow animation */}
              <circle r="2" fill="#60A5FA" opacity="0.7">
                <animateMotion dur="8s" repeatCount="indefinite" path="M300,150 L450,200 L600,300 L750,400 L900,450" />
                <animate attributeName="opacity" values="0;0.8;0" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle r="2" fill="#1D4ED8" opacity="0.6">
                <animateMotion dur="10s" repeatCount="indefinite" path="M900,150 L750,200 L600,300 L450,400 L300,450" />
                <animate attributeName="opacity" values="0;0.7;0" dur="10s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Tagline */}
            <div className="text-blue-500 text-sm font-semibold tracking-wider uppercase">OUR SOLUTION</div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Mengubah Paradigma: Dari <span className="text-blue-500">Transaction Monitoring</span> ke{" "}
              <span className="text-blue-500">Network Intelligence</span>
            </h2>

            {/* Body Text */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Garuda Eye tidak menggantikan sistem yang ada; kami melengkapinya. Platform kami adalah lapisan intelijen
              strategis yang mengubah jutaan data transaksi mentah menjadi sebuah peta intelijen yang koheren,
              memungkinkan Anda untuk melihat keseluruhan struktur komando sindikat kriminal.
            </p>

            {/* Visual Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 pt-12">
              {/* Raw Data */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-gray-400 text-sm font-medium">Raw Data</div>
                </div>
                <div className="text-gray-400 text-sm">Jutaan Transaksi</div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-blue-500 rotate-90 md:rotate-0" />

              {/* Garuda Eye AI Engine */}
              <div className="text-center">
                <div className="w-40 h-32 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-white text-sm font-bold text-center">
                    Garuda Eye
                    <br />
                    AI Engine
                  </div>
                </div>
                <div className="text-blue-400 text-sm">Network Intelligence</div>
              </div>

              {/* Arrow */}
              <ArrowRight className="w-8 h-8 text-blue-500 rotate-90 md:rotate-0" />

              {/* Intelligence Map */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-12 h-12 text-blue-400" />
                </div>
                <div className="text-gray-400 text-sm">Intelligence Map</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How It Works Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* How It Works Network Animation */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {/* Three-step process visualization */}
            <g className="process-network">
              {/* Step 1: Graph Construction */}
              <g className="step-1">
                <circle cx="200" cy="300" r="6" fill="#3B82F6" opacity="0.7">
                  <animate attributeName="r" values="4;8;4" dur="6s" repeatCount="indefinite" />
                </circle>
                {/* Nodes appearing around step 1 */}
                <circle cx="150" cy="250" r="3" fill="#60A5FA" opacity="0.5">
                  <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" begin="0s" />
                </circle>
                <circle cx="250" cy="250" r="3" fill="#60A5FA" opacity="0.5">
                  <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="150" cy="350" r="3" fill="#60A5FA" opacity="0.5">
                  <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="250" cy="350" r="3" fill="#60A5FA" opacity="0.5">
                  <animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
                </circle>
              </g>

              {/* Step 2: AI Analysis */}
              <g className="step-2">
                <circle cx="600" cy="300" r="6" fill="#1D4ED8" opacity="0.8">
                  <animate attributeName="r" values="4;8;4" dur="4s" repeatCount="indefinite" begin="2s" />
                </circle>
                {/* Brain-like connections */}
                <circle cx="550" cy="250" r="3" fill="#3B82F6" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="2s" />
                </circle>
                <circle cx="650" cy="250" r="3" fill="#3B82F6" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="2.2s"
                  />
                </circle>
                <circle cx="550" cy="350" r="3" fill="#3B82F6" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="2.4s"
                  />
                </circle>
                <circle cx="650" cy="350" r="3" fill="#3B82F6" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="2s"
                    repeatCount="indefinite"
                    begin="2.6s"
                  />
                </circle>
              </g>

              {/* Step 3: Intelligence Output */}
              <g className="step-3">
                <circle cx="1000" cy="300" r="6" fill="#60A5FA" opacity="0.9">
                  <animate attributeName="r" values="4;8;4" dur="5s" repeatCount="indefinite" begin="4s" />
                </circle>
                {/* Target indicators */}
                <circle cx="950" cy="250" r="4" fill="#EF4444" opacity="0.7">
                  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite" begin="4s" />
                </circle>
                <circle cx="1050" cy="350" r="3" fill="#10B981" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                    begin="4.5s"
                  />
                </circle>
              </g>

              {/* Process flow lines */}
              <line x1="250" y1="300" x2="550" y2="300" stroke="#3B82F6" strokeWidth="2" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="8s" repeatCount="indefinite" begin="1s" />
              </line>
              <line x1="650" y1="300" x2="950" y2="300" stroke="#1D4ED8" strokeWidth="2" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="8s" repeatCount="indefinite" begin="3s" />
              </line>

              {/* Data flow particles */}
              <circle r="2" fill="#60A5FA" opacity="0.8">
                <animateMotion dur="12s" repeatCount="indefinite" path="M200,300 L600,300 L1000,300" />
                <animate attributeName="opacity" values="0;0.8;0" dur="12s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Three Steps to <span className="text-blue-500">Uncover the Truth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="bg-gray-800 border-gray-700 text-center group hover:bg-gray-750 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Network className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-white">1. Konstruksi Graf</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  Sistem secara otomatis mengubah jutaan transaksi menjadi sebuah peta jaringan yang hidup.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="bg-gray-800 border-gray-700 text-center group hover:bg-gray-750 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <BrainCircuit className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-white">2. Analisis AI GNN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  AI kami menganalisis topologi dan konteks jaringan untuk menemukan klaster anomali dan target bernilai
                  tinggi.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="bg-gray-800 border-gray-700 text-center group hover:bg-gray-750 transition-colors">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-white">3. Intelijen Siap Aksi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  Hasilnya adalah daftar target terprioritaskan dan visualisasi yang jelas, siap untuk ditindaklanjuti.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Value Proposition Section */}
      <section id="value-proposition" className="py-20 bg-gray-800/30 relative overflow-hidden">
        {/* Value Proposition Network Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {/* Multi-layered benefit visualization */}
            <g className="benefits-network">
              {/* Financial Institutions Layer */}
              <g className="fintech-layer">
                <circle cx="200" cy="150" r="5" fill="#10B981" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="100" r="3" fill="#34D399" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="5s"
                    repeatCount="indefinite"
                    begin="0.5s"
                  />
                </circle>
                <circle cx="250" cy="100" r="3" fill="#34D399" opacity="0.6">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" begin="1s" />
                </circle>
              </g>

              {/* Regulators Layer */}
              <g className="regulator-layer">
                <circle cx="600" cy="150" r="5" fill="#3B82F6" opacity="0.8">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="550" cy="100" r="3" fill="#60A5FA" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="4.5s"
                    repeatCount="indefinite"
                    begin="1.5s"
                  />
                </circle>
                <circle cx="650" cy="100" r="3" fill="#60A5FA" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="4.5s"
                    repeatCount="indefinite"
                    begin="2s"
                  />
                </circle>
              </g>

              {/* National Security Layer */}
              <g className="security-layer">
                <circle cx="1000" cy="150" r="5" fill="#8B5CF6" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0.5;0.9;0.5"
                    dur="4.5s"
                    repeatCount="indefinite"
                    begin="2s"
                  />
                </circle>
                <circle cx="950" cy="100" r="3" fill="#A78BFA" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="5.5s"
                    repeatCount="indefinite"
                    begin="2.5s"
                  />
                </circle>
                <circle cx="1050" cy="100" r="3" fill="#A78BFA" opacity="0.6">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.8;0.4"
                    dur="5.5s"
                    repeatCount="indefinite"
                    begin="3s"
                  />
                </circle>
              </g>

              {/* Interconnections */}
              <line x1="200" y1="150" x2="600" y2="150" stroke="#10B981" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="600" y1="150" x2="1000" y2="150" stroke="#3B82F6" strokeWidth="1" opacity="0.3">
                <animate attributeName="opacity" values="0.1;0.5;0.1" dur="6s" repeatCount="indefinite" begin="2s" />
              </line>

              {/* Value flow animation */}
              <circle r="2" fill="#F59E0B" opacity="0.8">
                <animateMotion dur="10s" repeatCount="indefinite" path="M200,150 Q400,100 600,150 Q800,100 1000,150" />
                <animate attributeName="opacity" values="0;0.8;0" dur="10s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Visual */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700 overflow-hidden">
                <Image
                  src="/images/garuda-eye-dashboard.png"
                  alt="Garuda Eye Dashboard Interface showing AML/CFT Network Intelligence"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                  priority
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=600&width=800&text=Dashboard+Interface"
                  }}
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl -z-10" />
            </div>

            {/* Right Column - Text */}
            <div className="space-y-8">
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                A Quantum Leap in <span className="text-blue-500">AML/CFT Capabilities</span>
              </h2>

              {/* Benefits List */}
              <div className="space-y-8">
                {/* For Financial Institutions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">For Financial Institutions (RegTech)</h3>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Kurangi false positives secara drastis, hemat ribuan jam kerja analis, dan tingkatkan kualitas
                      pelaporan ke regulator.
                    </p>
                  </div>
                </div>

                {/* For Regulators */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">For Regulators (SupTech)</h3>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Dapatkan pengawasan risiko sistemik secara makro, dan berikan intelijen presisi kepada aparat
                      penegak hukum untuk operasi yang efektif.
                    </p>
                  </div>
                </div>

                {/* For National Security */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-400">For National Security</h3>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Tutup celah antara analisis on-chain (blockchain) dan off-chain (perbankan) untuk pertahanan
                      ekonomi digital yang komprehensif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Call-to-Action Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* CTA Network Animation */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            {/* Partnership/collaboration network */}
            <g className="partnership-network">
              {/* Central collaboration hub */}
              <circle cx="600" cy="300" r="10" fill="#3B82F6" opacity="0.8">
                <animate attributeName="r" values="8;12;8" dur="5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
              </circle>

              {/* Partner nodes */}
              <circle cx="400" cy="200" r="6" fill="#60A5FA" opacity="0.7">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="800" cy="200" r="6" fill="#60A5FA" opacity="0.7">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="400" cy="400" r="6" fill="#60A5FA" opacity="0.7">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle cx="800" cy="400" r="6" fill="#60A5FA" opacity="0.7">
                <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" begin="2s" />
              </circle>

              {/* Collaboration lines */}
              <line x1="600" y1="300" x2="400" y2="200" stroke="#3B82F6" strokeWidth="2" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="600" y1="300" x2="800" y2="200" stroke="#3B82F6" strokeWidth="2" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" begin="1s" />
              </line>
              <line x1="600" y1="300" x2="400" y2="400" stroke="#3B82F6" strokeWidth="2" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" begin="2s" />
              </line>
              <line x1="600" y1="300" x2="800" y2="400" stroke="#3B82F6" strokeWidth="2" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="6s" repeatCount="indefinite" begin="3s" />
              </line>

              {/* Success indicators */}
              <circle r="3" fill="#10B981" opacity="0.8">
                <animateMotion dur="8s" repeatCount="indefinite" path="M400,200 L600,300 L800,400" />
                <animate attributeName="opacity" values="0;0.8;0" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle r="3" fill="#F59E0B" opacity="0.7">
                <animateMotion dur="10s" repeatCount="indefinite" path="M800,200 L600,300 L400,400" />
                <animate attributeName="opacity" values="0;0.7;0" dur="10s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Let's Build Indonesia's <span className="text-blue-500">National Financial Shield</span>, Together
            </h2>

            {/* Body Text */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Garuda Eye adalah lebih dari sekadar teknologi; ini adalah kemitraan. Kami mengundang Anda untuk menjadi
              bagian dari masa depan keamanan finansial Indonesia.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-12 py-6 text-xl rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-16 relative overflow-hidden">
        {/* Footer Network Animation */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
            {/* Subtle footer network */}
            <g className="footer-network">
              {/* Minimal connection pattern */}
              <circle cx="100" cy="100" r="2" fill="#3B82F6" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="150" r="2" fill="#60A5FA" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="10s" repeatCount="indefinite" begin="2s" />
              </circle>
              <circle cx="500" cy="120" r="2" fill="#1D4ED8" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="12s" repeatCount="indefinite" begin="4s" />
              </circle>
              <circle cx="700" cy="180" r="2" fill="#3B82F6" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="9s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="900" cy="140" r="2" fill="#60A5FA" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="11s" repeatCount="indefinite" begin="3s" />
              </circle>
              <circle cx="1100" cy="160" r="2" fill="#1D4ED8" opacity="0.4">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="13s" repeatCount="indefinite" begin="5s" />
              </circle>

              {/* Subtle connecting lines */}
              <line x1="100" y1="100" x2="300" y2="150" stroke="#3B82F6" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="15s" repeatCount="indefinite" />
              </line>
              <line x1="500" y1="120" x2="700" y2="180" stroke="#60A5FA" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="18s" repeatCount="indefinite" begin="3s" />
              </line>
              <line x1="900" y1="140" x2="1100" y2="160" stroke="#1D4ED8" strokeWidth="0.5" opacity="0.2">
                <animate attributeName="opacity" values="0.1;0.3;0.1" dur="20s" repeatCount="indefinite" begin="6s" />
              </line>
            </g>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1: Logo and Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                    <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" opacity="0.7" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">Garuda Eye</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Platform intelijen jaringan berbasis AI untuk keamanan finansial Indonesia yang komprehensif dan
                berkelanjutan.
              </p>
              <div className="text-xs text-gray-500">
                © 2025 Garuda Eye - PT Prometheus Berbagi Teknologi.
                <br />
                All Rights Reserved.
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold">Navigation</h4>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection("solution")}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Solution
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Column 3: Legal */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold">Legal</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>

            {/* Column 4: Social Media */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center text-gray-500 text-sm">
              Membangun masa depan keamanan finansial Indonesia bersama-sama.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
