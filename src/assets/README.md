# Assets Folder

This folder contains external files used in the portfolio website.

## How to Add Your Files

1. **Profile Image**: Add your profile photo here (e.g., `profile.jpg`, `profile.png`)
2. **Project Images**: Add project screenshots or mockups
3. **Other Assets**: Logos, icons, certificates, etc.

## Supported File Types

- Images: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
- Documents: `.pdf`

## Usage in Code

Import your assets like this:

```tsx
import profileImage from './assets/profile.jpg';
import projectImage from './assets/project-screenshot.png';

// Then use in your component:
<img src={profileImage} alt="Profile" />
```
