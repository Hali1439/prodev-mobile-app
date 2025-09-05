# ProDev Mobile App

A series of progressive React Native (Expo) projects designed to master **navigation patterns** and **modern styling workflows** in mobile app development.  
This repository demonstrates the implementation of **Stack Navigation**, **Tab Navigation**, and **TailwindCSS styling via NativeWind**.

---

## 📂 Repository Structure

- `prodev-mobile-app-0x04` → Stack Navigation (multi-screen app)
- `prodev-mobile-app-0x05` → Tab Navigation (home sections + components)
- `prodev-mobile-app-0x06` → NativeWind/TailwindCSS styling

---

## 🚀 Task 0 — Navigation using Stack Navigation Patterns  
**Directory:** `prodev-mobile-app-0x04`

### 🎯 Objectives
- Implement **multi-screen navigation** using the Stack pattern.
- Build reusable styling structure for clean code maintenance.
- Introduce constants for consistent asset management.

### 🛠 Instructions
1. **Setup Project**
   ```bash
   npx create-expo-app@latest prodev-mobile-app-0x04
   cd prodev-mobile-app-0x04
   npm run reset-project
Place required assets in assets/images.

Screens

index.tsx (landing page)

join.tsx (sign up)

signin.tsx (sign in)

Styles & Constants

styles/_mainstyle.ts → primary styling

styles/_joinstyle.ts → form + button design

constants/index.ts → asset references

Navigation Layout

Configured via app/_layout.tsx using Expo Router + Stack.

Run App

npx expo start

🚀 Task 1 — Navigation using Tabs Navigation Patterns

Directory: prodev-mobile-app-0x05

🎯 Objectives

Extend the app with Tab Navigation for improved usability.

Organize screens under (home) route group.

Implement reusable components (PropertyListing, PropertyListingCard).

Define TypeScript interfaces for structured props.

🛠 Instructions

Duplicate Project

cp -r prodev-mobile-app-0x04 prodev-mobile-app-0x05


Screens

app/(home)/index.tsx → Home screen with property listings

app/(home)/search.tsx

app/(home)/saved.tsx

app/(home)/inbox.tsx

app/(home)/profile.tsx

Navigation Layout

app/(home)/_layout.tsx configured with Expo Router Tabs.

Components

components/common/PropertyListingCard.tsx

components/PropertyListing/index.tsx

Data & Interfaces

interfaces/index.ts → TypeScript interfaces

constants/data.ts → sample dataset + filters

Run App

npx expo start

🚀 Task 2 — Styling with NativeWind (TailwindCSS)

Directory: prodev-mobile-app-0x06

🎯 Objectives

Introduce TailwindCSS utilities into React Native using NativeWind.

Refactor screens to reduce boilerplate styling.

Validate integration with Expo Router.

🛠 Instructions

Duplicate Project

cp -r prodev-mobile-app-0x05 prodev-mobile-app-0x06


Configuration

tailwind.config.js → Tailwind setup

nativewind-env.d.ts → type definitions

babel.config.js → include "nativewind/babel"

metro.config.js → Expo default (no transformers)

styles/global.css → global Tailwind directives

Profile Screen

app/(home)/profile.tsx updated with Tailwind classes.

Demonstrates use of className for rapid UI styling.

Run App

npx expo start

📱 Key Learnings

Stack Navigation: Ideal for linear, ordered screen transitions.

Tab Navigation: Best for organizing app sections with persistent navigation.

NativeWind (TailwindCSS): Reduces boilerplate, enforces design consistency, and accelerates UI prototyping.

📦 Tech Stack

Expo + React Native → Core mobile framework

Expo Router → File-based navigation

React Navigation → Stack & Tab patterns

TypeScript → Type safety & interface-driven props

NativeWind (TailwindCSS) → Utility-first styling

Vector Icons → @expo/vector-icons

🧪 Running the Apps

For each directory (0x04, 0x05, 0x06):

cd prodev-mobile-app-0x0X
npm install
npx expo start


Scan the QR code with Expo Go (iOS/Android) to test.

📁 File Overview

app/index.tsx → Landing/Home

app/join.tsx → Registration screen

app/signin.tsx → Authentication screen

app/(home)/... → Tab-based navigation screens

components/ → Reusable UI components

styles/ → Modularized styling

constants/ → Assets & datasets

interfaces/ → TypeScript definitions

