# Border Collie World - App Structure

This directory contains the main pages and components for the Border Collie World web application using Next.js App Router.

## Directory Structure

- `layout.tsx`: Main layout component that wraps all pages with common elements like the navbar and footer
- `page.tsx`: Home page with hero section and feature highlights
- `/breed-info`: Border Collie breed information page
- `/training`: Training tips for Border Collies
- `/gallery`: Photo gallery with filter categories
- `/quiz`: Interactive personality quiz
- `/games`: Interactive games including "Catch the Frisbee"
- `/adoption`: Adoption information and sample profiles

## Implementation Notes

### App Router Structure

We're using Next.js App Router which provides:
- File-based routing
- Server and client components
- Built-in data fetching
- Layout nesting

### Client-Side Components

Most pages use the 'use client' directive because they:
- Use React hooks for state management
- Include interactive elements
- Implement Framer Motion animations

### Styling

- We use Tailwind CSS for styling with custom utility classes
- Custom classes like `cartoon-border` are defined in globals.css
- The design follows a playful, cartoon-like aesthetic with vibrant colors

### Data Management

- Currently, all data is stored as static arrays in the component files
- In a production app, this would be replaced with API calls or a CMS integration
- Placeholder images are used instead of real Border Collie photos

### Future Improvements

- Add error boundaries and loading states
- Implement server-side components where appropriate
- Add accessibility improvements
- Implement proper SEO metadata for each page 