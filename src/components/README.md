# Border Collie World - Components

This directory contains reusable React components used throughout the Border Collie World application.

## Component Overview

### Layout Components

- `Navbar.tsx`: Responsive navigation bar with mobile menu support
- `Footer.tsx`: Site footer with links and copyright information

### Home Page Components

- `Hero.tsx`: Animated hero section for the homepage with call-to-action buttons
- `FeatureSection.tsx`: Grid display of feature cards highlighting different sections of the site

### Interactive Components

- `CatchGame.tsx`: Interactive game component where users help a Border Collie catch frisbees
- `MemoryGame.tsx`: Card matching game (placeholder for future implementation)
- `HerdingGame.tsx`: Sheep herding game (placeholder for future implementation)

## Implementation Details

### Animations

Most components use Framer Motion for animations:
- Page transitions
- Hover effects
- Staggered reveals
- Interactive game elements

### State Management

Components use React hooks for state management:
- `useState` for component state
- `useEffect` for side effects and timers
- `useRef` for DOM references

### Styling

All components use Tailwind CSS classes for styling:
- Responsive design with mobile-first approach
- Custom utility classes for cartoon-style elements
- Custom animation classes

### Accessibility

Efforts were made to ensure components are accessible:
- Semantic HTML elements
- ARIA attributes where appropriate
- Keyboard navigation support
- Focus management for interactive elements

## Usage Example

```jsx
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeatureSection />
    </div>
  );
}
```

## Future Improvements

- Add unit tests for components
- Implement more interactive game components
- Create reusable UI component library
- Add TypeScript prop validations and documentation 