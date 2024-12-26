# React Counter Application

A Single Page Application (SPA) built with React that demonstrates global state management using different approaches.

## Features

- Multiple pages with navigation
- User information display (username and last login)
- Global counter implementation using:
    - React Context
    - Jotai
    - React Query
- Responsive design
- TypeScript support

## Tech Stack

- React 18
- TypeScript
- React Router v6
- React Query (TanStack Query)
- Jotai for atomic state management
- CSS Variables for theming
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Israel-Kli/anodot-react-task

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/   # Reusable UI components
├── context/      # React Context definitions
├── hooks/        # Custom React hooks
├── layouts/      # Layout components
├── pages/        # Page components
└── types/        # TypeScript type definitions
```

## Implementation Details

### State Management

The project implements three different approaches to global state management:

1. **React Context**: Traditional context-based state management
2. **Jotai**: Atomic state management with minimal re-renders
3. **React Query**: Modern cache-based state management with persistence

#### Why Three Different Implementations?

Each state management solution has its strengths:

- **React Context**: Simple, built-in solution for component tree state sharing
- **Jotai**: Atomic updates with minimal re-renders, great for fine-grained state control
- **React Query**: Excellent for server state management with caching

### Responsive Design

- Mobile-first approach
- Responsive grid layout
- Flexible navigation menu

### TypeScript Integration

- Strict type checking enabled
- Type definitions for all components
- CSS module type declarations

## Best Practices

- Component composition
- Custom hooks for logic reuse
- Consistent file structure
- CSS variables for theming
- Responsive design patterns

## State Management Comparison

### React Context
- Pros: Built-in, simple API
- Use case: Component tree state sharing

### Jotai
- Pros: Atomic updates, minimal re-renders
- Use case: Fine-grained state management

### React Query
- Pros: Built-in caching, server state sync
- Use case: Server-state management
